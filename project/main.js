var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

document.body.appendChild(canvas);



var key_pressed = require("key-pressed");
var Matter = require('matter-js/build/matter.js');


var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();
engine.world.gravity.y = 0;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });




// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);


Matter.Events.on(engine, 'beforeUpdate', function(event)
  {
    if(key_pressed("A"))
      {Matter.Body.applyForce(boxA, boxA.position, { x: -0.01, y: 0.0 });}
    if(key_pressed("D"))
      {Matter.Body.applyForce(boxA, boxA.position, { x: 0.01, y: 0.0 });}
    if(key_pressed("W"))
      {Matter.Body.applyForce(boxA, boxA.position, { x: 0.0, y: -0.01 });}
    if(key_pressed("S"))
      {Matter.Body.applyForce(boxA, boxA.position, { x: 0.0, y: 0.01 });}      
  });



// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
