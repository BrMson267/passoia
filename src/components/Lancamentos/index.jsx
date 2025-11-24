import { useState } from "react";

import azul from "../../assets/azul.png";
import vermelho from "../../assets/vermelho.png";







function Lancamentos() {
    const [cor, setCor] = useState(vermelho);


    return (
        <>
            <h1>Cor favorita</h1>
            
            
            
                <img src={cor} alt="Batom" />
            
            
                <button onClick={()=> setCor(vermelho)}>Vermelho</button>
            
                <button onClick={()=> setCor(azul)}>Azul</button>
    
        </>
    );

}

export default Lancamentos




