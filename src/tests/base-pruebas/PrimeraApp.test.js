// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import PrimeraApp from "../../PrimeraApp";

// revisando elementos dentro de un componente.

describe('Pruebas en <PrimeraApp></PrimeraApp>', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
        
    //     const saludo = 'Hola, soy Goku';
    //     const wrapper = render(<PrimeraApp saludo={saludo}/>)

    //     const {getByText} = wrapper;
        
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })


    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo ={ saludo }/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo ={ saludo }
                subtitulo={ subTitulo}    
            />);

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subTitulo);
    })
    
    
})
