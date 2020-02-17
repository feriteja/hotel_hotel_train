import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shittle",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quae?"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon} </span>
              <h6>{item.title}</h6>
              <p>{item.info} </p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
