import React from 'react';
import Fuse from "fuse.js";
import axios from "axios"
import '../css/App.scss';
import '../css/fonts.scss'

class AboutPage extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
  }

  componentDidMount() {
    // this.setState({
    //   events: [
    //     {
    //       id: "alkjdfal;kjf",
    //       summary: "Python Livestream",
    //       start: "2020-04-11T18:00:00-07:00",
    //       end: "2020-04-11T18:00:00-07:00",
    //       creator: "HarvardCS50",
    //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       tags: ['lecture', 'programming', 'learning'],
    //       zoom: 'asdaflkfdjaldfja'
    //     },
    //     {
    //       id: "alkjdfal;kjf",
    //       summary: "Event with Hashtags",
    //       start: "2020-04-11T18:00:00-07:00",
    //       end: "2020-04-11T18:00:00-07:00",
    //       creator: "rishiraj@gmail.com",
    //       description: "A cool event!",
    //       tags: ['cool', 'fun'],
    //       zoom: 'asdaflkfdjaldfja',
    //     },
    //   ]
    // })
    axios.get('https://zoom-tv-guide.wl.r.appspot.com/events')
      .then((response) => {
        // handle success
        const newEvents = response.data.events.map((event) => {
          event.start = new Date(event.start)
          event.end = new Date(event.end)
          return event
        })
        this.setState({
          events: newEvents,
          isLoading: false,
        })
      })
      .catch((error) => {
        // handle error
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="top">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
      )
    }
    return (
      <div className="top">
        <div className="spacer"></div>

        <div className="footer">
        </div>
      </div>
    );
  }
}

export default AboutPage;
