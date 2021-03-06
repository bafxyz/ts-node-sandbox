import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './shell/App'
import html from './shell/html'

const port = 3000
const server = express()

server.use(express.static('dist'))
server.get('/', function(req, res): void {
    const body = renderToString(React.createElement(App))

    res.send(html({ body }))
})
server.listen(port, (): void => console.log('Server running on port 3000!'))
