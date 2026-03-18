// src/SocialLink.jsx

function SocialLink({ platform, status }) {
	return (
		<div style={{
			border: '1px solid #333',
			padding: '10px 15px',
			marginBottom: '10px',
			width: '250px',
			backgroundColor: '#0a0a0a',
			fontFamily: 'monospace'
		}}>
			<span style={{ color: '#c9c9c9' }}>{platform}</span>
			<span style={{ color: '#4caf50', marginLeft: '10px', fontSize: '12px'}}>[{status}]</span>
		</div>
		);
}

export default SocialLink;