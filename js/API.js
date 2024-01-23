const url = 'http://localhost:3000/clientes';

// Llamada a la API para crear registros nuevos en la base de datos
export const nuevoCliente = async cliente => {

    try {
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type': 'application/json'
            }
        } );
        window.location.href = 'index.html';
    } catch ( error ) {
        console.log( error );
    }
}

// Llamada la API para obtener los clientes de la base de datos
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch( url );
        const clientes = await resultado.json();
        return clientes;
    } catch ( error ) {
        console.log( error );
    }
}

// Elimina un cliente
export const eliminarCliente = async ( id ) => {
    try {
        await fetch( `${url}/${id}`, {
            method: 'DELETE'
        } )
    } catch ( error ) {
        console.log( error );
    }
}
