if (Injuries.find().count() === 0) {
	Injuries.insert({
		player: 'Thomas Rongen',
    	injury: 'Left Quad Pull'
	});

	Injuries.insert({
    player: 'Tab Ramos',
    injury: 'Right Hamstring Pull'
  	});

  	Injuries.insert({
    player: 'John Harkes',
    injury: 'Right ACL'
    });
}