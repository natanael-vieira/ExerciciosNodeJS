import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;

readFilePromise('./alunos.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
}).catch((error) => {
    console.error(error);
});


// fs.readFile('./alunos.json', (erro, dados) => {
//     if(erro) {
//         console.error(erro);
//         return;
//     }
//     alunos = JSON.parse(dados);
//     console.log('alunos', alunos);
// });