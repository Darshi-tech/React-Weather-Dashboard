class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "home" //home by default
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      target: e.target.value
    });
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={this.handleClick} value="home">
                home
              </button>
            </li>
            <li>
              <button onClick={this.handleClick} value="about">
                about
              </button>
            </li>
            <li>
              <button onClick={this.handleClick} value="contact">
                contact
              </button>
            </li>
          </ul>
        </nav>
        <main>
          {this.state.target === "home" && <Home />}
          {this.state.target === "about" && <About />}
          {this.state.target === "contact" && <Contact />}
        </main>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pulvinar turpis quis mi pretium pellentesque. In luctus, leo sit amet
          egestas sagittis, ipsum mauris lobortis orci.
        </p>
      </div>
    );
  }
}
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          Id consectetur urna misao eu justo. In hac habitasse platea dictumst.
          Maecenas non convallis nunc. Cras maximus, nulla in feugiat
          condimentum, neque metus varius arcu.
        </p>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>
          Oyid eleifend turpis elit sed est. Donec facilisis justo elit, in
          consectetur nulla pretium vitae.
        </p>
      </div>
    );
  }
}

React.render(<Test />, document.getElementById("app"));
