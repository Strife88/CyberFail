import React from 'react';
import ReactDOM from 'react-dom';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import '@vkontakte/vkui/dist/vkui.css';

import Catalog from './pages/Catalog';
import Catalog2 from './pages/Catalog2';
import Pages from './Pages';

function App () {
  const content = [
    {
        text: "Каталог",
        icon: Icon28Newsfeed,
        view: Catalog
    },
    {
        text: "Уведомления",
        icon: Icon28Notifications,
        view: Catalog2
    },
    {
        text: "Сообщения",
        icon: Icon28Messages,
        view: Catalog2
    }
  ];
  return (
    <Pages content={content}/>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));