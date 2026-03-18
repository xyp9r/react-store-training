// Файл: components/GameCard.jsx

export default function GameCard({ game, onBuyClick }) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', borderRadius: '8px', width: '200px' }}>
      <h3 style={{ marginTop: 0 }}>{game.title}</h3>
      <p style={{ fontSize: '14px', color: '#555' }}>Жанр: {game.genre}</p>
      <p style={{ fontSize: '14px', color: '#555 '}}>Год: {game.year}</p>
      <p>Цена: <b style={{ color: '#4caf50' }}>${game.price}</b></p>

      {/* рпик лике вызываем функцию которую нам передали сверху */}
      <button
        onClick={() => onBuyClick(game)}
        style={{
          width: '100%',
          cursor: 'pointer',
          padding: '8px',
          background: '#eee',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}>
          Добавить
        </button>
    </div>
    );
}