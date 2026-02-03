<template>
  <section id="about" class="section-container">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-12 flex items-center justify-center">
        <span class="text-teal-400 mr-2">02.</span>
        <span class="heading-gradient">{{ $t('about.title') }}</span>
      </h2>

      <div class="about-container">
        <!-- Description Card -->
        <div class="about-card">
          <div class="icon-wrapper">
            <svg class="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div class="card-body">
            <p class="description-text">{{ $t('about.description1') }}</p>
            <p class="description-text">{{ $t('about.description2') }}</p>
          </div>
        </div>

        <!-- Profile Photo Card -->
        <div class="photo-card">
          <div class="profile-container">
            <div class="relative z-10 w-full h-full">
              <div class="profile-image-wrapper">
                <img src="@/assets/leandro_ovejero.png" :alt="$t('about.imgPerfil')" class="profile-image" />
              </div>
            </div>
            <div class="profile-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.about-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 1rem;
  padding: 1.75rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  gap: 1rem;
}

.about-card .icon-wrapper {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 212, 191, 0.1);
  border-radius: 0.5rem;
  color: #2dd4bf;
  align-self: flex-start;
}

.about-card:hover {
  border-color: rgba(45, 212, 191, 0.3);
  background: rgba(30, 41, 59, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.3),
    0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.photo-card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(71, 85, 105, 0.5);
  border-radius: 1rem;
  padding: 1.75rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.photo-card:hover {
  border-color: rgba(45, 212, 191, 0.3);
  background: rgba(30, 41, 59, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.3),
    0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
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

.user-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2dd4bf;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.description-text {
  color: #cbd5e1;
  font-size: 0.9375rem;
  line-height: 1.7;
}

.profile-container {
  position: relative;
  width: 100%;
  max-width: 280px;
  aspect-ratio: 1;
}

.profile-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
    0 0 0 2px rgba(45, 212, 191, 0.1);
  transition: all 0.3s ease;
}

.profile-image-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(45, 212, 191, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.profile-image-wrapper:hover::before {
  opacity: 1;
}

.profile-image-wrapper:hover {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6),
    0 0 0 2px rgba(45, 212, 191, 0.4),
    0 0 30px rgba(45, 212, 191, 0.2);
  transform: scale(1.02);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(50%);
  transition: all 0.3s ease;
}

.profile-image-wrapper:hover .profile-image {
  filter: grayscale(0%);
}

.profile-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #2dd4bf;
  border-radius: 50%;
  transform: translate(0, 0);
  z-index: -1;
  transition: all 0.3s ease;
}

.photo-card:hover .profile-border {
  transform: translate(0, 0) scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .profile-container {
    max-width: 240px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {

  .about-card,
  .photo-card {
    padding: 1.5rem;
  }

  .profile-container {
    max-width: 220px;
  }

  .description-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {

  .about-card,
  .photo-card {
    padding: 1.25rem;
  }

  .profile-container {
    max-width: 200px;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>