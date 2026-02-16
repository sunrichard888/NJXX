<template>
  <div class="key-point-display">
    <div class="header">
      <h2>{{ keyPoint.title }}</h2>
      <span class="difficulty" :class="difficultyClass">{{ keyPoint.difficultyLevel }}</span>
    </div>
    
    <div class="content">
      <!-- 知识点内容 -->
      <div class="text-content" v-html="keyPoint.content"></div>
      
      <!-- 动态演示区域 -->
      <div class="demo-section" v-if="keyPoint.demos && keyPoint.demos.length > 0">
        <h3>动态演示</h3>
        <div class="demos-grid">
          <div 
            v-for="demo in keyPoint.demos" 
            :key="demo.id"
            class="demo-item"
          >
            <h4>{{ demo.title }}</h4>
            <div v-if="demo.type === 'iframe'" class="demo-iframe">
              <iframe :src="demo.url" frameborder="0"></iframe>
            </div>
            <div v-else-if="demo.type === 'image'" class="demo-image">
              <img :src="demo.url" :alt="demo.title" />
            </div>
            <div v-else-if="demo.type === 'interactive'" class="demo-interactive">
              <!-- 交互式演示组件 -->
              <component :is="demo.component" v-bind="demo.props" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- 典型题型 -->
      <div class="questions-section" v-if="keyPoint.typicalQuestions && keyPoint.typicalQuestions.length > 0">
        <h3>典型题型</h3>
        <div class="questions-list">
          <question-card 
            v-for="question in keyPoint.typicalQuestions" 
            :key="question.id"
            :question="question"
            type="typical"
          />
        </div>
      </div>
      
      <!-- 扩展题型 -->
      <div class="questions-section" v-if="keyPoint.extendedQuestions && keyPoint.extendedQuestions.length > 0">
        <h3>扩展题型</h3>
        <div class="questions-list">
          <question-card 
            v-for="question in keyPoint.extendedQuestions" 
            :key="question.id"
            :question="question"
            type="extended"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from './QuestionCard.vue';

export default {
  name: 'KeyPointDisplay',
  components: {
    QuestionCard
  },
  props: {
    keyPoint: {
      type: Object,
      required: true
    }
  },
  computed: {
    difficultyClass() {
      return `difficulty-${this.keyPoint.difficultyLevel.toLowerCase()}`;
    }
  }
};
</script>

<style scoped>
.key-point-display {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h2 {
  color: #333;
  margin: 0;
}

.difficulty {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.difficulty-easy {
  background: #e8f5e8;
  color: #2e7d32;
}

.difficulty-medium {
  background: #fff3e0;
  color: #f57c00;
}

.difficulty-hard {
  background: #ffebee;
  color: #c62828;
}

.demo-section {
  margin: 20px 0;
}

.demo-section h3 {
  color: #1976d2;
  margin-bottom: 15px;
}

.demos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.demo-item {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 15px;
}

.demo-item h4 {
  margin: 0 0 10px 0;
  color: #555;
}

.demo-iframe iframe {
  width: 100%;
  height: 200px;
  border: none;
}

.demo-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.questions-section {
  margin: 20px 0;
}

.questions-section h3 {
  color: #1976d2;
  margin-bottom: 15px;
}
</style>