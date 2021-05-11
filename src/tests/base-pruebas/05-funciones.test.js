import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";
import '@testing-library/jest-dom';

describe('Test 05-funciones.js', () =>{

    test('getUSer debe de retornar un objeto', () => {
        
        const objeto = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual(objeto);
    })
    
    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const nombre = 'Enmanuel Cross Reyes!';

        const objeto = {
            uid: 'ABC567',
            username: nombre
        };


        const userActivo = getUsuarioActivo(nombre);

        expect( userActivo ).toEqual(objeto);
    })
    
})