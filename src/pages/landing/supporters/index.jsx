import React from "react";
import "./styles.css";
import sponsors from "../../../config/data/sponsors";
import organizerLogo from "../../../assets/logos/organizers/upe_named_white.svg";

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
          <h1 className="landing-section-title">🐳 Host</h1>
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
            Upsilon Pi Epsilon (UPE) is the largest student organization for technology at 
            Florida International University (FIU).
            Our mission is to provide students with opportunities to develop technically 
            and professionally through events like ShellHacks. We welcome students of all academic 
            backgrounds and skill levels who are interested in technology.
          </p>
        </div>

        {/* <div className="organizers-container">
          <h1 className="landing-section-title">Cohost</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover hacky-comlumn-reverse-mobile"
            href="http://upe.cs.fiu.edu"
          >
            {" "}
            <img
              className="organizer-logo"
              alt="Microsoft Logo"
              src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74"
            />
          </a>
          <p className="landing-section-paragraph">
            "
            <a
              className="links"
              rel="noopener noreferrer"
              target="_blank"
              href="http://link.com"
            >
              CoHost Name
            </a>{" "}
            Cohost Details
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover hacky-comlumn-reverse-web"
            href="http://upe.cs.fiu.edu"
          >
            {" "}
            <img
              className="organizer-logo"
              alt="CoHost Logo"
              src="http://link"
            />
          </a>
        </div> */}
        <br/><br/><br/><br/>
        <h1 className="landing-section-title">🤝 Sponsors</h1>
        <center><h2 className="upcoming-waves">Wave 1</h2></center>
        <br/>
        <br/>
        <br/>
        <div className="sponsor-logo-container">
          {sponsors.map((company, i) =>
            company.tier === "temp" ? <Logo key={i} {...company} /> : <></>
          )}

          {sponsors.map((company, i) =>
            company.tier === "sponsor" ? <Logo key={i} {...company} /> : <></>
          )}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <center><h2 className="upcoming-waves">Shore bet theres more! 😉</h2></center>

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
