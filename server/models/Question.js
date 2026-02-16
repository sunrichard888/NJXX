const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  // 题目基本信息
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  // 题目类型：典型题型、扩展题型
  questionType: {
    type: String,
    enum: ['typical', 'extended', 'self_test'],
    required: true
  },
  // 难度等级
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  // 所属单元
  unitId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Unit',
    required: true
  },
  // 年级和学科
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 12
  },
  subject: {
    type: String,
    required: true,
    enum: ['math', 'chinese', 'english', 'science', 'social_studies']
  },
  // 题目选项（选择题）
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  // 正确答案
  correctAnswer: String,
  // 解析
  explanation: String,
  // 标签，用于分类和搜索
  tags: [String],
  // 创建和更新时间
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
QuestionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Question', QuestionSchema);