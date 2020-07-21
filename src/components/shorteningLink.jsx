import { firestore } from "../components";

export const Short = async (long) => {
  const randomNumberId = Math.floor(Math.random() * Math.floor(1000000)) + "";

  if (long === undefined) return alert("Та линк оруулна уу");

  return firestore
    .collection("links")
    .doc(randomNumberId)
    .get()
    .then((res) => {
      if (res.data() === undefined) {
        firestore.collection("links").doc(randomNumberId).set({ long: long });
        return randomNumberId
      } else {
        Short(long);
      }
    });
};
