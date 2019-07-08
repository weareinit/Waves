import React, { Component } from "react";
import { Button } from "../../../components";
import schedules from "../../../config/data/schedule";
import "./styles.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: 1
    };
    this.changeDataSource = this.changeDataSource.bind(this);
  }

  changeDataSource = i => {
    this.setState({ dataSource: i });
  };

  render() {
    let ScheduleItem = ({ time, description }, id) => (
      <div className="schedule-section-event" key={id}>
        <p className=" schedule-section-event-title">{time}</p>
        <p className="schedule-section-event-description">{description}</p>
      </div>
    );

    const { friday, saturday, sunday, defaultData } = schedules;
    let data = friday;

    switch (this.state.dataSource) {
      case 1:
        data = friday;
        break;
      case 2:
        data = saturday;
        break;
      case 3:
        data = sunday;
        break;
      default:
        data = defaultData;
        break;
    }

    return (
      <section name="schedule">
        <div className="schedule-container">
          <h1 className="landing-section-title">Tentative Schedule</h1>
          {/* Desktop button switch */}
          <div className="schedule-button-container">
            <Button
              title="Friday, Sept 20"
              action={this.changeDataSource}
              id={1}
              extraStyles="landing-button-wrapper"
            />
            <Button
              title="Saturday, Sept 20"
              action={this.changeDataSource}
              id={2}
              extraStyles="landing-button-wrapper"
            />
            <Button
              title="Sunday, Sept 20"
              action={this.changeDataSource}
              id={3}
              extraStyles="landing-button-wrapper"
            />
          </div>
          {/* Mobile button switch */}
          <div className="schedule-button-container-mobile">
            <Button
              title="Sept 20"
              action={this.changeDataSource}
              id={1}
              extraStyles="landing-button-wrapper"
            />
            <Button
              title="Sept 22"
              action={this.changeDataSource}
              id={2}
              extraStyles="landing-button-wrapper"
            />
            <Button
              title="Sept 23"
              action={this.changeDataSource}
              id={3}
              extraStyles="landing-button-wrapper"
            />
          </div>

          {data.map((item, id) => ScheduleItem(item, id))}
        </div>
      </section>
    );
  }
}

export default Schedule;
