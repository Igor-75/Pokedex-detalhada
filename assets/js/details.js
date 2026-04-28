const pokemonDetails = document.getElementById('pokemonDetails')
const params = new URLSearchParams(window.location.search)
const pokemonId = params.get('id')

function formatStatName(statName) {
    const names = {
        hp: 'HP',
        attack: 'Ataque',
        defense: 'Defesa',
        'special-attack': 'Ataque Especial',
        'special-defense': 'Defesa Especial',
        speed: 'Velocidade'
    }

    return names[statName] || statName
}

function convertPokemonToDetails(pokemon) {
    return `
        <section class="pokemon-details-card ${pokemon.type}">
            <a class="back-link" href="./index.html">← Voltar para a Pokédex</a>

            <div class="pokemon-details-header">
                <div>
                    <span class="number">#${pokemon.number}</span>
                    <h1>${pokemon.name}</h1>
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>

            <div class="pokemon-info-panel">
                <h2>Informações</h2>

                <div class="info-grid">
                    <div>
                        <strong>Altura</strong>
                        <span>${pokemon.height} m</span>
                    </div>
                    <div>
                        <strong>Peso</strong>
                        <span>${pokemon.weight} kg</span>
                    </div>
                    <div>
                        <strong>Habilidades</strong>
                        <span>${pokemon.abilities.join(', ')}</span>
                    </div>
                </div>

                <h2>Status base</h2>

                <ul class="stats-list">
                    ${pokemon.stats.map((stat) => `
                        <li>
                            <span>${formatStatName(stat.name)}</span>
                            <strong>${stat.value}</strong>
                            <div class="stat-bar">
                                <div style="width: ${Math.min(stat.value, 100)}%"></div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </section>
    `
}

if (!pokemonId) {
    pokemonDetails.innerHTML = '<p>Pokémon não encontrado.</p>'
} else {
    pokeApi.getPokemonById(pokemonId).then((pokemon) => {
        document.title = `${pokemon.name} | Detalhes`
        pokemonDetails.innerHTML = convertPokemonToDetails(pokemon)
    })
}
