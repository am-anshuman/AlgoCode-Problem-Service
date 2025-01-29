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
}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingCheck
}