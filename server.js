require('dotenv').config()
const express = require('express')
const next = require('next')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var csrf = require('csurf')
var fetch = require('isomorphic-unfetch')
var Cookies = require('js-cookie');

// Setup CSRF Middleware
var csrfProtection = csrf({ cookie: true })
// var parseForm = bodyParser.urlencoded({ extended: false })

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    const middlewares = [
      bodyParser.urlencoded(),
      cookieParser('sesh-dash'),
      csrfProtection
    ]
    server.use(middlewares)

    server.get('/events/manage', (req, res) => {
      return app.render(req, res, '/events/manage', { slug: req.params.slug })
    })

    server.get('/events/create', (req, res) => {  
      return app.render(req, res, '/events/create', { slug: req.params.slug })
    })

    server.get('/events/:slug', (req, res) => {
      return app.render(req, res, '/events/profile', { slug: req.params.slug })
    })

    server.get('/dashboard/', (req, res) => {
      return app.render(req, res, '/dashboard')
    })

    // Callback for OAuth2 API
    server.get('/token', (req, res) => {
      const callback = {
        grant_type: 'authorization_code',
        client_id: process.env.API_CLIENT_ID,
        client_secret: process.env.API_CLIENT_SECRET,
        redirect_uri: process.env.API_REDIRECT_URI,
        code: req.query.code
      }

      // Query API for token
      fetch('http://localhost/oauth/token', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(callback)
      })
        .then(r => r.json())
        .then(data => {
          // Store JWT from response in cookies
          if (req.cookies['seshToken'])
          {
            res.clearCookie('seshToken')
          }
          res.cookie('seshToken', data.access_token, {
            maxAge: 900000,
            httpOnly: true
          });
          return res.redirect('/dashboard')
        });
        
      //Redirect to dashboard after login
      // return app.render(req, res, '/dashboard')
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })