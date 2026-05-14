// A partir da Função abaixo,
// crie as variações:
// (Adição, Subitração, Multiplicação, Divisão)

function divisao(n1, n2) {
    if(n2 != 0) {
        console.log("A divisão de " +n1+ " por " +n2+ " é = " + (n1 / n2))
    } else {
        console.error("Impossível dividir por ZERO!")
    }
}
divisao(12, 2)
divisao(12, 0)


function Multiplicação(n1, n2) {
    if(n2 != 0) {
        console.log("A divisão de " +n1+ " por " +n2+ " é = " + (n1 * n2))
    } else {
        console.error("Impossível dividir por ZERO!")
    }
}
Multiplicação(32, 2)
Multiplicação(12, 0)


function subritação(n1, n2) {
    if(n2 != 0) {
        console.log("A divisão de " +n1+ " por " +n2+ " é = " + (n1 - n2))
    } else {
        console.error("Impossível dividir por ZERO!")
    }
}
subritação(32, 2)
subritação(12, 0)


function adição(n1, n2) {
    if(n2 != 0) {
        console.log("A divisão de " +n1+ " por " +n2+ " é = " + (n1 + n2))
    } else {
        console.error("Impossível dividir por ZERO!")
    }
}
adição(32, 2)
adição(12, 0)
