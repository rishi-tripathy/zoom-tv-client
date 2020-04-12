import React from 'react';
import NavBar from './NavBar.js'
import EventCard from './EventCard.js'
import axios from "axios"
import '../css/App.scss';
import '../css/fonts.scss'

class EventsPage extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios.get('https://zoom-tv-guide.wl.r.appspot.com/events')
      .then((response) => {
        console.log(response.data.events)
        // handle success
        this.setState({
          events: response.data.events
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
  render() {
    return (
      <div className="top">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <h1>Search</h1>
        <div className="spacer"></div>
        <input type="search" placeholder="🔍 Search..."/>
        <div className="spacer"></div>
                <div className="spacer"></div>
        <div className="filter-container">
          <div>
            <h1>Host</h1>
            <div className="spacer"></div>
            <input type="search" placeholder="All"/>
          </div>
          <div>
            <h1>Tag</h1>
            <div className="spacer"></div>
            <input type="search" placeholder="All"/>
          </div>
          <div>
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
          {this.state.events.map(event => (
            <EventCard
              summary={event.summary} 
              creator={event.creator} 
              description={event.description} 
              time={[event.start, event.end]}
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
