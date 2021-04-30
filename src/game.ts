
let Casa = new Entity()
Casa.addComponent(new GLTFShape("models/mvdr.glb"))
Casa.addComponent(
  new Transform({
    position: new Vector3(10, 0, 20),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(Casa)
