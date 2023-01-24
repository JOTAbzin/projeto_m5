import prompt from "prompt-sync";

const listagem = prompt()
const propriedadeCss = (entrada) => {
    let sair = []
    while (entrada != "sair") {
        saida.push(entrada);
        entrada = listagem("Insira uma propriedade CSS:")
    }
    let resultado = sair.sort().join("\n")
    console.log(resultado)
    
}
propriedadeCss()
