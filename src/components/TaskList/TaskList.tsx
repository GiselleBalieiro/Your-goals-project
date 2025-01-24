import React from "react";
import "./TaskList.css";

const TaskList = ({ lista, setLista, setTarefasPendentes, setTarefasConcluidas }) => {
  function handleCheckboxChange(index) {

    const novaLista = lista.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, resolvida: !tarefa.resolvida }; 
      }
      return tarefa;
    });
    setLista(novaLista);
    setTarefasPendentes(novaLista.filter(tarefa => !tarefa.resolvida).length);
    setTarefasConcluidas(novaLista.filter(tarefa => tarefa.resolvida).length);
    localStorage.setItem("lista", JSON.stringify(novaLista));
  } 

  return (
    <div>
      <ul className="task-list">
        {lista.map((item, index) => (
          <li key={index} className="task-item">
            <input
              className="task-checkbox"
              type="checkbox"
              checked={item.resolvida}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="task-name">
              <p
                style={{
                  textDecoration: item.resolvida ? "line-through" : "none",
                }}
              >
                {item.nome}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
