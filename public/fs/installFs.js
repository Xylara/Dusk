const fs = window.Filer.fs;
const cdnUrl = "https://raw.githubusercontent.com/Xylara/Dusk-cdn/refs/heads/master/"


async function createFileFromUrl(location, url) {
    let data =  await fetch(url)
    let dtext = await data.text()

    await fs.writeFile(location, dtext)
}
// Create base directories
async function setupFilesystem() {
    await fs.mkdir(`/bin`);
    await fs.mkdir(`/etc`);
    await fs.mkdir(`/home`);
    await fs.mkdir(`/lib`);
    await fs.mkdir(`/tmp`);

    console.log(`created skelleton for rootfs`)

    await fs.mkdir(`/bin/firefox`);
    await fs.mkdir(`/bin/firefox/uv`);
    await fs.mkdir(`/bin/firefox/scram`);
    await fs.mkdir(`/bin/firefox/assets`)
    await fs.mkdir(`/bin/firefox/assets/css`);
    await fs.mkdir(`/bin/firefox/assets/js`);
    await fs.mkdir(`/bin/firefox/assets/svg`);

    console.log(`created browser skelleton`)

    await createFileFromUrl(`/bin/firefox/index.html`, `${cdnUrl}firefox/index.html`)
    await createFileFromUrl(`/bin/firefox/proccy.html`, `${cdnUrl}firefox/proccy.html`)
    await createFileFromUrl(`/bin/firefox/settings.html`, `${cdnUrl}firefox/settings.html`)
    await createFileFromUrl(`/bin/firefox/sw.js`, `${cdnUrl}firefox/sw.js`)

    await createFileFromUrl(`/bin/firefox/assets/css/main.css`, `${cdnUrl}firefox/assets/css/main.css`)
    await createFileFromUrl(`/bin/firefox/assets/css/settings.css`, `${cdnUrl}firefox/assets/css/settings.css`)
    await createFileFromUrl(`/bin/firefox/assets/css/topbar.css`, `${cdnUrl}firefox/assets/css/topbar.css`)

    await createFileFromUrl(`/bin/firefox/assets/js/topbar.js`, `${cdnUrl}firefox/assets/js/topbar.js`)
    await createFileFromUrl(`/bin/firefox/assets/js/settings.js`, `${cdnUrl}firefox/assets/js/settings.js`)

    await createFileFromUrl(`/bin/firefox/assets/svg/discord.svg`, `${cdnUrl}firefox/assets/svg/discord.svg`)
    await createFileFromUrl(`/bin/firefox/assets/svg/github.svg`, `${cdnUrl}firefox/assets/svg/github.svg`)
    await createFileFromUrl(`/bin/firefox/assets/svg/home.svg`, `${cdnUrl}firefox/assets/svg/home.svg`)
    await createFileFromUrl(`/bin/firefox/assets/svg/settings.svg`, `${cdnUrl}firefox/assets/svg/settings.svg`)

    await createFileFromUrl(`/bin/firefox/scram/scramjet.client.js`, `${cdnUrl}firefox/scram/scramjet.client.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.controller.js`, `${cdnUrl}firefox/scram/scramjet.controller.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.shared.js`, `${cdnUrl}firefox/scram/scramjet.shared.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.sw.js`, `${cdnUrl}firefox/scram/scramjet.sw.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.sync.js`, `${cdnUrl}firefox/scram/scramjet.sync.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.wasm.js`, `${cdnUrl}firefox/scram/scramjet.wasm.js`)
    await createFileFromUrl(`/bin/firefox/scram/scramjet.worker.js`, `${cdnUrl}firefox/scram/scramjet.worker.js`)

    await createFileFromUrl(`/bin/firefox/uv/uv.bundle.js`, `${cdnUrl}firefox/uv/uv.bundle.js`)
    await createFileFromUrl(`/bin/firefox/uv/uv.client.js`, `${cdnUrl}firefox/uv/uv.client.js`)
    await createFileFromUrl(`/bin/firefox/uv/uv.config.js`, `${cdnUrl}firefox/uv/uv.config.js`)
    await createFileFromUrl(`/bin/firefox/uv/uv.handler.js`, `${cdnUrl}firefox/uv/uv.handler.js`)
    await createFileFromUrl(`/bin/firefox/uv/uv.sw.js`, `${cdnUrl}firefox/uv/uv.sw.js`)



    }

setupFilesystem()
