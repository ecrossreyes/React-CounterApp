import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from "../../data/heroes";



describe('Pruebas en funciones de Heroes', () =>{

    test('debe retornar un heroe ', () => {
        
        const id = 1;

        const hero = getHeroeById(id);

        const heroData = heroes.find( h => h.id = id);

        expect(hero).toEqual(heroData);
    });
    
    
    test('debe ser undefine  ', () => {
        
        const id = 1000;

        const hero = getHeroeById(id);

        expect(hero).toEqual(undefined);
    });

     
    test('debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';

        const heroesDC = getHeroesByOwner(owner);
        const heroDataDC = heroes.filter( h => h.owner === owner);

        expect(heroesDC).toEqual(heroDataDC);
    });
     
    test('debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';

        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(2);
    });

})