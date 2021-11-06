import 'mocha'
import { expect } from 'chai'

import { spam } from '../src'

describe('This', () => {
  describe('should', () => {
    it('always pass', () => {
      expect(true).to.equal(true)
    })

    it('spam', () => {
      expect(spam()).to.equal(42)
    })
  })
})
