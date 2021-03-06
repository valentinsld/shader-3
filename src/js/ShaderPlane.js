import * as THREE from 'three'

import vertexShader from '../shaders/ShaderPlane.vert'
import fragmentShader from '../shaders/ShaderPlane.frag'

class ShaderPlane {
  constructor({ scene, debug }) {
    Object.assign(this, { scene, debug })

    this.params = {
      blending: 0.012,
      moreTime: 23,
    }

    this.init()
    this.initDebug()
  }

  init() {
    // Geometry
    const waterGeometry = new THREE.PlaneGeometry(5, 5, 2048, 2048)

    // Material
    const waterMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      uniforms: {
        uTime: { value: 0 },
        uMoreTime: { value: this.params.moreTime },
        uBlending: { value: this.params.blending },
      },
    })

    // Mesh
    this.mesh = new THREE.Mesh(waterGeometry, waterMaterial)
    this.mesh.rotation.x = -Math.PI * 0.5
    this.mesh.position.y = 0.37
    this.scene.add(this.mesh)
  }

  initDebug() {
    this.debug.add(this.params, 'blending', 0, 0.05).onChange((v) => {
      this.mesh.material.uniforms.uBlending.value = v
    })
    this.debug.add(this.params, 'moreTime', 0, 50).onChange((v) => {
      this.mesh.material.uniforms.uMoreTime.value = v
    })
  }

  //
  // Update
  //
  update(time) {
    this.mesh.material.uniforms.uTime.value = time / 10
  }
}

export default ShaderPlane
