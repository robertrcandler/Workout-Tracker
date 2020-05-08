const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  Date: {
    type: Date,
    default: () => new Date()
  },

  Exercise: [
    {
        type:{
            type: String,
            trim: true,
            required: "Username is Required"
          },
          name:{
            type: String,
            trim: true,
            required: "Username is Required"
          },
          duration:{
            type: Number,
            trim: true
          },
          weight:{
            type: Number,
            trim: true
          },
          reps:{
            type: Number,
            trim: true
          },
          sets:{
            type: Number,
            trim: true
          }

    }
    

  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
