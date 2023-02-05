import React, {Component} from "react";
import BurgerStack from "./BurgerStack";

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
          
          const emptystack = []
          const buildBurger = (e) => {
            alert('you clicked me')
            //console.log('add this to empty', e.target.innerHTML)
            // emptystack.push(e.target.innerHTML)
            // console.log(emptystack)
            // return emptystack.map((ingred) => <li>{ingred}</li>)
          }

          const allIngredients = ingredients.map((ingred, idx) => {
              const boxStyle = {'backgroundColor' : `${ingred.color}`}
            return (
                // <div 
                // className="ingredients" 
                // onClick={buildBurger}
                // style={boxStyle} 
                // key={`${ingred.name}`}
                // >  
                // {ingred.name} 
                // </div>
                <form onSubmit={buildBurger} key={`${ingred.name}`}>

                    <button
                        type="submit"
                        className="ingredients"
                        style={boxStyle}
                        

                        >{`${ingred.name}`}
                    </button>
                </form>
        )})

        return (
            <div>
                
            {allIngredients}
            
            </div>

        )
    }
}



export default IngredientList;
