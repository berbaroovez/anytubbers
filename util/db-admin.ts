import { db } from "./firebase-admin";

export async function getTeams() {
  try {
    const snapshot = await db.collection("teams").get();

    const orders: any[] = [];
    snapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    return orders;
  } catch (err) {
    return err;
  }
}

export async function getTeam(id: string) {
  try {
    const snapshot = await db.collection("teams").doc(id).get();
    const team = {
      id: snapshot.id,
      ...snapshot.data(),
    };

    return team;
  } catch (err) {
    return err;
  }
}
