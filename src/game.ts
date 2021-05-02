import * as utils from '@dcl/ecs-scene-utils'


function mvdr() {
const baseScene = new Entity();
engine.addEntity(baseScene);
baseScene.addComponent(new GLTFShape("models/mvdr.glb"));
baseScene.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
}
mvdr();

function door(){
const door = new Entity(); 
engine.addEntity(door);
door.addComponent(new GLTFShape("models/Door/door.glb"));
door.addComponent(new Transform({ position: new Vector3(10, 0, 20) }));
let StartPos = new Vector3(10, 0, 20);
let EndPos = new Vector3(10, 2, 20);
let isDoorOpen = false;
door.addComponent(
  new OnClick((): void => {
    if (!isDoorOpen) {
      isDoorOpen = true;
      door.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 2))

    }
  })
);
}
door();

function button1() {
  const button1 = new Entity();
  engine.addEntity(button1);
  button1.addComponent(new GLTFShape("models/Buttons/button1.glb"))
  button1.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
}
button1();

function button2() {
  const button2 = new Entity();
  engine.addEntity(button2);
  button2.addComponent(new GLTFShape("models/Buttons/button2.glb"))
  button2.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
}
button2();

function button3() {
  const button3 = new Entity();
  engine.addEntity(button3);
  button3.addComponent(new GLTFShape("models/Buttons/button3.glb"))
  button3.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
}
button3();