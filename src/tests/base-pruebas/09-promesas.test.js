import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas';
import heroes from '../../data/heroes';


describe('09-promesas pruebas com promesas', (done )=> {

    test('getHeroeByIdAsync debe retornar un HEroe Async', () => {
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toEqual(heroes[1]);
            done();
        });
    });
    
});