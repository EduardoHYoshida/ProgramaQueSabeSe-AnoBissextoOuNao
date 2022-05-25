let inputanoBi = document.getElementById("anobi");

var resultado = document.getElementById("resultado");

function calcular(){

    let anobi =  inputanoBi.value;

    if (anobi % 400 == 0){
        return resultado.innerHTML = `<p>${resultado} É Ano Bissexto</p>`
    }else if (anobi % 100 == 0){
        return  resultado.innerHTML = `<p>${resultado} Não é Ano Bissexto</p>`    
    }else if (anobi % 4 == 0){
        return resultado.innerHTML = `<p>${resultado} É Ano Bissexto</p>`
    }
        return resultado.innerHTML = `<p>${resultado} Não é Ano Bissexto</p>`   
         
}


 
