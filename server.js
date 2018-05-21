const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const DoggieRouter = require('./routes/dogs')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/dogs', DoggieRouter);


app.get('/', (req, res) => {
  res.json({message: 'You are on the Home Page'});
});

app.get('*', (req, res) => {
  res.status(404).json({message: '404 Resource Not Found'});
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
