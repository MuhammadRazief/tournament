// src/data/standingsData.js
export const standingsData = [
    {
        id: 1,
        name: 'RRQ Hoshi',
        shortName: 'RRQ',
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
        shortName: 'EVOS',
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
        shortName: 'BTR',
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
        shortName: 'ONIC',
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
        shortName: 'AE',
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
        shortName: 'RBL',
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
        shortName: 'GEEK',
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
        shortName: 'AURA',
        logo: require('@/assets/BCC1.png'),
        matchWin: 0,
        matchLoss: 5,
        gameWin: 1,
        gameLoss: 10,
        netGame: -9,
        points: 0
    }
]

// Sorting berdasarkan poin dan net game
export const sortStandings = (standings) => {
    return [...standings].sort((a, b) => {
        if (a.points !== b.points) {
            return b.points - a.points
        }
        return b.netGame - a.netGame
    })
}

// Format net game
export const formatNetGame = (netGame) => {
    return netGame >= 0 ? `+${netGame}` : `${netGame}`
}

// Get class for net game
export const getNetGameClass = (netGame) => {
    return netGame >= 0 ? 'positive' : 'negative'
}