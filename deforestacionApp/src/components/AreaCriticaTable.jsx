import { Button, Table } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
function AreasCriticasTable({ areasCriticas, verDetalle, handleShow, handleDelete }) {
  return (
    <Table striped bordered hover responsive className="mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Latitud</th>
          <th>Longitud</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        
        {// eslint-disable-next-line react/prop-types
        areasCriticas.map(area => (
          <tr key={area.id} onClick={() => verDetalle(area.id)}>
            <td>{area.id}</td>
            <td>{area.nombre}</td>
            <td>{area.descripcion}</td>
            <td>{area.latitud}</td>
            <td>{area.longitud}</td>
            <td className="d-grid">
              <Button className="mb-1 rounded-0" size="sm"  variant="warning" onClick={e => { e.stopPropagation(); handleShow(area) }}>
                Editar
              </Button>
              {" "}
              <Button  className="mb-0 rounded-0" size="sm" variant="danger" onClick={e => { e.stopPropagation(); handleDelete(area.id) }}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AreasCriticasTable;