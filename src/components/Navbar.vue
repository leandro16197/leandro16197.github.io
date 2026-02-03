<template>
  <nav
    class="fixed top-0 right-0 p-6 text-sm bg-slate-900/75 backdrop-blur-sm w-full z-50"
  >
    <!-- Desktop Menu (above 715px) -->
    <div class="hidden md:flex items-center gap-6 justify-end">
      <a
        v-for="(item, index) in menuItems"
        :key="item.href"
        :href="item.href"
        class="nav-link text-teal-400 hover:text-teal-400/80 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block"
      >
        {{ $t(`navbar.${item.name}`) }}
      </a>
      <a
        :href="$t('navbar.resumePath')"
        target="_blank"
        class="border border-teal-400 px-4 py-2 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 font-medium"
      >
        {{ $t("navbar.resume") }}
      </a>
    </div>

    <!-- Mobile Navigation (below 715px) -->
    <div class="md:hidden">
      <!-- Language toggle button at top -->
      <div class="flex justify-end gap-4 mb-4">
        <a
          :href="$t('navbar.resumePath')"
          target="_blank"
          class="border border-teal-400 px-3 py-1 rounded text-teal-400 hover:bg-teal-400/10 transition-all duration-300 text-sm"
        >
          {{ $t("navbar.resume") }}
        </a>
      </div>

      <!-- Navigation controls -->
      <div class="flex items-center justify-between">
        <button
          @click="prevSection"
          class="nav-arrow-btn"
          :disabled="currentIndex === 0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div class="text-center">
          <span class="text-teal-400 font-medium">
            {{ currentIndex + 1 }}/{{ menuItems.length }} -
            {{ $t(`navbar.${menuItems[currentIndex].name}`) }}
          </span>
        </div>

        <!-- Reemplazo del botón "→" -->
        <button
          @click="nextSection"
          class="nav-arrow-btn"
          :disabled="currentIndex === menuItems.length - 1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import { onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const { locale } = useI18n();
    const currentIndex = ref(0);

    const menuItems = [
      { name: "hero", href: "#hero" },
      { name: "about", href: "#about" },
      { name: "contact", href: "#contact" },
      { name: "experience", href: "#experience" },
      { name: "skills", href: "#skills" },
      { name: "education", href: "#education" },
      { name: "projects", href: "#projects" },
     
    ];

    const nextSection = () => {
      if (currentIndex.value < menuItems.length - 1) {
        currentIndex.value++;
        scrollToCurrent();
      }
    };

    const prevSection = () => {
      if (currentIndex.value > 0) {
        currentIndex.value--;
        scrollToCurrent();
      }
    };

    const scrollToCurrent = () => {
      const section = document.querySelector(
        menuItems[currentIndex.value].href
      );
      if (section) {
        const yOffset = -40; // Ajustá este valor a la altura real de tu navbar
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    // IntersectionObserver logic
    let observer;

    const observeSections = () => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, // Trigger when 40% of the section is visible
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = menuItems.findIndex(
              (item) => item.href === `#${entry.target.id}`
            );
            if (index !== -1) {
              currentIndex.value = index;
            }
          }
        });
      }, options);

      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.observe(section);
      });
    };

    const disconnectObserver = () => {
      if (observer) observer.disconnect();
    };

    onMounted(() => {
      observeSections();
    });

    onBeforeUnmount(() => {
      disconnectObserver();
    });

    return {
      currentLocale: locale,
      menuItems,
      currentIndex,
      nextSection,
      prevSection,
    };
  },
};
</script>

<style scoped>
.nav-arrow-btn {
  background-color: #1e293b; /* slate-800 */
  color: #2dd4bf; /* teal-400 */
  border: 1px solid #2dd4bf;
  border-radius: 9999px; /* rounded-full */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  transition: all 0.3s ease;
}

.nav-arrow-btn:hover:not(:disabled) {
  background-color: #2dd4bf; /* teal-400 */
  color: #0f172a; /* slate-900 */
  transform: scale(1.05);
}
.nav-link {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: 
    background-color 0.3s ease,
    transform 0.2s ease,
    box-shadow 0.3s ease;
}

.nav-link:hover {
  background-color: rgb(33 70 123 / 85%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(33, 70, 123, 0.35);
}
.nav-arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>
