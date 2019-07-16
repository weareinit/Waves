import React, { Component } from "react";
import "./styles.css";
import { Player } from "video-react";
import {
  faUser,
  faLaptopCode,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Footer,
  ZoomableImg,
  AnimatedWaves,
  ScrollMenu,
} from "../../components";
import Card from "./card";

class Sponsor extends Component {
  WhyCard = ({ title, description, icon }, id) => (
    <div className="why-cards" key={id}>
      <span>
        <FontAwesomeIcon icon={icon} />
      </span>
      <h3> {title} </h3> <p> {description} </p>
    </div>
  );

  StatItem = ({ title, stat, chart }, id) => (
    <div key={id} className="sponsor-stats-item">
      <img alt="stats" className="stats-img" src={chart} />
      <div>
        <h3> {title} </h3>
        {stat.map(statItem => (
          <p>
            {statItem} <br />
          </p>
        ))}
      </div>
    </div>
  );

  render() {
    let images = [
      "https://66.media.tumblr.com/8d3e7364417a8f7e0abc04a223857b12/tumblr_otox3fKZ9Y1s05s0mo9_250.png",
      "https://66.media.tumblr.com/8d3e7364417a8f7e0abc04a223857b12/tumblr_otox3fKZ9Y1s05s0mo9_250.png",
      "https://66.media.tumblr.com/8d3e7364417a8f7e0abc04a223857b12/tumblr_otox3fKZ9Y1s05s0mo9_250.png",
    ];
    let stats = [
      {
        title: "Diversity",
        stat: ["0.2% people", "50% shells", "100% ahh you"],
        chart:
          "http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Pie-Chart-PNG-Image-500x500.png",
      },
      {
        title: "Really Know Js",
        stat: ["0.00001% people", "100% shell", "1 turtle"],
        chart:
          "https://www.stickpng.com/assets/images/5a5cbf7a9538462e5a82d543.png",
      },
      {
        title: "Tther title",
        stat: ["90% world", "100% hello"],
        chart:
          "https://www.stickpng.com/assets/images/5a5cbfb19538462e5a82d547.png",
      },
      {
        title: "Tther title",
        stat: ["90% world", "100% hello"],
        chart:
          "https://www.stickpng.com/assets/images/5a5cbfb19538462e5a82d547.png",
      },
    ];

    let why = [
      {
        title: "Talent",
        description: `
            ShellHacks is the
            perfect opportunity for
            you to recruit talented
            students, raise brand
            awareness, and test `,
        icon: faLaptopCode,
      },
      {
        title: "Awareness",
        description: `
            ShellHacks is the
            perfect opportunity for
            you to recruit talented
            students, raise brand
            awareness, and test `,
        icon: faStore,
      },
      {
        title: "Awareness",
        description: `
            ShellHacks is the
            perfect opportunity for
            you to recruit talented
            students, raise brand
            awareness, and test `,
        icon: faUser,
      },
    ];

    let sponsorLogo = [
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
      {
        img:
          "https://cdn.windowsreport.com/wp-content/uploads/2017/12/Microsoft-Office-Live-Meeting.png",
        url:
          "https://www.google.com/search?q=microsoft&rlz=1C1CHBF_enUS854US854&source=lnms&tbm=isch&sa=X&ved=0ahUKEwidysGz4PriAhXizVkKHa4NDLUQ_AUIEigD&biw=1279&bih=650#imgrc=gVc4Up6UwivkuM:",
      },
    ];

    return (
      <div className="sponsor-page-container">
        {/* main section*/}
        <ScrollMenu>
          <section name="main">
            <AnimatedWaves>
              {/* <div className="sponsor-page-section"> */}
              <div className="main-container">
                <h1 id="main-message"> {"MAKE A SPLASH AT SHELLHACKS"}</h1>
                <p>{"Florida's Largest Hackathon"}</p>
              </div>
              {/* </div> */}
            </AnimatedWaves>
          </section>

          {/*About ShellHacks*/}
          <div style={{ background: "var(--shell-gradient)" }}>
            <section name="about us">
              <div className="what-section">
                <h1> What is ShellHacks ? </h1>
                <p className="landing-section-paragraph">
                  ShellHacks is an upcoming 36 - hour hackathon at Florida
                  International University(FIU), taking place the weekend of
                  Friday, September 29 to Sunday, October 1 st. <br /> <br />{" "}
                  Our mission is to provide students with the opportunity to
                  learn about new technologies, create innovative projects, and
                  share their work with the community!
                </p>
              </div>
            </section>
            <section name="why us">
              {/*About ShellHacks*/}
              <div className="why-cards-container">
                <h1> Why ShellHacks ? </h1>
                {why.map((item, i) => (
                  <this.WhyCard {...item} id={i} />
                ))}
              </div>
            </section>
            <section name="statistics">
              {/*Statictics*/}
              <div className="sponsor-stats">
                <h1> Statistics </h1>
                {stats.map((item, i) => {
                  let p = i % 2;
                  return <this.StatItem {...item} id={i} position={p} />;
                })}
              </div>
            </section>
            <section name="sponsors">
              {/*Past Sponsors*/}
              <div className="sponsors-partners ">
                <h1>Previous Sponsors and Partners</h1>
                <div className="sponsor-card-scroll-container ss-content">
                  {sponsorLogo.map(item => (
                    <Card {...item} />
                  ))}
                </div>
              </div>
            </section>
            <section name="media">
              {/*Media*/}
              <div className="media-container">
                <h1> Media </h1>
                <Player
                  playsInline
                  poster="https://d14z5zgripclfw.cloudfront.net/account119-i107/video/19/thumb720p_sintel-2048-stereo-1536752469.png"
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
                {images.map(item => (
                  <div className="past-images">
                    <ZoomableImg imageLink={item} />
                  </div>
                ))}
              </div>
            </section>
            <div id="closing-message" name="contact">
              <p
                style={{
                  textAlign: "center",
                }}
              >
                Interested in working with us? shoot us an email at{" "}
                <a
                  className="landing-section-paragraph"
                  href="mailto:upe@fiu.edu"
                >
                  upe@ﬁu.edu
                </a>
              </p>
            </div>
            <Footer />
          </div>
        </ScrollMenu>
      </div>
    );
  }
}

export default Sponsor;
