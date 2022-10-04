import React from 'react'
import * as S from './styles';
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header() {
  return ( <S.Container>
    <S.LeftSide>
    <img src={logo} alt='Logo empresa'></img>
    </S.LeftSide>
    <S.RightSide>
    <button>INICIO</button>
    <span className='dividir'></span>
    <button>NOVA TAREFA</button>
    <button><img src={bell} alt='Sino Notificação'></img><span>2</span></button>
    
    </S.RightSide>
  </S.Container>
  )
}

export default Header