import { useState } from "react";
import  ProTypes from "prop-types";


const CounterApp = ({value = 10}) => {


    const [counter, setCounter] = useState(value);

    
    const handleAdd = (e) => {
        // setCounter( (c) => c +1)
        setCounter( counter+1)
    }
   const handleRemove = () => {

        setCounter(counter-1)
   }
   const handleReset = () => {

    setCounter( value)
}
    
    return (

        <>
            <h1> CounterApp</h1>
            <h2> { counter } </h2>

            <br></br>
            <button onClick={  handleAdd } >+1</button>
            <button onClick={  handleReset } >Reset</button>
            <button onClick={  handleRemove } >-1</button>
        </>
    )

}

CounterApp.propTypes = {
    value : ProTypes.number

}


export default CounterApp;

