const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})
app.get('/about', (req, res) => {
  res.render('about')
})

// Add a catch-all route for 404 errors
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(3000)
