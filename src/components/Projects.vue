<template>
  <section id="projects" class="section-container">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-16 flex items-center justify-center">
        <span class="text-teal-400 mr-2">06.</span>
        <span class="heading-gradient">{{ $t("projects.title") }}</span>
      </h2>

      <ProjectsCarousel :projects="localizedProjects" />
    </div>
  </section>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import ProjectsCarousel from "./ProjectsCarousel.vue";
import portfolio from "../assets/portfolio.png";
import BuscoAutos from "../assets/BuscoAutos.png";
import questionary from "../assets/quiz_inicio.png";

export default {
  name: "Projects",
  components: {
    ProjectsCarousel,
  },
  setup() {
    const { t } = useI18n();

    const projects = [
      {
        id: "BuscoAutos",
        image: BuscoAutos,
        technologies: [
          "PostgreSQL",
          "Gmail API",
          "Docker",
          "Laravel",
          "PHP",
          "Bootstrap",
          "Jquery",
        ],
        features:[
                        '1.Búsqueda y filtrado avanzado de vehículos',
                        '2.Gestión de publicaciones y estados',
                        '3.Registro y autenticación de usuarios',
                        '4.Panel de administración'
        ],
        demo: "https://buscoauto.com.ar/",
      },
      {
        id: "questionary",
        image: questionary,
        technologies: [
          "MySQL",
          "Docker",
          "Laravel",
          "PHP",
          "Bootstrap",
          "Jquery",
        ],
        features:[
                        '1.Gestión de preguntas y respuestas',
                        '2.Feedback inmediato al usuario',
                        '3.Integración con Mercado Pago',
                        '4.API para gestión de géneros'
        ],
         github: "https://github.com/leandro16197/questionary",
        demo: "#",
      },
      {
        id: "portfolio",
        image: portfolio,
        technologies: [
          "Vue.js 3",
          "Vue Router",
          "Vue I18n",
          "Tailwind CSS",
          "PostCSS",
        ],
        features:[
                        '1.Diseño responsive',
                        '2.Animaciones y transiciones suaves',
                        '3.Optimización de performance'
        ],
        github: "https://github.com/leandro16197/leandro16197.github.io",
        demo: "https://leandro16197.github.io/",
      },
    ];

    const localizedProjects = computed(() =>
      projects.map((project) => ({
        ...project,
        title: t(`projects.${project.id}.title`),
        description: t(`projects.${project.id}.description`),
      }))
    );

    return { localizedProjects };
  },
};
</script>
