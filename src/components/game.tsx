import React from 'react';
import '../style/Game.scss';

class Game extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div className="Game">
                <div className="Game__row">
                    <h1>Game</h1>
                </div>
            </div>
        );
    }
}

export default Game;
