// Controls the size of the visualization. Defaults to full-screen
var CANVASWIDTH = window.innerWidth;
var CANVASHEIGHT = 800;
// Constants for controlling the position of the binary tree
const TREEX = CANVASWIDTH / 4;     // The x-coordinate of the root node
const TREEY = 250;                 // The y-coordinate of the root node
const BACKGROUNDCOLOR = color(50); // Background color of the visualization

function setup() {
    // Create the canvas and place it in the provided placeholder
    var canvas = createCanvas(CANVASWIDTH, CANVASHEIGHT);
    canvas.parent('canvas-placeholder');

    // Create other necessary objects for the visualization
    var tree = new Cartesian_Tree(TREEX, TREEY, BACKGROUNDCOLOR);
    var explorer = new Explorer(canvas.canvas, tree.graphicsBuffer, tree.draw.bind(tree));
    var controls = new Controls(tree)
}
