import { useEffect, useState } from 'react';
import { firestore } from '../components/'

export const useFireStoreDoc = (user) => {
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        if (user)
            firestore.doc(`users/${user.uid}`).onSnapshot((res) => setDoc(res.data()))
    }, [user])

    const updateDoc = (data) => {
        if (user) {
            firestore.doc(`users/${user.uid}`).set(({
                ...data
            }), { merge: true })
        }
    }

    const deleteDoc = () => {
        if (user) {
            firestore.doc(`users/${user.uid}`).delete();
        }
    }
    return { doc, updateDoc, deleteDoc }
}

export const useFireStoreCol = (user) => {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        if (user) {
            firestore.collection(`users/${user.uid}/history`).onSnapshot((res) => {
                const array = (res.docs).map((cur) => {
                    return cur.data();
                })
                setCollection(array);
            })
        }
    }, [user])
    return { collection }
}