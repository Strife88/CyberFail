import React, {useState} from 'react';
import {Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';

function Pages ({content, ...props}){
const [active, setActive] = useState(0);

const tabBar = (
    <Tabbar>
        {content.map( (item, i) =>
        <TabbarItem 
            key={i}
            onClick={() => setActive(i)} 
            selected={active === i} 
            text={item.text}
        >
            <item.icon/>
        </TabbarItem>
        )}
    </Tabbar>
);

const views = content.map( (item, i) =>
    <item.view key={i} id={i}/>
);

return(
    <Epic activeStory={active} tabbar={tabBar}>
        {views}
    </Epic>);
}

export default Pages;