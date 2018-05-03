import React, {Component} from 'react';
import Auo from '../../hoc/Auo';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render()
    {
        return (
            <Auo>
                <Burger/>
                <div>
                    Build Controls
                </div>
            </Auo>
        )
    }
}
export default BurgerBuilder;