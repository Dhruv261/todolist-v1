const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.set('view engine', 'ejs')


/*Other required variables*/
var items = []

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"))


app.get("/", (req, res) => {
  var today = new Date()

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  var day = (today.toLocaleDateString('en-IN', options));

  res.render('list', {
    kindOfday: day,
    newEntry: items
  })
})

app.post('/', (req, res)=>{
 var item = req.body.NewItems
  items.push(item)
 res.redirect('/')
})


app.listen(3000, () => {
  console.log(`Server started at 3000`)
})
