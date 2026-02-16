<template>
  <div class="question-practice">
    <h3>{{ questionType }} - {{ currentQuestion.title }}</h3>
    
    <!-- 题目内容 -->
    <div class="question-content" v-html="currentQuestion.content"></div>
    
    <!-- 选项（如果是选择题） -->
    <div v-if="currentQuestion.type === 'multiple-choice'" class="options">
      <label 
        v-for="(option, index) in currentQuestion.options" 
        :key="index"
        class="option-label"
      >
        <input 
          type="radio" 
          :name="'question-' + currentQuestion.id"
          :value="option.value"
          v-model="selectedAnswer"
        />
        {{ option.text }}
      </label>
    </div>
    
    <!-- 填空题输入框 -->
    <div v-else-if="currentQuestion.type === 'fill-blank'" class="fill-blank">
      <input 
        type="text" 
        v-model="selectedAnswer"
        placeholder="请输入答案"
        class="fill-input"
      />
    </div>
    
    <!-- 主观题文本框 -->
    <div v-else-if="currentQuestion.type === 'essay'" class="essay">
      <textarea 
        v-model="selectedAnswer"
        placeholder="请在此输入您的答案..."
        class="essay-input"
      ></textarea>
    </div>
    
    <!-- 操作按钮 -->
    <div class="question-actions">
      <button @click="submitAnswer" :disabled="!selectedAnswer" class="submit-btn">
        提交答案
      </button>
      <button @click="showHint" class="hint-btn">
        查看提示
      </button>
      <button @click="nextQuestion" class="next-btn">
        下一题
      </button>
    </div>
    
    <!-- 答案反馈 -->
    <div v-if="showFeedback" class="feedback" :class="feedbackClass">
      {{ feedbackMessage }}
    </div>
    
    <!-- 解析显示 -->
    <div v-if="showAnalysis" class="analysis">
      <h4>题目解析：</h4>
      <div v-html="currentQuestion.analysis"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionPractice',
  props: {
    questionType: {
      type: String,
      required: true
    },
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentQuestionIndex: 0,
      selectedAnswer: '',
      showFeedback: false,
      feedbackMessage: '',
      showAnalysis: false
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || {}
    },
    feedbackClass() {
      return this.feedbackMessage.includes('正确') ? 'correct' : 'incorrect'
    }
  },
  methods: {
    submitAnswer() {
      if (!this.selectedAnswer) return
      
      // 验证答案
      const isCorrect = this.validateAnswer(this.selectedAnswer)
      this.showFeedback = true
      this.feedbackMessage = isCorrect ? '回答正确！👍' : '回答错误，请再思考一下。'
      
      if (isCorrect) {
        this.showAnalysis = true
      }
    },
    validateAnswer(answer) {
      // 简单的答案验证逻辑
      return answer === this.currentQuestion.correctAnswer
    },
    showHint() {
      this.$emit('show-hint', this.currentQuestion.hint)
    },
    nextQuestion() {
      this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length
      this.selectedAnswer = ''
      this.showFeedback = false
      this.showAnalysis = false
    }
  }
}
</script>

<style scoped>
.question-practice {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  margin: 20px 0;
}

.question-content {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
}

.options {
  margin: 20px 0;
}

.option-label {
  display: block;
  margin: 10px 0;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.option-label:hover {
  background: #e9ecef;
}

.option-label input[type="radio"] {
  margin-right: 12px;
}

.fill-input, .essay-input {
  width: 100%;
  padding: 12px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  margin: 15px 0;
}

.essay-input {
  min-height: 120px;
  resize: vertical;
}

.question-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.submit-btn, .hint-btn, .next-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn {
  background: #007bff;
  color: white;
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background: #0056b3;
}

.hint-btn {
  background: #ffc107;
  color: #212529;
}

.hint-btn:hover {
  background: #e0a800;
}

.next-btn {
  background: #28a745;
  color: white;
}

.next-btn:hover {
  background: #1e7e34;
}

.feedback {
  margin-top: 15px;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
}

.feedback.correct {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.feedback.incorrect {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.analysis {
  margin-top: 20px;
  padding: 15px;
  background: #e9ecef;
  border-radius: 8px;
}

.analysis h4 {
  margin: 0 0 10px 0;
  color: #495057;
}
</style>