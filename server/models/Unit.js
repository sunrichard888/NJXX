const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  gradeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade', required: true },
  subject: { type: String, required: true, enum: ['math', 'chinese', 'english', 'science', 'social'] },
  title: { type: String, required: true },
  description: { type: String, required: true },
  orderNumber: { type: Number, required: true },
  keyPoints: [{
    title: { type: String, required: true },
    content: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    media: [{
      type: { type: String, enum: ['image', 'video', 'animation', 'interactive'] },
      url: { type: String, required: true },
      caption: { type: String }
    }]
  }],
  demos: [{
    title: { type: String, required: true },
    demoType: { type: String, enum: ['simulation', 'animation', 'interactive', 'video'] },
    sourceUrl: { type: String },
    embedCode: { type: String }
  }],
  thinkingQuestions: [{
    questionText: { type: String, required: true },
    difficulty: { type: String, enum: ['basic', 'typical', 'extended', 'challenge'], default: 'typical' },
    questionType: { type: String, enum: ['multiple-choice', 'fill-blank', 'short-answer', 'essay'] },
    options: [{ text: String, isCorrect: Boolean }],
    answer: { type: String },
    explanation: { type: String },
    tags: [{ type: String }]
  }]
}, { timestamps: true });

module.exports = mongoose.model('Unit', unitSchema);