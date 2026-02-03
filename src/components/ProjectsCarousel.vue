<template>
    <div class="carousel-wrapper">
        <div class="carousel-container" @keydown="handleKeyDown" tabindex="0">
            <!-- Carousel Track -->
            <div class="carousel-track-container">
                <transition :name="transitionName" mode="out-in">
                    <div :key="currentIndex" class="carousel-slide">
                        <!-- Project Card -->
                        <div class="carousel-card">
                            <div class="card-grid">
                                <!-- Image Section (Left) -->
                                <div class="card-image-section">
                                    <div class="image-wrapper">
                                        <img :src="currentProject.image" :alt="currentProject.title"
                                            class="project-image" />
                                        <div class="image-overlay"></div>
                                    </div>
                                </div>

                                <!-- Content Section (Right) -->
                                <div class="card-content-section">
                                    <div class="content-wrapper">
                                        <p class="project-label">
                                            <span class="pulse-dot"></span>
                                            {{ $t("projects.featuredProject") }}
                                        </p>

                                        <h3 class="project-title">
                                            {{ currentProject.title }}
                                        </h3>

                                        <div class="project-description-box">
                                            <p class="project-description">
                                                {{ currentProject.description }}
                                            </p>
                                        </div>
                                        
                                        <div v-if="currentProject.features" class="project-features">
                                            <h4 class="features-title">Características destacadas</h4>
                                            <ul class="features-list">
                                                <li v-for="(feature, i) in currentProject.features" :key="i">
                                                {{ feature }}
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="tech-stack">
                                            <span v-for="tech in currentProject.technologies" :key="tech"
                                                class="tech-badge">
                                                {{ tech }}
                                            </span>
                                        </div>

                                        <div class="project-links">
                                            <a :href="currentProject.github" target="_blank" class="project-link"
                                                aria-label="View GitHub repository">
                                                <svg class="link-icon" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>Code</span>
                                            </a>

                                            <a v-if="currentProject.demo !== '#'" :href="currentProject.demo"
                                                target="_blank" class="project-link" aria-label="View live demo">
                                                <svg class="link-icon" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                <span>Demo</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!-- Navigation Buttons -->
            <button @click="prevSlide" class="carousel-control prev" aria-label="Previous project"
                :disabled="currentIndex === 0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button @click="nextSlide" class="carousel-control next" aria-label="Next project"
                :disabled="currentIndex === projects.length - 1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <!-- Indicators -->
        <div class="carousel-indicators">
            <button v-for="(project, index) in projects" :key="index" @click="goToSlide(index)" class="indicator"
                :class="{ active: index === currentIndex }" :aria-label="`Go to project ${index + 1}`"></button>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
    name: "ProjectsCarousel",
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
    setup(props) {
        const currentIndex = ref(0);
        const transitionName = ref("slide-right");
        let touchStartX = 0;
        let touchEndX = 0;

        const currentProject = computed(() => props.projects[currentIndex.value]);

        const nextSlide = () => {
            if (currentIndex.value < props.projects.length - 1) {
                transitionName.value = "slide-left";
                currentIndex.value++;
            }
        };

        const prevSlide = () => {
            if (currentIndex.value > 0) {
                transitionName.value = "slide-right";
                currentIndex.value--;
            }
        };

        const goToSlide = (index) => {
            transitionName.value = index > currentIndex.value ? "slide-left" : "slide-right";
            currentIndex.value = index;
        };

        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                nextSlide();
            } else if (event.key === "ArrowLeft") {
                prevSlide();
            }
        };

        const handleTouchStart = (event) => {
            touchStartX = event.changedTouches[0].screenX;
        };

        const handleTouchEnd = (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        };

        onMounted(() => {
            document.addEventListener("touchstart", handleTouchStart);
            document.addEventListener("touchend", handleTouchEnd);
        });

        onUnmounted(() => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        });

        return {
            currentIndex,
            currentProject,
            transitionName,
            nextSlide,
            prevSlide,
            goToSlide,
            handleKeyDown,
        };
    },
};
</script>

<style scoped>
.project-features {
  margin-top: 1rem;
}

.features-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2dd4bf; /* teal-400 */
  margin-bottom: 0.5rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  font-size: 0.85rem;
  color: #cbd5f5;
  margin-bottom: 0.35rem;
  display: flex;
  gap: 0.4rem;
}
.carousel-wrapper {
    width: 100%;
    position: relative;
}

.carousel-container {
    position: relative;
    width: 100%;
    outline: none;
}

.carousel-track-container {
    overflow: hidden;
    position: relative;
    min-height: 500px;
}

.carousel-slide {
    width: 100%;
}

