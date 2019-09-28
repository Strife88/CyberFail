import React from 'react';
import {View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';

function Catalog ({...props}) {
  return (
  <View activePanel="feed">
    <Panel id="feed">
      <PanelHeader right={null}>Каталог2</PanelHeader>
      <Group title="Items">
          <List>
          <Cell>Hello</Cell>
          <Cell>World</Cell>
          </List>
      </Group>
    </Panel>
  </View>
  );
}

export default Catalog;