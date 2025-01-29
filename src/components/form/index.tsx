import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropsForms from "../../model/props/props-forms.model";
import MyButton from "../button";
import StyleForm from './Formulario.module.scss';


export default function MyForm({ setTarefa }: PropsForms) {


    const [title, setTitle] = useState('');
    const [time, setTime] = useState('00:00');

    function adicionarTarefa(enventRec: React.FormEvent<HTMLFormElement>) {
        // remove as configurações defaul do formulario
        enventRec?.preventDefault();

        setTarefa((tarefas) => [
            ...tarefas,
            {
                title: title,
                time: time,
                selected: false,
                completed: false,
                id: uuidv4(),
            }
        ]);

        setTitle('');
        setTime('00:00');

    }

    return (
        <form className={StyleForm.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={StyleForm.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    required
                />
            </div>
            <div className={StyleForm.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <MyButton texto="Adicionar" type="submit"></MyButton>
        </form>);
}
