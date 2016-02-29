Injuries = new Mongo.Collection('injuries');

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
    type: String,
    label: "Date of Injury",
  }
  //rehab: {
    //type: [Rehab] }

}));

Rehab = new SimpleSchema({
  exercise: {
    type:String,
    label: "Rehab Exercise"
  },
  volume: {
    type: String,
    label: "Volume, i.e. 3 sets of 10 squats"
  },
  date: {
    type: String,
    label: "Date of Rehab Exercise"
  }
});