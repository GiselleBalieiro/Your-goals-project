import React from 'react';
import './TaskInput.css';

const TaskInput = ({ tarefa, setTarefa, lista, setLista }) => {
    function handleClick() {
        if (tarefa === "") {
            alert("Digite uma tarefa");
            return;
        }

        const novaLista = [...lista, { nome: tarefa, resolvida: false }];
        setLista(novaLista);
        setTarefa("");
        localStorage.setItem("lista", JSON.stringify(novaLista));
    }

    function handleChange(event) {
        setTarefa(event.target.value);
    }

    return (
        <div>
            <input 
                className="task-input" 
                placeholder="Digite uma tarefa" 
                value={tarefa} 
                onChange={handleChange} 
                aria-label="Campo de entrada para nova tarefa"
            />
            <button className="add-task-btn" onClick={handleClick}>
                Adicionar Tarefa
            </button>
        </div>
    );
}

export default TaskInput;
