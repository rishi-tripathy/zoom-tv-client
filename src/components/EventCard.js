import React from 'react';
import { RRule, rrulestr } from 'rrule'
import '../css/eventcard.scss';
import axios from "axios"
import MaterialIcon, {colorPalette} from 'material-icons-react';

class EventCard extends React.Component {
  constructor(props) {
    // Initialize mutable state
    super(props);
    const currentTime = new Date();
    this.state = {
      tagsOutput: (this.props.tags.length > 0) ? this.props.tags.join(", ") : "None",
      isCurrent: this.props.time[0] < currentTime && currentTime < this.props.time[1],
    };
    this.fetchICS = this.fetchICS.bind(this)
  }

  fetchICS(id) {
    const FileDownload = require('js-file-download');
    axios.get('https://zoom-tv-guide.wl.r.appspot.com/download_ics/' + this.props.id).then(res => {
      FileDownload(res.data, this.props.summary + '.ics');
    })
      .catch(function (error) {
        alert('Export was not successful.');
      });
  }

    componentDidMount() {

    }

  render() {
    // console.log(this.props.tags)
    if (this.props.recurrence) {
      console.log(rrulestr(this.props.recurrence[0]).toText())
    }
    return (
      <div className="event-card">
        <div className="card-header-container">
          <div className="card-header">{this.props.summary}</div>
          <div className="tooltip"><MaterialIcon icon="flag" size={20}/>
            <span className="tooltiptext">Report</span>
          </div>
        </div>
        <div className="card-subheader">{this.props.creator}</div>
        <div className="spacer"></div>
        <div>{this.props.description}</div>
        <div className="spacer"></div>
        <div className="card-subheader">TIME</div>
        <div>{this.props.time[0].toLocaleString().replace(/(.*)\D\d+/, '$1').replace('/2020', '')} - {this.props.time[1].toLocaleString().replace(/(.*)\D\d+/, '$1').replace('/2020', '')}</div>
        {this.props.recurrence && <div> {rrulestr(this.props.recurrence[0]).toText()}</div>}
        <div className="spacer"></div>
        <div className="card-subheader">TAGS</div>
        <div>
          {this.state.tagsOutput}
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        {!this.state.isCurrent &&
        <a><button onClick={ () => this.fetchICS(this.props.id)}>Add Event</button></a>}
        {this.state.isCurrent && <a href={this.props.zoom}>
          <button className="zoom-blue">Join Now &nbsp;&nbsp;<span>▶</span></button>
        </a>}
      </div>
    );
  }
}

        export default EventCard;