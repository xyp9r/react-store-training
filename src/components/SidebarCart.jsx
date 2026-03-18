// Файл: components/SidebarCart.jsx

export default function SidebarCart({ isCartOpen, setIsCartOpen, totalItems, totalPrice, cart, clearCart }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '300px',
      height: '100vh',
      backgroundColor: '#111',
      color: '#fff',
      borderLeft: '2px solid #4caf50',
      padding: '20px',
      boxShadow: '-5px 0 15px rgba(0,0,0,0.5)',
      transition: 'transform 0.3s ease-in-out',
      transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
      zIndex: 1000,
      boxSizing: 'border-box'
    }}>
        <div style= {{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>🛒 Корзина</h3>
          <button onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer', background: 'transparent', color: '#fff', border: 'none', fontSize: '20px' }}>
            ✖
          </button>
        </div>

        <p>Всего товаров: {totalItems}</p>
        <p>Общая сумма: <b style={{ color:'#4caf50' }}>${totalPrice}</b></p>

        {cart.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cart.map(item => (
                  <div key={item.id} style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                    <div style={{ color: '#fff' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
                      x{item.count} - ${item.price * item.count}
                    </div>
                  </div>
                  ))}
            </div>

            <button
              onClick={clearCart}
              style={{
                marginTop: '30px', width: '100%', padding: '10px', cursor: 'pointer', background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '4px'
              }}>
              Очиcтить корзину
            </button>
          </div>
          )}
    </div>
    );
}