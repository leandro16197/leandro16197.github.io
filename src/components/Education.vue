<template>
  <section id="education" class="section-container">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 flex items-center justify-center">
        <span class="text-teal-400 mr-2">05.</span>
        <span class="heading-gradient">{{ $t("education.title") }}</span>
      </h2>

      <div class="education-grid">
        <div v-for="courseId in courseIds" :key="courseId" class="education-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <svg class="education-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="course-title">
              {{ $t(`education.courses.${courseId}.title`) }}
            </h3>
          </div>
          <div class="card-body">
            <p class="institution">
              {{ $t(`education.courses.${courseId}.institution`) }}
            </p>
            <p class="date">
              {{ $t(`education.courses.${courseId}.date`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  name: "Education",
  setup() {
    const courseIds = ["mill","tudai"];

    return {
      courseIds,
    };
  },
};
</script>

<style scoped>
.education-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.education-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-card:hover {
  border-color: rgba(45, 212, 191, 0.3);
  background: rgba(30, 41, 59, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.3),
    0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.icon-wrapper {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 212, 191, 0.1);
  border-radius: 0.5rem;
  color: #2dd4bf;
}

.education-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.course-title {
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
  color: #f1f5f9;
  line-height: 1.4;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 3.5rem;
}

.institution {
  font-size: 0.875rem;
  font-weight: 500;
  color: #2dd4bf;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.institution::before {
  content: "▹";
  font-size: 0.75rem;
}

.date {
  font-size: 0.8125rem;
  color: #94a3b8;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .education-grid {
    gap: 1.25rem;
  }

  .card-body {
    padding-left: 0;
  }

  .card-header {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .course-title {
    font-size: 1rem;
  }

  .education-card {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .education-card {
    padding: 1rem;
  }

  .icon-wrapper {
    width: 2rem;
    height: 2rem;
  }

  .education-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .course-title {
    font-size: 0.9375rem;
  }

  .institution,
  .date {
    font-size: 0.75rem;
  }
}
</style>
