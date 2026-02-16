<template>
  <div class="grade-selector">
    <h2>选择年级</h2>
    <div class="grade-grid">
      <button 
        v-for="grade in grades" 
        :key="grade.id"
        @click="selectGrade(grade)"
        class="grade-button"
        :class="{ active: selectedGrade?.id === grade.id }"
      >
        {{ grade.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GradeSelector',
  data() {
    return {
      grades: [
        { id: 1, name: '一年级', level: 1 },
        { id: 2, name: '二年级', level: 2 },
        { id: 3, name: '三年级', level: 3 },
        { id: 4, name: '四年级', level: 4 },
        { id: 5, name: '五年级', level: 5 },
        { id: 6, name: '六年级', level: 6 },
        { id: 7, name: '初一', level: 7 },
        { id: 8, name: '初二', level: 8 },
        { id: 9, name: '初三', level: 9 }
      ],
      selectedGrade: null
    }
  },
  methods: {
    selectGrade(grade) {
      this.selectedGrade = grade;
      this.$emit('grade-selected', grade);
    }
  }
}
</script>

<style scoped>
.grade-selector {
  padding: 20px;
}

.grade-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.grade-button {
  padding: 15px;
  border: 2px solid #4CAF50;
  border-radius: 10px;
  background: white;
  color: #4CAF50;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.grade-button:hover {
  background: #4CAF50;
  color: white;
}

.grade-button.active {
  background: #4CAF50;
  color: white;
}
</style>