import { useEffect, useState } from "react"
import areasCriticasService from "../services/areaCriticaService"
import { Button, Container, Modal } from "react-bootstrap"
import AreasCriticasTable from "../components/AreaCriticaTable"
import { useNavigate } from "react-router-dom"
import ConfirmacionModal from "../components/ConfirmacionModal"
import AreasCriticasForm from "../components/AreaCriticaForm"

function AreasCriticasPage(){

    const [areasCriticas, setAreasCriticas]= useState([])
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedArea, setSelectedArea] = useState({nombre:"", descripcion:"", latitud:"", longitud:""});
    const [errors, setErrors] = useState({});
    const [areaIdEliminar, setAreaIdEliminar] = useState(null);
    const navigate= useNavigate()


    const cargarAreasCriticas= async () =>{

        try {
            const response= await areasCriticasService.obtenerTodas()
            setAreasCriticas(response.data)

        } catch (error) {
            console.log("Error al obtener las areas criticas", error)
        }
    }

    useEffect(()=>{
        cargarAreasCriticas()
    }, [])

    
    const verDetalle= (id)=>{
        navigate(`/areas-criticas/${id}`)
    }

    const handleShow = (area={nombre:"", descripcion:"", latitud:"", longitud:""}) => {
        setSelectedArea(area)
        setErrors({})
        setShowModal(true)
    }

    const handleDelete = (id) => {
        setAreaIdEliminar(id)
        setShowConfirmModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const confirmarEliminacion = async () => {
        try {
            await areasCriticasService.eliminar(areaIdEliminar)
            cargarAreasCriticas()
        } catch (error) {
            console.log("Error al eliminar el área critica", error)
        }

        setShowConfirmModal(false)
    }

    const handleSave= async ()=>{
        if(!validarFormulario()){
            return
        }

        try {
            if (selectedArea.id) {
                await areasCriticasService.actualizar(selectedArea.id, selectedArea)
            } else {
                await areasCriticasService.crear(selectedArea)
            }

            cargarAreasCriticas()

        } catch (error) {
            console.log("Error al guardar el área critica", error)
        }

        setShowModal(false)
    }

    const validarFormulario= ()=>{
        const nuevosErrores= {}

        if(selectedArea.nombre.length < 2 || selectedArea.nombre.length > 100){
            nuevosErrores.nombre= "El nombre debe tener entre 2 y 100 carateres"
        }

        if(selectedArea.descripcion.length < 10 || selectedArea.descripcion.length > 500){
            nuevosErrores.descripcion= "La descripcion debe tener entre 10 y 50 carateres"
        }

        if(selectedArea.latitud === "" || isNaN(selectedArea.latitud)){
            nuevosErrores.latitud= "La latitud debe ser un numero valido"
        }

        if(selectedArea.longitud === "" || isNaN(selectedArea.longitud)){
            nuevosErrores.longitud= "La longitud debe ser un numero valido"
        }

        setErrors(nuevosErrores)

        return Object.keys(nuevosErrores).length === 0
    }


    return (
        <Container className="mt-3">
            <h1>Areas criticas</h1>

            <Button variant="primary" className="rounded-0" onClick={()=> handleShow()}>Crear area critica</Button>

            <AreasCriticasTable 
                areasCriticas={areasCriticas} 
                verDetalle={verDetalle}
                handleShow= {handleShow}
                handleDelete= {handleDelete}
            />    

            <ConfirmacionModal 
                showConfirmModal= {showConfirmModal}
                handleClose= {()=> setShowConfirmModal(false)}
                handleConfirm= {confirmarEliminacion}
                mensaje= "¿Esta seguro que desea eliminar esta área critica?"
            />

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedArea.id ? "Editar area critica": "Crear area critica"}</Modal.Title>
                </Modal.Header>                
                <Modal.Body>
                    <AreasCriticasForm 
                        area= {selectedArea}
                        setArea= {setSelectedArea}
                        errors={errors}
                        handleSave={handleSave}
                    />    
                </Modal.Body>               
            </Modal>

        </Container>
    )
}

export default AreasCriticasPage