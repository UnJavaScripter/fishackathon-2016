'use strict';

import mongoose from 'mongoose';

var PlantaSchema = new mongoose.Schema({
  genus: String,
  epithet: String,
  family: String,
  colloquial_names: [String],
  pictures: [
    {
      label: String,
      url: String
    }
  ],
  location: [
    {
      lat: Number,
      lng: Number
    }
  ]
});

export default mongoose.model('Planta', PlantaSchema);
