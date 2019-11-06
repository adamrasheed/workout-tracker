import * as React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import {BASE_PATH} from './contstants/routerPaths'

type RoutesProps = {
  store: any
}

class Routes extends React.Component<RoutesProps, {}> {
  render(){
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Header/>
        <Switch>
          <Route path={BASE_PATH} component={Home} />
        </Switch>
      </Provider>
    )
  }
}

export default Routes