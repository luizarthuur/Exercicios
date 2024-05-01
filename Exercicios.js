//Seção 1 - 

/*
1 - Crie uma Promise básica que resolve após 1 segundo e imprima uma mensagem quando for resolvida.
2 - Crie uma Promise que recebe um número como parâmetro e resolve com o dobro desse número após 2 segundos.
3 - Crie uma Promise que simula uma requisição assíncrona a um servidor, que eventualmente será bem-sucedida ou falhará, dependendo de um parâmetro booleano.
4 - Crie uma função que recebe uma lista de URLs e retorna uma Promise que resolve quando todas as URLs forem carregadas com sucesso, ou rejeita se pelo menos uma falhar.
5 - Crie uma função que simula uma operação assíncrona de busca em um banco de dados, retornando uma Promise que resolve com os resultados da busca após 3 segundos.
6 - Crie uma Promise que resolve com um número aleatório entre 1 e 100 após um tempo aleatório entre 1 e 5 segundos.
7 - Crie uma função que recebe um número como parâmetro e retorna uma Promise que resolve se o número for par e rejeita se for ímpar.
8 - Crie uma Promise que simula um processo de login, resolvendo se as credenciais estiverem corretas e rejeitando se estiverem incorretas, após 2 segundos.
9 - Crie uma função que recebe duas Promises como parâmetros e retorna uma nova Promise que resolve com um array contendo os resultados das duas Promises originais, quando ambas forem bem-sucedidas.
10 - Crie uma função que recebe uma Promise como parâmetro e retorna uma nova Promise que resolve com o mesmo valor, mas apenas após 1 segundo adicional.


1 - (correto)
const PromessaBasica = new Promise ((resolve,reject) => {
   resolve('Promise resolvida!')
})

.then((data) => {
   setTimeout(console.log(data), 1000)
})


//2 - Correta
const promiseNumero = new Promise ((resolve,reject) => {
   var numero = 2
   resolve((numero) => {
      setTimeout(numero * 2, 2000)
      return numero
   })
}) .then(
   console.log('O dobro de 2 é' + numero)
)


// 3 - Parcialmente correto, faltou inserir o número booleano
const promessabooleana =  new Promise ((resolve, reject) => {
   resolve('Os dados foram carregados com sucesso!')
   reject('Houve um erro ao carregar os dados')
})

promessabooleana.then((data) => {
   console.log('Obtivemos sucesso ao carregar os dados' + data)
})
promessabooleana.catch((error) => {
   console.log('Houve um erro!' + error)
})

Resposta correta - 

const promessaBooleana = new Promise((resolve, reject) => {
   const sucesso = Math.random() < 0.5; // Simula sucesso ou falha aleatória
   if (sucesso) {
     setTimeout(() => {
       resolve('Os dados foram carregados com sucesso!');
     }, 2000);
   } else {
     setTimeout(() => {
       reject('Houve um erro ao carregar os dados');
     }, 2000);
   }
 });
 
 promessaBooleana.then((data) => {
   console.log('Obtivemos sucesso ao carregar os dados: ' + data);
 }).catch((error) => {
   console.log('Houve um erro: ' + error);
 });


// 4 - Quase correta,quando utilizamos catch nao precisamos utilizar resolve ou reject, vamos direto para then e catch

function capturarURLS () {
   const p1 = fetch('url1')
   const p2 = fetch('url2')
   const p3 = fetch('url3')
   const URLs = [p1,p2,p3]

   const promiseAll = Promise.all(URLs);

   promiseAll.then((responses) => {
     console.log('Todas as URLs foram carregadas corretamente:', responses);
   }).catch((error) => {
     console.log('Houve um erro ao carregar as URLs:', error);
   });
 }
}



// 5 - 

function buscaDados () {
   data = fetch('UrlDedados')

   data.then(dados)

   data.then(
      const promise1 = new Promise ((resolve,reject) => {
         resolve(
            setInterval(console.log(dados)), 3000)

         reject(console.log('Houve um erro no carregamento dos dados'))
      })
   )
}

//5 - Resposta correta - 

function buscaDados() {
   const dataPromise = fetch('UrlDedados');
 
   dataPromise.then((response) => {
     // Tratamento dos dados
     return response.json(); // Exemplo de conversão para JSON
   }).then((data) => {
     console.log('Dados carregados com sucesso:', data);
 
     // Simular uma operação de busca em um banco de dados
     return new Promise((resolve) => {
       setTimeout(() => {
         resolve('Resultado da busca no banco de dados');
       }, 3000);
     });
   }).then((searchResult) => {
     console.log('Resultado da busca:', searchResult);
   }).catch((error) => {
     console.error('Houve um erro no carregamento dos dados:', error);
   });
 }
 
  

 //6 - Crie uma Promise que resolve com um número aleatório entre 1 e 100 após um tempo aleatório entre 1 e 5 segundos.

 function gerarNumero () {
   var numeroAleatorio = parseInt(Math.random() * 100 + 1)
   return numeroAleatorio
 }

function gerarTempo () {
   var tempoAleatorio = parseInt(Math.random() * 5 + 1) *1000
   return tempoAleatorio
}

const promiseGeradora = new Promise((resolve, reject) => {
   setTimeout(() => {
     const numero = gerarNumero(); // Captura o número gerado
     resolve(numero); // Resolve a Promise com o número gerado
   }, gerarTempo());
 });

promiseGeradora.then((data) => {
   console.log("Número gerado:", data);
 });

 // 7 - Crie uma função que recebe um número como parâmetro e retorna uma Promise que resolve se o número for par e rejeita se for ímpar.

 var numero = 3

 function decideNúmero (numero) {
   const promiseRetorno = new Promise ((resolve,reject) => {
      if ((numero % 2) >= 1) {
         resolve('O número em questão é par')
      }

      else {
         reject('O número em questão é impar')
      }
   })
 }

 
 // 8 - Crie uma Promise que simula um processo de login, resolvendo se as credenciais estiverem corretas e rejeitando se estiverem incorretas, após 2 segundos.

 const login = 'josefina'
 const senha = 'monalisa123'

 const checaLogin = new Promise ((resolve,reject) => {
   if (login === 'luiz_arthuur' && senha === 'monalisa123') {
      resolve(console.log('Seja bem vindo, agora você está logado!'))
   }

   else{
      reject(console.log('Seu login ou senha estão incorretos!'))
   }
 })

 checaLogin.then((dados) => {
   alert('Login realizado com sucesso! Bem vindo a página!')
 })

 checaLogin.catch((error) => {
   alert('O login ou senha estão incorretos! Tipo de erro: ' + error)
 })
 

 // 9 - crie uma função que recebe duas Promises como parâmetros e retorna uma nova Promise que resolve com um array contendo os resultados das duas Promises originais, quando ambas forem bem-sucedidas.

 const p1 = new Promise ((resolve,reject) => {
   resolve('p1 está correta')
 })

 const p2 = new Promise ((resolve,reject) => {
   resolve('p2 está correta')
 })

 const promises = [p1,p2]

 const promiseAll = Promise.all(promises) {

 }

 promiseAll.then(data)

 promiseAll.then (
   console.log(data)
 )

 */

 //10 - Crie uma função que recebe uma Promise como parâmetro e retorna uma nova Promise que resolve com o mesmo valor, mas apenas após 1 segundo adicional.