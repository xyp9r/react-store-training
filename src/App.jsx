import { useState } from 'react';

// Подключаем наши вынесенные компоненты из папки components
import GameCard from './components/GameCard.jsx';
import SidebarCart from './components/SidebarCart.jsx';

export default function App() {
  // Корзина стартует как пустой массив
  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const gamesList = [
    { id: 1, title: 'Cyberpunk 2077', genre: 'RPG', price: 30, year: 2020 },
    { id: 2, title: 'Minecraft', genre: 'Sandbox', price: 20, year: 2011 },
    { id: 3, title: 'Elden Ring', genre: 'Souls-like', price: 40, year: 2022 }
  ];

  // Обновленная логика покупки
  const handleBuy = (game) => {
    // 1. Ищем, есть ли уже такая игра в нашей корзине
    const existingGame = cart.find((item) => item.id === game.id);

    if (existingGame) {
      // 2. Если игра уже есть, мы пробегаемся по корзине и увеличиваем ее count на +1
      const updatedCart = cart.map((item) => 
        item.id === game.id ? {...item, count: item.count + 1 } : item
        );
      setCart(updatedCart); // Нажимаем на пульт
    } else {
      // 3. Если игры еще нет добавляем ее как новый объект с count: 1
      setCart([...cart, { ...game, count: 1}]); // Нажимаем на пульт
    }
  };

  // Функция очистки корзины
  const clearCart = () => {
    setCart([]); // Просто кладем пустой массив, и это всё, реакт сам сотрет список с экрана
  };

  // Удаление конкретной игры по её ID
  const removeFromCart = (gameId) => {

    const existingGame = cart.find((item) => item.id === gameId);

    if (existingGame.count > 1) {
      // Если их больше одинЮ промегаемся мапом и убавляем count
      const updatedCart = cart.map((item) =>
        item.id === gameId ? {...item, count: item.count - 1} : item
        );
      setCart(updatedCart);
    } else {
    // filther возвращает новый массив в котором нет игры с переданным gameid
    const updatedCart = cart.filter((item) => item.id !== gameId);
    setCart(updatedCart);
      }
  };

  // Математика: Считаем общее количество игр в корзине ( суммируем все count)
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);

  // Математика подсчета суммы корзины 
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.count), 0);

  return (
    <div style={{ overflowX: 'hidden', minHeight: '100vh', position: 'relative' }}>

      {/* ШАПКА САЙТА */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #ddd' }}>
          <h2>Моя библиотека игр:</h2>

          {/* Кнопка переключения. Знак ! меняет true на false и наоборот */}

          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{ padding: '10px 20px', cursor: 'pointer', background: '#4caf50', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}
          >
            🛒 Корзина ({totalItems})
          </button>
      </div>

{/* ВЫЕЗЖАЮЩАЯ БОКОВАЯ ПАНЕЛЬ */}
      <SidebarCart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        totalItems={totalItems}
        totalPrice={totalPrice}
        cart={cart}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
      />

      {/* ВИТРИНА */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', padding: '20px' }}>
        {gamesList.map((game) => (
          // Теперь мы просто испльзуем наш компонент-деталь как обычный html-тег
          // и передаем в него нужную игру и нужную функцию
          <GameCard
            key={game.id}
            game={game}
            onBuyClick={handleBuy}
            />
          ))}
      </div>
    </div>
    );
}