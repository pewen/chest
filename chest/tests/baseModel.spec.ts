import 'mocha'
import { expect } from 'chai'

import { Province } from './models'

describe('Create a model from class', () => {
  describe('Load Province model', () => {
    const nqn = new Province({
      name: 'Neuquén',
      isoCode: 'AR-Q',
      abbreviation: 'nqn',
    })

    it('table name', () => {
      expect(nqn.__tablename__).to.equal('provincias')
    })

    it('schema', () => {
      const schema = {
        $id: 'provincias',
        type: 'object',
        properties: {
          name: { type: 'string', index: true },
          isoCode: { type: 'string' },
          abbreviation: { type: 'string', nullable: true },
        },
        required: ['name', 'isoCode'],
        additionalProperties: false,
        title: 'Provincias de Arg',
      }

      expect(nqn.schema).to.eql(schema)
    })

    it('columns values', () => {
      expect(nqn.name).to.equal('Neuquén')
      expect(nqn.isoCode).to.equal('AR-Q')
      expect(nqn.abbreviation).to.equal('nqn')
    })

    it('throw error for missing required cols', () => {
      expect(() => new Province({})).to.throw(
        "must have required property 'name'"
      )
    })
  })
})
