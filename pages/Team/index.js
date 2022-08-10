import styles from "./Team.module.css";
import TeamList from "../../components/teamList";

const Team = () => {
  const teamData = ["Sangam Lamsal", "Lenovo", "Legion", "Foobar"];
  return (
    <div className="sectionbody">
      <div className="wrapper">
        <h1 className="pageHeader">Teams.</h1>

        <h3 className="header">Board Members</h3>
        <div className="wrapper">
          <TeamList teamData={teamData} />
        </div>
        <h3 className="header">All Members</h3>
        <div className="wrapper">
          <TeamList teamData={teamData} />
        </div>
      </div>
    </div>
  );
};

export default Team;
