<template>
    <div class="standings-section">
        <div class="container">
            <!-- Section Header -->
            <div class="section-header">
                <span class="subtitle">Klasemen</span>
                <h2 class="title">STANDINGS</h2>
                <div class="divider"></div>
                <p class="description">
                    Klasemen sementara Bogor Champions Cup Mobile Legends Bang Bang
                </p>
            </div>

            <!-- Standings Table -->
            <div class="table-wrapper">
                <table class="standings-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team</th>
                            <th>POINT</th>
                            <th>MATCH W/L</th>
                            <th>GAME W/L</th>
                            <th>NET</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(team, index) in standings" :key="team.id">
                            <td class="rank">{{ index + 1 }}</td>
                            <td class="team-cell">
                                <div class="team-info">
                                    <img :src="team.logo" class="team-logo" :alt="team.name" />
                                    <span class="team-name">{{ team.name }}</span>
                                </div>
                            </td>
                            <td class="points">{{ team.points }}</td>
                            <td class="wl">
                                <span class="win">{{ team.matchWin }}</span>
                                <span class="separator">-</span>
                                <span class="loss">{{ team.matchLoss }}</span>
                            </td>
                            <td class="game-wl">
                                <span class="game-win">{{ team.gameWin }}</span>
                                <span class="separator">-</span>
                                <span class="game-loss">{{ team.gameLoss }}</span>
                            </td>
                            <td class="net-game" :class="team.netGame >= 0 ? 'positive' : 'negative'">
                                {{ team.netGame >= 0 ? '+' + team.netGame : team.netGame }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StandingsTable',
    data() {
        return {
            standings: [
                {
                    id: 1,
                    name: 'RRQ Hoshi',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 5,
                    matchLoss: 0,
                    gameWin: 10,
                    gameLoss: 2,
                    netGame: 8,
                    points: 15
                },
                {
                    id: 2,
                    name: 'EVOS Legends',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 4,
                    matchLoss: 1,
                    gameWin: 9,
                    gameLoss: 3,
                    netGame: 6,
                    points: 12
                },
                {
                    id: 3,
                    name: 'Bigetron Alpha',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 4,
                    matchLoss: 1,
                    gameWin: 8,
                    gameLoss: 4,
                    netGame: 4,
                    points: 12
                },
                {
                    id: 4,
                    name: 'ONIC Esports',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 3,
                    matchLoss: 2,
                    gameWin: 7,
                    gameLoss: 5,
                    netGame: 2,
                    points: 9
                },
                {
                    id: 5,
                    name: 'Alter Ego',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 2,
                    matchLoss: 3,
                    gameWin: 5,
                    gameLoss: 7,
                    netGame: -2,
                    points: 6
                },
                {
                    id: 6,
                    name: 'Rebellion Zion',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 2,
                    matchLoss: 3,
                    gameWin: 4,
                    gameLoss: 8,
                    netGame: -4,
                    points: 6
                },
                {
                    id: 7,
                    name: 'Geek Fam',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 1,
                    matchLoss: 4,
                    gameWin: 3,
                    gameLoss: 9,
                    netGame: -6,
                    points: 3
                },
                {
                    id: 8,
                    name: 'Aura Fire',
                    logo: require('@/assets/BCC1.png'),
                    matchWin: 0,
                    matchLoss: 5,
                    gameWin: 1,
                    gameLoss: 10,
                    netGame: -9,
                    points: 0
                }
            ]
        }
    }
}
</script>

<style scoped>
.standings-section {
    padding: 80px 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Section Header */
.section-header {
    text-align: center;
    margin-bottom: 40px;
}

.subtitle {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #3852B4;
    background: rgba(56, 82, 180, 0.1);
    padding: 6px 16px;
    border-radius: 30px;
    margin-bottom: 16px;
}

.title {
    font-size: 32px;
    font-weight: 800;
    color: #1a1a2e;
    margin: 0 0 20px;
    letter-spacing: -0.5px;
}

.divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3852B4, #FFD700);
    margin: 0 auto 20px;
    border-radius: 3px;
}

.description {
    max-width: 600px;
    margin: 0 auto;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
}

