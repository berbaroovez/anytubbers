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
