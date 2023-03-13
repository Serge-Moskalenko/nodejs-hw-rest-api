const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { mongooseError } = require("../helpers");

const emailRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        match:emailRegular,
        required:true,
    },
    rassword: {
        type: String,
        minlength: 6,
        required:true,
    }

}, { versionKey: false, timestamps: true });

userSchema.post("save", mongooseError)