import React, {useState} from 'react';
import '../style/Game.scss';
import {Attribute, Attributes} from "./Attributes";

export default function Game() {
    const [hero, setHero] = useState({
        name: 'Alex',
        points: 33,
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
                        parent: 0,
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
                        parent: 0,
                    },
                    {
                        name: "Стрельба из лука",
                        value: 0,
                        parent: 0,
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
                        parent: 0,
                    },
                    {
                        name: "Выживание",
                        value: 0,
                        parent: 0,
                    },
                    {
                        name: "Медицина",
                        value: 0,
                        parent: 0,
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
                        parent: 0,
                    },
                    {
                        name: "Проницательность",
                        value: 0,
                        parent: 0,
                    },
                    {
                        name: "Внешний вид",
                        value: 0,
                        parent: 0,
                    },
                    {
                        name: "Манипулирование",
                        value: 0,
                        parent: 0,
                    },
                ]
            },
        ]
    });

    function findItem(arr: any, key: string) {
        return arr.find((item: { name: string; }) => item.name === key)
    }

    function changeName(evt: any) {
        const heroPerson = Object.assign({}, hero);
        heroPerson.name = evt.target.value;
        setHero(heroPerson);
    }

    function handleClick(key: string) {
        const heroPerson = Object.assign({}, hero);
        let attr = findItem(hero.attributes, key);
        if (!attr) {
            hero.attributes.forEach((item) => {
                if (findItem(item.skills, key)) {
                    attr = findItem(item.skills, key);
                }
            })
        } else {
            hero.attributes.forEach((item) => {
                item.skills.forEach(i => i.parent++);
            });
        }
        attr.value++;
        heroPerson.points--;
        heroPerson.vitality = findItem(heroPerson.attributes, 'Сила').value + 3;
        heroPerson.evasion = findItem(heroPerson.attributes, 'Ловкость').value + 10;
        heroPerson.energy = findItem(heroPerson.attributes, 'Ловкость').value + findItem(heroPerson.attributes, 'Интеллект').value;
        setHero(heroPerson);
    }

    return (
        <div className="Game">
            <div className="Game__row">
                <h1>Game</h1>
                <div className="Game__person">
                    <div className="Game__avatar">Avatar</div>
                    <div className="Game__name">
                        <input
                            name="name"
                            value={hero?.name || ""}
                            onChange={changeName}
                        />
                    </div>
                </div>
                <div className="Game__attributes">
                    <Attributes>
                        <Attribute name={'Жизненная сила'} value={hero.vitality} />
                        <Attribute name={'Уклонение'} value={hero.evasion} />
                        <Attribute name={'Энергичность'} value={hero.energy} />
                    </Attributes>
                    <Attributes
                        attributes={hero?.attributes}
                        isActive={hero?.points}
                        onClick={(key: any, value: any) => handleClick(key)}
                    />
                </div>
            </div>
        </div>
    );
}
