import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";
function App() {
  const [demo, setDemo] = useState("My Name is Arion");

  const handleName = () => {
    setDemo("My Name is Arion");
  };

  const handleSkill = () => {
    setDemo("I'm a Frontend Developer");
  };

  return (
    <>
      <main>
        <div className="card">
          <Header />

          <Display info={demo} />
          <div className="btn">
            <button className="name" onClick={handleName}>
              Name
            </button>
            <button className="skill" onClick={handleSkill}>
              Skills
            </button>
          </div>
          <Counter />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
