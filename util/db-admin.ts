import { db } from "./firebase-admin";

export async function getTeams() {
  try {
    const snapshot = await db.collection("teams").get();
    snapshot.forEach((snap) => {
      console.log(snap.data());
    });
    return snapshot;
  } catch (err) {
    return err;
  }
}

export async function addTeam() {
  try {
    db.collection("teams").add({
      captain: false,
      discord: "Test#0001",
      league: "TESTNA1",
    });
  } catch (err) {
    console.log(err);
  }
}
