var { Readability } = require('@mozilla/readability');
var { JSDOM } = require('jsdom');
const request = require('request')
const fs = require('fs');
const htmlMd = require('node-html-markdown')

let req = request('https://www.cairn.info/revue-les-cahiers-du-numerique-2009-2-page-53.htm', function(error, response, body){
    var doc = new JSDOM(body);

    let reader = new Readability(doc.window.document);
    let article = reader.parse();
    
    if (!error){
        fs.writeFile('content.md', htmlMd.NodeHtmlMarkdown.translate(article.content), function (err) {  
            if (err) throw err;
            console.log('Fichier créé !');
        });
        console.log(article.title)
    }
    else {
        console.log(error)
    }
})