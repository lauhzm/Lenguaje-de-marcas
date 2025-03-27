const imagenPerfil = document.getElementById("imagen_perfil");

imagenPerfil.addEventListener('mouseover', () => {
    imagenPerfil.style.boxShadow = "1px 1px 10000px darkblue";
    imagenPerfil.src = "alternativa.webp";
});

imagenPerfil.addEventListener('mouseout', () => {
    imagenPerfil.style.boxShadow = "none";
    imagenPerfil.src = "fotoperfil.jpg";
});