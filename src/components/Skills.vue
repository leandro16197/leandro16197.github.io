<template>
  <section id="skills" class="section-container">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 flex items-center justify-center">
        <span class="text-teal-400 mr-2">04.</span>
        <span class="heading-gradient">{{ $t("skills.title") }}</span>
      </h2>

      <div class="skills-grid">
        <!-- Backend Development -->
        <div class="skill-category">
          <h3 class="category-title">
            <span class="category-icon">⚙️</span>
            {{ $t("skills.backend") }}
          </h3>
          <div class="skills-list">
            <div v-for="skill in backendIcons" :key="skill.name" class="skill-item">
              <img :src="getSkillIcon(skill.icon)" :alt="skill.name" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Frontend Development -->
        <div class="skill-category">
          <h3 class="category-title">
            <span class="category-icon">🎨</span>
            {{ $t("skills.frontend") }}
          </h3>
          <div class="skills-list">
            <div v-for="skill in frontendIcons" :key="skill.name" class="skill-item">
              <img :src="getSkillIcon(skill.icon)" :alt="skill.name" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Infrastructure & DevOps -->
        <div class="skill-category">
          <h3 class="category-title">
            <span class="category-icon">🔧</span>
            {{ $t("skills.infrastructure") || "Infraestructura & DevOps" }}
          </h3>
          <div class="skills-list">
            <div v-for="skill in infrastructureIcons" :key="skill.name" class="skill-item">
              <img :src="getSkillIcon(skill.icon)" :alt="skill.name" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  setup() {
    const backendIcons = [
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "PHPUnit", icon: "php" },
      { name: "postman", icon: "postman" },
      { name: "WordPress", icon: "wordpress" },
    ];

    const infrastructureIcons = [
      { name: "MySQL", icon: "mysql" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Jira", icon: "jira" },
    ];
    
    const frontendIcons = [
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "jQuery", icon: "jquery" },
      { name: "bootstrap", icon: "bootstrap" },
    ];

    const getSkillIcon = (iconName) => {
      const iconMap = {
        php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        javascript:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        vuejs:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        react:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        html5:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        css3:
         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        jquery:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        laravel:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        mysql:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        postgresql:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        git: 
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        docker:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        jira: 
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        github:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        postman:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        bootstrap:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        wordpress: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",

      };
      return iconMap[iconName] || "";
    };

    return {
      backendIcons,
      frontendIcons,
      infrastructureIcons,
      getSkillIcon,
    };
  },
};
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-category {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: rgba(45, 212, 191, 0.3);
  background: rgba(30, 41, 59, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.3),
    0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #2dd4bf;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(71, 85, 105, 0.5);
}

.category-icon {
  font-size: 1.25rem;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: default;
}

.skill-item:hover {
  background: rgba(45, 212, 191, 0.1);
  transform: translateY(-2px);
}

.skill-icon {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.skill-item:hover .skill-icon {
  transform: scale(1.1);
}

.skill-name {
  font-size: 0.75rem;
  color: #cbd5e1;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skills-grid {
    gap: 1.25rem;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    gap: 0.875rem;
  }
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill-category {
    padding: 1.25rem;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(65px, 1fr));
    gap: 0.75rem;
  }

  .skill-icon {
    width: 2rem;
    height: 2rem;
  }

  .skill-name {
    font-size: 0.6875rem;
  }
}

@media (max-width: 480px) {
  .skill-category {
    padding: 1rem;
  }

  .category-title {
    font-size: 1rem;
  }

  .skills-list {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 0.625rem;
  }

  .skill-item {
    padding: 0.5rem;
  }
}
</style>
