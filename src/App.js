import React from 'react';
import Utama from './Components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Beranda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item active">
        <a className="nav-link" href="TentangSaya">Tentang Saya <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="Karya">Karya</a>
        </li>
        <li className="nav-item active">
        <a className="nav-link" href="Kontak">Kontak</a>
        </li>
        </ul>
      </div>
    </nav> <hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;
