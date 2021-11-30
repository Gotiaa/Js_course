function restrict(target, keep) {
    let properObject = target;
    Object.keys(properObject).forEach(prop => {
        if (!keep.hasOwnProperty(prop)) delete properObject[prop];
    })
    return properObject;
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };

const chai = require('chai');
chai.assert.equal(tooMuchConfig.hasOwnProperty("vars"),true);
chai.assert.equal(tooMuchConfig.hasOwnProperty("env"),true);

const properConfig = restrict(tooMuchConfig, config);

chai.assert.equal(properConfig.hasOwnProperty("vars"),false);
chai.assert.equal(properConfig.hasOwnProperty("vars"),false);
chai.assert.equal(properConfig === config, false);

