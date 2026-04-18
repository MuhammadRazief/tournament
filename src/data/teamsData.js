// src/data/teamsData.js
export const teamsData = [
    {
        id: 1,
        name: 'AE',
        fullName: 'Alter Ego',
        logo: require('@/assets/BCC1.png'),
        city: 'Tangerang',
        instagram: '@alter.ego',
        email: 'alterego@bogorchampions.com',
        description: 'Alter Ego adalah tim pendatang baru yang siap memberikan kejutan di turnamen ini.',
        players: [
            { id: 1, name: 'Celiboy', role: 'Gold Laner' },
            { id: 2, name: 'Nino', role: 'Jungler' },
            { id: 3, name: 'Pai', role: 'Roamer' }
        ]
    },
    {
        id: 2,
        name: 'BTR',
        fullName: 'Bigetron Alpha',
        logo: require('@/assets/BCC1.png'),
        city: 'Bandung',
        instagram: '@bigetron.alpha',
        email: 'bigetron@bogorchampions.com',
        description: 'Bigetron Alpha adalah tim dengan basis penggemar terbesar di Indonesia.',
        players: [
            { id: 1, name: 'Kyyy', role: 'Gold Laner' },
            { id: 2, name: 'Rippo', role: 'Jungler' },
            { id: 3, name: 'Rinaz', role: 'Roamer' },
            { id: 4, name: 'Ucup', role: 'Mid Laner' },
            { id: 5, name: 'Luxxy', role: 'Exp Laner' }
        ]
    },
    {
        id: 3,
        name: 'DEWA',
        fullName: 'Dewa United',
        logo: require('@/assets/BCC1.png'),
        city: 'Jakarta',
        instagram: '@dewa.united',
        email: 'dewa@bogorchampions.com',
        description: 'Dewa United adalah tim yang konsisten dengan performa terbaik.',
        players: [
            { id: 1, name: 'Ahmad', role: 'Gold Laner' },
            { id: 2, name: 'Budi', role: 'Jungler' },
            { id: 3, name: 'Caca', role: 'Roamer' }
        ]
    },
    {
        id: 4,
        name: 'EVOS',
        fullName: 'EVOS Legends',
        logo: require('@/assets/BCC1.png'),
        city: 'Jakarta',
        instagram: '@evos.legends',
        email: 'evos@bogorchampions.com',
        description: 'EVOS Legends adalah tim dengan gaya permainan agresif.',
        players: [
            { id: 1, name: 'Antimage', role: 'Gold Laner' },
            { id: 2, name: 'Tazz', role: 'Jungler' },
            { id: 3, name: 'Cr1te', role: 'Mid Laner' },
            { id: 4, name: 'Rekty', role: 'Exp Laner' },
            { id: 5, name: 'Wann', role: 'Roamer' }
        ]
    },
    {
        id: 5,
        name: 'GEEK',
        fullName: 'Geek Fam',
        logo: require('@/assets/BCC1.png'),
        city: 'Yogyakarta',
        instagram: '@geek.fam',
        email: 'geekfam@bogorchampions.com',
        description: 'Geek Fam dengan pemain-pemain muda berbakat.',
        players: [
            { id: 1, name: 'Baloyskie', role: 'Gold Laner' },
            { id: 2, name: 'Karss', role: 'Jungler' }
        ]
    },
    {
        id: 6,
        name: 'NAVI',
        fullName: 'Navi Esports',
        logo: require('@/assets/BCC1.png'),
        city: 'Surabaya',
        instagram: '@navi.esports',
        email: 'navi@bogorchampions.com',
        description: 'Navi Esports tim dengan strategi unik.',
        players: [
            { id: 1, name: 'Zayn', role: 'Gold Laner' },
            { id: 2, name: 'Rizky', role: 'Jungler' },
            { id: 3, name: 'Fajar', role: 'Roamer' }
        ]
    },
    {
        id: 7,
        name: 'ONIC',
        fullName: 'ONIC Esports',
        logo: require('@/assets/BCC1.png'),
        city: 'Jakarta',
        instagram: '@onic.esports',
        email: 'onic@bogorchampions.com',
        description: 'ONIC Esports dikenal dengan mental juara.',
        players: [
            { id: 1, name: 'Sanz', role: 'Gold Laner' },
            { id: 2, name: 'Kairi', role: 'Jungler' },
            { id: 3, name: 'Butss', role: 'Roamer' },
            { id: 4, name: 'CW', role: 'Mid Laner' },
            { id: 5, name: 'Kiboy', role: 'Exp Laner' }
        ]
    },
    {
        id: 8,
        name: 'RRQ',
        fullName: 'RRQ Hoshi',
        logo: require('@/assets/BCC1.png'),
        city: 'Jakarta',
        instagram: '@rrq.hoshi',
        email: 'rrq@bogorchampions.com',
        description: 'RRQ Hoshi adalah tim esports profesional terbesar di Indonesia.',
        players: [
            { id: 1, name: 'Lemon', role: 'Gold Laner' },
            { id: 2, name: 'Alberttt', role: 'Jungler' },
            { id: 3, name: 'Skylar', role: 'Mid Laner' },
            { id: 4, name: 'R7', role: 'Exp Laner' },
            { id: 5, name: 'Vyn', role: 'Roamer' }
        ]
    },
    {
        id: 9,
        name: 'TLID',
        fullName: 'Team Liquid ID',
        logo: require('@/assets/BCC1.png'),
        city: 'Jakarta',
        instagram: '@teamliquid.id',
        email: 'tlid@bogorchampions.com',
        description: 'Team Liquid ID adalah tim internasional dengan basis di Indonesia.',
        players: [
            { id: 1, name: 'Widy', role: 'Gold Laner' },
            { id: 2, name: 'Favian', role: 'Jungler' },
            { id: 3, name: 'Rizki', role: 'Roamer' }
        ]
    }
]

export const sortTeamsByName = (teams) => {
    return [...teams].sort((a, b) => a.name.localeCompare(b.name))
}