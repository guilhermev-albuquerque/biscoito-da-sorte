import { useState } from 'react';
import cookie from './assets/img/biscoito.png';
import './assets/styles/styles.css';

function App() {
  const phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  ];
  const [phrase, setPhrase] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    let aleatory = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[aleatory];
    setPhrase(phrases[aleatory]);
  };

  return (
    <div className="container">
      <img src={cookie} className="img" />
      <button onClick={handleClick}>Abrir Biscoito</button>
      <h3 className="textPhrase">{phrase}</h3>
    </div>
  );
}

export default App;
