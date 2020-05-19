//SOURCES SCREEN

ss= () => shape([8.44,3.44,4.44,2.44].smooth(0.2).fast(0.4),0.18).scale(0.7)
//
s0.initScreen(3)
src(s0)
.mult(solid(),0.15)
//
.scale(1.4)
.scrollX(-0.5)
.scrollY(0)
// .out()
.diff(ss().scale(()=> a.fft[0]*2.5),0.12)
.diff(ss().rotate(1.57).scale(()=> a.fft[3]*7.5),0.2)
.add(ss().rotate(0.1,0.05))
// .diff(shape(3.44,0.18))
// .blend(solid(0.4),0.3)
// .mult(osc(([10,2].fast(0.025).smooth(0.9)),0.04).luma(0.9))
// .diff(gradient(1.2,0.5).posterize(4))
// .modulate(o2,0.05)
.add(s0,0.85) // Modulate another
// .modulate(noise(0.48,0.1))
.diff(s0)
// .saturate(3)
.modulate(o2)
.mult(solid(),0.2)
.out(o3)

render(o3)

//
src(s0)
.blend(o1)
// .mult(o2)
.diff(o2,0.2)
.diff(o1)
// .blend(solid(),[0.4,0.5,0.4].fast(0.03))
.thresh(0.6)
.out(o3)

// SOURCES video

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true

//
vid.src = '/Volumes/DATA/e_e/IMAGEN/webm/webm ee/5.webm'

s3.init({src: vid})
src(s3)
.diff(
  shape(
    (4),4.2).scale(0.18)
    .diff((osc(9)))
    .diff(shape(
      (4),4.2).scale([0.1,0.13,0.5]))
  )
// .add(gradient(2))
.modulate(o1)
// .mult(o1)
.diff(o3)
.out(o3)
