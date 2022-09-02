const fs = require("fs");
const {exec} = require('child_process')
const websiteUrl = 'https://dashboardkit.io/bootstrap/navigation/index.html';
//link com templates par abaixar
//https://wrapbootstrap.com/category/templates/landing-page-templates

  var directoryPath = Date.now()
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })