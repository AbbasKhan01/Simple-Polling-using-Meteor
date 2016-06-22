// run this when the meteor app is started
Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Polls.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Is this an awesome app?',
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. I dont like it', votes: 0 }
        ]
      },
      {
        question: 'Is meteor awesome?',
        choices: [
          { text: '100% yes', votes: 0 },
          { text: '200% yes', votes: 0 },
          { text: '300% yes', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }

});