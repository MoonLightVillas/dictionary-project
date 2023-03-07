
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">
      <img 
      src={logo} 
      className="App-logo img-fluid"
      alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a href="mailto:marielacampos@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariela Campos
          </a>{" "}
            and is{" "}
        <a 
        href="https://github.com/MoonLightVillas/react-weather-app"
        target="_blank"
        rel="noopener noreferrer">
          open-sourced on GitHub 
        </a> {""}
          and {""}
        <a
        href="https://famous-puppy-0c88da.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>    
      </footer>
     </div>
    </div>
  );
}

