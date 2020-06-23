(()=>{
	const canvas = document.querySelector('#page');
	const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.z = 2;

	const scene = new THREE.Scene();

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	const loader = new THREE.TextureLoader();

	const materials = [
		new THREE.MeshBasicMaterial({map : loader.load('./img1.jpg')}),
		new THREE.MeshBasicMaterial({map : loader.load('./img2.jpg')}),
		new THREE.MeshBasicMaterial({map : loader.load('./img3.jpg')}),
		new THREE.MeshBasicMaterial({map : loader.load('./img4.jpg')}),
		new THREE.MeshBasicMaterial({map : loader.load('./img5.jpg')}),
		new THREE.MeshBasicMaterial({map : loader.load('./img6.jpg')}),
	];

	const cube = new THREE.Mesh(geometry, materials);
	scene.add(cube);
	renderer.render(scene, camera);

	// const color = 0xFFFFFF;
 //  	const intensity = 1;
  	
  	// function lightMaker(x,y,z){
  	// 	let light = new THREE.DirectionalLight(color, intensity);
  	// 	light.position.set(x,y,z);
  	// 	return light;	
  	// }
  	
  	// scene.add(lightMaker(-1,2,4));
  	// scene.add(lightMaker(1,2,4));
  	// scene.add(lightMaker(1,-2,4));
  	// scene.add(lightMaker(-1,2,4));

  	function render(time) {
  		time *= 0.001;  // convert time to seconds

  		if (resizeRendererToDisplaySize(renderer)) {
    		const canvas = renderer.domElement;
    		camera.aspect = canvas.clientWidth / canvas.clientHeight;
    		camera.updateProjectionMatrix();
  		}

    	cube.rotation.x = time/2;
    	cube.rotation.y = time/2;
  		renderer.render(scene, camera);
  		requestAnimationFrame(render);
  	}

  	function resizeRendererToDisplaySize(renderer) {
    	const canvas = renderer.domElement;
      	const width = canvas.clientWidth;
      	const height = canvas.clientHeight;
      	const needResize = canvas.width !== width || canvas.height !== height;
      	if (needResize) {
        	renderer.setSize(width, height, false);
      	}
      	return needResize;
    }

    requestAnimationFrame(render);

})();
