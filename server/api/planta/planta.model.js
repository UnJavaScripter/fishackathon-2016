'use strict';

import mongoose from 'mongoose';

var PlantaSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Planta', PlantaSchema);
