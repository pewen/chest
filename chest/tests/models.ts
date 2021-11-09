import { BaseModel, Metadata, Column } from '../src'

export class Province extends BaseModel<Province> {
  @Metadata({
    tableName: 'provincias',
    title: 'Provincias de Arg',
  })
  @Column({ index: true })
  name!: string

  @Column()
  isoCode!: string

  @Column({ nullable: true })
  abbreviation!: string
}

export class Earthquakes extends BaseModel<Earthquakes> {
  @Metadata({
    tableName: 'earthquakes',
  })
  @Column()
  date!: Date

  @Column()
  lat!: number

  @Column()
  lng!: number

  @Column()
  depth!: number

  @Column()
  magnitude!: number

  @Column()
  provinceId!: string
}
