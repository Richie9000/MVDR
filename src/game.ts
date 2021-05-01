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
