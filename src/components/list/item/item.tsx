
import PropsItem from '../../../model/props/props-item.model';
import MyListStyle from './Item.module.scss';

export default function Item(
    { title,
        time,
        id,
        completed,
        selected,
        selecionaTarefa }: PropsItem
) {

    return (<li
        className={`
            ${ MyListStyle.item} ${selected ? MyListStyle.itemSelecionado : ''}  ${completed ? MyListStyle.itemCompletado : ''}     
            `}
        onClick={() => !completed && selecionaTarefa(
            {
                id,
                title,
                time,
                completed,
                selected
            }
        )}>
        <h3>{title}</h3>
        <span>
            {time}
        </span>
        {completed && <span className={MyListStyle.concluido} aria-label='Tarefa Completada'></span>}
    </li>);
}