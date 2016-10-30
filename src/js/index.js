import Camera from "./camera/Camera";
import APP from "./camera/Quagga";

let quaga = new APP();
let camera = new Camera();

// 実行したい処理
window.onload = () => {

  console.log("load");

  jQuery('#startVideo').click(() => {
    camera.startVideo();
  });

  jQuery('#takeSnapshot').click(() => {
    camera.takeSnapshot();
  });

  quaga.init();
};