//const validator=require('validator')
/*var mongoose = require('mongoose');
require('mongoose-type-url');


const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    fullName: {
        type: String,
        required: true
    },
    url: {
        logoLink: mongoose.SchemaTypes.Url,
        required:true
        },
     isDeleted: {
        type: Boolean,
        default: false
        }
    }, { timestamps: true })

module.exports = mongoose.model('CollegeDb', collegeSchema)*/



const mongoose = require('mongoose');
//const Url = require('mongoose-type-url');

const collageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },
    fullName: {
        type: String,
        required: [true, 'fullname is required'],
    },
    logoLink: {
        type: String,
        required: [true, 'logolink is required']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })
module.exports = mongoose.model('CollegeDb', collageSchema)
