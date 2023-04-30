import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AnchorButton from "./components/first-comp/first-comp";
import Schedule from "./components/time/time";

function App() {
  return (
      <div >
        <Header/>
          <AnchorButton/>
        <Footer/>
      </div>
  );
}

export default App;
