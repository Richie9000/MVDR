
let Casa = new Entity()
Casa.addComponent(new GLTFShape("models/1 mvdr.glb"))
Casa.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(Casa)
