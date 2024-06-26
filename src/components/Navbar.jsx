import React, { useState} from 'react';
import './Navbar.css';

 


const Navbar = () => {
//to change burger classes
const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
const [menu_class, setMenuClass] = useState ('menu hidden')
const [isMenuClicked, setIsMenuClicked] = useState(false)

//toggle burger menu classes
 const updateMenu = () => {
    if (isMenuClicked) {
        setBurgerClass('burger-bar clicked')
        setMenuClass('menu visible')
    }
    else {
        setBurgerClass('burger-bar unclicked')
        setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
 }

return (
    <div style={{ width: '100%', height: '100vh' }}>
        <nav>
            <div className='burger-menu sm:hidden' onClick={updateMenu} >
                <div className={burger_class} style={{ backgroundColor: 'red', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
                <div className={burger_class} style={{ backgroundColor: 'white', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
                <div className={burger_class} style={{ backgroundColor: 'Blue', boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)' }}></div>
            </div>
        </nav>

        <div className={menu_class}></div>
    </div>
)
}

export default Navbar
