
var mongoose = require('mongoose');

//building a model for mongoose-organization
//Todo model
//custom validators help ensure better ux
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null
  }
});


module.exports = {Todo};
