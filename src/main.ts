import "./style.css";

import { Actor, Container, Game } from "./modules/game";
import { MeshUtils } from "./modules/mesh";
import { Vector2 } from "three";

const game = new Game();

const testContainer = new Container({ width: 8, height: 8 });

const testActor = new Actor({
  mesh: MeshUtils.createCube(),
});

testActor.update = () => {
  if (Math.random() < 0.001) testActor.kill();
};

testActor.graphics = (_, delta) => {
  testActor.mesh.rotation.x += delta / 1000;
  testActor.mesh.rotation.y += delta / 1000;
};

testContainer.addActor(testActor, new Vector2(0, 0));

game.addContainer("test", testContainer);
game.setContainer("test");
game.start();
