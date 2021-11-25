function restrict(target, keep) {
    let properObject = target;
    Object.keys(properObject).forEach(prop => {
        if (!keep.hasOwnProperty(prop)) delete target[prop];
    })
    return properObject;
}

const config = { user: "user", pass: "pass" };
const tooMuchConfig = { vars: "LOG=info", user: "user", pass: "pass", env: "prod" };
// "vars" in tooMuchConfig; // => true
// "env" in tooMuchConfig; // => true
const properConfig = restrict(tooMuchConfig, config);
//properConfig === config; // => false
// "vars" in properConfig; // => false
// "env" in properConfig; // => false


// console.log(tooMuchConfig.hasOwnProperty("vars"));
// console.log(tooMuchConfig.hasOwnProperty("env"));
// console.log(properConfig.hasOwnProperty("vars"));
// console.log(properConfig.hasOwnProperty("vars"));
// console.log(properConfig);
// console.log(properConfig === config)