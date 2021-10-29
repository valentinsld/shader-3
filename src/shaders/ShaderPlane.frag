varying float vElevation;
varying float vRed;
varying float vGreen;
varying float vBlue;

void main()
{
  vec3 color = vec3(vElevation);

  // gl_FragColor.rgb = color;
  gl_FragColor.r = vRed;
  gl_FragColor.g = vGreen;
  gl_FragColor.b = vBlue;
  gl_FragColor.a = 1.0;
}