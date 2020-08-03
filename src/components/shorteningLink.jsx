import { firestore, auth } from "../components";

export const Short = async (long) => {
  const randomNumberId = Math.floor(Math.random() * Math.floor(1000000)) + "";
  const user = auth.currentUser;

  if (long === undefined) return alert("Та линк оруулна уу");

  if (user) return randomNumberId;

  return firestore
    .collection("links")
    .doc(randomNumberId)
    .get()
    .then((res) => {
      if (res.data() === undefined) {
        firestore.collection("links").doc(randomNumberId).set({ long });
        return randomNumberId
      } else {
        Short(long);
      }
    });
};