import firebase from "./firebase";
import { Player } from "./GlobalInterfaces";
const app = firebase.app();
const firestore = firebase.firestore();

interface Team {
  name: string;
  players: Player[];
  teamId?: string;
}
export async function createTeam(data: Team) {
  await firestore
    .collection("teams")
    .add(data)
    .then((docRef) => {
      console.log("Added", docRef.id);
      const playerData = { ...data, teamId: docRef.id };
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
      teamId: data.teamId,
    });
  }

  console.log("Made it");
}

// export function submitOrder(data) {
//   return firestore.collection("orders").add(data);
// }
