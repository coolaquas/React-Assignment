import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { newsprovider } from "./NewsProvider";
import News from "./components/News/News";
import Header from "./components/Header/Header";
function App() {
  const [newsData, setNewsData] = useState([]);
  const [apiOption, setApiOption] = useState(1);
  useEffect(() => {
    newsprovider(apiOption).then((res) => {
      setNewsData(res);
    });
  }, [, apiOption]);
  const handleOption = (op) => {
    setApiOption(op);
  };
  return (
    <Router>
      <div className="App">
        <Header selected={handleOption} />
        <Switch>
          <Route exact path="/">
            <News newsData={newsData} />
          </Route>
          <Route path="*">
            <center>
              <h1>404. Bad Request!</h1>
            </center>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
