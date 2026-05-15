export const hologramVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vNormal = normal;
    vec3 transformed = position + normal * sin(position.y * 8.0) * 0.025;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

export const hologramFragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  uniform float uTime;

  void main() {
    float scanline = sin((vUv.y + uTime * 0.08) * 80.0) * 0.08;
    float rim = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
    vec3 color = mix(vec3(0.1, 0.85, 1.0), vec3(0.55, 0.3, 1.0), vUv.y);
    gl_FragColor = vec4(color + rim + scanline, 0.55);
  }
`;
