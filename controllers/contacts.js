const { HttpError,ctrlWrapper } = require("../hepers");
const contact =require("../models/contacts")

const getAll = async (req, res, ) => {
    const results = await contact.listContacts()
    res.json(results)
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await contact.getContactById(id)
    if (!result) {
        throw HttpError(404, "Not found contact");
    };
    res.json(result);
};

const getPost = async (req, res) => {
    const result = await contact.addContact(req.body)
    res.status(201).json(result);
   
};

const getDelete = async (req, res) => {
    const { id } = req.params;
    const result = await contact.removeContact(id);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Delete success"
    })
};

const getPut = async (req, res) => {
    const { id } = req.params;
    const result = await contact.updateById(id, req.body);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    getPost: ctrlWrapper(getPost),
    getDelete: ctrlWrapper(getDelete),
    getPut: ctrlWrapper(getPut),
};