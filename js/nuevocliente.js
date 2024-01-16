import { mostrarAlerta } from './funciones.js';

( function () {

    const formulario = document.querySelector( '#formulario' );
    formulario.addEventListener( 'submit', validarCliente );

    function validarCliente( e ) {
        e.preventDefault();

        // Variables para seleccionar los campos del formulario
        const nombre = document.querySelector( '#nombre' ).value;
        const email = document.querySelector( '#email' ).value;
        const telefono = document.querySelector( '#telefono' ).value;
        const empresa = document.querySelector( '#empresa' ).value;

        const cliente = {
            nombre, email, telefono, empresa
        }

        // Validación para no haya campos vacíos en el formulario
        if ( validar( cliente ) ) {
            // Mostrar mensaje en que no se pase la vlidación
            mostrarAlerta( 'todos los campos son obligatorios' )
            return;
        }

        console.log( 'validación exitosa' )

    }

    function validar( obj ) {
        return !Object.values( obj ).every( input => input !== '' )
    }




} )();
