import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const {name, id, type, exp} = this.props;
        const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+id+".png";
        return (
            <div className="Pokecard">
                <h1 className="card-name">{name}</h1>
                <img src={url} alt={name} className="card-img" />
                <p className="card-type">TYPE: {type}</p>
                <p className="card-xp">EXP: {exp}</p>
            </div>
        );
    }
}

export default Pokecard;