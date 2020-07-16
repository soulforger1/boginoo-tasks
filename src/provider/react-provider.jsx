import React, { createContext, useState } from 'react'
import { auth, firestore } from '../components'
import { useHistory } from "react-router-dom";

export const context = createContext();

export const Provider = ({ children }) => {
    const [user, setUser] = useState();
    const [links, setLinks] = useState({
        long: '',
        short: ''
    })
    const history = useHistory();
    
    const logIn = ({ email, password }) => {
        auth
            .signInWithEmailAndPassword(email, password).then(() => history.push('/'))
            .catch((error) => {
                var errorCode = (error.code).split('/')[1];
                if (errorCode === 'invalid-email')
                    alert('Email хаягаа зөв бич нүү !!!')
                else if (errorCode === 'user-not-found')
                    alert('Бүртгэлтэй бус Email байна !!!')
                else if (errorCode === 'wrong-password')
                    alert('Нууц үг буруу байна !!!')

            });
    }
    const createUser = ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            alert('Нууц үг таарсангүй шалгаад дахин оролдоно уу !!!')
        } else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((cal) => {
                    firestore.collection('users').doc(cal.user.uid).set({
                        name: email.split('@')[0],
                        history: []
                    })
                    history.push('/')
                })
                .catch(function (error) {
                    var errorCode = (error.code).split('/')[1];
                    if (errorCode === 'invalid-email')
                        alert('Email хаягаа зөв бич нүү !!!')
                    else if (errorCode === 'email-already-in-use')
                        alert('Email бүртгэлтэй байна !!!')
                    else if (errorCode === 'weak-password')
                        alert('Нууц үг энгийн байна !!!')
                });

        }
    }

    const logOut = () => {
        setUser(undefined)
        auth.signOut().then(() => history.push("/"))
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            firestore
                .collection("users")
                .doc(uid)
                .get()
                .then((data) => {
                    setUser(data.data())
                });
        }
    })

    const getLongLink = (id) => {
        firestore
            .collection('links')
            .doc(id)
            .get()
            .then((res) => {
                window.location.replace(res.data().long);
            })
            .catch((error) => {
                window.location.href = '/'
            })
    }
    return (
        <context.Provider value={{ logIn, createUser, user, logOut, links, setLinks, domain: 'https://nest-boginoo.web.app/' , getLongLink}}>
            {children}
        </context.Provider>
    )
}