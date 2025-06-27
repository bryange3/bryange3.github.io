import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GrandTetonPage from './pages/GrandTetonPage.js';

import apple from './assets/project/apple/apple.png';
import ssw from './assets/project/ssw/ssw.png';
import amazon from './assets/project/amazon/amazon.png';

// projects
import ApplePage from './pages/Projects/ApplePage.js';
import SSWPage from './pages/Projects/SSWPage.js';
import AmazonPage from './pages/Projects/AmazonPage.js';
import { BrowserRouter, HashRouter } from 'react-router-dom/cjs/react-router-dom.min.js';
import ExperimentsPage from './pages/ExperimentsPage.js';

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
          projectTitle: 'Apple',
          year: '2022',
          description: 'Enhancing Legacy Contact, a feature that helps people share account data after death. Also increasing discovery via Family Sharing.',
          coverType: 'image',
          coverSrc: apple,
          imgAlt: 'An iPhone on the add legacy contact screen and another on the family checklist screen',
          path: '/apple',
          role: 'Product Design Intern, iCloud',
          timeline: 'May - Sep 2022',
          category: ['all', 'design', 'work']
        },
        {
          id: 1,
          projectTitle: 'South Side Weekly',
          year: '2021',
          description: 'Centralizing story management and collaboration between 250+ admin and contributors at a Chicago newspaper nonprofit.',
          coverType: 'image',
          coverSrc: ssw,
          imgAlt: 'Desktop contributor and admin dashboards showcasing pitches a contributor can work on and a story that admin can assign contributors to',
          path: '/south-side-weekly',
          role: 'Product Designer',
          timeline: 'Sep 2021 - Jan 2022',
          category: ['all', 'design']
        },
        {
          id: 2,
          projectTitle: 'Amazon',
          year: '2023',
          description: 'Helping shoppers discover Buy with Prime on direct-to-consumer websites. Educational elements shipped on Shopify and live on merchant sites.',
          coverType: 'image',
          coverSrc: amazon,
          imgAlt: 'An iPhone on the home page of a kitchen appliance shopping website with a Buy with Prime banner that includes a Buy with Prime logo and text that says get fast, free shipping right here and look for the Prime logo and another iPhone on the catalog page with a Prime logo indicator on an eligible products',
          path: '/amazon',
          role: 'UX Design Intern, Buy with Prime',
          timeline: 'May - Aug 2023',
          category: ['all', 'design', 'work']
        }
      ]
    }
  }

  render() {

    return (
      <ParallaxProvider>
        <HashRouter>
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
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/grand-teton" exact render={() => <GrandTetonPage title={this.state.grandteton.title} />} />
            <Route path="/experiments" exact render={() => <ExperimentsPage />} />

            <Route path={this.state.workProjects[0].path} render={() => <ApplePage info={this.state.workProjects[0]} />} />

            <Route path={this.state.workProjects[1].path} render={() => <SSWPage info={this.state.workProjects[1]} />} />

            <Route path={this.state.workProjects[2].path} render={() => <AmazonPage info={this.state.workProjects[2]} />} />

            <Footer />

          </div>
        </HashRouter >
      </ParallaxProvider>
    );
  }
}

export default App;
