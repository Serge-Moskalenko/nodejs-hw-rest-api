const express = require('express');
const { getAll, getById, getPost, getDelete, getPut } = require("../../controllers/contacts.js");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../schemas/contacts");

router.get('/',getAll)

router.get("/:id", getById);

router.post('/', validateBody(addSchema) ,getPost)

router.delete('/:id', getDelete )

router.put("/:id", validateBody(addSchema),getPut )

module.exports = router
