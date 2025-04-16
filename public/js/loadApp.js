function loadAppFromHtml(app_location, logo, pid) {

    _logo = document.createElement('img')
    _logo.src = logo
    _logo.style.width = '5vh'
    _logo.style.height = '5vh'
    document.getElementById('pinnedApps').appendChild(_logo)

    let app_frame = document.createElement('iframe')
    app_frame.src = app_location
    app_frame.id = `APPLICATION_FRAME_${pid}`
    app_frame.style.width = '30vw'
    app_frame.style.height = '30vh'
    app_frame.style.border = app_frame.style.outline = 'none'
    document.body.appendChild(app_frame)
}
