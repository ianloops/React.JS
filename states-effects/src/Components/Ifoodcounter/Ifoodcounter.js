import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] =useState("counter-button-active");
    useEffect(()=>{
        document.getElementById('moeda').innerHTML = 12 * value;
    },[value])    


    function down(){
        if(value<=1) setButtonStyle("counter-button-inactive");

        if(value<=0) return;
        setValue(value-1);
    }

    function up(){
        setButtonStyle("counter-button-active");
        setValue(value+1);
    }

    return (
    <>
    <div className='countex-wrapper'>
        <button className={buttonStyle} onClick={down}>
            -
        </button>
        <p>{value}</p>
        <button className='counter-button-active' onClick={up}>
            +
        </button>
    </div>
    <button id="moeda">12,00</button>
    </>
  )
}
