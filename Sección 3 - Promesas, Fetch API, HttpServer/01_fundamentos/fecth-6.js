fetch('./not-found.html')
    .then(res=>res.text())
    .then(html=>{

        let body = document.querySelector('body');

        body.innerHTML = html;
    })
    .catch(err=>{
        console.log('existio un eror');
        console.log(err);
    })

