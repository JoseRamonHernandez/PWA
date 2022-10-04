function sumarLento(numero){

    return new Promise( function(resolve, reject){

        setTimeout(function(){

            resolve(numero + 1);

        }, 800)

    });

}

let sumarRapido = numero =>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=> reject('existio un error') , 1000);

    });

}

Promise.race([sumarLento(5), sumarRapido(10)])
    .then(res=>{
        console.log(res)
    })
    .catch( console.log )