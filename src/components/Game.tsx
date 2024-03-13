import React from 'react';
import '../style/Game.scss';

class Game extends React.Component {
    state: {
        name: string,
        heal: number;
        freePoints: number;
        vitality: number;
        evasion: number;
        energy: number;
        strength: number;
        agility: number;
        intellect: number;
        charisma: number;
        skills: any;
    };
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            name: 'Name',
            heal: 3,
            freePoints: 50,
            vitality: 3,
            evasion: 10,
            energy: 0,
            strength: 0,
            agility: 0,
            intellect: 0,
            charisma: 0,
            skills: [
                {
                    name: 'Атака',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Стелс',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Стрельба из лука',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Обучаемость',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Выживание',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Медицина',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Запугивание',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Проницательность',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Внешний вид',
                    value: 0,
                    level: 0,
                }, {
                    name: 'Манипулирование',
                    value: 0,
                    level: 0,
                },
            ]
        };
    }

    render() {
        return (
            <div className="Game">
                <div className="Game__row">
                    <h1>Game</h1>
                    <p>{this.state.name}</p>
                </div>
            </div>
        );
    }
}

export default Game;
