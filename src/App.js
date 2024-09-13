import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import './App.css';

import cargill from './assets/project/cargill/cargill.png';
import apple from './assets/project/apple/apple.png';
import ssw from './assets/project/ssw/ssw.png';
import nour from './assets/project/nour/nour.png';
import amazon from './assets/project/amazon/amazon.gif';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotographyPage from './pages/PhotographyPage';

// projects
import ApplePage from './pages/Projects/ApplePage.js';
import SSWPage from './pages/Projects/SSWPage.js';
import NourPage from './pages/Projects/NourPage.js';
import CargillPage from './pages/Projects/CargillPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge",
      home: {
        title: 'I\'m a product designer + developer with a love for baking and social good!',
      },
      about: {
      },
      photography: {
      },
      workProjects: [
        {
          id: 0,
          projectTitle: 'Enhancing Legacy Contact at Apple',
          description: 'Improving a feature that helps people share account data after death. Also increasing discovery via Family Sharing, now primary driver behind adoption.',
          imgSrc: apple,
          path: '/apple',
          category: ['all', 'design', 'work']
        },
        {
          id: 1,
          projectTitle: 'Centralizing story management between admin and contributors at a newspaper nonprofit',
          description: 'Streamlining collaboration between 250+ admin and contributors at Chicago newspaper nonprofit, South Side Weekly.',
          imgSrc: ssw,
          path: '/southsideweekly',
          category: ['all', 'design', 'work']
        },
        {
          id: 2,
          projectTitle: 'Helping shoppers discover and understand Buy with Prime at Amazon',
          description: 'Providing merchants with elements to add to their direct-to-consumer websites to boost Buy with Prime product discovery, shipped on Shopify.',
          imgSrc: amazon,
          path: '/amazon',
          category: ['all', 'design', 'work']
        },
        {
          id: 2,
          projectTitle: 'Nour Social Platform',
          description: 'Connecting the elderly in a time of social distancing.',
          imgSrc: nour,
          path: '/nour',
          category: ['all', 'design']
        },
        {
          id: 3,
          projectTitle: 'Cargill Menu Item Idea Dashboard',
          description: 'Tracking new menu item ideas for a leading fast-food restaurant.',
          imgSrc: cargill,
          path: '/cargill',
          category: ['all', 'design', 'work']
        }
      ]
    }
  }

  render() {

    return (
      <Router>
        <div className="font-sans-serif">
          {/* <Navbar className="top-bar fixed" expand="lg">
            <Navbar.Brand><Link className="header-title default" to="/">Bryan Ge</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link default" to="/">Work</Link>
                <Link className="nav-link default" to="/about">About</Link>
                <a className="nav-link default" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing">
                  Resume
                </a>
                <Link className="nav-link default" to="/photography">Photography</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar> */}

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />

          <Route path={this.state.workProjects[0].path} render={() => <ApplePage info={this.state.workProjects[0]} />} />

          <Route path={this.state.workProjects[1].path} render={() => <SSWPage info={this.state.workProjects[1]} />} />

          <Route path={this.state.workProjects[2].path} render={() => <NourPage info={this.state.workProjects[2]} />} />

          <Route path={this.state.workProjects[3].path} render={() => <CargillPage info={this.state.workProjects[3]} />} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
