import { db } from "./firebase-admin";
import { Team } from "./GlobalInterfaces";

export async function getTeams() {
  try {
    const snapshot = await db.collection("teams").orderBy("name").get();

    const teams: any[] = [];
    snapshot.forEach((doc) => {
      teams.push({ id: doc.id, ...doc.data() });
    });

    return teams;
  } catch (err) {
    return err;
  }
}

export async function getTeam(id: string) {
  try {
    const snapshot = await db.collection("teams").doc(id).get();
    if (snapshot.exists) {
      const team = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      return team;
    } else {
      return undefined;
    }
  } catch (err) {
    console.log("WRONG TEAM");
    return err;
  }
}
