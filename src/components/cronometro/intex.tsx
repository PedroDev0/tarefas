import { useEffect, useState } from "react";
import { timeInSecond } from "../../common/util/date";
import PropsCronometro from "../../model/props/props-cronometro.model";
import MyButton from "../button";
import MyStyle from './Cronometro.module.scss';
import Relogio from "./relogio";

export default function Cronometro({ tarefa , finalizaTarefa}: PropsCronometro) {

    const [tempo, setTempo] = useState<number>();


    useEffect(
        () => {
            if (tarefa?.time) {
                setTempo(timeInSecond(tarefa?.time));
            }
        },
        [tarefa]
    );


    function regressiva(tempo: number = 0) {
        setTimeout(() => {

            if (tempo > 0) {
                setTempo(tempo - 1);
                return regressiva(tempo - 1)
            }
            finalizaTarefa();
        }, 1000)
    }

    return (
        <div className={MyStyle.cronometro}>
            <p className={MyStyle.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={MyStyle.relogioWrapper}>

                <Relogio tempo={tempo}></Relogio>
            </div>
            <MyButton onClick={() => {
                regressiva(tempo);
            }}
                texto="Começar"></MyButton>
        </div>
    );
}