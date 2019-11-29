requirejs.config({
    baseUrl: './',
    paths: {
        'vendor': 'vendor',
        'app': 'scripts/game',
        'utils': 'utils'
    }
});

requirejs(['vendor/pixi.min', 'utils/keyboard', 'utils/scaleToWindow', 'app/game'], function (pixi, keyboard, scaleToWindow, game) {
    game();
});