import { Calculator } from "../app/Calculator";
import * as demand from 'must';
import 'mocha';

describe('addition of two numbers', function() {
   it('can sum two positive integers', function() {
      demand(Calculator.add(3, 5)).must.equal(8);
   })
});