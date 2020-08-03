const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();

const db = admin.firestore();
const auth = admin.auth();

exports.helloWorld = functions.https.onRequest(async (request, response) => {
    // const db = admin.firestore();
    // db.collection('users').doc('RPSqMTBXX155zWDNRtgK').onSnapshot((res) => {
    //     response.send(res.data())
    // })

    const res = await auth.listUsers(1000).then((respond) => respond.users)
    // response.send(res.map((userRecord) => {
    //     return('user', userRecord.toJSON());
    // }));
    response.send(`Totals: ${res.length}`)
});

exports.firestore = functions.firestore
    .document('users/{user_id}/history/{history_id}')
    .onCreate((change, context) => {
        const data = change.data();
        const id = context.params.history_id;

        db.collection('links').doc(id).set({
            long: data.long
        })
    })