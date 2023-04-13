import './Header.css';
import React from 'react';
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className='header'>
        <div className='header__content'>
            <img className='header__img' src={logo} alt='imagem logo'/>
            <ul className='header__ul'>
                <li className='header__li'>Sobre nós</li>
                <li className='header__li'>Nossas soluções</li>
                <li className='header__li'>Mercado Livre</li>
                <li className='header__li'>Desperdiçômetro</li>
                <li className='header__li'>Blog</li>
                <li className='header__li_pesquisa'>Faça sua pesquisa</li>
            </ul>
            <button className='header__button'>Seja nosso cliente</button>
        </div>
    </header>
  );
}

export default Header;