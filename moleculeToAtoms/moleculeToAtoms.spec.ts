import { expect } from 'chai';

import { parseMolecule } from './moleculeToAtoms';

describe('parseMolecule', function () {
  it('should parse water', () => {
    expect(parseMolecule('H2O')).to.deep.equal({ H: 2, O: 1 });
  });

  it('should parse magnesium hydroxide: Mg(OH)2', () => {
    expect(parseMolecule('Mg(OH)2')).to.deep.equal({ Mg: 1, O: 2, H: 2 });
  });
  it('should parse with no index after the braces: Mg(OH)', () => {
    expect(parseMolecule('Mg(OH)')).to.deep.equal({ Mg: 1, O: 1, H: 1 });
  });
  it('should parse nested round: Mg(O(OH)2H)2', () => {
    expect(parseMolecule('Mg(O(OH)2H)2')).to.deep.equal({
      Mg: 1,
      O: 6,
      H: 6,
    });
  });
  it('should parse with double braces: Mg(OH)2(OH)2', () => {
    expect(parseMolecule('Mg(OH)2(OH)2')).to.deep.equal({ Mg: 1, O: 4, H: 4 });
  });

  it("should parse Fremy's salt: K4[ON(SO3)2]2", () => {
    expect(parseMolecule('K4[ON(SO3)2]2')).to.deep.equal({
      K: 4,
      O: 14,
      N: 2,
      S: 4,
    });
  });
  it('should parse with curly brackets: O{K4[ON(SO3)2]2}3', () => {
    expect(parseMolecule('O{K4[ON(SO3)2]2}3')).to.deep.equal({
      K: 12,
      O: 43,
      N: 6,
      S: 12,
    });
  });
});
