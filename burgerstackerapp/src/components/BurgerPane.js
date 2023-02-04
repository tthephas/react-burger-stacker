import React, {Component} from "react";
import IngredientList from "./IngredientList";

class BurgerPane extends Component {
    render () { 



        return (
            <>
            <div className="burgerPanes"> Ingredients

            <IngredientList />

            </div>
            <div className="burgerPanes"> Burger Stack
            </div>

            </>
        )
    }
}



export default BurgerPane





