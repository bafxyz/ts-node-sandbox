import http from 'http'

// Create an HTTP server
const srv = http.createServer(
    (_req, { writeHead, end }): void => {
        writeHead(200, { 'Content-Type': 'text/plain' })
        end('okay')
    }
)

srv.on(
    'upgrade',
    (_req, socket, _head): void => {
        socket.write(
            'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
                'Upgrade: WebSocket\r\n' +
                'Connection: Upgrade\r\n' +
                '\r\n'
        )
        socket.pipe(socket) // echo back
    }
)

// Now that server is running
srv.listen(
    8080,
    '127.0.0.1',
    (): void => {
        // make a request
        const options = {
            port: 8080,
            host: '127.0.0.1',
            headers: {
                Connection: 'Upgrade',
                Upgrade: 'websocket'
            }
        }

        const req = http.request(options)
        req.end()

        req.on(
            'upgrade',
            (_res, socket, _upgradeHead): void => {
                console.log('got upgraded!')
                socket.end()
                process.exit(0)
            }
        )
    }
)
