f= 2//color iteration frequency
sm= 0.5 //smooth iteration 0-1
r= ()=> [1,1,0,1,0].fast(f).smooth(sm)
g= ()=> [0,0,0,0,0].fast(f).smooth(sm)
b= ()=> [0,1,0.5,0,1].fast(f).smooth(sm)
//
s= ()=>
shape(4)
.scrollX([-0.5,-0.2,0.3,-0.1,-0.1].smooth(0.1).fast(0.3))
.scrollY([0.25,-0.2,0.3,-0.1,0.2].smooth(0.9).fast(0.15))
//
solid()
.layer(solid(r(),g(),b())
.add(gradient(3,0.05).rotate(0.05,-0.2).posterize(2).contrast(0.6),[1,0,1,0.5,0,0.6].smooth(0.9))
.add(s())
.mult(s().scale(0.8).scrollX(0.01).scrollY(-0.01).rotate(0.2,0.06).add(gradient(3).contrast(0.6),[1,0,1,0.5].smooth(0.9),0.5)
     )
// .blend(s().scale(3).scrollX(-0.01).scrollY(0.01).rotate(-0.2,-0.06).add(gradient(6).contrast(0.2),[1,0,0.5,0.5].smooth(0.9),1)
     // )
.diff(s().modulate(shape(500)).scale([1.7,1.2].smooth(0.9).fast(0.05),1).mult(o0,0.5).repeat(([1,4].smooth(0).fast(0.5)))
     )
.diff(s().modulate(shape(500)).scale([0.7,0.2].smooth(0.9).fast(0.25),[0,1,0,1,0,0,1,0].smooth(0.9).fast(0.25))
))
.mult(s().modulate(shape(3).repeat([2,4,8,4,2].smooth(0.9)).kaleid(2)).scale([1.7,1.2].smooth(0.9).fast(0.25),[0,1,0,1,0,0,1,0].smooth(0.9).fast(0.25)))
.mult(solid(),0.5) //comment for high contrast version
.scale(1.3)
.out(o1)

noise(4).posterize(8).luma(0.7).out(o2)
