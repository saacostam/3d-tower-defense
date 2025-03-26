var TE=Object.defineProperty;var wE=(r,e,t)=>e in r?TE(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ge=(r,e,t)=>wE(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="173",AE=0,Ud=1,bE=2,kp=1,RE=2,Vi=3,_r=0,Bn=1,Wi=2,dr=0,Rs=1,Nd=2,Fd=3,Od=4,CE=5,Or=100,IE=101,LE=102,PE=103,DE=104,UE=200,NE=201,FE=202,OE=203,ru=204,su=205,BE=206,zE=207,GE=208,HE=209,VE=210,WE=211,kE=212,XE=213,qE=214,ou=0,au=1,lu=2,Ps=3,cu=4,uu=5,hu=6,fu=7,Xp=0,YE=1,ZE=2,pr=0,KE=1,$E=2,JE=3,QE=4,jE=5,eS=6,tS=7,qp=300,Ds=301,Us=302,du=303,pu=304,cl=306,mu=1e3,zr=1001,_u=1002,vi=1003,nS=1004,ya=1005,wi=1006,Tc=1007,Gr=1008,Yi=1009,Yp=1010,Zp=1011,wo=1012,eh=1013,Hr=1014,ki=1015,Ro=1016,th=1017,nh=1018,Ns=1020,Kp=35902,$p=1021,Jp=1022,gi=1023,Qp=1024,jp=1025,Cs=1026,Fs=1027,em=1028,ih=1029,tm=1030,rh=1031,sh=1033,Ja=33776,Qa=33777,ja=33778,el=33779,gu=35840,vu=35841,xu=35842,Mu=35843,Eu=36196,Su=37492,yu=37496,Tu=37808,wu=37809,Au=37810,bu=37811,Ru=37812,Cu=37813,Iu=37814,Lu=37815,Pu=37816,Du=37817,Uu=37818,Nu=37819,Fu=37820,Ou=37821,tl=36492,Bu=36494,zu=36495,nm=36283,Gu=36284,Hu=36285,Vu=36286,iS=3200,rS=3201,im=0,sS=1,fr="",oi="srgb",Os="srgb-linear",il="linear",Ut="srgb",as=7680,Bd=519,oS=512,aS=513,lS=514,rm=515,cS=516,uS=517,hS=518,fS=519,Wu=35044,zd="300 es",Xi=2e3,rl=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,ku=180/Math.PI;function mr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function yt(r,e,t){return Math.max(e,Math.min(t,r))}function dS(r,e){return(r%e+e)%e}function Ac(r,e,t){return(1-t)*r+t*e}function Ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,o,a,c,u,h,f){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,f)}set(e,t,i,o,a,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],_=i[7],g=i[2],x=i[5],S=i[8],A=o[0],v=o[3],m=o[6],L=o[1],I=o[4],b=o[7],B=o[2],N=o[5],F=o[8];return a[0]=c*A+u*L+h*B,a[3]=c*v+u*I+h*N,a[6]=c*m+u*b+h*F,a[1]=f*A+p*L+_*B,a[4]=f*v+p*I+_*N,a[7]=f*m+p*b+_*F,a[2]=g*A+x*L+S*B,a[5]=g*v+x*I+S*N,a[8]=g*m+x*b+S*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*a*p+i*u*h+o*a*f-o*c*h}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],_=p*c-u*f,g=u*h-p*a,x=f*a-c*h,S=t*_+i*g+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=_*A,e[1]=(o*f-p*i)*A,e[2]=(u*i-o*c)*A,e[3]=g*A,e[4]=(p*t-o*h)*A,e[5]=(o*a-u*t)*A,e[6]=x*A,e[7]=(i*h-f*t)*A,e[8]=(c*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-o*f,o*h,-o*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new lt;function sm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pS(){const r=Ao("canvas");return r.style.display="block",r}const Gd={};function ws(r){r in Gd||(Gd[r]=!0,console.warn(r))}function mS(r,e,t){return new Promise(function(i,o){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function _S(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gS(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(o.r=qi(o.r),o.g=qi(o.g),o.b=qi(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=Is(o.r),o.g=Is(o.g),o.b=Is(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fr?il:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Os]:{primaries:e,whitePoint:i,transfer:il,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const At=vS();function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class xS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ao("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=qi(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MS=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Rc(o[c].image)):a.push(Rc(o[c]))}else a=Rc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ES=0;class Ln extends zs{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,i=zr,o=zr,a=wi,c=Gr,u=gi,h=Yi,f=Ln.DEFAULT_ANISOTROPY,p=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=mr(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mu:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mu:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=qp;Ln.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,o=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const h=e.elements,f=h[0],p=h[4],_=h[8],g=h[1],x=h[5],S=h[9],A=h[2],v=h[6],m=h[10];if(Math.abs(p-g)<.01&&Math.abs(_-A)<.01&&Math.abs(S-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+A)<.1&&Math.abs(S+v)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(f+1)/2,b=(x+1)/2,B=(m+1)/2,N=(p+g)/4,F=(_+A)/4,z=(S+v)/4;return I>b&&I>B?I<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(I),o=N/i,a=F/i):b>B?b<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),i=N/o,a=z/o):B<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),i=F/a,o=z/a),this.set(i,o,a,t),this}let L=Math.sqrt((v-S)*(v-S)+(_-A)*(_-A)+(g-p)*(g-p));return Math.abs(L)<.001&&(L=1),this.x=(v-S)/L,this.y=(_-A)/L,this.z=(g-p)/L,this.w=Math.acos((f+x+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SS extends zs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ln(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new om(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends SS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class am extends Ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends Ln{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=vi,this.minFilter=vi,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Co{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let h=i[o+0],f=i[o+1],p=i[o+2],_=i[o+3];const g=a[c+0],x=a[c+1],S=a[c+2],A=a[c+3];if(u===0){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u===1){e[t+0]=g,e[t+1]=x,e[t+2]=S,e[t+3]=A;return}if(_!==A||h!==g||f!==x||p!==S){let v=1-u;const m=h*g+f*x+p*S+_*A,L=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const B=Math.sqrt(I),N=Math.atan2(B,m*L);v=Math.sin(v*N)/B,u=Math.sin(u*N)/B}const b=u*L;if(h=h*v+g*b,f=f*v+x*b,p=p*v+S*b,_=_*v+A*b,v===1-u){const B=1/Math.sqrt(h*h+f*f+p*p+_*_);h*=B,f*=B,p*=B,_*=B}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],h=i[o+1],f=i[o+2],p=i[o+3],_=a[c],g=a[c+1],x=a[c+2],S=a[c+3];return e[t]=u*S+p*_+h*x-f*g,e[t+1]=h*S+p*g+f*_-u*x,e[t+2]=f*S+p*x+u*g-h*_,e[t+3]=p*S-u*_-h*g-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(o/2),_=u(a/2),g=h(i/2),x=h(o/2),S=h(a/2);switch(c){case"XYZ":this._x=g*p*_+f*x*S,this._y=f*x*_-g*p*S,this._z=f*p*S+g*x*_,this._w=f*p*_-g*x*S;break;case"YXZ":this._x=g*p*_+f*x*S,this._y=f*x*_-g*p*S,this._z=f*p*S-g*x*_,this._w=f*p*_+g*x*S;break;case"ZXY":this._x=g*p*_-f*x*S,this._y=f*x*_+g*p*S,this._z=f*p*S+g*x*_,this._w=f*p*_-g*x*S;break;case"ZYX":this._x=g*p*_-f*x*S,this._y=f*x*_+g*p*S,this._z=f*p*S-g*x*_,this._w=f*p*_+g*x*S;break;case"YZX":this._x=g*p*_+f*x*S,this._y=f*x*_+g*p*S,this._z=f*p*S-g*x*_,this._w=f*p*_-g*x*S;break;case"XZY":this._x=g*p*_-f*x*S,this._y=f*x*_-g*p*S,this._z=f*p*S+g*x*_,this._w=f*p*_+g*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],_=t[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-h)*x,this._y=(a-f)*x,this._z=(c-o)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(a-f)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-o)/x,this._x=(a+f)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+o*f-a*h,this._y=o*p+c*h+a*u-i*f,this._z=a*p+c*f+i*h-o*u,this._w=c*p-i*u-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),p=Math.atan2(f,u),_=Math.sin((1-t)*p)/f,g=Math.sin(t*p)/f;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=o*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*o-u*i),p=2*(u*t-a*o),_=2*(a*i-c*t);return this.x=t+h*f+c*_-u*p,this.y=i+h*p+u*f-a*_,this.z=o+h*_+a*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=o*h-a*u,this.y=a*c-i*h,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new D,Wd=new Co;class Io{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(a,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),wa.subVectors(this.max,so),cs.subVectors(e.a,so),us.subVectors(e.b,so),hs.subVectors(e.c,so),sr.subVectors(us,cs),or.subVectors(hs,us),Cr.subVectors(cs,hs);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Cr.z,Cr.y,sr.z,0,-sr.x,or.z,0,-or.x,Cr.z,0,-Cr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Cr.y,Cr.x,0];return!Ic(t,cs,us,hs,wa)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,cs,us,hs,wa))?!1:(Aa.crossVectors(sr,or),t=[Aa.x,Aa.y,Aa.z],Ic(t,cs,us,hs,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new D,new D,new D,new D,new D,new D,new D,new D],pi=new D,Ta=new Io,cs=new D,us=new D,hs=new D,sr=new D,or=new D,Cr=new D,so=new D,wa=new D,Aa=new D,Ir=new D;function Ic(r,e,t,i,o){for(let a=0,c=r.length-3;a<=c;a+=3){Ir.fromArray(r,a);const u=o.x*Math.abs(Ir.x)+o.y*Math.abs(Ir.y)+o.z*Math.abs(Ir.z),h=e.dot(Ir),f=t.dot(Ir),p=i.dot(Ir);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const TS=new Io,oo=new D,Lc=new D;class oh{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TS.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(oo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Lc)),this.expandByPoint(oo.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new D,Pc=new D,ba=new D,ar=new D,Dc=new D,Ra=new D,Uc=new D;class wS{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Pc.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Pc);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ba),u=ar.dot(this.direction),h=-ar.dot(ba),f=ar.lengthSq(),p=Math.abs(1-c*c);let _,g,x,S;if(p>0)if(_=c*h-u,g=c*u-h,S=a*p,_>=0)if(g>=-S)if(g<=S){const A=1/p;_*=A,g*=A,x=_*(_+c*g+2*u)+g*(c*_+g+2*h)+f}else g=a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g=-a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g<=-S?(_=Math.max(0,-(-c*a+u)),g=_>0?-a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f):g<=S?(_=0,g=Math.min(Math.max(-a,-h),a),x=g*(g+2*h)+f):(_=Math.max(0,-(c*a+u)),g=_>0?a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f);else g=c>0?-a:a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Pc).addScaledVector(ba,g),x}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const i=Bi.dot(this.direction),o=Bi.dot(Bi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,o=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,o=(e.min.x-g.x)*f),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),_>=0?(u=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),i>h||u>o)||((u>i||i!==i)&&(i=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,o,a){Dc.subVectors(t,e),Ra.subVectors(i,e),Uc.crossVectors(Dc,Ra);let c=this.direction.dot(Uc),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ar.subVectors(this.origin,e);const h=u*this.direction.dot(Ra.crossVectors(ar,Ra));if(h<0)return null;const f=u*this.direction.dot(Dc.cross(ar));if(f<0||h+f>c)return null;const p=-u*ar.dot(Uc);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,o,a,c,u,h,f,p,_,g,x,S,A,v){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,h,f,p,_,g,x,S,A,v)}set(e,t,i,o,a,c,u,h,f,p,_,g,x,S,A,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=o,m[1]=a,m[5]=c,m[9]=u,m[13]=h,m[2]=f,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=S,m[11]=A,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),c=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(o),f=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=c*p,x=c*_,S=u*p,A=u*_;t[0]=h*p,t[4]=-h*_,t[8]=f,t[1]=x+S*f,t[5]=g-A*f,t[9]=-u*h,t[2]=A-g*f,t[6]=S+x*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*p,x=h*_,S=f*p,A=f*_;t[0]=g+A*u,t[4]=S*u-x,t[8]=c*f,t[1]=c*_,t[5]=c*p,t[9]=-u,t[2]=x*u-S,t[6]=A+g*u,t[10]=c*h}else if(e.order==="ZXY"){const g=h*p,x=h*_,S=f*p,A=f*_;t[0]=g-A*u,t[4]=-c*_,t[8]=S+x*u,t[1]=x+S*u,t[5]=c*p,t[9]=A-g*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const g=c*p,x=c*_,S=u*p,A=u*_;t[0]=h*p,t[4]=S*f-x,t[8]=g*f+A,t[1]=h*_,t[5]=A*f+g,t[9]=x*f-S,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,x=c*f,S=u*h,A=u*f;t[0]=h*p,t[4]=A-g*_,t[8]=S*_+x,t[1]=_,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=x*_+S,t[10]=g-A*_}else if(e.order==="XZY"){const g=c*h,x=c*f,S=u*h,A=u*f;t[0]=h*p,t[4]=-_,t[8]=f*p,t[1]=g*_+A,t[5]=c*p,t[9]=x*_-S,t[2]=S*_-x,t[6]=u*p,t[10]=A*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,bS)}lookAt(e,t,i){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),lr.crossVectors(i,qn),lr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),lr.crossVectors(i,qn)),lr.normalize(),Ca.crossVectors(qn,lr),o[0]=lr.x,o[4]=Ca.x,o[8]=qn.x,o[1]=lr.y,o[5]=Ca.y,o[9]=qn.y,o[2]=lr.z,o[6]=Ca.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],_=i[5],g=i[9],x=i[13],S=i[2],A=i[6],v=i[10],m=i[14],L=i[3],I=i[7],b=i[11],B=i[15],N=o[0],F=o[4],z=o[8],C=o[12],T=o[1],H=o[5],Q=o[9],$=o[13],re=o[2],he=o[6],ie=o[10],pe=o[14],j=o[3],be=o[7],Le=o[11],Be=o[15];return a[0]=c*N+u*T+h*re+f*j,a[4]=c*F+u*H+h*he+f*be,a[8]=c*z+u*Q+h*ie+f*Le,a[12]=c*C+u*$+h*pe+f*Be,a[1]=p*N+_*T+g*re+x*j,a[5]=p*F+_*H+g*he+x*be,a[9]=p*z+_*Q+g*ie+x*Le,a[13]=p*C+_*$+g*pe+x*Be,a[2]=S*N+A*T+v*re+m*j,a[6]=S*F+A*H+v*he+m*be,a[10]=S*z+A*Q+v*ie+m*Le,a[14]=S*C+A*$+v*pe+m*Be,a[3]=L*N+I*T+b*re+B*j,a[7]=L*F+I*H+b*he+B*be,a[11]=L*z+I*Q+b*ie+B*Le,a[15]=L*C+I*$+b*pe+B*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],_=e[6],g=e[10],x=e[14],S=e[3],A=e[7],v=e[11],m=e[15];return S*(+a*h*_-o*f*_-a*u*g+i*f*g+o*u*x-i*h*x)+A*(+t*h*x-t*f*g+a*c*g-o*c*x+o*f*p-a*h*p)+v*(+t*f*_-t*u*x-a*c*_+i*c*x+a*u*p-i*f*p)+m*(-o*u*p-t*h*_+t*u*g+o*c*_-i*c*g+i*h*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],_=e[9],g=e[10],x=e[11],S=e[12],A=e[13],v=e[14],m=e[15],L=_*v*f-A*g*f+A*h*x-u*v*x-_*h*m+u*g*m,I=S*g*f-p*v*f-S*h*x+c*v*x+p*h*m-c*g*m,b=p*A*f-S*_*f+S*u*x-c*A*x-p*u*m+c*_*m,B=S*_*h-p*A*h-S*u*g+c*A*g+p*u*v-c*_*v,N=t*L+i*I+o*b+a*B;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=L*F,e[1]=(A*g*a-_*v*a-A*o*x+i*v*x+_*o*m-i*g*m)*F,e[2]=(u*v*a-A*h*a+A*o*f-i*v*f-u*o*m+i*h*m)*F,e[3]=(_*h*a-u*g*a-_*o*f+i*g*f+u*o*x-i*h*x)*F,e[4]=I*F,e[5]=(p*v*a-S*g*a+S*o*x-t*v*x-p*o*m+t*g*m)*F,e[6]=(S*h*a-c*v*a-S*o*f+t*v*f+c*o*m-t*h*m)*F,e[7]=(c*g*a-p*h*a+p*o*f-t*g*f-c*o*x+t*h*x)*F,e[8]=b*F,e[9]=(S*_*a-p*A*a-S*i*x+t*A*x+p*i*m-t*_*m)*F,e[10]=(c*A*a-S*u*a+S*i*f-t*A*f-c*i*m+t*u*m)*F,e[11]=(p*u*a-c*_*a-p*i*f+t*_*f+c*i*x-t*u*x)*F,e[12]=B*F,e[13]=(p*A*o-S*_*o+S*i*g-t*A*g-p*i*v+t*_*v)*F,e[14]=(S*u*o-c*A*o-S*i*h+t*A*h+c*i*v-t*u*v)*F,e[15]=(c*_*o-p*u*o+p*i*h-t*_*h-c*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,h=e.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-o*h,f*h+o*u,0,f*u+o*h,p*u+i,p*h-o*c,0,f*h-o*u,p*h+o*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,f=a+a,p=c+c,_=u+u,g=a*f,x=a*p,S=a*_,A=c*p,v=c*_,m=u*_,L=h*f,I=h*p,b=h*_,B=i.x,N=i.y,F=i.z;return o[0]=(1-(A+m))*B,o[1]=(x+b)*B,o[2]=(S-I)*B,o[3]=0,o[4]=(x-b)*N,o[5]=(1-(g+m))*N,o[6]=(v+L)*N,o[7]=0,o[8]=(S+I)*F,o[9]=(v-L)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=fs.set(o[0],o[1],o[2]).length();const c=fs.set(o[4],o[5],o[6]).length(),u=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],mi.copy(this);const f=1/a,p=1/c,_=1/u;return mi.elements[0]*=f,mi.elements[1]*=f,mi.elements[2]*=f,mi.elements[4]*=p,mi.elements[5]*=p,mi.elements[6]*=p,mi.elements[8]*=_,mi.elements[9]*=_,mi.elements[10]*=_,t.setFromRotationMatrix(mi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=Xi){const h=this.elements,f=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),g=(i+o)/(i-o);let x,S;if(u===Xi)x=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(u===rl)x=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=Xi){const h=this.elements,f=1/(t-e),p=1/(i-o),_=1/(c-a),g=(t+e)*f,x=(i+o)*p;let S,A;if(u===Xi)S=(c+a)*_,A=-2*_;else if(u===rl)S=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=A,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new D,mi=new qt,AS=new D(0,0,0),bS=new D(1,1,1),lr=new D,Ca=new D,qn=new D,kd=new qt,Xd=new Co;class Ai{constructor(e=0,t=0,i=0,o=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],h=o[1],f=o[5],p=o[9],_=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RS=0;const qd=new D,ds=new Co,zi=new qt,Ia=new D,ao=new D,CS=new D,IS=new Co,Yd=new D(1,0,0),Zd=new D(0,1,0),Kd=new D(0,0,1),$d={type:"added"},LS={type:"removed"},ps={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Tn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new D,t=new Ai,i=new Co,o=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Yd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ao,Ia,this.up):zi.lookAt(Ia,ao,this.up),this.quaternion.setFromRotationMatrix(zi),o&&(zi.extractRotation(o.matrixWorld),ds.setFromRotationMatrix(zi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($d),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LS),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($d),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,IS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const _=h[f];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(a(e.materials,this.material[h]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),x=c(e.animations),S=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=o,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new D(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new D,Gi=new D,Fc=new D,Hi=new D,ms=new D,_s=new D,Jd=new D,Oc=new D,Bc=new D,zc=new D,Gc=new Ft,Hc=new Ft,Vc=new Ft;class ai{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),_i.subVectors(e,t),o.cross(_i);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){_i.subVectors(o,t),Gi.subVectors(i,t),Fc.subVectors(e,t);const c=_i.dot(_i),u=_i.dot(Gi),h=_i.dot(Fc),f=Gi.dot(Gi),p=Gi.dot(Fc),_=c*f-u*u;if(_===0)return a.set(0,0,0),null;const g=1/_,x=(f*h-u*p)*g,S=(c*p-u*h)*g;return a.set(1-x-S,S,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,i,o,a,c,u,h){return this.getBarycoord(e,t,i,o,Hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Hi.x),h.addScaledVector(c,Hi.y),h.addScaledVector(u,Hi.z),h)}static getInterpolatedAttribute(e,t,i,o,a,c){return Gc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),Gc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Gc,a.x),c.addScaledVector(Hc,a.y),c.addScaledVector(Vc,a.z),c}static isFrontFacing(e,t,i,o){return _i.subVectors(i,t),Gi.subVectors(e,t),_i.cross(Gi).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),_i.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return ai.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;ms.subVectors(o,i),_s.subVectors(a,i),Oc.subVectors(e,i);const h=ms.dot(Oc),f=_s.dot(Oc);if(h<=0&&f<=0)return t.copy(i);Bc.subVectors(e,o);const p=ms.dot(Bc),_=_s.dot(Bc);if(p>=0&&_<=p)return t.copy(o);const g=h*_-p*f;if(g<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(ms,c);zc.subVectors(e,a);const x=ms.dot(zc),S=_s.dot(zc);if(S>=0&&x<=S)return t.copy(a);const A=x*f-h*S;if(A<=0&&f>=0&&S<=0)return u=f/(f-S),t.copy(i).addScaledVector(_s,u);const v=p*S-x*_;if(v<=0&&_-p>=0&&x-S>=0)return Jd.subVectors(a,o),u=(_-p)/(_-p+(x-S)),t.copy(o).addScaledVector(Jd,u);const m=1/(v+A+g);return c=A*m,u=g*m,t.copy(i).addScaledVector(ms,c).addScaledVector(_s,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},La={h:0,s:0,l:0};function Wc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=At.workingColorSpace){if(e=dS(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Wc(c,a,e+1/3),this.g=Wc(c,a,e),this.b=Wc(c,a,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,t=oi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const i=cm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return At.fromWorkingColorSpace(yn.copy(this),e),Math.round(yt(yn.r*255,0,255))*65536+Math.round(yt(yn.g*255,0,255))*256+Math.round(yt(yn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(yn.copy(this),t);const i=yn.r,o=yn.g,a=yn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const _=c-u;switch(f=p<=.5?_/(c+u):_/(2-c-u),c){case i:h=(o-a)/_+(o<a?6:0);break;case o:h=(a-i)/_+2;break;case a:h=(i-o)/_+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=oi){At.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,o=yn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(La);const i=Ac(cr.h,La.h,t),o=Ac(cr.s,La.s,t),a=Ac(cr.l,La.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ne;ne.NAMES=cm;let PS=0;class Gs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Rs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=su,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ru&&(i.blendSrc=this.blendSrc),this.blendDst!==su&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new D,Pa=new xe;let DS=0;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),o=Nt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),o=Nt(o,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class um extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hm extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let US=0;const ri=new qt,kc=new Tn,gs=new D,Yn=new Io,lo=new Io,dn=new D;class Kn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sm(e)?hm:um)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new lt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];lo.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(Yn.min,lo.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,lo.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(lo.min),Yn.expandByPoint(lo.max))}Yn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)dn.fromBufferAttribute(u,f),h&&(gs.fromBufferAttribute(e,f),dn.add(gs)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let z=0;z<i.count;z++)u[z]=new D,h[z]=new D;const f=new D,p=new D,_=new D,g=new xe,x=new xe,S=new xe,A=new D,v=new D;function m(z,C,T){f.fromBufferAttribute(i,z),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,T),g.fromBufferAttribute(a,z),x.fromBufferAttribute(a,C),S.fromBufferAttribute(a,T),p.sub(f),_.sub(f),x.sub(g),S.sub(g);const H=1/(x.x*S.y-S.x*x.y);isFinite(H)&&(A.copy(p).multiplyScalar(S.y).addScaledVector(_,-x.y).multiplyScalar(H),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-S.x).multiplyScalar(H),u[z].add(A),u[C].add(A),u[T].add(A),h[z].add(v),h[C].add(v),h[T].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,C=L.length;z<C;++z){const T=L[z],H=T.start,Q=T.count;for(let $=H,re=H+Q;$<re;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const I=new D,b=new D,B=new D,N=new D;function F(z){B.fromBufferAttribute(o,z),N.copy(B);const C=u[z];I.copy(C),I.sub(B.multiplyScalar(B.dot(C))).normalize(),b.crossVectors(N,C);const H=b.dot(h[z])<0?-1:1;c.setXYZW(z,I.x,I.y,I.z,H)}for(let z=0,C=L.length;z<C;++z){const T=L[z],H=T.start,Q=T.count;for(let $=H,re=H+Q;$<re;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const o=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D,_=new D;if(e)for(let g=0,x=e.count;g<x;g+=3){const S=e.getX(g+0),A=e.getX(g+1),v=e.getX(g+2);o.fromBufferAttribute(t,S),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,v),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,v),u.add(p),h.add(p),f.add(p),i.setXYZ(S,u.x,u.y,u.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,_=u.normalized,g=new f.constructor(h.length*p);let x=0,S=0;for(let A=0,v=h.length;A<v;A++){u.isInterleavedBufferAttribute?x=h[A]*u.data.stride+u.offset:x=h[A]*p;for(let m=0;m<p;m++)g[S++]=f[x++]}return new xi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,o=this.attributes;for(const u in o){const h=o[u],f=e(h,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const h=[],f=a[u];for(let p=0,_=f.length;p<_;p++){const g=f[p],x=e(g,i);h.push(x)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let _=0,g=f.length;_<g;_++){const x=f[_];p.push(x.toJSON(e.data))}p.length>0&&(o[h]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],_=a[f];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qd=new qt,Lr=new wS,Da=new oh,jd=new D,Ua=new D,Na=new D,Fa=new D,Xc=new D,Oa=new D,ep=new D,Ba=new D;class gn extends Tn{constructor(e=new Kn,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Oa.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const p=u[h],_=a[h];p!==0&&(Xc.fromBufferAttribute(_,e),c?Oa.addScaledVector(Xc,p):Oa.addScaledVector(Xc.sub(t),p))}t.add(Oa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(a),Lr.copy(e.ray).recast(e.near),!(Da.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Da,jd)===null||Lr.origin.distanceToSquared(jd)>(e.far-e.near)**2))&&(Qd.copy(a).invert(),Lr.copy(e.ray).applyMatrix4(Qd),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let S=0,A=g.length;S<A;S++){const v=g[S],m=c[v.materialIndex],L=Math.max(v.start,x.start),I=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let b=L,B=I;b<B;b+=3){const N=u.getX(b),F=u.getX(b+1),z=u.getX(b+2);o=za(this,m,e,i,f,p,_,N,F,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),A=Math.min(u.count,x.start+x.count);for(let v=S,m=A;v<m;v+=3){const L=u.getX(v),I=u.getX(v+1),b=u.getX(v+2);o=za(this,c,e,i,f,p,_,L,I,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,A=g.length;S<A;S++){const v=g[S],m=c[v.materialIndex],L=Math.max(v.start,x.start),I=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let b=L,B=I;b<B;b+=3){const N=b,F=b+1,z=b+2;o=za(this,m,e,i,f,p,_,N,F,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const S=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let v=S,m=A;v<m;v+=3){const L=v,I=v+1,b=v+2;o=za(this,c,e,i,f,p,_,L,I,b),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function NS(r,e,t,i,o,a,c,u){let h;if(e.side===Bn?h=i.intersectTriangle(c,a,o,!0,u):h=i.intersectTriangle(o,a,c,e.side===_r,u),h===null)return null;Ba.copy(u),Ba.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Ba);return f<t.near||f>t.far?null:{distance:f,point:Ba.clone(),object:r}}function za(r,e,t,i,o,a,c,u,h,f){r.getVertexPosition(u,Ua),r.getVertexPosition(h,Na),r.getVertexPosition(f,Fa);const p=NS(r,e,t,i,Ua,Na,Fa,ep);if(p){const _=new D;ai.getBarycoord(ep,Ua,Na,Fa,_),o&&(p.uv=ai.getInterpolatedAttribute(o,u,h,f,_,new xe)),a&&(p.uv1=ai.getInterpolatedAttribute(a,u,h,f,_,new xe)),c&&(p.normal=ai.getInterpolatedAttribute(c,u,h,f,_,new D),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new D,materialIndex:0};ai.getNormal(Ua,Na,Fa,g.normal),p.face=g,p.barycoord=_}return p}class Wr extends Kn{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],p=[],_=[];let g=0,x=0;S("z","y","x",-1,-1,i,t,e,c,a,0),S("z","y","x",1,-1,i,t,-e,c,a,1),S("x","z","y",1,1,e,i,t,o,c,2),S("x","z","y",1,-1,e,i,-t,o,c,3),S("x","y","z",1,-1,e,t,i,o,a,4),S("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(_,2));function S(A,v,m,L,I,b,B,N,F,z,C){const T=b/F,H=B/z,Q=b/2,$=B/2,re=N/2,he=F+1,ie=z+1;let pe=0,j=0;const be=new D;for(let Le=0;Le<ie;Le++){const Be=Le*H-$;for(let ht=0;ht<he;ht++){const It=ht*T-Q;be[A]=It*L,be[v]=Be*I,be[m]=re,f.push(be.x,be.y,be.z),be[A]=0,be[v]=0,be[m]=N>0?1:-1,p.push(be.x,be.y,be.z),_.push(ht/F),_.push(1-Le/z),pe+=1}}for(let Le=0;Le<z;Le++)for(let Be=0;Be<F;Be++){const ht=g+Be+he*Le,It=g+Be+he*(Le+1),le=g+(Be+1)+he*(Le+1),Me=g+(Be+1)+he*Le;h.push(ht,It,Me),h.push(It,le,Me),j+=6}u.addGroup(x,j,C),x+=j,g+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const i=Bs(r[t]);for(const o in i)e[o]=i[o]}return e}function FS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const OS={clone:Bs,merge:In};var BS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BS,this.fragmentShader=zS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=FS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dm extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new D,tp=new xe,np=new xe;class Zn extends dm{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ku*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ku*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,t){return this.getViewBounds(e,tp,np),t.subVectors(np,tp)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*i/f,o*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class GS extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new Zn(vs,xs,e,t);a.layers=this.layers,this.add(a);const c=new Zn(vs,xs,e,t);c.layers=this.layers,this.add(c);const u=new Zn(vs,xs,e,t);u.layers=this.layers,this.add(u);const h=new Zn(vs,xs,e,t);h.layers=this.layers,this.add(h);const f=new Zn(vs,xs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,h]=t;for(const f of t)this.remove(f);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,f,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,h),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,g,x),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class pm extends Ln{constructor(e,t,i,o,a,c,u,h,f,p){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,o,a,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HS extends Vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new pm(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wr(5,5,5),a=new gr({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:dr});a.uniforms.tEquirect.value=t;const c=new gn(o,a),u=t.minFilter;return t.minFilter===Gr&&(t.minFilter=wi),new GS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class Ga extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ga,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ga,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ga,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const A of e.hand.values()){const v=t.getJointPose(A,i),m=this._getHandJoint(f,A);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,S=.005;f.inputState.pinching&&g>x+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=x-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ga;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class WS extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new D;class sl{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),o=Nt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),o=Nt(o,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new xi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xu extends Gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const co=new D,Es=new D,Ss=new D,ys=new xe,uo=new xe,mm=new qt,Ha=new D,ho=new D,Va=new D,ip=new xe,Yc=new xe,rp=new xe;class sp extends Tn{constructor(e=new Xu){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Kn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kS(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new sl(i,3,0,!1)),Ms.setAttribute("uv",new sl(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ss.z);const i=this.material.rotation;let o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));const c=this.center;Wa(Ha.set(-.5,-.5,0),Ss,c,Es,o,a),Wa(ho.set(.5,-.5,0),Ss,c,Es,o,a),Wa(Va.set(.5,.5,0),Ss,c,Es,o,a),ip.set(0,0),Yc.set(1,0),rp.set(1,1);let u=e.ray.intersectTriangle(Ha,ho,Va,!1,co);if(u===null&&(Wa(ho.set(-.5,.5,0),Ss,c,Es,o,a),Yc.set(0,1),u=e.ray.intersectTriangle(Ha,Va,ho,!1,co),u===null))return;const h=e.ray.origin.distanceTo(co);h<e.near||h>e.far||t.push({distance:h,point:co.clone(),uv:ai.getInterpolation(co,Ha,ho,Va,ip,Yc,rp,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wa(r,e,t,i,o,a){ys.subVectors(r,t).addScalar(.5).multiply(i),o!==void 0?(uo.x=a*ys.x-o*ys.y,uo.y=o*ys.x+a*ys.y):uo.copy(ys),r.copy(e),r.x+=uo.x,r.y+=uo.y,r.applyMatrix4(mm)}const Zc=new D,XS=new D,qS=new lt;class Nr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Zc.subVectors(i,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qS.getNormalMatrix(e),o=this.coplanarPoint(Zc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new oh,ka=new D;class ah{constructor(e=new Nr,t=new Nr,i=new Nr,o=new Nr,a=new Nr,c=new Nr){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],h=o[3],f=o[4],p=o[5],_=o[6],g=o[7],x=o[8],S=o[9],A=o[10],v=o[11],m=o[12],L=o[13],I=o[14],b=o[15];if(i[0].setComponents(h-a,g-f,v-x,b-m).normalize(),i[1].setComponents(h+a,g+f,v+x,b+m).normalize(),i[2].setComponents(h+c,g+p,v+S,b+L).normalize(),i[3].setComponents(h-c,g-p,v-S,b-L).normalize(),i[4].setComponents(h-u,g-_,v-A,b-I).normalize(),t===Xi)i[5].setComponents(h+u,g+_,v+A,b+I).normalize();else if(t===rl)i[5].setComponents(u,_,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(ka.x=o.normal.x>0?e.max.x:e.min.x,ka.y=o.normal.y>0?e.max.y:e.min.y,ka.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _m extends Ln{constructor(e,t,i,o,a,c,u,h,f,p=Cs){if(p!==Cs&&p!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Cs&&(i=Hr),i===void 0&&p===Fs&&(i=Ns),super(null,o,a,c,u,h,p,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:vi,this.minFilter=h!==void 0?h:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ul extends Kn{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const f=this;o=Math.floor(o),a=Math.floor(a);const p=[],_=[],g=[],x=[];let S=0;const A=[],v=i/2;let m=0;L(),c===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(p),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(g,3)),this.setAttribute("uv",new $t(x,2));function L(){const b=new D,B=new D;let N=0;const F=(t-e)/i;for(let z=0;z<=a;z++){const C=[],T=z/a,H=T*(t-e)+e;for(let Q=0;Q<=o;Q++){const $=Q/o,re=$*h+u,he=Math.sin(re),ie=Math.cos(re);B.x=H*he,B.y=-T*i+v,B.z=H*ie,_.push(B.x,B.y,B.z),b.set(he,F,ie).normalize(),g.push(b.x,b.y,b.z),x.push($,1-T),C.push(S++)}A.push(C)}for(let z=0;z<o;z++)for(let C=0;C<a;C++){const T=A[C][z],H=A[C+1][z],Q=A[C+1][z+1],$=A[C][z+1];(e>0||C!==0)&&(p.push(T,H,$),N+=3),(t>0||C!==a-1)&&(p.push(H,Q,$),N+=3)}f.addGroup(m,N,0),m+=N}function I(b){const B=S,N=new xe,F=new D;let z=0;const C=b===!0?e:t,T=b===!0?1:-1;for(let Q=1;Q<=o;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),S++;const H=S;for(let Q=0;Q<=o;Q++){const re=Q/o*h+u,he=Math.cos(re),ie=Math.sin(re);F.x=C*ie,F.y=v*T,F.z=C*he,_.push(F.x,F.y,F.z),g.push(0,T,0),N.x=he*.5+.5,N.y=ie*.5*T+.5,x.push(N.x,N.y),S++}for(let Q=0;Q<o;Q++){const $=B+Q,re=H+Q;b===!0?p.push(re,re+1,$):p.push(re+1,re,$),z+=3}f.addGroup(m,z,b===!0?1:2),m+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lh extends ul{constructor(e=1,t=1,i=32,o=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,i,o,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new lh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ch extends Kn{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const a=[],c=[];u(o),f(i),p(),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(a.slice(),3)),this.setAttribute("uv",new $t(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(L){const I=new D,b=new D,B=new D;for(let N=0;N<t.length;N+=3)x(t[N+0],I),x(t[N+1],b),x(t[N+2],B),h(I,b,B,L)}function h(L,I,b,B){const N=B+1,F=[];for(let z=0;z<=N;z++){F[z]=[];const C=L.clone().lerp(b,z/N),T=I.clone().lerp(b,z/N),H=N-z;for(let Q=0;Q<=H;Q++)Q===0&&z===N?F[z][Q]=C:F[z][Q]=C.clone().lerp(T,Q/H)}for(let z=0;z<N;z++)for(let C=0;C<2*(N-z)-1;C++){const T=Math.floor(C/2);C%2===0?(g(F[z][T+1]),g(F[z+1][T]),g(F[z][T])):(g(F[z][T+1]),g(F[z+1][T+1]),g(F[z+1][T]))}}function f(L){const I=new D;for(let b=0;b<a.length;b+=3)I.x=a[b+0],I.y=a[b+1],I.z=a[b+2],I.normalize().multiplyScalar(L),a[b+0]=I.x,a[b+1]=I.y,a[b+2]=I.z}function p(){const L=new D;for(let I=0;I<a.length;I+=3){L.x=a[I+0],L.y=a[I+1],L.z=a[I+2];const b=v(L)/2/Math.PI+.5,B=m(L)/Math.PI+.5;c.push(b,1-B)}S(),_()}function _(){for(let L=0;L<c.length;L+=6){const I=c[L+0],b=c[L+2],B=c[L+4],N=Math.max(I,b,B),F=Math.min(I,b,B);N>.9&&F<.1&&(I<.2&&(c[L+0]+=1),b<.2&&(c[L+2]+=1),B<.2&&(c[L+4]+=1))}}function g(L){a.push(L.x,L.y,L.z)}function x(L,I){const b=L*3;I.x=e[b+0],I.y=e[b+1],I.z=e[b+2]}function S(){const L=new D,I=new D,b=new D,B=new D,N=new xe,F=new xe,z=new xe;for(let C=0,T=0;C<a.length;C+=9,T+=6){L.set(a[C+0],a[C+1],a[C+2]),I.set(a[C+3],a[C+4],a[C+5]),b.set(a[C+6],a[C+7],a[C+8]),N.set(c[T+0],c[T+1]),F.set(c[T+2],c[T+3]),z.set(c[T+4],c[T+5]),B.copy(L).add(I).add(b).divideScalar(3);const H=v(B);A(N,T+0,L,H),A(F,T+2,I,H),A(z,T+4,b,H)}}function A(L,I,b,B){B<0&&L.x===1&&(c[I]=L.x-1),b.x===0&&b.z===0&&(c[I]=B/2/Math.PI+.5)}function v(L){return Math.atan2(L.z,-L.x)}function m(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.vertices,e.indices,e.radius,e.details)}}class uh extends ch{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uh(e.radius,e.detail)}}class hl extends Kn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),h=Math.floor(o),f=u+1,p=h+1,_=e/u,g=t/h,x=[],S=[],A=[],v=[];for(let m=0;m<p;m++){const L=m*g-c;for(let I=0;I<f;I++){const b=I*_-a;S.push(b,-L,0),A.push(0,0,1),v.push(I/u),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let L=0;L<u;L++){const I=L+f*m,b=L+f*(m+1),B=L+1+f*(m+1),N=L+1+f*m;x.push(I,b,N),x.push(b,B,N)}this.setIndex(x),this.setAttribute("position",new $t(S,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class hh extends Kn{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const p=[],_=new D,g=new D,x=[],S=[],A=[],v=[];for(let m=0;m<=i;m++){const L=[],I=m/i;let b=0;m===0&&c===0?b=.5/t:m===i&&h===Math.PI&&(b=-.5/t);for(let B=0;B<=t;B++){const N=B/t;_.x=-e*Math.cos(o+N*a)*Math.sin(c+I*u),_.y=e*Math.cos(c+I*u),_.z=e*Math.sin(o+N*a)*Math.sin(c+I*u),S.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),v.push(N+b,1-I),L.push(f++)}p.push(L)}for(let m=0;m<i;m++)for(let L=0;L<t;L++){const I=p[m][L+1],b=p[m][L],B=p[m+1][L],N=p[m+1][L+1];(m!==0||c>0)&&x.push(I,b,N),(m!==i-1||h<Math.PI)&&x.push(b,B,N)}this.setIndex(x),this.setAttribute("position",new $t(S,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fh extends Kn{constructor(e=1,t=.4,i=12,o=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:a},i=Math.floor(i),o=Math.floor(o);const c=[],u=[],h=[],f=[],p=new D,_=new D,g=new D;for(let x=0;x<=i;x++)for(let S=0;S<=o;S++){const A=S/o*a,v=x/i*Math.PI*2;_.x=(e+t*Math.cos(v))*Math.cos(A),_.y=(e+t*Math.cos(v))*Math.sin(A),_.z=t*Math.sin(v),u.push(_.x,_.y,_.z),p.x=e*Math.cos(A),p.y=e*Math.sin(A),g.subVectors(_,p).normalize(),h.push(g.x,g.y,g.z),f.push(S/o),f.push(x/i)}for(let x=1;x<=i;x++)for(let S=1;S<=o;S++){const A=(o+1)*x+S-1,v=(o+1)*(x-1)+S-1,m=(o+1)*(x-1)+S,L=(o+1)*x+S;c.push(A,v,L),c.push(v,m,L)}this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dh extends Kn{constructor(e=1,t=.4,i=64,o=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:o,p:a,q:c},i=Math.floor(i),o=Math.floor(o);const u=[],h=[],f=[],p=[],_=new D,g=new D,x=new D,S=new D,A=new D,v=new D,m=new D;for(let I=0;I<=i;++I){const b=I/i*a*Math.PI*2;L(b,a,c,e,x),L(b+.01,a,c,e,S),v.subVectors(S,x),m.addVectors(S,x),A.crossVectors(v,m),m.crossVectors(A,v),A.normalize(),m.normalize();for(let B=0;B<=o;++B){const N=B/o*Math.PI*2,F=-t*Math.cos(N),z=t*Math.sin(N);_.x=x.x+(F*m.x+z*A.x),_.y=x.y+(F*m.y+z*A.y),_.z=x.z+(F*m.z+z*A.z),h.push(_.x,_.y,_.z),g.subVectors(_,x).normalize(),f.push(g.x,g.y,g.z),p.push(I/i),p.push(B/o)}}for(let I=1;I<=i;I++)for(let b=1;b<=o;b++){const B=(o+1)*(I-1)+(b-1),N=(o+1)*I+(b-1),F=(o+1)*I+b,z=(o+1)*(I-1)+b;u.push(B,N,z),u.push(N,F,z)}this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function L(I,b,B,N,F){const z=Math.cos(I),C=Math.sin(I),T=B/b*I,H=Math.cos(T);F.x=N*(2+H)*.5*z,F.y=N*(2+H)*C*.5,F.z=N*Math.sin(T)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class hr extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=im,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class YS extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const op={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class KS{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){const _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=f.length;_<g;_+=2){const x=f[_],S=f[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return S}return null}}}const $S=new KS;class ph{constructor(e){this.manager=e!==void 0?e:$S,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";class JS extends ph{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=op.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Ao("img");function h(){p(),op.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(_){p(),o&&o(_),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class ap extends ph{constructor(e){super(e)}load(e,t,i,o){const a=new Ln,c=new JS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class gm extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class QS extends gm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kc=new qt,lp=new D,cp=new D;class jS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(lp),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const up=new qt,fo=new D,$c=new D;class ey extends jS{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(fo),$c.copy(i.position),$c.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($c),i.updateMatrixWorld(),o.makeTranslation(-fo.x,-fo.y,-fo.z),up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}}class mh extends gm{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ty extends dm{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ny extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function hp(r,e,t,i){const o=iy(i);switch(t){case $p:return r*e;case Qp:return r*e;case jp:return r*e*2;case em:return r*e/o.components*o.byteLength;case ih:return r*e/o.components*o.byteLength;case tm:return r*e*2/o.components*o.byteLength;case rh:return r*e*2/o.components*o.byteLength;case Jp:return r*e*3/o.components*o.byteLength;case gi:return r*e*4/o.components*o.byteLength;case sh:return r*e*4/o.components*o.byteLength;case Ja:case Qa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ja:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vu:case Mu:return Math.max(r,16)*Math.max(e,8)/4;case gu:case xu:return Math.max(r,8)*Math.max(e,8)/2;case Eu:case Su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tl:case Bu:case zu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nm:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hu:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(r){switch(r){case Yi:case Yp:return{byteLength:1,components:1};case wo:case Zp:case Ro:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Hr:case eh:case ki:return{byteLength:4,components:1};case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vm(){let r=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function ry(r){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,_=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,h,f){const p=h.array,_=h.updateRanges;if(r.bindBuffer(f,u),_.length===0)r.bufferSubData(f,0,p);else{_.sort((x,S)=>x.start-S.start);let g=0;for(let x=1;x<_.length;x++){const S=_[g],A=_[x];A.start<=S.start+S.count+1?S.count=Math.max(S.count,A.start+A.count-S.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,S=_.length;x<S;x++){const A=_[x];r.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(r.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:c}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ry=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Aw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:sy,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:_y,bsdfs:gy,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:yy,color_fragment:Ty,color_pars_fragment:wy,color_pars_vertex:Ay,color_vertex:by,common:Ry,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Py,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ny,colorspace_pars_fragment:Fy,envmap_fragment:Oy,envmap_common_pars_fragment:By,envmap_pars_fragment:zy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:Jy,envmap_vertex:Hy,fog_vertex:Vy,fog_pars_vertex:Wy,fog_fragment:ky,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Ky,lights_pars_begin:$y,lights_toon_fragment:Qy,lights_toon_pars_fragment:jy,lights_phong_fragment:eT,lights_phong_pars_fragment:tT,lights_physical_fragment:nT,lights_physical_pars_fragment:iT,lights_fragment_begin:rT,lights_fragment_maps:sT,lights_fragment_end:oT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:lT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:uT,map_fragment:hT,map_pars_fragment:fT,map_particle_fragment:dT,map_particle_pars_fragment:pT,metalnessmap_fragment:mT,metalnessmap_pars_fragment:_T,morphinstance_vertex:gT,morphcolor_vertex:vT,morphnormal_vertex:xT,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:ST,normal_fragment_maps:yT,normal_pars_fragment:TT,normal_pars_vertex:wT,normal_vertex:AT,normalmap_pars_fragment:bT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:IT,iridescence_pars_fragment:LT,opaque_fragment:PT,packing:DT,premultiplied_alpha_fragment:UT,project_vertex:NT,dithering_fragment:FT,dithering_pars_fragment:OT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:WT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:qT,skinnormal_vertex:YT,specularmap_fragment:ZT,specularmap_pars_fragment:KT,tonemapping_fragment:$T,tonemapping_pars_fragment:JT,transmission_fragment:QT,transmission_pars_fragment:jT,uv_pars_fragment:ew,uv_pars_vertex:tw,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:ow,backgroundCube_frag:aw,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:hw,distanceRGBA_vert:fw,distanceRGBA_frag:dw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:_w,linedashed_frag:gw,meshbasic_vert:vw,meshbasic_frag:xw,meshlambert_vert:Mw,meshlambert_frag:Ew,meshmatcap_vert:Sw,meshmatcap_frag:yw,meshnormal_vert:Tw,meshnormal_frag:ww,meshphong_vert:Aw,meshphong_frag:bw,meshphysical_vert:Rw,meshphysical_frag:Cw,meshtoon_vert:Iw,meshtoon_frag:Lw,points_vert:Pw,points_frag:Dw,shadow_vert:Uw,shadow_frag:Nw,sprite_vert:Fw,sprite_frag:Ow},Te={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},yi={basic:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ne(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ne(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Te.points,Te.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Te.common,Te.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Te.sprite,Te.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([Te.lights,Te.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};yi.physical={uniforms:In([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Xa={r:0,b:0,g:0},Dr=new Ai,Bw=new qt;function zw(r,e,t,i,o,a,c){const u=new ne(0);let h=a===!0?0:1,f,p,_=null,g=0,x=null;function S(I){let b=I.isScene===!0?I.background:null;return b&&b.isTexture&&(b=(I.backgroundBlurriness>0?t:e).get(b)),b}function A(I){let b=!1;const B=S(I);B===null?m(u,h):B&&B.isColor&&(m(B,1),b=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(I,b){const B=S(b);B&&(B.isCubeTexture||B.mapping===cl)?(p===void 0&&(p=new gn(new Wr(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Bs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Dr.copy(b.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(Dr)),p.material.toneMapped=At.getTransfer(B.colorSpace)!==Ut,(_!==B||g!==B.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=B,g=B.version,x=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new gn(new hl(2,2),new gr({name:"BackgroundMaterial",uniforms:Bs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=At.getTransfer(B.colorSpace)!==Ut,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||g!==B.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,_=B,g=B.version,x=r.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function m(I,b){I.getRGB(Xa,fm(r)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,b,c)}function L(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,b=1){u.set(I),h=b,m(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,m(u,h)},render:A,addToRenderList:v,dispose:L}}function Gw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},o=g(null);let a=o,c=!1;function u(T,H,Q,$,re){let he=!1;const ie=_($,Q,H);a!==ie&&(a=ie,f(a.object)),he=x(T,$,Q,re),he&&S(T,$,Q,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,b(T,H,Q,$),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function _(T,H,Q){const $=Q.wireframe===!0;let re=i[T.id];re===void 0&&(re={},i[T.id]=re);let he=re[H.id];he===void 0&&(he={},re[H.id]=he);let ie=he[$];return ie===void 0&&(ie=g(h()),he[$]=ie),ie}function g(T){const H=[],Q=[],$=[];for(let re=0;re<t;re++)H[re]=0,Q[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,H,Q,$){const re=a.attributes,he=H.attributes;let ie=0;const pe=Q.getAttributes();for(const j in pe)if(pe[j].location>=0){const Le=re[j];let Be=he[j];if(Be===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Be=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Be=T.instanceColor)),Le===void 0||Le.attribute!==Be||Be&&Le.data!==Be.data)return!0;ie++}return a.attributesNum!==ie||a.index!==$}function S(T,H,Q,$){const re={},he=H.attributes;let ie=0;const pe=Q.getAttributes();for(const j in pe)if(pe[j].location>=0){let Le=he[j];Le===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Le=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Le=T.instanceColor));const Be={};Be.attribute=Le,Le&&Le.data&&(Be.data=Le.data),re[j]=Be,ie++}a.attributes=re,a.attributesNum=ie,a.index=$}function A(){const T=a.newAttributes;for(let H=0,Q=T.length;H<Q;H++)T[H]=0}function v(T){m(T,0)}function m(T,H){const Q=a.newAttributes,$=a.enabledAttributes,re=a.attributeDivisors;Q[T]=1,$[T]===0&&(r.enableVertexAttribArray(T),$[T]=1),re[T]!==H&&(r.vertexAttribDivisor(T,H),re[T]=H)}function L(){const T=a.newAttributes,H=a.enabledAttributes;for(let Q=0,$=H.length;Q<$;Q++)H[Q]!==T[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function I(T,H,Q,$,re,he,ie){ie===!0?r.vertexAttribIPointer(T,H,Q,re,he):r.vertexAttribPointer(T,H,Q,$,re,he)}function b(T,H,Q,$){A();const re=$.attributes,he=Q.getAttributes(),ie=H.defaultAttributeValues;for(const pe in he){const j=he[pe];if(j.location>=0){let be=re[pe];if(be===void 0&&(pe==="instanceMatrix"&&T.instanceMatrix&&(be=T.instanceMatrix),pe==="instanceColor"&&T.instanceColor&&(be=T.instanceColor)),be!==void 0){const Le=be.normalized,Be=be.itemSize,ht=e.get(be);if(ht===void 0)continue;const It=ht.buffer,le=ht.type,Me=ht.bytesPerElement,ze=le===r.INT||le===r.UNSIGNED_INT||be.gpuType===eh;if(be.isInterleavedBufferAttribute){const Re=be.data,Xe=Re.stride,pt=be.offset;if(Re.isInstancedInterleavedBuffer){for(let je=0;je<j.locationSize;je++)m(j.location+je,Re.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let je=0;je<j.locationSize;je++)v(j.location+je);r.bindBuffer(r.ARRAY_BUFFER,It);for(let je=0;je<j.locationSize;je++)I(j.location+je,Be/j.locationSize,le,Le,Xe*Me,(pt+Be/j.locationSize*je)*Me,ze)}else{if(be.isInstancedBufferAttribute){for(let Re=0;Re<j.locationSize;Re++)m(j.location+Re,be.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Re=0;Re<j.locationSize;Re++)v(j.location+Re);r.bindBuffer(r.ARRAY_BUFFER,It);for(let Re=0;Re<j.locationSize;Re++)I(j.location+Re,Be/j.locationSize,le,Le,Be*Me,Be/j.locationSize*Re*Me,ze)}}else if(ie!==void 0){const Le=ie[pe];if(Le!==void 0)switch(Le.length){case 2:r.vertexAttrib2fv(j.location,Le);break;case 3:r.vertexAttrib3fv(j.location,Le);break;case 4:r.vertexAttrib4fv(j.location,Le);break;default:r.vertexAttrib1fv(j.location,Le)}}}}L()}function B(){z();for(const T in i){const H=i[T];for(const Q in H){const $=H[Q];for(const re in $)p($[re].object),delete $[re];delete H[Q]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const H=i[T.id];for(const Q in H){const $=H[Q];for(const re in $)p($[re].object),delete $[re];delete H[Q]}delete i[T.id]}function F(T){for(const H in i){const Q=i[H];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const re in $)p($[re].object),delete $[re];delete Q[T.id]}}function z(){C(),c=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:z,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:L}}function Hw(r,e,t){let i;function o(f){i=f}function a(f,p){r.drawArrays(i,f,p),t.update(p,i,1)}function c(f,p,_){_!==0&&(r.drawArraysInstanced(i,f,p,_),t.update(p,i,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,_);let x=0;for(let S=0;S<_;S++)x+=p[S];t.update(x,i,1)}function h(f,p,_,g){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<f.length;S++)c(f[S],p[S],g[S]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,_);let S=0;for(let A=0;A<_;A++)S+=p[A]*g[A];t.update(S,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vw(r,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==gi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const z=F===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Yi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!z)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=S>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:A,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:b,vertexTextures:B,maxSamples:N}}function Ww(r){const e=this;let t=null,i=0,o=!1,a=!1;const c=new Nr,u=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||o;return o=g,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,x){const S=_.clippingPlanes,A=_.clipIntersection,v=_.clipShadows,m=r.get(_);if(!o||S===null||S.length===0||a&&!v)a?p(null):f();else{const L=a?0:i,I=L*4;let b=m.clippingState||null;h.value=b,b=p(S,g,I,x);for(let B=0;B!==I;++B)b[B]=t[B];m.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,x,S){const A=_!==null?_.length:0;let v=null;if(A!==0){if(v=h.value,S!==!0||v===null){const m=x+A*4,L=g.matrixWorldInverse;u.getNormalMatrix(L),(v===null||v.length<m)&&(v=new Float32Array(m));for(let I=0,b=x;I!==A;++I,b+=4)c.copy(_[I]).applyMatrix4(L,u),c.normal.toArray(v,b),v[b+3]=c.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function kw(r){let e=new WeakMap;function t(c,u){return u===du?c.mapping=Ds:u===pu&&(c.mapping=Us),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===du||u===pu)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new HS(h.height);return f.fromEquirectangularTexture(r,c),e.set(c,f),c.addEventListener("dispose",o),t(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const As=4,fp=[.125,.215,.35,.446,.526,.582],Br=20,Jc=new ty,dp=new ne;let Qc=null,jc=0,eu=0,tu=!1;const Fr=(1+Math.sqrt(5))/2,Ts=1/Fr,pp=[new D(-Fr,Ts,0),new D(Fr,Ts,0),new D(-Ts,0,Fr),new D(Ts,0,Fr),new D(0,Fr,-Ts),new D(0,Fr,Ts),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,jc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Ro,format:gi,colorSpace:Os,depthBuffer:!1},o=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xw(a)),this._blurMaterial=qw(a,e,t)}return o}_compileMaterial(e){const t=new gn(this._lodPlanes[0],e);this._renderer.compile(t,Jc)}_sceneToCubeUV(e,t,i,o){const u=new Zn(90,1,t,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(dp),p.toneMapping=pr,p.autoClear=!1;const x=new si({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),S=new gn(new Wr,x);let A=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,A=!0):(x.color.copy(dp),A=!0);for(let m=0;m<6;m++){const L=m%3;L===0?(u.up.set(0,h[m],0),u.lookAt(f[m],0,0)):L===1?(u.up.set(0,0,h[m]),u.lookAt(0,f[m],0)):(u.up.set(0,h[m],0),u.lookAt(0,0,f[m]));const I=this._cubeSize;qa(o,L*I,m>2?I:0,I,I),p.setRenderTarget(o),A&&p.render(S,u),p.render(e,u)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Ds||e.mapping===Us;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new gn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;qa(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Jc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=pp[(o-a-1)%pp.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new gn(this._lodPlanes[o],f),g=f.uniforms,x=this._sizeLods[i]-1,S=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Br-1),A=a/S,v=isFinite(a)?1+Math.floor(p*A):Br;v>Br&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Br}`);const m=[];let L=0;for(let F=0;F<Br;++F){const z=F/A,C=Math.exp(-z*z/2);m.push(C),F===0?L+=C:F<v&&(L+=2*C)}for(let F=0;F<m.length;F++)m[F]=m[F]/L;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:I}=this;g.dTheta.value=S,g.mipInt.value=I-i;const b=this._sizeLods[o],B=3*b*(o>I-As?o-I+As:0),N=4*(this._cubeSize-b);qa(t,B,N,3*b,2*b),h.setRenderTarget(t),h.render(_,Jc)}}function Xw(r){const e=[],t=[],i=[];let o=r;const a=r-As+1+fp.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let h=1/u;c>r-As?h=fp[c-r+As-1]:c===0&&(h=0),i.push(h);const f=1/(u-2),p=-f,_=1+f,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,S=6,A=3,v=2,m=1,L=new Float32Array(A*S*x),I=new Float32Array(v*S*x),b=new Float32Array(m*S*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,z=N>2?0:-1,C=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];L.set(C,A*S*N),I.set(g,v*S*N);const T=[N,N,N,N,N,N];b.set(T,m*S*N)}const B=new Kn;B.setAttribute("position",new xi(L,A)),B.setAttribute("uv",new xi(I,v)),B.setAttribute("faceIndex",new xi(b,m)),e.push(B),o>As&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _p(r,e,t){const i=new Vr(r,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function qw(r,e,t){const i=new Float32Array(Br),o=new D(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function gp(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function vp(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yw(r){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const h=u.mapping,f=h===du||h===pu,p=h===Ds||h===Us;if(f||p){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new mp(r)),_=f?t.fromEquirectangular(u,_):t.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return f&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new mp(r)),_=f?t.fromEquirectangular(u):t.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",a),_.texture):null}}}return u}function o(u){let h=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&h++;return h===f}function a(u){const h=u.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Zw(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&ws("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Kw(r,e,t,i){const o={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const x=a.get(g);x&&(e.remove(x),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const x in g)e.update(g[x],r.ARRAY_BUFFER)}function f(_){const g=[],x=_.index,S=_.attributes.position;let A=0;if(x!==null){const L=x.array;A=x.version;for(let I=0,b=L.length;I<b;I+=3){const B=L[I+0],N=L[I+1],F=L[I+2];g.push(B,N,N,F,F,B)}}else if(S!==void 0){const L=S.array;A=S.version;for(let I=0,b=L.length/3-1;I<b;I+=3){const B=I+0,N=I+1,F=I+2;g.push(B,N,N,F,F,B)}}else return;const v=new(sm(g)?hm:um)(g,1);v.version=A;const m=a.get(_);m&&e.remove(m),a.set(_,v)}function p(_){const g=a.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:u,update:h,getWireframeAttribute:p}}function $w(r,e,t){let i;function o(g){i=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function h(g,x){r.drawElements(i,x,a,g*c),t.update(x,i,1)}function f(g,x,S){S!==0&&(r.drawElementsInstanced(i,x,a,g*c,S),t.update(x,i,S))}function p(g,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,g,0,S);let v=0;for(let m=0;m<S;m++)v+=x[m];t.update(v,i,1)}function _(g,x,S,A){if(S===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)f(g[m]/c,x[m],A[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,a,g,0,A,0,S);let m=0;for(let L=0;L<S;L++)m+=x[L]*A[L];t.update(m,i,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function Jw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(a/3);break;case r.LINES:t.lines+=u*(a/2);break;case r.LINE_STRIP:t.lines+=u*(a-1);break;case r.LINE_LOOP:t.lines+=u*a;break;case r.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function Qw(r,e,t){const i=new WeakMap,o=new Ft;function a(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){z.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let b=0;S===!0&&(b=1),A===!0&&(b=2),v===!0&&(b=3);let B=u.attributes.position.count*b,N=1;B>e.maxTextureSize&&(N=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*N*4*_),z=new am(F,B,N,_);z.type=ki,z.needsUpdate=!0;const C=b*4;for(let H=0;H<_;H++){const Q=m[H],$=L[H],re=I[H],he=B*N*4*H;for(let ie=0;ie<Q.count;ie++){const pe=ie*C;S===!0&&(o.fromBufferAttribute(Q,ie),F[he+pe+0]=o.x,F[he+pe+1]=o.y,F[he+pe+2]=o.z,F[he+pe+3]=0),A===!0&&(o.fromBufferAttribute($,ie),F[he+pe+4]=o.x,F[he+pe+5]=o.y,F[he+pe+6]=o.z,F[he+pe+7]=0),v===!0&&(o.fromBufferAttribute(re,ie),F[he+pe+8]=o.x,F[he+pe+9]=o.y,F[he+pe+10]=o.z,F[he+pe+11]=re.itemSize===4?o.w:1)}}g={count:_,texture:z,size:new xe(B,N)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let S=0;for(let v=0;v<f.length;v++)S+=f[v];const A=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function jw(r,e,t,i){let o=new WeakMap;function a(h){const f=i.render.frame,p=h.geometry,_=e.get(h,p);if(o.get(_)!==f&&(e.update(_),o.set(_,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==f&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;o.get(g)!==f&&(g.update(),o.set(g,f))}return _}function c(){o=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const xm=new Ln,xp=new _m(1,1),Mm=new am,Em=new yS,Sm=new pm,Mp=[],Ep=[],Sp=new Float32Array(16),yp=new Float32Array(9),Tp=new Float32Array(4);function Hs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Mp[o];if(a===void 0&&(a=new Float32Array(o),Mp[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(a,u)}return a}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fl(r,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function eA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function nA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function iA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function rA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Tp.set(i),r.uniformMatrix2fv(this.addr,!1,Tp),ln(t,i)}}function sA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;yp.set(i),r.uniformMatrix3fv(this.addr,!1,yp),ln(t,i)}}function oA(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Sp.set(i),r.uniformMatrix4fv(this.addr,!1,Sp),ln(t,i)}}function aA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function cA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function uA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function hA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function pA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function mA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(xp.compareFunction=rm,a=xp):a=xm,t.setTexture2D(e||a,o)}function _A(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Em,o)}function gA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Sm,o)}function vA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Mm,o)}function xA(r){switch(r){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return aA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return hA;case 36294:return fA;case 36295:return dA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return vA}}function MA(r,e){r.uniform1fv(this.addr,e)}function EA(r,e){const t=Hs(e,this.size,2);r.uniform2fv(this.addr,t)}function SA(r,e){const t=Hs(e,this.size,3);r.uniform3fv(this.addr,t)}function yA(r,e){const t=Hs(e,this.size,4);r.uniform4fv(this.addr,t)}function TA(r,e){const t=Hs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wA(r,e){const t=Hs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AA(r,e){const t=Hs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bA(r,e){r.uniform1iv(this.addr,e)}function RA(r,e){r.uniform2iv(this.addr,e)}function CA(r,e){r.uniform3iv(this.addr,e)}function IA(r,e){r.uniform4iv(this.addr,e)}function LA(r,e){r.uniform1uiv(this.addr,e)}function PA(r,e){r.uniform2uiv(this.addr,e)}function DA(r,e){r.uniform3uiv(this.addr,e)}function UA(r,e){r.uniform4uiv(this.addr,e)}function NA(r,e,t){const i=this.cache,o=e.length,a=fl(t,o);an(i,a)||(r.uniform1iv(this.addr,a),ln(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||xm,a[c])}function FA(r,e,t){const i=this.cache,o=e.length,a=fl(t,o);an(i,a)||(r.uniform1iv(this.addr,a),ln(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Em,a[c])}function OA(r,e,t){const i=this.cache,o=e.length,a=fl(t,o);an(i,a)||(r.uniform1iv(this.addr,a),ln(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Sm,a[c])}function BA(r,e,t){const i=this.cache,o=e.length,a=fl(t,o);an(i,a)||(r.uniform1iv(this.addr,a),ln(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Mm,a[c])}function zA(r){switch(r){case 5126:return MA;case 35664:return EA;case 35665:return SA;case 35666:return yA;case 35674:return TA;case 35675:return wA;case 35676:return AA;case 5124:case 35670:return bA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return IA;case 5125:return LA;case 36294:return PA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return BA}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function wp(r,e){r.seq.push(e),r.map[e.id]=e}function WA(r,e,t){const i=r.name,o=i.length;for(nu.lastIndex=0;;){const a=nu.exec(i),c=nu.lastIndex;let u=a[1];const h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===o){wp(t,f===void 0?new GA(u,r,e):new HA(u,r,e));break}else{let _=t.map[u];_===void 0&&(_=new VA(u),wp(t,_)),t=_}}}class nl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);WA(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Ap(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const kA=37297;let XA=0;function qA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const bp=new lt;function YA(r){At._getMatrix(bp,At.workingColorSpace,r);const e=`mat3( ${bp.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case il:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Rp(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+qA(r.getShaderSource(e),c)}else return o}function ZA(r,e){const t=YA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function KA(r,e){let t;switch(e){case KE:t="Linear";break;case $E:t="Reinhard";break;case JE:t="Cineon";break;case QE:t="ACESFilmic";break;case eS:t="AgX";break;case tS:t="Neutral";break;case jE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new D;function $A(){At.getLuminanceCoefficients(Ya);const r=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function QA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function xo(r){return r!==""}function Cp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(r){return r.replace(eb,nb)}const tb=new Map;function nb(r,e){let t=ut[e];if(t===void 0){const i=tb.get(e);if(i!==void 0)t=ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qu(t)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(r){return r.replace(ib,rb)}function rb(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Pp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===RE?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function ob(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ab(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function lb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case YE:e="ENVMAP_BLENDING_MIX";break;case ZE:e="ENVMAP_BLENDING_ADD";break}return e}function cb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ub(r,e,t,i){const o=r.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=sb(t),f=ob(t),p=ab(t),_=lb(t),g=cb(t),x=JA(t),S=QA(a),A=o.createProgram();let v,m,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(xo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(v=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pr?"#define TONE_MAPPING":"",t.toneMapping!==pr?ut.tonemapping_pars_fragment:"",t.toneMapping!==pr?KA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ZA("linearToOutputTexel",t.outputColorSpace),$A(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),c=qu(c),c=Cp(c,t),c=Ip(c,t),u=qu(u),u=Cp(u,t),u=Ip(u,t),c=Lp(c),u=Lp(u),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=L+v+c,b=L+m+u,B=Ap(o,o.VERTEX_SHADER,I),N=Ap(o,o.FRAGMENT_SHADER,b);o.attachShader(A,B),o.attachShader(A,N),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(H){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(A).trim(),$=o.getShaderInfoLog(B).trim(),re=o.getShaderInfoLog(N).trim();let he=!0,ie=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,B,N);else{const pe=Rp(o,B,"vertex"),j=Rp(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+pe+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||re==="")&&(ie=!1);ie&&(H.diagnostics={runnable:he,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:re,prefix:m}})}o.deleteShader(B),o.deleteShader(N),z=new nl(o,A),C=jA(o,A)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(A,kA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=N,this}let hb=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new db(e),t.set(e,i)),i}}class db{constructor(e){this.id=hb++,this.code=e,this.usedTimes=0}}function pb(r,e,t,i,o,a,c){const u=new lm,h=new fb,f=new Set,p=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let x=o.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return f.add(C),C===0?"uv":`uv${C}`}function v(C,T,H,Q,$){const re=Q.fog,he=$.geometry,ie=C.isMeshStandardMaterial?Q.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ie),j=pe&&pe.mapping===cl?pe.image.height:null,be=S[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Le=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Be=Le!==void 0?Le.length:0;let ht=0;he.morphAttributes.position!==void 0&&(ht=1),he.morphAttributes.normal!==void 0&&(ht=2),he.morphAttributes.color!==void 0&&(ht=3);let It,le,Me,ze;if(be){const bt=yi[be];It=bt.vertexShader,le=bt.fragmentShader}else It=C.vertexShader,le=C.fragmentShader,h.update(C),Me=h.getVertexShaderID(C),ze=h.getFragmentShaderID(C);const Re=r.getRenderTarget(),Xe=r.state.buffers.depth.getReversed(),pt=$.isInstancedMesh===!0,je=$.isBatchedMesh===!0,Gt=!!C.map,Pt=!!C.matcap,mt=!!pe,O=!!C.aoMap,cn=!!C.lightMap,vt=!!C.bumpMap,nt=!!C.normalMap,We=!!C.displacementMap,Ot=!!C.emissiveMap,He=!!C.metalnessMap,P=!!C.roughnessMap,E=C.anisotropy>0,Y=C.clearcoat>0,ue=C.dispersion>0,fe=C.iridescence>0,oe=C.sheen>0,Ge=C.transmission>0,Se=E&&!!C.anisotropyMap,Pe=Y&&!!C.clearcoatMap,_t=Y&&!!C.clearcoatNormalMap,ve=Y&&!!C.clearcoatRoughnessMap,Ue=fe&&!!C.iridescenceMap,Ye=fe&&!!C.iridescenceThicknessMap,Qe=oe&&!!C.sheenColorMap,Ne=oe&&!!C.sheenRoughnessMap,dt=!!C.specularMap,it=!!C.specularColorMap,Dt=!!C.specularIntensityMap,V=Ge&&!!C.transmissionMap,we=Ge&&!!C.thicknessMap,ee=!!C.gradientMap,ce=!!C.alphaMap,Ie=C.alphaTest>0,Ce=!!C.alphaHash,st=!!C.extensions;let kt=pr;C.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(kt=r.toneMapping);const tn={shaderID:be,shaderType:C.type,shaderName:C.name,vertexShader:It,fragmentShader:le,defines:C.defines,customVertexShaderID:Me,customFragmentShaderID:ze,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:je,batchingColor:je&&$._colorsTexture!==null,instancing:pt,instancingColor:pt&&$.instanceColor!==null,instancingMorph:pt&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:Gt,matcap:Pt,envMap:mt,envMapMode:mt&&pe.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:cn,bumpMap:vt,normalMap:nt,displacementMap:g&&We,emissiveMap:Ot,normalMapObjectSpace:nt&&C.normalMapType===sS,normalMapTangentSpace:nt&&C.normalMapType===im,metalnessMap:He,roughnessMap:P,anisotropy:E,anisotropyMap:Se,clearcoat:Y,clearcoatMap:Pe,clearcoatNormalMap:_t,clearcoatRoughnessMap:ve,dispersion:ue,iridescence:fe,iridescenceMap:Ue,iridescenceThicknessMap:Ye,sheen:oe,sheenColorMap:Qe,sheenRoughnessMap:Ne,specularMap:dt,specularColorMap:it,specularIntensityMap:Dt,transmission:Ge,transmissionMap:V,thicknessMap:we,gradientMap:ee,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ie,alphaHash:Ce,combine:C.combine,mapUv:Gt&&A(C.map.channel),aoMapUv:O&&A(C.aoMap.channel),lightMapUv:cn&&A(C.lightMap.channel),bumpMapUv:vt&&A(C.bumpMap.channel),normalMapUv:nt&&A(C.normalMap.channel),displacementMapUv:We&&A(C.displacementMap.channel),emissiveMapUv:Ot&&A(C.emissiveMap.channel),metalnessMapUv:He&&A(C.metalnessMap.channel),roughnessMapUv:P&&A(C.roughnessMap.channel),anisotropyMapUv:Se&&A(C.anisotropyMap.channel),clearcoatMapUv:Pe&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:_t&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&A(C.sheenRoughnessMap.channel),specularMapUv:dt&&A(C.specularMap.channel),specularColorMapUv:it&&A(C.specularColorMap.channel),specularIntensityMapUv:Dt&&A(C.specularIntensityMap.channel),transmissionMapUv:V&&A(C.transmissionMap.channel),thicknessMapUv:we&&A(C.thicknessMap.channel),alphaMapUv:ce&&A(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(nt||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(Gt||ce),fog:!!re,useFog:C.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Xe,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ht,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:Gt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ot&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Ut,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Wi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:st&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&C.extensions.multiDraw===!0||je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)T.push(H),T.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(L(T,C),I(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function L(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function I(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function b(C){const T=S[C.type];let H;if(T){const Q=yi[T];H=OS.clone(Q.uniforms)}else H=C.uniforms;return H}function B(C,T){let H;for(let Q=0,$=p.length;Q<$;Q++){const re=p[Q];if(re.cacheKey===T){H=re,++H.usedTimes;break}}return H===void 0&&(H=new ub(r,T,C,a),p.push(H)),H}function N(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function F(C){h.remove(C)}function z(){h.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:B,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:z}}function mb(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function o(c,u,h){r.get(c)[u]=h}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function _b(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Up(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(_,g,x,S,A,v){let m=r[e];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:S,renderOrder:_.renderOrder,z:A,group:v},r[e]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=S,m.renderOrder=_.renderOrder,m.z=A,m.group=v),e++,m}function u(_,g,x,S,A,v){const m=c(_,g,x,S,A,v);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):t.push(m)}function h(_,g,x,S,A,v){const m=c(_,g,x,S,A,v);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):t.unshift(m)}function f(_,g){t.length>1&&t.sort(_||_b),i.length>1&&i.sort(g||Dp),o.length>1&&o.sort(g||Dp)}function p(){for(let _=e,g=r.length;_<g;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:h,finish:p,sort:f}}function gb(){let r=new WeakMap;function e(i,o){const a=r.get(i);let c;return a===void 0?(c=new Up,r.set(i,[c])):o>=a.length?(c=new Up,a.push(c)):c=a[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function vb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ne};break;case"SpotLight":t={position:new D,direction:new D,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function xb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Mb=0;function Eb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Sb(r){const e=new vb,t=xb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new D);const o=new D,a=new qt,c=new qt;function u(f){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,S=0,A=0,v=0,m=0,L=0,I=0,b=0,B=0,N=0,F=0;f.sort(Eb);for(let C=0,T=f.length;C<T;C++){const H=f[C],Q=H.color,$=H.intensity,re=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(H.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(H.sh.coefficients[ie],$);F++}else if(H.isDirectionalLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pe=H.shadow,j=t.get(H);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=he,i.directionalShadowMatrix[x]=H.shadow.matrix,L++}i.directional[x]=ie,x++}else if(H.isSpotLight){const ie=e.get(H);ie.position.setFromMatrixPosition(H.matrixWorld),ie.color.copy(Q).multiplyScalar($),ie.distance=re,ie.coneCos=Math.cos(H.angle),ie.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ie.decay=H.decay,i.spot[A]=ie;const pe=H.shadow;if(H.map&&(i.spotLightMap[B]=H.map,B++,pe.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[A]=pe.matrix,H.castShadow){const j=t.get(H);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,i.spotShadow[A]=j,i.spotShadowMap[A]=he,b++}A++}else if(H.isRectAreaLight){const ie=e.get(H);ie.color.copy(Q).multiplyScalar($),ie.halfWidth.set(H.width*.5,0,0),ie.halfHeight.set(0,H.height*.5,0),i.rectArea[v]=ie,v++}else if(H.isPointLight){const ie=e.get(H);if(ie.color.copy(H.color).multiplyScalar(H.intensity),ie.distance=H.distance,ie.decay=H.decay,H.castShadow){const pe=H.shadow,j=t.get(H);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,i.pointShadow[S]=j,i.pointShadowMap[S]=he,i.pointShadowMatrix[S]=H.shadow.matrix,I++}i.point[S]=ie,S++}else if(H.isHemisphereLight){const ie=e.get(H);ie.skyColor.copy(H.color).multiplyScalar($),ie.groundColor.copy(H.groundColor).multiplyScalar($),i.hemi[m]=ie,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==x||z.pointLength!==S||z.spotLength!==A||z.rectAreaLength!==v||z.hemiLength!==m||z.numDirectionalShadows!==L||z.numPointShadows!==I||z.numSpotShadows!==b||z.numSpotMaps!==B||z.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=A,i.rectArea.length=v,i.point.length=S,i.hemi.length=m,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=b+B-N,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,z.directionalLength=x,z.pointLength=S,z.spotLength=A,z.rectAreaLength=v,z.hemiLength=m,z.numDirectionalShadows=L,z.numPointShadows=I,z.numSpotShadows=b,z.numSpotMaps=B,z.numLightProbes=F,i.version=Mb++)}function h(f,p){let _=0,g=0,x=0,S=0,A=0;const v=p.matrixWorldInverse;for(let m=0,L=f.length;m<L;m++){const I=f[m];if(I.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),_++}else if(I.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),x++}else if(I.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(v),c.identity(),a.copy(I.matrixWorld),a.premultiply(v),c.extractRotation(a),b.halfWidth.set(I.width*.5,0,0),b.halfHeight.set(0,I.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),S++}else if(I.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(v),g++}else if(I.isHemisphereLight){const b=i.hemi[A];b.direction.setFromMatrixPosition(I.matrixWorld),b.direction.transformDirection(v),A++}}}return{setup:u,setupView:h,state:i}}function Np(r){const e=new Sb(r),t=[],i=[];function o(p){f.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function h(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function yb(r){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new Np(r),e.set(o,[u])):a>=c.length?(u=new Np(r),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(r,e,t){let i=new ah;const o=new xe,a=new xe,c=new Ft,u=new YS({depthPacking:rS}),h=new ZS,f={},p=t.maxTextureSize,_={[_r]:Bn,[Bn]:_r,[Wi]:Wi},g=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Tb,fragmentShader:wb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new Kn;S.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new gn(S,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let m=this.type;this.render=function(N,F,z){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(dr),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Vi&&this.type===Vi,re=m===Vi&&this.type!==Vi;for(let he=0,ie=N.length;he<ie;he++){const pe=N[he],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const be=j.getFrameExtents();if(o.multiply(be),a.copy(j.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/be.x),o.x=a.x*be.x,j.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/be.y),o.y=a.y*be.y,j.mapSize.y=a.y)),j.map===null||$===!0||re===!0){const Be=this.type!==Vi?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new Vr(o.x,o.y,Be),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Le=j.getViewportCount();for(let Be=0;Be<Le;Be++){const ht=j.getViewport(Be);c.set(a.x*ht.x,a.y*ht.y,a.x*ht.z,a.y*ht.w),Q.viewport(c),j.updateMatrices(pe,Be),i=j.getFrustum(),b(F,z,j.camera,pe,this.type)}j.isPointLightShadow!==!0&&this.type===Vi&&L(j,z),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(C,T,H)};function L(N,F){const z=e.update(A);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Vr(o.x,o.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,z,g,A,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,z,x,A,null)}function I(N,F,z,C){let T=null;const H=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)T=H;else if(T=z.isPointLight===!0?h:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Q=T.uuid,$=F.uuid;let re=f[Q];re===void 0&&(re={},f[Q]=re);let he=re[$];he===void 0&&(he=T.clone(),re[$]=he,F.addEventListener("dispose",B)),T=he}if(T.visible=F.visible,T.wireframe=F.wireframe,C===Vi?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:_[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=r.properties.get(T);Q.light=z}return T}function b(N,F,z,C,T){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Vi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const $=e.update(N),re=N.material;if(Array.isArray(re)){const he=$.groups;for(let ie=0,pe=he.length;ie<pe;ie++){const j=he[ie],be=re[j.materialIndex];if(be&&be.visible){const Le=I(N,be,C,T);N.onBeforeShadow(r,N,F,z,$,Le,j),r.renderBufferDirect(z,null,$,Le,N,j),N.onAfterShadow(r,N,F,z,$,Le,j)}}}else if(re.visible){const he=I(N,re,C,T);N.onBeforeShadow(r,N,F,z,$,he,null),r.renderBufferDirect(z,null,$,he,N,null),N.onAfterShadow(r,N,F,z,$,he,null)}}const Q=N.children;for(let $=0,re=Q.length;$<re;$++)b(Q[$],F,z,C,T)}function B(N){N.target.removeEventListener("dispose",B);for(const z in f){const C=f[z],T=N.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const bb={[ou]:au,[lu]:hu,[cu]:fu,[Ps]:uu,[au]:ou,[hu]:lu,[fu]:cu,[uu]:Ps};function Rb(r,e){function t(){let V=!1;const we=new Ft;let ee=null;const ce=new Ft(0,0,0,0);return{setMask:function(Ie){ee!==Ie&&!V&&(r.colorMask(Ie,Ie,Ie,Ie),ee=Ie)},setLocked:function(Ie){V=Ie},setClear:function(Ie,Ce,st,kt,tn){tn===!0&&(Ie*=kt,Ce*=kt,st*=kt),we.set(Ie,Ce,st,kt),ce.equals(we)===!1&&(r.clearColor(Ie,Ce,st,kt),ce.copy(we))},reset:function(){V=!1,ee=null,ce.set(-1,0,0,0)}}}function i(){let V=!1,we=!1,ee=null,ce=null,Ie=null;return{setReversed:function(Ce){if(we!==Ce){const st=e.get("EXT_clip_control");we?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const kt=Ie;Ie=null,this.setClear(kt)}we=Ce},getReversed:function(){return we},setTest:function(Ce){Ce?Re(r.DEPTH_TEST):Xe(r.DEPTH_TEST)},setMask:function(Ce){ee!==Ce&&!V&&(r.depthMask(Ce),ee=Ce)},setFunc:function(Ce){if(we&&(Ce=bb[Ce]),ce!==Ce){switch(Ce){case ou:r.depthFunc(r.NEVER);break;case au:r.depthFunc(r.ALWAYS);break;case lu:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case cu:r.depthFunc(r.EQUAL);break;case uu:r.depthFunc(r.GEQUAL);break;case hu:r.depthFunc(r.GREATER);break;case fu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ce=Ce}},setLocked:function(Ce){V=Ce},setClear:function(Ce){Ie!==Ce&&(we&&(Ce=1-Ce),r.clearDepth(Ce),Ie=Ce)},reset:function(){V=!1,ee=null,ce=null,Ie=null,we=!1}}}function o(){let V=!1,we=null,ee=null,ce=null,Ie=null,Ce=null,st=null,kt=null,tn=null;return{setTest:function(bt){V||(bt?Re(r.STENCIL_TEST):Xe(r.STENCIL_TEST))},setMask:function(bt){we!==bt&&!V&&(r.stencilMask(bt),we=bt)},setFunc:function(bt,zn,li){(ee!==bt||ce!==zn||Ie!==li)&&(r.stencilFunc(bt,zn,li),ee=bt,ce=zn,Ie=li)},setOp:function(bt,zn,li){(Ce!==bt||st!==zn||kt!==li)&&(r.stencilOp(bt,zn,li),Ce=bt,st=zn,kt=li)},setLocked:function(bt){V=bt},setClear:function(bt){tn!==bt&&(r.clearStencil(bt),tn=bt)},reset:function(){V=!1,we=null,ee=null,ce=null,Ie=null,Ce=null,st=null,kt=null,tn=null}}}const a=new t,c=new i,u=new o,h=new WeakMap,f=new WeakMap;let p={},_={},g=new WeakMap,x=[],S=null,A=!1,v=null,m=null,L=null,I=null,b=null,B=null,N=null,F=new ne(0,0,0),z=0,C=!1,T=null,H=null,Q=null,$=null,re=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,pe=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),ie=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ie=pe>=2);let be=null,Le={};const Be=r.getParameter(r.SCISSOR_BOX),ht=r.getParameter(r.VIEWPORT),It=new Ft().fromArray(Be),le=new Ft().fromArray(ht);function Me(V,we,ee,ce){const Ie=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(V,Ce),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<ee;st++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,ce,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(we+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Ce}const ze={};ze[r.TEXTURE_2D]=Me(r.TEXTURE_2D,r.TEXTURE_2D,1),ze[r.TEXTURE_CUBE_MAP]=Me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[r.TEXTURE_2D_ARRAY]=Me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ze[r.TEXTURE_3D]=Me(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Re(r.DEPTH_TEST),c.setFunc(Ps),vt(!1),nt(Ud),Re(r.CULL_FACE),O(dr);function Re(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Xe(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function pt(V,we){return _[V]!==we?(r.bindFramebuffer(V,we),_[V]=we,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=we),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=we),!0):!1}function je(V,we){let ee=x,ce=!1;if(V){ee=g.get(we),ee===void 0&&(ee=[],g.set(we,ee));const Ie=V.textures;if(ee.length!==Ie.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,st=Ie.length;Ce<st;Ce++)ee[Ce]=r.COLOR_ATTACHMENT0+Ce;ee.length=Ie.length,ce=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,ce=!0);ce&&r.drawBuffers(ee)}function Gt(V){return S!==V?(r.useProgram(V),S=V,!0):!1}const Pt={[Or]:r.FUNC_ADD,[IE]:r.FUNC_SUBTRACT,[LE]:r.FUNC_REVERSE_SUBTRACT};Pt[PE]=r.MIN,Pt[DE]=r.MAX;const mt={[UE]:r.ZERO,[NE]:r.ONE,[FE]:r.SRC_COLOR,[ru]:r.SRC_ALPHA,[VE]:r.SRC_ALPHA_SATURATE,[GE]:r.DST_COLOR,[BE]:r.DST_ALPHA,[OE]:r.ONE_MINUS_SRC_COLOR,[su]:r.ONE_MINUS_SRC_ALPHA,[HE]:r.ONE_MINUS_DST_COLOR,[zE]:r.ONE_MINUS_DST_ALPHA,[WE]:r.CONSTANT_COLOR,[kE]:r.ONE_MINUS_CONSTANT_COLOR,[XE]:r.CONSTANT_ALPHA,[qE]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,we,ee,ce,Ie,Ce,st,kt,tn,bt){if(V===dr){A===!0&&(Xe(r.BLEND),A=!1);return}if(A===!1&&(Re(r.BLEND),A=!0),V!==CE){if(V!==v||bt!==C){if((m!==Or||b!==Or)&&(r.blendEquation(r.FUNC_ADD),m=Or,b=Or),bt)switch(V){case Rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.ONE,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,I=null,B=null,N=null,F.set(0,0,0),z=0,v=V,C=bt}return}Ie=Ie||we,Ce=Ce||ee,st=st||ce,(we!==m||Ie!==b)&&(r.blendEquationSeparate(Pt[we],Pt[Ie]),m=we,b=Ie),(ee!==L||ce!==I||Ce!==B||st!==N)&&(r.blendFuncSeparate(mt[ee],mt[ce],mt[Ce],mt[st]),L=ee,I=ce,B=Ce,N=st),(kt.equals(F)===!1||tn!==z)&&(r.blendColor(kt.r,kt.g,kt.b,tn),F.copy(kt),z=tn),v=V,C=!1}function cn(V,we){V.side===Wi?Xe(r.CULL_FACE):Re(r.CULL_FACE);let ee=V.side===Bn;we&&(ee=!ee),vt(ee),V.blending===Rs&&V.transparent===!1?O(dr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const ce=V.stencilWrite;u.setTest(ce),ce&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):Xe(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){T!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),T=V)}function nt(V){V!==AE?(Re(r.CULL_FACE),V!==H&&(V===Ud?r.cullFace(r.BACK):V===bE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Xe(r.CULL_FACE),H=V}function We(V){V!==Q&&(ie&&r.lineWidth(V),Q=V)}function Ot(V,we,ee){V?(Re(r.POLYGON_OFFSET_FILL),($!==we||re!==ee)&&(r.polygonOffset(we,ee),$=we,re=ee)):Xe(r.POLYGON_OFFSET_FILL)}function He(V){V?Re(r.SCISSOR_TEST):Xe(r.SCISSOR_TEST)}function P(V){V===void 0&&(V=r.TEXTURE0+he-1),be!==V&&(r.activeTexture(V),be=V)}function E(V,we,ee){ee===void 0&&(be===null?ee=r.TEXTURE0+he-1:ee=be);let ce=Le[ee];ce===void 0&&(ce={type:void 0,texture:void 0},Le[ee]=ce),(ce.type!==V||ce.texture!==we)&&(be!==ee&&(r.activeTexture(ee),be=ee),r.bindTexture(V,we||ze[V]),ce.type=V,ce.texture=we)}function Y(){const V=Le[be];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(V){It.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),It.copy(V))}function Ne(V){le.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),le.copy(V))}function dt(V,we){let ee=f.get(we);ee===void 0&&(ee=new WeakMap,f.set(we,ee));let ce=ee.get(V);ce===void 0&&(ce=r.getUniformBlockIndex(we,V.name),ee.set(V,ce))}function it(V,we){const ce=f.get(we).get(V);h.get(we)!==ce&&(r.uniformBlockBinding(we,ce,V.__bindingPointIndex),h.set(we,ce))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},be=null,Le={},_={},g=new WeakMap,x=[],S=null,A=!1,v=null,m=null,L=null,I=null,b=null,B=null,N=null,F=new ne(0,0,0),z=0,C=!1,T=null,H=null,Q=null,$=null,re=null,It.set(0,0,r.canvas.width,r.canvas.height),le.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Re,disable:Xe,bindFramebuffer:pt,drawBuffers:je,useProgram:Gt,setBlending:O,setMaterial:cn,setFlipSided:vt,setCullFace:nt,setLineWidth:We,setPolygonOffset:Ot,setScissorTest:He,activeTexture:P,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ue,compressedTexImage3D:fe,texImage2D:Ue,texImage3D:Ye,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:_t,texStorage3D:ve,texSubImage2D:oe,texSubImage3D:Ge,compressedTexSubImage2D:Se,compressedTexSubImage3D:Pe,scissor:Qe,viewport:Ne,reset:Dt}}function Cb(r,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new xe,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,E){return x?new OffscreenCanvas(P,E):Ao("canvas")}function A(P,E,Y){let ue=1;const fe=He(P);if((fe.width>Y||fe.height>Y)&&(ue=Y/Math.max(fe.width,fe.height)),ue<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const oe=Math.floor(ue*fe.width),Ge=Math.floor(ue*fe.height);_===void 0&&(_=S(oe,Ge));const Se=E?S(oe,Ge):_;return Se.width=oe,Se.height=Ge,Se.getContext("2d").drawImage(P,0,0,oe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+oe+"x"+Ge+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),P;return P}function v(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(P,E,Y,ue,fe=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=E;if(E===r.RED&&(Y===r.FLOAT&&(oe=r.R32F),Y===r.HALF_FLOAT&&(oe=r.R16F),Y===r.UNSIGNED_BYTE&&(oe=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(oe=r.R8UI),Y===r.UNSIGNED_SHORT&&(oe=r.R16UI),Y===r.UNSIGNED_INT&&(oe=r.R32UI),Y===r.BYTE&&(oe=r.R8I),Y===r.SHORT&&(oe=r.R16I),Y===r.INT&&(oe=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(oe=r.RG32F),Y===r.HALF_FLOAT&&(oe=r.RG16F),Y===r.UNSIGNED_BYTE&&(oe=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(oe=r.RG8UI),Y===r.UNSIGNED_SHORT&&(oe=r.RG16UI),Y===r.UNSIGNED_INT&&(oe=r.RG32UI),Y===r.BYTE&&(oe=r.RG8I),Y===r.SHORT&&(oe=r.RG16I),Y===r.INT&&(oe=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),Y===r.UNSIGNED_INT&&(oe=r.RGB32UI),Y===r.BYTE&&(oe=r.RGB8I),Y===r.SHORT&&(oe=r.RGB16I),Y===r.INT&&(oe=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),Y===r.UNSIGNED_INT&&(oe=r.RGBA32UI),Y===r.BYTE&&(oe=r.RGBA8I),Y===r.SHORT&&(oe=r.RGBA16I),Y===r.INT&&(oe=r.RGBA32I)),E===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),E===r.RGBA){const Ge=fe?il:At.getTransfer(ue);Y===r.FLOAT&&(oe=r.RGBA32F),Y===r.HALF_FLOAT&&(oe=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(oe=Ge===Ut?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(P,E){let Y;return P?E===null||E===Hr||E===Ns?Y=r.DEPTH24_STENCIL8:E===ki?Y=r.DEPTH32F_STENCIL8:E===wo&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hr||E===Ns?Y=r.DEPTH_COMPONENT24:E===ki?Y=r.DEPTH_COMPONENT32F:E===wo&&(Y=r.DEPTH_COMPONENT16),Y}function B(P,E){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==vi&&P.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),z(E),E.isVideoTexture&&p.delete(E)}function F(P){const E=P.target;E.removeEventListener("dispose",F),T(E)}function z(P){const E=i.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ue=g.get(Y);if(ue){const fe=ue[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&C(P),Object.keys(ue).length===0&&g.delete(Y)}i.remove(P)}function C(P){const E=i.get(P);r.deleteTexture(E.__webglTexture);const Y=P.source,ue=g.get(Y);delete ue[E.__cacheKey],c.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let fe=0;fe<E.__webglFramebuffer[ue].length;fe++)r.deleteFramebuffer(E.__webglFramebuffer[ue][fe]);else r.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)r.deleteFramebuffer(E.__webglFramebuffer[ue]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let ue=0,fe=Y.length;ue<fe;ue++){const oe=i.get(Y[ue]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),c.memory.textures--),i.remove(Y[ue])}i.remove(P)}let H=0;function Q(){H=0}function $(){const P=H;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),H+=1,P}function re(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function he(P,E){const Y=i.get(P);if(P.isVideoTexture&&We(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ue=P.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(Y,P,E);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function ie(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){le(Y,P,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function pe(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){le(Y,P,E);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function j(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Me(Y,P,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const be={[mu]:r.REPEAT,[zr]:r.CLAMP_TO_EDGE,[_u]:r.MIRRORED_REPEAT},Le={[vi]:r.NEAREST,[nS]:r.NEAREST_MIPMAP_NEAREST,[ya]:r.NEAREST_MIPMAP_LINEAR,[wi]:r.LINEAR,[Tc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},Be={[oS]:r.NEVER,[fS]:r.ALWAYS,[aS]:r.LESS,[rm]:r.LEQUAL,[lS]:r.EQUAL,[hS]:r.GEQUAL,[cS]:r.GREATER,[uS]:r.NOTEQUAL};function ht(P,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Tc||E.magFilter===ya||E.magFilter===Gr||E.minFilter===wi||E.minFilter===Tc||E.minFilter===ya||E.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,be[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,be[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,be[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Le[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==ya&&E.minFilter!==Gr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function It(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const ue=E.source;let fe=g.get(ue);fe===void 0&&(fe={},g.set(ue,fe));const oe=re(E);if(oe!==P.__cacheKey){fe[oe]===void 0&&(fe[oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),fe[oe].usedTimes++;const Ge=fe[P.__cacheKey];Ge!==void 0&&(fe[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),P.__cacheKey=oe,P.__webglTexture=fe[oe].texture}return Y}function le(P,E,Y){let ue=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=r.TEXTURE_3D);const fe=It(P,E),oe=E.source;t.bindTexture(ue,P.__webglTexture,r.TEXTURE0+Y);const Ge=i.get(oe);if(oe.version!==Ge.__version||fe===!0){t.activeTexture(r.TEXTURE0+Y);const Se=At.getPrimaries(At.workingColorSpace),Pe=E.colorSpace===fr?null:At.getPrimaries(E.colorSpace),_t=E.colorSpace===fr||Se===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ve=A(E.image,!1,o.maxTextureSize);ve=Ot(E,ve);const Ue=a.convert(E.format,E.colorSpace),Ye=a.convert(E.type);let Qe=I(E.internalFormat,Ue,Ye,E.colorSpace,E.isVideoTexture);ht(ue,E);let Ne;const dt=E.mipmaps,it=E.isVideoTexture!==!0,Dt=Ge.__version===void 0||fe===!0,V=oe.dataReady,we=B(E,ve);if(E.isDepthTexture)Qe=b(E.format===Fs,E.type),Dt&&(it?t.texStorage2D(r.TEXTURE_2D,1,Qe,ve.width,ve.height):t.texImage2D(r.TEXTURE_2D,0,Qe,ve.width,ve.height,0,Ue,Ye,null));else if(E.isDataTexture)if(dt.length>0){it&&Dt&&t.texStorage2D(r.TEXTURE_2D,we,Qe,dt[0].width,dt[0].height);for(let ee=0,ce=dt.length;ee<ce;ee++)Ne=dt[ee],it?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Ue,Ye,Ne.data):t.texImage2D(r.TEXTURE_2D,ee,Qe,Ne.width,Ne.height,0,Ue,Ye,Ne.data);E.generateMipmaps=!1}else it?(Dt&&t.texStorage2D(r.TEXTURE_2D,we,Qe,ve.width,ve.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Ue,Ye,ve.data)):t.texImage2D(r.TEXTURE_2D,0,Qe,ve.width,ve.height,0,Ue,Ye,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Qe,dt[0].width,dt[0].height,ve.depth);for(let ee=0,ce=dt.length;ee<ce;ee++)if(Ne=dt[ee],E.format!==gi)if(Ue!==null)if(it){if(V)if(E.layerUpdates.size>0){const Ie=hp(Ne.width,Ne.height,E.format,E.type);for(const Ce of E.layerUpdates){const st=Ne.data.subarray(Ce*Ie/Ne.data.BYTES_PER_ELEMENT,(Ce+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Ce,Ne.width,Ne.height,1,Ue,st)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ve.depth,Ue,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Qe,Ne.width,Ne.height,ve.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Ne.width,Ne.height,ve.depth,Ue,Ye,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Qe,Ne.width,Ne.height,ve.depth,0,Ue,Ye,Ne.data)}else{it&&Dt&&t.texStorage2D(r.TEXTURE_2D,we,Qe,dt[0].width,dt[0].height);for(let ee=0,ce=dt.length;ee<ce;ee++)Ne=dt[ee],E.format!==gi?Ue!==null?it?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Ue,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ne.width,Ne.height,Ue,Ye,Ne.data):t.texImage2D(r.TEXTURE_2D,ee,Qe,Ne.width,Ne.height,0,Ue,Ye,Ne.data)}else if(E.isDataArrayTexture)if(it){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,we,Qe,ve.width,ve.height,ve.depth),V)if(E.layerUpdates.size>0){const ee=hp(ve.width,ve.height,E.format,E.type);for(const ce of E.layerUpdates){const Ie=ve.data.subarray(ce*ee/ve.data.BYTES_PER_ELEMENT,(ce+1)*ee/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,ve.width,ve.height,1,Ue,Ye,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Ye,ve.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Qe,ve.width,ve.height,ve.depth,0,Ue,Ye,ve.data);else if(E.isData3DTexture)it?(Dt&&t.texStorage3D(r.TEXTURE_3D,we,Qe,ve.width,ve.height,ve.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ue,Ye,ve.data)):t.texImage3D(r.TEXTURE_3D,0,Qe,ve.width,ve.height,ve.depth,0,Ue,Ye,ve.data);else if(E.isFramebufferTexture){if(Dt)if(it)t.texStorage2D(r.TEXTURE_2D,we,Qe,ve.width,ve.height);else{let ee=ve.width,ce=ve.height;for(let Ie=0;Ie<we;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,Qe,ee,ce,0,Ue,Ye,null),ee>>=1,ce>>=1}}else if(dt.length>0){if(it&&Dt){const ee=He(dt[0]);t.texStorage2D(r.TEXTURE_2D,we,Qe,ee.width,ee.height)}for(let ee=0,ce=dt.length;ee<ce;ee++)Ne=dt[ee],it?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ue,Ye,Ne):t.texImage2D(r.TEXTURE_2D,ee,Qe,Ue,Ye,Ne);E.generateMipmaps=!1}else if(it){if(Dt){const ee=He(ve);t.texStorage2D(r.TEXTURE_2D,we,Qe,ee.width,ee.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Ye,ve)}else t.texImage2D(r.TEXTURE_2D,0,Qe,Ue,Ye,ve);v(E)&&m(ue),Ge.__version=oe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Me(P,E,Y){if(E.image.length!==6)return;const ue=It(P,E),fe=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const oe=i.get(fe);if(fe.version!==oe.__version||ue===!0){t.activeTexture(r.TEXTURE0+Y);const Ge=At.getPrimaries(At.workingColorSpace),Se=E.colorSpace===fr?null:At.getPrimaries(E.colorSpace),Pe=E.colorSpace===fr||Ge===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const _t=E.isCompressedTexture||E.image[0].isCompressedTexture,ve=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let ce=0;ce<6;ce++)!_t&&!ve?Ue[ce]=A(E.image[ce],!0,o.maxCubemapSize):Ue[ce]=ve?E.image[ce].image:E.image[ce],Ue[ce]=Ot(E,Ue[ce]);const Ye=Ue[0],Qe=a.convert(E.format,E.colorSpace),Ne=a.convert(E.type),dt=I(E.internalFormat,Qe,Ne,E.colorSpace),it=E.isVideoTexture!==!0,Dt=oe.__version===void 0||ue===!0,V=fe.dataReady;let we=B(E,Ye);ht(r.TEXTURE_CUBE_MAP,E);let ee;if(_t){it&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,dt,Ye.width,Ye.height);for(let ce=0;ce<6;ce++){ee=Ue[ce].mipmaps;for(let Ie=0;Ie<ee.length;Ie++){const Ce=ee[Ie];E.format!==gi?Qe!==null?it?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Ce.width,Ce.height,Qe,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,dt,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,0,0,Ce.width,Ce.height,Qe,Ne,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie,dt,Ce.width,Ce.height,0,Qe,Ne,Ce.data)}}}else{if(ee=E.mipmaps,it&&Dt){ee.length>0&&we++;const ce=He(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,we,dt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ve){it?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue[ce].width,Ue[ce].height,Qe,Ne,Ue[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,dt,Ue[ce].width,Ue[ce].height,0,Qe,Ne,Ue[ce].data);for(let Ie=0;Ie<ee.length;Ie++){const st=ee[Ie].image[ce].image;it?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,st.width,st.height,Qe,Ne,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,dt,st.width,st.height,0,Qe,Ne,st.data)}}else{it?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Qe,Ne,Ue[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,dt,Qe,Ne,Ue[ce]);for(let Ie=0;Ie<ee.length;Ie++){const Ce=ee[Ie];it?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,0,0,Qe,Ne,Ce.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie+1,dt,Qe,Ne,Ce.image[ce])}}}v(E)&&m(r.TEXTURE_CUBE_MAP),oe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ze(P,E,Y,ue,fe,oe){const Ge=a.convert(Y.format,Y.colorSpace),Se=a.convert(Y.type),Pe=I(Y.internalFormat,Ge,Se,Y.colorSpace),_t=i.get(E),ve=i.get(Y);if(ve.__renderTarget=E,!_t.__hasExternalTextures){const Ue=Math.max(1,E.width>>oe),Ye=Math.max(1,E.height>>oe);fe===r.TEXTURE_3D||fe===r.TEXTURE_2D_ARRAY?t.texImage3D(fe,oe,Pe,Ue,Ye,E.depth,0,Ge,Se,null):t.texImage2D(fe,oe,Pe,Ue,Ye,0,Ge,Se,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),nt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,fe,ve.__webglTexture,0,vt(E)):(fe===r.TEXTURE_2D||fe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,fe,ve.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(P,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const ue=E.depthTexture,fe=ue&&ue.isDepthTexture?ue.type:null,oe=b(E.stencilBuffer,fe),Ge=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=vt(E);nt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Se,oe,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,oe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,oe,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,P)}else{const ue=E.textures;for(let fe=0;fe<ue.length;fe++){const oe=ue[fe],Ge=a.convert(oe.format,oe.colorSpace),Se=a.convert(oe.type),Pe=I(oe.internalFormat,Ge,Se,oe.colorSpace),_t=vt(E);Y&&nt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,Pe,E.width,E.height):nt(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,Pe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(E.depthTexture);ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const fe=ue.__webglTexture,oe=vt(E);if(E.depthTexture.format===Cs)nt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Fs)nt(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function pt(P){const E=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ue=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",fe)};ue.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=ue}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Xe(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=r.createRenderbuffer(),Re(E.__webglDepthbuffer[ue],P,!1);else{const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Re(E.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(P,E,Y){const ue=i.get(P);E!==void 0&&ze(ue.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&pt(P)}function Gt(P){const E=P.texture,Y=i.get(P),ue=i.get(E);P.addEventListener("dispose",F);const fe=P.textures,oe=P.isWebGLCubeRenderTarget===!0,Ge=fe.length>1;if(Ge||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=E.version,c.memory.textures++),oe){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)Y.__webglFramebuffer[Se][Pe]=r.createFramebuffer()}else Y.__webglFramebuffer[Se]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<E.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Se=0,Pe=fe.length;Se<Pe;Se++){const _t=i.get(fe[Se]);_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&nt(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<fe.length;Se++){const Pe=fe[Se];Y.__webglColorRenderbuffer[Se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);const _t=a.convert(Pe.format,Pe.colorSpace),ve=a.convert(Pe.type),Ue=I(Pe.internalFormat,_t,ve,Pe.colorSpace,P.isXRRenderTarget===!0),Ye=vt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,Ue,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Se,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),ht(r.TEXTURE_CUBE_MAP,E);for(let Se=0;Se<6;Se++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ze(Y.__webglFramebuffer[Se][Pe],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe);else ze(Y.__webglFramebuffer[Se],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);v(E)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Se=0,Pe=fe.length;Se<Pe;Se++){const _t=fe[Se],ve=i.get(_t);t.bindTexture(r.TEXTURE_2D,ve.__webglTexture),ht(r.TEXTURE_2D,_t),ze(Y.__webglFramebuffer,P,_t,r.COLOR_ATTACHMENT0+Se,r.TEXTURE_2D,0),v(_t)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Se=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,ue.__webglTexture),ht(Se,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)ze(Y.__webglFramebuffer[Pe],P,E,r.COLOR_ATTACHMENT0,Se,Pe);else ze(Y.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Se,0);v(E)&&m(Se),t.unbindTexture()}P.depthBuffer&&pt(P)}function Pt(P){const E=P.textures;for(let Y=0,ue=E.length;Y<ue;Y++){const fe=E[Y];if(v(fe)){const oe=L(P),Ge=i.get(fe).__webglTexture;t.bindTexture(oe,Ge),m(oe),t.unbindTexture()}}}const mt=[],O=[];function cn(P){if(P.samples>0){if(nt(P)===!1){const E=P.textures,Y=P.width,ue=P.height;let fe=r.COLOR_BUFFER_BIT;const oe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=i.get(P),Se=E.length>1;if(Se)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(fe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(fe|=r.STENCIL_BUFFER_BIT)),Se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const _t=i.get(E[Pe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_t,0)}r.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,fe,r.NEAREST),h===!0&&(mt.length=0,O.length=0,mt.push(r.COLOR_ATTACHMENT0+Pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(mt.push(oe),O.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Se)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Pe]);const _t=i.get(E[Pe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pe,r.TEXTURE_2D,_t,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function vt(P){return Math.min(o.maxSamples,P.samples)}function nt(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function We(P){const E=c.render.frame;p.get(P)!==E&&(p.set(P,E),P.update())}function Ot(P,E){const Y=P.colorSpace,ue=P.format,fe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Os&&Y!==fr&&(At.getTransfer(Y)===Ut?(ue!==gi||fe!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=he,this.setTexture2DArray=ie,this.setTexture3D=pe,this.setTextureCube=j,this.rebindTextures=je,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=nt}function Ib(r,e){function t(i,o=fr){let a;const c=At.getTransfer(o);if(i===Yi)return r.UNSIGNED_BYTE;if(i===th)return r.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return r.BYTE;if(i===Zp)return r.SHORT;if(i===wo)return r.UNSIGNED_SHORT;if(i===eh)return r.INT;if(i===Hr)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===Ro)return r.HALF_FLOAT;if(i===$p)return r.ALPHA;if(i===Jp)return r.RGB;if(i===gi)return r.RGBA;if(i===Qp)return r.LUMINANCE;if(i===jp)return r.LUMINANCE_ALPHA;if(i===Cs)return r.DEPTH_COMPONENT;if(i===Fs)return r.DEPTH_STENCIL;if(i===em)return r.RED;if(i===ih)return r.RED_INTEGER;if(i===tm)return r.RG;if(i===rh)return r.RG_INTEGER;if(i===sh)return r.RGBA_INTEGER;if(i===Ja||i===Qa||i===ja||i===el)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gu||i===vu||i===xu||i===Mu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eu||i===Su||i===yu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Eu||i===Su)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===yu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tu||i===wu||i===Au||i===bu||i===Ru||i===Cu||i===Iu||i===Lu||i===Pu||i===Du||i===Uu||i===Nu||i===Fu||i===Ou)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Tu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Au)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ru)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Iu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Du)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fu)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ou)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===Bu||i===zu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===tl)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nm||i===Gu||i===Hu||i===Vu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===tl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Ln,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gr({vertexShader:Lb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gn(new hl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ub extends zs{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",h=1,f=null,p=null,_=null,g=null,x=null,S=null;const A=new Db,v=t.getContextAttributes();let m=null,L=null;const I=[],b=[],B=new xe;let N=null;const F=new Zn;F.viewport=new Ft;const z=new Zn;z.viewport=new Ft;const C=[F,z],T=new ny;let H=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Me=I[le];return Me===void 0&&(Me=new qc,I[le]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(le){let Me=I[le];return Me===void 0&&(Me=new qc,I[le]=Me),Me.getGripSpace()},this.getHand=function(le){let Me=I[le];return Me===void 0&&(Me=new qc,I[le]=Me),Me.getHandSpace()};function $(le){const Me=b.indexOf(le.inputSource);if(Me===-1)return;const ze=I[Me];ze!==void 0&&(ze.update(le.inputSource,le.frame,f||c),ze.dispatchEvent({type:le.type,data:le.inputSource}))}function re(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",he);for(let le=0;le<I.length;le++){const Me=b[le];Me!==null&&(b[le]=null,I[le].disconnect(Me))}H=null,Q=null,A.reset(),e.setRenderTarget(m),x=null,g=null,_=null,o=null,L=null,It.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){u=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(le){f=le},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",re),o.addEventListener("inputsourceschange",he),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ze=null,Re=null,Xe=null;v.depth&&(Xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ze=v.stencil?Fs:Cs,Re=v.stencil?Ns:Hr);const pt={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:a};_=new XRWebGLBinding(o,t),g=_.createProjectionLayer(pt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Vr(g.textureWidth,g.textureHeight,{format:gi,type:Yi,depthTexture:new _m(g.textureWidth,g.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const ze={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,t,ze),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Vr(x.framebufferWidth,x.framebufferHeight,{format:gi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}L.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await o.requestReferenceSpace(u),It.setContext(o),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(le){for(let Me=0;Me<le.removed.length;Me++){const ze=le.removed[Me],Re=b.indexOf(ze);Re>=0&&(b[Re]=null,I[Re].disconnect(ze))}for(let Me=0;Me<le.added.length;Me++){const ze=le.added[Me];let Re=b.indexOf(ze);if(Re===-1){for(let pt=0;pt<I.length;pt++)if(pt>=b.length){b.push(ze),Re=pt;break}else if(b[pt]===null){b[pt]=ze,Re=pt;break}if(Re===-1)break}const Xe=I[Re];Xe&&Xe.connect(ze)}}const ie=new D,pe=new D;function j(le,Me,ze){ie.setFromMatrixPosition(Me.matrixWorld),pe.setFromMatrixPosition(ze.matrixWorld);const Re=ie.distanceTo(pe),Xe=Me.projectionMatrix.elements,pt=ze.projectionMatrix.elements,je=Xe[14]/(Xe[10]-1),Gt=Xe[14]/(Xe[10]+1),Pt=(Xe[9]+1)/Xe[5],mt=(Xe[9]-1)/Xe[5],O=(Xe[8]-1)/Xe[0],cn=(pt[8]+1)/pt[0],vt=je*O,nt=je*cn,We=Re/(-O+cn),Ot=We*-O;if(Me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ot),le.translateZ(We),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Xe[10]===-1)le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const He=je+We,P=Gt+We,E=vt-Ot,Y=nt+(Re-Ot),ue=Pt*Gt/P*He,fe=mt*Gt/P*He;le.projectionMatrix.makePerspective(E,Y,ue,fe,He,P),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function be(le,Me){Me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let Me=le.near,ze=le.far;A.texture!==null&&(A.depthNear>0&&(Me=A.depthNear),A.depthFar>0&&(ze=A.depthFar)),T.near=z.near=F.near=Me,T.far=z.far=F.far=ze,(H!==T.near||Q!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,Q=T.far),F.layers.mask=le.layers.mask|2,z.layers.mask=le.layers.mask|4,T.layers.mask=F.layers.mask|z.layers.mask;const Re=le.parent,Xe=T.cameras;be(T,Re);for(let pt=0;pt<Xe.length;pt++)be(Xe[pt],Re);Xe.length===2?j(T,F,z):T.projectionMatrix.copy(F.projectionMatrix),Le(le,T,Re)};function Le(le,Me,ze){ze===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(ze.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=ku*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=le)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let Be=null;function ht(le,Me){if(p=Me.getViewerPose(f||c),S=Me,p!==null){const ze=p.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Re=!1;ze.length!==T.cameras.length&&(T.cameras.length=0,Re=!0);for(let je=0;je<ze.length;je++){const Gt=ze[je];let Pt=null;if(x!==null)Pt=x.getViewport(Gt);else{const O=_.getViewSubImage(g,Gt);Pt=O.viewport,je===0&&(e.setRenderTargetTextures(L,O.colorTexture,g.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(L))}let mt=C[je];mt===void 0&&(mt=new Zn,mt.layers.enable(je),mt.viewport=new Ft,C[je]=mt),mt.matrix.fromArray(Gt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Gt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),je===0&&(T.matrix.copy(mt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Re===!0&&T.cameras.push(mt)}const Xe=o.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const je=_.getDepthInformation(ze[0]);je&&je.isValid&&je.texture&&A.init(e,je,o.renderState)}}for(let ze=0;ze<I.length;ze++){const Re=b[ze],Xe=I[ze];Re!==null&&Xe!==void 0&&Xe.update(Re,Me,f||c)}Be&&Be(le,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),S=null}const It=new vm;It.setAnimationLoop(ht),this.setAnimationLoop=function(le){Be=le},this.dispose=function(){}}}const Ur=new Ai,Nb=new qt;function Fb(r,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,fm(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function o(v,m,L,I,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(v,m):m.isMeshToonMaterial?(a(v,m),_(v,m)):m.isMeshPhongMaterial?(a(v,m),p(v,m)):m.isMeshStandardMaterial?(a(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,b)):m.isMeshMatcapMaterial?(a(v,m),S(v,m)):m.isMeshDepthMaterial?a(v,m):m.isMeshDistanceMaterial?(a(v,m),A(v,m)):m.isMeshNormalMaterial?a(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?h(v,m,L,I):m.isSpriteMaterial?f(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Bn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Bn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const L=e.get(m),I=L.envMap,b=L.envMapRotation;I&&(v.envMap.value=I,Ur.copy(b),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),v.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(Ur)),v.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,L,I){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*L,v.scale.value=I*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function f(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,L){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,m){m.matcap&&(v.matcap.value=m.matcap)}function A(v,m){const L=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Ob(r,e,t,i){let o={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,I){const b=I.program;i.uniformBlockBinding(L,b)}function f(L,I){let b=o[L.id];b===void 0&&(S(L),b=p(L),o[L.id]=b,L.addEventListener("dispose",v));const B=I.program;i.updateUBOMapping(L,B);const N=e.render.frame;a[L.id]!==N&&(g(L),a[L.id]=N)}function p(L){const I=_();L.__bindingPointIndex=I;const b=r.createBuffer(),B=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,B,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,b),b}function _(){for(let L=0;L<u;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const I=o[L.id],b=L.uniforms,B=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let N=0,F=b.length;N<F;N++){const z=Array.isArray(b[N])?b[N]:[b[N]];for(let C=0,T=z.length;C<T;C++){const H=z[C];if(x(H,N,C,B)===!0){const Q=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let re=0;for(let he=0;he<$.length;he++){const ie=$[he],pe=A(ie);typeof ie=="number"||typeof ie=="boolean"?(H.__data[0]=ie,r.bufferSubData(r.UNIFORM_BUFFER,Q+re,H.__data)):ie.isMatrix3?(H.__data[0]=ie.elements[0],H.__data[1]=ie.elements[1],H.__data[2]=ie.elements[2],H.__data[3]=0,H.__data[4]=ie.elements[3],H.__data[5]=ie.elements[4],H.__data[6]=ie.elements[5],H.__data[7]=0,H.__data[8]=ie.elements[6],H.__data[9]=ie.elements[7],H.__data[10]=ie.elements[8],H.__data[11]=0):(ie.toArray(H.__data,re),re+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(L,I,b,B){const N=L.value,F=I+"_"+b;if(B[F]===void 0)return typeof N=="number"||typeof N=="boolean"?B[F]=N:B[F]=N.clone(),!0;{const z=B[F];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return B[F]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function S(L){const I=L.uniforms;let b=0;const B=16;for(let F=0,z=I.length;F<z;F++){const C=Array.isArray(I[F])?I[F]:[I[F]];for(let T=0,H=C.length;T<H;T++){const Q=C[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let re=0,he=$.length;re<he;re++){const ie=$[re],pe=A(ie),j=b%B,be=j%pe.boundary,Le=j+be;b+=be,Le!==0&&B-Le<pe.storage&&(b+=B-Le),Q.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=pe.storage}}}const N=b%B;return N>0&&(b+=B-N),L.__size=b,L.__cache={},this}function A(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function v(L){const I=L.target;I.removeEventListener("dispose",v);const b=c.indexOf(I.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(o[I.id]),delete o[I.id],delete a[I.id]}function m(){for(const L in o)r.deleteBuffer(o[L]);c=[],o={},a={}}return{bind:h,update:f,dispose:m}}class Bb{constructor(e={}){const{canvas:t=pS(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const S=new Uint32Array(4),A=new Int32Array(4);let v=null,m=null;const L=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=pr,this.toneMappingExposure=1;const b=this;let B=!1,N=0,F=0,z=null,C=-1,T=null;const H=new Ft,Q=new Ft;let $=null;const re=new ne(0);let he=0,ie=t.width,pe=t.height,j=1,be=null,Le=null;const Be=new Ft(0,0,ie,pe),ht=new Ft(0,0,ie,pe);let It=!1;const le=new ah;let Me=!1,ze=!1;this.transmissionResolutionScale=1;const Re=new qt,Xe=new qt,pt=new D,je=new Ft,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function mt(){return z===null?j:1}let O=i;function cn(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ju}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),O===null){const k="webgl2";if(O=cn(k,w),O===null)throw cn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let vt,nt,We,Ot,He,P,E,Y,ue,fe,oe,Ge,Se,Pe,_t,ve,Ue,Ye,Qe,Ne,dt,it,Dt,V;function we(){vt=new Zw(O),vt.init(),it=new Ib(O,vt),nt=new Vw(O,vt,e,it),We=new Rb(O,vt),nt.reverseDepthBuffer&&g&&We.buffers.depth.setReversed(!0),Ot=new Jw(O),He=new mb,P=new Cb(O,vt,We,He,nt,it,Ot),E=new kw(b),Y=new Yw(b),ue=new ry(O),Dt=new Gw(O,ue),fe=new Kw(O,ue,Ot,Dt),oe=new jw(O,fe,ue,Ot),Qe=new Qw(O,nt,P),ve=new Ww(He),Ge=new pb(b,E,Y,vt,nt,Dt,ve),Se=new Fb(b,He),Pe=new gb,_t=new yb(vt),Ye=new zw(b,E,Y,We,oe,x,h),Ue=new Ab(b,oe,nt),V=new Ob(O,Ot,nt,We),Ne=new Hw(O,vt,Ot),dt=new $w(O,vt,Ot),Ot.programs=Ge.programs,b.capabilities=nt,b.extensions=vt,b.properties=He,b.renderLists=Pe,b.shadowMap=Ue,b.state=We,b.info=Ot}we();const ee=new Ub(b,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(ie,pe,!1))},this.getSize=function(w){return w.set(ie,pe)},this.setSize=function(w,k,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,pe=k,t.width=Math.floor(w*j),t.height=Math.floor(k*j),Z===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(ie*j,pe*j).floor()},this.setDrawingBufferSize=function(w,k,Z){ie=w,pe=k,j=Z,t.width=Math.floor(w*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Be)},this.setViewport=function(w,k,Z,K){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,k,Z,K),We.viewport(H.copy(Be).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,k,Z,K){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,k,Z,K),We.scissor(Q.copy(ht).multiplyScalar(j).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(w){We.setScissorTest(It=w)},this.setOpaqueSort=function(w){be=w},this.setTransparentSort=function(w){Le=w},this.getClearColor=function(w){return w.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(w=!0,k=!0,Z=!0){let K=0;if(w){let q=!1;if(z!==null){const me=z.texture.format;q=me===sh||me===rh||me===ih}if(q){const me=z.texture.type,Ae=me===Yi||me===Hr||me===wo||me===Ns||me===th||me===nh,De=Ye.getClearColor(),Oe=Ye.getClearAlpha(),et=De.r,tt=De.g,qe=De.b;Ae?(S[0]=et,S[1]=tt,S[2]=qe,S[3]=Oe,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=et,A[1]=tt,A[2]=qe,A[3]=Oe,O.clearBufferiv(O.COLOR,0,A))}else K|=O.COLOR_BUFFER_BIT}k&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ye.dispose(),Pe.dispose(),_t.dispose(),He.dispose(),E.dispose(),Y.dispose(),oe.dispose(),Dt.dispose(),V.dispose(),Ge.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Xr),ee.removeEventListener("sessionend",Lo),ci.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=Ot.autoReset,k=Ue.enabled,Z=Ue.autoUpdate,K=Ue.needsUpdate,q=Ue.type;we(),Ot.autoReset=w,Ue.enabled=k,Ue.autoUpdate=Z,Ue.needsUpdate=K,Ue.type=q}function Ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function st(w){const k=w.target;k.removeEventListener("dispose",st),kt(k)}function kt(w){tn(w),He.remove(w)}function tn(w){const k=He.get(w).programs;k!==void 0&&(k.forEach(function(Z){Ge.releaseProgram(Z)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Z,K,q,me){k===null&&(k=Gt);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,De=Oo(w,k,Z,K,q);We.setMaterial(K,Ae);let Oe=Z.index,et=1;if(K.wireframe===!0){if(Oe=fe.getWireframeAttribute(Z),Oe===void 0)return;et=2}const tt=Z.drawRange,qe=Z.attributes.position;let Mt=tt.start*et,wt=(tt.start+tt.count)*et;me!==null&&(Mt=Math.max(Mt,me.start*et),wt=Math.min(wt,(me.start+me.count)*et)),Oe!==null?(Mt=Math.max(Mt,0),wt=Math.min(wt,Oe.count)):qe!=null&&(Mt=Math.max(Mt,0),wt=Math.min(wt,qe.count));const Yt=wt-Mt;if(Yt<0||Yt===1/0)return;Dt.setup(q,K,De,Z,Oe);let Vt,Et=Ne;if(Oe!==null&&(Vt=ue.get(Oe),Et=dt,Et.setIndex(Vt)),q.isMesh)K.wireframe===!0?(We.setLineWidth(K.wireframeLinewidth*mt()),Et.setMode(O.LINES)):Et.setMode(O.TRIANGLES);else if(q.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),We.setLineWidth(ke*mt()),q.isLineSegments?Et.setMode(O.LINES):q.isLineLoop?Et.setMode(O.LINE_LOOP):Et.setMode(O.LINE_STRIP)}else q.isPoints?Et.setMode(O.POINTS):q.isSprite&&Et.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Et.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Et.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,nn=q._multiDrawCounts,Tt=q._multiDrawCount,vn=Oe?ue.get(Oe).bytesPerElement:1,bi=He.get(K).currentProgram.getUniforms();for(let wn=0;wn<Tt;wn++)bi.setValue(O,"_gl_DrawID",wn),Et.render(ke[wn]/vn,nn[wn])}else if(q.isInstancedMesh)Et.renderInstances(Mt,Yt,q.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,nn=Math.min(Z.instanceCount,ke);Et.renderInstances(Mt,Yt,nn)}else Et.render(Mt,Yt)};function bt(w,k,Z){w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,Yr(w,k,Z),w.side=_r,w.needsUpdate=!0,Yr(w,k,Z),w.side=Wi):Yr(w,k,Z)}this.compile=function(w,k,Z=null){Z===null&&(Z=w),m=_t.get(Z),m.init(k),I.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),w!==Z&&w.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const me=q.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const De=me[Ae];bt(De,Z,q),K.add(De)}else bt(me,Z,q),K.add(me)}),I.pop(),m=null,K},this.compileAsync=function(w,k,Z=null){const K=this.compile(w,k,Z);return new Promise(q=>{function me(){if(K.forEach(function(Ae){He.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){q(w);return}setTimeout(me,10)}vt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let zn=null;function li(w){zn&&zn(w)}function Xr(){ci.stop()}function Lo(){ci.start()}const ci=new vm;ci.setAnimationLoop(li),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(w){zn=w,ee.setAnimationLoop(w),w===null?ci.stop():ci.start()},ee.addEventListener("sessionstart",Xr),ee.addEventListener("sessionend",Lo),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(k),k=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,k,z),m=_t.get(w,I.length),m.init(k),I.push(m),Xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(Xe),ze=this.localClippingEnabled,Me=ve.init(this.clippingPlanes,ze),v=Pe.get(w,L.length),v.init(),L.push(v),ee.enabled===!0&&ee.isPresenting===!0){const me=b.xr.getDepthSensingMesh();me!==null&&Ws(me,k,-1/0,b.sortObjects)}Ws(w,k,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(be,Le),Pt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Pt&&Ye.addToRenderList(v,w),this.info.render.frame++,Me===!0&&ve.beginShadows();const Z=m.state.shadowsArray;Ue.render(Z,w,k),Me===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),k.isArrayCamera){const me=k.cameras;if(q.length>0)for(let Ae=0,De=me.length;Ae<De;Ae++){const Oe=me[Ae];Do(K,q,w,Oe)}Pt&&Ye.render(w);for(let Ae=0,De=me.length;Ae<De;Ae++){const Oe=me[Ae];Po(v,w,Oe,Oe.viewport)}}else q.length>0&&Do(K,q,w,k),Pt&&Ye.render(w),Po(v,w,k);z!==null&&F===0&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(b,w,k),Dt.resetDefaultState(),C=-1,T=null,I.pop(),I.length>0?(m=I[I.length-1],Me===!0&&ve.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,L.pop(),L.length>0?v=L[L.length-1]:v=null};function Ws(w,k,Z,K){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||le.intersectsSprite(w)){K&&je.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xe);const Ae=oe.update(w),De=w.material;De.visible&&v.push(w,Ae,De,Z,je.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||le.intersectsObject(w))){const Ae=oe.update(w),De=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),je.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),je.copy(Ae.boundingSphere.center)),je.applyMatrix4(w.matrixWorld).applyMatrix4(Xe)),Array.isArray(De)){const Oe=Ae.groups;for(let et=0,tt=Oe.length;et<tt;et++){const qe=Oe[et],Mt=De[qe.materialIndex];Mt&&Mt.visible&&v.push(w,Ae,Mt,Z,je.z,qe)}}else De.visible&&v.push(w,Ae,De,Z,je.z,null)}}const me=w.children;for(let Ae=0,De=me.length;Ae<De;Ae++)Ws(me[Ae],k,Z,K)}function Po(w,k,Z,K){const q=w.opaque,me=w.transmissive,Ae=w.transparent;m.setupLightsView(Z),Me===!0&&ve.setGlobalState(b.clippingPlanes,Z),K&&We.viewport(H.copy(K)),q.length>0&&qr(q,k,Z),me.length>0&&qr(me,k,Z),Ae.length>0&&qr(Ae,k,Z),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Do(w,k,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Vr(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Ro:Yi,minFilter:Gr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const me=m.state.transmissionRenderTarget[K.id],Ae=K.viewport||H;me.setSize(Ae.z*b.transmissionResolutionScale,Ae.w*b.transmissionResolutionScale);const De=b.getRenderTarget();b.setRenderTarget(me),b.getClearColor(re),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),Pt&&Ye.render(Z);const Oe=b.toneMapping;b.toneMapping=pr;const et=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),Me===!0&&ve.setGlobalState(b.clippingPlanes,K),qr(w,Z,K),P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me),vt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let qe=0,Mt=k.length;qe<Mt;qe++){const wt=k[qe],Yt=wt.object,Vt=wt.geometry,Et=wt.material,ke=wt.group;if(Et.side===Wi&&Yt.layers.test(K.layers)){const nn=Et.side;Et.side=Bn,Et.needsUpdate=!0,Uo(Yt,Z,K,Vt,Et,ke),Et.side=nn,Et.needsUpdate=!0,tt=!0}}tt===!0&&(P.updateMultisampleRenderTarget(me),P.updateRenderTargetMipmap(me))}b.setRenderTarget(De),b.setClearColor(re,he),et!==void 0&&(K.viewport=et),b.toneMapping=Oe}function qr(w,k,Z){const K=k.isScene===!0?k.overrideMaterial:null;for(let q=0,me=w.length;q<me;q++){const Ae=w[q],De=Ae.object,Oe=Ae.geometry,et=K===null?Ae.material:K,tt=Ae.group;De.layers.test(Z.layers)&&Uo(De,k,Z,Oe,et,tt)}}function Uo(w,k,Z,K,q,me){w.onBeforeRender(b,k,Z,K,q,me),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(b,k,Z,K,w,me),q.transparent===!0&&q.side===Wi&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,b.renderBufferDirect(Z,k,K,q,w,me),q.side=_r,q.needsUpdate=!0,b.renderBufferDirect(Z,k,K,q,w,me),q.side=Wi):b.renderBufferDirect(Z,k,K,q,w,me),w.onAfterRender(b,k,Z,K,q,me)}function Yr(w,k,Z){k.isScene!==!0&&(k=Gt);const K=He.get(w),q=m.state.lights,me=m.state.shadowsArray,Ae=q.state.version,De=Ge.getParameters(w,q.state,me,k,Z),Oe=Ge.getProgramCacheKey(De);let et=K.programs;K.environment=w.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(w.isMeshStandardMaterial?Y:E).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",st),et=new Map,K.programs=et);let tt=et.get(Oe);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Ae)return Fo(w,De),tt}else De.uniforms=Ge.getUniforms(w),w.onBeforeCompile(De,b),tt=Ge.acquireProgram(De,Oe),et.set(Oe,tt),K.uniforms=De.uniforms;const qe=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=ve.uniform),Fo(w,De),K.needsLights=pl(w),K.lightsStateVersion=Ae,K.needsLights&&(qe.ambientLightColor.value=q.state.ambient,qe.lightProbe.value=q.state.probe,qe.directionalLights.value=q.state.directional,qe.directionalLightShadows.value=q.state.directionalShadow,qe.spotLights.value=q.state.spot,qe.spotLightShadows.value=q.state.spotShadow,qe.rectAreaLights.value=q.state.rectArea,qe.ltc_1.value=q.state.rectAreaLTC1,qe.ltc_2.value=q.state.rectAreaLTC2,qe.pointLights.value=q.state.point,qe.pointLightShadows.value=q.state.pointShadow,qe.hemisphereLights.value=q.state.hemi,qe.directionalShadowMap.value=q.state.directionalShadowMap,qe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qe.spotShadowMap.value=q.state.spotShadowMap,qe.spotLightMatrix.value=q.state.spotLightMatrix,qe.spotLightMap.value=q.state.spotLightMap,qe.pointShadowMap.value=q.state.pointShadowMap,qe.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function No(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=nl.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Fo(w,k){const Z=He.get(w);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Oo(w,k,Z,K,q){k.isScene!==!0&&(k=Gt),P.resetTextureUnits();const me=k.fog,Ae=K.isMeshStandardMaterial?k.environment:null,De=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Os,Oe=(K.isMeshStandardMaterial?Y:E).get(K.envMap||Ae),et=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qe=!!Z.morphAttributes.position,Mt=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color;let Yt=pr;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Yt=b.toneMapping);const Vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=Vt!==void 0?Vt.length:0,ke=He.get(K),nn=m.state.lights;if(Me===!0&&(ze===!0||w!==T)){const un=w===T&&K.id===C;ve.setState(K,w,un)}let Tt=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==nn.state.version||ke.outputColorSpace!==De||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Oe||K.fog===!0&&ke.fog!==me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ve.numPlanes||ke.numIntersection!==ve.numIntersection)||ke.vertexAlphas!==et||ke.vertexTangents!==tt||ke.morphTargets!==qe||ke.morphNormals!==Mt||ke.morphColors!==wt||ke.toneMapping!==Yt||ke.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,ke.__version=K.version);let vn=ke.currentProgram;Tt===!0&&(vn=Yr(K,k,q));let bi=!1,wn=!1,Ki=!1;const Bt=vn.getUniforms(),xn=ke.uniforms;if(We.useProgram(vn.program)&&(bi=!0,wn=!0,Ki=!0),K.id!==C&&(C=K.id,wn=!0),bi||T!==w){We.buffers.depth.getReversed()?(Re.copy(w.projectionMatrix),_S(Re),gS(Re),Bt.setValue(O,"projectionMatrix",Re)):Bt.setValue(O,"projectionMatrix",w.projectionMatrix),Bt.setValue(O,"viewMatrix",w.matrixWorldInverse);const hn=Bt.map.cameraPosition;hn!==void 0&&hn.setValue(O,pt.setFromMatrixPosition(w.matrixWorld)),nt.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,wn=!0,Ki=!0)}if(q.isSkinnedMesh){Bt.setOptional(O,q,"bindMatrix"),Bt.setOptional(O,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Bt.setValue(O,"boneTexture",un.boneTexture,P))}q.isBatchedMesh&&(Bt.setOptional(O,q,"batchingTexture"),Bt.setValue(O,"batchingTexture",q._matricesTexture,P),Bt.setOptional(O,q,"batchingIdTexture"),Bt.setValue(O,"batchingIdTexture",q._indirectTexture,P),Bt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(O,"batchingColorTexture",q._colorsTexture,P));const Pn=Z.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Qe.update(q,Z,vn),(wn||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Bt.setValue(O,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=Oe,xn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),wn&&(Bt.setValue(O,"toneMappingExposure",b.toneMappingExposure),ke.needsLights&&dl(xn,Ki),me&&K.fog===!0&&Se.refreshFogUniforms(xn,me),Se.refreshMaterialUniforms(xn,K,j,pe,m.state.transmissionRenderTarget[w.id]),nl.upload(O,No(ke),xn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(nl.upload(O,No(ke),xn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Bt.setValue(O,"center",q.center),Bt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(O,"normalMatrix",q.normalMatrix),Bt.setValue(O,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const un=K.uniformsGroups;for(let hn=0,xr=un.length;hn<xr;hn++){const Dn=un[hn];V.update(Dn,vn),V.bind(Dn,vn)}}return vn}function dl(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function pl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,k,Z){He.get(w.texture).__webglTexture=k,He.get(w.depthTexture).__webglTexture=Z;const K=He.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const Z=He.get(w);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const ml=O.createFramebuffer();this.setRenderTarget=function(w,k=0,Z=0){z=w,N=k,F=Z;let K=!0,q=null,me=!1,Ae=!1;if(w){const Oe=He.get(w);if(Oe.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Oe.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Oe.__hasExternalTextures)P.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qe=w.depthTexture;if(Oe.__boundDepthTexture!==qe){if(qe!==null&&He.has(qe)&&(w.width!==qe.image.width||w.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ae=!0);const tt=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?q=tt[k][Z]:q=tt[k],me=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?q=He.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[Z]:q=tt,H.copy(w.viewport),Q.copy(w.scissor),$=w.scissorTest}else H.copy(Be).multiplyScalar(j).floor(),Q.copy(ht).multiplyScalar(j).floor(),$=It;if(Z!==0&&(q=ml),We.bindFramebuffer(O.FRAMEBUFFER,q)&&K&&We.drawBuffers(w,q),We.viewport(H),We.scissor(Q),We.setScissorTest($),me){const Oe=He.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,Z)}else if(Ae){const Oe=He.get(w.texture),et=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,Z,et)}else if(w!==null&&Z!==0){const Oe=He.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(w,k,Z,K,q,me,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){We.bindFramebuffer(O.FRAMEBUFFER,De);try{const Oe=w.texture,et=Oe.format,tt=Oe.type;if(!nt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-K&&Z>=0&&Z<=w.height-q&&O.readPixels(k,Z,K,q,it.convert(et),it.convert(tt),me)}finally{const Oe=z!==null?He.get(z).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,k,Z,K,q,me,Ae){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Oe=w.texture,et=Oe.format,tt=Oe.type;if(!nt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-K&&Z>=0&&Z<=w.height-q){We.bindFramebuffer(O.FRAMEBUFFER,De);const qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(k,Z,K,q,it.convert(et),it.convert(tt),0);const Mt=z!==null?He.get(z).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,Mt);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mS(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(qe),O.deleteSync(wt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Z=0){w.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(w.image.width*K),me=Math.floor(w.image.height*K),Ae=k!==null?k.x:0,De=k!==null?k.y:0;P.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ae,De,q,me),We.unbindTexture()};const _l=O.createFramebuffer(),gl=O.createFramebuffer();this.copyTextureToTexture=function(w,k,Z=null,K=null,q=0,me=null){w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],k=arguments[2],me=arguments[3]||0,Z=null),me===null&&(q!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=q,q=0):me=0);let Ae,De,Oe,et,tt,qe,Mt,wt,Yt;const Vt=w.isCompressedTexture?w.mipmaps[me]:w.image;if(Z!==null)Ae=Z.max.x-Z.min.x,De=Z.max.y-Z.min.y,Oe=Z.isBox3?Z.max.z-Z.min.z:1,et=Z.min.x,tt=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{const Pn=Math.pow(2,-q);Ae=Math.floor(Vt.width*Pn),De=Math.floor(Vt.height*Pn),w.isDataArrayTexture?Oe=Vt.depth:w.isData3DTexture?Oe=Math.floor(Vt.depth*Pn):Oe=1,et=0,tt=0,qe=0}K!==null?(Mt=K.x,wt=K.y,Yt=K.z):(Mt=0,wt=0,Yt=0);const Et=it.convert(k.format),ke=it.convert(k.type);let nn;k.isData3DTexture?(P.setTexture3D(k,0),nn=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(P.setTexture2DArray(k,0),nn=O.TEXTURE_2D_ARRAY):(P.setTexture2D(k,0),nn=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const Tt=O.getParameter(O.UNPACK_ROW_LENGTH),vn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),bi=O.getParameter(O.UNPACK_SKIP_PIXELS),wn=O.getParameter(O.UNPACK_SKIP_ROWS),Ki=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);const Bt=w.isDataArrayTexture||w.isData3DTexture,xn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const Pn=He.get(w),un=He.get(k),hn=He.get(Pn.__renderTarget),xr=He.get(un.__renderTarget);We.bindFramebuffer(O.READ_FRAMEBUFFER,hn.__webglFramebuffer),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let Dn=0;Dn<Oe;Dn++)Bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(w).__webglTexture,q,qe+Dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,He.get(k).__webglTexture,me,Yt+Dn)),O.blitFramebuffer(et,tt,Ae,De,Mt,wt,Ae,De,O.DEPTH_BUFFER_BIT,O.NEAREST);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||He.has(w)){const Pn=He.get(w),un=He.get(k);We.bindFramebuffer(O.READ_FRAMEBUFFER,_l),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,gl);for(let hn=0;hn<Oe;hn++)Bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pn.__webglTexture,q,qe+hn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pn.__webglTexture,q),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,un.__webglTexture,me,Yt+hn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,un.__webglTexture,me),q!==0?O.blitFramebuffer(et,tt,Ae,De,Mt,wt,Ae,De,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(nn,me,Mt,wt,Yt+hn,et,tt,Ae,De):O.copyTexSubImage2D(nn,me,Mt,wt,et,tt,Ae,De);We.bindFramebuffer(O.READ_FRAMEBUFFER,null),We.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(nn,me,Mt,wt,Yt,Ae,De,Oe,Et,ke,Vt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(nn,me,Mt,wt,Yt,Ae,De,Oe,Et,Vt.data):O.texSubImage3D(nn,me,Mt,wt,Yt,Ae,De,Oe,Et,ke,Vt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Mt,wt,Ae,De,Et,ke,Vt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Mt,wt,Vt.width,Vt.height,Et,Vt.data):O.texSubImage2D(O.TEXTURE_2D,me,Mt,wt,Ae,De,Et,ke,Vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bi),O.pixelStorei(O.UNPACK_SKIP_ROWS,wn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ki),me===0&&k.generateMipmaps&&O.generateMipmap(nn),We.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Z=null,K=null,q=0){return w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,w=arguments[2],k=arguments[3],q=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,Z,K,q)},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){N=0,F=0,z=null,We.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class vr{constructor(e){ge(this,"mesh");ge(this,"isAlive",!0);this.mesh=e.mesh}afterSpawn(e,t){}update(e,t,i,o){}graphics(e,t,i,o){}kill(){this.isAlive=!1}beforeDeath(e,t,i){}}class on{constructor(e){ge(this,"center");ge(this,"_parts");this.center=e.center,this._parts=e.parts,this.updateParts()}get position(){return this.center}set position(e){this.center=e.clone(),this.updateParts()}updateParts(){for(const e of this._parts)e.mesh.position.set(this.center.x+e.offset.x,this.center.y+e.offset.y,this.center.z+e.offset.z)}set parts(e){this._parts=e,this.updateParts()}get parts(){return this._parts}}const zb={createGrid(r,e){const t=[];for(let i=0;i<r;i++){t[i]=[];for(let o=0;o<e;o++){const a={actors:[],isWalkable:!0};t[i][o]=a}}return t}};class Gb{constructor(e){ge(this,"actorsGrid");ge(this,"components",[]);ge(this,"camera");ge(this,"scene");this.actorsGrid=zb.createGrid(e.width,e.height),this.camera=e.camera??new Zn,this.scene=e.scene??new WS}onStart(e){}onSwitch(e){}addActor(e,t){if(!(0<=t.x&&t.x<this.actorsGrid.length)&&!(0<=t.y&&t.y<this.actorsGrid[0].length))throw new Error(`Position ${t.x},${t.y} is out of bounds`);this.actorsGrid[t.x][t.y].actors.push(e),e.mesh instanceof on?e.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(e.mesh),e.afterSpawn(this,t)}addComponent(e){this.components.push(e),e.mesh instanceof on?e.mesh.parts.forEach(t=>this.scene.add(t.mesh)):this.scene.add(e.mesh)}update(e,t){this.actorsGrid.forEach((a,c)=>{a.forEach((u,h)=>{const f=new xe(c,h);u.actors.forEach(p=>p.update(e,t,this,f.clone()))})}),this.components.forEach(a=>a.update(e,t,this)),this.actorsGrid.map((a,c)=>a.map((u,h)=>{const f=new xe(c,h);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(e,this,f),g.mesh instanceof on?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)});const _=u.actors.filter(g=>g.isAlive);u.actors=_}));const i=[],o=[];for(let a=0;a<this.components.length;a++){const c=this.components[a];c.isAlive?i.push(c):o.push(c)}o.forEach(a=>{a.mesh instanceof on?a.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(a.mesh)}),this.components=i}graphics(e,t){this.actorsGrid.forEach((i,o)=>{i.forEach((a,c)=>{const u=new xe(o,c);a.actors.forEach(h=>h.graphics(e,t,this,u.clone()))})}),this.components.forEach(i=>i.graphics(e,t,this))}}var Ls=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++r%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===p?"block":"none";r=p}var o=(performance||Date).now(),a=o,c=0,u=t(new Ls.Panel("FPS","#0ff","#002")),h=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-o,200),p>=a+1e3&&(u.update(c*1e3/(p-a),100),a=p,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:e,setMode:i}};Ls.Panel=function(r,e,t){var i=1/0,o=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,p=2*c,_=3*c,g=15*c,x=74*c,S=30*c,A=document.createElement("canvas");A.width=u,A.height=h,A.style.cssText="width:80px;height:48px";var v=A.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,u,h),v.fillStyle=e,v.fillText(r,f,p),v.fillRect(_,g,x,S),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_,g,x,S),{dom:A,update:function(m,L){i=Math.min(i,m),o=Math.max(o,m),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=e,v.fillText(a(m)+" "+r+" ("+a(i)+"-"+a(o)+")",f,p),v.drawImage(A,_+c,g,x-c,S,_,g,x-c,S),v.fillRect(_+x-c,g,c,S),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,a((1-m/L)*S))}}};const Hb="canvas";class Vb{constructor(){ge(this,"wasPressedMap",new Map);ge(this,"pressedMap",new Map);document.addEventListener("keydown",e=>{this.wasPressedMap.set(e.key,!0),this.pressedMap.set(e.key,!0)}),document.addEventListener("keyup",e=>{this.wasPressedMap.set(e.key,!1),this.pressedMap.set(e.key,!1)})}wasPressed(e){const t=this.wasPressedMap.get(e)||!1;return t&&this.wasPressedMap.set(e,!1),t}isPressed(e){return this.pressedMap.get(e)||!1}}const Wb=new Vb;class kb{constructor(){ge(this,"renderer");ge(this,"keyboardHandler");ge(this,"isGameOver",!1);ge(this,"lastUpdate",Date.now());ge(this,"lastGraphics",Date.now());ge(this,"stats",new Ls);ge(this,"containers",new Map);ge(this,"currentContainer");this.renderer=new Bb,this.renderer.setSize(800,800),this.renderer.domElement.id=Hb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=Wb,this.stats=new Ls,document.body.appendChild(this.stats.dom);const e=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth*2,window.innerHeight*2),this.renderer.domElement.style.width=`${window.innerWidth}px`,this.renderer.domElement.style.height=`${window.innerHeight}px`};window.addEventListener("resize",e),window.requestAnimationFrame(e)}addContainer(e,t){if(this.containers.has(e))throw new Error(`A container with key "${e}" already exists`);this.containers.set(e,t),t.onStart(this)}setContainer(e){if(!this.containers.has(e))throw new Error(`A container with key "${e}" does not exist`);this.currentContainer=this.containers.get(e),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const e=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(e)}};e()}update(){const e=Date.now(),t=Fp(e-this.lastUpdate);this.lastUpdate=e,this.currentContainer&&this.currentContainer.update(this,t)}graphics(){const e=Date.now(),t=Fp(e-this.lastGraphics);this.lastGraphics=e,this.currentContainer&&this.currentContainer.graphics(this,t)}}function Fp(r){return Math.max(0,Math.min(r,1e3))}class Zi{constructor(e){ge(this,"mesh");ge(this,"isAlive",!0);this.mesh=e.mesh}update(e,t,i){}graphics(e,t,i){}kill(){this.isAlive=!1}}const Ee={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc",WOOD:"#341c27"},pn=4,Ze={createCube:r=>{const e=(r==null?void 0:r.size)??1,t=(r==null?void 0:r.color)??65280,i=new Wr(e,e,e,pn,pn,pn),o={color:t},a=r!=null&&r.basicMaterial?new si(o):new hr(o);return new gn(i,a)},createBox:r=>{var f;const e=(r==null?void 0:r.width)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.depth)??1,o=(r==null?void 0:r.color)??new ne(Ee.RED),a=new Wr(e,t,i,pn,pn,pn),c=!!(r!=null&&r.transparent),u={color:o,transparent:c,opacity:c?(f=r==null?void 0:r.transparent)==null?void 0:f.value:1},h=r!=null&&r.basicMaterial?new si(u):new hr(u);return new gn(a,h)},createCone:r=>{const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new ne(Ee.RED),o=new lh(e,t,pn,pn),a={color:i},c=r!=null&&r.basicMaterial?new si(a):new hr(a);return new gn(o,c)},createSphere:r=>{var u;const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.color)??new ne(Ee.RED),i=new hh(e,pn,pn),o=!!(r!=null&&r.transparent),a={color:t,transparent:o,opacity:o?(u=r==null?void 0:r.transparent)==null?void 0:u.value:1},c=r!=null&&r.basicMaterial?new si(a):new hr(a);return new gn(i,c)},createCylinder:r=>{const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new ne(Ee.RED),o=new ul(e,e,t,pn*2,pn),a={color:i},c=r!=null&&r.basicMaterial?new si(a):new hr(a);return new gn(o,c)},createGem(r){const e=(r==null?void 0:r.size)??1,t=(r==null?void 0:r.color)??new ne(Ee.RED),i=new uh(e,0),o={color:t},a=r!=null&&r.basicMaterial?new si(o):new hr(o);return new gn(i,a)},createTorus:r=>{const e=r.radius,t=r.radius/2,i=(r==null?void 0:r.color)??new ne(Ee.RED),o=new fh(e,t,pn*2,pn),a={color:i},c=r!=null&&r.basicMaterial?new si(a):new hr(a);return new gn(o,c)},createTorusKnotBlob:r=>{const e=r.radius,t=r.radius/4,i=(r==null?void 0:r.color)??new ne(Ee.RED),o=new dh(e,t,pn*16,pn,pn*6,pn*2),a={color:i},c=r!=null&&r.basicMaterial?new si(a):new hr(a);return new gn(o,c)}};var gh=(r=>(r.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",r))(gh||{});const _e={TILE_SIZE:1,WIDTH:13,HEIGHT:20},Eo=class Eo extends Zi{constructor(t){const i=(t==null?void 0:t.size)??1,o=_e.TILE_SIZE/32,a=Ze.createSphere({radius:o*i,color:(t==null?void 0:t.color)??new ne(Ee.LIGHT_GREEN),basicMaterial:!0,transparent:{value:1}});super({mesh:a});ge(this,"ttl",0);ge(this,"velocity");ge(this,"gravity");ge(this,"shouldFadeout");this.mesh.position.set(t.position.x,t.position.y,t.position.z);const c=(t==null?void 0:t.force)??1,u=.002;this.velocity=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u),this.gravity=(t==null?void 0:t.gravity)??1e-5,this.shouldFadeout=!!t.shouldFadeout}update(t,i,o){super.update(t,i,o),this.velocity.y-=this.gravity*i,this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.shouldFadeout&&(this.mesh.material.opacity=1-this.ttl/Eo.TTL),this.ttl>Eo.TTL&&this.kill()}};ge(Eo,"TTL",800);let ol=Eo;const Yu={createExplosion(r,e,t){const{colors:i}=t,o=t.amount??10,a=Array.isArray(i)?i:[i];for(let c=0;c<o;c++){const u=new ol({position:e.clone(),color:a[Math.floor(Math.random()*a.length)],force:t.force,size:t.size});r.addComponent(u)}},createSingleSmokeParticle(r,e,t){const{colors:i}=t,o=Array.isArray(i)?i:[i],a=o[Math.floor(Math.random()*o.length)],c=new ol({position:e.clone(),color:a,force:t.force,size:t.size,gravity:t.gravity,shouldFadeout:!0});r.addComponent(c)}},So=class So extends vr{constructor(t){const i=new mh(new ne(Ee.ORANGE),So.INTENSITY),o=Ze.createTorusKnotBlob({radius:t.size/8,color:new ne(Ee.ORANGE),basicMaterial:!0}),a=new on({center:t.position,parts:[{mesh:Ze.createBox({width:t.size,height:t.size,depth:t.size,color:new ne(Ee.DARK_GREEN)}),offset:new D(0,0,0)},{mesh:i,offset:new D(0,t.size/2+t.size/2,0)},{mesh:Ze.createCylinder({radius:t.size/4,height:t.size/16,color:new ne(Ee.WOOD)}),offset:new D(0,t.size/2+t.size/8,0)},{mesh:o,offset:new D(0,t.size/2+t.size/4,0)}]});super({mesh:a});ge(this,"light");ge(this,"flame");ge(this,"PARTICLE_TIMEOUT",50);ge(this,"particleTimeout",0);ge(this,"position");ge(this,"randomAngle",Math.random()*Math.PI*2);this.light=i,this.flame=o,this.position=t.position}update(t,i,o,a){super.update(t,i,o,a),this.light.intensity=So.INTENSITY+Math.sin(this.randomAngle+Date.now()/200),this.flame.rotation.y+=.012*i,this.flame.rotation.z=Math.sin(Date.now()/1e3),this.flame.rotation.x=Math.sin(Date.now()/1e3),this.particleTimeout+=i;const c=Math.floor(this.particleTimeout/this.PARTICLE_TIMEOUT);this.particleTimeout=this.particleTimeout%this.PARTICLE_TIMEOUT;for(let u=0;u<c;u++)Yu.createSingleSmokeParticle(o,this.position.clone().add(new D(0,_e.TILE_SIZE*2/3,0)),{colors:[new ne(Ee.ORANGE),new ne(Ee.YELLOW),new ne(Ee.VOID)],size:1,force:.2,gravity:-25e-7})}};ge(So,"INTENSITY",5);let Zu=So;class Xb extends vr{constructor(e){const t=new on({center:e.position,parts:[{mesh:Ze.createBox({width:e.size,height:e.size/4,depth:e.size,color:new ne(Ee.DARK)}),offset:new D(0,-e.size*3/8,0)},{mesh:Ze.createBox({width:e.size*4/5,height:e.size/2,depth:e.size*4/5,color:new ne(Ee.WHITE)}),offset:new D(0,0,0)},{mesh:Ze.createBox({width:e.size,height:e.size/4,depth:e.size,color:new ne(Ee.DARK)}),offset:new D(0,e.size*3/8,0)}]});super({mesh:t})}}const ym={createTreeComposite:r=>{const{height:e}=r;return new on({center:r.position,parts:[{mesh:Ze.createCylinder({radius:_e.TILE_SIZE/8,height:e,color:new ne(Ee.WOOD)}),offset:new D(0,0,0)},{mesh:Ze.createCone({radius:_e.TILE_SIZE/2,height:e-_e.TILE_SIZE/2,color:new ne(Ee.DARK_GREEN)}),offset:new D(0,e*4/16,0)},{mesh:Ze.createCone({radius:_e.TILE_SIZE/2,height:e-1.5*_e.TILE_SIZE/2,color:new ne(Ee.DARK_GREEN)}),offset:new D(0,e*6/16,0)},{mesh:Ze.createCone({radius:_e.TILE_SIZE/2,height:e-2*_e.TILE_SIZE/2,color:new ne(Ee.WHITE)}),offset:new D(0,e*8/16,0)},{mesh:Ze.createCone({radius:_e.TILE_SIZE/2,height:e-2.5*_e.TILE_SIZE/2,color:new ne(Ee.DARK_GREEN)}),offset:new D(0,e*8/16,0)}]})}};class qb extends Zi{constructor(e){const t=new ne(Ee.DARK),i=new ne(Ee.WHITE),o=new on({center:e.position,parts:[{mesh:Ze.createBox({width:e.size,height:e.size/8,depth:e.size,color:t.clone()}),offset:new D(0,e.size*7/16,0)},{mesh:Ze.createBox({width:e.size/8,height:e.size*1.1,depth:e.size/8,color:i.clone()}),offset:new D(e.size/2,0,e.size/2)},{mesh:Ze.createBox({width:e.size/8,height:e.size*1.1,depth:e.size/8,color:i.clone()}),offset:new D(-e.size/2,0,e.size/2)},{mesh:Ze.createBox({width:e.size/8,height:e.size*1.1,depth:e.size/8,color:i.clone()}),offset:new D(e.size/2,0,-e.size/2)},{mesh:Ze.createBox({width:e.size/8,height:e.size*1.1,depth:e.size/8,color:i.clone()}),offset:new D(-e.size/2,0,-e.size/2)}]});super({mesh:o})}}class Yb extends Zi{constructor(e){const t=()=>{const o=Math.floor(Math.random()*2)+2,a=Array.from({length:o},()=>Ze.createCone({radius:e.size/32,height:e.size/4,color:new ne(Ee.GREEN)})),c=2;a.forEach(f=>f.rotateOnAxis(new D(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-e.size/2+Math.random()*e.size,h=-e.size/2+Math.random()*e.size;return a.map(f=>({mesh:f,offset:new D(u,e.size*19/32,h)}))},i=()=>{const o=Ze.createCone({radius:e.size/32,height:e.size/2,color:new ne(Ee.GREEN)}),a=Ze.createSphere({radius:e.size/32,color:Math.random()<.5?new ne(Ee.PINK):new ne(Ee.YELLOW)}),c=-e.size/2+Math.random()*e.size,u=-e.size/2+Math.random()*e.size;return[{mesh:o,offset:new D(c,e.size*10/16,u)},{mesh:a,offset:new D(c,e.size*13/16,u)}]};super({mesh:new on({center:e.position,parts:[{mesh:Ze.createBox({width:e.size,height:e.size/4,depth:e.size,color:e.color??new ne(Ee.DARK_GREEN)}),offset:new D(0,e.size*3/8,0)},{mesh:Ze.createBox({width:e.size,height:e.size*3/4,depth:e.size,color:new ne(Ee.DIRT)}),offset:new D(0,-e.size/8,0)},...t(),...t(),...Math.random()<.4?i():[]]})})}}class Za extends Zi{constructor(e){const t=_e.TILE_SIZE/2,i=_e.TILE_SIZE,o=t+Math.random()*i,a=Ze.createCone({radius:_e.TILE_SIZE*3,height:o,color:Math.random()<.5?new ne(Ee.WHITE):new ne(Ee.WHITE)});a.position.set(e.position.x,o/4,e.position.y),super({mesh:a})}}class Zb extends Zi{constructor(e){const t=Ze.createSphere({radius:_e.TILE_SIZE/32,color:new ne(Ee.WHITE),basicMaterial:!0});t.position.set(e.position.x,e.position.y,e.position.z),super({mesh:t})}}class Ka extends Zi{constructor(e){const t=_e.TILE_SIZE*2.5,i=ym.createTreeComposite({position:new D(e.position.x,t/2+(Math.random()-.5),e.position.y),height:t});super({mesh:i})}}class Kb extends Zi{constructor(e){const t=new on({center:e.position,parts:[{mesh:Ze.createBox({width:e.width,height:_e.TILE_SIZE*.8,depth:e.height,color:new ne(Ee.BLUE),transparent:{value:.5}}),offset:new D(0,0,0)},{mesh:Ze.createBox({width:e.width,height:_e.TILE_SIZE,depth:e.height,color:new ne(Ee.DIRT)}),offset:new D(0,-.8,0)}]});t.position.set(e.position.x,e.position.y,e.position.z),super({mesh:t})}}var jt=(r=>(r.BR="Bridge",r.BF="Bonfire",r.BSH="Bush",r.GRS="Grass",r.HQ="HeadQuarters",r.RV="River",r.RN="Ruin",r.SPW="Spawner",r.STN="Stone",r.TR="Tree",r.WTR="Water",r))(jt||{});const Ku={createHorizontalLine(r){const{x1:e,x2:t,y:i}=r,o=[];for(let a=e;a<=t;a++)o.push(new xe(a,i));return o},createVerticalLine(r){const{y1:e,y2:t,x:i}=r,o=[];for(let a=e;a<=t;a++)o.push(new xe(i,a));return o}},$b=r=>[...Ku.createHorizontalLine({x1:0,x2:_e.WIDTH-1,y:r}).map(e=>({type:jt.RV,position:e})).filter(({position:e})=>!(2<=e.x&&e.x<=10&&!(5<=e.x&&e.x<=7))),...Ku.createHorizontalLine({x1:2,x2:10,y:r}).map(e=>({type:jt.BR,position:e}))],Jb={name:"Learning the Basics",tiles:[{type:jt.HQ,position:new xe(Math.floor(_e.WIDTH/2),1)},{type:jt.SPW,position:new xe(1,18)},{type:jt.SPW,position:new xe(11,18)},...Ku.createVerticalLine({y1:8,y2:12,x:0}).map(r=>$b(r.y)).flat(),{type:jt.BF,position:new xe(2,14)},{type:jt.BF,position:new xe(11,15)},{type:jt.BF,position:new xe(7,18)},{type:jt.TR,position:new xe(1,13)},{type:jt.TR,position:new xe(0,14)},{type:jt.TR,position:new xe(0,16)},{type:jt.TR,position:new xe(7,13)},{type:jt.TR,position:new xe(12,13)},{type:jt.TR,position:new xe(12,16)}]},Qb=[Jb];var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},iu={},po={},Mo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var jb=Mo.exports,Op;function e1(){return Op||(Op=1,function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",_=1,g=2,x=4,S=1,A=2,v=1,m=2,L=4,I=8,b=16,B=32,N=64,F=128,z=256,C=512,T=30,H="...",Q=800,$=16,re=1,he=2,ie=3,pe=1/0,j=9007199254740991,be=17976931348623157e292,Le=NaN,Be=4294967295,ht=Be-1,It=Be>>>1,le=[["ary",F],["bind",v],["bindKey",m],["curry",I],["curryRight",b],["flip",C],["partial",B],["partialRight",N],["rearg",z]],Me="[object Arguments]",ze="[object Array]",Re="[object AsyncFunction]",Xe="[object Boolean]",pt="[object Date]",je="[object DOMException]",Gt="[object Error]",Pt="[object Function]",mt="[object GeneratorFunction]",O="[object Map]",cn="[object Number]",vt="[object Null]",nt="[object Object]",We="[object Promise]",Ot="[object Proxy]",He="[object RegExp]",P="[object Set]",E="[object String]",Y="[object Symbol]",ue="[object Undefined]",fe="[object WeakMap]",oe="[object WeakSet]",Ge="[object ArrayBuffer]",Se="[object DataView]",Pe="[object Float32Array]",_t="[object Float64Array]",ve="[object Int8Array]",Ue="[object Int16Array]",Ye="[object Int32Array]",Qe="[object Uint8Array]",Ne="[object Uint8ClampedArray]",dt="[object Uint16Array]",it="[object Uint32Array]",Dt=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,we=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ee=/&(?:amp|lt|gt|quot|#39);/g,ce=/[&<>"']/g,Ie=RegExp(ee.source),Ce=RegExp(ce.source),st=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,bt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zn=/^\w*$/,li=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xr=/[\\^$.*+?()[\]{}|]/g,Lo=RegExp(Xr.source),ci=/^\s+/,Ws=/\s/,Po=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Do=/\{\n\/\* \[wrapped with (.+)\] \*/,qr=/,? & /,Uo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Yr=/[()=,{}\[\]\/\s]/,No=/\\(\\)?/g,Fo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Oo=/\w*$/,dl=/^[-+]0x[0-9a-f]+$/i,pl=/^0b[01]+$/i,ml=/^\[object .+?Constructor\]$/,_l=/^0o[0-7]+$/i,gl=/^(?:0|[1-9]\d*)$/,w=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,k=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",me="\\ufe20-\\ufe2f",Ae="\\u20d0-\\u20ff",De=q+me+Ae,Oe="\\u2700-\\u27bf",et="a-z\\xdf-\\xf6\\xf8-\\xff",tt="\\xac\\xb1\\xd7\\xf7",qe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mt="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Yt="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",Et=tt+qe+Mt+wt,ke="['’]",nn="["+K+"]",Tt="["+Et+"]",vn="["+De+"]",bi="\\d+",wn="["+Oe+"]",Ki="["+et+"]",Bt="[^"+K+Et+bi+Oe+et+Yt+"]",xn="\\ud83c[\\udffb-\\udfff]",Pn="(?:"+vn+"|"+xn+")",un="[^"+K+"]",hn="(?:\\ud83c[\\udde6-\\uddff]){2}",xr="[\\ud800-\\udbff][\\udc00-\\udfff]",Dn="["+Yt+"]",xh="\\u200d",Mh="(?:"+Ki+"|"+Bt+")",bm="(?:"+Dn+"|"+Bt+")",Eh="(?:"+ke+"(?:d|ll|m|re|s|t|ve))?",Sh="(?:"+ke+"(?:D|LL|M|RE|S|T|VE))?",yh=Pn+"?",Th="["+Vt+"]?",Rm="(?:"+xh+"(?:"+[un,hn,xr].join("|")+")"+Th+yh+")*",Cm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Im="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wh=Th+yh+Rm,Lm="(?:"+[wn,hn,xr].join("|")+")"+wh,Pm="(?:"+[un+vn+"?",vn,hn,xr,nn].join("|")+")",Dm=RegExp(ke,"g"),Um=RegExp(vn,"g"),vl=RegExp(xn+"(?="+xn+")|"+Pm+wh,"g"),Nm=RegExp([Dn+"?"+Ki+"+"+Eh+"(?="+[Tt,Dn,"$"].join("|")+")",bm+"+"+Sh+"(?="+[Tt,Dn+Mh,"$"].join("|")+")",Dn+"?"+Mh+"+"+Eh,Dn+"+"+Sh,Im,Cm,bi,Lm].join("|"),"g"),Fm=RegExp("["+xh+K+De+Vt+"]"),Om=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Bm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zm=-1,Wt={};Wt[Pe]=Wt[_t]=Wt[ve]=Wt[Ue]=Wt[Ye]=Wt[Qe]=Wt[Ne]=Wt[dt]=Wt[it]=!0,Wt[Me]=Wt[ze]=Wt[Ge]=Wt[Xe]=Wt[Se]=Wt[pt]=Wt[Gt]=Wt[Pt]=Wt[O]=Wt[cn]=Wt[nt]=Wt[He]=Wt[P]=Wt[E]=Wt[fe]=!1;var Ht={};Ht[Me]=Ht[ze]=Ht[Ge]=Ht[Se]=Ht[Xe]=Ht[pt]=Ht[Pe]=Ht[_t]=Ht[ve]=Ht[Ue]=Ht[Ye]=Ht[O]=Ht[cn]=Ht[nt]=Ht[He]=Ht[P]=Ht[E]=Ht[Y]=Ht[Qe]=Ht[Ne]=Ht[dt]=Ht[it]=!0,Ht[Gt]=Ht[Pt]=Ht[fe]=!1;var Gm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Hm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Wm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},km=parseFloat,Xm=parseInt,Ah=typeof $a=="object"&&$a&&$a.Object===Object&&$a,qm=typeof self=="object"&&self&&self.Object===Object&&self,mn=Ah||qm||Function("return this")(),xl=e&&!e.nodeType&&e,Mr=xl&&!0&&r&&!r.nodeType&&r,bh=Mr&&Mr.exports===xl,Ml=bh&&Ah.process,$n=function(){try{var W=Mr&&Mr.require&&Mr.require("util").types;return W||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),Rh=$n&&$n.isArrayBuffer,Ch=$n&&$n.isDate,Ih=$n&&$n.isMap,Lh=$n&&$n.isRegExp,Ph=$n&&$n.isSet,Dh=$n&&$n.isTypedArray;function Gn(W,te,J){switch(J.length){case 0:return W.call(te);case 1:return W.call(te,J[0]);case 2:return W.call(te,J[0],J[1]);case 3:return W.call(te,J[0],J[1],J[2])}return W.apply(te,J)}function Ym(W,te,J,Fe){for(var rt=-1,Rt=W==null?0:W.length;++rt<Rt;){var rn=W[rt];te(Fe,rn,J(rn),W)}return Fe}function Jn(W,te){for(var J=-1,Fe=W==null?0:W.length;++J<Fe&&te(W[J],J,W)!==!1;);return W}function Zm(W,te){for(var J=W==null?0:W.length;J--&&te(W[J],J,W)!==!1;);return W}function Uh(W,te){for(var J=-1,Fe=W==null?0:W.length;++J<Fe;)if(!te(W[J],J,W))return!1;return!0}function $i(W,te){for(var J=-1,Fe=W==null?0:W.length,rt=0,Rt=[];++J<Fe;){var rn=W[J];te(rn,J,W)&&(Rt[rt++]=rn)}return Rt}function Bo(W,te){var J=W==null?0:W.length;return!!J&&Zr(W,te,0)>-1}function El(W,te,J){for(var Fe=-1,rt=W==null?0:W.length;++Fe<rt;)if(J(te,W[Fe]))return!0;return!1}function Xt(W,te){for(var J=-1,Fe=W==null?0:W.length,rt=Array(Fe);++J<Fe;)rt[J]=te(W[J],J,W);return rt}function Ji(W,te){for(var J=-1,Fe=te.length,rt=W.length;++J<Fe;)W[rt+J]=te[J];return W}function Sl(W,te,J,Fe){var rt=-1,Rt=W==null?0:W.length;for(Fe&&Rt&&(J=W[++rt]);++rt<Rt;)J=te(J,W[rt],rt,W);return J}function Km(W,te,J,Fe){var rt=W==null?0:W.length;for(Fe&&rt&&(J=W[--rt]);rt--;)J=te(J,W[rt],rt,W);return J}function yl(W,te){for(var J=-1,Fe=W==null?0:W.length;++J<Fe;)if(te(W[J],J,W))return!0;return!1}var $m=Tl("length");function Jm(W){return W.split("")}function Qm(W){return W.match(Uo)||[]}function Nh(W,te,J){var Fe;return J(W,function(rt,Rt,rn){if(te(rt,Rt,rn))return Fe=Rt,!1}),Fe}function zo(W,te,J,Fe){for(var rt=W.length,Rt=J+(Fe?1:-1);Fe?Rt--:++Rt<rt;)if(te(W[Rt],Rt,W))return Rt;return-1}function Zr(W,te,J){return te===te?u_(W,te,J):zo(W,Fh,J)}function jm(W,te,J,Fe){for(var rt=J-1,Rt=W.length;++rt<Rt;)if(Fe(W[rt],te))return rt;return-1}function Fh(W){return W!==W}function Oh(W,te){var J=W==null?0:W.length;return J?Al(W,te)/J:Le}function Tl(W){return function(te){return te==null?t:te[W]}}function wl(W){return function(te){return W==null?t:W[te]}}function Bh(W,te,J,Fe,rt){return rt(W,function(Rt,rn,zt){J=Fe?(Fe=!1,Rt):te(J,Rt,rn,zt)}),J}function e_(W,te){var J=W.length;for(W.sort(te);J--;)W[J]=W[J].value;return W}function Al(W,te){for(var J,Fe=-1,rt=W.length;++Fe<rt;){var Rt=te(W[Fe]);Rt!==t&&(J=J===t?Rt:J+Rt)}return J}function bl(W,te){for(var J=-1,Fe=Array(W);++J<W;)Fe[J]=te(J);return Fe}function t_(W,te){return Xt(te,function(J){return[J,W[J]]})}function zh(W){return W&&W.slice(0,Wh(W)+1).replace(ci,"")}function Hn(W){return function(te){return W(te)}}function Rl(W,te){return Xt(te,function(J){return W[J]})}function ks(W,te){return W.has(te)}function Gh(W,te){for(var J=-1,Fe=W.length;++J<Fe&&Zr(te,W[J],0)>-1;);return J}function Hh(W,te){for(var J=W.length;J--&&Zr(te,W[J],0)>-1;);return J}function n_(W,te){for(var J=W.length,Fe=0;J--;)W[J]===te&&++Fe;return Fe}var i_=wl(Gm),r_=wl(Hm);function s_(W){return"\\"+Wm[W]}function o_(W,te){return W==null?t:W[te]}function Kr(W){return Fm.test(W)}function a_(W){return Om.test(W)}function l_(W){for(var te,J=[];!(te=W.next()).done;)J.push(te.value);return J}function Cl(W){var te=-1,J=Array(W.size);return W.forEach(function(Fe,rt){J[++te]=[rt,Fe]}),J}function Vh(W,te){return function(J){return W(te(J))}}function Qi(W,te){for(var J=-1,Fe=W.length,rt=0,Rt=[];++J<Fe;){var rn=W[J];(rn===te||rn===p)&&(W[J]=p,Rt[rt++]=J)}return Rt}function Go(W){var te=-1,J=Array(W.size);return W.forEach(function(Fe){J[++te]=Fe}),J}function c_(W){var te=-1,J=Array(W.size);return W.forEach(function(Fe){J[++te]=[Fe,Fe]}),J}function u_(W,te,J){for(var Fe=J-1,rt=W.length;++Fe<rt;)if(W[Fe]===te)return Fe;return-1}function h_(W,te,J){for(var Fe=J+1;Fe--;)if(W[Fe]===te)return Fe;return Fe}function $r(W){return Kr(W)?d_(W):$m(W)}function ui(W){return Kr(W)?p_(W):Jm(W)}function Wh(W){for(var te=W.length;te--&&Ws.test(W.charAt(te)););return te}var f_=wl(Vm);function d_(W){for(var te=vl.lastIndex=0;vl.test(W);)++te;return te}function p_(W){return W.match(vl)||[]}function m_(W){return W.match(Nm)||[]}var __=function W(te){te=te==null?mn:Jr.defaults(mn.Object(),te,Jr.pick(mn,Bm));var J=te.Array,Fe=te.Date,rt=te.Error,Rt=te.Function,rn=te.Math,zt=te.Object,Il=te.RegExp,g_=te.String,Qn=te.TypeError,Ho=J.prototype,v_=Rt.prototype,Qr=zt.prototype,Vo=te["__core-js_shared__"],Wo=v_.toString,Lt=Qr.hasOwnProperty,x_=0,kh=function(){var n=/[^.]+$/.exec(Vo&&Vo.keys&&Vo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ko=Qr.toString,M_=Wo.call(zt),E_=mn._,S_=Il("^"+Wo.call(Lt).replace(Xr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xo=bh?te.Buffer:t,ji=te.Symbol,qo=te.Uint8Array,Xh=Xo?Xo.allocUnsafe:t,Yo=Vh(zt.getPrototypeOf,zt),qh=zt.create,Yh=Qr.propertyIsEnumerable,Zo=Ho.splice,Zh=ji?ji.isConcatSpreadable:t,Xs=ji?ji.iterator:t,Er=ji?ji.toStringTag:t,Ko=function(){try{var n=Ar(zt,"defineProperty");return n({},"",{}),n}catch{}}(),y_=te.clearTimeout!==mn.clearTimeout&&te.clearTimeout,T_=Fe&&Fe.now!==mn.Date.now&&Fe.now,w_=te.setTimeout!==mn.setTimeout&&te.setTimeout,$o=rn.ceil,Jo=rn.floor,Ll=zt.getOwnPropertySymbols,A_=Xo?Xo.isBuffer:t,Kh=te.isFinite,b_=Ho.join,R_=Vh(zt.keys,zt),sn=rn.max,Mn=rn.min,C_=Fe.now,I_=te.parseInt,$h=rn.random,L_=Ho.reverse,Pl=Ar(te,"DataView"),qs=Ar(te,"Map"),Dl=Ar(te,"Promise"),jr=Ar(te,"Set"),Ys=Ar(te,"WeakMap"),Zs=Ar(zt,"create"),Qo=Ys&&new Ys,es={},P_=br(Pl),D_=br(qs),U_=br(Dl),N_=br(jr),F_=br(Ys),jo=ji?ji.prototype:t,Ks=jo?jo.valueOf:t,Jh=jo?jo.toString:t;function y(n){if(Kt(n)&&!ot(n)&&!(n instanceof xt)){if(n instanceof jn)return n;if(Lt.call(n,"__wrapped__"))return jf(n)}return new jn(n)}var ts=function(){function n(){}return function(s){if(!Zt(s))return{};if(qh)return qh(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function ea(){}function jn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}y.templateSettings={escape:st,evaluate:kt,interpolate:tn,variable:"",imports:{_:y}},y.prototype=ea.prototype,y.prototype.constructor=y,jn.prototype=ts(ea.prototype),jn.prototype.constructor=jn;function xt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Be,this.__views__=[]}function O_(){var n=new xt(this.__wrapped__);return n.__actions__=Un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Un(this.__views__),n}function B_(){if(this.__filtered__){var n=new xt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function z_(){var n=this.__wrapped__.value(),s=this.__dir__,l=ot(n),d=s<0,M=l?n.length:0,R=Jg(0,M,this.__views__),U=R.start,G=R.end,X=G-U,se=d?G:U-1,ae=this.__iteratees__,de=ae.length,ye=0,Ve=Mn(X,this.__takeCount__);if(!l||!d&&M==X&&Ve==X)return Sf(n,this.__actions__);var $e=[];e:for(;X--&&ye<Ve;){se+=s;for(var ct=-1,Je=n[se];++ct<de;){var gt=ae[ct],St=gt.iteratee,kn=gt.type,Rn=St(Je);if(kn==he)Je=Rn;else if(!Rn){if(kn==re)continue e;break e}}$e[ye++]=Je}return $e}xt.prototype=ts(ea.prototype),xt.prototype.constructor=xt;function Sr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function G_(){this.__data__=Zs?Zs(null):{},this.size=0}function H_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function V_(n){var s=this.__data__;if(Zs){var l=s[n];return l===h?t:l}return Lt.call(s,n)?s[n]:t}function W_(n){var s=this.__data__;return Zs?s[n]!==t:Lt.call(s,n)}function k_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Zs&&s===t?h:s,this}Sr.prototype.clear=G_,Sr.prototype.delete=H_,Sr.prototype.get=V_,Sr.prototype.has=W_,Sr.prototype.set=k_;function Ri(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function X_(){this.__data__=[],this.size=0}function q_(n){var s=this.__data__,l=ta(s,n);if(l<0)return!1;var d=s.length-1;return l==d?s.pop():Zo.call(s,l,1),--this.size,!0}function Y_(n){var s=this.__data__,l=ta(s,n);return l<0?t:s[l][1]}function Z_(n){return ta(this.__data__,n)>-1}function K_(n,s){var l=this.__data__,d=ta(l,n);return d<0?(++this.size,l.push([n,s])):l[d][1]=s,this}Ri.prototype.clear=X_,Ri.prototype.delete=q_,Ri.prototype.get=Y_,Ri.prototype.has=Z_,Ri.prototype.set=K_;function Ci(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function $_(){this.size=0,this.__data__={hash:new Sr,map:new(qs||Ri),string:new Sr}}function J_(n){var s=da(this,n).delete(n);return this.size-=s?1:0,s}function Q_(n){return da(this,n).get(n)}function j_(n){return da(this,n).has(n)}function eg(n,s){var l=da(this,n),d=l.size;return l.set(n,s),this.size+=l.size==d?0:1,this}Ci.prototype.clear=$_,Ci.prototype.delete=J_,Ci.prototype.get=Q_,Ci.prototype.has=j_,Ci.prototype.set=eg;function yr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ci;++s<l;)this.add(n[s])}function tg(n){return this.__data__.set(n,h),this}function ng(n){return this.__data__.has(n)}yr.prototype.add=yr.prototype.push=tg,yr.prototype.has=ng;function hi(n){var s=this.__data__=new Ri(n);this.size=s.size}function ig(){this.__data__=new Ri,this.size=0}function rg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function sg(n){return this.__data__.get(n)}function og(n){return this.__data__.has(n)}function ag(n,s){var l=this.__data__;if(l instanceof Ri){var d=l.__data__;if(!qs||d.length<o-1)return d.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ci(d)}return l.set(n,s),this.size=l.size,this}hi.prototype.clear=ig,hi.prototype.delete=rg,hi.prototype.get=sg,hi.prototype.has=og,hi.prototype.set=ag;function Qh(n,s){var l=ot(n),d=!l&&Rr(n),M=!l&&!d&&rr(n),R=!l&&!d&&!M&&ss(n),U=l||d||M||R,G=U?bl(n.length,g_):[],X=G.length;for(var se in n)(s||Lt.call(n,se))&&!(U&&(se=="length"||M&&(se=="offset"||se=="parent")||R&&(se=="buffer"||se=="byteLength"||se=="byteOffset")||Di(se,X)))&&G.push(se);return G}function jh(n){var s=n.length;return s?n[kl(0,s-1)]:t}function lg(n,s){return pa(Un(n),Tr(s,0,n.length))}function cg(n){return pa(Un(n))}function Ul(n,s,l){(l!==t&&!fi(n[s],l)||l===t&&!(s in n))&&Ii(n,s,l)}function $s(n,s,l){var d=n[s];(!(Lt.call(n,s)&&fi(d,l))||l===t&&!(s in n))&&Ii(n,s,l)}function ta(n,s){for(var l=n.length;l--;)if(fi(n[l][0],s))return l;return-1}function ug(n,s,l,d){return er(n,function(M,R,U){s(d,M,l(M),U)}),d}function ef(n,s){return n&&Ei(s,fn(s),n)}function hg(n,s){return n&&Ei(s,Fn(s),n)}function Ii(n,s,l){s=="__proto__"&&Ko?Ko(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Nl(n,s){for(var l=-1,d=s.length,M=J(d),R=n==null;++l<d;)M[l]=R?t:mc(n,s[l]);return M}function Tr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function ei(n,s,l,d,M,R){var U,G=s&_,X=s&g,se=s&x;if(l&&(U=M?l(n,d,M,R):l(n)),U!==t)return U;if(!Zt(n))return n;var ae=ot(n);if(ae){if(U=jg(n),!G)return Un(n,U)}else{var de=En(n),ye=de==Pt||de==mt;if(rr(n))return wf(n,G);if(de==nt||de==Me||ye&&!M){if(U=X||ye?{}:kf(n),!G)return X?Vg(n,hg(U,n)):Hg(n,ef(U,n))}else{if(!Ht[de])return M?n:{};U=e0(n,de,G)}}R||(R=new hi);var Ve=R.get(n);if(Ve)return Ve;R.set(n,U),xd(n)?n.forEach(function(Je){U.add(ei(Je,s,l,Je,n,R))}):gd(n)&&n.forEach(function(Je,gt){U.set(gt,ei(Je,s,l,gt,n,R))});var $e=se?X?tc:ec:X?Fn:fn,ct=ae?t:$e(n);return Jn(ct||n,function(Je,gt){ct&&(gt=Je,Je=n[gt]),$s(U,gt,ei(Je,s,l,gt,n,R))}),U}function fg(n){var s=fn(n);return function(l){return tf(l,n,s)}}function tf(n,s,l){var d=l.length;if(n==null)return!d;for(n=zt(n);d--;){var M=l[d],R=s[M],U=n[M];if(U===t&&!(M in n)||!R(U))return!1}return!0}function nf(n,s,l){if(typeof n!="function")throw new Qn(c);return io(function(){n.apply(t,l)},s)}function Js(n,s,l,d){var M=-1,R=Bo,U=!0,G=n.length,X=[],se=s.length;if(!G)return X;l&&(s=Xt(s,Hn(l))),d?(R=El,U=!1):s.length>=o&&(R=ks,U=!1,s=new yr(s));e:for(;++M<G;){var ae=n[M],de=l==null?ae:l(ae);if(ae=d||ae!==0?ae:0,U&&de===de){for(var ye=se;ye--;)if(s[ye]===de)continue e;X.push(ae)}else R(s,de,d)||X.push(ae)}return X}var er=If(Mi),rf=If(Ol,!0);function dg(n,s){var l=!0;return er(n,function(d,M,R){return l=!!s(d,M,R),l}),l}function na(n,s,l){for(var d=-1,M=n.length;++d<M;){var R=n[d],U=s(R);if(U!=null&&(G===t?U===U&&!Wn(U):l(U,G)))var G=U,X=R}return X}function pg(n,s,l,d){var M=n.length;for(l=at(l),l<0&&(l=-l>M?0:M+l),d=d===t||d>M?M:at(d),d<0&&(d+=M),d=l>d?0:Ed(d);l<d;)n[l++]=s;return n}function sf(n,s){var l=[];return er(n,function(d,M,R){s(d,M,R)&&l.push(d)}),l}function _n(n,s,l,d,M){var R=-1,U=n.length;for(l||(l=n0),M||(M=[]);++R<U;){var G=n[R];s>0&&l(G)?s>1?_n(G,s-1,l,d,M):Ji(M,G):d||(M[M.length]=G)}return M}var Fl=Lf(),of=Lf(!0);function Mi(n,s){return n&&Fl(n,s,fn)}function Ol(n,s){return n&&of(n,s,fn)}function ia(n,s){return $i(s,function(l){return Ui(n[l])})}function wr(n,s){s=nr(s,n);for(var l=0,d=s.length;n!=null&&l<d;)n=n[Si(s[l++])];return l&&l==d?n:t}function af(n,s,l){var d=s(n);return ot(n)?d:Ji(d,l(n))}function An(n){return n==null?n===t?ue:vt:Er&&Er in zt(n)?$g(n):c0(n)}function Bl(n,s){return n>s}function mg(n,s){return n!=null&&Lt.call(n,s)}function _g(n,s){return n!=null&&s in zt(n)}function gg(n,s,l){return n>=Mn(s,l)&&n<sn(s,l)}function zl(n,s,l){for(var d=l?El:Bo,M=n[0].length,R=n.length,U=R,G=J(R),X=1/0,se=[];U--;){var ae=n[U];U&&s&&(ae=Xt(ae,Hn(s))),X=Mn(ae.length,X),G[U]=!l&&(s||M>=120&&ae.length>=120)?new yr(U&&ae):t}ae=n[0];var de=-1,ye=G[0];e:for(;++de<M&&se.length<X;){var Ve=ae[de],$e=s?s(Ve):Ve;if(Ve=l||Ve!==0?Ve:0,!(ye?ks(ye,$e):d(se,$e,l))){for(U=R;--U;){var ct=G[U];if(!(ct?ks(ct,$e):d(n[U],$e,l)))continue e}ye&&ye.push($e),se.push(Ve)}}return se}function vg(n,s,l,d){return Mi(n,function(M,R,U){s(d,l(M),R,U)}),d}function Qs(n,s,l){s=nr(s,n),n=Zf(n,s);var d=n==null?n:n[Si(ni(s))];return d==null?t:Gn(d,n,l)}function lf(n){return Kt(n)&&An(n)==Me}function xg(n){return Kt(n)&&An(n)==Ge}function Mg(n){return Kt(n)&&An(n)==pt}function js(n,s,l,d,M){return n===s?!0:n==null||s==null||!Kt(n)&&!Kt(s)?n!==n&&s!==s:Eg(n,s,l,d,js,M)}function Eg(n,s,l,d,M,R){var U=ot(n),G=ot(s),X=U?ze:En(n),se=G?ze:En(s);X=X==Me?nt:X,se=se==Me?nt:se;var ae=X==nt,de=se==nt,ye=X==se;if(ye&&rr(n)){if(!rr(s))return!1;U=!0,ae=!1}if(ye&&!ae)return R||(R=new hi),U||ss(n)?Hf(n,s,l,d,M,R):Zg(n,s,X,l,d,M,R);if(!(l&S)){var Ve=ae&&Lt.call(n,"__wrapped__"),$e=de&&Lt.call(s,"__wrapped__");if(Ve||$e){var ct=Ve?n.value():n,Je=$e?s.value():s;return R||(R=new hi),M(ct,Je,l,d,R)}}return ye?(R||(R=new hi),Kg(n,s,l,d,M,R)):!1}function Sg(n){return Kt(n)&&En(n)==O}function Gl(n,s,l,d){var M=l.length,R=M,U=!d;if(n==null)return!R;for(n=zt(n);M--;){var G=l[M];if(U&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++M<R;){G=l[M];var X=G[0],se=n[X],ae=G[1];if(U&&G[2]){if(se===t&&!(X in n))return!1}else{var de=new hi;if(d)var ye=d(se,ae,X,n,s,de);if(!(ye===t?js(ae,se,S|A,d,de):ye))return!1}}return!0}function cf(n){if(!Zt(n)||r0(n))return!1;var s=Ui(n)?S_:ml;return s.test(br(n))}function yg(n){return Kt(n)&&An(n)==He}function Tg(n){return Kt(n)&&En(n)==P}function wg(n){return Kt(n)&&Ma(n.length)&&!!Wt[An(n)]}function uf(n){return typeof n=="function"?n:n==null?On:typeof n=="object"?ot(n)?df(n[0],n[1]):ff(n):Pd(n)}function Hl(n){if(!no(n))return R_(n);var s=[];for(var l in zt(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function Ag(n){if(!Zt(n))return l0(n);var s=no(n),l=[];for(var d in n)d=="constructor"&&(s||!Lt.call(n,d))||l.push(d);return l}function Vl(n,s){return n<s}function hf(n,s){var l=-1,d=Nn(n)?J(n.length):[];return er(n,function(M,R,U){d[++l]=s(M,R,U)}),d}function ff(n){var s=ic(n);return s.length==1&&s[0][2]?qf(s[0][0],s[0][1]):function(l){return l===n||Gl(l,n,s)}}function df(n,s){return sc(n)&&Xf(s)?qf(Si(n),s):function(l){var d=mc(l,n);return d===t&&d===s?_c(l,n):js(s,d,S|A)}}function ra(n,s,l,d,M){n!==s&&Fl(s,function(R,U){if(M||(M=new hi),Zt(R))bg(n,s,U,l,ra,d,M);else{var G=d?d(ac(n,U),R,U+"",n,s,M):t;G===t&&(G=R),Ul(n,U,G)}},Fn)}function bg(n,s,l,d,M,R,U){var G=ac(n,l),X=ac(s,l),se=U.get(X);if(se){Ul(n,l,se);return}var ae=R?R(G,X,l+"",n,s,U):t,de=ae===t;if(de){var ye=ot(X),Ve=!ye&&rr(X),$e=!ye&&!Ve&&ss(X);ae=X,ye||Ve||$e?ot(G)?ae=G:Jt(G)?ae=Un(G):Ve?(de=!1,ae=wf(X,!0)):$e?(de=!1,ae=Af(X,!0)):ae=[]:ro(X)||Rr(X)?(ae=G,Rr(G)?ae=Sd(G):(!Zt(G)||Ui(G))&&(ae=kf(X))):de=!1}de&&(U.set(X,ae),M(ae,X,d,R,U),U.delete(X)),Ul(n,l,ae)}function pf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Di(s,l)?n[s]:t}function mf(n,s,l){s.length?s=Xt(s,function(R){return ot(R)?function(U){return wr(U,R.length===1?R[0]:R)}:R}):s=[On];var d=-1;s=Xt(s,Hn(Ke()));var M=hf(n,function(R,U,G){var X=Xt(s,function(se){return se(R)});return{criteria:X,index:++d,value:R}});return e_(M,function(R,U){return Gg(R,U,l)})}function Rg(n,s){return _f(n,s,function(l,d){return _c(n,d)})}function _f(n,s,l){for(var d=-1,M=s.length,R={};++d<M;){var U=s[d],G=wr(n,U);l(G,U)&&eo(R,nr(U,n),G)}return R}function Cg(n){return function(s){return wr(s,n)}}function Wl(n,s,l,d){var M=d?jm:Zr,R=-1,U=s.length,G=n;for(n===s&&(s=Un(s)),l&&(G=Xt(n,Hn(l)));++R<U;)for(var X=0,se=s[R],ae=l?l(se):se;(X=M(G,ae,X,d))>-1;)G!==n&&Zo.call(G,X,1),Zo.call(n,X,1);return n}function gf(n,s){for(var l=n?s.length:0,d=l-1;l--;){var M=s[l];if(l==d||M!==R){var R=M;Di(M)?Zo.call(n,M,1):Yl(n,M)}}return n}function kl(n,s){return n+Jo($h()*(s-n+1))}function Ig(n,s,l,d){for(var M=-1,R=sn($o((s-n)/(l||1)),0),U=J(R);R--;)U[d?R:++M]=n,n+=l;return U}function Xl(n,s){var l="";if(!n||s<1||s>j)return l;do s%2&&(l+=n),s=Jo(s/2),s&&(n+=n);while(s);return l}function ft(n,s){return lc(Yf(n,s,On),n+"")}function Lg(n){return jh(os(n))}function Pg(n,s){var l=os(n);return pa(l,Tr(s,0,l.length))}function eo(n,s,l,d){if(!Zt(n))return n;s=nr(s,n);for(var M=-1,R=s.length,U=R-1,G=n;G!=null&&++M<R;){var X=Si(s[M]),se=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=U){var ae=G[X];se=d?d(ae,X,G):t,se===t&&(se=Zt(ae)?ae:Di(s[M+1])?[]:{})}$s(G,X,se),G=G[X]}return n}var vf=Qo?function(n,s){return Qo.set(n,s),n}:On,Dg=Ko?function(n,s){return Ko(n,"toString",{configurable:!0,enumerable:!1,value:vc(s),writable:!0})}:On;function Ug(n){return pa(os(n))}function ti(n,s,l){var d=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var R=J(M);++d<M;)R[d]=n[d+s];return R}function Ng(n,s){var l;return er(n,function(d,M,R){return l=s(d,M,R),!l}),!!l}function sa(n,s,l){var d=0,M=n==null?d:n.length;if(typeof s=="number"&&s===s&&M<=It){for(;d<M;){var R=d+M>>>1,U=n[R];U!==null&&!Wn(U)&&(l?U<=s:U<s)?d=R+1:M=R}return M}return ql(n,s,On,l)}function ql(n,s,l,d){var M=0,R=n==null?0:n.length;if(R===0)return 0;s=l(s);for(var U=s!==s,G=s===null,X=Wn(s),se=s===t;M<R;){var ae=Jo((M+R)/2),de=l(n[ae]),ye=de!==t,Ve=de===null,$e=de===de,ct=Wn(de);if(U)var Je=d||$e;else se?Je=$e&&(d||ye):G?Je=$e&&ye&&(d||!Ve):X?Je=$e&&ye&&!Ve&&(d||!ct):Ve||ct?Je=!1:Je=d?de<=s:de<s;Je?M=ae+1:R=ae}return Mn(R,ht)}function xf(n,s){for(var l=-1,d=n.length,M=0,R=[];++l<d;){var U=n[l],G=s?s(U):U;if(!l||!fi(G,X)){var X=G;R[M++]=U===0?0:U}}return R}function Mf(n){return typeof n=="number"?n:Wn(n)?Le:+n}function Vn(n){if(typeof n=="string")return n;if(ot(n))return Xt(n,Vn)+"";if(Wn(n))return Jh?Jh.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function tr(n,s,l){var d=-1,M=Bo,R=n.length,U=!0,G=[],X=G;if(l)U=!1,M=El;else if(R>=o){var se=s?null:qg(n);if(se)return Go(se);U=!1,M=ks,X=new yr}else X=s?[]:G;e:for(;++d<R;){var ae=n[d],de=s?s(ae):ae;if(ae=l||ae!==0?ae:0,U&&de===de){for(var ye=X.length;ye--;)if(X[ye]===de)continue e;s&&X.push(de),G.push(ae)}else M(X,de,l)||(X!==G&&X.push(de),G.push(ae))}return G}function Yl(n,s){return s=nr(s,n),n=Zf(n,s),n==null||delete n[Si(ni(s))]}function Ef(n,s,l,d){return eo(n,s,l(wr(n,s)),d)}function oa(n,s,l,d){for(var M=n.length,R=d?M:-1;(d?R--:++R<M)&&s(n[R],R,n););return l?ti(n,d?0:R,d?R+1:M):ti(n,d?R+1:0,d?M:R)}function Sf(n,s){var l=n;return l instanceof xt&&(l=l.value()),Sl(s,function(d,M){return M.func.apply(M.thisArg,Ji([d],M.args))},l)}function Zl(n,s,l){var d=n.length;if(d<2)return d?tr(n[0]):[];for(var M=-1,R=J(d);++M<d;)for(var U=n[M],G=-1;++G<d;)G!=M&&(R[M]=Js(R[M]||U,n[G],s,l));return tr(_n(R,1),s,l)}function yf(n,s,l){for(var d=-1,M=n.length,R=s.length,U={};++d<M;){var G=d<R?s[d]:t;l(U,n[d],G)}return U}function Kl(n){return Jt(n)?n:[]}function $l(n){return typeof n=="function"?n:On}function nr(n,s){return ot(n)?n:sc(n,s)?[n]:Qf(Ct(n))}var Fg=ft;function ir(n,s,l){var d=n.length;return l=l===t?d:l,!s&&l>=d?n:ti(n,s,l)}var Tf=y_||function(n){return mn.clearTimeout(n)};function wf(n,s){if(s)return n.slice();var l=n.length,d=Xh?Xh(l):new n.constructor(l);return n.copy(d),d}function Jl(n){var s=new n.constructor(n.byteLength);return new qo(s).set(new qo(n)),s}function Og(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Bg(n){var s=new n.constructor(n.source,Oo.exec(n));return s.lastIndex=n.lastIndex,s}function zg(n){return Ks?zt(Ks.call(n)):{}}function Af(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function bf(n,s){if(n!==s){var l=n!==t,d=n===null,M=n===n,R=Wn(n),U=s!==t,G=s===null,X=s===s,se=Wn(s);if(!G&&!se&&!R&&n>s||R&&U&&X&&!G&&!se||d&&U&&X||!l&&X||!M)return 1;if(!d&&!R&&!se&&n<s||se&&l&&M&&!d&&!R||G&&l&&M||!U&&M||!X)return-1}return 0}function Gg(n,s,l){for(var d=-1,M=n.criteria,R=s.criteria,U=M.length,G=l.length;++d<U;){var X=bf(M[d],R[d]);if(X){if(d>=G)return X;var se=l[d];return X*(se=="desc"?-1:1)}}return n.index-s.index}function Rf(n,s,l,d){for(var M=-1,R=n.length,U=l.length,G=-1,X=s.length,se=sn(R-U,0),ae=J(X+se),de=!d;++G<X;)ae[G]=s[G];for(;++M<U;)(de||M<R)&&(ae[l[M]]=n[M]);for(;se--;)ae[G++]=n[M++];return ae}function Cf(n,s,l,d){for(var M=-1,R=n.length,U=-1,G=l.length,X=-1,se=s.length,ae=sn(R-G,0),de=J(ae+se),ye=!d;++M<ae;)de[M]=n[M];for(var Ve=M;++X<se;)de[Ve+X]=s[X];for(;++U<G;)(ye||M<R)&&(de[Ve+l[U]]=n[M++]);return de}function Un(n,s){var l=-1,d=n.length;for(s||(s=J(d));++l<d;)s[l]=n[l];return s}function Ei(n,s,l,d){var M=!l;l||(l={});for(var R=-1,U=s.length;++R<U;){var G=s[R],X=d?d(l[G],n[G],G,l,n):t;X===t&&(X=n[G]),M?Ii(l,G,X):$s(l,G,X)}return l}function Hg(n,s){return Ei(n,rc(n),s)}function Vg(n,s){return Ei(n,Vf(n),s)}function aa(n,s){return function(l,d){var M=ot(l)?Ym:ug,R=s?s():{};return M(l,n,Ke(d,2),R)}}function ns(n){return ft(function(s,l){var d=-1,M=l.length,R=M>1?l[M-1]:t,U=M>2?l[2]:t;for(R=n.length>3&&typeof R=="function"?(M--,R):t,U&&bn(l[0],l[1],U)&&(R=M<3?t:R,M=1),s=zt(s);++d<M;){var G=l[d];G&&n(s,G,d,R)}return s})}function If(n,s){return function(l,d){if(l==null)return l;if(!Nn(l))return n(l,d);for(var M=l.length,R=s?M:-1,U=zt(l);(s?R--:++R<M)&&d(U[R],R,U)!==!1;);return l}}function Lf(n){return function(s,l,d){for(var M=-1,R=zt(s),U=d(s),G=U.length;G--;){var X=U[n?G:++M];if(l(R[X],X,R)===!1)break}return s}}function Wg(n,s,l){var d=s&v,M=to(n);function R(){var U=this&&this!==mn&&this instanceof R?M:n;return U.apply(d?l:this,arguments)}return R}function Pf(n){return function(s){s=Ct(s);var l=Kr(s)?ui(s):t,d=l?l[0]:s.charAt(0),M=l?ir(l,1).join(""):s.slice(1);return d[n]()+M}}function is(n){return function(s){return Sl(Id(Cd(s).replace(Dm,"")),n,"")}}function to(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=ts(n.prototype),d=n.apply(l,s);return Zt(d)?d:l}}function kg(n,s,l){var d=to(n);function M(){for(var R=arguments.length,U=J(R),G=R,X=rs(M);G--;)U[G]=arguments[G];var se=R<3&&U[0]!==X&&U[R-1]!==X?[]:Qi(U,X);if(R-=se.length,R<l)return Of(n,s,la,M.placeholder,t,U,se,t,t,l-R);var ae=this&&this!==mn&&this instanceof M?d:n;return Gn(ae,this,U)}return M}function Df(n){return function(s,l,d){var M=zt(s);if(!Nn(s)){var R=Ke(l,3);s=fn(s),l=function(G){return R(M[G],G,M)}}var U=n(s,l,d);return U>-1?M[R?s[U]:U]:t}}function Uf(n){return Pi(function(s){var l=s.length,d=l,M=jn.prototype.thru;for(n&&s.reverse();d--;){var R=s[d];if(typeof R!="function")throw new Qn(c);if(M&&!U&&fa(R)=="wrapper")var U=new jn([],!0)}for(d=U?d:l;++d<l;){R=s[d];var G=fa(R),X=G=="wrapper"?nc(R):t;X&&oc(X[0])&&X[1]==(F|I|B|z)&&!X[4].length&&X[9]==1?U=U[fa(X[0])].apply(U,X[3]):U=R.length==1&&oc(R)?U[G]():U.thru(R)}return function(){var se=arguments,ae=se[0];if(U&&se.length==1&&ot(ae))return U.plant(ae).value();for(var de=0,ye=l?s[de].apply(this,se):ae;++de<l;)ye=s[de].call(this,ye);return ye}})}function la(n,s,l,d,M,R,U,G,X,se){var ae=s&F,de=s&v,ye=s&m,Ve=s&(I|b),$e=s&C,ct=ye?t:to(n);function Je(){for(var gt=arguments.length,St=J(gt),kn=gt;kn--;)St[kn]=arguments[kn];if(Ve)var Rn=rs(Je),Xn=n_(St,Rn);if(d&&(St=Rf(St,d,M,Ve)),R&&(St=Cf(St,R,U,Ve)),gt-=Xn,Ve&&gt<se){var Qt=Qi(St,Rn);return Of(n,s,la,Je.placeholder,l,St,Qt,G,X,se-gt)}var di=de?l:this,Fi=ye?di[n]:n;return gt=St.length,G?St=u0(St,G):$e&&gt>1&&St.reverse(),ae&&X<gt&&(St.length=X),this&&this!==mn&&this instanceof Je&&(Fi=ct||to(Fi)),Fi.apply(di,St)}return Je}function Nf(n,s){return function(l,d){return vg(l,n,s(d),{})}}function ca(n,s){return function(l,d){var M;if(l===t&&d===t)return s;if(l!==t&&(M=l),d!==t){if(M===t)return d;typeof l=="string"||typeof d=="string"?(l=Vn(l),d=Vn(d)):(l=Mf(l),d=Mf(d)),M=n(l,d)}return M}}function Ql(n){return Pi(function(s){return s=Xt(s,Hn(Ke())),ft(function(l){var d=this;return n(s,function(M){return Gn(M,d,l)})})})}function ua(n,s){s=s===t?" ":Vn(s);var l=s.length;if(l<2)return l?Xl(s,n):s;var d=Xl(s,$o(n/$r(s)));return Kr(s)?ir(ui(d),0,n).join(""):d.slice(0,n)}function Xg(n,s,l,d){var M=s&v,R=to(n);function U(){for(var G=-1,X=arguments.length,se=-1,ae=d.length,de=J(ae+X),ye=this&&this!==mn&&this instanceof U?R:n;++se<ae;)de[se]=d[se];for(;X--;)de[se++]=arguments[++G];return Gn(ye,M?l:this,de)}return U}function Ff(n){return function(s,l,d){return d&&typeof d!="number"&&bn(s,l,d)&&(l=d=t),s=Ni(s),l===t?(l=s,s=0):l=Ni(l),d=d===t?s<l?1:-1:Ni(d),Ig(s,l,d,n)}}function ha(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ii(s),l=ii(l)),n(s,l)}}function Of(n,s,l,d,M,R,U,G,X,se){var ae=s&I,de=ae?U:t,ye=ae?t:U,Ve=ae?R:t,$e=ae?t:R;s|=ae?B:N,s&=~(ae?N:B),s&L||(s&=-4);var ct=[n,s,M,Ve,de,$e,ye,G,X,se],Je=l.apply(t,ct);return oc(n)&&Kf(Je,ct),Je.placeholder=d,$f(Je,n,s)}function jl(n){var s=rn[n];return function(l,d){if(l=ii(l),d=d==null?0:Mn(at(d),292),d&&Kh(l)){var M=(Ct(l)+"e").split("e"),R=s(M[0]+"e"+(+M[1]+d));return M=(Ct(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return s(l)}}var qg=jr&&1/Go(new jr([,-0]))[1]==pe?function(n){return new jr(n)}:Ec;function Bf(n){return function(s){var l=En(s);return l==O?Cl(s):l==P?c_(s):t_(s,n(s))}}function Li(n,s,l,d,M,R,U,G){var X=s&m;if(!X&&typeof n!="function")throw new Qn(c);var se=d?d.length:0;if(se||(s&=-97,d=M=t),U=U===t?U:sn(at(U),0),G=G===t?G:at(G),se-=M?M.length:0,s&N){var ae=d,de=M;d=M=t}var ye=X?t:nc(n),Ve=[n,s,l,d,M,ae,de,R,U,G];if(ye&&a0(Ve,ye),n=Ve[0],s=Ve[1],l=Ve[2],d=Ve[3],M=Ve[4],G=Ve[9]=Ve[9]===t?X?0:n.length:sn(Ve[9]-se,0),!G&&s&(I|b)&&(s&=-25),!s||s==v)var $e=Wg(n,s,l);else s==I||s==b?$e=kg(n,s,G):(s==B||s==(v|B))&&!M.length?$e=Xg(n,s,l,d):$e=la.apply(t,Ve);var ct=ye?vf:Kf;return $f(ct($e,Ve),n,s)}function zf(n,s,l,d){return n===t||fi(n,Qr[l])&&!Lt.call(d,l)?s:n}function Gf(n,s,l,d,M,R){return Zt(n)&&Zt(s)&&(R.set(s,n),ra(n,s,t,Gf,R),R.delete(s)),n}function Yg(n){return ro(n)?t:n}function Hf(n,s,l,d,M,R){var U=l&S,G=n.length,X=s.length;if(G!=X&&!(U&&X>G))return!1;var se=R.get(n),ae=R.get(s);if(se&&ae)return se==s&&ae==n;var de=-1,ye=!0,Ve=l&A?new yr:t;for(R.set(n,s),R.set(s,n);++de<G;){var $e=n[de],ct=s[de];if(d)var Je=U?d(ct,$e,de,s,n,R):d($e,ct,de,n,s,R);if(Je!==t){if(Je)continue;ye=!1;break}if(Ve){if(!yl(s,function(gt,St){if(!ks(Ve,St)&&($e===gt||M($e,gt,l,d,R)))return Ve.push(St)})){ye=!1;break}}else if(!($e===ct||M($e,ct,l,d,R))){ye=!1;break}}return R.delete(n),R.delete(s),ye}function Zg(n,s,l,d,M,R,U){switch(l){case Se:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Ge:return!(n.byteLength!=s.byteLength||!R(new qo(n),new qo(s)));case Xe:case pt:case cn:return fi(+n,+s);case Gt:return n.name==s.name&&n.message==s.message;case He:case E:return n==s+"";case O:var G=Cl;case P:var X=d&S;if(G||(G=Go),n.size!=s.size&&!X)return!1;var se=U.get(n);if(se)return se==s;d|=A,U.set(n,s);var ae=Hf(G(n),G(s),d,M,R,U);return U.delete(n),ae;case Y:if(Ks)return Ks.call(n)==Ks.call(s)}return!1}function Kg(n,s,l,d,M,R){var U=l&S,G=ec(n),X=G.length,se=ec(s),ae=se.length;if(X!=ae&&!U)return!1;for(var de=X;de--;){var ye=G[de];if(!(U?ye in s:Lt.call(s,ye)))return!1}var Ve=R.get(n),$e=R.get(s);if(Ve&&$e)return Ve==s&&$e==n;var ct=!0;R.set(n,s),R.set(s,n);for(var Je=U;++de<X;){ye=G[de];var gt=n[ye],St=s[ye];if(d)var kn=U?d(St,gt,ye,s,n,R):d(gt,St,ye,n,s,R);if(!(kn===t?gt===St||M(gt,St,l,d,R):kn)){ct=!1;break}Je||(Je=ye=="constructor")}if(ct&&!Je){var Rn=n.constructor,Xn=s.constructor;Rn!=Xn&&"constructor"in n&&"constructor"in s&&!(typeof Rn=="function"&&Rn instanceof Rn&&typeof Xn=="function"&&Xn instanceof Xn)&&(ct=!1)}return R.delete(n),R.delete(s),ct}function Pi(n){return lc(Yf(n,t,nd),n+"")}function ec(n){return af(n,fn,rc)}function tc(n){return af(n,Fn,Vf)}var nc=Qo?function(n){return Qo.get(n)}:Ec;function fa(n){for(var s=n.name+"",l=es[s],d=Lt.call(es,s)?l.length:0;d--;){var M=l[d],R=M.func;if(R==null||R==n)return M.name}return s}function rs(n){var s=Lt.call(y,"placeholder")?y:n;return s.placeholder}function Ke(){var n=y.iteratee||xc;return n=n===xc?uf:n,arguments.length?n(arguments[0],arguments[1]):n}function da(n,s){var l=n.__data__;return i0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function ic(n){for(var s=fn(n),l=s.length;l--;){var d=s[l],M=n[d];s[l]=[d,M,Xf(M)]}return s}function Ar(n,s){var l=o_(n,s);return cf(l)?l:t}function $g(n){var s=Lt.call(n,Er),l=n[Er];try{n[Er]=t;var d=!0}catch{}var M=ko.call(n);return d&&(s?n[Er]=l:delete n[Er]),M}var rc=Ll?function(n){return n==null?[]:(n=zt(n),$i(Ll(n),function(s){return Yh.call(n,s)}))}:Sc,Vf=Ll?function(n){for(var s=[];n;)Ji(s,rc(n)),n=Yo(n);return s}:Sc,En=An;(Pl&&En(new Pl(new ArrayBuffer(1)))!=Se||qs&&En(new qs)!=O||Dl&&En(Dl.resolve())!=We||jr&&En(new jr)!=P||Ys&&En(new Ys)!=fe)&&(En=function(n){var s=An(n),l=s==nt?n.constructor:t,d=l?br(l):"";if(d)switch(d){case P_:return Se;case D_:return O;case U_:return We;case N_:return P;case F_:return fe}return s});function Jg(n,s,l){for(var d=-1,M=l.length;++d<M;){var R=l[d],U=R.size;switch(R.type){case"drop":n+=U;break;case"dropRight":s-=U;break;case"take":s=Mn(s,n+U);break;case"takeRight":n=sn(n,s-U);break}}return{start:n,end:s}}function Qg(n){var s=n.match(Do);return s?s[1].split(qr):[]}function Wf(n,s,l){s=nr(s,n);for(var d=-1,M=s.length,R=!1;++d<M;){var U=Si(s[d]);if(!(R=n!=null&&l(n,U)))break;n=n[U]}return R||++d!=M?R:(M=n==null?0:n.length,!!M&&Ma(M)&&Di(U,M)&&(ot(n)||Rr(n)))}function jg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function kf(n){return typeof n.constructor=="function"&&!no(n)?ts(Yo(n)):{}}function e0(n,s,l){var d=n.constructor;switch(s){case Ge:return Jl(n);case Xe:case pt:return new d(+n);case Se:return Og(n,l);case Pe:case _t:case ve:case Ue:case Ye:case Qe:case Ne:case dt:case it:return Af(n,l);case O:return new d;case cn:case E:return new d(n);case He:return Bg(n);case P:return new d;case Y:return zg(n)}}function t0(n,s){var l=s.length;if(!l)return n;var d=l-1;return s[d]=(l>1?"& ":"")+s[d],s=s.join(l>2?", ":" "),n.replace(Po,`{
/* [wrapped with `+s+`] */
`)}function n0(n){return ot(n)||Rr(n)||!!(Zh&&n&&n[Zh])}function Di(n,s){var l=typeof n;return s=s??j,!!s&&(l=="number"||l!="symbol"&&gl.test(n))&&n>-1&&n%1==0&&n<s}function bn(n,s,l){if(!Zt(l))return!1;var d=typeof s;return(d=="number"?Nn(l)&&Di(s,l.length):d=="string"&&s in l)?fi(l[s],n):!1}function sc(n,s){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Wn(n)?!0:zn.test(n)||!bt.test(n)||s!=null&&n in zt(s)}function i0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function oc(n){var s=fa(n),l=y[s];if(typeof l!="function"||!(s in xt.prototype))return!1;if(n===l)return!0;var d=nc(l);return!!d&&n===d[0]}function r0(n){return!!kh&&kh in n}var s0=Vo?Ui:yc;function no(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Qr;return n===l}function Xf(n){return n===n&&!Zt(n)}function qf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in zt(l))}}function o0(n){var s=va(n,function(d){return l.size===f&&l.clear(),d}),l=s.cache;return s}function a0(n,s){var l=n[1],d=s[1],M=l|d,R=M<(v|m|F),U=d==F&&l==I||d==F&&l==z&&n[7].length<=s[8]||d==(F|z)&&s[7].length<=s[8]&&l==I;if(!(R||U))return n;d&v&&(n[2]=s[2],M|=l&v?0:L);var G=s[3];if(G){var X=n[3];n[3]=X?Rf(X,G,s[4]):G,n[4]=X?Qi(n[3],p):s[4]}return G=s[5],G&&(X=n[5],n[5]=X?Cf(X,G,s[6]):G,n[6]=X?Qi(n[5],p):s[6]),G=s[7],G&&(n[7]=G),d&F&&(n[8]=n[8]==null?s[8]:Mn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function l0(n){var s=[];if(n!=null)for(var l in zt(n))s.push(l);return s}function c0(n){return ko.call(n)}function Yf(n,s,l){return s=sn(s===t?n.length-1:s,0),function(){for(var d=arguments,M=-1,R=sn(d.length-s,0),U=J(R);++M<R;)U[M]=d[s+M];M=-1;for(var G=J(s+1);++M<s;)G[M]=d[M];return G[s]=l(U),Gn(n,this,G)}}function Zf(n,s){return s.length<2?n:wr(n,ti(s,0,-1))}function u0(n,s){for(var l=n.length,d=Mn(s.length,l),M=Un(n);d--;){var R=s[d];n[d]=Di(R,l)?M[R]:t}return n}function ac(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Kf=Jf(vf),io=w_||function(n,s){return mn.setTimeout(n,s)},lc=Jf(Dg);function $f(n,s,l){var d=s+"";return lc(n,t0(d,h0(Qg(d),l)))}function Jf(n){var s=0,l=0;return function(){var d=C_(),M=$-(d-l);if(l=d,M>0){if(++s>=Q)return arguments[0]}else s=0;return n.apply(t,arguments)}}function pa(n,s){var l=-1,d=n.length,M=d-1;for(s=s===t?d:s;++l<s;){var R=kl(l,M),U=n[R];n[R]=n[l],n[l]=U}return n.length=s,n}var Qf=o0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(li,function(l,d,M,R){s.push(M?R.replace(No,"$1"):d||l)}),s});function Si(n){if(typeof n=="string"||Wn(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function br(n){if(n!=null){try{return Wo.call(n)}catch{}try{return n+""}catch{}}return""}function h0(n,s){return Jn(le,function(l){var d="_."+l[0];s&l[1]&&!Bo(n,d)&&n.push(d)}),n.sort()}function jf(n){if(n instanceof xt)return n.clone();var s=new jn(n.__wrapped__,n.__chain__);return s.__actions__=Un(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function f0(n,s,l){(l?bn(n,s,l):s===t)?s=1:s=sn(at(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var M=0,R=0,U=J($o(d/s));M<d;)U[R++]=ti(n,M,M+=s);return U}function d0(n){for(var s=-1,l=n==null?0:n.length,d=0,M=[];++s<l;){var R=n[s];R&&(M[d++]=R)}return M}function p0(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),l=arguments[0],d=n;d--;)s[d-1]=arguments[d];return Ji(ot(l)?Un(l):[l],_n(s,1))}var m0=ft(function(n,s){return Jt(n)?Js(n,_n(s,1,Jt,!0)):[]}),_0=ft(function(n,s){var l=ni(s);return Jt(l)&&(l=t),Jt(n)?Js(n,_n(s,1,Jt,!0),Ke(l,2)):[]}),g0=ft(function(n,s){var l=ni(s);return Jt(l)&&(l=t),Jt(n)?Js(n,_n(s,1,Jt,!0),t,l):[]});function v0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),ti(n,s<0?0:s,d)):[]}function x0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),s=d-s,ti(n,0,s<0?0:s)):[]}function M0(n,s){return n&&n.length?oa(n,Ke(s,3),!0,!0):[]}function E0(n,s){return n&&n.length?oa(n,Ke(s,3),!0):[]}function S0(n,s,l,d){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&bn(n,s,l)&&(l=0,d=M),pg(n,s,l,d)):[]}function ed(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:at(l);return M<0&&(M=sn(d+M,0)),zo(n,Ke(s,3),M)}function td(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d-1;return l!==t&&(M=at(l),M=l<0?sn(d+M,0):Mn(M,d-1)),zo(n,Ke(s,3),M,!0)}function nd(n){var s=n==null?0:n.length;return s?_n(n,1):[]}function y0(n){var s=n==null?0:n.length;return s?_n(n,pe):[]}function T0(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:at(s),_n(n,s)):[]}function w0(n){for(var s=-1,l=n==null?0:n.length,d={};++s<l;){var M=n[s];d[M[0]]=M[1]}return d}function id(n){return n&&n.length?n[0]:t}function A0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:at(l);return M<0&&(M=sn(d+M,0)),Zr(n,s,M)}function b0(n){var s=n==null?0:n.length;return s?ti(n,0,-1):[]}var R0=ft(function(n){var s=Xt(n,Kl);return s.length&&s[0]===n[0]?zl(s):[]}),C0=ft(function(n){var s=ni(n),l=Xt(n,Kl);return s===ni(l)?s=t:l.pop(),l.length&&l[0]===n[0]?zl(l,Ke(s,2)):[]}),I0=ft(function(n){var s=ni(n),l=Xt(n,Kl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?zl(l,t,s):[]});function L0(n,s){return n==null?"":b_.call(n,s)}function ni(n){var s=n==null?0:n.length;return s?n[s-1]:t}function P0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d;return l!==t&&(M=at(l),M=M<0?sn(d+M,0):Mn(M,d-1)),s===s?h_(n,s,M):zo(n,Fh,M,!0)}function D0(n,s){return n&&n.length?pf(n,at(s)):t}var U0=ft(rd);function rd(n,s){return n&&n.length&&s&&s.length?Wl(n,s):n}function N0(n,s,l){return n&&n.length&&s&&s.length?Wl(n,s,Ke(l,2)):n}function F0(n,s,l){return n&&n.length&&s&&s.length?Wl(n,s,t,l):n}var O0=Pi(function(n,s){var l=n==null?0:n.length,d=Nl(n,s);return gf(n,Xt(s,function(M){return Di(M,l)?+M:M}).sort(bf)),d});function B0(n,s){var l=[];if(!(n&&n.length))return l;var d=-1,M=[],R=n.length;for(s=Ke(s,3);++d<R;){var U=n[d];s(U,d,n)&&(l.push(U),M.push(d))}return gf(n,M),l}function cc(n){return n==null?n:L_.call(n)}function z0(n,s,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&bn(n,s,l)?(s=0,l=d):(s=s==null?0:at(s),l=l===t?d:at(l)),ti(n,s,l)):[]}function G0(n,s){return sa(n,s)}function H0(n,s,l){return ql(n,s,Ke(l,2))}function V0(n,s){var l=n==null?0:n.length;if(l){var d=sa(n,s);if(d<l&&fi(n[d],s))return d}return-1}function W0(n,s){return sa(n,s,!0)}function k0(n,s,l){return ql(n,s,Ke(l,2),!0)}function X0(n,s){var l=n==null?0:n.length;if(l){var d=sa(n,s,!0)-1;if(fi(n[d],s))return d}return-1}function q0(n){return n&&n.length?xf(n):[]}function Y0(n,s){return n&&n.length?xf(n,Ke(s,2)):[]}function Z0(n){var s=n==null?0:n.length;return s?ti(n,1,s):[]}function K0(n,s,l){return n&&n.length?(s=l||s===t?1:at(s),ti(n,0,s<0?0:s)):[]}function $0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),s=d-s,ti(n,s<0?0:s,d)):[]}function J0(n,s){return n&&n.length?oa(n,Ke(s,3),!1,!0):[]}function Q0(n,s){return n&&n.length?oa(n,Ke(s,3)):[]}var j0=ft(function(n){return tr(_n(n,1,Jt,!0))}),ev=ft(function(n){var s=ni(n);return Jt(s)&&(s=t),tr(_n(n,1,Jt,!0),Ke(s,2))}),tv=ft(function(n){var s=ni(n);return s=typeof s=="function"?s:t,tr(_n(n,1,Jt,!0),t,s)});function nv(n){return n&&n.length?tr(n):[]}function iv(n,s){return n&&n.length?tr(n,Ke(s,2)):[]}function rv(n,s){return s=typeof s=="function"?s:t,n&&n.length?tr(n,t,s):[]}function uc(n){if(!(n&&n.length))return[];var s=0;return n=$i(n,function(l){if(Jt(l))return s=sn(l.length,s),!0}),bl(s,function(l){return Xt(n,Tl(l))})}function sd(n,s){if(!(n&&n.length))return[];var l=uc(n);return s==null?l:Xt(l,function(d){return Gn(s,t,d)})}var sv=ft(function(n,s){return Jt(n)?Js(n,s):[]}),ov=ft(function(n){return Zl($i(n,Jt))}),av=ft(function(n){var s=ni(n);return Jt(s)&&(s=t),Zl($i(n,Jt),Ke(s,2))}),lv=ft(function(n){var s=ni(n);return s=typeof s=="function"?s:t,Zl($i(n,Jt),t,s)}),cv=ft(uc);function uv(n,s){return yf(n||[],s||[],$s)}function hv(n,s){return yf(n||[],s||[],eo)}var fv=ft(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,sd(n,l)});function od(n){var s=y(n);return s.__chain__=!0,s}function dv(n,s){return s(n),n}function ma(n,s){return s(n)}var pv=Pi(function(n){var s=n.length,l=s?n[0]:0,d=this.__wrapped__,M=function(R){return Nl(R,n)};return s>1||this.__actions__.length||!(d instanceof xt)||!Di(l)?this.thru(M):(d=d.slice(l,+l+(s?1:0)),d.__actions__.push({func:ma,args:[M],thisArg:t}),new jn(d,this.__chain__).thru(function(R){return s&&!R.length&&R.push(t),R}))});function mv(){return od(this)}function _v(){return new jn(this.value(),this.__chain__)}function gv(){this.__values__===t&&(this.__values__=Md(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function vv(){return this}function xv(n){for(var s,l=this;l instanceof ea;){var d=jf(l);d.__index__=0,d.__values__=t,s?M.__wrapped__=d:s=d;var M=d;l=l.__wrapped__}return M.__wrapped__=n,s}function Mv(){var n=this.__wrapped__;if(n instanceof xt){var s=n;return this.__actions__.length&&(s=new xt(this)),s=s.reverse(),s.__actions__.push({func:ma,args:[cc],thisArg:t}),new jn(s,this.__chain__)}return this.thru(cc)}function Ev(){return Sf(this.__wrapped__,this.__actions__)}var Sv=aa(function(n,s,l){Lt.call(n,l)?++n[l]:Ii(n,l,1)});function yv(n,s,l){var d=ot(n)?Uh:dg;return l&&bn(n,s,l)&&(s=t),d(n,Ke(s,3))}function Tv(n,s){var l=ot(n)?$i:sf;return l(n,Ke(s,3))}var wv=Df(ed),Av=Df(td);function bv(n,s){return _n(_a(n,s),1)}function Rv(n,s){return _n(_a(n,s),pe)}function Cv(n,s,l){return l=l===t?1:at(l),_n(_a(n,s),l)}function ad(n,s){var l=ot(n)?Jn:er;return l(n,Ke(s,3))}function ld(n,s){var l=ot(n)?Zm:rf;return l(n,Ke(s,3))}var Iv=aa(function(n,s,l){Lt.call(n,l)?n[l].push(s):Ii(n,l,[s])});function Lv(n,s,l,d){n=Nn(n)?n:os(n),l=l&&!d?at(l):0;var M=n.length;return l<0&&(l=sn(M+l,0)),Ea(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Zr(n,s,l)>-1}var Pv=ft(function(n,s,l){var d=-1,M=typeof s=="function",R=Nn(n)?J(n.length):[];return er(n,function(U){R[++d]=M?Gn(s,U,l):Qs(U,s,l)}),R}),Dv=aa(function(n,s,l){Ii(n,l,s)});function _a(n,s){var l=ot(n)?Xt:hf;return l(n,Ke(s,3))}function Uv(n,s,l,d){return n==null?[]:(ot(s)||(s=s==null?[]:[s]),l=d?t:l,ot(l)||(l=l==null?[]:[l]),mf(n,s,l))}var Nv=aa(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function Fv(n,s,l){var d=ot(n)?Sl:Bh,M=arguments.length<3;return d(n,Ke(s,4),l,M,er)}function Ov(n,s,l){var d=ot(n)?Km:Bh,M=arguments.length<3;return d(n,Ke(s,4),l,M,rf)}function Bv(n,s){var l=ot(n)?$i:sf;return l(n,xa(Ke(s,3)))}function zv(n){var s=ot(n)?jh:Lg;return s(n)}function Gv(n,s,l){(l?bn(n,s,l):s===t)?s=1:s=at(s);var d=ot(n)?lg:Pg;return d(n,s)}function Hv(n){var s=ot(n)?cg:Ug;return s(n)}function Vv(n){if(n==null)return 0;if(Nn(n))return Ea(n)?$r(n):n.length;var s=En(n);return s==O||s==P?n.size:Hl(n).length}function Wv(n,s,l){var d=ot(n)?yl:Ng;return l&&bn(n,s,l)&&(s=t),d(n,Ke(s,3))}var kv=ft(function(n,s){if(n==null)return[];var l=s.length;return l>1&&bn(n,s[0],s[1])?s=[]:l>2&&bn(s[0],s[1],s[2])&&(s=[s[0]]),mf(n,_n(s,1),[])}),ga=T_||function(){return mn.Date.now()};function Xv(n,s){if(typeof s!="function")throw new Qn(c);return n=at(n),function(){if(--n<1)return s.apply(this,arguments)}}function cd(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Li(n,F,t,t,t,t,s)}function ud(n,s){var l;if(typeof s!="function")throw new Qn(c);return n=at(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var hc=ft(function(n,s,l){var d=v;if(l.length){var M=Qi(l,rs(hc));d|=B}return Li(n,d,s,l,M)}),hd=ft(function(n,s,l){var d=v|m;if(l.length){var M=Qi(l,rs(hd));d|=B}return Li(s,d,n,l,M)});function fd(n,s,l){s=l?t:s;var d=Li(n,I,t,t,t,t,t,s);return d.placeholder=fd.placeholder,d}function dd(n,s,l){s=l?t:s;var d=Li(n,b,t,t,t,t,t,s);return d.placeholder=dd.placeholder,d}function pd(n,s,l){var d,M,R,U,G,X,se=0,ae=!1,de=!1,ye=!0;if(typeof n!="function")throw new Qn(c);s=ii(s)||0,Zt(l)&&(ae=!!l.leading,de="maxWait"in l,R=de?sn(ii(l.maxWait)||0,s):R,ye="trailing"in l?!!l.trailing:ye);function Ve(Qt){var di=d,Fi=M;return d=M=t,se=Qt,U=n.apply(Fi,di),U}function $e(Qt){return se=Qt,G=io(gt,s),ae?Ve(Qt):U}function ct(Qt){var di=Qt-X,Fi=Qt-se,Dd=s-di;return de?Mn(Dd,R-Fi):Dd}function Je(Qt){var di=Qt-X,Fi=Qt-se;return X===t||di>=s||di<0||de&&Fi>=R}function gt(){var Qt=ga();if(Je(Qt))return St(Qt);G=io(gt,ct(Qt))}function St(Qt){return G=t,ye&&d?Ve(Qt):(d=M=t,U)}function kn(){G!==t&&Tf(G),se=0,d=X=M=G=t}function Rn(){return G===t?U:St(ga())}function Xn(){var Qt=ga(),di=Je(Qt);if(d=arguments,M=this,X=Qt,di){if(G===t)return $e(X);if(de)return Tf(G),G=io(gt,s),Ve(X)}return G===t&&(G=io(gt,s)),U}return Xn.cancel=kn,Xn.flush=Rn,Xn}var qv=ft(function(n,s){return nf(n,1,s)}),Yv=ft(function(n,s,l){return nf(n,ii(s)||0,l)});function Zv(n){return Li(n,C)}function va(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Qn(c);var l=function(){var d=arguments,M=s?s.apply(this,d):d[0],R=l.cache;if(R.has(M))return R.get(M);var U=n.apply(this,d);return l.cache=R.set(M,U)||R,U};return l.cache=new(va.Cache||Ci),l}va.Cache=Ci;function xa(n){if(typeof n!="function")throw new Qn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function Kv(n){return ud(2,n)}var $v=Fg(function(n,s){s=s.length==1&&ot(s[0])?Xt(s[0],Hn(Ke())):Xt(_n(s,1),Hn(Ke()));var l=s.length;return ft(function(d){for(var M=-1,R=Mn(d.length,l);++M<R;)d[M]=s[M].call(this,d[M]);return Gn(n,this,d)})}),fc=ft(function(n,s){var l=Qi(s,rs(fc));return Li(n,B,t,s,l)}),md=ft(function(n,s){var l=Qi(s,rs(md));return Li(n,N,t,s,l)}),Jv=Pi(function(n,s){return Li(n,z,t,t,t,s)});function Qv(n,s){if(typeof n!="function")throw new Qn(c);return s=s===t?s:at(s),ft(n,s)}function jv(n,s){if(typeof n!="function")throw new Qn(c);return s=s==null?0:sn(at(s),0),ft(function(l){var d=l[s],M=ir(l,0,s);return d&&Ji(M,d),Gn(n,this,M)})}function ex(n,s,l){var d=!0,M=!0;if(typeof n!="function")throw new Qn(c);return Zt(l)&&(d="leading"in l?!!l.leading:d,M="trailing"in l?!!l.trailing:M),pd(n,s,{leading:d,maxWait:s,trailing:M})}function tx(n){return cd(n,1)}function nx(n,s){return fc($l(s),n)}function ix(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function rx(n){return ei(n,x)}function sx(n,s){return s=typeof s=="function"?s:t,ei(n,x,s)}function ox(n){return ei(n,_|x)}function ax(n,s){return s=typeof s=="function"?s:t,ei(n,_|x,s)}function lx(n,s){return s==null||tf(n,s,fn(s))}function fi(n,s){return n===s||n!==n&&s!==s}var cx=ha(Bl),ux=ha(function(n,s){return n>=s}),Rr=lf(function(){return arguments}())?lf:function(n){return Kt(n)&&Lt.call(n,"callee")&&!Yh.call(n,"callee")},ot=J.isArray,hx=Rh?Hn(Rh):xg;function Nn(n){return n!=null&&Ma(n.length)&&!Ui(n)}function Jt(n){return Kt(n)&&Nn(n)}function fx(n){return n===!0||n===!1||Kt(n)&&An(n)==Xe}var rr=A_||yc,dx=Ch?Hn(Ch):Mg;function px(n){return Kt(n)&&n.nodeType===1&&!ro(n)}function mx(n){if(n==null)return!0;if(Nn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||rr(n)||ss(n)||Rr(n)))return!n.length;var s=En(n);if(s==O||s==P)return!n.size;if(no(n))return!Hl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function _x(n,s){return js(n,s)}function gx(n,s,l){l=typeof l=="function"?l:t;var d=l?l(n,s):t;return d===t?js(n,s,t,l):!!d}function dc(n){if(!Kt(n))return!1;var s=An(n);return s==Gt||s==je||typeof n.message=="string"&&typeof n.name=="string"&&!ro(n)}function vx(n){return typeof n=="number"&&Kh(n)}function Ui(n){if(!Zt(n))return!1;var s=An(n);return s==Pt||s==mt||s==Re||s==Ot}function _d(n){return typeof n=="number"&&n==at(n)}function Ma(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Zt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Kt(n){return n!=null&&typeof n=="object"}var gd=Ih?Hn(Ih):Sg;function xx(n,s){return n===s||Gl(n,s,ic(s))}function Mx(n,s,l){return l=typeof l=="function"?l:t,Gl(n,s,ic(s),l)}function Ex(n){return vd(n)&&n!=+n}function Sx(n){if(s0(n))throw new rt(a);return cf(n)}function yx(n){return n===null}function Tx(n){return n==null}function vd(n){return typeof n=="number"||Kt(n)&&An(n)==cn}function ro(n){if(!Kt(n)||An(n)!=nt)return!1;var s=Yo(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Wo.call(l)==M_}var pc=Lh?Hn(Lh):yg;function wx(n){return _d(n)&&n>=-9007199254740991&&n<=j}var xd=Ph?Hn(Ph):Tg;function Ea(n){return typeof n=="string"||!ot(n)&&Kt(n)&&An(n)==E}function Wn(n){return typeof n=="symbol"||Kt(n)&&An(n)==Y}var ss=Dh?Hn(Dh):wg;function Ax(n){return n===t}function bx(n){return Kt(n)&&En(n)==fe}function Rx(n){return Kt(n)&&An(n)==oe}var Cx=ha(Vl),Ix=ha(function(n,s){return n<=s});function Md(n){if(!n)return[];if(Nn(n))return Ea(n)?ui(n):Un(n);if(Xs&&n[Xs])return l_(n[Xs]());var s=En(n),l=s==O?Cl:s==P?Go:os;return l(n)}function Ni(n){if(!n)return n===0?n:0;if(n=ii(n),n===pe||n===-1/0){var s=n<0?-1:1;return s*be}return n===n?n:0}function at(n){var s=Ni(n),l=s%1;return s===s?l?s-l:s:0}function Ed(n){return n?Tr(at(n),0,Be):0}function ii(n){if(typeof n=="number")return n;if(Wn(n))return Le;if(Zt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Zt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=zh(n);var l=pl.test(n);return l||_l.test(n)?Xm(n.slice(2),l?2:8):dl.test(n)?Le:+n}function Sd(n){return Ei(n,Fn(n))}function Lx(n){return n?Tr(at(n),-9007199254740991,j):n===0?n:0}function Ct(n){return n==null?"":Vn(n)}var Px=ns(function(n,s){if(no(s)||Nn(s)){Ei(s,fn(s),n);return}for(var l in s)Lt.call(s,l)&&$s(n,l,s[l])}),yd=ns(function(n,s){Ei(s,Fn(s),n)}),Sa=ns(function(n,s,l,d){Ei(s,Fn(s),n,d)}),Dx=ns(function(n,s,l,d){Ei(s,fn(s),n,d)}),Ux=Pi(Nl);function Nx(n,s){var l=ts(n);return s==null?l:ef(l,s)}var Fx=ft(function(n,s){n=zt(n);var l=-1,d=s.length,M=d>2?s[2]:t;for(M&&bn(s[0],s[1],M)&&(d=1);++l<d;)for(var R=s[l],U=Fn(R),G=-1,X=U.length;++G<X;){var se=U[G],ae=n[se];(ae===t||fi(ae,Qr[se])&&!Lt.call(n,se))&&(n[se]=R[se])}return n}),Ox=ft(function(n){return n.push(t,Gf),Gn(Td,t,n)});function Bx(n,s){return Nh(n,Ke(s,3),Mi)}function zx(n,s){return Nh(n,Ke(s,3),Ol)}function Gx(n,s){return n==null?n:Fl(n,Ke(s,3),Fn)}function Hx(n,s){return n==null?n:of(n,Ke(s,3),Fn)}function Vx(n,s){return n&&Mi(n,Ke(s,3))}function Wx(n,s){return n&&Ol(n,Ke(s,3))}function kx(n){return n==null?[]:ia(n,fn(n))}function Xx(n){return n==null?[]:ia(n,Fn(n))}function mc(n,s,l){var d=n==null?t:wr(n,s);return d===t?l:d}function qx(n,s){return n!=null&&Wf(n,s,mg)}function _c(n,s){return n!=null&&Wf(n,s,_g)}var Yx=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=ko.call(s)),n[s]=l},vc(On)),Zx=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=ko.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},Ke),Kx=ft(Qs);function fn(n){return Nn(n)?Qh(n):Hl(n)}function Fn(n){return Nn(n)?Qh(n,!0):Ag(n)}function $x(n,s){var l={};return s=Ke(s,3),Mi(n,function(d,M,R){Ii(l,s(d,M,R),d)}),l}function Jx(n,s){var l={};return s=Ke(s,3),Mi(n,function(d,M,R){Ii(l,M,s(d,M,R))}),l}var Qx=ns(function(n,s,l){ra(n,s,l)}),Td=ns(function(n,s,l,d){ra(n,s,l,d)}),jx=Pi(function(n,s){var l={};if(n==null)return l;var d=!1;s=Xt(s,function(R){return R=nr(R,n),d||(d=R.length>1),R}),Ei(n,tc(n),l),d&&(l=ei(l,_|g|x,Yg));for(var M=s.length;M--;)Yl(l,s[M]);return l});function eM(n,s){return wd(n,xa(Ke(s)))}var tM=Pi(function(n,s){return n==null?{}:Rg(n,s)});function wd(n,s){if(n==null)return{};var l=Xt(tc(n),function(d){return[d]});return s=Ke(s),_f(n,l,function(d,M){return s(d,M[0])})}function nM(n,s,l){s=nr(s,n);var d=-1,M=s.length;for(M||(M=1,n=t);++d<M;){var R=n==null?t:n[Si(s[d])];R===t&&(d=M,R=l),n=Ui(R)?R.call(n):R}return n}function iM(n,s,l){return n==null?n:eo(n,s,l)}function rM(n,s,l,d){return d=typeof d=="function"?d:t,n==null?n:eo(n,s,l,d)}var Ad=Bf(fn),bd=Bf(Fn);function sM(n,s,l){var d=ot(n),M=d||rr(n)||ss(n);if(s=Ke(s,4),l==null){var R=n&&n.constructor;M?l=d?new R:[]:Zt(n)?l=Ui(R)?ts(Yo(n)):{}:l={}}return(M?Jn:Mi)(n,function(U,G,X){return s(l,U,G,X)}),l}function oM(n,s){return n==null?!0:Yl(n,s)}function aM(n,s,l){return n==null?n:Ef(n,s,$l(l))}function lM(n,s,l,d){return d=typeof d=="function"?d:t,n==null?n:Ef(n,s,$l(l),d)}function os(n){return n==null?[]:Rl(n,fn(n))}function cM(n){return n==null?[]:Rl(n,Fn(n))}function uM(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=ii(l),l=l===l?l:0),s!==t&&(s=ii(s),s=s===s?s:0),Tr(ii(n),s,l)}function hM(n,s,l){return s=Ni(s),l===t?(l=s,s=0):l=Ni(l),n=ii(n),gg(n,s,l)}function fM(n,s,l){if(l&&typeof l!="boolean"&&bn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ni(n),s===t?(s=n,n=0):s=Ni(s)),n>s){var d=n;n=s,s=d}if(l||n%1||s%1){var M=$h();return Mn(n+M*(s-n+km("1e-"+((M+"").length-1))),s)}return kl(n,s)}var dM=is(function(n,s,l){return s=s.toLowerCase(),n+(l?Rd(s):s)});function Rd(n){return gc(Ct(n).toLowerCase())}function Cd(n){return n=Ct(n),n&&n.replace(w,i_).replace(Um,"")}function pM(n,s,l){n=Ct(n),s=Vn(s);var d=n.length;l=l===t?d:Tr(at(l),0,d);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function mM(n){return n=Ct(n),n&&Ce.test(n)?n.replace(ce,r_):n}function _M(n){return n=Ct(n),n&&Lo.test(n)?n.replace(Xr,"\\$&"):n}var gM=is(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),vM=is(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),xM=Pf("toLowerCase");function MM(n,s,l){n=Ct(n),s=at(s);var d=s?$r(n):0;if(!s||d>=s)return n;var M=(s-d)/2;return ua(Jo(M),l)+n+ua($o(M),l)}function EM(n,s,l){n=Ct(n),s=at(s);var d=s?$r(n):0;return s&&d<s?n+ua(s-d,l):n}function SM(n,s,l){n=Ct(n),s=at(s);var d=s?$r(n):0;return s&&d<s?ua(s-d,l)+n:n}function yM(n,s,l){return l||s==null?s=0:s&&(s=+s),I_(Ct(n).replace(ci,""),s||0)}function TM(n,s,l){return(l?bn(n,s,l):s===t)?s=1:s=at(s),Xl(Ct(n),s)}function wM(){var n=arguments,s=Ct(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var AM=is(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function bM(n,s,l){return l&&typeof l!="number"&&bn(n,s,l)&&(s=l=t),l=l===t?Be:l>>>0,l?(n=Ct(n),n&&(typeof s=="string"||s!=null&&!pc(s))&&(s=Vn(s),!s&&Kr(n))?ir(ui(n),0,l):n.split(s,l)):[]}var RM=is(function(n,s,l){return n+(l?" ":"")+gc(s)});function CM(n,s,l){return n=Ct(n),l=l==null?0:Tr(at(l),0,n.length),s=Vn(s),n.slice(l,l+s.length)==s}function IM(n,s,l){var d=y.templateSettings;l&&bn(n,s,l)&&(s=t),n=Ct(n),s=Sa({},s,d,zf);var M=Sa({},s.imports,d.imports,zf),R=fn(M),U=Rl(M,R),G,X,se=0,ae=s.interpolate||k,de="__p += '",ye=Il((s.escape||k).source+"|"+ae.source+"|"+(ae===tn?Fo:k).source+"|"+(s.evaluate||k).source+"|$","g"),Ve="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zm+"]")+`
`;n.replace(ye,function(Je,gt,St,kn,Rn,Xn){return St||(St=kn),de+=n.slice(se,Xn).replace(Z,s_),gt&&(G=!0,de+=`' +
__e(`+gt+`) +
'`),Rn&&(X=!0,de+=`';
`+Rn+`;
__p += '`),St&&(de+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),se=Xn+Je.length,Je}),de+=`';
`;var $e=Lt.call(s,"variable")&&s.variable;if(!$e)de=`with (obj) {
`+de+`
}
`;else if(Yr.test($e))throw new rt(u);de=(X?de.replace(Dt,""):de).replace(V,"$1").replace(we,"$1;"),de="function("+($e||"obj")+`) {
`+($e?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+de+`return __p
}`;var ct=Ld(function(){return Rt(R,Ve+"return "+de).apply(t,U)});if(ct.source=de,dc(ct))throw ct;return ct}function LM(n){return Ct(n).toLowerCase()}function PM(n){return Ct(n).toUpperCase()}function DM(n,s,l){if(n=Ct(n),n&&(l||s===t))return zh(n);if(!n||!(s=Vn(s)))return n;var d=ui(n),M=ui(s),R=Gh(d,M),U=Hh(d,M)+1;return ir(d,R,U).join("")}function UM(n,s,l){if(n=Ct(n),n&&(l||s===t))return n.slice(0,Wh(n)+1);if(!n||!(s=Vn(s)))return n;var d=ui(n),M=Hh(d,ui(s))+1;return ir(d,0,M).join("")}function NM(n,s,l){if(n=Ct(n),n&&(l||s===t))return n.replace(ci,"");if(!n||!(s=Vn(s)))return n;var d=ui(n),M=Gh(d,ui(s));return ir(d,M).join("")}function FM(n,s){var l=T,d=H;if(Zt(s)){var M="separator"in s?s.separator:M;l="length"in s?at(s.length):l,d="omission"in s?Vn(s.omission):d}n=Ct(n);var R=n.length;if(Kr(n)){var U=ui(n);R=U.length}if(l>=R)return n;var G=l-$r(d);if(G<1)return d;var X=U?ir(U,0,G).join(""):n.slice(0,G);if(M===t)return X+d;if(U&&(G+=X.length-G),pc(M)){if(n.slice(G).search(M)){var se,ae=X;for(M.global||(M=Il(M.source,Ct(Oo.exec(M))+"g")),M.lastIndex=0;se=M.exec(ae);)var de=se.index;X=X.slice(0,de===t?G:de)}}else if(n.indexOf(Vn(M),G)!=G){var ye=X.lastIndexOf(M);ye>-1&&(X=X.slice(0,ye))}return X+d}function OM(n){return n=Ct(n),n&&Ie.test(n)?n.replace(ee,f_):n}var BM=is(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),gc=Pf("toUpperCase");function Id(n,s,l){return n=Ct(n),s=l?t:s,s===t?a_(n)?m_(n):Qm(n):n.match(s)||[]}var Ld=ft(function(n,s){try{return Gn(n,t,s)}catch(l){return dc(l)?l:new rt(l)}}),zM=Pi(function(n,s){return Jn(s,function(l){l=Si(l),Ii(n,l,hc(n[l],n))}),n});function GM(n){var s=n==null?0:n.length,l=Ke();return n=s?Xt(n,function(d){if(typeof d[1]!="function")throw new Qn(c);return[l(d[0]),d[1]]}):[],ft(function(d){for(var M=-1;++M<s;){var R=n[M];if(Gn(R[0],this,d))return Gn(R[1],this,d)}})}function HM(n){return fg(ei(n,_))}function vc(n){return function(){return n}}function VM(n,s){return n==null||n!==n?s:n}var WM=Uf(),kM=Uf(!0);function On(n){return n}function xc(n){return uf(typeof n=="function"?n:ei(n,_))}function XM(n){return ff(ei(n,_))}function qM(n,s){return df(n,ei(s,_))}var YM=ft(function(n,s){return function(l){return Qs(l,n,s)}}),ZM=ft(function(n,s){return function(l){return Qs(n,l,s)}});function Mc(n,s,l){var d=fn(s),M=ia(s,d);l==null&&!(Zt(s)&&(M.length||!d.length))&&(l=s,s=n,n=this,M=ia(s,fn(s)));var R=!(Zt(l)&&"chain"in l)||!!l.chain,U=Ui(n);return Jn(M,function(G){var X=s[G];n[G]=X,U&&(n.prototype[G]=function(){var se=this.__chain__;if(R||se){var ae=n(this.__wrapped__),de=ae.__actions__=Un(this.__actions__);return de.push({func:X,args:arguments,thisArg:n}),ae.__chain__=se,ae}return X.apply(n,Ji([this.value()],arguments))})}),n}function KM(){return mn._===this&&(mn._=E_),this}function Ec(){}function $M(n){return n=at(n),ft(function(s){return pf(s,n)})}var JM=Ql(Xt),QM=Ql(Uh),jM=Ql(yl);function Pd(n){return sc(n)?Tl(Si(n)):Cg(n)}function eE(n){return function(s){return n==null?t:wr(n,s)}}var tE=Ff(),nE=Ff(!0);function Sc(){return[]}function yc(){return!1}function iE(){return{}}function rE(){return""}function sE(){return!0}function oE(n,s){if(n=at(n),n<1||n>j)return[];var l=Be,d=Mn(n,Be);s=Ke(s),n-=Be;for(var M=bl(d,s);++l<n;)s(l);return M}function aE(n){return ot(n)?Xt(n,Si):Wn(n)?[n]:Un(Qf(Ct(n)))}function lE(n){var s=++x_;return Ct(n)+s}var cE=ca(function(n,s){return n+s},0),uE=jl("ceil"),hE=ca(function(n,s){return n/s},1),fE=jl("floor");function dE(n){return n&&n.length?na(n,On,Bl):t}function pE(n,s){return n&&n.length?na(n,Ke(s,2),Bl):t}function mE(n){return Oh(n,On)}function _E(n,s){return Oh(n,Ke(s,2))}function gE(n){return n&&n.length?na(n,On,Vl):t}function vE(n,s){return n&&n.length?na(n,Ke(s,2),Vl):t}var xE=ca(function(n,s){return n*s},1),ME=jl("round"),EE=ca(function(n,s){return n-s},0);function SE(n){return n&&n.length?Al(n,On):0}function yE(n,s){return n&&n.length?Al(n,Ke(s,2)):0}return y.after=Xv,y.ary=cd,y.assign=Px,y.assignIn=yd,y.assignInWith=Sa,y.assignWith=Dx,y.at=Ux,y.before=ud,y.bind=hc,y.bindAll=zM,y.bindKey=hd,y.castArray=ix,y.chain=od,y.chunk=f0,y.compact=d0,y.concat=p0,y.cond=GM,y.conforms=HM,y.constant=vc,y.countBy=Sv,y.create=Nx,y.curry=fd,y.curryRight=dd,y.debounce=pd,y.defaults=Fx,y.defaultsDeep=Ox,y.defer=qv,y.delay=Yv,y.difference=m0,y.differenceBy=_0,y.differenceWith=g0,y.drop=v0,y.dropRight=x0,y.dropRightWhile=M0,y.dropWhile=E0,y.fill=S0,y.filter=Tv,y.flatMap=bv,y.flatMapDeep=Rv,y.flatMapDepth=Cv,y.flatten=nd,y.flattenDeep=y0,y.flattenDepth=T0,y.flip=Zv,y.flow=WM,y.flowRight=kM,y.fromPairs=w0,y.functions=kx,y.functionsIn=Xx,y.groupBy=Iv,y.initial=b0,y.intersection=R0,y.intersectionBy=C0,y.intersectionWith=I0,y.invert=Yx,y.invertBy=Zx,y.invokeMap=Pv,y.iteratee=xc,y.keyBy=Dv,y.keys=fn,y.keysIn=Fn,y.map=_a,y.mapKeys=$x,y.mapValues=Jx,y.matches=XM,y.matchesProperty=qM,y.memoize=va,y.merge=Qx,y.mergeWith=Td,y.method=YM,y.methodOf=ZM,y.mixin=Mc,y.negate=xa,y.nthArg=$M,y.omit=jx,y.omitBy=eM,y.once=Kv,y.orderBy=Uv,y.over=JM,y.overArgs=$v,y.overEvery=QM,y.overSome=jM,y.partial=fc,y.partialRight=md,y.partition=Nv,y.pick=tM,y.pickBy=wd,y.property=Pd,y.propertyOf=eE,y.pull=U0,y.pullAll=rd,y.pullAllBy=N0,y.pullAllWith=F0,y.pullAt=O0,y.range=tE,y.rangeRight=nE,y.rearg=Jv,y.reject=Bv,y.remove=B0,y.rest=Qv,y.reverse=cc,y.sampleSize=Gv,y.set=iM,y.setWith=rM,y.shuffle=Hv,y.slice=z0,y.sortBy=kv,y.sortedUniq=q0,y.sortedUniqBy=Y0,y.split=bM,y.spread=jv,y.tail=Z0,y.take=K0,y.takeRight=$0,y.takeRightWhile=J0,y.takeWhile=Q0,y.tap=dv,y.throttle=ex,y.thru=ma,y.toArray=Md,y.toPairs=Ad,y.toPairsIn=bd,y.toPath=aE,y.toPlainObject=Sd,y.transform=sM,y.unary=tx,y.union=j0,y.unionBy=ev,y.unionWith=tv,y.uniq=nv,y.uniqBy=iv,y.uniqWith=rv,y.unset=oM,y.unzip=uc,y.unzipWith=sd,y.update=aM,y.updateWith=lM,y.values=os,y.valuesIn=cM,y.without=sv,y.words=Id,y.wrap=nx,y.xor=ov,y.xorBy=av,y.xorWith=lv,y.zip=cv,y.zipObject=uv,y.zipObjectDeep=hv,y.zipWith=fv,y.entries=Ad,y.entriesIn=bd,y.extend=yd,y.extendWith=Sa,Mc(y,y),y.add=cE,y.attempt=Ld,y.camelCase=dM,y.capitalize=Rd,y.ceil=uE,y.clamp=uM,y.clone=rx,y.cloneDeep=ox,y.cloneDeepWith=ax,y.cloneWith=sx,y.conformsTo=lx,y.deburr=Cd,y.defaultTo=VM,y.divide=hE,y.endsWith=pM,y.eq=fi,y.escape=mM,y.escapeRegExp=_M,y.every=yv,y.find=wv,y.findIndex=ed,y.findKey=Bx,y.findLast=Av,y.findLastIndex=td,y.findLastKey=zx,y.floor=fE,y.forEach=ad,y.forEachRight=ld,y.forIn=Gx,y.forInRight=Hx,y.forOwn=Vx,y.forOwnRight=Wx,y.get=mc,y.gt=cx,y.gte=ux,y.has=qx,y.hasIn=_c,y.head=id,y.identity=On,y.includes=Lv,y.indexOf=A0,y.inRange=hM,y.invoke=Kx,y.isArguments=Rr,y.isArray=ot,y.isArrayBuffer=hx,y.isArrayLike=Nn,y.isArrayLikeObject=Jt,y.isBoolean=fx,y.isBuffer=rr,y.isDate=dx,y.isElement=px,y.isEmpty=mx,y.isEqual=_x,y.isEqualWith=gx,y.isError=dc,y.isFinite=vx,y.isFunction=Ui,y.isInteger=_d,y.isLength=Ma,y.isMap=gd,y.isMatch=xx,y.isMatchWith=Mx,y.isNaN=Ex,y.isNative=Sx,y.isNil=Tx,y.isNull=yx,y.isNumber=vd,y.isObject=Zt,y.isObjectLike=Kt,y.isPlainObject=ro,y.isRegExp=pc,y.isSafeInteger=wx,y.isSet=xd,y.isString=Ea,y.isSymbol=Wn,y.isTypedArray=ss,y.isUndefined=Ax,y.isWeakMap=bx,y.isWeakSet=Rx,y.join=L0,y.kebabCase=gM,y.last=ni,y.lastIndexOf=P0,y.lowerCase=vM,y.lowerFirst=xM,y.lt=Cx,y.lte=Ix,y.max=dE,y.maxBy=pE,y.mean=mE,y.meanBy=_E,y.min=gE,y.minBy=vE,y.stubArray=Sc,y.stubFalse=yc,y.stubObject=iE,y.stubString=rE,y.stubTrue=sE,y.multiply=xE,y.nth=D0,y.noConflict=KM,y.noop=Ec,y.now=ga,y.pad=MM,y.padEnd=EM,y.padStart=SM,y.parseInt=yM,y.random=fM,y.reduce=Fv,y.reduceRight=Ov,y.repeat=TM,y.replace=wM,y.result=nM,y.round=ME,y.runInContext=W,y.sample=zv,y.size=Vv,y.snakeCase=AM,y.some=Wv,y.sortedIndex=G0,y.sortedIndexBy=H0,y.sortedIndexOf=V0,y.sortedLastIndex=W0,y.sortedLastIndexBy=k0,y.sortedLastIndexOf=X0,y.startCase=RM,y.startsWith=CM,y.subtract=EE,y.sum=SE,y.sumBy=yE,y.template=IM,y.times=oE,y.toFinite=Ni,y.toInteger=at,y.toLength=Ed,y.toLower=LM,y.toNumber=ii,y.toSafeInteger=Lx,y.toString=Ct,y.toUpper=PM,y.trim=DM,y.trimEnd=UM,y.trimStart=NM,y.truncate=FM,y.unescape=OM,y.uniqueId=lE,y.upperCase=BM,y.upperFirst=gc,y.each=ad,y.eachRight=ld,y.first=id,Mc(y,function(){var n={};return Mi(y,function(s,l){Lt.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,Jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),Jn(["drop","take"],function(n,s){xt.prototype[n]=function(l){l=l===t?1:sn(at(l),0);var d=this.__filtered__&&!s?new xt(this):this.clone();return d.__filtered__?d.__takeCount__=Mn(l,d.__takeCount__):d.__views__.push({size:Mn(l,Be),type:n+(d.__dir__<0?"Right":"")}),d},xt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Jn(["filter","map","takeWhile"],function(n,s){var l=s+1,d=l==re||l==ie;xt.prototype[n]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:Ke(M,3),type:l}),R.__filtered__=R.__filtered__||d,R}}),Jn(["head","last"],function(n,s){var l="take"+(s?"Right":"");xt.prototype[n]=function(){return this[l](1).value()[0]}}),Jn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xt.prototype[n]=function(){return this.__filtered__?new xt(this):this[l](1)}}),xt.prototype.compact=function(){return this.filter(On)},xt.prototype.find=function(n){return this.filter(n).head()},xt.prototype.findLast=function(n){return this.reverse().find(n)},xt.prototype.invokeMap=ft(function(n,s){return typeof n=="function"?new xt(this):this.map(function(l){return Qs(l,n,s)})}),xt.prototype.reject=function(n){return this.filter(xa(Ke(n)))},xt.prototype.slice=function(n,s){n=at(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=at(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xt.prototype.toArray=function(){return this.take(Be)},Mi(xt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),M=y[d?"take"+(s=="last"?"Right":""):s],R=d||/^find/.test(s);M&&(y.prototype[s]=function(){var U=this.__wrapped__,G=d?[1]:arguments,X=U instanceof xt,se=G[0],ae=X||ot(U),de=function(gt){var St=M.apply(y,Ji([gt],G));return d&&ye?St[0]:St};ae&&l&&typeof se=="function"&&se.length!=1&&(X=ae=!1);var ye=this.__chain__,Ve=!!this.__actions__.length,$e=R&&!ye,ct=X&&!Ve;if(!R&&ae){U=ct?U:new xt(this);var Je=n.apply(U,G);return Je.__actions__.push({func:ma,args:[de],thisArg:t}),new jn(Je,ye)}return $e&&ct?n.apply(this,G):(Je=this.thru(de),$e?d?Je.value()[0]:Je.value():Je)})}),Jn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Ho[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var M=arguments;if(d&&!this.__chain__){var R=this.value();return s.apply(ot(R)?R:[],M)}return this[l](function(U){return s.apply(ot(U)?U:[],M)})}}),Mi(xt.prototype,function(n,s){var l=y[s];if(l){var d=l.name+"";Lt.call(es,d)||(es[d]=[]),es[d].push({name:s,func:l})}}),es[la(t,m).name]=[{name:"wrapper",func:t}],xt.prototype.clone=O_,xt.prototype.reverse=B_,xt.prototype.value=z_,y.prototype.at=pv,y.prototype.chain=mv,y.prototype.commit=_v,y.prototype.next=gv,y.prototype.plant=xv,y.prototype.reverse=Mv,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=Ev,y.prototype.first=y.prototype.head,Xs&&(y.prototype[Xs]=vv),y},Jr=__();Mr?((Mr.exports=Jr)._=Jr,xl._=Jr):mn._=Jr}).call(jb)}(Mo,Mo.exports)),Mo.exports}var mo={},Bp;function t1(){if(Bp)return mo;Bp=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.backtrace=void 0;function r(e,t,i){const o=[];let a=i?e:e.getParent();for(;a.getParent();)o.push([a.position.x,a.position.y]),a=a.getParent();return t&&o.push([a.position.x,a.position.y]),o.reverse()}return mo.backtrace=r,mo}var _o={},zp;function n1(){if(zp)return _o;zp=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.calculateHeuristic=void 0;function r(e,t,i,o){const a=Math.abs(i.x-t.x),c=Math.abs(i.y-t.y);switch(e){case"Manhatten":case"Manhattan":return(a+c)*o;case"Euclidean":return Math.sqrt(a*a+c*c)*o;case"Chebyshev":return Math.max(a,c)*o;case"Octile":return(a+c-.58*Math.min(a,c))*o}}return _o.calculateHeuristic=r,_o}var go={},vo={},Gp;function i1(){if(Gp)return vo;Gp=1,Object.defineProperty(vo,"__esModule",{value:!0}),vo.Node=void 0;class r{constructor(t){this.id=t.id,this.position=t.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=t.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(t){this.gValue=t,this.calculateFValue()}setHValue(t){this.hValue=t,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(t){this.parentNode=t}setIsOnClosedList(t){this.isOnClosedList=t}setIsOnOpenList(t){this.isOnOpenList=t}setIsWalkable(t){this.isWalkable=t}}return vo.Node=r,vo}var Hp;function Tm(){if(Hp)return go;Hp=1,Object.defineProperty(go,"__esModule",{value:!0}),go.Grid=void 0;const r=i1();class e{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,o,a,c){const u=[];let h=0;for(let f=0;f<a;f++){u[f]=[];for(let p=0;p<o;p++)u[f][p]=new r.Node({id:h,position:{x:p,y:f}}),h++}if(i===void 0){for(let f=0;f<a;f++)for(let p=0;p<o;p++)Math.floor(Math.random()*10)+1>10-c?u[f][p].setIsWalkable(!1):u[f][p].setIsWalkable(!0);return u}for(let f=0;f<a;f++)for(let p=0;p<o;p++)u[f][p].setIsWalkable(!i[f][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,o){const a=[],c=i.x-1,u=i.x+1,h=i.y-1,f=i.y+1;for(let p=h;p<=f;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(o||_==i.x||p==i.y)&&a.push(this.getNodeAt({x:_,y:p}));return a}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let o=0;o<this.gridNodes[i].length;o++)this.gridNodes[i][o].setIsOnClosedList(!1),this.gridNodes[i][o].setIsOnOpenList(!1),this.gridNodes[i][o].setParent(void 0),this.gridNodes[i][o].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let o=0;for(let a=0;a<this.height;a++){i[a]=[];for(let c=0;c<this.width;c++)i[a][c]=new r.Node({id:o,position:{x:c,y:a},walkable:this.gridNodes[a][c].getIsWalkable()}),o++}return i}}return go.Grid=e,go}var Vp;function r1(){if(Vp)return po;Vp=1,Object.defineProperty(po,"__esModule",{value:!0}),po.AStarFinder=void 0;const r=e1(),e=t1(),t=n1(),i=Tm();class o{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const h=this.grid.getNodeAt(c),f=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];h.setIsOnOpenList(!0),this.openList.push(h);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,t.calculateHeuristic)(this.heuristic,g.position,f.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,r.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,r.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===f)return(0,e.backtrace)(f,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const S=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||S<x.getGValue())&&(x.setGValue(S),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,e.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return po.AStarFinder=o,po}var Wp;function s1(){return Wp||(Wp=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var e=r1();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return e.AStarFinder}});var t=Tm();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return t.Grid}})}(iu)),iu}var o1=s1();class wm{constructor(e){ge(this,"currentHealth");ge(this,"fullHealth");ge(this,"offset");ge(this,"red");ge(this,"green");ge(this,"widthFactor");ge(this,"heightFactor");this.currentHealth=e.currentHealth??e.fullHealth,this.fullHealth=e.fullHealth,this.offset=e.offset,this.red=new sp(new Xu({map:new ap().load("./textures/red.png")})),this.green=new sp(new Xu({map:new ap().load("./textures/green.png")})),this.widthFactor=e.widthFactor??1,this.heightFactor=e.heightFactor??1,this.update(this.currentHealth,e.position)}end(e){e.scene.remove(this.red),e.scene.remove(this.green)}start(e){e.scene.add(this.red),e.scene.add(this.green)}update(e,t){this.currentHealth=e;const i=this.widthFactor*1,o=this.heightFactor*.12;this.red.scale.set(i,o,o),this.red.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),o,o),this.green.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z)}}const bs={createSimpleGrid:r=>{var a;const e=[];for(let c=0;c<r.length;c++){const u=[];for(let h=0;h<r[c].length;h++)u.push(r[c][h].isWalkable?0:1);e.push(u)}const t=e.length,i=((a=e[0])==null?void 0:a.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:t},(h,f)=>e[f][u]))},getBoundedUncheckedNeighbors:(r,e,t)=>{const i=[];return r>0&&i.push(new xe(r-1,e)),r<t.length-1&&i.push(new xe(r+1,e)),e>0&&i.push(new xe(r,e-1)),e<t[0].length-1&&i.push(new xe(r,e+1)),i},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:r=>{const{grid:e,origin:t,myBattleSide:i,range:o,objective:a}=r,c=Math.max(1,o),u=new Set,h=[t.clone()];u.add(bs.getPositionHash(t));let f=0;const p=[];for(;f<h.length;){if(f>e.length*e[0].length*2)return null;const x=h[f];f++;const S=bs.getBoundedUncheckedNeighbors(x.x,x.y,e);for(const A of S){if(!e[A.x][A.y].isWalkable)continue;const v=e[A.x][A.y].actors.find(m=>m instanceof Vs&&m.battleSide!==i);v?p.push({pos:x,enemy:v}):!u.has(bs.getPositionHash(A))&&A.distanceTo(t)<=c&&(h.push(A),u.add(bs.getPositionHash(A)))}}if(p.length===0)return null;let _=p[0];return p.forEach(g=>{g.pos.distanceTo(a)<_.pos.distanceTo(a)&&(_=g)}),_}};class Vs extends vr{constructor(t){super(t);ge(this,"battleSide");ge(this,"pos");ge(this,"radius");ge(this,"hb");ge(this,"fullHealth");ge(this,"health");ge(this,"objective");ge(this,"healthBarOffset",new D(0,_e.TILE_SIZE*.65,0));ge(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ne(Ee.RED),new ne(Ee.DARK)]});ge(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new ne(Ee.RED),new ne(Ee.ORANGE),new ne(Ee.YELLOW),new ne(Ee.WHITE)],amount:30,force:3,size:.8});ge(this,"SPEED",1);this.battleSide=t.battleSide,this.pos=t.pos,this.radius=t.radius,this.fullHealth=t.health,this.health=t.health,this.objective=t.objective,this.hb=new wm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:this.healthBarOffset,heightFactor:.5,widthFactor:.6})}afterSpawn(t,i){super.afterSpawn(t,i),this.hb.start(t)}beforeDeath(t,i,o){super.beforeDeath(t,i,o),this.hb.end(i),Yu.createExplosion(i,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(t,i,o,a){super.update(t,i,o,a);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=1,this.kill(),Yu.createExplosion(o,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(a)<c){this.pos=a;const u=bs.createSimpleGrid(o.actorsGrid),f=new o1.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(a,this.objective.position.clone());if(f.length>1){const p=new xe(f[1][0],f[1][1]);o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(_=>_!==this),o.actorsGrid[p.x][p.y].actors.push(this)}}else{const u=.0012*this.SPEED,h=i*u,f=a.clone().sub(this.pos).normalize(),p=this.pos.distanceTo(a);this.pos.add(f.clone().multiplyScalar(Math.min(h,p)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new D(this.pos.x,this.mesh.position.y,this.pos.y)}}class a1 extends Vs{constructor(t){const i=_e.TILE_SIZE/5,o=_e.TILE_SIZE*.75,a=new D(t.pos.x,o/2,t.pos.y),c=new on({center:a,parts:[{mesh:Ze.createGem({size:i,color:new ne(Ee.METAL)}),offset:new D(0,o/3,0)},{mesh:Ze.createTorus({radius:i,color:new ne(Ee.BLUE)}),offset:new D(0,0,0)},{mesh:Ze.createSphere({radius:i/2,color:new ne(Ee.DARK)}),offset:new D(0,-.75/3,0)}]});super({mesh:c,battleSide:kr.ENEMY,pos:t.pos,radius:i,health:3,objective:t.objective});ge(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ne(Ee.BLUE),new ne(Ee.DARK_GREEN)],amount:50,size:.5,force:2});ge(this,"SPEED",1.5)}update(t,i,o,a){super.update(t,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/200*h,u===2&&(c.mesh.rotation.x+=i/100*h,c.mesh.rotation.z+=i/50*h)})}}class l1 extends Vs{constructor(t){const i=_e.TILE_SIZE/4,o=_e.TILE_SIZE,a=new D(t.pos.x,_e.TILE_SIZE/2,t.pos.y),c=new on({center:a,parts:[{mesh:Ze.createGem({size:i,color:new ne(Ee.METAL)}),offset:new D(0,o/3,0)},{mesh:Ze.createTorus({radius:i,color:new ne(Ee.LIGHT_GREEN)}),offset:new D(0,0,0)},{mesh:Ze.createSphere({radius:i/2,color:new ne(Ee.DARK)}),offset:new D(0,-1/3,0)}]});super({mesh:c,battleSide:kr.ENEMY,pos:t.pos,radius:i,health:5,objective:t.objective});ge(this,"SPEED",.9);ge(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ne(Ee.LIGHT_GREEN),new ne(Ee.GREEN),new ne(Ee.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(t,i,o){super.beforeDeath(t,i,o),i.addActor(new a1({pos:o,objective:this.objective}),o)}update(t,i,o,a){super.update(t,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/200*h,u===2&&(c.mesh.rotation.x+=i/100*h,c.mesh.rotation.z+=i/50*h)})}}class c1 extends Vs{constructor(t){const i=_e.TILE_SIZE/3,o=_e.TILE_SIZE,a=new D(t.pos.x,o/2,t.pos.y),c=new on({center:a,parts:[{mesh:Ze.createTorusKnotBlob({radius:i,color:new ne(Ee.YELLOW)}),offset:new D(0,0,0)},{mesh:Ze.createTorusKnotBlob({radius:i*2/3,color:new ne(Ee.ORANGE)}),offset:new D(0,0,0)}]});super({mesh:c,battleSide:kr.ENEMY,pos:t.pos,radius:i,health:10,objective:t.objective});ge(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ne(Ee.YELLOW),new ne(Ee.DARK)],amount:60,size:.8,force:3});ge(this,"SPEED",.7)}update(t,i,o,a){super.update(t,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/100*h,u===1&&(c.mesh.rotation.x+=i/200*h,c.mesh.rotation.z+=i/100*h)})}}class u1 extends Vs{constructor(e){const t=_e.TILE_SIZE/4,i=_e.TILE_SIZE,o=new D(e.pos.x,_e.TILE_SIZE/2,e.pos.y),a=new on({center:o,parts:[{mesh:Ze.createGem({size:t,color:new ne(Ee.WHITE)}),offset:new D(0,0,0)},{mesh:Ze.createSphere({radius:t,color:new ne(Ee.DARK)}),offset:new D(0,-1/3,0)},{mesh:Ze.createSphere({radius:t,color:new ne(Ee.RED)}),offset:new D(0,i/3,0)}]});super({mesh:a,battleSide:kr.ENEMY,pos:e.pos,radius:t,health:5,objective:e.objective})}update(e,t,i,o){super.update(e,t,i,o),this.mesh.parts.forEach((a,c)=>{const u=c%2?-1:1;a.mesh.rotation.y+=t/500*u,a.mesh.rotation.z+=t/200*u,a.mesh.rotation.x+=t/100*u})}}const yo=class yo extends vr{constructor(t){const i=_e.TILE_SIZE,o=new on({center:new D(t.position.x,i/2,t.position.y),parts:[{mesh:Ze.createBox({color:new ne(Ee.DARK),depth:_e.TILE_SIZE,height:i,width:_e.TILE_SIZE}),offset:new D(0,-1,0)},{mesh:new mh(new ne(Ee.RED),5),offset:new D(0,-1/8,0)}]});super({mesh:o});ge(this,"spawnTimeout",0)}update(t,i,o,a){if(super.update(t,i,o,a),!(o instanceof bo))throw new Error("Spawner can only be used in a BattleFieldContainer");const c=this.spawnTimeout+i,u=Math.floor(c/yo.SPAWN_TIMEOUT);for(let h=0;h<u;h++){const f={pos:a,objective:o.headQuarters},p=Math.random();Math.random()<.33?o.addActor(new u1(f),a):p<.66?o.addActor(new c1(f),a):o.addActor(new l1(f),a)}this.spawnTimeout=c%yo.SPAWN_TIMEOUT}};ge(yo,"SPAWN_TIMEOUT",3e3);let $u=yo;const h1={buildLevel:r=>{const e=[];for(let t=0;t<r.width;t++)for(let i=0;i<r.height;i++){const o=r.level.tiles.find(a=>a.position.x===t&&a.position.y===i);if(o===void 0)e.push({type:"component",component:new Yb({position:new D(t*r.tileSize,-r.tileSize/2,i*r.tileSize),size:r.tileSize,color:new ne(Ee.DARK_GREEN)})});else{const a=new xe(o.position.x*r.tileSize,o.position.y*r.tileSize),c=new D(t*r.tileSize,-r.tileSize/2,i*r.tileSize);switch(o.type){case jt.HQ:{e.push({type:"actor",actor:r.headQuarters,position:a,static:!1});break}case jt.SPW:{e.push({type:"actor",actor:new $u({position:a}),position:a,static:!1});break}case jt.RV:{e.push({type:"static",position:a});break}case jt.BR:{e.push({type:"component",component:new qb({position:c,size:r.tileSize})});break}case jt.BF:{e.push({type:"actor",actor:new Zu({position:c,size:r.tileSize}),position:a,static:!0});break}case jt.TR:{e.push({type:"actor",actor:new f1({position:c,size:r.tileSize}),position:a,static:!0});break}}}}return e}};class f1 extends vr{constructor(e){const t=_e.TILE_SIZE*2,i=ym.createTreeComposite({position:e.position.clone().add(new D(0,t*.75,0)),height:t});i.parts=[...i.parts,{mesh:Ze.createBox({width:e.size,height:e.size,depth:e.size,color:new ne(Ee.DARK_GREEN)}),offset:new D(0,-e.size*3/2,0)}],super({mesh:i})}}const al=class al extends Zi{constructor({position:t,color:i,sizeFactor:o}){const a=_e.TILE_SIZE/72*o,c=Ze.createSphere({radius:a,color:i===void 0?new ne(Ee.WHITE):i,basicMaterial:!0});c.position.set(t.x,t.y,t.z);super({mesh:c});ge(this,"ttl",0);ge(this,"position");ge(this,"velocity");this.position=t,this.velocity=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(_e.TILE_SIZE*5e-5)}update(t,i,o){super.update(t,i,o),this.velocity.y-=5e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>al.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};ge(al,"TTL",1e3);let Ju=al;const To=class To extends Zi{constructor(t){const i=_e.TILE_SIZE/48*t.bulletConfig.sizeFactor;super({mesh:Ze.createSphere({radius:i,color:t.bulletConfig.color===void 0?new ne(Ee.WHITE):t.bulletConfig.color,basicMaterial:!0})});ge(this,"battleSide");ge(this,"position");ge(this,"radius");ge(this,"direction");ge(this,"bulletConfig");ge(this,"particleTimeout",0);ge(this,"hasDamaged",new Set);this.battleSide=t.battleSide,this.direction=t.direction,this.position=t.position,this.radius=i,this.bulletConfig=t.bulletConfig}update(t,i,o){var A,v;super.update(t,i,o);const c=.07*i*this.bulletConfig.speedFactor,u=this.direction.clone().normalize(),h=this.position.clone().add(new D(u.x*c,0,u.y*c)),f=_e.TILE_SIZE/4,p=this.position.distanceTo(h),_=Math.max(1,Math.floor(p/f));for(let m=0;m<_;m++){const L=this.position.clone().add(new D(u.x*f,0,u.y*f)),I=[new xe(L.x-f,L.z-f),new xe(L.x-f,L.z),new xe(L.x-f,L.z+f),new xe(L.x,L.z-f),new xe(L.x,L.z),new xe(L.x,L.z+f),new xe(L.x+f,L.z-f),new xe(L.x+f,L.z),new xe(L.x+f,L.z+f)].map(b=>new xe(Math.floor(b.x),Math.floor(b.y)));for(const b of I){const B=(A=o.actorsGrid[b.x])==null?void 0:A[b.y];if(B){for(const N of B.actors)if(N instanceof Vs&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new xe(this.position.x,this.position.z))<this.radius+N.radius&&!this.hasDamaged.has(N)){N.health-=this.bulletConfig.damage,this.hasDamaged.add(N);break}}}}this.position.set(h.x,this.position.y,h.z);const g=o.actorsGrid.length,x=((v=o.actorsGrid[0])==null?void 0:v.length)??0;-g<=this.position.x&&this.position.x<2*g&&-x<=this.position.z&&this.position.z<2*x||this.kill(),this.particleTimeout+=i,this.particleTimeout>To.PARTICLE_TIMEOUT&&(o.addComponent(new Ju({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%To.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};ge(To,"PARTICLE_TIMEOUT",30);let Qu=To;class Am extends vr{constructor(t){super(t);ge(this,"position");ge(this,"bulletConfig");ge(this,"SHOOT_TIMEOUT",1e3);ge(this,"shootTimeout",0);ge(this,"range",5);ge(this,"objective");this.position=t.position,this.bulletConfig=t.bulletConfig,this.objective=t.objective}update(t,i,o,a){super.update(t,i,o,a);const c=this.shootTimeout+i;if(this.shootTimeout=c%this.SHOOT_TIMEOUT,c>=this.SHOOT_TIMEOUT){const h=bs.findClosestEnemy({grid:o.actorsGrid,origin:this.position.clone(),myBattleSide:kr.ALLY,range:this.range,objective:this.objective.position.clone()}),f=h?new xe(h.enemy.mesh.position.x-this.position.x,h.enemy.mesh.position.z-this.position.y).normalize():null;if(f!==null){const p=new Qu({battleSide:kr.ALLY,direction:f,position:new D(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});o.addComponent(p)}}}}class d1 extends Am{constructor(t){const i=new D(t.position.x,_e.TILE_SIZE,t.position.y),o=Ze.createGem({size:_e.TILE_SIZE/4,color:new ne(Ee.WHITE)}),a=new on({center:i,parts:[{mesh:Ze.createBox({width:_e.TILE_SIZE,height:_e.TILE_SIZE/2,depth:_e.TILE_SIZE,color:new ne(Ee.DARK)}),offset:new D(0,-1*3/4,0)},{mesh:Ze.createBox({width:_e.TILE_SIZE*3/4,height:_e.TILE_SIZE,depth:_e.TILE_SIZE*3/4,color:new ne(Ee.METAL)}),offset:new D(0,0,0)},{mesh:Ze.createBox({width:_e.TILE_SIZE,height:_e.TILE_SIZE/2,depth:_e.TILE_SIZE,color:new ne(Ee.DARK)}),offset:new D(0,_e.TILE_SIZE*3/4,0)},{mesh:o,offset:new D(0,_e.TILE_SIZE*3/2,0)}]});super({mesh:a,position:t.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:t.objective});ge(this,"gem");this.gem=o}update(t,i,o,a){super.update(t,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500)}}class p1 extends Am{constructor(t){const i=new D(t.position.x,_e.TILE_SIZE,t.position.y),o=Ze.createGem({size:_e.TILE_SIZE/4,color:new ne(Ee.YELLOW)}),a=new on({center:i,parts:[{mesh:Ze.createBox({width:_e.TILE_SIZE,height:_e.TILE_SIZE/2,depth:_e.TILE_SIZE,color:new ne(Ee.RED)}),offset:new D(0,-1*3/4,0)},{mesh:Ze.createBox({width:_e.TILE_SIZE*3/4,height:_e.TILE_SIZE,depth:_e.TILE_SIZE*3/4,color:new ne(Ee.DARK)}),offset:new D(0,0,0)},{mesh:Ze.createBox({width:_e.TILE_SIZE,height:_e.TILE_SIZE/2,depth:_e.TILE_SIZE,color:new ne(Ee.RED)}),offset:new D(0,_e.TILE_SIZE*3/4,0)},{mesh:o,offset:new D(0,_e.TILE_SIZE*3/2,0)}]});super({mesh:a,position:t.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new ne(Ee.YELLOW),trailSizeFactor:1.2},objective:t.objective});ge(this,"gem");ge(this,"SHOOT_TIMEOUT",2e3);this.gem=o}update(t,i,o,a){super.update(t,i,o,a),this.gem.rotateX(i/500),this.gem.rotateZ(i/250)}}class m1 extends vr{constructor(t){const i=c=>Ze.createBox({width:c==="horizontal"?_e.TILE_SIZE:_e.TILE_SIZE/16,height:_e.TILE_SIZE/16,depth:c==="vertical"?_e.TILE_SIZE:_e.TILE_SIZE/16,color:new ne(Ee.RED)}),o=new D(t.pos.x,_e.TILE_SIZE/16,t.pos.y),a=new on({center:o,parts:[{mesh:i("vertical"),offset:new D(_e.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new D(-15/32,0,0)},{mesh:i("horizontal"),offset:new D(0,0,_e.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new D(0,0,-15/32)}]});super({mesh:a});ge(this,"pos");ge(this,"canPlace",!1);ge(this,"greenMaterial",new si({color:new ne(Ee.LIGHT_GREEN)}));ge(this,"redMaterial",new si({color:new ne(Ee.RED)}));this.pos=t.pos}update(t,i,o,a){var h;if(super.update(t,i,o,a),!(o instanceof bo))throw new Error("Cursor can only be used in a BattleFieldContainer");let c=0;t.keyboardHandler.wasPressed("ArrowUp")?c=-1:t.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(t.keyboardHandler.wasPressed("ArrowLeft")?u=-1:t.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const f=a.clone().add(new xe(u,c));if(!(0<=f.x&&f.x<o.actorsGrid.length)||!(0<=f.y&&f.y<(((h=o.actorsGrid[0])==null?void 0:h.length)??0)))return;this.pos=f,o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(p=>p!==this),o.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=o.actorsGrid[a.x][a.y].isWalkable&&o.actorsGrid[a.x][a.y].actors.find(f=>f!==this)===void 0,this.canPlace){let f;t.keyboardHandler.wasPressed("z")?f=new d1({position:a.clone(),objective:o.headQuarters}):t.keyboardHandler.wasPressed("x")?f=new p1({position:a.clone(),objective:o.headQuarters}):t.keyboardHandler.wasPressed("c")&&(f=new Xb({position:new D(a.x,_e.TILE_SIZE/2,a.y),size:_e.TILE_SIZE})),f!==void 0&&(o.addActor(f,a.clone()),o.actorsGrid[a.x][a.y].isWalkable=!1)}}graphics(t,i,o){const a=1-Math.exp(-.005*i);this.mesh.position=new D(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*a,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*a),o.camera.position.set(this.mesh.position.x+_e.TILE_SIZE*3,this.mesh.position.y+_e.TILE_SIZE*8,this.mesh.position.z+_e.TILE_SIZE*12),o.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class _1 extends vr{constructor({health:t}){const i=_e.TILE_SIZE/2,o=_e.TILE_SIZE*2,a=_e.TILE_SIZE/2,c=new xe(0,0),u=new D(c.x,_e.TILE_SIZE,c.y),h=Ze.createGem({size:o/4,color:new ne(Ee.LIGHT_GREEN),basicMaterial:!0}),f=new on({center:u,parts:[{mesh:Ze.createBox({color:new ne(Ee.DARK),depth:a,height:o/4,width:i}),offset:new D(0,-2*3/8,0)},{mesh:h,offset:new D(0,o*2/8,0)},{mesh:new mh(new ne(Ee.LIGHT_GREEN),20),offset:new D(0,o*2/8,0)},{mesh:Ze.createBox({color:new ne(Ee.LIGHT_GREEN),depth:_e.TILE_SIZE,height:_e.TILE_SIZE,width:_e.TILE_SIZE}),offset:new D(0,-1*3/2,0)}]});super({mesh:f});ge(this,"gem");ge(this,"hb");ge(this,"fullHealth");ge(this,"health");ge(this,"position");this.gem=h,this.position=c,this.health=t,this.fullHealth=t,this.hb=new wm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new D(0,o/2+_e.TILE_SIZE/2,0)})}afterSpawn(t,i){super.afterSpawn(t,i),this.hb.start(t)}beforeDeath(t,i,o){super.beforeDeath(t,i,o),this.hb.end(i)}update(t,i,o,a){super.update(t,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.position=a,this.hb.update(this.health,this.mesh.position.clone())}graphics(t,i,o,a){super.graphics(t,i,o,a),this.mesh.position=new D(this.position.x,this.mesh.position.y,this.position.y)}}const ll=class ll extends Gb{constructor(){super({width:_e.WIDTH,height:_e.HEIGHT});ge(this,"headQuarters");this.headQuarters=new _1({health:30})}onStart(){var u;const t=this.actorsGrid.length,i=((u=this.actorsGrid[0])==null?void 0:u.length)??0;this.scene.background=new ne(Ee.VOID),this.scene.add(new QS(new ne(Ee.WHITE),new ne(Ee.DARK_GREEN),1)),h1.buildLevel({width:t,height:i,tileSize:ll.TILE_SIZE,level:Qb[0],headQuarters:this.headQuarters}).forEach(h=>{if(h.type==="component")this.addComponent(h.component);else if(h.type==="actor")this.addActor(h.actor,h.position),h.static&&(this.actorsGrid[h.position.x][h.position.y].isWalkable=!1);else if(h.type==="static")this.actorsGrid[h.position.x][h.position.y].isWalkable=!1;else throw new Error(`Unknown command type: ${h==null?void 0:h.type}`)});const a=new xe(Math.floor(t/2),Math.floor(i/2));this.addActor(new m1({pos:a}),a),this.createSceneryStars({width:t,height:i}).forEach(h=>this.addComponent(h)),this.createSceneryMountains({width:t,height:i}).forEach(h=>this.addComponent(h)),this.createSceneryTrees({width:t,height:i}).forEach(h=>this.addComponent(h));const c=new Kb({width:t*1.6,height:i*1.6,position:new D(t/2,-1/2,i/2)});this.addComponent(c)}update(t,i){super.update(t,i)}createSceneryStars(t){const{width:i,height:o}=t,a=200,c=[],u=new D(i/2,0,o/2);for(let h=0;h<a;h++){const _=_e.TILE_SIZE*8*(4+Math.floor(Math.random()*4)),g=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),x=new D(u.x+g.x*_,u.z+g.z*_,u.y+g.y*_);c.push(new Zb({position:x}))}return c}createSceneryMountains(t){const{width:i,height:o}=t,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Za({position:new xe(h-c/8,-u*3/16)});a.push(f)}for(let h=0;h<c;h++){const f=new Za({position:new xe(h-c/8,u*7/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new xe(-c*2/8,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new xe(c*7/8,h-u/16)});a.push(f)}return a}createSceneryTrees(t){const{width:i,height:o}=t,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Ka({position:new xe(h-c/8,-u*3/16+(Math.random()-.5)*_e.TILE_SIZE)});a.push(f)}for(let h=0;h<c;h++){const f=new Ka({position:new xe(h-c/8,u*7/8+(Math.random()-.5)*_e.TILE_SIZE)});a.push(f)}for(let h=0;h<u;h++){const f=new Ka({position:new xe(-c*2/8+(Math.random()-.5)*_e.TILE_SIZE,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Ka({position:new xe(c*7/8+(Math.random()-.5)*_e.TILE_SIZE,h-u/16)});a.push(f)}return a}};ge(ll,"TILE_SIZE",1);let bo=ll;var kr=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(kr||{});const vh=new kb;vh.addContainer(gh.BATTLEFIELD_CONTAINER,new bo);vh.setContainer(gh.BATTLEFIELD_CONTAINER);vh.start();
