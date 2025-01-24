import React, { useEffect } from "react";
import "./TaskStatus.css";

const TaskStatus = ({ tarefasPendentes, tarefasConcluidas }) => {
 
    return (
        <div className="task-status">
            <p>Tarefas pendentes: {tarefasPendentes}</p>
            <p>Tarefas concluidas: {tarefasConcluidas}</p>
        </div>
    );
};

export default TaskStatus;