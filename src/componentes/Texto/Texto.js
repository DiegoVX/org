import "./Texto.css"

const Texto = (datosExternos) => {
    console.log("Datos: ", datosExternos);
    return <div className = "campo-texto">
        <label>Nombre</label>
        <input placeholder = "Ingresar nombre"/>
    </div>
};

export default Texto;