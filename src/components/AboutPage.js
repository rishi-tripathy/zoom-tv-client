import React from 'react';
import '../css/AboutPage.scss'

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-hero">
        About
      </div>
      <div className="about-header">
        Adding an event
      </div>
      <div>
        Before you add an event, please note that events and Zoom links added to zoomTV are publicly listed! <br/>
        <br/>
        To add an event, simply invite the following email address to any calendar invitation with a Zoom meeting link in the location or description: <a href="mailto:zoom-tv-guide@appspot.gserviceaccount.com" className="text-link">zoom-tv-guide@appspot.gserviceaccount.com</a><br/>
        <br/>
        The email address that owns the calendar invite you invite the service with will be listed as well. <br/>
        <br/>
        To target different groups, you can add hashtags in the description of the calendar invite like #pioneer or #hack.
      </div>
      <div className="about-header">
        Finding Events
      </div>
      <div>
        You can search for specific types of events by keyword, host, or tag. <br/>
        <br/>
        If an event is currently ongoing, click 'join now' to hop into the Zoom! Note that the host has sole discretion over who they allow in their meeting. <br/>
        <br/>
        For future events, click 'add event' to add the event to your personal calendar so you don't miss it! <br/>
        <div className="about-header">
          Contact
        </div>
        <div>
          Please direct any questions to <a href="mailto:zoom.tv.guide@gmail.com"className="text-link">zoom.tv.guide@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
