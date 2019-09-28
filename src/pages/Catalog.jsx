import React, {useState} from 'react';
import {View, Panel, HeaderButton, } from '@vkontakte/vkui';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';

import ViewPanel from './CatalogPanels/ViewPanel';
import AddPanel from './CatalogPanels/AddPanel';

function Catalog ({...props}) {
  const [active, setActive] = useState("view");

  const plus = (
    <HeaderButton onClick={() => setActive("add")}>
      <Icon28AddOutline/>
    </HeaderButton>
  );

  return (
  <View activePanel={active}>
    <Panel id="view">
      <ViewPanel setFn={() => setActive("add")}/>
    </Panel>
    <Panel id="add">
      <AddPanel/>
    </Panel>
  </View>
  );
}

export default Catalog;