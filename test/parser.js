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
      const expected = { plain: { type: 'string' } };
      parser.feed(`{ plain: string }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('single-quote string', () => {
      const parser = createParser();
      const expected = { 'single-quote': { type: 'string' } };
      parser.feed(`{ 'single-quote': string }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('double-quote string', () => {
      const parser = createParser();
      const expected = { "double-quote": { type: 'string' } };
      parser.feed(`{ "double-quote": string }`);
      expect(parser.results[0]).to.deep.equal(expected);
    })
  })

  describe('should parse types', () => {
    it('plain type', () => {
      const parser = createParser();
      const expected = { key: { type: 'string' } };
      parser.feed('{ key: string }');
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('type from namespace', () => {
      const parser = createParser();
      const expected = { key: { type: 'PropTypes.string' } }
      parser.feed('{ key: PropTypes.string }');
      expect(parser.results[0]).to.deep.equal(expected);
    })

    it('functional types', () => {
      const parser = createParser();
      const expected = { key: { type: 'PropTypes.oneOf', args: [] } };
      parser.feed('{ key: PropTypes.oneOf() }');
      expect(parser.results[0]).to.deep.equal(expected);
    })
  })
})
