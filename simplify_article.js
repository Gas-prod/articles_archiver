var { Readability } = require('@mozilla/readability');
var { JSDOM } = require('jsdom');
const request = require('request')
const fs = require('fs');
const htmlMd = require('node-html-markdown')

let simplify = (url) => {
    let req = request(url, function(error, _, body){
        let doc = new JSDOM(body);

        let reader = new Readability(doc.window.document);
        let article = reader.parse();
        
        if (!error){
            fs.writeFile('test.md', htmlMd.NodeHtmlMarkdown.translate(article.content), function (err) {  
                if (err) throw err;
                console.log('Fichier créé !');
            });
        }
        else {
            console.log(error)
        }
    })
}

module.exports = simplify