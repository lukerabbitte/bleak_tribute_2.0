<script>
  import { T, useFrame } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras';
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';
  import { interactivity } from '@threlte/extras';

  interactivity();

  const scale = spring(0, { stiffness: 0.02 });

  onMount(() => {
    scale.set(1);
  });

  let rotation = 0;
  useFrame(() => {
    rotation += 0.001;
  })

  let mousedown = false;
  let rgb= [];

  function updateSphereColor(e) {
    if (mousedown) {
      rgb = [
        Math.floor((e.pageX / window.innerWidth) * 255),
        Math.floor((e.pageY / window.innerHeight) * 255),
        150
      ];
    }
  }
  window.addEventListener('mousedown', () => (mousedown = true));
  window.addEventListener('mouseup', () => (mousedown = false));
  window.addEventListener('mousemove', updateSphereColor);

  $: sphereColor = rgb.join(',');


</script>

<div class="ball_scene">
  <T.Mesh scale={$scale} on:pointerenter={() => scale.set(1.1)} on:pointerleave={() => scale.set(1)}>
    <T.SphereGeometry args={[1, 32, 32]} />
    <T.MeshStandardMaterial color={`rgb(${sphereColor})`} roughness={0.2} />
  </T.Mesh>
  
  <T.PerspectiveCamera makeDefault position={[20, 0, 10]} fov={7}>
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableDamping
      autoRotate
      autoRotateSpeed={1.5}
    />
  </T.PerspectiveCamera>
  <T.DirectionalLight intensity={0.8} position.x={10} position.y={10} />
  <T.AmbientLight intensity={0.02} />
</div>