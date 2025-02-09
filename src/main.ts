import "./style.css";

import { Actor, Component, Composite, Container, Game } from "./modules/game";
import { MeshUtils } from "./modules/mesh";
import { Vector2, Vector3 } from "three";

const game = new Game();

const testContainer = new Container({ width: 8, height: 8 });

const testActor = new Actor({
  mesh: MeshUtils.createCube(),
});
const testComponent = new Component({
  mesh: new Composite({
    center: new Vector3(0, 0, 0),
    parts: [
      {
        mesh: MeshUtils.createCube(),
        offset: new Vector3(1, 0, 0),
      },
      {
        mesh: MeshUtils.createCube(),
        offset: new Vector3(-1, 0, 0),
      },
      {
        mesh: MeshUtils.createCube(),
        offset: new Vector3(0, 1, 0),
      },
    ],
  }),
});

testActor.update = () => {
  if (Math.random() < 0.00001) testActor.kill();
};

testComponent.update = () => {
  if (!(testComponent.mesh instanceof Composite)) return;
  const DELTA = 0.001;
  testComponent.mesh.position = testComponent.mesh.position.add(
    new Vector3(DELTA, DELTA),
  );
};

testActor.graphics = (_, delta) => {
  if (testActor.mesh instanceof Composite) return;
  testActor.mesh.rotation.x += delta / 1000;
  testActor.mesh.rotation.y += delta / 1000;
};

testContainer.addActor(testActor, new Vector2(0, 0));
testContainer.addComponent(testComponent);

game.addContainer("test", testContainer);
game.setContainer("test");
game.start();
