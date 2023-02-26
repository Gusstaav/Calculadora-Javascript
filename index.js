function Insert(x){
    var valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= valor + x

    
}

function Clear(){
    document.getElementById('resultado').innerHTML=""
}

function Back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function Calcular(){
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado)
        }else{
            document.getElementById('resultado').innerHTML="..."
        }
}