<!-- src/components/teams/TeamModal.vue -->
<template>
    <div v-if="team" class="modal" @click.self="$emit('close')">
        <div class="modal-content">
            <button class="modal-close" @click="$emit('close')">&times;</button>
            
            <div class="modal-header">
                <img :src="team.logo" :alt="team.name" class="modal-logo" />
                <h2>{{ team.name }}</h2>
                <p class="team-fullname">{{ team.fullName }}</p>
            </div>
            
            <div class="modal-body">
                <div class="modal-section" v-if="team.players && team.players.length">
                    <h3>Daftar Pemain</h3>
                    <div class="players-list">
                        <div v-for="player in team.players" :key="player.id" class="player-item">
                            <div class="player-avatar">{{ player.name.charAt(0) }}</div>
                            <div class="player-info">
                                <div class="player-name">{{ player.name }}</div>
                                <div class="player-role">{{ player.role }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamModal',
    props: {
        team: {
            type: Object,
            default: null
        }
    },
    emits: ['close'],
    watch: {
        team: {
            handler(val) {
                if (val) {
                    document.body.style.overflow = 'hidden'
                } else {
                    document.body.style.overflow = ''
                }
            },
            immediate: true
        }
    },
    beforeUnmount() {
        document.body.style.overflow = ''
    }
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.modal-content {
    background: white;
    border-radius: 24px;
    max-width: 500px;
    width: 90%;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 20px;
    background: white;
    border: none;
    font-size: 28px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.modal-close:hover {
    background: #ef4444;
    color: white;
}

.modal-header {
    text-align: center;
    padding: 40px 20px 20px;
    background: linear-gradient(135deg, #f5f7fa, #ffffff);
    border-radius: 24px 24px 0 0;
}

.modal-logo {
    width: 100px;
    height: 100px;
    object-fit: contain;
    border-radius: 50%;
    background: #f5f7fa;
    padding: 12px;
    margin-bottom: 16px;
}

.modal-header h2 {
    font-size: 28px;
    font-weight: 800;
    color: #1a1a2e;
    margin: 0 0 4px;
}

.team-fullname {
    font-size: 14px;
    color: #999;
    margin: 0;
}

.modal-body {
    padding: 24px;
}

.modal-section {
    margin-bottom: 24px;
}

.modal-section h3 {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 12px;
    padding-left: 12px;
    border-left: 3px solid #3852B4;
}

.modal-section p {
    font-size: 14px;
    line-height: 1.6;
    color: #666;
    margin: 0;
}

.players-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.player-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: #f8f9ff;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.player-item:hover {
    background: #eef2ff;
}

.player-avatar {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #3852B4, #2a3f8a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    color: white;
}

.player-info {
    flex: 1;
}

.player-name {
    font-size: 15px;
    font-weight: 700;
    color: #1a1a2e;
    margin-bottom: 4px;
}

.player-role {
    font-size: 12px;
    color: #999;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
}

.contact-item svg {
    width: 20px;
    height: 20px;
    stroke: #3852B4;
}

.contact-item span {
    font-size: 14px;
    color: #666;
}

@media screen and (max-width: 480px) {
    .modal-header h2 {
        font-size: 22px;
    }

    .modal-logo {
        width: 80px;
        height: 80px;
    }
}
</style>