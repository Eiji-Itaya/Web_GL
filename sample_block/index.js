var init = function() {

  var width = 800,
      height = 600;

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  var scene = new THREE.Scene();

  // カメラを作成
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  // テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("stone.jpg");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;

 // テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture1 = textureLoader.load("tex1.jpg");
  var mat1 = new THREE.MeshPhongMaterial();
  mat1.map = texture1;

// テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture2 = textureLoader.load("tex2.jpg");
  var mat2 = new THREE.MeshPhongMaterial();
  mat2.map = texture2;

  // バンプマップ読み込み
  var bump = textureLoader.load("stone-bump.jpg");
  mat.bumpMap = bump;
 //デコボコ感の大きさ
  mat.bumpscale = 0.2;

 // バンプマップ読み込み
  var bump1 = textureLoader.load("bmap1.jpg");
  mat1.bumpMap = bump1;
 //デコボコ感の大きさ
  mat1.bumpscale =0.2;

// バンプマップ読み込み
  var bump2 = textureLoader.load("bmap2.jpg");
  mat2.bumpMap = bump2;
 //デコボコ感の大きさ
  mat2.bumpscale =0.2;

  // 箱を作成
  var geometry1 = new THREE.BoxGeometry(1, 1, 1);
  var box = new THREE.Mesh(geometry1, mat);
  box.position.set(1.5,0,-5);
  scene.add(box);

  // 球を作成
  var geometry2 = new THREE.SphereGeometry(0.5, 32, 32 ); ;
  var Sphere = new THREE.Mesh(geometry2, mat1);
  Sphere.position.set(0,0,-5);
  scene.add(Sphere);

  // 円柱を作成
  var geometry3 = new THREE.CylinderGeometry( 0, 0.5, 1, 20, 4 );
  var Cylinder = new THREE.Mesh(geometry3, mat2);
  Cylinder.position.set(-1.5,0,-5);
  scene.add(Cylinder);

  // 平行光源
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight1);

  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-10, 1, 1);
  // シーンに追加
  scene.add(directionalLight2);

 var directionalLight3 = new THREE.DirectionalLight(0xffffff);
  directionalLight3.position.set(1, -10, 1);
  // シーンに追加
  scene.add(directionalLight3);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // 箱を回転させる
    Sphere.rotation.x += 0.01;
    Sphere.rotation.y += 0.01;

    // 円柱を回転させる
    Cylinder.rotation.x += 0.01;
    Cylinder.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);