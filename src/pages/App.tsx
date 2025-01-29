import '../App.css';
import '../components/button/index';
import AppStyle from './App.module.scss';
import MyForm from '../components/form/index';
import MyList from '../components/list';
import Cronometro from '../components/cronometro/intex';
import { useState } from 'react';
import Tarefa from '../model/Tarefa.model';

function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [taskSelected, setSelected] = useState<Tarefa>();


  function selecionaTarefa(tarefaSelecionada: Tarefa) {
    setSelected(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map
      (
        tarefa => (
          {
            ...tarefa, selected: (tarefaSelecionada.id === tarefa.id)
          }
        )
      )
    );
  }

  function finalizarTarefa() {

    if (taskSelected) {
      setSelected(undefined);

      setTarefas((tarefasAnteriores => tarefasAnteriores.map
        (
          tarefa => {
            if (tarefa.id = taskSelected.id) {
              return {
                ...tarefa,
                selected: false,
                completed: true
              };

            }
            return tarefa;
          }

        )
      ))
    }
  }
  return (
    <div className={AppStyle.AppStyle}>
      <MyForm setTarefa={setTarefas}></MyForm>
      <MyList tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      ></MyList>
      <Cronometro tarefa={taskSelected} finalizaTarefa={finalizarTarefa}></Cronometro>
    </div>
  )
}

export default App
