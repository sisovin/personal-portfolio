import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <section>
        <h1>About Me</h1>
        <p>
          Hello! I'm a passionate developer with experience in building web
          applications using modern technologies. I love creating beautiful and
          functional user interfaces and solving complex problems.
        </p>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Company A</strong> - Frontend Developer (2020 - Present)
            <p>
              Worked on various projects, developing responsive and interactive
              web applications using React, TypeScript, and Tailwind CSS.
            </p>
          </li>
          <li>
            <strong>Company B</strong> - Full Stack Developer (2018 - 2020)
            <p>
              Developed and maintained web applications using Node.js, Express,
              and MongoDB. Implemented RESTful APIs and integrated third-party
              services.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>HTML / CSS / Tailwind CSS</li>
          <li>Git / GitHub</li>
          <li>RESTful APIs</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
