const { expect } = require('chai');
const createParser = require('../src');

describe('parser', () => {
  it('should parse empty object', () => {
    const parser = createParser();
    const expected = {};
    parser.feed('{}');
    expect(parser.results[0]).to.deep.equal(expected);
  })

  describe('should parse keys', () => {
    it('plain string', () => {
      const parser = createParser();
      const expected = { plain: 'test' };
      parser.feed(`{ plain: 'test' }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('single-quote string', () => {
      const parser = createParser();
      const expected = { 'single-quote': 'test' };
      parser.feed(`{ 'single-quote': 'test' }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('double-quote string', () => {
      const parser = createParser();
      const expected = { "double-quote": 'test' };
      parser.feed(`{ "double-quote": 'test' }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })
  })
})
