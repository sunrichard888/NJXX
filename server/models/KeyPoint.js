const mongoose = require('mongoose');

const keyPointSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  difficultyLevel: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  unitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: true
  },
  mediaFiles: [{
    mediaType: {
      type: String,
      enum: ['image', 'video', 'animation', 'interactive']
    },
    url: String,
    caption: String
  }],
  examples: [{
    exampleText: String,
    exampleMedia: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// 更新时间戳
keyPointSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('KeyPoint', keyPointSchema);