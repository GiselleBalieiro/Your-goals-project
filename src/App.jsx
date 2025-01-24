import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import TaskStatus from './components/TaskStatus/TaskStatus';

function App() {
  const [ lista, setLista ]  = useState([]);
  const [ tarefa, setTarefa] = useState ("");
  const [ tarefasPendentes, setTarefasPendentes] = useState (0);
  const [ tarefasConcluidas, setTarefasConcluidas] = useState (0);
  const [ novaLista, setNovaLista] = useState([...lista]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("lista");
    if (tarefasSalvas) {
      const listaTarefas = JSON.parse(tarefasSalvas);
      setLista(listaTarefas);
      setTarefasPendentes(listaTarefas.filter(tarefa => !tarefa.resolvida).length);
      setTarefasConcluidas(listaTarefas.filter(tarefa => tarefa.resolvida).length);
    }
  }, []);

  useEffect(() => {
    setTarefasPendentes(lista.filter(tarefa => !tarefa.resolvida).length);
    setTarefasConcluidas(lista.filter(tarefa => tarefa.resolvida).length);
  }, [lista]);

  return (
    <div className="app-container">
      <Background>
        <div className="card">  
      <Header />
      <TaskInput 
        tarefa={tarefa}
        setTarefa={setTarefa}
        lista={lista}
        setLista={setLista}/>
      <TaskList 
        lista={lista} 
        setLista={setLista} 
        setTarefasPendentes={setTarefasPendentes} 
        setTarefasConcluidas={setTarefasConcluidas} />
      <TaskStatus 
        tarefasPendentes={tarefasPendentes} 
        tarefasConcluidas={tarefasConcluidas} />
    </div>
      </Background>
    </div>
  )
}

export default App;
