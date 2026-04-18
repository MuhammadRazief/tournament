<!-- src/views/Teams.vue -->
<template>
    <div class="teams-section">
        <div class="container">
            <!-- Section Header -->
            <SectionHeader 
                subtitle="Tim Peserta"
                title="TEAMS"
                description="Tim-tim terbaik yang berpartisipasi dalam Bogor Champions Cup Mobile Legends Bang Bang"
            />

            <!-- Teams Grid -->
            <div class="teams-grid">
                <TeamCard 
                    v-for="team in sortedTeams" 
                    :key="team.id"
                    :team="team"
                    @click="showTeamDetail"
                />
            </div>

            <!-- Team Modal -->
            <TeamModal 
                :team="selectedTeam"
                @close="closeModal"
            />
        </div>
    </div>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue'
import TeamCard from '@/layouts/teams/TeamCard.vue'
import TeamModal from '@/layouts/teams/TeamModal.vue'
import { teamsData, sortTeamsByName } from '@/data/teamsData.js'

export default {
    name: 'TeamsView',
    components: {
        SectionHeader,
        TeamCard,
        TeamModal
    },
    data() {
        return {
            selectedTeam: null,
            teams: teamsData
        }
    },
    computed: {
        sortedTeams() {
            return sortTeamsByName(this.teams)
        }
    },
    methods: {
        showTeamDetail(team) {
            this.selectedTeam = team
        },
        closeModal() {
            this.selectedTeam = null
        }
    }
}
</script>

<style scoped>
.teams-section {
    padding: 68px 0;
    background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
    min-height: 100vh;  
}

/* .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
} */

.teams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
}

@media screen and (max-width: 768px) {
    .teams-section {
        padding: 40px 0;
    }
    
    .teams-grid {
        gap: 20px;
    }
}

@media screen and (max-width: 480px) {
    .teams-grid {
        grid-template-columns: 1fr;
    }
}
</style>