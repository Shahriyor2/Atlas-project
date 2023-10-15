import React from "react";
import "./index.scss";
import "./macro-css";

function App() {
  return (
    <div className="content">
      <header>
        {/* два дива внутри одного */}
        <div className="header-content">
          <div>
            <img src="img/icon.svg" alt="Email" />
            <span className="">atlashotel@atlas.tj</span>

            <img src="img/Telefon.svg" alt="Telefon" />
            <span>+992 903400570</span>
          </div>

          <div className="d-flex">
            <img width={14} height={14} src="img/flag.svg" alt="Flag" />
            <div >
              <span>Русский</span>
              <img src="" alt="треугольник вниз" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
