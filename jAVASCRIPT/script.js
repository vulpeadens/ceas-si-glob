c=document.querySelector('#c')
c.width  = 1920
c.height = 1080
x=c.getContext('2d')
S=Math.sin
C=Math.cos
Rn=Math.random
R = function(r,g,b,a) {
  a = a === undefined ? 1 : a;
  return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
};
t=go=0
rsz=window.onresize=()=>{
  setTimeout(()=>{
    if(document.body.clientWidth > document.body.clientHeight*1.77777778){
      c.style.height = '100vh'
      setTimeout(()=>c.style.width = c.clientHeight*1.77777778+'px',0)
    }else{
      c.style.width = '100vw'
      setTimeout(()=>c.style.height = c.clientWidth/1.77777778 + 'px',0)
    }
    c.width=1920
    c.height=c.width/1.777777778
  },0)
}
rsz()

Draw=()=>{
  if(!t){
    R=(Rl,Pt,Yw,m)=>{
      M=Math
      A=M.atan2
      H=M.hypot
      X=S(p=A(X,Y)+Rl)*(d=H(X,Y))
      Y=C(p)*d
      X=S(p=A(X,Z)+Yw)*(d=H(X,Z))
      Z=C(p)*d
      Y=S(p=A(Y,Z)+Pt)*(d=H(Y,Z))
      Z=C(p)*d
      if(m){
        X+=oX
        Y+=oY
        Z+=oZ
      }
    }
    Q=()=>[c.width/2+X/Z*800,c.height/2+Y/Z*800]
    I=(A,B,M,D,E,F,G,H)=>(K=((G-E)*(B-F)-(H-F)*(A-E))/(J=(H-F)*(M-A)-(G-E)*(D-B)))>=0&&K<=1&&(L=((M-A)*(B-F)-(D-B)*(A-E))/J)>=0&&L<=1?[A+K*(M-A),B+K*(D-B)]:0

    stroke=(scol,fcol)=>{
      if(scol){
        x.closePath()
        x.globalAlpha=.2
        x.strokeStyle=scol
        x.lineWidth=Math.min(500, 500/Z)
        x.stroke()
        x.globalAlpha=1
        x.lineWidth/=4
        x.stroke()
      }
      if(fcol){
        x.fillStyle=fcol
        x.fill()
      }
    }

    iBc = 70
    B=Array(iBc).fill().map((v,i)=>{
      X = Rn()-.5
      Y = Rn()-.5
      Z = Rn()-.5
      return [X,Y,Z]
    })
    for(m=100;m--;) B.map(v=>{
      tx = v[0]
      ty = v[1]
      tz = v[2]
      B.map(q=>{
        X=q[0]
        Y=q[1]
        Z=q[2]
        d=5000+((Math.hypot(X-tx,Y-ty,Z-tz))*100)**3
        tx+=(tx-X)*1e3/d
        ty+=(ty-Y)*1e3/d
        tz+=(tz-Z)*1e3/d
      })
      d=Math.hypot(tx,ty,tz)
      tx/=d
      ty/=d
      tz/=d
      v[0]=tx
      v[1]=ty
      v[2]=tz
    })

    iPv = .25, iPc = 400
    P=Array(iPc).fill().map((v,i)=>{
      X = Rn()-.5
      Y = Rn()-.5
      Z = Rn()-.5
      vx = (Rn()-.5) * iPv
      vy = (Rn()-.5) * iPv
      vz = (Rn()-.5) * iPv
      return [X, Y, Z, vx, vy, vz]
    })
    star1 = new Image()
    star1.src = 'https://srmcgann.github.io/temp/stars/star7.png'
    star2 = new Image()
    star2.src = 'https://srmcgann.github.io/temp/stars/star3.png'
    go=false
    bg = new Image()
    bg.onload=()=>{
      go=true
    }
    bg.src='https://srmcgann.github.io/drawings/rotated/iZkFk7H_rotated.jpg'
  }

  if(go){
    x.globalAlpha=.3
    x.drawImage(bg,0,0,c.width,c.height)
    x.globalAlpha=1
    x.fillStyle='#0004'
    x.fillRect(0,0,c.width,c.height)
    oX=oY=0, oZ=2
    Rl=0,Pt=-t/3,Yw=S(t/8)*10
    
    B.map((v,i)=>{
      X=v[0]
      Y=v[1]
      Z=v[2]
      R(Rl,Pt,Yw,1)
      if(Z>0){
        l=Q()
        s=Math.min(2e3,175/Z**1.5)
        x.drawImage(star2,l[0]-s/2,l[1]-s/2,s,s)
      }
    })

    grav = 5000000000000
    ls=1-S(t/2)/1.13
    P.map(v=>{
      tx=v[0]*ls
      ty=v[1]*ls
      tz=v[2]*ls
      B.map(q=>{
        X=q[0]
        Y=q[1]
        Z=q[2]
        d=((1+Math.hypot(tx-X,ty-Y,tz-Z))*15)**11
        v[3]+=(X-tx)*grav/d
        v[4]+=(Y-ty)*grav/d
        v[5]+=(Z-tz)*grav/d
      })
      X=(v[0]+=v[3])*ls
      Y=(v[1]+=v[4])*ls
      Z=(v[2]+=v[5])*ls
      v[3]/=1.25
      v[4]/=1.25
      v[5]/=1.25
      d=Math.hypot(v[3],v[4],v[5])
      v[3]/=d
      v[4]/=d
      v[5]/=d
      v[3]*=iPv/8
      v[4]*=iPv/8
      v[5]*=iPv/8
      R(Rl,Pt,Yw,1)
      if(Z>0){
        l=Q()
        s=Math.min(2e3,175/Z**1.5)
        x.drawImage(star1,l[0]-s/2,l[1]-s/2,s,s)
      }
    })
  }
  t+=1/60
  requestAnimationFrame(Draw)

}
Draw()