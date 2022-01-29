import React from 'react';
import styled from 'styled-components';
import { Home, InfoCircle } from 'styled-icons/fa-solid'

const Navbar = () => {
    return <div>
        <NavbarContent>
            <h1>Shorter</h1>
            <ul>
                <li>
                    <Home />
                    Main Page
                </li>
                <li>
                    <InfoCircle />
                    About us</li>
            </ul>
        </NavbarContent>
      
    </div>;
};

export default Navbar;


const NavbarContent = styled.div`
    padding:50px;
    padding-top:10px;
    background:transparent;
    display:flex;
    justify-content:space-between;
    h1{

        color:white;
        margin-left:30px;
    }
    ul{
        margin-right:30px;
        list-style:none;
        display:flex;
        align-items:center;

        li{
            padding:10px;
            font-size:20px;
            color:white;
            font-weight:bold;
         
            svg{
                width:20px;
                margin-right: 10px;
            }
        }

    }
`