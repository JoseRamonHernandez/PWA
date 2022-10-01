

fetch('https://regres.in/api/users/1')
    .then( resp => {
       if(resp.ok)
       {
        return resp.json();
       }
       else
       {
        throw new Error('No existe el usuario 1000');
       }

    })
    .then(console.log)
    .catch( error => {
        console.log('Error en la petición');
        console.log(error);
    });