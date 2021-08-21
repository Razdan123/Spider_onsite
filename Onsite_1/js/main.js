let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider');
myform.addEventListener('submit', function(e){
    let urlimage = document.getElementById('onlineurl');
    let urlimageval = urlimage.value;
    if(urlimageval.length){
        targetimage.setAttribute('src',urlimageval);
        urlimage.value = '';
    }
    
    e.preventDefault();
    console.log('done');
});

for(let i=0; i<=inputrange.length-1; i++ ){
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');

    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
}


let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset', function(){
    sliderform.reset();
    setTimeout(function(){
        editimage();
    },0)
})

const inpFile = document.getElementById('photo-file');
const previewContainer = document.getElementById('imagePreview');
const previewimage = previewContainer.querySelector('img-area');

inpFile.addEventListener("change",function(){
    const file = this.files[0];

    if(file){
        const reader = new FileReader();
        previewimage.style.display = "block";

        reader.addEventListener("load",function(){
            previewimage.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);
    }
});

function rotate(){
    targetimage.style.transform = "rotate(90deg)";

}

function flip(){
    targetimage.style.transform = "rotate(180deg)";
}
function crop(){
    targetimage.style.padding = "50px 30px 50px 80px";
}