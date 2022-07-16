let _Peso= document.getElementById("Peso");
let _Altura= document.getElementById("Altura");
let _Resultado=document.getElementById("Resultado");

function Calcula(){
  
    let IMC="";
    let Cor="";
    let peso=_Peso.value;
    let altura=_Altura.value;
    let Calculo=peso/(altura*altura);

    if(Calculo < 18.5)
    {
     IMC="Magresa";
     Cor="rgb(255, 94, 0)"; 
    }
    else if(Calculo <= 18.6 ||  Calculo <=24.9){
     IMC="Peso Normal";
     Cor="green";
    }
     else if(Calculo <= 25 || Calculo <= 29.9){
     IMC="Sobrepeso";
     Cor="rgb(255, 94, 0)"; 
    }
     else if(Calculo <= 30 || Calculo <= 34.9 ){
    IMC="Obesidade de Garau I";
    Cor="red"; 
    }
     else if(Calculo <= 35 || Calculo <= 39.9){
    IMC="Obesidade de Garau II";
    Cor="red" ;
    }
     else if(Calculo >= 40){
    IMC="Obesidade de Garau III";
    Cor="red" ;
    }
    
    _Resultado.innerHTML = `<p style="color:${Cor} ;">O seu Indice de Massa Corporal é : ${Calculo.toFixed(2)} </p>`;
    _Resultado.innerHTML += `<p style="color:${Cor} ;"> Você está com : ${IMC} </p>`;
}
