import React, {useState, useContext, createContext} from "react";

const ThemeContext = createContext();

function TemaEscuro(){
    const [dark, setDark] = useState(false);

    return 
    <ThemeContext.Provider value={dark}>
        <button onClick={()=> setDark(!dark)}>Alterar Tema</button>
            
        <pagina />
    </ThemeContext.Provider>
}

export default TemaEscuro