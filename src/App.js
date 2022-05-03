import GAListener from 'components/GAListener';
import {MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const WelcomePage = React.lazy(() => import('pages/WelcomePage'));
const SourcesPage = React.lazy(() => import('pages/SourcesPage'));
const DataPage = React.lazy(() => import('pages/DataPage'));
const JornaisPage = React.lazy(() => import('pages/JornaisPage'));
const DatabasePage = React.lazy(() => import('pages/DatabasePage'));
const DashPage = React.lazy(() => import('pages/DashPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/recursos" component={SourcesPage} />
                <Route exact path="/exemplo" component={JornaisPage} />
                <Route exact path="/sobre" component={DataPage} />
                <Route exact path="/artigos" component={DatabasePage} />
                <Route exact path="/resultados" component={DashPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
