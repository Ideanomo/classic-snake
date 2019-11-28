// Pixi variables
// Create renderer and stage
var renderer = new PIXI.CanvasRenderer(400, 400, { backgroundColor: 0xFFFFFF }),
    stage = new PIXI.Container(),
    Loader = PIXI.Loader,
    Sprite = PIXI.Sprite;

// Add canvas to page
document.body.appendChild(renderer.view);
// Add listener to window
window.addEventListener('resize', function () {
    scaleToWindow(renderer.view);
});

// Global variables
var state = undefined,
    width = renderer.width,
    height = renderer.height,
    gameScene,
    gameOverScene,
    gameOverText,
    blockSize = 10,
    borderColour = 0xa09a9a,
    style = new PIXI.TextStyle({
        fontFamily: 'Courier',
        fontSize: 20,
        fontWeight: 'bold',
        align: 'left'
    }),
    score = 0,
    scoreText = new PIXI.Text('Score: ' + score, style);

window.onload = function () {
    setup();
};

function setup () {
    // Create the two Containers
    gameScene = new PIXI.Container();
    stage.addChild(gameScene);

    gameOverScene = new PIXI.Container();
    stage.addChild(gameOverScene);
    // Hide gameOver scene till game is lost
    gameOverScene.visible = false;

    // Create borders
    var border = new PIXI.Graphics;
    // Top border
    border.beginFill(borderColour);
    border.drawRect(0, 0, width, blockSize);
    border.endFill();
    // Bottom border
    border.beginFill(borderColour);
    border.drawRect(0, height - blockSize,width, blockSize);
    border.endFill();
    // Left border
    border.beginFill(borderColour);
    border.drawRect(0, 0, blockSize, height);
    border.endFill();
    // Right border
    border.beginFill(borderColour);
    border.drawRect(width - blockSize, 0, blockSize, height);
    border.endFill();

    stage.addChild(border);

    // Render the stage
    renderer.render(stage);

}

function gameLoop () {
    window.requestAnimationFrame(gameLoop);
    state();
}

function play () {

}

function end () {

}