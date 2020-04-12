import React from 'react';
import '../css/eventcard.scss';

class EventCard extends React.Component {
  render() {
    return (
      <div className="event-card">
        <div className="card-header">{this.props.summary}</div>
        <div className="card-subheader">{this.props.creator}</div>
        <div className="spacer"></div>
        <div>{this.props.description}</div>
        <div className="spacer"></div>
        <div className="card-subheader">TIME</div>
        <div>{this.props.time[0]} - {this.props.time[1]}</div>
        <div className="spacer"></div>
        <div className="card-subheader">TAGS</div>
        <div>{this.props.tags}</div>
        <div className="spacer"></div>
        <button>Add Event</button>
      </div>
    );
  }
}

export default EventCard;
