const express = require("express")
const app =express()
const port=5000;
const cors = require('cors')
const db = require('./data-base/MySql/index')
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  db.queryAsync('SELECT * FROM movies')
    .then(results => {
      res.json(results); 
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching tasks.' });
    });
});
app.get('/actors', (req, res) => {
  db.queryAsync('SELECT * FROM favorite_actors')
    .then(results => {
      res.json(results); 
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching tasks.' });
    });
});

app.delete('/:id', async (req,res)=>{
  const id=req.params.id 
  try {
        const result = db.queryAsync(`DELETE FROM movies WHERE id = ?`, [id])
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Post not found.' });
        }
    
        res.json({ message: 'Post deleted successfully.' });
      }
      catch(error){
        console.log(error.message);
        res.status(500).json(error.message)}
})
app.delete('/actors/:id', async (req,res)=>{
  const id=req.params.id 
  try {
        const result = db.queryAsync(`DELETE FROM favorite_actors WHERE id = ?`, [id])
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Post not found.' });
        }
    
        res.json({ message: 'Post deleted successfully.' });
      }
      catch(error){
        console.log(error.message);
        res.status(500).json(error.message)}
})
app.get('/movie/:id', async (req,res)=>{
  const id=req.params.id
  try{
      const result= await db.queryAsync(`SELECT * FROM movies WHERE id=?`,[id])
      res.json(result)
  } catch (err){
    console.log(err.message)
    res.status(500).json({"error :":err.message})
  }
})
app.post('/', async (req,res)=>{
  const { name , imageUrl , description,rate } = req.body
  if(!name && imageUrl && description && rate){ 
    return res.status(400).json({ error: 'Task is required.' });
  }
  try{
    const result = await db.queryAsync('INSERT INTO movies (name, imageUrl,description, rate) VALUES (?, ? , ?, ?)', [name, imageUrl, description,rate]);
   
    res.json({message:"its added"})
  } catch (error){
    res.status(500).json({ error: 'An error occurred while creating the task.' })
  }
})
app.post('/actors', async (req,res)=>{
  const { name , note , image_path } = req.body
  if(!name && note && image_path ){ 
    return res.status(400).json({ error: 'Task is required.' });
  }
  try{
    const result = await db.queryAsync('INSERT INTO movies (name, note,image_path) VALUES (?, ? , ?)', [name, note, image_path]);
   
    res.json({message:"its added"})
  } catch (error){
    res.status(500).json({ error: 'An error occurred while creating the task.' })
  }
})

app.put('/:id', async (req, res) => {
  try {
    const { name , imageUrl , description , rate} = req.body;
    const { id } = req.params;
    const result= await db.queryAsync('UPDATE movies SET name = ?, imageUrl = ?, description = ? , rate = ? WHERE id = ?', [name,imageUrl ,description ,rate, id]);
    res.json({ message: ' updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating .' });
  }
});
app.put('/actors/:id', async (req, res) => {
  try {
    const { name , note , image_path } = req.body;
    const { id } = req.params;
    const result= await db.queryAsync('UPDATE movies SET name = ?, note = ?, image_path = ? WHERE id = ?', [name,note ,image_path , id]);
    res.json({ message: ' updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while updating .' });
  }
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
