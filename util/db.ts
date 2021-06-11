import firebase from "./firebase";
import { Player, Team } from "./GlobalInterfaces";
const app = firebase.app();
const firestore = firebase.firestore();

export function createUser(uid: string, data: any) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true }); // we add the user id and all the data to their profile
}

export async function createTeam(data: Team) {
  await firestore
    .collection("teams")
    .add(data)
    .then((docRef) => {
      console.log("Added", docRef.id);
      const playerData = { ...data, id: docRef.id };
      createPlayersWithTeam(playerData);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  console.log("Made it");
}
export async function createPlayersWithTeam(data: Team) {
  for (var i = 0; i < data.players.length; i++) {
    await firestore.collection("players").add({
      ...data.players[i],
      teamName: data.name,
      teamId: data.id,
    });
  }

  console.log("Made it");
}
export function updateTeam(data: Team) {
  return firestore.collection("teams").doc(data.id).update(data);
}

export async function deleteTeam(id: string) {
  try {
    console.log("delete", id);
    await firestore.collection("teams").doc(id).delete();
  } catch (err) {
    return err;
  }
}

// export function submitOrder(data) {
//   return firestore.collection("orders").add(data);
// }
