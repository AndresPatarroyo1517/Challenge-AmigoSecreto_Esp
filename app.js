const listaAmigos = []

const agregarAmigo = () => {
    const nombre = document.getElementById('amigo')
    listaAmigos.push(nombre.value)
    nombre.value = ""
    mostrarAmigos()
}

const mostrarAmigos = () => {
    const lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`
    }
}

const sortearAmigo = () => {
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]
    const resultado = document.getElementById('resultado')
    limpiarAmigos()
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}

const limpiarAmigos = () => {
    listaAmigos.length = 0
    mostrarAmigos()
}