import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState - Utiliza el estado
    //const [nombreVariable, funcionActualizada] = useState(valorInicial);
    console.log(props);
    /*const [mostrar, actualizarMostrar] = useState(true); //Valor guardado 
    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar); //Si es verdadero a falso y si es falso a verdadero
        actualizarMostrar(!mostrar); //Tomar valor guardado en la constante
    };*/

    return <section className = "orgSection">
        <h3 className = "title">Mi organización</h3>
        <img src = "/img/add.png" alt = "add" onClick = {props.cambiarMostrar}/>
    </section>
};

export default MiOrg;