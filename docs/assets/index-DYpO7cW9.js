var MS=Object.defineProperty;var SS=(s,t,e)=>t in s?MS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Ht=(s,t,e)=>SS(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="173",ES=0,bd=1,yS=2,Gp=1,TS=2,Gi=3,dr=0,Nn=1,Vi=2,ur=0,ws=1,Rd=2,Cd=3,Ld=4,AS=5,Dr=100,wS=101,bS=102,RS=103,CS=104,LS=200,PS=201,IS=202,DS=203,nu=204,iu=205,US=206,NS=207,FS=208,OS=209,BS=210,zS=211,HS=212,GS=213,VS=214,ru=0,su=1,au=2,Ls=3,ou=4,lu=5,cu=6,uu=7,Vp=0,kS=1,WS=2,fr=0,XS=1,qS=2,YS=3,ZS=4,KS=5,$S=6,JS=7,kp=300,Ps=301,Is=302,fu=303,hu=304,sl=306,du=1e3,Fr=1001,pu=1002,mi=1003,QS=1004,vo=1005,yi=1006,Sc=1007,Or=1008,qi=1009,Wp=1010,Xp=1011,xa=1012,$u=1013,Br=1014,ki=1015,Sa=1016,Ju=1017,Qu=1018,Ds=1020,qp=35902,Yp=1021,Zp=1022,pi=1023,Kp=1024,$p=1025,bs=1026,Us=1027,Jp=1028,ju=1029,Qp=1030,tf=1031,ef=1033,qo=33776,Yo=33777,Zo=33778,Ko=33779,mu=35840,_u=35841,gu=35842,vu=35843,xu=36196,Mu=37492,Su=37496,Eu=37808,yu=37809,Tu=37810,Au=37811,wu=37812,bu=37813,Ru=37814,Cu=37815,Lu=37816,Pu=37817,Iu=37818,Du=37819,Uu=37820,Nu=37821,$o=36492,Fu=36494,Ou=36495,jp=36283,Bu=36284,zu=36285,Hu=36286,jS=3200,tE=3201,tm=0,eE=1,cr="",ii="srgb",Ns="srgb-linear",Qo="linear",De="srgb",rs=7680,Pd=519,nE=512,iE=513,rE=514,em=515,sE=516,aE=517,oE=518,lE=519,Gu=35044,Id="300 es",Wi=2e3,jo=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Vu=180/Math.PI;function hr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function cE(s,t){return(s%t+t)%t}function yc(s,t,e){return(1-e)*s+e*t}function Ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,c=this.y-t.y;return this.x=o*i-c*a+t.x,this.y=o*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,i,a,o,c,u,d,f){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f)}set(t,e,i,a,o,c,u,d,f){const p=this.elements;return p[0]=t,p[1]=a,p[2]=u,p[3]=e,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],p=i[4],_=i[7],g=i[2],x=i[5],y=i[8],b=a[0],v=a[3],m=a[6],P=a[1],L=a[4],R=a[7],H=a[2],N=a[5],U=a[8];return o[0]=c*b+u*P+d*H,o[3]=c*v+u*L+d*N,o[6]=c*m+u*R+d*U,o[1]=f*b+p*P+_*H,o[4]=f*v+p*L+_*N,o[7]=f*m+p*R+_*U,o[2]=g*b+x*P+y*H,o[5]=g*v+x*L+y*N,o[8]=g*m+x*R+y*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8];return e*c*p-e*u*f-i*o*p+i*u*d+a*o*f-a*c*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],_=p*c-u*f,g=u*d-p*o,x=f*o-c*d,y=e*_+i*g+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return t[0]=_*b,t[1]=(a*f-p*i)*b,t[2]=(u*i-a*c)*b,t[3]=g*b,t[4]=(p*e-a*d)*b,t[5]=(a*o-u*e)*b,t[6]=x*b,t[7]=(i*d-f*e)*b,t[8]=(c*e-i*o)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,c,u){const d=Math.cos(o),f=Math.sin(o);return this.set(i*d,i*f,-i*(d*c+f*u)+c+t,-a*f,a*d,-a*(-f*c+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new se;function nm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function uE(){const s=Ma("canvas");return s.style.display="block",s}const Dd={};function ys(s){s in Dd||(Dd[s]=!0,console.warn(s))}function fE(s,t,e){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function hE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ud=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pE(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===De&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===De&&(a.r=Rs(a.r),a.g=Rs(a.g),a.b=Rs(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cr?Qo:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Ns]:{primaries:t,whitePoint:i,transfer:Qo,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:De,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}const Ae=pE();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class mE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Ma("canvas")),ss.width=t.width,ss.height=t.height;const i=ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ss}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ma("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Xi(o[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _E=0;class im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(Ac(a[c].image)):o.push(Ac(a[c]))}else o=Ac(a);i.url=o}return e||(t.images[this.uuid]=i),i}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gE=0;class Rn extends Os{constructor(t=Rn.DEFAULT_IMAGE,e=Rn.DEFAULT_MAPPING,i=Fr,a=Fr,o=yi,c=Or,u=pi,d=qi,f=Rn.DEFAULT_ANISOTROPY,p=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=hr(),this.name="",this.source=new im(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case du:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case du:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=kp;Rn.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,i=0,a=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o;const d=t.elements,f=d[0],p=d[4],_=d[8],g=d[1],x=d[5],y=d[9],b=d[2],v=d[6],m=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-b)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+b)<.1&&Math.abs(y+v)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(f+1)/2,R=(x+1)/2,H=(m+1)/2,N=(p+g)/4,U=(_+b)/4,G=(y+v)/4;return L>R&&L>H?L<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(L),a=N/i,o=U/i):R>H?R<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(R),i=N/a,o=G/a):H<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(H),i=U/o,a=G/o),this.set(i,a,o,e),this}let P=Math.sqrt((v-y)*(v-y)+(_-b)*(_-b)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(v-y)/P,this.y=(_-b)/P,this.z=(g-p)/P,this.w=Math.acos((f+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vE extends Os{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const a={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Rn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new im(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends vE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rm extends Rn{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xE extends Rn{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ea{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,c,u){let d=i[a+0],f=i[a+1],p=i[a+2],_=i[a+3];const g=o[c+0],x=o[c+1],y=o[c+2],b=o[c+3];if(u===0){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=y,t[e+3]=b;return}if(_!==b||d!==g||f!==x||p!==y){let v=1-u;const m=d*g+f*x+p*y+_*b,P=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const H=Math.sqrt(L),N=Math.atan2(H,m*P);v=Math.sin(v*N)/H,u=Math.sin(u*N)/H}const R=u*P;if(d=d*v+g*R,f=f*v+x*R,p=p*v+y*R,_=_*v+b*R,v===1-u){const H=1/Math.sqrt(d*d+f*f+p*p+_*_);d*=H,f*=H,p*=H,_*=H}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,a,o,c){const u=i[a],d=i[a+1],f=i[a+2],p=i[a+3],_=o[c],g=o[c+1],x=o[c+2],y=o[c+3];return t[e]=u*y+p*_+d*x-f*g,t[e+1]=d*y+p*g+f*_-u*x,t[e+2]=f*y+p*x+u*g-d*_,t[e+3]=p*y-u*_-d*g-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,o=t._z,c=t._order,u=Math.cos,d=Math.sin,f=u(i/2),p=u(a/2),_=u(o/2),g=d(i/2),x=d(a/2),y=d(o/2);switch(c){case"XYZ":this._x=g*p*_+f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_+g*x*y;break;case"YZX":this._x=g*p*_+f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_-g*x*y;break;case"XZY":this._x=g*p*_-f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],o=e[8],c=e[1],u=e[5],d=e[9],f=e[2],p=e[6],_=e[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-f)*x,this._z=(c-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(o-f)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-a)/x,this._x=(o+f)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,o=t._z,c=t._w,u=e._x,d=e._y,f=e._z,p=e._w;return this._x=i*p+c*u+a*f-o*d,this._y=a*p+c*d+o*u-i*f,this._z=o*p+c*f+i*d-a*u,this._w=c*p-i*u-a*d-o*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*t._w+i*t._x+a*t._y+o*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*i+e*this._x,this._y=x*a+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,u),_=Math.sin((1-e)*p)/f,g=Math.sin(e*p)/f;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,i=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=t.elements,c=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,o=t.x,c=t.y,u=t.z,d=t.w,f=2*(c*a-u*i),p=2*(u*e-o*a),_=2*(o*i-c*e);return this.x=e+d*f+c*_-u*p,this.y=i+d*p+u*f-o*_,this.z=a+d*_+o*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,o=t.z,c=e.x,u=e.y,d=e.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new O,Fd=new Ea;class ya{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,fi):fi.fromBufferAttribute(o,c),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}const a=t.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ea),Mo.subVectors(this.max,ea),as.subVectors(t.a,ea),os.subVectors(t.b,ea),ls.subVectors(t.c,ea),ir.subVectors(os,as),rr.subVectors(ls,os),Ar.subVectors(as,ls);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!bc(e,as,os,ls,Mo)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,as,os,ls,Mo))?!1:(So.crossVectors(ir,rr),e=[So.x,So.y,So.z],bc(e,as,os,ls,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new O,new O,new O,new O,new O,new O,new O,new O],fi=new O,xo=new ya,as=new O,os=new O,ls=new O,ir=new O,rr=new O,Ar=new O,ea=new O,Mo=new O,So=new O,wr=new O;function bc(s,t,e,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){wr.fromArray(s,o);const u=a.x*Math.abs(wr.x)+a.y*Math.abs(wr.y)+a.z*Math.abs(wr.z),d=t.dot(wr),f=e.dot(wr),p=i.dot(wr);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const ME=new ya,na=new O,Rc=new O;class al{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ME.setFromPoints(t).getCenter(i);let a=0;for(let o=0,c=t.length;o<c;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;na.subVectors(t,this.center);const e=na.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(na,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(na.copy(t.center).add(Rc)),this.expandByPoint(na.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new O,Cc=new O,Eo=new O,sr=new O,Lc=new O,yo=new O,Pc=new O;class sm{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){Cc.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Cc);const o=t.distanceTo(e)*.5,c=-this.direction.dot(Eo),u=sr.dot(this.direction),d=-sr.dot(Eo),f=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,y;if(p>0)if(_=c*d-u,g=c*u-d,y=o*p,_>=0)if(g>=-y)if(g<=y){const b=1/p;_*=b,g*=b,x=_*(_+c*g+2*u)+g*(c*_+g+2*d)+f}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+f;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+f;else g<=-y?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+f):g<=y?(_=0,g=Math.min(Math.max(-o,-d),o),x=g*(g+2*d)+f):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+f);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Cc).addScaledVector(Eo,g),x}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const i=Oi.dot(this.direction),a=Oi.dot(Oi)-i*i,o=t.radius*t.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return f>=0?(i=(t.min.x-g.x)*f,a=(t.max.x-g.x)*f):(i=(t.max.x-g.x)*f,a=(t.min.x-g.x)*f),p>=0?(o=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(o=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-g.z)*_,d=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,d=(t.min.z-g.z)*_),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,a,o){Lc.subVectors(e,t),yo.subVectors(i,t),Pc.crossVectors(Lc,yo);let c=this.direction.dot(Pc),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,t);const d=u*this.direction.dot(yo.crossVectors(sr,yo));if(d<0)return null;const f=u*this.direction.dot(Lc.cross(sr));if(f<0||d+f>c)return null;const p=-u*sr.dot(Pc);return p<0?null:this.at(p/c,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,e,i,a,o,c,u,d,f,p,_,g,x,y,b,v){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,c,u,d,f,p,_,g,x,y,b,v)}set(t,e,i,a,o,c,u,d,f,p,_,g,x,y,b,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=d,m[2]=f,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=b,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/cs.setFromMatrixColumn(t,0).length(),o=1/cs.setFromMatrixColumn(t,1).length(),c=1/cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,o=t.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(t.order==="XYZ"){const g=c*p,x=c*_,y=u*p,b=u*_;e[0]=d*p,e[4]=-d*_,e[8]=f,e[1]=x+y*f,e[5]=g-b*f,e[9]=-u*d,e[2]=b-g*f,e[6]=y+x*f,e[10]=c*d}else if(t.order==="YXZ"){const g=d*p,x=d*_,y=f*p,b=f*_;e[0]=g+b*u,e[4]=y*u-x,e[8]=c*f,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-y,e[6]=b+g*u,e[10]=c*d}else if(t.order==="ZXY"){const g=d*p,x=d*_,y=f*p,b=f*_;e[0]=g-b*u,e[4]=-c*_,e[8]=y+x*u,e[1]=x+y*u,e[5]=c*p,e[9]=b-g*u,e[2]=-c*f,e[6]=u,e[10]=c*d}else if(t.order==="ZYX"){const g=c*p,x=c*_,y=u*p,b=u*_;e[0]=d*p,e[4]=y*f-x,e[8]=g*f+b,e[1]=d*_,e[5]=b*f+g,e[9]=x*f-y,e[2]=-f,e[6]=u*d,e[10]=c*d}else if(t.order==="YZX"){const g=c*d,x=c*f,y=u*d,b=u*f;e[0]=d*p,e[4]=b-g*_,e[8]=y*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-f*p,e[6]=x*_+y,e[10]=g-b*_}else if(t.order==="XZY"){const g=c*d,x=c*f,y=u*d,b=u*f;e[0]=d*p,e[4]=-_,e[8]=f*p,e[1]=g*_+b,e[5]=c*p,e[9]=x*_-y,e[2]=y*_-x,e[6]=u*p,e[10]=b*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SE,t,EE)}lookAt(t,e,i){const a=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ar.crossVectors(i,kn),ar.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ar.crossVectors(i,kn)),ar.normalize(),To.crossVectors(kn,ar),a[0]=ar.x,a[4]=To.x,a[8]=kn.x,a[1]=ar.y,a[5]=To.y,a[9]=kn.y,a[2]=ar.z,a[6]=To.z,a[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],p=i[1],_=i[5],g=i[9],x=i[13],y=i[2],b=i[6],v=i[10],m=i[14],P=i[3],L=i[7],R=i[11],H=i[15],N=a[0],U=a[4],G=a[8],C=a[12],T=a[1],z=a[5],Q=a[9],$=a[13],it=a[2],ut=a[6],nt=a[10],dt=a[14],j=a[3],Et=a[7],wt=a[11],Nt=a[15];return o[0]=c*N+u*T+d*it+f*j,o[4]=c*U+u*z+d*ut+f*Et,o[8]=c*G+u*Q+d*nt+f*wt,o[12]=c*C+u*$+d*dt+f*Nt,o[1]=p*N+_*T+g*it+x*j,o[5]=p*U+_*z+g*ut+x*Et,o[9]=p*G+_*Q+g*nt+x*wt,o[13]=p*C+_*$+g*dt+x*Nt,o[2]=y*N+b*T+v*it+m*j,o[6]=y*U+b*z+v*ut+m*Et,o[10]=y*G+b*Q+v*nt+m*wt,o[14]=y*C+b*$+v*dt+m*Nt,o[3]=P*N+L*T+R*it+H*j,o[7]=P*U+L*z+R*ut+H*Et,o[11]=P*G+L*Q+R*nt+H*wt,o[15]=P*C+L*$+R*dt+H*Nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],c=t[1],u=t[5],d=t[9],f=t[13],p=t[2],_=t[6],g=t[10],x=t[14],y=t[3],b=t[7],v=t[11],m=t[15];return y*(+o*d*_-a*f*_-o*u*g+i*f*g+a*u*x-i*d*x)+b*(+e*d*x-e*f*g+o*c*g-a*c*x+a*f*p-o*d*p)+v*(+e*f*_-e*u*x-o*c*_+i*c*x+o*u*p-i*f*p)+m*(-a*u*p-e*d*_+e*u*g+a*c*_-i*c*g+i*d*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],c=t[4],u=t[5],d=t[6],f=t[7],p=t[8],_=t[9],g=t[10],x=t[11],y=t[12],b=t[13],v=t[14],m=t[15],P=_*v*f-b*g*f+b*d*x-u*v*x-_*d*m+u*g*m,L=y*g*f-p*v*f-y*d*x+c*v*x+p*d*m-c*g*m,R=p*b*f-y*_*f+y*u*x-c*b*x-p*u*m+c*_*m,H=y*_*d-p*b*d-y*u*g+c*b*g+p*u*v-c*_*v,N=e*P+i*L+a*R+o*H;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return t[0]=P*U,t[1]=(b*g*o-_*v*o-b*a*x+i*v*x+_*a*m-i*g*m)*U,t[2]=(u*v*o-b*d*o+b*a*f-i*v*f-u*a*m+i*d*m)*U,t[3]=(_*d*o-u*g*o-_*a*f+i*g*f+u*a*x-i*d*x)*U,t[4]=L*U,t[5]=(p*v*o-y*g*o+y*a*x-e*v*x-p*a*m+e*g*m)*U,t[6]=(y*d*o-c*v*o-y*a*f+e*v*f+c*a*m-e*d*m)*U,t[7]=(c*g*o-p*d*o+p*a*f-e*g*f-c*a*x+e*d*x)*U,t[8]=R*U,t[9]=(y*_*o-p*b*o-y*i*x+e*b*x+p*i*m-e*_*m)*U,t[10]=(c*b*o-y*u*o+y*i*f-e*b*f-c*i*m+e*u*m)*U,t[11]=(p*u*o-c*_*o-p*i*f+e*_*f+c*i*x-e*u*x)*U,t[12]=H*U,t[13]=(p*b*a-y*_*a+y*i*g-e*b*g-p*i*v+e*_*v)*U,t[14]=(y*u*a-c*b*a-y*i*d+e*b*d+c*i*v-e*u*v)*U,t[15]=(c*_*a-p*u*a+p*i*d-e*_*d-c*i*g+e*u*g)*U,this}scale(t){const e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),o=1-i,c=t.x,u=t.y,d=t.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-a*d,f*d+a*u,0,f*u+a*d,p*u+i,p*d-a*c,0,f*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,c){return this.set(1,i,o,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,o=e._x,c=e._y,u=e._z,d=e._w,f=o+o,p=c+c,_=u+u,g=o*f,x=o*p,y=o*_,b=c*p,v=c*_,m=u*_,P=d*f,L=d*p,R=d*_,H=i.x,N=i.y,U=i.z;return a[0]=(1-(b+m))*H,a[1]=(x+R)*H,a[2]=(y-L)*H,a[3]=0,a[4]=(x-R)*N,a[5]=(1-(g+m))*N,a[6]=(v+P)*N,a[7]=0,a[8]=(y+L)*U,a[9]=(v-P)*U,a[10]=(1-(g+b))*U,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let o=cs.set(a[0],a[1],a[2]).length();const c=cs.set(a[4],a[5],a[6]).length(),u=cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],hi.copy(this);const f=1/o,p=1/c,_=1/u;return hi.elements[0]*=f,hi.elements[1]*=f,hi.elements[2]*=f,hi.elements[4]*=p,hi.elements[5]*=p,hi.elements[6]*=p,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,e.setFromRotationMatrix(hi),i.x=o,i.y=c,i.z=u,this}makePerspective(t,e,i,a,o,c,u=Wi){const d=this.elements,f=2*o/(e-t),p=2*o/(i-a),_=(e+t)/(e-t),g=(i+a)/(i-a);let x,y;if(u===Wi)x=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(u===jo)x=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,i,a,o,c,u=Wi){const d=this.elements,f=1/(e-t),p=1/(i-a),_=1/(c-o),g=(e+t)*f,x=(i+a)*p;let y,b;if(u===Wi)y=(c+o)*_,b=-2*_;else if(u===jo)y=o*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=b,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const cs=new O,hi=new ke,SE=new O(0,0,0),EE=new O(1,1,1),ar=new O,To=new O,kn=new O,Od=new ke,Bd=new Ea;class Ai{constructor(t=0,e=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,o=a[0],c=a[4],u=a[8],d=a[1],f=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(Se(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Od,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yE=0;const zd=new O,us=new Ea,Bi=new ke,Ao=new O,ia=new O,TE=new O,AE=new Ea,Hd=new O(1,0,0),Gd=new O(0,1,0),Vd=new O(0,0,1),kd={type:"added"},wE={type:"removed"},fs={type:"childadded",child:null},Ic={type:"childremoved",child:null};class pn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new O,e=new Ai,i=new Ea,a=new O(1,1,1);function o(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ke},normalMatrix:{value:new se}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Hd,t)}rotateY(t){return this.rotateOnAxis(Gd,t)}rotateZ(t){return this.rotateOnAxis(Vd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hd,t)}translateY(t){return this.translateOnAxis(Gd,t)}translateZ(t){return this.translateOnAxis(Vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ao.copy(t):Ao.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ia,Ao,this.up):Bi.lookAt(Ao,ia,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),us.setFromRotationMatrix(Bi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kd),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wE),Ic.child=t,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kd),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,t,TE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,AE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const _=d[f];o(t.shapes,_)}else o(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(t.materials,this.material[d]));a.material=u}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(t.animations,d))}}if(e){const u=c(t.geometries),d=c(t.materials),f=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),y=c(t.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new O,zi=new O,Dc=new O,Hi=new O,hs=new O,ds=new O,Wd=new O,Uc=new O,Nc=new O,Fc=new O,Oc=new Ne,Bc=new Ne,zc=new Ne;class ri{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),di.subVectors(t,e),a.cross(di);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){di.subVectors(a,e),zi.subVectors(i,e),Dc.subVectors(t,e);const c=di.dot(di),u=di.dot(zi),d=di.dot(Dc),f=zi.dot(zi),p=zi.dot(Dc),_=c*f-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(f*d-u*p)*g,y=(c*p-u*d)*g;return o.set(1-x-y,y,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,e,i,a,o,c,u,d){return this.getBarycoord(t,e,i,a,Hi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Hi.x),d.addScaledVector(c,Hi.y),d.addScaledVector(u,Hi.z),d)}static getInterpolatedAttribute(t,e,i,a,o,c){return Oc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),Oc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,i),zc.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(Oc,o.x),c.addScaledVector(Bc,o.y),c.addScaledVector(zc,o.z),c}static isFrontFacing(t,e,i,a){return di.subVectors(i,e),zi.subVectors(t,e),di.cross(zi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return ri.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,o=this.c;let c,u;hs.subVectors(a,i),ds.subVectors(o,i),Uc.subVectors(t,i);const d=hs.dot(Uc),f=ds.dot(Uc);if(d<=0&&f<=0)return e.copy(i);Nc.subVectors(t,a);const p=hs.dot(Nc),_=ds.dot(Nc);if(p>=0&&_<=p)return e.copy(a);const g=d*_-p*f;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),e.copy(i).addScaledVector(hs,c);Fc.subVectors(t,o);const x=hs.dot(Fc),y=ds.dot(Fc);if(y>=0&&x<=y)return e.copy(o);const b=x*f-d*y;if(b<=0&&f>=0&&y<=0)return u=f/(f-y),e.copy(i).addScaledVector(ds,u);const v=p*y-x*_;if(v<=0&&_-p>=0&&x-y>=0)return Wd.subVectors(o,a),u=(_-p)/(_-p+(x-y)),e.copy(a).addScaledVector(Wd,u);const m=1/(v+b+g);return c=b*m,u=g*m,e.copy(i).addScaledVector(hs,c).addScaledVector(ds,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Hc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Ae.workingColorSpace){if(t=cE(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,c=2*i-o;this.r=Hc(c,o,t+1/3),this.g=Hc(c,o,t),this.b=Hc(c,o,t-1/3)}return Ae.toWorkingColorSpace(this,a),this}setStyle(t,e=ii){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ii){const i=om[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Ae.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Se(Mn.r*255,0,255))*65536+Math.round(Se(Mn.g*255,0,255))*256+Math.round(Se(Mn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,a=Mn.g,o=Mn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const _=c-u;switch(f=p<=.5?_/(c+u):_/(2-c-u),c){case i:d=(a-o)/_+(a<o?6:0);break;case a:d=(o-i)/_+2;break;case o:d=(i-a)/_+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ii){Ae.fromWorkingColorSpace(Mn.copy(this),t);const e=Mn.r,i=Mn.g,a=Mn.b;return t!==ii?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(or),this.setHSL(or.h+t,or.s+e,or.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(or),t.getHSL(wo);const i=yc(or.h,wo.h,e),a=yc(or.s,wo.s,e),o=yc(or.l,wo.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ct;Ct.NAMES=om;let bE=0;class Gr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=ws,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nu&&(i.blendSrc=this.blendSrc),this.blendDst!==iu&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(e){const o=a(t.textures),c=a(t.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mi extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new O,bo=new Ut;let RE=0;class _i{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gu&&(t.usage=this.usage),t}}class lm extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cm extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Qe extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}let CE=0;const ei=new ke,Gc=new pn,ps=new O,Wn=new ya,ra=new ya,un=new O;class qn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nm(t)?cm:lm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,e,i){return ei.makeTranslation(t,e,i),this.applyMatrix4(ei),this}scale(t,e,i){return ei.makeScale(t,e,i),this.applyMatrix4(ei),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,o=t.length;a<o;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qe(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const o=t[a];e.setXYZ(a,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let o=0,c=e.length;o<c;o++){const u=e[o];ra.setFromBufferAttribute(u),this.morphTargetsRelative?(un.addVectors(Wn.min,ra.min),Wn.expandByPoint(un),un.addVectors(Wn.max,ra.max),Wn.expandByPoint(un)):(Wn.expandByPoint(ra.min),Wn.expandByPoint(ra.max))}Wn.getCenter(i);let a=0;for(let o=0,c=t.count;o<c;o++)un.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(un));if(e)for(let o=0,c=e.length;o<c;o++){const u=e[o],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)un.fromBufferAttribute(u,f),d&&(ps.fromBufferAttribute(t,f),un.add(ps)),a=Math.max(a,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let G=0;G<i.count;G++)u[G]=new O,d[G]=new O;const f=new O,p=new O,_=new O,g=new Ut,x=new Ut,y=new Ut,b=new O,v=new O;function m(G,C,T){f.fromBufferAttribute(i,G),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,T),g.fromBufferAttribute(o,G),x.fromBufferAttribute(o,C),y.fromBufferAttribute(o,T),p.sub(f),_.sub(f),x.sub(g),y.sub(g);const z=1/(x.x*y.y-y.x*x.y);isFinite(z)&&(b.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(z),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(z),u[G].add(b),u[C].add(b),u[T].add(b),d[G].add(v),d[C].add(v),d[T].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let G=0,C=P.length;G<C;++G){const T=P[G],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new O,R=new O,H=new O,N=new O;function U(G){H.fromBufferAttribute(a,G),N.copy(H);const C=u[G];L.copy(C),L.sub(H.multiplyScalar(H.dot(C))).normalize(),R.crossVectors(N,C);const z=R.dot(d[G])<0?-1:1;c.setXYZW(G,L.x,L.y,L.z,z)}for(let G=0,C=P.length;G<C;++G){const T=P[G],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)U(t.getX($+0)),U(t.getX($+1)),U(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new O,o=new O,c=new O,u=new O,d=new O,f=new O,p=new O,_=new O;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),b=t.getX(g+1),v=t.getX(g+2);a.fromBufferAttribute(e,y),o.fromBufferAttribute(e,b),c.fromBufferAttribute(e,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),f.fromBufferAttribute(i,v),u.add(p),d.add(p),f.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=e.count;g<x;g+=3)a.fromBufferAttribute(e,g+0),o.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(u,d){const f=u.array,p=u.itemSize,_=u.normalized,g=new f.constructor(d.length*p);let x=0,y=0;for(let b=0,v=d.length;b<v;b++){u.isInterleavedBufferAttribute?x=d[b]*u.data.stride+u.offset:x=d[b]*p;for(let m=0;m<p;m++)g[y++]=f[x++]}return new _i(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],f=t(d,i);e.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let p=0,_=f.length;p<_;p++){const g=f[p],x=t(g,i);d.push(x)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const a={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let _=0,g=f.length;_<g;_++){const x=f[_];p.push(x.toJSON(t.data))}p.length>0&&(a[d]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const f in a){const p=a[f];this.setAttribute(f,p.clone(e))}const o=t.morphAttributes;for(const f in o){const p=[],_=o[f];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xd=new ke,br=new sm,Ro=new al,qd=new O,Co=new O,Lo=new O,Po=new O,Vc=new O,Io=new O,Yd=new O,Do=new O;class bn extends pn{constructor(t=new qn,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(o&&u){Io.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const p=u[d],_=o[d];p!==0&&(Vc.fromBufferAttribute(_,t),c?Io.addScaledVector(Vc,p):Io.addScaledVector(Vc.sub(e),p))}e.add(Io)}return e}raycast(t,e){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(o),br.copy(t.ray).recast(t.near),!(Ro.containsPoint(br.origin)===!1&&(br.intersectSphere(Ro,qd)===null||br.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&(Xd.copy(o).invert(),br.copy(t.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,br)))}_computeIntersections(t,e,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let R=P,H=L;R<H;R+=3){const N=u.getX(R),U=u.getX(R+1),G=u.getX(R+2);a=Uo(this,m,t,i,f,p,_,N,U,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),b=Math.min(u.count,x.start+x.count);for(let v=y,m=b;v<m;v+=3){const P=u.getX(v),L=u.getX(v+1),R=u.getX(v+2);a=Uo(this,c,t,i,f,p,_,P,L,R),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,b=g.length;y<b;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let R=P,H=L;R<H;R+=3){const N=R,U=R+1,G=R+2;a=Uo(this,m,t,i,f,p,_,N,U,G),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=v.materialIndex,e.push(a))}}else{const y=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let v=y,m=b;v<m;v+=3){const P=v,L=v+1,R=v+2;a=Uo(this,c,t,i,f,p,_,P,L,R),a&&(a.faceIndex=Math.floor(v/3),e.push(a))}}}}function LE(s,t,e,i,a,o,c,u){let d;if(t.side===Nn?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,t.side===dr,u),d===null)return null;Do.copy(u),Do.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Do);return f<e.near||f>e.far?null:{distance:f,point:Do.clone(),object:s}}function Uo(s,t,e,i,a,o,c,u,d,f){s.getVertexPosition(u,Co),s.getVertexPosition(d,Lo),s.getVertexPosition(f,Po);const p=LE(s,t,e,i,Co,Lo,Po,Yd);if(p){const _=new O;ri.getBarycoord(Yd,Co,Lo,Po,_),a&&(p.uv=ri.getInterpolatedAttribute(a,u,d,f,_,new Ut)),o&&(p.uv1=ri.getInterpolatedAttribute(o,u,d,f,_,new Ut)),c&&(p.normal=ri.getInterpolatedAttribute(c,u,d,f,_,new O),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:f,normal:new O,materialIndex:0};ri.getNormal(Co,Lo,Po,g.normal),p.face=g,p.barycoord=_}return p}class Hr extends qn{constructor(t=1,e=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],f=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,i,e,t,c,o,0),y("z","y","x",1,-1,i,e,-t,c,o,1),y("x","z","y",1,1,t,i,e,a,c,2),y("x","z","y",1,-1,t,i,-e,a,c,3),y("x","y","z",1,-1,t,e,i,a,o,4),y("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(_,2));function y(b,v,m,P,L,R,H,N,U,G,C){const T=R/U,z=H/G,Q=R/2,$=H/2,it=N/2,ut=U+1,nt=G+1;let dt=0,j=0;const Et=new O;for(let wt=0;wt<nt;wt++){const Nt=wt*z-$;for(let le=0;le<ut;le++){const Ce=le*T-Q;Et[b]=Ce*P,Et[v]=Nt*L,Et[m]=it,f.push(Et.x,Et.y,Et.z),Et[b]=0,Et[v]=0,Et[m]=N>0?1:-1,p.push(Et.x,Et.y,Et.z),_.push(le/U),_.push(1-wt/G),dt+=1}}for(let wt=0;wt<G;wt++)for(let Nt=0;Nt<U;Nt++){const le=g+Nt+ut*wt,Ce=g+Nt+ut*(wt+1),ot=g+(Nt+1)+ut*(wt+1),_t=g+(Nt+1)+ut*wt;d.push(le,Ce,_t),d.push(Ce,ot,_t),j+=6}u.addGroup(x,j,C),x+=j,g+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function wn(s){const t={};for(let e=0;e<s.length;e++){const i=Fs(s[e]);for(const a in i)t[a]=i[a]}return t}function PE(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function um(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const IE={clone:Fs,merge:wn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=PE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new O,Zd=new Ut,Kd=new Ut;class Xn extends fm{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,Kd),e.subVectors(Kd,Zd)}setViewOffset(t,e,i,a,o,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/d,e-=c.offsetY*i/f,a*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,_s=1;class NE extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(ms,_s,t,e);a.layers=this.layers,this.add(a);const o=new Xn(ms,_s,t,e);o.layers=this.layers,this.add(o);const c=new Xn(ms,_s,t,e);c.layers=this.layers,this.add(c);const u=new Xn(ms,_s,t,e);u.layers=this.layers,this.add(u);const d=new Xn(ms,_s,t,e);d.layers=this.layers,this.add(d);const f=new Xn(ms,_s,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,o,c,u,d]=e;for(const f of e)this.remove(f);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,f,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,u),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,f),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class hm extends Rn{constructor(t,e,i,a,o,c,u,d,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,i,a,o,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class FE extends zr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new hm(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Hr(5,5,5),o=new pr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ur});o.uniforms.tEquirect.value=e;const c=new bn(a,o),u=e.minFilter;return e.minFilter===Or&&(e.minFilter=yi),new NE(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,a){const o=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(o)}}class No extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const b of t.hand.values()){const v=e.getJointPose(b,i),m=this._getHandJoint(f,b);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;f.inputState.pinching&&g>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new No;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class BE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gu,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let a=0,o=this.stride;a<o;a++)this.array[t+a]=e.array[i+a];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new O;class tl{constructor(t,e,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ei(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),a=Ue(a,this.array),o=Ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[a+o])}return new _i(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new tl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ku extends Gr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let gs;const sa=new O,vs=new O,xs=new O,Ms=new Ut,aa=new Ut,dm=new ke,Fo=new O,oa=new O,Oo=new O,$d=new Ut,Wc=new Ut,Jd=new Ut;class Qd extends pn{constructor(t=new ku){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new qn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zE(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new tl(i,3,0,!1)),gs.setAttribute("uv",new tl(i,2,3,!1))}this.geometry=gs,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),dm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;Bo(Fo.set(-.5,-.5,0),xs,c,vs,a,o),Bo(oa.set(.5,-.5,0),xs,c,vs,a,o),Bo(Oo.set(.5,.5,0),xs,c,vs,a,o),$d.set(0,0),Wc.set(1,0),Jd.set(1,1);let u=t.ray.intersectTriangle(Fo,oa,Oo,!1,sa);if(u===null&&(Bo(oa.set(-.5,.5,0),xs,c,vs,a,o),Wc.set(0,1),u=t.ray.intersectTriangle(Fo,Oo,oa,!1,sa),u===null))return;const d=t.ray.origin.distanceTo(sa);d<t.near||d>t.far||e.push({distance:d,point:sa.clone(),uv:ri.getInterpolation(sa,Fo,oa,Oo,$d,Wc,Jd,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bo(s,t,e,i,a,o){Ms.subVectors(s,e).addScalar(.5).multiply(i),a!==void 0?(aa.x=o*Ms.x-a*Ms.y,aa.y=a*Ms.x+o*Ms.y):aa.copy(Ms),s.copy(t),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(dm)}const Xc=new O,HE=new O,GE=new se;class Pr{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Xc.subVectors(i,e).cross(HE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Xc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||GE.getNormalMatrix(t),a=this.coplanarPoint(Xc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new al,zo=new O;class nf{constructor(t=new Pr,e=new Pr,i=new Pr,a=new Pr,o=new Pr,c=new Pr){this.planes=[t,e,i,a,o,c]}set(t,e,i,a,o,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,a=t.elements,o=a[0],c=a[1],u=a[2],d=a[3],f=a[4],p=a[5],_=a[6],g=a[7],x=a[8],y=a[9],b=a[10],v=a[11],m=a[12],P=a[13],L=a[14],R=a[15];if(i[0].setComponents(d-o,g-f,v-x,R-m).normalize(),i[1].setComponents(d+o,g+f,v+x,R+m).normalize(),i[2].setComponents(d+c,g+p,v+y,R+P).normalize(),i[3].setComponents(d-c,g-p,v-y,R-P).normalize(),i[4].setComponents(d-u,g-_,v-b,R-L).normalize(),e===Wi)i[5].setComponents(d+u,g+_,v+b,R+L).normalize();else if(e===jo)i[5].setComponents(u,_,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(t){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(zo.x=a.normal.x>0?t.max.x:t.min.x,zo.y=a.normal.y>0?t.max.y:t.min.y,zo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pm extends Gr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const el=new O,nl=new O,jd=new ke,la=new sm,Ho=new al,qc=new O,tp=new O;class VE extends pn{constructor(t=new qn,e=new pm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,o=e.count;a<o;a++)el.fromBufferAttribute(e,a-1),nl.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=el.distanceTo(nl);t.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(a),Ho.radius+=o,t.ray.intersectsSphere(Ho)===!1)return;jd.copy(a).invert(),la.copy(t.ray).applyMatrix4(jd);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let b=x,v=y-1;b<v;b+=f){const m=p.getX(b),P=p.getX(b+1),L=Go(this,t,la,d,m,P,b);L&&e.push(L)}if(this.isLineLoop){const b=p.getX(y-1),v=p.getX(x),m=Go(this,t,la,d,b,v,y-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let b=x,v=y-1;b<v;b+=f){const m=Go(this,t,la,d,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){const b=Go(this,t,la,d,y-1,x,y-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Go(s,t,e,i,a,o,c){const u=s.geometry.attributes.position;if(el.fromBufferAttribute(u,a),nl.fromBufferAttribute(u,o),e.distanceSqToSegment(el,nl,qc,tp)>i)return;qc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(qc);if(!(f<t.near||f>t.far))return{distance:f,point:tp.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const ep=new O,np=new O;class kE extends VE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let a=0,o=e.count;a<o;a+=2)ep.fromBufferAttribute(e,a),np.fromBufferAttribute(e,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ep.distanceTo(np);t.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mm extends Rn{constructor(t,e,i,a,o,c,u,d,f,p=bs){if(p!==bs&&p!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===bs&&(i=Br),i===void 0&&p===Us&&(i=Ds),super(null,a,o,c,u,d,p,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:mi,this.minFilter=d!==void 0?d:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ol extends qn{constructor(t=1,e=1,i=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};const f=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],g=[],x=[];let y=0;const b=[],v=i/2;let m=0;P(),c===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(g,3)),this.setAttribute("uv",new Qe(x,2));function P(){const R=new O,H=new O;let N=0;const U=(e-t)/i;for(let G=0;G<=o;G++){const C=[],T=G/o,z=T*(e-t)+t;for(let Q=0;Q<=a;Q++){const $=Q/a,it=$*d+u,ut=Math.sin(it),nt=Math.cos(it);H.x=z*ut,H.y=-T*i+v,H.z=z*nt,_.push(H.x,H.y,H.z),R.set(ut,U,nt).normalize(),g.push(R.x,R.y,R.z),x.push($,1-T),C.push(y++)}b.push(C)}for(let G=0;G<a;G++)for(let C=0;C<o;C++){const T=b[C][G],z=b[C+1][G],Q=b[C+1][G+1],$=b[C][G+1];(t>0||C!==0)&&(p.push(T,z,$),N+=3),(e>0||C!==o-1)&&(p.push(z,Q,$),N+=3)}f.addGroup(m,N,0),m+=N}function L(R){const H=y,N=new Ut,U=new O;let G=0;const C=R===!0?t:e,T=R===!0?1:-1;for(let Q=1;Q<=a;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),y++;const z=y;for(let Q=0;Q<=a;Q++){const it=Q/a*d+u,ut=Math.cos(it),nt=Math.sin(it);U.x=C*nt,U.y=v*T,U.z=C*ut,_.push(U.x,U.y,U.z),g.push(0,T,0),N.x=ut*.5+.5,N.y=nt*.5*T+.5,x.push(N.x,N.y),y++}for(let Q=0;Q<a;Q++){const $=H+Q,it=z+Q;R===!0?p.push(it,it+1,$):p.push(it+1,it,$),G+=3}f.addGroup(m,G,R===!0?1:2),m+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rf extends ol{constructor(t=1,e=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,t,e,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(t){return new rf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sf extends qn{constructor(t=[],e=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:a};const o=[],c=[];u(a),f(i),p(),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(o.slice(),3)),this.setAttribute("uv",new Qe(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const L=new O,R=new O,H=new O;for(let N=0;N<e.length;N+=3)x(e[N+0],L),x(e[N+1],R),x(e[N+2],H),d(L,R,H,P)}function d(P,L,R,H){const N=H+1,U=[];for(let G=0;G<=N;G++){U[G]=[];const C=P.clone().lerp(R,G/N),T=L.clone().lerp(R,G/N),z=N-G;for(let Q=0;Q<=z;Q++)Q===0&&G===N?U[G][Q]=C:U[G][Q]=C.clone().lerp(T,Q/z)}for(let G=0;G<N;G++)for(let C=0;C<2*(N-G)-1;C++){const T=Math.floor(C/2);C%2===0?(g(U[G][T+1]),g(U[G+1][T]),g(U[G][T])):(g(U[G][T+1]),g(U[G+1][T+1]),g(U[G+1][T]))}}function f(P){const L=new O;for(let R=0;R<o.length;R+=3)L.x=o[R+0],L.y=o[R+1],L.z=o[R+2],L.normalize().multiplyScalar(P),o[R+0]=L.x,o[R+1]=L.y,o[R+2]=L.z}function p(){const P=new O;for(let L=0;L<o.length;L+=3){P.x=o[L+0],P.y=o[L+1],P.z=o[L+2];const R=v(P)/2/Math.PI+.5,H=m(P)/Math.PI+.5;c.push(R,1-H)}y(),_()}function _(){for(let P=0;P<c.length;P+=6){const L=c[P+0],R=c[P+2],H=c[P+4],N=Math.max(L,R,H),U=Math.min(L,R,H);N>.9&&U<.1&&(L<.2&&(c[P+0]+=1),R<.2&&(c[P+2]+=1),H<.2&&(c[P+4]+=1))}}function g(P){o.push(P.x,P.y,P.z)}function x(P,L){const R=P*3;L.x=t[R+0],L.y=t[R+1],L.z=t[R+2]}function y(){const P=new O,L=new O,R=new O,H=new O,N=new Ut,U=new Ut,G=new Ut;for(let C=0,T=0;C<o.length;C+=9,T+=6){P.set(o[C+0],o[C+1],o[C+2]),L.set(o[C+3],o[C+4],o[C+5]),R.set(o[C+6],o[C+7],o[C+8]),N.set(c[T+0],c[T+1]),U.set(c[T+2],c[T+3]),G.set(c[T+4],c[T+5]),H.copy(P).add(L).add(R).divideScalar(3);const z=v(H);b(N,T+0,P,z),b(U,T+2,L,z),b(G,T+4,R,z)}}function b(P,L,R,H){H<0&&P.x===1&&(c[L]=P.x-1),R.x===0&&R.z===0&&(c[L]=H/2/Math.PI+.5)}function v(P){return Math.atan2(P.z,-P.x)}function m(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sf(t.vertices,t.indices,t.radius,t.details)}}class af extends sf{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new af(t.radius,t.detail)}}class ll extends qn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const o=t/2,c=e/2,u=Math.floor(i),d=Math.floor(a),f=u+1,p=d+1,_=t/u,g=e/d,x=[],y=[],b=[],v=[];for(let m=0;m<p;m++){const P=m*g-c;for(let L=0;L<f;L++){const R=L*_-o;y.push(R,-P,0),b.push(0,0,1),v.push(L/u),v.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<u;P++){const L=P+f*m,R=P+f*(m+1),H=P+1+f*(m+1),N=P+1+f*m;x.push(L,R,N),x.push(R,H,N)}this.setIndex(x),this.setAttribute("position",new Qe(y,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.widthSegments,t.heightSegments)}}class of extends qn{constructor(t=1,e=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const p=[],_=new O,g=new O,x=[],y=[],b=[],v=[];for(let m=0;m<=i;m++){const P=[],L=m/i;let R=0;m===0&&c===0?R=.5/e:m===i&&d===Math.PI&&(R=-.5/e);for(let H=0;H<=e;H++){const N=H/e;_.x=-t*Math.cos(a+N*o)*Math.sin(c+L*u),_.y=t*Math.cos(c+L*u),_.z=t*Math.sin(a+N*o)*Math.sin(c+L*u),y.push(_.x,_.y,_.z),g.copy(_).normalize(),b.push(g.x,g.y,g.z),v.push(N+R,1-L),P.push(f++)}p.push(P)}for(let m=0;m<i;m++)for(let P=0;P<e;P++){const L=p[m][P+1],R=p[m][P],H=p[m+1][P],N=p[m+1][P+1];(m!==0||c>0)&&x.push(L,R,N),(m!==i-1||d<Math.PI)&&x.push(R,H,N)}this.setIndex(x),this.setAttribute("position",new Qe(y,3)),this.setAttribute("normal",new Qe(b,3)),this.setAttribute("uv",new Qe(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new of(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ss extends Gr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tm,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class WE extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XE extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ip={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qE{constructor(t,e,i){const a=this;let o=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){const _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=f.length;_<g;_+=2){const x=f[_],y=f[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null}}}const YE=new qE;class lf{constructor(t){this.manager=t!==void 0?t:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,o){i.load(t,a,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}lf.DEFAULT_MATERIAL_NAME="__DEFAULT";class ZE extends lf{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,c=ip.get(t);if(c!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(c),o.manager.itemEnd(t)},0),c;const u=Ma("img");function d(){p(),ip.add(t,this),e&&e(this),o.manager.itemEnd(t)}function f(_){p(),a&&a(_),o.manager.itemError(t),o.manager.itemEnd(t)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(t),u.src=t,u}}class rp extends lf{constructor(t){super(t)}load(t,e,i,a){const o=new Rn,c=new ZE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){o.image=u,o.needsUpdate=!0,e!==void 0&&e(o)},i,a),o}}class _m extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class KE extends _m{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Yc=new ke,sp=new O,ap=new O;class $E{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nf,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;sp.setFromMatrixPosition(t.matrixWorld),e.position.copy(sp),ap.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ap),e.updateMatrixWorld(),Yc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const op=new ke,ca=new O,Zc=new O;class JE extends $E{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Ne(2,1,1,1),new Ne(0,1,1,1),new Ne(3,1,1,1),new Ne(1,1,1,1),new Ne(3,0,1,1),new Ne(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,a=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ca.setFromMatrixPosition(t.matrixWorld),i.position.copy(ca),Zc.copy(i.position),Zc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Zc),i.updateMatrixWorld(),a.makeTranslation(-ca.x,-ca.y,-ca.z),op.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op)}}class QE extends _m{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new JE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jE extends fm{constructor(t=-1,e=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-t,c=i+t,u=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ty extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ey extends kE{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],a=new qn;a.setAttribute("position",new Qe(e,3)),a.setAttribute("color",new Qe(i,3));const o=new pm({vertexColors:!0,toneMapped:!1});super(a,o),this.type="AxesHelper"}setColors(t,e,i){const a=new Ct,o=this.geometry.attributes.color.array;return a.set(t),a.toArray(o,0),a.toArray(o,3),a.set(e),a.toArray(o,6),a.toArray(o,9),a.set(i),a.toArray(o,12),a.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function lp(s,t,e,i){const a=ny(i);switch(e){case Yp:return s*t;case Kp:return s*t;case $p:return s*t*2;case Jp:return s*t/a.components*a.byteLength;case ju:return s*t/a.components*a.byteLength;case Qp:return s*t*2/a.components*a.byteLength;case tf:return s*t*2/a.components*a.byteLength;case Zp:return s*t*3/a.components*a.byteLength;case pi:return s*t*4/a.components*a.byteLength;case ef:return s*t*4/a.components*a.byteLength;case qo:case Yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _u:case vu:return Math.max(s,16)*Math.max(t,8)/4;case mu:case gu:return Math.max(s,8)*Math.max(t,8)/2;case xu:case Mu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Su:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Eu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Tu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Au:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case bu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Lu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $o:case Fu:case Ou:return Math.ceil(s/4)*Math.ceil(t/4)*16;case jp:case Bu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zu:case Hu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ny(s){switch(s){case qi:case Wp:return{byteLength:1,components:1};case xa:case Xp:case Sa:return{byteLength:2,components:1};case Ju:case Qu:return{byteLength:2,components:4};case Br:case $u:case ki:return{byteLength:4,components:1};case qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gm(){let s=null,t=!1,e=null,i=null;function a(o,c){e(o,c),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function iy(s){const t=new WeakMap;function e(u,d){const f=u.array,p=u.usage,_=f.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,d,f){const p=d.array,_=d.updateRanges;if(s.bindBuffer(f,u),_.length===0)s.bufferSubData(f,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],b=_[x];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++g,_[g]=b)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const b=_[x];s.bufferSubData(f,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(s.deleteBuffer(d.buffer),t.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:a,remove:o,update:c}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
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
#endif`,oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
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
#endif`,hy=`#ifdef USE_BATCHING
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
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gy=`#ifdef USE_IRIDESCENCE
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
#endif`,vy=`#ifdef USE_BUMPMAP
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,by=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eT=`PhysicalMaterial material;
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
#endif`,nT=`struct PhysicalMaterial {
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
}`,iT=`
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dT=`#if defined( USE_POINTS_UV )
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
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
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
#endif`,wT=`#ifdef USE_NORMALMAP
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
#endif`,bT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CT=`#ifdef USE_CLEARCOATMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VT=`float getShadowMask() {
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
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,XT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,fA=`#define DISTANCE
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
}`,hA=`#define DISTANCE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,_A=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#define LAMBERT
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
}`,MA=`#define LAMBERT
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
}`,SA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
}`,yA=`#define NORMAL
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
}`,TA=`#define NORMAL
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
}`,AA=`#define PHONG
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
}`,wA=`#define PHONG
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
}`,bA=`#define STANDARD
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
}`,RA=`#define STANDARD
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
}`,CA=`#define TOON
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
}`,LA=`#define TOON
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
}`,PA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,UA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
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
}`,FA=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:ry,alphahash_pars_fragment:sy,alphamap_fragment:ay,alphamap_pars_fragment:oy,alphatest_fragment:ly,alphatest_pars_fragment:cy,aomap_fragment:uy,aomap_pars_fragment:fy,batching_pars_vertex:hy,batching_vertex:dy,begin_vertex:py,beginnormal_vertex:my,bsdfs:_y,iridescence_fragment:gy,bumpmap_pars_fragment:vy,clipping_planes_fragment:xy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:Ey,color_fragment:yy,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:wy,common:by,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Py,emissivemap_fragment:Iy,emissivemap_pars_fragment:Dy,colorspace_fragment:Uy,colorspace_pars_fragment:Ny,envmap_fragment:Fy,envmap_common_pars_fragment:Oy,envmap_pars_fragment:By,envmap_pars_vertex:zy,envmap_physical_pars_fragment:$y,envmap_vertex:Hy,fog_vertex:Gy,fog_pars_vertex:Vy,fog_fragment:ky,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:Zy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:jy,lights_phong_pars_fragment:tT,lights_physical_fragment:eT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:rT,lights_fragment_end:sT,logdepthbuf_fragment:aT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:_T,morphcolor_vertex:gT,morphnormal_vertex:vT,morphtarget_pars_vertex:xT,morphtarget_vertex:MT,normal_fragment_begin:ST,normal_fragment_maps:ET,normal_pars_fragment:yT,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:wT,clearcoat_normal_fragment_begin:bT,clearcoat_normal_fragment_maps:RT,clearcoat_pars_fragment:CT,iridescence_pars_fragment:LT,opaque_fragment:PT,packing:IT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:NT,dithering_pars_fragment:FT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:HT,shadowmap_vertex:GT,shadowmask_pars_fragment:VT,skinbase_vertex:kT,skinning_pars_vertex:WT,skinning_vertex:XT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:ZT,tonemapping_fragment:KT,tonemapping_pars_fragment:$T,transmission_fragment:JT,transmission_pars_fragment:QT,uv_pars_fragment:jT,uv_pars_vertex:tA,uv_vertex:eA,worldpos_vertex:nA,background_vert:iA,background_frag:rA,backgroundCube_vert:sA,backgroundCube_frag:aA,cube_vert:oA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distanceRGBA_vert:fA,distanceRGBA_frag:hA,equirect_vert:dA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:_A,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:MA,meshmatcap_vert:SA,meshmatcap_frag:EA,meshnormal_vert:yA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:wA,meshphysical_vert:bA,meshphysical_frag:RA,meshtoon_vert:CA,meshtoon_frag:LA,points_vert:PA,points_frag:IA,shadow_vert:DA,shadow_frag:UA,sprite_vert:NA,sprite_frag:FA},xt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Si={basic:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:wn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:wn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:wn([xt.points,xt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:wn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:wn([xt.common,xt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:wn([xt.sprite,xt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:wn([xt.common,xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:wn([xt.lights,xt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Vo={r:0,b:0,g:0},Cr=new Ai,OA=new ke;function BA(s,t,e,i,a,o,c){const u=new Ct(0);let d=o===!0?0:1,f,p,_=null,g=0,x=null;function y(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?e:t).get(R)),R}function b(L){let R=!1;const H=y(L);H===null?m(u,d):H&&H.isColor&&(m(H,1),R=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,R){const H=y(R);H&&(H.isCubeTexture||H.mapping===sl)?(p===void 0&&(p=new bn(new Hr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Fs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Cr.copy(R.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=H,p.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(Cr)),p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==De,(_!==H||g!==H.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,g=H.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):H&&H.isTexture&&(f===void 0&&(f=new bn(new ll(2,2),new pr({name:"BackgroundMaterial",uniforms:Fs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=H,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Ae.getTransfer(H.colorSpace)!==De,H.matrixAutoUpdate===!0&&H.updateMatrix(),f.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||g!==H.version||x!==s.toneMapping)&&(f.material.needsUpdate=!0,_=H,g=H.version,x=s.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function m(L,R){L.getRGB(Vo,um(s)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,R,c)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),d=R,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,m(u,d)},render:b,addToRenderList:v,dispose:P}}function zA(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(T,z,Q,$,it){let ut=!1;const nt=_($,Q,z);o!==nt&&(o=nt,f(o.object)),ut=x(T,$,Q,it),ut&&y(T,$,Q,it),it!==null&&t.update(it,s.ELEMENT_ARRAY_BUFFER),(ut||c)&&(c=!1,R(T,z,Q,$),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function d(){return s.createVertexArray()}function f(T){return s.bindVertexArray(T)}function p(T){return s.deleteVertexArray(T)}function _(T,z,Q){const $=Q.wireframe===!0;let it=i[T.id];it===void 0&&(it={},i[T.id]=it);let ut=it[z.id];ut===void 0&&(ut={},it[z.id]=ut);let nt=ut[$];return nt===void 0&&(nt=g(d()),ut[$]=nt),nt}function g(T){const z=[],Q=[],$=[];for(let it=0;it<e;it++)z[it]=0,Q[it]=0,$[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,z,Q,$){const it=o.attributes,ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){const wt=it[j];let Nt=ut[j];if(Nt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Nt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Nt=T.instanceColor)),wt===void 0||wt.attribute!==Nt||Nt&&wt.data!==Nt.data)return!0;nt++}return o.attributesNum!==nt||o.index!==$}function y(T,z,Q,$){const it={},ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){let wt=ut[j];wt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(wt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(wt=T.instanceColor));const Nt={};Nt.attribute=wt,wt&&wt.data&&(Nt.data=wt.data),it[j]=Nt,nt++}o.attributes=it,o.attributesNum=nt,o.index=$}function b(){const T=o.newAttributes;for(let z=0,Q=T.length;z<Q;z++)T[z]=0}function v(T){m(T,0)}function m(T,z){const Q=o.newAttributes,$=o.enabledAttributes,it=o.attributeDivisors;Q[T]=1,$[T]===0&&(s.enableVertexAttribArray(T),$[T]=1),it[T]!==z&&(s.vertexAttribDivisor(T,z),it[T]=z)}function P(){const T=o.newAttributes,z=o.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==T[Q]&&(s.disableVertexAttribArray(Q),z[Q]=0)}function L(T,z,Q,$,it,ut,nt){nt===!0?s.vertexAttribIPointer(T,z,Q,it,ut):s.vertexAttribPointer(T,z,Q,$,it,ut)}function R(T,z,Q,$){b();const it=$.attributes,ut=Q.getAttributes(),nt=z.defaultAttributeValues;for(const dt in ut){const j=ut[dt];if(j.location>=0){let Et=it[dt];if(Et===void 0&&(dt==="instanceMatrix"&&T.instanceMatrix&&(Et=T.instanceMatrix),dt==="instanceColor"&&T.instanceColor&&(Et=T.instanceColor)),Et!==void 0){const wt=Et.normalized,Nt=Et.itemSize,le=t.get(Et);if(le===void 0)continue;const Ce=le.buffer,ot=le.type,_t=le.bytesPerElement,Ft=ot===s.INT||ot===s.UNSIGNED_INT||Et.gpuType===$u;if(Et.isInterleavedBufferAttribute){const yt=Et.data,kt=yt.stride,fe=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let $t=0;$t<j.locationSize;$t++)m(j.location+$t,yt.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let $t=0;$t<j.locationSize;$t++)v(j.location+$t);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let $t=0;$t<j.locationSize;$t++)L(j.location+$t,Nt/j.locationSize,ot,wt,kt*_t,(fe+Nt/j.locationSize*$t)*_t,Ft)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<j.locationSize;yt++)m(j.location+yt,Et.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<j.locationSize;yt++)v(j.location+yt);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let yt=0;yt<j.locationSize;yt++)L(j.location+yt,Nt/j.locationSize,ot,wt,Nt*_t,Nt/j.locationSize*yt*_t,Ft)}}else if(nt!==void 0){const wt=nt[dt];if(wt!==void 0)switch(wt.length){case 2:s.vertexAttrib2fv(j.location,wt);break;case 3:s.vertexAttrib3fv(j.location,wt);break;case 4:s.vertexAttrib4fv(j.location,wt);break;default:s.vertexAttrib1fv(j.location,wt)}}}}P()}function H(){G();for(const T in i){const z=i[T];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const z=i[T.id];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T.id]}function U(T){for(const z in i){const Q=i[z];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const it in $)p($[it].object),delete $[it];delete Q[T.id]}}function G(){C(),c=!0,o!==a&&(o=a,f(o.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:G,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:v,disableUnusedAttributes:P}}function HA(s,t,e){let i;function a(f){i=f}function o(f,p){s.drawArrays(i,f,p),e.update(p,i,1)}function c(f,p,_){_!==0&&(s.drawArraysInstanced(i,f,p,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];e.update(x,i,1)}function d(f,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<f.length;y++)c(f[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=p[b]*g[b];e.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function GA(s,t,e,i){let a;function o(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==pi&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const G=U===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==qi&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ki&&!G)}function d(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=d(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=y>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:H,maxSamples:N}}function VA(s){const t=this;let e=null,i=0,a=!1,o=!1;const c=new Pr,u=new se,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,b=_.clipIntersection,v=_.clipShadows,m=s.get(_);if(!a||y===null||y.length===0||o&&!v)o?p(null):f();else{const P=o?0:i,L=P*4;let R=m.clippingState||null;d.value=R,R=p(y,g,L,x);for(let H=0;H!==L;++H)R[H]=e[H];m.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,g,x,y){const b=_!==null?_.length:0;let v=null;if(b!==0){if(v=d.value,y!==!0||v===null){const m=x+b*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,R=x;L!==b;++L,R+=4)c.copy(_[L]).applyMatrix4(P,u),c.normal.toArray(v,R),v[R+3]=c.constant}d.value=v,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,v}}function kA(s){let t=new WeakMap;function e(c,u){return u===fu?c.mapping=Ps:u===hu&&(c.mapping=Is),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===fu||u===hu)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new FE(d.height);return f.fromEquirectangularTexture(s,c),t.set(c,f),c.addEventListener("dispose",a),e(f.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const Ts=4,cp=[.125,.215,.35,.446,.526,.582],Ur=20,Kc=new jE,up=new Ct;let $c=null,Jc=0,Qc=0,jc=!1;const Ir=(1+Math.sqrt(5))/2,Es=1/Ir,fp=[new O(-Ir,Es,0),new O(Ir,Es,0),new O(-Es,0,Ir),new O(Es,0,Ir),new O(0,Ir,-Es),new O(0,Ir,Es),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class hp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){$c=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,a,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($c,Jc,Qc),this._renderer.xr.enabled=jc,t.scissorTest=!1,ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$c=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Sa,format:pi,colorSpace:Ns,depthBuffer:!1},a=dp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(o)),this._blurMaterial=XA(o,t,e)}return a}_compileMaterial(t){const e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,i,a){const u=new Xn(90,1,e,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(up),p.toneMapping=fr,p.autoClear=!1;const x=new Mi({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),y=new bn(new Hr,x);let b=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,b=!0):(x.color.copy(up),b=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(u.up.set(0,d[m],0),u.lookAt(f[m],0,0)):P===1?(u.up.set(0,0,d[m]),u.lookAt(0,f[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,f[m]));const L=this._cubeSize;ko(a,P*L,m>2?L:0,L,L),p.setRenderTarget(a),b&&p.render(y,u),p.render(t,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=_,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Ps||t.mapping===Is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pp());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=t;const d=this._cubeSize;ko(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,Kc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=fp[(a-o-1)%fp.length];this._blur(t,o-1,o,c,u)}e.autoClear=i}_blur(t,e,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",o),this._halfBlur(c,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new bn(this._lodPlanes[a],f),g=f.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ur-1),b=o/y,v=isFinite(o)?1+Math.floor(p*b):Ur;v>Ur&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ur}`);const m=[];let P=0;for(let U=0;U<Ur;++U){const G=U/b,C=Math.exp(-G*G/2);m.push(C),U===0?P+=C:U<v&&(P+=2*C)}for(let U=0;U<m.length;U++)m[U]=m[U]/P;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=y,g.mipInt.value=L-i;const R=this._sizeLods[a],H=3*R*(a>L-Ts?a-L+Ts:0),N=4*(this._cubeSize-R);ko(e,H,N,3*R,2*R),d.setRenderTarget(e),d.render(_,Kc)}}function WA(s){const t=[],e=[],i=[];let a=s;const o=s-Ts+1+cp.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);e.push(u);let d=1/u;c>s-Ts?d=cp[c-s+Ts-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),p=-f,_=1+f,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,b=3,v=2,m=1,P=new Float32Array(b*y*x),L=new Float32Array(v*y*x),R=new Float32Array(m*y*x);for(let N=0;N<x;N++){const U=N%3*2/3-1,G=N>2?0:-1,C=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];P.set(C,b*y*N),L.set(g,v*y*N);const T=[N,N,N,N,N,N];R.set(T,m*y*N)}const H=new qn;H.setAttribute("position",new _i(P,b)),H.setAttribute("uv",new _i(L,v)),H.setAttribute("faceIndex",new _i(R,m)),t.push(H),a>Ts&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function dp(s,t,e){const i=new zr(s,t,e);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function XA(s,t,e){const i=new Float32Array(Ur),a=new O(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function pp(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function mp(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function qA(s){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===fu||d===hu,p=d===Ps||d===Is;if(f||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new hp(s)),_=f?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return f&&x&&x.height>0||p&&x&&a(x)?(e===null&&(e=new hp(s)),_=f?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function YA(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ZA(s,t,e,i){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(t.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,e.memory.geometries++),g}function d(_){const g=_.attributes;for(const x in g)t.update(g[x],s.ARRAY_BUFFER)}function f(_){const g=[],x=_.index,y=_.attributes.position;let b=0;if(x!==null){const P=x.array;b=x.version;for(let L=0,R=P.length;L<R;L+=3){const H=P[L+0],N=P[L+1],U=P[L+2];g.push(H,N,N,U,U,H)}}else if(y!==void 0){const P=y.array;b=y.version;for(let L=0,R=P.length/3-1;L<R;L+=3){const H=L+0,N=L+1,U=L+2;g.push(H,N,N,U,U,H)}}else return;const v=new(nm(g)?cm:lm)(g,1);v.version=b;const m=o.get(_);m&&t.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&f(_)}else f(_);return o.get(_)}return{get:u,update:d,getWireframeAttribute:p}}function KA(s,t,e){let i;function a(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,x){s.drawElements(i,x,o,g*c),e.update(x,i,1)}function f(g,x,y){y!==0&&(s.drawElementsInstanced(i,x,o,g*c,y),e.update(x,i,y))}function p(g,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,g,0,y);let v=0;for(let m=0;m<y;m++)v+=x[m];e.update(v,i,1)}function _(g,x,y,b){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)f(g[m]/c,x[m],b[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,o,g,0,b,0,y);let m=0;for(let P=0;P<y;P++)m+=x[P]*b[P];e.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function $A(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=u*(o/3);break;case s.LINES:e.lines+=u*(o/2);break;case s.LINE_STRIP:e.lines+=u*(o-1);break;case s.LINE_LOOP:e.lines+=u*o;break;case s.POINTS:e.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function JA(s,t,e){const i=new WeakMap,a=new Ne;function o(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){G.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),b===!0&&(R=2),v===!0&&(R=3);let H=u.attributes.position.count*R,N=1;H>t.maxTextureSize&&(N=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const U=new Float32Array(H*N*4*_),G=new rm(U,H,N,_);G.type=ki,G.needsUpdate=!0;const C=R*4;for(let z=0;z<_;z++){const Q=m[z],$=P[z],it=L[z],ut=H*N*4*z;for(let nt=0;nt<Q.count;nt++){const dt=nt*C;y===!0&&(a.fromBufferAttribute(Q,nt),U[ut+dt+0]=a.x,U[ut+dt+1]=a.y,U[ut+dt+2]=a.z,U[ut+dt+3]=0),b===!0&&(a.fromBufferAttribute($,nt),U[ut+dt+4]=a.x,U[ut+dt+5]=a.y,U[ut+dt+6]=a.z,U[ut+dt+7]=0),v===!0&&(a.fromBufferAttribute(it,nt),U[ut+dt+8]=a.x,U[ut+dt+9]=a.y,U[ut+dt+10]=a.z,U[ut+dt+11]=it.itemSize===4?a.w:1)}}g={count:_,texture:G,size:new Ut(H,N)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,e);else{let y=0;for(let v=0;v<f.length;v++)y+=f[v];const b=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function QA(s,t,e,i){let a=new WeakMap;function o(d){const f=i.render.frame,p=d.geometry,_=t.get(d,p);if(a.get(_)!==f&&(t.update(_),a.set(_,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==f&&(e.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,f))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==f&&(g.update(),a.set(g,f))}return _}function c(){a=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:c}}const vm=new Rn,_p=new mm(1,1),xm=new rm,Mm=new xE,Sm=new hm,gp=[],vp=[],xp=new Float32Array(16),Mp=new Float32Array(9),Sp=new Float32Array(4);function Bs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let o=gp[a];if(o===void 0&&(o=new Float32Array(a),gp[a]=o),t!==0){i.toArray(o,0);for(let c=1,u=0;c!==t;++c)u+=e,s[c].toArray(o,u)}return o}function rn(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function cl(s,t){let e=vp[t];e===void 0&&(e=new Int32Array(t),vp[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function ew(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function nw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function iw(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;Sp.set(i),s.uniformMatrix2fv(this.addr,!1,Sp),sn(e,i)}}function rw(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;Mp.set(i),s.uniformMatrix3fv(this.addr,!1,Mp),sn(e,i)}}function sw(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;xp.set(i),s.uniformMatrix4fv(this.addr,!1,xp),sn(e,i)}}function aw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ow(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function lw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function cw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function uw(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function hw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function dw(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function pw(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(_p.compareFunction=em,o=_p):o=vm,e.setTexture2D(t||o,a)}function mw(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Mm,a)}function _w(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Sm,a)}function gw(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||xm,a)}function vw(s){switch(s){case 5126:return jA;case 35664:return tw;case 35665:return ew;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return aw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return fw;case 36295:return hw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return gw}}function xw(s,t){s.uniform1fv(this.addr,t)}function Mw(s,t){const e=Bs(t,this.size,2);s.uniform2fv(this.addr,e)}function Sw(s,t){const e=Bs(t,this.size,3);s.uniform3fv(this.addr,e)}function Ew(s,t){const e=Bs(t,this.size,4);s.uniform4fv(this.addr,e)}function yw(s,t){const e=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tw(s,t){const e=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Aw(s,t){const e=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ww(s,t){s.uniform1iv(this.addr,t)}function bw(s,t){s.uniform2iv(this.addr,t)}function Rw(s,t){s.uniform3iv(this.addr,t)}function Cw(s,t){s.uniform4iv(this.addr,t)}function Lw(s,t){s.uniform1uiv(this.addr,t)}function Pw(s,t){s.uniform2uiv(this.addr,t)}function Iw(s,t){s.uniform3uiv(this.addr,t)}function Dw(s,t){s.uniform4uiv(this.addr,t)}function Uw(s,t,e){const i=this.cache,a=t.length,o=cl(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||vm,o[c])}function Nw(s,t,e){const i=this.cache,a=t.length,o=cl(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||Mm,o[c])}function Fw(s,t,e){const i=this.cache,a=t.length,o=cl(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||Sm,o[c])}function Ow(s,t,e){const i=this.cache,a=t.length,o=cl(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||xm,o[c])}function Bw(s){switch(s){case 5126:return xw;case 35664:return Mw;case 35665:return Sw;case 35666:return Ew;case 35674:return yw;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return ww;case 35667:case 35671:return bw;case 35668:case 35672:return Rw;case 35669:case 35673:return Cw;case 5125:return Lw;case 36294:return Pw;case 36295:return Iw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Fw;case 36289:case 36303:case 36311:case 36292:return Ow}}class zw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vw(e.type)}}class Hw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bw(e.type)}}class Gw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(t,e[u.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Ep(s,t){s.seq.push(t),s.map[t.id]=t}function Vw(s,t,e){const i=s.name,a=i.length;for(tu.lastIndex=0;;){const o=tu.exec(i),c=tu.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===a){Ep(e,f===void 0?new zw(u,s,t):new Hw(u,s,t));break}else{let _=e.map[u];_===void 0&&(_=new Gw(u),Ep(e,_)),e=_}}}class Jo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Vw(o,c,this)}}setValue(t,e,i,a){const o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,c=e.length;o!==c;++o){const u=e[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,o=t.length;a!==o;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function yp(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const kw=37297;let Ww=0;function Xw(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const Tp=new se;function qw(s){Ae._getMatrix(Tp,Ae.workingColorSpace,s);const t=`mat3( ${Tp.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(s)){case Qo:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ap(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=s.getShaderInfoLog(t).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+Xw(s.getShaderSource(t),c)}else return a}function Yw(s,t){const e=qw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zw(s,t){let e;switch(t){case XS:e="Linear";break;case qS:e="Reinhard";break;case YS:e="Cineon";break;case ZS:e="ACESFilmic";break;case $S:e="AgX";break;case JS:e="Neutral";break;case KS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wo=new O;function Kw(){Ae.getLuminanceCoefficients(Wo);const s=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Jw(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qw(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(t,a),c=o.name;let u=1;o.type===s.FLOAT_MAT2&&(u=2),o.type===s.FLOAT_MAT3&&(u=3),o.type===s.FLOAT_MAT4&&(u=4),e[c]={type:o.type,location:s.getAttribLocation(t,c),locationSize:u}}return e}function ma(s){return s!==""}function wp(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(s){return s.replace(jw,eb)}const tb=new Map;function eb(s,t){let e=oe[t];if(e===void 0){const i=tb.get(t);if(i!==void 0)e=oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wu(e)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rp(s){return s.replace(nb,ib)}function ib(s,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Cp(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===TS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function sb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ab(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function ob(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Vp:t="ENVMAP_BLENDING_MULTIPLY";break;case kS:t="ENVMAP_BLENDING_MIX";break;case WS:t="ENVMAP_BLENDING_ADD";break}return t}function lb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function cb(s,t,e,i){const a=s.getContext(),o=e.defines;let c=e.vertexShader,u=e.fragmentShader;const d=rb(e),f=sb(e),p=ab(e),_=ob(e),g=lb(e),x=$w(e),y=Jw(o),b=a.createProgram();let v,m,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ma).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(v=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[Cp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?oe.tonemapping_pars_fragment:"",e.toneMapping!==fr?Zw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Yw("linearToOutputTexel",e.outputColorSpace),Kw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),c=Wu(c),c=wp(c,e),c=bp(c,e),u=Wu(u),u=wp(u,e),u=bp(u,e),c=Rp(c),u=Rp(u),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=P+v+c,R=P+m+u,H=yp(a,a.VERTEX_SHADER,L),N=yp(a,a.FRAGMENT_SHADER,R);a.attachShader(b,H),a.attachShader(b,N),e.index0AttributeName!==void 0?a.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function U(z){if(s.debug.checkShaderErrors){const Q=a.getProgramInfoLog(b).trim(),$=a.getShaderInfoLog(H).trim(),it=a.getShaderInfoLog(N).trim();let ut=!0,nt=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,H,N);else{const dt=Ap(a,H,"vertex"),j=Ap(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+dt+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||it==="")&&(nt=!1);nt&&(z.diagnostics={runnable:ut,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:it,prefix:m}})}a.deleteShader(H),a.deleteShader(N),G=new Jo(a,b),C=Qw(a,b)}let G;this.getUniforms=function(){return G===void 0&&U(this),G};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(b,kw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ww++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=N,this}let ub=0;class fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hb(t),e.set(t,i)),i}}class hb{constructor(t){this.id=ub++,this.code=t,this.usedTimes=0}}function db(s,t,e,i,a,o,c){const u=new am,d=new fb,f=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return f.add(C),C===0?"uv":`uv${C}`}function v(C,T,z,Q,$){const it=Q.fog,ut=$.geometry,nt=C.isMeshStandardMaterial?Q.environment:null,dt=(C.isMeshStandardMaterial?e:t).get(C.envMap||nt),j=dt&&dt.mapping===sl?dt.image.height:null,Et=y[C.type];C.precision!==null&&(x=a.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const wt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Nt=wt!==void 0?wt.length:0;let le=0;ut.morphAttributes.position!==void 0&&(le=1),ut.morphAttributes.normal!==void 0&&(le=2),ut.morphAttributes.color!==void 0&&(le=3);let Ce,ot,_t,Ft;if(Et){const we=Si[Et];Ce=we.vertexShader,ot=we.fragmentShader}else Ce=C.vertexShader,ot=C.fragmentShader,d.update(C),_t=d.getVertexShaderID(C),Ft=d.getFragmentShaderID(C);const yt=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),fe=$.isInstancedMesh===!0,$t=$.isBatchedMesh===!0,ze=!!C.map,Pe=!!C.matcap,he=!!dt,F=!!C.aoMap,an=!!C.lightMap,_e=!!C.bumpMap,jt=!!C.normalMap,Gt=!!C.displacementMap,Fe=!!C.emissiveMap,Bt=!!C.metalnessMap,I=!!C.roughnessMap,S=C.anisotropy>0,Y=C.clearcoat>0,ct=C.dispersion>0,ft=C.iridescence>0,st=C.sheen>0,Ot=C.transmission>0,gt=S&&!!C.anisotropyMap,bt=Y&&!!C.clearcoatMap,de=Y&&!!C.clearcoatNormalMap,mt=Y&&!!C.clearcoatRoughnessMap,Lt=ft&&!!C.iridescenceMap,Xt=ft&&!!C.iridescenceThicknessMap,Kt=st&&!!C.sheenColorMap,Pt=st&&!!C.sheenRoughnessMap,ue=!!C.specularMap,te=!!C.specularColorMap,Ie=!!C.specularIntensityMap,V=Ot&&!!C.transmissionMap,Mt=Ot&&!!C.thicknessMap,tt=!!C.gradientMap,lt=!!C.alphaMap,At=C.alphaTest>0,Tt=!!C.alphaHash,ne=!!C.extensions;let We=fr;C.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(We=s.toneMapping);const je={shaderID:Et,shaderType:C.type,shaderName:C.name,vertexShader:Ce,fragmentShader:ot,defines:C.defines,customVertexShaderID:_t,customFragmentShaderID:Ft,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:$t,batchingColor:$t&&$._colorsTexture!==null,instancing:fe,instancingColor:fe&&$.instanceColor!==null,instancingMorph:fe&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ns,alphaToCoverage:!!C.alphaToCoverage,map:ze,matcap:Pe,envMap:he,envMapMode:he&&dt.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:an,bumpMap:_e,normalMap:jt,displacementMap:g&&Gt,emissiveMap:Fe,normalMapObjectSpace:jt&&C.normalMapType===eE,normalMapTangentSpace:jt&&C.normalMapType===tm,metalnessMap:Bt,roughnessMap:I,anisotropy:S,anisotropyMap:gt,clearcoat:Y,clearcoatMap:bt,clearcoatNormalMap:de,clearcoatRoughnessMap:mt,dispersion:ct,iridescence:ft,iridescenceMap:Lt,iridescenceThicknessMap:Xt,sheen:st,sheenColorMap:Kt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:te,specularIntensityMap:Ie,transmission:Ot,transmissionMap:V,thicknessMap:Mt,gradientMap:tt,opaque:C.transparent===!1&&C.blending===ws&&C.alphaToCoverage===!1,alphaMap:lt,alphaTest:At,alphaHash:Tt,combine:C.combine,mapUv:ze&&b(C.map.channel),aoMapUv:F&&b(C.aoMap.channel),lightMapUv:an&&b(C.lightMap.channel),bumpMapUv:_e&&b(C.bumpMap.channel),normalMapUv:jt&&b(C.normalMap.channel),displacementMapUv:Gt&&b(C.displacementMap.channel),emissiveMapUv:Fe&&b(C.emissiveMap.channel),metalnessMapUv:Bt&&b(C.metalnessMap.channel),roughnessMapUv:I&&b(C.roughnessMap.channel),anisotropyMapUv:gt&&b(C.anisotropyMap.channel),clearcoatMapUv:bt&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(C.sheenRoughnessMap.channel),specularMapUv:ue&&b(C.specularMap.channel),specularColorMapUv:te&&b(C.specularColorMap.channel),specularIntensityMapUv:Ie&&b(C.specularIntensityMap.channel),transmissionMapUv:V&&b(C.transmissionMap.channel),thicknessMapUv:Mt&&b(C.thicknessMap.channel),alphaMapUv:lt&&b(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(jt||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ut.attributes.uv&&(ze||lt),fog:!!it,useFog:C.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:kt,skinning:$.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:ze&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===De,decodeVideoTextureEmissive:Fe&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===De,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Nn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ne&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&C.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return je.vertexUv1s=f.has(1),je.vertexUv2s=f.has(2),je.vertexUv3s=f.has(3),f.clear(),je}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)T.push(z),T.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(P(T,C),L(T,C),T.push(s.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function P(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function L(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const T=y[C.type];let z;if(T){const Q=Si[T];z=IE.clone(Q.uniforms)}else z=C.uniforms;return z}function H(C,T){let z;for(let Q=0,$=p.length;Q<$;Q++){const it=p[Q];if(it.cacheKey===T){z=it,++z.usedTimes;break}}return z===void 0&&(z=new cb(s,T,C,o),p.push(z)),z}function N(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function U(C){d.remove(C)}function G(){d.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:H,releaseProgram:N,releaseShaderCache:U,programs:p,dispose:G}}function pb(){let s=new WeakMap;function t(c){return s.has(c)}function e(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function a(c,u,d){s.get(c)[u]=d}function o(){s=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:o}}function mb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pp(){const s=[];let t=0;const e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function c(_,g,x,y,b,v){let m=s[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:b,group:v},s[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=b,m.group=v),t++,m}function u(_,g,x,y,b,v){const m=c(_,g,x,y,b,v);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):e.push(m)}function d(_,g,x,y,b,v){const m=c(_,g,x,y,b,v);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):e.unshift(m)}function f(_,g){e.length>1&&e.sort(_||mb),i.length>1&&i.sort(g||Lp),a.length>1&&a.sort(g||Lp)}function p(){for(let _=t,g=s.length;_<g;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:u,unshift:d,finish:p,sort:f}}function _b(){let s=new WeakMap;function t(i,a){const o=s.get(i);let c;return o===void 0?(c=new Pp,s.set(i,[c])):a>=o.length?(c=new Pp,o.push(c)):c=o[a],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function gb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ct};break;case"SpotLight":e={position:new O,direction:new O,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function vb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xb=0;function Mb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sb(s){const t=new gb,e=vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new O);const a=new O,o=new ke,c=new ke;function u(f){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,y=0,b=0,v=0,m=0,P=0,L=0,R=0,H=0,N=0,U=0;f.sort(Mb);for(let C=0,T=f.length;C<T;C++){const z=f[C],Q=z.color,$=z.intensity,it=z.distance,ut=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(z.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(z.sh.coefficients[nt],$);U++}else if(z.isDirectionalLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=ut,i.directionalShadowMatrix[x]=z.shadow.matrix,P++}i.directional[x]=nt,x++}else if(z.isSpotLight){const nt=t.get(z);nt.position.setFromMatrixPosition(z.matrixWorld),nt.color.copy(Q).multiplyScalar($),nt.distance=it,nt.coneCos=Math.cos(z.angle),nt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),nt.decay=z.decay,i.spot[b]=nt;const dt=z.shadow;if(z.map&&(i.spotLightMap[H]=z.map,H++,dt.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[b]=dt.matrix,z.castShadow){const j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=ut,R++}b++}else if(z.isRectAreaLight){const nt=t.get(z);nt.color.copy(Q).multiplyScalar($),nt.halfWidth.set(z.width*.5,0,0),nt.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=nt,v++}else if(z.isPointLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),nt.distance=z.distance,nt.decay=z.decay,z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,j.shadowCameraNear=dt.camera.near,j.shadowCameraFar=dt.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=ut,i.pointShadowMatrix[y]=z.shadow.matrix,L++}i.point[y]=nt,y++}else if(z.isHemisphereLight){const nt=t.get(z);nt.skyColor.copy(z.color).multiplyScalar($),nt.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[m]=nt,m++}}v>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==x||G.pointLength!==y||G.spotLength!==b||G.rectAreaLength!==v||G.hemiLength!==m||G.numDirectionalShadows!==P||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==H||G.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+H-N,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,G.directionalLength=x,G.pointLength=y,G.spotLength=b,G.rectAreaLength=v,G.hemiLength=m,G.numDirectionalShadows=P,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=H,G.numLightProbes=U,i.version=xb++)}function d(f,p){let _=0,g=0,x=0,y=0,b=0;const v=p.matrixWorldInverse;for(let m=0,P=f.length;m<P;m++){const L=f[m];if(L.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),_++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const R=i.hemi[b];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),b++}}}return{setup:u,setupView:d,state:i}}function Ip(s){const t=new Sb(s),e=[],i=[];function a(p){f.camera=p,e.length=0,i.length=0}function o(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function d(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function Eb(s){let t=new WeakMap;function e(a,o=0){const c=t.get(a);let u;return c===void 0?(u=new Ip(s),t.set(a,[u])):o>=c.length?(u=new Ip(s),c.push(u)):u=c[o],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tb=`uniform sampler2D shadow_pass;
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
}`;function Ab(s,t,e){let i=new nf;const a=new Ut,o=new Ut,c=new Ne,u=new WE({depthPacking:tE}),d=new XE,f={},p=e.maxTextureSize,_={[dr]:Nn,[Nn]:dr,[Vi]:Vi},g=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:yb,fragmentShader:Tb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new qn;y.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bn(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let m=this.type;this.render=function(N,U,G){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const C=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Gi&&this.type===Gi,it=m===Gi&&this.type!==Gi;for(let ut=0,nt=N.length;ut<nt;ut++){const dt=N[ut],j=dt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const Et=j.getFrameExtents();if(a.multiply(Et),o.copy(j.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/Et.x),a.x=o.x*Et.x,j.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/Et.y),a.y=o.y*Et.y,j.mapSize.y=o.y)),j.map===null||$===!0||it===!0){const Nt=this.type!==Gi?{minFilter:mi,magFilter:mi}:{};j.map!==null&&j.map.dispose(),j.map=new zr(a.x,a.y,Nt),j.map.texture.name=dt.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const wt=j.getViewportCount();for(let Nt=0;Nt<wt;Nt++){const le=j.getViewport(Nt);c.set(o.x*le.x,o.y*le.y,o.x*le.z,o.y*le.w),Q.viewport(c),j.updateMatrices(dt,Nt),i=j.getFrustum(),R(U,G,j.camera,dt,this.type)}j.isPointLightShadow!==!0&&this.type===Gi&&P(j,G),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(C,T,z)};function P(N,U){const G=t.update(b);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new zr(a.x,a.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,G,g,b,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,G,x,b,null)}function L(N,U,G,C){let T=null;const z=G.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)T=z;else if(T=G.isPointLight===!0?d:u,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=T.uuid,$=U.uuid;let it=f[Q];it===void 0&&(it={},f[Q]=it);let ut=it[$];ut===void 0&&(ut=T.clone(),it[$]=ut,U.addEventListener("dispose",H)),T=ut}if(T.visible=U.visible,T.wireframe=U.wireframe,C===Gi?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:_[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=s.properties.get(T);Q.light=G}return T}function R(N,U,G,C,T){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Gi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,N.matrixWorld);const $=t.update(N),it=N.material;if(Array.isArray(it)){const ut=$.groups;for(let nt=0,dt=ut.length;nt<dt;nt++){const j=ut[nt],Et=it[j.materialIndex];if(Et&&Et.visible){const wt=L(N,Et,C,T);N.onBeforeShadow(s,N,U,G,$,wt,j),s.renderBufferDirect(G,null,$,wt,N,j),N.onAfterShadow(s,N,U,G,$,wt,j)}}}else if(it.visible){const ut=L(N,it,C,T);N.onBeforeShadow(s,N,U,G,$,ut,null),s.renderBufferDirect(G,null,$,ut,N,null),N.onAfterShadow(s,N,U,G,$,ut,null)}}const Q=N.children;for(let $=0,it=Q.length;$<it;$++)R(Q[$],U,G,C,T)}function H(N){N.target.removeEventListener("dispose",H);for(const G in f){const C=f[G],T=N.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const wb={[ru]:su,[au]:cu,[ou]:uu,[Ls]:lu,[su]:ru,[cu]:au,[uu]:ou,[lu]:Ls};function bb(s,t){function e(){let V=!1;const Mt=new Ne;let tt=null;const lt=new Ne(0,0,0,0);return{setMask:function(At){tt!==At&&!V&&(s.colorMask(At,At,At,At),tt=At)},setLocked:function(At){V=At},setClear:function(At,Tt,ne,We,je){je===!0&&(At*=We,Tt*=We,ne*=We),Mt.set(At,Tt,ne,We),lt.equals(Mt)===!1&&(s.clearColor(At,Tt,ne,We),lt.copy(Mt))},reset:function(){V=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let V=!1,Mt=!1,tt=null,lt=null,At=null;return{setReversed:function(Tt){if(Mt!==Tt){const ne=t.get("EXT_clip_control");Mt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const We=At;At=null,this.setClear(We)}Mt=Tt},getReversed:function(){return Mt},setTest:function(Tt){Tt?yt(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(Tt){tt!==Tt&&!V&&(s.depthMask(Tt),tt=Tt)},setFunc:function(Tt){if(Mt&&(Tt=wb[Tt]),lt!==Tt){switch(Tt){case ru:s.depthFunc(s.NEVER);break;case su:s.depthFunc(s.ALWAYS);break;case au:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ou:s.depthFunc(s.EQUAL);break;case lu:s.depthFunc(s.GEQUAL);break;case cu:s.depthFunc(s.GREATER);break;case uu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=Tt}},setLocked:function(Tt){V=Tt},setClear:function(Tt){At!==Tt&&(Mt&&(Tt=1-Tt),s.clearDepth(Tt),At=Tt)},reset:function(){V=!1,tt=null,lt=null,At=null,Mt=!1}}}function a(){let V=!1,Mt=null,tt=null,lt=null,At=null,Tt=null,ne=null,We=null,je=null;return{setTest:function(we){V||(we?yt(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(we){Mt!==we&&!V&&(s.stencilMask(we),Mt=we)},setFunc:function(we,Fn,si){(tt!==we||lt!==Fn||At!==si)&&(s.stencilFunc(we,Fn,si),tt=we,lt=Fn,At=si)},setOp:function(we,Fn,si){(Tt!==we||ne!==Fn||We!==si)&&(s.stencilOp(we,Fn,si),Tt=we,ne=Fn,We=si)},setLocked:function(we){V=we},setClear:function(we){je!==we&&(s.clearStencil(we),je=we)},reset:function(){V=!1,Mt=null,tt=null,lt=null,At=null,Tt=null,ne=null,We=null,je=null}}}const o=new e,c=new i,u=new a,d=new WeakMap,f=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,b=!1,v=null,m=null,P=null,L=null,R=null,H=null,N=null,U=new Ct(0,0,0),G=0,C=!1,T=null,z=null,Q=null,$=null,it=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,dt=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(j)[1]),nt=dt>=1):j.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),nt=dt>=2);let Et=null,wt={};const Nt=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ce=new Ne().fromArray(Nt),ot=new Ne().fromArray(le);function _t(V,Mt,tt,lt){const At=new Uint8Array(4),Tt=s.createTexture();s.bindTexture(V,Tt),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<tt;ne++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,lt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Mt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return Tt}const Ft={};Ft[s.TEXTURE_2D]=_t(s.TEXTURE_2D,s.TEXTURE_2D,1),Ft[s.TEXTURE_CUBE_MAP]=_t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[s.TEXTURE_2D_ARRAY]=_t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ft[s.TEXTURE_3D]=_t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),yt(s.DEPTH_TEST),c.setFunc(Ls),_e(!1),jt(bd),yt(s.CULL_FACE),F(ur);function yt(V){p[V]!==!0&&(s.enable(V),p[V]=!0)}function kt(V){p[V]!==!1&&(s.disable(V),p[V]=!1)}function fe(V,Mt){return _[V]!==Mt?(s.bindFramebuffer(V,Mt),_[V]=Mt,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Mt),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function $t(V,Mt){let tt=x,lt=!1;if(V){tt=g.get(Mt),tt===void 0&&(tt=[],g.set(Mt,tt));const At=V.textures;if(tt.length!==At.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let Tt=0,ne=At.length;Tt<ne;Tt++)tt[Tt]=s.COLOR_ATTACHMENT0+Tt;tt.length=At.length,lt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,lt=!0);lt&&s.drawBuffers(tt)}function ze(V){return y!==V?(s.useProgram(V),y=V,!0):!1}const Pe={[Dr]:s.FUNC_ADD,[wS]:s.FUNC_SUBTRACT,[bS]:s.FUNC_REVERSE_SUBTRACT};Pe[RS]=s.MIN,Pe[CS]=s.MAX;const he={[LS]:s.ZERO,[PS]:s.ONE,[IS]:s.SRC_COLOR,[nu]:s.SRC_ALPHA,[BS]:s.SRC_ALPHA_SATURATE,[FS]:s.DST_COLOR,[US]:s.DST_ALPHA,[DS]:s.ONE_MINUS_SRC_COLOR,[iu]:s.ONE_MINUS_SRC_ALPHA,[OS]:s.ONE_MINUS_DST_COLOR,[NS]:s.ONE_MINUS_DST_ALPHA,[zS]:s.CONSTANT_COLOR,[HS]:s.ONE_MINUS_CONSTANT_COLOR,[GS]:s.CONSTANT_ALPHA,[VS]:s.ONE_MINUS_CONSTANT_ALPHA};function F(V,Mt,tt,lt,At,Tt,ne,We,je,we){if(V===ur){b===!0&&(kt(s.BLEND),b=!1);return}if(b===!1&&(yt(s.BLEND),b=!0),V!==AS){if(V!==v||we!==C){if((m!==Dr||R!==Dr)&&(s.blendEquation(s.FUNC_ADD),m=Dr,R=Dr),we)switch(V){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.ONE,s.ONE);break;case Cd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ld:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ld:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,L=null,H=null,N=null,U.set(0,0,0),G=0,v=V,C=we}return}At=At||Mt,Tt=Tt||tt,ne=ne||lt,(Mt!==m||At!==R)&&(s.blendEquationSeparate(Pe[Mt],Pe[At]),m=Mt,R=At),(tt!==P||lt!==L||Tt!==H||ne!==N)&&(s.blendFuncSeparate(he[tt],he[lt],he[Tt],he[ne]),P=tt,L=lt,H=Tt,N=ne),(We.equals(U)===!1||je!==G)&&(s.blendColor(We.r,We.g,We.b,je),U.copy(We),G=je),v=V,C=!1}function an(V,Mt){V.side===Vi?kt(s.CULL_FACE):yt(s.CULL_FACE);let tt=V.side===Nn;Mt&&(tt=!tt),_e(tt),V.blending===ws&&V.transparent===!1?F(ur):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const lt=V.stencilWrite;u.setTest(lt),lt&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(V){T!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),T=V)}function jt(V){V!==ES?(yt(s.CULL_FACE),V!==z&&(V===bd?s.cullFace(s.BACK):V===yS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),z=V}function Gt(V){V!==Q&&(nt&&s.lineWidth(V),Q=V)}function Fe(V,Mt,tt){V?(yt(s.POLYGON_OFFSET_FILL),($!==Mt||it!==tt)&&(s.polygonOffset(Mt,tt),$=Mt,it=tt)):kt(s.POLYGON_OFFSET_FILL)}function Bt(V){V?yt(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function I(V){V===void 0&&(V=s.TEXTURE0+ut-1),Et!==V&&(s.activeTexture(V),Et=V)}function S(V,Mt,tt){tt===void 0&&(Et===null?tt=s.TEXTURE0+ut-1:tt=Et);let lt=wt[tt];lt===void 0&&(lt={type:void 0,texture:void 0},wt[tt]=lt),(lt.type!==V||lt.texture!==Mt)&&(Et!==tt&&(s.activeTexture(tt),Et=tt),s.bindTexture(V,Mt||Ft[V]),lt.type=V,lt.texture=Mt)}function Y(){const V=wt[Et];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(V){Ce.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ce.copy(V))}function Pt(V){ot.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ot.copy(V))}function ue(V,Mt){let tt=f.get(Mt);tt===void 0&&(tt=new WeakMap,f.set(Mt,tt));let lt=tt.get(V);lt===void 0&&(lt=s.getUniformBlockIndex(Mt,V.name),tt.set(V,lt))}function te(V,Mt){const lt=f.get(Mt).get(V);d.get(Mt)!==lt&&(s.uniformBlockBinding(Mt,lt,V.__bindingPointIndex),d.set(Mt,lt))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Et=null,wt={},_={},g=new WeakMap,x=[],y=null,b=!1,v=null,m=null,P=null,L=null,R=null,H=null,N=null,U=new Ct(0,0,0),G=0,C=!1,T=null,z=null,Q=null,$=null,it=null,Ce.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:yt,disable:kt,bindFramebuffer:fe,drawBuffers:$t,useProgram:ze,setBlending:F,setMaterial:an,setFlipSided:_e,setCullFace:jt,setLineWidth:Gt,setPolygonOffset:Fe,setScissorTest:Bt,activeTexture:I,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ft,texImage2D:Lt,texImage3D:Xt,updateUBOMapping:ue,uniformBlockBinding:te,texStorage2D:de,texStorage3D:mt,texSubImage2D:st,texSubImage3D:Ot,compressedTexSubImage2D:gt,compressedTexSubImage3D:bt,scissor:Kt,viewport:Pt,reset:Ie}}function Rb(s,t,e,i,a,o,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ut,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,S){return x?new OffscreenCanvas(I,S):Ma("canvas")}function b(I,S,Y){let ct=1;const ft=Bt(I);if((ft.width>Y||ft.height>Y)&&(ct=Y/Math.max(ft.width,ft.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const st=Math.floor(ct*ft.width),Ot=Math.floor(ct*ft.height);_===void 0&&(_=y(st,Ot));const gt=S?y(st,Ot):_;return gt.width=st,gt.height=Ot,gt.getContext("2d").drawImage(I,0,0,st,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+Ot+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),I;return I}function v(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,S,Y,ct,ft=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let st=S;if(S===s.RED&&(Y===s.FLOAT&&(st=s.R32F),Y===s.HALF_FLOAT&&(st=s.R16F),Y===s.UNSIGNED_BYTE&&(st=s.R8)),S===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(st=s.R8UI),Y===s.UNSIGNED_SHORT&&(st=s.R16UI),Y===s.UNSIGNED_INT&&(st=s.R32UI),Y===s.BYTE&&(st=s.R8I),Y===s.SHORT&&(st=s.R16I),Y===s.INT&&(st=s.R32I)),S===s.RG&&(Y===s.FLOAT&&(st=s.RG32F),Y===s.HALF_FLOAT&&(st=s.RG16F),Y===s.UNSIGNED_BYTE&&(st=s.RG8)),S===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(st=s.RG8UI),Y===s.UNSIGNED_SHORT&&(st=s.RG16UI),Y===s.UNSIGNED_INT&&(st=s.RG32UI),Y===s.BYTE&&(st=s.RG8I),Y===s.SHORT&&(st=s.RG16I),Y===s.INT&&(st=s.RG32I)),S===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(st=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(st=s.RGB16UI),Y===s.UNSIGNED_INT&&(st=s.RGB32UI),Y===s.BYTE&&(st=s.RGB8I),Y===s.SHORT&&(st=s.RGB16I),Y===s.INT&&(st=s.RGB32I)),S===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),Y===s.UNSIGNED_INT&&(st=s.RGBA32UI),Y===s.BYTE&&(st=s.RGBA8I),Y===s.SHORT&&(st=s.RGBA16I),Y===s.INT&&(st=s.RGBA32I)),S===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),S===s.RGBA){const Ot=ft?Qo:Ae.getTransfer(ct);Y===s.FLOAT&&(st=s.RGBA32F),Y===s.HALF_FLOAT&&(st=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(st=Ot===De?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(I,S){let Y;return I?S===null||S===Br||S===Ds?Y=s.DEPTH24_STENCIL8:S===ki?Y=s.DEPTH32F_STENCIL8:S===xa&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Br||S===Ds?Y=s.DEPTH_COMPONENT24:S===ki?Y=s.DEPTH_COMPONENT32F:S===xa&&(Y=s.DEPTH_COMPONENT16),Y}function H(I,S){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==mi&&I.minFilter!==yi?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function N(I){const S=I.target;S.removeEventListener("dispose",N),G(S),S.isVideoTexture&&p.delete(S)}function U(I){const S=I.target;S.removeEventListener("dispose",U),T(S)}function G(I){const S=i.get(I);if(S.__webglInit===void 0)return;const Y=I.source,ct=g.get(Y);if(ct){const ft=ct[S.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&C(I),Object.keys(ct).length===0&&g.delete(Y)}i.remove(I)}function C(I){const S=i.get(I);s.deleteTexture(S.__webglTexture);const Y=I.source,ct=g.get(Y);delete ct[S.__cacheKey],c.memory.textures--}function T(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let ft=0;ft<S.__webglFramebuffer[ct].length;ft++)s.deleteFramebuffer(S.__webglFramebuffer[ct][ft]);else s.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)s.deleteFramebuffer(S.__webglFramebuffer[ct]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=I.textures;for(let ct=0,ft=Y.length;ct<ft;ct++){const st=i.get(Y[ct]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),c.memory.textures--),i.remove(Y[ct])}i.remove(I)}let z=0;function Q(){z=0}function $(){const I=z;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),z+=1,I}function it(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ut(I,S){const Y=i.get(I);if(I.isVideoTexture&&Gt(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const ct=I.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(Y,I,S);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+S)}function nt(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ot(Y,I,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+S)}function dt(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){ot(Y,I,S);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+S)}function j(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){_t(Y,I,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+S)}const Et={[du]:s.REPEAT,[Fr]:s.CLAMP_TO_EDGE,[pu]:s.MIRRORED_REPEAT},wt={[mi]:s.NEAREST,[QS]:s.NEAREST_MIPMAP_NEAREST,[vo]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Sc]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},Nt={[nE]:s.NEVER,[lE]:s.ALWAYS,[iE]:s.LESS,[em]:s.LEQUAL,[rE]:s.EQUAL,[oE]:s.GEQUAL,[sE]:s.GREATER,[aE]:s.NOTEQUAL};function le(I,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===yi||S.magFilter===Sc||S.magFilter===vo||S.magFilter===Or||S.minFilter===yi||S.minFilter===Sc||S.minFilter===vo||S.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Et[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Et[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Et[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,wt[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,wt[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===mi||S.minFilter!==vo&&S.minFilter!==Or||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",N));const ct=S.source;let ft=g.get(ct);ft===void 0&&(ft={},g.set(ct,ft));const st=it(S);if(st!==I.__cacheKey){ft[st]===void 0&&(ft[st]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ft[st].usedTimes++;const Ot=ft[I.__cacheKey];Ot!==void 0&&(ft[I.__cacheKey].usedTimes--,Ot.usedTimes===0&&C(S)),I.__cacheKey=st,I.__webglTexture=ft[st].texture}return Y}function ot(I,S,Y){let ct=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=s.TEXTURE_3D);const ft=Ce(I,S),st=S.source;e.bindTexture(ct,I.__webglTexture,s.TEXTURE0+Y);const Ot=i.get(st);if(st.version!==Ot.__version||ft===!0){e.activeTexture(s.TEXTURE0+Y);const gt=Ae.getPrimaries(Ae.workingColorSpace),bt=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),de=S.colorSpace===cr||gt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let mt=b(S.image,!1,a.maxTextureSize);mt=Fe(S,mt);const Lt=o.convert(S.format,S.colorSpace),Xt=o.convert(S.type);let Kt=L(S.internalFormat,Lt,Xt,S.colorSpace,S.isVideoTexture);le(ct,S);let Pt;const ue=S.mipmaps,te=S.isVideoTexture!==!0,Ie=Ot.__version===void 0||ft===!0,V=st.dataReady,Mt=H(S,mt);if(S.isDepthTexture)Kt=R(S.format===Us,S.type),Ie&&(te?e.texStorage2D(s.TEXTURE_2D,1,Kt,mt.width,mt.height):e.texImage2D(s.TEXTURE_2D,0,Kt,mt.width,mt.height,0,Lt,Xt,null));else if(S.isDataTexture)if(ue.length>0){te&&Ie&&e.texStorage2D(s.TEXTURE_2D,Mt,Kt,ue[0].width,ue[0].height);for(let tt=0,lt=ue.length;tt<lt;tt++)Pt=ue[tt],te?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Xt,Pt.data):e.texImage2D(s.TEXTURE_2D,tt,Kt,Pt.width,Pt.height,0,Lt,Xt,Pt.data);S.generateMipmaps=!1}else te?(Ie&&e.texStorage2D(s.TEXTURE_2D,Mt,Kt,mt.width,mt.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt.width,mt.height,Lt,Xt,mt.data)):e.texImage2D(s.TEXTURE_2D,0,Kt,mt.width,mt.height,0,Lt,Xt,mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){te&&Ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Kt,ue[0].width,ue[0].height,mt.depth);for(let tt=0,lt=ue.length;tt<lt;tt++)if(Pt=ue[tt],S.format!==pi)if(Lt!==null)if(te){if(V)if(S.layerUpdates.size>0){const At=lp(Pt.width,Pt.height,S.format,S.type);for(const Tt of S.layerUpdates){const ne=Pt.data.subarray(Tt*At/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*At/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Tt,Pt.width,Pt.height,1,Lt,ne)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,mt.depth,Lt,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Kt,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,mt.depth,Lt,Xt,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Kt,Pt.width,Pt.height,mt.depth,0,Lt,Xt,Pt.data)}else{te&&Ie&&e.texStorage2D(s.TEXTURE_2D,Mt,Kt,ue[0].width,ue[0].height);for(let tt=0,lt=ue.length;tt<lt;tt++)Pt=ue[tt],S.format!==pi?Lt!==null?te?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,Lt,Xt,Pt.data):e.texImage2D(s.TEXTURE_2D,tt,Kt,Pt.width,Pt.height,0,Lt,Xt,Pt.data)}else if(S.isDataArrayTexture)if(te){if(Ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Kt,mt.width,mt.height,mt.depth),V)if(S.layerUpdates.size>0){const tt=lp(mt.width,mt.height,S.format,S.type);for(const lt of S.layerUpdates){const At=mt.data.subarray(lt*tt/mt.data.BYTES_PER_ELEMENT,(lt+1)*tt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,lt,mt.width,mt.height,1,Lt,Xt,At)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Xt,mt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Kt,mt.width,mt.height,mt.depth,0,Lt,Xt,mt.data);else if(S.isData3DTexture)te?(Ie&&e.texStorage3D(s.TEXTURE_3D,Mt,Kt,mt.width,mt.height,mt.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Lt,Xt,mt.data)):e.texImage3D(s.TEXTURE_3D,0,Kt,mt.width,mt.height,mt.depth,0,Lt,Xt,mt.data);else if(S.isFramebufferTexture){if(Ie)if(te)e.texStorage2D(s.TEXTURE_2D,Mt,Kt,mt.width,mt.height);else{let tt=mt.width,lt=mt.height;for(let At=0;At<Mt;At++)e.texImage2D(s.TEXTURE_2D,At,Kt,tt,lt,0,Lt,Xt,null),tt>>=1,lt>>=1}}else if(ue.length>0){if(te&&Ie){const tt=Bt(ue[0]);e.texStorage2D(s.TEXTURE_2D,Mt,Kt,tt.width,tt.height)}for(let tt=0,lt=ue.length;tt<lt;tt++)Pt=ue[tt],te?V&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Lt,Xt,Pt):e.texImage2D(s.TEXTURE_2D,tt,Kt,Lt,Xt,Pt);S.generateMipmaps=!1}else if(te){if(Ie){const tt=Bt(mt);e.texStorage2D(s.TEXTURE_2D,Mt,Kt,tt.width,tt.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,Xt,mt)}else e.texImage2D(s.TEXTURE_2D,0,Kt,Lt,Xt,mt);v(S)&&m(ct),Ot.__version=st.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function _t(I,S,Y){if(S.image.length!==6)return;const ct=Ce(I,S),ft=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Y);const st=i.get(ft);if(ft.version!==st.__version||ct===!0){e.activeTexture(s.TEXTURE0+Y);const Ot=Ae.getPrimaries(Ae.workingColorSpace),gt=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),bt=S.colorSpace===cr||Ot===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,mt=S.image[0]&&S.image[0].isDataTexture,Lt=[];for(let lt=0;lt<6;lt++)!de&&!mt?Lt[lt]=b(S.image[lt],!0,a.maxCubemapSize):Lt[lt]=mt?S.image[lt].image:S.image[lt],Lt[lt]=Fe(S,Lt[lt]);const Xt=Lt[0],Kt=o.convert(S.format,S.colorSpace),Pt=o.convert(S.type),ue=L(S.internalFormat,Kt,Pt,S.colorSpace),te=S.isVideoTexture!==!0,Ie=st.__version===void 0||ct===!0,V=ft.dataReady;let Mt=H(S,Xt);le(s.TEXTURE_CUBE_MAP,S);let tt;if(de){te&&Ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ue,Xt.width,Xt.height);for(let lt=0;lt<6;lt++){tt=Lt[lt].mipmaps;for(let At=0;At<tt.length;At++){const Tt=tt[At];S.format!==pi?Kt!==null?te?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At,0,0,Tt.width,Tt.height,Kt,Tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At,ue,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At,0,0,Tt.width,Tt.height,Kt,Pt,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At,ue,Tt.width,Tt.height,0,Kt,Pt,Tt.data)}}}else{if(tt=S.mipmaps,te&&Ie){tt.length>0&&Mt++;const lt=Bt(Lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,ue,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(mt){te?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt[lt].width,Lt[lt].height,Kt,Pt,Lt[lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ue,Lt[lt].width,Lt[lt].height,0,Kt,Pt,Lt[lt].data);for(let At=0;At<tt.length;At++){const ne=tt[At].image[lt].image;te?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At+1,0,0,ne.width,ne.height,Kt,Pt,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At+1,ue,ne.width,ne.height,0,Kt,Pt,ne.data)}}else{te?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Kt,Pt,Lt[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ue,Kt,Pt,Lt[lt]);for(let At=0;At<tt.length;At++){const Tt=tt[At];te?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At+1,0,0,Kt,Pt,Tt.image[lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,At+1,ue,Kt,Pt,Tt.image[lt])}}}v(S)&&m(s.TEXTURE_CUBE_MAP),st.__version=ft.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ft(I,S,Y,ct,ft,st){const Ot=o.convert(Y.format,Y.colorSpace),gt=o.convert(Y.type),bt=L(Y.internalFormat,Ot,gt,Y.colorSpace),de=i.get(S),mt=i.get(Y);if(mt.__renderTarget=S,!de.__hasExternalTextures){const Lt=Math.max(1,S.width>>st),Xt=Math.max(1,S.height>>st);ft===s.TEXTURE_3D||ft===s.TEXTURE_2D_ARRAY?e.texImage3D(ft,st,bt,Lt,Xt,S.depth,0,Ot,gt,null):e.texImage2D(ft,st,bt,Lt,Xt,0,Ot,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),jt(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,ft,mt.__webglTexture,0,_e(S)):(ft===s.TEXTURE_2D||ft>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,ft,mt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(I,S,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){const ct=S.depthTexture,ft=ct&&ct.isDepthTexture?ct.type:null,st=R(S.stencilBuffer,ft),Ot=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=_e(S);jt(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,st,S.width,S.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,st,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,st,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,I)}else{const ct=S.textures;for(let ft=0;ft<ct.length;ft++){const st=ct[ft],Ot=o.convert(st.format,st.colorSpace),gt=o.convert(st.type),bt=L(st.internalFormat,Ot,gt,st.colorSpace),de=_e(S);Y&&jt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,bt,S.width,S.height):jt(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,bt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,bt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=i.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ut(S.depthTexture,0);const ft=ct.__webglTexture,st=_e(S);if(S.depthTexture.format===bs)jt(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ft,0);else if(S.depthTexture.format===Us)jt(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function fe(I){const S=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ft=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ft)};ct.addEventListener("dispose",ft),S.__depthDisposeCallback=ft}S.__boundDepthTexture=ct}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=s.createRenderbuffer(),yt(S.__webglDepthbuffer[ct],I,!1);else{const ft=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,st)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),yt(S.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ft),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,ft)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(I,S,Y){const ct=i.get(I);S!==void 0&&Ft(ct.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&fe(I)}function ze(I){const S=I.texture,Y=i.get(I),ct=i.get(S);I.addEventListener("dispose",U);const ft=I.textures,st=I.isWebGLCubeRenderTarget===!0,Ot=ft.length>1;if(Ot||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=S.version,c.memory.textures++),st){Y.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[gt]=[];for(let bt=0;bt<S.mipmaps.length;bt++)Y.__webglFramebuffer[gt][bt]=s.createFramebuffer()}else Y.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let gt=0;gt<S.mipmaps.length;gt++)Y.__webglFramebuffer[gt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let gt=0,bt=ft.length;gt<bt;gt++){const de=i.get(ft[gt]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&jt(I)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let gt=0;gt<ft.length;gt++){const bt=ft[gt];Y.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[gt]);const de=o.convert(bt.format,bt.colorSpace),mt=o.convert(bt.type),Lt=L(bt.internalFormat,de,mt,bt.colorSpace,I.isXRRenderTarget===!0),Xt=_e(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Lt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(Y.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),le(s.TEXTURE_CUBE_MAP,S);for(let gt=0;gt<6;gt++)if(S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)Ft(Y.__webglFramebuffer[gt][bt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt);else Ft(Y.__webglFramebuffer[gt],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);v(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let gt=0,bt=ft.length;gt<bt;gt++){const de=ft[gt],mt=i.get(de);e.bindTexture(s.TEXTURE_2D,mt.__webglTexture),le(s.TEXTURE_2D,de),Ft(Y.__webglFramebuffer,I,de,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),v(de)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),le(gt,S),S.mipmaps&&S.mipmaps.length>0)for(let bt=0;bt<S.mipmaps.length;bt++)Ft(Y.__webglFramebuffer[bt],I,S,s.COLOR_ATTACHMENT0,gt,bt);else Ft(Y.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,gt,0);v(S)&&m(gt),e.unbindTexture()}I.depthBuffer&&fe(I)}function Pe(I){const S=I.textures;for(let Y=0,ct=S.length;Y<ct;Y++){const ft=S[Y];if(v(ft)){const st=P(I),Ot=i.get(ft).__webglTexture;e.bindTexture(st,Ot),m(st),e.unbindTexture()}}}const he=[],F=[];function an(I){if(I.samples>0){if(jt(I)===!1){const S=I.textures,Y=I.width,ct=I.height;let ft=s.COLOR_BUFFER_BIT;const st=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=i.get(I),gt=S.length>1;if(gt)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ft|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ft|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[bt]);const de=i.get(S[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ft,s.NEAREST),d===!0&&(he.length=0,F.length=0,he.push(s.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(he.push(st),F.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[bt]);const de=i.get(S[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,de,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function _e(I){return Math.min(a.maxSamples,I.samples)}function jt(I){const S=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Gt(I){const S=c.render.frame;p.get(I)!==S&&(p.set(I,S),I.update())}function Fe(I,S){const Y=I.colorSpace,ct=I.format,ft=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Ns&&Y!==cr&&(Ae.getTransfer(Y)===De?(ct!==pi||ft!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Bt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=j,this.rebindTextures=$t,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=jt}function Cb(s,t){function e(i,a=cr){let o;const c=Ae.getTransfer(a);if(i===qi)return s.UNSIGNED_BYTE;if(i===Ju)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Qu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===qp)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Wp)return s.BYTE;if(i===Xp)return s.SHORT;if(i===xa)return s.UNSIGNED_SHORT;if(i===$u)return s.INT;if(i===Br)return s.UNSIGNED_INT;if(i===ki)return s.FLOAT;if(i===Sa)return s.HALF_FLOAT;if(i===Yp)return s.ALPHA;if(i===Zp)return s.RGB;if(i===pi)return s.RGBA;if(i===Kp)return s.LUMINANCE;if(i===$p)return s.LUMINANCE_ALPHA;if(i===bs)return s.DEPTH_COMPONENT;if(i===Us)return s.DEPTH_STENCIL;if(i===Jp)return s.RED;if(i===ju)return s.RED_INTEGER;if(i===Qp)return s.RG;if(i===tf)return s.RG_INTEGER;if(i===ef)return s.RGBA_INTEGER;if(i===qo||i===Yo||i===Zo||i===Ko)if(c===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mu||i===_u||i===gu||i===vu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===mu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_u)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xu||i===Mu||i===Su)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xu||i===Mu)return c===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Su)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eu||i===yu||i===Tu||i===Au||i===wu||i===bu||i===Ru||i===Cu||i===Lu||i===Pu||i===Iu||i===Du||i===Uu||i===Nu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Eu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Au)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ru)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Iu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Du)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return c===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Fu||i===Ou)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===$o)return c===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ou)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jp||i===Bu||i===zu||i===Hu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Lb=`
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

}`;class Ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new Rn,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pr({vertexShader:Lb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Db extends Os{constructor(t,e){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,f=null,p=null,_=null,g=null,x=null,y=null;const b=new Ib,v=e.getContextAttributes();let m=null,P=null;const L=[],R=[],H=new Ut;let N=null;const U=new Xn;U.viewport=new Ne;const G=new Xn;G.viewport=new Ne;const C=[U,G],T=new ty;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let _t=L[ot];return _t===void 0&&(_t=new kc,L[ot]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ot){let _t=L[ot];return _t===void 0&&(_t=new kc,L[ot]=_t),_t.getGripSpace()},this.getHand=function(ot){let _t=L[ot];return _t===void 0&&(_t=new kc,L[ot]=_t),_t.getHandSpace()};function $(ot){const _t=R.indexOf(ot.inputSource);if(_t===-1)return;const Ft=L[_t];Ft!==void 0&&(Ft.update(ot.inputSource,ot.frame,f||c),Ft.dispatchEvent({type:ot.type,data:ot.inputSource}))}function it(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",it),a.removeEventListener("inputsourceschange",ut);for(let ot=0;ot<L.length;ot++){const _t=R[ot];_t!==null&&(R[ot]=null,L[ot].disconnect(_t))}z=null,Q=null,b.reset(),t.setRenderTarget(m),x=null,g=null,_=null,a=null,P=null,Ce.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){o=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){u=ot,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ot){f=ot},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ot){if(a=ot,a!==null){if(m=t.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",it),a.addEventListener("inputsourceschange",ut),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,yt=null,kt=null;v.depth&&(kt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=v.stencil?Us:bs,yt=v.stencil?Ds:Br);const fe={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:o};_=new XRWebGLBinding(a,e),g=_.createProjectionLayer(fe),a.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new zr(g.textureWidth,g.textureHeight,{format:pi,type:qi,depthTexture:new mm(g.textureWidth,g.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Ft={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,e,Ft),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new zr(x.framebufferWidth,x.framebufferHeight,{format:pi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}P.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await a.requestReferenceSpace(u),Ce.setContext(a),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(ot){for(let _t=0;_t<ot.removed.length;_t++){const Ft=ot.removed[_t],yt=R.indexOf(Ft);yt>=0&&(R[yt]=null,L[yt].disconnect(Ft))}for(let _t=0;_t<ot.added.length;_t++){const Ft=ot.added[_t];let yt=R.indexOf(Ft);if(yt===-1){for(let fe=0;fe<L.length;fe++)if(fe>=R.length){R.push(Ft),yt=fe;break}else if(R[fe]===null){R[fe]=Ft,yt=fe;break}if(yt===-1)break}const kt=L[yt];kt&&kt.connect(Ft)}}const nt=new O,dt=new O;function j(ot,_t,Ft){nt.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(Ft.matrixWorld);const yt=nt.distanceTo(dt),kt=_t.projectionMatrix.elements,fe=Ft.projectionMatrix.elements,$t=kt[14]/(kt[10]-1),ze=kt[14]/(kt[10]+1),Pe=(kt[9]+1)/kt[5],he=(kt[9]-1)/kt[5],F=(kt[8]-1)/kt[0],an=(fe[8]+1)/fe[0],_e=$t*F,jt=$t*an,Gt=yt/(-F+an),Fe=Gt*-F;if(_t.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(Fe),ot.translateZ(Gt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),kt[10]===-1)ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Bt=$t+Gt,I=ze+Gt,S=_e-Fe,Y=jt+(yt-Fe),ct=Pe*ze/I*Bt,ft=he*ze/I*Bt;ot.projectionMatrix.makePerspective(S,Y,ct,ft,Bt,I),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function Et(ot,_t){_t===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(_t.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(a===null)return;let _t=ot.near,Ft=ot.far;b.texture!==null&&(b.depthNear>0&&(_t=b.depthNear),b.depthFar>0&&(Ft=b.depthFar)),T.near=G.near=U.near=_t,T.far=G.far=U.far=Ft,(z!==T.near||Q!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Q=T.far),U.layers.mask=ot.layers.mask|2,G.layers.mask=ot.layers.mask|4,T.layers.mask=U.layers.mask|G.layers.mask;const yt=ot.parent,kt=T.cameras;Et(T,yt);for(let fe=0;fe<kt.length;fe++)Et(kt[fe],yt);kt.length===2?j(T,U,G):T.projectionMatrix.copy(U.projectionMatrix),wt(ot,T,yt)};function wt(ot,_t,Ft){Ft===null?ot.matrix.copy(_t.matrixWorld):(ot.matrix.copy(Ft.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(_t.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Vu*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(ot){d=ot,g!==null&&(g.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let Nt=null;function le(ot,_t){if(p=_t.getViewerPose(f||c),y=_t,p!==null){const Ft=p.views;x!==null&&(t.setRenderTargetFramebuffer(P,x.framebuffer),t.setRenderTarget(P));let yt=!1;Ft.length!==T.cameras.length&&(T.cameras.length=0,yt=!0);for(let $t=0;$t<Ft.length;$t++){const ze=Ft[$t];let Pe=null;if(x!==null)Pe=x.getViewport(ze);else{const F=_.getViewSubImage(g,ze);Pe=F.viewport,$t===0&&(t.setRenderTargetTextures(P,F.colorTexture,g.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(P))}let he=C[$t];he===void 0&&(he=new Xn,he.layers.enable($t),he.viewport=new Ne,C[$t]=he),he.matrix.fromArray(ze.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ze.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),$t===0&&(T.matrix.copy(he.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),yt===!0&&T.cameras.push(he)}const kt=a.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const $t=_.getDepthInformation(Ft[0]);$t&&$t.isValid&&$t.texture&&b.init(t,$t,a.renderState)}}for(let Ft=0;Ft<L.length;Ft++){const yt=R[Ft],kt=L[Ft];yt!==null&&kt!==void 0&&kt.update(yt,_t,f||c)}Nt&&Nt(ot,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),y=null}const Ce=new gm;Ce.setAnimationLoop(le),this.setAnimationLoop=function(ot){Nt=ot},this.dispose=function(){}}}const Lr=new Ai,Ub=new ke;function Nb(s,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,um(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,P,L,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,R)):m.isMeshMatcapMaterial?(o(v,m),y(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),b(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?d(v,m,P,L):m.isSpriteMaterial?f(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Nn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Nn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const P=t.get(m),L=P.envMap,R=P.envMapRotation;L&&(v.envMap.value=L,Lr.copy(R),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),v.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(Lr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function d(v,m,P,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*P,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function f(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,P){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function b(v,m){const P=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Fb(s,t,e,i){let a={},o={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,L){const R=L.program;i.uniformBlockBinding(P,R)}function f(P,L){let R=a[P.id];R===void 0&&(y(P),R=p(P),a[P.id]=R,P.addEventListener("dispose",v));const H=L.program;i.updateUBOMapping(P,H);const N=t.render.frame;o[P.id]!==N&&(g(P),o[P.id]=N)}function p(P){const L=_();P.__bindingPointIndex=L;const R=s.createBuffer(),H=P.__size,N=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function _(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const L=a[P.id],R=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,U=R.length;N<U;N++){const G=Array.isArray(R[N])?R[N]:[R[N]];for(let C=0,T=G.length;C<T;C++){const z=G[C];if(x(z,N,C,H)===!0){const Q=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let it=0;for(let ut=0;ut<$.length;ut++){const nt=$[ut],dt=b(nt);typeof nt=="number"||typeof nt=="boolean"?(z.__data[0]=nt,s.bufferSubData(s.UNIFORM_BUFFER,Q+it,z.__data)):nt.isMatrix3?(z.__data[0]=nt.elements[0],z.__data[1]=nt.elements[1],z.__data[2]=nt.elements[2],z.__data[3]=0,z.__data[4]=nt.elements[3],z.__data[5]=nt.elements[4],z.__data[6]=nt.elements[5],z.__data[7]=0,z.__data[8]=nt.elements[6],z.__data[9]=nt.elements[7],z.__data[10]=nt.elements[8],z.__data[11]=0):(nt.toArray(z.__data,it),it+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(P,L,R,H){const N=P.value,U=L+"_"+R;if(H[U]===void 0)return typeof N=="number"||typeof N=="boolean"?H[U]=N:H[U]=N.clone(),!0;{const G=H[U];if(typeof N=="number"||typeof N=="boolean"){if(G!==N)return H[U]=N,!0}else if(G.equals(N)===!1)return G.copy(N),!0}return!1}function y(P){const L=P.uniforms;let R=0;const H=16;for(let U=0,G=L.length;U<G;U++){const C=Array.isArray(L[U])?L[U]:[L[U]];for(let T=0,z=C.length;T<z;T++){const Q=C[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let it=0,ut=$.length;it<ut;it++){const nt=$[it],dt=b(nt),j=R%H,Et=j%dt.boundary,wt=j+Et;R+=Et,wt!==0&&H-wt<dt.storage&&(R+=H-wt),Q.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=dt.storage}}}const N=R%H;return N>0&&(R+=H-N),P.__size=R,P.__cache={},this}function b(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function v(P){const L=P.target;L.removeEventListener("dispose",v);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const P in a)s.deleteBuffer(a[P]);c=[],a={},o={}}return{bind:d,update:f,dispose:m}}class Ob{constructor(t={}){const{canvas:e=uE(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),b=new Int32Array(4);let v=null,m=null;const P=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=fr,this.toneMappingExposure=1;const R=this;let H=!1,N=0,U=0,G=null,C=-1,T=null;const z=new Ne,Q=new Ne;let $=null;const it=new Ct(0);let ut=0,nt=e.width,dt=e.height,j=1,Et=null,wt=null;const Nt=new Ne(0,0,nt,dt),le=new Ne(0,0,nt,dt);let Ce=!1;const ot=new nf;let _t=!1,Ft=!1;this.transmissionResolutionScale=1;const yt=new ke,kt=new ke,fe=new O,$t=new Ne,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function he(){return G===null?j:1}let F=i;function an(A,W){return e.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ku}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),F===null){const W="webgl2";if(F=an(W,A),F===null)throw an(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,jt,Gt,Fe,Bt,I,S,Y,ct,ft,st,Ot,gt,bt,de,mt,Lt,Xt,Kt,Pt,ue,te,Ie,V;function Mt(){_e=new YA(F),_e.init(),te=new Cb(F,_e),jt=new GA(F,_e,t,te),Gt=new bb(F,_e),jt.reverseDepthBuffer&&g&&Gt.buffers.depth.setReversed(!0),Fe=new $A(F),Bt=new pb,I=new Rb(F,_e,Gt,Bt,jt,te,Fe),S=new kA(R),Y=new qA(R),ct=new iy(F),Ie=new zA(F,ct),ft=new ZA(F,ct,Fe,Ie),st=new QA(F,ft,ct,Fe),Kt=new JA(F,jt,I),mt=new VA(Bt),Ot=new db(R,S,Y,_e,jt,Ie,mt),gt=new Nb(R,Bt),bt=new _b,de=new Eb(_e),Xt=new BA(R,S,Y,Gt,st,x,d),Lt=new Ab(R,st,jt),V=new Fb(F,Fe,jt,Gt),Pt=new HA(F,_e,Fe),ue=new KA(F,_e,Fe),Fe.programs=Ot.programs,R.capabilities=jt,R.extensions=_e,R.properties=Bt,R.renderLists=bt,R.shadowMap=Lt,R.state=Gt,R.info=Fe}Mt();const tt=new Db(R,F);this.xr=tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(nt,dt,!1))},this.getSize=function(A){return A.set(nt,dt)},this.setSize=function(A,W,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,dt=W,e.width=Math.floor(A*j),e.height=Math.floor(W*j),Z===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(nt*j,dt*j).floor()},this.setDrawingBufferSize=function(A,W,Z){nt=A,dt=W,j=Z,e.width=Math.floor(A*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Nt)},this.setViewport=function(A,W,Z,K){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,W,Z,K),Gt.viewport(z.copy(Nt).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(le)},this.setScissor=function(A,W,Z,K){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,W,Z,K),Gt.scissor(Q.copy(le).multiplyScalar(j).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Gt.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){Et=A},this.setTransparentSort=function(A){wt=A},this.getClearColor=function(A){return A.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(A=!0,W=!0,Z=!0){let K=0;if(A){let q=!1;if(G!==null){const pt=G.texture.format;q=pt===ef||pt===tf||pt===ju}if(q){const pt=G.texture.type,St=pt===qi||pt===Br||pt===xa||pt===Ds||pt===Ju||pt===Qu,Rt=Xt.getClearColor(),Dt=Xt.getClearAlpha(),Jt=Rt.r,Qt=Rt.g,Wt=Rt.b;St?(y[0]=Jt,y[1]=Qt,y[2]=Wt,y[3]=Dt,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=Jt,b[1]=Qt,b[2]=Wt,b[3]=Dt,F.clearBufferiv(F.COLOR,0,b))}else K|=F.COLOR_BUFFER_BIT}W&&(K|=F.DEPTH_BUFFER_BIT),Z&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Xt.dispose(),bt.dispose(),de.dispose(),Bt.dispose(),S.dispose(),Y.dispose(),st.dispose(),Ie.dispose(),V.dispose(),Ot.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Vr),tt.removeEventListener("sessionend",Aa),ai.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Fe.autoReset,W=Lt.enabled,Z=Lt.autoUpdate,K=Lt.needsUpdate,q=Lt.type;Mt(),Fe.autoReset=A,Lt.enabled=W,Lt.autoUpdate=Z,Lt.needsUpdate=K,Lt.type=q}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){const W=A.target;W.removeEventListener("dispose",ne),We(W)}function We(A){je(A),Bt.remove(A)}function je(A){const W=Bt.get(A).programs;W!==void 0&&(W.forEach(function(Z){Ot.releaseProgram(Z)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Z,K,q,pt){W===null&&(W=ze);const St=q.isMesh&&q.matrixWorld.determinant()<0,Rt=Pa(A,W,Z,K,q);Gt.setMaterial(K,St);let Dt=Z.index,Jt=1;if(K.wireframe===!0){if(Dt=ft.getWireframeAttribute(Z),Dt===void 0)return;Jt=2}const Qt=Z.drawRange,Wt=Z.attributes.position;let ve=Qt.start*Jt,Te=(Qt.start+Qt.count)*Jt;pt!==null&&(ve=Math.max(ve,pt.start*Jt),Te=Math.min(Te,(pt.start+pt.count)*Jt)),Dt!==null?(ve=Math.max(ve,0),Te=Math.min(Te,Dt.count)):Wt!=null&&(ve=Math.max(ve,0),Te=Math.min(Te,Wt.count));const qe=Te-ve;if(qe<0||qe===1/0)return;Ie.setup(q,K,Rt,Z,Dt);let Ge,xe=Pt;if(Dt!==null&&(Ge=ct.get(Dt),xe=ue,xe.setIndex(Ge)),q.isMesh)K.wireframe===!0?(Gt.setLineWidth(K.wireframeLinewidth*he()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(q.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),Gt.setLineWidth(Vt*he()),q.isLineSegments?xe.setMode(F.LINES):q.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else q.isPoints?xe.setMode(F.POINTS):q.isSprite&&xe.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))xe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,tn=q._multiDrawCounts,Ee=q._multiDrawCount,mn=Dt?ct.get(Dt).bytesPerElement:1,wi=Bt.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<Ee;Sn++)wi.setValue(F,"_gl_DrawID",Sn),xe.render(Vt[Sn]/mn,tn[Sn])}else if(q.isInstancedMesh)xe.renderInstances(ve,qe,q.count);else if(Z.isInstancedBufferGeometry){const Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tn=Math.min(Z.instanceCount,Vt);xe.renderInstances(ve,qe,tn)}else xe.render(ve,qe)};function we(A,W,Z){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,Wr(A,W,Z),A.side=dr,A.needsUpdate=!0,Wr(A,W,Z),A.side=Vi):Wr(A,W,Z)}this.compile=function(A,W,Z=null){Z===null&&(Z=A),m=de.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pt=q.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const Rt=pt[St];we(Rt,Z,q),K.add(Rt)}else we(pt,Z,q),K.add(pt)}),L.pop(),m=null,K},this.compileAsync=function(A,W,Z=null){const K=this.compile(A,W,Z);return new Promise(q=>{function pt(){if(K.forEach(function(St){Bt.get(St).currentProgram.isReady()&&K.delete(St)}),K.size===0){q(A);return}setTimeout(pt,10)}_e.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Fn=null;function si(A){Fn&&Fn(A)}function Vr(){ai.stop()}function Aa(){ai.start()}const ai=new gm;ai.setAnimationLoop(si),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(A){Fn=A,tt.setAnimationLoop(A),A===null?ai.stop():ai.start()},tt.addEventListener("sessionstart",Vr),tt.addEventListener("sessionend",Aa),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,W,G),m=de.get(A,L.length),m.init(W),L.push(m),kt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ot.setFromProjectionMatrix(kt),Ft=this.localClippingEnabled,_t=mt.init(this.clippingPlanes,Ft),v=bt.get(A,P.length),v.init(),P.push(v),tt.enabled===!0&&tt.isPresenting===!0){const pt=R.xr.getDepthSensingMesh();pt!==null&&zs(pt,W,-1/0,R.sortObjects)}zs(A,W,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(Et,wt),Pe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Pe&&Xt.addToRenderList(v,A),this.info.render.frame++,_t===!0&&mt.beginShadows();const Z=m.state.shadowsArray;Lt.render(Z,A,W),_t===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const pt=W.cameras;if(q.length>0)for(let St=0,Rt=pt.length;St<Rt;St++){const Dt=pt[St];ba(K,q,A,Dt)}Pe&&Xt.render(A);for(let St=0,Rt=pt.length;St<Rt;St++){const Dt=pt[St];wa(v,A,Dt,Dt.viewport)}}else q.length>0&&ba(K,q,A,W),Pe&&Xt.render(A),wa(v,A,W);G!==null&&U===0&&(I.updateMultisampleRenderTarget(G),I.updateRenderTargetMipmap(G)),A.isScene===!0&&A.onAfterRender(R,A,W),Ie.resetDefaultState(),C=-1,T=null,L.pop(),L.length>0?(m=L[L.length-1],_t===!0&&mt.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,P.pop(),P.length>0?v=P[P.length-1]:v=null};function zs(A,W,Z,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ot.intersectsSprite(A)){K&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(kt);const St=st.update(A),Rt=A.material;Rt.visible&&v.push(A,St,Rt,Z,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ot.intersectsObject(A))){const St=st.update(A),Rt=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),$t.copy(St.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(kt)),Array.isArray(Rt)){const Dt=St.groups;for(let Jt=0,Qt=Dt.length;Jt<Qt;Jt++){const Wt=Dt[Jt],ve=Rt[Wt.materialIndex];ve&&ve.visible&&v.push(A,St,ve,Z,$t.z,Wt)}}else Rt.visible&&v.push(A,St,Rt,Z,$t.z,null)}}const pt=A.children;for(let St=0,Rt=pt.length;St<Rt;St++)zs(pt[St],W,Z,K)}function wa(A,W,Z,K){const q=A.opaque,pt=A.transmissive,St=A.transparent;m.setupLightsView(Z),_t===!0&&mt.setGlobalState(R.clippingPlanes,Z),K&&Gt.viewport(z.copy(K)),q.length>0&&kr(q,W,Z),pt.length>0&&kr(pt,W,Z),St.length>0&&kr(St,W,Z),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ba(A,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new zr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?Sa:qi,minFilter:Or,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const pt=m.state.transmissionRenderTarget[K.id],St=K.viewport||z;pt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);const Rt=R.getRenderTarget();R.setRenderTarget(pt),R.getClearColor(it),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&Xt.render(Z);const Dt=R.toneMapping;R.toneMapping=fr;const Jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),_t===!0&&mt.setGlobalState(R.clippingPlanes,K),kr(A,Z,K),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Wt=0,ve=W.length;Wt<ve;Wt++){const Te=W[Wt],qe=Te.object,Ge=Te.geometry,xe=Te.material,Vt=Te.group;if(xe.side===Vi&&qe.layers.test(K.layers)){const tn=xe.side;xe.side=Nn,xe.needsUpdate=!0,Ra(qe,Z,K,Ge,xe,Vt),xe.side=tn,xe.needsUpdate=!0,Qt=!0}}Qt===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}R.setRenderTarget(Rt),R.setClearColor(it,ut),Jt!==void 0&&(K.viewport=Jt),R.toneMapping=Dt}function kr(A,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pt=A.length;q<pt;q++){const St=A[q],Rt=St.object,Dt=St.geometry,Jt=K===null?St.material:K,Qt=St.group;Rt.layers.test(Z.layers)&&Ra(Rt,W,Z,Dt,Jt,Qt)}}function Ra(A,W,Z,K,q,pt){A.onBeforeRender(R,W,Z,K,q,pt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(R,W,Z,K,A,pt),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Nn,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pt),q.side=dr,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,A,pt),q.side=Vi):R.renderBufferDirect(Z,W,K,q,A,pt),A.onAfterRender(R,W,Z,K,q,pt)}function Wr(A,W,Z){W.isScene!==!0&&(W=ze);const K=Bt.get(A),q=m.state.lights,pt=m.state.shadowsArray,St=q.state.version,Rt=Ot.getParameters(A,q.state,pt,W,Z),Dt=Ot.getProgramCacheKey(Rt);let Jt=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?Y:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",ne),Jt=new Map,K.programs=Jt);let Qt=Jt.get(Dt);if(Qt!==void 0){if(K.currentProgram===Qt&&K.lightsStateVersion===St)return La(A,Rt),Qt}else Rt.uniforms=Ot.getUniforms(A),A.onBeforeCompile(Rt,R),Qt=Ot.acquireProgram(Rt,Dt),Jt.set(Dt,Qt),K.uniforms=Rt.uniforms;const Wt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Wt.clippingPlanes=mt.uniform),La(A,Rt),K.needsLights=fl(A),K.lightsStateVersion=St,K.needsLights&&(Wt.ambientLightColor.value=q.state.ambient,Wt.lightProbe.value=q.state.probe,Wt.directionalLights.value=q.state.directional,Wt.directionalLightShadows.value=q.state.directionalShadow,Wt.spotLights.value=q.state.spot,Wt.spotLightShadows.value=q.state.spotShadow,Wt.rectAreaLights.value=q.state.rectArea,Wt.ltc_1.value=q.state.rectAreaLTC1,Wt.ltc_2.value=q.state.rectAreaLTC2,Wt.pointLights.value=q.state.point,Wt.pointLightShadows.value=q.state.pointShadow,Wt.hemisphereLights.value=q.state.hemi,Wt.directionalShadowMap.value=q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Wt.spotShadowMap.value=q.state.spotShadowMap,Wt.spotLightMatrix.value=q.state.spotLightMatrix,Wt.spotLightMap.value=q.state.spotLightMap,Wt.pointShadowMap.value=q.state.pointShadowMap,Wt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Qt,K.uniformsList=null,Qt}function Ca(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function La(A,W){const Z=Bt.get(A);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Pa(A,W,Z,K,q){W.isScene!==!0&&(W=ze),I.resetTextureUnits();const pt=W.fog,St=K.isMeshStandardMaterial?W.environment:null,Rt=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ns,Dt=(K.isMeshStandardMaterial?Y:S).get(K.envMap||St),Jt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qt=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!Z.morphAttributes.position,ve=!!Z.morphAttributes.normal,Te=!!Z.morphAttributes.color;let qe=fr;K.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(qe=R.toneMapping);const Ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xe=Ge!==void 0?Ge.length:0,Vt=Bt.get(K),tn=m.state.lights;if(_t===!0&&(Ft===!0||A!==T)){const on=A===T&&K.id===C;mt.setState(K,A,on)}let Ee=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==tn.state.version||Vt.outputColorSpace!==Rt||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==Dt||K.fog===!0&&Vt.fog!==pt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Jt||Vt.vertexTangents!==Qt||Vt.morphTargets!==Wt||Vt.morphNormals!==ve||Vt.morphColors!==Te||Vt.toneMapping!==qe||Vt.morphTargetsCount!==xe)&&(Ee=!0):(Ee=!0,Vt.__version=K.version);let mn=Vt.currentProgram;Ee===!0&&(mn=Wr(K,W,q));let wi=!1,Sn=!1,Yi=!1;const Oe=mn.getUniforms(),_n=Vt.uniforms;if(Gt.useProgram(mn.program)&&(wi=!0,Sn=!0,Yi=!0),K.id!==C&&(C=K.id,Sn=!0),wi||T!==A){Gt.buffers.depth.getReversed()?(yt.copy(A.projectionMatrix),hE(yt),dE(yt),Oe.setValue(F,"projectionMatrix",yt)):Oe.setValue(F,"projectionMatrix",A.projectionMatrix),Oe.setValue(F,"viewMatrix",A.matrixWorldInverse);const ln=Oe.map.cameraPosition;ln!==void 0&&ln.setValue(F,fe.setFromMatrixPosition(A.matrixWorld)),jt.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Sn=!0,Yi=!0)}if(q.isSkinnedMesh){Oe.setOptional(F,q,"bindMatrix"),Oe.setOptional(F,q,"bindMatrixInverse");const on=q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Oe.setValue(F,"boneTexture",on.boneTexture,I))}q.isBatchedMesh&&(Oe.setOptional(F,q,"batchingTexture"),Oe.setValue(F,"batchingTexture",q._matricesTexture,I),Oe.setOptional(F,q,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",q._indirectTexture,I),Oe.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",q._colorsTexture,I));const Cn=Z.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Kt.update(q,Z,mn),(Sn||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,Oe.setValue(F,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=Dt,_n.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),Sn&&(Oe.setValue(F,"toneMappingExposure",R.toneMappingExposure),Vt.needsLights&&ul(_n,Yi),pt&&K.fog===!0&&gt.refreshFogUniforms(_n,pt),gt.refreshMaterialUniforms(_n,K,j,dt,m.state.transmissionRenderTarget[A.id]),Jo.upload(F,Ca(Vt),_n,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Jo.upload(F,Ca(Vt),_n,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Oe.setValue(F,"center",q.center),Oe.setValue(F,"modelViewMatrix",q.modelViewMatrix),Oe.setValue(F,"normalMatrix",q.normalMatrix),Oe.setValue(F,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const on=K.uniformsGroups;for(let ln=0,mr=on.length;ln<mr;ln++){const Ln=on[ln];V.update(Ln,mn),V.bind(Ln,mn)}}return mn}function ul(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,W,Z){Bt.get(A.texture).__webglTexture=W,Bt.get(A.depthTexture).__webglTexture=Z;const K=Bt.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Z=Bt.get(A);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const hl=F.createFramebuffer();this.setRenderTarget=function(A,W=0,Z=0){G=A,N=W,U=Z;let K=!0,q=null,pt=!1,St=!1;if(A){const Dt=Bt.get(A);if(Dt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Dt.__hasExternalTextures)I.rebindTextures(A,Bt.get(A.texture).__webglTexture,Bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Wt=A.depthTexture;if(Dt.__boundDepthTexture!==Wt){if(Wt!==null&&Bt.has(Wt)&&(A.width!==Wt.image.width||A.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(St=!0);const Qt=Bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[W])?q=Qt[W][Z]:q=Qt[W],pt=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?q=Bt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?q=Qt[Z]:q=Qt,z.copy(A.viewport),Q.copy(A.scissor),$=A.scissorTest}else z.copy(Nt).multiplyScalar(j).floor(),Q.copy(le).multiplyScalar(j).floor(),$=Ce;if(Z!==0&&(q=hl),Gt.bindFramebuffer(F.FRAMEBUFFER,q)&&K&&Gt.drawBuffers(A,q),Gt.viewport(z),Gt.scissor(Q),Gt.setScissorTest($),pt){const Dt=Bt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Dt.__webglTexture,Z)}else if(St){const Dt=Bt.get(A.texture),Jt=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,Z,Jt)}else if(A!==null&&Z!==0){const Dt=Bt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(A,W,Z,K,q,pt,St){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){Gt.bindFramebuffer(F.FRAMEBUFFER,Rt);try{const Dt=A.texture,Jt=Dt.format,Qt=Dt.type;if(!jt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q&&F.readPixels(W,Z,K,q,te.convert(Jt),te.convert(Qt),pt)}finally{const Dt=G!==null?Bt.get(G).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,W,Z,K,q,pt,St){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){const Dt=A.texture,Jt=Dt.format,Qt=Dt.type;if(!jt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q){Gt.bindFramebuffer(F.FRAMEBUFFER,Rt);const Wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(W,Z,K,q,te.convert(Jt),te.convert(Qt),0);const ve=G!==null?Bt.get(G).__webglFramebuffer:null;Gt.bindFramebuffer(F.FRAMEBUFFER,ve);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fE(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.deleteBuffer(Wt),F.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Z=0){A.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(A.image.width*K),pt=Math.floor(A.image.height*K),St=W!==null?W.x:0,Rt=W!==null?W.y:0;I.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,St,Rt,q,pt),Gt.unbindTexture()};const dl=F.createFramebuffer(),pl=F.createFramebuffer();this.copyTextureToTexture=function(A,W,Z=null,K=null,q=0,pt=null){A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],pt=arguments[3]||0,Z=null),pt===null&&(q!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=q,q=0):pt=0);let St,Rt,Dt,Jt,Qt,Wt,ve,Te,qe;const Ge=A.isCompressedTexture?A.mipmaps[pt]:A.image;if(Z!==null)St=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Jt=Z.min.x,Qt=Z.min.y,Wt=Z.isBox3?Z.min.z:0;else{const Cn=Math.pow(2,-q);St=Math.floor(Ge.width*Cn),Rt=Math.floor(Ge.height*Cn),A.isDataArrayTexture?Dt=Ge.depth:A.isData3DTexture?Dt=Math.floor(Ge.depth*Cn):Dt=1,Jt=0,Qt=0,Wt=0}K!==null?(ve=K.x,Te=K.y,qe=K.z):(ve=0,Te=0,qe=0);const xe=te.convert(W.format),Vt=te.convert(W.type);let tn;W.isData3DTexture?(I.setTexture3D(W,0),tn=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),tn=F.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),tn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Yi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Wt);const Oe=A.isDataArrayTexture||A.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=Bt.get(A),on=Bt.get(W),ln=Bt.get(Cn.__renderTarget),mr=Bt.get(on.__renderTarget);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,ln.__webglFramebuffer),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Ln=0;Ln<Dt;Ln++)Oe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(A).__webglTexture,q,Wt+Ln),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.get(W).__webglTexture,pt,qe+Ln)),F.blitFramebuffer(Jt,Qt,St,Rt,ve,Te,St,Rt,F.DEPTH_BUFFER_BIT,F.NEAREST);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Bt.has(A)){const Cn=Bt.get(A),on=Bt.get(W);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,dl),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,pl);for(let ln=0;ln<Dt;ln++)Oe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cn.__webglTexture,q,Wt+ln):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cn.__webglTexture,q),_n?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,on.__webglTexture,pt,qe+ln):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,on.__webglTexture,pt),q!==0?F.blitFramebuffer(Jt,Qt,St,Rt,ve,Te,St,Rt,F.COLOR_BUFFER_BIT,F.NEAREST):_n?F.copyTexSubImage3D(tn,pt,ve,Te,qe+ln,Jt,Qt,St,Rt):F.copyTexSubImage2D(tn,pt,ve,Te,Jt,Qt,St,Rt);Gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(tn,pt,ve,Te,qe,St,Rt,Dt,xe,Vt,Ge.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(tn,pt,ve,Te,qe,St,Rt,Dt,xe,Ge.data):F.texSubImage3D(tn,pt,ve,Te,qe,St,Rt,Dt,xe,Vt,Ge):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,ve,Te,St,Rt,xe,Vt,Ge.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,ve,Te,Ge.width,Ge.height,xe,Ge.data):F.texSubImage2D(F.TEXTURE_2D,pt,ve,Te,St,Rt,xe,Vt,Ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yi),pt===0&&W.generateMipmaps&&F.generateMipmap(tn),Gt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Z=null,K=null,q=0){return A.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Z,K,q)},this.initRenderTarget=function(A){Bt.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Gt.unbindTexture()},this.resetState=function(){N=0,U=0,G=null,Gt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class Ta{constructor(t){Ht(this,"mesh");Ht(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,i,a){}graphics(t,e,i,a){}kill(){this.isAlive=!1}beforeDeath(t,e,i){}}class Ti{constructor(t){Ht(this,"center");Ht(this,"parts");this.center=t.center,this.parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this.parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}}const Bb={createGrid(s,t){const e=[];for(let i=0;i<s;i++){e[i]=[];for(let a=0;a<t;a++){const o={actors:[],isWalkable:!0};e[i][a]=o}}return e}};class zb{constructor(t){Ht(this,"actorsGrid");Ht(this,"components",[]);Ht(this,"camera");Ht(this,"scene");this.actorsGrid=Bb.createGrid(t.width,t.height),this.camera=t.camera??new Xn,this.scene=t.scene??new BE}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof Ti?t.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof Ti?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((o,c)=>{o.forEach((u,d)=>{const f=new Ut(c,d);u.actors.forEach(p=>p.update(t,e,this,f.clone()))})}),this.components.forEach(o=>o.update(t,e,this)),this.actorsGrid.map((o,c)=>o.map((u,d)=>{const f=new Ut(c,d),p=[],_=[];for(let g=0;g<u.actors.length;g++){const x=u.actors[g];x.isAlive?p.push(x):_.push(x)}_.forEach(g=>{g.beforeDeath(t,this,f),g.mesh instanceof Ti?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)}),u.actors=p}));const i=[],a=[];for(let o=0;o<this.components.length;o++){const c=this.components[o];c.isAlive?i.push(c):a.push(c)}a.forEach(o=>{o.mesh instanceof Ti?o.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(o.mesh)}),this.components=i}graphics(t,e){this.actorsGrid.forEach((i,a)=>{i.forEach((o,c)=>{const u=new Ut(a,c);o.actors.forEach(d=>d.graphics(t,e,this,u.clone()))})}),this.components.forEach(i=>i.graphics(t,e,this))}}var Cs=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++s%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===p?"block":"none";s=p}var a=(performance||Date).now(),o=a,c=0,u=e(new Cs.Panel("FPS","#0ff","#002")),d=e(new Cs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new Cs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:t,setMode:i}};Cs.Panel=function(s,t,e){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,d=48*c,f=3*c,p=2*c,_=3*c,g=15*c,x=74*c,y=30*c,b=document.createElement("canvas");b.width=u,b.height=d,b.style.cssText="width:80px;height:48px";var v=b.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=e,v.fillRect(0,0,u,d),v.fillStyle=t,v.fillText(s,f,p),v.fillRect(_,g,x,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_,g,x,y),{dom:b,update:function(m,P){i=Math.min(i,m),a=Math.max(a,m),v.fillStyle=e,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=t,v.fillText(o(m)+" "+s+" ("+o(i)+"-"+o(a)+")",f,p),v.drawImage(b,_+c,g,x-c,y,_,g,x-c,y),v.fillRect(_+x-c,g,c,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,o((1-m/P)*y))}}};const Hb="canvas";class Gb{constructor(){Ht(this,"wasPressedMap",new Map);Ht(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const Vb=new Gb;class kb{constructor(){Ht(this,"renderer");Ht(this,"keyboardHandler");Ht(this,"isGameOver",!1);Ht(this,"lastUpdate",Date.now());Ht(this,"lastGraphics",Date.now());Ht(this,"stats",new Cs);Ht(this,"containers",new Map);Ht(this,"currentContainer");this.renderer=new Ob,this.renderer.setSize(800,800),this.renderer.domElement.id=Hb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=Vb,this.stats=new Cs,document.body.appendChild(this.stats.dom);const t=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",t),window.requestAnimationFrame(t)}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=Dp(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=Dp(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function Dp(s){return Math.max(0,Math.min(s,1e3))}class uf{constructor(t){Ht(this,"mesh");Ht(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,i){}graphics(t,e,i){}kill(){this.isAlive=!1}}const ye={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc"},ni=4,fn={createCube:s=>{const t=(s==null?void 0:s.size)??1,e=(s==null?void 0:s.color)??65280,i=new Hr(t,t,t,ni,ni,ni),a={color:e},o=s!=null&&s.basicMaterial?new Mi(a):new Ss(a);return new bn(i,o)},createBox:s=>{const t=(s==null?void 0:s.width)??1,e=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.depth)??1,a=(s==null?void 0:s.color)??new Ct(ye.RED),o=new Hr(t,e,i,ni,ni,ni),c={color:a},u=s!=null&&s.basicMaterial?new Mi(c):new Ss(c);return new bn(o,u)},createCone:s=>{const t=(s==null?void 0:s.radius)??1,e=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.color)??new Ct(ye.RED),a=new rf(t,e,ni,ni),o={color:i},c=s!=null&&s.basicMaterial?new Mi(o):new Ss(o);return new bn(a,c)},createSphere:s=>{const t=(s==null?void 0:s.radius)??1,e=(s==null?void 0:s.color)??new Ct(ye.RED),i=new of(t,ni,ni),a={color:e},o=s!=null&&s.basicMaterial?new Mi(a):new Ss(a);return new bn(i,o)},createCylinder:s=>{const t=(s==null?void 0:s.radius)??1,e=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.color)??new Ct(ye.RED),a=new ol(t,t,e,ni*2,ni),o={color:i},c=s!=null&&s.basicMaterial?new Mi(o):new Ss(o);return new bn(a,c)},createGem(s){const t=(s==null?void 0:s.size)??1,e=(s==null?void 0:s.color)??new Ct(ye.RED),i=new af(t,0),a={color:e},o=s!=null&&s.basicMaterial?new Mi(a):new Ss(a);return new bn(i,o)}};class Wb extends Ta{constructor(t){const e=new Ti({center:t.position,parts:[{mesh:fn.createBox({width:t.size,height:t.size/4,depth:t.size,color:new Ct(ye.DARK)}),offset:new O(0,-t.size*3/8,0)},{mesh:fn.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new Ct(ye.WHITE)}),offset:new O(0,0,0)},{mesh:fn.createBox({width:t.size,height:t.size/4,depth:t.size,color:new Ct(ye.DARK)}),offset:new O(0,t.size*3/8,0)}]});super({mesh:e})}}var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},eu={},ua={},_a={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Xb=_a.exports,Up;function qb(){return Up||(Up=1,function(s,t){(function(){var e,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",_=1,g=2,x=4,y=1,b=2,v=1,m=2,P=4,L=8,R=16,H=32,N=64,U=128,G=256,C=512,T=30,z="...",Q=800,$=16,it=1,ut=2,nt=3,dt=1/0,j=9007199254740991,Et=17976931348623157e292,wt=NaN,Nt=4294967295,le=Nt-1,Ce=Nt>>>1,ot=[["ary",U],["bind",v],["bindKey",m],["curry",L],["curryRight",R],["flip",C],["partial",H],["partialRight",N],["rearg",G]],_t="[object Arguments]",Ft="[object Array]",yt="[object AsyncFunction]",kt="[object Boolean]",fe="[object Date]",$t="[object DOMException]",ze="[object Error]",Pe="[object Function]",he="[object GeneratorFunction]",F="[object Map]",an="[object Number]",_e="[object Null]",jt="[object Object]",Gt="[object Promise]",Fe="[object Proxy]",Bt="[object RegExp]",I="[object Set]",S="[object String]",Y="[object Symbol]",ct="[object Undefined]",ft="[object WeakMap]",st="[object WeakSet]",Ot="[object ArrayBuffer]",gt="[object DataView]",bt="[object Float32Array]",de="[object Float64Array]",mt="[object Int8Array]",Lt="[object Int16Array]",Xt="[object Int32Array]",Kt="[object Uint8Array]",Pt="[object Uint8ClampedArray]",ue="[object Uint16Array]",te="[object Uint32Array]",Ie=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Mt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tt=/&(?:amp|lt|gt|quot|#39);/g,lt=/[&<>"']/g,At=RegExp(tt.source),Tt=RegExp(lt.source),ne=/<%-([\s\S]+?)%>/g,We=/<%([\s\S]+?)%>/g,je=/<%=([\s\S]+?)%>/g,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/,si=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vr=/[\\^$.*+?()[\]{}|]/g,Aa=RegExp(Vr.source),ai=/^\s+/,zs=/\s/,wa=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ba=/\{\n\/\* \[wrapped with (.+)\] \*/,kr=/,? & /,Ra=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Wr=/[()=,{}\[\]\/\s]/,Ca=/\\(\\)?/g,La=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,ul=/^[-+]0x[0-9a-f]+$/i,fl=/^0b[01]+$/i,hl=/^\[object .+?Constructor\]$/,dl=/^0o[0-7]+$/i,pl=/^(?:0|[1-9]\d*)$/,A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",St="\\u20d0-\\u20ff",Rt=q+pt+St,Dt="\\u2700-\\u27bf",Jt="a-z\\xdf-\\xf6\\xf8-\\xff",Qt="\\xac\\xb1\\xd7\\xf7",Wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ve="\\u2000-\\u206f",Te=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ge="\\ufe0e\\ufe0f",xe=Qt+Wt+ve+Te,Vt="['’]",tn="["+K+"]",Ee="["+xe+"]",mn="["+Rt+"]",wi="\\d+",Sn="["+Dt+"]",Yi="["+Jt+"]",Oe="[^"+K+xe+wi+Dt+Jt+qe+"]",_n="\\ud83c[\\udffb-\\udfff]",Cn="(?:"+mn+"|"+_n+")",on="[^"+K+"]",ln="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ln="["+qe+"]",df="\\u200d",pf="(?:"+Yi+"|"+Oe+")",ym="(?:"+Ln+"|"+Oe+")",mf="(?:"+Vt+"(?:d|ll|m|re|s|t|ve))?",_f="(?:"+Vt+"(?:D|LL|M|RE|S|T|VE))?",gf=Cn+"?",vf="["+Ge+"]?",Tm="(?:"+df+"(?:"+[on,ln,mr].join("|")+")"+vf+gf+")*",Am="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",wm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xf=vf+gf+Tm,bm="(?:"+[Sn,ln,mr].join("|")+")"+xf,Rm="(?:"+[on+mn+"?",mn,ln,mr,tn].join("|")+")",Cm=RegExp(Vt,"g"),Lm=RegExp(mn,"g"),ml=RegExp(_n+"(?="+_n+")|"+Rm+xf,"g"),Pm=RegExp([Ln+"?"+Yi+"+"+mf+"(?="+[Ee,Ln,"$"].join("|")+")",ym+"+"+_f+"(?="+[Ee,Ln+pf,"$"].join("|")+")",Ln+"?"+pf+"+"+mf,Ln+"+"+_f,wm,Am,wi,bm].join("|"),"g"),Im=RegExp("["+df+K+Rt+Ge+"]"),Dm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Um=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nm=-1,Ve={};Ve[bt]=Ve[de]=Ve[mt]=Ve[Lt]=Ve[Xt]=Ve[Kt]=Ve[Pt]=Ve[ue]=Ve[te]=!0,Ve[_t]=Ve[Ft]=Ve[Ot]=Ve[kt]=Ve[gt]=Ve[fe]=Ve[ze]=Ve[Pe]=Ve[F]=Ve[an]=Ve[jt]=Ve[Bt]=Ve[I]=Ve[S]=Ve[ft]=!1;var He={};He[_t]=He[Ft]=He[Ot]=He[gt]=He[kt]=He[fe]=He[bt]=He[de]=He[mt]=He[Lt]=He[Xt]=He[F]=He[an]=He[jt]=He[Bt]=He[I]=He[S]=He[Y]=He[Kt]=He[Pt]=He[ue]=He[te]=!0,He[ze]=He[Pe]=He[ft]=!1;var Fm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Om={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Bm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},zm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hm=parseFloat,Gm=parseInt,Mf=typeof Xo=="object"&&Xo&&Xo.Object===Object&&Xo,Vm=typeof self=="object"&&self&&self.Object===Object&&self,hn=Mf||Vm||Function("return this")(),_l=t&&!t.nodeType&&t,_r=_l&&!0&&s&&!s.nodeType&&s,Sf=_r&&_r.exports===_l,gl=Sf&&Mf.process,Yn=function(){try{var k=_r&&_r.require&&_r.require("util").types;return k||gl&&gl.binding&&gl.binding("util")}catch{}}(),Ef=Yn&&Yn.isArrayBuffer,yf=Yn&&Yn.isDate,Tf=Yn&&Yn.isMap,Af=Yn&&Yn.isRegExp,wf=Yn&&Yn.isSet,bf=Yn&&Yn.isTypedArray;function On(k,et,J){switch(J.length){case 0:return k.call(et);case 1:return k.call(et,J[0]);case 2:return k.call(et,J[0],J[1]);case 3:return k.call(et,J[0],J[1],J[2])}return k.apply(et,J)}function km(k,et,J,It){for(var ee=-1,be=k==null?0:k.length;++ee<be;){var en=k[ee];et(It,en,J(en),k)}return It}function Zn(k,et){for(var J=-1,It=k==null?0:k.length;++J<It&&et(k[J],J,k)!==!1;);return k}function Wm(k,et){for(var J=k==null?0:k.length;J--&&et(k[J],J,k)!==!1;);return k}function Rf(k,et){for(var J=-1,It=k==null?0:k.length;++J<It;)if(!et(k[J],J,k))return!1;return!0}function Zi(k,et){for(var J=-1,It=k==null?0:k.length,ee=0,be=[];++J<It;){var en=k[J];et(en,J,k)&&(be[ee++]=en)}return be}function Ia(k,et){var J=k==null?0:k.length;return!!J&&Xr(k,et,0)>-1}function vl(k,et,J){for(var It=-1,ee=k==null?0:k.length;++It<ee;)if(J(et,k[It]))return!0;return!1}function Xe(k,et){for(var J=-1,It=k==null?0:k.length,ee=Array(It);++J<It;)ee[J]=et(k[J],J,k);return ee}function Ki(k,et){for(var J=-1,It=et.length,ee=k.length;++J<It;)k[ee+J]=et[J];return k}function xl(k,et,J,It){var ee=-1,be=k==null?0:k.length;for(It&&be&&(J=k[++ee]);++ee<be;)J=et(J,k[ee],ee,k);return J}function Xm(k,et,J,It){var ee=k==null?0:k.length;for(It&&ee&&(J=k[--ee]);ee--;)J=et(J,k[ee],ee,k);return J}function Ml(k,et){for(var J=-1,It=k==null?0:k.length;++J<It;)if(et(k[J],J,k))return!0;return!1}var qm=Sl("length");function Ym(k){return k.split("")}function Zm(k){return k.match(Ra)||[]}function Cf(k,et,J){var It;return J(k,function(ee,be,en){if(et(ee,be,en))return It=be,!1}),It}function Da(k,et,J,It){for(var ee=k.length,be=J+(It?1:-1);It?be--:++be<ee;)if(et(k[be],be,k))return be;return-1}function Xr(k,et,J){return et===et?a_(k,et,J):Da(k,Lf,J)}function Km(k,et,J,It){for(var ee=J-1,be=k.length;++ee<be;)if(It(k[ee],et))return ee;return-1}function Lf(k){return k!==k}function Pf(k,et){var J=k==null?0:k.length;return J?yl(k,et)/J:wt}function Sl(k){return function(et){return et==null?e:et[k]}}function El(k){return function(et){return k==null?e:k[et]}}function If(k,et,J,It,ee){return ee(k,function(be,en,Be){J=It?(It=!1,be):et(J,be,en,Be)}),J}function $m(k,et){var J=k.length;for(k.sort(et);J--;)k[J]=k[J].value;return k}function yl(k,et){for(var J,It=-1,ee=k.length;++It<ee;){var be=et(k[It]);be!==e&&(J=J===e?be:J+be)}return J}function Tl(k,et){for(var J=-1,It=Array(k);++J<k;)It[J]=et(J);return It}function Jm(k,et){return Xe(et,function(J){return[J,k[J]]})}function Df(k){return k&&k.slice(0,Of(k)+1).replace(ai,"")}function Bn(k){return function(et){return k(et)}}function Al(k,et){return Xe(et,function(J){return k[J]})}function Hs(k,et){return k.has(et)}function Uf(k,et){for(var J=-1,It=k.length;++J<It&&Xr(et,k[J],0)>-1;);return J}function Nf(k,et){for(var J=k.length;J--&&Xr(et,k[J],0)>-1;);return J}function Qm(k,et){for(var J=k.length,It=0;J--;)k[J]===et&&++It;return It}var jm=El(Fm),t_=El(Om);function e_(k){return"\\"+zm[k]}function n_(k,et){return k==null?e:k[et]}function qr(k){return Im.test(k)}function i_(k){return Dm.test(k)}function r_(k){for(var et,J=[];!(et=k.next()).done;)J.push(et.value);return J}function wl(k){var et=-1,J=Array(k.size);return k.forEach(function(It,ee){J[++et]=[ee,It]}),J}function Ff(k,et){return function(J){return k(et(J))}}function $i(k,et){for(var J=-1,It=k.length,ee=0,be=[];++J<It;){var en=k[J];(en===et||en===p)&&(k[J]=p,be[ee++]=J)}return be}function Ua(k){var et=-1,J=Array(k.size);return k.forEach(function(It){J[++et]=It}),J}function s_(k){var et=-1,J=Array(k.size);return k.forEach(function(It){J[++et]=[It,It]}),J}function a_(k,et,J){for(var It=J-1,ee=k.length;++It<ee;)if(k[It]===et)return It;return-1}function o_(k,et,J){for(var It=J+1;It--;)if(k[It]===et)return It;return It}function Yr(k){return qr(k)?c_(k):qm(k)}function oi(k){return qr(k)?u_(k):Ym(k)}function Of(k){for(var et=k.length;et--&&zs.test(k.charAt(et)););return et}var l_=El(Bm);function c_(k){for(var et=ml.lastIndex=0;ml.test(k);)++et;return et}function u_(k){return k.match(ml)||[]}function f_(k){return k.match(Pm)||[]}var h_=function k(et){et=et==null?hn:Zr.defaults(hn.Object(),et,Zr.pick(hn,Um));var J=et.Array,It=et.Date,ee=et.Error,be=et.Function,en=et.Math,Be=et.Object,bl=et.RegExp,d_=et.String,Kn=et.TypeError,Na=J.prototype,p_=be.prototype,Kr=Be.prototype,Fa=et["__core-js_shared__"],Oa=p_.toString,Le=Kr.hasOwnProperty,m_=0,Bf=function(){var n=/[^.]+$/.exec(Fa&&Fa.keys&&Fa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ba=Kr.toString,__=Oa.call(Be),g_=hn._,v_=bl("^"+Oa.call(Le).replace(Vr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),za=Sf?et.Buffer:e,Ji=et.Symbol,Ha=et.Uint8Array,zf=za?za.allocUnsafe:e,Ga=Ff(Be.getPrototypeOf,Be),Hf=Be.create,Gf=Kr.propertyIsEnumerable,Va=Na.splice,Vf=Ji?Ji.isConcatSpreadable:e,Gs=Ji?Ji.iterator:e,gr=Ji?Ji.toStringTag:e,ka=function(){try{var n=Er(Be,"defineProperty");return n({},"",{}),n}catch{}}(),x_=et.clearTimeout!==hn.clearTimeout&&et.clearTimeout,M_=It&&It.now!==hn.Date.now&&It.now,S_=et.setTimeout!==hn.setTimeout&&et.setTimeout,Wa=en.ceil,Xa=en.floor,Rl=Be.getOwnPropertySymbols,E_=za?za.isBuffer:e,kf=et.isFinite,y_=Na.join,T_=Ff(Be.keys,Be),nn=en.max,gn=en.min,A_=It.now,w_=et.parseInt,Wf=en.random,b_=Na.reverse,Cl=Er(et,"DataView"),Vs=Er(et,"Map"),Ll=Er(et,"Promise"),$r=Er(et,"Set"),ks=Er(et,"WeakMap"),Ws=Er(Be,"create"),qa=ks&&new ks,Jr={},R_=yr(Cl),C_=yr(Vs),L_=yr(Ll),P_=yr($r),I_=yr(ks),Ya=Ji?Ji.prototype:e,Xs=Ya?Ya.valueOf:e,Xf=Ya?Ya.toString:e;function E(n){if(Ze(n)&&!ie(n)&&!(n instanceof ge)){if(n instanceof $n)return n;if(Le.call(n,"__wrapped__"))return qh(n)}return new $n(n)}var Qr=function(){function n(){}return function(r){if(!Ye(r))return{};if(Hf)return Hf(r);n.prototype=r;var l=new n;return n.prototype=e,l}}();function Za(){}function $n(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}E.templateSettings={escape:ne,evaluate:We,interpolate:je,variable:"",imports:{_:E}},E.prototype=Za.prototype,E.prototype.constructor=E,$n.prototype=Qr(Za.prototype),$n.prototype.constructor=$n;function ge(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nt,this.__views__=[]}function D_(){var n=new ge(this.__wrapped__);return n.__actions__=Pn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Pn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Pn(this.__views__),n}function U_(){if(this.__filtered__){var n=new ge(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function N_(){var n=this.__wrapped__.value(),r=this.__dir__,l=ie(n),h=r<0,M=l?n.length:0,w=Yg(0,M,this.__views__),D=w.start,B=w.end,X=B-D,rt=h?B:D-1,at=this.__iteratees__,ht=at.length,vt=0,zt=gn(X,this.__takeCount__);if(!l||!h&&M==X&&zt==X)return mh(n,this.__actions__);var Yt=[];t:for(;X--&&vt<zt;){rt+=r;for(var ae=-1,Zt=n[rt];++ae<ht;){var pe=at[ae],Me=pe.iteratee,Gn=pe.type,Tn=Me(Zt);if(Gn==ut)Zt=Tn;else if(!Tn){if(Gn==it)continue t;break t}}Yt[vt++]=Zt}return Yt}ge.prototype=Qr(Za.prototype),ge.prototype.constructor=ge;function vr(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function F_(){this.__data__=Ws?Ws(null):{},this.size=0}function O_(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function B_(n){var r=this.__data__;if(Ws){var l=r[n];return l===d?e:l}return Le.call(r,n)?r[n]:e}function z_(n){var r=this.__data__;return Ws?r[n]!==e:Le.call(r,n)}function H_(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ws&&r===e?d:r,this}vr.prototype.clear=F_,vr.prototype.delete=O_,vr.prototype.get=B_,vr.prototype.has=z_,vr.prototype.set=H_;function bi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function G_(){this.__data__=[],this.size=0}function V_(n){var r=this.__data__,l=Ka(r,n);if(l<0)return!1;var h=r.length-1;return l==h?r.pop():Va.call(r,l,1),--this.size,!0}function k_(n){var r=this.__data__,l=Ka(r,n);return l<0?e:r[l][1]}function W_(n){return Ka(this.__data__,n)>-1}function X_(n,r){var l=this.__data__,h=Ka(l,n);return h<0?(++this.size,l.push([n,r])):l[h][1]=r,this}bi.prototype.clear=G_,bi.prototype.delete=V_,bi.prototype.get=k_,bi.prototype.has=W_,bi.prototype.set=X_;function Ri(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var h=n[r];this.set(h[0],h[1])}}function q_(){this.size=0,this.__data__={hash:new vr,map:new(Vs||bi),string:new vr}}function Y_(n){var r=oo(this,n).delete(n);return this.size-=r?1:0,r}function Z_(n){return oo(this,n).get(n)}function K_(n){return oo(this,n).has(n)}function $_(n,r){var l=oo(this,n),h=l.size;return l.set(n,r),this.size+=l.size==h?0:1,this}Ri.prototype.clear=q_,Ri.prototype.delete=Y_,Ri.prototype.get=Z_,Ri.prototype.has=K_,Ri.prototype.set=$_;function xr(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++r<l;)this.add(n[r])}function J_(n){return this.__data__.set(n,d),this}function Q_(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=J_,xr.prototype.has=Q_;function li(n){var r=this.__data__=new bi(n);this.size=r.size}function j_(){this.__data__=new bi,this.size=0}function tg(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function eg(n){return this.__data__.get(n)}function ng(n){return this.__data__.has(n)}function ig(n,r){var l=this.__data__;if(l instanceof bi){var h=l.__data__;if(!Vs||h.length<a-1)return h.push([n,r]),this.size=++l.size,this;l=this.__data__=new Ri(h)}return l.set(n,r),this.size=l.size,this}li.prototype.clear=j_,li.prototype.delete=tg,li.prototype.get=eg,li.prototype.has=ng,li.prototype.set=ig;function qf(n,r){var l=ie(n),h=!l&&Tr(n),M=!l&&!h&&nr(n),w=!l&&!h&&!M&&ns(n),D=l||h||M||w,B=D?Tl(n.length,d_):[],X=B.length;for(var rt in n)(r||Le.call(n,rt))&&!(D&&(rt=="length"||M&&(rt=="offset"||rt=="parent")||w&&(rt=="buffer"||rt=="byteLength"||rt=="byteOffset")||Ii(rt,X)))&&B.push(rt);return B}function Yf(n){var r=n.length;return r?n[Gl(0,r-1)]:e}function rg(n,r){return lo(Pn(n),Mr(r,0,n.length))}function sg(n){return lo(Pn(n))}function Pl(n,r,l){(l!==e&&!ci(n[r],l)||l===e&&!(r in n))&&Ci(n,r,l)}function qs(n,r,l){var h=n[r];(!(Le.call(n,r)&&ci(h,l))||l===e&&!(r in n))&&Ci(n,r,l)}function Ka(n,r){for(var l=n.length;l--;)if(ci(n[l][0],r))return l;return-1}function ag(n,r,l,h){return Qi(n,function(M,w,D){r(h,M,l(M),D)}),h}function Zf(n,r){return n&&vi(r,cn(r),n)}function og(n,r){return n&&vi(r,Dn(r),n)}function Ci(n,r,l){r=="__proto__"&&ka?ka(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function Il(n,r){for(var l=-1,h=r.length,M=J(h),w=n==null;++l<h;)M[l]=w?e:hc(n,r[l]);return M}function Mr(n,r,l){return n===n&&(l!==e&&(n=n<=l?n:l),r!==e&&(n=n>=r?n:r)),n}function Jn(n,r,l,h,M,w){var D,B=r&_,X=r&g,rt=r&x;if(l&&(D=M?l(n,h,M,w):l(n)),D!==e)return D;if(!Ye(n))return n;var at=ie(n);if(at){if(D=Kg(n),!B)return Pn(n,D)}else{var ht=vn(n),vt=ht==Pe||ht==he;if(nr(n))return vh(n,B);if(ht==jt||ht==_t||vt&&!M){if(D=X||vt?{}:Oh(n),!B)return X?Bg(n,og(D,n)):Og(n,Zf(D,n))}else{if(!He[ht])return M?n:{};D=$g(n,ht,B)}}w||(w=new li);var zt=w.get(n);if(zt)return zt;w.set(n,D),hd(n)?n.forEach(function(Zt){D.add(Jn(Zt,r,l,Zt,n,w))}):ud(n)&&n.forEach(function(Zt,pe){D.set(pe,Jn(Zt,r,l,pe,n,w))});var Yt=rt?X?Ql:Jl:X?Dn:cn,ae=at?e:Yt(n);return Zn(ae||n,function(Zt,pe){ae&&(pe=Zt,Zt=n[pe]),qs(D,pe,Jn(Zt,r,l,pe,n,w))}),D}function lg(n){var r=cn(n);return function(l){return Kf(l,n,r)}}function Kf(n,r,l){var h=l.length;if(n==null)return!h;for(n=Be(n);h--;){var M=l[h],w=r[M],D=n[M];if(D===e&&!(M in n)||!w(D))return!1}return!0}function $f(n,r,l){if(typeof n!="function")throw new Kn(c);return js(function(){n.apply(e,l)},r)}function Ys(n,r,l,h){var M=-1,w=Ia,D=!0,B=n.length,X=[],rt=r.length;if(!B)return X;l&&(r=Xe(r,Bn(l))),h?(w=vl,D=!1):r.length>=a&&(w=Hs,D=!1,r=new xr(r));t:for(;++M<B;){var at=n[M],ht=l==null?at:l(at);if(at=h||at!==0?at:0,D&&ht===ht){for(var vt=rt;vt--;)if(r[vt]===ht)continue t;X.push(at)}else w(r,ht,h)||X.push(at)}return X}var Qi=yh(gi),Jf=yh(Ul,!0);function cg(n,r){var l=!0;return Qi(n,function(h,M,w){return l=!!r(h,M,w),l}),l}function $a(n,r,l){for(var h=-1,M=n.length;++h<M;){var w=n[h],D=r(w);if(D!=null&&(B===e?D===D&&!Hn(D):l(D,B)))var B=D,X=w}return X}function ug(n,r,l,h){var M=n.length;for(l=re(l),l<0&&(l=-l>M?0:M+l),h=h===e||h>M?M:re(h),h<0&&(h+=M),h=l>h?0:pd(h);l<h;)n[l++]=r;return n}function Qf(n,r){var l=[];return Qi(n,function(h,M,w){r(h,M,w)&&l.push(h)}),l}function dn(n,r,l,h,M){var w=-1,D=n.length;for(l||(l=Qg),M||(M=[]);++w<D;){var B=n[w];r>0&&l(B)?r>1?dn(B,r-1,l,h,M):Ki(M,B):h||(M[M.length]=B)}return M}var Dl=Th(),jf=Th(!0);function gi(n,r){return n&&Dl(n,r,cn)}function Ul(n,r){return n&&jf(n,r,cn)}function Ja(n,r){return Zi(r,function(l){return Di(n[l])})}function Sr(n,r){r=tr(r,n);for(var l=0,h=r.length;n!=null&&l<h;)n=n[xi(r[l++])];return l&&l==h?n:e}function th(n,r,l){var h=r(n);return ie(n)?h:Ki(h,l(n))}function En(n){return n==null?n===e?ct:_e:gr&&gr in Be(n)?qg(n):s0(n)}function Nl(n,r){return n>r}function fg(n,r){return n!=null&&Le.call(n,r)}function hg(n,r){return n!=null&&r in Be(n)}function dg(n,r,l){return n>=gn(r,l)&&n<nn(r,l)}function Fl(n,r,l){for(var h=l?vl:Ia,M=n[0].length,w=n.length,D=w,B=J(w),X=1/0,rt=[];D--;){var at=n[D];D&&r&&(at=Xe(at,Bn(r))),X=gn(at.length,X),B[D]=!l&&(r||M>=120&&at.length>=120)?new xr(D&&at):e}at=n[0];var ht=-1,vt=B[0];t:for(;++ht<M&&rt.length<X;){var zt=at[ht],Yt=r?r(zt):zt;if(zt=l||zt!==0?zt:0,!(vt?Hs(vt,Yt):h(rt,Yt,l))){for(D=w;--D;){var ae=B[D];if(!(ae?Hs(ae,Yt):h(n[D],Yt,l)))continue t}vt&&vt.push(Yt),rt.push(zt)}}return rt}function pg(n,r,l,h){return gi(n,function(M,w,D){r(h,l(M),w,D)}),h}function Zs(n,r,l){r=tr(r,n),n=Gh(n,r);var h=n==null?n:n[xi(jn(r))];return h==null?e:On(h,n,l)}function eh(n){return Ze(n)&&En(n)==_t}function mg(n){return Ze(n)&&En(n)==Ot}function _g(n){return Ze(n)&&En(n)==fe}function Ks(n,r,l,h,M){return n===r?!0:n==null||r==null||!Ze(n)&&!Ze(r)?n!==n&&r!==r:gg(n,r,l,h,Ks,M)}function gg(n,r,l,h,M,w){var D=ie(n),B=ie(r),X=D?Ft:vn(n),rt=B?Ft:vn(r);X=X==_t?jt:X,rt=rt==_t?jt:rt;var at=X==jt,ht=rt==jt,vt=X==rt;if(vt&&nr(n)){if(!nr(r))return!1;D=!0,at=!1}if(vt&&!at)return w||(w=new li),D||ns(n)?Uh(n,r,l,h,M,w):Wg(n,r,X,l,h,M,w);if(!(l&y)){var zt=at&&Le.call(n,"__wrapped__"),Yt=ht&&Le.call(r,"__wrapped__");if(zt||Yt){var ae=zt?n.value():n,Zt=Yt?r.value():r;return w||(w=new li),M(ae,Zt,l,h,w)}}return vt?(w||(w=new li),Xg(n,r,l,h,M,w)):!1}function vg(n){return Ze(n)&&vn(n)==F}function Ol(n,r,l,h){var M=l.length,w=M,D=!h;if(n==null)return!w;for(n=Be(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<w;){B=l[M];var X=B[0],rt=n[X],at=B[1];if(D&&B[2]){if(rt===e&&!(X in n))return!1}else{var ht=new li;if(h)var vt=h(rt,at,X,n,r,ht);if(!(vt===e?Ks(at,rt,y|b,h,ht):vt))return!1}}return!0}function nh(n){if(!Ye(n)||t0(n))return!1;var r=Di(n)?v_:hl;return r.test(yr(n))}function xg(n){return Ze(n)&&En(n)==Bt}function Mg(n){return Ze(n)&&vn(n)==I}function Sg(n){return Ze(n)&&mo(n.length)&&!!Ve[En(n)]}function ih(n){return typeof n=="function"?n:n==null?Un:typeof n=="object"?ie(n)?ah(n[0],n[1]):sh(n):Ad(n)}function Bl(n){if(!Qs(n))return T_(n);var r=[];for(var l in Be(n))Le.call(n,l)&&l!="constructor"&&r.push(l);return r}function Eg(n){if(!Ye(n))return r0(n);var r=Qs(n),l=[];for(var h in n)h=="constructor"&&(r||!Le.call(n,h))||l.push(h);return l}function zl(n,r){return n<r}function rh(n,r){var l=-1,h=In(n)?J(n.length):[];return Qi(n,function(M,w,D){h[++l]=r(M,w,D)}),h}function sh(n){var r=tc(n);return r.length==1&&r[0][2]?zh(r[0][0],r[0][1]):function(l){return l===n||Ol(l,n,r)}}function ah(n,r){return nc(n)&&Bh(r)?zh(xi(n),r):function(l){var h=hc(l,n);return h===e&&h===r?dc(l,n):Ks(r,h,y|b)}}function Qa(n,r,l,h,M){n!==r&&Dl(r,function(w,D){if(M||(M=new li),Ye(w))yg(n,r,D,l,Qa,h,M);else{var B=h?h(rc(n,D),w,D+"",n,r,M):e;B===e&&(B=w),Pl(n,D,B)}},Dn)}function yg(n,r,l,h,M,w,D){var B=rc(n,l),X=rc(r,l),rt=D.get(X);if(rt){Pl(n,l,rt);return}var at=w?w(B,X,l+"",n,r,D):e,ht=at===e;if(ht){var vt=ie(X),zt=!vt&&nr(X),Yt=!vt&&!zt&&ns(X);at=X,vt||zt||Yt?ie(B)?at=B:Ke(B)?at=Pn(B):zt?(ht=!1,at=vh(X,!0)):Yt?(ht=!1,at=xh(X,!0)):at=[]:ta(X)||Tr(X)?(at=B,Tr(B)?at=md(B):(!Ye(B)||Di(B))&&(at=Oh(X))):ht=!1}ht&&(D.set(X,at),M(at,X,h,w,D),D.delete(X)),Pl(n,l,at)}function oh(n,r){var l=n.length;if(l)return r+=r<0?l:0,Ii(r,l)?n[r]:e}function lh(n,r,l){r.length?r=Xe(r,function(w){return ie(w)?function(D){return Sr(D,w.length===1?w[0]:w)}:w}):r=[Un];var h=-1;r=Xe(r,Bn(qt()));var M=rh(n,function(w,D,B){var X=Xe(r,function(rt){return rt(w)});return{criteria:X,index:++h,value:w}});return $m(M,function(w,D){return Fg(w,D,l)})}function Tg(n,r){return ch(n,r,function(l,h){return dc(n,h)})}function ch(n,r,l){for(var h=-1,M=r.length,w={};++h<M;){var D=r[h],B=Sr(n,D);l(B,D)&&$s(w,tr(D,n),B)}return w}function Ag(n){return function(r){return Sr(r,n)}}function Hl(n,r,l,h){var M=h?Km:Xr,w=-1,D=r.length,B=n;for(n===r&&(r=Pn(r)),l&&(B=Xe(n,Bn(l)));++w<D;)for(var X=0,rt=r[w],at=l?l(rt):rt;(X=M(B,at,X,h))>-1;)B!==n&&Va.call(B,X,1),Va.call(n,X,1);return n}function uh(n,r){for(var l=n?r.length:0,h=l-1;l--;){var M=r[l];if(l==h||M!==w){var w=M;Ii(M)?Va.call(n,M,1):Wl(n,M)}}return n}function Gl(n,r){return n+Xa(Wf()*(r-n+1))}function wg(n,r,l,h){for(var M=-1,w=nn(Wa((r-n)/(l||1)),0),D=J(w);w--;)D[h?w:++M]=n,n+=l;return D}function Vl(n,r){var l="";if(!n||r<1||r>j)return l;do r%2&&(l+=n),r=Xa(r/2),r&&(n+=n);while(r);return l}function ce(n,r){return sc(Hh(n,r,Un),n+"")}function bg(n){return Yf(is(n))}function Rg(n,r){var l=is(n);return lo(l,Mr(r,0,l.length))}function $s(n,r,l,h){if(!Ye(n))return n;r=tr(r,n);for(var M=-1,w=r.length,D=w-1,B=n;B!=null&&++M<w;){var X=xi(r[M]),rt=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=D){var at=B[X];rt=h?h(at,X,B):e,rt===e&&(rt=Ye(at)?at:Ii(r[M+1])?[]:{})}qs(B,X,rt),B=B[X]}return n}var fh=qa?function(n,r){return qa.set(n,r),n}:Un,Cg=ka?function(n,r){return ka(n,"toString",{configurable:!0,enumerable:!1,value:mc(r),writable:!0})}:Un;function Lg(n){return lo(is(n))}function Qn(n,r,l){var h=-1,M=n.length;r<0&&(r=-r>M?0:M+r),l=l>M?M:l,l<0&&(l+=M),M=r>l?0:l-r>>>0,r>>>=0;for(var w=J(M);++h<M;)w[h]=n[h+r];return w}function Pg(n,r){var l;return Qi(n,function(h,M,w){return l=r(h,M,w),!l}),!!l}function ja(n,r,l){var h=0,M=n==null?h:n.length;if(typeof r=="number"&&r===r&&M<=Ce){for(;h<M;){var w=h+M>>>1,D=n[w];D!==null&&!Hn(D)&&(l?D<=r:D<r)?h=w+1:M=w}return M}return kl(n,r,Un,l)}function kl(n,r,l,h){var M=0,w=n==null?0:n.length;if(w===0)return 0;r=l(r);for(var D=r!==r,B=r===null,X=Hn(r),rt=r===e;M<w;){var at=Xa((M+w)/2),ht=l(n[at]),vt=ht!==e,zt=ht===null,Yt=ht===ht,ae=Hn(ht);if(D)var Zt=h||Yt;else rt?Zt=Yt&&(h||vt):B?Zt=Yt&&vt&&(h||!zt):X?Zt=Yt&&vt&&!zt&&(h||!ae):zt||ae?Zt=!1:Zt=h?ht<=r:ht<r;Zt?M=at+1:w=at}return gn(w,le)}function hh(n,r){for(var l=-1,h=n.length,M=0,w=[];++l<h;){var D=n[l],B=r?r(D):D;if(!l||!ci(B,X)){var X=B;w[M++]=D===0?0:D}}return w}function dh(n){return typeof n=="number"?n:Hn(n)?wt:+n}function zn(n){if(typeof n=="string")return n;if(ie(n))return Xe(n,zn)+"";if(Hn(n))return Xf?Xf.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function ji(n,r,l){var h=-1,M=Ia,w=n.length,D=!0,B=[],X=B;if(l)D=!1,M=vl;else if(w>=a){var rt=r?null:Vg(n);if(rt)return Ua(rt);D=!1,M=Hs,X=new xr}else X=r?[]:B;t:for(;++h<w;){var at=n[h],ht=r?r(at):at;if(at=l||at!==0?at:0,D&&ht===ht){for(var vt=X.length;vt--;)if(X[vt]===ht)continue t;r&&X.push(ht),B.push(at)}else M(X,ht,l)||(X!==B&&X.push(ht),B.push(at))}return B}function Wl(n,r){return r=tr(r,n),n=Gh(n,r),n==null||delete n[xi(jn(r))]}function ph(n,r,l,h){return $s(n,r,l(Sr(n,r)),h)}function to(n,r,l,h){for(var M=n.length,w=h?M:-1;(h?w--:++w<M)&&r(n[w],w,n););return l?Qn(n,h?0:w,h?w+1:M):Qn(n,h?w+1:0,h?M:w)}function mh(n,r){var l=n;return l instanceof ge&&(l=l.value()),xl(r,function(h,M){return M.func.apply(M.thisArg,Ki([h],M.args))},l)}function Xl(n,r,l){var h=n.length;if(h<2)return h?ji(n[0]):[];for(var M=-1,w=J(h);++M<h;)for(var D=n[M],B=-1;++B<h;)B!=M&&(w[M]=Ys(w[M]||D,n[B],r,l));return ji(dn(w,1),r,l)}function _h(n,r,l){for(var h=-1,M=n.length,w=r.length,D={};++h<M;){var B=h<w?r[h]:e;l(D,n[h],B)}return D}function ql(n){return Ke(n)?n:[]}function Yl(n){return typeof n=="function"?n:Un}function tr(n,r){return ie(n)?n:nc(n,r)?[n]:Xh(Re(n))}var Ig=ce;function er(n,r,l){var h=n.length;return l=l===e?h:l,!r&&l>=h?n:Qn(n,r,l)}var gh=x_||function(n){return hn.clearTimeout(n)};function vh(n,r){if(r)return n.slice();var l=n.length,h=zf?zf(l):new n.constructor(l);return n.copy(h),h}function Zl(n){var r=new n.constructor(n.byteLength);return new Ha(r).set(new Ha(n)),r}function Dg(n,r){var l=r?Zl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Ug(n){var r=new n.constructor(n.source,Pa.exec(n));return r.lastIndex=n.lastIndex,r}function Ng(n){return Xs?Be(Xs.call(n)):{}}function xh(n,r){var l=r?Zl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Mh(n,r){if(n!==r){var l=n!==e,h=n===null,M=n===n,w=Hn(n),D=r!==e,B=r===null,X=r===r,rt=Hn(r);if(!B&&!rt&&!w&&n>r||w&&D&&X&&!B&&!rt||h&&D&&X||!l&&X||!M)return 1;if(!h&&!w&&!rt&&n<r||rt&&l&&M&&!h&&!w||B&&l&&M||!D&&M||!X)return-1}return 0}function Fg(n,r,l){for(var h=-1,M=n.criteria,w=r.criteria,D=M.length,B=l.length;++h<D;){var X=Mh(M[h],w[h]);if(X){if(h>=B)return X;var rt=l[h];return X*(rt=="desc"?-1:1)}}return n.index-r.index}function Sh(n,r,l,h){for(var M=-1,w=n.length,D=l.length,B=-1,X=r.length,rt=nn(w-D,0),at=J(X+rt),ht=!h;++B<X;)at[B]=r[B];for(;++M<D;)(ht||M<w)&&(at[l[M]]=n[M]);for(;rt--;)at[B++]=n[M++];return at}function Eh(n,r,l,h){for(var M=-1,w=n.length,D=-1,B=l.length,X=-1,rt=r.length,at=nn(w-B,0),ht=J(at+rt),vt=!h;++M<at;)ht[M]=n[M];for(var zt=M;++X<rt;)ht[zt+X]=r[X];for(;++D<B;)(vt||M<w)&&(ht[zt+l[D]]=n[M++]);return ht}function Pn(n,r){var l=-1,h=n.length;for(r||(r=J(h));++l<h;)r[l]=n[l];return r}function vi(n,r,l,h){var M=!l;l||(l={});for(var w=-1,D=r.length;++w<D;){var B=r[w],X=h?h(l[B],n[B],B,l,n):e;X===e&&(X=n[B]),M?Ci(l,B,X):qs(l,B,X)}return l}function Og(n,r){return vi(n,ec(n),r)}function Bg(n,r){return vi(n,Nh(n),r)}function eo(n,r){return function(l,h){var M=ie(l)?km:ag,w=r?r():{};return M(l,n,qt(h,2),w)}}function jr(n){return ce(function(r,l){var h=-1,M=l.length,w=M>1?l[M-1]:e,D=M>2?l[2]:e;for(w=n.length>3&&typeof w=="function"?(M--,w):e,D&&yn(l[0],l[1],D)&&(w=M<3?e:w,M=1),r=Be(r);++h<M;){var B=l[h];B&&n(r,B,h,w)}return r})}function yh(n,r){return function(l,h){if(l==null)return l;if(!In(l))return n(l,h);for(var M=l.length,w=r?M:-1,D=Be(l);(r?w--:++w<M)&&h(D[w],w,D)!==!1;);return l}}function Th(n){return function(r,l,h){for(var M=-1,w=Be(r),D=h(r),B=D.length;B--;){var X=D[n?B:++M];if(l(w[X],X,w)===!1)break}return r}}function zg(n,r,l){var h=r&v,M=Js(n);function w(){var D=this&&this!==hn&&this instanceof w?M:n;return D.apply(h?l:this,arguments)}return w}function Ah(n){return function(r){r=Re(r);var l=qr(r)?oi(r):e,h=l?l[0]:r.charAt(0),M=l?er(l,1).join(""):r.slice(1);return h[n]()+M}}function ts(n){return function(r){return xl(yd(Ed(r).replace(Cm,"")),n,"")}}function Js(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Qr(n.prototype),h=n.apply(l,r);return Ye(h)?h:l}}function Hg(n,r,l){var h=Js(n);function M(){for(var w=arguments.length,D=J(w),B=w,X=es(M);B--;)D[B]=arguments[B];var rt=w<3&&D[0]!==X&&D[w-1]!==X?[]:$i(D,X);if(w-=rt.length,w<l)return Lh(n,r,no,M.placeholder,e,D,rt,e,e,l-w);var at=this&&this!==hn&&this instanceof M?h:n;return On(at,this,D)}return M}function wh(n){return function(r,l,h){var M=Be(r);if(!In(r)){var w=qt(l,3);r=cn(r),l=function(B){return w(M[B],B,M)}}var D=n(r,l,h);return D>-1?M[w?r[D]:D]:e}}function bh(n){return Pi(function(r){var l=r.length,h=l,M=$n.prototype.thru;for(n&&r.reverse();h--;){var w=r[h];if(typeof w!="function")throw new Kn(c);if(M&&!D&&ao(w)=="wrapper")var D=new $n([],!0)}for(h=D?h:l;++h<l;){w=r[h];var B=ao(w),X=B=="wrapper"?jl(w):e;X&&ic(X[0])&&X[1]==(U|L|H|G)&&!X[4].length&&X[9]==1?D=D[ao(X[0])].apply(D,X[3]):D=w.length==1&&ic(w)?D[B]():D.thru(w)}return function(){var rt=arguments,at=rt[0];if(D&&rt.length==1&&ie(at))return D.plant(at).value();for(var ht=0,vt=l?r[ht].apply(this,rt):at;++ht<l;)vt=r[ht].call(this,vt);return vt}})}function no(n,r,l,h,M,w,D,B,X,rt){var at=r&U,ht=r&v,vt=r&m,zt=r&(L|R),Yt=r&C,ae=vt?e:Js(n);function Zt(){for(var pe=arguments.length,Me=J(pe),Gn=pe;Gn--;)Me[Gn]=arguments[Gn];if(zt)var Tn=es(Zt),Vn=Qm(Me,Tn);if(h&&(Me=Sh(Me,h,M,zt)),w&&(Me=Eh(Me,w,D,zt)),pe-=Vn,zt&&pe<rt){var $e=$i(Me,Tn);return Lh(n,r,no,Zt.placeholder,l,Me,$e,B,X,rt-pe)}var ui=ht?l:this,Ni=vt?ui[n]:n;return pe=Me.length,B?Me=a0(Me,B):Yt&&pe>1&&Me.reverse(),at&&X<pe&&(Me.length=X),this&&this!==hn&&this instanceof Zt&&(Ni=ae||Js(Ni)),Ni.apply(ui,Me)}return Zt}function Rh(n,r){return function(l,h){return pg(l,n,r(h),{})}}function io(n,r){return function(l,h){var M;if(l===e&&h===e)return r;if(l!==e&&(M=l),h!==e){if(M===e)return h;typeof l=="string"||typeof h=="string"?(l=zn(l),h=zn(h)):(l=dh(l),h=dh(h)),M=n(l,h)}return M}}function Kl(n){return Pi(function(r){return r=Xe(r,Bn(qt())),ce(function(l){var h=this;return n(r,function(M){return On(M,h,l)})})})}function ro(n,r){r=r===e?" ":zn(r);var l=r.length;if(l<2)return l?Vl(r,n):r;var h=Vl(r,Wa(n/Yr(r)));return qr(r)?er(oi(h),0,n).join(""):h.slice(0,n)}function Gg(n,r,l,h){var M=r&v,w=Js(n);function D(){for(var B=-1,X=arguments.length,rt=-1,at=h.length,ht=J(at+X),vt=this&&this!==hn&&this instanceof D?w:n;++rt<at;)ht[rt]=h[rt];for(;X--;)ht[rt++]=arguments[++B];return On(vt,M?l:this,ht)}return D}function Ch(n){return function(r,l,h){return h&&typeof h!="number"&&yn(r,l,h)&&(l=h=e),r=Ui(r),l===e?(l=r,r=0):l=Ui(l),h=h===e?r<l?1:-1:Ui(h),wg(r,l,h,n)}}function so(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=ti(r),l=ti(l)),n(r,l)}}function Lh(n,r,l,h,M,w,D,B,X,rt){var at=r&L,ht=at?D:e,vt=at?e:D,zt=at?w:e,Yt=at?e:w;r|=at?H:N,r&=~(at?N:H),r&P||(r&=-4);var ae=[n,r,M,zt,ht,Yt,vt,B,X,rt],Zt=l.apply(e,ae);return ic(n)&&Vh(Zt,ae),Zt.placeholder=h,kh(Zt,n,r)}function $l(n){var r=en[n];return function(l,h){if(l=ti(l),h=h==null?0:gn(re(h),292),h&&kf(l)){var M=(Re(l)+"e").split("e"),w=r(M[0]+"e"+(+M[1]+h));return M=(Re(w)+"e").split("e"),+(M[0]+"e"+(+M[1]-h))}return r(l)}}var Vg=$r&&1/Ua(new $r([,-0]))[1]==dt?function(n){return new $r(n)}:vc;function Ph(n){return function(r){var l=vn(r);return l==F?wl(r):l==I?s_(r):Jm(r,n(r))}}function Li(n,r,l,h,M,w,D,B){var X=r&m;if(!X&&typeof n!="function")throw new Kn(c);var rt=h?h.length:0;if(rt||(r&=-97,h=M=e),D=D===e?D:nn(re(D),0),B=B===e?B:re(B),rt-=M?M.length:0,r&N){var at=h,ht=M;h=M=e}var vt=X?e:jl(n),zt=[n,r,l,h,M,at,ht,w,D,B];if(vt&&i0(zt,vt),n=zt[0],r=zt[1],l=zt[2],h=zt[3],M=zt[4],B=zt[9]=zt[9]===e?X?0:n.length:nn(zt[9]-rt,0),!B&&r&(L|R)&&(r&=-25),!r||r==v)var Yt=zg(n,r,l);else r==L||r==R?Yt=Hg(n,r,B):(r==H||r==(v|H))&&!M.length?Yt=Gg(n,r,l,h):Yt=no.apply(e,zt);var ae=vt?fh:Vh;return kh(ae(Yt,zt),n,r)}function Ih(n,r,l,h){return n===e||ci(n,Kr[l])&&!Le.call(h,l)?r:n}function Dh(n,r,l,h,M,w){return Ye(n)&&Ye(r)&&(w.set(r,n),Qa(n,r,e,Dh,w),w.delete(r)),n}function kg(n){return ta(n)?e:n}function Uh(n,r,l,h,M,w){var D=l&y,B=n.length,X=r.length;if(B!=X&&!(D&&X>B))return!1;var rt=w.get(n),at=w.get(r);if(rt&&at)return rt==r&&at==n;var ht=-1,vt=!0,zt=l&b?new xr:e;for(w.set(n,r),w.set(r,n);++ht<B;){var Yt=n[ht],ae=r[ht];if(h)var Zt=D?h(ae,Yt,ht,r,n,w):h(Yt,ae,ht,n,r,w);if(Zt!==e){if(Zt)continue;vt=!1;break}if(zt){if(!Ml(r,function(pe,Me){if(!Hs(zt,Me)&&(Yt===pe||M(Yt,pe,l,h,w)))return zt.push(Me)})){vt=!1;break}}else if(!(Yt===ae||M(Yt,ae,l,h,w))){vt=!1;break}}return w.delete(n),w.delete(r),vt}function Wg(n,r,l,h,M,w,D){switch(l){case gt:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Ot:return!(n.byteLength!=r.byteLength||!w(new Ha(n),new Ha(r)));case kt:case fe:case an:return ci(+n,+r);case ze:return n.name==r.name&&n.message==r.message;case Bt:case S:return n==r+"";case F:var B=wl;case I:var X=h&y;if(B||(B=Ua),n.size!=r.size&&!X)return!1;var rt=D.get(n);if(rt)return rt==r;h|=b,D.set(n,r);var at=Uh(B(n),B(r),h,M,w,D);return D.delete(n),at;case Y:if(Xs)return Xs.call(n)==Xs.call(r)}return!1}function Xg(n,r,l,h,M,w){var D=l&y,B=Jl(n),X=B.length,rt=Jl(r),at=rt.length;if(X!=at&&!D)return!1;for(var ht=X;ht--;){var vt=B[ht];if(!(D?vt in r:Le.call(r,vt)))return!1}var zt=w.get(n),Yt=w.get(r);if(zt&&Yt)return zt==r&&Yt==n;var ae=!0;w.set(n,r),w.set(r,n);for(var Zt=D;++ht<X;){vt=B[ht];var pe=n[vt],Me=r[vt];if(h)var Gn=D?h(Me,pe,vt,r,n,w):h(pe,Me,vt,n,r,w);if(!(Gn===e?pe===Me||M(pe,Me,l,h,w):Gn)){ae=!1;break}Zt||(Zt=vt=="constructor")}if(ae&&!Zt){var Tn=n.constructor,Vn=r.constructor;Tn!=Vn&&"constructor"in n&&"constructor"in r&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Vn=="function"&&Vn instanceof Vn)&&(ae=!1)}return w.delete(n),w.delete(r),ae}function Pi(n){return sc(Hh(n,e,Kh),n+"")}function Jl(n){return th(n,cn,ec)}function Ql(n){return th(n,Dn,Nh)}var jl=qa?function(n){return qa.get(n)}:vc;function ao(n){for(var r=n.name+"",l=Jr[r],h=Le.call(Jr,r)?l.length:0;h--;){var M=l[h],w=M.func;if(w==null||w==n)return M.name}return r}function es(n){var r=Le.call(E,"placeholder")?E:n;return r.placeholder}function qt(){var n=E.iteratee||_c;return n=n===_c?ih:n,arguments.length?n(arguments[0],arguments[1]):n}function oo(n,r){var l=n.__data__;return jg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function tc(n){for(var r=cn(n),l=r.length;l--;){var h=r[l],M=n[h];r[l]=[h,M,Bh(M)]}return r}function Er(n,r){var l=n_(n,r);return nh(l)?l:e}function qg(n){var r=Le.call(n,gr),l=n[gr];try{n[gr]=e;var h=!0}catch{}var M=Ba.call(n);return h&&(r?n[gr]=l:delete n[gr]),M}var ec=Rl?function(n){return n==null?[]:(n=Be(n),Zi(Rl(n),function(r){return Gf.call(n,r)}))}:xc,Nh=Rl?function(n){for(var r=[];n;)Ki(r,ec(n)),n=Ga(n);return r}:xc,vn=En;(Cl&&vn(new Cl(new ArrayBuffer(1)))!=gt||Vs&&vn(new Vs)!=F||Ll&&vn(Ll.resolve())!=Gt||$r&&vn(new $r)!=I||ks&&vn(new ks)!=ft)&&(vn=function(n){var r=En(n),l=r==jt?n.constructor:e,h=l?yr(l):"";if(h)switch(h){case R_:return gt;case C_:return F;case L_:return Gt;case P_:return I;case I_:return ft}return r});function Yg(n,r,l){for(var h=-1,M=l.length;++h<M;){var w=l[h],D=w.size;switch(w.type){case"drop":n+=D;break;case"dropRight":r-=D;break;case"take":r=gn(r,n+D);break;case"takeRight":n=nn(n,r-D);break}}return{start:n,end:r}}function Zg(n){var r=n.match(ba);return r?r[1].split(kr):[]}function Fh(n,r,l){r=tr(r,n);for(var h=-1,M=r.length,w=!1;++h<M;){var D=xi(r[h]);if(!(w=n!=null&&l(n,D)))break;n=n[D]}return w||++h!=M?w:(M=n==null?0:n.length,!!M&&mo(M)&&Ii(D,M)&&(ie(n)||Tr(n)))}function Kg(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&Le.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Oh(n){return typeof n.constructor=="function"&&!Qs(n)?Qr(Ga(n)):{}}function $g(n,r,l){var h=n.constructor;switch(r){case Ot:return Zl(n);case kt:case fe:return new h(+n);case gt:return Dg(n,l);case bt:case de:case mt:case Lt:case Xt:case Kt:case Pt:case ue:case te:return xh(n,l);case F:return new h;case an:case S:return new h(n);case Bt:return Ug(n);case I:return new h;case Y:return Ng(n)}}function Jg(n,r){var l=r.length;if(!l)return n;var h=l-1;return r[h]=(l>1?"& ":"")+r[h],r=r.join(l>2?", ":" "),n.replace(wa,`{
/* [wrapped with `+r+`] */
`)}function Qg(n){return ie(n)||Tr(n)||!!(Vf&&n&&n[Vf])}function Ii(n,r){var l=typeof n;return r=r??j,!!r&&(l=="number"||l!="symbol"&&pl.test(n))&&n>-1&&n%1==0&&n<r}function yn(n,r,l){if(!Ye(l))return!1;var h=typeof r;return(h=="number"?In(l)&&Ii(r,l.length):h=="string"&&r in l)?ci(l[r],n):!1}function nc(n,r){if(ie(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Hn(n)?!0:Fn.test(n)||!we.test(n)||r!=null&&n in Be(r)}function jg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function ic(n){var r=ao(n),l=E[r];if(typeof l!="function"||!(r in ge.prototype))return!1;if(n===l)return!0;var h=jl(l);return!!h&&n===h[0]}function t0(n){return!!Bf&&Bf in n}var e0=Fa?Di:Mc;function Qs(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||Kr;return n===l}function Bh(n){return n===n&&!Ye(n)}function zh(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==e||n in Be(l))}}function n0(n){var r=ho(n,function(h){return l.size===f&&l.clear(),h}),l=r.cache;return r}function i0(n,r){var l=n[1],h=r[1],M=l|h,w=M<(v|m|U),D=h==U&&l==L||h==U&&l==G&&n[7].length<=r[8]||h==(U|G)&&r[7].length<=r[8]&&l==L;if(!(w||D))return n;h&v&&(n[2]=r[2],M|=l&v?0:P);var B=r[3];if(B){var X=n[3];n[3]=X?Sh(X,B,r[4]):B,n[4]=X?$i(n[3],p):r[4]}return B=r[5],B&&(X=n[5],n[5]=X?Eh(X,B,r[6]):B,n[6]=X?$i(n[5],p):r[6]),B=r[7],B&&(n[7]=B),h&U&&(n[8]=n[8]==null?r[8]:gn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=M,n}function r0(n){var r=[];if(n!=null)for(var l in Be(n))r.push(l);return r}function s0(n){return Ba.call(n)}function Hh(n,r,l){return r=nn(r===e?n.length-1:r,0),function(){for(var h=arguments,M=-1,w=nn(h.length-r,0),D=J(w);++M<w;)D[M]=h[r+M];M=-1;for(var B=J(r+1);++M<r;)B[M]=h[M];return B[r]=l(D),On(n,this,B)}}function Gh(n,r){return r.length<2?n:Sr(n,Qn(r,0,-1))}function a0(n,r){for(var l=n.length,h=gn(r.length,l),M=Pn(n);h--;){var w=r[h];n[h]=Ii(w,l)?M[w]:e}return n}function rc(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Vh=Wh(fh),js=S_||function(n,r){return hn.setTimeout(n,r)},sc=Wh(Cg);function kh(n,r,l){var h=r+"";return sc(n,Jg(h,o0(Zg(h),l)))}function Wh(n){var r=0,l=0;return function(){var h=A_(),M=$-(h-l);if(l=h,M>0){if(++r>=Q)return arguments[0]}else r=0;return n.apply(e,arguments)}}function lo(n,r){var l=-1,h=n.length,M=h-1;for(r=r===e?h:r;++l<r;){var w=Gl(l,M),D=n[w];n[w]=n[l],n[l]=D}return n.length=r,n}var Xh=n0(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(si,function(l,h,M,w){r.push(M?w.replace(Ca,"$1"):h||l)}),r});function xi(n){if(typeof n=="string"||Hn(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function yr(n){if(n!=null){try{return Oa.call(n)}catch{}try{return n+""}catch{}}return""}function o0(n,r){return Zn(ot,function(l){var h="_."+l[0];r&l[1]&&!Ia(n,h)&&n.push(h)}),n.sort()}function qh(n){if(n instanceof ge)return n.clone();var r=new $n(n.__wrapped__,n.__chain__);return r.__actions__=Pn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function l0(n,r,l){(l?yn(n,r,l):r===e)?r=1:r=nn(re(r),0);var h=n==null?0:n.length;if(!h||r<1)return[];for(var M=0,w=0,D=J(Wa(h/r));M<h;)D[w++]=Qn(n,M,M+=r);return D}function c0(n){for(var r=-1,l=n==null?0:n.length,h=0,M=[];++r<l;){var w=n[r];w&&(M[h++]=w)}return M}function u0(){var n=arguments.length;if(!n)return[];for(var r=J(n-1),l=arguments[0],h=n;h--;)r[h-1]=arguments[h];return Ki(ie(l)?Pn(l):[l],dn(r,1))}var f0=ce(function(n,r){return Ke(n)?Ys(n,dn(r,1,Ke,!0)):[]}),h0=ce(function(n,r){var l=jn(r);return Ke(l)&&(l=e),Ke(n)?Ys(n,dn(r,1,Ke,!0),qt(l,2)):[]}),d0=ce(function(n,r){var l=jn(r);return Ke(l)&&(l=e),Ke(n)?Ys(n,dn(r,1,Ke,!0),e,l):[]});function p0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:re(r),Qn(n,r<0?0:r,h)):[]}function m0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:re(r),r=h-r,Qn(n,0,r<0?0:r)):[]}function _0(n,r){return n&&n.length?to(n,qt(r,3),!0,!0):[]}function g0(n,r){return n&&n.length?to(n,qt(r,3),!0):[]}function v0(n,r,l,h){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&yn(n,r,l)&&(l=0,h=M),ug(n,r,l,h)):[]}function Yh(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:re(l);return M<0&&(M=nn(h+M,0)),Da(n,qt(r,3),M)}function Zh(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=h-1;return l!==e&&(M=re(l),M=l<0?nn(h+M,0):gn(M,h-1)),Da(n,qt(r,3),M,!0)}function Kh(n){var r=n==null?0:n.length;return r?dn(n,1):[]}function x0(n){var r=n==null?0:n.length;return r?dn(n,dt):[]}function M0(n,r){var l=n==null?0:n.length;return l?(r=r===e?1:re(r),dn(n,r)):[]}function S0(n){for(var r=-1,l=n==null?0:n.length,h={};++r<l;){var M=n[r];h[M[0]]=M[1]}return h}function $h(n){return n&&n.length?n[0]:e}function E0(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=l==null?0:re(l);return M<0&&(M=nn(h+M,0)),Xr(n,r,M)}function y0(n){var r=n==null?0:n.length;return r?Qn(n,0,-1):[]}var T0=ce(function(n){var r=Xe(n,ql);return r.length&&r[0]===n[0]?Fl(r):[]}),A0=ce(function(n){var r=jn(n),l=Xe(n,ql);return r===jn(l)?r=e:l.pop(),l.length&&l[0]===n[0]?Fl(l,qt(r,2)):[]}),w0=ce(function(n){var r=jn(n),l=Xe(n,ql);return r=typeof r=="function"?r:e,r&&l.pop(),l.length&&l[0]===n[0]?Fl(l,e,r):[]});function b0(n,r){return n==null?"":y_.call(n,r)}function jn(n){var r=n==null?0:n.length;return r?n[r-1]:e}function R0(n,r,l){var h=n==null?0:n.length;if(!h)return-1;var M=h;return l!==e&&(M=re(l),M=M<0?nn(h+M,0):gn(M,h-1)),r===r?o_(n,r,M):Da(n,Lf,M,!0)}function C0(n,r){return n&&n.length?oh(n,re(r)):e}var L0=ce(Jh);function Jh(n,r){return n&&n.length&&r&&r.length?Hl(n,r):n}function P0(n,r,l){return n&&n.length&&r&&r.length?Hl(n,r,qt(l,2)):n}function I0(n,r,l){return n&&n.length&&r&&r.length?Hl(n,r,e,l):n}var D0=Pi(function(n,r){var l=n==null?0:n.length,h=Il(n,r);return uh(n,Xe(r,function(M){return Ii(M,l)?+M:M}).sort(Mh)),h});function U0(n,r){var l=[];if(!(n&&n.length))return l;var h=-1,M=[],w=n.length;for(r=qt(r,3);++h<w;){var D=n[h];r(D,h,n)&&(l.push(D),M.push(h))}return uh(n,M),l}function ac(n){return n==null?n:b_.call(n)}function N0(n,r,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&yn(n,r,l)?(r=0,l=h):(r=r==null?0:re(r),l=l===e?h:re(l)),Qn(n,r,l)):[]}function F0(n,r){return ja(n,r)}function O0(n,r,l){return kl(n,r,qt(l,2))}function B0(n,r){var l=n==null?0:n.length;if(l){var h=ja(n,r);if(h<l&&ci(n[h],r))return h}return-1}function z0(n,r){return ja(n,r,!0)}function H0(n,r,l){return kl(n,r,qt(l,2),!0)}function G0(n,r){var l=n==null?0:n.length;if(l){var h=ja(n,r,!0)-1;if(ci(n[h],r))return h}return-1}function V0(n){return n&&n.length?hh(n):[]}function k0(n,r){return n&&n.length?hh(n,qt(r,2)):[]}function W0(n){var r=n==null?0:n.length;return r?Qn(n,1,r):[]}function X0(n,r,l){return n&&n.length?(r=l||r===e?1:re(r),Qn(n,0,r<0?0:r)):[]}function q0(n,r,l){var h=n==null?0:n.length;return h?(r=l||r===e?1:re(r),r=h-r,Qn(n,r<0?0:r,h)):[]}function Y0(n,r){return n&&n.length?to(n,qt(r,3),!1,!0):[]}function Z0(n,r){return n&&n.length?to(n,qt(r,3)):[]}var K0=ce(function(n){return ji(dn(n,1,Ke,!0))}),$0=ce(function(n){var r=jn(n);return Ke(r)&&(r=e),ji(dn(n,1,Ke,!0),qt(r,2))}),J0=ce(function(n){var r=jn(n);return r=typeof r=="function"?r:e,ji(dn(n,1,Ke,!0),e,r)});function Q0(n){return n&&n.length?ji(n):[]}function j0(n,r){return n&&n.length?ji(n,qt(r,2)):[]}function tv(n,r){return r=typeof r=="function"?r:e,n&&n.length?ji(n,e,r):[]}function oc(n){if(!(n&&n.length))return[];var r=0;return n=Zi(n,function(l){if(Ke(l))return r=nn(l.length,r),!0}),Tl(r,function(l){return Xe(n,Sl(l))})}function Qh(n,r){if(!(n&&n.length))return[];var l=oc(n);return r==null?l:Xe(l,function(h){return On(r,e,h)})}var ev=ce(function(n,r){return Ke(n)?Ys(n,r):[]}),nv=ce(function(n){return Xl(Zi(n,Ke))}),iv=ce(function(n){var r=jn(n);return Ke(r)&&(r=e),Xl(Zi(n,Ke),qt(r,2))}),rv=ce(function(n){var r=jn(n);return r=typeof r=="function"?r:e,Xl(Zi(n,Ke),e,r)}),sv=ce(oc);function av(n,r){return _h(n||[],r||[],qs)}function ov(n,r){return _h(n||[],r||[],$s)}var lv=ce(function(n){var r=n.length,l=r>1?n[r-1]:e;return l=typeof l=="function"?(n.pop(),l):e,Qh(n,l)});function jh(n){var r=E(n);return r.__chain__=!0,r}function cv(n,r){return r(n),n}function co(n,r){return r(n)}var uv=Pi(function(n){var r=n.length,l=r?n[0]:0,h=this.__wrapped__,M=function(w){return Il(w,n)};return r>1||this.__actions__.length||!(h instanceof ge)||!Ii(l)?this.thru(M):(h=h.slice(l,+l+(r?1:0)),h.__actions__.push({func:co,args:[M],thisArg:e}),new $n(h,this.__chain__).thru(function(w){return r&&!w.length&&w.push(e),w}))});function fv(){return jh(this)}function hv(){return new $n(this.value(),this.__chain__)}function dv(){this.__values__===e&&(this.__values__=dd(this.value()));var n=this.__index__>=this.__values__.length,r=n?e:this.__values__[this.__index__++];return{done:n,value:r}}function pv(){return this}function mv(n){for(var r,l=this;l instanceof Za;){var h=qh(l);h.__index__=0,h.__values__=e,r?M.__wrapped__=h:r=h;var M=h;l=l.__wrapped__}return M.__wrapped__=n,r}function _v(){var n=this.__wrapped__;if(n instanceof ge){var r=n;return this.__actions__.length&&(r=new ge(this)),r=r.reverse(),r.__actions__.push({func:co,args:[ac],thisArg:e}),new $n(r,this.__chain__)}return this.thru(ac)}function gv(){return mh(this.__wrapped__,this.__actions__)}var vv=eo(function(n,r,l){Le.call(n,l)?++n[l]:Ci(n,l,1)});function xv(n,r,l){var h=ie(n)?Rf:cg;return l&&yn(n,r,l)&&(r=e),h(n,qt(r,3))}function Mv(n,r){var l=ie(n)?Zi:Qf;return l(n,qt(r,3))}var Sv=wh(Yh),Ev=wh(Zh);function yv(n,r){return dn(uo(n,r),1)}function Tv(n,r){return dn(uo(n,r),dt)}function Av(n,r,l){return l=l===e?1:re(l),dn(uo(n,r),l)}function td(n,r){var l=ie(n)?Zn:Qi;return l(n,qt(r,3))}function ed(n,r){var l=ie(n)?Wm:Jf;return l(n,qt(r,3))}var wv=eo(function(n,r,l){Le.call(n,l)?n[l].push(r):Ci(n,l,[r])});function bv(n,r,l,h){n=In(n)?n:is(n),l=l&&!h?re(l):0;var M=n.length;return l<0&&(l=nn(M+l,0)),_o(n)?l<=M&&n.indexOf(r,l)>-1:!!M&&Xr(n,r,l)>-1}var Rv=ce(function(n,r,l){var h=-1,M=typeof r=="function",w=In(n)?J(n.length):[];return Qi(n,function(D){w[++h]=M?On(r,D,l):Zs(D,r,l)}),w}),Cv=eo(function(n,r,l){Ci(n,l,r)});function uo(n,r){var l=ie(n)?Xe:rh;return l(n,qt(r,3))}function Lv(n,r,l,h){return n==null?[]:(ie(r)||(r=r==null?[]:[r]),l=h?e:l,ie(l)||(l=l==null?[]:[l]),lh(n,r,l))}var Pv=eo(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function Iv(n,r,l){var h=ie(n)?xl:If,M=arguments.length<3;return h(n,qt(r,4),l,M,Qi)}function Dv(n,r,l){var h=ie(n)?Xm:If,M=arguments.length<3;return h(n,qt(r,4),l,M,Jf)}function Uv(n,r){var l=ie(n)?Zi:Qf;return l(n,po(qt(r,3)))}function Nv(n){var r=ie(n)?Yf:bg;return r(n)}function Fv(n,r,l){(l?yn(n,r,l):r===e)?r=1:r=re(r);var h=ie(n)?rg:Rg;return h(n,r)}function Ov(n){var r=ie(n)?sg:Lg;return r(n)}function Bv(n){if(n==null)return 0;if(In(n))return _o(n)?Yr(n):n.length;var r=vn(n);return r==F||r==I?n.size:Bl(n).length}function zv(n,r,l){var h=ie(n)?Ml:Pg;return l&&yn(n,r,l)&&(r=e),h(n,qt(r,3))}var Hv=ce(function(n,r){if(n==null)return[];var l=r.length;return l>1&&yn(n,r[0],r[1])?r=[]:l>2&&yn(r[0],r[1],r[2])&&(r=[r[0]]),lh(n,dn(r,1),[])}),fo=M_||function(){return hn.Date.now()};function Gv(n,r){if(typeof r!="function")throw new Kn(c);return n=re(n),function(){if(--n<1)return r.apply(this,arguments)}}function nd(n,r,l){return r=l?e:r,r=n&&r==null?n.length:r,Li(n,U,e,e,e,e,r)}function id(n,r){var l;if(typeof r!="function")throw new Kn(c);return n=re(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=e),l}}var lc=ce(function(n,r,l){var h=v;if(l.length){var M=$i(l,es(lc));h|=H}return Li(n,h,r,l,M)}),rd=ce(function(n,r,l){var h=v|m;if(l.length){var M=$i(l,es(rd));h|=H}return Li(r,h,n,l,M)});function sd(n,r,l){r=l?e:r;var h=Li(n,L,e,e,e,e,e,r);return h.placeholder=sd.placeholder,h}function ad(n,r,l){r=l?e:r;var h=Li(n,R,e,e,e,e,e,r);return h.placeholder=ad.placeholder,h}function od(n,r,l){var h,M,w,D,B,X,rt=0,at=!1,ht=!1,vt=!0;if(typeof n!="function")throw new Kn(c);r=ti(r)||0,Ye(l)&&(at=!!l.leading,ht="maxWait"in l,w=ht?nn(ti(l.maxWait)||0,r):w,vt="trailing"in l?!!l.trailing:vt);function zt($e){var ui=h,Ni=M;return h=M=e,rt=$e,D=n.apply(Ni,ui),D}function Yt($e){return rt=$e,B=js(pe,r),at?zt($e):D}function ae($e){var ui=$e-X,Ni=$e-rt,wd=r-ui;return ht?gn(wd,w-Ni):wd}function Zt($e){var ui=$e-X,Ni=$e-rt;return X===e||ui>=r||ui<0||ht&&Ni>=w}function pe(){var $e=fo();if(Zt($e))return Me($e);B=js(pe,ae($e))}function Me($e){return B=e,vt&&h?zt($e):(h=M=e,D)}function Gn(){B!==e&&gh(B),rt=0,h=X=M=B=e}function Tn(){return B===e?D:Me(fo())}function Vn(){var $e=fo(),ui=Zt($e);if(h=arguments,M=this,X=$e,ui){if(B===e)return Yt(X);if(ht)return gh(B),B=js(pe,r),zt(X)}return B===e&&(B=js(pe,r)),D}return Vn.cancel=Gn,Vn.flush=Tn,Vn}var Vv=ce(function(n,r){return $f(n,1,r)}),kv=ce(function(n,r,l){return $f(n,ti(r)||0,l)});function Wv(n){return Li(n,C)}function ho(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Kn(c);var l=function(){var h=arguments,M=r?r.apply(this,h):h[0],w=l.cache;if(w.has(M))return w.get(M);var D=n.apply(this,h);return l.cache=w.set(M,D)||w,D};return l.cache=new(ho.Cache||Ri),l}ho.Cache=Ri;function po(n){if(typeof n!="function")throw new Kn(c);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Xv(n){return id(2,n)}var qv=Ig(function(n,r){r=r.length==1&&ie(r[0])?Xe(r[0],Bn(qt())):Xe(dn(r,1),Bn(qt()));var l=r.length;return ce(function(h){for(var M=-1,w=gn(h.length,l);++M<w;)h[M]=r[M].call(this,h[M]);return On(n,this,h)})}),cc=ce(function(n,r){var l=$i(r,es(cc));return Li(n,H,e,r,l)}),ld=ce(function(n,r){var l=$i(r,es(ld));return Li(n,N,e,r,l)}),Yv=Pi(function(n,r){return Li(n,G,e,e,e,r)});function Zv(n,r){if(typeof n!="function")throw new Kn(c);return r=r===e?r:re(r),ce(n,r)}function Kv(n,r){if(typeof n!="function")throw new Kn(c);return r=r==null?0:nn(re(r),0),ce(function(l){var h=l[r],M=er(l,0,r);return h&&Ki(M,h),On(n,this,M)})}function $v(n,r,l){var h=!0,M=!0;if(typeof n!="function")throw new Kn(c);return Ye(l)&&(h="leading"in l?!!l.leading:h,M="trailing"in l?!!l.trailing:M),od(n,r,{leading:h,maxWait:r,trailing:M})}function Jv(n){return nd(n,1)}function Qv(n,r){return cc(Yl(r),n)}function jv(){if(!arguments.length)return[];var n=arguments[0];return ie(n)?n:[n]}function tx(n){return Jn(n,x)}function ex(n,r){return r=typeof r=="function"?r:e,Jn(n,x,r)}function nx(n){return Jn(n,_|x)}function ix(n,r){return r=typeof r=="function"?r:e,Jn(n,_|x,r)}function rx(n,r){return r==null||Kf(n,r,cn(r))}function ci(n,r){return n===r||n!==n&&r!==r}var sx=so(Nl),ax=so(function(n,r){return n>=r}),Tr=eh(function(){return arguments}())?eh:function(n){return Ze(n)&&Le.call(n,"callee")&&!Gf.call(n,"callee")},ie=J.isArray,ox=Ef?Bn(Ef):mg;function In(n){return n!=null&&mo(n.length)&&!Di(n)}function Ke(n){return Ze(n)&&In(n)}function lx(n){return n===!0||n===!1||Ze(n)&&En(n)==kt}var nr=E_||Mc,cx=yf?Bn(yf):_g;function ux(n){return Ze(n)&&n.nodeType===1&&!ta(n)}function fx(n){if(n==null)return!0;if(In(n)&&(ie(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||ns(n)||Tr(n)))return!n.length;var r=vn(n);if(r==F||r==I)return!n.size;if(Qs(n))return!Bl(n).length;for(var l in n)if(Le.call(n,l))return!1;return!0}function hx(n,r){return Ks(n,r)}function dx(n,r,l){l=typeof l=="function"?l:e;var h=l?l(n,r):e;return h===e?Ks(n,r,e,l):!!h}function uc(n){if(!Ze(n))return!1;var r=En(n);return r==ze||r==$t||typeof n.message=="string"&&typeof n.name=="string"&&!ta(n)}function px(n){return typeof n=="number"&&kf(n)}function Di(n){if(!Ye(n))return!1;var r=En(n);return r==Pe||r==he||r==yt||r==Fe}function cd(n){return typeof n=="number"&&n==re(n)}function mo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Ye(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Ze(n){return n!=null&&typeof n=="object"}var ud=Tf?Bn(Tf):vg;function mx(n,r){return n===r||Ol(n,r,tc(r))}function _x(n,r,l){return l=typeof l=="function"?l:e,Ol(n,r,tc(r),l)}function gx(n){return fd(n)&&n!=+n}function vx(n){if(e0(n))throw new ee(o);return nh(n)}function xx(n){return n===null}function Mx(n){return n==null}function fd(n){return typeof n=="number"||Ze(n)&&En(n)==an}function ta(n){if(!Ze(n)||En(n)!=jt)return!1;var r=Ga(n);if(r===null)return!0;var l=Le.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&Oa.call(l)==__}var fc=Af?Bn(Af):xg;function Sx(n){return cd(n)&&n>=-9007199254740991&&n<=j}var hd=wf?Bn(wf):Mg;function _o(n){return typeof n=="string"||!ie(n)&&Ze(n)&&En(n)==S}function Hn(n){return typeof n=="symbol"||Ze(n)&&En(n)==Y}var ns=bf?Bn(bf):Sg;function Ex(n){return n===e}function yx(n){return Ze(n)&&vn(n)==ft}function Tx(n){return Ze(n)&&En(n)==st}var Ax=so(zl),wx=so(function(n,r){return n<=r});function dd(n){if(!n)return[];if(In(n))return _o(n)?oi(n):Pn(n);if(Gs&&n[Gs])return r_(n[Gs]());var r=vn(n),l=r==F?wl:r==I?Ua:is;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=ti(n),n===dt||n===-1/0){var r=n<0?-1:1;return r*Et}return n===n?n:0}function re(n){var r=Ui(n),l=r%1;return r===r?l?r-l:r:0}function pd(n){return n?Mr(re(n),0,Nt):0}function ti(n){if(typeof n=="number")return n;if(Hn(n))return wt;if(Ye(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ye(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Df(n);var l=fl.test(n);return l||dl.test(n)?Gm(n.slice(2),l?2:8):ul.test(n)?wt:+n}function md(n){return vi(n,Dn(n))}function bx(n){return n?Mr(re(n),-9007199254740991,j):n===0?n:0}function Re(n){return n==null?"":zn(n)}var Rx=jr(function(n,r){if(Qs(r)||In(r)){vi(r,cn(r),n);return}for(var l in r)Le.call(r,l)&&qs(n,l,r[l])}),_d=jr(function(n,r){vi(r,Dn(r),n)}),go=jr(function(n,r,l,h){vi(r,Dn(r),n,h)}),Cx=jr(function(n,r,l,h){vi(r,cn(r),n,h)}),Lx=Pi(Il);function Px(n,r){var l=Qr(n);return r==null?l:Zf(l,r)}var Ix=ce(function(n,r){n=Be(n);var l=-1,h=r.length,M=h>2?r[2]:e;for(M&&yn(r[0],r[1],M)&&(h=1);++l<h;)for(var w=r[l],D=Dn(w),B=-1,X=D.length;++B<X;){var rt=D[B],at=n[rt];(at===e||ci(at,Kr[rt])&&!Le.call(n,rt))&&(n[rt]=w[rt])}return n}),Dx=ce(function(n){return n.push(e,Dh),On(gd,e,n)});function Ux(n,r){return Cf(n,qt(r,3),gi)}function Nx(n,r){return Cf(n,qt(r,3),Ul)}function Fx(n,r){return n==null?n:Dl(n,qt(r,3),Dn)}function Ox(n,r){return n==null?n:jf(n,qt(r,3),Dn)}function Bx(n,r){return n&&gi(n,qt(r,3))}function zx(n,r){return n&&Ul(n,qt(r,3))}function Hx(n){return n==null?[]:Ja(n,cn(n))}function Gx(n){return n==null?[]:Ja(n,Dn(n))}function hc(n,r,l){var h=n==null?e:Sr(n,r);return h===e?l:h}function Vx(n,r){return n!=null&&Fh(n,r,fg)}function dc(n,r){return n!=null&&Fh(n,r,hg)}var kx=Rh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Ba.call(r)),n[r]=l},mc(Un)),Wx=Rh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Ba.call(r)),Le.call(n,r)?n[r].push(l):n[r]=[l]},qt),Xx=ce(Zs);function cn(n){return In(n)?qf(n):Bl(n)}function Dn(n){return In(n)?qf(n,!0):Eg(n)}function qx(n,r){var l={};return r=qt(r,3),gi(n,function(h,M,w){Ci(l,r(h,M,w),h)}),l}function Yx(n,r){var l={};return r=qt(r,3),gi(n,function(h,M,w){Ci(l,M,r(h,M,w))}),l}var Zx=jr(function(n,r,l){Qa(n,r,l)}),gd=jr(function(n,r,l,h){Qa(n,r,l,h)}),Kx=Pi(function(n,r){var l={};if(n==null)return l;var h=!1;r=Xe(r,function(w){return w=tr(w,n),h||(h=w.length>1),w}),vi(n,Ql(n),l),h&&(l=Jn(l,_|g|x,kg));for(var M=r.length;M--;)Wl(l,r[M]);return l});function $x(n,r){return vd(n,po(qt(r)))}var Jx=Pi(function(n,r){return n==null?{}:Tg(n,r)});function vd(n,r){if(n==null)return{};var l=Xe(Ql(n),function(h){return[h]});return r=qt(r),ch(n,l,function(h,M){return r(h,M[0])})}function Qx(n,r,l){r=tr(r,n);var h=-1,M=r.length;for(M||(M=1,n=e);++h<M;){var w=n==null?e:n[xi(r[h])];w===e&&(h=M,w=l),n=Di(w)?w.call(n):w}return n}function jx(n,r,l){return n==null?n:$s(n,r,l)}function tM(n,r,l,h){return h=typeof h=="function"?h:e,n==null?n:$s(n,r,l,h)}var xd=Ph(cn),Md=Ph(Dn);function eM(n,r,l){var h=ie(n),M=h||nr(n)||ns(n);if(r=qt(r,4),l==null){var w=n&&n.constructor;M?l=h?new w:[]:Ye(n)?l=Di(w)?Qr(Ga(n)):{}:l={}}return(M?Zn:gi)(n,function(D,B,X){return r(l,D,B,X)}),l}function nM(n,r){return n==null?!0:Wl(n,r)}function iM(n,r,l){return n==null?n:ph(n,r,Yl(l))}function rM(n,r,l,h){return h=typeof h=="function"?h:e,n==null?n:ph(n,r,Yl(l),h)}function is(n){return n==null?[]:Al(n,cn(n))}function sM(n){return n==null?[]:Al(n,Dn(n))}function aM(n,r,l){return l===e&&(l=r,r=e),l!==e&&(l=ti(l),l=l===l?l:0),r!==e&&(r=ti(r),r=r===r?r:0),Mr(ti(n),r,l)}function oM(n,r,l){return r=Ui(r),l===e?(l=r,r=0):l=Ui(l),n=ti(n),dg(n,r,l)}function lM(n,r,l){if(l&&typeof l!="boolean"&&yn(n,r,l)&&(r=l=e),l===e&&(typeof r=="boolean"?(l=r,r=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&r===e?(n=0,r=1):(n=Ui(n),r===e?(r=n,n=0):r=Ui(r)),n>r){var h=n;n=r,r=h}if(l||n%1||r%1){var M=Wf();return gn(n+M*(r-n+Hm("1e-"+((M+"").length-1))),r)}return Gl(n,r)}var cM=ts(function(n,r,l){return r=r.toLowerCase(),n+(l?Sd(r):r)});function Sd(n){return pc(Re(n).toLowerCase())}function Ed(n){return n=Re(n),n&&n.replace(A,jm).replace(Lm,"")}function uM(n,r,l){n=Re(n),r=zn(r);var h=n.length;l=l===e?h:Mr(re(l),0,h);var M=l;return l-=r.length,l>=0&&n.slice(l,M)==r}function fM(n){return n=Re(n),n&&Tt.test(n)?n.replace(lt,t_):n}function hM(n){return n=Re(n),n&&Aa.test(n)?n.replace(Vr,"\\$&"):n}var dM=ts(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),pM=ts(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),mM=Ah("toLowerCase");function _M(n,r,l){n=Re(n),r=re(r);var h=r?Yr(n):0;if(!r||h>=r)return n;var M=(r-h)/2;return ro(Xa(M),l)+n+ro(Wa(M),l)}function gM(n,r,l){n=Re(n),r=re(r);var h=r?Yr(n):0;return r&&h<r?n+ro(r-h,l):n}function vM(n,r,l){n=Re(n),r=re(r);var h=r?Yr(n):0;return r&&h<r?ro(r-h,l)+n:n}function xM(n,r,l){return l||r==null?r=0:r&&(r=+r),w_(Re(n).replace(ai,""),r||0)}function MM(n,r,l){return(l?yn(n,r,l):r===e)?r=1:r=re(r),Vl(Re(n),r)}function SM(){var n=arguments,r=Re(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var EM=ts(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function yM(n,r,l){return l&&typeof l!="number"&&yn(n,r,l)&&(r=l=e),l=l===e?Nt:l>>>0,l?(n=Re(n),n&&(typeof r=="string"||r!=null&&!fc(r))&&(r=zn(r),!r&&qr(n))?er(oi(n),0,l):n.split(r,l)):[]}var TM=ts(function(n,r,l){return n+(l?" ":"")+pc(r)});function AM(n,r,l){return n=Re(n),l=l==null?0:Mr(re(l),0,n.length),r=zn(r),n.slice(l,l+r.length)==r}function wM(n,r,l){var h=E.templateSettings;l&&yn(n,r,l)&&(r=e),n=Re(n),r=go({},r,h,Ih);var M=go({},r.imports,h.imports,Ih),w=cn(M),D=Al(M,w),B,X,rt=0,at=r.interpolate||W,ht="__p += '",vt=bl((r.escape||W).source+"|"+at.source+"|"+(at===je?La:W).source+"|"+(r.evaluate||W).source+"|$","g"),zt="//# sourceURL="+(Le.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nm+"]")+`
`;n.replace(vt,function(Zt,pe,Me,Gn,Tn,Vn){return Me||(Me=Gn),ht+=n.slice(rt,Vn).replace(Z,e_),pe&&(B=!0,ht+=`' +
__e(`+pe+`) +
'`),Tn&&(X=!0,ht+=`';
`+Tn+`;
__p += '`),Me&&(ht+=`' +
((__t = (`+Me+`)) == null ? '' : __t) +
'`),rt=Vn+Zt.length,Zt}),ht+=`';
`;var Yt=Le.call(r,"variable")&&r.variable;if(!Yt)ht=`with (obj) {
`+ht+`
}
`;else if(Wr.test(Yt))throw new ee(u);ht=(X?ht.replace(Ie,""):ht).replace(V,"$1").replace(Mt,"$1;"),ht="function("+(Yt||"obj")+`) {
`+(Yt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ht+`return __p
}`;var ae=Td(function(){return be(w,zt+"return "+ht).apply(e,D)});if(ae.source=ht,uc(ae))throw ae;return ae}function bM(n){return Re(n).toLowerCase()}function RM(n){return Re(n).toUpperCase()}function CM(n,r,l){if(n=Re(n),n&&(l||r===e))return Df(n);if(!n||!(r=zn(r)))return n;var h=oi(n),M=oi(r),w=Uf(h,M),D=Nf(h,M)+1;return er(h,w,D).join("")}function LM(n,r,l){if(n=Re(n),n&&(l||r===e))return n.slice(0,Of(n)+1);if(!n||!(r=zn(r)))return n;var h=oi(n),M=Nf(h,oi(r))+1;return er(h,0,M).join("")}function PM(n,r,l){if(n=Re(n),n&&(l||r===e))return n.replace(ai,"");if(!n||!(r=zn(r)))return n;var h=oi(n),M=Uf(h,oi(r));return er(h,M).join("")}function IM(n,r){var l=T,h=z;if(Ye(r)){var M="separator"in r?r.separator:M;l="length"in r?re(r.length):l,h="omission"in r?zn(r.omission):h}n=Re(n);var w=n.length;if(qr(n)){var D=oi(n);w=D.length}if(l>=w)return n;var B=l-Yr(h);if(B<1)return h;var X=D?er(D,0,B).join(""):n.slice(0,B);if(M===e)return X+h;if(D&&(B+=X.length-B),fc(M)){if(n.slice(B).search(M)){var rt,at=X;for(M.global||(M=bl(M.source,Re(Pa.exec(M))+"g")),M.lastIndex=0;rt=M.exec(at);)var ht=rt.index;X=X.slice(0,ht===e?B:ht)}}else if(n.indexOf(zn(M),B)!=B){var vt=X.lastIndexOf(M);vt>-1&&(X=X.slice(0,vt))}return X+h}function DM(n){return n=Re(n),n&&At.test(n)?n.replace(tt,l_):n}var UM=ts(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),pc=Ah("toUpperCase");function yd(n,r,l){return n=Re(n),r=l?e:r,r===e?i_(n)?f_(n):Zm(n):n.match(r)||[]}var Td=ce(function(n,r){try{return On(n,e,r)}catch(l){return uc(l)?l:new ee(l)}}),NM=Pi(function(n,r){return Zn(r,function(l){l=xi(l),Ci(n,l,lc(n[l],n))}),n});function FM(n){var r=n==null?0:n.length,l=qt();return n=r?Xe(n,function(h){if(typeof h[1]!="function")throw new Kn(c);return[l(h[0]),h[1]]}):[],ce(function(h){for(var M=-1;++M<r;){var w=n[M];if(On(w[0],this,h))return On(w[1],this,h)}})}function OM(n){return lg(Jn(n,_))}function mc(n){return function(){return n}}function BM(n,r){return n==null||n!==n?r:n}var zM=bh(),HM=bh(!0);function Un(n){return n}function _c(n){return ih(typeof n=="function"?n:Jn(n,_))}function GM(n){return sh(Jn(n,_))}function VM(n,r){return ah(n,Jn(r,_))}var kM=ce(function(n,r){return function(l){return Zs(l,n,r)}}),WM=ce(function(n,r){return function(l){return Zs(n,l,r)}});function gc(n,r,l){var h=cn(r),M=Ja(r,h);l==null&&!(Ye(r)&&(M.length||!h.length))&&(l=r,r=n,n=this,M=Ja(r,cn(r)));var w=!(Ye(l)&&"chain"in l)||!!l.chain,D=Di(n);return Zn(M,function(B){var X=r[B];n[B]=X,D&&(n.prototype[B]=function(){var rt=this.__chain__;if(w||rt){var at=n(this.__wrapped__),ht=at.__actions__=Pn(this.__actions__);return ht.push({func:X,args:arguments,thisArg:n}),at.__chain__=rt,at}return X.apply(n,Ki([this.value()],arguments))})}),n}function XM(){return hn._===this&&(hn._=g_),this}function vc(){}function qM(n){return n=re(n),ce(function(r){return oh(r,n)})}var YM=Kl(Xe),ZM=Kl(Rf),KM=Kl(Ml);function Ad(n){return nc(n)?Sl(xi(n)):Ag(n)}function $M(n){return function(r){return n==null?e:Sr(n,r)}}var JM=Ch(),QM=Ch(!0);function xc(){return[]}function Mc(){return!1}function jM(){return{}}function tS(){return""}function eS(){return!0}function nS(n,r){if(n=re(n),n<1||n>j)return[];var l=Nt,h=gn(n,Nt);r=qt(r),n-=Nt;for(var M=Tl(h,r);++l<n;)r(l);return M}function iS(n){return ie(n)?Xe(n,xi):Hn(n)?[n]:Pn(Xh(Re(n)))}function rS(n){var r=++m_;return Re(n)+r}var sS=io(function(n,r){return n+r},0),aS=$l("ceil"),oS=io(function(n,r){return n/r},1),lS=$l("floor");function cS(n){return n&&n.length?$a(n,Un,Nl):e}function uS(n,r){return n&&n.length?$a(n,qt(r,2),Nl):e}function fS(n){return Pf(n,Un)}function hS(n,r){return Pf(n,qt(r,2))}function dS(n){return n&&n.length?$a(n,Un,zl):e}function pS(n,r){return n&&n.length?$a(n,qt(r,2),zl):e}var mS=io(function(n,r){return n*r},1),_S=$l("round"),gS=io(function(n,r){return n-r},0);function vS(n){return n&&n.length?yl(n,Un):0}function xS(n,r){return n&&n.length?yl(n,qt(r,2)):0}return E.after=Gv,E.ary=nd,E.assign=Rx,E.assignIn=_d,E.assignInWith=go,E.assignWith=Cx,E.at=Lx,E.before=id,E.bind=lc,E.bindAll=NM,E.bindKey=rd,E.castArray=jv,E.chain=jh,E.chunk=l0,E.compact=c0,E.concat=u0,E.cond=FM,E.conforms=OM,E.constant=mc,E.countBy=vv,E.create=Px,E.curry=sd,E.curryRight=ad,E.debounce=od,E.defaults=Ix,E.defaultsDeep=Dx,E.defer=Vv,E.delay=kv,E.difference=f0,E.differenceBy=h0,E.differenceWith=d0,E.drop=p0,E.dropRight=m0,E.dropRightWhile=_0,E.dropWhile=g0,E.fill=v0,E.filter=Mv,E.flatMap=yv,E.flatMapDeep=Tv,E.flatMapDepth=Av,E.flatten=Kh,E.flattenDeep=x0,E.flattenDepth=M0,E.flip=Wv,E.flow=zM,E.flowRight=HM,E.fromPairs=S0,E.functions=Hx,E.functionsIn=Gx,E.groupBy=wv,E.initial=y0,E.intersection=T0,E.intersectionBy=A0,E.intersectionWith=w0,E.invert=kx,E.invertBy=Wx,E.invokeMap=Rv,E.iteratee=_c,E.keyBy=Cv,E.keys=cn,E.keysIn=Dn,E.map=uo,E.mapKeys=qx,E.mapValues=Yx,E.matches=GM,E.matchesProperty=VM,E.memoize=ho,E.merge=Zx,E.mergeWith=gd,E.method=kM,E.methodOf=WM,E.mixin=gc,E.negate=po,E.nthArg=qM,E.omit=Kx,E.omitBy=$x,E.once=Xv,E.orderBy=Lv,E.over=YM,E.overArgs=qv,E.overEvery=ZM,E.overSome=KM,E.partial=cc,E.partialRight=ld,E.partition=Pv,E.pick=Jx,E.pickBy=vd,E.property=Ad,E.propertyOf=$M,E.pull=L0,E.pullAll=Jh,E.pullAllBy=P0,E.pullAllWith=I0,E.pullAt=D0,E.range=JM,E.rangeRight=QM,E.rearg=Yv,E.reject=Uv,E.remove=U0,E.rest=Zv,E.reverse=ac,E.sampleSize=Fv,E.set=jx,E.setWith=tM,E.shuffle=Ov,E.slice=N0,E.sortBy=Hv,E.sortedUniq=V0,E.sortedUniqBy=k0,E.split=yM,E.spread=Kv,E.tail=W0,E.take=X0,E.takeRight=q0,E.takeRightWhile=Y0,E.takeWhile=Z0,E.tap=cv,E.throttle=$v,E.thru=co,E.toArray=dd,E.toPairs=xd,E.toPairsIn=Md,E.toPath=iS,E.toPlainObject=md,E.transform=eM,E.unary=Jv,E.union=K0,E.unionBy=$0,E.unionWith=J0,E.uniq=Q0,E.uniqBy=j0,E.uniqWith=tv,E.unset=nM,E.unzip=oc,E.unzipWith=Qh,E.update=iM,E.updateWith=rM,E.values=is,E.valuesIn=sM,E.without=ev,E.words=yd,E.wrap=Qv,E.xor=nv,E.xorBy=iv,E.xorWith=rv,E.zip=sv,E.zipObject=av,E.zipObjectDeep=ov,E.zipWith=lv,E.entries=xd,E.entriesIn=Md,E.extend=_d,E.extendWith=go,gc(E,E),E.add=sS,E.attempt=Td,E.camelCase=cM,E.capitalize=Sd,E.ceil=aS,E.clamp=aM,E.clone=tx,E.cloneDeep=nx,E.cloneDeepWith=ix,E.cloneWith=ex,E.conformsTo=rx,E.deburr=Ed,E.defaultTo=BM,E.divide=oS,E.endsWith=uM,E.eq=ci,E.escape=fM,E.escapeRegExp=hM,E.every=xv,E.find=Sv,E.findIndex=Yh,E.findKey=Ux,E.findLast=Ev,E.findLastIndex=Zh,E.findLastKey=Nx,E.floor=lS,E.forEach=td,E.forEachRight=ed,E.forIn=Fx,E.forInRight=Ox,E.forOwn=Bx,E.forOwnRight=zx,E.get=hc,E.gt=sx,E.gte=ax,E.has=Vx,E.hasIn=dc,E.head=$h,E.identity=Un,E.includes=bv,E.indexOf=E0,E.inRange=oM,E.invoke=Xx,E.isArguments=Tr,E.isArray=ie,E.isArrayBuffer=ox,E.isArrayLike=In,E.isArrayLikeObject=Ke,E.isBoolean=lx,E.isBuffer=nr,E.isDate=cx,E.isElement=ux,E.isEmpty=fx,E.isEqual=hx,E.isEqualWith=dx,E.isError=uc,E.isFinite=px,E.isFunction=Di,E.isInteger=cd,E.isLength=mo,E.isMap=ud,E.isMatch=mx,E.isMatchWith=_x,E.isNaN=gx,E.isNative=vx,E.isNil=Mx,E.isNull=xx,E.isNumber=fd,E.isObject=Ye,E.isObjectLike=Ze,E.isPlainObject=ta,E.isRegExp=fc,E.isSafeInteger=Sx,E.isSet=hd,E.isString=_o,E.isSymbol=Hn,E.isTypedArray=ns,E.isUndefined=Ex,E.isWeakMap=yx,E.isWeakSet=Tx,E.join=b0,E.kebabCase=dM,E.last=jn,E.lastIndexOf=R0,E.lowerCase=pM,E.lowerFirst=mM,E.lt=Ax,E.lte=wx,E.max=cS,E.maxBy=uS,E.mean=fS,E.meanBy=hS,E.min=dS,E.minBy=pS,E.stubArray=xc,E.stubFalse=Mc,E.stubObject=jM,E.stubString=tS,E.stubTrue=eS,E.multiply=mS,E.nth=C0,E.noConflict=XM,E.noop=vc,E.now=fo,E.pad=_M,E.padEnd=gM,E.padStart=vM,E.parseInt=xM,E.random=lM,E.reduce=Iv,E.reduceRight=Dv,E.repeat=MM,E.replace=SM,E.result=Qx,E.round=_S,E.runInContext=k,E.sample=Nv,E.size=Bv,E.snakeCase=EM,E.some=zv,E.sortedIndex=F0,E.sortedIndexBy=O0,E.sortedIndexOf=B0,E.sortedLastIndex=z0,E.sortedLastIndexBy=H0,E.sortedLastIndexOf=G0,E.startCase=TM,E.startsWith=AM,E.subtract=gS,E.sum=vS,E.sumBy=xS,E.template=wM,E.times=nS,E.toFinite=Ui,E.toInteger=re,E.toLength=pd,E.toLower=bM,E.toNumber=ti,E.toSafeInteger=bx,E.toString=Re,E.toUpper=RM,E.trim=CM,E.trimEnd=LM,E.trimStart=PM,E.truncate=IM,E.unescape=DM,E.uniqueId=rS,E.upperCase=UM,E.upperFirst=pc,E.each=td,E.eachRight=ed,E.first=$h,gc(E,function(){var n={};return gi(E,function(r,l){Le.call(E.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),E.VERSION=i,Zn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Zn(["drop","take"],function(n,r){ge.prototype[n]=function(l){l=l===e?1:nn(re(l),0);var h=this.__filtered__&&!r?new ge(this):this.clone();return h.__filtered__?h.__takeCount__=gn(l,h.__takeCount__):h.__views__.push({size:gn(l,Nt),type:n+(h.__dir__<0?"Right":"")}),h},ge.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Zn(["filter","map","takeWhile"],function(n,r){var l=r+1,h=l==it||l==nt;ge.prototype[n]=function(M){var w=this.clone();return w.__iteratees__.push({iteratee:qt(M,3),type:l}),w.__filtered__=w.__filtered__||h,w}}),Zn(["head","last"],function(n,r){var l="take"+(r?"Right":"");ge.prototype[n]=function(){return this[l](1).value()[0]}}),Zn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");ge.prototype[n]=function(){return this.__filtered__?new ge(this):this[l](1)}}),ge.prototype.compact=function(){return this.filter(Un)},ge.prototype.find=function(n){return this.filter(n).head()},ge.prototype.findLast=function(n){return this.reverse().find(n)},ge.prototype.invokeMap=ce(function(n,r){return typeof n=="function"?new ge(this):this.map(function(l){return Zs(l,n,r)})}),ge.prototype.reject=function(n){return this.filter(po(qt(n)))},ge.prototype.slice=function(n,r){n=re(n);var l=this;return l.__filtered__&&(n>0||r<0)?new ge(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==e&&(r=re(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},ge.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ge.prototype.toArray=function(){return this.take(Nt)},gi(ge.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),h=/^(?:head|last)$/.test(r),M=E[h?"take"+(r=="last"?"Right":""):r],w=h||/^find/.test(r);M&&(E.prototype[r]=function(){var D=this.__wrapped__,B=h?[1]:arguments,X=D instanceof ge,rt=B[0],at=X||ie(D),ht=function(pe){var Me=M.apply(E,Ki([pe],B));return h&&vt?Me[0]:Me};at&&l&&typeof rt=="function"&&rt.length!=1&&(X=at=!1);var vt=this.__chain__,zt=!!this.__actions__.length,Yt=w&&!vt,ae=X&&!zt;if(!w&&at){D=ae?D:new ge(this);var Zt=n.apply(D,B);return Zt.__actions__.push({func:co,args:[ht],thisArg:e}),new $n(Zt,vt)}return Yt&&ae?n.apply(this,B):(Zt=this.thru(ht),Yt?h?Zt.value()[0]:Zt.value():Zt)})}),Zn(["pop","push","shift","sort","splice","unshift"],function(n){var r=Na[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(h&&!this.__chain__){var w=this.value();return r.apply(ie(w)?w:[],M)}return this[l](function(D){return r.apply(ie(D)?D:[],M)})}}),gi(ge.prototype,function(n,r){var l=E[r];if(l){var h=l.name+"";Le.call(Jr,h)||(Jr[h]=[]),Jr[h].push({name:r,func:l})}}),Jr[no(e,m).name]=[{name:"wrapper",func:e}],ge.prototype.clone=D_,ge.prototype.reverse=U_,ge.prototype.value=N_,E.prototype.at=uv,E.prototype.chain=fv,E.prototype.commit=hv,E.prototype.next=dv,E.prototype.plant=mv,E.prototype.reverse=_v,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=gv,E.prototype.first=E.prototype.head,Gs&&(E.prototype[Gs]=pv),E},Zr=h_();_r?((_r.exports=Zr)._=Zr,_l._=Zr):hn._=Zr}).call(Xb)}(_a,_a.exports)),_a.exports}var fa={},Np;function Yb(){if(Np)return fa;Np=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.backtrace=void 0;function s(t,e,i){const a=[];let o=i?t:t.getParent();for(;o.getParent();)a.push([o.position.x,o.position.y]),o=o.getParent();return e&&a.push([o.position.x,o.position.y]),a.reverse()}return fa.backtrace=s,fa}var ha={},Fp;function Zb(){if(Fp)return ha;Fp=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.calculateHeuristic=void 0;function s(t,e,i,a){const o=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(o+c)*a;case"Euclidean":return Math.sqrt(o*o+c*c)*a;case"Chebyshev":return Math.max(o,c)*a;case"Octile":return(o+c-.58*Math.min(o,c))*a}}return ha.calculateHeuristic=s,ha}var da={},pa={},Op;function Kb(){if(Op)return pa;Op=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.Node=void 0;class s{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return pa.Node=s,pa}var Bp;function Em(){if(Bp)return da;Bp=1,Object.defineProperty(da,"__esModule",{value:!0}),da.Grid=void 0;const s=Kb();class t{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,a,o,c){const u=[];let d=0;for(let f=0;f<o;f++){u[f]=[];for(let p=0;p<a;p++)u[f][p]=new s.Node({id:d,position:{x:p,y:f}}),d++}if(i===void 0){for(let f=0;f<o;f++)for(let p=0;p<a;p++)Math.floor(Math.random()*10)+1>10-c?u[f][p].setIsWalkable(!1):u[f][p].setIsWalkable(!0);return u}for(let f=0;f<o;f++)for(let p=0;p<a;p++)u[f][p].setIsWalkable(!i[f][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,a){const o=[],c=i.x-1,u=i.x+1,d=i.y-1,f=i.y+1;for(let p=d;p<=f;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(a||_==i.x||p==i.y)&&o.push(this.getNodeAt({x:_,y:p}));return o}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let a=0;a<this.gridNodes[i].length;a++)this.gridNodes[i][a].setIsOnClosedList(!1),this.gridNodes[i][a].setIsOnOpenList(!1),this.gridNodes[i][a].setParent(void 0),this.gridNodes[i][a].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let a=0;for(let o=0;o<this.height;o++){i[o]=[];for(let c=0;c<this.width;c++)i[o][c]=new s.Node({id:a,position:{x:c,y:o},walkable:this.gridNodes[o][c].getIsWalkable()}),a++}return i}}return da.Grid=t,da}var zp;function $b(){if(zp)return ua;zp=1,Object.defineProperty(ua,"__esModule",{value:!0}),ua.AStarFinder=void 0;const s=qb(),t=Yb(),e=Zb(),i=Em();class a{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const d=this.grid.getNodeAt(c),f=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];d.setIsOnOpenList(!0),this.openList.push(d);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,e.calculateHeuristic)(this.heuristic,g.position,f.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,s.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,s.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===f)return(0,t.backtrace)(f,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const y=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||y<x.getGValue())&&(x.setGValue(y),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return ua.AStarFinder=a,ua}var Hp;function Jb(){return Hp||(Hp=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.Grid=s.AStarFinder=void 0;var t=$b();Object.defineProperty(s,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=Em();Object.defineProperty(s,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(eu)),eu}var Qb=Jb();const me={TILE_SIZE:1},As={createSimpleGrid:s=>{var o;const t=[];for(let c=0;c<s.length;c++){const u=[];for(let d=0;d<s[c].length;d++)u.push(s[c][d].isWalkable?0:1);t.push(u)}const e=t.length,i=((o=t[0])==null?void 0:o.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:e},(d,f)=>t[f][u]))},getBoundedUncheckedNeighbors:(s,t,e)=>{const i=[];return s>0&&i.push(new Ut(s-1,t)),s<e.length-1&&i.push(new Ut(s+1,t)),t>0&&i.push(new Ut(s,t-1)),t<e[0].length-1&&i.push(new Ut(s,t+1)),i},getPositionHash(s){return`${s.x},${s.y}`},findClosestEnemy:(s,t,e)=>{const i=new Set,a=[t.clone()];i.add(As.getPositionHash(t));let o=0;for(;o<a.length;){if(o>s.length*s[0].length*2)return null;const u=a[o];o++;const d=As.getBoundedUncheckedNeighbors(u.x,u.y,s);for(const f of d){if(!s[f.x][f.y].isWalkable)continue;const p=s[f.x][f.y].actors.find(_=>_ instanceof ff&&_.battleSide!==e);if(p)return{pos:u,enemy:p};i.has(As.getPositionHash(f))||(a.push(f),i.add(As.getPositionHash(f)))}}return null}};class ff extends Ta{constructor(e){const i=me.TILE_SIZE/4,a=me.TILE_SIZE,o=new O(e.pos.x,me.TILE_SIZE/2,e.pos.y),c=new Ti({center:o,parts:[{mesh:fn.createCylinder({radius:i,height:a,color:new Ct(ye.RED)}),offset:new O(0,0,0)}]});super({mesh:c});Ht(this,"battleSide",il.ENEMY);Ht(this,"pos");Ht(this,"radius");Ht(this,"objective");this.objective=e.objective,this.pos=e.pos,this.radius=i}update(e,i,a,o){super.update(e,i,a,o);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=this.objective.fullHealth*.1,this.kill();else if(this.pos.distanceTo(o)<c){this.pos=o;const u=As.createSimpleGrid(a.actorsGrid),f=new Qb.AStarFinder({grid:{matrix:u},diagonalAllowed:!1}).findPath(o,this.objective.position.clone());if(f.length>1){const p=new Ut(f[1][0],f[1][1]);a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(_=>_!==this),a.actorsGrid[p.x][p.y].actors.push(this)}}else{const d=i*.0015,f=o.clone().sub(this.pos).normalize();this.pos.add(f.clone().multiplyScalar(d))}}graphics(){this.mesh.position=new O(this.pos.x,this.mesh.position.y,this.pos.y)}}const rl=class rl extends uf{constructor({position:e}){const i=me.TILE_SIZE/64,a=Math.random(),o=fn.createSphere({radius:i,color:a<.33?new Ct(ye.ORANGE):a<.66?new Ct(ye.YELLOW):new Ct(ye.RED)});o.position.set(e.x,e.y,e.z);super({mesh:o});Ht(this,"ttl",0);Ht(this,"position");Ht(this,"velocity");this.position=e,this.velocity=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5e-5)}update(e,i,a){super.update(e,i,a),this.velocity.y-=1e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>rl.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Ht(rl,"TTL",1e3);let Xu=rl;const ga=class ga extends uf{constructor(e){const i=me.TILE_SIZE/32;super({mesh:fn.createSphere({radius:i,color:new Ct(ye.WHITE)})});Ht(this,"battleSide");Ht(this,"position");Ht(this,"radius");Ht(this,"direction");Ht(this,"particleTimeout",0);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=i}update(e,i,a){var b,v;super.update(e,i,a);const c=.03*i,u=this.direction.clone().normalize(),d=this.position.clone().add(new O(u.x*c,0,u.y*c)),f=me.TILE_SIZE/4,p=this.position.distanceTo(d),_=Math.max(1,Math.floor(p/f));for(let m=0;m<_;m++){const P=this.position.clone().add(new O(u.x*f,0,u.y*f)),L=[new Ut(P.x-f,P.z-f),new Ut(P.x-f,P.z),new Ut(P.x-f,P.z+f),new Ut(P.x,P.z-f),new Ut(P.x,P.z),new Ut(P.x,P.z+f),new Ut(P.x+f,P.z-f),new Ut(P.x+f,P.z),new Ut(P.x+f,P.z+f)].map(R=>new Ut(Math.floor(R.x),Math.floor(R.y)));for(const R of L){const H=(b=a.actorsGrid[R.x])==null?void 0:b[R.y];if(H){for(const N of H.actors)if(N instanceof ff&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new Ut(this.position.x,this.position.z))<this.radius+N.radius){N.kill();break}}}}this.position.set(d.x,this.position.y,d.z);const g=a.actorsGrid.length,x=((v=a.actorsGrid[0])==null?void 0:v.length)??0;0<=this.position.x&&this.position.x<g&&0<=this.position.z&&this.position.z<x||this.kill(),this.particleTimeout+=i,this.particleTimeout>ga.PARTICLE_TIMEOUT&&(a.addComponent(new Xu({position:this.position.clone()})),this.particleTimeout=this.particleTimeout%ga.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Ht(ga,"PARTICLE_TIMEOUT",20);let qu=ga;const va=class va extends Ta{constructor(e){const i=new O(e.position.x,me.TILE_SIZE,e.position.y),a=fn.createGem({size:me.TILE_SIZE/4,color:new Ct(ye.WHITE)}),o=new Ti({center:i,parts:[{mesh:fn.createBox({width:me.TILE_SIZE,height:me.TILE_SIZE/2,depth:me.TILE_SIZE,color:new Ct(ye.DARK)}),offset:new O(0,-1*3/4,0)},{mesh:fn.createBox({width:me.TILE_SIZE*3/4,height:me.TILE_SIZE,depth:me.TILE_SIZE*3/4,color:new Ct(ye.METAL)}),offset:new O(0,0,0)},{mesh:fn.createBox({width:me.TILE_SIZE,height:me.TILE_SIZE/2,depth:me.TILE_SIZE,color:new Ct(ye.DARK)}),offset:new O(0,me.TILE_SIZE*3/4,0)},{mesh:a,offset:new O(0,me.TILE_SIZE*3/2,0)}]});super({mesh:o});Ht(this,"gem");Ht(this,"position");Ht(this,"shootTimeout",0);this.gem=a,this.position=e.position}update(e,i,a,o){super.update(e,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500);const c=this.shootTimeout+i;if(this.shootTimeout=c%va.SHOOT_TIMEOUT,c>=va.SHOOT_TIMEOUT){const d=As.findClosestEnemy(a.actorsGrid,this.position.clone(),il.ALLY),f=d?new Ut(d.enemy.mesh.position.x-this.position.x,d.enemy.mesh.position.z-this.position.y).normalize():null;if(f!==null){const p=new qu({battleSide:il.ALLY,direction:f,position:new O(this.position.x,this.mesh.position.y,this.position.y)});a.addComponent(p)}}}};Ht(va,"SHOOT_TIMEOUT",1e3);let Yu=va;class jb extends Ta{constructor(e){const i=c=>fn.createBox({width:c==="horizontal"?me.TILE_SIZE:me.TILE_SIZE/16,height:me.TILE_SIZE/16,depth:c==="vertical"?me.TILE_SIZE:me.TILE_SIZE/16,color:new Ct(ye.RED)}),a=new O(e.pos.x,me.TILE_SIZE/16,e.pos.y),o=new Ti({center:a,parts:[{mesh:i("vertical"),offset:new O(me.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new O(-15/32,0,0)},{mesh:i("horizontal"),offset:new O(0,0,me.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new O(0,0,-15/32)}]});super({mesh:o});Ht(this,"pos");Ht(this,"canPlace",!1);Ht(this,"greenMaterial",new Mi({color:new Ct(ye.LIGHT_GREEN)}));Ht(this,"redMaterial",new Mi({color:new Ct(ye.RED)}));this.pos=e.pos}update(e,i,a,o){var d;super.update(e,i,a,o);let c=0;e.keyboardHandler.wasPressed("ArrowUp")?c=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?u=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const f=o.clone().add(new Ut(u,c));if(!(0<=f.x&&f.x<a.actorsGrid.length)||!(0<=f.y&&f.y<(((d=a.actorsGrid[0])==null?void 0:d.length)??0)))return;this.pos=f,a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(p=>p!==this),a.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=a.actorsGrid[o.x][o.y].isWalkable&&a.actorsGrid[o.x][o.y].actors.find(f=>f!==this)===void 0,this.canPlace&&e.keyboardHandler.wasPressed("z")){const f=new Yu({position:o.clone()});a.addActor(f,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}else if(this.canPlace&&e.keyboardHandler.wasPressed("x")){const f=new Wb({position:new O(o.x,me.TILE_SIZE/2,o.y),size:me.TILE_SIZE});a.addActor(f,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}}graphics(e,i,a){const o=1-Math.exp(-.005*i);this.mesh.position=new O(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*o,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*o),a.camera.position.set(this.mesh.position.x+me.TILE_SIZE*2,this.mesh.position.y+me.TILE_SIZE*5,this.mesh.position.z+me.TILE_SIZE*8),a.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class t1{constructor(t){Ht(this,"currentHealth");Ht(this,"fullHealth");Ht(this,"offset");Ht(this,"red");Ht(this,"green");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new Qd(new ku({map:new rp().load("./textures/red.png")})),this.green=new Qd(new ku({map:new rp().load("./textures/green.png")})),this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const i=1,a=.2;this.red.scale.set(i,a,a),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),a,a),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}class e1 extends Ta{constructor({health:e,position:i}){const a=me.TILE_SIZE/2,o=me.TILE_SIZE*2,c=me.TILE_SIZE/2,u=new O(i.x,me.TILE_SIZE,i.y),d=fn.createGem({size:o/4,color:new Ct(ye.LIGHT_GREEN),basicMaterial:!0}),f=new Ti({center:u,parts:[{mesh:fn.createBox({color:new Ct(ye.DARK),depth:c,height:o/4,width:a}),offset:new O(0,-2*3/8,0)},{mesh:d,offset:new O(0,o*2/8,0)},{mesh:new QE(new Ct(ye.LIGHT_GREEN),20),offset:new O(0,o*2/8,0)}]});super({mesh:f});Ht(this,"gem");Ht(this,"hb");Ht(this,"fullHealth");Ht(this,"health");Ht(this,"position");this.gem=d,this.position=i,this.health=e,this.fullHealth=e,this.hb=new t1({fullHealth:this.fullHealth,currentHealth:this.health,position:new O(5,3,5),offset:new O(0,o/2+me.TILE_SIZE/2,0)})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,a){super.beforeDeath(e,i,a),this.hb.end(i)}update(e,i,a,o){super.update(e,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}class n1 extends uf{constructor(t){const e=()=>{const a=Math.floor(Math.random()*2)+2,o=Array.from({length:a},()=>fn.createCone({radius:t.size/32,height:t.size/4,color:new Ct(ye.GREEN)})),c=2;o.forEach(f=>f.rotateOnAxis(new O(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-t.size/2+Math.random()*t.size,d=-t.size/2+Math.random()*t.size;return o.map(f=>({mesh:f,offset:new O(u,t.size*19/32,d)}))},i=()=>{const a=fn.createCone({radius:t.size/32,height:t.size/2,color:new Ct(ye.GREEN)}),o=fn.createSphere({radius:t.size/32,color:Math.random()<.5?new Ct(ye.PINK):new Ct(ye.YELLOW)}),c=-t.size/2+Math.random()*t.size,u=-t.size/2+Math.random()*t.size;return[{mesh:a,offset:new O(c,t.size*10/16,u)},{mesh:o,offset:new O(c,t.size*13/16,u)}]};super({mesh:new Ti({center:t.position,parts:[{mesh:fn.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new Ct(ye.DARK_GREEN)}),offset:new O(0,t.size*3/8,0)},{mesh:fn.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new Ct(ye.DIRT)}),offset:new O(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?i():[]]})})}}const i1={buildWorldComponents:s=>{const t=[];for(let e=0;e<s.width;e++)for(let i=0;i<s.height;i++)t.push(new n1({position:new O(e*s.tileSize,-s.tileSize/2,i*s.tileSize),size:s.tileSize,color:new Ct(ye.DARK_GREEN)}));return t}},Nr=class Nr extends zb{constructor(){super({width:8,height:8});Ht(this,"spawnTimeout",0);Ht(this,"headQuarters");this.headQuarters=new e1({position:new Ut(1,1),health:100})}onStart(){var u;const e=this.actorsGrid.length,i=((u=this.actorsGrid[0])==null?void 0:u.length)??0;this.scene.background=new Ct(ye.VOID),this.scene.add(new KE(new Ct(ye.WHITE),new Ct(ye.DARK_GREEN),3)),i1.buildWorldComponents({width:e,height:i,tileSize:Nr.TILE_SIZE}).forEach(d=>this.addComponent(d));const o=new Ut(Math.floor(e/2),Math.floor(i/2));this.addActor(new jb({pos:o}),o),this.addActor(this.headQuarters,this.headQuarters.position);const c=new ey(Math.max(e,i));this.scene.add(c)}update(e,i){super.update(e,i);const a=this.spawnTimeout+i,o=Math.floor(a/Nr.SPAWN_TIMEOUT);this.spawnTimeout=a%Nr.SPAWN_TIMEOUT;for(let c=0;c<o;c++){const u=new Ut(this.actorsGrid.length-1,this.actorsGrid[0].length-1),d=new ff({pos:u,objective:this.headQuarters});this.addActor(d,u)}}};Ht(Nr,"SPAWN_TIMEOUT",3e3),Ht(Nr,"TILE_SIZE",1);let Zu=Nr;var il=(s=>(s.ALLY="ally",s.ENEMY="enemy",s))(il||{});const hf=new kb;hf.addContainer("BF",new Zu);hf.setContainer("BF");hf.start();
