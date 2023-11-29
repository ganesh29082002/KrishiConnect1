const articalrouter = require("express").Router();
const upload = require("../middelware/FileUploads")
const {uploadArtical , getArtical , getArticalDescription} = require('../controllers/ArticalsContro')
articalrouter.post("/uploadartical", upload.single('file'),uploadArtical);
articalrouter.get("/getarticals",getArtical);
articalrouter.get("/getarticalsDescription/:id",getArticalDescription);




module.exports= articalrouter;

