const fs = window.Filer.fs;

async function createFileFromUrl(location, url) {
    let data =  await fetch(url)
    let dtext = await data.text()

    await fs.writeFile(location, dtext)
}
// Create base directories
async function setupFilesystem() {
    await fs.mkdir('/bin');
    await fs.mkdir('/etc');
    await fs.mkdir('/home');
    await fs.mkdir('/lib');
    await fs.mkdir('/tmp');

    console.log('created skelleton for rootfs')

    await fs.mkdir('/bin/firefox');
    await fs.mkdir('/bin/firefox/uv');
    await fs.mkdir('/bin/firefox/scram');
    await fs.mkdir('/bin/firefox/assets')
    await fs.mkdir('/bin/firefox/assets/css');
    await fs.mkdir('/bin/firefox/assets/js');
    await fs.mkdir('/bin/firefox/assets/svg');

    await createFileFromUrl('/bin/firefox/index.html', 'https://cdn.jsdelivr.net/gh/xylara/dusk-cdn@latest/firefox/index.html')

    console.log('created browser skelleton')


}

setupFilesystem()
