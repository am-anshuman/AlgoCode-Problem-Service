const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');

function pingCheck(req, res) {
    res.json({ message: 'Ping Check is up' });
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }

    // try {
    //     throw new BadRequest('Problem Name', { missing: ["Problem Name"] });
    // } catch (error) {
    //     next(error);
    // }
}

function getProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    });
}

function getProblems(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    });
}

function deleteProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    });
}

function updateProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingCheck
}