# BaixarSitesComNodeJS
Como baixar sites em NodeJS


### Instalação
É necessário além do node.js instalado, ter também o node-site-downloader, para instalar execute o comando abaixo:
```
npm i -g node-site-downloader
```
### Entendendo como ele baixa
O comando para baixar é este, mas já temos tudo configurado em nosso código
```
node-site-downloader download DOMAIN START_POINT OUTPUT_FOLDER [VERBOSE] [OUTPUT_FOLDER_SUFFIX] [INCLUDE_IMAGES]

//Exemplo de como rodar
node-site-downloader download -s https://google.com -d https://google.com -v --include-images -o websitefiles

```

### Rodando o projeto e baixando o template
Devemos apenas informar na variavel websiteUrl o site que desejamos baixar.

Veja abaixo o código de nosso aplicação
```
const fs = require("fs");
const {exec} = require('child_process')
const websiteUrl = 'https://byrushan.com/projects/super-admin/app/2.2/';

  var directoryPath = Date.now()
  exec(`node-site-downloader download -s ${websiteUrl} -d ${websiteUrl} -o ${directoryPath} -v --include-images`,(err,stdout,stderr) =>{
    if(err){
      console.log(err)
    }
  })
  ```
  
  Para fazer o download execute o código abaixo
  ```
  node .\index.js
  ```
