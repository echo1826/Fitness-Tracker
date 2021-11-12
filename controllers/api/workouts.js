const router = require('express').Router();
const db = require('../../models');
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    // const workoutData = await db.Workout.aggregate([{
    //     $addFields: {
    //         totalDuration: {
    //             $sum: "$exercises.duration"
    //         }
    //     }
    // }]);
    try{
        const workoutData = await db.Workout.aggregate().addFields(
            {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        );
        res.json(workoutData);
    }catch(err) {
        console.log(err);
        res.json(err);
    }
    
});

router.post('/', async (req, res) => {
    try {
        const newWorkout = await db.Workout.create(req.body);
        console.log(newWorkout);
        res.json(newWorkout);
    }catch(err) {
        console.log(err);
        res.json(err);
    }
    
})

router.put('/:id', async (req, res) => {
    try{
        const updatedWorkout = await db.Workout.updateOne(
        {
            _id: mongoose.Types.ObjectId(req.params.id)
        },
        {
            $push: {exercises: req.body}
        },
        {
            new: true
        }
    );
    res.json(updatedWorkout);
    }catch(err) {
        console.log(err);
        res.json(err);
    }
});

router.get('/range', (req, res) => {
    try{

    }catch(err){
        console.log(err);
        res.json(err);
    }
})

module.exports = router;