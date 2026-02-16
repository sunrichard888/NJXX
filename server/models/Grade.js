const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  gradeNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  name: {
    type: String,
    required: true
  },
  subjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Grade', gradeSchema);