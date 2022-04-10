import "./TeamPageRoute.css";

const TeamPageRoute = () => {
  // TODO: ADD IMAGES TO EACH TEAM MEMBER
  return (
    <section className="TeamPageRoute">
      <h2>Our Team Developers</h2>
      <ul>
        <li>
          <h3>Our project manger: Mia</h3>
          <p>
            Mia has contributed to the overall distribution of team work across
            out develops and been the SCUM master of the team.
          </p>
        </li>
        <li>
          <h3>Developer: Alex Sweezie</h3>
          <p>INSERT PARAGRAPHS</p>
        </li>
        <li>
          <h3>Developer: Tom Hudak</h3>
          <p>INSERT PARAGRAPHS</p>
        </li>
        <li>
          <h3>Developer: Gavin Szczesniak</h3>
          <p>
            Gavin has had a long background in programming starting around
            highscool. He used Python, C++, Java, C#, and JavaScript throughout
            his coding adventure.
          </p>
          <p>
            He mainly works the MERN stack using TypeScript to create responsive
            web applications. He practices using Frontend Mentor and creating
            personal projects.
          </p>
          <p>
            During his free time, Gavin plays with Mia and takes her on walks
            around the city. He spends time with his partner going to shop and
            watch movies.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default TeamPageRoute;
