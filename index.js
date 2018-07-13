    var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    cors = require('cors'),
    app = express();
    app.use(cors())
    app.use(express.json())

    https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
      passphrase: 'abcd'
    }, app).listen(3001);

    app.get('/', function (req, res) {
      console.log(req)
      res.header('Content-type', 'text/html');
      return res.end('<h1>Hello, Secure World!</h1>');
    });
    
    app.post('/', function (req, res) {
      console.log(req.body)
      
      prop = req.body.key  // just lifting these names right from shinkgs
      
      loc = prop.loc
        
      console.log('move played!!! y:' + loc.y.toString() + "  x:" + loc.x.toString())
      res.header('Content-type', 'text/html');
      return res.sendStatus(200);
    });
    
    console.log('listening on 3001')