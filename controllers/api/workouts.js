const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req, res) => {
    const workoutData = await db.Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$exercises.duration"
            }
        }
    }]);

    // console.log(workoutData);
    res.json(workoutData);
});

module.exports = router;