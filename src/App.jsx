import ConsumeProducts from "../ProductsContext";
import Nav from "./Navigation/nav";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./products/Products";

function App() {
  return (
    <ConsumeProducts>
      <Sidebar />
      <Nav />
      <Products />
      <Recommended />
    </ConsumeProducts>
  );
}

export default App;
