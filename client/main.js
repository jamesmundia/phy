Meteor.subscribe('injuries');

Template.registerHelper("intervalRunOptions", function() {
    return [
        {label: "Interval Run 1A", value: Run1A},
        {label: "Interval Run 1B", value: Run1B},
        {label: "Interval Run 1C", value: Run1C},
        {label: "Interval Run 2A", value: Run2A},
        {label: "Interval Run 2B", value: Run2B},
        {label: "Interval Run 2C", value: Run2C},
    ];
});