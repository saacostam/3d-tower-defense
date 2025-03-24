var TS=Object.defineProperty;var AS=(r,e,t)=>e in r?TS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ve=(r,e,t)=>AS(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ju="173",wS=0,Rd=1,bS=2,kp=1,RS=2,Hi=3,dr=0,Fn=1,Vi=2,ur=0,bs=1,Cd=2,Ld=3,Id=4,CS=5,Dr=100,LS=101,IS=102,PS=103,DS=104,US=200,NS=201,FS=202,OS=203,su=204,au=205,BS=206,zS=207,GS=208,HS=209,VS=210,kS=211,WS=212,XS=213,qS=214,ou=0,lu=1,cu=2,Is=3,uu=4,hu=5,fu=6,du=7,Wp=0,YS=1,ZS=2,hr=0,KS=1,$S=2,JS=3,QS=4,jS=5,eE=6,tE=7,Xp=300,Ps=301,Ds=302,pu=303,mu=304,ol=306,_u=1e3,Fr=1001,gu=1002,_i=1003,nE=1004,xo=1005,Ti=1006,Tc=1007,Or=1008,qi=1009,qp=1010,Yp=1011,Ma=1012,Qu=1013,Br=1014,ki=1015,Ea=1016,ju=1017,eh=1018,Us=1020,Zp=35902,Kp=1021,$p=1022,mi=1023,Jp=1024,Qp=1025,Rs=1026,Ns=1027,jp=1028,th=1029,em=1030,nh=1031,ih=1033,Yo=33776,Zo=33777,Ko=33778,$o=33779,vu=35840,xu=35841,Mu=35842,Su=35843,Eu=36196,yu=37492,Tu=37496,Au=37808,wu=37809,bu=37810,Ru=37811,Cu=37812,Lu=37813,Iu=37814,Pu=37815,Du=37816,Uu=37817,Nu=37818,Fu=37819,Ou=37820,Bu=37821,Jo=36492,zu=36494,Gu=36495,tm=36283,Hu=36284,Vu=36285,ku=36286,iE=3200,rE=3201,nm=0,sE=1,cr="",ri="srgb",Fs="srgb-linear",jo="linear",Dt="srgb",ss=7680,Pd=519,aE=512,oE=513,lE=514,im=515,cE=516,uE=517,hE=518,fE=519,Wu=35044,Dd="300 es",Wi=2e3,el=2001;class Bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Xu=180/Math.PI;function fr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function dE(r,e){return(r%e+e)%e}function wc(r,e,t){return(1-t)*r+t*e}function yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,a,o,c,u,f,h){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,f,h)}set(e,t,i,a,o,c,u,f,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],_=i[7],g=i[2],x=i[5],y=i[8],w=a[0],v=a[3],m=a[6],I=a[1],L=a[4],R=a[7],G=a[2],N=a[5],F=a[8];return o[0]=c*w+u*I+f*G,o[3]=c*v+u*L+f*N,o[6]=c*m+u*R+f*F,o[1]=h*w+p*I+_*G,o[4]=h*v+p*L+_*N,o[7]=h*m+p*R+_*F,o[2]=g*w+x*I+y*G,o[5]=g*v+x*L+y*N,o[8]=g*m+x*R+y*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*o*p+i*u*f+a*o*h-a*c*f}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],_=p*c-u*h,g=u*f-p*o,x=h*o-c*f,y=t*_+i*g+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=_*w,e[1]=(a*h-p*i)*w,e[2]=(u*i-a*c)*w,e[3]=g*w,e[4]=(p*t-a*f)*w,e[5]=(a*o-u*t)*w,e[6]=x*w,e[7]=(i*f-h*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-a*h,a*f,-a*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new ot;function rm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pE(){const r=Sa("canvas");return r.style.display="block",r}const Ud={};function Ts(r){r in Ud||(Ud[r]=!0,console.warn(r))}function mE(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function _E(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gE(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nd=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const r={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Dt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Cs(a.r),a.g=Cs(a.g),a.b=Cs(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cr?jo:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fs]:{primaries:e,whitePoint:i,transfer:jo,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Nd,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const At=vE();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class xE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{as===void 0&&(as=Sa("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=as}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Xi(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Rc(a[c].image)):o.push(Rc(a[c]))}else o=Rc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;class Rn extends Bs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=Fr,a=Fr,o=Ti,c=Or,u=mi,f=qi,h=Rn.DEFAULT_ANISOTROPY,p=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=fr(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _u:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _u:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Xp;Rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const f=e.elements,h=f[0],p=f[4],_=f[8],g=f[1],x=f[5],y=f[9],w=f[2],v=f[6],m=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-w)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+w)<.1&&Math.abs(y+v)<.1&&Math.abs(h+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,R=(x+1)/2,G=(m+1)/2,N=(p+g)/4,F=(_+w)/4,H=(y+v)/4;return L>R&&L>G?L<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(L),a=N/i,o=F/i):R>G?R<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(R),i=N/a,o=H/a):G<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(G),i=F/o,a=H/o),this.set(i,a,o,t),this}let I=Math.sqrt((v-y)*(v-y)+(_-w)*(_-w)+(g-p)*(g-p));return Math.abs(I)<.001&&(I=1),this.x=(v-y)/I,this.y=(_-w)/I,this.z=(g-p)/I,this.w=Math.acos((h+x+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends Bs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Rn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new sm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends EE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class am extends Rn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends Rn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let f=i[a+0],h=i[a+1],p=i[a+2],_=i[a+3];const g=o[c+0],x=o[c+1],y=o[c+2],w=o[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(u===1){e[t+0]=g,e[t+1]=x,e[t+2]=y,e[t+3]=w;return}if(_!==w||f!==g||h!==x||p!==y){let v=1-u;const m=f*g+h*x+p*y+_*w,I=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const G=Math.sqrt(L),N=Math.atan2(G,m*I);v=Math.sin(v*N)/G,u=Math.sin(u*N)/G}const R=u*I;if(f=f*v+g*R,h=h*v+x*R,p=p*v+y*R,_=_*v+w*R,v===1-u){const G=1/Math.sqrt(f*f+h*h+p*p+_*_);f*=G,h*=G,p*=G,_*=G}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],f=i[a+1],h=i[a+2],p=i[a+3],_=o[c],g=o[c+1],x=o[c+2],y=o[c+3];return e[t]=u*y+p*_+f*x-h*g,e[t+1]=f*y+p*g+h*_-u*x,e[t+2]=h*y+p*x+u*g-f*_,e[t+3]=p*y-u*_-f*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(a/2),_=u(o/2),g=f(i/2),x=f(a/2),y=f(o/2);switch(c){case"XYZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"YZX":this._x=g*p*_+h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_-g*x*y;break;case"XZY":this._x=g*p*_-h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],f=t[9],h=t[2],p=t[6],_=t[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-f)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-o*f,this._y=a*p+c*f+o*u-i*h,this._z=o*p+c*h+i*f-a*u,this._w=c*p-i*u-a*f-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*a+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),_=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Od.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Od.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*a-u*i),p=2*(u*t-o*a),_=2*(o*i-c*t);return this.x=t+f*h+c*_-u*p,this.y=i+f*p+u*h-o*_,this.z=a+f*_+o*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,f=t.z;return this.x=a*f-o*u,this.y=o*c-i*f,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new U,Od=new ya;class Ta{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,fi):fi.fromBufferAttribute(o,c),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),So.subVectors(this.max,ia),os.subVectors(e.a,ia),ls.subVectors(e.b,ia),cs.subVectors(e.c,ia),ir.subVectors(ls,os),rr.subVectors(cs,ls),Ar.subVectors(os,cs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!Lc(t,os,ls,cs,So)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,os,ls,cs,So))?!1:(Eo.crossVectors(ir,rr),t=[Eo.x,Eo.y,Eo.z],Lc(t,os,ls,cs,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new U,new U,new U,new U,new U,new U,new U,new U],fi=new U,Mo=new Ta,os=new U,ls=new U,cs=new U,ir=new U,rr=new U,Ar=new U,ia=new U,So=new U,Eo=new U,wr=new U;function Lc(r,e,t,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){wr.fromArray(r,o);const u=a.x*Math.abs(wr.x)+a.y*Math.abs(wr.y)+a.z*Math.abs(wr.z),f=e.dot(wr),h=t.dot(wr),p=i.dot(wr);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const TE=new Ta,ra=new U,Ic=new U;class ll{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ra,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Ic)),this.expandByPoint(ra.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new U,Pc=new U,yo=new U,sr=new U,Dc=new U,To=new U,Uc=new U;class om{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Pc.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Pc);const o=e.distanceTo(t)*.5,c=-this.direction.dot(yo),u=sr.dot(this.direction),f=-sr.dot(yo),h=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,y;if(p>0)if(_=c*f-u,g=c*u-f,y=o*p,_>=0)if(g>=-y)if(g<=y){const w=1/p;_*=w,g*=w,x=_*(_+c*g+2*u)+g*(c*_+g+2*f)+h}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;else g<=-y?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+h):g<=y?(_=0,g=Math.min(Math.max(-o,-f),o),x=g*(g+2*f)+h):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+h);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Pc).addScaledVector(yo,g),x}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),a=Oi.dot(Oi)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),i>f||u>a)||((u>i||i!==i)&&(i=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,a,o){Dc.subVectors(t,e),To.subVectors(i,e),Uc.crossVectors(Dc,To);let c=this.direction.dot(Uc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,e);const f=u*this.direction.dot(To.crossVectors(sr,To));if(f<0)return null;const h=u*this.direction.dot(Dc.cross(sr));if(h<0||f+h>c)return null;const p=-u*sr.dot(Uc);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,a,o,c,u,f,h,p,_,g,x,y,w,v){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,f,h,p,_,g,x,y,w,v)}set(e,t,i,a,o,c,u,f,h,p,_,g,x,y,w,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=f,m[2]=h,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=w,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/us.setFromMatrixColumn(e,0).length(),o=1/us.setFromMatrixColumn(e,1).length(),c=1/us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=c*p,x=c*_,y=u*p,w=u*_;t[0]=f*p,t[4]=-f*_,t[8]=h,t[1]=x+y*h,t[5]=g-w*h,t[9]=-u*f,t[2]=w-g*h,t[6]=y+x*h,t[10]=c*f}else if(e.order==="YXZ"){const g=f*p,x=f*_,y=h*p,w=h*_;t[0]=g+w*u,t[4]=y*u-x,t[8]=c*h,t[1]=c*_,t[5]=c*p,t[9]=-u,t[2]=x*u-y,t[6]=w+g*u,t[10]=c*f}else if(e.order==="ZXY"){const g=f*p,x=f*_,y=h*p,w=h*_;t[0]=g-w*u,t[4]=-c*_,t[8]=y+x*u,t[1]=x+y*u,t[5]=c*p,t[9]=w-g*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const g=c*p,x=c*_,y=u*p,w=u*_;t[0]=f*p,t[4]=y*h-x,t[8]=g*h+w,t[1]=f*_,t[5]=w*h+g,t[9]=x*h-y,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const g=c*f,x=c*h,y=u*f,w=u*h;t[0]=f*p,t[4]=w-g*_,t[8]=y*_+x,t[1]=_,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*_+y,t[10]=g-w*_}else if(e.order==="XZY"){const g=c*f,x=c*h,y=u*f,w=u*h;t[0]=f*p,t[4]=-_,t[8]=h*p,t[1]=g*_+w,t[5]=c*p,t[9]=x*_-y,t[2]=y*_-x,t[6]=u*p,t[10]=w*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AE,e,wE)}lookAt(e,t,i){const a=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),ar.crossVectors(i,Wn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),ar.crossVectors(i,Wn)),ar.normalize(),Ao.crossVectors(Wn,ar),a[0]=ar.x,a[4]=Ao.x,a[8]=Wn.x,a[1]=ar.y,a[5]=Ao.y,a[9]=Wn.y,a[2]=ar.z,a[6]=Ao.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],_=i[5],g=i[9],x=i[13],y=i[2],w=i[6],v=i[10],m=i[14],I=i[3],L=i[7],R=i[11],G=i[15],N=a[0],F=a[4],H=a[8],C=a[12],T=a[1],z=a[5],Q=a[9],$=a[13],ie=a[2],ue=a[6],ne=a[10],de=a[14],j=a[3],Te=a[7],Re=a[11],Fe=a[15];return o[0]=c*N+u*T+f*ie+h*j,o[4]=c*F+u*z+f*ue+h*Te,o[8]=c*H+u*Q+f*ne+h*Re,o[12]=c*C+u*$+f*de+h*Fe,o[1]=p*N+_*T+g*ie+x*j,o[5]=p*F+_*z+g*ue+x*Te,o[9]=p*H+_*Q+g*ne+x*Re,o[13]=p*C+_*$+g*de+x*Fe,o[2]=y*N+w*T+v*ie+m*j,o[6]=y*F+w*z+v*ue+m*Te,o[10]=y*H+w*Q+v*ne+m*Re,o[14]=y*C+w*$+v*de+m*Fe,o[3]=I*N+L*T+R*ie+G*j,o[7]=I*F+L*z+R*ue+G*Te,o[11]=I*H+L*Q+R*ne+G*Re,o[15]=I*C+L*$+R*de+G*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],f=e[9],h=e[13],p=e[2],_=e[6],g=e[10],x=e[14],y=e[3],w=e[7],v=e[11],m=e[15];return y*(+o*f*_-a*h*_-o*u*g+i*h*g+a*u*x-i*f*x)+w*(+t*f*x-t*h*g+o*c*g-a*c*x+a*h*p-o*f*p)+v*(+t*h*_-t*u*x-o*c*_+i*c*x+o*u*p-i*h*p)+m*(-a*u*p-t*f*_+t*u*g+a*c*_-i*c*g+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],f=e[6],h=e[7],p=e[8],_=e[9],g=e[10],x=e[11],y=e[12],w=e[13],v=e[14],m=e[15],I=_*v*h-w*g*h+w*f*x-u*v*x-_*f*m+u*g*m,L=y*g*h-p*v*h-y*f*x+c*v*x+p*f*m-c*g*m,R=p*w*h-y*_*h+y*u*x-c*w*x-p*u*m+c*_*m,G=y*_*f-p*w*f-y*u*g+c*w*g+p*u*v-c*_*v,N=t*I+i*L+a*R+o*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=I*F,e[1]=(w*g*o-_*v*o-w*a*x+i*v*x+_*a*m-i*g*m)*F,e[2]=(u*v*o-w*f*o+w*a*h-i*v*h-u*a*m+i*f*m)*F,e[3]=(_*f*o-u*g*o-_*a*h+i*g*h+u*a*x-i*f*x)*F,e[4]=L*F,e[5]=(p*v*o-y*g*o+y*a*x-t*v*x-p*a*m+t*g*m)*F,e[6]=(y*f*o-c*v*o-y*a*h+t*v*h+c*a*m-t*f*m)*F,e[7]=(c*g*o-p*f*o+p*a*h-t*g*h-c*a*x+t*f*x)*F,e[8]=R*F,e[9]=(y*_*o-p*w*o-y*i*x+t*w*x+p*i*m-t*_*m)*F,e[10]=(c*w*o-y*u*o+y*i*h-t*w*h-c*i*m+t*u*m)*F,e[11]=(p*u*o-c*_*o-p*i*h+t*_*h+c*i*x-t*u*x)*F,e[12]=G*F,e[13]=(p*w*a-y*_*a+y*i*g-t*w*g-p*i*v+t*_*v)*F,e[14]=(y*u*a-c*w*a-y*i*f+t*w*f+c*i*v-t*u*v)*F,e[15]=(c*_*a-p*u*a+p*i*f-t*_*f-c*i*g+t*u*g)*F,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,f=e.z,h=o*c,p=o*u;return this.set(h*c+i,h*u-a*f,h*f+a*u,0,h*u+a*f,p*u+i,p*f-a*c,0,h*f-a*u,p*f+a*c,o*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,f=t._w,h=o+o,p=c+c,_=u+u,g=o*h,x=o*p,y=o*_,w=c*p,v=c*_,m=u*_,I=f*h,L=f*p,R=f*_,G=i.x,N=i.y,F=i.z;return a[0]=(1-(w+m))*G,a[1]=(x+R)*G,a[2]=(y-L)*G,a[3]=0,a[4]=(x-R)*N,a[5]=(1-(g+m))*N,a[6]=(v+I)*N,a[7]=0,a[8]=(y+L)*F,a[9]=(v-I)*F,a[10]=(1-(g+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=us.set(a[0],a[1],a[2]).length();const c=us.set(a[4],a[5],a[6]).length(),u=us.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],di.copy(this);const h=1/o,p=1/c,_=1/u;return di.elements[0]*=h,di.elements[1]*=h,di.elements[2]*=h,di.elements[4]*=p,di.elements[5]*=p,di.elements[6]*=p,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,t.setFromRotationMatrix(di),i.x=o,i.y=c,i.z=u,this}makePerspective(e,t,i,a,o,c,u=Wi){const f=this.elements,h=2*o/(t-e),p=2*o/(i-a),_=(t+e)/(t-e),g=(i+a)/(i-a);let x,y;if(u===Wi)x=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(u===el)x=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=Wi){const f=this.elements,h=1/(t-e),p=1/(i-a),_=1/(c-o),g=(t+e)*h,x=(i+a)*p;let y,w;if(u===Wi)y=(c+o)*_,w=-2*_;else if(u===el)y=o*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const us=new U,di=new Wt,AE=new U(0,0,0),wE=new U(1,1,1),ar=new U,Ao=new U,Wn=new U,Bd=new Wt,zd=new ya;class Ai{constructor(e=0,t=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],f=a[1],h=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bE=0;const Gd=new U,hs=new ya,Bi=new Wt,wo=new U,sa=new U,RE=new U,CE=new ya,Hd=new U(1,0,0),Vd=new U(0,1,0),kd=new U(0,0,1),Wd={type:"added"},LE={type:"removed"},fs={type:"childadded",child:null},Nc={type:"childremoved",child:null};class pn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new U,t=new Ai,i=new ya,a=new U(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ot}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(sa,wo,this.up):Bi.lookAt(wo,sa,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),hs.setFromRotationMatrix(Bi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LE),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,RE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,CE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const _=f[h];o(e.shapes,_)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(o(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),x=c(e.animations),y=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}pn.DEFAULT_UP=new U(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new U,zi=new U,Fc=new U,Gi=new U,ds=new U,ps=new U,Xd=new U,Oc=new U,Bc=new U,zc=new U,Gc=new Nt,Hc=new Nt,Vc=new Nt;class si{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),pi.subVectors(e,t),a.cross(pi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){pi.subVectors(a,t),zi.subVectors(i,t),Fc.subVectors(e,t);const c=pi.dot(pi),u=pi.dot(zi),f=pi.dot(Fc),h=zi.dot(zi),p=zi.dot(Fc),_=c*h-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(h*f-u*p)*g,y=(c*p-u*f)*g;return o.set(1-x-y,y,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,a,o,c,u,f){return this.getBarycoord(e,t,i,a,Gi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Gi.x),f.addScaledVector(c,Gi.y),f.addScaledVector(u,Gi.z),f)}static getInterpolatedAttribute(e,t,i,a,o,c){return Gc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),Gc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Gc,o.x),c.addScaledVector(Hc,o.y),c.addScaledVector(Vc,o.z),c}static isFrontFacing(e,t,i,a){return pi.subVectors(i,t),zi.subVectors(e,t),pi.cross(zi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return si.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;ds.subVectors(a,i),ps.subVectors(o,i),Oc.subVectors(e,i);const f=ds.dot(Oc),h=ps.dot(Oc);if(f<=0&&h<=0)return t.copy(i);Bc.subVectors(e,a);const p=ds.dot(Bc),_=ps.dot(Bc);if(p>=0&&_<=p)return t.copy(a);const g=f*_-p*h;if(g<=0&&f>=0&&p<=0)return c=f/(f-p),t.copy(i).addScaledVector(ds,c);zc.subVectors(e,o);const x=ds.dot(zc),y=ps.dot(zc);if(y>=0&&x<=y)return t.copy(o);const w=x*h-f*y;if(w<=0&&h>=0&&y<=0)return u=h/(h-y),t.copy(i).addScaledVector(ps,u);const v=p*y-x*_;if(v<=0&&_-p>=0&&x-y>=0)return Xd.subVectors(o,a),u=(_-p)/(_-p+(x-y)),t.copy(a).addScaledVector(Xd,u);const m=1/(v+w+g);return c=w*m,u=g*m,t.copy(i).addScaledVector(ds,c).addScaledVector(ps,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},bo={h:0,s:0,l:0};function kc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class _e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=At.workingColorSpace){if(e=dE(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=kc(c,o,e+1/3),this.g=kc(c,o,e),this.b=kc(c,o,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ri){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const i=cm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return At.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Et(Mn.r*255,0,255))*65536+Math.round(Et(Mn.g*255,0,255))*256+Math.round(Et(Mn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Mn.copy(this),t);const i=Mn.r,a=Mn.g,o=Mn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const _=c-u;switch(h=p<=.5?_/(c+u):_/(2-c-u),c){case i:f=(a-o)/_+(a<o?6:0);break;case a:f=(o-i)/_+2;break;case o:f=(i-a)/_+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ri){At.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,a=Mn.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(bo);const i=wc(or.h,bo.h,t),a=wc(or.s,bo.s,t),o=wc(or.l,bo.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new _e;_e.NAMES=cm;let IE=0;class Vr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=bs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=au,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==su&&(i.blendSrc=this.blendSrc),this.blendDst!==au&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new U,Ro=new Ne;let PE=0;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wu&&(e.usage=this.usage),e}}class um extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hm extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let DE=0;const ni=new Wt,Wc=new pn,ms=new U,Xn=new Ta,aa=new Ta,hn=new U;class Yn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?hm:um)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ot().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Xn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];aa.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Xn.min,aa.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,aa.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(aa.min),Xn.expandByPoint(aa.max))}Xn.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)hn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(hn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)hn.fromBufferAttribute(u,h),f&&(ms.fromBufferAttribute(e,h),hn.add(ms)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let H=0;H<i.count;H++)u[H]=new U,f[H]=new U;const h=new U,p=new U,_=new U,g=new Ne,x=new Ne,y=new Ne,w=new U,v=new U;function m(H,C,T){h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,T),g.fromBufferAttribute(o,H),x.fromBufferAttribute(o,C),y.fromBufferAttribute(o,T),p.sub(h),_.sub(h),x.sub(g),y.sub(g);const z=1/(x.x*y.y-y.x*x.y);isFinite(z)&&(w.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(z),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(z),u[H].add(w),u[C].add(w),u[T].add(w),f[H].add(v),f[C].add(v),f[T].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let H=0,C=I.length;H<C;++H){const T=I[H],z=T.start,Q=T.count;for(let $=z,ie=z+Q;$<ie;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new U,R=new U,G=new U,N=new U;function F(H){G.fromBufferAttribute(a,H),N.copy(G);const C=u[H];L.copy(C),L.sub(G.multiplyScalar(G.dot(C))).normalize(),R.crossVectors(N,C);const z=R.dot(f[H])<0?-1:1;c.setXYZW(H,L.x,L.y,L.z,z)}for(let H=0,C=I.length;H<C;++H){const T=I[H],z=T.start,Q=T.count;for(let $=z,ie=z+Q;$<ie;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new U,o=new U,c=new U,u=new U,f=new U,h=new U,p=new U,_=new U;if(e)for(let g=0,x=e.count;g<x;g+=3){const y=e.getX(g+0),w=e.getX(g+1),v=e.getX(g+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,v),u.add(p),f.add(p),h.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,_=u.normalized,g=new h.constructor(f.length*p);let x=0,y=0;for(let w=0,v=f.length;w<v;w++){u.isInterleavedBufferAttribute?x=f[w]*u.data.stride+u.offset:x=f[w]*p;for(let m=0;m<p;m++)g[y++]=h[x++]}return new gi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,i=this.index.array,a=this.attributes;for(const u in a){const f=a[u],h=e(f,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,_=h.length;p<_;p++){const g=h[p],x=e(g,i);f.push(x)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const a={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let _=0,g=h.length;_<g;_++){const x=h[_];p.push(x.toJSON(e.data))}p.length>0&&(a[f]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Wt,br=new om,Co=new ll,Yd=new U,Lo=new U,Io=new U,Po=new U,Xc=new U,Do=new U,Zd=new U,Uo=new U;class bn extends pn{constructor(e=new Yn,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){Do.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],_=o[f];p!==0&&(Xc.fromBufferAttribute(_,e),c?Do.addScaledVector(Xc,p):Do.addScaledVector(Xc.sub(t),p))}t.add(Do)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(Co.containsPoint(br.origin)===!1&&(br.intersectSphere(Co,Yd)===null||br.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(qd.copy(o).invert(),br.copy(e.ray).applyMatrix4(qd),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,w=g.length;y<w;y++){const v=g[y],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let R=I,G=L;R<G;R+=3){const N=u.getX(R),F=u.getX(R+1),H=u.getX(R+2);a=No(this,m,e,i,h,p,_,N,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),w=Math.min(u.count,x.start+x.count);for(let v=y,m=w;v<m;v+=3){const I=u.getX(v),L=u.getX(v+1),R=u.getX(v+2);a=No(this,c,e,i,h,p,_,I,L,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let y=0,w=g.length;y<w;y++){const v=g[y],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let R=I,G=L;R<G;R+=3){const N=R,F=R+1,H=R+2;a=No(this,m,e,i,h,p,_,N,F,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let v=y,m=w;v<m;v+=3){const I=v,L=v+1,R=v+2;a=No(this,c,e,i,h,p,_,I,L,R),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function UE(r,e,t,i,a,o,c,u){let f;if(e.side===Fn?f=i.intersectTriangle(c,o,a,!0,u):f=i.intersectTriangle(a,o,c,e.side===dr,u),f===null)return null;Uo.copy(u),Uo.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Uo);return h<t.near||h>t.far?null:{distance:h,point:Uo.clone(),object:r}}function No(r,e,t,i,a,o,c,u,f,h){r.getVertexPosition(u,Lo),r.getVertexPosition(f,Io),r.getVertexPosition(h,Po);const p=UE(r,e,t,i,Lo,Io,Po,Zd);if(p){const _=new U;si.getBarycoord(Zd,Lo,Io,Po,_),a&&(p.uv=si.getInterpolatedAttribute(a,u,f,h,_,new Ne)),o&&(p.uv1=si.getInterpolatedAttribute(o,u,f,h,_,new Ne)),c&&(p.normal=si.getInterpolatedAttribute(c,u,f,h,_,new U),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new U,materialIndex:0};si.getNormal(Lo,Io,Po,g.normal),p.face=g,p.barycoord=_}return p}class Gr extends Yn{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const f=[],h=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,i,t,e,c,o,0),y("z","y","x",1,-1,i,t,-e,c,o,1),y("x","z","y",1,1,e,i,t,a,c,2),y("x","z","y",1,-1,e,i,-t,a,c,3),y("x","y","z",1,-1,e,t,i,a,o,4),y("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(p,3)),this.setAttribute("uv",new jt(_,2));function y(w,v,m,I,L,R,G,N,F,H,C){const T=R/F,z=G/H,Q=R/2,$=G/2,ie=N/2,ue=F+1,ne=H+1;let de=0,j=0;const Te=new U;for(let Re=0;Re<ne;Re++){const Fe=Re*z-$;for(let ut=0;ut<ue;ut++){const Ct=ut*T-Q;Te[w]=Ct*I,Te[v]=Fe*L,Te[m]=ie,h.push(Te.x,Te.y,Te.z),Te[w]=0,Te[v]=0,Te[m]=N>0?1:-1,p.push(Te.x,Te.y,Te.z),_.push(ut/F),_.push(1-Re/H),de+=1}}for(let Re=0;Re<H;Re++)for(let Fe=0;Fe<F;Fe++){const ut=g+Fe+ue*Re,Ct=g+Fe+ue*(Re+1),oe=g+(Fe+1)+ue*(Re+1),ge=g+(Fe+1)+ue*Re;f.push(ut,Ct,ge),f.push(Ct,oe,ge),j+=6}u.addGroup(x,j,C),x+=j,g+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const i=Os(r[t]);for(const a in i)e[a]=i[a]}return e}function NE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const FE={clone:Os,merge:wn};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=NE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new U,Kd=new Ne,$d=new Ne;class qn extends dm{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xu*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Kd,$d),t.subVectors($d,Kd)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/f,t-=c.offsetY*i/h,a*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,gs=1;class zE extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(_s,gs,e,t);a.layers=this.layers,this.add(a);const o=new qn(_s,gs,e,t);o.layers=this.layers,this.add(o);const c=new qn(_s,gs,e,t);c.layers=this.layers,this.add(c);const u=new qn(_s,gs,e,t);u.layers=this.layers,this.add(u);const f=new qn(_s,gs,e,t);f.layers=this.layers,this.add(f);const h=new qn(_s,gs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,f]=t;for(const h of t)this.remove(h);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,f,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,f),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,g,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class pm extends Rn{constructor(e,t,i,a,o,c,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,i,a,o,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new pm(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Gr(5,5,5),o=new pr({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:ur});o.uniforms.tEquirect.value=t;const c=new bn(a,o),u=t.minFilter;return t.minFilter===Or&&(t.minFilter=Ti),new zE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}class Fo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const v=t.getJointPose(w,i),m=this._getHandJoint(h,w);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;h.inputState.pinching&&g>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class VE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new U;class tl{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qu extends Vr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const oa=new U,xs=new U,Ms=new U,Ss=new Ne,la=new Ne,mm=new Wt,Oo=new U,ca=new U,Bo=new U,Jd=new Ne,Yc=new Ne,Qd=new Ne;class jd extends pn{constructor(e=new qu){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kE(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new tl(i,3,0,!1)),vs.setAttribute("uv",new tl(i,2,3,!1))}this.geometry=vs,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-Ms.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;zo(Oo.set(-.5,-.5,0),Ms,c,xs,a,o),zo(ca.set(.5,-.5,0),Ms,c,xs,a,o),zo(Bo.set(.5,.5,0),Ms,c,xs,a,o),Jd.set(0,0),Yc.set(1,0),Qd.set(1,1);let u=e.ray.intersectTriangle(Oo,ca,Bo,!1,oa);if(u===null&&(zo(ca.set(-.5,.5,0),Ms,c,xs,a,o),Yc.set(0,1),u=e.ray.intersectTriangle(Oo,Bo,ca,!1,oa),u===null))return;const f=e.ray.origin.distanceTo(oa);f<e.near||f>e.far||t.push({distance:f,point:oa.clone(),uv:si.getInterpolation(oa,Oo,ca,Bo,Jd,Yc,Qd,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zo(r,e,t,i,a,o){Ss.subVectors(r,t).addScalar(.5).multiply(i),a!==void 0?(la.x=o*Ss.x-a*Ss.y,la.y=a*Ss.x+o*Ss.y):la.copy(Ss),r.copy(e),r.x+=la.x,r.y+=la.y,r.applyMatrix4(mm)}const Zc=new U,WE=new U,XE=new ot;class Ir{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Zc.subVectors(i,t).cross(WE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||XE.getNormalMatrix(e),a=this.coplanarPoint(Zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new ll,Go=new U;class rh{constructor(e=new Ir,t=new Ir,i=new Ir,a=new Ir,o=new Ir,c=new Ir){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){const i=this.planes,a=e.elements,o=a[0],c=a[1],u=a[2],f=a[3],h=a[4],p=a[5],_=a[6],g=a[7],x=a[8],y=a[9],w=a[10],v=a[11],m=a[12],I=a[13],L=a[14],R=a[15];if(i[0].setComponents(f-o,g-h,v-x,R-m).normalize(),i[1].setComponents(f+o,g+h,v+x,R+m).normalize(),i[2].setComponents(f+c,g+p,v+y,R+I).normalize(),i[3].setComponents(f-c,g-p,v-y,R-I).normalize(),i[4].setComponents(f-u,g-_,v-w,R-L).normalize(),t===Wi)i[5].setComponents(f+u,g+_,v+w,R+L).normalize();else if(t===el)i[5].setComponents(u,_,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Go.x=a.normal.x>0?e.max.x:e.min.x,Go.y=a.normal.y>0?e.max.y:e.min.y,Go.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _m extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new U,il=new U,ep=new Wt,ua=new om,Ho=new ll,Kc=new U,tp=new U;class qE extends pn{constructor(e=new Yn,t=new _m){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)nl.fromBufferAttribute(t,a-1),il.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=nl.distanceTo(il);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(a),Ho.radius+=o,e.ray.intersectsSphere(Ho)===!1)return;ep.copy(a).invert(),ua.copy(e.ray).applyMatrix4(ep);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let w=x,v=y-1;w<v;w+=h){const m=p.getX(w),I=p.getX(w+1),L=Vo(this,e,ua,f,m,I,w);L&&t.push(L)}if(this.isLineLoop){const w=p.getX(y-1),v=p.getX(x),m=Vo(this,e,ua,f,w,v,y-1);m&&t.push(m)}}else{const x=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let w=x,v=y-1;w<v;w+=h){const m=Vo(this,e,ua,f,w,w+1,w);m&&t.push(m)}if(this.isLineLoop){const w=Vo(this,e,ua,f,y-1,x,y-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Vo(r,e,t,i,a,o,c){const u=r.geometry.attributes.position;if(nl.fromBufferAttribute(u,a),il.fromBufferAttribute(u,o),t.distanceSqToSegment(nl,il,Kc,tp)>i)return;Kc.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Kc);if(!(h<e.near||h>e.far))return{distance:h,point:tp.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const np=new U,ip=new U;class YE extends qE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)np.fromBufferAttribute(t,a),ip.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+np.distanceTo(ip);e.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gm extends Rn{constructor(e,t,i,a,o,c,u,f,h,p=Rs){if(p!==Rs&&p!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Rs&&(i=Br),i===void 0&&p===Ns&&(i=Us),super(null,a,o,c,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:_i,this.minFilter=f!==void 0?f:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cl extends Yn{constructor(e=1,t=1,i=1,a=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};const h=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],g=[],x=[];let y=0;const w=[],v=i/2;let m=0;I(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(g,3)),this.setAttribute("uv",new jt(x,2));function I(){const R=new U,G=new U;let N=0;const F=(t-e)/i;for(let H=0;H<=o;H++){const C=[],T=H/o,z=T*(t-e)+e;for(let Q=0;Q<=a;Q++){const $=Q/a,ie=$*f+u,ue=Math.sin(ie),ne=Math.cos(ie);G.x=z*ue,G.y=-T*i+v,G.z=z*ne,_.push(G.x,G.y,G.z),R.set(ue,F,ne).normalize(),g.push(R.x,R.y,R.z),x.push($,1-T),C.push(y++)}w.push(C)}for(let H=0;H<a;H++)for(let C=0;C<o;C++){const T=w[C][H],z=w[C+1][H],Q=w[C+1][H+1],$=w[C][H+1];(e>0||C!==0)&&(p.push(T,z,$),N+=3),(t>0||C!==o-1)&&(p.push(z,Q,$),N+=3)}h.addGroup(m,N,0),m+=N}function L(R){const G=y,N=new Ne,F=new U;let H=0;const C=R===!0?e:t,T=R===!0?1:-1;for(let Q=1;Q<=a;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),y++;const z=y;for(let Q=0;Q<=a;Q++){const ie=Q/a*f+u,ue=Math.cos(ie),ne=Math.sin(ie);F.x=C*ne,F.y=v*T,F.z=C*ue,_.push(F.x,F.y,F.z),g.push(0,T,0),N.x=ue*.5+.5,N.y=ne*.5*T+.5,x.push(N.x,N.y),y++}for(let Q=0;Q<a;Q++){const $=G+Q,ie=z+Q;R===!0?p.push(ie,ie+1,$):p.push(ie+1,ie,$),H+=3}h.addGroup(m,H,R===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sh extends cl{constructor(e=1,t=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,e,t,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(e){return new sh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ah extends Yn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];u(a),h(i),p(),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(o.slice(),3)),this.setAttribute("uv",new jt(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(I){const L=new U,R=new U,G=new U;for(let N=0;N<t.length;N+=3)x(t[N+0],L),x(t[N+1],R),x(t[N+2],G),f(L,R,G,I)}function f(I,L,R,G){const N=G+1,F=[];for(let H=0;H<=N;H++){F[H]=[];const C=I.clone().lerp(R,H/N),T=L.clone().lerp(R,H/N),z=N-H;for(let Q=0;Q<=z;Q++)Q===0&&H===N?F[H][Q]=C:F[H][Q]=C.clone().lerp(T,Q/z)}for(let H=0;H<N;H++)for(let C=0;C<2*(N-H)-1;C++){const T=Math.floor(C/2);C%2===0?(g(F[H][T+1]),g(F[H+1][T]),g(F[H][T])):(g(F[H][T+1]),g(F[H+1][T+1]),g(F[H+1][T]))}}function h(I){const L=new U;for(let R=0;R<o.length;R+=3)L.x=o[R+0],L.y=o[R+1],L.z=o[R+2],L.normalize().multiplyScalar(I),o[R+0]=L.x,o[R+1]=L.y,o[R+2]=L.z}function p(){const I=new U;for(let L=0;L<o.length;L+=3){I.x=o[L+0],I.y=o[L+1],I.z=o[L+2];const R=v(I)/2/Math.PI+.5,G=m(I)/Math.PI+.5;c.push(R,1-G)}y(),_()}function _(){for(let I=0;I<c.length;I+=6){const L=c[I+0],R=c[I+2],G=c[I+4],N=Math.max(L,R,G),F=Math.min(L,R,G);N>.9&&F<.1&&(L<.2&&(c[I+0]+=1),R<.2&&(c[I+2]+=1),G<.2&&(c[I+4]+=1))}}function g(I){o.push(I.x,I.y,I.z)}function x(I,L){const R=I*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function y(){const I=new U,L=new U,R=new U,G=new U,N=new Ne,F=new Ne,H=new Ne;for(let C=0,T=0;C<o.length;C+=9,T+=6){I.set(o[C+0],o[C+1],o[C+2]),L.set(o[C+3],o[C+4],o[C+5]),R.set(o[C+6],o[C+7],o[C+8]),N.set(c[T+0],c[T+1]),F.set(c[T+2],c[T+3]),H.set(c[T+4],c[T+5]),G.copy(I).add(L).add(R).divideScalar(3);const z=v(G);w(N,T+0,I,z),w(F,T+2,L,z),w(H,T+4,R,z)}}function w(I,L,R,G){G<0&&I.x===1&&(c[L]=I.x-1),R.x===0&&R.z===0&&(c[L]=G/2/Math.PI+.5)}function v(I){return Math.atan2(I.z,-I.x)}function m(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.vertices,e.indices,e.radius,e.details)}}class oh extends ah{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oh(e.radius,e.detail)}}class ul extends Yn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),f=Math.floor(a),h=u+1,p=f+1,_=e/u,g=t/f,x=[],y=[],w=[],v=[];for(let m=0;m<p;m++){const I=m*g-c;for(let L=0;L<h;L++){const R=L*_-o;y.push(R,-I,0),w.push(0,0,1),v.push(L/u),v.push(1-m/f)}}for(let m=0;m<f;m++)for(let I=0;I<u;I++){const L=I+h*m,R=I+h*(m+1),G=I+1+h*(m+1),N=I+1+h*m;x.push(L,R,N),x.push(R,G,N)}this.setIndex(x),this.setAttribute("position",new jt(y,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class lh extends Yn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+u,Math.PI);let h=0;const p=[],_=new U,g=new U,x=[],y=[],w=[],v=[];for(let m=0;m<=i;m++){const I=[],L=m/i;let R=0;m===0&&c===0?R=.5/t:m===i&&f===Math.PI&&(R=-.5/t);for(let G=0;G<=t;G++){const N=G/t;_.x=-e*Math.cos(a+N*o)*Math.sin(c+L*u),_.y=e*Math.cos(c+L*u),_.z=e*Math.sin(a+N*o)*Math.sin(c+L*u),y.push(_.x,_.y,_.z),g.copy(_).normalize(),w.push(g.x,g.y,g.z),v.push(N+R,1-L),I.push(h++)}p.push(I)}for(let m=0;m<i;m++)for(let I=0;I<t;I++){const L=p[m][I+1],R=p[m][I],G=p[m+1][I],N=p[m+1][I+1];(m!==0||c>0)&&x.push(L,R,N),(m!==i-1||f<Math.PI)&&x.push(R,G,N)}this.setIndex(x),this.setAttribute("position",new jt(y,3)),this.setAttribute("normal",new jt(w,3)),this.setAttribute("uv",new jt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends Vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZE extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rp={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $E{constructor(e,t,i){const a=this;let o=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=h.length;_<g;_+=2){const x=h[_],y=h[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null}}}const JE=new $E;class ch{constructor(e){this.manager=e!==void 0?e:JE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ch.DEFAULT_MATERIAL_NAME="__DEFAULT";class QE extends ch{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=rp.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const u=Sa("img");function f(){p(),rp.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(_){p(),a&&a(_),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class sp extends ch{constructor(e){super(e)}load(e,t,i,a){const o=new Rn,c=new QE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class vm extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jE extends vm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $c=new Wt,ap=new U,op=new U;class ey{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(ap),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lp=new Wt,ha=new U,Jc=new U;class ty extends ey{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),i.position.copy(ha),Jc.copy(i.position),Jc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Jc),i.updateMatrixWorld(),a.makeTranslation(-ha.x,-ha.y,-ha.z),lp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}}class ny extends vm{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ty}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iy extends dm{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ry extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class sy extends YE{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new Yn;a.setAttribute("position",new jt(t,3)),a.setAttribute("color",new jt(i,3));const o=new _m({vertexColors:!0,toneMapped:!1});super(a,o),this.type="AxesHelper"}setColors(e,t,i){const a=new _e,o=this.geometry.attributes.color.array;return a.set(e),a.toArray(o,0),a.toArray(o,3),a.set(t),a.toArray(o,6),a.toArray(o,9),a.set(i),a.toArray(o,12),a.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function cp(r,e,t,i){const a=ay(i);switch(t){case Kp:return r*e;case Jp:return r*e;case Qp:return r*e*2;case jp:return r*e/a.components*a.byteLength;case th:return r*e/a.components*a.byteLength;case em:return r*e*2/a.components*a.byteLength;case nh:return r*e*2/a.components*a.byteLength;case $p:return r*e*3/a.components*a.byteLength;case mi:return r*e*4/a.components*a.byteLength;case ih:return r*e*4/a.components*a.byteLength;case Yo:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:case Su:return Math.max(r,16)*Math.max(e,8)/4;case vu:case Mu:return Math.max(r,8)*Math.max(e,8)/2;case Eu:case yu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Jo:case zu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tm:case Hu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vu:case ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ay(r){switch(r){case qi:case qp:return{byteLength:1,components:1};case Ma:case Yp:case Ea:return{byteLength:2,components:1};case ju:case eh:return{byteLength:2,components:4};case Br:case Qu:case ki:return{byteLength:4,components:1};case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xm(){let r=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function oy(r){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,f,h){const p=f.array,_=f.updateRanges;if(r.bindBuffer(h,u),_.length===0)r.bufferSubData(h,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],w=_[x];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++g,_[g]=w)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const w=_[x];r.bufferSubData(h,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(r.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:c}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
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
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
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
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dy=`vec3 transformedNormal = objectNormal;
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
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
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
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
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
#endif`,aT=`struct PhysicalMaterial {
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
}`,oT=`
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_T=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yT=`#ifdef USE_MORPHTARGETS
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
#endif`,TT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LT=`#ifdef USE_NORMALMAP
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
#endif`,IT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qT=`float getShadowMask() {
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
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,pA=`#if DEPTH_PACKING == 3200
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
}`,mA=`#define DISTANCE
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
}`,_A=`#define DISTANCE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`uniform float scale;
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
}`,MA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,EA=`uniform vec3 diffuse;
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
}`,yA=`#define LAMBERT
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
}`,TA=`#define LAMBERT
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
}`,AA=`#define MATCAP
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
}`,wA=`#define MATCAP
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
}`,bA=`#define NORMAL
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
}`,RA=`#define NORMAL
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
}`,CA=`#define PHONG
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
}`,LA=`#define PHONG
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
}`,IA=`#define STANDARD
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
}`,PA=`#define STANDARD
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
}`,DA=`#define TOON
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
}`,UA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,FA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,BA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,GA=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:hy,alphatest_fragment:fy,alphatest_pars_fragment:dy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:_y,batching_vertex:gy,begin_vertex:vy,beginnormal_vertex:xy,bsdfs:My,iridescence_fragment:Sy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:yy,clipping_planes_pars_fragment:Ty,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:wy,color_fragment:by,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Ly,common:Iy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Uy,displacementmap_vertex:Ny,emissivemap_fragment:Fy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:zy,envmap_fragment:Gy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Vy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:eT,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:qy,fog_fragment:Yy,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:jy,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:aT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:_T,map_particle_pars_fragment:gT,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:MT,morphcolor_vertex:ST,morphnormal_vertex:ET,morphtarget_pars_vertex:yT,morphtarget_vertex:TT,normal_fragment_begin:AT,normal_fragment_maps:wT,normal_pars_fragment:bT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:IT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:FT,premultiplied_alpha_fragment:OT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:GT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:ZT,skinning_vertex:KT,skinnormal_vertex:$T,specularmap_fragment:JT,specularmap_pars_fragment:QT,tonemapping_fragment:jT,tonemapping_pars_fragment:eA,transmission_fragment:tA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:aA,background_vert:oA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:uA,cube_vert:hA,cube_frag:fA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:_A,equirect_vert:gA,equirect_frag:vA,linedashed_vert:xA,linedashed_frag:MA,meshbasic_vert:SA,meshbasic_frag:EA,meshlambert_vert:yA,meshlambert_frag:TA,meshmatcap_vert:AA,meshmatcap_frag:wA,meshnormal_vert:bA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:LA,meshphysical_vert:IA,meshphysical_frag:PA,meshtoon_vert:DA,meshtoon_frag:UA,points_vert:NA,points_frag:FA,shadow_vert:OA,shadow_frag:BA,sprite_vert:zA,sprite_frag:GA},Se={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:wn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new _e(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:wn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:wn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:wn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new _e(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:wn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:wn([Se.points,Se.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:wn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:wn([Se.common,Se.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:wn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:wn([Se.sprite,Se.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:wn([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:wn([Se.lights,Se.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ko={r:0,b:0,g:0},Cr=new Ai,HA=new Wt;function VA(r,e,t,i,a,o,c){const u=new _e(0);let f=o===!0?0:1,h,p,_=null,g=0,x=null;function y(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?t:e).get(R)),R}function w(L){let R=!1;const G=y(L);G===null?m(u,f):G&&G.isColor&&(m(G,1),R=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(L,R){const G=y(R);G&&(G.isCubeTexture||G.mapping===ol)?(p===void 0&&(p=new bn(new Gr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Os(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Cr.copy(R.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=G,p.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Cr)),p.material.toneMapped=At.getTransfer(G.colorSpace)!==Dt,(_!==G||g!==G.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):G&&G.isTexture&&(h===void 0&&(h=new bn(new ul(2,2),new pr({name:"BackgroundMaterial",uniforms:Os(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=G,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=At.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),h.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||g!==G.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function m(L,R){L.getRGB(ko,fm(r)),i.buffers.color.setClear(ko.r,ko.g,ko.b,R,c)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,m(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,m(u,f)},render:w,addToRenderList:v,dispose:I}}function kA(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(T,z,Q,$,ie){let ue=!1;const ne=_($,Q,z);o!==ne&&(o=ne,h(o.object)),ue=x(T,$,Q,ie),ue&&y(T,$,Q,ie),ie!==null&&e.update(ie,r.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,R(T,z,Q,$),ie!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function _(T,z,Q){const $=Q.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let ue=ie[z.id];ue===void 0&&(ue={},ie[z.id]=ue);let ne=ue[$];return ne===void 0&&(ne=g(f()),ue[$]=ne),ne}function g(T){const z=[],Q=[],$=[];for(let ie=0;ie<t;ie++)z[ie]=0,Q[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,z,Q,$){const ie=o.attributes,ue=z.attributes;let ne=0;const de=Q.getAttributes();for(const j in de)if(de[j].location>=0){const Re=ie[j];let Fe=ue[j];if(Fe===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Fe=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Fe=T.instanceColor)),Re===void 0||Re.attribute!==Fe||Fe&&Re.data!==Fe.data)return!0;ne++}return o.attributesNum!==ne||o.index!==$}function y(T,z,Q,$){const ie={},ue=z.attributes;let ne=0;const de=Q.getAttributes();for(const j in de)if(de[j].location>=0){let Re=ue[j];Re===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Re=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Re=T.instanceColor));const Fe={};Fe.attribute=Re,Re&&Re.data&&(Fe.data=Re.data),ie[j]=Fe,ne++}o.attributes=ie,o.attributesNum=ne,o.index=$}function w(){const T=o.newAttributes;for(let z=0,Q=T.length;z<Q;z++)T[z]=0}function v(T){m(T,0)}function m(T,z){const Q=o.newAttributes,$=o.enabledAttributes,ie=o.attributeDivisors;Q[T]=1,$[T]===0&&(r.enableVertexAttribArray(T),$[T]=1),ie[T]!==z&&(r.vertexAttribDivisor(T,z),ie[T]=z)}function I(){const T=o.newAttributes,z=o.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==T[Q]&&(r.disableVertexAttribArray(Q),z[Q]=0)}function L(T,z,Q,$,ie,ue,ne){ne===!0?r.vertexAttribIPointer(T,z,Q,ie,ue):r.vertexAttribPointer(T,z,Q,$,ie,ue)}function R(T,z,Q,$){w();const ie=$.attributes,ue=Q.getAttributes(),ne=z.defaultAttributeValues;for(const de in ue){const j=ue[de];if(j.location>=0){let Te=ie[de];if(Te===void 0&&(de==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),de==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Te!==void 0){const Re=Te.normalized,Fe=Te.itemSize,ut=e.get(Te);if(ut===void 0)continue;const Ct=ut.buffer,oe=ut.type,ge=ut.bytesPerElement,Oe=oe===r.INT||oe===r.UNSIGNED_INT||Te.gpuType===Qu;if(Te.isInterleavedBufferAttribute){const Ae=Te.data,We=Ae.stride,dt=Te.offset;if(Ae.isInstancedInterleavedBuffer){for(let Qe=0;Qe<j.locationSize;Qe++)m(j.location+Qe,Ae.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Qe=0;Qe<j.locationSize;Qe++)v(j.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Qe=0;Qe<j.locationSize;Qe++)L(j.location+Qe,Fe/j.locationSize,oe,Re,We*ge,(dt+Fe/j.locationSize*Qe)*ge,Oe)}else{if(Te.isInstancedBufferAttribute){for(let Ae=0;Ae<j.locationSize;Ae++)m(j.location+Ae,Te.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)v(j.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Ae=0;Ae<j.locationSize;Ae++)L(j.location+Ae,Fe/j.locationSize,oe,Re,Fe*ge,Fe/j.locationSize*Ae*ge,Oe)}}else if(ne!==void 0){const Re=ne[de];if(Re!==void 0)switch(Re.length){case 2:r.vertexAttrib2fv(j.location,Re);break;case 3:r.vertexAttrib3fv(j.location,Re);break;case 4:r.vertexAttrib4fv(j.location,Re);break;default:r.vertexAttrib1fv(j.location,Re)}}}}I()}function G(){H();for(const T in i){const z=i[T];for(const Q in z){const $=z[Q];for(const ie in $)p($[ie].object),delete $[ie];delete z[Q]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const z=i[T.id];for(const Q in z){const $=z[Q];for(const ie in $)p($[ie].object),delete $[ie];delete z[Q]}delete i[T.id]}function F(T){for(const z in i){const Q=i[z];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const ie in $)p($[ie].object),delete $[ie];delete Q[T.id]}}function H(){C(),c=!0,o!==a&&(o=a,h(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:H,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:v,disableUnusedAttributes:I}}function WA(r,e,t){let i;function a(h){i=h}function o(h,p){r.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,_){_!==0&&(r.drawArraysInstanced(i,h,p,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];t.update(x,i,1)}function f(h,p,_,g){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<h.length;y++)c(h[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let y=0;for(let w=0;w<_;w++)y+=p[w]*g[w];t.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function XA(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==mi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const H=F===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==qi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!H)}function f(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:G,maxSamples:N}}function qA(r){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Ir,u=new ot,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,w=_.clipIntersection,v=_.clipShadows,m=r.get(_);if(!a||y===null||y.length===0||o&&!v)o?p(null):h();else{const I=o?0:i,L=I*4;let R=m.clippingState||null;f.value=R,R=p(y,g,L,x);for(let G=0;G!==L;++G)R[G]=t[G];m.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,x,y){const w=_!==null?_.length:0;let v=null;if(w!==0){if(v=f.value,y!==!0||v===null){const m=x+w*4,I=g.matrixWorldInverse;u.getNormalMatrix(I),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,R=x;L!==w;++L,R+=4)c.copy(_[L]).applyMatrix4(I,u),c.normal.toArray(v,R),v[R+3]=c.constant}f.value=v,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function YA(r){let e=new WeakMap;function t(c,u){return u===pu?c.mapping=Ps:u===mu&&(c.mapping=Ds),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===pu||u===mu)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new GE(f.height);return h.fromEquirectangularTexture(r,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const As=4,up=[.125,.215,.35,.446,.526,.582],Ur=20,Qc=new iy,hp=new _e;let jc=null,eu=0,tu=0,nu=!1;const Pr=(1+Math.sqrt(5))/2,ys=1/Pr,fp=[new U(-Pr,ys,0),new U(Pr,ys,0),new U(-ys,0,Pr),new U(ys,0,Pr),new U(0,Pr,-ys),new U(0,Pr,ys),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ea,format:mi,colorSpace:Fs,depthBuffer:!1},a=pp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pp(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(o)),this._blurMaterial=KA(o,e,t)}return a}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,a){const u=new qn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(hp),p.toneMapping=hr,p.autoClear=!1;const x=new Si({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new bn(new Gr,x);let w=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,w=!0):(x.color.copy(hp),w=!0);for(let m=0;m<6;m++){const I=m%3;I===0?(u.up.set(0,f[m],0),u.lookAt(h[m],0,0)):I===1?(u.up.set(0,0,f[m]),u.lookAt(0,h[m],0)):(u.up.set(0,f[m],0),u.lookAt(0,0,h[m]));const L=this._cubeSize;Wo(a,I*L,m>2?L:0,L,L),p.setRenderTarget(a),w&&p.render(y,u),p.render(e,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ps||e.mapping===Ds;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mp());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Wo(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Qc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=fp[(a-o-1)%fp.length];this._blur(e,o-1,o,c,u)}t.autoClear=i}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new bn(this._lodPlanes[a],h),g=h.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ur-1),w=o/y,v=isFinite(o)?1+Math.floor(p*w):Ur;v>Ur&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ur}`);const m=[];let I=0;for(let F=0;F<Ur;++F){const H=F/w,C=Math.exp(-H*H/2);m.push(C),F===0?I+=C:F<v&&(I+=2*C)}for(let F=0;F<m.length;F++)m[F]=m[F]/I;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=y,g.mipInt.value=L-i;const R=this._sizeLods[a],G=3*R*(a>L-As?a-L+As:0),N=4*(this._cubeSize-R);Wo(t,G,N,3*R,2*R),f.setRenderTarget(t),f.render(_,Qc)}}function ZA(r){const e=[],t=[],i=[];let a=r;const o=r-As+1+up.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let f=1/u;c>r-As?f=up[c-r+As-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,w=3,v=2,m=1,I=new Float32Array(w*y*x),L=new Float32Array(v*y*x),R=new Float32Array(m*y*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,H=N>2?0:-1,C=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];I.set(C,w*y*N),L.set(g,v*y*N);const T=[N,N,N,N,N,N];R.set(T,m*y*N)}const G=new Yn;G.setAttribute("position",new gi(I,w)),G.setAttribute("uv",new gi(L,v)),G.setAttribute("faceIndex",new gi(R,m)),e.push(G),a>As&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pp(r,e,t){const i=new zr(r,e,t);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function KA(r,e,t){const i=new Float32Array(Ur),a=new U(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function mp(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function _p(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function $A(r){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===pu||f===mu,p=f===Ps||f===Ds;if(h||p){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new dp(r)),_=h?t.fromEquirectangular(u,_):t.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&a(x)?(t===null&&(t=new dp(r)),_=h?t.fromEquirectangular(u):t.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function JA(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function QA(r,e,t,i){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const x in g)e.update(g[x],r.ARRAY_BUFFER)}function h(_){const g=[],x=_.index,y=_.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let L=0,R=I.length;L<R;L+=3){const G=I[L+0],N=I[L+1],F=I[L+2];g.push(G,N,N,F,F,G)}}else if(y!==void 0){const I=y.array;w=y.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const G=L+0,N=L+1,F=L+2;g.push(G,N,N,F,F,G)}}else return;const v=new(rm(g)?hm:um)(g,1);v.version=w;const m=o.get(_);m&&e.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&h(_)}else h(_);return o.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function jA(r,e,t){let i;function a(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function f(g,x){r.drawElements(i,x,o,g*c),t.update(x,i,1)}function h(g,x,y){y!==0&&(r.drawElementsInstanced(i,x,o,g*c,y),t.update(x,i,y))}function p(g,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,g,0,y);let v=0;for(let m=0;m<y;m++)v+=x[m];t.update(v,i,1)}function _(g,x,y,w){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)h(g[m]/c,x[m],w[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,o,g,0,w,0,y);let m=0;for(let I=0;I<y;I++)m+=x[I]*w[I];t.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function ew(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(o/3);break;case r.LINES:t.lines+=u*(o/2);break;case r.LINE_STRIP:t.lines+=u*(o-1);break;case r.LINE_LOOP:t.lines+=u*o;break;case r.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function tw(r,e,t){const i=new WeakMap,a=new Nt;function o(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),w===!0&&(R=2),v===!0&&(R=3);let G=u.attributes.position.count*R,N=1;G>e.maxTextureSize&&(N=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*N*4*_),H=new am(F,G,N,_);H.type=ki,H.needsUpdate=!0;const C=R*4;for(let z=0;z<_;z++){const Q=m[z],$=I[z],ie=L[z],ue=G*N*4*z;for(let ne=0;ne<Q.count;ne++){const de=ne*C;y===!0&&(a.fromBufferAttribute(Q,ne),F[ue+de+0]=a.x,F[ue+de+1]=a.y,F[ue+de+2]=a.z,F[ue+de+3]=0),w===!0&&(a.fromBufferAttribute($,ne),F[ue+de+4]=a.x,F[ue+de+5]=a.y,F[ue+de+6]=a.z,F[ue+de+7]=0),v===!0&&(a.fromBufferAttribute(ie,ne),F[ue+de+8]=a.x,F[ue+de+9]=a.y,F[ue+de+10]=a.z,F[ue+de+11]=ie.itemSize===4?a.w:1)}}g={count:_,texture:H,size:new Ne(G,N)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let y=0;for(let v=0;v<h.length;v++)y+=h[v];const w=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",w),f.getUniforms().setValue(r,"morphTargetInfluences",h)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function nw(r,e,t,i){let a=new WeakMap;function o(f){const h=i.render.frame,p=f.geometry,_=e.get(f,p);if(a.get(_)!==h&&(e.update(_),a.set(_,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==h&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return _}function c(){a=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const Mm=new Rn,gp=new gm(1,1),Sm=new am,Em=new yE,ym=new pm,vp=[],xp=[],Mp=new Float32Array(16),Sp=new Float32Array(9),Ep=new Float32Array(4);function zs(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=vp[a];if(o===void 0&&(o=new Float32Array(a),vp[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(o,u)}return o}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function hl(r,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function iw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function sw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function ow(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;Ep.set(i),r.uniformMatrix2fv(this.addr,!1,Ep),an(t,i)}}function lw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;Sp.set(i),r.uniformMatrix3fv(this.addr,!1,Sp),an(t,i)}}function cw(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;Mp.set(i),r.uniformMatrix4fv(this.addr,!1,Mp),an(t,i)}}function uw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function pw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function _w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function gw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function vw(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=im,o=gp):o=Mm,t.setTexture2D(e||o,a)}function xw(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Em,a)}function Mw(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||ym,a)}function Sw(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Sm,a)}function Ew(r){switch(r){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return aw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return _w;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Sw}}function yw(r,e){r.uniform1fv(this.addr,e)}function Tw(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function Aw(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function ww(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function bw(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rw(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cw(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Lw(r,e){r.uniform1iv(this.addr,e)}function Iw(r,e){r.uniform2iv(this.addr,e)}function Pw(r,e){r.uniform3iv(this.addr,e)}function Dw(r,e){r.uniform4iv(this.addr,e)}function Uw(r,e){r.uniform1uiv(this.addr,e)}function Nw(r,e){r.uniform2uiv(this.addr,e)}function Fw(r,e){r.uniform3uiv(this.addr,e)}function Ow(r,e){r.uniform4uiv(this.addr,e)}function Bw(r,e,t){const i=this.cache,a=e.length,o=hl(t,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||Mm,o[c])}function zw(r,e,t){const i=this.cache,a=e.length,o=hl(t,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Em,o[c])}function Gw(r,e,t){const i=this.cache,a=e.length,o=hl(t,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||ym,o[c])}function Hw(r,e,t){const i=this.cache,a=e.length,o=hl(t,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Sm,o[c])}function Vw(r){switch(r){case 5126:return yw;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return bw;case 35675:return Rw;case 35676:return Cw;case 5124:case 35670:return Lw;case 35667:case 35671:return Iw;case 35668:case 35672:return Pw;case 35669:case 35673:return Dw;case 5125:return Uw;case 36294:return Nw;case 36295:return Fw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Hw}}class kw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ew(t.type)}}class Ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vw(t.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function yp(r,e){r.seq.push(e),r.map[e.id]=e}function qw(r,e,t){const i=r.name,a=i.length;for(iu.lastIndex=0;;){const o=iu.exec(i),c=iu.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===a){yp(t,h===void 0?new kw(u,r,e):new Ww(u,r,e));break}else{let _=t.map[u];_===void 0&&(_=new Xw(u),yp(t,_)),t=_}}}class Qo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);qw(o,c,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Tp(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Yw=37297;let Zw=0;function Kw(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Ap=new ot;function $w(r){At._getMatrix(Ap,At.workingColorSpace,r);const e=`mat3( ${Ap.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(r)){case jo:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wp(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Kw(r.getShaderSource(e),c)}else return a}function Jw(r,e){const t=$w(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qw(r,e){let t;switch(e){case KS:t="Linear";break;case $S:t="Reinhard";break;case JS:t="Cineon";break;case QS:t="ACESFilmic";break;case eE:t="AgX";break;case tE:t="Neutral";break;case jS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xo=new U;function jw(){At.getLuminanceCoefficients(Xo);const r=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function tb(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nb(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),c=o.name;let u=1;o.type===r.FLOAT_MAT2&&(u=2),o.type===r.FLOAT_MAT3&&(u=3),o.type===r.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function ga(r){return r!==""}function bp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(r){return r.replace(ib,sb)}const rb=new Map;function sb(r,e){let t=ct[e];if(t===void 0){const i=rb.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(r){return r.replace(ab,ob)}function ob(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Lp(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function lb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ps:case Ds:e="ENVMAP_TYPE_CUBE";break;case ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ub(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function hb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wp:e="ENVMAP_BLENDING_MULTIPLY";break;case YS:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function fb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function db(r,e,t,i){const a=r.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=lb(t),h=cb(t),p=ub(t),_=hb(t),g=fb(t),x=eb(t),y=tb(o),w=a.createProgram();let v,m,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ga).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(ga).join(`
`),m.length>0&&(m+=`
`)):(v=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),m=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?ct.tonemapping_pars_fragment:"",t.toneMapping!==hr?Qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Jw("linearToOutputTexel",t.outputColorSpace),jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),c=Yu(c),c=bp(c,t),c=Rp(c,t),u=Yu(u),u=bp(u,t),u=Rp(u,t),c=Cp(c),u=Cp(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Dd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=I+v+c,R=I+m+u,G=Tp(a,a.VERTEX_SHADER,L),N=Tp(a,a.FRAGMENT_SHADER,R);a.attachShader(w,G),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(z){if(r.debug.checkShaderErrors){const Q=a.getProgramInfoLog(w).trim(),$=a.getShaderInfoLog(G).trim(),ie=a.getShaderInfoLog(N).trim();let ue=!0,ne=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ue=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,G,N);else{const de=wp(a,G,"vertex"),j=wp(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+de+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||ie==="")&&(ne=!1);ne&&(z.diagnostics={runnable:ue,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:ie,prefix:m}})}a.deleteShader(G),a.deleteShader(N),H=new Qo(a,w),C=nb(a,w)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(w,Yw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=N,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _b(e),t.set(e,i)),i}}class _b{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function gb(r,e,t,i,a,o,c){const u=new lm,f=new mb,h=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return h.add(C),C===0?"uv":`uv${C}`}function v(C,T,z,Q,$){const ie=Q.fog,ue=$.geometry,ne=C.isMeshStandardMaterial?Q.environment:null,de=(C.isMeshStandardMaterial?t:e).get(C.envMap||ne),j=de&&de.mapping===ol?de.image.height:null,Te=y[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Re=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Fe=Re!==void 0?Re.length:0;let ut=0;ue.morphAttributes.position!==void 0&&(ut=1),ue.morphAttributes.normal!==void 0&&(ut=2),ue.morphAttributes.color!==void 0&&(ut=3);let Ct,oe,ge,Oe;if(Te){const wt=Ei[Te];Ct=wt.vertexShader,oe=wt.fragmentShader}else Ct=C.vertexShader,oe=C.fragmentShader,f.update(C),ge=f.getVertexShaderID(C),Oe=f.getFragmentShaderID(C);const Ae=r.getRenderTarget(),We=r.state.buffers.depth.getReversed(),dt=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,zt=!!C.map,It=!!C.matcap,pt=!!de,O=!!C.aoMap,on=!!C.lightMap,gt=!!C.bumpMap,tt=!!C.normalMap,Ve=!!C.displacementMap,Ft=!!C.emissiveMap,ze=!!C.metalnessMap,P=!!C.roughnessMap,S=C.anisotropy>0,Y=C.clearcoat>0,ce=C.dispersion>0,he=C.iridescence>0,se=C.sheen>0,Be=C.transmission>0,xe=S&&!!C.anisotropyMap,Ce=Y&&!!C.clearcoatMap,mt=Y&&!!C.clearcoatNormalMap,me=Y&&!!C.clearcoatRoughnessMap,Ie=he&&!!C.iridescenceMap,qe=he&&!!C.iridescenceThicknessMap,Je=se&&!!C.sheenColorMap,Pe=se&&!!C.sheenRoughnessMap,ft=!!C.specularMap,nt=!!C.specularColorMap,Pt=!!C.specularIntensityMap,V=Be&&!!C.transmissionMap,Ee=Be&&!!C.thicknessMap,ee=!!C.gradientMap,le=!!C.alphaMap,be=C.alphaTest>0,we=!!C.alphaHash,rt=!!C.extensions;let Xt=hr;C.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Xt=r.toneMapping);const en={shaderID:Te,shaderType:C.type,shaderName:C.name,vertexShader:Ct,fragmentShader:oe,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:Oe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:dt,instancingColor:dt&&$.instanceColor!==null,instancingMorph:dt&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Fs,alphaToCoverage:!!C.alphaToCoverage,map:zt,matcap:It,envMap:pt,envMapMode:pt&&de.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:on,bumpMap:gt,normalMap:tt,displacementMap:g&&Ve,emissiveMap:Ft,normalMapObjectSpace:tt&&C.normalMapType===sE,normalMapTangentSpace:tt&&C.normalMapType===nm,metalnessMap:ze,roughnessMap:P,anisotropy:S,anisotropyMap:xe,clearcoat:Y,clearcoatMap:Ce,clearcoatNormalMap:mt,clearcoatRoughnessMap:me,dispersion:ce,iridescence:he,iridescenceMap:Ie,iridescenceThicknessMap:qe,sheen:se,sheenColorMap:Je,sheenRoughnessMap:Pe,specularMap:ft,specularColorMap:nt,specularIntensityMap:Pt,transmission:Be,transmissionMap:V,thicknessMap:Ee,gradientMap:ee,opaque:C.transparent===!1&&C.blending===bs&&C.alphaToCoverage===!1,alphaMap:le,alphaTest:be,alphaHash:we,combine:C.combine,mapUv:zt&&w(C.map.channel),aoMapUv:O&&w(C.aoMap.channel),lightMapUv:on&&w(C.lightMap.channel),bumpMapUv:gt&&w(C.bumpMap.channel),normalMapUv:tt&&w(C.normalMap.channel),displacementMapUv:Ve&&w(C.displacementMap.channel),emissiveMapUv:Ft&&w(C.emissiveMap.channel),metalnessMapUv:ze&&w(C.metalnessMap.channel),roughnessMapUv:P&&w(C.roughnessMap.channel),anisotropyMapUv:xe&&w(C.anisotropyMap.channel),clearcoatMapUv:Ce&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:mt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&w(C.sheenRoughnessMap.channel),specularMapUv:ft&&w(C.specularMap.channel),specularColorMapUv:nt&&w(C.specularColorMap.channel),specularIntensityMapUv:Pt&&w(C.specularIntensityMap.channel),transmissionMapUv:V&&w(C.transmissionMap.channel),thicknessMapUv:Ee&&w(C.thicknessMap.channel),alphaMapUv:le&&w(C.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(tt||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ue.attributes.uv&&(zt||le),fog:!!ie,useFog:C.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:We,skinning:$.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xt,decodeVideoTexture:zt&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ft&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===Dt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)T.push(z),T.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(T,C),L(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function I(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function L(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const T=y[C.type];let z;if(T){const Q=Ei[T];z=FE.clone(Q.uniforms)}else z=C.uniforms;return z}function G(C,T){let z;for(let Q=0,$=p.length;Q<$;Q++){const ie=p[Q];if(ie.cacheKey===T){z=ie,++z.usedTimes;break}}return z===void 0&&(z=new db(r,T,C,o),p.push(z)),z}function N(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function F(C){f.remove(C)}function H(){f.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:G,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:H}}function vb(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,f){r.get(c)[u]=f}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function xb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ip(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pp(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(_,g,x,y,w,v){let m=r[e];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:w,group:v},r[e]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=w,m.group=v),e++,m}function u(_,g,x,y,w,v){const m=c(_,g,x,y,w,v);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):t.push(m)}function f(_,g,x,y,w,v){const m=c(_,g,x,y,w,v);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):t.unshift(m)}function h(_,g){t.length>1&&t.sort(_||xb),i.length>1&&i.sort(g||Ip),a.length>1&&a.sort(g||Ip)}function p(){for(let _=e,g=r.length;_<g;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:f,finish:p,sort:h}}function Mb(){let r=new WeakMap;function e(i,a){const o=r.get(i);let c;return o===void 0?(c=new Pp,r.set(i,[c])):a>=o.length?(c=new Pp,o.push(c)):c=o[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Sb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new _e};break;case"SpotLight":t={position:new U,direction:new U,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Eb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yb=0;function Tb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ab(r){const e=new Sb,t=Eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const a=new U,o=new Wt,c=new Wt;function u(h){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,y=0,w=0,v=0,m=0,I=0,L=0,R=0,G=0,N=0,F=0;h.sort(Tb);for(let C=0,T=h.length;C<T;C++){const z=h[C],Q=z.color,$=z.intensity,ie=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(z.sh.coefficients[ne],$);F++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=ue,i.directionalShadowMatrix[x]=z.shadow.matrix,I++}i.directional[x]=ne,x++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(Q).multiplyScalar($),ne.distance=ie,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,i.spot[w]=ne;const de=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,de.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[w]=de.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,i.spotShadow[w]=j,i.spotShadowMap[w]=ue,R++}w++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(Q).multiplyScalar($),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=ne,v++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const de=z.shadow,j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,j.shadowCameraNear=de.camera.near,j.shadowCameraFar=de.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=ue,i.pointShadowMatrix[y]=z.shadow.matrix,L++}i.point[y]=ne,y++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar($),ne.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[m]=ne,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==x||H.pointLength!==y||H.spotLength!==w||H.rectAreaLength!==v||H.hemiLength!==m||H.numDirectionalShadows!==I||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==G||H.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=w,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+G-N,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,H.directionalLength=x,H.pointLength=y,H.spotLength=w,H.rectAreaLength=v,H.hemiLength=m,H.numDirectionalShadows=I,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=G,H.numLightProbes=F,i.version=yb++)}function f(h,p){let _=0,g=0,x=0,y=0,w=0;const v=p.matrixWorldInverse;for(let m=0,I=h.length;m<I;m++){const L=h[m];if(L.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),_++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const R=i.hemi[w];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),w++}}}return{setup:u,setupView:f,state:i}}function Dp(r){const e=new Ab(r),t=[],i=[];function a(p){h.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:c}}function wb(r){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new Dp(r),e.set(a,[u])):o>=c.length?(u=new Dp(r),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
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
}`;function Cb(r,e,t){let i=new rh;const a=new Ne,o=new Ne,c=new Nt,u=new ZE({depthPacking:rE}),f=new KE,h={},p=t.maxTextureSize,_={[dr]:Fn,[Fn]:dr,[Vi]:Vi},g=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:bb,fragmentShader:Rb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new Yn;y.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bn(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kp;let m=this.type;this.render=function(N,F,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Hi&&this.type===Hi,ie=m===Hi&&this.type!==Hi;for(let ue=0,ne=N.length;ue<ne;ue++){const de=N[ue],j=de.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const Te=j.getFrameExtents();if(a.multiply(Te),o.copy(j.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/Te.x),a.x=o.x*Te.x,j.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/Te.y),a.y=o.y*Te.y,j.mapSize.y=o.y)),j.map===null||$===!0||ie===!0){const Fe=this.type!==Hi?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new zr(a.x,a.y,Fe),j.map.texture.name=de.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Re=j.getViewportCount();for(let Fe=0;Fe<Re;Fe++){const ut=j.getViewport(Fe);c.set(o.x*ut.x,o.y*ut.y,o.x*ut.z,o.y*ut.w),Q.viewport(c),j.updateMatrices(de,Fe),i=j.getFrustum(),R(F,H,j.camera,de,this.type)}j.isPointLightShadow!==!0&&this.type===Hi&&I(j,H),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(C,T,z)};function I(N,F){const H=e.update(w);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new zr(a.x,a.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,H,g,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,H,x,w,null)}function L(N,F,H,C){let T=null;const z=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)T=z;else if(T=H.isPointLight===!0?f:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Q=T.uuid,$=F.uuid;let ie=h[Q];ie===void 0&&(ie={},h[Q]=ie);let ue=ie[$];ue===void 0&&(ue=T.clone(),ie[$]=ue,F.addEventListener("dispose",G)),T=ue}if(T.visible=F.visible,T.wireframe=F.wireframe,C===Hi?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:_[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=r.properties.get(T);Q.light=H}return T}function R(N,F,H,C,T){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Hi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const $=e.update(N),ie=N.material;if(Array.isArray(ie)){const ue=$.groups;for(let ne=0,de=ue.length;ne<de;ne++){const j=ue[ne],Te=ie[j.materialIndex];if(Te&&Te.visible){const Re=L(N,Te,C,T);N.onBeforeShadow(r,N,F,H,$,Re,j),r.renderBufferDirect(H,null,$,Re,N,j),N.onAfterShadow(r,N,F,H,$,Re,j)}}}else if(ie.visible){const ue=L(N,ie,C,T);N.onBeforeShadow(r,N,F,H,$,ue,null),r.renderBufferDirect(H,null,$,ue,N,null),N.onAfterShadow(r,N,F,H,$,ue,null)}}const Q=N.children;for(let $=0,ie=Q.length;$<ie;$++)R(Q[$],F,H,C,T)}function G(N){N.target.removeEventListener("dispose",G);for(const H in h){const C=h[H],T=N.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const Lb={[ou]:lu,[cu]:fu,[uu]:du,[Is]:hu,[lu]:ou,[fu]:cu,[du]:uu,[hu]:Is};function Ib(r,e){function t(){let V=!1;const Ee=new Nt;let ee=null;const le=new Nt(0,0,0,0);return{setMask:function(be){ee!==be&&!V&&(r.colorMask(be,be,be,be),ee=be)},setLocked:function(be){V=be},setClear:function(be,we,rt,Xt,en){en===!0&&(be*=Xt,we*=Xt,rt*=Xt),Ee.set(be,we,rt,Xt),le.equals(Ee)===!1&&(r.clearColor(be,we,rt,Xt),le.copy(Ee))},reset:function(){V=!1,ee=null,le.set(-1,0,0,0)}}}function i(){let V=!1,Ee=!1,ee=null,le=null,be=null;return{setReversed:function(we){if(Ee!==we){const rt=e.get("EXT_clip_control");Ee?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Xt=be;be=null,this.setClear(Xt)}Ee=we},getReversed:function(){return Ee},setTest:function(we){we?Ae(r.DEPTH_TEST):We(r.DEPTH_TEST)},setMask:function(we){ee!==we&&!V&&(r.depthMask(we),ee=we)},setFunc:function(we){if(Ee&&(we=Lb[we]),le!==we){switch(we){case ou:r.depthFunc(r.NEVER);break;case lu:r.depthFunc(r.ALWAYS);break;case cu:r.depthFunc(r.LESS);break;case Is:r.depthFunc(r.LEQUAL);break;case uu:r.depthFunc(r.EQUAL);break;case hu:r.depthFunc(r.GEQUAL);break;case fu:r.depthFunc(r.GREATER);break;case du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}le=we}},setLocked:function(we){V=we},setClear:function(we){be!==we&&(Ee&&(we=1-we),r.clearDepth(we),be=we)},reset:function(){V=!1,ee=null,le=null,be=null,Ee=!1}}}function a(){let V=!1,Ee=null,ee=null,le=null,be=null,we=null,rt=null,Xt=null,en=null;return{setTest:function(wt){V||(wt?Ae(r.STENCIL_TEST):We(r.STENCIL_TEST))},setMask:function(wt){Ee!==wt&&!V&&(r.stencilMask(wt),Ee=wt)},setFunc:function(wt,On,ai){(ee!==wt||le!==On||be!==ai)&&(r.stencilFunc(wt,On,ai),ee=wt,le=On,be=ai)},setOp:function(wt,On,ai){(we!==wt||rt!==On||Xt!==ai)&&(r.stencilOp(wt,On,ai),we=wt,rt=On,Xt=ai)},setLocked:function(wt){V=wt},setClear:function(wt){en!==wt&&(r.clearStencil(wt),en=wt)},reset:function(){V=!1,Ee=null,ee=null,le=null,be=null,we=null,rt=null,Xt=null,en=null}}}const o=new t,c=new i,u=new a,f=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,w=!1,v=null,m=null,I=null,L=null,R=null,G=null,N=null,F=new _e(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,ie=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,de=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=de>=1):j.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=de>=2);let Te=null,Re={};const Fe=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),Ct=new Nt().fromArray(Fe),oe=new Nt().fromArray(ut);function ge(V,Ee,ee,le){const be=new Uint8Array(4),we=r.createTexture();r.bindTexture(V,we),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let rt=0;rt<ee;rt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ee,0,r.RGBA,1,1,le,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(Ee+rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return we}const Oe={};Oe[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Oe[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Oe[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ae(r.DEPTH_TEST),c.setFunc(Is),gt(!1),tt(Rd),Ae(r.CULL_FACE),O(ur);function Ae(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function We(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function dt(V,Ee){return _[V]!==Ee?(r.bindFramebuffer(V,Ee),_[V]=Ee,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ee),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ee),!0):!1}function Qe(V,Ee){let ee=x,le=!1;if(V){ee=g.get(Ee),ee===void 0&&(ee=[],g.set(Ee,ee));const be=V.textures;if(ee.length!==be.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let we=0,rt=be.length;we<rt;we++)ee[we]=r.COLOR_ATTACHMENT0+we;ee.length=be.length,le=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,le=!0);le&&r.drawBuffers(ee)}function zt(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const It={[Dr]:r.FUNC_ADD,[LS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};It[PS]=r.MIN,It[DS]=r.MAX;const pt={[US]:r.ZERO,[NS]:r.ONE,[FS]:r.SRC_COLOR,[su]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[GS]:r.DST_COLOR,[BS]:r.DST_ALPHA,[OS]:r.ONE_MINUS_SRC_COLOR,[au]:r.ONE_MINUS_SRC_ALPHA,[HS]:r.ONE_MINUS_DST_COLOR,[zS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[WS]:r.ONE_MINUS_CONSTANT_COLOR,[XS]:r.CONSTANT_ALPHA,[qS]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ee,ee,le,be,we,rt,Xt,en,wt){if(V===ur){w===!0&&(We(r.BLEND),w=!1);return}if(w===!1&&(Ae(r.BLEND),w=!0),V!==CS){if(V!==v||wt!==C){if((m!==Dr||R!==Dr)&&(r.blendEquation(r.FUNC_ADD),m=Dr,R=Dr),wt)switch(V){case bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cd:r.blendFunc(r.ONE,r.ONE);break;case Ld:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ld:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,G=null,N=null,F.set(0,0,0),H=0,v=V,C=wt}return}be=be||Ee,we=we||ee,rt=rt||le,(Ee!==m||be!==R)&&(r.blendEquationSeparate(It[Ee],It[be]),m=Ee,R=be),(ee!==I||le!==L||we!==G||rt!==N)&&(r.blendFuncSeparate(pt[ee],pt[le],pt[we],pt[rt]),I=ee,L=le,G=we,N=rt),(Xt.equals(F)===!1||en!==H)&&(r.blendColor(Xt.r,Xt.g,Xt.b,en),F.copy(Xt),H=en),v=V,C=!1}function on(V,Ee){V.side===Vi?We(r.CULL_FACE):Ae(r.CULL_FACE);let ee=V.side===Fn;Ee&&(ee=!ee),gt(ee),V.blending===bs&&V.transparent===!1?O(ur):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const le=V.stencilWrite;u.setTest(le),le&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ft(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):We(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(V){T!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),T=V)}function tt(V){V!==wS?(Ae(r.CULL_FACE),V!==z&&(V===Rd?r.cullFace(r.BACK):V===bS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):We(r.CULL_FACE),z=V}function Ve(V){V!==Q&&(ne&&r.lineWidth(V),Q=V)}function Ft(V,Ee,ee){V?(Ae(r.POLYGON_OFFSET_FILL),($!==Ee||ie!==ee)&&(r.polygonOffset(Ee,ee),$=Ee,ie=ee)):We(r.POLYGON_OFFSET_FILL)}function ze(V){V?Ae(r.SCISSOR_TEST):We(r.SCISSOR_TEST)}function P(V){V===void 0&&(V=r.TEXTURE0+ue-1),Te!==V&&(r.activeTexture(V),Te=V)}function S(V,Ee,ee){ee===void 0&&(Te===null?ee=r.TEXTURE0+ue-1:ee=Te);let le=Re[ee];le===void 0&&(le={type:void 0,texture:void 0},Re[ee]=le),(le.type!==V||le.texture!==Ee)&&(Te!==ee&&(r.activeTexture(ee),Te=ee),r.bindTexture(V,Ee||Oe[V]),le.type=V,le.texture=Ee)}function Y(){const V=Re[Te];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Be(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){Ct.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Pe(V){oe.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function ft(V,Ee){let ee=h.get(Ee);ee===void 0&&(ee=new WeakMap,h.set(Ee,ee));let le=ee.get(V);le===void 0&&(le=r.getUniformBlockIndex(Ee,V.name),ee.set(V,le))}function nt(V,Ee){const le=h.get(Ee).get(V);f.get(Ee)!==le&&(r.uniformBlockBinding(Ee,le,V.__bindingPointIndex),f.set(Ee,le))}function Pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},Te=null,Re={},_={},g=new WeakMap,x=[],y=null,w=!1,v=null,m=null,I=null,L=null,R=null,G=null,N=null,F=new _e(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,ie=null,Ct.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Ae,disable:We,bindFramebuffer:dt,drawBuffers:Qe,useProgram:zt,setBlending:O,setMaterial:on,setFlipSided:gt,setCullFace:tt,setLineWidth:Ve,setPolygonOffset:Ft,setScissorTest:ze,activeTexture:P,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ce,compressedTexImage3D:he,texImage2D:Ie,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:nt,texStorage2D:mt,texStorage3D:me,texSubImage2D:se,texSubImage3D:Be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ce,scissor:Je,viewport:Pe,reset:Pt}}function Pb(r,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ne,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return x?new OffscreenCanvas(P,S):Sa("canvas")}function w(P,S,Y){let ce=1;const he=ze(P);if((he.width>Y||he.height>Y)&&(ce=Y/Math.max(he.width,he.height)),ce<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(ce*he.width),Be=Math.floor(ce*he.height);_===void 0&&(_=y(se,Be));const xe=S?y(se,Be):_;return xe.width=se,xe.height=Be,xe.getContext("2d").drawImage(P,0,0,se,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Be+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function v(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,S,Y,ce,he=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=S;if(S===r.RED&&(Y===r.FLOAT&&(se=r.R32F),Y===r.HALF_FLOAT&&(se=r.R16F),Y===r.UNSIGNED_BYTE&&(se=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(se=r.R8UI),Y===r.UNSIGNED_SHORT&&(se=r.R16UI),Y===r.UNSIGNED_INT&&(se=r.R32UI),Y===r.BYTE&&(se=r.R8I),Y===r.SHORT&&(se=r.R16I),Y===r.INT&&(se=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(se=r.RG32F),Y===r.HALF_FLOAT&&(se=r.RG16F),Y===r.UNSIGNED_BYTE&&(se=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(se=r.RG8UI),Y===r.UNSIGNED_SHORT&&(se=r.RG16UI),Y===r.UNSIGNED_INT&&(se=r.RG32UI),Y===r.BYTE&&(se=r.RG8I),Y===r.SHORT&&(se=r.RG16I),Y===r.INT&&(se=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(se=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(se=r.RGB16UI),Y===r.UNSIGNED_INT&&(se=r.RGB32UI),Y===r.BYTE&&(se=r.RGB8I),Y===r.SHORT&&(se=r.RGB16I),Y===r.INT&&(se=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(se=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(se=r.RGBA16UI),Y===r.UNSIGNED_INT&&(se=r.RGBA32UI),Y===r.BYTE&&(se=r.RGBA8I),Y===r.SHORT&&(se=r.RGBA16I),Y===r.INT&&(se=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),S===r.RGBA){const Be=he?jo:At.getTransfer(ce);Y===r.FLOAT&&(se=r.RGBA32F),Y===r.HALF_FLOAT&&(se=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(se=Be===Dt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(P,S){let Y;return P?S===null||S===Br||S===Us?Y=r.DEPTH24_STENCIL8:S===ki?Y=r.DEPTH32F_STENCIL8:S===Ma&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Br||S===Us?Y=r.DEPTH_COMPONENT24:S===ki?Y=r.DEPTH_COMPONENT32F:S===Ma&&(Y=r.DEPTH_COMPONENT16),Y}function G(P,S){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function N(P){const S=P.target;S.removeEventListener("dispose",N),H(S),S.isVideoTexture&&p.delete(S)}function F(P){const S=P.target;S.removeEventListener("dispose",F),T(S)}function H(P){const S=i.get(P);if(S.__webglInit===void 0)return;const Y=P.source,ce=g.get(Y);if(ce){const he=ce[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&C(P),Object.keys(ce).length===0&&g.delete(Y)}i.remove(P)}function C(P){const S=i.get(P);r.deleteTexture(S.__webglTexture);const Y=P.source,ce=g.get(Y);delete ce[S.__cacheKey],c.memory.textures--}function T(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let he=0;he<S.__webglFramebuffer[ce].length;he++)r.deleteFramebuffer(S.__webglFramebuffer[ce][he]);else r.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)r.deleteFramebuffer(S.__webglFramebuffer[ce]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=P.textures;for(let ce=0,he=Y.length;ce<he;ce++){const se=i.get(Y[ce]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),c.memory.textures--),i.remove(Y[ce])}i.remove(P)}let z=0;function Q(){z=0}function $(){const P=z;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),z+=1,P}function ie(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ue(P,S){const Y=i.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ce=P.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Y,P,S);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function ne(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){oe(Y,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function de(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){oe(Y,P,S);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function j(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ge(Y,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}const Te={[_u]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[gu]:r.MIRRORED_REPEAT},Re={[_i]:r.NEAREST,[nE]:r.NEAREST_MIPMAP_NEAREST,[xo]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[Tc]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},Fe={[aE]:r.NEVER,[fE]:r.ALWAYS,[oE]:r.LESS,[im]:r.LEQUAL,[lE]:r.EQUAL,[hE]:r.GEQUAL,[cE]:r.GREATER,[uE]:r.NOTEQUAL};function ut(P,S){if(S.type===ki&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Tc||S.magFilter===xo||S.magFilter===Or||S.minFilter===Ti||S.minFilter===Tc||S.minFilter===xo||S.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Te[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Te[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Te[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Re[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Re[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==xo&&S.minFilter!==Or||S.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",N));const ce=S.source;let he=g.get(ce);he===void 0&&(he={},g.set(ce,he));const se=ie(S);if(se!==P.__cacheKey){he[se]===void 0&&(he[se]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),he[se].usedTimes++;const Be=he[P.__cacheKey];Be!==void 0&&(he[P.__cacheKey].usedTimes--,Be.usedTimes===0&&C(S)),P.__cacheKey=se,P.__webglTexture=he[se].texture}return Y}function oe(P,S,Y){let ce=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=r.TEXTURE_3D);const he=Ct(P,S),se=S.source;t.bindTexture(ce,P.__webglTexture,r.TEXTURE0+Y);const Be=i.get(se);if(se.version!==Be.__version||he===!0){t.activeTexture(r.TEXTURE0+Y);const xe=At.getPrimaries(At.workingColorSpace),Ce=S.colorSpace===cr?null:At.getPrimaries(S.colorSpace),mt=S.colorSpace===cr||xe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let me=w(S.image,!1,a.maxTextureSize);me=Ft(S,me);const Ie=o.convert(S.format,S.colorSpace),qe=o.convert(S.type);let Je=L(S.internalFormat,Ie,qe,S.colorSpace,S.isVideoTexture);ut(ce,S);let Pe;const ft=S.mipmaps,nt=S.isVideoTexture!==!0,Pt=Be.__version===void 0||he===!0,V=se.dataReady,Ee=G(S,me);if(S.isDepthTexture)Je=R(S.format===Ns,S.type),Pt&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Je,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Je,me.width,me.height,0,Ie,qe,null));else if(S.isDataTexture)if(ft.length>0){nt&&Pt&&t.texStorage2D(r.TEXTURE_2D,Ee,Je,ft[0].width,ft[0].height);for(let ee=0,le=ft.length;ee<le;ee++)Pe=ft[ee],nt?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ie,qe,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Je,Pe.width,Pe.height,0,Ie,qe,Pe.data);S.generateMipmaps=!1}else nt?(Pt&&t.texStorage2D(r.TEXTURE_2D,Ee,Je,me.width,me.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,Ie,qe,me.data)):t.texImage2D(r.TEXTURE_2D,0,Je,me.width,me.height,0,Ie,qe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Je,ft[0].width,ft[0].height,me.depth);for(let ee=0,le=ft.length;ee<le;ee++)if(Pe=ft[ee],S.format!==mi)if(Ie!==null)if(nt){if(V)if(S.layerUpdates.size>0){const be=cp(Pe.width,Pe.height,S.format,S.type);for(const we of S.layerUpdates){const rt=Pe.data.subarray(we*be/Pe.data.BYTES_PER_ELEMENT,(we+1)*be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,we,Pe.width,Pe.height,1,Ie,rt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Ie,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Je,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Ie,qe,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Je,Pe.width,Pe.height,me.depth,0,Ie,qe,Pe.data)}else{nt&&Pt&&t.texStorage2D(r.TEXTURE_2D,Ee,Je,ft[0].width,ft[0].height);for(let ee=0,le=ft.length;ee<le;ee++)Pe=ft[ee],S.format!==mi?Ie!==null?nt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Je,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ie,qe,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Je,Pe.width,Pe.height,0,Ie,qe,Pe.data)}else if(S.isDataArrayTexture)if(nt){if(Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Je,me.width,me.height,me.depth),V)if(S.layerUpdates.size>0){const ee=cp(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const be=me.data.subarray(le*ee/me.data.BYTES_PER_ELEMENT,(le+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Ie,qe,be)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ie,qe,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,me.width,me.height,me.depth,0,Ie,qe,me.data);else if(S.isData3DTexture)nt?(Pt&&t.texStorage3D(r.TEXTURE_3D,Ee,Je,me.width,me.height,me.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ie,qe,me.data)):t.texImage3D(r.TEXTURE_3D,0,Je,me.width,me.height,me.depth,0,Ie,qe,me.data);else if(S.isFramebufferTexture){if(Pt)if(nt)t.texStorage2D(r.TEXTURE_2D,Ee,Je,me.width,me.height);else{let ee=me.width,le=me.height;for(let be=0;be<Ee;be++)t.texImage2D(r.TEXTURE_2D,be,Je,ee,le,0,Ie,qe,null),ee>>=1,le>>=1}}else if(ft.length>0){if(nt&&Pt){const ee=ze(ft[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Je,ee.width,ee.height)}for(let ee=0,le=ft.length;ee<le;ee++)Pe=ft[ee],nt?V&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Ie,qe,Pe):t.texImage2D(r.TEXTURE_2D,ee,Je,Ie,qe,Pe);S.generateMipmaps=!1}else if(nt){if(Pt){const ee=ze(me);t.texStorage2D(r.TEXTURE_2D,Ee,Je,ee.width,ee.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,qe,me)}else t.texImage2D(r.TEXTURE_2D,0,Je,Ie,qe,me);v(S)&&m(ce),Be.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ge(P,S,Y){if(S.image.length!==6)return;const ce=Ct(P,S),he=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const se=i.get(he);if(he.version!==se.__version||ce===!0){t.activeTexture(r.TEXTURE0+Y);const Be=At.getPrimaries(At.workingColorSpace),xe=S.colorSpace===cr?null:At.getPrimaries(S.colorSpace),Ce=S.colorSpace===cr||Be===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const mt=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let le=0;le<6;le++)!mt&&!me?Ie[le]=w(S.image[le],!0,a.maxCubemapSize):Ie[le]=me?S.image[le].image:S.image[le],Ie[le]=Ft(S,Ie[le]);const qe=Ie[0],Je=o.convert(S.format,S.colorSpace),Pe=o.convert(S.type),ft=L(S.internalFormat,Je,Pe,S.colorSpace),nt=S.isVideoTexture!==!0,Pt=se.__version===void 0||ce===!0,V=he.dataReady;let Ee=G(S,qe);ut(r.TEXTURE_CUBE_MAP,S);let ee;if(mt){nt&&Pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,ft,qe.width,qe.height);for(let le=0;le<6;le++){ee=Ie[le].mipmaps;for(let be=0;be<ee.length;be++){const we=ee[be];S.format!==mi?Je!==null?nt?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,we.width,we.height,Je,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,ft,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,0,0,we.width,we.height,Je,Pe,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be,ft,we.width,we.height,0,Je,Pe,we.data)}}}else{if(ee=S.mipmaps,nt&&Pt){ee.length>0&&Ee++;const le=ze(Ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,ft,le.width,le.height)}for(let le=0;le<6;le++)if(me){nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie[le].width,Ie[le].height,Je,Pe,Ie[le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ft,Ie[le].width,Ie[le].height,0,Je,Pe,Ie[le].data);for(let be=0;be<ee.length;be++){const rt=ee[be].image[le].image;nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,rt.width,rt.height,Je,Pe,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,ft,rt.width,rt.height,0,Je,Pe,rt.data)}}else{nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Je,Pe,Ie[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ft,Je,Pe,Ie[le]);for(let be=0;be<ee.length;be++){const we=ee[be];nt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,0,0,Je,Pe,we.image[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,be+1,ft,Je,Pe,we.image[le])}}}v(S)&&m(r.TEXTURE_CUBE_MAP),se.__version=he.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Oe(P,S,Y,ce,he,se){const Be=o.convert(Y.format,Y.colorSpace),xe=o.convert(Y.type),Ce=L(Y.internalFormat,Be,xe,Y.colorSpace),mt=i.get(S),me=i.get(Y);if(me.__renderTarget=S,!mt.__hasExternalTextures){const Ie=Math.max(1,S.width>>se),qe=Math.max(1,S.height>>se);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Ce,Ie,qe,S.depth,0,Be,xe,null):t.texImage2D(he,se,Ce,Ie,qe,0,Be,xe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),tt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,he,me.__webglTexture,0,gt(S)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,he,me.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(P,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ce=S.depthTexture,he=ce&&ce.isDepthTexture?ce.type:null,se=R(S.stencilBuffer,he),Be=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=gt(S);tt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,se,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,se,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,se,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,P)}else{const ce=S.textures;for(let he=0;he<ce.length;he++){const se=ce[he],Be=o.convert(se.format,se.colorSpace),xe=o.convert(se.type),Ce=L(se.internalFormat,Be,xe,se.colorSpace),mt=gt(S);Y&&tt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,Ce,S.width,S.height):tt(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,Ce,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(S.depthTexture);ce.__renderTarget=S,(!ce.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ue(S.depthTexture,0);const he=ce.__webglTexture,se=gt(S);if(S.depthTexture.format===Rs)tt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,he,0);else if(S.depthTexture.format===Ns)tt(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function dt(P){const S=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ce=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",he)};ce.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=ce}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");We(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=r.createRenderbuffer(),Ae(S.__webglDepthbuffer[ce],P,!1);else{const he=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,se)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ae(S.__webglDepthbuffer,P,!1);else{const ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,he)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(P,S,Y){const ce=i.get(P);S!==void 0&&Oe(ce.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&dt(P)}function zt(P){const S=P.texture,Y=i.get(P),ce=i.get(S);P.addEventListener("dispose",F);const he=P.textures,se=P.isWebGLCubeRenderTarget===!0,Be=he.length>1;if(Be||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=S.version,c.memory.textures++),se){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[xe]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)Y.__webglFramebuffer[xe][Ce]=r.createFramebuffer()}else Y.__webglFramebuffer[xe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)Y.__webglFramebuffer[xe]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Be)for(let xe=0,Ce=he.length;xe<Ce;xe++){const mt=i.get(he[xe]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&tt(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xe=0;xe<he.length;xe++){const Ce=he[xe];Y.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[xe]);const mt=o.convert(Ce.format,Ce.colorSpace),me=o.convert(Ce.type),Ie=L(Ce.internalFormat,mt,me,Ce.colorSpace,P.isXRRenderTarget===!0),qe=gt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Ie,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,Y.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),ut(r.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Oe(Y.__webglFramebuffer[xe][Ce],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce);else Oe(Y.__webglFramebuffer[xe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let xe=0,Ce=he.length;xe<Ce;xe++){const mt=he[xe],me=i.get(mt);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),ut(r.TEXTURE_2D,mt),Oe(Y.__webglFramebuffer,P,mt,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),v(mt)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let xe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),ut(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)Oe(Y.__webglFramebuffer[Ce],P,S,r.COLOR_ATTACHMENT0,xe,Ce);else Oe(Y.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,xe,0);v(S)&&m(xe),t.unbindTexture()}P.depthBuffer&&dt(P)}function It(P){const S=P.textures;for(let Y=0,ce=S.length;Y<ce;Y++){const he=S[Y];if(v(he)){const se=I(P),Be=i.get(he).__webglTexture;t.bindTexture(se,Be),m(se),t.unbindTexture()}}}const pt=[],O=[];function on(P){if(P.samples>0){if(tt(P)===!1){const S=P.textures,Y=P.width,ce=P.height;let he=r.COLOR_BUFFER_BIT;const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=i.get(P),xe=S.length>1;if(xe)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),xe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const mt=i.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,mt,0)}r.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,he,r.NEAREST),f===!0&&(pt.length=0,O.length=0,pt.push(r.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(se),O.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ce]);const mt=i.get(S[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,mt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function gt(P){return Math.min(a.maxSamples,P.samples)}function tt(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ve(P){const S=c.render.frame;p.get(P)!==S&&(p.set(P,S),P.update())}function Ft(P,S){const Y=P.colorSpace,ce=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Fs&&Y!==cr&&(At.getTransfer(Y)===Dt?(ce!==mi||he!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ue,this.setTexture2DArray=ne,this.setTexture3D=de,this.setTextureCube=j,this.rebindTextures=Qe,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=tt}function Db(r,e){function t(i,a=cr){let o;const c=At.getTransfer(a);if(i===qi)return r.UNSIGNED_BYTE;if(i===ju)return r.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===qp)return r.BYTE;if(i===Yp)return r.SHORT;if(i===Ma)return r.UNSIGNED_SHORT;if(i===Qu)return r.INT;if(i===Br)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===Ea)return r.HALF_FLOAT;if(i===Kp)return r.ALPHA;if(i===$p)return r.RGB;if(i===mi)return r.RGBA;if(i===Jp)return r.LUMINANCE;if(i===Qp)return r.LUMINANCE_ALPHA;if(i===Rs)return r.DEPTH_COMPONENT;if(i===Ns)return r.DEPTH_STENCIL;if(i===jp)return r.RED;if(i===th)return r.RED_INTEGER;if(i===em)return r.RG;if(i===nh)return r.RG_INTEGER;if(i===ih)return r.RGBA_INTEGER;if(i===Yo||i===Zo||i===Ko||i===$o)if(c===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vu||i===xu||i===Mu||i===Su)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eu||i===yu||i===Tu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Eu||i===yu)return c===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Tu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Au||i===wu||i===bu||i===Ru||i===Cu||i===Lu||i===Iu||i===Pu||i===Du||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Au)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ru)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Iu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Du)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ou)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===zu||i===Gu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Jo)return c===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tm||i===Hu||i===Vu||i===ku)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Jo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ku)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nb=`
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

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Rn,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pr({vertexShader:Ub,fragmentShader:Nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new ul(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends Bs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",f=1,h=null,p=null,_=null,g=null,x=null,y=null;const w=new Fb,v=t.getContextAttributes();let m=null,I=null;const L=[],R=[],G=new Ne;let N=null;const F=new qn;F.viewport=new Nt;const H=new qn;H.viewport=new Nt;const C=[F,H],T=new ry;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ge=L[oe];return ge===void 0&&(ge=new qc,L[oe]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(oe){let ge=L[oe];return ge===void 0&&(ge=new qc,L[oe]=ge),ge.getGripSpace()},this.getHand=function(oe){let ge=L[oe];return ge===void 0&&(ge=new qc,L[oe]=ge),ge.getHandSpace()};function $(oe){const ge=R.indexOf(oe.inputSource);if(ge===-1)return;const Oe=L[ge];Oe!==void 0&&(Oe.update(oe.inputSource,oe.frame,h||c),Oe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",ue);for(let oe=0;oe<L.length;oe++){const ge=R[oe];ge!==null&&(R[oe]=null,L[oe].disconnect(ge))}z=null,Q=null,w.reset(),e.setRenderTarget(m),x=null,g=null,_=null,a=null,I=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Oe=null,Ae=null,We=null;v.depth&&(We=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Oe=v.stencil?Ns:Rs,Ae=v.stencil?Us:Br);const dt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};_=new XRWebGLBinding(a,t),g=_.createProjectionLayer(dt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new zr(g.textureWidth,g.textureHeight,{format:mi,type:qi,depthTexture:new gm(g.textureWidth,g.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,Oe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new zr(x.framebufferWidth,x.framebufferHeight,{format:mi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}I.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await a.requestReferenceSpace(u),Ct.setContext(a),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ue(oe){for(let ge=0;ge<oe.removed.length;ge++){const Oe=oe.removed[ge],Ae=R.indexOf(Oe);Ae>=0&&(R[Ae]=null,L[Ae].disconnect(Oe))}for(let ge=0;ge<oe.added.length;ge++){const Oe=oe.added[ge];let Ae=R.indexOf(Oe);if(Ae===-1){for(let dt=0;dt<L.length;dt++)if(dt>=R.length){R.push(Oe),Ae=dt;break}else if(R[dt]===null){R[dt]=Oe,Ae=dt;break}if(Ae===-1)break}const We=L[Ae];We&&We.connect(Oe)}}const ne=new U,de=new U;function j(oe,ge,Oe){ne.setFromMatrixPosition(ge.matrixWorld),de.setFromMatrixPosition(Oe.matrixWorld);const Ae=ne.distanceTo(de),We=ge.projectionMatrix.elements,dt=Oe.projectionMatrix.elements,Qe=We[14]/(We[10]-1),zt=We[14]/(We[10]+1),It=(We[9]+1)/We[5],pt=(We[9]-1)/We[5],O=(We[8]-1)/We[0],on=(dt[8]+1)/dt[0],gt=Qe*O,tt=Qe*on,Ve=Ae/(-O+on),Ft=Ve*-O;if(ge.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ft),oe.translateZ(Ve),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),We[10]===-1)oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ze=Qe+Ve,P=zt+Ve,S=gt-Ft,Y=tt+(Ae-Ft),ce=It*zt/P*ze,he=pt*zt/P*ze;oe.projectionMatrix.makePerspective(S,Y,ce,he,ze,P),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Te(oe,ge){ge===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ge.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let ge=oe.near,Oe=oe.far;w.texture!==null&&(w.depthNear>0&&(ge=w.depthNear),w.depthFar>0&&(Oe=w.depthFar)),T.near=H.near=F.near=ge,T.far=H.far=F.far=Oe,(z!==T.near||Q!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Q=T.far),F.layers.mask=oe.layers.mask|2,H.layers.mask=oe.layers.mask|4,T.layers.mask=F.layers.mask|H.layers.mask;const Ae=oe.parent,We=T.cameras;Te(T,Ae);for(let dt=0;dt<We.length;dt++)Te(We[dt],Ae);We.length===2?j(T,F,H):T.projectionMatrix.copy(F.projectionMatrix),Re(oe,T,Ae)};function Re(oe,ge,Oe){Oe===null?oe.matrix.copy(ge.matrixWorld):(oe.matrix.copy(Oe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ge.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Xu*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(oe){f=oe,g!==null&&(g.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(T)};let Fe=null;function ut(oe,ge){if(p=ge.getViewerPose(h||c),y=ge,p!==null){const Oe=p.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let Ae=!1;Oe.length!==T.cameras.length&&(T.cameras.length=0,Ae=!0);for(let Qe=0;Qe<Oe.length;Qe++){const zt=Oe[Qe];let It=null;if(x!==null)It=x.getViewport(zt);else{const O=_.getViewSubImage(g,zt);It=O.viewport,Qe===0&&(e.setRenderTargetTextures(I,O.colorTexture,g.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(I))}let pt=C[Qe];pt===void 0&&(pt=new qn,pt.layers.enable(Qe),pt.viewport=new Nt,C[Qe]=pt),pt.matrix.fromArray(zt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(zt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(It.x,It.y,It.width,It.height),Qe===0&&(T.matrix.copy(pt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ae===!0&&T.cameras.push(pt)}const We=a.enabledFeatures;if(We&&We.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Qe=_.getDepthInformation(Oe[0]);Qe&&Qe.isValid&&Qe.texture&&w.init(e,Qe,a.renderState)}}for(let Oe=0;Oe<L.length;Oe++){const Ae=R[Oe],We=L[Oe];Ae!==null&&We!==void 0&&We.update(Ae,ge,h||c)}Fe&&Fe(oe,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),y=null}const Ct=new xm;Ct.setAnimationLoop(ut),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const Lr=new Ai,Bb=new Wt;function zb(r,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,fm(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,I,L,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,R)):m.isMeshMatcapMaterial?(o(v,m),y(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),w(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?f(v,m,I,L):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Fn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Fn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const I=e.get(m),L=I.envMap,R=I.envMapRotation;L&&(v.envMap.value=L,Lr.copy(R),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),v.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Lr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function f(v,m,I,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*I,v.scale.value=L*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,I){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function w(v,m){const I=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Gb(r,e,t,i){let a={},o={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,L){const R=L.program;i.uniformBlockBinding(I,R)}function h(I,L){let R=a[I.id];R===void 0&&(y(I),R=p(I),a[I.id]=R,I.addEventListener("dispose",v));const G=L.program;i.updateUBOMapping(I,G);const N=e.render.frame;o[I.id]!==N&&(g(I),o[I.id]=N)}function p(I){const L=_();I.__bindingPointIndex=L;const R=r.createBuffer(),G=I.__size,N=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const L=a[I.id],R=I.uniforms,G=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,F=R.length;N<F;N++){const H=Array.isArray(R[N])?R[N]:[R[N]];for(let C=0,T=H.length;C<T;C++){const z=H[C];if(x(z,N,C,G)===!0){const Q=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let ie=0;for(let ue=0;ue<$.length;ue++){const ne=$[ue],de=w(ne);typeof ne=="number"||typeof ne=="boolean"?(z.__data[0]=ne,r.bufferSubData(r.UNIFORM_BUFFER,Q+ie,z.__data)):ne.isMatrix3?(z.__data[0]=ne.elements[0],z.__data[1]=ne.elements[1],z.__data[2]=ne.elements[2],z.__data[3]=0,z.__data[4]=ne.elements[3],z.__data[5]=ne.elements[4],z.__data[6]=ne.elements[5],z.__data[7]=0,z.__data[8]=ne.elements[6],z.__data[9]=ne.elements[7],z.__data[10]=ne.elements[8],z.__data[11]=0):(ne.toArray(z.__data,ie),ie+=de.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,R,G){const N=I.value,F=L+"_"+R;if(G[F]===void 0)return typeof N=="number"||typeof N=="boolean"?G[F]=N:G[F]=N.clone(),!0;{const H=G[F];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return G[F]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function y(I){const L=I.uniforms;let R=0;const G=16;for(let F=0,H=L.length;F<H;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let T=0,z=C.length;T<z;T++){const Q=C[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let ie=0,ue=$.length;ie<ue;ie++){const ne=$[ie],de=w(ne),j=R%G,Te=j%de.boundary,Re=j+Te;R+=Te,Re!==0&&G-Re<de.storage&&(R+=G-Re),Q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=de.storage}}}const N=R%G;return N>0&&(R+=G-N),I.__size=R,I.__cache={},this}function w(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function v(I){const L=I.target;L.removeEventListener("dispose",v);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const I in a)r.deleteBuffer(a[I]);c=[],a={},o={}}return{bind:f,update:h,dispose:m}}class Hb{constructor(e={}){const{canvas:t=pE(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),w=new Int32Array(4);let v=null,m=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=hr,this.toneMappingExposure=1;const R=this;let G=!1,N=0,F=0,H=null,C=-1,T=null;const z=new Nt,Q=new Nt;let $=null;const ie=new _e(0);let ue=0,ne=t.width,de=t.height,j=1,Te=null,Re=null;const Fe=new Nt(0,0,ne,de),ut=new Nt(0,0,ne,de);let Ct=!1;const oe=new rh;let ge=!1,Oe=!1;this.transmissionResolutionScale=1;const Ae=new Wt,We=new Wt,dt=new U,Qe=new Nt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function pt(){return H===null?j:1}let O=i;function on(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ju}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",we,!1),O===null){const W="webgl2";if(O=on(W,A),O===null)throw on(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,tt,Ve,Ft,ze,P,S,Y,ce,he,se,Be,xe,Ce,mt,me,Ie,qe,Je,Pe,ft,nt,Pt,V;function Ee(){gt=new JA(O),gt.init(),nt=new Db(O,gt),tt=new XA(O,gt,e,nt),Ve=new Ib(O,gt),tt.reverseDepthBuffer&&g&&Ve.buffers.depth.setReversed(!0),Ft=new ew(O),ze=new vb,P=new Pb(O,gt,Ve,ze,tt,nt,Ft),S=new YA(R),Y=new $A(R),ce=new oy(O),Pt=new kA(O,ce),he=new QA(O,ce,Ft,Pt),se=new nw(O,he,ce,Ft),Je=new tw(O,tt,P),me=new qA(ze),Be=new gb(R,S,Y,gt,tt,Pt,me),xe=new zb(R,ze),Ce=new Mb,mt=new wb(gt),qe=new VA(R,S,Y,Ve,se,x,f),Ie=new Cb(R,se,tt),V=new Gb(O,Ft,tt,Ve),Pe=new WA(O,gt,Ft),ft=new jA(O,gt,Ft),Ft.programs=Be.programs,R.capabilities=tt,R.extensions=gt,R.properties=ze,R.renderLists=Ce,R.shadowMap=Ie,R.state=Ve,R.info=Ft}Ee();const ee=new Ob(R,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(ne,de,!1))},this.getSize=function(A){return A.set(ne,de)},this.setSize=function(A,W,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,de=W,t.width=Math.floor(A*j),t.height=Math.floor(W*j),Z===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ne*j,de*j).floor()},this.setDrawingBufferSize=function(A,W,Z){ne=A,de=W,j=Z,t.width=Math.floor(A*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,W,Z,K){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,W,Z,K),Ve.viewport(z.copy(Fe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,W,Z,K){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,W,Z,K),Ve.scissor(Q.copy(ut).multiplyScalar(j).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){Ve.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){Re=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,W=!0,Z=!0){let K=0;if(A){let q=!1;if(H!==null){const pe=H.texture.format;q=pe===ih||pe===nh||pe===th}if(q){const pe=H.texture.type,ye=pe===qi||pe===Br||pe===Ma||pe===Us||pe===ju||pe===eh,Le=qe.getClearColor(),Ue=qe.getClearAlpha(),je=Le.r,et=Le.g,Xe=Le.b;ye?(y[0]=je,y[1]=et,y[2]=Xe,y[3]=Ue,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=je,w[1]=et,w[2]=Xe,w[3]=Ue,O.clearBufferiv(O.COLOR,0,w))}else K|=O.COLOR_BUFFER_BIT}W&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",we,!1),qe.dispose(),Ce.dispose(),mt.dispose(),ze.dispose(),S.dispose(),Y.dispose(),se.dispose(),Pt.dispose(),V.dispose(),Be.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",kr),ee.removeEventListener("sessionend",wa),oi.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Ft.autoReset,W=Ie.enabled,Z=Ie.autoUpdate,K=Ie.needsUpdate,q=Ie.type;Ee(),Ft.autoReset=A,Ie.enabled=W,Ie.autoUpdate=Z,Ie.needsUpdate=K,Ie.type=q}function we(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const W=A.target;W.removeEventListener("dispose",rt),Xt(W)}function Xt(A){en(A),ze.remove(A)}function en(A){const W=ze.get(A).programs;W!==void 0&&(W.forEach(function(Z){Be.releaseProgram(Z)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Z,K,q,pe){W===null&&(W=zt);const ye=q.isMesh&&q.matrixWorld.determinant()<0,Le=Pa(A,W,Z,K,q);Ve.setMaterial(K,ye);let Ue=Z.index,je=1;if(K.wireframe===!0){if(Ue=he.getWireframeAttribute(Z),Ue===void 0)return;je=2}const et=Z.drawRange,Xe=Z.attributes.position;let xt=et.start*je,Tt=(et.start+et.count)*je;pe!==null&&(xt=Math.max(xt,pe.start*je),Tt=Math.min(Tt,(pe.start+pe.count)*je)),Ue!==null?(xt=Math.max(xt,0),Tt=Math.min(Tt,Ue.count)):Xe!=null&&(xt=Math.max(xt,0),Tt=Math.min(Tt,Xe.count));const Yt=Tt-xt;if(Yt<0||Yt===1/0)return;Pt.setup(q,K,Le,Z,Ue);let Vt,Mt=Pe;if(Ue!==null&&(Vt=ce.get(Ue),Mt=ft,Mt.setIndex(Vt)),q.isMesh)K.wireframe===!0?(Ve.setLineWidth(K.wireframeLinewidth*pt()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(q.isLine){let ke=K.linewidth;ke===void 0&&(ke=1),Ve.setLineWidth(ke*pt()),q.isLineSegments?Mt.setMode(O.LINES):q.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else q.isPoints?Mt.setMode(O.POINTS):q.isSprite&&Mt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Mt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const ke=q._multiDrawStarts,tn=q._multiDrawCounts,yt=q._multiDrawCount,mn=Ue?ce.get(Ue).bytesPerElement:1,wi=ze.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<yt;Sn++)wi.setValue(O,"_gl_DrawID",Sn),Mt.render(ke[Sn]/mn,tn[Sn])}else if(q.isInstancedMesh)Mt.renderInstances(xt,Yt,q.count);else if(Z.isInstancedBufferGeometry){const ke=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tn=Math.min(Z.instanceCount,ke);Mt.renderInstances(xt,Yt,tn)}else Mt.render(xt,Yt)};function wt(A,W,Z){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Xr(A,W,Z),A.side=dr,A.needsUpdate=!0,Xr(A,W,Z),A.side=Vi):Xr(A,W,Z)}this.compile=function(A,W,Z=null){Z===null&&(Z=A),m=mt.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pe=q.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Le=pe[ye];wt(Le,Z,q),K.add(Le)}else wt(pe,Z,q),K.add(pe)}),L.pop(),m=null,K},this.compileAsync=function(A,W,Z=null){const K=this.compile(A,W,Z);return new Promise(q=>{function pe(){if(K.forEach(function(ye){ze.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){q(A);return}setTimeout(pe,10)}gt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let On=null;function ai(A){On&&On(A)}function kr(){oi.stop()}function wa(){oi.start()}const oi=new xm;oi.setAnimationLoop(ai),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(A){On=A,ee.setAnimationLoop(A),A===null?oi.stop():oi.start()},ee.addEventListener("sessionstart",kr),ee.addEventListener("sessionend",wa),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,H),m=mt.get(A,L.length),m.init(W),L.push(m),We.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),oe.setFromProjectionMatrix(We),Oe=this.localClippingEnabled,ge=me.init(this.clippingPlanes,Oe),v=Ce.get(A,I.length),v.init(),I.push(v),ee.enabled===!0&&ee.isPresenting===!0){const pe=R.xr.getDepthSensingMesh();pe!==null&&Hs(pe,W,-1/0,R.sortObjects)}Hs(A,W,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(Te,Re),It=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,It&&qe.addToRenderList(v,A),this.info.render.frame++,ge===!0&&me.beginShadows();const Z=m.state.shadowsArray;Ie.render(Z,A,W),ge===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const pe=W.cameras;if(q.length>0)for(let ye=0,Le=pe.length;ye<Le;ye++){const Ue=pe[ye];Ra(K,q,A,Ue)}It&&qe.render(A);for(let ye=0,Le=pe.length;ye<Le;ye++){const Ue=pe[ye];ba(v,A,Ue,Ue.viewport)}}else q.length>0&&Ra(K,q,A,W),It&&qe.render(A),ba(v,A,W);H!==null&&F===0&&(P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(R,A,W),Pt.resetDefaultState(),C=-1,T=null,L.pop(),L.length>0?(m=L[L.length-1],ge===!0&&me.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function Hs(A,W,Z,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){K&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(We);const ye=se.update(A),Le=A.material;Le.visible&&v.push(A,ye,Le,Z,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const ye=se.update(A),Le=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Qe.copy(ye.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(We)),Array.isArray(Le)){const Ue=ye.groups;for(let je=0,et=Ue.length;je<et;je++){const Xe=Ue[je],xt=Le[Xe.materialIndex];xt&&xt.visible&&v.push(A,ye,xt,Z,Qe.z,Xe)}}else Le.visible&&v.push(A,ye,Le,Z,Qe.z,null)}}const pe=A.children;for(let ye=0,Le=pe.length;ye<Le;ye++)Hs(pe[ye],W,Z,K)}function ba(A,W,Z,K){const q=A.opaque,pe=A.transmissive,ye=A.transparent;m.setupLightsView(Z),ge===!0&&me.setGlobalState(R.clippingPlanes,Z),K&&Ve.viewport(z.copy(K)),q.length>0&&Wr(q,W,Z),pe.length>0&&Wr(pe,W,Z),ye.length>0&&Wr(ye,W,Z),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ra(A,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new zr(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ea:qi,minFilter:Or,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const pe=m.state.transmissionRenderTarget[K.id],ye=K.viewport||z;pe.setSize(ye.z*R.transmissionResolutionScale,ye.w*R.transmissionResolutionScale);const Le=R.getRenderTarget();R.setRenderTarget(pe),R.getClearColor(ie),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),It&&qe.render(Z);const Ue=R.toneMapping;R.toneMapping=hr;const je=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ge===!0&&me.setGlobalState(R.clippingPlanes,K),Wr(A,Z,K),P.updateMultisampleRenderTarget(pe),P.updateRenderTargetMipmap(pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,xt=W.length;Xe<xt;Xe++){const Tt=W[Xe],Yt=Tt.object,Vt=Tt.geometry,Mt=Tt.material,ke=Tt.group;if(Mt.side===Vi&&Yt.layers.test(K.layers)){const tn=Mt.side;Mt.side=Fn,Mt.needsUpdate=!0,Ca(Yt,Z,K,Vt,Mt,ke),Mt.side=tn,Mt.needsUpdate=!0,et=!0}}et===!0&&(P.updateMultisampleRenderTarget(pe),P.updateRenderTargetMipmap(pe))}R.setRenderTarget(Le),R.setClearColor(ie,ue),je!==void 0&&(K.viewport=je),R.toneMapping=Ue}function Wr(A,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pe=A.length;q<pe;q++){const ye=A[q],Le=ye.object,Ue=ye.geometry,je=K===null?ye.material:K,et=ye.group;Le.layers.test(Z.layers)&&Ca(Le,W,Z,Ue,je,et)}}function Ca(A,W,Z,K,q,pe){A.onBeforeRender(R,W,Z,K,q,pe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,W,Z,K,A,pe),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pe),q.side=dr,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pe),q.side=Vi):R.renderBufferDirect(Z,W,K,q,A,pe),A.onAfterRender(R,W,Z,K,q,pe)}function Xr(A,W,Z){W.isScene!==!0&&(W=zt);const K=ze.get(A),q=m.state.lights,pe=m.state.shadowsArray,ye=q.state.version,Le=Be.getParameters(A,q.state,pe,W,Z),Ue=Be.getProgramCacheKey(Le);let je=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?Y:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",rt),je=new Map,K.programs=je);let et=je.get(Ue);if(et!==void 0){if(K.currentProgram===et&&K.lightsStateVersion===ye)return Ia(A,Le),et}else Le.uniforms=Be.getUniforms(A),A.onBeforeCompile(Le,R),et=Be.acquireProgram(Le,Ue),je.set(Ue,et),K.uniforms=Le.uniforms;const Xe=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=me.uniform),Ia(A,Le),K.needsLights=pl(A),K.lightsStateVersion=ye,K.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=et,K.uniformsList=null,et}function La(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Qo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ia(A,W){const Z=ze.get(A);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Pa(A,W,Z,K,q){W.isScene!==!0&&(W=zt),P.resetTextureUnits();const pe=W.fog,ye=K.isMeshStandardMaterial?W.environment:null,Le=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Fs,Ue=(K.isMeshStandardMaterial?Y:S).get(K.envMap||ye),je=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Xe=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,Tt=!!Z.morphAttributes.color;let Yt=hr;K.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Yt=R.toneMapping);const Vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=Vt!==void 0?Vt.length:0,ke=ze.get(K),tn=m.state.lights;if(ge===!0&&(Oe===!0||A!==T)){const ln=A===T&&K.id===C;me.setState(K,A,ln)}let yt=!1;K.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==tn.state.version||ke.outputColorSpace!==Le||q.isBatchedMesh&&ke.batching===!1||!q.isBatchedMesh&&ke.batching===!0||q.isBatchedMesh&&ke.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&ke.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&ke.instancing===!1||!q.isInstancedMesh&&ke.instancing===!0||q.isSkinnedMesh&&ke.skinning===!1||!q.isSkinnedMesh&&ke.skinning===!0||q.isInstancedMesh&&ke.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ke.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&ke.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&ke.instancingMorph===!1&&q.morphTexture!==null||ke.envMap!==Ue||K.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==me.numPlanes||ke.numIntersection!==me.numIntersection)||ke.vertexAlphas!==je||ke.vertexTangents!==et||ke.morphTargets!==Xe||ke.morphNormals!==xt||ke.morphColors!==Tt||ke.toneMapping!==Yt||ke.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,ke.__version=K.version);let mn=ke.currentProgram;yt===!0&&(mn=Xr(K,W,q));let wi=!1,Sn=!1,Yi=!1;const Ot=mn.getUniforms(),_n=ke.uniforms;if(Ve.useProgram(mn.program)&&(wi=!0,Sn=!0,Yi=!0),K.id!==C&&(C=K.id,Sn=!0),wi||T!==A){Ve.buffers.depth.getReversed()?(Ae.copy(A.projectionMatrix),_E(Ae),gE(Ae),Ot.setValue(O,"projectionMatrix",Ae)):Ot.setValue(O,"projectionMatrix",A.projectionMatrix),Ot.setValue(O,"viewMatrix",A.matrixWorldInverse);const cn=Ot.map.cameraPosition;cn!==void 0&&cn.setValue(O,dt.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&Ot.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Sn=!0,Yi=!0)}if(q.isSkinnedMesh){Ot.setOptional(O,q,"bindMatrix"),Ot.setOptional(O,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ot.setValue(O,"boneTexture",ln.boneTexture,P))}q.isBatchedMesh&&(Ot.setOptional(O,q,"batchingTexture"),Ot.setValue(O,"batchingTexture",q._matricesTexture,P),Ot.setOptional(O,q,"batchingIdTexture"),Ot.setValue(O,"batchingIdTexture",q._indirectTexture,P),Ot.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(O,"batchingColorTexture",q._colorsTexture,P));const Cn=Z.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Je.update(q,Z,mn),(Sn||ke.receiveShadow!==q.receiveShadow)&&(ke.receiveShadow=q.receiveShadow,Ot.setValue(O,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=Ue,_n.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),Sn&&(Ot.setValue(O,"toneMappingExposure",R.toneMappingExposure),ke.needsLights&&dl(_n,Yi),pe&&K.fog===!0&&xe.refreshFogUniforms(_n,pe),xe.refreshMaterialUniforms(_n,K,j,de,m.state.transmissionRenderTarget[A.id]),Qo.upload(O,La(ke),_n,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qo.upload(O,La(ke),_n,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(O,"center",q.center),Ot.setValue(O,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(O,"normalMatrix",q.normalMatrix),Ot.setValue(O,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let cn=0,mr=ln.length;cn<mr;cn++){const Ln=ln[cn];V.update(Ln,mn),V.bind(Ln,mn)}}return mn}function dl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function pl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,Z){ze.get(A.texture).__webglTexture=W,ze.get(A.depthTexture).__webglTexture=Z;const K=ze.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Z=ze.get(A);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const ml=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Z=0){H=A,N=W,F=Z;let K=!0,q=null,pe=!1,ye=!1;if(A){const Ue=ze.get(A);if(Ue.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ue.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ue.__hasExternalTextures)P.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(Ue.__boundDepthTexture!==Xe){if(Xe!==null&&ze.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ye=!0);const et=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[W])?q=et[W][Z]:q=et[W],pe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?q=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?q=et[Z]:q=et,z.copy(A.viewport),Q.copy(A.scissor),$=A.scissorTest}else z.copy(Fe).multiplyScalar(j).floor(),Q.copy(ut).multiplyScalar(j).floor(),$=Ct;if(Z!==0&&(q=ml),Ve.bindFramebuffer(O.FRAMEBUFFER,q)&&K&&Ve.drawBuffers(A,q),Ve.viewport(z),Ve.scissor(Q),Ve.setScissorTest($),pe){const Ue=ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,Z)}else if(ye){const Ue=ze.get(A.texture),je=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,Z,je)}else if(A!==null&&Z!==0){const Ue=ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(A,W,Z,K,q,pe,ye){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Le=Le[ye]),Le){Ve.bindFramebuffer(O.FRAMEBUFFER,Le);try{const Ue=A.texture,je=Ue.format,et=Ue.type;if(!tt.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q&&O.readPixels(W,Z,K,q,nt.convert(je),nt.convert(et),pe)}finally{const Ue=H!==null?ze.get(H).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,W,Z,K,q,pe,ye){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ye!==void 0&&(Le=Le[ye]),Le){const Ue=A.texture,je=Ue.format,et=Ue.type;if(!tt.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q){Ve.bindFramebuffer(O.FRAMEBUFFER,Le);const Xe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(W,Z,K,q,nt.convert(je),nt.convert(et),0);const xt=H!==null?ze.get(H).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,xt);const Tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mE(O,Tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Xe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.deleteBuffer(Xe),O.deleteSync(Tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Z=0){A.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(A.image.width*K),pe=Math.floor(A.image.height*K),ye=W!==null?W.x:0,Le=W!==null?W.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,ye,Le,q,pe),Ve.unbindTexture()};const _l=O.createFramebuffer(),gl=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Z=null,K=null,q=0,pe=null){A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],pe=arguments[3]||0,Z=null),pe===null&&(q!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=q,q=0):pe=0);let ye,Le,Ue,je,et,Xe,xt,Tt,Yt;const Vt=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(Z!==null)ye=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,Ue=Z.isBox3?Z.max.z-Z.min.z:1,je=Z.min.x,et=Z.min.y,Xe=Z.isBox3?Z.min.z:0;else{const Cn=Math.pow(2,-q);ye=Math.floor(Vt.width*Cn),Le=Math.floor(Vt.height*Cn),A.isDataArrayTexture?Ue=Vt.depth:A.isData3DTexture?Ue=Math.floor(Vt.depth*Cn):Ue=1,je=0,et=0,Xe=0}K!==null?(xt=K.x,Tt=K.y,Yt=K.z):(xt=0,Tt=0,Yt=0);const Mt=nt.convert(W.format),ke=nt.convert(W.type);let tn;W.isData3DTexture?(P.setTexture3D(W,0),tn=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),tn=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),tn=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const yt=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wi=O.getParameter(O.UNPACK_SKIP_PIXELS),Sn=O.getParameter(O.UNPACK_SKIP_ROWS),Yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,je),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe);const Ot=A.isDataArrayTexture||A.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=ze.get(A),ln=ze.get(W),cn=ze.get(Cn.__renderTarget),mr=ze.get(ln.__renderTarget);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Ln=0;Ln<Ue;Ln++)Ot&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(A).__webglTexture,q,Xe+Ln),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,pe,Yt+Ln)),O.blitFramebuffer(je,et,ye,Le,xt,Tt,ye,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||ze.has(A)){const Cn=ze.get(A),ln=ze.get(W);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,_l),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,gl);for(let cn=0;cn<Ue;cn++)Ot?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Xe+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Cn.__webglTexture,q),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,pe,Yt+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,pe),q!==0?O.blitFramebuffer(je,et,ye,Le,xt,Tt,ye,Le,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(tn,pe,xt,Tt,Yt+cn,je,et,ye,Le):O.copyTexSubImage2D(tn,pe,xt,Tt,je,et,ye,Le);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(tn,pe,xt,Tt,Yt,ye,Le,Ue,Mt,ke,Vt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(tn,pe,xt,Tt,Yt,ye,Le,Ue,Mt,Vt.data):O.texSubImage3D(tn,pe,xt,Tt,Yt,ye,Le,Ue,Mt,ke,Vt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,xt,Tt,ye,Le,Mt,ke,Vt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,xt,Tt,Vt.width,Vt.height,Mt,Vt.data):O.texSubImage2D(O.TEXTURE_2D,pe,xt,Tt,ye,Le,Mt,ke,Vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,yt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yi),pe===0&&W.generateMipmaps&&O.generateMipmap(tn),Ve.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Z=null,K=null,q=0){return A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Z,K,q)},this.initRenderTarget=function(A){ze.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ve.unbindTexture()},this.resetState=function(){N=0,F=0,H=null,Ve.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class Aa{constructor(e){ve(this,"mesh");ve(this,"isAlive",!0);this.mesh=e.mesh}afterSpawn(e,t){}update(e,t,i,a){}graphics(e,t,i,a){}kill(){this.isAlive=!1}beforeDeath(e,t,i){}}class Nn{constructor(e){ve(this,"center");ve(this,"parts");this.center=e.center,this.parts=e.parts,this.updateParts()}get position(){return this.center}set position(e){this.center=e.clone(),this.updateParts()}updateParts(){for(const e of this.parts)e.mesh.position.set(this.center.x+e.offset.x,this.center.y+e.offset.y,this.center.z+e.offset.z)}}const Vb={createGrid(r,e){const t=[];for(let i=0;i<r;i++){t[i]=[];for(let a=0;a<e;a++){const o={actors:[],isWalkable:!0};t[i][a]=o}}return t}};class kb{constructor(e){ve(this,"actorsGrid");ve(this,"components",[]);ve(this,"camera");ve(this,"scene");this.actorsGrid=Vb.createGrid(e.width,e.height),this.camera=e.camera??new qn,this.scene=e.scene??new VE}onStart(e){}onSwitch(e){}addActor(e,t){if(!(0<=t.x&&t.x<this.actorsGrid.length)&&!(0<=t.y&&t.y<this.actorsGrid[0].length))throw new Error(`Position ${t.x},${t.y} is out of bounds`);this.actorsGrid[t.x][t.y].actors.push(e),e.mesh instanceof Nn?e.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(e.mesh),e.afterSpawn(this,t)}addComponent(e){this.components.push(e),e.mesh instanceof Nn?e.mesh.parts.forEach(t=>this.scene.add(t.mesh)):this.scene.add(e.mesh)}update(e,t){this.actorsGrid.forEach((o,c)=>{o.forEach((u,f)=>{const h=new Ne(c,f);u.actors.forEach(p=>p.update(e,t,this,h.clone()))})}),this.components.forEach(o=>o.update(e,t,this)),this.actorsGrid.map((o,c)=>o.map((u,f)=>{const h=new Ne(c,f);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(e,this,h),g.mesh instanceof Nn?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)});const _=u.actors.filter(g=>g.isAlive);u.actors=_}));const i=[],a=[];for(let o=0;o<this.components.length;o++){const c=this.components[o];c.isAlive?i.push(c):a.push(c)}a.forEach(o=>{o.mesh instanceof Nn?o.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(o.mesh)}),this.components=i}graphics(e,t){this.actorsGrid.forEach((i,a)=>{i.forEach((o,c)=>{const u=new Ne(a,c);o.actors.forEach(f=>f.graphics(e,t,this,u.clone()))})}),this.components.forEach(i=>i.graphics(e,t,this))}}var Ls=function(){var r=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++r%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===p?"block":"none";r=p}var a=(performance||Date).now(),o=a,c=0,u=t(new Ls.Panel("FPS","#0ff","#002")),f=t(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(f.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,h)){var _=performance.memory;h.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};Ls.Panel=function(r,e,t){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,p=2*c,_=3*c,g=15*c,x=74*c,y=30*c,w=document.createElement("canvas");w.width=u,w.height=f,w.style.cssText="width:80px;height:48px";var v=w.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,u,f),v.fillStyle=e,v.fillText(r,h,p),v.fillRect(_,g,x,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_,g,x,y),{dom:w,update:function(m,I){i=Math.min(i,m),a=Math.max(a,m),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=e,v.fillText(o(m)+" "+r+" ("+o(i)+"-"+o(a)+")",h,p),v.drawImage(w,_+c,g,x-c,y,_,g,x-c,y),v.fillRect(_+x-c,g,c,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,o((1-m/I)*y))}}};const Wb="canvas";class Xb{constructor(){ve(this,"wasPressedMap",new Map);ve(this,"pressedMap",new Map);document.addEventListener("keydown",e=>{this.wasPressedMap.set(e.key,!0),this.pressedMap.set(e.key,!0)}),document.addEventListener("keyup",e=>{this.wasPressedMap.set(e.key,!1),this.pressedMap.set(e.key,!1)})}wasPressed(e){const t=this.wasPressedMap.get(e)||!1;return t&&this.wasPressedMap.set(e,!1),t}isPressed(e){return this.pressedMap.get(e)||!1}}const qb=new Xb;class Yb{constructor(){ve(this,"renderer");ve(this,"keyboardHandler");ve(this,"isGameOver",!1);ve(this,"lastUpdate",Date.now());ve(this,"lastGraphics",Date.now());ve(this,"stats",new Ls);ve(this,"containers",new Map);ve(this,"currentContainer");this.renderer=new Hb,this.renderer.setSize(800,800),this.renderer.domElement.id=Wb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=qb,this.stats=new Ls,document.body.appendChild(this.stats.dom);const e=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",e),window.requestAnimationFrame(e)}addContainer(e,t){if(this.containers.has(e))throw new Error(`A container with key "${e}" already exists`);this.containers.set(e,t),t.onStart(this)}setContainer(e){if(!this.containers.has(e))throw new Error(`A container with key "${e}" does not exist`);this.currentContainer=this.containers.get(e),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const e=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(e)}};e()}update(){const e=Date.now(),t=Up(e-this.lastUpdate);this.lastUpdate=e,this.currentContainer&&this.currentContainer.update(this,t)}graphics(){const e=Date.now(),t=Up(e-this.lastGraphics);this.lastGraphics=e,this.currentContainer&&this.currentContainer.graphics(this,t)}}function Up(r){return Math.max(0,Math.min(r,1e3))}class fl{constructor(e){ve(this,"mesh");ve(this,"isAlive",!0);this.mesh=e.mesh}update(e,t,i){}graphics(e,t,i){}kill(){this.isAlive=!1}}const Ye={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc"},ii=4,Ht={createCube:r=>{const e=(r==null?void 0:r.size)??1,t=(r==null?void 0:r.color)??65280,i=new Gr(e,e,e,ii,ii,ii),a={color:t},o=r!=null&&r.basicMaterial?new Si(a):new Es(a);return new bn(i,o)},createBox:r=>{const e=(r==null?void 0:r.width)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.depth)??1,a=(r==null?void 0:r.color)??new _e(Ye.RED),o=new Gr(e,t,i,ii,ii,ii),c={color:a},u=r!=null&&r.basicMaterial?new Si(c):new Es(c);return new bn(o,u)},createCone:r=>{const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new _e(Ye.RED),a=new sh(e,t,ii,ii),o={color:i},c=r!=null&&r.basicMaterial?new Si(o):new Es(o);return new bn(a,c)},createSphere:r=>{const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.color)??new _e(Ye.RED),i=new lh(e,ii,ii),a={color:t},o=r!=null&&r.basicMaterial?new Si(a):new Es(a);return new bn(i,o)},createCylinder:r=>{const e=(r==null?void 0:r.radius)??1,t=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new _e(Ye.RED),a=new cl(e,e,t,ii*2,ii),o={color:i},c=r!=null&&r.basicMaterial?new Si(o):new Es(o);return new bn(a,c)},createGem(r){const e=(r==null?void 0:r.size)??1,t=(r==null?void 0:r.color)??new _e(Ye.RED),i=new oh(e,0),a={color:t},o=r!=null&&r.basicMaterial?new Si(a):new Es(a);return new bn(i,o)}};class Zb extends Aa{constructor(e){const t=new Nn({center:e.position,parts:[{mesh:Ht.createBox({width:e.size,height:e.size/4,depth:e.size,color:new _e(Ye.DARK)}),offset:new U(0,-e.size*3/8,0)},{mesh:Ht.createBox({width:e.size*4/5,height:e.size/2,depth:e.size*4/5,color:new _e(Ye.WHITE)}),offset:new U(0,0,0)},{mesh:Ht.createBox({width:e.size,height:e.size/4,depth:e.size,color:new _e(Ye.DARK)}),offset:new U(0,e.size*3/8,0)}]});super({mesh:t})}}var hh=(r=>(r.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",r))(hh||{});const He={TILE_SIZE:1};var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ru={},fa={},va={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Kb=va.exports,Np;function $b(){return Np||(Np=1,function(r,e){(function(){var t,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",_=1,g=2,x=4,y=1,w=2,v=1,m=2,I=4,L=8,R=16,G=32,N=64,F=128,H=256,C=512,T=30,z="...",Q=800,$=16,ie=1,ue=2,ne=3,de=1/0,j=9007199254740991,Te=17976931348623157e292,Re=NaN,Fe=4294967295,ut=Fe-1,Ct=Fe>>>1,oe=[["ary",F],["bind",v],["bindKey",m],["curry",L],["curryRight",R],["flip",C],["partial",G],["partialRight",N],["rearg",H]],ge="[object Arguments]",Oe="[object Array]",Ae="[object AsyncFunction]",We="[object Boolean]",dt="[object Date]",Qe="[object DOMException]",zt="[object Error]",It="[object Function]",pt="[object GeneratorFunction]",O="[object Map]",on="[object Number]",gt="[object Null]",tt="[object Object]",Ve="[object Promise]",Ft="[object Proxy]",ze="[object RegExp]",P="[object Set]",S="[object String]",Y="[object Symbol]",ce="[object Undefined]",he="[object WeakMap]",se="[object WeakSet]",Be="[object ArrayBuffer]",xe="[object DataView]",Ce="[object Float32Array]",mt="[object Float64Array]",me="[object Int8Array]",Ie="[object Int16Array]",qe="[object Int32Array]",Je="[object Uint8Array]",Pe="[object Uint8ClampedArray]",ft="[object Uint16Array]",nt="[object Uint32Array]",Pt=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Ee=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ee=/&(?:amp|lt|gt|quot|#39);/g,le=/[&<>"']/g,be=RegExp(ee.source),we=RegExp(le.source),rt=/<%-([\s\S]+?)%>/g,Xt=/<%([\s\S]+?)%>/g,en=/<%=([\s\S]+?)%>/g,wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/,ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kr=/[\\^$.*+?()[\]{}|]/g,wa=RegExp(kr.source),oi=/^\s+/,Hs=/\s/,ba=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ra=/\{\n\/\* \[wrapped with (.+)\] \*/,Wr=/,? & /,Ca=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Xr=/[()=,{}\[\]\/\s]/,La=/\\(\\)?/g,Ia=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,dl=/^[-+]0x[0-9a-f]+$/i,pl=/^0b[01]+$/i,ml=/^\[object .+?Constructor\]$/,_l=/^0o[0-7]+$/i,gl=/^(?:0|[1-9]\d*)$/,A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",pe="\\ufe20-\\ufe2f",ye="\\u20d0-\\u20ff",Le=q+pe+ye,Ue="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",et="\\xac\\xb1\\xd7\\xf7",Xe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xt="\\u2000-\\u206f",Tt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Yt="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",Mt=et+Xe+xt+Tt,ke="['’]",tn="["+K+"]",yt="["+Mt+"]",mn="["+Le+"]",wi="\\d+",Sn="["+Ue+"]",Yi="["+je+"]",Ot="[^"+K+Mt+wi+Ue+je+Yt+"]",_n="\\ud83c[\\udffb-\\udfff]",Cn="(?:"+mn+"|"+_n+")",ln="[^"+K+"]",cn="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ln="["+Yt+"]",dh="\\u200d",ph="(?:"+Yi+"|"+Ot+")",bm="(?:"+Ln+"|"+Ot+")",mh="(?:"+ke+"(?:d|ll|m|re|s|t|ve))?",_h="(?:"+ke+"(?:D|LL|M|RE|S|T|VE))?",gh=Cn+"?",vh="["+Vt+"]?",Rm="(?:"+dh+"(?:"+[ln,cn,mr].join("|")+")"+vh+gh+")*",Cm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xh=vh+gh+Rm,Im="(?:"+[Sn,cn,mr].join("|")+")"+xh,Pm="(?:"+[ln+mn+"?",mn,cn,mr,tn].join("|")+")",Dm=RegExp(ke,"g"),Um=RegExp(mn,"g"),vl=RegExp(_n+"(?="+_n+")|"+Pm+xh,"g"),Nm=RegExp([Ln+"?"+Yi+"+"+mh+"(?="+[yt,Ln,"$"].join("|")+")",bm+"+"+_h+"(?="+[yt,Ln+ph,"$"].join("|")+")",Ln+"?"+ph+"+"+mh,Ln+"+"+_h,Lm,Cm,wi,Im].join("|"),"g"),Fm=RegExp("["+dh+K+Le+Vt+"]"),Om=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Bm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zm=-1,kt={};kt[Ce]=kt[mt]=kt[me]=kt[Ie]=kt[qe]=kt[Je]=kt[Pe]=kt[ft]=kt[nt]=!0,kt[ge]=kt[Oe]=kt[Be]=kt[We]=kt[xe]=kt[dt]=kt[zt]=kt[It]=kt[O]=kt[on]=kt[tt]=kt[ze]=kt[P]=kt[S]=kt[he]=!1;var Gt={};Gt[ge]=Gt[Oe]=Gt[Be]=Gt[xe]=Gt[We]=Gt[dt]=Gt[Ce]=Gt[mt]=Gt[me]=Gt[Ie]=Gt[qe]=Gt[O]=Gt[on]=Gt[tt]=Gt[ze]=Gt[P]=Gt[S]=Gt[Y]=Gt[Je]=Gt[Pe]=Gt[ft]=Gt[nt]=!0,Gt[zt]=Gt[It]=Gt[he]=!1;var Gm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Hm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},km={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wm=parseFloat,Xm=parseInt,Mh=typeof qo=="object"&&qo&&qo.Object===Object&&qo,qm=typeof self=="object"&&self&&self.Object===Object&&self,fn=Mh||qm||Function("return this")(),xl=e&&!e.nodeType&&e,_r=xl&&!0&&r&&!r.nodeType&&r,Sh=_r&&_r.exports===xl,Ml=Sh&&Mh.process,Zn=function(){try{var k=_r&&_r.require&&_r.require("util").types;return k||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),Eh=Zn&&Zn.isArrayBuffer,yh=Zn&&Zn.isDate,Th=Zn&&Zn.isMap,Ah=Zn&&Zn.isRegExp,wh=Zn&&Zn.isSet,bh=Zn&&Zn.isTypedArray;function Bn(k,te,J){switch(J.length){case 0:return k.call(te);case 1:return k.call(te,J[0]);case 2:return k.call(te,J[0],J[1]);case 3:return k.call(te,J[0],J[1],J[2])}return k.apply(te,J)}function Ym(k,te,J,De){for(var it=-1,bt=k==null?0:k.length;++it<bt;){var nn=k[it];te(De,nn,J(nn),k)}return De}function Kn(k,te){for(var J=-1,De=k==null?0:k.length;++J<De&&te(k[J],J,k)!==!1;);return k}function Zm(k,te){for(var J=k==null?0:k.length;J--&&te(k[J],J,k)!==!1;);return k}function Rh(k,te){for(var J=-1,De=k==null?0:k.length;++J<De;)if(!te(k[J],J,k))return!1;return!0}function Zi(k,te){for(var J=-1,De=k==null?0:k.length,it=0,bt=[];++J<De;){var nn=k[J];te(nn,J,k)&&(bt[it++]=nn)}return bt}function Da(k,te){var J=k==null?0:k.length;return!!J&&qr(k,te,0)>-1}function Sl(k,te,J){for(var De=-1,it=k==null?0:k.length;++De<it;)if(J(te,k[De]))return!0;return!1}function qt(k,te){for(var J=-1,De=k==null?0:k.length,it=Array(De);++J<De;)it[J]=te(k[J],J,k);return it}function Ki(k,te){for(var J=-1,De=te.length,it=k.length;++J<De;)k[it+J]=te[J];return k}function El(k,te,J,De){var it=-1,bt=k==null?0:k.length;for(De&&bt&&(J=k[++it]);++it<bt;)J=te(J,k[it],it,k);return J}function Km(k,te,J,De){var it=k==null?0:k.length;for(De&&it&&(J=k[--it]);it--;)J=te(J,k[it],it,k);return J}function yl(k,te){for(var J=-1,De=k==null?0:k.length;++J<De;)if(te(k[J],J,k))return!0;return!1}var $m=Tl("length");function Jm(k){return k.split("")}function Qm(k){return k.match(Ca)||[]}function Ch(k,te,J){var De;return J(k,function(it,bt,nn){if(te(it,bt,nn))return De=bt,!1}),De}function Ua(k,te,J,De){for(var it=k.length,bt=J+(De?1:-1);De?bt--:++bt<it;)if(te(k[bt],bt,k))return bt;return-1}function qr(k,te,J){return te===te?u_(k,te,J):Ua(k,Lh,J)}function jm(k,te,J,De){for(var it=J-1,bt=k.length;++it<bt;)if(De(k[it],te))return it;return-1}function Lh(k){return k!==k}function Ih(k,te){var J=k==null?0:k.length;return J?wl(k,te)/J:Re}function Tl(k){return function(te){return te==null?t:te[k]}}function Al(k){return function(te){return k==null?t:k[te]}}function Ph(k,te,J,De,it){return it(k,function(bt,nn,Bt){J=De?(De=!1,bt):te(J,bt,nn,Bt)}),J}function e_(k,te){var J=k.length;for(k.sort(te);J--;)k[J]=k[J].value;return k}function wl(k,te){for(var J,De=-1,it=k.length;++De<it;){var bt=te(k[De]);bt!==t&&(J=J===t?bt:J+bt)}return J}function bl(k,te){for(var J=-1,De=Array(k);++J<k;)De[J]=te(J);return De}function t_(k,te){return qt(te,function(J){return[J,k[J]]})}function Dh(k){return k&&k.slice(0,Oh(k)+1).replace(oi,"")}function zn(k){return function(te){return k(te)}}function Rl(k,te){return qt(te,function(J){return k[J]})}function Vs(k,te){return k.has(te)}function Uh(k,te){for(var J=-1,De=k.length;++J<De&&qr(te,k[J],0)>-1;);return J}function Nh(k,te){for(var J=k.length;J--&&qr(te,k[J],0)>-1;);return J}function n_(k,te){for(var J=k.length,De=0;J--;)k[J]===te&&++De;return De}var i_=Al(Gm),r_=Al(Hm);function s_(k){return"\\"+km[k]}function a_(k,te){return k==null?t:k[te]}function Yr(k){return Fm.test(k)}function o_(k){return Om.test(k)}function l_(k){for(var te,J=[];!(te=k.next()).done;)J.push(te.value);return J}function Cl(k){var te=-1,J=Array(k.size);return k.forEach(function(De,it){J[++te]=[it,De]}),J}function Fh(k,te){return function(J){return k(te(J))}}function $i(k,te){for(var J=-1,De=k.length,it=0,bt=[];++J<De;){var nn=k[J];(nn===te||nn===p)&&(k[J]=p,bt[it++]=J)}return bt}function Na(k){var te=-1,J=Array(k.size);return k.forEach(function(De){J[++te]=De}),J}function c_(k){var te=-1,J=Array(k.size);return k.forEach(function(De){J[++te]=[De,De]}),J}function u_(k,te,J){for(var De=J-1,it=k.length;++De<it;)if(k[De]===te)return De;return-1}function h_(k,te,J){for(var De=J+1;De--;)if(k[De]===te)return De;return De}function Zr(k){return Yr(k)?d_(k):$m(k)}function li(k){return Yr(k)?p_(k):Jm(k)}function Oh(k){for(var te=k.length;te--&&Hs.test(k.charAt(te)););return te}var f_=Al(Vm);function d_(k){for(var te=vl.lastIndex=0;vl.test(k);)++te;return te}function p_(k){return k.match(vl)||[]}function m_(k){return k.match(Nm)||[]}var __=function k(te){te=te==null?fn:Kr.defaults(fn.Object(),te,Kr.pick(fn,Bm));var J=te.Array,De=te.Date,it=te.Error,bt=te.Function,nn=te.Math,Bt=te.Object,Ll=te.RegExp,g_=te.String,$n=te.TypeError,Fa=J.prototype,v_=bt.prototype,$r=Bt.prototype,Oa=te["__core-js_shared__"],Ba=v_.toString,Lt=$r.hasOwnProperty,x_=0,Bh=function(){var n=/[^.]+$/.exec(Oa&&Oa.keys&&Oa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),za=$r.toString,M_=Ba.call(Bt),S_=fn._,E_=Ll("^"+Ba.call(Lt).replace(kr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ga=Sh?te.Buffer:t,Ji=te.Symbol,Ha=te.Uint8Array,zh=Ga?Ga.allocUnsafe:t,Va=Fh(Bt.getPrototypeOf,Bt),Gh=Bt.create,Hh=$r.propertyIsEnumerable,ka=Fa.splice,Vh=Ji?Ji.isConcatSpreadable:t,ks=Ji?Ji.iterator:t,gr=Ji?Ji.toStringTag:t,Wa=function(){try{var n=Er(Bt,"defineProperty");return n({},"",{}),n}catch{}}(),y_=te.clearTimeout!==fn.clearTimeout&&te.clearTimeout,T_=De&&De.now!==fn.Date.now&&De.now,A_=te.setTimeout!==fn.setTimeout&&te.setTimeout,Xa=nn.ceil,qa=nn.floor,Il=Bt.getOwnPropertySymbols,w_=Ga?Ga.isBuffer:t,kh=te.isFinite,b_=Fa.join,R_=Fh(Bt.keys,Bt),rn=nn.max,gn=nn.min,C_=De.now,L_=te.parseInt,Wh=nn.random,I_=Fa.reverse,Pl=Er(te,"DataView"),Ws=Er(te,"Map"),Dl=Er(te,"Promise"),Jr=Er(te,"Set"),Xs=Er(te,"WeakMap"),qs=Er(Bt,"create"),Ya=Xs&&new Xs,Qr={},P_=yr(Pl),D_=yr(Ws),U_=yr(Dl),N_=yr(Jr),F_=yr(Xs),Za=Ji?Ji.prototype:t,Ys=Za?Za.valueOf:t,Xh=Za?Za.toString:t;function E(n){if(Kt(n)&&!st(n)&&!(n instanceof vt)){if(n instanceof Jn)return n;if(Lt.call(n,"__wrapped__"))return Yf(n)}return new Jn(n)}var jr=function(){function n(){}return function(s){if(!Zt(s))return{};if(Gh)return Gh(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Ka(){}function Jn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}E.templateSettings={escape:rt,evaluate:Xt,interpolate:en,variable:"",imports:{_:E}},E.prototype=Ka.prototype,E.prototype.constructor=E,Jn.prototype=jr(Ka.prototype),Jn.prototype.constructor=Jn;function vt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Fe,this.__views__=[]}function O_(){var n=new vt(this.__wrapped__);return n.__actions__=In(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=In(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=In(this.__views__),n}function B_(){if(this.__filtered__){var n=new vt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function z_(){var n=this.__wrapped__.value(),s=this.__dir__,l=st(n),d=s<0,M=l?n.length:0,b=Jg(0,M,this.__views__),D=b.start,B=b.end,X=B-D,re=d?B:D-1,ae=this.__iteratees__,fe=ae.length,Me=0,Ge=gn(X,this.__takeCount__);if(!l||!d&&M==X&&Ge==X)return _f(n,this.__actions__);var Ke=[];e:for(;X--&&Me<Ge;){re+=s;for(var lt=-1,$e=n[re];++lt<fe;){var _t=ae[lt],St=_t.iteratee,Vn=_t.type,Tn=St($e);if(Vn==ue)$e=Tn;else if(!Tn){if(Vn==ie)continue e;break e}}Ke[Me++]=$e}return Ke}vt.prototype=jr(Ka.prototype),vt.prototype.constructor=vt;function vr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function G_(){this.__data__=qs?qs(null):{},this.size=0}function H_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function V_(n){var s=this.__data__;if(qs){var l=s[n];return l===f?t:l}return Lt.call(s,n)?s[n]:t}function k_(n){var s=this.__data__;return qs?s[n]!==t:Lt.call(s,n)}function W_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=qs&&s===t?f:s,this}vr.prototype.clear=G_,vr.prototype.delete=H_,vr.prototype.get=V_,vr.prototype.has=k_,vr.prototype.set=W_;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function X_(){this.__data__=[],this.size=0}function q_(n){var s=this.__data__,l=$a(s,n);if(l<0)return!1;var d=s.length-1;return l==d?s.pop():ka.call(s,l,1),--this.size,!0}function Y_(n){var s=this.__data__,l=$a(s,n);return l<0?t:s[l][1]}function Z_(n){return $a(this.__data__,n)>-1}function K_(n,s){var l=this.__data__,d=$a(l,n);return d<0?(++this.size,l.push([n,s])):l[d][1]=s,this}bi.prototype.clear=X_,bi.prototype.delete=q_,bi.prototype.get=Y_,bi.prototype.has=Z_,bi.prototype.set=K_;function Ri(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function $_(){this.size=0,this.__data__={hash:new vr,map:new(Ws||bi),string:new vr}}function J_(n){var s=lo(this,n).delete(n);return this.size-=s?1:0,s}function Q_(n){return lo(this,n).get(n)}function j_(n){return lo(this,n).has(n)}function eg(n,s){var l=lo(this,n),d=l.size;return l.set(n,s),this.size+=l.size==d?0:1,this}Ri.prototype.clear=$_,Ri.prototype.delete=J_,Ri.prototype.get=Q_,Ri.prototype.has=j_,Ri.prototype.set=eg;function xr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++s<l;)this.add(n[s])}function tg(n){return this.__data__.set(n,f),this}function ng(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=tg,xr.prototype.has=ng;function ci(n){var s=this.__data__=new bi(n);this.size=s.size}function ig(){this.__data__=new bi,this.size=0}function rg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function sg(n){return this.__data__.get(n)}function ag(n){return this.__data__.has(n)}function og(n,s){var l=this.__data__;if(l instanceof bi){var d=l.__data__;if(!Ws||d.length<a-1)return d.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ri(d)}return l.set(n,s),this.size=l.size,this}ci.prototype.clear=ig,ci.prototype.delete=rg,ci.prototype.get=sg,ci.prototype.has=ag,ci.prototype.set=og;function qh(n,s){var l=st(n),d=!l&&Tr(n),M=!l&&!d&&nr(n),b=!l&&!d&&!M&&is(n),D=l||d||M||b,B=D?bl(n.length,g_):[],X=B.length;for(var re in n)(s||Lt.call(n,re))&&!(D&&(re=="length"||M&&(re=="offset"||re=="parent")||b&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||Pi(re,X)))&&B.push(re);return B}function Yh(n){var s=n.length;return s?n[Wl(0,s-1)]:t}function lg(n,s){return co(In(n),Mr(s,0,n.length))}function cg(n){return co(In(n))}function Ul(n,s,l){(l!==t&&!ui(n[s],l)||l===t&&!(s in n))&&Ci(n,s,l)}function Zs(n,s,l){var d=n[s];(!(Lt.call(n,s)&&ui(d,l))||l===t&&!(s in n))&&Ci(n,s,l)}function $a(n,s){for(var l=n.length;l--;)if(ui(n[l][0],s))return l;return-1}function ug(n,s,l,d){return Qi(n,function(M,b,D){s(d,M,l(M),D)}),d}function Zh(n,s){return n&&xi(s,un(s),n)}function hg(n,s){return n&&xi(s,Dn(s),n)}function Ci(n,s,l){s=="__proto__"&&Wa?Wa(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Nl(n,s){for(var l=-1,d=s.length,M=J(d),b=n==null;++l<d;)M[l]=b?t:mc(n,s[l]);return M}function Mr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function Qn(n,s,l,d,M,b){var D,B=s&_,X=s&g,re=s&x;if(l&&(D=M?l(n,d,M,b):l(n)),D!==t)return D;if(!Zt(n))return n;var ae=st(n);if(ae){if(D=jg(n),!B)return In(n,D)}else{var fe=vn(n),Me=fe==It||fe==pt;if(nr(n))return xf(n,B);if(fe==tt||fe==ge||Me&&!M){if(D=X||Me?{}:Bf(n),!B)return X?Vg(n,hg(D,n)):Hg(n,Zh(D,n))}else{if(!Gt[fe])return M?n:{};D=e0(n,fe,B)}}b||(b=new ci);var Ge=b.get(n);if(Ge)return Ge;b.set(n,D),dd(n)?n.forEach(function($e){D.add(Qn($e,s,l,$e,n,b))}):hd(n)&&n.forEach(function($e,_t){D.set(_t,Qn($e,s,l,_t,n,b))});var Ke=re?X?tc:ec:X?Dn:un,lt=ae?t:Ke(n);return Kn(lt||n,function($e,_t){lt&&(_t=$e,$e=n[_t]),Zs(D,_t,Qn($e,s,l,_t,n,b))}),D}function fg(n){var s=un(n);return function(l){return Kh(l,n,s)}}function Kh(n,s,l){var d=l.length;if(n==null)return!d;for(n=Bt(n);d--;){var M=l[d],b=s[M],D=n[M];if(D===t&&!(M in n)||!b(D))return!1}return!0}function $h(n,s,l){if(typeof n!="function")throw new $n(c);return ta(function(){n.apply(t,l)},s)}function Ks(n,s,l,d){var M=-1,b=Da,D=!0,B=n.length,X=[],re=s.length;if(!B)return X;l&&(s=qt(s,zn(l))),d?(b=Sl,D=!1):s.length>=a&&(b=Vs,D=!1,s=new xr(s));e:for(;++M<B;){var ae=n[M],fe=l==null?ae:l(ae);if(ae=d||ae!==0?ae:0,D&&fe===fe){for(var Me=re;Me--;)if(s[Me]===fe)continue e;X.push(ae)}else b(s,fe,d)||X.push(ae)}return X}var Qi=Tf(vi),Jh=Tf(Ol,!0);function dg(n,s){var l=!0;return Qi(n,function(d,M,b){return l=!!s(d,M,b),l}),l}function Ja(n,s,l){for(var d=-1,M=n.length;++d<M;){var b=n[d],D=s(b);if(D!=null&&(B===t?D===D&&!Hn(D):l(D,B)))var B=D,X=b}return X}function pg(n,s,l,d){var M=n.length;for(l=at(l),l<0&&(l=-l>M?0:M+l),d=d===t||d>M?M:at(d),d<0&&(d+=M),d=l>d?0:md(d);l<d;)n[l++]=s;return n}function Qh(n,s){var l=[];return Qi(n,function(d,M,b){s(d,M,b)&&l.push(d)}),l}function dn(n,s,l,d,M){var b=-1,D=n.length;for(l||(l=n0),M||(M=[]);++b<D;){var B=n[b];s>0&&l(B)?s>1?dn(B,s-1,l,d,M):Ki(M,B):d||(M[M.length]=B)}return M}var Fl=Af(),jh=Af(!0);function vi(n,s){return n&&Fl(n,s,un)}function Ol(n,s){return n&&jh(n,s,un)}function Qa(n,s){return Zi(s,function(l){return Di(n[l])})}function Sr(n,s){s=er(s,n);for(var l=0,d=s.length;n!=null&&l<d;)n=n[Mi(s[l++])];return l&&l==d?n:t}function ef(n,s,l){var d=s(n);return st(n)?d:Ki(d,l(n))}function En(n){return n==null?n===t?ce:gt:gr&&gr in Bt(n)?$g(n):c0(n)}function Bl(n,s){return n>s}function mg(n,s){return n!=null&&Lt.call(n,s)}function _g(n,s){return n!=null&&s in Bt(n)}function gg(n,s,l){return n>=gn(s,l)&&n<rn(s,l)}function zl(n,s,l){for(var d=l?Sl:Da,M=n[0].length,b=n.length,D=b,B=J(b),X=1/0,re=[];D--;){var ae=n[D];D&&s&&(ae=qt(ae,zn(s))),X=gn(ae.length,X),B[D]=!l&&(s||M>=120&&ae.length>=120)?new xr(D&&ae):t}ae=n[0];var fe=-1,Me=B[0];e:for(;++fe<M&&re.length<X;){var Ge=ae[fe],Ke=s?s(Ge):Ge;if(Ge=l||Ge!==0?Ge:0,!(Me?Vs(Me,Ke):d(re,Ke,l))){for(D=b;--D;){var lt=B[D];if(!(lt?Vs(lt,Ke):d(n[D],Ke,l)))continue e}Me&&Me.push(Ke),re.push(Ge)}}return re}function vg(n,s,l,d){return vi(n,function(M,b,D){s(d,l(M),b,D)}),d}function $s(n,s,l){s=er(s,n),n=Vf(n,s);var d=n==null?n:n[Mi(ei(s))];return d==null?t:Bn(d,n,l)}function tf(n){return Kt(n)&&En(n)==ge}function xg(n){return Kt(n)&&En(n)==Be}function Mg(n){return Kt(n)&&En(n)==dt}function Js(n,s,l,d,M){return n===s?!0:n==null||s==null||!Kt(n)&&!Kt(s)?n!==n&&s!==s:Sg(n,s,l,d,Js,M)}function Sg(n,s,l,d,M,b){var D=st(n),B=st(s),X=D?Oe:vn(n),re=B?Oe:vn(s);X=X==ge?tt:X,re=re==ge?tt:re;var ae=X==tt,fe=re==tt,Me=X==re;if(Me&&nr(n)){if(!nr(s))return!1;D=!0,ae=!1}if(Me&&!ae)return b||(b=new ci),D||is(n)?Nf(n,s,l,d,M,b):Zg(n,s,X,l,d,M,b);if(!(l&y)){var Ge=ae&&Lt.call(n,"__wrapped__"),Ke=fe&&Lt.call(s,"__wrapped__");if(Ge||Ke){var lt=Ge?n.value():n,$e=Ke?s.value():s;return b||(b=new ci),M(lt,$e,l,d,b)}}return Me?(b||(b=new ci),Kg(n,s,l,d,M,b)):!1}function Eg(n){return Kt(n)&&vn(n)==O}function Gl(n,s,l,d){var M=l.length,b=M,D=!d;if(n==null)return!b;for(n=Bt(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<b;){B=l[M];var X=B[0],re=n[X],ae=B[1];if(D&&B[2]){if(re===t&&!(X in n))return!1}else{var fe=new ci;if(d)var Me=d(re,ae,X,n,s,fe);if(!(Me===t?Js(ae,re,y|w,d,fe):Me))return!1}}return!0}function nf(n){if(!Zt(n)||r0(n))return!1;var s=Di(n)?E_:ml;return s.test(yr(n))}function yg(n){return Kt(n)&&En(n)==ze}function Tg(n){return Kt(n)&&vn(n)==P}function Ag(n){return Kt(n)&&_o(n.length)&&!!kt[En(n)]}function rf(n){return typeof n=="function"?n:n==null?Un:typeof n=="object"?st(n)?of(n[0],n[1]):af(n):wd(n)}function Hl(n){if(!ea(n))return R_(n);var s=[];for(var l in Bt(n))Lt.call(n,l)&&l!="constructor"&&s.push(l);return s}function wg(n){if(!Zt(n))return l0(n);var s=ea(n),l=[];for(var d in n)d=="constructor"&&(s||!Lt.call(n,d))||l.push(d);return l}function Vl(n,s){return n<s}function sf(n,s){var l=-1,d=Pn(n)?J(n.length):[];return Qi(n,function(M,b,D){d[++l]=s(M,b,D)}),d}function af(n){var s=ic(n);return s.length==1&&s[0][2]?Gf(s[0][0],s[0][1]):function(l){return l===n||Gl(l,n,s)}}function of(n,s){return sc(n)&&zf(s)?Gf(Mi(n),s):function(l){var d=mc(l,n);return d===t&&d===s?_c(l,n):Js(s,d,y|w)}}function ja(n,s,l,d,M){n!==s&&Fl(s,function(b,D){if(M||(M=new ci),Zt(b))bg(n,s,D,l,ja,d,M);else{var B=d?d(oc(n,D),b,D+"",n,s,M):t;B===t&&(B=b),Ul(n,D,B)}},Dn)}function bg(n,s,l,d,M,b,D){var B=oc(n,l),X=oc(s,l),re=D.get(X);if(re){Ul(n,l,re);return}var ae=b?b(B,X,l+"",n,s,D):t,fe=ae===t;if(fe){var Me=st(X),Ge=!Me&&nr(X),Ke=!Me&&!Ge&&is(X);ae=X,Me||Ge||Ke?st(B)?ae=B:$t(B)?ae=In(B):Ge?(fe=!1,ae=xf(X,!0)):Ke?(fe=!1,ae=Mf(X,!0)):ae=[]:na(X)||Tr(X)?(ae=B,Tr(B)?ae=_d(B):(!Zt(B)||Di(B))&&(ae=Bf(X))):fe=!1}fe&&(D.set(X,ae),M(ae,X,d,b,D),D.delete(X)),Ul(n,l,ae)}function lf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Pi(s,l)?n[s]:t}function cf(n,s,l){s.length?s=qt(s,function(b){return st(b)?function(D){return Sr(D,b.length===1?b[0]:b)}:b}):s=[Un];var d=-1;s=qt(s,zn(Ze()));var M=sf(n,function(b,D,B){var X=qt(s,function(re){return re(b)});return{criteria:X,index:++d,value:b}});return e_(M,function(b,D){return Gg(b,D,l)})}function Rg(n,s){return uf(n,s,function(l,d){return _c(n,d)})}function uf(n,s,l){for(var d=-1,M=s.length,b={};++d<M;){var D=s[d],B=Sr(n,D);l(B,D)&&Qs(b,er(D,n),B)}return b}function Cg(n){return function(s){return Sr(s,n)}}function kl(n,s,l,d){var M=d?jm:qr,b=-1,D=s.length,B=n;for(n===s&&(s=In(s)),l&&(B=qt(n,zn(l)));++b<D;)for(var X=0,re=s[b],ae=l?l(re):re;(X=M(B,ae,X,d))>-1;)B!==n&&ka.call(B,X,1),ka.call(n,X,1);return n}function hf(n,s){for(var l=n?s.length:0,d=l-1;l--;){var M=s[l];if(l==d||M!==b){var b=M;Pi(M)?ka.call(n,M,1):Yl(n,M)}}return n}function Wl(n,s){return n+qa(Wh()*(s-n+1))}function Lg(n,s,l,d){for(var M=-1,b=rn(Xa((s-n)/(l||1)),0),D=J(b);b--;)D[d?b:++M]=n,n+=l;return D}function Xl(n,s){var l="";if(!n||s<1||s>j)return l;do s%2&&(l+=n),s=qa(s/2),s&&(n+=n);while(s);return l}function ht(n,s){return lc(Hf(n,s,Un),n+"")}function Ig(n){return Yh(rs(n))}function Pg(n,s){var l=rs(n);return co(l,Mr(s,0,l.length))}function Qs(n,s,l,d){if(!Zt(n))return n;s=er(s,n);for(var M=-1,b=s.length,D=b-1,B=n;B!=null&&++M<b;){var X=Mi(s[M]),re=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=D){var ae=B[X];re=d?d(ae,X,B):t,re===t&&(re=Zt(ae)?ae:Pi(s[M+1])?[]:{})}Zs(B,X,re),B=B[X]}return n}var ff=Ya?function(n,s){return Ya.set(n,s),n}:Un,Dg=Wa?function(n,s){return Wa(n,"toString",{configurable:!0,enumerable:!1,value:vc(s),writable:!0})}:Un;function Ug(n){return co(rs(n))}function jn(n,s,l){var d=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var b=J(M);++d<M;)b[d]=n[d+s];return b}function Ng(n,s){var l;return Qi(n,function(d,M,b){return l=s(d,M,b),!l}),!!l}function eo(n,s,l){var d=0,M=n==null?d:n.length;if(typeof s=="number"&&s===s&&M<=Ct){for(;d<M;){var b=d+M>>>1,D=n[b];D!==null&&!Hn(D)&&(l?D<=s:D<s)?d=b+1:M=b}return M}return ql(n,s,Un,l)}function ql(n,s,l,d){var M=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var D=s!==s,B=s===null,X=Hn(s),re=s===t;M<b;){var ae=qa((M+b)/2),fe=l(n[ae]),Me=fe!==t,Ge=fe===null,Ke=fe===fe,lt=Hn(fe);if(D)var $e=d||Ke;else re?$e=Ke&&(d||Me):B?$e=Ke&&Me&&(d||!Ge):X?$e=Ke&&Me&&!Ge&&(d||!lt):Ge||lt?$e=!1:$e=d?fe<=s:fe<s;$e?M=ae+1:b=ae}return gn(b,ut)}function df(n,s){for(var l=-1,d=n.length,M=0,b=[];++l<d;){var D=n[l],B=s?s(D):D;if(!l||!ui(B,X)){var X=B;b[M++]=D===0?0:D}}return b}function pf(n){return typeof n=="number"?n:Hn(n)?Re:+n}function Gn(n){if(typeof n=="string")return n;if(st(n))return qt(n,Gn)+"";if(Hn(n))return Xh?Xh.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function ji(n,s,l){var d=-1,M=Da,b=n.length,D=!0,B=[],X=B;if(l)D=!1,M=Sl;else if(b>=a){var re=s?null:qg(n);if(re)return Na(re);D=!1,M=Vs,X=new xr}else X=s?[]:B;e:for(;++d<b;){var ae=n[d],fe=s?s(ae):ae;if(ae=l||ae!==0?ae:0,D&&fe===fe){for(var Me=X.length;Me--;)if(X[Me]===fe)continue e;s&&X.push(fe),B.push(ae)}else M(X,fe,l)||(X!==B&&X.push(fe),B.push(ae))}return B}function Yl(n,s){return s=er(s,n),n=Vf(n,s),n==null||delete n[Mi(ei(s))]}function mf(n,s,l,d){return Qs(n,s,l(Sr(n,s)),d)}function to(n,s,l,d){for(var M=n.length,b=d?M:-1;(d?b--:++b<M)&&s(n[b],b,n););return l?jn(n,d?0:b,d?b+1:M):jn(n,d?b+1:0,d?M:b)}function _f(n,s){var l=n;return l instanceof vt&&(l=l.value()),El(s,function(d,M){return M.func.apply(M.thisArg,Ki([d],M.args))},l)}function Zl(n,s,l){var d=n.length;if(d<2)return d?ji(n[0]):[];for(var M=-1,b=J(d);++M<d;)for(var D=n[M],B=-1;++B<d;)B!=M&&(b[M]=Ks(b[M]||D,n[B],s,l));return ji(dn(b,1),s,l)}function gf(n,s,l){for(var d=-1,M=n.length,b=s.length,D={};++d<M;){var B=d<b?s[d]:t;l(D,n[d],B)}return D}function Kl(n){return $t(n)?n:[]}function $l(n){return typeof n=="function"?n:Un}function er(n,s){return st(n)?n:sc(n,s)?[n]:qf(Rt(n))}var Fg=ht;function tr(n,s,l){var d=n.length;return l=l===t?d:l,!s&&l>=d?n:jn(n,s,l)}var vf=y_||function(n){return fn.clearTimeout(n)};function xf(n,s){if(s)return n.slice();var l=n.length,d=zh?zh(l):new n.constructor(l);return n.copy(d),d}function Jl(n){var s=new n.constructor(n.byteLength);return new Ha(s).set(new Ha(n)),s}function Og(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Bg(n){var s=new n.constructor(n.source,Pa.exec(n));return s.lastIndex=n.lastIndex,s}function zg(n){return Ys?Bt(Ys.call(n)):{}}function Mf(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Sf(n,s){if(n!==s){var l=n!==t,d=n===null,M=n===n,b=Hn(n),D=s!==t,B=s===null,X=s===s,re=Hn(s);if(!B&&!re&&!b&&n>s||b&&D&&X&&!B&&!re||d&&D&&X||!l&&X||!M)return 1;if(!d&&!b&&!re&&n<s||re&&l&&M&&!d&&!b||B&&l&&M||!D&&M||!X)return-1}return 0}function Gg(n,s,l){for(var d=-1,M=n.criteria,b=s.criteria,D=M.length,B=l.length;++d<D;){var X=Sf(M[d],b[d]);if(X){if(d>=B)return X;var re=l[d];return X*(re=="desc"?-1:1)}}return n.index-s.index}function Ef(n,s,l,d){for(var M=-1,b=n.length,D=l.length,B=-1,X=s.length,re=rn(b-D,0),ae=J(X+re),fe=!d;++B<X;)ae[B]=s[B];for(;++M<D;)(fe||M<b)&&(ae[l[M]]=n[M]);for(;re--;)ae[B++]=n[M++];return ae}function yf(n,s,l,d){for(var M=-1,b=n.length,D=-1,B=l.length,X=-1,re=s.length,ae=rn(b-B,0),fe=J(ae+re),Me=!d;++M<ae;)fe[M]=n[M];for(var Ge=M;++X<re;)fe[Ge+X]=s[X];for(;++D<B;)(Me||M<b)&&(fe[Ge+l[D]]=n[M++]);return fe}function In(n,s){var l=-1,d=n.length;for(s||(s=J(d));++l<d;)s[l]=n[l];return s}function xi(n,s,l,d){var M=!l;l||(l={});for(var b=-1,D=s.length;++b<D;){var B=s[b],X=d?d(l[B],n[B],B,l,n):t;X===t&&(X=n[B]),M?Ci(l,B,X):Zs(l,B,X)}return l}function Hg(n,s){return xi(n,rc(n),s)}function Vg(n,s){return xi(n,Ff(n),s)}function no(n,s){return function(l,d){var M=st(l)?Ym:ug,b=s?s():{};return M(l,n,Ze(d,2),b)}}function es(n){return ht(function(s,l){var d=-1,M=l.length,b=M>1?l[M-1]:t,D=M>2?l[2]:t;for(b=n.length>3&&typeof b=="function"?(M--,b):t,D&&yn(l[0],l[1],D)&&(b=M<3?t:b,M=1),s=Bt(s);++d<M;){var B=l[d];B&&n(s,B,d,b)}return s})}function Tf(n,s){return function(l,d){if(l==null)return l;if(!Pn(l))return n(l,d);for(var M=l.length,b=s?M:-1,D=Bt(l);(s?b--:++b<M)&&d(D[b],b,D)!==!1;);return l}}function Af(n){return function(s,l,d){for(var M=-1,b=Bt(s),D=d(s),B=D.length;B--;){var X=D[n?B:++M];if(l(b[X],X,b)===!1)break}return s}}function kg(n,s,l){var d=s&v,M=js(n);function b(){var D=this&&this!==fn&&this instanceof b?M:n;return D.apply(d?l:this,arguments)}return b}function wf(n){return function(s){s=Rt(s);var l=Yr(s)?li(s):t,d=l?l[0]:s.charAt(0),M=l?tr(l,1).join(""):s.slice(1);return d[n]()+M}}function ts(n){return function(s){return El(Td(yd(s).replace(Dm,"")),n,"")}}function js(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=jr(n.prototype),d=n.apply(l,s);return Zt(d)?d:l}}function Wg(n,s,l){var d=js(n);function M(){for(var b=arguments.length,D=J(b),B=b,X=ns(M);B--;)D[B]=arguments[B];var re=b<3&&D[0]!==X&&D[b-1]!==X?[]:$i(D,X);if(b-=re.length,b<l)return If(n,s,io,M.placeholder,t,D,re,t,t,l-b);var ae=this&&this!==fn&&this instanceof M?d:n;return Bn(ae,this,D)}return M}function bf(n){return function(s,l,d){var M=Bt(s);if(!Pn(s)){var b=Ze(l,3);s=un(s),l=function(B){return b(M[B],B,M)}}var D=n(s,l,d);return D>-1?M[b?s[D]:D]:t}}function Rf(n){return Ii(function(s){var l=s.length,d=l,M=Jn.prototype.thru;for(n&&s.reverse();d--;){var b=s[d];if(typeof b!="function")throw new $n(c);if(M&&!D&&oo(b)=="wrapper")var D=new Jn([],!0)}for(d=D?d:l;++d<l;){b=s[d];var B=oo(b),X=B=="wrapper"?nc(b):t;X&&ac(X[0])&&X[1]==(F|L|G|H)&&!X[4].length&&X[9]==1?D=D[oo(X[0])].apply(D,X[3]):D=b.length==1&&ac(b)?D[B]():D.thru(b)}return function(){var re=arguments,ae=re[0];if(D&&re.length==1&&st(ae))return D.plant(ae).value();for(var fe=0,Me=l?s[fe].apply(this,re):ae;++fe<l;)Me=s[fe].call(this,Me);return Me}})}function io(n,s,l,d,M,b,D,B,X,re){var ae=s&F,fe=s&v,Me=s&m,Ge=s&(L|R),Ke=s&C,lt=Me?t:js(n);function $e(){for(var _t=arguments.length,St=J(_t),Vn=_t;Vn--;)St[Vn]=arguments[Vn];if(Ge)var Tn=ns($e),kn=n_(St,Tn);if(d&&(St=Ef(St,d,M,Ge)),b&&(St=yf(St,b,D,Ge)),_t-=kn,Ge&&_t<re){var Jt=$i(St,Tn);return If(n,s,io,$e.placeholder,l,St,Jt,B,X,re-_t)}var hi=fe?l:this,Ni=Me?hi[n]:n;return _t=St.length,B?St=u0(St,B):Ke&&_t>1&&St.reverse(),ae&&X<_t&&(St.length=X),this&&this!==fn&&this instanceof $e&&(Ni=lt||js(Ni)),Ni.apply(hi,St)}return $e}function Cf(n,s){return function(l,d){return vg(l,n,s(d),{})}}function ro(n,s){return function(l,d){var M;if(l===t&&d===t)return s;if(l!==t&&(M=l),d!==t){if(M===t)return d;typeof l=="string"||typeof d=="string"?(l=Gn(l),d=Gn(d)):(l=pf(l),d=pf(d)),M=n(l,d)}return M}}function Ql(n){return Ii(function(s){return s=qt(s,zn(Ze())),ht(function(l){var d=this;return n(s,function(M){return Bn(M,d,l)})})})}function so(n,s){s=s===t?" ":Gn(s);var l=s.length;if(l<2)return l?Xl(s,n):s;var d=Xl(s,Xa(n/Zr(s)));return Yr(s)?tr(li(d),0,n).join(""):d.slice(0,n)}function Xg(n,s,l,d){var M=s&v,b=js(n);function D(){for(var B=-1,X=arguments.length,re=-1,ae=d.length,fe=J(ae+X),Me=this&&this!==fn&&this instanceof D?b:n;++re<ae;)fe[re]=d[re];for(;X--;)fe[re++]=arguments[++B];return Bn(Me,M?l:this,fe)}return D}function Lf(n){return function(s,l,d){return d&&typeof d!="number"&&yn(s,l,d)&&(l=d=t),s=Ui(s),l===t?(l=s,s=0):l=Ui(l),d=d===t?s<l?1:-1:Ui(d),Lg(s,l,d,n)}}function ao(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ti(s),l=ti(l)),n(s,l)}}function If(n,s,l,d,M,b,D,B,X,re){var ae=s&L,fe=ae?D:t,Me=ae?t:D,Ge=ae?b:t,Ke=ae?t:b;s|=ae?G:N,s&=~(ae?N:G),s&I||(s&=-4);var lt=[n,s,M,Ge,fe,Ke,Me,B,X,re],$e=l.apply(t,lt);return ac(n)&&kf($e,lt),$e.placeholder=d,Wf($e,n,s)}function jl(n){var s=nn[n];return function(l,d){if(l=ti(l),d=d==null?0:gn(at(d),292),d&&kh(l)){var M=(Rt(l)+"e").split("e"),b=s(M[0]+"e"+(+M[1]+d));return M=(Rt(b)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return s(l)}}var qg=Jr&&1/Na(new Jr([,-0]))[1]==de?function(n){return new Jr(n)}:Sc;function Pf(n){return function(s){var l=vn(s);return l==O?Cl(s):l==P?c_(s):t_(s,n(s))}}function Li(n,s,l,d,M,b,D,B){var X=s&m;if(!X&&typeof n!="function")throw new $n(c);var re=d?d.length:0;if(re||(s&=-97,d=M=t),D=D===t?D:rn(at(D),0),B=B===t?B:at(B),re-=M?M.length:0,s&N){var ae=d,fe=M;d=M=t}var Me=X?t:nc(n),Ge=[n,s,l,d,M,ae,fe,b,D,B];if(Me&&o0(Ge,Me),n=Ge[0],s=Ge[1],l=Ge[2],d=Ge[3],M=Ge[4],B=Ge[9]=Ge[9]===t?X?0:n.length:rn(Ge[9]-re,0),!B&&s&(L|R)&&(s&=-25),!s||s==v)var Ke=kg(n,s,l);else s==L||s==R?Ke=Wg(n,s,B):(s==G||s==(v|G))&&!M.length?Ke=Xg(n,s,l,d):Ke=io.apply(t,Ge);var lt=Me?ff:kf;return Wf(lt(Ke,Ge),n,s)}function Df(n,s,l,d){return n===t||ui(n,$r[l])&&!Lt.call(d,l)?s:n}function Uf(n,s,l,d,M,b){return Zt(n)&&Zt(s)&&(b.set(s,n),ja(n,s,t,Uf,b),b.delete(s)),n}function Yg(n){return na(n)?t:n}function Nf(n,s,l,d,M,b){var D=l&y,B=n.length,X=s.length;if(B!=X&&!(D&&X>B))return!1;var re=b.get(n),ae=b.get(s);if(re&&ae)return re==s&&ae==n;var fe=-1,Me=!0,Ge=l&w?new xr:t;for(b.set(n,s),b.set(s,n);++fe<B;){var Ke=n[fe],lt=s[fe];if(d)var $e=D?d(lt,Ke,fe,s,n,b):d(Ke,lt,fe,n,s,b);if($e!==t){if($e)continue;Me=!1;break}if(Ge){if(!yl(s,function(_t,St){if(!Vs(Ge,St)&&(Ke===_t||M(Ke,_t,l,d,b)))return Ge.push(St)})){Me=!1;break}}else if(!(Ke===lt||M(Ke,lt,l,d,b))){Me=!1;break}}return b.delete(n),b.delete(s),Me}function Zg(n,s,l,d,M,b,D){switch(l){case xe:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Be:return!(n.byteLength!=s.byteLength||!b(new Ha(n),new Ha(s)));case We:case dt:case on:return ui(+n,+s);case zt:return n.name==s.name&&n.message==s.message;case ze:case S:return n==s+"";case O:var B=Cl;case P:var X=d&y;if(B||(B=Na),n.size!=s.size&&!X)return!1;var re=D.get(n);if(re)return re==s;d|=w,D.set(n,s);var ae=Nf(B(n),B(s),d,M,b,D);return D.delete(n),ae;case Y:if(Ys)return Ys.call(n)==Ys.call(s)}return!1}function Kg(n,s,l,d,M,b){var D=l&y,B=ec(n),X=B.length,re=ec(s),ae=re.length;if(X!=ae&&!D)return!1;for(var fe=X;fe--;){var Me=B[fe];if(!(D?Me in s:Lt.call(s,Me)))return!1}var Ge=b.get(n),Ke=b.get(s);if(Ge&&Ke)return Ge==s&&Ke==n;var lt=!0;b.set(n,s),b.set(s,n);for(var $e=D;++fe<X;){Me=B[fe];var _t=n[Me],St=s[Me];if(d)var Vn=D?d(St,_t,Me,s,n,b):d(_t,St,Me,n,s,b);if(!(Vn===t?_t===St||M(_t,St,l,d,b):Vn)){lt=!1;break}$e||($e=Me=="constructor")}if(lt&&!$e){var Tn=n.constructor,kn=s.constructor;Tn!=kn&&"constructor"in n&&"constructor"in s&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof kn=="function"&&kn instanceof kn)&&(lt=!1)}return b.delete(n),b.delete(s),lt}function Ii(n){return lc(Hf(n,t,$f),n+"")}function ec(n){return ef(n,un,rc)}function tc(n){return ef(n,Dn,Ff)}var nc=Ya?function(n){return Ya.get(n)}:Sc;function oo(n){for(var s=n.name+"",l=Qr[s],d=Lt.call(Qr,s)?l.length:0;d--;){var M=l[d],b=M.func;if(b==null||b==n)return M.name}return s}function ns(n){var s=Lt.call(E,"placeholder")?E:n;return s.placeholder}function Ze(){var n=E.iteratee||xc;return n=n===xc?rf:n,arguments.length?n(arguments[0],arguments[1]):n}function lo(n,s){var l=n.__data__;return i0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function ic(n){for(var s=un(n),l=s.length;l--;){var d=s[l],M=n[d];s[l]=[d,M,zf(M)]}return s}function Er(n,s){var l=a_(n,s);return nf(l)?l:t}function $g(n){var s=Lt.call(n,gr),l=n[gr];try{n[gr]=t;var d=!0}catch{}var M=za.call(n);return d&&(s?n[gr]=l:delete n[gr]),M}var rc=Il?function(n){return n==null?[]:(n=Bt(n),Zi(Il(n),function(s){return Hh.call(n,s)}))}:Ec,Ff=Il?function(n){for(var s=[];n;)Ki(s,rc(n)),n=Va(n);return s}:Ec,vn=En;(Pl&&vn(new Pl(new ArrayBuffer(1)))!=xe||Ws&&vn(new Ws)!=O||Dl&&vn(Dl.resolve())!=Ve||Jr&&vn(new Jr)!=P||Xs&&vn(new Xs)!=he)&&(vn=function(n){var s=En(n),l=s==tt?n.constructor:t,d=l?yr(l):"";if(d)switch(d){case P_:return xe;case D_:return O;case U_:return Ve;case N_:return P;case F_:return he}return s});function Jg(n,s,l){for(var d=-1,M=l.length;++d<M;){var b=l[d],D=b.size;switch(b.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=gn(s,n+D);break;case"takeRight":n=rn(n,s-D);break}}return{start:n,end:s}}function Qg(n){var s=n.match(Ra);return s?s[1].split(Wr):[]}function Of(n,s,l){s=er(s,n);for(var d=-1,M=s.length,b=!1;++d<M;){var D=Mi(s[d]);if(!(b=n!=null&&l(n,D)))break;n=n[D]}return b||++d!=M?b:(M=n==null?0:n.length,!!M&&_o(M)&&Pi(D,M)&&(st(n)||Tr(n)))}function jg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Lt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Bf(n){return typeof n.constructor=="function"&&!ea(n)?jr(Va(n)):{}}function e0(n,s,l){var d=n.constructor;switch(s){case Be:return Jl(n);case We:case dt:return new d(+n);case xe:return Og(n,l);case Ce:case mt:case me:case Ie:case qe:case Je:case Pe:case ft:case nt:return Mf(n,l);case O:return new d;case on:case S:return new d(n);case ze:return Bg(n);case P:return new d;case Y:return zg(n)}}function t0(n,s){var l=s.length;if(!l)return n;var d=l-1;return s[d]=(l>1?"& ":"")+s[d],s=s.join(l>2?", ":" "),n.replace(ba,`{
/* [wrapped with `+s+`] */
`)}function n0(n){return st(n)||Tr(n)||!!(Vh&&n&&n[Vh])}function Pi(n,s){var l=typeof n;return s=s??j,!!s&&(l=="number"||l!="symbol"&&gl.test(n))&&n>-1&&n%1==0&&n<s}function yn(n,s,l){if(!Zt(l))return!1;var d=typeof s;return(d=="number"?Pn(l)&&Pi(s,l.length):d=="string"&&s in l)?ui(l[s],n):!1}function sc(n,s){if(st(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Hn(n)?!0:On.test(n)||!wt.test(n)||s!=null&&n in Bt(s)}function i0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ac(n){var s=oo(n),l=E[s];if(typeof l!="function"||!(s in vt.prototype))return!1;if(n===l)return!0;var d=nc(l);return!!d&&n===d[0]}function r0(n){return!!Bh&&Bh in n}var s0=Oa?Di:yc;function ea(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||$r;return n===l}function zf(n){return n===n&&!Zt(n)}function Gf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Bt(l))}}function a0(n){var s=po(n,function(d){return l.size===h&&l.clear(),d}),l=s.cache;return s}function o0(n,s){var l=n[1],d=s[1],M=l|d,b=M<(v|m|F),D=d==F&&l==L||d==F&&l==H&&n[7].length<=s[8]||d==(F|H)&&s[7].length<=s[8]&&l==L;if(!(b||D))return n;d&v&&(n[2]=s[2],M|=l&v?0:I);var B=s[3];if(B){var X=n[3];n[3]=X?Ef(X,B,s[4]):B,n[4]=X?$i(n[3],p):s[4]}return B=s[5],B&&(X=n[5],n[5]=X?yf(X,B,s[6]):B,n[6]=X?$i(n[5],p):s[6]),B=s[7],B&&(n[7]=B),d&F&&(n[8]=n[8]==null?s[8]:gn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function l0(n){var s=[];if(n!=null)for(var l in Bt(n))s.push(l);return s}function c0(n){return za.call(n)}function Hf(n,s,l){return s=rn(s===t?n.length-1:s,0),function(){for(var d=arguments,M=-1,b=rn(d.length-s,0),D=J(b);++M<b;)D[M]=d[s+M];M=-1;for(var B=J(s+1);++M<s;)B[M]=d[M];return B[s]=l(D),Bn(n,this,B)}}function Vf(n,s){return s.length<2?n:Sr(n,jn(s,0,-1))}function u0(n,s){for(var l=n.length,d=gn(s.length,l),M=In(n);d--;){var b=s[d];n[d]=Pi(b,l)?M[b]:t}return n}function oc(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var kf=Xf(ff),ta=A_||function(n,s){return fn.setTimeout(n,s)},lc=Xf(Dg);function Wf(n,s,l){var d=s+"";return lc(n,t0(d,h0(Qg(d),l)))}function Xf(n){var s=0,l=0;return function(){var d=C_(),M=$-(d-l);if(l=d,M>0){if(++s>=Q)return arguments[0]}else s=0;return n.apply(t,arguments)}}function co(n,s){var l=-1,d=n.length,M=d-1;for(s=s===t?d:s;++l<s;){var b=Wl(l,M),D=n[b];n[b]=n[l],n[l]=D}return n.length=s,n}var qf=a0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(ai,function(l,d,M,b){s.push(M?b.replace(La,"$1"):d||l)}),s});function Mi(n){if(typeof n=="string"||Hn(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function yr(n){if(n!=null){try{return Ba.call(n)}catch{}try{return n+""}catch{}}return""}function h0(n,s){return Kn(oe,function(l){var d="_."+l[0];s&l[1]&&!Da(n,d)&&n.push(d)}),n.sort()}function Yf(n){if(n instanceof vt)return n.clone();var s=new Jn(n.__wrapped__,n.__chain__);return s.__actions__=In(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function f0(n,s,l){(l?yn(n,s,l):s===t)?s=1:s=rn(at(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var M=0,b=0,D=J(Xa(d/s));M<d;)D[b++]=jn(n,M,M+=s);return D}function d0(n){for(var s=-1,l=n==null?0:n.length,d=0,M=[];++s<l;){var b=n[s];b&&(M[d++]=b)}return M}function p0(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),l=arguments[0],d=n;d--;)s[d-1]=arguments[d];return Ki(st(l)?In(l):[l],dn(s,1))}var m0=ht(function(n,s){return $t(n)?Ks(n,dn(s,1,$t,!0)):[]}),_0=ht(function(n,s){var l=ei(s);return $t(l)&&(l=t),$t(n)?Ks(n,dn(s,1,$t,!0),Ze(l,2)):[]}),g0=ht(function(n,s){var l=ei(s);return $t(l)&&(l=t),$t(n)?Ks(n,dn(s,1,$t,!0),t,l):[]});function v0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),jn(n,s<0?0:s,d)):[]}function x0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),s=d-s,jn(n,0,s<0?0:s)):[]}function M0(n,s){return n&&n.length?to(n,Ze(s,3),!0,!0):[]}function S0(n,s){return n&&n.length?to(n,Ze(s,3),!0):[]}function E0(n,s,l,d){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&yn(n,s,l)&&(l=0,d=M),pg(n,s,l,d)):[]}function Zf(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:at(l);return M<0&&(M=rn(d+M,0)),Ua(n,Ze(s,3),M)}function Kf(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d-1;return l!==t&&(M=at(l),M=l<0?rn(d+M,0):gn(M,d-1)),Ua(n,Ze(s,3),M,!0)}function $f(n){var s=n==null?0:n.length;return s?dn(n,1):[]}function y0(n){var s=n==null?0:n.length;return s?dn(n,de):[]}function T0(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:at(s),dn(n,s)):[]}function A0(n){for(var s=-1,l=n==null?0:n.length,d={};++s<l;){var M=n[s];d[M[0]]=M[1]}return d}function Jf(n){return n&&n.length?n[0]:t}function w0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:at(l);return M<0&&(M=rn(d+M,0)),qr(n,s,M)}function b0(n){var s=n==null?0:n.length;return s?jn(n,0,-1):[]}var R0=ht(function(n){var s=qt(n,Kl);return s.length&&s[0]===n[0]?zl(s):[]}),C0=ht(function(n){var s=ei(n),l=qt(n,Kl);return s===ei(l)?s=t:l.pop(),l.length&&l[0]===n[0]?zl(l,Ze(s,2)):[]}),L0=ht(function(n){var s=ei(n),l=qt(n,Kl);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?zl(l,t,s):[]});function I0(n,s){return n==null?"":b_.call(n,s)}function ei(n){var s=n==null?0:n.length;return s?n[s-1]:t}function P0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d;return l!==t&&(M=at(l),M=M<0?rn(d+M,0):gn(M,d-1)),s===s?h_(n,s,M):Ua(n,Lh,M,!0)}function D0(n,s){return n&&n.length?lf(n,at(s)):t}var U0=ht(Qf);function Qf(n,s){return n&&n.length&&s&&s.length?kl(n,s):n}function N0(n,s,l){return n&&n.length&&s&&s.length?kl(n,s,Ze(l,2)):n}function F0(n,s,l){return n&&n.length&&s&&s.length?kl(n,s,t,l):n}var O0=Ii(function(n,s){var l=n==null?0:n.length,d=Nl(n,s);return hf(n,qt(s,function(M){return Pi(M,l)?+M:M}).sort(Sf)),d});function B0(n,s){var l=[];if(!(n&&n.length))return l;var d=-1,M=[],b=n.length;for(s=Ze(s,3);++d<b;){var D=n[d];s(D,d,n)&&(l.push(D),M.push(d))}return hf(n,M),l}function cc(n){return n==null?n:I_.call(n)}function z0(n,s,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&yn(n,s,l)?(s=0,l=d):(s=s==null?0:at(s),l=l===t?d:at(l)),jn(n,s,l)):[]}function G0(n,s){return eo(n,s)}function H0(n,s,l){return ql(n,s,Ze(l,2))}function V0(n,s){var l=n==null?0:n.length;if(l){var d=eo(n,s);if(d<l&&ui(n[d],s))return d}return-1}function k0(n,s){return eo(n,s,!0)}function W0(n,s,l){return ql(n,s,Ze(l,2),!0)}function X0(n,s){var l=n==null?0:n.length;if(l){var d=eo(n,s,!0)-1;if(ui(n[d],s))return d}return-1}function q0(n){return n&&n.length?df(n):[]}function Y0(n,s){return n&&n.length?df(n,Ze(s,2)):[]}function Z0(n){var s=n==null?0:n.length;return s?jn(n,1,s):[]}function K0(n,s,l){return n&&n.length?(s=l||s===t?1:at(s),jn(n,0,s<0?0:s)):[]}function $0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===t?1:at(s),s=d-s,jn(n,s<0?0:s,d)):[]}function J0(n,s){return n&&n.length?to(n,Ze(s,3),!1,!0):[]}function Q0(n,s){return n&&n.length?to(n,Ze(s,3)):[]}var j0=ht(function(n){return ji(dn(n,1,$t,!0))}),ev=ht(function(n){var s=ei(n);return $t(s)&&(s=t),ji(dn(n,1,$t,!0),Ze(s,2))}),tv=ht(function(n){var s=ei(n);return s=typeof s=="function"?s:t,ji(dn(n,1,$t,!0),t,s)});function nv(n){return n&&n.length?ji(n):[]}function iv(n,s){return n&&n.length?ji(n,Ze(s,2)):[]}function rv(n,s){return s=typeof s=="function"?s:t,n&&n.length?ji(n,t,s):[]}function uc(n){if(!(n&&n.length))return[];var s=0;return n=Zi(n,function(l){if($t(l))return s=rn(l.length,s),!0}),bl(s,function(l){return qt(n,Tl(l))})}function jf(n,s){if(!(n&&n.length))return[];var l=uc(n);return s==null?l:qt(l,function(d){return Bn(s,t,d)})}var sv=ht(function(n,s){return $t(n)?Ks(n,s):[]}),av=ht(function(n){return Zl(Zi(n,$t))}),ov=ht(function(n){var s=ei(n);return $t(s)&&(s=t),Zl(Zi(n,$t),Ze(s,2))}),lv=ht(function(n){var s=ei(n);return s=typeof s=="function"?s:t,Zl(Zi(n,$t),t,s)}),cv=ht(uc);function uv(n,s){return gf(n||[],s||[],Zs)}function hv(n,s){return gf(n||[],s||[],Qs)}var fv=ht(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,jf(n,l)});function ed(n){var s=E(n);return s.__chain__=!0,s}function dv(n,s){return s(n),n}function uo(n,s){return s(n)}var pv=Ii(function(n){var s=n.length,l=s?n[0]:0,d=this.__wrapped__,M=function(b){return Nl(b,n)};return s>1||this.__actions__.length||!(d instanceof vt)||!Pi(l)?this.thru(M):(d=d.slice(l,+l+(s?1:0)),d.__actions__.push({func:uo,args:[M],thisArg:t}),new Jn(d,this.__chain__).thru(function(b){return s&&!b.length&&b.push(t),b}))});function mv(){return ed(this)}function _v(){return new Jn(this.value(),this.__chain__)}function gv(){this.__values__===t&&(this.__values__=pd(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function vv(){return this}function xv(n){for(var s,l=this;l instanceof Ka;){var d=Yf(l);d.__index__=0,d.__values__=t,s?M.__wrapped__=d:s=d;var M=d;l=l.__wrapped__}return M.__wrapped__=n,s}function Mv(){var n=this.__wrapped__;if(n instanceof vt){var s=n;return this.__actions__.length&&(s=new vt(this)),s=s.reverse(),s.__actions__.push({func:uo,args:[cc],thisArg:t}),new Jn(s,this.__chain__)}return this.thru(cc)}function Sv(){return _f(this.__wrapped__,this.__actions__)}var Ev=no(function(n,s,l){Lt.call(n,l)?++n[l]:Ci(n,l,1)});function yv(n,s,l){var d=st(n)?Rh:dg;return l&&yn(n,s,l)&&(s=t),d(n,Ze(s,3))}function Tv(n,s){var l=st(n)?Zi:Qh;return l(n,Ze(s,3))}var Av=bf(Zf),wv=bf(Kf);function bv(n,s){return dn(ho(n,s),1)}function Rv(n,s){return dn(ho(n,s),de)}function Cv(n,s,l){return l=l===t?1:at(l),dn(ho(n,s),l)}function td(n,s){var l=st(n)?Kn:Qi;return l(n,Ze(s,3))}function nd(n,s){var l=st(n)?Zm:Jh;return l(n,Ze(s,3))}var Lv=no(function(n,s,l){Lt.call(n,l)?n[l].push(s):Ci(n,l,[s])});function Iv(n,s,l,d){n=Pn(n)?n:rs(n),l=l&&!d?at(l):0;var M=n.length;return l<0&&(l=rn(M+l,0)),go(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&qr(n,s,l)>-1}var Pv=ht(function(n,s,l){var d=-1,M=typeof s=="function",b=Pn(n)?J(n.length):[];return Qi(n,function(D){b[++d]=M?Bn(s,D,l):$s(D,s,l)}),b}),Dv=no(function(n,s,l){Ci(n,l,s)});function ho(n,s){var l=st(n)?qt:sf;return l(n,Ze(s,3))}function Uv(n,s,l,d){return n==null?[]:(st(s)||(s=s==null?[]:[s]),l=d?t:l,st(l)||(l=l==null?[]:[l]),cf(n,s,l))}var Nv=no(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function Fv(n,s,l){var d=st(n)?El:Ph,M=arguments.length<3;return d(n,Ze(s,4),l,M,Qi)}function Ov(n,s,l){var d=st(n)?Km:Ph,M=arguments.length<3;return d(n,Ze(s,4),l,M,Jh)}function Bv(n,s){var l=st(n)?Zi:Qh;return l(n,mo(Ze(s,3)))}function zv(n){var s=st(n)?Yh:Ig;return s(n)}function Gv(n,s,l){(l?yn(n,s,l):s===t)?s=1:s=at(s);var d=st(n)?lg:Pg;return d(n,s)}function Hv(n){var s=st(n)?cg:Ug;return s(n)}function Vv(n){if(n==null)return 0;if(Pn(n))return go(n)?Zr(n):n.length;var s=vn(n);return s==O||s==P?n.size:Hl(n).length}function kv(n,s,l){var d=st(n)?yl:Ng;return l&&yn(n,s,l)&&(s=t),d(n,Ze(s,3))}var Wv=ht(function(n,s){if(n==null)return[];var l=s.length;return l>1&&yn(n,s[0],s[1])?s=[]:l>2&&yn(s[0],s[1],s[2])&&(s=[s[0]]),cf(n,dn(s,1),[])}),fo=T_||function(){return fn.Date.now()};function Xv(n,s){if(typeof s!="function")throw new $n(c);return n=at(n),function(){if(--n<1)return s.apply(this,arguments)}}function id(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Li(n,F,t,t,t,t,s)}function rd(n,s){var l;if(typeof s!="function")throw new $n(c);return n=at(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var hc=ht(function(n,s,l){var d=v;if(l.length){var M=$i(l,ns(hc));d|=G}return Li(n,d,s,l,M)}),sd=ht(function(n,s,l){var d=v|m;if(l.length){var M=$i(l,ns(sd));d|=G}return Li(s,d,n,l,M)});function ad(n,s,l){s=l?t:s;var d=Li(n,L,t,t,t,t,t,s);return d.placeholder=ad.placeholder,d}function od(n,s,l){s=l?t:s;var d=Li(n,R,t,t,t,t,t,s);return d.placeholder=od.placeholder,d}function ld(n,s,l){var d,M,b,D,B,X,re=0,ae=!1,fe=!1,Me=!0;if(typeof n!="function")throw new $n(c);s=ti(s)||0,Zt(l)&&(ae=!!l.leading,fe="maxWait"in l,b=fe?rn(ti(l.maxWait)||0,s):b,Me="trailing"in l?!!l.trailing:Me);function Ge(Jt){var hi=d,Ni=M;return d=M=t,re=Jt,D=n.apply(Ni,hi),D}function Ke(Jt){return re=Jt,B=ta(_t,s),ae?Ge(Jt):D}function lt(Jt){var hi=Jt-X,Ni=Jt-re,bd=s-hi;return fe?gn(bd,b-Ni):bd}function $e(Jt){var hi=Jt-X,Ni=Jt-re;return X===t||hi>=s||hi<0||fe&&Ni>=b}function _t(){var Jt=fo();if($e(Jt))return St(Jt);B=ta(_t,lt(Jt))}function St(Jt){return B=t,Me&&d?Ge(Jt):(d=M=t,D)}function Vn(){B!==t&&vf(B),re=0,d=X=M=B=t}function Tn(){return B===t?D:St(fo())}function kn(){var Jt=fo(),hi=$e(Jt);if(d=arguments,M=this,X=Jt,hi){if(B===t)return Ke(X);if(fe)return vf(B),B=ta(_t,s),Ge(X)}return B===t&&(B=ta(_t,s)),D}return kn.cancel=Vn,kn.flush=Tn,kn}var qv=ht(function(n,s){return $h(n,1,s)}),Yv=ht(function(n,s,l){return $h(n,ti(s)||0,l)});function Zv(n){return Li(n,C)}function po(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new $n(c);var l=function(){var d=arguments,M=s?s.apply(this,d):d[0],b=l.cache;if(b.has(M))return b.get(M);var D=n.apply(this,d);return l.cache=b.set(M,D)||b,D};return l.cache=new(po.Cache||Ri),l}po.Cache=Ri;function mo(n){if(typeof n!="function")throw new $n(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function Kv(n){return rd(2,n)}var $v=Fg(function(n,s){s=s.length==1&&st(s[0])?qt(s[0],zn(Ze())):qt(dn(s,1),zn(Ze()));var l=s.length;return ht(function(d){for(var M=-1,b=gn(d.length,l);++M<b;)d[M]=s[M].call(this,d[M]);return Bn(n,this,d)})}),fc=ht(function(n,s){var l=$i(s,ns(fc));return Li(n,G,t,s,l)}),cd=ht(function(n,s){var l=$i(s,ns(cd));return Li(n,N,t,s,l)}),Jv=Ii(function(n,s){return Li(n,H,t,t,t,s)});function Qv(n,s){if(typeof n!="function")throw new $n(c);return s=s===t?s:at(s),ht(n,s)}function jv(n,s){if(typeof n!="function")throw new $n(c);return s=s==null?0:rn(at(s),0),ht(function(l){var d=l[s],M=tr(l,0,s);return d&&Ki(M,d),Bn(n,this,M)})}function ex(n,s,l){var d=!0,M=!0;if(typeof n!="function")throw new $n(c);return Zt(l)&&(d="leading"in l?!!l.leading:d,M="trailing"in l?!!l.trailing:M),ld(n,s,{leading:d,maxWait:s,trailing:M})}function tx(n){return id(n,1)}function nx(n,s){return fc($l(s),n)}function ix(){if(!arguments.length)return[];var n=arguments[0];return st(n)?n:[n]}function rx(n){return Qn(n,x)}function sx(n,s){return s=typeof s=="function"?s:t,Qn(n,x,s)}function ax(n){return Qn(n,_|x)}function ox(n,s){return s=typeof s=="function"?s:t,Qn(n,_|x,s)}function lx(n,s){return s==null||Kh(n,s,un(s))}function ui(n,s){return n===s||n!==n&&s!==s}var cx=ao(Bl),ux=ao(function(n,s){return n>=s}),Tr=tf(function(){return arguments}())?tf:function(n){return Kt(n)&&Lt.call(n,"callee")&&!Hh.call(n,"callee")},st=J.isArray,hx=Eh?zn(Eh):xg;function Pn(n){return n!=null&&_o(n.length)&&!Di(n)}function $t(n){return Kt(n)&&Pn(n)}function fx(n){return n===!0||n===!1||Kt(n)&&En(n)==We}var nr=w_||yc,dx=yh?zn(yh):Mg;function px(n){return Kt(n)&&n.nodeType===1&&!na(n)}function mx(n){if(n==null)return!0;if(Pn(n)&&(st(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||is(n)||Tr(n)))return!n.length;var s=vn(n);if(s==O||s==P)return!n.size;if(ea(n))return!Hl(n).length;for(var l in n)if(Lt.call(n,l))return!1;return!0}function _x(n,s){return Js(n,s)}function gx(n,s,l){l=typeof l=="function"?l:t;var d=l?l(n,s):t;return d===t?Js(n,s,t,l):!!d}function dc(n){if(!Kt(n))return!1;var s=En(n);return s==zt||s==Qe||typeof n.message=="string"&&typeof n.name=="string"&&!na(n)}function vx(n){return typeof n=="number"&&kh(n)}function Di(n){if(!Zt(n))return!1;var s=En(n);return s==It||s==pt||s==Ae||s==Ft}function ud(n){return typeof n=="number"&&n==at(n)}function _o(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Zt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Kt(n){return n!=null&&typeof n=="object"}var hd=Th?zn(Th):Eg;function xx(n,s){return n===s||Gl(n,s,ic(s))}function Mx(n,s,l){return l=typeof l=="function"?l:t,Gl(n,s,ic(s),l)}function Sx(n){return fd(n)&&n!=+n}function Ex(n){if(s0(n))throw new it(o);return nf(n)}function yx(n){return n===null}function Tx(n){return n==null}function fd(n){return typeof n=="number"||Kt(n)&&En(n)==on}function na(n){if(!Kt(n)||En(n)!=tt)return!1;var s=Va(n);if(s===null)return!0;var l=Lt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ba.call(l)==M_}var pc=Ah?zn(Ah):yg;function Ax(n){return ud(n)&&n>=-9007199254740991&&n<=j}var dd=wh?zn(wh):Tg;function go(n){return typeof n=="string"||!st(n)&&Kt(n)&&En(n)==S}function Hn(n){return typeof n=="symbol"||Kt(n)&&En(n)==Y}var is=bh?zn(bh):Ag;function wx(n){return n===t}function bx(n){return Kt(n)&&vn(n)==he}function Rx(n){return Kt(n)&&En(n)==se}var Cx=ao(Vl),Lx=ao(function(n,s){return n<=s});function pd(n){if(!n)return[];if(Pn(n))return go(n)?li(n):In(n);if(ks&&n[ks])return l_(n[ks]());var s=vn(n),l=s==O?Cl:s==P?Na:rs;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=ti(n),n===de||n===-1/0){var s=n<0?-1:1;return s*Te}return n===n?n:0}function at(n){var s=Ui(n),l=s%1;return s===s?l?s-l:s:0}function md(n){return n?Mr(at(n),0,Fe):0}function ti(n){if(typeof n=="number")return n;if(Hn(n))return Re;if(Zt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Zt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Dh(n);var l=pl.test(n);return l||_l.test(n)?Xm(n.slice(2),l?2:8):dl.test(n)?Re:+n}function _d(n){return xi(n,Dn(n))}function Ix(n){return n?Mr(at(n),-9007199254740991,j):n===0?n:0}function Rt(n){return n==null?"":Gn(n)}var Px=es(function(n,s){if(ea(s)||Pn(s)){xi(s,un(s),n);return}for(var l in s)Lt.call(s,l)&&Zs(n,l,s[l])}),gd=es(function(n,s){xi(s,Dn(s),n)}),vo=es(function(n,s,l,d){xi(s,Dn(s),n,d)}),Dx=es(function(n,s,l,d){xi(s,un(s),n,d)}),Ux=Ii(Nl);function Nx(n,s){var l=jr(n);return s==null?l:Zh(l,s)}var Fx=ht(function(n,s){n=Bt(n);var l=-1,d=s.length,M=d>2?s[2]:t;for(M&&yn(s[0],s[1],M)&&(d=1);++l<d;)for(var b=s[l],D=Dn(b),B=-1,X=D.length;++B<X;){var re=D[B],ae=n[re];(ae===t||ui(ae,$r[re])&&!Lt.call(n,re))&&(n[re]=b[re])}return n}),Ox=ht(function(n){return n.push(t,Uf),Bn(vd,t,n)});function Bx(n,s){return Ch(n,Ze(s,3),vi)}function zx(n,s){return Ch(n,Ze(s,3),Ol)}function Gx(n,s){return n==null?n:Fl(n,Ze(s,3),Dn)}function Hx(n,s){return n==null?n:jh(n,Ze(s,3),Dn)}function Vx(n,s){return n&&vi(n,Ze(s,3))}function kx(n,s){return n&&Ol(n,Ze(s,3))}function Wx(n){return n==null?[]:Qa(n,un(n))}function Xx(n){return n==null?[]:Qa(n,Dn(n))}function mc(n,s,l){var d=n==null?t:Sr(n,s);return d===t?l:d}function qx(n,s){return n!=null&&Of(n,s,mg)}function _c(n,s){return n!=null&&Of(n,s,_g)}var Yx=Cf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=za.call(s)),n[s]=l},vc(Un)),Zx=Cf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=za.call(s)),Lt.call(n,s)?n[s].push(l):n[s]=[l]},Ze),Kx=ht($s);function un(n){return Pn(n)?qh(n):Hl(n)}function Dn(n){return Pn(n)?qh(n,!0):wg(n)}function $x(n,s){var l={};return s=Ze(s,3),vi(n,function(d,M,b){Ci(l,s(d,M,b),d)}),l}function Jx(n,s){var l={};return s=Ze(s,3),vi(n,function(d,M,b){Ci(l,M,s(d,M,b))}),l}var Qx=es(function(n,s,l){ja(n,s,l)}),vd=es(function(n,s,l,d){ja(n,s,l,d)}),jx=Ii(function(n,s){var l={};if(n==null)return l;var d=!1;s=qt(s,function(b){return b=er(b,n),d||(d=b.length>1),b}),xi(n,tc(n),l),d&&(l=Qn(l,_|g|x,Yg));for(var M=s.length;M--;)Yl(l,s[M]);return l});function eM(n,s){return xd(n,mo(Ze(s)))}var tM=Ii(function(n,s){return n==null?{}:Rg(n,s)});function xd(n,s){if(n==null)return{};var l=qt(tc(n),function(d){return[d]});return s=Ze(s),uf(n,l,function(d,M){return s(d,M[0])})}function nM(n,s,l){s=er(s,n);var d=-1,M=s.length;for(M||(M=1,n=t);++d<M;){var b=n==null?t:n[Mi(s[d])];b===t&&(d=M,b=l),n=Di(b)?b.call(n):b}return n}function iM(n,s,l){return n==null?n:Qs(n,s,l)}function rM(n,s,l,d){return d=typeof d=="function"?d:t,n==null?n:Qs(n,s,l,d)}var Md=Pf(un),Sd=Pf(Dn);function sM(n,s,l){var d=st(n),M=d||nr(n)||is(n);if(s=Ze(s,4),l==null){var b=n&&n.constructor;M?l=d?new b:[]:Zt(n)?l=Di(b)?jr(Va(n)):{}:l={}}return(M?Kn:vi)(n,function(D,B,X){return s(l,D,B,X)}),l}function aM(n,s){return n==null?!0:Yl(n,s)}function oM(n,s,l){return n==null?n:mf(n,s,$l(l))}function lM(n,s,l,d){return d=typeof d=="function"?d:t,n==null?n:mf(n,s,$l(l),d)}function rs(n){return n==null?[]:Rl(n,un(n))}function cM(n){return n==null?[]:Rl(n,Dn(n))}function uM(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=ti(l),l=l===l?l:0),s!==t&&(s=ti(s),s=s===s?s:0),Mr(ti(n),s,l)}function hM(n,s,l){return s=Ui(s),l===t?(l=s,s=0):l=Ui(l),n=ti(n),gg(n,s,l)}function fM(n,s,l){if(l&&typeof l!="boolean"&&yn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ui(n),s===t?(s=n,n=0):s=Ui(s)),n>s){var d=n;n=s,s=d}if(l||n%1||s%1){var M=Wh();return gn(n+M*(s-n+Wm("1e-"+((M+"").length-1))),s)}return Wl(n,s)}var dM=ts(function(n,s,l){return s=s.toLowerCase(),n+(l?Ed(s):s)});function Ed(n){return gc(Rt(n).toLowerCase())}function yd(n){return n=Rt(n),n&&n.replace(A,i_).replace(Um,"")}function pM(n,s,l){n=Rt(n),s=Gn(s);var d=n.length;l=l===t?d:Mr(at(l),0,d);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function mM(n){return n=Rt(n),n&&we.test(n)?n.replace(le,r_):n}function _M(n){return n=Rt(n),n&&wa.test(n)?n.replace(kr,"\\$&"):n}var gM=ts(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),vM=ts(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),xM=wf("toLowerCase");function MM(n,s,l){n=Rt(n),s=at(s);var d=s?Zr(n):0;if(!s||d>=s)return n;var M=(s-d)/2;return so(qa(M),l)+n+so(Xa(M),l)}function SM(n,s,l){n=Rt(n),s=at(s);var d=s?Zr(n):0;return s&&d<s?n+so(s-d,l):n}function EM(n,s,l){n=Rt(n),s=at(s);var d=s?Zr(n):0;return s&&d<s?so(s-d,l)+n:n}function yM(n,s,l){return l||s==null?s=0:s&&(s=+s),L_(Rt(n).replace(oi,""),s||0)}function TM(n,s,l){return(l?yn(n,s,l):s===t)?s=1:s=at(s),Xl(Rt(n),s)}function AM(){var n=arguments,s=Rt(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var wM=ts(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function bM(n,s,l){return l&&typeof l!="number"&&yn(n,s,l)&&(s=l=t),l=l===t?Fe:l>>>0,l?(n=Rt(n),n&&(typeof s=="string"||s!=null&&!pc(s))&&(s=Gn(s),!s&&Yr(n))?tr(li(n),0,l):n.split(s,l)):[]}var RM=ts(function(n,s,l){return n+(l?" ":"")+gc(s)});function CM(n,s,l){return n=Rt(n),l=l==null?0:Mr(at(l),0,n.length),s=Gn(s),n.slice(l,l+s.length)==s}function LM(n,s,l){var d=E.templateSettings;l&&yn(n,s,l)&&(s=t),n=Rt(n),s=vo({},s,d,Df);var M=vo({},s.imports,d.imports,Df),b=un(M),D=Rl(M,b),B,X,re=0,ae=s.interpolate||W,fe="__p += '",Me=Ll((s.escape||W).source+"|"+ae.source+"|"+(ae===en?Ia:W).source+"|"+(s.evaluate||W).source+"|$","g"),Ge="//# sourceURL="+(Lt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zm+"]")+`
`;n.replace(Me,function($e,_t,St,Vn,Tn,kn){return St||(St=Vn),fe+=n.slice(re,kn).replace(Z,s_),_t&&(B=!0,fe+=`' +
__e(`+_t+`) +
'`),Tn&&(X=!0,fe+=`';
`+Tn+`;
__p += '`),St&&(fe+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),re=kn+$e.length,$e}),fe+=`';
`;var Ke=Lt.call(s,"variable")&&s.variable;if(!Ke)fe=`with (obj) {
`+fe+`
}
`;else if(Xr.test(Ke))throw new it(u);fe=(X?fe.replace(Pt,""):fe).replace(V,"$1").replace(Ee,"$1;"),fe="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+fe+`return __p
}`;var lt=Ad(function(){return bt(b,Ge+"return "+fe).apply(t,D)});if(lt.source=fe,dc(lt))throw lt;return lt}function IM(n){return Rt(n).toLowerCase()}function PM(n){return Rt(n).toUpperCase()}function DM(n,s,l){if(n=Rt(n),n&&(l||s===t))return Dh(n);if(!n||!(s=Gn(s)))return n;var d=li(n),M=li(s),b=Uh(d,M),D=Nh(d,M)+1;return tr(d,b,D).join("")}function UM(n,s,l){if(n=Rt(n),n&&(l||s===t))return n.slice(0,Oh(n)+1);if(!n||!(s=Gn(s)))return n;var d=li(n),M=Nh(d,li(s))+1;return tr(d,0,M).join("")}function NM(n,s,l){if(n=Rt(n),n&&(l||s===t))return n.replace(oi,"");if(!n||!(s=Gn(s)))return n;var d=li(n),M=Uh(d,li(s));return tr(d,M).join("")}function FM(n,s){var l=T,d=z;if(Zt(s)){var M="separator"in s?s.separator:M;l="length"in s?at(s.length):l,d="omission"in s?Gn(s.omission):d}n=Rt(n);var b=n.length;if(Yr(n)){var D=li(n);b=D.length}if(l>=b)return n;var B=l-Zr(d);if(B<1)return d;var X=D?tr(D,0,B).join(""):n.slice(0,B);if(M===t)return X+d;if(D&&(B+=X.length-B),pc(M)){if(n.slice(B).search(M)){var re,ae=X;for(M.global||(M=Ll(M.source,Rt(Pa.exec(M))+"g")),M.lastIndex=0;re=M.exec(ae);)var fe=re.index;X=X.slice(0,fe===t?B:fe)}}else if(n.indexOf(Gn(M),B)!=B){var Me=X.lastIndexOf(M);Me>-1&&(X=X.slice(0,Me))}return X+d}function OM(n){return n=Rt(n),n&&be.test(n)?n.replace(ee,f_):n}var BM=ts(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),gc=wf("toUpperCase");function Td(n,s,l){return n=Rt(n),s=l?t:s,s===t?o_(n)?m_(n):Qm(n):n.match(s)||[]}var Ad=ht(function(n,s){try{return Bn(n,t,s)}catch(l){return dc(l)?l:new it(l)}}),zM=Ii(function(n,s){return Kn(s,function(l){l=Mi(l),Ci(n,l,hc(n[l],n))}),n});function GM(n){var s=n==null?0:n.length,l=Ze();return n=s?qt(n,function(d){if(typeof d[1]!="function")throw new $n(c);return[l(d[0]),d[1]]}):[],ht(function(d){for(var M=-1;++M<s;){var b=n[M];if(Bn(b[0],this,d))return Bn(b[1],this,d)}})}function HM(n){return fg(Qn(n,_))}function vc(n){return function(){return n}}function VM(n,s){return n==null||n!==n?s:n}var kM=Rf(),WM=Rf(!0);function Un(n){return n}function xc(n){return rf(typeof n=="function"?n:Qn(n,_))}function XM(n){return af(Qn(n,_))}function qM(n,s){return of(n,Qn(s,_))}var YM=ht(function(n,s){return function(l){return $s(l,n,s)}}),ZM=ht(function(n,s){return function(l){return $s(n,l,s)}});function Mc(n,s,l){var d=un(s),M=Qa(s,d);l==null&&!(Zt(s)&&(M.length||!d.length))&&(l=s,s=n,n=this,M=Qa(s,un(s)));var b=!(Zt(l)&&"chain"in l)||!!l.chain,D=Di(n);return Kn(M,function(B){var X=s[B];n[B]=X,D&&(n.prototype[B]=function(){var re=this.__chain__;if(b||re){var ae=n(this.__wrapped__),fe=ae.__actions__=In(this.__actions__);return fe.push({func:X,args:arguments,thisArg:n}),ae.__chain__=re,ae}return X.apply(n,Ki([this.value()],arguments))})}),n}function KM(){return fn._===this&&(fn._=S_),this}function Sc(){}function $M(n){return n=at(n),ht(function(s){return lf(s,n)})}var JM=Ql(qt),QM=Ql(Rh),jM=Ql(yl);function wd(n){return sc(n)?Tl(Mi(n)):Cg(n)}function eS(n){return function(s){return n==null?t:Sr(n,s)}}var tS=Lf(),nS=Lf(!0);function Ec(){return[]}function yc(){return!1}function iS(){return{}}function rS(){return""}function sS(){return!0}function aS(n,s){if(n=at(n),n<1||n>j)return[];var l=Fe,d=gn(n,Fe);s=Ze(s),n-=Fe;for(var M=bl(d,s);++l<n;)s(l);return M}function oS(n){return st(n)?qt(n,Mi):Hn(n)?[n]:In(qf(Rt(n)))}function lS(n){var s=++x_;return Rt(n)+s}var cS=ro(function(n,s){return n+s},0),uS=jl("ceil"),hS=ro(function(n,s){return n/s},1),fS=jl("floor");function dS(n){return n&&n.length?Ja(n,Un,Bl):t}function pS(n,s){return n&&n.length?Ja(n,Ze(s,2),Bl):t}function mS(n){return Ih(n,Un)}function _S(n,s){return Ih(n,Ze(s,2))}function gS(n){return n&&n.length?Ja(n,Un,Vl):t}function vS(n,s){return n&&n.length?Ja(n,Ze(s,2),Vl):t}var xS=ro(function(n,s){return n*s},1),MS=jl("round"),SS=ro(function(n,s){return n-s},0);function ES(n){return n&&n.length?wl(n,Un):0}function yS(n,s){return n&&n.length?wl(n,Ze(s,2)):0}return E.after=Xv,E.ary=id,E.assign=Px,E.assignIn=gd,E.assignInWith=vo,E.assignWith=Dx,E.at=Ux,E.before=rd,E.bind=hc,E.bindAll=zM,E.bindKey=sd,E.castArray=ix,E.chain=ed,E.chunk=f0,E.compact=d0,E.concat=p0,E.cond=GM,E.conforms=HM,E.constant=vc,E.countBy=Ev,E.create=Nx,E.curry=ad,E.curryRight=od,E.debounce=ld,E.defaults=Fx,E.defaultsDeep=Ox,E.defer=qv,E.delay=Yv,E.difference=m0,E.differenceBy=_0,E.differenceWith=g0,E.drop=v0,E.dropRight=x0,E.dropRightWhile=M0,E.dropWhile=S0,E.fill=E0,E.filter=Tv,E.flatMap=bv,E.flatMapDeep=Rv,E.flatMapDepth=Cv,E.flatten=$f,E.flattenDeep=y0,E.flattenDepth=T0,E.flip=Zv,E.flow=kM,E.flowRight=WM,E.fromPairs=A0,E.functions=Wx,E.functionsIn=Xx,E.groupBy=Lv,E.initial=b0,E.intersection=R0,E.intersectionBy=C0,E.intersectionWith=L0,E.invert=Yx,E.invertBy=Zx,E.invokeMap=Pv,E.iteratee=xc,E.keyBy=Dv,E.keys=un,E.keysIn=Dn,E.map=ho,E.mapKeys=$x,E.mapValues=Jx,E.matches=XM,E.matchesProperty=qM,E.memoize=po,E.merge=Qx,E.mergeWith=vd,E.method=YM,E.methodOf=ZM,E.mixin=Mc,E.negate=mo,E.nthArg=$M,E.omit=jx,E.omitBy=eM,E.once=Kv,E.orderBy=Uv,E.over=JM,E.overArgs=$v,E.overEvery=QM,E.overSome=jM,E.partial=fc,E.partialRight=cd,E.partition=Nv,E.pick=tM,E.pickBy=xd,E.property=wd,E.propertyOf=eS,E.pull=U0,E.pullAll=Qf,E.pullAllBy=N0,E.pullAllWith=F0,E.pullAt=O0,E.range=tS,E.rangeRight=nS,E.rearg=Jv,E.reject=Bv,E.remove=B0,E.rest=Qv,E.reverse=cc,E.sampleSize=Gv,E.set=iM,E.setWith=rM,E.shuffle=Hv,E.slice=z0,E.sortBy=Wv,E.sortedUniq=q0,E.sortedUniqBy=Y0,E.split=bM,E.spread=jv,E.tail=Z0,E.take=K0,E.takeRight=$0,E.takeRightWhile=J0,E.takeWhile=Q0,E.tap=dv,E.throttle=ex,E.thru=uo,E.toArray=pd,E.toPairs=Md,E.toPairsIn=Sd,E.toPath=oS,E.toPlainObject=_d,E.transform=sM,E.unary=tx,E.union=j0,E.unionBy=ev,E.unionWith=tv,E.uniq=nv,E.uniqBy=iv,E.uniqWith=rv,E.unset=aM,E.unzip=uc,E.unzipWith=jf,E.update=oM,E.updateWith=lM,E.values=rs,E.valuesIn=cM,E.without=sv,E.words=Td,E.wrap=nx,E.xor=av,E.xorBy=ov,E.xorWith=lv,E.zip=cv,E.zipObject=uv,E.zipObjectDeep=hv,E.zipWith=fv,E.entries=Md,E.entriesIn=Sd,E.extend=gd,E.extendWith=vo,Mc(E,E),E.add=cS,E.attempt=Ad,E.camelCase=dM,E.capitalize=Ed,E.ceil=uS,E.clamp=uM,E.clone=rx,E.cloneDeep=ax,E.cloneDeepWith=ox,E.cloneWith=sx,E.conformsTo=lx,E.deburr=yd,E.defaultTo=VM,E.divide=hS,E.endsWith=pM,E.eq=ui,E.escape=mM,E.escapeRegExp=_M,E.every=yv,E.find=Av,E.findIndex=Zf,E.findKey=Bx,E.findLast=wv,E.findLastIndex=Kf,E.findLastKey=zx,E.floor=fS,E.forEach=td,E.forEachRight=nd,E.forIn=Gx,E.forInRight=Hx,E.forOwn=Vx,E.forOwnRight=kx,E.get=mc,E.gt=cx,E.gte=ux,E.has=qx,E.hasIn=_c,E.head=Jf,E.identity=Un,E.includes=Iv,E.indexOf=w0,E.inRange=hM,E.invoke=Kx,E.isArguments=Tr,E.isArray=st,E.isArrayBuffer=hx,E.isArrayLike=Pn,E.isArrayLikeObject=$t,E.isBoolean=fx,E.isBuffer=nr,E.isDate=dx,E.isElement=px,E.isEmpty=mx,E.isEqual=_x,E.isEqualWith=gx,E.isError=dc,E.isFinite=vx,E.isFunction=Di,E.isInteger=ud,E.isLength=_o,E.isMap=hd,E.isMatch=xx,E.isMatchWith=Mx,E.isNaN=Sx,E.isNative=Ex,E.isNil=Tx,E.isNull=yx,E.isNumber=fd,E.isObject=Zt,E.isObjectLike=Kt,E.isPlainObject=na,E.isRegExp=pc,E.isSafeInteger=Ax,E.isSet=dd,E.isString=go,E.isSymbol=Hn,E.isTypedArray=is,E.isUndefined=wx,E.isWeakMap=bx,E.isWeakSet=Rx,E.join=I0,E.kebabCase=gM,E.last=ei,E.lastIndexOf=P0,E.lowerCase=vM,E.lowerFirst=xM,E.lt=Cx,E.lte=Lx,E.max=dS,E.maxBy=pS,E.mean=mS,E.meanBy=_S,E.min=gS,E.minBy=vS,E.stubArray=Ec,E.stubFalse=yc,E.stubObject=iS,E.stubString=rS,E.stubTrue=sS,E.multiply=xS,E.nth=D0,E.noConflict=KM,E.noop=Sc,E.now=fo,E.pad=MM,E.padEnd=SM,E.padStart=EM,E.parseInt=yM,E.random=fM,E.reduce=Fv,E.reduceRight=Ov,E.repeat=TM,E.replace=AM,E.result=nM,E.round=MS,E.runInContext=k,E.sample=zv,E.size=Vv,E.snakeCase=wM,E.some=kv,E.sortedIndex=G0,E.sortedIndexBy=H0,E.sortedIndexOf=V0,E.sortedLastIndex=k0,E.sortedLastIndexBy=W0,E.sortedLastIndexOf=X0,E.startCase=RM,E.startsWith=CM,E.subtract=SS,E.sum=ES,E.sumBy=yS,E.template=LM,E.times=aS,E.toFinite=Ui,E.toInteger=at,E.toLength=md,E.toLower=IM,E.toNumber=ti,E.toSafeInteger=Ix,E.toString=Rt,E.toUpper=PM,E.trim=DM,E.trimEnd=UM,E.trimStart=NM,E.truncate=FM,E.unescape=OM,E.uniqueId=lS,E.upperCase=BM,E.upperFirst=gc,E.each=td,E.eachRight=nd,E.first=Jf,Mc(E,function(){var n={};return vi(E,function(s,l){Lt.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Kn(["drop","take"],function(n,s){vt.prototype[n]=function(l){l=l===t?1:rn(at(l),0);var d=this.__filtered__&&!s?new vt(this):this.clone();return d.__filtered__?d.__takeCount__=gn(l,d.__takeCount__):d.__views__.push({size:gn(l,Fe),type:n+(d.__dir__<0?"Right":"")}),d},vt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Kn(["filter","map","takeWhile"],function(n,s){var l=s+1,d=l==ie||l==ne;vt.prototype[n]=function(M){var b=this.clone();return b.__iteratees__.push({iteratee:Ze(M,3),type:l}),b.__filtered__=b.__filtered__||d,b}}),Kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");vt.prototype[n]=function(){return this[l](1).value()[0]}}),Kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");vt.prototype[n]=function(){return this.__filtered__?new vt(this):this[l](1)}}),vt.prototype.compact=function(){return this.filter(Un)},vt.prototype.find=function(n){return this.filter(n).head()},vt.prototype.findLast=function(n){return this.reverse().find(n)},vt.prototype.invokeMap=ht(function(n,s){return typeof n=="function"?new vt(this):this.map(function(l){return $s(l,n,s)})}),vt.prototype.reject=function(n){return this.filter(mo(Ze(n)))},vt.prototype.slice=function(n,s){n=at(n);var l=this;return l.__filtered__&&(n>0||s<0)?new vt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=at(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},vt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},vt.prototype.toArray=function(){return this.take(Fe)},vi(vt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),M=E[d?"take"+(s=="last"?"Right":""):s],b=d||/^find/.test(s);M&&(E.prototype[s]=function(){var D=this.__wrapped__,B=d?[1]:arguments,X=D instanceof vt,re=B[0],ae=X||st(D),fe=function(_t){var St=M.apply(E,Ki([_t],B));return d&&Me?St[0]:St};ae&&l&&typeof re=="function"&&re.length!=1&&(X=ae=!1);var Me=this.__chain__,Ge=!!this.__actions__.length,Ke=b&&!Me,lt=X&&!Ge;if(!b&&ae){D=lt?D:new vt(this);var $e=n.apply(D,B);return $e.__actions__.push({func:uo,args:[fe],thisArg:t}),new Jn($e,Me)}return Ke&&lt?n.apply(this,B):($e=this.thru(fe),Ke?d?$e.value()[0]:$e.value():$e)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Fa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(d&&!this.__chain__){var b=this.value();return s.apply(st(b)?b:[],M)}return this[l](function(D){return s.apply(st(D)?D:[],M)})}}),vi(vt.prototype,function(n,s){var l=E[s];if(l){var d=l.name+"";Lt.call(Qr,d)||(Qr[d]=[]),Qr[d].push({name:s,func:l})}}),Qr[io(t,m).name]=[{name:"wrapper",func:t}],vt.prototype.clone=O_,vt.prototype.reverse=B_,vt.prototype.value=z_,E.prototype.at=pv,E.prototype.chain=mv,E.prototype.commit=_v,E.prototype.next=gv,E.prototype.plant=xv,E.prototype.reverse=Mv,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Sv,E.prototype.first=E.prototype.head,ks&&(E.prototype[ks]=vv),E},Kr=__();_r?((_r.exports=Kr)._=Kr,xl._=Kr):fn._=Kr}).call(Kb)}(va,va.exports)),va.exports}var da={},Fp;function Jb(){if(Fp)return da;Fp=1,Object.defineProperty(da,"__esModule",{value:!0}),da.backtrace=void 0;function r(e,t,i){const a=[];let o=i?e:e.getParent();for(;o.getParent();)a.push([o.position.x,o.position.y]),o=o.getParent();return t&&a.push([o.position.x,o.position.y]),a.reverse()}return da.backtrace=r,da}var pa={},Op;function Qb(){if(Op)return pa;Op=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.calculateHeuristic=void 0;function r(e,t,i,a){const o=Math.abs(i.x-t.x),c=Math.abs(i.y-t.y);switch(e){case"Manhatten":case"Manhattan":return(o+c)*a;case"Euclidean":return Math.sqrt(o*o+c*c)*a;case"Chebyshev":return Math.max(o,c)*a;case"Octile":return(o+c-.58*Math.min(o,c))*a}}return pa.calculateHeuristic=r,pa}var ma={},_a={},Bp;function jb(){if(Bp)return _a;Bp=1,Object.defineProperty(_a,"__esModule",{value:!0}),_a.Node=void 0;class r{constructor(t){this.id=t.id,this.position=t.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=t.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(t){this.gValue=t,this.calculateFValue()}setHValue(t){this.hValue=t,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(t){this.parentNode=t}setIsOnClosedList(t){this.isOnClosedList=t}setIsOnOpenList(t){this.isOnOpenList=t}setIsWalkable(t){this.isWalkable=t}}return _a.Node=r,_a}var zp;function Tm(){if(zp)return ma;zp=1,Object.defineProperty(ma,"__esModule",{value:!0}),ma.Grid=void 0;const r=jb();class e{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,a,o,c){const u=[];let f=0;for(let h=0;h<o;h++){u[h]=[];for(let p=0;p<a;p++)u[h][p]=new r.Node({id:f,position:{x:p,y:h}}),f++}if(i===void 0){for(let h=0;h<o;h++)for(let p=0;p<a;p++)Math.floor(Math.random()*10)+1>10-c?u[h][p].setIsWalkable(!1):u[h][p].setIsWalkable(!0);return u}for(let h=0;h<o;h++)for(let p=0;p<a;p++)u[h][p].setIsWalkable(!i[h][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,a){const o=[],c=i.x-1,u=i.x+1,f=i.y-1,h=i.y+1;for(let p=f;p<=h;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(a||_==i.x||p==i.y)&&o.push(this.getNodeAt({x:_,y:p}));return o}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let a=0;a<this.gridNodes[i].length;a++)this.gridNodes[i][a].setIsOnClosedList(!1),this.gridNodes[i][a].setIsOnOpenList(!1),this.gridNodes[i][a].setParent(void 0),this.gridNodes[i][a].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let a=0;for(let o=0;o<this.height;o++){i[o]=[];for(let c=0;c<this.width;c++)i[o][c]=new r.Node({id:a,position:{x:c,y:o},walkable:this.gridNodes[o][c].getIsWalkable()}),a++}return i}}return ma.Grid=e,ma}var Gp;function e1(){if(Gp)return fa;Gp=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.AStarFinder=void 0;const r=$b(),e=Jb(),t=Qb(),i=Tm();class a{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const f=this.grid.getNodeAt(c),h=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];f.setIsOnOpenList(!0),this.openList.push(f);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,t.calculateHeuristic)(this.heuristic,g.position,h.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,r.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,r.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===h)return(0,e.backtrace)(h,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const y=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||y<x.getGValue())&&(x.setGValue(y),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,e.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return fa.AStarFinder=a,fa}var Hp;function t1(){return Hp||(Hp=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var e=e1();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return e.AStarFinder}});var t=Tm();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return t.Grid}})}(ru)),ru}var n1=t1();class Am{constructor(e){ve(this,"currentHealth");ve(this,"fullHealth");ve(this,"offset");ve(this,"red");ve(this,"green");ve(this,"widthFactor");ve(this,"heightFactor");this.currentHealth=e.currentHealth??e.fullHealth,this.fullHealth=e.fullHealth,this.offset=e.offset,this.red=new jd(new qu({map:new sp().load("./textures/red.png")})),this.green=new jd(new qu({map:new sp().load("./textures/green.png")})),this.widthFactor=e.widthFactor??1,this.heightFactor=e.heightFactor??1,this.update(this.currentHealth,e.position)}end(e){e.scene.remove(this.red),e.scene.remove(this.green)}start(e){e.scene.add(this.red),e.scene.add(this.green)}update(e,t){this.currentHealth=e;const i=this.widthFactor*1,a=this.heightFactor*.2;this.red.scale.set(i,a,a),this.red.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),a,a),this.green.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z)}}const sl=class sl extends fl{constructor(t){const i=(t==null?void 0:t.size)??1,a=He.TILE_SIZE/32,o=Ht.createSphere({radius:a*i,color:(t==null?void 0:t.color)??new _e(Ye.LIGHT_GREEN),basicMaterial:!0});super({mesh:o});ve(this,"ttl",0);ve(this,"velocity");this.mesh.position.set(t.position.x,t.position.y,t.position.z);const c=(t==null?void 0:t.force)??1,u=.002;this.velocity=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u)}update(t,i,a){super.update(t,i,a),this.velocity.y-=1e-5*i,this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>sl.TTL&&this.kill()}};ve(sl,"TTL",800);let Zu=sl;const Vp={createExplosion(r,e,t){const{colors:i}=t,a=t.amount??10,o=Array.isArray(i)?i:[i];for(let c=0;c<a;c++){const u=new Zu({position:e.clone(),color:o[Math.floor(Math.random()*o.length)],force:t.force,size:t.size});r.addComponent(u)}}},ws={createSimpleGrid:r=>{var o;const e=[];for(let c=0;c<r.length;c++){const u=[];for(let f=0;f<r[c].length;f++)u.push(r[c][f].isWalkable?0:1);e.push(u)}const t=e.length,i=((o=e[0])==null?void 0:o.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:t},(f,h)=>e[h][u]))},getBoundedUncheckedNeighbors:(r,e,t)=>{const i=[];return r>0&&i.push(new Ne(r-1,e)),r<t.length-1&&i.push(new Ne(r+1,e)),e>0&&i.push(new Ne(r,e-1)),e<t[0].length-1&&i.push(new Ne(r,e+1)),i},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:r=>{const{grid:e,origin:t,myBattleSide:i,range:a,objective:o}=r,c=Math.max(1,a),u=new Set,f=[t.clone()];u.add(ws.getPositionHash(t));let h=0;const p=[];for(;h<f.length;){if(h>e.length*e[0].length*2)return null;const x=f[h];h++;const y=ws.getBoundedUncheckedNeighbors(x.x,x.y,e);for(const w of y){if(!e[w.x][w.y].isWalkable)continue;const v=e[w.x][w.y].actors.find(m=>m instanceof Gs&&m.battleSide!==i);v?p.push({pos:x,enemy:v}):!u.has(ws.getPositionHash(w))&&w.distanceTo(t)<=c&&(f.push(w),u.add(ws.getPositionHash(w)))}}if(p.length===0)return null;let _=p[0];return p.forEach(g=>{g.pos.distanceTo(o)<_.pos.distanceTo(o)&&(_=g)}),_}};class Gs extends Aa{constructor(t){super(t);ve(this,"battleSide");ve(this,"pos");ve(this,"radius");ve(this,"hb");ve(this,"fullHealth");ve(this,"health");ve(this,"objective");ve(this,"DEATH_EXPLOSION_CONFIG",{colors:[new _e(Ye.RED),new _e(Ye.DARK)]});ve(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new _e(Ye.RED),new _e(Ye.ORANGE),new _e(Ye.YELLOW),new _e(Ye.WHITE)],amount:30,force:3,size:.8});ve(this,"SPEED",1);this.battleSide=t.battleSide,this.pos=t.pos,this.radius=t.radius,this.fullHealth=t.health,this.health=t.health,this.objective=t.objective,this.hb=new Am({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:new U(0,this.radius*3,0),heightFactor:.5,widthFactor:.6})}afterSpawn(t,i){super.afterSpawn(t,i),this.hb.start(t)}beforeDeath(t,i,a){super.beforeDeath(t,i,a),this.hb.end(i),Vp.createExplosion(i,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(t,i,a,o){super.update(t,i,a,o);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=1,this.kill(),Vp.createExplosion(a,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(o)<c){this.pos=o;const u=ws.createSimpleGrid(a.actorsGrid),h=new n1.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(o,this.objective.position.clone());if(h.length>1){const p=new Ne(h[1][0],h[1][1]);a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(_=>_!==this),a.actorsGrid[p.x][p.y].actors.push(this)}}else{const u=.0012*this.SPEED,f=i*u,h=o.clone().sub(this.pos).normalize(),p=this.pos.distanceTo(o);this.pos.add(h.clone().multiplyScalar(Math.min(f,p)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new U(this.pos.x,this.mesh.position.y,this.pos.y)}}class i1 extends Gs{constructor(t){const i=He.TILE_SIZE/5,a=He.TILE_SIZE/2,o=new U(t.pos.x,He.TILE_SIZE/4,t.pos.y),c=new Nn({center:o,parts:[{mesh:Ht.createCylinder({radius:i,height:a,color:new _e(Ye.BLUE)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Hr.ENEMY,pos:t.pos,radius:i,health:3,objective:t.objective});ve(this,"DEATH_EXPLOSION_CONFIG",{colors:[new _e(Ye.BLUE),new _e(Ye.DARK_GREEN)],amount:50,size:.5,force:2});ve(this,"SPEED",1.5)}}class r1 extends Gs{constructor(t){const i=He.TILE_SIZE/4,a=He.TILE_SIZE,o=new U(t.pos.x,He.TILE_SIZE/2,t.pos.y),c=new Nn({center:o,parts:[{mesh:Ht.createCylinder({radius:i,height:a,color:new _e(Ye.LIGHT_GREEN)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Hr.ENEMY,pos:t.pos,radius:i,health:5,objective:t.objective});ve(this,"DEATH_EXPLOSION_CONFIG",{colors:[new _e(Ye.LIGHT_GREEN),new _e(Ye.GREEN),new _e(Ye.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(t,i,a){super.beforeDeath(t,i,a),i.addActor(new i1({pos:a,objective:this.objective}),a)}}class s1 extends Gs{constructor(t){const i=He.TILE_SIZE/3,a=He.TILE_SIZE*3/4,o=new U(t.pos.x,a/2,t.pos.y),c=new Nn({center:o,parts:[{mesh:Ht.createCylinder({radius:i,height:a,color:new _e(Ye.YELLOW)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Hr.ENEMY,pos:t.pos,radius:i,health:10,objective:t.objective});ve(this,"DEATH_EXPLOSION_CONFIG",{colors:[new _e(Ye.YELLOW),new _e(Ye.DARK)],amount:60,size:.8,force:3});ve(this,"SPEED",.7)}}class a1 extends Gs{constructor(e){const t=He.TILE_SIZE/5,i=He.TILE_SIZE,a=new U(e.pos.x,He.TILE_SIZE/2,e.pos.y),o=new Nn({center:a,parts:[{mesh:Ht.createCylinder({radius:t,height:i,color:new _e(Ye.RED)}),offset:new U(0,0,0)}]});super({mesh:o,battleSide:Hr.ENEMY,pos:e.pos,radius:t,health:5,objective:e.objective})}}const al=class al extends fl{constructor({position:t,color:i,sizeFactor:a}){const o=He.TILE_SIZE/72*a,c=Ht.createSphere({radius:o,color:i===void 0?new _e(Ye.WHITE):i});c.position.set(t.x,t.y,t.z);super({mesh:c});ve(this,"ttl",0);ve(this,"position");ve(this,"velocity");this.position=t,this.velocity=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(He.TILE_SIZE*5e-5)}update(t,i,a){super.update(t,i,a),this.velocity.y-=5e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>al.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};ve(al,"TTL",1e3);let Ku=al;const xa=class xa extends fl{constructor(t){const i=He.TILE_SIZE/48*t.bulletConfig.sizeFactor;super({mesh:Ht.createSphere({radius:i,color:t.bulletConfig.color===void 0?new _e(Ye.WHITE):t.bulletConfig.color})});ve(this,"battleSide");ve(this,"position");ve(this,"radius");ve(this,"direction");ve(this,"bulletConfig");ve(this,"particleTimeout",0);ve(this,"hasDamaged",new Set);this.battleSide=t.battleSide,this.direction=t.direction,this.position=t.position,this.radius=i,this.bulletConfig=t.bulletConfig}update(t,i,a){var w,v;super.update(t,i,a);const c=.07*i*this.bulletConfig.speedFactor,u=this.direction.clone().normalize(),f=this.position.clone().add(new U(u.x*c,0,u.y*c)),h=He.TILE_SIZE/4,p=this.position.distanceTo(f),_=Math.max(1,Math.floor(p/h));for(let m=0;m<_;m++){const I=this.position.clone().add(new U(u.x*h,0,u.y*h)),L=[new Ne(I.x-h,I.z-h),new Ne(I.x-h,I.z),new Ne(I.x-h,I.z+h),new Ne(I.x,I.z-h),new Ne(I.x,I.z),new Ne(I.x,I.z+h),new Ne(I.x+h,I.z-h),new Ne(I.x+h,I.z),new Ne(I.x+h,I.z+h)].map(R=>new Ne(Math.floor(R.x),Math.floor(R.y)));for(const R of L){const G=(w=a.actorsGrid[R.x])==null?void 0:w[R.y];if(G){for(const N of G.actors)if(N instanceof Gs&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new Ne(this.position.x,this.position.z))<this.radius+N.radius&&!this.hasDamaged.has(N)){N.health-=this.bulletConfig.damage,this.hasDamaged.add(N);break}}}}this.position.set(f.x,this.position.y,f.z);const g=a.actorsGrid.length,x=((v=a.actorsGrid[0])==null?void 0:v.length)??0;0<=this.position.x&&this.position.x<g&&0<=this.position.z&&this.position.z<x||this.kill(),this.particleTimeout+=i,this.particleTimeout>xa.PARTICLE_TIMEOUT&&(a.addComponent(new Ku({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%xa.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};ve(xa,"PARTICLE_TIMEOUT",30);let $u=xa;class wm extends Aa{constructor(t){super(t);ve(this,"position");ve(this,"bulletConfig");ve(this,"SHOOT_TIMEOUT",1e3);ve(this,"shootTimeout",0);ve(this,"range",10);ve(this,"objective");this.position=t.position,this.bulletConfig=t.bulletConfig,this.objective=t.objective}update(t,i,a,o){super.update(t,i,a,o);const c=this.shootTimeout+i;if(this.shootTimeout=c%this.SHOOT_TIMEOUT,c>=this.SHOOT_TIMEOUT){const f=ws.findClosestEnemy({grid:a.actorsGrid,origin:this.position.clone(),myBattleSide:Hr.ALLY,range:this.range,objective:this.objective.position.clone()}),h=f?new Ne(f.enemy.mesh.position.x-this.position.x,f.enemy.mesh.position.z-this.position.y).normalize():null;if(h!==null){const p=new $u({battleSide:Hr.ALLY,direction:h,position:new U(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});a.addComponent(p)}}}}class o1 extends wm{constructor(t){const i=new U(t.position.x,He.TILE_SIZE,t.position.y),a=Ht.createGem({size:He.TILE_SIZE/4,color:new _e(Ye.WHITE)}),o=new Nn({center:i,parts:[{mesh:Ht.createBox({width:He.TILE_SIZE,height:He.TILE_SIZE/2,depth:He.TILE_SIZE,color:new _e(Ye.DARK)}),offset:new U(0,-1*3/4,0)},{mesh:Ht.createBox({width:He.TILE_SIZE*3/4,height:He.TILE_SIZE,depth:He.TILE_SIZE*3/4,color:new _e(Ye.METAL)}),offset:new U(0,0,0)},{mesh:Ht.createBox({width:He.TILE_SIZE,height:He.TILE_SIZE/2,depth:He.TILE_SIZE,color:new _e(Ye.DARK)}),offset:new U(0,He.TILE_SIZE*3/4,0)},{mesh:a,offset:new U(0,He.TILE_SIZE*3/2,0)}]});super({mesh:o,position:t.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:t.objective});ve(this,"gem");this.gem=a}update(t,i,a,o){super.update(t,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500)}}class l1 extends wm{constructor(t){const i=new U(t.position.x,He.TILE_SIZE,t.position.y),a=Ht.createGem({size:He.TILE_SIZE/4,color:new _e(Ye.DARK)}),o=new Nn({center:i,parts:[{mesh:Ht.createBox({width:He.TILE_SIZE,height:He.TILE_SIZE/2,depth:He.TILE_SIZE,color:new _e(Ye.RED)}),offset:new U(0,-1*3/4,0)},{mesh:Ht.createBox({width:He.TILE_SIZE*3/4,height:He.TILE_SIZE,depth:He.TILE_SIZE*3/4,color:new _e(Ye.DARK)}),offset:new U(0,0,0)},{mesh:Ht.createBox({width:He.TILE_SIZE,height:He.TILE_SIZE/2,depth:He.TILE_SIZE,color:new _e(Ye.RED)}),offset:new U(0,He.TILE_SIZE*3/4,0)},{mesh:a,offset:new U(0,He.TILE_SIZE*3/2,0)}]});super({mesh:o,position:t.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new _e(Ye.DARK),trailSizeFactor:1.5},objective:t.objective});ve(this,"gem");ve(this,"SHOOT_TIMEOUT",2e3);this.gem=a}update(t,i,a,o){super.update(t,i,a,o),this.gem.rotateX(i/500),this.gem.rotateZ(i/250)}}class c1 extends Aa{constructor(t){const i=c=>Ht.createBox({width:c==="horizontal"?He.TILE_SIZE:He.TILE_SIZE/16,height:He.TILE_SIZE/16,depth:c==="vertical"?He.TILE_SIZE:He.TILE_SIZE/16,color:new _e(Ye.RED)}),a=new U(t.pos.x,He.TILE_SIZE/16,t.pos.y),o=new Nn({center:a,parts:[{mesh:i("vertical"),offset:new U(He.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new U(-15/32,0,0)},{mesh:i("horizontal"),offset:new U(0,0,He.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new U(0,0,-15/32)}]});super({mesh:o});ve(this,"pos");ve(this,"canPlace",!1);ve(this,"greenMaterial",new Si({color:new _e(Ye.LIGHT_GREEN)}));ve(this,"redMaterial",new Si({color:new _e(Ye.RED)}));this.pos=t.pos}update(t,i,a,o){var f;if(super.update(t,i,a,o),!(a instanceof rl))throw new Error("Cursor can only be used in a BattleFieldContainer");let c=0;t.keyboardHandler.wasPressed("ArrowUp")?c=-1:t.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(t.keyboardHandler.wasPressed("ArrowLeft")?u=-1:t.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const h=o.clone().add(new Ne(u,c));if(!(0<=h.x&&h.x<a.actorsGrid.length)||!(0<=h.y&&h.y<(((f=a.actorsGrid[0])==null?void 0:f.length)??0)))return;this.pos=h,a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(p=>p!==this),a.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=a.actorsGrid[o.x][o.y].isWalkable&&a.actorsGrid[o.x][o.y].actors.find(h=>h!==this)===void 0,this.canPlace){let h;t.keyboardHandler.wasPressed("z")?h=new o1({position:o.clone(),objective:a.headQuarters}):t.keyboardHandler.wasPressed("x")?h=new l1({position:o.clone(),objective:a.headQuarters}):t.keyboardHandler.wasPressed("c")&&(h=new Zb({position:new U(o.x,He.TILE_SIZE/2,o.y),size:He.TILE_SIZE})),h!==void 0&&(a.addActor(h,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1)}}graphics(t,i,a){const o=1-Math.exp(-.005*i);this.mesh.position=new U(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*o,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*o),a.camera.position.set(this.mesh.position.x+He.TILE_SIZE*2,this.mesh.position.y+He.TILE_SIZE*5,this.mesh.position.z+He.TILE_SIZE*8),a.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class u1 extends Aa{constructor({health:t,position:i}){const a=He.TILE_SIZE/2,o=He.TILE_SIZE*2,c=He.TILE_SIZE/2,u=new U(i.x,He.TILE_SIZE,i.y),f=Ht.createGem({size:o/4,color:new _e(Ye.LIGHT_GREEN),basicMaterial:!0}),h=new Nn({center:u,parts:[{mesh:Ht.createBox({color:new _e(Ye.DARK),depth:c,height:o/4,width:a}),offset:new U(0,-2*3/8,0)},{mesh:f,offset:new U(0,o*2/8,0)},{mesh:new ny(new _e(Ye.LIGHT_GREEN),20),offset:new U(0,o*2/8,0)}]});super({mesh:h});ve(this,"gem");ve(this,"hb");ve(this,"fullHealth");ve(this,"health");ve(this,"position");this.gem=f,this.position=i,this.health=t,this.fullHealth=t,this.hb=new Am({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new U(0,o/2+He.TILE_SIZE/2,0)})}afterSpawn(t,i){super.afterSpawn(t,i),this.hb.start(t)}beforeDeath(t,i,a){super.beforeDeath(t,i,a),this.hb.end(i)}update(t,i,a,o){super.update(t,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}class h1 extends fl{constructor(e){const t=()=>{const a=Math.floor(Math.random()*2)+2,o=Array.from({length:a},()=>Ht.createCone({radius:e.size/32,height:e.size/4,color:new _e(Ye.GREEN)})),c=2;o.forEach(h=>h.rotateOnAxis(new U(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-e.size/2+Math.random()*e.size,f=-e.size/2+Math.random()*e.size;return o.map(h=>({mesh:h,offset:new U(u,e.size*19/32,f)}))},i=()=>{const a=Ht.createCone({radius:e.size/32,height:e.size/2,color:new _e(Ye.GREEN)}),o=Ht.createSphere({radius:e.size/32,color:Math.random()<.5?new _e(Ye.PINK):new _e(Ye.YELLOW)}),c=-e.size/2+Math.random()*e.size,u=-e.size/2+Math.random()*e.size;return[{mesh:a,offset:new U(c,e.size*10/16,u)},{mesh:o,offset:new U(c,e.size*13/16,u)}]};super({mesh:new Nn({center:e.position,parts:[{mesh:Ht.createBox({width:e.size,height:e.size/4,depth:e.size,color:e.color??new _e(Ye.DARK_GREEN)}),offset:new U(0,e.size*3/8,0)},{mesh:Ht.createBox({width:e.size,height:e.size*3/4,depth:e.size,color:new _e(Ye.DIRT)}),offset:new U(0,-e.size/8,0)},...t(),...t(),...Math.random()<.4?i():[]]})})}}const f1={buildWorldComponents:r=>{const e=[];for(let t=0;t<r.width;t++)for(let i=0;i<r.height;i++)e.push(new h1({position:new U(t*r.tileSize,-r.tileSize/2,i*r.tileSize),size:r.tileSize,color:new _e(Ye.DARK_GREEN)}));return e}},Nr=class Nr extends kb{constructor(){super({width:8,height:8});ve(this,"spawnTimeout",0);ve(this,"headQuarters");this.headQuarters=new u1({position:new Ne(Math.floor(this.actorsGrid.length/2),0),health:30})}onStart(){var u;const t=this.actorsGrid.length,i=((u=this.actorsGrid[0])==null?void 0:u.length)??0;this.scene.background=new _e(Ye.VOID),this.scene.add(new jE(new _e(Ye.WHITE),new _e(Ye.DARK_GREEN),3)),f1.buildWorldComponents({width:t,height:i,tileSize:Nr.TILE_SIZE}).forEach(f=>this.addComponent(f));const o=new Ne(Math.floor(t/2),Math.floor(i/2));this.addActor(new c1({pos:o}),o),this.addActor(this.headQuarters,this.headQuarters.position);const c=new sy(Math.max(t,i));this.scene.add(c)}update(t,i){super.update(t,i);const a=this.spawnTimeout+i,o=Math.floor(a/Nr.SPAWN_TIMEOUT);this.spawnTimeout=a%Nr.SPAWN_TIMEOUT;for(let c=0;c<o;c++){const u=Math.floor(Math.random()*this.actorsGrid.length),f=new Ne(u,this.actorsGrid[u].length-1),h={pos:f,objective:this.headQuarters},p=Math.random();Math.random()<.33?this.addActor(new a1(h),f):p<.66?this.addActor(new s1(h),f):this.addActor(new r1(h),f)}}};ve(Nr,"SPAWN_TIMEOUT",2e3),ve(Nr,"TILE_SIZE",1);let rl=Nr;var Hr=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(Hr||{});const fh=new Yb;fh.addContainer(hh.BATTLEFIELD_CONTAINER,new rl);fh.setContainer(hh.BATTLEFIELD_CONTAINER);fh.start();
