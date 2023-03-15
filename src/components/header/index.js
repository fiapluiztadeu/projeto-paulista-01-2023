import React from 'react';
import {AreaHeader} from './styled';
import {Link} from 'react-router-dom';
import imgLogo from "../../imagens/logo192.png"


function Header() {
  return (
    <div>
      <AreaHeader>
      <div className='container'>
          <div className='logo'>
            

        <img src={imgLogo} alt="imagem" className='logo'/>
            
          </div>
          
        <nav>
          <ul>
            <li> <a href='/'> INDEX</a></li>
            <li> <a href='/sobre'>SOBRE</a></li>
            <li> <a href='/cep'>CEP</a></li>

            <li><Link to='/sobre'>  SOBRE V2</Link> </li>
            <li><Link to='/'>  INDEX V2</Link> </li>

          </ul>
        </nav>
      </div>
     
      </AreaHeader>
    </div>
  )
};
export default Header;