import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Home = async () => {
    const page = await getHash();
    const characters = await getData(page);

    const view = `
    <section class="intro">
        <span>Rick & Morty directory using <a href="https://rickandmortyapi.com/" target="_blank">The Rick & Morty API</a></span>
    </section>
    <div class="Characters">
    ${characters.results.map(character =>`
    <article class="Character-item">
            <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <em>${character.species}</em>
            </a>
        </article>`).join('')}
    </div> 
    `

    return view;
}

export default Home;