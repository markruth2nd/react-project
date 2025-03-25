import reactImage from '../../assets/react-core-concepts.png';
import "./Header.css";

const reactDescriptions = ['fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {

  const num = reactDescriptions[getRandomInt(2)];
  return (
    <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {num} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}