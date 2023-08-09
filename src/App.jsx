import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import './App.css';

function App() {
  return (
    <div>
  <NavBar/>
  <ItemsListContainer greeting={'HOLA'}/>
  
   </div>
  );
}

export default App;
