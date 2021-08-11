import React from 'react';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './subpage/About/index'
import Service from './subpage/Service'
import SingleProjectDetails from './components/SingleProjectDetails'
import Loading from './components/Loading'
import Faq from './subpage/Faq'
import ScrollToTop from './components/FixedScrool';
import Client from './subpage/Client'
import Error from './components/Error';

function App() {
  const [loading__, setloading__] = React.useState(false)
  function display_Loading() {
    setloading__(true)
  }
  window.addEventListener('DOMContentLoaded', display_Loading)

  if (!loading__) {
    return <Loading />
  }



  return (
    <Router>
      <ScrollToTop />
      <Route>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about/'>
            <About />
          </Route>
          <Route path='/our/service/'>
            <Service />
          </Route>
          <Route path='/help/faq/'>
            <Faq />
          </Route>
          <Route path='/clients/all/'>
            <Client />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
          <Route path='/show/project/single/:id' children={<SingleProjectDetails />}></Route>
        </Switch>
      </Route>
    </Router>
  );
}

export default App;
