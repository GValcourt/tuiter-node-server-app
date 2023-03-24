import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
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
    console.log(tuitdIdToDelete) //why is not deleting like it should; is the id wrong?
    tuits = tuits.filter((t) =>
      t._id !== tuitdIdToDelete);
    console.log(tuits)
    res.sendStatus(200);
}


export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
