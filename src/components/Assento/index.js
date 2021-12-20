import { useState } from "react";

export default function Assento({ name, isAvailable }){
    const [selected,setSelected] = useState(false); 
    console.log(selected);


    function checkSeat(check) {
       
        !check ? alert('Esse assento não está disponível') : (selected === false ? setSelected(true) : setSelected(!selected));
        
    }
     
   
    return (

        <div 
        className={`assento ${selected ? "selecionado" : ( isAvailable ? "disponivel" : "indisponivel")}`} 
        onClick={()=> checkSeat(isAvailable) }       
        >
            
            <p>{name}</p>
        </div>
    );
}