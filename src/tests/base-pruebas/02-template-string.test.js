import { getSaludo } from "../../base-pruebas/02-template-string";
import '@testing-library/jest-dom';

describe('Test 02-teamplate-string.js', () =>{

    test('getSaludo debe de retornar "Hola + (nombre)"', () => {
        
        const nombre = 'Enmanuel Cross Reyes';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre);
    })
    

    test('getSaludo debe de retornar "Hola Carlos" si no se envia valor', () => {
        

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');
    })
    
})

