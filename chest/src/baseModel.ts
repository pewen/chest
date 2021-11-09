import Ajv from 'ajv'
import type { SchemaObject, ValidateFunction } from 'ajv/lib/types'

import type { TableMetadata, ColumnMetadata } from './types'

export class BaseModel<T> {
  __tablename__: string
  readonly schema: SchemaObject
  readonly validate: ValidateFunction

  constructor(data: Partial<T>) {
    const target = Object.getPrototypeOf(this)
    const config: TableMetadata = Reflect.getOwnMetadata('config', target)

    const properties: Record<string, Partial<ColumnMetadata>> = {}
    this.columns.forEach((column) => {
      const col: Partial<ColumnMetadata> = { ...column }
      delete col.name
      properties[column.name] = col
    })

    const schema: SchemaObject = {
      $id: config.tableName,
      type: 'object',
      properties,
      required: this.columns
        .filter((column) => !column.nullable)
        .map((column) => column.name),
      additionalProperties: false,
    }
    if (config.title) schema.title = config.title
    if (config.description) schema.description = config.description

    // Try load validator from Ajv cache
    let validate = ajv.getSchema(config.tableName)
    if (!validate) validate = ajv.compile<T>(schema)

    this.__tablename__ = config.tableName
    this.validate = validate
    this.schema = schema

    this.load(data)
  }

  get columns(): ColumnMetadata[] {
    const target = Object.getPrototypeOf(this)
    return Reflect.getOwnMetadata('columns', target)
  }

  load(data: Partial<T>): void {
    if (this.validate(data)) {
      Object.assign(this, data)
    } else {
      const messages = this.validate.errors
        ?.map((error) => error.message)
        .join('. ')
      throw new Error(messages)
    }
  }
}

const ajv = new Ajv()
ajv.addKeyword({
  keyword: 'index',
  schemaType: 'boolean',
})
