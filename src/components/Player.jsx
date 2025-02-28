import { useState, useRef } from 'react';

// Komponent przechowujący nazwę gracza.
export default function Player() {
	const playerName = useRef();

	const [enteredPlayerName, setEnteredPlayerName] = useState(null);

	function handleClick() {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = ''; // Czyszczenie pola <input> przez zastąpienie bieżącej nazwy użytkownika pustym stringiem przy ponownym naciśnięciu przycisku 'Set Name'.
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
