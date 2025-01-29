import Tarefa from "../Tarefa.model";

export default interface PropsItem extends Tarefa {
    selecionaTarefa: (tarefaSelecionada: Tarefa) => void
}