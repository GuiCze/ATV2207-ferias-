const prompt = require("prompt-sync")();
const mod = require('./modulo.js')
console.log('Digite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas. \n3:Para sair ');
let ent=prompt();
let ciclo=true;
while(ciclo){
switch (ent) {
    case '1':
        mod.add()
        ent=prompt();
        break;
    case '2':
        mod.ver()
        ent=prompt();
        break;
    case '3':
        ciclo=false;
        break;
    default:
        console.log("Entrada inválida, tente novamente.\nDigite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas. \n3:Para sair");
        ent=prompt();
}
}