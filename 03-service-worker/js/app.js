

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

fetch('https://regres.in/api/users')
    .then(resp => resp.text())
    .then(console.log);