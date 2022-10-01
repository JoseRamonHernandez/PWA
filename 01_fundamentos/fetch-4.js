
let img = document.querySelector('img');

fetch('./superman.png')
    .then(res => res.blob())
    .then(image => {
        var imagePath = URL.createObjectURL(image);
        img.src = imagePath;
    })

