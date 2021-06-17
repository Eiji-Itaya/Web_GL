var init = function() {
  
　var width=800;
　    height=600;

//このサンプルでは、Z軸は手前が正、奥行きがマイナス

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  // レンダラーのサイズを設定
  renderer.setSize(800, 600);
  // canvasをbodyに追加
  document.body.appendChild(renderer.domElement);
 
  // シーンを作成
  var scene = new THREE.Scene();
 
  // カメラを作成（画角、縦横比、カメラからの距離前、後）
 //画角を大きくすると物体が小さくなる、小さくすると大きくなる
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  // カメラの座標
  camera.position.set(0,0,3)

  // 箱を作成
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  var box = new THREE.Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);

//③角すい?円すい
  var coneGeometry = new THREE.ConeGeometry( 1, 2, 8 ); 
  //半径、高さ、底面の分割数
  var coneMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );;
  var cone = new THREE.Mesh( coneGeometry, coneMaterial );
  cone.position.set(  4.0, 1.5, -10 );
  scene.add( cone );

//⑥ドーナッツ
var torusGeometry = new THREE.TorusGeometry( 1, 0.3, 6, 12 ); 
//半径、ドーナッツの太さ、ドーナッツのチューブ方向の分割数、水平方向の分割数
var torusMaterial = new THREE.MeshBasicMaterial( { color: 0x34ffff, wireframe: true } );
var torus = new THREE.Mesh( torusGeometry, torusMaterial );
torus.position.set( 0, 0, -5);
scene.add( torus );


  // 平行光源を生成（色、強さ）主光源
  var directionalLightM = new THREE.DirectionalLight(0xff0000,1);
  directionalLightM.position.set(2, 2, 1);
 //シーンに追加
  scene.add(directionalLightM);
 
 // 平行光源を生成（色、強さ）補助光源
  var directionalLightS = new THREE.DirectionalLight(0xff00ff,1);
  directionalLightS.position.set(-2, -2, 1);
 //シーンに追加
  scene.add(directionalLightS);

 // 平行光源を生成（色、強さ）補助光源2
  var directionalLightS2 = new THREE.DirectionalLight(0x00ff00,1);
  directionalLightS2.position.set(0, 2,-1);
 //シーンに追加
  scene.add(directionalLightS2);

  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // ドーナッツを回転させる
    torus.rotation.x += 0.03;
    torus.rotation.y += 0.03;

 // 角すいを回転させる
    cone.rotation.x += 0.1;
    cone.rotation.y += 0.1;

    renderer.render(scene, camera);
  };

  update();

}

window.addEventListener('DOMContentLoaded', init);
