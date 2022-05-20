import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import cargill from './assets/project/cargill/cargill.png';
import cargillcover from './assets/project/cargill/cargillcover.png';

import das from './assets/project/das/das.png';
import dascover from './assets/project/das/dascover.png';

import leaf from './assets/project/leaf/leaf.png';
import leafproject from './assets/project/leaf/leafproject.png';

import brink from './assets/project/brink/brink.png';
import brinkcover from './assets/project/brink/brinkcover.png';

import ssw from './assets/project/ssw/ssw.png';
import sswcover from './assets/project/ssw/sswcover.png';

import nour from './assets/project/nour/nour.png';
import nourcover from './assets/project/nour/nourcover.png';

import spotifycover from './assets/project/spotify/spotifycover.png';

import stat107ca from './assets/project/stat107ca/stat107ca.png';
import stat107cacover from './assets/project/stat107ca/stat107cacover.png';

import stat107final from './assets/project/stat107final/stat107final.png';
import stat107finalcover from './assets/project/stat107final/stat107finalcover.png';

import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotographyPage from './pages/PhotographyPage';

// projects
import BrinkPage from './pages/Projects/BrinkPage.js';
import SSWPage from './pages/Projects/SSWPage.js';
import NourPage from './pages/Projects/NourPage.js';
import CargillPage from './pages/Projects/CargillPage.js';
import LeafPage from './pages/Projects/LeafPage.js';
import CAPage from './pages/Projects/CAPage.js';
import StatFinalPage from './pages/Projects/StatFinalPage.js';
import DasPage from './pages/Projects/DasPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Bryan Ge",
      home: {
        title: 'I\'m a product designer + developer with a love for baking and social good!',
      },
      // play: {
      //   title: '🤓 For Fun',
      //   subTitle: 'Here are some of my smaller personal projects.'
      // },
      about: {
      },
      // resume: {
      //   title: '📎 Check out my experiences.'
      // },
      photography: {
      },
      spotify: {
        projectTitle: 'Hello Spotify team!',
        description: '🤓 I\'m Bryan and here\'s why I want to come intern at Spotify this summer...',
        cover: spotifycover,
        path: '/spotify'
      },
      workProjects: [
        {
          id: 0,
          projectTitle: '🗳 Brink Election Voting Guide',
          description: 'Democratizing voting through a responsive and accessible election guide.',
          roles: 'Product Design • Spring 2022 Nonprofit Project • Hack4Impact',
          imgSrc: brink,
          cover: brinkcover,
          path: '/brink',
          timeline: 'September 2021 - Present',
          category: ['all', 'design', 'work']
        },
        {
          id: 1,
          projectTitle: '📰 South Side Weekly Contributor Dashboard',
          description: 'Centralizing news story management and increasing visibility on publication issues for over 250 admin and contributors at Chicago newspaper nonprofit, South Side Weekly.',
          roles: 'Product Design • Fall 2021 Nonprofit Project • Hack4Impact',
          imgSrc: ssw,
          cover: sswcover,
          path: '/southsideweekly',
          category: ['all', 'design', 'work']
        },
        {
          id: 2,
          projectTitle: '🤙 Nour Social Platform',
          description: 'Connecting the elderly in a time of social distancing.',
          roles: 'Product Design • Designathon • 1st Place at HackDuke Ideate 2021',
          imgSrc: nour,
          cover: nourcover,
          path: '/nour',
          category: ['all', 'design']
        },
        {
          id: 3,
          projectTitle: '🥧 Menu Item Idea Dashboard',
          description: 'Tracking new menu item ideas for a leading fast-food restaurant.',
          roles: 'Product Design • Summer 2021 Internship • Cargill',
          imgSrc: cargill,
          cover: cargillcover,
          path: '/cargill',
          category: ['all', 'design', 'work']
        },
        {
          id: 4,
          projectTitle: '🌿 Leaf Educational App',
          description: 'Educating the future generation to learn about their carbon footprint.',
          roles: 'Design Engineer • Hackathon • Winner of 2020 UChicago Hackathon',
          imgSrc: leaf,
          cover: leafproject,
          path: '/leaf',
          category: ['all', 'design', 'code']
        },
        {
          id: 5,
          projectTitle: '👨🏻‍🏫 STAT 107 Data Science Discovery',
          description: 'Providing support and resources for 132 students through office hours and discussion labs.',
          roles: 'Data Science • Spring 2021 Course Assistant • UIUC',
          imgSrc: stat107ca,
          cover: stat107cacover,
          path: '/stat107ca',
          category: ['all', 'ds', 'work']
        },
        {
          id: 6,
          projectTitle: '🤔 Hypothesis Tests Final Project',
          description: 'Conducting hypothesis tests on a dataset of flights for the STAT 107 Data Science Discovery final project.',
          roles: 'Data Science • Class Project • UIUC',
          imgSrc: stat107final,
          cover: stat107finalcover,
          path: '/stat107-project',
          category: ['all', 'ds', 'code']
        },
        {
          id: 7,
          projectTitle: '📝 Daily Awareness Society Blog',
          description: 'Spreading awareness on social issues.',
          roles: 'Design Engineer • Passion Project',
          imgSrc: das,
          cover: dascover,
          path: '/das',
          category: ['all', 'code']
        }
      ]
    }
  }

  render() {

    return (
      <Router>
        <Container className="p=0 my-font end-to-end" fluid={true} style={{ minHeight: "100vh" }}>
          <Navbar className="top-bar fixed" expand="lg">
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
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />

          {/* <Route path="/spotify" exact render={() => <SpotifyPage info={this.state.spotify} />} /> */}

          <Route path={this.state.workProjects[0].path} render={() => <BrinkPage info={this.state.workProjects[0]} />} />

          <Route path={this.state.workProjects[1].path} render={() => <SSWPage info={this.state.workProjects[1]} />} />

          <Route path={this.state.workProjects[2].path} render={() => <NourPage info={this.state.workProjects[2]} />} />

          <Route path={this.state.workProjects[3].path} render={() => <CargillPage info={this.state.workProjects[3]} />} />

          <Route path={this.state.workProjects[4].path} render={() => <LeafPage info={this.state.workProjects[4]} />} />

          <Route path={this.state.workProjects[5].path} render={() => <CAPage info={this.state.workProjects[5]} />} />

          <Route path={this.state.workProjects[6].path} render={() => <StatFinalPage info={this.state.workProjects[6]} />} />

          <Route path={this.state.workProjects[7].path} render={() => <DasPage info={this.state.workProjects[7]} />} />

          <ScrollArrow />
          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