.carousel-card {
    background: rgba(30, 41, 59, 0.4);
    border-radius: 1.5rem;
    overflow: hidden;
    border: 1px solid rgba(71, 85, 105, 0.5);
    transition: all 0.5s ease;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3),
        0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.carousel-card:hover {
    border-color: rgba(45, 212, 191, 0.5);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4),
        0 10px 10px -5px rgba(0, 0, 0, 0.3),
        0 0 40px -5px rgba(45, 212, 191, 0.3);
}

.card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
}

.card-image-section {
    position: relative;
    overflow: hidden;
}

.image-wrapper {
    position: relative;
    top: 20%;
    width: 100%;
}

.project-image {
    width: 100%;
    height: auto;
    top:10%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.carousel-card:hover .project-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right,
            rgba(15, 23, 42, 0.7),
            rgba(15, 23, 42, 0.3));
    transition: opacity 0.5s ease;
}

.carousel-card:hover .image-overlay {
    opacity: 0.5;
}

.card-content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 2.5rem;
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.project-label {
    color: #5eead4;
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.pulse-dot {
    width: 0.5rem;
    height: 0.5rem;
    background: #5eead4;
    border-radius: 50%;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

.project-title {
    font-size: 2rem;
    font-weight: 700;
    color: #f1f5f9;
    line-height: 1.2;
    transition: color 0.3s ease;
}

.carousel-card:hover .project-title {
    background: linear-gradient(to right, #2dd4bf, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-description-box {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(45, 212, 191, 0.1);
    border-radius: 0.75rem;
    padding: 1.25rem;
}

.project-description {
    color: #cbd5e1;
    line-height: 1.7;
    font-size: 0.95rem;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-badge {
    display: inline-block;
    padding: 0.375rem 0.875rem;
    font-size: 0.75rem;
    border-radius: 9999px;
    background-color: rgba(30, 41, 59, 0.5);
    color: #5eead4;
    border: 1px solid rgba(45, 212, 191, 0.3);
    transition: all 0.3s ease;
    font-weight: 500;
}

.tech-badge:hover {
    background-color: rgba(45, 212, 191, 0.1);
    border-color: #2dd4bf;
    transform: translateY(-2px);
}

.project-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e1;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    text-decoration: none;
}

.project-link:hover {
    color: #2dd4bf;
    transform: translateX(4px);
}

.link-icon {
    width: 1.5rem;
    height: 1.5rem;
}

/* Navigation Controls */
.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(30, 41, 59, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(45, 212, 191, 0.3);
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #cbd5e1;
    z-index: 10;
}

.carousel-control:hover:not(:disabled) {
    background: rgba(45, 212, 191, 0.2);
    border-color: #2dd4bf;
    color: #2dd4bf;
    transform: translateY(-50%) scale(1.1);
}

.carousel-control:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.carousel-control svg {
    width: 1.5rem;
    height: 1.5rem;
}

.carousel-control.prev {
    left: -1.75rem;
}

.carousel-control.next {
    right: -1.75rem;
}

/* Indicators */
.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2.5rem;
}

.indicator {
    width: 2.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: rgba(71, 85, 105, 0.5);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.indicator:hover {
    background: rgba(45, 212, 191, 0.5);
}

.indicator.active {
    background: linear-gradient(to right, #2dd4bf, #3b82f6);
    width: 3rem;
}

/* Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.5s ease;
}

.slide-left-enter-from {
    opacity: 0;
    transform: translateX(50px);
}

.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-50px);
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(-50px);
}

.slide-right-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .carousel-control.prev {
        left: 0.5rem;
    }

    .carousel-control.next {
        right: 0.5rem;
    }
}

@media (max-width: 768px) {
    .card-grid {
        grid-template-columns: 1fr;
        min-height: auto;
    }

    .card-image-section {
        height: 250px;
    }

    .card-content-section {
        padding: 2rem 1.5rem;
    }

    .project-title {
        font-size: 1.5rem;
    }

    .carousel-track-container {
        min-height: auto;
    }

    .carousel-control {
        width: 2.5rem;
        height: 2.5rem;
    }

    .carousel-control svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    .carousel-control.prev {
        left: 0.25rem;
    }

    .carousel-control.next {
        right: 0.25rem;
    }
}

@media (max-width: 480px) {
    .card-content-section {
        padding: 1.5rem 1rem;
    }

    .content-wrapper {
        gap: 1rem;
    }

    .project-title {
        font-size: 1.25rem;
    }

    .project-description {
        font-size: 0.875rem;
    }

    .tech-badge {
        font-size: 0.7rem;
        padding: 0.25rem 0.625rem;
    }
}
</style>
