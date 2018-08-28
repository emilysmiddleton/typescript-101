import * as demand from 'must';
import * as maths from '../../../app/language/maths/Maths';

describe('divide: ', function() {
    it('divides integers with no remainder', function() {
        demand(maths.divide(10, 2)).equal(5)
    });
    it('divides integers infinite remainder', function() {
        // Yes, there is a 5 at the end!
        demand(maths.divide(10, 3)).equal(3.3333333333333335)
    });
});

describe('isEven: ', function() {
    it('is true for even integer', function() {
        demand(maths.isEven(10)).is(true)
    });
    it('is false for odd integer', function() {
        demand(maths.isEven(7)).is(false);
    });
});

// Tests for other methods left as an exercise for the reader.