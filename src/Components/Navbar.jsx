import { Button } from '@chakra-ui/react'
import logo from '../Images/logo.png'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
    return (
        <NAVBAR className ="Navbar">
            <div className="logoSection">
                <img src={ logo} alt="PAALTOO Logo" />
            </div>
            <div className='linksSection'>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/products">Products</NavLink>
            </div>
            <div className='nav-buttons'>
                <Button colorScheme='orange' size={'sm'}>Login</Button>
                {false && <Button colorScheme='red' size={'sm'}>Logout</Button>}
            </div>
        </NAVBAR>
        
    )
}

export default Navbar

const NAVBAR = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 5% 0px 5%; 
max-height: 200px;
position: sticky;
top: 0;
z-index: 1;

.logoSection{
    width:15%;
}

.logoSection img{
    width: 100%;
}

.linksSection{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 50%;
}

.linksSection a{
    text-decoration: none;
    color:black
}


`
