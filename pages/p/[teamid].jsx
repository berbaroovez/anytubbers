//check for teamid in url
//get team id and send to swr if the data returned is undefined show eror
import { useRouter } from 'next/router'
import useSWR from "swr"
import fetcher from "../../util/fetcher"
import EditTeam from '../../components/EditTeam';
import { DashboardSkeleton } from '../../components/DashboardSkeleton';

export default function showTeam(){
  const router = useRouter()
  const { teamid } = router.query

    const {data} = useSWR([`/api/${teamid}`], fetcher)
    return (<DashboardSkeleton>
      {data?
      <EditTeam TeamInfo={data}/>:
      "Loading"}
    </DashboardSkeleton>)
}