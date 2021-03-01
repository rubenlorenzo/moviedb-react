import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import TopTen from "./components/TopTen";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <div id="content">
          <Switch>
            <Route path="/movies/:type/:page" component={Search} exact />
            <Route path="/movie/:movieId" component={Movie} exact />
            <Route path="/" component={TopTen} exact />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
