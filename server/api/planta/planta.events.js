/**
 * Planta model events
 */

'use strict';

import {EventEmitter} from 'events';
var Planta = require('./planta.model');
var PlantaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PlantaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Planta.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PlantaEvents.emit(event + ':' + doc._id, doc);
    PlantaEvents.emit(event, doc);
  }
}

export default PlantaEvents;
