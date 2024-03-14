import React, {useState} from 'react';
import '../style/Game.scss';
import {Attribute} from "./Attributes";

export default function Game() {
    const hero = {
        name: 'Alex',
        freePoints: 50,
        heal: 3,
        vitality: 3,
        evasion: 10,
        energy: 0,
        attributes: [
            {
                name: "Сила",
                value: 0,
                skills: [
                    {
                        name: "Атака",
                        value: 0,
                    }
                ]
            },
            {
                name: "Ловкость",
                value: 0,
                skills: [
                    {
                        name: "Стелс",
                        value: 0,
                    },
                    {
                        name: "Стрельба из лука",
                        value: 0,
                    },
                ]
            },
            {
                name: "Интеллект",
                value: 0,
                skills: [
                    {
                        name: "Обучаемость",
                        value: 0,
                    },
                    {
                        name: "Выживание",
                        value: 0,
                    },
                    {
                        name: "Медицина",
                        value: 0,
                    },
                ]
            },
            {
                name: "Харизма",
                value: 0,
                skills: [
                    {
                        name: "Запугивание",
                        value: 0,
                    },
                    {
                        name: "Проницательность",
                        value: 0,
                    },
                    {
                        name: "Внешний вид",
                        value: 0,
                    },
                    {
                        name: "Манипулирование",
                        value: 0,
                    },
                ]
            },
        ]
    };

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="Game">
            <div className="Game__row">
                <h1>Game</h1>
                <div className="Game__person">
                    <div className="Game__avatar">Avatar</div>
                    <div className="Game__name"><input name="name" value={hero.name}/></div>
                </div>
                <div className="Game__attributes">
                    <Attribute name="Жизненная сила" value={count} onClick={handleClick}></Attribute>
                    <Attribute name="Уклонение" value={count} onClick={handleClick}></Attribute>
                    <Attribute name="Энергичность" value={count} onClick={handleClick}></Attribute>
                </div>
            </div>
        </div>
    );
}
