import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        <div>
            <select onChange = {handleOrder}>
                <option value = 'A'>Ascendente</option>
                <option value = 'D'>Descendente</option>
            </select>

            <select onChange = {handleFilter}>
                <option value = 'Male'>Male</option>
                <option value = 'Female'>Female</option>
                <option value = 'Genderless'>Genderless</option>
                <option value = 'unknow'>unknow</option>
                <option value = 'allCharacters'>All Characters</option>
            </select>

        {
            myFavorites.map(fav => {
                return (
                    <Card
                        key = {fav.id}
                        id = {fav.id}
                        name = {fav.name}
                        species = {fav.species}
                        gender = {fav.gender}
                        image = {fav.image}
                        onClose = {fav.onClose}
                    />
                )
            })
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);