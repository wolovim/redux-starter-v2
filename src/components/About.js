import React from 'react';

import '../assets/css/About.css';


const About = () => {
  return (
    <div>
      <p><b>Setup is a pain. Hopefully this helps!</b></p>

      <p>
        This is an overhaul of another <a href="https://github.com/marcgarreau/redux-starter">redux-starter</a> app.<br />
        The decisions made that first time around are documented in this {' '}
        <a href="https://quickleft.com/blog/redux-in-plain-english-building-boilerplate/">blog post</a>.
      </p>

      <p>
        <b>Now, <code><a href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">
        create-react-app</a></code> is the foundation.</b>
      </p>

      <p><b>Additional Features in this starter app:</b></p>
      <div className="app-features-wrapper">
        <ul className="app-features">
          <li>Redux</li>
          <li>An example Redux workflow</li>
          <li>Routing (react-router / react-router-redux)</li>
          <li>Testing (mocha / expect / enzyme)</li>
          <li>Redux DevTools</li>
        </ul>
      </div>

      <p>
        People you can blame for things you don't like:{' '}
        <a href='https://twitter.com/omgwtfmarc'>@omgwtfmarc</a>.
      </p>
    </div>
  );
}

export default About;
