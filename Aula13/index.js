import { getPeople } from "./starWarsService.js";

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleName = starWarsPeople.map((person) => {
        // const name = person.name;
        // const height = person.height; 
        const {name, height} = person; /* Neste caso eu substituí as duas constantes por uma só utilizando chaves, como se fosse um objeto, dessa forma eu não altero 
        o código em nada, apenas apresento ele em uma linha diminuindo meu código, assim como deixar ele mais elegante */
        return {
            name, height
        }
    });
    console.log(starWarsPeopleName);
}

main();