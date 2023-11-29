// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    getDocs,
    onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdpxdMFoWNURT0f_KQZ6IpB59ttcpRQrI",
    authDomain: "mealplanner-cafa8.firebaseapp.com",
    projectId: "mealplanner-cafa8",
    storageBucket: "mealplanner-cafa8.appspot.com",
    messagingSenderId: "782876439148",
    appId: "1:782876439148:web:c8c2184fd187ff4c09de49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getMeals(db) {
    const mealsCol = collection(db, "meals")
    const mealSnapshot = await getDocs(mealsCol);
    const mealList = mealSnapshot.docs.map((doc) => doc);
    return mealList;
}

const unsub = onSnapshot(collection(db, "meals"), (doc) => {
//    console.log(doc.docChanges());
doc.docChanges().forEach((change) => {
//    console.log(change, change.doc.data(), change.doc.id);
        if (change.type === "added") {
        //call render function in UI
        renderMeal(change.doc.data(), change.doc.id);
        }
        if (change.type === "removed") {
        renderMeal(change.doc.data(), change.doc.id);
        }
    });
});









//console.log(getMeals(db));
/*getMeals(db).then((docs) => {
    docs.forEach((data) => {
        console.log(data);
    });
});*/