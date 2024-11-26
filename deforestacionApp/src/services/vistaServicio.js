import axios from "axios"

const API_URL = "http://localhost:8080/api/vista-areas-criticas"
const obtenerVistaAreas = () => axios.get(API_URL)

const vistaAreasCriticasServicio = {
    obtenerVistaAreas
}

export default vistaAreasCriticasServicio;