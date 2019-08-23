import React from "react";
import "./styles.css";
import sponsors from "../../../config/data/sponsors";
import organizerLogo from "../../../assets/logos/organizers/upe_named_white.svg";
import cohostLogo from "../../../assets/logos/sponsors/JPMC.svg";

const Supporters = () => {
  let Logo = ({ logo, url, name, tier }) => {
    let logoClass;
    switch (tier) {
      case "sponsor":
        logoClass = "sponsor-img";
        break;
      case "partner":
        logoClass = "partner-img";
        break;
      case "temp":
        logoClass = "temp-img";
        break;
      default:
        logoClass = "";
    }
    return (
      <a
        className={logoClass}
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        <img
          style={{ width: "100%" }}
          className={`${tier}-img `}
          alt={name}
          src={require(`../../../assets/logos/sponsors/${logo}`)}
        />
      </a>
    );
  };

  return (
    <section name="sponsors">
      <div className="sponsors-container">
        <div className="organizers-container">
          <h1 className="landing-section-title">🐳 Organized By</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover"
            href="http://upe.cs.fiu.edu"
          >
            <img
              className="organizer-logo"
              alt="UPE Logo"
              src={organizerLogo}
            />
          </a>
          <p className="landing-section-paragraph">
            Upsilon Pi Epsilon (UPE) is the largest student organization for
            technology at Florida International University (FIU). Our mission is
            to provide students with opportunities to develop technically and
            professionally through events like ShellHacks. We welcome students
            of all academic backgrounds and skill levels who are interested in
            technology.
          </p>
        </div>

        <div className="organizers-container">
          <h1 className="landing-section-title" style={{ margin: "50px 0 0" }}>
            🐬 Co-Hosted By
          </h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover"
            href="https://www.jpmorganchase.com"
          >
            {" "}
            <img
              className="organizer-logo"
              alt="JPMC Logo"
              src={cohostLogo}
              style={{ margin: 0 }}
            />
          </a>
          <p className="landing-section-paragraph">
            JPMorgan Chase & Co. is a leading global financial services firm
            with assets of $2.5 trillion and operations worldwide. With 50,000
            technologists and a $10+ billion investment, technology drives every
            aspect of their business. Their teams build innovative solutions
            that impact millions of customers and businesses worldwide.
          </p>
        </div>
        <br />
        <br />
        <h1 className="landing-section-title">🐠 Sponsors</h1>
        <center>
          {/* <h2 className="upcoming-waves">Wave 3</h2> */}
        </center>
        <br />
        <br />
        <br />
        <div className="sponsor-logo-container">
          {sponsors.map((company, i) =>
            company.tier === "temp" ? <Logo key={i} {...company} /> : <></>
          )}
          {sponsors.map((company, i) =>
            company.tier === "sponsor" ? <Logo key={i} {...company} /> : <></>
          )}
        </div>
        <br />
        <br />
        <br />
        <center>
          <h2 className="upcoming-waves">More sponsors coming soon! 😉</h2>
        </center>

        {/* <h1 className="landing-section-title">Partners</h1>
        <div className="sponsor-logo-container">
          {sponsors.map((company, i) =>
            company.tier === "partner" ? <Logo key={i} {...company} /> : <></>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default Supporters;
