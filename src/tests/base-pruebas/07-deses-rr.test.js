import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

import '@testing-library/jest-dom';

describe('Test 07-deses-rr.js  Desestructuracion', () =>{

    test(' debe de retornar un string y un numero', () => {
        
        const [ letras, numeros] = retornaArreglo();

        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');
        
        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number');
        
    })
    
    
})