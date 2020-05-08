const router = require("express").Router();
const Workout = require("../models/workouts");




app.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.put("/api/workouts/", (req, res) => {
    Workout.findOneAndUpdate()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
    });
  });
  
  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(6)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
  });
  
  app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  