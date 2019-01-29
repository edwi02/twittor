/*Archivo para trasladar cierta logica de SW.js */

//Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
    if (res.ok) {
        //Retorna una promesa
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            //Retorna
            return res.clone();
        });
    } else {
        // Retorna lo que venia en caso de que no lo encuentre en Network 
        // ni en cahce
        return res;
    }
}