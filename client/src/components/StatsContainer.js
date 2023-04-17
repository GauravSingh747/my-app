import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: "Ongoing works",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#FEFF86",
    },
    {
      title: "completed task",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#7AA874",
      bcg: "#C7E9B0",
    },
    {
      title: "works remaings",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ED2B2A",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
