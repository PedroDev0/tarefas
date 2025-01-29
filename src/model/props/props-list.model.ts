import Tarefa from "../Tarefa.model";

export default interface PropsList {
    tarefas: Tarefa[],
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}