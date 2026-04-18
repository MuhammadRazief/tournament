<!-- src/components/teams/TeamCard.vue -->
<template>
    <div class="team-card" @click="$emit('click', team)">
        <!-- Background Gradient -->
        <div class="card-bg"></div>
        
        <!-- Card Content -->
        <div class="card-content">
            <div class="team-logo-wrapper">
                <img :src="team.logo" :alt="team.name" class="team-logo" />
            </div>
            <h3 class="team-name">{{ team.name }}</h3>
            <p class="team-fullname">{{ team.fullName }}</p>
        
        </div>
        
        <!-- Hover Overlay -->
        <div class="card-overlay">
            <div class="overlay-content">
                <span class="view-detail">Lihat Detail</span>
                <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </div>
        
        <!-- Corner Decoration -->
        <div class="corner-decoration"></div>
    </div>
</template>

<script>
export default {
    name: 'TeamCard',
    props: {
        team: {
            type: Object,
            required: true
        }
    },
    emits: ['click']
}
</script>

<style scoped>
.team-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Background Gradient dengan animasi */
.card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
    transition: transform 0.4s ease;
}

.team-card:hover .card-bg {
    transform: scale(1.05);
}

/* Card Content */
.card-content {
    position: relative;
    z-index: 2;
    padding: 40px 20px;
    text-align: center;
    backdrop-filter: blur(0px);
    transition: all 0.3s ease;
}

.team-logo-wrapper {
    margin-bottom: 20px;
    position: relative;
}

.team-logo {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 50%;
    background: #f5f7fa;
    padding: 12px;
    transition: transform 0.3s ease;
}

.team-card:hover .team-logo {
    transform: scale(1.05) rotate(5deg);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.team-name {
    font-size: 24px;
    font-weight: 800;
    color: white;
    margin: 0 0 8px;
    letter-spacing: -0.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.team-fullname {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 15px;
    font-weight: 500;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    70% {
        transform: scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: scale(0.8);
        opacity: 1;
    }
}

/* Hover Overlay */
.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #3852B4, #2a3f8a);
    padding: 15px;
    text-align: center;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 3;
}

.team-card:hover .card-overlay {
    transform: translateY(0);
}

.overlay-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.view-detail {
    color: white;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.arrow-icon {
    width: 18px;
    height: 18px;
    stroke: white;
    transition: transform 0.3s ease;
}

.team-card:hover .arrow-icon {
    transform: translateX(5px);
}

/* Corner Decoration */
.corner-decoration {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, transparent 50%, rgba(255, 255, 255, 0.1) 50%);
    z-index: 1;
    pointer-events: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
    .card-content {
        padding: 30px 15px;
    }

    .team-logo {
        width: 75px;
        height: 75px;
        padding: 12px;
    }

    .team-name {
        font-size: 20px;
    }

    .team-fullname {
        font-size: 11px;
    }
}

@media screen and (max-width: 480px) {
    .card-content {
        padding: 25px 12px;
    }

    .team-logo {
        width: 60px;
        height: 60px;
        padding: 10px;
    }

    .team-name {
        font-size: 18px;
    }
}
</style>