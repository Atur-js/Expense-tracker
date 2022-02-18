import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AddExpense from './components/pages/add-expense/AddExpense';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-expense" component={AddExpense} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
