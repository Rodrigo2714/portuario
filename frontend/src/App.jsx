import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './contents/menu';
import Content from './contents/content';

function App() {
  return (
    <Router>
      <Menu />
      <Content />
    </Router>
  );
}

export default App;
