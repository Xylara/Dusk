const fs = window.Filer.fs;
async function mkdirRecursive(path) {
    const parts = path.replace(/\/+$/, '').split('/').filter(Boolean);
    let current = '';
    for (const part of parts) {
        current += '/' + part;
        try {
            await fs.mkdir(current);
        } catch (e) {
        }
    }
}

async function fetchAndWrite(url, filePath) {
    try {
        try {
            await fs.stat(filePath);
            console.log(`Skipping ${filePath}, already exists.`);
            return;
        } catch (e) {
        }

        const res = await fetch(url);
        if (!res.ok) {
            console.error(`Error fetching ${url}`);
            return;
        }
        const text = await res.text();
        await fs.writeFile(filePath, text);
        console.log(`Wrote ${filePath}`);
    } catch (err) {
    }
}


// Create base directories
async function setupFilesystem() {
    await mkdirRecursive('/bin');
    await mkdirRecursive('/etc');
    await mkdirRecursive('/home');
    await mkdirRecursive('/lib');
    await mkdirRecursive('/tmp');
    await mkdirRecursive('/bin/firefox/uv');
    await mkdirRecursive('/bin/firefox/scram');
    await mkdirRecursive('/bin/firefox/assets/css');
    await mkdirRecursive('/bin/firefox/assets/js');
    await mkdirRecursive('/bin/firefox/assets/svg');

    console.log("Created base FS");
    
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/index.html", '/bin/firefox/index.html');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/proccy.html", '/bin/firefox/proccy.html');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/settings.html", '/bin/firefox/settings.html');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/sw.js", '/bin/firefox/sw.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/404.html", '/bin/firefox/404.html');


    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/uv/uv.bundle.js", '/bin/firefox/uv/uv.bundle.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/uv/uv.client.js", '/bin/firefox/uv/uv.client.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/uv/uv.config.js", '/bin/firefox/uv/uv.config.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/uv/uv.handler.js", '/bin/firefox/uv/uv.handler.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/uv/uv.sw.js", '/bin/firefox/uv/uv.sw.js');

    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.client.js", '/bin/firefox/scram/scramjet.client.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.controller.js", '/bin/firefox/scram/scramjet.controller.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.shared.js", '/bin/firefox/scram/scramjet.shared.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.sw.js", '/bin/firefox/scram/scramjet.sw.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.sync.js", '/bin/firefox/scram/scramjet.sync.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.wasm.js", '/bin/firefox/scram/scramjet.wasm.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/scram/scramjet.worker.js", '/bin/firefox/scram/scramjet.worker.js');

    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/favicon.png", '/bin/firefox/assets/favicon.png');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/css/main.css", '/bin/firefox/assets/css/main.css');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/css/settings.css", '/bin/firefox/assets/css/settings.css');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/css/topbar.css", '/bin/firefox/assets/css/topbar.css');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/js/topbar.js", '/bin/firefox/assets/js/topbar.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/js/settings.js", '/bin/firefox/assets/js/settings.js');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/svg/discord.svg", '/bin/firefox/assets/svg/discord.svg');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/svg/github.svg", '/bin/firefox/assets/svg/github.svg');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/svg/home.svg", '/bin/firefox/assets/svg/home.svg');
    await fetchAndWrite("https://cdn.jsdelivr.net/gh/xylara/dusk-cdn/firefox/assets/svg/settings.svg", '/bin/firefox/assets/svg/settings.svg');

    console.log("All assets have been fetched and written.");
}

setupFilesystem().catch(console.log("this is gonna error"));
