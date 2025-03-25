var IE=Object.defineProperty;var PE=(r,t,e)=>t in r?IE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var xt=(r,t,e)=>PE(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eh="173",DE=0,Ud=1,UE=2,Kp=1,NE=2,Hi=3,pr=0,Bn=1,Vi=2,hr=0,bs=1,Nd=2,Fd=3,Od=4,FE=5,Nr=100,OE=101,BE=102,zE=103,GE=104,HE=200,VE=201,kE=202,WE=203,cu=204,uu=205,XE=206,qE=207,YE=208,ZE=209,KE=210,$E=211,JE=212,jE=213,QE=214,hu=0,fu=1,du=2,Is=3,pu=4,mu=5,_u=6,gu=7,$p=0,tS=1,eS=2,fr=0,nS=1,iS=2,rS=3,sS=4,oS=5,aS=6,lS=7,Jp=300,Ps=301,Ds=302,vu=303,xu=304,fl=306,Mu=1e3,Or=1001,Eu=1002,gi=1003,cS=1004,Ea=1005,Ti=1006,Rc=1007,Br=1008,qi=1009,jp=1010,Qp=1011,yo=1012,nh=1013,zr=1014,ki=1015,Ao=1016,ih=1017,rh=1018,Us=1020,tm=35902,em=1021,nm=1022,_i=1023,im=1024,rm=1025,Rs=1026,Ns=1027,sm=1028,sh=1029,om=1030,oh=1031,ah=1033,Ja=33776,ja=33777,Qa=33778,tl=33779,Su=35840,yu=35841,Tu=35842,wu=35843,Au=36196,bu=37492,Ru=37496,Cu=37808,Lu=37809,Iu=37810,Pu=37811,Du=37812,Uu=37813,Nu=37814,Fu=37815,Ou=37816,Bu=37817,zu=37818,Gu=37819,Hu=37820,Vu=37821,el=36492,ku=36494,Wu=36495,am=36283,Xu=36284,qu=36285,Yu=36286,uS=3200,hS=3201,lm=0,fS=1,ur="",si="srgb",Fs="srgb-linear",il="linear",Ue="srgb",os=7680,Bd=519,dS=512,pS=513,mS=514,cm=515,_S=516,gS=517,vS=518,xS=519,Zu=35044,zd="300 es",Wi=2e3,rl=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const o=i[t];if(o!==void 0){const a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,t);t.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,Ku=180/Math.PI;function dr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ye(r,t,e){return Math.max(t,Math.min(e,r))}function MS(r,t){return(r%t+t)%t}function Lc(r,t,e){return(1-e)*r+e*t}function yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*i-c*o+t.x,this.y=a*o+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,i,o,a,c,u,h,f){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,u,h,f)}set(t,e,i,o,a,c,u,h,f){const p=this.elements;return p[0]=t,p[1]=o,p[2]=u,p[3]=e,p[4]=a,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],_=i[7],g=i[2],x=i[5],E=i[8],T=o[0],v=o[3],m=o[6],I=o[1],L=o[4],b=o[7],B=o[2],N=o[5],F=o[8];return a[0]=c*T+u*I+h*B,a[3]=c*v+u*L+h*N,a[6]=c*m+u*b+h*F,a[1]=f*T+p*I+_*B,a[4]=f*v+p*L+_*N,a[7]=f*m+p*b+_*F,a[2]=g*T+x*I+E*B,a[5]=g*v+x*L+E*N,a[8]=g*m+x*b+E*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8];return e*c*p-e*u*f-i*a*p+i*u*h+o*a*f-o*c*h}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8],_=p*c-u*f,g=u*h-p*a,x=f*a-c*h,E=e*_+i*g+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(o*f-p*i)*T,t[2]=(u*i-o*c)*T,t[3]=g*T,t[4]=(p*e-o*h)*T,t[5]=(o*a-u*e)*T,t[6]=x*T,t[7]=(i*h-f*e)*T,t[8]=(c*e-i*a)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,c,u){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*c+f*u)+c+t,-o*f,o*h,-o*(-f*c+h*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Ic.makeScale(t,e)),this}rotate(t){return this.premultiply(Ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new le;function um(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function To(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ES(){const r=To("canvas");return r.style.display="block",r}const Gd={};function Ts(r){r in Gd||(Gd[r]=!0,console.warn(r))}function SS(r,t,e){return new Promise(function(i,o){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function yS(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function TS(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hd=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wS(){const r={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ue&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ue&&(o.r=Cs(o.r),o.g=Cs(o.g),o.b=Cs(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ur?il:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fs]:{primaries:t,whitePoint:i,transfer:il,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Ue,toXYZ:Hd,fromXYZ:Vd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const Ae=wS();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let as;class AS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=To("canvas")),as.width=t.width,as.height=t.height;const i=as.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=as}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Xi(a[c]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bS=0;class hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Pc(o[c].image)):a.push(Pc(o[c]))}else a=Pc(o);i.url=a}return e||(t.images[this.uuid]=i),i}}function Pc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;class Ln extends Bs{constructor(t=Ln.DEFAULT_IMAGE,e=Ln.DEFAULT_MAPPING,i=Or,o=Or,a=Ti,c=Br,u=_i,h=qi,f=Ln.DEFAULT_ANISOTROPY,p=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=dr(),this.name="",this.source=new hm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mu:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case Eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mu:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case Eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Jp;Ln.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,i=0,o=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*e+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*e+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*e+c[7]*i+c[11]*o+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a;const h=t.elements,f=h[0],p=h[4],_=h[8],g=h[1],x=h[5],E=h[9],T=h[2],v=h[6],m=h[10];if(Math.abs(p-g)<.01&&Math.abs(_-T)<.01&&Math.abs(E-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+T)<.1&&Math.abs(E+v)<.1&&Math.abs(f+x+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(f+1)/2,b=(x+1)/2,B=(m+1)/2,N=(p+g)/4,F=(_+T)/4,z=(E+v)/4;return L>b&&L>B?L<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(L),o=N/i,a=F/i):b>B?b<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),i=N/o,a=z/o):B<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),i=F/a,o=z/a),this.set(i,o,a,e),this}let I=Math.sqrt((v-E)*(v-E)+(_-T)*(_-T)+(g-p)*(g-p));return Math.abs(I)<.001&&(I=1),this.x=(v-E)/I,this.y=(_-T)/I,this.z=(g-p)/I,this.w=Math.acos((f+x+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CS extends Bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const o={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Ln(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,o=t.textures.length;i<o;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new hm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends CS{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fm extends Ln{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends Ln{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerpFlat(t,e,i,o,a,c,u){let h=i[o+0],f=i[o+1],p=i[o+2],_=i[o+3];const g=a[c+0],x=a[c+1],E=a[c+2],T=a[c+3];if(u===0){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u===1){t[e+0]=g,t[e+1]=x,t[e+2]=E,t[e+3]=T;return}if(_!==T||h!==g||f!==x||p!==E){let v=1-u;const m=h*g+f*x+p*E+_*T,I=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const B=Math.sqrt(L),N=Math.atan2(B,m*I);v=Math.sin(v*N)/B,u=Math.sin(u*N)/B}const b=u*I;if(h=h*v+g*b,f=f*v+x*b,p=p*v+E*b,_=_*v+T*b,v===1-u){const B=1/Math.sqrt(h*h+f*f+p*p+_*_);h*=B,f*=B,p*=B,_*=B}}t[e]=h,t[e+1]=f,t[e+2]=p,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,o,a,c){const u=i[o],h=i[o+1],f=i[o+2],p=i[o+3],_=a[c],g=a[c+1],x=a[c+2],E=a[c+3];return t[e]=u*E+p*_+h*x-f*g,t[e+1]=h*E+p*g+f*_-u*x,t[e+2]=f*E+p*x+u*g-h*_,t[e+3]=p*E-u*_-h*g-f*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,o=t._y,a=t._z,c=t._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(o/2),_=u(a/2),g=h(i/2),x=h(o/2),E=h(a/2);switch(c){case"XYZ":this._x=g*p*_+f*x*E,this._y=f*x*_-g*p*E,this._z=f*p*E+g*x*_,this._w=f*p*_-g*x*E;break;case"YXZ":this._x=g*p*_+f*x*E,this._y=f*x*_-g*p*E,this._z=f*p*E-g*x*_,this._w=f*p*_+g*x*E;break;case"ZXY":this._x=g*p*_-f*x*E,this._y=f*x*_+g*p*E,this._z=f*p*E+g*x*_,this._w=f*p*_-g*x*E;break;case"ZYX":this._x=g*p*_-f*x*E,this._y=f*x*_+g*p*E,this._z=f*p*E-g*x*_,this._w=f*p*_+g*x*E;break;case"YZX":this._x=g*p*_+f*x*E,this._y=f*x*_+g*p*E,this._z=f*p*E-g*x*_,this._w=f*p*_-g*x*E;break;case"XZY":this._x=g*p*_-f*x*E,this._y=f*x*_-g*p*E,this._z=f*p*E+g*x*_,this._w=f*p*_+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],a=e[8],c=e[1],u=e[5],h=e[9],f=e[2],p=e[6],_=e[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-h)*x,this._y=(a-f)*x,this._z=(c-o)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(a+f)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(a-f)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-o)/x,this._x=(a+f)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,a=t._z,c=t._w,u=e._x,h=e._y,f=e._z,p=e._w;return this._x=i*p+c*u+o*f-a*h,this._y=o*p+c*h+a*u-i*f,this._z=a*p+c*f+i*h-o*u,this._w=c*p-i*u-o*h-a*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*t._w+i*t._x+o*t._y+a*t._z;if(u<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,u=-u):this.copy(t),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*i+e*this._x,this._y=x*o+e*this._y,this._z=x*a+e*this._z,this.normalize(),this}const f=Math.sqrt(h),p=Math.atan2(f,u),_=Math.sin((1-e)*p)/f,g=Math.sin(e*p)/f;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=o*_+this._y*g,this._z=a*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(t),o*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=t.elements,c=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,a=t.x,c=t.y,u=t.z,h=t.w,f=2*(c*o-u*i),p=2*(u*e-a*o),_=2*(a*i-c*e);return this.x=e+h*f+c*_-u*p,this.y=i+h*p+u*f-a*_,this.z=o+h*_+a*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,a=t.z,c=e.x,u=e.y,h=e.z;return this.x=o*h-a*u,this.y=a*c-i*h,this.z=i*u-o*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new D,kd=new bo;class Ro{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,di):di.fromBufferAttribute(a,c),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}const o=t.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ro),ya.subVectors(this.max,ro),ls.subVectors(t.a,ro),cs.subVectors(t.b,ro),us.subVectors(t.c,ro),ir.subVectors(cs,ls),rr.subVectors(us,cs),br.subVectors(ls,us);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-br.z,br.y,ir.z,0,-ir.x,rr.z,0,-rr.x,br.z,0,-br.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-br.y,br.x,0];return!Uc(e,ls,cs,us,ya)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,ls,cs,us,ya))?!1:(Ta.crossVectors(ir,rr),e=[Ta.x,Ta.y,Ta.z],Uc(e,ls,cs,us,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Fi=[new D,new D,new D,new D,new D,new D,new D,new D],di=new D,Sa=new Ro,ls=new D,cs=new D,us=new D,ir=new D,rr=new D,br=new D,ro=new D,ya=new D,Ta=new D,Rr=new D;function Uc(r,t,e,i,o){for(let a=0,c=r.length-3;a<=c;a+=3){Rr.fromArray(r,a);const u=o.x*Math.abs(Rr.x)+o.y*Math.abs(Rr.y)+o.z*Math.abs(Rr.z),h=t.dot(Rr),f=e.dot(Rr),p=i.dot(Rr);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const IS=new Ro,so=new D,Nc=new D;class dl{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):IS.setFromPoints(t).getCenter(i);let o=0;for(let a=0,c=t.length;a<c;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const e=so.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.addScaledVector(so,o/i),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(Nc)),this.expandByPoint(so.copy(t.center).sub(Nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new D,Fc=new D,wa=new D,sr=new D,Oc=new D,Aa=new D,Bc=new D;class dm{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){Fc.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Fc);const a=t.distanceTo(e)*.5,c=-this.direction.dot(wa),u=sr.dot(this.direction),h=-sr.dot(wa),f=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,E;if(p>0)if(_=c*h-u,g=c*u-h,E=a*p,_>=0)if(g>=-E)if(g<=E){const T=1/p;_*=T,g*=T,x=_*(_+c*g+2*u)+g*(c*_+g+2*h)+f}else g=a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g=-a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;else g<=-E?(_=Math.max(0,-(-c*a+u)),g=_>0?-a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f):g<=E?(_=0,g=Math.min(Math.max(-a,-h),a),x=g*(g+2*h)+f):(_=Math.max(0,-(c*a+u)),g=_>0?a:Math.min(Math.max(-a,-h),a),x=-_*_+g*(g+2*h)+f);else g=c>0?-a:a,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Fc).addScaledVector(wa,g),x}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const i=Oi.dot(this.direction),o=Oi.dot(Oi)-i*i,a=t.radius*t.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,e):this.at(u,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return f>=0?(i=(t.min.x-g.x)*f,o=(t.max.x-g.x)*f):(i=(t.max.x-g.x)*f,o=(t.min.x-g.x)*f),p>=0?(a=(t.min.y-g.y)*p,c=(t.max.y-g.y)*p):(a=(t.max.y-g.y)*p,c=(t.min.y-g.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),_>=0?(u=(t.min.z-g.z)*_,h=(t.max.z-g.z)*_):(u=(t.max.z-g.z)*_,h=(t.min.z-g.z)*_),i>h||u>o)||((u>i||i!==i)&&(i=u),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,i,o,a){Oc.subVectors(e,t),Aa.subVectors(i,t),Bc.crossVectors(Oc,Aa);let c=this.direction.dot(Bc),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,t);const h=u*this.direction.dot(Aa.crossVectors(sr,Aa));if(h<0)return null;const f=u*this.direction.dot(Oc.cross(sr));if(f<0||h+f>c)return null;const p=-u*sr.dot(Bc);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,e,i,o,a,c,u,h,f,p,_,g,x,E,T,v){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,o,a,c,u,h,f,p,_,g,x,E,T,v)}set(t,e,i,o,a,c,u,h,f,p,_,g,x,E,T,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=o,m[1]=a,m[5]=c,m[9]=u,m[13]=h,m[2]=f,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=E,m[11]=T,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/hs.setFromMatrixColumn(t,0).length(),a=1/hs.setFromMatrixColumn(t,1).length(),c=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,o=t.y,a=t.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(o),f=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(t.order==="XYZ"){const g=c*p,x=c*_,E=u*p,T=u*_;e[0]=h*p,e[4]=-h*_,e[8]=f,e[1]=x+E*f,e[5]=g-T*f,e[9]=-u*h,e[2]=T-g*f,e[6]=E+x*f,e[10]=c*h}else if(t.order==="YXZ"){const g=h*p,x=h*_,E=f*p,T=f*_;e[0]=g+T*u,e[4]=E*u-x,e[8]=c*f,e[1]=c*_,e[5]=c*p,e[9]=-u,e[2]=x*u-E,e[6]=T+g*u,e[10]=c*h}else if(t.order==="ZXY"){const g=h*p,x=h*_,E=f*p,T=f*_;e[0]=g-T*u,e[4]=-c*_,e[8]=E+x*u,e[1]=x+E*u,e[5]=c*p,e[9]=T-g*u,e[2]=-c*f,e[6]=u,e[10]=c*h}else if(t.order==="ZYX"){const g=c*p,x=c*_,E=u*p,T=u*_;e[0]=h*p,e[4]=E*f-x,e[8]=g*f+T,e[1]=h*_,e[5]=T*f+g,e[9]=x*f-E,e[2]=-f,e[6]=u*h,e[10]=c*h}else if(t.order==="YZX"){const g=c*h,x=c*f,E=u*h,T=u*f;e[0]=h*p,e[4]=T-g*_,e[8]=E*_+x,e[1]=_,e[5]=c*p,e[9]=-u*p,e[2]=-f*p,e[6]=x*_+E,e[10]=g-T*_}else if(t.order==="XZY"){const g=c*h,x=c*f,E=u*h,T=u*f;e[0]=h*p,e[4]=-_,e[8]=f*p,e[1]=g*_+T,e[5]=c*p,e[9]=x*_-E,e[2]=E*_-x,e[6]=u*p,e[10]=T*_+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PS,t,DS)}lookAt(t,e,i){const o=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),or.crossVectors(i,qn),or.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),or.crossVectors(i,qn)),or.normalize(),ba.crossVectors(qn,or),o[0]=or.x,o[4]=ba.x,o[8]=qn.x,o[1]=or.y,o[5]=ba.y,o[9]=qn.y,o[2]=or.z,o[6]=ba.z,o[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],_=i[5],g=i[9],x=i[13],E=i[2],T=i[6],v=i[10],m=i[14],I=i[3],L=i[7],b=i[11],B=i[15],N=o[0],F=o[4],z=o[8],C=o[12],w=o[1],H=o[5],j=o[9],$=o[13],it=o[2],ht=o[6],nt=o[10],pt=o[14],Q=o[3],bt=o[7],It=o[11],Bt=o[15];return a[0]=c*N+u*w+h*it+f*Q,a[4]=c*F+u*H+h*ht+f*bt,a[8]=c*z+u*j+h*nt+f*It,a[12]=c*C+u*$+h*pt+f*Bt,a[1]=p*N+_*w+g*it+x*Q,a[5]=p*F+_*H+g*ht+x*bt,a[9]=p*z+_*j+g*nt+x*It,a[13]=p*C+_*$+g*pt+x*Bt,a[2]=E*N+T*w+v*it+m*Q,a[6]=E*F+T*H+v*ht+m*bt,a[10]=E*z+T*j+v*nt+m*It,a[14]=E*C+T*$+v*pt+m*Bt,a[3]=I*N+L*w+b*it+B*Q,a[7]=I*F+L*H+b*ht+B*bt,a[11]=I*z+L*j+b*nt+B*It,a[15]=I*C+L*$+b*pt+B*Bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],c=t[1],u=t[5],h=t[9],f=t[13],p=t[2],_=t[6],g=t[10],x=t[14],E=t[3],T=t[7],v=t[11],m=t[15];return E*(+a*h*_-o*f*_-a*u*g+i*f*g+o*u*x-i*h*x)+T*(+e*h*x-e*f*g+a*c*g-o*c*x+o*f*p-a*h*p)+v*(+e*f*_-e*u*x-a*c*_+i*c*x+a*u*p-i*f*p)+m*(-o*u*p-e*h*_+e*u*g+o*c*_-i*c*g+i*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],c=t[4],u=t[5],h=t[6],f=t[7],p=t[8],_=t[9],g=t[10],x=t[11],E=t[12],T=t[13],v=t[14],m=t[15],I=_*v*f-T*g*f+T*h*x-u*v*x-_*h*m+u*g*m,L=E*g*f-p*v*f-E*h*x+c*v*x+p*h*m-c*g*m,b=p*T*f-E*_*f+E*u*x-c*T*x-p*u*m+c*_*m,B=E*_*h-p*T*h-E*u*g+c*T*g+p*u*v-c*_*v,N=e*I+i*L+o*b+a*B;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=I*F,t[1]=(T*g*a-_*v*a-T*o*x+i*v*x+_*o*m-i*g*m)*F,t[2]=(u*v*a-T*h*a+T*o*f-i*v*f-u*o*m+i*h*m)*F,t[3]=(_*h*a-u*g*a-_*o*f+i*g*f+u*o*x-i*h*x)*F,t[4]=L*F,t[5]=(p*v*a-E*g*a+E*o*x-e*v*x-p*o*m+e*g*m)*F,t[6]=(E*h*a-c*v*a-E*o*f+e*v*f+c*o*m-e*h*m)*F,t[7]=(c*g*a-p*h*a+p*o*f-e*g*f-c*o*x+e*h*x)*F,t[8]=b*F,t[9]=(E*_*a-p*T*a-E*i*x+e*T*x+p*i*m-e*_*m)*F,t[10]=(c*T*a-E*u*a+E*i*f-e*T*f-c*i*m+e*u*m)*F,t[11]=(p*u*a-c*_*a-p*i*f+e*_*f+c*i*x-e*u*x)*F,t[12]=B*F,t[13]=(p*T*o-E*_*o+E*i*g-e*T*g-p*i*v+e*_*v)*F,t[14]=(E*u*o-c*T*o-E*i*h+e*T*h+c*i*v-e*u*v)*F,t[15]=(c*_*o-p*u*o+p*i*h-e*_*h-c*i*g+e*u*g)*F,this}scale(t){const e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),a=1-i,c=t.x,u=t.y,h=t.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-o*h,f*h+o*u,0,f*u+o*h,p*u+i,p*h-o*c,0,f*h-o*u,p*h+o*c,a*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,c){return this.set(1,i,a,0,t,1,c,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,a=e._x,c=e._y,u=e._z,h=e._w,f=a+a,p=c+c,_=u+u,g=a*f,x=a*p,E=a*_,T=c*p,v=c*_,m=u*_,I=h*f,L=h*p,b=h*_,B=i.x,N=i.y,F=i.z;return o[0]=(1-(T+m))*B,o[1]=(x+b)*B,o[2]=(E-L)*B,o[3]=0,o[4]=(x-b)*N,o[5]=(1-(g+m))*N,o[6]=(v+I)*N,o[7]=0,o[8]=(E+L)*F,o[9]=(v-I)*F,o[10]=(1-(g+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let a=hs.set(o[0],o[1],o[2]).length();const c=hs.set(o[4],o[5],o[6]).length(),u=hs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],pi.copy(this);const f=1/a,p=1/c,_=1/u;return pi.elements[0]*=f,pi.elements[1]*=f,pi.elements[2]*=f,pi.elements[4]*=p,pi.elements[5]*=p,pi.elements[6]*=p,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,e.setFromRotationMatrix(pi),i.x=a,i.y=c,i.z=u,this}makePerspective(t,e,i,o,a,c,u=Wi){const h=this.elements,f=2*a/(e-t),p=2*a/(i-o),_=(e+t)/(e-t),g=(i+o)/(i-o);let x,E;if(u===Wi)x=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===rl)x=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,o,a,c,u=Wi){const h=this.elements,f=1/(e-t),p=1/(i-o),_=1/(c-a),g=(e+t)*f,x=(i+o)*p;let E,T;if(u===Wi)E=(c+a)*_,T=-2*_;else if(u===rl)E=a*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-g,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new D,pi=new Xe,PS=new D(0,0,0),DS=new D(1,1,1),or=new D,ba=new D,qn=new D,Wd=new Xe,Xd=new bo;class wi{constructor(t=0,e=0,i=0,o=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,a=o[0],c=o[4],u=o[8],h=o[1],f=o[5],p=o[9],_=o[2],g=o[6],x=o[10];switch(e){case"XYZ":this._y=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let US=0;const qd=new D,fs=new bo,Bi=new Xe,Ra=new D,oo=new D,NS=new D,FS=new bo,Yd=new D(1,0,0),Zd=new D(0,1,0),Kd=new D(0,0,1),$d={type:"added"},OS={type:"removed"},ds={type:"childadded",child:null},zc={type:"childremoved",child:null};class gn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new D,e=new wi,i=new bo,o=new D(1,1,1);function a(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Xe},normalMatrix:{value:new le}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Yd,t)}rotateY(t){return this.rotateOnAxis(Zd,t)}rotateZ(t){return this.rotateOnAxis(Kd,t)}translateOnAxis(t,e){return qd.copy(t).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yd,t)}translateY(t){return this.translateOnAxis(Zd,t)}translateZ(t){return this.translateOnAxis(Kd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ra.copy(t):Ra.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(oo,Ra,this.up):Bi.lookAt(Ra,oo,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($d),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(OS),zc.child=t,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($d),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,t,NS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,FS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const _=h[f];a(t.shapes,_)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(a(t.materials,this.material[h]));o.material=u}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];o.animations.push(a(t.animations,h))}}if(e){const u=c(t.geometries),h=c(t.materials),f=c(t.textures),p=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),E=c(t.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),E.length>0&&(i.nodes=E)}return i.object=o,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}gn.DEFAULT_UP=new D(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new D,zi=new D,Gc=new D,Gi=new D,ps=new D,ms=new D,Jd=new D,Hc=new D,Vc=new D,kc=new D,Wc=new Fe,Xc=new Fe,qc=new Fe;class oi{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),mi.subVectors(t,e),o.cross(mi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){mi.subVectors(o,e),zi.subVectors(i,e),Gc.subVectors(t,e);const c=mi.dot(mi),u=mi.dot(zi),h=mi.dot(Gc),f=zi.dot(zi),p=zi.dot(Gc),_=c*f-u*u;if(_===0)return a.set(0,0,0),null;const g=1/_,x=(f*h-u*p)*g,E=(c*p-u*h)*g;return a.set(1-x-E,E,x)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,i,o,a,c,u,h){return this.getBarycoord(t,e,i,o,Gi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Gi.x),h.addScaledVector(c,Gi.y),h.addScaledVector(u,Gi.z),h)}static getInterpolatedAttribute(t,e,i,o,a,c){return Wc.setScalar(0),Xc.setScalar(0),qc.setScalar(0),Wc.fromBufferAttribute(t,e),Xc.fromBufferAttribute(t,i),qc.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Wc,a.x),c.addScaledVector(Xc,a.y),c.addScaledVector(qc,a.z),c}static isFrontFacing(t,e,i,o){return mi.subVectors(i,e),zi.subVectors(t,e),mi.cross(zi).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),mi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,o,a){return oi.getInterpolation(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,a=this.c;let c,u;ps.subVectors(o,i),ms.subVectors(a,i),Hc.subVectors(t,i);const h=ps.dot(Hc),f=ms.dot(Hc);if(h<=0&&f<=0)return e.copy(i);Vc.subVectors(t,o);const p=ps.dot(Vc),_=ms.dot(Vc);if(p>=0&&_<=p)return e.copy(o);const g=h*_-p*f;if(g<=0&&h>=0&&p<=0)return c=h/(h-p),e.copy(i).addScaledVector(ps,c);kc.subVectors(t,a);const x=ps.dot(kc),E=ms.dot(kc);if(E>=0&&x<=E)return e.copy(a);const T=x*f-h*E;if(T<=0&&f>=0&&E<=0)return u=f/(f-E),e.copy(i).addScaledVector(ms,u);const v=p*E-x*_;if(v<=0&&_-p>=0&&x-E>=0)return Jd.subVectors(a,o),u=(_-p)/(_-p+(x-E)),e.copy(o).addScaledVector(Jd,u);const m=1/(v+T+g);return c=T*m,u=g*m,e.copy(i).addScaledVector(ps,c).addScaledVector(ms,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Yc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ae.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Ae.workingColorSpace){if(t=MS(t,1),e=ye(e,0,1),i=ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,c=2*i-a;this.r=Yc(c,a,t+1/3),this.g=Yc(c,a,t),this.b=Yc(c,a,t-1/3)}return Ae.toWorkingColorSpace(this,o),this}setStyle(t,e=si){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=mm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ae.fromWorkingColorSpace(yn.copy(this),t),Math.round(ye(yn.r*255,0,255))*65536+Math.round(ye(yn.g*255,0,255))*256+Math.round(ye(yn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.fromWorkingColorSpace(yn.copy(this),e);const i=yn.r,o=yn.g,a=yn.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const _=c-u;switch(f=p<=.5?_/(c+u):_/(2-c-u),c){case i:h=(o-a)/_+(o<a?6:0);break;case o:h=(a-i)/_+2;break;case a:h=(i-o)/_+4;break}h/=6}return t.h=h,t.s=f,t.l=p,t}getRGB(t,e=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(yn.copy(this),e),t.r=yn.r,t.g=yn.g,t.b=yn.b,t}getStyle(t=si){Ae.fromWorkingColorSpace(yn.copy(this),t);const e=yn.r,i=yn.g,o=yn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(t,e,i){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+e,ar.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ar),t.getHSL(Ca);const i=Lc(ar.h,Ca.h,e),o=Lc(ar.s,Ca.s,e),a=Lc(ar.l,Ca.l,e);return this.setHSL(i,o,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,o=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*o,this.g=a[1]*e+a[4]*i+a[7]*o,this.b=a[2]*e+a[5]*i+a[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ct;ct.NAMES=mm;let BS=0;class kr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=bs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=uu,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==uu&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(e){const a=o(t.textures),c=o(t.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new D,La=new yt;let zS=0;class vi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)La.fromBufferAttribute(this,e),La.applyMatrix3(t),this.setXY(e,La.x,La.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zu&&(t.usage=this.usage),t}}class _m extends vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gm extends vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ve extends vi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let GS=0;const ii=new Xe,Zc=new gn,_s=new D,Yn=new Ro,ao=new Ro,hn=new D;class In extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(um(t)?gm:_m)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new le().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return Zc.lookAt(t),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let o=0,a=t.length;o<a;o++){const c=t[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ve(i,3))}else{const i=Math.min(t.length,e.count);for(let o=0;o<i;o++){const a=t[o];e.setXYZ(o,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const a=e[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const u=e[a];ao.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(Yn.min,ao.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,ao.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(ao.min),Yn.expandByPoint(ao.max))}Yn.getCenter(i);let o=0;for(let a=0,c=t.count;a<c;a++)hn.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(hn));if(e)for(let a=0,c=e.length;a<c;a++){const u=e[a],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)hn.fromBufferAttribute(u,f),h&&(_s.fromBufferAttribute(t,f),hn.add(_s)),o=Math.max(o,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,o=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let z=0;z<i.count;z++)u[z]=new D,h[z]=new D;const f=new D,p=new D,_=new D,g=new yt,x=new yt,E=new yt,T=new D,v=new D;function m(z,C,w){f.fromBufferAttribute(i,z),p.fromBufferAttribute(i,C),_.fromBufferAttribute(i,w),g.fromBufferAttribute(a,z),x.fromBufferAttribute(a,C),E.fromBufferAttribute(a,w),p.sub(f),_.sub(f),x.sub(g),E.sub(g);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(T.copy(p).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(H),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-E.x).multiplyScalar(H),u[z].add(T),u[C].add(T),u[w].add(T),h[z].add(v),h[C].add(v),h[w].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let z=0,C=I.length;z<C;++z){const w=I[z],H=w.start,j=w.count;for(let $=H,it=H+j;$<it;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new D,b=new D,B=new D,N=new D;function F(z){B.fromBufferAttribute(o,z),N.copy(B);const C=u[z];L.copy(C),L.sub(B.multiplyScalar(B.dot(C))).normalize(),b.crossVectors(N,C);const H=b.dot(h[z])<0?-1:1;c.setXYZW(z,L.x,L.y,L.z,H)}for(let z=0,C=I.length;z<C;++z){const w=I[z],H=w.start,j=w.count;for(let $=H,it=H+j;$<it;$+=3)F(t.getX($+0)),F(t.getX($+1)),F(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const o=new D,a=new D,c=new D,u=new D,h=new D,f=new D,p=new D,_=new D;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),T=t.getX(g+1),v=t.getX(g+2);o.fromBufferAttribute(e,E),a.fromBufferAttribute(e,T),c.fromBufferAttribute(e,v),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,v),u.add(p),h.add(p),f.add(p),i.setXYZ(E,u.x,u.y,u.z),i.setXYZ(T,h.x,h.y,h.z),i.setXYZ(v,f.x,f.y,f.z)}else for(let g=0,x=e.count;g<x;g+=3)o.fromBufferAttribute(e,g+0),a.fromBufferAttribute(e,g+1),c.fromBufferAttribute(e,g+2),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(u,h){const f=u.array,p=u.itemSize,_=u.normalized,g=new f.constructor(h.length*p);let x=0,E=0;for(let T=0,v=h.length;T<v;T++){u.isInterleavedBufferAttribute?x=h[T]*u.data.stride+u.offset:x=h[T]*p;for(let m=0;m<p;m++)g[E++]=f[x++]}return new vi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new In,i=this.index.array,o=this.attributes;for(const u in o){const h=o[u],f=t(h,i);e.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const h=[],f=a[u];for(let p=0,_=f.length;p<_;p++){const g=f[p],x=t(g,i);h.push(x)}e.morphAttributes[u]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(t[f]=h[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const f=i[h];t.data.attributes[h]=f.toJSON(t.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let _=0,g=f.length;_<g;_++){const x=f[_];p.push(x.toJSON(t.data))}p.length>0&&(o[h]=p,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(e))}const a=t.morphAttributes;for(const f in a){const p=[],_=a[f];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jd=new Xe,Cr=new dm,Ia=new dl,Qd=new D,Pa=new D,Da=new D,Ua=new D,Kc=new D,Na=new D,tp=new D,Fa=new D;class mn extends gn{constructor(t=new In,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(t,e){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(a&&u){Na.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const p=u[h],_=a[h];p!==0&&(Kc.fromBufferAttribute(_,t),c?Na.addScaledVector(Kc,p):Na.addScaledVector(Kc.sub(e),p))}e.add(Na)}return e}raycast(t,e){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(a),Cr.copy(t.ray).recast(t.near),!(Ia.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Ia,Qd)===null||Cr.origin.distanceToSquared(Qd)>(t.far-t.near)**2))&&(jd.copy(a).invert(),Cr.copy(t.ray).applyMatrix4(jd),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Cr)))}_computeIntersections(t,e,i){let o;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,g=a.groups,x=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,T=g.length;E<T;E++){const v=g[E],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let b=I,B=L;b<B;b+=3){const N=u.getX(b),F=u.getX(b+1),z=u.getX(b+2);o=Oa(this,m,t,i,f,p,_,N,F,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let v=E,m=T;v<m;v+=3){const I=u.getX(v),L=u.getX(v+1),b=u.getX(v+2);o=Oa(this,c,t,i,f,p,_,I,L,b),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,T=g.length;E<T;E++){const v=g[E],m=c[v.materialIndex],I=Math.max(v.start,x.start),L=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let b=I,B=L;b<B;b+=3){const N=b,F=b+1,z=b+2;o=Oa(this,m,t,i,f,p,_,N,F,z),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let v=E,m=T;v<m;v+=3){const I=v,L=v+1,b=v+2;o=Oa(this,c,t,i,f,p,_,I,L,b),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}}}function HS(r,t,e,i,o,a,c,u){let h;if(t.side===Bn?h=i.intersectTriangle(c,a,o,!0,u):h=i.intersectTriangle(o,a,c,t.side===pr,u),h===null)return null;Fa.copy(u),Fa.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Fa);return f<e.near||f>e.far?null:{distance:f,point:Fa.clone(),object:r}}function Oa(r,t,e,i,o,a,c,u,h,f){r.getVertexPosition(u,Pa),r.getVertexPosition(h,Da),r.getVertexPosition(f,Ua);const p=HS(r,t,e,i,Pa,Da,Ua,tp);if(p){const _=new D;oi.getBarycoord(tp,Pa,Da,Ua,_),o&&(p.uv=oi.getInterpolatedAttribute(o,u,h,f,_,new yt)),a&&(p.uv1=oi.getInterpolatedAttribute(a,u,h,f,_,new yt)),c&&(p.normal=oi.getInterpolatedAttribute(c,u,h,f,_,new D),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:h,c:f,normal:new D,materialIndex:0};oi.getNormal(Pa,Da,Ua,g.normal),p.face=g,p.barycoord=_}return p}class Hr extends In{constructor(t=1,e=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],p=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,i,e,t,c,a,0),E("z","y","x",1,-1,i,e,-t,c,a,1),E("x","z","y",1,1,t,i,e,o,c,2),E("x","z","y",1,-1,t,i,-e,o,c,3),E("x","y","z",1,-1,t,e,i,o,a,4),E("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(p,3)),this.setAttribute("uv",new Ve(_,2));function E(T,v,m,I,L,b,B,N,F,z,C){const w=b/F,H=B/z,j=b/2,$=B/2,it=N/2,ht=F+1,nt=z+1;let pt=0,Q=0;const bt=new D;for(let It=0;It<nt;It++){const Bt=It*H-$;for(let he=0;he<ht;he++){const Le=he*w-j;bt[T]=Le*I,bt[v]=Bt*L,bt[m]=it,f.push(bt.x,bt.y,bt.z),bt[T]=0,bt[v]=0,bt[m]=N>0?1:-1,p.push(bt.x,bt.y,bt.z),_.push(he/F),_.push(1-It/z),pt+=1}}for(let It=0;It<z;It++)for(let Bt=0;Bt<F;Bt++){const he=g+Bt+ht*It,Le=g+Bt+ht*(It+1),at=g+(Bt+1)+ht*(It+1),gt=g+(Bt+1)+ht*It;h.push(he,Le,gt),h.push(Le,at,gt),Q+=6}u.addGroup(x,Q,C),x+=Q,g+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const o=r[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function Cn(r){const t={};for(let e=0;e<r.length;e++){const i=Os(r[e]);for(const o in i)t[o]=i[o]}return t}function VS(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function vm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const kS={clone:Os,merge:Cn};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=VS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?e.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[o]={type:"m4",value:c.toArray()}:e.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xm extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new D,ep=new yt,np=new yt;class Zn extends xm{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ku*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ku*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,ep,np),e.subVectors(np,ep)}setViewOffset(t,e,i,o,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cc*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/h,e-=c.offsetY*i/f,o*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gs=-90,vs=1;class qS extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(gs,vs,t,e);o.layers=this.layers,this.add(o);const a=new Zn(gs,vs,t,e);a.layers=this.layers,this.add(a);const c=new Zn(gs,vs,t,e);c.layers=this.layers,this.add(c);const u=new Zn(gs,vs,t,e);u.layers=this.layers,this.add(u);const h=new Zn(gs,vs,t,e);h.layers=this.layers,this.add(h);const f=new Zn(gs,vs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,o,a,c,u,h]=e;for(const f of e)this.remove(f);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,f,p]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,o),t.render(e,a),t.setRenderTarget(i,1,o),t.render(e,c),t.setRenderTarget(i,2,o),t.render(e,u),t.setRenderTarget(i,3,o),t.render(e,h),t.setRenderTarget(i,4,o),t.render(e,f),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,o),t.render(e,p),t.setRenderTarget(_,g,x),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class Mm extends Ln{constructor(t,e,i,o,a,c,u,h,f,p){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,i,o,a,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class YS extends Gr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Mm(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hr(5,5,5),a=new mr({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:hr});a.uniforms.tEquirect.value=e;const c=new mn(o,a),u=e.minFilter;return e.minFilter===Br&&(e.minFilter=Ti),new qS(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e,i,o){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,o);t.setRenderTarget(a)}}class Ba extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZS={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const T of t.hand.values()){const v=e.getJointPose(T,i),m=this._getHandJoint(f,T);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,E=.005;f.inputState.pinching&&g>x+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&g<=x-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(ZS)))}return u!==null&&(u.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ba;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class KS extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $S{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zu,this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let o=0,a=this.stride;o<a;o++)this.array[t+o]=e.array[i+o];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new D;class sl{constructor(t,e,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),o=Ne(o,this.array),a=Ne(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=o,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return new vi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $u extends kr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xs;const lo=new D,Ms=new D,Es=new D,Ss=new yt,co=new yt,Em=new Xe,za=new D,uo=new D,Ga=new D,ip=new yt,Jc=new yt,rp=new yt;class sp extends gn{constructor(t=new $u){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new In;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $S(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new sl(i,3,0,!1)),xs.setAttribute("uv",new sl(i,2,3,!1))}this.geometry=xs,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Em.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Es.z);const i=this.material.rotation;let o,a;i!==0&&(a=Math.cos(i),o=Math.sin(i));const c=this.center;Ha(za.set(-.5,-.5,0),Es,c,Ms,o,a),Ha(uo.set(.5,-.5,0),Es,c,Ms,o,a),Ha(Ga.set(.5,.5,0),Es,c,Ms,o,a),ip.set(0,0),Jc.set(1,0),rp.set(1,1);let u=t.ray.intersectTriangle(za,uo,Ga,!1,lo);if(u===null&&(Ha(uo.set(-.5,.5,0),Es,c,Ms,o,a),Jc.set(0,1),u=t.ray.intersectTriangle(za,Ga,uo,!1,lo),u===null))return;const h=t.ray.origin.distanceTo(lo);h<t.near||h>t.far||e.push({distance:h,point:lo.clone(),uv:oi.getInterpolation(lo,za,uo,Ga,ip,Jc,rp,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ha(r,t,e,i,o,a){Ss.subVectors(r,e).addScalar(.5).multiply(i),o!==void 0?(co.x=a*Ss.x-o*Ss.y,co.y=o*Ss.x+a*Ss.y):co.copy(Ss),r.copy(t),r.x+=co.x,r.y+=co.y,r.applyMatrix4(Em)}const jc=new D,JS=new D,jS=new le;class Dr{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=jc.subVectors(i,e).cross(JS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(jc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||jS.getNormalMatrix(t),o=this.coplanarPoint(jc).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new dl,Va=new D;class lh{constructor(t=new Dr,e=new Dr,i=new Dr,o=new Dr,a=new Dr,c=new Dr){this.planes=[t,e,i,o,a,c]}set(t,e,i,o,a,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,o=t.elements,a=o[0],c=o[1],u=o[2],h=o[3],f=o[4],p=o[5],_=o[6],g=o[7],x=o[8],E=o[9],T=o[10],v=o[11],m=o[12],I=o[13],L=o[14],b=o[15];if(i[0].setComponents(h-a,g-f,v-x,b-m).normalize(),i[1].setComponents(h+a,g+f,v+x,b+m).normalize(),i[2].setComponents(h+c,g+p,v+E,b+I).normalize(),i[3].setComponents(h-c,g-p,v-E,b-I).normalize(),i[4].setComponents(h-u,g-_,v-T,b-L).normalize(),e===Wi)i[5].setComponents(h+u,g+_,v+T,b+L).normalize();else if(e===rl)i[5].setComponents(u,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(t){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(Va.x=o.normal.x>0?t.max.x:t.min.x,Va.y=o.normal.y>0?t.max.y:t.min.y,Va.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sm extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ol=new D,al=new D,op=new Xe,ho=new dm,ka=new dl,Qc=new D,ap=new D;class QS extends gn{constructor(t=new In,e=new Sm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,a=e.count;o<a;o++)ol.fromBufferAttribute(e,o-1),al.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=ol.distanceTo(al);t.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,a=t.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(o),ka.radius+=a,t.ray.intersectsSphere(ka)===!1)return;op.copy(o).invert(),ho.copy(t.ray).applyMatrix4(op);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),E=Math.min(p.count,c.start+c.count);for(let T=x,v=E-1;T<v;T+=f){const m=p.getX(T),I=p.getX(T+1),L=Wa(this,t,ho,h,m,I,T);L&&e.push(L)}if(this.isLineLoop){const T=p.getX(E-1),v=p.getX(x),m=Wa(this,t,ho,h,T,v,E-1);m&&e.push(m)}}else{const x=Math.max(0,c.start),E=Math.min(g.count,c.start+c.count);for(let T=x,v=E-1;T<v;T+=f){const m=Wa(this,t,ho,h,T,T+1,T);m&&e.push(m)}if(this.isLineLoop){const T=Wa(this,t,ho,h,E-1,x,E-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Wa(r,t,e,i,o,a,c){const u=r.geometry.attributes.position;if(ol.fromBufferAttribute(u,o),al.fromBufferAttribute(u,a),e.distanceSqToSegment(ol,al,Qc,ap)>i)return;Qc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(Qc);if(!(f<t.near||f>t.far))return{distance:f,point:ap.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const lp=new D,cp=new D;class ty extends QS{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,a=e.count;o<a;o+=2)lp.fromBufferAttribute(e,o),cp.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+lp.distanceTo(cp);t.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ym extends Ln{constructor(t,e,i,o,a,c,u,h,f,p=Rs){if(p!==Rs&&p!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Rs&&(i=zr),i===void 0&&p===Ns&&(i=Us),super(null,o,a,c,u,h,p,i,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=u!==void 0?u:gi,this.minFilter=h!==void 0?h:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pl extends In{constructor(t=1,e=1,i=1,o=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};const f=this;o=Math.floor(o),a=Math.floor(a);const p=[],_=[],g=[],x=[];let E=0;const T=[],v=i/2;let m=0;I(),c===!1&&(t>0&&L(!0),e>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(x,2));function I(){const b=new D,B=new D;let N=0;const F=(e-t)/i;for(let z=0;z<=a;z++){const C=[],w=z/a,H=w*(e-t)+t;for(let j=0;j<=o;j++){const $=j/o,it=$*h+u,ht=Math.sin(it),nt=Math.cos(it);B.x=H*ht,B.y=-w*i+v,B.z=H*nt,_.push(B.x,B.y,B.z),b.set(ht,F,nt).normalize(),g.push(b.x,b.y,b.z),x.push($,1-w),C.push(E++)}T.push(C)}for(let z=0;z<o;z++)for(let C=0;C<a;C++){const w=T[C][z],H=T[C+1][z],j=T[C+1][z+1],$=T[C][z+1];(t>0||C!==0)&&(p.push(w,H,$),N+=3),(e>0||C!==a-1)&&(p.push(H,j,$),N+=3)}f.addGroup(m,N,0),m+=N}function L(b){const B=E,N=new yt,F=new D;let z=0;const C=b===!0?t:e,w=b===!0?1:-1;for(let j=1;j<=o;j++)_.push(0,v*w,0),g.push(0,w,0),x.push(.5,.5),E++;const H=E;for(let j=0;j<=o;j++){const it=j/o*h+u,ht=Math.cos(it),nt=Math.sin(it);F.x=C*nt,F.y=v*w,F.z=C*ht,_.push(F.x,F.y,F.z),g.push(0,w,0),N.x=ht*.5+.5,N.y=nt*.5*w+.5,x.push(N.x,N.y),E++}for(let j=0;j<o;j++){const $=B+j,it=H+j;b===!0?p.push(it,it+1,$):p.push(it+1,it,$),z+=3}f.addGroup(m,z,b===!0?1:2),m+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ch extends pl{constructor(t=1,e=1,i=32,o=1,a=!1,c=0,u=Math.PI*2){super(0,t,e,i,o,a,c,u),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(t){return new ch(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class uh extends In{constructor(t=[],e=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:o};const a=[],c=[];u(o),f(i),p(),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(a.slice(),3)),this.setAttribute("uv",new Ve(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(I){const L=new D,b=new D,B=new D;for(let N=0;N<e.length;N+=3)x(e[N+0],L),x(e[N+1],b),x(e[N+2],B),h(L,b,B,I)}function h(I,L,b,B){const N=B+1,F=[];for(let z=0;z<=N;z++){F[z]=[];const C=I.clone().lerp(b,z/N),w=L.clone().lerp(b,z/N),H=N-z;for(let j=0;j<=H;j++)j===0&&z===N?F[z][j]=C:F[z][j]=C.clone().lerp(w,j/H)}for(let z=0;z<N;z++)for(let C=0;C<2*(N-z)-1;C++){const w=Math.floor(C/2);C%2===0?(g(F[z][w+1]),g(F[z+1][w]),g(F[z][w])):(g(F[z][w+1]),g(F[z+1][w+1]),g(F[z+1][w]))}}function f(I){const L=new D;for(let b=0;b<a.length;b+=3)L.x=a[b+0],L.y=a[b+1],L.z=a[b+2],L.normalize().multiplyScalar(I),a[b+0]=L.x,a[b+1]=L.y,a[b+2]=L.z}function p(){const I=new D;for(let L=0;L<a.length;L+=3){I.x=a[L+0],I.y=a[L+1],I.z=a[L+2];const b=v(I)/2/Math.PI+.5,B=m(I)/Math.PI+.5;c.push(b,1-B)}E(),_()}function _(){for(let I=0;I<c.length;I+=6){const L=c[I+0],b=c[I+2],B=c[I+4],N=Math.max(L,b,B),F=Math.min(L,b,B);N>.9&&F<.1&&(L<.2&&(c[I+0]+=1),b<.2&&(c[I+2]+=1),B<.2&&(c[I+4]+=1))}}function g(I){a.push(I.x,I.y,I.z)}function x(I,L){const b=I*3;L.x=t[b+0],L.y=t[b+1],L.z=t[b+2]}function E(){const I=new D,L=new D,b=new D,B=new D,N=new yt,F=new yt,z=new yt;for(let C=0,w=0;C<a.length;C+=9,w+=6){I.set(a[C+0],a[C+1],a[C+2]),L.set(a[C+3],a[C+4],a[C+5]),b.set(a[C+6],a[C+7],a[C+8]),N.set(c[w+0],c[w+1]),F.set(c[w+2],c[w+3]),z.set(c[w+4],c[w+5]),B.copy(I).add(L).add(b).divideScalar(3);const H=v(B);T(N,w+0,I,H),T(F,w+2,L,H),T(z,w+4,b,H)}}function T(I,L,b,B){B<0&&I.x===1&&(c[L]=I.x-1),b.x===0&&b.z===0&&(c[L]=B/2/Math.PI+.5)}function v(I){return Math.atan2(I.z,-I.x)}function m(I){return Math.atan2(-I.y,Math.sqrt(I.x*I.x+I.z*I.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uh(t.vertices,t.indices,t.radius,t.details)}}class hh extends uh{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hh(t.radius,t.detail)}}class ml extends In{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const a=t/2,c=e/2,u=Math.floor(i),h=Math.floor(o),f=u+1,p=h+1,_=t/u,g=e/h,x=[],E=[],T=[],v=[];for(let m=0;m<p;m++){const I=m*g-c;for(let L=0;L<f;L++){const b=L*_-a;E.push(b,-I,0),T.push(0,0,1),v.push(L/u),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let I=0;I<u;I++){const L=I+f*m,b=I+f*(m+1),B=I+1+f*(m+1),N=I+1+f*m;x.push(L,b,N),x.push(b,B,N)}this.setIndex(x),this.setAttribute("position",new Ve(E,3)),this.setAttribute("normal",new Ve(T,3)),this.setAttribute("uv",new Ve(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.widthSegments,t.heightSegments)}}class fh extends In{constructor(t=1,e=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const h=Math.min(c+u,Math.PI);let f=0;const p=[],_=new D,g=new D,x=[],E=[],T=[],v=[];for(let m=0;m<=i;m++){const I=[],L=m/i;let b=0;m===0&&c===0?b=.5/e:m===i&&h===Math.PI&&(b=-.5/e);for(let B=0;B<=e;B++){const N=B/e;_.x=-t*Math.cos(o+N*a)*Math.sin(c+L*u),_.y=t*Math.cos(c+L*u),_.z=t*Math.sin(o+N*a)*Math.sin(c+L*u),E.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),v.push(N+b,1-L),I.push(f++)}p.push(I)}for(let m=0;m<i;m++)for(let I=0;I<e;I++){const L=p[m][I+1],b=p[m][I],B=p[m+1][I],N=p[m+1][I+1];(m!==0||c>0)&&x.push(L,b,N),(m!==i-1||h<Math.PI)&&x.push(b,B,N)}this.setIndex(x),this.setAttribute("position",new Ve(E,3)),this.setAttribute("normal",new Ve(T,3)),this.setAttribute("uv",new Ve(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class dh extends In{constructor(t=1,e=.4,i=12,o=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:o,arc:a},i=Math.floor(i),o=Math.floor(o);const c=[],u=[],h=[],f=[],p=new D,_=new D,g=new D;for(let x=0;x<=i;x++)for(let E=0;E<=o;E++){const T=E/o*a,v=x/i*Math.PI*2;_.x=(t+e*Math.cos(v))*Math.cos(T),_.y=(t+e*Math.cos(v))*Math.sin(T),_.z=e*Math.sin(v),u.push(_.x,_.y,_.z),p.x=t*Math.cos(T),p.y=t*Math.sin(T),g.subVectors(_,p).normalize(),h.push(g.x,g.y,g.z),f.push(E/o),f.push(x/i)}for(let x=1;x<=i;x++)for(let E=1;E<=o;E++){const T=(o+1)*x+E-1,v=(o+1)*(x-1)+E-1,m=(o+1)*(x-1)+E,I=(o+1)*x+E;c.push(T,v,I),c.push(v,m,I)}this.setIndex(c),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ph extends In{constructor(t=1,e=.4,i=64,o=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:o,p:a,q:c},i=Math.floor(i),o=Math.floor(o);const u=[],h=[],f=[],p=[],_=new D,g=new D,x=new D,E=new D,T=new D,v=new D,m=new D;for(let L=0;L<=i;++L){const b=L/i*a*Math.PI*2;I(b,a,c,t,x),I(b+.01,a,c,t,E),v.subVectors(E,x),m.addVectors(E,x),T.crossVectors(v,m),m.crossVectors(T,v),T.normalize(),m.normalize();for(let B=0;B<=o;++B){const N=B/o*Math.PI*2,F=-e*Math.cos(N),z=e*Math.sin(N);_.x=x.x+(F*m.x+z*T.x),_.y=x.y+(F*m.y+z*T.y),_.z=x.z+(F*m.z+z*T.z),h.push(_.x,_.y,_.z),g.subVectors(_,x).normalize(),f.push(g.x,g.y,g.z),p.push(L/i),p.push(B/o)}}for(let L=1;L<=i;L++)for(let b=1;b<=o;b++){const B=(o+1)*(L-1)+(b-1),N=(o+1)*L+(b-1),F=(o+1)*L+b,z=(o+1)*(L-1)+b;u.push(B,N,z),u.push(N,F,z)}this.setIndex(u),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(p,2));function I(L,b,B,N,F){const z=Math.cos(L),C=Math.sin(L),w=B/b*L,H=Math.cos(w);F.x=N*(2+H)*.5*z,F.y=N*(2+H)*C*.5,F.z=N*Math.sin(w)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class cr extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lm,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ey extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ny extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const up={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class iy{constructor(t,e,i){const o=this;let a=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return f.push(p,_),this},this.removeHandler=function(p){const _=f.indexOf(p);return _!==-1&&f.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=f.length;_<g;_+=2){const x=f[_],E=f[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return E}return null}}}const ry=new iy;class mh{constructor(t){this.manager=t!==void 0?t:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class sy extends mh{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,c=up.get(t);if(c!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(c),a.manager.itemEnd(t)},0),c;const u=To("img");function h(){p(),up.add(t,this),e&&e(this),a.manager.itemEnd(t)}function f(_){p(),o&&o(_),a.manager.itemError(t),a.manager.itemEnd(t)}function p(){u.removeEventListener("load",h,!1),u.removeEventListener("error",f,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(t),u.src=t,u}}class hp extends mh{constructor(t){super(t)}load(t,e,i,o){const a=new Ln,c=new sy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(u){a.image=u,a.needsUpdate=!0,e!==void 0&&e(a)},i,o),a}}class Tm extends gn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class oy extends Tm{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tu=new Xe,fp=new D,dp=new D;class ay{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;fp.setFromMatrixPosition(t.matrixWorld),e.position.copy(fp),dp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dp),e.updateMatrixWorld(),tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pp=new Xe,fo=new D,eu=new D;class ly extends ay{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,o=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),i.position.copy(fo),eu.copy(i.position),eu.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(eu),i.updateMatrixWorld(),o.makeTranslation(-fo.x,-fo.y,-fo.z),pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp)}}class wm extends Tm{constructor(t,e,i=0,o=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new ly}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class cy extends xm{constructor(t=-1,e=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-t,c=i+t,u=o+e,h=o-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class uy extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class hy extends ty{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],o=new In;o.setAttribute("position",new Ve(e,3)),o.setAttribute("color",new Ve(i,3));const a=new Sm({vertexColors:!0,toneMapped:!1});super(o,a),this.type="AxesHelper"}setColors(t,e,i){const o=new ct,a=this.geometry.attributes.color.array;return o.set(t),o.toArray(a,0),o.toArray(a,3),o.set(e),o.toArray(a,6),o.toArray(a,9),o.set(i),o.toArray(a,12),o.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function mp(r,t,e,i){const o=fy(i);switch(e){case em:return r*t;case im:return r*t;case rm:return r*t*2;case sm:return r*t/o.components*o.byteLength;case sh:return r*t/o.components*o.byteLength;case om:return r*t*2/o.components*o.byteLength;case oh:return r*t*2/o.components*o.byteLength;case nm:return r*t*3/o.components*o.byteLength;case _i:return r*t*4/o.components*o.byteLength;case ah:return r*t*4/o.components*o.byteLength;case Ja:case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qa:case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yu:case wu:return Math.max(r,16)*Math.max(t,8)/4;case Su:case Tu:return Math.max(r,8)*Math.max(t,8)/2;case Au:case bu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ru:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Vu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case el:case ku:case Wu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case am:case Xu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case qu:case Yu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fy(r){switch(r){case qi:case jp:return{byteLength:1,components:1};case yo:case Qp:case Ao:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case zr:case nh:case ki:return{byteLength:4,components:1};case tm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Am(){let r=null,t=!1,e=null,i=null;function o(a,c){e(a,c),i=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function dy(r){const t=new WeakMap;function e(u,h){const f=u.array,p=u.usage,_=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,p),u.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,h,f){const p=h.array,_=h.updateRanges;if(r.bindBuffer(f,u),_.length===0)r.bufferSubData(f,0,p);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],T=_[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++g,_[g]=T)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const T=_[x];r.bufferSubData(f,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=t.get(u);h&&(r.deleteBuffer(h.buffer),t.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=t.get(u);(!p||p.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:o,remove:a,update:c}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,by=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Oy=`#define PI 3.141592653589793
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
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
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
}`,nT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
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
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,aT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
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
#endif`,fT=`struct PhysicalMaterial {
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
}`,dT=`
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ST=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yT=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
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
#endif`,LT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
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
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
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
}`,QT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tw=`#ifdef USE_SKINNING
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
#endif`,ew=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ow=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aw=`#ifdef USE_TRANSMISSION
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
#endif`,lw=`#ifdef USE_TRANSMISSION
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
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pw=`uniform sampler2D t2D;
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_w=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`#include <common>
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
}`,Mw=`#if DEPTH_PACKING == 3200
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
}`,Ew=`#define DISTANCE
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
}`,Sw=`#define DISTANCE
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`uniform float scale;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,bw=`#include <common>
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#define LAMBERT
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
}`,Lw=`#define LAMBERT
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
}`,Iw=`#define MATCAP
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
}`,Pw=`#define MATCAP
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
}`,Dw=`#define NORMAL
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
}`,Uw=`#define NORMAL
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
}`,Nw=`#define PHONG
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
}`,Fw=`#define PHONG
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
}`,Ow=`#define STANDARD
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
}`,Bw=`#define STANDARD
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
}`,zw=`#define TOON
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
}`,Gw=`#define TOON
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
}`,Hw=`uniform float size;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,kw=`#include <common>
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
}`,Ww=`uniform vec3 color;
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
}`,Xw=`uniform float rotation;
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
}`,qw=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:_y,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:xy,aomap_fragment:My,aomap_pars_fragment:Ey,batching_pars_vertex:Sy,batching_vertex:yy,begin_vertex:Ty,beginnormal_vertex:wy,bsdfs:Ay,iridescence_fragment:by,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Py,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Ny,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:By,defaultnormal_vertex:zy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Hy,emissivemap_fragment:Vy,emissivemap_pars_fragment:ky,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:qy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:Zy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:oT,envmap_vertex:$y,fog_vertex:Jy,fog_pars_vertex:jy,fog_fragment:Qy,fog_pars_fragment:tT,gradientmap_pars_fragment:eT,lightmap_pars_fragment:nT,lights_lambert_fragment:iT,lights_lambert_pars_fragment:rT,lights_pars_begin:sT,lights_toon_fragment:aT,lights_toon_pars_fragment:lT,lights_phong_fragment:cT,lights_phong_pars_fragment:uT,lights_physical_fragment:hT,lights_physical_pars_fragment:fT,lights_fragment_begin:dT,lights_fragment_maps:pT,lights_fragment_end:mT,logdepthbuf_fragment:_T,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:vT,logdepthbuf_vertex:xT,map_fragment:MT,map_pars_fragment:ET,map_particle_fragment:ST,map_particle_pars_fragment:yT,metalnessmap_fragment:TT,metalnessmap_pars_fragment:wT,morphinstance_vertex:AT,morphcolor_vertex:bT,morphnormal_vertex:RT,morphtarget_pars_vertex:CT,morphtarget_vertex:LT,normal_fragment_begin:IT,normal_fragment_maps:PT,normal_pars_fragment:DT,normal_pars_vertex:UT,normal_vertex:NT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:BT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:GT,opaque_fragment:HT,packing:VT,premultiplied_alpha_fragment:kT,project_vertex:WT,dithering_fragment:XT,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:$T,shadowmap_vertex:JT,shadowmask_pars_fragment:jT,skinbase_vertex:QT,skinning_pars_vertex:tw,skinning_vertex:ew,skinnormal_vertex:nw,specularmap_fragment:iw,specularmap_pars_fragment:rw,tonemapping_fragment:sw,tonemapping_pars_fragment:ow,transmission_fragment:aw,transmission_pars_fragment:lw,uv_pars_fragment:cw,uv_pars_vertex:uw,uv_vertex:hw,worldpos_vertex:fw,background_vert:dw,background_frag:pw,backgroundCube_vert:mw,backgroundCube_frag:_w,cube_vert:gw,cube_frag:vw,depth_vert:xw,depth_frag:Mw,distanceRGBA_vert:Ew,distanceRGBA_frag:Sw,equirect_vert:yw,equirect_frag:Tw,linedashed_vert:ww,linedashed_frag:Aw,meshbasic_vert:bw,meshbasic_frag:Rw,meshlambert_vert:Cw,meshlambert_frag:Lw,meshmatcap_vert:Iw,meshmatcap_frag:Pw,meshnormal_vert:Dw,meshnormal_frag:Uw,meshphong_vert:Nw,meshphong_frag:Fw,meshphysical_vert:Ow,meshphysical_frag:Bw,meshtoon_vert:zw,meshtoon_frag:Gw,points_vert:Hw,points_frag:Vw,shadow_vert:kw,shadow_frag:Ww,sprite_vert:Xw,sprite_frag:qw},St={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Si={basic:{uniforms:Cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ct(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Cn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Cn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ct(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Cn([St.points,St.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Cn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Cn([St.common,St.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Cn([St.sprite,St.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Cn([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Cn([St.lights,St.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Si.physical={uniforms:Cn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Xa={r:0,b:0,g:0},Ir=new wi,Yw=new Xe;function Zw(r,t,e,i,o,a,c){const u=new ct(0);let h=a===!0?0:1,f,p,_=null,g=0,x=null;function E(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?e:t).get(b)),b}function T(L){let b=!1;const B=E(L);B===null?m(u,h):B&&B.isColor&&(m(B,1),b=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(L,b){const B=E(b);B&&(B.isCubeTexture||B.mapping===fl)?(p===void 0&&(p=new mn(new Hr(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Os(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),Ir.copy(b.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(Ir)),p.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Ue,(_!==B||g!==B.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,_=B,g=B.version,x=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new mn(new ml(2,2),new mr({name:"BackgroundMaterial",uniforms:Os(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=Ae.getTransfer(B.colorSpace)!==Ue,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||g!==B.version||x!==r.toneMapping)&&(f.material.needsUpdate=!0,_=B,g=B.version,x=r.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function m(L,b){L.getRGB(Xa,vm(r)),i.buffers.color.setClear(Xa.r,Xa.g,Xa.b,b,c)}function I(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,b=1){u.set(L),h=b,m(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,m(u,h)},render:T,addToRenderList:v,dispose:I}}function Kw(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},o=g(null);let a=o,c=!1;function u(w,H,j,$,it){let ht=!1;const nt=_($,j,H);a!==nt&&(a=nt,f(a.object)),ht=x(w,$,j,it),ht&&E(w,$,j,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(ht||c)&&(c=!1,b(w,H,j,$),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function h(){return r.createVertexArray()}function f(w){return r.bindVertexArray(w)}function p(w){return r.deleteVertexArray(w)}function _(w,H,j){const $=j.wireframe===!0;let it=i[w.id];it===void 0&&(it={},i[w.id]=it);let ht=it[H.id];ht===void 0&&(ht={},it[H.id]=ht);let nt=ht[$];return nt===void 0&&(nt=g(h()),ht[$]=nt),nt}function g(w){const H=[],j=[],$=[];for(let it=0;it<e;it++)H[it]=0,j[it]=0,$[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:$,object:w,attributes:{},index:null}}function x(w,H,j,$){const it=a.attributes,ht=H.attributes;let nt=0;const pt=j.getAttributes();for(const Q in pt)if(pt[Q].location>=0){const It=it[Q];let Bt=ht[Q];if(Bt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(Bt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(Bt=w.instanceColor)),It===void 0||It.attribute!==Bt||Bt&&It.data!==Bt.data)return!0;nt++}return a.attributesNum!==nt||a.index!==$}function E(w,H,j,$){const it={},ht=H.attributes;let nt=0;const pt=j.getAttributes();for(const Q in pt)if(pt[Q].location>=0){let It=ht[Q];It===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(It=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(It=w.instanceColor));const Bt={};Bt.attribute=It,It&&It.data&&(Bt.data=It.data),it[Q]=Bt,nt++}a.attributes=it,a.attributesNum=nt,a.index=$}function T(){const w=a.newAttributes;for(let H=0,j=w.length;H<j;H++)w[H]=0}function v(w){m(w,0)}function m(w,H){const j=a.newAttributes,$=a.enabledAttributes,it=a.attributeDivisors;j[w]=1,$[w]===0&&(r.enableVertexAttribArray(w),$[w]=1),it[w]!==H&&(r.vertexAttribDivisor(w,H),it[w]=H)}function I(){const w=a.newAttributes,H=a.enabledAttributes;for(let j=0,$=H.length;j<$;j++)H[j]!==w[j]&&(r.disableVertexAttribArray(j),H[j]=0)}function L(w,H,j,$,it,ht,nt){nt===!0?r.vertexAttribIPointer(w,H,j,it,ht):r.vertexAttribPointer(w,H,j,$,it,ht)}function b(w,H,j,$){T();const it=$.attributes,ht=j.getAttributes(),nt=H.defaultAttributeValues;for(const pt in ht){const Q=ht[pt];if(Q.location>=0){let bt=it[pt];if(bt===void 0&&(pt==="instanceMatrix"&&w.instanceMatrix&&(bt=w.instanceMatrix),pt==="instanceColor"&&w.instanceColor&&(bt=w.instanceColor)),bt!==void 0){const It=bt.normalized,Bt=bt.itemSize,he=t.get(bt);if(he===void 0)continue;const Le=he.buffer,at=he.type,gt=he.bytesPerElement,zt=at===r.INT||at===r.UNSIGNED_INT||bt.gpuType===nh;if(bt.isInterleavedBufferAttribute){const Rt=bt.data,Xt=Rt.stride,pe=bt.offset;if(Rt.isInstancedInterleavedBuffer){for(let jt=0;jt<Q.locationSize;jt++)m(Q.location+jt,Rt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let jt=0;jt<Q.locationSize;jt++)v(Q.location+jt);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let jt=0;jt<Q.locationSize;jt++)L(Q.location+jt,Bt/Q.locationSize,at,It,Xt*gt,(pe+Bt/Q.locationSize*jt)*gt,zt)}else{if(bt.isInstancedBufferAttribute){for(let Rt=0;Rt<Q.locationSize;Rt++)m(Q.location+Rt,bt.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Rt=0;Rt<Q.locationSize;Rt++)v(Q.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Rt=0;Rt<Q.locationSize;Rt++)L(Q.location+Rt,Bt/Q.locationSize,at,It,Bt*gt,Bt/Q.locationSize*Rt*gt,zt)}}else if(nt!==void 0){const It=nt[pt];if(It!==void 0)switch(It.length){case 2:r.vertexAttrib2fv(Q.location,It);break;case 3:r.vertexAttrib3fv(Q.location,It);break;case 4:r.vertexAttrib4fv(Q.location,It);break;default:r.vertexAttrib1fv(Q.location,It)}}}}I()}function B(){z();for(const w in i){const H=i[w];for(const j in H){const $=H[j];for(const it in $)p($[it].object),delete $[it];delete H[j]}delete i[w]}}function N(w){if(i[w.id]===void 0)return;const H=i[w.id];for(const j in H){const $=H[j];for(const it in $)p($[it].object),delete $[it];delete H[j]}delete i[w.id]}function F(w){for(const H in i){const j=i[H];if(j[w.id]===void 0)continue;const $=j[w.id];for(const it in $)p($[it].object),delete $[it];delete j[w.id]}}function z(){C(),c=!0,a!==o&&(a=o,f(a.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:z,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:v,disableUnusedAttributes:I}}function $w(r,t,e){let i;function o(f){i=f}function a(f,p){r.drawArrays(i,f,p),e.update(p,i,1)}function c(f,p,_){_!==0&&(r.drawArraysInstanced(i,f,p,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,_);let x=0;for(let E=0;E<_;E++)x+=p[E];e.update(x,i,1)}function h(f,p,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<f.length;E++)c(f[E],p[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(i,f,0,p,0,g,0,_);let E=0;for(let T=0;T<_;T++)E+=p[T]*g[T];e.update(E,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Jw(r,t,e,i){let o;function a(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==_i&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const z=F===Ao&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==qi&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!z)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=h(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const _=e.logarithmicDepthBuffer===!0,g=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:B,maxSamples:N}}function jw(r){const t=this;let e=null,i=0,o=!1,a=!1;const c=new Dr,u=new le,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||o;return o=g,i=_.length,x},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){e=p(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,T=_.clipIntersection,v=_.clipShadows,m=r.get(_);if(!o||E===null||E.length===0||a&&!v)a?p(null):f();else{const I=a?0:i,L=I*4;let b=m.clippingState||null;h.value=b,b=p(E,g,L,x);for(let B=0;B!==L;++B)b[B]=e[B];m.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(_,g,x,E){const T=_!==null?_.length:0;let v=null;if(T!==0){if(v=h.value,E!==!0||v===null){const m=x+T*4,I=g.matrixWorldInverse;u.getNormalMatrix(I),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,b=x;L!==T;++L,b+=4)c.copy(_[L]).applyMatrix4(I,u),c.normal.toArray(v,b),v[b+3]=c.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,v}}function Qw(r){let t=new WeakMap;function e(c,u){return u===vu?c.mapping=Ps:u===xu&&(c.mapping=Ds),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===vu||u===xu)if(t.has(c)){const h=t.get(c).texture;return e(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new YS(h.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",o),e(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}const ws=4,_p=[.125,.215,.35,.446,.526,.582],Fr=20,nu=new cy,gp=new ct;let iu=null,ru=0,su=0,ou=!1;const Ur=(1+Math.sqrt(5))/2,ys=1/Ur,vp=[new D(-Ur,ys,0),new D(Ur,ys,0),new D(-ys,0,Ur),new D(ys,0,Ur),new D(0,Ur,-ys),new D(0,Ur,ys),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class xp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(iu,ru,su),this._renderer.xr.enabled=ou,t.scissorTest=!1,qa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ou=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:Ao,format:_i,colorSpace:Fs,depthBuffer:!1},o=Mp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tA(a)),this._blurMaterial=eA(a,t,e)}return o}_compileMaterial(t){const e=new mn(this._lodPlanes[0],t);this._renderer.compile(e,nu)}_sceneToCubeUV(t,e,i,o){const u=new Zn(90,1,e,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(gp),p.toneMapping=fr,p.autoClear=!1;const x=new ri({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),E=new mn(new Hr,x);let T=!1;const v=t.background;v?v.isColor&&(x.color.copy(v),t.background=null,T=!0):(x.color.copy(gp),T=!0);for(let m=0;m<6;m++){const I=m%3;I===0?(u.up.set(0,h[m],0),u.lookAt(f[m],0,0)):I===1?(u.up.set(0,0,h[m]),u.lookAt(0,f[m],0)):(u.up.set(0,h[m],0),u.lookAt(0,0,f[m]));const L=this._cubeSize;qa(o,I*L,m>2?L:0,L,L),p.setRenderTarget(o),T&&p.render(E,u),p.render(t,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=_,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===Ps||t.mapping===Ds;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ep());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new mn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=t;const h=this._cubeSize;qa(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(c,nu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=vp[(o-a-1)%vp.length];this._blur(t,a-1,a,c,u)}e.autoClear=i}_blur(t,e,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,o,"latitudinal",a),this._halfBlur(c,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new mn(this._lodPlanes[o],f),g=f.uniforms,x=this._sizeLods[i]-1,E=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Fr-1),T=a/E,v=isFinite(a)?1+Math.floor(p*T):Fr;v>Fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Fr}`);const m=[];let I=0;for(let F=0;F<Fr;++F){const z=F/T,C=Math.exp(-z*z/2);m.push(C),F===0?I+=C:F<v&&(I+=2*C)}for(let F=0;F<m.length;F++)m[F]=m[F]/I;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-i;const b=this._sizeLods[o],B=3*b*(o>L-ws?o-L+ws:0),N=4*(this._cubeSize-b);qa(e,B,N,3*b,2*b),h.setRenderTarget(e),h.render(_,nu)}}function tA(r){const t=[],e=[],i=[];let o=r;const a=r-ws+1+_p.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let h=1/u;c>r-ws?h=_p[c-r+ws-1]:c===0&&(h=0),i.push(h);const f=1/(u-2),p=-f,_=1+f,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,E=6,T=3,v=2,m=1,I=new Float32Array(T*E*x),L=new Float32Array(v*E*x),b=new Float32Array(m*E*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,z=N>2?0:-1,C=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];I.set(C,T*E*N),L.set(g,v*E*N);const w=[N,N,N,N,N,N];b.set(w,m*E*N)}const B=new In;B.setAttribute("position",new vi(I,T)),B.setAttribute("uv",new vi(L,v)),B.setAttribute("faceIndex",new vi(b,m)),t.push(B),o>ws&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Mp(r,t,e){const i=new Gr(r,t,e);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(r,t,e,i,o){r.viewport.set(t,e,i,o),r.scissor.set(t,e,i,o)}function eA(r,t,e){const i=new Float32Array(Fr),o=new D(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_h(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ep(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Sp(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function _h(){return`

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
	`}function nA(r){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const h=u.mapping,f=h===vu||h===xu,p=h===Ps||h===Ds;if(f||p){let _=t.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return e===null&&(e=new xp(r)),_=f?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return f&&x&&x.height>0||p&&x&&o(x)?(e===null&&(e=new xp(r)),_=f?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",a),_.texture):null}}}return u}function o(u){let h=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&h++;return h===f}function a(u){const h=u.target;h.removeEventListener("dispose",a);const f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function iA(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const o=e(i);return o===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function rA(r,t,e,i){const o={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete o[g.id];const x=a.get(g);x&&(t.remove(x),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function u(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,e.memory.geometries++),g}function h(_){const g=_.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function f(_){const g=[],x=_.index,E=_.attributes.position;let T=0;if(x!==null){const I=x.array;T=x.version;for(let L=0,b=I.length;L<b;L+=3){const B=I[L+0],N=I[L+1],F=I[L+2];g.push(B,N,N,F,F,B)}}else if(E!==void 0){const I=E.array;T=E.version;for(let L=0,b=I.length/3-1;L<b;L+=3){const B=L+0,N=L+1,F=L+2;g.push(B,N,N,F,F,B)}}else return;const v=new(um(g)?gm:_m)(g,1);v.version=T;const m=a.get(_);m&&t.remove(m),a.set(_,v)}function p(_){const g=a.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&f(_)}else f(_);return a.get(_)}return{get:u,update:h,getWireframeAttribute:p}}function sA(r,t,e){let i;function o(g){i=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function h(g,x){r.drawElements(i,x,a,g*c),e.update(x,i,1)}function f(g,x,E){E!==0&&(r.drawElementsInstanced(i,x,a,g*c,E),e.update(x,i,E))}function p(g,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,g,0,E);let v=0;for(let m=0;m<E;m++)v+=x[m];e.update(v,i,1)}function _(g,x,E,T){if(E===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)f(g[m]/c,x[m],T[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,a,g,0,T,0,E);let m=0;for(let I=0;I<E;I++)m+=x[I]*T[I];e.update(m,i,1)}}this.setMode=o,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function oA(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(a/3);break;case r.LINES:e.lines+=u*(a/2);break;case r.LINE_STRIP:e.lines+=u*(a-1);break;case r.LINE_LOOP:e.lines+=u*a;break;case r.POINTS:e.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function aA(r,t,e){const i=new WeakMap,o=new Fe;function a(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let w=function(){z.dispose(),i.delete(u),u.removeEventListener("dispose",w)};var x=w;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),v===!0&&(b=3);let B=u.attributes.position.count*b,N=1;B>t.maxTextureSize&&(N=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*N*4*_),z=new fm(F,B,N,_);z.type=ki,z.needsUpdate=!0;const C=b*4;for(let H=0;H<_;H++){const j=m[H],$=I[H],it=L[H],ht=B*N*4*H;for(let nt=0;nt<j.count;nt++){const pt=nt*C;E===!0&&(o.fromBufferAttribute(j,nt),F[ht+pt+0]=o.x,F[ht+pt+1]=o.y,F[ht+pt+2]=o.z,F[ht+pt+3]=0),T===!0&&(o.fromBufferAttribute($,nt),F[ht+pt+4]=o.x,F[ht+pt+5]=o.y,F[ht+pt+6]=o.z,F[ht+pt+7]=0),v===!0&&(o.fromBufferAttribute(it,nt),F[ht+pt+8]=o.x,F[ht+pt+9]=o.y,F[ht+pt+10]=o.z,F[ht+pt+11]=it.itemSize===4?o.w:1)}}g={count:_,texture:z,size:new yt(B,N)},i.set(u,g),u.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let E=0;for(let v=0;v<f.length;v++)E+=f[v];const T=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:a}}function lA(r,t,e,i){let o=new WeakMap;function a(h){const f=i.render.frame,p=h.geometry,_=t.get(h,p);if(o.get(_)!==f&&(t.update(_),o.set(_,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),o.get(h)!==f&&(e.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const g=h.skeleton;o.get(g)!==f&&(g.update(),o.set(g,f))}return _}function c(){o=new WeakMap}function u(h){const f=h.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:c}}const bm=new Ln,yp=new ym(1,1),Rm=new fm,Cm=new LS,Lm=new Mm,Tp=[],wp=[],Ap=new Float32Array(16),bp=new Float32Array(9),Rp=new Float32Array(4);function zs(r,t,e){const i=r[0];if(i<=0||i>0)return r;const o=t*e;let a=Tp[o];if(a===void 0&&(a=new Float32Array(o),Tp[o]=a),t!==0){i.toArray(a,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(a,u)}return a}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function _l(r,t){let e=wp[t];e===void 0&&(e=new Int32Array(t),wp[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function cA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function uA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function hA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function fA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function dA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Rp.set(i),r.uniformMatrix2fv(this.addr,!1,Rp),on(e,i)}}function pA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;bp.set(i),r.uniformMatrix3fv(this.addr,!1,bp),on(e,i)}}function mA(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,i))return;Ap.set(i),r.uniformMatrix4fv(this.addr,!1,Ap),on(e,i)}}function _A(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function vA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function xA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function MA(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function EA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function SA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function yA(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function TA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=cm,a=yp):a=bm,e.setTexture2D(t||a,o)}function wA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Cm,o)}function AA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Lm,o)}function bA(r,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Rm,o)}function RA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return hA;case 35666:return fA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return _A;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return MA;case 36294:return EA;case 36295:return SA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return bA}}function CA(r,t){r.uniform1fv(this.addr,t)}function LA(r,t){const e=zs(t,this.size,2);r.uniform2fv(this.addr,e)}function IA(r,t){const e=zs(t,this.size,3);r.uniform3fv(this.addr,e)}function PA(r,t){const e=zs(t,this.size,4);r.uniform4fv(this.addr,e)}function DA(r,t){const e=zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function UA(r,t){const e=zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function NA(r,t){const e=zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function FA(r,t){r.uniform1iv(this.addr,t)}function OA(r,t){r.uniform2iv(this.addr,t)}function BA(r,t){r.uniform3iv(this.addr,t)}function zA(r,t){r.uniform4iv(this.addr,t)}function GA(r,t){r.uniform1uiv(this.addr,t)}function HA(r,t){r.uniform2uiv(this.addr,t)}function VA(r,t){r.uniform3uiv(this.addr,t)}function kA(r,t){r.uniform4uiv(this.addr,t)}function WA(r,t,e){const i=this.cache,o=t.length,a=_l(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture2D(t[c]||bm,a[c])}function XA(r,t,e){const i=this.cache,o=t.length,a=_l(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture3D(t[c]||Cm,a[c])}function qA(r,t,e){const i=this.cache,o=t.length,a=_l(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTextureCube(t[c]||Lm,a[c])}function YA(r,t,e){const i=this.cache,o=t.length,a=_l(e,o);sn(i,a)||(r.uniform1iv(this.addr,a),on(i,a));for(let c=0;c!==o;++c)e.setTexture2DArray(t[c]||Rm,a[c])}function ZA(r){switch(r){case 5126:return CA;case 35664:return LA;case 35665:return IA;case 35666:return PA;case 35674:return DA;case 35675:return UA;case 35676:return NA;case 5124:case 35670:return FA;case 35667:case 35671:return OA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return GA;case 36294:return HA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class KA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=RA(e.type)}}class $A{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ZA(e.type)}}class JA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(t,e[u.id],i)}}}const au=/(\w+)(\])?(\[|\.)?/g;function Cp(r,t){r.seq.push(t),r.map[t.id]=t}function jA(r,t,e){const i=r.name,o=i.length;for(au.lastIndex=0;;){const a=au.exec(i),c=au.lastIndex;let u=a[1];const h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===o){Cp(e,f===void 0?new KA(u,r,t):new $A(u,r,t));break}else{let _=e.map[u];_===void 0&&(_=new JA(u),Cp(e,_)),e=_}}}class nl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);jA(a,c,this)}}setValue(t,e,i,o){const a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,c=e.length;a!==c;++a){const u=e[a],h=i[u.id];h.needsUpdate!==!1&&u.setValue(t,h.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,a=t.length;o!==a;++o){const c=t[o];c.id in e&&i.push(c)}return i}}function Lp(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const QA=37297;let tb=0;function eb(r,t){const e=r.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const Ip=new le;function nb(r){Ae._getMatrix(Ip,Ae.workingColorSpace,r);const t=`mat3( ${Ip.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(r)){case il:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Pp(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),o=r.getShaderInfoLog(t).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+eb(r.getShaderSource(t),c)}else return o}function ib(r,t){const e=nb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rb(r,t){let e;switch(t){case nS:e="Linear";break;case iS:e="Reinhard";break;case rS:e="Cineon";break;case sS:e="ACESFilmic";break;case aS:e="AgX";break;case lS:e="Neutral";break;case oS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ya=new D;function sb(){Ae.getLuminanceCoefficients(Ya);const r=Ya.x.toFixed(4),t=Ya.y.toFixed(4),e=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function ab(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lb(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(t,o),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),e[c]={type:a.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function xo(r){return r!==""}function Dp(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Up(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(r){return r.replace(cb,hb)}const ub=new Map;function hb(r,t){let e=ue[t];if(e===void 0){const i=ub.get(t);if(i!==void 0)e=ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ju(e)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(r){return r.replace(fb,db)}function db(r,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Fp(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function pb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===NE?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(t="SHADOWMAP_TYPE_VSM"),t}function mb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ps:case Ds:t="ENVMAP_TYPE_CUBE";break;case fl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _b(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function gb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $p:t="ENVMAP_BLENDING_MULTIPLY";break;case tS:t="ENVMAP_BLENDING_MIX";break;case eS:t="ENVMAP_BLENDING_ADD";break}return t}function vb(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function xb(r,t,e,i){const o=r.getContext(),a=e.defines;let c=e.vertexShader,u=e.fragmentShader;const h=pb(e),f=mb(e),p=_b(e),_=gb(e),g=vb(e),x=ob(e),E=ab(a),T=o.createProgram();let v,m,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(xo).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(xo).join(`
`),m.length>0&&(m+=`
`)):(v=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),m=[Fp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?ue.tonemapping_pars_fragment:"",e.toneMapping!==fr?rb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,ib("linearToOutputTexel",e.outputColorSpace),sb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xo).join(`
`)),c=Ju(c),c=Dp(c,e),c=Up(c,e),u=Ju(u),u=Dp(u,e),u=Up(u,e),c=Np(c),u=Np(u),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=I+v+c,b=I+m+u,B=Lp(o,o.VERTEX_SHADER,L),N=Lp(o,o.FRAGMENT_SHADER,b);o.attachShader(T,B),o.attachShader(T,N),e.index0AttributeName!==void 0?o.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(H){if(r.debug.checkShaderErrors){const j=o.getProgramInfoLog(T).trim(),$=o.getShaderInfoLog(B).trim(),it=o.getShaderInfoLog(N).trim();let ht=!0,nt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,B,N);else{const pt=Pp(o,B,"vertex"),Q=Pp(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+pt+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||it==="")&&(nt=!1);nt&&(H.diagnostics={runnable:ht,programLog:j,vertexShader:{log:$,prefix:v},fragmentShader:{log:it,prefix:m}})}o.deleteShader(B),o.deleteShader(N),z=new nl(o,T),C=lb(o,T)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,QA)),w},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tb++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=N,this}let Mb=0;class Eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Sb(t),e.set(t,i)),i}}class Sb{constructor(t){this.id=Mb++,this.code=t,this.usedTimes=0}}function yb(r,t,e,i,o,a,c){const u=new pm,h=new Eb,f=new Set,p=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return f.add(C),C===0?"uv":`uv${C}`}function v(C,w,H,j,$){const it=j.fog,ht=$.geometry,nt=C.isMeshStandardMaterial?j.environment:null,pt=(C.isMeshStandardMaterial?e:t).get(C.envMap||nt),Q=pt&&pt.mapping===fl?pt.image.height:null,bt=E[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const It=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Bt=It!==void 0?It.length:0;let he=0;ht.morphAttributes.position!==void 0&&(he=1),ht.morphAttributes.normal!==void 0&&(he=2),ht.morphAttributes.color!==void 0&&(he=3);let Le,at,gt,zt;if(bt){const be=Si[bt];Le=be.vertexShader,at=be.fragmentShader}else Le=C.vertexShader,at=C.fragmentShader,h.update(C),gt=h.getVertexShaderID(C),zt=h.getFragmentShaderID(C);const Rt=r.getRenderTarget(),Xt=r.state.buffers.depth.getReversed(),pe=$.isInstancedMesh===!0,jt=$.isBatchedMesh===!0,Ge=!!C.map,Pe=!!C.matcap,me=!!pt,O=!!C.aoMap,an=!!C.lightMap,ve=!!C.bumpMap,ee=!!C.normalMap,kt=!!C.displacementMap,Oe=!!C.emissiveMap,Ht=!!C.metalnessMap,P=!!C.roughnessMap,S=C.anisotropy>0,Y=C.clearcoat>0,ut=C.dispersion>0,ft=C.iridescence>0,st=C.sheen>0,Gt=C.transmission>0,Mt=S&&!!C.anisotropyMap,Pt=Y&&!!C.clearcoatMap,_e=Y&&!!C.clearcoatNormalMap,_t=Y&&!!C.clearcoatRoughnessMap,Ut=ft&&!!C.iridescenceMap,Yt=ft&&!!C.iridescenceThicknessMap,Jt=st&&!!C.sheenColorMap,Nt=st&&!!C.sheenRoughnessMap,de=!!C.specularMap,ne=!!C.specularColorMap,De=!!C.specularIntensityMap,V=Gt&&!!C.transmissionMap,Tt=Gt&&!!C.thicknessMap,tt=!!C.gradientMap,lt=!!C.alphaMap,Lt=C.alphaTest>0,Ct=!!C.alphaHash,re=!!C.extensions;let qe=fr;C.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(qe=r.toneMapping);const tn={shaderID:bt,shaderType:C.type,shaderName:C.name,vertexShader:Le,fragmentShader:at,defines:C.defines,customVertexShaderID:gt,customFragmentShaderID:zt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:jt,batchingColor:jt&&$._colorsTexture!==null,instancing:pe,instancingColor:pe&&$.instanceColor!==null,instancingMorph:pe&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Rt===null?r.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Fs,alphaToCoverage:!!C.alphaToCoverage,map:Ge,matcap:Pe,envMap:me,envMapMode:me&&pt.mapping,envMapCubeUVHeight:Q,aoMap:O,lightMap:an,bumpMap:ve,normalMap:ee,displacementMap:g&&kt,emissiveMap:Oe,normalMapObjectSpace:ee&&C.normalMapType===fS,normalMapTangentSpace:ee&&C.normalMapType===lm,metalnessMap:Ht,roughnessMap:P,anisotropy:S,anisotropyMap:Mt,clearcoat:Y,clearcoatMap:Pt,clearcoatNormalMap:_e,clearcoatRoughnessMap:_t,dispersion:ut,iridescence:ft,iridescenceMap:Ut,iridescenceThicknessMap:Yt,sheen:st,sheenColorMap:Jt,sheenRoughnessMap:Nt,specularMap:de,specularColorMap:ne,specularIntensityMap:De,transmission:Gt,transmissionMap:V,thicknessMap:Tt,gradientMap:tt,opaque:C.transparent===!1&&C.blending===bs&&C.alphaToCoverage===!1,alphaMap:lt,alphaTest:Lt,alphaHash:Ct,combine:C.combine,mapUv:Ge&&T(C.map.channel),aoMapUv:O&&T(C.aoMap.channel),lightMapUv:an&&T(C.lightMap.channel),bumpMapUv:ve&&T(C.bumpMap.channel),normalMapUv:ee&&T(C.normalMap.channel),displacementMapUv:kt&&T(C.displacementMap.channel),emissiveMapUv:Oe&&T(C.emissiveMap.channel),metalnessMapUv:Ht&&T(C.metalnessMap.channel),roughnessMapUv:P&&T(C.roughnessMap.channel),anisotropyMapUv:Mt&&T(C.anisotropyMap.channel),clearcoatMapUv:Pt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&T(C.sheenRoughnessMap.channel),specularMapUv:de&&T(C.specularMap.channel),specularColorMapUv:ne&&T(C.specularColorMap.channel),specularIntensityMapUv:De&&T(C.specularIntensityMap.channel),transmissionMapUv:V&&T(C.transmissionMap.channel),thicknessMapUv:Tt&&T(C.thicknessMap.channel),alphaMapUv:lt&&T(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ee||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ht.attributes.uv&&(Ge||lt),fog:!!it,useFog:C.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Xt,skinning:$.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Ue,decodeVideoTextureEmissive:Oe&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Ue,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Vi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:re&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&C.extensions.multiDraw===!0||jt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=f.has(1),tn.vertexUv2s=f.has(2),tn.vertexUv3s=f.has(3),f.clear(),tn}function m(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)w.push(H),w.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(I(w,C),L(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function I(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){u.disableAll(),w.supportsVertexTextures&&u.enable(0),w.instancing&&u.enable(1),w.instancingColor&&u.enable(2),w.instancingMorph&&u.enable(3),w.matcap&&u.enable(4),w.envMap&&u.enable(5),w.normalMapObjectSpace&&u.enable(6),w.normalMapTangentSpace&&u.enable(7),w.clearcoat&&u.enable(8),w.iridescence&&u.enable(9),w.alphaTest&&u.enable(10),w.vertexColors&&u.enable(11),w.vertexAlphas&&u.enable(12),w.vertexUv1s&&u.enable(13),w.vertexUv2s&&u.enable(14),w.vertexUv3s&&u.enable(15),w.vertexTangents&&u.enable(16),w.anisotropy&&u.enable(17),w.alphaHash&&u.enable(18),w.batching&&u.enable(19),w.dispersion&&u.enable(20),w.batchingColor&&u.enable(21),C.push(u.mask),u.disableAll(),w.fog&&u.enable(0),w.useFog&&u.enable(1),w.flatShading&&u.enable(2),w.logarithmicDepthBuffer&&u.enable(3),w.reverseDepthBuffer&&u.enable(4),w.skinning&&u.enable(5),w.morphTargets&&u.enable(6),w.morphNormals&&u.enable(7),w.morphColors&&u.enable(8),w.premultipliedAlpha&&u.enable(9),w.shadowMapEnabled&&u.enable(10),w.doubleSided&&u.enable(11),w.flipSided&&u.enable(12),w.useDepthPacking&&u.enable(13),w.dithering&&u.enable(14),w.transmission&&u.enable(15),w.sheen&&u.enable(16),w.opaque&&u.enable(17),w.pointsUvs&&u.enable(18),w.decodeVideoTexture&&u.enable(19),w.decodeVideoTextureEmissive&&u.enable(20),w.alphaToCoverage&&u.enable(21),C.push(u.mask)}function b(C){const w=E[C.type];let H;if(w){const j=Si[w];H=kS.clone(j.uniforms)}else H=C.uniforms;return H}function B(C,w){let H;for(let j=0,$=p.length;j<$;j++){const it=p[j];if(it.cacheKey===w){H=it,++H.usedTimes;break}}return H===void 0&&(H=new xb(r,w,C,a),p.push(H)),H}function N(C){if(--C.usedTimes===0){const w=p.indexOf(C);p[w]=p[p.length-1],p.pop(),C.destroy()}}function F(C){h.remove(C)}function z(){h.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:B,releaseProgram:N,releaseShaderCache:F,programs:p,dispose:z}}function Tb(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function o(c,u,h){r.get(c)[u]=h}function a(){r=new WeakMap}return{has:t,get:e,remove:i,update:o,dispose:a}}function wb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Op(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Bp(){const r=[];let t=0;const e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function c(_,g,x,E,T,v){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:E,renderOrder:_.renderOrder,z:T,group:v},r[t]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=E,m.renderOrder=_.renderOrder,m.z=T,m.group=v),t++,m}function u(_,g,x,E,T,v){const m=c(_,g,x,E,T,v);x.transmission>0?i.push(m):x.transparent===!0?o.push(m):e.push(m)}function h(_,g,x,E,T,v){const m=c(_,g,x,E,T,v);x.transmission>0?i.unshift(m):x.transparent===!0?o.unshift(m):e.unshift(m)}function f(_,g){e.length>1&&e.sort(_||wb),i.length>1&&i.sort(g||Op),o.length>1&&o.sort(g||Op)}function p(){for(let _=t,g=r.length;_<g;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:u,unshift:h,finish:p,sort:f}}function Ab(){let r=new WeakMap;function t(i,o){const a=r.get(i);let c;return a===void 0?(c=new Bp,r.set(i,[c])):o>=a.length?(c=new Bp,a.push(c)):c=a[o],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function bb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ct};break;case"SpotLight":e={position:new D,direction:new D,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Rb(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Cb=0;function Lb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ib(r){const t=new bb,e=Rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new D);const o=new D,a=new Xe,c=new Xe;function u(f){let p=0,_=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,E=0,T=0,v=0,m=0,I=0,L=0,b=0,B=0,N=0,F=0;f.sort(Lb);for(let C=0,w=f.length;C<w;C++){const H=f[C],j=H.color,$=H.intensity,it=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)p+=j.r*$,_+=j.g*$,g+=j.b*$;else if(H.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(H.sh.coefficients[nt],$);F++}else if(H.isDirectionalLight){const nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const pt=H.shadow,Q=e.get(H);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,i.directionalShadow[x]=Q,i.directionalShadowMap[x]=ht,i.directionalShadowMatrix[x]=H.shadow.matrix,I++}i.directional[x]=nt,x++}else if(H.isSpotLight){const nt=t.get(H);nt.position.setFromMatrixPosition(H.matrixWorld),nt.color.copy(j).multiplyScalar($),nt.distance=it,nt.coneCos=Math.cos(H.angle),nt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),nt.decay=H.decay,i.spot[T]=nt;const pt=H.shadow;if(H.map&&(i.spotLightMap[B]=H.map,B++,pt.updateMatrices(H),H.castShadow&&N++),i.spotLightMatrix[T]=pt.matrix,H.castShadow){const Q=e.get(H);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,i.spotShadow[T]=Q,i.spotShadowMap[T]=ht,b++}T++}else if(H.isRectAreaLight){const nt=t.get(H);nt.color.copy(j).multiplyScalar($),nt.halfWidth.set(H.width*.5,0,0),nt.halfHeight.set(0,H.height*.5,0),i.rectArea[v]=nt,v++}else if(H.isPointLight){const nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),nt.distance=H.distance,nt.decay=H.decay,H.castShadow){const pt=H.shadow,Q=e.get(H);Q.shadowIntensity=pt.intensity,Q.shadowBias=pt.bias,Q.shadowNormalBias=pt.normalBias,Q.shadowRadius=pt.radius,Q.shadowMapSize=pt.mapSize,Q.shadowCameraNear=pt.camera.near,Q.shadowCameraFar=pt.camera.far,i.pointShadow[E]=Q,i.pointShadowMap[E]=ht,i.pointShadowMatrix[E]=H.shadow.matrix,L++}i.point[E]=nt,E++}else if(H.isHemisphereLight){const nt=t.get(H);nt.skyColor.copy(H.color).multiplyScalar($),nt.groundColor.copy(H.groundColor).multiplyScalar($),i.hemi[m]=nt,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==x||z.pointLength!==E||z.spotLength!==T||z.rectAreaLength!==v||z.hemiLength!==m||z.numDirectionalShadows!==I||z.numPointShadows!==L||z.numSpotShadows!==b||z.numSpotMaps!==B||z.numLightProbes!==F)&&(i.directional.length=x,i.spot.length=T,i.rectArea.length=v,i.point.length=E,i.hemi.length=m,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=b+B-N,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,z.directionalLength=x,z.pointLength=E,z.spotLength=T,z.rectAreaLength=v,z.hemiLength=m,z.numDirectionalShadows=I,z.numPointShadows=L,z.numSpotShadows=b,z.numSpotMaps=B,z.numLightProbes=F,i.version=Cb++)}function h(f,p){let _=0,g=0,x=0,E=0,T=0;const v=p.matrixWorldInverse;for(let m=0,I=f.length;m<I;m++){const L=f[m];if(L.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),_++}else if(L.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const b=i.rectArea[E];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),c.identity(),a.copy(L.matrixWorld),a.premultiply(v),c.extractRotation(a),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const b=i.hemi[T];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(v),T++}}}return{setup:u,setupView:h,state:i}}function zp(r){const t=new Ib(r),e=[],i=[];function o(p){f.camera=p,e.length=0,i.length=0}function a(p){e.push(p)}function c(p){i.push(p)}function u(){t.setup(e)}function h(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function Pb(r){let t=new WeakMap;function e(o,a=0){const c=t.get(o);let u;return c===void 0?(u=new zp(r),t.set(o,[u])):a>=c.length?(u=new zp(r),c.push(u)):u=c[a],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const Db=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
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
}`;function Nb(r,t,e){let i=new lh;const o=new yt,a=new yt,c=new Fe,u=new ey({depthPacking:hS}),h=new ny,f={},p=e.maxTextureSize,_={[pr]:Bn,[Bn]:pr,[Vi]:Vi},g=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Db,fragmentShader:Ub}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new In;E.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new mn(E,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kp;let m=this.type;this.render=function(N,F,z){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),j=r.state;j.setBlending(hr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const $=m!==Hi&&this.type===Hi,it=m===Hi&&this.type!==Hi;for(let ht=0,nt=N.length;ht<nt;ht++){const pt=N[ht],Q=pt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const bt=Q.getFrameExtents();if(o.multiply(bt),a.copy(Q.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/bt.x),o.x=a.x*bt.x,Q.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/bt.y),o.y=a.y*bt.y,Q.mapSize.y=a.y)),Q.map===null||$===!0||it===!0){const Bt=this.type!==Hi?{minFilter:gi,magFilter:gi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Gr(o.x,o.y,Bt),Q.map.texture.name=pt.name+".shadowMap",Q.camera.updateProjectionMatrix()}r.setRenderTarget(Q.map),r.clear();const It=Q.getViewportCount();for(let Bt=0;Bt<It;Bt++){const he=Q.getViewport(Bt);c.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),j.viewport(c),Q.updateMatrices(pt,Bt),i=Q.getFrustum(),b(F,z,Q.camera,pt,this.type)}Q.isPointLightShadow!==!0&&this.type===Hi&&I(Q,z),Q.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(C,w,H)};function I(N,F){const z=t.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Gr(o.x,o.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(F,null,z,g,T,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(F,null,z,x,T,null)}function L(N,F,z,C){let w=null;const H=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)w=H;else if(w=z.isPointLight===!0?h:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const j=w.uuid,$=F.uuid;let it=f[j];it===void 0&&(it={},f[j]=it);let ht=it[$];ht===void 0&&(ht=w.clone(),it[$]=ht,F.addEventListener("dispose",B)),w=ht}if(w.visible=F.visible,w.wireframe=F.wireframe,C===Hi?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:_[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=r.properties.get(w);j.light=z}return w}function b(N,F,z,C,w){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===Hi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const $=t.update(N),it=N.material;if(Array.isArray(it)){const ht=$.groups;for(let nt=0,pt=ht.length;nt<pt;nt++){const Q=ht[nt],bt=it[Q.materialIndex];if(bt&&bt.visible){const It=L(N,bt,C,w);N.onBeforeShadow(r,N,F,z,$,It,Q),r.renderBufferDirect(z,null,$,It,N,Q),N.onAfterShadow(r,N,F,z,$,It,Q)}}}else if(it.visible){const ht=L(N,it,C,w);N.onBeforeShadow(r,N,F,z,$,ht,null),r.renderBufferDirect(z,null,$,ht,N,null),N.onAfterShadow(r,N,F,z,$,ht,null)}}const j=N.children;for(let $=0,it=j.length;$<it;$++)b(j[$],F,z,C,w)}function B(N){N.target.removeEventListener("dispose",B);for(const z in f){const C=f[z],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const Fb={[hu]:fu,[du]:_u,[pu]:gu,[Is]:mu,[fu]:hu,[_u]:du,[gu]:pu,[mu]:Is};function Ob(r,t){function e(){let V=!1;const Tt=new Fe;let tt=null;const lt=new Fe(0,0,0,0);return{setMask:function(Lt){tt!==Lt&&!V&&(r.colorMask(Lt,Lt,Lt,Lt),tt=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,Ct,re,qe,tn){tn===!0&&(Lt*=qe,Ct*=qe,re*=qe),Tt.set(Lt,Ct,re,qe),lt.equals(Tt)===!1&&(r.clearColor(Lt,Ct,re,qe),lt.copy(Tt))},reset:function(){V=!1,tt=null,lt.set(-1,0,0,0)}}}function i(){let V=!1,Tt=!1,tt=null,lt=null,Lt=null;return{setReversed:function(Ct){if(Tt!==Ct){const re=t.get("EXT_clip_control");Tt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const qe=Lt;Lt=null,this.setClear(qe)}Tt=Ct},getReversed:function(){return Tt},setTest:function(Ct){Ct?Rt(r.DEPTH_TEST):Xt(r.DEPTH_TEST)},setMask:function(Ct){tt!==Ct&&!V&&(r.depthMask(Ct),tt=Ct)},setFunc:function(Ct){if(Tt&&(Ct=Fb[Ct]),lt!==Ct){switch(Ct){case hu:r.depthFunc(r.NEVER);break;case fu:r.depthFunc(r.ALWAYS);break;case du:r.depthFunc(r.LESS);break;case Is:r.depthFunc(r.LEQUAL);break;case pu:r.depthFunc(r.EQUAL);break;case mu:r.depthFunc(r.GEQUAL);break;case _u:r.depthFunc(r.GREATER);break;case gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){Lt!==Ct&&(Tt&&(Ct=1-Ct),r.clearDepth(Ct),Lt=Ct)},reset:function(){V=!1,tt=null,lt=null,Lt=null,Tt=!1}}}function o(){let V=!1,Tt=null,tt=null,lt=null,Lt=null,Ct=null,re=null,qe=null,tn=null;return{setTest:function(be){V||(be?Rt(r.STENCIL_TEST):Xt(r.STENCIL_TEST))},setMask:function(be){Tt!==be&&!V&&(r.stencilMask(be),Tt=be)},setFunc:function(be,zn,ai){(tt!==be||lt!==zn||Lt!==ai)&&(r.stencilFunc(be,zn,ai),tt=be,lt=zn,Lt=ai)},setOp:function(be,zn,ai){(Ct!==be||re!==zn||qe!==ai)&&(r.stencilOp(be,zn,ai),Ct=be,re=zn,qe=ai)},setLocked:function(be){V=be},setClear:function(be){tn!==be&&(r.clearStencil(be),tn=be)},reset:function(){V=!1,Tt=null,tt=null,lt=null,Lt=null,Ct=null,re=null,qe=null,tn=null}}}const a=new e,c=new i,u=new o,h=new WeakMap,f=new WeakMap;let p={},_={},g=new WeakMap,x=[],E=null,T=!1,v=null,m=null,I=null,L=null,b=null,B=null,N=null,F=new ct(0,0,0),z=0,C=!1,w=null,H=null,j=null,$=null,it=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,pt=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),nt=pt>=1):Q.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),nt=pt>=2);let bt=null,It={};const Bt=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Le=new Fe().fromArray(Bt),at=new Fe().fromArray(he);function gt(V,Tt,tt,lt){const Lt=new Uint8Array(4),Ct=r.createTexture();r.bindTexture(V,Ct),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<tt;re++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Tt+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Ct}const zt={};zt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),zt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),zt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Rt(r.DEPTH_TEST),c.setFunc(Is),ve(!1),ee(Ud),Rt(r.CULL_FACE),O(hr);function Rt(V){p[V]!==!0&&(r.enable(V),p[V]=!0)}function Xt(V){p[V]!==!1&&(r.disable(V),p[V]=!1)}function pe(V,Tt){return _[V]!==Tt?(r.bindFramebuffer(V,Tt),_[V]=Tt,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Tt),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function jt(V,Tt){let tt=x,lt=!1;if(V){tt=g.get(Tt),tt===void 0&&(tt=[],g.set(Tt,tt));const Lt=V.textures;if(tt.length!==Lt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let Ct=0,re=Lt.length;Ct<re;Ct++)tt[Ct]=r.COLOR_ATTACHMENT0+Ct;tt.length=Lt.length,lt=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,lt=!0);lt&&r.drawBuffers(tt)}function Ge(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const Pe={[Nr]:r.FUNC_ADD,[OE]:r.FUNC_SUBTRACT,[BE]:r.FUNC_REVERSE_SUBTRACT};Pe[zE]=r.MIN,Pe[GE]=r.MAX;const me={[HE]:r.ZERO,[VE]:r.ONE,[kE]:r.SRC_COLOR,[cu]:r.SRC_ALPHA,[KE]:r.SRC_ALPHA_SATURATE,[YE]:r.DST_COLOR,[XE]:r.DST_ALPHA,[WE]:r.ONE_MINUS_SRC_COLOR,[uu]:r.ONE_MINUS_SRC_ALPHA,[ZE]:r.ONE_MINUS_DST_COLOR,[qE]:r.ONE_MINUS_DST_ALPHA,[$E]:r.CONSTANT_COLOR,[JE]:r.ONE_MINUS_CONSTANT_COLOR,[jE]:r.CONSTANT_ALPHA,[QE]:r.ONE_MINUS_CONSTANT_ALPHA};function O(V,Tt,tt,lt,Lt,Ct,re,qe,tn,be){if(V===hr){T===!0&&(Xt(r.BLEND),T=!1);return}if(T===!1&&(Rt(r.BLEND),T=!0),V!==FE){if(V!==v||be!==C){if((m!==Nr||b!==Nr)&&(r.blendEquation(r.FUNC_ADD),m=Nr,b=Nr),be)switch(V){case bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.ONE,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Od:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,B=null,N=null,F.set(0,0,0),z=0,v=V,C=be}return}Lt=Lt||Tt,Ct=Ct||tt,re=re||lt,(Tt!==m||Lt!==b)&&(r.blendEquationSeparate(Pe[Tt],Pe[Lt]),m=Tt,b=Lt),(tt!==I||lt!==L||Ct!==B||re!==N)&&(r.blendFuncSeparate(me[tt],me[lt],me[Ct],me[re]),I=tt,L=lt,B=Ct,N=re),(qe.equals(F)===!1||tn!==z)&&(r.blendColor(qe.r,qe.g,qe.b,tn),F.copy(qe),z=tn),v=V,C=!1}function an(V,Tt){V.side===Vi?Xt(r.CULL_FACE):Rt(r.CULL_FACE);let tt=V.side===Bn;Tt&&(tt=!tt),ve(tt),V.blending===bs&&V.transparent===!1?O(hr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const lt=V.stencilWrite;u.setTest(lt),lt&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Oe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Rt(r.SAMPLE_ALPHA_TO_COVERAGE):Xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ve(V){w!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),w=V)}function ee(V){V!==DE?(Rt(r.CULL_FACE),V!==H&&(V===Ud?r.cullFace(r.BACK):V===UE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Xt(r.CULL_FACE),H=V}function kt(V){V!==j&&(nt&&r.lineWidth(V),j=V)}function Oe(V,Tt,tt){V?(Rt(r.POLYGON_OFFSET_FILL),($!==Tt||it!==tt)&&(r.polygonOffset(Tt,tt),$=Tt,it=tt)):Xt(r.POLYGON_OFFSET_FILL)}function Ht(V){V?Rt(r.SCISSOR_TEST):Xt(r.SCISSOR_TEST)}function P(V){V===void 0&&(V=r.TEXTURE0+ht-1),bt!==V&&(r.activeTexture(V),bt=V)}function S(V,Tt,tt){tt===void 0&&(bt===null?tt=r.TEXTURE0+ht-1:tt=bt);let lt=It[tt];lt===void 0&&(lt={type:void 0,texture:void 0},It[tt]=lt),(lt.type!==V||lt.texture!==Tt)&&(bt!==tt&&(r.activeTexture(tt),bt=tt),r.bindTexture(V,Tt||zt[V]),lt.type=V,lt.texture=Tt)}function Y(){const V=It[bt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(V){Le.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Nt(V){at.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function de(V,Tt){let tt=f.get(Tt);tt===void 0&&(tt=new WeakMap,f.set(Tt,tt));let lt=tt.get(V);lt===void 0&&(lt=r.getUniformBlockIndex(Tt,V.name),tt.set(V,lt))}function ne(V,Tt){const lt=f.get(Tt).get(V);h.get(Tt)!==lt&&(r.uniformBlockBinding(Tt,lt,V.__bindingPointIndex),h.set(Tt,lt))}function De(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},bt=null,It={},_={},g=new WeakMap,x=[],E=null,T=!1,v=null,m=null,I=null,L=null,b=null,B=null,N=null,F=new ct(0,0,0),z=0,C=!1,w=null,H=null,j=null,$=null,it=null,Le.set(0,0,r.canvas.width,r.canvas.height),at.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Rt,disable:Xt,bindFramebuffer:pe,drawBuffers:jt,useProgram:Ge,setBlending:O,setMaterial:an,setFlipSided:ve,setCullFace:ee,setLineWidth:kt,setPolygonOffset:Oe,setScissorTest:Ht,activeTexture:P,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ut,compressedTexImage3D:ft,texImage2D:Ut,texImage3D:Yt,updateUBOMapping:de,uniformBlockBinding:ne,texStorage2D:_e,texStorage3D:_t,texSubImage2D:st,texSubImage3D:Gt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Pt,scissor:Jt,viewport:Nt,reset:De}}function Bb(r,t,e,i,o,a,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new yt,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,S){return x?new OffscreenCanvas(P,S):To("canvas")}function T(P,S,Y){let ut=1;const ft=Ht(P);if((ft.width>Y||ft.height>Y)&&(ut=Y/Math.max(ft.width,ft.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const st=Math.floor(ut*ft.width),Gt=Math.floor(ut*ft.height);_===void 0&&(_=E(st,Gt));const Mt=S?E(st,Gt):_;return Mt.width=st,Mt.height=Gt,Mt.getContext("2d").drawImage(P,0,0,st,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+Gt+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),P;return P}function v(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,S,Y,ut,ft=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let st=S;if(S===r.RED&&(Y===r.FLOAT&&(st=r.R32F),Y===r.HALF_FLOAT&&(st=r.R16F),Y===r.UNSIGNED_BYTE&&(st=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.R8UI),Y===r.UNSIGNED_SHORT&&(st=r.R16UI),Y===r.UNSIGNED_INT&&(st=r.R32UI),Y===r.BYTE&&(st=r.R8I),Y===r.SHORT&&(st=r.R16I),Y===r.INT&&(st=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(st=r.RG32F),Y===r.HALF_FLOAT&&(st=r.RG16F),Y===r.UNSIGNED_BYTE&&(st=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RG8UI),Y===r.UNSIGNED_SHORT&&(st=r.RG16UI),Y===r.UNSIGNED_INT&&(st=r.RG32UI),Y===r.BYTE&&(st=r.RG8I),Y===r.SHORT&&(st=r.RG16I),Y===r.INT&&(st=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGB16UI),Y===r.UNSIGNED_INT&&(st=r.RGB32UI),Y===r.BYTE&&(st=r.RGB8I),Y===r.SHORT&&(st=r.RGB16I),Y===r.INT&&(st=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(st=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(st=r.RGBA16UI),Y===r.UNSIGNED_INT&&(st=r.RGBA32UI),Y===r.BYTE&&(st=r.RGBA8I),Y===r.SHORT&&(st=r.RGBA16I),Y===r.INT&&(st=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(st=r.RGB9_E5),S===r.RGBA){const Gt=ft?il:Ae.getTransfer(ut);Y===r.FLOAT&&(st=r.RGBA32F),Y===r.HALF_FLOAT&&(st=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(st=Gt===Ue?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(st=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(st=r.RGB5_A1)}return(st===r.R16F||st===r.R32F||st===r.RG16F||st===r.RG32F||st===r.RGBA16F||st===r.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function b(P,S){let Y;return P?S===null||S===zr||S===Us?Y=r.DEPTH24_STENCIL8:S===ki?Y=r.DEPTH32F_STENCIL8:S===yo&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zr||S===Us?Y=r.DEPTH_COMPONENT24:S===ki?Y=r.DEPTH_COMPONENT32F:S===yo&&(Y=r.DEPTH_COMPONENT16),Y}function B(P,S){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==gi&&P.minFilter!==Ti?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function N(P){const S=P.target;S.removeEventListener("dispose",N),z(S),S.isVideoTexture&&p.delete(S)}function F(P){const S=P.target;S.removeEventListener("dispose",F),w(S)}function z(P){const S=i.get(P);if(S.__webglInit===void 0)return;const Y=P.source,ut=g.get(Y);if(ut){const ft=ut[S.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&C(P),Object.keys(ut).length===0&&g.delete(Y)}i.remove(P)}function C(P){const S=i.get(P);r.deleteTexture(S.__webglTexture);const Y=P.source,ut=g.get(Y);delete ut[S.__cacheKey],c.memory.textures--}function w(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(S.__webglFramebuffer[ut]))for(let ft=0;ft<S.__webglFramebuffer[ut].length;ft++)r.deleteFramebuffer(S.__webglFramebuffer[ut][ft]);else r.deleteFramebuffer(S.__webglFramebuffer[ut]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[ut])}else{if(Array.isArray(S.__webglFramebuffer))for(let ut=0;ut<S.__webglFramebuffer.length;ut++)r.deleteFramebuffer(S.__webglFramebuffer[ut]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ut=0;ut<S.__webglColorRenderbuffer.length;ut++)S.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[ut]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=P.textures;for(let ut=0,ft=Y.length;ut<ft;ut++){const st=i.get(Y[ut]);st.__webglTexture&&(r.deleteTexture(st.__webglTexture),c.memory.textures--),i.remove(Y[ut])}i.remove(P)}let H=0;function j(){H=0}function $(){const P=H;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),H+=1,P}function it(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function ht(P,S){const Y=i.get(P);if(P.isVideoTexture&&kt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ut=P.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,P,S);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function nt(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){at(Y,P,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function pt(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){at(Y,P,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function Q(P,S){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){gt(Y,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}const bt={[Mu]:r.REPEAT,[Or]:r.CLAMP_TO_EDGE,[Eu]:r.MIRRORED_REPEAT},It={[gi]:r.NEAREST,[cS]:r.NEAREST_MIPMAP_NEAREST,[Ea]:r.NEAREST_MIPMAP_LINEAR,[Ti]:r.LINEAR,[Rc]:r.LINEAR_MIPMAP_NEAREST,[Br]:r.LINEAR_MIPMAP_LINEAR},Bt={[dS]:r.NEVER,[xS]:r.ALWAYS,[pS]:r.LESS,[cm]:r.LEQUAL,[mS]:r.EQUAL,[vS]:r.GEQUAL,[_S]:r.GREATER,[gS]:r.NOTEQUAL};function he(P,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ti||S.magFilter===Rc||S.magFilter===Ea||S.magFilter===Br||S.minFilter===Ti||S.minFilter===Rc||S.minFilter===Ea||S.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,bt[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,bt[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,bt[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,It[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,It[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gi||S.minFilter!==Ea&&S.minFilter!==Br||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Le(P,S){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",N));const ut=S.source;let ft=g.get(ut);ft===void 0&&(ft={},g.set(ut,ft));const st=it(S);if(st!==P.__cacheKey){ft[st]===void 0&&(ft[st]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ft[st].usedTimes++;const Gt=ft[P.__cacheKey];Gt!==void 0&&(ft[P.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(S)),P.__cacheKey=st,P.__webglTexture=ft[st].texture}return Y}function at(P,S,Y){let ut=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=r.TEXTURE_3D);const ft=Le(P,S),st=S.source;e.bindTexture(ut,P.__webglTexture,r.TEXTURE0+Y);const Gt=i.get(st);if(st.version!==Gt.__version||ft===!0){e.activeTexture(r.TEXTURE0+Y);const Mt=Ae.getPrimaries(Ae.workingColorSpace),Pt=S.colorSpace===ur?null:Ae.getPrimaries(S.colorSpace),_e=S.colorSpace===ur||Mt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let _t=T(S.image,!1,o.maxTextureSize);_t=Oe(S,_t);const Ut=a.convert(S.format,S.colorSpace),Yt=a.convert(S.type);let Jt=L(S.internalFormat,Ut,Yt,S.colorSpace,S.isVideoTexture);he(ut,S);let Nt;const de=S.mipmaps,ne=S.isVideoTexture!==!0,De=Gt.__version===void 0||ft===!0,V=st.dataReady,Tt=B(S,_t);if(S.isDepthTexture)Jt=b(S.format===Ns,S.type),De&&(ne?e.texStorage2D(r.TEXTURE_2D,1,Jt,_t.width,_t.height):e.texImage2D(r.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Ut,Yt,null));else if(S.isDataTexture)if(de.length>0){ne&&De&&e.texStorage2D(r.TEXTURE_2D,Tt,Jt,de[0].width,de[0].height);for(let tt=0,lt=de.length;tt<lt;tt++)Nt=de[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Ut,Yt,Nt.data):e.texImage2D(r.TEXTURE_2D,tt,Jt,Nt.width,Nt.height,0,Ut,Yt,Nt.data);S.generateMipmaps=!1}else ne?(De&&e.texStorage2D(r.TEXTURE_2D,Tt,Jt,_t.width,_t.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t.width,_t.height,Ut,Yt,_t.data)):e.texImage2D(r.TEXTURE_2D,0,Jt,_t.width,_t.height,0,Ut,Yt,_t.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ne&&De&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Jt,de[0].width,de[0].height,_t.depth);for(let tt=0,lt=de.length;tt<lt;tt++)if(Nt=de[tt],S.format!==_i)if(Ut!==null)if(ne){if(V)if(S.layerUpdates.size>0){const Lt=mp(Nt.width,Nt.height,S.format,S.type);for(const Ct of S.layerUpdates){const re=Nt.data.subarray(Ct*Lt/Nt.data.BYTES_PER_ELEMENT,(Ct+1)*Lt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,Ct,Nt.width,Nt.height,1,Ut,re)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,_t.depth,Ut,Nt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Jt,Nt.width,Nt.height,_t.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,Nt.width,Nt.height,_t.depth,Ut,Yt,Nt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Jt,Nt.width,Nt.height,_t.depth,0,Ut,Yt,Nt.data)}else{ne&&De&&e.texStorage2D(r.TEXTURE_2D,Tt,Jt,de[0].width,de[0].height);for(let tt=0,lt=de.length;tt<lt;tt++)Nt=de[tt],S.format!==_i?Ut!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Ut,Nt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Jt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Nt.width,Nt.height,Ut,Yt,Nt.data):e.texImage2D(r.TEXTURE_2D,tt,Jt,Nt.width,Nt.height,0,Ut,Yt,Nt.data)}else if(S.isDataArrayTexture)if(ne){if(De&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Jt,_t.width,_t.height,_t.depth),V)if(S.layerUpdates.size>0){const tt=mp(_t.width,_t.height,S.format,S.type);for(const lt of S.layerUpdates){const Lt=_t.data.subarray(lt*tt/_t.data.BYTES_PER_ELEMENT,(lt+1)*tt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,_t.width,_t.height,1,Ut,Yt,Lt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Ut,Yt,_t.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Jt,_t.width,_t.height,_t.depth,0,Ut,Yt,_t.data);else if(S.isData3DTexture)ne?(De&&e.texStorage3D(r.TEXTURE_3D,Tt,Jt,_t.width,_t.height,_t.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Ut,Yt,_t.data)):e.texImage3D(r.TEXTURE_3D,0,Jt,_t.width,_t.height,_t.depth,0,Ut,Yt,_t.data);else if(S.isFramebufferTexture){if(De)if(ne)e.texStorage2D(r.TEXTURE_2D,Tt,Jt,_t.width,_t.height);else{let tt=_t.width,lt=_t.height;for(let Lt=0;Lt<Tt;Lt++)e.texImage2D(r.TEXTURE_2D,Lt,Jt,tt,lt,0,Ut,Yt,null),tt>>=1,lt>>=1}}else if(de.length>0){if(ne&&De){const tt=Ht(de[0]);e.texStorage2D(r.TEXTURE_2D,Tt,Jt,tt.width,tt.height)}for(let tt=0,lt=de.length;tt<lt;tt++)Nt=de[tt],ne?V&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Ut,Yt,Nt):e.texImage2D(r.TEXTURE_2D,tt,Jt,Ut,Yt,Nt);S.generateMipmaps=!1}else if(ne){if(De){const tt=Ht(_t);e.texStorage2D(r.TEXTURE_2D,Tt,Jt,tt.width,tt.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ut,Yt,_t)}else e.texImage2D(r.TEXTURE_2D,0,Jt,Ut,Yt,_t);v(S)&&m(ut),Gt.__version=st.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function gt(P,S,Y){if(S.image.length!==6)return;const ut=Le(P,S),ft=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const st=i.get(ft);if(ft.version!==st.__version||ut===!0){e.activeTexture(r.TEXTURE0+Y);const Gt=Ae.getPrimaries(Ae.workingColorSpace),Mt=S.colorSpace===ur?null:Ae.getPrimaries(S.colorSpace),Pt=S.colorSpace===ur||Gt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const _e=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,Ut=[];for(let lt=0;lt<6;lt++)!_e&&!_t?Ut[lt]=T(S.image[lt],!0,o.maxCubemapSize):Ut[lt]=_t?S.image[lt].image:S.image[lt],Ut[lt]=Oe(S,Ut[lt]);const Yt=Ut[0],Jt=a.convert(S.format,S.colorSpace),Nt=a.convert(S.type),de=L(S.internalFormat,Jt,Nt,S.colorSpace),ne=S.isVideoTexture!==!0,De=st.__version===void 0||ut===!0,V=ft.dataReady;let Tt=B(S,Yt);he(r.TEXTURE_CUBE_MAP,S);let tt;if(_e){ne&&De&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,de,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){tt=Ut[lt].mipmaps;for(let Lt=0;Lt<tt.length;Lt++){const Ct=tt[Lt];S.format!==_i?Jt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,0,0,Ct.width,Ct.height,Jt,Ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,de,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,0,0,Ct.width,Ct.height,Jt,Nt,Ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,de,Ct.width,Ct.height,0,Jt,Nt,Ct.data)}}}else{if(tt=S.mipmaps,ne&&De){tt.length>0&&Tt++;const lt=Ht(Ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,de,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(_t){ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ut[lt].width,Ut[lt].height,Jt,Nt,Ut[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,de,Ut[lt].width,Ut[lt].height,0,Jt,Nt,Ut[lt].data);for(let Lt=0;Lt<tt.length;Lt++){const re=tt[Lt].image[lt].image;ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,0,0,re.width,re.height,Jt,Nt,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,de,re.width,re.height,0,Jt,Nt,re.data)}}else{ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Jt,Nt,Ut[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,de,Jt,Nt,Ut[lt]);for(let Lt=0;Lt<tt.length;Lt++){const Ct=tt[Lt];ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,0,0,Jt,Nt,Ct.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,de,Jt,Nt,Ct.image[lt])}}}v(S)&&m(r.TEXTURE_CUBE_MAP),st.__version=ft.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function zt(P,S,Y,ut,ft,st){const Gt=a.convert(Y.format,Y.colorSpace),Mt=a.convert(Y.type),Pt=L(Y.internalFormat,Gt,Mt,Y.colorSpace),_e=i.get(S),_t=i.get(Y);if(_t.__renderTarget=S,!_e.__hasExternalTextures){const Ut=Math.max(1,S.width>>st),Yt=Math.max(1,S.height>>st);ft===r.TEXTURE_3D||ft===r.TEXTURE_2D_ARRAY?e.texImage3D(ft,st,Pt,Ut,Yt,S.depth,0,Gt,Mt,null):e.texImage2D(ft,st,Pt,Ut,Yt,0,Gt,Mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,ft,_t.__webglTexture,0,ve(S)):(ft===r.TEXTURE_2D||ft>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,ft,_t.__webglTexture,st),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(P,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const ut=S.depthTexture,ft=ut&&ut.isDepthTexture?ut.type:null,st=b(S.stencilBuffer,ft),Gt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=ve(S);ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,st,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,st,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,st,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Gt,r.RENDERBUFFER,P)}else{const ut=S.textures;for(let ft=0;ft<ut.length;ft++){const st=ut[ft],Gt=a.convert(st.format,st.colorSpace),Mt=a.convert(st.type),Pt=L(st.internalFormat,Gt,Mt,st.colorSpace),_e=ve(S);Y&&ee(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Pt,S.width,S.height):ee(S)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Xt(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=i.get(S.depthTexture);ut.__renderTarget=S,(!ut.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ht(S.depthTexture,0);const ft=ut.__webglTexture,st=ve(S);if(S.depthTexture.format===Rs)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ft,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ft,0);else if(S.depthTexture.format===Ns)ee(S)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ft,0,st):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function pe(P){const S=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){const ft=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",ft)};ut.addEventListener("dispose",ft),S.__depthDisposeCallback=ft}S.__boundDepthTexture=ut}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Xt(S.__webglFramebuffer,P)}else if(Y){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=r.createRenderbuffer(),Rt(S.__webglDepthbuffer[ut],P,!1);else{const ft=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=S.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,st),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,st)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Rt(S.__webglDepthbuffer,P,!1);else{const ut=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,ft)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(P,S,Y){const ut=i.get(P);S!==void 0&&zt(ut.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&pe(P)}function Ge(P){const S=P.texture,Y=i.get(P),ut=i.get(S);P.addEventListener("dispose",F);const ft=P.textures,st=P.isWebGLCubeRenderTarget===!0,Gt=ft.length>1;if(Gt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=S.version,c.memory.textures++),st){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let Pt=0;Pt<S.mipmaps.length;Pt++)Y.__webglFramebuffer[Mt][Pt]=r.createFramebuffer()}else Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Gt)for(let Mt=0,Pt=ft.length;Mt<Pt;Mt++){const _e=i.get(ft[Mt]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),c.memory.textures++)}if(P.samples>0&&ee(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ft.length;Mt++){const Pt=ft[Mt];Y.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const _e=a.convert(Pt.format,Pt.colorSpace),_t=a.convert(Pt.type),Ut=L(Pt.internalFormat,_e,_t,Pt.colorSpace,P.isXRRenderTarget===!0),Yt=ve(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Ut,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(Y.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(st){e.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),he(r.TEXTURE_CUBE_MAP,S);for(let Mt=0;Mt<6;Mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)zt(Y.__webglFramebuffer[Mt][Pt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt);else zt(Y.__webglFramebuffer[Mt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(S)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Mt=0,Pt=ft.length;Mt<Pt;Mt++){const _e=ft[Mt],_t=i.get(_e);e.bindTexture(r.TEXTURE_2D,_t.__webglTexture),he(r.TEXTURE_2D,_e),zt(Y.__webglFramebuffer,P,_e,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,0),v(_e)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let Mt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ut.__webglTexture),he(Mt,S),S.mipmaps&&S.mipmaps.length>0)for(let Pt=0;Pt<S.mipmaps.length;Pt++)zt(Y.__webglFramebuffer[Pt],P,S,r.COLOR_ATTACHMENT0,Mt,Pt);else zt(Y.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,Mt,0);v(S)&&m(Mt),e.unbindTexture()}P.depthBuffer&&pe(P)}function Pe(P){const S=P.textures;for(let Y=0,ut=S.length;Y<ut;Y++){const ft=S[Y];if(v(ft)){const st=I(P),Gt=i.get(ft).__webglTexture;e.bindTexture(st,Gt),m(st),e.unbindTexture()}}}const me=[],O=[];function an(P){if(P.samples>0){if(ee(P)===!1){const S=P.textures,Y=P.width,ut=P.height;let ft=r.COLOR_BUFFER_BIT;const st=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=i.get(P),Mt=S.length>1;if(Mt)for(let Pt=0;Pt<S.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Pt=0;Pt<S.length;Pt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ft|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ft|=r.STENCIL_BUFFER_BIT)),Mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Pt]);const _e=i.get(S[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,_e,0)}r.blitFramebuffer(0,0,Y,ut,0,0,Y,ut,ft,r.NEAREST),h===!0&&(me.length=0,O.length=0,me.push(r.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(me.push(st),O.push(st),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<S.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Gt.__webglColorRenderbuffer[Pt]);const _e=i.get(S[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,_e,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ve(P){return Math.min(o.maxSamples,P.samples)}function ee(P){const S=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function kt(P){const S=c.render.frame;p.get(P)!==S&&(p.set(P,S),P.update())}function Oe(P,S){const Y=P.colorSpace,ut=P.format,ft=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Fs&&Y!==ur&&(Ae.getTransfer(Y)===Ue?(ut!==_i||ft!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=j,this.setTexture2D=ht,this.setTexture2DArray=nt,this.setTexture3D=pt,this.setTextureCube=Q,this.rebindTextures=jt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=ee}function zb(r,t){function e(i,o=ur){let a;const c=Ae.getTransfer(o);if(i===qi)return r.UNSIGNED_BYTE;if(i===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===tm)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===jp)return r.BYTE;if(i===Qp)return r.SHORT;if(i===yo)return r.UNSIGNED_SHORT;if(i===nh)return r.INT;if(i===zr)return r.UNSIGNED_INT;if(i===ki)return r.FLOAT;if(i===Ao)return r.HALF_FLOAT;if(i===em)return r.ALPHA;if(i===nm)return r.RGB;if(i===_i)return r.RGBA;if(i===im)return r.LUMINANCE;if(i===rm)return r.LUMINANCE_ALPHA;if(i===Rs)return r.DEPTH_COMPONENT;if(i===Ns)return r.DEPTH_STENCIL;if(i===sm)return r.RED;if(i===sh)return r.RED_INTEGER;if(i===om)return r.RG;if(i===oh)return r.RG_INTEGER;if(i===ah)return r.RGBA_INTEGER;if(i===Ja||i===ja||i===Qa||i===tl)if(c===Ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Su||i===yu||i===Tu||i===wu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Su)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Au||i===bu||i===Ru)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Au||i===bu)return c===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ru)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cu||i===Lu||i===Iu||i===Pu||i===Du||i===Uu||i===Nu||i===Fu||i===Ou||i===Bu||i===zu||i===Gu||i===Hu||i===Vu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Cu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Iu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Du)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ou)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vu)return c===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===ku||i===Wu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===el)return c===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ku)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===am||i===Xu||i===qu||i===Yu)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===el)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const o=new Ln,a=t.properties.get(o);a.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new mr({vertexShader:Gb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kb extends Bs{constructor(t,e){super();const i=this;let o=null,a=1,c=null,u="local-floor",h=1,f=null,p=null,_=null,g=null,x=null,E=null;const T=new Vb,v=e.getContextAttributes();let m=null,I=null;const L=[],b=[],B=new yt;let N=null;const F=new Zn;F.viewport=new Fe;const z=new Zn;z.viewport=new Fe;const C=[F,z],w=new uy;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let gt=L[at];return gt===void 0&&(gt=new $c,L[at]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(at){let gt=L[at];return gt===void 0&&(gt=new $c,L[at]=gt),gt.getGripSpace()},this.getHand=function(at){let gt=L[at];return gt===void 0&&(gt=new $c,L[at]=gt),gt.getHandSpace()};function $(at){const gt=b.indexOf(at.inputSource);if(gt===-1)return;const zt=L[gt];zt!==void 0&&(zt.update(at.inputSource,at.frame,f||c),zt.dispatchEvent({type:at.type,data:at.inputSource}))}function it(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",it),o.removeEventListener("inputsourceschange",ht);for(let at=0;at<L.length;at++){const gt=b[at];gt!==null&&(b[at]=null,L[at].disconnect(gt))}H=null,j=null,T.reset(),t.setRenderTarget(m),x=null,g=null,_=null,o=null,I=null,Le.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){a=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){u=at,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(at){f=at},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(at){if(o=at,o!==null){if(m=t.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",it),o.addEventListener("inputsourceschange",ht),v.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Rt=null,Xt=null;v.depth&&(Xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,zt=v.stencil?Ns:Rs,Rt=v.stencil?Us:zr);const pe={colorFormat:e.RGBA8,depthFormat:Xt,scaleFactor:a};_=new XRWebGLBinding(o,e),g=_.createProjectionLayer(pe),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),I=new Gr(g.textureWidth,g.textureHeight,{format:_i,type:qi,depthTexture:new ym(g.textureWidth,g.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const zt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(o,e,zt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new Gr(x.framebufferWidth,x.framebufferHeight,{format:_i,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await o.requestReferenceSpace(u),Le.setContext(o),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ht(at){for(let gt=0;gt<at.removed.length;gt++){const zt=at.removed[gt],Rt=b.indexOf(zt);Rt>=0&&(b[Rt]=null,L[Rt].disconnect(zt))}for(let gt=0;gt<at.added.length;gt++){const zt=at.added[gt];let Rt=b.indexOf(zt);if(Rt===-1){for(let pe=0;pe<L.length;pe++)if(pe>=b.length){b.push(zt),Rt=pe;break}else if(b[pe]===null){b[pe]=zt,Rt=pe;break}if(Rt===-1)break}const Xt=L[Rt];Xt&&Xt.connect(zt)}}const nt=new D,pt=new D;function Q(at,gt,zt){nt.setFromMatrixPosition(gt.matrixWorld),pt.setFromMatrixPosition(zt.matrixWorld);const Rt=nt.distanceTo(pt),Xt=gt.projectionMatrix.elements,pe=zt.projectionMatrix.elements,jt=Xt[14]/(Xt[10]-1),Ge=Xt[14]/(Xt[10]+1),Pe=(Xt[9]+1)/Xt[5],me=(Xt[9]-1)/Xt[5],O=(Xt[8]-1)/Xt[0],an=(pe[8]+1)/pe[0],ve=jt*O,ee=jt*an,kt=Rt/(-O+an),Oe=kt*-O;if(gt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Oe),at.translateZ(kt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Xt[10]===-1)at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ht=jt+kt,P=Ge+kt,S=ve-Oe,Y=ee+(Rt-Oe),ut=Pe*Ge/P*Ht,ft=me*Ge/P*Ht;at.projectionMatrix.makePerspective(S,Y,ut,ft,Ht,P),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function bt(at,gt){gt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(gt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(o===null)return;let gt=at.near,zt=at.far;T.texture!==null&&(T.depthNear>0&&(gt=T.depthNear),T.depthFar>0&&(zt=T.depthFar)),w.near=z.near=F.near=gt,w.far=z.far=F.far=zt,(H!==w.near||j!==w.far)&&(o.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,j=w.far),F.layers.mask=at.layers.mask|2,z.layers.mask=at.layers.mask|4,w.layers.mask=F.layers.mask|z.layers.mask;const Rt=at.parent,Xt=w.cameras;bt(w,Rt);for(let pe=0;pe<Xt.length;pe++)bt(Xt[pe],Rt);Xt.length===2?Q(w,F,z):w.projectionMatrix.copy(F.projectionMatrix),It(at,w,Rt)};function It(at,gt,zt){zt===null?at.matrix.copy(gt.matrixWorld):(at.matrix.copy(zt.matrixWorld),at.matrix.invert(),at.matrix.multiply(gt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(gt.projectionMatrix),at.projectionMatrixInverse.copy(gt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Ku*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(at){h=at,g!==null&&(g.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let Bt=null;function he(at,gt){if(p=gt.getViewerPose(f||c),E=gt,p!==null){const zt=p.views;x!==null&&(t.setRenderTargetFramebuffer(I,x.framebuffer),t.setRenderTarget(I));let Rt=!1;zt.length!==w.cameras.length&&(w.cameras.length=0,Rt=!0);for(let jt=0;jt<zt.length;jt++){const Ge=zt[jt];let Pe=null;if(x!==null)Pe=x.getViewport(Ge);else{const O=_.getViewSubImage(g,Ge);Pe=O.viewport,jt===0&&(t.setRenderTargetTextures(I,O.colorTexture,g.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(I))}let me=C[jt];me===void 0&&(me=new Zn,me.layers.enable(jt),me.viewport=new Fe,C[jt]=me),me.matrix.fromArray(Ge.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Ge.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),jt===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Rt===!0&&w.cameras.push(me)}const Xt=o.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const jt=_.getDepthInformation(zt[0]);jt&&jt.isValid&&jt.texture&&T.init(t,jt,o.renderState)}}for(let zt=0;zt<L.length;zt++){const Rt=b[zt],Xt=L[zt];Rt!==null&&Xt!==void 0&&Xt.update(Rt,gt,f||c)}Bt&&Bt(at,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),E=null}const Le=new Am;Le.setAnimationLoop(he),this.setAnimationLoop=function(at){Bt=at},this.dispose=function(){}}}const Pr=new wi,Wb=new Xe;function Xb(r,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,vm(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function o(v,m,I,L,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(v,m):m.isMeshToonMaterial?(a(v,m),_(v,m)):m.isMeshPhongMaterial?(a(v,m),p(v,m)):m.isMeshStandardMaterial?(a(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,b)):m.isMeshMatcapMaterial?(a(v,m),E(v,m)):m.isMeshDepthMaterial?a(v,m):m.isMeshDistanceMaterial?(a(v,m),T(v,m)):m.isMeshNormalMaterial?a(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?h(v,m,I,L):m.isSpriteMaterial?f(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Bn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Bn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const I=t.get(m),L=I.envMap,b=I.envMapRotation;L&&(v.envMap.value=L,Pr.copy(b),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(Pr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,I,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*I,v.scale.value=L*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function f(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,I){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,m){m.matcap&&(v.matcap.value=m.matcap)}function T(v,m){const I=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function qb(r,t,e,i){let o={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const b=L.program;i.uniformBlockBinding(I,b)}function f(I,L){let b=o[I.id];b===void 0&&(E(I),b=p(I),o[I.id]=b,I.addEventListener("dispose",v));const B=L.program;i.updateUBOMapping(I,B);const N=t.render.frame;a[I.id]!==N&&(g(I),a[I.id]=N)}function p(I){const L=_();I.__bindingPointIndex=L;const b=r.createBuffer(),B=I.__size,N=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,B,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,b),b}function _(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const L=o[I.id],b=I.uniforms,B=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let N=0,F=b.length;N<F;N++){const z=Array.isArray(b[N])?b[N]:[b[N]];for(let C=0,w=z.length;C<w;C++){const H=z[C];if(x(H,N,C,B)===!0){const j=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let it=0;for(let ht=0;ht<$.length;ht++){const nt=$[ht],pt=T(nt);typeof nt=="number"||typeof nt=="boolean"?(H.__data[0]=nt,r.bufferSubData(r.UNIFORM_BUFFER,j+it,H.__data)):nt.isMatrix3?(H.__data[0]=nt.elements[0],H.__data[1]=nt.elements[1],H.__data[2]=nt.elements[2],H.__data[3]=0,H.__data[4]=nt.elements[3],H.__data[5]=nt.elements[4],H.__data[6]=nt.elements[5],H.__data[7]=0,H.__data[8]=nt.elements[6],H.__data[9]=nt.elements[7],H.__data[10]=nt.elements[8],H.__data[11]=0):(nt.toArray(H.__data,it),it+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(I,L,b,B){const N=I.value,F=L+"_"+b;if(B[F]===void 0)return typeof N=="number"||typeof N=="boolean"?B[F]=N:B[F]=N.clone(),!0;{const z=B[F];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return B[F]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function E(I){const L=I.uniforms;let b=0;const B=16;for(let F=0,z=L.length;F<z;F++){const C=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,H=C.length;w<H;w++){const j=C[w],$=Array.isArray(j.value)?j.value:[j.value];for(let it=0,ht=$.length;it<ht;it++){const nt=$[it],pt=T(nt),Q=b%B,bt=Q%pt.boundary,It=Q+bt;b+=bt,It!==0&&B-It<pt.storage&&(b+=B-It),j.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=pt.storage}}}const N=b%B;return N>0&&(b+=B-N),I.__size=b,I.__cache={},this}function T(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function v(I){const L=I.target;L.removeEventListener("dispose",v);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function m(){for(const I in o)r.deleteBuffer(o[I]);c=[],o={},a={}}return{bind:h,update:f,dispose:m}}class Yb{constructor(t={}){const{canvas:e=ES(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),T=new Int32Array(4);let v=null,m=null;const I=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=fr,this.toneMappingExposure=1;const b=this;let B=!1,N=0,F=0,z=null,C=-1,w=null;const H=new Fe,j=new Fe;let $=null;const it=new ct(0);let ht=0,nt=e.width,pt=e.height,Q=1,bt=null,It=null;const Bt=new Fe(0,0,nt,pt),he=new Fe(0,0,nt,pt);let Le=!1;const at=new lh;let gt=!1,zt=!1;this.transmissionResolutionScale=1;const Rt=new Xe,Xt=new Xe,pe=new D,jt=new Fe,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function me(){return z===null?Q:1}let O=i;function an(A,W){return e.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${eh}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),O===null){const W="webgl2";if(O=an(W,A),O===null)throw an(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ve,ee,kt,Oe,Ht,P,S,Y,ut,ft,st,Gt,Mt,Pt,_e,_t,Ut,Yt,Jt,Nt,de,ne,De,V;function Tt(){ve=new iA(O),ve.init(),ne=new zb(O,ve),ee=new Jw(O,ve,t,ne),kt=new Ob(O,ve),ee.reverseDepthBuffer&&g&&kt.buffers.depth.setReversed(!0),Oe=new oA(O),Ht=new Tb,P=new Bb(O,ve,kt,Ht,ee,ne,Oe),S=new Qw(b),Y=new nA(b),ut=new dy(O),De=new Kw(O,ut),ft=new rA(O,ut,Oe,De),st=new lA(O,ft,ut,Oe),Jt=new aA(O,ee,P),_t=new jw(Ht),Gt=new yb(b,S,Y,ve,ee,De,_t),Mt=new Xb(b,Ht),Pt=new Ab,_e=new Pb(ve),Yt=new Zw(b,S,Y,kt,st,x,h),Ut=new Nb(b,st,ee),V=new qb(O,Oe,ee,kt),Nt=new $w(O,ve,Oe),de=new sA(O,ve,Oe),Oe.programs=Gt.programs,b.capabilities=ee,b.extensions=ve,b.properties=Ht,b.renderLists=Pt,b.shadowMap=Ut,b.state=kt,b.info=Oe}Tt();const tt=new kb(b,O);this.xr=tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(nt,pt,!1))},this.getSize=function(A){return A.set(nt,pt)},this.setSize=function(A,W,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,pt=W,e.width=Math.floor(A*Q),e.height=Math.floor(W*Q),Z===!0&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(nt*Q,pt*Q).floor()},this.setDrawingBufferSize=function(A,W,Z){nt=A,pt=W,Q=Z,e.width=Math.floor(A*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(Bt)},this.setViewport=function(A,W,Z,K){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,W,Z,K),kt.viewport(H.copy(Bt).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,W,Z,K){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,W,Z,K),kt.scissor(j.copy(he).multiplyScalar(Q).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){kt.setScissorTest(Le=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,W=!0,Z=!0){let K=0;if(A){let q=!1;if(z!==null){const mt=z.texture.format;q=mt===ah||mt===oh||mt===sh}if(q){const mt=z.texture.type,wt=mt===qi||mt===zr||mt===yo||mt===Us||mt===ih||mt===rh,Dt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Qt=Dt.r,te=Dt.g,qt=Dt.b;wt?(E[0]=Qt,E[1]=te,E[2]=qt,E[3]=Ot,O.clearBufferuiv(O.COLOR,0,E)):(T[0]=Qt,T[1]=te,T[2]=qt,T[3]=Ot,O.clearBufferiv(O.COLOR,0,T))}else K|=O.COLOR_BUFFER_BIT}W&&(K|=O.DEPTH_BUFFER_BIT),Z&&(K|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Yt.dispose(),Pt.dispose(),_e.dispose(),Ht.dispose(),S.dispose(),Y.dispose(),st.dispose(),De.dispose(),V.dispose(),Gt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Wr),tt.removeEventListener("sessionend",Co),li.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Oe.autoReset,W=Ut.enabled,Z=Ut.autoUpdate,K=Ut.needsUpdate,q=Ut.type;Tt(),Oe.autoReset=A,Ut.enabled=W,Ut.autoUpdate=Z,Ut.needsUpdate=K,Ut.type=q}function Ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const W=A.target;W.removeEventListener("dispose",re),qe(W)}function qe(A){tn(A),Ht.remove(A)}function tn(A){const W=Ht.get(A).programs;W!==void 0&&(W.forEach(function(Z){Gt.releaseProgram(Z)}),A.isShaderMaterial&&Gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Z,K,q,mt){W===null&&(W=Ge);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Dt=No(A,W,Z,K,q);kt.setMaterial(K,wt);let Ot=Z.index,Qt=1;if(K.wireframe===!0){if(Ot=ft.getWireframeAttribute(Z),Ot===void 0)return;Qt=2}const te=Z.drawRange,qt=Z.attributes.position;let Me=te.start*Qt,we=(te.start+te.count)*Qt;mt!==null&&(Me=Math.max(Me,mt.start*Qt),we=Math.min(we,(mt.start+mt.count)*Qt)),Ot!==null?(Me=Math.max(Me,0),we=Math.min(we,Ot.count)):qt!=null&&(Me=Math.max(Me,0),we=Math.min(we,qt.count));const Ze=we-Me;if(Ze<0||Ze===1/0)return;De.setup(q,K,Dt,Z,Ot);let ke,Ee=Nt;if(Ot!==null&&(ke=ut.get(Ot),Ee=de,Ee.setIndex(ke)),q.isMesh)K.wireframe===!0?(kt.setLineWidth(K.wireframeLinewidth*me()),Ee.setMode(O.LINES)):Ee.setMode(O.TRIANGLES);else if(q.isLine){let Wt=K.linewidth;Wt===void 0&&(Wt=1),kt.setLineWidth(Wt*me()),q.isLineSegments?Ee.setMode(O.LINES):q.isLineLoop?Ee.setMode(O.LINE_LOOP):Ee.setMode(O.LINE_STRIP)}else q.isPoints?Ee.setMode(O.POINTS):q.isSprite&&Ee.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ee.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))Ee.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Wt=q._multiDrawStarts,en=q._multiDrawCounts,Te=q._multiDrawCount,vn=Ot?ut.get(Ot).bytesPerElement:1,Ai=Ht.get(K).currentProgram.getUniforms();for(let Tn=0;Tn<Te;Tn++)Ai.setValue(O,"_gl_DrawID",Tn),Ee.render(Wt[Tn]/vn,en[Tn])}else if(q.isInstancedMesh)Ee.renderInstances(Me,Ze,q.count);else if(Z.isInstancedBufferGeometry){const Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Wt);Ee.renderInstances(Me,Ze,en)}else Ee.render(Me,Ze)};function be(A,W,Z){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,qr(A,W,Z),A.side=pr,A.needsUpdate=!0,qr(A,W,Z),A.side=Vi):qr(A,W,Z)}this.compile=function(A,W,Z=null){Z===null&&(Z=A),m=_e.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){const Dt=mt[wt];be(Dt,Z,q),K.add(Dt)}else be(mt,Z,q),K.add(mt)}),L.pop(),m=null,K},this.compileAsync=function(A,W,Z=null){const K=this.compile(A,W,Z);return new Promise(q=>{function mt(){if(K.forEach(function(wt){Ht.get(wt).currentProgram.isReady()&&K.delete(wt)}),K.size===0){q(A);return}setTimeout(mt,10)}ve.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let zn=null;function ai(A){zn&&zn(A)}function Wr(){li.stop()}function Co(){li.start()}const li=new Am;li.setAnimationLoop(ai),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(A){zn=A,tt.setAnimationLoop(A),A===null?li.stop():li.start()},tt.addEventListener("sessionstart",Wr),tt.addEventListener("sessionend",Co),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,z),m=_e.get(A,L.length),m.init(W),L.push(m),Xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),at.setFromProjectionMatrix(Xt),zt=this.localClippingEnabled,gt=_t.init(this.clippingPlanes,zt),v=Pt.get(A,I.length),v.init(),I.push(v),tt.enabled===!0&&tt.isPresenting===!0){const mt=b.xr.getDepthSensingMesh();mt!==null&&Vs(mt,W,-1/0,b.sortObjects)}Vs(A,W,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(bt,It),Pe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Pe&&Yt.addToRenderList(v,A),this.info.render.frame++,gt===!0&&_t.beginShadows();const Z=m.state.shadowsArray;Ut.render(Z,A,W),gt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const mt=W.cameras;if(q.length>0)for(let wt=0,Dt=mt.length;wt<Dt;wt++){const Ot=mt[wt];Io(K,q,A,Ot)}Pe&&Yt.render(A);for(let wt=0,Dt=mt.length;wt<Dt;wt++){const Ot=mt[wt];Lo(v,A,Ot,Ot.viewport)}}else q.length>0&&Io(K,q,A,W),Pe&&Yt.render(A),Lo(v,A,W);z!==null&&F===0&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(b,A,W),De.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(m=L[L.length-1],gt===!0&&_t.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,I.pop(),I.length>0?v=I[I.length-1]:v=null};function Vs(A,W,Z,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||at.intersectsSprite(A)){K&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xt);const wt=st.update(A),Dt=A.material;Dt.visible&&v.push(A,wt,Dt,Z,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||at.intersectsObject(A))){const wt=st.update(A),Dt=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),jt.copy(wt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Xt)),Array.isArray(Dt)){const Ot=wt.groups;for(let Qt=0,te=Ot.length;Qt<te;Qt++){const qt=Ot[Qt],Me=Dt[qt.materialIndex];Me&&Me.visible&&v.push(A,wt,Me,Z,jt.z,qt)}}else Dt.visible&&v.push(A,wt,Dt,Z,jt.z,null)}}const mt=A.children;for(let wt=0,Dt=mt.length;wt<Dt;wt++)Vs(mt[wt],W,Z,K)}function Lo(A,W,Z,K){const q=A.opaque,mt=A.transmissive,wt=A.transparent;m.setupLightsView(Z),gt===!0&&_t.setGlobalState(b.clippingPlanes,Z),K&&kt.viewport(H.copy(K)),q.length>0&&Xr(q,W,Z),mt.length>0&&Xr(mt,W,Z),wt.length>0&&Xr(wt,W,Z),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Io(A,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Gr(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float")?Ao:qi,minFilter:Br,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const mt=m.state.transmissionRenderTarget[K.id],wt=K.viewport||H;mt.setSize(wt.z*b.transmissionResolutionScale,wt.w*b.transmissionResolutionScale);const Dt=b.getRenderTarget();b.setRenderTarget(mt),b.getClearColor(it),ht=b.getClearAlpha(),ht<1&&b.setClearColor(16777215,.5),b.clear(),Pe&&Yt.render(Z);const Ot=b.toneMapping;b.toneMapping=fr;const Qt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),gt===!0&&_t.setGlobalState(b.clippingPlanes,K),Xr(A,Z,K),P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let qt=0,Me=W.length;qt<Me;qt++){const we=W[qt],Ze=we.object,ke=we.geometry,Ee=we.material,Wt=we.group;if(Ee.side===Vi&&Ze.layers.test(K.layers)){const en=Ee.side;Ee.side=Bn,Ee.needsUpdate=!0,Po(Ze,Z,K,ke,Ee,Wt),Ee.side=en,Ee.needsUpdate=!0,te=!0}}te===!0&&(P.updateMultisampleRenderTarget(mt),P.updateRenderTargetMipmap(mt))}b.setRenderTarget(Dt),b.setClearColor(it,ht),Qt!==void 0&&(K.viewport=Qt),b.toneMapping=Ot}function Xr(A,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,mt=A.length;q<mt;q++){const wt=A[q],Dt=wt.object,Ot=wt.geometry,Qt=K===null?wt.material:K,te=wt.group;Dt.layers.test(Z.layers)&&Po(Dt,W,Z,Ot,Qt,te)}}function Po(A,W,Z,K,q,mt){A.onBeforeRender(b,W,Z,K,q,mt),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(b,W,Z,K,A,mt),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,b.renderBufferDirect(Z,W,K,q,A,mt),q.side=pr,q.needsUpdate=!0,b.renderBufferDirect(Z,W,K,q,A,mt),q.side=Vi):b.renderBufferDirect(Z,W,K,q,A,mt),A.onAfterRender(b,W,Z,K,q,mt)}function qr(A,W,Z){W.isScene!==!0&&(W=Ge);const K=Ht.get(A),q=m.state.lights,mt=m.state.shadowsArray,wt=q.state.version,Dt=Gt.getParameters(A,q.state,mt,W,Z),Ot=Gt.getProgramCacheKey(Dt);let Qt=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?Y:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",re),Qt=new Map,K.programs=Qt);let te=Qt.get(Ot);if(te!==void 0){if(K.currentProgram===te&&K.lightsStateVersion===wt)return Uo(A,Dt),te}else Dt.uniforms=Gt.getUniforms(A),A.onBeforeCompile(Dt,b),te=Gt.acquireProgram(Dt,Ot),Qt.set(Ot,te),K.uniforms=Dt.uniforms;const qt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=_t.uniform),Uo(A,Dt),K.needsLights=vl(A),K.lightsStateVersion=wt,K.needsLights&&(qt.ambientLightColor.value=q.state.ambient,qt.lightProbe.value=q.state.probe,qt.directionalLights.value=q.state.directional,qt.directionalLightShadows.value=q.state.directionalShadow,qt.spotLights.value=q.state.spot,qt.spotLightShadows.value=q.state.spotShadow,qt.rectAreaLights.value=q.state.rectArea,qt.ltc_1.value=q.state.rectAreaLTC1,qt.ltc_2.value=q.state.rectAreaLTC2,qt.pointLights.value=q.state.point,qt.pointLightShadows.value=q.state.pointShadow,qt.hemisphereLights.value=q.state.hemi,qt.directionalShadowMap.value=q.state.directionalShadowMap,qt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,qt.spotShadowMap.value=q.state.spotShadowMap,qt.spotLightMatrix.value=q.state.spotLightMatrix,qt.spotLightMap.value=q.state.spotLightMap,qt.pointShadowMap.value=q.state.pointShadowMap,qt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=te,K.uniformsList=null,te}function Do(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=nl.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Uo(A,W){const Z=Ht.get(A);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function No(A,W,Z,K,q){W.isScene!==!0&&(W=Ge),P.resetTextureUnits();const mt=W.fog,wt=K.isMeshStandardMaterial?W.environment:null,Dt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Fs,Ot=(K.isMeshStandardMaterial?Y:S).get(K.envMap||wt),Qt=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),qt=!!Z.morphAttributes.position,Me=!!Z.morphAttributes.normal,we=!!Z.morphAttributes.color;let Ze=fr;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ze=b.toneMapping);const ke=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=ke!==void 0?ke.length:0,Wt=Ht.get(K),en=m.state.lights;if(gt===!0&&(zt===!0||A!==w)){const ln=A===w&&K.id===C;_t.setState(K,A,ln)}let Te=!1;K.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==en.state.version||Wt.outputColorSpace!==Dt||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isBatchedMesh&&Wt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Wt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Wt.instancingMorph===!1&&q.morphTexture!==null||Wt.envMap!==Ot||K.fog===!0&&Wt.fog!==mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==_t.numPlanes||Wt.numIntersection!==_t.numIntersection)||Wt.vertexAlphas!==Qt||Wt.vertexTangents!==te||Wt.morphTargets!==qt||Wt.morphNormals!==Me||Wt.morphColors!==we||Wt.toneMapping!==Ze||Wt.morphTargetsCount!==Ee)&&(Te=!0):(Te=!0,Wt.__version=K.version);let vn=Wt.currentProgram;Te===!0&&(vn=qr(K,W,q));let Ai=!1,Tn=!1,Yi=!1;const Be=vn.getUniforms(),xn=Wt.uniforms;if(kt.useProgram(vn.program)&&(Ai=!0,Tn=!0,Yi=!0),K.id!==C&&(C=K.id,Tn=!0),Ai||w!==A){kt.buffers.depth.getReversed()?(Rt.copy(A.projectionMatrix),yS(Rt),TS(Rt),Be.setValue(O,"projectionMatrix",Rt)):Be.setValue(O,"projectionMatrix",A.projectionMatrix),Be.setValue(O,"viewMatrix",A.matrixWorldInverse);const cn=Be.map.cameraPosition;cn!==void 0&&cn.setValue(O,pe.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Be.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Tn=!0,Yi=!0)}if(q.isSkinnedMesh){Be.setOptional(O,q,"bindMatrix"),Be.setOptional(O,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Be.setValue(O,"boneTexture",ln.boneTexture,P))}q.isBatchedMesh&&(Be.setOptional(O,q,"batchingTexture"),Be.setValue(O,"batchingTexture",q._matricesTexture,P),Be.setOptional(O,q,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",q._indirectTexture,P),Be.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",q._colorsTexture,P));const Pn=Z.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Jt.update(q,Z,vn),(Tn||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,Be.setValue(O,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(xn.envMap.value=Ot,xn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(xn.envMapIntensity.value=W.environmentIntensity),Tn&&(Be.setValue(O,"toneMappingExposure",b.toneMappingExposure),Wt.needsLights&&gl(xn,Yi),mt&&K.fog===!0&&Mt.refreshFogUniforms(xn,mt),Mt.refreshMaterialUniforms(xn,K,Q,pt,m.state.transmissionRenderTarget[A.id]),nl.upload(O,Do(Wt),xn,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(nl.upload(O,Do(Wt),xn,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Be.setValue(O,"center",q.center),Be.setValue(O,"modelViewMatrix",q.modelViewMatrix),Be.setValue(O,"normalMatrix",q.normalMatrix),Be.setValue(O,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ln=K.uniformsGroups;for(let cn=0,gr=ln.length;cn<gr;cn++){const Dn=ln[cn];V.update(Dn,vn),V.bind(Dn,vn)}}return vn}function gl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,W,Z){Ht.get(A.texture).__webglTexture=W,Ht.get(A.depthTexture).__webglTexture=Z;const K=Ht.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Z=Ht.get(A);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const xl=O.createFramebuffer();this.setRenderTarget=function(A,W=0,Z=0){z=A,N=W,F=Z;let K=!0,q=null,mt=!1,wt=!1;if(A){const Ot=Ht.get(A);if(Ot.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(O.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ot.__hasExternalTextures)P.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Ot.__boundDepthTexture!==qt){if(qt!==null&&Ht.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const te=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?q=te[W][Z]:q=te[W],mt=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?q=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?q=te[Z]:q=te,H.copy(A.viewport),j.copy(A.scissor),$=A.scissorTest}else H.copy(Bt).multiplyScalar(Q).floor(),j.copy(he).multiplyScalar(Q).floor(),$=Le;if(Z!==0&&(q=xl),kt.bindFramebuffer(O.FRAMEBUFFER,q)&&K&&kt.drawBuffers(A,q),kt.viewport(H),kt.scissor(j),kt.setScissorTest($),mt){const Ot=Ht.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,Z)}else if(wt){const Ot=Ht.get(A.texture),Qt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,Z,Qt)}else if(A!==null&&Z!==0){const Ot=Ht.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,Z)}C=-1},this.readRenderTargetPixels=function(A,W,Z,K,q,mt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){kt.bindFramebuffer(O.FRAMEBUFFER,Dt);try{const Ot=A.texture,Qt=Ot.format,te=Ot.type;if(!ee.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q&&O.readPixels(W,Z,K,q,ne.convert(Qt),ne.convert(te),mt)}finally{const Ot=z!==null?Ht.get(z).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,W,Z,K,q,mt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Ot=A.texture,Qt=Ot.format,te=Ot.type;if(!ee.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q){kt.bindFramebuffer(O.FRAMEBUFFER,Dt);const qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(W,Z,K,q,ne.convert(Qt),ne.convert(te),0);const Me=z!==null?Ht.get(z).__webglFramebuffer:null;kt.bindFramebuffer(O.FRAMEBUFFER,Me);const we=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await SS(O,we,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.deleteBuffer(qt),O.deleteSync(we),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Z=0){A.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(A.image.width*K),mt=Math.floor(A.image.height*K),wt=W!==null?W.x:0,Dt=W!==null?W.y:0;P.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,wt,Dt,q,mt),kt.unbindTexture()};const Ml=O.createFramebuffer(),El=O.createFramebuffer();this.copyTextureToTexture=function(A,W,Z=null,K=null,q=0,mt=null){A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],mt=arguments[3]||0,Z=null),mt===null&&(q!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=q,q=0):mt=0);let wt,Dt,Ot,Qt,te,qt,Me,we,Ze;const ke=A.isCompressedTexture?A.mipmaps[mt]:A.image;if(Z!==null)wt=Z.max.x-Z.min.x,Dt=Z.max.y-Z.min.y,Ot=Z.isBox3?Z.max.z-Z.min.z:1,Qt=Z.min.x,te=Z.min.y,qt=Z.isBox3?Z.min.z:0;else{const Pn=Math.pow(2,-q);wt=Math.floor(ke.width*Pn),Dt=Math.floor(ke.height*Pn),A.isDataArrayTexture?Ot=ke.depth:A.isData3DTexture?Ot=Math.floor(ke.depth*Pn):Ot=1,Qt=0,te=0,qt=0}K!==null?(Me=K.x,we=K.y,Ze=K.z):(Me=0,we=0,Ze=0);const Ee=ne.convert(W.format),Wt=ne.convert(W.type);let en;W.isData3DTexture?(P.setTexture3D(W,0),en=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),en=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),en=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Te=O.getParameter(O.UNPACK_ROW_LENGTH),vn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ai=O.getParameter(O.UNPACK_SKIP_PIXELS),Tn=O.getParameter(O.UNPACK_SKIP_ROWS),Yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ke.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ke.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,te),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);const Be=A.isDataArrayTexture||A.isData3DTexture,xn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Pn=Ht.get(A),ln=Ht.get(W),cn=Ht.get(Pn.__renderTarget),gr=Ht.get(ln.__renderTarget);kt.bindFramebuffer(O.READ_FRAMEBUFFER,cn.__webglFramebuffer),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,gr.__webglFramebuffer);for(let Dn=0;Dn<Ot;Dn++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,q,qt+Dn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,mt,Ze+Dn)),O.blitFramebuffer(Qt,te,wt,Dt,Me,we,wt,Dt,O.DEPTH_BUFFER_BIT,O.NEAREST);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ht.has(A)){const Pn=Ht.get(A),ln=Ht.get(W);kt.bindFramebuffer(O.READ_FRAMEBUFFER,Ml),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,El);for(let cn=0;cn<Ot;cn++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pn.__webglTexture,q,qt+cn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pn.__webglTexture,q),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ln.__webglTexture,mt,Ze+cn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ln.__webglTexture,mt),q!==0?O.blitFramebuffer(Qt,te,wt,Dt,Me,we,wt,Dt,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(en,mt,Me,we,Ze+cn,Qt,te,wt,Dt):O.copyTexSubImage2D(en,mt,Me,we,Qt,te,wt,Dt);kt.bindFramebuffer(O.READ_FRAMEBUFFER,null),kt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(en,mt,Me,we,Ze,wt,Dt,Ot,Ee,Wt,ke.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(en,mt,Me,we,Ze,wt,Dt,Ot,Ee,ke.data):O.texSubImage3D(en,mt,Me,we,Ze,wt,Dt,Ot,Ee,Wt,ke):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,Me,we,wt,Dt,Ee,Wt,ke.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,Me,we,ke.width,ke.height,Ee,ke.data):O.texSubImage2D(O.TEXTURE_2D,mt,Me,we,wt,Dt,Ee,Wt,ke);O.pixelStorei(O.UNPACK_ROW_LENGTH,Te),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ai),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yi),mt===0&&W.generateMipmaps&&O.generateMipmap(en),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Z=null,K=null,q=0){return A.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Z,K,q)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){N=0,F=0,z=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}}class Gs{constructor(t){xt(this,"mesh");xt(this,"isAlive",!0);this.mesh=t.mesh}afterSpawn(t,e){}update(t,e,i,o){}graphics(t,e,i,o){}kill(){this.isAlive=!1}beforeDeath(t,e,i){}}class _n{constructor(t){xt(this,"center");xt(this,"parts");this.center=t.center,this.parts=t.parts,this.updateParts()}get position(){return this.center}set position(t){this.center=t.clone(),this.updateParts()}updateParts(){for(const t of this.parts)t.mesh.position.set(this.center.x+t.offset.x,this.center.y+t.offset.y,this.center.z+t.offset.z)}}const Zb={createGrid(r,t){const e=[];for(let i=0;i<r;i++){e[i]=[];for(let o=0;o<t;o++){const a={actors:[],isWalkable:!0};e[i][o]=a}}return e}};class Kb{constructor(t){xt(this,"actorsGrid");xt(this,"components",[]);xt(this,"camera");xt(this,"scene");this.actorsGrid=Zb.createGrid(t.width,t.height),this.camera=t.camera??new Zn,this.scene=t.scene??new KS}onStart(t){}onSwitch(t){}addActor(t,e){if(!(0<=e.x&&e.x<this.actorsGrid.length)&&!(0<=e.y&&e.y<this.actorsGrid[0].length))throw new Error(`Position ${e.x},${e.y} is out of bounds`);this.actorsGrid[e.x][e.y].actors.push(t),t.mesh instanceof _n?t.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(t.mesh),t.afterSpawn(this,e)}addComponent(t){this.components.push(t),t.mesh instanceof _n?t.mesh.parts.forEach(e=>this.scene.add(e.mesh)):this.scene.add(t.mesh)}update(t,e){this.actorsGrid.forEach((a,c)=>{a.forEach((u,h)=>{const f=new yt(c,h);u.actors.forEach(p=>p.update(t,e,this,f.clone()))})}),this.components.forEach(a=>a.update(t,e,this)),this.actorsGrid.map((a,c)=>a.map((u,h)=>{const f=new yt(c,h);u.actors.filter(g=>!g.isAlive).forEach(g=>{g.beforeDeath(t,this,f),g.mesh instanceof _n?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)});const _=u.actors.filter(g=>g.isAlive);u.actors=_}));const i=[],o=[];for(let a=0;a<this.components.length;a++){const c=this.components[a];c.isAlive?i.push(c):o.push(c)}o.forEach(a=>{a.mesh instanceof _n?a.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(a.mesh)}),this.components=i}graphics(t,e){this.actorsGrid.forEach((i,o)=>{i.forEach((a,c)=>{const u=new yt(o,c);a.actors.forEach(h=>h.graphics(t,e,this,u.clone()))})}),this.components.forEach(i=>i.graphics(t,e,this))}}var Ls=function(){var r=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(p){p.preventDefault(),i(++r%t.children.length)},!1);function e(p){return t.appendChild(p.dom),p}function i(p){for(var _=0;_<t.children.length;_++)t.children[_].style.display=_===p?"block":"none";r=p}var o=(performance||Date).now(),a=o,c=0,u=e(new Ls.Panel("FPS","#0ff","#002")),h=e(new Ls.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=e(new Ls.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-o,200),p>=a+1e3&&(u.update(c*1e3/(p-a),100),a=p,c=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:t,setMode:i}};Ls.Panel=function(r,t,e){var i=1/0,o=0,a=Math.round,c=a(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,p=2*c,_=3*c,g=15*c,x=74*c,E=30*c,T=document.createElement("canvas");T.width=u,T.height=h,T.style.cssText="width:80px;height:48px";var v=T.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=e,v.fillRect(0,0,u,h),v.fillStyle=t,v.fillText(r,f,p),v.fillRect(_,g,x,E),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_,g,x,E),{dom:T,update:function(m,I){i=Math.min(i,m),o=Math.max(o,m),v.fillStyle=e,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=t,v.fillText(a(m)+" "+r+" ("+a(i)+"-"+a(o)+")",f,p),v.drawImage(T,_+c,g,x-c,E,_,g,x-c,E),v.fillRect(_+x-c,g,c,E),v.fillStyle=e,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,a((1-m/I)*E))}}};const $b="canvas";class Jb{constructor(){xt(this,"wasPressedMap",new Map);xt(this,"pressedMap",new Map);document.addEventListener("keydown",t=>{this.wasPressedMap.set(t.key,!0),this.pressedMap.set(t.key,!0)}),document.addEventListener("keyup",t=>{this.wasPressedMap.set(t.key,!1),this.pressedMap.set(t.key,!1)})}wasPressed(t){const e=this.wasPressedMap.get(t)||!1;return e&&this.wasPressedMap.set(t,!1),e}isPressed(t){return this.pressedMap.get(t)||!1}}const jb=new Jb;class Qb{constructor(){xt(this,"renderer");xt(this,"keyboardHandler");xt(this,"isGameOver",!1);xt(this,"lastUpdate",Date.now());xt(this,"lastGraphics",Date.now());xt(this,"stats",new Ls);xt(this,"containers",new Map);xt(this,"currentContainer");this.renderer=new Yb,this.renderer.setSize(800,800),this.renderer.domElement.id=$b,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=jb,this.stats=new Ls,document.body.appendChild(this.stats.dom);const t=()=>{this.currentContainer&&(this.currentContainer.camera.aspect=window.innerWidth/window.innerHeight,this.currentContainer.camera.updateProjectionMatrix()),this.renderer.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",t),window.requestAnimationFrame(t)}addContainer(t,e){if(this.containers.has(t))throw new Error(`A container with key "${t}" already exists`);this.containers.set(t,e),e.onStart(this)}setContainer(t){if(!this.containers.has(t))throw new Error(`A container with key "${t}" does not exist`);this.currentContainer=this.containers.get(t),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const t=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(t)}};t()}update(){const t=Date.now(),e=Gp(t-this.lastUpdate);this.lastUpdate=t,this.currentContainer&&this.currentContainer.update(this,e)}graphics(){const t=Date.now(),e=Gp(t-this.lastGraphics);this.lastGraphics=t,this.currentContainer&&this.currentContainer.graphics(this,e)}}function Gp(r){return Math.max(0,Math.min(r,1e3))}class _r{constructor(t){xt(this,"mesh");xt(this,"isAlive",!0);this.mesh=t.mesh}update(t,e,i){}graphics(t,e,i){}kill(){this.isAlive=!1}}const At={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",BLUE:"#4f8fba",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc",WOOD:"#341c27"},fn=4,oe={createCube:r=>{const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??65280,i=new Hr(t,t,t,fn,fn,fn),o={color:e},a=r!=null&&r.basicMaterial?new ri(o):new cr(o);return new mn(i,a)},createBox:r=>{var f;const t=(r==null?void 0:r.width)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.depth)??1,o=(r==null?void 0:r.color)??new ct(At.RED),a=new Hr(t,e,i,fn,fn,fn),c=!!(r!=null&&r.transparent),u={color:o,transparent:c,opacity:c?(f=r==null?void 0:r.transparent)==null?void 0:f.value:1},h=r!=null&&r.basicMaterial?new ri(u):new cr(u);return new mn(a,h)},createCone:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new ct(At.RED),o=new ch(t,e,fn,fn),a={color:i},c=r!=null&&r.basicMaterial?new ri(a):new cr(a);return new mn(o,c)},createSphere:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.color)??new ct(At.RED),i=new fh(t,fn,fn),o={color:e},a=r!=null&&r.basicMaterial?new ri(o):new cr(o);return new mn(i,a)},createCylinder:r=>{const t=(r==null?void 0:r.radius)??1,e=(r==null?void 0:r.height)??1,i=(r==null?void 0:r.color)??new ct(At.RED),o=new pl(t,t,e,fn*2,fn),a={color:i},c=r!=null&&r.basicMaterial?new ri(a):new cr(a);return new mn(o,c)},createGem(r){const t=(r==null?void 0:r.size)??1,e=(r==null?void 0:r.color)??new ct(At.RED),i=new hh(t,0),o={color:e},a=r!=null&&r.basicMaterial?new ri(o):new cr(o);return new mn(i,a)},createTorus:r=>{const t=r.radius,e=r.radius/2,i=(r==null?void 0:r.color)??new ct(At.RED),o=new dh(t,e,fn*2,fn),a={color:i},c=r!=null&&r.basicMaterial?new ri(a):new cr(a);return new mn(o,c)},createTorusKnotBlob:r=>{const t=r.radius,e=r.radius/4,i=(r==null?void 0:r.color)??new ct(At.RED),o=new ph(t,e,fn*16,fn,fn*6,fn*2),a={color:i},c=r!=null&&r.basicMaterial?new ri(a):new cr(a);return new mn(o,c)}};class t1 extends Gs{constructor(t){const e=new _n({center:t.position,parts:[{mesh:oe.createBox({width:t.size,height:t.size/4,depth:t.size,color:new ct(At.DARK)}),offset:new D(0,-t.size*3/8,0)},{mesh:oe.createBox({width:t.size*4/5,height:t.size/2,depth:t.size*4/5,color:new ct(At.WHITE)}),offset:new D(0,0,0)},{mesh:oe.createBox({width:t.size,height:t.size/4,depth:t.size,color:new ct(At.DARK)}),offset:new D(0,t.size*3/8,0)}]});super({mesh:e})}}class e1 extends _r{constructor(t){const e=()=>{const o=Math.floor(Math.random()*2)+2,a=Array.from({length:o},()=>oe.createCone({radius:t.size/32,height:t.size/4,color:new ct(At.GREEN)})),c=2;a.forEach(f=>f.rotateOnAxis(new D(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-t.size/2+Math.random()*t.size,h=-t.size/2+Math.random()*t.size;return a.map(f=>({mesh:f,offset:new D(u,t.size*19/32,h)}))},i=()=>{const o=oe.createCone({radius:t.size/32,height:t.size/2,color:new ct(At.GREEN)}),a=oe.createSphere({radius:t.size/32,color:Math.random()<.5?new ct(At.PINK):new ct(At.YELLOW)}),c=-t.size/2+Math.random()*t.size,u=-t.size/2+Math.random()*t.size;return[{mesh:o,offset:new D(c,t.size*10/16,u)},{mesh:a,offset:new D(c,t.size*13/16,u)}]};super({mesh:new _n({center:t.position,parts:[{mesh:oe.createBox({width:t.size,height:t.size/4,depth:t.size,color:t.color??new ct(At.DARK_GREEN)}),offset:new D(0,t.size*3/8,0)},{mesh:oe.createBox({width:t.size,height:t.size*3/4,depth:t.size,color:new ct(At.DIRT)}),offset:new D(0,-t.size/8,0)},...e(),...e(),...Math.random()<.4?i():[]]})})}}var gh=(r=>(r.BATTLEFIELD_CONTAINER="BATTLEFIELD_CONTAINER",r))(gh||{});const vt={TILE_SIZE:1};class Za extends _r{constructor(t){const e=vt.TILE_SIZE/2,i=vt.TILE_SIZE,o=e+Math.random()*i,a=oe.createCone({radius:vt.TILE_SIZE*3,height:o,color:Math.random()<.5?new ct(At.WHITE):new ct(At.WHITE)});a.position.set(t.position.x,o/4,t.position.y),super({mesh:a})}}class n1 extends _r{constructor(t){const e=oe.createSphere({radius:vt.TILE_SIZE/32,color:new ct(At.WHITE),basicMaterial:!0});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}class Ka extends _r{constructor(t){const e=vt.TILE_SIZE*2.5,i=new _n({center:new D(t.position.x,e/2+(Math.random()-.5),t.position.y),parts:[{mesh:oe.createCylinder({radius:vt.TILE_SIZE/8,height:e,color:new ct(At.WOOD)}),offset:new D(0,0,0)},{mesh:oe.createCone({radius:vt.TILE_SIZE/2,height:e-vt.TILE_SIZE/2,color:new ct(At.DARK_GREEN)}),offset:new D(0,e*4/16,0)},{mesh:oe.createCone({radius:vt.TILE_SIZE/2,height:e-1.5*vt.TILE_SIZE/2,color:new ct(At.DARK_GREEN)}),offset:new D(0,e*6/16,0)},{mesh:oe.createCone({radius:vt.TILE_SIZE/2,height:e-2*vt.TILE_SIZE/2,color:new ct(At.WHITE)}),offset:new D(0,e*8/16,0)},{mesh:oe.createCone({radius:vt.TILE_SIZE/2,height:e-2.5*vt.TILE_SIZE/2,color:new ct(At.DARK_GREEN)}),offset:new D(0,e*8/16,0)}]});super({mesh:i})}}class i1 extends _r{constructor(t){const e=new _n({center:t.position,parts:[{mesh:oe.createBox({width:t.width,height:vt.TILE_SIZE*.8,depth:t.height,color:new ct(At.BLUE),transparent:{value:.5}}),offset:new D(0,0,0)},{mesh:oe.createBox({width:t.width,height:vt.TILE_SIZE,depth:t.height,color:new ct(At.DIRT)}),offset:new D(0,-.8,0)}]});e.position.set(t.position.x,t.position.y,t.position.z),super({mesh:e})}}var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lu={},po={},Mo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var r1=Mo.exports,Hp;function s1(){return Hp||(Hp=1,function(r,t){(function(){var e,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",_=1,g=2,x=4,E=1,T=2,v=1,m=2,I=4,L=8,b=16,B=32,N=64,F=128,z=256,C=512,w=30,H="...",j=800,$=16,it=1,ht=2,nt=3,pt=1/0,Q=9007199254740991,bt=17976931348623157e292,It=NaN,Bt=4294967295,he=Bt-1,Le=Bt>>>1,at=[["ary",F],["bind",v],["bindKey",m],["curry",L],["curryRight",b],["flip",C],["partial",B],["partialRight",N],["rearg",z]],gt="[object Arguments]",zt="[object Array]",Rt="[object AsyncFunction]",Xt="[object Boolean]",pe="[object Date]",jt="[object DOMException]",Ge="[object Error]",Pe="[object Function]",me="[object GeneratorFunction]",O="[object Map]",an="[object Number]",ve="[object Null]",ee="[object Object]",kt="[object Promise]",Oe="[object Proxy]",Ht="[object RegExp]",P="[object Set]",S="[object String]",Y="[object Symbol]",ut="[object Undefined]",ft="[object WeakMap]",st="[object WeakSet]",Gt="[object ArrayBuffer]",Mt="[object DataView]",Pt="[object Float32Array]",_e="[object Float64Array]",_t="[object Int8Array]",Ut="[object Int16Array]",Yt="[object Int32Array]",Jt="[object Uint8Array]",Nt="[object Uint8ClampedArray]",de="[object Uint16Array]",ne="[object Uint32Array]",De=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tt=/&(?:amp|lt|gt|quot|#39);/g,lt=/[&<>"']/g,Lt=RegExp(tt.source),Ct=RegExp(lt.source),re=/<%-([\s\S]+?)%>/g,qe=/<%([\s\S]+?)%>/g,tn=/<%=([\s\S]+?)%>/g,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zn=/^\w*$/,ai=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/[\\^$.*+?()[\]{}|]/g,Co=RegExp(Wr.source),li=/^\s+/,Vs=/\s/,Lo=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Io=/\{\n\/\* \[wrapped with (.+)\] \*/,Xr=/,? & /,Po=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,qr=/[()=,{}\[\]\/\s]/,Do=/\\(\\)?/g,Uo=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,No=/\w*$/,gl=/^[-+]0x[0-9a-f]+$/i,vl=/^0b[01]+$/i,xl=/^\[object .+?Constructor\]$/,Ml=/^0o[0-7]+$/i,El=/^(?:0|[1-9]\d*)$/,A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",Dt=q+mt+wt,Ot="\\u2700-\\u27bf",Qt="a-z\\xdf-\\xf6\\xf8-\\xff",te="\\xac\\xb1\\xd7\\xf7",qt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Me="\\u2000-\\u206f",we=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ze="A-Z\\xc0-\\xd6\\xd8-\\xde",ke="\\ufe0e\\ufe0f",Ee=te+qt+Me+we,Wt="['’]",en="["+K+"]",Te="["+Ee+"]",vn="["+Dt+"]",Ai="\\d+",Tn="["+Ot+"]",Yi="["+Qt+"]",Be="[^"+K+Ee+Ai+Ot+Qt+Ze+"]",xn="\\ud83c[\\udffb-\\udfff]",Pn="(?:"+vn+"|"+xn+")",ln="[^"+K+"]",cn="(?:\\ud83c[\\udde6-\\uddff]){2}",gr="[\\ud800-\\udbff][\\udc00-\\udfff]",Dn="["+Ze+"]",xh="\\u200d",Mh="(?:"+Yi+"|"+Be+")",Um="(?:"+Dn+"|"+Be+")",Eh="(?:"+Wt+"(?:d|ll|m|re|s|t|ve))?",Sh="(?:"+Wt+"(?:D|LL|M|RE|S|T|VE))?",yh=Pn+"?",Th="["+ke+"]?",Nm="(?:"+xh+"(?:"+[ln,cn,gr].join("|")+")"+Th+yh+")*",Fm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Om="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wh=Th+yh+Nm,Bm="(?:"+[Tn,cn,gr].join("|")+")"+wh,zm="(?:"+[ln+vn+"?",vn,cn,gr,en].join("|")+")",Gm=RegExp(Wt,"g"),Hm=RegExp(vn,"g"),Sl=RegExp(xn+"(?="+xn+")|"+zm+wh,"g"),Vm=RegExp([Dn+"?"+Yi+"+"+Eh+"(?="+[Te,Dn,"$"].join("|")+")",Um+"+"+Sh+"(?="+[Te,Dn+Mh,"$"].join("|")+")",Dn+"?"+Mh+"+"+Eh,Dn+"+"+Sh,Om,Fm,Ai,Bm].join("|"),"g"),km=RegExp("["+xh+K+Dt+ke+"]"),Wm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Xm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qm=-1,We={};We[Pt]=We[_e]=We[_t]=We[Ut]=We[Yt]=We[Jt]=We[Nt]=We[de]=We[ne]=!0,We[gt]=We[zt]=We[Gt]=We[Xt]=We[Mt]=We[pe]=We[Ge]=We[Pe]=We[O]=We[an]=We[ee]=We[Ht]=We[P]=We[S]=We[ft]=!1;var He={};He[gt]=He[zt]=He[Gt]=He[Mt]=He[Xt]=He[pe]=He[Pt]=He[_e]=He[_t]=He[Ut]=He[Yt]=He[O]=He[an]=He[ee]=He[Ht]=He[P]=He[S]=He[Y]=He[Jt]=He[Nt]=He[de]=He[ne]=!0,He[Ge]=He[Pe]=He[ft]=!1;var Ym={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Zm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Km={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},$m={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Jm=parseFloat,jm=parseInt,Ah=typeof $a=="object"&&$a&&$a.Object===Object&&$a,Qm=typeof self=="object"&&self&&self.Object===Object&&self,dn=Ah||Qm||Function("return this")(),yl=t&&!t.nodeType&&t,vr=yl&&!0&&r&&!r.nodeType&&r,bh=vr&&vr.exports===yl,Tl=bh&&Ah.process,Kn=function(){try{var k=vr&&vr.require&&vr.require("util").types;return k||Tl&&Tl.binding&&Tl.binding("util")}catch{}}(),Rh=Kn&&Kn.isArrayBuffer,Ch=Kn&&Kn.isDate,Lh=Kn&&Kn.isMap,Ih=Kn&&Kn.isRegExp,Ph=Kn&&Kn.isSet,Dh=Kn&&Kn.isTypedArray;function Gn(k,et,J){switch(J.length){case 0:return k.call(et);case 1:return k.call(et,J[0]);case 2:return k.call(et,J[0],J[1]);case 3:return k.call(et,J[0],J[1],J[2])}return k.apply(et,J)}function t_(k,et,J,Ft){for(var ie=-1,Re=k==null?0:k.length;++ie<Re;){var nn=k[ie];et(Ft,nn,J(nn),k)}return Ft}function $n(k,et){for(var J=-1,Ft=k==null?0:k.length;++J<Ft&&et(k[J],J,k)!==!1;);return k}function e_(k,et){for(var J=k==null?0:k.length;J--&&et(k[J],J,k)!==!1;);return k}function Uh(k,et){for(var J=-1,Ft=k==null?0:k.length;++J<Ft;)if(!et(k[J],J,k))return!1;return!0}function Zi(k,et){for(var J=-1,Ft=k==null?0:k.length,ie=0,Re=[];++J<Ft;){var nn=k[J];et(nn,J,k)&&(Re[ie++]=nn)}return Re}function Fo(k,et){var J=k==null?0:k.length;return!!J&&Yr(k,et,0)>-1}function wl(k,et,J){for(var Ft=-1,ie=k==null?0:k.length;++Ft<ie;)if(J(et,k[Ft]))return!0;return!1}function Ye(k,et){for(var J=-1,Ft=k==null?0:k.length,ie=Array(Ft);++J<Ft;)ie[J]=et(k[J],J,k);return ie}function Ki(k,et){for(var J=-1,Ft=et.length,ie=k.length;++J<Ft;)k[ie+J]=et[J];return k}function Al(k,et,J,Ft){var ie=-1,Re=k==null?0:k.length;for(Ft&&Re&&(J=k[++ie]);++ie<Re;)J=et(J,k[ie],ie,k);return J}function n_(k,et,J,Ft){var ie=k==null?0:k.length;for(Ft&&ie&&(J=k[--ie]);ie--;)J=et(J,k[ie],ie,k);return J}function bl(k,et){for(var J=-1,Ft=k==null?0:k.length;++J<Ft;)if(et(k[J],J,k))return!0;return!1}var i_=Rl("length");function r_(k){return k.split("")}function s_(k){return k.match(Po)||[]}function Nh(k,et,J){var Ft;return J(k,function(ie,Re,nn){if(et(ie,Re,nn))return Ft=Re,!1}),Ft}function Oo(k,et,J,Ft){for(var ie=k.length,Re=J+(Ft?1:-1);Ft?Re--:++Re<ie;)if(et(k[Re],Re,k))return Re;return-1}function Yr(k,et,J){return et===et?g_(k,et,J):Oo(k,Fh,J)}function o_(k,et,J,Ft){for(var ie=J-1,Re=k.length;++ie<Re;)if(Ft(k[ie],et))return ie;return-1}function Fh(k){return k!==k}function Oh(k,et){var J=k==null?0:k.length;return J?Ll(k,et)/J:It}function Rl(k){return function(et){return et==null?e:et[k]}}function Cl(k){return function(et){return k==null?e:k[et]}}function Bh(k,et,J,Ft,ie){return ie(k,function(Re,nn,ze){J=Ft?(Ft=!1,Re):et(J,Re,nn,ze)}),J}function a_(k,et){var J=k.length;for(k.sort(et);J--;)k[J]=k[J].value;return k}function Ll(k,et){for(var J,Ft=-1,ie=k.length;++Ft<ie;){var Re=et(k[Ft]);Re!==e&&(J=J===e?Re:J+Re)}return J}function Il(k,et){for(var J=-1,Ft=Array(k);++J<k;)Ft[J]=et(J);return Ft}function l_(k,et){return Ye(et,function(J){return[J,k[J]]})}function zh(k){return k&&k.slice(0,kh(k)+1).replace(li,"")}function Hn(k){return function(et){return k(et)}}function Pl(k,et){return Ye(et,function(J){return k[J]})}function ks(k,et){return k.has(et)}function Gh(k,et){for(var J=-1,Ft=k.length;++J<Ft&&Yr(et,k[J],0)>-1;);return J}function Hh(k,et){for(var J=k.length;J--&&Yr(et,k[J],0)>-1;);return J}function c_(k,et){for(var J=k.length,Ft=0;J--;)k[J]===et&&++Ft;return Ft}var u_=Cl(Ym),h_=Cl(Zm);function f_(k){return"\\"+$m[k]}function d_(k,et){return k==null?e:k[et]}function Zr(k){return km.test(k)}function p_(k){return Wm.test(k)}function m_(k){for(var et,J=[];!(et=k.next()).done;)J.push(et.value);return J}function Dl(k){var et=-1,J=Array(k.size);return k.forEach(function(Ft,ie){J[++et]=[ie,Ft]}),J}function Vh(k,et){return function(J){return k(et(J))}}function $i(k,et){for(var J=-1,Ft=k.length,ie=0,Re=[];++J<Ft;){var nn=k[J];(nn===et||nn===p)&&(k[J]=p,Re[ie++]=J)}return Re}function Bo(k){var et=-1,J=Array(k.size);return k.forEach(function(Ft){J[++et]=Ft}),J}function __(k){var et=-1,J=Array(k.size);return k.forEach(function(Ft){J[++et]=[Ft,Ft]}),J}function g_(k,et,J){for(var Ft=J-1,ie=k.length;++Ft<ie;)if(k[Ft]===et)return Ft;return-1}function v_(k,et,J){for(var Ft=J+1;Ft--;)if(k[Ft]===et)return Ft;return Ft}function Kr(k){return Zr(k)?M_(k):i_(k)}function ci(k){return Zr(k)?E_(k):r_(k)}function kh(k){for(var et=k.length;et--&&Vs.test(k.charAt(et)););return et}var x_=Cl(Km);function M_(k){for(var et=Sl.lastIndex=0;Sl.test(k);)++et;return et}function E_(k){return k.match(Sl)||[]}function S_(k){return k.match(Vm)||[]}var y_=function k(et){et=et==null?dn:$r.defaults(dn.Object(),et,$r.pick(dn,Xm));var J=et.Array,Ft=et.Date,ie=et.Error,Re=et.Function,nn=et.Math,ze=et.Object,Ul=et.RegExp,T_=et.String,Jn=et.TypeError,zo=J.prototype,w_=Re.prototype,Jr=ze.prototype,Go=et["__core-js_shared__"],Ho=w_.toString,Ie=Jr.hasOwnProperty,A_=0,Wh=function(){var n=/[^.]+$/.exec(Go&&Go.keys&&Go.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Vo=Jr.toString,b_=Ho.call(ze),R_=dn._,C_=Ul("^"+Ho.call(Ie).replace(Wr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ko=bh?et.Buffer:e,Ji=et.Symbol,Wo=et.Uint8Array,Xh=ko?ko.allocUnsafe:e,Xo=Vh(ze.getPrototypeOf,ze),qh=ze.create,Yh=Jr.propertyIsEnumerable,qo=zo.splice,Zh=Ji?Ji.isConcatSpreadable:e,Ws=Ji?Ji.iterator:e,xr=Ji?Ji.toStringTag:e,Yo=function(){try{var n=Tr(ze,"defineProperty");return n({},"",{}),n}catch{}}(),L_=et.clearTimeout!==dn.clearTimeout&&et.clearTimeout,I_=Ft&&Ft.now!==dn.Date.now&&Ft.now,P_=et.setTimeout!==dn.setTimeout&&et.setTimeout,Zo=nn.ceil,Ko=nn.floor,Nl=ze.getOwnPropertySymbols,D_=ko?ko.isBuffer:e,Kh=et.isFinite,U_=zo.join,N_=Vh(ze.keys,ze),rn=nn.max,Mn=nn.min,F_=Ft.now,O_=et.parseInt,$h=nn.random,B_=zo.reverse,Fl=Tr(et,"DataView"),Xs=Tr(et,"Map"),Ol=Tr(et,"Promise"),jr=Tr(et,"Set"),qs=Tr(et,"WeakMap"),Ys=Tr(ze,"create"),$o=qs&&new qs,Qr={},z_=wr(Fl),G_=wr(Xs),H_=wr(Ol),V_=wr(jr),k_=wr(qs),Jo=Ji?Ji.prototype:e,Zs=Jo?Jo.valueOf:e,Jh=Jo?Jo.toString:e;function y(n){if($e(n)&&!se(n)&&!(n instanceof xe)){if(n instanceof jn)return n;if(Ie.call(n,"__wrapped__"))return Qf(n)}return new jn(n)}var ts=function(){function n(){}return function(s){if(!Ke(s))return{};if(qh)return qh(s);n.prototype=s;var l=new n;return n.prototype=e,l}}();function jo(){}function jn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=e}y.templateSettings={escape:re,evaluate:qe,interpolate:tn,variable:"",imports:{_:y}},y.prototype=jo.prototype,y.prototype.constructor=y,jn.prototype=ts(jo.prototype),jn.prototype.constructor=jn;function xe(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Bt,this.__views__=[]}function W_(){var n=new xe(this.__wrapped__);return n.__actions__=Un(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Un(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Un(this.__views__),n}function X_(){if(this.__filtered__){var n=new xe(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function q_(){var n=this.__wrapped__.value(),s=this.__dir__,l=se(n),d=s<0,M=l?n.length:0,R=r0(0,M,this.__views__),U=R.start,G=R.end,X=G-U,rt=d?G:U-1,ot=this.__iteratees__,dt=ot.length,Et=0,Vt=Mn(X,this.__takeCount__);if(!l||!d&&M==X&&Vt==X)return Sf(n,this.__actions__);var Kt=[];t:for(;X--&&Et<Vt;){rt+=s;for(var ce=-1,$t=n[rt];++ce<dt;){var ge=ot[ce],Se=ge.iteratee,Wn=ge.type,bn=Se($t);if(Wn==ht)$t=bn;else if(!bn){if(Wn==it)continue t;break t}}Kt[Et++]=$t}return Kt}xe.prototype=ts(jo.prototype),xe.prototype.constructor=xe;function Mr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function Y_(){this.__data__=Ys?Ys(null):{},this.size=0}function Z_(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function K_(n){var s=this.__data__;if(Ys){var l=s[n];return l===h?e:l}return Ie.call(s,n)?s[n]:e}function $_(n){var s=this.__data__;return Ys?s[n]!==e:Ie.call(s,n)}function J_(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ys&&s===e?h:s,this}Mr.prototype.clear=Y_,Mr.prototype.delete=Z_,Mr.prototype.get=K_,Mr.prototype.has=$_,Mr.prototype.set=J_;function bi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function j_(){this.__data__=[],this.size=0}function Q_(n){var s=this.__data__,l=Qo(s,n);if(l<0)return!1;var d=s.length-1;return l==d?s.pop():qo.call(s,l,1),--this.size,!0}function tg(n){var s=this.__data__,l=Qo(s,n);return l<0?e:s[l][1]}function eg(n){return Qo(this.__data__,n)>-1}function ng(n,s){var l=this.__data__,d=Qo(l,n);return d<0?(++this.size,l.push([n,s])):l[d][1]=s,this}bi.prototype.clear=j_,bi.prototype.delete=Q_,bi.prototype.get=tg,bi.prototype.has=eg,bi.prototype.set=ng;function Ri(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var d=n[s];this.set(d[0],d[1])}}function ig(){this.size=0,this.__data__={hash:new Mr,map:new(Xs||bi),string:new Mr}}function rg(n){var s=ha(this,n).delete(n);return this.size-=s?1:0,s}function sg(n){return ha(this,n).get(n)}function og(n){return ha(this,n).has(n)}function ag(n,s){var l=ha(this,n),d=l.size;return l.set(n,s),this.size+=l.size==d?0:1,this}Ri.prototype.clear=ig,Ri.prototype.delete=rg,Ri.prototype.get=sg,Ri.prototype.has=og,Ri.prototype.set=ag;function Er(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++s<l;)this.add(n[s])}function lg(n){return this.__data__.set(n,h),this}function cg(n){return this.__data__.has(n)}Er.prototype.add=Er.prototype.push=lg,Er.prototype.has=cg;function ui(n){var s=this.__data__=new bi(n);this.size=s.size}function ug(){this.__data__=new bi,this.size=0}function hg(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function fg(n){return this.__data__.get(n)}function dg(n){return this.__data__.has(n)}function pg(n,s){var l=this.__data__;if(l instanceof bi){var d=l.__data__;if(!Xs||d.length<o-1)return d.push([n,s]),this.size=++l.size,this;l=this.__data__=new Ri(d)}return l.set(n,s),this.size=l.size,this}ui.prototype.clear=ug,ui.prototype.delete=hg,ui.prototype.get=fg,ui.prototype.has=dg,ui.prototype.set=pg;function jh(n,s){var l=se(n),d=!l&&Ar(n),M=!l&&!d&&nr(n),R=!l&&!d&&!M&&rs(n),U=l||d||M||R,G=U?Il(n.length,T_):[],X=G.length;for(var rt in n)(s||Ie.call(n,rt))&&!(U&&(rt=="length"||M&&(rt=="offset"||rt=="parent")||R&&(rt=="buffer"||rt=="byteLength"||rt=="byteOffset")||Pi(rt,X)))&&G.push(rt);return G}function Qh(n){var s=n.length;return s?n[Zl(0,s-1)]:e}function mg(n,s){return fa(Un(n),Sr(s,0,n.length))}function _g(n){return fa(Un(n))}function Bl(n,s,l){(l!==e&&!hi(n[s],l)||l===e&&!(s in n))&&Ci(n,s,l)}function Ks(n,s,l){var d=n[s];(!(Ie.call(n,s)&&hi(d,l))||l===e&&!(s in n))&&Ci(n,s,l)}function Qo(n,s){for(var l=n.length;l--;)if(hi(n[l][0],s))return l;return-1}function gg(n,s,l,d){return ji(n,function(M,R,U){s(d,M,l(M),U)}),d}function tf(n,s){return n&&Mi(s,un(s),n)}function vg(n,s){return n&&Mi(s,Fn(s),n)}function Ci(n,s,l){s=="__proto__"&&Yo?Yo(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function zl(n,s){for(var l=-1,d=s.length,M=J(d),R=n==null;++l<d;)M[l]=R?e:xc(n,s[l]);return M}function Sr(n,s,l){return n===n&&(l!==e&&(n=n<=l?n:l),s!==e&&(n=n>=s?n:s)),n}function Qn(n,s,l,d,M,R){var U,G=s&_,X=s&g,rt=s&x;if(l&&(U=M?l(n,d,M,R):l(n)),U!==e)return U;if(!Ke(n))return n;var ot=se(n);if(ot){if(U=o0(n),!G)return Un(n,U)}else{var dt=En(n),Et=dt==Pe||dt==me;if(nr(n))return wf(n,G);if(dt==ee||dt==gt||Et&&!M){if(U=X||Et?{}:Wf(n),!G)return X?Kg(n,vg(U,n)):Zg(n,tf(U,n))}else{if(!He[dt])return M?n:{};U=a0(n,dt,G)}}R||(R=new ui);var Vt=R.get(n);if(Vt)return Vt;R.set(n,U),xd(n)?n.forEach(function($t){U.add(Qn($t,s,l,$t,n,R))}):gd(n)&&n.forEach(function($t,ge){U.set(ge,Qn($t,s,l,ge,n,R))});var Kt=rt?X?sc:rc:X?Fn:un,ce=ot?e:Kt(n);return $n(ce||n,function($t,ge){ce&&(ge=$t,$t=n[ge]),Ks(U,ge,Qn($t,s,l,ge,n,R))}),U}function xg(n){var s=un(n);return function(l){return ef(l,n,s)}}function ef(n,s,l){var d=l.length;if(n==null)return!d;for(n=ze(n);d--;){var M=l[d],R=s[M],U=n[M];if(U===e&&!(M in n)||!R(U))return!1}return!0}function nf(n,s,l){if(typeof n!="function")throw new Jn(c);return no(function(){n.apply(e,l)},s)}function $s(n,s,l,d){var M=-1,R=Fo,U=!0,G=n.length,X=[],rt=s.length;if(!G)return X;l&&(s=Ye(s,Hn(l))),d?(R=wl,U=!1):s.length>=o&&(R=ks,U=!1,s=new Er(s));t:for(;++M<G;){var ot=n[M],dt=l==null?ot:l(ot);if(ot=d||ot!==0?ot:0,U&&dt===dt){for(var Et=rt;Et--;)if(s[Et]===dt)continue t;X.push(ot)}else R(s,dt,d)||X.push(ot)}return X}var ji=Lf(xi),rf=Lf(Hl,!0);function Mg(n,s){var l=!0;return ji(n,function(d,M,R){return l=!!s(d,M,R),l}),l}function ta(n,s,l){for(var d=-1,M=n.length;++d<M;){var R=n[d],U=s(R);if(U!=null&&(G===e?U===U&&!kn(U):l(U,G)))var G=U,X=R}return X}function Eg(n,s,l,d){var M=n.length;for(l=ae(l),l<0&&(l=-l>M?0:M+l),d=d===e||d>M?M:ae(d),d<0&&(d+=M),d=l>d?0:Ed(d);l<d;)n[l++]=s;return n}function sf(n,s){var l=[];return ji(n,function(d,M,R){s(d,M,R)&&l.push(d)}),l}function pn(n,s,l,d,M){var R=-1,U=n.length;for(l||(l=c0),M||(M=[]);++R<U;){var G=n[R];s>0&&l(G)?s>1?pn(G,s-1,l,d,M):Ki(M,G):d||(M[M.length]=G)}return M}var Gl=If(),of=If(!0);function xi(n,s){return n&&Gl(n,s,un)}function Hl(n,s){return n&&of(n,s,un)}function ea(n,s){return Zi(s,function(l){return Di(n[l])})}function yr(n,s){s=tr(s,n);for(var l=0,d=s.length;n!=null&&l<d;)n=n[Ei(s[l++])];return l&&l==d?n:e}function af(n,s,l){var d=s(n);return se(n)?d:Ki(d,l(n))}function wn(n){return n==null?n===e?ut:ve:xr&&xr in ze(n)?i0(n):_0(n)}function Vl(n,s){return n>s}function Sg(n,s){return n!=null&&Ie.call(n,s)}function yg(n,s){return n!=null&&s in ze(n)}function Tg(n,s,l){return n>=Mn(s,l)&&n<rn(s,l)}function kl(n,s,l){for(var d=l?wl:Fo,M=n[0].length,R=n.length,U=R,G=J(R),X=1/0,rt=[];U--;){var ot=n[U];U&&s&&(ot=Ye(ot,Hn(s))),X=Mn(ot.length,X),G[U]=!l&&(s||M>=120&&ot.length>=120)?new Er(U&&ot):e}ot=n[0];var dt=-1,Et=G[0];t:for(;++dt<M&&rt.length<X;){var Vt=ot[dt],Kt=s?s(Vt):Vt;if(Vt=l||Vt!==0?Vt:0,!(Et?ks(Et,Kt):d(rt,Kt,l))){for(U=R;--U;){var ce=G[U];if(!(ce?ks(ce,Kt):d(n[U],Kt,l)))continue t}Et&&Et.push(Kt),rt.push(Vt)}}return rt}function wg(n,s,l,d){return xi(n,function(M,R,U){s(d,l(M),R,U)}),d}function Js(n,s,l){s=tr(s,n),n=Zf(n,s);var d=n==null?n:n[Ei(ei(s))];return d==null?e:Gn(d,n,l)}function lf(n){return $e(n)&&wn(n)==gt}function Ag(n){return $e(n)&&wn(n)==Gt}function bg(n){return $e(n)&&wn(n)==pe}function js(n,s,l,d,M){return n===s?!0:n==null||s==null||!$e(n)&&!$e(s)?n!==n&&s!==s:Rg(n,s,l,d,js,M)}function Rg(n,s,l,d,M,R){var U=se(n),G=se(s),X=U?zt:En(n),rt=G?zt:En(s);X=X==gt?ee:X,rt=rt==gt?ee:rt;var ot=X==ee,dt=rt==ee,Et=X==rt;if(Et&&nr(n)){if(!nr(s))return!1;U=!0,ot=!1}if(Et&&!ot)return R||(R=new ui),U||rs(n)?Hf(n,s,l,d,M,R):e0(n,s,X,l,d,M,R);if(!(l&E)){var Vt=ot&&Ie.call(n,"__wrapped__"),Kt=dt&&Ie.call(s,"__wrapped__");if(Vt||Kt){var ce=Vt?n.value():n,$t=Kt?s.value():s;return R||(R=new ui),M(ce,$t,l,d,R)}}return Et?(R||(R=new ui),n0(n,s,l,d,M,R)):!1}function Cg(n){return $e(n)&&En(n)==O}function Wl(n,s,l,d){var M=l.length,R=M,U=!d;if(n==null)return!R;for(n=ze(n);M--;){var G=l[M];if(U&&G[2]?G[1]!==n[G[0]]:!(G[0]in n))return!1}for(;++M<R;){G=l[M];var X=G[0],rt=n[X],ot=G[1];if(U&&G[2]){if(rt===e&&!(X in n))return!1}else{var dt=new ui;if(d)var Et=d(rt,ot,X,n,s,dt);if(!(Et===e?js(ot,rt,E|T,d,dt):Et))return!1}}return!0}function cf(n){if(!Ke(n)||h0(n))return!1;var s=Di(n)?C_:xl;return s.test(wr(n))}function Lg(n){return $e(n)&&wn(n)==Ht}function Ig(n){return $e(n)&&En(n)==P}function Pg(n){return $e(n)&&va(n.length)&&!!We[wn(n)]}function uf(n){return typeof n=="function"?n:n==null?On:typeof n=="object"?se(n)?df(n[0],n[1]):ff(n):Pd(n)}function Xl(n){if(!eo(n))return N_(n);var s=[];for(var l in ze(n))Ie.call(n,l)&&l!="constructor"&&s.push(l);return s}function Dg(n){if(!Ke(n))return m0(n);var s=eo(n),l=[];for(var d in n)d=="constructor"&&(s||!Ie.call(n,d))||l.push(d);return l}function ql(n,s){return n<s}function hf(n,s){var l=-1,d=Nn(n)?J(n.length):[];return ji(n,function(M,R,U){d[++l]=s(M,R,U)}),d}function ff(n){var s=ac(n);return s.length==1&&s[0][2]?qf(s[0][0],s[0][1]):function(l){return l===n||Wl(l,n,s)}}function df(n,s){return cc(n)&&Xf(s)?qf(Ei(n),s):function(l){var d=xc(l,n);return d===e&&d===s?Mc(l,n):js(s,d,E|T)}}function na(n,s,l,d,M){n!==s&&Gl(s,function(R,U){if(M||(M=new ui),Ke(R))Ug(n,s,U,l,na,d,M);else{var G=d?d(hc(n,U),R,U+"",n,s,M):e;G===e&&(G=R),Bl(n,U,G)}},Fn)}function Ug(n,s,l,d,M,R,U){var G=hc(n,l),X=hc(s,l),rt=U.get(X);if(rt){Bl(n,l,rt);return}var ot=R?R(G,X,l+"",n,s,U):e,dt=ot===e;if(dt){var Et=se(X),Vt=!Et&&nr(X),Kt=!Et&&!Vt&&rs(X);ot=X,Et||Vt||Kt?se(G)?ot=G:Je(G)?ot=Un(G):Vt?(dt=!1,ot=wf(X,!0)):Kt?(dt=!1,ot=Af(X,!0)):ot=[]:io(X)||Ar(X)?(ot=G,Ar(G)?ot=Sd(G):(!Ke(G)||Di(G))&&(ot=Wf(X))):dt=!1}dt&&(U.set(X,ot),M(ot,X,d,R,U),U.delete(X)),Bl(n,l,ot)}function pf(n,s){var l=n.length;if(l)return s+=s<0?l:0,Pi(s,l)?n[s]:e}function mf(n,s,l){s.length?s=Ye(s,function(R){return se(R)?function(U){return yr(U,R.length===1?R[0]:R)}:R}):s=[On];var d=-1;s=Ye(s,Hn(Zt()));var M=hf(n,function(R,U,G){var X=Ye(s,function(rt){return rt(R)});return{criteria:X,index:++d,value:R}});return a_(M,function(R,U){return Yg(R,U,l)})}function Ng(n,s){return _f(n,s,function(l,d){return Mc(n,d)})}function _f(n,s,l){for(var d=-1,M=s.length,R={};++d<M;){var U=s[d],G=yr(n,U);l(G,U)&&Qs(R,tr(U,n),G)}return R}function Fg(n){return function(s){return yr(s,n)}}function Yl(n,s,l,d){var M=d?o_:Yr,R=-1,U=s.length,G=n;for(n===s&&(s=Un(s)),l&&(G=Ye(n,Hn(l)));++R<U;)for(var X=0,rt=s[R],ot=l?l(rt):rt;(X=M(G,ot,X,d))>-1;)G!==n&&qo.call(G,X,1),qo.call(n,X,1);return n}function gf(n,s){for(var l=n?s.length:0,d=l-1;l--;){var M=s[l];if(l==d||M!==R){var R=M;Pi(M)?qo.call(n,M,1):Jl(n,M)}}return n}function Zl(n,s){return n+Ko($h()*(s-n+1))}function Og(n,s,l,d){for(var M=-1,R=rn(Zo((s-n)/(l||1)),0),U=J(R);R--;)U[d?R:++M]=n,n+=l;return U}function Kl(n,s){var l="";if(!n||s<1||s>Q)return l;do s%2&&(l+=n),s=Ko(s/2),s&&(n+=n);while(s);return l}function fe(n,s){return fc(Yf(n,s,On),n+"")}function Bg(n){return Qh(ss(n))}function zg(n,s){var l=ss(n);return fa(l,Sr(s,0,l.length))}function Qs(n,s,l,d){if(!Ke(n))return n;s=tr(s,n);for(var M=-1,R=s.length,U=R-1,G=n;G!=null&&++M<R;){var X=Ei(s[M]),rt=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=U){var ot=G[X];rt=d?d(ot,X,G):e,rt===e&&(rt=Ke(ot)?ot:Pi(s[M+1])?[]:{})}Ks(G,X,rt),G=G[X]}return n}var vf=$o?function(n,s){return $o.set(n,s),n}:On,Gg=Yo?function(n,s){return Yo(n,"toString",{configurable:!0,enumerable:!1,value:Sc(s),writable:!0})}:On;function Hg(n){return fa(ss(n))}function ti(n,s,l){var d=-1,M=n.length;s<0&&(s=-s>M?0:M+s),l=l>M?M:l,l<0&&(l+=M),M=s>l?0:l-s>>>0,s>>>=0;for(var R=J(M);++d<M;)R[d]=n[d+s];return R}function Vg(n,s){var l;return ji(n,function(d,M,R){return l=s(d,M,R),!l}),!!l}function ia(n,s,l){var d=0,M=n==null?d:n.length;if(typeof s=="number"&&s===s&&M<=Le){for(;d<M;){var R=d+M>>>1,U=n[R];U!==null&&!kn(U)&&(l?U<=s:U<s)?d=R+1:M=R}return M}return $l(n,s,On,l)}function $l(n,s,l,d){var M=0,R=n==null?0:n.length;if(R===0)return 0;s=l(s);for(var U=s!==s,G=s===null,X=kn(s),rt=s===e;M<R;){var ot=Ko((M+R)/2),dt=l(n[ot]),Et=dt!==e,Vt=dt===null,Kt=dt===dt,ce=kn(dt);if(U)var $t=d||Kt;else rt?$t=Kt&&(d||Et):G?$t=Kt&&Et&&(d||!Vt):X?$t=Kt&&Et&&!Vt&&(d||!ce):Vt||ce?$t=!1:$t=d?dt<=s:dt<s;$t?M=ot+1:R=ot}return Mn(R,he)}function xf(n,s){for(var l=-1,d=n.length,M=0,R=[];++l<d;){var U=n[l],G=s?s(U):U;if(!l||!hi(G,X)){var X=G;R[M++]=U===0?0:U}}return R}function Mf(n){return typeof n=="number"?n:kn(n)?It:+n}function Vn(n){if(typeof n=="string")return n;if(se(n))return Ye(n,Vn)+"";if(kn(n))return Jh?Jh.call(n):"";var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function Qi(n,s,l){var d=-1,M=Fo,R=n.length,U=!0,G=[],X=G;if(l)U=!1,M=wl;else if(R>=o){var rt=s?null:Qg(n);if(rt)return Bo(rt);U=!1,M=ks,X=new Er}else X=s?[]:G;t:for(;++d<R;){var ot=n[d],dt=s?s(ot):ot;if(ot=l||ot!==0?ot:0,U&&dt===dt){for(var Et=X.length;Et--;)if(X[Et]===dt)continue t;s&&X.push(dt),G.push(ot)}else M(X,dt,l)||(X!==G&&X.push(dt),G.push(ot))}return G}function Jl(n,s){return s=tr(s,n),n=Zf(n,s),n==null||delete n[Ei(ei(s))]}function Ef(n,s,l,d){return Qs(n,s,l(yr(n,s)),d)}function ra(n,s,l,d){for(var M=n.length,R=d?M:-1;(d?R--:++R<M)&&s(n[R],R,n););return l?ti(n,d?0:R,d?R+1:M):ti(n,d?R+1:0,d?M:R)}function Sf(n,s){var l=n;return l instanceof xe&&(l=l.value()),Al(s,function(d,M){return M.func.apply(M.thisArg,Ki([d],M.args))},l)}function jl(n,s,l){var d=n.length;if(d<2)return d?Qi(n[0]):[];for(var M=-1,R=J(d);++M<d;)for(var U=n[M],G=-1;++G<d;)G!=M&&(R[M]=$s(R[M]||U,n[G],s,l));return Qi(pn(R,1),s,l)}function yf(n,s,l){for(var d=-1,M=n.length,R=s.length,U={};++d<M;){var G=d<R?s[d]:e;l(U,n[d],G)}return U}function Ql(n){return Je(n)?n:[]}function tc(n){return typeof n=="function"?n:On}function tr(n,s){return se(n)?n:cc(n,s)?[n]:jf(Ce(n))}var kg=fe;function er(n,s,l){var d=n.length;return l=l===e?d:l,!s&&l>=d?n:ti(n,s,l)}var Tf=L_||function(n){return dn.clearTimeout(n)};function wf(n,s){if(s)return n.slice();var l=n.length,d=Xh?Xh(l):new n.constructor(l);return n.copy(d),d}function ec(n){var s=new n.constructor(n.byteLength);return new Wo(s).set(new Wo(n)),s}function Wg(n,s){var l=s?ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Xg(n){var s=new n.constructor(n.source,No.exec(n));return s.lastIndex=n.lastIndex,s}function qg(n){return Zs?ze(Zs.call(n)):{}}function Af(n,s){var l=s?ec(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function bf(n,s){if(n!==s){var l=n!==e,d=n===null,M=n===n,R=kn(n),U=s!==e,G=s===null,X=s===s,rt=kn(s);if(!G&&!rt&&!R&&n>s||R&&U&&X&&!G&&!rt||d&&U&&X||!l&&X||!M)return 1;if(!d&&!R&&!rt&&n<s||rt&&l&&M&&!d&&!R||G&&l&&M||!U&&M||!X)return-1}return 0}function Yg(n,s,l){for(var d=-1,M=n.criteria,R=s.criteria,U=M.length,G=l.length;++d<U;){var X=bf(M[d],R[d]);if(X){if(d>=G)return X;var rt=l[d];return X*(rt=="desc"?-1:1)}}return n.index-s.index}function Rf(n,s,l,d){for(var M=-1,R=n.length,U=l.length,G=-1,X=s.length,rt=rn(R-U,0),ot=J(X+rt),dt=!d;++G<X;)ot[G]=s[G];for(;++M<U;)(dt||M<R)&&(ot[l[M]]=n[M]);for(;rt--;)ot[G++]=n[M++];return ot}function Cf(n,s,l,d){for(var M=-1,R=n.length,U=-1,G=l.length,X=-1,rt=s.length,ot=rn(R-G,0),dt=J(ot+rt),Et=!d;++M<ot;)dt[M]=n[M];for(var Vt=M;++X<rt;)dt[Vt+X]=s[X];for(;++U<G;)(Et||M<R)&&(dt[Vt+l[U]]=n[M++]);return dt}function Un(n,s){var l=-1,d=n.length;for(s||(s=J(d));++l<d;)s[l]=n[l];return s}function Mi(n,s,l,d){var M=!l;l||(l={});for(var R=-1,U=s.length;++R<U;){var G=s[R],X=d?d(l[G],n[G],G,l,n):e;X===e&&(X=n[G]),M?Ci(l,G,X):Ks(l,G,X)}return l}function Zg(n,s){return Mi(n,lc(n),s)}function Kg(n,s){return Mi(n,Vf(n),s)}function sa(n,s){return function(l,d){var M=se(l)?t_:gg,R=s?s():{};return M(l,n,Zt(d,2),R)}}function es(n){return fe(function(s,l){var d=-1,M=l.length,R=M>1?l[M-1]:e,U=M>2?l[2]:e;for(R=n.length>3&&typeof R=="function"?(M--,R):e,U&&An(l[0],l[1],U)&&(R=M<3?e:R,M=1),s=ze(s);++d<M;){var G=l[d];G&&n(s,G,d,R)}return s})}function Lf(n,s){return function(l,d){if(l==null)return l;if(!Nn(l))return n(l,d);for(var M=l.length,R=s?M:-1,U=ze(l);(s?R--:++R<M)&&d(U[R],R,U)!==!1;);return l}}function If(n){return function(s,l,d){for(var M=-1,R=ze(s),U=d(s),G=U.length;G--;){var X=U[n?G:++M];if(l(R[X],X,R)===!1)break}return s}}function $g(n,s,l){var d=s&v,M=to(n);function R(){var U=this&&this!==dn&&this instanceof R?M:n;return U.apply(d?l:this,arguments)}return R}function Pf(n){return function(s){s=Ce(s);var l=Zr(s)?ci(s):e,d=l?l[0]:s.charAt(0),M=l?er(l,1).join(""):s.slice(1);return d[n]()+M}}function ns(n){return function(s){return Al(Ld(Cd(s).replace(Gm,"")),n,"")}}function to(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=ts(n.prototype),d=n.apply(l,s);return Ke(d)?d:l}}function Jg(n,s,l){var d=to(n);function M(){for(var R=arguments.length,U=J(R),G=R,X=is(M);G--;)U[G]=arguments[G];var rt=R<3&&U[0]!==X&&U[R-1]!==X?[]:$i(U,X);if(R-=rt.length,R<l)return Of(n,s,oa,M.placeholder,e,U,rt,e,e,l-R);var ot=this&&this!==dn&&this instanceof M?d:n;return Gn(ot,this,U)}return M}function Df(n){return function(s,l,d){var M=ze(s);if(!Nn(s)){var R=Zt(l,3);s=un(s),l=function(G){return R(M[G],G,M)}}var U=n(s,l,d);return U>-1?M[R?s[U]:U]:e}}function Uf(n){return Ii(function(s){var l=s.length,d=l,M=jn.prototype.thru;for(n&&s.reverse();d--;){var R=s[d];if(typeof R!="function")throw new Jn(c);if(M&&!U&&ua(R)=="wrapper")var U=new jn([],!0)}for(d=U?d:l;++d<l;){R=s[d];var G=ua(R),X=G=="wrapper"?oc(R):e;X&&uc(X[0])&&X[1]==(F|L|B|z)&&!X[4].length&&X[9]==1?U=U[ua(X[0])].apply(U,X[3]):U=R.length==1&&uc(R)?U[G]():U.thru(R)}return function(){var rt=arguments,ot=rt[0];if(U&&rt.length==1&&se(ot))return U.plant(ot).value();for(var dt=0,Et=l?s[dt].apply(this,rt):ot;++dt<l;)Et=s[dt].call(this,Et);return Et}})}function oa(n,s,l,d,M,R,U,G,X,rt){var ot=s&F,dt=s&v,Et=s&m,Vt=s&(L|b),Kt=s&C,ce=Et?e:to(n);function $t(){for(var ge=arguments.length,Se=J(ge),Wn=ge;Wn--;)Se[Wn]=arguments[Wn];if(Vt)var bn=is($t),Xn=c_(Se,bn);if(d&&(Se=Rf(Se,d,M,Vt)),R&&(Se=Cf(Se,R,U,Vt)),ge-=Xn,Vt&&ge<rt){var je=$i(Se,bn);return Of(n,s,oa,$t.placeholder,l,Se,je,G,X,rt-ge)}var fi=dt?l:this,Ni=Et?fi[n]:n;return ge=Se.length,G?Se=g0(Se,G):Kt&&ge>1&&Se.reverse(),ot&&X<ge&&(Se.length=X),this&&this!==dn&&this instanceof $t&&(Ni=ce||to(Ni)),Ni.apply(fi,Se)}return $t}function Nf(n,s){return function(l,d){return wg(l,n,s(d),{})}}function aa(n,s){return function(l,d){var M;if(l===e&&d===e)return s;if(l!==e&&(M=l),d!==e){if(M===e)return d;typeof l=="string"||typeof d=="string"?(l=Vn(l),d=Vn(d)):(l=Mf(l),d=Mf(d)),M=n(l,d)}return M}}function nc(n){return Ii(function(s){return s=Ye(s,Hn(Zt())),fe(function(l){var d=this;return n(s,function(M){return Gn(M,d,l)})})})}function la(n,s){s=s===e?" ":Vn(s);var l=s.length;if(l<2)return l?Kl(s,n):s;var d=Kl(s,Zo(n/Kr(s)));return Zr(s)?er(ci(d),0,n).join(""):d.slice(0,n)}function jg(n,s,l,d){var M=s&v,R=to(n);function U(){for(var G=-1,X=arguments.length,rt=-1,ot=d.length,dt=J(ot+X),Et=this&&this!==dn&&this instanceof U?R:n;++rt<ot;)dt[rt]=d[rt];for(;X--;)dt[rt++]=arguments[++G];return Gn(Et,M?l:this,dt)}return U}function Ff(n){return function(s,l,d){return d&&typeof d!="number"&&An(s,l,d)&&(l=d=e),s=Ui(s),l===e?(l=s,s=0):l=Ui(l),d=d===e?s<l?1:-1:Ui(d),Og(s,l,d,n)}}function ca(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=ni(s),l=ni(l)),n(s,l)}}function Of(n,s,l,d,M,R,U,G,X,rt){var ot=s&L,dt=ot?U:e,Et=ot?e:U,Vt=ot?R:e,Kt=ot?e:R;s|=ot?B:N,s&=~(ot?N:B),s&I||(s&=-4);var ce=[n,s,M,Vt,dt,Kt,Et,G,X,rt],$t=l.apply(e,ce);return uc(n)&&Kf($t,ce),$t.placeholder=d,$f($t,n,s)}function ic(n){var s=nn[n];return function(l,d){if(l=ni(l),d=d==null?0:Mn(ae(d),292),d&&Kh(l)){var M=(Ce(l)+"e").split("e"),R=s(M[0]+"e"+(+M[1]+d));return M=(Ce(R)+"e").split("e"),+(M[0]+"e"+(+M[1]-d))}return s(l)}}var Qg=jr&&1/Bo(new jr([,-0]))[1]==pt?function(n){return new jr(n)}:wc;function Bf(n){return function(s){var l=En(s);return l==O?Dl(s):l==P?__(s):l_(s,n(s))}}function Li(n,s,l,d,M,R,U,G){var X=s&m;if(!X&&typeof n!="function")throw new Jn(c);var rt=d?d.length:0;if(rt||(s&=-97,d=M=e),U=U===e?U:rn(ae(U),0),G=G===e?G:ae(G),rt-=M?M.length:0,s&N){var ot=d,dt=M;d=M=e}var Et=X?e:oc(n),Vt=[n,s,l,d,M,ot,dt,R,U,G];if(Et&&p0(Vt,Et),n=Vt[0],s=Vt[1],l=Vt[2],d=Vt[3],M=Vt[4],G=Vt[9]=Vt[9]===e?X?0:n.length:rn(Vt[9]-rt,0),!G&&s&(L|b)&&(s&=-25),!s||s==v)var Kt=$g(n,s,l);else s==L||s==b?Kt=Jg(n,s,G):(s==B||s==(v|B))&&!M.length?Kt=jg(n,s,l,d):Kt=oa.apply(e,Vt);var ce=Et?vf:Kf;return $f(ce(Kt,Vt),n,s)}function zf(n,s,l,d){return n===e||hi(n,Jr[l])&&!Ie.call(d,l)?s:n}function Gf(n,s,l,d,M,R){return Ke(n)&&Ke(s)&&(R.set(s,n),na(n,s,e,Gf,R),R.delete(s)),n}function t0(n){return io(n)?e:n}function Hf(n,s,l,d,M,R){var U=l&E,G=n.length,X=s.length;if(G!=X&&!(U&&X>G))return!1;var rt=R.get(n),ot=R.get(s);if(rt&&ot)return rt==s&&ot==n;var dt=-1,Et=!0,Vt=l&T?new Er:e;for(R.set(n,s),R.set(s,n);++dt<G;){var Kt=n[dt],ce=s[dt];if(d)var $t=U?d(ce,Kt,dt,s,n,R):d(Kt,ce,dt,n,s,R);if($t!==e){if($t)continue;Et=!1;break}if(Vt){if(!bl(s,function(ge,Se){if(!ks(Vt,Se)&&(Kt===ge||M(Kt,ge,l,d,R)))return Vt.push(Se)})){Et=!1;break}}else if(!(Kt===ce||M(Kt,ce,l,d,R))){Et=!1;break}}return R.delete(n),R.delete(s),Et}function e0(n,s,l,d,M,R,U){switch(l){case Mt:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case Gt:return!(n.byteLength!=s.byteLength||!R(new Wo(n),new Wo(s)));case Xt:case pe:case an:return hi(+n,+s);case Ge:return n.name==s.name&&n.message==s.message;case Ht:case S:return n==s+"";case O:var G=Dl;case P:var X=d&E;if(G||(G=Bo),n.size!=s.size&&!X)return!1;var rt=U.get(n);if(rt)return rt==s;d|=T,U.set(n,s);var ot=Hf(G(n),G(s),d,M,R,U);return U.delete(n),ot;case Y:if(Zs)return Zs.call(n)==Zs.call(s)}return!1}function n0(n,s,l,d,M,R){var U=l&E,G=rc(n),X=G.length,rt=rc(s),ot=rt.length;if(X!=ot&&!U)return!1;for(var dt=X;dt--;){var Et=G[dt];if(!(U?Et in s:Ie.call(s,Et)))return!1}var Vt=R.get(n),Kt=R.get(s);if(Vt&&Kt)return Vt==s&&Kt==n;var ce=!0;R.set(n,s),R.set(s,n);for(var $t=U;++dt<X;){Et=G[dt];var ge=n[Et],Se=s[Et];if(d)var Wn=U?d(Se,ge,Et,s,n,R):d(ge,Se,Et,n,s,R);if(!(Wn===e?ge===Se||M(ge,Se,l,d,R):Wn)){ce=!1;break}$t||($t=Et=="constructor")}if(ce&&!$t){var bn=n.constructor,Xn=s.constructor;bn!=Xn&&"constructor"in n&&"constructor"in s&&!(typeof bn=="function"&&bn instanceof bn&&typeof Xn=="function"&&Xn instanceof Xn)&&(ce=!1)}return R.delete(n),R.delete(s),ce}function Ii(n){return fc(Yf(n,e,nd),n+"")}function rc(n){return af(n,un,lc)}function sc(n){return af(n,Fn,Vf)}var oc=$o?function(n){return $o.get(n)}:wc;function ua(n){for(var s=n.name+"",l=Qr[s],d=Ie.call(Qr,s)?l.length:0;d--;){var M=l[d],R=M.func;if(R==null||R==n)return M.name}return s}function is(n){var s=Ie.call(y,"placeholder")?y:n;return s.placeholder}function Zt(){var n=y.iteratee||yc;return n=n===yc?uf:n,arguments.length?n(arguments[0],arguments[1]):n}function ha(n,s){var l=n.__data__;return u0(s)?l[typeof s=="string"?"string":"hash"]:l.map}function ac(n){for(var s=un(n),l=s.length;l--;){var d=s[l],M=n[d];s[l]=[d,M,Xf(M)]}return s}function Tr(n,s){var l=d_(n,s);return cf(l)?l:e}function i0(n){var s=Ie.call(n,xr),l=n[xr];try{n[xr]=e;var d=!0}catch{}var M=Vo.call(n);return d&&(s?n[xr]=l:delete n[xr]),M}var lc=Nl?function(n){return n==null?[]:(n=ze(n),Zi(Nl(n),function(s){return Yh.call(n,s)}))}:Ac,Vf=Nl?function(n){for(var s=[];n;)Ki(s,lc(n)),n=Xo(n);return s}:Ac,En=wn;(Fl&&En(new Fl(new ArrayBuffer(1)))!=Mt||Xs&&En(new Xs)!=O||Ol&&En(Ol.resolve())!=kt||jr&&En(new jr)!=P||qs&&En(new qs)!=ft)&&(En=function(n){var s=wn(n),l=s==ee?n.constructor:e,d=l?wr(l):"";if(d)switch(d){case z_:return Mt;case G_:return O;case H_:return kt;case V_:return P;case k_:return ft}return s});function r0(n,s,l){for(var d=-1,M=l.length;++d<M;){var R=l[d],U=R.size;switch(R.type){case"drop":n+=U;break;case"dropRight":s-=U;break;case"take":s=Mn(s,n+U);break;case"takeRight":n=rn(n,s-U);break}}return{start:n,end:s}}function s0(n){var s=n.match(Io);return s?s[1].split(Xr):[]}function kf(n,s,l){s=tr(s,n);for(var d=-1,M=s.length,R=!1;++d<M;){var U=Ei(s[d]);if(!(R=n!=null&&l(n,U)))break;n=n[U]}return R||++d!=M?R:(M=n==null?0:n.length,!!M&&va(M)&&Pi(U,M)&&(se(n)||Ar(n)))}function o0(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Ie.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Wf(n){return typeof n.constructor=="function"&&!eo(n)?ts(Xo(n)):{}}function a0(n,s,l){var d=n.constructor;switch(s){case Gt:return ec(n);case Xt:case pe:return new d(+n);case Mt:return Wg(n,l);case Pt:case _e:case _t:case Ut:case Yt:case Jt:case Nt:case de:case ne:return Af(n,l);case O:return new d;case an:case S:return new d(n);case Ht:return Xg(n);case P:return new d;case Y:return qg(n)}}function l0(n,s){var l=s.length;if(!l)return n;var d=l-1;return s[d]=(l>1?"& ":"")+s[d],s=s.join(l>2?", ":" "),n.replace(Lo,`{
/* [wrapped with `+s+`] */
`)}function c0(n){return se(n)||Ar(n)||!!(Zh&&n&&n[Zh])}function Pi(n,s){var l=typeof n;return s=s??Q,!!s&&(l=="number"||l!="symbol"&&El.test(n))&&n>-1&&n%1==0&&n<s}function An(n,s,l){if(!Ke(l))return!1;var d=typeof s;return(d=="number"?Nn(l)&&Pi(s,l.length):d=="string"&&s in l)?hi(l[s],n):!1}function cc(n,s){if(se(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||kn(n)?!0:zn.test(n)||!be.test(n)||s!=null&&n in ze(s)}function u0(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function uc(n){var s=ua(n),l=y[s];if(typeof l!="function"||!(s in xe.prototype))return!1;if(n===l)return!0;var d=oc(l);return!!d&&n===d[0]}function h0(n){return!!Wh&&Wh in n}var f0=Go?Di:bc;function eo(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Jr;return n===l}function Xf(n){return n===n&&!Ke(n)}function qf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==e||n in ze(l))}}function d0(n){var s=_a(n,function(d){return l.size===f&&l.clear(),d}),l=s.cache;return s}function p0(n,s){var l=n[1],d=s[1],M=l|d,R=M<(v|m|F),U=d==F&&l==L||d==F&&l==z&&n[7].length<=s[8]||d==(F|z)&&s[7].length<=s[8]&&l==L;if(!(R||U))return n;d&v&&(n[2]=s[2],M|=l&v?0:I);var G=s[3];if(G){var X=n[3];n[3]=X?Rf(X,G,s[4]):G,n[4]=X?$i(n[3],p):s[4]}return G=s[5],G&&(X=n[5],n[5]=X?Cf(X,G,s[6]):G,n[6]=X?$i(n[5],p):s[6]),G=s[7],G&&(n[7]=G),d&F&&(n[8]=n[8]==null?s[8]:Mn(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=M,n}function m0(n){var s=[];if(n!=null)for(var l in ze(n))s.push(l);return s}function _0(n){return Vo.call(n)}function Yf(n,s,l){return s=rn(s===e?n.length-1:s,0),function(){for(var d=arguments,M=-1,R=rn(d.length-s,0),U=J(R);++M<R;)U[M]=d[s+M];M=-1;for(var G=J(s+1);++M<s;)G[M]=d[M];return G[s]=l(U),Gn(n,this,G)}}function Zf(n,s){return s.length<2?n:yr(n,ti(s,0,-1))}function g0(n,s){for(var l=n.length,d=Mn(s.length,l),M=Un(n);d--;){var R=s[d];n[d]=Pi(R,l)?M[R]:e}return n}function hc(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Kf=Jf(vf),no=P_||function(n,s){return dn.setTimeout(n,s)},fc=Jf(Gg);function $f(n,s,l){var d=s+"";return fc(n,l0(d,v0(s0(d),l)))}function Jf(n){var s=0,l=0;return function(){var d=F_(),M=$-(d-l);if(l=d,M>0){if(++s>=j)return arguments[0]}else s=0;return n.apply(e,arguments)}}function fa(n,s){var l=-1,d=n.length,M=d-1;for(s=s===e?d:s;++l<s;){var R=Zl(l,M),U=n[R];n[R]=n[l],n[l]=U}return n.length=s,n}var jf=d0(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(ai,function(l,d,M,R){s.push(M?R.replace(Do,"$1"):d||l)}),s});function Ei(n){if(typeof n=="string"||kn(n))return n;var s=n+"";return s=="0"&&1/n==-1/0?"-0":s}function wr(n){if(n!=null){try{return Ho.call(n)}catch{}try{return n+""}catch{}}return""}function v0(n,s){return $n(at,function(l){var d="_."+l[0];s&l[1]&&!Fo(n,d)&&n.push(d)}),n.sort()}function Qf(n){if(n instanceof xe)return n.clone();var s=new jn(n.__wrapped__,n.__chain__);return s.__actions__=Un(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function x0(n,s,l){(l?An(n,s,l):s===e)?s=1:s=rn(ae(s),0);var d=n==null?0:n.length;if(!d||s<1)return[];for(var M=0,R=0,U=J(Zo(d/s));M<d;)U[R++]=ti(n,M,M+=s);return U}function M0(n){for(var s=-1,l=n==null?0:n.length,d=0,M=[];++s<l;){var R=n[s];R&&(M[d++]=R)}return M}function E0(){var n=arguments.length;if(!n)return[];for(var s=J(n-1),l=arguments[0],d=n;d--;)s[d-1]=arguments[d];return Ki(se(l)?Un(l):[l],pn(s,1))}var S0=fe(function(n,s){return Je(n)?$s(n,pn(s,1,Je,!0)):[]}),y0=fe(function(n,s){var l=ei(s);return Je(l)&&(l=e),Je(n)?$s(n,pn(s,1,Je,!0),Zt(l,2)):[]}),T0=fe(function(n,s){var l=ei(s);return Je(l)&&(l=e),Je(n)?$s(n,pn(s,1,Je,!0),e,l):[]});function w0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),ti(n,s<0?0:s,d)):[]}function A0(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),s=d-s,ti(n,0,s<0?0:s)):[]}function b0(n,s){return n&&n.length?ra(n,Zt(s,3),!0,!0):[]}function R0(n,s){return n&&n.length?ra(n,Zt(s,3),!0):[]}function C0(n,s,l,d){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&An(n,s,l)&&(l=0,d=M),Eg(n,s,l,d)):[]}function td(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(d+M,0)),Oo(n,Zt(s,3),M)}function ed(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d-1;return l!==e&&(M=ae(l),M=l<0?rn(d+M,0):Mn(M,d-1)),Oo(n,Zt(s,3),M,!0)}function nd(n){var s=n==null?0:n.length;return s?pn(n,1):[]}function L0(n){var s=n==null?0:n.length;return s?pn(n,pt):[]}function I0(n,s){var l=n==null?0:n.length;return l?(s=s===e?1:ae(s),pn(n,s)):[]}function P0(n){for(var s=-1,l=n==null?0:n.length,d={};++s<l;){var M=n[s];d[M[0]]=M[1]}return d}function id(n){return n&&n.length?n[0]:e}function D0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=l==null?0:ae(l);return M<0&&(M=rn(d+M,0)),Yr(n,s,M)}function U0(n){var s=n==null?0:n.length;return s?ti(n,0,-1):[]}var N0=fe(function(n){var s=Ye(n,Ql);return s.length&&s[0]===n[0]?kl(s):[]}),F0=fe(function(n){var s=ei(n),l=Ye(n,Ql);return s===ei(l)?s=e:l.pop(),l.length&&l[0]===n[0]?kl(l,Zt(s,2)):[]}),O0=fe(function(n){var s=ei(n),l=Ye(n,Ql);return s=typeof s=="function"?s:e,s&&l.pop(),l.length&&l[0]===n[0]?kl(l,e,s):[]});function B0(n,s){return n==null?"":U_.call(n,s)}function ei(n){var s=n==null?0:n.length;return s?n[s-1]:e}function z0(n,s,l){var d=n==null?0:n.length;if(!d)return-1;var M=d;return l!==e&&(M=ae(l),M=M<0?rn(d+M,0):Mn(M,d-1)),s===s?v_(n,s,M):Oo(n,Fh,M,!0)}function G0(n,s){return n&&n.length?pf(n,ae(s)):e}var H0=fe(rd);function rd(n,s){return n&&n.length&&s&&s.length?Yl(n,s):n}function V0(n,s,l){return n&&n.length&&s&&s.length?Yl(n,s,Zt(l,2)):n}function k0(n,s,l){return n&&n.length&&s&&s.length?Yl(n,s,e,l):n}var W0=Ii(function(n,s){var l=n==null?0:n.length,d=zl(n,s);return gf(n,Ye(s,function(M){return Pi(M,l)?+M:M}).sort(bf)),d});function X0(n,s){var l=[];if(!(n&&n.length))return l;var d=-1,M=[],R=n.length;for(s=Zt(s,3);++d<R;){var U=n[d];s(U,d,n)&&(l.push(U),M.push(d))}return gf(n,M),l}function dc(n){return n==null?n:B_.call(n)}function q0(n,s,l){var d=n==null?0:n.length;return d?(l&&typeof l!="number"&&An(n,s,l)?(s=0,l=d):(s=s==null?0:ae(s),l=l===e?d:ae(l)),ti(n,s,l)):[]}function Y0(n,s){return ia(n,s)}function Z0(n,s,l){return $l(n,s,Zt(l,2))}function K0(n,s){var l=n==null?0:n.length;if(l){var d=ia(n,s);if(d<l&&hi(n[d],s))return d}return-1}function $0(n,s){return ia(n,s,!0)}function J0(n,s,l){return $l(n,s,Zt(l,2),!0)}function j0(n,s){var l=n==null?0:n.length;if(l){var d=ia(n,s,!0)-1;if(hi(n[d],s))return d}return-1}function Q0(n){return n&&n.length?xf(n):[]}function tv(n,s){return n&&n.length?xf(n,Zt(s,2)):[]}function ev(n){var s=n==null?0:n.length;return s?ti(n,1,s):[]}function nv(n,s,l){return n&&n.length?(s=l||s===e?1:ae(s),ti(n,0,s<0?0:s)):[]}function iv(n,s,l){var d=n==null?0:n.length;return d?(s=l||s===e?1:ae(s),s=d-s,ti(n,s<0?0:s,d)):[]}function rv(n,s){return n&&n.length?ra(n,Zt(s,3),!1,!0):[]}function sv(n,s){return n&&n.length?ra(n,Zt(s,3)):[]}var ov=fe(function(n){return Qi(pn(n,1,Je,!0))}),av=fe(function(n){var s=ei(n);return Je(s)&&(s=e),Qi(pn(n,1,Je,!0),Zt(s,2))}),lv=fe(function(n){var s=ei(n);return s=typeof s=="function"?s:e,Qi(pn(n,1,Je,!0),e,s)});function cv(n){return n&&n.length?Qi(n):[]}function uv(n,s){return n&&n.length?Qi(n,Zt(s,2)):[]}function hv(n,s){return s=typeof s=="function"?s:e,n&&n.length?Qi(n,e,s):[]}function pc(n){if(!(n&&n.length))return[];var s=0;return n=Zi(n,function(l){if(Je(l))return s=rn(l.length,s),!0}),Il(s,function(l){return Ye(n,Rl(l))})}function sd(n,s){if(!(n&&n.length))return[];var l=pc(n);return s==null?l:Ye(l,function(d){return Gn(s,e,d)})}var fv=fe(function(n,s){return Je(n)?$s(n,s):[]}),dv=fe(function(n){return jl(Zi(n,Je))}),pv=fe(function(n){var s=ei(n);return Je(s)&&(s=e),jl(Zi(n,Je),Zt(s,2))}),mv=fe(function(n){var s=ei(n);return s=typeof s=="function"?s:e,jl(Zi(n,Je),e,s)}),_v=fe(pc);function gv(n,s){return yf(n||[],s||[],Ks)}function vv(n,s){return yf(n||[],s||[],Qs)}var xv=fe(function(n){var s=n.length,l=s>1?n[s-1]:e;return l=typeof l=="function"?(n.pop(),l):e,sd(n,l)});function od(n){var s=y(n);return s.__chain__=!0,s}function Mv(n,s){return s(n),n}function da(n,s){return s(n)}var Ev=Ii(function(n){var s=n.length,l=s?n[0]:0,d=this.__wrapped__,M=function(R){return zl(R,n)};return s>1||this.__actions__.length||!(d instanceof xe)||!Pi(l)?this.thru(M):(d=d.slice(l,+l+(s?1:0)),d.__actions__.push({func:da,args:[M],thisArg:e}),new jn(d,this.__chain__).thru(function(R){return s&&!R.length&&R.push(e),R}))});function Sv(){return od(this)}function yv(){return new jn(this.value(),this.__chain__)}function Tv(){this.__values__===e&&(this.__values__=Md(this.value()));var n=this.__index__>=this.__values__.length,s=n?e:this.__values__[this.__index__++];return{done:n,value:s}}function wv(){return this}function Av(n){for(var s,l=this;l instanceof jo;){var d=Qf(l);d.__index__=0,d.__values__=e,s?M.__wrapped__=d:s=d;var M=d;l=l.__wrapped__}return M.__wrapped__=n,s}function bv(){var n=this.__wrapped__;if(n instanceof xe){var s=n;return this.__actions__.length&&(s=new xe(this)),s=s.reverse(),s.__actions__.push({func:da,args:[dc],thisArg:e}),new jn(s,this.__chain__)}return this.thru(dc)}function Rv(){return Sf(this.__wrapped__,this.__actions__)}var Cv=sa(function(n,s,l){Ie.call(n,l)?++n[l]:Ci(n,l,1)});function Lv(n,s,l){var d=se(n)?Uh:Mg;return l&&An(n,s,l)&&(s=e),d(n,Zt(s,3))}function Iv(n,s){var l=se(n)?Zi:sf;return l(n,Zt(s,3))}var Pv=Df(td),Dv=Df(ed);function Uv(n,s){return pn(pa(n,s),1)}function Nv(n,s){return pn(pa(n,s),pt)}function Fv(n,s,l){return l=l===e?1:ae(l),pn(pa(n,s),l)}function ad(n,s){var l=se(n)?$n:ji;return l(n,Zt(s,3))}function ld(n,s){var l=se(n)?e_:rf;return l(n,Zt(s,3))}var Ov=sa(function(n,s,l){Ie.call(n,l)?n[l].push(s):Ci(n,l,[s])});function Bv(n,s,l,d){n=Nn(n)?n:ss(n),l=l&&!d?ae(l):0;var M=n.length;return l<0&&(l=rn(M+l,0)),xa(n)?l<=M&&n.indexOf(s,l)>-1:!!M&&Yr(n,s,l)>-1}var zv=fe(function(n,s,l){var d=-1,M=typeof s=="function",R=Nn(n)?J(n.length):[];return ji(n,function(U){R[++d]=M?Gn(s,U,l):Js(U,s,l)}),R}),Gv=sa(function(n,s,l){Ci(n,l,s)});function pa(n,s){var l=se(n)?Ye:hf;return l(n,Zt(s,3))}function Hv(n,s,l,d){return n==null?[]:(se(s)||(s=s==null?[]:[s]),l=d?e:l,se(l)||(l=l==null?[]:[l]),mf(n,s,l))}var Vv=sa(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function kv(n,s,l){var d=se(n)?Al:Bh,M=arguments.length<3;return d(n,Zt(s,4),l,M,ji)}function Wv(n,s,l){var d=se(n)?n_:Bh,M=arguments.length<3;return d(n,Zt(s,4),l,M,rf)}function Xv(n,s){var l=se(n)?Zi:sf;return l(n,ga(Zt(s,3)))}function qv(n){var s=se(n)?Qh:Bg;return s(n)}function Yv(n,s,l){(l?An(n,s,l):s===e)?s=1:s=ae(s);var d=se(n)?mg:zg;return d(n,s)}function Zv(n){var s=se(n)?_g:Hg;return s(n)}function Kv(n){if(n==null)return 0;if(Nn(n))return xa(n)?Kr(n):n.length;var s=En(n);return s==O||s==P?n.size:Xl(n).length}function $v(n,s,l){var d=se(n)?bl:Vg;return l&&An(n,s,l)&&(s=e),d(n,Zt(s,3))}var Jv=fe(function(n,s){if(n==null)return[];var l=s.length;return l>1&&An(n,s[0],s[1])?s=[]:l>2&&An(s[0],s[1],s[2])&&(s=[s[0]]),mf(n,pn(s,1),[])}),ma=I_||function(){return dn.Date.now()};function jv(n,s){if(typeof s!="function")throw new Jn(c);return n=ae(n),function(){if(--n<1)return s.apply(this,arguments)}}function cd(n,s,l){return s=l?e:s,s=n&&s==null?n.length:s,Li(n,F,e,e,e,e,s)}function ud(n,s){var l;if(typeof s!="function")throw new Jn(c);return n=ae(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=e),l}}var mc=fe(function(n,s,l){var d=v;if(l.length){var M=$i(l,is(mc));d|=B}return Li(n,d,s,l,M)}),hd=fe(function(n,s,l){var d=v|m;if(l.length){var M=$i(l,is(hd));d|=B}return Li(s,d,n,l,M)});function fd(n,s,l){s=l?e:s;var d=Li(n,L,e,e,e,e,e,s);return d.placeholder=fd.placeholder,d}function dd(n,s,l){s=l?e:s;var d=Li(n,b,e,e,e,e,e,s);return d.placeholder=dd.placeholder,d}function pd(n,s,l){var d,M,R,U,G,X,rt=0,ot=!1,dt=!1,Et=!0;if(typeof n!="function")throw new Jn(c);s=ni(s)||0,Ke(l)&&(ot=!!l.leading,dt="maxWait"in l,R=dt?rn(ni(l.maxWait)||0,s):R,Et="trailing"in l?!!l.trailing:Et);function Vt(je){var fi=d,Ni=M;return d=M=e,rt=je,U=n.apply(Ni,fi),U}function Kt(je){return rt=je,G=no(ge,s),ot?Vt(je):U}function ce(je){var fi=je-X,Ni=je-rt,Dd=s-fi;return dt?Mn(Dd,R-Ni):Dd}function $t(je){var fi=je-X,Ni=je-rt;return X===e||fi>=s||fi<0||dt&&Ni>=R}function ge(){var je=ma();if($t(je))return Se(je);G=no(ge,ce(je))}function Se(je){return G=e,Et&&d?Vt(je):(d=M=e,U)}function Wn(){G!==e&&Tf(G),rt=0,d=X=M=G=e}function bn(){return G===e?U:Se(ma())}function Xn(){var je=ma(),fi=$t(je);if(d=arguments,M=this,X=je,fi){if(G===e)return Kt(X);if(dt)return Tf(G),G=no(ge,s),Vt(X)}return G===e&&(G=no(ge,s)),U}return Xn.cancel=Wn,Xn.flush=bn,Xn}var Qv=fe(function(n,s){return nf(n,1,s)}),tx=fe(function(n,s,l){return nf(n,ni(s)||0,l)});function ex(n){return Li(n,C)}function _a(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Jn(c);var l=function(){var d=arguments,M=s?s.apply(this,d):d[0],R=l.cache;if(R.has(M))return R.get(M);var U=n.apply(this,d);return l.cache=R.set(M,U)||R,U};return l.cache=new(_a.Cache||Ri),l}_a.Cache=Ri;function ga(n){if(typeof n!="function")throw new Jn(c);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function nx(n){return ud(2,n)}var ix=kg(function(n,s){s=s.length==1&&se(s[0])?Ye(s[0],Hn(Zt())):Ye(pn(s,1),Hn(Zt()));var l=s.length;return fe(function(d){for(var M=-1,R=Mn(d.length,l);++M<R;)d[M]=s[M].call(this,d[M]);return Gn(n,this,d)})}),_c=fe(function(n,s){var l=$i(s,is(_c));return Li(n,B,e,s,l)}),md=fe(function(n,s){var l=$i(s,is(md));return Li(n,N,e,s,l)}),rx=Ii(function(n,s){return Li(n,z,e,e,e,s)});function sx(n,s){if(typeof n!="function")throw new Jn(c);return s=s===e?s:ae(s),fe(n,s)}function ox(n,s){if(typeof n!="function")throw new Jn(c);return s=s==null?0:rn(ae(s),0),fe(function(l){var d=l[s],M=er(l,0,s);return d&&Ki(M,d),Gn(n,this,M)})}function ax(n,s,l){var d=!0,M=!0;if(typeof n!="function")throw new Jn(c);return Ke(l)&&(d="leading"in l?!!l.leading:d,M="trailing"in l?!!l.trailing:M),pd(n,s,{leading:d,maxWait:s,trailing:M})}function lx(n){return cd(n,1)}function cx(n,s){return _c(tc(s),n)}function ux(){if(!arguments.length)return[];var n=arguments[0];return se(n)?n:[n]}function hx(n){return Qn(n,x)}function fx(n,s){return s=typeof s=="function"?s:e,Qn(n,x,s)}function dx(n){return Qn(n,_|x)}function px(n,s){return s=typeof s=="function"?s:e,Qn(n,_|x,s)}function mx(n,s){return s==null||ef(n,s,un(s))}function hi(n,s){return n===s||n!==n&&s!==s}var _x=ca(Vl),gx=ca(function(n,s){return n>=s}),Ar=lf(function(){return arguments}())?lf:function(n){return $e(n)&&Ie.call(n,"callee")&&!Yh.call(n,"callee")},se=J.isArray,vx=Rh?Hn(Rh):Ag;function Nn(n){return n!=null&&va(n.length)&&!Di(n)}function Je(n){return $e(n)&&Nn(n)}function xx(n){return n===!0||n===!1||$e(n)&&wn(n)==Xt}var nr=D_||bc,Mx=Ch?Hn(Ch):bg;function Ex(n){return $e(n)&&n.nodeType===1&&!io(n)}function Sx(n){if(n==null)return!0;if(Nn(n)&&(se(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||rs(n)||Ar(n)))return!n.length;var s=En(n);if(s==O||s==P)return!n.size;if(eo(n))return!Xl(n).length;for(var l in n)if(Ie.call(n,l))return!1;return!0}function yx(n,s){return js(n,s)}function Tx(n,s,l){l=typeof l=="function"?l:e;var d=l?l(n,s):e;return d===e?js(n,s,e,l):!!d}function gc(n){if(!$e(n))return!1;var s=wn(n);return s==Ge||s==jt||typeof n.message=="string"&&typeof n.name=="string"&&!io(n)}function wx(n){return typeof n=="number"&&Kh(n)}function Di(n){if(!Ke(n))return!1;var s=wn(n);return s==Pe||s==me||s==Rt||s==Oe}function _d(n){return typeof n=="number"&&n==ae(n)}function va(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Q}function Ke(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function $e(n){return n!=null&&typeof n=="object"}var gd=Lh?Hn(Lh):Cg;function Ax(n,s){return n===s||Wl(n,s,ac(s))}function bx(n,s,l){return l=typeof l=="function"?l:e,Wl(n,s,ac(s),l)}function Rx(n){return vd(n)&&n!=+n}function Cx(n){if(f0(n))throw new ie(a);return cf(n)}function Lx(n){return n===null}function Ix(n){return n==null}function vd(n){return typeof n=="number"||$e(n)&&wn(n)==an}function io(n){if(!$e(n)||wn(n)!=ee)return!1;var s=Xo(n);if(s===null)return!0;var l=Ie.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Ho.call(l)==b_}var vc=Ih?Hn(Ih):Lg;function Px(n){return _d(n)&&n>=-9007199254740991&&n<=Q}var xd=Ph?Hn(Ph):Ig;function xa(n){return typeof n=="string"||!se(n)&&$e(n)&&wn(n)==S}function kn(n){return typeof n=="symbol"||$e(n)&&wn(n)==Y}var rs=Dh?Hn(Dh):Pg;function Dx(n){return n===e}function Ux(n){return $e(n)&&En(n)==ft}function Nx(n){return $e(n)&&wn(n)==st}var Fx=ca(ql),Ox=ca(function(n,s){return n<=s});function Md(n){if(!n)return[];if(Nn(n))return xa(n)?ci(n):Un(n);if(Ws&&n[Ws])return m_(n[Ws]());var s=En(n),l=s==O?Dl:s==P?Bo:ss;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=ni(n),n===pt||n===-1/0){var s=n<0?-1:1;return s*bt}return n===n?n:0}function ae(n){var s=Ui(n),l=s%1;return s===s?l?s-l:s:0}function Ed(n){return n?Sr(ae(n),0,Bt):0}function ni(n){if(typeof n=="number")return n;if(kn(n))return It;if(Ke(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Ke(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=zh(n);var l=vl.test(n);return l||Ml.test(n)?jm(n.slice(2),l?2:8):gl.test(n)?It:+n}function Sd(n){return Mi(n,Fn(n))}function Bx(n){return n?Sr(ae(n),-9007199254740991,Q):n===0?n:0}function Ce(n){return n==null?"":Vn(n)}var zx=es(function(n,s){if(eo(s)||Nn(s)){Mi(s,un(s),n);return}for(var l in s)Ie.call(s,l)&&Ks(n,l,s[l])}),yd=es(function(n,s){Mi(s,Fn(s),n)}),Ma=es(function(n,s,l,d){Mi(s,Fn(s),n,d)}),Gx=es(function(n,s,l,d){Mi(s,un(s),n,d)}),Hx=Ii(zl);function Vx(n,s){var l=ts(n);return s==null?l:tf(l,s)}var kx=fe(function(n,s){n=ze(n);var l=-1,d=s.length,M=d>2?s[2]:e;for(M&&An(s[0],s[1],M)&&(d=1);++l<d;)for(var R=s[l],U=Fn(R),G=-1,X=U.length;++G<X;){var rt=U[G],ot=n[rt];(ot===e||hi(ot,Jr[rt])&&!Ie.call(n,rt))&&(n[rt]=R[rt])}return n}),Wx=fe(function(n){return n.push(e,Gf),Gn(Td,e,n)});function Xx(n,s){return Nh(n,Zt(s,3),xi)}function qx(n,s){return Nh(n,Zt(s,3),Hl)}function Yx(n,s){return n==null?n:Gl(n,Zt(s,3),Fn)}function Zx(n,s){return n==null?n:of(n,Zt(s,3),Fn)}function Kx(n,s){return n&&xi(n,Zt(s,3))}function $x(n,s){return n&&Hl(n,Zt(s,3))}function Jx(n){return n==null?[]:ea(n,un(n))}function jx(n){return n==null?[]:ea(n,Fn(n))}function xc(n,s,l){var d=n==null?e:yr(n,s);return d===e?l:d}function Qx(n,s){return n!=null&&kf(n,s,Sg)}function Mc(n,s){return n!=null&&kf(n,s,yg)}var tM=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Vo.call(s)),n[s]=l},Sc(On)),eM=Nf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=Vo.call(s)),Ie.call(n,s)?n[s].push(l):n[s]=[l]},Zt),nM=fe(Js);function un(n){return Nn(n)?jh(n):Xl(n)}function Fn(n){return Nn(n)?jh(n,!0):Dg(n)}function iM(n,s){var l={};return s=Zt(s,3),xi(n,function(d,M,R){Ci(l,s(d,M,R),d)}),l}function rM(n,s){var l={};return s=Zt(s,3),xi(n,function(d,M,R){Ci(l,M,s(d,M,R))}),l}var sM=es(function(n,s,l){na(n,s,l)}),Td=es(function(n,s,l,d){na(n,s,l,d)}),oM=Ii(function(n,s){var l={};if(n==null)return l;var d=!1;s=Ye(s,function(R){return R=tr(R,n),d||(d=R.length>1),R}),Mi(n,sc(n),l),d&&(l=Qn(l,_|g|x,t0));for(var M=s.length;M--;)Jl(l,s[M]);return l});function aM(n,s){return wd(n,ga(Zt(s)))}var lM=Ii(function(n,s){return n==null?{}:Ng(n,s)});function wd(n,s){if(n==null)return{};var l=Ye(sc(n),function(d){return[d]});return s=Zt(s),_f(n,l,function(d,M){return s(d,M[0])})}function cM(n,s,l){s=tr(s,n);var d=-1,M=s.length;for(M||(M=1,n=e);++d<M;){var R=n==null?e:n[Ei(s[d])];R===e&&(d=M,R=l),n=Di(R)?R.call(n):R}return n}function uM(n,s,l){return n==null?n:Qs(n,s,l)}function hM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:Qs(n,s,l,d)}var Ad=Bf(un),bd=Bf(Fn);function fM(n,s,l){var d=se(n),M=d||nr(n)||rs(n);if(s=Zt(s,4),l==null){var R=n&&n.constructor;M?l=d?new R:[]:Ke(n)?l=Di(R)?ts(Xo(n)):{}:l={}}return(M?$n:xi)(n,function(U,G,X){return s(l,U,G,X)}),l}function dM(n,s){return n==null?!0:Jl(n,s)}function pM(n,s,l){return n==null?n:Ef(n,s,tc(l))}function mM(n,s,l,d){return d=typeof d=="function"?d:e,n==null?n:Ef(n,s,tc(l),d)}function ss(n){return n==null?[]:Pl(n,un(n))}function _M(n){return n==null?[]:Pl(n,Fn(n))}function gM(n,s,l){return l===e&&(l=s,s=e),l!==e&&(l=ni(l),l=l===l?l:0),s!==e&&(s=ni(s),s=s===s?s:0),Sr(ni(n),s,l)}function vM(n,s,l){return s=Ui(s),l===e?(l=s,s=0):l=Ui(l),n=ni(n),Tg(n,s,l)}function xM(n,s,l){if(l&&typeof l!="boolean"&&An(n,s,l)&&(s=l=e),l===e&&(typeof s=="boolean"?(l=s,s=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&s===e?(n=0,s=1):(n=Ui(n),s===e?(s=n,n=0):s=Ui(s)),n>s){var d=n;n=s,s=d}if(l||n%1||s%1){var M=$h();return Mn(n+M*(s-n+Jm("1e-"+((M+"").length-1))),s)}return Zl(n,s)}var MM=ns(function(n,s,l){return s=s.toLowerCase(),n+(l?Rd(s):s)});function Rd(n){return Ec(Ce(n).toLowerCase())}function Cd(n){return n=Ce(n),n&&n.replace(A,u_).replace(Hm,"")}function EM(n,s,l){n=Ce(n),s=Vn(s);var d=n.length;l=l===e?d:Sr(ae(l),0,d);var M=l;return l-=s.length,l>=0&&n.slice(l,M)==s}function SM(n){return n=Ce(n),n&&Ct.test(n)?n.replace(lt,h_):n}function yM(n){return n=Ce(n),n&&Co.test(n)?n.replace(Wr,"\\$&"):n}var TM=ns(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),wM=ns(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),AM=Pf("toLowerCase");function bM(n,s,l){n=Ce(n),s=ae(s);var d=s?Kr(n):0;if(!s||d>=s)return n;var M=(s-d)/2;return la(Ko(M),l)+n+la(Zo(M),l)}function RM(n,s,l){n=Ce(n),s=ae(s);var d=s?Kr(n):0;return s&&d<s?n+la(s-d,l):n}function CM(n,s,l){n=Ce(n),s=ae(s);var d=s?Kr(n):0;return s&&d<s?la(s-d,l)+n:n}function LM(n,s,l){return l||s==null?s=0:s&&(s=+s),O_(Ce(n).replace(li,""),s||0)}function IM(n,s,l){return(l?An(n,s,l):s===e)?s=1:s=ae(s),Kl(Ce(n),s)}function PM(){var n=arguments,s=Ce(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var DM=ns(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function UM(n,s,l){return l&&typeof l!="number"&&An(n,s,l)&&(s=l=e),l=l===e?Bt:l>>>0,l?(n=Ce(n),n&&(typeof s=="string"||s!=null&&!vc(s))&&(s=Vn(s),!s&&Zr(n))?er(ci(n),0,l):n.split(s,l)):[]}var NM=ns(function(n,s,l){return n+(l?" ":"")+Ec(s)});function FM(n,s,l){return n=Ce(n),l=l==null?0:Sr(ae(l),0,n.length),s=Vn(s),n.slice(l,l+s.length)==s}function OM(n,s,l){var d=y.templateSettings;l&&An(n,s,l)&&(s=e),n=Ce(n),s=Ma({},s,d,zf);var M=Ma({},s.imports,d.imports,zf),R=un(M),U=Pl(M,R),G,X,rt=0,ot=s.interpolate||W,dt="__p += '",Et=Ul((s.escape||W).source+"|"+ot.source+"|"+(ot===tn?Uo:W).source+"|"+(s.evaluate||W).source+"|$","g"),Vt="//# sourceURL="+(Ie.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qm+"]")+`
`;n.replace(Et,function($t,ge,Se,Wn,bn,Xn){return Se||(Se=Wn),dt+=n.slice(rt,Xn).replace(Z,f_),ge&&(G=!0,dt+=`' +
__e(`+ge+`) +
'`),bn&&(X=!0,dt+=`';
`+bn+`;
__p += '`),Se&&(dt+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),rt=Xn+$t.length,$t}),dt+=`';
`;var Kt=Ie.call(s,"variable")&&s.variable;if(!Kt)dt=`with (obj) {
`+dt+`
}
`;else if(qr.test(Kt))throw new ie(u);dt=(X?dt.replace(De,""):dt).replace(V,"$1").replace(Tt,"$1;"),dt="function("+(Kt||"obj")+`) {
`+(Kt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(G?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+dt+`return __p
}`;var ce=Id(function(){return Re(R,Vt+"return "+dt).apply(e,U)});if(ce.source=dt,gc(ce))throw ce;return ce}function BM(n){return Ce(n).toLowerCase()}function zM(n){return Ce(n).toUpperCase()}function GM(n,s,l){if(n=Ce(n),n&&(l||s===e))return zh(n);if(!n||!(s=Vn(s)))return n;var d=ci(n),M=ci(s),R=Gh(d,M),U=Hh(d,M)+1;return er(d,R,U).join("")}function HM(n,s,l){if(n=Ce(n),n&&(l||s===e))return n.slice(0,kh(n)+1);if(!n||!(s=Vn(s)))return n;var d=ci(n),M=Hh(d,ci(s))+1;return er(d,0,M).join("")}function VM(n,s,l){if(n=Ce(n),n&&(l||s===e))return n.replace(li,"");if(!n||!(s=Vn(s)))return n;var d=ci(n),M=Gh(d,ci(s));return er(d,M).join("")}function kM(n,s){var l=w,d=H;if(Ke(s)){var M="separator"in s?s.separator:M;l="length"in s?ae(s.length):l,d="omission"in s?Vn(s.omission):d}n=Ce(n);var R=n.length;if(Zr(n)){var U=ci(n);R=U.length}if(l>=R)return n;var G=l-Kr(d);if(G<1)return d;var X=U?er(U,0,G).join(""):n.slice(0,G);if(M===e)return X+d;if(U&&(G+=X.length-G),vc(M)){if(n.slice(G).search(M)){var rt,ot=X;for(M.global||(M=Ul(M.source,Ce(No.exec(M))+"g")),M.lastIndex=0;rt=M.exec(ot);)var dt=rt.index;X=X.slice(0,dt===e?G:dt)}}else if(n.indexOf(Vn(M),G)!=G){var Et=X.lastIndexOf(M);Et>-1&&(X=X.slice(0,Et))}return X+d}function WM(n){return n=Ce(n),n&&Lt.test(n)?n.replace(tt,x_):n}var XM=ns(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),Ec=Pf("toUpperCase");function Ld(n,s,l){return n=Ce(n),s=l?e:s,s===e?p_(n)?S_(n):s_(n):n.match(s)||[]}var Id=fe(function(n,s){try{return Gn(n,e,s)}catch(l){return gc(l)?l:new ie(l)}}),qM=Ii(function(n,s){return $n(s,function(l){l=Ei(l),Ci(n,l,mc(n[l],n))}),n});function YM(n){var s=n==null?0:n.length,l=Zt();return n=s?Ye(n,function(d){if(typeof d[1]!="function")throw new Jn(c);return[l(d[0]),d[1]]}):[],fe(function(d){for(var M=-1;++M<s;){var R=n[M];if(Gn(R[0],this,d))return Gn(R[1],this,d)}})}function ZM(n){return xg(Qn(n,_))}function Sc(n){return function(){return n}}function KM(n,s){return n==null||n!==n?s:n}var $M=Uf(),JM=Uf(!0);function On(n){return n}function yc(n){return uf(typeof n=="function"?n:Qn(n,_))}function jM(n){return ff(Qn(n,_))}function QM(n,s){return df(n,Qn(s,_))}var tE=fe(function(n,s){return function(l){return Js(l,n,s)}}),eE=fe(function(n,s){return function(l){return Js(n,l,s)}});function Tc(n,s,l){var d=un(s),M=ea(s,d);l==null&&!(Ke(s)&&(M.length||!d.length))&&(l=s,s=n,n=this,M=ea(s,un(s)));var R=!(Ke(l)&&"chain"in l)||!!l.chain,U=Di(n);return $n(M,function(G){var X=s[G];n[G]=X,U&&(n.prototype[G]=function(){var rt=this.__chain__;if(R||rt){var ot=n(this.__wrapped__),dt=ot.__actions__=Un(this.__actions__);return dt.push({func:X,args:arguments,thisArg:n}),ot.__chain__=rt,ot}return X.apply(n,Ki([this.value()],arguments))})}),n}function nE(){return dn._===this&&(dn._=R_),this}function wc(){}function iE(n){return n=ae(n),fe(function(s){return pf(s,n)})}var rE=nc(Ye),sE=nc(Uh),oE=nc(bl);function Pd(n){return cc(n)?Rl(Ei(n)):Fg(n)}function aE(n){return function(s){return n==null?e:yr(n,s)}}var lE=Ff(),cE=Ff(!0);function Ac(){return[]}function bc(){return!1}function uE(){return{}}function hE(){return""}function fE(){return!0}function dE(n,s){if(n=ae(n),n<1||n>Q)return[];var l=Bt,d=Mn(n,Bt);s=Zt(s),n-=Bt;for(var M=Il(d,s);++l<n;)s(l);return M}function pE(n){return se(n)?Ye(n,Ei):kn(n)?[n]:Un(jf(Ce(n)))}function mE(n){var s=++A_;return Ce(n)+s}var _E=aa(function(n,s){return n+s},0),gE=ic("ceil"),vE=aa(function(n,s){return n/s},1),xE=ic("floor");function ME(n){return n&&n.length?ta(n,On,Vl):e}function EE(n,s){return n&&n.length?ta(n,Zt(s,2),Vl):e}function SE(n){return Oh(n,On)}function yE(n,s){return Oh(n,Zt(s,2))}function TE(n){return n&&n.length?ta(n,On,ql):e}function wE(n,s){return n&&n.length?ta(n,Zt(s,2),ql):e}var AE=aa(function(n,s){return n*s},1),bE=ic("round"),RE=aa(function(n,s){return n-s},0);function CE(n){return n&&n.length?Ll(n,On):0}function LE(n,s){return n&&n.length?Ll(n,Zt(s,2)):0}return y.after=jv,y.ary=cd,y.assign=zx,y.assignIn=yd,y.assignInWith=Ma,y.assignWith=Gx,y.at=Hx,y.before=ud,y.bind=mc,y.bindAll=qM,y.bindKey=hd,y.castArray=ux,y.chain=od,y.chunk=x0,y.compact=M0,y.concat=E0,y.cond=YM,y.conforms=ZM,y.constant=Sc,y.countBy=Cv,y.create=Vx,y.curry=fd,y.curryRight=dd,y.debounce=pd,y.defaults=kx,y.defaultsDeep=Wx,y.defer=Qv,y.delay=tx,y.difference=S0,y.differenceBy=y0,y.differenceWith=T0,y.drop=w0,y.dropRight=A0,y.dropRightWhile=b0,y.dropWhile=R0,y.fill=C0,y.filter=Iv,y.flatMap=Uv,y.flatMapDeep=Nv,y.flatMapDepth=Fv,y.flatten=nd,y.flattenDeep=L0,y.flattenDepth=I0,y.flip=ex,y.flow=$M,y.flowRight=JM,y.fromPairs=P0,y.functions=Jx,y.functionsIn=jx,y.groupBy=Ov,y.initial=U0,y.intersection=N0,y.intersectionBy=F0,y.intersectionWith=O0,y.invert=tM,y.invertBy=eM,y.invokeMap=zv,y.iteratee=yc,y.keyBy=Gv,y.keys=un,y.keysIn=Fn,y.map=pa,y.mapKeys=iM,y.mapValues=rM,y.matches=jM,y.matchesProperty=QM,y.memoize=_a,y.merge=sM,y.mergeWith=Td,y.method=tE,y.methodOf=eE,y.mixin=Tc,y.negate=ga,y.nthArg=iE,y.omit=oM,y.omitBy=aM,y.once=nx,y.orderBy=Hv,y.over=rE,y.overArgs=ix,y.overEvery=sE,y.overSome=oE,y.partial=_c,y.partialRight=md,y.partition=Vv,y.pick=lM,y.pickBy=wd,y.property=Pd,y.propertyOf=aE,y.pull=H0,y.pullAll=rd,y.pullAllBy=V0,y.pullAllWith=k0,y.pullAt=W0,y.range=lE,y.rangeRight=cE,y.rearg=rx,y.reject=Xv,y.remove=X0,y.rest=sx,y.reverse=dc,y.sampleSize=Yv,y.set=uM,y.setWith=hM,y.shuffle=Zv,y.slice=q0,y.sortBy=Jv,y.sortedUniq=Q0,y.sortedUniqBy=tv,y.split=UM,y.spread=ox,y.tail=ev,y.take=nv,y.takeRight=iv,y.takeRightWhile=rv,y.takeWhile=sv,y.tap=Mv,y.throttle=ax,y.thru=da,y.toArray=Md,y.toPairs=Ad,y.toPairsIn=bd,y.toPath=pE,y.toPlainObject=Sd,y.transform=fM,y.unary=lx,y.union=ov,y.unionBy=av,y.unionWith=lv,y.uniq=cv,y.uniqBy=uv,y.uniqWith=hv,y.unset=dM,y.unzip=pc,y.unzipWith=sd,y.update=pM,y.updateWith=mM,y.values=ss,y.valuesIn=_M,y.without=fv,y.words=Ld,y.wrap=cx,y.xor=dv,y.xorBy=pv,y.xorWith=mv,y.zip=_v,y.zipObject=gv,y.zipObjectDeep=vv,y.zipWith=xv,y.entries=Ad,y.entriesIn=bd,y.extend=yd,y.extendWith=Ma,Tc(y,y),y.add=_E,y.attempt=Id,y.camelCase=MM,y.capitalize=Rd,y.ceil=gE,y.clamp=gM,y.clone=hx,y.cloneDeep=dx,y.cloneDeepWith=px,y.cloneWith=fx,y.conformsTo=mx,y.deburr=Cd,y.defaultTo=KM,y.divide=vE,y.endsWith=EM,y.eq=hi,y.escape=SM,y.escapeRegExp=yM,y.every=Lv,y.find=Pv,y.findIndex=td,y.findKey=Xx,y.findLast=Dv,y.findLastIndex=ed,y.findLastKey=qx,y.floor=xE,y.forEach=ad,y.forEachRight=ld,y.forIn=Yx,y.forInRight=Zx,y.forOwn=Kx,y.forOwnRight=$x,y.get=xc,y.gt=_x,y.gte=gx,y.has=Qx,y.hasIn=Mc,y.head=id,y.identity=On,y.includes=Bv,y.indexOf=D0,y.inRange=vM,y.invoke=nM,y.isArguments=Ar,y.isArray=se,y.isArrayBuffer=vx,y.isArrayLike=Nn,y.isArrayLikeObject=Je,y.isBoolean=xx,y.isBuffer=nr,y.isDate=Mx,y.isElement=Ex,y.isEmpty=Sx,y.isEqual=yx,y.isEqualWith=Tx,y.isError=gc,y.isFinite=wx,y.isFunction=Di,y.isInteger=_d,y.isLength=va,y.isMap=gd,y.isMatch=Ax,y.isMatchWith=bx,y.isNaN=Rx,y.isNative=Cx,y.isNil=Ix,y.isNull=Lx,y.isNumber=vd,y.isObject=Ke,y.isObjectLike=$e,y.isPlainObject=io,y.isRegExp=vc,y.isSafeInteger=Px,y.isSet=xd,y.isString=xa,y.isSymbol=kn,y.isTypedArray=rs,y.isUndefined=Dx,y.isWeakMap=Ux,y.isWeakSet=Nx,y.join=B0,y.kebabCase=TM,y.last=ei,y.lastIndexOf=z0,y.lowerCase=wM,y.lowerFirst=AM,y.lt=Fx,y.lte=Ox,y.max=ME,y.maxBy=EE,y.mean=SE,y.meanBy=yE,y.min=TE,y.minBy=wE,y.stubArray=Ac,y.stubFalse=bc,y.stubObject=uE,y.stubString=hE,y.stubTrue=fE,y.multiply=AE,y.nth=G0,y.noConflict=nE,y.noop=wc,y.now=ma,y.pad=bM,y.padEnd=RM,y.padStart=CM,y.parseInt=LM,y.random=xM,y.reduce=kv,y.reduceRight=Wv,y.repeat=IM,y.replace=PM,y.result=cM,y.round=bE,y.runInContext=k,y.sample=qv,y.size=Kv,y.snakeCase=DM,y.some=$v,y.sortedIndex=Y0,y.sortedIndexBy=Z0,y.sortedIndexOf=K0,y.sortedLastIndex=$0,y.sortedLastIndexBy=J0,y.sortedLastIndexOf=j0,y.startCase=NM,y.startsWith=FM,y.subtract=RE,y.sum=CE,y.sumBy=LE,y.template=OM,y.times=dE,y.toFinite=Ui,y.toInteger=ae,y.toLength=Ed,y.toLower=BM,y.toNumber=ni,y.toSafeInteger=Bx,y.toString=Ce,y.toUpper=zM,y.trim=GM,y.trimEnd=HM,y.trimStart=VM,y.truncate=kM,y.unescape=WM,y.uniqueId=mE,y.upperCase=XM,y.upperFirst=Ec,y.each=ad,y.eachRight=ld,y.first=id,Tc(y,function(){var n={};return xi(y,function(s,l){Ie.call(y.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),y.VERSION=i,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){y[n].placeholder=y}),$n(["drop","take"],function(n,s){xe.prototype[n]=function(l){l=l===e?1:rn(ae(l),0);var d=this.__filtered__&&!s?new xe(this):this.clone();return d.__filtered__?d.__takeCount__=Mn(l,d.__takeCount__):d.__views__.push({size:Mn(l,Bt),type:n+(d.__dir__<0?"Right":"")}),d},xe.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),$n(["filter","map","takeWhile"],function(n,s){var l=s+1,d=l==it||l==nt;xe.prototype[n]=function(M){var R=this.clone();return R.__iteratees__.push({iteratee:Zt(M,3),type:l}),R.__filtered__=R.__filtered__||d,R}}),$n(["head","last"],function(n,s){var l="take"+(s?"Right":"");xe.prototype[n]=function(){return this[l](1).value()[0]}}),$n(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");xe.prototype[n]=function(){return this.__filtered__?new xe(this):this[l](1)}}),xe.prototype.compact=function(){return this.filter(On)},xe.prototype.find=function(n){return this.filter(n).head()},xe.prototype.findLast=function(n){return this.reverse().find(n)},xe.prototype.invokeMap=fe(function(n,s){return typeof n=="function"?new xe(this):this.map(function(l){return Js(l,n,s)})}),xe.prototype.reject=function(n){return this.filter(ga(Zt(n)))},xe.prototype.slice=function(n,s){n=ae(n);var l=this;return l.__filtered__&&(n>0||s<0)?new xe(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==e&&(s=ae(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},xe.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},xe.prototype.toArray=function(){return this.take(Bt)},xi(xe.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),d=/^(?:head|last)$/.test(s),M=y[d?"take"+(s=="last"?"Right":""):s],R=d||/^find/.test(s);M&&(y.prototype[s]=function(){var U=this.__wrapped__,G=d?[1]:arguments,X=U instanceof xe,rt=G[0],ot=X||se(U),dt=function(ge){var Se=M.apply(y,Ki([ge],G));return d&&Et?Se[0]:Se};ot&&l&&typeof rt=="function"&&rt.length!=1&&(X=ot=!1);var Et=this.__chain__,Vt=!!this.__actions__.length,Kt=R&&!Et,ce=X&&!Vt;if(!R&&ot){U=ce?U:new xe(this);var $t=n.apply(U,G);return $t.__actions__.push({func:da,args:[dt],thisArg:e}),new jn($t,Et)}return Kt&&ce?n.apply(this,G):($t=this.thru(dt),Kt?d?$t.value()[0]:$t.value():$t)})}),$n(["pop","push","shift","sort","splice","unshift"],function(n){var s=zo[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",d=/^(?:pop|shift)$/.test(n);y.prototype[n]=function(){var M=arguments;if(d&&!this.__chain__){var R=this.value();return s.apply(se(R)?R:[],M)}return this[l](function(U){return s.apply(se(U)?U:[],M)})}}),xi(xe.prototype,function(n,s){var l=y[s];if(l){var d=l.name+"";Ie.call(Qr,d)||(Qr[d]=[]),Qr[d].push({name:s,func:l})}}),Qr[oa(e,m).name]=[{name:"wrapper",func:e}],xe.prototype.clone=W_,xe.prototype.reverse=X_,xe.prototype.value=q_,y.prototype.at=Ev,y.prototype.chain=Sv,y.prototype.commit=yv,y.prototype.next=Tv,y.prototype.plant=Av,y.prototype.reverse=bv,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=Rv,y.prototype.first=y.prototype.head,Ws&&(y.prototype[Ws]=wv),y},$r=y_();vr?((vr.exports=$r)._=$r,yl._=$r):dn._=$r}).call(r1)}(Mo,Mo.exports)),Mo.exports}var mo={},Vp;function o1(){if(Vp)return mo;Vp=1,Object.defineProperty(mo,"__esModule",{value:!0}),mo.backtrace=void 0;function r(t,e,i){const o=[];let a=i?t:t.getParent();for(;a.getParent();)o.push([a.position.x,a.position.y]),a=a.getParent();return e&&o.push([a.position.x,a.position.y]),o.reverse()}return mo.backtrace=r,mo}var _o={},kp;function a1(){if(kp)return _o;kp=1,Object.defineProperty(_o,"__esModule",{value:!0}),_o.calculateHeuristic=void 0;function r(t,e,i,o){const a=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);switch(t){case"Manhatten":case"Manhattan":return(a+c)*o;case"Euclidean":return Math.sqrt(a*a+c*c)*o;case"Chebyshev":return Math.max(a,c)*o;case"Octile":return(a+c-.58*Math.min(a,c))*o}}return _o.calculateHeuristic=r,_o}var go={},vo={},Wp;function l1(){if(Wp)return vo;Wp=1,Object.defineProperty(vo,"__esModule",{value:!0}),vo.Node=void 0;class r{constructor(e){this.id=e.id,this.position=e.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=e.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(e){this.gValue=e,this.calculateFValue()}setHValue(e){this.hValue=e,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(e){this.parentNode=e}setIsOnClosedList(e){this.isOnClosedList=e}setIsOnOpenList(e){this.isOnOpenList=e}setIsWalkable(e){this.isWalkable=e}}return vo.Node=r,vo}var Xp;function Im(){if(Xp)return go;Xp=1,Object.defineProperty(go,"__esModule",{value:!0}),go.Grid=void 0;const r=l1();class t{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,o,a,c){const u=[];let h=0;for(let f=0;f<a;f++){u[f]=[];for(let p=0;p<o;p++)u[f][p]=new r.Node({id:h,position:{x:p,y:f}}),h++}if(i===void 0){for(let f=0;f<a;f++)for(let p=0;p<o;p++)Math.floor(Math.random()*10)+1>10-c?u[f][p].setIsWalkable(!1):u[f][p].setIsWalkable(!0);return u}for(let f=0;f<a;f++)for(let p=0;p<o;p++)u[f][p].setIsWalkable(!i[f][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,o){const a=[],c=i.x-1,u=i.x+1,h=i.y-1,f=i.y+1;for(let p=h;p<=f;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(o||_==i.x||p==i.y)&&a.push(this.getNodeAt({x:_,y:p}));return a}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let o=0;o<this.gridNodes[i].length;o++)this.gridNodes[i][o].setIsOnClosedList(!1),this.gridNodes[i][o].setIsOnOpenList(!1),this.gridNodes[i][o].setParent(void 0),this.gridNodes[i][o].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let o=0;for(let a=0;a<this.height;a++){i[a]=[];for(let c=0;c<this.width;c++)i[a][c]=new r.Node({id:o,position:{x:c,y:a},walkable:this.gridNodes[a][c].getIsWalkable()}),o++}return i}}return go.Grid=t,go}var qp;function c1(){if(qp)return po;qp=1,Object.defineProperty(po,"__esModule",{value:!0}),po.AStarFinder=void 0;const r=s1(),t=o1(),e=a1(),i=Im();class o{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const h=this.grid.getNodeAt(c),f=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];h.setIsOnOpenList(!0),this.openList.push(h);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,e.calculateHeuristic)(this.heuristic,g.position,f.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,r.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,r.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===f)return(0,t.backtrace)(f,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const E=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||E<x.getGValue())&&(x.setGValue(E),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,t.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return po.AStarFinder=o,po}var Yp;function u1(){return Yp||(Yp=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Grid=r.AStarFinder=void 0;var t=c1();Object.defineProperty(r,"AStarFinder",{enumerable:!0,get:function(){return t.AStarFinder}});var e=Im();Object.defineProperty(r,"Grid",{enumerable:!0,get:function(){return e.Grid}})}(lu)),lu}var h1=u1();class Pm{constructor(t){xt(this,"currentHealth");xt(this,"fullHealth");xt(this,"offset");xt(this,"red");xt(this,"green");xt(this,"widthFactor");xt(this,"heightFactor");this.currentHealth=t.currentHealth??t.fullHealth,this.fullHealth=t.fullHealth,this.offset=t.offset,this.red=new sp(new $u({map:new hp().load("./textures/red.png")})),this.green=new sp(new $u({map:new hp().load("./textures/green.png")})),this.widthFactor=t.widthFactor??1,this.heightFactor=t.heightFactor??1,this.update(this.currentHealth,t.position)}end(t){t.scene.remove(this.red),t.scene.remove(this.green)}start(t){t.scene.add(this.red),t.scene.add(this.green)}update(t,e){this.currentHealth=t;const i=this.widthFactor*1,o=this.heightFactor*.12;this.red.scale.set(i,o,o),this.red.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),o,o),this.green.position.set(e.x+this.offset.x,e.y+this.offset.y,e.z+this.offset.z)}}const cl=class cl extends _r{constructor(e){const i=(e==null?void 0:e.size)??1,o=vt.TILE_SIZE/32,a=oe.createSphere({radius:o*i,color:(e==null?void 0:e.color)??new ct(At.LIGHT_GREEN),basicMaterial:!0});super({mesh:a});xt(this,"ttl",0);xt(this,"velocity");this.mesh.position.set(e.position.x,e.position.y,e.position.z);const c=(e==null?void 0:e.force)??1,u=.002;this.velocity=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(c*u)}update(e,i,o){super.update(e,i,o),this.velocity.y-=1e-5*i,this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>cl.TTL&&this.kill()}};xt(cl,"TTL",800);let ju=cl;const Zp={createExplosion(r,t,e){const{colors:i}=e,o=e.amount??10,a=Array.isArray(i)?i:[i];for(let c=0;c<o;c++){const u=new ju({position:t.clone(),color:a[Math.floor(Math.random()*a.length)],force:e.force,size:e.size});r.addComponent(u)}}},As={createSimpleGrid:r=>{var a;const t=[];for(let c=0;c<r.length;c++){const u=[];for(let h=0;h<r[c].length;h++)u.push(r[c][h].isWalkable?0:1);t.push(u)}const e=t.length,i=((a=t[0])==null?void 0:a.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:e},(h,f)=>t[f][u]))},getBoundedUncheckedNeighbors:(r,t,e)=>{const i=[];return r>0&&i.push(new yt(r-1,t)),r<e.length-1&&i.push(new yt(r+1,t)),t>0&&i.push(new yt(r,t-1)),t<e[0].length-1&&i.push(new yt(r,t+1)),i},getPositionHash(r){return`${r.x},${r.y}`},findClosestEnemy:r=>{const{grid:t,origin:e,myBattleSide:i,range:o,objective:a}=r,c=Math.max(1,o),u=new Set,h=[e.clone()];u.add(As.getPositionHash(e));let f=0;const p=[];for(;f<h.length;){if(f>t.length*t[0].length*2)return null;const x=h[f];f++;const E=As.getBoundedUncheckedNeighbors(x.x,x.y,t);for(const T of E){if(!t[T.x][T.y].isWalkable)continue;const v=t[T.x][T.y].actors.find(m=>m instanceof Hs&&m.battleSide!==i);v?p.push({pos:x,enemy:v}):!u.has(As.getPositionHash(T))&&T.distanceTo(e)<=c&&(h.push(T),u.add(As.getPositionHash(T)))}}if(p.length===0)return null;let _=p[0];return p.forEach(g=>{g.pos.distanceTo(a)<_.pos.distanceTo(a)&&(_=g)}),_}};class Hs extends Gs{constructor(e){super(e);xt(this,"battleSide");xt(this,"pos");xt(this,"radius");xt(this,"hb");xt(this,"fullHealth");xt(this,"health");xt(this,"objective");xt(this,"healthBarOffset",new D(0,vt.TILE_SIZE*.65,0));xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ct(At.RED),new ct(At.DARK)]});xt(this,"DAMAGE_EXPLOSION_CONFIG",{colors:[new ct(At.RED),new ct(At.ORANGE),new ct(At.YELLOW),new ct(At.WHITE)],amount:30,force:3,size:.8});xt(this,"SPEED",1);this.battleSide=e.battleSide,this.pos=e.pos,this.radius=e.radius,this.fullHealth=e.health,this.health=e.health,this.objective=e.objective,this.hb=new Pm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position,offset:this.healthBarOffset,heightFactor:.5,widthFactor:.6})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,o){super.beforeDeath(e,i,o),this.hb.end(i),Zp.createExplosion(i,this.mesh.position,this.DEATH_EXPLOSION_CONFIG)}update(e,i,o,a){super.update(e,i,o,a);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=1,this.kill(),Zp.createExplosion(o,this.mesh.position,this.DAMAGE_EXPLOSION_CONFIG);else if(this.pos.distanceTo(a)<c){this.pos=a;const u=As.createSimpleGrid(o.actorsGrid),f=new h1.AStarFinder({grid:{matrix:u},diagonalAllowed:!0}).findPath(a,this.objective.position.clone());if(f.length>1){const p=new yt(f[1][0],f[1][1]);o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(_=>_!==this),o.actorsGrid[p.x][p.y].actors.push(this)}}else{const u=.0012*this.SPEED,h=i*u,f=a.clone().sub(this.pos).normalize(),p=this.pos.distanceTo(a);this.pos.add(f.clone().multiplyScalar(Math.min(h,p)))}this.hb.update(this.health,this.mesh.position.clone()),this.health<=0&&this.kill()}graphics(){this.mesh.position=new D(this.pos.x,this.mesh.position.y,this.pos.y)}}class f1 extends Hs{constructor(e){const i=vt.TILE_SIZE/5,o=vt.TILE_SIZE*.75,a=new D(e.pos.x,o/2,e.pos.y),c=new _n({center:a,parts:[{mesh:oe.createGem({size:i,color:new ct(At.METAL)}),offset:new D(0,o/3,0)},{mesh:oe.createTorus({radius:i,color:new ct(At.BLUE)}),offset:new D(0,0,0)},{mesh:oe.createSphere({radius:i/2,color:new ct(At.DARK)}),offset:new D(0,-.75/3,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:3,objective:e.objective});xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ct(At.BLUE),new ct(At.DARK_GREEN)],amount:50,size:.5,force:2});xt(this,"SPEED",1.5)}update(e,i,o,a){super.update(e,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/200*h,u===2&&(c.mesh.rotation.x+=i/100*h,c.mesh.rotation.z+=i/50*h)})}}class d1 extends Hs{constructor(e){const i=vt.TILE_SIZE/4,o=vt.TILE_SIZE,a=new D(e.pos.x,vt.TILE_SIZE/2,e.pos.y),c=new _n({center:a,parts:[{mesh:oe.createGem({size:i,color:new ct(At.METAL)}),offset:new D(0,o/3,0)},{mesh:oe.createTorus({radius:i,color:new ct(At.LIGHT_GREEN)}),offset:new D(0,0,0)},{mesh:oe.createSphere({radius:i/2,color:new ct(At.DARK)}),offset:new D(0,-1/3,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:5,objective:e.objective});xt(this,"SPEED",.9);xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ct(At.LIGHT_GREEN),new ct(At.GREEN),new ct(At.DARK_GREEN)],amount:50,size:.5,force:2})}beforeDeath(e,i,o){super.beforeDeath(e,i,o),i.addActor(new f1({pos:o,objective:this.objective}),o)}update(e,i,o,a){super.update(e,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/200*h,u===2&&(c.mesh.rotation.x+=i/100*h,c.mesh.rotation.z+=i/50*h)})}}class p1 extends Hs{constructor(e){const i=vt.TILE_SIZE/3,o=vt.TILE_SIZE,a=new D(e.pos.x,o/2,e.pos.y),c=new _n({center:a,parts:[{mesh:oe.createTorusKnotBlob({radius:i,color:new ct(At.YELLOW)}),offset:new D(0,0,0)},{mesh:oe.createTorusKnotBlob({radius:i*2/3,color:new ct(At.ORANGE)}),offset:new D(0,0,0)}]});super({mesh:c,battleSide:Vr.ENEMY,pos:e.pos,radius:i,health:10,objective:e.objective});xt(this,"DEATH_EXPLOSION_CONFIG",{colors:[new ct(At.YELLOW),new ct(At.DARK)],amount:60,size:.8,force:3});xt(this,"SPEED",.7)}update(e,i,o,a){super.update(e,i,o,a),this.mesh.parts.forEach((c,u)=>{const h=u%2?-1:1;c.mesh.rotation.y+=i/100*h,u===1&&(c.mesh.rotation.x+=i/200*h,c.mesh.rotation.z+=i/100*h)})}}class m1 extends Hs{constructor(t){const e=vt.TILE_SIZE/4,i=vt.TILE_SIZE,o=new D(t.pos.x,vt.TILE_SIZE/2,t.pos.y),a=new _n({center:o,parts:[{mesh:oe.createGem({size:e,color:new ct(At.WHITE)}),offset:new D(0,0,0)},{mesh:oe.createSphere({radius:e,color:new ct(At.DARK)}),offset:new D(0,-1/3,0)},{mesh:oe.createSphere({radius:e,color:new ct(At.RED)}),offset:new D(0,i/3,0)}]});super({mesh:a,battleSide:Vr.ENEMY,pos:t.pos,radius:e,health:5,objective:t.objective})}update(t,e,i,o){super.update(t,e,i,o),this.mesh.parts.forEach((a,c)=>{const u=c%2?-1:1;a.mesh.rotation.y+=e/500*u,a.mesh.rotation.z+=e/200*u,a.mesh.rotation.x+=e/100*u})}}const Eo=class Eo extends Gs{constructor(e){const i=vt.TILE_SIZE/3,o=new _n({center:new D(e.position.x,i/2,e.position.y),parts:[{mesh:oe.createBox({color:new ct(At.DARK),depth:vt.TILE_SIZE,height:i,width:vt.TILE_SIZE}),offset:new D(0,0,0)},{mesh:new wm(new ct(At.RED),5),offset:new D(0,i/2*1.5,0)}]});super({mesh:o});xt(this,"spawnTimeout",0)}update(e,i,o,a){if(super.update(e,i,o,a),!(o instanceof wo))throw new Error("Spawner can only be used in a BattleFieldContainer");const c=this.spawnTimeout+i,u=Math.floor(c/Eo.SPAWN_TIMEOUT);for(let h=0;h<u;h++){const f={pos:a,objective:o.headQuarters},p=Math.random();Math.random()<.33?o.addActor(new m1(f),a):p<.66?o.addActor(new p1(f),a):o.addActor(new d1(f),a)}this.spawnTimeout=c%Eo.SPAWN_TIMEOUT}};xt(Eo,"SPAWN_TIMEOUT",3e3);let ll=Eo;const ul=class ul extends _r{constructor({position:e,color:i,sizeFactor:o}){const a=vt.TILE_SIZE/72*o,c=oe.createSphere({radius:a,color:i===void 0?new ct(At.WHITE):i,basicMaterial:!0});c.position.set(e.x,e.y,e.z);super({mesh:c});xt(this,"ttl",0);xt(this,"position");xt(this,"velocity");this.position=e,this.velocity=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(vt.TILE_SIZE*5e-5)}update(e,i,o){super.update(e,i,o),this.velocity.y-=5e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>ul.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};xt(ul,"TTL",1e3);let Qu=ul;const So=class So extends _r{constructor(e){const i=vt.TILE_SIZE/48*e.bulletConfig.sizeFactor;super({mesh:oe.createSphere({radius:i,color:e.bulletConfig.color===void 0?new ct(At.WHITE):e.bulletConfig.color,basicMaterial:!0})});xt(this,"battleSide");xt(this,"position");xt(this,"radius");xt(this,"direction");xt(this,"bulletConfig");xt(this,"particleTimeout",0);xt(this,"hasDamaged",new Set);this.battleSide=e.battleSide,this.direction=e.direction,this.position=e.position,this.radius=i,this.bulletConfig=e.bulletConfig}update(e,i,o){var T,v;super.update(e,i,o);const c=.07*i*this.bulletConfig.speedFactor,u=this.direction.clone().normalize(),h=this.position.clone().add(new D(u.x*c,0,u.y*c)),f=vt.TILE_SIZE/4,p=this.position.distanceTo(h),_=Math.max(1,Math.floor(p/f));for(let m=0;m<_;m++){const I=this.position.clone().add(new D(u.x*f,0,u.y*f)),L=[new yt(I.x-f,I.z-f),new yt(I.x-f,I.z),new yt(I.x-f,I.z+f),new yt(I.x,I.z-f),new yt(I.x,I.z),new yt(I.x,I.z+f),new yt(I.x+f,I.z-f),new yt(I.x+f,I.z),new yt(I.x+f,I.z+f)].map(b=>new yt(Math.floor(b.x),Math.floor(b.y)));for(const b of L){const B=(T=o.actorsGrid[b.x])==null?void 0:T[b.y];if(B){for(const N of B.actors)if(N instanceof Hs&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new yt(this.position.x,this.position.z))<this.radius+N.radius&&!this.hasDamaged.has(N)){N.health-=this.bulletConfig.damage,this.hasDamaged.add(N);break}}}}this.position.set(h.x,this.position.y,h.z);const g=o.actorsGrid.length,x=((v=o.actorsGrid[0])==null?void 0:v.length)??0;-g<=this.position.x&&this.position.x<2*g&&-x<=this.position.z&&this.position.z<2*x||this.kill(),this.particleTimeout+=i,this.particleTimeout>So.PARTICLE_TIMEOUT&&(o.addComponent(new Qu({position:this.position.clone(),color:this.bulletConfig.color,sizeFactor:this.bulletConfig.trailSizeFactor})),this.particleTimeout=this.particleTimeout%So.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};xt(So,"PARTICLE_TIMEOUT",30);let th=So;class Dm extends Gs{constructor(e){super(e);xt(this,"position");xt(this,"bulletConfig");xt(this,"SHOOT_TIMEOUT",1e3);xt(this,"shootTimeout",0);xt(this,"range",5);xt(this,"objective");this.position=e.position,this.bulletConfig=e.bulletConfig,this.objective=e.objective}update(e,i,o,a){super.update(e,i,o,a);const c=this.shootTimeout+i;if(this.shootTimeout=c%this.SHOOT_TIMEOUT,c>=this.SHOOT_TIMEOUT){const h=As.findClosestEnemy({grid:o.actorsGrid,origin:this.position.clone(),myBattleSide:Vr.ALLY,range:this.range,objective:this.objective.position.clone()}),f=h?new yt(h.enemy.mesh.position.x-this.position.x,h.enemy.mesh.position.z-this.position.y).normalize():null;if(f!==null){const p=new th({battleSide:Vr.ALLY,direction:f,position:new D(this.position.x,this.mesh.position.y,this.position.y),bulletConfig:this.bulletConfig});o.addComponent(p)}}}}class _1 extends Dm{constructor(e){const i=new D(e.position.x,vt.TILE_SIZE,e.position.y),o=oe.createGem({size:vt.TILE_SIZE/4,color:new ct(At.WHITE)}),a=new _n({center:i,parts:[{mesh:oe.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new ct(At.DARK)}),offset:new D(0,-1*3/4,0)},{mesh:oe.createBox({width:vt.TILE_SIZE*3/4,height:vt.TILE_SIZE,depth:vt.TILE_SIZE*3/4,color:new ct(At.METAL)}),offset:new D(0,0,0)},{mesh:oe.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new ct(At.DARK)}),offset:new D(0,vt.TILE_SIZE*3/4,0)},{mesh:o,offset:new D(0,vt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:1,speedFactor:1,damage:1,trailSizeFactor:1},objective:e.objective});xt(this,"gem");this.gem=o}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500)}}class g1 extends Dm{constructor(e){const i=new D(e.position.x,vt.TILE_SIZE,e.position.y),o=oe.createGem({size:vt.TILE_SIZE/4,color:new ct(At.YELLOW)}),a=new _n({center:i,parts:[{mesh:oe.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new ct(At.RED)}),offset:new D(0,-1*3/4,0)},{mesh:oe.createBox({width:vt.TILE_SIZE*3/4,height:vt.TILE_SIZE,depth:vt.TILE_SIZE*3/4,color:new ct(At.DARK)}),offset:new D(0,0,0)},{mesh:oe.createBox({width:vt.TILE_SIZE,height:vt.TILE_SIZE/2,depth:vt.TILE_SIZE,color:new ct(At.RED)}),offset:new D(0,vt.TILE_SIZE*3/4,0)},{mesh:o,offset:new D(0,vt.TILE_SIZE*3/2,0)}]});super({mesh:a,position:e.position,bulletConfig:{sizeFactor:4,speedFactor:.15,damage:2,color:new ct(At.YELLOW),trailSizeFactor:1.2},objective:e.objective});xt(this,"gem");xt(this,"SHOOT_TIMEOUT",2e3);this.gem=o}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/500),this.gem.rotateZ(i/250)}}class v1 extends Gs{constructor(e){const i=c=>oe.createBox({width:c==="horizontal"?vt.TILE_SIZE:vt.TILE_SIZE/16,height:vt.TILE_SIZE/16,depth:c==="vertical"?vt.TILE_SIZE:vt.TILE_SIZE/16,color:new ct(At.RED)}),o=new D(e.pos.x,vt.TILE_SIZE/16,e.pos.y),a=new _n({center:o,parts:[{mesh:i("vertical"),offset:new D(vt.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new D(-15/32,0,0)},{mesh:i("horizontal"),offset:new D(0,0,vt.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new D(0,0,-15/32)}]});super({mesh:a});xt(this,"pos");xt(this,"canPlace",!1);xt(this,"greenMaterial",new ri({color:new ct(At.LIGHT_GREEN)}));xt(this,"redMaterial",new ri({color:new ct(At.RED)}));this.pos=e.pos}update(e,i,o,a){var h;if(super.update(e,i,o,a),!(o instanceof wo))throw new Error("Cursor can only be used in a BattleFieldContainer");let c=0;e.keyboardHandler.wasPressed("ArrowUp")?c=-1:e.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(e.keyboardHandler.wasPressed("ArrowLeft")?u=-1:e.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const f=a.clone().add(new yt(u,c));if(!(0<=f.x&&f.x<o.actorsGrid.length)||!(0<=f.y&&f.y<(((h=o.actorsGrid[0])==null?void 0:h.length)??0)))return;this.pos=f,o.actorsGrid[a.x][a.y].actors=o.actorsGrid[a.x][a.y].actors.filter(p=>p!==this),o.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=o.actorsGrid[a.x][a.y].isWalkable&&o.actorsGrid[a.x][a.y].actors.find(f=>f!==this)===void 0,this.canPlace){let f;e.keyboardHandler.wasPressed("z")?f=new _1({position:a.clone(),objective:o.headQuarters}):e.keyboardHandler.wasPressed("x")?f=new g1({position:a.clone(),objective:o.headQuarters}):e.keyboardHandler.wasPressed("c")&&(f=new t1({position:new D(a.x,vt.TILE_SIZE/2,a.y),size:vt.TILE_SIZE})),f!==void 0&&(o.addActor(f,a.clone()),o.actorsGrid[a.x][a.y].isWalkable=!1)}}graphics(e,i,o){const a=1-Math.exp(-.005*i);this.mesh.position=new D(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*a,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*a),o.camera.position.set(this.mesh.position.x+vt.TILE_SIZE*3,this.mesh.position.y+vt.TILE_SIZE*8,this.mesh.position.z+vt.TILE_SIZE*12),o.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class x1 extends Gs{constructor({health:e,position:i}){const o=vt.TILE_SIZE/2,a=vt.TILE_SIZE*2,c=vt.TILE_SIZE/2,u=new D(i.x,vt.TILE_SIZE,i.y),h=oe.createGem({size:a/4,color:new ct(At.LIGHT_GREEN),basicMaterial:!0}),f=new _n({center:u,parts:[{mesh:oe.createBox({color:new ct(At.DARK),depth:c,height:a/4,width:o}),offset:new D(0,-2*3/8,0)},{mesh:h,offset:new D(0,a*2/8,0)},{mesh:new wm(new ct(At.LIGHT_GREEN),20),offset:new D(0,a*2/8,0)}]});super({mesh:f});xt(this,"gem");xt(this,"hb");xt(this,"fullHealth");xt(this,"health");xt(this,"position");this.gem=h,this.position=i,this.health=e,this.fullHealth=e,this.hb=new Pm({fullHealth:this.fullHealth,currentHealth:this.health,position:this.mesh.position.clone(),offset:new D(0,a/2+vt.TILE_SIZE/2,0)})}afterSpawn(e,i){super.afterSpawn(e,i),this.hb.start(e)}beforeDeath(e,i,o){super.beforeDeath(e,i,o),this.hb.end(i)}update(e,i,o,a){super.update(e,i,o,a),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}const M1={buildWorldComponents:r=>{const t=[];for(let e=0;e<r.width;e++)for(let i=0;i<r.height;i++)t.push(new e1({position:new D(e*r.tileSize,-r.tileSize/2,i*r.tileSize),size:r.tileSize,color:new ct(At.DARK_GREEN)}));return t}},hl=class hl extends Kb{constructor(){super({width:15,height:20});xt(this,"headQuarters");this.headQuarters=new x1({position:new yt(Math.floor(this.actorsGrid.length/2),1),health:30})}onStart(){var h;const e=this.actorsGrid.length,i=((h=this.actorsGrid[0])==null?void 0:h.length)??0;this.scene.background=new ct(At.VOID),this.scene.add(new oy(new ct(At.WHITE),new ct(At.DARK_GREEN),1)),M1.buildWorldComponents({width:e,height:i,tileSize:hl.TILE_SIZE}).forEach(f=>this.addComponent(f));const a=new yt(Math.floor(e/2),Math.floor(i/2));this.addActor(new v1({pos:a}),a),this.addActor(this.headQuarters,this.headQuarters.position),this.createStars({width:e,height:i}).forEach(f=>this.addComponent(f)),this.createMountains({width:e,height:i}).forEach(f=>this.addComponent(f)),this.createTrees({width:e,height:i}).forEach(f=>this.addComponent(f));const c=new i1({width:e*1.6,height:i*1.6,position:new D(e/2,-1/2,i/2)});this.addComponent(c),this.createSpawns({width:e,height:i}).forEach(f=>this.addActor(f.actor,f.position));const u=new hy(Math.max(e,i));this.scene.add(u)}update(e,i){super.update(e,i)}createStars(e){const{width:i,height:o}=e,a=200,c=[],u=new D(i/2,0,o/2);for(let h=0;h<a;h++){const _=vt.TILE_SIZE*8*(4+Math.floor(Math.random()*4)),g=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),x=new D(u.x+g.x*_,u.z+g.z*_,u.y+g.y*_);c.push(new n1({position:x}))}return c}createMountains(e){const{width:i,height:o}=e,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Za({position:new yt(h-c/8,-u*3/16)});a.push(f)}for(let h=0;h<c;h++){const f=new Za({position:new yt(h-c/8,u*7/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new yt(-c*2/8,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Za({position:new yt(c*7/8,h-u/16)});a.push(f)}return a}createTrees(e){const{width:i,height:o}=e,a=[],c=i*1.5,u=o*1.5;for(let h=0;h<c;h++){const f=new Ka({position:new yt(h-c/8,-u*3/16+(Math.random()-.5)*vt.TILE_SIZE)});a.push(f)}for(let h=0;h<c;h++){const f=new Ka({position:new yt(h-c/8,u*7/8+(Math.random()-.5)*vt.TILE_SIZE)});a.push(f)}for(let h=0;h<u;h++){const f=new Ka({position:new yt(-c*2/8+(Math.random()-.5)*vt.TILE_SIZE,h-u/8)});a.push(f)}for(let h=0;h<u;h++){const f=new Ka({position:new yt(c*7/8+(Math.random()-.5)*vt.TILE_SIZE,h-u/16)});a.push(f)}return a}createSpawns(e){const{width:i,height:o}=e,a=[],c=new yt(2,o-1),u=new ll({position:c});a.push({actor:u,position:c});const h=new yt(i-3,o-1),f=new ll({position:h});return a.push({actor:f,position:h}),a}};xt(hl,"TILE_SIZE",1);let wo=hl;var Vr=(r=>(r.ALLY="ally",r.ENEMY="enemy",r))(Vr||{});const vh=new Qb;vh.addContainer(gh.BATTLEFIELD_CONTAINER,new wo);vh.setContainer(gh.BATTLEFIELD_CONTAINER);vh.start();
