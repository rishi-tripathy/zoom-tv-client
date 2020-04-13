import React from 'react';
import Fuse from "fuse.js";
import EventCard from './EventCard.js'
import axios from "axios"
import ReactGA from "react-ga"
import '../css/App.scss';
import '../css/fonts.scss'

class EventsPage extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = {search: '', events: [], searchedEvents: [], isLoading: true};
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.persist()
    this.setState({search: event.target.value, searchedEvents: []}, () => {
      const options = {
        threshold: .3,
        keys: ['summary', 'creator', 'description', 'tags', 'recurrence']
      }
      const fuse = new Fuse(this.state.events, options)
      let results = fuse.search(event.target.value)
      results = results.sort((a, b) => (a.refIndex - b.refIndex))
      const list = [...this.state.searchedEvents]
      results.forEach((result) => {
        list.push(result.item)
      })

      this.setState({searchedEvents: list})
    });
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
        <div className="spacer"></div>
        <h1>Events</h1>
        <div className="spacer"></div>
        <div>The new channel surfing of the internet! zoomTV helps you share and find great Zoom events, meetings, and get-togethers.</div>
        <div className="spacer"></div>
        <div>To add your event to this page just invite our friendly service bot to your calendar event: <a href="mailto:zoom-tv-guide@appspot.gserviceaccount.com" className="text-link">zoom-tv-guide@appspot.gserviceaccount.com</a></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="filter-container">
          <div className="search-container">
            <h1>Search</h1>
            <div className="spacer"></div>
            <input type="search" placeholder="🔍 Search for event, host, description, tag, etc..."
                   value={this.state.search} onChange={this.handleSearch}/>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="cards">
          {this.state.search.length === 0 && this.state.events.map(event => (
            <EventCard
              id={event.id}
              summary={event.summary}
              creator={event.creator}
              description={event.description}
              time={[event.start, event.end]}
              tags={event.tags}
              zoom={event.zoom}
              recurrence={event.recurrence}
            />
          ))}
          {this.state.search.length !== 0 && this.state.searchedEvents.length === 0 && <h1 style={{color: '#AAA9A5'}} align={'left'}>No matches found. Please try another search!</h1>}
          {this.state.search.length !== 0 && this.state.searchedEvents.map(event => (
            <EventCard
              id={event.id}
              summary={event.summary}
              creator={event.creator}
              description={event.description}
              time={[event.start, event.end]}
              tags={event.tags}
              zoom={event.zoom}
              recurrence={event.recurrence}
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
