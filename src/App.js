import { createContext, useState } from "react";
import MediaControlCard from "./Components/Card";
import SwipeableTemporaryDrawer from "./Components/Cart";
import Navbar from "./Components/Navbar";
export const noteContext = createContext();

function App() {
  const [data, setData] = useState([]);
  return (
    <div>
      <noteContext.Provider value={{ data, setData }}>
        <Navbar />
        <MediaControlCard />
        <SwipeableTemporaryDrawer />
      </noteContext.Provider>
    </div>
  );
}

export default App;
