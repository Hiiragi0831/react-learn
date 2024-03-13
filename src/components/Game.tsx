import React from 'react';
import '../style/Game.scss';
import {Attribute} from "./Attributes";

class Game extends React.Component {
    state: {
        name: string,
        heal: number;
        freePoints: number;
        vitality: number;
        evasion: number;
        energy: number;
        attributes: any;
    };
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
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
    }

    attributeClick() {
        const hero = Object.assign({}, this.state);

    }

    render() {
        return (
            <div className="Game">
                <div className="Game__row">
                    <h1>Game</h1>
                    <div className="Game__person">
                        <div className="Game__avatar">Avatar</div>
                        <div className="Game__name"><input name="name" value={this.state.name}/></div>
                    </div>
                    <div className="Game__attributes">
                        <Attribute name="Жизненная сила" value="0"></Attribute>
                        <Attribute name="Уклонение" value="0"></Attribute>
                        <Attribute name="Энергичность" value="0"></Attribute>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
