import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  	resolutions: [
  		{title: "Resolutions #1"},
  		{title: "Resolutions #2"},
  		{title: "Resolutions #3"}
  	]
});

Template.hello.events({
  
});
