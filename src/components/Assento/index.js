import { useState } from "react";
export {assentoReservado};

let assentoReservado = [];

export default function Assento({ name, isAvailable, id }){
    const [selected,setSelected] = useState(false);
     


    function checkSeat(check) {
       
        !check ? alert('Esse assento não está disponível') : (selected === false ? setSelected(true) : setSelected(!selected));
        assentoReservado.push ({poltrona:id});
        
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