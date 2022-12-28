const functions = require('firebase-functions');

const admin = require('firebase-admin');

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const express = require('express');
const cors = require('cors');
const { response } = require('express');
const app = express();

app.use(cors({ origin: true }));
const db = admin.firestore();
// Routes
app.get('/', (req, res) => {
    return res.status(200).send('Hai there');
});

// create

// Sign In
//SignIn__Post
app.post('/api/signin', (req, res) => {
    (async () => {
        try {
            await db
                .collection('userinfo')
                .doc(`/${Date.now()}/`)
                .create({
                    id: Date.now(),
                    data: {
                        email: req.body.email,
                        password: req.body.password,
                        userId: req.body.email,
                    },
                });

            return res
                .status(200)
                .send({ status: 'Success', msg: 'Data Saved' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

// Get Data User
const getdataId = app.get('/api/signin/:id', (req, res) => {
    (async () => {
        try {
            const reqDoc = db.collection('signin').doc(req.params.id);
            let userDetail = await reqDoc.get();
            let response = userDetail.data();

            return res.status(200).send({ status: 'Success', data: response });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

//Products
app.post('/api/products', (req, res) => {
    (async () => {
        try {
            await db
                .collection('products')
                .doc(`/${Date.now()}/`)
                .create({
                    id: Date.now(),
                    cart: {
                        salad: req.body.salad,
                        bacon: req.body.bacon,
                        cheese: req.body.cheese,
                        meat: req.body.meat,
                        price: req.body.price,
                    },
                });
            return res
                .status(200)
                .send({ status: 'Success', msg: 'Data Saved' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

//Products Get Data
app.get('/api/products', (req, res) => {
    (async () => {
        try {
            let query = db.collection('products');
            let response = [];
            const ress = await query.get().then((data) => {
                let docs = data.docs; // query results
                docs.map((doc) => {
                    const { ...rest } = doc.data().cart;
                    const selectedData = {
                        cart: {
                            ...rest,
                        },
                    };
                    response.push(selectedData);
                });
                return response;
            });
            return res.status(200).json({ status: 'Success', data: response });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

// read specific user detail
// get

// read all user details
app.get('/api/userdetails', (req, res) => {
    (async () => {
        try {
            let query = db.collection('userDetails');
            let response = [];

            await query.get().then((data) => {
                let docs = data.docs; // query results

                docs.map((doc) => {
                    const selectedData = {
                        name: doc.data().name,
                        mobile: doc.data().mobile,
                        address: doc.data().address,
                    };

                    response.push(selectedData);
                });
                return response;
            });

            return res.status(200).send({ status: 'Success', data: response });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});
// get
// app.get('/api/products/:id', (req, res) => {
//     (async () => {
//         try {
//             let query = db.collection('products');
//             let response = [];

//             await query.get().then((data) => {
//                 let docs = data.docs; // query results

//                 docs.map((doc) => {
//                     const selectedData = {
//                         name: doc.data().name,
//                         mobile: doc.data().mobile,
//                         address: doc.data().address,
//                     };

//                     response.push(selectedData);
//                 });
//                 return response;
//             });

//             return res.status(200).send({ status: 'Success', data: response });
//         } catch (error) {
//             console.log(error);
//             res.status(500).send({ status: 'Failed', msg: error });
//         }
//     })();
// });

// update
// put
app.put('/api/update/:id', (req, res) => {
    (async () => {
        try {
            const reqDoc = db.collection('userdetails').doc(req.params.id);
            await reqDoc.update({
                name: req.body.name,
                mobile: req.body.mobile,
                address: req.body.address,
            });
            return res
                .status(200)
                .send({ status: 'Success', msg: 'Data Updated' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

// delete
// delete
app.delete('/api/delete/:id', (req, res) => {
    (async () => {
        try {
            const reqDoc = db.collection('userdetails').doc(req.params.id);
            await reqDoc.delete();
            return res
                .status(200)
                .send({ status: 'Success', msg: 'Data Removed' });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: 'Failed', msg: error });
        }
    })();
});

// Exports api to the firebase cloud functions
exports.app = functions.https.onRequest(app);
