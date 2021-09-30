const asyncHanlder = (controllerfunction) => (req, res, next) => Promise.resolve(controllerfunction(req, res, next)).catch(next); 

module.exports = asyncHanlder;