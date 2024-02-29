import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="text-3xl">
    
   <Provider store={appStore}><Body/></Provider>
   
    </div>
  );
}

export default App;
