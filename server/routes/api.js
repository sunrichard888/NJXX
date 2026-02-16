const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');
const Unit = require('../models/Unit');
const KeyPoint = require('../models/KeyPoint');
const Question = require('../models/Question');

// 获取所有年级
router.get('/grades', async (req, res) => {
  try {
    const grades = await Grade.find().sort({ gradeNumber: 1 });
    res.json(grades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 获取指定年级的学科
router.get('/grades/:gradeId/subjects', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.gradeId).populate('subjects');
    res.json(grade.subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 获取指定单元的详细信息
router.get('/units/:unitId', async (req, res) => {
  try {
    const unit = await Unit.findById(req.params.unitId)
      .populate('keyPoints')
      .populate('demos')
      .populate('thinkingQuestions');
    res.json(unit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 提交答案
router.post('/answers', async (req, res) => {
  try {
    const { questionId, answer, studentId } = req.body;
    // 这里应该验证答案并保存记录
    // 简化处理：假设答案正确
    res.json({ 
      isCorrect: true, 
      score: 100,
      feedback: '回答正确！'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;