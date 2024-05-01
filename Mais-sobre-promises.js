//Criação de uma promise

const myPromise = new Promise((resolve, reject) => {
    const nome = 'Matheus'

    if (nome === 'Matheus') {
        resolve('Usuário Matheus Encontrado')
    }
    else {
        reject('O usuário Matheus não foi encontrado')
    }
})

myPromise.then((data) => { //resposta da promise, mostrando os dados obtidos e em qual das duas instancias ela caiu, na resolve ou reject
    console.log(data)
})

//then e catch são funções utilizadas para o tratamento de retorno das promises, então utilizaremos o then para tratar os resolves das promises e denominar o que vamos fazer com o sucesso da promise, e para o catch trataremos as exceptions (erros) tratando os erros de maneira a deixar o código mais fluido, tratando os erros de maneira planejada e evitando exceptions.

//Encadeamento de thens

const myPromise2 = new Promise((resolve, reject) => { //declaração da promise
    const nome = 'Matheus'

    if (nome === 'Matheus') {
        resolve('Usuário Matheus Encontrado')
    }
    else {
        reject('O usuário Matheus não foi encontrado')
    }
})

myPromise2 //quando utilizamos o then, o nome em que os dados sao armazenados pouco importa, neste caso usamos data, StringModificada, MinhaString
    .then((data) => { 
        return data.toLowerCase()
    })
    .then(StringModificada => {
        console.log(StringModificada)
    })
    .then(minhaString => {
        minhaString.toUpperCase()
    })
    .then(minhaString =>{
        console.log(minhaString)
    })


// utilizando o catch

const myPromise3 = new Promise((resolve, reject) => { //declaração da promise
    const nome = 'Matheus'
    
    if (nome === 'Matheus') {
        resolve('Usuário Matheus Encontrado')
    }
    else {
        reject('O usuário Matheus não foi encontrado')
    }
})

myPromise3
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log('Aconteceu um erro ao carregar os dados!' + error)
    })

//Resolvendo várias promessas com all

const p1 = new Promise((resolve) =>{
    resolve('Promessa 1 ok!')
})

const p2 = new Promise((resolve) =>{
    resolve('Promessa 2 ok!')
})

const p3 = new Promise((resolve) =>{
    resolve('Promessa 3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3]) //Utilizamos o promise.all para criar then ou catch para todas as promessas passadas no array da função, a promise.all irá responder um array com os dados de resposta de TODAS as promises passadas no array
    .then(
        console.log(data)
    )


// Resolvendo varias promessas com race

const p4 = new Promise((resolve) =>{
    resolve('Promessa 4 ok!')
})

const p5 = new Promise((resolve) =>{
    resolve('Promessa 5 ok!')
})

const p6 = new Promise((resolve) =>{
    resolve('Promessa 6 ok!')
})

const resolveRace = Promise.race([p1,p2,p3]) //Utilizamos o promise.race para criar then ou catch para todas as promessas passadas no array da função, mas a resposta da promise.race será SEMPRE da promise que responder mais rápido, daí o nome race
    .then(
        console.log(data)
    )

//Para estes dois métodos, devemos declarar todas as promises primeiro, e depois fornecer ao método um array com todas as promessas declaradas

//Caso Real

// Fetch request utilizando a API do Github (Fetch API)

const userName = 'matheusbattisti' //Declarando o username para buscar na API

fetch(`https://api.github.com/users/${username}`, { //realizando um fetch que retorna uma promise com os dados
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => { //Passando para o navegador o que ele deve fazer com esses dados capturados com fetch
    console.log(typeof(response))
    console.log(response)
    return response.json() //Transformando esses dados em JSON para poder fazer algo com eles
}).then((data)=> {
    console.log(`O nome do usuário é ${data.userName}`) //Fazendo algo com os dados
}).catch((error) => {
    console.log('Ocorreu um erro' + error) //Tratando possíveis erros com catch
})

