const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventarioSchema = new Schema({
 producto: {
    type: Array,
    required: true
  },

  precio:{
  	type: Array,
  	required:true
  },
  
  cantidad:{
  	type:Array,
  	required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('inventario', inventarioSchema);
