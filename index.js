const prompt = require("prompt-sync")();
const atv = require('./atividades.js')
console.log('Digite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas.  \n3:Para remover uma atividade em especifico. \n4:Para sair ');
let ent=prompt();
let ciclo=true;
while(ciclo){
switch (ent) {
    case '1':
        atv.add()
        ent=prompt();
        break;
    case '2':
        atv.ver()
        ent=prompt();
        break;
    case '3':
        atv.rem()
        ent=prompt();
        break;
    case '4':
        ciclo=false;
        break;
    default:
        console.log("Entrada inválida, tente novamente.\nDigite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas. \n3:Para remover uma atividade em especifico. \n4:Para sair");
        ent=prompt();
}
}