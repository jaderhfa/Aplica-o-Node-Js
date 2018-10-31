function somar(x1,x2){
        return x1 + x2;
}
exports.somar = somar;

function subtrair(x1,x2){
         return x1 - x2;
}
exports.subtrair = subtrair;

function multiplicar(x1,x2){
    return x1 * x2;
}
exports.multiplicar = multiplicar;

function dividir(x1,x2){
    if(x2==0){
      return erroDivPorZero();
    }else{
        return x1 / x2;
    }
    
}
exports.dividir = dividir;

function erroDivPorZero(){
    console.log('Divisão por zero nao aceita');
}