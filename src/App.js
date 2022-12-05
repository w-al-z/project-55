import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Main from "./Main";
import Button from "./Button";
import Cards from "./Cards";
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Button />
      <Cards />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
