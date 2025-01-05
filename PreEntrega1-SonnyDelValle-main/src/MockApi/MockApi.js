const data = [
   {
     id: 1,
     title: "Set completo",
     src: "/static/media/Agility.98636abb4f151cfeb510.jpg",
     precio: 100,
     detail: "Equipo de habilidad",
     stock: 10,
     category: "futbol",
   },
   {
     id: 2,
     title: "Correctores",
     src: "/static/media/disparo.fd4df4b78756b4b6dba6.jpg",
     precio: 60,
     detail: "Correa y pelota",
     stock: 100,
     category: "basket",
   },
   {
     id: 3,
     title: "Set de precision",
     src: "/static/media/Rebound.5de9a3263a449b4ddfb3.jpg",
     precio: 85,
     detail: "Panel de pases",
     stock: 20,
     category: "futbol",
   },
   {
     id: 4,
     title: "Corrector de tiro",
     src: "/static/media/correa.307bfe62b129131d64b2.jpg",
     precio: 100,
     detail: "Correa para disparos y mejora efectividad",
     stock: 50,
     category: "basket",
   },
   {
     id: 5,
     title: "Set de pases",
     src: "/static/media/pase.8c73989d79f56c6dff57.jpg",
     precio: 150,
     detail: "Mejora los pases por varios ángulos",
     stock: 20,
     category: "basket",
   },
   {
     id: 6,
     title: "Dominio de balón",
     src: "/static/media/Kick.6a8b977c0e28eef9d0d8.jpg",
     precio: 50,
     detail: "Control de balón tanto de derecha como izquierda",
     stock: 15,
     category: "futbol",
   },
 ];
 
 export function getProduct() {
   return new Promise((resolve) => {
     setTimeout(() => resolve(data), 2000); // Simula un retraso de 2 segundos
   });
 }
 
 export function getUnProduct(idParams) {
   return new Promise((resolve, reject) => {
     const productReq = data.find((item) => item.id === Number(idParams));
     setTimeout(() => {
       if (productReq) {
         resolve(productReq);
       } else {
         reject(new Error("No se pudo encontrar el producto"));
       }
     }, 2000); // Simula un retraso de 2 segundos
   });
 }
 
 export function getProductByCategory(idCategoryParams) {
   return new Promise((resolve) => {
     const filteredProducts = data.filter(
       (item) => item.category === idCategoryParams
     );
     setTimeout(() => resolve(filteredProducts), 1000); // Simula un retraso de 1 segundo
   });
 }
 