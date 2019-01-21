var fs = require("fs");
  async = require("async");
  csv = require("csv");
  var http = require('http');
  var path = require('path');
    var os = require('os');
const db = require("../config/db.config.js");
const Employee = db.employee;
var Busboy = require('busboy');

//const filename = "C:\\Users\\RAFI\\Desktop\\SatishProject\\employees.csv";

const movieFile = "E:\\MovieRestAPI\\tmdb_5000_credits.csv";
var saveTo="";
exports.fileRead = (req, res) => {
  console.log("I'm in bulk order" + req.files);
  console.log(os.tmpdir());


  var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      saveTo = path.join(os.tmpdir(), path.basename(fieldname));
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
      res.writeHead(200, { 'Connection': 'close' });
      fileReadOne(req,res);
      res.end("That's all folks!");
    });
    return req.pipe(busboy);
  
  res.writeHead(404);
  res.status(200).send("success");
  
}

fileReadOne=(req,res)=>{
  var input = fs.createReadStream(saveTo);
  var parser = csv.parse({
    columns: true,
    relax: true
  });
  parser.on("readable", function() {
    console.log("Enters into parser on");
    while ((line = parser.read())) {
      inserter.push(line);
    }
  });
  parser.on("end", function(count) {
    console.log("Enters into parser end");
    inserter.drain = function() {
      doneLoadingCallback(req, res);
    };
  });
  input.pipe(parser);
}

var inserter = async.cargo(function(tasks, inserterCallback) {
  console.log("Enters into inserterd");
  Employee.bulkCreate(tasks).then(function() {
      inserterCallback();
    }
  ).catch(err=>{
      res.status(500).send({status:"Failed", description:"Insertion failed"});
  })
  //console.log(tasks);
  // inserterCallback();
}, 10);

doneLoadingCallback = (req, res) => {
  console.log("Reading done");
  //res.status(201).send({status:"Success", description:"Bulk insert completed"});
};
