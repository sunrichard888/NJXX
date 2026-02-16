<template>
  <div class="dynamic-demo">
    <h3>{{ demo.title }}</h3>
    <div class="demo-container" v-if="demo.demoType === 'interactive'">
      <!-- 交互式演示容器 -->
      <div ref="demoContainer" class="interactive-container"></div>
    </div>
    <iframe 
      v-else-if="demo.demoType === 'iframe'" 
      :src="demo.sourceUrl" 
      class="demo-iframe"
      frameborder="0">
    </iframe>
    <img 
      v-else-if="demo.demoType === 'image'" 
      :src="demo.sourceUrl" 
      :alt="demo.title"
      class="demo-image">
    <video 
      v-else-if="demo.demoType === 'video'" 
      :src="demo.sourceUrl" 
      controls
      class="demo-video">
    </video>
    <div v-else class="demo-placeholder">
      {{ demo.embedCode }}
    </div>
    
    <div class="demo-caption" v-if="demo.caption">
      {{ demo.caption }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicDemo',
  props: {
    demo: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        demoType: 'interactive',
        sourceUrl: '',
        embedCode: '',
        caption: ''
      })
    }
  },
  mounted() {
    if (this.demo.demoType === 'interactive') {
      this.initInteractiveDemo();
    }
  },
  methods: {
    initInteractiveDemo() {
      // 初始化交互式演示
      // 这里可以集成具体的交互库，如 D3.js, Three.js 等
      const container = this.$refs.demoContainer;
      if (container) {
        container.innerHTML = `
          <div class="interactive-placeholder">
            <p>交互式演示区域 - ${this.demo.title}</p>
            <button @click="handleDemoInteraction">开始演示</button>
          </div>
        `;
      }
    },
    handleDemoInteraction() {
      this.$emit('demo-interaction', this.demo);
    }
  }
}
</script>

<style scoped>
.dynamic-demo {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.demo-container {
  margin-top: 10px;
}

.interactive-container {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px dashed #ccc;
}

.interactive-placeholder {
  text-align: center;
  color: #666;
}

.demo-iframe {
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
}

.demo-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.demo-video {
  width: 100%;
  max-width: 600px;
  border-radius: 4px;
}

.demo-caption {
  margin-top: 10px;
  font-style: italic;
  color: #666;
  text-align: center;
}

.demo-placeholder {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-family: monospace;
}
</style>