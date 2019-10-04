//Call mongoose
const mongoose = require('mongoose');

//Call Schema constructor
const Schema = mongoose.Schema;

//Create a question schema
const questionSchema= new Schema({
    //question_id: mongoose.Schema.Types.ObjectId,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title:{
        type: String,
        required:true
    },
    text:{
        type: String,
        required:true
    },
    status:{
        upvotes: [
            {
                user_id:{
                    type: mongoose.Schema.Types.ObjectId,
                    required: true
                }
            }
        ],
        downvotes: [
            {
                user_id:{
                    type: mongoose.Schema.Types.ObjectId,
                    required: true
                }
            }
        ]
    },
});

//Export model
module.exports= Question = mongoose.model("Question", questionSchema)