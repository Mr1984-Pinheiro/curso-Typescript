console.log("Hello World! Este é o meu primeiro códeigo TypeScript ");

console.log("========================================");

//Cannot redeclare block-scoped variable 'nome'. Mesmo arquivo dá esse erro
const nome = "Carlos"; 
//tranforma em var - EcmaScript 3 para navegadores e sistemas mais antigos 

console.log("Olá" + nome + ". Seja bem-vindo!");
//tsc primeiro_codigo.ts --help fornece as flags para versoes de EcmaScript
/*-t VERSION, --target VERSION 
Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 
'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */

console.log("========================================");

class Produto {

    nome: string;
    valor: number;

    constructor(produtoNome, produtoValor){

        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}

const playstation5 = new Produto("Playstation5", 5000);