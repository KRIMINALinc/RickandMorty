import getData from '../utils/getData'

const Footer = async () => {
    const data = await getData()

    let ancles = []
    for (let i = 1; i <= data.info.pages; i++){
        ancles.push(i)
    }

    let a = 0;
    const view = `
    <div class="Footer-pages">
        <h4>Pages</h4>
        <div>
            ${ancles.map(() => 
                `<a href="#/?page=${++a}/">${a}</a>`
            ).join('')}
        </div>
    </div>
    `;
    return view
}

export default Footer