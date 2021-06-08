import { DashboardSkeleton } from "../../components/DashboardSkeleton";
import TeamCreator from "../../components/TeamCreator";
import TeamList from "../../components/TeamList";
const AddTeams = () => {
  return (
    <DashboardSkeleton>
      <TeamCreator />
    </DashboardSkeleton>
  );
};

export default AddTeams;
