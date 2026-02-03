<template>
    <section id="experience" class="section-container">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold mb-12 flex items-center justify-center">
                <span class="text-teal-400 mr-2">03.</span>
                <span class="heading-gradient">{{ $t("experience.title") }}</span>
            </h2>

            <div class="experience-grid">
                <div v-for="job in jobs" :key="job.id" class="experience-card">
                    <div class="card-header">
                        <div class="icon-wrapper">
                            <svg class="briefcase-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div class="job-info">
                            <h3 class="job-title">
                                {{ $t(`experience.jobs.${job.id}.title`) }}
                                <span class="company-name">@ {{ $t(`experience.jobs.${job.id}.company`) }}</span>
                            </h3>
                            <div class="job-meta">
                                <p class="location">
                                    <svg class="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {{ $t(`experience.jobs.${job.id}.location`) }}
                                </p>
                                <p class="date">{{ $t(`experience.jobs.${job.id}.date`) }}</p>
                            </div>
                        </div>
                    </div>

                    <ul class="responsibilities">
                        <li v-for="index in getNumberOfPoints(job.id)" :key="index" class="responsibility-item">
                            <span class="bullet">▹</span>
                            <span>{{ $t(`experience.jobs.${job.id}.point${index}`) }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: "Experience",
    setup() {
        const { t } = useI18n();
        const jobs = [{ id: "weyop" }, { id: "cyberArgSistemas" }];

        const getNumberOfPoints = (jobId) => {
            let count = 1;
            while (
                t(`experience.jobs.${jobId}.point${count}`) !==
                `experience.jobs.${jobId}.point${count}`
            ) {
                count++;
            }
            return count - 1;
        };

        return {
            jobs,
            getNumberOfPoints,
        };
    },
};
</script>

<style scoped>
.experience-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

.experience-card {
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(71, 85, 105, 0.5);
    border-radius: 1rem;
    padding: 1.75rem;
    transition: all 0.3s ease;
}

.experience-card:hover {
    border-color: rgba(45, 212, 191, 0.3);
    background: rgba(30, 41, 59, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.3),
        0 0 20px -5px rgba(45, 212, 191, 0.1);
}

.card-header {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
}

.icon-wrapper {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(45, 212, 191, 0.1);
    border-radius: 0.75rem;
    color: #2dd4bf;
}

.briefcase-icon {
    width: 1.75rem;
    height: 1.75rem;
}

.job-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.job-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #f1f5f9;
    line-height: 1.4;
}

.company-name {
    color: #2dd4bf;
    font-weight: 700;
}

.job-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
}

.location {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: #cbd5e1;
    font-weight: 500;
}

.location-icon {
    width: 1rem;
    height: 1rem;
    color: #2dd4bf;
}

.date {
    color: #94a3b8;
    font-weight: 500;
}

.responsibilities {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-left: 4.25rem;
}

.responsibility-item {
    display: flex;
    gap: 0.75rem;
    color: #cbd5e1;
    font-size: 0.9375rem;
    line-height: 1.6;
}

.bullet {
    color: #2dd4bf;
    flex-shrink: 0;
    font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .responsibilities {
        padding-left: 0;
    }
}

@media (max-width: 768px) {
    .experience-card {
        padding: 1.5rem;
    }

    .card-header {
        flex-direction: column;
        gap: 1rem;
    }

    .icon-wrapper {
        width: 2.5rem;
        height: 2.5rem;
    }

    .briefcase-icon {
        width: 1.5rem;
        height: 1.5rem;
    }

    .job-title {
        font-size: 1.125rem;
    }

    .job-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
}

@media (max-width: 480px) {
    .experience-card {
        padding: 1.25rem;
    }

    .job-title {
        font-size: 1rem;
    }

    .responsibility-item {
        font-size: 0.875rem;
    }
}
</style>