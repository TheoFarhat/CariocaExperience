import React from 'react';
import "./styles.css";
import img from "../../assets/images/beach-palm.png";


const Header: React.FC = () => {
  return (
    <header>
      <div className='text_logo'>
        <h2 className="title">CariocaExperience</h2>
        <img src={img} alt="" style={{ width: 20, height: 20 }}/>
      </div>
      <nav>
        <ul>
          <li><a href="/home">Eventos</a></li>
          <li><a href="myposts">Criar Publicações</a></li>
          <li><a href="profile">Perfil</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
