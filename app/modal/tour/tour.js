import mongoose, { Schema } from "mongoose"

const TourSchema = new Schema({
    maincategory: {
        type: String,
    },
    subcategory: {
        type: String,
    },
    adult: {
        type: String,
    },
    youth: {
        type: String,
    },
    percouple: {
        type: String,
    },
    childbelowseven: {
        type: String,
        default: "No Charge"
    },
    childthreetoseven: {
        type: String,
    },
    childabovethree: {
        type: String,
    },
    childabovetwelve: {
        type: String,
    },
    childabovefour: {
        type: String,
    },
    ratings:{
        type: String,
    },
    description:{
        type: String,
    }
})

export const Tour = mongoose.models.Tour || mongoose.model("Tour", TourSchema);