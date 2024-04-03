#Code tweaked and gotten from howCode's YouTube at: https://www.youtube.com/watch?v=hFNZ6kdBgO0&list=LL&index=1

#Import Python's installed modules for handling HTTP Requests
from http.server import HTTPServer, BaseHTTPRequestHandler

#This class will handle the http requests. Inherits the properties from the BaseHTTPRequestHandler
class Server(BaseHTTPRequestHandler):
#do_GET() is a default method and cannot be changed or edited.
#do_GET() will respond when a GET request is received by the server
    def do_GET(self):
        # Checks to see if the path is '/', which was used to refer to default in this case, and if it is, opens up the index.html file
        if self.path == '/':
            self.path = '/index.html'
        try:
            #This line of code checks for the file specified in the self parameter exists and reads its contents, it will then send a 200 response to the console. Follows standard web setup
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File does not exist, homie....what?"
            self.send_response(404)
        self.end_headers()
        #This line writes the content of the file and sends to the client
        self.wfile.write(bytes(file_to_open, 'utf-8'))

#This line sets the localhost and the server's access port
httpd = HTTPServer(('localhost', 9090), Server)
httpd.serve_forever()
