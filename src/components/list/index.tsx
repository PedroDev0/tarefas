import PropsList from '../../model/props/props-list.model';
import Item from './item/item';
import MyListStyle from './List.module.scss';



export default  function MyList({ tarefas, selecionaTarefa }: PropsList) {



    return (
        <aside className={MyListStyle.listaTarefas}>

            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id}
                        {...tarefa}
                    ></Item>
                ))}

            </ul >
        </aside>
    );
}
