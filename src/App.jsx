import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  const [pacientes, setPacientes]=useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      // ?? este simbolo parece que significa que si no existe le manda un arreglo vacio
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      console.log(pacientesLS);
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, [])

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  }, [pacientes])
  
  const eliminarPaciente = id =>{
    const pacienteEliminado = pacientes.filter( pacienteState => id !== pacienteState.id );
    setPacientes(pacienteEliminado);
  }

  return (
    <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    </div>
    </div>
  )
}

export default App
