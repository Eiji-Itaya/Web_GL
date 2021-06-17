function init() {
        // サイズを指定
        const width = 960;
        const height = 540;
        let rot = 0; // 角度

        // レンダラーを作成
        const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#myCanvas')
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        // シーンを作成
        const scene = new THREE.Scene();

        // カメラを作成
        const camera = new THREE.PerspectiveCamera(45, width / height);

        // 星屑を作成します (カメラの動きをわかりやすくするため)
        createStarField();

        function createStarField() {
          // 形状データを作成
          var geometry = new THREE.Geometry();
          // マテリアルを作成
          var material = new THREE.PointsMaterial({
            // 一つ一つのサイズ
            size: 10,
            // 色
              //頂点の色つくのを許可
            vertexColors:true
              //color: 0xffffff
          });


          // 配置する範囲
          const SIZE = 3000;
          // 配置する個数
          const LENGTH = 1000;

            for (let i = 0; i < LENGTH; i++) {
              //頂点の座標
            geometry.vertices.push(
              new THREE.Vector3(
                SIZE * (Math.random() - 0.5),
                SIZE * (Math.random() - 0.5),
                SIZE * (Math.random() - 0.5)
             )
            );
                //色
	    geometry.colors.push(
              new THREE.Color(Math.random() * 0xffffff)
            );
          }



          // 物体を作成
          const mesh = new THREE.Points(geometry, material);
          scene.add(mesh);
        }

        tick();

        // 毎フレーム時に実行されるループイベントです
        function tick() {
          rot += 1;
          // ラジアンに変換する
          const radian = (rot * Math.PI) / 180;
          // 角度に応じてカメラの位置を設定
          camera.position.x = 1000 * Math.sin(radian);
          camera.position.z = 1000 * Math.cos(radian);
          // 原点方向を見つめる
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          // レンダリング
          renderer.render(scene, camera);
          requestAnimationFrame(tick);
        }
}

window.addEventListener('DOMContentLoaded', init);