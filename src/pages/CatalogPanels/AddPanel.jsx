import React from 'react';
import {PanelHeader, Group, List, Cell } from '@vkontakte/vkui';

function ViewPanel ({...props}) {
  return (
    <>
      <PanelHeader right={null}>Каталог</PanelHeader>
      <Group title="Items">
          <List>
          <Cell>Hello</Cell>
          <Cell>World</Cell>
          </List>
      </Group>
    </>
  );
}

export default ViewPanel;