

self.addEventListener('fetch', event => {

    if(event.request.url.includes('style.css'))
    {
        const resp = fetch( event.request )
        .then( resp => {
            
            return resp.ok ? resp : fetch('img/main.jpg');
            
        });

    
    event.respondWith(resp);
    }

});