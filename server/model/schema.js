const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema({
    placeName : {
        type : String,
        required : true
    },
    placeImage : {
        type : String ,
        // required : true
    },
    googlePlace : {
        type : String,
        required : true
    },
    review : {
        type : Number,
        required : true,
        get: function(val) {
            return Math.round(val)
        },
        set : function(val) {
            return Math.round(val)
        }
    },
    comment : {
        type : String
    }
}, {timestamps : true});

const PlaceModel = mongoose.model("place_info_master", placeSchema);

module.exports = PlaceModel;