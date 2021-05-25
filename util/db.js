import firebase from "./firebase";

const app = firebase.app();
const firestore = firebase.firestore();

export async function createTeam(data) {
  await firestore
    .collection("teams")
    .add({
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  console.log("Made it");
}

export function submitOrder(data) {
  return firestore.collection("orders").add(data);
}
