import React from "react"
import { Provider } from "react-redux"
import Cart from "./Components/Cart";
import { productStore } from "./Utils/ProductStore";
function App() {
  return(<>
  <Provider store={productStore}>
    <Cart />
  </Provider>
  </>);
}

export default App
