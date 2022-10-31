import "./App.css";
import Mainpages from "./Mainpages/Mainpages";
import Header from "./Mainpages/Header";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Paper } from "material-ui";

import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="lg:text-base bg-gray-50 ">
          <div>
            <div className=" sticky z-50">
              <Header />
            </div>
            <div>
              <main>
                <Mainpages />
              </main>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
