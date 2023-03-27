import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const _id = parseInt((new Date()).getTime()+'');
    const newTuit = {_id, ...req.body}
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    tuits.push(newTuit);
    //console.log(tuits);
    res.json(newTuit);
    //console.log(newTuit);
}

const findTuits = (req, res) =>
   res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = parseInt(req.params.tid);
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = parseInt(req.params.tid);
    //console.log(typeof tuitdIdToDelete) //Required to debug why the tuit wasn't deleting;
    //it was getting the tid as a string but the JSON stored _id as an int
    //console.log(tuitdIdToDelete); //why is not deleting like it should; is the id wrong?
    tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    //console.log(tuits.filter((t) => t._id === tuitdIdToDelete)); //perhaps looking at the inverse will shed some light
    //okay, so it only deletes tuits that are stored in the tuits "database" (ie the JSON)
    res.sendStatus(200);
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
