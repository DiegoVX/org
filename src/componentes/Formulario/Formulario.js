import "./Formulario.css"
import Texto from "../Texto/Texto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {
    return <section className = "formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Texto titulo = "Nombre" placeholder = "Ingresar nombre"/>
            <Texto titulo = "Puesto" placeholder = "Ingresar puesto" />
            <Texto titulo = "Foto" placeholder = "Ingresar enlace de foto" />
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario