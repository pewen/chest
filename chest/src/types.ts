export interface TableMetadata {
  tableName: string
  title?: string
  description?: string
}

export interface ColumnMetadata {
  name: string
  type: string
  description?: string
  index?: boolean
  nullable?: boolean
  foreignKey?: string
}
