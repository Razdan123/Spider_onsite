var foto;
window.onload = function (){
    foto = new Foto();
}
function selectImage(){
    document.getElementById("photo-file").click();
}

function crop(){
    foto.cropSelected();
}
