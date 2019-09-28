import React from 'react';
import styled from 'styled-components'
import {PanelHeader, HeaderButton, Div, Button } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import empty from '../../images/empty.svg';

function ViewPanel ({setFn, ...props}) {

  const StyledButton = styled(Button)`
    display: block;
    margin: 50px auto;
    & * {
      display: inline-block;
      vertical-align: middle;
    }
  `

  const plus = (
    <HeaderButton onClick={setFn}>
      <Icon28AddOutline/>
    </HeaderButton>
  );

  const Empty = (
    <Div style={{textAlign:"center"}}>
      <img src={empty} alt="empty"/>
      <h1>Создайте мероприятие и выбирайте волонтеров</h1>
      Мы поможем вам с волонтерами в вашем мероприятии
    </Div>);

  const AddButton = (
    <StyledButton  onClick={setFn}>
        <Icon28AddOutline/> <span>Создать мероприятие</span>
    </StyledButton>
  );
    
  return (
    <>
      <PanelHeader left={plus}>Каталог</PanelHeader>
      {Empty}
      {AddButton}
    </>
  );
}

export default ViewPanel;