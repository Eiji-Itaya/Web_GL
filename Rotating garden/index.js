var init = function () {

    var width = 800;
    height = 600;
    //let rot = 0; // 角度

// このサンプルでは、Z軸は手前が正、奥行きがマイナス

  // レンダラーを作成
    var renderer = new THREE.WebGLRenderer(
       // canvas: document.querySelector('#myCanvas')
    );
   // renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

// レンダラー：シャドウを有効にする
  //enabledは許可するということ
  renderer.shadowMap.enabled = true;
   // light.castShadow = true; 
  // シーンを作成
//オブジェクト構造
  var scene = new THREE.Scene();

  // カメラを作成(画角、縦横比、カメラからの距離前、後）
    var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
　// カメラの座標
　camera.position.set(0,2,6);

//カメラの方向
camera.lookAt(new THREE.Vector3(0, 1, 0));

 //6面分のテクスチャー読み込み
  var materials = [
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
     new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("renga.png")}),
  ];
 
   var material = new THREE.MeshFaceMaterial(materials); // マテリアルをセット

// テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture1 = textureLoader.load("tex3.jpg");
  var mat1 = new THREE.MeshPhongMaterial();
  mat1.map = texture1;

// バンプマップ読み込み
  var bump1 = textureLoader.load("bmap3.jpg");
  mat1.bumpMap = bump1;
 //デコボコ感の大きさ
    mat1.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture2 = textureLoader.load("tex4.jpg");
    var mat2 = new THREE.MeshPhongMaterial();
    mat2.map = texture2;

    // バンプマップ読み込み
    var bump2 = textureLoader.load("bmap4.jpg");
    mat2.bumpMap = bump2;
    //デコボコ感の大きさ
    mat2.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture3 = textureLoader.load("tex5.jpg");
    var mat3 = new THREE.MeshPhongMaterial();
    mat3.map = texture3;

    // バンプマップ読み込み
    var bump3 = textureLoader.load("bmap5.jpg");
    mat3.bumpMap = bump3;
    //デコボコ感の大きさ
    mat3.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture4 = textureLoader.load("tex6.jpg");
    var mat4 = new THREE.MeshPhongMaterial();
    mat4.map = texture4;

    // バンプマップ読み込み
    var bump4 = textureLoader.load("bmap6.jpg");
    mat4.bumpMap = bump4;
    //デコボコ感の大きさ
    mat4.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture5 = textureLoader.load("stone.jpg");
    var mat5 = new THREE.MeshPhongMaterial();
    mat5.map = texture5;

    // バンプマップ読み込み
    var bump5 = textureLoader.load("stone-bump.jpg");
    mat5.bumpMap = bump5;
    //デコボコ感の大きさ
    mat5.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture6 = textureLoader.load("tex2.jpg");
    var mat6 = new THREE.MeshPhongMaterial();
    mat6.map = texture6;

    // バンプマップ読み込み
    var bump6 = textureLoader.load("bmap2.jpg");
    mat6.bumpMap = bump5;
    //デコボコ感の大きさ
    mat6.bumpscale = 0.1;

    // テクスチャー読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load("star.png");

     //星屑を作成します (カメラの動きをわかりやすくするため)
    createStarField();

    function createStarField() {
        // 形状データを作成
        var geometry = new THREE.Geometry();
        // マテリアルを作成
        var material = new THREE.PointsMaterial({
            // 一つ一つのサイズ
            size: 50,
            //透過するかどうか
            transparent: true,
            // transparent: false,
            //透明度
            opacity: true,
            //深さ
            //depthWrite: true,
            depthWrite: false,
            map: texture,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true,
            color: 0xffffff
        });


         //配置する範囲
        const SIZE = 3000;
        // 配置する個数
        const LENGTH = 1000;

        for (let i = 0; i < LENGTH; i++) {
            geometry.vertices.push(
                new THREE.Vector3(
                    SIZE * (Math.random() - 0.5),
                    SIZE * (Math.random() - 0.5),
                    SIZE * (Math.random() - 0.5)
                )
            );
           // geometry.colors.push(
                //new THREE.Color(Math.random() * 0xffffff)
           // );
        }



        // 物体を作成
        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
    }

    
   //箱1を作成
 var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material_b = new THREE.MeshPhongMaterial({ color: 0x0000ff });
  var box1 = new THREE.Mesh(geometry, material);
box1.castShadow = true; 
  box1.position.set(0,0.5,0);
  //シーンに入れない　scene.add(box1);

