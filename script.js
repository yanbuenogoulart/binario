function Calcular() {
    let num = document.getElementById("input").value 
    let res = document.getElementById("res")
    let array = []
    let quociente = num
    if (num <= 0) {
        res.innerHTML = "Escreva um número positivo!"
        return
    }
    while (quociente !== 0) {
        let resto = Math.floor(quociente % 2)
        array.push(resto)
        quociente = Math.floor(quociente / 2)
    }
    array.reverse()
    res.innerHTML = "O número " + num + " em binário é: " + array.join("")
}