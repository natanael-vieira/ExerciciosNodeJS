import { getPeople } from "./starWarsService.js";

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleName = starWarsPeople.map((person) => {
        const name = person.name;
        const height = person.height;
        return {
            name, height
        }
    });
    console.log(starWarsPeopleName);
}

main();