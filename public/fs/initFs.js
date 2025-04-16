if(!('serviceWorker' in navigator)) {
    console.warn('unable to initialize nohost service worker: not supported.');
  } else {
    navigator.serviceWorker
      .register('/fs/nohost-sw.js') 
      .catch(err => {
        console.error(`unable to register nohost service worker: ${err.message}`);
      });
}