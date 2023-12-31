import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  Unsubscribe,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  query,
  getDoc,
  setDoc,
  getDocs,
  collection,
  writeBatch,
  Firestore,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/category/category.types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
enum firebaseConfig {
  apiKey = "AIzaSyCQHBosf1KzvX_dozKqDh6ksjkOjD27UkY",
  authDomain = "crwn-clothing-db-9ca74.firebaseapp.com",
  projectId = "crwn-clothing-db-9ca74",
  storageBucket = "crwn-clothing-db-9ca74.appspot.com",
  messagingSenderId = "638611838091",
  appId = "1:638611838091:web:36610c5baa1ab6a9fff08e",
  measurementId = "G-W8B1X78Y38",
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const provider: GoogleAuthProvider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db: Firestore = getFirestore();

/* export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionReference = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((objectToAdd) => {
    const docRef = doc(collectionReference, objectToAdd.title.toLowerCase())
    batch.set(docRef, objectToAdd);
  });

  await batch.commit();
  console.log('done');
}; */

type AdditionalInformations = {
  displayName?: string;
};

type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformations = {} as AdditionalInformations
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) {
    return;
  }
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toLocaleString();
    try {
      console.log(
        "setting up...",
        setDoc(userDocRef, {
          displayName,
          createdAt,
          email,
          ...additionalInformations,
        })
      );
      setDoc(userDocRef, {
        displayName,
        createdAt,
        email,
        ...additionalInformations,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (
  callback: NextOrObserver<User>
): Unsubscribe => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};
