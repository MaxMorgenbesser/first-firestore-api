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

export function createCar(req,res){
    // get a new car from request body
    const newCar = req.body;
    // connect to database
    const db = dbConnect()
    // add car to cars collection
    db.collection('cars').add(newCar)
    .then(doc => {
        //const id = doc.get().id
        res.status(201).send({
            success:true,
            id: doc.id
        })
    })
    .catch(err => res.status(500).send(err))
    // send back new doc id
}

 
