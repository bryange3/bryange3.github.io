import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GrandTetonPage from './pages/GrandTetonPage.js';
// import PhotographyPage from './pages/PhotographyPage';

import cargill from './assets/project/cargill/cargill.png';
import apple from './assets/project/apple/apple.png';
import ssw from './assets/project/ssw/ssw.png';
import nour from './assets/project/nour/nour.png';
import amazon from './assets/project/amazon/amazon.png';
import googlemaps from './assets/project/googlemaps/googlemaps.png';

// projects
import ApplePage from './pages/Projects/ApplePage.js';
import SSWPage from './pages/Projects/SSWPage.js';
import AmazonPage from './pages/Projects/AmazonPage.js';
import GoogleMapsPage from './pages/Projects/GoogleMapsPage.js';
import NourPage from './pages/Projects/NourPage.js';
import CargillPage from './pages/Projects/CargillPage.js';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge",
      home: {
      },
      about: {
      },
      grandteton: {
      },
      // photography: {
      // },
      workProjects: [
        {
          id: 0,
          projectTitle: 'Apple, 2022',
          description: 'Enhancing Legacy Contact, a feature that helps people share account data after death. Also increasing discovery via Family Sharing.',
          imgSrc: apple,
          imgAlt: 'An iPhone on the add legacy contact screen and another on the family checklist screen',
          path: '/apple',
          role: 'Product Design Intern, iCloud',
          timeline: 'May - Sep 2022',
          category: ['all', 'design', 'work']
        },
        {
          id: 1,
          projectTitle: 'South Side Weekly, 2021',
          description: 'Centralizing story management and collaboration between 250+ admin and contributors at a Chicago newspaper nonprofit.',
          imgSrc: ssw,
          imgAlt: 'Desktop contributor and admin dashboards showcasing pitches a contributor can work on and a story that admin can assign contributors to',
          path: '/south-side-weekly',
          role: 'Product Designer',
          timeline: 'Sep 2021 - Jan 2022',
          category: ['all', 'design']
        },
        // {
        //   id: 2,
        //   projectTitle: 'Amazon, 2023',
        //   description: 'Helping shoppers discover products they can buy with Prime fast, free delivery on direct-to-consumer websites. Educational elements shipped on Shopify in 2024.',
        //   imgSrc: amazon,
        //   imgAlt: '',
        //   path: '/amazon',
        //   category: ['all', 'design', 'work']
        // },
        // {
        //   id: 3,
        //   projectTitle: 'Google Maps Saved Places',
        //   description: 'Empowering people to explore the places they saved through search integration.',
        //   imgSrc: googlemaps,
        //   imgAlt: '',
        //   path: '/google-maps',
        //   category: ['all', 'design']
        // },
        // {
        //   id: 4,
        //   projectTitle: 'Cargill, 2021',
        //   description: 'Tracking 5000+ new menu item ideas for a leading fast-food chain.',
        //   imgSrc: cargill,
        //   imgAlt: '',
        //   path: '/cargill',
        //   category: ['all', 'design', 'work']
        // },
        // {
        //   id: 5,
        //   projectTitle: 'Nour',
        //   description: 'Connecting the elderly in a time of social distancing.',
        //   imgSrc: nour,
        //   imgAlt: '',
        //   path: '/nour',
        //   category: ['all', 'design']
        // }
      ]
    }
  }

  render() {

    return (

      <BrowserRouter>
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
          <Route path="/grand-teton" exact render={() => <GrandTetonPage title={this.state.grandteton.title} />} />
          {/* <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} /> */}

          <Route path={this.state.workProjects[0].path} render={() => <ApplePage info={this.state.workProjects[0]} />} />

          <Route path={this.state.workProjects[1].path} render={() => <SSWPage info={this.state.workProjects[1]} />} />

          {/* <Route path={this.state.workProjects[2].path} render={() => <AmazonPage info={this.state.workProjects[2]} />} />

          <Route path={this.state.workProjects[3].path} render={() => <GoogleMapsPage info={this.state.workProjects[3]} />} />

          <Route path={this.state.workProjects[4].path} render={() => <CargillPage info={this.state.workProjects[4]} />} />

          <Route path={this.state.workProjects[5].path} render={() => <NourPage info={this.state.workProjects[5]} />} /> */}

          <Footer />

        </div>
      </BrowserRouter >

    );
  }
}

export default App;
