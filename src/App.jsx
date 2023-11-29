import Nav from "./Navigation/nav";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Products from "./products/Products";

function App() {
  return (
    <>
      <Sidebar />
      <Nav />
      <Products />
      <Recommended />
    </>
  );
}

export default App;
