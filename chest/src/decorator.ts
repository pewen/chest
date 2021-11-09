import { TableMetadata, ColumnMetadata } from './types'

export const Metadata = (config: TableMetadata): PropertyDecorator => {
  return (target, key: string | symbol) => {
    Reflect.defineMetadata('config', config, target)
  }
}

export const Column = (
  metadata?: Partial<ColumnMetadata>
): PropertyDecorator => {
  return (target, key: string | symbol) => {
    const type = Reflect.getMetadata('design:type', target, key)
    const columns: ColumnMetadata[] =
      Reflect.getOwnMetadata('columns', target) || []
    const hasColumn = columns.filter((col) => col.name === key).length > 0
    if (!hasColumn) {
      columns.push({
        name: key.toString(),
        type: type.name.toLowerCase(),
        ...metadata,
      } as ColumnMetadata)
    }

    Reflect.defineMetadata('columns', columns, target)
  }
}
