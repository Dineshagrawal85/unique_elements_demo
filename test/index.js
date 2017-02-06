var should = require('chai').should(),
    unique_elements_demo = require('../index'),
    element = unique_elements_demo.element;

describe('#element', function() {
  it('converts & into &amp;', function() {
    element('&').should.equal('&');
  });
});