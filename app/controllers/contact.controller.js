const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");
exports.create = (req, res) => {
    res.send({ massage: "create handler" });
};

exports.findALL = (req, res) => {
    res.send({ massage: "findALL handler" });
};

exports.findOne = (req, res) => {
    res.send({ massage: "findOne     handler" });
};

exports.update = (req, res) => {
    res.send({ massage: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ massage: "delete handler" });
};

exports.deleteALL = (req, res) => {
    res.send({ massage: "deleteALL handler" });
};

exports.findALLFavorite = (req, res) => {
    res.send({ massage: "findALLFavorite handler" });
};

exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, "Name cannot be empty"));
    }
    try {
        const ContactService = new ContactService(MongoDB, client);
        const document = await ContactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};