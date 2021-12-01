import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { AdminPage } from './AdminPage';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';

function Home(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link className="App-link" to="/swagger-ui">Swagger-ui</Link>
        </p>
        <p>
          <Link className="App-link" to="/netlify-cms">Netlify-CMS</Link>
        </p>
      </header>
    </div>
  )
}

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/swagger-ui" component={() => <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />} />
      <Route path="/netlify-cms" component={AdminPage}/>
    </Switch>
  );
}

export default App;
