var TS=Object.defineProperty;var AS=(r,t,e)=>t in r?TS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var wt=(r,t,e)=>AS(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="173",wS=0,Cd=1,bS=2,Wp=1,RS=2,Hi=3,dr=0,Nn=1,Vi=2,ur=0,ws=1,Ld=2,Pd=3,Id=4,CS=5,Dr=100,LS=101,PS=102,IS=103,DS=104,US=200,NS=201,FS=202,OS=203,su=204,au=205,BS=206,zS=207,GS=208,HS=209,VS=210,kS=211,WS=212,XS=213,qS=214,ou=0,lu=1,cu=2,Ls=3,uu=4,hu=5,fu=6,du=7,Xp=0,YS=1,ZS=2,hr=0,KS=1,$S=2,JS=3,QS=4,jS=5,tE=6,eE=7,qp=300,Ps=301,Is=302,pu=303,mu=304,ol=306,_u=1e3,Fr=1001,gu=1002,_i=1003,nE=1004,Mo=1005,Ti=1006,Tc=1007,Or=1008,qi=1009,Yp=1010,Zp=1011,Ma=1012,th=1013,Br=1014,ki=1015,Ea=1016,eh=1017,nh=1018,Ds=1020,Kp=35902,$p=1021,Jp=1022,mi=1023,Qp=1024,jp=1025,bs=1026,Us=1027,tm=1028,ih=1029,em=1030,rh=1031,sh=1033,Zo=33776,Ko=33777,$o=33778,Jo=33779,vu=35840,xu=35841,Mu=35842,Su=35843,Eu=36196,yu=37492,Tu=37496,Au=37808,wu=37809,bu=37810,Ru=37811,Cu=37812,Lu=37813,Pu=37814,Iu=37815,Du=37816,Uu=37817,Nu=37818,Fu=37819,Ou=37820,Bu=37821,Qo=36492,zu=36494,Gu=36495,nm=36283,Hu=36284,Vu=36285,ku=36286,iE=3200,rE=3201,im=0,sE=1,cr="",ii="srgb",Ns="srgb-linear",tl="linear",De="srgb",rs=7680,Dd=519,aE=512,oE=513,lE=514,rm=515,cE=516,uE=517,hE=518,fE=519,Wu=35044,Ud="300 es",Wi=2e3,el=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Xu=180/Math.PI;function fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function dE(r,t){return(r%t+t)%t}function wc(r,t,e){return(1-e)*r+e*t}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*a+t.x,this.y=o*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,i,a,o,c,u,f,h){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,f,h)}set(t,e,i,a,o,c,u,f,h){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=f,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],p=i[4],_=i[7],g=i[2],x=i[5],y=i[8],b=a[0],v=a[3],m=a[6],P=a[1],L=a[4],R=a[7],G=a[2],U=a[5],N=a[8];return o[0]=c*b+u*P+f*G,o[3]=c*v+u*L+f*U,o[6]=c*m+u*R+f*N,o[1]=h*b+p*P+_*G,o[4]=h*v+p*L+_*U,o[7]=h*m+p*R+_*N,o[2]=g*b+x*P+y*G,o[5]=g*v+x*L+y*U,o[8]=g*m+x*R+y*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],h=t[7],p=t[8];return e*c*p-e*u*h-i*o*p+i*u*f+a*o*h-a*c*f}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],h=t[7],p=t[8],_=p*c-u*h,g=u*f-p*o,x=h*o-c*f,y=e*_+i*g+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=_*b,t[1]=(a*h-p*i)*b,t[2]=(u*i-a*c)*b,t[3]=g*b,t[4]=(p*e-a*f)*b,t[5]=(a*o-u*e)*b,t[6]=x*b,t[7]=(i*f-h*e)*b,t[8]=(c*e-i*o)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,c,u){const f=Math.cos(o),h=Math.sin(o);return this.set(i*f,i*h,-i*(f*c+h*u)+c+t,-a*h,a*f,-a*(-h*c+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(bc.makeScale(t,e)),this}rotate(t){return this.premultiply(bc.makeRotation(-t)),this}translate(t,e){return this.premultiply(bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new oe;function sm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Sa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pE(){const r=Sa("canvas");return r.style.display="block",r}const Nd={};function ys(r){r in Nd||(Nd[r]=!0,console.warn(r))}function mE(r,t,e){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function _E(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gE(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fd=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vE(){const r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===De&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===De&&(a.r=Rs(a.r),a.g=Rs(a.g),a.b=Rs(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cr?tl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Ns]:{primaries:t,whitePoint:i,transfer:tl,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Fd,fromXYZ:Od,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),r}const Ae=vE();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ss;class xE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Sa("canvas")),ss.width=t.width,ss.height=t.height;const i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ss}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Xi(o[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ME=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Rc(a[c].image)):o.push(Rc(a[c]))}else o=Rc(a);i.url=o}return e||(t.images[this.uuid]=i),i}}function Rc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;class Rn extends Bs{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,i=Fr,a=Fr,o=Ti,c=Or,u=mi,f=qi,h=Rn.DEFAULT_ANISOTROPY,p=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=fr(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _u:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case gu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _u:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case gu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=qp;Rn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,i=0,a=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o;const f=t.elements,h=f[0],p=f[4],_=f[8],g=f[1],x=f[5],y=f[9],b=f[2],v=f[6],m=f[10];if(Math.abs(p-g)<.01&&Math.abs(_-b)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+b)<.1&&Math.abs(y+v)<.1&&Math.abs(h+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,R=(x+1)/2,G=(m+1)/2,U=(p+g)/4,N=(_+b)/4,H=(y+v)/4;return L>R&&L>G?L<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(L),a=U/i,o=N/i):R>G?R<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(R),i=U/a,o=H/a):G<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(G),i=N/o,a=H/o),this.set(i,a,o,e),this}let P=Math.sqrt((v-y)*(v-y)+(_-b)*(_-b)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(v-y)/P,this.y=(_-b)/P,this.z=(g-p)/P,this.w=Math.acos((h+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends Bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const a={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Rn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new am(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends EE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class om extends Rn{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yE extends Rn{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,c,u){let f=i[a+0],h=i[a+1],p=i[a+2],_=i[a+3];const g=o[c+0],x=o[c+1],y=o[c+2],b=o[c+3];if(u===0){t[e+0]=f,t[e+1]=h,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=y,t[e+3]=b;return}if(_!==b||f!==g||h!==x||p!==y){let v=1-u;const m=f*g+h*x+p*y+_*b,P=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const G=Math.sqrt(L),U=Math.atan2(G,m*P);v=Math.sin(v*U)/G,u=Math.sin(u*U)/G}const R=u*P;if(f=f*v+g*R,h=h*v+x*R,p=p*v+y*R,_=_*v+b*R,v===1-u){const G=1/Math.sqrt(f*f+h*h+p*p+_*_);f*=G,h*=G,p*=G,_*=G}}t[e]=f,t[e+1]=h,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,a,o,c){const u=i[a],f=i[a+1],h=i[a+2],p=i[a+3],_=o[c],g=o[c+1],x=o[c+2],y=o[c+3];return t[e]=u*y+p*_+f*x-h*g,t[e+1]=f*y+p*g+h*_-u*x,t[e+2]=h*y+p*x+u*g-f*_,t[e+3]=p*y-u*_-f*g-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,f=Math.sin,h=u(i/2),p=u(a/2),_=u(o/2),g=f(i/2),x=f(a/2),y=f(o/2);switch(c){case"XYZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"YZX":this._x=g*p*_+h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_-g*x*y;break;case"XZY":this._x=g*p*_-h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],o=e[8],c=e[1],u=e[5],f=e[9],h=e[2],p=e[6],_=e[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-f)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-f)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(f+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(f+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,o=t._z,c=t._w,u=e._x,f=e._y,h=e._z,p=e._w;return this._x=i*p+c*u+a*h-o*f,this._y=a*p+c*f+o*u-i*h,this._z=o*p+c*h+i*f-a*u,this._w=c*p-i*u-a*f-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*t._w+i*t._x+a*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*i+e*this._x,this._y=x*a+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),_=Math.sin((1-e)*p)/h,g=Math.sin(e*p)/h;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,o=t.x,c=t.y,u=t.z,f=t.w,h=2*(c*a-u*i),p=2*(u*e-o*a),_=2*(o*i-c*e);return this.x=e+f*h+c*_-u*p,this.y=i+f*p+u*h-o*_,this.z=a+f*_+o*p-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,o=t.z,c=e.x,u=e.y,f=e.z;return this.x=a*f-o*u,this.y=o*c-i*f,this.z=i*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Cc.copy(this).projectOnVector(t),this.sub(Cc)}reflect(t){return this.sub(Cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new F,Bd=new ya;class Ta{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,fi):fi.fromBufferAttribute(o,c),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(na),Eo.subVectors(this.max,na),as.subVectors(t.a,na),os.subVectors(t.b,na),ls.subVectors(t.c,na),ir.subVectors(os,as),rr.subVectors(ls,os),Ar.subVectors(as,ls);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!Lc(e,as,os,ls,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,as,os,ls,Eo))?!1:(yo.crossVectors(ir,rr),e=[yo.x,yo.y,yo.z],Lc(e,as,os,ls,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new F,new F,new F,new F,new F,new F,new F,new F],fi=new F,So=new Ta,as=new F,os=new F,ls=new F,ir=new F,rr=new F,Ar=new F,na=new F,Eo=new F,yo=new F,wr=new F;function Lc(r,t,e,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){wr.fromArray(r,o);const u=a.x*Math.abs(wr.x)+a.y*Math.abs(wr.y)+a.z*Math.abs(wr.z),f=t.dot(wr),h=e.dot(wr),p=i.dot(wr);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const TE=new Ta,ia=new F,Pc=new F;class ll{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):TE.setFromPoints(t).getCenter(i);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ia.subVectors(t,this.center);const e=ia.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(ia,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ia.copy(t.center).add(Pc)),this.expandByPoint(ia.copy(t.center).sub(Pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new F,Ic=new F,To=new F,sr=new F,Dc=new F,Ao=new F,Uc=new F;class lm{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Ic.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Ic);const o=t.distanceTo(e)*.5,c=-this.direction.dot(To),u=sr.dot(this.direction),f=-sr.dot(To),h=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,y;if(p>0)if(_=c*f-u,g=c*u-f,y=o*p,_>=0)if(g>=-y)if(g<=y){const b=1/p;_*=b,g*=b,x=_*(_+c*g+2*u)+g*(c*_+g+2*f)+h}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;else g<=-y?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+h):g<=y?(_=0,g=Math.min(Math.max(-o,-f),o),x=g*(g+2*f)+h):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-f),o),x=-_*_+g*(g+2*f)+h);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Ic).addScaledVector(To,g),x}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const i=Oi.dot(this.direction),a=Oi.dot(Oi)-i*i,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,c,u,f;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(t.min.x-g.x)*h,a=(t.max.x-g.x)*h):(i=(t.max.x-g.x)*h,a=(t.min.x-g.x)*h),p>=0?(o=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-g.z)*_,f=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,f=(t.min.z-g.z)*_),i>f||u>a)||((u>i||i!==i)&&(i=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,a,o){Dc.subVectors(e,t),Ao.subVectors(i,t),Uc.crossVectors(Dc,Ao);let c=this.direction.dot(Uc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,t);const f=u*this.direction.dot(Ao.crossVectors(sr,Ao));if(f<0)return null;const h=u*this.direction.dot(Dc.cross(sr));if(h<0||f+h>c)return null;const p=-u*sr.dot(Uc);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,e,i,a,o,c,u,f,h,p,_,g,x,y,b,v){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,f,h,p,_,g,x,y,b,v)}set(t,e,i,a,o,c,u,f,h,p,_,g,x,y,b,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=f,m[2]=h,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=b,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/cs.setFromMatrixColumn(t,0).length(),o=1/cs.setFromMatrixColumn(t,1).length(),c=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const g=c*p,x=c*_,y=u*p,b=u*_;e[0]=f*p,e[4]=-f*_,e[8]=h,e[1]=x+y*h,e[5]=g-b*h,e[9]=-u*f,e[2]=b-g*h,e[6]=y+x*h,e[10]=c*f}else if(t.order==="YXZ"){const g=f*p,x=f*_,y=h*p,b=h*_;e[0]=g+b*u,e[4]=y*u-x,e[8]=c*h,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-y,e[6]=b+g*u,e[10]=c*f}else if(t.order==="ZXY"){const g=f*p,x=f*_,y=h*p,b=h*_;e[0]=g-b*u,e[4]=-c*_,e[8]=y+x*u,e[1]=x+y*u,e[5]=c*p,e[9]=b-g*u,e[2]=-c*h,e[6]=u,e[10]=c*f}else if(t.order==="ZYX"){const g=c*p,x=c*_,y=u*p,b=u*_;e[0]=f*p,e[4]=y*h-x,e[8]=g*h+b,e[1]=f*_,e[5]=b*h+g,e[9]=x*h-y,e[2]=-h,e[6]=u*f,e[10]=c*f}else if(t.order==="YZX"){const g=c*f,x=c*h,y=u*f,b=u*h;e[0]=f*p,e[4]=b-g*_,e[8]=y*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-h*p,e[6]=x*_+y,e[10]=g-b*_}else if(t.order==="XZY"){const g=c*f,x=c*h,y=u*f,b=u*h;e[0]=f*p,e[4]=-_,e[8]=h*p,e[1]=g*_+b,e[5]=c*p,e[9]=x*_-y,e[2]=y*_-x,e[6]=u*p,e[10]=b*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(AE,t,wE)}lookAt(t,e,i){const a=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ar.crossVectors(i,kn),ar.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ar.crossVectors(i,kn)),ar.normalize(),wo.crossVectors(kn,ar),a[0]=ar.x,a[4]=wo.x,a[8]=kn.x,a[1]=ar.y,a[5]=wo.y,a[9]=kn.y,a[2]=ar.z,a[6]=wo.z,a[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],p=i[1],_=i[5],g=i[9],x=i[13],y=i[2],b=i[6],v=i[10],m=i[14],P=i[3],L=i[7],R=i[11],G=i[15],U=a[0],N=a[4],H=a[8],C=a[12],T=a[1],z=a[5],Q=a[9],$=a[13],it=a[2],ut=a[6],nt=a[10],dt=a[14],j=a[3],yt=a[7],Rt=a[11],Ft=a[15];return o[0]=c*U+u*T+f*it+h*j,o[4]=c*N+u*z+f*ut+h*yt,o[8]=c*H+u*Q+f*nt+h*Rt,o[12]=c*C+u*$+f*dt+h*Ft,o[1]=p*U+_*T+g*it+x*j,o[5]=p*N+_*z+g*ut+x*yt,o[9]=p*H+_*Q+g*nt+x*Rt,o[13]=p*C+_*$+g*dt+x*Ft,o[2]=y*U+b*T+v*it+m*j,o[6]=y*N+b*z+v*ut+m*yt,o[10]=y*H+b*Q+v*nt+m*Rt,o[14]=y*C+b*$+v*dt+m*Ft,o[3]=P*U+L*T+R*it+G*j,o[7]=P*N+L*z+R*ut+G*yt,o[11]=P*H+L*Q+R*nt+G*Rt,o[15]=P*C+L*$+R*dt+G*Ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],c=t[1],u=t[5],f=t[9],h=t[13],p=t[2],_=t[6],g=t[10],x=t[14],y=t[3],b=t[7],v=t[11],m=t[15];return y*(+o*f*_-a*h*_-o*u*g+i*h*g+a*u*x-i*f*x)+b*(+e*f*x-e*h*g+o*c*g-a*c*x+a*h*p-o*f*p)+v*(+e*h*_-e*u*x-o*c*_+i*c*x+o*u*p-i*h*p)+m*(-a*u*p-e*f*_+e*u*g+a*c*_-i*c*g+i*f*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],f=t[6],h=t[7],p=t[8],_=t[9],g=t[10],x=t[11],y=t[12],b=t[13],v=t[14],m=t[15],P=_*v*h-b*g*h+b*f*x-u*v*x-_*f*m+u*g*m,L=y*g*h-p*v*h-y*f*x+c*v*x+p*f*m-c*g*m,R=p*b*h-y*_*h+y*u*x-c*b*x-p*u*m+c*_*m,G=y*_*f-p*b*f-y*u*g+c*b*g+p*u*v-c*_*v,U=e*P+i*L+a*R+o*G;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return t[0]=P*N,t[1]=(b*g*o-_*v*o-b*a*x+i*v*x+_*a*m-i*g*m)*N,t[2]=(u*v*o-b*f*o+b*a*h-i*v*h-u*a*m+i*f*m)*N,t[3]=(_*f*o-u*g*o-_*a*h+i*g*h+u*a*x-i*f*x)*N,t[4]=L*N,t[5]=(p*v*o-y*g*o+y*a*x-e*v*x-p*a*m+e*g*m)*N,t[6]=(y*f*o-c*v*o-y*a*h+e*v*h+c*a*m-e*f*m)*N,t[7]=(c*g*o-p*f*o+p*a*h-e*g*h-c*a*x+e*f*x)*N,t[8]=R*N,t[9]=(y*_*o-p*b*o-y*i*x+e*b*x+p*i*m-e*_*m)*N,t[10]=(c*b*o-y*u*o+y*i*h-e*b*h-c*i*m+e*u*m)*N,t[11]=(p*u*o-c*_*o-p*i*h+e*_*h+c*i*x-e*u*x)*N,t[12]=G*N,t[13]=(p*b*a-y*_*a+y*i*g-e*b*g-p*i*v+e*_*v)*N,t[14]=(y*u*a-c*b*a-y*i*f+e*b*f+c*i*v-e*u*v)*N,t[15]=(c*_*a-p*u*a+p*i*f-e*_*f-c*i*g+e*u*g)*N,this}scale(t){const e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),o=1-i,c=t.x,u=t.y,f=t.z,h=o*c,p=o*u;return this.set(h*c+i,h*u-a*f,h*f+a*u,0,h*u+a*f,p*u+i,p*f-a*c,0,h*f-a*u,p*f+a*c,o*f*f+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,c){return this.set(1,i,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,o=e._x,c=e._y,u=e._z,f=e._w,h=o+o,p=c+c,_=u+u,g=o*h,x=o*p,y=o*_,b=c*p,v=c*_,m=u*_,P=f*h,L=f*p,R=f*_,G=i.x,U=i.y,N=i.z;return a[0]=(1-(b+m))*G,a[1]=(x+R)*G,a[2]=(y-L)*G,a[3]=0,a[4]=(x-R)*U,a[5]=(1-(g+m))*U,a[6]=(v+P)*U,a[7]=0,a[8]=(y+L)*N,a[9]=(v-P)*N,a[10]=(1-(g+b))*N,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let o=cs.set(a[0],a[1],a[2]).length();const c=cs.set(a[4],a[5],a[6]).length(),u=cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],di.copy(this);const h=1/o,p=1/c,_=1/u;return di.elements[0]*=h,di.elements[1]*=h,di.elements[2]*=h,di.elements[4]*=p,di.elements[5]*=p,di.elements[6]*=p,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,e.setFromRotationMatrix(di),i.x=o,i.y=c,i.z=u,this}makePerspective(t,e,i,a,o,c,u=Wi){const f=this.elements,h=2*o/(e-t),p=2*o/(i-a),_=(e+t)/(e-t),g=(i+a)/(i-a);let x,y;if(u===Wi)x=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(u===el)x=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=y,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,a,o,c,u=Wi){const f=this.elements,h=1/(e-t),p=1/(i-a),_=1/(c-o),g=(e+t)*h,x=(i+a)*p;let y,b;if(u===Wi)y=(c+o)*_,b=-2*_;else if(u===el)y=o*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=b,f[14]=-y,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const cs=new F,di=new ke,AE=new F(0,0,0),wE=new F(1,1,1),ar=new F,wo=new F,kn=new F,zd=new ke,Gd=new ya;class Ai{constructor(t=0,e=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],f=a[1],h=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class cm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bE=0;const Hd=new F,us=new ya,Bi=new ke,bo=new F,ra=new F,RE=new F,CE=new ya,Vd=new F(1,0,0),kd=new F(0,1,0),Wd=new F(0,0,1),Xd={type:"added"},LE={type:"removed"},hs={type:"childadded",child:null},Nc={type:"childremoved",child:null};class pn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new F,e=new Ai,i=new ya,a=new F(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ke},normalMatrix:{value:new oe}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(kd,t)}rotateZ(t){return this.rotateOnAxis(Wd,t)}translateOnAxis(t,e){return Hd.copy(t).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(kd,t)}translateZ(t){return this.translateOnAxis(Wd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bo.copy(t):bo.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ra,bo,this.up):Bi.lookAt(bo,ra,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),us.setFromRotationMatrix(Bi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xd),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(LE),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xd),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,RE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,CE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const _=f[h];o(t.shapes,_)}else o(t.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(t.materials,this.material[f]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(o(t.animations,f))}}if(e){const u=c(t.geometries),f=c(t.materials),h=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),y=c(t.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new F,zi=new F,Fc=new F,Gi=new F,fs=new F,ds=new F,qd=new F,Oc=new F,Bc=new F,zc=new F,Gc=new Ne,Hc=new Ne,Vc=new Ne;class ri{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),pi.subVectors(t,e),a.cross(pi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){pi.subVectors(a,e),zi.subVectors(i,e),Fc.subVectors(t,e);const c=pi.dot(pi),u=pi.dot(zi),f=pi.dot(Fc),h=zi.dot(zi),p=zi.dot(Fc),_=c*h-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(h*f-u*p)*g,y=(c*p-u*f)*g;return o.set(1-x-y,y,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,a,o,c,u,f){return this.getBarycoord(t,e,i,a,Gi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Gi.x),f.addScaledVector(c,Gi.y),f.addScaledVector(u,Gi.z),f)}static getInterpolatedAttribute(t,e,i,a,o,c){return Gc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),Gc.fromBufferAttribute(t,e),Hc.fromBufferAttribute(t,i),Vc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(Gc,o.x),c.addScaledVector(Hc,o.y),c.addScaledVector(Vc,o.z),c}static isFrontFacing(t,e,i,a){return pi.subVectors(i,e),zi.subVectors(t,e),pi.cross(zi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return ri.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,o=this.c;let c,u;fs.subVectors(a,i),ds.subVectors(o,i),Oc.subVectors(t,i);const f=fs.dot(Oc),h=ds.dot(Oc);if(f<=0&&h<=0)return e.copy(i);Bc.subVectors(t,a);const p=fs.dot(Bc),_=ds.dot(Bc);if(p>=0&&_<=p)return e.copy(a);const g=f*_-p*h;if(g<=0&&f>=0&&p<=0)return c=f/(f-p),e.copy(i).addScaledVector(fs,c);zc.subVectors(t,o);const x=fs.dot(zc),y=ds.dot(zc);if(y>=0&&x<=y)return e.copy(o);const b=x*h-f*y;if(b<=0&&h>=0&&y<=0)return u=h/(h-y),e.copy(i).addScaledVector(ds,u);const v=p*y-x*_;if(v<=0&&_-p>=0&&x-y>=0)return qd.subVectors(o,a),u=(_-p)/(_-p+(x-y)),e.copy(a).addScaledVector(qd,u);const m=1/(v+b+g);return c=b*m,u=g*m,e.copy(i).addScaledVector(fs,c).addScaledVector(ds,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function kc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Ae.workingColorSpace){if(t=dE(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=kc(c,o,t+1/3),this.g=kc(c,o,t),this.b=kc(c,o,t-1/3)}return Ae.toWorkingColorSpace(this,a),this}setStyle(t,e=ii){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){const i=um[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Ae.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Ee(Mn.r*255,0,255))*65536+Math.round(Ee(Mn.g*255,0,255))*256+Math.round(Ee(Mn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,a=Mn.g,o=Mn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let f,h;const p=(u+c)/2;if(u===c)f=0,h=0;else{const _=c-u;switch(h=p<=.5?_/(c+u):_/(2-c-u),c){case i:f=(a-o)/_+(a<o?6:0);break;case a:f=(o-i)/_+2;break;case o:f=(i-a)/_+4;break}f/=6}return t.h=f,t.s=h,t.l=p,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ii){Ae.fromWorkingColorSpace(Mn.copy(this),t);const e=Mn.r,i=Mn.g,a=Mn.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(Ro);const i=wc(or.h,Ro.h,e),a=wc(or.s,Ro.s,e),o=wc(or.l,Ro.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new gt;gt.NAMES=um;let PE=0;class Hr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=ws,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=au,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==su&&(i.blendSrc=this.blendSrc),this.blendDst!==au&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new F,Co=new Nt;let IE=0;class gi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wu&&(t.usage=this.usage),t}}class hm extends gi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fm extends gi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class je extends gi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let DE=0;const ei=new ke,Wc=new pn,ps=new F,Wn=new Ta,sa=new Ta,hn=new F;class qn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sm(t)?fm:hm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new oe().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Wc.lookAt(t),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new je(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];sa.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Wn.min,sa.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,sa.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(sa.min),Wn.expandByPoint(sa.max))}Wn.getCenter(i);let a=0;for(let o=0,c=t.count;o<c;o++)hn.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(hn));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)hn.fromBufferAttribute(u,h),f&&(ps.fromBufferAttribute(t,h),hn.add(ps)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let H=0;H<i.count;H++)u[H]=new F,f[H]=new F;const h=new F,p=new F,_=new F,g=new Nt,x=new Nt,y=new Nt,b=new F,v=new F;function m(H,C,T){h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,T),g.fromBufferAttribute(o,H),x.fromBufferAttribute(o,C),y.fromBufferAttribute(o,T),p.sub(h),_.sub(h),x.sub(g),y.sub(g);const z=1/(x.x*y.y-y.x*x.y);isFinite(z)&&(b.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(z),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(z),u[H].add(b),u[C].add(b),u[T].add(b),f[H].add(v),f[C].add(v),f[T].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let H=0,C=P.length;H<C;++H){const T=P[H],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new F,R=new F,G=new F,U=new F;function N(H){G.fromBufferAttribute(a,H),U.copy(G);const C=u[H];L.copy(C),L.sub(G.multiplyScalar(G.dot(C))).normalize(),R.crossVectors(U,C);const z=R.dot(f[H])<0?-1:1;c.setXYZW(H,L.x,L.y,L.z,z)}for(let H=0,C=P.length;H<C;++H){const T=P[H],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)N(t.getX($+0)),N(t.getX($+1)),N(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new F,o=new F,c=new F,u=new F,f=new F,h=new F,p=new F,_=new F;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),b=t.getX(g+1),v=t.getX(g+2);a.fromBufferAttribute(e,y),o.fromBufferAttribute(e,b),c.fromBufferAttribute(e,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,v),u.add(p),f.add(p),h.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,f){const h=u.array,p=u.itemSize,_=u.normalized,g=new h.constructor(f.length*p);let x=0,y=0;for(let b=0,v=f.length;b<v;b++){u.isInterleavedBufferAttribute?x=f[b]*u.data.stride+u.offset:x=f[b]*p;for(let m=0;m<p;m++)g[y++]=h[x++]}return new gi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,i=this.index.array,a=this.attributes;for(const u in a){const f=a[u],h=t(f,i);e.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,_=h.length;p<_;p++){const g=h[p],x=t(g,i);f.push(x)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(t[h]=f[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const f in i){const h=i[f];t.data.attributes[f]=h.toJSON(t.data)}const a={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let _=0,g=h.length;_<g;_++){const x=h[_];p.push(x.toJSON(t.data))}p.length>0&&(a[f]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(e))}const o=t.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[h]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,p=c.length;h<p;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new ke,br=new lm,Lo=new ll,Zd=new F,Po=new F,Io=new F,Do=new F,Xc=new F,Uo=new F,Kd=new F,No=new F;class bn extends pn{constructor(t=new qn,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){Uo.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],_=o[f];p!==0&&(Xc.fromBufferAttribute(_,t),c?Uo.addScaledVector(Xc,p):Uo.addScaledVector(Xc.sub(e),p))}e.add(Uo)}return e}raycast(t,e){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(o),br.copy(t.ray).recast(t.near),!(Lo.containsPoint(br.origin)===!1&&(br.intersectSphere(Lo,Zd)===null||br.origin.distanceToSquared(Zd)>(t.far-t.near)**2))&&(Yd.copy(o).invert(),br.copy(t.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,i){let a;const o=this.geometry,c=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let R=P,G=L;R<G;R+=3){const U=u.getX(R),N=u.getX(R+1),H=u.getX(R+2);a=Fo(this,m,t,i,h,p,_,U,N,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),b=Math.min(u.count,x.start+x.count);for(let v=y,m=b;v<m;v+=3){const P=u.getX(v),L=u.getX(v+1),R=u.getX(v+2);a=Fo(this,c,t,i,h,p,_,P,L,R),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(f.count,Math.min(v.start+v.count,x.start+x.count));for(let R=P,G=L;R<G;R+=3){const U=R,N=R+1,H=R+2;a=Fo(this,m,t,i,h,p,_,U,N,H),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let v=y,m=b;v<m;v+=3){const P=v,L=v+1,R=v+2;a=Fo(this,c,t,i,h,p,_,P,L,R),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}}}function UE(r,t,e,i,a,o,c,u){let f;if(t.side===Nn?f=i.intersectTriangle(c,o,a,!0,u):f=i.intersectTriangle(a,o,c,t.side===dr,u),f===null)return null;No.copy(u),No.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(No);return h<e.near||h>e.far?null:{distance:h,point:No.clone(),object:r}}function Fo(r,t,e,i,a,o,c,u,f,h){r.getVertexPosition(u,Po),r.getVertexPosition(f,Io),r.getVertexPosition(h,Do);const p=UE(r,t,e,i,Po,Io,Do,Kd);if(p){const _=new F;ri.getBarycoord(Kd,Po,Io,Do,_),a&&(p.uv=ri.getInterpolatedAttribute(a,u,f,h,_,new Nt)),o&&(p.uv1=ri.getInterpolatedAttribute(o,u,f,h,_,new Nt)),c&&(p.normal=ri.getInterpolatedAttribute(c,u,f,h,_,new F),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new F,materialIndex:0};ri.getNormal(Po,Io,Do,g.normal),p.face=g,p.barycoord=_}return p}class Gr extends qn{constructor(t=1,e=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const f=[],h=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,i,e,t,c,o,0),y("z","y","x",1,-1,i,e,-t,c,o,1),y("x","z","y",1,1,t,i,e,a,c,2),y("x","z","y",1,-1,t,i,-e,a,c,3),y("x","y","z",1,-1,t,e,i,a,o,4),y("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(f),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(_,2));function y(b,v,m,P,L,R,G,U,N,H,C){const T=R/N,z=G/H,Q=R/2,$=G/2,it=U/2,ut=N+1,nt=H+1;let dt=0,j=0;const yt=new F;for(let Rt=0;Rt<nt;Rt++){const Ft=Rt*z-$;for(let ue=0;ue<ut;ue++){const Ce=ue*T-Q;yt[b]=Ce*P,yt[v]=Ft*L,yt[m]=it,h.push(yt.x,yt.y,yt.z),yt[b]=0,yt[v]=0,yt[m]=U>0?1:-1,p.push(yt.x,yt.y,yt.z),_.push(ue/N),_.push(1-Rt/H),dt+=1}}for(let Rt=0;Rt<H;Rt++)for(let Ft=0;Ft<N;Ft++){const ue=g+Ft+ut*Rt,Ce=g+Ft+ut*(Rt+1),ot=g+(Ft+1)+ut*(Rt+1),_t=g+(Ft+1)+ut*Rt;f.push(ue,Ce,_t),f.push(Ce,ot,_t),j+=6}u.addGroup(x,j,C),x+=j,g+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const a=r[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function wn(r){const t={};for(let e=0;e<r.length;e++){const i=Fs(r[e]);for(const a in i)t[a]=i[a]}return t}function NE(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function dm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const FE={clone:Fs,merge:wn};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=NE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new F,$d=new Nt,Jd=new Nt;class Xn extends pm{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xu*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,$d,Jd),e.subVectors(Jd,$d)}setViewOffset(t,e,i,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/f,e-=c.offsetY*i/h,a*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,_s=1;class zE extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(ms,_s,t,e);a.layers=this.layers,this.add(a);const o=new Xn(ms,_s,t,e);o.layers=this.layers,this.add(o);const c=new Xn(ms,_s,t,e);c.layers=this.layers,this.add(c);const u=new Xn(ms,_s,t,e);u.layers=this.layers,this.add(u);const f=new Xn(ms,_s,t,e);f.layers=this.layers,this.add(f);const h=new Xn(ms,_s,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,o,c,u,f]=e;for(const h of e)this.remove(h);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,f,h,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,u),t.setRenderTarget(i,3,a),t.render(e,f),t.setRenderTarget(i,4,a),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class mm extends Rn{constructor(t,e,i,a,o,c,u,f,h,p){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,i,a,o,c,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class GE extends zr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new mm(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Gr(5,5,5),o=new pr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ur});o.uniforms.tEquirect.value=e;const c=new bn(a,o),u=e.minFilter;return e.minFilter===Or&&(e.minFilter=Ti),new zE(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,a){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(o)}}class Oo extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const b of t.hand.values()){const v=e.getJointPose(b,i),m=this._getHandJoint(h,b);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;h.inputState.pinching&&g>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Oo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class VE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let a=0,o=this.stride;a<o;a++)this.array[t+a]=e.array[i+a];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new F;class nl{constructor(t,e,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array),o=Ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[a+o])}return new gi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qu extends Hr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const aa=new F,vs=new F,xs=new F,Ms=new Nt,oa=new Nt,_m=new ke,Bo=new F,la=new F,zo=new F,Qd=new Nt,Yc=new Nt,jd=new Nt;class tp extends pn{constructor(t=new qu){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new qn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kE(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new nl(i,3,0,!1)),gs.setAttribute("uv",new nl(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),_m.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;Go(Bo.set(-.5,-.5,0),xs,c,vs,a,o),Go(la.set(.5,-.5,0),xs,c,vs,a,o),Go(zo.set(.5,.5,0),xs,c,vs,a,o),Qd.set(0,0),Yc.set(1,0),jd.set(1,1);let u=t.ray.intersectTriangle(Bo,la,zo,!1,aa);if(u===null&&(Go(la.set(-.5,.5,0),xs,c,vs,a,o),Yc.set(0,1),u=t.ray.intersectTriangle(Bo,zo,la,!1,aa),u===null))return;const f=t.ray.origin.distanceTo(aa);f<t.near||f>t.far||e.push({distance:f,point:aa.clone(),uv:ri.getInterpolation(aa,Bo,la,zo,Qd,Yc,jd,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Go(r,t,e,i,a,o){Ms.subVectors(r,e).addScalar(.5).multiply(i),a!==void 0?(oa.x=o*Ms.x-a*Ms.y,oa.y=a*Ms.x+o*Ms.y):oa.copy(Ms),r.copy(t),r.x+=oa.x,r.y+=oa.y,r.applyMatrix4(_m)}const Zc=new F,WE=new F,XE=new oe;class Pr{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Zc.subVectors(i,e).cross(WE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||XE.getNormalMatrix(t),a=this.coplanarPoint(Zc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new ll,Ho=new F;class ah{constructor(t=new Pr,e=new Pr,i=new Pr,a=new Pr,o=new Pr,c=new Pr){this.planes=[t,e,i,a,o,c]}set(t,e,i,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,a=t.elements,o=a[0],c=a[1],u=a[2],f=a[3],h=a[4],p=a[5],_=a[6],g=a[7],x=a[8],y=a[9],b=a[10],v=a[11],m=a[12],P=a[13],L=a[14],R=a[15];if(i[0].setComponents(f-o,g-h,v-x,R-m).normalize(),i[1].setComponents(f+o,g+h,v+x,R+m).normalize(),i[2].setComponents(f+c,g+p,v+y,R+P).normalize(),i[3].setComponents(f-c,g-p,v-y,R-P).normalize(),i[4].setComponents(f-u,g-_,v-b,R-L).normalize(),e===Wi)i[5].setComponents(f+u,g+_,v+b,R+L).normalize();else if(e===el)i[5].setComponents(u,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Ho.x=a.normal.x>0?t.max.x:t.min.x,Ho.y=a.normal.y>0?t.max.y:t.min.y,Ho.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gm extends Hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const il=new F,rl=new F,ep=new ke,ca=new lm,Vo=new ll,Kc=new F,np=new F;class qE extends pn{constructor(t=new qn,e=new gm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,o=e.count;a<o;a++)il.fromBufferAttribute(e,a-1),rl.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=il.distanceTo(rl);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(a),Vo.radius+=o,t.ray.intersectsSphere(Vo)===!1)return;ep.copy(a).invert(),ca.copy(t.ray).applyMatrix4(ep);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let b=x,v=y-1;b<v;b+=h){const m=p.getX(b),P=p.getX(b+1),L=ko(this,t,ca,f,m,P,b);L&&e.push(L)}if(this.isLineLoop){const b=p.getX(y-1),v=p.getX(x),m=ko(this,t,ca,f,b,v,y-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let b=x,v=y-1;b<v;b+=h){const m=ko(this,t,ca,f,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){const b=ko(this,t,ca,f,y-1,x,y-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function ko(r,t,e,i,a,o,c){const u=r.geometry.attributes.position;if(il.fromBufferAttribute(u,a),rl.fromBufferAttribute(u,o),e.distanceSqToSegment(il,rl,Kc,np)>i)return;Kc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Kc);if(!(h<t.near||h>t.far))return{distance:h,point:np.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const ip=new F,rp=new F;class YE extends qE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let a=0,o=e.count;a<o;a+=2)ip.fromBufferAttribute(e,a),rp.fromBufferAttribute(e,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ip.distanceTo(rp);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vm extends Rn{constructor(t,e,i,a,o,c,u,f,h,p=bs){if(p!==bs&&p!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===bs&&(i=Br),i===void 0&&p===Us&&(i=Ds),super(null,a,o,c,u,f,p,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:_i,this.minFilter=f!==void 0?f:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cl extends qn{constructor(t=1,e=1,i=1,a=32,o=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:f};const h=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],g=[],x=[];let y=0;const b=[],v=i/2;let m=0;P(),c===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(x,2));function P(){const R=new F,G=new F;let U=0;const N=(e-t)/i;for(let H=0;H<=o;H++){const C=[],T=H/o,z=T*(e-t)+t;for(let Q=0;Q<=a;Q++){const $=Q/a,it=$*f+u,ut=Math.sin(it),nt=Math.cos(it);G.x=z*ut,G.y=-T*i+v,G.z=z*nt,_.push(G.x,G.y,G.z),R.set(ut,N,nt).normalize(),g.push(R.x,R.y,R.z),x.push($,1-T),C.push(y++)}b.push(C)}for(let H=0;H<a;H++)for(let C=0;C<o;C++){const T=b[C][H],z=b[C+1][H],Q=b[C+1][H+1],$=b[C][H+1];(t>0||C!==0)&&(p.push(T,z,$),U+=3),(e>0||C!==o-1)&&(p.push(z,Q,$),U+=3)}h.addGroup(m,U,0),m+=U}function L(R){const G=y,U=new Nt,N=new F;let H=0;const C=R===!0?t:e,T=R===!0?1:-1;for(let Q=1;Q<=a;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),y++;const z=y;for(let Q=0;Q<=a;Q++){const it=Q/a*f+u,ut=Math.cos(it),nt=Math.sin(it);N.x=C*nt,N.y=v*T,N.z=C*ut,_.push(N.x,N.y,N.z),g.push(0,T,0),U.x=ut*.5+.5,U.y=nt*.5*T+.5,x.push(U.x,U.y),y++}for(let Q=0;Q<a;Q++){const $=G+Q,it=z+Q;R===!0?p.push(it,it+1,$):p.push(it+1,it,$),H+=3}h.addGroup(m,H,R===!0?1:2),m+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oh extends cl{constructor(t=1,e=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new oh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lh extends qn{constructor(t=[],e=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:a};const o=[],c=[];u(a),h(i),p(),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(o.slice(),3)),this.setAttribute("uv",new je(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const L=new F,R=new F,G=new F;for(let U=0;U<e.length;U+=3)x(e[U+0],L),x(e[U+1],R),x(e[U+2],G),f(L,R,G,P)}function f(P,L,R,G){const U=G+1,N=[];for(let H=0;H<=U;H++){N[H]=[];const C=P.clone().lerp(R,H/U),T=L.clone().lerp(R,H/U),z=U-H;for(let Q=0;Q<=z;Q++)Q===0&&H===U?N[H][Q]=C:N[H][Q]=C.clone().lerp(T,Q/z)}for(let H=0;H<U;H++)for(let C=0;C<2*(U-H)-1;C++){const T=Math.floor(C/2);C%2===0?(g(N[H][T+1]),g(N[H+1][T]),g(N[H][T])):(g(N[H][T+1]),g(N[H+1][T+1]),g(N[H+1][T]))}}function h(P){const L=new F;for(let R=0;R<o.length;R+=3)L.x=o[R+0],L.y=o[R+1],L.z=o[R+2],L.normalize().multiplyScalar(P),o[R+0]=L.x,o[R+1]=L.y,o[R+2]=L.z}function p(){const P=new F;for(let L=0;L<o.length;L+=3){P.x=o[L+0],P.y=o[L+1],P.z=o[L+2];const R=v(P)/2/Math.PI+.5,G=m(P)/Math.PI+.5;c.push(R,1-G)}y(),_()}function _(){for(let P=0;P<c.length;P+=6){const L=c[P+0],R=c[P+2],G=c[P+4],U=Math.max(L,R,G),N=Math.min(L,R,G);U>.9&&N<.1&&(L<.2&&(c[P+0]+=1),R<.2&&(c[P+2]+=1),G<.2&&(c[P+4]+=1))}}function g(P){o.push(P.x,P.y,P.z)}function x(P,L){const R=P*3;L.x=t[R+0],L.y=t[R+1],L.z=t[R+2]}function y(){const P=new F,L=new F,R=new F,G=new F,U=new Nt,N=new Nt,H=new Nt;for(let C=0,T=0;C<o.length;C+=9,T+=6){P.set(o[C+0],o[C+1],o[C+2]),L.set(o[C+3],o[C+4],o[C+5]),R.set(o[C+6],o[C+7],o[C+8]),U.set(c[T+0],c[T+1]),N.set(c[T+2],c[T+3]),H.set(c[T+4],c[T+5]),G.copy(P).add(L).add(R).divideScalar(3);const z=v(G);b(U,T+0,P,z),b(N,T+2,L,z),b(H,T+4,R,z)}}function b(P,L,R,G){G<0&&P.x===1&&(c[L]=P.x-1),R.x===0&&R.z===0&&(c[L]=G/2/Math.PI+.5)}function v(P){return Math.atan2(P.z,-P.x)}function m(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.vertices,t.indices,t.radius,t.details)}}class ch extends lh{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ch(t.radius,t.detail)}}class ul extends qn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(i),f=Math.floor(a),h=u+1,p=f+1,_=t/u,g=e/f,x=[],y=[],b=[],v=[];for(let m=0;m<p;m++){const P=m*g-c;for(let L=0;L<h;L++){const R=L*_-o;y.push(R,-P,0),b.push(0,0,1),v.push(L/u),v.push(1-m/f)}}for(let m=0;m<f;m++)for(let P=0;P<u;P++){const L=P+h*m,R=P+h*(m+1),G=P+1+h*(m+1),U=P+1+h*m;x.push(L,R,U),x.push(R,G,U)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.widthSegments,t.heightSegments)}}class uh extends qn{constructor(t=1,e=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const f=Math.min(c+u,Math.PI);let h=0;const p=[],_=new F,g=new F,x=[],y=[],b=[],v=[];for(let m=0;m<=i;m++){const P=[],L=m/i;let R=0;m===0&&c===0?R=.5/e:m===i&&f===Math.PI&&(R=-.5/e);for(let G=0;G<=e;G++){const U=G/e;_.x=-t*Math.cos(a+U*o)*Math.sin(c+L*u),_.y=t*Math.cos(c+L*u),_.z=t*Math.sin(a+U*o)*Math.sin(c+L*u),y.push(_.x,_.y,_.z),g.copy(_).normalize(),b.push(g.x,g.y,g.z),v.push(U+R,1-L),P.push(h++)}p.push(P)}for(let m=0;m<i;m++)for(let P=0;P<e;P++){const L=p[m][P+1],R=p[m][P],G=p[m+1][P],U=p[m+1][P+1];(m!==0||c>0)&&x.push(L,R,U),(m!==i-1||f<Math.PI)&&x.push(R,G,U)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(b,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ss extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=im,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ZE extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class KE extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $E{constructor(t,e,i){const a=this;let o=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=h.length;_<g;_+=2){const x=h[_],y=h[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null}}}const JE=new $E;class hh{constructor(t){this.manager=t!==void 0?t:JE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,o){i.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hh.DEFAULT_MATERIAL_NAME="__DEFAULT";class QE extends hh{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,c=sp.get(t);if(c!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(c),o.manager.itemEnd(t)},0),c;const u=Sa("img");function f(){p(),sp.add(t,this),e&&e(this),o.manager.itemEnd(t)}function h(_){p(),a&&a(_),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(t),u.src=t,u}}class ap extends hh{constructor(t){super(t)}load(t,e,i,a){const o=new Rn,c=new QE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){o.image=u,o.needsUpdate=!0,e!==void 0&&e(o)},i,a),o}}class xm extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class jE extends xm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $c=new ke,op=new F,lp=new F;class ty{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;op.setFromMatrixPosition(t.matrixWorld),e.position.copy(op),lp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lp),e.updateMatrixWorld(),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cp=new ke,ua=new F,Jc=new F;class ey extends ty{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,a=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ua.setFromMatrixPosition(t.matrixWorld),i.position.copy(ua),Jc.copy(i.position),Jc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Jc),i.updateMatrixWorld(),a.makeTranslation(-ua.x,-ua.y,-ua.z),cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp)}}class ny extends xm{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new ey}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iy extends pm{constructor(t=-1,e=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-t,c=i+t,u=a+e,f=a-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ry extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class sy extends YE{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new qn;a.setAttribute("position",new je(e,3)),a.setAttribute("color",new je(i,3));const o=new gm({vertexColors:!0,toneMapped:!1});super(a,o),this.type="AxesHelper"}setColors(t,e,i){const a=new gt,o=this.geometry.attributes.color.array;return a.set(t),a.toArray(o,0),a.toArray(o,3),a.set(e),a.toArray(o,6),a.toArray(o,9),a.set(i),a.toArray(o,12),a.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function up(r,t,e,i){const a=ay(i);switch(e){case $p:return r*t;case Qp:return r*t;case jp:return r*t*2;case tm:return r*t/a.components*a.byteLength;case ih:return r*t/a.components*a.byteLength;case em:return r*t*2/a.components*a.byteLength;case rh:return r*t*2/a.components*a.byteLength;case Jp:return r*t*3/a.components*a.byteLength;case mi:return r*t*4/a.components*a.byteLength;case sh:return r*t*4/a.components*a.byteLength;case Zo:case Ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $o:case Jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xu:case Su:return Math.max(r,16)*Math.max(t,8)/4;case vu:case Mu:return Math.max(r,8)*Math.max(t,8)/2;case Eu:case yu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qo:case zu:case Gu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case nm:case Hu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Vu:case ku:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ay(r){switch(r){case qi:case Yp:return{byteLength:1,components:1};case Ma:case Zp:case Ea:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case Br:case th:case ki:return{byteLength:4,components:1};case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mm(){let r=null,t=!1,e=null,i=null;function a(o,c){e(o,c),i=r.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(a),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){r=o}}}function oy(r){const t=new WeakMap;function e(u,f){const h=u.array,p=u.usage,_=h.byteLength,g=r.createBuffer();r.bindBuffer(f,g),r.bufferData(f,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,f,h){const p=f.array,_=f.updateRanges;if(r.bindBuffer(h,u),_.length===0)r.bufferSubData(h,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],b=_[x];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++g,_[g]=b)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const b=_[x];r.bufferSubData(h,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(r.deleteBuffer(f.buffer),t.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=t.get(u);if(h===void 0)t.set(u,e(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:c}}var ly=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#define PI 3.141592653589793
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
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,eT=`ToonMaterial material;
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,tA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
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
}`,PA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,ce={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:hy,alphatest_fragment:fy,alphatest_pars_fragment:dy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:_y,batching_vertex:gy,begin_vertex:vy,beginnormal_vertex:xy,bsdfs:My,iridescence_fragment:Sy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:yy,clipping_planes_pars_fragment:Ty,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:wy,color_fragment:by,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Ly,common:Py,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Uy,displacementmap_vertex:Ny,emissivemap_fragment:Fy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:zy,envmap_fragment:Gy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Vy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:tT,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:qy,fog_fragment:Yy,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:Qy,lights_pars_begin:jy,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:aT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:_T,map_particle_pars_fragment:gT,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:MT,morphcolor_vertex:ST,morphnormal_vertex:ET,morphtarget_pars_vertex:yT,morphtarget_vertex:TT,normal_fragment_begin:AT,normal_fragment_maps:wT,normal_pars_fragment:bT,normal_pars_vertex:RT,normal_vertex:CT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:FT,premultiplied_alpha_fragment:OT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:GT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:ZT,skinning_vertex:KT,skinnormal_vertex:$T,specularmap_fragment:JT,specularmap_pars_fragment:QT,tonemapping_fragment:jT,tonemapping_pars_fragment:tA,transmission_fragment:eA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:aA,background_vert:oA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:uA,cube_vert:hA,cube_frag:fA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:_A,equirect_vert:gA,equirect_frag:vA,linedashed_vert:xA,linedashed_frag:MA,meshbasic_vert:SA,meshbasic_frag:EA,meshlambert_vert:yA,meshlambert_frag:TA,meshmatcap_vert:AA,meshmatcap_frag:wA,meshnormal_vert:bA,meshnormal_frag:RA,meshphong_vert:CA,meshphong_frag:LA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:DA,meshtoon_frag:UA,points_vert:NA,points_frag:FA,shadow_vert:OA,shadow_frag:BA,sprite_vert:zA,sprite_frag:GA},Mt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:wn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:wn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:wn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:wn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:wn([Mt.points,Mt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:wn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:wn([Mt.common,Mt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:wn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:wn([Mt.sprite,Mt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:wn([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:wn([Mt.lights,Mt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Wo={r:0,b:0,g:0},Cr=new Ai,HA=new ke;function VA(r,t,e,i,a,o,c){const u=new gt(0);let f=o===!0?0:1,h,p,_=null,g=0,x=null;function y(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?e:t).get(R)),R}function b(L){let R=!1;const G=y(L);G===null?m(u,f):G&&G.isColor&&(m(G,1),R=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(L,R){const G=y(R);G&&(G.isCubeTexture||G.mapping===ol)?(p===void 0&&(p=new bn(new Gr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Fs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Cr.copy(R.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=G,p.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Cr)),p.material.toneMapped=Ae.getTransfer(G.colorSpace)!==De,(_!==G||g!==G.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):G&&G.isTexture&&(h===void 0&&(h=new bn(new ul(2,2),new pr({name:"BackgroundMaterial",uniforms:Fs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=G,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Ae.getTransfer(G.colorSpace)!==De,G.matrixAutoUpdate===!0&&G.updateMatrix(),h.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||g!==G.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function m(L,R){L.getRGB(Wo,dm(r)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,R,c)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),f=R,m(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,m(u,f)},render:b,addToRenderList:v,dispose:P}}function kA(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(T,z,Q,$,it){let ut=!1;const nt=_($,Q,z);o!==nt&&(o=nt,h(o.object)),ut=x(T,$,Q,it),ut&&y(T,$,Q,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(ut||c)&&(c=!1,R(T,z,Q,$),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function f(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function _(T,z,Q){const $=Q.wireframe===!0;let it=i[T.id];it===void 0&&(it={},i[T.id]=it);let ut=it[z.id];ut===void 0&&(ut={},it[z.id]=ut);let nt=ut[$];return nt===void 0&&(nt=g(f()),ut[$]=nt),nt}function g(T){const z=[],Q=[],$=[];for(let it=0;it<e;it++)z[it]=0,Q[it]=0,$[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,z,Q,$){const it=o.attributes,ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){const Rt=it[j];let Ft=ut[j];if(Ft===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Ft=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Ft=T.instanceColor)),Rt===void 0||Rt.attribute!==Ft||Ft&&Rt.data!==Ft.data)return!0;nt++}return o.attributesNum!==nt||o.index!==$}function y(T,z,Q,$){const it={},ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){let Rt=ut[j];Rt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Rt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Rt=T.instanceColor));const Ft={};Ft.attribute=Rt,Rt&&Rt.data&&(Ft.data=Rt.data),it[j]=Ft,nt++}o.attributes=it,o.attributesNum=nt,o.index=$}function b(){const T=o.newAttributes;for(let z=0,Q=T.length;z<Q;z++)T[z]=0}function v(T){m(T,0)}function m(T,z){const Q=o.newAttributes,$=o.enabledAttributes,it=o.attributeDivisors;Q[T]=1,$[T]===0&&(r.enableVertexAttribArray(T),$[T]=1),it[T]!==z&&(r.vertexAttribDivisor(T,z),it[T]=z)}function P(){const T=o.newAttributes,z=o.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==T[Q]&&(r.disableVertexAttribArray(Q),z[Q]=0)}function L(T,z,Q,$,it,ut,nt){nt===!0?r.vertexAttribIPointer(T,z,Q,it,ut):r.vertexAttribPointer(T,z,Q,$,it,ut)}function R(T,z,Q,$){b();const it=$.attributes,ut=Q.getAttributes(),nt=z.defaultAttributeValues;for(const dt in ut){const j=ut[dt];if(j.location>=0){let yt=it[dt];if(yt===void 0&&(dt==="instanceMatrix"&&T.instanceMatrix&&(yt=T.instanceMatrix),dt==="instanceColor"&&T.instanceColor&&(yt=T.instanceColor)),yt!==void 0){const Rt=yt.normalized,Ft=yt.itemSize,ue=t.get(yt);if(ue===void 0)continue;const Ce=ue.buffer,ot=ue.type,_t=ue.bytesPerElement,Ot=ot===r.INT||ot===r.UNSIGNED_INT||yt.gpuType===th;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,kt=Tt.stride,de=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let $t=0;$t<j.locationSize;$t++)m(j.location+$t,Tt.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let $t=0;$t<j.locationSize;$t++)v(j.location+$t);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let $t=0;$t<j.locationSize;$t++)L(j.location+$t,Ft/j.locationSize,ot,Rt,kt*_t,(de+Ft/j.locationSize*$t)*_t,Ot)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<j.locationSize;Tt++)m(j.location+Tt,yt.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<j.locationSize;Tt++)v(j.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Tt=0;Tt<j.locationSize;Tt++)L(j.location+Tt,Ft/j.locationSize,ot,Rt,Ft*_t,Ft/j.locationSize*Tt*_t,Ot)}}else if(nt!==void 0){const Rt=nt[dt];if(Rt!==void 0)switch(Rt.length){case 2:r.vertexAttrib2fv(j.location,Rt);break;case 3:r.vertexAttrib3fv(j.location,Rt);break;case 4:r.vertexAttrib4fv(j.location,Rt);break;default:r.vertexAttrib1fv(j.location,Rt)}}}}P()}function G(){H();for(const T in i){const z=i[T];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T]}}function U(T){if(i[T.id]===void 0)return;const z=i[T.id];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T.id]}function N(T){for(const z in i){const Q=i[z];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const it in $)p($[it].object),delete $[it];delete Q[T.id]}}function H(){C(),c=!0,o!==a&&(o=a,h(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:H,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function WA(r,t,e){let i;function a(h){i=h}function o(h,p){r.drawArrays(i,h,p),e.update(p,i,1)}function c(h,p,_){_!==0&&(r.drawArraysInstanced(i,h,p,_),e.update(p,i,_))}function u(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];e.update(x,i,1)}function f(h,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<h.length;y++)c(h[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=p[b]*g[b];e.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function XA(r,t,e,i){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");a=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==mi&&i.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const H=N===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==qi&&i.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==ki&&!H)}function f(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:G,maxSamples:U}}function qA(r){const t=this;let e=null,i=0,a=!1,o=!1;const c=new Pr,u=new oe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,b=_.clipIntersection,v=_.clipShadows,m=r.get(_);if(!a||y===null||y.length===0||o&&!v)o?p(null):h();else{const P=o?0:i,L=P*4;let R=m.clippingState||null;f.value=R,R=p(y,g,L,x);for(let G=0;G!==L;++G)R[G]=e[G];m.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==e&&(f.value=e,f.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,g,x,y){const b=_!==null?_.length:0;let v=null;if(b!==0){if(v=f.value,y!==!0||v===null){const m=x+b*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,R=x;L!==b;++L,R+=4)c.copy(_[L]).applyMatrix4(P,u),c.normal.toArray(v,R),v[R+3]=c.constant}f.value=v,f.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function YA(r){let t=new WeakMap;function e(c,u){return u===pu?c.mapping=Ps:u===mu&&(c.mapping=Is),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===pu||u===mu)if(t.has(c)){const f=t.get(c).texture;return e(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new GE(f.height);return h.fromEquirectangularTexture(r,c),t.set(c,h),c.addEventListener("dispose",a),e(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Ts=4,hp=[.125,.215,.35,.446,.526,.582],Ur=20,Qc=new iy,fp=new gt;let jc=null,tu=0,eu=0,nu=!1;const Ir=(1+Math.sqrt(5))/2,Es=1/Ir,dp=[new F(-Ir,Es,0),new F(Ir,Es,0),new F(-Es,0,Ir),new F(Es,0,Ir),new F(0,Ir,-Es),new F(0,Ir,Es),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class pp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){jc=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,a,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,tu,eu),this._renderer.xr.enabled=nu,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ea,format:mi,colorSpace:Ns,depthBuffer:!1},a=mp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(o)),this._blurMaterial=KA(o,t,e)}return a}_compileMaterial(t){const e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,Qc)}_sceneToCubeUV(t,e,i,a){const u=new Xn(90,1,e,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(fp),p.toneMapping=hr,p.autoClear=!1;const x=new Si({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),y=new bn(new Gr,x);let b=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,b=!0):(x.color.copy(fp),b=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(u.up.set(0,f[m],0),u.lookAt(h[m],0,0)):P===1?(u.up.set(0,0,f[m]),u.lookAt(0,h[m],0)):(u.up.set(0,f[m],0),u.lookAt(0,0,h[m]));const L=this._cubeSize;Xo(a,P*L,m>2?L:0,L,L),p.setRenderTarget(a),b&&p.render(y,u),p.render(t,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=_,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Ps||t.mapping===Is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const f=this._cubeSize;Xo(e,0,0,3*f,2*f),i.setRenderTarget(e),i.render(c,Qc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=dp[(a-o-1)%dp.length];this._blur(t,o-1,o,c,u)}e.autoClear=i}_blur(t,e,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",o),this._halfBlur(c,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new bn(this._lodPlanes[a],h),g=h.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ur-1),b=o/y,v=isFinite(o)?1+Math.floor(p*b):Ur;v>Ur&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ur}`);const m=[];let P=0;for(let N=0;N<Ur;++N){const H=N/b,C=Math.exp(-H*H/2);m.push(C),N===0?P+=C:N<v&&(P+=2*C)}for(let N=0;N<m.length;N++)m[N]=m[N]/P;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=y,g.mipInt.value=L-i;const R=this._sizeLods[a],G=3*R*(a>L-Ts?a-L+Ts:0),U=4*(this._cubeSize-R);Xo(e,G,U,3*R,2*R),f.setRenderTarget(e),f.render(_,Qc)}}function ZA(r){const t=[],e=[],i=[];let a=r;const o=r-Ts+1+hp.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let f=1/u;c>r-Ts?f=hp[c-r+Ts-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,b=3,v=2,m=1,P=new Float32Array(b*y*x),L=new Float32Array(v*y*x),R=new Float32Array(m*y*x);for(let U=0;U<x;U++){const N=U%3*2/3-1,H=U>2?0:-1,C=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];P.set(C,b*y*U),L.set(g,v*y*U);const T=[U,U,U,U,U,U];R.set(T,m*y*U)}const G=new qn;G.setAttribute("position",new gi(P,b)),G.setAttribute("uv",new gi(L,v)),G.setAttribute("faceIndex",new gi(R,m)),t.push(G),a>Ts&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function mp(r,t,e){const i=new zr(r,t,e);return i.texture.mapping=ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(r,t,e,i,a){r.viewport.set(t,e,i,a),r.scissor.set(t,e,i,a)}function KA(r,t,e){const i=new Float32Array(Ur),a=new F(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function _p(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function gp(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function $A(r){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===pu||f===mu,p=f===Ps||f===Is;if(h||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new pp(r)),_=h?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&a(x)?(e===null&&(e=new pp(r)),_=h?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function JA(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function QA(r,t,e,i){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(t.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function f(_){const g=_.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function h(_){const g=[],x=_.index,y=_.attributes.position;let b=0;if(x!==null){const P=x.array;b=x.version;for(let L=0,R=P.length;L<R;L+=3){const G=P[L+0],U=P[L+1],N=P[L+2];g.push(G,U,U,N,N,G)}}else if(y!==void 0){const P=y.array;b=y.version;for(let L=0,R=P.length/3-1;L<R;L+=3){const G=L+0,U=L+1,N=L+2;g.push(G,U,U,N,N,G)}}else return;const v=new(sm(g)?fm:hm)(g,1);v.version=b;const m=o.get(_);m&&t.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&h(_)}else h(_);return o.get(_)}return{get:u,update:f,getWireframeAttribute:p}}function jA(r,t,e){let i;function a(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function f(g,x){r.drawElements(i,x,o,g*c),e.update(x,i,1)}function h(g,x,y){y!==0&&(r.drawElementsInstanced(i,x,o,g*c,y),e.update(x,i,y))}function p(g,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,g,0,y);let v=0;for(let m=0;m<y;m++)v+=x[m];e.update(v,i,1)}function _(g,x,y,b){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)h(g[m]/c,x[m],b[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,o,g,0,b,0,y);let m=0;for(let P=0;P<y;P++)m+=x[P]*b[P];e.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function tw(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(o/3);break;case r.LINES:e.lines+=u*(o/2);break;case r.LINE_STRIP:e.lines+=u*(o-1);break;case r.LINE_LOOP:e.lines+=u*o;break;case r.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function ew(r,t,e){const i=new WeakMap,a=new Ne;function o(c,u,f){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),b===!0&&(R=2),v===!0&&(R=3);let G=u.attributes.position.count*R,U=1;G>t.maxTextureSize&&(U=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const N=new Float32Array(G*U*4*_),H=new om(N,G,U,_);H.type=ki,H.needsUpdate=!0;const C=R*4;for(let z=0;z<_;z++){const Q=m[z],$=P[z],it=L[z],ut=G*U*4*z;for(let nt=0;nt<Q.count;nt++){const dt=nt*C;y===!0&&(a.fromBufferAttribute(Q,nt),N[ut+dt+0]=a.x,N[ut+dt+1]=a.y,N[ut+dt+2]=a.z,N[ut+dt+3]=0),b===!0&&(a.fromBufferAttribute($,nt),N[ut+dt+4]=a.x,N[ut+dt+5]=a.y,N[ut+dt+6]=a.z,N[ut+dt+7]=0),v===!0&&(a.fromBufferAttribute(it,nt),N[ut+dt+8]=a.x,N[ut+dt+9]=a.y,N[ut+dt+10]=a.z,N[ut+dt+11]=it.itemSize===4?a.w:1)}}g={count:_,texture:H,size:new Nt(G,U)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let y=0;for(let v=0;v<h.length;v++)y+=h[v];const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",h)}f.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function nw(r,t,e,i){let a=new WeakMap;function o(f){const h=i.render.frame,p=f.geometry,_=t.get(f,p);if(a.get(_)!==h&&(t.update(_),a.set(_,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==h&&(e.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,r.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return _}function c(){a=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:c}}const Sm=new Rn,vp=new vm(1,1),Em=new om,ym=new yE,Tm=new mm,xp=[],Mp=[],Sp=new Float32Array(16),Ep=new Float32Array(9),yp=new Float32Array(4);function zs(r,t,e){const i=r[0];if(i<=0||i>0)return r;const a=t*e;let o=xp[a];if(o===void 0&&(o=new Float32Array(a),xp[a]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(o,u)}return o}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function an(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function hl(r,t){let e=Mp[t];e===void 0&&(e=new Int32Array(t),Mp[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function iw(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),an(e,t)}}function sw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),an(e,t)}}function aw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),an(e,t)}}function ow(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;yp.set(i),r.uniformMatrix2fv(this.addr,!1,yp),an(e,i)}}function lw(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;Ep.set(i),r.uniformMatrix3fv(this.addr,!1,Ep),an(e,i)}}function cw(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(sn(e,i))return;Sp.set(i),r.uniformMatrix4fv(this.addr,!1,Sp),an(e,i)}}function uw(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),an(e,t)}}function fw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),an(e,t)}}function dw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),an(e,t)}}function pw(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function mw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),an(e,t)}}function _w(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),an(e,t)}}function gw(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),an(e,t)}}function vw(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(vp.compareFunction=rm,o=vp):o=Sm,e.setTexture2D(t||o,a)}function xw(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||ym,a)}function Mw(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Tm,a)}function Sw(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Em,a)}function Ew(r){switch(r){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return aw;case 35674:return ow;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return _w;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return Sw}}function yw(r,t){r.uniform1fv(this.addr,t)}function Tw(r,t){const e=zs(t,this.size,2);r.uniform2fv(this.addr,e)}function Aw(r,t){const e=zs(t,this.size,3);r.uniform3fv(this.addr,e)}function ww(r,t){const e=zs(t,this.size,4);r.uniform4fv(this.addr,e)}function bw(r,t){const e=zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Rw(r,t){const e=zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Cw(r,t){const e=zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Lw(r,t){r.uniform1iv(this.addr,t)}function Pw(r,t){r.uniform2iv(this.addr,t)}function Iw(r,t){r.uniform3iv(this.addr,t)}function Dw(r,t){r.uniform4iv(this.addr,t)}function Uw(r,t){r.uniform1uiv(this.addr,t)}function Nw(r,t){r.uniform2uiv(this.addr,t)}function Fw(r,t){r.uniform3uiv(this.addr,t)}function Ow(r,t){r.uniform4uiv(this.addr,t)}function Bw(r,t,e){const i=this.cache,a=t.length,o=hl(e,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||Sm,o[c])}function zw(r,t,e){const i=this.cache,a=t.length,o=hl(e,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||ym,o[c])}function Gw(r,t,e){const i=this.cache,a=t.length,o=hl(e,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||Tm,o[c])}function Hw(r,t,e){const i=this.cache,a=t.length,o=hl(e,a);sn(i,o)||(r.uniform1iv(this.addr,o),an(i,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||Em,o[c])}function Vw(r){switch(r){case 5126:return yw;case 35664:return Tw;case 35665:return Aw;case 35666:return ww;case 35674:return bw;case 35675:return Rw;case 35676:return Cw;case 5124:case 35670:return Lw;case 35667:case 35671:return Pw;case 35668:case 35672:return Iw;case 35669:case 35673:return Dw;case 5125:return Uw;case 36294:return Nw;case 36295:return Fw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Hw}}class kw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ew(e.type)}}class Ww{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vw(e.type)}}class Xw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function Tp(r,t){r.seq.push(t),r.map[t.id]=t}function qw(r,t,e){const i=r.name,a=i.length;for(iu.lastIndex=0;;){const o=iu.exec(i),c=iu.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===a){Tp(e,h===void 0?new kw(u,r,t):new Ww(u,r,t));break}else{let _=e.map[u];_===void 0&&(_=new Xw(u),Tp(e,_)),e=_}}}class jo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);qw(o,c,this)}}setValue(t,e,i,a){const o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],f=i[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function Ap(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const Yw=37297;let Zw=0;function Kw(r,t){const e=r.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const wp=new oe;function $w(r){Ae._getMatrix(wp,Ae.workingColorSpace,r);const t=`mat3( ${wp.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(r)){case tl:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function bp(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),a=r.getShaderInfoLog(t).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+Kw(r.getShaderSource(t),c)}else return a}function Jw(r,t){const e=$w(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qw(r,t){let e;switch(t){case KS:e="Linear";break;case $S:e="Reinhard";break;case JS:e="Cineon";break;case QS:e="ACESFilmic";break;case tE:e="AgX";break;case eE:e="Neutral";break;case jS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new F;function jw(){Ae.getLuminanceCoefficients(qo);const r=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_a).join(`
`)}function eb(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nb(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(t,a),c=o.name;let u=1;o.type===r.FLOAT_MAT2&&(u=2),o.type===r.FLOAT_MAT3&&(u=3),o.type===r.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function _a(r){return r!==""}function Rp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yu(r){return r.replace(ib,sb)}const rb=new Map;function sb(r,t){let e=ce[t];if(e===void 0){const i=rb.get(t);if(i!==void 0)e=ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Yu(e)}const ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(r){return r.replace(ab,ob)}function ob(r,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Pp(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Wp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===RS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function cb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case ol:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ub(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function hb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xp:t="ENVMAP_BLENDING_MULTIPLY";break;case YS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function fb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function db(r,t,e,i){const a=r.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const f=lb(e),h=cb(e),p=ub(e),_=hb(e),g=fb(e),x=tb(e),y=eb(o),b=a.createProgram();let v,m,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(_a).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(_a).join(`
`),m.length>0&&(m+=`
`)):(v=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),m=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hr?"#define TONE_MAPPING":"",e.toneMapping!==hr?ce.tonemapping_pars_fragment:"",e.toneMapping!==hr?Qw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,Jw("linearToOutputTexel",e.outputColorSpace),jw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_a).join(`
`)),c=Yu(c),c=Rp(c,e),c=Cp(c,e),u=Yu(u),u=Rp(u,e),u=Cp(u,e),c=Lp(c),u=Lp(u),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=P+v+c,R=P+m+u,G=Ap(a,a.VERTEX_SHADER,L),U=Ap(a,a.FRAGMENT_SHADER,R);a.attachShader(b,G),a.attachShader(b,U),e.index0AttributeName!==void 0?a.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function N(z){if(r.debug.checkShaderErrors){const Q=a.getProgramInfoLog(b).trim(),$=a.getShaderInfoLog(G).trim(),it=a.getShaderInfoLog(U).trim();let ut=!0,nt=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,G,U);else{const dt=bp(a,G,"vertex"),j=bp(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+dt+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||it==="")&&(nt=!1);nt&&(z.diagnostics={runnable:ut,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:it,prefix:m}})}a.deleteShader(G),a.deleteShader(U),H=new jo(a,b),C=nb(a,b)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(b,Yw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zw++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=G,this.fragmentShader=U,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new _b(t),e.set(t,i)),i}}class _b{constructor(t){this.id=pb++,this.code=t,this.usedTimes=0}}function gb(r,t,e,i,a,o,c){const u=new cm,f=new mb,h=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return h.add(C),C===0?"uv":`uv${C}`}function v(C,T,z,Q,$){const it=Q.fog,ut=$.geometry,nt=C.isMeshStandardMaterial?Q.environment:null,dt=(C.isMeshStandardMaterial?e:t).get(C.envMap||nt),j=dt&&dt.mapping===ol?dt.image.height:null,yt=y[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Rt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ft=Rt!==void 0?Rt.length:0;let ue=0;ut.morphAttributes.position!==void 0&&(ue=1),ut.morphAttributes.normal!==void 0&&(ue=2),ut.morphAttributes.color!==void 0&&(ue=3);let Ce,ot,_t,Ot;if(yt){const we=Ei[yt];Ce=we.vertexShader,ot=we.fragmentShader}else Ce=C.vertexShader,ot=C.fragmentShader,f.update(C),_t=f.getVertexShaderID(C),Ot=f.getFragmentShaderID(C);const Tt=r.getRenderTarget(),kt=r.state.buffers.depth.getReversed(),de=$.isInstancedMesh===!0,$t=$.isBatchedMesh===!0,ze=!!C.map,Pe=!!C.matcap,pe=!!dt,O=!!C.aoMap,on=!!C.lightMap,ge=!!C.bumpMap,ee=!!C.normalMap,Ht=!!C.displacementMap,Fe=!!C.emissiveMap,zt=!!C.metalnessMap,I=!!C.roughnessMap,S=C.anisotropy>0,Y=C.clearcoat>0,ct=C.dispersion>0,ht=C.iridescence>0,st=C.sheen>0,Bt=C.transmission>0,vt=S&&!!C.anisotropyMap,Ct=Y&&!!C.clearcoatMap,me=Y&&!!C.clearcoatNormalMap,mt=Y&&!!C.clearcoatRoughnessMap,Pt=ht&&!!C.iridescenceMap,Xt=ht&&!!C.iridescenceThicknessMap,Kt=st&&!!C.sheenColorMap,It=st&&!!C.sheenRoughnessMap,fe=!!C.specularMap,ne=!!C.specularColorMap,Ie=!!C.specularIntensityMap,V=Bt&&!!C.transmissionMap,St=Bt&&!!C.thicknessMap,tt=!!C.gradientMap,lt=!!C.alphaMap,bt=C.alphaTest>0,At=!!C.alphaHash,re=!!C.extensions;let We=hr;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(We=r.toneMapping);const tn={shaderID:yt,shaderType:C.type,shaderName:C.name,vertexShader:Ce,fragmentShader:ot,defines:C.defines,customVertexShaderID:_t,customFragmentShaderID:Ot,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:$t,batchingColor:$t&&$._colorsTexture!==null,instancing:de,instancingColor:de&&$.instanceColor!==null,instancingMorph:de&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ns,alphaToCoverage:!!C.alphaToCoverage,map:ze,matcap:Pe,envMap:pe,envMapMode:pe&&dt.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:on,bumpMap:ge,normalMap:ee,displacementMap:g&&Ht,emissiveMap:Fe,normalMapObjectSpace:ee&&C.normalMapType===sE,normalMapTangentSpace:ee&&C.normalMapType===im,metalnessMap:zt,roughnessMap:I,anisotropy:S,anisotropyMap:vt,clearcoat:Y,clearcoatMap:Ct,clearcoatNormalMap:me,clearcoatRoughnessMap:mt,dispersion:ct,iridescence:ht,iridescenceMap:Pt,iridescenceThicknessMap:Xt,sheen:st,sheenColorMap:Kt,sheenRoughnessMap:It,specularMap:fe,specularColorMap:ne,specularIntensityMap:Ie,transmission:Bt,transmissionMap:V,thicknessMap:St,gradientMap:tt,opaque:C.transparent===!1&&C.blending===ws&&C.alphaToCoverage===!1,alphaMap:lt,alphaTest:bt,alphaHash:At,combine:C.combine,mapUv:ze&&b(C.map.channel),aoMapUv:O&&b(C.aoMap.channel),lightMapUv:on&&b(C.lightMap.channel),bumpMapUv:ge&&b(C.bumpMap.channel),normalMapUv:ee&&b(C.normalMap.channel),displacementMapUv:Ht&&b(C.displacementMap.channel),emissiveMapUv:Fe&&b(C.emissiveMap.channel),metalnessMapUv:zt&&b(C.metalnessMap.channel),roughnessMapUv:I&&b(C.roughnessMap.channel),anisotropyMapUv:vt&&b(C.anisotropyMap.channel),clearcoatMapUv:Ct&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(C.sheenRoughnessMap.channel),specularMapUv:fe&&b(C.specularMap.channel),specularColorMapUv:ne&&b(C.specularColorMap.channel),specularIntensityMapUv:Ie&&b(C.specularIntensityMap.channel),transmissionMapUv:V&&b(C.transmissionMap.channel),thicknessMapUv:St&&b(C.thicknessMap.channel),alphaMapUv:lt&&b(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ee||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ut.attributes.uv&&(ze||lt),fog:!!it,useFog:C.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:kt,skinning:$.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:We,decodeVideoTexture:ze&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===De,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===De,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:re&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&C.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=h.has(1),tn.vertexUv2s=h.has(2),tn.vertexUv3s=h.has(3),h.clear(),tn}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)T.push(z),T.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(P(T,C),L(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function P(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function L(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const T=y[C.type];let z;if(T){const Q=Ei[T];z=FE.clone(Q.uniforms)}else z=C.uniforms;return z}function G(C,T){let z;for(let Q=0,$=p.length;Q<$;Q++){const it=p[Q];if(it.cacheKey===T){z=it,++z.usedTimes;break}}return z===void 0&&(z=new db(r,T,C,o),p.push(z)),z}function U(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function N(C){f.remove(C)}function H(){f.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:G,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:H}}function vb(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,f){r.get(c)[u]=f}function o(){r=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:o}}function xb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ip(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Dp(){const r=[];let t=0;const e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function c(_,g,x,y,b,v){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:b,group:v},r[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=b,m.group=v),t++,m}function u(_,g,x,y,b,v){const m=c(_,g,x,y,b,v);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):e.push(m)}function f(_,g,x,y,b,v){const m=c(_,g,x,y,b,v);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):e.unshift(m)}function h(_,g){e.length>1&&e.sort(_||xb),i.length>1&&i.sort(g||Ip),a.length>1&&a.sort(g||Ip)}function p(){for(let _=t,g=r.length;_<g;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:u,unshift:f,finish:p,sort:h}}function Mb(){let r=new WeakMap;function t(i,a){const o=r.get(i);let c;return o===void 0?(c=new Dp,r.set(i,[c])):a>=o.length?(c=new Dp,o.push(c)):c=o[a],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function Sb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new gt};break;case"SpotLight":e={position:new F,direction:new F,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=e,e}}}function Eb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let yb=0;function Tb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ab(r){const t=new Sb,e=Eb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);const a=new F,o=new ke,c=new ke;function u(h){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,y=0,b=0,v=0,m=0,P=0,L=0,R=0,G=0,U=0,N=0;h.sort(Tb);for(let C=0,T=h.length;C<T;C++){const z=h[C],Q=z.color,$=z.intensity,it=z.distance,ut=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(z.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(z.sh.coefficients[nt],$);N++}else if(z.isDirectionalLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=ut,i.directionalShadowMatrix[x]=z.shadow.matrix,P++}i.directional[x]=nt,x++}else if(z.isSpotLight){const nt=t.get(z);nt.position.setFromMatrixPosition(z.matrixWorld),nt.color.copy(Q).multiplyScalar($),nt.distance=it,nt.coneCos=Math.cos(z.angle),nt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),nt.decay=z.decay,i.spot[b]=nt;const dt=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,dt.updateMatrices(z),z.castShadow&&U++),i.spotLightMatrix[b]=dt.matrix,z.castShadow){const j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=ut,R++}b++}else if(z.isRectAreaLight){const nt=t.get(z);nt.color.copy(Q).multiplyScalar($),nt.halfWidth.set(z.width*.5,0,0),nt.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=nt,v++}else if(z.isPointLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),nt.distance=z.distance,nt.decay=z.decay,z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,j.shadowCameraNear=dt.camera.near,j.shadowCameraFar=dt.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=ut,i.pointShadowMatrix[y]=z.shadow.matrix,L++}i.point[y]=nt,y++}else if(z.isHemisphereLight){const nt=t.get(z);nt.skyColor.copy(z.color).multiplyScalar($),nt.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[m]=nt,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==x||H.pointLength!==y||H.spotLength!==b||H.rectAreaLength!==v||H.hemiLength!==m||H.numDirectionalShadows!==P||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==G||H.numLightProbes!==N)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+G-U,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=N,H.directionalLength=x,H.pointLength=y,H.spotLength=b,H.rectAreaLength=v,H.hemiLength=m,H.numDirectionalShadows=P,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=G,H.numLightProbes=N,i.version=yb++)}function f(h,p){let _=0,g=0,x=0,y=0,b=0;const v=p.matrixWorldInverse;for(let m=0,P=h.length;m<P;m++){const L=h[m];if(L.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),_++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const R=i.hemi[b];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),b++}}}return{setup:u,setupView:f,state:i}}function Up(r){const t=new Ab(r),e=[],i=[];function a(p){h.camera=p,e.length=0,i.length=0}function o(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function f(p){t.setupView(e,p)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:c}}function wb(r){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new Up(r),t.set(a,[u])):o>=c.length?(u=new Up(r),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const bb=`void main() {
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
}`;function Cb(r,t,e){let i=new ah;const a=new Nt,o=new Nt,c=new Ne,u=new ZE({depthPacking:rE}),f=new KE,h={},p=e.maxTextureSize,_={[dr]:Nn,[Nn]:dr,[Vi]:Vi},g=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:bb,fragmentShader:Rb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new qn;y.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bn(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let m=this.type;this.render=function(U,N,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||U.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Hi&&this.type===Hi,it=m===Hi&&this.type!==Hi;for(let ut=0,nt=U.length;ut<nt;ut++){const dt=U[ut],j=dt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const yt=j.getFrameExtents();if(a.multiply(yt),o.copy(j.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/yt.x),a.x=o.x*yt.x,j.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/yt.y),a.y=o.y*yt.y,j.mapSize.y=o.y)),j.map===null||$===!0||it===!0){const Ft=this.type!==Hi?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new zr(a.x,a.y,Ft),j.map.texture.name=dt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Rt=j.getViewportCount();for(let Ft=0;Ft<Rt;Ft++){const ue=j.getViewport(Ft);c.set(o.x*ue.x,o.y*ue.y,o.x*ue.z,o.y*ue.w),Q.viewport(c),j.updateMatrices(dt,Ft),i=j.getFrustum(),R(N,H,j.camera,dt,this.type)}j.isPointLightShadow!==!0&&this.type===Hi&&P(j,H),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(C,T,z)};function P(U,N){const H=t.update(b);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new zr(a.x,a.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(N,null,H,g,b,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(N,null,H,x,b,null)}function L(U,N,H,C){let T=null;const z=H.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)T=z;else if(T=H.isPointLight===!0?f:u,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Q=T.uuid,$=N.uuid;let it=h[Q];it===void 0&&(it={},h[Q]=it);let ut=it[$];ut===void 0&&(ut=T.clone(),it[$]=ut,N.addEventListener("dispose",G)),T=ut}if(T.visible=N.visible,T.wireframe=N.wireframe,C===Hi?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:_[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=r.properties.get(T);Q.light=H}return T}function R(U,N,H,C,T){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===Hi)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,U.matrixWorld);const $=t.update(U),it=U.material;if(Array.isArray(it)){const ut=$.groups;for(let nt=0,dt=ut.length;nt<dt;nt++){const j=ut[nt],yt=it[j.materialIndex];if(yt&&yt.visible){const Rt=L(U,yt,C,T);U.onBeforeShadow(r,U,N,H,$,Rt,j),r.renderBufferDirect(H,null,$,Rt,U,j),U.onAfterShadow(r,U,N,H,$,Rt,j)}}}else if(it.visible){const ut=L(U,it,C,T);U.onBeforeShadow(r,U,N,H,$,ut,null),r.renderBufferDirect(H,null,$,ut,U,null),U.onAfterShadow(r,U,N,H,$,ut,null)}}const Q=U.children;for(let $=0,it=Q.length;$<it;$++)R(Q[$],N,H,C,T)}function G(U){U.target.removeEventListener("dispose",G);for(const H in h){const C=h[H],T=U.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const Lb={[ou]:lu,[cu]:fu,[uu]:du,[Ls]:hu,[lu]:ou,[fu]:cu,[du]:uu,[hu]:Ls};function Pb(r,t){function e(){let V=!1;const St=new Ne;let tt=null;const lt=new Ne(0,0,0,0);return{setMask:function(bt){tt!==bt&&!V&&(r.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){V=bt},setClear:function(bt,At,re,We,tn){tn===!0&&(bt*=We,At*=We,re*=We),St.set(bt,At,re,We),lt.equals(St)===!1&&(r.clearColor(bt,At,re,We),lt.copy(St))},reset:function(){V=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let V=!1,St=!1,tt=null,lt=null,bt=null;return{setReversed:function(At){if(St!==At){const re=t.get("EXT_clip_control");St?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const We=bt;bt=null,this.setClear(We)}St=At},getReversed:function(){return St},setTest:function(At){At?Tt(r.DEPTH_TEST):kt(r.DEPTH_TEST)},setMask:function(At){tt!==At&&!V&&(r.depthMask(At),tt=At)},setFunc:function(At){if(St&&(At=Lb[At]),lt!==At){switch(At){case ou:r.depthFunc(r.NEVER);break;case lu:r.depthFunc(r.ALWAYS);break;case cu:r.depthFunc(r.LESS);break;case Ls:r.depthFunc(r.LEQUAL);break;case uu:r.depthFunc(r.EQUAL);break;case hu:r.depthFunc(r.GEQUAL);break;case fu:r.depthFunc(r.GREATER);break;case du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=At}},setLocked:function(At){V=At},setClear:function(At){bt!==At&&(St&&(At=1-At),r.clearDepth(At),bt=At)},reset:function(){V=!1,tt=null,lt=null,bt=null,St=!1}}}function a(){let V=!1,St=null,tt=null,lt=null,bt=null,At=null,re=null,We=null,tn=null;return{setTest:function(we){V||(we?Tt(r.STENCIL_TEST):kt(r.STENCIL_TEST))},setMask:function(we){St!==we&&!V&&(r.stencilMask(we),St=we)},setFunc:function(we,Fn,ai){(tt!==we||lt!==Fn||bt!==ai)&&(r.stencilFunc(we,Fn,ai),tt=we,lt=Fn,bt=ai)},setOp:function(we,Fn,ai){(At!==we||re!==Fn||We!==ai)&&(r.stencilOp(we,Fn,ai),At=we,re=Fn,We=ai)},setLocked:function(we){V=we},setClear:function(we){tn!==we&&(r.clearStencil(we),tn=we)},reset:function(){V=!1,St=null,tt=null,lt=null,bt=null,At=null,re=null,We=null,tn=null}}}const o=new e,c=new i,u=new a,f=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,b=!1,v=null,m=null,P=null,L=null,R=null,G=null,U=null,N=new gt(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,it=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,dt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(j)[1]),nt=dt>=1):j.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),nt=dt>=2);let yt=null,Rt={};const Ft=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Ce=new Ne().fromArray(Ft),ot=new Ne().fromArray(ue);function _t(V,St,tt,lt){const bt=new Uint8Array(4),At=r.createTexture();r.bindTexture(V,At),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<tt;re++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(St,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(St+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return At}const Ot={};Ot[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),Ot[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ot[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Tt(r.DEPTH_TEST),c.setFunc(Ls),ge(!1),ee(Cd),Tt(r.CULL_FACE),O(ur);function Tt(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function kt(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function de(V,St){return _[V]!==St?(r.bindFramebuffer(V,St),_[V]=St,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=St),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=St),!0):!1}function $t(V,St){let tt=x,lt=!1;if(V){tt=g.get(St),tt===void 0&&(tt=[],g.set(St,tt));const bt=V.textures;if(tt.length!==bt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let At=0,re=bt.length;At<re;At++)tt[At]=r.COLOR_ATTACHMENT0+At;tt.length=bt.length,lt=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,lt=!0);lt&&r.drawBuffers(tt)}function ze(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const Pe={[Dr]:r.FUNC_ADD,[LS]:r.FUNC_SUBTRACT,[PS]:r.FUNC_REVERSE_SUBTRACT};Pe[IS]=r.MIN,Pe[DS]=r.MAX;const pe={[US]:r.ZERO,[NS]:r.ONE,[FS]:r.SRC_COLOR,[su]:r.SRC_ALPHA,[VS]:r.SRC_ALPHA_SATURATE,[GS]:r.DST_COLOR,[BS]:r.DST_ALPHA,[OS]:r.ONE_MINUS_SRC_COLOR,[au]:r.ONE_MINUS_SRC_ALPHA,[HS]:r.ONE_MINUS_DST_COLOR,[zS]:r.ONE_MINUS_DST_ALPHA,[kS]:r.CONSTANT_COLOR,[WS]:r.ONE_MINUS_CONSTANT_COLOR,[XS]:r.CONSTANT_ALPHA,[qS]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,St,tt,lt,bt,At,re,We,tn,we){if(V===ur){b===!0&&(kt(r.BLEND),b=!1);return}if(b===!1&&(Tt(r.BLEND),b=!0),V!==CS){if(V!==v||we!==C){if((m!==Dr||R!==Dr)&&(r.blendEquation(r.FUNC_ADD),m=Dr,R=Dr),we)switch(V){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFunc(r.ONE,r.ONE);break;case Pd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ld:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Pd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Id:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,L=null,G=null,U=null,N.set(0,0,0),H=0,v=V,C=we}return}bt=bt||St,At=At||tt,re=re||lt,(St!==m||bt!==R)&&(r.blendEquationSeparate(Pe[St],Pe[bt]),m=St,R=bt),(tt!==P||lt!==L||At!==G||re!==U)&&(r.blendFuncSeparate(pe[tt],pe[lt],pe[At],pe[re]),P=tt,L=lt,G=At,U=re),(We.equals(N)===!1||tn!==H)&&(r.blendColor(We.r,We.g,We.b,tn),N.copy(We),H=tn),v=V,C=!1}function on(V,St){V.side===Vi?kt(r.CULL_FACE):Tt(r.CULL_FACE);let tt=V.side===Nn;St&&(tt=!tt),ge(tt),V.blending===ws&&V.transparent===!1?O(ur):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const lt=V.stencilWrite;u.setTest(lt),lt&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):kt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){T!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),T=V)}function ee(V){V!==wS?(Tt(r.CULL_FACE),V!==z&&(V===Cd?r.cullFace(r.BACK):V===bS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):kt(r.CULL_FACE),z=V}function Ht(V){V!==Q&&(nt&&r.lineWidth(V),Q=V)}function Fe(V,St,tt){V?(Tt(r.POLYGON_OFFSET_FILL),($!==St||it!==tt)&&(r.polygonOffset(St,tt),$=St,it=tt)):kt(r.POLYGON_OFFSET_FILL)}function zt(V){V?Tt(r.SCISSOR_TEST):kt(r.SCISSOR_TEST)}function I(V){V===void 0&&(V=r.TEXTURE0+ut-1),yt!==V&&(r.activeTexture(V),yt=V)}function S(V,St,tt){tt===void 0&&(yt===null?tt=r.TEXTURE0+ut-1:tt=yt);let lt=Rt[tt];lt===void 0&&(lt={type:void 0,texture:void 0},Rt[tt]=lt),(lt.type!==V||lt.texture!==St)&&(yt!==tt&&(r.activeTexture(tt),yt=tt),r.bindTexture(V,St||Ot[V]),lt.type=V,lt.texture=St)}function Y(){const V=Rt[yt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ct(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(V){Ce.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ce.copy(V))}function It(V){ot.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),ot.copy(V))}function fe(V,St){let tt=h.get(St);tt===void 0&&(tt=new WeakMap,h.set(St,tt));let lt=tt.get(V);lt===void 0&&(lt=r.getUniformBlockIndex(St,V.name),tt.set(V,lt))}function ne(V,St){const lt=h.get(St).get(V);f.get(St)!==lt&&(r.uniformBlockBinding(St,lt,V.__bindingPointIndex),f.set(St,lt))}function Ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},yt=null,Rt={},_={},g=new WeakMap,x=[],y=null,b=!1,v=null,m=null,P=null,L=null,R=null,G=null,U=null,N=new gt(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,it=null,Ce.set(0,0,r.canvas.width,r.canvas.height),ot.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:Tt,disable:kt,bindFramebuffer:de,drawBuffers:$t,useProgram:ze,setBlending:O,setMaterial:on,setFlipSided:ge,setCullFace:ee,setLineWidth:Ht,setPolygonOffset:Fe,setScissorTest:zt,activeTexture:I,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:Pt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:ne,texStorage2D:me,texStorage3D:mt,texSubImage2D:st,texSubImage3D:Bt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ct,scissor:Kt,viewport:It,reset:Ie}}function Ib(r,t,e,i,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,S){return x?new OffscreenCanvas(I,S):Sa("canvas")}function b(I,S,Y){let ct=1;const ht=zt(I);if((ht.width>Y||ht.height>Y)&&(ct=Y/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const st=Math.floor(ct*ht.width),Bt=Math.floor(ct*ht.height);_===void 0&&(_=y(st,Bt));const vt=S?y(st,Bt):_;return vt.width=st,vt.height=Bt,vt.getContext("2d").drawImage(I,0,0,st,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+st+"x"+Bt+")."),vt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function v(I){return I.generateMipmaps}function m(I){r.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,S,Y,ct,ht=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let st=S;if(S===r.RED&&(Y===r.FLOAT&&(st=r.R32F),Y===r.HALF_FLOAT&&(st=r.R16F),Y===r.UNSIGNED_BYTE&&(st=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.R8UI),Y===r.UNSIGNED_SHORT&&(st=r.R16UI),Y===r.UNSIGNED_INT&&(st=r.R32UI),Y===r.BYTE&&(st=r.R8I),Y===r.SHORT&&(st=r.R16I),Y===r.INT&&(st=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(st=r.RG32F),Y===r.HALF_FLOAT&&(st=r.RG16F),Y===r.UNSIGNED_BYTE&&(st=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RG8UI),Y===r.UNSIGNED_SHORT&&(st=r.RG16UI),Y===r.UNSIGNED_INT&&(st=r.RG32UI),Y===r.BYTE&&(st=r.RG8I),Y===r.SHORT&&(st=r.RG16I),Y===r.INT&&(st=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGB16UI),Y===r.UNSIGNED_INT&&(st=r.RGB32UI),Y===r.BYTE&&(st=r.RGB8I),Y===r.SHORT&&(st=r.RGB16I),Y===r.INT&&(st=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGBA16UI),Y===r.UNSIGNED_INT&&(st=r.RGBA32UI),Y===r.BYTE&&(st=r.RGBA8I),Y===r.SHORT&&(st=r.RGBA16I),Y===r.INT&&(st=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(st=r.RGB9_E5),S===r.RGBA){const Bt=ht?tl:Ae.getTransfer(ct);Y===r.FLOAT&&(st=r.RGBA32F),Y===r.HALF_FLOAT&&(st=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(st=Bt===De?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(I,S){let Y;return I?S===null||S===Br||S===Ds?Y=r.DEPTH24_STENCIL8:S===ki?Y=r.DEPTH32F_STENCIL8:S===Ma&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Br||S===Ds?Y=r.DEPTH_COMPONENT24:S===ki?Y=r.DEPTH_COMPONENT32F:S===Ma&&(Y=r.DEPTH_COMPONENT16),Y}function G(I,S){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==_i&&I.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function U(I){const S=I.target;S.removeEventListener("dispose",U),H(S),S.isVideoTexture&&p.delete(S)}function N(I){const S=I.target;S.removeEventListener("dispose",N),T(S)}function H(I){const S=i.get(I);if(S.__webglInit===void 0)return;const Y=I.source,ct=g.get(Y);if(ct){const ht=ct[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(I),Object.keys(ct).length===0&&g.delete(Y)}i.remove(I)}function C(I){const S=i.get(I);r.deleteTexture(S.__webglTexture);const Y=I.source,ct=g.get(Y);delete ct[S.__cacheKey],c.memory.textures--}function T(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let ht=0;ht<S.__webglFramebuffer[ct].length;ht++)r.deleteFramebuffer(S.__webglFramebuffer[ct][ht]);else r.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)r.deleteFramebuffer(S.__webglFramebuffer[ct]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=I.textures;for(let ct=0,ht=Y.length;ct<ht;ct++){const st=i.get(Y[ct]);st.__webglTexture&&(r.deleteTexture(st.__webglTexture),c.memory.textures--),i.remove(Y[ct])}i.remove(I)}let z=0;function Q(){z=0}function $(){const I=z;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),z+=1,I}function it(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ut(I,S){const Y=i.get(I);if(I.isVideoTexture&&Ht(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const ct=I.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Y,I,S);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function nt(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ot(Y,I,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function dt(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ot(Y,I,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function j(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){_t(Y,I,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}const yt={[_u]:r.REPEAT,[Fr]:r.CLAMP_TO_EDGE,[gu]:r.MIRRORED_REPEAT},Rt={[_i]:r.NEAREST,[nE]:r.NEAREST_MIPMAP_NEAREST,[Mo]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[Tc]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},Ft={[aE]:r.NEVER,[fE]:r.ALWAYS,[oE]:r.LESS,[rm]:r.LEQUAL,[lE]:r.EQUAL,[hE]:r.GEQUAL,[cE]:r.GREATER,[uE]:r.NOTEQUAL};function ue(I,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Tc||S.magFilter===Mo||S.magFilter===Or||S.minFilter===Ti||S.minFilter===Tc||S.minFilter===Mo||S.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,yt[S.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,yt[S.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,yt[S.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Rt[S.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Rt[S.minFilter]),S.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==Mo&&S.minFilter!==Or||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",U));const ct=S.source;let ht=g.get(ct);ht===void 0&&(ht={},g.set(ct,ht));const st=it(S);if(st!==I.__cacheKey){ht[st]===void 0&&(ht[st]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ht[st].usedTimes++;const Bt=ht[I.__cacheKey];Bt!==void 0&&(ht[I.__cacheKey].usedTimes--,Bt.usedTimes===0&&C(S)),I.__cacheKey=st,I.__webglTexture=ht[st].texture}return Y}function ot(I,S,Y){let ct=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=r.TEXTURE_3D);const ht=Ce(I,S),st=S.source;e.bindTexture(ct,I.__webglTexture,r.TEXTURE0+Y);const Bt=i.get(st);if(st.version!==Bt.__version||ht===!0){e.activeTexture(r.TEXTURE0+Y);const vt=Ae.getPrimaries(Ae.workingColorSpace),Ct=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),me=S.colorSpace===cr||vt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let mt=b(S.image,!1,a.maxTextureSize);mt=Fe(S,mt);const Pt=o.convert(S.format,S.colorSpace),Xt=o.convert(S.type);let Kt=L(S.internalFormat,Pt,Xt,S.colorSpace,S.isVideoTexture);ue(ct,S);let It;const fe=S.mipmaps,ne=S.isVideoTexture!==!0,Ie=Bt.__version===void 0||ht===!0,V=st.dataReady,St=G(S,mt);if(S.isDepthTexture)Kt=R(S.format===Us,S.type),Ie&&(ne?e.texStorage2D(r.TEXTURE_2D,1,Kt,mt.width,mt.height):e.texImage2D(r.TEXTURE_2D,0,Kt,mt.width,mt.height,0,Pt,Xt,null));else if(S.isDataTexture)if(fe.length>0){ne&&Ie&&e.texStorage2D(r.TEXTURE_2D,St,Kt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)It=fe[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,It.width,It.height,Pt,Xt,It.data):e.texImage2D(r.TEXTURE_2D,tt,Kt,It.width,It.height,0,Pt,Xt,It.data);S.generateMipmaps=!1}else ne?(Ie&&e.texStorage2D(r.TEXTURE_2D,St,Kt,mt.width,mt.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt.width,mt.height,Pt,Xt,mt.data)):e.texImage2D(r.TEXTURE_2D,0,Kt,mt.width,mt.height,0,Pt,Xt,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ne&&Ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,Kt,fe[0].width,fe[0].height,mt.depth);for(let tt=0,lt=fe.length;tt<lt;tt++)if(It=fe[tt],S.format!==mi)if(Pt!==null)if(ne){if(V)if(S.layerUpdates.size>0){const bt=up(It.width,It.height,S.format,S.type);for(const At of S.layerUpdates){const re=It.data.subarray(At*bt/It.data.BYTES_PER_ELEMENT,(At+1)*bt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,At,It.width,It.height,1,Pt,re)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,It.width,It.height,mt.depth,Pt,It.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Kt,It.width,It.height,mt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,It.width,It.height,mt.depth,Pt,Xt,It.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Kt,It.width,It.height,mt.depth,0,Pt,Xt,It.data)}else{ne&&Ie&&e.texStorage2D(r.TEXTURE_2D,St,Kt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)It=fe[tt],S.format!==mi?Pt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,It.width,It.height,Pt,It.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Kt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,It.width,It.height,Pt,Xt,It.data):e.texImage2D(r.TEXTURE_2D,tt,Kt,It.width,It.height,0,Pt,Xt,It.data)}else if(S.isDataArrayTexture)if(ne){if(Ie&&e.texStorage3D(r.TEXTURE_2D_ARRAY,St,Kt,mt.width,mt.height,mt.depth),V)if(S.layerUpdates.size>0){const tt=up(mt.width,mt.height,S.format,S.type);for(const lt of S.layerUpdates){const bt=mt.data.subarray(lt*tt/mt.data.BYTES_PER_ELEMENT,(lt+1)*tt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,Pt,Xt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Xt,mt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,mt.width,mt.height,mt.depth,0,Pt,Xt,mt.data);else if(S.isData3DTexture)ne?(Ie&&e.texStorage3D(r.TEXTURE_3D,St,Kt,mt.width,mt.height,mt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Pt,Xt,mt.data)):e.texImage3D(r.TEXTURE_3D,0,Kt,mt.width,mt.height,mt.depth,0,Pt,Xt,mt.data);else if(S.isFramebufferTexture){if(Ie)if(ne)e.texStorage2D(r.TEXTURE_2D,St,Kt,mt.width,mt.height);else{let tt=mt.width,lt=mt.height;for(let bt=0;bt<St;bt++)e.texImage2D(r.TEXTURE_2D,bt,Kt,tt,lt,0,Pt,Xt,null),tt>>=1,lt>>=1}}else if(fe.length>0){if(ne&&Ie){const tt=zt(fe[0]);e.texStorage2D(r.TEXTURE_2D,St,Kt,tt.width,tt.height)}for(let tt=0,lt=fe.length;tt<lt;tt++)It=fe[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Pt,Xt,It):e.texImage2D(r.TEXTURE_2D,tt,Kt,Pt,Xt,It);S.generateMipmaps=!1}else if(ne){if(Ie){const tt=zt(mt);e.texStorage2D(r.TEXTURE_2D,St,Kt,tt.width,tt.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,Xt,mt)}else e.texImage2D(r.TEXTURE_2D,0,Kt,Pt,Xt,mt);v(S)&&m(ct),Bt.__version=st.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function _t(I,S,Y){if(S.image.length!==6)return;const ct=Ce(I,S),ht=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+Y);const st=i.get(ht);if(ht.version!==st.__version||ct===!0){e.activeTexture(r.TEXTURE0+Y);const Bt=Ae.getPrimaries(Ae.workingColorSpace),vt=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),Ct=S.colorSpace===cr||Bt===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,Pt=[];for(let lt=0;lt<6;lt++)!me&&!mt?Pt[lt]=b(S.image[lt],!0,a.maxCubemapSize):Pt[lt]=mt?S.image[lt].image:S.image[lt],Pt[lt]=Fe(S,Pt[lt]);const Xt=Pt[0],Kt=o.convert(S.format,S.colorSpace),It=o.convert(S.type),fe=L(S.internalFormat,Kt,It,S.colorSpace),ne=S.isVideoTexture!==!0,Ie=st.__version===void 0||ct===!0,V=ht.dataReady;let St=G(S,Xt);ue(r.TEXTURE_CUBE_MAP,S);let tt;if(me){ne&&Ie&&e.texStorage2D(r.TEXTURE_CUBE_MAP,St,fe,Xt.width,Xt.height);for(let lt=0;lt<6;lt++){tt=Pt[lt].mipmaps;for(let bt=0;bt<tt.length;bt++){const At=tt[bt];S.format!==mi?Kt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,Kt,At.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,fe,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,0,0,At.width,At.height,Kt,It,At.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt,fe,At.width,At.height,0,Kt,It,At.data)}}}else{if(tt=S.mipmaps,ne&&Ie){tt.length>0&&St++;const lt=zt(Pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,St,fe,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Pt[lt].width,Pt[lt].height,Kt,It,Pt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Pt[lt].width,Pt[lt].height,0,Kt,It,Pt[lt].data);for(let bt=0;bt<tt.length;bt++){const re=tt[bt].image[lt].image;ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,re.width,re.height,Kt,It,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,fe,re.width,re.height,0,Kt,It,re.data)}}else{ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Kt,It,Pt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Kt,It,Pt[lt]);for(let bt=0;bt<tt.length;bt++){const At=tt[bt];ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,0,0,Kt,It,At.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,bt+1,fe,Kt,It,At.image[lt])}}}v(S)&&m(r.TEXTURE_CUBE_MAP),st.__version=ht.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ot(I,S,Y,ct,ht,st){const Bt=o.convert(Y.format,Y.colorSpace),vt=o.convert(Y.type),Ct=L(Y.internalFormat,Bt,vt,Y.colorSpace),me=i.get(S),mt=i.get(Y);if(mt.__renderTarget=S,!me.__hasExternalTextures){const Pt=Math.max(1,S.width>>st),Xt=Math.max(1,S.height>>st);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,st,Ct,Pt,Xt,S.depth,0,Bt,vt,null):e.texImage2D(ht,st,Ct,Pt,Xt,0,Bt,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ht,mt.__webglTexture,0,ge(S)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,ht,mt.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(I,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,I),S.depthBuffer){const ct=S.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,st=R(S.stencilBuffer,ht),Bt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=ge(S);ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,st,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,st,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,st,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Bt,r.RENDERBUFFER,I)}else{const ct=S.textures;for(let ht=0;ht<ct.length;ht++){const st=ct[ht],Bt=o.convert(st.format,st.colorSpace),vt=o.convert(st.type),Ct=L(st.internalFormat,Bt,vt,st.colorSpace),me=ge(S);Y&&ee(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,Ct,S.width,S.height):ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,Ct,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=i.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ut(S.depthTexture,0);const ht=ct.__webglTexture,st=ge(S);if(S.depthTexture.format===bs)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(S.depthTexture.format===Us)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function de(I){const S=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=ct}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=r.createRenderbuffer(),Tt(S.__webglDepthbuffer[ct],I,!1);else{const ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,st)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Tt(S.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function $t(I,S,Y){const ct=i.get(I);S!==void 0&&Ot(ct.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&de(I)}function ze(I){const S=I.texture,Y=i.get(I),ct=i.get(S);I.addEventListener("dispose",N);const ht=I.textures,st=I.isWebGLCubeRenderTarget===!0,Bt=ht.length>1;if(Bt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=S.version,c.memory.textures++),st){Y.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[vt]=[];for(let Ct=0;Ct<S.mipmaps.length;Ct++)Y.__webglFramebuffer[vt][Ct]=r.createFramebuffer()}else Y.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)Y.__webglFramebuffer[vt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Bt)for(let vt=0,Ct=ht.length;vt<Ct;vt++){const me=i.get(ht[vt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),c.memory.textures++)}if(I.samples>0&&ee(I)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let vt=0;vt<ht.length;vt++){const Ct=ht[vt];Y.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[vt]);const me=o.convert(Ct.format,Ct.colorSpace),mt=o.convert(Ct.type),Pt=L(Ct.internalFormat,me,mt,Ct.colorSpace,I.isXRRenderTarget===!0),Xt=ge(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Pt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Tt(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),ue(r.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Ot(Y.__webglFramebuffer[vt][Ct],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct);else Ot(Y.__webglFramebuffer[vt],I,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);v(S)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let vt=0,Ct=ht.length;vt<Ct;vt++){const me=ht[vt],mt=i.get(me);e.bindTexture(r.TEXTURE_2D,mt.__webglTexture),ue(r.TEXTURE_2D,me),Ot(Y.__webglFramebuffer,I,me,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),v(me)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,ct.__webglTexture),ue(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ct=0;Ct<S.mipmaps.length;Ct++)Ot(Y.__webglFramebuffer[Ct],I,S,r.COLOR_ATTACHMENT0,vt,Ct);else Ot(Y.__webglFramebuffer,I,S,r.COLOR_ATTACHMENT0,vt,0);v(S)&&m(vt),e.unbindTexture()}I.depthBuffer&&de(I)}function Pe(I){const S=I.textures;for(let Y=0,ct=S.length;Y<ct;Y++){const ht=S[Y];if(v(ht)){const st=P(I),Bt=i.get(ht).__webglTexture;e.bindTexture(st,Bt),m(st),e.unbindTexture()}}}const pe=[],O=[];function on(I){if(I.samples>0){if(ee(I)===!1){const S=I.textures,Y=I.width,ct=I.height;let ht=r.COLOR_BUFFER_BIT;const st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=i.get(I),vt=S.length>1;if(vt)for(let Ct=0;Ct<S.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ct=0;Ct<S.length;Ct++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ct]);const me=i.get(S[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ht,r.NEAREST),f===!0&&(pe.length=0,O.length=0,pe.push(r.COLOR_ATTACHMENT0+Ct),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pe.push(st),O.push(st),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Ct=0;Ct<S.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ct]);const me=i.get(S[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,me,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const S=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ge(I){return Math.min(a.maxSamples,I.samples)}function ee(I){const S=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(I){const S=c.render.frame;p.get(I)!==S&&(p.set(I,S),I.update())}function Fe(I,S){const Y=I.colorSpace,ct=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Ns&&Y!==cr&&(Ae.getTransfer(Y)===De?(ct!==mi||ht!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function zt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=j,this.rebindTextures=$t,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=ee}function Db(r,t){function e(i,a=cr){let o;const c=Ae.getTransfer(a);if(i===qi)return r.UNSIGNED_BYTE;if(i===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return r.BYTE;if(i===Zp)return r.SHORT;if(i===Ma)return r.UNSIGNED_SHORT;if(i===th)return r.INT;if(i===Br)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===Ea)return r.HALF_FLOAT;if(i===$p)return r.ALPHA;if(i===Jp)return r.RGB;if(i===mi)return r.RGBA;if(i===Qp)return r.LUMINANCE;if(i===jp)return r.LUMINANCE_ALPHA;if(i===bs)return r.DEPTH_COMPONENT;if(i===Us)return r.DEPTH_STENCIL;if(i===tm)return r.RED;if(i===ih)return r.RED_INTEGER;if(i===em)return r.RG;if(i===rh)return r.RG_INTEGER;if(i===sh)return r.RGBA_INTEGER;if(i===Zo||i===Ko||i===$o||i===Jo)if(c===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Zo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Zo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vu||i===xu||i===Mu||i===Su)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Su)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eu||i===yu||i===Tu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Eu||i===yu)return c===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Tu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Au||i===wu||i===bu||i===Ru||i===Cu||i===Lu||i===Pu||i===Iu||i===Du||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Au)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ru)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Iu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Du)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ou)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===zu||i===Gu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Qo)return c===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nm||i===Hu||i===Vu||i===ku)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Qo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ku)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Ub=`
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

}`;class Fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new Rn,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pr({vertexShader:Ub,fragmentShader:Nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new ul(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ob extends Bs{constructor(t,e){super();const i=this;let a=null,o=1,c=null,u="local-floor",f=1,h=null,p=null,_=null,g=null,x=null,y=null;const b=new Fb,v=e.getContextAttributes();let m=null,P=null;const L=[],R=[],G=new Nt;let U=null;const N=new Xn;N.viewport=new Ne;const H=new Xn;H.viewport=new Ne;const C=[N,H],T=new ry;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let _t=L[ot];return _t===void 0&&(_t=new qc,L[ot]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ot){let _t=L[ot];return _t===void 0&&(_t=new qc,L[ot]=_t),_t.getGripSpace()},this.getHand=function(ot){let _t=L[ot];return _t===void 0&&(_t=new qc,L[ot]=_t),_t.getHandSpace()};function $(ot){const _t=R.indexOf(ot.inputSource);if(_t===-1)return;const Ot=L[_t];Ot!==void 0&&(Ot.update(ot.inputSource,ot.frame,h||c),Ot.dispatchEvent({type:ot.type,data:ot.inputSource}))}function it(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",it),a.removeEventListener("inputsourceschange",ut);for(let ot=0;ot<L.length;ot++){const _t=R[ot];_t!==null&&(R[ot]=null,L[ot].disconnect(_t))}z=null,Q=null,b.reset(),t.setRenderTarget(m),x=null,g=null,_=null,a=null,P=null,Ce.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){o=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){u=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ot){h=ot},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ot){if(a=ot,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",it),a.addEventListener("inputsourceschange",ut),v.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Tt=null,kt=null;v.depth&&(kt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=v.stencil?Us:bs,Tt=v.stencil?Ds:Br);const de={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:o};_=new XRWebGLBinding(a,e),g=_.createProjectionLayer(de),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new zr(g.textureWidth,g.textureHeight,{format:mi,type:qi,depthTexture:new vm(g.textureWidth,g.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Ot={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,e,Ot),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new zr(x.framebufferWidth,x.framebufferHeight,{format:mi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await a.requestReferenceSpace(u),Ce.setContext(a),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(ot){for(let _t=0;_t<ot.removed.length;_t++){const Ot=ot.removed[_t],Tt=R.indexOf(Ot);Tt>=0&&(R[Tt]=null,L[Tt].disconnect(Ot))}for(let _t=0;_t<ot.added.length;_t++){const Ot=ot.added[_t];let Tt=R.indexOf(Ot);if(Tt===-1){for(let de=0;de<L.length;de++)if(de>=R.length){R.push(Ot),Tt=de;break}else if(R[de]===null){R[de]=Ot,Tt=de;break}if(Tt===-1)break}const kt=L[Tt];kt&&kt.connect(Ot)}}const nt=new F,dt=new F;function j(ot,_t,Ot){nt.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(Ot.matrixWorld);const Tt=nt.distanceTo(dt),kt=_t.projectionMatrix.elements,de=Ot.projectionMatrix.elements,$t=kt[14]/(kt[10]-1),ze=kt[14]/(kt[10]+1),Pe=(kt[9]+1)/kt[5],pe=(kt[9]-1)/kt[5],O=(kt[8]-1)/kt[0],on=(de[8]+1)/de[0],ge=$t*O,ee=$t*on,Ht=Tt/(-O+on),Fe=Ht*-O;if(_t.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Fe),ot.translateZ(Ht),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),kt[10]===-1)ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const zt=$t+Ht,I=ze+Ht,S=ge-Fe,Y=ee+(Tt-Fe),ct=Pe*ze/I*zt,ht=pe*ze/I*zt;ot.projectionMatrix.makePerspective(S,Y,ct,ht,zt,I),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function yt(ot,_t){_t===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(_t.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(a===null)return;let _t=ot.near,Ot=ot.far;b.texture!==null&&(b.depthNear>0&&(_t=b.depthNear),b.depthFar>0&&(Ot=b.depthFar)),T.near=H.near=N.near=_t,T.far=H.far=N.far=Ot,(z!==T.near||Q!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Q=T.far),N.layers.mask=ot.layers.mask|2,H.layers.mask=ot.layers.mask|4,T.layers.mask=N.layers.mask|H.layers.mask;const Tt=ot.parent,kt=T.cameras;yt(T,Tt);for(let de=0;de<kt.length;de++)yt(kt[de],Tt);kt.length===2?j(T,N,H):T.projectionMatrix.copy(N.projectionMatrix),Rt(ot,T,Tt)};function Rt(ot,_t,Ot){Ot===null?ot.matrix.copy(_t.matrixWorld):(ot.matrix.copy(Ot.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(_t.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Xu*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(ot){f=ot,g!==null&&(g.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let Ft=null;function ue(ot,_t){if(p=_t.getViewerPose(h||c),y=_t,p!==null){const Ot=p.views;x!==null&&(t.setRenderTargetFramebuffer(P,x.framebuffer),t.setRenderTarget(P));let Tt=!1;Ot.length!==T.cameras.length&&(T.cameras.length=0,Tt=!0);for(let $t=0;$t<Ot.length;$t++){const ze=Ot[$t];let Pe=null;if(x!==null)Pe=x.getViewport(ze);else{const O=_.getViewSubImage(g,ze);Pe=O.viewport,$t===0&&(t.setRenderTargetTextures(P,O.colorTexture,g.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(P))}let pe=C[$t];pe===void 0&&(pe=new Xn,pe.layers.enable($t),pe.viewport=new Ne,C[$t]=pe),pe.matrix.fromArray(ze.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ze.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),$t===0&&(T.matrix.copy(pe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Tt===!0&&T.cameras.push(pe)}const kt=a.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const $t=_.getDepthInformation(Ot[0]);$t&&$t.isValid&&$t.texture&&b.init(t,$t,a.renderState)}}for(let Ot=0;Ot<L.length;Ot++){const Tt=R[Ot],kt=L[Ot];Tt!==null&&kt!==void 0&&kt.update(Tt,_t,h||c)}Ft&&Ft(ot,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),y=null}const Ce=new Mm;Ce.setAnimationLoop(ue),this.setAnimationLoop=function(ot){Ft=ot},this.dispose=function(){}}}const Lr=new Ai,Bb=new ke;function zb(r,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,dm(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,P,L,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,R)):m.isMeshMatcapMaterial?(o(v,m),y(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),b(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?f(v,m,P,L):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Nn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Nn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const P=t.get(m),L=P.envMap,R=P.envMapRotation;L&&(v.envMap.value=L,Lr.copy(R),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),v.envMapRotation.value.setFromMatrix4(Bb.makeRotationFromEuler(Lr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function f(v,m,P,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*P,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,P){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function b(v,m){const P=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Gb(r,t,e,i){let a={},o={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,L){const R=L.program;i.uniformBlockBinding(P,R)}function h(P,L){let R=a[P.id];R===void 0&&(y(P),R=p(P),a[P.id]=R,P.addEventListener("dispose",v));const G=L.program;i.updateUBOMapping(P,G);const U=t.render.frame;o[P.id]!==U&&(g(P),o[P.id]=U)}function p(P){const L=_();P.__bindingPointIndex=L;const R=r.createBuffer(),G=P.__size,U=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,G,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const L=a[P.id],R=P.uniforms,G=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let U=0,N=R.length;U<N;U++){const H=Array.isArray(R[U])?R[U]:[R[U]];for(let C=0,T=H.length;C<T;C++){const z=H[C];if(x(z,U,C,G)===!0){const Q=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let it=0;for(let ut=0;ut<$.length;ut++){const nt=$[ut],dt=b(nt);typeof nt=="number"||typeof nt=="boolean"?(z.__data[0]=nt,r.bufferSubData(r.UNIFORM_BUFFER,Q+it,z.__data)):nt.isMatrix3?(z.__data[0]=nt.elements[0],z.__data[1]=nt.elements[1],z.__data[2]=nt.elements[2],z.__data[3]=0,z.__data[4]=nt.elements[3],z.__data[5]=nt.elements[4],z.__data[6]=nt.elements[5],z.__data[7]=0,z.__data[8]=nt.elements[6],z.__data[9]=nt.elements[7],z.__data[10]=nt.elements[8],z.__data[11]=0):(nt.toArray(z.__data,it),it+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(P,L,R,G){const U=P.value,N=L+"_"+R;if(G[N]===void 0)return typeof U=="number"||typeof U=="boolean"?G[N]=U:G[N]=U.clone(),!0;{const H=G[N];if(typeof U=="number"||typeof U=="boolean"){if(H!==U)return G[N]=U,!0}else if(H.equals(U)===!1)return H.copy(U),!0}return!1}function y(P){const L=P.uniforms;let R=0;const G=16;for(let N=0,H=L.length;N<H;N++){const C=Array.isArray(L[N])?L[N]:[L[N]];for(let T=0,z=C.length;T<z;T++){const Q=C[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let it=0,ut=$.length;it<ut;it++){const nt=$[it],dt=b(nt),j=R%G,yt=j%dt.boundary,Rt=j+yt;R+=yt,Rt!==0&&G-Rt<dt.storage&&(R+=G-Rt),Q.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=dt.storage}}}const U=R%G;return U>0&&(R+=G-U),P.__size=R,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function v(P){const L=P.target;L.removeEventListener("dispose",v);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const P in a)r.deleteBuffer(a[P]);c=[],a={},o={}}return{bind:f,update:h,dispose:m}}class Hb{constructor(t={}){const{canvas:e=pE(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),b=new Int32Array(4);let v=null,m=null;const P=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=hr,this.toneMappingExposure=1;const R=this;let G=!1,U=0,N=0,H=null,C=-1,T=null;const z=new Ne,Q=new Ne;let $=null;const it=new gt(0);let ut=0,nt=e.width,dt=e.height,j=1,yt=null,Rt=null;const Ft=new Ne(0,0,nt,dt),ue=new Ne(0,0,nt,dt);let Ce=!1;const ot=new ah;let _t=!1,Ot=!1;this.transmissionResolutionScale=1;const Tt=new ke,kt=new ke,de=new F,$t=new Ne,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function pe(){return H===null?j:1}let O=i;function on(A,W){return e.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ju}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",At,!1),O===null){const W="webgl2";if(O=on(W,A),O===null)throw on(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,ee,Ht,Fe,zt,I,S,Y,ct,ht,st,Bt,vt,Ct,me,mt,Pt,Xt,Kt,It,fe,ne,Ie,V;function St(){ge=new JA(O),ge.init(),ne=new Db(O,ge),ee=new XA(O,ge,t,ne),Ht=new Pb(O,ge),ee.reverseDepthBuffer&&g&&Ht.buffers.depth.setReversed(!0),Fe=new tw(O),zt=new vb,I=new Ib(O,ge,Ht,zt,ee,ne,Fe),S=new YA(R),Y=new $A(R),ct=new oy(O),Ie=new kA(O,ct),ht=new QA(O,ct,Fe,Ie),st=new nw(O,ht,ct,Fe),Kt=new ew(O,ee,I),mt=new qA(zt),Bt=new gb(R,S,Y,ge,ee,Ie,mt),vt=new zb(R,zt),Ct=new Mb,me=new wb(ge),Xt=new VA(R,S,Y,Ht,st,x,f),Pt=new Cb(R,st,ee),V=new Gb(O,Fe,ee,Ht),It=new WA(O,ge,Fe),fe=new jA(O,ge,Fe),Fe.programs=Bt.programs,R.capabilities=ee,R.extensions=ge,R.properties=zt,R.renderLists=Ct,R.shadowMap=Pt,R.state=Ht,R.info=Fe}St();const tt=new Ob(R,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(nt,dt,!1))},this.getSize=function(A){return A.set(nt,dt)},this.setSize=function(A,W,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,dt=W,e.width=Math.floor(A*j),e.height=Math.floor(W*j),Z===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(nt*j,dt*j).floor()},this.setDrawingBufferSize=function(A,W,Z){nt=A,dt=W,j=Z,e.width=Math.floor(A*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Ft)},this.setViewport=function(A,W,Z,K){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,W,Z,K),Ht.viewport(z.copy(Ft).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,W,Z,K){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,W,Z,K),Ht.scissor(Q.copy(ue).multiplyScalar(j).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Ht.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Rt=A},this.getClearColor=function(A){return A.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(A=!0,W=!0,Z=!0){let K=0;if(A){let q=!1;if(H!==null){const pt=H.texture.format;q=pt===sh||pt===rh||pt===ih}if(q){const pt=H.texture.type,Et=pt===qi||pt===Br||pt===Ma||pt===Ds||pt===eh||pt===nh,Lt=Xt.getClearColor(),Ut=Xt.getClearAlpha(),Jt=Lt.r,Qt=Lt.g,Wt=Lt.b;Et?(y[0]=Jt,y[1]=Qt,y[2]=Wt,y[3]=Ut,O.clearBufferuiv(O.COLOR,0,y)):(b[0]=Jt,b[1]=Qt,b[2]=Wt,b[3]=Ut,O.clearBufferiv(O.COLOR,0,b))}else K|=O.COLOR_BUFFER_BIT}W&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Xt.dispose(),Ct.dispose(),me.dispose(),zt.dispose(),S.dispose(),Y.dispose(),st.dispose(),Ie.dispose(),V.dispose(),Bt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Vr),tt.removeEventListener("sessionend",ba),oi.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Fe.autoReset,W=Pt.enabled,Z=Pt.autoUpdate,K=Pt.needsUpdate,q=Pt.type;St(),Fe.autoReset=A,Pt.enabled=W,Pt.autoUpdate=Z,Pt.needsUpdate=K,Pt.type=q}function At(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const W=A.target;W.removeEventListener("dispose",re),We(W)}function We(A){tn(A),zt.remove(A)}function tn(A){const W=zt.get(A).programs;W!==void 0&&(W.forEach(function(Z){Bt.releaseProgram(Z)}),A.isShaderMaterial&&Bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Z,K,q,pt){W===null&&(W=ze);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Lt=Da(A,W,Z,K,q);Ht.setMaterial(K,Et);let Ut=Z.index,Jt=1;if(K.wireframe===!0){if(Ut=ht.getWireframeAttribute(Z),Ut===void 0)return;Jt=2}const Qt=Z.drawRange,Wt=Z.attributes.position;let xe=Qt.start*Jt,Te=(Qt.start+Qt.count)*Jt;pt!==null&&(xe=Math.max(xe,pt.start*Jt),Te=Math.min(Te,(pt.start+pt.count)*Jt)),Ut!==null?(xe=Math.max(xe,0),Te=Math.min(Te,Ut.count)):Wt!=null&&(xe=Math.max(xe,0),Te=Math.min(Te,Wt.count));const qe=Te-xe;if(qe<0||qe===1/0)return;Ie.setup(q,K,Lt,Z,Ut);let He,Me=It;if(Ut!==null&&(He=ct.get(Ut),Me=fe,Me.setIndex(He)),q.isMesh)K.wireframe===!0?(Ht.setLineWidth(K.wireframeLinewidth*pe()),Me.setMode(O.LINES)):Me.setMode(O.TRIANGLES);else if(q.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),Ht.setLineWidth(Vt*pe()),q.isLineSegments?Me.setMode(O.LINES):q.isLineLoop?Me.setMode(O.LINE_LOOP):Me.setMode(O.LINE_STRIP)}else q.isPoints?Me.setMode(O.POINTS):q.isSprite&&Me.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,en=q._multiDrawCounts,ye=q._multiDrawCount,mn=Ut?ct.get(Ut).bytesPerElement:1,wi=zt.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<ye;Sn++)wi.setValue(O,"_gl_DrawID",Sn),Me.render(Vt[Sn]/mn,en[Sn])}else if(q.isInstancedMesh)Me.renderInstances(xe,qe,q.count);else if(Z.isInstancedBufferGeometry){const Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Vt);Me.renderInstances(xe,qe,en)}else Me.render(xe,qe)};function we(A,W,Z){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,Wr(A,W,Z),A.side=dr,A.needsUpdate=!0,Wr(A,W,Z),A.side=Vi):Wr(A,W,Z)}this.compile=function(A,W,Z=null){Z===null&&(Z=A),m=me.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pt=q.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Lt=pt[Et];we(Lt,Z,q),K.add(Lt)}else we(pt,Z,q),K.add(pt)}),L.pop(),m=null,K},this.compileAsync=function(A,W,Z=null){const K=this.compile(A,W,Z);return new Promise(q=>{function pt(){if(K.forEach(function(Et){zt.get(Et).currentProgram.isReady()&&K.delete(Et)}),K.size===0){q(A);return}setTimeout(pt,10)}ge.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Fn=null;function ai(A){Fn&&Fn(A)}function Vr(){oi.stop()}function ba(){oi.start()}const oi=new Mm;oi.setAnimationLoop(ai),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(A){Fn=A,tt.setAnimationLoop(A),A===null?oi.stop():oi.start()},tt.addEventListener("sessionstart",Vr),tt.addEventListener("sessionend",ba),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,H),m=me.get(A,L.length),m.init(W),L.push(m),kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ot.setFromProjectionMatrix(kt),Ot=this.localClippingEnabled,_t=mt.init(this.clippingPlanes,Ot),v=Ct.get(A,P.length),v.init(),P.push(v),tt.enabled===!0&&tt.isPresenting===!0){const pt=R.xr.getDepthSensingMesh();pt!==null&&Gs(pt,W,-1/0,R.sortObjects)}Gs(A,W,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(yt,Rt),Pe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Pe&&Xt.addToRenderList(v,A),this.info.render.frame++,_t===!0&&mt.beginShadows();const Z=m.state.shadowsArray;Pt.render(Z,A,W),_t===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const pt=W.cameras;if(q.length>0)for(let Et=0,Lt=pt.length;Et<Lt;Et++){const Ut=pt[Et];Ca(K,q,A,Ut)}Pe&&Xt.render(A);for(let Et=0,Lt=pt.length;Et<Lt;Et++){const Ut=pt[Et];Ra(v,A,Ut,Ut.viewport)}}else q.length>0&&Ca(K,q,A,W),Pe&&Xt.render(A),Ra(v,A,W);H!==null&&N===0&&(I.updateMultisampleRenderTarget(H),I.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(R,A,W),Ie.resetDefaultState(),C=-1,T=null,L.pop(),L.length>0?(m=L[L.length-1],_t===!0&&mt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,P.pop(),P.length>0?v=P[P.length-1]:v=null};function Gs(A,W,Z,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){K&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);const Et=st.update(A),Lt=A.material;Lt.visible&&v.push(A,Et,Lt,Z,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const Et=st.update(A),Lt=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$t.copy(Et.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(Lt)){const Ut=Et.groups;for(let Jt=0,Qt=Ut.length;Jt<Qt;Jt++){const Wt=Ut[Jt],xe=Lt[Wt.materialIndex];xe&&xe.visible&&v.push(A,Et,xe,Z,$t.z,Wt)}}else Lt.visible&&v.push(A,Et,Lt,Z,$t.z,null)}}const pt=A.children;for(let Et=0,Lt=pt.length;Et<Lt;Et++)Gs(pt[Et],W,Z,K)}function Ra(A,W,Z,K){const q=A.opaque,pt=A.transmissive,Et=A.transparent;m.setupLightsView(Z),_t===!0&&mt.setGlobalState(R.clippingPlanes,Z),K&&Ht.viewport(z.copy(K)),q.length>0&&kr(q,W,Z),pt.length>0&&kr(pt,W,Z),Et.length>0&&kr(Et,W,Z),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ca(A,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new zr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Ea:qi,minFilter:Or,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const pt=m.state.transmissionRenderTarget[K.id],Et=K.viewport||z;pt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);const Lt=R.getRenderTarget();R.setRenderTarget(pt),R.getClearColor(it),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&Xt.render(Z);const Ut=R.toneMapping;R.toneMapping=hr;const Jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),_t===!0&&mt.setGlobalState(R.clippingPlanes,K),kr(A,Z,K),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,xe=W.length;Wt<xe;Wt++){const Te=W[Wt],qe=Te.object,He=Te.geometry,Me=Te.material,Vt=Te.group;if(Me.side===Vi&&qe.layers.test(K.layers)){const en=Me.side;Me.side=Nn,Me.needsUpdate=!0,La(qe,Z,K,He,Me,Vt),Me.side=en,Me.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}R.setRenderTarget(Lt),R.setClearColor(it,ut),Jt!==void 0&&(K.viewport=Jt),R.toneMapping=Ut}function kr(A,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pt=A.length;q<pt;q++){const Et=A[q],Lt=Et.object,Ut=Et.geometry,Jt=K===null?Et.material:K,Qt=Et.group;Lt.layers.test(Z.layers)&&La(Lt,W,Z,Ut,Jt,Qt)}}function La(A,W,Z,K,q,pt){A.onBeforeRender(R,W,Z,K,q,pt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,W,Z,K,A,pt),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Nn,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pt),q.side=dr,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pt),q.side=Vi):R.renderBufferDirect(Z,W,K,q,A,pt),A.onAfterRender(R,W,Z,K,q,pt)}function Wr(A,W,Z){W.isScene!==!0&&(W=ze);const K=zt.get(A),q=m.state.lights,pt=m.state.shadowsArray,Et=q.state.version,Lt=Bt.getParameters(A,q.state,pt,W,Z),Ut=Bt.getProgramCacheKey(Lt);let Jt=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?Y:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",re),Jt=new Map,K.programs=Jt);let Qt=Jt.get(Ut);if(Qt!==void 0){if(K.currentProgram===Qt&&K.lightsStateVersion===Et)return Ia(A,Lt),Qt}else Lt.uniforms=Bt.getUniforms(A),A.onBeforeCompile(Lt,R),Qt=Bt.acquireProgram(Lt,Ut),Jt.set(Ut,Qt),K.uniforms=Lt.uniforms;const Wt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=mt.uniform),Ia(A,Lt),K.needsLights=pl(A),K.lightsStateVersion=Et,K.needsLights&&(Wt.ambientLightColor.value=q.state.ambient,Wt.lightProbe.value=q.state.probe,Wt.directionalLights.value=q.state.directional,Wt.directionalLightShadows.value=q.state.directionalShadow,Wt.spotLights.value=q.state.spot,Wt.spotLightShadows.value=q.state.spotShadow,Wt.rectAreaLights.value=q.state.rectArea,Wt.ltc_1.value=q.state.rectAreaLTC1,Wt.ltc_2.value=q.state.rectAreaLTC2,Wt.pointLights.value=q.state.point,Wt.pointLightShadows.value=q.state.pointShadow,Wt.hemisphereLights.value=q.state.hemi,Wt.directionalShadowMap.value=q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Wt.spotShadowMap.value=q.state.spotShadowMap,Wt.spotLightMatrix.value=q.state.spotLightMatrix,Wt.spotLightMap.value=q.state.spotLightMap,Wt.pointShadowMap.value=q.state.pointShadowMap,Wt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Qt,K.uniformsList=null,Qt}function Pa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=jo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ia(A,W){const Z=zt.get(A);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Da(A,W,Z,K,q){W.isScene!==!0&&(W=ze),I.resetTextureUnits();const pt=W.fog,Et=K.isMeshStandardMaterial?W.environment:null,Lt=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ns,Ut=(K.isMeshStandardMaterial?Y:S).get(K.envMap||Et),Jt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!Z.morphAttributes.position,xe=!!Z.morphAttributes.normal,Te=!!Z.morphAttributes.color;let qe=hr;K.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qe=R.toneMapping);const He=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=He!==void 0?He.length:0,Vt=zt.get(K),en=m.state.lights;if(_t===!0&&(Ot===!0||A!==T)){const ln=A===T&&K.id===C;mt.setState(K,A,ln)}let ye=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==en.state.version||Vt.outputColorSpace!==Lt||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==Ut||K.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Jt||Vt.vertexTangents!==Qt||Vt.morphTargets!==Wt||Vt.morphNormals!==xe||Vt.morphColors!==Te||Vt.toneMapping!==qe||Vt.morphTargetsCount!==Me)&&(ye=!0):(ye=!0,Vt.__version=K.version);let mn=Vt.currentProgram;ye===!0&&(mn=Wr(K,W,q));let wi=!1,Sn=!1,Yi=!1;const Oe=mn.getUniforms(),_n=Vt.uniforms;if(Ht.useProgram(mn.program)&&(wi=!0,Sn=!0,Yi=!0),K.id!==C&&(C=K.id,Sn=!0),wi||T!==A){Ht.buffers.depth.getReversed()?(Tt.copy(A.projectionMatrix),_E(Tt),gE(Tt),Oe.setValue(O,"projectionMatrix",Tt)):Oe.setValue(O,"projectionMatrix",A.projectionMatrix),Oe.setValue(O,"viewMatrix",A.matrixWorldInverse);const cn=Oe.map.cameraPosition;cn!==void 0&&cn.setValue(O,de.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&Oe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Oe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Sn=!0,Yi=!0)}if(q.isSkinnedMesh){Oe.setOptional(O,q,"bindMatrix"),Oe.setOptional(O,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Oe.setValue(O,"boneTexture",ln.boneTexture,I))}q.isBatchedMesh&&(Oe.setOptional(O,q,"batchingTexture"),Oe.setValue(O,"batchingTexture",q._matricesTexture,I),Oe.setOptional(O,q,"batchingIdTexture"),Oe.setValue(O,"batchingIdTexture",q._indirectTexture,I),Oe.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Oe.setValue(O,"batchingColorTexture",q._colorsTexture,I));const Cn=Z.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Kt.update(q,Z,mn),(Sn||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,Oe.setValue(O,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=Ut,_n.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),Sn&&(Oe.setValue(O,"toneMappingExposure",R.toneMappingExposure),Vt.needsLights&&dl(_n,Yi),pt&&K.fog===!0&&vt.refreshFogUniforms(_n,pt),vt.refreshMaterialUniforms(_n,K,j,dt,m.state.transmissionRenderTarget[A.id]),jo.upload(O,Pa(Vt),_n,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(jo.upload(O,Pa(Vt),_n,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Oe.setValue(O,"center",q.center),Oe.setValue(O,"modelViewMatrix",q.modelViewMatrix),Oe.setValue(O,"normalMatrix",q.normalMatrix),Oe.setValue(O,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let cn=0,mr=ln.length;cn<mr;cn++){const Ln=ln[cn];V.update(Ln,mn),V.bind(Ln,mn)}}return mn}function dl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function pl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,Z){zt.get(A.texture).__webglTexture=W,zt.get(A.depthTexture).__webglTexture=Z;const K=zt.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Z=zt.get(A);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const ml=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Z=0){H=A,U=W,N=Z;let K=!0,q=null,pt=!1,Et=!1;if(A){const Ut=zt.get(A);if(Ut.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ut.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Ut.__hasExternalTextures)I.rebindTextures(A,zt.get(A.texture).__webglTexture,zt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Ut.__boundDepthTexture!==Wt){if(Wt!==null&&zt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Et=!0);const Qt=zt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?q=Qt[W][Z]:q=Qt[W],pt=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?q=zt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?q=Qt[Z]:q=Qt,z.copy(A.viewport),Q.copy(A.scissor),$=A.scissorTest}else z.copy(Ft).multiplyScalar(j).floor(),Q.copy(ue).multiplyScalar(j).floor(),$=Ce;if(Z!==0&&(q=ml),Ht.bindFramebuffer(O.FRAMEBUFFER,q)&&K&&Ht.drawBuffers(A,q),Ht.viewport(z),Ht.scissor(Q),Ht.setScissorTest($),pt){const Ut=zt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,Z)}else if(Et){const Ut=zt.get(A.texture),Jt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ut.__webglTexture,Z,Jt)}else if(A!==null&&Z!==0){const Ut=zt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ut.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(A,W,Z,K,q,pt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){Ht.bindFramebuffer(O.FRAMEBUFFER,Lt);try{const Ut=A.texture,Jt=Ut.format,Qt=Ut.type;if(!ee.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q&&O.readPixels(W,Z,K,q,ne.convert(Jt),ne.convert(Qt),pt)}finally{const Ut=H!==null?zt.get(H).__webglFramebuffer:null;Ht.bindFramebuffer(O.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,W,Z,K,q,pt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=zt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){const Ut=A.texture,Jt=Ut.format,Qt=Ut.type;if(!ee.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q){Ht.bindFramebuffer(O.FRAMEBUFFER,Lt);const Wt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(W,Z,K,q,ne.convert(Jt),ne.convert(Qt),0);const xe=H!==null?zt.get(H).__webglFramebuffer:null;Ht.bindFramebuffer(O.FRAMEBUFFER,xe);const Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mE(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Wt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.deleteBuffer(Wt),O.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Z=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(A.image.width*K),pt=Math.floor(A.image.height*K),Et=W!==null?W.x:0,Lt=W!==null?W.y:0;I.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Et,Lt,q,pt),Ht.unbindTexture()};const _l=O.createFramebuffer(),gl=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Z=null,K=null,q=0,pt=null){A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],pt=arguments[3]||0,Z=null),pt===null&&(q!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=q,q=0):pt=0);let Et,Lt,Ut,Jt,Qt,Wt,xe,Te,qe;const He=A.isCompressedTexture?A.mipmaps[pt]:A.image;if(Z!==null)Et=Z.max.x-Z.min.x,Lt=Z.max.y-Z.min.y,Ut=Z.isBox3?Z.max.z-Z.min.z:1,Jt=Z.min.x,Qt=Z.min.y,Wt=Z.isBox3?Z.min.z:0;else{const Cn=Math.pow(2,-q);Et=Math.floor(He.width*Cn),Lt=Math.floor(He.height*Cn),A.isDataArrayTexture?Ut=He.depth:A.isData3DTexture?Ut=Math.floor(He.depth*Cn):Ut=1,Jt=0,Qt=0,Wt=0}K!==null?(xe=K.x,Te=K.y,qe=K.z):(xe=0,Te=0,qe=0);const Me=ne.convert(W.format),Vt=ne.convert(W.type);let en;W.isData3DTexture?(I.setTexture3D(W,0),en=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),en=O.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),en=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const ye=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),wi=O.getParameter(O.UNPACK_SKIP_PIXELS),Sn=O.getParameter(O.UNPACK_SKIP_ROWS),Yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,He.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,He.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt);const Oe=A.isDataArrayTexture||A.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=zt.get(A),ln=zt.get(W),cn=zt.get(Cn.__renderTarget),mr=zt.get(ln.__renderTarget);Ht.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ht.bindFramebuffer(O.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Ln=0;Ln<Ut;Ln++)Oe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.get(A).__webglTexture,q,Wt+Ln),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.get(W).__webglTexture,pt,qe+Ln)),O.blitFramebuffer(Jt,Qt,Et,Lt,xe,Te,Et,Lt,O.DEPTH_BUFFER_BIT,O.NEAREST);Ht.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||zt.has(A)){const Cn=zt.get(A),ln=zt.get(W);Ht.bindFramebuffer(O.READ_FRAMEBUFFER,_l),Ht.bindFramebuffer(O.DRAW_FRAMEBUFFER,gl);for(let cn=0;cn<Ut;cn++)Oe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Wt+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Cn.__webglTexture,q),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,pt,qe+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,pt),q!==0?O.blitFramebuffer(Jt,Qt,Et,Lt,xe,Te,Et,Lt,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(en,pt,xe,Te,qe+cn,Jt,Qt,Et,Lt):O.copyTexSubImage2D(en,pt,xe,Te,Jt,Qt,Et,Lt);Ht.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(en,pt,xe,Te,qe,Et,Lt,Ut,Me,Vt,He.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(en,pt,xe,Te,qe,Et,Lt,Ut,Me,He.data):O.texSubImage3D(en,pt,xe,Te,qe,Et,Lt,Ut,Me,Vt,He):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,xe,Te,Et,Lt,Me,Vt,He.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,xe,Te,He.width,He.height,Me,He.data):O.texSubImage2D(O.TEXTURE_2D,pt,xe,Te,Et,Lt,Me,Vt,He);O.pixelStorei(O.UNPACK_ROW_LENGTH,ye),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Sn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yi),pt===0&&W.generateMipmaps&&O.generateMipmap(en),Ht.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Z=null,K=null,q=0){return A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Z,K,q)},this.initRenderTarget=function(A){zt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Ht.unbindTexture()},this.resetState=function(){U=0,N=0,H=null,Ht.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class Aa{constructor(t){wt(this,"mesh");wt(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,i,a){}graphics(t,e,i,a){}kill(){this.isAlive=!1}beforeDeath(t,e,i){}}class si{constructor(t){wt(this,"center");wt(this,"parts");this.center=t.center,this.parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this.parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}}const Vb={createGrid(r,t){const e=[];for(let i=0;i<r;i++){e[i]=[];for(let a=0;a<t;a++){const o={actors:[],isWalkable:!0};e[i][a]=o}}return e}};class kb{constructor(t){wt(this,"actorsGrid");wt(this,"components",[]);wt(this,"camera");wt(this,"scene");this.actorsGrid=Vb.createGrid(t.width,t.height),this.camera=t.camera??new Xn,this.scene=t.scene??new VE}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof si?t.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof si?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((o,c)=>{o.forEach((u,f)=>{const h=new Nt(c,f);u.actors.forEach(p=>p.update(t,e,this,h.clone()))})}),this.components.forEach(o=>o.update(t,e,this)),this.actorsGrid.map((o,c)=>o.map((u,f)=>{const h=new Nt(c,f);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(t,this,h),g.mesh instanceof si?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)});const _=u.actors.filter(g=>g.isAlive);u.actors=_}));const i=[],a=[];for(let o=0;o<this.components.length;o++){const c=this.components[o];c.isAlive?i.push(c):a.push(c)}a.forEach(o=>{o.mesh instanceof si?o.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(o.mesh)}),this.components=i}graphics(t,e){this.actorsGrid.forEach((i,a)=>{i.forEach((o,c)=>{const u=new Nt(a,c);o.actors.forEach(f=>f.graphics(t,e,this,u.clone()))})}),this.components.forEach(i=>i.graphics(t,e,this))}}var Cs=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++r%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===p?"block":"none";r=p}var a=(performance||Date).now(),o=a,c=0,u=e(new Cs.Panel("FPS","#0ff","#002")),f=e(new Cs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=e(new Cs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(f.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,h)){var _=performance.memory;h.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:t,setMode:i}};Cs.Panel=function(r,t,e){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,p=2*c,_=3*c,g=15*c,x=74*c,y=30*c,b=document.createElement("canvas");b.width=u,b.height=f,b.style.cssText="width:80px;height:48px";var v=b.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=e,v.fillRect(0,0,u,f),v.fillStyle=t,v.fillText(r,h,p),v.fillRect(_,g,x,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_,g,x,y),{dom:b,update:function(m,P){i=Math.min(i,m),a=Math.max(a,m),v.fillStyle=e,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=t,v.fillText(o(m)+" "+r+" ("+o(i)+"-"+o(a)+")",h,p),v.drawImage(b,_+c,g,x-c,y,_,g,x-c,y),v.fillRect(_+x-c,g,c,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,o((1-m/P)*y))}}};const Wb="canvas";class Xb{constructor(){wt(this,"wasPressedMap",new Map);wt(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const qb=new Xb;class Yb{constructor(){wt(this,"renderer");wt(this,"keyboardHandler");wt(this,"isGameOver",!1);wt(this,"lastUpdate",Date.now());wt(this,"lastGraphics",Date.now());wt(this,"stats",new Cs);wt(this,"containers",new Map);wt(this,"currentContainer");this.renderer=new Hb,this.renderer.setSize(800,800),this.renderer.domElement.id=Wb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=qb,this.stats=new Cs,document.body.appendChild(this.stats.dom);const t=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",t),window.requestAnimationFrame(t)}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=Np(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=Np(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function Np(r){return Math.max(0,Math.min(r,1e3))}class fl{constructor(t){wt(this,"mesh");wt(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,i){}graphics(t,e,i){}kill(){this.isAlive=!1}}const te={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc"},ni=4,Je={createCube:r=>{const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??65280,i=new Gr(t,t,t,ni,ni,ni),a={color:e},o=r!=null&&r.basicMaterial?new Si(a):new Ss(a);return new bn(i,o)},createBox:r=>{const t=(r==null?void 0:r.width)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.depth)??1,a=(r==null?void 0:r.color)??new gt(te.RED),o=new Gr(t,e,i,ni,ni,ni),c={color:a},u=r!=null&&r.basicMaterial?new Si(c):new Ss(c);return new bn(o,u)},createCone:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new gt(te.RED),a=new oh(t,e,ni,ni),o={color:i},c=r!=null&&r.basicMaterial?new Si(o):new Ss(o);return new bn(a,c)},createSphere:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.color)??new gt(te.RED),i=new uh(t,ni,ni),a={color:e},o=r!=null&&r.basicMaterial?new Si(a):new Ss(a);return new bn(i,o)},createCylinder:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new gt(te.RED),a=new cl(t,t,e,ni*2,ni),o={color:i},c=r!=null&&r.basicMaterial?new Si(o):new Ss(o);return new bn(a,c)},createGem(r){const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??new gt(te.RED),i=new ch(t,0),a={color:e},o=r!=null&&r.basicMaterial?new Si(a):new Ss(a);return new bn(i,o)}};class Zb extends Aa{constructor(t){const e=new si({center:t.position,parts:[{mesh:Je.createBox({width:t.size,height:t.size/4,depth:t.size,color:new gt(te.DARK)}),offset:new F(0,-t.size*3/8,0)},{mesh:Je.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new gt(te.WHITE)}),offset:new F(0,0,0)},{mesh:Je.createBox({width:t.size,height:t.size/4,depth:t.size,color:new gt(te.DARK)}),offset:new F(0,t.size*3/8,0)}]});super({mesh:e})}}const jt={TILE_SIZE:1};var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ru={},ha={},ga={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Kb=ga.exports,Fp;function $b(){return Fp||(Fp=1,function(r,t){(function(){var e,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",_=1,g=2,x=4,y=1,b=2,v=1,m=2,P=4,L=8,R=16,G=32,U=64,N=128,H=256,C=512,T=30,z="...",Q=800,$=16,it=1,ut=2,nt=3,dt=1/0,j=9007199254740991,yt=17976931348623157e292,Rt=NaN,Ft=4294967295,ue=Ft-1,Ce=Ft>>>1,ot=[["ary",N],["bind",v],["bindKey",m],["curry",L],["curryRight",R],["flip",C],["partial",G],["partialRight",U],["rearg",H]],_t="[object Arguments]",Ot="[object Array]",Tt="[object AsyncFunction]",kt="[object Boolean]",de="[object Date]",$t="[object DOMException]",ze="[object Error]",Pe="[object Function]",pe="[object GeneratorFunction]",O="[object Map]",on="[object Number]",ge="[object Null]",ee="[object Object]",Ht="[object Promise]",Fe="[object Proxy]",zt="[object RegExp]",I="[object Set]",S="[object String]",Y="[object Symbol]",ct="[object Undefined]",ht="[object WeakMap]",st="[object WeakSet]",Bt="[object ArrayBuffer]",vt="[object DataView]",Ct="[object Float32Array]",me="[object Float64Array]",mt="[object Int8Array]",Pt="[object Int16Array]",Xt="[object Int32Array]",Kt="[object Uint8Array]",It="[object Uint8ClampedArray]",fe="[object Uint16Array]",ne="[object Uint32Array]",Ie=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,St=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tt=/&(?:amp|lt|gt|quot|#39);/g,lt=/[&<>"']/g,bt=RegExp(tt.source),At=RegExp(lt.source),re=/<%-([\s\S]+?)%>/g,We=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/,ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/[\\^$.*+?()[\]{}|]/g,ba=RegExp(Vr.source),oi=/^\s+/,Gs=/\s/,Ra=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ca=/\{\n\/\* \[wrapped with (.+)\] \*/,kr=/,? & /,La=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Wr=/[()=,{}\[\]\/\s]/,Pa=/\\(\\)?/g,Ia=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Da=/\w*$/,dl=/^[-+]0x[0-9a-f]+$/i,pl=/^0b[01]+$/i,ml=/^\[object .+?Constructor\]$/,_l=/^0o[0-7]+$/i,gl=/^(?:0|[1-9]\d*)$/,A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",Lt=q+pt+Et,Ut="\\u2700-\\u27bf",Jt="a-z\\xdf-\\xf6\\xf8-\\xff",Qt="\\xac\\xb1\\xd7\\xf7",Wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xe="\\u2000-\\u206f",Te=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qe="A-Z\\xc0-\\xd6\\xd8-\\xde",He="\\ufe0e\\ufe0f",Me=Qt+Wt+xe+Te,Vt="['’]",en="["+K+"]",ye="["+Me+"]",mn="["+Lt+"]",wi="\\d+",Sn="["+Ut+"]",Yi="["+Jt+"]",Oe="[^"+K+Me+wi+Ut+Jt+qe+"]",_n="\\ud83c[\\udffb-\\udfff]",Cn="(?:"+mn+"|"+_n+")",ln="[^"+K+"]",cn="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ln="["+qe+"]",ph="\\u200d",mh="(?:"+Yi+"|"+Oe+")",bm="(?:"+Ln+"|"+Oe+")",_h="(?:"+Vt+"(?:d|ll|m|re|s|t|ve))?",gh="(?:"+Vt+"(?:D|LL|M|RE|S|T|VE))?",vh=Cn+"?",xh="["+He+"]?",Rm="(?:"+ph+"(?:"+[ln,cn,mr].join("|")+")"+xh+vh+")*",Cm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mh=xh+vh+Rm,Pm="(?:"+[Sn,cn,mr].join("|")+")"+Mh,Im="(?:"+[ln+mn+"?",mn,cn,mr,en].join("|")+")",Dm=RegExp(Vt,"g"),Um=RegExp(mn,"g"),vl=RegExp(_n+"(?="+_n+")|"+Im+Mh,"g"),Nm=RegExp([Ln+"?"+Yi+"+"+_h+"(?="+[ye,Ln,"$"].join("|")+")",bm+"+"+gh+"(?="+[ye,Ln+mh,"$"].join("|")+")",Ln+"?"+mh+"+"+_h,Ln+"+"+gh,Lm,Cm,wi,Pm].join("|"),"g"),Fm=RegExp("["+ph+K+Lt+He+"]"),Om=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Bm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zm=-1,Ve={};Ve[Ct]=Ve[me]=Ve[mt]=Ve[Pt]=Ve[Xt]=Ve[Kt]=Ve[It]=Ve[fe]=Ve[ne]=!0,Ve[_t]=Ve[Ot]=Ve[Bt]=Ve[kt]=Ve[vt]=Ve[de]=Ve[ze]=Ve[Pe]=Ve[O]=Ve[on]=Ve[ee]=Ve[zt]=Ve[I]=Ve[S]=Ve[ht]=!1;var Ge={};Ge[_t]=Ge[Ot]=Ge[Bt]=Ge[vt]=Ge[kt]=Ge[de]=Ge[Ct]=Ge[me]=Ge[mt]=Ge[Pt]=Ge[Xt]=Ge[O]=Ge[on]=Ge[ee]=Ge[zt]=Ge[I]=Ge[S]=Ge[Y]=Ge[Kt]=Ge[It]=Ge[fe]=Ge[ne]=!0,Ge[ze]=Ge[Pe]=Ge[ht]=!1;var Gm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Hm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},km={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wm=parseFloat,Xm=parseInt,Sh=typeof Yo=="object"&&Yo&&Yo.Object===Object&&Yo,qm=typeof self=="object"&&self&&self.Object===Object&&self,fn=Sh||qm||Function("return this")(),xl=t&&!t.nodeType&&t,_r=xl&&!0&&r&&!r.nodeType&&r,Eh=_r&&_r.exports===xl,Ml=Eh&&Sh.process,Yn=function(){try{var k=_r&&_r.require&&_r.require("util").types;return k||Ml&&Ml.binding&&Ml.binding("util")}catch{}}(),yh=Yn&&Yn.isArrayBuffer,Th=Yn&&Yn.isDate,Ah=Yn&&Yn.isMap,wh=Yn&&Yn.isRegExp,bh=Yn&&Yn.isSet,Rh=Yn&&Yn.isTypedArray;function On(k,et,J){switch(J.length){case 0:return k.call(et);case 1:return k.call(et,J[0]);case 2:return k.call(et,J[0],J[1]);case 3:return k.call(et,J[0],J[1],J[2])}return k.apply(et,J)}function Ym(k,et,J,Dt){for(var ie=-1,be=k==null?0:k.length;++ie<be;){var nn=k[ie];et(Dt,nn,J(nn),k)}return Dt}function Zn(k,et){for(var J=-1,Dt=k==null?0:k.length;++J<Dt&&et(k[J],J,k)!==!1;);return k}function Zm(k,et){for(var J=k==null?0:k.length;J--&&et(k[J],J,k)!==!1;);return k}function Ch(k,et){for(var J=-1,Dt=k==null?0:k.length;++J<Dt;)if(!et(k[J],J,k))return!1;return!0}function Zi(k,et){for(var J=-1,Dt=k==null?0:k.length,ie=0,be=[];++J<Dt;){var nn=k[J];et(nn,J,k)&&(be[ie++]=nn)}return be}function Ua(k,et){var J=k==null?0:k.length;return!!J&&Xr(k,et,0)>-1}function Sl(k,et,J){for(var Dt=-1,ie=k==null?0:k.length;++Dt<ie;)if(J(et,k[Dt]))return!0;return!1}function Xe(k,et){for(var J=-1,Dt=k==null?0:k.length,ie=Array(Dt);++J<Dt;)ie[J]=et(k[J],J,k);return ie}function Ki(k,et){for(var J=-1,Dt=et.length,ie=k.length;++J<Dt;)k[ie+J]=et[J];return k}function El(k,et,J,Dt){var ie=-1,be=k==null?0:k.length;for(Dt&&be&&(J=k[++ie]);++ie<be;)J=et(J,k[ie],ie,k);return J}function Km(k,et,J,Dt){var ie=k==null?0:k.length;for(Dt&&ie&&(J=k[--ie]);ie--;)J=et(J,k[ie],ie,k);return J}function yl(k,et){for(var J=-1,Dt=k==null?0:k.length;++J<Dt;)if(et(k[J],J,k))return!0;return!1}var $m=Tl("length");function Jm(k){return k.split("")}function Qm(k){return k.match(La)||[]}function Lh(k,et,J){var Dt;return J(k,function(ie,be,nn){if(et(ie,be,nn))return Dt=be,!1}),Dt}function Na(k,et,J,Dt){for(var ie=k.length,be=J+(Dt?1:-1);Dt?be--:++be<ie;)if(et(k[be],be,k))return be;return-1}function Xr(k,et,J){return et===et?u_(k,et,J):Na(k,Ph,J)}function jm(k,et,J,Dt){for(var ie=J-1,be=k.length;++ie<be;)if(Dt(k[ie],et))return ie;return-1}function Ph(k){return k!==k}function Ih(k,et){var J=k==null?0:k.length;return J?wl(k,et)/J:Rt}function Tl(k){return function(et){return et==null?e:et[k]}}function Al(k){return function(et){return k==null?e:k[et]}}function Dh(k,et,J,Dt,ie){return ie(k,function(be,nn,Be){J=Dt?(Dt=!1,be):et(J,be,nn,Be)}),J}function t_(k,et){var J=k.length;for(k.sort(et);J--;)k[J]=k[J].value;return k}function wl(k,et){for(var J,Dt=-1,ie=k.length;++Dt<ie;){var be=et(k[Dt]);be!==e&&(J=J===e?be:J+be)}return J}function bl(k,et){for(var J=-1,Dt=Array(k);++J<k;)Dt[J]=et(J);return Dt}function e_(k,et){return Xe(et,function(J){return[J,k[J]]})}function Uh(k){return k&&k.slice(0,Bh(k)+1).replace(oi,"")}function Bn(k){return function(et){return k(et)}}function Rl(k,et){return Xe(et,function(J){return k[J]})}function Hs(k,et){return k.has(et)}function Nh(k,et){for(var J=-1,Dt=k.length;++J<Dt&&Xr(et,k[J],0)>-1;);return J}function Fh(k,et){for(var J=k.length;J--&&Xr(et,k[J],0)>-1;);return J}function n_(k,et){for(var J=k.length,Dt=0;J--;)k[J]===et&&++Dt;return Dt}var i_=Al(Gm),r_=Al(Hm);function s_(k){return"\\"+km[k]}function a_(k,et){return k==null?e:k[et]}function qr(k){return Fm.test(k)}function o_(k){return Om.test(k)}function l_(k){for(var et,J=[];!(et=k.next()).done;)J.push(et.value);return J}function Cl(k){var et=-1,J=Array(k.size);return k.forEach(function(Dt,ie){J[++et]=[ie,Dt]}),J}function Oh(k,et){return function(J){return k(et(J))}}function $i(k,et){for(var J=-1,Dt=k.length,ie=0,be=[];++J<Dt;){var nn=k[J];(nn===et||nn===p)&&(k[J]=p,be[ie++]=J)}return be}function Fa(k){var et=-1,J=Array(k.size);return k.forEach(function(Dt){J[++et]=Dt}),J}function c_(k){var et=-1,J=Array(k.size);return k.forEach(function(Dt){J[++et]=[Dt,Dt]}),J}function u_(k,et,J){for(var Dt=J-1,ie=k.length;++Dt<ie;)if(k[Dt]===et)return Dt;return-1}function h_(k,et,J){for(var Dt=J+1;Dt--;)if(k[Dt]===et)return Dt;return Dt}function Yr(k){return qr(k)?d_(k):$m(k)}function li(k){return qr(k)?p_(k):Jm(k)}function Bh(k){for(var et=k.length;et--&&Gs.test(k.charAt(et)););return et}var f_=Al(Vm);function d_(k){for(var et=vl.lastIndex=0;vl.test(k);)++et;return et}function p_(k){return k.match(vl)||[]}function m_(k){return k.match(Nm)||[]}var __=function k(et){et=et==null?fn:Zr.defaults(fn.Object(),et,Zr.pick(fn,Bm));var J=et.Array,Dt=et.Date,ie=et.Error,be=et.Function,nn=et.Math,Be=et.Object,Ll=et.RegExp,g_=et.String,Kn=et.TypeError,Oa=J.prototype,v_=be.prototype,Kr=Be.prototype,Ba=et["__core-js_shared__"],za=v_.toString,Le=Kr.hasOwnProperty,x_=0,zh=function(){var n=/[^.]+$/.exec(Ba&&Ba.keys&&Ba.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ga=Kr.toString,M_=za.call(Be),S_=fn._,E_=Ll("^"+za.call(Le).replace(Vr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ha=Eh?et.Buffer:e,Ji=et.Symbol,Va=et.Uint8Array,Gh=Ha?Ha.allocUnsafe:e,ka=Oh(Be.getPrototypeOf,Be),Hh=Be.create,Vh=Kr.propertyIsEnumerable,Wa=Oa.splice,kh=Ji?Ji.isConcatSpreadable:e,Vs=Ji?Ji.iterator:e,gr=Ji?Ji.toStringTag:e,Xa=function(){try{var n=Er(Be,"defineProperty");return n({},"",{}),n}catch{}}(),y_=et.clearTimeout!==fn.clearTimeout&&et.clearTimeout,T_=Dt&&Dt.now!==fn.Date.now&&Dt.now,A_=et.setTimeout!==fn.setTimeout&&et.setTimeout,qa=nn.ceil,Ya=nn.floor,Pl=Be.getOwnPropertySymbols,w_=Ha?Ha.isBuffer:e,Wh=et.isFinite,b_=Oa.join,R_=Oh(Be.keys,Be),rn=nn.max,gn=nn.min,C_=Dt.now,L_=et.parseInt,Xh=nn.random,P_=Oa.reverse,Il=Er(et,"DataView"),ks=Er(et,"Map"),Dl=Er(et,"Promise"),$r=Er(et,"Set"),Ws=Er(et,"WeakMap"),Xs=Er(Be,"create"),Za=Ws&&new Ws,Jr={},I_=yr(Il),D_=yr(ks),U_=yr(Dl),N_=yr($r),F_=yr(Ws),Ka=Ji?Ji.prototype:e,qs=Ka?Ka.valueOf:e,qh=Ka?Ka.toString:e;function E(n){if(Ze(n)&&!se(n)&&!(n instanceof ve)){if(n instanceof $n)return n;if(Le.call(n,"__wrapped__"))return Zf(n)}return new $n(n)}var Qr=function(){function n(){}return function(s){if(!Ye(s))return{};if(Hh)return Hh(s);n.prototype=s;var l=new n;return n.prototype=e,l}}();function $a(){}function $n(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}E.templateSettings={escape:re,evaluate:We,interpolate:tn,variable:"",imports:{_:E}},E.prototype=$a.prototype,E.prototype.constructor=E,$n.prototype=Qr($a.prototype),$n.prototype.constructor=$n;function ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ft,this.__views__=[]}function O_(){var n=new ve(this.__wrapped__);return n.__actions__=Pn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Pn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Pn(this.__views__),n}function B_(){if(this.__filtered__){var n=new ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function z_(){var n=this.__wrapped__.value(),s=this.__dir__,l=se(n),d=s<0,M=l?n.length:0,w=Jg(0,M,this.__views__),D=w.start,B=w.end,X=B-D,rt=d?B:D-1,at=this.__iteratees__,ft=at.length,xt=0,Gt=gn(X,this.__takeCount__);if(!l||!d&&M==X&&Gt==X)return gf(n,this.__actions__);var Yt=[];t:for(;X--&&xt<Gt;){rt+=s;for(var le=-1,Zt=n[rt];++le<ft;){var _e=at[le],Se=_e.iteratee,Hn=_e.type,Tn=Se(Zt);if(Hn==ut)Zt=Tn;else if(!Tn){if(Hn==it)continue t;break t}}Yt[xt++]=Zt}return Yt}ve.prototype=Qr($a.prototype),ve.prototype.constructor=ve;function vr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function G_(){this.__data__=Xs?Xs(null):{},this.size=0}function H_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function V_(n){var s=this.__data__;if(Xs){var l=s[n];return l===f?e:l}return Le.call(s,n)?s[n]:e}function k_(n){var s=this.__data__;return Xs?s[n]!==e:Le.call(s,n)}function W_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Xs&&s===e?f:s,this}vr.prototype.clear=G_,vr.prototype.delete=H_,vr.prototype.get=V_,vr.prototype.has=k_,vr.prototype.set=W_;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function X_(){this.__data__=[],this.size=0}function q_(n){var s=this.__data__,l=Ja(s,n);if(l<0)return!1;var d=s.length-1;return l==d?s.pop():Wa.call(s,l,1),--this.size,!0}function Y_(n){var s=this.__data__,l=Ja(s,n);return l<0?e:s[l][1]}function Z_(n){return Ja(this.__data__,n)>-1}function K_(n,s){var l=this.__data__,d=Ja(l,n);return d<0?(++this.size,l.push([n,s])):l[d][1]=s,this}bi.prototype.clear=X_,bi.prototype.delete=q_,bi.prototype.get=Y_,bi.prototype.has=Z_,bi.prototype.set=K_;function Ri(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function $_(){this.size=0,this.__data__={hash:new vr,map:new(ks||bi),string:new vr}}function J_(n){var s=co(this,n).delete(n);return this.size-=s?1:0,s}function Q_(n){return co(this,n).get(n)}function j_(n){return co(this,n).has(n)}function tg(n,s){var l=co(this,n),d=l.size;return l.set(n,s),this.size+=l.size==d?0:1,this}Ri.prototype.clear=$_,Ri.prototype.delete=J_,Ri.prototype.get=Q_,Ri.prototype.has=j_,Ri.prototype.set=tg;function xr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++s<l;)this.add(n[s])}function eg(n){return this.__data__.set(n,f),this}function ng(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=eg,xr.prototype.has=ng;function ci(n){var s=this.__data__=new bi(n);this.size=s.size}function ig(){this.__data__=new bi,this.size=0}function rg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function sg(n){return this.__data__.get(n)}function ag(n){return this.__data__.has(n)}function og(n,s){var l=this.__data__;if(l instanceof bi){var d=l.__data__;if(!ks||d.length<a-1)return d.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ri(d)}return l.set(n,s),this.size=l.size,this}ci.prototype.clear=ig,ci.prototype.delete=rg,ci.prototype.get=sg,ci.prototype.has=ag,ci.prototype.set=og;function Yh(n,s){var l=se(n),d=!l&&Tr(n),M=!l&&!d&&nr(n),w=!l&&!d&&!M&&ns(n),D=l||d||M||w,B=D?bl(n.length,g_):[],X=B.length;for(var rt in n)(s||Le.call(n,rt))&&!(D&&(rt=="length"||M&&(rt=="offset"||rt=="parent")||w&&(rt=="buffer"||rt=="byteLength"||rt=="byteOffset")||Ii(rt,X)))&&B.push(rt);return B}function Zh(n){var s=n.length;return s?n[Wl(0,s-1)]:e}function lg(n,s){return uo(Pn(n),Mr(s,0,n.length))}function cg(n){return uo(Pn(n))}function Ul(n,s,l){(l!==e&&!ui(n[s],l)||l===e&&!(s in n))&&Ci(n,s,l)}function Ys(n,s,l){var d=n[s];(!(Le.call(n,s)&&ui(d,l))||l===e&&!(s in n))&&Ci(n,s,l)}function Ja(n,s){for(var l=n.length;l--;)if(ui(n[l][0],s))return l;return-1}function ug(n,s,l,d){return Qi(n,function(M,w,D){s(d,M,l(M),D)}),d}function Kh(n,s){return n&&xi(s,un(s),n)}function hg(n,s){return n&&xi(s,Dn(s),n)}function Ci(n,s,l){s=="__proto__"&&Xa?Xa(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Nl(n,s){for(var l=-1,d=s.length,M=J(d),w=n==null;++l<d;)M[l]=w?e:mc(n,s[l]);return M}function Mr(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function Jn(n,s,l,d,M,w){var D,B=s&_,X=s&g,rt=s&x;if(l&&(D=M?l(n,d,M,w):l(n)),D!==e)return D;if(!Ye(n))return n;var at=se(n);if(at){if(D=jg(n),!B)return Pn(n,D)}else{var ft=vn(n),xt=ft==Pe||ft==pe;if(nr(n))return Mf(n,B);if(ft==ee||ft==_t||xt&&!M){if(D=X||xt?{}:zf(n),!B)return X?Vg(n,hg(D,n)):Hg(n,Kh(D,n))}else{if(!Ge[ft])return M?n:{};D=t0(n,ft,B)}}w||(w=new ci);var Gt=w.get(n);if(Gt)return Gt;w.set(n,D),pd(n)?n.forEach(function(Zt){D.add(Jn(Zt,s,l,Zt,n,w))}):fd(n)&&n.forEach(function(Zt,_e){D.set(_e,Jn(Zt,s,l,_e,n,w))});var Yt=rt?X?ec:tc:X?Dn:un,le=at?e:Yt(n);return Zn(le||n,function(Zt,_e){le&&(_e=Zt,Zt=n[_e]),Ys(D,_e,Jn(Zt,s,l,_e,n,w))}),D}function fg(n){var s=un(n);return function(l){return $h(l,n,s)}}function $h(n,s,l){var d=l.length;if(n==null)return!d;for(n=Be(n);d--;){var M=l[d],w=s[M],D=n[M];if(D===e&&!(M in n)||!w(D))return!1}return!0}function Jh(n,s,l){if(typeof n!="function")throw new Kn(c);return ta(function(){n.apply(e,l)},s)}function Zs(n,s,l,d){var M=-1,w=Ua,D=!0,B=n.length,X=[],rt=s.length;if(!B)return X;l&&(s=Xe(s,Bn(l))),d?(w=Sl,D=!1):s.length>=a&&(w=Hs,D=!1,s=new xr(s));t:for(;++M<B;){var at=n[M],ft=l==null?at:l(at);if(at=d||at!==0?at:0,D&&ft===ft){for(var xt=rt;xt--;)if(s[xt]===ft)continue t;X.push(at)}else w(s,ft,d)||X.push(at)}return X}var Qi=Af(vi),Qh=Af(Ol,!0);function dg(n,s){var l=!0;return Qi(n,function(d,M,w){return l=!!s(d,M,w),l}),l}function Qa(n,s,l){for(var d=-1,M=n.length;++d<M;){var w=n[d],D=s(w);if(D!=null&&(B===e?D===D&&!Gn(D):l(D,B)))var B=D,X=w}return X}function pg(n,s,l,d){var M=n.length;for(l=ae(l),l<0&&(l=-l>M?0:M+l),d=d===e||d>M?M:ae(d),d<0&&(d+=M),d=l>d?0:_d(d);l<d;)n[l++]=s;return n}function jh(n,s){var l=[];return Qi(n,function(d,M,w){s(d,M,w)&&l.push(d)}),l}function dn(n,s,l,d,M){var w=-1,D=n.length;for(l||(l=n0),M||(M=[]);++w<D;){var B=n[w];s>0&&l(B)?s>1?dn(B,s-1,l,d,M):Ki(M,B):d||(M[M.length]=B)}return M}var Fl=wf(),tf=wf(!0);function vi(n,s){return n&&Fl(n,s,un)}function Ol(n,s){return n&&tf(n,s,un)}function ja(n,s){return Zi(s,function(l){return Di(n[l])})}function Sr(n,s){s=tr(s,n);for(var l=0,d=s.length;n!=null&&l<d;)n=n[Mi(s[l++])];return l&&l==d?n:e}function ef(n,s,l){var d=s(n);return se(n)?d:Ki(d,l(n))}function En(n){return n==null?n===e?ct:ge:gr&&gr in Be(n)?$g(n):c0(n)}function Bl(n,s){return n>s}function mg(n,s){return n!=null&&Le.call(n,s)}function _g(n,s){return n!=null&&s in Be(n)}function gg(n,s,l){return n>=gn(s,l)&&n<rn(s,l)}function zl(n,s,l){for(var d=l?Sl:Ua,M=n[0].length,w=n.length,D=w,B=J(w),X=1/0,rt=[];D--;){var at=n[D];D&&s&&(at=Xe(at,Bn(s))),X=gn(at.length,X),B[D]=!l&&(s||M>=120&&at.length>=120)?new xr(D&&at):e}at=n[0];var ft=-1,xt=B[0];t:for(;++ft<M&&rt.length<X;){var Gt=at[ft],Yt=s?s(Gt):Gt;if(Gt=l||Gt!==0?Gt:0,!(xt?Hs(xt,Yt):d(rt,Yt,l))){for(D=w;--D;){var le=B[D];if(!(le?Hs(le,Yt):d(n[D],Yt,l)))continue t}xt&&xt.push(Yt),rt.push(Gt)}}return rt}function vg(n,s,l,d){return vi(n,function(M,w,D){s(d,l(M),w,D)}),d}function Ks(n,s,l){s=tr(s,n),n=kf(n,s);var d=n==null?n:n[Mi(jn(s))];return d==null?e:On(d,n,l)}function nf(n){return Ze(n)&&En(n)==_t}function xg(n){return Ze(n)&&En(n)==Bt}function Mg(n){return Ze(n)&&En(n)==de}function $s(n,s,l,d,M){return n===s?!0:n==null||s==null||!Ze(n)&&!Ze(s)?n!==n&&s!==s:Sg(n,s,l,d,$s,M)}function Sg(n,s,l,d,M,w){var D=se(n),B=se(s),X=D?Ot:vn(n),rt=B?Ot:vn(s);X=X==_t?ee:X,rt=rt==_t?ee:rt;var at=X==ee,ft=rt==ee,xt=X==rt;if(xt&&nr(n)){if(!nr(s))return!1;D=!0,at=!1}if(xt&&!at)return w||(w=new ci),D||ns(n)?Ff(n,s,l,d,M,w):Zg(n,s,X,l,d,M,w);if(!(l&y)){var Gt=at&&Le.call(n,"__wrapped__"),Yt=ft&&Le.call(s,"__wrapped__");if(Gt||Yt){var le=Gt?n.value():n,Zt=Yt?s.value():s;return w||(w=new ci),M(le,Zt,l,d,w)}}return xt?(w||(w=new ci),Kg(n,s,l,d,M,w)):!1}function Eg(n){return Ze(n)&&vn(n)==O}function Gl(n,s,l,d){var M=l.length,w=M,D=!d;if(n==null)return!w;for(n=Be(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<w;){B=l[M];var X=B[0],rt=n[X],at=B[1];if(D&&B[2]){if(rt===e&&!(X in n))return!1}else{var ft=new ci;if(d)var xt=d(rt,at,X,n,s,ft);if(!(xt===e?$s(at,rt,y|b,d,ft):xt))return!1}}return!0}function rf(n){if(!Ye(n)||r0(n))return!1;var s=Di(n)?E_:ml;return s.test(yr(n))}function yg(n){return Ze(n)&&En(n)==zt}function Tg(n){return Ze(n)&&vn(n)==I}function Ag(n){return Ze(n)&&go(n.length)&&!!Ve[En(n)]}function sf(n){return typeof n=="function"?n:n==null?Un:typeof n=="object"?se(n)?lf(n[0],n[1]):of(n):bd(n)}function Hl(n){if(!js(n))return R_(n);var s=[];for(var l in Be(n))Le.call(n,l)&&l!="constructor"&&s.push(l);return s}function wg(n){if(!Ye(n))return l0(n);var s=js(n),l=[];for(var d in n)d=="constructor"&&(s||!Le.call(n,d))||l.push(d);return l}function Vl(n,s){return n<s}function af(n,s){var l=-1,d=In(n)?J(n.length):[];return Qi(n,function(M,w,D){d[++l]=s(M,w,D)}),d}function of(n){var s=ic(n);return s.length==1&&s[0][2]?Hf(s[0][0],s[0][1]):function(l){return l===n||Gl(l,n,s)}}function lf(n,s){return sc(n)&&Gf(s)?Hf(Mi(n),s):function(l){var d=mc(l,n);return d===e&&d===s?_c(l,n):$s(s,d,y|b)}}function to(n,s,l,d,M){n!==s&&Fl(s,function(w,D){if(M||(M=new ci),Ye(w))bg(n,s,D,l,to,d,M);else{var B=d?d(oc(n,D),w,D+"",n,s,M):e;B===e&&(B=w),Ul(n,D,B)}},Dn)}function bg(n,s,l,d,M,w,D){var B=oc(n,l),X=oc(s,l),rt=D.get(X);if(rt){Ul(n,l,rt);return}var at=w?w(B,X,l+"",n,s,D):e,ft=at===e;if(ft){var xt=se(X),Gt=!xt&&nr(X),Yt=!xt&&!Gt&&ns(X);at=X,xt||Gt||Yt?se(B)?at=B:Ke(B)?at=Pn(B):Gt?(ft=!1,at=Mf(X,!0)):Yt?(ft=!1,at=Sf(X,!0)):at=[]:ea(X)||Tr(X)?(at=B,Tr(B)?at=gd(B):(!Ye(B)||Di(B))&&(at=zf(X))):ft=!1}ft&&(D.set(X,at),M(at,X,d,w,D),D.delete(X)),Ul(n,l,at)}function cf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Ii(s,l)?n[s]:e}function uf(n,s,l){s.length?s=Xe(s,function(w){return se(w)?function(D){return Sr(D,w.length===1?w[0]:w)}:w}):s=[Un];var d=-1;s=Xe(s,Bn(qt()));var M=af(n,function(w,D,B){var X=Xe(s,function(rt){return rt(w)});return{criteria:X,index:++d,value:w}});return t_(M,function(w,D){return Gg(w,D,l)})}function Rg(n,s){return hf(n,s,function(l,d){return _c(n,d)})}function hf(n,s,l){for(var d=-1,M=s.length,w={};++d<M;){var D=s[d],B=Sr(n,D);l(B,D)&&Js(w,tr(D,n),B)}return w}function Cg(n){return function(s){return Sr(s,n)}}function kl(n,s,l,d){var M=d?jm:Xr,w=-1,D=s.length,B=n;for(n===s&&(s=Pn(s)),l&&(B=Xe(n,Bn(l)));++w<D;)for(var X=0,rt=s[w],at=l?l(rt):rt;(X=M(B,at,X,d))>-1;)B!==n&&Wa.call(B,X,1),Wa.call(n,X,1);return n}function ff(n,s){for(var l=n?s.length:0,d=l-1;l--;){var M=s[l];if(l==d||M!==w){var w=M;Ii(M)?Wa.call(n,M,1):Yl(n,M)}}return n}function Wl(n,s){return n+Ya(Xh()*(s-n+1))}function Lg(n,s,l,d){for(var M=-1,w=rn(qa((s-n)/(l||1)),0),D=J(w);w--;)D[d?w:++M]=n,n+=l;return D}function Xl(n,s){var l="";if(!n||s<1||s>j)return l;do s%2&&(l+=n),s=Ya(s/2),s&&(n+=n);while(s);return l}function he(n,s){return lc(Vf(n,s,Un),n+"")}function Pg(n){return Zh(is(n))}function Ig(n,s){var l=is(n);return uo(l,Mr(s,0,l.length))}function Js(n,s,l,d){if(!Ye(n))return n;s=tr(s,n);for(var M=-1,w=s.length,D=w-1,B=n;B!=null&&++M<w;){var X=Mi(s[M]),rt=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=D){var at=B[X];rt=d?d(at,X,B):e,rt===e&&(rt=Ye(at)?at:Ii(s[M+1])?[]:{})}Ys(B,X,rt),B=B[X]}return n}var df=Za?function(n,s){return Za.set(n,s),n}:Un,Dg=Xa?function(n,s){return Xa(n,"toString",{configurable:!0,enumerable:!1,value:vc(s),writable:!0})}:Un;function Ug(n){return uo(is(n))}function Qn(n,s,l){var d=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var w=J(M);++d<M;)w[d]=n[d+s];return w}function Ng(n,s){var l;return Qi(n,function(d,M,w){return l=s(d,M,w),!l}),!!l}function eo(n,s,l){var d=0,M=n==null?d:n.length;if(typeof s=="number"&&s===s&&M<=Ce){for(;d<M;){var w=d+M>>>1,D=n[w];D!==null&&!Gn(D)&&(l?D<=s:D<s)?d=w+1:M=w}return M}return ql(n,s,Un,l)}function ql(n,s,l,d){var M=0,w=n==null?0:n.length;if(w===0)return 0;s=l(s);for(var D=s!==s,B=s===null,X=Gn(s),rt=s===e;M<w;){var at=Ya((M+w)/2),ft=l(n[at]),xt=ft!==e,Gt=ft===null,Yt=ft===ft,le=Gn(ft);if(D)var Zt=d||Yt;else rt?Zt=Yt&&(d||xt):B?Zt=Yt&&xt&&(d||!Gt):X?Zt=Yt&&xt&&!Gt&&(d||!le):Gt||le?Zt=!1:Zt=d?ft<=s:ft<s;Zt?M=at+1:w=at}return gn(w,ue)}function pf(n,s){for(var l=-1,d=n.length,M=0,w=[];++l<d;){var D=n[l],B=s?s(D):D;if(!l||!ui(B,X)){var X=B;w[M++]=D===0?0:D}}return w}function mf(n){return typeof n=="number"?n:Gn(n)?Rt:+n}function zn(n){if(typeof n=="string")return n;if(se(n))return Xe(n,zn)+"";if(Gn(n))return qh?qh.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function ji(n,s,l){var d=-1,M=Ua,w=n.length,D=!0,B=[],X=B;if(l)D=!1,M=Sl;else if(w>=a){var rt=s?null:qg(n);if(rt)return Fa(rt);D=!1,M=Hs,X=new xr}else X=s?[]:B;t:for(;++d<w;){var at=n[d],ft=s?s(at):at;if(at=l||at!==0?at:0,D&&ft===ft){for(var xt=X.length;xt--;)if(X[xt]===ft)continue t;s&&X.push(ft),B.push(at)}else M(X,ft,l)||(X!==B&&X.push(ft),B.push(at))}return B}function Yl(n,s){return s=tr(s,n),n=kf(n,s),n==null||delete n[Mi(jn(s))]}function _f(n,s,l,d){return Js(n,s,l(Sr(n,s)),d)}function no(n,s,l,d){for(var M=n.length,w=d?M:-1;(d?w--:++w<M)&&s(n[w],w,n););return l?Qn(n,d?0:w,d?w+1:M):Qn(n,d?w+1:0,d?M:w)}function gf(n,s){var l=n;return l instanceof ve&&(l=l.value()),El(s,function(d,M){return M.func.apply(M.thisArg,Ki([d],M.args))},l)}function Zl(n,s,l){var d=n.length;if(d<2)return d?ji(n[0]):[];for(var M=-1,w=J(d);++M<d;)for(var D=n[M],B=-1;++B<d;)B!=M&&(w[M]=Zs(w[M]||D,n[B],s,l));return ji(dn(w,1),s,l)}function vf(n,s,l){for(var d=-1,M=n.length,w=s.length,D={};++d<M;){var B=d<w?s[d]:e;l(D,n[d],B)}return D}function Kl(n){return Ke(n)?n:[]}function $l(n){return typeof n=="function"?n:Un}function tr(n,s){return se(n)?n:sc(n,s)?[n]:Yf(Re(n))}var Fg=he;function er(n,s,l){var d=n.length;return l=l===e?d:l,!s&&l>=d?n:Qn(n,s,l)}var xf=y_||function(n){return fn.clearTimeout(n)};function Mf(n,s){if(s)return n.slice();var l=n.length,d=Gh?Gh(l):new n.constructor(l);return n.copy(d),d}function Jl(n){var s=new n.constructor(n.byteLength);return new Va(s).set(new Va(n)),s}function Og(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Bg(n){var s=new n.constructor(n.source,Da.exec(n));return s.lastIndex=n.lastIndex,s}function zg(n){return qs?Be(qs.call(n)):{}}function Sf(n,s){var l=s?Jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Ef(n,s){if(n!==s){var l=n!==e,d=n===null,M=n===n,w=Gn(n),D=s!==e,B=s===null,X=s===s,rt=Gn(s);if(!B&&!rt&&!w&&n>s||w&&D&&X&&!B&&!rt||d&&D&&X||!l&&X||!M)return 1;if(!d&&!w&&!rt&&n<s||rt&&l&&M&&!d&&!w||B&&l&&M||!D&&M||!X)return-1}return 0}function Gg(n,s,l){for(var d=-1,M=n.criteria,w=s.criteria,D=M.length,B=l.length;++d<D;){var X=Ef(M[d],w[d]);if(X){if(d>=B)return X;var rt=l[d];return X*(rt=="desc"?-1:1)}}return n.index-s.index}function yf(n,s,l,d){for(var M=-1,w=n.length,D=l.length,B=-1,X=s.length,rt=rn(w-D,0),at=J(X+rt),ft=!d;++B<X;)at[B]=s[B];for(;++M<D;)(ft||M<w)&&(at[l[M]]=n[M]);for(;rt--;)at[B++]=n[M++];return at}function Tf(n,s,l,d){for(var M=-1,w=n.length,D=-1,B=l.length,X=-1,rt=s.length,at=rn(w-B,0),ft=J(at+rt),xt=!d;++M<at;)ft[M]=n[M];for(var Gt=M;++X<rt;)ft[Gt+X]=s[X];for(;++D<B;)(xt||M<w)&&(ft[Gt+l[D]]=n[M++]);return ft}function Pn(n,s){var l=-1,d=n.length;for(s||(s=J(d));++l<d;)s[l]=n[l];return s}function xi(n,s,l,d){var M=!l;l||(l={});for(var w=-1,D=s.length;++w<D;){var B=s[w],X=d?d(l[B],n[B],B,l,n):e;X===e&&(X=n[B]),M?Ci(l,B,X):Ys(l,B,X)}return l}function Hg(n,s){return xi(n,rc(n),s)}function Vg(n,s){return xi(n,Of(n),s)}function io(n,s){return function(l,d){var M=se(l)?Ym:ug,w=s?s():{};return M(l,n,qt(d,2),w)}}function jr(n){return he(function(s,l){var d=-1,M=l.length,w=M>1?l[M-1]:e,D=M>2?l[2]:e;for(w=n.length>3&&typeof w=="function"?(M--,w):e,D&&yn(l[0],l[1],D)&&(w=M<3?e:w,M=1),s=Be(s);++d<M;){var B=l[d];B&&n(s,B,d,w)}return s})}function Af(n,s){return function(l,d){if(l==null)return l;if(!In(l))return n(l,d);for(var M=l.length,w=s?M:-1,D=Be(l);(s?w--:++w<M)&&d(D[w],w,D)!==!1;);return l}}function wf(n){return function(s,l,d){for(var M=-1,w=Be(s),D=d(s),B=D.length;B--;){var X=D[n?B:++M];if(l(w[X],X,w)===!1)break}return s}}function kg(n,s,l){var d=s&v,M=Qs(n);function w(){var D=this&&this!==fn&&this instanceof w?M:n;return D.apply(d?l:this,arguments)}return w}function bf(n){return function(s){s=Re(s);var l=qr(s)?li(s):e,d=l?l[0]:s.charAt(0),M=l?er(l,1).join(""):s.slice(1);return d[n]()+M}}function ts(n){return function(s){return El(Ad(Td(s).replace(Dm,"")),n,"")}}function Qs(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Qr(n.prototype),d=n.apply(l,s);return Ye(d)?d:l}}function Wg(n,s,l){var d=Qs(n);function M(){for(var w=arguments.length,D=J(w),B=w,X=es(M);B--;)D[B]=arguments[B];var rt=w<3&&D[0]!==X&&D[w-1]!==X?[]:$i(D,X);if(w-=rt.length,w<l)return If(n,s,ro,M.placeholder,e,D,rt,e,e,l-w);var at=this&&this!==fn&&this instanceof M?d:n;return On(at,this,D)}return M}function Rf(n){return function(s,l,d){var M=Be(s);if(!In(s)){var w=qt(l,3);s=un(s),l=function(B){return w(M[B],B,M)}}var D=n(s,l,d);return D>-1?M[w?s[D]:D]:e}}function Cf(n){return Pi(function(s){var l=s.length,d=l,M=$n.prototype.thru;for(n&&s.reverse();d--;){var w=s[d];if(typeof w!="function")throw new Kn(c);if(M&&!D&&lo(w)=="wrapper")var D=new $n([],!0)}for(d=D?d:l;++d<l;){w=s[d];var B=lo(w),X=B=="wrapper"?nc(w):e;X&&ac(X[0])&&X[1]==(N|L|G|H)&&!X[4].length&&X[9]==1?D=D[lo(X[0])].apply(D,X[3]):D=w.length==1&&ac(w)?D[B]():D.thru(w)}return function(){var rt=arguments,at=rt[0];if(D&&rt.length==1&&se(at))return D.plant(at).value();for(var ft=0,xt=l?s[ft].apply(this,rt):at;++ft<l;)xt=s[ft].call(this,xt);return xt}})}function ro(n,s,l,d,M,w,D,B,X,rt){var at=s&N,ft=s&v,xt=s&m,Gt=s&(L|R),Yt=s&C,le=xt?e:Qs(n);function Zt(){for(var _e=arguments.length,Se=J(_e),Hn=_e;Hn--;)Se[Hn]=arguments[Hn];if(Gt)var Tn=es(Zt),Vn=n_(Se,Tn);if(d&&(Se=yf(Se,d,M,Gt)),w&&(Se=Tf(Se,w,D,Gt)),_e-=Vn,Gt&&_e<rt){var $e=$i(Se,Tn);return If(n,s,ro,Zt.placeholder,l,Se,$e,B,X,rt-_e)}var hi=ft?l:this,Ni=xt?hi[n]:n;return _e=Se.length,B?Se=u0(Se,B):Yt&&_e>1&&Se.reverse(),at&&X<_e&&(Se.length=X),this&&this!==fn&&this instanceof Zt&&(Ni=le||Qs(Ni)),Ni.apply(hi,Se)}return Zt}function Lf(n,s){return function(l,d){return vg(l,n,s(d),{})}}function so(n,s){return function(l,d){var M;if(l===e&&d===e)return s;if(l!==e&&(M=l),d!==e){if(M===e)return d;typeof l=="string"||typeof d=="string"?(l=zn(l),d=zn(d)):(l=mf(l),d=mf(d)),M=n(l,d)}return M}}function Ql(n){return Pi(function(s){return s=Xe(s,Bn(qt())),he(function(l){var d=this;return n(s,function(M){return On(M,d,l)})})})}function ao(n,s){s=s===e?" ":zn(s);var l=s.length;if(l<2)return l?Xl(s,n):s;var d=Xl(s,qa(n/Yr(s)));return qr(s)?er(li(d),0,n).join(""):d.slice(0,n)}function Xg(n,s,l,d){var M=s&v,w=Qs(n);function D(){for(var B=-1,X=arguments.length,rt=-1,at=d.length,ft=J(at+X),xt=this&&this!==fn&&this instanceof D?w:n;++rt<at;)ft[rt]=d[rt];for(;X--;)ft[rt++]=arguments[++B];return On(xt,M?l:this,ft)}return D}function Pf(n){return function(s,l,d){return d&&typeof d!="number"&&yn(s,l,d)&&(l=d=e),s=Ui(s),l===e?(l=s,s=0):l=Ui(l),d=d===e?s<l?1:-1:Ui(d),Lg(s,l,d,n)}}function oo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ti(s),l=ti(l)),n(s,l)}}function If(n,s,l,d,M,w,D,B,X,rt){var at=s&L,ft=at?D:e,xt=at?e:D,Gt=at?w:e,Yt=at?e:w;s|=at?G:U,s&=~(at?U:G),s&P||(s&=-4);var le=[n,s,M,Gt,ft,Yt,xt,B,X,rt],Zt=l.apply(e,le);return ac(n)&&Wf(Zt,le),Zt.placeholder=d,Xf(Zt,n,s)}function jl(n){var s=nn[n];return function(l,d){if(l=ti(l),d=d==null?0:gn(ae(d),292),d&&Wh(l)){var M=(Re(l)+"e").split("e"),w=s(M[0]+"e"+(+M[1]+d));return M=(Re(w)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return s(l)}}var qg=$r&&1/Fa(new $r([,-0]))[1]==dt?function(n){return new $r(n)}:Sc;function Df(n){return function(s){var l=vn(s);return l==O?Cl(s):l==I?c_(s):e_(s,n(s))}}function Li(n,s,l,d,M,w,D,B){var X=s&m;if(!X&&typeof n!="function")throw new Kn(c);var rt=d?d.length:0;if(rt||(s&=-97,d=M=e),D=D===e?D:rn(ae(D),0),B=B===e?B:ae(B),rt-=M?M.length:0,s&U){var at=d,ft=M;d=M=e}var xt=X?e:nc(n),Gt=[n,s,l,d,M,at,ft,w,D,B];if(xt&&o0(Gt,xt),n=Gt[0],s=Gt[1],l=Gt[2],d=Gt[3],M=Gt[4],B=Gt[9]=Gt[9]===e?X?0:n.length:rn(Gt[9]-rt,0),!B&&s&(L|R)&&(s&=-25),!s||s==v)var Yt=kg(n,s,l);else s==L||s==R?Yt=Wg(n,s,B):(s==G||s==(v|G))&&!M.length?Yt=Xg(n,s,l,d):Yt=ro.apply(e,Gt);var le=xt?df:Wf;return Xf(le(Yt,Gt),n,s)}function Uf(n,s,l,d){return n===e||ui(n,Kr[l])&&!Le.call(d,l)?s:n}function Nf(n,s,l,d,M,w){return Ye(n)&&Ye(s)&&(w.set(s,n),to(n,s,e,Nf,w),w.delete(s)),n}function Yg(n){return ea(n)?e:n}function Ff(n,s,l,d,M,w){var D=l&y,B=n.length,X=s.length;if(B!=X&&!(D&&X>B))return!1;var rt=w.get(n),at=w.get(s);if(rt&&at)return rt==s&&at==n;var ft=-1,xt=!0,Gt=l&b?new xr:e;for(w.set(n,s),w.set(s,n);++ft<B;){var Yt=n[ft],le=s[ft];if(d)var Zt=D?d(le,Yt,ft,s,n,w):d(Yt,le,ft,n,s,w);if(Zt!==e){if(Zt)continue;xt=!1;break}if(Gt){if(!yl(s,function(_e,Se){if(!Hs(Gt,Se)&&(Yt===_e||M(Yt,_e,l,d,w)))return Gt.push(Se)})){xt=!1;break}}else if(!(Yt===le||M(Yt,le,l,d,w))){xt=!1;break}}return w.delete(n),w.delete(s),xt}function Zg(n,s,l,d,M,w,D){switch(l){case vt:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Bt:return!(n.byteLength!=s.byteLength||!w(new Va(n),new Va(s)));case kt:case de:case on:return ui(+n,+s);case ze:return n.name==s.name&&n.message==s.message;case zt:case S:return n==s+"";case O:var B=Cl;case I:var X=d&y;if(B||(B=Fa),n.size!=s.size&&!X)return!1;var rt=D.get(n);if(rt)return rt==s;d|=b,D.set(n,s);var at=Ff(B(n),B(s),d,M,w,D);return D.delete(n),at;case Y:if(qs)return qs.call(n)==qs.call(s)}return!1}function Kg(n,s,l,d,M,w){var D=l&y,B=tc(n),X=B.length,rt=tc(s),at=rt.length;if(X!=at&&!D)return!1;for(var ft=X;ft--;){var xt=B[ft];if(!(D?xt in s:Le.call(s,xt)))return!1}var Gt=w.get(n),Yt=w.get(s);if(Gt&&Yt)return Gt==s&&Yt==n;var le=!0;w.set(n,s),w.set(s,n);for(var Zt=D;++ft<X;){xt=B[ft];var _e=n[xt],Se=s[xt];if(d)var Hn=D?d(Se,_e,xt,s,n,w):d(_e,Se,xt,n,s,w);if(!(Hn===e?_e===Se||M(_e,Se,l,d,w):Hn)){le=!1;break}Zt||(Zt=xt=="constructor")}if(le&&!Zt){var Tn=n.constructor,Vn=s.constructor;Tn!=Vn&&"constructor"in n&&"constructor"in s&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Vn=="function"&&Vn instanceof Vn)&&(le=!1)}return w.delete(n),w.delete(s),le}function Pi(n){return lc(Vf(n,e,Jf),n+"")}function tc(n){return ef(n,un,rc)}function ec(n){return ef(n,Dn,Of)}var nc=Za?function(n){return Za.get(n)}:Sc;function lo(n){for(var s=n.name+"",l=Jr[s],d=Le.call(Jr,s)?l.length:0;d--;){var M=l[d],w=M.func;if(w==null||w==n)return M.name}return s}function es(n){var s=Le.call(E,"placeholder")?E:n;return s.placeholder}function qt(){var n=E.iteratee||xc;return n=n===xc?sf:n,arguments.length?n(arguments[0],arguments[1]):n}function co(n,s){var l=n.__data__;return i0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function ic(n){for(var s=un(n),l=s.length;l--;){var d=s[l],M=n[d];s[l]=[d,M,Gf(M)]}return s}function Er(n,s){var l=a_(n,s);return rf(l)?l:e}function $g(n){var s=Le.call(n,gr),l=n[gr];try{n[gr]=e;var d=!0}catch{}var M=Ga.call(n);return d&&(s?n[gr]=l:delete n[gr]),M}var rc=Pl?function(n){return n==null?[]:(n=Be(n),Zi(Pl(n),function(s){return Vh.call(n,s)}))}:Ec,Of=Pl?function(n){for(var s=[];n;)Ki(s,rc(n)),n=ka(n);return s}:Ec,vn=En;(Il&&vn(new Il(new ArrayBuffer(1)))!=vt||ks&&vn(new ks)!=O||Dl&&vn(Dl.resolve())!=Ht||$r&&vn(new $r)!=I||Ws&&vn(new Ws)!=ht)&&(vn=function(n){var s=En(n),l=s==ee?n.constructor:e,d=l?yr(l):"";if(d)switch(d){case I_:return vt;case D_:return O;case U_:return Ht;case N_:return I;case F_:return ht}return s});function Jg(n,s,l){for(var d=-1,M=l.length;++d<M;){var w=l[d],D=w.size;switch(w.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=gn(s,n+D);break;case"takeRight":n=rn(n,s-D);break}}return{start:n,end:s}}function Qg(n){var s=n.match(Ca);return s?s[1].split(kr):[]}function Bf(n,s,l){s=tr(s,n);for(var d=-1,M=s.length,w=!1;++d<M;){var D=Mi(s[d]);if(!(w=n!=null&&l(n,D)))break;n=n[D]}return w||++d!=M?w:(M=n==null?0:n.length,!!M&&go(M)&&Ii(D,M)&&(se(n)||Tr(n)))}function jg(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Le.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function zf(n){return typeof n.constructor=="function"&&!js(n)?Qr(ka(n)):{}}function t0(n,s,l){var d=n.constructor;switch(s){case Bt:return Jl(n);case kt:case de:return new d(+n);case vt:return Og(n,l);case Ct:case me:case mt:case Pt:case Xt:case Kt:case It:case fe:case ne:return Sf(n,l);case O:return new d;case on:case S:return new d(n);case zt:return Bg(n);case I:return new d;case Y:return zg(n)}}function e0(n,s){var l=s.length;if(!l)return n;var d=l-1;return s[d]=(l>1?"& ":"")+s[d],s=s.join(l>2?", ":" "),n.replace(Ra,`{
/* [wrapped with `+s+`] */
`)}function n0(n){return se(n)||Tr(n)||!!(kh&&n&&n[kh])}function Ii(n,s){var l=typeof n;return s=s??j,!!s&&(l=="number"||l!="symbol"&&gl.test(n))&&n>-1&&n%1==0&&n<s}function yn(n,s,l){if(!Ye(l))return!1;var d=typeof s;return(d=="number"?In(l)&&Ii(s,l.length):d=="string"&&s in l)?ui(l[s],n):!1}function sc(n,s){if(se(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Gn(n)?!0:Fn.test(n)||!we.test(n)||s!=null&&n in Be(s)}function i0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function ac(n){var s=lo(n),l=E[s];if(typeof l!="function"||!(s in ve.prototype))return!1;if(n===l)return!0;var d=nc(l);return!!d&&n===d[0]}function r0(n){return!!zh&&zh in n}var s0=Ba?Di:yc;function js(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Kr;return n===l}function Gf(n){return n===n&&!Ye(n)}function Hf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in Be(l))}}function a0(n){var s=mo(n,function(d){return l.size===h&&l.clear(),d}),l=s.cache;return s}function o0(n,s){var l=n[1],d=s[1],M=l|d,w=M<(v|m|N),D=d==N&&l==L||d==N&&l==H&&n[7].length<=s[8]||d==(N|H)&&s[7].length<=s[8]&&l==L;if(!(w||D))return n;d&v&&(n[2]=s[2],M|=l&v?0:P);var B=s[3];if(B){var X=n[3];n[3]=X?yf(X,B,s[4]):B,n[4]=X?$i(n[3],p):s[4]}return B=s[5],B&&(X=n[5],n[5]=X?Tf(X,B,s[6]):B,n[6]=X?$i(n[5],p):s[6]),B=s[7],B&&(n[7]=B),d&N&&(n[8]=n[8]==null?s[8]:gn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function l0(n){var s=[];if(n!=null)for(var l in Be(n))s.push(l);return s}function c0(n){return Ga.call(n)}function Vf(n,s,l){return s=rn(s===e?n.length-1:s,0),function(){for(var d=arguments,M=-1,w=rn(d.length-s,0),D=J(w);++M<w;)D[M]=d[s+M];M=-1;for(var B=J(s+1);++M<s;)B[M]=d[M];return B[s]=l(D),On(n,this,B)}}function kf(n,s){return s.length<2?n:Sr(n,Qn(s,0,-1))}function u0(n,s){for(var l=n.length,d=gn(s.length,l),M=Pn(n);d--;){var w=s[d];n[d]=Ii(w,l)?M[w]:e}return n}function oc(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Wf=qf(df),ta=A_||function(n,s){return fn.setTimeout(n,s)},lc=qf(Dg);function Xf(n,s,l){var d=s+"";return lc(n,e0(d,h0(Qg(d),l)))}function qf(n){var s=0,l=0;return function(){var d=C_(),M=$-(d-l);if(l=d,M>0){if(++s>=Q)return arguments[0]}else s=0;return n.apply(e,arguments)}}function uo(n,s){var l=-1,d=n.length,M=d-1;for(s=s===e?d:s;++l<s;){var w=Wl(l,M),D=n[w];n[w]=n[l],n[l]=D}return n.length=s,n}var Yf=a0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(ai,function(l,d,M,w){s.push(M?w.replace(Pa,"$1"):d||l)}),s});function Mi(n){if(typeof n=="string"||Gn(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function yr(n){if(n!=null){try{return za.call(n)}catch{}try{return n+""}catch{}}return""}function h0(n,s){return Zn(ot,function(l){var d="_."+l[0];s&l[1]&&!Ua(n,d)&&n.push(d)}),n.sort()}function Zf(n){if(n instanceof ve)return n.clone();var s=new $n(n.__wrapped__,n.__chain__);return s.__actions__=Pn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function f0(n,s,l){(l?yn(n,s,l):s===e)?s=1:s=rn(ae(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var M=0,w=0,D=J(qa(d/s));M<d;)D[w++]=Qn(n,M,M+=s);return D}function d0(n){for(var s=-1,l=n==null?0:n.length,d=0,M=[];++s<l;){var w=n[s];w&&(M[d++]=w)}return M}function p0(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),l=arguments[0],d=n;d--;)s[d-1]=arguments[d];return Ki(se(l)?Pn(l):[l],dn(s,1))}var m0=he(function(n,s){return Ke(n)?Zs(n,dn(s,1,Ke,!0)):[]}),_0=he(function(n,s){var l=jn(s);return Ke(l)&&(l=e),Ke(n)?Zs(n,dn(s,1,Ke,!0),qt(l,2)):[]}),g0=he(function(n,s){var l=jn(s);return Ke(l)&&(l=e),Ke(n)?Zs(n,dn(s,1,Ke,!0),e,l):[]});function v0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),Qn(n,s<0?0:s,d)):[]}function x0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),s=d-s,Qn(n,0,s<0?0:s)):[]}function M0(n,s){return n&&n.length?no(n,qt(s,3),!0,!0):[]}function S0(n,s){return n&&n.length?no(n,qt(s,3),!0):[]}function E0(n,s,l,d){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&yn(n,s,l)&&(l=0,d=M),pg(n,s,l,d)):[]}function Kf(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(d+M,0)),Na(n,qt(s,3),M)}function $f(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d-1;return l!==e&&(M=ae(l),M=l<0?rn(d+M,0):gn(M,d-1)),Na(n,qt(s,3),M,!0)}function Jf(n){var s=n==null?0:n.length;return s?dn(n,1):[]}function y0(n){var s=n==null?0:n.length;return s?dn(n,dt):[]}function T0(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:ae(s),dn(n,s)):[]}function A0(n){for(var s=-1,l=n==null?0:n.length,d={};++s<l;){var M=n[s];d[M[0]]=M[1]}return d}function Qf(n){return n&&n.length?n[0]:e}function w0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(d+M,0)),Xr(n,s,M)}function b0(n){var s=n==null?0:n.length;return s?Qn(n,0,-1):[]}var R0=he(function(n){var s=Xe(n,Kl);return s.length&&s[0]===n[0]?zl(s):[]}),C0=he(function(n){var s=jn(n),l=Xe(n,Kl);return s===jn(l)?s=e:l.pop(),l.length&&l[0]===n[0]?zl(l,qt(s,2)):[]}),L0=he(function(n){var s=jn(n),l=Xe(n,Kl);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?zl(l,e,s):[]});function P0(n,s){return n==null?"":b_.call(n,s)}function jn(n){var s=n==null?0:n.length;return s?n[s-1]:e}function I0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d;return l!==e&&(M=ae(l),M=M<0?rn(d+M,0):gn(M,d-1)),s===s?h_(n,s,M):Na(n,Ph,M,!0)}function D0(n,s){return n&&n.length?cf(n,ae(s)):e}var U0=he(jf);function jf(n,s){return n&&n.length&&s&&s.length?kl(n,s):n}function N0(n,s,l){return n&&n.length&&s&&s.length?kl(n,s,qt(l,2)):n}function F0(n,s,l){return n&&n.length&&s&&s.length?kl(n,s,e,l):n}var O0=Pi(function(n,s){var l=n==null?0:n.length,d=Nl(n,s);return ff(n,Xe(s,function(M){return Ii(M,l)?+M:M}).sort(Ef)),d});function B0(n,s){var l=[];if(!(n&&n.length))return l;var d=-1,M=[],w=n.length;for(s=qt(s,3);++d<w;){var D=n[d];s(D,d,n)&&(l.push(D),M.push(d))}return ff(n,M),l}function cc(n){return n==null?n:P_.call(n)}function z0(n,s,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&yn(n,s,l)?(s=0,l=d):(s=s==null?0:ae(s),l=l===e?d:ae(l)),Qn(n,s,l)):[]}function G0(n,s){return eo(n,s)}function H0(n,s,l){return ql(n,s,qt(l,2))}function V0(n,s){var l=n==null?0:n.length;if(l){var d=eo(n,s);if(d<l&&ui(n[d],s))return d}return-1}function k0(n,s){return eo(n,s,!0)}function W0(n,s,l){return ql(n,s,qt(l,2),!0)}function X0(n,s){var l=n==null?0:n.length;if(l){var d=eo(n,s,!0)-1;if(ui(n[d],s))return d}return-1}function q0(n){return n&&n.length?pf(n):[]}function Y0(n,s){return n&&n.length?pf(n,qt(s,2)):[]}function Z0(n){var s=n==null?0:n.length;return s?Qn(n,1,s):[]}function K0(n,s,l){return n&&n.length?(s=l||s===e?1:ae(s),Qn(n,0,s<0?0:s)):[]}function $0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),s=d-s,Qn(n,s<0?0:s,d)):[]}function J0(n,s){return n&&n.length?no(n,qt(s,3),!1,!0):[]}function Q0(n,s){return n&&n.length?no(n,qt(s,3)):[]}var j0=he(function(n){return ji(dn(n,1,Ke,!0))}),tv=he(function(n){var s=jn(n);return Ke(s)&&(s=e),ji(dn(n,1,Ke,!0),qt(s,2))}),ev=he(function(n){var s=jn(n);return s=typeof s=="function"?s:e,ji(dn(n,1,Ke,!0),e,s)});function nv(n){return n&&n.length?ji(n):[]}function iv(n,s){return n&&n.length?ji(n,qt(s,2)):[]}function rv(n,s){return s=typeof s=="function"?s:e,n&&n.length?ji(n,e,s):[]}function uc(n){if(!(n&&n.length))return[];var s=0;return n=Zi(n,function(l){if(Ke(l))return s=rn(l.length,s),!0}),bl(s,function(l){return Xe(n,Tl(l))})}function td(n,s){if(!(n&&n.length))return[];var l=uc(n);return s==null?l:Xe(l,function(d){return On(s,e,d)})}var sv=he(function(n,s){return Ke(n)?Zs(n,s):[]}),av=he(function(n){return Zl(Zi(n,Ke))}),ov=he(function(n){var s=jn(n);return Ke(s)&&(s=e),Zl(Zi(n,Ke),qt(s,2))}),lv=he(function(n){var s=jn(n);return s=typeof s=="function"?s:e,Zl(Zi(n,Ke),e,s)}),cv=he(uc);function uv(n,s){return vf(n||[],s||[],Ys)}function hv(n,s){return vf(n||[],s||[],Js)}var fv=he(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,td(n,l)});function ed(n){var s=E(n);return s.__chain__=!0,s}function dv(n,s){return s(n),n}function ho(n,s){return s(n)}var pv=Pi(function(n){var s=n.length,l=s?n[0]:0,d=this.__wrapped__,M=function(w){return Nl(w,n)};return s>1||this.__actions__.length||!(d instanceof ve)||!Ii(l)?this.thru(M):(d=d.slice(l,+l+(s?1:0)),d.__actions__.push({func:ho,args:[M],thisArg:e}),new $n(d,this.__chain__).thru(function(w){return s&&!w.length&&w.push(e),w}))});function mv(){return ed(this)}function _v(){return new $n(this.value(),this.__chain__)}function gv(){this.__values__===e&&(this.__values__=md(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function vv(){return this}function xv(n){for(var s,l=this;l instanceof $a;){var d=Zf(l);d.__index__=0,d.__values__=e,s?M.__wrapped__=d:s=d;var M=d;l=l.__wrapped__}return M.__wrapped__=n,s}function Mv(){var n=this.__wrapped__;if(n instanceof ve){var s=n;return this.__actions__.length&&(s=new ve(this)),s=s.reverse(),s.__actions__.push({func:ho,args:[cc],thisArg:e}),new $n(s,this.__chain__)}return this.thru(cc)}function Sv(){return gf(this.__wrapped__,this.__actions__)}var Ev=io(function(n,s,l){Le.call(n,l)?++n[l]:Ci(n,l,1)});function yv(n,s,l){var d=se(n)?Ch:dg;return l&&yn(n,s,l)&&(s=e),d(n,qt(s,3))}function Tv(n,s){var l=se(n)?Zi:jh;return l(n,qt(s,3))}var Av=Rf(Kf),wv=Rf($f);function bv(n,s){return dn(fo(n,s),1)}function Rv(n,s){return dn(fo(n,s),dt)}function Cv(n,s,l){return l=l===e?1:ae(l),dn(fo(n,s),l)}function nd(n,s){var l=se(n)?Zn:Qi;return l(n,qt(s,3))}function id(n,s){var l=se(n)?Zm:Qh;return l(n,qt(s,3))}var Lv=io(function(n,s,l){Le.call(n,l)?n[l].push(s):Ci(n,l,[s])});function Pv(n,s,l,d){n=In(n)?n:is(n),l=l&&!d?ae(l):0;var M=n.length;return l<0&&(l=rn(M+l,0)),vo(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Xr(n,s,l)>-1}var Iv=he(function(n,s,l){var d=-1,M=typeof s=="function",w=In(n)?J(n.length):[];return Qi(n,function(D){w[++d]=M?On(s,D,l):Ks(D,s,l)}),w}),Dv=io(function(n,s,l){Ci(n,l,s)});function fo(n,s){var l=se(n)?Xe:af;return l(n,qt(s,3))}function Uv(n,s,l,d){return n==null?[]:(se(s)||(s=s==null?[]:[s]),l=d?e:l,se(l)||(l=l==null?[]:[l]),uf(n,s,l))}var Nv=io(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function Fv(n,s,l){var d=se(n)?El:Dh,M=arguments.length<3;return d(n,qt(s,4),l,M,Qi)}function Ov(n,s,l){var d=se(n)?Km:Dh,M=arguments.length<3;return d(n,qt(s,4),l,M,Qh)}function Bv(n,s){var l=se(n)?Zi:jh;return l(n,_o(qt(s,3)))}function zv(n){var s=se(n)?Zh:Pg;return s(n)}function Gv(n,s,l){(l?yn(n,s,l):s===e)?s=1:s=ae(s);var d=se(n)?lg:Ig;return d(n,s)}function Hv(n){var s=se(n)?cg:Ug;return s(n)}function Vv(n){if(n==null)return 0;if(In(n))return vo(n)?Yr(n):n.length;var s=vn(n);return s==O||s==I?n.size:Hl(n).length}function kv(n,s,l){var d=se(n)?yl:Ng;return l&&yn(n,s,l)&&(s=e),d(n,qt(s,3))}var Wv=he(function(n,s){if(n==null)return[];var l=s.length;return l>1&&yn(n,s[0],s[1])?s=[]:l>2&&yn(s[0],s[1],s[2])&&(s=[s[0]]),uf(n,dn(s,1),[])}),po=T_||function(){return fn.Date.now()};function Xv(n,s){if(typeof s!="function")throw new Kn(c);return n=ae(n),function(){if(--n<1)return s.apply(this,arguments)}}function rd(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,Li(n,N,e,e,e,e,s)}function sd(n,s){var l;if(typeof s!="function")throw new Kn(c);return n=ae(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var hc=he(function(n,s,l){var d=v;if(l.length){var M=$i(l,es(hc));d|=G}return Li(n,d,s,l,M)}),ad=he(function(n,s,l){var d=v|m;if(l.length){var M=$i(l,es(ad));d|=G}return Li(s,d,n,l,M)});function od(n,s,l){s=l?e:s;var d=Li(n,L,e,e,e,e,e,s);return d.placeholder=od.placeholder,d}function ld(n,s,l){s=l?e:s;var d=Li(n,R,e,e,e,e,e,s);return d.placeholder=ld.placeholder,d}function cd(n,s,l){var d,M,w,D,B,X,rt=0,at=!1,ft=!1,xt=!0;if(typeof n!="function")throw new Kn(c);s=ti(s)||0,Ye(l)&&(at=!!l.leading,ft="maxWait"in l,w=ft?rn(ti(l.maxWait)||0,s):w,xt="trailing"in l?!!l.trailing:xt);function Gt($e){var hi=d,Ni=M;return d=M=e,rt=$e,D=n.apply(Ni,hi),D}function Yt($e){return rt=$e,B=ta(_e,s),at?Gt($e):D}function le($e){var hi=$e-X,Ni=$e-rt,Rd=s-hi;return ft?gn(Rd,w-Ni):Rd}function Zt($e){var hi=$e-X,Ni=$e-rt;return X===e||hi>=s||hi<0||ft&&Ni>=w}function _e(){var $e=po();if(Zt($e))return Se($e);B=ta(_e,le($e))}function Se($e){return B=e,xt&&d?Gt($e):(d=M=e,D)}function Hn(){B!==e&&xf(B),rt=0,d=X=M=B=e}function Tn(){return B===e?D:Se(po())}function Vn(){var $e=po(),hi=Zt($e);if(d=arguments,M=this,X=$e,hi){if(B===e)return Yt(X);if(ft)return xf(B),B=ta(_e,s),Gt(X)}return B===e&&(B=ta(_e,s)),D}return Vn.cancel=Hn,Vn.flush=Tn,Vn}var qv=he(function(n,s){return Jh(n,1,s)}),Yv=he(function(n,s,l){return Jh(n,ti(s)||0,l)});function Zv(n){return Li(n,C)}function mo(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Kn(c);var l=function(){var d=arguments,M=s?s.apply(this,d):d[0],w=l.cache;if(w.has(M))return w.get(M);var D=n.apply(this,d);return l.cache=w.set(M,D)||w,D};return l.cache=new(mo.Cache||Ri),l}mo.Cache=Ri;function _o(n){if(typeof n!="function")throw new Kn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function Kv(n){return sd(2,n)}var $v=Fg(function(n,s){s=s.length==1&&se(s[0])?Xe(s[0],Bn(qt())):Xe(dn(s,1),Bn(qt()));var l=s.length;return he(function(d){for(var M=-1,w=gn(d.length,l);++M<w;)d[M]=s[M].call(this,d[M]);return On(n,this,d)})}),fc=he(function(n,s){var l=$i(s,es(fc));return Li(n,G,e,s,l)}),ud=he(function(n,s){var l=$i(s,es(ud));return Li(n,U,e,s,l)}),Jv=Pi(function(n,s){return Li(n,H,e,e,e,s)});function Qv(n,s){if(typeof n!="function")throw new Kn(c);return s=s===e?s:ae(s),he(n,s)}function jv(n,s){if(typeof n!="function")throw new Kn(c);return s=s==null?0:rn(ae(s),0),he(function(l){var d=l[s],M=er(l,0,s);return d&&Ki(M,d),On(n,this,M)})}function tx(n,s,l){var d=!0,M=!0;if(typeof n!="function")throw new Kn(c);return Ye(l)&&(d="leading"in l?!!l.leading:d,M="trailing"in l?!!l.trailing:M),cd(n,s,{leading:d,maxWait:s,trailing:M})}function ex(n){return rd(n,1)}function nx(n,s){return fc($l(s),n)}function ix(){if(!arguments.length)return[];var n=arguments[0];return se(n)?n:[n]}function rx(n){return Jn(n,x)}function sx(n,s){return s=typeof s=="function"?s:e,Jn(n,x,s)}function ax(n){return Jn(n,_|x)}function ox(n,s){return s=typeof s=="function"?s:e,Jn(n,_|x,s)}function lx(n,s){return s==null||$h(n,s,un(s))}function ui(n,s){return n===s||n!==n&&s!==s}var cx=oo(Bl),ux=oo(function(n,s){return n>=s}),Tr=nf(function(){return arguments}())?nf:function(n){return Ze(n)&&Le.call(n,"callee")&&!Vh.call(n,"callee")},se=J.isArray,hx=yh?Bn(yh):xg;function In(n){return n!=null&&go(n.length)&&!Di(n)}function Ke(n){return Ze(n)&&In(n)}function fx(n){return n===!0||n===!1||Ze(n)&&En(n)==kt}var nr=w_||yc,dx=Th?Bn(Th):Mg;function px(n){return Ze(n)&&n.nodeType===1&&!ea(n)}function mx(n){if(n==null)return!0;if(In(n)&&(se(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||ns(n)||Tr(n)))return!n.length;var s=vn(n);if(s==O||s==I)return!n.size;if(js(n))return!Hl(n).length;for(var l in n)if(Le.call(n,l))return!1;return!0}function _x(n,s){return $s(n,s)}function gx(n,s,l){l=typeof l=="function"?l:e;var d=l?l(n,s):e;return d===e?$s(n,s,e,l):!!d}function dc(n){if(!Ze(n))return!1;var s=En(n);return s==ze||s==$t||typeof n.message=="string"&&typeof n.name=="string"&&!ea(n)}function vx(n){return typeof n=="number"&&Wh(n)}function Di(n){if(!Ye(n))return!1;var s=En(n);return s==Pe||s==pe||s==Tt||s==Fe}function hd(n){return typeof n=="number"&&n==ae(n)}function go(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Ye(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Ze(n){return n!=null&&typeof n=="object"}var fd=Ah?Bn(Ah):Eg;function xx(n,s){return n===s||Gl(n,s,ic(s))}function Mx(n,s,l){return l=typeof l=="function"?l:e,Gl(n,s,ic(s),l)}function Sx(n){return dd(n)&&n!=+n}function Ex(n){if(s0(n))throw new ie(o);return rf(n)}function yx(n){return n===null}function Tx(n){return n==null}function dd(n){return typeof n=="number"||Ze(n)&&En(n)==on}function ea(n){if(!Ze(n)||En(n)!=ee)return!1;var s=ka(n);if(s===null)return!0;var l=Le.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&za.call(l)==M_}var pc=wh?Bn(wh):yg;function Ax(n){return hd(n)&&n>=-9007199254740991&&n<=j}var pd=bh?Bn(bh):Tg;function vo(n){return typeof n=="string"||!se(n)&&Ze(n)&&En(n)==S}function Gn(n){return typeof n=="symbol"||Ze(n)&&En(n)==Y}var ns=Rh?Bn(Rh):Ag;function wx(n){return n===e}function bx(n){return Ze(n)&&vn(n)==ht}function Rx(n){return Ze(n)&&En(n)==st}var Cx=oo(Vl),Lx=oo(function(n,s){return n<=s});function md(n){if(!n)return[];if(In(n))return vo(n)?li(n):Pn(n);if(Vs&&n[Vs])return l_(n[Vs]());var s=vn(n),l=s==O?Cl:s==I?Fa:is;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=ti(n),n===dt||n===-1/0){var s=n<0?-1:1;return s*yt}return n===n?n:0}function ae(n){var s=Ui(n),l=s%1;return s===s?l?s-l:s:0}function _d(n){return n?Mr(ae(n),0,Ft):0}function ti(n){if(typeof n=="number")return n;if(Gn(n))return Rt;if(Ye(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Ye(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Uh(n);var l=pl.test(n);return l||_l.test(n)?Xm(n.slice(2),l?2:8):dl.test(n)?Rt:+n}function gd(n){return xi(n,Dn(n))}function Px(n){return n?Mr(ae(n),-9007199254740991,j):n===0?n:0}function Re(n){return n==null?"":zn(n)}var Ix=jr(function(n,s){if(js(s)||In(s)){xi(s,un(s),n);return}for(var l in s)Le.call(s,l)&&Ys(n,l,s[l])}),vd=jr(function(n,s){xi(s,Dn(s),n)}),xo=jr(function(n,s,l,d){xi(s,Dn(s),n,d)}),Dx=jr(function(n,s,l,d){xi(s,un(s),n,d)}),Ux=Pi(Nl);function Nx(n,s){var l=Qr(n);return s==null?l:Kh(l,s)}var Fx=he(function(n,s){n=Be(n);var l=-1,d=s.length,M=d>2?s[2]:e;for(M&&yn(s[0],s[1],M)&&(d=1);++l<d;)for(var w=s[l],D=Dn(w),B=-1,X=D.length;++B<X;){var rt=D[B],at=n[rt];(at===e||ui(at,Kr[rt])&&!Le.call(n,rt))&&(n[rt]=w[rt])}return n}),Ox=he(function(n){return n.push(e,Nf),On(xd,e,n)});function Bx(n,s){return Lh(n,qt(s,3),vi)}function zx(n,s){return Lh(n,qt(s,3),Ol)}function Gx(n,s){return n==null?n:Fl(n,qt(s,3),Dn)}function Hx(n,s){return n==null?n:tf(n,qt(s,3),Dn)}function Vx(n,s){return n&&vi(n,qt(s,3))}function kx(n,s){return n&&Ol(n,qt(s,3))}function Wx(n){return n==null?[]:ja(n,un(n))}function Xx(n){return n==null?[]:ja(n,Dn(n))}function mc(n,s,l){var d=n==null?e:Sr(n,s);return d===e?l:d}function qx(n,s){return n!=null&&Bf(n,s,mg)}function _c(n,s){return n!=null&&Bf(n,s,_g)}var Yx=Lf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ga.call(s)),n[s]=l},vc(Un)),Zx=Lf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ga.call(s)),Le.call(n,s)?n[s].push(l):n[s]=[l]},qt),Kx=he(Ks);function un(n){return In(n)?Yh(n):Hl(n)}function Dn(n){return In(n)?Yh(n,!0):wg(n)}function $x(n,s){var l={};return s=qt(s,3),vi(n,function(d,M,w){Ci(l,s(d,M,w),d)}),l}function Jx(n,s){var l={};return s=qt(s,3),vi(n,function(d,M,w){Ci(l,M,s(d,M,w))}),l}var Qx=jr(function(n,s,l){to(n,s,l)}),xd=jr(function(n,s,l,d){to(n,s,l,d)}),jx=Pi(function(n,s){var l={};if(n==null)return l;var d=!1;s=Xe(s,function(w){return w=tr(w,n),d||(d=w.length>1),w}),xi(n,ec(n),l),d&&(l=Jn(l,_|g|x,Yg));for(var M=s.length;M--;)Yl(l,s[M]);return l});function tM(n,s){return Md(n,_o(qt(s)))}var eM=Pi(function(n,s){return n==null?{}:Rg(n,s)});function Md(n,s){if(n==null)return{};var l=Xe(ec(n),function(d){return[d]});return s=qt(s),hf(n,l,function(d,M){return s(d,M[0])})}function nM(n,s,l){s=tr(s,n);var d=-1,M=s.length;for(M||(M=1,n=e);++d<M;){var w=n==null?e:n[Mi(s[d])];w===e&&(d=M,w=l),n=Di(w)?w.call(n):w}return n}function iM(n,s,l){return n==null?n:Js(n,s,l)}function rM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:Js(n,s,l,d)}var Sd=Df(un),Ed=Df(Dn);function sM(n,s,l){var d=se(n),M=d||nr(n)||ns(n);if(s=qt(s,4),l==null){var w=n&&n.constructor;M?l=d?new w:[]:Ye(n)?l=Di(w)?Qr(ka(n)):{}:l={}}return(M?Zn:vi)(n,function(D,B,X){return s(l,D,B,X)}),l}function aM(n,s){return n==null?!0:Yl(n,s)}function oM(n,s,l){return n==null?n:_f(n,s,$l(l))}function lM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:_f(n,s,$l(l),d)}function is(n){return n==null?[]:Rl(n,un(n))}function cM(n){return n==null?[]:Rl(n,Dn(n))}function uM(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=ti(l),l=l===l?l:0),s!==e&&(s=ti(s),s=s===s?s:0),Mr(ti(n),s,l)}function hM(n,s,l){return s=Ui(s),l===e?(l=s,s=0):l=Ui(l),n=ti(n),gg(n,s,l)}function fM(n,s,l){if(l&&typeof l!="boolean"&&yn(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Ui(n),s===e?(s=n,n=0):s=Ui(s)),n>s){var d=n;n=s,s=d}if(l||n%1||s%1){var M=Xh();return gn(n+M*(s-n+Wm("1e-"+((M+"").length-1))),s)}return Wl(n,s)}var dM=ts(function(n,s,l){return s=s.toLowerCase(),n+(l?yd(s):s)});function yd(n){return gc(Re(n).toLowerCase())}function Td(n){return n=Re(n),n&&n.replace(A,i_).replace(Um,"")}function pM(n,s,l){n=Re(n),s=zn(s);var d=n.length;l=l===e?d:Mr(ae(l),0,d);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function mM(n){return n=Re(n),n&&At.test(n)?n.replace(lt,r_):n}function _M(n){return n=Re(n),n&&ba.test(n)?n.replace(Vr,"\\$&"):n}var gM=ts(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),vM=ts(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),xM=bf("toLowerCase");function MM(n,s,l){n=Re(n),s=ae(s);var d=s?Yr(n):0;if(!s||d>=s)return n;var M=(s-d)/2;return ao(Ya(M),l)+n+ao(qa(M),l)}function SM(n,s,l){n=Re(n),s=ae(s);var d=s?Yr(n):0;return s&&d<s?n+ao(s-d,l):n}function EM(n,s,l){n=Re(n),s=ae(s);var d=s?Yr(n):0;return s&&d<s?ao(s-d,l)+n:n}function yM(n,s,l){return l||s==null?s=0:s&&(s=+s),L_(Re(n).replace(oi,""),s||0)}function TM(n,s,l){return(l?yn(n,s,l):s===e)?s=1:s=ae(s),Xl(Re(n),s)}function AM(){var n=arguments,s=Re(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var wM=ts(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function bM(n,s,l){return l&&typeof l!="number"&&yn(n,s,l)&&(s=l=e),l=l===e?Ft:l>>>0,l?(n=Re(n),n&&(typeof s=="string"||s!=null&&!pc(s))&&(s=zn(s),!s&&qr(n))?er(li(n),0,l):n.split(s,l)):[]}var RM=ts(function(n,s,l){return n+(l?" ":"")+gc(s)});function CM(n,s,l){return n=Re(n),l=l==null?0:Mr(ae(l),0,n.length),s=zn(s),n.slice(l,l+s.length)==s}function LM(n,s,l){var d=E.templateSettings;l&&yn(n,s,l)&&(s=e),n=Re(n),s=xo({},s,d,Uf);var M=xo({},s.imports,d.imports,Uf),w=un(M),D=Rl(M,w),B,X,rt=0,at=s.interpolate||W,ft="__p += '",xt=Ll((s.escape||W).source+"|"+at.source+"|"+(at===tn?Ia:W).source+"|"+(s.evaluate||W).source+"|$","g"),Gt="//# sourceURL="+(Le.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zm+"]")+`
`;n.replace(xt,function(Zt,_e,Se,Hn,Tn,Vn){return Se||(Se=Hn),ft+=n.slice(rt,Vn).replace(Z,s_),_e&&(B=!0,ft+=`' +
__e(`+_e+`) +
'`),Tn&&(X=!0,ft+=`';
`+Tn+`;
__p += '`),Se&&(ft+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),rt=Vn+Zt.length,Zt}),ft+=`';
`;var Yt=Le.call(s,"variable")&&s.variable;if(!Yt)ft=`with (obj) {
`+ft+`
}
`;else if(Wr.test(Yt))throw new ie(u);ft=(X?ft.replace(Ie,""):ft).replace(V,"$1").replace(St,"$1;"),ft="function("+(Yt||"obj")+`) {
`+(Yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var le=wd(function(){return be(w,Gt+"return "+ft).apply(e,D)});if(le.source=ft,dc(le))throw le;return le}function PM(n){return Re(n).toLowerCase()}function IM(n){return Re(n).toUpperCase()}function DM(n,s,l){if(n=Re(n),n&&(l||s===e))return Uh(n);if(!n||!(s=zn(s)))return n;var d=li(n),M=li(s),w=Nh(d,M),D=Fh(d,M)+1;return er(d,w,D).join("")}function UM(n,s,l){if(n=Re(n),n&&(l||s===e))return n.slice(0,Bh(n)+1);if(!n||!(s=zn(s)))return n;var d=li(n),M=Fh(d,li(s))+1;return er(d,0,M).join("")}function NM(n,s,l){if(n=Re(n),n&&(l||s===e))return n.replace(oi,"");if(!n||!(s=zn(s)))return n;var d=li(n),M=Nh(d,li(s));return er(d,M).join("")}function FM(n,s){var l=T,d=z;if(Ye(s)){var M="separator"in s?s.separator:M;l="length"in s?ae(s.length):l,d="omission"in s?zn(s.omission):d}n=Re(n);var w=n.length;if(qr(n)){var D=li(n);w=D.length}if(l>=w)return n;var B=l-Yr(d);if(B<1)return d;var X=D?er(D,0,B).join(""):n.slice(0,B);if(M===e)return X+d;if(D&&(B+=X.length-B),pc(M)){if(n.slice(B).search(M)){var rt,at=X;for(M.global||(M=Ll(M.source,Re(Da.exec(M))+"g")),M.lastIndex=0;rt=M.exec(at);)var ft=rt.index;X=X.slice(0,ft===e?B:ft)}}else if(n.indexOf(zn(M),B)!=B){var xt=X.lastIndexOf(M);xt>-1&&(X=X.slice(0,xt))}return X+d}function OM(n){return n=Re(n),n&&bt.test(n)?n.replace(tt,f_):n}var BM=ts(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),gc=bf("toUpperCase");function Ad(n,s,l){return n=Re(n),s=l?e:s,s===e?o_(n)?m_(n):Qm(n):n.match(s)||[]}var wd=he(function(n,s){try{return On(n,e,s)}catch(l){return dc(l)?l:new ie(l)}}),zM=Pi(function(n,s){return Zn(s,function(l){l=Mi(l),Ci(n,l,hc(n[l],n))}),n});function GM(n){var s=n==null?0:n.length,l=qt();return n=s?Xe(n,function(d){if(typeof d[1]!="function")throw new Kn(c);return[l(d[0]),d[1]]}):[],he(function(d){for(var M=-1;++M<s;){var w=n[M];if(On(w[0],this,d))return On(w[1],this,d)}})}function HM(n){return fg(Jn(n,_))}function vc(n){return function(){return n}}function VM(n,s){return n==null||n!==n?s:n}var kM=Cf(),WM=Cf(!0);function Un(n){return n}function xc(n){return sf(typeof n=="function"?n:Jn(n,_))}function XM(n){return of(Jn(n,_))}function qM(n,s){return lf(n,Jn(s,_))}var YM=he(function(n,s){return function(l){return Ks(l,n,s)}}),ZM=he(function(n,s){return function(l){return Ks(n,l,s)}});function Mc(n,s,l){var d=un(s),M=ja(s,d);l==null&&!(Ye(s)&&(M.length||!d.length))&&(l=s,s=n,n=this,M=ja(s,un(s)));var w=!(Ye(l)&&"chain"in l)||!!l.chain,D=Di(n);return Zn(M,function(B){var X=s[B];n[B]=X,D&&(n.prototype[B]=function(){var rt=this.__chain__;if(w||rt){var at=n(this.__wrapped__),ft=at.__actions__=Pn(this.__actions__);return ft.push({func:X,args:arguments,thisArg:n}),at.__chain__=rt,at}return X.apply(n,Ki([this.value()],arguments))})}),n}function KM(){return fn._===this&&(fn._=S_),this}function Sc(){}function $M(n){return n=ae(n),he(function(s){return cf(s,n)})}var JM=Ql(Xe),QM=Ql(Ch),jM=Ql(yl);function bd(n){return sc(n)?Tl(Mi(n)):Cg(n)}function tS(n){return function(s){return n==null?e:Sr(n,s)}}var eS=Pf(),nS=Pf(!0);function Ec(){return[]}function yc(){return!1}function iS(){return{}}function rS(){return""}function sS(){return!0}function aS(n,s){if(n=ae(n),n<1||n>j)return[];var l=Ft,d=gn(n,Ft);s=qt(s),n-=Ft;for(var M=bl(d,s);++l<n;)s(l);return M}function oS(n){return se(n)?Xe(n,Mi):Gn(n)?[n]:Pn(Yf(Re(n)))}function lS(n){var s=++x_;return Re(n)+s}var cS=so(function(n,s){return n+s},0),uS=jl("ceil"),hS=so(function(n,s){return n/s},1),fS=jl("floor");function dS(n){return n&&n.length?Qa(n,Un,Bl):e}function pS(n,s){return n&&n.length?Qa(n,qt(s,2),Bl):e}function mS(n){return Ih(n,Un)}function _S(n,s){return Ih(n,qt(s,2))}function gS(n){return n&&n.length?Qa(n,Un,Vl):e}function vS(n,s){return n&&n.length?Qa(n,qt(s,2),Vl):e}var xS=so(function(n,s){return n*s},1),MS=jl("round"),SS=so(function(n,s){return n-s},0);function ES(n){return n&&n.length?wl(n,Un):0}function yS(n,s){return n&&n.length?wl(n,qt(s,2)):0}return E.after=Xv,E.ary=rd,E.assign=Ix,E.assignIn=vd,E.assignInWith=xo,E.assignWith=Dx,E.at=Ux,E.before=sd,E.bind=hc,E.bindAll=zM,E.bindKey=ad,E.castArray=ix,E.chain=ed,E.chunk=f0,E.compact=d0,E.concat=p0,E.cond=GM,E.conforms=HM,E.constant=vc,E.countBy=Ev,E.create=Nx,E.curry=od,E.curryRight=ld,E.debounce=cd,E.defaults=Fx,E.defaultsDeep=Ox,E.defer=qv,E.delay=Yv,E.difference=m0,E.differenceBy=_0,E.differenceWith=g0,E.drop=v0,E.dropRight=x0,E.dropRightWhile=M0,E.dropWhile=S0,E.fill=E0,E.filter=Tv,E.flatMap=bv,E.flatMapDeep=Rv,E.flatMapDepth=Cv,E.flatten=Jf,E.flattenDeep=y0,E.flattenDepth=T0,E.flip=Zv,E.flow=kM,E.flowRight=WM,E.fromPairs=A0,E.functions=Wx,E.functionsIn=Xx,E.groupBy=Lv,E.initial=b0,E.intersection=R0,E.intersectionBy=C0,E.intersectionWith=L0,E.invert=Yx,E.invertBy=Zx,E.invokeMap=Iv,E.iteratee=xc,E.keyBy=Dv,E.keys=un,E.keysIn=Dn,E.map=fo,E.mapKeys=$x,E.mapValues=Jx,E.matches=XM,E.matchesProperty=qM,E.memoize=mo,E.merge=Qx,E.mergeWith=xd,E.method=YM,E.methodOf=ZM,E.mixin=Mc,E.negate=_o,E.nthArg=$M,E.omit=jx,E.omitBy=tM,E.once=Kv,E.orderBy=Uv,E.over=JM,E.overArgs=$v,E.overEvery=QM,E.overSome=jM,E.partial=fc,E.partialRight=ud,E.partition=Nv,E.pick=eM,E.pickBy=Md,E.property=bd,E.propertyOf=tS,E.pull=U0,E.pullAll=jf,E.pullAllBy=N0,E.pullAllWith=F0,E.pullAt=O0,E.range=eS,E.rangeRight=nS,E.rearg=Jv,E.reject=Bv,E.remove=B0,E.rest=Qv,E.reverse=cc,E.sampleSize=Gv,E.set=iM,E.setWith=rM,E.shuffle=Hv,E.slice=z0,E.sortBy=Wv,E.sortedUniq=q0,E.sortedUniqBy=Y0,E.split=bM,E.spread=jv,E.tail=Z0,E.take=K0,E.takeRight=$0,E.takeRightWhile=J0,E.takeWhile=Q0,E.tap=dv,E.throttle=tx,E.thru=ho,E.toArray=md,E.toPairs=Sd,E.toPairsIn=Ed,E.toPath=oS,E.toPlainObject=gd,E.transform=sM,E.unary=ex,E.union=j0,E.unionBy=tv,E.unionWith=ev,E.uniq=nv,E.uniqBy=iv,E.uniqWith=rv,E.unset=aM,E.unzip=uc,E.unzipWith=td,E.update=oM,E.updateWith=lM,E.values=is,E.valuesIn=cM,E.without=sv,E.words=Ad,E.wrap=nx,E.xor=av,E.xorBy=ov,E.xorWith=lv,E.zip=cv,E.zipObject=uv,E.zipObjectDeep=hv,E.zipWith=fv,E.entries=Sd,E.entriesIn=Ed,E.extend=vd,E.extendWith=xo,Mc(E,E),E.add=cS,E.attempt=wd,E.camelCase=dM,E.capitalize=yd,E.ceil=uS,E.clamp=uM,E.clone=rx,E.cloneDeep=ax,E.cloneDeepWith=ox,E.cloneWith=sx,E.conformsTo=lx,E.deburr=Td,E.defaultTo=VM,E.divide=hS,E.endsWith=pM,E.eq=ui,E.escape=mM,E.escapeRegExp=_M,E.every=yv,E.find=Av,E.findIndex=Kf,E.findKey=Bx,E.findLast=wv,E.findLastIndex=$f,E.findLastKey=zx,E.floor=fS,E.forEach=nd,E.forEachRight=id,E.forIn=Gx,E.forInRight=Hx,E.forOwn=Vx,E.forOwnRight=kx,E.get=mc,E.gt=cx,E.gte=ux,E.has=qx,E.hasIn=_c,E.head=Qf,E.identity=Un,E.includes=Pv,E.indexOf=w0,E.inRange=hM,E.invoke=Kx,E.isArguments=Tr,E.isArray=se,E.isArrayBuffer=hx,E.isArrayLike=In,E.isArrayLikeObject=Ke,E.isBoolean=fx,E.isBuffer=nr,E.isDate=dx,E.isElement=px,E.isEmpty=mx,E.isEqual=_x,E.isEqualWith=gx,E.isError=dc,E.isFinite=vx,E.isFunction=Di,E.isInteger=hd,E.isLength=go,E.isMap=fd,E.isMatch=xx,E.isMatchWith=Mx,E.isNaN=Sx,E.isNative=Ex,E.isNil=Tx,E.isNull=yx,E.isNumber=dd,E.isObject=Ye,E.isObjectLike=Ze,E.isPlainObject=ea,E.isRegExp=pc,E.isSafeInteger=Ax,E.isSet=pd,E.isString=vo,E.isSymbol=Gn,E.isTypedArray=ns,E.isUndefined=wx,E.isWeakMap=bx,E.isWeakSet=Rx,E.join=P0,E.kebabCase=gM,E.last=jn,E.lastIndexOf=I0,E.lowerCase=vM,E.lowerFirst=xM,E.lt=Cx,E.lte=Lx,E.max=dS,E.maxBy=pS,E.mean=mS,E.meanBy=_S,E.min=gS,E.minBy=vS,E.stubArray=Ec,E.stubFalse=yc,E.stubObject=iS,E.stubString=rS,E.stubTrue=sS,E.multiply=xS,E.nth=D0,E.noConflict=KM,E.noop=Sc,E.now=po,E.pad=MM,E.padEnd=SM,E.padStart=EM,E.parseInt=yM,E.random=fM,E.reduce=Fv,E.reduceRight=Ov,E.repeat=TM,E.replace=AM,E.result=nM,E.round=MS,E.runInContext=k,E.sample=zv,E.size=Vv,E.snakeCase=wM,E.some=kv,E.sortedIndex=G0,E.sortedIndexBy=H0,E.sortedIndexOf=V0,E.sortedLastIndex=k0,E.sortedLastIndexBy=W0,E.sortedLastIndexOf=X0,E.startCase=RM,E.startsWith=CM,E.subtract=SS,E.sum=ES,E.sumBy=yS,E.template=LM,E.times=aS,E.toFinite=Ui,E.toInteger=ae,E.toLength=_d,E.toLower=PM,E.toNumber=ti,E.toSafeInteger=Px,E.toString=Re,E.toUpper=IM,E.trim=DM,E.trimEnd=UM,E.trimStart=NM,E.truncate=FM,E.unescape=OM,E.uniqueId=lS,E.upperCase=BM,E.upperFirst=gc,E.each=nd,E.eachRight=id,E.first=Qf,Mc(E,function(){var n={};return vi(E,function(s,l){Le.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,Zn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Zn(["drop","take"],function(n,s){ve.prototype[n]=function(l){l=l===e?1:rn(ae(l),0);var d=this.__filtered__&&!s?new ve(this):this.clone();return d.__filtered__?d.__takeCount__=gn(l,d.__takeCount__):d.__views__.push({size:gn(l,Ft),type:n+(d.__dir__<0?"Right":"")}),d},ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Zn(["filter","map","takeWhile"],function(n,s){var l=s+1,d=l==it||l==nt;ve.prototype[n]=function(M){var w=this.clone();return w.__iteratees__.push({iteratee:qt(M,3),type:l}),w.__filtered__=w.__filtered__||d,w}}),Zn(["head","last"],function(n,s){var l="take"+(s?"Right":"");ve.prototype[n]=function(){return this[l](1).value()[0]}}),Zn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");ve.prototype[n]=function(){return this.__filtered__?new ve(this):this[l](1)}}),ve.prototype.compact=function(){return this.filter(Un)},ve.prototype.find=function(n){return this.filter(n).head()},ve.prototype.findLast=function(n){return this.reverse().find(n)},ve.prototype.invokeMap=he(function(n,s){return typeof n=="function"?new ve(this):this.map(function(l){return Ks(l,n,s)})}),ve.prototype.reject=function(n){return this.filter(_o(qt(n)))},ve.prototype.slice=function(n,s){n=ae(n);var l=this;return l.__filtered__&&(n>0||s<0)?new ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=ae(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ve.prototype.toArray=function(){return this.take(Ft)},vi(ve.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),M=E[d?"take"+(s=="last"?"Right":""):s],w=d||/^find/.test(s);M&&(E.prototype[s]=function(){var D=this.__wrapped__,B=d?[1]:arguments,X=D instanceof ve,rt=B[0],at=X||se(D),ft=function(_e){var Se=M.apply(E,Ki([_e],B));return d&&xt?Se[0]:Se};at&&l&&typeof rt=="function"&&rt.length!=1&&(X=at=!1);var xt=this.__chain__,Gt=!!this.__actions__.length,Yt=w&&!xt,le=X&&!Gt;if(!w&&at){D=le?D:new ve(this);var Zt=n.apply(D,B);return Zt.__actions__.push({func:ho,args:[ft],thisArg:e}),new $n(Zt,xt)}return Yt&&le?n.apply(this,B):(Zt=this.thru(ft),Yt?d?Zt.value()[0]:Zt.value():Zt)})}),Zn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Oa[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(d&&!this.__chain__){var w=this.value();return s.apply(se(w)?w:[],M)}return this[l](function(D){return s.apply(se(D)?D:[],M)})}}),vi(ve.prototype,function(n,s){var l=E[s];if(l){var d=l.name+"";Le.call(Jr,d)||(Jr[d]=[]),Jr[d].push({name:s,func:l})}}),Jr[ro(e,m).name]=[{name:"wrapper",func:e}],ve.prototype.clone=O_,ve.prototype.reverse=B_,ve.prototype.value=z_,E.prototype.at=pv,E.prototype.chain=mv,E.prototype.commit=_v,E.prototype.next=gv,E.prototype.plant=xv,E.prototype.reverse=Mv,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Sv,E.prototype.first=E.prototype.head,Vs&&(E.prototype[Vs]=vv),E},Zr=__();_r?((_r.exports=Zr)._=Zr,xl._=Zr):fn._=Zr}).call(Kb)}(ga,ga.exports)),ga.exports}var fa={},Op;function Jb(){if(Op)return fa;Op=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.backtrace=void 0;function r(t,e,i){const a=[];let o=i?t:t.getParent();for(;o.getParent();)a.push([o.position.x,o.position.y]),o=o.getParent();return e&&a.push([o.position.x,o.position.y]),a.reverse()}return fa.backtrace=r,fa}var da={},Bp;function Qb(){if(Bp)return da;Bp=1,Object.defineProperty(da,"__esModule",{value:!0}),da.calculateHeuristic=void 0;function r(t,e,i,a){const o=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(o+c)*a;case"Euclidean":return Math.sqrt(o*o+c*c)*a;case"Chebyshev":return Math.max(o,c)*a;case"Octile":return(o+c-.58*Math.min(o,c))*a}}return da.calculateHeuristic=r,da}var pa={},ma={},zp;function jb(){if(zp)return ma;zp=1,Object.defineProperty(ma,"__esModule",{value:!0}),ma.Node=void 0;class r{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return ma.Node=r,ma}var Gp;function Am(){if(Gp)return pa;Gp=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.Grid=void 0;const r=jb();class t{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,a,o,c){const u=[];let f=0;for(let h=0;h<o;h++){u[h]=[];for(let p=0;p<a;p++)u[h][p]=new r.Node({id:f,position:{x:p,y:h}}),f++}if(i===void 0){for(let h=0;h<o;h++)for(let p=0;p<a;p++)Math.floor(Math.random()*10)+1>10-c?u[h][p].setIsWalkable(!1):u[h][p].setIsWalkable(!0);return u}for(let h=0;h<o;h++)for(let p=0;p<a;p++)u[h][p].setIsWalkable(!i[h][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,a){const o=[],c=i.x-1,u=i.x+1,f=i.y-1,h=i.y+1;for(let p=f;p<=h;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(a||_==i.x||p==i.y)&&o.push(this.getNodeAt({x:_,y:p}));return o}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let a=0;a<this.gridNodes[i].length;a++)this.gridNodes[i][a].setIsOnClosedList(!1),this.gridNodes[i][a].setIsOnOpenList(!1),this.gridNodes[i][a].setParent(void 0),this.gridNodes[i][a].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let a=0;for(let o=0;o<this.height;o++){i[o]=[];for(let c=0;c<this.width;c++)i[o][c]=new r.Node({id:a,position:{x:c,y:o},walkable:this.gridNodes[o][c].getIsWalkable()}),a++}return i}}return pa.Grid=t,pa}var Hp;function t1(){if(Hp)return ha;Hp=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.AStarFinder=void 0;const r=$b(),t=Jb(),e=Qb(),i=Am();class a{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const f=this.grid.getNodeAt(c),h=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];f.setIsOnOpenList(!0),this.openList.push(f);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,e.calculateHeuristic)(this.heuristic,g.position,h.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,r.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,r.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===h)return(0,t.backtrace)(h,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const y=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||y<x.getGValue())&&(x.setGValue(y),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return ha.AStarFinder=a,ha}var Vp;function e1(){return Vp||(Vp=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var t=t1();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=Am();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(ru)),ru}var n1=e1();class wm{constructor(t){wt(this,"currentHealth");wt(this,"fullHealth");wt(this,"offset");wt(this,"red");wt(this,"green");wt(this,"widthFactor");wt(this,"heightFactor");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new tp(new qu({map:new ap().load("./textures/red.png")})),this.green=new tp(new qu({map:new ap().load("./textures/green.png")})),this.widthFactor=t.widthFactor??1,this.heightFactor=t.heightFactor??1,this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const i=this.widthFactor*1,a=this.heightFactor*.2;this.red.scale.set(i,a,a),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),a,a),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}const sl=class sl extends fl{constructor(e){const i=(e==null?void 0:e.size)??1,a=jt.TILE_SIZE/32,o=Je.createSphere({radius:a*i,color:(e==null?void 0:e.color)??new gt(te.LIGHT_GREEN),basicMaterial:!0});super({mesh:o});wt(this,"ttl",0);wt(this,"velocity");this.mesh.position.set(e.position.x,e.position.y,e.position.z);const c=(e==null?void 0:e.force)??1,u=.002;this.velocity=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u)}update(e,i,a){super.update(e,i,a),this.velocity.y-=1e-5*i,this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>sl.TTL&&this.kill()}};wt(sl,"TTL",800);let Zu=sl;const kp={createExplosion(r,t,e){const{colors:i}=e,a=e.amount??10,o=Array.isArray(i)?i:[i];for(let c=0;c<a;c++){const u=new Zu({position:t.clone(),color:o[Math.floor(Math.random()*o.length)],force:e.force,size:e.size});r.addComponent(u)}}},As={createSimpleGrid:r=>{var o;const t=[];for(let c=0;c<r.length;c++){const u=[];for(let f=0;f<r[c].length;f++)u.push(r[c][f].isWalkable?0:1);t.push(u)}const e=t.length,i=((o=t[0])==null?void 0:o.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:e},(f,h)=>t[h][u]))},getBoundedUncheckedNeighbors:(r,t,e)=>{const i=[];return r>0&&i.push(new Nt(r-1,t)),r<e.length-1&&i.push(new Nt(r+1,t)),t>0&&i.push(new Nt(r,t-1)),t<e[0].length-1&&i.push(new Nt(r,t+1)),i},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:(r,t,e)=>{const i=new Set,a=[t.clone()];i.add(As.getPositionHash(t));let o=0;for(;o<a.length;){if(o>r.length*r[0].length*2)return null;const u=a[o];o++;const f=As.getBoundedUncheckedNeighbors(u.x,u.y,r);for(const h of f){if(!r[h.x][h.y].isWalkable)continue;const p=r[h.x][h.y].actors.find(_=>_ instanceof wa&&_.battleSide!==e);if(p)return{pos:u,enemy:p};i.has(As.getPositionHash(h))||(a.push(h),i.add(As.getPositionHash(h)))}}return null}};class wa extends Aa{constructor(e){super(e);wt(this,"battleSide");wt(this,"pos");wt(this,"radius");wt(this,"hb");wt(this,"fullHealth");wt(this,"health");wt(this,"objective");wt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new gt(te.RED),new gt(te.DARK)]});wt(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new gt(te.RED),new gt(te.ORANGE),new gt(te.YELLOW),new gt(te.WHITE)],amount:30,force:3,size:.8});wt(this,"SPEED",1);this.battleSide=e.battleSide,this.pos=e.pos,this.radius=e.radius,this.fullHealth=e.health,this.health=e.health,this.objective=e.objective,this.hb=new wm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:new F(0,this.radius*3,0),heightFactor:.5,widthFactor:.6})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,a){super.beforeDeath(e,i,a),this.hb.end(i),kp.createExplosion(i,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(e,i,a,o){super.update(e,i,a,o);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=this.objective.fullHealth*.1,this.kill(),kp.createExplosion(a,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(o)<c){this.pos=o;const u=As.createSimpleGrid(a.actorsGrid),h=new n1.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(o,this.objective.position.clone());if(h.length>1){const p=new Nt(h[1][0],h[1][1]);a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(_=>_!==this),a.actorsGrid[p.x][p.y].actors.push(this)}}else{const u=.0015*this.SPEED,f=i*u,h=o.clone().sub(this.pos).normalize();this.pos.add(h.clone().multiplyScalar(f))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new F(this.pos.x,this.mesh.position.y,this.pos.y)}}class i1 extends wa{constructor(e){const i=jt.TILE_SIZE/5,a=jt.TILE_SIZE/2,o=new F(e.pos.x,jt.TILE_SIZE/4,e.pos.y),c=new si({center:o,parts:[{mesh:Je.createCylinder({radius:i,height:a,color:new gt(te.BLUE)}),offset:new F(0,0,0)}]});super({mesh:c,battleSide:Os.ENEMY,pos:e.pos,radius:i,health:10,objective:e.objective});wt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new gt(te.BLUE),new gt(te.DARK_GREEN)],amount:50,size:.5,force:2});wt(this,"SPEED",1.5)}}class r1 extends wa{constructor(e){const i=jt.TILE_SIZE/3,a=jt.TILE_SIZE,o=new F(e.pos.x,jt.TILE_SIZE/2,e.pos.y),c=new si({center:o,parts:[{mesh:Je.createCylinder({radius:i,height:a,color:new gt(te.LIGHT_GREEN)}),offset:new F(0,0,0)}]});super({mesh:c,battleSide:Os.ENEMY,pos:e.pos,radius:i,health:5,objective:e.objective});wt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new gt(te.LIGHT_GREEN),new gt(te.GREEN),new gt(te.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(e,i,a){super.beforeDeath(e,i,a),i.addActor(new i1({pos:a,objective:this.objective}),a)}}class s1 extends wa{constructor(t){const e=jt.TILE_SIZE/4,i=jt.TILE_SIZE,a=new F(t.pos.x,jt.TILE_SIZE/2,t.pos.y),o=new si({center:a,parts:[{mesh:Je.createCylinder({radius:e,height:i,color:new gt(te.RED)}),offset:new F(0,0,0)}]});super({mesh:o,battleSide:Os.ENEMY,pos:t.pos,radius:e,health:10,objective:t.objective})}}const al=class al extends fl{constructor({position:e}){const i=jt.TILE_SIZE/72,a=Je.createSphere({radius:i,color:new gt(te.WHITE)});a.position.set(e.x,e.y,e.z);super({mesh:a});wt(this,"ttl",0);wt(this,"position");wt(this,"velocity");this.position=e,this.velocity=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(jt.TILE_SIZE*5e-5)}update(e,i,a){super.update(e,i,a),this.velocity.y-=5e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>al.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};wt(al,"TTL",1e3);let Ku=al;const va=class va extends fl{constructor(e){const i=jt.TILE_SIZE/48;super({mesh:Je.createSphere({radius:i,color:new gt(te.WHITE)})});wt(this,"battleSide");wt(this,"position");wt(this,"radius");wt(this,"direction");wt(this,"particleTimeout",0);wt(this,"hasDamaged",new Set);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=i}update(e,i,a){var b,v;super.update(e,i,a);const c=.03*i,u=this.direction.clone().normalize(),f=this.position.clone().add(new F(u.x*c,0,u.y*c)),h=jt.TILE_SIZE/4,p=this.position.distanceTo(f),_=Math.max(1,Math.floor(p/h));for(let m=0;m<_;m++){const P=this.position.clone().add(new F(u.x*h,0,u.y*h)),L=[new Nt(P.x-h,P.z-h),new Nt(P.x-h,P.z),new Nt(P.x-h,P.z+h),new Nt(P.x,P.z-h),new Nt(P.x,P.z),new Nt(P.x,P.z+h),new Nt(P.x+h,P.z-h),new Nt(P.x+h,P.z),new Nt(P.x+h,P.z+h)].map(R=>new Nt(Math.floor(R.x),Math.floor(R.y)));for(const R of L){const G=(b=a.actorsGrid[R.x])==null?void 0:b[R.y];if(G){for(const U of G.actors)if(U instanceof wa&&U.battleSide!==this.battleSide&&U.pos.distanceTo(new Nt(this.position.x,this.position.z))<this.radius+U.radius&&!this.hasDamaged.has(U)){U.health-=U.fullHealth*.2,this.hasDamaged.add(U);break}}}}this.position.set(f.x,this.position.y,f.z);const g=a.actorsGrid.length,x=((v=a.actorsGrid[0])==null?void 0:v.length)??0;0<=this.position.x&&this.position.x<g&&0<=this.position.z&&this.position.z<x||this.kill(),this.particleTimeout+=i,this.particleTimeout>va.PARTICLE_TIMEOUT&&(a.addComponent(new Ku({position:this.position.clone()})),this.particleTimeout=this.particleTimeout%va.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};wt(va,"PARTICLE_TIMEOUT",30);let $u=va;const xa=class xa extends Aa{constructor(e){const i=new F(e.position.x,jt.TILE_SIZE,e.position.y),a=Je.createGem({size:jt.TILE_SIZE/4,color:new gt(te.WHITE)}),o=new si({center:i,parts:[{mesh:Je.createBox({width:jt.TILE_SIZE,height:jt.TILE_SIZE/2,depth:jt.TILE_SIZE,color:new gt(te.DARK)}),offset:new F(0,-1*3/4,0)},{mesh:Je.createBox({width:jt.TILE_SIZE*3/4,height:jt.TILE_SIZE,depth:jt.TILE_SIZE*3/4,color:new gt(te.METAL)}),offset:new F(0,0,0)},{mesh:Je.createBox({width:jt.TILE_SIZE,height:jt.TILE_SIZE/2,depth:jt.TILE_SIZE,color:new gt(te.DARK)}),offset:new F(0,jt.TILE_SIZE*3/4,0)},{mesh:a,offset:new F(0,jt.TILE_SIZE*3/2,0)}]});super({mesh:o});wt(this,"gem");wt(this,"position");wt(this,"shootTimeout",0);this.gem=a,this.position=e.position}update(e,i,a,o){super.update(e,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500);const c=this.shootTimeout+i;if(this.shootTimeout=c%xa.SHOOT_TIMEOUT,c>=xa.SHOOT_TIMEOUT){const f=As.findClosestEnemy(a.actorsGrid,this.position.clone(),Os.ALLY),h=f?new Nt(f.enemy.mesh.position.x-this.position.x,f.enemy.mesh.position.z-this.position.y).normalize():null;if(h!==null){const p=new $u({battleSide:Os.ALLY,direction:h,position:new F(this.position.x,this.mesh.position.y,this.position.y)});a.addComponent(p)}}}};wt(xa,"SHOOT_TIMEOUT",1e3);let Ju=xa;class a1 extends Aa{constructor(e){const i=c=>Je.createBox({width:c==="horizontal"?jt.TILE_SIZE:jt.TILE_SIZE/16,height:jt.TILE_SIZE/16,depth:c==="vertical"?jt.TILE_SIZE:jt.TILE_SIZE/16,color:new gt(te.RED)}),a=new F(e.pos.x,jt.TILE_SIZE/16,e.pos.y),o=new si({center:a,parts:[{mesh:i("vertical"),offset:new F(jt.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new F(-15/32,0,0)},{mesh:i("horizontal"),offset:new F(0,0,jt.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new F(0,0,-15/32)}]});super({mesh:o});wt(this,"pos");wt(this,"canPlace",!1);wt(this,"greenMaterial",new Si({color:new gt(te.LIGHT_GREEN)}));wt(this,"redMaterial",new Si({color:new gt(te.RED)}));this.pos=e.pos}update(e,i,a,o){var f;super.update(e,i,a,o);let c=0;e.keyboardHandler.wasPressed("ArrowUp")?c=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?u=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const h=o.clone().add(new Nt(u,c));if(!(0<=h.x&&h.x<a.actorsGrid.length)||!(0<=h.y&&h.y<(((f=a.actorsGrid[0])==null?void 0:f.length)??0)))return;this.pos=h,a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(p=>p!==this),a.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=a.actorsGrid[o.x][o.y].isWalkable&&a.actorsGrid[o.x][o.y].actors.find(h=>h!==this)===void 0,this.canPlace&&e.keyboardHandler.wasPressed("z")){const h=new Ju({position:o.clone()});a.addActor(h,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}else if(this.canPlace&&e.keyboardHandler.wasPressed("x")){const h=new Zb({position:new F(o.x,jt.TILE_SIZE/2,o.y),size:jt.TILE_SIZE});a.addActor(h,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}}graphics(e,i,a){const o=1-Math.exp(-.005*i);this.mesh.position=new F(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*o,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*o),a.camera.position.set(this.mesh.position.x+jt.TILE_SIZE*2,this.mesh.position.y+jt.TILE_SIZE*5,this.mesh.position.z+jt.TILE_SIZE*8),a.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class o1 extends Aa{constructor({health:e,position:i}){const a=jt.TILE_SIZE/2,o=jt.TILE_SIZE*2,c=jt.TILE_SIZE/2,u=new F(i.x,jt.TILE_SIZE,i.y),f=Je.createGem({size:o/4,color:new gt(te.LIGHT_GREEN),basicMaterial:!0}),h=new si({center:u,parts:[{mesh:Je.createBox({color:new gt(te.DARK),depth:c,height:o/4,width:a}),offset:new F(0,-2*3/8,0)},{mesh:f,offset:new F(0,o*2/8,0)},{mesh:new ny(new gt(te.LIGHT_GREEN),20),offset:new F(0,o*2/8,0)}]});super({mesh:h});wt(this,"gem");wt(this,"hb");wt(this,"fullHealth");wt(this,"health");wt(this,"position");this.gem=f,this.position=i,this.health=e,this.fullHealth=e,this.hb=new wm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new F(0,o/2+jt.TILE_SIZE/2,0)})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,a){super.beforeDeath(e,i,a),this.hb.end(i)}update(e,i,a,o){super.update(e,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}class l1 extends fl{constructor(t){const e=()=>{const a=Math.floor(Math.random()*2)+2,o=Array.from({length:a},()=>Je.createCone({radius:t.size/32,height:t.size/4,color:new gt(te.GREEN)})),c=2;o.forEach(h=>h.rotateOnAxis(new F(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-t.size/2+Math.random()*t.size,f=-t.size/2+Math.random()*t.size;return o.map(h=>({mesh:h,offset:new F(u,t.size*19/32,f)}))},i=()=>{const a=Je.createCone({radius:t.size/32,height:t.size/2,color:new gt(te.GREEN)}),o=Je.createSphere({radius:t.size/32,color:Math.random()<.5?new gt(te.PINK):new gt(te.YELLOW)}),c=-t.size/2+Math.random()*t.size,u=-t.size/2+Math.random()*t.size;return[{mesh:a,offset:new F(c,t.size*10/16,u)},{mesh:o,offset:new F(c,t.size*13/16,u)}]};super({mesh:new si({center:t.position,parts:[{mesh:Je.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new gt(te.DARK_GREEN)}),offset:new F(0,t.size*3/8,0)},{mesh:Je.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new gt(te.DIRT)}),offset:new F(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?i():[]]})})}}const c1={buildWorldComponents:r=>{const t=[];for(let e=0;e<r.width;e++)for(let i=0;i<r.height;i++)t.push(new l1({position:new F(e*r.tileSize,-r.tileSize/2,i*r.tileSize),size:r.tileSize,color:new gt(te.DARK_GREEN)}));return t}},Nr=class Nr extends kb{constructor(){super({width:8,height:8});wt(this,"spawnTimeout",0);wt(this,"headQuarters");this.headQuarters=new o1({position:new Nt(Math.floor(this.actorsGrid.length/2),0),health:100})}onStart(){var u;const e=this.actorsGrid.length,i=((u=this.actorsGrid[0])==null?void 0:u.length)??0;this.scene.background=new gt(te.VOID),this.scene.add(new jE(new gt(te.WHITE),new gt(te.DARK_GREEN),3)),c1.buildWorldComponents({width:e,height:i,tileSize:Nr.TILE_SIZE}).forEach(f=>this.addComponent(f));const o=new Nt(Math.floor(e/2),Math.floor(i/2));this.addActor(new a1({pos:o}),o),this.addActor(this.headQuarters,this.headQuarters.position);const c=new sy(Math.max(e,i));this.scene.add(c)}update(e,i){super.update(e,i);const a=this.spawnTimeout+i,o=Math.floor(a/Nr.SPAWN_TIMEOUT);this.spawnTimeout=a%Nr.SPAWN_TIMEOUT;for(let c=0;c<o;c++){const u=Math.floor(Math.random()*this.actorsGrid.length),f=new Nt(u,this.actorsGrid[u].length-1),h={pos:f,objective:this.headQuarters};Math.random()<.5?this.addActor(new s1(h),f):this.addActor(new r1(h),f)}}};wt(Nr,"SPAWN_TIMEOUT",2e3),wt(Nr,"TILE_SIZE",1);let Qu=Nr;var Os=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(Os||{});const dh=new Yb;dh.addContainer("BF",new Qu);dh.setContainer("BF");dh.start();
