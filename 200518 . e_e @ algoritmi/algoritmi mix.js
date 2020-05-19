// algoritmi MIX

// RESET

// solid().out(o0)
// solid().out(o1)
// solid().out(o2)
// solid().out(o3)

//MIX
render(o0)
render() // ALL
//////////


// osc().
solid()
  .mult(src(o1).mult(solid(),0.8)
)
  .add(src(o2).posterize(8).repeat(4,4))
  .add(o3)
// .modulate(noise([200,100,50].fast(0.5).smooth(0.9)))
.modulate(voronoi(4))
.add(o2)
// .mult(osc(12).rotate(1.57).luma(0.8),0.6)
.mult(osc(20).rotate(0.7).luma(0.99),0.4).posterize(8)
// .add(s0).scrollX(-0.45)
.mult(src(o1).mult(solid(),0.2).scale(0.28))
.scale(1.1)
.mult(solid())
.out()

render(o0)


hush()

src(o3)
// .blend(o1)
// .blend(o2)
// .scrollY(0.4,0.2)
// .mult(gradient(-1),0.6)
// .modulate(noise(3))
.modulate(shape(4).rotate(0.4))
// .blend(o3)
// .mult(o2)
.diff(o2)
.blend(o1)
.modulate(o0)
.out(o0)


// IFFR

render(o0|)

src(o3).mult(o2).diff(o1).modulate(o2).diff(o3).blend(o0)
// .diff(o0)
.out(o0)

src(o3).mult(o2)).diff(o1).modulate(o2).blend(o0).out(o0)


src(o3)
.mult(o2)
// .diff(o1)
.modulate(o3,()=>a.fft[0]*2)
// .blend(o1)
// .saturate(8.4)
.diff(o2)
.out(o0)



src(o3)
.contrast(4)
// .mult(o2)
.diff(o1)
// .modulate(o2)
// .modulate(o0)
.blend(o3)
.mult(o3, ()=>a.fft[0])
.mult(o3)
.out(o0)

render(o0)


//STROBE
src(o3)
.mult(o2,2)
// .contrast(()=> a.fft[0]*0.5)
.diff(o2)
.modulate(o3,0.5 + a.fft[4])
// .blend(o0)
// .blend(o3,0.4 - a.fft[1]*0.125)
.diff(
  o2,()=> a.fft[5] )
.rotate(1.3 + a.fft[1])
// .diff(o1)
.out(o0)

render(o0)

//BRIGHT
// FEEDBACK
src(o3)
// .mult(o2)
.diff(o1)
.modulate(o2)
.diff(o3)
.blend(o0,()=>a.fft[0])
.add(solid(1,0,0,()=>a.fft[0]*1.9))
.modulate(noise([2,4,1].fast(0.9)))
// .diff(colorama(4))
.rotate([1,2,0.5,2])
// .modulate(shape(4,[0.6,0.3]fast(0.4)).rotate(({time})=>Math.sin(time)*[0.45]))
// .diff(shape(4,[0.4,0.1]fast(0.3)).rotate(({time})=>Math.sin(time)*[0.45]))

.out(o0)

src(o1).modulate(o3).diff(o3,()=>a.fft[1]*4).out(o0) //CHROME GEOMETRY CRAZY RAIN

src(o3).mult(o2).diff(o1).modulate(o2).blend(o0)
.out(o0)

render()

src(o3).mult(o2).diff(o1).modulate(o2).diff(o3).blend(o0).out(o2)

src(o2).diff(o3).diff(o2).modulate(o2)?.out(o2)

//
// src(o3)
// // .mult(o2)
// // .diff(o1)
// .modulate(o2,0.5 + a.fft[0])
// .blend(o0).blend(o0,0.04 + a.fft[5])
// .diff(o2,()=> a.fft[7] )
// // .scale(1.3 + a.fft[2])
// .out(o0)
//
//

//
src(o1).mult(o3).modulate(o2).blend(o3).out(o0) //MINIMA
//
//
// src(o0).modulate(o3).out(o0) //RAIN
// //++

//
//
//
//
//
src(o1).modulate(o3).diff(o1).out(o0) //CHROME GEOMETRY CRAZY RAIN
// src(o2).modulate(o1).modulate(o1).out(o0) //lines DOuble MOD
src(o2).modulate(o3).modulate(o1).diff(o2).out(o0) //lines DOuble MOD
src(o1).modulate(o2).mult(o2).out(o0) //3
src(o1).modulate(o2).mult(o2).modulate(o2).mult(o3).out(o0) //4 LINE
// src(o0).modulate(o3).out(o0) //RAIN
//
//
//
//
//
//
//
//
//
//
//
// src(o1).diff(o2).out(o0)
// src(o2).diff(o3).diff(o2).modulate(o2).out(o0)
// src(o1).diff(o2).diff(o3).out(o0)
// src(o3).mult(o2).diff(o1).modulate(o2).diff(o3).blend(o0).out(o0)
// src(o2).mult(o1).diff(o2).modulate(o3).mult(o3).out(o0)
//
// src(o1).mult(o2).blend(o3).out(o0)
//
// src(o1).mult(o3).out(o0)
// src(o1).mult(o3).modulate(o3).mult(o3).out(o0)
// src(o1).mult(o3).diff(o1).diff(o3).mult(o2).out(o0)
// src(o1).mult(o3).blend(o3).out(o0)
// src(o2).diff(o2).modulate(o3).diff(o1).blend(o3).mult(o3).modulate(o2).out(o0)
//
// src(o3).diff(o1).modulate(o1).mult(o2).modulate(o2).out(o0) //RAIN
// src(o0).modulate(o3).out(o0) //RAIN
//
// src(o0).modulate(o1).out(o0) //RAIN
// // src(o0).modulate(o1).out(o0) //RAIN
//
//
//
//
//
//   src(o1).modulate(o3).diff(o1).out(o0) //CHROME GEOMETRY CRAZY RAIN
//   src(o2).modulate(o1).modulate(o1).out(o0) //lines DOuble MOD
//   src(o2).modulate(o3).modulate(o1).diff(o2).out(o0) //lines DOuble MOD
//   src(o1).modulate(o2).mult(o2).out(o0) //3
//   src(o1).modulate(o2).mult(o2).modulate(o2).mult(o3).out(o0) //4 LINE
//   src(o0).modulate(o3).out(o0) //RAIN
