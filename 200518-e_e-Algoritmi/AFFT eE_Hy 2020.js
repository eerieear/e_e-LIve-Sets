a.show()
//SOUND

// a.setSmooth(0.6)
a.setCutoff(1)
//
a.setScale (1.8) //VERY SENSITIVE THRESHOLD
a.setScale (3) //LESS SENSITIVE THRESHOLD
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 3
a.settings[3].cutoff = 4
a.settings[4].cutoff = 5
a.settings[5].cutoff = 6
// a.settings[6].cutoff = 7
// a.settings[7].cutoff = 8
// a.settings[8].cutoff = 9
//
// SINGLE WAVE
//
osc(4).color(()=> a.fft[1]*2,0,()=> a.fft[0]/1.5)
.add(shape(2).color(2,2,2).scale(0.006).rotate(0.000001))
.modulate(noise(()=> a.fft[1]*10 +0.01).scale(5,0.1))
.scale(1.2,1,3)
.repeat(()=> a.fft[0]*0.8)
.modulate(o2,()=> a.fft[2]*0.5)
.posterize(2)
// .luma(0.8)
.out(o2)

render(o0)
hush()




render(o2)
// MULTIPLY SINGLE WAVE

osc(3002).color(0,0,0)
.add(shape(2).color(2,2,2).scale(0.3).rotate(0.000001))
.modulate(noise(()=> a.fft[4]*10 +0.01).scale(4,0.3))
.scale(1.2,1,3)
.repeat(1,2)
.add(shape(2)).colorama(0,1,1).modulate(o0, 0.6).diff(o0,0.3).contrast(0.8).luma(0.55)
.out(o2)

// Firefly Sinle WAVE

osc(3000).color(0,0,0)
.add(shape(2).color(2,2,2).scale(0.3).rotate(0.01))
.modulate(noise a.fft[0]*100 +0.01).scale(8,0.3))
.scale(1.2,1,3)
.repeat(1,2)
.add(shape(2)).colorama(0,1,1).modulate(o0, 0.8).diff(o0,0.3).contrast(0.8).luma(0.55)
.out(o2)

//Strobe Single Wave
osc(3000).color(2,0,0)
// .add(shape(2).color(2,2,2).scale(0.03).rotate(0.01))
.modulate(noise(()=> a.fft[0]*100 +0.01).scale(8,0.3))
.colorama(1,2)
// .scale(1.2,1,3)
.repeat(8,4)
// .add(shape(2)).colorama(()=> a.fft[1]*3,()=> a.fft[2]*2,()=> a.fft[0]*1).modulate(o0, 0.8).scale(2).diff(o0,0.3).contrast(0.8).luma(0.5)
.out(o2)

//////////Y
shape(14)
// .repeat(15, 8, 0.0005)
// .kaleid(2)
.add(osc(18).colorama(8).color(1,2,4))
.diff(o1)
.rotate(()=> a.fft[4]*0.1 -0.2)
  .modulate(noise(0.51))
  .modulate(o1).diff(o2)
  // .modulate(noise(4))
  // .modulate(o2).diff(o1)
.scrollY(-0.032,-0.02)
// .blend(o3)
.modulate(o3)
.mult(o3)
.add(shape(2).color(2,1,0.5).repeat(2,8)
.add(shape(4).scale(()=> a.fft[4]*8).color(0,1,0.5))
     .scrollY(()=> a.fft[4]*0.2 -0.1,-0.02)
   )
 .scale(()=> a.fft[1]*0.2 -1)
// .modulate(o1)
// .scale(()=> a.fft[3]*2 -1)
.scrollY(-2,-0.2)
.rotate(-0.1,()=> a.fft[3]*0.02 -0.1)
.out(o2)


//////////Y

shape(100,0.1,3)
shape(2,0.01,1)
.scale(0.6,0.6)
.scale(0.5)
// .modulateScale(()=> a.fft[4])
.rotate(()=> a.fft[2]*[0.125])
.rotate(()=> a.fft[1]*[-0.135])
// shape(100,0.01,1)
  .scale(()=>a.fft[0]*0.6,()=>a.fft[1]*2).modulateScale(osc(1,1))
// shape(3,0.01,1)
.scale(0.6,0.7)
.modulateScale(osc(1,1))
  .diff(o2,0.5)
  .out(o2)




  osc(1,1,0.2)
    .color((  )=>a.fft[0]*3,()=>a.fft[6]*1,()=>a.fft[3]*1)
    .rotate(1,0.5)
    .modulateRotate(o0).mult(o1,1)
  .kaleid(100)
  osc(12,()=>a.fft[0]*0.1)
  // .kaleid(100)
    .modulate(noise(5))
    // .out(o2)
    shape(100,0.01,1)
        shape(4,0.01)
          .scale(()=> a.fft[0]*0.25)
          .rotate(()=> a.fft[1]*0.1 -0.2)
        shape(100,0.01,1)
        // .scale(0.6,0.6)
        shape(3,0.01,1)
    .scale(()=> a.fft[3]*8)
  //   .modulateScale(osc(1,1))
  //   // .modulateScale(0.1,0.5 )
    .diff(o3)
    .modulate(o1)
    // .diff(o3)
    .out(o2)





osc(1,2,0.2)
  .color(()=>a.fft[2]*2,()=>a.fft[6]*3,()=>a.fft[8]*1)
  .scale(0.5)
  .rotate(()=>a.fft[3]*4,0.15)
  .modulateRotate(o1).mult(o1,1)
  .diff(o3).mult(o1)
// .out()
osc(12,()=>a.fft[0]*0.001).kaleid(100)
  .modulate(noise(3)).modulate(o1).diff(o3)
  	.out(o2)







//HEAVY
///////
shape(14).scale(()=> a.fft[0]*2 + 0.125)
  // .repeat(15, 8, 0.0005)
.kaleid(2)
.add(osc(8)
.colorama(1,0.25)
.color(2,3,4)
)
.diff(o1).rotate(()=> a.fft[2]*0.01 -0.2)
  .modulate(noise(3)).modulate(o1).diff(o2)//\\
  // .modulate(noise(4)).modulate(o2).diff(o1)//
.scrollY(-0.32,-0.2)
// .blend(o3)
// .modulate(o3)
.diff(o3)
  // .add(shape(2).color(2,1,0.5).repeat(-2,8)
     .add(shape(4).scale(()=> a.fft[0]*9).color(0,1,0.5))
     // .scrollY(()=> a.fft[5]*0.2 -0.1,-0.02))
  	 .scale(()=> a.fft[1]*0.2 -1)
// .modulate(o1)
.scale(()=> a.fft[3]*2 -1)
// .scrollY(-2,-0.2)
// .rotate(-0.1,()=> a.fft[3]*0.02 -0.1)
.out(o2)
