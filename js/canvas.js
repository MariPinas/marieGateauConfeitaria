const cake = new Image();
cake.src = "../imagens/iconCakeCanvas.png";
cake.onload = function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const cakeWidth = 300;  // Largura do Pikachu na tela
    const cakeHeight = (cake.height / cake.width) * cakeWidth;  // Altura proporcional do Pikachu

    ctx.drawImage(cake, 0, 0, cakeWidth, cakeHeight);
}; 

