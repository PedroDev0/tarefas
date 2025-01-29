import PropsRelogio from '../../../model/props/propos-relogio.model';
import MyStyle from './Relogio.module.scss';

export default function Relogio({ tempo = 0 }: PropsRelogio) {

    const minutos = Math.floor(tempo /60)
    const segundos = tempo % 60;

    const [minDezena, minUnidade] =  String(minutos).padStart(2,'0');
    const [secDezena, secUnidade] =  String(segundos).padStart(2,'0');

    return (<>
        <span className={MyStyle.relogioNumero}>{minDezena}</span>
        <span className={MyStyle.relogioNumero}>{minUnidade}</span>
        <span className={MyStyle.relogioDivisao}>:</span>
        <span className={MyStyle.relogioNumero}>{secDezena}</span>
        <span className={MyStyle.relogioNumero}>{secUnidade}</span>
    </>);
}