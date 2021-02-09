import { useState } from 'react';
import CardsView from './components/CardsView/CardsView';
import ListView from './components/ListView/ListView';
import IconSwitch from './components/IconSwitch/IconSwitch';
import getProducts from './Products';
import './Store.css';


function Store() {
  const LIST = 'view_module';
  const CARDS = 'view_list';

  /* 
    Material icons пришлось подключть не через @import как в задании, а через html
    Это правильно? 
  */
  
  const [view, viewSwitch] = useState(LIST);

  const onSwitch = () => {
    viewSwitch((prev) => prev === LIST ? CARDS : LIST);
  }

  /*
    Сделал строго по ТЗ из домашнего задания
    Но мне кажется что ListView и CardsView это копипаста
    Думаю, что можно было сделать один компонент который бы собирал разметку для представления
    А внешним видом управлять с помощью разных классов
    Классы вешать в зависимости от состояния
    Стили, кстати, тоже получились сильно дублирующие друг друга,
    можно было попробовать разбить стили на общую часть и часть отвечающую именно за представление
  */

  const ViewComponent = view === LIST
    ? <ListView items={getProducts()}/> 
    : <CardsView cards={getProducts()}/>;

  return (
    <div className="store">
      <header className="store-header">
        <IconSwitch
          icon={view}
          onSwitch={onSwitch}
        />
      </header>
      <section className="store-products">
        {ViewComponent}
      </section>
    </div>
  );
}

export default Store;
