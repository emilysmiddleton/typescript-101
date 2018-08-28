import * as calculator from "../../app/testing/Calculator";
import * as demand from 'must';
import 'mocha';

describe('addition of two numbers', function() {
   it('can sum two positive integers', function() {
      demand(calculator.add(3, 5)).must.equal(8);
   })
});