

fetch('https://regres.in/api/users/1')
    .then( resp => {
        resp.clone().json()
        .then(usuario => {
            console.log(usuario.data);
        });

        resp.clone().json().then(usuario => {
            console.log(usuario.data);
        });

        resp.json().then(usuario => {
            console.log(usuario.data);
        });

    });