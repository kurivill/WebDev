import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Sidebar from './Sidebar';


function App() {
  return (
    <div>
      
      <Header />
      <MainContent first="Training with props" second="lets hope it works" />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
