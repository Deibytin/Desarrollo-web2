/* LegadoSport Application Logic */

const app = {
    // Mock Data
    data: {
        players: [
            { name: "Carlos Ruiz", position: "Delantero", category: "U-18", status: "Activo" },
            { name: "Juan Mendez", position: "Portero", category: "U-18", status: "Activo" },
            { name: "David López", position: "Mediocampo", category: "U-18", status: "Lesionado" },
            { name: "Mateo Silva", position: "Defensa", category: "U-16", status: "Activo" },
            { name: "Lucas Dias", position: "Delantero", category: "U-16", status: "Activo" }
        ],
        tournaments: [
            { name: "Copa Regional 2026", status: "En curso" },
            { name: "Liga Juvenil de Verano", status: "Inscrito" },
            { name: "Torneo Relámpago", status: "Finalizado" }
        ],
        playerStats: [
            { tournament: "Copa Regional 2026", matches: 5, goals: 4, assists: 2 },
            { tournament: "Liga Juvenil de Verano", matches: 0, goals: 0, assists: 0 },
            { tournament: "Torneo Relámpago", matches: 10, goals: 8, assists: 3 }
        ]
    },

    // Navigation / View Switching
    showAdminDashboard: function () {
        this.hideAllSections();
        document.getElementById('admin-dashboard').classList.remove('hidden');
        this.renderAdminView();
    },

    showPlayerDashboard: function () {
        this.hideAllSections();
        document.getElementById('player-dashboard').classList.remove('hidden');
        this.renderPlayerView();
    },

    goHome: function () {
        this.hideAllSections();
        document.getElementById('landing-page').classList.remove('hidden');
    },

    hideAllSections: function () {
        document.querySelectorAll('section').forEach(el => el.classList.add('hidden'));
    },

    // Renders
    renderAdminView: function () {
        const playerList = document.getElementById('admin-players-list');
        playerList.innerHTML = this.data.players.map(p => `
            <tr>
                <td>${p.name}</td>
                <td>${p.position}</td>
                <td><span style="background:rgba(255,255,255,0.1); padding: 4px 8px; border-radius:4px;">${p.category}</span></td>
                <td style="color: ${p.status === 'Activo' ? '#00f260' : 'orange'}">${p.status}</td>
            </tr>
        `).join('');

        const tournamentList = document.getElementById('admin-tournaments-list');
        tournamentList.innerHTML = this.data.tournaments.map(t => `
            <li style="padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between;">
                <span>${t.name}</span>
                <span style="color: var(--text-muted); font-size: 0.9rem;">${t.status}</span>
            </li>
        `).join('');
    },

    renderPlayerView: function () {
        const statsList = document.getElementById('player-stats-list');
        statsList.innerHTML = this.data.playerStats.map(s => `
            <tr>
                <td>${s.tournament}</td>
                <td>${s.matches}</td>
                <td style="color: var(--primary-color); font-weight:bold;">${s.goals}</td>
                <td>${s.assists}</td>
            </tr>
        `).join('');

        // Calculate totals for the header cards
        const totalGoals = this.data.playerStats.reduce((acc, curr) => acc + curr.goals, 0);
        const totalMatches = this.data.playerStats.reduce((acc, curr) => acc + curr.matches, 0);

        document.getElementById('player-goals').innerText = totalGoals;
        document.getElementById('player-matches').innerText = totalMatches;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Any init logic
    console.log("FullSoccer App Initialized");
});
