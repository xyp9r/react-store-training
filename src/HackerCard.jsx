// scr/HackerCard.jsx

// В скобках пишем { title, level }, говоря жди пока тебе передадут заголовок и уровень
function HackerCard({ title, level }) {
	return (
			<div style={{ border: '1px solid #4caf50', padding: '15px', margin: '10px', backgroundColor: '#0a0a0a', color: '#4caf50' }}>
				<h2>[ {title} ]</h2>
				<p>Требуется авторизация уровня {level}.</p>
			</div>
		);
}

export default HackerCard; // Отдаем деталь наружу