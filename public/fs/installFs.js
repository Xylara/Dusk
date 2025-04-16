const fs = window.Filer.fs;

// create all of the folders
fs.mkdir('/bin') // shared binaries
fs.mkdir('/etc') // just so i remember it, ETC IS CONFIGS GODDAMIT
fs.mkdir('/home') // user data
fs.mkdir('/lib') // libraries and stuff
fs.mkdir('/tmp') // temp

console.log("created base fs")

console.log("fetching apps..")
let firefox_html = fetch("/dlserver/firefox.html")
    .then(function(res) {
        if (!res.ok) {
            console.error("response was not ok in fetching firefox")
            // PANICCCKKK
            return 1;
            
        }
        return res.text()
    })
fs.writeFile('/bin/firefox.html', `${firefox_html}`);
fs.writeFile('/bin/settings.html', 'hello world!');
fs.writeFile('/bin/sh.html', 'hello world!');