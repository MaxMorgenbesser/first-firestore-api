import { dbConnect } from "./dbConnect.js";

export function getAllCars(req,res){

    // connect to db
    const db = dbConnect()
     // get all docs from cars collection
    db.collection('cars').get()
    .then(collection=>{
        //reshape collection to array
        const cars = collection.docs.map(doc => doc.data())
        res.send(cars)
    //send array to response
    })
    .catch(err => res.status(500).send(err))


   
}

 
