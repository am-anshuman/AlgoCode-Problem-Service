const { StatusCodes } = require('http-status-codes');

function pingCheck(req, res) {
    res.json({message: 'Ping Check is up'});
}

function addProblem(req, res) {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not Implemented'
    });
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