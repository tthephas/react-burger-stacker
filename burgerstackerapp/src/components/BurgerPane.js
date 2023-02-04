import React, {Component} from "react";
import IngredientList from "./IngredientList";

class BurgerPane extends Component {
    render () { 



        return (
            <>
            <div className="ingredientPane"> Ingredients

            <IngredientList />

            </div>
            <div className="burgerPane"> Burger Stack
            </div>

            </>
        )
    }
}



export default BurgerPane





