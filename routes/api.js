const router = require("express").Router();
const Workout = require("../models/workout.js");


// Create
router.post("/api/workouts", (req, res) => {

  Workout.create({})
  .then(workoutData =>  {
   res.json(workoutData);
   })

    .catch(err => {
     res.json(err);
     });
});

// Add Workout
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,  
        {$push: {exercises: body}},
        {new: true}
    ) 
    .then(workoutData =>{
        res.json(workoutData)
       })
    .catch(err => {
        res.json(err)
      })


      
//file path Get workouts
router.get("/api/workouts", (req, res) => {

    Workout.find().then((workoutData) => {
    res.json(workoutData);
     })

    .catch((err) => {
     res.status(500).json(err);
     });

});

//Delete
router.delete("/api/workouts", ({body}, res) => {
  Workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true);
  })

  .catch(err => {
    res.json(err);
  })
});


})
//Range
router.get("/api/workouts/range", (req, res) => {
  Workout
  .find()
  .limit(7)

    .then(workoutData => {
     res.json(workoutData);
    })

    .catch(err => {
      res.json(err);
    });
});


 module.exports = router;