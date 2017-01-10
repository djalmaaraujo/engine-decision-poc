/* jshint node: true, mocha: true */

"use strict";

const expect = require('expect.js');
const CalcByIndex = require('../engine.js');

describe('CalcByIndex', function() {
  describe('#add()', function() {
    it('expect to return amount of points', function() {
        let calc = new CalcByIndex();

        expect(calc.add('xx', 5)).to.be(5);
        expect(calc.add('xx', 2)).to.be(7);
        expect(calc.add('xx', 10)).to.be(17);
        expect(calc.add('yy', 10)).to.be(10);
        expect(calc.add('yy', 10)).to.be(20);
    });
  });

  describe('#result()', function() {
    it('expect to return false for no results', function() {
        let calc = new CalcByIndex();

        expect(calc.result()).to.be(false);
    });

    it('expect to have a winner', function() {
        let calc = new CalcByIndex();

        calc.add('yy', 10);
        calc.add('yy', 10);
        calc.add('xx', 60);

        expect(calc.result()).to.be('xx');
    });
  });
});
