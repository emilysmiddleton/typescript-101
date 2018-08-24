import * as demand from 'must';
import * as pet from '../../../app/language/logic/LogicFunctions';

describe('isDog: ', function() {
    it('is true when animal is a dog', function() {
        demand(pet.isDog('dog')).is(true);
    });
    it('is false when animal is a cat', function() {
        demand(pet.isDog('cat')).is(false);
    });
});

describe('isBrownDogShortCircuit: ', function() {
    it('is false for white cats', function() {
        demand(pet.isBrownDogShortCircuit('cat', 'white')).is(false);
    });
    it('is false for white dogs', function() {
        demand(pet.isBrownDogShortCircuit('dog', 'white')).is(false);
    });
    it('is false for brown cats', function() {
        demand(pet.isBrownDogShortCircuit('cat', 'brown')).is(false);
    });
    it('is true for brown dogs', function() {
        demand(pet.isBrownDogShortCircuit('dog', 'brown')).is(true);
    });
});

// Tests for other methods left as an exercise for the reader.