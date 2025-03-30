var VM=Object.defineProperty;var kM=(r,t,e)=>t in r?VM(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var xt=(r,t,e)=>kM(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="173",WM=0,qd=1,XM=2,rm=1,qM=2,Xi=3,vr=0,zn=1,qi=2,mr=0,Cs=1,Yd=2,Zd=3,Kd=4,YM=5,Br=100,ZM=101,KM=102,$M=103,JM=104,QM=200,jM=201,tE=202,eE=203,fu=204,du=205,nE=206,iE=207,rE=208,sE=209,oE=210,aE=211,cE=212,lE=213,uE=214,pu=0,mu=1,_u=2,Ds=3,gu=4,vu=5,xu=6,Su=7,sm=0,hE=1,fE=2,_r=0,dE=1,pE=2,mE=3,_E=4,gE=5,vE=6,xE=7,om=300,Us=301,Ns=302,Mu=303,Eu=304,dc=306,yu=1e3,Gr=1001,Tu=1002,vi=1003,SE=1004,Aa=1005,Ai=1006,Cl=1007,Hr=1008,$i=1009,am=1010,cm=1011,Ro=1012,ch=1013,Vr=1014,Yi=1015,Po=1016,lh=1017,uh=1018,Os=1020,lm=35902,um=1021,hm=1022,gi=1023,fm=1024,dm=1025,Ls=1026,Fs=1027,pm=1028,hh=1029,mm=1030,fh=1031,dh=1033,ec=33776,nc=33777,ic=33778,rc=33779,wu=35840,Au=35841,bu=35842,Ru=35843,Cu=36196,Lu=37492,Pu=37496,Iu=37808,Du=37809,Uu=37810,Nu=37811,Ou=37812,Fu=37813,Bu=37814,zu=37815,Gu=37816,Hu=37817,Vu=37818,ku=37819,Wu=37820,Xu=37821,sc=36492,qu=36494,Yu=36495,_m=36283,Zu=36284,Ku=36285,$u=36286,ME=3200,EE=3201,gm=0,yE=1,pr="",oi="srgb",Bs="srgb-linear",ac="linear",Ne="srgb",cs=7680,$d=519,TE=512,wE=513,AE=514,vm=515,bE=516,RE=517,CE=518,LE=519,Ju=35044,Jd="300 es",Zi=2e3,cc=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,Qu=180/Math.PI;function gr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[e&63|128]+En[e>>8&255]+"-"+En[e>>16&255]+En[e>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function pe(r,t,e){return Math.max(t,Math.min(e,r))}function PE(r,t){return(r%t+t)%t}function Pl(r,t,e){return(1-e)*r+e*t}function wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*n-c*s+t.x,this.y=a*s+c*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,s,a,c,u,h,f){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,u,h,f)}set(t,e,n,s,a,c,u,h,f){const d=this.elements;return d[0]=t,d[1]=s,d[2]=u,d[3]=e,d[4]=a,d[5]=h,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],u=n[3],h=n[6],f=n[1],d=n[4],m=n[7],g=n[2],v=n[5],M=n[8],T=s[0],x=s[3],_=s[6],P=s[1],I=s[4],A=s[7],F=s[2],U=s[5],O=s[8];return a[0]=c*T+u*P+h*F,a[3]=c*x+u*I+h*U,a[6]=c*_+u*A+h*O,a[1]=f*T+d*P+m*F,a[4]=f*x+d*I+m*U,a[7]=f*_+d*A+m*O,a[2]=g*T+v*P+M*F,a[5]=g*x+v*I+M*U,a[8]=g*_+v*A+M*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],d=t[8];return e*c*d-e*u*f-n*a*d+n*u*h+s*a*f-s*c*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],d=t[8],m=d*c-u*f,g=u*h-d*a,v=f*a-c*h,M=e*m+n*g+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=m*T,t[1]=(s*f-d*n)*T,t[2]=(u*n-s*c)*T,t[3]=g*T,t[4]=(d*e-s*h)*T,t[5]=(s*a-u*e)*T,t[6]=v*T,t[7]=(n*h-f*e)*T,t[8]=(c*e-n*a)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,c,u){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*c+f*u)+c+t,-s*f,s*h,-s*(-f*c+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Il.makeScale(t,e)),this}rotate(t){return this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new ce;function xm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Co(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function IE(){const r=Co("canvas");return r.style.display="block",r}const Qd={};function As(r){r in Qd||(Qd[r]=!0,console.warn(r))}function DE(r,t,e){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function UE(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function NE(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jd=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tp=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OE(){const r={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ne&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ne&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pr?ac:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Bs]:{primaries:t,whitePoint:n,transfer:ac,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:jd,fromXYZ:tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Ae=OE();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ls;class FE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Co("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Ki(a[c]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BE=0;class Sm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(Dl(s[c].image)):a.push(Dl(s[c]))}else a=Dl(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Dl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?FE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class Pn extends Gs{constructor(t=Pn.DEFAULT_IMAGE,e=Pn.DEFAULT_MAPPING,n=Gr,s=Gr,a=Ai,c=Hr,u=gi,h=$i,f=Pn.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=gr(),this.name="",this.source=new Sm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==om)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yu:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yu:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=om;Pn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*e+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*e+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*e+c[7]*n+c[11]*s+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const h=t.elements,f=h[0],d=h[4],m=h[8],g=h[1],v=h[5],M=h[9],T=h[2],x=h[6],_=h[10];if(Math.abs(d-g)<.01&&Math.abs(m-T)<.01&&Math.abs(M-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(m+T)<.1&&Math.abs(M+x)<.1&&Math.abs(f+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(f+1)/2,A=(v+1)/2,F=(_+1)/2,U=(d+g)/4,O=(m+T)/4,z=(M+x)/4;return I>A&&I>F?I<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(I),s=U/n,a=O/n):A>F?A<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),n=U/s,a=z/s):F<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(F),n=O/a,s=z/a),this.set(n,s,a,e),this}let P=Math.sqrt((x-M)*(x-M)+(m-T)*(m-T)+(g-d)*(g-d));return Math.abs(P)<.001&&(P=1),this.x=(x-M)/P,this.y=(m-T)/P,this.z=(g-d)/P,this.w=Math.acos((f+v+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Sm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends GE{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mm extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vi,this.minFilter=vi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HE extends Pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vi,this.minFilter=vi,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,c,u){let h=n[s+0],f=n[s+1],d=n[s+2],m=n[s+3];const g=a[c+0],v=a[c+1],M=a[c+2],T=a[c+3];if(u===0){t[e+0]=h,t[e+1]=f,t[e+2]=d,t[e+3]=m;return}if(u===1){t[e+0]=g,t[e+1]=v,t[e+2]=M,t[e+3]=T;return}if(m!==T||h!==g||f!==v||d!==M){let x=1-u;const _=h*g+f*v+d*M+m*T,P=_>=0?1:-1,I=1-_*_;if(I>Number.EPSILON){const F=Math.sqrt(I),U=Math.atan2(F,_*P);x=Math.sin(x*U)/F,u=Math.sin(u*U)/F}const A=u*P;if(h=h*x+g*A,f=f*x+v*A,d=d*x+M*A,m=m*x+T*A,x===1-u){const F=1/Math.sqrt(h*h+f*f+d*d+m*m);h*=F,f*=F,d*=F,m*=F}}t[e]=h,t[e+1]=f,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,a,c){const u=n[s],h=n[s+1],f=n[s+2],d=n[s+3],m=a[c],g=a[c+1],v=a[c+2],M=a[c+3];return t[e]=u*M+d*m+h*v-f*g,t[e+1]=h*M+d*g+f*m-u*v,t[e+2]=f*M+d*v+u*g-h*m,t[e+3]=d*M-u*m-h*g-f*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,c=t._order,u=Math.cos,h=Math.sin,f=u(n/2),d=u(s/2),m=u(a/2),g=h(n/2),v=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=g*d*m+f*v*M,this._y=f*v*m-g*d*M,this._z=f*d*M+g*v*m,this._w=f*d*m-g*v*M;break;case"YXZ":this._x=g*d*m+f*v*M,this._y=f*v*m-g*d*M,this._z=f*d*M-g*v*m,this._w=f*d*m+g*v*M;break;case"ZXY":this._x=g*d*m-f*v*M,this._y=f*v*m+g*d*M,this._z=f*d*M+g*v*m,this._w=f*d*m-g*v*M;break;case"ZYX":this._x=g*d*m-f*v*M,this._y=f*v*m+g*d*M,this._z=f*d*M-g*v*m,this._w=f*d*m+g*v*M;break;case"YZX":this._x=g*d*m+f*v*M,this._y=f*v*m+g*d*M,this._z=f*d*M-g*v*m,this._w=f*d*m-g*v*M;break;case"XZY":this._x=g*d*m-f*v*M,this._y=f*v*m-g*d*M,this._z=f*d*M+g*v*m,this._w=f*d*m+g*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],c=e[1],u=e[5],h=e[9],f=e[2],d=e[6],m=e[10],g=n+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(d-h)*v,this._y=(a-f)*v,this._z=(c-s)*v}else if(n>u&&n>m){const v=2*Math.sqrt(1+n-u-m);this._w=(d-h)/v,this._x=.25*v,this._y=(s+c)/v,this._z=(a+f)/v}else if(u>m){const v=2*Math.sqrt(1+u-n-m);this._w=(a-f)/v,this._x=(s+c)/v,this._y=.25*v,this._z=(h+d)/v}else{const v=2*Math.sqrt(1+m-n-u);this._w=(c-s)/v,this._x=(a+f)/v,this._y=(h+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,c=t._w,u=e._x,h=e._y,f=e._z,d=e._w;return this._x=n*d+c*u+s*f-a*h,this._y=s*d+c*h+a*u-n*f,this._z=a*d+c*f+n*h-s*u,this._w=c*d-n*u-s*h-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,c=this._w;let u=c*t._w+n*t._x+s*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const v=1-e;return this._w=v*c+e*this._w,this._x=v*n+e*this._x,this._y=v*s+e*this._y,this._z=v*a+e*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,u),m=Math.sin((1-e)*d)/f,g=Math.sin(e*d)/f;return this._w=c*m+this._w*g,this._x=n*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ep.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ep.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,c=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,c=t.y,u=t.z,h=t.w,f=2*(c*s-u*n),d=2*(u*e-a*s),m=2*(a*n-c*e);return this.x=e+h*f+c*m-u*d,this.y=n+h*d+u*f-a*m,this.z=s+h*m+a*d-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,c=e.x,u=e.y,h=e.z;return this.x=s*h-a*u,this.y=a*c-n*h,this.z=n*u-s*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ul.copy(this).projectOnVector(t),this.sub(Ul)}reflect(t){return this.sub(Ul.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new C,ep=new Io;class Do{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,pi):pi.fromBufferAttribute(a,c),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}const s=t.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),Ra.subVectors(this.max,oo),us.subVectors(t.a,oo),hs.subVectors(t.b,oo),fs.subVectors(t.c,oo),cr.subVectors(hs,us),lr.subVectors(fs,hs),Lr.subVectors(us,fs);let e=[0,-cr.z,cr.y,0,-lr.z,lr.y,0,-Lr.z,Lr.y,cr.z,0,-cr.x,lr.z,0,-lr.x,Lr.z,0,-Lr.x,-cr.y,cr.x,0,-lr.y,lr.x,0,-Lr.y,Lr.x,0];return!Nl(e,us,hs,fs,Ra)||(e=[1,0,0,0,1,0,0,0,1],!Nl(e,us,hs,fs,Ra))?!1:(Ca.crossVectors(cr,lr),e=[Ca.x,Ca.y,Ca.z],Nl(e,us,hs,fs,Ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gi=[new C,new C,new C,new C,new C,new C,new C,new C],pi=new C,ba=new Do,us=new C,hs=new C,fs=new C,cr=new C,lr=new C,Lr=new C,oo=new C,Ra=new C,Ca=new C,Pr=new C;function Nl(r,t,e,n,s){for(let a=0,c=r.length-3;a<=c;a+=3){Pr.fromArray(r,a);const u=s.x*Math.abs(Pr.x)+s.y*Math.abs(Pr.y)+s.z*Math.abs(Pr.z),h=t.dot(Pr),f=e.dot(Pr),d=n.dot(Pr);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>u)return!1}return!0}const VE=new Do,ao=new C,Ol=new C;class ph{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):VE.setFromPoints(t).getCenter(n);let s=0;for(let a=0,c=t.length;a<c;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(Ol)),this.expandByPoint(ao.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new C,Fl=new C,La=new C,ur=new C,Bl=new C,Pa=new C,zl=new C;class kE{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fl.copy(t).add(e).multiplyScalar(.5),La.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(Fl);const a=t.distanceTo(e)*.5,c=-this.direction.dot(La),u=ur.dot(this.direction),h=-ur.dot(La),f=ur.lengthSq(),d=Math.abs(1-c*c);let m,g,v,M;if(d>0)if(m=c*h-u,g=c*u-h,M=a*d,m>=0)if(g>=-M)if(g<=M){const T=1/d;m*=T,g*=T,v=m*(m+c*g+2*u)+g*(c*m+g+2*h)+f}else g=a,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*h)+f;else g=-a,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*h)+f;else g<=-M?(m=Math.max(0,-(-c*a+u)),g=m>0?-a:Math.min(Math.max(-a,-h),a),v=-m*m+g*(g+2*h)+f):g<=M?(m=0,g=Math.min(Math.max(-a,-h),a),v=g*(g+2*h)+f):(m=Math.max(0,-(c*a+u)),g=m>0?a:Math.min(Math.max(-a,-h),a),v=-m*m+g*(g+2*h)+f);else g=c>0?-a:a,m=Math.max(0,-(c*g+u)),v=-m*m+g*(g+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Fl).addScaledVector(La,g),v}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,a=t.radius*t.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=n-c,h=n+c;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,c,u,h;const f=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,g=this.origin;return f>=0?(n=(t.min.x-g.x)*f,s=(t.max.x-g.x)*f):(n=(t.max.x-g.x)*f,s=(t.min.x-g.x)*f),d>=0?(a=(t.min.y-g.y)*d,c=(t.max.y-g.y)*d):(a=(t.max.y-g.y)*d,c=(t.min.y-g.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),m>=0?(u=(t.min.z-g.z)*m,h=(t.max.z-g.z)*m):(u=(t.max.z-g.z)*m,h=(t.min.z-g.z)*m),n>h||u>s)||((u>n||n!==n)&&(n=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,s,a){Bl.subVectors(e,t),Pa.subVectors(n,t),zl.crossVectors(Bl,Pa);let c=this.direction.dot(zl),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ur.subVectors(this.origin,t);const h=u*this.direction.dot(Pa.crossVectors(ur,Pa));if(h<0)return null;const f=u*this.direction.dot(Bl.cross(ur));if(f<0||h+f>c)return null;const d=-u*ur.dot(zl);return d<0?null:this.at(d/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,e,n,s,a,c,u,h,f,d,m,g,v,M,T,x){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,c,u,h,f,d,m,g,v,M,T,x)}set(t,e,n,s,a,c,u,h,f,d,m,g,v,M,T,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=a,_[5]=c,_[9]=u,_[13]=h,_[2]=f,_[6]=d,_[10]=m,_[14]=g,_[3]=v,_[7]=M,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),a=1/ds.setFromMatrixColumn(t,1).length(),c=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*c,e[9]=n[9]*c,e[10]=n[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,c=Math.cos(n),u=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const g=c*d,v=c*m,M=u*d,T=u*m;e[0]=h*d,e[4]=-h*m,e[8]=f,e[1]=v+M*f,e[5]=g-T*f,e[9]=-u*h,e[2]=T-g*f,e[6]=M+v*f,e[10]=c*h}else if(t.order==="YXZ"){const g=h*d,v=h*m,M=f*d,T=f*m;e[0]=g+T*u,e[4]=M*u-v,e[8]=c*f,e[1]=c*m,e[5]=c*d,e[9]=-u,e[2]=v*u-M,e[6]=T+g*u,e[10]=c*h}else if(t.order==="ZXY"){const g=h*d,v=h*m,M=f*d,T=f*m;e[0]=g-T*u,e[4]=-c*m,e[8]=M+v*u,e[1]=v+M*u,e[5]=c*d,e[9]=T-g*u,e[2]=-c*f,e[6]=u,e[10]=c*h}else if(t.order==="ZYX"){const g=c*d,v=c*m,M=u*d,T=u*m;e[0]=h*d,e[4]=M*f-v,e[8]=g*f+T,e[1]=h*m,e[5]=T*f+g,e[9]=v*f-M,e[2]=-f,e[6]=u*h,e[10]=c*h}else if(t.order==="YZX"){const g=c*h,v=c*f,M=u*h,T=u*f;e[0]=h*d,e[4]=T-g*m,e[8]=M*m+v,e[1]=m,e[5]=c*d,e[9]=-u*d,e[2]=-f*d,e[6]=v*m+M,e[10]=g-T*m}else if(t.order==="XZY"){const g=c*h,v=c*f,M=u*h,T=u*f;e[0]=h*d,e[4]=-m,e[8]=f*d,e[1]=g*m+T,e[5]=c*d,e[9]=v*m-M,e[2]=M*m-v,e[6]=u*d,e[10]=T*m+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WE,t,XE)}lookAt(t,e,n){const s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),hr.crossVectors(n,Zn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),hr.crossVectors(n,Zn)),hr.normalize(),Ia.crossVectors(Zn,hr),s[0]=hr.x,s[4]=Ia.x,s[8]=Zn.x,s[1]=hr.y,s[5]=Ia.y,s[9]=Zn.y,s[2]=hr.z,s[6]=Ia.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,c=n[0],u=n[4],h=n[8],f=n[12],d=n[1],m=n[5],g=n[9],v=n[13],M=n[2],T=n[6],x=n[10],_=n[14],P=n[3],I=n[7],A=n[11],F=n[15],U=s[0],O=s[4],z=s[8],L=s[12],w=s[1],H=s[5],Q=s[9],$=s[13],st=s[2],ft=s[6],rt=s[10],mt=s[14],j=s[3],bt=s[7],Pt=s[11],Bt=s[15];return a[0]=c*U+u*w+h*st+f*j,a[4]=c*O+u*H+h*ft+f*bt,a[8]=c*z+u*Q+h*rt+f*Pt,a[12]=c*L+u*$+h*mt+f*Bt,a[1]=d*U+m*w+g*st+v*j,a[5]=d*O+m*H+g*ft+v*bt,a[9]=d*z+m*Q+g*rt+v*Pt,a[13]=d*L+m*$+g*mt+v*Bt,a[2]=M*U+T*w+x*st+_*j,a[6]=M*O+T*H+x*ft+_*bt,a[10]=M*z+T*Q+x*rt+_*Pt,a[14]=M*L+T*$+x*mt+_*Bt,a[3]=P*U+I*w+A*st+F*j,a[7]=P*O+I*H+A*ft+F*bt,a[11]=P*z+I*Q+A*rt+F*Pt,a[15]=P*L+I*$+A*mt+F*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],c=t[1],u=t[5],h=t[9],f=t[13],d=t[2],m=t[6],g=t[10],v=t[14],M=t[3],T=t[7],x=t[11],_=t[15];return M*(+a*h*m-s*f*m-a*u*g+n*f*g+s*u*v-n*h*v)+T*(+e*h*v-e*f*g+a*c*g-s*c*v+s*f*d-a*h*d)+x*(+e*f*m-e*u*v-a*c*m+n*c*v+a*u*d-n*f*d)+_*(-s*u*d-e*h*m+e*u*g+s*c*m-n*c*g+n*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],d=t[8],m=t[9],g=t[10],v=t[11],M=t[12],T=t[13],x=t[14],_=t[15],P=m*x*f-T*g*f+T*h*v-u*x*v-m*h*_+u*g*_,I=M*g*f-d*x*f-M*h*v+c*x*v+d*h*_-c*g*_,A=d*T*f-M*m*f+M*u*v-c*T*v-d*u*_+c*m*_,F=M*m*h-d*T*h-M*u*g+c*T*g+d*u*x-c*m*x,U=e*P+n*I+s*A+a*F;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return t[0]=P*O,t[1]=(T*g*a-m*x*a-T*s*v+n*x*v+m*s*_-n*g*_)*O,t[2]=(u*x*a-T*h*a+T*s*f-n*x*f-u*s*_+n*h*_)*O,t[3]=(m*h*a-u*g*a-m*s*f+n*g*f+u*s*v-n*h*v)*O,t[4]=I*O,t[5]=(d*x*a-M*g*a+M*s*v-e*x*v-d*s*_+e*g*_)*O,t[6]=(M*h*a-c*x*a-M*s*f+e*x*f+c*s*_-e*h*_)*O,t[7]=(c*g*a-d*h*a+d*s*f-e*g*f-c*s*v+e*h*v)*O,t[8]=A*O,t[9]=(M*m*a-d*T*a-M*n*v+e*T*v+d*n*_-e*m*_)*O,t[10]=(c*T*a-M*u*a+M*n*f-e*T*f-c*n*_+e*u*_)*O,t[11]=(d*u*a-c*m*a-d*n*f+e*m*f+c*n*v-e*u*v)*O,t[12]=F*O,t[13]=(d*T*s-M*m*s+M*n*g-e*T*g-d*n*x+e*m*x)*O,t[14]=(M*u*s-c*T*s-M*n*h+e*T*h+c*n*x-e*u*x)*O,t[15]=(c*m*s-d*u*s+d*n*h-e*m*h-c*n*g+e*u*g)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,c=t.x,u=t.y,h=t.z,f=a*c,d=a*u;return this.set(f*c+n,f*u-s*h,f*h+s*u,0,f*u+s*h,d*u+n,d*h-s*c,0,f*h-s*u,d*h+s*c,a*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,c){return this.set(1,n,a,0,t,1,c,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,c=e._y,u=e._z,h=e._w,f=a+a,d=c+c,m=u+u,g=a*f,v=a*d,M=a*m,T=c*d,x=c*m,_=u*m,P=h*f,I=h*d,A=h*m,F=n.x,U=n.y,O=n.z;return s[0]=(1-(T+_))*F,s[1]=(v+A)*F,s[2]=(M-I)*F,s[3]=0,s[4]=(v-A)*U,s[5]=(1-(g+_))*U,s[6]=(x+P)*U,s[7]=0,s[8]=(M+I)*O,s[9]=(x-P)*O,s[10]=(1-(g+T))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ds.set(s[0],s[1],s[2]).length();const c=ds.set(s[4],s[5],s[6]).length(),u=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],mi.copy(this);const f=1/a,d=1/c,m=1/u;return mi.elements[0]*=f,mi.elements[1]*=f,mi.elements[2]*=f,mi.elements[4]*=d,mi.elements[5]*=d,mi.elements[6]*=d,mi.elements[8]*=m,mi.elements[9]*=m,mi.elements[10]*=m,e.setFromRotationMatrix(mi),n.x=a,n.y=c,n.z=u,this}makePerspective(t,e,n,s,a,c,u=Zi){const h=this.elements,f=2*a/(e-t),d=2*a/(n-s),m=(e+t)/(e-t),g=(n+s)/(n-s);let v,M;if(u===Zi)v=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===cc)v=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=d,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,a,c,u=Zi){const h=this.elements,f=1/(e-t),d=1/(n-s),m=1/(c-a),g=(e+t)*f,v=(n+s)*d;let M,T;if(u===Zi)M=(c+a)*m,T=-2*m;else if(u===cc)M=a*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new C,mi=new Xe,WE=new C(0,0,0),XE=new C(1,1,1),hr=new C,Ia=new C,Zn=new C,np=new Xe,ip=new Io;class bi{constructor(t=0,e=0,n=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],c=s[4],u=s[8],h=s[1],f=s[5],d=s[9],m=s[2],g=s[6],v=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return np.makeRotationFromQuaternion(t),this.setFromRotationMatrix(np,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ip.setFromEuler(this),this.setFromQuaternion(ip,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qE=0;const rp=new C,ps=new Io,Vi=new Xe,Da=new C,co=new C,YE=new C,ZE=new Io,sp=new C(1,0,0),op=new C(0,1,0),ap=new C(0,0,1),cp={type:"added"},KE={type:"removed"},ms={type:"childadded",child:null},Gl={type:"childremoved",child:null};class Tn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new C,e=new bi,n=new Io,s=new C(1,1,1);function a(){n.setFromEuler(e,!1)}function c(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ce}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(sp,t)}rotateY(t){return this.rotateOnAxis(op,t)}rotateZ(t){return this.rotateOnAxis(ap,t)}translateOnAxis(t,e){return rp.copy(t).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sp,t)}translateY(t){return this.translateOnAxis(op,t)}translateZ(t){return this.translateOnAxis(ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Da.copy(t):Da.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(co,Da,this.up):Vi.lookAt(Da,co,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Vi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cp),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(KE),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cp),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,t,YE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,ZE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const m=h[f];a(t.shapes,m)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(a(t.materials,this.material[h]));s.material=u}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(a(t.animations,h))}}if(e){const u=c(t.geometries),h=c(t.materials),f=c(t.textures),d=c(t.images),m=c(t.shapes),g=c(t.skeletons),v=c(t.animations),M=c(t.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),M.length>0&&(n.nodes=M)}return n.object=s,n;function c(u){const h=[];for(const f in u){const d=u[f];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Tn.DEFAULT_UP=new C(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new C,ki=new C,Hl=new C,Wi=new C,_s=new C,gs=new C,lp=new C,Vl=new C,kl=new C,Wl=new C,Xl=new Fe,ql=new Fe,Yl=new Fe;class ai{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_i.subVectors(t,e),s.cross(_i);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){_i.subVectors(s,e),ki.subVectors(n,e),Hl.subVectors(t,e);const c=_i.dot(_i),u=_i.dot(ki),h=_i.dot(Hl),f=ki.dot(ki),d=ki.dot(Hl),m=c*f-u*u;if(m===0)return a.set(0,0,0),null;const g=1/m,v=(f*h-u*d)*g,M=(c*d-u*h)*g;return a.set(1-v-M,M,v)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(t,e,n,s,a,c,u,h){return this.getBarycoord(t,e,n,s,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Wi.x),h.addScaledVector(c,Wi.y),h.addScaledVector(u,Wi.z),h)}static getInterpolatedAttribute(t,e,n,s,a,c){return Xl.setScalar(0),ql.setScalar(0),Yl.setScalar(0),Xl.fromBufferAttribute(t,e),ql.fromBufferAttribute(t,n),Yl.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Xl,a.x),c.addScaledVector(ql,a.y),c.addScaledVector(Yl,a.z),c}static isFrontFacing(t,e,n,s){return _i.subVectors(n,e),ki.subVectors(t,e),_i.cross(ki).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),_i.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return ai.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let c,u;_s.subVectors(s,n),gs.subVectors(a,n),Vl.subVectors(t,n);const h=_s.dot(Vl),f=gs.dot(Vl);if(h<=0&&f<=0)return e.copy(n);kl.subVectors(t,s);const d=_s.dot(kl),m=gs.dot(kl);if(d>=0&&m<=d)return e.copy(s);const g=h*m-d*f;if(g<=0&&h>=0&&d<=0)return c=h/(h-d),e.copy(n).addScaledVector(_s,c);Wl.subVectors(t,a);const v=_s.dot(Wl),M=gs.dot(Wl);if(M>=0&&v<=M)return e.copy(a);const T=v*f-h*M;if(T<=0&&f>=0&&M<=0)return u=f/(f-M),e.copy(n).addScaledVector(gs,u);const x=d*M-v*m;if(x<=0&&m-d>=0&&v-M>=0)return lp.subVectors(a,s),u=(m-d)/(m-d+(v-M)),e.copy(s).addScaledVector(lp,u);const _=1/(x+T+g);return c=T*_,u=g*_,e.copy(n).addScaledVector(_s,c).addScaledVector(gs,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Zl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=PE(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,c=2*n-a;this.r=Zl(c,a,t+1/3),this.g=Zl(c,a,t),this.b=Zl(c,a,t-1/3)}return Ae.toWorkingColorSpace(this,s),this}setStyle(t,e=oi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const n=ym[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return Ae.fromWorkingColorSpace(yn.copy(this),t),Math.round(pe(yn.r*255,0,255))*65536+Math.round(pe(yn.g*255,0,255))*256+Math.round(pe(yn.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,s=yn.g,a=yn.b,c=Math.max(n,s,a),u=Math.min(n,s,a);let h,f;const d=(u+c)/2;if(u===c)h=0,f=0;else{const m=c-u;switch(f=d<=.5?m/(c+u):m/(2-c-u),c){case n:h=(s-a)/m+(s<a?6:0);break;case s:h=(a-n)/m+2;break;case a:h=(n-s)/m+4;break}h/=6}return t.h=h,t.s=f,t.l=d,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=oi){Ae.fromWorkingColorSpace(yn.copy(this),t);const e=yn.r,n=yn.g,s=yn.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+e,fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fr),t.getHSL(Ua);const n=Pl(fr.h,Ua.h,e),s=Pl(fr.s,Ua.s,e),a=Pl(fr.l,Ua.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new tt;tt.NAMES=ym;let $E=0;class Hs extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Cs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fu,this.blendDst=du,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fu&&(n.blendSrc=this.blendSrc),this.blendDst!==du&&(n.blendDst=this.blendDst),this.blendEquation!==Br&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(e){const a=s(t.textures),c=s(t.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bn extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new C,Na=new it;let JE=0;class xi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),a=Oe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ju&&(t.usage=this.usage),t}}class Tm extends xi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wm extends xi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends xi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let QE=0;const si=new Xe,Kl=new Tn,vs=new C,Kn=new Do,lo=new Do,pn=new C;class Gn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xm(t)?wm:Tm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ce().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,e,n){return si.makeTranslation(t,e,n),this.applyMatrix4(si),this}scale(t,e,n){return si.makeScale(t,e,n),this.applyMatrix4(si),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const c=t[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new qe(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Kn.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ph);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const u=e[a];lo.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(Kn.min,lo.min),Kn.expandByPoint(pn),pn.addVectors(Kn.max,lo.max),Kn.expandByPoint(pn)):(Kn.expandByPoint(lo.min),Kn.expandByPoint(lo.max))}Kn.getCenter(n);let s=0;for(let a=0,c=t.count;a<c;a++)pn.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(pn));if(e)for(let a=0,c=e.length;a<c;a++){const u=e[a],h=this.morphTargetsRelative;for(let f=0,d=u.count;f<d;f++)pn.fromBufferAttribute(u,f),h&&(vs.fromBufferAttribute(t,f),pn.add(vs)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let z=0;z<n.count;z++)u[z]=new C,h[z]=new C;const f=new C,d=new C,m=new C,g=new it,v=new it,M=new it,T=new C,x=new C;function _(z,L,w){f.fromBufferAttribute(n,z),d.fromBufferAttribute(n,L),m.fromBufferAttribute(n,w),g.fromBufferAttribute(a,z),v.fromBufferAttribute(a,L),M.fromBufferAttribute(a,w),d.sub(f),m.sub(f),v.sub(g),M.sub(g);const H=1/(v.x*M.y-M.x*v.y);isFinite(H)&&(T.copy(d).multiplyScalar(M.y).addScaledVector(m,-v.y).multiplyScalar(H),x.copy(m).multiplyScalar(v.x).addScaledVector(d,-M.x).multiplyScalar(H),u[z].add(T),u[L].add(T),u[w].add(T),h[z].add(x),h[L].add(x),h[w].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let z=0,L=P.length;z<L;++z){const w=P[z],H=w.start,Q=w.count;for(let $=H,st=H+Q;$<st;$+=3)_(t.getX($+0),t.getX($+1),t.getX($+2))}const I=new C,A=new C,F=new C,U=new C;function O(z){F.fromBufferAttribute(s,z),U.copy(F);const L=u[z];I.copy(L),I.sub(F.multiplyScalar(F.dot(L))).normalize(),A.crossVectors(U,L);const H=A.dot(h[z])<0?-1:1;c.setXYZW(z,I.x,I.y,I.z,H)}for(let z=0,L=P.length;z<L;++z){const w=P[z],H=w.start,Q=w.count;for(let $=H,st=H+Q;$<st;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const s=new C,a=new C,c=new C,u=new C,h=new C,f=new C,d=new C,m=new C;if(t)for(let g=0,v=t.count;g<v;g+=3){const M=t.getX(g+0),T=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,T),c.fromBufferAttribute(e,x),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,x),u.add(d),h.add(d),f.add(d),n.setXYZ(M,u.x,u.y,u.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let g=0,v=e.count;g<v;g+=3)s.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),d.subVectors(c,a),m.subVectors(s,a),d.cross(m),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(u,h){const f=u.array,d=u.itemSize,m=u.normalized,g=new f.constructor(h.length*d);let v=0,M=0;for(let T=0,x=h.length;T<x;T++){u.isInterleavedBufferAttribute?v=h[T]*u.data.stride+u.offset:v=h[T]*d;for(let _=0;_<d;_++)g[M++]=f[v++]}return new xi(g,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,n=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=t(h,n);e.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const h=[],f=a[u];for(let d=0,m=f.length;d<m;d++){const g=f[d],v=t(g,n);h.push(v)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const f=n[h];t.data.attributes[h]=f.toJSON(t.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let m=0,g=f.length;m<g;m++){const v=f[m];d.push(v.toJSON(t.data))}d.length>0&&(s[h]=d,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(e))}const a=t.morphAttributes;for(const f in a){const d=[],m=a[f];for(let g=0,v=m.length;g<v;g++)d.push(m[g].clone(e));this.morphAttributes[f]=d}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,d=c.length;f<d;f++){const m=c[f];this.addGroup(m.start,m.count,m.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new Xe,Ir=new kE,Oa=new ph,hp=new C,Fa=new C,Ba=new C,za=new C,$l=new C,Ga=new C,fp=new C,Ha=new C;class an extends Tn{constructor(t=new Gn,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const u=this.morphTargetInfluences;if(a&&u){Ga.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=u[h],m=a[h];d!==0&&($l.fromBufferAttribute(m,t),c?Ga.addScaledVector($l,d):Ga.addScaledVector($l.sub(e),d))}e.add(Ga)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(a),Ir.copy(t.ray).recast(t.near),!(Oa.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Oa,hp)===null||Ir.origin.distanceToSquared(hp)>(t.far-t.near)**2))&&(up.copy(a).invert(),Ir.copy(t.ray).applyMatrix4(up),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,n){let s;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,g=a.groups,v=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const x=g[M],_=c[x.materialIndex],P=Math.max(x.start,v.start),I=Math.min(u.count,Math.min(x.start+x.count,v.start+v.count));for(let A=P,F=I;A<F;A+=3){const U=u.getX(A),O=u.getX(A+1),z=u.getX(A+2);s=Va(this,_,t,n,f,d,m,U,O,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,v.start),T=Math.min(u.count,v.start+v.count);for(let x=M,_=T;x<_;x+=3){const P=u.getX(x),I=u.getX(x+1),A=u.getX(x+2);s=Va(this,c,t,n,f,d,m,P,I,A),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const x=g[M],_=c[x.materialIndex],P=Math.max(x.start,v.start),I=Math.min(h.count,Math.min(x.start+x.count,v.start+v.count));for(let A=P,F=I;A<F;A+=3){const U=A,O=A+1,z=A+2;s=Va(this,_,t,n,f,d,m,U,O,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const M=Math.max(0,v.start),T=Math.min(h.count,v.start+v.count);for(let x=M,_=T;x<_;x+=3){const P=x,I=x+1,A=x+2;s=Va(this,c,t,n,f,d,m,P,I,A),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function jE(r,t,e,n,s,a,c,u){let h;if(t.side===zn?h=n.intersectTriangle(c,a,s,!0,u):h=n.intersectTriangle(s,a,c,t.side===vr,u),h===null)return null;Ha.copy(u),Ha.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Ha);return f<e.near||f>e.far?null:{distance:f,point:Ha.clone(),object:r}}function Va(r,t,e,n,s,a,c,u,h,f){r.getVertexPosition(u,Fa),r.getVertexPosition(h,Ba),r.getVertexPosition(f,za);const d=jE(r,t,e,n,Fa,Ba,za,fp);if(d){const m=new C;ai.getBarycoord(fp,Fa,Ba,za,m),s&&(d.uv=ai.getInterpolatedAttribute(s,u,h,f,m,new it)),a&&(d.uv1=ai.getInterpolatedAttribute(a,u,h,f,m,new it)),c&&(d.normal=ai.getInterpolatedAttribute(c,u,h,f,m,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new C,materialIndex:0};ai.getNormal(Fa,Ba,za,g.normal),d.face=g,d.barycoord=m}return d}class Wr extends Gn{constructor(t=1,e=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],d=[],m=[];let g=0,v=0;M("z","y","x",-1,-1,n,e,t,c,a,0),M("z","y","x",1,-1,n,e,-t,c,a,1),M("x","z","y",1,1,t,n,e,s,c,2),M("x","z","y",1,-1,t,n,-e,s,c,3),M("x","y","z",1,-1,t,e,n,s,a,4),M("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(m,2));function M(T,x,_,P,I,A,F,U,O,z,L){const w=A/O,H=F/z,Q=A/2,$=F/2,st=U/2,ft=O+1,rt=z+1;let mt=0,j=0;const bt=new C;for(let Pt=0;Pt<rt;Pt++){const Bt=Pt*H-$;for(let he=0;he<ft;he++){const Pe=he*w-Q;bt[T]=Pe*P,bt[x]=Bt*I,bt[_]=st,f.push(bt.x,bt.y,bt.z),bt[T]=0,bt[x]=0,bt[_]=U>0?1:-1,d.push(bt.x,bt.y,bt.z),m.push(he/O),m.push(1-Pt/z),mt+=1}}for(let Pt=0;Pt<z;Pt++)for(let Bt=0;Bt<O;Bt++){const he=g+Bt+ft*Pt,Pe=g+Bt+ft*(Pt+1),lt=g+(Bt+1)+ft*(Pt+1),Mt=g+(Bt+1)+ft*Pt;h.push(he,Pe,Mt),h.push(Pe,lt,Mt),j+=6}u.addGroup(v,j,L),v+=j,g+=mt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ln(r){const t={};for(let e=0;e<r.length;e++){const n=zs(r[e]);for(const s in n)t[s]=n[s]}return t}function ty(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Am(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const ey={clone:zs,merge:Ln};var ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=ty(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?e.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[s]={type:"m4",value:c.toArray()}:e.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bm extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Zi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new C,dp=new it,pp=new it;class $n extends bm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,dp,pp),e.subVectors(pp,dp)}setViewOffset(t,e,n,s,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,e-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,Ss=1;class ry extends Tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $n(xs,Ss,t,e);s.layers=this.layers,this.add(s);const a=new $n(xs,Ss,t,e);a.layers=this.layers,this.add(a);const c=new $n(xs,Ss,t,e);c.layers=this.layers,this.add(c);const u=new $n(xs,Ss,t,e);u.layers=this.layers,this.add(u);const h=new $n(xs,Ss,t,e);h.layers=this.layers,this.add(h);const f=new $n(xs,Ss,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,c,u,h]=e;for(const f of e)this.remove(f);if(t===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,f,d]=this.children,m=t.getRenderTarget(),g=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,c),t.setRenderTarget(n,2,s),t.render(e,u),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,f),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(m,g,v),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class Rm extends Pn{constructor(t,e,n,s,a,c,u,h,f,d){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,a,c,u,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sy extends kr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),a=new xr({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:mr});a.uniforms.tEquirect.value=e;const c=new an(s,a),u=e.minFilter;return e.minFilter===Hr&&(e.minFilter=Ai),new ry(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,n,s);t.setRenderTarget(a)}}class ka extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const T of t.hand.values()){const x=e.getJointPose(T,n),_=this._getHandJoint(f,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const d=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],g=d.position.distanceTo(m.position),v=.02,M=.005;f.inputState.pinching&&g>v+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=v-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ka;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ay extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class cy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new C;class lc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),a=Oe(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new xi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ju extends Hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const uo=new C,Es=new C,ys=new C,Ts=new it,ho=new it,Cm=new Xe,Wa=new C,fo=new C,Xa=new C,mp=new it,Ql=new it,_p=new it;class gp extends Tn{constructor(t=new ju){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cy(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new lc(n,3,0,!1)),Ms.setAttribute("uv",new lc(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new it(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Cm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ys.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const c=this.center;qa(Wa.set(-.5,-.5,0),ys,c,Es,s,a),qa(fo.set(.5,-.5,0),ys,c,Es,s,a),qa(Xa.set(.5,.5,0),ys,c,Es,s,a),mp.set(0,0),Ql.set(1,0),_p.set(1,1);let u=t.ray.intersectTriangle(Wa,fo,Xa,!1,uo);if(u===null&&(qa(fo.set(-.5,.5,0),ys,c,Es,s,a),Ql.set(0,1),u=t.ray.intersectTriangle(Wa,Xa,fo,!1,uo),u===null))return;const h=t.ray.origin.distanceTo(uo);h<t.near||h>t.far||e.push({distance:h,point:uo.clone(),uv:ai.getInterpolation(uo,Wa,fo,Xa,mp,Ql,_p,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qa(r,t,e,n,s,a){Ts.subVectors(r,e).addScalar(.5).multiply(n),s!==void 0?(ho.x=a*Ts.x-s*Ts.y,ho.y=s*Ts.x+a*Ts.y):ho.copy(Ts),r.copy(t),r.x+=ho.x,r.y+=ho.y,r.applyMatrix4(Cm)}const jl=new C,ly=new C,uy=new ce;class Or{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=jl.subVectors(n,e).cross(ly.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uy.getNormalMatrix(t),s=this.coplanarPoint(jl).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ph,Ya=new C;class mh{constructor(t=new Or,e=new Or,n=new Or,s=new Or,a=new Or,c=new Or){this.planes=[t,e,n,s,a,c]}set(t,e,n,s,a,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zi){const n=this.planes,s=t.elements,a=s[0],c=s[1],u=s[2],h=s[3],f=s[4],d=s[5],m=s[6],g=s[7],v=s[8],M=s[9],T=s[10],x=s[11],_=s[12],P=s[13],I=s[14],A=s[15];if(n[0].setComponents(h-a,g-f,x-v,A-_).normalize(),n[1].setComponents(h+a,g+f,x+v,A+_).normalize(),n[2].setComponents(h+c,g+d,x+M,A+P).normalize(),n[3].setComponents(h-c,g-d,x-M,A-P).normalize(),n[4].setComponents(h-u,g-m,x-T,A-I).normalize(),e===Zi)n[5].setComponents(h+u,g+m,x+T,A+I).normalize();else if(e===cc)n[5].setComponents(u,m,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ya.x=s.normal.x>0?t.max.x:t.min.x,Ya.y=s.normal.y>0?t.max.y:t.min.y,Ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lm extends Pn{constructor(t,e,n,s,a,c,u,h,f,d=Ls){if(d!==Ls&&d!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ls&&(n=Vr),n===void 0&&d===Fs&&(n=Os),super(null,s,a,c,u,h,d,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:vi,this.minFilter=h!==void 0?h:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let c=1;c<=t;c++)n=this.getPoint(c/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let c;e?c=e:c=t*n[a-1];let u=0,h=a-1,f;for(;u<=h;)if(s=Math.floor(u+(h-u)/2),f=n[s]-c,f<0)u=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(a-1);const d=n[s],g=n[s+1]-d,v=(c-d)/g;return(s+v)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),u=this.getPoint(a),h=e||(c.isVector2?new it:new C);return h.copy(u).sub(c).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],a=[],c=[],u=new C,h=new Xe;for(let v=0;v<=t;v++){const M=v/t;s[v]=this.getTangentAt(M,new C)}a[0]=new C,c[0]=new C;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),g<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let v=1;v<=t;v++){if(a[v]=a[v-1].clone(),c[v]=c[v-1].clone(),u.crossVectors(s[v-1],s[v]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(pe(s[v-1].dot(s[v]),-1,1));a[v].applyMatrix4(h.makeRotationAxis(u,M))}c[v].crossVectors(s[v],a[v])}if(e===!0){let v=Math.acos(pe(a[0].dot(a[t]),-1,1));v/=t,s[0].dot(u.crossVectors(a[0],a[t]))>0&&(v=-v);for(let M=1;M<=t;M++)a[M].applyMatrix4(h.makeRotationAxis(s[M],v*M)),c[M].crossVectors(s[M],a[M])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _h extends Ri{constructor(t=0,e=0,n=1,s=1,a=0,c=Math.PI*2,u=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=h}getPoint(t,e=new it){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const u=this.aStartAngle+t*a;let h=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=h-this.aX,v=f-this.aY;h=g*d-v*m+this.aX,f=g*m+v*d+this.aY}return n.set(h,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hy extends _h{constructor(t,e,n,s,a,c){super(t,e,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function gh(){let r=0,t=0,e=0,n=0;function s(a,c,u,h){r=a,t=u,e=-3*a+3*c-2*u-h,n=2*a-2*c+u+h}return{initCatmullRom:function(a,c,u,h,f){s(c,u,f*(u-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,u,h,f,d,m){let g=(c-a)/f-(u-a)/(f+d)+(u-c)/d,v=(u-c)/d-(h-c)/(d+m)+(h-u)/m;g*=d,v*=d,s(c,u,g,v)},calc:function(a){const c=a*a,u=c*a;return r+t*a+e*c+n*u}}}const Za=new C,tu=new gh,eu=new gh,nu=new gh;class fy extends Ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,a=s.length,c=(a-(this.closed?0:1))*t;let u=Math.floor(c),h=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:h===0&&u===a-1&&(u=a-2,h=1);let f,d;this.closed||u>0?f=s[(u-1)%a]:(Za.subVectors(s[0],s[1]).add(s[0]),f=Za);const m=s[u%a],g=s[(u+1)%a];if(this.closed||u+2<a?d=s[(u+2)%a]:(Za.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=Za),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let M=Math.pow(f.distanceToSquared(m),v),T=Math.pow(m.distanceToSquared(g),v),x=Math.pow(g.distanceToSquared(d),v);T<1e-4&&(T=1),M<1e-4&&(M=T),x<1e-4&&(x=T),tu.initNonuniformCatmullRom(f.x,m.x,g.x,d.x,M,T,x),eu.initNonuniformCatmullRom(f.y,m.y,g.y,d.y,M,T,x),nu.initNonuniformCatmullRom(f.z,m.z,g.z,d.z,M,T,x)}else this.curveType==="catmullrom"&&(tu.initCatmullRom(f.x,m.x,g.x,d.x,this.tension),eu.initCatmullRom(f.y,m.y,g.y,d.y,this.tension),nu.initCatmullRom(f.z,m.z,g.z,d.z,this.tension));return n.set(tu.calc(h),eu.calc(h),nu.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vp(r,t,e,n,s){const a=(n-t)*.5,c=(s-e)*.5,u=r*r,h=r*u;return(2*e-2*n+a+c)*h+(-3*e+3*n-2*a-c)*u+a*r+e}function dy(r,t){const e=1-r;return e*e*t}function py(r,t){return 2*(1-r)*r*t}function my(r,t){return r*r*t}function Eo(r,t,e,n){return dy(r,t)+py(r,e)+my(r,n)}function _y(r,t){const e=1-r;return e*e*e*t}function gy(r,t){const e=1-r;return 3*e*e*r*t}function vy(r,t){return 3*(1-r)*r*r*t}function xy(r,t){return r*r*r*t}function yo(r,t,e,n,s){return _y(r,t)+gy(r,e)+vy(r,n)+xy(r,s)}class Pm extends Ri{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){const n=e,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return n.set(yo(t,s.x,a.x,c.x,u.x),yo(t,s.y,a.y,c.y,u.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sy extends Ri{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return n.set(yo(t,s.x,a.x,c.x,u.x),yo(t,s.y,a.y,c.y,u.y),yo(t,s.z,a.z,c.z,u.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Im extends Ri{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class My extends Ri{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dm extends Ri{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,s=this.v0,a=this.v1,c=this.v2;return n.set(Eo(t,s.x,a.x,c.x),Eo(t,s.y,a.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ey extends Ri{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,a=this.v1,c=this.v2;return n.set(Eo(t,s.x,a.x,c.x),Eo(t,s.y,a.y,c.y),Eo(t,s.z,a.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Um extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,s=this.points,a=(s.length-1)*t,c=Math.floor(a),u=a-c,h=s[c===0?c:c-1],f=s[c],d=s[c>s.length-2?s.length-1:c+1],m=s[c>s.length-3?s.length-1:c+2];return n.set(vp(u,h.x,f.x,d.x,m.x),vp(u,h.y,f.y,d.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new it().fromArray(s))}return this}}var xp=Object.freeze({__proto__:null,ArcCurve:hy,CatmullRomCurve3:fy,CubicBezierCurve:Pm,CubicBezierCurve3:Sy,EllipseCurve:_h,LineCurve:Im,LineCurve3:My,QuadraticBezierCurve:Dm,QuadraticBezierCurve3:Ey,SplineCurve:Um});class yy extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xp[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const c=s[a]-n,u=this.curves[a],h=u.getLength(),f=h===0?0:1-c/h;return u.getPointAt(f,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],u=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,h=c.getPoints(u);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xp[s.type]().fromJSON(s))}return this}}class Ty extends yy{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Im(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new Dm(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,c){const u=new Pm(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Um(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+u,e+h,n,s,a,c),this}absarc(t,e,n,s,a,c){return this.absellipse(t,e,n,n,s,a,c),this}ellipse(t,e,n,s,a,c,u,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+f,e+d,n,s,a,c,u,h),this}absellipse(t,e,n,s,a,c,u,h){const f=new _h(t,e,n,s,a,c,u,h);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vh extends Gn{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const a=[],c=[],u=[],h=[],f=[],d=1/e,m=new C,g=new it,v=new C,M=new C,T=new C;let x=0,_=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:x=t[P+1].x-t[P].x,_=t[P+1].y-t[P].y,v.x=_*1,v.y=-x,v.z=_*0,T.copy(v),v.normalize(),h.push(v.x,v.y,v.z);break;case t.length-1:h.push(T.x,T.y,T.z);break;default:x=t[P+1].x-t[P].x,_=t[P+1].y-t[P].y,v.x=_*1,v.y=-x,v.z=_*0,M.copy(v),v.x+=T.x,v.y+=T.y,v.z+=T.z,v.normalize(),h.push(v.x,v.y,v.z),T.copy(M)}for(let P=0;P<=e;P++){const I=n+P*d*s,A=Math.sin(I),F=Math.cos(I);for(let U=0;U<=t.length-1;U++){m.x=t[U].x*A,m.y=t[U].y,m.z=t[U].x*F,c.push(m.x,m.y,m.z),g.x=P/e,g.y=U/(t.length-1),u.push(g.x,g.y);const O=h[3*U+0]*A,z=h[3*U+1],L=h[3*U+0]*F;f.push(O,z,L)}}for(let P=0;P<e;P++)for(let I=0;I<t.length-1;I++){const A=I+P*t.length,F=A,U=A+t.length,O=A+t.length+1,z=A+1;a.push(F,U,z),a.push(O,z,U)}this.setIndex(a),this.setAttribute("position",new qe(c,3)),this.setAttribute("uv",new qe(u,2)),this.setAttribute("normal",new qe(f,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vh(t.points,t.segments,t.phiStart,t.phiLength)}}class xh extends vh{constructor(t=1,e=1,n=4,s=8){const a=new Ty;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new xh(t.radius,t.length,t.capSegments,t.radialSegments)}}class pc extends Gn{constructor(t=1,e=1,n=1,s=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const f=this;s=Math.floor(s),a=Math.floor(a);const d=[],m=[],g=[],v=[];let M=0;const T=[],x=n/2;let _=0;P(),c===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new qe(m,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(v,2));function P(){const A=new C,F=new C;let U=0;const O=(e-t)/n;for(let z=0;z<=a;z++){const L=[],w=z/a,H=w*(e-t)+t;for(let Q=0;Q<=s;Q++){const $=Q/s,st=$*h+u,ft=Math.sin(st),rt=Math.cos(st);F.x=H*ft,F.y=-w*n+x,F.z=H*rt,m.push(F.x,F.y,F.z),A.set(ft,O,rt).normalize(),g.push(A.x,A.y,A.z),v.push($,1-w),L.push(M++)}T.push(L)}for(let z=0;z<s;z++)for(let L=0;L<a;L++){const w=T[L][z],H=T[L+1][z],Q=T[L+1][z+1],$=T[L][z+1];(t>0||L!==0)&&(d.push(w,H,$),U+=3),(e>0||L!==a-1)&&(d.push(H,Q,$),U+=3)}f.addGroup(_,U,0),_+=U}function I(A){const F=M,U=new it,O=new C;let z=0;const L=A===!0?t:e,w=A===!0?1:-1;for(let Q=1;Q<=s;Q++)m.push(0,x*w,0),g.push(0,w,0),v.push(.5,.5),M++;const H=M;for(let Q=0;Q<=s;Q++){const st=Q/s*h+u,ft=Math.cos(st),rt=Math.sin(st);O.x=L*rt,O.y=x*w,O.z=L*ft,m.push(O.x,O.y,O.z),g.push(0,w,0),U.x=ft*.5+.5,U.y=rt*.5*w+.5,v.push(U.x,U.y),M++}for(let Q=0;Q<s;Q++){const $=F+Q,st=H+Q;A===!0?d.push(st,st+1,$):d.push(st+1,st,$),z+=3}f.addGroup(_,z,A===!0?1:2),_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sh extends pc{constructor(t=1,e=1,n=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,t,e,n,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(t){return new Sh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mc extends Gn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],c=[];u(s),f(n),d(),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(a.slice(),3)),this.setAttribute("uv",new qe(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const I=new C,A=new C,F=new C;for(let U=0;U<e.length;U+=3)v(e[U+0],I),v(e[U+1],A),v(e[U+2],F),h(I,A,F,P)}function h(P,I,A,F){const U=F+1,O=[];for(let z=0;z<=U;z++){O[z]=[];const L=P.clone().lerp(A,z/U),w=I.clone().lerp(A,z/U),H=U-z;for(let Q=0;Q<=H;Q++)Q===0&&z===U?O[z][Q]=L:O[z][Q]=L.clone().lerp(w,Q/H)}for(let z=0;z<U;z++)for(let L=0;L<2*(U-z)-1;L++){const w=Math.floor(L/2);L%2===0?(g(O[z][w+1]),g(O[z+1][w]),g(O[z][w])):(g(O[z][w+1]),g(O[z+1][w+1]),g(O[z+1][w]))}}function f(P){const I=new C;for(let A=0;A<a.length;A+=3)I.x=a[A+0],I.y=a[A+1],I.z=a[A+2],I.normalize().multiplyScalar(P),a[A+0]=I.x,a[A+1]=I.y,a[A+2]=I.z}function d(){const P=new C;for(let I=0;I<a.length;I+=3){P.x=a[I+0],P.y=a[I+1],P.z=a[I+2];const A=x(P)/2/Math.PI+.5,F=_(P)/Math.PI+.5;c.push(A,1-F)}M(),m()}function m(){for(let P=0;P<c.length;P+=6){const I=c[P+0],A=c[P+2],F=c[P+4],U=Math.max(I,A,F),O=Math.min(I,A,F);U>.9&&O<.1&&(I<.2&&(c[P+0]+=1),A<.2&&(c[P+2]+=1),F<.2&&(c[P+4]+=1))}}function g(P){a.push(P.x,P.y,P.z)}function v(P,I){const A=P*3;I.x=t[A+0],I.y=t[A+1],I.z=t[A+2]}function M(){const P=new C,I=new C,A=new C,F=new C,U=new it,O=new it,z=new it;for(let L=0,w=0;L<a.length;L+=9,w+=6){P.set(a[L+0],a[L+1],a[L+2]),I.set(a[L+3],a[L+4],a[L+5]),A.set(a[L+6],a[L+7],a[L+8]),U.set(c[w+0],c[w+1]),O.set(c[w+2],c[w+3]),z.set(c[w+4],c[w+5]),F.copy(P).add(I).add(A).divideScalar(3);const H=x(F);T(U,w+0,P,H),T(O,w+2,I,H),T(z,w+4,A,H)}}function T(P,I,A,F){F<0&&P.x===1&&(c[I]=P.x-1),A.x===0&&A.z===0&&(c[I]=F/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function _(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.vertices,t.indices,t.radius,t.details)}}class Mh extends mc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,c,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mh(t.radius,t.detail)}}class Eh extends mc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eh(t.radius,t.detail)}}class _c extends Gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,c=e/2,u=Math.floor(n),h=Math.floor(s),f=u+1,d=h+1,m=t/u,g=e/h,v=[],M=[],T=[],x=[];for(let _=0;_<d;_++){const P=_*g-c;for(let I=0;I<f;I++){const A=I*m-a;M.push(A,-P,0),T.push(0,0,1),x.push(I/u),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let P=0;P<u;P++){const I=P+f*_,A=P+f*(_+1),F=P+1+f*(_+1),U=P+1+f*_;v.push(I,A,U),v.push(A,F,U)}this.setIndex(v),this.setAttribute("position",new qe(M,3)),this.setAttribute("normal",new qe(T,3)),this.setAttribute("uv",new qe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.widthSegments,t.heightSegments)}}class yh extends Gn{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(c+u,Math.PI);let f=0;const d=[],m=new C,g=new C,v=[],M=[],T=[],x=[];for(let _=0;_<=n;_++){const P=[],I=_/n;let A=0;_===0&&c===0?A=.5/e:_===n&&h===Math.PI&&(A=-.5/e);for(let F=0;F<=e;F++){const U=F/e;m.x=-t*Math.cos(s+U*a)*Math.sin(c+I*u),m.y=t*Math.cos(c+I*u),m.z=t*Math.sin(s+U*a)*Math.sin(c+I*u),M.push(m.x,m.y,m.z),g.copy(m).normalize(),T.push(g.x,g.y,g.z),x.push(U+A,1-I),P.push(f++)}d.push(P)}for(let _=0;_<n;_++)for(let P=0;P<e;P++){const I=d[_][P+1],A=d[_][P],F=d[_+1][P],U=d[_+1][P+1];(_!==0||c>0)&&v.push(I,A,U),(_!==n-1||h<Math.PI)&&v.push(A,F,U)}this.setIndex(v),this.setAttribute("position",new qe(M,3)),this.setAttribute("normal",new qe(T,3)),this.setAttribute("uv",new qe(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Th extends Gn{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const c=[],u=[],h=[],f=[],d=new C,m=new C,g=new C;for(let v=0;v<=n;v++)for(let M=0;M<=s;M++){const T=M/s*a,x=v/n*Math.PI*2;m.x=(t+e*Math.cos(x))*Math.cos(T),m.y=(t+e*Math.cos(x))*Math.sin(T),m.z=e*Math.sin(x),u.push(m.x,m.y,m.z),d.x=t*Math.cos(T),d.y=t*Math.sin(T),g.subVectors(m,d).normalize(),h.push(g.x,g.y,g.z),f.push(M/s),f.push(v/n)}for(let v=1;v<=n;v++)for(let M=1;M<=s;M++){const T=(s+1)*v+M-1,x=(s+1)*(v-1)+M-1,_=(s+1)*(v-1)+M,P=(s+1)*v+M;c.push(T,x,P),c.push(x,_,P)}this.setIndex(c),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wh extends Gn{constructor(t=1,e=.4,n=64,s=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:a,q:c},n=Math.floor(n),s=Math.floor(s);const u=[],h=[],f=[],d=[],m=new C,g=new C,v=new C,M=new C,T=new C,x=new C,_=new C;for(let I=0;I<=n;++I){const A=I/n*a*Math.PI*2;P(A,a,c,t,v),P(A+.01,a,c,t,M),x.subVectors(M,v),_.addVectors(M,v),T.crossVectors(x,_),_.crossVectors(T,x),T.normalize(),_.normalize();for(let F=0;F<=s;++F){const U=F/s*Math.PI*2,O=-e*Math.cos(U),z=e*Math.sin(U);m.x=v.x+(O*_.x+z*T.x),m.y=v.y+(O*_.y+z*T.y),m.z=v.z+(O*_.z+z*T.z),h.push(m.x,m.y,m.z),g.subVectors(m,v).normalize(),f.push(g.x,g.y,g.z),d.push(I/n),d.push(F/s)}}for(let I=1;I<=n;I++)for(let A=1;A<=s;A++){const F=(s+1)*(I-1)+(A-1),U=(s+1)*I+(A-1),O=(s+1)*I+A,z=(s+1)*(I-1)+A;u.push(F,U,z),u.push(U,O,z)}this.setIndex(u),this.setAttribute("position",new qe(h,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(d,2));function P(I,A,F,U,O){const z=Math.cos(I),L=Math.sin(I),w=F/A*I,H=Math.cos(w);O.x=U*(2+H)*.5*z,O.y=U*(2+H)*L*.5,O.z=U*Math.sin(w)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class yi extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gm,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wy extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ay extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class by{constructor(t,e,n){const s=this;let a=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(d){u++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,u),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,m){return f.push(d,m),this},this.removeHandler=function(d){const m=f.indexOf(d);return m!==-1&&f.splice(m,2),this},this.getHandler=function(d){for(let m=0,g=f.length;m<g;m+=2){const v=f[m],M=f[m+1];if(v.global&&(v.lastIndex=0),v.test(d))return M}return null}}}const Ry=new by;class Ah{constructor(t){this.manager=t!==void 0?t:Ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ah.DEFAULT_MATERIAL_NAME="__DEFAULT";class Cy extends Ah{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,c=Sp.get(t);if(c!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(c),a.manager.itemEnd(t)},0),c;const u=Co("img");function h(){d(),Sp.add(t,this),e&&e(this),a.manager.itemEnd(t)}function f(m){d(),s&&s(m),a.manager.itemError(t),a.manager.itemEnd(t)}function d(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class Mp extends Ah{constructor(t){super(t)}load(t,e,n,s){const a=new Pn,c=new Cy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},n,s),a}}class Nm extends Tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ly extends Nm{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const iu=new Xe,Ep=new C,yp=new C;class Py{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ep.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ep),yp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yp),e.updateMatrixWorld(),iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tp=new Xe,po=new C,ru=new C;class Iy extends Py{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),po.setFromMatrixPosition(t.matrixWorld),n.position.copy(po),ru.copy(n.position),ru.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ru),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tp)}}class bh extends Nm{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Iy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dy extends bm{constructor(t=-1,e=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,c=n+t,u=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=d*this.view.offsetY,h=u-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Uy extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function wp(r,t,e,n){const s=Ny(n);switch(e){case um:return r*t;case fm:return r*t;case dm:return r*t*2;case pm:return r*t/s.components*s.byteLength;case hh:return r*t/s.components*s.byteLength;case mm:return r*t*2/s.components*s.byteLength;case fh:return r*t*2/s.components*s.byteLength;case hm:return r*t*3/s.components*s.byteLength;case gi:return r*t*4/s.components*s.byteLength;case dh:return r*t*4/s.components*s.byteLength;case ec:case nc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ic:case rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:case Ru:return Math.max(r,16)*Math.max(t,8)/4;case wu:case bu:return Math.max(r,8)*Math.max(t,8)/2;case Cu:case Lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Du:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Uu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ou:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case zu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ku:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Wu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case sc:case qu:case Yu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _m:case Zu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ku:case $u:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ny(r){switch(r){case $i:case am:return{byteLength:1,components:1};case Ro:case cm:case Po:return{byteLength:2,components:1};case lh:case uh:return{byteLength:2,components:4};case Vr:case ch:case Yi:return{byteLength:4,components:1};case lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Om(){let r=null,t=!1,e=null,n=null;function s(a,c){e(a,c),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function Oy(r){const t=new WeakMap;function e(u,h){const f=u.array,d=u.usage,m=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,d),u.onUploadCallback();let v;if(f instanceof Float32Array)v=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?v=r.HALF_FLOAT:v=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=r.SHORT;else if(f instanceof Uint32Array)v=r.UNSIGNED_INT;else if(f instanceof Int32Array)v=r.INT;else if(f instanceof Int8Array)v=r.BYTE;else if(f instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function n(u,h,f){const d=h.array,m=h.updateRanges;if(r.bindBuffer(f,u),m.length===0)r.bufferSubData(f,0,d);else{m.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<m.length;v++){const M=m[g],T=m[v];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,m[g]=T)}m.length=g+1;for(let v=0,M=m.length;v<M;v++){const T=m[v];r.bufferSubData(f,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=t.get(u);h&&(r.deleteBuffer(h.buffer),t.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const d=t.get(u);(!d||d.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,h),f.version=u.version}}return{get:s,remove:a,update:c}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
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
#endif`,zy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
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
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy=`#ifdef USE_BATCHING
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
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$y=`#ifdef USE_IRIDESCENCE
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
#endif`,Jy=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oT=`#define PI 3.141592653589793
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
} // validated`,aT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ET=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RT=`uniform bool receiveShadow;
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
#endif`,CT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
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
#endif`,NT=`struct PhysicalMaterial {
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
}`,OT=`
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qT=`#if defined( USE_POINTS_UV )
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
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
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
#endif`,jT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
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
#endif`,ow=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mw=`float getShadowMask() {
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
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yw=`#ifdef USE_SKINNING
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
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Pw=`#ifdef USE_TRANSMISSION
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fw=`uniform sampler2D t2D;
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
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`#include <common>
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
}`,kw=`#if DEPTH_PACKING == 3200
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
}`,Ww=`#define DISTANCE
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
}`,Xw=`#define DISTANCE
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`uniform float scale;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,jw=`#define LAMBERT
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
}`,tA=`#define MATCAP
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
}`,eA=`#define MATCAP
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
}`,nA=`#define NORMAL
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
}`,iA=`#define NORMAL
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
}`,rA=`#define PHONG
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
}`,sA=`#define PHONG
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
}`,oA=`#define STANDARD
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
}`,aA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,lA=`#define TOON
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
}`,uA=`uniform float size;
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
}`,hA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,dA=`uniform vec3 color;
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
}`,pA=`uniform float rotation;
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
}`,mA=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Fy,alphahash_pars_fragment:By,alphamap_fragment:zy,alphamap_pars_fragment:Gy,alphatest_fragment:Hy,alphatest_pars_fragment:Vy,aomap_fragment:ky,aomap_pars_fragment:Wy,batching_pars_vertex:Xy,batching_vertex:qy,begin_vertex:Yy,beginnormal_vertex:Zy,bsdfs:Ky,iridescence_fragment:$y,bumpmap_pars_fragment:Jy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:tT,clipping_planes_vertex:eT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:rT,color_vertex:sT,common:oT,cube_uv_reflection_fragment:aT,defaultnormal_vertex:cT,displacementmap_pars_vertex:lT,displacementmap_vertex:uT,emissivemap_fragment:hT,emissivemap_pars_fragment:fT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:_T,envmap_pars_fragment:gT,envmap_pars_vertex:vT,envmap_physical_pars_fragment:CT,envmap_vertex:xT,fog_vertex:ST,fog_pars_vertex:MT,fog_fragment:ET,fog_pars_fragment:yT,gradientmap_pars_fragment:TT,lightmap_pars_fragment:wT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:bT,lights_pars_begin:RT,lights_toon_fragment:LT,lights_toon_pars_fragment:PT,lights_phong_fragment:IT,lights_phong_pars_fragment:DT,lights_physical_fragment:UT,lights_physical_pars_fragment:NT,lights_fragment_begin:OT,lights_fragment_maps:FT,lights_fragment_end:BT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:GT,logdepthbuf_pars_vertex:HT,logdepthbuf_vertex:VT,map_fragment:kT,map_pars_fragment:WT,map_particle_fragment:XT,map_particle_pars_fragment:qT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:ZT,morphinstance_vertex:KT,morphcolor_vertex:$T,morphnormal_vertex:JT,morphtarget_pars_vertex:QT,morphtarget_vertex:jT,normal_fragment_begin:tw,normal_fragment_maps:ew,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:ow,clearcoat_normal_fragment_maps:aw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:lw,opaque_fragment:uw,packing:hw,premultiplied_alpha_fragment:fw,project_vertex:dw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:vw,shadowmap_pars_vertex:xw,shadowmap_vertex:Sw,shadowmask_pars_fragment:Mw,skinbase_vertex:Ew,skinning_pars_vertex:yw,skinning_vertex:Tw,skinnormal_vertex:ww,specularmap_fragment:Aw,specularmap_pars_fragment:bw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Cw,transmission_fragment:Lw,transmission_pars_fragment:Pw,uv_pars_fragment:Iw,uv_pars_vertex:Dw,uv_vertex:Uw,worldpos_vertex:Nw,background_vert:Ow,background_frag:Fw,backgroundCube_vert:Bw,backgroundCube_frag:zw,cube_vert:Gw,cube_frag:Hw,depth_vert:Vw,depth_frag:kw,distanceRGBA_vert:Ww,distanceRGBA_frag:Xw,equirect_vert:qw,equirect_frag:Yw,linedashed_vert:Zw,linedashed_frag:Kw,meshbasic_vert:$w,meshbasic_frag:Jw,meshlambert_vert:Qw,meshlambert_frag:jw,meshmatcap_vert:tA,meshmatcap_frag:eA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:rA,meshphong_frag:sA,meshphysical_vert:oA,meshphysical_frag:aA,meshtoon_vert:cA,meshtoon_frag:lA,points_vert:uA,points_frag:hA,shadow_vert:fA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},Tt={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ti={basic:{uniforms:Ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Ln([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Ln([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Ln([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new tt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Ln([Tt.points,Tt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Ln([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Ln([Tt.common,Tt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Ln([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Ln([Tt.sprite,Tt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Ln([Tt.common,Tt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Ln([Tt.lights,Tt.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ti.physical={uniforms:Ln([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Ka={r:0,b:0,g:0},Ur=new bi,_A=new Xe;function gA(r,t,e,n,s,a,c){const u=new tt(0);let h=a===!0?0:1,f,d,m=null,g=0,v=null;function M(I){let A=I.isScene===!0?I.background:null;return A&&A.isTexture&&(A=(I.backgroundBlurriness>0?e:t).get(A)),A}function T(I){let A=!1;const F=M(I);F===null?_(u,h):F&&F.isColor&&(_(F,1),A=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(r.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(I,A){const F=M(A);F&&(F.isCubeTexture||F.mapping===dc)?(d===void 0&&(d=new an(new Wr(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:zs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ur.copy(A.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),d.material.uniforms.envMap.value=F,d.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Ur)),d.material.toneMapped=Ae.getTransfer(F.colorSpace)!==Ne,(m!==F||g!==F.version||v!==r.toneMapping)&&(d.material.needsUpdate=!0,m=F,g=F.version,v=r.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):F&&F.isTexture&&(f===void 0&&(f=new an(new _c(2,2),new xr({name:"BackgroundMaterial",uniforms:zs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=F,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.toneMapped=Ae.getTransfer(F.colorSpace)!==Ne,F.matrixAutoUpdate===!0&&F.updateMatrix(),f.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||g!==F.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,m=F,g=F.version,v=r.toneMapping),f.layers.enableAll(),I.unshift(f,f.geometry,f.material,0,0,null))}function _(I,A){I.getRGB(Ka,Am(r)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,A,c)}function P(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(I,A=1){u.set(I),h=A,_(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,_(u,h)},render:T,addToRenderList:x,dispose:P}}function vA(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=g(null);let a=s,c=!1;function u(w,H,Q,$,st){let ft=!1;const rt=m($,Q,H);a!==rt&&(a=rt,f(a.object)),ft=v(w,$,Q,st),ft&&M(w,$,Q,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(ft||c)&&(c=!1,A(w,H,Q,$),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function h(){return r.createVertexArray()}function f(w){return r.bindVertexArray(w)}function d(w){return r.deleteVertexArray(w)}function m(w,H,Q){const $=Q.wireframe===!0;let st=n[w.id];st===void 0&&(st={},n[w.id]=st);let ft=st[H.id];ft===void 0&&(ft={},st[H.id]=ft);let rt=ft[$];return rt===void 0&&(rt=g(h()),ft[$]=rt),rt}function g(w){const H=[],Q=[],$=[];for(let st=0;st<e;st++)H[st]=0,Q[st]=0,$[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:$,object:w,attributes:{},index:null}}function v(w,H,Q,$){const st=a.attributes,ft=H.attributes;let rt=0;const mt=Q.getAttributes();for(const j in mt)if(mt[j].location>=0){const Pt=st[j];let Bt=ft[j];if(Bt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Bt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Bt=w.instanceColor)),Pt===void 0||Pt.attribute!==Bt||Bt&&Pt.data!==Bt.data)return!0;rt++}return a.attributesNum!==rt||a.index!==$}function M(w,H,Q,$){const st={},ft=H.attributes;let rt=0;const mt=Q.getAttributes();for(const j in mt)if(mt[j].location>=0){let Pt=ft[j];Pt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Pt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Pt=w.instanceColor));const Bt={};Bt.attribute=Pt,Pt&&Pt.data&&(Bt.data=Pt.data),st[j]=Bt,rt++}a.attributes=st,a.attributesNum=rt,a.index=$}function T(){const w=a.newAttributes;for(let H=0,Q=w.length;H<Q;H++)w[H]=0}function x(w){_(w,0)}function _(w,H){const Q=a.newAttributes,$=a.enabledAttributes,st=a.attributeDivisors;Q[w]=1,$[w]===0&&(r.enableVertexAttribArray(w),$[w]=1),st[w]!==H&&(r.vertexAttribDivisor(w,H),st[w]=H)}function P(){const w=a.newAttributes,H=a.enabledAttributes;for(let Q=0,$=H.length;Q<$;Q++)H[Q]!==w[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function I(w,H,Q,$,st,ft,rt){rt===!0?r.vertexAttribIPointer(w,H,Q,st,ft):r.vertexAttribPointer(w,H,Q,$,st,ft)}function A(w,H,Q,$){T();const st=$.attributes,ft=Q.getAttributes(),rt=H.defaultAttributeValues;for(const mt in ft){const j=ft[mt];if(j.location>=0){let bt=st[mt];if(bt===void 0&&(mt==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),mt==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor)),bt!==void 0){const Pt=bt.normalized,Bt=bt.itemSize,he=t.get(bt);if(he===void 0)continue;const Pe=he.buffer,lt=he.type,Mt=he.bytesPerElement,zt=lt===r.INT||lt===r.UNSIGNED_INT||bt.gpuType===ch;if(bt.isInterleavedBufferAttribute){const Rt=bt.data,qt=Rt.stride,me=bt.offset;if(Rt.isInstancedInterleavedBuffer){for(let jt=0;jt<j.locationSize;jt++)_(j.location+jt,Rt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let jt=0;jt<j.locationSize;jt++)x(j.location+jt);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let jt=0;jt<j.locationSize;jt++)I(j.location+jt,Bt/j.locationSize,lt,Pt,qt*Mt,(me+Bt/j.locationSize*jt)*Mt,zt)}else{if(bt.isInstancedBufferAttribute){for(let Rt=0;Rt<j.locationSize;Rt++)_(j.location+Rt,bt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)x(j.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Rt=0;Rt<j.locationSize;Rt++)I(j.location+Rt,Bt/j.locationSize,lt,Pt,Bt*Mt,Bt/j.locationSize*Rt*Mt,zt)}}else if(rt!==void 0){const Pt=rt[mt];if(Pt!==void 0)switch(Pt.length){case 2:r.vertexAttrib2fv(j.location,Pt);break;case 3:r.vertexAttrib3fv(j.location,Pt);break;case 4:r.vertexAttrib4fv(j.location,Pt);break;default:r.vertexAttrib1fv(j.location,Pt)}}}}P()}function F(){z();for(const w in n){const H=n[w];for(const Q in H){const $=H[Q];for(const st in $)d($[st].object),delete $[st];delete H[Q]}delete n[w]}}function U(w){if(n[w.id]===void 0)return;const H=n[w.id];for(const Q in H){const $=H[Q];for(const st in $)d($[st].object),delete $[st];delete H[Q]}delete n[w.id]}function O(w){for(const H in n){const Q=n[H];if(Q[w.id]===void 0)continue;const $=Q[w.id];for(const st in $)d($[st].object),delete $[st];delete Q[w.id]}}function z(){L(),c=!0,a!==s&&(a=s,f(a.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:z,resetDefaultState:L,dispose:F,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:x,disableUnusedAttributes:P}}function xA(r,t,e){let n;function s(f){n=f}function a(f,d){r.drawArrays(n,f,d),e.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawArraysInstanced(n,f,d,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,m);let v=0;for(let M=0;M<m;M++)v+=d[M];e.update(v,n,1)}function h(f,d,m,g){if(m===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<f.length;M++)c(f[M],d[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(n,f,0,d,0,g,0,m);let M=0;for(let T=0;T<m;T++)M+=d[T]*g[T];e.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function SA(r,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==gi&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const z=O===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==$i&&n.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!z)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const d=h(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);const m=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),v=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:A,vertexTextures:F,maxSamples:U}}function MA(r){const t=this;let e=null,n=0,s=!1,a=!1;const c=new Or,u=new ce,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||s;return s=g,n=m.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){e=d(m,g,0)},this.setState=function(m,g,v){const M=m.clippingPlanes,T=m.clipIntersection,x=m.clipShadows,_=r.get(m);if(!s||M===null||M.length===0||a&&!x)a?d(null):f();else{const P=a?0:n,I=P*4;let A=_.clippingState||null;h.value=A,A=d(M,g,I,v);for(let F=0;F!==I;++F)A[F]=e[F];_.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,g,v,M){const T=m!==null?m.length:0;let x=null;if(T!==0){if(x=h.value,M!==!0||x===null){const _=v+T*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(x===null||x.length<_)&&(x=new Float32Array(_));for(let I=0,A=v;I!==T;++I,A+=4)c.copy(m[I]).applyMatrix4(P,u),c.normal.toArray(x,A),x[A+3]=c.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function EA(r){let t=new WeakMap;function e(c,u){return u===Mu?c.mapping=Us:u===Eu&&(c.mapping=Ns),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===Mu||u===Eu)if(t.has(c)){const h=t.get(c).texture;return e(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new sy(h.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",s),e(f.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const bs=4,Ap=[.125,.215,.35,.446,.526,.582],zr=20,su=new Dy,bp=new tt;let ou=null,au=0,cu=0,lu=!1;const Fr=(1+Math.sqrt(5))/2,ws=1/Fr,Rp=[new C(-Fr,ws,0),new C(Fr,ws,0),new C(-ws,0,Fr),new C(ws,0,Fr),new C(0,Fr,-ws),new C(0,Fr,ws),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Cp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ou,au,cu),this._renderer.xr.enabled=lu,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Po,format:gi,colorSpace:Bs,depthBuffer:!1},s=Lp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(a)),this._blurMaterial=TA(a,t,e)}return s}_compileMaterial(t){const e=new an(this._lodPlanes[0],t);this._renderer.compile(e,su)}_sceneToCubeUV(t,e,n,s){const u=new $n(90,1,e,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,g=d.toneMapping;d.getClearColor(bp),d.toneMapping=_r,d.autoClear=!1;const v=new Bn({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new an(new Wr,v);let T=!1;const x=t.background;x?x.isColor&&(v.color.copy(x),t.background=null,T=!0):(v.color.copy(bp),T=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(u.up.set(0,h[_],0),u.lookAt(f[_],0,0)):P===1?(u.up.set(0,0,h[_]),u.lookAt(0,f[_],0)):(u.up.set(0,h[_],0),u.lookAt(0,0,f[_]));const I=this._cubeSize;$a(s,P*I,_>2?I:0,I,I),d.setRenderTarget(s),T&&d.render(M,u),d.render(t,u)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=g,d.autoClear=m,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new an(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const h=this._cubeSize;$a(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(c,su)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Rp[(s-a-1)%Rp.length];this._blur(t,a-1,a,c,u)}e.autoClear=n}_blur(t,e,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,n,s,"latitudinal",a),this._halfBlur(c,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new an(this._lodPlanes[s],f),g=f.uniforms,v=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*zr-1),T=a/M,x=isFinite(a)?1+Math.floor(d*T):zr;x>zr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zr}`);const _=[];let P=0;for(let O=0;O<zr;++O){const z=O/T,L=Math.exp(-z*z/2);_.push(L),O===0?P+=L:O<x&&(P+=2*L)}for(let O=0;O<_.length;O++)_[O]=_[O]/P;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:I}=this;g.dTheta.value=M,g.mipInt.value=I-n;const A=this._sizeLods[s],F=3*A*(s>I-bs?s-I+bs:0),U=4*(this._cubeSize-A);$a(e,F,U,3*A,2*A),h.setRenderTarget(e),h.render(m,su)}}function yA(r){const t=[],e=[],n=[];let s=r;const a=r-bs+1+Ap.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>r-bs?h=Ap[c-r+bs-1]:c===0&&(h=0),n.push(h);const f=1/(u-2),d=-f,m=1+f,g=[d,d,m,d,m,m,d,d,m,m,d,m],v=6,M=6,T=3,x=2,_=1,P=new Float32Array(T*M*v),I=new Float32Array(x*M*v),A=new Float32Array(_*M*v);for(let U=0;U<v;U++){const O=U%3*2/3-1,z=U>2?0:-1,L=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];P.set(L,T*M*U),I.set(g,x*M*U);const w=[U,U,U,U,U,U];A.set(w,_*M*U)}const F=new Gn;F.setAttribute("position",new xi(P,T)),F.setAttribute("uv",new xi(I,x)),F.setAttribute("faceIndex",new xi(A,_)),t.push(F),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lp(r,t,e){const n=new kr(r,t,e);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function TA(r,t,e){const n=new Float32Array(zr),s=new C(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Pp(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Ip(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function wA(r){let t=new WeakMap,e=null;function n(u){if(u&&u.isTexture){const h=u.mapping,f=h===Mu||h===Eu,d=h===Us||h===Ns;if(f||d){let m=t.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new Cp(r)),m=f?e.fromEquirectangular(u,m):e.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return f&&v&&v.height>0||d&&v&&s(v)?(e===null&&(e=new Cp(r)),m=f?e.fromEquirectangular(u):e.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function s(u){let h=0;const f=6;for(let d=0;d<f;d++)u[d]!==void 0&&h++;return h===f}function a(u){const h=u.target;h.removeEventListener("dispose",a);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:c}}function AA(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bA(r,t,e,n){const s={},a=new WeakMap;function c(m){const g=m.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete s[g.id];const v=a.get(g);v&&(t.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,e.memory.geometries++),g}function h(m){const g=m.attributes;for(const v in g)t.update(g[v],r.ARRAY_BUFFER)}function f(m){const g=[],v=m.index,M=m.attributes.position;let T=0;if(v!==null){const P=v.array;T=v.version;for(let I=0,A=P.length;I<A;I+=3){const F=P[I+0],U=P[I+1],O=P[I+2];g.push(F,U,U,O,O,F)}}else if(M!==void 0){const P=M.array;T=M.version;for(let I=0,A=P.length/3-1;I<A;I+=3){const F=I+0,U=I+1,O=I+2;g.push(F,U,U,O,O,F)}}else return;const x=new(xm(g)?wm:Tm)(g,1);x.version=T;const _=a.get(m);_&&t.remove(_),a.set(m,x)}function d(m){const g=a.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&f(m)}else f(m);return a.get(m)}return{get:u,update:h,getWireframeAttribute:d}}function RA(r,t,e){let n;function s(g){n=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function h(g,v){r.drawElements(n,v,a,g*c),e.update(v,n,1)}function f(g,v,M){M!==0&&(r.drawElementsInstanced(n,v,a,g*c,M),e.update(v,n,M))}function d(g,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,M);let x=0;for(let _=0;_<M;_++)x+=v[_];e.update(x,n,1)}function m(g,v,M,T){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)f(g[_]/c,v[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,T,0,M);let _=0;for(let P=0;P<M;P++)_+=v[P]*T[P];e.update(_,n,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function CA(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(a/3);break;case r.LINES:e.lines+=u*(a/2);break;case r.LINE_STRIP:e.lines+=u*(a-1);break;case r.LINE_LOOP:e.lines+=u*a;break;case r.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function LA(r,t,e){const n=new WeakMap,s=new Fe;function a(c,u,h){const f=c.morphTargetInfluences,d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let g=n.get(u);if(g===void 0||g.count!==m){let w=function(){z.dispose(),n.delete(u),u.removeEventListener("dispose",w)};var v=w;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let A=0;M===!0&&(A=1),T===!0&&(A=2),x===!0&&(A=3);let F=u.attributes.position.count*A,U=1;F>t.maxTextureSize&&(U=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*U*4*m),z=new Mm(O,F,U,m);z.type=Yi,z.needsUpdate=!0;const L=A*4;for(let H=0;H<m;H++){const Q=_[H],$=P[H],st=I[H],ft=F*U*4*H;for(let rt=0;rt<Q.count;rt++){const mt=rt*L;M===!0&&(s.fromBufferAttribute(Q,rt),O[ft+mt+0]=s.x,O[ft+mt+1]=s.y,O[ft+mt+2]=s.z,O[ft+mt+3]=0),T===!0&&(s.fromBufferAttribute($,rt),O[ft+mt+4]=s.x,O[ft+mt+5]=s.y,O[ft+mt+6]=s.z,O[ft+mt+7]=0),x===!0&&(s.fromBufferAttribute(st,rt),O[ft+mt+8]=s.x,O[ft+mt+9]=s.y,O[ft+mt+10]=s.z,O[ft+mt+11]=st.itemSize===4?s.w:1)}}g={count:m,texture:z,size:new it(F,U)},n.set(u,g),u.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let M=0;for(let x=0;x<f.length;x++)M+=f[x];const T=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function PA(r,t,e,n){let s=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,m=t.get(h,d);if(s.get(m)!==f&&(t.update(m),s.set(m,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return m}function c(){s=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:c}}const Fm=new Pn,Dp=new Lm(1,1),Bm=new Mm,zm=new HE,Gm=new Rm,Up=[],Np=[],Op=new Float32Array(16),Fp=new Float32Array(9),Bp=new Float32Array(4);function Vs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let a=Up[s];if(a===void 0&&(a=new Float32Array(s),Up[s]=a),t!==0){n.toArray(a,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(a,u)}return a}function cn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ln(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function gc(r,t){let e=Np[t];e===void 0&&(e=new Int32Array(t),Np[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function IA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function DA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2fv(this.addr,t),ln(e,t)}}function UA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;r.uniform3fv(this.addr,t),ln(e,t)}}function NA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4fv(this.addr,t),ln(e,t)}}function OA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Bp.set(n),r.uniformMatrix2fv(this.addr,!1,Bp),ln(e,n)}}function FA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Fp.set(n),r.uniformMatrix3fv(this.addr,!1,Fp),ln(e,n)}}function BA(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Op.set(n),r.uniformMatrix4fv(this.addr,!1,Op),ln(e,n)}}function zA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function GA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2iv(this.addr,t),ln(e,t)}}function HA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;r.uniform3iv(this.addr,t),ln(e,t)}}function VA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4iv(this.addr,t),ln(e,t)}}function kA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function WA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;r.uniform2uiv(this.addr,t),ln(e,t)}}function XA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;r.uniform3uiv(this.addr,t),ln(e,t)}}function qA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;r.uniform4uiv(this.addr,t),ln(e,t)}}function YA(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(Dp.compareFunction=vm,a=Dp):a=Fm,e.setTexture2D(t||a,s)}function ZA(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zm,s)}function KA(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gm,s)}function $A(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bm,s)}function JA(r){switch(r){case 5126:return IA;case 35664:return DA;case 35665:return UA;case 35666:return NA;case 35674:return OA;case 35675:return FA;case 35676:return BA;case 5124:case 35670:return zA;case 35667:case 35671:return GA;case 35668:case 35672:return HA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return WA;case 36295:return XA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return $A}}function QA(r,t){r.uniform1fv(this.addr,t)}function jA(r,t){const e=Vs(t,this.size,2);r.uniform2fv(this.addr,e)}function t1(r,t){const e=Vs(t,this.size,3);r.uniform3fv(this.addr,e)}function e1(r,t){const e=Vs(t,this.size,4);r.uniform4fv(this.addr,e)}function n1(r,t){const e=Vs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function i1(r,t){const e=Vs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function r1(r,t){const e=Vs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function s1(r,t){r.uniform1iv(this.addr,t)}function o1(r,t){r.uniform2iv(this.addr,t)}function a1(r,t){r.uniform3iv(this.addr,t)}function c1(r,t){r.uniform4iv(this.addr,t)}function l1(r,t){r.uniform1uiv(this.addr,t)}function u1(r,t){r.uniform2uiv(this.addr,t)}function h1(r,t){r.uniform3uiv(this.addr,t)}function f1(r,t){r.uniform4uiv(this.addr,t)}function d1(r,t,e){const n=this.cache,s=t.length,a=gc(e,s);cn(n,a)||(r.uniform1iv(this.addr,a),ln(n,a));for(let c=0;c!==s;++c)e.setTexture2D(t[c]||Fm,a[c])}function p1(r,t,e){const n=this.cache,s=t.length,a=gc(e,s);cn(n,a)||(r.uniform1iv(this.addr,a),ln(n,a));for(let c=0;c!==s;++c)e.setTexture3D(t[c]||zm,a[c])}function m1(r,t,e){const n=this.cache,s=t.length,a=gc(e,s);cn(n,a)||(r.uniform1iv(this.addr,a),ln(n,a));for(let c=0;c!==s;++c)e.setTextureCube(t[c]||Gm,a[c])}function _1(r,t,e){const n=this.cache,s=t.length,a=gc(e,s);cn(n,a)||(r.uniform1iv(this.addr,a),ln(n,a));for(let c=0;c!==s;++c)e.setTexture2DArray(t[c]||Bm,a[c])}function g1(r){switch(r){case 5126:return QA;case 35664:return jA;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return a1;case 35669:case 35673:return c1;case 5125:return l1;case 36294:return u1;case 36295:return h1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return _1}}class v1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=JA(e.type)}}class x1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g1(e.type)}}class S1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(t,e[u.id],n)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function zp(r,t){r.seq.push(t),r.map[t.id]=t}function M1(r,t,e){const n=r.name,s=n.length;for(uu.lastIndex=0;;){const a=uu.exec(n),c=uu.lastIndex;let u=a[1];const h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){zp(e,f===void 0?new v1(u,r,t):new x1(u,r,t));break}else{let m=e.map[u];m===void 0&&(m=new S1(u),zp(e,m)),e=m}}}class oc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),c=t.getUniformLocation(e,a.name);M1(a,c,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,c=e.length;a!==c;++a){const u=e[a],h=n[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const c=t[s];c.id in e&&n.push(c)}return n}}function Gp(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const E1=37297;let y1=0;function T1(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=s;c<a;c++){const u=c+1;n.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return n.join(`
`)}const Hp=new ce;function w1(r){Ae._getMatrix(Hp,Ae.workingColorSpace,r);const t=`mat3( ${Hp.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(r)){case ac:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Vp(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+T1(r.getShaderSource(t),c)}else return s}function A1(r,t){const e=w1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b1(r,t){let e;switch(t){case dE:e="Linear";break;case pE:e="Reinhard";break;case mE:e="Cineon";break;case _E:e="ACESFilmic";break;case vE:e="AgX";break;case xE:e="Neutral";break;case gE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ja=new C;function R1(){Ae.getLuminanceCoefficients(Ja);const r=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function L1(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P1(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(t,s),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),e[c]={type:a.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function So(r){return r!==""}function kp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(r){return r.replace(I1,U1)}const D1=new Map;function U1(r,t){let e=ue[t];if(e===void 0){const n=D1.get(t);if(n!==void 0)e=ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return th(e)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(r){return r.replace(N1,O1)}function O1(r,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function qp(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function F1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===qM?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function B1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sm:t="ENVMAP_BLENDING_MULTIPLY";break;case hE:t="ENVMAP_BLENDING_MIX";break;case fE:t="ENVMAP_BLENDING_ADD";break}return t}function H1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function V1(r,t,e,n){const s=r.getContext(),a=e.defines;let c=e.vertexShader,u=e.fragmentShader;const h=F1(e),f=B1(e),d=z1(e),m=G1(e),g=H1(e),v=C1(e),M=L1(a),T=s.createProgram();let x,_,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(So).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(So).join(`
`),_.length>0&&(_+=`
`)):(x=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),_=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_r?"#define TONE_MAPPING":"",e.toneMapping!==_r?ue.tonemapping_pars_fragment:"",e.toneMapping!==_r?b1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,A1("linearToOutputTexel",e.outputColorSpace),R1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(So).join(`
`)),c=th(c),c=kp(c,e),c=Wp(c,e),u=th(u),u=kp(u,e),u=Wp(u,e),c=Xp(c),u=Xp(u),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=P+x+c,A=P+_+u,F=Gp(s,s.VERTEX_SHADER,I),U=Gp(s,s.FRAGMENT_SHADER,A);s.attachShader(T,F),s.attachShader(T,U),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function O(H){if(r.debug.checkShaderErrors){const Q=s.getProgramInfoLog(T).trim(),$=s.getShaderInfoLog(F).trim(),st=s.getShaderInfoLog(U).trim();let ft=!0,rt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(ft=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,T,F,U);else{const mt=Vp(s,F,"vertex"),j=Vp(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+mt+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||st==="")&&(rt=!1);rt&&(H.diagnostics={runnable:ft,programLog:Q,vertexShader:{log:$,prefix:x},fragmentShader:{log:st,prefix:_}})}s.deleteShader(F),s.deleteShader(U),z=new oc(s,T),L=P1(s,T)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(T,E1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=F,this.fragmentShader=U,this}let k1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new X1(t),e.set(t,n)),n}}class X1{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}}function q1(r,t,e,n,s,a,c){const u=new Em,h=new W1,f=new Set,d=[],m=s.logarithmicDepthBuffer,g=s.vertexTextures;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return f.add(L),L===0?"uv":`uv${L}`}function x(L,w,H,Q,$){const st=Q.fog,ft=$.geometry,rt=L.isMeshStandardMaterial?Q.environment:null,mt=(L.isMeshStandardMaterial?e:t).get(L.envMap||rt),j=mt&&mt.mapping===dc?mt.image.height:null,bt=M[L.type];L.precision!==null&&(v=s.getMaxPrecision(L.precision),v!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",v,"instead."));const Pt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Bt=Pt!==void 0?Pt.length:0;let he=0;ft.morphAttributes.position!==void 0&&(he=1),ft.morphAttributes.normal!==void 0&&(he=2),ft.morphAttributes.color!==void 0&&(he=3);let Pe,lt,Mt,zt;if(bt){const be=Ti[bt];Pe=be.vertexShader,lt=be.fragmentShader}else Pe=L.vertexShader,lt=L.fragmentShader,h.update(L),Mt=h.getVertexShaderID(L),zt=h.getFragmentShaderID(L);const Rt=r.getRenderTarget(),qt=r.state.buffers.depth.getReversed(),me=$.isInstancedMesh===!0,jt=$.isBatchedMesh===!0,He=!!L.map,De=!!L.matcap,_e=!!mt,B=!!L.aoMap,un=!!L.lightMap,xe=!!L.bumpMap,ne=!!L.normalMap,Wt=!!L.displacementMap,Be=!!L.emissiveMap,Vt=!!L.metalnessMap,D=!!L.roughnessMap,E=L.anisotropy>0,Y=L.clearcoat>0,ht=L.dispersion>0,dt=L.iridescence>0,at=L.sheen>0,Ht=L.transmission>0,Et=E&&!!L.anisotropyMap,It=Y&&!!L.clearcoatMap,ge=Y&&!!L.clearcoatNormalMap,St=Y&&!!L.clearcoatRoughnessMap,Ut=dt&&!!L.iridescenceMap,Zt=dt&&!!L.iridescenceThicknessMap,Qt=at&&!!L.sheenColorMap,Nt=at&&!!L.sheenRoughnessMap,de=!!L.specularMap,ie=!!L.specularColorMap,Ue=!!L.specularIntensityMap,V=Ht&&!!L.transmissionMap,wt=Ht&&!!L.thicknessMap,et=!!L.gradientMap,ut=!!L.alphaMap,Lt=L.alphaTest>0,Ct=!!L.alphaHash,se=!!L.extensions;let Ye=_r;L.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(Ye=r.toneMapping);const nn={shaderID:bt,shaderType:L.type,shaderName:L.name,vertexShader:Pe,fragmentShader:lt,defines:L.defines,customVertexShaderID:Mt,customFragmentShaderID:zt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:v,batching:jt,batchingColor:jt&&$._colorsTexture!==null,instancing:me,instancingColor:me&&$.instanceColor!==null,instancingMorph:me&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Bs,alphaToCoverage:!!L.alphaToCoverage,map:He,matcap:De,envMap:_e,envMapMode:_e&&mt.mapping,envMapCubeUVHeight:j,aoMap:B,lightMap:un,bumpMap:xe,normalMap:ne,displacementMap:g&&Wt,emissiveMap:Be,normalMapObjectSpace:ne&&L.normalMapType===yE,normalMapTangentSpace:ne&&L.normalMapType===gm,metalnessMap:Vt,roughnessMap:D,anisotropy:E,anisotropyMap:Et,clearcoat:Y,clearcoatMap:It,clearcoatNormalMap:ge,clearcoatRoughnessMap:St,dispersion:ht,iridescence:dt,iridescenceMap:Ut,iridescenceThicknessMap:Zt,sheen:at,sheenColorMap:Qt,sheenRoughnessMap:Nt,specularMap:de,specularColorMap:ie,specularIntensityMap:Ue,transmission:Ht,transmissionMap:V,thicknessMap:wt,gradientMap:et,opaque:L.transparent===!1&&L.blending===Cs&&L.alphaToCoverage===!1,alphaMap:ut,alphaTest:Lt,alphaHash:Ct,combine:L.combine,mapUv:He&&T(L.map.channel),aoMapUv:B&&T(L.aoMap.channel),lightMapUv:un&&T(L.lightMap.channel),bumpMapUv:xe&&T(L.bumpMap.channel),normalMapUv:ne&&T(L.normalMap.channel),displacementMapUv:Wt&&T(L.displacementMap.channel),emissiveMapUv:Be&&T(L.emissiveMap.channel),metalnessMapUv:Vt&&T(L.metalnessMap.channel),roughnessMapUv:D&&T(L.roughnessMap.channel),anisotropyMapUv:Et&&T(L.anisotropyMap.channel),clearcoatMapUv:It&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:ge&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(L.sheenRoughnessMap.channel),specularMapUv:de&&T(L.specularMap.channel),specularColorMapUv:ie&&T(L.specularColorMap.channel),specularIntensityMapUv:Ue&&T(L.specularIntensityMap.channel),transmissionMapUv:V&&T(L.transmissionMap.channel),thicknessMapUv:wt&&T(L.thicknessMap.channel),alphaMapUv:ut&&T(L.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(ne||E),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ft.attributes.uv&&(He||ut),fog:!!st,useFog:L.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:qt,skinning:$.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ye,decodeVideoTexture:He&&L.map.isVideoTexture===!0&&Ae.getTransfer(L.map.colorSpace)===Ne,decodeVideoTextureEmissive:Be&&L.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(L.emissiveMap.colorSpace)===Ne,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===qi,flipSided:L.side===zn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:se&&L.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&L.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return nn.vertexUv1s=f.has(1),nn.vertexUv2s=f.has(2),nn.vertexUv3s=f.has(3),f.clear(),nn}function _(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)w.push(H),w.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(P(w,L),I(w,L),w.push(r.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function P(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function I(L,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),w.dispersion&&u.enable(20),w.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reverseDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),L.push(u.mask)}function A(L){const w=M[L.type];let H;if(w){const Q=Ti[w];H=ey.clone(Q.uniforms)}else H=L.uniforms;return H}function F(L,w){let H;for(let Q=0,$=d.length;Q<$;Q++){const st=d[Q];if(st.cacheKey===w){H=st,++H.usedTimes;break}}return H===void 0&&(H=new V1(r,w,L,a),d.push(H)),H}function U(L){if(--L.usedTimes===0){const w=d.indexOf(L);d[w]=d[d.length-1],d.pop(),L.destroy()}}function O(L){h.remove(L)}function z(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:F,releaseProgram:U,releaseShaderCache:O,programs:d,dispose:z}}function Y1(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function n(c){r.delete(c)}function s(c,u,h){r.get(c)[u]=h}function a(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Z1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zp(){const r=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function c(m,g,v,M,T,x){let _=r[t];return _===void 0?(_={id:m.id,object:m,geometry:g,material:v,groupOrder:M,renderOrder:m.renderOrder,z:T,group:x},r[t]=_):(_.id=m.id,_.object=m,_.geometry=g,_.material=v,_.groupOrder=M,_.renderOrder=m.renderOrder,_.z=T,_.group=x),t++,_}function u(m,g,v,M,T,x){const _=c(m,g,v,M,T,x);v.transmission>0?n.push(_):v.transparent===!0?s.push(_):e.push(_)}function h(m,g,v,M,T,x){const _=c(m,g,v,M,T,x);v.transmission>0?n.unshift(_):v.transparent===!0?s.unshift(_):e.unshift(_)}function f(m,g){e.length>1&&e.sort(m||Z1),n.length>1&&n.sort(g||Yp),s.length>1&&s.sort(g||Yp)}function d(){for(let m=t,g=r.length;m<g;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:u,unshift:h,finish:d,sort:f}}function K1(){let r=new WeakMap;function t(n,s){const a=r.get(n);let c;return a===void 0?(c=new Zp,r.set(n,[c])):s>=a.length?(c=new Zp,a.push(c)):c=a[s],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function $1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new tt};break;case"SpotLight":e={position:new C,direction:new C,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":e={color:new tt,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function J1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Q1=0;function j1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tb(r){const t=new $1,e=J1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new C);const s=new C,a=new Xe,c=new Xe;function u(f){let d=0,m=0,g=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let v=0,M=0,T=0,x=0,_=0,P=0,I=0,A=0,F=0,U=0,O=0;f.sort(j1);for(let L=0,w=f.length;L<w;L++){const H=f[L],Q=H.color,$=H.intensity,st=H.distance,ft=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=Q.r*$,m+=Q.g*$,g+=Q.b*$;else if(H.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(H.sh.coefficients[rt],$);O++}else if(H.isDirectionalLight){const rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const mt=H.shadow,j=e.get(H);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,n.directionalShadow[v]=j,n.directionalShadowMap[v]=ft,n.directionalShadowMatrix[v]=H.shadow.matrix,P++}n.directional[v]=rt,v++}else if(H.isSpotLight){const rt=t.get(H);rt.position.setFromMatrixPosition(H.matrixWorld),rt.color.copy(Q).multiplyScalar($),rt.distance=st,rt.coneCos=Math.cos(H.angle),rt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),rt.decay=H.decay,n.spot[T]=rt;const mt=H.shadow;if(H.map&&(n.spotLightMap[F]=H.map,F++,mt.updateMatrices(H),H.castShadow&&U++),n.spotLightMatrix[T]=mt.matrix,H.castShadow){const j=e.get(H);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=ft,A++}T++}else if(H.isRectAreaLight){const rt=t.get(H);rt.color.copy(Q).multiplyScalar($),rt.halfWidth.set(H.width*.5,0,0),rt.halfHeight.set(0,H.height*.5,0),n.rectArea[x]=rt,x++}else if(H.isPointLight){const rt=t.get(H);if(rt.color.copy(H.color).multiplyScalar(H.intensity),rt.distance=H.distance,rt.decay=H.decay,H.castShadow){const mt=H.shadow,j=e.get(H);j.shadowIntensity=mt.intensity,j.shadowBias=mt.bias,j.shadowNormalBias=mt.normalBias,j.shadowRadius=mt.radius,j.shadowMapSize=mt.mapSize,j.shadowCameraNear=mt.camera.near,j.shadowCameraFar=mt.camera.far,n.pointShadow[M]=j,n.pointShadowMap[M]=ft,n.pointShadowMatrix[M]=H.shadow.matrix,I++}n.point[M]=rt,M++}else if(H.isHemisphereLight){const rt=t.get(H);rt.skyColor.copy(H.color).multiplyScalar($),rt.groundColor.copy(H.groundColor).multiplyScalar($),n.hemi[_]=rt,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=g;const z=n.hash;(z.directionalLength!==v||z.pointLength!==M||z.spotLength!==T||z.rectAreaLength!==x||z.hemiLength!==_||z.numDirectionalShadows!==P||z.numPointShadows!==I||z.numSpotShadows!==A||z.numSpotMaps!==F||z.numLightProbes!==O)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=x,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=A+F-U,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=O,z.directionalLength=v,z.pointLength=M,z.spotLength=T,z.rectAreaLength=x,z.hemiLength=_,z.numDirectionalShadows=P,z.numPointShadows=I,z.numSpotShadows=A,z.numSpotMaps=F,z.numLightProbes=O,n.version=Q1++)}function h(f,d){let m=0,g=0,v=0,M=0,T=0;const x=d.matrixWorldInverse;for(let _=0,P=f.length;_<P;_++){const I=f[_];if(I.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),m++}else if(I.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(x),v++}else if(I.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),c.identity(),a.copy(I.matrixWorld),a.premultiply(x),c.extractRotation(a),A.halfWidth.set(I.width*.5,0,0),A.halfHeight.set(0,I.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){const A=n.point[g];A.position.setFromMatrixPosition(I.matrixWorld),A.position.applyMatrix4(x),g++}else if(I.isHemisphereLight){const A=n.hemi[T];A.direction.setFromMatrixPosition(I.matrixWorld),A.direction.transformDirection(x),T++}}}return{setup:u,setupView:h,state:n}}function Kp(r){const t=new tb(r),e=[],n=[];function s(d){f.camera=d,e.length=0,n.length=0}function a(d){e.push(d)}function c(d){n.push(d)}function u(){t.setup(e)}function h(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function eb(r){let t=new WeakMap;function e(s,a=0){const c=t.get(s);let u;return c===void 0?(u=new Kp(r),t.set(s,[u])):a>=c.length?(u=new Kp(r),c.push(u)):u=c[a],u}function n(){t=new WeakMap}return{get:e,dispose:n}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`;function rb(r,t,e){let n=new mh;const s=new it,a=new it,c=new Fe,u=new wy({depthPacking:EE}),h=new Ay,f={},d=e.maxTextureSize,m={[vr]:zn,[zn]:vr,[qi]:qi},g=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new Gn;M.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new an(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rm;let _=this.type;this.render=function(U,O,z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const L=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(mr),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=_!==Xi&&this.type===Xi,st=_===Xi&&this.type!==Xi;for(let ft=0,rt=U.length;ft<rt;ft++){const mt=U[ft],j=mt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",mt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const bt=j.getFrameExtents();if(s.multiply(bt),a.copy(j.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/bt.x),s.x=a.x*bt.x,j.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/bt.y),s.y=a.y*bt.y,j.mapSize.y=a.y)),j.map===null||$===!0||st===!0){const Bt=this.type!==Xi?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new kr(s.x,s.y,Bt),j.map.texture.name=mt.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const Pt=j.getViewportCount();for(let Bt=0;Bt<Pt;Bt++){const he=j.getViewport(Bt);c.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),Q.viewport(c),j.updateMatrices(mt,Bt),n=j.getFrustum(),A(O,z,j.camera,mt,this.type)}j.isPointLightShadow!==!0&&this.type===Xi&&P(j,z),j.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(L,w,H)};function P(U,O){const z=t.update(T);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,v.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new kr(s.x,s.y)),g.uniforms.shadow_pass.value=U.map.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,z,g,T,null),v.uniforms.shadow_pass.value=U.mapPass.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,z,v,T,null)}function I(U,O,z,L){let w=null;const H=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)w=H;else if(w=z.isPointLight===!0?h:u,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const Q=w.uuid,$=O.uuid;let st=f[Q];st===void 0&&(st={},f[Q]=st);let ft=st[$];ft===void 0&&(ft=w.clone(),st[$]=ft,O.addEventListener("dispose",F)),w=ft}if(w.visible=O.visible,w.wireframe=O.wireframe,L===Xi?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:m[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=r.properties.get(w);Q.light=z}return w}function A(U,O,z,L,w){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===Xi)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const $=t.update(U),st=U.material;if(Array.isArray(st)){const ft=$.groups;for(let rt=0,mt=ft.length;rt<mt;rt++){const j=ft[rt],bt=st[j.materialIndex];if(bt&&bt.visible){const Pt=I(U,bt,L,w);U.onBeforeShadow(r,U,O,z,$,Pt,j),r.renderBufferDirect(z,null,$,Pt,U,j),U.onAfterShadow(r,U,O,z,$,Pt,j)}}}else if(st.visible){const ft=I(U,st,L,w);U.onBeforeShadow(r,U,O,z,$,ft,null),r.renderBufferDirect(z,null,$,ft,U,null),U.onAfterShadow(r,U,O,z,$,ft,null)}}const Q=U.children;for(let $=0,st=Q.length;$<st;$++)A(Q[$],O,z,L,w)}function F(U){U.target.removeEventListener("dispose",F);for(const z in f){const L=f[z],w=U.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const sb={[pu]:mu,[_u]:xu,[gu]:Su,[Ds]:vu,[mu]:pu,[xu]:_u,[Su]:gu,[vu]:Ds};function ob(r,t){function e(){let V=!1;const wt=new Fe;let et=null;const ut=new Fe(0,0,0,0);return{setMask:function(Lt){et!==Lt&&!V&&(r.colorMask(Lt,Lt,Lt,Lt),et=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,Ct,se,Ye,nn){nn===!0&&(Lt*=Ye,Ct*=Ye,se*=Ye),wt.set(Lt,Ct,se,Ye),ut.equals(wt)===!1&&(r.clearColor(Lt,Ct,se,Ye),ut.copy(wt))},reset:function(){V=!1,et=null,ut.set(-1,0,0,0)}}}function n(){let V=!1,wt=!1,et=null,ut=null,Lt=null;return{setReversed:function(Ct){if(wt!==Ct){const se=t.get("EXT_clip_control");wt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Ye=Lt;Lt=null,this.setClear(Ye)}wt=Ct},getReversed:function(){return wt},setTest:function(Ct){Ct?Rt(r.DEPTH_TEST):qt(r.DEPTH_TEST)},setMask:function(Ct){et!==Ct&&!V&&(r.depthMask(Ct),et=Ct)},setFunc:function(Ct){if(wt&&(Ct=sb[Ct]),ut!==Ct){switch(Ct){case pu:r.depthFunc(r.NEVER);break;case mu:r.depthFunc(r.ALWAYS);break;case _u:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case gu:r.depthFunc(r.EQUAL);break;case vu:r.depthFunc(r.GEQUAL);break;case xu:r.depthFunc(r.GREATER);break;case Su:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){Lt!==Ct&&(wt&&(Ct=1-Ct),r.clearDepth(Ct),Lt=Ct)},reset:function(){V=!1,et=null,ut=null,Lt=null,wt=!1}}}function s(){let V=!1,wt=null,et=null,ut=null,Lt=null,Ct=null,se=null,Ye=null,nn=null;return{setTest:function(be){V||(be?Rt(r.STENCIL_TEST):qt(r.STENCIL_TEST))},setMask:function(be){wt!==be&&!V&&(r.stencilMask(be),wt=be)},setFunc:function(be,Hn,ci){(et!==be||ut!==Hn||Lt!==ci)&&(r.stencilFunc(be,Hn,ci),et=be,ut=Hn,Lt=ci)},setOp:function(be,Hn,ci){(Ct!==be||se!==Hn||Ye!==ci)&&(r.stencilOp(be,Hn,ci),Ct=be,se=Hn,Ye=ci)},setLocked:function(be){V=be},setClear:function(be){nn!==be&&(r.clearStencil(be),nn=be)},reset:function(){V=!1,wt=null,et=null,ut=null,Lt=null,Ct=null,se=null,Ye=null,nn=null}}}const a=new e,c=new n,u=new s,h=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,v=[],M=null,T=!1,x=null,_=null,P=null,I=null,A=null,F=null,U=null,O=new tt(0,0,0),z=0,L=!1,w=null,H=null,Q=null,$=null,st=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,mt=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(j)[1]),rt=mt>=1):j.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),rt=mt>=2);let bt=null,Pt={};const Bt=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Pe=new Fe().fromArray(Bt),lt=new Fe().fromArray(he);function Mt(V,wt,et,ut){const Lt=new Uint8Array(4),Ct=r.createTexture();r.bindTexture(V,Ct),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<et;se++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(wt,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(wt+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Ct}const zt={};zt[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),zt[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),zt[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Rt(r.DEPTH_TEST),c.setFunc(Ds),xe(!1),ne(qd),Rt(r.CULL_FACE),B(mr);function Rt(V){d[V]!==!0&&(r.enable(V),d[V]=!0)}function qt(V){d[V]!==!1&&(r.disable(V),d[V]=!1)}function me(V,wt){return m[V]!==wt?(r.bindFramebuffer(V,wt),m[V]=wt,V===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=wt),V===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=wt),!0):!1}function jt(V,wt){let et=v,ut=!1;if(V){et=g.get(wt),et===void 0&&(et=[],g.set(wt,et));const Lt=V.textures;if(et.length!==Lt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let Ct=0,se=Lt.length;Ct<se;Ct++)et[Ct]=r.COLOR_ATTACHMENT0+Ct;et.length=Lt.length,ut=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,ut=!0);ut&&r.drawBuffers(et)}function He(V){return M!==V?(r.useProgram(V),M=V,!0):!1}const De={[Br]:r.FUNC_ADD,[ZM]:r.FUNC_SUBTRACT,[KM]:r.FUNC_REVERSE_SUBTRACT};De[$M]=r.MIN,De[JM]=r.MAX;const _e={[QM]:r.ZERO,[jM]:r.ONE,[tE]:r.SRC_COLOR,[fu]:r.SRC_ALPHA,[oE]:r.SRC_ALPHA_SATURATE,[rE]:r.DST_COLOR,[nE]:r.DST_ALPHA,[eE]:r.ONE_MINUS_SRC_COLOR,[du]:r.ONE_MINUS_SRC_ALPHA,[sE]:r.ONE_MINUS_DST_COLOR,[iE]:r.ONE_MINUS_DST_ALPHA,[aE]:r.CONSTANT_COLOR,[cE]:r.ONE_MINUS_CONSTANT_COLOR,[lE]:r.CONSTANT_ALPHA,[uE]:r.ONE_MINUS_CONSTANT_ALPHA};function B(V,wt,et,ut,Lt,Ct,se,Ye,nn,be){if(V===mr){T===!0&&(qt(r.BLEND),T=!1);return}if(T===!1&&(Rt(r.BLEND),T=!0),V!==YM){if(V!==x||be!==L){if((_!==Br||A!==Br)&&(r.blendEquation(r.FUNC_ADD),_=Br,A=Br),be)switch(V){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yd:r.blendFunc(r.ONE,r.ONE);break;case Zd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Yd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,I=null,F=null,U=null,O.set(0,0,0),z=0,x=V,L=be}return}Lt=Lt||wt,Ct=Ct||et,se=se||ut,(wt!==_||Lt!==A)&&(r.blendEquationSeparate(De[wt],De[Lt]),_=wt,A=Lt),(et!==P||ut!==I||Ct!==F||se!==U)&&(r.blendFuncSeparate(_e[et],_e[ut],_e[Ct],_e[se]),P=et,I=ut,F=Ct,U=se),(Ye.equals(O)===!1||nn!==z)&&(r.blendColor(Ye.r,Ye.g,Ye.b,nn),O.copy(Ye),z=nn),x=V,L=!1}function un(V,wt){V.side===qi?qt(r.CULL_FACE):Rt(r.CULL_FACE);let et=V.side===zn;wt&&(et=!et),xe(et),V.blending===Cs&&V.transparent===!1?B(mr):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const ut=V.stencilWrite;u.setTest(ut),ut&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):qt(r.SAMPLE_ALPHA_TO_COVERAGE)}function xe(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function ne(V){V!==WM?(Rt(r.CULL_FACE),V!==H&&(V===qd?r.cullFace(r.BACK):V===XM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):qt(r.CULL_FACE),H=V}function Wt(V){V!==Q&&(rt&&r.lineWidth(V),Q=V)}function Be(V,wt,et){V?(Rt(r.POLYGON_OFFSET_FILL),($!==wt||st!==et)&&(r.polygonOffset(wt,et),$=wt,st=et)):qt(r.POLYGON_OFFSET_FILL)}function Vt(V){V?Rt(r.SCISSOR_TEST):qt(r.SCISSOR_TEST)}function D(V){V===void 0&&(V=r.TEXTURE0+ft-1),bt!==V&&(r.activeTexture(V),bt=V)}function E(V,wt,et){et===void 0&&(bt===null?et=r.TEXTURE0+ft-1:et=bt);let ut=Pt[et];ut===void 0&&(ut={type:void 0,texture:void 0},Pt[et]=ut),(ut.type!==V||ut.texture!==wt)&&(bt!==et&&(r.activeTexture(et),bt=et),r.bindTexture(V,wt||zt[V]),ut.type=V,ut.texture=wt)}function Y(){const V=Pt[bt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ht(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qt(V){Pe.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Pe.copy(V))}function Nt(V){lt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),lt.copy(V))}function de(V,wt){let et=f.get(wt);et===void 0&&(et=new WeakMap,f.set(wt,et));let ut=et.get(V);ut===void 0&&(ut=r.getUniformBlockIndex(wt,V.name),et.set(V,ut))}function ie(V,wt){const ut=f.get(wt).get(V);h.get(wt)!==ut&&(r.uniformBlockBinding(wt,ut,V.__bindingPointIndex),h.set(wt,ut))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},bt=null,Pt={},m={},g=new WeakMap,v=[],M=null,T=!1,x=null,_=null,P=null,I=null,A=null,F=null,U=null,O=new tt(0,0,0),z=0,L=!1,w=null,H=null,Q=null,$=null,st=null,Pe.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Rt,disable:qt,bindFramebuffer:me,drawBuffers:jt,useProgram:He,setBlending:B,setMaterial:un,setFlipSided:xe,setCullFace:ne,setLineWidth:Wt,setPolygonOffset:Be,setScissorTest:Vt,activeTexture:D,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ht,compressedTexImage3D:dt,texImage2D:Ut,texImage3D:Zt,updateUBOMapping:de,uniformBlockBinding:ie,texStorage2D:ge,texStorage3D:St,texSubImage2D:at,texSubImage3D:Ht,compressedTexSubImage2D:Et,compressedTexSubImage3D:It,scissor:Qt,viewport:Nt,reset:Ue}}function ab(r,t,e,n,s,a,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new it,d=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return v?new OffscreenCanvas(D,E):Co("canvas")}function T(D,E,Y){let ht=1;const dt=Vt(D);if((dt.width>Y||dt.height>Y)&&(ht=Y/Math.max(dt.width,dt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const at=Math.floor(ht*dt.width),Ht=Math.floor(ht*dt.height);m===void 0&&(m=M(at,Ht));const Et=E?M(at,Ht):m;return Et.width=at,Et.height=Ht,Et.getContext("2d").drawImage(D,0,0,at,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+at+"x"+Ht+")."),Et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(D,E,Y,ht,dt=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let at=E;if(E===r.RED&&(Y===r.FLOAT&&(at=r.R32F),Y===r.HALF_FLOAT&&(at=r.R16F),Y===r.UNSIGNED_BYTE&&(at=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(at=r.R8UI),Y===r.UNSIGNED_SHORT&&(at=r.R16UI),Y===r.UNSIGNED_INT&&(at=r.R32UI),Y===r.BYTE&&(at=r.R8I),Y===r.SHORT&&(at=r.R16I),Y===r.INT&&(at=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(at=r.RG32F),Y===r.HALF_FLOAT&&(at=r.RG16F),Y===r.UNSIGNED_BYTE&&(at=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(at=r.RG8UI),Y===r.UNSIGNED_SHORT&&(at=r.RG16UI),Y===r.UNSIGNED_INT&&(at=r.RG32UI),Y===r.BYTE&&(at=r.RG8I),Y===r.SHORT&&(at=r.RG16I),Y===r.INT&&(at=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(at=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(at=r.RGB16UI),Y===r.UNSIGNED_INT&&(at=r.RGB32UI),Y===r.BYTE&&(at=r.RGB8I),Y===r.SHORT&&(at=r.RGB16I),Y===r.INT&&(at=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(at=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(at=r.RGBA16UI),Y===r.UNSIGNED_INT&&(at=r.RGBA32UI),Y===r.BYTE&&(at=r.RGBA8I),Y===r.SHORT&&(at=r.RGBA16I),Y===r.INT&&(at=r.RGBA32I)),E===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(at=r.RGB9_E5),E===r.RGBA){const Ht=dt?ac:Ae.getTransfer(ht);Y===r.FLOAT&&(at=r.RGBA32F),Y===r.HALF_FLOAT&&(at=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(at=Ht===Ne?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(at=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(at=r.RGB5_A1)}return(at===r.R16F||at===r.R32F||at===r.RG16F||at===r.RG32F||at===r.RGBA16F||at===r.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function A(D,E){let Y;return D?E===null||E===Vr||E===Os?Y=r.DEPTH24_STENCIL8:E===Yi?Y=r.DEPTH32F_STENCIL8:E===Ro&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vr||E===Os?Y=r.DEPTH_COMPONENT24:E===Yi?Y=r.DEPTH_COMPONENT32F:E===Ro&&(Y=r.DEPTH_COMPONENT16),Y}function F(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==vi&&D.minFilter!==Ai?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function U(D){const E=D.target;E.removeEventListener("dispose",U),z(E),E.isVideoTexture&&d.delete(E)}function O(D){const E=D.target;E.removeEventListener("dispose",O),w(E)}function z(D){const E=n.get(D);if(E.__webglInit===void 0)return;const Y=D.source,ht=g.get(Y);if(ht){const dt=ht[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&L(D),Object.keys(ht).length===0&&g.delete(Y)}n.remove(D)}function L(D){const E=n.get(D);r.deleteTexture(E.__webglTexture);const Y=D.source,ht=g.get(Y);delete ht[E.__cacheKey],c.memory.textures--}function w(D){const E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let dt=0;dt<E.__webglFramebuffer[ht].length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[ht][dt]);else r.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)r.deleteFramebuffer(E.__webglFramebuffer[ht]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=D.textures;for(let ht=0,dt=Y.length;ht<dt;ht++){const at=n.get(Y[ht]);at.__webglTexture&&(r.deleteTexture(at.__webglTexture),c.memory.textures--),n.remove(Y[ht])}n.remove(D)}let H=0;function Q(){H=0}function $(){const D=H;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function st(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ft(D,E){const Y=n.get(D);if(D.isVideoTexture&&Wt(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Y,D,E);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function rt(D,E){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){lt(Y,D,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function mt(D,E){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){lt(Y,D,E);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function j(D,E){const Y=n.get(D);if(D.version>0&&Y.__version!==D.version){Mt(Y,D,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const bt={[yu]:r.REPEAT,[Gr]:r.CLAMP_TO_EDGE,[Tu]:r.MIRRORED_REPEAT},Pt={[vi]:r.NEAREST,[SE]:r.NEAREST_MIPMAP_NEAREST,[Aa]:r.NEAREST_MIPMAP_LINEAR,[Ai]:r.LINEAR,[Cl]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},Bt={[TE]:r.NEVER,[LE]:r.ALWAYS,[wE]:r.LESS,[vm]:r.LEQUAL,[AE]:r.EQUAL,[CE]:r.GEQUAL,[bE]:r.GREATER,[RE]:r.NOTEQUAL};function he(D,E){if(E.type===Yi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ai||E.magFilter===Cl||E.magFilter===Aa||E.magFilter===Hr||E.minFilter===Ai||E.minFilter===Cl||E.minFilter===Aa||E.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,bt[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,bt[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,bt[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Pt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Pt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,Bt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Aa&&E.minFilter!==Hr||E.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Pe(D,E){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",U));const ht=E.source;let dt=g.get(ht);dt===void 0&&(dt={},g.set(ht,dt));const at=st(E);if(at!==D.__cacheKey){dt[at]===void 0&&(dt[at]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),dt[at].usedTimes++;const Ht=dt[D.__cacheKey];Ht!==void 0&&(dt[D.__cacheKey].usedTimes--,Ht.usedTimes===0&&L(E)),D.__cacheKey=at,D.__webglTexture=dt[at].texture}return Y}function lt(D,E,Y){let ht=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=r.TEXTURE_3D);const dt=Pe(D,E),at=E.source;e.bindTexture(ht,D.__webglTexture,r.TEXTURE0+Y);const Ht=n.get(at);if(at.version!==Ht.__version||dt===!0){e.activeTexture(r.TEXTURE0+Y);const Et=Ae.getPrimaries(Ae.workingColorSpace),It=E.colorSpace===pr?null:Ae.getPrimaries(E.colorSpace),ge=E.colorSpace===pr||Et===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let St=T(E.image,!1,s.maxTextureSize);St=Be(E,St);const Ut=a.convert(E.format,E.colorSpace),Zt=a.convert(E.type);let Qt=I(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);he(ht,E);let Nt;const de=E.mipmaps,ie=E.isVideoTexture!==!0,Ue=Ht.__version===void 0||dt===!0,V=at.dataReady,wt=F(E,St);if(E.isDepthTexture)Qt=A(E.format===Fs,E.type),Ue&&(ie?e.texStorage2D(r.TEXTURE_2D,1,Qt,St.width,St.height):e.texImage2D(r.TEXTURE_2D,0,Qt,St.width,St.height,0,Ut,Zt,null));else if(E.isDataTexture)if(de.length>0){ie&&Ue&&e.texStorage2D(r.TEXTURE_2D,wt,Qt,de[0].width,de[0].height);for(let et=0,ut=de.length;et<ut;et++)Nt=de[et],ie?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):e.texImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Ut,Zt,Nt.data);E.generateMipmaps=!1}else ie?(Ue&&e.texStorage2D(r.TEXTURE_2D,wt,Qt,St.width,St.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St.width,St.height,Ut,Zt,St.data)):e.texImage2D(r.TEXTURE_2D,0,Qt,St.width,St.height,0,Ut,Zt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&Ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Qt,de[0].width,de[0].height,St.depth);for(let et=0,ut=de.length;et<ut;et++)if(Nt=de[et],E.format!==gi)if(Ut!==null)if(ie){if(V)if(E.layerUpdates.size>0){const Lt=wp(Nt.width,Nt.height,E.format,E.type);for(const Ct of E.layerUpdates){const se=Nt.data.subarray(Ct*Lt/Nt.data.BYTES_PER_ELEMENT,(Ct+1)*Lt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Ct,Nt.width,Nt.height,1,Ut,se)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Nt.width,Nt.height,St.depth,Ut,Nt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,Qt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Nt.width,Nt.height,St.depth,Ut,Zt,Nt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,Qt,Nt.width,Nt.height,St.depth,0,Ut,Zt,Nt.data)}else{ie&&Ue&&e.texStorage2D(r.TEXTURE_2D,wt,Qt,de[0].width,de[0].height);for(let et=0,ut=de.length;et<ut;et++)Nt=de[et],E.format!==gi?Ut!==null?ie?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Ut,Zt,Nt.data):e.texImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Ut,Zt,Nt.data)}else if(E.isDataArrayTexture)if(ie){if(Ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Qt,St.width,St.height,St.depth),V)if(E.layerUpdates.size>0){const et=wp(St.width,St.height,E.format,E.type);for(const ut of E.layerUpdates){const Lt=St.data.subarray(ut*et/St.data.BYTES_PER_ELEMENT,(ut+1)*et/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,St.width,St.height,1,Ut,Zt,Lt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ut,Zt,St.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Qt,St.width,St.height,St.depth,0,Ut,Zt,St.data);else if(E.isData3DTexture)ie?(Ue&&e.texStorage3D(r.TEXTURE_3D,wt,Qt,St.width,St.height,St.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ut,Zt,St.data)):e.texImage3D(r.TEXTURE_3D,0,Qt,St.width,St.height,St.depth,0,Ut,Zt,St.data);else if(E.isFramebufferTexture){if(Ue)if(ie)e.texStorage2D(r.TEXTURE_2D,wt,Qt,St.width,St.height);else{let et=St.width,ut=St.height;for(let Lt=0;Lt<wt;Lt++)e.texImage2D(r.TEXTURE_2D,Lt,Qt,et,ut,0,Ut,Zt,null),et>>=1,ut>>=1}}else if(de.length>0){if(ie&&Ue){const et=Vt(de[0]);e.texStorage2D(r.TEXTURE_2D,wt,Qt,et.width,et.height)}for(let et=0,ut=de.length;et<ut;et++)Nt=de[et],ie?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Ut,Zt,Nt):e.texImage2D(r.TEXTURE_2D,et,Qt,Ut,Zt,Nt);E.generateMipmaps=!1}else if(ie){if(Ue){const et=Vt(St);e.texStorage2D(r.TEXTURE_2D,wt,Qt,et.width,et.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Zt,St)}else e.texImage2D(r.TEXTURE_2D,0,Qt,Ut,Zt,St);x(E)&&_(ht),Ht.__version=at.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Mt(D,E,Y){if(E.image.length!==6)return;const ht=Pe(D,E),dt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Y);const at=n.get(dt);if(dt.version!==at.__version||ht===!0){e.activeTexture(r.TEXTURE0+Y);const Ht=Ae.getPrimaries(Ae.workingColorSpace),Et=E.colorSpace===pr?null:Ae.getPrimaries(E.colorSpace),It=E.colorSpace===pr||Ht===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let ut=0;ut<6;ut++)!ge&&!St?Ut[ut]=T(E.image[ut],!0,s.maxCubemapSize):Ut[ut]=St?E.image[ut].image:E.image[ut],Ut[ut]=Be(E,Ut[ut]);const Zt=Ut[0],Qt=a.convert(E.format,E.colorSpace),Nt=a.convert(E.type),de=I(E.internalFormat,Qt,Nt,E.colorSpace),ie=E.isVideoTexture!==!0,Ue=at.__version===void 0||ht===!0,V=dt.dataReady;let wt=F(E,Zt);he(r.TEXTURE_CUBE_MAP,E);let et;if(ge){ie&&Ue&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,de,Zt.width,Zt.height);for(let ut=0;ut<6;ut++){et=Ut[ut].mipmaps;for(let Lt=0;Lt<et.length;Lt++){const Ct=et[Lt];E.format!==gi?Qt!==null?ie?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Ct.width,Ct.height,Qt,Ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,de,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,0,0,Ct.width,Ct.height,Qt,Nt,Ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt,de,Ct.width,Ct.height,0,Qt,Nt,Ct.data)}}}else{if(et=E.mipmaps,ie&&Ue){et.length>0&&wt++;const ut=Vt(Ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,de,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(St){ie?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Ut[ut].width,Ut[ut].height,Qt,Nt,Ut[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,de,Ut[ut].width,Ut[ut].height,0,Qt,Nt,Ut[ut].data);for(let Lt=0;Lt<et.length;Lt++){const se=et[Lt].image[ut].image;ie?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,se.width,se.height,Qt,Nt,se.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,de,se.width,se.height,0,Qt,Nt,se.data)}}else{ie?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Qt,Nt,Ut[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,de,Qt,Nt,Ut[ut]);for(let Lt=0;Lt<et.length;Lt++){const Ct=et[Lt];ie?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,0,0,Qt,Nt,Ct.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Lt+1,de,Qt,Nt,Ct.image[ut])}}}x(E)&&_(r.TEXTURE_CUBE_MAP),at.__version=dt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function zt(D,E,Y,ht,dt,at){const Ht=a.convert(Y.format,Y.colorSpace),Et=a.convert(Y.type),It=I(Y.internalFormat,Ht,Et,Y.colorSpace),ge=n.get(E),St=n.get(Y);if(St.__renderTarget=E,!ge.__hasExternalTextures){const Ut=Math.max(1,E.width>>at),Zt=Math.max(1,E.height>>at);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,It,Ut,Zt,E.depth,0,Ht,Et,null):e.texImage2D(dt,at,It,Ut,Zt,0,Ht,Et,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),ne(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,dt,St.__webglTexture,0,xe(E)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,dt,St.__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(D,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const ht=E.depthTexture,dt=ht&&ht.isDepthTexture?ht.type:null,at=A(E.stencilBuffer,dt),Ht=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=xe(E);ne(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,at,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,at,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,at,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ht,r.RENDERBUFFER,D)}else{const ht=E.textures;for(let dt=0;dt<ht.length;dt++){const at=ht[dt],Ht=a.convert(at.format,at.colorSpace),Et=a.convert(at.type),It=I(at.internalFormat,Ht,Et,at.colorSpace),ge=xe(E);Y&&ne(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,It,E.width,E.height):ne(E)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,It,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,It,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qt(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const dt=ht.__webglTexture,at=xe(E);if(E.depthTexture.format===Ls)ne(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Fs)ne(E)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function me(D){const E=n.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",dt)};ht.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ht}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");qt(E.__webglFramebuffer,D)}else if(Y){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=r.createRenderbuffer(),Rt(E.__webglDepthbuffer[ht],D,!1);else{const dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,at)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Rt(E.__webglDepthbuffer,D,!1);else{const ht=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,dt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(D,E,Y){const ht=n.get(D);E!==void 0&&zt(ht.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&me(D)}function He(D){const E=D.texture,Y=n.get(D),ht=n.get(E);D.addEventListener("dispose",O);const dt=D.textures,at=D.isWebGLCubeRenderTarget===!0,Ht=dt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=E.version,c.memory.textures++),at){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let It=0;It<E.mipmaps.length;It++)Y.__webglFramebuffer[Et][It]=r.createFramebuffer()}else Y.__webglFramebuffer[Et]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<E.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ht)for(let Et=0,It=dt.length;Et<It;Et++){const ge=n.get(dt[Et]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),c.memory.textures++)}if(D.samples>0&&ne(D)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<dt.length;Et++){const It=dt[Et];Y.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);const ge=a.convert(It.format,It.colorSpace),St=a.convert(It.type),Ut=I(It.internalFormat,ge,St,It.colorSpace,D.isXRRenderTarget===!0),Zt=xe(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,Ut,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(Y.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(at){e.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),he(r.TEXTURE_CUBE_MAP,E);for(let Et=0;Et<6;Et++)if(E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)zt(Y.__webglFramebuffer[Et][It],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,It);else zt(Y.__webglFramebuffer[Et],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);x(E)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Et=0,It=dt.length;Et<It;Et++){const ge=dt[Et],St=n.get(ge);e.bindTexture(r.TEXTURE_2D,St.__webglTexture),he(r.TEXTURE_2D,ge),zt(Y.__webglFramebuffer,D,ge,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),x(ge)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let Et=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Et,ht.__webglTexture),he(Et,E),E.mipmaps&&E.mipmaps.length>0)for(let It=0;It<E.mipmaps.length;It++)zt(Y.__webglFramebuffer[It],D,E,r.COLOR_ATTACHMENT0,Et,It);else zt(Y.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,Et,0);x(E)&&_(Et),e.unbindTexture()}D.depthBuffer&&me(D)}function De(D){const E=D.textures;for(let Y=0,ht=E.length;Y<ht;Y++){const dt=E[Y];if(x(dt)){const at=P(D),Ht=n.get(dt).__webglTexture;e.bindTexture(at,Ht),_(at),e.unbindTexture()}}}const _e=[],B=[];function un(D){if(D.samples>0){if(ne(D)===!1){const E=D.textures,Y=D.width,ht=D.height;let dt=r.COLOR_BUFFER_BIT;const at=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ht=n.get(D),Et=E.length>1;if(Et)for(let It=0;It<E.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let It=0;It<E.length;It++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),Et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[It]);const ge=n.get(E[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,Y,ht,0,0,Y,ht,dt,r.NEAREST),h===!0&&(_e.length=0,B.length=0,_e.push(r.COLOR_ATTACHMENT0+It),D.depthBuffer&&D.resolveDepthBuffer===!1&&(_e.push(at),B.push(at),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let It=0;It<E.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[It]);const ge=n.get(E[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,ge,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function xe(D){return Math.min(s.maxSamples,D.samples)}function ne(D){const E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(D){const E=c.render.frame;d.get(D)!==E&&(d.set(D,E),D.update())}function Be(D,E){const Y=D.colorSpace,ht=D.format,dt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Bs&&Y!==pr&&(Ae.getTransfer(Y)===Ne?(ht!==gi||dt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function Vt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(f.width=D.naturalWidth||D.width,f.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(f.width=D.displayWidth,f.height=D.displayHeight):(f.width=D.width,f.height=D.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ft,this.setTexture2DArray=rt,this.setTexture3D=mt,this.setTextureCube=j,this.rebindTextures=jt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=ne}function cb(r,t){function e(n,s=pr){let a;const c=Ae.getTransfer(s);if(n===$i)return r.UNSIGNED_BYTE;if(n===lh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===am)return r.BYTE;if(n===cm)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===ch)return r.INT;if(n===Vr)return r.UNSIGNED_INT;if(n===Yi)return r.FLOAT;if(n===Po)return r.HALF_FLOAT;if(n===um)return r.ALPHA;if(n===hm)return r.RGB;if(n===gi)return r.RGBA;if(n===fm)return r.LUMINANCE;if(n===dm)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===Fs)return r.DEPTH_STENCIL;if(n===pm)return r.RED;if(n===hh)return r.RED_INTEGER;if(n===mm)return r.RG;if(n===fh)return r.RG_INTEGER;if(n===dh)return r.RGBA_INTEGER;if(n===ec||n===nc||n===ic||n===rc)if(c===Ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ic)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Au||n===bu||n===Ru)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===wu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cu||n===Lu||n===Pu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Cu||n===Lu)return c===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Pu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Du||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===Gu||n===Hu||n===Vu||n===ku||n===Wu||n===Xu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Iu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Du)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ku)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xu)return c===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===qu||n===Yu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===sc)return c===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_m||n===Zu||n===Ku||n===$u)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===sc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$u)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
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

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pn,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xr({vertexShader:lb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new an(new _c(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fb extends Gs{constructor(t,e){super();const n=this;let s=null,a=1,c=null,u="local-floor",h=1,f=null,d=null,m=null,g=null,v=null,M=null;const T=new hb,x=e.getContextAttributes();let _=null,P=null;const I=[],A=[],F=new it;let U=null;const O=new $n;O.viewport=new Fe;const z=new $n;z.viewport=new Fe;const L=[O,z],w=new Uy;let H=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let Mt=I[lt];return Mt===void 0&&(Mt=new Jl,I[lt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(lt){let Mt=I[lt];return Mt===void 0&&(Mt=new Jl,I[lt]=Mt),Mt.getGripSpace()},this.getHand=function(lt){let Mt=I[lt];return Mt===void 0&&(Mt=new Jl,I[lt]=Mt),Mt.getHandSpace()};function $(lt){const Mt=A.indexOf(lt.inputSource);if(Mt===-1)return;const zt=I[Mt];zt!==void 0&&(zt.update(lt.inputSource,lt.frame,f||c),zt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function st(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",ft);for(let lt=0;lt<I.length;lt++){const Mt=A[lt];Mt!==null&&(A[lt]=null,I[lt].disconnect(Mt))}H=null,Q=null,T.reset(),t.setRenderTarget(_),v=null,g=null,m=null,s=null,P=null,Pe.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){u=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(lt){f=lt},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",st),s.addEventListener("inputsourceschange",ft),x.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Rt=null,qt=null;x.depth&&(qt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=x.stencil?Fs:Ls,Rt=x.stencil?Os:Vr);const me={colorFormat:e.RGBA8,depthFormat:qt,scaleFactor:a};m=new XRWebGLBinding(s,e),g=m.createProjectionLayer(me),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new kr(g.textureWidth,g.textureHeight,{format:gi,type:$i,depthTexture:new Lm(g.textureWidth,g.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const zt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,e,zt),s.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new kr(v.framebufferWidth,v.framebufferHeight,{format:gi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}P.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ft(lt){for(let Mt=0;Mt<lt.removed.length;Mt++){const zt=lt.removed[Mt],Rt=A.indexOf(zt);Rt>=0&&(A[Rt]=null,I[Rt].disconnect(zt))}for(let Mt=0;Mt<lt.added.length;Mt++){const zt=lt.added[Mt];let Rt=A.indexOf(zt);if(Rt===-1){for(let me=0;me<I.length;me++)if(me>=A.length){A.push(zt),Rt=me;break}else if(A[me]===null){A[me]=zt,Rt=me;break}if(Rt===-1)break}const qt=I[Rt];qt&&qt.connect(zt)}}const rt=new C,mt=new C;function j(lt,Mt,zt){rt.setFromMatrixPosition(Mt.matrixWorld),mt.setFromMatrixPosition(zt.matrixWorld);const Rt=rt.distanceTo(mt),qt=Mt.projectionMatrix.elements,me=zt.projectionMatrix.elements,jt=qt[14]/(qt[10]-1),He=qt[14]/(qt[10]+1),De=(qt[9]+1)/qt[5],_e=(qt[9]-1)/qt[5],B=(qt[8]-1)/qt[0],un=(me[8]+1)/me[0],xe=jt*B,ne=jt*un,Wt=Rt/(-B+un),Be=Wt*-B;if(Mt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(Be),lt.translateZ(Wt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),qt[10]===-1)lt.projectionMatrix.copy(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const Vt=jt+Wt,D=He+Wt,E=xe-Be,Y=ne+(Rt-Be),ht=De*He/D*Vt,dt=_e*He/D*Vt;lt.projectionMatrix.makePerspective(E,Y,ht,dt,Vt,D),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function bt(lt,Mt){Mt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(Mt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let Mt=lt.near,zt=lt.far;T.texture!==null&&(T.depthNear>0&&(Mt=T.depthNear),T.depthFar>0&&(zt=T.depthFar)),w.near=z.near=O.near=Mt,w.far=z.far=O.far=zt,(H!==w.near||Q!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,Q=w.far),O.layers.mask=lt.layers.mask|2,z.layers.mask=lt.layers.mask|4,w.layers.mask=O.layers.mask|z.layers.mask;const Rt=lt.parent,qt=w.cameras;bt(w,Rt);for(let me=0;me<qt.length;me++)bt(qt[me],Rt);qt.length===2?j(w,O,z):w.projectionMatrix.copy(O.projectionMatrix),Pt(lt,w,Rt)};function Pt(lt,Mt,zt){zt===null?lt.matrix.copy(Mt.matrixWorld):(lt.matrix.copy(zt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(Mt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Qu*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&v===null))return h},this.setFoveation=function(lt){h=lt,g!==null&&(g.fixedFoveation=lt),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=lt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let Bt=null;function he(lt,Mt){if(d=Mt.getViewerPose(f||c),M=Mt,d!==null){const zt=d.views;v!==null&&(t.setRenderTargetFramebuffer(P,v.framebuffer),t.setRenderTarget(P));let Rt=!1;zt.length!==w.cameras.length&&(w.cameras.length=0,Rt=!0);for(let jt=0;jt<zt.length;jt++){const He=zt[jt];let De=null;if(v!==null)De=v.getViewport(He);else{const B=m.getViewSubImage(g,He);De=B.viewport,jt===0&&(t.setRenderTargetTextures(P,B.colorTexture,g.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(P))}let _e=L[jt];_e===void 0&&(_e=new $n,_e.layers.enable(jt),_e.viewport=new Fe,L[jt]=_e),_e.matrix.fromArray(He.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(He.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(De.x,De.y,De.width,De.height),jt===0&&(w.matrix.copy(_e.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Rt===!0&&w.cameras.push(_e)}const qt=s.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){const jt=m.getDepthInformation(zt[0]);jt&&jt.isValid&&jt.texture&&T.init(t,jt,s.renderState)}}for(let zt=0;zt<I.length;zt++){const Rt=A[zt],qt=I[zt];Rt!==null&&qt!==void 0&&qt.update(Rt,Mt,f||c)}Bt&&Bt(lt,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),M=null}const Pe=new Om;Pe.setAnimationLoop(he),this.setAnimationLoop=function(lt){Bt=lt},this.dispose=function(){}}}const Nr=new bi,db=new Xe;function pb(r,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Am(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,P,I,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(x,_):_.isMeshToonMaterial?(a(x,_),m(x,_)):_.isMeshPhongMaterial?(a(x,_),d(x,_)):_.isMeshStandardMaterial?(a(x,_),g(x,_),_.isMeshPhysicalMaterial&&v(x,_,A)):_.isMeshMatcapMaterial?(a(x,_),M(x,_)):_.isMeshDepthMaterial?a(x,_):_.isMeshDistanceMaterial?(a(x,_),T(x,_)):_.isMeshNormalMaterial?a(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&u(x,_)):_.isPointsMaterial?h(x,_,P,I):_.isSpriteMaterial?f(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===zn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===zn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const P=t.get(_),I=P.envMap,A=P.envMapRotation;I&&(x.envMap.value=I,Nr.copy(A),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),x.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(Nr)),x.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function u(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,P,I){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*P,x.scale.value=I*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function m(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function v(x,_,P){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const P=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mb(r,t,e,n){let s={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,I){const A=I.program;n.uniformBlockBinding(P,A)}function f(P,I){let A=s[P.id];A===void 0&&(M(P),A=d(P),s[P.id]=A,P.addEventListener("dispose",x));const F=I.program;n.updateUBOMapping(P,F);const U=t.render.frame;a[P.id]!==U&&(g(P),a[P.id]=U)}function d(P){const I=m();P.__bindingPointIndex=I;const A=r.createBuffer(),F=P.__size,U=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,F,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,A),A}function m(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const I=s[P.id],A=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let U=0,O=A.length;U<O;U++){const z=Array.isArray(A[U])?A[U]:[A[U]];for(let L=0,w=z.length;L<w;L++){const H=z[L];if(v(H,U,L,F)===!0){const Q=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let st=0;for(let ft=0;ft<$.length;ft++){const rt=$[ft],mt=T(rt);typeof rt=="number"||typeof rt=="boolean"?(H.__data[0]=rt,r.bufferSubData(r.UNIFORM_BUFFER,Q+st,H.__data)):rt.isMatrix3?(H.__data[0]=rt.elements[0],H.__data[1]=rt.elements[1],H.__data[2]=rt.elements[2],H.__data[3]=0,H.__data[4]=rt.elements[3],H.__data[5]=rt.elements[4],H.__data[6]=rt.elements[5],H.__data[7]=0,H.__data[8]=rt.elements[6],H.__data[9]=rt.elements[7],H.__data[10]=rt.elements[8],H.__data[11]=0):(rt.toArray(H.__data,st),st+=mt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function v(P,I,A,F){const U=P.value,O=I+"_"+A;if(F[O]===void 0)return typeof U=="number"||typeof U=="boolean"?F[O]=U:F[O]=U.clone(),!0;{const z=F[O];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return F[O]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function M(P){const I=P.uniforms;let A=0;const F=16;for(let O=0,z=I.length;O<z;O++){const L=Array.isArray(I[O])?I[O]:[I[O]];for(let w=0,H=L.length;w<H;w++){const Q=L[w],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let st=0,ft=$.length;st<ft;st++){const rt=$[st],mt=T(rt),j=A%F,bt=j%mt.boundary,Pt=j+bt;A+=bt,Pt!==0&&F-Pt<mt.storage&&(A+=F-Pt),Q.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=mt.storage}}}const U=A%F;return U>0&&(A+=F-U),P.__size=A,P.__cache={},this}function T(P){const I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=48,I.storage=48):P.isMatrix4?(I.boundary=64,I.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),I}function x(P){const I=P.target;I.removeEventListener("dispose",x);const A=c.indexOf(I.__bindingPointIndex);c.splice(A,1),r.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function _(){for(const P in s)r.deleteBuffer(s[P]);c=[],s={},a={}}return{bind:h,update:f,dispose:_}}class _b{constructor(t={}){const{canvas:e=IE(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=c;const M=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const P=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=_r,this.toneMappingExposure=1;const A=this;let F=!1,U=0,O=0,z=null,L=-1,w=null;const H=new Fe,Q=new Fe;let $=null;const st=new tt(0);let ft=0,rt=e.width,mt=e.height,j=1,bt=null,Pt=null;const Bt=new Fe(0,0,rt,mt),he=new Fe(0,0,rt,mt);let Pe=!1;const lt=new mh;let Mt=!1,zt=!1;this.transmissionResolutionScale=1;const Rt=new Xe,qt=new Xe,me=new C,jt=new Fe,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function _e(){return z===null?j:1}let B=n;function un(b,W){return e.getContext(b,W)}try{const b={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),B===null){const W="webgl2";if(B=un(W,b),B===null)throw un(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,ne,Wt,Be,Vt,D,E,Y,ht,dt,at,Ht,Et,It,ge,St,Ut,Zt,Qt,Nt,de,ie,Ue,V;function wt(){xe=new AA(B),xe.init(),ie=new cb(B,xe),ne=new SA(B,xe,t,ie),Wt=new ob(B,xe),ne.reverseDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),Be=new CA(B),Vt=new Y1,D=new ab(B,xe,Wt,Vt,ne,ie,Be),E=new EA(A),Y=new wA(A),ht=new Oy(B),Ue=new vA(B,ht),dt=new bA(B,ht,Be,Ue),at=new PA(B,dt,ht,Be),Qt=new LA(B,ne,D),St=new MA(Vt),Ht=new q1(A,E,Y,xe,ne,Ue,St),Et=new pb(A,Vt),It=new K1,ge=new eb(xe),Zt=new gA(A,E,Y,Wt,at,v,h),Ut=new rb(A,at,ne),V=new mb(B,Be,ne,Wt),Nt=new xA(B,xe,Be),de=new RA(B,xe,Be),Be.programs=Ht.programs,A.capabilities=ne,A.extensions=xe,A.properties=Vt,A.renderLists=It,A.shadowMap=Ut,A.state=Wt,A.info=Be}wt();const et=new fb(A,B);this.xr=et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(rt,mt,!1))},this.getSize=function(b){return b.set(rt,mt)},this.setSize=function(b,W,Z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=b,mt=W,e.width=Math.floor(b*j),e.height=Math.floor(W*j),Z===!0&&(e.style.width=b+"px",e.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(rt*j,mt*j).floor()},this.setDrawingBufferSize=function(b,W,Z){rt=b,mt=W,j=Z,e.width=Math.floor(b*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Bt)},this.setViewport=function(b,W,Z,K){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,W,Z,K),Wt.viewport(H.copy(Bt).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,W,Z,K){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,W,Z,K),Wt.scissor(Q.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){Wt.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Pt=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(b=!0,W=!0,Z=!0){let K=0;if(b){let q=!1;if(z!==null){const gt=z.texture.format;q=gt===dh||gt===fh||gt===hh}if(q){const gt=z.texture.type,At=gt===$i||gt===Vr||gt===Ro||gt===Os||gt===lh||gt===uh,Dt=Zt.getClearColor(),Ft=Zt.getClearAlpha(),te=Dt.r,ee=Dt.g,Yt=Dt.b;At?(M[0]=te,M[1]=ee,M[2]=Yt,M[3]=Ft,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=te,T[1]=ee,T[2]=Yt,T[3]=Ft,B.clearBufferiv(B.COLOR,0,T))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT),Z&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Zt.dispose(),It.dispose(),ge.dispose(),Vt.dispose(),E.dispose(),Y.dispose(),at.dispose(),Ue.dispose(),V.dispose(),Ht.dispose(),et.dispose(),et.removeEventListener("sessionstart",qr),et.removeEventListener("sessionend",Uo),li.stop()};function ut(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=Be.autoReset,W=Ut.enabled,Z=Ut.autoUpdate,K=Ut.needsUpdate,q=Ut.type;wt(),Be.autoReset=b,Ut.enabled=W,Ut.autoUpdate=Z,Ut.needsUpdate=K,Ut.type=q}function Ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const W=b.target;W.removeEventListener("dispose",se),Ye(W)}function Ye(b){nn(b),Vt.remove(b)}function nn(b){const W=Vt.get(b).programs;W!==void 0&&(W.forEach(function(Z){Ht.releaseProgram(Z)}),b.isShaderMaterial&&Ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,Z,K,q,gt){W===null&&(W=He);const At=q.isMesh&&q.matrixWorld.determinant()<0,Dt=Go(b,W,Z,K,q);Wt.setMaterial(K,At);let Ft=Z.index,te=1;if(K.wireframe===!0){if(Ft=dt.getWireframeAttribute(Z),Ft===void 0)return;te=2}const ee=Z.drawRange,Yt=Z.attributes.position;let Me=ee.start*te,we=(ee.start+ee.count)*te;gt!==null&&(Me=Math.max(Me,gt.start*te),we=Math.min(we,(gt.start+gt.count)*te)),Ft!==null?(Me=Math.max(Me,0),we=Math.min(we,Ft.count)):Yt!=null&&(Me=Math.max(Me,0),we=Math.min(we,Yt.count));const Ke=we-Me;if(Ke<0||Ke===1/0)return;Ue.setup(q,K,Dt,Z,Ft);let ke,Ee=Nt;if(Ft!==null&&(ke=ht.get(Ft),Ee=de,Ee.setIndex(ke)),q.isMesh)K.wireframe===!0?(Wt.setLineWidth(K.wireframeLinewidth*_e()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(q.isLine){let Xt=K.linewidth;Xt===void 0&&(Xt=1),Wt.setLineWidth(Xt*_e()),q.isLineSegments?Ee.setMode(B.LINES):q.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else q.isPoints?Ee.setMode(B.POINTS):q.isSprite&&Ee.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ee.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xt=q._multiDrawStarts,rn=q._multiDrawCounts,Te=q._multiDrawCount,vn=Ft?ht.get(Ft).bytesPerElement:1,Li=Vt.get(K).currentProgram.getUniforms();for(let wn=0;wn<Te;wn++)Li.setValue(B,"_gl_DrawID",wn),Ee.render(Xt[wn]/vn,rn[wn])}else if(q.isInstancedMesh)Ee.renderInstances(Me,Ke,q.count);else if(Z.isInstancedBufferGeometry){const Xt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rn=Math.min(Z.instanceCount,Xt);Ee.renderInstances(Me,Ke,rn)}else Ee.render(Me,Ke)};function be(b,W,Z){b.transparent===!0&&b.side===qi&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,Zr(b,W,Z),b.side=vr,b.needsUpdate=!0,Zr(b,W,Z),b.side=qi):Zr(b,W,Z)}this.compile=function(b,W,Z=null){Z===null&&(Z=b),_=ge.get(Z),_.init(W),I.push(_),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),b!==Z&&b.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const K=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const gt=q.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){const Dt=gt[At];be(Dt,Z,q),K.add(Dt)}else be(gt,Z,q),K.add(gt)}),I.pop(),_=null,K},this.compileAsync=function(b,W,Z=null){const K=this.compile(b,W,Z);return new Promise(q=>{function gt(){if(K.forEach(function(At){Vt.get(At).currentProgram.isReady()&&K.delete(At)}),K.size===0){q(b);return}setTimeout(gt,10)}xe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Hn=null;function ci(b){Hn&&Hn(b)}function qr(){li.stop()}function Uo(){li.start()}const li=new Om;li.setAnimationLoop(ci),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(b){Hn=b,et.setAnimationLoop(b),b===null?li.stop():li.start()},et.addEventListener("sessionstart",qr),et.addEventListener("sessionend",Uo),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(W),W=et.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,W,z),_=ge.get(b,I.length),_.init(W),I.push(_),qt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),lt.setFromProjectionMatrix(qt),zt=this.localClippingEnabled,Mt=St.init(this.clippingPlanes,zt),x=It.get(b,P.length),x.init(),P.push(x),et.enabled===!0&&et.isPresenting===!0){const gt=A.xr.getDepthSensingMesh();gt!==null&&Ws(gt,W,-1/0,A.sortObjects)}Ws(b,W,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(bt,Pt),De=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,De&&Zt.addToRenderList(x,b),this.info.render.frame++,Mt===!0&&St.beginShadows();const Z=_.state.shadowsArray;Ut.render(Z,b,W),Mt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=x.opaque,q=x.transmissive;if(_.setupLights(),W.isArrayCamera){const gt=W.cameras;if(q.length>0)for(let At=0,Dt=gt.length;At<Dt;At++){const Ft=gt[At];Oo(K,q,b,Ft)}De&&Zt.render(b);for(let At=0,Dt=gt.length;At<Dt;At++){const Ft=gt[At];No(x,b,Ft,Ft.viewport)}}else q.length>0&&Oo(K,q,b,W),De&&Zt.render(b),No(x,b,W);z!==null&&O===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(A,b,W),Ue.resetDefaultState(),L=-1,w=null,I.pop(),I.length>0?(_=I[I.length-1],Mt===!0&&St.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function Ws(b,W,Z,K){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||lt.intersectsSprite(b)){K&&jt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qt);const At=at.update(b),Dt=b.material;Dt.visible&&x.push(b,At,Dt,Z,jt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||lt.intersectsObject(b))){const At=at.update(b),Dt=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),jt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),jt.copy(At.boundingSphere.center)),jt.applyMatrix4(b.matrixWorld).applyMatrix4(qt)),Array.isArray(Dt)){const Ft=At.groups;for(let te=0,ee=Ft.length;te<ee;te++){const Yt=Ft[te],Me=Dt[Yt.materialIndex];Me&&Me.visible&&x.push(b,At,Me,Z,jt.z,Yt)}}else Dt.visible&&x.push(b,At,Dt,Z,jt.z,null)}}const gt=b.children;for(let At=0,Dt=gt.length;At<Dt;At++)Ws(gt[At],W,Z,K)}function No(b,W,Z,K){const q=b.opaque,gt=b.transmissive,At=b.transparent;_.setupLightsView(Z),Mt===!0&&St.setGlobalState(A.clippingPlanes,Z),K&&Wt.viewport(H.copy(K)),q.length>0&&Yr(q,W,Z),gt.length>0&&Yr(gt,W,Z),At.length>0&&Yr(At,W,Z),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Oo(b,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[K.id]===void 0&&(_.state.transmissionRenderTarget[K.id]=new kr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Po:$i,minFilter:Hr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const gt=_.state.transmissionRenderTarget[K.id],At=K.viewport||H;gt.setSize(At.z*A.transmissionResolutionScale,At.w*A.transmissionResolutionScale);const Dt=A.getRenderTarget();A.setRenderTarget(gt),A.getClearColor(st),ft=A.getClearAlpha(),ft<1&&A.setClearColor(16777215,.5),A.clear(),De&&Zt.render(Z);const Ft=A.toneMapping;A.toneMapping=_r;const te=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),_.setupLightsView(K),Mt===!0&&St.setGlobalState(A.clippingPlanes,K),Yr(b,Z,K),D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,Me=W.length;Yt<Me;Yt++){const we=W[Yt],Ke=we.object,ke=we.geometry,Ee=we.material,Xt=we.group;if(Ee.side===qi&&Ke.layers.test(K.layers)){const rn=Ee.side;Ee.side=zn,Ee.needsUpdate=!0,Fo(Ke,Z,K,ke,Ee,Xt),Ee.side=rn,Ee.needsUpdate=!0,ee=!0}}ee===!0&&(D.updateMultisampleRenderTarget(gt),D.updateRenderTargetMipmap(gt))}A.setRenderTarget(Dt),A.setClearColor(st,ft),te!==void 0&&(K.viewport=te),A.toneMapping=Ft}function Yr(b,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,gt=b.length;q<gt;q++){const At=b[q],Dt=At.object,Ft=At.geometry,te=K===null?At.material:K,ee=At.group;Dt.layers.test(Z.layers)&&Fo(Dt,W,Z,Ft,te,ee)}}function Fo(b,W,Z,K,q,gt){b.onBeforeRender(A,W,Z,K,q,gt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(A,W,Z,K,b,gt),q.transparent===!0&&q.side===qi&&q.forceSinglePass===!1?(q.side=zn,q.needsUpdate=!0,A.renderBufferDirect(Z,W,K,q,b,gt),q.side=vr,q.needsUpdate=!0,A.renderBufferDirect(Z,W,K,q,b,gt),q.side=qi):A.renderBufferDirect(Z,W,K,q,b,gt),b.onAfterRender(A,W,Z,K,q,gt)}function Zr(b,W,Z){W.isScene!==!0&&(W=He);const K=Vt.get(b),q=_.state.lights,gt=_.state.shadowsArray,At=q.state.version,Dt=Ht.getParameters(b,q.state,gt,W,Z),Ft=Ht.getProgramCacheKey(Dt);let te=K.programs;K.environment=b.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(b.isMeshStandardMaterial?Y:E).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,te===void 0&&(b.addEventListener("dispose",se),te=new Map,K.programs=te);let ee=te.get(Ft);if(ee!==void 0){if(K.currentProgram===ee&&K.lightsStateVersion===At)return zo(b,Dt),ee}else Dt.uniforms=Ht.getUniforms(b),b.onBeforeCompile(Dt,A),ee=Ht.acquireProgram(Dt,Ft),te.set(Ft,ee),K.uniforms=Dt.uniforms;const Yt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=St.uniform),zo(b,Dt),K.needsLights=xc(b),K.lightsStateVersion=At,K.needsLights&&(Yt.ambientLightColor.value=q.state.ambient,Yt.lightProbe.value=q.state.probe,Yt.directionalLights.value=q.state.directional,Yt.directionalLightShadows.value=q.state.directionalShadow,Yt.spotLights.value=q.state.spot,Yt.spotLightShadows.value=q.state.spotShadow,Yt.rectAreaLights.value=q.state.rectArea,Yt.ltc_1.value=q.state.rectAreaLTC1,Yt.ltc_2.value=q.state.rectAreaLTC2,Yt.pointLights.value=q.state.point,Yt.pointLightShadows.value=q.state.pointShadow,Yt.hemisphereLights.value=q.state.hemi,Yt.directionalShadowMap.value=q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Yt.spotShadowMap.value=q.state.spotShadowMap,Yt.spotLightMatrix.value=q.state.spotLightMatrix,Yt.spotLightMap.value=q.state.spotLightMap,Yt.pointShadowMap.value=q.state.pointShadowMap,Yt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=ee,K.uniformsList=null,ee}function Bo(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=oc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function zo(b,W){const Z=Vt.get(b);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Go(b,W,Z,K,q){W.isScene!==!0&&(W=He),D.resetTextureUnits();const gt=W.fog,At=K.isMeshStandardMaterial?W.environment:null,Dt=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Bs,Ft=(K.isMeshStandardMaterial?Y:E).get(K.envMap||At),te=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ee=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Yt=!!Z.morphAttributes.position,Me=!!Z.morphAttributes.normal,we=!!Z.morphAttributes.color;let Ke=_r;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ke=A.toneMapping);const ke=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=ke!==void 0?ke.length:0,Xt=Vt.get(K),rn=_.state.lights;if(Mt===!0&&(zt===!0||b!==w)){const hn=b===w&&K.id===L;St.setState(K,b,hn)}let Te=!1;K.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==rn.state.version||Xt.outputColorSpace!==Dt||q.isBatchedMesh&&Xt.batching===!1||!q.isBatchedMesh&&Xt.batching===!0||q.isBatchedMesh&&Xt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xt.instancing===!1||!q.isInstancedMesh&&Xt.instancing===!0||q.isSkinnedMesh&&Xt.skinning===!1||!q.isSkinnedMesh&&Xt.skinning===!0||q.isInstancedMesh&&Xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xt.instancingMorph===!1&&q.morphTexture!==null||Xt.envMap!==Ft||K.fog===!0&&Xt.fog!==gt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==St.numPlanes||Xt.numIntersection!==St.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==ee||Xt.morphTargets!==Yt||Xt.morphNormals!==Me||Xt.morphColors!==we||Xt.toneMapping!==Ke||Xt.morphTargetsCount!==Ee)&&(Te=!0):(Te=!0,Xt.__version=K.version);let vn=Xt.currentProgram;Te===!0&&(vn=Zr(K,W,q));let Li=!1,wn=!1,Qi=!1;const ze=vn.getUniforms(),xn=Xt.uniforms;if(Wt.useProgram(vn.program)&&(Li=!0,wn=!0,Qi=!0),K.id!==L&&(L=K.id,wn=!0),Li||w!==b){Wt.buffers.depth.getReversed()?(Rt.copy(b.projectionMatrix),UE(Rt),NE(Rt),ze.setValue(B,"projectionMatrix",Rt)):ze.setValue(B,"projectionMatrix",b.projectionMatrix),ze.setValue(B,"viewMatrix",b.matrixWorldInverse);const fn=ze.map.cameraPosition;fn!==void 0&&fn.setValue(B,me.setFromMatrixPosition(b.matrixWorld)),ne.logarithmicDepthBuffer&&ze.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ze.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,wn=!0,Qi=!0)}if(q.isSkinnedMesh){ze.setOptional(B,q,"bindMatrix"),ze.setOptional(B,q,"bindMatrixInverse");const hn=q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ze.setValue(B,"boneTexture",hn.boneTexture,D))}q.isBatchedMesh&&(ze.setOptional(B,q,"batchingTexture"),ze.setValue(B,"batchingTexture",q._matricesTexture,D),ze.setOptional(B,q,"batchingIdTexture"),ze.setValue(B,"batchingIdTexture",q._indirectTexture,D),ze.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&ze.setValue(B,"batchingColorTexture",q._colorsTexture,D));const In=Z.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Qt.update(q,Z,vn),(wn||Xt.receiveShadow!==q.receiveShadow)&&(Xt.receiveShadow=q.receiveShadow,ze.setValue(B,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=Ft,xn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),wn&&(ze.setValue(B,"toneMappingExposure",A.toneMappingExposure),Xt.needsLights&&vc(xn,Qi),gt&&K.fog===!0&&Et.refreshFogUniforms(xn,gt),Et.refreshMaterialUniforms(xn,K,j,mt,_.state.transmissionRenderTarget[b.id]),oc.upload(B,Bo(Xt),xn,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(oc.upload(B,Bo(Xt),xn,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ze.setValue(B,"center",q.center),ze.setValue(B,"modelViewMatrix",q.modelViewMatrix),ze.setValue(B,"normalMatrix",q.normalMatrix),ze.setValue(B,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const hn=K.uniformsGroups;for(let fn=0,Sr=hn.length;fn<Sr;fn++){const Dn=hn[fn];V.update(Dn,vn),V.bind(Dn,vn)}}return vn}function vc(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function xc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,W,Z){Vt.get(b.texture).__webglTexture=W,Vt.get(b.depthTexture).__webglTexture=Z;const K=Vt.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const Z=Vt.get(b);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const Sc=B.createFramebuffer();this.setRenderTarget=function(b,W=0,Z=0){z=b,U=W,O=Z;let K=!0,q=null,gt=!1,At=!1;if(b){const Ft=Vt.get(b);if(Ft.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Ft.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Ft.__hasExternalTextures)D.rebindTextures(b,Vt.get(b.texture).__webglTexture,Vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Ft.__boundDepthTexture!==Yt){if(Yt!==null&&Vt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);const ee=Vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[W])?q=ee[W][Z]:q=ee[W],gt=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?q=Vt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[Z]:q=ee,H.copy(b.viewport),Q.copy(b.scissor),$=b.scissorTest}else H.copy(Bt).multiplyScalar(j).floor(),Q.copy(he).multiplyScalar(j).floor(),$=Pe;if(Z!==0&&(q=Sc),Wt.bindFramebuffer(B.FRAMEBUFFER,q)&&K&&Wt.drawBuffers(b,q),Wt.viewport(H),Wt.scissor(Q),Wt.setScissorTest($),gt){const Ft=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,Z)}else if(At){const Ft=Vt.get(b.texture),te=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,Z,te)}else if(b!==null&&Z!==0){const Ft=Vt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,Z)}L=-1},this.readRenderTargetPixels=function(b,W,Z,K,q,gt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){Wt.bindFramebuffer(B.FRAMEBUFFER,Dt);try{const Ft=b.texture,te=Ft.format,ee=Ft.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-K&&Z>=0&&Z<=b.height-q&&B.readPixels(W,Z,K,q,ie.convert(te),ie.convert(ee),gt)}finally{const Ft=z!==null?Vt.get(z).__webglFramebuffer:null;Wt.bindFramebuffer(B.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(b,W,Z,K,q,gt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){const Ft=b.texture,te=Ft.format,ee=Ft.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-K&&Z>=0&&Z<=b.height-q){Wt.bindFramebuffer(B.FRAMEBUFFER,Dt);const Yt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),B.readPixels(W,Z,K,q,ie.convert(te),ie.convert(ee),0);const Me=z!==null?Vt.get(z).__webglFramebuffer:null;Wt.bindFramebuffer(B.FRAMEBUFFER,Me);const we=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await DE(B,we,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Yt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(Yt),B.deleteSync(we),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,Z=0){b.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(b.image.width*K),gt=Math.floor(b.image.height*K),At=W!==null?W.x:0,Dt=W!==null?W.y:0;D.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,At,Dt,q,gt),Wt.unbindTexture()};const Mc=B.createFramebuffer(),Ec=B.createFramebuffer();this.copyTextureToTexture=function(b,W,Z=null,K=null,q=0,gt=null){b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],W=arguments[2],gt=arguments[3]||0,Z=null),gt===null&&(q!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=q,q=0):gt=0);let At,Dt,Ft,te,ee,Yt,Me,we,Ke;const ke=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(Z!==null)At=Z.max.x-Z.min.x,Dt=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,te=Z.min.x,ee=Z.min.y,Yt=Z.isBox3?Z.min.z:0;else{const In=Math.pow(2,-q);At=Math.floor(ke.width*In),Dt=Math.floor(ke.height*In),b.isDataArrayTexture?Ft=ke.depth:b.isData3DTexture?Ft=Math.floor(ke.depth*In):Ft=1,te=0,ee=0,Yt=0}K!==null?(Me=K.x,we=K.y,Ke=K.z):(Me=0,we=0,Ke=0);const Ee=ie.convert(W.format),Xt=ie.convert(W.type);let rn;W.isData3DTexture?(D.setTexture3D(W,0),rn=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),rn=B.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),rn=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Te=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Li=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),Qi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ke.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ke.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Yt);const ze=b.isDataArrayTexture||b.isData3DTexture,xn=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const In=Vt.get(b),hn=Vt.get(W),fn=Vt.get(In.__renderTarget),Sr=Vt.get(hn.__renderTarget);Wt.bindFramebuffer(B.READ_FRAMEBUFFER,fn.__webglFramebuffer),Wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Dn=0;Dn<Ft;Dn++)ze&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(b).__webglTexture,q,Yt+Dn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(W).__webglTexture,gt,Ke+Dn)),B.blitFramebuffer(te,ee,At,Dt,Me,we,At,Dt,B.DEPTH_BUFFER_BIT,B.NEAREST);Wt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||Vt.has(b)){const In=Vt.get(b),hn=Vt.get(W);Wt.bindFramebuffer(B.READ_FRAMEBUFFER,Mc),Wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ec);for(let fn=0;fn<Ft;fn++)ze?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,In.__webglTexture,q,Yt+fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,In.__webglTexture,q),xn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,gt,Ke+fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,gt),q!==0?B.blitFramebuffer(te,ee,At,Dt,Me,we,At,Dt,B.COLOR_BUFFER_BIT,B.NEAREST):xn?B.copyTexSubImage3D(rn,gt,Me,we,Ke+fn,te,ee,At,Dt):B.copyTexSubImage2D(rn,gt,Me,we,te,ee,At,Dt);Wt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else xn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(rn,gt,Me,we,Ke,At,Dt,Ft,Ee,Xt,ke.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(rn,gt,Me,we,Ke,At,Dt,Ft,Ee,ke.data):B.texSubImage3D(rn,gt,Me,we,Ke,At,Dt,Ft,Ee,Xt,ke):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,gt,Me,we,At,Dt,Ee,Xt,ke.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,gt,Me,we,ke.width,ke.height,Ee,ke.data):B.texSubImage2D(B.TEXTURE_2D,gt,Me,we,At,Dt,Ee,Xt,ke);B.pixelStorei(B.UNPACK_ROW_LENGTH,Te),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Li),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qi),gt===0&&W.generateMipmaps&&B.generateMipmap(rn),Wt.unbindTexture()},this.copyTextureToTexture3D=function(b,W,Z=null,K=null,q=0){return b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,b=arguments[2],W=arguments[3],q=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,Z,K,q)},this.initRenderTarget=function(b){Vt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Wt.unbindTexture()},this.resetState=function(){U=0,O=0,z=null,Wt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class Ci{constructor(t){xt(this,"mesh");xt(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,n,s){}graphics(t,e,n,s){}kill(){this.isAlive=!1}beforeDeath(t,e,n){}}class tn{constructor(t){xt(this,"center");xt(this,"_parts");this.center=t.center,this._parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this._parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}set parts(t){this._parts=t,this.updateParts()}get parts(){return this._parts}}const gb={createGrid(r,t){const e=[];for(let n=0;n<r;n++){e[n]=[];for(let s=0;s<t;s++){const a={actors:[],isWalkable:!0};e[n][s]=a}}return e}};class vb{constructor(t){xt(this,"actorsGrid");xt(this,"components",[]);xt(this,"camera");xt(this,"scene");this.actorsGrid=gb.createGrid(t.width,t.height),this.camera=t.camera??new $n,this.scene=t.scene??new ay}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof tn?t.mesh.parts.forEach(n=>this.scene.add(n.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof tn?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((a,c)=>{a.forEach((u,h)=>{const f=new it(c,h);u.actors.forEach(d=>d.update(t,e,this,f.clone()))})}),this.components.forEach(a=>a.update(t,e,this)),this.actorsGrid.map((a,c)=>a.map((u,h)=>{const f=new it(c,h);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(t,this,f),g.mesh instanceof tn?g.mesh.parts.forEach(v=>this.scene.remove(v.mesh)):this.scene.remove(g.mesh)});const m=u.actors.filter(g=>g.isAlive);u.actors=m}));const n=[],s=[];for(let a=0;a<this.components.length;a++){const c=this.components[a];c.isAlive?n.push(c):s.push(c)}s.forEach(a=>{a.mesh instanceof tn?a.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(a.mesh)}),this.components=n}graphics(t,e){this.actorsGrid.forEach((n,s)=>{n.forEach((a,c)=>{const u=new it(s,c);a.actors.forEach(h=>h.graphics(t,e,this,u.clone()))})}),this.components.forEach(n=>n.graphics(t,e,this))}}var Is=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(d){d.preventDefault(),n(++r%t.children.length)},!1);function e(d){return t.appendChild(d.dom),d}function n(d){for(var m=0;m<t.children.length;m++)t.children[m].style.display=m===d?"block":"none";r=d}var s=(performance||Date).now(),a=s,c=0,u=e(new Is.Panel("FPS","#0ff","#002")),h=e(new Is.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new Is.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-s,200),d>=a+1e3&&(u.update(c*1e3/(d-a),100),a=d,c=0,f)){var m=performance.memory;f.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return d},update:function(){s=this.end()},domElement:t,setMode:n}};Is.Panel=function(r,t,e){var n=1/0,s=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,m=3*c,g=15*c,v=74*c,M=30*c,T=document.createElement("canvas");T.width=u,T.height=h,T.style.cssText="width:80px;height:48px";var x=T.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=e,x.fillRect(0,0,u,h),x.fillStyle=t,x.fillText(r,f,d),x.fillRect(m,g,v,M),x.fillStyle=e,x.globalAlpha=.9,x.fillRect(m,g,v,M),{dom:T,update:function(_,P){n=Math.min(n,_),s=Math.max(s,_),x.fillStyle=e,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=t,x.fillText(a(_)+" "+r+" ("+a(n)+"-"+a(s)+")",f,d),x.drawImage(T,m+c,g,v-c,M,m,g,v-c,M),x.fillRect(m+v-c,g,c,M),x.fillStyle=e,x.globalAlpha=.9,x.fillRect(m+v-c,g,c,a((1-_/P)*M))}}};const xb="canvas";class Sb{constructor(){xt(this,"wasPressedMap",new Map);xt(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const Mb=new Sb;class Eb{constructor(){xt(this,"renderer");xt(this,"keyboardHandler");xt(this,"isGameOver",!1);xt(this,"lastUpdate",Date.now());xt(this,"lastGraphics",Date.now());xt(this,"stats",new Is);xt(this,"containers",new Map);xt(this,"currentContainer");this.renderer=new _b,this.renderer.setSize(800,800),this.renderer.domElement.id=xb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=Mb,this.stats=new Is,document.body.appendChild(this.stats.dom);const t=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth*2,window.innerHeight*2),this.renderer.domElement.style.width=`${window.innerWidth}px`,this.renderer.domElement.style.height=`${window.innerHeight}px`};window.addEventListener("resize",t),window.requestAnimationFrame(t)}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=$p(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=$p(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function $p(r){return Math.max(0,Math.min(r,1e3))}class Ji{constructor(t){xt(this,"mesh");xt(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,n){}graphics(t,e,n){}kill(){this.isAlive=!1}}const _t={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",BOX:"#ad7757",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc",WOOD:"#341c27",GRAY:"#819796"},mn=4,Gt={createCube:r=>{const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??65280,n=new Wr(t,t,t,mn,mn,mn),s={color:e},a=r!=null&&r.basicMaterial?new Bn(s):new yi(s);return new an(n,a)},createBox:r=>{var f;const t=(r==null?void 0:r.width)??1,e=(r==null?void 0:r.height)??1,n=(r==null?void 0:r.depth)??1,s=(r==null?void 0:r.color)??new tt(_t.RED),a=new Wr(t,e,n,mn,mn,mn),c=!!(r!=null&&r.transparent),u={color:s,transparent:c,opacity:c?(f=r==null?void 0:r.transparent)==null?void 0:f.value:1},h=r!=null&&r.basicMaterial?new Bn(u):new yi(u);return new an(a,h)},createCone:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,n=(r==null?void 0:r.color)??new tt(_t.RED),s=new Sh(t,e,mn,mn),a={color:n},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(s,c)},createSphere:r=>{var u;const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.color)??new tt(_t.RED),n=new yh(t,mn,mn),s=!!(r!=null&&r.transparent),a={color:e,transparent:s,opacity:s?(u=r==null?void 0:r.transparent)==null?void 0:u.value:1},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(n,c)},createCylinder:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,n=(r==null?void 0:r.color)??new tt(_t.RED),s=new pc(t,t,e,mn*2,mn),a={color:n},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(s,c)},createGem(r){const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??new tt(_t.RED),n=new Eh(t,0),s={color:e},a=r!=null&&r.basicMaterial?new Bn(s):new yi(s);return new an(n,a)},createTorus:r=>{const t=r.radius,e=r.radius/2,n=(r==null?void 0:r.color)??new tt(_t.RED),s=new Th(t,e,mn*2,mn),a={color:n},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(s,c)},createTorusKnotBlob:r=>{const t=r.radius,e=r.radius/4,n=(r==null?void 0:r.color)??new tt(_t.RED),s=new wh(t,e,mn*16,mn,mn*6,mn*2),a={color:n},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(s,c)},createCapsule:r=>{const t=r.radius,e=r.height,n=(r==null?void 0:r.color)??new tt(_t.RED),s=new xh(t,e,1,4),a={color:n},c=r!=null&&r.basicMaterial?new Bn(a):new yi(a);return new an(s,c)},createDodecahedron:r=>{const t=r.radius,e=(r==null?void 0:r.color)??new tt(_t.RED),n=new Mh(t,0),s={color:e},a=r!=null&&r.basicMaterial?new Bn(s):new yi(s);return new an(n,a)}};var Ch=(r=>(r.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",r))(Ch||{});const vt={TILE_SIZE:1,WIDTH:13,HEIGHT:20},To=class To extends Ji{constructor(e){const n=(e==null?void 0:e.size)??1,s=vt.TILE_SIZE/32,a=Gt.createSphere({radius:s*n,color:(e==null?void 0:e.color)??new tt(_t.LIGHT_GREEN),basicMaterial:!0,transparent:{value:1}});super({mesh:a});xt(this,"ttl",0);xt(this,"velocity");xt(this,"gravity");xt(this,"shouldFadeout");this.mesh.position.set(e.position.x,e.position.y,e.position.z);const c=(e==null?void 0:e.force)??1,u=.002;this.velocity=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u),this.gravity=(e==null?void 0:e.gravity)??1e-5,this.shouldFadeout=!!e.shouldFadeout}update(e,n,s){super.update(e,n,s),this.velocity.y-=this.gravity*n,this.mesh.position.add(this.velocity.clone().multiplyScalar(n)),this.ttl+=n,this.shouldFadeout&&(this.mesh.material.opacity=1-this.ttl/To.TTL),this.ttl>To.TTL&&this.kill()}};xt(To,"TTL",800);let uc=To;const eh={createExplosion(r,t,e){const{colors:n}=e,s=e.amount??10,a=Array.isArray(n)?n:[n];for(let c=0;c<s;c++){const u=new uc({position:t.clone(),color:a[Math.floor(Math.random()*a.length)],force:e.force,size:e.size});r.addComponent(u)}},createSingleSmokeParticle(r,t,e){const{colors:n}=e,s=Array.isArray(n)?n:[n],a=s[Math.floor(Math.random()*s.length)],c=new uc({position:t.clone(),color:a,force:e.force,size:e.size,gravity:e.gravity,shouldFadeout:!0});r.addComponent(c)}},wo=class wo extends Ci{constructor(e){const n=new bh(new tt(_t.ORANGE),wo.INTENSITY),s=Gt.createTorusKnotBlob({radius:e.size/8,color:new tt(_t.ORANGE),basicMaterial:!0}),a=new tn({center:e.position,parts:[{mesh:Gt.createBox({width:e.size,height:e.size,depth:e.size,color:new tt(_t.DARK_GREEN)}),offset:new C(0,0,0)},{mesh:n,offset:new C(0,e.size/2+e.size/2,0)},{mesh:Gt.createCylinder({radius:e.size/4,height:e.size/16,color:new tt(_t.WOOD)}),offset:new C(0,e.size/2+e.size/8,0)},{mesh:s,offset:new C(0,e.size/2+e.size/4,0)}]});super({mesh:a});xt(this,"light");xt(this,"flame");xt(this,"PARTICLE_TIMEOUT",50);xt(this,"particleTimeout",0);xt(this,"position");xt(this,"randomAngle",Math.random()*Math.PI*2);this.light=n,this.flame=s,this.position=e.position}update(e,n,s,a){super.update(e,n,s,a),this.light.intensity=wo.INTENSITY+Math.sin(this.randomAngle+Date.now()/200),this.flame.rotation.y+=.012*n,this.flame.rotation.z=Math.sin(Date.now()/1e3),this.flame.rotation.x=Math.sin(Date.now()/1e3),this.particleTimeout+=n;const c=Math.floor(this.particleTimeout/this.PARTICLE_TIMEOUT);this.particleTimeout=this.particleTimeout%this.PARTICLE_TIMEOUT;for(let u=0;u<c;u++)eh.createSingleSmokeParticle(s,this.position.clone().add(new C(0,vt.TILE_SIZE*2/3,0)),{colors:[new tt(_t.ORANGE),new tt(_t.YELLOW),new tt(_t.VOID)],size:1,force:.2,gravity:-25e-7})}};xt(wo,"INTENSITY",5);let nh=wo;class yb extends Ci{constructor(t){const e=new tn({center:t.position,parts:[{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:new tt(_t.DARK)}),offset:new C(0,-t.size*3/8,0)},{mesh:Gt.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new tt(_t.WHITE)}),offset:new C(0,0,0)},{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:new tt(_t.DARK)}),offset:new C(0,t.size*3/8,0)}]});super({mesh:e})}}class Tb extends Ci{constructor(t){const e=t.size/2,n=t.size,s=Math.random()*Math.PI*2,a=3+Math.floor(Math.random()*3),c=h=>{const f=t.size/4,d=h*(Math.PI*2/a)+s,m=new C(Math.cos(d),Math.random()-.5,Math.sin(d)).normalize(),g=e-f/2,v=m.multiplyScalar(g);return{mesh:Gt.createDodecahedron({radius:f,color:new tt(_t.DARK_GREEN)}),offset:v.clone().add(new C(0,n,0))}},u=new tn({center:t.position,parts:[{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:new tt(_t.DARK_GREEN)}),offset:new C(0,t.size*3/8,0)},{mesh:Gt.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new tt(_t.DIRT)}),offset:new C(0,-t.size/8,0)},{mesh:Gt.createTorusKnotBlob({radius:e/3,color:new tt(_t.WOOD)}),offset:new C(0,n/2,0)},{mesh:Gt.createDodecahedron({radius:e,color:new tt(_t.DARK_GREEN)}),offset:new C(0,n,0)},...Array.from({length:a},(h,f)=>c(f))]});super({mesh:u})}}class wb extends Ci{constructor(t){const e=t.size*(.25+Math.random()*.25),n=t.size*(3/16+Math.random()*1/16),s=5+Math.floor(Math.random()*3),a=()=>{const u=new it(Math.random()-.5,Math.random()-.5).normalize(),h=new C(u.x*t.size/3,t.size/2+n/4,u.y*t.size/3);return(Math.random()>.25?"Peeble":"Fungi")==="Peeble"?{mesh:Gt.createDodecahedron({radius:n/2,color:new tt(_t.GRAY)}),offset:h.clone()}:{mesh:Gt.createCone({radius:n/2,height:n/2,color:new tt(_t.BOX)}),offset:h.clone()}},c=new tn({center:t.position.clone(),parts:[{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:new tt(_t.DARK_GREEN)}),offset:new C(0,t.size*3/8,0)},{mesh:Gt.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new tt(_t.DIRT)}),offset:new C(0,-t.size/8,0)},{mesh:Gt.createCapsule({radius:n,height:e,color:new tt(_t.GRAY)}),offset:new C(0,t.size/2+e/2,0)},...Array.from({length:s},()=>a())]});super({mesh:c})}}const Hm={createTreeComposite:r=>{const{height:t}=r;return new tn({center:r.position,parts:[{mesh:Gt.createCylinder({radius:vt.TILE_SIZE/8,height:t,color:new tt(_t.WOOD)}),offset:new C(0,0,0)},{mesh:Gt.createCone({radius:vt.TILE_SIZE/2,height:t-vt.TILE_SIZE/2,color:new tt(_t.DARK_GREEN)}),offset:new C(0,t*4/16,0)},{mesh:Gt.createCone({radius:vt.TILE_SIZE/2,height:t-1.5*vt.TILE_SIZE/2,color:new tt(_t.DARK_GREEN)}),offset:new C(0,t*6/16,0)},{mesh:Gt.createCone({radius:vt.TILE_SIZE/2,height:t-2*vt.TILE_SIZE/2,color:new tt(_t.WHITE)}),offset:new C(0,t*8/16,0)},{mesh:Gt.createCone({radius:vt.TILE_SIZE/2,height:t-2.5*vt.TILE_SIZE/2,color:new tt(_t.DARK_GREEN)}),offset:new C(0,t*8/16,0)}]})}};class Ab extends Ji{constructor(t){const e=new tt(_t.DARK),n=new tt(_t.WHITE),s=new tn({center:t.position,parts:[{mesh:Gt.createBox({width:t.size,height:t.size/8,depth:t.size,color:e.clone()}),offset:new C(0,t.size*7/16,0)},{mesh:Gt.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:n.clone()}),offset:new C(t.size/2,0,t.size/2)},{mesh:Gt.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:n.clone()}),offset:new C(-t.size/2,0,t.size/2)},{mesh:Gt.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:n.clone()}),offset:new C(t.size/2,0,-t.size/2)},{mesh:Gt.createBox({width:t.size/8,height:t.size*1.1,depth:t.size/8,color:n.clone()}),offset:new C(-t.size/2,0,-t.size/2)}]});super({mesh:s})}}class bb extends Ji{constructor(t){const e=()=>{const s=Math.floor(Math.random()*2)+2,a=Array.from({length:s},()=>Gt.createCone({radius:t.size/32,height:t.size/4,color:new tt(_t.GREEN)})),c=2;a.forEach(f=>f.rotateOnAxis(new C(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-t.size/2+Math.random()*t.size,h=-t.size/2+Math.random()*t.size;return a.map(f=>({mesh:f,offset:new C(u,t.size*19/32,h)}))},n=()=>{const s=Gt.createCone({radius:t.size/32,height:t.size/2,color:new tt(_t.GREEN)}),a=Gt.createSphere({radius:t.size/32,color:Math.random()<.5?new tt(_t.PINK):new tt(_t.RED)}),c=-t.size/2+Math.random()*t.size,u=-t.size/2+Math.random()*t.size;return[{mesh:s,offset:new C(c,t.size*10/16,u)},{mesh:a,offset:new C(c,t.size*13/16,u)}]};super({mesh:new tn({center:t.position,parts:[{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new tt(_t.DARK_GREEN)}),offset:new C(0,t.size*3/8,0)},{mesh:Gt.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new tt(_t.DIRT)}),offset:new C(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?n():[]]})})}}class Qa extends Ji{constructor(t){const e=vt.TILE_SIZE/2,n=vt.TILE_SIZE,s=e+Math.random()*n,a=Gt.createCone({radius:vt.TILE_SIZE*3,height:s,color:Math.random()<.5?new tt(_t.WHITE):new tt(_t.WHITE)});a.position.set(t.position.x,s/4,t.position.y),super({mesh:a})}}class Rb extends Ji{constructor(t){const e=Gt.createSphere({radius:vt.TILE_SIZE/32,color:new tt(_t.WHITE),basicMaterial:!0});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}class ja extends Ji{constructor(t){const e=vt.TILE_SIZE*2.5,n=Hm.createTreeComposite({position:new C(t.position.x,e/2+(Math.random()-.5),t.position.y),height:e});super({mesh:n})}}class Cb extends Ji{constructor(t){const e=new tn({center:t.position,parts:[{mesh:Gt.createBox({width:t.width,height:vt.TILE_SIZE*.8,depth:t.height,color:new tt(_t.BLUE),transparent:{value:.5}}),offset:new C(0,0,0)},{mesh:Gt.createBox({width:t.width,height:vt.TILE_SIZE,depth:t.height,color:new tt(_t.DIRT)}),offset:new C(0,-.8,0)}]});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}var Le=(r=>(r.BR="Bridge",r.BF="Bonfire",r.BSH="Bush",r.GRS="Grass",r.HQ="HeadQuarters",r.RV="River",r.RN="Ruin",r.SPW="Spawner",r.STN="Stone",r.TR="Tree",r.WTR="Water",r))(Le||{});const ih={createHorizontalLine(r){const{x1:t,x2:e,y:n}=r,s=[];for(let a=t;a<=e;a++)s.push(new it(a,n));return s},createVerticalLine(r){const{y1:t,y2:e,x:n}=r,s=[];for(let a=t;a<=e;a++)s.push(new it(n,a));return s}},Lb=r=>[...ih.createHorizontalLine({x1:0,x2:vt.WIDTH-1,y:r}).map(t=>({type:Le.RV,position:t})).filter(({position:t})=>!(2<=t.x&&t.x<=10&&!(5<=t.x&&t.x<=7))),...ih.createHorizontalLine({x1:2,x2:10,y:r}).map(t=>({type:Le.BR,position:t}))],Pb={name:"Learning the Basics",tiles:[{type:Le.HQ,position:new it(Math.floor(vt.WIDTH/2),1)},{type:Le.SPW,position:new it(1,18)},{type:Le.SPW,position:new it(11,18)},...ih.createVerticalLine({y1:8,y2:12,x:0}).map(r=>Lb(r.y)).flat(),{type:Le.BF,position:new it(2,14)},{type:Le.BF,position:new it(11,15)},{type:Le.BF,position:new it(7,18)},{type:Le.TR,position:new it(1,13)},{type:Le.TR,position:new it(0,14)},{type:Le.TR,position:new it(0,16)},{type:Le.TR,position:new it(7,13)},{type:Le.TR,position:new it(12,13)},{type:Le.TR,position:new it(12,16)},{type:Le.STN,position:new it(0,15)},{type:Le.STN,position:new it(3,19)},{type:Le.STN,position:new it(12,17)},{type:Le.STN,position:new it(12,14)},{type:Le.BSH,position:new it(4,19)},{type:Le.BSH,position:new it(6,13)},{type:Le.BSH,position:new it(10,17)}]},Ib=[Pb];var tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hu={},mo={},Mo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Db=Mo.exports,Jp;function Ub(){return Jp||(Jp=1,function(r,t){(function(){var e,n="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",m=1,g=2,v=4,M=1,T=2,x=1,_=2,P=4,I=8,A=16,F=32,U=64,O=128,z=256,L=512,w=30,H="...",Q=800,$=16,st=1,ft=2,rt=3,mt=1/0,j=9007199254740991,bt=17976931348623157e292,Pt=NaN,Bt=4294967295,he=Bt-1,Pe=Bt>>>1,lt=[["ary",O],["bind",x],["bindKey",_],["curry",I],["curryRight",A],["flip",L],["partial",F],["partialRight",U],["rearg",z]],Mt="[object Arguments]",zt="[object Array]",Rt="[object AsyncFunction]",qt="[object Boolean]",me="[object Date]",jt="[object DOMException]",He="[object Error]",De="[object Function]",_e="[object GeneratorFunction]",B="[object Map]",un="[object Number]",xe="[object Null]",ne="[object Object]",Wt="[object Promise]",Be="[object Proxy]",Vt="[object RegExp]",D="[object Set]",E="[object String]",Y="[object Symbol]",ht="[object Undefined]",dt="[object WeakMap]",at="[object WeakSet]",Ht="[object ArrayBuffer]",Et="[object DataView]",It="[object Float32Array]",ge="[object Float64Array]",St="[object Int8Array]",Ut="[object Int16Array]",Zt="[object Int32Array]",Qt="[object Uint8Array]",Nt="[object Uint8ClampedArray]",de="[object Uint16Array]",ie="[object Uint32Array]",Ue=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,wt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,et=/&(?:amp|lt|gt|quot|#39);/g,ut=/[&<>"']/g,Lt=RegExp(et.source),Ct=RegExp(ut.source),se=/<%-([\s\S]+?)%>/g,Ye=/<%([\s\S]+?)%>/g,nn=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hn=/^\w*$/,ci=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/[\\^$.*+?()[\]{}|]/g,Uo=RegExp(qr.source),li=/^\s+/,Ws=/\s/,No=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Oo=/\{\n\/\* \[wrapped with (.+)\] \*/,Yr=/,? & /,Fo=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Zr=/[()=,{}\[\]\/\s]/,Bo=/\\(\\)?/g,zo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Go=/\w*$/,vc=/^[-+]0x[0-9a-f]+$/i,xc=/^0b[01]+$/i,Sc=/^\[object .+?Constructor\]$/,Mc=/^0o[0-7]+$/i,Ec=/^(?:0|[1-9]\d*)$/,b=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",At="\\u20d0-\\u20ff",Dt=q+gt+At,Ft="\\u2700-\\u27bf",te="a-z\\xdf-\\xf6\\xf8-\\xff",ee="\\xac\\xb1\\xd7\\xf7",Yt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Me="\\u2000-\\u206f",we=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ke="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",Ee=ee+Yt+Me+we,Xt="['’]",rn="["+K+"]",Te="["+Ee+"]",vn="["+Dt+"]",Li="\\d+",wn="["+Ft+"]",Qi="["+te+"]",ze="[^"+K+Ee+Li+Ft+te+Ke+"]",xn="\\ud83c[\\udffb-\\udfff]",In="(?:"+vn+"|"+xn+")",hn="[^"+K+"]",fn="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",Dn="["+Ke+"]",Ph="\\u200d",Ih="(?:"+Qi+"|"+ze+")",Xm="(?:"+Dn+"|"+ze+")",Dh="(?:"+Xt+"(?:d|ll|m|re|s|t|ve))?",Uh="(?:"+Xt+"(?:D|LL|M|RE|S|T|VE))?",Nh=In+"?",Oh="["+ke+"]?",qm="(?:"+Ph+"(?:"+[hn,fn,Sr].join("|")+")"+Oh+Nh+")*",Ym="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Fh=Oh+Nh+qm,Km="(?:"+[wn,fn,Sr].join("|")+")"+Fh,$m="(?:"+[hn+vn+"?",vn,fn,Sr,rn].join("|")+")",Jm=RegExp(Xt,"g"),Qm=RegExp(vn,"g"),yc=RegExp(xn+"(?="+xn+")|"+$m+Fh,"g"),jm=RegExp([Dn+"?"+Qi+"+"+Dh+"(?="+[Te,Dn,"$"].join("|")+")",Xm+"+"+Uh+"(?="+[Te,Dn+Ih,"$"].join("|")+")",Dn+"?"+Ih+"+"+Dh,Dn+"+"+Uh,Zm,Ym,Li,Km].join("|"),"g"),t_=RegExp("["+Ph+K+Dt+ke+"]"),e_=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,n_=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],i_=-1,We={};We[It]=We[ge]=We[St]=We[Ut]=We[Zt]=We[Qt]=We[Nt]=We[de]=We[ie]=!0,We[Mt]=We[zt]=We[Ht]=We[qt]=We[Et]=We[me]=We[He]=We[De]=We[B]=We[un]=We[ne]=We[Vt]=We[D]=We[E]=We[dt]=!1;var Ve={};Ve[Mt]=Ve[zt]=Ve[Ht]=Ve[Et]=Ve[qt]=Ve[me]=Ve[It]=Ve[ge]=Ve[St]=Ve[Ut]=Ve[Zt]=Ve[B]=Ve[un]=Ve[ne]=Ve[Vt]=Ve[D]=Ve[E]=Ve[Y]=Ve[Qt]=Ve[Nt]=Ve[de]=Ve[ie]=!0,Ve[He]=Ve[De]=Ve[dt]=!1;var r_={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},s_={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},o_={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},a_={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},c_=parseFloat,l_=parseInt,Bh=typeof tc=="object"&&tc&&tc.Object===Object&&tc,u_=typeof self=="object"&&self&&self.Object===Object&&self,_n=Bh||u_||Function("return this")(),Tc=t&&!t.nodeType&&t,Mr=Tc&&!0&&r&&!r.nodeType&&r,zh=Mr&&Mr.exports===Tc,wc=zh&&Bh.process,Jn=function(){try{var k=Mr&&Mr.require&&Mr.require("util").types;return k||wc&&wc.binding&&wc.binding("util")}catch{}}(),Gh=Jn&&Jn.isArrayBuffer,Hh=Jn&&Jn.isDate,Vh=Jn&&Jn.isMap,kh=Jn&&Jn.isRegExp,Wh=Jn&&Jn.isSet,Xh=Jn&&Jn.isTypedArray;function Vn(k,nt,J){switch(J.length){case 0:return k.call(nt);case 1:return k.call(nt,J[0]);case 2:return k.call(nt,J[0],J[1]);case 3:return k.call(nt,J[0],J[1],J[2])}return k.apply(nt,J)}function h_(k,nt,J,Ot){for(var re=-1,Re=k==null?0:k.length;++re<Re;){var sn=k[re];nt(Ot,sn,J(sn),k)}return Ot}function Qn(k,nt){for(var J=-1,Ot=k==null?0:k.length;++J<Ot&&nt(k[J],J,k)!==!1;);return k}function f_(k,nt){for(var J=k==null?0:k.length;J--&&nt(k[J],J,k)!==!1;);return k}function qh(k,nt){for(var J=-1,Ot=k==null?0:k.length;++J<Ot;)if(!nt(k[J],J,k))return!1;return!0}function ji(k,nt){for(var J=-1,Ot=k==null?0:k.length,re=0,Re=[];++J<Ot;){var sn=k[J];nt(sn,J,k)&&(Re[re++]=sn)}return Re}function Ho(k,nt){var J=k==null?0:k.length;return!!J&&Kr(k,nt,0)>-1}function Ac(k,nt,J){for(var Ot=-1,re=k==null?0:k.length;++Ot<re;)if(J(nt,k[Ot]))return!0;return!1}function Ze(k,nt){for(var J=-1,Ot=k==null?0:k.length,re=Array(Ot);++J<Ot;)re[J]=nt(k[J],J,k);return re}function tr(k,nt){for(var J=-1,Ot=nt.length,re=k.length;++J<Ot;)k[re+J]=nt[J];return k}function bc(k,nt,J,Ot){var re=-1,Re=k==null?0:k.length;for(Ot&&Re&&(J=k[++re]);++re<Re;)J=nt(J,k[re],re,k);return J}function d_(k,nt,J,Ot){var re=k==null?0:k.length;for(Ot&&re&&(J=k[--re]);re--;)J=nt(J,k[re],re,k);return J}function Rc(k,nt){for(var J=-1,Ot=k==null?0:k.length;++J<Ot;)if(nt(k[J],J,k))return!0;return!1}var p_=Cc("length");function m_(k){return k.split("")}function __(k){return k.match(Fo)||[]}function Yh(k,nt,J){var Ot;return J(k,function(re,Re,sn){if(nt(re,Re,sn))return Ot=Re,!1}),Ot}function Vo(k,nt,J,Ot){for(var re=k.length,Re=J+(Ot?1:-1);Ot?Re--:++Re<re;)if(nt(k[Re],Re,k))return Re;return-1}function Kr(k,nt,J){return nt===nt?R_(k,nt,J):Vo(k,Zh,J)}function g_(k,nt,J,Ot){for(var re=J-1,Re=k.length;++re<Re;)if(Ot(k[re],nt))return re;return-1}function Zh(k){return k!==k}function Kh(k,nt){var J=k==null?0:k.length;return J?Pc(k,nt)/J:Pt}function Cc(k){return function(nt){return nt==null?e:nt[k]}}function Lc(k){return function(nt){return k==null?e:k[nt]}}function $h(k,nt,J,Ot,re){return re(k,function(Re,sn,Ge){J=Ot?(Ot=!1,Re):nt(J,Re,sn,Ge)}),J}function v_(k,nt){var J=k.length;for(k.sort(nt);J--;)k[J]=k[J].value;return k}function Pc(k,nt){for(var J,Ot=-1,re=k.length;++Ot<re;){var Re=nt(k[Ot]);Re!==e&&(J=J===e?Re:J+Re)}return J}function Ic(k,nt){for(var J=-1,Ot=Array(k);++J<k;)Ot[J]=nt(J);return Ot}function x_(k,nt){return Ze(nt,function(J){return[J,k[J]]})}function Jh(k){return k&&k.slice(0,ef(k)+1).replace(li,"")}function kn(k){return function(nt){return k(nt)}}function Dc(k,nt){return Ze(nt,function(J){return k[J]})}function Xs(k,nt){return k.has(nt)}function Qh(k,nt){for(var J=-1,Ot=k.length;++J<Ot&&Kr(nt,k[J],0)>-1;);return J}function jh(k,nt){for(var J=k.length;J--&&Kr(nt,k[J],0)>-1;);return J}function S_(k,nt){for(var J=k.length,Ot=0;J--;)k[J]===nt&&++Ot;return Ot}var M_=Lc(r_),E_=Lc(s_);function y_(k){return"\\"+a_[k]}function T_(k,nt){return k==null?e:k[nt]}function $r(k){return t_.test(k)}function w_(k){return e_.test(k)}function A_(k){for(var nt,J=[];!(nt=k.next()).done;)J.push(nt.value);return J}function Uc(k){var nt=-1,J=Array(k.size);return k.forEach(function(Ot,re){J[++nt]=[re,Ot]}),J}function tf(k,nt){return function(J){return k(nt(J))}}function er(k,nt){for(var J=-1,Ot=k.length,re=0,Re=[];++J<Ot;){var sn=k[J];(sn===nt||sn===d)&&(k[J]=d,Re[re++]=J)}return Re}function ko(k){var nt=-1,J=Array(k.size);return k.forEach(function(Ot){J[++nt]=Ot}),J}function b_(k){var nt=-1,J=Array(k.size);return k.forEach(function(Ot){J[++nt]=[Ot,Ot]}),J}function R_(k,nt,J){for(var Ot=J-1,re=k.length;++Ot<re;)if(k[Ot]===nt)return Ot;return-1}function C_(k,nt,J){for(var Ot=J+1;Ot--;)if(k[Ot]===nt)return Ot;return Ot}function Jr(k){return $r(k)?P_(k):p_(k)}function ui(k){return $r(k)?I_(k):m_(k)}function ef(k){for(var nt=k.length;nt--&&Ws.test(k.charAt(nt)););return nt}var L_=Lc(o_);function P_(k){for(var nt=yc.lastIndex=0;yc.test(k);)++nt;return nt}function I_(k){return k.match(yc)||[]}function D_(k){return k.match(jm)||[]}var U_=function k(nt){nt=nt==null?_n:Qr.defaults(_n.Object(),nt,Qr.pick(_n,n_));var J=nt.Array,Ot=nt.Date,re=nt.Error,Re=nt.Function,sn=nt.Math,Ge=nt.Object,Nc=nt.RegExp,N_=nt.String,jn=nt.TypeError,Wo=J.prototype,O_=Re.prototype,jr=Ge.prototype,Xo=nt["__core-js_shared__"],qo=O_.toString,Ie=jr.hasOwnProperty,F_=0,nf=function(){var i=/[^.]+$/.exec(Xo&&Xo.keys&&Xo.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),Yo=jr.toString,B_=qo.call(Ge),z_=_n._,G_=Nc("^"+qo.call(Ie).replace(qr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zo=zh?nt.Buffer:e,nr=nt.Symbol,Ko=nt.Uint8Array,rf=Zo?Zo.allocUnsafe:e,$o=tf(Ge.getPrototypeOf,Ge),sf=Ge.create,of=jr.propertyIsEnumerable,Jo=Wo.splice,af=nr?nr.isConcatSpreadable:e,qs=nr?nr.iterator:e,Er=nr?nr.toStringTag:e,Qo=function(){try{var i=br(Ge,"defineProperty");return i({},"",{}),i}catch{}}(),H_=nt.clearTimeout!==_n.clearTimeout&&nt.clearTimeout,V_=Ot&&Ot.now!==_n.Date.now&&Ot.now,k_=nt.setTimeout!==_n.setTimeout&&nt.setTimeout,jo=sn.ceil,ta=sn.floor,Oc=Ge.getOwnPropertySymbols,W_=Zo?Zo.isBuffer:e,cf=nt.isFinite,X_=Wo.join,q_=tf(Ge.keys,Ge),on=sn.max,Sn=sn.min,Y_=Ot.now,Z_=nt.parseInt,lf=sn.random,K_=Wo.reverse,Fc=br(nt,"DataView"),Ys=br(nt,"Map"),Bc=br(nt,"Promise"),ts=br(nt,"Set"),Zs=br(nt,"WeakMap"),Ks=br(Ge,"create"),ea=Zs&&new Zs,es={},$_=Rr(Fc),J_=Rr(Ys),Q_=Rr(Bc),j_=Rr(ts),tg=Rr(Zs),na=nr?nr.prototype:e,$s=na?na.valueOf:e,uf=na?na.toString:e;function y(i){if(Je(i)&&!oe(i)&&!(i instanceof Se)){if(i instanceof ti)return i;if(Ie.call(i,"__wrapped__"))return hd(i)}return new ti(i)}var ns=function(){function i(){}return function(o){if(!$e(o))return{};if(sf)return sf(o);i.prototype=o;var l=new i;return i.prototype=e,l}}();function ia(){}function ti(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=e}y.templateSettings={escape:se,evaluate:Ye,interpolate:nn,variable:"",imports:{_:y}},y.prototype=ia.prototype,y.prototype.constructor=y,ti.prototype=ns(ia.prototype),ti.prototype.constructor=ti;function Se(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Bt,this.__views__=[]}function eg(){var i=new Se(this.__wrapped__);return i.__actions__=Un(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Un(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Un(this.__views__),i}function ng(){if(this.__filtered__){var i=new Se(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function ig(){var i=this.__wrapped__.value(),o=this.__dir__,l=oe(i),p=o<0,S=l?i.length:0,R=m0(0,S,this.__views__),N=R.start,G=R.end,X=G-N,ot=p?G:N-1,ct=this.__iteratees__,pt=ct.length,yt=0,kt=Sn(X,this.__takeCount__);if(!l||!p&&S==X&&kt==X)return Uf(i,this.__actions__);var $t=[];t:for(;X--&&yt<kt;){ot+=o;for(var le=-1,Jt=i[ot];++le<pt;){var ve=ct[le],ye=ve.iteratee,qn=ve.type,Rn=ye(Jt);if(qn==ft)Jt=Rn;else if(!Rn){if(qn==st)continue t;break t}}$t[yt++]=Jt}return $t}Se.prototype=ns(ia.prototype),Se.prototype.constructor=Se;function yr(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var p=i[o];this.set(p[0],p[1])}}function rg(){this.__data__=Ks?Ks(null):{},this.size=0}function sg(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function og(i){var o=this.__data__;if(Ks){var l=o[i];return l===h?e:l}return Ie.call(o,i)?o[i]:e}function ag(i){var o=this.__data__;return Ks?o[i]!==e:Ie.call(o,i)}function cg(i,o){var l=this.__data__;return this.size+=this.has(i)?0:1,l[i]=Ks&&o===e?h:o,this}yr.prototype.clear=rg,yr.prototype.delete=sg,yr.prototype.get=og,yr.prototype.has=ag,yr.prototype.set=cg;function Pi(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var p=i[o];this.set(p[0],p[1])}}function lg(){this.__data__=[],this.size=0}function ug(i){var o=this.__data__,l=ra(o,i);if(l<0)return!1;var p=o.length-1;return l==p?o.pop():Jo.call(o,l,1),--this.size,!0}function hg(i){var o=this.__data__,l=ra(o,i);return l<0?e:o[l][1]}function fg(i){return ra(this.__data__,i)>-1}function dg(i,o){var l=this.__data__,p=ra(l,i);return p<0?(++this.size,l.push([i,o])):l[p][1]=o,this}Pi.prototype.clear=lg,Pi.prototype.delete=ug,Pi.prototype.get=hg,Pi.prototype.has=fg,Pi.prototype.set=dg;function Ii(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var p=i[o];this.set(p[0],p[1])}}function pg(){this.size=0,this.__data__={hash:new yr,map:new(Ys||Pi),string:new yr}}function mg(i){var o=_a(this,i).delete(i);return this.size-=o?1:0,o}function _g(i){return _a(this,i).get(i)}function gg(i){return _a(this,i).has(i)}function vg(i,o){var l=_a(this,i),p=l.size;return l.set(i,o),this.size+=l.size==p?0:1,this}Ii.prototype.clear=pg,Ii.prototype.delete=mg,Ii.prototype.get=_g,Ii.prototype.has=gg,Ii.prototype.set=vg;function Tr(i){var o=-1,l=i==null?0:i.length;for(this.__data__=new Ii;++o<l;)this.add(i[o])}function xg(i){return this.__data__.set(i,h),this}function Sg(i){return this.__data__.has(i)}Tr.prototype.add=Tr.prototype.push=xg,Tr.prototype.has=Sg;function hi(i){var o=this.__data__=new Pi(i);this.size=o.size}function Mg(){this.__data__=new Pi,this.size=0}function Eg(i){var o=this.__data__,l=o.delete(i);return this.size=o.size,l}function yg(i){return this.__data__.get(i)}function Tg(i){return this.__data__.has(i)}function wg(i,o){var l=this.__data__;if(l instanceof Pi){var p=l.__data__;if(!Ys||p.length<s-1)return p.push([i,o]),this.size=++l.size,this;l=this.__data__=new Ii(p)}return l.set(i,o),this.size=l.size,this}hi.prototype.clear=Mg,hi.prototype.delete=Eg,hi.prototype.get=yg,hi.prototype.has=Tg,hi.prototype.set=wg;function hf(i,o){var l=oe(i),p=!l&&Cr(i),S=!l&&!p&&ar(i),R=!l&&!p&&!S&&os(i),N=l||p||S||R,G=N?Ic(i.length,N_):[],X=G.length;for(var ot in i)(o||Ie.call(i,ot))&&!(N&&(ot=="length"||S&&(ot=="offset"||ot=="parent")||R&&(ot=="buffer"||ot=="byteLength"||ot=="byteOffset")||Oi(ot,X)))&&G.push(ot);return G}function ff(i){var o=i.length;return o?i[Kc(0,o-1)]:e}function Ag(i,o){return ga(Un(i),wr(o,0,i.length))}function bg(i){return ga(Un(i))}function zc(i,o,l){(l!==e&&!fi(i[o],l)||l===e&&!(o in i))&&Di(i,o,l)}function Js(i,o,l){var p=i[o];(!(Ie.call(i,o)&&fi(p,l))||l===e&&!(o in i))&&Di(i,o,l)}function ra(i,o){for(var l=i.length;l--;)if(fi(i[l][0],o))return l;return-1}function Rg(i,o,l,p){return ir(i,function(S,R,N){o(p,S,l(S),N)}),p}function df(i,o){return i&&Mi(o,dn(o),i)}function Cg(i,o){return i&&Mi(o,On(o),i)}function Di(i,o,l){o=="__proto__"&&Qo?Qo(i,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):i[o]=l}function Gc(i,o){for(var l=-1,p=o.length,S=J(p),R=i==null;++l<p;)S[l]=R?e:Sl(i,o[l]);return S}function wr(i,o,l){return i===i&&(l!==e&&(i=i<=l?i:l),o!==e&&(i=i>=o?i:o)),i}function ei(i,o,l,p,S,R){var N,G=o&m,X=o&g,ot=o&v;if(l&&(N=S?l(i,p,S,R):l(i)),N!==e)return N;if(!$e(i))return i;var ct=oe(i);if(ct){if(N=g0(i),!G)return Un(i,N)}else{var pt=Mn(i),yt=pt==De||pt==_e;if(ar(i))return Ff(i,G);if(pt==ne||pt==Mt||yt&&!S){if(N=X||yt?{}:nd(i),!G)return X?o0(i,Cg(N,i)):s0(i,df(N,i))}else{if(!Ve[pt])return S?i:{};N=v0(i,pt,G)}}R||(R=new hi);var kt=R.get(i);if(kt)return kt;R.set(i,N),Pd(i)?i.forEach(function(Jt){N.add(ei(Jt,o,l,Jt,i,R))}):Cd(i)&&i.forEach(function(Jt,ve){N.set(ve,ei(Jt,o,l,ve,i,R))});var $t=ot?X?ol:sl:X?On:dn,le=ct?e:$t(i);return Qn(le||i,function(Jt,ve){le&&(ve=Jt,Jt=i[ve]),Js(N,ve,ei(Jt,o,l,ve,i,R))}),N}function Lg(i){var o=dn(i);return function(l){return pf(l,i,o)}}function pf(i,o,l){var p=l.length;if(i==null)return!p;for(i=Ge(i);p--;){var S=l[p],R=o[S],N=i[S];if(N===e&&!(S in i)||!R(N))return!1}return!0}function mf(i,o,l){if(typeof i!="function")throw new jn(c);return ro(function(){i.apply(e,l)},o)}function Qs(i,o,l,p){var S=-1,R=Ho,N=!0,G=i.length,X=[],ot=o.length;if(!G)return X;l&&(o=Ze(o,kn(l))),p?(R=Ac,N=!1):o.length>=s&&(R=Xs,N=!1,o=new Tr(o));t:for(;++S<G;){var ct=i[S],pt=l==null?ct:l(ct);if(ct=p||ct!==0?ct:0,N&&pt===pt){for(var yt=ot;yt--;)if(o[yt]===pt)continue t;X.push(ct)}else R(o,pt,p)||X.push(ct)}return X}var ir=Vf(Si),_f=Vf(Vc,!0);function Pg(i,o){var l=!0;return ir(i,function(p,S,R){return l=!!o(p,S,R),l}),l}function sa(i,o,l){for(var p=-1,S=i.length;++p<S;){var R=i[p],N=o(R);if(N!=null&&(G===e?N===N&&!Xn(N):l(N,G)))var G=N,X=R}return X}function Ig(i,o,l,p){var S=i.length;for(l=ae(l),l<0&&(l=-l>S?0:S+l),p=p===e||p>S?S:ae(p),p<0&&(p+=S),p=l>p?0:Dd(p);l<p;)i[l++]=o;return i}function gf(i,o){var l=[];return ir(i,function(p,S,R){o(p,S,R)&&l.push(p)}),l}function gn(i,o,l,p,S){var R=-1,N=i.length;for(l||(l=S0),S||(S=[]);++R<N;){var G=i[R];o>0&&l(G)?o>1?gn(G,o-1,l,p,S):tr(S,G):p||(S[S.length]=G)}return S}var Hc=kf(),vf=kf(!0);function Si(i,o){return i&&Hc(i,o,dn)}function Vc(i,o){return i&&vf(i,o,dn)}function oa(i,o){return ji(o,function(l){return Fi(i[l])})}function Ar(i,o){o=sr(o,i);for(var l=0,p=o.length;i!=null&&l<p;)i=i[Ei(o[l++])];return l&&l==p?i:e}function xf(i,o,l){var p=o(i);return oe(i)?p:tr(p,l(i))}function An(i){return i==null?i===e?ht:xe:Er&&Er in Ge(i)?p0(i):b0(i)}function kc(i,o){return i>o}function Dg(i,o){return i!=null&&Ie.call(i,o)}function Ug(i,o){return i!=null&&o in Ge(i)}function Ng(i,o,l){return i>=Sn(o,l)&&i<on(o,l)}function Wc(i,o,l){for(var p=l?Ac:Ho,S=i[0].length,R=i.length,N=R,G=J(R),X=1/0,ot=[];N--;){var ct=i[N];N&&o&&(ct=Ze(ct,kn(o))),X=Sn(ct.length,X),G[N]=!l&&(o||S>=120&&ct.length>=120)?new Tr(N&&ct):e}ct=i[0];var pt=-1,yt=G[0];t:for(;++pt<S&&ot.length<X;){var kt=ct[pt],$t=o?o(kt):kt;if(kt=l||kt!==0?kt:0,!(yt?Xs(yt,$t):p(ot,$t,l))){for(N=R;--N;){var le=G[N];if(!(le?Xs(le,$t):p(i[N],$t,l)))continue t}yt&&yt.push($t),ot.push(kt)}}return ot}function Og(i,o,l,p){return Si(i,function(S,R,N){o(p,l(S),R,N)}),p}function js(i,o,l){o=sr(o,i),i=od(i,o);var p=i==null?i:i[Ei(ii(o))];return p==null?e:Vn(p,i,l)}function Sf(i){return Je(i)&&An(i)==Mt}function Fg(i){return Je(i)&&An(i)==Ht}function Bg(i){return Je(i)&&An(i)==me}function to(i,o,l,p,S){return i===o?!0:i==null||o==null||!Je(i)&&!Je(o)?i!==i&&o!==o:zg(i,o,l,p,to,S)}function zg(i,o,l,p,S,R){var N=oe(i),G=oe(o),X=N?zt:Mn(i),ot=G?zt:Mn(o);X=X==Mt?ne:X,ot=ot==Mt?ne:ot;var ct=X==ne,pt=ot==ne,yt=X==ot;if(yt&&ar(i)){if(!ar(o))return!1;N=!0,ct=!1}if(yt&&!ct)return R||(R=new hi),N||os(i)?jf(i,o,l,p,S,R):f0(i,o,X,l,p,S,R);if(!(l&M)){var kt=ct&&Ie.call(i,"__wrapped__"),$t=pt&&Ie.call(o,"__wrapped__");if(kt||$t){var le=kt?i.value():i,Jt=$t?o.value():o;return R||(R=new hi),S(le,Jt,l,p,R)}}return yt?(R||(R=new hi),d0(i,o,l,p,S,R)):!1}function Gg(i){return Je(i)&&Mn(i)==B}function Xc(i,o,l,p){var S=l.length,R=S,N=!p;if(i==null)return!R;for(i=Ge(i);S--;){var G=l[S];if(N&&G[2]?G[1]!==i[G[0]]:!(G[0]in i))return!1}for(;++S<R;){G=l[S];var X=G[0],ot=i[X],ct=G[1];if(N&&G[2]){if(ot===e&&!(X in i))return!1}else{var pt=new hi;if(p)var yt=p(ot,ct,X,i,o,pt);if(!(yt===e?to(ct,ot,M|T,p,pt):yt))return!1}}return!0}function Mf(i){if(!$e(i)||E0(i))return!1;var o=Fi(i)?G_:Sc;return o.test(Rr(i))}function Hg(i){return Je(i)&&An(i)==Vt}function Vg(i){return Je(i)&&Mn(i)==D}function kg(i){return Je(i)&&ya(i.length)&&!!We[An(i)]}function Ef(i){return typeof i=="function"?i:i==null?Fn:typeof i=="object"?oe(i)?wf(i[0],i[1]):Tf(i):Wd(i)}function qc(i){if(!io(i))return q_(i);var o=[];for(var l in Ge(i))Ie.call(i,l)&&l!="constructor"&&o.push(l);return o}function Wg(i){if(!$e(i))return A0(i);var o=io(i),l=[];for(var p in i)p=="constructor"&&(o||!Ie.call(i,p))||l.push(p);return l}function Yc(i,o){return i<o}function yf(i,o){var l=-1,p=Nn(i)?J(i.length):[];return ir(i,function(S,R,N){p[++l]=o(S,R,N)}),p}function Tf(i){var o=cl(i);return o.length==1&&o[0][2]?rd(o[0][0],o[0][1]):function(l){return l===i||Xc(l,i,o)}}function wf(i,o){return ul(i)&&id(o)?rd(Ei(i),o):function(l){var p=Sl(l,i);return p===e&&p===o?Ml(l,i):to(o,p,M|T)}}function aa(i,o,l,p,S){i!==o&&Hc(o,function(R,N){if(S||(S=new hi),$e(R))Xg(i,o,N,l,aa,p,S);else{var G=p?p(fl(i,N),R,N+"",i,o,S):e;G===e&&(G=R),zc(i,N,G)}},On)}function Xg(i,o,l,p,S,R,N){var G=fl(i,l),X=fl(o,l),ot=N.get(X);if(ot){zc(i,l,ot);return}var ct=R?R(G,X,l+"",i,o,N):e,pt=ct===e;if(pt){var yt=oe(X),kt=!yt&&ar(X),$t=!yt&&!kt&&os(X);ct=X,yt||kt||$t?oe(G)?ct=G:Qe(G)?ct=Un(G):kt?(pt=!1,ct=Ff(X,!0)):$t?(pt=!1,ct=Bf(X,!0)):ct=[]:so(X)||Cr(X)?(ct=G,Cr(G)?ct=Ud(G):(!$e(G)||Fi(G))&&(ct=nd(X))):pt=!1}pt&&(N.set(X,ct),S(ct,X,p,R,N),N.delete(X)),zc(i,l,ct)}function Af(i,o){var l=i.length;if(l)return o+=o<0?l:0,Oi(o,l)?i[o]:e}function bf(i,o,l){o.length?o=Ze(o,function(R){return oe(R)?function(N){return Ar(N,R.length===1?R[0]:R)}:R}):o=[Fn];var p=-1;o=Ze(o,kn(Kt()));var S=yf(i,function(R,N,G){var X=Ze(o,function(ot){return ot(R)});return{criteria:X,index:++p,value:R}});return v_(S,function(R,N){return r0(R,N,l)})}function qg(i,o){return Rf(i,o,function(l,p){return Ml(i,p)})}function Rf(i,o,l){for(var p=-1,S=o.length,R={};++p<S;){var N=o[p],G=Ar(i,N);l(G,N)&&eo(R,sr(N,i),G)}return R}function Yg(i){return function(o){return Ar(o,i)}}function Zc(i,o,l,p){var S=p?g_:Kr,R=-1,N=o.length,G=i;for(i===o&&(o=Un(o)),l&&(G=Ze(i,kn(l)));++R<N;)for(var X=0,ot=o[R],ct=l?l(ot):ot;(X=S(G,ct,X,p))>-1;)G!==i&&Jo.call(G,X,1),Jo.call(i,X,1);return i}function Cf(i,o){for(var l=i?o.length:0,p=l-1;l--;){var S=o[l];if(l==p||S!==R){var R=S;Oi(S)?Jo.call(i,S,1):Qc(i,S)}}return i}function Kc(i,o){return i+ta(lf()*(o-i+1))}function Zg(i,o,l,p){for(var S=-1,R=on(jo((o-i)/(l||1)),0),N=J(R);R--;)N[p?R:++S]=i,i+=l;return N}function $c(i,o){var l="";if(!i||o<1||o>j)return l;do o%2&&(l+=i),o=ta(o/2),o&&(i+=i);while(o);return l}function fe(i,o){return dl(sd(i,o,Fn),i+"")}function Kg(i){return ff(as(i))}function $g(i,o){var l=as(i);return ga(l,wr(o,0,l.length))}function eo(i,o,l,p){if(!$e(i))return i;o=sr(o,i);for(var S=-1,R=o.length,N=R-1,G=i;G!=null&&++S<R;){var X=Ei(o[S]),ot=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return i;if(S!=N){var ct=G[X];ot=p?p(ct,X,G):e,ot===e&&(ot=$e(ct)?ct:Oi(o[S+1])?[]:{})}Js(G,X,ot),G=G[X]}return i}var Lf=ea?function(i,o){return ea.set(i,o),i}:Fn,Jg=Qo?function(i,o){return Qo(i,"toString",{configurable:!0,enumerable:!1,value:yl(o),writable:!0})}:Fn;function Qg(i){return ga(as(i))}function ni(i,o,l){var p=-1,S=i.length;o<0&&(o=-o>S?0:S+o),l=l>S?S:l,l<0&&(l+=S),S=o>l?0:l-o>>>0,o>>>=0;for(var R=J(S);++p<S;)R[p]=i[p+o];return R}function jg(i,o){var l;return ir(i,function(p,S,R){return l=o(p,S,R),!l}),!!l}function ca(i,o,l){var p=0,S=i==null?p:i.length;if(typeof o=="number"&&o===o&&S<=Pe){for(;p<S;){var R=p+S>>>1,N=i[R];N!==null&&!Xn(N)&&(l?N<=o:N<o)?p=R+1:S=R}return S}return Jc(i,o,Fn,l)}function Jc(i,o,l,p){var S=0,R=i==null?0:i.length;if(R===0)return 0;o=l(o);for(var N=o!==o,G=o===null,X=Xn(o),ot=o===e;S<R;){var ct=ta((S+R)/2),pt=l(i[ct]),yt=pt!==e,kt=pt===null,$t=pt===pt,le=Xn(pt);if(N)var Jt=p||$t;else ot?Jt=$t&&(p||yt):G?Jt=$t&&yt&&(p||!kt):X?Jt=$t&&yt&&!kt&&(p||!le):kt||le?Jt=!1:Jt=p?pt<=o:pt<o;Jt?S=ct+1:R=ct}return Sn(R,he)}function Pf(i,o){for(var l=-1,p=i.length,S=0,R=[];++l<p;){var N=i[l],G=o?o(N):N;if(!l||!fi(G,X)){var X=G;R[S++]=N===0?0:N}}return R}function If(i){return typeof i=="number"?i:Xn(i)?Pt:+i}function Wn(i){if(typeof i=="string")return i;if(oe(i))return Ze(i,Wn)+"";if(Xn(i))return uf?uf.call(i):"";var o=i+"";return o=="0"&&1/i==-1/0?"-0":o}function rr(i,o,l){var p=-1,S=Ho,R=i.length,N=!0,G=[],X=G;if(l)N=!1,S=Ac;else if(R>=s){var ot=o?null:u0(i);if(ot)return ko(ot);N=!1,S=Xs,X=new Tr}else X=o?[]:G;t:for(;++p<R;){var ct=i[p],pt=o?o(ct):ct;if(ct=l||ct!==0?ct:0,N&&pt===pt){for(var yt=X.length;yt--;)if(X[yt]===pt)continue t;o&&X.push(pt),G.push(ct)}else S(X,pt,l)||(X!==G&&X.push(pt),G.push(ct))}return G}function Qc(i,o){return o=sr(o,i),i=od(i,o),i==null||delete i[Ei(ii(o))]}function Df(i,o,l,p){return eo(i,o,l(Ar(i,o)),p)}function la(i,o,l,p){for(var S=i.length,R=p?S:-1;(p?R--:++R<S)&&o(i[R],R,i););return l?ni(i,p?0:R,p?R+1:S):ni(i,p?R+1:0,p?S:R)}function Uf(i,o){var l=i;return l instanceof Se&&(l=l.value()),bc(o,function(p,S){return S.func.apply(S.thisArg,tr([p],S.args))},l)}function jc(i,o,l){var p=i.length;if(p<2)return p?rr(i[0]):[];for(var S=-1,R=J(p);++S<p;)for(var N=i[S],G=-1;++G<p;)G!=S&&(R[S]=Qs(R[S]||N,i[G],o,l));return rr(gn(R,1),o,l)}function Nf(i,o,l){for(var p=-1,S=i.length,R=o.length,N={};++p<S;){var G=p<R?o[p]:e;l(N,i[p],G)}return N}function tl(i){return Qe(i)?i:[]}function el(i){return typeof i=="function"?i:Fn}function sr(i,o){return oe(i)?i:ul(i,o)?[i]:ud(Ce(i))}var t0=fe;function or(i,o,l){var p=i.length;return l=l===e?p:l,!o&&l>=p?i:ni(i,o,l)}var Of=H_||function(i){return _n.clearTimeout(i)};function Ff(i,o){if(o)return i.slice();var l=i.length,p=rf?rf(l):new i.constructor(l);return i.copy(p),p}function nl(i){var o=new i.constructor(i.byteLength);return new Ko(o).set(new Ko(i)),o}function e0(i,o){var l=o?nl(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.byteLength)}function n0(i){var o=new i.constructor(i.source,Go.exec(i));return o.lastIndex=i.lastIndex,o}function i0(i){return $s?Ge($s.call(i)):{}}function Bf(i,o){var l=o?nl(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.length)}function zf(i,o){if(i!==o){var l=i!==e,p=i===null,S=i===i,R=Xn(i),N=o!==e,G=o===null,X=o===o,ot=Xn(o);if(!G&&!ot&&!R&&i>o||R&&N&&X&&!G&&!ot||p&&N&&X||!l&&X||!S)return 1;if(!p&&!R&&!ot&&i<o||ot&&l&&S&&!p&&!R||G&&l&&S||!N&&S||!X)return-1}return 0}function r0(i,o,l){for(var p=-1,S=i.criteria,R=o.criteria,N=S.length,G=l.length;++p<N;){var X=zf(S[p],R[p]);if(X){if(p>=G)return X;var ot=l[p];return X*(ot=="desc"?-1:1)}}return i.index-o.index}function Gf(i,o,l,p){for(var S=-1,R=i.length,N=l.length,G=-1,X=o.length,ot=on(R-N,0),ct=J(X+ot),pt=!p;++G<X;)ct[G]=o[G];for(;++S<N;)(pt||S<R)&&(ct[l[S]]=i[S]);for(;ot--;)ct[G++]=i[S++];return ct}function Hf(i,o,l,p){for(var S=-1,R=i.length,N=-1,G=l.length,X=-1,ot=o.length,ct=on(R-G,0),pt=J(ct+ot),yt=!p;++S<ct;)pt[S]=i[S];for(var kt=S;++X<ot;)pt[kt+X]=o[X];for(;++N<G;)(yt||S<R)&&(pt[kt+l[N]]=i[S++]);return pt}function Un(i,o){var l=-1,p=i.length;for(o||(o=J(p));++l<p;)o[l]=i[l];return o}function Mi(i,o,l,p){var S=!l;l||(l={});for(var R=-1,N=o.length;++R<N;){var G=o[R],X=p?p(l[G],i[G],G,l,i):e;X===e&&(X=i[G]),S?Di(l,G,X):Js(l,G,X)}return l}function s0(i,o){return Mi(i,ll(i),o)}function o0(i,o){return Mi(i,td(i),o)}function ua(i,o){return function(l,p){var S=oe(l)?h_:Rg,R=o?o():{};return S(l,i,Kt(p,2),R)}}function is(i){return fe(function(o,l){var p=-1,S=l.length,R=S>1?l[S-1]:e,N=S>2?l[2]:e;for(R=i.length>3&&typeof R=="function"?(S--,R):e,N&&bn(l[0],l[1],N)&&(R=S<3?e:R,S=1),o=Ge(o);++p<S;){var G=l[p];G&&i(o,G,p,R)}return o})}function Vf(i,o){return function(l,p){if(l==null)return l;if(!Nn(l))return i(l,p);for(var S=l.length,R=o?S:-1,N=Ge(l);(o?R--:++R<S)&&p(N[R],R,N)!==!1;);return l}}function kf(i){return function(o,l,p){for(var S=-1,R=Ge(o),N=p(o),G=N.length;G--;){var X=N[i?G:++S];if(l(R[X],X,R)===!1)break}return o}}function a0(i,o,l){var p=o&x,S=no(i);function R(){var N=this&&this!==_n&&this instanceof R?S:i;return N.apply(p?l:this,arguments)}return R}function Wf(i){return function(o){o=Ce(o);var l=$r(o)?ui(o):e,p=l?l[0]:o.charAt(0),S=l?or(l,1).join(""):o.slice(1);return p[i]()+S}}function rs(i){return function(o){return bc(Vd(Hd(o).replace(Jm,"")),i,"")}}function no(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=ns(i.prototype),p=i.apply(l,o);return $e(p)?p:l}}function c0(i,o,l){var p=no(i);function S(){for(var R=arguments.length,N=J(R),G=R,X=ss(S);G--;)N[G]=arguments[G];var ot=R<3&&N[0]!==X&&N[R-1]!==X?[]:er(N,X);if(R-=ot.length,R<l)return Kf(i,o,ha,S.placeholder,e,N,ot,e,e,l-R);var ct=this&&this!==_n&&this instanceof S?p:i;return Vn(ct,this,N)}return S}function Xf(i){return function(o,l,p){var S=Ge(o);if(!Nn(o)){var R=Kt(l,3);o=dn(o),l=function(G){return R(S[G],G,S)}}var N=i(o,l,p);return N>-1?S[R?o[N]:N]:e}}function qf(i){return Ni(function(o){var l=o.length,p=l,S=ti.prototype.thru;for(i&&o.reverse();p--;){var R=o[p];if(typeof R!="function")throw new jn(c);if(S&&!N&&ma(R)=="wrapper")var N=new ti([],!0)}for(p=N?p:l;++p<l;){R=o[p];var G=ma(R),X=G=="wrapper"?al(R):e;X&&hl(X[0])&&X[1]==(O|I|F|z)&&!X[4].length&&X[9]==1?N=N[ma(X[0])].apply(N,X[3]):N=R.length==1&&hl(R)?N[G]():N.thru(R)}return function(){var ot=arguments,ct=ot[0];if(N&&ot.length==1&&oe(ct))return N.plant(ct).value();for(var pt=0,yt=l?o[pt].apply(this,ot):ct;++pt<l;)yt=o[pt].call(this,yt);return yt}})}function ha(i,o,l,p,S,R,N,G,X,ot){var ct=o&O,pt=o&x,yt=o&_,kt=o&(I|A),$t=o&L,le=yt?e:no(i);function Jt(){for(var ve=arguments.length,ye=J(ve),qn=ve;qn--;)ye[qn]=arguments[qn];if(kt)var Rn=ss(Jt),Yn=S_(ye,Rn);if(p&&(ye=Gf(ye,p,S,kt)),R&&(ye=Hf(ye,R,N,kt)),ve-=Yn,kt&&ve<ot){var je=er(ye,Rn);return Kf(i,o,ha,Jt.placeholder,l,ye,je,G,X,ot-ve)}var di=pt?l:this,zi=yt?di[i]:i;return ve=ye.length,G?ye=R0(ye,G):$t&&ve>1&&ye.reverse(),ct&&X<ve&&(ye.length=X),this&&this!==_n&&this instanceof Jt&&(zi=le||no(zi)),zi.apply(di,ye)}return Jt}function Yf(i,o){return function(l,p){return Og(l,i,o(p),{})}}function fa(i,o){return function(l,p){var S;if(l===e&&p===e)return o;if(l!==e&&(S=l),p!==e){if(S===e)return p;typeof l=="string"||typeof p=="string"?(l=Wn(l),p=Wn(p)):(l=If(l),p=If(p)),S=i(l,p)}return S}}function il(i){return Ni(function(o){return o=Ze(o,kn(Kt())),fe(function(l){var p=this;return i(o,function(S){return Vn(S,p,l)})})})}function da(i,o){o=o===e?" ":Wn(o);var l=o.length;if(l<2)return l?$c(o,i):o;var p=$c(o,jo(i/Jr(o)));return $r(o)?or(ui(p),0,i).join(""):p.slice(0,i)}function l0(i,o,l,p){var S=o&x,R=no(i);function N(){for(var G=-1,X=arguments.length,ot=-1,ct=p.length,pt=J(ct+X),yt=this&&this!==_n&&this instanceof N?R:i;++ot<ct;)pt[ot]=p[ot];for(;X--;)pt[ot++]=arguments[++G];return Vn(yt,S?l:this,pt)}return N}function Zf(i){return function(o,l,p){return p&&typeof p!="number"&&bn(o,l,p)&&(l=p=e),o=Bi(o),l===e?(l=o,o=0):l=Bi(l),p=p===e?o<l?1:-1:Bi(p),Zg(o,l,p,i)}}function pa(i){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=ri(o),l=ri(l)),i(o,l)}}function Kf(i,o,l,p,S,R,N,G,X,ot){var ct=o&I,pt=ct?N:e,yt=ct?e:N,kt=ct?R:e,$t=ct?e:R;o|=ct?F:U,o&=~(ct?U:F),o&P||(o&=-4);var le=[i,o,S,kt,pt,$t,yt,G,X,ot],Jt=l.apply(e,le);return hl(i)&&ad(Jt,le),Jt.placeholder=p,cd(Jt,i,o)}function rl(i){var o=sn[i];return function(l,p){if(l=ri(l),p=p==null?0:Sn(ae(p),292),p&&cf(l)){var S=(Ce(l)+"e").split("e"),R=o(S[0]+"e"+(+S[1]+p));return S=(Ce(R)+"e").split("e"),+(S[0]+"e"+(+S[1]-p))}return o(l)}}var u0=ts&&1/ko(new ts([,-0]))[1]==mt?function(i){return new ts(i)}:Al;function $f(i){return function(o){var l=Mn(o);return l==B?Uc(o):l==D?b_(o):x_(o,i(o))}}function Ui(i,o,l,p,S,R,N,G){var X=o&_;if(!X&&typeof i!="function")throw new jn(c);var ot=p?p.length:0;if(ot||(o&=-97,p=S=e),N=N===e?N:on(ae(N),0),G=G===e?G:ae(G),ot-=S?S.length:0,o&U){var ct=p,pt=S;p=S=e}var yt=X?e:al(i),kt=[i,o,l,p,S,ct,pt,R,N,G];if(yt&&w0(kt,yt),i=kt[0],o=kt[1],l=kt[2],p=kt[3],S=kt[4],G=kt[9]=kt[9]===e?X?0:i.length:on(kt[9]-ot,0),!G&&o&(I|A)&&(o&=-25),!o||o==x)var $t=a0(i,o,l);else o==I||o==A?$t=c0(i,o,G):(o==F||o==(x|F))&&!S.length?$t=l0(i,o,l,p):$t=ha.apply(e,kt);var le=yt?Lf:ad;return cd(le($t,kt),i,o)}function Jf(i,o,l,p){return i===e||fi(i,jr[l])&&!Ie.call(p,l)?o:i}function Qf(i,o,l,p,S,R){return $e(i)&&$e(o)&&(R.set(o,i),aa(i,o,e,Qf,R),R.delete(o)),i}function h0(i){return so(i)?e:i}function jf(i,o,l,p,S,R){var N=l&M,G=i.length,X=o.length;if(G!=X&&!(N&&X>G))return!1;var ot=R.get(i),ct=R.get(o);if(ot&&ct)return ot==o&&ct==i;var pt=-1,yt=!0,kt=l&T?new Tr:e;for(R.set(i,o),R.set(o,i);++pt<G;){var $t=i[pt],le=o[pt];if(p)var Jt=N?p(le,$t,pt,o,i,R):p($t,le,pt,i,o,R);if(Jt!==e){if(Jt)continue;yt=!1;break}if(kt){if(!Rc(o,function(ve,ye){if(!Xs(kt,ye)&&($t===ve||S($t,ve,l,p,R)))return kt.push(ye)})){yt=!1;break}}else if(!($t===le||S($t,le,l,p,R))){yt=!1;break}}return R.delete(i),R.delete(o),yt}function f0(i,o,l,p,S,R,N){switch(l){case Et:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case Ht:return!(i.byteLength!=o.byteLength||!R(new Ko(i),new Ko(o)));case qt:case me:case un:return fi(+i,+o);case He:return i.name==o.name&&i.message==o.message;case Vt:case E:return i==o+"";case B:var G=Uc;case D:var X=p&M;if(G||(G=ko),i.size!=o.size&&!X)return!1;var ot=N.get(i);if(ot)return ot==o;p|=T,N.set(i,o);var ct=jf(G(i),G(o),p,S,R,N);return N.delete(i),ct;case Y:if($s)return $s.call(i)==$s.call(o)}return!1}function d0(i,o,l,p,S,R){var N=l&M,G=sl(i),X=G.length,ot=sl(o),ct=ot.length;if(X!=ct&&!N)return!1;for(var pt=X;pt--;){var yt=G[pt];if(!(N?yt in o:Ie.call(o,yt)))return!1}var kt=R.get(i),$t=R.get(o);if(kt&&$t)return kt==o&&$t==i;var le=!0;R.set(i,o),R.set(o,i);for(var Jt=N;++pt<X;){yt=G[pt];var ve=i[yt],ye=o[yt];if(p)var qn=N?p(ye,ve,yt,o,i,R):p(ve,ye,yt,i,o,R);if(!(qn===e?ve===ye||S(ve,ye,l,p,R):qn)){le=!1;break}Jt||(Jt=yt=="constructor")}if(le&&!Jt){var Rn=i.constructor,Yn=o.constructor;Rn!=Yn&&"constructor"in i&&"constructor"in o&&!(typeof Rn=="function"&&Rn instanceof Rn&&typeof Yn=="function"&&Yn instanceof Yn)&&(le=!1)}return R.delete(i),R.delete(o),le}function Ni(i){return dl(sd(i,e,pd),i+"")}function sl(i){return xf(i,dn,ll)}function ol(i){return xf(i,On,td)}var al=ea?function(i){return ea.get(i)}:Al;function ma(i){for(var o=i.name+"",l=es[o],p=Ie.call(es,o)?l.length:0;p--;){var S=l[p],R=S.func;if(R==null||R==i)return S.name}return o}function ss(i){var o=Ie.call(y,"placeholder")?y:i;return o.placeholder}function Kt(){var i=y.iteratee||Tl;return i=i===Tl?Ef:i,arguments.length?i(arguments[0],arguments[1]):i}function _a(i,o){var l=i.__data__;return M0(o)?l[typeof o=="string"?"string":"hash"]:l.map}function cl(i){for(var o=dn(i),l=o.length;l--;){var p=o[l],S=i[p];o[l]=[p,S,id(S)]}return o}function br(i,o){var l=T_(i,o);return Mf(l)?l:e}function p0(i){var o=Ie.call(i,Er),l=i[Er];try{i[Er]=e;var p=!0}catch{}var S=Yo.call(i);return p&&(o?i[Er]=l:delete i[Er]),S}var ll=Oc?function(i){return i==null?[]:(i=Ge(i),ji(Oc(i),function(o){return of.call(i,o)}))}:bl,td=Oc?function(i){for(var o=[];i;)tr(o,ll(i)),i=$o(i);return o}:bl,Mn=An;(Fc&&Mn(new Fc(new ArrayBuffer(1)))!=Et||Ys&&Mn(new Ys)!=B||Bc&&Mn(Bc.resolve())!=Wt||ts&&Mn(new ts)!=D||Zs&&Mn(new Zs)!=dt)&&(Mn=function(i){var o=An(i),l=o==ne?i.constructor:e,p=l?Rr(l):"";if(p)switch(p){case $_:return Et;case J_:return B;case Q_:return Wt;case j_:return D;case tg:return dt}return o});function m0(i,o,l){for(var p=-1,S=l.length;++p<S;){var R=l[p],N=R.size;switch(R.type){case"drop":i+=N;break;case"dropRight":o-=N;break;case"take":o=Sn(o,i+N);break;case"takeRight":i=on(i,o-N);break}}return{start:i,end:o}}function _0(i){var o=i.match(Oo);return o?o[1].split(Yr):[]}function ed(i,o,l){o=sr(o,i);for(var p=-1,S=o.length,R=!1;++p<S;){var N=Ei(o[p]);if(!(R=i!=null&&l(i,N)))break;i=i[N]}return R||++p!=S?R:(S=i==null?0:i.length,!!S&&ya(S)&&Oi(N,S)&&(oe(i)||Cr(i)))}function g0(i){var o=i.length,l=new i.constructor(o);return o&&typeof i[0]=="string"&&Ie.call(i,"index")&&(l.index=i.index,l.input=i.input),l}function nd(i){return typeof i.constructor=="function"&&!io(i)?ns($o(i)):{}}function v0(i,o,l){var p=i.constructor;switch(o){case Ht:return nl(i);case qt:case me:return new p(+i);case Et:return e0(i,l);case It:case ge:case St:case Ut:case Zt:case Qt:case Nt:case de:case ie:return Bf(i,l);case B:return new p;case un:case E:return new p(i);case Vt:return n0(i);case D:return new p;case Y:return i0(i)}}function x0(i,o){var l=o.length;if(!l)return i;var p=l-1;return o[p]=(l>1?"& ":"")+o[p],o=o.join(l>2?", ":" "),i.replace(No,`{
/* [wrapped with `+o+`] */
`)}function S0(i){return oe(i)||Cr(i)||!!(af&&i&&i[af])}function Oi(i,o){var l=typeof i;return o=o??j,!!o&&(l=="number"||l!="symbol"&&Ec.test(i))&&i>-1&&i%1==0&&i<o}function bn(i,o,l){if(!$e(l))return!1;var p=typeof o;return(p=="number"?Nn(l)&&Oi(o,l.length):p=="string"&&o in l)?fi(l[o],i):!1}function ul(i,o){if(oe(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||Xn(i)?!0:Hn.test(i)||!be.test(i)||o!=null&&i in Ge(o)}function M0(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function hl(i){var o=ma(i),l=y[o];if(typeof l!="function"||!(o in Se.prototype))return!1;if(i===l)return!0;var p=al(l);return!!p&&i===p[0]}function E0(i){return!!nf&&nf in i}var y0=Xo?Fi:Rl;function io(i){var o=i&&i.constructor,l=typeof o=="function"&&o.prototype||jr;return i===l}function id(i){return i===i&&!$e(i)}function rd(i,o){return function(l){return l==null?!1:l[i]===o&&(o!==e||i in Ge(l))}}function T0(i){var o=Ma(i,function(p){return l.size===f&&l.clear(),p}),l=o.cache;return o}function w0(i,o){var l=i[1],p=o[1],S=l|p,R=S<(x|_|O),N=p==O&&l==I||p==O&&l==z&&i[7].length<=o[8]||p==(O|z)&&o[7].length<=o[8]&&l==I;if(!(R||N))return i;p&x&&(i[2]=o[2],S|=l&x?0:P);var G=o[3];if(G){var X=i[3];i[3]=X?Gf(X,G,o[4]):G,i[4]=X?er(i[3],d):o[4]}return G=o[5],G&&(X=i[5],i[5]=X?Hf(X,G,o[6]):G,i[6]=X?er(i[5],d):o[6]),G=o[7],G&&(i[7]=G),p&O&&(i[8]=i[8]==null?o[8]:Sn(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=S,i}function A0(i){var o=[];if(i!=null)for(var l in Ge(i))o.push(l);return o}function b0(i){return Yo.call(i)}function sd(i,o,l){return o=on(o===e?i.length-1:o,0),function(){for(var p=arguments,S=-1,R=on(p.length-o,0),N=J(R);++S<R;)N[S]=p[o+S];S=-1;for(var G=J(o+1);++S<o;)G[S]=p[S];return G[o]=l(N),Vn(i,this,G)}}function od(i,o){return o.length<2?i:Ar(i,ni(o,0,-1))}function R0(i,o){for(var l=i.length,p=Sn(o.length,l),S=Un(i);p--;){var R=o[p];i[p]=Oi(R,l)?S[R]:e}return i}function fl(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var ad=ld(Lf),ro=k_||function(i,o){return _n.setTimeout(i,o)},dl=ld(Jg);function cd(i,o,l){var p=o+"";return dl(i,x0(p,C0(_0(p),l)))}function ld(i){var o=0,l=0;return function(){var p=Y_(),S=$-(p-l);if(l=p,S>0){if(++o>=Q)return arguments[0]}else o=0;return i.apply(e,arguments)}}function ga(i,o){var l=-1,p=i.length,S=p-1;for(o=o===e?p:o;++l<o;){var R=Kc(l,S),N=i[R];i[R]=i[l],i[l]=N}return i.length=o,i}var ud=T0(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(ci,function(l,p,S,R){o.push(S?R.replace(Bo,"$1"):p||l)}),o});function Ei(i){if(typeof i=="string"||Xn(i))return i;var o=i+"";return o=="0"&&1/i==-1/0?"-0":o}function Rr(i){if(i!=null){try{return qo.call(i)}catch{}try{return i+""}catch{}}return""}function C0(i,o){return Qn(lt,function(l){var p="_."+l[0];o&l[1]&&!Ho(i,p)&&i.push(p)}),i.sort()}function hd(i){if(i instanceof Se)return i.clone();var o=new ti(i.__wrapped__,i.__chain__);return o.__actions__=Un(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function L0(i,o,l){(l?bn(i,o,l):o===e)?o=1:o=on(ae(o),0);var p=i==null?0:i.length;if(!p||o<1)return[];for(var S=0,R=0,N=J(jo(p/o));S<p;)N[R++]=ni(i,S,S+=o);return N}function P0(i){for(var o=-1,l=i==null?0:i.length,p=0,S=[];++o<l;){var R=i[o];R&&(S[p++]=R)}return S}function I0(){var i=arguments.length;if(!i)return[];for(var o=J(i-1),l=arguments[0],p=i;p--;)o[p-1]=arguments[p];return tr(oe(l)?Un(l):[l],gn(o,1))}var D0=fe(function(i,o){return Qe(i)?Qs(i,gn(o,1,Qe,!0)):[]}),U0=fe(function(i,o){var l=ii(o);return Qe(l)&&(l=e),Qe(i)?Qs(i,gn(o,1,Qe,!0),Kt(l,2)):[]}),N0=fe(function(i,o){var l=ii(o);return Qe(l)&&(l=e),Qe(i)?Qs(i,gn(o,1,Qe,!0),e,l):[]});function O0(i,o,l){var p=i==null?0:i.length;return p?(o=l||o===e?1:ae(o),ni(i,o<0?0:o,p)):[]}function F0(i,o,l){var p=i==null?0:i.length;return p?(o=l||o===e?1:ae(o),o=p-o,ni(i,0,o<0?0:o)):[]}function B0(i,o){return i&&i.length?la(i,Kt(o,3),!0,!0):[]}function z0(i,o){return i&&i.length?la(i,Kt(o,3),!0):[]}function G0(i,o,l,p){var S=i==null?0:i.length;return S?(l&&typeof l!="number"&&bn(i,o,l)&&(l=0,p=S),Ig(i,o,l,p)):[]}function fd(i,o,l){var p=i==null?0:i.length;if(!p)return-1;var S=l==null?0:ae(l);return S<0&&(S=on(p+S,0)),Vo(i,Kt(o,3),S)}function dd(i,o,l){var p=i==null?0:i.length;if(!p)return-1;var S=p-1;return l!==e&&(S=ae(l),S=l<0?on(p+S,0):Sn(S,p-1)),Vo(i,Kt(o,3),S,!0)}function pd(i){var o=i==null?0:i.length;return o?gn(i,1):[]}function H0(i){var o=i==null?0:i.length;return o?gn(i,mt):[]}function V0(i,o){var l=i==null?0:i.length;return l?(o=o===e?1:ae(o),gn(i,o)):[]}function k0(i){for(var o=-1,l=i==null?0:i.length,p={};++o<l;){var S=i[o];p[S[0]]=S[1]}return p}function md(i){return i&&i.length?i[0]:e}function W0(i,o,l){var p=i==null?0:i.length;if(!p)return-1;var S=l==null?0:ae(l);return S<0&&(S=on(p+S,0)),Kr(i,o,S)}function X0(i){var o=i==null?0:i.length;return o?ni(i,0,-1):[]}var q0=fe(function(i){var o=Ze(i,tl);return o.length&&o[0]===i[0]?Wc(o):[]}),Y0=fe(function(i){var o=ii(i),l=Ze(i,tl);return o===ii(l)?o=e:l.pop(),l.length&&l[0]===i[0]?Wc(l,Kt(o,2)):[]}),Z0=fe(function(i){var o=ii(i),l=Ze(i,tl);return o=typeof o=="function"?o:e,o&&l.pop(),l.length&&l[0]===i[0]?Wc(l,e,o):[]});function K0(i,o){return i==null?"":X_.call(i,o)}function ii(i){var o=i==null?0:i.length;return o?i[o-1]:e}function $0(i,o,l){var p=i==null?0:i.length;if(!p)return-1;var S=p;return l!==e&&(S=ae(l),S=S<0?on(p+S,0):Sn(S,p-1)),o===o?C_(i,o,S):Vo(i,Zh,S,!0)}function J0(i,o){return i&&i.length?Af(i,ae(o)):e}var Q0=fe(_d);function _d(i,o){return i&&i.length&&o&&o.length?Zc(i,o):i}function j0(i,o,l){return i&&i.length&&o&&o.length?Zc(i,o,Kt(l,2)):i}function tv(i,o,l){return i&&i.length&&o&&o.length?Zc(i,o,e,l):i}var ev=Ni(function(i,o){var l=i==null?0:i.length,p=Gc(i,o);return Cf(i,Ze(o,function(S){return Oi(S,l)?+S:S}).sort(zf)),p});function nv(i,o){var l=[];if(!(i&&i.length))return l;var p=-1,S=[],R=i.length;for(o=Kt(o,3);++p<R;){var N=i[p];o(N,p,i)&&(l.push(N),S.push(p))}return Cf(i,S),l}function pl(i){return i==null?i:K_.call(i)}function iv(i,o,l){var p=i==null?0:i.length;return p?(l&&typeof l!="number"&&bn(i,o,l)?(o=0,l=p):(o=o==null?0:ae(o),l=l===e?p:ae(l)),ni(i,o,l)):[]}function rv(i,o){return ca(i,o)}function sv(i,o,l){return Jc(i,o,Kt(l,2))}function ov(i,o){var l=i==null?0:i.length;if(l){var p=ca(i,o);if(p<l&&fi(i[p],o))return p}return-1}function av(i,o){return ca(i,o,!0)}function cv(i,o,l){return Jc(i,o,Kt(l,2),!0)}function lv(i,o){var l=i==null?0:i.length;if(l){var p=ca(i,o,!0)-1;if(fi(i[p],o))return p}return-1}function uv(i){return i&&i.length?Pf(i):[]}function hv(i,o){return i&&i.length?Pf(i,Kt(o,2)):[]}function fv(i){var o=i==null?0:i.length;return o?ni(i,1,o):[]}function dv(i,o,l){return i&&i.length?(o=l||o===e?1:ae(o),ni(i,0,o<0?0:o)):[]}function pv(i,o,l){var p=i==null?0:i.length;return p?(o=l||o===e?1:ae(o),o=p-o,ni(i,o<0?0:o,p)):[]}function mv(i,o){return i&&i.length?la(i,Kt(o,3),!1,!0):[]}function _v(i,o){return i&&i.length?la(i,Kt(o,3)):[]}var gv=fe(function(i){return rr(gn(i,1,Qe,!0))}),vv=fe(function(i){var o=ii(i);return Qe(o)&&(o=e),rr(gn(i,1,Qe,!0),Kt(o,2))}),xv=fe(function(i){var o=ii(i);return o=typeof o=="function"?o:e,rr(gn(i,1,Qe,!0),e,o)});function Sv(i){return i&&i.length?rr(i):[]}function Mv(i,o){return i&&i.length?rr(i,Kt(o,2)):[]}function Ev(i,o){return o=typeof o=="function"?o:e,i&&i.length?rr(i,e,o):[]}function ml(i){if(!(i&&i.length))return[];var o=0;return i=ji(i,function(l){if(Qe(l))return o=on(l.length,o),!0}),Ic(o,function(l){return Ze(i,Cc(l))})}function gd(i,o){if(!(i&&i.length))return[];var l=ml(i);return o==null?l:Ze(l,function(p){return Vn(o,e,p)})}var yv=fe(function(i,o){return Qe(i)?Qs(i,o):[]}),Tv=fe(function(i){return jc(ji(i,Qe))}),wv=fe(function(i){var o=ii(i);return Qe(o)&&(o=e),jc(ji(i,Qe),Kt(o,2))}),Av=fe(function(i){var o=ii(i);return o=typeof o=="function"?o:e,jc(ji(i,Qe),e,o)}),bv=fe(ml);function Rv(i,o){return Nf(i||[],o||[],Js)}function Cv(i,o){return Nf(i||[],o||[],eo)}var Lv=fe(function(i){var o=i.length,l=o>1?i[o-1]:e;return l=typeof l=="function"?(i.pop(),l):e,gd(i,l)});function vd(i){var o=y(i);return o.__chain__=!0,o}function Pv(i,o){return o(i),i}function va(i,o){return o(i)}var Iv=Ni(function(i){var o=i.length,l=o?i[0]:0,p=this.__wrapped__,S=function(R){return Gc(R,i)};return o>1||this.__actions__.length||!(p instanceof Se)||!Oi(l)?this.thru(S):(p=p.slice(l,+l+(o?1:0)),p.__actions__.push({func:va,args:[S],thisArg:e}),new ti(p,this.__chain__).thru(function(R){return o&&!R.length&&R.push(e),R}))});function Dv(){return vd(this)}function Uv(){return new ti(this.value(),this.__chain__)}function Nv(){this.__values__===e&&(this.__values__=Id(this.value()));var i=this.__index__>=this.__values__.length,o=i?e:this.__values__[this.__index__++];return{done:i,value:o}}function Ov(){return this}function Fv(i){for(var o,l=this;l instanceof ia;){var p=hd(l);p.__index__=0,p.__values__=e,o?S.__wrapped__=p:o=p;var S=p;l=l.__wrapped__}return S.__wrapped__=i,o}function Bv(){var i=this.__wrapped__;if(i instanceof Se){var o=i;return this.__actions__.length&&(o=new Se(this)),o=o.reverse(),o.__actions__.push({func:va,args:[pl],thisArg:e}),new ti(o,this.__chain__)}return this.thru(pl)}function zv(){return Uf(this.__wrapped__,this.__actions__)}var Gv=ua(function(i,o,l){Ie.call(i,l)?++i[l]:Di(i,l,1)});function Hv(i,o,l){var p=oe(i)?qh:Pg;return l&&bn(i,o,l)&&(o=e),p(i,Kt(o,3))}function Vv(i,o){var l=oe(i)?ji:gf;return l(i,Kt(o,3))}var kv=Xf(fd),Wv=Xf(dd);function Xv(i,o){return gn(xa(i,o),1)}function qv(i,o){return gn(xa(i,o),mt)}function Yv(i,o,l){return l=l===e?1:ae(l),gn(xa(i,o),l)}function xd(i,o){var l=oe(i)?Qn:ir;return l(i,Kt(o,3))}function Sd(i,o){var l=oe(i)?f_:_f;return l(i,Kt(o,3))}var Zv=ua(function(i,o,l){Ie.call(i,l)?i[l].push(o):Di(i,l,[o])});function Kv(i,o,l,p){i=Nn(i)?i:as(i),l=l&&!p?ae(l):0;var S=i.length;return l<0&&(l=on(S+l,0)),Ta(i)?l<=S&&i.indexOf(o,l)>-1:!!S&&Kr(i,o,l)>-1}var $v=fe(function(i,o,l){var p=-1,S=typeof o=="function",R=Nn(i)?J(i.length):[];return ir(i,function(N){R[++p]=S?Vn(o,N,l):js(N,o,l)}),R}),Jv=ua(function(i,o,l){Di(i,l,o)});function xa(i,o){var l=oe(i)?Ze:yf;return l(i,Kt(o,3))}function Qv(i,o,l,p){return i==null?[]:(oe(o)||(o=o==null?[]:[o]),l=p?e:l,oe(l)||(l=l==null?[]:[l]),bf(i,o,l))}var jv=ua(function(i,o,l){i[l?0:1].push(o)},function(){return[[],[]]});function tx(i,o,l){var p=oe(i)?bc:$h,S=arguments.length<3;return p(i,Kt(o,4),l,S,ir)}function ex(i,o,l){var p=oe(i)?d_:$h,S=arguments.length<3;return p(i,Kt(o,4),l,S,_f)}function nx(i,o){var l=oe(i)?ji:gf;return l(i,Ea(Kt(o,3)))}function ix(i){var o=oe(i)?ff:Kg;return o(i)}function rx(i,o,l){(l?bn(i,o,l):o===e)?o=1:o=ae(o);var p=oe(i)?Ag:$g;return p(i,o)}function sx(i){var o=oe(i)?bg:Qg;return o(i)}function ox(i){if(i==null)return 0;if(Nn(i))return Ta(i)?Jr(i):i.length;var o=Mn(i);return o==B||o==D?i.size:qc(i).length}function ax(i,o,l){var p=oe(i)?Rc:jg;return l&&bn(i,o,l)&&(o=e),p(i,Kt(o,3))}var cx=fe(function(i,o){if(i==null)return[];var l=o.length;return l>1&&bn(i,o[0],o[1])?o=[]:l>2&&bn(o[0],o[1],o[2])&&(o=[o[0]]),bf(i,gn(o,1),[])}),Sa=V_||function(){return _n.Date.now()};function lx(i,o){if(typeof o!="function")throw new jn(c);return i=ae(i),function(){if(--i<1)return o.apply(this,arguments)}}function Md(i,o,l){return o=l?e:o,o=i&&o==null?i.length:o,Ui(i,O,e,e,e,e,o)}function Ed(i,o){var l;if(typeof o!="function")throw new jn(c);return i=ae(i),function(){return--i>0&&(l=o.apply(this,arguments)),i<=1&&(o=e),l}}var _l=fe(function(i,o,l){var p=x;if(l.length){var S=er(l,ss(_l));p|=F}return Ui(i,p,o,l,S)}),yd=fe(function(i,o,l){var p=x|_;if(l.length){var S=er(l,ss(yd));p|=F}return Ui(o,p,i,l,S)});function Td(i,o,l){o=l?e:o;var p=Ui(i,I,e,e,e,e,e,o);return p.placeholder=Td.placeholder,p}function wd(i,o,l){o=l?e:o;var p=Ui(i,A,e,e,e,e,e,o);return p.placeholder=wd.placeholder,p}function Ad(i,o,l){var p,S,R,N,G,X,ot=0,ct=!1,pt=!1,yt=!0;if(typeof i!="function")throw new jn(c);o=ri(o)||0,$e(l)&&(ct=!!l.leading,pt="maxWait"in l,R=pt?on(ri(l.maxWait)||0,o):R,yt="trailing"in l?!!l.trailing:yt);function kt(je){var di=p,zi=S;return p=S=e,ot=je,N=i.apply(zi,di),N}function $t(je){return ot=je,G=ro(ve,o),ct?kt(je):N}function le(je){var di=je-X,zi=je-ot,Xd=o-di;return pt?Sn(Xd,R-zi):Xd}function Jt(je){var di=je-X,zi=je-ot;return X===e||di>=o||di<0||pt&&zi>=R}function ve(){var je=Sa();if(Jt(je))return ye(je);G=ro(ve,le(je))}function ye(je){return G=e,yt&&p?kt(je):(p=S=e,N)}function qn(){G!==e&&Of(G),ot=0,p=X=S=G=e}function Rn(){return G===e?N:ye(Sa())}function Yn(){var je=Sa(),di=Jt(je);if(p=arguments,S=this,X=je,di){if(G===e)return $t(X);if(pt)return Of(G),G=ro(ve,o),kt(X)}return G===e&&(G=ro(ve,o)),N}return Yn.cancel=qn,Yn.flush=Rn,Yn}var ux=fe(function(i,o){return mf(i,1,o)}),hx=fe(function(i,o,l){return mf(i,ri(o)||0,l)});function fx(i){return Ui(i,L)}function Ma(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new jn(c);var l=function(){var p=arguments,S=o?o.apply(this,p):p[0],R=l.cache;if(R.has(S))return R.get(S);var N=i.apply(this,p);return l.cache=R.set(S,N)||R,N};return l.cache=new(Ma.Cache||Ii),l}Ma.Cache=Ii;function Ea(i){if(typeof i!="function")throw new jn(c);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function dx(i){return Ed(2,i)}var px=t0(function(i,o){o=o.length==1&&oe(o[0])?Ze(o[0],kn(Kt())):Ze(gn(o,1),kn(Kt()));var l=o.length;return fe(function(p){for(var S=-1,R=Sn(p.length,l);++S<R;)p[S]=o[S].call(this,p[S]);return Vn(i,this,p)})}),gl=fe(function(i,o){var l=er(o,ss(gl));return Ui(i,F,e,o,l)}),bd=fe(function(i,o){var l=er(o,ss(bd));return Ui(i,U,e,o,l)}),mx=Ni(function(i,o){return Ui(i,z,e,e,e,o)});function _x(i,o){if(typeof i!="function")throw new jn(c);return o=o===e?o:ae(o),fe(i,o)}function gx(i,o){if(typeof i!="function")throw new jn(c);return o=o==null?0:on(ae(o),0),fe(function(l){var p=l[o],S=or(l,0,o);return p&&tr(S,p),Vn(i,this,S)})}function vx(i,o,l){var p=!0,S=!0;if(typeof i!="function")throw new jn(c);return $e(l)&&(p="leading"in l?!!l.leading:p,S="trailing"in l?!!l.trailing:S),Ad(i,o,{leading:p,maxWait:o,trailing:S})}function xx(i){return Md(i,1)}function Sx(i,o){return gl(el(o),i)}function Mx(){if(!arguments.length)return[];var i=arguments[0];return oe(i)?i:[i]}function Ex(i){return ei(i,v)}function yx(i,o){return o=typeof o=="function"?o:e,ei(i,v,o)}function Tx(i){return ei(i,m|v)}function wx(i,o){return o=typeof o=="function"?o:e,ei(i,m|v,o)}function Ax(i,o){return o==null||pf(i,o,dn(o))}function fi(i,o){return i===o||i!==i&&o!==o}var bx=pa(kc),Rx=pa(function(i,o){return i>=o}),Cr=Sf(function(){return arguments}())?Sf:function(i){return Je(i)&&Ie.call(i,"callee")&&!of.call(i,"callee")},oe=J.isArray,Cx=Gh?kn(Gh):Fg;function Nn(i){return i!=null&&ya(i.length)&&!Fi(i)}function Qe(i){return Je(i)&&Nn(i)}function Lx(i){return i===!0||i===!1||Je(i)&&An(i)==qt}var ar=W_||Rl,Px=Hh?kn(Hh):Bg;function Ix(i){return Je(i)&&i.nodeType===1&&!so(i)}function Dx(i){if(i==null)return!0;if(Nn(i)&&(oe(i)||typeof i=="string"||typeof i.splice=="function"||ar(i)||os(i)||Cr(i)))return!i.length;var o=Mn(i);if(o==B||o==D)return!i.size;if(io(i))return!qc(i).length;for(var l in i)if(Ie.call(i,l))return!1;return!0}function Ux(i,o){return to(i,o)}function Nx(i,o,l){l=typeof l=="function"?l:e;var p=l?l(i,o):e;return p===e?to(i,o,e,l):!!p}function vl(i){if(!Je(i))return!1;var o=An(i);return o==He||o==jt||typeof i.message=="string"&&typeof i.name=="string"&&!so(i)}function Ox(i){return typeof i=="number"&&cf(i)}function Fi(i){if(!$e(i))return!1;var o=An(i);return o==De||o==_e||o==Rt||o==Be}function Rd(i){return typeof i=="number"&&i==ae(i)}function ya(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=j}function $e(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function Je(i){return i!=null&&typeof i=="object"}var Cd=Vh?kn(Vh):Gg;function Fx(i,o){return i===o||Xc(i,o,cl(o))}function Bx(i,o,l){return l=typeof l=="function"?l:e,Xc(i,o,cl(o),l)}function zx(i){return Ld(i)&&i!=+i}function Gx(i){if(y0(i))throw new re(a);return Mf(i)}function Hx(i){return i===null}function Vx(i){return i==null}function Ld(i){return typeof i=="number"||Je(i)&&An(i)==un}function so(i){if(!Je(i)||An(i)!=ne)return!1;var o=$o(i);if(o===null)return!0;var l=Ie.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&qo.call(l)==B_}var xl=kh?kn(kh):Hg;function kx(i){return Rd(i)&&i>=-9007199254740991&&i<=j}var Pd=Wh?kn(Wh):Vg;function Ta(i){return typeof i=="string"||!oe(i)&&Je(i)&&An(i)==E}function Xn(i){return typeof i=="symbol"||Je(i)&&An(i)==Y}var os=Xh?kn(Xh):kg;function Wx(i){return i===e}function Xx(i){return Je(i)&&Mn(i)==dt}function qx(i){return Je(i)&&An(i)==at}var Yx=pa(Yc),Zx=pa(function(i,o){return i<=o});function Id(i){if(!i)return[];if(Nn(i))return Ta(i)?ui(i):Un(i);if(qs&&i[qs])return A_(i[qs]());var o=Mn(i),l=o==B?Uc:o==D?ko:as;return l(i)}function Bi(i){if(!i)return i===0?i:0;if(i=ri(i),i===mt||i===-1/0){var o=i<0?-1:1;return o*bt}return i===i?i:0}function ae(i){var o=Bi(i),l=o%1;return o===o?l?o-l:o:0}function Dd(i){return i?wr(ae(i),0,Bt):0}function ri(i){if(typeof i=="number")return i;if(Xn(i))return Pt;if($e(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=$e(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=Jh(i);var l=xc.test(i);return l||Mc.test(i)?l_(i.slice(2),l?2:8):vc.test(i)?Pt:+i}function Ud(i){return Mi(i,On(i))}function Kx(i){return i?wr(ae(i),-9007199254740991,j):i===0?i:0}function Ce(i){return i==null?"":Wn(i)}var $x=is(function(i,o){if(io(o)||Nn(o)){Mi(o,dn(o),i);return}for(var l in o)Ie.call(o,l)&&Js(i,l,o[l])}),Nd=is(function(i,o){Mi(o,On(o),i)}),wa=is(function(i,o,l,p){Mi(o,On(o),i,p)}),Jx=is(function(i,o,l,p){Mi(o,dn(o),i,p)}),Qx=Ni(Gc);function jx(i,o){var l=ns(i);return o==null?l:df(l,o)}var tS=fe(function(i,o){i=Ge(i);var l=-1,p=o.length,S=p>2?o[2]:e;for(S&&bn(o[0],o[1],S)&&(p=1);++l<p;)for(var R=o[l],N=On(R),G=-1,X=N.length;++G<X;){var ot=N[G],ct=i[ot];(ct===e||fi(ct,jr[ot])&&!Ie.call(i,ot))&&(i[ot]=R[ot])}return i}),eS=fe(function(i){return i.push(e,Qf),Vn(Od,e,i)});function nS(i,o){return Yh(i,Kt(o,3),Si)}function iS(i,o){return Yh(i,Kt(o,3),Vc)}function rS(i,o){return i==null?i:Hc(i,Kt(o,3),On)}function sS(i,o){return i==null?i:vf(i,Kt(o,3),On)}function oS(i,o){return i&&Si(i,Kt(o,3))}function aS(i,o){return i&&Vc(i,Kt(o,3))}function cS(i){return i==null?[]:oa(i,dn(i))}function lS(i){return i==null?[]:oa(i,On(i))}function Sl(i,o,l){var p=i==null?e:Ar(i,o);return p===e?l:p}function uS(i,o){return i!=null&&ed(i,o,Dg)}function Ml(i,o){return i!=null&&ed(i,o,Ug)}var hS=Yf(function(i,o,l){o!=null&&typeof o.toString!="function"&&(o=Yo.call(o)),i[o]=l},yl(Fn)),fS=Yf(function(i,o,l){o!=null&&typeof o.toString!="function"&&(o=Yo.call(o)),Ie.call(i,o)?i[o].push(l):i[o]=[l]},Kt),dS=fe(js);function dn(i){return Nn(i)?hf(i):qc(i)}function On(i){return Nn(i)?hf(i,!0):Wg(i)}function pS(i,o){var l={};return o=Kt(o,3),Si(i,function(p,S,R){Di(l,o(p,S,R),p)}),l}function mS(i,o){var l={};return o=Kt(o,3),Si(i,function(p,S,R){Di(l,S,o(p,S,R))}),l}var _S=is(function(i,o,l){aa(i,o,l)}),Od=is(function(i,o,l,p){aa(i,o,l,p)}),gS=Ni(function(i,o){var l={};if(i==null)return l;var p=!1;o=Ze(o,function(R){return R=sr(R,i),p||(p=R.length>1),R}),Mi(i,ol(i),l),p&&(l=ei(l,m|g|v,h0));for(var S=o.length;S--;)Qc(l,o[S]);return l});function vS(i,o){return Fd(i,Ea(Kt(o)))}var xS=Ni(function(i,o){return i==null?{}:qg(i,o)});function Fd(i,o){if(i==null)return{};var l=Ze(ol(i),function(p){return[p]});return o=Kt(o),Rf(i,l,function(p,S){return o(p,S[0])})}function SS(i,o,l){o=sr(o,i);var p=-1,S=o.length;for(S||(S=1,i=e);++p<S;){var R=i==null?e:i[Ei(o[p])];R===e&&(p=S,R=l),i=Fi(R)?R.call(i):R}return i}function MS(i,o,l){return i==null?i:eo(i,o,l)}function ES(i,o,l,p){return p=typeof p=="function"?p:e,i==null?i:eo(i,o,l,p)}var Bd=$f(dn),zd=$f(On);function yS(i,o,l){var p=oe(i),S=p||ar(i)||os(i);if(o=Kt(o,4),l==null){var R=i&&i.constructor;S?l=p?new R:[]:$e(i)?l=Fi(R)?ns($o(i)):{}:l={}}return(S?Qn:Si)(i,function(N,G,X){return o(l,N,G,X)}),l}function TS(i,o){return i==null?!0:Qc(i,o)}function wS(i,o,l){return i==null?i:Df(i,o,el(l))}function AS(i,o,l,p){return p=typeof p=="function"?p:e,i==null?i:Df(i,o,el(l),p)}function as(i){return i==null?[]:Dc(i,dn(i))}function bS(i){return i==null?[]:Dc(i,On(i))}function RS(i,o,l){return l===e&&(l=o,o=e),l!==e&&(l=ri(l),l=l===l?l:0),o!==e&&(o=ri(o),o=o===o?o:0),wr(ri(i),o,l)}function CS(i,o,l){return o=Bi(o),l===e?(l=o,o=0):l=Bi(l),i=ri(i),Ng(i,o,l)}function LS(i,o,l){if(l&&typeof l!="boolean"&&bn(i,o,l)&&(o=l=e),l===e&&(typeof o=="boolean"?(l=o,o=e):typeof i=="boolean"&&(l=i,i=e)),i===e&&o===e?(i=0,o=1):(i=Bi(i),o===e?(o=i,i=0):o=Bi(o)),i>o){var p=i;i=o,o=p}if(l||i%1||o%1){var S=lf();return Sn(i+S*(o-i+c_("1e-"+((S+"").length-1))),o)}return Kc(i,o)}var PS=rs(function(i,o,l){return o=o.toLowerCase(),i+(l?Gd(o):o)});function Gd(i){return El(Ce(i).toLowerCase())}function Hd(i){return i=Ce(i),i&&i.replace(b,M_).replace(Qm,"")}function IS(i,o,l){i=Ce(i),o=Wn(o);var p=i.length;l=l===e?p:wr(ae(l),0,p);var S=l;return l-=o.length,l>=0&&i.slice(l,S)==o}function DS(i){return i=Ce(i),i&&Ct.test(i)?i.replace(ut,E_):i}function US(i){return i=Ce(i),i&&Uo.test(i)?i.replace(qr,"\\$&"):i}var NS=rs(function(i,o,l){return i+(l?"-":"")+o.toLowerCase()}),OS=rs(function(i,o,l){return i+(l?" ":"")+o.toLowerCase()}),FS=Wf("toLowerCase");function BS(i,o,l){i=Ce(i),o=ae(o);var p=o?Jr(i):0;if(!o||p>=o)return i;var S=(o-p)/2;return da(ta(S),l)+i+da(jo(S),l)}function zS(i,o,l){i=Ce(i),o=ae(o);var p=o?Jr(i):0;return o&&p<o?i+da(o-p,l):i}function GS(i,o,l){i=Ce(i),o=ae(o);var p=o?Jr(i):0;return o&&p<o?da(o-p,l)+i:i}function HS(i,o,l){return l||o==null?o=0:o&&(o=+o),Z_(Ce(i).replace(li,""),o||0)}function VS(i,o,l){return(l?bn(i,o,l):o===e)?o=1:o=ae(o),$c(Ce(i),o)}function kS(){var i=arguments,o=Ce(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var WS=rs(function(i,o,l){return i+(l?"_":"")+o.toLowerCase()});function XS(i,o,l){return l&&typeof l!="number"&&bn(i,o,l)&&(o=l=e),l=l===e?Bt:l>>>0,l?(i=Ce(i),i&&(typeof o=="string"||o!=null&&!xl(o))&&(o=Wn(o),!o&&$r(i))?or(ui(i),0,l):i.split(o,l)):[]}var qS=rs(function(i,o,l){return i+(l?" ":"")+El(o)});function YS(i,o,l){return i=Ce(i),l=l==null?0:wr(ae(l),0,i.length),o=Wn(o),i.slice(l,l+o.length)==o}function ZS(i,o,l){var p=y.templateSettings;l&&bn(i,o,l)&&(o=e),i=Ce(i),o=wa({},o,p,Jf);var S=wa({},o.imports,p.imports,Jf),R=dn(S),N=Dc(S,R),G,X,ot=0,ct=o.interpolate||W,pt="__p += '",yt=Nc((o.escape||W).source+"|"+ct.source+"|"+(ct===nn?zo:W).source+"|"+(o.evaluate||W).source+"|$","g"),kt="//# sourceURL="+(Ie.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++i_+"]")+`
`;i.replace(yt,function(Jt,ve,ye,qn,Rn,Yn){return ye||(ye=qn),pt+=i.slice(ot,Yn).replace(Z,y_),ve&&(G=!0,pt+=`' +
__e(`+ve+`) +
'`),Rn&&(X=!0,pt+=`';
`+Rn+`;
__p += '`),ye&&(pt+=`' +
((__t = (`+ye+`)) == null ? '' : __t) +
'`),ot=Yn+Jt.length,Jt}),pt+=`';
`;var $t=Ie.call(o,"variable")&&o.variable;if(!$t)pt=`with (obj) {
`+pt+`
}
`;else if(Zr.test($t))throw new re(u);pt=(X?pt.replace(Ue,""):pt).replace(V,"$1").replace(wt,"$1;"),pt="function("+($t||"obj")+`) {
`+($t?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+pt+`return __p
}`;var le=kd(function(){return Re(R,kt+"return "+pt).apply(e,N)});if(le.source=pt,vl(le))throw le;return le}function KS(i){return Ce(i).toLowerCase()}function $S(i){return Ce(i).toUpperCase()}function JS(i,o,l){if(i=Ce(i),i&&(l||o===e))return Jh(i);if(!i||!(o=Wn(o)))return i;var p=ui(i),S=ui(o),R=Qh(p,S),N=jh(p,S)+1;return or(p,R,N).join("")}function QS(i,o,l){if(i=Ce(i),i&&(l||o===e))return i.slice(0,ef(i)+1);if(!i||!(o=Wn(o)))return i;var p=ui(i),S=jh(p,ui(o))+1;return or(p,0,S).join("")}function jS(i,o,l){if(i=Ce(i),i&&(l||o===e))return i.replace(li,"");if(!i||!(o=Wn(o)))return i;var p=ui(i),S=Qh(p,ui(o));return or(p,S).join("")}function tM(i,o){var l=w,p=H;if($e(o)){var S="separator"in o?o.separator:S;l="length"in o?ae(o.length):l,p="omission"in o?Wn(o.omission):p}i=Ce(i);var R=i.length;if($r(i)){var N=ui(i);R=N.length}if(l>=R)return i;var G=l-Jr(p);if(G<1)return p;var X=N?or(N,0,G).join(""):i.slice(0,G);if(S===e)return X+p;if(N&&(G+=X.length-G),xl(S)){if(i.slice(G).search(S)){var ot,ct=X;for(S.global||(S=Nc(S.source,Ce(Go.exec(S))+"g")),S.lastIndex=0;ot=S.exec(ct);)var pt=ot.index;X=X.slice(0,pt===e?G:pt)}}else if(i.indexOf(Wn(S),G)!=G){var yt=X.lastIndexOf(S);yt>-1&&(X=X.slice(0,yt))}return X+p}function eM(i){return i=Ce(i),i&&Lt.test(i)?i.replace(et,L_):i}var nM=rs(function(i,o,l){return i+(l?" ":"")+o.toUpperCase()}),El=Wf("toUpperCase");function Vd(i,o,l){return i=Ce(i),o=l?e:o,o===e?w_(i)?D_(i):__(i):i.match(o)||[]}var kd=fe(function(i,o){try{return Vn(i,e,o)}catch(l){return vl(l)?l:new re(l)}}),iM=Ni(function(i,o){return Qn(o,function(l){l=Ei(l),Di(i,l,_l(i[l],i))}),i});function rM(i){var o=i==null?0:i.length,l=Kt();return i=o?Ze(i,function(p){if(typeof p[1]!="function")throw new jn(c);return[l(p[0]),p[1]]}):[],fe(function(p){for(var S=-1;++S<o;){var R=i[S];if(Vn(R[0],this,p))return Vn(R[1],this,p)}})}function sM(i){return Lg(ei(i,m))}function yl(i){return function(){return i}}function oM(i,o){return i==null||i!==i?o:i}var aM=qf(),cM=qf(!0);function Fn(i){return i}function Tl(i){return Ef(typeof i=="function"?i:ei(i,m))}function lM(i){return Tf(ei(i,m))}function uM(i,o){return wf(i,ei(o,m))}var hM=fe(function(i,o){return function(l){return js(l,i,o)}}),fM=fe(function(i,o){return function(l){return js(i,l,o)}});function wl(i,o,l){var p=dn(o),S=oa(o,p);l==null&&!($e(o)&&(S.length||!p.length))&&(l=o,o=i,i=this,S=oa(o,dn(o)));var R=!($e(l)&&"chain"in l)||!!l.chain,N=Fi(i);return Qn(S,function(G){var X=o[G];i[G]=X,N&&(i.prototype[G]=function(){var ot=this.__chain__;if(R||ot){var ct=i(this.__wrapped__),pt=ct.__actions__=Un(this.__actions__);return pt.push({func:X,args:arguments,thisArg:i}),ct.__chain__=ot,ct}return X.apply(i,tr([this.value()],arguments))})}),i}function dM(){return _n._===this&&(_n._=z_),this}function Al(){}function pM(i){return i=ae(i),fe(function(o){return Af(o,i)})}var mM=il(Ze),_M=il(qh),gM=il(Rc);function Wd(i){return ul(i)?Cc(Ei(i)):Yg(i)}function vM(i){return function(o){return i==null?e:Ar(i,o)}}var xM=Zf(),SM=Zf(!0);function bl(){return[]}function Rl(){return!1}function MM(){return{}}function EM(){return""}function yM(){return!0}function TM(i,o){if(i=ae(i),i<1||i>j)return[];var l=Bt,p=Sn(i,Bt);o=Kt(o),i-=Bt;for(var S=Ic(p,o);++l<i;)o(l);return S}function wM(i){return oe(i)?Ze(i,Ei):Xn(i)?[i]:Un(ud(Ce(i)))}function AM(i){var o=++F_;return Ce(i)+o}var bM=fa(function(i,o){return i+o},0),RM=rl("ceil"),CM=fa(function(i,o){return i/o},1),LM=rl("floor");function PM(i){return i&&i.length?sa(i,Fn,kc):e}function IM(i,o){return i&&i.length?sa(i,Kt(o,2),kc):e}function DM(i){return Kh(i,Fn)}function UM(i,o){return Kh(i,Kt(o,2))}function NM(i){return i&&i.length?sa(i,Fn,Yc):e}function OM(i,o){return i&&i.length?sa(i,Kt(o,2),Yc):e}var FM=fa(function(i,o){return i*o},1),BM=rl("round"),zM=fa(function(i,o){return i-o},0);function GM(i){return i&&i.length?Pc(i,Fn):0}function HM(i,o){return i&&i.length?Pc(i,Kt(o,2)):0}return y.after=lx,y.ary=Md,y.assign=$x,y.assignIn=Nd,y.assignInWith=wa,y.assignWith=Jx,y.at=Qx,y.before=Ed,y.bind=_l,y.bindAll=iM,y.bindKey=yd,y.castArray=Mx,y.chain=vd,y.chunk=L0,y.compact=P0,y.concat=I0,y.cond=rM,y.conforms=sM,y.constant=yl,y.countBy=Gv,y.create=jx,y.curry=Td,y.curryRight=wd,y.debounce=Ad,y.defaults=tS,y.defaultsDeep=eS,y.defer=ux,y.delay=hx,y.difference=D0,y.differenceBy=U0,y.differenceWith=N0,y.drop=O0,y.dropRight=F0,y.dropRightWhile=B0,y.dropWhile=z0,y.fill=G0,y.filter=Vv,y.flatMap=Xv,y.flatMapDeep=qv,y.flatMapDepth=Yv,y.flatten=pd,y.flattenDeep=H0,y.flattenDepth=V0,y.flip=fx,y.flow=aM,y.flowRight=cM,y.fromPairs=k0,y.functions=cS,y.functionsIn=lS,y.groupBy=Zv,y.initial=X0,y.intersection=q0,y.intersectionBy=Y0,y.intersectionWith=Z0,y.invert=hS,y.invertBy=fS,y.invokeMap=$v,y.iteratee=Tl,y.keyBy=Jv,y.keys=dn,y.keysIn=On,y.map=xa,y.mapKeys=pS,y.mapValues=mS,y.matches=lM,y.matchesProperty=uM,y.memoize=Ma,y.merge=_S,y.mergeWith=Od,y.method=hM,y.methodOf=fM,y.mixin=wl,y.negate=Ea,y.nthArg=pM,y.omit=gS,y.omitBy=vS,y.once=dx,y.orderBy=Qv,y.over=mM,y.overArgs=px,y.overEvery=_M,y.overSome=gM,y.partial=gl,y.partialRight=bd,y.partition=jv,y.pick=xS,y.pickBy=Fd,y.property=Wd,y.propertyOf=vM,y.pull=Q0,y.pullAll=_d,y.pullAllBy=j0,y.pullAllWith=tv,y.pullAt=ev,y.range=xM,y.rangeRight=SM,y.rearg=mx,y.reject=nx,y.remove=nv,y.rest=_x,y.reverse=pl,y.sampleSize=rx,y.set=MS,y.setWith=ES,y.shuffle=sx,y.slice=iv,y.sortBy=cx,y.sortedUniq=uv,y.sortedUniqBy=hv,y.split=XS,y.spread=gx,y.tail=fv,y.take=dv,y.takeRight=pv,y.takeRightWhile=mv,y.takeWhile=_v,y.tap=Pv,y.throttle=vx,y.thru=va,y.toArray=Id,y.toPairs=Bd,y.toPairsIn=zd,y.toPath=wM,y.toPlainObject=Ud,y.transform=yS,y.unary=xx,y.union=gv,y.unionBy=vv,y.unionWith=xv,y.uniq=Sv,y.uniqBy=Mv,y.uniqWith=Ev,y.unset=TS,y.unzip=ml,y.unzipWith=gd,y.update=wS,y.updateWith=AS,y.values=as,y.valuesIn=bS,y.without=yv,y.words=Vd,y.wrap=Sx,y.xor=Tv,y.xorBy=wv,y.xorWith=Av,y.zip=bv,y.zipObject=Rv,y.zipObjectDeep=Cv,y.zipWith=Lv,y.entries=Bd,y.entriesIn=zd,y.extend=Nd,y.extendWith=wa,wl(y,y),y.add=bM,y.attempt=kd,y.camelCase=PS,y.capitalize=Gd,y.ceil=RM,y.clamp=RS,y.clone=Ex,y.cloneDeep=Tx,y.cloneDeepWith=wx,y.cloneWith=yx,y.conformsTo=Ax,y.deburr=Hd,y.defaultTo=oM,y.divide=CM,y.endsWith=IS,y.eq=fi,y.escape=DS,y.escapeRegExp=US,y.every=Hv,y.find=kv,y.findIndex=fd,y.findKey=nS,y.findLast=Wv,y.findLastIndex=dd,y.findLastKey=iS,y.floor=LM,y.forEach=xd,y.forEachRight=Sd,y.forIn=rS,y.forInRight=sS,y.forOwn=oS,y.forOwnRight=aS,y.get=Sl,y.gt=bx,y.gte=Rx,y.has=uS,y.hasIn=Ml,y.head=md,y.identity=Fn,y.includes=Kv,y.indexOf=W0,y.inRange=CS,y.invoke=dS,y.isArguments=Cr,y.isArray=oe,y.isArrayBuffer=Cx,y.isArrayLike=Nn,y.isArrayLikeObject=Qe,y.isBoolean=Lx,y.isBuffer=ar,y.isDate=Px,y.isElement=Ix,y.isEmpty=Dx,y.isEqual=Ux,y.isEqualWith=Nx,y.isError=vl,y.isFinite=Ox,y.isFunction=Fi,y.isInteger=Rd,y.isLength=ya,y.isMap=Cd,y.isMatch=Fx,y.isMatchWith=Bx,y.isNaN=zx,y.isNative=Gx,y.isNil=Vx,y.isNull=Hx,y.isNumber=Ld,y.isObject=$e,y.isObjectLike=Je,y.isPlainObject=so,y.isRegExp=xl,y.isSafeInteger=kx,y.isSet=Pd,y.isString=Ta,y.isSymbol=Xn,y.isTypedArray=os,y.isUndefined=Wx,y.isWeakMap=Xx,y.isWeakSet=qx,y.join=K0,y.kebabCase=NS,y.last=ii,y.lastIndexOf=$0,y.lowerCase=OS,y.lowerFirst=FS,y.lt=Yx,y.lte=Zx,y.max=PM,y.maxBy=IM,y.mean=DM,y.meanBy=UM,y.min=NM,y.minBy=OM,y.stubArray=bl,y.stubFalse=Rl,y.stubObject=MM,y.stubString=EM,y.stubTrue=yM,y.multiply=FM,y.nth=J0,y.noConflict=dM,y.noop=Al,y.now=Sa,y.pad=BS,y.padEnd=zS,y.padStart=GS,y.parseInt=HS,y.random=LS,y.reduce=tx,y.reduceRight=ex,y.repeat=VS,y.replace=kS,y.result=SS,y.round=BM,y.runInContext=k,y.sample=ix,y.size=ox,y.snakeCase=WS,y.some=ax,y.sortedIndex=rv,y.sortedIndexBy=sv,y.sortedIndexOf=ov,y.sortedLastIndex=av,y.sortedLastIndexBy=cv,y.sortedLastIndexOf=lv,y.startCase=qS,y.startsWith=YS,y.subtract=zM,y.sum=GM,y.sumBy=HM,y.template=ZS,y.times=TM,y.toFinite=Bi,y.toInteger=ae,y.toLength=Dd,y.toLower=KS,y.toNumber=ri,y.toSafeInteger=Kx,y.toString=Ce,y.toUpper=$S,y.trim=JS,y.trimEnd=QS,y.trimStart=jS,y.truncate=tM,y.unescape=eM,y.uniqueId=AM,y.upperCase=nM,y.upperFirst=El,y.each=xd,y.eachRight=Sd,y.first=md,wl(y,function(){var i={};return Si(y,function(o,l){Ie.call(y.prototype,l)||(i[l]=o)}),i}(),{chain:!1}),y.VERSION=n,Qn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){y[i].placeholder=y}),Qn(["drop","take"],function(i,o){Se.prototype[i]=function(l){l=l===e?1:on(ae(l),0);var p=this.__filtered__&&!o?new Se(this):this.clone();return p.__filtered__?p.__takeCount__=Sn(l,p.__takeCount__):p.__views__.push({size:Sn(l,Bt),type:i+(p.__dir__<0?"Right":"")}),p},Se.prototype[i+"Right"]=function(l){return this.reverse()[i](l).reverse()}}),Qn(["filter","map","takeWhile"],function(i,o){var l=o+1,p=l==st||l==rt;Se.prototype[i]=function(S){var R=this.clone();return R.__iteratees__.push({iteratee:Kt(S,3),type:l}),R.__filtered__=R.__filtered__||p,R}}),Qn(["head","last"],function(i,o){var l="take"+(o?"Right":"");Se.prototype[i]=function(){return this[l](1).value()[0]}}),Qn(["initial","tail"],function(i,o){var l="drop"+(o?"":"Right");Se.prototype[i]=function(){return this.__filtered__?new Se(this):this[l](1)}}),Se.prototype.compact=function(){return this.filter(Fn)},Se.prototype.find=function(i){return this.filter(i).head()},Se.prototype.findLast=function(i){return this.reverse().find(i)},Se.prototype.invokeMap=fe(function(i,o){return typeof i=="function"?new Se(this):this.map(function(l){return js(l,i,o)})}),Se.prototype.reject=function(i){return this.filter(Ea(Kt(i)))},Se.prototype.slice=function(i,o){i=ae(i);var l=this;return l.__filtered__&&(i>0||o<0)?new Se(l):(i<0?l=l.takeRight(-i):i&&(l=l.drop(i)),o!==e&&(o=ae(o),l=o<0?l.dropRight(-o):l.take(o-i)),l)},Se.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},Se.prototype.toArray=function(){return this.take(Bt)},Si(Se.prototype,function(i,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),S=y[p?"take"+(o=="last"?"Right":""):o],R=p||/^find/.test(o);S&&(y.prototype[o]=function(){var N=this.__wrapped__,G=p?[1]:arguments,X=N instanceof Se,ot=G[0],ct=X||oe(N),pt=function(ve){var ye=S.apply(y,tr([ve],G));return p&&yt?ye[0]:ye};ct&&l&&typeof ot=="function"&&ot.length!=1&&(X=ct=!1);var yt=this.__chain__,kt=!!this.__actions__.length,$t=R&&!yt,le=X&&!kt;if(!R&&ct){N=le?N:new Se(this);var Jt=i.apply(N,G);return Jt.__actions__.push({func:va,args:[pt],thisArg:e}),new ti(Jt,yt)}return $t&&le?i.apply(this,G):(Jt=this.thru(pt),$t?p?Jt.value()[0]:Jt.value():Jt)})}),Qn(["pop","push","shift","sort","splice","unshift"],function(i){var o=Wo[i],l=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",p=/^(?:pop|shift)$/.test(i);y.prototype[i]=function(){var S=arguments;if(p&&!this.__chain__){var R=this.value();return o.apply(oe(R)?R:[],S)}return this[l](function(N){return o.apply(oe(N)?N:[],S)})}}),Si(Se.prototype,function(i,o){var l=y[o];if(l){var p=l.name+"";Ie.call(es,p)||(es[p]=[]),es[p].push({name:o,func:l})}}),es[ha(e,_).name]=[{name:"wrapper",func:e}],Se.prototype.clone=eg,Se.prototype.reverse=ng,Se.prototype.value=ig,y.prototype.at=Iv,y.prototype.chain=Dv,y.prototype.commit=Uv,y.prototype.next=Nv,y.prototype.plant=Fv,y.prototype.reverse=Bv,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=zv,y.prototype.first=y.prototype.head,qs&&(y.prototype[qs]=Ov),y},Qr=U_();Mr?((Mr.exports=Qr)._=Qr,Tc._=Qr):_n._=Qr}).call(Db)}(Mo,Mo.exports)),Mo.exports}var _o={},Qp;function Nb(){if(Qp)return _o;Qp=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.backtrace=void 0;function r(t,e,n){const s=[];let a=n?t:t.getParent();for(;a.getParent();)s.push([a.position.x,a.position.y]),a=a.getParent();return e&&s.push([a.position.x,a.position.y]),s.reverse()}return _o.backtrace=r,_o}var go={},jp;function Ob(){if(jp)return go;jp=1,Object.defineProperty(go,"__esModule",{value:!0}),go.calculateHeuristic=void 0;function r(t,e,n,s){const a=Math.abs(n.x-e.x),c=Math.abs(n.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(a+c)*s;case"Euclidean":return Math.sqrt(a*a+c*c)*s;case"Chebyshev":return Math.max(a,c)*s;case"Octile":return(a+c-.58*Math.min(a,c))*s}}return go.calculateHeuristic=r,go}var vo={},xo={},tm;function Fb(){if(tm)return xo;tm=1,Object.defineProperty(xo,"__esModule",{value:!0}),xo.Node=void 0;class r{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return xo.Node=r,xo}var em;function Vm(){if(em)return vo;em=1,Object.defineProperty(vo,"__esModule",{value:!0}),vo.Grid=void 0;const r=Fb();class t{constructor(n){n.width&&n.height?(this.width=n.width,this.height=n.height,this.numberOfFields=this.width*this.height):n.matrix&&(this.width=n.matrix[0].length,this.height=n.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(n.matrix||void 0,this.width,this.height,n.densityOfObstacles||0)}buildGridWithNodes(n,s,a,c){const u=[];let h=0;for(let f=0;f<a;f++){u[f]=[];for(let d=0;d<s;d++)u[f][d]=new r.Node({id:h,position:{x:d,y:f}}),h++}if(n===void 0){for(let f=0;f<a;f++)for(let d=0;d<s;d++)Math.floor(Math.random()*10)+1>10-c?u[f][d].setIsWalkable(!1):u[f][d].setIsWalkable(!0);return u}for(let f=0;f<a;f++)for(let d=0;d<s;d++)u[f][d].setIsWalkable(!n[f][d]);return u}getNodeAt(n){return this.gridNodes[n.y][n.x]}isWalkableAt(n){return this.gridNodes[n.y][n.x].getIsWalkable()}isOnTheGrid(n){return n.x>=0&&n.x<this.width&&n.y>=0&&n.y<this.height}getSurroundingNodes(n,s){const a=[],c=n.x-1,u=n.x+1,h=n.y-1,f=n.y+1;for(let d=h;d<=f;d++)for(let m=c;m<=u;m++)(m!==n.x||d!==n.y)&&this.isOnTheGrid({x:m,y:d})&&this.isWalkableAt({x:m,y:d})&&(s||m==n.x||d==n.y)&&a.push(this.getNodeAt({x:m,y:d}));return a}setGrid(n){this.gridNodes=n}resetGrid(){for(let n=0;n<this.gridNodes.length;n++)for(let s=0;s<this.gridNodes[n].length;s++)this.gridNodes[n][s].setIsOnClosedList(!1),this.gridNodes[n][s].setIsOnOpenList(!1),this.gridNodes[n][s].setParent(void 0),this.gridNodes[n][s].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const n=[];let s=0;for(let a=0;a<this.height;a++){n[a]=[];for(let c=0;c<this.width;c++)n[a][c]=new r.Node({id:s,position:{x:c,y:a},walkable:this.gridNodes[a][c].getIsWalkable()}),s++}return n}}return vo.Grid=t,vo}var nm;function Bb(){if(nm)return mo;nm=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.AStarFinder=void 0;const r=Ub(),t=Nb(),e=Ob(),n=Vm();class s{constructor(c){this.grid=new n.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const h=this.grid.getNodeAt(c),f=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];h.setIsOnOpenList(!0),this.openList.push(h);for(let d=0;d<this.grid.height;d++)for(let m=0;m<this.grid.width;m++){let g=this.grid.getNodeAt({x:m,y:d});this.grid.isWalkableAt({x:m,y:d})?g.setHValue((0,e.calculateHeuristic)(this.heuristic,g.position,f.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const d=(0,r.minBy)(this.openList,g=>g.getFValue());if(d.setIsOnOpenList(!1),(0,r.remove)(this.openList,d),d.setIsOnClosedList(!0),this.closedList.push(d),d===f)return(0,t.backtrace)(f,this.includeStartNode,this.includeEndNode);const m=this.grid.getSurroundingNodes(d.position,this.diagonalAllowed);for(let g in m){const v=m[g];if(v.getIsOnClosedList())continue;const M=d.getGValue()+(v.position.x!==d.position.x||v.position.y==d.position.y?this.weight:this.weight*1.41421);(!v.getIsOnOpenList()||M<v.getGValue())&&(v.setGValue(M),v.setParent(d),v.getIsOnOpenList()?v.setParent(d):(v.setIsOnOpenList(!0),this.openList.push(v)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return mo.AStarFinder=s,mo}var im;function zb(){return im||(im=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var t=Bb();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=Vm();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(hu)),hu}var Gb=zb();class km{constructor(t){xt(this,"currentHealth");xt(this,"fullHealth");xt(this,"offset");xt(this,"red");xt(this,"green");xt(this,"widthFactor");xt(this,"heightFactor");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new gp(new ju({map:new Mp().load("./textures/red.png")})),this.green=new gp(new ju({map:new Mp().load("./textures/green.png")})),this.widthFactor=t.widthFactor??1,this.heightFactor=t.heightFactor??1,this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const n=this.widthFactor*1,s=this.heightFactor*.12;this.red.scale.set(n,s,s),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(n*Math.max(this.currentHealth/this.fullHealth,0),s,s),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}const Rs={createSimpleGrid:r=>{var a;const t=[];for(let c=0;c<r.length;c++){const u=[];for(let h=0;h<r[c].length;h++)u.push(r[c][h].isWalkable?0:1);t.push(u)}const e=t.length,n=((a=t[0])==null?void 0:a.length)??0;return Array.from({length:n},(c,u)=>Array.from({length:e},(h,f)=>t[f][u]))},getBoundedUncheckedNeighbors:(r,t,e)=>{const n=[];return r>0&&n.push(new it(r-1,t)),r<e.length-1&&n.push(new it(r+1,t)),t>0&&n.push(new it(r,t-1)),t<e[0].length-1&&n.push(new it(r,t+1)),n},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:r=>{const{grid:t,origin:e,myBattleSide:n,range:s,objective:a}=r,c=Math.max(1,s),u=new Set,h=[e.clone()];u.add(Rs.getPositionHash(e));let f=0;const d=[];for(;f<h.length;){if(f>t.length*t[0].length*2)return null;const v=h[f];f++;const M=Rs.getBoundedUncheckedNeighbors(v.x,v.y,t);for(const T of M){if(!t[T.x][T.y].isWalkable)continue;const x=t[T.x][T.y].actors.find(_=>_ instanceof ks&&_.battleSide!==n);x?d.push({pos:v,enemy:x}):!u.has(Rs.getPositionHash(T))&&T.distanceTo(e)<=c&&(h.push(T),u.add(Rs.getPositionHash(T)))}}if(d.length===0)return null;let m=d[0];return d.forEach(g=>{g.pos.distanceTo(a)<m.pos.distanceTo(a)&&(m=g)}),m}};class ks extends Ci{constructor(e){super(e);xt(this,"battleSide");xt(this,"pos");xt(this,"radius");xt(this,"hb");xt(this,"fullHealth");xt(this,"health");xt(this,"objective");xt(this,"healthBarOffset",new C(0,vt.TILE_SIZE*.65,0));xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new tt(_t.RED),new tt(_t.DARK)]});xt(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new tt(_t.RED),new tt(_t.ORANGE),new tt(_t.YELLOW),new tt(_t.WHITE)],amount:30,force:3,size:.8});xt(this,"SPEED",1);this.battleSide=e.battleSide,this.pos=e.pos,this.radius=e.radius,this.fullHealth=e.health,this.health=e.health,this.objective=e.objective,this.hb=new km({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:this.healthBarOffset,heightFactor:.5,widthFactor:.6})}afterSpawn(e,n){super.afterSpawn(e,n),this.hb.start(e)}beforeDeath(e,n,s){super.beforeDeath(e,n,s),this.hb.end(n),eh.createExplosion(n,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(e,n,s,a){super.update(e,n,s,a);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=1,this.kill(),eh.createExplosion(s,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(a)<c){this.pos=a;const u=Rs.createSimpleGrid(s.actorsGrid),f=new Gb.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(a,this.objective.position.clone());if(f.length>1){const d=new it(f[1][0],f[1][1]);s.actorsGrid[a.x][a.y].actors=s.actorsGrid[a.x][a.y].actors.filter(m=>m!==this),s.actorsGrid[d.x][d.y].actors.push(this)}}else{const u=.0012*this.SPEED,h=n*u,f=a.clone().sub(this.pos).normalize(),d=this.pos.distanceTo(a);this.pos.add(f.clone().multiplyScalar(Math.min(h,d)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new C(this.pos.x,this.mesh.position.y,this.pos.y)}}class Hb extends ks{constructor(e){const n=vt.TILE_SIZE/5,s=vt.TILE_SIZE*.75,a=new C(e.pos.x,s/2,e.pos.y),c=new tn({center:a,parts:[{mesh:Gt.createGem({size:n,color:new tt(_t.METAL)}),offset:new C(0,s/3,0)},{mesh:Gt.createTorus({radius:n,color:new tt(_t.BLUE)}),offset:new C(0,0,0)},{mesh:Gt.createSphere({radius:n/2,color:new tt(_t.DARK)}),offset:new C(0,-.75/3,0)}]});super({mesh:c,battleSide:Xr.ENEMY,pos:e.pos,radius:n,health:3,objective:e.objective});xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new tt(_t.BLUE),new tt(_t.DARK_GREEN)],amount:50,size:.5,force:2});xt(this,"SPEED",1.5)}update(e,n,s,a){super.update(e,n,s,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=n/200*h,u===2&&(c.mesh.rotation.x+=n/100*h,c.mesh.rotation.z+=n/50*h)})}}class Vb extends ks{constructor(e){const n=vt.TILE_SIZE/4,s=vt.TILE_SIZE,a=new C(e.pos.x,vt.TILE_SIZE/2,e.pos.y),c=new tn({center:a,parts:[{mesh:Gt.createGem({size:n,color:new tt(_t.METAL)}),offset:new C(0,s/3,0)},{mesh:Gt.createTorus({radius:n,color:new tt(_t.LIGHT_GREEN)}),offset:new C(0,0,0)},{mesh:Gt.createSphere({radius:n/2,color:new tt(_t.DARK)}),offset:new C(0,-1/3,0)}]});super({mesh:c,battleSide:Xr.ENEMY,pos:e.pos,radius:n,health:5,objective:e.objective});xt(this,"SPEED",.9);xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new tt(_t.LIGHT_GREEN),new tt(_t.GREEN),new tt(_t.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(e,n,s){super.beforeDeath(e,n,s),n.addActor(new Hb({pos:s,objective:this.objective}),s)}update(e,n,s,a){super.update(e,n,s,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=n/200*h,u===2&&(c.mesh.rotation.x+=n/100*h,c.mesh.rotation.z+=n/50*h)})}}class kb extends ks{constructor(e){const n=vt.TILE_SIZE/3,s=vt.TILE_SIZE,a=new C(e.pos.x,s/2,e.pos.y),c=new tn({center:a,parts:[{mesh:Gt.createTorusKnotBlob({radius:n,color:new tt(_t.YELLOW)}),offset:new C(0,0,0)},{mesh:Gt.createTorusKnotBlob({radius:n*2/3,color:new tt(_t.ORANGE)}),offset:new C(0,0,0)}]});super({mesh:c,battleSide:Xr.ENEMY,pos:e.pos,radius:n,health:10,objective:e.objective});xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new tt(_t.YELLOW),new tt(_t.DARK)],amount:60,size:.8,force:3});xt(this,"SPEED",.7)}update(e,n,s,a){super.update(e,n,s,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=n/100*h,u===1&&(c.mesh.rotation.x+=n/200*h,c.mesh.rotation.z+=n/100*h)})}}class Wb extends ks{constructor(t){const e=vt.TILE_SIZE/4,n=vt.TILE_SIZE,s=new C(t.pos.x,vt.TILE_SIZE/2,t.pos.y),a=new tn({center:s,parts:[{mesh:Gt.createGem({size:e,color:new tt(_t.WHITE)}),offset:new C(0,0,0)},{mesh:Gt.createSphere({radius:e,color:new tt(_t.DARK)}),offset:new C(0,-1/3,0)},{mesh:Gt.createSphere({radius:e,color:new tt(_t.RED)}),offset:new C(0,n/3,0)}]});super({mesh:a,battleSide:Xr.ENEMY,pos:t.pos,radius:e,health:5,objective:t.objective})}update(t,e,n,s){super.update(t,e,n,s),this.mesh.parts.forEach((a,c)=>{const u=c%2?-1:1;a.mesh.rotation.y+=e/500*u,a.mesh.rotation.z+=e/200*u,a.mesh.rotation.x+=e/100*u})}}const Ao=class Ao extends Ci{constructor(e){const n=vt.TILE_SIZE,s=new tn({center:new C(e.position.x,n/2,e.position.y),parts:[{mesh:Gt.createBox({color:new tt(_t.DARK),depth:vt.TILE_SIZE,height:n,width:vt.TILE_SIZE}),offset:new C(0,-1,0)},{mesh:new bh(new tt(_t.RED),5),offset:new C(0,-1/8,0)}]});super({mesh:s});xt(this,"spawnTimeout",0)}update(e,n,s,a){if(super.update(e,n,s,a),!(s instanceof Lo))throw new Error("Spawner can only be used in a BattleFieldContainer");const c=this.spawnTimeout+n,u=Math.floor(c/Ao.SPAWN_TIMEOUT);for(let h=0;h<u;h++){const f={pos:a,objective:s.headQuarters},d=Math.random();Math.random()<.33?s.addActor(new Wb(f),a):d<.66?s.addActor(new kb(f),a):s.addActor(new Vb(f),a)}this.spawnTimeout=c%Ao.SPAWN_TIMEOUT}};xt(Ao,"SPAWN_TIMEOUT",3e3);let rh=Ao;const Xb={buildLevel:r=>{const t=[];for(let e=0;e<r.width;e++)for(let n=0;n<r.height;n++){const s=r.level.tiles.find(a=>a.position.x===e&&a.position.y===n);if(s===void 0)t.push({type:"component",component:new bb({position:new C(e*r.tileSize,-r.tileSize/2,n*r.tileSize),size:r.tileSize,color:new tt(_t.DARK_GREEN)})});else{const a=new it(s.position.x*r.tileSize,s.position.y*r.tileSize),c=new C(e*r.tileSize,-r.tileSize/2,n*r.tileSize);switch(s.type){case Le.HQ:{t.push({type:"actor",actor:r.headQuarters,position:a,static:!1});break}case Le.SPW:{t.push({type:"actor",actor:new rh({position:a}),position:a,static:!1});break}case Le.RV:{t.push({type:"static",position:a});break}case Le.BR:{t.push({type:"component",component:new Ab({position:c,size:r.tileSize})});break}case Le.BF:{t.push({type:"actor",actor:new nh({position:c,size:r.tileSize}),position:a,static:!0});break}case Le.TR:{t.push({type:"actor",actor:new qb({position:c,size:r.tileSize}),position:a,static:!0});break}case Le.STN:{t.push({type:"actor",actor:new wb({position:c,size:r.tileSize}),position:a,static:!0});break}case Le.BSH:{t.push({type:"actor",actor:new Tb({position:c,size:r.tileSize}),position:a,static:!0});break}}}}return t}};class qb extends Ci{constructor(t){const e=vt.TILE_SIZE*2,n=Hm.createTreeComposite({position:t.position.clone().add(new C(0,e*.75,0)),height:e});n.parts=[...n.parts,{mesh:Gt.createBox({width:t.size,height:t.size/4,depth:t.size,color:new tt(_t.DARK_GREEN)}),offset:new C(0,-(t.size*9)/8,0)},{mesh:Gt.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new tt(_t.DIRT)}),offset:new C(0,-(t.size*12)/8,0)}],super({mesh:n})}}const hc=class hc extends Ji{constructor({position:e,color:n,sizeFactor:s}){const a=vt.TILE_SIZE/72*s,c=Gt.createSphere({radius:a,color:n===void 0?new tt(_t.WHITE):n,basicMaterial:!0});c.position.set(e.x,e.y,e.z);super({mesh:c});xt(this,"ttl",0);xt(this,"position");xt(this,"velocity");this.position=e,this.velocity=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(vt.TILE_SIZE*5e-5)}update(e,n,s){super.update(e,n,s),this.velocity.y-=5e-6*n,this.position=this.position.add(this.velocity.clone().multiplyScalar(n)),this.ttl+=n,this.ttl>hc.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};xt(hc,"TTL",1e3);let sh=hc;const bo=class bo extends Ji{constructor(e){const n=vt.TILE_SIZE/48*e.bulletConfig.sizeFactor;super({mesh:Gt.createSphere({radius:n,color:e.bulletConfig.color===void 0?new tt(_t.WHITE):e.bulletConfig.color,basicMaterial:!0})});xt(this,"battleSide");xt(this,"position");xt(this,"radius");xt(this,"direction");xt(this,"bulletConfig");xt(this,"particleTimeout",0);xt(this,"hasDamaged",new Set);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=n,this.bulletConfig=e.bulletConfig}update(e,n,s){var T,x;super.update(e,n,s);const c=.07*n*this.bulletConfig.speedFactor,u=this.direction.clone().normalize(),h=this.position.clone().add(new C(u.x*c,0,u.y*c)),f=vt.TILE_SIZE/4,d=this.position.distanceTo(h),m=Math.max(1,Math.floor(d/f));for(let _=0;_<m;_++){const P=this.position.clone().add(new C(u.x*f,0,u.y*f)),I=[new it(P.x-f,P.z-f),new it(P.x-f,P.z),new it(P.x-f,P.z+f),new it(P.x,P.z-f),new it(P.x,P.z),new it(P.x,P.z+f),new it(P.x+f,P.z-f),new it(P.x+f,P.z),new it(P.x+f,P.z+f)].map(A=>new it(Math.floor(A.x),Math.floor(A.y)));for(const A of I){const F=(T=s.actorsGrid[A.x])==null?void 0:T[A.y];if(F){for(const U of F.actors)if(U instanceof ks&&U.battleSide!==this.battleSide&&U.pos.distanceTo(new it(this.position.x,this.position.z))<this.radius+U.radius&&!this.hasDamaged.has(U)){U.health-=this.bulletConfig.damage,this.hasDamaged.add(U);break}}}}this.position.set(h.x,this.position.y,h.z);const g=s.actorsGrid.length,v=((x=s.actorsGrid[0])==null?void 0:x.length)??0;-g<=this.position.x&&this.position.x<2*g&&-v<=this.position.z&&this.position.z<2*v||this.kill(),this.particleTimeout+=n,this.particleTimeout>bo.PARTICLE_TIMEOUT&&(s.addComponent(new sh({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%bo.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};xt(bo,"PARTICLE_TIMEOUT",30);let oh=bo;class Wm extends Ci{constructor(e){super(e);xt(this,"position");xt(this,"bulletConfig");xt(this,"SHOOT_TIMEOUT",1e3);xt(this,"shootTimeout",0);xt(this,"range",5);xt(this,"objective");this.position=e.position,this.bulletConfig=e.bulletConfig,this.objective=e.objective}update(e,n,s,a){super.update(e,n,s,a);const c=this.shootTimeout+n;if(this.shootTimeout=c%this.SHOOT_TIMEOUT,c>=this.SHOOT_TIMEOUT){const h=Rs.findClosestEnemy({grid:s.actorsGrid,origin:this.position.clone(),myBattleSide:Xr.ALLY,range:this.range,objective:this.objective.position.clone()}),f=h?new it(h.enemy.mesh.position.x-this.position.x,h.enemy.mesh.position.z-this.position.y).normalize():null;if(f!==null){const d=new oh({battleSide:Xr.ALLY,direction:f,position:new C(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});s.addComponent(d)}}}}class Yb extends Wm{constructor(e){const n=new C(e.position.x,vt.TILE_SIZE,e.position.y),s=Gt.createGem({size:vt.TILE_SIZE/4,color:new tt(_t.WHITE)}),a=new tn({center:n,parts:[{mesh:Gt.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new tt(_t.DARK)}),offset:new C(0,-1*3/4,0)},{mesh:Gt.createBox({width:vt.TILE_SIZE*3/4,height:vt.TILE_SIZE,depth:vt.TILE_SIZE*3/4,color:new tt(_t.METAL)}),offset:new C(0,0,0)},{mesh:Gt.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new tt(_t.DARK)}),offset:new C(0,vt.TILE_SIZE*3/4,0)},{mesh:s,offset:new C(0,vt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:e.objective});xt(this,"gem");this.gem=s}update(e,n,s,a){super.update(e,n,s,a),this.gem.rotateX(n/1e3),this.gem.rotateZ(n/500)}}class Zb extends Wm{constructor(e){const n=new C(e.position.x,vt.TILE_SIZE,e.position.y),s=Gt.createGem({size:vt.TILE_SIZE/4,color:new tt(_t.YELLOW)}),a=new tn({center:n,parts:[{mesh:Gt.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new tt(_t.RED)}),offset:new C(0,-1*3/4,0)},{mesh:Gt.createBox({width:vt.TILE_SIZE*3/4,height:vt.TILE_SIZE,depth:vt.TILE_SIZE*3/4,color:new tt(_t.DARK)}),offset:new C(0,0,0)},{mesh:Gt.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new tt(_t.RED)}),offset:new C(0,vt.TILE_SIZE*3/4,0)},{mesh:s,offset:new C(0,vt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new tt(_t.YELLOW),trailSizeFactor:1.2},objective:e.objective});xt(this,"gem");xt(this,"SHOOT_TIMEOUT",2e3);this.gem=s}update(e,n,s,a){super.update(e,n,s,a),this.gem.rotateX(n/500),this.gem.rotateZ(n/250)}}class Kb extends Ci{constructor(e){const n=c=>Gt.createBox({width:c==="horizontal"?vt.TILE_SIZE:vt.TILE_SIZE/16,height:vt.TILE_SIZE/16,depth:c==="vertical"?vt.TILE_SIZE:vt.TILE_SIZE/16,color:new tt(_t.RED)}),s=new C(e.pos.x,vt.TILE_SIZE/16,e.pos.y),a=new tn({center:s,parts:[{mesh:n("vertical"),offset:new C(vt.TILE_SIZE*15/32,0,0)},{mesh:n("vertical"),offset:new C(-15/32,0,0)},{mesh:n("horizontal"),offset:new C(0,0,vt.TILE_SIZE*15/32)},{mesh:n("horizontal"),offset:new C(0,0,-15/32)}]});super({mesh:a});xt(this,"pos");xt(this,"canPlace",!1);xt(this,"greenMaterial",new Bn({color:new tt(_t.LIGHT_GREEN)}));xt(this,"redMaterial",new Bn({color:new tt(_t.RED)}));this.pos=e.pos}update(e,n,s,a){var h;if(super.update(e,n,s,a),!(s instanceof Lo))throw new Error("Cursor can only be used in a BattleFieldContainer");let c=0;e.keyboardHandler.wasPressed("ArrowUp")?c=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?u=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const f=a.clone().add(new it(u,c));if(!(0<=f.x&&f.x<s.actorsGrid.length)||!(0<=f.y&&f.y<(((h=s.actorsGrid[0])==null?void 0:h.length)??0)))return;this.pos=f,s.actorsGrid[a.x][a.y].actors=s.actorsGrid[a.x][a.y].actors.filter(d=>d!==this),s.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=s.actorsGrid[a.x][a.y].isWalkable&&s.actorsGrid[a.x][a.y].actors.find(f=>f!==this)===void 0,this.canPlace){let f;e.keyboardHandler.wasPressed("z")?f=new Yb({position:a.clone(),objective:s.headQuarters}):e.keyboardHandler.wasPressed("x")?f=new Zb({position:a.clone(),objective:s.headQuarters}):e.keyboardHandler.wasPressed("c")&&(f=new yb({position:new C(a.x,vt.TILE_SIZE/2,a.y),size:vt.TILE_SIZE})),f!==void 0&&(s.addActor(f,a.clone()),s.actorsGrid[a.x][a.y].isWalkable=!1)}}graphics(e,n,s){const a=1-Math.exp(-.005*n);this.mesh.position=new C(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*a,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*a),s.camera.position.set(this.mesh.position.x+vt.TILE_SIZE*3,this.mesh.position.y+vt.TILE_SIZE*8,this.mesh.position.z+vt.TILE_SIZE*12),s.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class $b extends Ci{constructor({health:e}){const n=vt.TILE_SIZE/2,s=vt.TILE_SIZE*2,a=vt.TILE_SIZE/2,c=new it(0,0),u=new C(c.x,vt.TILE_SIZE,c.y),h=Gt.createGem({size:s/4,color:new tt(_t.LIGHT_GREEN),basicMaterial:!0}),f=new tn({center:u,parts:[{mesh:Gt.createBox({color:new tt(_t.DARK),depth:a,height:s/4,width:n}),offset:new C(0,-2*3/8,0)},{mesh:h,offset:new C(0,s*2/8,0)},{mesh:new bh(new tt(_t.LIGHT_GREEN),20),offset:new C(0,s*2/8,0)},{mesh:Gt.createBox({color:new tt(_t.LIGHT_GREEN),depth:vt.TILE_SIZE,height:vt.TILE_SIZE,width:vt.TILE_SIZE}),offset:new C(0,-1*3/2,0)}]});super({mesh:f});xt(this,"gem");xt(this,"hb");xt(this,"fullHealth");xt(this,"health");xt(this,"position");this.gem=h,this.position=c,this.health=e,this.fullHealth=e,this.hb=new km({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new C(0,s/2+vt.TILE_SIZE/2,0)})}afterSpawn(e,n){super.afterSpawn(e,n),this.hb.start(e)}beforeDeath(e,n,s){super.beforeDeath(e,n,s),this.hb.end(n)}update(e,n,s,a){super.update(e,n,s,a),this.gem.rotateX(n/1e3),this.gem.rotateY(n/1900),this.gem.rotateZ(n/500),this.position=a,this.hb.update(this.health,this.mesh.position.clone())}graphics(e,n,s,a){super.graphics(e,n,s,a),this.mesh.position=new C(this.position.x,this.mesh.position.y,this.position.y)}}const fc=class fc extends vb{constructor(){super({width:vt.WIDTH,height:vt.HEIGHT});xt(this,"headQuarters");this.headQuarters=new $b({health:30})}onStart(){var u;const e=this.actorsGrid.length,n=((u=this.actorsGrid[0])==null?void 0:u.length)??0;this.scene.background=new tt(_t.VOID),this.scene.add(new Ly(new tt(_t.WHITE),new tt(_t.DARK_GREEN),1)),Xb.buildLevel({width:e,height:n,tileSize:fc.TILE_SIZE,level:Ib[0],headQuarters:this.headQuarters}).forEach(h=>{if(h.type==="component")this.addComponent(h.component);else if(h.type==="actor")this.addActor(h.actor,h.position),h.static&&(this.actorsGrid[h.position.x][h.position.y].isWalkable=!1);else if(h.type==="static")this.actorsGrid[h.position.x][h.position.y].isWalkable=!1;else throw new Error(`Unknown command type: ${h==null?void 0:h.type}`)});const a=new it(Math.floor(e/2),Math.floor(n*3/4));this.addActor(new Kb({pos:a}),a),this.createSceneryStars({width:e,height:n}).forEach(h=>this.addComponent(h)),this.createSceneryMountains({width:e,height:n}).forEach(h=>this.addComponent(h)),this.createSceneryTrees({width:e,height:n}).forEach(h=>this.addComponent(h));const c=new Cb({width:e*1.6,height:n*1.6,position:new C(e/2,-1/2,n/2)});this.addComponent(c)}update(e,n){super.update(e,n)}createSceneryStars(e){const{width:n,height:s}=e,a=200,c=[],u=new C(n/2,0,s/2);for(let h=0;h<a;h++){const m=vt.TILE_SIZE*8*(4+Math.floor(Math.random()*4)),g=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),v=new C(u.x+g.x*m,u.z+g.z*m,u.y+g.y*m);c.push(new Rb({position:v}))}return c}createSceneryMountains(e){const{width:n,height:s}=e,a=[],c=n*1.5,u=s*1.5;for(let h=0;h<c;h++){const f=new Qa({position:new it(h-c/8,-u*3/16)});a.push(f)}for(let h=0;h<c;h++){const f=new Qa({position:new it(h-c/8,u*7/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Qa({position:new it(-c*2/8,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Qa({position:new it(c*7/8,h-u/16)});a.push(f)}return a}createSceneryTrees(e){const{width:n,height:s}=e,a=[],c=n*1.5,u=s*1.5;for(let h=0;h<c;h++){const f=new ja({position:new it(h-c/8,-u*3/16+(Math.random()-.5)*vt.TILE_SIZE)});a.push(f)}for(let h=0;h<c;h++){const f=new ja({position:new it(h-c/8,u*7/8+(Math.random()-.5)*vt.TILE_SIZE)});a.push(f)}for(let h=0;h<u;h++){const f=new ja({position:new it(-c*2/8+(Math.random()-.5)*vt.TILE_SIZE,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new ja({position:new it(c*7/8+(Math.random()-.5)*vt.TILE_SIZE,h-u/16)});a.push(f)}return a}};xt(fc,"TILE_SIZE",1);let Lo=fc;var Xr=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(Xr||{});const Lh=new Eb;Lh.addContainer(Ch.BATTLEFIELD_CONTAINER,new Lo);Lh.setContainer(Ch.BATTLEFIELD_CONTAINER);Lh.start();
