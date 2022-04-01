// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).truncb=n()}(this,(function(){"use strict";var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var i=function(r){return r===e||r===u},o=Math.floor,f=o;var a=function(r){return f(r)===r},c=a;var v=function(r){return c(r/2)};var y=function(r){return v(r>0?r-1:r+1)},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return A&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,U=w;var d=function(r){return U.call(r)},m=Object.prototype.hasOwnProperty;var h=function(r,n){return null!=r&&m.call(r,n)},s="function"==typeof Symbol?Symbol.toStringTag:"",N=h,I=s,g=w;var F=d,S=function(r){var n,t,e;if(null==r)return g.call(r);t=r[I],n=N(r,I);try{r[I]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[I]=t:delete r[I],e},H=b()?S:F,O=H,T="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,E=function(r){return T&&r instanceof Uint32Array||"[object Uint32Array]"===O(r)},G=j;var L=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=E(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var M="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},x=L()?M:W,P=H,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var k=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=H,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=H,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var or=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:or()?ar:cr,uint8:rr};(fr=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(fr.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=x,br={HIGH:yr,LOW:lr},wr=new C(1),Ur=new Ar(wr.buffer),dr=br.HIGH,mr=br.LOW;var hr=function(r,n){return wr[0]=n,r[0]=Ur[dr],r[1]=Ur[mr],r};var sr=function(r,n){return 1===arguments.length?hr([0,0],r):hr(r,n)},Nr=sr,Ir=x,gr=!0===pr?0:1,Fr=new C(1),Sr=new Ir(Fr.buffer);var Hr=function(r,n){return Fr[0]=r,Sr[gr]=n>>>0,Fr[0]},Or=Hr;var Tr=function(r){return 0|r},jr=x,Er=!0===pr?1:0,Gr=new C(1),Lr=new jr(Gr.buffer);var Mr,Wr,xr=function(r){return Gr[0]=r,Lr[Er]};!0===pr?(Mr=1,Wr=0):(Mr=0,Wr=1);var Pr=x,Vr={HIGH:Mr,LOW:Wr},Yr=new C(1),_r=new Pr(Yr.buffer),qr=Vr.HIGH,kr=Vr.LOW;var zr=function(r,n){return _r[qr]=r,_r[kr]=n,Yr[0]},Br=zr,Cr=Nr,Dr=xr,Jr=Br,Kr=[0,0];var Qr=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])},Rr=y,Xr=Qr,Zr=t,$r=n;var rn=function(r,n){return n===Zr?$r:n===$r?0:n>0?Rr(n)?r:0:Rr(n)?Xr($r,r):$r},nn=xr;var tn=function(r,n){return(2147483647&nn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},en=p,un=n;var on=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:en(r)<1==(n===un)?0:un},fn=x,an=!0===pr?1:0,cn=new C(1),vn=new fn(cn.buffer);var yn=function(r,n){return cn[0]=r,vn[an]=n>>>0,cn[0]};var ln=xr,pn=Or,An=yn,bn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=1048576,Un=[1,1.5],dn=[0,.5849624872207642],mn=[0,1.350039202129749e-8];var hn=Or,sn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nn=i,In=r,gn=p;var Fn=function(r,n){return In(n)||Nn(n)?(r[0]=n,r[1]=0,r):0!==n&&gn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Sn=function(r,n){return 1===arguments.length?Fn([0,0],r):Fn(r,n)},Hn=xr;var On=function(r){var n=Hn(r);return(n=(2146435072&n)>>>20)-1023|0},Tn=n,jn=t,En=r,Gn=i,Ln=Qr,Mn=Sn,Wn=On,xn=Nr,Pn=Br,Vn=[0,0],Yn=[0,0];var _n=function(r,n){var t,e;return 0===n||0===r||En(r)||Gn(r)?r:(Mn(Vn,r),n+=Vn[1],(n+=Wn(r=Vn[0]))<-1074?Ln(0,r):n>1023?r<0?jn:Tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,xn(Yn,r),t=Yn[0],t&=2148532223,e*Pn(t|=n+1023<<20,Yn[1])))};var qn=xr,kn=yn,zn=Or,Bn=Tr,Cn=_n,Dn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Jn=2147483647,Kn=1048575,Qn=1048576;var Rn=r,Xn=y,Zn=i,$n=a,rt=l,nt=p,tt=Nr,et=Or,ut=Tr,it=t,ot=n,ft=rn,at=tn,ct=on,vt=function(r,n,t){var e,u,i,o,f,a,c,v,y,l,p,A,b,w,U,d,m,h,s,N;return h=0,t<wn&&(h-=53,t=ln(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(s=1048575&t|0),s<=235662?N=0:s<767610?N=1:(N=0,h+=1,t-=wn),e=524288+(t>>1|536870912),f=(m=1/((n=An(n,t))+(c=Un[N])))*((d=n-c)-(o=pn(u=d*m,0))*(a=An(0,e+=N<<18))-o*(n-(a-c))),U=(i=u*u)*i*bn(i),a=pn(a=3+(i=o*o)+(U+=f*(o+u)),0),b=(p=-7.028461650952758e-9*(y=pn(y=(d=o*a)+(m=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(m-(y-d))+mn[N])-((A=pn(A=(l=.9617967009544373*y)+p+(v=dn[N])+(w=h),0))-w-v-l),r[0]=A,r[1]=b,r},yt=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*sn(u)))-((e=hn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},lt=function(r,n,t){var e,u,i,o,f,a,c,v,y;return y=((v=r&Jn|0)>>20)-1023|0,c=0,v>1071644672&&(u=kn(0,((c=r+(Qn>>y+1)>>>0)&~(Kn>>(y=((c&Jn)>>20)-1023|0)))>>>0),c=(c&Kn|Qn)>>20-y>>>0,r<0&&(c=-c),n-=u),f=(o=.6931471805599453*(t-((u=zn(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+o)-i),e=a-(u=a*a)*Dn(u),r=qn(a=1-(a*e/(e-2)-(f+a*f)-a)),r=Bn(r),a=(r+=c<<20>>>0)>>20<=0?Cn(a,c):kn(a,r)},pt=2147483647,At=1083179008,bt=1e300,wt=1e-300,Ut=[0,0],dt=[0,0];var mt=function r(n,t){var e,u,i,o,f,a,c,v,y,l,p,A,b,w;if(Rn(n)||Rn(t))return NaN;if(tt(Ut,t),f=Ut[0],0===Ut[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return rt(n);if(-.5===t)return 1/rt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Zn(t))return ct(n,t)}if(tt(Ut,n),o=Ut[0],0===Ut[1]){if(0===o)return ft(n,t);if(1===n)return 1;if(-1===n&&Xn(t))return-1;if(Zn(n))return n===it?r(-0,-t):t<0?0:ot}if(n<0&&!1===$n(t))return(n-n)/(n-n);if(i=nt(n),e=o&pt|0,u=f&pt|0,c=f>>>31|0,a=(a=o>>>31|0)&&Xn(t)?-1:1,u>1105199104){if(u>1139802112)return at(n,t);if(e<1072693247)return 1===c?a*bt*bt:a*wt*wt;if(e>1072693248)return 0===c?a*bt*bt:a*wt*wt;p=yt(dt,i)}else p=vt(dt,i,e);if(l=(t-(v=et(t,0)))*p[0]+t*p[1],y=v*p[0],tt(Ut,A=l+y),b=ut(Ut[0]),w=ut(Ut[1]),b>=At){if(0!=(b-At|w))return a*bt*bt;if(l+8008566259537294e-32>A-y)return a*bt*bt}else if((b&pt)>=1083231232){if(0!=(b-3230714880|w))return a*wt*wt;if(l<=A-y)return a*wt*wt}return a*(A=lt(b,y,l))},ht=mt,st=Math.ceil,Nt=o,It=st;var gt=function(r){return r<0?It(r):Nt(r)},Ft=r,St=i,Ht=ht,Ot=p,Tt=gt,jt=1e308;var Et=r,Gt=i,Lt=ht,Mt=gt,Wt=function(r,n){var t,e;return Ft(r)||Ft(n)||St(n)?NaN:St(r)||0===r||n<-324||Ot(r)>9007199254740992&&n<=0?r:n>308?0*r:n<-308?(t=Ht(10,-(n+308)),St(e=r*jt*t)?r:Tt(e)/jt/t):(t=Ht(10,-n),St(e=r*t)?r:Tt(e)/t)};return function(r,n,t){var e,u;return Et(r)||Et(n)||Et(t)||t<=0||Gt(n)||Gt(t)?NaN:Gt(r)||0===r?r:10===t?Wt(r,n):0===n||1===t?Mt(r):(u=Lt(t,-n),Gt(u)?r:(e=Mt(r*u)/u,Gt(e)?r:e))}}));
//# sourceMappingURL=bundle.js.map
