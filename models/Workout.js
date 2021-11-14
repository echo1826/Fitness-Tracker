const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now()
    },
    exercises: {
        type: Array,
        required: true
    },
    // totalDuration: {
    //     type: Number
    // }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;