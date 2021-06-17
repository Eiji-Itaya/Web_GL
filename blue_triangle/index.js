var init = function() {

  var width = 800,
      height = 600;

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  var scene = new THREE.Scene();

  // カメラを作成 (画角、縦横比（横÷縦）、手前、奥行き）
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
//(camera.position.zをしてしてないので。原点にカメラ）

  // 多面体を作成
  // 頂点
  var vertices = [
        1, 1, 1,
       -1, -1, 1,
       -1, 1, -1,
        1, -1, -1
  ];

  // 面
  var indices = [
        2, 1, 0,
        0, 3, 2,
        1, 3, 0,
        2, 3, 1
   ];
 

//var polyhedron = createMesh(new THREE.PolyhedronGeometry(vertices, indices));
  var geometry = new THREE.PolyhedronGeometry(vertices, indices);
  var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
 var polyhedron = new THREE.Mesh(geometry, material);
  polyhedron.position.z = -5;
  scene.add(polyhedron);

  // 平行光源
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  var directionalLight3 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(0, 0, 5);
  directionalLight2.position.set(0, 5, 0);
  directionalLight2.position.set(0, -5, -0); 
 // シーンに追加
  scene.add(directionalLight1);
  scene.add(directionalLight2);
  scene.add(directionalLight3);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

   // 回転させる
polyhedron.rotation.x += 0.01;
polyhedron.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);