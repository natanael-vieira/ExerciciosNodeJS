function mensagemNatan() {
    const promiseMensagemNatan = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Testanto a função de time out');
            resolve();
        }, 0);
    });
    return promiseMensagemNatan;
}

function mensagemNatanael() {
    console.log('Então, assim esta será a primeira mensagem!');
}

mensagemNatan().then();
mensagemNatanael();

/*Refatorando o callback utilizamos a promise para fazer com que esta sequência de mensagens seja exibidas na ordem que eu 
chamei elas, ou seja, na sequência que coloquei cada uma delas no código, e sem o callback, utilizando a promise, 
ele vai garantir com que esta sequência seja obedecida.*/