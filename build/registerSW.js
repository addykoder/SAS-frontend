if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/SAS-frontend/build/sw.js', { scope: '/SAS-frontend/build/' })})}