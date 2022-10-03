import { Component } from "react";
import style from "./NavBar.module.css"

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <p className={style.badge}>{this.props.totalItems}</p>
            </div>
        );
    }
}
 
export default NavBar;