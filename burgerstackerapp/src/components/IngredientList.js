import React, {Component} from "react";

//// overall ingredients to grab LEFT

class IngredientList extends Component {
    render () { 
        
        const ingredients = [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
          ]
          
          const allIngredients = ingredients.map((ingred, idx) => {
              const boxStyle = {'background-color' : `${ingred.color}`}
            return (
                <div className="ingredients" style={boxStyle} key={`${ingred.name} `}>  {ingred.name} </div>
        )})


        // const allIngredients = ingredients.map((ingred, idx) => {
        // return (
        // <ul key={`${ingred.name} ${ingred.color}`}>
        //     {ingred.name} {ingred.color}</ul>
        //     )})


        return (
            <div>
            {allIngredients}
            </div>
        )
    }
}



export default IngredientList
