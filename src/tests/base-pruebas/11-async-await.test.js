import {getImagen} from '../../base-pruebas/11-async-await';

describe('promesas async-await.js', () =>{

    test('debe retornar el url de la imagen', async () => {
        
        const url = await getImagen();

    
        expect( url.includes('https://') ).toBe(true);

    })
    
})