async function makeFolderRec(folder) {
    await (new Filer.fs.Shell()).promises.mkdirp(folder)
}
// if fileContent is not set, just default to nothing
// this 
async function makeFileRec(filePath, fileContent = '') {
    const shell = new Filer.fs.Shell();
    const parts = filePath.split('/');
    parts.pop(); 
    const folderPath = parts.join('/');

    if (folderPath) {
        await shell.promises.mkdirp(folderPath);
    }
    await new Promise((resolve, reject) => {
        shell.fs.writeFile(filePath, fileContent, 'utf8', (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}
// usage: deletePathRec("/example/folder/") OR deletePathRec("/example/file.txt")
async function deletePathRec(path) {
    const shell = new Filer.fs.Shell();

    await new Promise((resolve, reject) => {
        shell.fs.stat(path, (err, stats) => {
            if (err) {
                return reject(err); 
            }

            if (stats.isDirectory()) {
                shell.rm(path, { recursive: true }, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            } else {
                shell.rm(path, (err) => {
                    if (err) reject(err);
                    else resolve();
                });
            }
        });
    });
}


var dusk = {
    mkdir: makeFolderRec,
    crFile: makeFileRec,
    rm: deletePathRec
}
dusk.rm("/pain/")
