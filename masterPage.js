$w.onReady(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://paulopaschoalino.github.io/torrepraiagrande-pwa/service-worker.js')
      .then(reg => console.log('SW registrado:', reg))
      .catch(err => console.log('Erro no SW:', err));
  }
});