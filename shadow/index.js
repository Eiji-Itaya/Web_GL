var init = function() {

  var width = 800,
      height = 600;

// このサンプルでは、Z軸は手前が正、奥行きがマイナス

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  // レンダラー：シャドウを有効にする
  //enabledは許可するということ
  renderer.shadowMap.enabled = true;

  // シーンを作成
  var scene = new THREE.Scene();

  // カメラを作成(画角、縦横比、カメラからの距離前、後）
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
　// カメラの座標
　camera.position.set( 0, 10, 0);
  camera.lookAt(new THREE.Vector3(0, 0, -5));


// 平面を作成
  var planeGeometry = new THREE.PlaneGeometry(10,10);
  //var planeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
　//上のマテリアルは影がつかない
  var planeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  var plane = new THREE.Mesh(planeGeometry,planeMaterial);
  plane.receiveShadow = true;
  plane.rotation.set( -Math.PI/2, 0, 0 );
  plane.position.set(0,-1.5,-6);
  scene.add(plane);

  // 箱を作成
  var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  var boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  var box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.castShadow = true; 
  box.position.set(1,0,-5);
  scene.add(box);

  // 円錐を作成
  var coneGeometry = new THREE.CylinderGeometry( 0, 1, 1, 32);
  var coneMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
  var cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.castShadow = true; 
　cone.position.set(-1,0,-5);
  scene.add(cone);

  // 平行光源(色、強さ）主光源
  var directionalLightM = new THREE.DirectionalLight(0xffffff,0.3);
  directionalLightM.position.set(0, 10, -5);
  //directionalLightM.castShadow = true; 
  //シーンに追加
  scene.add(directionalLightM);

  // 照明を作成SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
  var light = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.2);
  light.position.set(0,10, -5);
  //light.target.position.set( 0, 5, -100 );
  // ライトに影を有効にする
  light.castShadow = true;
  //light.shadow.mapSize.width = 2048;
  //light.shadow.mapSize.height = 2048;
  scene.add(light);

  // 平行光源(色、強さ）補助光源
  var directionalLightS = new THREE.DirectionalLight(0xffffff,0.3);
    directionalLightS.position.set(-1, -1, 1);
   // directionalLightS.castShadow = true;
  // シーンに追加
  //scene.add(directionalLightS);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

   // 円錐を回転させる
   cone.rotation.z -= 0.01;
   cone.rotation.y -= 0.01;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);