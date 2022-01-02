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

import h4i from './assets/project/h4i/hack4impact.png';
import sswcover from './assets/project/h4i/sswcover.png';

import nour from './assets/project/nour/nour.png';
import nourcover from './assets/project/nour/nourcover.png';

import spotifycover from './assets/project/spotify/spotifycover.png';

import stat107ca from './assets/project/stat107ca/stat107ca.png';
import stat107cacover from './assets/project/stat107ca/stat107cacover.png';

import stat107final from './assets/project/stat107final/stat107final.png';
import stat107finalcover from './assets/project/stat107final/stat107finalcover.png';

import trill from './assets/project/trill/trill.png';
import trillcover from './assets/project/trill/trillcover.png';

import Footer from './components/Footer';
import ScrollArrow from './components/ScrollArrow';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeafPage from './pages/Projects/Work/LeafPage.js';
import NourPage from './pages/Projects/Work/NourPage.js';
import SSWPage from './pages/Projects/Work/SSWPage.js';
import CargillPage from './pages/Projects/Work/CargillPage.js';
import TrillPage from './pages/Projects/Work/TrillPage.js';
import CAPage from './pages/Projects/Work/CAPage.js';
import DasPage from './pages/Projects/Work/DasPage.js';
import StatFinalPage from './pages/Projects/Work/StatFinalPage.js';
import PhotographyPage from './pages/PhotographyPage';

import SpotifyPage from './pages/Projects/Work/SpotifyPage.js';

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
      spotify: {
        projectTitle: 'Hello Spotify team!',
        description: '🤓 I\'m Bryan and here\'s why I want to come intern at Spotify this summer...',
        cover: spotifycover,
        path: '/spotify'
      },
      workProjects: [
        {
          id: 0,
          projectTitle: 'South Side Weekly — Nonprofit Project',
          description: 'Web dashboard increasing visibility on upcoming newspaper issues and improving the story assignment experience for contributors and admin at South Side Weekly.',
          roles: 'Product Design',
          type: 'Fall 2021 Nonprofit Project',
          imgSrc: h4i,
          cover: sswcover,
          path: '/hack4impact-southsideweekly',
          timeline: 'September 2021 - Present',
          location: 'Champaign, IL',
          category: ['all', 'design', 'work']
        },
        {
          id: 1,
          projectTitle: 'Nour — 1st Place at HackDuke Designathon',
          description: 'Connecting the elderly in a time of social distancing.',
          roles: 'Product Design',
          type: 'Designathon Project',
          imgSrc: nour,
          cover: nourcover,
          path: '/duke-ideate-designathon',
          teamMembers: '3 Designers, 1 Product Marketer',
          timeline: '24 hours',
          location: 'Remote',
          category: ['all', 'design']
        },
        {
          id: 2,
          projectTitle: 'Cargill — UX Design Internship (NDA)',
          description: 'Web dashboard to hold and track new menu item ideas for a leading fast-food restaurant.',
          roles: 'Product Design',
          type: 'Summer 2021 Internship',
          imgSrc: cargill,
          cover: cargillcover,
          path: '/cargill-internship',
          teamMembers: '1 Design Intern, 3 Software Engineering Interns, 2 Product Coaches',
          timeline: 'May 2021 - Present',
          location: 'Remote',
          category: ['all', 'design', 'work']
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
          teamMembers: '2 Designers + Frontend Developers, 1 Backend Developer, 1 Financial Analyst',
          timeline: '2 days',
          location: 'Remote',
          category: ['all', 'design', 'code']
        },
        {
          id: 4,
          projectTitle: 'Trill Project — Design Internship',
          description: 'Social media platform that aims to be a safe and inclusive space, enabling people to freely and anonymously express themselves.',
          roles: 'UI Design, Web Design',
          type: 'Spring 2021 Internship',
          imgSrc: trill,
          cover: trillcover,
          path: '/trillproject-internship',
          timeline: 'February 2021 - May 2021',
          location: 'Remote',
          category: ['all', 'design', 'work']
        },
        {
          id: 5,
          projectTitle: 'Data Science Discovery — Course Assistant',
          description: 'Providing resources and support for 132 students taking STAT 107 Data Science Discovery.',
          roles: 'Data Science',
          type: 'Teaching',
          imgSrc: stat107ca,
          cover: stat107cacover,
          path: '/data-science-course-assistant',
          category: ['all', 'ds', 'work']
        },
        {
          id: 6,
          projectTitle: 'Data Science Discovery Hypothesis Tests — Final Project',
          description: 'Conducting hypothesis tests on a dataset of flights for the STAT 107 final project.',
          roles: 'Data Science',
          type: 'Class Project',
          imgSrc: stat107final,
          cover: stat107finalcover,
          path: '/data-science-discovery-final-project',
          category: ['all', 'ds', 'code']
        },
        {
          id: 7,
          projectTitle: 'Daily Awareness Society — Passion Project',
          description: 'Blog dedicated to spreading awareness on social issues.',
          roles: 'Frontend Development, UI Design, Content Creation',
          type: 'Passion Project',
          imgSrc: das,
          cover: dascover,
          path: '/daily-awareness-society',
          teamMembers: '4 team members',
          timeline: 'September 2019 - January 2021',
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
            <Navbar.Brand><Link className="nav-link header-title default" to="/">Bryan Ge</Link></Navbar.Brand>
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

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} description={this.state.home.description} projects={this.state.workProjects}/>} />
          {/* <Route path="/for-fun" exact render={() => <PlayPage title={this.state.play.title} subTitle={this.state.play.subTitle} projects={this.state.playProjects} />} /> */}
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/photography" exact render={() => <PhotographyPage title={this.state.photography.title} subTitle={this.state.photography.subTitle} />} />

          <Route path="/spotify" exact render={() => <SpotifyPage info={this.state.spotify} />} />
          {/* <Route path='/spotify' component={() => {
            window.location.href = 'https://bryange.notion.site/Why-Spotify-8a51071b106b4098a4232d7c182fab8a';
            return null;
          }} /> */}

          <Route path={this.state.workProjects[0].path} render={() => <SSWPage info={this.state.workProjects[0]} />} />

          <Route path={this.state.workProjects[1].path} render={() => <NourPage info={this.state.workProjects[1]} />} />

          <Route path={this.state.workProjects[2].path} render={() => <CargillPage info={this.state.workProjects[2]} />} />

          <Route path={this.state.workProjects[3].path} render={() => <LeafPage info={this.state.workProjects[3]} />} />

          <Route path={this.state.workProjects[4].path} render={() => <TrillPage info={this.state.workProjects[4]} />} />

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
