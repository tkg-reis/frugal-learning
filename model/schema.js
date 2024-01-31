const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    placeName : {
        type : String,
        required : true
    },
    placeImage : {
        data : Buffer,
        contentType : String,
    },
    googleMapPoint : {
        type : String,
        required : true
    },
    review : {
        type : Number,
        required : true
    },
    comments : String
});

const PlaceModel = mongoose.model("place_schema", placeSchema);

module.exports = PlaceModel;