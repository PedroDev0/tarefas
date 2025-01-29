import Tarefa from "../Tarefa.model";

export default interface PropsCronometro {
    tarefa: Tarefa | undefined;
    finalizaTarefa: ()=> void
}