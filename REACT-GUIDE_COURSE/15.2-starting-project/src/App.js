import {Route, Switch, Redirect} from 'react-router-dom'
import AllQoutes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetail";
import NewQoute from "./pages/NewQuote";
import Layout from "./components/layout/Laoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Layout>
          <Switch>
              <Route
                  path='/'
                  exact
              >
                  <Redirect to='/quotes' />
              </Route>
              <Route
                  path='/quotes'
                  exact
              >
                  <AllQoutes/>
              </Route>
              <Route
                  path='/quotes/:quoteId'
              >
                  <QuoteDetails/>
              </Route>
              <Route
                  path='/new-quote'
              >
                  <NewQoute/>
              </Route>
              <Route path='*'>
                <NotFound/>
              </Route>
          </Switch>
      </Layout>
  );
}

export default App;
