function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// -----------------------------
// Core Functions

function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) return game[team].players[playerName].points;
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) return game[team].players[playerName].shoe;
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) return game[team].colors;
    }
}

function teamNames() {
    const game = gameObject();
    return Object.values(game)
        .map(team => team.teamName);
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players)
                .map(p => p.number);
        }
    }
}

function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) return game[team].players[playerName];
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let maxShoe = 0, rebounds = 0;
    for (let team in game) {
        const players = game[team].players;
        for (let name in players) {
            if (players[name].shoe > maxShoe) {
                maxShoe = players[name].shoe;
                rebounds = players[name].rebounds;
            }
        }
    }
    return rebounds;
}

// -----------------------------
// Bonus & Super Bonus Functions

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';
    for (let team in game) {
        for (let name in game[team].players) {
            if (name.length > longestName.length) longestName = name;
        }
    }
    return longestName;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0, topPlayer = '';
    for (let team in game) {
        for (let name in game[team].players) {
            if (game[team].players[name].points > maxPoints) {
                maxPoints = game[team].players[name].points;
                topPlayer = name;
            }
        }
    }
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    let winner = '', maxPoints = 0;
    for (let teamKey in game) {
        const totalPoints = Object.values(game[teamKey].players)
            .reduce((sum, p) => sum + p.points, 0);
        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            winner = game[teamKey].teamName;
        }
    }
    return winner;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestNamePlayer = playerWithLongestName();

    let maxSteals = 0;
    for (let team in game) {
        for (let name in game[team].players) {
            if (game[team].players[name].steals > maxSteals) maxSteals = game[team].players[name].steals;
        }
    }

    let playerSteals = 0;

    if (game.home.players[longestNamePlayer]) {
        playerSteals = game.home.players[longestNamePlayer].steals;
    } else if (game.away.players[longestNamePlayer]) {
        playerSteals = game.away.players[longestNamePlayer].steals;
    }

    return playerSteals === maxSteals;
}


module.exports = {
    gameObject,
    numPointsScored,
    shoeSize,
    teamColors,
    teamNames,
    playerNumbers,
    playerStats,
    bigShoeRebounds,
    playerWithLongestName,
    mostPointsScored,
    winningTeam,
    doesLongNameStealATon
};