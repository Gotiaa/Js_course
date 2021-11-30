function partial(callback, value) {
    return callback.bind(null, value);
}

const f = (x, y, z) => x * (y - z);
const partialMethod = partial(f, 2);

const chai = require('chai');
chai.assert.equal(partialMethod(3,4),-2);