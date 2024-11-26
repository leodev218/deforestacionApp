import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import vistaAreasCriticasServicio from "../services/vistaServicio";

function VistaAreaTable () {

    const [VistaDetalles,setVistaDetalles] = useState([])
    const cargarVistaAreacriticas =async () => {
        try {
            const response = await vistaAreasCriticasServicio.obtenerVistaAreas()
            setVistaDetalles(response.data)
        } catch (error) {
            console.log("Error al obtener la vista ",error)
        }
    }

    useEffect(() => {
        cargarVistaAreacriticas()
    }, [])

    return(
        <>
          <Table striped bordered responsive hover className='mt-4'>
          <thead>
            <tr>
             <th>Id</th>
             <th>Nombre</th>
             <th>Descripcion</th>
             <th>Numero de evaluaciones</th>
           </tr>
          </thead>
          <tbody>
            {VistaDetalles.map((vista) => (
            <tr key={vista.id}>
             <td>{vista.id}</td>
             <td>{vista.nombre}</td>
             <td>{vista.descripcion}</td>
             <td>{vista.numeroEvaluaciones}</td>
            </tr>
             ))}
          </tbody>
          </Table>
        </>
    );
}

export default VistaAreaTable;