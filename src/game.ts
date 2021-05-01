import * as utils from '@dcl/ecs-scene-utils'




const baseScene = new Entity();
engine.addEntity(baseScene);
baseScene.addComponent(new GLTFShape("models/mvdr.glb"));
baseScene.addComponent(new Transform({ position: new Vector3(10, 0, 20)}));
// Add an entity for the door
const door = new Entity(); 
engine.addEntity(door);

// Give it a model and move it into place
door.addComponent(new GLTFShape("models/Door/door.glb"));
door.addComponent(new Transform({ position: new Vector3(10, 0, 20) }));

// Add an Animator to play clips inside the model file, created by the artist
door.addComponent(new Animator());
// This model has an "Open" animation that when played should happen once and then stop moving
door
  .getComponent(Animator)
  .addClip(new AnimationState("Door_Open", { looping: false }));



// When the player clicks on the door, open it!
let isDoorOpen = false;
door.addComponent(
  new OnClick((): void => {
    // Track if the door has already been opened so we don't play the animation twice
    if (!isDoorOpen) {
      isDoorOpen = true;

      // Play the animation
      door
        .getComponent(Animator)
        .getClip("Door_Open")
        .play();
    
    }
  })
);