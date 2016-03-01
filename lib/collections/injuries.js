Injuries = new Mongo.Collection('injuries');

Rehab = new SimpleSchema({
  exercise: {
    type: String,
    label: "Rehab Exercise"
  },
  sets: {
    type: Number,
    label: "Sets"
  },
  duration: {
    type: Number,
    label: "Set Duration (in Minutes)"
  },
  date: {
    type: Date,
    label: "Date of Rehab Exercise"
  },
  notes: {
    type: String,
    label: "Notes: i.e. 70% Intensity During Sprints",
    max: 200
  },
  injuryid:{
    type: String,
  }
});

Injuries.attachSchema(new SimpleSchema({
  player: {
    type: String,
    label: "Player",
    max: 50
  },
  injury: {
    type: String,
    label: "Injury"
  },
  notes: {
    type: String,
    label: "Notes",
    max: 200
  },
  injurydate: {
    type: Date,
    label: "Date of Injury",
  },
  rehab: {
    type: [Rehab] 
  }

}));