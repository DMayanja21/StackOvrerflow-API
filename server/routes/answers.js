const express = require("express");

const router = express.Router();
const Answer = require("../models/Answer");

// Token handling functions
const tokenHandlers = require("./token-handling-functions");

const { createToken } = tokenHandlers;
const { retrieveToken } = tokenHandlers;
const { verifyToken } = tokenHandlers;

router.get("/:answerID", retrieveToken, (req, res) => {
    verifyToken(req.token)
        .then(authData => {
            // Authdata is available if required
            let answerID = req.params.answerID;

            Answer.findOne({ _id: answerID })
                .then(result => {
                    if (result) {
                        res.status(200).json(result);
                    } else {
                        res.status(404).json({
                            status: 404,
                            message: "That answer does not exist"
                        });
                    }
                })
                .catch(err => {
                    let message = `An error occurred querying MongoDB for answer with ID:${answerID}`;
                    console.error(message, err);
                    res.status(500).json({ status: 500, message, err });
                });
        })
        .catch(err => {
            let message = `An error occurred verifying token answer with ID:${answerID}`;
            console.error(message, err);
            res.status(500).json({ status: 500, message, err });
        });
});

module.exports = router;
