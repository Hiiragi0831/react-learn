import React, {useState} from 'react';
import '../style/Game.scss';
import {Attribute, Attributes} from "./Attributes";

export default function Game() {
    const [hero, setHero] = useState({
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
    });

    function findItem(arr: any, key: string) {
        console.log(arr, key)
        return arr.find((item: { name: string; }) => item.name === key)
    }
    function handleClick(key: string) {
        const heroPerson = Object.assign({}, hero);
        // console.log(key, hero, heroPerson);
        let attr = findItem(hero.attributes, key);
        // console.log(attr)

        setHero(heroPerson)
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
                    <Attributes
                        arr={hero.attributes}
                        onClick={(key:any) => handleClick(key)}
                    />
                </div>
            </div>
        </div>
    );
}
