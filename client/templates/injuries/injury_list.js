var injuriesData = [ 
	{
    player: 'Thomas Rongen',
    injury: 'Left Quad Pull'
  },
  {
    player: 'Tab Ramos',
    injury: 'Right Hamstring Pull'
  },
  {
    player: 'John Harkes',
    injury: 'Right ACL'
  },
];
Template.injuryList.helpers({
  injuries: injuriesData
});