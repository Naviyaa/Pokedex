import React, {Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: '006', name: 'Charizard', type: 'Fire', exp: 202},
            {id: '001', name: 'Bulbasaur', type: 'Grass', exp: 173},
            {id: '007', name: 'Squirtle', type: 'Water', exp: 67},
            {id: '471', name: 'Glaceon', type: 'Ice', exp: 160},
            {id: '094', name: 'Gengar', type: 'Poison', exp: 54},
            {id: '208_f2', name: 'Steelix', type: 'Steel', exp: 90},
            {id: '196', name: 'Espeon', type: 'Psychic', exp: 156},
            {id: '010', name: 'Caterpie', type: 'Bug', exp: 35},
            {id: '025', name: 'Pikachu', type: 'Electric', exp: 182},
            {id: '491', name: 'Darkrai', type: 'Dark', exp: 221},
            {id: '133', name: 'Eevie', type: 'Normal', exp: 60},
            {id: '448', name: 'Lucario', type: 'Fighting', exp: 85},
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand2.length > hand1.length) {
            let randIndex = Math.floor(Math.random()*hand2.length);
            let randPokemon = hand2.splice(randIndex,1)[0];
            hand1.push(randPokemon);
        }
        let total_exp1 = hand1.reduce((e, p) => e + p.exp, 0);
        let total_exp2 = hand2.reduce((e, p) => e + p.exp, 0);
        return (
            <div>
                <Pokedex pokemon={hand1} total_exp={total_exp1} isWinner={total_exp1 > total_exp2} />
                <Pokedex pokemon={hand2} total_exp={total_exp2} isWinner={total_exp2 > total_exp1} />
            </div>
        );
    }
}

export default Pokegame;