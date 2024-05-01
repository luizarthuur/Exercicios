const api = fetch('http://localhost:3000/videos') //Promise de captura de dados da API - pode retornar positivo (fullfilled) ou negativo (rejected) ou estar pendente (pending)
.then(res => console.log(res.json())) //Tratamento da promise usando then (Código executará o then só após o retorno da promise (negativo ou positivo) assim transformando essa resposta em um JSON)

//As promises podem levar dois argumentos resolve (solução) e reject (erro)

//Para encadear mais processos utilizamos o método then


