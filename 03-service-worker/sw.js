
// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Descargar assets
    //Creamos un cache

    console.log('SW: Instalando SW!!');

    const instalacion = new Promise( (resolve, reject) => {
        setTimeout(() =>{
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1000);
    });

    event.waitUntil(instalacion);

});

//Cuando el SW toma  el control de la aplicacion 

self.addEventListener('activate', event => {
    //Borrar cache viejo

    console.log('SW2: Activo y listo para controlar la app');
});

//Fetch: manejo de peticiones http
self.addEventListener('fetch', event => {
    //Aplicar estrategias del cache
    console.log('SW: ', event.request.url);

    if (event.request.url.includes('https://regres.in/'))
    {
        const resp = new Response (`{ ok: false, mensaje: 'jsjsjs'}`);
        event.respondWith( resp );
    }
});

//SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => 
{
    console.log('Tenemos conexión!');
    console.log(event);
    console.log(event.tag);
});


//PUSH: Manejar las push notifications
self.addEventListener('push', event => 
{
    console.log('Notificacion recibida');
});