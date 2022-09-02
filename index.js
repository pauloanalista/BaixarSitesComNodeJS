const fs = require("fs");
const {exec} = require('child_process')
const websiteUrl = 'https://byrushan.com/projects/super-admin/app/2.2/';

  var directoryPath = Date.now()
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })