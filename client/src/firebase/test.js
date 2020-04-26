import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
    .collection('users')
    .doc('bjqnDQmx2AMKyMeIDUWq')
    .collection('cartItems')
    .doc('eKZ3D05DhpQcOp1Y7OKd');

firestore.doc('/users/bjqnDQmx2AMKyMeIDUWq/cartItems/eKZ3D05DhpQcOp1Y7OKd');
firestore.collection('/users/bjqnDQmx2AMKyMeIDUWq/cartItems');
