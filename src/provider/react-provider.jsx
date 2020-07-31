import React, { createContext, useState, useEffect } from "react";
import { auth, firestore, app } from "../components";
import { useHistory } from "react-router-dom";
import { authState } from 'rxfire/auth';
import { filter } from 'rxjs/operators';

export const context = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const [links, setLinks] = useState({
    long: "",
    short: "",
  });
  const history = useHistory();

  useEffect(() => {
    authState(app.auth())
      .pipe(
        filter(u => u !== null)
      ).subscribe(user => {
        var uid = user.uid;
        firestore
          .collection("users")
          .doc(uid)
          .onSnapshot((data) => {
            setUser({
              name: data.data().name,
              history: data.data().history,
              uid
            });
          })
      });
  }, []);

  const logIn = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/"))
      .catch((error) => {
        var errorCode = error.code.split("/")[1];
        if (errorCode === "invalid-email") alert("Email хаягаа зөв бич нүү !!!");
        else if (errorCode === "user-not-found") alert("Бүртгэлтэй бус Email байна !!!");
        else if (errorCode === "wrong-password") alert("Нууц үг буруу байна !!!");
      });
  };

  const createUser = ({ email, password, rePassword }) => {
    if (password !== rePassword)
      alert("Нууц үг таарсангүй шалгаад дахин оролдоно уу !!!");
    else
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((cal) => {
          firestore.collection("users")
            .doc(cal.user.uid)
            .set({
              name: email.split("@")[0],
              history: [],
            });
          history.push("/");
        })
        .catch(function (error) {
          var errorCode = error.code.split("/")[1];
          if (errorCode === "invalid-email") alert("Email хаягаа зөв бич нүү !!!");
          else if (errorCode === "email-already-in-use") alert("Email бүртгэлтэй байна !!!");
          else if (errorCode === "weak-password") alert("Нууц үг энгийн байна !!!");
        });

  };

  const logOut = () => {
    setUser(undefined);
    auth.signOut().then(() => history.push("/"));
  };

  const getLongLink = (id) => {
    firestore
      .collection("links")
      .doc(id)
      .get()
      .then((res) => {
        const toLink = res.data().long;
        const separateLink = toLink.split("//")[0];

        if (separateLink === "http:" || separateLink === "https:") window.location.replace(toLink);
        else window.location.replace("https://" + toLink);
      })
      .catch(() => window.location.href = "/");
  };

  const addHistory = (long, domain, random) => {
    authState(app.auth())
      .pipe(
        filter(u => u !== null)
      ).subscribe(user => {
        var uid = user.uid;
        firestore
          .collection(`users/${uid}/history`)
          .doc(random)
          .set({
            long,
            short: domain + random
          })
      });
  };

  const resetPassword = (email) => {
    auth.sendPasswordResetEmail(email).then(function () {
      alert('New password sent to your email')
    }).catch(function (error) {
      console.log(error)
    });
  }

  return (
    <context.Provider
      value={{
        logIn,
        createUser,
        user,
        logOut,
        links,
        setLinks,
        domain: "https://nest-boginoo.web.app/",
        getLongLink,
        addHistory,
        resetPassword
      }}
    >
      {children}
    </context.Provider>
  );
};
