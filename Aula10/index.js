import fetch from 'node-fetch';

// function main() {
//     console.log('main(');
//     const user = 'natanael-vieira';
//     const apiUrl = 'https://api.github.com';
//     fetch(`${apiUrl}/users/${user}`).then((response) => {
//         return response.json();
//     }).then((user) => {
//         console.log(user);
//     })
// }

async function main() {
    const user = 'natanael-vieira';
    const apiUrl = 'https://api.github.com';
    const response = await fetch (`${apiUrl}/users/${user}`)
    const githubUser = await response.json();
    console.log(githubUser.name)
}

main();
