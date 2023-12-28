'use client';
import React, {useState, useEffect} from "react";
import "@/app/components/page.css"


export default function QuestaoExtra() {
const saveLocal = JSON.parse(localStorage.getItem('tasks')) || []

const [tasks, setTasks] = useState(saveLocal)
const [newTask, setNewTask] = useState('')



useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
})


const addNewTask = () => {
  setTasks([...tasks, {id: Math.random()*1000, title: newTask}])
  setNewTask('');
}

const deleteAll = () => {
  setTasks([])
}

const delTask = (id) => {
  setTasks(tasks.filter(tasks => tasks.id !== id))
  alert(`A tarefa ${tasks.find(tasks => tasks.id === id).title} foi excluida`)
}

  return (
    <>
      <h1>Questão Extra</h1>
      <p>
        Crie um to-do app que adiciona e remove itens de uma lista.
        O app deve ter um pequeno formulário e um botão azul para adicionar itens.
        Cada item deve ter um botão para removê-lo.
        Deve existir também um botão verde para zerar a lista.
        Todos os botões precisam ser redondos e ficarem quadrados quando o mouse estiver sobre eles.
        A lista deve ser salva no localStorage.
      </p>
      <div className="inputDiv">
      <input 
      type='text'
      value={newTask}
      onChange={event => setNewTask(event.target.value)}
      />
      <button className="addBtn" onClick={addNewTask}>Add</button>
      <button className="delBtn" onClick={deleteAll}>Deletar todos</button>
      </div>
      <ul>
        {tasks.map(tasks => (
          <li key={tasks.id}>{tasks.title}<button onClick={() => delTask(tasks.id)}>Delete</button></li>
        ))}

      </ul>


    </>
  );
}
// lista botao de adicionar botao remover
// input 
// cada item da lista deve ter um botao para remover
// botao para zerar a lista
// deve ser salva no localstorage