//④円柱(屋根)
var cylinderGeometry = new THREE.CylinderGeometry( 0.4,1.4,1.8 );
//上の底面の半径、下の底面の半径、高さ、何角柱か
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFF100} );
    var cylinder1 = new THREE.Mesh(cylinderGeometry, mat6);// cylinderMaterial );
cylinder1.castShadow = true;
cylinder1.position.set( 0,2,0 );

//④円柱(煙突)
var cylinderGeometry = new THREE.CylinderGeometry( 0.2,0.2,0.8 );
//上の底面の半径、下の底面の半径、高さ、何角柱か
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x745030} );
    var cylinder2 = new THREE.Mesh(cylinderGeometry,mat5);// cylinderMaterial );
cylinder2.castShadow = true;
cylinder2.position.set( 0.5,2.5,0 );
//scene.add( cylinder );


//④円柱(山)
var cylinderGeometry = new THREE.CylinderGeometry( 0.4,1.7,3.4 );
//上の底面の半径、下の底面の半径、高さ、何角柱か
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
    var cylinder3 = new THREE.Mesh(cylinderGeometry, mat2);//cylinderMaterial );
cylinder3.castShadow = true;
cylinder3.position.set( -2,1.5,-3 );


//③角すい?円すい(木)
  var coneGeometry = new THREE.CylinderGeometry(0, 1, 2, 8 ); 
  //半径、高さ、底面の分割数
  var coneMaterial = new THREE.MeshPhongMaterial( { color: 0x004E2D} );;
    var cone1 = new THREE.Mesh(coneGeometry, mat3);//coneMaterial );
cone1.castShadow = true;
  cone1.position.set( 2,3.5,3 );
  //scene.add( cone );

//④円柱(幹)
var cylinderGeometry = new THREE.CylinderGeometry( 0.2,0.2,3.2 );
//上の底面の半径、下の底面の半径、高さ、何角柱か
var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x745030} );
    var cylinder = new THREE.Mesh(cylinderGeometry, mat4);// cylinderMaterial );
cylinder.castShadow = true;
cylinder.position.set( 2,1, 3 );
//scene.add( cylinder );

    //①平面
    var planeGeometry = new THREE.PlaneGeometry(10, 10, 10);
    //var planeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000} );
    var planeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    var plane = new THREE.Mesh(planeGeometry, mat1);//planeMaterial);
    // plane.position.set( 0, Math.PI/2, 0 ) 
    //こうすると好きな軸方向に回せるよ。この場合はy軸を中心に90度回転
    //plane.rotation.set(  -Math.PI/2, 0, 0 );
    plane.receiveShadow = true;
    plane.rotation.set(-Math.PI / 2, 0, 0);
//scene.add( plane );



  //全体のオブジェクト
　//全体のオブジェクトの位置は原点にある
  const all = new THREE.Object3D(); 
  //const all = new THREE.Group()
  all.add(box1); // 箱１を追加 
  all.add(plane);
  all.add(cylinder1);
 all.add(cylinder2);
all.add(cylinder3);
  all.add(cone1);
 all.add(cylinder);
  all.position.set(0,-2,-5); 
  scene.add(all); 


  // 平行光源(色、強さ）主光源
  var directionalLightM = new THREE.DirectionalLight(0xffffff,1);
  directionalLightM.position.set(1, 1, 1);
  //ライトに影を有効する
  directionalLightM.castShadow=true;
  // シーンに追加
  scene.add(directionalLightM);

 // 照明を作成SpotLight(色, 光の強さ, 距離, 照射角, ボケ具合, 減衰率)
  var light = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.2);
  light.position.set(0,10, -5);
  //light.target.position.set( 0, 5, -100 );
  // ライトに影を有効にする
  //light.castShadow = true;
  //light.shadow.mapSize.width = 2048;
  //light.shadow.mapSize.height = 2048;
   scene.add(light);


// 平行光源(色、強さ）補助光源
  var directionalLightS = new THREE.DirectionalLight(0xffffff,0.5);
  directionalLightS.position.set(-1, -1, 1);
  //directionalLightS.castShadow=true;
  // シーンに追加
  scene.add(directionalLightS);

   
  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱1を回転させる
    //box1.rotation.x += 0.01;
    //box1.rotation.y += 0.01;

   // 箱2を回転させる
    //box2.rotation.x -= 0.01;
    //box2.rotation.y -= 0.01;

   // 全体を回転させる
    //all.rotation.x += 0.01;
    all.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);