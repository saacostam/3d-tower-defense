var AS=Object.defineProperty;var bS=(r,t,e)=>t in r?AS(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var vt=(r,t,e)=>bS(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ju="173",RS=0,Ld=1,CS=2,Xp=1,LS=2,Hi=3,dr=0,Fn=1,Vi=2,ur=0,Rs=1,Id=2,Pd=3,Dd=4,IS=5,Ur=100,PS=101,DS=102,US=103,NS=104,FS=200,OS=201,BS=202,zS=203,au=204,lu=205,GS=206,HS=207,VS=208,kS=209,WS=210,XS=211,qS=212,YS=213,ZS=214,cu=0,uu=1,hu=2,Ps=3,fu=4,du=5,pu=6,mu=7,qp=0,KS=1,$S=2,hr=0,JS=1,QS=2,jS=3,tE=4,eE=5,nE=6,iE=7,Yp=300,Ds=301,Us=302,_u=303,gu=304,ul=306,vu=1e3,Or=1001,xu=1002,_i=1003,rE=1004,Ma=1005,Ti=1006,Ac=1007,Br=1008,qi=1009,Zp=1010,Kp=1011,Eo=1012,th=1013,zr=1014,ki=1015,To=1016,eh=1017,nh=1018,Ns=1020,$p=35902,Jp=1021,Qp=1022,mi=1023,jp=1024,tm=1025,Cs=1026,Fs=1027,em=1028,ih=1029,nm=1030,rh=1031,sh=1033,$a=33776,Ja=33777,Qa=33778,ja=33779,Mu=35840,Su=35841,Eu=35842,yu=35843,Tu=36196,wu=37492,Au=37496,bu=37808,Ru=37809,Cu=37810,Lu=37811,Iu=37812,Pu=37813,Du=37814,Uu=37815,Nu=37816,Fu=37817,Ou=37818,Bu=37819,zu=37820,Gu=37821,tl=36492,Hu=36494,Vu=36495,im=36283,ku=36284,Wu=36285,Xu=36286,sE=3200,oE=3201,rm=0,aE=1,cr="",ri="srgb",Os="srgb-linear",nl="linear",Ue="srgb",os=7680,Ud=519,lE=512,cE=513,uE=514,sm=515,hE=516,fE=517,dE=518,pE=519,qu=35044,Nd="300 es",Wi=2e3,il=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const o=i[t];if(o!==void 0){const a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,Yu=180/Math.PI;function fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[e&63|128]+xn[e>>8&255]+"-"+xn[e>>16&255]+xn[e>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function mE(r,t){return(r%t+t)%t}function Rc(r,t,e){return(1-e)*r+e*t}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*o+t.x,this.y=a*o+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,i,o,a,c,u,h,f){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,u,h,f)}set(t,e,i,o,a,c,u,h,f){const p=this.elements;return p[0]=t,p[1]=o,p[2]=u,p[3]=e,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],_=i[7],g=i[2],x=i[5],y=i[8],A=o[0],v=o[3],m=o[6],I=o[1],L=o[4],R=o[7],G=o[2],N=o[5],F=o[8];return a[0]=c*A+u*I+h*G,a[3]=c*v+u*L+h*N,a[6]=c*m+u*R+h*F,a[1]=f*A+p*I+_*G,a[4]=f*v+p*L+_*N,a[7]=f*m+p*R+_*F,a[2]=g*A+x*I+y*G,a[5]=g*v+x*L+y*N,a[8]=g*m+x*R+y*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8];return e*c*p-e*u*f-i*a*p+i*u*h+o*a*f-o*c*h}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8],_=p*c-u*f,g=u*h-p*a,x=f*a-c*h,y=e*_+i*g+o*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=_*A,t[1]=(o*f-p*i)*A,t[2]=(u*i-o*c)*A,t[3]=g*A,t[4]=(p*e-o*h)*A,t[5]=(o*a-u*e)*A,t[6]=x*A,t[7]=(i*h-f*e)*A,t[8]=(c*e-i*a)*A,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,c,u){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*u)+c+t,-o*f,o*h,-o*(-f*c+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ae;function om(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function _E(){const r=yo("canvas");return r.style.display="block",r}const Fd={};function ws(r){r in Fd||(Fd[r]=!0,console.warn(r))}function gE(r,t,e){return new Promise(function(i,o){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function vE(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xE(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Od=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ue&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(o.r=Ls(o.r),o.g=Ls(o.g),o.b=Ls(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cr?nl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Os]:{primaries:t,whitePoint:i,transfer:nl,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Od,fromXYZ:Bd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Ae=ME();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class SE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=yo("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=as}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Xi(a[c]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let EE=0;class am{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Lc(o[c].image)):a.push(Lc(o[c]))}else a=Lc(o);i.url=a}return e||(t.images[this.uuid]=i),i}}function Lc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?SE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yE=0;class Cn extends zs{constructor(t=Cn.DEFAULT_IMAGE,e=Cn.DEFAULT_MAPPING,i=Or,o=Or,a=Ti,c=Br,u=mi,h=qi,f=Cn.DEFAULT_ANISOTROPY,p=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=fr(),this.name="",this.source=new am(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vu:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case xu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vu:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case xu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Yp;Cn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,o=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*o+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a;const h=t.elements,f=h[0],p=h[4],_=h[8],g=h[1],x=h[5],y=h[9],A=h[2],v=h[6],m=h[10];if(Math.abs(p-g)<.01&&Math.abs(_-A)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+A)<.1&&Math.abs(y+v)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(f+1)/2,R=(x+1)/2,G=(m+1)/2,N=(p+g)/4,F=(_+A)/4,H=(y+v)/4;return L>R&&L>G?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=N/i,a=F/i):R>G?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=N/o,a=H/o):G<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(G),i=F/a,o=H/a),this.set(i,o,a,e),this}let I=Math.sqrt((v-y)*(v-y)+(_-A)*(_-A)+(g-p)*(g-p));return Math.abs(I)<.001&&(I=1),this.x=(v-y)/I,this.y=(_-A)/I,this.z=(g-p)/I,this.w=Math.acos((f+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TE extends zs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const o={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Cn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new am(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends TE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lm extends Cn{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Cn{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,c,u){let h=i[o+0],f=i[o+1],p=i[o+2],_=i[o+3];const g=a[c+0],x=a[c+1],y=a[c+2],A=a[c+3];if(u===0){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=y,t[e+3]=A;return}if(_!==A||h!==g||f!==x||p!==y){let v=1-u;const m=h*g+f*x+p*y+_*A,I=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const G=Math.sqrt(L),N=Math.atan2(G,m*I);v=Math.sin(v*N)/G,u=Math.sin(u*N)/G}const R=u*I;if(h=h*v+g*R,f=f*v+x*R,p=p*v+y*R,_=_*v+A*R,v===1-u){const G=1/Math.sqrt(h*h+f*f+p*p+_*_);h*=G,f*=G,p*=G,_*=G}}t[e]=h,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,o,a,c){const u=i[o],h=i[o+1],f=i[o+2],p=i[o+3],_=a[c],g=a[c+1],x=a[c+2],y=a[c+3];return t[e]=u*y+p*_+h*x-f*g,t[e+1]=h*y+p*g+f*_-u*x,t[e+2]=f*y+p*x+u*g-h*_,t[e+3]=p*y-u*_-h*g-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,a=t._z,c=t._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(o/2),_=u(a/2),g=h(i/2),x=h(o/2),y=h(a/2);switch(c){case"XYZ":this._x=g*p*_+f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_+g*x*y;break;case"YZX":this._x=g*p*_+f*x*y,this._y=f*x*_+g*p*y,this._z=f*p*y-g*x*_,this._w=f*p*_-g*x*y;break;case"XZY":this._x=g*p*_-f*x*y,this._y=f*x*_-g*p*y,this._z=f*p*y+g*x*_,this._w=f*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],a=e[8],c=e[1],u=e[5],h=e[9],f=e[2],p=e[6],_=e[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-h)*x,this._y=(a-f)*x,this._z=(c-o)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(a-f)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-o)/x,this._x=(a+f)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,a=t._z,c=t._w,u=e._x,h=e._y,f=e._z,p=e._w;return this._x=i*p+c*u+o*f-a*h,this._y=o*p+c*h+a*u-i*f,this._z=a*p+c*f+i*h-o*u,this._w=c*p-i*u-o*h-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*t._w+i*t._x+o*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*i+e*this._x,this._y=x*o+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}const f=Math.sqrt(h),p=Math.atan2(f,u),_=Math.sin((1-e)*p)/f,g=Math.sin(e*p)/f;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=o*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,a=t.x,c=t.y,u=t.z,h=t.w,f=2*(c*o-u*i),p=2*(u*e-a*o),_=2*(a*i-c*e);return this.x=e+h*f+c*_-u*p,this.y=i+h*p+u*f-a*_,this.z=o+h*_+a*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,a=t.z,c=e.x,u=e.y,h=e.z;return this.x=o*h-a*u,this.y=a*c-i*h,this.z=i*u-o*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new U,zd=new wo;class Ao{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,fi):fi.fromBufferAttribute(a,c),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}const o=t.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),Ea.subVectors(this.max,ro),ls.subVectors(t.a,ro),cs.subVectors(t.b,ro),us.subVectors(t.c,ro),ir.subVectors(cs,ls),rr.subVectors(us,cs),Ar.subVectors(ls,us);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!Pc(e,ls,cs,us,Ea)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,ls,cs,us,Ea))?!1:(ya.crossVectors(ir,rr),e=[ya.x,ya.y,ya.z],Pc(e,ls,cs,us,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new U,new U,new U,new U,new U,new U,new U,new U],fi=new U,Sa=new Ao,ls=new U,cs=new U,us=new U,ir=new U,rr=new U,Ar=new U,ro=new U,Ea=new U,ya=new U,br=new U;function Pc(r,t,e,i,o){for(let a=0,c=r.length-3;a<=c;a+=3){br.fromArray(r,a);const u=o.x*Math.abs(br.x)+o.y*Math.abs(br.y)+o.z*Math.abs(br.z),h=t.dot(br),f=e.dot(br),p=i.dot(br);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const AE=new Ao,so=new U,Dc=new U;class hl{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):AE.setFromPoints(t).getCenter(i);let o=0;for(let a=0,c=t.length;a<c;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const e=so.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(so,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Dc)),this.expandByPoint(so.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new U,Uc=new U,Ta=new U,sr=new U,Nc=new U,wa=new U,Fc=new U;class cm{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){Uc.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Uc);const a=t.distanceTo(e)*.5,c=-this.direction.dot(Ta),u=sr.dot(this.direction),h=-sr.dot(Ta),f=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,y;if(p>0)if(_=c*h-u,g=c*u-h,y=a*p,_>=0)if(g>=-y)if(g<=y){const A=1/p;_*=A,g*=A,x=_*(_+c*g+2*u)+g*(c*_+g+2*h)+f}else g=a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g=-a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g<=-y?(_=Math.max(0,-(-c*a+u)),g=_>0?-a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f):g<=y?(_=0,g=Math.min(Math.max(-a,-h),a),x=g*(g+2*h)+f):(_=Math.max(0,-(c*a+u)),g=_>0?a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f);else g=c>0?-a:a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Uc).addScaledVector(Ta,g),x}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const i=Oi.dot(this.direction),o=Oi.dot(Oi)-i*i,a=t.radius*t.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return f>=0?(i=(t.min.x-g.x)*f,o=(t.max.x-g.x)*f):(i=(t.max.x-g.x)*f,o=(t.min.x-g.x)*f),p>=0?(a=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(a=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),_>=0?(u=(t.min.z-g.z)*_,h=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,h=(t.min.z-g.z)*_),i>h||u>o)||((u>i||i!==i)&&(i=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,o,a){Nc.subVectors(e,t),wa.subVectors(i,t),Fc.crossVectors(Nc,wa);let c=this.direction.dot(Fc),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,t);const h=u*this.direction.dot(wa.crossVectors(sr,wa));if(h<0)return null;const f=u*this.direction.dot(Nc.cross(sr));if(f<0||h+f>c)return null;const p=-u*sr.dot(Fc);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(t,e,i,o,a,c,u,h,f,p,_,g,x,y,A,v){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,u,h,f,p,_,g,x,y,A,v)}set(t,e,i,o,a,c,u,h,f,p,_,g,x,y,A,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=o,m[1]=a,m[5]=c,m[9]=u,m[13]=h,m[2]=f,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=A,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/hs.setFromMatrixColumn(t,0).length(),a=1/hs.setFromMatrixColumn(t,1).length(),c=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,a=t.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(o),f=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){const g=c*p,x=c*_,y=u*p,A=u*_;e[0]=h*p,e[4]=-h*_,e[8]=f,e[1]=x+y*f,e[5]=g-A*f,e[9]=-u*h,e[2]=A-g*f,e[6]=y+x*f,e[10]=c*h}else if(t.order==="YXZ"){const g=h*p,x=h*_,y=f*p,A=f*_;e[0]=g+A*u,e[4]=y*u-x,e[8]=c*f,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-y,e[6]=A+g*u,e[10]=c*h}else if(t.order==="ZXY"){const g=h*p,x=h*_,y=f*p,A=f*_;e[0]=g-A*u,e[4]=-c*_,e[8]=y+x*u,e[1]=x+y*u,e[5]=c*p,e[9]=A-g*u,e[2]=-c*f,e[6]=u,e[10]=c*h}else if(t.order==="ZYX"){const g=c*p,x=c*_,y=u*p,A=u*_;e[0]=h*p,e[4]=y*f-x,e[8]=g*f+A,e[1]=h*_,e[5]=A*f+g,e[9]=x*f-y,e[2]=-f,e[6]=u*h,e[10]=c*h}else if(t.order==="YZX"){const g=c*h,x=c*f,y=u*h,A=u*f;e[0]=h*p,e[4]=A-g*_,e[8]=y*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-f*p,e[6]=x*_+y,e[10]=g-A*_}else if(t.order==="XZY"){const g=c*h,x=c*f,y=u*h,A=u*f;e[0]=h*p,e[4]=-_,e[8]=f*p,e[1]=g*_+A,e[5]=c*p,e[9]=x*_-y,e[2]=y*_-x,e[6]=u*p,e[10]=A*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bE,t,RE)}lookAt(t,e,i){const o=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),or.crossVectors(i,Wn),or.lengthSq()===0&&(Math.abs(i.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),or.crossVectors(i,Wn)),or.normalize(),Aa.crossVectors(Wn,or),o[0]=or.x,o[4]=Aa.x,o[8]=Wn.x,o[1]=or.y,o[5]=Aa.y,o[9]=Wn.y,o[2]=or.z,o[6]=Aa.z,o[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],_=i[5],g=i[9],x=i[13],y=i[2],A=i[6],v=i[10],m=i[14],I=i[3],L=i[7],R=i[11],G=i[15],N=o[0],F=o[4],H=o[8],C=o[12],T=o[1],z=o[5],Q=o[9],$=o[13],it=o[2],ut=o[6],nt=o[10],dt=o[14],j=o[3],At=o[7],Lt=o[11],Ot=o[15];return a[0]=c*N+u*T+h*it+f*j,a[4]=c*F+u*z+h*ut+f*At,a[8]=c*H+u*Q+h*nt+f*Lt,a[12]=c*C+u*$+h*dt+f*Ot,a[1]=p*N+_*T+g*it+x*j,a[5]=p*F+_*z+g*ut+x*At,a[9]=p*H+_*Q+g*nt+x*Lt,a[13]=p*C+_*$+g*dt+x*Ot,a[2]=y*N+A*T+v*it+m*j,a[6]=y*F+A*z+v*ut+m*At,a[10]=y*H+A*Q+v*nt+m*Lt,a[14]=y*C+A*$+v*dt+m*Ot,a[3]=I*N+L*T+R*it+G*j,a[7]=I*F+L*z+R*ut+G*At,a[11]=I*H+L*Q+R*nt+G*Lt,a[15]=I*C+L*$+R*dt+G*Ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],c=t[1],u=t[5],h=t[9],f=t[13],p=t[2],_=t[6],g=t[10],x=t[14],y=t[3],A=t[7],v=t[11],m=t[15];return y*(+a*h*_-o*f*_-a*u*g+i*f*g+o*u*x-i*h*x)+A*(+e*h*x-e*f*g+a*c*g-o*c*x+o*f*p-a*h*p)+v*(+e*f*_-e*u*x-a*c*_+i*c*x+a*u*p-i*f*p)+m*(-o*u*p-e*h*_+e*u*g+o*c*_-i*c*g+i*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8],_=t[9],g=t[10],x=t[11],y=t[12],A=t[13],v=t[14],m=t[15],I=_*v*f-A*g*f+A*h*x-u*v*x-_*h*m+u*g*m,L=y*g*f-p*v*f-y*h*x+c*v*x+p*h*m-c*g*m,R=p*A*f-y*_*f+y*u*x-c*A*x-p*u*m+c*_*m,G=y*_*h-p*A*h-y*u*g+c*A*g+p*u*v-c*_*v,N=e*I+i*L+o*R+a*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=I*F,t[1]=(A*g*a-_*v*a-A*o*x+i*v*x+_*o*m-i*g*m)*F,t[2]=(u*v*a-A*h*a+A*o*f-i*v*f-u*o*m+i*h*m)*F,t[3]=(_*h*a-u*g*a-_*o*f+i*g*f+u*o*x-i*h*x)*F,t[4]=L*F,t[5]=(p*v*a-y*g*a+y*o*x-e*v*x-p*o*m+e*g*m)*F,t[6]=(y*h*a-c*v*a-y*o*f+e*v*f+c*o*m-e*h*m)*F,t[7]=(c*g*a-p*h*a+p*o*f-e*g*f-c*o*x+e*h*x)*F,t[8]=R*F,t[9]=(y*_*a-p*A*a-y*i*x+e*A*x+p*i*m-e*_*m)*F,t[10]=(c*A*a-y*u*a+y*i*f-e*A*f-c*i*m+e*u*m)*F,t[11]=(p*u*a-c*_*a-p*i*f+e*_*f+c*i*x-e*u*x)*F,t[12]=G*F,t[13]=(p*A*o-y*_*o+y*i*g-e*A*g-p*i*v+e*_*v)*F,t[14]=(y*u*o-c*A*o-y*i*h+e*A*h+c*i*v-e*u*v)*F,t[15]=(c*_*o-p*u*o+p*i*h-e*_*h-c*i*g+e*u*g)*F,this}scale(t){const e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),a=1-i,c=t.x,u=t.y,h=t.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-o*h,f*h+o*u,0,f*u+o*h,p*u+i,p*h-o*c,0,f*h-o*u,p*h+o*c,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,c){return this.set(1,i,a,0,t,1,c,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,a=e._x,c=e._y,u=e._z,h=e._w,f=a+a,p=c+c,_=u+u,g=a*f,x=a*p,y=a*_,A=c*p,v=c*_,m=u*_,I=h*f,L=h*p,R=h*_,G=i.x,N=i.y,F=i.z;return o[0]=(1-(A+m))*G,o[1]=(x+R)*G,o[2]=(y-L)*G,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(g+m))*N,o[6]=(v+I)*N,o[7]=0,o[8]=(y+L)*F,o[9]=(v-I)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let a=hs.set(o[0],o[1],o[2]).length();const c=hs.set(o[4],o[5],o[6]).length(),u=hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],di.copy(this);const f=1/a,p=1/c,_=1/u;return di.elements[0]*=f,di.elements[1]*=f,di.elements[2]*=f,di.elements[4]*=p,di.elements[5]*=p,di.elements[6]*=p,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,e.setFromRotationMatrix(di),i.x=a,i.y=c,i.z=u,this}makePerspective(t,e,i,o,a,c,u=Wi){const h=this.elements,f=2*a/(e-t),p=2*a/(i-o),_=(e+t)/(e-t),g=(i+o)/(i-o);let x,y;if(u===Wi)x=-(c+a)/(c-a),y=-2*c*a/(c-a);else if(u===il)x=-c/(c-a),y=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,o,a,c,u=Wi){const h=this.elements,f=1/(e-t),p=1/(i-o),_=1/(c-a),g=(e+t)*f,x=(i+o)*p;let y,A;if(u===Wi)y=(c+a)*_,A=-2*_;else if(u===il)y=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=A,h[14]=-y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new U,di=new We,bE=new U(0,0,0),RE=new U(1,1,1),or=new U,Aa=new U,Wn=new U,Gd=new We,Hd=new wo;class wi{constructor(t=0,e=0,i=0,o=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,a=o[0],c=o[4],u=o[8],h=o[1],f=o[5],p=o[9],_=o[2],g=o[6],x=o[10];switch(e){case"XYZ":this._y=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let CE=0;const Vd=new U,fs=new wo,Bi=new We,ba=new U,oo=new U,LE=new U,IE=new wo,kd=new U(1,0,0),Wd=new U(0,1,0),Xd=new U(0,0,1),qd={type:"added"},PE={type:"removed"},ds={type:"childadded",child:null},Oc={type:"childremoved",child:null};class pn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new U,e=new wi,i=new wo,o=new U(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new We},normalMatrix:{value:new ae}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(kd,t)}rotateY(t){return this.rotateOnAxis(Wd,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Vd.copy(t).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kd,t)}translateY(t){return this.translateOnAxis(Wd,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ba.copy(t):ba.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(oo,ba,this.up):Bi.lookAt(ba,oo,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(PE),Oc.child=t,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,LE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,IE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const _=h[f];a(t.shapes,_)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(a(t.materials,this.material[h]));o.material=u}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(t.animations,h))}}if(e){const u=c(t.geometries),h=c(t.materials),f=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),y=c(t.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=o,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}pn.DEFAULT_UP=new U(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new U,zi=new U,Bc=new U,Gi=new U,ps=new U,ms=new U,Yd=new U,zc=new U,Gc=new U,Hc=new U,Vc=new Fe,kc=new Fe,Wc=new Fe;class si{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),pi.subVectors(t,e),o.cross(pi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){pi.subVectors(o,e),zi.subVectors(i,e),Bc.subVectors(t,e);const c=pi.dot(pi),u=pi.dot(zi),h=pi.dot(Bc),f=zi.dot(zi),p=zi.dot(Bc),_=c*f-u*u;if(_===0)return a.set(0,0,0),null;const g=1/_,x=(f*h-u*p)*g,y=(c*p-u*h)*g;return a.set(1-x-y,y,x)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,o,a,c,u,h){return this.getBarycoord(t,e,i,o,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Gi.x),h.addScaledVector(c,Gi.y),h.addScaledVector(u,Gi.z),h)}static getInterpolatedAttribute(t,e,i,o,a,c){return Vc.setScalar(0),kc.setScalar(0),Wc.setScalar(0),Vc.fromBufferAttribute(t,e),kc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Vc,a.x),c.addScaledVector(kc,a.y),c.addScaledVector(Wc,a.z),c}static isFrontFacing(t,e,i,o){return pi.subVectors(i,e),zi.subVectors(t,e),pi.cross(zi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),pi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,a){return si.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,a=this.c;let c,u;ps.subVectors(o,i),ms.subVectors(a,i),zc.subVectors(t,i);const h=ps.dot(zc),f=ms.dot(zc);if(h<=0&&f<=0)return e.copy(i);Gc.subVectors(t,o);const p=ps.dot(Gc),_=ms.dot(Gc);if(p>=0&&_<=p)return e.copy(o);const g=h*_-p*f;if(g<=0&&h>=0&&p<=0)return c=h/(h-p),e.copy(i).addScaledVector(ps,c);Hc.subVectors(t,a);const x=ps.dot(Hc),y=ms.dot(Hc);if(y>=0&&x<=y)return e.copy(a);const A=x*f-h*y;if(A<=0&&f>=0&&y<=0)return u=f/(f-y),e.copy(i).addScaledVector(ms,u);const v=p*y-x*_;if(v<=0&&_-p>=0&&x-y>=0)return Yd.subVectors(a,o),u=(_-p)/(_-p+(x-y)),e.copy(o).addScaledVector(Yd,u);const m=1/(v+A+g);return c=A*m,u=g*m,e.copy(i).addScaledVector(ps,c).addScaledVector(ms,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function Xc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Ae.workingColorSpace){if(t=mE(t,1),e=Ee(e,0,1),i=Ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Xc(c,a,t+1/3),this.g=Xc(c,a,t),this.b=Xc(c,a,t-1/3)}return Ae.toWorkingColorSpace(this,o),this}setStyle(t,e=ri){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){const i=hm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Ae.fromWorkingColorSpace(Mn.copy(this),t),Math.round(Ee(Mn.r*255,0,255))*65536+Math.round(Ee(Mn.g*255,0,255))*256+Math.round(Ee(Mn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,o=Mn.g,a=Mn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const _=c-u;switch(f=p<=.5?_/(c+u):_/(2-c-u),c){case i:h=(o-a)/_+(o<a?6:0);break;case o:h=(a-i)/_+2;break;case a:h=(i-o)/_+4;break}h/=6}return t.h=h,t.s=f,t.l=p,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Mn.copy(this),e),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=ri){Ae.fromWorkingColorSpace(Mn.copy(this),t);const e=Mn.r,i=Mn.g,o=Mn.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+e,ar.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ar),t.getHSL(Ra);const i=Rc(ar.h,Ra.h,e),o=Rc(ar.s,Ra.s,e),a=Rc(ar.l,Ra.l,e);return this.setHSL(i,o,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*o,this.g=a[1]*e+a[4]*i+a[7]*o,this.b=a[2]*e+a[5]*i+a[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new pt;pt.NAMES=hm;let DE=0;class kr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Rs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==au&&(i.blendSrc=this.blendSrc),this.blendDst!==lu&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(e){const a=o(t.textures),c=o(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new U,Ca=new wt;let UE=0;class gi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qu&&(t.usage=this.usage),t}}class fm extends gi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class dm extends gi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class je extends gi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let NE=0;const ni=new We,qc=new pn,_s=new U,Xn=new Ao,ao=new Ao,hn=new U;class Yn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(om(t)?dm:fm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ae().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,i){return ni.makeTranslation(t,e,i),this.applyMatrix4(ni),this}scale(t,e,i){return ni.makeScale(t,e,i),this.applyMatrix4(ni),this}lookAt(t){return qc.lookAt(t),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let o=0,a=t.length;o<a;o++){const c=t[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new je(i,3))}else{const i=Math.min(t.length,e.count);for(let o=0;o<i;o++){const a=t[o];e.setXYZ(o,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const a=e[i];Xn.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const u=e[a];ao.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Xn.min,ao.min),Xn.expandByPoint(hn),hn.addVectors(Xn.max,ao.max),Xn.expandByPoint(hn)):(Xn.expandByPoint(ao.min),Xn.expandByPoint(ao.max))}Xn.getCenter(i);let o=0;for(let a=0,c=t.count;a<c;a++)hn.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(hn));if(e)for(let a=0,c=e.length;a<c;a++){const u=e[a],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)hn.fromBufferAttribute(u,f),h&&(_s.fromBufferAttribute(t,f),hn.add(_s)),o=Math.max(o,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let H=0;H<i.count;H++)u[H]=new U,h[H]=new U;const f=new U,p=new U,_=new U,g=new wt,x=new wt,y=new wt,A=new U,v=new U;function m(H,C,T){f.fromBufferAttribute(i,H),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,T),g.fromBufferAttribute(a,H),x.fromBufferAttribute(a,C),y.fromBufferAttribute(a,T),p.sub(f),_.sub(f),x.sub(g),y.sub(g);const z=1/(x.x*y.y-y.x*x.y);isFinite(z)&&(A.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(z),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(z),u[H].add(A),u[C].add(A),u[T].add(A),h[H].add(v),h[C].add(v),h[T].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let H=0,C=I.length;H<C;++H){const T=I[H],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new U,R=new U,G=new U,N=new U;function F(H){G.fromBufferAttribute(o,H),N.copy(G);const C=u[H];L.copy(C),L.sub(G.multiplyScalar(G.dot(C))).normalize(),R.crossVectors(N,C);const z=R.dot(h[H])<0?-1:1;c.setXYZW(H,L.x,L.y,L.z,z)}for(let H=0,C=I.length;H<C;++H){const T=I[H],z=T.start,Q=T.count;for(let $=z,it=z+Q;$<it;$+=3)F(t.getX($+0)),F(t.getX($+1)),F(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const o=new U,a=new U,c=new U,u=new U,h=new U,f=new U,p=new U,_=new U;if(t)for(let g=0,x=t.count;g<x;g+=3){const y=t.getX(g+0),A=t.getX(g+1),v=t.getX(g+2);o.fromBufferAttribute(e,y),a.fromBufferAttribute(e,A),c.fromBufferAttribute(e,v),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,v),u.add(p),h.add(p),f.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=e.count;g<x;g+=3)o.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,h){const f=u.array,p=u.itemSize,_=u.normalized,g=new f.constructor(h.length*p);let x=0,y=0;for(let A=0,v=h.length;A<v;A++){u.isInterleavedBufferAttribute?x=h[A]*u.data.stride+u.offset:x=h[A]*p;for(let m=0;m<p;m++)g[y++]=f[x++]}return new gi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yn,i=this.index.array,o=this.attributes;for(const u in o){const h=o[u],f=t(h,i);e.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const h=[],f=a[u];for(let p=0,_=f.length;p<_;p++){const g=f[p],x=t(g,i);h.push(x)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const f=i[h];t.data.attributes[h]=f.toJSON(t.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let _=0,g=f.length;_<g;_++){const x=f[_];p.push(x.toJSON(t.data))}p.length>0&&(o[h]=p,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(e))}const a=t.morphAttributes;for(const f in a){const p=[],_=a[f];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zd=new We,Rr=new cm,La=new hl,Kd=new U,Ia=new U,Pa=new U,Da=new U,Yc=new U,Ua=new U,$d=new U,Na=new U;class Rn extends pn{constructor(t=new Yn,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(a&&u){Ua.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const p=u[h],_=a[h];p!==0&&(Yc.fromBufferAttribute(_,t),c?Ua.addScaledVector(Yc,p):Ua.addScaledVector(Yc.sub(e),p))}e.add(Ua)}return e}raycast(t,e){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(a),Rr.copy(t.ray).recast(t.near),!(La.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(La,Kd)===null||Rr.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(Zd.copy(a).invert(),Rr.copy(t.ray).applyMatrix4(Zd),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Rr)))}_computeIntersections(t,e,i){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,A=g.length;y<A;y++){const v=g[y],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let R=I,G=L;R<G;R+=3){const N=u.getX(R),F=u.getX(R+1),H=u.getX(R+2);o=Fa(this,m,t,i,f,p,_,N,F,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(u.count,x.start+x.count);for(let v=y,m=A;v<m;v+=3){const I=u.getX(v),L=u.getX(v+1),R=u.getX(v+2);o=Fa(this,c,t,i,f,p,_,I,L,R),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let y=0,A=g.length;y<A;y++){const v=g[y],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let R=I,G=L;R<G;R+=3){const N=R,F=R+1,H=R+2;o=Fa(this,m,t,i,f,p,_,N,F,H),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const y=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let v=y,m=A;v<m;v+=3){const I=v,L=v+1,R=v+2;o=Fa(this,c,t,i,f,p,_,I,L,R),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}}}function FE(r,t,e,i,o,a,c,u){let h;if(t.side===Fn?h=i.intersectTriangle(c,a,o,!0,u):h=i.intersectTriangle(o,a,c,t.side===dr,u),h===null)return null;Na.copy(u),Na.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Na);return f<e.near||f>e.far?null:{distance:f,point:Na.clone(),object:r}}function Fa(r,t,e,i,o,a,c,u,h,f){r.getVertexPosition(u,Ia),r.getVertexPosition(h,Pa),r.getVertexPosition(f,Da);const p=FE(r,t,e,i,Ia,Pa,Da,$d);if(p){const _=new U;si.getBarycoord($d,Ia,Pa,Da,_),o&&(p.uv=si.getInterpolatedAttribute(o,u,h,f,_,new wt)),a&&(p.uv1=si.getInterpolatedAttribute(a,u,h,f,_,new wt)),c&&(p.normal=si.getInterpolatedAttribute(c,u,h,f,_,new U),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new U,materialIndex:0};si.getNormal(Ia,Pa,Da,g.normal),p.face=g,p.barycoord=_}return p}class Hr extends Yn{constructor(t=1,e=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,i,e,t,c,a,0),y("z","y","x",1,-1,i,e,-t,c,a,1),y("x","z","y",1,1,t,i,e,o,c,2),y("x","z","y",1,-1,t,i,-e,o,c,3),y("x","y","z",1,-1,t,e,i,o,a,4),y("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new je(f,3)),this.setAttribute("normal",new je(p,3)),this.setAttribute("uv",new je(_,2));function y(A,v,m,I,L,R,G,N,F,H,C){const T=R/F,z=G/H,Q=R/2,$=G/2,it=N/2,ut=F+1,nt=H+1;let dt=0,j=0;const At=new U;for(let Lt=0;Lt<nt;Lt++){const Ot=Lt*z-$;for(let ue=0;ue<ut;ue++){const Le=ue*T-Q;At[A]=Le*I,At[v]=Ot*L,At[m]=it,f.push(At.x,At.y,At.z),At[A]=0,At[v]=0,At[m]=N>0?1:-1,p.push(At.x,At.y,At.z),_.push(ue/F),_.push(1-Lt/H),dt+=1}}for(let Lt=0;Lt<H;Lt++)for(let Ot=0;Ot<F;Ot++){const ue=g+Ot+ut*Lt,Le=g+Ot+ut*(Lt+1),at=g+(Ot+1)+ut*(Lt+1),gt=g+(Ot+1)+ut*Lt;h.push(ue,Le,gt),h.push(Le,at,gt),j+=6}u.addGroup(x,j,C),x+=j,g+=dt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const o=r[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function bn(r){const t={};for(let e=0;e<r.length;e++){const i=Bs(r[e]);for(const o in i)t[o]=i[o]}return t}function OE(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function pm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const BE={clone:Bs,merge:bn};var zE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=OE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?e.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[o]={type:"m4",value:c.toArray()}:e.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class mm extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new U,Jd=new wt,Qd=new wt;class qn extends mm{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yu*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,o,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bc*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/h,e-=c.offsetY*i/f,o*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class HE extends pn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new qn(gs,vs,t,e);o.layers=this.layers,this.add(o);const a=new qn(gs,vs,t,e);a.layers=this.layers,this.add(a);const c=new qn(gs,vs,t,e);c.layers=this.layers,this.add(c);const u=new qn(gs,vs,t,e);u.layers=this.layers,this.add(u);const h=new qn(gs,vs,t,e);h.layers=this.layers,this.add(h);const f=new qn(gs,vs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,a,c,u,h]=e;for(const f of e)this.remove(f);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,f,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,a),t.setRenderTarget(i,1,o),t.render(e,c),t.setRenderTarget(i,2,o),t.render(e,u),t.setRenderTarget(i,3,o),t.render(e,h),t.setRenderTarget(i,4,o),t.render(e,f),i.texture.generateMipmaps=A,t.setRenderTarget(i,5,o),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class _m extends Cn{constructor(t,e,i,o,a,c,u,h,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,i,o,a,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class VE extends Gr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new _m(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hr(5,5,5),a=new pr({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:ur});a.uniforms.tEquirect.value=e;const c=new Rn(o,a),u=e.minFilter;return e.minFilter===Br&&(e.minFilter=Ti),new HE(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,o){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,o);t.setRenderTarget(a)}}class Oa extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const A of t.hand.values()){const v=e.getJointPose(A,i),m=this._getHandJoint(f,A);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;f.inputState.pinching&&g>x+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=x-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class WE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class XE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,a=this.stride;o<a;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new U;class rl{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array),a=Ne(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return new gi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new rl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zu extends kr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const lo=new U,Ms=new U,Ss=new U,Es=new wt,co=new wt,gm=new We,Ba=new U,uo=new U,za=new U,jd=new wt,Kc=new wt,tp=new wt;class ep extends pn{constructor(t=new Zu){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new Yn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new XE(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new rl(i,3,0,!1)),xs.setAttribute("uv",new rl(i,2,3,!1))}this.geometry=xs,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),gm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);const i=this.material.rotation;let o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));const c=this.center;Ga(Ba.set(-.5,-.5,0),Ss,c,Ms,o,a),Ga(uo.set(.5,-.5,0),Ss,c,Ms,o,a),Ga(za.set(.5,.5,0),Ss,c,Ms,o,a),jd.set(0,0),Kc.set(1,0),tp.set(1,1);let u=t.ray.intersectTriangle(Ba,uo,za,!1,lo);if(u===null&&(Ga(uo.set(-.5,.5,0),Ss,c,Ms,o,a),Kc.set(0,1),u=t.ray.intersectTriangle(Ba,za,uo,!1,lo),u===null))return;const h=t.ray.origin.distanceTo(lo);h<t.near||h>t.far||e.push({distance:h,point:lo.clone(),uv:si.getInterpolation(lo,Ba,uo,za,jd,Kc,tp,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ga(r,t,e,i,o,a){Es.subVectors(r,e).addScalar(.5).multiply(i),o!==void 0?(co.x=a*Es.x-o*Es.y,co.y=o*Es.x+a*Es.y):co.copy(Es),r.copy(t),r.x+=co.x,r.y+=co.y,r.applyMatrix4(gm)}const $c=new U,qE=new U,YE=new ae;class Pr{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=$c.subVectors(i,e).cross(qE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($c),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||YE.getNormalMatrix(t),o=this.coplanarPoint($c).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new hl,Ha=new U;class oh{constructor(t=new Pr,e=new Pr,i=new Pr,o=new Pr,a=new Pr,c=new Pr){this.planes=[t,e,i,o,a,c]}set(t,e,i,o,a,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,o=t.elements,a=o[0],c=o[1],u=o[2],h=o[3],f=o[4],p=o[5],_=o[6],g=o[7],x=o[8],y=o[9],A=o[10],v=o[11],m=o[12],I=o[13],L=o[14],R=o[15];if(i[0].setComponents(h-a,g-f,v-x,R-m).normalize(),i[1].setComponents(h+a,g+f,v+x,R+m).normalize(),i[2].setComponents(h+c,g+p,v+y,R+I).normalize(),i[3].setComponents(h-c,g-p,v-y,R-I).normalize(),i[4].setComponents(h-u,g-_,v-A,R-L).normalize(),e===Wi)i[5].setComponents(h+u,g+_,v+A,R+L).normalize();else if(e===il)i[5].setComponents(u,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(t){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(Ha.x=o.normal.x>0?t.max.x:t.min.x,Ha.y=o.normal.y>0?t.max.y:t.min.y,Ha.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vm extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sl=new U,ol=new U,np=new We,ho=new cm,Va=new hl,Jc=new U,ip=new U;class ZE extends pn{constructor(t=new Yn,e=new vm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,a=e.count;o<a;o++)sl.fromBufferAttribute(e,o-1),ol.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=sl.distanceTo(ol);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,a=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(o),Va.radius+=a,t.ray.intersectsSphere(Va)===!1)return;np.copy(o).invert(),ho.copy(t.ray).applyMatrix4(np);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),y=Math.min(p.count,c.start+c.count);for(let A=x,v=y-1;A<v;A+=f){const m=p.getX(A),I=p.getX(A+1),L=ka(this,t,ho,h,m,I,A);L&&e.push(L)}if(this.isLineLoop){const A=p.getX(y-1),v=p.getX(x),m=ka(this,t,ho,h,A,v,y-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let A=x,v=y-1;A<v;A+=f){const m=ka(this,t,ho,h,A,A+1,A);m&&e.push(m)}if(this.isLineLoop){const A=ka(this,t,ho,h,y-1,x,y-1);A&&e.push(A)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function ka(r,t,e,i,o,a,c){const u=r.geometry.attributes.position;if(sl.fromBufferAttribute(u,o),ol.fromBufferAttribute(u,a),e.distanceSqToSegment(sl,ol,Jc,ip)>i)return;Jc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Jc);if(!(f<t.near||f>t.far))return{distance:f,point:ip.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const rp=new U,sp=new U;class KE extends ZE{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,a=e.count;o<a;o+=2)rp.fromBufferAttribute(e,o),sp.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+rp.distanceTo(sp);t.setAttribute("lineDistance",new je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xm extends Cn{constructor(t,e,i,o,a,c,u,h,f,p=Cs){if(p!==Cs&&p!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Cs&&(i=zr),i===void 0&&p===Fs&&(i=Ns),super(null,o,a,c,u,h,p,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:_i,this.minFilter=h!==void 0?h:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fl extends Yn{constructor(t=1,e=1,i=1,o=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const f=this;o=Math.floor(o),a=Math.floor(a);const p=[],_=[],g=[],x=[];let y=0;const A=[],v=i/2;let m=0;I(),c===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(x,2));function I(){const R=new U,G=new U;let N=0;const F=(e-t)/i;for(let H=0;H<=a;H++){const C=[],T=H/a,z=T*(e-t)+t;for(let Q=0;Q<=o;Q++){const $=Q/o,it=$*h+u,ut=Math.sin(it),nt=Math.cos(it);G.x=z*ut,G.y=-T*i+v,G.z=z*nt,_.push(G.x,G.y,G.z),R.set(ut,F,nt).normalize(),g.push(R.x,R.y,R.z),x.push($,1-T),C.push(y++)}A.push(C)}for(let H=0;H<o;H++)for(let C=0;C<a;C++){const T=A[C][H],z=A[C+1][H],Q=A[C+1][H+1],$=A[C][H+1];(t>0||C!==0)&&(p.push(T,z,$),N+=3),(e>0||C!==a-1)&&(p.push(z,Q,$),N+=3)}f.addGroup(m,N,0),m+=N}function L(R){const G=y,N=new wt,F=new U;let H=0;const C=R===!0?t:e,T=R===!0?1:-1;for(let Q=1;Q<=o;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),y++;const z=y;for(let Q=0;Q<=o;Q++){const it=Q/o*h+u,ut=Math.cos(it),nt=Math.sin(it);F.x=C*nt,F.y=v*T,F.z=C*ut,_.push(F.x,F.y,F.z),g.push(0,T,0),N.x=ut*.5+.5,N.y=nt*.5*T+.5,x.push(N.x,N.y),y++}for(let Q=0;Q<o;Q++){const $=G+Q,it=z+Q;R===!0?p.push(it,it+1,$):p.push(it+1,it,$),H+=3}f.addGroup(m,H,R===!0?1:2),m+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ah extends fl{constructor(t=1,e=1,i=32,o=1,a=!1,c=0,u=Math.PI*2){super(0,t,e,i,o,a,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(t){return new ah(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lh extends Yn{constructor(t=[],e=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:o};const a=[],c=[];u(o),f(i),p(),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(a.slice(),3)),this.setAttribute("uv",new je(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(I){const L=new U,R=new U,G=new U;for(let N=0;N<e.length;N+=3)x(e[N+0],L),x(e[N+1],R),x(e[N+2],G),h(L,R,G,I)}function h(I,L,R,G){const N=G+1,F=[];for(let H=0;H<=N;H++){F[H]=[];const C=I.clone().lerp(R,H/N),T=L.clone().lerp(R,H/N),z=N-H;for(let Q=0;Q<=z;Q++)Q===0&&H===N?F[H][Q]=C:F[H][Q]=C.clone().lerp(T,Q/z)}for(let H=0;H<N;H++)for(let C=0;C<2*(N-H)-1;C++){const T=Math.floor(C/2);C%2===0?(g(F[H][T+1]),g(F[H+1][T]),g(F[H][T])):(g(F[H][T+1]),g(F[H+1][T+1]),g(F[H+1][T]))}}function f(I){const L=new U;for(let R=0;R<a.length;R+=3)L.x=a[R+0],L.y=a[R+1],L.z=a[R+2],L.normalize().multiplyScalar(I),a[R+0]=L.x,a[R+1]=L.y,a[R+2]=L.z}function p(){const I=new U;for(let L=0;L<a.length;L+=3){I.x=a[L+0],I.y=a[L+1],I.z=a[L+2];const R=v(I)/2/Math.PI+.5,G=m(I)/Math.PI+.5;c.push(R,1-G)}y(),_()}function _(){for(let I=0;I<c.length;I+=6){const L=c[I+0],R=c[I+2],G=c[I+4],N=Math.max(L,R,G),F=Math.min(L,R,G);N>.9&&F<.1&&(L<.2&&(c[I+0]+=1),R<.2&&(c[I+2]+=1),G<.2&&(c[I+4]+=1))}}function g(I){a.push(I.x,I.y,I.z)}function x(I,L){const R=I*3;L.x=t[R+0],L.y=t[R+1],L.z=t[R+2]}function y(){const I=new U,L=new U,R=new U,G=new U,N=new wt,F=new wt,H=new wt;for(let C=0,T=0;C<a.length;C+=9,T+=6){I.set(a[C+0],a[C+1],a[C+2]),L.set(a[C+3],a[C+4],a[C+5]),R.set(a[C+6],a[C+7],a[C+8]),N.set(c[T+0],c[T+1]),F.set(c[T+2],c[T+3]),H.set(c[T+4],c[T+5]),G.copy(I).add(L).add(R).divideScalar(3);const z=v(G);A(N,T+0,I,z),A(F,T+2,L,z),A(H,T+4,R,z)}}function A(I,L,R,G){G<0&&I.x===1&&(c[L]=I.x-1),R.x===0&&R.z===0&&(c[L]=G/2/Math.PI+.5)}function v(I){return Math.atan2(I.z,-I.x)}function m(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.vertices,t.indices,t.radius,t.details)}}class ch extends lh{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ch(t.radius,t.detail)}}class dl extends Yn{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const a=t/2,c=e/2,u=Math.floor(i),h=Math.floor(o),f=u+1,p=h+1,_=t/u,g=e/h,x=[],y=[],A=[],v=[];for(let m=0;m<p;m++){const I=m*g-c;for(let L=0;L<f;L++){const R=L*_-a;y.push(R,-I,0),A.push(0,0,1),v.push(L/u),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let I=0;I<u;I++){const L=I+f*m,R=I+f*(m+1),G=I+1+f*(m+1),N=I+1+f*m;x.push(L,R,N),x.push(R,G,N)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class uh extends Yn{constructor(t=1,e=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const p=[],_=new U,g=new U,x=[],y=[],A=[],v=[];for(let m=0;m<=i;m++){const I=[],L=m/i;let R=0;m===0&&c===0?R=.5/e:m===i&&h===Math.PI&&(R=-.5/e);for(let G=0;G<=e;G++){const N=G/e;_.x=-t*Math.cos(o+N*a)*Math.sin(c+L*u),_.y=t*Math.cos(c+L*u),_.z=t*Math.sin(o+N*a)*Math.sin(c+L*u),y.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),v.push(N+R,1-L),I.push(f++)}p.push(I)}for(let m=0;m<i;m++)for(let I=0;I<e;I++){const L=p[m][I+1],R=p[m][I],G=p[m+1][I],N=p[m+1][I+1];(m!==0||c>0)&&x.push(L,R,N),(m!==i-1||h<Math.PI)&&x.push(R,G,N)}this.setIndex(x),this.setAttribute("position",new je(y,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ys extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rm,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $E extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JE extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const op={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class QE{constructor(t,e,i){const o=this;let a=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){const _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=f.length;_<g;_+=2){const x=f[_],y=f[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null}}}const jE=new QE;class hh{constructor(t){this.manager=t!==void 0?t:jE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hh.DEFAULT_MATERIAL_NAME="__DEFAULT";class ty extends hh{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,c=op.get(t);if(c!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(c),a.manager.itemEnd(t)},0),c;const u=yo("img");function h(){p(),op.add(t,this),e&&e(this),a.manager.itemEnd(t)}function f(_){p(),o&&o(_),a.manager.itemError(t),a.manager.itemEnd(t)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class ap extends hh{constructor(t){super(t)}load(t,e,i,o){const a=new Cn,c=new ty(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},i,o),a}}class Mm extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ey extends Mm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qc=new We,lp=new U,cp=new U;class ny{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;lp.setFromMatrixPosition(t.matrixWorld),e.position.copy(lp),cp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cp),e.updateMatrixWorld(),Qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const up=new We,fo=new U,jc=new U;class iy extends ny{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),i.position.copy(fo),jc.copy(i.position),jc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(jc),i.updateMatrixWorld(),o.makeTranslation(-fo.x,-fo.y,-fo.z),up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}}class ry extends Mm{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new iy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sy extends mm{constructor(t=-1,e=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-t,c=i+t,u=o+e,h=o-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class oy extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ay extends KE{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new Yn;o.setAttribute("position",new je(e,3)),o.setAttribute("color",new je(i,3));const a=new vm({vertexColors:!0,toneMapped:!1});super(o,a),this.type="AxesHelper"}setColors(t,e,i){const o=new pt,a=this.geometry.attributes.color.array;return o.set(t),o.toArray(a,0),o.toArray(a,3),o.set(e),o.toArray(a,6),o.toArray(a,9),o.set(i),o.toArray(a,12),o.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function hp(r,t,e,i){const o=ly(i);switch(e){case Jp:return r*t;case jp:return r*t;case tm:return r*t*2;case em:return r*t/o.components*o.byteLength;case ih:return r*t/o.components*o.byteLength;case nm:return r*t*2/o.components*o.byteLength;case rh:return r*t*2/o.components*o.byteLength;case Qp:return r*t*3/o.components*o.byteLength;case mi:return r*t*4/o.components*o.byteLength;case sh:return r*t*4/o.components*o.byteLength;case $a:case Ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qa:case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Su:case yu:return Math.max(r,16)*Math.max(t,8)/4;case Mu:case Eu:return Math.max(r,8)*Math.max(t,8)/2;case Tu:case wu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Lu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Du:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case tl:case Hu:case Vu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case im:case ku:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wu:case Xu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ly(r){switch(r){case qi:case Zp:return{byteLength:1,components:1};case Eo:case Kp:case To:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case zr:case th:case ki:return{byteLength:4,components:1};case $p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sm(){let r=null,t=!1,e=null,i=null;function o(a,c){e(a,c),i=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function cy(r){const t=new WeakMap;function e(u,h){const f=u.array,p=u.usage,_=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,h,f){const p=h.array,_=h.updateRanges;if(r.bindBuffer(f,u),_.length===0)r.bufferSubData(f,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],A=_[x];A.start<=y.start+y.count+1?y.count=Math.max(y.count,A.start+A.count-y.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const A=_[x];r.bufferSubData(f,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=t.get(u);h&&(r.deleteBuffer(h.buffer),t.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:c}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
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
#endif`,fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vy=`#ifdef USE_BATCHING
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
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ty=`#ifdef USE_BUMPMAP
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dy=`#define PI 3.141592653589793
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
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ny=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
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
#endif`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aT=`PhysicalMaterial material;
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
#endif`,lT=`struct PhysicalMaterial {
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
}`,cT=`
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
#endif`,uT=`#if defined( RE_IndirectDiffuse )
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
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_T=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xT=`#if defined( USE_POINTS_UV )
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
#endif`,MT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ST=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
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
#endif`,AT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PT=`#ifdef USE_NORMALMAP
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
#endif`,DT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZT=`float getShadowMask() {
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
}`,KT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,JT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,jT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#ifdef USE_TRANSMISSION
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uw=`uniform sampler2D t2D;
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`#include <common>
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
}`,_w=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,vw=`#define DISTANCE
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`uniform float scale;
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
}`,Ew=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Tw=`uniform vec3 diffuse;
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
}`,ww=`#define LAMBERT
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
}`,Aw=`#define LAMBERT
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
}`,bw=`#define MATCAP
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
}`,Rw=`#define MATCAP
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
}`,Cw=`#define NORMAL
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
}`,Lw=`#define NORMAL
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
}`,Iw=`#define PHONG
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
}`,Pw=`#define PHONG
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
}`,Dw=`#define STANDARD
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
}`,Uw=`#define STANDARD
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
}`,Nw=`#define TOON
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
}`,Fw=`#define TOON
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
}`,Ow=`uniform float size;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Gw=`uniform vec3 color;
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
}`,Hw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:uy,alphahash_pars_fragment:hy,alphamap_fragment:fy,alphamap_pars_fragment:dy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:_y,aomap_pars_fragment:gy,batching_pars_vertex:vy,batching_vertex:xy,begin_vertex:My,beginnormal_vertex:Sy,bsdfs:Ey,iridescence_fragment:yy,bumpmap_pars_fragment:Ty,clipping_planes_fragment:wy,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ry,color_fragment:Cy,color_pars_fragment:Ly,color_pars_vertex:Iy,color_vertex:Py,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Ny,displacementmap_pars_vertex:Fy,displacementmap_vertex:Oy,emissivemap_fragment:By,emissivemap_pars_fragment:zy,colorspace_fragment:Gy,colorspace_pars_fragment:Hy,envmap_fragment:Vy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:nT,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Zy,fog_fragment:Ky,fog_pars_fragment:$y,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Qy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:tT,lights_pars_begin:eT,lights_toon_fragment:iT,lights_toon_pars_fragment:rT,lights_phong_fragment:sT,lights_phong_pars_fragment:oT,lights_physical_fragment:aT,lights_physical_pars_fragment:lT,lights_fragment_begin:cT,lights_fragment_maps:uT,lights_fragment_end:hT,logdepthbuf_fragment:fT,logdepthbuf_pars_fragment:dT,logdepthbuf_pars_vertex:pT,logdepthbuf_vertex:mT,map_fragment:_T,map_pars_fragment:gT,map_particle_fragment:vT,map_particle_pars_fragment:xT,metalnessmap_fragment:MT,metalnessmap_pars_fragment:ST,morphinstance_vertex:ET,morphcolor_vertex:yT,morphnormal_vertex:TT,morphtarget_pars_vertex:wT,morphtarget_vertex:AT,normal_fragment_begin:bT,normal_fragment_maps:RT,normal_pars_fragment:CT,normal_pars_vertex:LT,normal_vertex:IT,normalmap_pars_fragment:PT,clearcoat_normal_fragment_begin:DT,clearcoat_normal_fragment_maps:UT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:FT,opaque_fragment:OT,packing:BT,premultiplied_alpha_fragment:zT,project_vertex:GT,dithering_fragment:HT,dithering_pars_fragment:VT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:WT,shadowmap_pars_fragment:XT,shadowmap_pars_vertex:qT,shadowmap_vertex:YT,shadowmask_pars_fragment:ZT,skinbase_vertex:KT,skinning_pars_vertex:$T,skinning_vertex:JT,skinnormal_vertex:QT,specularmap_fragment:jT,specularmap_pars_fragment:tw,tonemapping_fragment:ew,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:rw,uv_pars_fragment:sw,uv_pars_vertex:ow,uv_vertex:aw,worldpos_vertex:lw,background_vert:cw,background_frag:uw,backgroundCube_vert:hw,backgroundCube_frag:fw,cube_vert:dw,cube_frag:pw,depth_vert:mw,depth_frag:_w,distanceRGBA_vert:gw,distanceRGBA_frag:vw,equirect_vert:xw,equirect_frag:Mw,linedashed_vert:Sw,linedashed_frag:Ew,meshbasic_vert:yw,meshbasic_frag:Tw,meshlambert_vert:ww,meshlambert_frag:Aw,meshmatcap_vert:bw,meshmatcap_frag:Rw,meshnormal_vert:Cw,meshnormal_frag:Lw,meshphong_vert:Iw,meshphong_frag:Pw,meshphysical_vert:Dw,meshphysical_frag:Uw,meshtoon_vert:Nw,meshtoon_frag:Fw,points_vert:Ow,points_frag:Bw,shadow_vert:zw,shadow_frag:Gw,sprite_vert:Hw,sprite_frag:Vw},Et={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Ei={basic:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new pt(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:bn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:bn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:bn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new pt(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:bn([Et.points,Et.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:bn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:bn([Et.common,Et.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:bn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:bn([Et.sprite,Et.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:bn([Et.common,Et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:bn([Et.lights,Et.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ei.physical={uniforms:bn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Wa={r:0,b:0,g:0},Lr=new wi,kw=new We;function Ww(r,t,e,i,o,a,c){const u=new pt(0);let h=a===!0?0:1,f,p,_=null,g=0,x=null;function y(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?e:t).get(R)),R}function A(L){let R=!1;const G=y(L);G===null?m(u,h):G&&G.isColor&&(m(G,1),R=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(L,R){const G=y(R);G&&(G.isCubeTexture||G.mapping===ul)?(p===void 0&&(p=new Rn(new Hr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Bs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Lr.copy(R.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),p.material.uniforms.envMap.value=G,p.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(Lr)),p.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Ue,(_!==G||g!==G.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):G&&G.isTexture&&(f===void 0&&(f=new Rn(new dl(2,2),new pr({name:"BackgroundMaterial",uniforms:Bs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=G,f.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,f.material.toneMapped=Ae.getTransfer(G.colorSpace)!==Ue,G.matrixAutoUpdate===!0&&G.updateMatrix(),f.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||g!==G.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,_=G,g=G.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function m(L,R){L.getRGB(Wa,pm(r)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,R,c)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,R=1){u.set(L),h=R,m(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,m(u,h)},render:A,addToRenderList:v,dispose:I}}function Xw(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},o=g(null);let a=o,c=!1;function u(T,z,Q,$,it){let ut=!1;const nt=_($,Q,z);a!==nt&&(a=nt,f(a.object)),ut=x(T,$,Q,it),ut&&y(T,$,Q,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(ut||c)&&(c=!1,R(T,z,Q,$),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function h(){return r.createVertexArray()}function f(T){return r.bindVertexArray(T)}function p(T){return r.deleteVertexArray(T)}function _(T,z,Q){const $=Q.wireframe===!0;let it=i[T.id];it===void 0&&(it={},i[T.id]=it);let ut=it[z.id];ut===void 0&&(ut={},it[z.id]=ut);let nt=ut[$];return nt===void 0&&(nt=g(h()),ut[$]=nt),nt}function g(T){const z=[],Q=[],$=[];for(let it=0;it<e;it++)z[it]=0,Q[it]=0,$[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,z,Q,$){const it=a.attributes,ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){const Lt=it[j];let Ot=ut[j];if(Ot===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Ot=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Ot=T.instanceColor)),Lt===void 0||Lt.attribute!==Ot||Ot&&Lt.data!==Ot.data)return!0;nt++}return a.attributesNum!==nt||a.index!==$}function y(T,z,Q,$){const it={},ut=z.attributes;let nt=0;const dt=Q.getAttributes();for(const j in dt)if(dt[j].location>=0){let Lt=ut[j];Lt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Lt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Lt=T.instanceColor));const Ot={};Ot.attribute=Lt,Lt&&Lt.data&&(Ot.data=Lt.data),it[j]=Ot,nt++}a.attributes=it,a.attributesNum=nt,a.index=$}function A(){const T=a.newAttributes;for(let z=0,Q=T.length;z<Q;z++)T[z]=0}function v(T){m(T,0)}function m(T,z){const Q=a.newAttributes,$=a.enabledAttributes,it=a.attributeDivisors;Q[T]=1,$[T]===0&&(r.enableVertexAttribArray(T),$[T]=1),it[T]!==z&&(r.vertexAttribDivisor(T,z),it[T]=z)}function I(){const T=a.newAttributes,z=a.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==T[Q]&&(r.disableVertexAttribArray(Q),z[Q]=0)}function L(T,z,Q,$,it,ut,nt){nt===!0?r.vertexAttribIPointer(T,z,Q,it,ut):r.vertexAttribPointer(T,z,Q,$,it,ut)}function R(T,z,Q,$){A();const it=$.attributes,ut=Q.getAttributes(),nt=z.defaultAttributeValues;for(const dt in ut){const j=ut[dt];if(j.location>=0){let At=it[dt];if(At===void 0&&(dt==="instanceMatrix"&&T.instanceMatrix&&(At=T.instanceMatrix),dt==="instanceColor"&&T.instanceColor&&(At=T.instanceColor)),At!==void 0){const Lt=At.normalized,Ot=At.itemSize,ue=t.get(At);if(ue===void 0)continue;const Le=ue.buffer,at=ue.type,gt=ue.bytesPerElement,Bt=at===r.INT||at===r.UNSIGNED_INT||At.gpuType===th;if(At.isInterleavedBufferAttribute){const bt=At.data,Xt=bt.stride,de=At.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<j.locationSize;Qt++)m(j.location+Qt,bt.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<j.locationSize;Qt++)v(j.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Qt=0;Qt<j.locationSize;Qt++)L(j.location+Qt,Ot/j.locationSize,at,Lt,Xt*gt,(de+Ot/j.locationSize*Qt)*gt,Bt)}else{if(At.isInstancedBufferAttribute){for(let bt=0;bt<j.locationSize;bt++)m(j.location+bt,At.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let bt=0;bt<j.locationSize;bt++)v(j.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let bt=0;bt<j.locationSize;bt++)L(j.location+bt,Ot/j.locationSize,at,Lt,Ot*gt,Ot/j.locationSize*bt*gt,Bt)}}else if(nt!==void 0){const Lt=nt[dt];if(Lt!==void 0)switch(Lt.length){case 2:r.vertexAttrib2fv(j.location,Lt);break;case 3:r.vertexAttrib3fv(j.location,Lt);break;case 4:r.vertexAttrib4fv(j.location,Lt);break;default:r.vertexAttrib1fv(j.location,Lt)}}}}I()}function G(){H();for(const T in i){const z=i[T];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const z=i[T.id];for(const Q in z){const $=z[Q];for(const it in $)p($[it].object),delete $[it];delete z[Q]}delete i[T.id]}function F(T){for(const z in i){const Q=i[z];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const it in $)p($[it].object),delete $[it];delete Q[T.id]}}function H(){C(),c=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:H,resetDefaultState:C,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:v,disableUnusedAttributes:I}}function qw(r,t,e){let i;function o(f){i=f}function a(f,p){r.drawArrays(i,f,p),e.update(p,i,1)}function c(f,p,_){_!==0&&(r.drawArraysInstanced(i,f,p,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];e.update(x,i,1)}function h(f,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<f.length;y++)c(f[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,_);let y=0;for(let A=0;A<_;A++)y+=p[A]*g[A];e.update(y,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yw(r,t,e,i){let o;function a(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==mi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const H=F===To&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==qi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!H)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:G,maxSamples:N}}function Zw(r){const t=this;let e=null,i=0,o=!1,a=!1;const c=new Pr,u=new ae,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||o;return o=g,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,A=_.clipIntersection,v=_.clipShadows,m=r.get(_);if(!o||y===null||y.length===0||a&&!v)a?p(null):f();else{const I=a?0:i,L=I*4;let R=m.clippingState||null;h.value=R,R=p(y,g,L,x);for(let G=0;G!==L;++G)R[G]=e[G];m.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,g,x,y){const A=_!==null?_.length:0;let v=null;if(A!==0){if(v=h.value,y!==!0||v===null){const m=x+A*4,I=g.matrixWorldInverse;u.getNormalMatrix(I),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,R=x;L!==A;++L,R+=4)c.copy(_[L]).applyMatrix4(I,u),c.normal.toArray(v,R),v[R+3]=c.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}function Kw(r){let t=new WeakMap;function e(c,u){return u===_u?c.mapping=Ds:u===gu&&(c.mapping=Us),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===_u||u===gu)if(t.has(c)){const h=t.get(c).texture;return e(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new VE(h.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",o),e(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const As=4,fp=[.125,.215,.35,.446,.526,.582],Nr=20,tu=new sy,dp=new pt;let eu=null,nu=0,iu=0,ru=!1;const Dr=(1+Math.sqrt(5))/2,Ts=1/Dr,pp=[new U(-Dr,Ts,0),new U(Dr,Ts,0),new U(-Ts,0,Dr),new U(Ts,0,Dr),new U(0,Dr,-Ts),new U(0,Dr,Ts),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class mp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eu,nu,iu),this._renderer.xr.enabled=ru,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:To,format:mi,colorSpace:Os,depthBuffer:!1},o=_p(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$w(a)),this._blurMaterial=Jw(a,t,e)}return o}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,tu)}_sceneToCubeUV(t,e,i,o){const u=new qn(90,1,e,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(dp),p.toneMapping=hr,p.autoClear=!1;const x=new Si({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new Rn(new Hr,x);let A=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,A=!0):(x.color.copy(dp),A=!0);for(let m=0;m<6;m++){const I=m%3;I===0?(u.up.set(0,h[m],0),u.lookAt(f[m],0,0)):I===1?(u.up.set(0,0,h[m]),u.lookAt(0,f[m],0)):(u.up.set(0,h[m],0),u.lookAt(0,0,f[m]));const L=this._cubeSize;Xa(o,I*L,m>2?L:0,L,L),p.setRenderTarget(o),A&&p.render(y,u),p.render(t,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=_,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ds||t.mapping===Us;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new Rn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const h=this._cubeSize;Xa(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(c,tu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=pp[(o-a-1)%pp.length];this._blur(t,a-1,a,c,u)}e.autoClear=i}_blur(t,e,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,o,"latitudinal",a),this._halfBlur(c,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new Rn(this._lodPlanes[o],f),g=f.uniforms,x=this._sizeLods[i]-1,y=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Nr-1),A=a/y,v=isFinite(a)?1+Math.floor(p*A):Nr;v>Nr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Nr}`);const m=[];let I=0;for(let F=0;F<Nr;++F){const H=F/A,C=Math.exp(-H*H/2);m.push(C),F===0?I+=C:F<v&&(I+=2*C)}for(let F=0;F<m.length;F++)m[F]=m[F]/I;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=y,g.mipInt.value=L-i;const R=this._sizeLods[o],G=3*R*(o>L-As?o-L+As:0),N=4*(this._cubeSize-R);Xa(e,G,N,3*R,2*R),h.setRenderTarget(e),h.render(_,tu)}}function $w(r){const t=[],e=[],i=[];let o=r;const a=r-As+1+fp.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let h=1/u;c>r-As?h=fp[c-r+As-1]:c===0&&(h=0),i.push(h);const f=1/(u-2),p=-f,_=1+f,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,A=3,v=2,m=1,I=new Float32Array(A*y*x),L=new Float32Array(v*y*x),R=new Float32Array(m*y*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,H=N>2?0:-1,C=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];I.set(C,A*y*N),L.set(g,v*y*N);const T=[N,N,N,N,N,N];R.set(T,m*y*N)}const G=new Yn;G.setAttribute("position",new gi(I,A)),G.setAttribute("uv",new gi(L,v)),G.setAttribute("faceIndex",new gi(R,m)),t.push(G),o>As&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _p(r,t,e){const i=new Gr(r,t,e);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(r,t,e,i,o){r.viewport.set(t,e,i,o),r.scissor.set(t,e,i,o)}function Jw(r,t,e){const i=new Float32Array(Nr),o=new U(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function gp(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function vp(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

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
	`}function Qw(r){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const h=u.mapping,f=h===_u||h===gu,p=h===Ds||h===Us;if(f||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new mp(r)),_=f?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return f&&x&&x.height>0||p&&x&&o(x)?(e===null&&(e=new mp(r)),_=f?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",a),_.texture):null}}}return u}function o(u){let h=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&h++;return h===f}function a(u){const h=u.target;h.removeEventListener("dispose",a);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function jw(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&ws("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function tA(r,t,e,i){const o={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete o[g.id];const x=a.get(g);x&&(t.remove(x),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,e.memory.geometries++),g}function h(_){const g=_.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function f(_){const g=[],x=_.index,y=_.attributes.position;let A=0;if(x!==null){const I=x.array;A=x.version;for(let L=0,R=I.length;L<R;L+=3){const G=I[L+0],N=I[L+1],F=I[L+2];g.push(G,N,N,F,F,G)}}else if(y!==void 0){const I=y.array;A=y.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const G=L+0,N=L+1,F=L+2;g.push(G,N,N,F,F,G)}}else return;const v=new(om(g)?dm:fm)(g,1);v.version=A;const m=a.get(_);m&&t.remove(m),a.set(_,v)}function p(_){const g=a.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:u,update:h,getWireframeAttribute:p}}function eA(r,t,e){let i;function o(g){i=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function h(g,x){r.drawElements(i,x,a,g*c),e.update(x,i,1)}function f(g,x,y){y!==0&&(r.drawElementsInstanced(i,x,a,g*c,y),e.update(x,i,y))}function p(g,x,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,g,0,y);let v=0;for(let m=0;m<y;m++)v+=x[m];e.update(v,i,1)}function _(g,x,y,A){if(y===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)f(g[m]/c,x[m],A[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,a,g,0,A,0,y);let m=0;for(let I=0;I<y;I++)m+=x[I]*A[I];e.update(m,i,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function nA(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(a/3);break;case r.LINES:e.lines+=u*(a/2);break;case r.LINE_STRIP:e.lines+=u*(a-1);break;case r.LINE_LOOP:e.lines+=u*a;break;case r.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function iA(r,t,e){const i=new WeakMap,o=new Fe;function a(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let R=0;y===!0&&(R=1),A===!0&&(R=2),v===!0&&(R=3);let G=u.attributes.position.count*R,N=1;G>t.maxTextureSize&&(N=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*N*4*_),H=new lm(F,G,N,_);H.type=ki,H.needsUpdate=!0;const C=R*4;for(let z=0;z<_;z++){const Q=m[z],$=I[z],it=L[z],ut=G*N*4*z;for(let nt=0;nt<Q.count;nt++){const dt=nt*C;y===!0&&(o.fromBufferAttribute(Q,nt),F[ut+dt+0]=o.x,F[ut+dt+1]=o.y,F[ut+dt+2]=o.z,F[ut+dt+3]=0),A===!0&&(o.fromBufferAttribute($,nt),F[ut+dt+4]=o.x,F[ut+dt+5]=o.y,F[ut+dt+6]=o.z,F[ut+dt+7]=0),v===!0&&(o.fromBufferAttribute(it,nt),F[ut+dt+8]=o.x,F[ut+dt+9]=o.y,F[ut+dt+10]=o.z,F[ut+dt+11]=it.itemSize===4?o.w:1)}}g={count:_,texture:H,size:new wt(G,N)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let y=0;for(let v=0;v<f.length;v++)y+=f[v];const A=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function rA(r,t,e,i){let o=new WeakMap;function a(h){const f=i.render.frame,p=h.geometry,_=t.get(h,p);if(o.get(_)!==f&&(t.update(_),o.set(_,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==f&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;o.get(g)!==f&&(g.update(),o.set(g,f))}return _}function c(){o=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:c}}const Em=new Cn,xp=new xm(1,1),ym=new lm,Tm=new wE,wm=new _m,Mp=[],Sp=[],Ep=new Float32Array(16),yp=new Float32Array(9),Tp=new Float32Array(4);function Gs(r,t,e){const i=r[0];if(i<=0||i>0)return r;const o=t*e;let a=Mp[o];if(a===void 0&&(a=new Float32Array(o),Mp[o]=a),t!==0){i.toArray(a,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(a,u)}return a}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function pl(r,t){let e=Sp[t];e===void 0&&(e=new Int32Array(t),Sp[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function sA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function oA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function aA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function lA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function cA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Tp.set(i),r.uniformMatrix2fv(this.addr,!1,Tp),on(e,i)}}function uA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;yp.set(i),r.uniformMatrix3fv(this.addr,!1,yp),on(e,i)}}function hA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Ep.set(i),r.uniformMatrix4fv(this.addr,!1,Ep),on(e,i)}}function fA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function pA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function mA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function _A(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function gA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function vA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function xA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function MA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(xp.compareFunction=sm,a=xp):a=Em,e.setTexture2D(t||a,o)}function SA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Tm,o)}function EA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||wm,o)}function yA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||ym,o)}function TA(r){switch(r){case 5126:return sA;case 35664:return oA;case 35665:return aA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return hA;case 5124:case 35670:return fA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return _A;case 36294:return gA;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return yA}}function wA(r,t){r.uniform1fv(this.addr,t)}function AA(r,t){const e=Gs(t,this.size,2);r.uniform2fv(this.addr,e)}function bA(r,t){const e=Gs(t,this.size,3);r.uniform3fv(this.addr,e)}function RA(r,t){const e=Gs(t,this.size,4);r.uniform4fv(this.addr,e)}function CA(r,t){const e=Gs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function LA(r,t){const e=Gs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function IA(r,t){const e=Gs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function PA(r,t){r.uniform1iv(this.addr,t)}function DA(r,t){r.uniform2iv(this.addr,t)}function UA(r,t){r.uniform3iv(this.addr,t)}function NA(r,t){r.uniform4iv(this.addr,t)}function FA(r,t){r.uniform1uiv(this.addr,t)}function OA(r,t){r.uniform2uiv(this.addr,t)}function BA(r,t){r.uniform3uiv(this.addr,t)}function zA(r,t){r.uniform4uiv(this.addr,t)}function GA(r,t,e){const i=this.cache,o=t.length,a=pl(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture2D(t[c]||Em,a[c])}function HA(r,t,e){const i=this.cache,o=t.length,a=pl(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture3D(t[c]||Tm,a[c])}function VA(r,t,e){const i=this.cache,o=t.length,a=pl(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTextureCube(t[c]||wm,a[c])}function kA(r,t,e){const i=this.cache,o=t.length,a=pl(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture2DArray(t[c]||ym,a[c])}function WA(r){switch(r){case 5126:return wA;case 35664:return AA;case 35665:return bA;case 35666:return RA;case 35674:return CA;case 35675:return LA;case 35676:return IA;case 5124:case 35670:return PA;case 35667:case 35671:return DA;case 35668:case 35672:return UA;case 35669:case 35673:return NA;case 5125:return FA;case 36294:return OA;case 36295:return BA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return kA}}class XA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=TA(e.type)}}class qA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WA(e.type)}}class YA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(t,e[u.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function wp(r,t){r.seq.push(t),r.map[t.id]=t}function ZA(r,t,e){const i=r.name,o=i.length;for(su.lastIndex=0;;){const a=su.exec(i),c=su.lastIndex;let u=a[1];const h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===o){wp(e,f===void 0?new XA(u,r,t):new qA(u,r,t));break}else{let _=e.map[u];_===void 0&&(_=new YA(u),wp(e,_)),e=_}}}class el{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);ZA(a,c,this)}}setValue(t,e,i,o){const a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,c=e.length;a!==c;++a){const u=e[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,a=t.length;o!==a;++o){const c=t[o];c.id in e&&i.push(c)}return i}}function Ap(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const KA=37297;let $A=0;function JA(r,t){const e=r.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const bp=new ae;function QA(r){Ae._getMatrix(bp,Ae.workingColorSpace,r);const t=`mat3( ${bp.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(r)){case nl:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rp(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+JA(r.getShaderSource(t),c)}else return o}function jA(r,t){const e=QA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tb(r,t){let e;switch(t){case JS:e="Linear";break;case QS:e="Reinhard";break;case jS:e="Cineon";break;case tE:e="ACESFilmic";break;case nE:e="AgX";break;case iE:e="Neutral";break;case eE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qa=new U;function eb(){Ae.getLuminanceCoefficients(qa);const r=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function ib(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function rb(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(t,o),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),e[c]={type:a.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function xo(r){return r!==""}function Cp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(r){return r.replace(sb,ab)}const ob=new Map;function ab(r,t){let e=ce[t];if(e===void 0){const i=ob.get(t);if(i!==void 0)e=ce[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ku(e)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ip(r){return r.replace(lb,cb)}function cb(r,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Pp(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function ub(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===LS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function hb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function db(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qp:t="ENVMAP_BLENDING_MULTIPLY";break;case KS:t="ENVMAP_BLENDING_MIX";break;case $S:t="ENVMAP_BLENDING_ADD";break}return t}function pb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mb(r,t,e,i){const o=r.getContext(),a=e.defines;let c=e.vertexShader,u=e.fragmentShader;const h=ub(e),f=hb(e),p=fb(e),_=db(e),g=pb(e),x=nb(e),y=ib(a),A=o.createProgram();let v,m,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(xo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(v=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[Pp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hr?"#define TONE_MAPPING":"",e.toneMapping!==hr?ce.tonemapping_pars_fragment:"",e.toneMapping!==hr?tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,jA("linearToOutputTexel",e.outputColorSpace),eb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),c=Ku(c),c=Cp(c,e),c=Lp(c,e),u=Ku(u),u=Cp(u,e),u=Lp(u,e),c=Ip(c),u=Ip(u),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=I+v+c,R=I+m+u,G=Ap(o,o.VERTEX_SHADER,L),N=Ap(o,o.FRAGMENT_SHADER,R);o.attachShader(A,G),o.attachShader(A,N),e.index0AttributeName!==void 0?o.bindAttribLocation(A,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(z){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(A).trim(),$=o.getShaderInfoLog(G).trim(),it=o.getShaderInfoLog(N).trim();let ut=!0,nt=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,G,N);else{const dt=Rp(o,G,"vertex"),j=Rp(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+dt+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||it==="")&&(nt=!1);nt&&(z.diagnostics={runnable:ut,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:it,prefix:m}})}o.deleteShader(G),o.deleteShader(N),H=new el(o,A),C=rb(o,A)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(A,KA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$A++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=N,this}let _b=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vb(t),e.set(t,i)),i}}class vb{constructor(t){this.id=_b++,this.code=t,this.usedTimes=0}}function xb(r,t,e,i,o,a,c){const u=new um,h=new gb,f=new Set,p=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let x=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return f.add(C),C===0?"uv":`uv${C}`}function v(C,T,z,Q,$){const it=Q.fog,ut=$.geometry,nt=C.isMeshStandardMaterial?Q.environment:null,dt=(C.isMeshStandardMaterial?e:t).get(C.envMap||nt),j=dt&&dt.mapping===ul?dt.image.height:null,At=y[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const Lt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ot=Lt!==void 0?Lt.length:0;let ue=0;ut.morphAttributes.position!==void 0&&(ue=1),ut.morphAttributes.normal!==void 0&&(ue=2),ut.morphAttributes.color!==void 0&&(ue=3);let Le,at,gt,Bt;if(At){const be=Ei[At];Le=be.vertexShader,at=be.fragmentShader}else Le=C.vertexShader,at=C.fragmentShader,h.update(C),gt=h.getVertexShaderID(C),Bt=h.getFragmentShaderID(C);const bt=r.getRenderTarget(),Xt=r.state.buffers.depth.getReversed(),de=$.isInstancedMesh===!0,Qt=$.isBatchedMesh===!0,Ge=!!C.map,Pe=!!C.matcap,pe=!!dt,O=!!C.aoMap,an=!!C.lightMap,ge=!!C.bumpMap,ee=!!C.normalMap,kt=!!C.displacementMap,Oe=!!C.emissiveMap,Ht=!!C.metalnessMap,P=!!C.roughnessMap,S=C.anisotropy>0,Y=C.clearcoat>0,ct=C.dispersion>0,ht=C.iridescence>0,st=C.sheen>0,Gt=C.transmission>0,Mt=S&&!!C.anisotropyMap,It=Y&&!!C.clearcoatMap,me=Y&&!!C.clearcoatNormalMap,_t=Y&&!!C.clearcoatRoughnessMap,Dt=ht&&!!C.iridescenceMap,Yt=ht&&!!C.iridescenceThicknessMap,Jt=st&&!!C.sheenColorMap,Ut=st&&!!C.sheenRoughnessMap,fe=!!C.specularMap,ne=!!C.specularColorMap,De=!!C.specularIntensityMap,V=Gt&&!!C.transmissionMap,yt=Gt&&!!C.thicknessMap,tt=!!C.gradientMap,lt=!!C.alphaMap,Ct=C.alphaTest>0,Rt=!!C.alphaHash,re=!!C.extensions;let Xe=hr;C.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const tn={shaderID:At,shaderType:C.type,shaderName:C.name,vertexShader:Le,fragmentShader:at,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:Bt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Qt,batchingColor:Qt&&$._colorsTexture!==null,instancing:de,instancingColor:de&&$.instanceColor!==null,instancingMorph:de&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:Ge,matcap:Pe,envMap:pe,envMapMode:pe&&dt.mapping,envMapCubeUVHeight:j,aoMap:O,lightMap:an,bumpMap:ge,normalMap:ee,displacementMap:g&&kt,emissiveMap:Oe,normalMapObjectSpace:ee&&C.normalMapType===aE,normalMapTangentSpace:ee&&C.normalMapType===rm,metalnessMap:Ht,roughnessMap:P,anisotropy:S,anisotropyMap:Mt,clearcoat:Y,clearcoatMap:It,clearcoatNormalMap:me,clearcoatRoughnessMap:_t,dispersion:ct,iridescence:ht,iridescenceMap:Dt,iridescenceThicknessMap:Yt,sheen:st,sheenColorMap:Jt,sheenRoughnessMap:Ut,specularMap:fe,specularColorMap:ne,specularIntensityMap:De,transmission:Gt,transmissionMap:V,thicknessMap:yt,gradientMap:tt,opaque:C.transparent===!1&&C.blending===Rs&&C.alphaToCoverage===!1,alphaMap:lt,alphaTest:Ct,alphaHash:Rt,combine:C.combine,mapUv:Ge&&A(C.map.channel),aoMapUv:O&&A(C.aoMap.channel),lightMapUv:an&&A(C.lightMap.channel),bumpMapUv:ge&&A(C.bumpMap.channel),normalMapUv:ee&&A(C.normalMap.channel),displacementMapUv:kt&&A(C.displacementMap.channel),emissiveMapUv:Oe&&A(C.emissiveMap.channel),metalnessMapUv:Ht&&A(C.metalnessMap.channel),roughnessMapUv:P&&A(C.roughnessMap.channel),anisotropyMapUv:Mt&&A(C.anisotropyMap.channel),clearcoatMapUv:It&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&A(C.sheenRoughnessMap.channel),specularMapUv:fe&&A(C.specularMap.channel),specularColorMapUv:ne&&A(C.specularColorMap.channel),specularIntensityMapUv:De&&A(C.specularIntensityMap.channel),transmissionMapUv:V&&A(C.transmissionMap.channel),thicknessMapUv:yt&&A(C.thicknessMap.channel),alphaMapUv:lt&&A(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ee||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ut.attributes.uv&&(Ge||lt),fog:!!it,useFog:C.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Xt,skinning:$.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ge&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Ue,decodeVideoTextureEmissive:Oe&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Ue,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:re&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&C.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)T.push(z),T.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(I(T,C),L(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function I(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function L(C,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),C.push(u.mask)}function R(C){const T=y[C.type];let z;if(T){const Q=Ei[T];z=BE.clone(Q.uniforms)}else z=C.uniforms;return z}function G(C,T){let z;for(let Q=0,$=p.length;Q<$;Q++){const it=p[Q];if(it.cacheKey===T){z=it,++z.usedTimes;break}}return z===void 0&&(z=new mb(r,T,C,a),p.push(z)),z}function N(C){if(--C.usedTimes===0){const T=p.indexOf(C);p[T]=p[p.length-1],p.pop(),C.destroy()}}function F(C){h.remove(C)}function H(){h.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:G,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:H}}function Mb(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function o(c,u,h){r.get(c)[u]=h}function a(){r=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:a}}function Sb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Dp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Up(){const r=[];let t=0;const e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function c(_,g,x,y,A,v){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:A,group:v},r[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=A,m.group=v),t++,m}function u(_,g,x,y,A,v){const m=c(_,g,x,y,A,v);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):e.push(m)}function h(_,g,x,y,A,v){const m=c(_,g,x,y,A,v);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):e.unshift(m)}function f(_,g){e.length>1&&e.sort(_||Sb),i.length>1&&i.sort(g||Dp),o.length>1&&o.sort(g||Dp)}function p(){for(let _=t,g=r.length;_<g;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:u,unshift:h,finish:p,sort:f}}function Eb(){let r=new WeakMap;function t(i,o){const a=r.get(i);let c;return a===void 0?(c=new Up,r.set(i,[c])):o>=a.length?(c=new Up,a.push(c)):c=a[o],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function yb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new pt};break;case"SpotLight":e={position:new U,direction:new U,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Tb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let wb=0;function Ab(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bb(r){const t=new yb,e=Tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new U);const o=new U,a=new We,c=new We;function u(f){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,y=0,A=0,v=0,m=0,I=0,L=0,R=0,G=0,N=0,F=0;f.sort(Ab);for(let C=0,T=f.length;C<T;C++){const z=f[C],Q=z.color,$=z.intensity,it=z.distance,ut=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(z.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(z.sh.coefficients[nt],$);F++}else if(z.isDirectionalLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=ut,i.directionalShadowMatrix[x]=z.shadow.matrix,I++}i.directional[x]=nt,x++}else if(z.isSpotLight){const nt=t.get(z);nt.position.setFromMatrixPosition(z.matrixWorld),nt.color.copy(Q).multiplyScalar($),nt.distance=it,nt.coneCos=Math.cos(z.angle),nt.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),nt.decay=z.decay,i.spot[A]=nt;const dt=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,dt.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[A]=dt.matrix,z.castShadow){const j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,i.spotShadow[A]=j,i.spotShadowMap[A]=ut,R++}A++}else if(z.isRectAreaLight){const nt=t.get(z);nt.color.copy(Q).multiplyScalar($),nt.halfWidth.set(z.width*.5,0,0),nt.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=nt,v++}else if(z.isPointLight){const nt=t.get(z);if(nt.color.copy(z.color).multiplyScalar(z.intensity),nt.distance=z.distance,nt.decay=z.decay,z.castShadow){const dt=z.shadow,j=e.get(z);j.shadowIntensity=dt.intensity,j.shadowBias=dt.bias,j.shadowNormalBias=dt.normalBias,j.shadowRadius=dt.radius,j.shadowMapSize=dt.mapSize,j.shadowCameraNear=dt.camera.near,j.shadowCameraFar=dt.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=ut,i.pointShadowMatrix[y]=z.shadow.matrix,L++}i.point[y]=nt,y++}else if(z.isHemisphereLight){const nt=t.get(z);nt.skyColor.copy(z.color).multiplyScalar($),nt.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[m]=nt,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==x||H.pointLength!==y||H.spotLength!==A||H.rectAreaLength!==v||H.hemiLength!==m||H.numDirectionalShadows!==I||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==G||H.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=A,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=R+G-N,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,H.directionalLength=x,H.pointLength=y,H.spotLength=A,H.rectAreaLength=v,H.hemiLength=m,H.numDirectionalShadows=I,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=G,H.numLightProbes=F,i.version=wb++)}function h(f,p){let _=0,g=0,x=0,y=0,A=0;const v=p.matrixWorldInverse;for(let m=0,I=f.length;m<I;m++){const L=f[m];if(L.isDirectionalLight){const R=i.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(v),_++}else if(L.isSpotLight){const R=i.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),c.identity(),a.copy(L.matrixWorld),a.premultiply(v),c.extractRotation(a),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const R=i.point[g];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const R=i.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(v),A++}}}return{setup:u,setupView:h,state:i}}function Np(r){const t=new bb(r),e=[],i=[];function o(p){f.camera=p,e.length=0,i.length=0}function a(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function h(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function Rb(r){let t=new WeakMap;function e(o,a=0){const c=t.get(o);let u;return c===void 0?(u=new Np(r),t.set(o,[u])):a>=c.length?(u=new Np(r),c.push(u)):u=c[a],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Ib(r,t,e){let i=new oh;const o=new wt,a=new wt,c=new Fe,u=new $E({depthPacking:oE}),h=new JE,f={},p=e.maxTextureSize,_={[dr]:Fn,[Fn]:dr,[Vi]:Vi},g=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Cb,fragmentShader:Lb}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new Yn;y.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Rn(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xp;let m=this.type;this.render=function(N,F,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Hi&&this.type===Hi,it=m===Hi&&this.type!==Hi;for(let ut=0,nt=N.length;ut<nt;ut++){const dt=N[ut],j=dt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",dt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const At=j.getFrameExtents();if(o.multiply(At),a.copy(j.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/At.x),o.x=a.x*At.x,j.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/At.y),o.y=a.y*At.y,j.mapSize.y=a.y)),j.map===null||$===!0||it===!0){const Ot=this.type!==Hi?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new Gr(o.x,o.y,Ot),j.map.texture.name=dt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Lt=j.getViewportCount();for(let Ot=0;Ot<Lt;Ot++){const ue=j.getViewport(Ot);c.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),Q.viewport(c),j.updateMatrices(dt,Ot),i=j.getFrustum(),R(F,H,j.camera,dt,this.type)}j.isPointLightShadow!==!0&&this.type===Hi&&I(j,H),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(C,T,z)};function I(N,F){const H=t.update(A);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Gr(o.x,o.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,H,g,A,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,H,x,A,null)}function L(N,F,H,C){let T=null;const z=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)T=z;else if(T=H.isPointLight===!0?h:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Q=T.uuid,$=F.uuid;let it=f[Q];it===void 0&&(it={},f[Q]=it);let ut=it[$];ut===void 0&&(ut=T.clone(),it[$]=ut,F.addEventListener("dispose",G)),T=ut}if(T.visible=F.visible,T.wireframe=F.wireframe,C===Hi?T.side=F.shadowSide!==null?F.shadowSide:F.side:T.side=F.shadowSide!==null?F.shadowSide:_[F.side],T.alphaMap=F.alphaMap,T.alphaTest=F.alphaTest,T.map=F.map,T.clipShadows=F.clipShadows,T.clippingPlanes=F.clippingPlanes,T.clipIntersection=F.clipIntersection,T.displacementMap=F.displacementMap,T.displacementScale=F.displacementScale,T.displacementBias=F.displacementBias,T.wireframeLinewidth=F.wireframeLinewidth,T.linewidth=F.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=r.properties.get(T);Q.light=H}return T}function R(N,F,H,C,T){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Hi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const $=t.update(N),it=N.material;if(Array.isArray(it)){const ut=$.groups;for(let nt=0,dt=ut.length;nt<dt;nt++){const j=ut[nt],At=it[j.materialIndex];if(At&&At.visible){const Lt=L(N,At,C,T);N.onBeforeShadow(r,N,F,H,$,Lt,j),r.renderBufferDirect(H,null,$,Lt,N,j),N.onAfterShadow(r,N,F,H,$,Lt,j)}}}else if(it.visible){const ut=L(N,it,C,T);N.onBeforeShadow(r,N,F,H,$,ut,null),r.renderBufferDirect(H,null,$,ut,N,null),N.onAfterShadow(r,N,F,H,$,ut,null)}}const Q=N.children;for(let $=0,it=Q.length;$<it;$++)R(Q[$],F,H,C,T)}function G(N){N.target.removeEventListener("dispose",G);for(const H in f){const C=f[H],T=N.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const Pb={[cu]:uu,[hu]:pu,[fu]:mu,[Ps]:du,[uu]:cu,[pu]:hu,[mu]:fu,[du]:Ps};function Db(r,t){function e(){let V=!1;const yt=new Fe;let tt=null;const lt=new Fe(0,0,0,0);return{setMask:function(Ct){tt!==Ct&&!V&&(r.colorMask(Ct,Ct,Ct,Ct),tt=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,Rt,re,Xe,tn){tn===!0&&(Ct*=Xe,Rt*=Xe,re*=Xe),yt.set(Ct,Rt,re,Xe),lt.equals(yt)===!1&&(r.clearColor(Ct,Rt,re,Xe),lt.copy(yt))},reset:function(){V=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let V=!1,yt=!1,tt=null,lt=null,Ct=null;return{setReversed:function(Rt){if(yt!==Rt){const re=t.get("EXT_clip_control");yt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Xe=Ct;Ct=null,this.setClear(Xe)}yt=Rt},getReversed:function(){return yt},setTest:function(Rt){Rt?bt(r.DEPTH_TEST):Xt(r.DEPTH_TEST)},setMask:function(Rt){tt!==Rt&&!V&&(r.depthMask(Rt),tt=Rt)},setFunc:function(Rt){if(yt&&(Rt=Pb[Rt]),lt!==Rt){switch(Rt){case cu:r.depthFunc(r.NEVER);break;case uu:r.depthFunc(r.ALWAYS);break;case hu:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case fu:r.depthFunc(r.EQUAL);break;case du:r.depthFunc(r.GEQUAL);break;case pu:r.depthFunc(r.GREATER);break;case mu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){Ct!==Rt&&(yt&&(Rt=1-Rt),r.clearDepth(Rt),Ct=Rt)},reset:function(){V=!1,tt=null,lt=null,Ct=null,yt=!1}}}function o(){let V=!1,yt=null,tt=null,lt=null,Ct=null,Rt=null,re=null,Xe=null,tn=null;return{setTest:function(be){V||(be?bt(r.STENCIL_TEST):Xt(r.STENCIL_TEST))},setMask:function(be){yt!==be&&!V&&(r.stencilMask(be),yt=be)},setFunc:function(be,On,oi){(tt!==be||lt!==On||Ct!==oi)&&(r.stencilFunc(be,On,oi),tt=be,lt=On,Ct=oi)},setOp:function(be,On,oi){(Rt!==be||re!==On||Xe!==oi)&&(r.stencilOp(be,On,oi),Rt=be,re=On,Xe=oi)},setLocked:function(be){V=be},setClear:function(be){tn!==be&&(r.clearStencil(be),tn=be)},reset:function(){V=!1,yt=null,tt=null,lt=null,Ct=null,Rt=null,re=null,Xe=null,tn=null}}}const a=new e,c=new i,u=new o,h=new WeakMap,f=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,A=!1,v=null,m=null,I=null,L=null,R=null,G=null,N=null,F=new pt(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,it=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,dt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(j)[1]),nt=dt>=1):j.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),nt=dt>=2);let At=null,Lt={};const Ot=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),Le=new Fe().fromArray(Ot),at=new Fe().fromArray(ue);function gt(V,yt,tt,lt){const Ct=new Uint8Array(4),Rt=r.createTexture();r.bindTexture(V,Rt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<tt;re++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(yt+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Rt}const Bt={};Bt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Bt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Bt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),bt(r.DEPTH_TEST),c.setFunc(Ps),ge(!1),ee(Ld),bt(r.CULL_FACE),O(ur);function bt(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Xt(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function de(V,yt){return _[V]!==yt?(r.bindFramebuffer(V,yt),_[V]=yt,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=yt),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function Qt(V,yt){let tt=x,lt=!1;if(V){tt=g.get(yt),tt===void 0&&(tt=[],g.set(yt,tt));const Ct=V.textures;if(tt.length!==Ct.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let Rt=0,re=Ct.length;Rt<re;Rt++)tt[Rt]=r.COLOR_ATTACHMENT0+Rt;tt.length=Ct.length,lt=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,lt=!0);lt&&r.drawBuffers(tt)}function Ge(V){return y!==V?(r.useProgram(V),y=V,!0):!1}const Pe={[Ur]:r.FUNC_ADD,[PS]:r.FUNC_SUBTRACT,[DS]:r.FUNC_REVERSE_SUBTRACT};Pe[US]=r.MIN,Pe[NS]=r.MAX;const pe={[FS]:r.ZERO,[OS]:r.ONE,[BS]:r.SRC_COLOR,[au]:r.SRC_ALPHA,[WS]:r.SRC_ALPHA_SATURATE,[VS]:r.DST_COLOR,[GS]:r.DST_ALPHA,[zS]:r.ONE_MINUS_SRC_COLOR,[lu]:r.ONE_MINUS_SRC_ALPHA,[kS]:r.ONE_MINUS_DST_COLOR,[HS]:r.ONE_MINUS_DST_ALPHA,[XS]:r.CONSTANT_COLOR,[qS]:r.ONE_MINUS_CONSTANT_COLOR,[YS]:r.CONSTANT_ALPHA,[ZS]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,yt,tt,lt,Ct,Rt,re,Xe,tn,be){if(V===ur){A===!0&&(Xt(r.BLEND),A=!1);return}if(A===!1&&(bt(r.BLEND),A=!0),V!==IS){if(V!==v||be!==C){if((m!==Ur||R!==Ur)&&(r.blendEquation(r.FUNC_ADD),m=Ur,R=Ur),be)switch(V){case Rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Id:r.blendFunc(r.ONE,r.ONE);break;case Pd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Id:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Pd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,G=null,N=null,F.set(0,0,0),H=0,v=V,C=be}return}Ct=Ct||yt,Rt=Rt||tt,re=re||lt,(yt!==m||Ct!==R)&&(r.blendEquationSeparate(Pe[yt],Pe[Ct]),m=yt,R=Ct),(tt!==I||lt!==L||Rt!==G||re!==N)&&(r.blendFuncSeparate(pe[tt],pe[lt],pe[Rt],pe[re]),I=tt,L=lt,G=Rt,N=re),(Xe.equals(F)===!1||tn!==H)&&(r.blendColor(Xe.r,Xe.g,Xe.b,tn),F.copy(Xe),H=tn),v=V,C=!1}function an(V,yt){V.side===Vi?Xt(r.CULL_FACE):bt(r.CULL_FACE);let tt=V.side===Fn;yt&&(tt=!tt),ge(tt),V.blending===Rs&&V.transparent===!1?O(ur):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const lt=V.stencilWrite;u.setTest(lt),lt&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Oe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(V){T!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),T=V)}function ee(V){V!==RS?(bt(r.CULL_FACE),V!==z&&(V===Ld?r.cullFace(r.BACK):V===CS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Xt(r.CULL_FACE),z=V}function kt(V){V!==Q&&(nt&&r.lineWidth(V),Q=V)}function Oe(V,yt,tt){V?(bt(r.POLYGON_OFFSET_FILL),($!==yt||it!==tt)&&(r.polygonOffset(yt,tt),$=yt,it=tt)):Xt(r.POLYGON_OFFSET_FILL)}function Ht(V){V?bt(r.SCISSOR_TEST):Xt(r.SCISSOR_TEST)}function P(V){V===void 0&&(V=r.TEXTURE0+ut-1),At!==V&&(r.activeTexture(V),At=V)}function S(V,yt,tt){tt===void 0&&(At===null?tt=r.TEXTURE0+ut-1:tt=At);let lt=Lt[tt];lt===void 0&&(lt={type:void 0,texture:void 0},Lt[tt]=lt),(lt.type!==V||lt.texture!==yt)&&(At!==tt&&(r.activeTexture(tt),At=tt),r.bindTexture(V,yt||Bt[V]),lt.type=V,lt.texture=yt)}function Y(){const V=Lt[At];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ct(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(V){Le.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Ut(V){at.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function fe(V,yt){let tt=f.get(yt);tt===void 0&&(tt=new WeakMap,f.set(yt,tt));let lt=tt.get(V);lt===void 0&&(lt=r.getUniformBlockIndex(yt,V.name),tt.set(V,lt))}function ne(V,yt){const lt=f.get(yt).get(V);h.get(yt)!==lt&&(r.uniformBlockBinding(yt,lt,V.__bindingPointIndex),h.set(yt,lt))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},At=null,Lt={},_={},g=new WeakMap,x=[],y=null,A=!1,v=null,m=null,I=null,L=null,R=null,G=null,N=null,F=new pt(0,0,0),H=0,C=!1,T=null,z=null,Q=null,$=null,it=null,Le.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:bt,disable:Xt,bindFramebuffer:de,drawBuffers:Qt,useProgram:Ge,setBlending:O,setMaterial:an,setFlipSided:ge,setCullFace:ee,setLineWidth:kt,setPolygonOffset:Oe,setScissorTest:Ht,activeTexture:P,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:Dt,texImage3D:Yt,updateUBOMapping:fe,uniformBlockBinding:ne,texStorage2D:me,texStorage3D:_t,texSubImage2D:st,texSubImage3D:Gt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:It,scissor:Jt,viewport:Ut,reset:De}}function Ub(r,t,e,i,o,a,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new wt,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,S){return x?new OffscreenCanvas(P,S):yo("canvas")}function A(P,S,Y){let ct=1;const ht=Ht(P);if((ht.width>Y||ht.height>Y)&&(ct=Y/Math.max(ht.width,ht.height)),ct<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const st=Math.floor(ct*ht.width),Gt=Math.floor(ct*ht.height);_===void 0&&(_=y(st,Gt));const Mt=S?y(st,Gt):_;return Mt.width=st,Mt.height=Gt,Mt.getContext("2d").drawImage(P,0,0,st,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+st+"x"+Gt+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function v(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,S,Y,ct,ht=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let st=S;if(S===r.RED&&(Y===r.FLOAT&&(st=r.R32F),Y===r.HALF_FLOAT&&(st=r.R16F),Y===r.UNSIGNED_BYTE&&(st=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.R8UI),Y===r.UNSIGNED_SHORT&&(st=r.R16UI),Y===r.UNSIGNED_INT&&(st=r.R32UI),Y===r.BYTE&&(st=r.R8I),Y===r.SHORT&&(st=r.R16I),Y===r.INT&&(st=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(st=r.RG32F),Y===r.HALF_FLOAT&&(st=r.RG16F),Y===r.UNSIGNED_BYTE&&(st=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RG8UI),Y===r.UNSIGNED_SHORT&&(st=r.RG16UI),Y===r.UNSIGNED_INT&&(st=r.RG32UI),Y===r.BYTE&&(st=r.RG8I),Y===r.SHORT&&(st=r.RG16I),Y===r.INT&&(st=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGB16UI),Y===r.UNSIGNED_INT&&(st=r.RGB32UI),Y===r.BYTE&&(st=r.RGB8I),Y===r.SHORT&&(st=r.RGB16I),Y===r.INT&&(st=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGBA16UI),Y===r.UNSIGNED_INT&&(st=r.RGBA32UI),Y===r.BYTE&&(st=r.RGBA8I),Y===r.SHORT&&(st=r.RGBA16I),Y===r.INT&&(st=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(st=r.RGB9_E5),S===r.RGBA){const Gt=ht?nl:Ae.getTransfer(ct);Y===r.FLOAT&&(st=r.RGBA32F),Y===r.HALF_FLOAT&&(st=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(st=Gt===Ue?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function R(P,S){let Y;return P?S===null||S===zr||S===Ns?Y=r.DEPTH24_STENCIL8:S===ki?Y=r.DEPTH32F_STENCIL8:S===Eo&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zr||S===Ns?Y=r.DEPTH_COMPONENT24:S===ki?Y=r.DEPTH_COMPONENT32F:S===Eo&&(Y=r.DEPTH_COMPONENT16),Y}function G(P,S){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==_i&&P.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function N(P){const S=P.target;S.removeEventListener("dispose",N),H(S),S.isVideoTexture&&p.delete(S)}function F(P){const S=P.target;S.removeEventListener("dispose",F),T(S)}function H(P){const S=i.get(P);if(S.__webglInit===void 0)return;const Y=P.source,ct=g.get(Y);if(ct){const ht=ct[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(P),Object.keys(ct).length===0&&g.delete(Y)}i.remove(P)}function C(P){const S=i.get(P);r.deleteTexture(S.__webglTexture);const Y=P.source,ct=g.get(Y);delete ct[S.__cacheKey],c.memory.textures--}function T(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let ht=0;ht<S.__webglFramebuffer[ct].length;ht++)r.deleteFramebuffer(S.__webglFramebuffer[ct][ht]);else r.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)r.deleteFramebuffer(S.__webglFramebuffer[ct]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=P.textures;for(let ct=0,ht=Y.length;ct<ht;ct++){const st=i.get(Y[ct]);st.__webglTexture&&(r.deleteTexture(st.__webglTexture),c.memory.textures--),i.remove(Y[ct])}i.remove(P)}let z=0;function Q(){z=0}function $(){const P=z;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),z+=1,P}function it(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ut(P,S){const Y=i.get(P);if(P.isVideoTexture&&kt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ct=P.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,P,S);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function nt(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){at(Y,P,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function dt(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){at(Y,P,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function j(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){gt(Y,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}const At={[vu]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[xu]:r.MIRRORED_REPEAT},Lt={[_i]:r.NEAREST,[rE]:r.NEAREST_MIPMAP_NEAREST,[Ma]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},Ot={[lE]:r.NEVER,[pE]:r.ALWAYS,[cE]:r.LESS,[sm]:r.LEQUAL,[uE]:r.EQUAL,[dE]:r.GEQUAL,[hE]:r.GREATER,[fE]:r.NOTEQUAL};function ue(P,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Ac||S.magFilter===Ma||S.magFilter===Br||S.minFilter===Ti||S.minFilter===Ac||S.minFilter===Ma||S.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,At[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,At[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,At[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Lt[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Lt[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_i||S.minFilter!==Ma&&S.minFilter!==Br||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Le(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",N));const ct=S.source;let ht=g.get(ct);ht===void 0&&(ht={},g.set(ct,ht));const st=it(S);if(st!==P.__cacheKey){ht[st]===void 0&&(ht[st]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ht[st].usedTimes++;const Gt=ht[P.__cacheKey];Gt!==void 0&&(ht[P.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(S)),P.__cacheKey=st,P.__webglTexture=ht[st].texture}return Y}function at(P,S,Y){let ct=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=r.TEXTURE_3D);const ht=Le(P,S),st=S.source;e.bindTexture(ct,P.__webglTexture,r.TEXTURE0+Y);const Gt=i.get(st);if(st.version!==Gt.__version||ht===!0){e.activeTexture(r.TEXTURE0+Y);const Mt=Ae.getPrimaries(Ae.workingColorSpace),It=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),me=S.colorSpace===cr||Mt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let _t=A(S.image,!1,o.maxTextureSize);_t=Oe(S,_t);const Dt=a.convert(S.format,S.colorSpace),Yt=a.convert(S.type);let Jt=L(S.internalFormat,Dt,Yt,S.colorSpace,S.isVideoTexture);ue(ct,S);let Ut;const fe=S.mipmaps,ne=S.isVideoTexture!==!0,De=Gt.__version===void 0||ht===!0,V=st.dataReady,yt=G(S,_t);if(S.isDepthTexture)Jt=R(S.format===Fs,S.type),De&&(ne?e.texStorage2D(r.TEXTURE_2D,1,Jt,_t.width,_t.height):e.texImage2D(r.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Dt,Yt,null));else if(S.isDataTexture)if(fe.length>0){ne&&De&&e.texStorage2D(r.TEXTURE_2D,yt,Jt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)Ut=fe[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Ut.width,Ut.height,Dt,Yt,Ut.data):e.texImage2D(r.TEXTURE_2D,tt,Jt,Ut.width,Ut.height,0,Dt,Yt,Ut.data);S.generateMipmaps=!1}else ne?(De&&e.texStorage2D(r.TEXTURE_2D,yt,Jt,_t.width,_t.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t.width,_t.height,Dt,Yt,_t.data)):e.texImage2D(r.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Dt,Yt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ne&&De&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Jt,fe[0].width,fe[0].height,_t.depth);for(let tt=0,lt=fe.length;tt<lt;tt++)if(Ut=fe[tt],S.format!==mi)if(Dt!==null)if(ne){if(V)if(S.layerUpdates.size>0){const Ct=hp(Ut.width,Ut.height,S.format,S.type);for(const Rt of S.layerUpdates){const re=Ut.data.subarray(Rt*Ct/Ut.data.BYTES_PER_ELEMENT,(Rt+1)*Ct/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Rt,Ut.width,Ut.height,1,Dt,re)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Ut.width,Ut.height,_t.depth,Dt,Ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Jt,Ut.width,Ut.height,_t.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Ut.width,Ut.height,_t.depth,Dt,Yt,Ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Jt,Ut.width,Ut.height,_t.depth,0,Dt,Yt,Ut.data)}else{ne&&De&&e.texStorage2D(r.TEXTURE_2D,yt,Jt,fe[0].width,fe[0].height);for(let tt=0,lt=fe.length;tt<lt;tt++)Ut=fe[tt],S.format!==mi?Dt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Jt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Ut.width,Ut.height,Dt,Yt,Ut.data):e.texImage2D(r.TEXTURE_2D,tt,Jt,Ut.width,Ut.height,0,Dt,Yt,Ut.data)}else if(S.isDataArrayTexture)if(ne){if(De&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Jt,_t.width,_t.height,_t.depth),V)if(S.layerUpdates.size>0){const tt=hp(_t.width,_t.height,S.format,S.type);for(const lt of S.layerUpdates){const Ct=_t.data.subarray(lt*tt/_t.data.BYTES_PER_ELEMENT,(lt+1)*tt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,_t.width,_t.height,1,Dt,Yt,Ct)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Dt,Yt,_t.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Jt,_t.width,_t.height,_t.depth,0,Dt,Yt,_t.data);else if(S.isData3DTexture)ne?(De&&e.texStorage3D(r.TEXTURE_3D,yt,Jt,_t.width,_t.height,_t.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Dt,Yt,_t.data)):e.texImage3D(r.TEXTURE_3D,0,Jt,_t.width,_t.height,_t.depth,0,Dt,Yt,_t.data);else if(S.isFramebufferTexture){if(De)if(ne)e.texStorage2D(r.TEXTURE_2D,yt,Jt,_t.width,_t.height);else{let tt=_t.width,lt=_t.height;for(let Ct=0;Ct<yt;Ct++)e.texImage2D(r.TEXTURE_2D,Ct,Jt,tt,lt,0,Dt,Yt,null),tt>>=1,lt>>=1}}else if(fe.length>0){if(ne&&De){const tt=Ht(fe[0]);e.texStorage2D(r.TEXTURE_2D,yt,Jt,tt.width,tt.height)}for(let tt=0,lt=fe.length;tt<lt;tt++)Ut=fe[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Dt,Yt,Ut):e.texImage2D(r.TEXTURE_2D,tt,Jt,Dt,Yt,Ut);S.generateMipmaps=!1}else if(ne){if(De){const tt=Ht(_t);e.texStorage2D(r.TEXTURE_2D,yt,Jt,tt.width,tt.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Yt,_t)}else e.texImage2D(r.TEXTURE_2D,0,Jt,Dt,Yt,_t);v(S)&&m(ct),Gt.__version=st.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function gt(P,S,Y){if(S.image.length!==6)return;const ct=Le(P,S),ht=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const st=i.get(ht);if(ht.version!==st.__version||ct===!0){e.activeTexture(r.TEXTURE0+Y);const Gt=Ae.getPrimaries(Ae.workingColorSpace),Mt=S.colorSpace===cr?null:Ae.getPrimaries(S.colorSpace),It=S.colorSpace===cr||Gt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,Dt=[];for(let lt=0;lt<6;lt++)!me&&!_t?Dt[lt]=A(S.image[lt],!0,o.maxCubemapSize):Dt[lt]=_t?S.image[lt].image:S.image[lt],Dt[lt]=Oe(S,Dt[lt]);const Yt=Dt[0],Jt=a.convert(S.format,S.colorSpace),Ut=a.convert(S.type),fe=L(S.internalFormat,Jt,Ut,S.colorSpace),ne=S.isVideoTexture!==!0,De=st.__version===void 0||ct===!0,V=ht.dataReady;let yt=G(S,Yt);ue(r.TEXTURE_CUBE_MAP,S);let tt;if(me){ne&&De&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,fe,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){tt=Dt[lt].mipmaps;for(let Ct=0;Ct<tt.length;Ct++){const Rt=tt[Ct];S.format!==mi?Jt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,0,0,Rt.width,Rt.height,Jt,Rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,fe,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,0,0,Rt.width,Rt.height,Jt,Ut,Rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct,fe,Rt.width,Rt.height,0,Jt,Ut,Rt.data)}}}else{if(tt=S.mipmaps,ne&&De){tt.length>0&&yt++;const lt=Ht(Dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,fe,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(_t){ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt[lt].width,Dt[lt].height,Jt,Ut,Dt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Dt[lt].width,Dt[lt].height,0,Jt,Ut,Dt[lt].data);for(let Ct=0;Ct<tt.length;Ct++){const re=tt[Ct].image[lt].image;ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,0,0,re.width,re.height,Jt,Ut,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,fe,re.width,re.height,0,Jt,Ut,re.data)}}else{ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Jt,Ut,Dt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,fe,Jt,Ut,Dt[lt]);for(let Ct=0;Ct<tt.length;Ct++){const Rt=tt[Ct];ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,0,0,Jt,Ut,Rt.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct+1,fe,Jt,Ut,Rt.image[lt])}}}v(S)&&m(r.TEXTURE_CUBE_MAP),st.__version=ht.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Bt(P,S,Y,ct,ht,st){const Gt=a.convert(Y.format,Y.colorSpace),Mt=a.convert(Y.type),It=L(Y.internalFormat,Gt,Mt,Y.colorSpace),me=i.get(S),_t=i.get(Y);if(_t.__renderTarget=S,!me.__hasExternalTextures){const Dt=Math.max(1,S.width>>st),Yt=Math.max(1,S.height>>st);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,st,It,Dt,Yt,S.depth,0,Gt,Mt,null):e.texImage2D(ht,st,It,Dt,Yt,0,Gt,Mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,ht,_t.__webglTexture,0,ge(S)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,ht,_t.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(P,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ct=S.depthTexture,ht=ct&&ct.isDepthTexture?ct.type:null,st=R(S.stencilBuffer,ht),Gt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=ge(S);ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,st,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,st,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,st,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,P)}else{const ct=S.textures;for(let ht=0;ht<ct.length;ht++){const st=ct[ht],Gt=a.convert(st.format,st.colorSpace),Mt=a.convert(st.type),It=L(st.internalFormat,Gt,Mt,st.colorSpace),me=ge(S);Y&&ee(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,It,S.width,S.height):ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,It,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,It,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=i.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ut(S.depthTexture,0);const ht=ct.__webglTexture,st=ge(S);if(S.depthTexture.format===Cs)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(S.depthTexture.format===Fs)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function de(P){const S=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ct=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ht)};ct.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=ct}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Xt(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=r.createRenderbuffer(),bt(S.__webglDepthbuffer[ct],P,!1);else{const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,st)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),bt(S.__webglDepthbuffer,P,!1);else{const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(P,S,Y){const ct=i.get(P);S!==void 0&&Bt(ct.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&de(P)}function Ge(P){const S=P.texture,Y=i.get(P),ct=i.get(S);P.addEventListener("dispose",F);const ht=P.textures,st=P.isWebGLCubeRenderTarget===!0,Gt=ht.length>1;if(Gt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=S.version,c.memory.textures++),st){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let It=0;It<S.mipmaps.length;It++)Y.__webglFramebuffer[Mt][It]=r.createFramebuffer()}else Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let Mt=0,It=ht.length;Mt<It;Mt++){const me=i.get(ht[Mt]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&ee(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){const It=ht[Mt];Y.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const me=a.convert(It.format,It.colorSpace),_t=a.convert(It.type),Dt=L(It.internalFormat,me,_t,It.colorSpace,P.isXRRenderTarget===!0),Yt=ge(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),ue(r.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)Bt(Y.__webglFramebuffer[Mt][It],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It);else Bt(Y.__webglFramebuffer[Mt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(S)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Mt=0,It=ht.length;Mt<It;Mt++){const me=ht[Mt],_t=i.get(me);e.bindTexture(r.TEXTURE_2D,_t.__webglTexture),ue(r.TEXTURE_2D,me),Bt(Y.__webglFramebuffer,P,me,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,0),v(me)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let Mt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ct.__webglTexture),ue(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let It=0;It<S.mipmaps.length;It++)Bt(Y.__webglFramebuffer[It],P,S,r.COLOR_ATTACHMENT0,Mt,It);else Bt(Y.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,Mt,0);v(S)&&m(Mt),e.unbindTexture()}P.depthBuffer&&de(P)}function Pe(P){const S=P.textures;for(let Y=0,ct=S.length;Y<ct;Y++){const ht=S[Y];if(v(ht)){const st=I(P),Gt=i.get(ht).__webglTexture;e.bindTexture(st,Gt),m(st),e.unbindTexture()}}}const pe=[],O=[];function an(P){if(P.samples>0){if(ee(P)===!1){const S=P.textures,Y=P.width,ct=P.height;let ht=r.COLOR_BUFFER_BIT;const st=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=i.get(P),Mt=S.length>1;if(Mt)for(let It=0;It<S.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let It=0;It<S.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[It]);const me=i.get(S[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,me,0)}r.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,ht,r.NEAREST),h===!0&&(pe.length=0,O.length=0,pe.push(r.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pe.push(st),O.push(st),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let It=0;It<S.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[It]);const me=i.get(S[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,me,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ge(P){return Math.min(o.maxSamples,P.samples)}function ee(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function kt(P){const S=c.render.frame;p.get(P)!==S&&(p.set(P,S),P.update())}function Oe(P,S){const Y=P.colorSpace,ct=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Os&&Y!==cr&&(Ae.getTransfer(Y)===Ue?(ct!==mi||ht!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=j,this.rebindTextures=Qt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=ee}function Nb(r,t){function e(i,o=cr){let a;const c=Ae.getTransfer(o);if(i===qi)return r.UNSIGNED_BYTE;if(i===eh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===$p)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Zp)return r.BYTE;if(i===Kp)return r.SHORT;if(i===Eo)return r.UNSIGNED_SHORT;if(i===th)return r.INT;if(i===zr)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===To)return r.HALF_FLOAT;if(i===Jp)return r.ALPHA;if(i===Qp)return r.RGB;if(i===mi)return r.RGBA;if(i===jp)return r.LUMINANCE;if(i===tm)return r.LUMINANCE_ALPHA;if(i===Cs)return r.DEPTH_COMPONENT;if(i===Fs)return r.DEPTH_STENCIL;if(i===em)return r.RED;if(i===ih)return r.RED_INTEGER;if(i===nm)return r.RG;if(i===rh)return r.RG_INTEGER;if(i===sh)return r.RGBA_INTEGER;if(i===$a||i===Ja||i===Qa||i===ja)if(c===Ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===$a)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===$a)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mu||i===Su||i===Eu||i===yu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Mu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Su)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tu||i===wu||i===Au)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Tu||i===wu)return c===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Au)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bu||i===Ru||i===Cu||i===Lu||i===Iu||i===Pu||i===Du||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===zu||i===Gu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ru)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Iu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Du)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ou)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===Hu||i===Vu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===tl)return c===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===im||i===ku||i===Wu||i===Xu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===tl)return a.COMPRESSED_RED_RGTC1_EXT;if(i===ku)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const o=new Cn,a=t.properties.get(o);a.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pr({vertexShader:Fb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zb extends zs{constructor(t,e){super();const i=this;let o=null,a=1,c=null,u="local-floor",h=1,f=null,p=null,_=null,g=null,x=null,y=null;const A=new Bb,v=e.getContextAttributes();let m=null,I=null;const L=[],R=[],G=new wt;let N=null;const F=new qn;F.viewport=new Fe;const H=new qn;H.viewport=new Fe;const C=[F,H],T=new oy;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=L[at];return gt===void 0&&(gt=new Zc,L[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=L[at];return gt===void 0&&(gt=new Zc,L[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=L[at];return gt===void 0&&(gt=new Zc,L[at]=gt),gt.getHandSpace()};function $(at){const gt=R.indexOf(at.inputSource);if(gt===-1)return;const Bt=L[gt];Bt!==void 0&&(Bt.update(at.inputSource,at.frame,f||c),Bt.dispatchEvent({type:at.type,data:at.inputSource}))}function it(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",it),o.removeEventListener("inputsourceschange",ut);for(let at=0;at<L.length;at++){const gt=R[at];gt!==null&&(R[at]=null,L[at].disconnect(gt))}z=null,Q=null,A.reset(),t.setRenderTarget(m),x=null,g=null,_=null,o=null,I=null,Le.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(at){if(o=at,o!==null){if(m=t.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",it),o.addEventListener("inputsourceschange",ut),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Bt=null,bt=null,Xt=null;v.depth&&(Xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Bt=v.stencil?Fs:Cs,bt=v.stencil?Ns:zr);const de={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:a};_=new XRWebGLBinding(o,e),g=_.createProjectionLayer(de),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),I=new Gr(g.textureWidth,g.textureHeight,{format:mi,type:qi,depthTexture:new xm(g.textureWidth,g.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,e,Bt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new Gr(x.framebufferWidth,x.framebufferHeight,{format:mi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await o.requestReferenceSpace(u),Le.setContext(o),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ut(at){for(let gt=0;gt<at.removed.length;gt++){const Bt=at.removed[gt],bt=R.indexOf(Bt);bt>=0&&(R[bt]=null,L[bt].disconnect(Bt))}for(let gt=0;gt<at.added.length;gt++){const Bt=at.added[gt];let bt=R.indexOf(Bt);if(bt===-1){for(let de=0;de<L.length;de++)if(de>=R.length){R.push(Bt),bt=de;break}else if(R[de]===null){R[de]=Bt,bt=de;break}if(bt===-1)break}const Xt=L[bt];Xt&&Xt.connect(Bt)}}const nt=new U,dt=new U;function j(at,gt,Bt){nt.setFromMatrixPosition(gt.matrixWorld),dt.setFromMatrixPosition(Bt.matrixWorld);const bt=nt.distanceTo(dt),Xt=gt.projectionMatrix.elements,de=Bt.projectionMatrix.elements,Qt=Xt[14]/(Xt[10]-1),Ge=Xt[14]/(Xt[10]+1),Pe=(Xt[9]+1)/Xt[5],pe=(Xt[9]-1)/Xt[5],O=(Xt[8]-1)/Xt[0],an=(de[8]+1)/de[0],ge=Qt*O,ee=Qt*an,kt=bt/(-O+an),Oe=kt*-O;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Oe),at.translateZ(kt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ht=Qt+kt,P=Ge+kt,S=ge-Oe,Y=ee+(bt-Oe),ct=Pe*Ge/P*Ht,ht=pe*Ge/P*Ht;at.projectionMatrix.makePerspective(S,Y,ct,ht,Ht,P),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function At(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(o===null)return;let gt=at.near,Bt=at.far;A.texture!==null&&(A.depthNear>0&&(gt=A.depthNear),A.depthFar>0&&(Bt=A.depthFar)),T.near=H.near=F.near=gt,T.far=H.far=F.far=Bt,(z!==T.near||Q!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Q=T.far),F.layers.mask=at.layers.mask|2,H.layers.mask=at.layers.mask|4,T.layers.mask=F.layers.mask|H.layers.mask;const bt=at.parent,Xt=T.cameras;At(T,bt);for(let de=0;de<Xt.length;de++)At(Xt[de],bt);Xt.length===2?j(T,F,H):T.projectionMatrix.copy(F.projectionMatrix),Lt(at,T,bt)};function Lt(at,gt,Bt){Bt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(Bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Yu*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(at){h=at,g!==null&&(g.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let Ot=null;function ue(at,gt){if(p=gt.getViewerPose(f||c),y=gt,p!==null){const Bt=p.views;x!==null&&(t.setRenderTargetFramebuffer(I,x.framebuffer),t.setRenderTarget(I));let bt=!1;Bt.length!==T.cameras.length&&(T.cameras.length=0,bt=!0);for(let Qt=0;Qt<Bt.length;Qt++){const Ge=Bt[Qt];let Pe=null;if(x!==null)Pe=x.getViewport(Ge);else{const O=_.getViewSubImage(g,Ge);Pe=O.viewport,Qt===0&&(t.setRenderTargetTextures(I,O.colorTexture,g.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(I))}let pe=C[Qt];pe===void 0&&(pe=new qn,pe.layers.enable(Qt),pe.viewport=new Fe,C[Qt]=pe),pe.matrix.fromArray(Ge.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ge.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Qt===0&&(T.matrix.copy(pe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),bt===!0&&T.cameras.push(pe)}const Xt=o.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const Qt=_.getDepthInformation(Bt[0]);Qt&&Qt.isValid&&Qt.texture&&A.init(t,Qt,o.renderState)}}for(let Bt=0;Bt<L.length;Bt++){const bt=R[Bt],Xt=L[Bt];bt!==null&&Xt!==void 0&&Xt.update(bt,gt,f||c)}Ot&&Ot(at,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),y=null}const Le=new Sm;Le.setAnimationLoop(ue),this.setAnimationLoop=function(at){Ot=at},this.dispose=function(){}}}const Ir=new wi,Gb=new We;function Hb(r,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,pm(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function o(v,m,I,L,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(v,m):m.isMeshToonMaterial?(a(v,m),_(v,m)):m.isMeshPhongMaterial?(a(v,m),p(v,m)):m.isMeshStandardMaterial?(a(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,R)):m.isMeshMatcapMaterial?(a(v,m),y(v,m)):m.isMeshDepthMaterial?a(v,m):m.isMeshDistanceMaterial?(a(v,m),A(v,m)):m.isMeshNormalMaterial?a(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?h(v,m,I,L):m.isSpriteMaterial?f(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Fn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Fn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const I=t.get(m),L=I.envMap,R=I.envMapRotation;L&&(v.envMap.value=L,Ir.copy(R),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.envMapRotation.value.setFromMatrix4(Gb.makeRotationFromEuler(Ir)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,I,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*I,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function f(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,I){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function A(v,m){const I=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Vb(r,t,e,i){let o={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const R=L.program;i.uniformBlockBinding(I,R)}function f(I,L){let R=o[I.id];R===void 0&&(y(I),R=p(I),o[I.id]=R,I.addEventListener("dispose",v));const G=L.program;i.updateUBOMapping(I,G);const N=t.render.frame;a[I.id]!==N&&(g(I),a[I.id]=N)}function p(I){const L=_();I.__bindingPointIndex=L;const R=r.createBuffer(),G=I.__size,N=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,G,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const L=o[I.id],R=I.uniforms,G=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,F=R.length;N<F;N++){const H=Array.isArray(R[N])?R[N]:[R[N]];for(let C=0,T=H.length;C<T;C++){const z=H[C];if(x(z,N,C,G)===!0){const Q=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let it=0;for(let ut=0;ut<$.length;ut++){const nt=$[ut],dt=A(nt);typeof nt=="number"||typeof nt=="boolean"?(z.__data[0]=nt,r.bufferSubData(r.UNIFORM_BUFFER,Q+it,z.__data)):nt.isMatrix3?(z.__data[0]=nt.elements[0],z.__data[1]=nt.elements[1],z.__data[2]=nt.elements[2],z.__data[3]=0,z.__data[4]=nt.elements[3],z.__data[5]=nt.elements[4],z.__data[6]=nt.elements[5],z.__data[7]=0,z.__data[8]=nt.elements[6],z.__data[9]=nt.elements[7],z.__data[10]=nt.elements[8],z.__data[11]=0):(nt.toArray(z.__data,it),it+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,R,G){const N=I.value,F=L+"_"+R;if(G[F]===void 0)return typeof N=="number"||typeof N=="boolean"?G[F]=N:G[F]=N.clone(),!0;{const H=G[F];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return G[F]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function y(I){const L=I.uniforms;let R=0;const G=16;for(let F=0,H=L.length;F<H;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let T=0,z=C.length;T<z;T++){const Q=C[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let it=0,ut=$.length;it<ut;it++){const nt=$[it],dt=A(nt),j=R%G,At=j%dt.boundary,Lt=j+At;R+=At,Lt!==0&&G-Lt<dt.storage&&(R+=G-Lt),Q.__data=new Float32Array(dt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=dt.storage}}}const N=R%G;return N>0&&(R+=G-N),I.__size=R,I.__cache={},this}function A(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function v(I){const L=I.target;L.removeEventListener("dispose",v);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function m(){for(const I in o)r.deleteBuffer(o[I]);c=[],o={},a={}}return{bind:h,update:f,dispose:m}}class kb{constructor(t={}){const{canvas:e=_E(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),A=new Int32Array(4);let v=null,m=null;const I=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=hr,this.toneMappingExposure=1;const R=this;let G=!1,N=0,F=0,H=null,C=-1,T=null;const z=new Fe,Q=new Fe;let $=null;const it=new pt(0);let ut=0,nt=e.width,dt=e.height,j=1,At=null,Lt=null;const Ot=new Fe(0,0,nt,dt),ue=new Fe(0,0,nt,dt);let Le=!1;const at=new oh;let gt=!1,Bt=!1;this.transmissionResolutionScale=1;const bt=new We,Xt=new We,de=new U,Qt=new Fe,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function pe(){return H===null?j:1}let O=i;function an(w,W){return e.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ju}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),O===null){const W="webgl2";if(O=an(W,w),O===null)throw an(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,ee,kt,Oe,Ht,P,S,Y,ct,ht,st,Gt,Mt,It,me,_t,Dt,Yt,Jt,Ut,fe,ne,De,V;function yt(){ge=new jw(O),ge.init(),ne=new Nb(O,ge),ee=new Yw(O,ge,t,ne),kt=new Db(O,ge),ee.reverseDepthBuffer&&g&&kt.buffers.depth.setReversed(!0),Oe=new nA(O),Ht=new Mb,P=new Ub(O,ge,kt,Ht,ee,ne,Oe),S=new Kw(R),Y=new Qw(R),ct=new cy(O),De=new Xw(O,ct),ht=new tA(O,ct,Oe,De),st=new rA(O,ht,ct,Oe),Jt=new iA(O,ee,P),_t=new Zw(Ht),Gt=new xb(R,S,Y,ge,ee,De,_t),Mt=new Hb(R,Ht),It=new Eb,me=new Rb(ge),Yt=new Ww(R,S,Y,kt,st,x,h),Dt=new Ib(R,st,ee),V=new Vb(O,Oe,ee,kt),Ut=new qw(O,ge,Oe),fe=new eA(O,ge,Oe),Oe.programs=Gt.programs,R.capabilities=ee,R.extensions=ge,R.properties=Ht,R.renderLists=It,R.shadowMap=Dt,R.state=kt,R.info=Oe}yt();const tt=new zb(R,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(nt,dt,!1))},this.getSize=function(w){return w.set(nt,dt)},this.setSize=function(w,W,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=w,dt=W,e.width=Math.floor(w*j),e.height=Math.floor(W*j),Z===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(nt*j,dt*j).floor()},this.setDrawingBufferSize=function(w,W,Z){nt=w,dt=W,j=Z,e.width=Math.floor(w*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Ot)},this.setViewport=function(w,W,Z,K){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,W,Z,K),kt.viewport(z.copy(Ot).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,W,Z,K){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,W,Z,K),kt.scissor(Q.copy(ue).multiplyScalar(j).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){kt.setScissorTest(Le=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){Lt=w},this.getClearColor=function(w){return w.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(w=!0,W=!0,Z=!0){let K=0;if(w){let q=!1;if(H!==null){const mt=H.texture.format;q=mt===sh||mt===rh||mt===ih}if(q){const mt=H.texture.type,Tt=mt===qi||mt===zr||mt===Eo||mt===Ns||mt===eh||mt===nh,Pt=Yt.getClearColor(),Ft=Yt.getClearAlpha(),jt=Pt.r,te=Pt.g,qt=Pt.b;Tt?(y[0]=jt,y[1]=te,y[2]=qt,y[3]=Ft,O.clearBufferuiv(O.COLOR,0,y)):(A[0]=jt,A[1]=te,A[2]=qt,A[3]=Ft,O.clearBufferiv(O.COLOR,0,A))}else K|=O.COLOR_BUFFER_BIT}W&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Yt.dispose(),It.dispose(),me.dispose(),Ht.dispose(),S.dispose(),Y.dispose(),st.dispose(),De.dispose(),V.dispose(),Gt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Wr),tt.removeEventListener("sessionend",Ro),ai.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=Oe.autoReset,W=Dt.enabled,Z=Dt.autoUpdate,K=Dt.needsUpdate,q=Dt.type;yt(),Oe.autoReset=w,Dt.enabled=W,Dt.autoUpdate=Z,Dt.needsUpdate=K,Dt.type=q}function Rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const W=w.target;W.removeEventListener("dispose",re),Xe(W)}function Xe(w){tn(w),Ht.remove(w)}function tn(w){const W=Ht.get(w).programs;W!==void 0&&(W.forEach(function(Z){Gt.releaseProgram(Z)}),w.isShaderMaterial&&Gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,K,q,mt){W===null&&(W=Ge);const Tt=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Uo(w,W,Z,K,q);kt.setMaterial(K,Tt);let Ft=Z.index,jt=1;if(K.wireframe===!0){if(Ft=ht.getWireframeAttribute(Z),Ft===void 0)return;jt=2}const te=Z.drawRange,qt=Z.attributes.position;let xe=te.start*jt,we=(te.start+te.count)*jt;mt!==null&&(xe=Math.max(xe,mt.start*jt),we=Math.min(we,(mt.start+mt.count)*jt)),Ft!==null?(xe=Math.max(xe,0),we=Math.min(we,Ft.count)):qt!=null&&(xe=Math.max(xe,0),we=Math.min(we,qt.count));const Ye=we-xe;if(Ye<0||Ye===1/0)return;De.setup(q,K,Pt,Z,Ft);let Ve,Me=Ut;if(Ft!==null&&(Ve=ct.get(Ft),Me=fe,Me.setIndex(Ve)),q.isMesh)K.wireframe===!0?(kt.setLineWidth(K.wireframeLinewidth*pe()),Me.setMode(O.LINES)):Me.setMode(O.TRIANGLES);else if(q.isLine){let Wt=K.linewidth;Wt===void 0&&(Wt=1),kt.setLineWidth(Wt*pe()),q.isLineSegments?Me.setMode(O.LINES):q.isLineLoop?Me.setMode(O.LINE_LOOP):Me.setMode(O.LINE_STRIP)}else q.isPoints?Me.setMode(O.POINTS):q.isSprite&&Me.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Me.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Me.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Wt=q._multiDrawStarts,en=q._multiDrawCounts,Te=q._multiDrawCount,mn=Ft?ct.get(Ft).bytesPerElement:1,Ai=Ht.get(K).currentProgram.getUniforms();for(let En=0;En<Te;En++)Ai.setValue(O,"_gl_DrawID",En),Me.render(Wt[En]/mn,en[En])}else if(q.isInstancedMesh)Me.renderInstances(xe,Ye,q.count);else if(Z.isInstancedBufferGeometry){const Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Wt);Me.renderInstances(xe,Ye,en)}else Me.render(xe,Ye)};function be(w,W,Z){w.transparent===!0&&w.side===Vi&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,qr(w,W,Z),w.side=dr,w.needsUpdate=!0,qr(w,W,Z),w.side=Vi):qr(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),m=me.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),w!==Z&&w.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){const Pt=mt[Tt];be(Pt,Z,q),K.add(Pt)}else be(mt,Z,q),K.add(mt)}),L.pop(),m=null,K},this.compileAsync=function(w,W,Z=null){const K=this.compile(w,W,Z);return new Promise(q=>{function mt(){if(K.forEach(function(Tt){Ht.get(Tt).currentProgram.isReady()&&K.delete(Tt)}),K.size===0){q(w);return}setTimeout(mt,10)}ge.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let On=null;function oi(w){On&&On(w)}function Wr(){ai.stop()}function Ro(){ai.start()}const ai=new Sm;ai.setAnimationLoop(oi),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){On=w,tt.setAnimationLoop(w),w===null?ai.stop():ai.start()},tt.addEventListener("sessionstart",Wr),tt.addEventListener("sessionend",Ro),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,W,H),m=me.get(w,L.length),m.init(W),L.push(m),Xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Xt),Bt=this.localClippingEnabled,gt=_t.init(this.clippingPlanes,Bt),v=It.get(w,I.length),v.init(),I.push(v),tt.enabled===!0&&tt.isPresenting===!0){const mt=R.xr.getDepthSensingMesh();mt!==null&&Vs(mt,W,-1/0,R.sortObjects)}Vs(w,W,0,R.sortObjects),v.finish(),R.sortObjects===!0&&v.sort(At,Lt),Pe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(v,w),this.info.render.frame++,gt===!0&&_t.beginShadows();const Z=m.state.shadowsArray;Dt.render(Z,w,W),gt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const mt=W.cameras;if(q.length>0)for(let Tt=0,Pt=mt.length;Tt<Pt;Tt++){const Ft=mt[Tt];Lo(K,q,w,Ft)}Pe&&Yt.render(w);for(let Tt=0,Pt=mt.length;Tt<Pt;Tt++){const Ft=mt[Tt];Co(v,w,Ft,Ft.viewport)}}else q.length>0&&Lo(K,q,w,W),Pe&&Yt.render(w),Co(v,w,W);H!==null&&F===0&&(P.updateMultisampleRenderTarget(H),P.updateRenderTargetMipmap(H)),w.isScene===!0&&w.onAfterRender(R,w,W),De.resetDefaultState(),C=-1,T=null,L.pop(),L.length>0?(m=L[L.length-1],gt===!0&&_t.setGlobalState(R.clippingPlanes,m.state.camera)):m=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function Vs(w,W,Z,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||at.intersectsSprite(w)){K&&Qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);const Tt=st.update(w),Pt=w.material;Pt.visible&&v.push(w,Tt,Pt,Z,Qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||at.intersectsObject(w))){const Tt=st.update(w),Pt=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qt.copy(w.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Qt.copy(Tt.boundingSphere.center)),Qt.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(Pt)){const Ft=Tt.groups;for(let jt=0,te=Ft.length;jt<te;jt++){const qt=Ft[jt],xe=Pt[qt.materialIndex];xe&&xe.visible&&v.push(w,Tt,xe,Z,Qt.z,qt)}}else Pt.visible&&v.push(w,Tt,Pt,Z,Qt.z,null)}}const mt=w.children;for(let Tt=0,Pt=mt.length;Tt<Pt;Tt++)Vs(mt[Tt],W,Z,K)}function Co(w,W,Z,K){const q=w.opaque,mt=w.transmissive,Tt=w.transparent;m.setupLightsView(Z),gt===!0&&_t.setGlobalState(R.clippingPlanes,Z),K&&kt.viewport(z.copy(K)),q.length>0&&Xr(q,W,Z),mt.length>0&&Xr(mt,W,Z),Tt.length>0&&Xr(Tt,W,Z),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Lo(w,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Gr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?To:qi,minFilter:Br,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const mt=m.state.transmissionRenderTarget[K.id],Tt=K.viewport||z;mt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);const Pt=R.getRenderTarget();R.setRenderTarget(mt),R.getClearColor(it),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Pe&&Yt.render(Z);const Ft=R.toneMapping;R.toneMapping=hr;const jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),gt===!0&&_t.setGlobalState(R.clippingPlanes,K),Xr(w,Z,K),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let qt=0,xe=W.length;qt<xe;qt++){const we=W[qt],Ye=we.object,Ve=we.geometry,Me=we.material,Wt=we.group;if(Me.side===Vi&&Ye.layers.test(K.layers)){const en=Me.side;Me.side=Fn,Me.needsUpdate=!0,Io(Ye,Z,K,Ve,Me,Wt),Me.side=en,Me.needsUpdate=!0,te=!0}}te===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}R.setRenderTarget(Pt),R.setClearColor(it,ut),jt!==void 0&&(K.viewport=jt),R.toneMapping=Ft}function Xr(w,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,mt=w.length;q<mt;q++){const Tt=w[q],Pt=Tt.object,Ft=Tt.geometry,jt=K===null?Tt.material:K,te=Tt.group;Pt.layers.test(Z.layers)&&Io(Pt,W,Z,Ft,jt,te)}}function Io(w,W,Z,K,q,mt){w.onBeforeRender(R,W,Z,K,q,mt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(R,W,Z,K,w,mt),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,w,mt),q.side=dr,q.needsUpdate=!0,R.renderBufferDirect(Z,W,K,q,w,mt),q.side=Vi):R.renderBufferDirect(Z,W,K,q,w,mt),w.onAfterRender(R,W,Z,K,q,mt)}function qr(w,W,Z){W.isScene!==!0&&(W=Ge);const K=Ht.get(w),q=m.state.lights,mt=m.state.shadowsArray,Tt=q.state.version,Pt=Gt.getParameters(w,q.state,mt,W,Z),Ft=Gt.getProgramCacheKey(Pt);let jt=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?Y:S).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,jt===void 0&&(w.addEventListener("dispose",re),jt=new Map,K.programs=jt);let te=jt.get(Ft);if(te!==void 0){if(K.currentProgram===te&&K.lightsStateVersion===Tt)return Do(w,Pt),te}else Pt.uniforms=Gt.getUniforms(w),w.onBeforeCompile(Pt,R),te=Gt.acquireProgram(Pt,Ft),jt.set(Ft,te),K.uniforms=Pt.uniforms;const qt=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=_t.uniform),Do(w,Pt),K.needsLights=_l(w),K.lightsStateVersion=Tt,K.needsLights&&(qt.ambientLightColor.value=q.state.ambient,qt.lightProbe.value=q.state.probe,qt.directionalLights.value=q.state.directional,qt.directionalLightShadows.value=q.state.directionalShadow,qt.spotLights.value=q.state.spot,qt.spotLightShadows.value=q.state.spotShadow,qt.rectAreaLights.value=q.state.rectArea,qt.ltc_1.value=q.state.rectAreaLTC1,qt.ltc_2.value=q.state.rectAreaLTC2,qt.pointLights.value=q.state.point,qt.pointLightShadows.value=q.state.pointShadow,qt.hemisphereLights.value=q.state.hemi,qt.directionalShadowMap.value=q.state.directionalShadowMap,qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qt.spotShadowMap.value=q.state.spotShadowMap,qt.spotLightMatrix.value=q.state.spotLightMatrix,qt.spotLightMap.value=q.state.spotLightMap,qt.pointShadowMap.value=q.state.pointShadowMap,qt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=te,K.uniformsList=null,te}function Po(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Do(w,W){const Z=Ht.get(w);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Uo(w,W,Z,K,q){W.isScene!==!0&&(W=Ge),P.resetTextureUnits();const mt=W.fog,Tt=K.isMeshStandardMaterial?W.environment:null,Pt=H===null?R.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Os,Ft=(K.isMeshStandardMaterial?Y:S).get(K.envMap||Tt),jt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qt=!!Z.morphAttributes.position,xe=!!Z.morphAttributes.normal,we=!!Z.morphAttributes.color;let Ye=hr;K.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ye=R.toneMapping);const Ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=Ve!==void 0?Ve.length:0,Wt=Ht.get(K),en=m.state.lights;if(gt===!0&&(Bt===!0||w!==T)){const ln=w===T&&K.id===C;_t.setState(K,w,ln)}let Te=!1;K.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==en.state.version||Wt.outputColorSpace!==Pt||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isBatchedMesh&&Wt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Wt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Wt.instancingMorph===!1&&q.morphTexture!==null||Wt.envMap!==Ft||K.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==jt||Wt.vertexTangents!==te||Wt.morphTargets!==qt||Wt.morphNormals!==xe||Wt.morphColors!==we||Wt.toneMapping!==Ye||Wt.morphTargetsCount!==Me)&&(Te=!0):(Te=!0,Wt.__version=K.version);let mn=Wt.currentProgram;Te===!0&&(mn=qr(K,W,q));let Ai=!1,En=!1,Yi=!1;const Be=mn.getUniforms(),_n=Wt.uniforms;if(kt.useProgram(mn.program)&&(Ai=!0,En=!0,Yi=!0),K.id!==C&&(C=K.id,En=!0),Ai||T!==w){kt.buffers.depth.getReversed()?(bt.copy(w.projectionMatrix),vE(bt),xE(bt),Be.setValue(O,"projectionMatrix",bt)):Be.setValue(O,"projectionMatrix",w.projectionMatrix),Be.setValue(O,"viewMatrix",w.matrixWorldInverse);const cn=Be.map.cameraPosition;cn!==void 0&&cn.setValue(O,de.setFromMatrixPosition(w.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Be.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,En=!0,Yi=!0)}if(q.isSkinnedMesh){Be.setOptional(O,q,"bindMatrix"),Be.setOptional(O,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Be.setValue(O,"boneTexture",ln.boneTexture,P))}q.isBatchedMesh&&(Be.setOptional(O,q,"batchingTexture"),Be.setValue(O,"batchingTexture",q._matricesTexture,P),Be.setOptional(O,q,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",q._indirectTexture,P),Be.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",q._colorsTexture,P));const Ln=Z.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Jt.update(q,Z,mn),(En||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,Be.setValue(O,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=Ft,_n.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(_n.envMapIntensity.value=W.environmentIntensity),En&&(Be.setValue(O,"toneMappingExposure",R.toneMappingExposure),Wt.needsLights&&ml(_n,Yi),mt&&K.fog===!0&&Mt.refreshFogUniforms(_n,mt),Mt.refreshMaterialUniforms(_n,K,j,dt,m.state.transmissionRenderTarget[w.id]),el.upload(O,Po(Wt),_n,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(el.upload(O,Po(Wt),_n,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Be.setValue(O,"center",q.center),Be.setValue(O,"modelViewMatrix",q.modelViewMatrix),Be.setValue(O,"normalMatrix",q.normalMatrix),Be.setValue(O,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let cn=0,_r=ln.length;cn<_r;cn++){const In=ln[cn];V.update(In,mn),V.bind(In,mn)}}return mn}function ml(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,W,Z){Ht.get(w.texture).__webglTexture=W,Ht.get(w.depthTexture).__webglTexture=Z;const K=Ht.get(w);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const Z=Ht.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const gl=O.createFramebuffer();this.setRenderTarget=function(w,W=0,Z=0){H=w,N=W,F=Z;let K=!0,q=null,mt=!1,Tt=!1;if(w){const Ft=Ht.get(w);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ft.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Ft.__hasExternalTextures)P.rebindTextures(w,Ht.get(w.texture).__webglTexture,Ht.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qt=w.depthTexture;if(Ft.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const jt=w.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Tt=!0);const te=Ht.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[W])?q=te[W][Z]:q=te[W],mt=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?q=Ht.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[Z]:q=te,z.copy(w.viewport),Q.copy(w.scissor),$=w.scissorTest}else z.copy(Ot).multiplyScalar(j).floor(),Q.copy(ue).multiplyScalar(j).floor(),$=Le;if(Z!==0&&(q=gl),kt.bindFramebuffer(O.FRAMEBUFFER,q)&&K&&kt.drawBuffers(w,q),kt.viewport(z),kt.scissor(Q),kt.setScissorTest($),mt){const Ft=Ht.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,Z)}else if(Tt){const Ft=Ht.get(w.texture),jt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,Z,jt)}else if(w!==null&&Z!==0){const Ft=Ht.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(w,W,Z,K,q,mt,Tt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){kt.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Ft=w.texture,jt=Ft.format,te=Ft.type;if(!ee.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&Z>=0&&Z<=w.height-q&&O.readPixels(W,Z,K,q,ne.convert(jt),ne.convert(te),mt)}finally{const Ft=H!==null?Ht.get(H).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(w,W,Z,K,q,mt,Tt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ht.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){const Ft=w.texture,jt=Ft.format,te=Ft.type;if(!ee.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-K&&Z>=0&&Z<=w.height-q){kt.bindFramebuffer(O.FRAMEBUFFER,Pt);const qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(W,Z,K,q,ne.convert(jt),ne.convert(te),0);const xe=H!==null?Ht.get(H).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,xe);const we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gE(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.deleteBuffer(qt),O.deleteSync(we),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,Z=0){w.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(w.image.width*K),mt=Math.floor(w.image.height*K),Tt=W!==null?W.x:0,Pt=W!==null?W.y:0;P.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Tt,Pt,q,mt),kt.unbindTexture()};const vl=O.createFramebuffer(),xl=O.createFramebuffer();this.copyTextureToTexture=function(w,W,Z=null,K=null,q=0,mt=null){w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,w=arguments[1],W=arguments[2],mt=arguments[3]||0,Z=null),mt===null&&(q!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=q,q=0):mt=0);let Tt,Pt,Ft,jt,te,qt,xe,we,Ye;const Ve=w.isCompressedTexture?w.mipmaps[mt]:w.image;if(Z!==null)Tt=Z.max.x-Z.min.x,Pt=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,jt=Z.min.x,te=Z.min.y,qt=Z.isBox3?Z.min.z:0;else{const Ln=Math.pow(2,-q);Tt=Math.floor(Ve.width*Ln),Pt=Math.floor(Ve.height*Ln),w.isDataArrayTexture?Ft=Ve.depth:w.isData3DTexture?Ft=Math.floor(Ve.depth*Ln):Ft=1,jt=0,te=0,qt=0}K!==null?(xe=K.x,we=K.y,Ye=K.z):(xe=0,we=0,Ye=0);const Me=ne.convert(W.format),Wt=ne.convert(W.type);let en;W.isData3DTexture?(P.setTexture3D(W,0),en=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),en=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),en=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Te=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ai=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),Yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,te),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);const Be=w.isDataArrayTexture||w.isData3DTexture,_n=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Ln=Ht.get(w),ln=Ht.get(W),cn=Ht.get(Ln.__renderTarget),_r=Ht.get(ln.__renderTarget);kt.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let In=0;In<Ft;In++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(w).__webglTexture,q,qt+In),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,mt,Ye+In)),O.blitFramebuffer(jt,te,Tt,Pt,xe,we,Tt,Pt,O.DEPTH_BUFFER_BIT,O.NEAREST);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||Ht.has(w)){const Ln=Ht.get(w),ln=Ht.get(W);kt.bindFramebuffer(O.READ_FRAMEBUFFER,vl),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,xl);for(let cn=0;cn<Ft;cn++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ln.__webglTexture,q,qt+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ln.__webglTexture,q),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,mt,Ye+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,mt),q!==0?O.blitFramebuffer(jt,te,Tt,Pt,xe,we,Tt,Pt,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(en,mt,xe,we,Ye+cn,jt,te,Tt,Pt):O.copyTexSubImage2D(en,mt,xe,we,jt,te,Tt,Pt);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(en,mt,xe,we,Ye,Tt,Pt,Ft,Me,Wt,Ve.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(en,mt,xe,we,Ye,Tt,Pt,Ft,Me,Ve.data):O.texSubImage3D(en,mt,xe,we,Ye,Tt,Pt,Ft,Me,Wt,Ve):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,xe,we,Tt,Pt,Me,Wt,Ve.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,xe,we,Ve.width,Ve.height,Me,Ve.data):O.texSubImage2D(O.TEXTURE_2D,mt,xe,we,Tt,Pt,Me,Wt,Ve);O.pixelStorei(O.UNPACK_ROW_LENGTH,Te),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ai),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yi),mt===0&&W.generateMipmaps&&O.generateMipmap(en),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Z=null,K=null,q=0){return w.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,w=arguments[2],W=arguments[3],q=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,Z,K,q)},this.initRenderTarget=function(w){Ht.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){N=0,F=0,H=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class bo{constructor(t){vt(this,"mesh");vt(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,i,o){}graphics(t,e,i,o){}kill(){this.isAlive=!1}beforeDeath(t,e,i){}}class Sn{constructor(t){vt(this,"center");vt(this,"parts");this.center=t.center,this.parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this.parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}}const Wb={createGrid(r,t){const e=[];for(let i=0;i<r;i++){e[i]=[];for(let o=0;o<t;o++){const a={actors:[],isWalkable:!0};e[i][o]=a}}return e}};class Xb{constructor(t){vt(this,"actorsGrid");vt(this,"components",[]);vt(this,"camera");vt(this,"scene");this.actorsGrid=Wb.createGrid(t.width,t.height),this.camera=t.camera??new qn,this.scene=t.scene??new WE}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof Sn?t.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof Sn?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((a,c)=>{a.forEach((u,h)=>{const f=new wt(c,h);u.actors.forEach(p=>p.update(t,e,this,f.clone()))})}),this.components.forEach(a=>a.update(t,e,this)),this.actorsGrid.map((a,c)=>a.map((u,h)=>{const f=new wt(c,h);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(t,this,f),g.mesh instanceof Sn?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)});const _=u.actors.filter(g=>g.isAlive);u.actors=_}));const i=[],o=[];for(let a=0;a<this.components.length;a++){const c=this.components[a];c.isAlive?i.push(c):o.push(c)}o.forEach(a=>{a.mesh instanceof Sn?a.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(a.mesh)}),this.components=i}graphics(t,e){this.actorsGrid.forEach((i,o)=>{i.forEach((a,c)=>{const u=new wt(o,c);a.actors.forEach(h=>h.graphics(t,e,this,u.clone()))})}),this.components.forEach(i=>i.graphics(t,e,this))}}var Is=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++r%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===p?"block":"none";r=p}var o=(performance||Date).now(),a=o,c=0,u=e(new Is.Panel("FPS","#0ff","#002")),h=e(new Is.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new Is.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-o,200),p>=a+1e3&&(u.update(c*1e3/(p-a),100),a=p,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:t,setMode:i}};Is.Panel=function(r,t,e){var i=1/0,o=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,p=2*c,_=3*c,g=15*c,x=74*c,y=30*c,A=document.createElement("canvas");A.width=u,A.height=h,A.style.cssText="width:80px;height:48px";var v=A.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=e,v.fillRect(0,0,u,h),v.fillStyle=t,v.fillText(r,f,p),v.fillRect(_,g,x,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_,g,x,y),{dom:A,update:function(m,I){i=Math.min(i,m),o=Math.max(o,m),v.fillStyle=e,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=t,v.fillText(a(m)+" "+r+" ("+a(i)+"-"+a(o)+")",f,p),v.drawImage(A,_+c,g,x-c,y,_,g,x-c,y),v.fillRect(_+x-c,g,c,y),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,a((1-m/I)*y))}}};const qb="canvas";class Yb{constructor(){vt(this,"wasPressedMap",new Map);vt(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const Zb=new Yb;class Kb{constructor(){vt(this,"renderer");vt(this,"keyboardHandler");vt(this,"isGameOver",!1);vt(this,"lastUpdate",Date.now());vt(this,"lastGraphics",Date.now());vt(this,"stats",new Is);vt(this,"containers",new Map);vt(this,"currentContainer");this.renderer=new kb,this.renderer.setSize(800,800),this.renderer.domElement.id=qb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=Zb,this.stats=new Is,document.body.appendChild(this.stats.dom);const t=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",t),window.requestAnimationFrame(t)}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=Fp(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=Fp(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function Fp(r){return Math.max(0,Math.min(r,1e3))}class mr{constructor(t){vt(this,"mesh");vt(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,i){}graphics(t,e,i){}kill(){this.isAlive=!1}}const zt={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc",WOOD:"#341c27"},ii=4,ye={createCube:r=>{const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??65280,i=new Hr(t,t,t,ii,ii,ii),o={color:e},a=r!=null&&r.basicMaterial?new Si(o):new ys(o);return new Rn(i,a)},createBox:r=>{var f;const t=(r==null?void 0:r.width)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.depth)??1,o=(r==null?void 0:r.color)??new pt(zt.RED),a=new Hr(t,e,i,ii,ii,ii),c=!!(r!=null&&r.transparent),u={color:o,transparent:c,opacity:c?(f=r==null?void 0:r.transparent)==null?void 0:f.value:1},h=r!=null&&r.basicMaterial?new Si(u):new ys(u);return new Rn(a,h)},createCone:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new pt(zt.RED),o=new ah(t,e,ii,ii),a={color:i},c=r!=null&&r.basicMaterial?new Si(a):new ys(a);return new Rn(o,c)},createSphere:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.color)??new pt(zt.RED),i=new uh(t,ii,ii),o={color:e},a=r!=null&&r.basicMaterial?new Si(o):new ys(o);return new Rn(i,a)},createCylinder:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new pt(zt.RED),o=new fl(t,t,e,ii*2,ii),a={color:i},c=r!=null&&r.basicMaterial?new Si(a):new ys(a);return new Rn(o,c)},createGem(r){const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??new pt(zt.RED),i=new ch(t,0),o={color:e},a=r!=null&&r.basicMaterial?new Si(o):new ys(o);return new Rn(i,a)}};class $b extends bo{constructor(t){const e=new Sn({center:t.position,parts:[{mesh:ye.createBox({width:t.size,height:t.size/4,depth:t.size,color:new pt(zt.DARK)}),offset:new U(0,-t.size*3/8,0)},{mesh:ye.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new pt(zt.WHITE)}),offset:new U(0,0,0)},{mesh:ye.createBox({width:t.size,height:t.size/4,depth:t.size,color:new pt(zt.DARK)}),offset:new U(0,t.size*3/8,0)}]});super({mesh:e})}}class Jb extends mr{constructor(t){const e=()=>{const o=Math.floor(Math.random()*2)+2,a=Array.from({length:o},()=>ye.createCone({radius:t.size/32,height:t.size/4,color:new pt(zt.GREEN)})),c=2;a.forEach(f=>f.rotateOnAxis(new U(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-t.size/2+Math.random()*t.size,h=-t.size/2+Math.random()*t.size;return a.map(f=>({mesh:f,offset:new U(u,t.size*19/32,h)}))},i=()=>{const o=ye.createCone({radius:t.size/32,height:t.size/2,color:new pt(zt.GREEN)}),a=ye.createSphere({radius:t.size/32,color:Math.random()<.5?new pt(zt.PINK):new pt(zt.YELLOW)}),c=-t.size/2+Math.random()*t.size,u=-t.size/2+Math.random()*t.size;return[{mesh:o,offset:new U(c,t.size*10/16,u)},{mesh:a,offset:new U(c,t.size*13/16,u)}]};super({mesh:new Sn({center:t.position,parts:[{mesh:ye.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new pt(zt.DARK_GREEN)}),offset:new U(0,t.size*3/8,0)},{mesh:ye.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new pt(zt.DIRT)}),offset:new U(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?i():[]]})})}}var dh=(r=>(r.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",r))(dh||{});const xt={TILE_SIZE:1};class Ya extends mr{constructor(t){const e=xt.TILE_SIZE/2,i=xt.TILE_SIZE,o=e+Math.random()*i,a=ye.createCone({radius:xt.TILE_SIZE*3,height:o,color:Math.random()<.5?new pt(zt.WHITE):new pt(zt.WHITE)});a.position.set(t.position.x,o/4,t.position.y),super({mesh:a})}}class Qb extends mr{constructor(t){const e=ye.createSphere({radius:xt.TILE_SIZE/32,color:new pt(zt.WHITE),basicMaterial:!0});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}class Za extends mr{constructor(t){const e=xt.TILE_SIZE*2.5,i=new Sn({center:new U(t.position.x,e/2+(Math.random()-.5),t.position.y),parts:[{mesh:ye.createCylinder({radius:xt.TILE_SIZE/8,height:e,color:new pt(zt.WOOD)}),offset:new U(0,0,0)},{mesh:ye.createCone({radius:xt.TILE_SIZE/2,height:e-xt.TILE_SIZE/2,color:new pt(zt.DARK_GREEN)}),offset:new U(0,e*4/16,0)},{mesh:ye.createCone({radius:xt.TILE_SIZE/2,height:e-1.5*xt.TILE_SIZE/2,color:new pt(zt.DARK_GREEN)}),offset:new U(0,e*6/16,0)},{mesh:ye.createCone({radius:xt.TILE_SIZE/2,height:e-2*xt.TILE_SIZE/2,color:new pt(zt.WHITE)}),offset:new U(0,e*8/16,0)},{mesh:ye.createCone({radius:xt.TILE_SIZE/2,height:e-2.5*xt.TILE_SIZE/2,color:new pt(zt.DARK_GREEN)}),offset:new U(0,e*8/16,0)}]});super({mesh:i})}}class jb extends mr{constructor(t){const e=new Sn({center:t.position,parts:[{mesh:ye.createBox({width:t.width,height:xt.TILE_SIZE*.8,depth:t.height,color:new pt(zt.BLUE),transparent:{value:.5}}),offset:new U(0,0,0)},{mesh:ye.createBox({width:t.width,height:xt.TILE_SIZE,depth:t.height,color:new pt(zt.DIRT)}),offset:new U(0,-.8,0)}]});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ou={},po={},Mo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var t1=Mo.exports,Op;function e1(){return Op||(Op=1,function(r,t){(function(){var e,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",_=1,g=2,x=4,y=1,A=2,v=1,m=2,I=4,L=8,R=16,G=32,N=64,F=128,H=256,C=512,T=30,z="...",Q=800,$=16,it=1,ut=2,nt=3,dt=1/0,j=9007199254740991,At=17976931348623157e292,Lt=NaN,Ot=4294967295,ue=Ot-1,Le=Ot>>>1,at=[["ary",F],["bind",v],["bindKey",m],["curry",L],["curryRight",R],["flip",C],["partial",G],["partialRight",N],["rearg",H]],gt="[object Arguments]",Bt="[object Array]",bt="[object AsyncFunction]",Xt="[object Boolean]",de="[object Date]",Qt="[object DOMException]",Ge="[object Error]",Pe="[object Function]",pe="[object GeneratorFunction]",O="[object Map]",an="[object Number]",ge="[object Null]",ee="[object Object]",kt="[object Promise]",Oe="[object Proxy]",Ht="[object RegExp]",P="[object Set]",S="[object String]",Y="[object Symbol]",ct="[object Undefined]",ht="[object WeakMap]",st="[object WeakSet]",Gt="[object ArrayBuffer]",Mt="[object DataView]",It="[object Float32Array]",me="[object Float64Array]",_t="[object Int8Array]",Dt="[object Int16Array]",Yt="[object Int32Array]",Jt="[object Uint8Array]",Ut="[object Uint8ClampedArray]",fe="[object Uint16Array]",ne="[object Uint32Array]",De=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,yt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tt=/&(?:amp|lt|gt|quot|#39);/g,lt=/[&<>"']/g,Ct=RegExp(tt.source),Rt=RegExp(lt.source),re=/<%-([\s\S]+?)%>/g,Xe=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,On=/^\w*$/,oi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/[\\^$.*+?()[\]{}|]/g,Ro=RegExp(Wr.source),ai=/^\s+/,Vs=/\s/,Co=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Lo=/\{\n\/\* \[wrapped with (.+)\] \*/,Xr=/,? & /,Io=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qr=/[()=,{}\[\]\/\s]/,Po=/\\(\\)?/g,Do=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Uo=/\w*$/,ml=/^[-+]0x[0-9a-f]+$/i,_l=/^0b[01]+$/i,gl=/^\[object .+?Constructor\]$/,vl=/^0o[0-7]+$/i,xl=/^(?:0|[1-9]\d*)$/,w=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",Pt=q+mt+Tt,Ft="\\u2700-\\u27bf",jt="a-z\\xdf-\\xf6\\xf8-\\xff",te="\\xac\\xb1\\xd7\\xf7",qt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",xe="\\u2000-\\u206f",we=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ye="A-Z\\xc0-\\xd6\\xd8-\\xde",Ve="\\ufe0e\\ufe0f",Me=te+qt+xe+we,Wt="['’]",en="["+K+"]",Te="["+Me+"]",mn="["+Pt+"]",Ai="\\d+",En="["+Ft+"]",Yi="["+jt+"]",Be="[^"+K+Me+Ai+Ft+jt+Ye+"]",_n="\\ud83c[\\udffb-\\udfff]",Ln="(?:"+mn+"|"+_n+")",ln="[^"+K+"]",cn="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",In="["+Ye+"]",mh="\\u200d",_h="(?:"+Yi+"|"+Be+")",Cm="(?:"+In+"|"+Be+")",gh="(?:"+Wt+"(?:d|ll|m|re|s|t|ve))?",vh="(?:"+Wt+"(?:D|LL|M|RE|S|T|VE))?",xh=Ln+"?",Mh="["+Ve+"]?",Lm="(?:"+mh+"(?:"+[ln,cn,_r].join("|")+")"+Mh+xh+")*",Im="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Pm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Sh=Mh+xh+Lm,Dm="(?:"+[En,cn,_r].join("|")+")"+Sh,Um="(?:"+[ln+mn+"?",mn,cn,_r,en].join("|")+")",Nm=RegExp(Wt,"g"),Fm=RegExp(mn,"g"),Ml=RegExp(_n+"(?="+_n+")|"+Um+Sh,"g"),Om=RegExp([In+"?"+Yi+"+"+gh+"(?="+[Te,In,"$"].join("|")+")",Cm+"+"+vh+"(?="+[Te,In+_h,"$"].join("|")+")",In+"?"+_h+"+"+gh,In+"+"+vh,Pm,Im,Ai,Dm].join("|"),"g"),Bm=RegExp("["+mh+K+Pt+Ve+"]"),zm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Hm=-1,ke={};ke[It]=ke[me]=ke[_t]=ke[Dt]=ke[Yt]=ke[Jt]=ke[Ut]=ke[fe]=ke[ne]=!0,ke[gt]=ke[Bt]=ke[Gt]=ke[Xt]=ke[Mt]=ke[de]=ke[Ge]=ke[Pe]=ke[O]=ke[an]=ke[ee]=ke[Ht]=ke[P]=ke[S]=ke[ht]=!1;var He={};He[gt]=He[Bt]=He[Gt]=He[Mt]=He[Xt]=He[de]=He[It]=He[me]=He[_t]=He[Dt]=He[Yt]=He[O]=He[an]=He[ee]=He[Ht]=He[P]=He[S]=He[Y]=He[Jt]=He[Ut]=He[fe]=He[ne]=!0,He[Ge]=He[Pe]=He[ht]=!1;var Vm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},km={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Wm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Xm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},qm=parseFloat,Ym=parseInt,Eh=typeof Ka=="object"&&Ka&&Ka.Object===Object&&Ka,Zm=typeof self=="object"&&self&&self.Object===Object&&self,fn=Eh||Zm||Function("return this")(),Sl=t&&!t.nodeType&&t,gr=Sl&&!0&&r&&!r.nodeType&&r,yh=gr&&gr.exports===Sl,El=yh&&Eh.process,Zn=function(){try{var k=gr&&gr.require&&gr.require("util").types;return k||El&&El.binding&&El.binding("util")}catch{}}(),Th=Zn&&Zn.isArrayBuffer,wh=Zn&&Zn.isDate,Ah=Zn&&Zn.isMap,bh=Zn&&Zn.isRegExp,Rh=Zn&&Zn.isSet,Ch=Zn&&Zn.isTypedArray;function Bn(k,et,J){switch(J.length){case 0:return k.call(et);case 1:return k.call(et,J[0]);case 2:return k.call(et,J[0],J[1]);case 3:return k.call(et,J[0],J[1],J[2])}return k.apply(et,J)}function Km(k,et,J,Nt){for(var ie=-1,Re=k==null?0:k.length;++ie<Re;){var nn=k[ie];et(Nt,nn,J(nn),k)}return Nt}function Kn(k,et){for(var J=-1,Nt=k==null?0:k.length;++J<Nt&&et(k[J],J,k)!==!1;);return k}function $m(k,et){for(var J=k==null?0:k.length;J--&&et(k[J],J,k)!==!1;);return k}function Lh(k,et){for(var J=-1,Nt=k==null?0:k.length;++J<Nt;)if(!et(k[J],J,k))return!1;return!0}function Zi(k,et){for(var J=-1,Nt=k==null?0:k.length,ie=0,Re=[];++J<Nt;){var nn=k[J];et(nn,J,k)&&(Re[ie++]=nn)}return Re}function No(k,et){var J=k==null?0:k.length;return!!J&&Yr(k,et,0)>-1}function yl(k,et,J){for(var Nt=-1,ie=k==null?0:k.length;++Nt<ie;)if(J(et,k[Nt]))return!0;return!1}function qe(k,et){for(var J=-1,Nt=k==null?0:k.length,ie=Array(Nt);++J<Nt;)ie[J]=et(k[J],J,k);return ie}function Ki(k,et){for(var J=-1,Nt=et.length,ie=k.length;++J<Nt;)k[ie+J]=et[J];return k}function Tl(k,et,J,Nt){var ie=-1,Re=k==null?0:k.length;for(Nt&&Re&&(J=k[++ie]);++ie<Re;)J=et(J,k[ie],ie,k);return J}function Jm(k,et,J,Nt){var ie=k==null?0:k.length;for(Nt&&ie&&(J=k[--ie]);ie--;)J=et(J,k[ie],ie,k);return J}function wl(k,et){for(var J=-1,Nt=k==null?0:k.length;++J<Nt;)if(et(k[J],J,k))return!0;return!1}var Qm=Al("length");function jm(k){return k.split("")}function t_(k){return k.match(Io)||[]}function Ih(k,et,J){var Nt;return J(k,function(ie,Re,nn){if(et(ie,Re,nn))return Nt=Re,!1}),Nt}function Fo(k,et,J,Nt){for(var ie=k.length,Re=J+(Nt?1:-1);Nt?Re--:++Re<ie;)if(et(k[Re],Re,k))return Re;return-1}function Yr(k,et,J){return et===et?f_(k,et,J):Fo(k,Ph,J)}function e_(k,et,J,Nt){for(var ie=J-1,Re=k.length;++ie<Re;)if(Nt(k[ie],et))return ie;return-1}function Ph(k){return k!==k}function Dh(k,et){var J=k==null?0:k.length;return J?Rl(k,et)/J:Lt}function Al(k){return function(et){return et==null?e:et[k]}}function bl(k){return function(et){return k==null?e:k[et]}}function Uh(k,et,J,Nt,ie){return ie(k,function(Re,nn,ze){J=Nt?(Nt=!1,Re):et(J,Re,nn,ze)}),J}function n_(k,et){var J=k.length;for(k.sort(et);J--;)k[J]=k[J].value;return k}function Rl(k,et){for(var J,Nt=-1,ie=k.length;++Nt<ie;){var Re=et(k[Nt]);Re!==e&&(J=J===e?Re:J+Re)}return J}function Cl(k,et){for(var J=-1,Nt=Array(k);++J<k;)Nt[J]=et(J);return Nt}function i_(k,et){return qe(et,function(J){return[J,k[J]]})}function Nh(k){return k&&k.slice(0,zh(k)+1).replace(ai,"")}function zn(k){return function(et){return k(et)}}function Ll(k,et){return qe(et,function(J){return k[J]})}function ks(k,et){return k.has(et)}function Fh(k,et){for(var J=-1,Nt=k.length;++J<Nt&&Yr(et,k[J],0)>-1;);return J}function Oh(k,et){for(var J=k.length;J--&&Yr(et,k[J],0)>-1;);return J}function r_(k,et){for(var J=k.length,Nt=0;J--;)k[J]===et&&++Nt;return Nt}var s_=bl(Vm),o_=bl(km);function a_(k){return"\\"+Xm[k]}function l_(k,et){return k==null?e:k[et]}function Zr(k){return Bm.test(k)}function c_(k){return zm.test(k)}function u_(k){for(var et,J=[];!(et=k.next()).done;)J.push(et.value);return J}function Il(k){var et=-1,J=Array(k.size);return k.forEach(function(Nt,ie){J[++et]=[ie,Nt]}),J}function Bh(k,et){return function(J){return k(et(J))}}function $i(k,et){for(var J=-1,Nt=k.length,ie=0,Re=[];++J<Nt;){var nn=k[J];(nn===et||nn===p)&&(k[J]=p,Re[ie++]=J)}return Re}function Oo(k){var et=-1,J=Array(k.size);return k.forEach(function(Nt){J[++et]=Nt}),J}function h_(k){var et=-1,J=Array(k.size);return k.forEach(function(Nt){J[++et]=[Nt,Nt]}),J}function f_(k,et,J){for(var Nt=J-1,ie=k.length;++Nt<ie;)if(k[Nt]===et)return Nt;return-1}function d_(k,et,J){for(var Nt=J+1;Nt--;)if(k[Nt]===et)return Nt;return Nt}function Kr(k){return Zr(k)?m_(k):Qm(k)}function li(k){return Zr(k)?__(k):jm(k)}function zh(k){for(var et=k.length;et--&&Vs.test(k.charAt(et)););return et}var p_=bl(Wm);function m_(k){for(var et=Ml.lastIndex=0;Ml.test(k);)++et;return et}function __(k){return k.match(Ml)||[]}function g_(k){return k.match(Om)||[]}var v_=function k(et){et=et==null?fn:$r.defaults(fn.Object(),et,$r.pick(fn,Gm));var J=et.Array,Nt=et.Date,ie=et.Error,Re=et.Function,nn=et.Math,ze=et.Object,Pl=et.RegExp,x_=et.String,$n=et.TypeError,Bo=J.prototype,M_=Re.prototype,Jr=ze.prototype,zo=et["__core-js_shared__"],Go=M_.toString,Ie=Jr.hasOwnProperty,S_=0,Gh=function(){var n=/[^.]+$/.exec(zo&&zo.keys&&zo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ho=Jr.toString,E_=Go.call(ze),y_=fn._,T_=Pl("^"+Go.call(Ie).replace(Wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vo=yh?et.Buffer:e,Ji=et.Symbol,ko=et.Uint8Array,Hh=Vo?Vo.allocUnsafe:e,Wo=Bh(ze.getPrototypeOf,ze),Vh=ze.create,kh=Jr.propertyIsEnumerable,Xo=Bo.splice,Wh=Ji?Ji.isConcatSpreadable:e,Ws=Ji?Ji.iterator:e,vr=Ji?Ji.toStringTag:e,qo=function(){try{var n=yr(ze,"defineProperty");return n({},"",{}),n}catch{}}(),w_=et.clearTimeout!==fn.clearTimeout&&et.clearTimeout,A_=Nt&&Nt.now!==fn.Date.now&&Nt.now,b_=et.setTimeout!==fn.setTimeout&&et.setTimeout,Yo=nn.ceil,Zo=nn.floor,Dl=ze.getOwnPropertySymbols,R_=Vo?Vo.isBuffer:e,Xh=et.isFinite,C_=Bo.join,L_=Bh(ze.keys,ze),rn=nn.max,gn=nn.min,I_=Nt.now,P_=et.parseInt,qh=nn.random,D_=Bo.reverse,Ul=yr(et,"DataView"),Xs=yr(et,"Map"),Nl=yr(et,"Promise"),Qr=yr(et,"Set"),qs=yr(et,"WeakMap"),Ys=yr(ze,"create"),Ko=qs&&new qs,jr={},U_=Tr(Ul),N_=Tr(Xs),F_=Tr(Nl),O_=Tr(Qr),B_=Tr(qs),$o=Ji?Ji.prototype:e,Zs=$o?$o.valueOf:e,Yh=$o?$o.toString:e;function E(n){if(Ke(n)&&!se(n)&&!(n instanceof ve)){if(n instanceof Jn)return n;if(Ie.call(n,"__wrapped__"))return Kf(n)}return new Jn(n)}var ts=function(){function n(){}return function(s){if(!Ze(s))return{};if(Vh)return Vh(s);n.prototype=s;var l=new n;return n.prototype=e,l}}();function Jo(){}function Jn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}E.templateSettings={escape:re,evaluate:Xe,interpolate:tn,variable:"",imports:{_:E}},E.prototype=Jo.prototype,E.prototype.constructor=E,Jn.prototype=ts(Jo.prototype),Jn.prototype.constructor=Jn;function ve(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ot,this.__views__=[]}function z_(){var n=new ve(this.__wrapped__);return n.__actions__=Pn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Pn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Pn(this.__views__),n}function G_(){if(this.__filtered__){var n=new ve(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function H_(){var n=this.__wrapped__.value(),s=this.__dir__,l=se(n),d=s<0,M=l?n.length:0,b=jg(0,M,this.__views__),D=b.start,B=b.end,X=B-D,rt=d?B:D-1,ot=this.__iteratees__,ft=ot.length,St=0,Vt=gn(X,this.__takeCount__);if(!l||!d&&M==X&&Vt==X)return vf(n,this.__actions__);var Kt=[];t:for(;X--&&St<Vt;){rt+=s;for(var le=-1,$t=n[rt];++le<ft;){var _e=ot[le],Se=_e.iteratee,Vn=_e.type,wn=Se($t);if(Vn==ut)$t=wn;else if(!wn){if(Vn==it)continue t;break t}}Kt[St++]=$t}return Kt}ve.prototype=ts(Jo.prototype),ve.prototype.constructor=ve;function xr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function V_(){this.__data__=Ys?Ys(null):{},this.size=0}function k_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function W_(n){var s=this.__data__;if(Ys){var l=s[n];return l===h?e:l}return Ie.call(s,n)?s[n]:e}function X_(n){var s=this.__data__;return Ys?s[n]!==e:Ie.call(s,n)}function q_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ys&&s===e?h:s,this}xr.prototype.clear=V_,xr.prototype.delete=k_,xr.prototype.get=W_,xr.prototype.has=X_,xr.prototype.set=q_;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function Y_(){this.__data__=[],this.size=0}function Z_(n){var s=this.__data__,l=Qo(s,n);if(l<0)return!1;var d=s.length-1;return l==d?s.pop():Xo.call(s,l,1),--this.size,!0}function K_(n){var s=this.__data__,l=Qo(s,n);return l<0?e:s[l][1]}function $_(n){return Qo(this.__data__,n)>-1}function J_(n,s){var l=this.__data__,d=Qo(l,n);return d<0?(++this.size,l.push([n,s])):l[d][1]=s,this}bi.prototype.clear=Y_,bi.prototype.delete=Z_,bi.prototype.get=K_,bi.prototype.has=$_,bi.prototype.set=J_;function Ri(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function Q_(){this.size=0,this.__data__={hash:new xr,map:new(Xs||bi),string:new xr}}function j_(n){var s=ua(this,n).delete(n);return this.size-=s?1:0,s}function tg(n){return ua(this,n).get(n)}function eg(n){return ua(this,n).has(n)}function ng(n,s){var l=ua(this,n),d=l.size;return l.set(n,s),this.size+=l.size==d?0:1,this}Ri.prototype.clear=Q_,Ri.prototype.delete=j_,Ri.prototype.get=tg,Ri.prototype.has=eg,Ri.prototype.set=ng;function Mr(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++s<l;)this.add(n[s])}function ig(n){return this.__data__.set(n,h),this}function rg(n){return this.__data__.has(n)}Mr.prototype.add=Mr.prototype.push=ig,Mr.prototype.has=rg;function ci(n){var s=this.__data__=new bi(n);this.size=s.size}function sg(){this.__data__=new bi,this.size=0}function og(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function ag(n){return this.__data__.get(n)}function lg(n){return this.__data__.has(n)}function cg(n,s){var l=this.__data__;if(l instanceof bi){var d=l.__data__;if(!Xs||d.length<o-1)return d.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ri(d)}return l.set(n,s),this.size=l.size,this}ci.prototype.clear=sg,ci.prototype.delete=og,ci.prototype.get=ag,ci.prototype.has=lg,ci.prototype.set=cg;function Zh(n,s){var l=se(n),d=!l&&wr(n),M=!l&&!d&&nr(n),b=!l&&!d&&!M&&rs(n),D=l||d||M||b,B=D?Cl(n.length,x_):[],X=B.length;for(var rt in n)(s||Ie.call(n,rt))&&!(D&&(rt=="length"||M&&(rt=="offset"||rt=="parent")||b&&(rt=="buffer"||rt=="byteLength"||rt=="byteOffset")||Pi(rt,X)))&&B.push(rt);return B}function Kh(n){var s=n.length;return s?n[ql(0,s-1)]:e}function ug(n,s){return ha(Pn(n),Sr(s,0,n.length))}function hg(n){return ha(Pn(n))}function Fl(n,s,l){(l!==e&&!ui(n[s],l)||l===e&&!(s in n))&&Ci(n,s,l)}function Ks(n,s,l){var d=n[s];(!(Ie.call(n,s)&&ui(d,l))||l===e&&!(s in n))&&Ci(n,s,l)}function Qo(n,s){for(var l=n.length;l--;)if(ui(n[l][0],s))return l;return-1}function fg(n,s,l,d){return Qi(n,function(M,b,D){s(d,M,l(M),D)}),d}function $h(n,s){return n&&xi(s,un(s),n)}function dg(n,s){return n&&xi(s,Un(s),n)}function Ci(n,s,l){s=="__proto__"&&qo?qo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function Ol(n,s){for(var l=-1,d=s.length,M=J(d),b=n==null;++l<d;)M[l]=b?e:gc(n,s[l]);return M}function Sr(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function Qn(n,s,l,d,M,b){var D,B=s&_,X=s&g,rt=s&x;if(l&&(D=M?l(n,d,M,b):l(n)),D!==e)return D;if(!Ze(n))return n;var ot=se(n);if(ot){if(D=e0(n),!B)return Pn(n,D)}else{var ft=vn(n),St=ft==Pe||ft==pe;if(nr(n))return Sf(n,B);if(ft==ee||ft==gt||St&&!M){if(D=X||St?{}:Gf(n),!B)return X?Wg(n,dg(D,n)):kg(n,$h(D,n))}else{if(!He[ft])return M?n:{};D=n0(n,ft,B)}}b||(b=new ci);var Vt=b.get(n);if(Vt)return Vt;b.set(n,D),md(n)?n.forEach(function($t){D.add(Qn($t,s,l,$t,n,b))}):dd(n)&&n.forEach(function($t,_e){D.set(_e,Qn($t,s,l,_e,n,b))});var Kt=rt?X?ic:nc:X?Un:un,le=ot?e:Kt(n);return Kn(le||n,function($t,_e){le&&(_e=$t,$t=n[_e]),Ks(D,_e,Qn($t,s,l,_e,n,b))}),D}function pg(n){var s=un(n);return function(l){return Jh(l,n,s)}}function Jh(n,s,l){var d=l.length;if(n==null)return!d;for(n=ze(n);d--;){var M=l[d],b=s[M],D=n[M];if(D===e&&!(M in n)||!b(D))return!1}return!0}function Qh(n,s,l){if(typeof n!="function")throw new $n(c);return no(function(){n.apply(e,l)},s)}function $s(n,s,l,d){var M=-1,b=No,D=!0,B=n.length,X=[],rt=s.length;if(!B)return X;l&&(s=qe(s,zn(l))),d?(b=yl,D=!1):s.length>=o&&(b=ks,D=!1,s=new Mr(s));t:for(;++M<B;){var ot=n[M],ft=l==null?ot:l(ot);if(ot=d||ot!==0?ot:0,D&&ft===ft){for(var St=rt;St--;)if(s[St]===ft)continue t;X.push(ot)}else b(s,ft,d)||X.push(ot)}return X}var Qi=Af(vi),jh=Af(zl,!0);function mg(n,s){var l=!0;return Qi(n,function(d,M,b){return l=!!s(d,M,b),l}),l}function jo(n,s,l){for(var d=-1,M=n.length;++d<M;){var b=n[d],D=s(b);if(D!=null&&(B===e?D===D&&!Hn(D):l(D,B)))var B=D,X=b}return X}function _g(n,s,l,d){var M=n.length;for(l=oe(l),l<0&&(l=-l>M?0:M+l),d=d===e||d>M?M:oe(d),d<0&&(d+=M),d=l>d?0:gd(d);l<d;)n[l++]=s;return n}function tf(n,s){var l=[];return Qi(n,function(d,M,b){s(d,M,b)&&l.push(d)}),l}function dn(n,s,l,d,M){var b=-1,D=n.length;for(l||(l=r0),M||(M=[]);++b<D;){var B=n[b];s>0&&l(B)?s>1?dn(B,s-1,l,d,M):Ki(M,B):d||(M[M.length]=B)}return M}var Bl=bf(),ef=bf(!0);function vi(n,s){return n&&Bl(n,s,un)}function zl(n,s){return n&&ef(n,s,un)}function ta(n,s){return Zi(s,function(l){return Di(n[l])})}function Er(n,s){s=tr(s,n);for(var l=0,d=s.length;n!=null&&l<d;)n=n[Mi(s[l++])];return l&&l==d?n:e}function nf(n,s,l){var d=s(n);return se(n)?d:Ki(d,l(n))}function yn(n){return n==null?n===e?ct:ge:vr&&vr in ze(n)?Qg(n):h0(n)}function Gl(n,s){return n>s}function gg(n,s){return n!=null&&Ie.call(n,s)}function vg(n,s){return n!=null&&s in ze(n)}function xg(n,s,l){return n>=gn(s,l)&&n<rn(s,l)}function Hl(n,s,l){for(var d=l?yl:No,M=n[0].length,b=n.length,D=b,B=J(b),X=1/0,rt=[];D--;){var ot=n[D];D&&s&&(ot=qe(ot,zn(s))),X=gn(ot.length,X),B[D]=!l&&(s||M>=120&&ot.length>=120)?new Mr(D&&ot):e}ot=n[0];var ft=-1,St=B[0];t:for(;++ft<M&&rt.length<X;){var Vt=ot[ft],Kt=s?s(Vt):Vt;if(Vt=l||Vt!==0?Vt:0,!(St?ks(St,Kt):d(rt,Kt,l))){for(D=b;--D;){var le=B[D];if(!(le?ks(le,Kt):d(n[D],Kt,l)))continue t}St&&St.push(Kt),rt.push(Vt)}}return rt}function Mg(n,s,l,d){return vi(n,function(M,b,D){s(d,l(M),b,D)}),d}function Js(n,s,l){s=tr(s,n),n=Wf(n,s);var d=n==null?n:n[Mi(ti(s))];return d==null?e:Bn(d,n,l)}function rf(n){return Ke(n)&&yn(n)==gt}function Sg(n){return Ke(n)&&yn(n)==Gt}function Eg(n){return Ke(n)&&yn(n)==de}function Qs(n,s,l,d,M){return n===s?!0:n==null||s==null||!Ke(n)&&!Ke(s)?n!==n&&s!==s:yg(n,s,l,d,Qs,M)}function yg(n,s,l,d,M,b){var D=se(n),B=se(s),X=D?Bt:vn(n),rt=B?Bt:vn(s);X=X==gt?ee:X,rt=rt==gt?ee:rt;var ot=X==ee,ft=rt==ee,St=X==rt;if(St&&nr(n)){if(!nr(s))return!1;D=!0,ot=!1}if(St&&!ot)return b||(b=new ci),D||rs(n)?Of(n,s,l,d,M,b):$g(n,s,X,l,d,M,b);if(!(l&y)){var Vt=ot&&Ie.call(n,"__wrapped__"),Kt=ft&&Ie.call(s,"__wrapped__");if(Vt||Kt){var le=Vt?n.value():n,$t=Kt?s.value():s;return b||(b=new ci),M(le,$t,l,d,b)}}return St?(b||(b=new ci),Jg(n,s,l,d,M,b)):!1}function Tg(n){return Ke(n)&&vn(n)==O}function Vl(n,s,l,d){var M=l.length,b=M,D=!d;if(n==null)return!b;for(n=ze(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<b;){B=l[M];var X=B[0],rt=n[X],ot=B[1];if(D&&B[2]){if(rt===e&&!(X in n))return!1}else{var ft=new ci;if(d)var St=d(rt,ot,X,n,s,ft);if(!(St===e?Qs(ot,rt,y|A,d,ft):St))return!1}}return!0}function sf(n){if(!Ze(n)||o0(n))return!1;var s=Di(n)?T_:gl;return s.test(Tr(n))}function wg(n){return Ke(n)&&yn(n)==Ht}function Ag(n){return Ke(n)&&vn(n)==P}function bg(n){return Ke(n)&&ga(n.length)&&!!ke[yn(n)]}function of(n){return typeof n=="function"?n:n==null?Nn:typeof n=="object"?se(n)?cf(n[0],n[1]):lf(n):Rd(n)}function kl(n){if(!eo(n))return L_(n);var s=[];for(var l in ze(n))Ie.call(n,l)&&l!="constructor"&&s.push(l);return s}function Rg(n){if(!Ze(n))return u0(n);var s=eo(n),l=[];for(var d in n)d=="constructor"&&(s||!Ie.call(n,d))||l.push(d);return l}function Wl(n,s){return n<s}function af(n,s){var l=-1,d=Dn(n)?J(n.length):[];return Qi(n,function(M,b,D){d[++l]=s(M,b,D)}),d}function lf(n){var s=sc(n);return s.length==1&&s[0][2]?Vf(s[0][0],s[0][1]):function(l){return l===n||Vl(l,n,s)}}function cf(n,s){return ac(n)&&Hf(s)?Vf(Mi(n),s):function(l){var d=gc(l,n);return d===e&&d===s?vc(l,n):Qs(s,d,y|A)}}function ea(n,s,l,d,M){n!==s&&Bl(s,function(b,D){if(M||(M=new ci),Ze(b))Cg(n,s,D,l,ea,d,M);else{var B=d?d(cc(n,D),b,D+"",n,s,M):e;B===e&&(B=b),Fl(n,D,B)}},Un)}function Cg(n,s,l,d,M,b,D){var B=cc(n,l),X=cc(s,l),rt=D.get(X);if(rt){Fl(n,l,rt);return}var ot=b?b(B,X,l+"",n,s,D):e,ft=ot===e;if(ft){var St=se(X),Vt=!St&&nr(X),Kt=!St&&!Vt&&rs(X);ot=X,St||Vt||Kt?se(B)?ot=B:$e(B)?ot=Pn(B):Vt?(ft=!1,ot=Sf(X,!0)):Kt?(ft=!1,ot=Ef(X,!0)):ot=[]:io(X)||wr(X)?(ot=B,wr(B)?ot=vd(B):(!Ze(B)||Di(B))&&(ot=Gf(X))):ft=!1}ft&&(D.set(X,ot),M(ot,X,d,b,D),D.delete(X)),Fl(n,l,ot)}function uf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Pi(s,l)?n[s]:e}function hf(n,s,l){s.length?s=qe(s,function(b){return se(b)?function(D){return Er(D,b.length===1?b[0]:b)}:b}):s=[Nn];var d=-1;s=qe(s,zn(Zt()));var M=af(n,function(b,D,B){var X=qe(s,function(rt){return rt(b)});return{criteria:X,index:++d,value:b}});return n_(M,function(b,D){return Vg(b,D,l)})}function Lg(n,s){return ff(n,s,function(l,d){return vc(n,d)})}function ff(n,s,l){for(var d=-1,M=s.length,b={};++d<M;){var D=s[d],B=Er(n,D);l(B,D)&&js(b,tr(D,n),B)}return b}function Ig(n){return function(s){return Er(s,n)}}function Xl(n,s,l,d){var M=d?e_:Yr,b=-1,D=s.length,B=n;for(n===s&&(s=Pn(s)),l&&(B=qe(n,zn(l)));++b<D;)for(var X=0,rt=s[b],ot=l?l(rt):rt;(X=M(B,ot,X,d))>-1;)B!==n&&Xo.call(B,X,1),Xo.call(n,X,1);return n}function df(n,s){for(var l=n?s.length:0,d=l-1;l--;){var M=s[l];if(l==d||M!==b){var b=M;Pi(M)?Xo.call(n,M,1):Kl(n,M)}}return n}function ql(n,s){return n+Zo(qh()*(s-n+1))}function Pg(n,s,l,d){for(var M=-1,b=rn(Yo((s-n)/(l||1)),0),D=J(b);b--;)D[d?b:++M]=n,n+=l;return D}function Yl(n,s){var l="";if(!n||s<1||s>j)return l;do s%2&&(l+=n),s=Zo(s/2),s&&(n+=n);while(s);return l}function he(n,s){return uc(kf(n,s,Nn),n+"")}function Dg(n){return Kh(ss(n))}function Ug(n,s){var l=ss(n);return ha(l,Sr(s,0,l.length))}function js(n,s,l,d){if(!Ze(n))return n;s=tr(s,n);for(var M=-1,b=s.length,D=b-1,B=n;B!=null&&++M<b;){var X=Mi(s[M]),rt=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=D){var ot=B[X];rt=d?d(ot,X,B):e,rt===e&&(rt=Ze(ot)?ot:Pi(s[M+1])?[]:{})}Ks(B,X,rt),B=B[X]}return n}var pf=Ko?function(n,s){return Ko.set(n,s),n}:Nn,Ng=qo?function(n,s){return qo(n,"toString",{configurable:!0,enumerable:!1,value:Mc(s),writable:!0})}:Nn;function Fg(n){return ha(ss(n))}function jn(n,s,l){var d=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var b=J(M);++d<M;)b[d]=n[d+s];return b}function Og(n,s){var l;return Qi(n,function(d,M,b){return l=s(d,M,b),!l}),!!l}function na(n,s,l){var d=0,M=n==null?d:n.length;if(typeof s=="number"&&s===s&&M<=Le){for(;d<M;){var b=d+M>>>1,D=n[b];D!==null&&!Hn(D)&&(l?D<=s:D<s)?d=b+1:M=b}return M}return Zl(n,s,Nn,l)}function Zl(n,s,l,d){var M=0,b=n==null?0:n.length;if(b===0)return 0;s=l(s);for(var D=s!==s,B=s===null,X=Hn(s),rt=s===e;M<b;){var ot=Zo((M+b)/2),ft=l(n[ot]),St=ft!==e,Vt=ft===null,Kt=ft===ft,le=Hn(ft);if(D)var $t=d||Kt;else rt?$t=Kt&&(d||St):B?$t=Kt&&St&&(d||!Vt):X?$t=Kt&&St&&!Vt&&(d||!le):Vt||le?$t=!1:$t=d?ft<=s:ft<s;$t?M=ot+1:b=ot}return gn(b,ue)}function mf(n,s){for(var l=-1,d=n.length,M=0,b=[];++l<d;){var D=n[l],B=s?s(D):D;if(!l||!ui(B,X)){var X=B;b[M++]=D===0?0:D}}return b}function _f(n){return typeof n=="number"?n:Hn(n)?Lt:+n}function Gn(n){if(typeof n=="string")return n;if(se(n))return qe(n,Gn)+"";if(Hn(n))return Yh?Yh.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function ji(n,s,l){var d=-1,M=No,b=n.length,D=!0,B=[],X=B;if(l)D=!1,M=yl;else if(b>=o){var rt=s?null:Zg(n);if(rt)return Oo(rt);D=!1,M=ks,X=new Mr}else X=s?[]:B;t:for(;++d<b;){var ot=n[d],ft=s?s(ot):ot;if(ot=l||ot!==0?ot:0,D&&ft===ft){for(var St=X.length;St--;)if(X[St]===ft)continue t;s&&X.push(ft),B.push(ot)}else M(X,ft,l)||(X!==B&&X.push(ft),B.push(ot))}return B}function Kl(n,s){return s=tr(s,n),n=Wf(n,s),n==null||delete n[Mi(ti(s))]}function gf(n,s,l,d){return js(n,s,l(Er(n,s)),d)}function ia(n,s,l,d){for(var M=n.length,b=d?M:-1;(d?b--:++b<M)&&s(n[b],b,n););return l?jn(n,d?0:b,d?b+1:M):jn(n,d?b+1:0,d?M:b)}function vf(n,s){var l=n;return l instanceof ve&&(l=l.value()),Tl(s,function(d,M){return M.func.apply(M.thisArg,Ki([d],M.args))},l)}function $l(n,s,l){var d=n.length;if(d<2)return d?ji(n[0]):[];for(var M=-1,b=J(d);++M<d;)for(var D=n[M],B=-1;++B<d;)B!=M&&(b[M]=$s(b[M]||D,n[B],s,l));return ji(dn(b,1),s,l)}function xf(n,s,l){for(var d=-1,M=n.length,b=s.length,D={};++d<M;){var B=d<b?s[d]:e;l(D,n[d],B)}return D}function Jl(n){return $e(n)?n:[]}function Ql(n){return typeof n=="function"?n:Nn}function tr(n,s){return se(n)?n:ac(n,s)?[n]:Zf(Ce(n))}var Bg=he;function er(n,s,l){var d=n.length;return l=l===e?d:l,!s&&l>=d?n:jn(n,s,l)}var Mf=w_||function(n){return fn.clearTimeout(n)};function Sf(n,s){if(s)return n.slice();var l=n.length,d=Hh?Hh(l):new n.constructor(l);return n.copy(d),d}function jl(n){var s=new n.constructor(n.byteLength);return new ko(s).set(new ko(n)),s}function zg(n,s){var l=s?jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Gg(n){var s=new n.constructor(n.source,Uo.exec(n));return s.lastIndex=n.lastIndex,s}function Hg(n){return Zs?ze(Zs.call(n)):{}}function Ef(n,s){var l=s?jl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function yf(n,s){if(n!==s){var l=n!==e,d=n===null,M=n===n,b=Hn(n),D=s!==e,B=s===null,X=s===s,rt=Hn(s);if(!B&&!rt&&!b&&n>s||b&&D&&X&&!B&&!rt||d&&D&&X||!l&&X||!M)return 1;if(!d&&!b&&!rt&&n<s||rt&&l&&M&&!d&&!b||B&&l&&M||!D&&M||!X)return-1}return 0}function Vg(n,s,l){for(var d=-1,M=n.criteria,b=s.criteria,D=M.length,B=l.length;++d<D;){var X=yf(M[d],b[d]);if(X){if(d>=B)return X;var rt=l[d];return X*(rt=="desc"?-1:1)}}return n.index-s.index}function Tf(n,s,l,d){for(var M=-1,b=n.length,D=l.length,B=-1,X=s.length,rt=rn(b-D,0),ot=J(X+rt),ft=!d;++B<X;)ot[B]=s[B];for(;++M<D;)(ft||M<b)&&(ot[l[M]]=n[M]);for(;rt--;)ot[B++]=n[M++];return ot}function wf(n,s,l,d){for(var M=-1,b=n.length,D=-1,B=l.length,X=-1,rt=s.length,ot=rn(b-B,0),ft=J(ot+rt),St=!d;++M<ot;)ft[M]=n[M];for(var Vt=M;++X<rt;)ft[Vt+X]=s[X];for(;++D<B;)(St||M<b)&&(ft[Vt+l[D]]=n[M++]);return ft}function Pn(n,s){var l=-1,d=n.length;for(s||(s=J(d));++l<d;)s[l]=n[l];return s}function xi(n,s,l,d){var M=!l;l||(l={});for(var b=-1,D=s.length;++b<D;){var B=s[b],X=d?d(l[B],n[B],B,l,n):e;X===e&&(X=n[B]),M?Ci(l,B,X):Ks(l,B,X)}return l}function kg(n,s){return xi(n,oc(n),s)}function Wg(n,s){return xi(n,Bf(n),s)}function ra(n,s){return function(l,d){var M=se(l)?Km:fg,b=s?s():{};return M(l,n,Zt(d,2),b)}}function es(n){return he(function(s,l){var d=-1,M=l.length,b=M>1?l[M-1]:e,D=M>2?l[2]:e;for(b=n.length>3&&typeof b=="function"?(M--,b):e,D&&Tn(l[0],l[1],D)&&(b=M<3?e:b,M=1),s=ze(s);++d<M;){var B=l[d];B&&n(s,B,d,b)}return s})}function Af(n,s){return function(l,d){if(l==null)return l;if(!Dn(l))return n(l,d);for(var M=l.length,b=s?M:-1,D=ze(l);(s?b--:++b<M)&&d(D[b],b,D)!==!1;);return l}}function bf(n){return function(s,l,d){for(var M=-1,b=ze(s),D=d(s),B=D.length;B--;){var X=D[n?B:++M];if(l(b[X],X,b)===!1)break}return s}}function Xg(n,s,l){var d=s&v,M=to(n);function b(){var D=this&&this!==fn&&this instanceof b?M:n;return D.apply(d?l:this,arguments)}return b}function Rf(n){return function(s){s=Ce(s);var l=Zr(s)?li(s):e,d=l?l[0]:s.charAt(0),M=l?er(l,1).join(""):s.slice(1);return d[n]()+M}}function ns(n){return function(s){return Tl(Ad(wd(s).replace(Nm,"")),n,"")}}function to(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=ts(n.prototype),d=n.apply(l,s);return Ze(d)?d:l}}function qg(n,s,l){var d=to(n);function M(){for(var b=arguments.length,D=J(b),B=b,X=is(M);B--;)D[B]=arguments[B];var rt=b<3&&D[0]!==X&&D[b-1]!==X?[]:$i(D,X);if(b-=rt.length,b<l)return Df(n,s,sa,M.placeholder,e,D,rt,e,e,l-b);var ot=this&&this!==fn&&this instanceof M?d:n;return Bn(ot,this,D)}return M}function Cf(n){return function(s,l,d){var M=ze(s);if(!Dn(s)){var b=Zt(l,3);s=un(s),l=function(B){return b(M[B],B,M)}}var D=n(s,l,d);return D>-1?M[b?s[D]:D]:e}}function Lf(n){return Ii(function(s){var l=s.length,d=l,M=Jn.prototype.thru;for(n&&s.reverse();d--;){var b=s[d];if(typeof b!="function")throw new $n(c);if(M&&!D&&ca(b)=="wrapper")var D=new Jn([],!0)}for(d=D?d:l;++d<l;){b=s[d];var B=ca(b),X=B=="wrapper"?rc(b):e;X&&lc(X[0])&&X[1]==(F|L|G|H)&&!X[4].length&&X[9]==1?D=D[ca(X[0])].apply(D,X[3]):D=b.length==1&&lc(b)?D[B]():D.thru(b)}return function(){var rt=arguments,ot=rt[0];if(D&&rt.length==1&&se(ot))return D.plant(ot).value();for(var ft=0,St=l?s[ft].apply(this,rt):ot;++ft<l;)St=s[ft].call(this,St);return St}})}function sa(n,s,l,d,M,b,D,B,X,rt){var ot=s&F,ft=s&v,St=s&m,Vt=s&(L|R),Kt=s&C,le=St?e:to(n);function $t(){for(var _e=arguments.length,Se=J(_e),Vn=_e;Vn--;)Se[Vn]=arguments[Vn];if(Vt)var wn=is($t),kn=r_(Se,wn);if(d&&(Se=Tf(Se,d,M,Vt)),b&&(Se=wf(Se,b,D,Vt)),_e-=kn,Vt&&_e<rt){var Je=$i(Se,wn);return Df(n,s,sa,$t.placeholder,l,Se,Je,B,X,rt-_e)}var hi=ft?l:this,Ni=St?hi[n]:n;return _e=Se.length,B?Se=f0(Se,B):Kt&&_e>1&&Se.reverse(),ot&&X<_e&&(Se.length=X),this&&this!==fn&&this instanceof $t&&(Ni=le||to(Ni)),Ni.apply(hi,Se)}return $t}function If(n,s){return function(l,d){return Mg(l,n,s(d),{})}}function oa(n,s){return function(l,d){var M;if(l===e&&d===e)return s;if(l!==e&&(M=l),d!==e){if(M===e)return d;typeof l=="string"||typeof d=="string"?(l=Gn(l),d=Gn(d)):(l=_f(l),d=_f(d)),M=n(l,d)}return M}}function tc(n){return Ii(function(s){return s=qe(s,zn(Zt())),he(function(l){var d=this;return n(s,function(M){return Bn(M,d,l)})})})}function aa(n,s){s=s===e?" ":Gn(s);var l=s.length;if(l<2)return l?Yl(s,n):s;var d=Yl(s,Yo(n/Kr(s)));return Zr(s)?er(li(d),0,n).join(""):d.slice(0,n)}function Yg(n,s,l,d){var M=s&v,b=to(n);function D(){for(var B=-1,X=arguments.length,rt=-1,ot=d.length,ft=J(ot+X),St=this&&this!==fn&&this instanceof D?b:n;++rt<ot;)ft[rt]=d[rt];for(;X--;)ft[rt++]=arguments[++B];return Bn(St,M?l:this,ft)}return D}function Pf(n){return function(s,l,d){return d&&typeof d!="number"&&Tn(s,l,d)&&(l=d=e),s=Ui(s),l===e?(l=s,s=0):l=Ui(l),d=d===e?s<l?1:-1:Ui(d),Pg(s,l,d,n)}}function la(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ei(s),l=ei(l)),n(s,l)}}function Df(n,s,l,d,M,b,D,B,X,rt){var ot=s&L,ft=ot?D:e,St=ot?e:D,Vt=ot?b:e,Kt=ot?e:b;s|=ot?G:N,s&=~(ot?N:G),s&I||(s&=-4);var le=[n,s,M,Vt,ft,Kt,St,B,X,rt],$t=l.apply(e,le);return lc(n)&&Xf($t,le),$t.placeholder=d,qf($t,n,s)}function ec(n){var s=nn[n];return function(l,d){if(l=ei(l),d=d==null?0:gn(oe(d),292),d&&Xh(l)){var M=(Ce(l)+"e").split("e"),b=s(M[0]+"e"+(+M[1]+d));return M=(Ce(b)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return s(l)}}var Zg=Qr&&1/Oo(new Qr([,-0]))[1]==dt?function(n){return new Qr(n)}:yc;function Uf(n){return function(s){var l=vn(s);return l==O?Il(s):l==P?h_(s):i_(s,n(s))}}function Li(n,s,l,d,M,b,D,B){var X=s&m;if(!X&&typeof n!="function")throw new $n(c);var rt=d?d.length:0;if(rt||(s&=-97,d=M=e),D=D===e?D:rn(oe(D),0),B=B===e?B:oe(B),rt-=M?M.length:0,s&N){var ot=d,ft=M;d=M=e}var St=X?e:rc(n),Vt=[n,s,l,d,M,ot,ft,b,D,B];if(St&&c0(Vt,St),n=Vt[0],s=Vt[1],l=Vt[2],d=Vt[3],M=Vt[4],B=Vt[9]=Vt[9]===e?X?0:n.length:rn(Vt[9]-rt,0),!B&&s&(L|R)&&(s&=-25),!s||s==v)var Kt=Xg(n,s,l);else s==L||s==R?Kt=qg(n,s,B):(s==G||s==(v|G))&&!M.length?Kt=Yg(n,s,l,d):Kt=sa.apply(e,Vt);var le=St?pf:Xf;return qf(le(Kt,Vt),n,s)}function Nf(n,s,l,d){return n===e||ui(n,Jr[l])&&!Ie.call(d,l)?s:n}function Ff(n,s,l,d,M,b){return Ze(n)&&Ze(s)&&(b.set(s,n),ea(n,s,e,Ff,b),b.delete(s)),n}function Kg(n){return io(n)?e:n}function Of(n,s,l,d,M,b){var D=l&y,B=n.length,X=s.length;if(B!=X&&!(D&&X>B))return!1;var rt=b.get(n),ot=b.get(s);if(rt&&ot)return rt==s&&ot==n;var ft=-1,St=!0,Vt=l&A?new Mr:e;for(b.set(n,s),b.set(s,n);++ft<B;){var Kt=n[ft],le=s[ft];if(d)var $t=D?d(le,Kt,ft,s,n,b):d(Kt,le,ft,n,s,b);if($t!==e){if($t)continue;St=!1;break}if(Vt){if(!wl(s,function(_e,Se){if(!ks(Vt,Se)&&(Kt===_e||M(Kt,_e,l,d,b)))return Vt.push(Se)})){St=!1;break}}else if(!(Kt===le||M(Kt,le,l,d,b))){St=!1;break}}return b.delete(n),b.delete(s),St}function $g(n,s,l,d,M,b,D){switch(l){case Mt:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Gt:return!(n.byteLength!=s.byteLength||!b(new ko(n),new ko(s)));case Xt:case de:case an:return ui(+n,+s);case Ge:return n.name==s.name&&n.message==s.message;case Ht:case S:return n==s+"";case O:var B=Il;case P:var X=d&y;if(B||(B=Oo),n.size!=s.size&&!X)return!1;var rt=D.get(n);if(rt)return rt==s;d|=A,D.set(n,s);var ot=Of(B(n),B(s),d,M,b,D);return D.delete(n),ot;case Y:if(Zs)return Zs.call(n)==Zs.call(s)}return!1}function Jg(n,s,l,d,M,b){var D=l&y,B=nc(n),X=B.length,rt=nc(s),ot=rt.length;if(X!=ot&&!D)return!1;for(var ft=X;ft--;){var St=B[ft];if(!(D?St in s:Ie.call(s,St)))return!1}var Vt=b.get(n),Kt=b.get(s);if(Vt&&Kt)return Vt==s&&Kt==n;var le=!0;b.set(n,s),b.set(s,n);for(var $t=D;++ft<X;){St=B[ft];var _e=n[St],Se=s[St];if(d)var Vn=D?d(Se,_e,St,s,n,b):d(_e,Se,St,n,s,b);if(!(Vn===e?_e===Se||M(_e,Se,l,d,b):Vn)){le=!1;break}$t||($t=St=="constructor")}if(le&&!$t){var wn=n.constructor,kn=s.constructor;wn!=kn&&"constructor"in n&&"constructor"in s&&!(typeof wn=="function"&&wn instanceof wn&&typeof kn=="function"&&kn instanceof kn)&&(le=!1)}return b.delete(n),b.delete(s),le}function Ii(n){return uc(kf(n,e,Qf),n+"")}function nc(n){return nf(n,un,oc)}function ic(n){return nf(n,Un,Bf)}var rc=Ko?function(n){return Ko.get(n)}:yc;function ca(n){for(var s=n.name+"",l=jr[s],d=Ie.call(jr,s)?l.length:0;d--;){var M=l[d],b=M.func;if(b==null||b==n)return M.name}return s}function is(n){var s=Ie.call(E,"placeholder")?E:n;return s.placeholder}function Zt(){var n=E.iteratee||Sc;return n=n===Sc?of:n,arguments.length?n(arguments[0],arguments[1]):n}function ua(n,s){var l=n.__data__;return s0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function sc(n){for(var s=un(n),l=s.length;l--;){var d=s[l],M=n[d];s[l]=[d,M,Hf(M)]}return s}function yr(n,s){var l=l_(n,s);return sf(l)?l:e}function Qg(n){var s=Ie.call(n,vr),l=n[vr];try{n[vr]=e;var d=!0}catch{}var M=Ho.call(n);return d&&(s?n[vr]=l:delete n[vr]),M}var oc=Dl?function(n){return n==null?[]:(n=ze(n),Zi(Dl(n),function(s){return kh.call(n,s)}))}:Tc,Bf=Dl?function(n){for(var s=[];n;)Ki(s,oc(n)),n=Wo(n);return s}:Tc,vn=yn;(Ul&&vn(new Ul(new ArrayBuffer(1)))!=Mt||Xs&&vn(new Xs)!=O||Nl&&vn(Nl.resolve())!=kt||Qr&&vn(new Qr)!=P||qs&&vn(new qs)!=ht)&&(vn=function(n){var s=yn(n),l=s==ee?n.constructor:e,d=l?Tr(l):"";if(d)switch(d){case U_:return Mt;case N_:return O;case F_:return kt;case O_:return P;case B_:return ht}return s});function jg(n,s,l){for(var d=-1,M=l.length;++d<M;){var b=l[d],D=b.size;switch(b.type){case"drop":n+=D;break;case"dropRight":s-=D;break;case"take":s=gn(s,n+D);break;case"takeRight":n=rn(n,s-D);break}}return{start:n,end:s}}function t0(n){var s=n.match(Lo);return s?s[1].split(Xr):[]}function zf(n,s,l){s=tr(s,n);for(var d=-1,M=s.length,b=!1;++d<M;){var D=Mi(s[d]);if(!(b=n!=null&&l(n,D)))break;n=n[D]}return b||++d!=M?b:(M=n==null?0:n.length,!!M&&ga(M)&&Pi(D,M)&&(se(n)||wr(n)))}function e0(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Ie.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Gf(n){return typeof n.constructor=="function"&&!eo(n)?ts(Wo(n)):{}}function n0(n,s,l){var d=n.constructor;switch(s){case Gt:return jl(n);case Xt:case de:return new d(+n);case Mt:return zg(n,l);case It:case me:case _t:case Dt:case Yt:case Jt:case Ut:case fe:case ne:return Ef(n,l);case O:return new d;case an:case S:return new d(n);case Ht:return Gg(n);case P:return new d;case Y:return Hg(n)}}function i0(n,s){var l=s.length;if(!l)return n;var d=l-1;return s[d]=(l>1?"& ":"")+s[d],s=s.join(l>2?", ":" "),n.replace(Co,`{
/* [wrapped with `+s+`] */
`)}function r0(n){return se(n)||wr(n)||!!(Wh&&n&&n[Wh])}function Pi(n,s){var l=typeof n;return s=s??j,!!s&&(l=="number"||l!="symbol"&&xl.test(n))&&n>-1&&n%1==0&&n<s}function Tn(n,s,l){if(!Ze(l))return!1;var d=typeof s;return(d=="number"?Dn(l)&&Pi(s,l.length):d=="string"&&s in l)?ui(l[s],n):!1}function ac(n,s){if(se(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Hn(n)?!0:On.test(n)||!be.test(n)||s!=null&&n in ze(s)}function s0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function lc(n){var s=ca(n),l=E[s];if(typeof l!="function"||!(s in ve.prototype))return!1;if(n===l)return!0;var d=rc(l);return!!d&&n===d[0]}function o0(n){return!!Gh&&Gh in n}var a0=zo?Di:wc;function eo(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Jr;return n===l}function Hf(n){return n===n&&!Ze(n)}function Vf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in ze(l))}}function l0(n){var s=ma(n,function(d){return l.size===f&&l.clear(),d}),l=s.cache;return s}function c0(n,s){var l=n[1],d=s[1],M=l|d,b=M<(v|m|F),D=d==F&&l==L||d==F&&l==H&&n[7].length<=s[8]||d==(F|H)&&s[7].length<=s[8]&&l==L;if(!(b||D))return n;d&v&&(n[2]=s[2],M|=l&v?0:I);var B=s[3];if(B){var X=n[3];n[3]=X?Tf(X,B,s[4]):B,n[4]=X?$i(n[3],p):s[4]}return B=s[5],B&&(X=n[5],n[5]=X?wf(X,B,s[6]):B,n[6]=X?$i(n[5],p):s[6]),B=s[7],B&&(n[7]=B),d&F&&(n[8]=n[8]==null?s[8]:gn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function u0(n){var s=[];if(n!=null)for(var l in ze(n))s.push(l);return s}function h0(n){return Ho.call(n)}function kf(n,s,l){return s=rn(s===e?n.length-1:s,0),function(){for(var d=arguments,M=-1,b=rn(d.length-s,0),D=J(b);++M<b;)D[M]=d[s+M];M=-1;for(var B=J(s+1);++M<s;)B[M]=d[M];return B[s]=l(D),Bn(n,this,B)}}function Wf(n,s){return s.length<2?n:Er(n,jn(s,0,-1))}function f0(n,s){for(var l=n.length,d=gn(s.length,l),M=Pn(n);d--;){var b=s[d];n[d]=Pi(b,l)?M[b]:e}return n}function cc(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Xf=Yf(pf),no=b_||function(n,s){return fn.setTimeout(n,s)},uc=Yf(Ng);function qf(n,s,l){var d=s+"";return uc(n,i0(d,d0(t0(d),l)))}function Yf(n){var s=0,l=0;return function(){var d=I_(),M=$-(d-l);if(l=d,M>0){if(++s>=Q)return arguments[0]}else s=0;return n.apply(e,arguments)}}function ha(n,s){var l=-1,d=n.length,M=d-1;for(s=s===e?d:s;++l<s;){var b=ql(l,M),D=n[b];n[b]=n[l],n[l]=D}return n.length=s,n}var Zf=l0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(oi,function(l,d,M,b){s.push(M?b.replace(Po,"$1"):d||l)}),s});function Mi(n){if(typeof n=="string"||Hn(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Tr(n){if(n!=null){try{return Go.call(n)}catch{}try{return n+""}catch{}}return""}function d0(n,s){return Kn(at,function(l){var d="_."+l[0];s&l[1]&&!No(n,d)&&n.push(d)}),n.sort()}function Kf(n){if(n instanceof ve)return n.clone();var s=new Jn(n.__wrapped__,n.__chain__);return s.__actions__=Pn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function p0(n,s,l){(l?Tn(n,s,l):s===e)?s=1:s=rn(oe(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var M=0,b=0,D=J(Yo(d/s));M<d;)D[b++]=jn(n,M,M+=s);return D}function m0(n){for(var s=-1,l=n==null?0:n.length,d=0,M=[];++s<l;){var b=n[s];b&&(M[d++]=b)}return M}function _0(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),l=arguments[0],d=n;d--;)s[d-1]=arguments[d];return Ki(se(l)?Pn(l):[l],dn(s,1))}var g0=he(function(n,s){return $e(n)?$s(n,dn(s,1,$e,!0)):[]}),v0=he(function(n,s){var l=ti(s);return $e(l)&&(l=e),$e(n)?$s(n,dn(s,1,$e,!0),Zt(l,2)):[]}),x0=he(function(n,s){var l=ti(s);return $e(l)&&(l=e),$e(n)?$s(n,dn(s,1,$e,!0),e,l):[]});function M0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:oe(s),jn(n,s<0?0:s,d)):[]}function S0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:oe(s),s=d-s,jn(n,0,s<0?0:s)):[]}function E0(n,s){return n&&n.length?ia(n,Zt(s,3),!0,!0):[]}function y0(n,s){return n&&n.length?ia(n,Zt(s,3),!0):[]}function T0(n,s,l,d){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&Tn(n,s,l)&&(l=0,d=M),_g(n,s,l,d)):[]}function $f(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:oe(l);return M<0&&(M=rn(d+M,0)),Fo(n,Zt(s,3),M)}function Jf(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d-1;return l!==e&&(M=oe(l),M=l<0?rn(d+M,0):gn(M,d-1)),Fo(n,Zt(s,3),M,!0)}function Qf(n){var s=n==null?0:n.length;return s?dn(n,1):[]}function w0(n){var s=n==null?0:n.length;return s?dn(n,dt):[]}function A0(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:oe(s),dn(n,s)):[]}function b0(n){for(var s=-1,l=n==null?0:n.length,d={};++s<l;){var M=n[s];d[M[0]]=M[1]}return d}function jf(n){return n&&n.length?n[0]:e}function R0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:oe(l);return M<0&&(M=rn(d+M,0)),Yr(n,s,M)}function C0(n){var s=n==null?0:n.length;return s?jn(n,0,-1):[]}var L0=he(function(n){var s=qe(n,Jl);return s.length&&s[0]===n[0]?Hl(s):[]}),I0=he(function(n){var s=ti(n),l=qe(n,Jl);return s===ti(l)?s=e:l.pop(),l.length&&l[0]===n[0]?Hl(l,Zt(s,2)):[]}),P0=he(function(n){var s=ti(n),l=qe(n,Jl);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?Hl(l,e,s):[]});function D0(n,s){return n==null?"":C_.call(n,s)}function ti(n){var s=n==null?0:n.length;return s?n[s-1]:e}function U0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d;return l!==e&&(M=oe(l),M=M<0?rn(d+M,0):gn(M,d-1)),s===s?d_(n,s,M):Fo(n,Ph,M,!0)}function N0(n,s){return n&&n.length?uf(n,oe(s)):e}var F0=he(td);function td(n,s){return n&&n.length&&s&&s.length?Xl(n,s):n}function O0(n,s,l){return n&&n.length&&s&&s.length?Xl(n,s,Zt(l,2)):n}function B0(n,s,l){return n&&n.length&&s&&s.length?Xl(n,s,e,l):n}var z0=Ii(function(n,s){var l=n==null?0:n.length,d=Ol(n,s);return df(n,qe(s,function(M){return Pi(M,l)?+M:M}).sort(yf)),d});function G0(n,s){var l=[];if(!(n&&n.length))return l;var d=-1,M=[],b=n.length;for(s=Zt(s,3);++d<b;){var D=n[d];s(D,d,n)&&(l.push(D),M.push(d))}return df(n,M),l}function hc(n){return n==null?n:D_.call(n)}function H0(n,s,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&Tn(n,s,l)?(s=0,l=d):(s=s==null?0:oe(s),l=l===e?d:oe(l)),jn(n,s,l)):[]}function V0(n,s){return na(n,s)}function k0(n,s,l){return Zl(n,s,Zt(l,2))}function W0(n,s){var l=n==null?0:n.length;if(l){var d=na(n,s);if(d<l&&ui(n[d],s))return d}return-1}function X0(n,s){return na(n,s,!0)}function q0(n,s,l){return Zl(n,s,Zt(l,2),!0)}function Y0(n,s){var l=n==null?0:n.length;if(l){var d=na(n,s,!0)-1;if(ui(n[d],s))return d}return-1}function Z0(n){return n&&n.length?mf(n):[]}function K0(n,s){return n&&n.length?mf(n,Zt(s,2)):[]}function $0(n){var s=n==null?0:n.length;return s?jn(n,1,s):[]}function J0(n,s,l){return n&&n.length?(s=l||s===e?1:oe(s),jn(n,0,s<0?0:s)):[]}function Q0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:oe(s),s=d-s,jn(n,s<0?0:s,d)):[]}function j0(n,s){return n&&n.length?ia(n,Zt(s,3),!1,!0):[]}function tv(n,s){return n&&n.length?ia(n,Zt(s,3)):[]}var ev=he(function(n){return ji(dn(n,1,$e,!0))}),nv=he(function(n){var s=ti(n);return $e(s)&&(s=e),ji(dn(n,1,$e,!0),Zt(s,2))}),iv=he(function(n){var s=ti(n);return s=typeof s=="function"?s:e,ji(dn(n,1,$e,!0),e,s)});function rv(n){return n&&n.length?ji(n):[]}function sv(n,s){return n&&n.length?ji(n,Zt(s,2)):[]}function ov(n,s){return s=typeof s=="function"?s:e,n&&n.length?ji(n,e,s):[]}function fc(n){if(!(n&&n.length))return[];var s=0;return n=Zi(n,function(l){if($e(l))return s=rn(l.length,s),!0}),Cl(s,function(l){return qe(n,Al(l))})}function ed(n,s){if(!(n&&n.length))return[];var l=fc(n);return s==null?l:qe(l,function(d){return Bn(s,e,d)})}var av=he(function(n,s){return $e(n)?$s(n,s):[]}),lv=he(function(n){return $l(Zi(n,$e))}),cv=he(function(n){var s=ti(n);return $e(s)&&(s=e),$l(Zi(n,$e),Zt(s,2))}),uv=he(function(n){var s=ti(n);return s=typeof s=="function"?s:e,$l(Zi(n,$e),e,s)}),hv=he(fc);function fv(n,s){return xf(n||[],s||[],Ks)}function dv(n,s){return xf(n||[],s||[],js)}var pv=he(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,ed(n,l)});function nd(n){var s=E(n);return s.__chain__=!0,s}function mv(n,s){return s(n),n}function fa(n,s){return s(n)}var _v=Ii(function(n){var s=n.length,l=s?n[0]:0,d=this.__wrapped__,M=function(b){return Ol(b,n)};return s>1||this.__actions__.length||!(d instanceof ve)||!Pi(l)?this.thru(M):(d=d.slice(l,+l+(s?1:0)),d.__actions__.push({func:fa,args:[M],thisArg:e}),new Jn(d,this.__chain__).thru(function(b){return s&&!b.length&&b.push(e),b}))});function gv(){return nd(this)}function vv(){return new Jn(this.value(),this.__chain__)}function xv(){this.__values__===e&&(this.__values__=_d(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function Mv(){return this}function Sv(n){for(var s,l=this;l instanceof Jo;){var d=Kf(l);d.__index__=0,d.__values__=e,s?M.__wrapped__=d:s=d;var M=d;l=l.__wrapped__}return M.__wrapped__=n,s}function Ev(){var n=this.__wrapped__;if(n instanceof ve){var s=n;return this.__actions__.length&&(s=new ve(this)),s=s.reverse(),s.__actions__.push({func:fa,args:[hc],thisArg:e}),new Jn(s,this.__chain__)}return this.thru(hc)}function yv(){return vf(this.__wrapped__,this.__actions__)}var Tv=ra(function(n,s,l){Ie.call(n,l)?++n[l]:Ci(n,l,1)});function wv(n,s,l){var d=se(n)?Lh:mg;return l&&Tn(n,s,l)&&(s=e),d(n,Zt(s,3))}function Av(n,s){var l=se(n)?Zi:tf;return l(n,Zt(s,3))}var bv=Cf($f),Rv=Cf(Jf);function Cv(n,s){return dn(da(n,s),1)}function Lv(n,s){return dn(da(n,s),dt)}function Iv(n,s,l){return l=l===e?1:oe(l),dn(da(n,s),l)}function id(n,s){var l=se(n)?Kn:Qi;return l(n,Zt(s,3))}function rd(n,s){var l=se(n)?$m:jh;return l(n,Zt(s,3))}var Pv=ra(function(n,s,l){Ie.call(n,l)?n[l].push(s):Ci(n,l,[s])});function Dv(n,s,l,d){n=Dn(n)?n:ss(n),l=l&&!d?oe(l):0;var M=n.length;return l<0&&(l=rn(M+l,0)),va(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Yr(n,s,l)>-1}var Uv=he(function(n,s,l){var d=-1,M=typeof s=="function",b=Dn(n)?J(n.length):[];return Qi(n,function(D){b[++d]=M?Bn(s,D,l):Js(D,s,l)}),b}),Nv=ra(function(n,s,l){Ci(n,l,s)});function da(n,s){var l=se(n)?qe:af;return l(n,Zt(s,3))}function Fv(n,s,l,d){return n==null?[]:(se(s)||(s=s==null?[]:[s]),l=d?e:l,se(l)||(l=l==null?[]:[l]),hf(n,s,l))}var Ov=ra(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function Bv(n,s,l){var d=se(n)?Tl:Uh,M=arguments.length<3;return d(n,Zt(s,4),l,M,Qi)}function zv(n,s,l){var d=se(n)?Jm:Uh,M=arguments.length<3;return d(n,Zt(s,4),l,M,jh)}function Gv(n,s){var l=se(n)?Zi:tf;return l(n,_a(Zt(s,3)))}function Hv(n){var s=se(n)?Kh:Dg;return s(n)}function Vv(n,s,l){(l?Tn(n,s,l):s===e)?s=1:s=oe(s);var d=se(n)?ug:Ug;return d(n,s)}function kv(n){var s=se(n)?hg:Fg;return s(n)}function Wv(n){if(n==null)return 0;if(Dn(n))return va(n)?Kr(n):n.length;var s=vn(n);return s==O||s==P?n.size:kl(n).length}function Xv(n,s,l){var d=se(n)?wl:Og;return l&&Tn(n,s,l)&&(s=e),d(n,Zt(s,3))}var qv=he(function(n,s){if(n==null)return[];var l=s.length;return l>1&&Tn(n,s[0],s[1])?s=[]:l>2&&Tn(s[0],s[1],s[2])&&(s=[s[0]]),hf(n,dn(s,1),[])}),pa=A_||function(){return fn.Date.now()};function Yv(n,s){if(typeof s!="function")throw new $n(c);return n=oe(n),function(){if(--n<1)return s.apply(this,arguments)}}function sd(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,Li(n,F,e,e,e,e,s)}function od(n,s){var l;if(typeof s!="function")throw new $n(c);return n=oe(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var dc=he(function(n,s,l){var d=v;if(l.length){var M=$i(l,is(dc));d|=G}return Li(n,d,s,l,M)}),ad=he(function(n,s,l){var d=v|m;if(l.length){var M=$i(l,is(ad));d|=G}return Li(s,d,n,l,M)});function ld(n,s,l){s=l?e:s;var d=Li(n,L,e,e,e,e,e,s);return d.placeholder=ld.placeholder,d}function cd(n,s,l){s=l?e:s;var d=Li(n,R,e,e,e,e,e,s);return d.placeholder=cd.placeholder,d}function ud(n,s,l){var d,M,b,D,B,X,rt=0,ot=!1,ft=!1,St=!0;if(typeof n!="function")throw new $n(c);s=ei(s)||0,Ze(l)&&(ot=!!l.leading,ft="maxWait"in l,b=ft?rn(ei(l.maxWait)||0,s):b,St="trailing"in l?!!l.trailing:St);function Vt(Je){var hi=d,Ni=M;return d=M=e,rt=Je,D=n.apply(Ni,hi),D}function Kt(Je){return rt=Je,B=no(_e,s),ot?Vt(Je):D}function le(Je){var hi=Je-X,Ni=Je-rt,Cd=s-hi;return ft?gn(Cd,b-Ni):Cd}function $t(Je){var hi=Je-X,Ni=Je-rt;return X===e||hi>=s||hi<0||ft&&Ni>=b}function _e(){var Je=pa();if($t(Je))return Se(Je);B=no(_e,le(Je))}function Se(Je){return B=e,St&&d?Vt(Je):(d=M=e,D)}function Vn(){B!==e&&Mf(B),rt=0,d=X=M=B=e}function wn(){return B===e?D:Se(pa())}function kn(){var Je=pa(),hi=$t(Je);if(d=arguments,M=this,X=Je,hi){if(B===e)return Kt(X);if(ft)return Mf(B),B=no(_e,s),Vt(X)}return B===e&&(B=no(_e,s)),D}return kn.cancel=Vn,kn.flush=wn,kn}var Zv=he(function(n,s){return Qh(n,1,s)}),Kv=he(function(n,s,l){return Qh(n,ei(s)||0,l)});function $v(n){return Li(n,C)}function ma(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new $n(c);var l=function(){var d=arguments,M=s?s.apply(this,d):d[0],b=l.cache;if(b.has(M))return b.get(M);var D=n.apply(this,d);return l.cache=b.set(M,D)||b,D};return l.cache=new(ma.Cache||Ri),l}ma.Cache=Ri;function _a(n){if(typeof n!="function")throw new $n(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function Jv(n){return od(2,n)}var Qv=Bg(function(n,s){s=s.length==1&&se(s[0])?qe(s[0],zn(Zt())):qe(dn(s,1),zn(Zt()));var l=s.length;return he(function(d){for(var M=-1,b=gn(d.length,l);++M<b;)d[M]=s[M].call(this,d[M]);return Bn(n,this,d)})}),pc=he(function(n,s){var l=$i(s,is(pc));return Li(n,G,e,s,l)}),hd=he(function(n,s){var l=$i(s,is(hd));return Li(n,N,e,s,l)}),jv=Ii(function(n,s){return Li(n,H,e,e,e,s)});function tx(n,s){if(typeof n!="function")throw new $n(c);return s=s===e?s:oe(s),he(n,s)}function ex(n,s){if(typeof n!="function")throw new $n(c);return s=s==null?0:rn(oe(s),0),he(function(l){var d=l[s],M=er(l,0,s);return d&&Ki(M,d),Bn(n,this,M)})}function nx(n,s,l){var d=!0,M=!0;if(typeof n!="function")throw new $n(c);return Ze(l)&&(d="leading"in l?!!l.leading:d,M="trailing"in l?!!l.trailing:M),ud(n,s,{leading:d,maxWait:s,trailing:M})}function ix(n){return sd(n,1)}function rx(n,s){return pc(Ql(s),n)}function sx(){if(!arguments.length)return[];var n=arguments[0];return se(n)?n:[n]}function ox(n){return Qn(n,x)}function ax(n,s){return s=typeof s=="function"?s:e,Qn(n,x,s)}function lx(n){return Qn(n,_|x)}function cx(n,s){return s=typeof s=="function"?s:e,Qn(n,_|x,s)}function ux(n,s){return s==null||Jh(n,s,un(s))}function ui(n,s){return n===s||n!==n&&s!==s}var hx=la(Gl),fx=la(function(n,s){return n>=s}),wr=rf(function(){return arguments}())?rf:function(n){return Ke(n)&&Ie.call(n,"callee")&&!kh.call(n,"callee")},se=J.isArray,dx=Th?zn(Th):Sg;function Dn(n){return n!=null&&ga(n.length)&&!Di(n)}function $e(n){return Ke(n)&&Dn(n)}function px(n){return n===!0||n===!1||Ke(n)&&yn(n)==Xt}var nr=R_||wc,mx=wh?zn(wh):Eg;function _x(n){return Ke(n)&&n.nodeType===1&&!io(n)}function gx(n){if(n==null)return!0;if(Dn(n)&&(se(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||rs(n)||wr(n)))return!n.length;var s=vn(n);if(s==O||s==P)return!n.size;if(eo(n))return!kl(n).length;for(var l in n)if(Ie.call(n,l))return!1;return!0}function vx(n,s){return Qs(n,s)}function xx(n,s,l){l=typeof l=="function"?l:e;var d=l?l(n,s):e;return d===e?Qs(n,s,e,l):!!d}function mc(n){if(!Ke(n))return!1;var s=yn(n);return s==Ge||s==Qt||typeof n.message=="string"&&typeof n.name=="string"&&!io(n)}function Mx(n){return typeof n=="number"&&Xh(n)}function Di(n){if(!Ze(n))return!1;var s=yn(n);return s==Pe||s==pe||s==bt||s==Oe}function fd(n){return typeof n=="number"&&n==oe(n)}function ga(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Ze(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Ke(n){return n!=null&&typeof n=="object"}var dd=Ah?zn(Ah):Tg;function Sx(n,s){return n===s||Vl(n,s,sc(s))}function Ex(n,s,l){return l=typeof l=="function"?l:e,Vl(n,s,sc(s),l)}function yx(n){return pd(n)&&n!=+n}function Tx(n){if(a0(n))throw new ie(a);return sf(n)}function wx(n){return n===null}function Ax(n){return n==null}function pd(n){return typeof n=="number"||Ke(n)&&yn(n)==an}function io(n){if(!Ke(n)||yn(n)!=ee)return!1;var s=Wo(n);if(s===null)return!0;var l=Ie.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Go.call(l)==E_}var _c=bh?zn(bh):wg;function bx(n){return fd(n)&&n>=-9007199254740991&&n<=j}var md=Rh?zn(Rh):Ag;function va(n){return typeof n=="string"||!se(n)&&Ke(n)&&yn(n)==S}function Hn(n){return typeof n=="symbol"||Ke(n)&&yn(n)==Y}var rs=Ch?zn(Ch):bg;function Rx(n){return n===e}function Cx(n){return Ke(n)&&vn(n)==ht}function Lx(n){return Ke(n)&&yn(n)==st}var Ix=la(Wl),Px=la(function(n,s){return n<=s});function _d(n){if(!n)return[];if(Dn(n))return va(n)?li(n):Pn(n);if(Ws&&n[Ws])return u_(n[Ws]());var s=vn(n),l=s==O?Il:s==P?Oo:ss;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=ei(n),n===dt||n===-1/0){var s=n<0?-1:1;return s*At}return n===n?n:0}function oe(n){var s=Ui(n),l=s%1;return s===s?l?s-l:s:0}function gd(n){return n?Sr(oe(n),0,Ot):0}function ei(n){if(typeof n=="number")return n;if(Hn(n))return Lt;if(Ze(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Ze(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Nh(n);var l=_l.test(n);return l||vl.test(n)?Ym(n.slice(2),l?2:8):ml.test(n)?Lt:+n}function vd(n){return xi(n,Un(n))}function Dx(n){return n?Sr(oe(n),-9007199254740991,j):n===0?n:0}function Ce(n){return n==null?"":Gn(n)}var Ux=es(function(n,s){if(eo(s)||Dn(s)){xi(s,un(s),n);return}for(var l in s)Ie.call(s,l)&&Ks(n,l,s[l])}),xd=es(function(n,s){xi(s,Un(s),n)}),xa=es(function(n,s,l,d){xi(s,Un(s),n,d)}),Nx=es(function(n,s,l,d){xi(s,un(s),n,d)}),Fx=Ii(Ol);function Ox(n,s){var l=ts(n);return s==null?l:$h(l,s)}var Bx=he(function(n,s){n=ze(n);var l=-1,d=s.length,M=d>2?s[2]:e;for(M&&Tn(s[0],s[1],M)&&(d=1);++l<d;)for(var b=s[l],D=Un(b),B=-1,X=D.length;++B<X;){var rt=D[B],ot=n[rt];(ot===e||ui(ot,Jr[rt])&&!Ie.call(n,rt))&&(n[rt]=b[rt])}return n}),zx=he(function(n){return n.push(e,Ff),Bn(Md,e,n)});function Gx(n,s){return Ih(n,Zt(s,3),vi)}function Hx(n,s){return Ih(n,Zt(s,3),zl)}function Vx(n,s){return n==null?n:Bl(n,Zt(s,3),Un)}function kx(n,s){return n==null?n:ef(n,Zt(s,3),Un)}function Wx(n,s){return n&&vi(n,Zt(s,3))}function Xx(n,s){return n&&zl(n,Zt(s,3))}function qx(n){return n==null?[]:ta(n,un(n))}function Yx(n){return n==null?[]:ta(n,Un(n))}function gc(n,s,l){var d=n==null?e:Er(n,s);return d===e?l:d}function Zx(n,s){return n!=null&&zf(n,s,gg)}function vc(n,s){return n!=null&&zf(n,s,vg)}var Kx=If(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ho.call(s)),n[s]=l},Mc(Nn)),$x=If(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Ho.call(s)),Ie.call(n,s)?n[s].push(l):n[s]=[l]},Zt),Jx=he(Js);function un(n){return Dn(n)?Zh(n):kl(n)}function Un(n){return Dn(n)?Zh(n,!0):Rg(n)}function Qx(n,s){var l={};return s=Zt(s,3),vi(n,function(d,M,b){Ci(l,s(d,M,b),d)}),l}function jx(n,s){var l={};return s=Zt(s,3),vi(n,function(d,M,b){Ci(l,M,s(d,M,b))}),l}var tM=es(function(n,s,l){ea(n,s,l)}),Md=es(function(n,s,l,d){ea(n,s,l,d)}),eM=Ii(function(n,s){var l={};if(n==null)return l;var d=!1;s=qe(s,function(b){return b=tr(b,n),d||(d=b.length>1),b}),xi(n,ic(n),l),d&&(l=Qn(l,_|g|x,Kg));for(var M=s.length;M--;)Kl(l,s[M]);return l});function nM(n,s){return Sd(n,_a(Zt(s)))}var iM=Ii(function(n,s){return n==null?{}:Lg(n,s)});function Sd(n,s){if(n==null)return{};var l=qe(ic(n),function(d){return[d]});return s=Zt(s),ff(n,l,function(d,M){return s(d,M[0])})}function rM(n,s,l){s=tr(s,n);var d=-1,M=s.length;for(M||(M=1,n=e);++d<M;){var b=n==null?e:n[Mi(s[d])];b===e&&(d=M,b=l),n=Di(b)?b.call(n):b}return n}function sM(n,s,l){return n==null?n:js(n,s,l)}function oM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:js(n,s,l,d)}var Ed=Uf(un),yd=Uf(Un);function aM(n,s,l){var d=se(n),M=d||nr(n)||rs(n);if(s=Zt(s,4),l==null){var b=n&&n.constructor;M?l=d?new b:[]:Ze(n)?l=Di(b)?ts(Wo(n)):{}:l={}}return(M?Kn:vi)(n,function(D,B,X){return s(l,D,B,X)}),l}function lM(n,s){return n==null?!0:Kl(n,s)}function cM(n,s,l){return n==null?n:gf(n,s,Ql(l))}function uM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:gf(n,s,Ql(l),d)}function ss(n){return n==null?[]:Ll(n,un(n))}function hM(n){return n==null?[]:Ll(n,Un(n))}function fM(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=ei(l),l=l===l?l:0),s!==e&&(s=ei(s),s=s===s?s:0),Sr(ei(n),s,l)}function dM(n,s,l){return s=Ui(s),l===e?(l=s,s=0):l=Ui(l),n=ei(n),xg(n,s,l)}function pM(n,s,l){if(l&&typeof l!="boolean"&&Tn(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Ui(n),s===e?(s=n,n=0):s=Ui(s)),n>s){var d=n;n=s,s=d}if(l||n%1||s%1){var M=qh();return gn(n+M*(s-n+qm("1e-"+((M+"").length-1))),s)}return ql(n,s)}var mM=ns(function(n,s,l){return s=s.toLowerCase(),n+(l?Td(s):s)});function Td(n){return xc(Ce(n).toLowerCase())}function wd(n){return n=Ce(n),n&&n.replace(w,s_).replace(Fm,"")}function _M(n,s,l){n=Ce(n),s=Gn(s);var d=n.length;l=l===e?d:Sr(oe(l),0,d);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function gM(n){return n=Ce(n),n&&Rt.test(n)?n.replace(lt,o_):n}function vM(n){return n=Ce(n),n&&Ro.test(n)?n.replace(Wr,"\\$&"):n}var xM=ns(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),MM=ns(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),SM=Rf("toLowerCase");function EM(n,s,l){n=Ce(n),s=oe(s);var d=s?Kr(n):0;if(!s||d>=s)return n;var M=(s-d)/2;return aa(Zo(M),l)+n+aa(Yo(M),l)}function yM(n,s,l){n=Ce(n),s=oe(s);var d=s?Kr(n):0;return s&&d<s?n+aa(s-d,l):n}function TM(n,s,l){n=Ce(n),s=oe(s);var d=s?Kr(n):0;return s&&d<s?aa(s-d,l)+n:n}function wM(n,s,l){return l||s==null?s=0:s&&(s=+s),P_(Ce(n).replace(ai,""),s||0)}function AM(n,s,l){return(l?Tn(n,s,l):s===e)?s=1:s=oe(s),Yl(Ce(n),s)}function bM(){var n=arguments,s=Ce(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var RM=ns(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function CM(n,s,l){return l&&typeof l!="number"&&Tn(n,s,l)&&(s=l=e),l=l===e?Ot:l>>>0,l?(n=Ce(n),n&&(typeof s=="string"||s!=null&&!_c(s))&&(s=Gn(s),!s&&Zr(n))?er(li(n),0,l):n.split(s,l)):[]}var LM=ns(function(n,s,l){return n+(l?" ":"")+xc(s)});function IM(n,s,l){return n=Ce(n),l=l==null?0:Sr(oe(l),0,n.length),s=Gn(s),n.slice(l,l+s.length)==s}function PM(n,s,l){var d=E.templateSettings;l&&Tn(n,s,l)&&(s=e),n=Ce(n),s=xa({},s,d,Nf);var M=xa({},s.imports,d.imports,Nf),b=un(M),D=Ll(M,b),B,X,rt=0,ot=s.interpolate||W,ft="__p += '",St=Pl((s.escape||W).source+"|"+ot.source+"|"+(ot===tn?Do:W).source+"|"+(s.evaluate||W).source+"|$","g"),Vt="//# sourceURL="+(Ie.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Hm+"]")+`
`;n.replace(St,function($t,_e,Se,Vn,wn,kn){return Se||(Se=Vn),ft+=n.slice(rt,kn).replace(Z,a_),_e&&(B=!0,ft+=`' +
__e(`+_e+`) +
'`),wn&&(X=!0,ft+=`';
`+wn+`;
__p += '`),Se&&(ft+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),rt=kn+$t.length,$t}),ft+=`';
`;var Kt=Ie.call(s,"variable")&&s.variable;if(!Kt)ft=`with (obj) {
`+ft+`
}
`;else if(qr.test(Kt))throw new ie(u);ft=(X?ft.replace(De,""):ft).replace(V,"$1").replace(yt,"$1;"),ft="function("+(Kt||"obj")+`) {
`+(Kt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ft+`return __p
}`;var le=bd(function(){return Re(b,Vt+"return "+ft).apply(e,D)});if(le.source=ft,mc(le))throw le;return le}function DM(n){return Ce(n).toLowerCase()}function UM(n){return Ce(n).toUpperCase()}function NM(n,s,l){if(n=Ce(n),n&&(l||s===e))return Nh(n);if(!n||!(s=Gn(s)))return n;var d=li(n),M=li(s),b=Fh(d,M),D=Oh(d,M)+1;return er(d,b,D).join("")}function FM(n,s,l){if(n=Ce(n),n&&(l||s===e))return n.slice(0,zh(n)+1);if(!n||!(s=Gn(s)))return n;var d=li(n),M=Oh(d,li(s))+1;return er(d,0,M).join("")}function OM(n,s,l){if(n=Ce(n),n&&(l||s===e))return n.replace(ai,"");if(!n||!(s=Gn(s)))return n;var d=li(n),M=Fh(d,li(s));return er(d,M).join("")}function BM(n,s){var l=T,d=z;if(Ze(s)){var M="separator"in s?s.separator:M;l="length"in s?oe(s.length):l,d="omission"in s?Gn(s.omission):d}n=Ce(n);var b=n.length;if(Zr(n)){var D=li(n);b=D.length}if(l>=b)return n;var B=l-Kr(d);if(B<1)return d;var X=D?er(D,0,B).join(""):n.slice(0,B);if(M===e)return X+d;if(D&&(B+=X.length-B),_c(M)){if(n.slice(B).search(M)){var rt,ot=X;for(M.global||(M=Pl(M.source,Ce(Uo.exec(M))+"g")),M.lastIndex=0;rt=M.exec(ot);)var ft=rt.index;X=X.slice(0,ft===e?B:ft)}}else if(n.indexOf(Gn(M),B)!=B){var St=X.lastIndexOf(M);St>-1&&(X=X.slice(0,St))}return X+d}function zM(n){return n=Ce(n),n&&Ct.test(n)?n.replace(tt,p_):n}var GM=ns(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),xc=Rf("toUpperCase");function Ad(n,s,l){return n=Ce(n),s=l?e:s,s===e?c_(n)?g_(n):t_(n):n.match(s)||[]}var bd=he(function(n,s){try{return Bn(n,e,s)}catch(l){return mc(l)?l:new ie(l)}}),HM=Ii(function(n,s){return Kn(s,function(l){l=Mi(l),Ci(n,l,dc(n[l],n))}),n});function VM(n){var s=n==null?0:n.length,l=Zt();return n=s?qe(n,function(d){if(typeof d[1]!="function")throw new $n(c);return[l(d[0]),d[1]]}):[],he(function(d){for(var M=-1;++M<s;){var b=n[M];if(Bn(b[0],this,d))return Bn(b[1],this,d)}})}function kM(n){return pg(Qn(n,_))}function Mc(n){return function(){return n}}function WM(n,s){return n==null||n!==n?s:n}var XM=Lf(),qM=Lf(!0);function Nn(n){return n}function Sc(n){return of(typeof n=="function"?n:Qn(n,_))}function YM(n){return lf(Qn(n,_))}function ZM(n,s){return cf(n,Qn(s,_))}var KM=he(function(n,s){return function(l){return Js(l,n,s)}}),$M=he(function(n,s){return function(l){return Js(n,l,s)}});function Ec(n,s,l){var d=un(s),M=ta(s,d);l==null&&!(Ze(s)&&(M.length||!d.length))&&(l=s,s=n,n=this,M=ta(s,un(s)));var b=!(Ze(l)&&"chain"in l)||!!l.chain,D=Di(n);return Kn(M,function(B){var X=s[B];n[B]=X,D&&(n.prototype[B]=function(){var rt=this.__chain__;if(b||rt){var ot=n(this.__wrapped__),ft=ot.__actions__=Pn(this.__actions__);return ft.push({func:X,args:arguments,thisArg:n}),ot.__chain__=rt,ot}return X.apply(n,Ki([this.value()],arguments))})}),n}function JM(){return fn._===this&&(fn._=y_),this}function yc(){}function QM(n){return n=oe(n),he(function(s){return uf(s,n)})}var jM=tc(qe),tS=tc(Lh),eS=tc(wl);function Rd(n){return ac(n)?Al(Mi(n)):Ig(n)}function nS(n){return function(s){return n==null?e:Er(n,s)}}var iS=Pf(),rS=Pf(!0);function Tc(){return[]}function wc(){return!1}function sS(){return{}}function oS(){return""}function aS(){return!0}function lS(n,s){if(n=oe(n),n<1||n>j)return[];var l=Ot,d=gn(n,Ot);s=Zt(s),n-=Ot;for(var M=Cl(d,s);++l<n;)s(l);return M}function cS(n){return se(n)?qe(n,Mi):Hn(n)?[n]:Pn(Zf(Ce(n)))}function uS(n){var s=++S_;return Ce(n)+s}var hS=oa(function(n,s){return n+s},0),fS=ec("ceil"),dS=oa(function(n,s){return n/s},1),pS=ec("floor");function mS(n){return n&&n.length?jo(n,Nn,Gl):e}function _S(n,s){return n&&n.length?jo(n,Zt(s,2),Gl):e}function gS(n){return Dh(n,Nn)}function vS(n,s){return Dh(n,Zt(s,2))}function xS(n){return n&&n.length?jo(n,Nn,Wl):e}function MS(n,s){return n&&n.length?jo(n,Zt(s,2),Wl):e}var SS=oa(function(n,s){return n*s},1),ES=ec("round"),yS=oa(function(n,s){return n-s},0);function TS(n){return n&&n.length?Rl(n,Nn):0}function wS(n,s){return n&&n.length?Rl(n,Zt(s,2)):0}return E.after=Yv,E.ary=sd,E.assign=Ux,E.assignIn=xd,E.assignInWith=xa,E.assignWith=Nx,E.at=Fx,E.before=od,E.bind=dc,E.bindAll=HM,E.bindKey=ad,E.castArray=sx,E.chain=nd,E.chunk=p0,E.compact=m0,E.concat=_0,E.cond=VM,E.conforms=kM,E.constant=Mc,E.countBy=Tv,E.create=Ox,E.curry=ld,E.curryRight=cd,E.debounce=ud,E.defaults=Bx,E.defaultsDeep=zx,E.defer=Zv,E.delay=Kv,E.difference=g0,E.differenceBy=v0,E.differenceWith=x0,E.drop=M0,E.dropRight=S0,E.dropRightWhile=E0,E.dropWhile=y0,E.fill=T0,E.filter=Av,E.flatMap=Cv,E.flatMapDeep=Lv,E.flatMapDepth=Iv,E.flatten=Qf,E.flattenDeep=w0,E.flattenDepth=A0,E.flip=$v,E.flow=XM,E.flowRight=qM,E.fromPairs=b0,E.functions=qx,E.functionsIn=Yx,E.groupBy=Pv,E.initial=C0,E.intersection=L0,E.intersectionBy=I0,E.intersectionWith=P0,E.invert=Kx,E.invertBy=$x,E.invokeMap=Uv,E.iteratee=Sc,E.keyBy=Nv,E.keys=un,E.keysIn=Un,E.map=da,E.mapKeys=Qx,E.mapValues=jx,E.matches=YM,E.matchesProperty=ZM,E.memoize=ma,E.merge=tM,E.mergeWith=Md,E.method=KM,E.methodOf=$M,E.mixin=Ec,E.negate=_a,E.nthArg=QM,E.omit=eM,E.omitBy=nM,E.once=Jv,E.orderBy=Fv,E.over=jM,E.overArgs=Qv,E.overEvery=tS,E.overSome=eS,E.partial=pc,E.partialRight=hd,E.partition=Ov,E.pick=iM,E.pickBy=Sd,E.property=Rd,E.propertyOf=nS,E.pull=F0,E.pullAll=td,E.pullAllBy=O0,E.pullAllWith=B0,E.pullAt=z0,E.range=iS,E.rangeRight=rS,E.rearg=jv,E.reject=Gv,E.remove=G0,E.rest=tx,E.reverse=hc,E.sampleSize=Vv,E.set=sM,E.setWith=oM,E.shuffle=kv,E.slice=H0,E.sortBy=qv,E.sortedUniq=Z0,E.sortedUniqBy=K0,E.split=CM,E.spread=ex,E.tail=$0,E.take=J0,E.takeRight=Q0,E.takeRightWhile=j0,E.takeWhile=tv,E.tap=mv,E.throttle=nx,E.thru=fa,E.toArray=_d,E.toPairs=Ed,E.toPairsIn=yd,E.toPath=cS,E.toPlainObject=vd,E.transform=aM,E.unary=ix,E.union=ev,E.unionBy=nv,E.unionWith=iv,E.uniq=rv,E.uniqBy=sv,E.uniqWith=ov,E.unset=lM,E.unzip=fc,E.unzipWith=ed,E.update=cM,E.updateWith=uM,E.values=ss,E.valuesIn=hM,E.without=av,E.words=Ad,E.wrap=rx,E.xor=lv,E.xorBy=cv,E.xorWith=uv,E.zip=hv,E.zipObject=fv,E.zipObjectDeep=dv,E.zipWith=pv,E.entries=Ed,E.entriesIn=yd,E.extend=xd,E.extendWith=xa,Ec(E,E),E.add=hS,E.attempt=bd,E.camelCase=mM,E.capitalize=Td,E.ceil=fS,E.clamp=fM,E.clone=ox,E.cloneDeep=lx,E.cloneDeepWith=cx,E.cloneWith=ax,E.conformsTo=ux,E.deburr=wd,E.defaultTo=WM,E.divide=dS,E.endsWith=_M,E.eq=ui,E.escape=gM,E.escapeRegExp=vM,E.every=wv,E.find=bv,E.findIndex=$f,E.findKey=Gx,E.findLast=Rv,E.findLastIndex=Jf,E.findLastKey=Hx,E.floor=pS,E.forEach=id,E.forEachRight=rd,E.forIn=Vx,E.forInRight=kx,E.forOwn=Wx,E.forOwnRight=Xx,E.get=gc,E.gt=hx,E.gte=fx,E.has=Zx,E.hasIn=vc,E.head=jf,E.identity=Nn,E.includes=Dv,E.indexOf=R0,E.inRange=dM,E.invoke=Jx,E.isArguments=wr,E.isArray=se,E.isArrayBuffer=dx,E.isArrayLike=Dn,E.isArrayLikeObject=$e,E.isBoolean=px,E.isBuffer=nr,E.isDate=mx,E.isElement=_x,E.isEmpty=gx,E.isEqual=vx,E.isEqualWith=xx,E.isError=mc,E.isFinite=Mx,E.isFunction=Di,E.isInteger=fd,E.isLength=ga,E.isMap=dd,E.isMatch=Sx,E.isMatchWith=Ex,E.isNaN=yx,E.isNative=Tx,E.isNil=Ax,E.isNull=wx,E.isNumber=pd,E.isObject=Ze,E.isObjectLike=Ke,E.isPlainObject=io,E.isRegExp=_c,E.isSafeInteger=bx,E.isSet=md,E.isString=va,E.isSymbol=Hn,E.isTypedArray=rs,E.isUndefined=Rx,E.isWeakMap=Cx,E.isWeakSet=Lx,E.join=D0,E.kebabCase=xM,E.last=ti,E.lastIndexOf=U0,E.lowerCase=MM,E.lowerFirst=SM,E.lt=Ix,E.lte=Px,E.max=mS,E.maxBy=_S,E.mean=gS,E.meanBy=vS,E.min=xS,E.minBy=MS,E.stubArray=Tc,E.stubFalse=wc,E.stubObject=sS,E.stubString=oS,E.stubTrue=aS,E.multiply=SS,E.nth=N0,E.noConflict=JM,E.noop=yc,E.now=pa,E.pad=EM,E.padEnd=yM,E.padStart=TM,E.parseInt=wM,E.random=pM,E.reduce=Bv,E.reduceRight=zv,E.repeat=AM,E.replace=bM,E.result=rM,E.round=ES,E.runInContext=k,E.sample=Hv,E.size=Wv,E.snakeCase=RM,E.some=Xv,E.sortedIndex=V0,E.sortedIndexBy=k0,E.sortedIndexOf=W0,E.sortedLastIndex=X0,E.sortedLastIndexBy=q0,E.sortedLastIndexOf=Y0,E.startCase=LM,E.startsWith=IM,E.subtract=yS,E.sum=TS,E.sumBy=wS,E.template=PM,E.times=lS,E.toFinite=Ui,E.toInteger=oe,E.toLength=gd,E.toLower=DM,E.toNumber=ei,E.toSafeInteger=Dx,E.toString=Ce,E.toUpper=UM,E.trim=NM,E.trimEnd=FM,E.trimStart=OM,E.truncate=BM,E.unescape=zM,E.uniqueId=uS,E.upperCase=GM,E.upperFirst=xc,E.each=id,E.eachRight=rd,E.first=jf,Ec(E,function(){var n={};return vi(E,function(s,l){Ie.call(E.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),E.VERSION=i,Kn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Kn(["drop","take"],function(n,s){ve.prototype[n]=function(l){l=l===e?1:rn(oe(l),0);var d=this.__filtered__&&!s?new ve(this):this.clone();return d.__filtered__?d.__takeCount__=gn(l,d.__takeCount__):d.__views__.push({size:gn(l,Ot),type:n+(d.__dir__<0?"Right":"")}),d},ve.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Kn(["filter","map","takeWhile"],function(n,s){var l=s+1,d=l==it||l==nt;ve.prototype[n]=function(M){var b=this.clone();return b.__iteratees__.push({iteratee:Zt(M,3),type:l}),b.__filtered__=b.__filtered__||d,b}}),Kn(["head","last"],function(n,s){var l="take"+(s?"Right":"");ve.prototype[n]=function(){return this[l](1).value()[0]}}),Kn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");ve.prototype[n]=function(){return this.__filtered__?new ve(this):this[l](1)}}),ve.prototype.compact=function(){return this.filter(Nn)},ve.prototype.find=function(n){return this.filter(n).head()},ve.prototype.findLast=function(n){return this.reverse().find(n)},ve.prototype.invokeMap=he(function(n,s){return typeof n=="function"?new ve(this):this.map(function(l){return Js(l,n,s)})}),ve.prototype.reject=function(n){return this.filter(_a(Zt(n)))},ve.prototype.slice=function(n,s){n=oe(n);var l=this;return l.__filtered__&&(n>0||s<0)?new ve(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=oe(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},ve.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},ve.prototype.toArray=function(){return this.take(Ot)},vi(ve.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),M=E[d?"take"+(s=="last"?"Right":""):s],b=d||/^find/.test(s);M&&(E.prototype[s]=function(){var D=this.__wrapped__,B=d?[1]:arguments,X=D instanceof ve,rt=B[0],ot=X||se(D),ft=function(_e){var Se=M.apply(E,Ki([_e],B));return d&&St?Se[0]:Se};ot&&l&&typeof rt=="function"&&rt.length!=1&&(X=ot=!1);var St=this.__chain__,Vt=!!this.__actions__.length,Kt=b&&!St,le=X&&!Vt;if(!b&&ot){D=le?D:new ve(this);var $t=n.apply(D,B);return $t.__actions__.push({func:fa,args:[ft],thisArg:e}),new Jn($t,St)}return Kt&&le?n.apply(this,B):($t=this.thru(ft),Kt?d?$t.value()[0]:$t.value():$t)})}),Kn(["pop","push","shift","sort","splice","unshift"],function(n){var s=Bo[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(d&&!this.__chain__){var b=this.value();return s.apply(se(b)?b:[],M)}return this[l](function(D){return s.apply(se(D)?D:[],M)})}}),vi(ve.prototype,function(n,s){var l=E[s];if(l){var d=l.name+"";Ie.call(jr,d)||(jr[d]=[]),jr[d].push({name:s,func:l})}}),jr[sa(e,m).name]=[{name:"wrapper",func:e}],ve.prototype.clone=z_,ve.prototype.reverse=G_,ve.prototype.value=H_,E.prototype.at=_v,E.prototype.chain=gv,E.prototype.commit=vv,E.prototype.next=xv,E.prototype.plant=Sv,E.prototype.reverse=Ev,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=yv,E.prototype.first=E.prototype.head,Ws&&(E.prototype[Ws]=Mv),E},$r=v_();gr?((gr.exports=$r)._=$r,Sl._=$r):fn._=$r}).call(t1)}(Mo,Mo.exports)),Mo.exports}var mo={},Bp;function n1(){if(Bp)return mo;Bp=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.backtrace=void 0;function r(t,e,i){const o=[];let a=i?t:t.getParent();for(;a.getParent();)o.push([a.position.x,a.position.y]),a=a.getParent();return e&&o.push([a.position.x,a.position.y]),o.reverse()}return mo.backtrace=r,mo}var _o={},zp;function i1(){if(zp)return _o;zp=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.calculateHeuristic=void 0;function r(t,e,i,o){const a=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(a+c)*o;case"Euclidean":return Math.sqrt(a*a+c*c)*o;case"Chebyshev":return Math.max(a,c)*o;case"Octile":return(a+c-.58*Math.min(a,c))*o}}return _o.calculateHeuristic=r,_o}var go={},vo={},Gp;function r1(){if(Gp)return vo;Gp=1,Object.defineProperty(vo,"__esModule",{value:!0}),vo.Node=void 0;class r{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return vo.Node=r,vo}var Hp;function Am(){if(Hp)return go;Hp=1,Object.defineProperty(go,"__esModule",{value:!0}),go.Grid=void 0;const r=r1();class t{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,o,a,c){const u=[];let h=0;for(let f=0;f<a;f++){u[f]=[];for(let p=0;p<o;p++)u[f][p]=new r.Node({id:h,position:{x:p,y:f}}),h++}if(i===void 0){for(let f=0;f<a;f++)for(let p=0;p<o;p++)Math.floor(Math.random()*10)+1>10-c?u[f][p].setIsWalkable(!1):u[f][p].setIsWalkable(!0);return u}for(let f=0;f<a;f++)for(let p=0;p<o;p++)u[f][p].setIsWalkable(!i[f][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,o){const a=[],c=i.x-1,u=i.x+1,h=i.y-1,f=i.y+1;for(let p=h;p<=f;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(o||_==i.x||p==i.y)&&a.push(this.getNodeAt({x:_,y:p}));return a}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let o=0;o<this.gridNodes[i].length;o++)this.gridNodes[i][o].setIsOnClosedList(!1),this.gridNodes[i][o].setIsOnOpenList(!1),this.gridNodes[i][o].setParent(void 0),this.gridNodes[i][o].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let o=0;for(let a=0;a<this.height;a++){i[a]=[];for(let c=0;c<this.width;c++)i[a][c]=new r.Node({id:o,position:{x:c,y:a},walkable:this.gridNodes[a][c].getIsWalkable()}),o++}return i}}return go.Grid=t,go}var Vp;function s1(){if(Vp)return po;Vp=1,Object.defineProperty(po,"__esModule",{value:!0}),po.AStarFinder=void 0;const r=e1(),t=n1(),e=i1(),i=Am();class o{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const h=this.grid.getNodeAt(c),f=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];h.setIsOnOpenList(!0),this.openList.push(h);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,e.calculateHeuristic)(this.heuristic,g.position,f.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,r.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,r.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===f)return(0,t.backtrace)(f,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const y=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||y<x.getGValue())&&(x.setGValue(y),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return po.AStarFinder=o,po}var kp;function o1(){return kp||(kp=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var t=s1();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=Am();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(ou)),ou}var a1=o1();class bm{constructor(t){vt(this,"currentHealth");vt(this,"fullHealth");vt(this,"offset");vt(this,"red");vt(this,"green");vt(this,"widthFactor");vt(this,"heightFactor");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new ep(new Zu({map:new ap().load("./textures/red.png")})),this.green=new ep(new Zu({map:new ap().load("./textures/green.png")})),this.widthFactor=t.widthFactor??1,this.heightFactor=t.heightFactor??1,this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const i=this.widthFactor*1,o=this.heightFactor*.12;this.red.scale.set(i,o,o),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),o,o),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}const ll=class ll extends mr{constructor(e){const i=(e==null?void 0:e.size)??1,o=xt.TILE_SIZE/32,a=ye.createSphere({radius:o*i,color:(e==null?void 0:e.color)??new pt(zt.LIGHT_GREEN),basicMaterial:!0});super({mesh:a});vt(this,"ttl",0);vt(this,"velocity");this.mesh.position.set(e.position.x,e.position.y,e.position.z);const c=(e==null?void 0:e.force)??1,u=.002;this.velocity=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u)}update(e,i,o){super.update(e,i,o),this.velocity.y-=1e-5*i,this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>ll.TTL&&this.kill()}};vt(ll,"TTL",800);let $u=ll;const Wp={createExplosion(r,t,e){const{colors:i}=e,o=e.amount??10,a=Array.isArray(i)?i:[i];for(let c=0;c<o;c++){const u=new $u({position:t.clone(),color:a[Math.floor(Math.random()*a.length)],force:e.force,size:e.size});r.addComponent(u)}}},bs={createSimpleGrid:r=>{var a;const t=[];for(let c=0;c<r.length;c++){const u=[];for(let h=0;h<r[c].length;h++)u.push(r[c][h].isWalkable?0:1);t.push(u)}const e=t.length,i=((a=t[0])==null?void 0:a.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:e},(h,f)=>t[f][u]))},getBoundedUncheckedNeighbors:(r,t,e)=>{const i=[];return r>0&&i.push(new wt(r-1,t)),r<e.length-1&&i.push(new wt(r+1,t)),t>0&&i.push(new wt(r,t-1)),t<e[0].length-1&&i.push(new wt(r,t+1)),i},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:r=>{const{grid:t,origin:e,myBattleSide:i,range:o,objective:a}=r,c=Math.max(1,o),u=new Set,h=[e.clone()];u.add(bs.getPositionHash(e));let f=0;const p=[];for(;f<h.length;){if(f>t.length*t[0].length*2)return null;const x=h[f];f++;const y=bs.getBoundedUncheckedNeighbors(x.x,x.y,t);for(const A of y){if(!t[A.x][A.y].isWalkable)continue;const v=t[A.x][A.y].actors.find(m=>m instanceof Hs&&m.battleSide!==i);v?p.push({pos:x,enemy:v}):!u.has(bs.getPositionHash(A))&&A.distanceTo(e)<=c&&(h.push(A),u.add(bs.getPositionHash(A)))}}if(p.length===0)return null;let _=p[0];return p.forEach(g=>{g.pos.distanceTo(a)<_.pos.distanceTo(a)&&(_=g)}),_}};class Hs extends bo{constructor(e){super(e);vt(this,"battleSide");vt(this,"pos");vt(this,"radius");vt(this,"hb");vt(this,"fullHealth");vt(this,"health");vt(this,"objective");vt(this,"healthBarOffset",new U(0,xt.TILE_SIZE*.65,0));vt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new pt(zt.RED),new pt(zt.DARK)]});vt(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new pt(zt.RED),new pt(zt.ORANGE),new pt(zt.YELLOW),new pt(zt.WHITE)],amount:30,force:3,size:.8});vt(this,"SPEED",1);this.battleSide=e.battleSide,this.pos=e.pos,this.radius=e.radius,this.fullHealth=e.health,this.health=e.health,this.objective=e.objective,this.hb=new bm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:this.healthBarOffset,heightFactor:.5,widthFactor:.6})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,o){super.beforeDeath(e,i,o),this.hb.end(i),Wp.createExplosion(i,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(e,i,o,a){super.update(e,i,o,a);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=1,this.kill(),Wp.createExplosion(o,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(a)<c){this.pos=a;const u=bs.createSimpleGrid(o.actorsGrid),f=new a1.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(a,this.objective.position.clone());if(f.length>1){const p=new wt(f[1][0],f[1][1]);o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(_=>_!==this),o.actorsGrid[p.x][p.y].actors.push(this)}}else{const u=.0012*this.SPEED,h=i*u,f=a.clone().sub(this.pos).normalize(),p=this.pos.distanceTo(a);this.pos.add(f.clone().multiplyScalar(Math.min(h,p)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new U(this.pos.x,this.mesh.position.y,this.pos.y)}}class l1 extends Hs{constructor(e){const i=xt.TILE_SIZE/5,o=xt.TILE_SIZE*.75,a=new U(e.pos.x,o/2,e.pos.y),c=new Sn({center:a,parts:[{mesh:ye.createCylinder({radius:i,height:o,color:new pt(zt.BLUE)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:3,objective:e.objective});vt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new pt(zt.BLUE),new pt(zt.DARK_GREEN)],amount:50,size:.5,force:2});vt(this,"SPEED",1.5)}}class c1 extends Hs{constructor(e){const i=xt.TILE_SIZE/4,o=xt.TILE_SIZE,a=new U(e.pos.x,xt.TILE_SIZE/2,e.pos.y),c=new Sn({center:a,parts:[{mesh:ye.createCylinder({radius:i,height:o,color:new pt(zt.LIGHT_GREEN)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:5,objective:e.objective});vt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new pt(zt.LIGHT_GREEN),new pt(zt.GREEN),new pt(zt.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(e,i,o){super.beforeDeath(e,i,o),i.addActor(new l1({pos:o,objective:this.objective}),o)}}class u1 extends Hs{constructor(e){const i=xt.TILE_SIZE/3,o=xt.TILE_SIZE*4/5,a=new U(e.pos.x,o/2,e.pos.y),c=new Sn({center:a,parts:[{mesh:ye.createCylinder({radius:i,height:o,color:new pt(zt.YELLOW)}),offset:new U(0,0,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:10,objective:e.objective});vt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new pt(zt.YELLOW),new pt(zt.DARK)],amount:60,size:.8,force:3});vt(this,"SPEED",.7)}}class h1 extends Hs{constructor(t){const e=xt.TILE_SIZE/5,i=xt.TILE_SIZE,o=new U(t.pos.x,xt.TILE_SIZE/2,t.pos.y),a=new Sn({center:o,parts:[{mesh:ye.createCylinder({radius:e,height:i,color:new pt(zt.RED)}),offset:new U(0,0,0)}]});super({mesh:a,battleSide:Vr.ENEMY,pos:t.pos,radius:e,health:5,objective:t.objective})}}const cl=class cl extends mr{constructor({position:e,color:i,sizeFactor:o}){const a=xt.TILE_SIZE/72*o,c=ye.createSphere({radius:a,color:i===void 0?new pt(zt.WHITE):i,basicMaterial:!0});c.position.set(e.x,e.y,e.z);super({mesh:c});vt(this,"ttl",0);vt(this,"position");vt(this,"velocity");this.position=e,this.velocity=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(xt.TILE_SIZE*5e-5)}update(e,i,o){super.update(e,i,o),this.velocity.y-=5e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>cl.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};vt(cl,"TTL",1e3);let Ju=cl;const So=class So extends mr{constructor(e){const i=xt.TILE_SIZE/48*e.bulletConfig.sizeFactor;super({mesh:ye.createSphere({radius:i,color:e.bulletConfig.color===void 0?new pt(zt.WHITE):e.bulletConfig.color,basicMaterial:!0})});vt(this,"battleSide");vt(this,"position");vt(this,"radius");vt(this,"direction");vt(this,"bulletConfig");vt(this,"particleTimeout",0);vt(this,"hasDamaged",new Set);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=i,this.bulletConfig=e.bulletConfig}update(e,i,o){var A,v;super.update(e,i,o);const c=.07*i*this.bulletConfig.speedFactor,u=this.direction.clone().normalize(),h=this.position.clone().add(new U(u.x*c,0,u.y*c)),f=xt.TILE_SIZE/4,p=this.position.distanceTo(h),_=Math.max(1,Math.floor(p/f));for(let m=0;m<_;m++){const I=this.position.clone().add(new U(u.x*f,0,u.y*f)),L=[new wt(I.x-f,I.z-f),new wt(I.x-f,I.z),new wt(I.x-f,I.z+f),new wt(I.x,I.z-f),new wt(I.x,I.z),new wt(I.x,I.z+f),new wt(I.x+f,I.z-f),new wt(I.x+f,I.z),new wt(I.x+f,I.z+f)].map(R=>new wt(Math.floor(R.x),Math.floor(R.y)));for(const R of L){const G=(A=o.actorsGrid[R.x])==null?void 0:A[R.y];if(G){for(const N of G.actors)if(N instanceof Hs&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new wt(this.position.x,this.position.z))<this.radius+N.radius&&!this.hasDamaged.has(N)){N.health-=this.bulletConfig.damage,this.hasDamaged.add(N);break}}}}this.position.set(h.x,this.position.y,h.z);const g=o.actorsGrid.length,x=((v=o.actorsGrid[0])==null?void 0:v.length)??0;0<=this.position.x&&this.position.x<g&&0<=this.position.z&&this.position.z<x||this.kill(),this.particleTimeout+=i,this.particleTimeout>So.PARTICLE_TIMEOUT&&(o.addComponent(new Ju({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%So.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};vt(So,"PARTICLE_TIMEOUT",30);let Qu=So;class Rm extends bo{constructor(e){super(e);vt(this,"position");vt(this,"bulletConfig");vt(this,"SHOOT_TIMEOUT",1e3);vt(this,"shootTimeout",0);vt(this,"range",5);vt(this,"objective");this.position=e.position,this.bulletConfig=e.bulletConfig,this.objective=e.objective}update(e,i,o,a){super.update(e,i,o,a);const c=this.shootTimeout+i;if(this.shootTimeout=c%this.SHOOT_TIMEOUT,c>=this.SHOOT_TIMEOUT){const h=bs.findClosestEnemy({grid:o.actorsGrid,origin:this.position.clone(),myBattleSide:Vr.ALLY,range:this.range,objective:this.objective.position.clone()}),f=h?new wt(h.enemy.mesh.position.x-this.position.x,h.enemy.mesh.position.z-this.position.y).normalize():null;if(f!==null){const p=new Qu({battleSide:Vr.ALLY,direction:f,position:new U(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});o.addComponent(p)}}}}class f1 extends Rm{constructor(e){const i=new U(e.position.x,xt.TILE_SIZE,e.position.y),o=ye.createGem({size:xt.TILE_SIZE/4,color:new pt(zt.WHITE)}),a=new Sn({center:i,parts:[{mesh:ye.createBox({width:xt.TILE_SIZE,height:xt.TILE_SIZE/2,depth:xt.TILE_SIZE,color:new pt(zt.DARK)}),offset:new U(0,-1*3/4,0)},{mesh:ye.createBox({width:xt.TILE_SIZE*3/4,height:xt.TILE_SIZE,depth:xt.TILE_SIZE*3/4,color:new pt(zt.METAL)}),offset:new U(0,0,0)},{mesh:ye.createBox({width:xt.TILE_SIZE,height:xt.TILE_SIZE/2,depth:xt.TILE_SIZE,color:new pt(zt.DARK)}),offset:new U(0,xt.TILE_SIZE*3/4,0)},{mesh:o,offset:new U(0,xt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:e.objective});vt(this,"gem");this.gem=o}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500)}}class d1 extends Rm{constructor(e){const i=new U(e.position.x,xt.TILE_SIZE,e.position.y),o=ye.createGem({size:xt.TILE_SIZE/4,color:new pt(zt.YELLOW)}),a=new Sn({center:i,parts:[{mesh:ye.createBox({width:xt.TILE_SIZE,height:xt.TILE_SIZE/2,depth:xt.TILE_SIZE,color:new pt(zt.RED)}),offset:new U(0,-1*3/4,0)},{mesh:ye.createBox({width:xt.TILE_SIZE*3/4,height:xt.TILE_SIZE,depth:xt.TILE_SIZE*3/4,color:new pt(zt.DARK)}),offset:new U(0,0,0)},{mesh:ye.createBox({width:xt.TILE_SIZE,height:xt.TILE_SIZE/2,depth:xt.TILE_SIZE,color:new pt(zt.RED)}),offset:new U(0,xt.TILE_SIZE*3/4,0)},{mesh:o,offset:new U(0,xt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new pt(zt.YELLOW),trailSizeFactor:1.2},objective:e.objective});vt(this,"gem");vt(this,"SHOOT_TIMEOUT",2e3);this.gem=o}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/500),this.gem.rotateZ(i/250)}}class p1 extends bo{constructor(e){const i=c=>ye.createBox({width:c==="horizontal"?xt.TILE_SIZE:xt.TILE_SIZE/16,height:xt.TILE_SIZE/16,depth:c==="vertical"?xt.TILE_SIZE:xt.TILE_SIZE/16,color:new pt(zt.RED)}),o=new U(e.pos.x,xt.TILE_SIZE/16,e.pos.y),a=new Sn({center:o,parts:[{mesh:i("vertical"),offset:new U(xt.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new U(-15/32,0,0)},{mesh:i("horizontal"),offset:new U(0,0,xt.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new U(0,0,-15/32)}]});super({mesh:a});vt(this,"pos");vt(this,"canPlace",!1);vt(this,"greenMaterial",new Si({color:new pt(zt.LIGHT_GREEN)}));vt(this,"redMaterial",new Si({color:new pt(zt.RED)}));this.pos=e.pos}update(e,i,o,a){var h;if(super.update(e,i,o,a),!(o instanceof al))throw new Error("Cursor can only be used in a BattleFieldContainer");let c=0;e.keyboardHandler.wasPressed("ArrowUp")?c=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?u=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const f=a.clone().add(new wt(u,c));if(!(0<=f.x&&f.x<o.actorsGrid.length)||!(0<=f.y&&f.y<(((h=o.actorsGrid[0])==null?void 0:h.length)??0)))return;this.pos=f,o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(p=>p!==this),o.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=o.actorsGrid[a.x][a.y].isWalkable&&o.actorsGrid[a.x][a.y].actors.find(f=>f!==this)===void 0,this.canPlace){let f;e.keyboardHandler.wasPressed("z")?f=new f1({position:a.clone(),objective:o.headQuarters}):e.keyboardHandler.wasPressed("x")?f=new d1({position:a.clone(),objective:o.headQuarters}):e.keyboardHandler.wasPressed("c")&&(f=new $b({position:new U(a.x,xt.TILE_SIZE/2,a.y),size:xt.TILE_SIZE})),f!==void 0&&(o.addActor(f,a.clone()),o.actorsGrid[a.x][a.y].isWalkable=!1)}}graphics(e,i,o){const a=1-Math.exp(-.005*i);this.mesh.position=new U(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*a,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*a),o.camera.position.set(this.mesh.position.x+xt.TILE_SIZE*2,this.mesh.position.y+xt.TILE_SIZE*5,this.mesh.position.z+xt.TILE_SIZE*8),o.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class m1 extends bo{constructor({health:e,position:i}){const o=xt.TILE_SIZE/2,a=xt.TILE_SIZE*2,c=xt.TILE_SIZE/2,u=new U(i.x,xt.TILE_SIZE,i.y),h=ye.createGem({size:a/4,color:new pt(zt.LIGHT_GREEN),basicMaterial:!0}),f=new Sn({center:u,parts:[{mesh:ye.createBox({color:new pt(zt.DARK),depth:c,height:a/4,width:o}),offset:new U(0,-2*3/8,0)},{mesh:h,offset:new U(0,a*2/8,0)},{mesh:new ry(new pt(zt.LIGHT_GREEN),20),offset:new U(0,a*2/8,0)}]});super({mesh:f});vt(this,"gem");vt(this,"hb");vt(this,"fullHealth");vt(this,"health");vt(this,"position");this.gem=h,this.position=i,this.health=e,this.fullHealth=e,this.hb=new bm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new U(0,a/2+xt.TILE_SIZE/2,0)})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,o){super.beforeDeath(e,i,o),this.hb.end(i)}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}const _1={buildWorldComponents:r=>{const t=[];for(let e=0;e<r.width;e++)for(let i=0;i<r.height;i++)t.push(new Jb({position:new U(e*r.tileSize,-r.tileSize/2,i*r.tileSize),size:r.tileSize,color:new pt(zt.DARK_GREEN)}));return t}},Fr=class Fr extends Xb{constructor(){super({width:15,height:20});vt(this,"spawnTimeout",0);vt(this,"headQuarters");this.headQuarters=new m1({position:new wt(Math.floor(this.actorsGrid.length/2),1),health:30})}onStart(){var h;const e=this.actorsGrid.length,i=((h=this.actorsGrid[0])==null?void 0:h.length)??0;this.scene.background=new pt(zt.VOID),this.scene.add(new ey(new pt(zt.WHITE),new pt(zt.DARK_GREEN),1)),_1.buildWorldComponents({width:e,height:i,tileSize:Fr.TILE_SIZE}).forEach(f=>this.addComponent(f));const a=new wt(Math.floor(e/2),Math.floor(i/2));this.addActor(new p1({pos:a}),a),this.addActor(this.headQuarters,this.headQuarters.position),this.createStars({width:e,height:i}).forEach(f=>this.addComponent(f)),this.createMountains({width:e,height:i}).forEach(f=>this.addComponent(f)),this.createTrees({width:e,height:i}).forEach(f=>this.addComponent(f));const c=new jb({width:e*1.6,height:i*1.6,position:new U(e/2,-1/2,i/2)});this.addComponent(c);const u=new ay(Math.max(e,i));this.scene.add(u)}update(e,i){super.update(e,i);const o=this.spawnTimeout+i,a=Math.floor(o/Fr.SPAWN_TIMEOUT);this.spawnTimeout=o%Fr.SPAWN_TIMEOUT;for(let c=0;c<a;c++){const u=Math.floor(Math.random()*this.actorsGrid.length),h=new wt(u,this.actorsGrid[u].length-1),f={pos:h,objective:this.headQuarters},p=Math.random();Math.random()<.33?this.addActor(new h1(f),h):p<.66?this.addActor(new u1(f),h):this.addActor(new c1(f),h)}}createStars(e){const{width:i,height:o}=e,a=200,c=[],u=new U(i/2,0,o/2);for(let h=0;h<a;h++){const _=xt.TILE_SIZE*8*(4+Math.floor(Math.random()*4)),g=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),x=new U(u.x+g.x*_,u.z+g.z*_,u.y+g.y*_);c.push(new Qb({position:x}))}return c}createMountains(e){const{width:i,height:o}=e,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Ya({position:new wt(h-c/8,-u*3/16)});a.push(f)}for(let h=0;h<c;h++){const f=new Ya({position:new wt(h-c/8,u*7/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Ya({position:new wt(-c*2/8,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Ya({position:new wt(c*7/8,h-u/16)});a.push(f)}return a}createTrees(e){const{width:i,height:o}=e,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Za({position:new wt(h-c/8,-u*3/16+(Math.random()-.5)*xt.TILE_SIZE)});a.push(f)}for(let h=0;h<c;h++){const f=new Za({position:new wt(h-c/8,u*7/8+(Math.random()-.5)*xt.TILE_SIZE)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new wt(-c*2/8+(Math.random()-.5)*xt.TILE_SIZE,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new wt(c*7/8+(Math.random()-.5)*xt.TILE_SIZE,h-u/16)});a.push(f)}return a}};vt(Fr,"SPAWN_TIMEOUT",2e3),vt(Fr,"TILE_SIZE",1);let al=Fr;var Vr=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(Vr||{});const ph=new Kb;ph.addContainer(dh.BATTLEFIELD_CONTAINER,new al);ph.setContainer(dh.BATTLEFIELD_CONTAINER);ph.start();
