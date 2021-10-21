import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import cargill from './assets/project/cargill/cargill.png';
import cargillcover from './assets/project/cargill/cargillcover.png';
import leaf from './assets/project/leaf/leaf.png';
import leafproject from './assets/project/leaf/leafproject.png';

import h4i from './assets/project/h4i/hack4impact.png';

import nour from './assets/project/nour/nour.png';
import nourcover from './assets/project/nour/nourcover.png';

import bglogo from './assets/other/BGlogo.svg';

import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeafPage from './pages/Projects/Work/LeafPage.js';
import NourPage from './pages/Projects/Work/NourPage.js';
import TrillPage from './pages/Projects/Work/TrillPage.js';
import CargillPage from './pages/Projects/Work/CargillPage.js';
import PhotographyPage from './pages/PhotographyPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge",
      home: {
        title: 'Product designer + developer with a love for baking and social good!',
      },
      play: {
        title: '🤓 For Fun',
        subTitle: 'Here are some of my smaller personal projects.'
      },
      about: {
      },
      resume: {
        title: '📎 Check out my experiences.'
      },
      photography: {
      },
      workProjects: [
        {
          id: 0,
          projectTitle: 'Nour — 1st at HackDuke Designathon',
          description: 'Social platform connecting the elderly.',
          roles: 'Product Design',
          type: 'Designathon Project',
          imgSrc: nour,
          cover: nourcover,
          path: '/duke-ideate-designathon',
          teamMembers: '3 Designers, 1 Product Marketer',
          timeline: '24 hours',
          location: 'Remote'
        },
        {
          id: 1,
          projectTitle: 'Hack4Impact — Nonprofit Project',
          description: 'Web portal for news nonprofit contributors, staff, and admin to manage stories to be published.',
          roles: 'Product Design',
          type: 'Fall 2021 Nonprofit Project',
          imgSrc: h4i,
          path: '/hack4impact',
          timeline: 'September 2021 - Present',
          location: 'Champaign, IL'
        },
        {
          id: 2,
          projectTitle: 'Cargill — UX Design Internship (NDA)',
          description: 'Dashboard to hold new menu item ideas for a leading fast-food restaurant.',
          roles: 'Product Design',
          type: 'Summer 2021 Internship',
          imgSrc: cargill,
          cover: cargillcover,
          path: '/cargill-internship',
          teamMembers: '1 Design Intern, 3 Software Engineering Interns, 2 Product Coaches',
          timeline: 'May 2021 - Present',
          location: 'Remote'
        },
        {
          id: 3,
          projectTitle: 'Leaf — Winner of UChicago Hackathon',
          description: 'Educational web app for the future generation to learn about their carbon footprint.',
          roles: 'UI Design, Frontend Development',
          type: 'Hackathon Project',
          imgSrc: leaf,
          cover: leafproject,
          path: '/uchicago-hackathon',
          teamMembers: '2 Product Designers + Frontend Developers, 1 Backend Developer, 1 Financial Analyst',
          timeline: '2 days',
          location: 'Remote'
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <Container className="p=0 my-font end-to-end" fluid={true} style={{ minHeight: "100vh" }}>
          <Navbar className="top-bar fixed" expand="lg">
            <Navbar.Brand><Link className="nav-link default" to="/"><img src={bglogo} className="header-logo" alt="Bryan Ge Logo" /></Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link default" to="/">Work</Link>
                {/* <Link className="nav-link default" to="/for-fun">For Fun</Link> */}
                <Link className="nav-link default" to="/about">About</Link>
                <a className="nav-link default" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1e-ACTyMqLo_neKqfUbgBYhQwGw_DjD7e/view?usp=sharing">
                  Resume
                </a>
                <Link className="nav-link default" to="/photography">Photography</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects} />} />
          {/* <Route path="/for-fun" exact render={() => <PlayPage title={this.state.play.title} subTitle={this.state.play.subTitle} projects={this.state.playProjects} />} /> */}
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />

          <Route path='/spotify' component={() => {
            window.location.href = 'https://bryange.notion.site/Why-Spotify-8a51071b106b4098a4232d7c182fab8a';
            return null;
          }} />

          <Route path={this.state.workProjects[0].path} render={() => <NourPage info={this.state.workProjects[0]} />} />
          <Route path={this.state.workProjects[1].path} component={() => {
            window.location.href = 'https://bryange.notion.site/Hack4Impact-Nonprofit-Project-ee09fc33c0124c209fea070f817364b1';
            return null;
          }} />
          <Route path={this.state.workProjects[2].path} render={() => <CargillPage info={this.state.workProjects[2]} />} />
          <Route path={this.state.workProjects[3].path} render={() => <LeafPage info={this.state.workProjects[3]} />} />

          <ScrollArrow />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
