import React from 'react';
import Fuse from "fuse.js";
import EventCard from './EventCard.js'
import axios from "axios"
import '../css/App.scss';
import '../css/fonts.scss'

class EventsPage extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = { search: '', events: [], searchedEvents: [] };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.persist()
    this.setState({search: event.target.value, searchedEvents: []}, () => {
      const options = {
        keys: ['summary', 'creator', 'description', 'tags']
      }
      
      const fuse = new Fuse(this.state.events, options)
      
      const results = fuse.search(event.target.value)
      results.forEach((result) => {
        this.setState({ searchedEvents: [...this.state.searchedEvents, result.item] })
      })
    });
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
        this.setState({
          events: response.data.events
        })
      })
      .catch((error) => {
        // handle error
      })
  }
  
  render() {
    return (
      <div className="top">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="filter-container">
          <div className="search-container">
            <h1>Search</h1>
            <div className="spacer"></div>
            <input type="search" placeholder="🔍 Search for event, tag, host, etc..." value={this.state.search} onChange={this.handleSearch} />
          </div>
          <div className="date-container">
            <h1>Date</h1>
            <div className="spacer"></div>
            <input type="search" placeholder="4/11/2020"/>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="cards">
          { this.state.searchedEvents.length === 0 && this.state.events.map(event => (
            <EventCard
              id={event.id}
              summary={event.summary} 
              creator={event.creator} 
              description={event.description} 
              time={[new Date(event.start), new Date(event.end)]}
              tags={event.tags}
              zoom={event.zoom}
            />
          ))}
          { this.state.searchedEvents.length !== 0 && this.state.searchedEvents.map(event => (
            <EventCard
              summary={event.summary} 
              creator={event.creator} 
              description={event.description} 
              time={[new Date(event.start), new Date(event.end)]}
              tags={event.tags}
            />
          ))}
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default EventsPage;
