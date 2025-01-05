import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection,
  doc, 
  getDocs,
  getDoc,
  query,
  where, 
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRg6rx1OLdg2Doy50bIyOTMDKsqGF_eSQ",
  authDomain: "reactsonnydelvalle.firebaseapp.com",
  projectId: "reactsonnydelvalle",
  storageBucket: "reactsonnydelvalle.appspot.com",
  messagingSenderId: "294546684797",
  appId: "1:294546684797:web:9b1cec11c02c7bf754aa14"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProduct() {
  try {
    const collectionRef = collection(db, "Product");
    const results = await getDocs(collectionRef);
    return results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

export async function getUnProduct(idParams) {
  try {
    const docRef = doc(db, "Product", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    }
    throw new Error("Product not found");
  } catch (error) {
    console.error("Error fetching product: ", error);
  }
}

export async function getProductByCategory(idCategoryParams) {
  try {
    const collectionRef = collection(db, "Product");
    const queryCat = query(
      collectionRef,
      where("category", "==", idCategoryParams)
    );
    const results = await getDocs(queryCat);
    return results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching products by category: ", error);
  }
}

export async function createBuyOrder(orderData) {
  try {
    const collectionRef = collection(db, "Pedidos");
    const response = await addDoc(collectionRef, orderData);
    return response.id;
  } catch (error) {
    console.error("Error creating buy order: ", error);
  }
}

export async function DataToFirebase() {
  const data = [
    {
      title: "Set completo",
      src: "/static/media/Agility.98636abb4f151cfeb510.jpg",
      precio: 100,
      detail: "Equipo de habilidad",
      stock: 10,
      category: "futbol",
    },
    {
      title: "Correctores",
      src: "/static/media/disparo.fd4df4b78756b4b6dba6.jpg",
      precio: 60,
      detail: "Correa y pelota",
      stock: 100,
      category: "basket",
    },
    {
      title: "Set de precision",
      src: "/static/media/Rebound.5de9a3263a449b4ddfb3.jpg",
      precio: 85,
      detail: "Panel de pases",
      stock: 20,
      category: "futbol",
    },
    {
      title: "Corrector de tiro",
      src: "/static/media/correa.307bfe62b129131d64b2.jpg",
      precio: 100,
      detail: "Correa para disparos y mejora efectividad",
      stock: 50,
      category: "basket",
    },
    {
      title: "Set de pases",
      src: "/static/media/pase.8c73989d79f56c6dff57.jpg",
      precio: 150,
      detail: "Mejora los pases por varios angulos",
      stock: 20,
      category: "basket",
    },
    {
      title: "Dominio de balon",
      src: "/static/media/Kick.6a8b977c0e28eef9d0d8.jpg",
      precio: 50,
      detail: "Control de balon tanto de derecha como izquierda",
      stock: 15,
      category: "futbol",
    },
  ];

  try {
    const itemsCollectionRef = collection(db, "Product");
    for (let product of data) {
      const { id, ...productData } = product;
      const newDoc = await addDoc(itemsCollectionRef, productData);
      console.log("Documento creado:", newDoc.id);
    }
  } catch (error) {
    console.error("Error uploading data to Firebase: ", error);
  }
}

export default FirebaseApp;
