

const imageContainer = document.getElementById('image-container');
const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener las imágenes: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const imageUrls = data.map(item => item.url);

        // Limitar a 30 imágenes
        const limitedImageUrls = imageUrls.slice(0, 9);

        limitedImageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Imagen';
            imageContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error al obtener las imágenes:', error);
    });



//Para traer todas las imagenes de la api, seria:


    /*const imageContainer = document.getElementById('image-container');
const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener las imágenes: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        const imageUrls = data.map(item => item.url);

        imageUrls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Imagen';
            imageContainer.appendChild(img);
        });
    })
    .catch(error => {
        console.error('Error al obtener las imágenes:', error);
    });
    */