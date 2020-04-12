import React from 'react';
import '../css/eventcard.scss';

class EventCard extends React.Component {
    constructor(props) {
      // Initialize mutable state
      super(props);
      const currentTime = new Date();
      this.state = {
        tagsOutput: this.props.tags.join(", "),
        isCurrent: this.props.time[0] < currentTime && currentTime < this.props.time[1],
      };
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props.tags)
        return ( <
          div className = "event-card" >
          <
          div className = "card-header" > {
            this.props.summary
          } < /div> <
          div className = "card-subheader" > {
            this.props.creator
          } < /div> <
          div className = "spacer" > < /div> <
          div > {
            this.props.description
          } < /div> <
          div className = "spacer" > < /div> <
          div className = "card-subheader" > TIME < /div> <
          div > {
            this.props.time[0].toLocaleString().replace(/(.*)\D\d+/, '$1').replace('/2020', '')
          } - {
            this.props.time[1].toLocaleString().replace(/(.*)\D\d+/, '$1').replace('/2020', '')
          }
          {this.props.isRecurring && < p > Is Recurring < /p>}
          < /div> <
          div className = "spacer" > < /div> <
          div className = "card-subheader" > TAGS < /div> <
          div > {
            this.state.tagsOutput
          } <
          /div> <
          div className = "spacer" > < /div> {
            !this.state.isCurrent && < button > Add Event < /button>} {
              this.state.isCurrent && < button class = "zoom-blue" > Join Now < /button>} <
                /div>
            );
          }
        }

        export default EventCard;