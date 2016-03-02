Injuries = new Mongo.Collection('injuries');

Players = new Mongo.Collection('players');

Injuries.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId; 
    }
});

Players.attachSchema(new SimpleSchema({
  player: {
    type: String,
    label: "Player",
    max: 50
  },
  position: {
    type: String,
    label: "Injury"
  },
  age: {
    type: Number,
    label: "Notes"
  },
  injuries: {
    type:[Injuries]
    },
  rehab: {
    type: [Rehab] 
  }
}));

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
    label: "Date of Injury"
  }
}));

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
    type: String,
    label: "Date of Rehab Exercise"
  },
  rehabnotes: {
    type: String,
    label: "Notes: i.e. 70% Intensity During Sprints",
    max: 200
  },
  injuryid:{
    type: String,
  }
});