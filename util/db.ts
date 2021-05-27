import firebase from "./firebase";
import { Player } from "./GlobalInterfaces";
const app = firebase.app();
const firestore = firebase.firestore();

interface Team {
  name: string;
  players: Player[];
}
export async function createTeam(data: Team) {
  await firestore
    .collection("teams")
    .add(data)
    .then((docRef) => {
      console.log("Added", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  console.log("Made it");
}

// export function submitOrder(data) {
//   return firestore.collection("orders").add(data);
// }
