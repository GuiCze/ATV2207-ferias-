const prompt = require("prompt-sync")();
let ferias=[];
const ADD = () =>{
    let atv = [];
    console.log('Digite o dia que realizou as atividades:');
    atv.push(prompt());

    while (true) {
        console.log('Digite uma atividade ou "sair" quando finalizar:');
        let input = prompt();
        if (input.toLowerCase() == "sair") {
            break;
        } else {
            atv.push(input);
        }
    }

    let atvObj = {};
    atv.forEach((item, index) => {
        if (index === 0) {
            atvObj["dia"] = item;
        } else {
            atvObj[`atividade${index}`] = item;
        }
    });
    ferias.push(atvObj);
    console.log('Digite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas. \n3:Para sair ');
}
function printar(){
    console.log(ferias);
    console.log('Digite:\n1:Adicionar nova atividade. \n2:Listar as atividades realizadas. \n3:Para sair ');
}


module.exports.add = ADD;
module.exports.ver = printar;

