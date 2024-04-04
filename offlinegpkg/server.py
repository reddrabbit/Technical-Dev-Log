from http.server import HTTPServer, BaseHTTPRequestHandler


#Set up the class to handle the GET Requests
class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = 'What You Have Requested Exists Not, Child'
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

#Initiate a variable to serve as the local host and the port to access the server
port = HTTPServer(('localhost', 8000), Server)
port.serve_forever()