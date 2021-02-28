import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Search from './components/Search';
import TopTen from './components/TopTen';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <div id="content">
        <Switch>
          <Route path="/:type/:page" component={Search} />
          <Route path="/" component={TopTen} />
        </Switch>
        </div>
      </BrowserRouter>      
      <Footer />
    </div>
  );
}

export default App;
