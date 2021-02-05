import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './_landing-page.scss';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    //handle states
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }
  render() {
    // Handles show/hide for displayResults
    const displayResults = this.state.fadeIn ? (
      <div>Results will be displayed here</div>
    ) : null;

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a sample page.</p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary" onClick={this.toggle}>
              Learn More
            </Button>
          </p>
          {displayResults}
        </Jumbotron>
      </div>
    );
  }

  // async funstion to change the state of fadeIn
  async toggle() {
    await this.setState({
      fadeIn: !this.state.fadeIn,
    });
  }
}
