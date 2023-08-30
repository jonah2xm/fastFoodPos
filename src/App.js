import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import ContextProvider from "./Components/Context/ContextProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header></Header>
        <Menu></Menu>
        <Cart></Cart>
      </ContextProvider>
    </div>
  );
}

export default App;
