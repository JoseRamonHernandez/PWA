let user = {
    nombre: 'Victor',
    edad: 22
};

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
        'Content-Type':'application/json'
    }
}).then(res=>res.json())
    .then(data =>console.log(data))
    .catch(err =>{
        console.log('existio un error')
        console.log(err.response)
    })

    