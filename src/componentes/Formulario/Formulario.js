import "./Formulario.css"
import Texto from "../Texto/Texto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    //transformar datos para enviarlos
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio", e);
    };

    return <section className = "formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto titulo = "Nombre" placeholder = "Ingresar nombre" required />
            <Texto titulo = "Puesto" placeholder = "Ingresar puesto" required />
            <Texto titulo = "Foto" placeholder = "Ingresar enlace de foto" required />
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario