function encriptar(){
    let inputText = document.getElementById("input-text").value;
    let encriptarTexto = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = encriptarTexto;
}


function desencriptar() {
    let inputText = document.getElementById("input-text").value;
    let desencriptarText = inputText
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = desencriptarText;
}

function copiar() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
}