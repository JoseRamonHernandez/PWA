function sumarUno( numero ){

    var promesa = new Promise((resolve, reject)=>{

        if(numero >= 7){
            reject('numero muy alto');
        }

        setTimeout(()=>{

            resolve(numero + 1);
        }, 800)
    })


    return promesa
}


sumarUno(5).then( nuevoNumero =>{
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero)
}).then(nuevoNumero=>{
    console.log(nuevoNumero);
    return sumarUno(nuevoNumero)
}).then(nuevoNumero=>{
sumarUno(5)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(sumarUno)
.then(nuevoNumero=>{
    console.log(nuevoNumero);
})
.catch(err=>{
    console.log('Error en promesa');
    console.log(err);
})

})