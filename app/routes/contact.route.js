const express = require('express');
const { route } = require('../../app');
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contact.findALL)
    .post(contact.create)
    .delete(contact.deleteALL)

router.route("/favorite")
    .get(contact.findALLFavorite)

router.route("/id")
    .get(contact.findOne)
    .put(contact.update)
    .delete(contact.delete);

module.exports = router;