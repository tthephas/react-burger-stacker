import React, {Component} from "react";
import BurgerStack from "./BurgerStack";
import IngredientList from "./IngredientList";

class BurgerPane extends Component {
    render () { 



        return (
            <>
            <div className="ingredientPane"> Ingredients

            <IngredientList />

            </div>
            <BurgerStack />


            </>
        )
    }
}



export default BurgerPane





