// Get the chapter number from URL
function obterNumeroCapitulo() {
    const params = new URLSearchParams(window.location.search);
    const cap = parseInt(params.get('cap'), 10);
    return isNaN(cap) ? 1 : cap;
}

// navigate between chapters
function navegarParaCapitulo(numero) {
    if (numero < 1) return;
    window.location.href = `capitulo.html?cap=${numero}`;
}

// loand the chapter content
function carregarCapitulo() {
    const numeroCapitulo = obterNumeroCapitulo();
    const capituloFormatado = numeroCapitulo.toString().padStart(2, '0');
    
    // Update the chapter number in the title
    document.getElementById("titulo-capitulo").textContent = "Capítulo " + capituloFormatado;

    // updade the chapter content with images
    document.getElementById("conteudo-capitulo").innerHTML = `
       <img src="capitulos/capitulo ${capituloFormatado}/Capa 00.jpg" alt="Página 01" class="pagina">
       <img src="capitulos/capitulo ${capituloFormatado}/Contra capa 00.jpg" alt="Página 02" class="pagina">
       <img src="capitulos/capitulo ${capituloFormatado}/Pag 01.jpg" alt="Página 03" class="pagina">
       <img src="capitulos/capitulo ${capituloFormatado}/Pag 02.jpg" alt="Página 04" class="pagina">
       `;

 // set up the navigation buttons
 document.getElementById("anterior").onclick = () => navegarParaCapitulo(numeroCapitulo - 1);
 document.getElementById("proximo").onclick = () => navegarParaCapitulo(numeroCapitulo + 1);
}

// Ensure the content after the page is fully loaded
document.addEventListener("DOMContentLoaded", carregarCapitulo);
