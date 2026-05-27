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
import ShopTudoImage from "../assets/home.png";
import NemoGymImg from "../assets/NemoGym.png";

export default {
  name: "Projects",
  components: { 
    ProjectsCarousel,
  },
  setup() {
    const { t } = useI18n();

    const projects = [
      {
        id: "ShopTudo",
        image: ShopTudoImage,
        technologies: [
          "PHP",
          "Laravel",
          "React",
          "Bootstrap",
          "jQuery",
          "Redis",
          "Docker",
          "Mercado Pago"
        ],
        features: [
          "Gestión de inventario completa (CRUD de productos, categorías y marcas)",
          "Panel administrativo moderno con búsqueda dinámica y filtrado avanzado",
          "Integración de pagos con Mercado Pago y webhooks",
          "Notificaciones inteligentes por email de pagos y pedidos",
          "Jobs automatizados y mantenimiento del sistema (Artisan Commands)",
          "Cache en Redis para mejorar rendimiento y notificaciones en tiempo real",
          "Área de usuario con carrito, historial de pedidos y wishlist"
        ],
        github: "https://github.com/leandro16197/ShopTudo/",
        demo: "#",
      },
      {
        id: "NemoGym",
        image: NemoGymImg,
        technologies: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "JPA / Hibernate",
          "React",
          "React Router",
          "MySQL",
          "Docker",
          "Maven",
          "Mercado Pago",
          "Ngrok"
        ],
        features: [
          "Gestión completa de usuarios, roles, clases, membresías y avisos",
          "Sistema de suscripciones con planes Basic y Full",
          "Rutinas generales y personalizadas con seguimiento de coach",
          "Autenticación y autorización segura mediante JWT y Spring Security",
          "Integración con Mercado Pago incluyendo Webhooks y transacciones",
          "Pruebas locales de integración utilizando Ngrok",
          "Panel administrativo con reportes de ingresos y transacciones",
          "Historial de compras y membresías por usuario",
          "Consultas dinámicas y paginación con Spring Data JPA",
          "Arquitectura desacoplada utilizando Controllers, Services, Repositories y DTOs",
          "Dockerización completa del entorno",
          "Interfaz responsive adaptable a dispositivos móviles y desktop"
        ],
        github: "https://github.com/leandro16197/nemogym",
        demo: "#",
      },
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
