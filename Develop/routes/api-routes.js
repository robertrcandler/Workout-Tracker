const router = require("express").Router();
const Workout = require("../models/workouts");

//get, post, post from app.js

//get last workout
app.get("/api/workouts", (req, res) => {
  Workout.find()
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});
//put add exercise (unfinished)
app.put("/api/workouts/", (req, res) => {
  Workout.findOneAndUpdate(req.params, {
      new: true,
      upsert: true
  })
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});

//post create workout
app.post("/submit", ({body}, res) => {
  Workout.create(body)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});

//get workouts in range
app.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(5) //out of 10
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});

  