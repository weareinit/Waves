import React from "react";

const liSpace = { marginBottom: "10px" };

const faqs = [
  {
    title: <>What is a hackathon?</>,
    description: (
      <>
        A hackathon is a weekend-long event where students come together to 
        learn about the latest technologies and build innovative products.
      </>
    )
  },
  {
    title: <>When and where is ShellHacks?</>,
    description: (
      <>
        ShellHacks is taking place from September 20th through the 22nd at 
        Florida International University's <a className="links"href="https://studentaffairs.fiu.edu/campus-services/graham-center/">Ernest R. Graham University Center</a>.
      </>
    )
  },
  {
    title: <>How long is it?</>,
    description: (
      <>
        ShellHacks is a 36-hour hackathon, beginning at 4pm on Friday and ending at 2pm on 
        Sunday. We encourage you to work on your project for as long as you can during this 
        time. Most students also bring sleeping gear to stay on site and get the most out of 
        the experience. You can also choose to go home to freshen up and come back!
      </>
    )
  },
  {
    title: <>Who can come?</>,
    description: (
      <>
        If you’re currently a college student or have graduated in the past year, 
        you're more than welcome to attend! Not a student? No problem! You can attend 
        as a mentor and help out our students!
      </>
    )
  },
  {
    title: <>How much experience do I need?</>,
    description: (
      <>
        None! We welcome students from all academic backgrounds and skill levels, 
        so don’t be afraid to come and join us! We’ll have introductory workshops 
        for you to learn new skills, industry mentors to help you out, and great tools 
        to build your projects. Whether you’ve never coded before or have lots of experience, 
        there’s a place for you at ShellHacks!
      </>
    )
  },
  {
    title: <>Do I need to have a group?</>,
    description: (
      <>
        Not at all! You can be a lone wolf, come with a pre-made team (no more than four people), 
        or join some teams at the event. We’ll also have team building activities to help you find the right teammates!
      </>
    )
  },
  {
    title: <>How much does it cost?</>,
    description: (
      <>
        Nothing! That’s right, ShellHacks is entirely free for 
        all attendees to participate. All you need to worry about is learning new skills, developing 
        cool projects, and having fun!
      </>
    )
  },
  {
    title: <>Will food be provided?</>,
    description: (
      <>
        Yes! All major meals and snacks will be provided to everyone attending ShellHacks. We'll also have coffee, 
        energy drinks, and even tea, for those sophisticated hackers out there!
        <br />
        <br />
        We’ll do our best to accommodate any dietary restrictions as well - just note them on your 
        registration form and we’ll make sure you get what you need.
      </>
    )
  },
  {
    title: <>Will there be travel reimbursement?</>,
    description: (
      <>
        We're currently working those details out! Check back later for updates.
      </>
    )
  },
  {
    title: <>How can I become a sponsor?</>,
    description: (
      <>
        If you'd like to sponsor, please send us an email at{" "}
        <a
          className="links"
          href="mailto:upe@fiu.edu?subject=Potential%20ShellHacks%20Sponsorship&body=Hello Shell Team,%0A%0A"
        >
          upe@fiu.edu{" "}
        </a>{" "}
        and our team will get back to you promptly.
      </>
    )
  }
];

export default faqs;
