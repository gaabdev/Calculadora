var primeirovalor = parseInt(prompt("Digite o primeiro Valor: "))
var segundovalor = parseInt(prompt("Digite o segundo valor: "))
var operaçoes = prompt("Digite 1 para multiplicação, 2 para divisão, 3 para subtração e 4 para multiplição")

if (operaçoes == 1) {
    var resultado = primeirovalor * segundovalor
    document.write("<h2>" + primeirovalor + "x" + segundovalor + "=" + resultado)

}else if(operaçoes == 2) {
    var resultado = primeirovalor  / segundovalor
    document.write("<h2>" + primeirovalor + "/" + segundovalor + "=" + resultado)
}else if(operaçoes == 3){
    var resultado = primeirovalor - segundovalor
    document.write("<h2>" + primeirovalor + "-" + segundovalor + "=" + resultado)
}else if(operaçoes == 4){
    var resultado = primeirovalor + segundovalor
    document.write("<h2>" + primeirovalor + "+" + segundovalor + "=" + resultado)
}else {
    document.write("<h2>número inválido</h2>")
}