// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var i=function(r){return r===e||r===u},o=Math.floor,f=o;var a=function(r){return f(r)===r},c=a;var v=function(r){return c(r/2)};var y=function(r){return v(r>0?r-1:r+1)},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return A&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,U=b;var m=function(r){return U.call(r)},h=Object.prototype.hasOwnProperty;var N=function(r,n){return null!=r&&h.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",s=N,d=I,F=b;var S=m,H=function(r){var n,t,e;if(null==r)return F.call(r);t=r[d],n=s(r,d);try{r[d]=void 0}catch(n){return F.call(r)}return e=F.call(r),n?r[d]=t:delete r[d],e},O=w()?H:S,g=O,E="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,T=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===g(r)},G=j;var L=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=T(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var M="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},P=L()?M:W,V=O,Y="function"==typeof Float64Array;var _="function"==typeof Float64Array?Float64Array:null,q=function(r){return Y&&r instanceof Float64Array||"[object Float64Array]"===V(r)},x=_;var k=function(){var r,n;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),r=q(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var or=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:or()?ar:cr,uint8:rr};(fr=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(fr.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=P,wr={HIGH:yr,LOW:lr},br=new C(1),Ur=new Ar(br.buffer),mr=wr.HIGH,hr=wr.LOW;var Nr=function(r,n){return br[0]=n,r[0]=Ur[mr],r[1]=Ur[hr],r};var Ir=function(r,n){return 1===arguments.length?Nr([0,0],r):Nr(r,n)},sr=P,dr=!0===pr?0:1,Fr=new C(1),Sr=new sr(Fr.buffer);var Hr=function(r,n){return Fr[0]=r,Sr[dr]=n>>>0,Fr[0]},Or=Hr;var gr=function(r){return 0|r},Er=P,jr=!0===pr?1:0,Tr=new C(1),Gr=new Er(Tr.buffer);var Lr,Mr,Wr=function(r){return Tr[0]=r,Gr[jr]};!0===pr?(Lr=1,Mr=0):(Lr=0,Mr=1);var Pr=P,Vr={HIGH:Lr,LOW:Mr},Yr=new C(1),_r=new Pr(Yr.buffer),qr=Vr.HIGH,xr=Vr.LOW;var kr=function(r,n){return _r[qr]=r,_r[xr]=n,Yr[0]},zr=kr,Br=Ir,Cr=Wr,Dr=zr,Jr=[0,0];var Kr=function(r,n){var t,e;return Br(Jr,r),t=Jr[0],t&=2147483647,e=Cr(n),Dr(t|=e&=2147483648,Jr[1])},Qr=y,Rr=Kr,Xr=t,Zr=n;var $r=function(r,n){return n===Xr?Zr:n===Zr?0:n>0?Qr(n)?r:0:Qr(n)?Rr(Zr,r):Zr},rn=Wr;var nn=function(r,n){return(2147483647&rn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},tn=p,en=n;var un=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tn(r)<1==(n===en)?0:en},on=P,fn=!0===pr?1:0,an=new C(1),cn=new on(an.buffer);var vn=function(r,n){return an[0]=r,cn[fn]=n>>>0,an[0]};var yn=Wr,ln=Or,pn=vn,An=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=[1,1.5],bn=[0,.5849624872207642],Un=[0,1.350039202129749e-8];var mn=Or,hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nn=i,In=r,sn=p;var dn=function(r,n){return In(n)||Nn(n)?(r[0]=n,r[1]=0,r):0!==n&&sn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Fn=Wr;var Sn=function(r){var n=Fn(r);return(n=(2146435072&n)>>>20)-1023|0},Hn=n,On=t,gn=r,En=i,jn=Kr,Tn=function(r,n){return 1===arguments.length?dn([0,0],r):dn(r,n)},Gn=Sn,Ln=Ir,Mn=zr,Wn=[0,0],Pn=[0,0];var Vn=function(r,n){var t,e;return 0===n||0===r||gn(r)||En(r)?r:(Tn(Wn,r),n+=Wn[1],(n+=Gn(r=Wn[0]))<-1074?jn(0,r):n>1023?r<0?On:Hn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ln(Pn,r),t=Pn[0],t&=2148532223,e*Mn(t|=n+1023<<20,Pn[1])))};var Yn=Wr,_n=vn,qn=Or,xn=gr,kn=Vn,zn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Bn=r,Cn=y,Dn=i,Jn=a,Kn=l,Qn=p,Rn=Ir,Xn=Or,Zn=gr,$n=t,rt=n,nt=$r,tt=nn,et=un,ut=function(r,n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b,U,m,h,N,I,s;return N=0,t<1048576&&(N-=53,t=yn(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(I=1048575&t|0),I<=235662?s=0:I<767610?s=1:(s=0,N+=1,t-=1048576),e=524288+(t>>1|536870912),f=(h=1/((n=pn(n,t))+(c=wn[s])))*((m=n-c)-(o=ln(u=m*h,0))*(a=pn(0,e+=s<<18))-o*(n-(a-c))),U=(i=u*u)*i*An(i),a=ln(a=3+(i=o*o)+(U+=f*(o+u)),0),w=(p=-7.028461650952758e-9*(y=ln(y=(m=o*a)+(h=f*a+(U-(a-3-i))*u),0))+.9617966939259756*(h-(y-m))+Un[s])-((A=ln(A=(l=.9617967009544373*y)+p+(v=bn[s])+(b=N),0))-b-v-l),r[0]=A,r[1]=w,r},it=function(r,n){var t,e,u,i,o;return t=(o=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*hn(u)))-((e=mn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r},ot=function(r,n,t){var e,u,i,o,f,a,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=i=_n(0,e)),a=(f=.6931471805599453*(t-((i=qn(i=t+n,0))-n))+-1.904654299957768e-9*i)-((c=(o=.6931471824645996*i)+f)-o),u=c-(i=c*c)*zn(i),r=Yn(c=1-(c*u/(u-2)-(a+c*a)-c)),r=xn(r),c=(r+=v<<20>>>0)>>20<=0?kn(c,v):_n(c,r)},ft=1e300,at=1e-300,ct=[0,0],vt=[0,0];var yt=function r(n,t){var e,u,i,o,f,a,c,v,y,l,p,A,w,b;if(Bn(n)||Bn(t))return NaN;if(Rn(ct,t),f=ct[0],0===ct[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Kn(n);if(-.5===t)return 1/Kn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Dn(t))return et(n,t)}if(Rn(ct,n),o=ct[0],0===ct[1]){if(0===o)return nt(n,t);if(1===n)return 1;if(-1===n&&Cn(t))return-1;if(Dn(n))return n===$n?r(-0,-t):t<0?0:rt}if(n<0&&!1===Jn(t))return(n-n)/(n-n);if(i=Qn(n),e=2147483647&o|0,u=2147483647&f|0,c=f>>>31|0,a=(a=o>>>31|0)&&Cn(t)?-1:1,u>1105199104){if(u>1139802112)return tt(n,t);if(e<1072693247)return 1===c?a*ft*ft:a*at*at;if(e>1072693248)return 0===c?a*ft*ft:a*at*at;p=it(vt,i)}else p=ut(vt,i,e);if(l=(t-(v=Xn(t,0)))*p[0]+t*p[1],y=v*p[0],Rn(ct,A=l+y),w=Zn(ct[0]),b=Zn(ct[1]),w>=1083179008){if(0!=(w-1083179008|b))return a*ft*ft;if(l+8008566259537294e-32>A-y)return a*ft*ft}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|b))return a*at*at;if(l<=A-y)return a*at*at}return a*(A=ot(w,y,l))},lt=yt,pt=Math.ceil,At=o,wt=pt;var bt=function(r){return r<0?wt(r):At(r)},Ut=r,mt=i,ht=lt,Nt=p,It=bt,st=1e308;var dt=r,Ft=i,St=lt,Ht=bt,Ot=function(r,n){var t,e;return Ut(r)||Ut(n)||mt(n)?NaN:mt(r)||0===r||n<-324||Nt(r)>9007199254740992&&n<=0?r:n>308?0*r:n<-308?(t=ht(10,-(n+308)),mt(e=r*st*t)?r:It(e)/st/t):(t=ht(10,-n),mt(e=r*t)?r:It(e)/t)};var gt=function(r,n,t){var e,u;return dt(r)||dt(n)||dt(t)||t<=0||Ft(n)||Ft(t)?NaN:Ft(r)||0===r?r:10===t?Ot(r,n):0===n||1===t?Ht(r):(u=St(t,-n),Ft(u)?r:(e=Ht(r*u)/u,Ft(e)?r:e))};export{gt as default};
//# sourceMappingURL=mod.js.map
