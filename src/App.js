import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/:type/:page" component={Content} />
        </Switch>
      </BrowserRouter>      
      <Footer />
    </div>
  );
}

export default App;
