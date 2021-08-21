var expect = require('chai').expect;
const sumtwo = require('../index');
describe('Unit Test sumtwo', () => {
  it('Input 2 expect 4', () => {
    expect(sumtwo(2)).to.be.equal(4);
  });
});