import './Header.css'

import logo from '../../assets/logo/LogoMakr-7qs4Mn.png'
    
const Header = () => {
    return (
        <div>
            <div className="header">
            <div className="container">
            <img className="logo" src={logo} alt="" />
            <div className="links">
                <ul>
                    <li><a className="active" href="#Home">Home</a></li>
                    <li><a href="#Men's">Men's</a></li>
                    <li><a href="#Women's">Women's</a></li>
                    <li><a href="#Kid's">Kid's</a></li>
                    <li><a href="#Pages">Pages &#9663;</a></li>
                    <li><a href="#Features">Features &#9663;</a></li>
                    <li><a href="Explore">Explore</a></li>
                </ul>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Header