import React, {useState} from "react";

function Contador (){
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Constagem: {conut}</p>
            <button onClick={()=> setCounT +1}>Incremento</button>
        </div>
    )
}
export default Contador