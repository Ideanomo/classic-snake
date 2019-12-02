define([], function () {
    return function () {
        // Set position of block
        self.setPosition = function (_col, _row) {
            return {
                col: _col,
                row: _row
            }
        };

        // Draw square
        self.drawSquare = function (col, row, colour) {
            var x = col * blockSize;
            var y = row * blockSize;

            var square = new PIXI.Graphics();
            square.beginFill(colour);
            square.drawRect(x, y, blockSize, blockSize);
            square.endFill();
        };
    }
});