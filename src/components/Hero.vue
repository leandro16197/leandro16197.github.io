<template>
  <section id="hero" class="relative min-h-screen flex items-center section-container overflow-hidden">
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent">
    </div>

    <!-- Floating orbs for visual interest -->
    <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s;"></div>

    <div class="relative max-w-4xl z-10">
      <!-- Greeting -->
      <p class="text-teal-400 mb-4 font-mono text-lg animate-fadeIn">
        {{ $t('hero.greeting') }}
      </p>

      <!-- Name with enhanced gradient -->
      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-bold mb-3 animate-slideUp">
        <span class="heading-gradient drop-shadow-2xl">
          Leandro Ovejero
        </span>
      </h1>

      <!-- Role -->
      <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-300 mb-8 animate-slideUp"
        style="animation-delay: 0.2s;">
        {{ $t('hero.role') }}
      </h2>

      <!-- Description with better styling -->
      <p class="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed animate-fadeIn"
        style="animation-delay: 0.4s;">
        {{ $t('hero.description') }}
      </p>

      <!-- Enhanced CTA button -->
      <a href="#projects" class="inline-flex items-center gap-2 btn-primary animate-fadeIn group"
        style="animation-delay: 0.6s;">
        <span>{{ $t('hero.cta') }}</span>
        <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none"
          stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg class="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slideUp {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

/* Enhance the pulse animation for orbs */
@keyframes pulse {

  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}
</style>