/* Table Wrapper - Tanpa overflow scroll */
.table-wrapper {
    /* border-radius: 16px; */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: white;
    overflow: hidden;
}

.standings-table {
    width: 100%;
    border-collapse: collapse;
}

/* Header Styles */
.standings-table thead tr {
    background: linear-gradient(135deg, #3852B4, #2a3f8a);
    color: white;
}

.standings-table th {
    padding: 14px 8px;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    white-space: nowrap;
}

/* Body Styles */
.standings-table td {
    padding: 12px 8px;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    font-size: 12px;
    font-weight: 500;
    color: #333;
}

.standings-table tbody tr:hover {
    background: #f8f9ff;
    transition: background 0.2s ease;
}

/* Team Cell */
.team-cell {
    text-align: left !important;
    padding: 12px 4px 12px 8px !important;
}

.team-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.team-logo {
    width: 50px;
    height: 50px;
    display: flex;
}

.team-name {
    font-weight: 600;
    color: #1a1a2e;
    font-size: 12px;
    white-space: nowrap;
}

/* W/L */
.wl, .game-wl {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
}

.win, .game-win {
    color: #10b981;
    font-weight: 600;
    font-size: 12px;
}

.loss, .game-loss {
    color: #ef4444;
    font-weight: 600;
    font-size: 12px;
}

.separator {
    color: #999;
    font-size: 11px;
}

/* Net Game */
.net-game {
    font-weight: 600;
    font-size: 12px;
    white-space: nowrap;
}

.net-game.positive {
    color: #10b981;
}

.net-game.negative {
    color: #ef4444;
}

/* Points */
.points {
    font-weight: 700;
    color: #3852B4;
    font-size: 13px;
    white-space: nowrap;
}

/* Rank */
.rank {
    font-weight: 700;
    color: #3852B4;
    font-size: 13px;
    white-space: nowrap;
}
/* ============================================
   RESPONSIVE - FULL TANPA SCROLL
   ============================================ */
@media screen and (max-width: 768px) {
    .standings-section {
        padding: 40px 0;
    }

    .title {
        font-size: 28px;
    }

    .description {
        font-size: 14px;
    }

    .standings-table th {
        padding: 12px 5px;
        font-size: 11px;
    }

    .standings-table td {
        padding: 10px 5px;
        font-size: 11px;
    }

    .team-cell {
        padding: 10px 3px 10px 5px !important;
    }

    .team-logo {
        width: 50px;
        height: 50px;
        font-size: 9px;
    }

    .team-name {
        font-size: 11px;
    }

    .team-info {
        gap: 6px;
    }

    .win, .loss, .game-win, .game-loss, .net-game {
        font-size: 11px;
    }

    .points, .rank {
        font-size: 12px;
    }

    .separator {
        font-size: 10px;
    }

    .wl, .game-wl {
        gap: 2px;
    }
}

@media screen and (max-width: 550px) {
    .container {
        padding: 0 10px;
    }

    .standings-table th {
        padding: 10px 3px;
        font-size: 10px;
    }

    .standings-table td {
        padding: 8px 3px;
        font-size: 10px;
    }

    .team-cell {
        padding: 8px 2px 8px 4px !important;
    }

    .team-logo {
        width: 50px;
        height: 50px;
        font-size: 8px;
        border-radius: 5px;
    }

    .team-name {
        font-size: 10px;
    }

    .team-info {
        gap: 5px;
    }

    .win, .loss, .game-win, .game-loss, .net-game {
        font-size: 10px;
    }

    .points, .rank {
        font-size: 11px;
    }

    .separator {
        font-size: 9px;
    }

    .wl, .game-wl {
        gap: 2px;
    }
}

@media screen and (max-width: 450px) {
    .standings-table th {
        padding: 8px 2px;
        font-size: 12px;
    }

    .standings-table td {
        padding: 6px 2px;
        font-size: 13px;
    }

    .team-logo {
        width: 40px;
        height: 40px;
        font-size: 13px;
    }

    .team-name {
        font-size: 13px;
    }

    .win, .loss, .game-win, .game-loss, .net-game {
        font-size: 13px;
    }

    .points, .rank {
        font-size: 13px;
    }

    .separator {
        font-size: 13px;
    }
}
</style> 