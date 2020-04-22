import React from "react";

import { Cards, Chart, CountrySelector, Navbar } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import covidImage from "./images/SARS-CoV-2.png";
import { AppBar } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          {/* <img className={styles.image} alt="covid19" src={covidImage} /> */}
          {/* <h1>
            C
            <span>
              <img className={styles.image} alt="covid19" src={covidImage} />
            </span>
            VID-19 Tracker
          </h1> */}
          <Cards data={data} />
          <CountrySelector handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
