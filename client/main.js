import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// var SC = require('soundcloud');
//
// SC.initialize({
//   client_id: 'e49030affa62a819457ef0404ebee1b6';
// });
//
// var track_url = 'https://soundcloud.com/alex-chan-27/kanye-west-mercy';
// SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//   console.log('oEmbed response: ', oEmbed);
// });

Template.Home.events({
  'click #newroom': function() {
    Router.go('/play');
  }
});

//var queue = []
//insert some node (media type, media ID, any other info)
//if certain type, load that type
//when current instance ends, pull from queue
