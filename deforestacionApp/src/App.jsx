import {Container} from 'react-bootstrap'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AppNavbar from './layouts/AppNavbar'
import EvaluacionesPage from './pages/EvaluacionesPage'   
import VistaDetalles from './pages/VistaDetalles'
import AreasCriticasPage from './pages/AreasCriticasPage'

function App() {
  
  return (
      <Router>
        <AppNavbar/>       
        <Container fluid>
          <Routes>
            <Route path='/' element = {<VistaDetalles/>}/>
            <Route path='/areas-criticas' element = {<AreasCriticasPage/>}/>
            <Route path='/evaluaciones' element = {<EvaluacionesPage/>}/>
          </Routes>
        </Container>
      </Router>
  )
}

export default App
