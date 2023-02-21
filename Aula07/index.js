function mensagemNatan(callback) {
    setTimeout(() => {
        console.log('Testanto a função de time out')
        callback()
    }, 0);
}

function mensagemNatanael() {
    console.log('Então, assim esta será a primeira mensagem!')
}

mensagemNatan(mensagemNatanael)
//mensagemNatanael()

//Mas para garantir que a mensagem que tenha o setTimeout ainda assim reproduza primeiro, basta criar um parâmetro e utilizar a função que viria a seguir, 
//mas reproduziria primeiro, chamando a função como parâmetro. Garantindo assim o sincronismo das chamadas, mas precisa ficar esperto para não criar uma
//complexidade desnecessária.