// Stap 1 | Importeren van de bestanden 

// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// De link naar de data definieren
const apiUrl = 'https://redpers.nl/wp-json/wp/v2'
const apiPosts = apiUrl + '/posts'
const apiUsers = apiUrl + '/users'
const apiCategories = apiUrl + '/categories'

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// De map 'public' staat voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// Stap 3 | Het maken van routes van de server

app.get('/', function (request, response) {
    fetchJson(apiPosts).then((apiData) => {
        response.render('home', {
            articles: apiData
        })
    })
})


app.get('/artikel/:id', function (request, response) {
  fetchJson(apiPosts + '?include= +' + request.params.id).then((apiData) => {

      response.render('article', {
          article: apiData
      })
      console.log(apiData)
    })
  })



const categoryRoutes = [
    'binnenland',
    'buitenland',
    'column',
    'economie',
    'kunst & media',
    'podcast',
    'politiek',
    'wetenschap'
  ]
  
  categoryRoutes.forEach(category => {
    app.get("/" + category, function (request, response) {
        fetchJson(apiCategories).then(([mediaAPI, postsAPI]) => {
        response.render(categoryRoutes, { media: mediaAPI, posts: postsAPI });
      });
    });
  })

// Stap 5 | Een route geven aan de server om te draaien

app.set('port', process.env.PORT || 8081)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})