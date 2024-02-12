



function setup() {
randomSeed(nfaRandom(0,9999999))
  noiseSeed(nfaRandom(0,9999999)) 
  a = min(400, 650)
  windX = a;
  windY = a;
  var cnv =createCanvas(400, 600);

   var a = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(a, y);
  
  noFill();
}

//------------------------------------------------------------------
dddR=nfaRandom(70,170)
raioR=nfaRandom(115,415)
numeroMaximoR=nfaRandom(5,8)

//quantdequad
noveum=nfaRandom(0.93,0.99)
vardo91=nfaRandom(1,50)
if(vardo91==50){
  noveum=0.55  
}

//grossuradoquad
str1=1
str1R=nfaRandom(0,99)
if(str1R==22){
  str1=11
}

osIf=nfaRandom(1,23)
console.log('osIf', osIf)


ifLine=nfaRandom(1,4)

//-------------------------------------------------------------------
function draw() {
  translate(windX/2,windY/2);
  
  background("#fdebd3");

  
  //70-170
  ddd = dddR;
  
  //115-415
  raio = raioR;
  redius = raio;
  
  //5-8
  numeroMaximo = numeroMaximoR;
  cabelo = 0.05;
  
  
  for(a = 0; a < PI; a+=PI/ddd){
   
    //Osif===============================
   //================
   if(osIf ==1){
      a1 = raio*tan(a);
    b1 = raio*cos(a);
     c1 = raio*tan(-a) ;
    d1 = raio*sin(a);
   }
    
    
    if(osIf ==2){
      a1 = raio/tan(a);
    b1 = raio/cos(a);
     c1 = raio/tan(-a);
    d1 = raio/sin(a);
    }
    
    if(osIf ==3){
    a1 = raio*tan(a);
    b1 = raio*cos(a);
     c1 = raio*tan(-a);
    d1 = raio/sin(a);

       }
    
    if(osIf ==4){
     a1 = raio/tan(a);
    b1 = raio*cos(a);
     c1 = raio*tan(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==5){
    a1 = raio*tan(a);
    b1 = raio/cos(a);
     c1 = raio*tan(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==6){
    a1 = raio*tan(a);
    b1 = raio*cos(a);
     c1 = raio/tan(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==7){
    a1 = raio/tan(a);
    b1 = raio*cos(a);
     c1 = raio/tan(-a);
    d1 = raio/sin(a);

       }
    
    if(osIf ==8){
     a1 = raio/cos(a);
    b1 = raio/cos(a);
     c1 = raio*tan(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==9){
    a1 = raio*cos(a);
    b1 = raio*cos(a);
     c1 = raio/tan(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==10){
    a1 = raio/sin(a);
    b1 = raio/sin(a);
     c1 = raio/sin(-a);
    d1 = raio/cos(a);

       }
    
    if(osIf ==11){
    a1 = raio*sin(a);
    b1 = raio*sin(a);
     c1 = raio*sin(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==12){
     a1 = raio*tan(a);
    b1 = raio*tan(a);
     c1 = raio*sin(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==13){
    a1 = raio/tan(a);
    b1 = raio/tan(a);
     c1 = raio*sin(-a);
    d1 = raio*sin(a);

       }
    
    if(osIf ==14){
    a1 = raio/tan(a);
    b1 = raio/tan(a);
     c1 = raio*cos(-a);
    d1 = raio*cos(a);

       }
    if(osIf ==15){
     a1 = raio/cos(a);
    b1 = raio*sin(a);
     c1 = raio*tan(-a);
    d1 = raio/cos(a);

       }
    if(osIf ==16){
    a1 = raio/tan(a);
    b1 = raio*tan(a);
     c1 = raio/tan(-a);
    d1 = raio*cos(a);

       }
    if(osIf ==17){
    a1 = raio/tan(a);
    b1 = raio*tan(a);
     c1 = raio/tan(-a);
    d1 = raio*sin(a);

       }
 
        if(osIf ==18){
      a1 = raio*tan(a);
    b1 = raio*cos(a);
     c1 = raio*tan(-a) / raio*cos(a);
    d1 = raio*sin(a);
   }
    
     if(osIf ==19){
      a1 = raio/tan(a);
    b1 = raio/cos(a);
     c1 = raio/tan(-a)+tan(a);
    d1 = raio/sin(a);
    }
    
      if(osIf ==20){
      a1 = raio/tan(a)*sin(a);
    b1 = raio/cos(a)*sin(a);
     c1 = raio/tan(-a)*sin(a);
    d1 = raio/sin(a)*sin(a);
    }
    
    if(osIf ==21){
      a1 = raio/tan(a)*cos(a);
    b1 = raio/cos(a)*cos(a);
     c1 = raio/tan(-a)*cos(a);
    d1 = raio/sin(a)*cos(a);
    }
    
     if(osIf ==22){
    a1 = raio*cos(a)*tan(a);
    b1 = raio*tan(a)*tan(a);
     c1 = -raio*sin(-a)*tan(a);
    d1 = raio/cos(a)*sin(a);

       }
     if(osIf ==23){
    a1 = raio*sin(a)*cos(a);
    b1 = raio*sin(a)*cos(a);
     c1 = raio*sin(-a)*cos(a);
    d1 = raio*sin(a)*cos(a);

       }
    if(osIf ==24){
    a1 = raio*cos(a)*sin(a);
    b1 = raio*tan(a)*sin(a);
     c1 = raio*cos(-a)*sin(a);
    d1 = raio*sin(a)*sin(a);

       }
    if(osIf ==25){
    a1 = raio*cos(a)*sin(a);
    b1 = raio*tan(a)*sin(a);
     c1 = raio/tan(-a)*sin(a);
    d1 = raio*sin(a)*sin(a);

       }
    
    
    //ifline===================
    
    if(ifLine==2){
      line(a1,b1,c1,d1);
    
    }
   
    //==============================================
     //=================================================== 
    beginShape()
    for(n = -1; n < numeroMaximo+2; n++){
      raional = noise(n,0,numeroMaximo, 0, 1);
      raionalIvrt = 1 - raional
      
      xn = a1*raional + c1*raionalIvrt
      yn = b1*raional + d1*raionalIvrt
      
    
      
      u = dist(xn,yn, 0, 0);
      uMouse = map(u, 0, raio, 1, 0)
      noi = noise(xn*cabelo, yn*cabelo)*20*uMouse
      
      if(n>0 && n<numeroMaximo){
        strokeWeight(nfaRandom(0,10));
        if(nfaRandom(0.9)){
          
          stroke(random(paletadecores))
          strokeWeight(1);
          rect(noise(xn+noi,yn,nfaRandom(0,11)))
          strokeWeight(3)
          
          
        }else{
          stroke(0);
        }
        point(noise(xn+noi,yn));
        
        //91-99
        if(nfaRandom(0,1)>noveum && a>PI/5 && a<PI-PI/5){
          strokeWeight(str1);
          
          //rect, cicle
          rect(xn+noi+10,yn,xn+noi,yn)
        }
        
 
      }
      curveVertex(xn+noi,yn)
    }
    stroke(0)
    strokeWeight(1)
    endShape()
  }
  
  granuladeza = 50
  
  loadPixels();
let boatDensidade = pixelDensity();
let imagenzada = 4 * (width * boatDensidade) * (height * boatDensidade);
for (let l = 0; l < imagenzada; l += 4) {
  granuladeza = map(noise(l/1000),0,1,-50,50)
  granuladeza = nfaRandom(-50,50)
  pixels[l] = pixels[l]+granuladeza;
  pixels[l + 1] = pixels[l+1]+granuladeza;
  pixels[l + 2] = pixels[l+2]+granuladeza;
  pixels[l + 3] = pixels[l+3]+granuladeza;
}
updatePixels();
 
  noLoop();
}