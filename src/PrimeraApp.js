// import { Fragment } from "react";
// import React from "react";
import ProTypes from 'prop-types'


const PrimeraApp = ( {saludo, subtitulo } ) => {

    return (
        <>
            <h1>
                {saludo}
                    {/* {<pre> { JSON.stringify(saludo) }</pre>} */}              
                    </h1>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: ProTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
