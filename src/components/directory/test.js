import firebase from 'firebase/app';
import 'firebase/firebase';

const firestore = firebase.firestore();

firestore.collection('users').doc('3VEfm8CGcyfAAzc49cW2').collection('cardItems').doc('VbmzdmZDaD2M3hxg8vPr');
firestore.doc('/users/3VEfm8CGcyfAAzc49cW2/cardItems/VbmzdmZDaD2M3hxg8vPr');
firebase.collection('/users/3VEfm8CGcyfAAzc49cW2/cardItems');