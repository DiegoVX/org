import "./Formulario.css"
import Texto from "../Texto/Texto"

const Formulario = () => {
    return <section className = "formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto />
            <Texto />
            <Texto />
        </form>
    </section>
}

export default Formulario