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

 

 //10 - Crie uma função que recebe uma Promise como parâmetro e retorna uma nova Promise que resolve com o mesmo valor, mas apenas após 1 segundo adicional.

 //Seção 2 - Exercicios de async await:

 1- Criando uma função async: Escreva uma função async que retorna uma Promise que resolve depois de um segundo. Em seguida, use async/await para chamar essa função e imprimir o resultado.
2 - Tratando erros: Modifique a função do exercício anterior para que ela tenha uma chance de erro aleatória. Use try/catch para capturar esse erro quando você chamar a função.
3 - Chamadas de API assíncronas: Faça uma chamada de API assíncrona usando fetch(). Imprima os dados retornados da API.
4 - Esperando múltiplas Promises: Crie duas funções assíncronas que retornam Promises que resolvem após diferentes períodos de tempo. Use Promise.all() para esperar que ambas as Promises sejam resolvidas e, em seguida, imprima os resultados.
5 - Aninhando async/await: Crie uma função async que chama outra função async dentro dela. Imprima o resultado retornado pela função interna.
Iteração assíncrona: Crie uma função async que percorra uma lista de URLs e faça uma chamada de API para cada URL usando await. Imprima os resultados quando todas as chamadas de API forem concluídas.
Limitando chamadas assíncronas: Modifique o exercício anterior para que, no máximo, apenas três chamadas de API sejam feitas simultaneamente. Use Promise.all() com um número limitado de Promises.
Timeout em uma Promise: Crie uma função que retorna uma Promise que resolve após um certo tempo, mas rejeita se demorar mais do que um limite especificado. Use Promise.race() para implementar isso.
Executando em paralelo e sequencialmente: Crie uma função que chama três funções assíncronas em paralelo e, em seguida, chama outra função assíncrona após todas as três serem concluídas. Use async/await para garantir a ordem correta de execução.
Promisify: Transforme uma função de estilo de callback em uma versão assíncrona usando promisify do módulo 'util' do Node.js. Em seguida, chame essa função assíncrona usando await.



// Resolução 1 - correta

async function executaP1() {

  const p1 = await new Promise ((resolve) => {
    setTimeout(() => {
      resolve('A função carregou corretamente!')}, 1000
    )
  });

}

executaP1(p1)
console.log(p1)



//Resolução 2 - Tratando erros: Modifique a função do exercício anterior para que ela tenha uma chance de erro aleatória. Use try/catch para capturar esse erro quando você chamar a função. meio certo

async function executaP1() {
  try {
    const p1 = await new Promise ((resolve, reject) => {
      var numero = parseInt(Math.random() * 5 + 1);

      if (numero === 5) {
        setTimeout(() => {
          resolve(console.log('O resultado é 5'));
        }, 1000);
      } else {
        setTimeout(() => {
          reject(new Error(`O resultado é diferente de 5, o número é ${numero}`));
        }, 1000);
      }
    });
  } catch (error) {
    console.log('Aconteceu um erro:', error.message);
  }
}

executaP1();
 

executaP1(p1)
console.log(p1)



// Resolução 3 - Chamadas de API assíncronas: Faça uma chamada de API assíncrona usando fetch(). Imprima os dados retornados da API.

async function puxaDados () {
  try {
    await const apiDados = fetch('UrldaAPI')
    await apiDados.then((dados))
    await apiDados.then(dados.Json())

    console.log(`O dado impresso é ${dados.nome[0]}`)
  }

  catch(error) {
    console.log('Houve um erro ao carregar os dados' + error)
  }
}



//Resolução 4 - Esperando múltiplas Promises: Crie duas funções assíncronas que retornam Promises que resolvem após diferentes períodos de tempo. Use Promise.all() para esperar que ambas as Promises sejam resolvidas e, em seguida, imprima os resultados.

Errei algumas sintaxes (catch deve estar dentro do try)

async function myPromises () {

  try{
  const p1 =  await new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('p1 resolvida!'));
    }, 1000);
  })
  const p2 = await new Promise((reject,resolve) => {
    setTimeout(() => {
      resolve(console.log('p2 resolvida!'));
    }, 1000);
  })

  catch(erro) {
    console.log('Houve um erro!' + erro)
  }
}

  Promise.all([p1,p2]) {
    resolve(console.log('Todas as promises foram resolvidas!'))
  }
}

myPromises()


// 5 - Aninhando async/await: Crie uma função async que chama outra função async dentro dela. Imprima o resultado retornado pela função interna.

async function chamaFuncao () {

  async function coletaDados () {
    await let recado = 'Deu tudo certo! os dados foram carregados com sucesso'
  }

  console.log(recado)

}

chamaFuncao();
*/

//6 - 