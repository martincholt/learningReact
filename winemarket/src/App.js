import './App.css';
import { NavBar } from './components/organisms/Navbar/NavBar';
import { Landing } from './pages/landing';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
        <main>
          <Landing/>
        </main>
    </div>
  );
}

export default App;
