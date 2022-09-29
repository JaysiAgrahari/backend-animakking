import mongoose from "mongoose";
const mongoose = require('mongoose')
const animalSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true,

    },
    animal: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    breed: {
        type: String,
        required: true,

    },
    images: {
        type: Array,
        required: true,

    }


})
const AnimalModel = mongoose.model("animal", animalSchema)

export default AnimalModel