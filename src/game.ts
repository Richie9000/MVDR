import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'


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
let EndPos = new Vector3(9.9, 2.4, 20);
let isDoorOpen = false;
door.addComponent(
  new OnClick((): void => {
    if (!isDoorOpen) {
      isDoorOpen = true;
      door.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 2))
      }
    
  }))

  const button1 = new Entity();
  engine.addEntity(button1);
  button1.addComponent(new GLTFShape("models/Buttons/button1.glb"))
  button1.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
  button1.addComponent(new OnClick((): void => {
    door.addComponent(new utils.MoveTransformComponent(EndPos, StartPos, 2))
    isDoorOpen = false
  }))
}
door();

function button2() {
  const button2 = new Entity();
  engine.addEntity(button2);
  button2.addComponent(new GLTFShape("models/Buttons/button2.glb"))
  button2.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
  
  button2.addComponent(
    new OnPointerDown(
      (e) => {
        movePlayerTo({ x: 1, y: 0, z: 1 }, { x: 4, y: 4, z: 4 })
      },
      { hoverText: "Move player" }
    )
  )
  
}
button2();

function button3() {
  const button3 = new Entity();
  engine.addEntity(button3);
  button3.addComponent(new GLTFShape("models/Buttons/button3.glb"))
  button3.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
}
button3();

