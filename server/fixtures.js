if (Injuries.find().count() === 0) {
	Injuries.insert({
		player: 'Thomas Rongen',
    	injury: 'Left Quad Pull',
      notes: "First time injury this leg",
      injurydate: "5/2/16"
	});

	Injuries.insert({
    player: 'Tab Ramos',
    injury: 'Right Hamstring Pull',
    notes: "Recurring injury, could be structural damage",
    injurydate: "5/4/16"
  	});

  	Injuries.insert({
    player: 'John Harkes',
    injury: 'Right ACL',
    notes: "Will require structural training load reduction long term",
    injurydate: "5/4/16"
    });
}