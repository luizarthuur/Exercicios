//Seção 1 - 

/*
Claro, aqui está uma lista de 10 exercícios sobre promessas em JavaScript:

1. **Criando uma promessa simples:**
   Crie uma função que retorna uma promessa que é resolvida após um certo período de tempo. Por exemplo, uma função `delayedPromise` que resolve após 1 segundo.

2. **Encadeando promessas:**
   Crie duas funções que retornam promessas. A segunda função deve depender do resultado da primeira. Encadeie essas promessas usando `.then()`.

3. **Tratando erros:**
   Modifique uma das funções do exercício anterior para que ela possa lançar um erro. Adicione um bloco `catch` para lidar com o erro.

4. **Rejeitando uma promessa:**
   Crie uma função que retorna uma promessa que é rejeitada após um certo período de tempo. Por exemplo, uma função `delayedRejection` que é rejeitada após 1 segundo.

5. **Usando Promise.all():**
   Crie três funções que retornam promessas. Use `Promise.all()` para executá-las em paralelo e retornar um array com os resultados quando todas as promessas forem resolvidas.

6. **Usando Promise.race():**
   Crie duas funções que retornam promessas. Use `Promise.race()` para executá-las e retornar o resultado da primeira promessa que for resolvida.

7. **Trabalhando com APIs assíncronas:**
   Faça uma requisição a uma API assíncrona (por exemplo, uma requisição GET usando `fetch`). Use promessas para lidar com a resposta da API.

8. **Trabalhando com múltiplas requisições assíncronas:**
   Faça múltiplas requisições a uma API assíncrona e aguarde todas as respostas usando `Promise.all()`.

9. **Usando async/await:**
   Reescreva uma das funções dos exercícios anteriores usando `async` e `await` em vez de usar `.then()` e `.catch()`.

10. **Tratando erros com async/await:**
    Reescreva um dos exercícios anteriores para usar `async` e `await`, e adicione um bloco `try/catch` para lidar com possíveis erros.*/

//R - 1 :

/*
function delayedPromise () {
    const dadosApi = fetch('UrlExemplo')
    setTimeout(.then(dadosApi), 1000)
}
*/

//R correta 1 - 

/*
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulando dados de uma API após 1 segundo
      resolve('Dados da API após 1 segundo');
    }, 1000);
  });
}

// Exemplo de uso
delayedPromise()
  .then(data => {
    console.log(data); // Saída: Dados da API após 1 segundo
  })
  .catch(error => {
    console.error(error);
  });
*/
/*
function novaPromise1 () {
    return new Promise ((resolve, reject) => {
        const dadosAPI = fetch ('DadosAPIURL');
        .then(
            if (dadosAPI) {
                resolve(console.log('Dados Carregados com sucesso'))
            }
            else {
                reject(console.log('Houve um erro ao carregar os dados'))
            })
        .then(dadosAPI) {
            dadostratados = dadosAPI.json()
        }

    })

    .then(novaPromise1) {
        segunda função
    }
}
Resposta correta:
function novaPromise1() {
    return fetch('DadosAPIURL')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            console.log('Dados Carregados com sucesso');
            return response.json();
        })
        .then(data => {
            // Manipule os dados recebidos
            return 'Segunda função';
        })
        .catch(error => {
            console.error('Houve um erro ao carregar os dados:', error);
            // Você pode tratar o erro aqui ou deixá-lo propagar para o chamador
            throw error;
        });
}
*/


