import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(

    {
        id:{
            type: String,
            require:true 
        },

        titulo:{
            type:String,
            require:true
        },
        descricao:{
            type:String
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("toDo", todoSchema);