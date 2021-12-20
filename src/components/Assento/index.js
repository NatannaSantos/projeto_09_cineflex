import { useState } from "react";

export default function Assento({ name, isAvailable }){
    const [selected,setSelected] = useState(false);

    function checkSeat(check) {
        isAvailable === 'selecionado' ? isAvailable = true : isAvailable === true ? isAvailable = 'selecionado' : isAvailable = false;
        !check ? alert('Esse assento não está disponível') : selected === false ? setSelected(true) : setSelected(false);
        
    }
     
   
    return (

        <div 
        className={`assento ${isAvailable === false ? "indisponivel"  : " "}`} 
        onClick={()=> checkSeat(isAvailable) }       
        >
            
            <p>{name}</p>
        </div>
    );
}