import PropsButton from "../../model/props/props-button.model";
import SytleButton from './MyButton.module.scss';

export default function MyButton( {onClick,type,texto}:PropsButton){

    return (
        <button onClick={onClick} type={type} className={SytleButton.botao}>
            {texto}
        </button>
    );
}