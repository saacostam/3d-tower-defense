var lS=Object.defineProperty;var cS=(s,e,t)=>e in s?lS(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ge=(s,e,t)=>cS(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="173",uS=0,Sd=1,fS=2,Lp=1,hS=2,Hi=3,dr=0,Nn=1,Vi=2,ur=0,As=1,Ed=2,yd=3,Td=4,dS=5,Dr=100,pS=101,mS=102,_S=103,gS=104,vS=200,xS=201,MS=202,SS=203,Kc=204,$c=205,ES=206,yS=207,TS=208,AS=209,wS=210,bS=211,RS=212,CS=213,PS=214,Jc=0,Qc=1,jc=2,Cs=3,eu=4,tu=5,nu=6,iu=7,Ip=0,LS=1,IS=2,fr=0,DS=1,US=2,NS=3,FS=4,OS=5,BS=6,zS=7,Dp=300,Ps=301,Ls=302,ru=303,su=304,el=306,au=1e3,Fr=1001,ou=1002,pi=1003,GS=1004,go=1005,yi=1006,mc=1007,Or=1008,qi=1009,Up=1010,Np=1011,va=1012,ku=1013,Br=1014,ki=1015,Ma=1016,Wu=1017,Xu=1018,Is=1020,Fp=35902,Op=1021,Bp=1022,di=1023,zp=1024,Gp=1025,ws=1026,Ds=1027,Hp=1028,qu=1029,Vp=1030,Yu=1031,Zu=1033,ko=33776,Wo=33777,Xo=33778,qo=33779,lu=35840,cu=35841,uu=35842,fu=35843,hu=36196,du=37492,pu=37496,mu=37808,_u=37809,gu=37810,vu=37811,xu=37812,Mu=37813,Su=37814,Eu=37815,yu=37816,Tu=37817,Au=37818,wu=37819,bu=37820,Ru=37821,Yo=36492,Cu=36494,Pu=36495,kp=36283,Lu=36284,Iu=36285,Du=36286,HS=3200,VS=3201,Wp=0,kS=1,cr="",ni="srgb",Us="srgb-linear",Ko="linear",Dt="srgb",is=7680,Ad=519,WS=512,XS=513,qS=514,Xp=515,YS=516,ZS=517,KS=518,$S=519,Uu=35044,wd="300 es",Wi=2e3,$o=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Nu=180/Math.PI;function hr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function JS(s,e){return(s%e+e)%e}function gc(s,e,t){return(1-t)*s+t*e}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,a,o,c,u,d,h){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h)}set(e,t,i,a,o,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=a,p[2]=u,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],_=i[7],g=i[2],x=i[5],y=i[8],C=a[0],v=a[3],m=a[6],P=a[1],L=a[4],b=a[7],G=a[2],N=a[5],U=a[8];return o[0]=c*C+u*P+d*G,o[3]=c*v+u*L+d*N,o[6]=c*m+u*b+d*U,o[1]=h*C+p*P+_*G,o[4]=h*v+p*L+_*N,o[7]=h*m+p*b+_*U,o[2]=g*C+x*P+y*G,o[5]=g*v+x*L+y*N,o[8]=g*m+x*b+y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*o*p+i*u*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],_=p*c-u*h,g=u*d-p*o,x=h*o-c*d,y=t*_+i*g+a*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/y;return e[0]=_*C,e[1]=(a*h-p*i)*C,e[2]=(u*i-a*c)*C,e[3]=g*C,e[4]=(p*t-a*d)*C,e[5]=(a*o-u*t)*C,e[6]=x*C,e[7]=(i*d-h*t)*C,e[8]=(c*t-i*o)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(vc.makeScale(e,t)),this}rotate(e){return this.premultiply(vc.makeRotation(-e)),this}translate(e,t){return this.premultiply(vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new st;function qp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function QS(){const s=xa("canvas");return s.style.display="block",s}const bd={};function Es(s){s in bd||(bd[s]=!0,console.warn(s))}function jS(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function eE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const s={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Dt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=bs(a.r),a.g=bs(a.g),a.b=bs(a.b))),a},fromWorkingColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},toWorkingColorSpace:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cr?Ko:this.spaces[a].transfer},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Us]:{primaries:e,whitePoint:i,transfer:Ko,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const At=nE();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class iE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=xa("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Xi(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(xc(a[c].image)):o.push(xc(a[c]))}else o=xc(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;class Rn extends Fs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=Fr,a=Fr,o=yi,c=Or,u=di,d=qi,h=Rn.DEFAULT_ANISOTROPY,p=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=hr(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case Fr:e.x=e.x<0?0:1;break;case ou:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case Fr:e.y=e.y<0?0:1;break;case ou:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Dp;Rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],p=d[4],_=d[8],g=d[1],x=d[5],y=d[9],C=d[2],v=d[6],m=d[10];if(Math.abs(p-g)<.01&&Math.abs(_-C)<.01&&Math.abs(y-v)<.01){if(Math.abs(p+g)<.1&&Math.abs(_+C)<.1&&Math.abs(y+v)<.1&&Math.abs(h+x+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,b=(x+1)/2,G=(m+1)/2,N=(p+g)/4,U=(_+C)/4,H=(y+v)/4;return L>b&&L>G?L<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(L),a=N/i,o=U/i):b>G?b<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(b),i=N/a,o=H/a):G<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(G),i=U/o,a=H/o),this.set(i,a,o,t),this}let P=Math.sqrt((v-y)*(v-y)+(_-C)*(_-C)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(v-y)/P,this.y=(_-C)/P,this.z=(g-p)/P,this.w=Math.acos((h+x+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aE extends Fs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Rn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Yp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends aE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zp extends Rn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends Rn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=pi,this.minFilter=pi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,u){let d=i[a+0],h=i[a+1],p=i[a+2],_=i[a+3];const g=o[c+0],x=o[c+1],y=o[c+2],C=o[c+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_;return}if(u===1){e[t+0]=g,e[t+1]=x,e[t+2]=y,e[t+3]=C;return}if(_!==C||d!==g||h!==x||p!==y){let v=1-u;const m=d*g+h*x+p*y+_*C,P=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const G=Math.sqrt(L),N=Math.atan2(G,m*P);v=Math.sin(v*N)/G,u=Math.sin(u*N)/G}const b=u*P;if(d=d*v+g*b,h=h*v+x*b,p=p*v+y*b,_=_*v+C*b,v===1-u){const G=1/Math.sqrt(d*d+h*h+p*p+_*_);d*=G,h*=G,p*=G,_*=G}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,a,o,c){const u=i[a],d=i[a+1],h=i[a+2],p=i[a+3],_=o[c],g=o[c+1],x=o[c+2],y=o[c+3];return e[t]=u*y+p*_+d*x-h*g,e[t+1]=d*y+p*g+h*_-u*x,e[t+2]=h*y+p*x+u*g-d*_,e[t+3]=p*y-u*_-d*g-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(a/2),_=u(o/2),g=d(i/2),x=d(a/2),y=d(o/2);switch(c){case"XYZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"YXZ":this._x=g*p*_+h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"ZXY":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_-g*x*y;break;case"ZYX":this._x=g*p*_-h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_+g*x*y;break;case"YZX":this._x=g*p*_+h*x*y,this._y=h*x*_+g*p*y,this._z=h*p*y-g*x*_,this._w=h*p*_-g*x*y;break;case"XZY":this._x=g*p*_-h*x*y,this._y=h*x*_-g*p*y,this._z=h*p*y+g*x*_,this._w=h*p*_+g*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],_=t[10],g=i+u+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(p-d)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(i>u&&i>_){const x=2*Math.sqrt(1+i-u-_);this._w=(p-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>_){const x=2*Math.sqrt(1+u-i-_);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+_-i-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+a*h-o*d,this._y=a*p+c*d+o*u-i*h,this._z=o*p+c*h+i*d-a*u,this._w=c*p-i*u-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,c=this._w;let u=c*e._w+i*e._x+a*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=a,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*a+t*this._y,this._z=x*o+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),_=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=c*_+this._w*g,this._x=i*_+this._x*g,this._y=a*_+this._y*g,this._z=o*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*i),p=2*(u*t-o*a),_=2*(o*i-c*t);return this.x=t+d*h+c*_-u*p,this.y=i+d*p+u*h-o*_,this.z=a+d*_+o*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-o*u,this.y=o*c-i*d,this.z=i*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mc.copy(this).projectOnVector(e),this.sub(Mc)}reflect(e){return this.sub(Mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mc=new O,Pd=new Sa;class Ea{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ui):ui.fromBufferAttribute(o,c),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),xo.subVectors(this.max,ta),ss.subVectors(e.a,ta),as.subVectors(e.b,ta),os.subVectors(e.c,ta),ir.subVectors(as,ss),rr.subVectors(os,as),Ar.subVectors(ss,os);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ar.z,Ar.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ar.z,0,-Ar.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ar.y,Ar.x,0];return!Sc(t,ss,as,os,xo)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,ss,as,os,xo))?!1:(Mo.crossVectors(ir,rr),t=[Mo.x,Mo.y,Mo.z],Sc(t,ss,as,os,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new O,new O,new O,new O,new O,new O,new O,new O],ui=new O,vo=new Ea,ss=new O,as=new O,os=new O,ir=new O,rr=new O,Ar=new O,ta=new O,xo=new O,Mo=new O,wr=new O;function Sc(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){wr.fromArray(s,o);const u=a.x*Math.abs(wr.x)+a.y*Math.abs(wr.y)+a.z*Math.abs(wr.z),d=e.dot(wr),h=t.dot(wr),p=i.dot(wr);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const lE=new Ea,na=new O,Ec=new O;class Ku{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(na,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ec)),this.expandByPoint(na.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new O,yc=new O,So=new O,sr=new O,Tc=new O,Eo=new O,Ac=new O;class cE{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){yc.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(yc);const o=e.distanceTo(t)*.5,c=-this.direction.dot(So),u=sr.dot(this.direction),d=-sr.dot(So),h=sr.lengthSq(),p=Math.abs(1-c*c);let _,g,x,y;if(p>0)if(_=c*d-u,g=c*u-d,y=o*p,_>=0)if(g>=-y)if(g<=y){const C=1/p;_*=C,g*=C,x=_*(_+c*g+2*u)+g*(c*_+g+2*d)+h}else g=o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;else g=-o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;else g<=-y?(_=Math.max(0,-(-c*o+u)),g=_>0?-o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+h):g<=y?(_=0,g=Math.min(Math.max(-o,-d),o),x=g*(g+2*d)+h):(_=Math.max(0,-(c*o+u)),g=_>0?o:Math.min(Math.max(-o,-d),o),x=-_*_+g*(g+2*d)+h);else g=c>0?-o:o,_=Math.max(0,-(c*g+u)),x=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(yc).addScaledVector(So,g),x}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),a=Oi.dot(Oi)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,a=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,a=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),_>=0?(u=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(u=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,a,o){Tc.subVectors(t,e),Eo.subVectors(i,e),Ac.crossVectors(Tc,Eo);let c=this.direction.dot(Ac),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;sr.subVectors(this.origin,e);const d=u*this.direction.dot(Eo.crossVectors(sr,Eo));if(d<0)return null;const h=u*this.direction.dot(Tc.cross(sr));if(h<0||d+h>c)return null;const p=-u*sr.dot(Ac);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,i,a,o,c,u,d,h,p,_,g,x,y,C,v){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,u,d,h,p,_,g,x,y,C,v)}set(e,t,i,a,o,c,u,d,h,p,_,g,x,y,C,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=a,m[1]=o,m[5]=c,m[9]=u,m[13]=d,m[2]=h,m[6]=p,m[10]=_,m[14]=g,m[3]=x,m[7]=y,m[11]=C,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ls.setFromMatrixColumn(e,0).length(),o=1/ls.setFromMatrixColumn(e,1).length(),c=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),h=Math.sin(a),p=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const g=c*p,x=c*_,y=u*p,C=u*_;t[0]=d*p,t[4]=-d*_,t[8]=h,t[1]=x+y*h,t[5]=g-C*h,t[9]=-u*d,t[2]=C-g*h,t[6]=y+x*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,x=d*_,y=h*p,C=h*_;t[0]=g+C*u,t[4]=y*u-x,t[8]=c*h,t[1]=c*_,t[5]=c*p,t[9]=-u,t[2]=x*u-y,t[6]=C+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,x=d*_,y=h*p,C=h*_;t[0]=g-C*u,t[4]=-c*_,t[8]=y+x*u,t[1]=x+y*u,t[5]=c*p,t[9]=C-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,x=c*_,y=u*p,C=u*_;t[0]=d*p,t[4]=y*h-x,t[8]=g*h+C,t[1]=d*_,t[5]=C*h+g,t[9]=x*h-y,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,x=c*h,y=u*d,C=u*h;t[0]=d*p,t[4]=C-g*_,t[8]=y*_+x,t[1]=_,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=x*_+y,t[10]=g-C*_}else if(e.order==="XZY"){const g=c*d,x=c*h,y=u*d,C=u*h;t[0]=d*p,t[4]=-_,t[8]=h*p,t[1]=g*_+C,t[5]=c*p,t[9]=x*_-y,t[2]=y*_-x,t[6]=u*p,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,fE)}lookAt(e,t,i){const a=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ar.crossVectors(i,kn),ar.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ar.crossVectors(i,kn)),ar.normalize(),yo.crossVectors(kn,ar),a[0]=ar.x,a[4]=yo.x,a[8]=kn.x,a[1]=ar.y,a[5]=yo.y,a[9]=kn.y,a[2]=ar.z,a[6]=yo.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],_=i[5],g=i[9],x=i[13],y=i[2],C=i[6],v=i[10],m=i[14],P=i[3],L=i[7],b=i[11],G=i[15],N=a[0],U=a[4],H=a[8],R=a[12],T=a[1],z=a[5],Q=a[9],$=a[13],ie=a[2],ue=a[6],ne=a[10],de=a[14],j=a[3],Ee=a[7],we=a[11],Ne=a[15];return o[0]=c*N+u*T+d*ie+h*j,o[4]=c*U+u*z+d*ue+h*Ee,o[8]=c*H+u*Q+d*ne+h*we,o[12]=c*R+u*$+d*de+h*Ne,o[1]=p*N+_*T+g*ie+x*j,o[5]=p*U+_*z+g*ue+x*Ee,o[9]=p*H+_*Q+g*ne+x*we,o[13]=p*R+_*$+g*de+x*Ne,o[2]=y*N+C*T+v*ie+m*j,o[6]=y*U+C*z+v*ue+m*Ee,o[10]=y*H+C*Q+v*ne+m*we,o[14]=y*R+C*$+v*de+m*Ne,o[3]=P*N+L*T+b*ie+G*j,o[7]=P*U+L*z+b*ue+G*Ee,o[11]=P*H+L*Q+b*ne+G*we,o[15]=P*R+L*$+b*de+G*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],_=e[6],g=e[10],x=e[14],y=e[3],C=e[7],v=e[11],m=e[15];return y*(+o*d*_-a*h*_-o*u*g+i*h*g+a*u*x-i*d*x)+C*(+t*d*x-t*h*g+o*c*g-a*c*x+a*h*p-o*d*p)+v*(+t*h*_-t*u*x-o*c*_+i*c*x+o*u*p-i*h*p)+m*(-a*u*p-t*d*_+t*u*g+a*c*_-i*c*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],_=e[9],g=e[10],x=e[11],y=e[12],C=e[13],v=e[14],m=e[15],P=_*v*h-C*g*h+C*d*x-u*v*x-_*d*m+u*g*m,L=y*g*h-p*v*h-y*d*x+c*v*x+p*d*m-c*g*m,b=p*C*h-y*_*h+y*u*x-c*C*x-p*u*m+c*_*m,G=y*_*d-p*C*d-y*u*g+c*C*g+p*u*v-c*_*v,N=t*P+i*L+a*b+o*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=P*U,e[1]=(C*g*o-_*v*o-C*a*x+i*v*x+_*a*m-i*g*m)*U,e[2]=(u*v*o-C*d*o+C*a*h-i*v*h-u*a*m+i*d*m)*U,e[3]=(_*d*o-u*g*o-_*a*h+i*g*h+u*a*x-i*d*x)*U,e[4]=L*U,e[5]=(p*v*o-y*g*o+y*a*x-t*v*x-p*a*m+t*g*m)*U,e[6]=(y*d*o-c*v*o-y*a*h+t*v*h+c*a*m-t*d*m)*U,e[7]=(c*g*o-p*d*o+p*a*h-t*g*h-c*a*x+t*d*x)*U,e[8]=b*U,e[9]=(y*_*o-p*C*o-y*i*x+t*C*x+p*i*m-t*_*m)*U,e[10]=(c*C*o-y*u*o+y*i*h-t*C*h-c*i*m+t*u*m)*U,e[11]=(p*u*o-c*_*o-p*i*h+t*_*h+c*i*x-t*u*x)*U,e[12]=G*U,e[13]=(p*C*a-y*_*a+y*i*g-t*C*g-p*i*v+t*_*v)*U,e[14]=(y*u*a-c*C*a-y*i*d+t*C*d+c*i*v-t*u*v)*U,e[15]=(c*_*a-p*u*a+p*i*d-t*_*d-c*i*g+t*u*g)*U,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,u=e.y,d=e.z,h=o*c,p=o*u;return this.set(h*c+i,h*u-a*d,h*d+a*u,0,h*u+a*d,p*u+i,p*d-a*c,0,h*d-a*u,p*d+a*c,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,h=o+o,p=c+c,_=u+u,g=o*h,x=o*p,y=o*_,C=c*p,v=c*_,m=u*_,P=d*h,L=d*p,b=d*_,G=i.x,N=i.y,U=i.z;return a[0]=(1-(C+m))*G,a[1]=(x+b)*G,a[2]=(y-L)*G,a[3]=0,a[4]=(x-b)*N,a[5]=(1-(g+m))*N,a[6]=(v+P)*N,a[7]=0,a[8]=(y+L)*U,a[9]=(v-P)*U,a[10]=(1-(g+C))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=ls.set(a[0],a[1],a[2]).length();const c=ls.set(a[4],a[5],a[6]).length(),u=ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const h=1/o,p=1/c,_=1/u;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=p,fi.elements[5]*=p,fi.elements[6]*=p,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,t.setFromRotationMatrix(fi),i.x=o,i.y=c,i.z=u,this}makePerspective(e,t,i,a,o,c,u=Wi){const d=this.elements,h=2*o/(t-e),p=2*o/(i-a),_=(t+e)/(t-e),g=(i+a)/(i-a);let x,y;if(u===Wi)x=-(c+o)/(c-o),y=-2*c*o/(c-o);else if(u===$o)x=-c/(c-o),y=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=h,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=p,d[9]=g,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=y,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,a,o,c,u=Wi){const d=this.elements,h=1/(t-e),p=1/(i-a),_=1/(c-o),g=(t+e)*h,x=(i+a)*p;let y,C;if(u===Wi)y=(c+o)*_,C=-2*_;else if(u===$o)y=o*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-g,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=C,d[14]=-y,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new O,fi=new Xt,uE=new O(0,0,0),fE=new O(1,1,1),ar=new O,yo=new O,kn=new O,Ld=new Xt,Id=new Sa;class Ai{constructor(e=0,t=0,i=0,a=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],p=a[9],_=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hE=0;const Dd=new O,cs=new Sa,Bi=new Xt,To=new O,ia=new O,dE=new O,pE=new Sa,Ud=new O(1,0,0),Nd=new O(0,1,0),Fd=new O(0,0,1),Od={type:"added"},mE={type:"removed"},us={type:"childadded",child:null},wc={type:"childremoved",child:null};class xn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new O,t=new Ai,i=new Sa,a=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new st}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Ud,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ud,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?To.copy(e):To.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ia,To,this.up):Bi.lookAt(To,ia,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),cs.setFromRotationMatrix(Bi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mE),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,pE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const _=d[h];o(e.shapes,_)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(e.materials,this.material[d]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),_=c(e.shapes),g=c(e.skeletons),x=c(e.animations),y=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=a,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}xn.DEFAULT_UP=new O(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new O,zi=new O,bc=new O,Gi=new O,fs=new O,hs=new O,Bd=new O,Rc=new O,Cc=new O,Pc=new O,Lc=new Nt,Ic=new Nt,Dc=new Nt;class ii{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),hi.subVectors(e,t),a.cross(hi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){hi.subVectors(a,t),zi.subVectors(i,t),bc.subVectors(e,t);const c=hi.dot(hi),u=hi.dot(zi),d=hi.dot(bc),h=zi.dot(zi),p=zi.dot(bc),_=c*h-u*u;if(_===0)return o.set(0,0,0),null;const g=1/_,x=(h*d-u*p)*g,y=(c*p-u*d)*g;return o.set(1-x-y,y,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,a,o,c,u,d){return this.getBarycoord(e,t,i,a,Gi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Gi.x),d.addScaledVector(c,Gi.y),d.addScaledVector(u,Gi.z),d)}static getInterpolatedAttribute(e,t,i,a,o,c){return Lc.setScalar(0),Ic.setScalar(0),Dc.setScalar(0),Lc.fromBufferAttribute(e,t),Ic.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Lc,o.x),c.addScaledVector(Ic,o.y),c.addScaledVector(Dc,o.z),c}static isFrontFacing(e,t,i,a){return hi.subVectors(i,t),zi.subVectors(e,t),hi.cross(zi).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),hi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,u;fs.subVectors(a,i),hs.subVectors(o,i),Rc.subVectors(e,i);const d=fs.dot(Rc),h=hs.dot(Rc);if(d<=0&&h<=0)return t.copy(i);Cc.subVectors(e,a);const p=fs.dot(Cc),_=hs.dot(Cc);if(p>=0&&_<=p)return t.copy(a);const g=d*_-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(fs,c);Pc.subVectors(e,o);const x=fs.dot(Pc),y=hs.dot(Pc);if(y>=0&&x<=y)return t.copy(o);const C=x*h-d*y;if(C<=0&&h>=0&&y<=0)return u=h/(h-y),t.copy(i).addScaledVector(hs,u);const v=p*y-x*_;if(v<=0&&_-p>=0&&x-y>=0)return Bd.subVectors(o,a),u=(_-p)/(_-p+(x-y)),t.copy(a).addScaledVector(Bd,u);const m=1/(v+C+g);return c=C*m,u=g*m,t.copy(i).addScaledVector(fs,c).addScaledVector(hs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=At.workingColorSpace){if(e=JS(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Uc(c,o,e+1/3),this.g=Uc(c,o,e),this.b=Uc(c,o,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ni){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=$p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.fromWorkingColorSpace(vn.copy(this),e),Math.round(St(vn.r*255,0,255))*65536+Math.round(St(vn.g*255,0,255))*256+Math.round(St(vn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(vn.copy(this),t);const i=vn.r,a=vn.g,o=vn.b,c=Math.max(i,a,o),u=Math.min(i,a,o);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const _=c-u;switch(h=p<=.5?_/(c+u):_/(2-c-u),c){case i:d=(a-o)/_+(a<o?6:0);break;case a:d=(o-i)/_+2;break;case o:d=(i-a)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ni){At.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,i=vn.g,a=vn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Ao);const i=gc(or.h,Ao.h,t),a=gc(or.s,Ao.s,t),o=gc(or.l,Ao.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ue;Ue.NAMES=$p;let _E=0;class Os extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=As,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=$c,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mi extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new O,wo=new De;let gE=0;class mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uu,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array),o=Ut(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),e}}class Jp extends mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qp extends mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mn extends mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vE=0;const ei=new Xt,Nc=new xn,ds=new O,Wn=new Ea,ra=new Ea,cn=new O;class _i extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qp(e)?Qp:Jp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new st().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Wn.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];ra.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(Wn.min,ra.min),Wn.expandByPoint(cn),cn.addVectors(Wn.max,ra.max),Wn.expandByPoint(cn)):(Wn.expandByPoint(ra.min),Wn.expandByPoint(ra.max))}Wn.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)cn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(cn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)cn.fromBufferAttribute(u,h),d&&(ds.fromBufferAttribute(e,h),cn.add(ds)),a=Math.max(a,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let H=0;H<i.count;H++)u[H]=new O,d[H]=new O;const h=new O,p=new O,_=new O,g=new De,x=new De,y=new De,C=new O,v=new O;function m(H,R,T){h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,R),_.fromBufferAttribute(i,T),g.fromBufferAttribute(o,H),x.fromBufferAttribute(o,R),y.fromBufferAttribute(o,T),p.sub(h),_.sub(h),x.sub(g),y.sub(g);const z=1/(x.x*y.y-y.x*x.y);isFinite(z)&&(C.copy(p).multiplyScalar(y.y).addScaledVector(_,-x.y).multiplyScalar(z),v.copy(_).multiplyScalar(x.x).addScaledVector(p,-y.x).multiplyScalar(z),u[H].add(C),u[R].add(C),u[T].add(C),d[H].add(v),d[R].add(v),d[T].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let H=0,R=P.length;H<R;++H){const T=P[H],z=T.start,Q=T.count;for(let $=z,ie=z+Q;$<ie;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new O,b=new O,G=new O,N=new O;function U(H){G.fromBufferAttribute(a,H),N.copy(G);const R=u[H];L.copy(R),L.sub(G.multiplyScalar(G.dot(R))).normalize(),b.crossVectors(N,R);const z=b.dot(d[H])<0?-1:1;c.setXYZW(H,L.x,L.y,L.z,z)}for(let H=0,R=P.length;H<R;++H){const T=P[H],z=T.start,Q=T.count;for(let $=z,ie=z+Q;$<ie;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new O,o=new O,c=new O,u=new O,d=new O,h=new O,p=new O,_=new O;if(e)for(let g=0,x=e.count;g<x;g+=3){const y=e.getX(g+0),C=e.getX(g+1),v=e.getX(g+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,C),c.fromBufferAttribute(t,v),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,v),u.add(p),d.add(p),h.add(p),i.setXYZ(y,u.x,u.y,u.z),i.setXYZ(C,d.x,d.y,d.z),i.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,o),_.subVectors(a,o),p.cross(_),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,_=u.normalized,g=new h.constructor(d.length*p);let x=0,y=0;for(let C=0,v=d.length;C<v;C++){u.isInterleavedBufferAttribute?x=d[C]*u.data.stride+u.offset:x=d[C]*p;for(let m=0;m<p;m++)g[y++]=h[x++]}return new mi(g,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,i);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let p=0,_=h.length;p<_;p++){const g=h[p],x=e(g,i);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let _=0,g=h.length;_<g;_++){const x=h[_];p.push(x.toJSON(e.data))}p.length>0&&(a[d]=p,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const h in a){const p=a[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],_=o[h];for(let g=0,x=_.length;g<x;g++)p.push(_[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zd=new Xt,br=new cE,bo=new Ku,Gd=new O,Ro=new O,Co=new O,Po=new O,Fc=new O,Lo=new O,Hd=new O,Io=new O;class bn extends xn{constructor(e=new _i,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){Lo.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=u[d],_=o[d];p!==0&&(Fc.fromBufferAttribute(_,e),c?Lo.addScaledVector(Fc,p):Lo.addScaledVector(Fc.sub(t),p))}t.add(Lo)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(o),br.copy(e.ray).recast(e.near),!(bo.containsPoint(br.origin)===!1&&(br.intersectSphere(bo,Gd)===null||br.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(zd.copy(o).invert(),br.copy(e.ray).applyMatrix4(zd),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,_=o.attributes.normal,g=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let y=0,C=g.length;y<C;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(u.count,Math.min(v.start+v.count,x.start+x.count));for(let b=P,G=L;b<G;b+=3){const N=u.getX(b),U=u.getX(b+1),H=u.getX(b+2);a=Do(this,m,e,i,h,p,_,N,U,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),C=Math.min(u.count,x.start+x.count);for(let v=y,m=C;v<m;v+=3){const P=u.getX(v),L=u.getX(v+1),b=u.getX(v+2);a=Do(this,c,e,i,h,p,_,P,L,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let y=0,C=g.length;y<C;y++){const v=g[y],m=c[v.materialIndex],P=Math.max(v.start,x.start),L=Math.min(d.count,Math.min(v.start+v.count,x.start+x.count));for(let b=P,G=L;b<G;b+=3){const N=b,U=b+1,H=b+2;a=Do(this,m,e,i,h,p,_,N,U,H),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const y=Math.max(0,x.start),C=Math.min(d.count,x.start+x.count);for(let v=y,m=C;v<m;v+=3){const P=v,L=v+1,b=v+2;a=Do(this,c,e,i,h,p,_,P,L,b),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function xE(s,e,t,i,a,o,c,u){let d;if(e.side===Nn?d=i.intersectTriangle(c,o,a,!0,u):d=i.intersectTriangle(a,o,c,e.side===dr,u),d===null)return null;Io.copy(u),Io.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Io);return h<t.near||h>t.far?null:{distance:h,point:Io.clone(),object:s}}function Do(s,e,t,i,a,o,c,u,d,h){s.getVertexPosition(u,Ro),s.getVertexPosition(d,Co),s.getVertexPosition(h,Po);const p=xE(s,e,t,i,Ro,Co,Po,Hd);if(p){const _=new O;ii.getBarycoord(Hd,Ro,Co,Po,_),a&&(p.uv=ii.getInterpolatedAttribute(a,u,d,h,_,new De)),o&&(p.uv1=ii.getInterpolatedAttribute(o,u,d,h,_,new De)),c&&(p.normal=ii.getInterpolatedAttribute(c,u,d,h,_,new O),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new O,materialIndex:0};ii.getNormal(Ro,Co,Po,g.normal),p.face=g,p.barycoord=_}return p}class Gr extends _i{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],p=[],_=[];let g=0,x=0;y("z","y","x",-1,-1,i,t,e,c,o,0),y("z","y","x",1,-1,i,t,-e,c,o,1),y("x","z","y",1,1,e,i,t,a,c,2),y("x","z","y",1,-1,e,i,-t,a,c,3),y("x","y","z",1,-1,e,t,i,a,o,4),y("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(p,3)),this.setAttribute("uv",new Mn(_,2));function y(C,v,m,P,L,b,G,N,U,H,R){const T=b/U,z=G/H,Q=b/2,$=G/2,ie=N/2,ue=U+1,ne=H+1;let de=0,j=0;const Ee=new O;for(let we=0;we<ne;we++){const Ne=we*z-$;for(let lt=0;lt<ue;lt++){const Ct=lt*T-Q;Ee[C]=Ct*P,Ee[v]=Ne*L,Ee[m]=ie,h.push(Ee.x,Ee.y,Ee.z),Ee[C]=0,Ee[v]=0,Ee[m]=N>0?1:-1,p.push(Ee.x,Ee.y,Ee.z),_.push(lt/U),_.push(1-we/H),de+=1}}for(let we=0;we<H;we++)for(let Ne=0;Ne<U;Ne++){const lt=g+Ne+ue*we,Ct=g+Ne+ue*(we+1),oe=g+(Ne+1)+ue*(we+1),_e=g+(Ne+1)+ue*we;d.push(lt,Ct,_e),d.push(Ct,oe,_e),j+=6}u.addGroup(x,j,R),x+=j,g+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const i=Ns(s[t]);for(const a in i)e[a]=i[a]}return e}function ME(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jp(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const SE={clone:Ns,merge:wn};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class em extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new O,Vd=new De,kd=new De;class Xn extends em{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,kd),t.subVectors(kd,Vd)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*i/h,a*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class TE extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Xn(ps,ms,e,t);a.layers=this.layers,this.add(a);const o=new Xn(ps,ms,e,t);o.layers=this.layers,this.add(o);const c=new Xn(ps,ms,e,t);c.layers=this.layers,this.add(c);const u=new Xn(ps,ms,e,t);u.layers=this.layers,this.add(u);const d=new Xn(ps,ms,e,t);d.layers=this.layers,this.add(d);const h=new Xn(ps,ms,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,u,d]=t;for(const h of t)this.remove(h);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,p]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,c),e.setRenderTarget(i,2,a),e.render(t,u),e.setRenderTarget(i,3,a),e.render(t,d),e.setRenderTarget(i,4,a),e.render(t,h),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,a),e.render(t,p),e.setRenderTarget(_,g,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class tm extends Rn{constructor(e,t,i,a,o,c,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ps,super(e,t,i,a,o,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AE extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new tm(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Gr(5,5,5),o=new pr({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ur});o.uniforms.tEquirect.value=t;const c=new bn(a,o),u=t.minFilter;return t.minFilter===Or&&(t.minFilter=yi),new TE(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}class Uo extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const C of e.hand.values()){const v=t.getJointPose(C,i),m=this._getHandJoint(h,C);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=p.position.distanceTo(_.position),x=.02,y=.005;h.inputState.pinching&&g>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bE extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class RE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uu,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new O;class Jo{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),a=Ut(a,this.array),o=Ut(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fu extends Os{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const sa=new O,gs=new O,vs=new O,xs=new De,aa=new De,nm=new Xt,No=new O,oa=new O,Fo=new O,Wd=new De,Bc=new De,Xd=new De;class qd extends xn{constructor(e=new Fu){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new _i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new RE(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Jo(i,3,0,!1)),_s.setAttribute("uv",new Jo(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;Oo(No.set(-.5,-.5,0),vs,c,gs,a,o),Oo(oa.set(.5,-.5,0),vs,c,gs,a,o),Oo(Fo.set(.5,.5,0),vs,c,gs,a,o),Wd.set(0,0),Bc.set(1,0),Xd.set(1,1);let u=e.ray.intersectTriangle(No,oa,Fo,!1,sa);if(u===null&&(Oo(oa.set(-.5,.5,0),vs,c,gs,a,o),Bc.set(0,1),u=e.ray.intersectTriangle(No,Fo,oa,!1,sa),u===null))return;const d=e.ray.origin.distanceTo(sa);d<e.near||d>e.far||t.push({distance:d,point:sa.clone(),uv:ii.getInterpolation(sa,No,oa,Fo,Wd,Bc,Xd,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oo(s,e,t,i,a,o){xs.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(aa.x=o*xs.x-a*xs.y,aa.y=a*xs.x+o*xs.y):aa.copy(xs),s.copy(e),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(nm)}const zc=new O,CE=new O,PE=new st;class Lr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=zc.subVectors(i,t).cross(CE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||PE.getNormalMatrix(e),a=this.coplanarPoint(zc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Ku,Bo=new O;class $u{constructor(e=new Lr,t=new Lr,i=new Lr,a=new Lr,o=new Lr,c=new Lr){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){const i=this.planes,a=e.elements,o=a[0],c=a[1],u=a[2],d=a[3],h=a[4],p=a[5],_=a[6],g=a[7],x=a[8],y=a[9],C=a[10],v=a[11],m=a[12],P=a[13],L=a[14],b=a[15];if(i[0].setComponents(d-o,g-h,v-x,b-m).normalize(),i[1].setComponents(d+o,g+h,v+x,b+m).normalize(),i[2].setComponents(d+c,g+p,v+y,b+P).normalize(),i[3].setComponents(d-c,g-p,v-y,b-P).normalize(),i[4].setComponents(d-u,g-_,v-C,b-L).normalize(),t===Wi)i[5].setComponents(d+u,g+_,v+C,b+L).normalize();else if(t===$o)i[5].setComponents(u,_,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Bo.x=a.normal.x>0?e.max.x:e.min.x,Bo.y=a.normal.y>0?e.max.y:e.min.y,Bo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class im extends Rn{constructor(e,t,i,a,o,c,u,d,h,p=ws){if(p!==ws&&p!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===ws&&(i=Br),i===void 0&&p===Ds&&(i=Is),super(null,a,o,c,u,d,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:pi,this.minFilter=d!==void 0?d:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tl extends _i{constructor(e=1,t=1,i=1,a=32,o=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:d};const h=this;a=Math.floor(a),o=Math.floor(o);const p=[],_=[],g=[],x=[];let y=0;const C=[],v=i/2;let m=0;P(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Mn(_,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(x,2));function P(){const b=new O,G=new O;let N=0;const U=(t-e)/i;for(let H=0;H<=o;H++){const R=[],T=H/o,z=T*(t-e)+e;for(let Q=0;Q<=a;Q++){const $=Q/a,ie=$*d+u,ue=Math.sin(ie),ne=Math.cos(ie);G.x=z*ue,G.y=-T*i+v,G.z=z*ne,_.push(G.x,G.y,G.z),b.set(ue,U,ne).normalize(),g.push(b.x,b.y,b.z),x.push($,1-T),R.push(y++)}C.push(R)}for(let H=0;H<a;H++)for(let R=0;R<o;R++){const T=C[R][H],z=C[R+1][H],Q=C[R+1][H+1],$=C[R][H+1];(e>0||R!==0)&&(p.push(T,z,$),N+=3),(t>0||R!==o-1)&&(p.push(z,Q,$),N+=3)}h.addGroup(m,N,0),m+=N}function L(b){const G=y,N=new De,U=new O;let H=0;const R=b===!0?e:t,T=b===!0?1:-1;for(let Q=1;Q<=a;Q++)_.push(0,v*T,0),g.push(0,T,0),x.push(.5,.5),y++;const z=y;for(let Q=0;Q<=a;Q++){const ie=Q/a*d+u,ue=Math.cos(ie),ne=Math.sin(ie);U.x=R*ne,U.y=v*T,U.z=R*ue,_.push(U.x,U.y,U.z),g.push(0,T,0),N.x=ue*.5+.5,N.y=ne*.5*T+.5,x.push(N.x,N.y),y++}for(let Q=0;Q<a;Q++){const $=G+Q,ie=z+Q;b===!0?p.push(ie,ie+1,$):p.push(ie+1,ie,$),H+=3}h.addGroup(m,H,b===!0?1:2),m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ju extends tl{constructor(e=1,t=1,i=32,a=1,o=!1,c=0,u=Math.PI*2){super(0,e,t,i,a,o,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:o,thetaStart:c,thetaLength:u}}static fromJSON(e){return new Ju(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qu extends _i{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];u(a),h(i),p(),this.setAttribute("position",new Mn(o,3)),this.setAttribute("normal",new Mn(o.slice(),3)),this.setAttribute("uv",new Mn(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function u(P){const L=new O,b=new O,G=new O;for(let N=0;N<t.length;N+=3)x(t[N+0],L),x(t[N+1],b),x(t[N+2],G),d(L,b,G,P)}function d(P,L,b,G){const N=G+1,U=[];for(let H=0;H<=N;H++){U[H]=[];const R=P.clone().lerp(b,H/N),T=L.clone().lerp(b,H/N),z=N-H;for(let Q=0;Q<=z;Q++)Q===0&&H===N?U[H][Q]=R:U[H][Q]=R.clone().lerp(T,Q/z)}for(let H=0;H<N;H++)for(let R=0;R<2*(N-H)-1;R++){const T=Math.floor(R/2);R%2===0?(g(U[H][T+1]),g(U[H+1][T]),g(U[H][T])):(g(U[H][T+1]),g(U[H+1][T+1]),g(U[H+1][T]))}}function h(P){const L=new O;for(let b=0;b<o.length;b+=3)L.x=o[b+0],L.y=o[b+1],L.z=o[b+2],L.normalize().multiplyScalar(P),o[b+0]=L.x,o[b+1]=L.y,o[b+2]=L.z}function p(){const P=new O;for(let L=0;L<o.length;L+=3){P.x=o[L+0],P.y=o[L+1],P.z=o[L+2];const b=v(P)/2/Math.PI+.5,G=m(P)/Math.PI+.5;c.push(b,1-G)}y(),_()}function _(){for(let P=0;P<c.length;P+=6){const L=c[P+0],b=c[P+2],G=c[P+4],N=Math.max(L,b,G),U=Math.min(L,b,G);N>.9&&U<.1&&(L<.2&&(c[P+0]+=1),b<.2&&(c[P+2]+=1),G<.2&&(c[P+4]+=1))}}function g(P){o.push(P.x,P.y,P.z)}function x(P,L){const b=P*3;L.x=e[b+0],L.y=e[b+1],L.z=e[b+2]}function y(){const P=new O,L=new O,b=new O,G=new O,N=new De,U=new De,H=new De;for(let R=0,T=0;R<o.length;R+=9,T+=6){P.set(o[R+0],o[R+1],o[R+2]),L.set(o[R+3],o[R+4],o[R+5]),b.set(o[R+6],o[R+7],o[R+8]),N.set(c[T+0],c[T+1]),U.set(c[T+2],c[T+3]),H.set(c[T+4],c[T+5]),G.copy(P).add(L).add(b).divideScalar(3);const z=v(G);C(N,T+0,P,z),C(U,T+2,L,z),C(H,T+4,b,z)}}function C(P,L,b,G){G<0&&P.x===1&&(c[L]=P.x-1),b.x===0&&b.z===0&&(c[L]=G/2/Math.PI+.5)}function v(P){return Math.atan2(P.z,-P.x)}function m(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.vertices,e.indices,e.radius,e.details)}}class ju extends Qu{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ju(e.radius,e.detail)}}class nl extends _i{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(i),d=Math.floor(a),h=u+1,p=d+1,_=e/u,g=t/d,x=[],y=[],C=[],v=[];for(let m=0;m<p;m++){const P=m*g-c;for(let L=0;L<h;L++){const b=L*_-o;y.push(b,-P,0),C.push(0,0,1),v.push(L/u),v.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<u;P++){const L=P+h*m,b=P+h*(m+1),G=P+1+h*(m+1),N=P+1+h*m;x.push(L,b,N),x.push(b,G,N)}this.setIndex(x),this.setAttribute("position",new Mn(y,3)),this.setAttribute("normal",new Mn(C,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ef extends _i{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let h=0;const p=[],_=new O,g=new O,x=[],y=[],C=[],v=[];for(let m=0;m<=i;m++){const P=[],L=m/i;let b=0;m===0&&c===0?b=.5/t:m===i&&d===Math.PI&&(b=-.5/t);for(let G=0;G<=t;G++){const N=G/t;_.x=-e*Math.cos(a+N*o)*Math.sin(c+L*u),_.y=e*Math.cos(c+L*u),_.z=e*Math.sin(a+N*o)*Math.sin(c+L*u),y.push(_.x,_.y,_.z),g.copy(_).normalize(),C.push(g.x,g.y,g.z),v.push(N+b,1-L),P.push(h++)}p.push(P)}for(let m=0;m<i;m++)for(let P=0;P<t;P++){const L=p[m][P+1],b=p[m][P],G=p[m+1][P],N=p[m+1][P+1];(m!==0||c>0)&&x.push(L,b,N),(m!==i-1||d<Math.PI)&&x.push(b,G,N)}this.setIndex(x),this.setAttribute("position",new Mn(y,3)),this.setAttribute("normal",new Mn(C,3)),this.setAttribute("uv",new Mn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ms extends Os{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LE extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class DE{constructor(e,t,i){const a=this;let o=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,o===!1&&a.onStart!==void 0&&a.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,a.onProgress!==void 0&&a.onProgress(p,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(p){a.onError!==void 0&&a.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,_){return h.push(p,_),this},this.removeHandler=function(p){const _=h.indexOf(p);return _!==-1&&h.splice(_,2),this},this.getHandler=function(p){for(let _=0,g=h.length;_<g;_+=2){const x=h[_],y=h[_+1];if(x.global&&(x.lastIndex=0),x.test(p))return y}return null}}}const UE=new DE;class tf{constructor(e){this.manager=e!==void 0?e:UE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tf.DEFAULT_MATERIAL_NAME="__DEFAULT";class NE extends tf{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Yd.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const u=xa("img");function d(){p(),Yd.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(_){p(),a&&a(_),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class Zd extends tf{constructor(e){super(e)}load(e,t,i,a){const o=new Rn,c=new NE(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class rm extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class FE extends rm{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gc=new Xt,Kd=new O,$d=new O;class OE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),$d.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($d),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jd=new Xt,la=new O,Hc=new O;class BE extends OE{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,a=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),la.setFromMatrixPosition(e.matrixWorld),i.position.copy(la),Hc.copy(i.position),Hc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Hc),i.updateMatrixWorld(),a.makeTranslation(-la.x,-la.y,-la.z),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd)}}class zE extends rm{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new BE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GE extends em{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class HE extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Qd(s,e,t,i){const a=VE(i);switch(t){case Op:return s*e;case zp:return s*e;case Gp:return s*e*2;case Hp:return s*e/a.components*a.byteLength;case qu:return s*e/a.components*a.byteLength;case Vp:return s*e*2/a.components*a.byteLength;case Yu:return s*e*2/a.components*a.byteLength;case Bp:return s*e*3/a.components*a.byteLength;case di:return s*e*4/a.components*a.byteLength;case Zu:return s*e*4/a.components*a.byteLength;case ko:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cu:case fu:return Math.max(s,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(s,8)*Math.max(e,8)/2;case hu:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Cu:case Pu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kp:case Lu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Iu:case Du:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VE(s){switch(s){case qi:case Up:return{byteLength:1,components:1};case va:case Np:case Ma:return{byteLength:2,components:1};case Wu:case Xu:return{byteLength:2,components:4};case Br:case ku:case ki:return{byteLength:4,components:1};case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sm(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function kE(s){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,p),u.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,d,h){const p=d.array,_=d.updateRanges;if(s.bindBuffer(h,u),_.length===0)s.bufferSubData(h,0,p);else{_.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<_.length;x++){const y=_[g],C=_[x];C.start<=y.start+y.count+1?y.count=Math.max(y.count,C.start+C.count-y.start):(++g,_[g]=C)}_.length=g+1;for(let x=0,y=_.length;x<y;x++){const C=_[x];s.bufferSubData(h,C.start*p.BYTES_PER_ELEMENT,p,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(s.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
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
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ny=`uniform bool receiveShadow;
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
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
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
#endif`,Vy=`struct PhysicalMaterial {
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
}`,ky=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jy=`#if defined( USE_POINTS_UV )
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
#endif`,eT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
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
#endif`,dT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RT=`float getShadowMask() {
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
}`,CT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,DT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,JT=`#define DISTANCE
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
}`,QT=`#define DISTANCE
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,aA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,cA=`#define NORMAL
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
}`,uA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,dA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,_A=`#define TOON
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
}`,gA=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,MA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,EA=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:WE,alphahash_pars_fragment:XE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:$E,aomap_pars_fragment:JE,batching_pars_vertex:QE,batching_vertex:jE,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:oy,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:fy,color_vertex:hy,common:dy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:_y,displacementmap_vertex:gy,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:Ey,envmap_common_pars_fragment:yy,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:Fy,envmap_vertex:wy,fog_vertex:by,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Iy,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Uy,lights_pars_begin:Ny,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:zy,lights_phong_pars_fragment:Gy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Vy,lights_fragment_begin:ky,lights_fragment_maps:Wy,lights_fragment_end:Xy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Ky,map_fragment:$y,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:jy,metalnessmap_fragment:eT,metalnessmap_pars_fragment:tT,morphinstance_vertex:nT,morphcolor_vertex:iT,morphnormal_vertex:rT,morphtarget_pars_vertex:sT,morphtarget_vertex:aT,normal_fragment_begin:oT,normal_fragment_maps:lT,normal_pars_fragment:cT,normal_pars_vertex:uT,normal_vertex:fT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:dT,clearcoat_normal_fragment_maps:pT,clearcoat_pars_fragment:mT,iridescence_pars_fragment:_T,opaque_fragment:gT,packing:vT,premultiplied_alpha_fragment:xT,project_vertex:MT,dithering_fragment:ST,dithering_pars_fragment:ET,roughnessmap_fragment:yT,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:wT,shadowmap_vertex:bT,shadowmask_pars_fragment:RT,skinbase_vertex:CT,skinning_pars_vertex:PT,skinning_vertex:LT,skinnormal_vertex:IT,specularmap_fragment:DT,specularmap_pars_fragment:UT,tonemapping_fragment:NT,tonemapping_pars_fragment:FT,transmission_fragment:OT,transmission_pars_fragment:BT,uv_pars_fragment:zT,uv_pars_vertex:GT,uv_vertex:HT,worldpos_vertex:VT,background_vert:kT,background_frag:WT,backgroundCube_vert:XT,backgroundCube_frag:qT,cube_vert:YT,cube_frag:ZT,depth_vert:KT,depth_frag:$T,distanceRGBA_vert:JT,distanceRGBA_frag:QT,equirect_vert:jT,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:aA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:hA,meshphysical_vert:dA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:_A,points_vert:gA,points_frag:vA,shadow_vert:xA,shadow_frag:MA,sprite_vert:SA,sprite_frag:EA},xe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Si={basic:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([xe.points,xe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([xe.common,xe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([xe.sprite,xe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:wn([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:wn([xe.lights,xe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const zo={r:0,b:0,g:0},Cr=new Ai,yA=new Xt;function TA(s,e,t,i,a,o,c){const u=new Ue(0);let d=o===!0?0:1,h,p,_=null,g=0,x=null;function y(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?t:e).get(b)),b}function C(L){let b=!1;const G=y(L);G===null?m(u,d):G&&G.isColor&&(m(G,1),b=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,b){const G=y(b);G&&(G.isCubeTexture||G.mapping===el)?(p===void 0&&(p=new bn(new Gr(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Ns(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,U,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),Cr.copy(b.backgroundRotation),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),p.material.uniforms.envMap.value=G,p.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(yA.makeRotationFromEuler(Cr)),p.material.toneMapped=At.getTransfer(G.colorSpace)!==Dt,(_!==G||g!==G.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=G,g=G.version,x=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):G&&G.isTexture&&(h===void 0&&(h=new bn(new nl(2,2),new pr({name:"BackgroundMaterial",uniforms:Ns(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=G,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=At.getTransfer(G.colorSpace)!==Dt,G.matrixAutoUpdate===!0&&G.updateMatrix(),h.material.uniforms.uvTransform.value.copy(G.matrix),(_!==G||g!==G.version||x!==s.toneMapping)&&(h.material.needsUpdate=!0,_=G,g=G.version,x=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function m(L,b){L.getRGB(zo,jp(s)),i.buffers.color.setClear(zo.r,zo.g,zo.b,b,c)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,b=1){u.set(L),d=b,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,m(u,d)},render:C,addToRenderList:v,dispose:P}}function AA(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function u(T,z,Q,$,ie){let ue=!1;const ne=_($,Q,z);o!==ne&&(o=ne,h(o.object)),ue=x(T,$,Q,ie),ue&&y(T,$,Q,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(ue||c)&&(c=!1,b(T,z,Q,$),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function d(){return s.createVertexArray()}function h(T){return s.bindVertexArray(T)}function p(T){return s.deleteVertexArray(T)}function _(T,z,Q){const $=Q.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let ue=ie[z.id];ue===void 0&&(ue={},ie[z.id]=ue);let ne=ue[$];return ne===void 0&&(ne=g(d()),ue[$]=ne),ne}function g(T){const z=[],Q=[],$=[];for(let ie=0;ie<t;ie++)z[ie]=0,Q[ie]=0,$[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:$,object:T,attributes:{},index:null}}function x(T,z,Q,$){const ie=o.attributes,ue=z.attributes;let ne=0;const de=Q.getAttributes();for(const j in de)if(de[j].location>=0){const we=ie[j];let Ne=ue[j];if(Ne===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Ne=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Ne=T.instanceColor)),we===void 0||we.attribute!==Ne||Ne&&we.data!==Ne.data)return!0;ne++}return o.attributesNum!==ne||o.index!==$}function y(T,z,Q,$){const ie={},ue=z.attributes;let ne=0;const de=Q.getAttributes();for(const j in de)if(de[j].location>=0){let we=ue[j];we===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(we=T.instanceColor));const Ne={};Ne.attribute=we,we&&we.data&&(Ne.data=we.data),ie[j]=Ne,ne++}o.attributes=ie,o.attributesNum=ne,o.index=$}function C(){const T=o.newAttributes;for(let z=0,Q=T.length;z<Q;z++)T[z]=0}function v(T){m(T,0)}function m(T,z){const Q=o.newAttributes,$=o.enabledAttributes,ie=o.attributeDivisors;Q[T]=1,$[T]===0&&(s.enableVertexAttribArray(T),$[T]=1),ie[T]!==z&&(s.vertexAttribDivisor(T,z),ie[T]=z)}function P(){const T=o.newAttributes,z=o.enabledAttributes;for(let Q=0,$=z.length;Q<$;Q++)z[Q]!==T[Q]&&(s.disableVertexAttribArray(Q),z[Q]=0)}function L(T,z,Q,$,ie,ue,ne){ne===!0?s.vertexAttribIPointer(T,z,Q,ie,ue):s.vertexAttribPointer(T,z,Q,$,ie,ue)}function b(T,z,Q,$){C();const ie=$.attributes,ue=Q.getAttributes(),ne=z.defaultAttributeValues;for(const de in ue){const j=ue[de];if(j.location>=0){let Ee=ie[de];if(Ee===void 0&&(de==="instanceMatrix"&&T.instanceMatrix&&(Ee=T.instanceMatrix),de==="instanceColor"&&T.instanceColor&&(Ee=T.instanceColor)),Ee!==void 0){const we=Ee.normalized,Ne=Ee.itemSize,lt=e.get(Ee);if(lt===void 0)continue;const Ct=lt.buffer,oe=lt.type,_e=lt.bytesPerElement,Fe=oe===s.INT||oe===s.UNSIGNED_INT||Ee.gpuType===ku;if(Ee.isInterleavedBufferAttribute){const ye=Ee.data,ke=ye.stride,ft=Ee.offset;if(ye.isInstancedInterleavedBuffer){for(let $e=0;$e<j.locationSize;$e++)m(j.location+$e,ye.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let $e=0;$e<j.locationSize;$e++)v(j.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let $e=0;$e<j.locationSize;$e++)L(j.location+$e,Ne/j.locationSize,oe,we,ke*_e,(ft+Ne/j.locationSize*$e)*_e,Fe)}else{if(Ee.isInstancedBufferAttribute){for(let ye=0;ye<j.locationSize;ye++)m(j.location+ye,Ee.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ye=0;ye<j.locationSize;ye++)v(j.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let ye=0;ye<j.locationSize;ye++)L(j.location+ye,Ne/j.locationSize,oe,we,Ne*_e,Ne/j.locationSize*ye*_e,Fe)}}else if(ne!==void 0){const we=ne[de];if(we!==void 0)switch(we.length){case 2:s.vertexAttrib2fv(j.location,we);break;case 3:s.vertexAttrib3fv(j.location,we);break;case 4:s.vertexAttrib4fv(j.location,we);break;default:s.vertexAttrib1fv(j.location,we)}}}}P()}function G(){H();for(const T in i){const z=i[T];for(const Q in z){const $=z[Q];for(const ie in $)p($[ie].object),delete $[ie];delete z[Q]}delete i[T]}}function N(T){if(i[T.id]===void 0)return;const z=i[T.id];for(const Q in z){const $=z[Q];for(const ie in $)p($[ie].object),delete $[ie];delete z[Q]}delete i[T.id]}function U(T){for(const z in i){const Q=i[z];if(Q[T.id]===void 0)continue;const $=Q[T.id];for(const ie in $)p($[ie].object),delete $[ie];delete Q[T.id]}}function H(){R(),c=!0,o!==a&&(o=a,h(o.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:H,resetDefaultState:R,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:v,disableUnusedAttributes:P}}function wA(s,e,t){let i;function a(h){i=h}function o(h,p){s.drawArrays(i,h,p),t.update(p,i,1)}function c(h,p,_){_!==0&&(s.drawArraysInstanced(i,h,p,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,p,0,_);let x=0;for(let y=0;y<_;y++)x+=p[y];t.update(x,i,1)}function d(h,p,_,g){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<h.length;y++)c(h[y],p[y],g[y]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,p,0,g,0,_);let y=0;for(let C=0;C<_;C++)y+=p[C]*g[C];t.update(y,i,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bA(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==di&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const H=U===Ma&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==qi&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ki&&!H)}function d(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:C,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:G,maxSamples:N}}function RA(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Lr,u=new st,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||i!==0||a;return a=g,i=_.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,g){t=p(_,g,0)},this.setState=function(_,g,x){const y=_.clippingPlanes,C=_.clipIntersection,v=_.clipShadows,m=s.get(_);if(!a||y===null||y.length===0||o&&!v)o?p(null):h();else{const P=o?0:i,L=P*4;let b=m.clippingState||null;d.value=b,b=p(y,g,L,x);for(let G=0;G!==L;++G)b[G]=t[G];m.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,g,x,y){const C=_!==null?_.length:0;let v=null;if(C!==0){if(v=d.value,y!==!0||v===null){const m=x+C*4,P=g.matrixWorldInverse;u.getNormalMatrix(P),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,b=x;L!==C;++L,b+=4)c.copy(_[L]).applyMatrix4(P,u),c.normal.toArray(v,b),v[b+3]=c.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}function CA(s){let e=new WeakMap;function t(c,u){return u===ru?c.mapping=Ps:u===su&&(c.mapping=Ls),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===ru||u===su)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new AE(d.height);return h.fromEquirectangularTexture(s,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const ys=4,jd=[.125,.215,.35,.446,.526,.582],Ur=20,Vc=new GE,ep=new Ue;let kc=null,Wc=0,Xc=0,qc=!1;const Ir=(1+Math.sqrt(5))/2,Ss=1/Ir,tp=[new O(-Ir,Ss,0),new O(Ir,Ss,0),new O(-Ss,0,Ir),new O(Ss,0,Ir),new O(0,Ir,-Ss),new O(0,Ir,Ss),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){kc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Ma,format:di,colorSpace:Us,depthBuffer:!1},a=ip(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ip(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PA(o)),this._blurMaterial=LA(o,e,t)}return a}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Vc)}_sceneToCubeUV(e,t,i,a){const u=new Xn(90,1,t,i),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,g=p.toneMapping;p.getClearColor(ep),p.toneMapping=fr,p.autoClear=!1;const x=new Mi({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),y=new bn(new Gr,x);let C=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,C=!0):(x.color.copy(ep),C=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(u.up.set(0,d[m],0),u.lookAt(h[m],0,0)):P===1?(u.up.set(0,0,d[m]),u.lookAt(0,h[m],0)):(u.up.set(0,d[m],0),u.lookAt(0,0,h[m]));const L=this._cubeSize;Go(a,P*L,m>2?L:0,L,L),p.setRenderTarget(a),C&&p.render(y,u),p.render(e,u)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=g,p.autoClear=_,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Ps||e.mapping===Ls;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rp());const o=a?this._cubemapMaterial:this._equirectMaterial,c=new bn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;Go(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Vc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=tp[(a-o-1)%tp.length];this._blur(e,o-1,o,c,u)}t.autoClear=i}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new bn(this._lodPlanes[a],h),g=h.uniforms,x=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ur-1),C=o/y,v=isFinite(o)?1+Math.floor(p*C):Ur;v>Ur&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ur}`);const m=[];let P=0;for(let U=0;U<Ur;++U){const H=U/C,R=Math.exp(-H*H/2);m.push(R),U===0?P+=R:U<v&&(P+=2*R)}for(let U=0;U<m.length;U++)m[U]=m[U]/P;g.envMap.value=e.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:L}=this;g.dTheta.value=y,g.mipInt.value=L-i;const b=this._sizeLods[a],G=3*b*(a>L-ys?a-L+ys:0),N=4*(this._cubeSize-b);Go(t,G,N,3*b,2*b),d.setRenderTarget(t),d.render(_,Vc)}}function PA(s){const e=[],t=[],i=[];let a=s;const o=s-ys+1+jd.length;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>s-ys?d=jd[c-s+ys-1]:c===0&&(d=0),i.push(d);const h=1/(u-2),p=-h,_=1+h,g=[p,p,_,p,_,_,p,p,_,_,p,_],x=6,y=6,C=3,v=2,m=1,P=new Float32Array(C*y*x),L=new Float32Array(v*y*x),b=new Float32Array(m*y*x);for(let N=0;N<x;N++){const U=N%3*2/3-1,H=N>2?0:-1,R=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];P.set(R,C*y*N),L.set(g,v*y*N);const T=[N,N,N,N,N,N];b.set(T,m*y*N)}const G=new _i;G.setAttribute("position",new mi(P,C)),G.setAttribute("uv",new mi(L,v)),G.setAttribute("faceIndex",new mi(b,m)),e.push(G),a>ys&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ip(s,e,t){const i=new zr(s,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function LA(s,e,t){const i=new Float32Array(Ur),a=new O(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function rp(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function sp(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function nf(){return`

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
	`}function IA(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,h=d===ru||d===su,p=d===Ps||d===Ls;if(h||p){let _=e.get(u);const g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new np(s)),_=h?t.fromEquirectangular(u,_):t.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{const x=u.image;return h&&x&&x.height>0||p&&x&&a(x)?(t===null&&(t=new np(s)),_=h?t.fromEquirectangular(u):t.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",o),_.texture):null}}}return u}function a(u){let d=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&d++;return d===h}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function DA(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Es("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function UA(s,e,t,i){const a={},o=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(_,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function h(_){const g=[],x=_.index,y=_.attributes.position;let C=0;if(x!==null){const P=x.array;C=x.version;for(let L=0,b=P.length;L<b;L+=3){const G=P[L+0],N=P[L+1],U=P[L+2];g.push(G,N,N,U,U,G)}}else if(y!==void 0){const P=y.array;C=y.version;for(let L=0,b=P.length/3-1;L<b;L+=3){const G=L+0,N=L+1,U=L+2;g.push(G,N,N,U,U,G)}}else return;const v=new(qp(g)?Qp:Jp)(g,1);v.version=C;const m=o.get(_);m&&e.remove(m),o.set(_,v)}function p(_){const g=o.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&h(_)}else h(_);return o.get(_)}return{get:u,update:d,getWireframeAttribute:p}}function NA(s,e,t){let i;function a(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,x){s.drawElements(i,x,o,g*c),t.update(x,i,1)}function h(g,x,y){y!==0&&(s.drawElementsInstanced(i,x,o,g*c,y),t.update(x,i,y))}function p(g,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,g,0,y);let v=0;for(let m=0;m<y;m++)v+=x[m];t.update(v,i,1)}function _(g,x,y,C){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)h(g[m]/c,x[m],C[m]);else{v.multiDrawElementsInstancedWEBGL(i,x,0,o,g,0,C,0,y);let m=0;for(let P=0;P<y;P++)m+=x[P]*C[P];t.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function FA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(o/3);break;case s.LINES:t.lines+=u*(o/2);break;case s.LINE_STRIP:t.lines+=u*(o-1);break;case s.LINE_LOOP:t.lines+=u*o;break;case s.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function OA(s,e,t){const i=new WeakMap,a=new Nt;function o(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let g=i.get(u);if(g===void 0||g.count!==_){let T=function(){H.dispose(),i.delete(u),u.removeEventListener("dispose",T)};var x=T;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,C=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let b=0;y===!0&&(b=1),C===!0&&(b=2),v===!0&&(b=3);let G=u.attributes.position.count*b,N=1;G>e.maxTextureSize&&(N=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*N*4*_),H=new Zp(U,G,N,_);H.type=ki,H.needsUpdate=!0;const R=b*4;for(let z=0;z<_;z++){const Q=m[z],$=P[z],ie=L[z],ue=G*N*4*z;for(let ne=0;ne<Q.count;ne++){const de=ne*R;y===!0&&(a.fromBufferAttribute(Q,ne),U[ue+de+0]=a.x,U[ue+de+1]=a.y,U[ue+de+2]=a.z,U[ue+de+3]=0),C===!0&&(a.fromBufferAttribute($,ne),U[ue+de+4]=a.x,U[ue+de+5]=a.y,U[ue+de+6]=a.z,U[ue+de+7]=0),v===!0&&(a.fromBufferAttribute(ie,ne),U[ue+de+8]=a.x,U[ue+de+9]=a.y,U[ue+de+10]=a.z,U[ue+de+11]=ie.itemSize===4?a.w:1)}}g={count:_,texture:H,size:new De(G,N)},i.set(u,g),u.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let y=0;for(let v=0;v<h.length;v++)y+=h[v];const C=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function BA(s,e,t,i){let a=new WeakMap;function o(d){const h=i.render.frame,p=d.geometry,_=e.get(d,p);if(a.get(_)!==h&&(e.update(_),a.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==h&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const g=d.skeleton;a.get(g)!==h&&(g.update(),a.set(g,h))}return _}function c(){a=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const am=new Rn,ap=new im(1,1),om=new Zp,lm=new oE,cm=new tm,op=[],lp=[],cp=new Float32Array(16),up=new Float32Array(9),fp=new Float32Array(4);function Bs(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=op[a];if(o===void 0&&(o=new Float32Array(a),op[a]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(o,u)}return o}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function il(s,e){let t=lp[e];t===void 0&&(t=new Int32Array(e),lp[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function zA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function GA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function HA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function VA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function kA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;fp.set(i),s.uniformMatrix2fv(this.addr,!1,fp),rn(t,i)}}function WA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;up.set(i),s.uniformMatrix3fv(this.addr,!1,up),rn(t,i)}}function XA(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;cp.set(i),s.uniformMatrix4fv(this.addr,!1,cp),rn(t,i)}}function qA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function ZA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function KA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function $A(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function QA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function jA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function ew(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(ap.compareFunction=Xp,o=ap):o=am,t.setTexture2D(e||o,a)}function tw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||lm,a)}function nw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||cm,a)}function iw(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||om,a)}function rw(s){switch(s){case 5126:return zA;case 35664:return GA;case 35665:return HA;case 35666:return VA;case 35674:return kA;case 35675:return WA;case 35676:return XA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return $A;case 36294:return JA;case 36295:return QA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}function sw(s,e){s.uniform1fv(this.addr,e)}function aw(s,e){const t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function ow(s,e){const t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function lw(s,e){const t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function cw(s,e){const t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function uw(s,e){const t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fw(s,e){const t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hw(s,e){s.uniform1iv(this.addr,e)}function dw(s,e){s.uniform2iv(this.addr,e)}function pw(s,e){s.uniform3iv(this.addr,e)}function mw(s,e){s.uniform4iv(this.addr,e)}function _w(s,e){s.uniform1uiv(this.addr,e)}function gw(s,e){s.uniform2uiv(this.addr,e)}function vw(s,e){s.uniform3uiv(this.addr,e)}function xw(s,e){s.uniform4uiv(this.addr,e)}function Mw(s,e,t){const i=this.cache,a=e.length,o=il(t,a);nn(i,o)||(s.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||am,o[c])}function Sw(s,e,t){const i=this.cache,a=e.length,o=il(t,a);nn(i,o)||(s.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||lm,o[c])}function Ew(s,e,t){const i=this.cache,a=e.length,o=il(t,a);nn(i,o)||(s.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||cm,o[c])}function yw(s,e,t){const i=this.cache,a=e.length,o=il(t,a);nn(i,o)||(s.uniform1iv(this.addr,o),rn(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||om,o[c])}function Tw(s){switch(s){case 5126:return sw;case 35664:return aw;case 35665:return ow;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return fw;case 5124:case 35670:return hw;case 35667:case 35671:return dw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return _w;case 36294:return gw;case 36295:return vw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return yw}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rw(t.type)}}class ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tw(t.type)}}class bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function hp(s,e){s.seq.push(e),s.map[e.id]=e}function Rw(s,e,t){const i=s.name,a=i.length;for(Yc.lastIndex=0;;){const o=Yc.exec(i),c=Yc.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){hp(t,h===void 0?new Aw(u,s,e):new ww(u,s,e));break}else{let _=t.map[u];_===void 0&&(_=new bw(u),hp(t,_)),t=_}}}class Zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Rw(o,c,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function dp(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Cw=37297;let Pw=0;function Lw(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const pp=new st;function Iw(s){At._getMatrix(pp,At.workingColorSpace,s);const e=`mat3( ${pp.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Ko:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mp(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Lw(s.getShaderSource(e),c)}else return a}function Dw(s,e){const t=Iw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uw(s,e){let t;switch(e){case DS:t="Linear";break;case US:t="Reinhard";break;case NS:t="Cineon";break;case FS:t="ACESFilmic";break;case BS:t="AgX";break;case zS:t="Neutral";break;case OS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new O;function Nw(){At.getLuminanceCoefficients(Ho);const s=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function Ow(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bw(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let u=1;o.type===s.FLOAT_MAT2&&(u=2),o.type===s.FLOAT_MAT3&&(u=3),o.type===s.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function pa(s){return s!==""}function _p(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(s){return s.replace(zw,Hw)}const Gw=new Map;function Hw(s,e){let t=ot[e];if(t===void 0){const i=Gw.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}const Vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(s){return s.replace(Vw,kw)}function kw(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function xp(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ww(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Xw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Yw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ip:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kw(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Ww(t),h=Xw(t),p=qw(t),_=Yw(t),g=Zw(t),x=Fw(t),y=Ow(o),C=a.createProgram();let v,m,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(pa).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(pa).join(`
`),m.length>0&&(m+=`
`)):(v=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),m=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?ot.tonemapping_pars_fragment:"",t.toneMapping!==fr?Uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Dw("linearToOutputTexel",t.outputColorSpace),Nw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),c=Ou(c),c=_p(c,t),c=gp(c,t),u=Ou(u),u=_p(u,t),u=gp(u,t),c=vp(c),u=vp(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=P+v+c,b=P+m+u,G=dp(a,a.VERTEX_SHADER,L),N=dp(a,a.FRAGMENT_SHADER,b);a.attachShader(C,G),a.attachShader(C,N),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function U(z){if(s.debug.checkShaderErrors){const Q=a.getProgramInfoLog(C).trim(),$=a.getShaderInfoLog(G).trim(),ie=a.getShaderInfoLog(N).trim();let ue=!0,ne=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,G,N);else{const de=mp(a,G,"vertex"),j=mp(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+de+`
`+j)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):($===""||ie==="")&&(ne=!1);ne&&(z.diagnostics={runnable:ue,programLog:Q,vertexShader:{log:$,prefix:v},fragmentShader:{log:ie,prefix:m}})}a.deleteShader(G),a.deleteShader(N),H=new Zo(a,C),R=Bw(a,C)}let H;this.getUniforms=function(){return H===void 0&&U(this),H};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(C,Cw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=N,this}let $w=0;class Jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qw(e),t.set(e,i)),i}}class Qw{constructor(e){this.id=$w++,this.code=e,this.usedTimes=0}}function jw(s,e,t,i,a,o,c){const u=new Kp,d=new Jw,h=new Set,p=[],_=a.logarithmicDepthBuffer,g=a.vertexTextures;let x=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return h.add(R),R===0?"uv":`uv${R}`}function v(R,T,z,Q,$){const ie=Q.fog,ue=$.geometry,ne=R.isMeshStandardMaterial?Q.environment:null,de=(R.isMeshStandardMaterial?t:e).get(R.envMap||ne),j=de&&de.mapping===el?de.image.height:null,Ee=y[R.type];R.precision!==null&&(x=a.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const we=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ne=we!==void 0?we.length:0;let lt=0;ue.morphAttributes.position!==void 0&&(lt=1),ue.morphAttributes.normal!==void 0&&(lt=2),ue.morphAttributes.color!==void 0&&(lt=3);let Ct,oe,_e,Fe;if(Ee){const wt=Si[Ee];Ct=wt.vertexShader,oe=wt.fragmentShader}else Ct=R.vertexShader,oe=R.fragmentShader,d.update(R),_e=d.getVertexShaderID(R),Fe=d.getFragmentShaderID(R);const ye=s.getRenderTarget(),ke=s.state.buffers.depth.getReversed(),ft=$.isInstancedMesh===!0,$e=$.isBatchedMesh===!0,zt=!!R.map,Lt=!!R.matcap,ht=!!de,F=!!R.aoMap,sn=!!R.lightMap,_t=!!R.bumpMap,je=!!R.normalMap,He=!!R.displacementMap,Ft=!!R.emissiveMap,Be=!!R.metalnessMap,I=!!R.roughnessMap,S=R.anisotropy>0,Y=R.clearcoat>0,ce=R.dispersion>0,fe=R.iridescence>0,se=R.sheen>0,Oe=R.transmission>0,ge=S&&!!R.anisotropyMap,be=Y&&!!R.clearcoatMap,dt=Y&&!!R.clearcoatNormalMap,me=Y&&!!R.clearcoatRoughnessMap,Ce=fe&&!!R.iridescenceMap,Xe=fe&&!!R.iridescenceThicknessMap,Ke=se&&!!R.sheenColorMap,Pe=se&&!!R.sheenRoughnessMap,ut=!!R.specularMap,et=!!R.specularColorMap,It=!!R.specularIntensityMap,V=Oe&&!!R.transmissionMap,Me=Oe&&!!R.thicknessMap,ee=!!R.gradientMap,le=!!R.alphaMap,Ae=R.alphaTest>0,Te=!!R.alphaHash,nt=!!R.extensions;let kt=fr;R.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(kt=s.toneMapping);const Qt={shaderID:Ee,shaderType:R.type,shaderName:R.name,vertexShader:Ct,fragmentShader:oe,defines:R.defines,customVertexShaderID:_e,customFragmentShaderID:Fe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:$e,batchingColor:$e&&$._colorsTexture!==null,instancing:ft,instancingColor:ft&&$.instanceColor!==null,instancingMorph:ft&&$.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Us,alphaToCoverage:!!R.alphaToCoverage,map:zt,matcap:Lt,envMap:ht,envMapMode:ht&&de.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:sn,bumpMap:_t,normalMap:je,displacementMap:g&&He,emissiveMap:Ft,normalMapObjectSpace:je&&R.normalMapType===kS,normalMapTangentSpace:je&&R.normalMapType===Wp,metalnessMap:Be,roughnessMap:I,anisotropy:S,anisotropyMap:ge,clearcoat:Y,clearcoatMap:be,clearcoatNormalMap:dt,clearcoatRoughnessMap:me,dispersion:ce,iridescence:fe,iridescenceMap:Ce,iridescenceThicknessMap:Xe,sheen:se,sheenColorMap:Ke,sheenRoughnessMap:Pe,specularMap:ut,specularColorMap:et,specularIntensityMap:It,transmission:Oe,transmissionMap:V,thicknessMap:Me,gradientMap:ee,opaque:R.transparent===!1&&R.blending===As&&R.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:Te,combine:R.combine,mapUv:zt&&C(R.map.channel),aoMapUv:F&&C(R.aoMap.channel),lightMapUv:sn&&C(R.lightMap.channel),bumpMapUv:_t&&C(R.bumpMap.channel),normalMapUv:je&&C(R.normalMap.channel),displacementMapUv:He&&C(R.displacementMap.channel),emissiveMapUv:Ft&&C(R.emissiveMap.channel),metalnessMapUv:Be&&C(R.metalnessMap.channel),roughnessMapUv:I&&C(R.roughnessMap.channel),anisotropyMapUv:ge&&C(R.anisotropyMap.channel),clearcoatMapUv:be&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:dt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&C(R.sheenRoughnessMap.channel),specularMapUv:ut&&C(R.specularMap.channel),specularColorMapUv:et&&C(R.specularColorMap.channel),specularIntensityMapUv:It&&C(R.specularIntensityMap.channel),transmissionMapUv:V&&C(R.transmissionMap.channel),thicknessMapUv:Me&&C(R.thicknessMap.channel),alphaMapUv:le&&C(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(je||S),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ue.attributes.uv&&(zt||le),fog:!!ie,useFog:R.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ke,skinning:$.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:zt&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ft&&R.emissiveMap.isVideoTexture===!0&&At.getTransfer(R.emissiveMap.colorSpace)===Dt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Vi,flipSided:R.side===Nn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:nt&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&R.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Qt.vertexUv1s=h.has(1),Qt.vertexUv2s=h.has(2),Qt.vertexUv3s=h.has(3),h.clear(),Qt}function m(R){const T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)T.push(z),T.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(P(T,R),L(T,R),T.push(s.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function P(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function L(R,T){u.disableAll(),T.supportsVertexTextures&&u.enable(0),T.instancing&&u.enable(1),T.instancingColor&&u.enable(2),T.instancingMorph&&u.enable(3),T.matcap&&u.enable(4),T.envMap&&u.enable(5),T.normalMapObjectSpace&&u.enable(6),T.normalMapTangentSpace&&u.enable(7),T.clearcoat&&u.enable(8),T.iridescence&&u.enable(9),T.alphaTest&&u.enable(10),T.vertexColors&&u.enable(11),T.vertexAlphas&&u.enable(12),T.vertexUv1s&&u.enable(13),T.vertexUv2s&&u.enable(14),T.vertexUv3s&&u.enable(15),T.vertexTangents&&u.enable(16),T.anisotropy&&u.enable(17),T.alphaHash&&u.enable(18),T.batching&&u.enable(19),T.dispersion&&u.enable(20),T.batchingColor&&u.enable(21),R.push(u.mask),u.disableAll(),T.fog&&u.enable(0),T.useFog&&u.enable(1),T.flatShading&&u.enable(2),T.logarithmicDepthBuffer&&u.enable(3),T.reverseDepthBuffer&&u.enable(4),T.skinning&&u.enable(5),T.morphTargets&&u.enable(6),T.morphNormals&&u.enable(7),T.morphColors&&u.enable(8),T.premultipliedAlpha&&u.enable(9),T.shadowMapEnabled&&u.enable(10),T.doubleSided&&u.enable(11),T.flipSided&&u.enable(12),T.useDepthPacking&&u.enable(13),T.dithering&&u.enable(14),T.transmission&&u.enable(15),T.sheen&&u.enable(16),T.opaque&&u.enable(17),T.pointsUvs&&u.enable(18),T.decodeVideoTexture&&u.enable(19),T.decodeVideoTextureEmissive&&u.enable(20),T.alphaToCoverage&&u.enable(21),R.push(u.mask)}function b(R){const T=y[R.type];let z;if(T){const Q=Si[T];z=SE.clone(Q.uniforms)}else z=R.uniforms;return z}function G(R,T){let z;for(let Q=0,$=p.length;Q<$;Q++){const ie=p[Q];if(ie.cacheKey===T){z=ie,++z.usedTimes;break}}return z===void 0&&(z=new Kw(s,T,R,o),p.push(z)),z}function N(R){if(--R.usedTimes===0){const T=p.indexOf(R);p[T]=p[p.length-1],p.pop(),R.destroy()}}function U(R){d.remove(R)}function H(){d.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:G,releaseProgram:N,releaseShaderCache:U,programs:p,dispose:H}}function eb(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function a(c,u,d){s.get(c)[u]=d}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function tb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sp(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(_,g,x,y,C,v){let m=s[e];return m===void 0?(m={id:_.id,object:_,geometry:g,material:x,groupOrder:y,renderOrder:_.renderOrder,z:C,group:v},s[e]=m):(m.id=_.id,m.object=_,m.geometry=g,m.material=x,m.groupOrder=y,m.renderOrder=_.renderOrder,m.z=C,m.group=v),e++,m}function u(_,g,x,y,C,v){const m=c(_,g,x,y,C,v);x.transmission>0?i.push(m):x.transparent===!0?a.push(m):t.push(m)}function d(_,g,x,y,C,v){const m=c(_,g,x,y,C,v);x.transmission>0?i.unshift(m):x.transparent===!0?a.unshift(m):t.unshift(m)}function h(_,g){t.length>1&&t.sort(_||tb),i.length>1&&i.sort(g||Mp),a.length>1&&a.sort(g||Mp)}function p(){for(let _=e,g=s.length;_<g;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:u,unshift:d,finish:p,sort:h}}function nb(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new Sp,s.set(i,[c])):a>=o.length?(c=new Sp,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function ib(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function rb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sb=0;function ab(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ob(s){const e=new ib,t=rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const a=new O,o=new Xt,c=new Xt;function u(h){let p=0,_=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let x=0,y=0,C=0,v=0,m=0,P=0,L=0,b=0,G=0,N=0,U=0;h.sort(ab);for(let R=0,T=h.length;R<T;R++){const z=h[R],Q=z.color,$=z.intensity,ie=z.distance,ue=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Q.r*$,_+=Q.g*$,g+=Q.b*$;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(z.sh.coefficients[ne],$);U++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const de=z.shadow,j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=ue,i.directionalShadowMatrix[x]=z.shadow.matrix,P++}i.directional[x]=ne,x++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(Q).multiplyScalar($),ne.distance=ie,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,i.spot[C]=ne;const de=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,de.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[C]=de.matrix,z.castShadow){const j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,i.spotShadow[C]=j,i.spotShadowMap[C]=ue,b++}C++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(Q).multiplyScalar($),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=ne,v++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const de=z.shadow,j=t.get(z);j.shadowIntensity=de.intensity,j.shadowBias=de.bias,j.shadowNormalBias=de.normalBias,j.shadowRadius=de.radius,j.shadowMapSize=de.mapSize,j.shadowCameraNear=de.camera.near,j.shadowCameraFar=de.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=ue,i.pointShadowMatrix[y]=z.shadow.matrix,L++}i.point[y]=ne,y++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar($),ne.groundColor.copy(z.groundColor).multiplyScalar($),i.hemi[m]=ne,m++}}v>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=_,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==x||H.pointLength!==y||H.spotLength!==C||H.rectAreaLength!==v||H.hemiLength!==m||H.numDirectionalShadows!==P||H.numPointShadows!==L||H.numSpotShadows!==b||H.numSpotMaps!==G||H.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=C,i.rectArea.length=v,i.point.length=y,i.hemi.length=m,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=b+G-N,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=U,H.directionalLength=x,H.pointLength=y,H.spotLength=C,H.rectAreaLength=v,H.hemiLength=m,H.numDirectionalShadows=P,H.numPointShadows=L,H.numSpotShadows=b,H.numSpotMaps=G,H.numLightProbes=U,i.version=sb++)}function d(h,p){let _=0,g=0,x=0,y=0,C=0;const v=p.matrixWorldInverse;for(let m=0,P=h.length;m<P;m++){const L=h[m];if(L.isDirectionalLight){const b=i.directional[_];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),_++}else if(L.isSpotLight){const b=i.spot[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(v),x++}else if(L.isRectAreaLight){const b=i.rectArea[y];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),c.identity(),o.copy(L.matrixWorld),o.premultiply(v),c.extractRotation(o),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),y++}else if(L.isPointLight){const b=i.point[g];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(v),g++}else if(L.isHemisphereLight){const b=i.hemi[C];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(v),C++}}}return{setup:u,setupView:d,state:i}}function Ep(s){const e=new ob(s),t=[],i=[];function a(p){h.camera=p,t.length=0,i.length=0}function o(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:c}}function lb(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new Ep(s),e.set(a,[u])):o>=c.length?(u=new Ep(s),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`;function fb(s,e,t){let i=new $u;const a=new De,o=new De,c=new Nt,u=new LE({depthPacking:VS}),d=new IE,h={},p=t.maxTextureSize,_={[dr]:Nn,[Nn]:dr,[Vi]:Vi},g=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const y=new _i;y.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new bn(y,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let m=this.type;this.render=function(N,U,H){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||N.length===0)return;const R=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=m!==Hi&&this.type===Hi,ie=m===Hi&&this.type!==Hi;for(let ue=0,ne=N.length;ue<ne;ue++){const de=N[ue],j=de.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;a.copy(j.mapSize);const Ee=j.getFrameExtents();if(a.multiply(Ee),o.copy(j.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/Ee.x),a.x=o.x*Ee.x,j.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/Ee.y),a.y=o.y*Ee.y,j.mapSize.y=o.y)),j.map===null||$===!0||ie===!0){const Ne=this.type!==Hi?{minFilter:pi,magFilter:pi}:{};j.map!==null&&j.map.dispose(),j.map=new zr(a.x,a.y,Ne),j.map.texture.name=de.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const we=j.getViewportCount();for(let Ne=0;Ne<we;Ne++){const lt=j.getViewport(Ne);c.set(o.x*lt.x,o.y*lt.y,o.x*lt.z,o.y*lt.w),Q.viewport(c),j.updateMatrices(de,Ne),i=j.getFrustum(),b(U,H,j.camera,de,this.type)}j.isPointLightShadow!==!0&&this.type===Hi&&P(j,H),j.needsUpdate=!1}m=this.type,v.needsUpdate=!1,s.setRenderTarget(R,T,z)};function P(N,U){const H=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new zr(a.x,a.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,H,g,C,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,H,x,C,null)}function L(N,U,H,R){let T=null;const z=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)T=z;else if(T=H.isPointLight===!0?d:u,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=T.uuid,$=U.uuid;let ie=h[Q];ie===void 0&&(ie={},h[Q]=ie);let ue=ie[$];ue===void 0&&(ue=T.clone(),ie[$]=ue,U.addEventListener("dispose",G)),T=ue}if(T.visible=U.visible,T.wireframe=U.wireframe,R===Hi?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:_[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Q=s.properties.get(T);Q.light=H}return T}function b(N,U,H,R,T){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&T===Hi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const $=e.update(N),ie=N.material;if(Array.isArray(ie)){const ue=$.groups;for(let ne=0,de=ue.length;ne<de;ne++){const j=ue[ne],Ee=ie[j.materialIndex];if(Ee&&Ee.visible){const we=L(N,Ee,R,T);N.onBeforeShadow(s,N,U,H,$,we,j),s.renderBufferDirect(H,null,$,we,N,j),N.onAfterShadow(s,N,U,H,$,we,j)}}}else if(ie.visible){const ue=L(N,ie,R,T);N.onBeforeShadow(s,N,U,H,$,ue,null),s.renderBufferDirect(H,null,$,ue,N,null),N.onAfterShadow(s,N,U,H,$,ue,null)}}const Q=N.children;for(let $=0,ie=Q.length;$<ie;$++)b(Q[$],U,H,R,T)}function G(N){N.target.removeEventListener("dispose",G);for(const H in h){const R=h[H],T=N.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}const hb={[Jc]:Qc,[jc]:nu,[eu]:iu,[Cs]:tu,[Qc]:Jc,[nu]:jc,[iu]:eu,[tu]:Cs};function db(s,e){function t(){let V=!1;const Me=new Nt;let ee=null;const le=new Nt(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!V&&(s.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,Te,nt,kt,Qt){Qt===!0&&(Ae*=kt,Te*=kt,nt*=kt),Me.set(Ae,Te,nt,kt),le.equals(Me)===!1&&(s.clearColor(Ae,Te,nt,kt),le.copy(Me))},reset:function(){V=!1,ee=null,le.set(-1,0,0,0)}}}function i(){let V=!1,Me=!1,ee=null,le=null,Ae=null;return{setReversed:function(Te){if(Me!==Te){const nt=e.get("EXT_clip_control");Me?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);const kt=Ae;Ae=null,this.setClear(kt)}Me=Te},getReversed:function(){return Me},setTest:function(Te){Te?ye(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(Te){ee!==Te&&!V&&(s.depthMask(Te),ee=Te)},setFunc:function(Te){if(Me&&(Te=hb[Te]),le!==Te){switch(Te){case Jc:s.depthFunc(s.NEVER);break;case Qc:s.depthFunc(s.ALWAYS);break;case jc:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case eu:s.depthFunc(s.EQUAL);break;case tu:s.depthFunc(s.GEQUAL);break;case nu:s.depthFunc(s.GREATER);break;case iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Te}},setLocked:function(Te){V=Te},setClear:function(Te){Ae!==Te&&(Me&&(Te=1-Te),s.clearDepth(Te),Ae=Te)},reset:function(){V=!1,ee=null,le=null,Ae=null,Me=!1}}}function a(){let V=!1,Me=null,ee=null,le=null,Ae=null,Te=null,nt=null,kt=null,Qt=null;return{setTest:function(wt){V||(wt?ye(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(wt){Me!==wt&&!V&&(s.stencilMask(wt),Me=wt)},setFunc:function(wt,Fn,ri){(ee!==wt||le!==Fn||Ae!==ri)&&(s.stencilFunc(wt,Fn,ri),ee=wt,le=Fn,Ae=ri)},setOp:function(wt,Fn,ri){(Te!==wt||nt!==Fn||kt!==ri)&&(s.stencilOp(wt,Fn,ri),Te=wt,nt=Fn,kt=ri)},setLocked:function(wt){V=wt},setClear:function(wt){Qt!==wt&&(s.clearStencil(wt),Qt=wt)},reset:function(){V=!1,Me=null,ee=null,le=null,Ae=null,Te=null,nt=null,kt=null,Qt=null}}}const o=new t,c=new i,u=new a,d=new WeakMap,h=new WeakMap;let p={},_={},g=new WeakMap,x=[],y=null,C=!1,v=null,m=null,P=null,L=null,b=null,G=null,N=null,U=new Ue(0,0,0),H=0,R=!1,T=null,z=null,Q=null,$=null,ie=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,de=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=de>=1):j.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=de>=2);let Ee=null,we={};const Ne=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),Ct=new Nt().fromArray(Ne),oe=new Nt().fromArray(lt);function _e(V,Me,ee,le){const Ae=new Uint8Array(4),Te=s.createTexture();s.bindTexture(V,Te),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<ee;nt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Me+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Te}const Fe={};Fe[s.TEXTURE_2D]=_e(s.TEXTURE_2D,s.TEXTURE_2D,1),Fe[s.TEXTURE_CUBE_MAP]=_e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[s.TEXTURE_2D_ARRAY]=_e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Fe[s.TEXTURE_3D]=_e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Cs),_t(!1),je(Sd),ye(s.CULL_FACE),F(ur);function ye(V){p[V]!==!0&&(s.enable(V),p[V]=!0)}function ke(V){p[V]!==!1&&(s.disable(V),p[V]=!1)}function ft(V,Me){return _[V]!==Me?(s.bindFramebuffer(V,Me),_[V]=Me,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Me),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function $e(V,Me){let ee=x,le=!1;if(V){ee=g.get(Me),ee===void 0&&(ee=[],g.set(Me,ee));const Ae=V.textures;if(ee.length!==Ae.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,nt=Ae.length;Te<nt;Te++)ee[Te]=s.COLOR_ATTACHMENT0+Te;ee.length=Ae.length,le=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,le=!0);le&&s.drawBuffers(ee)}function zt(V){return y!==V?(s.useProgram(V),y=V,!0):!1}const Lt={[Dr]:s.FUNC_ADD,[pS]:s.FUNC_SUBTRACT,[mS]:s.FUNC_REVERSE_SUBTRACT};Lt[_S]=s.MIN,Lt[gS]=s.MAX;const ht={[vS]:s.ZERO,[xS]:s.ONE,[MS]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[wS]:s.SRC_ALPHA_SATURATE,[TS]:s.DST_COLOR,[ES]:s.DST_ALPHA,[SS]:s.ONE_MINUS_SRC_COLOR,[$c]:s.ONE_MINUS_SRC_ALPHA,[AS]:s.ONE_MINUS_DST_COLOR,[yS]:s.ONE_MINUS_DST_ALPHA,[bS]:s.CONSTANT_COLOR,[RS]:s.ONE_MINUS_CONSTANT_COLOR,[CS]:s.CONSTANT_ALPHA,[PS]:s.ONE_MINUS_CONSTANT_ALPHA};function F(V,Me,ee,le,Ae,Te,nt,kt,Qt,wt){if(V===ur){C===!0&&(ke(s.BLEND),C=!1);return}if(C===!1&&(ye(s.BLEND),C=!0),V!==dS){if(V!==v||wt!==R){if((m!==Dr||b!==Dr)&&(s.blendEquation(s.FUNC_ADD),m=Dr,b=Dr),wt)switch(V){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ed:s.blendFunc(s.ONE,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Td:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ed:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case yd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Td:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,L=null,G=null,N=null,U.set(0,0,0),H=0,v=V,R=wt}return}Ae=Ae||Me,Te=Te||ee,nt=nt||le,(Me!==m||Ae!==b)&&(s.blendEquationSeparate(Lt[Me],Lt[Ae]),m=Me,b=Ae),(ee!==P||le!==L||Te!==G||nt!==N)&&(s.blendFuncSeparate(ht[ee],ht[le],ht[Te],ht[nt]),P=ee,L=le,G=Te,N=nt),(kt.equals(U)===!1||Qt!==H)&&(s.blendColor(kt.r,kt.g,kt.b,Qt),U.copy(kt),H=Qt),v=V,R=!1}function sn(V,Me){V.side===Vi?ke(s.CULL_FACE):ye(s.CULL_FACE);let ee=V.side===Nn;Me&&(ee=!ee),_t(ee),V.blending===As&&V.transparent===!1?F(ur):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),o.setMask(V.colorWrite);const le=V.stencilWrite;u.setTest(le),le&&(u.setMask(V.stencilWriteMask),u.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),u.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ft(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(V){T!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),T=V)}function je(V){V!==uS?(ye(s.CULL_FACE),V!==z&&(V===Sd?s.cullFace(s.BACK):V===fS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),z=V}function He(V){V!==Q&&(ne&&s.lineWidth(V),Q=V)}function Ft(V,Me,ee){V?(ye(s.POLYGON_OFFSET_FILL),($!==Me||ie!==ee)&&(s.polygonOffset(Me,ee),$=Me,ie=ee)):ke(s.POLYGON_OFFSET_FILL)}function Be(V){V?ye(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function I(V){V===void 0&&(V=s.TEXTURE0+ue-1),Ee!==V&&(s.activeTexture(V),Ee=V)}function S(V,Me,ee){ee===void 0&&(Ee===null?ee=s.TEXTURE0+ue-1:ee=Ee);let le=we[ee];le===void 0&&(le={type:void 0,texture:void 0},we[ee]=le),(le.type!==V||le.texture!==Me)&&(Ee!==ee&&(s.activeTexture(ee),Ee=ee),s.bindTexture(V,Me||Fe[V]),le.type=V,le.texture=Me)}function Y(){const V=we[Ee];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ce(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(V){Ct.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ct.copy(V))}function Pe(V){oe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function ut(V,Me){let ee=h.get(Me);ee===void 0&&(ee=new WeakMap,h.set(Me,ee));let le=ee.get(V);le===void 0&&(le=s.getUniformBlockIndex(Me,V.name),ee.set(V,le))}function et(V,Me){const le=h.get(Me).get(V);d.get(Me)!==le&&(s.uniformBlockBinding(Me,le,V.__bindingPointIndex),d.set(Me,le))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},Ee=null,we={},_={},g=new WeakMap,x=[],y=null,C=!1,v=null,m=null,P=null,L=null,b=null,G=null,N=null,U=new Ue(0,0,0),H=0,R=!1,T=null,z=null,Q=null,$=null,ie=null,Ct.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ye,disable:ke,bindFramebuffer:ft,drawBuffers:$e,useProgram:zt,setBlending:F,setMaterial:sn,setFlipSided:_t,setCullFace:je,setLineWidth:He,setPolygonOffset:Ft,setScissorTest:Be,activeTexture:I,bindTexture:S,unbindTexture:Y,compressedTexImage2D:ce,compressedTexImage3D:fe,texImage2D:Ce,texImage3D:Xe,updateUBOMapping:ut,uniformBlockBinding:et,texStorage2D:dt,texStorage3D:me,texSubImage2D:se,texSubImage3D:Oe,compressedTexSubImage2D:ge,compressedTexSubImage3D:be,scissor:Ke,viewport:Pe,reset:It}}function pb(s,e,t,i,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new De,p=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,S){return x?new OffscreenCanvas(I,S):xa("canvas")}function C(I,S,Y){let ce=1;const fe=Be(I);if((fe.width>Y||fe.height>Y)&&(ce=Y/Math.max(fe.width,fe.height)),ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const se=Math.floor(ce*fe.width),Oe=Math.floor(ce*fe.height);_===void 0&&(_=y(se,Oe));const ge=S?y(se,Oe):_;return ge.width=se,ge.height=Oe,ge.getContext("2d").drawImage(I,0,0,se,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+se+"x"+Oe+")."),ge}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function v(I){return I.generateMipmaps}function m(I){s.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,S,Y,ce,fe=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let se=S;if(S===s.RED&&(Y===s.FLOAT&&(se=s.R32F),Y===s.HALF_FLOAT&&(se=s.R16F),Y===s.UNSIGNED_BYTE&&(se=s.R8)),S===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(se=s.R8UI),Y===s.UNSIGNED_SHORT&&(se=s.R16UI),Y===s.UNSIGNED_INT&&(se=s.R32UI),Y===s.BYTE&&(se=s.R8I),Y===s.SHORT&&(se=s.R16I),Y===s.INT&&(se=s.R32I)),S===s.RG&&(Y===s.FLOAT&&(se=s.RG32F),Y===s.HALF_FLOAT&&(se=s.RG16F),Y===s.UNSIGNED_BYTE&&(se=s.RG8)),S===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(se=s.RG8UI),Y===s.UNSIGNED_SHORT&&(se=s.RG16UI),Y===s.UNSIGNED_INT&&(se=s.RG32UI),Y===s.BYTE&&(se=s.RG8I),Y===s.SHORT&&(se=s.RG16I),Y===s.INT&&(se=s.RG32I)),S===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(se=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(se=s.RGB16UI),Y===s.UNSIGNED_INT&&(se=s.RGB32UI),Y===s.BYTE&&(se=s.RGB8I),Y===s.SHORT&&(se=s.RGB16I),Y===s.INT&&(se=s.RGB32I)),S===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),Y===s.UNSIGNED_INT&&(se=s.RGBA32UI),Y===s.BYTE&&(se=s.RGBA8I),Y===s.SHORT&&(se=s.RGBA16I),Y===s.INT&&(se=s.RGBA32I)),S===s.RGB&&Y===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),S===s.RGBA){const Oe=fe?Ko:At.getTransfer(ce);Y===s.FLOAT&&(se=s.RGBA32F),Y===s.HALF_FLOAT&&(se=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(se=Oe===Dt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(I,S){let Y;return I?S===null||S===Br||S===Is?Y=s.DEPTH24_STENCIL8:S===ki?Y=s.DEPTH32F_STENCIL8:S===va&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Br||S===Is?Y=s.DEPTH_COMPONENT24:S===ki?Y=s.DEPTH_COMPONENT32F:S===va&&(Y=s.DEPTH_COMPONENT16),Y}function G(I,S){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==pi&&I.minFilter!==yi?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function N(I){const S=I.target;S.removeEventListener("dispose",N),H(S),S.isVideoTexture&&p.delete(S)}function U(I){const S=I.target;S.removeEventListener("dispose",U),T(S)}function H(I){const S=i.get(I);if(S.__webglInit===void 0)return;const Y=I.source,ce=g.get(Y);if(ce){const fe=ce[S.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&R(I),Object.keys(ce).length===0&&g.delete(Y)}i.remove(I)}function R(I){const S=i.get(I);s.deleteTexture(S.__webglTexture);const Y=I.source,ce=g.get(Y);delete ce[S.__cacheKey],c.memory.textures--}function T(I){const S=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let fe=0;fe<S.__webglFramebuffer[ce].length;fe++)s.deleteFramebuffer(S.__webglFramebuffer[ce][fe]);else s.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)s.deleteFramebuffer(S.__webglFramebuffer[ce]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Y=I.textures;for(let ce=0,fe=Y.length;ce<fe;ce++){const se=i.get(Y[ce]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),c.memory.textures--),i.remove(Y[ce])}i.remove(I)}let z=0;function Q(){z=0}function $(){const I=z;return I>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),z+=1,I}function ie(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ue(I,S){const Y=i.get(I);if(I.isVideoTexture&&He(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){const ce=I.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Y,I,S);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+S)}function ne(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){oe(Y,I,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+S)}function de(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){oe(Y,I,S);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+S)}function j(I,S){const Y=i.get(I);if(I.version>0&&Y.__version!==I.version){_e(Y,I,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+S)}const Ee={[au]:s.REPEAT,[Fr]:s.CLAMP_TO_EDGE,[ou]:s.MIRRORED_REPEAT},we={[pi]:s.NEAREST,[GS]:s.NEAREST_MIPMAP_NEAREST,[go]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[Or]:s.LINEAR_MIPMAP_LINEAR},Ne={[WS]:s.NEVER,[$S]:s.ALWAYS,[XS]:s.LESS,[Xp]:s.LEQUAL,[qS]:s.EQUAL,[KS]:s.GEQUAL,[YS]:s.GREATER,[ZS]:s.NOTEQUAL};function lt(I,S){if(S.type===ki&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yi||S.magFilter===mc||S.magFilter===go||S.magFilter===Or||S.minFilter===yi||S.minFilter===mc||S.minFilter===go||S.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ee[S.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ee[S.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ee[S.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,we[S.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pi||S.minFilter!==go&&S.minFilter!==Or||S.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ct(I,S){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",N));const ce=S.source;let fe=g.get(ce);fe===void 0&&(fe={},g.set(ce,fe));const se=ie(S);if(se!==I.__cacheKey){fe[se]===void 0&&(fe[se]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),fe[se].usedTimes++;const Oe=fe[I.__cacheKey];Oe!==void 0&&(fe[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&R(S)),I.__cacheKey=se,I.__webglTexture=fe[se].texture}return Y}function oe(I,S,Y){let ce=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=s.TEXTURE_3D);const fe=Ct(I,S),se=S.source;t.bindTexture(ce,I.__webglTexture,s.TEXTURE0+Y);const Oe=i.get(se);if(se.version!==Oe.__version||fe===!0){t.activeTexture(s.TEXTURE0+Y);const ge=At.getPrimaries(At.workingColorSpace),be=S.colorSpace===cr?null:At.getPrimaries(S.colorSpace),dt=S.colorSpace===cr||ge===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let me=C(S.image,!1,a.maxTextureSize);me=Ft(S,me);const Ce=o.convert(S.format,S.colorSpace),Xe=o.convert(S.type);let Ke=L(S.internalFormat,Ce,Xe,S.colorSpace,S.isVideoTexture);lt(ce,S);let Pe;const ut=S.mipmaps,et=S.isVideoTexture!==!0,It=Oe.__version===void 0||fe===!0,V=se.dataReady,Me=G(S,me);if(S.isDepthTexture)Ke=b(S.format===Ds,S.type),It&&(et?t.texStorage2D(s.TEXTURE_2D,1,Ke,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ke,me.width,me.height,0,Ce,Xe,null));else if(S.isDataTexture)if(ut.length>0){et&&It&&t.texStorage2D(s.TEXTURE_2D,Me,Ke,ut[0].width,ut[0].height);for(let ee=0,le=ut.length;ee<le;ee++)Pe=ut[ee],et?V&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ce,Xe,Pe.data):t.texImage2D(s.TEXTURE_2D,ee,Ke,Pe.width,Pe.height,0,Ce,Xe,Pe.data);S.generateMipmaps=!1}else et?(It&&t.texStorage2D(s.TEXTURE_2D,Me,Ke,me.width,me.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ce,Xe,me.data)):t.texImage2D(s.TEXTURE_2D,0,Ke,me.width,me.height,0,Ce,Xe,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ke,ut[0].width,ut[0].height,me.depth);for(let ee=0,le=ut.length;ee<le;ee++)if(Pe=ut[ee],S.format!==di)if(Ce!==null)if(et){if(V)if(S.layerUpdates.size>0){const Ae=Qd(Pe.width,Pe.height,S.format,S.type);for(const Te of S.layerUpdates){const nt=Pe.data.subarray(Te*Ae/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Te,Pe.width,Pe.height,1,Ce,nt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Ce,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Ke,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,Ce,Xe,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Ke,Pe.width,Pe.height,me.depth,0,Ce,Xe,Pe.data)}else{et&&It&&t.texStorage2D(s.TEXTURE_2D,Me,Ke,ut[0].width,ut[0].height);for(let ee=0,le=ut.length;ee<le;ee++)Pe=ut[ee],S.format!==di?Ce!==null?et?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?V&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,Ce,Xe,Pe.data):t.texImage2D(s.TEXTURE_2D,ee,Ke,Pe.width,Pe.height,0,Ce,Xe,Pe.data)}else if(S.isDataArrayTexture)if(et){if(It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Ke,me.width,me.height,me.depth),V)if(S.layerUpdates.size>0){const ee=Qd(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const Ae=me.data.subarray(le*ee/me.data.BYTES_PER_ELEMENT,(le+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Ce,Xe,Ae)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ce,Xe,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,me.width,me.height,me.depth,0,Ce,Xe,me.data);else if(S.isData3DTexture)et?(It&&t.texStorage3D(s.TEXTURE_3D,Me,Ke,me.width,me.height,me.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ce,Xe,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,me.width,me.height,me.depth,0,Ce,Xe,me.data);else if(S.isFramebufferTexture){if(It)if(et)t.texStorage2D(s.TEXTURE_2D,Me,Ke,me.width,me.height);else{let ee=me.width,le=me.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Ke,ee,le,0,Ce,Xe,null),ee>>=1,le>>=1}}else if(ut.length>0){if(et&&It){const ee=Be(ut[0]);t.texStorage2D(s.TEXTURE_2D,Me,Ke,ee.width,ee.height)}for(let ee=0,le=ut.length;ee<le;ee++)Pe=ut[ee],et?V&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ce,Xe,Pe):t.texImage2D(s.TEXTURE_2D,ee,Ke,Ce,Xe,Pe);S.generateMipmaps=!1}else if(et){if(It){const ee=Be(me);t.texStorage2D(s.TEXTURE_2D,Me,Ke,ee.width,ee.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Xe,me)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ce,Xe,me);v(S)&&m(ce),Oe.__version=se.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function _e(I,S,Y){if(S.image.length!==6)return;const ce=Ct(I,S),fe=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Y);const se=i.get(fe);if(fe.version!==se.__version||ce===!0){t.activeTexture(s.TEXTURE0+Y);const Oe=At.getPrimaries(At.workingColorSpace),ge=S.colorSpace===cr?null:At.getPrimaries(S.colorSpace),be=S.colorSpace===cr||Oe===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const dt=S.isCompressedTexture||S.image[0].isCompressedTexture,me=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let le=0;le<6;le++)!dt&&!me?Ce[le]=C(S.image[le],!0,a.maxCubemapSize):Ce[le]=me?S.image[le].image:S.image[le],Ce[le]=Ft(S,Ce[le]);const Xe=Ce[0],Ke=o.convert(S.format,S.colorSpace),Pe=o.convert(S.type),ut=L(S.internalFormat,Ke,Pe,S.colorSpace),et=S.isVideoTexture!==!0,It=se.__version===void 0||ce===!0,V=fe.dataReady;let Me=G(S,Xe);lt(s.TEXTURE_CUBE_MAP,S);let ee;if(dt){et&&It&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,ut,Xe.width,Xe.height);for(let le=0;le<6;le++){ee=Ce[le].mipmaps;for(let Ae=0;Ae<ee.length;Ae++){const Te=ee[Ae];S.format!==di?Ke!==null?et?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,Ke,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,ut,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Te.width,Te.height,Ke,Pe,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,ut,Te.width,Te.height,0,Ke,Pe,Te.data)}}}else{if(ee=S.mipmaps,et&&It){ee.length>0&&Me++;const le=Be(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,ut,le.width,le.height)}for(let le=0;le<6;le++)if(me){et?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce[le].width,Ce[le].height,Ke,Pe,Ce[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Ce[le].width,Ce[le].height,0,Ke,Pe,Ce[le].data);for(let Ae=0;Ae<ee.length;Ae++){const nt=ee[Ae].image[le].image;et?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,nt.width,nt.height,Ke,Pe,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,ut,nt.width,nt.height,0,Ke,Pe,nt.data)}}else{et?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ke,Pe,Ce[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,Ke,Pe,Ce[le]);for(let Ae=0;Ae<ee.length;Ae++){const Te=ee[Ae];et?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,Ke,Pe,Te.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,ut,Ke,Pe,Te.image[le])}}}v(S)&&m(s.TEXTURE_CUBE_MAP),se.__version=fe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Fe(I,S,Y,ce,fe,se){const Oe=o.convert(Y.format,Y.colorSpace),ge=o.convert(Y.type),be=L(Y.internalFormat,Oe,ge,Y.colorSpace),dt=i.get(S),me=i.get(Y);if(me.__renderTarget=S,!dt.__hasExternalTextures){const Ce=Math.max(1,S.width>>se),Xe=Math.max(1,S.height>>se);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,se,be,Ce,Xe,S.depth,0,Oe,ge,null):t.texImage2D(fe,se,be,Ce,Xe,0,Oe,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),je(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,fe,me.__webglTexture,0,_t(S)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,fe,me.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(I,S,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,I),S.depthBuffer){const ce=S.depthTexture,fe=ce&&ce.isDepthTexture?ce.type:null,se=b(S.stencilBuffer,fe),Oe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=_t(S);je(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,se,S.width,S.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,se,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,I)}else{const ce=S.textures;for(let fe=0;fe<ce.length;fe++){const se=ce[fe],Oe=o.convert(se.format,se.colorSpace),ge=o.convert(se.type),be=L(se.internalFormat,Oe,ge,se.colorSpace),dt=_t(S);Y&&je(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,be,S.width,S.height):je(S)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,be,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,be,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(S.depthTexture);ce.__renderTarget=S,(!ce.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ue(S.depthTexture,0);const fe=ce.__webglTexture,se=_t(S);if(S.depthTexture.format===ws)je(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(S.depthTexture.format===Ds)je(S)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ft(I){const S=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ce=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){const fe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",fe)};ce.addEventListener("dispose",fe),S.__depthDisposeCallback=fe}S.__boundDepthTexture=ce}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ke(S.__webglFramebuffer,I)}else if(Y){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=s.createRenderbuffer(),ye(S.__webglDepthbuffer[ce],I,!1);else{const fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ye(S.__webglDepthbuffer,I,!1);else{const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(I,S,Y){const ce=i.get(I);S!==void 0&&Fe(ce.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ft(I)}function zt(I){const S=I.texture,Y=i.get(I),ce=i.get(S);I.addEventListener("dispose",U);const fe=I.textures,se=I.isWebGLCubeRenderTarget===!0,Oe=fe.length>1;if(Oe||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=S.version,c.memory.textures++),se){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let be=0;be<S.mipmaps.length;be++)Y.__webglFramebuffer[ge][be]=s.createFramebuffer()}else Y.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let ge=0,be=fe.length;ge<be;ge++){const dt=i.get(fe[ge]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),c.memory.textures++)}if(I.samples>0&&je(I)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const be=fe[ge];Y.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ge]);const dt=o.convert(be.format,be.colorSpace),me=o.convert(be.type),Ce=L(be.internalFormat,dt,me,be.colorSpace,I.isXRRenderTarget===!0),Xe=_t(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),lt(s.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Fe(Y.__webglFramebuffer[ge][be],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else Fe(Y.__webglFramebuffer[ge],I,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ge=0,be=fe.length;ge<be;ge++){const dt=fe[ge],me=i.get(dt);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),lt(s.TEXTURE_2D,dt),Fe(Y.__webglFramebuffer,I,dt,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,0),v(dt)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),lt(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)Fe(Y.__webglFramebuffer[be],I,S,s.COLOR_ATTACHMENT0,ge,be);else Fe(Y.__webglFramebuffer,I,S,s.COLOR_ATTACHMENT0,ge,0);v(S)&&m(ge),t.unbindTexture()}I.depthBuffer&&ft(I)}function Lt(I){const S=I.textures;for(let Y=0,ce=S.length;Y<ce;Y++){const fe=S[Y];if(v(fe)){const se=P(I),Oe=i.get(fe).__webglTexture;t.bindTexture(se,Oe),m(se),t.unbindTexture()}}}const ht=[],F=[];function sn(I){if(I.samples>0){if(je(I)===!1){const S=I.textures,Y=I.width,ce=I.height;let fe=s.COLOR_BUFFER_BIT;const se=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=i.get(I),ge=S.length>1;if(ge)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let be=0;be<S.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[be]);const dt=i.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,fe,s.NEAREST),d===!0&&(ht.length=0,F.length=0,ht.push(s.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ht.push(se),F.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[be]);const dt=i.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const S=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function _t(I){return Math.min(a.maxSamples,I.samples)}function je(I){const S=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function He(I){const S=c.render.frame;p.get(I)!==S&&(p.set(I,S),I.update())}function Ft(I,S){const Y=I.colorSpace,ce=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Us&&Y!==cr&&(At.getTransfer(Y)===Dt?(ce!==di||fe!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Be(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=ue,this.setTexture2DArray=ne,this.setTexture3D=de,this.setTextureCube=j,this.rebindTextures=$e,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=je}function mb(s,e){function t(i,a=cr){let o;const c=At.getTransfer(a);if(i===qi)return s.UNSIGNED_BYTE;if(i===Wu)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Xu)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Fp)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Up)return s.BYTE;if(i===Np)return s.SHORT;if(i===va)return s.UNSIGNED_SHORT;if(i===ku)return s.INT;if(i===Br)return s.UNSIGNED_INT;if(i===ki)return s.FLOAT;if(i===Ma)return s.HALF_FLOAT;if(i===Op)return s.ALPHA;if(i===Bp)return s.RGB;if(i===di)return s.RGBA;if(i===zp)return s.LUMINANCE;if(i===Gp)return s.LUMINANCE_ALPHA;if(i===ws)return s.DEPTH_COMPONENT;if(i===Ds)return s.DEPTH_STENCIL;if(i===Hp)return s.RED;if(i===qu)return s.RED_INTEGER;if(i===Vp)return s.RG;if(i===Yu)return s.RG_INTEGER;if(i===Zu)return s.RGBA_INTEGER;if(i===ko||i===Wo||i===Xo||i===qo)if(c===Dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lu||i===cu||i===uu||i===fu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hu||i===du||i===pu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===hu||i===du)return c===Dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===pu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mu||i===_u||i===gu||i===vu||i===xu||i===Mu||i===Su||i===Eu||i===yu||i===Tu||i===Au||i===wu||i===bu||i===Ru)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===mu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Su)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Au)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ru)return c===Dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Cu||i===Pu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Yo)return c===Dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kp||i===Lu||i===Iu||i===Du)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Yo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Iu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Du)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const _b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new Rn,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pr({vertexShader:_b,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new nl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends Fs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,p=null,_=null,g=null,x=null,y=null;const C=new vb,v=t.getContextAttributes();let m=null,P=null;const L=[],b=[],G=new De;let N=null;const U=new Xn;U.viewport=new Nt;const H=new Xn;H.viewport=new Nt;const R=[U,H],T=new HE;let z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Oc,L[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Oc,L[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=L[oe];return _e===void 0&&(_e=new Oc,L[oe]=_e),_e.getHandSpace()};function $(oe){const _e=b.indexOf(oe.inputSource);if(_e===-1)return;const Fe=L[_e];Fe!==void 0&&(Fe.update(oe.inputSource,oe.frame,h||c),Fe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",ue);for(let oe=0;oe<L.length;oe++){const _e=b[oe];_e!==null&&(b[oe]=null,L[oe].disconnect(_e))}z=null,Q=null,C.reset(),e.setRenderTarget(m),x=null,g=null,_=null,a=null,P=null,Ct.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){o=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,ye=null,ke=null;v.depth&&(ke=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Fe=v.stencil?Ds:ws,ye=v.stencil?Is:Br);const ft={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:o};_=new XRWebGLBinding(a,t),g=_.createProjectionLayer(ft),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new zr(g.textureWidth,g.textureHeight,{format:di,type:qi,depthTexture:new im(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const Fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,Fe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new zr(x.framebufferWidth,x.framebufferHeight,{format:di,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),Ct.setContext(a),Ct.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ue(oe){for(let _e=0;_e<oe.removed.length;_e++){const Fe=oe.removed[_e],ye=b.indexOf(Fe);ye>=0&&(b[ye]=null,L[ye].disconnect(Fe))}for(let _e=0;_e<oe.added.length;_e++){const Fe=oe.added[_e];let ye=b.indexOf(Fe);if(ye===-1){for(let ft=0;ft<L.length;ft++)if(ft>=b.length){b.push(Fe),ye=ft;break}else if(b[ft]===null){b[ft]=Fe,ye=ft;break}if(ye===-1)break}const ke=L[ye];ke&&ke.connect(Fe)}}const ne=new O,de=new O;function j(oe,_e,Fe){ne.setFromMatrixPosition(_e.matrixWorld),de.setFromMatrixPosition(Fe.matrixWorld);const ye=ne.distanceTo(de),ke=_e.projectionMatrix.elements,ft=Fe.projectionMatrix.elements,$e=ke[14]/(ke[10]-1),zt=ke[14]/(ke[10]+1),Lt=(ke[9]+1)/ke[5],ht=(ke[9]-1)/ke[5],F=(ke[8]-1)/ke[0],sn=(ft[8]+1)/ft[0],_t=$e*F,je=$e*sn,He=ye/(-F+sn),Ft=He*-F;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ft),oe.translateZ(He),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ke[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Be=$e+He,I=zt+He,S=_t-Ft,Y=je+(ye-Ft),ce=Lt*zt/I*Be,fe=ht*zt/I*Be;oe.projectionMatrix.makePerspective(S,Y,ce,fe,Be,I),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Ee(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(a===null)return;let _e=oe.near,Fe=oe.far;C.texture!==null&&(C.depthNear>0&&(_e=C.depthNear),C.depthFar>0&&(Fe=C.depthFar)),T.near=H.near=U.near=_e,T.far=H.far=U.far=Fe,(z!==T.near||Q!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Q=T.far),U.layers.mask=oe.layers.mask|2,H.layers.mask=oe.layers.mask|4,T.layers.mask=U.layers.mask|H.layers.mask;const ye=oe.parent,ke=T.cameras;Ee(T,ye);for(let ft=0;ft<ke.length;ft++)Ee(ke[ft],ye);ke.length===2?j(T,U,H):T.projectionMatrix.copy(U.projectionMatrix),we(oe,T,ye)};function we(oe,_e,Fe){Fe===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(Fe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Nu*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(g===null&&x===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=oe)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(T)};let Ne=null;function lt(oe,_e){if(p=_e.getViewerPose(h||c),y=_e,p!==null){const Fe=p.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let ye=!1;Fe.length!==T.cameras.length&&(T.cameras.length=0,ye=!0);for(let $e=0;$e<Fe.length;$e++){const zt=Fe[$e];let Lt=null;if(x!==null)Lt=x.getViewport(zt);else{const F=_.getViewSubImage(g,zt);Lt=F.viewport,$e===0&&(e.setRenderTargetTextures(P,F.colorTexture,g.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(P))}let ht=R[$e];ht===void 0&&(ht=new Xn,ht.layers.enable($e),ht.viewport=new Nt,R[$e]=ht),ht.matrix.fromArray(zt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(zt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),$e===0&&(T.matrix.copy(ht.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ye===!0&&T.cameras.push(ht)}const ke=a.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const $e=_.getDepthInformation(Fe[0]);$e&&$e.isValid&&$e.texture&&C.init(e,$e,a.renderState)}}for(let Fe=0;Fe<L.length;Fe++){const ye=b[Fe],ke=L[Fe];ye!==null&&ke!==void 0&&ke.update(ye,_e,h||c)}Ne&&Ne(oe,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),y=null}const Ct=new sm;Ct.setAnimationLoop(lt),this.setAnimationLoop=function(oe){Ne=oe},this.dispose=function(){}}}const Pr=new Ai,Mb=new Xt;function Sb(s,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function i(v,m){m.color.getRGB(v.fogColor.value,jp(s)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,P,L,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(v,m):m.isMeshToonMaterial?(o(v,m),_(v,m)):m.isMeshPhongMaterial?(o(v,m),p(v,m)):m.isMeshStandardMaterial?(o(v,m),g(v,m),m.isMeshPhysicalMaterial&&x(v,m,b)):m.isMeshMatcapMaterial?(o(v,m),y(v,m)):m.isMeshDepthMaterial?o(v,m):m.isMeshDistanceMaterial?(o(v,m),C(v,m)):m.isMeshNormalMaterial?o(v,m):m.isLineBasicMaterial?(c(v,m),m.isLineDashedMaterial&&u(v,m)):m.isPointsMaterial?d(v,m,P,L):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Nn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Nn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const P=e.get(m),L=P.envMap,b=P.envMapRotation;L&&(v.envMap.value=L,Pr.copy(b),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(Pr)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function c(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function u(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function d(v,m,P,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*P,v.scale.value=L*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function _(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function x(v,m,P){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,m){m.matcap&&(v.matcap.value=m.matcap)}function C(v,m){const P=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Eb(s,e,t,i){let a={},o={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,L){const b=L.program;i.uniformBlockBinding(P,b)}function h(P,L){let b=a[P.id];b===void 0&&(y(P),b=p(P),a[P.id]=b,P.addEventListener("dispose",v));const G=L.program;i.updateUBOMapping(P,G);const N=e.render.frame;o[P.id]!==N&&(g(P),o[P.id]=N)}function p(P){const L=_();P.__bindingPointIndex=L;const b=s.createBuffer(),G=P.__size,N=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,G,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function _(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const L=a[P.id],b=P.uniforms,G=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let N=0,U=b.length;N<U;N++){const H=Array.isArray(b[N])?b[N]:[b[N]];for(let R=0,T=H.length;R<T;R++){const z=H[R];if(x(z,N,R,G)===!0){const Q=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let ie=0;for(let ue=0;ue<$.length;ue++){const ne=$[ue],de=C(ne);typeof ne=="number"||typeof ne=="boolean"?(z.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,Q+ie,z.__data)):ne.isMatrix3?(z.__data[0]=ne.elements[0],z.__data[1]=ne.elements[1],z.__data[2]=ne.elements[2],z.__data[3]=0,z.__data[4]=ne.elements[3],z.__data[5]=ne.elements[4],z.__data[6]=ne.elements[5],z.__data[7]=0,z.__data[8]=ne.elements[6],z.__data[9]=ne.elements[7],z.__data[10]=ne.elements[8],z.__data[11]=0):(ne.toArray(z.__data,ie),ie+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(P,L,b,G){const N=P.value,U=L+"_"+b;if(G[U]===void 0)return typeof N=="number"||typeof N=="boolean"?G[U]=N:G[U]=N.clone(),!0;{const H=G[U];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return G[U]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function y(P){const L=P.uniforms;let b=0;const G=16;for(let U=0,H=L.length;U<H;U++){const R=Array.isArray(L[U])?L[U]:[L[U]];for(let T=0,z=R.length;T<z;T++){const Q=R[T],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let ie=0,ue=$.length;ie<ue;ie++){const ne=$[ie],de=C(ne),j=b%G,Ee=j%de.boundary,we=j+Ee;b+=Ee,we!==0&&G-we<de.storage&&(b+=G-we),Q.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=b,b+=de.storage}}}const N=b%G;return N>0&&(b+=G-N),P.__size=b,P.__cache={},this}function C(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function v(P){const L=P.target;L.removeEventListener("dispose",v);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete o[L.id]}function m(){for(const P in a)s.deleteBuffer(a[P]);c=[],a={},o={}}return{bind:d,update:h,dispose:m}}class yb{constructor(e={}){const{canvas:t=QS(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const y=new Uint32Array(4),C=new Int32Array(4);let v=null,m=null;const P=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=fr,this.toneMappingExposure=1;const b=this;let G=!1,N=0,U=0,H=null,R=-1,T=null;const z=new Nt,Q=new Nt;let $=null;const ie=new Ue(0);let ue=0,ne=t.width,de=t.height,j=1,Ee=null,we=null;const Ne=new Nt(0,0,ne,de),lt=new Nt(0,0,ne,de);let Ct=!1;const oe=new $u;let _e=!1,Fe=!1;this.transmissionResolutionScale=1;const ye=new Xt,ke=new Xt,ft=new O,$e=new Nt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ht(){return H===null?j:1}let F=i;function sn(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const W="webgl2";if(F=sn(W,A),F===null)throw sn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _t,je,He,Ft,Be,I,S,Y,ce,fe,se,Oe,ge,be,dt,me,Ce,Xe,Ke,Pe,ut,et,It,V;function Me(){_t=new DA(F),_t.init(),et=new mb(F,_t),je=new bA(F,_t,e,et),He=new db(F,_t),je.reverseDepthBuffer&&g&&He.buffers.depth.setReversed(!0),Ft=new FA(F),Be=new eb,I=new pb(F,_t,He,Be,je,et,Ft),S=new CA(b),Y=new IA(b),ce=new kE(F),It=new AA(F,ce),fe=new UA(F,ce,Ft,It),se=new BA(F,fe,ce,Ft),Ke=new OA(F,je,I),me=new RA(Be),Oe=new jw(b,S,Y,_t,je,It,me),ge=new Sb(b,Be),be=new nb,dt=new lb(_t),Xe=new TA(b,S,Y,He,se,x,d),Ce=new fb(b,se,je),V=new Eb(F,Ft,je,He),Pe=new wA(F,_t,Ft),ut=new NA(F,_t,Ft),Ft.programs=Oe.programs,b.capabilities=je,b.extensions=_t,b.properties=Be,b.renderLists=be,b.shadowMap=Ce,b.state=He,b.info=Ft}Me();const ee=new xb(b,F);this.xr=ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=_t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(ne,de,!1))},this.getSize=function(A){return A.set(ne,de)},this.setSize=function(A,W,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,de=W,t.width=Math.floor(A*j),t.height=Math.floor(W*j),Z===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ne*j,de*j).floor()},this.setDrawingBufferSize=function(A,W,Z){ne=A,de=W,j=Z,t.width=Math.floor(A*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(Ne)},this.setViewport=function(A,W,Z,K){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,W,Z,K),He.viewport(z.copy(Ne).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,W,Z,K){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,W,Z,K),He.scissor(Q.copy(lt).multiplyScalar(j).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(A){He.setScissorTest(Ct=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(A=!0,W=!0,Z=!0){let K=0;if(A){let q=!1;if(H!==null){const pe=H.texture.format;q=pe===Zu||pe===Yu||pe===qu}if(q){const pe=H.texture.type,Se=pe===qi||pe===Br||pe===va||pe===Is||pe===Wu||pe===Xu,Re=Xe.getClearColor(),Ie=Xe.getClearAlpha(),Je=Re.r,Qe=Re.g,We=Re.b;Se?(y[0]=Je,y[1]=Qe,y[2]=We,y[3]=Ie,F.clearBufferuiv(F.COLOR,0,y)):(C[0]=Je,C[1]=Qe,C[2]=We,C[3]=Ie,F.clearBufferiv(F.COLOR,0,C))}else K|=F.COLOR_BUFFER_BIT}W&&(K|=F.DEPTH_BUFFER_BIT),Z&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Xe.dispose(),be.dispose(),dt.dispose(),Be.dispose(),S.dispose(),Y.dispose(),se.dispose(),It.dispose(),V.dispose(),Oe.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Hr),ee.removeEventListener("sessionend",Ta),si.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=Ft.autoReset,W=Ce.enabled,Z=Ce.autoUpdate,K=Ce.needsUpdate,q=Ce.type;Me(),Ft.autoReset=A,Ce.enabled=W,Ce.autoUpdate=Z,Ce.needsUpdate=K,Ce.type=q}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const W=A.target;W.removeEventListener("dispose",nt),kt(W)}function kt(A){Qt(A),Be.remove(A)}function Qt(A){const W=Be.get(A).programs;W!==void 0&&(W.forEach(function(Z){Oe.releaseProgram(Z)}),A.isShaderMaterial&&Oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,Z,K,q,pe){W===null&&(W=zt);const Se=q.isMesh&&q.matrixWorld.determinant()<0,Re=Pa(A,W,Z,K,q);He.setMaterial(K,Se);let Ie=Z.index,Je=1;if(K.wireframe===!0){if(Ie=fe.getWireframeAttribute(Z),Ie===void 0)return;Je=2}const Qe=Z.drawRange,We=Z.attributes.position;let vt=Qe.start*Je,Tt=(Qe.start+Qe.count)*Je;pe!==null&&(vt=Math.max(vt,pe.start*Je),Tt=Math.min(Tt,(pe.start+pe.count)*Je)),Ie!==null?(vt=Math.max(vt,0),Tt=Math.min(Tt,Ie.count)):We!=null&&(vt=Math.max(vt,0),Tt=Math.min(Tt,We.count));const qt=Tt-vt;if(qt<0||qt===1/0)return;It.setup(q,K,Re,Z,Ie);let Ht,xt=Pe;if(Ie!==null&&(Ht=ce.get(Ie),xt=ut,xt.setIndex(Ht)),q.isMesh)K.wireframe===!0?(He.setLineWidth(K.wireframeLinewidth*ht()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(q.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),He.setLineWidth(Ve*ht()),q.isLineSegments?xt.setMode(F.LINES):q.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else q.isPoints?xt.setMode(F.POINTS):q.isSprite&&xt.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)xt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ve=q._multiDrawStarts,jt=q._multiDrawCounts,Et=q._multiDrawCount,dn=Ie?ce.get(Ie).bytesPerElement:1,wi=Be.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<Et;Sn++)wi.setValue(F,"_gl_DrawID",Sn),xt.render(Ve[Sn]/dn,jt[Sn])}else if(q.isInstancedMesh)xt.renderInstances(vt,qt,q.count);else if(Z.isInstancedBufferGeometry){const Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,jt=Math.min(Z.instanceCount,Ve);xt.renderInstances(vt,qt,jt)}else xt.render(vt,qt)};function wt(A,W,Z){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,kr(A,W,Z),A.side=dr,A.needsUpdate=!0,kr(A,W,Z),A.side=Vi):kr(A,W,Z)}this.compile=function(A,W,Z=null){Z===null&&(Z=A),m=dt.get(Z),m.init(W),L.push(m),Z.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const K=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const pe=q.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Re=pe[Se];wt(Re,Z,q),K.add(Re)}else wt(pe,Z,q),K.add(pe)}),L.pop(),m=null,K},this.compileAsync=function(A,W,Z=null){const K=this.compile(A,W,Z);return new Promise(q=>{function pe(){if(K.forEach(function(Se){Be.get(Se).currentProgram.isReady()&&K.delete(Se)}),K.size===0){q(A);return}setTimeout(pe,10)}_t.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Fn=null;function ri(A){Fn&&Fn(A)}function Hr(){si.stop()}function Ta(){si.start()}const si=new sm;si.setAnimationLoop(ri),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(A){Fn=A,ee.setAnimationLoop(A),A===null?si.stop():si.start()},ee.addEventListener("sessionstart",Hr),ee.addEventListener("sessionend",Ta),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,W,H),m=dt.get(A,L.length),m.init(W),L.push(m),ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),oe.setFromProjectionMatrix(ke),Fe=this.localClippingEnabled,_e=me.init(this.clippingPlanes,Fe),v=be.get(A,P.length),v.init(),P.push(v),ee.enabled===!0&&ee.isPresenting===!0){const pe=b.xr.getDepthSensingMesh();pe!==null&&zs(pe,W,-1/0,b.sortObjects)}zs(A,W,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ee,we),Lt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Lt&&Xe.addToRenderList(v,A),this.info.render.frame++,_e===!0&&me.beginShadows();const Z=m.state.shadowsArray;Ce.render(Z,A,W),_e===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,q=v.transmissive;if(m.setupLights(),W.isArrayCamera){const pe=W.cameras;if(q.length>0)for(let Se=0,Re=pe.length;Se<Re;Se++){const Ie=pe[Se];wa(K,q,A,Ie)}Lt&&Xe.render(A);for(let Se=0,Re=pe.length;Se<Re;Se++){const Ie=pe[Se];Aa(v,A,Ie,Ie.viewport)}}else q.length>0&&wa(K,q,A,W),Lt&&Xe.render(A),Aa(v,A,W);H!==null&&U===0&&(I.updateMultisampleRenderTarget(H),I.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(b,A,W),It.resetDefaultState(),R=-1,T=null,L.pop(),L.length>0?(m=L[L.length-1],_e===!0&&me.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,P.pop(),P.length>0?v=P[P.length-1]:v=null};function zs(A,W,Z,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){K&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ke);const Se=se.update(A),Re=A.material;Re.visible&&v.push(A,Se,Re,Z,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const Se=se.update(A),Re=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),$e.copy(Se.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(ke)),Array.isArray(Re)){const Ie=Se.groups;for(let Je=0,Qe=Ie.length;Je<Qe;Je++){const We=Ie[Je],vt=Re[We.materialIndex];vt&&vt.visible&&v.push(A,Se,vt,Z,$e.z,We)}}else Re.visible&&v.push(A,Se,Re,Z,$e.z,null)}}const pe=A.children;for(let Se=0,Re=pe.length;Se<Re;Se++)zs(pe[Se],W,Z,K)}function Aa(A,W,Z,K){const q=A.opaque,pe=A.transmissive,Se=A.transparent;m.setupLightsView(Z),_e===!0&&me.setGlobalState(b.clippingPlanes,Z),K&&He.viewport(z.copy(K)),q.length>0&&Vr(q,W,Z),pe.length>0&&Vr(pe,W,Z),Se.length>0&&Vr(Se,W,Z),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function wa(A,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new zr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Ma:qi,minFilter:Or,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const pe=m.state.transmissionRenderTarget[K.id],Se=K.viewport||z;pe.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const Re=b.getRenderTarget();b.setRenderTarget(pe),b.getClearColor(ie),ue=b.getClearAlpha(),ue<1&&b.setClearColor(16777215,.5),b.clear(),Lt&&Xe.render(Z);const Ie=b.toneMapping;b.toneMapping=fr;const Je=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),_e===!0&&me.setGlobalState(b.clippingPlanes,K),Vr(A,Z,K),I.updateMultisampleRenderTarget(pe),I.updateRenderTargetMipmap(pe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let We=0,vt=W.length;We<vt;We++){const Tt=W[We],qt=Tt.object,Ht=Tt.geometry,xt=Tt.material,Ve=Tt.group;if(xt.side===Vi&&qt.layers.test(K.layers)){const jt=xt.side;xt.side=Nn,xt.needsUpdate=!0,ba(qt,Z,K,Ht,xt,Ve),xt.side=jt,xt.needsUpdate=!0,Qe=!0}}Qe===!0&&(I.updateMultisampleRenderTarget(pe),I.updateRenderTargetMipmap(pe))}b.setRenderTarget(Re),b.setClearColor(ie,ue),Je!==void 0&&(K.viewport=Je),b.toneMapping=Ie}function Vr(A,W,Z){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,pe=A.length;q<pe;q++){const Se=A[q],Re=Se.object,Ie=Se.geometry,Je=K===null?Se.material:K,Qe=Se.group;Re.layers.test(Z.layers)&&ba(Re,W,Z,Ie,Je,Qe)}}function ba(A,W,Z,K,q,pe){A.onBeforeRender(b,W,Z,K,q,pe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(b,W,Z,K,A,pe),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Nn,q.needsUpdate=!0,b.renderBufferDirect(Z,W,K,q,A,pe),q.side=dr,q.needsUpdate=!0,b.renderBufferDirect(Z,W,K,q,A,pe),q.side=Vi):b.renderBufferDirect(Z,W,K,q,A,pe),A.onAfterRender(b,W,Z,K,q,pe)}function kr(A,W,Z){W.isScene!==!0&&(W=zt);const K=Be.get(A),q=m.state.lights,pe=m.state.shadowsArray,Se=q.state.version,Re=Oe.getParameters(A,q.state,pe,W,Z),Ie=Oe.getProgramCacheKey(Re);let Je=K.programs;K.environment=A.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(A.isMeshStandardMaterial?Y:S).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",nt),Je=new Map,K.programs=Je);let Qe=Je.get(Ie);if(Qe!==void 0){if(K.currentProgram===Qe&&K.lightsStateVersion===Se)return Ca(A,Re),Qe}else Re.uniforms=Oe.getUniforms(A),A.onBeforeCompile(Re,b),Qe=Oe.acquireProgram(Re,Ie),Je.set(Ie,Qe),K.uniforms=Re.uniforms;const We=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=me.uniform),Ca(A,Re),K.needsLights=sl(A),K.lightsStateVersion=Se,K.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Qe,K.uniformsList=null,Qe}function Ra(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Zo.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Ca(A,W){const Z=Be.get(A);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Pa(A,W,Z,K,q){W.isScene!==!0&&(W=zt),I.resetTextureUnits();const pe=W.fog,Se=K.isMeshStandardMaterial?W.environment:null,Re=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Us,Ie=(K.isMeshStandardMaterial?Y:S).get(K.envMap||Se),Je=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!Z.morphAttributes.position,vt=!!Z.morphAttributes.normal,Tt=!!Z.morphAttributes.color;let qt=fr;K.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qt=b.toneMapping);const Ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Ht!==void 0?Ht.length:0,Ve=Be.get(K),jt=m.state.lights;if(_e===!0&&(Fe===!0||A!==T)){const an=A===T&&K.id===R;me.setState(K,A,an)}let Et=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==jt.state.version||Ve.outputColorSpace!==Re||q.isBatchedMesh&&Ve.batching===!1||!q.isBatchedMesh&&Ve.batching===!0||q.isBatchedMesh&&Ve.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ve.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ve.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ve.instancingMorph===!1&&q.morphTexture!==null||Ve.envMap!==Ie||K.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==me.numPlanes||Ve.numIntersection!==me.numIntersection)||Ve.vertexAlphas!==Je||Ve.vertexTangents!==Qe||Ve.morphTargets!==We||Ve.morphNormals!==vt||Ve.morphColors!==Tt||Ve.toneMapping!==qt||Ve.morphTargetsCount!==xt)&&(Et=!0):(Et=!0,Ve.__version=K.version);let dn=Ve.currentProgram;Et===!0&&(dn=kr(K,W,q));let wi=!1,Sn=!1,Yi=!1;const Ot=dn.getUniforms(),pn=Ve.uniforms;if(He.useProgram(dn.program)&&(wi=!0,Sn=!0,Yi=!0),K.id!==R&&(R=K.id,Sn=!0),wi||T!==A){He.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),eE(ye),tE(ye),Ot.setValue(F,"projectionMatrix",ye)):Ot.setValue(F,"projectionMatrix",A.projectionMatrix),Ot.setValue(F,"viewMatrix",A.matrixWorldInverse);const on=Ot.map.cameraPosition;on!==void 0&&on.setValue(F,ft.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&Ot.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ot.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Sn=!0,Yi=!0)}if(q.isSkinnedMesh){Ot.setOptional(F,q,"bindMatrix"),Ot.setOptional(F,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ot.setValue(F,"boneTexture",an.boneTexture,I))}q.isBatchedMesh&&(Ot.setOptional(F,q,"batchingTexture"),Ot.setValue(F,"batchingTexture",q._matricesTexture,I),Ot.setOptional(F,q,"batchingIdTexture"),Ot.setValue(F,"batchingIdTexture",q._indirectTexture,I),Ot.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Ot.setValue(F,"batchingColorTexture",q._colorsTexture,I));const Cn=Z.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&Ke.update(q,Z,dn),(Sn||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,Ot.setValue(F,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(pn.envMap.value=Ie,pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),Sn&&(Ot.setValue(F,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&rl(pn,Yi),pe&&K.fog===!0&&ge.refreshFogUniforms(pn,pe),ge.refreshMaterialUniforms(pn,K,j,de,m.state.transmissionRenderTarget[A.id]),Zo.upload(F,Ra(Ve),pn,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zo.upload(F,Ra(Ve),pn,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ot.setValue(F,"center",q.center),Ot.setValue(F,"modelViewMatrix",q.modelViewMatrix),Ot.setValue(F,"normalMatrix",q.normalMatrix),Ot.setValue(F,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const an=K.uniformsGroups;for(let on=0,mr=an.length;on<mr;on++){const Pn=an[on];V.update(Pn,dn),V.bind(Pn,dn)}}return dn}function rl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,Z){Be.get(A.texture).__webglTexture=W,Be.get(A.depthTexture).__webglTexture=Z;const K=Be.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const Z=Be.get(A);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0};const al=F.createFramebuffer();this.setRenderTarget=function(A,W=0,Z=0){H=A,N=W,U=Z;let K=!0,q=null,pe=!1,Se=!1;if(A){const Ie=Be.get(A);if(Ie.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Ie.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Ie.__hasExternalTextures)I.rebindTextures(A,Be.get(A.texture).__webglTexture,Be.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(Ie.__boundDepthTexture!==We){if(We!==null&&Be.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Se=!0);const Qe=Be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?q=Qe[W][Z]:q=Qe[W],pe=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?q=Be.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?q=Qe[Z]:q=Qe,z.copy(A.viewport),Q.copy(A.scissor),$=A.scissorTest}else z.copy(Ne).multiplyScalar(j).floor(),Q.copy(lt).multiplyScalar(j).floor(),$=Ct;if(Z!==0&&(q=al),He.bindFramebuffer(F.FRAMEBUFFER,q)&&K&&He.drawBuffers(A,q),He.viewport(z),He.scissor(Q),He.setScissorTest($),pe){const Ie=Be.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,Z)}else if(Se){const Ie=Be.get(A.texture),Je=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,Z,Je)}else if(A!==null&&Z!==0){const Ie=Be.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,Z)}R=-1},this.readRenderTargetPixels=function(A,W,Z,K,q,pe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){He.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Ie=A.texture,Je=Ie.format,Qe=Ie.type;if(!je.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q&&F.readPixels(W,Z,K,q,et.convert(Je),et.convert(Qe),pe)}finally{const Ie=H!==null?Be.get(H).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,W,Z,K,q,pe,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){const Ie=A.texture,Je=Ie.format,Qe=Ie.type;if(!je.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-K&&Z>=0&&Z<=A.height-q){He.bindFramebuffer(F.FRAMEBUFFER,Re);const We=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(W,Z,K,q,et.convert(Je),et.convert(Qe),0);const vt=H!==null?Be.get(H).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,vt);const Tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jS(F,Tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.deleteBuffer(We),F.deleteSync(Tt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,Z=0){A.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-Z),q=Math.floor(A.image.width*K),pe=Math.floor(A.image.height*K),Se=W!==null?W.x:0,Re=W!==null?W.y:0;I.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Se,Re,q,pe),He.unbindTexture()};const ol=F.createFramebuffer(),ll=F.createFramebuffer();this.copyTextureToTexture=function(A,W,Z=null,K=null,q=0,pe=null){A.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],W=arguments[2],pe=arguments[3]||0,Z=null),pe===null&&(q!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=q,q=0):pe=0);let Se,Re,Ie,Je,Qe,We,vt,Tt,qt;const Ht=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(Z!==null)Se=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Je=Z.min.x,Qe=Z.min.y,We=Z.isBox3?Z.min.z:0;else{const Cn=Math.pow(2,-q);Se=Math.floor(Ht.width*Cn),Re=Math.floor(Ht.height*Cn),A.isDataArrayTexture?Ie=Ht.depth:A.isData3DTexture?Ie=Math.floor(Ht.depth*Cn):Ie=1,Je=0,Qe=0,We=0}K!==null?(vt=K.x,Tt=K.y,qt=K.z):(vt=0,Tt=0,qt=0);const xt=et.convert(W.format),Ve=et.convert(W.type);let jt;W.isData3DTexture?(I.setTexture3D(W,0),jt=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),jt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Et=F.getParameter(F.UNPACK_ROW_LENGTH),dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wi=F.getParameter(F.UNPACK_SKIP_PIXELS),Sn=F.getParameter(F.UNPACK_SKIP_ROWS),Yi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,We);const Ot=A.isDataArrayTexture||A.isData3DTexture,pn=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Cn=Be.get(A),an=Be.get(W),on=Be.get(Cn.__renderTarget),mr=Be.get(an.__renderTarget);He.bindFramebuffer(F.READ_FRAMEBUFFER,on.__webglFramebuffer),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,mr.__webglFramebuffer);for(let Pn=0;Pn<Ie;Pn++)Ot&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(A).__webglTexture,q,We+Pn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(W).__webglTexture,pe,qt+Pn)),F.blitFramebuffer(Je,Qe,Se,Re,vt,Tt,Se,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Be.has(A)){const Cn=Be.get(A),an=Be.get(W);He.bindFramebuffer(F.READ_FRAMEBUFFER,ol),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,ll);for(let on=0;on<Ie;on++)Ot?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cn.__webglTexture,q,We+on):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cn.__webglTexture,q),pn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,pe,qt+on):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,pe),q!==0?F.blitFramebuffer(Je,Qe,Se,Re,vt,Tt,Se,Re,F.COLOR_BUFFER_BIT,F.NEAREST):pn?F.copyTexSubImage3D(jt,pe,vt,Tt,qt+on,Je,Qe,Se,Re):F.copyTexSubImage2D(jt,pe,vt,Tt,Je,Qe,Se,Re);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else pn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(jt,pe,vt,Tt,qt,Se,Re,Ie,xt,Ve,Ht.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(jt,pe,vt,Tt,qt,Se,Re,Ie,xt,Ht.data):F.texSubImage3D(jt,pe,vt,Tt,qt,Se,Re,Ie,xt,Ve,Ht):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,vt,Tt,Se,Re,xt,Ve,Ht.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,vt,Tt,Ht.width,Ht.height,xt,Ht.data):F.texSubImage2D(F.TEXTURE_2D,pe,vt,Tt,Se,Re,xt,Ve,Ht);F.pixelStorei(F.UNPACK_ROW_LENGTH,Et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yi),pe===0&&W.generateMipmaps&&F.generateMipmap(jt),He.unbindTexture()},this.copyTextureToTexture3D=function(A,W,Z=null,K=null,q=0){return A.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,K=arguments[1]||null,A=arguments[2],W=arguments[3],q=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,Z,K,q)},this.initRenderTarget=function(A){Be.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),He.unbindTexture()},this.resetState=function(){N=0,U=0,H=null,He.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class ya{constructor(e){Ge(this,"mesh");Ge(this,"isAlive",!0);this.mesh=e.mesh}afterSpawn(e,t){}update(e,t,i,a){}graphics(e,t,i,a){}kill(){this.isAlive=!1}beforeDeath(e,t,i){}}class Ti{constructor(e){Ge(this,"center");Ge(this,"parts");this.center=e.center,this.parts=e.parts,this.updateParts()}get position(){return this.center}set position(e){this.center=e.clone(),this.updateParts()}updateParts(){for(const e of this.parts)e.mesh.position.set(this.center.x+e.offset.x,this.center.y+e.offset.y,this.center.z+e.offset.z)}}const Tb={createGrid(s,e){const t=[];for(let i=0;i<s;i++){t[i]=[];for(let a=0;a<e;a++){const o={actors:[],isWalkable:!0};t[i][a]=o}}return t}};class Ab{constructor(e){Ge(this,"actorsGrid");Ge(this,"components",[]);Ge(this,"camera");Ge(this,"scene");this.actorsGrid=Tb.createGrid(e.width,e.height),this.camera=e.camera??new Xn,this.scene=e.scene??new bE}onStart(e){}onSwitch(e){}addActor(e,t){if(!(0<=t.x&&t.x<this.actorsGrid.length)&&!(0<=t.y&&t.y<this.actorsGrid[0].length))throw new Error(`Position ${t.x},${t.y} is out of bounds`);this.actorsGrid[t.x][t.y].actors.push(e),e.mesh instanceof Ti?e.mesh.parts.forEach(i=>this.scene.add(i.mesh)):this.scene.add(e.mesh),e.afterSpawn(this,t)}addComponent(e){this.components.push(e),e.mesh instanceof Ti?e.mesh.parts.forEach(t=>this.scene.add(t.mesh)):this.scene.add(e.mesh)}update(e,t){this.actorsGrid.forEach((o,c)=>{o.forEach((u,d)=>{const h=new De(c,d);u.actors.forEach(p=>p.update(e,t,this,h.clone()))})}),this.components.forEach(o=>o.update(e,t,this)),this.actorsGrid.map((o,c)=>o.map((u,d)=>{const h=new De(c,d),p=[],_=[];for(let g=0;g<u.actors.length;g++){const x=u.actors[g];x.isAlive?p.push(x):_.push(x)}_.forEach(g=>{g.beforeDeath(e,this,h),g.mesh instanceof Ti?g.mesh.parts.forEach(x=>this.scene.remove(x.mesh)):this.scene.remove(g.mesh)}),u.actors=p}));const i=[],a=[];for(let o=0;o<this.components.length;o++){const c=this.components[o];c.isAlive?i.push(c):a.push(c)}a.forEach(o=>{o.mesh instanceof Ti?o.mesh.parts.forEach(c=>this.scene.remove(c.mesh)):this.scene.remove(o.mesh)}),this.components=i}graphics(e,t){this.actorsGrid.forEach((i,a)=>{i.forEach((o,c)=>{const u=new De(a,c);o.actors.forEach(d=>d.graphics(e,t,this,u.clone()))})}),this.components.forEach(i=>i.graphics(e,t,this))}}var Rs=function(){var s=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(p){p.preventDefault(),i(++s%e.children.length)},!1);function t(p){return e.appendChild(p.dom),p}function i(p){for(var _=0;_<e.children.length;_++)e.children[_].style.display=_===p?"block":"none";s=p}var a=(performance||Date).now(),o=a,c=0,u=t(new Rs.Panel("FPS","#0ff","#002")),d=t(new Rs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=t(new Rs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(d.update(p-a,200),p>=o+1e3&&(u.update(c*1e3/(p-o),100),o=p,c=0,h)){var _=performance.memory;h.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:e,setMode:i}};Rs.Panel=function(s,e,t){var i=1/0,a=0,o=Math.round,c=o(window.devicePixelRatio||1),u=80*c,d=48*c,h=3*c,p=2*c,_=3*c,g=15*c,x=74*c,y=30*c,C=document.createElement("canvas");C.width=u,C.height=d,C.style.cssText="width:80px;height:48px";var v=C.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=t,v.fillRect(0,0,u,d),v.fillStyle=e,v.fillText(s,h,p),v.fillRect(_,g,x,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_,g,x,y),{dom:C,update:function(m,P){i=Math.min(i,m),a=Math.max(a,m),v.fillStyle=t,v.globalAlpha=1,v.fillRect(0,0,u,g),v.fillStyle=e,v.fillText(o(m)+" "+s+" ("+o(i)+"-"+o(a)+")",h,p),v.drawImage(C,_+c,g,x-c,y,_,g,x-c,y),v.fillRect(_+x-c,g,c,y),v.fillStyle=t,v.globalAlpha=.9,v.fillRect(_+x-c,g,c,o((1-m/P)*y))}}};const wb="canvas";class bb{constructor(){Ge(this,"wasPressedMap",new Map);Ge(this,"pressedMap",new Map);document.addEventListener("keydown",e=>{this.wasPressedMap.set(e.key,!0),this.pressedMap.set(e.key,!0)}),document.addEventListener("keyup",e=>{this.wasPressedMap.set(e.key,!1),this.pressedMap.set(e.key,!1)})}wasPressed(e){const t=this.wasPressedMap.get(e)||!1;return t&&this.wasPressedMap.set(e,!1),t}isPressed(e){return this.pressedMap.get(e)||!1}}const Rb=new bb;class Cb{constructor(){Ge(this,"renderer");Ge(this,"keyboardHandler");Ge(this,"isGameOver",!1);Ge(this,"lastUpdate",Date.now());Ge(this,"lastGraphics",Date.now());Ge(this,"stats",new Rs);Ge(this,"containers",new Map);Ge(this,"currentContainer");this.renderer=new yb,this.renderer.setSize(800,800),this.renderer.domElement.id=wb,document.body.appendChild(this.renderer.domElement),this.keyboardHandler=Rb,this.stats=new Rs,document.body.appendChild(this.stats.dom)}addContainer(e,t){if(this.containers.has(e))throw new Error(`A container with key "${e}" already exists`);this.containers.set(e,t),t.onStart(this)}setContainer(e){if(!this.containers.has(e))throw new Error(`A container with key "${e}" does not exist`);this.currentContainer=this.containers.get(e),this.currentContainer.onSwitch(this)}start(){if(!this.currentContainer)throw new Error("No container selected");const e=()=>{if(!this.isGameOver){if(!this.currentContainer)throw new Error("No container selected");this.update(),this.graphics(),this.renderer.render(this.currentContainer.scene,this.currentContainer.camera),this.stats.update(),requestAnimationFrame(e)}};e()}update(){const e=Date.now(),t=yp(e-this.lastUpdate);this.lastUpdate=e,this.currentContainer&&this.currentContainer.update(this,t)}graphics(){const e=Date.now(),t=yp(e-this.lastGraphics);this.lastGraphics=e,this.currentContainer&&this.currentContainer.graphics(this,t)}}function yp(s){return Math.max(0,Math.min(s,1e3))}class rf{constructor(e){Ge(this,"mesh");Ge(this,"isAlive",!0);this.mesh=e.mesh}update(e,t,i){}graphics(e,t,i){}kill(){this.isAlive=!1}}const yt={LIGHT_GREEN:"#75a743",GREEN:"#468232",DARK_GREEN:"#25562e",DARK:"#202e37",VOID:"#090a14",RED:"#a53030",DIRT:"#4d2b32",YELLOW:"#de9e41",WHITE:"#ebede9",ORANGE:"#da863e",PINK:"#df84a5",METAL:"#c7cfcc"},ti=4,un={createCube:s=>{const e=(s==null?void 0:s.size)??1,t=(s==null?void 0:s.color)??65280,i=new Gr(e,e,e,ti,ti,ti),a={color:t},o=s!=null&&s.basicMaterial?new Mi(a):new Ms(a);return new bn(i,o)},createBox:s=>{const e=(s==null?void 0:s.width)??1,t=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.depth)??1,a=(s==null?void 0:s.color)??new Ue(yt.RED),o=new Gr(e,t,i,ti,ti,ti),c={color:a},u=s!=null&&s.basicMaterial?new Mi(c):new Ms(c);return new bn(o,u)},createCone:s=>{const e=(s==null?void 0:s.radius)??1,t=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.color)??new Ue(yt.RED),a=new Ju(e,t,ti,ti),o={color:i},c=s!=null&&s.basicMaterial?new Mi(o):new Ms(o);return new bn(a,c)},createSphere:s=>{const e=(s==null?void 0:s.radius)??1,t=(s==null?void 0:s.color)??new Ue(yt.RED),i=new ef(e,ti,ti),a={color:t},o=s!=null&&s.basicMaterial?new Mi(a):new Ms(a);return new bn(i,o)},createCylinder:s=>{const e=(s==null?void 0:s.radius)??1,t=(s==null?void 0:s.height)??1,i=(s==null?void 0:s.color)??new Ue(yt.RED),a=new tl(e,e,t,ti*2,ti),o={color:i},c=s!=null&&s.basicMaterial?new Mi(o):new Ms(o);return new bn(a,c)},createGem(s){const e=(s==null?void 0:s.size)??1,t=(s==null?void 0:s.color)??new Ue(yt.RED),i=new ju(e,0),a={color:t},o=s!=null&&s.basicMaterial?new Mi(a):new Ms(a);return new bn(i,o)}};class Pb extends ya{constructor(e){const t=new Ti({center:e.position,parts:[{mesh:un.createBox({width:e.size,height:e.size/4,depth:e.size,color:new Ue(yt.DARK)}),offset:new O(0,-e.size*3/8,0)},{mesh:un.createBox({width:e.size*4/5,height:e.size/2,depth:e.size*4/5,color:new Ue(yt.WHITE)}),offset:new O(0,0,0)},{mesh:un.createBox({width:e.size,height:e.size/4,depth:e.size,color:new Ue(yt.DARK)}),offset:new O(0,e.size*3/8,0)}]});super({mesh:t})}}var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zc={},ca={},ma={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var Lb=ma.exports,Tp;function Ib(){return Tp||(Tp=1,function(s,e){(function(){var t,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",_=1,g=2,x=4,y=1,C=2,v=1,m=2,P=4,L=8,b=16,G=32,N=64,U=128,H=256,R=512,T=30,z="...",Q=800,$=16,ie=1,ue=2,ne=3,de=1/0,j=9007199254740991,Ee=17976931348623157e292,we=NaN,Ne=4294967295,lt=Ne-1,Ct=Ne>>>1,oe=[["ary",U],["bind",v],["bindKey",m],["curry",L],["curryRight",b],["flip",R],["partial",G],["partialRight",N],["rearg",H]],_e="[object Arguments]",Fe="[object Array]",ye="[object AsyncFunction]",ke="[object Boolean]",ft="[object Date]",$e="[object DOMException]",zt="[object Error]",Lt="[object Function]",ht="[object GeneratorFunction]",F="[object Map]",sn="[object Number]",_t="[object Null]",je="[object Object]",He="[object Promise]",Ft="[object Proxy]",Be="[object RegExp]",I="[object Set]",S="[object String]",Y="[object Symbol]",ce="[object Undefined]",fe="[object WeakMap]",se="[object WeakSet]",Oe="[object ArrayBuffer]",ge="[object DataView]",be="[object Float32Array]",dt="[object Float64Array]",me="[object Int8Array]",Ce="[object Int16Array]",Xe="[object Int32Array]",Ke="[object Uint8Array]",Pe="[object Uint8ClampedArray]",ut="[object Uint16Array]",et="[object Uint32Array]",It=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Me=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ee=/&(?:amp|lt|gt|quot|#39);/g,le=/[&<>"']/g,Ae=RegExp(ee.source),Te=RegExp(le.source),nt=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Qt=/<%=([\s\S]+?)%>/g,wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fn=/^\w*$/,ri=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hr=/[\\^$.*+?()[\]{}|]/g,Ta=RegExp(Hr.source),si=/^\s+/,zs=/\s/,Aa=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wa=/\{\n\/\* \[wrapped with (.+)\] \*/,Vr=/,? & /,ba=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kr=/[()=,{}\[\]\/\s]/,Ra=/\\(\\)?/g,Ca=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,rl=/^[-+]0x[0-9a-f]+$/i,sl=/^0b[01]+$/i,al=/^\[object .+?Constructor\]$/,ol=/^0o[0-7]+$/i,ll=/^(?:0|[1-9]\d*)$/,A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,W=/($^)/,Z=/['\n\r\u2028\u2029\\]/g,K="\\ud800-\\udfff",q="\\u0300-\\u036f",pe="\\ufe20-\\ufe2f",Se="\\u20d0-\\u20ff",Re=q+pe+Se,Ie="\\u2700-\\u27bf",Je="a-z\\xdf-\\xf6\\xf8-\\xff",Qe="\\xac\\xb1\\xd7\\xf7",We="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Tt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qt="A-Z\\xc0-\\xd6\\xd8-\\xde",Ht="\\ufe0e\\ufe0f",xt=Qe+We+vt+Tt,Ve="['’]",jt="["+K+"]",Et="["+xt+"]",dn="["+Re+"]",wi="\\d+",Sn="["+Ie+"]",Yi="["+Je+"]",Ot="[^"+K+xt+wi+Ie+Je+qt+"]",pn="\\ud83c[\\udffb-\\udfff]",Cn="(?:"+dn+"|"+pn+")",an="[^"+K+"]",on="(?:\\ud83c[\\udde6-\\uddff]){2}",mr="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+qt+"]",of="\\u200d",lf="(?:"+Yi+"|"+Ot+")",fm="(?:"+Pn+"|"+Ot+")",cf="(?:"+Ve+"(?:d|ll|m|re|s|t|ve))?",uf="(?:"+Ve+"(?:D|LL|M|RE|S|T|VE))?",ff=Cn+"?",hf="["+Ht+"]?",hm="(?:"+of+"(?:"+[an,on,mr].join("|")+")"+hf+ff+")*",dm="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",df=hf+ff+hm,mm="(?:"+[Sn,on,mr].join("|")+")"+df,_m="(?:"+[an+dn+"?",dn,on,mr,jt].join("|")+")",gm=RegExp(Ve,"g"),vm=RegExp(dn,"g"),cl=RegExp(pn+"(?="+pn+")|"+_m+df,"g"),xm=RegExp([Pn+"?"+Yi+"+"+cf+"(?="+[Et,Pn,"$"].join("|")+")",fm+"+"+uf+"(?="+[Et,Pn+lf,"$"].join("|")+")",Pn+"?"+lf+"+"+cf,Pn+"+"+uf,pm,dm,wi,mm].join("|"),"g"),Mm=RegExp("["+of+K+Re+Ht+"]"),Sm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Em=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ym=-1,Vt={};Vt[be]=Vt[dt]=Vt[me]=Vt[Ce]=Vt[Xe]=Vt[Ke]=Vt[Pe]=Vt[ut]=Vt[et]=!0,Vt[_e]=Vt[Fe]=Vt[Oe]=Vt[ke]=Vt[ge]=Vt[ft]=Vt[zt]=Vt[Lt]=Vt[F]=Vt[sn]=Vt[je]=Vt[Be]=Vt[I]=Vt[S]=Vt[fe]=!1;var Gt={};Gt[_e]=Gt[Fe]=Gt[Oe]=Gt[ge]=Gt[ke]=Gt[ft]=Gt[be]=Gt[dt]=Gt[me]=Gt[Ce]=Gt[Xe]=Gt[F]=Gt[sn]=Gt[je]=Gt[Be]=Gt[I]=Gt[S]=Gt[Y]=Gt[Ke]=Gt[Pe]=Gt[ut]=Gt[et]=!0,Gt[zt]=Gt[Lt]=Gt[fe]=!1;var Tm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Am={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},bm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Rm=parseFloat,Cm=parseInt,pf=typeof Vo=="object"&&Vo&&Vo.Object===Object&&Vo,Pm=typeof self=="object"&&self&&self.Object===Object&&self,fn=pf||Pm||Function("return this")(),ul=e&&!e.nodeType&&e,_r=ul&&!0&&s&&!s.nodeType&&s,mf=_r&&_r.exports===ul,fl=mf&&pf.process,qn=function(){try{var k=_r&&_r.require&&_r.require("util").types;return k||fl&&fl.binding&&fl.binding("util")}catch{}}(),_f=qn&&qn.isArrayBuffer,gf=qn&&qn.isDate,vf=qn&&qn.isMap,xf=qn&&qn.isRegExp,Mf=qn&&qn.isSet,Sf=qn&&qn.isTypedArray;function On(k,te,J){switch(J.length){case 0:return k.call(te);case 1:return k.call(te,J[0]);case 2:return k.call(te,J[0],J[1]);case 3:return k.call(te,J[0],J[1],J[2])}return k.apply(te,J)}function Lm(k,te,J,Le){for(var tt=-1,bt=k==null?0:k.length;++tt<bt;){var en=k[tt];te(Le,en,J(en),k)}return Le}function Yn(k,te){for(var J=-1,Le=k==null?0:k.length;++J<Le&&te(k[J],J,k)!==!1;);return k}function Im(k,te){for(var J=k==null?0:k.length;J--&&te(k[J],J,k)!==!1;);return k}function Ef(k,te){for(var J=-1,Le=k==null?0:k.length;++J<Le;)if(!te(k[J],J,k))return!1;return!0}function Zi(k,te){for(var J=-1,Le=k==null?0:k.length,tt=0,bt=[];++J<Le;){var en=k[J];te(en,J,k)&&(bt[tt++]=en)}return bt}function La(k,te){var J=k==null?0:k.length;return!!J&&Wr(k,te,0)>-1}function hl(k,te,J){for(var Le=-1,tt=k==null?0:k.length;++Le<tt;)if(J(te,k[Le]))return!0;return!1}function Wt(k,te){for(var J=-1,Le=k==null?0:k.length,tt=Array(Le);++J<Le;)tt[J]=te(k[J],J,k);return tt}function Ki(k,te){for(var J=-1,Le=te.length,tt=k.length;++J<Le;)k[tt+J]=te[J];return k}function dl(k,te,J,Le){var tt=-1,bt=k==null?0:k.length;for(Le&&bt&&(J=k[++tt]);++tt<bt;)J=te(J,k[tt],tt,k);return J}function Dm(k,te,J,Le){var tt=k==null?0:k.length;for(Le&&tt&&(J=k[--tt]);tt--;)J=te(J,k[tt],tt,k);return J}function pl(k,te){for(var J=-1,Le=k==null?0:k.length;++J<Le;)if(te(k[J],J,k))return!0;return!1}var Um=ml("length");function Nm(k){return k.split("")}function Fm(k){return k.match(ba)||[]}function yf(k,te,J){var Le;return J(k,function(tt,bt,en){if(te(tt,bt,en))return Le=bt,!1}),Le}function Ia(k,te,J,Le){for(var tt=k.length,bt=J+(Le?1:-1);Le?bt--:++bt<tt;)if(te(k[bt],bt,k))return bt;return-1}function Wr(k,te,J){return te===te?Zm(k,te,J):Ia(k,Tf,J)}function Om(k,te,J,Le){for(var tt=J-1,bt=k.length;++tt<bt;)if(Le(k[tt],te))return tt;return-1}function Tf(k){return k!==k}function Af(k,te){var J=k==null?0:k.length;return J?gl(k,te)/J:we}function ml(k){return function(te){return te==null?t:te[k]}}function _l(k){return function(te){return k==null?t:k[te]}}function wf(k,te,J,Le,tt){return tt(k,function(bt,en,Bt){J=Le?(Le=!1,bt):te(J,bt,en,Bt)}),J}function Bm(k,te){var J=k.length;for(k.sort(te);J--;)k[J]=k[J].value;return k}function gl(k,te){for(var J,Le=-1,tt=k.length;++Le<tt;){var bt=te(k[Le]);bt!==t&&(J=J===t?bt:J+bt)}return J}function vl(k,te){for(var J=-1,Le=Array(k);++J<k;)Le[J]=te(J);return Le}function zm(k,te){return Wt(te,function(J){return[J,k[J]]})}function bf(k){return k&&k.slice(0,Lf(k)+1).replace(si,"")}function Bn(k){return function(te){return k(te)}}function xl(k,te){return Wt(te,function(J){return k[J]})}function Gs(k,te){return k.has(te)}function Rf(k,te){for(var J=-1,Le=k.length;++J<Le&&Wr(te,k[J],0)>-1;);return J}function Cf(k,te){for(var J=k.length;J--&&Wr(te,k[J],0)>-1;);return J}function Gm(k,te){for(var J=k.length,Le=0;J--;)k[J]===te&&++Le;return Le}var Hm=_l(Tm),Vm=_l(Am);function km(k){return"\\"+bm[k]}function Wm(k,te){return k==null?t:k[te]}function Xr(k){return Mm.test(k)}function Xm(k){return Sm.test(k)}function qm(k){for(var te,J=[];!(te=k.next()).done;)J.push(te.value);return J}function Ml(k){var te=-1,J=Array(k.size);return k.forEach(function(Le,tt){J[++te]=[tt,Le]}),J}function Pf(k,te){return function(J){return k(te(J))}}function $i(k,te){for(var J=-1,Le=k.length,tt=0,bt=[];++J<Le;){var en=k[J];(en===te||en===p)&&(k[J]=p,bt[tt++]=J)}return bt}function Da(k){var te=-1,J=Array(k.size);return k.forEach(function(Le){J[++te]=Le}),J}function Ym(k){var te=-1,J=Array(k.size);return k.forEach(function(Le){J[++te]=[Le,Le]}),J}function Zm(k,te,J){for(var Le=J-1,tt=k.length;++Le<tt;)if(k[Le]===te)return Le;return-1}function Km(k,te,J){for(var Le=J+1;Le--;)if(k[Le]===te)return Le;return Le}function qr(k){return Xr(k)?Jm(k):Um(k)}function ai(k){return Xr(k)?Qm(k):Nm(k)}function Lf(k){for(var te=k.length;te--&&zs.test(k.charAt(te)););return te}var $m=_l(wm);function Jm(k){for(var te=cl.lastIndex=0;cl.test(k);)++te;return te}function Qm(k){return k.match(cl)||[]}function jm(k){return k.match(xm)||[]}var e_=function k(te){te=te==null?fn:Yr.defaults(fn.Object(),te,Yr.pick(fn,Em));var J=te.Array,Le=te.Date,tt=te.Error,bt=te.Function,en=te.Math,Bt=te.Object,Sl=te.RegExp,t_=te.String,Zn=te.TypeError,Ua=J.prototype,n_=bt.prototype,Zr=Bt.prototype,Na=te["__core-js_shared__"],Fa=n_.toString,Pt=Zr.hasOwnProperty,i_=0,If=function(){var n=/[^.]+$/.exec(Na&&Na.keys&&Na.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Oa=Zr.toString,r_=Fa.call(Bt),s_=fn._,a_=Sl("^"+Fa.call(Pt).replace(Hr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ba=mf?te.Buffer:t,Ji=te.Symbol,za=te.Uint8Array,Df=Ba?Ba.allocUnsafe:t,Ga=Pf(Bt.getPrototypeOf,Bt),Uf=Bt.create,Nf=Zr.propertyIsEnumerable,Ha=Ua.splice,Ff=Ji?Ji.isConcatSpreadable:t,Hs=Ji?Ji.iterator:t,gr=Ji?Ji.toStringTag:t,Va=function(){try{var n=Er(Bt,"defineProperty");return n({},"",{}),n}catch{}}(),o_=te.clearTimeout!==fn.clearTimeout&&te.clearTimeout,l_=Le&&Le.now!==fn.Date.now&&Le.now,c_=te.setTimeout!==fn.setTimeout&&te.setTimeout,ka=en.ceil,Wa=en.floor,El=Bt.getOwnPropertySymbols,u_=Ba?Ba.isBuffer:t,Of=te.isFinite,f_=Ua.join,h_=Pf(Bt.keys,Bt),tn=en.max,mn=en.min,d_=Le.now,p_=te.parseInt,Bf=en.random,m_=Ua.reverse,yl=Er(te,"DataView"),Vs=Er(te,"Map"),Tl=Er(te,"Promise"),Kr=Er(te,"Set"),ks=Er(te,"WeakMap"),Ws=Er(Bt,"create"),Xa=ks&&new ks,$r={},__=yr(yl),g_=yr(Vs),v_=yr(Tl),x_=yr(Kr),M_=yr(ks),qa=Ji?Ji.prototype:t,Xs=qa?qa.valueOf:t,zf=qa?qa.toString:t;function E(n){if(Zt(n)&&!it(n)&&!(n instanceof gt)){if(n instanceof Kn)return n;if(Pt.call(n,"__wrapped__"))return Gh(n)}return new Kn(n)}var Jr=function(){function n(){}return function(r){if(!Yt(r))return{};if(Uf)return Uf(r);n.prototype=r;var l=new n;return n.prototype=t,l}}();function Ya(){}function Kn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}E.templateSettings={escape:nt,evaluate:kt,interpolate:Qt,variable:"",imports:{_:E}},E.prototype=Ya.prototype,E.prototype.constructor=E,Kn.prototype=Jr(Ya.prototype),Kn.prototype.constructor=Kn;function gt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ne,this.__views__=[]}function S_(){var n=new gt(this.__wrapped__);return n.__actions__=Ln(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ln(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ln(this.__views__),n}function E_(){if(this.__filtered__){var n=new gt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function y_(){var n=this.__wrapped__.value(),r=this.__dir__,l=it(n),f=r<0,M=l?n.length:0,w=Ng(0,M,this.__views__),D=w.start,B=w.end,X=B-D,re=f?B:D-1,ae=this.__iteratees__,he=ae.length,ve=0,ze=mn(X,this.__takeCount__);if(!l||!f&&M==X&&ze==X)return ch(n,this.__actions__);var Ye=[];e:for(;X--&&ve<ze;){re+=r;for(var at=-1,Ze=n[re];++at<he;){var pt=ae[at],Mt=pt.iteratee,Hn=pt.type,Tn=Mt(Ze);if(Hn==ue)Ze=Tn;else if(!Tn){if(Hn==ie)continue e;break e}}Ye[ve++]=Ze}return Ye}gt.prototype=Jr(Ya.prototype),gt.prototype.constructor=gt;function vr(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function T_(){this.__data__=Ws?Ws(null):{},this.size=0}function A_(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function w_(n){var r=this.__data__;if(Ws){var l=r[n];return l===d?t:l}return Pt.call(r,n)?r[n]:t}function b_(n){var r=this.__data__;return Ws?r[n]!==t:Pt.call(r,n)}function R_(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Ws&&r===t?d:r,this}vr.prototype.clear=T_,vr.prototype.delete=A_,vr.prototype.get=w_,vr.prototype.has=b_,vr.prototype.set=R_;function bi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function C_(){this.__data__=[],this.size=0}function P_(n){var r=this.__data__,l=Za(r,n);if(l<0)return!1;var f=r.length-1;return l==f?r.pop():Ha.call(r,l,1),--this.size,!0}function L_(n){var r=this.__data__,l=Za(r,n);return l<0?t:r[l][1]}function I_(n){return Za(this.__data__,n)>-1}function D_(n,r){var l=this.__data__,f=Za(l,n);return f<0?(++this.size,l.push([n,r])):l[f][1]=r,this}bi.prototype.clear=C_,bi.prototype.delete=P_,bi.prototype.get=L_,bi.prototype.has=I_,bi.prototype.set=D_;function Ri(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function U_(){this.size=0,this.__data__={hash:new vr,map:new(Vs||bi),string:new vr}}function N_(n){var r=ao(this,n).delete(n);return this.size-=r?1:0,r}function F_(n){return ao(this,n).get(n)}function O_(n){return ao(this,n).has(n)}function B_(n,r){var l=ao(this,n),f=l.size;return l.set(n,r),this.size+=l.size==f?0:1,this}Ri.prototype.clear=U_,Ri.prototype.delete=N_,Ri.prototype.get=F_,Ri.prototype.has=O_,Ri.prototype.set=B_;function xr(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new Ri;++r<l;)this.add(n[r])}function z_(n){return this.__data__.set(n,d),this}function G_(n){return this.__data__.has(n)}xr.prototype.add=xr.prototype.push=z_,xr.prototype.has=G_;function oi(n){var r=this.__data__=new bi(n);this.size=r.size}function H_(){this.__data__=new bi,this.size=0}function V_(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function k_(n){return this.__data__.get(n)}function W_(n){return this.__data__.has(n)}function X_(n,r){var l=this.__data__;if(l instanceof bi){var f=l.__data__;if(!Vs||f.length<a-1)return f.push([n,r]),this.size=++l.size,this;l=this.__data__=new Ri(f)}return l.set(n,r),this.size=l.size,this}oi.prototype.clear=H_,oi.prototype.delete=V_,oi.prototype.get=k_,oi.prototype.has=W_,oi.prototype.set=X_;function Gf(n,r){var l=it(n),f=!l&&Tr(n),M=!l&&!f&&nr(n),w=!l&&!f&&!M&&ts(n),D=l||f||M||w,B=D?vl(n.length,t_):[],X=B.length;for(var re in n)(r||Pt.call(n,re))&&!(D&&(re=="length"||M&&(re=="offset"||re=="parent")||w&&(re=="buffer"||re=="byteLength"||re=="byteOffset")||Ii(re,X)))&&B.push(re);return B}function Hf(n){var r=n.length;return r?n[Nl(0,r-1)]:t}function q_(n,r){return oo(Ln(n),Mr(r,0,n.length))}function Y_(n){return oo(Ln(n))}function Al(n,r,l){(l!==t&&!li(n[r],l)||l===t&&!(r in n))&&Ci(n,r,l)}function qs(n,r,l){var f=n[r];(!(Pt.call(n,r)&&li(f,l))||l===t&&!(r in n))&&Ci(n,r,l)}function Za(n,r){for(var l=n.length;l--;)if(li(n[l][0],r))return l;return-1}function Z_(n,r,l,f){return Qi(n,function(M,w,D){r(f,M,l(M),D)}),f}function Vf(n,r){return n&&vi(r,ln(r),n)}function K_(n,r){return n&&vi(r,Dn(r),n)}function Ci(n,r,l){r=="__proto__"&&Va?Va(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function wl(n,r){for(var l=-1,f=r.length,M=J(f),w=n==null;++l<f;)M[l]=w?t:ac(n,r[l]);return M}function Mr(n,r,l){return n===n&&(l!==t&&(n=n<=l?n:l),r!==t&&(n=n>=r?n:r)),n}function $n(n,r,l,f,M,w){var D,B=r&_,X=r&g,re=r&x;if(l&&(D=M?l(n,f,M,w):l(n)),D!==t)return D;if(!Yt(n))return n;var ae=it(n);if(ae){if(D=Og(n),!B)return Ln(n,D)}else{var he=_n(n),ve=he==Lt||he==ht;if(nr(n))return hh(n,B);if(he==je||he==_e||ve&&!M){if(D=X||ve?{}:Lh(n),!B)return X?wg(n,K_(D,n)):Ag(n,Vf(D,n))}else{if(!Gt[he])return M?n:{};D=Bg(n,he,B)}}w||(w=new oi);var ze=w.get(n);if(ze)return ze;w.set(n,D),ad(n)?n.forEach(function(Ze){D.add($n(Ze,r,l,Ze,n,w))}):rd(n)&&n.forEach(function(Ze,pt){D.set(pt,$n(Ze,r,l,pt,n,w))});var Ye=re?X?ql:Xl:X?Dn:ln,at=ae?t:Ye(n);return Yn(at||n,function(Ze,pt){at&&(pt=Ze,Ze=n[pt]),qs(D,pt,$n(Ze,r,l,pt,n,w))}),D}function $_(n){var r=ln(n);return function(l){return kf(l,n,r)}}function kf(n,r,l){var f=l.length;if(n==null)return!f;for(n=Bt(n);f--;){var M=l[f],w=r[M],D=n[M];if(D===t&&!(M in n)||!w(D))return!1}return!0}function Wf(n,r,l){if(typeof n!="function")throw new Zn(c);return js(function(){n.apply(t,l)},r)}function Ys(n,r,l,f){var M=-1,w=La,D=!0,B=n.length,X=[],re=r.length;if(!B)return X;l&&(r=Wt(r,Bn(l))),f?(w=hl,D=!1):r.length>=a&&(w=Gs,D=!1,r=new xr(r));e:for(;++M<B;){var ae=n[M],he=l==null?ae:l(ae);if(ae=f||ae!==0?ae:0,D&&he===he){for(var ve=re;ve--;)if(r[ve]===he)continue e;X.push(ae)}else w(r,he,f)||X.push(ae)}return X}var Qi=gh(gi),Xf=gh(Rl,!0);function J_(n,r){var l=!0;return Qi(n,function(f,M,w){return l=!!r(f,M,w),l}),l}function Ka(n,r,l){for(var f=-1,M=n.length;++f<M;){var w=n[f],D=r(w);if(D!=null&&(B===t?D===D&&!Gn(D):l(D,B)))var B=D,X=w}return X}function Q_(n,r,l,f){var M=n.length;for(l=rt(l),l<0&&(l=-l>M?0:M+l),f=f===t||f>M?M:rt(f),f<0&&(f+=M),f=l>f?0:ld(f);l<f;)n[l++]=r;return n}function qf(n,r){var l=[];return Qi(n,function(f,M,w){r(f,M,w)&&l.push(f)}),l}function hn(n,r,l,f,M){var w=-1,D=n.length;for(l||(l=Gg),M||(M=[]);++w<D;){var B=n[w];r>0&&l(B)?r>1?hn(B,r-1,l,f,M):Ki(M,B):f||(M[M.length]=B)}return M}var bl=vh(),Yf=vh(!0);function gi(n,r){return n&&bl(n,r,ln)}function Rl(n,r){return n&&Yf(n,r,ln)}function $a(n,r){return Zi(r,function(l){return Di(n[l])})}function Sr(n,r){r=er(r,n);for(var l=0,f=r.length;n!=null&&l<f;)n=n[xi(r[l++])];return l&&l==f?n:t}function Zf(n,r,l){var f=r(n);return it(n)?f:Ki(f,l(n))}function En(n){return n==null?n===t?ce:_t:gr&&gr in Bt(n)?Ug(n):Yg(n)}function Cl(n,r){return n>r}function j_(n,r){return n!=null&&Pt.call(n,r)}function eg(n,r){return n!=null&&r in Bt(n)}function tg(n,r,l){return n>=mn(r,l)&&n<tn(r,l)}function Pl(n,r,l){for(var f=l?hl:La,M=n[0].length,w=n.length,D=w,B=J(w),X=1/0,re=[];D--;){var ae=n[D];D&&r&&(ae=Wt(ae,Bn(r))),X=mn(ae.length,X),B[D]=!l&&(r||M>=120&&ae.length>=120)?new xr(D&&ae):t}ae=n[0];var he=-1,ve=B[0];e:for(;++he<M&&re.length<X;){var ze=ae[he],Ye=r?r(ze):ze;if(ze=l||ze!==0?ze:0,!(ve?Gs(ve,Ye):f(re,Ye,l))){for(D=w;--D;){var at=B[D];if(!(at?Gs(at,Ye):f(n[D],Ye,l)))continue e}ve&&ve.push(Ye),re.push(ze)}}return re}function ng(n,r,l,f){return gi(n,function(M,w,D){r(f,l(M),w,D)}),f}function Zs(n,r,l){r=er(r,n),n=Nh(n,r);var f=n==null?n:n[xi(Qn(r))];return f==null?t:On(f,n,l)}function Kf(n){return Zt(n)&&En(n)==_e}function ig(n){return Zt(n)&&En(n)==Oe}function rg(n){return Zt(n)&&En(n)==ft}function Ks(n,r,l,f,M){return n===r?!0:n==null||r==null||!Zt(n)&&!Zt(r)?n!==n&&r!==r:sg(n,r,l,f,Ks,M)}function sg(n,r,l,f,M,w){var D=it(n),B=it(r),X=D?Fe:_n(n),re=B?Fe:_n(r);X=X==_e?je:X,re=re==_e?je:re;var ae=X==je,he=re==je,ve=X==re;if(ve&&nr(n)){if(!nr(r))return!1;D=!0,ae=!1}if(ve&&!ae)return w||(w=new oi),D||ts(n)?Rh(n,r,l,f,M,w):Ig(n,r,X,l,f,M,w);if(!(l&y)){var ze=ae&&Pt.call(n,"__wrapped__"),Ye=he&&Pt.call(r,"__wrapped__");if(ze||Ye){var at=ze?n.value():n,Ze=Ye?r.value():r;return w||(w=new oi),M(at,Ze,l,f,w)}}return ve?(w||(w=new oi),Dg(n,r,l,f,M,w)):!1}function ag(n){return Zt(n)&&_n(n)==F}function Ll(n,r,l,f){var M=l.length,w=M,D=!f;if(n==null)return!w;for(n=Bt(n);M--;){var B=l[M];if(D&&B[2]?B[1]!==n[B[0]]:!(B[0]in n))return!1}for(;++M<w;){B=l[M];var X=B[0],re=n[X],ae=B[1];if(D&&B[2]){if(re===t&&!(X in n))return!1}else{var he=new oi;if(f)var ve=f(re,ae,X,n,r,he);if(!(ve===t?Ks(ae,re,y|C,f,he):ve))return!1}}return!0}function $f(n){if(!Yt(n)||Vg(n))return!1;var r=Di(n)?a_:al;return r.test(yr(n))}function og(n){return Zt(n)&&En(n)==Be}function lg(n){return Zt(n)&&_n(n)==I}function cg(n){return Zt(n)&&po(n.length)&&!!Vt[En(n)]}function Jf(n){return typeof n=="function"?n:n==null?Un:typeof n=="object"?it(n)?eh(n[0],n[1]):jf(n):xd(n)}function Il(n){if(!Qs(n))return h_(n);var r=[];for(var l in Bt(n))Pt.call(n,l)&&l!="constructor"&&r.push(l);return r}function ug(n){if(!Yt(n))return qg(n);var r=Qs(n),l=[];for(var f in n)f=="constructor"&&(r||!Pt.call(n,f))||l.push(f);return l}function Dl(n,r){return n<r}function Qf(n,r){var l=-1,f=In(n)?J(n.length):[];return Qi(n,function(M,w,D){f[++l]=r(M,w,D)}),f}function jf(n){var r=Zl(n);return r.length==1&&r[0][2]?Dh(r[0][0],r[0][1]):function(l){return l===n||Ll(l,n,r)}}function eh(n,r){return $l(n)&&Ih(r)?Dh(xi(n),r):function(l){var f=ac(l,n);return f===t&&f===r?oc(l,n):Ks(r,f,y|C)}}function Ja(n,r,l,f,M){n!==r&&bl(r,function(w,D){if(M||(M=new oi),Yt(w))fg(n,r,D,l,Ja,f,M);else{var B=f?f(Ql(n,D),w,D+"",n,r,M):t;B===t&&(B=w),Al(n,D,B)}},Dn)}function fg(n,r,l,f,M,w,D){var B=Ql(n,l),X=Ql(r,l),re=D.get(X);if(re){Al(n,l,re);return}var ae=w?w(B,X,l+"",n,r,D):t,he=ae===t;if(he){var ve=it(X),ze=!ve&&nr(X),Ye=!ve&&!ze&&ts(X);ae=X,ve||ze||Ye?it(B)?ae=B:Kt(B)?ae=Ln(B):ze?(he=!1,ae=hh(X,!0)):Ye?(he=!1,ae=dh(X,!0)):ae=[]:ea(X)||Tr(X)?(ae=B,Tr(B)?ae=cd(B):(!Yt(B)||Di(B))&&(ae=Lh(X))):he=!1}he&&(D.set(X,ae),M(ae,X,f,w,D),D.delete(X)),Al(n,l,ae)}function th(n,r){var l=n.length;if(l)return r+=r<0?l:0,Ii(r,l)?n[r]:t}function nh(n,r,l){r.length?r=Wt(r,function(w){return it(w)?function(D){return Sr(D,w.length===1?w[0]:w)}:w}):r=[Un];var f=-1;r=Wt(r,Bn(qe()));var M=Qf(n,function(w,D,B){var X=Wt(r,function(re){return re(w)});return{criteria:X,index:++f,value:w}});return Bm(M,function(w,D){return Tg(w,D,l)})}function hg(n,r){return ih(n,r,function(l,f){return oc(n,f)})}function ih(n,r,l){for(var f=-1,M=r.length,w={};++f<M;){var D=r[f],B=Sr(n,D);l(B,D)&&$s(w,er(D,n),B)}return w}function dg(n){return function(r){return Sr(r,n)}}function Ul(n,r,l,f){var M=f?Om:Wr,w=-1,D=r.length,B=n;for(n===r&&(r=Ln(r)),l&&(B=Wt(n,Bn(l)));++w<D;)for(var X=0,re=r[w],ae=l?l(re):re;(X=M(B,ae,X,f))>-1;)B!==n&&Ha.call(B,X,1),Ha.call(n,X,1);return n}function rh(n,r){for(var l=n?r.length:0,f=l-1;l--;){var M=r[l];if(l==f||M!==w){var w=M;Ii(M)?Ha.call(n,M,1):Bl(n,M)}}return n}function Nl(n,r){return n+Wa(Bf()*(r-n+1))}function pg(n,r,l,f){for(var M=-1,w=tn(ka((r-n)/(l||1)),0),D=J(w);w--;)D[f?w:++M]=n,n+=l;return D}function Fl(n,r){var l="";if(!n||r<1||r>j)return l;do r%2&&(l+=n),r=Wa(r/2),r&&(n+=n);while(r);return l}function ct(n,r){return jl(Uh(n,r,Un),n+"")}function mg(n){return Hf(ns(n))}function _g(n,r){var l=ns(n);return oo(l,Mr(r,0,l.length))}function $s(n,r,l,f){if(!Yt(n))return n;r=er(r,n);for(var M=-1,w=r.length,D=w-1,B=n;B!=null&&++M<w;){var X=xi(r[M]),re=l;if(X==="__proto__"||X==="constructor"||X==="prototype")return n;if(M!=D){var ae=B[X];re=f?f(ae,X,B):t,re===t&&(re=Yt(ae)?ae:Ii(r[M+1])?[]:{})}qs(B,X,re),B=B[X]}return n}var sh=Xa?function(n,r){return Xa.set(n,r),n}:Un,gg=Va?function(n,r){return Va(n,"toString",{configurable:!0,enumerable:!1,value:cc(r),writable:!0})}:Un;function vg(n){return oo(ns(n))}function Jn(n,r,l){var f=-1,M=n.length;r<0&&(r=-r>M?0:M+r),l=l>M?M:l,l<0&&(l+=M),M=r>l?0:l-r>>>0,r>>>=0;for(var w=J(M);++f<M;)w[f]=n[f+r];return w}function xg(n,r){var l;return Qi(n,function(f,M,w){return l=r(f,M,w),!l}),!!l}function Qa(n,r,l){var f=0,M=n==null?f:n.length;if(typeof r=="number"&&r===r&&M<=Ct){for(;f<M;){var w=f+M>>>1,D=n[w];D!==null&&!Gn(D)&&(l?D<=r:D<r)?f=w+1:M=w}return M}return Ol(n,r,Un,l)}function Ol(n,r,l,f){var M=0,w=n==null?0:n.length;if(w===0)return 0;r=l(r);for(var D=r!==r,B=r===null,X=Gn(r),re=r===t;M<w;){var ae=Wa((M+w)/2),he=l(n[ae]),ve=he!==t,ze=he===null,Ye=he===he,at=Gn(he);if(D)var Ze=f||Ye;else re?Ze=Ye&&(f||ve):B?Ze=Ye&&ve&&(f||!ze):X?Ze=Ye&&ve&&!ze&&(f||!at):ze||at?Ze=!1:Ze=f?he<=r:he<r;Ze?M=ae+1:w=ae}return mn(w,lt)}function ah(n,r){for(var l=-1,f=n.length,M=0,w=[];++l<f;){var D=n[l],B=r?r(D):D;if(!l||!li(B,X)){var X=B;w[M++]=D===0?0:D}}return w}function oh(n){return typeof n=="number"?n:Gn(n)?we:+n}function zn(n){if(typeof n=="string")return n;if(it(n))return Wt(n,zn)+"";if(Gn(n))return zf?zf.call(n):"";var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function ji(n,r,l){var f=-1,M=La,w=n.length,D=!0,B=[],X=B;if(l)D=!1,M=hl;else if(w>=a){var re=r?null:Pg(n);if(re)return Da(re);D=!1,M=Gs,X=new xr}else X=r?[]:B;e:for(;++f<w;){var ae=n[f],he=r?r(ae):ae;if(ae=l||ae!==0?ae:0,D&&he===he){for(var ve=X.length;ve--;)if(X[ve]===he)continue e;r&&X.push(he),B.push(ae)}else M(X,he,l)||(X!==B&&X.push(he),B.push(ae))}return B}function Bl(n,r){return r=er(r,n),n=Nh(n,r),n==null||delete n[xi(Qn(r))]}function lh(n,r,l,f){return $s(n,r,l(Sr(n,r)),f)}function ja(n,r,l,f){for(var M=n.length,w=f?M:-1;(f?w--:++w<M)&&r(n[w],w,n););return l?Jn(n,f?0:w,f?w+1:M):Jn(n,f?w+1:0,f?M:w)}function ch(n,r){var l=n;return l instanceof gt&&(l=l.value()),dl(r,function(f,M){return M.func.apply(M.thisArg,Ki([f],M.args))},l)}function zl(n,r,l){var f=n.length;if(f<2)return f?ji(n[0]):[];for(var M=-1,w=J(f);++M<f;)for(var D=n[M],B=-1;++B<f;)B!=M&&(w[M]=Ys(w[M]||D,n[B],r,l));return ji(hn(w,1),r,l)}function uh(n,r,l){for(var f=-1,M=n.length,w=r.length,D={};++f<M;){var B=f<w?r[f]:t;l(D,n[f],B)}return D}function Gl(n){return Kt(n)?n:[]}function Hl(n){return typeof n=="function"?n:Un}function er(n,r){return it(n)?n:$l(n,r)?[n]:zh(Rt(n))}var Mg=ct;function tr(n,r,l){var f=n.length;return l=l===t?f:l,!r&&l>=f?n:Jn(n,r,l)}var fh=o_||function(n){return fn.clearTimeout(n)};function hh(n,r){if(r)return n.slice();var l=n.length,f=Df?Df(l):new n.constructor(l);return n.copy(f),f}function Vl(n){var r=new n.constructor(n.byteLength);return new za(r).set(new za(n)),r}function Sg(n,r){var l=r?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Eg(n){var r=new n.constructor(n.source,Pa.exec(n));return r.lastIndex=n.lastIndex,r}function yg(n){return Xs?Bt(Xs.call(n)):{}}function dh(n,r){var l=r?Vl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function ph(n,r){if(n!==r){var l=n!==t,f=n===null,M=n===n,w=Gn(n),D=r!==t,B=r===null,X=r===r,re=Gn(r);if(!B&&!re&&!w&&n>r||w&&D&&X&&!B&&!re||f&&D&&X||!l&&X||!M)return 1;if(!f&&!w&&!re&&n<r||re&&l&&M&&!f&&!w||B&&l&&M||!D&&M||!X)return-1}return 0}function Tg(n,r,l){for(var f=-1,M=n.criteria,w=r.criteria,D=M.length,B=l.length;++f<D;){var X=ph(M[f],w[f]);if(X){if(f>=B)return X;var re=l[f];return X*(re=="desc"?-1:1)}}return n.index-r.index}function mh(n,r,l,f){for(var M=-1,w=n.length,D=l.length,B=-1,X=r.length,re=tn(w-D,0),ae=J(X+re),he=!f;++B<X;)ae[B]=r[B];for(;++M<D;)(he||M<w)&&(ae[l[M]]=n[M]);for(;re--;)ae[B++]=n[M++];return ae}function _h(n,r,l,f){for(var M=-1,w=n.length,D=-1,B=l.length,X=-1,re=r.length,ae=tn(w-B,0),he=J(ae+re),ve=!f;++M<ae;)he[M]=n[M];for(var ze=M;++X<re;)he[ze+X]=r[X];for(;++D<B;)(ve||M<w)&&(he[ze+l[D]]=n[M++]);return he}function Ln(n,r){var l=-1,f=n.length;for(r||(r=J(f));++l<f;)r[l]=n[l];return r}function vi(n,r,l,f){var M=!l;l||(l={});for(var w=-1,D=r.length;++w<D;){var B=r[w],X=f?f(l[B],n[B],B,l,n):t;X===t&&(X=n[B]),M?Ci(l,B,X):qs(l,B,X)}return l}function Ag(n,r){return vi(n,Kl(n),r)}function wg(n,r){return vi(n,Ch(n),r)}function eo(n,r){return function(l,f){var M=it(l)?Lm:Z_,w=r?r():{};return M(l,n,qe(f,2),w)}}function Qr(n){return ct(function(r,l){var f=-1,M=l.length,w=M>1?l[M-1]:t,D=M>2?l[2]:t;for(w=n.length>3&&typeof w=="function"?(M--,w):t,D&&yn(l[0],l[1],D)&&(w=M<3?t:w,M=1),r=Bt(r);++f<M;){var B=l[f];B&&n(r,B,f,w)}return r})}function gh(n,r){return function(l,f){if(l==null)return l;if(!In(l))return n(l,f);for(var M=l.length,w=r?M:-1,D=Bt(l);(r?w--:++w<M)&&f(D[w],w,D)!==!1;);return l}}function vh(n){return function(r,l,f){for(var M=-1,w=Bt(r),D=f(r),B=D.length;B--;){var X=D[n?B:++M];if(l(w[X],X,w)===!1)break}return r}}function bg(n,r,l){var f=r&v,M=Js(n);function w(){var D=this&&this!==fn&&this instanceof w?M:n;return D.apply(f?l:this,arguments)}return w}function xh(n){return function(r){r=Rt(r);var l=Xr(r)?ai(r):t,f=l?l[0]:r.charAt(0),M=l?tr(l,1).join(""):r.slice(1);return f[n]()+M}}function jr(n){return function(r){return dl(gd(_d(r).replace(gm,"")),n,"")}}function Js(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Jr(n.prototype),f=n.apply(l,r);return Yt(f)?f:l}}function Rg(n,r,l){var f=Js(n);function M(){for(var w=arguments.length,D=J(w),B=w,X=es(M);B--;)D[B]=arguments[B];var re=w<3&&D[0]!==X&&D[w-1]!==X?[]:$i(D,X);if(w-=re.length,w<l)return Th(n,r,to,M.placeholder,t,D,re,t,t,l-w);var ae=this&&this!==fn&&this instanceof M?f:n;return On(ae,this,D)}return M}function Mh(n){return function(r,l,f){var M=Bt(r);if(!In(r)){var w=qe(l,3);r=ln(r),l=function(B){return w(M[B],B,M)}}var D=n(r,l,f);return D>-1?M[w?r[D]:D]:t}}function Sh(n){return Li(function(r){var l=r.length,f=l,M=Kn.prototype.thru;for(n&&r.reverse();f--;){var w=r[f];if(typeof w!="function")throw new Zn(c);if(M&&!D&&so(w)=="wrapper")var D=new Kn([],!0)}for(f=D?f:l;++f<l;){w=r[f];var B=so(w),X=B=="wrapper"?Yl(w):t;X&&Jl(X[0])&&X[1]==(U|L|G|H)&&!X[4].length&&X[9]==1?D=D[so(X[0])].apply(D,X[3]):D=w.length==1&&Jl(w)?D[B]():D.thru(w)}return function(){var re=arguments,ae=re[0];if(D&&re.length==1&&it(ae))return D.plant(ae).value();for(var he=0,ve=l?r[he].apply(this,re):ae;++he<l;)ve=r[he].call(this,ve);return ve}})}function to(n,r,l,f,M,w,D,B,X,re){var ae=r&U,he=r&v,ve=r&m,ze=r&(L|b),Ye=r&R,at=ve?t:Js(n);function Ze(){for(var pt=arguments.length,Mt=J(pt),Hn=pt;Hn--;)Mt[Hn]=arguments[Hn];if(ze)var Tn=es(Ze),Vn=Gm(Mt,Tn);if(f&&(Mt=mh(Mt,f,M,ze)),w&&(Mt=_h(Mt,w,D,ze)),pt-=Vn,ze&&pt<re){var $t=$i(Mt,Tn);return Th(n,r,to,Ze.placeholder,l,Mt,$t,B,X,re-pt)}var ci=he?l:this,Ni=ve?ci[n]:n;return pt=Mt.length,B?Mt=Zg(Mt,B):Ye&&pt>1&&Mt.reverse(),ae&&X<pt&&(Mt.length=X),this&&this!==fn&&this instanceof Ze&&(Ni=at||Js(Ni)),Ni.apply(ci,Mt)}return Ze}function Eh(n,r){return function(l,f){return ng(l,n,r(f),{})}}function no(n,r){return function(l,f){var M;if(l===t&&f===t)return r;if(l!==t&&(M=l),f!==t){if(M===t)return f;typeof l=="string"||typeof f=="string"?(l=zn(l),f=zn(f)):(l=oh(l),f=oh(f)),M=n(l,f)}return M}}function kl(n){return Li(function(r){return r=Wt(r,Bn(qe())),ct(function(l){var f=this;return n(r,function(M){return On(M,f,l)})})})}function io(n,r){r=r===t?" ":zn(r);var l=r.length;if(l<2)return l?Fl(r,n):r;var f=Fl(r,ka(n/qr(r)));return Xr(r)?tr(ai(f),0,n).join(""):f.slice(0,n)}function Cg(n,r,l,f){var M=r&v,w=Js(n);function D(){for(var B=-1,X=arguments.length,re=-1,ae=f.length,he=J(ae+X),ve=this&&this!==fn&&this instanceof D?w:n;++re<ae;)he[re]=f[re];for(;X--;)he[re++]=arguments[++B];return On(ve,M?l:this,he)}return D}function yh(n){return function(r,l,f){return f&&typeof f!="number"&&yn(r,l,f)&&(l=f=t),r=Ui(r),l===t?(l=r,r=0):l=Ui(l),f=f===t?r<l?1:-1:Ui(f),pg(r,l,f,n)}}function ro(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=jn(r),l=jn(l)),n(r,l)}}function Th(n,r,l,f,M,w,D,B,X,re){var ae=r&L,he=ae?D:t,ve=ae?t:D,ze=ae?w:t,Ye=ae?t:w;r|=ae?G:N,r&=~(ae?N:G),r&P||(r&=-4);var at=[n,r,M,ze,he,Ye,ve,B,X,re],Ze=l.apply(t,at);return Jl(n)&&Fh(Ze,at),Ze.placeholder=f,Oh(Ze,n,r)}function Wl(n){var r=en[n];return function(l,f){if(l=jn(l),f=f==null?0:mn(rt(f),292),f&&Of(l)){var M=(Rt(l)+"e").split("e"),w=r(M[0]+"e"+(+M[1]+f));return M=(Rt(w)+"e").split("e"),+(M[0]+"e"+(+M[1]-f))}return r(l)}}var Pg=Kr&&1/Da(new Kr([,-0]))[1]==de?function(n){return new Kr(n)}:hc;function Ah(n){return function(r){var l=_n(r);return l==F?Ml(r):l==I?Ym(r):zm(r,n(r))}}function Pi(n,r,l,f,M,w,D,B){var X=r&m;if(!X&&typeof n!="function")throw new Zn(c);var re=f?f.length:0;if(re||(r&=-97,f=M=t),D=D===t?D:tn(rt(D),0),B=B===t?B:rt(B),re-=M?M.length:0,r&N){var ae=f,he=M;f=M=t}var ve=X?t:Yl(n),ze=[n,r,l,f,M,ae,he,w,D,B];if(ve&&Xg(ze,ve),n=ze[0],r=ze[1],l=ze[2],f=ze[3],M=ze[4],B=ze[9]=ze[9]===t?X?0:n.length:tn(ze[9]-re,0),!B&&r&(L|b)&&(r&=-25),!r||r==v)var Ye=bg(n,r,l);else r==L||r==b?Ye=Rg(n,r,B):(r==G||r==(v|G))&&!M.length?Ye=Cg(n,r,l,f):Ye=to.apply(t,ze);var at=ve?sh:Fh;return Oh(at(Ye,ze),n,r)}function wh(n,r,l,f){return n===t||li(n,Zr[l])&&!Pt.call(f,l)?r:n}function bh(n,r,l,f,M,w){return Yt(n)&&Yt(r)&&(w.set(r,n),Ja(n,r,t,bh,w),w.delete(r)),n}function Lg(n){return ea(n)?t:n}function Rh(n,r,l,f,M,w){var D=l&y,B=n.length,X=r.length;if(B!=X&&!(D&&X>B))return!1;var re=w.get(n),ae=w.get(r);if(re&&ae)return re==r&&ae==n;var he=-1,ve=!0,ze=l&C?new xr:t;for(w.set(n,r),w.set(r,n);++he<B;){var Ye=n[he],at=r[he];if(f)var Ze=D?f(at,Ye,he,r,n,w):f(Ye,at,he,n,r,w);if(Ze!==t){if(Ze)continue;ve=!1;break}if(ze){if(!pl(r,function(pt,Mt){if(!Gs(ze,Mt)&&(Ye===pt||M(Ye,pt,l,f,w)))return ze.push(Mt)})){ve=!1;break}}else if(!(Ye===at||M(Ye,at,l,f,w))){ve=!1;break}}return w.delete(n),w.delete(r),ve}function Ig(n,r,l,f,M,w,D){switch(l){case ge:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Oe:return!(n.byteLength!=r.byteLength||!w(new za(n),new za(r)));case ke:case ft:case sn:return li(+n,+r);case zt:return n.name==r.name&&n.message==r.message;case Be:case S:return n==r+"";case F:var B=Ml;case I:var X=f&y;if(B||(B=Da),n.size!=r.size&&!X)return!1;var re=D.get(n);if(re)return re==r;f|=C,D.set(n,r);var ae=Rh(B(n),B(r),f,M,w,D);return D.delete(n),ae;case Y:if(Xs)return Xs.call(n)==Xs.call(r)}return!1}function Dg(n,r,l,f,M,w){var D=l&y,B=Xl(n),X=B.length,re=Xl(r),ae=re.length;if(X!=ae&&!D)return!1;for(var he=X;he--;){var ve=B[he];if(!(D?ve in r:Pt.call(r,ve)))return!1}var ze=w.get(n),Ye=w.get(r);if(ze&&Ye)return ze==r&&Ye==n;var at=!0;w.set(n,r),w.set(r,n);for(var Ze=D;++he<X;){ve=B[he];var pt=n[ve],Mt=r[ve];if(f)var Hn=D?f(Mt,pt,ve,r,n,w):f(pt,Mt,ve,n,r,w);if(!(Hn===t?pt===Mt||M(pt,Mt,l,f,w):Hn)){at=!1;break}Ze||(Ze=ve=="constructor")}if(at&&!Ze){var Tn=n.constructor,Vn=r.constructor;Tn!=Vn&&"constructor"in n&&"constructor"in r&&!(typeof Tn=="function"&&Tn instanceof Tn&&typeof Vn=="function"&&Vn instanceof Vn)&&(at=!1)}return w.delete(n),w.delete(r),at}function Li(n){return jl(Uh(n,t,kh),n+"")}function Xl(n){return Zf(n,ln,Kl)}function ql(n){return Zf(n,Dn,Ch)}var Yl=Xa?function(n){return Xa.get(n)}:hc;function so(n){for(var r=n.name+"",l=$r[r],f=Pt.call($r,r)?l.length:0;f--;){var M=l[f],w=M.func;if(w==null||w==n)return M.name}return r}function es(n){var r=Pt.call(E,"placeholder")?E:n;return r.placeholder}function qe(){var n=E.iteratee||uc;return n=n===uc?Jf:n,arguments.length?n(arguments[0],arguments[1]):n}function ao(n,r){var l=n.__data__;return Hg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function Zl(n){for(var r=ln(n),l=r.length;l--;){var f=r[l],M=n[f];r[l]=[f,M,Ih(M)]}return r}function Er(n,r){var l=Wm(n,r);return $f(l)?l:t}function Ug(n){var r=Pt.call(n,gr),l=n[gr];try{n[gr]=t;var f=!0}catch{}var M=Oa.call(n);return f&&(r?n[gr]=l:delete n[gr]),M}var Kl=El?function(n){return n==null?[]:(n=Bt(n),Zi(El(n),function(r){return Nf.call(n,r)}))}:dc,Ch=El?function(n){for(var r=[];n;)Ki(r,Kl(n)),n=Ga(n);return r}:dc,_n=En;(yl&&_n(new yl(new ArrayBuffer(1)))!=ge||Vs&&_n(new Vs)!=F||Tl&&_n(Tl.resolve())!=He||Kr&&_n(new Kr)!=I||ks&&_n(new ks)!=fe)&&(_n=function(n){var r=En(n),l=r==je?n.constructor:t,f=l?yr(l):"";if(f)switch(f){case __:return ge;case g_:return F;case v_:return He;case x_:return I;case M_:return fe}return r});function Ng(n,r,l){for(var f=-1,M=l.length;++f<M;){var w=l[f],D=w.size;switch(w.type){case"drop":n+=D;break;case"dropRight":r-=D;break;case"take":r=mn(r,n+D);break;case"takeRight":n=tn(n,r-D);break}}return{start:n,end:r}}function Fg(n){var r=n.match(wa);return r?r[1].split(Vr):[]}function Ph(n,r,l){r=er(r,n);for(var f=-1,M=r.length,w=!1;++f<M;){var D=xi(r[f]);if(!(w=n!=null&&l(n,D)))break;n=n[D]}return w||++f!=M?w:(M=n==null?0:n.length,!!M&&po(M)&&Ii(D,M)&&(it(n)||Tr(n)))}function Og(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&Pt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Lh(n){return typeof n.constructor=="function"&&!Qs(n)?Jr(Ga(n)):{}}function Bg(n,r,l){var f=n.constructor;switch(r){case Oe:return Vl(n);case ke:case ft:return new f(+n);case ge:return Sg(n,l);case be:case dt:case me:case Ce:case Xe:case Ke:case Pe:case ut:case et:return dh(n,l);case F:return new f;case sn:case S:return new f(n);case Be:return Eg(n);case I:return new f;case Y:return yg(n)}}function zg(n,r){var l=r.length;if(!l)return n;var f=l-1;return r[f]=(l>1?"& ":"")+r[f],r=r.join(l>2?", ":" "),n.replace(Aa,`{
/* [wrapped with `+r+`] */
`)}function Gg(n){return it(n)||Tr(n)||!!(Ff&&n&&n[Ff])}function Ii(n,r){var l=typeof n;return r=r??j,!!r&&(l=="number"||l!="symbol"&&ll.test(n))&&n>-1&&n%1==0&&n<r}function yn(n,r,l){if(!Yt(l))return!1;var f=typeof r;return(f=="number"?In(l)&&Ii(r,l.length):f=="string"&&r in l)?li(l[r],n):!1}function $l(n,r){if(it(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Gn(n)?!0:Fn.test(n)||!wt.test(n)||r!=null&&n in Bt(r)}function Hg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Jl(n){var r=so(n),l=E[r];if(typeof l!="function"||!(r in gt.prototype))return!1;if(n===l)return!0;var f=Yl(l);return!!f&&n===f[0]}function Vg(n){return!!If&&If in n}var kg=Na?Di:pc;function Qs(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||Zr;return n===l}function Ih(n){return n===n&&!Yt(n)}function Dh(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==t||n in Bt(l))}}function Wg(n){var r=fo(n,function(f){return l.size===h&&l.clear(),f}),l=r.cache;return r}function Xg(n,r){var l=n[1],f=r[1],M=l|f,w=M<(v|m|U),D=f==U&&l==L||f==U&&l==H&&n[7].length<=r[8]||f==(U|H)&&r[7].length<=r[8]&&l==L;if(!(w||D))return n;f&v&&(n[2]=r[2],M|=l&v?0:P);var B=r[3];if(B){var X=n[3];n[3]=X?mh(X,B,r[4]):B,n[4]=X?$i(n[3],p):r[4]}return B=r[5],B&&(X=n[5],n[5]=X?_h(X,B,r[6]):B,n[6]=X?$i(n[5],p):r[6]),B=r[7],B&&(n[7]=B),f&U&&(n[8]=n[8]==null?r[8]:mn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=M,n}function qg(n){var r=[];if(n!=null)for(var l in Bt(n))r.push(l);return r}function Yg(n){return Oa.call(n)}function Uh(n,r,l){return r=tn(r===t?n.length-1:r,0),function(){for(var f=arguments,M=-1,w=tn(f.length-r,0),D=J(w);++M<w;)D[M]=f[r+M];M=-1;for(var B=J(r+1);++M<r;)B[M]=f[M];return B[r]=l(D),On(n,this,B)}}function Nh(n,r){return r.length<2?n:Sr(n,Jn(r,0,-1))}function Zg(n,r){for(var l=n.length,f=mn(r.length,l),M=Ln(n);f--;){var w=r[f];n[f]=Ii(w,l)?M[w]:t}return n}function Ql(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Fh=Bh(sh),js=c_||function(n,r){return fn.setTimeout(n,r)},jl=Bh(gg);function Oh(n,r,l){var f=r+"";return jl(n,zg(f,Kg(Fg(f),l)))}function Bh(n){var r=0,l=0;return function(){var f=d_(),M=$-(f-l);if(l=f,M>0){if(++r>=Q)return arguments[0]}else r=0;return n.apply(t,arguments)}}function oo(n,r){var l=-1,f=n.length,M=f-1;for(r=r===t?f:r;++l<r;){var w=Nl(l,M),D=n[w];n[w]=n[l],n[l]=D}return n.length=r,n}var zh=Wg(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(ri,function(l,f,M,w){r.push(M?w.replace(Ra,"$1"):f||l)}),r});function xi(n){if(typeof n=="string"||Gn(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}function yr(n){if(n!=null){try{return Fa.call(n)}catch{}try{return n+""}catch{}}return""}function Kg(n,r){return Yn(oe,function(l){var f="_."+l[0];r&l[1]&&!La(n,f)&&n.push(f)}),n.sort()}function Gh(n){if(n instanceof gt)return n.clone();var r=new Kn(n.__wrapped__,n.__chain__);return r.__actions__=Ln(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function $g(n,r,l){(l?yn(n,r,l):r===t)?r=1:r=tn(rt(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var M=0,w=0,D=J(ka(f/r));M<f;)D[w++]=Jn(n,M,M+=r);return D}function Jg(n){for(var r=-1,l=n==null?0:n.length,f=0,M=[];++r<l;){var w=n[r];w&&(M[f++]=w)}return M}function Qg(){var n=arguments.length;if(!n)return[];for(var r=J(n-1),l=arguments[0],f=n;f--;)r[f-1]=arguments[f];return Ki(it(l)?Ln(l):[l],hn(r,1))}var jg=ct(function(n,r){return Kt(n)?Ys(n,hn(r,1,Kt,!0)):[]}),e0=ct(function(n,r){var l=Qn(r);return Kt(l)&&(l=t),Kt(n)?Ys(n,hn(r,1,Kt,!0),qe(l,2)):[]}),t0=ct(function(n,r){var l=Qn(r);return Kt(l)&&(l=t),Kt(n)?Ys(n,hn(r,1,Kt,!0),t,l):[]});function n0(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:rt(r),Jn(n,r<0?0:r,f)):[]}function i0(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:rt(r),r=f-r,Jn(n,0,r<0?0:r)):[]}function r0(n,r){return n&&n.length?ja(n,qe(r,3),!0,!0):[]}function s0(n,r){return n&&n.length?ja(n,qe(r,3),!0):[]}function a0(n,r,l,f){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&yn(n,r,l)&&(l=0,f=M),Q_(n,r,l,f)):[]}function Hh(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:rt(l);return M<0&&(M=tn(f+M,0)),Ia(n,qe(r,3),M)}function Vh(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=f-1;return l!==t&&(M=rt(l),M=l<0?tn(f+M,0):mn(M,f-1)),Ia(n,qe(r,3),M,!0)}function kh(n){var r=n==null?0:n.length;return r?hn(n,1):[]}function o0(n){var r=n==null?0:n.length;return r?hn(n,de):[]}function l0(n,r){var l=n==null?0:n.length;return l?(r=r===t?1:rt(r),hn(n,r)):[]}function c0(n){for(var r=-1,l=n==null?0:n.length,f={};++r<l;){var M=n[r];f[M[0]]=M[1]}return f}function Wh(n){return n&&n.length?n[0]:t}function u0(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:rt(l);return M<0&&(M=tn(f+M,0)),Wr(n,r,M)}function f0(n){var r=n==null?0:n.length;return r?Jn(n,0,-1):[]}var h0=ct(function(n){var r=Wt(n,Gl);return r.length&&r[0]===n[0]?Pl(r):[]}),d0=ct(function(n){var r=Qn(n),l=Wt(n,Gl);return r===Qn(l)?r=t:l.pop(),l.length&&l[0]===n[0]?Pl(l,qe(r,2)):[]}),p0=ct(function(n){var r=Qn(n),l=Wt(n,Gl);return r=typeof r=="function"?r:t,r&&l.pop(),l.length&&l[0]===n[0]?Pl(l,t,r):[]});function m0(n,r){return n==null?"":f_.call(n,r)}function Qn(n){var r=n==null?0:n.length;return r?n[r-1]:t}function _0(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=f;return l!==t&&(M=rt(l),M=M<0?tn(f+M,0):mn(M,f-1)),r===r?Km(n,r,M):Ia(n,Tf,M,!0)}function g0(n,r){return n&&n.length?th(n,rt(r)):t}var v0=ct(Xh);function Xh(n,r){return n&&n.length&&r&&r.length?Ul(n,r):n}function x0(n,r,l){return n&&n.length&&r&&r.length?Ul(n,r,qe(l,2)):n}function M0(n,r,l){return n&&n.length&&r&&r.length?Ul(n,r,t,l):n}var S0=Li(function(n,r){var l=n==null?0:n.length,f=wl(n,r);return rh(n,Wt(r,function(M){return Ii(M,l)?+M:M}).sort(ph)),f});function E0(n,r){var l=[];if(!(n&&n.length))return l;var f=-1,M=[],w=n.length;for(r=qe(r,3);++f<w;){var D=n[f];r(D,f,n)&&(l.push(D),M.push(f))}return rh(n,M),l}function ec(n){return n==null?n:m_.call(n)}function y0(n,r,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&yn(n,r,l)?(r=0,l=f):(r=r==null?0:rt(r),l=l===t?f:rt(l)),Jn(n,r,l)):[]}function T0(n,r){return Qa(n,r)}function A0(n,r,l){return Ol(n,r,qe(l,2))}function w0(n,r){var l=n==null?0:n.length;if(l){var f=Qa(n,r);if(f<l&&li(n[f],r))return f}return-1}function b0(n,r){return Qa(n,r,!0)}function R0(n,r,l){return Ol(n,r,qe(l,2),!0)}function C0(n,r){var l=n==null?0:n.length;if(l){var f=Qa(n,r,!0)-1;if(li(n[f],r))return f}return-1}function P0(n){return n&&n.length?ah(n):[]}function L0(n,r){return n&&n.length?ah(n,qe(r,2)):[]}function I0(n){var r=n==null?0:n.length;return r?Jn(n,1,r):[]}function D0(n,r,l){return n&&n.length?(r=l||r===t?1:rt(r),Jn(n,0,r<0?0:r)):[]}function U0(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===t?1:rt(r),r=f-r,Jn(n,r<0?0:r,f)):[]}function N0(n,r){return n&&n.length?ja(n,qe(r,3),!1,!0):[]}function F0(n,r){return n&&n.length?ja(n,qe(r,3)):[]}var O0=ct(function(n){return ji(hn(n,1,Kt,!0))}),B0=ct(function(n){var r=Qn(n);return Kt(r)&&(r=t),ji(hn(n,1,Kt,!0),qe(r,2))}),z0=ct(function(n){var r=Qn(n);return r=typeof r=="function"?r:t,ji(hn(n,1,Kt,!0),t,r)});function G0(n){return n&&n.length?ji(n):[]}function H0(n,r){return n&&n.length?ji(n,qe(r,2)):[]}function V0(n,r){return r=typeof r=="function"?r:t,n&&n.length?ji(n,t,r):[]}function tc(n){if(!(n&&n.length))return[];var r=0;return n=Zi(n,function(l){if(Kt(l))return r=tn(l.length,r),!0}),vl(r,function(l){return Wt(n,ml(l))})}function qh(n,r){if(!(n&&n.length))return[];var l=tc(n);return r==null?l:Wt(l,function(f){return On(r,t,f)})}var k0=ct(function(n,r){return Kt(n)?Ys(n,r):[]}),W0=ct(function(n){return zl(Zi(n,Kt))}),X0=ct(function(n){var r=Qn(n);return Kt(r)&&(r=t),zl(Zi(n,Kt),qe(r,2))}),q0=ct(function(n){var r=Qn(n);return r=typeof r=="function"?r:t,zl(Zi(n,Kt),t,r)}),Y0=ct(tc);function Z0(n,r){return uh(n||[],r||[],qs)}function K0(n,r){return uh(n||[],r||[],$s)}var $0=ct(function(n){var r=n.length,l=r>1?n[r-1]:t;return l=typeof l=="function"?(n.pop(),l):t,qh(n,l)});function Yh(n){var r=E(n);return r.__chain__=!0,r}function J0(n,r){return r(n),n}function lo(n,r){return r(n)}var Q0=Li(function(n){var r=n.length,l=r?n[0]:0,f=this.__wrapped__,M=function(w){return wl(w,n)};return r>1||this.__actions__.length||!(f instanceof gt)||!Ii(l)?this.thru(M):(f=f.slice(l,+l+(r?1:0)),f.__actions__.push({func:lo,args:[M],thisArg:t}),new Kn(f,this.__chain__).thru(function(w){return r&&!w.length&&w.push(t),w}))});function j0(){return Yh(this)}function ev(){return new Kn(this.value(),this.__chain__)}function tv(){this.__values__===t&&(this.__values__=od(this.value()));var n=this.__index__>=this.__values__.length,r=n?t:this.__values__[this.__index__++];return{done:n,value:r}}function nv(){return this}function iv(n){for(var r,l=this;l instanceof Ya;){var f=Gh(l);f.__index__=0,f.__values__=t,r?M.__wrapped__=f:r=f;var M=f;l=l.__wrapped__}return M.__wrapped__=n,r}function rv(){var n=this.__wrapped__;if(n instanceof gt){var r=n;return this.__actions__.length&&(r=new gt(this)),r=r.reverse(),r.__actions__.push({func:lo,args:[ec],thisArg:t}),new Kn(r,this.__chain__)}return this.thru(ec)}function sv(){return ch(this.__wrapped__,this.__actions__)}var av=eo(function(n,r,l){Pt.call(n,l)?++n[l]:Ci(n,l,1)});function ov(n,r,l){var f=it(n)?Ef:J_;return l&&yn(n,r,l)&&(r=t),f(n,qe(r,3))}function lv(n,r){var l=it(n)?Zi:qf;return l(n,qe(r,3))}var cv=Mh(Hh),uv=Mh(Vh);function fv(n,r){return hn(co(n,r),1)}function hv(n,r){return hn(co(n,r),de)}function dv(n,r,l){return l=l===t?1:rt(l),hn(co(n,r),l)}function Zh(n,r){var l=it(n)?Yn:Qi;return l(n,qe(r,3))}function Kh(n,r){var l=it(n)?Im:Xf;return l(n,qe(r,3))}var pv=eo(function(n,r,l){Pt.call(n,l)?n[l].push(r):Ci(n,l,[r])});function mv(n,r,l,f){n=In(n)?n:ns(n),l=l&&!f?rt(l):0;var M=n.length;return l<0&&(l=tn(M+l,0)),mo(n)?l<=M&&n.indexOf(r,l)>-1:!!M&&Wr(n,r,l)>-1}var _v=ct(function(n,r,l){var f=-1,M=typeof r=="function",w=In(n)?J(n.length):[];return Qi(n,function(D){w[++f]=M?On(r,D,l):Zs(D,r,l)}),w}),gv=eo(function(n,r,l){Ci(n,l,r)});function co(n,r){var l=it(n)?Wt:Qf;return l(n,qe(r,3))}function vv(n,r,l,f){return n==null?[]:(it(r)||(r=r==null?[]:[r]),l=f?t:l,it(l)||(l=l==null?[]:[l]),nh(n,r,l))}var xv=eo(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function Mv(n,r,l){var f=it(n)?dl:wf,M=arguments.length<3;return f(n,qe(r,4),l,M,Qi)}function Sv(n,r,l){var f=it(n)?Dm:wf,M=arguments.length<3;return f(n,qe(r,4),l,M,Xf)}function Ev(n,r){var l=it(n)?Zi:qf;return l(n,ho(qe(r,3)))}function yv(n){var r=it(n)?Hf:mg;return r(n)}function Tv(n,r,l){(l?yn(n,r,l):r===t)?r=1:r=rt(r);var f=it(n)?q_:_g;return f(n,r)}function Av(n){var r=it(n)?Y_:vg;return r(n)}function wv(n){if(n==null)return 0;if(In(n))return mo(n)?qr(n):n.length;var r=_n(n);return r==F||r==I?n.size:Il(n).length}function bv(n,r,l){var f=it(n)?pl:xg;return l&&yn(n,r,l)&&(r=t),f(n,qe(r,3))}var Rv=ct(function(n,r){if(n==null)return[];var l=r.length;return l>1&&yn(n,r[0],r[1])?r=[]:l>2&&yn(r[0],r[1],r[2])&&(r=[r[0]]),nh(n,hn(r,1),[])}),uo=l_||function(){return fn.Date.now()};function Cv(n,r){if(typeof r!="function")throw new Zn(c);return n=rt(n),function(){if(--n<1)return r.apply(this,arguments)}}function $h(n,r,l){return r=l?t:r,r=n&&r==null?n.length:r,Pi(n,U,t,t,t,t,r)}function Jh(n,r){var l;if(typeof r!="function")throw new Zn(c);return n=rt(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=t),l}}var nc=ct(function(n,r,l){var f=v;if(l.length){var M=$i(l,es(nc));f|=G}return Pi(n,f,r,l,M)}),Qh=ct(function(n,r,l){var f=v|m;if(l.length){var M=$i(l,es(Qh));f|=G}return Pi(r,f,n,l,M)});function jh(n,r,l){r=l?t:r;var f=Pi(n,L,t,t,t,t,t,r);return f.placeholder=jh.placeholder,f}function ed(n,r,l){r=l?t:r;var f=Pi(n,b,t,t,t,t,t,r);return f.placeholder=ed.placeholder,f}function td(n,r,l){var f,M,w,D,B,X,re=0,ae=!1,he=!1,ve=!0;if(typeof n!="function")throw new Zn(c);r=jn(r)||0,Yt(l)&&(ae=!!l.leading,he="maxWait"in l,w=he?tn(jn(l.maxWait)||0,r):w,ve="trailing"in l?!!l.trailing:ve);function ze($t){var ci=f,Ni=M;return f=M=t,re=$t,D=n.apply(Ni,ci),D}function Ye($t){return re=$t,B=js(pt,r),ae?ze($t):D}function at($t){var ci=$t-X,Ni=$t-re,Md=r-ci;return he?mn(Md,w-Ni):Md}function Ze($t){var ci=$t-X,Ni=$t-re;return X===t||ci>=r||ci<0||he&&Ni>=w}function pt(){var $t=uo();if(Ze($t))return Mt($t);B=js(pt,at($t))}function Mt($t){return B=t,ve&&f?ze($t):(f=M=t,D)}function Hn(){B!==t&&fh(B),re=0,f=X=M=B=t}function Tn(){return B===t?D:Mt(uo())}function Vn(){var $t=uo(),ci=Ze($t);if(f=arguments,M=this,X=$t,ci){if(B===t)return Ye(X);if(he)return fh(B),B=js(pt,r),ze(X)}return B===t&&(B=js(pt,r)),D}return Vn.cancel=Hn,Vn.flush=Tn,Vn}var Pv=ct(function(n,r){return Wf(n,1,r)}),Lv=ct(function(n,r,l){return Wf(n,jn(r)||0,l)});function Iv(n){return Pi(n,R)}function fo(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Zn(c);var l=function(){var f=arguments,M=r?r.apply(this,f):f[0],w=l.cache;if(w.has(M))return w.get(M);var D=n.apply(this,f);return l.cache=w.set(M,D)||w,D};return l.cache=new(fo.Cache||Ri),l}fo.Cache=Ri;function ho(n){if(typeof n!="function")throw new Zn(c);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function Dv(n){return Jh(2,n)}var Uv=Mg(function(n,r){r=r.length==1&&it(r[0])?Wt(r[0],Bn(qe())):Wt(hn(r,1),Bn(qe()));var l=r.length;return ct(function(f){for(var M=-1,w=mn(f.length,l);++M<w;)f[M]=r[M].call(this,f[M]);return On(n,this,f)})}),ic=ct(function(n,r){var l=$i(r,es(ic));return Pi(n,G,t,r,l)}),nd=ct(function(n,r){var l=$i(r,es(nd));return Pi(n,N,t,r,l)}),Nv=Li(function(n,r){return Pi(n,H,t,t,t,r)});function Fv(n,r){if(typeof n!="function")throw new Zn(c);return r=r===t?r:rt(r),ct(n,r)}function Ov(n,r){if(typeof n!="function")throw new Zn(c);return r=r==null?0:tn(rt(r),0),ct(function(l){var f=l[r],M=tr(l,0,r);return f&&Ki(M,f),On(n,this,M)})}function Bv(n,r,l){var f=!0,M=!0;if(typeof n!="function")throw new Zn(c);return Yt(l)&&(f="leading"in l?!!l.leading:f,M="trailing"in l?!!l.trailing:M),td(n,r,{leading:f,maxWait:r,trailing:M})}function zv(n){return $h(n,1)}function Gv(n,r){return ic(Hl(r),n)}function Hv(){if(!arguments.length)return[];var n=arguments[0];return it(n)?n:[n]}function Vv(n){return $n(n,x)}function kv(n,r){return r=typeof r=="function"?r:t,$n(n,x,r)}function Wv(n){return $n(n,_|x)}function Xv(n,r){return r=typeof r=="function"?r:t,$n(n,_|x,r)}function qv(n,r){return r==null||kf(n,r,ln(r))}function li(n,r){return n===r||n!==n&&r!==r}var Yv=ro(Cl),Zv=ro(function(n,r){return n>=r}),Tr=Kf(function(){return arguments}())?Kf:function(n){return Zt(n)&&Pt.call(n,"callee")&&!Nf.call(n,"callee")},it=J.isArray,Kv=_f?Bn(_f):ig;function In(n){return n!=null&&po(n.length)&&!Di(n)}function Kt(n){return Zt(n)&&In(n)}function $v(n){return n===!0||n===!1||Zt(n)&&En(n)==ke}var nr=u_||pc,Jv=gf?Bn(gf):rg;function Qv(n){return Zt(n)&&n.nodeType===1&&!ea(n)}function jv(n){if(n==null)return!0;if(In(n)&&(it(n)||typeof n=="string"||typeof n.splice=="function"||nr(n)||ts(n)||Tr(n)))return!n.length;var r=_n(n);if(r==F||r==I)return!n.size;if(Qs(n))return!Il(n).length;for(var l in n)if(Pt.call(n,l))return!1;return!0}function ex(n,r){return Ks(n,r)}function tx(n,r,l){l=typeof l=="function"?l:t;var f=l?l(n,r):t;return f===t?Ks(n,r,t,l):!!f}function rc(n){if(!Zt(n))return!1;var r=En(n);return r==zt||r==$e||typeof n.message=="string"&&typeof n.name=="string"&&!ea(n)}function nx(n){return typeof n=="number"&&Of(n)}function Di(n){if(!Yt(n))return!1;var r=En(n);return r==Lt||r==ht||r==ye||r==Ft}function id(n){return typeof n=="number"&&n==rt(n)}function po(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=j}function Yt(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function Zt(n){return n!=null&&typeof n=="object"}var rd=vf?Bn(vf):ag;function ix(n,r){return n===r||Ll(n,r,Zl(r))}function rx(n,r,l){return l=typeof l=="function"?l:t,Ll(n,r,Zl(r),l)}function sx(n){return sd(n)&&n!=+n}function ax(n){if(kg(n))throw new tt(o);return $f(n)}function ox(n){return n===null}function lx(n){return n==null}function sd(n){return typeof n=="number"||Zt(n)&&En(n)==sn}function ea(n){if(!Zt(n)||En(n)!=je)return!1;var r=Ga(n);if(r===null)return!0;var l=Pt.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&Fa.call(l)==r_}var sc=xf?Bn(xf):og;function cx(n){return id(n)&&n>=-9007199254740991&&n<=j}var ad=Mf?Bn(Mf):lg;function mo(n){return typeof n=="string"||!it(n)&&Zt(n)&&En(n)==S}function Gn(n){return typeof n=="symbol"||Zt(n)&&En(n)==Y}var ts=Sf?Bn(Sf):cg;function ux(n){return n===t}function fx(n){return Zt(n)&&_n(n)==fe}function hx(n){return Zt(n)&&En(n)==se}var dx=ro(Dl),px=ro(function(n,r){return n<=r});function od(n){if(!n)return[];if(In(n))return mo(n)?ai(n):Ln(n);if(Hs&&n[Hs])return qm(n[Hs]());var r=_n(n),l=r==F?Ml:r==I?Da:ns;return l(n)}function Ui(n){if(!n)return n===0?n:0;if(n=jn(n),n===de||n===-1/0){var r=n<0?-1:1;return r*Ee}return n===n?n:0}function rt(n){var r=Ui(n),l=r%1;return r===r?l?r-l:r:0}function ld(n){return n?Mr(rt(n),0,Ne):0}function jn(n){if(typeof n=="number")return n;if(Gn(n))return we;if(Yt(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Yt(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=bf(n);var l=sl.test(n);return l||ol.test(n)?Cm(n.slice(2),l?2:8):rl.test(n)?we:+n}function cd(n){return vi(n,Dn(n))}function mx(n){return n?Mr(rt(n),-9007199254740991,j):n===0?n:0}function Rt(n){return n==null?"":zn(n)}var _x=Qr(function(n,r){if(Qs(r)||In(r)){vi(r,ln(r),n);return}for(var l in r)Pt.call(r,l)&&qs(n,l,r[l])}),ud=Qr(function(n,r){vi(r,Dn(r),n)}),_o=Qr(function(n,r,l,f){vi(r,Dn(r),n,f)}),gx=Qr(function(n,r,l,f){vi(r,ln(r),n,f)}),vx=Li(wl);function xx(n,r){var l=Jr(n);return r==null?l:Vf(l,r)}var Mx=ct(function(n,r){n=Bt(n);var l=-1,f=r.length,M=f>2?r[2]:t;for(M&&yn(r[0],r[1],M)&&(f=1);++l<f;)for(var w=r[l],D=Dn(w),B=-1,X=D.length;++B<X;){var re=D[B],ae=n[re];(ae===t||li(ae,Zr[re])&&!Pt.call(n,re))&&(n[re]=w[re])}return n}),Sx=ct(function(n){return n.push(t,bh),On(fd,t,n)});function Ex(n,r){return yf(n,qe(r,3),gi)}function yx(n,r){return yf(n,qe(r,3),Rl)}function Tx(n,r){return n==null?n:bl(n,qe(r,3),Dn)}function Ax(n,r){return n==null?n:Yf(n,qe(r,3),Dn)}function wx(n,r){return n&&gi(n,qe(r,3))}function bx(n,r){return n&&Rl(n,qe(r,3))}function Rx(n){return n==null?[]:$a(n,ln(n))}function Cx(n){return n==null?[]:$a(n,Dn(n))}function ac(n,r,l){var f=n==null?t:Sr(n,r);return f===t?l:f}function Px(n,r){return n!=null&&Ph(n,r,j_)}function oc(n,r){return n!=null&&Ph(n,r,eg)}var Lx=Eh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Oa.call(r)),n[r]=l},cc(Un)),Ix=Eh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=Oa.call(r)),Pt.call(n,r)?n[r].push(l):n[r]=[l]},qe),Dx=ct(Zs);function ln(n){return In(n)?Gf(n):Il(n)}function Dn(n){return In(n)?Gf(n,!0):ug(n)}function Ux(n,r){var l={};return r=qe(r,3),gi(n,function(f,M,w){Ci(l,r(f,M,w),f)}),l}function Nx(n,r){var l={};return r=qe(r,3),gi(n,function(f,M,w){Ci(l,M,r(f,M,w))}),l}var Fx=Qr(function(n,r,l){Ja(n,r,l)}),fd=Qr(function(n,r,l,f){Ja(n,r,l,f)}),Ox=Li(function(n,r){var l={};if(n==null)return l;var f=!1;r=Wt(r,function(w){return w=er(w,n),f||(f=w.length>1),w}),vi(n,ql(n),l),f&&(l=$n(l,_|g|x,Lg));for(var M=r.length;M--;)Bl(l,r[M]);return l});function Bx(n,r){return hd(n,ho(qe(r)))}var zx=Li(function(n,r){return n==null?{}:hg(n,r)});function hd(n,r){if(n==null)return{};var l=Wt(ql(n),function(f){return[f]});return r=qe(r),ih(n,l,function(f,M){return r(f,M[0])})}function Gx(n,r,l){r=er(r,n);var f=-1,M=r.length;for(M||(M=1,n=t);++f<M;){var w=n==null?t:n[xi(r[f])];w===t&&(f=M,w=l),n=Di(w)?w.call(n):w}return n}function Hx(n,r,l){return n==null?n:$s(n,r,l)}function Vx(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:$s(n,r,l,f)}var dd=Ah(ln),pd=Ah(Dn);function kx(n,r,l){var f=it(n),M=f||nr(n)||ts(n);if(r=qe(r,4),l==null){var w=n&&n.constructor;M?l=f?new w:[]:Yt(n)?l=Di(w)?Jr(Ga(n)):{}:l={}}return(M?Yn:gi)(n,function(D,B,X){return r(l,D,B,X)}),l}function Wx(n,r){return n==null?!0:Bl(n,r)}function Xx(n,r,l){return n==null?n:lh(n,r,Hl(l))}function qx(n,r,l,f){return f=typeof f=="function"?f:t,n==null?n:lh(n,r,Hl(l),f)}function ns(n){return n==null?[]:xl(n,ln(n))}function Yx(n){return n==null?[]:xl(n,Dn(n))}function Zx(n,r,l){return l===t&&(l=r,r=t),l!==t&&(l=jn(l),l=l===l?l:0),r!==t&&(r=jn(r),r=r===r?r:0),Mr(jn(n),r,l)}function Kx(n,r,l){return r=Ui(r),l===t?(l=r,r=0):l=Ui(l),n=jn(n),tg(n,r,l)}function $x(n,r,l){if(l&&typeof l!="boolean"&&yn(n,r,l)&&(r=l=t),l===t&&(typeof r=="boolean"?(l=r,r=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&r===t?(n=0,r=1):(n=Ui(n),r===t?(r=n,n=0):r=Ui(r)),n>r){var f=n;n=r,r=f}if(l||n%1||r%1){var M=Bf();return mn(n+M*(r-n+Rm("1e-"+((M+"").length-1))),r)}return Nl(n,r)}var Jx=jr(function(n,r,l){return r=r.toLowerCase(),n+(l?md(r):r)});function md(n){return lc(Rt(n).toLowerCase())}function _d(n){return n=Rt(n),n&&n.replace(A,Hm).replace(vm,"")}function Qx(n,r,l){n=Rt(n),r=zn(r);var f=n.length;l=l===t?f:Mr(rt(l),0,f);var M=l;return l-=r.length,l>=0&&n.slice(l,M)==r}function jx(n){return n=Rt(n),n&&Te.test(n)?n.replace(le,Vm):n}function eM(n){return n=Rt(n),n&&Ta.test(n)?n.replace(Hr,"\\$&"):n}var tM=jr(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),nM=jr(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),iM=xh("toLowerCase");function rM(n,r,l){n=Rt(n),r=rt(r);var f=r?qr(n):0;if(!r||f>=r)return n;var M=(r-f)/2;return io(Wa(M),l)+n+io(ka(M),l)}function sM(n,r,l){n=Rt(n),r=rt(r);var f=r?qr(n):0;return r&&f<r?n+io(r-f,l):n}function aM(n,r,l){n=Rt(n),r=rt(r);var f=r?qr(n):0;return r&&f<r?io(r-f,l)+n:n}function oM(n,r,l){return l||r==null?r=0:r&&(r=+r),p_(Rt(n).replace(si,""),r||0)}function lM(n,r,l){return(l?yn(n,r,l):r===t)?r=1:r=rt(r),Fl(Rt(n),r)}function cM(){var n=arguments,r=Rt(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var uM=jr(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function fM(n,r,l){return l&&typeof l!="number"&&yn(n,r,l)&&(r=l=t),l=l===t?Ne:l>>>0,l?(n=Rt(n),n&&(typeof r=="string"||r!=null&&!sc(r))&&(r=zn(r),!r&&Xr(n))?tr(ai(n),0,l):n.split(r,l)):[]}var hM=jr(function(n,r,l){return n+(l?" ":"")+lc(r)});function dM(n,r,l){return n=Rt(n),l=l==null?0:Mr(rt(l),0,n.length),r=zn(r),n.slice(l,l+r.length)==r}function pM(n,r,l){var f=E.templateSettings;l&&yn(n,r,l)&&(r=t),n=Rt(n),r=_o({},r,f,wh);var M=_o({},r.imports,f.imports,wh),w=ln(M),D=xl(M,w),B,X,re=0,ae=r.interpolate||W,he="__p += '",ve=Sl((r.escape||W).source+"|"+ae.source+"|"+(ae===Qt?Ca:W).source+"|"+(r.evaluate||W).source+"|$","g"),ze="//# sourceURL="+(Pt.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ym+"]")+`
`;n.replace(ve,function(Ze,pt,Mt,Hn,Tn,Vn){return Mt||(Mt=Hn),he+=n.slice(re,Vn).replace(Z,km),pt&&(B=!0,he+=`' +
__e(`+pt+`) +
'`),Tn&&(X=!0,he+=`';
`+Tn+`;
__p += '`),Mt&&(he+=`' +
((__t = (`+Mt+`)) == null ? '' : __t) +
'`),re=Vn+Ze.length,Ze}),he+=`';
`;var Ye=Pt.call(r,"variable")&&r.variable;if(!Ye)he=`with (obj) {
`+he+`
}
`;else if(kr.test(Ye))throw new tt(u);he=(X?he.replace(It,""):he).replace(V,"$1").replace(Me,"$1;"),he="function("+(Ye||"obj")+`) {
`+(Ye?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+he+`return __p
}`;var at=vd(function(){return bt(w,ze+"return "+he).apply(t,D)});if(at.source=he,rc(at))throw at;return at}function mM(n){return Rt(n).toLowerCase()}function _M(n){return Rt(n).toUpperCase()}function gM(n,r,l){if(n=Rt(n),n&&(l||r===t))return bf(n);if(!n||!(r=zn(r)))return n;var f=ai(n),M=ai(r),w=Rf(f,M),D=Cf(f,M)+1;return tr(f,w,D).join("")}function vM(n,r,l){if(n=Rt(n),n&&(l||r===t))return n.slice(0,Lf(n)+1);if(!n||!(r=zn(r)))return n;var f=ai(n),M=Cf(f,ai(r))+1;return tr(f,0,M).join("")}function xM(n,r,l){if(n=Rt(n),n&&(l||r===t))return n.replace(si,"");if(!n||!(r=zn(r)))return n;var f=ai(n),M=Rf(f,ai(r));return tr(f,M).join("")}function MM(n,r){var l=T,f=z;if(Yt(r)){var M="separator"in r?r.separator:M;l="length"in r?rt(r.length):l,f="omission"in r?zn(r.omission):f}n=Rt(n);var w=n.length;if(Xr(n)){var D=ai(n);w=D.length}if(l>=w)return n;var B=l-qr(f);if(B<1)return f;var X=D?tr(D,0,B).join(""):n.slice(0,B);if(M===t)return X+f;if(D&&(B+=X.length-B),sc(M)){if(n.slice(B).search(M)){var re,ae=X;for(M.global||(M=Sl(M.source,Rt(Pa.exec(M))+"g")),M.lastIndex=0;re=M.exec(ae);)var he=re.index;X=X.slice(0,he===t?B:he)}}else if(n.indexOf(zn(M),B)!=B){var ve=X.lastIndexOf(M);ve>-1&&(X=X.slice(0,ve))}return X+f}function SM(n){return n=Rt(n),n&&Ae.test(n)?n.replace(ee,$m):n}var EM=jr(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),lc=xh("toUpperCase");function gd(n,r,l){return n=Rt(n),r=l?t:r,r===t?Xm(n)?jm(n):Fm(n):n.match(r)||[]}var vd=ct(function(n,r){try{return On(n,t,r)}catch(l){return rc(l)?l:new tt(l)}}),yM=Li(function(n,r){return Yn(r,function(l){l=xi(l),Ci(n,l,nc(n[l],n))}),n});function TM(n){var r=n==null?0:n.length,l=qe();return n=r?Wt(n,function(f){if(typeof f[1]!="function")throw new Zn(c);return[l(f[0]),f[1]]}):[],ct(function(f){for(var M=-1;++M<r;){var w=n[M];if(On(w[0],this,f))return On(w[1],this,f)}})}function AM(n){return $_($n(n,_))}function cc(n){return function(){return n}}function wM(n,r){return n==null||n!==n?r:n}var bM=Sh(),RM=Sh(!0);function Un(n){return n}function uc(n){return Jf(typeof n=="function"?n:$n(n,_))}function CM(n){return jf($n(n,_))}function PM(n,r){return eh(n,$n(r,_))}var LM=ct(function(n,r){return function(l){return Zs(l,n,r)}}),IM=ct(function(n,r){return function(l){return Zs(n,l,r)}});function fc(n,r,l){var f=ln(r),M=$a(r,f);l==null&&!(Yt(r)&&(M.length||!f.length))&&(l=r,r=n,n=this,M=$a(r,ln(r)));var w=!(Yt(l)&&"chain"in l)||!!l.chain,D=Di(n);return Yn(M,function(B){var X=r[B];n[B]=X,D&&(n.prototype[B]=function(){var re=this.__chain__;if(w||re){var ae=n(this.__wrapped__),he=ae.__actions__=Ln(this.__actions__);return he.push({func:X,args:arguments,thisArg:n}),ae.__chain__=re,ae}return X.apply(n,Ki([this.value()],arguments))})}),n}function DM(){return fn._===this&&(fn._=s_),this}function hc(){}function UM(n){return n=rt(n),ct(function(r){return th(r,n)})}var NM=kl(Wt),FM=kl(Ef),OM=kl(pl);function xd(n){return $l(n)?ml(xi(n)):dg(n)}function BM(n){return function(r){return n==null?t:Sr(n,r)}}var zM=yh(),GM=yh(!0);function dc(){return[]}function pc(){return!1}function HM(){return{}}function VM(){return""}function kM(){return!0}function WM(n,r){if(n=rt(n),n<1||n>j)return[];var l=Ne,f=mn(n,Ne);r=qe(r),n-=Ne;for(var M=vl(f,r);++l<n;)r(l);return M}function XM(n){return it(n)?Wt(n,xi):Gn(n)?[n]:Ln(zh(Rt(n)))}function qM(n){var r=++i_;return Rt(n)+r}var YM=no(function(n,r){return n+r},0),ZM=Wl("ceil"),KM=no(function(n,r){return n/r},1),$M=Wl("floor");function JM(n){return n&&n.length?Ka(n,Un,Cl):t}function QM(n,r){return n&&n.length?Ka(n,qe(r,2),Cl):t}function jM(n){return Af(n,Un)}function eS(n,r){return Af(n,qe(r,2))}function tS(n){return n&&n.length?Ka(n,Un,Dl):t}function nS(n,r){return n&&n.length?Ka(n,qe(r,2),Dl):t}var iS=no(function(n,r){return n*r},1),rS=Wl("round"),sS=no(function(n,r){return n-r},0);function aS(n){return n&&n.length?gl(n,Un):0}function oS(n,r){return n&&n.length?gl(n,qe(r,2)):0}return E.after=Cv,E.ary=$h,E.assign=_x,E.assignIn=ud,E.assignInWith=_o,E.assignWith=gx,E.at=vx,E.before=Jh,E.bind=nc,E.bindAll=yM,E.bindKey=Qh,E.castArray=Hv,E.chain=Yh,E.chunk=$g,E.compact=Jg,E.concat=Qg,E.cond=TM,E.conforms=AM,E.constant=cc,E.countBy=av,E.create=xx,E.curry=jh,E.curryRight=ed,E.debounce=td,E.defaults=Mx,E.defaultsDeep=Sx,E.defer=Pv,E.delay=Lv,E.difference=jg,E.differenceBy=e0,E.differenceWith=t0,E.drop=n0,E.dropRight=i0,E.dropRightWhile=r0,E.dropWhile=s0,E.fill=a0,E.filter=lv,E.flatMap=fv,E.flatMapDeep=hv,E.flatMapDepth=dv,E.flatten=kh,E.flattenDeep=o0,E.flattenDepth=l0,E.flip=Iv,E.flow=bM,E.flowRight=RM,E.fromPairs=c0,E.functions=Rx,E.functionsIn=Cx,E.groupBy=pv,E.initial=f0,E.intersection=h0,E.intersectionBy=d0,E.intersectionWith=p0,E.invert=Lx,E.invertBy=Ix,E.invokeMap=_v,E.iteratee=uc,E.keyBy=gv,E.keys=ln,E.keysIn=Dn,E.map=co,E.mapKeys=Ux,E.mapValues=Nx,E.matches=CM,E.matchesProperty=PM,E.memoize=fo,E.merge=Fx,E.mergeWith=fd,E.method=LM,E.methodOf=IM,E.mixin=fc,E.negate=ho,E.nthArg=UM,E.omit=Ox,E.omitBy=Bx,E.once=Dv,E.orderBy=vv,E.over=NM,E.overArgs=Uv,E.overEvery=FM,E.overSome=OM,E.partial=ic,E.partialRight=nd,E.partition=xv,E.pick=zx,E.pickBy=hd,E.property=xd,E.propertyOf=BM,E.pull=v0,E.pullAll=Xh,E.pullAllBy=x0,E.pullAllWith=M0,E.pullAt=S0,E.range=zM,E.rangeRight=GM,E.rearg=Nv,E.reject=Ev,E.remove=E0,E.rest=Fv,E.reverse=ec,E.sampleSize=Tv,E.set=Hx,E.setWith=Vx,E.shuffle=Av,E.slice=y0,E.sortBy=Rv,E.sortedUniq=P0,E.sortedUniqBy=L0,E.split=fM,E.spread=Ov,E.tail=I0,E.take=D0,E.takeRight=U0,E.takeRightWhile=N0,E.takeWhile=F0,E.tap=J0,E.throttle=Bv,E.thru=lo,E.toArray=od,E.toPairs=dd,E.toPairsIn=pd,E.toPath=XM,E.toPlainObject=cd,E.transform=kx,E.unary=zv,E.union=O0,E.unionBy=B0,E.unionWith=z0,E.uniq=G0,E.uniqBy=H0,E.uniqWith=V0,E.unset=Wx,E.unzip=tc,E.unzipWith=qh,E.update=Xx,E.updateWith=qx,E.values=ns,E.valuesIn=Yx,E.without=k0,E.words=gd,E.wrap=Gv,E.xor=W0,E.xorBy=X0,E.xorWith=q0,E.zip=Y0,E.zipObject=Z0,E.zipObjectDeep=K0,E.zipWith=$0,E.entries=dd,E.entriesIn=pd,E.extend=ud,E.extendWith=_o,fc(E,E),E.add=YM,E.attempt=vd,E.camelCase=Jx,E.capitalize=md,E.ceil=ZM,E.clamp=Zx,E.clone=Vv,E.cloneDeep=Wv,E.cloneDeepWith=Xv,E.cloneWith=kv,E.conformsTo=qv,E.deburr=_d,E.defaultTo=wM,E.divide=KM,E.endsWith=Qx,E.eq=li,E.escape=jx,E.escapeRegExp=eM,E.every=ov,E.find=cv,E.findIndex=Hh,E.findKey=Ex,E.findLast=uv,E.findLastIndex=Vh,E.findLastKey=yx,E.floor=$M,E.forEach=Zh,E.forEachRight=Kh,E.forIn=Tx,E.forInRight=Ax,E.forOwn=wx,E.forOwnRight=bx,E.get=ac,E.gt=Yv,E.gte=Zv,E.has=Px,E.hasIn=oc,E.head=Wh,E.identity=Un,E.includes=mv,E.indexOf=u0,E.inRange=Kx,E.invoke=Dx,E.isArguments=Tr,E.isArray=it,E.isArrayBuffer=Kv,E.isArrayLike=In,E.isArrayLikeObject=Kt,E.isBoolean=$v,E.isBuffer=nr,E.isDate=Jv,E.isElement=Qv,E.isEmpty=jv,E.isEqual=ex,E.isEqualWith=tx,E.isError=rc,E.isFinite=nx,E.isFunction=Di,E.isInteger=id,E.isLength=po,E.isMap=rd,E.isMatch=ix,E.isMatchWith=rx,E.isNaN=sx,E.isNative=ax,E.isNil=lx,E.isNull=ox,E.isNumber=sd,E.isObject=Yt,E.isObjectLike=Zt,E.isPlainObject=ea,E.isRegExp=sc,E.isSafeInteger=cx,E.isSet=ad,E.isString=mo,E.isSymbol=Gn,E.isTypedArray=ts,E.isUndefined=ux,E.isWeakMap=fx,E.isWeakSet=hx,E.join=m0,E.kebabCase=tM,E.last=Qn,E.lastIndexOf=_0,E.lowerCase=nM,E.lowerFirst=iM,E.lt=dx,E.lte=px,E.max=JM,E.maxBy=QM,E.mean=jM,E.meanBy=eS,E.min=tS,E.minBy=nS,E.stubArray=dc,E.stubFalse=pc,E.stubObject=HM,E.stubString=VM,E.stubTrue=kM,E.multiply=iS,E.nth=g0,E.noConflict=DM,E.noop=hc,E.now=uo,E.pad=rM,E.padEnd=sM,E.padStart=aM,E.parseInt=oM,E.random=$x,E.reduce=Mv,E.reduceRight=Sv,E.repeat=lM,E.replace=cM,E.result=Gx,E.round=rS,E.runInContext=k,E.sample=yv,E.size=wv,E.snakeCase=uM,E.some=bv,E.sortedIndex=T0,E.sortedIndexBy=A0,E.sortedIndexOf=w0,E.sortedLastIndex=b0,E.sortedLastIndexBy=R0,E.sortedLastIndexOf=C0,E.startCase=hM,E.startsWith=dM,E.subtract=sS,E.sum=aS,E.sumBy=oS,E.template=pM,E.times=WM,E.toFinite=Ui,E.toInteger=rt,E.toLength=ld,E.toLower=mM,E.toNumber=jn,E.toSafeInteger=mx,E.toString=Rt,E.toUpper=_M,E.trim=gM,E.trimEnd=vM,E.trimStart=xM,E.truncate=MM,E.unescape=SM,E.uniqueId=qM,E.upperCase=EM,E.upperFirst=lc,E.each=Zh,E.eachRight=Kh,E.first=Wh,fc(E,function(){var n={};return gi(E,function(r,l){Pt.call(E.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),E.VERSION=i,Yn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Yn(["drop","take"],function(n,r){gt.prototype[n]=function(l){l=l===t?1:tn(rt(l),0);var f=this.__filtered__&&!r?new gt(this):this.clone();return f.__filtered__?f.__takeCount__=mn(l,f.__takeCount__):f.__views__.push({size:mn(l,Ne),type:n+(f.__dir__<0?"Right":"")}),f},gt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Yn(["filter","map","takeWhile"],function(n,r){var l=r+1,f=l==ie||l==ne;gt.prototype[n]=function(M){var w=this.clone();return w.__iteratees__.push({iteratee:qe(M,3),type:l}),w.__filtered__=w.__filtered__||f,w}}),Yn(["head","last"],function(n,r){var l="take"+(r?"Right":"");gt.prototype[n]=function(){return this[l](1).value()[0]}}),Yn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");gt.prototype[n]=function(){return this.__filtered__?new gt(this):this[l](1)}}),gt.prototype.compact=function(){return this.filter(Un)},gt.prototype.find=function(n){return this.filter(n).head()},gt.prototype.findLast=function(n){return this.reverse().find(n)},gt.prototype.invokeMap=ct(function(n,r){return typeof n=="function"?new gt(this):this.map(function(l){return Zs(l,n,r)})}),gt.prototype.reject=function(n){return this.filter(ho(qe(n)))},gt.prototype.slice=function(n,r){n=rt(n);var l=this;return l.__filtered__&&(n>0||r<0)?new gt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==t&&(r=rt(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},gt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},gt.prototype.toArray=function(){return this.take(Ne)},gi(gt.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),M=E[f?"take"+(r=="last"?"Right":""):r],w=f||/^find/.test(r);M&&(E.prototype[r]=function(){var D=this.__wrapped__,B=f?[1]:arguments,X=D instanceof gt,re=B[0],ae=X||it(D),he=function(pt){var Mt=M.apply(E,Ki([pt],B));return f&&ve?Mt[0]:Mt};ae&&l&&typeof re=="function"&&re.length!=1&&(X=ae=!1);var ve=this.__chain__,ze=!!this.__actions__.length,Ye=w&&!ve,at=X&&!ze;if(!w&&ae){D=at?D:new gt(this);var Ze=n.apply(D,B);return Ze.__actions__.push({func:lo,args:[he],thisArg:t}),new Kn(Ze,ve)}return Ye&&at?n.apply(this,B):(Ze=this.thru(he),Ye?f?Ze.value()[0]:Ze.value():Ze)})}),Yn(["pop","push","shift","sort","splice","unshift"],function(n){var r=Ua[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(f&&!this.__chain__){var w=this.value();return r.apply(it(w)?w:[],M)}return this[l](function(D){return r.apply(it(D)?D:[],M)})}}),gi(gt.prototype,function(n,r){var l=E[r];if(l){var f=l.name+"";Pt.call($r,f)||($r[f]=[]),$r[f].push({name:r,func:l})}}),$r[to(t,m).name]=[{name:"wrapper",func:t}],gt.prototype.clone=S_,gt.prototype.reverse=E_,gt.prototype.value=y_,E.prototype.at=Q0,E.prototype.chain=j0,E.prototype.commit=ev,E.prototype.next=tv,E.prototype.plant=iv,E.prototype.reverse=rv,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=sv,E.prototype.first=E.prototype.head,Hs&&(E.prototype[Hs]=nv),E},Yr=e_();_r?((_r.exports=Yr)._=Yr,ul._=Yr):fn._=Yr}).call(Lb)}(ma,ma.exports)),ma.exports}var ua={},Ap;function Db(){if(Ap)return ua;Ap=1,Object.defineProperty(ua,"__esModule",{value:!0}),ua.backtrace=void 0;function s(e,t,i){const a=[];let o=i?e:e.getParent();for(;o.getParent();)a.push([o.position.x,o.position.y]),o=o.getParent();return t&&a.push([o.position.x,o.position.y]),a.reverse()}return ua.backtrace=s,ua}var fa={},wp;function Ub(){if(wp)return fa;wp=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.calculateHeuristic=void 0;function s(e,t,i,a){const o=Math.abs(i.x-t.x),c=Math.abs(i.y-t.y);switch(e){case"Manhatten":case"Manhattan":return(o+c)*a;case"Euclidean":return Math.sqrt(o*o+c*c)*a;case"Chebyshev":return Math.max(o,c)*a;case"Octile":return(o+c-.58*Math.min(o,c))*a}}return fa.calculateHeuristic=s,fa}var ha={},da={},bp;function Nb(){if(bp)return da;bp=1,Object.defineProperty(da,"__esModule",{value:!0}),da.Node=void 0;class s{constructor(t){this.id=t.id,this.position=t.position,this.hValue=0,this.gValue=0,this.fValue=0,this.parentNode=void 0,this.isOnClosedList=!1,this.isOnOpenList=!1,this.isWalkable=t.walkable||!0}calculateFValue(){this.fValue=this.gValue+this.hValue}setGValue(t){this.gValue=t,this.calculateFValue()}setHValue(t){this.hValue=t,this.calculateFValue()}setFGHValuesToZero(){this.fValue=this.gValue=this.hValue=0}getFValue(){return this.fValue}getGValue(){return this.gValue}getHValue(){return this.hValue}getParent(){return this.parentNode}getIsOnClosedList(){return this.isOnClosedList}getIsOnOpenList(){return this.isOnOpenList}getIsWalkable(){return this.isWalkable}setParent(t){this.parentNode=t}setIsOnClosedList(t){this.isOnClosedList=t}setIsOnOpenList(t){this.isOnOpenList=t}setIsWalkable(t){this.isWalkable=t}}return da.Node=s,da}var Rp;function um(){if(Rp)return ha;Rp=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.Grid=void 0;const s=Nb();class e{constructor(i){i.width&&i.height?(this.width=i.width,this.height=i.height,this.numberOfFields=this.width*this.height):i.matrix&&(this.width=i.matrix[0].length,this.height=i.matrix.length,this.numberOfFields=this.width*this.height),this.gridNodes=this.buildGridWithNodes(i.matrix||void 0,this.width,this.height,i.densityOfObstacles||0)}buildGridWithNodes(i,a,o,c){const u=[];let d=0;for(let h=0;h<o;h++){u[h]=[];for(let p=0;p<a;p++)u[h][p]=new s.Node({id:d,position:{x:p,y:h}}),d++}if(i===void 0){for(let h=0;h<o;h++)for(let p=0;p<a;p++)Math.floor(Math.random()*10)+1>10-c?u[h][p].setIsWalkable(!1):u[h][p].setIsWalkable(!0);return u}for(let h=0;h<o;h++)for(let p=0;p<a;p++)u[h][p].setIsWalkable(!i[h][p]);return u}getNodeAt(i){return this.gridNodes[i.y][i.x]}isWalkableAt(i){return this.gridNodes[i.y][i.x].getIsWalkable()}isOnTheGrid(i){return i.x>=0&&i.x<this.width&&i.y>=0&&i.y<this.height}getSurroundingNodes(i,a){const o=[],c=i.x-1,u=i.x+1,d=i.y-1,h=i.y+1;for(let p=d;p<=h;p++)for(let _=c;_<=u;_++)(_!==i.x||p!==i.y)&&this.isOnTheGrid({x:_,y:p})&&this.isWalkableAt({x:_,y:p})&&(a||_==i.x||p==i.y)&&o.push(this.getNodeAt({x:_,y:p}));return o}setGrid(i){this.gridNodes=i}resetGrid(){for(let i=0;i<this.gridNodes.length;i++)for(let a=0;a<this.gridNodes[i].length;a++)this.gridNodes[i][a].setIsOnClosedList(!1),this.gridNodes[i][a].setIsOnOpenList(!1),this.gridNodes[i][a].setParent(void 0),this.gridNodes[i][a].setFGHValuesToZero()}getGridNodes(){return this.gridNodes}clone(){const i=[];let a=0;for(let o=0;o<this.height;o++){i[o]=[];for(let c=0;c<this.width;c++)i[o][c]=new s.Node({id:a,position:{x:c,y:o},walkable:this.gridNodes[o][c].getIsWalkable()}),a++}return i}}return ha.Grid=e,ha}var Cp;function Fb(){if(Cp)return ca;Cp=1,Object.defineProperty(ca,"__esModule",{value:!0}),ca.AStarFinder=void 0;const s=Ib(),e=Db(),t=Ub(),i=um();class a{constructor(c){this.grid=new i.Grid({width:c.grid.width,height:c.grid.height,matrix:c.grid.matrix||void 0,densityOfObstacles:c.grid.densityOfObstacles||0}),this.closedList=[],this.openList=[],this.diagonalAllowed=c.diagonalAllowed!==void 0?c.diagonalAllowed:!0,this.heuristic=c.heuristic?c.heuristic:"Manhattan",this.includeStartNode=c.includeStartNode!==void 0?c.includeStartNode:!0,this.includeEndNode=c.includeEndNode!==void 0?c.includeEndNode:!0,this.allowPathAsCloseAsPossible=c.allowPathAsCloseAsPossible||!1,this.weight=c.weight||1}findPath(c,u){this.closedList=[],this.openList=[],this.grid.resetGrid();const d=this.grid.getNodeAt(c),h=this.grid.getNodeAt(u);if(!this.grid.isWalkableAt(u)||!this.grid.isWalkableAt(c))return[];d.setIsOnOpenList(!0),this.openList.push(d);for(let p=0;p<this.grid.height;p++)for(let _=0;_<this.grid.width;_++){let g=this.grid.getNodeAt({x:_,y:p});this.grid.isWalkableAt({x:_,y:p})?g.setHValue((0,t.calculateHeuristic)(this.heuristic,g.position,h.position,this.weight)):(g.setFGHValuesToZero(),g.setIsOnClosedList(!0),this.closedList.push(g))}for(;this.openList.length!==0;){const p=(0,s.minBy)(this.openList,g=>g.getFValue());if(p.setIsOnOpenList(!1),(0,s.remove)(this.openList,p),p.setIsOnClosedList(!0),this.closedList.push(p),p===h)return(0,e.backtrace)(h,this.includeStartNode,this.includeEndNode);const _=this.grid.getSurroundingNodes(p.position,this.diagonalAllowed);for(let g in _){const x=_[g];if(x.getIsOnClosedList())continue;const y=p.getGValue()+(x.position.x!==p.position.x||x.position.y==p.position.y?this.weight:this.weight*1.41421);(!x.getIsOnOpenList()||y<x.getGValue())&&(x.setGValue(y),x.setParent(p),x.getIsOnOpenList()?x.setParent(p):(x.setIsOnOpenList(!0),this.openList.push(x)))}}return this.allowPathAsCloseAsPossible?(0,e.backtrace)(this.closedList[this.closedList.length-1],this.includeStartNode,!1):[]}setHeuristic(c){this.heuristic=c}setWeight(c){this.weight=c}getGridClone(){return this.grid.clone()}getGrid(){return this.grid}}return ca.AStarFinder=a,ca}var Pp;function Ob(){return Pp||(Pp=1,function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.Grid=s.AStarFinder=void 0;var e=Fb();Object.defineProperty(s,"AStarFinder",{enumerable:!0,get:function(){return e.AStarFinder}});var t=um();Object.defineProperty(s,"Grid",{enumerable:!0,get:function(){return t.Grid}})}(Zc)),Zc}var Bb=Ob();const mt={TILE_SIZE:1},Ts={createSimpleGrid:s=>{var o;const e=[];for(let c=0;c<s.length;c++){const u=[];for(let d=0;d<s[c].length;d++)u.push(s[c][d].isWalkable?0:1);e.push(u)}const t=e.length,i=((o=e[0])==null?void 0:o.length)??0;return Array.from({length:i},(c,u)=>Array.from({length:t},(d,h)=>e[h][u]))},getBoundedUncheckedNeighbors:(s,e,t)=>{const i=[];return s>0&&i.push(new De(s-1,e)),s<t.length-1&&i.push(new De(s+1,e)),e>0&&i.push(new De(s,e-1)),e<t[0].length-1&&i.push(new De(s,e+1)),i},getPositionHash(s){return`${s.x},${s.y}`},findClosestEnemy:(s,e,t)=>{const i=new Set,a=[e.clone()];i.add(Ts.getPositionHash(e));let o=0;for(;o<a.length;){if(o>s.length*s[0].length*2)return null;const u=a[o];o++;const d=Ts.getBoundedUncheckedNeighbors(u.x,u.y,s);for(const h of d){if(!s[h.x][h.y].isWalkable)continue;const p=s[h.x][h.y].actors.find(_=>_ instanceof sf&&_.battleSide!==t);if(p)return{pos:u,enemy:p};i.has(Ts.getPositionHash(h))||(a.push(h),i.add(Ts.getPositionHash(h)))}}return null}};class sf extends ya{constructor(t){const i=mt.TILE_SIZE/4,a=mt.TILE_SIZE,o=new O(t.pos.x,mt.TILE_SIZE/2,t.pos.y),c=new Ti({center:o,parts:[{mesh:un.createCylinder({radius:i,height:a,color:new Ue(yt.RED)}),offset:new O(0,0,0)}]});super({mesh:c});Ge(this,"battleSide",Qo.ENEMY);Ge(this,"pos");Ge(this,"radius");Ge(this,"objective");this.objective=t.objective,this.pos=t.pos,this.radius=i}update(t,i,a,o){super.update(t,i,a,o);const c=.01;if(this.pos.distanceTo(this.objective.position.clone())<c)this.objective.health-=this.objective.fullHealth*.1,this.kill();else if(this.pos.distanceTo(o)<c){this.pos=o;const u=Ts.createSimpleGrid(a.actorsGrid),h=new Bb.AStarFinder({grid:{matrix:u},diagonalAllowed:!1}).findPath(o,this.objective.position.clone());if(h.length>1){const p=new De(h[1][0],h[1][1]);a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(_=>_!==this),a.actorsGrid[p.x][p.y].actors.push(this)}}else{const d=i*.0015,h=o.clone().sub(this.pos).normalize();this.pos.add(h.clone().multiplyScalar(d))}}graphics(){this.mesh.position=new O(this.pos.x,this.mesh.position.y,this.pos.y)}}const jo=class jo extends rf{constructor({position:t}){const i=mt.TILE_SIZE/64,a=Math.random(),o=un.createSphere({radius:i,color:a<.33?new Ue(yt.ORANGE):a<.66?new Ue(yt.YELLOW):new Ue(yt.RED)});o.position.set(t.x,t.y,t.z);super({mesh:o});Ge(this,"ttl",0);Ge(this,"position");Ge(this,"velocity");this.position=t,this.velocity=new O(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5e-5)}update(t,i,a){super.update(t,i,a),this.velocity.y-=1e-6*i,this.position=this.position.add(this.velocity.clone().multiplyScalar(i)),this.ttl+=i,this.ttl>jo.TTL&&this.kill()}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Ge(jo,"TTL",1e3);let Bu=jo;const _a=class _a extends rf{constructor(t){const i=mt.TILE_SIZE/32;super({mesh:un.createSphere({radius:i,color:new Ue(yt.WHITE)})});Ge(this,"battleSide");Ge(this,"position");Ge(this,"radius");Ge(this,"direction");Ge(this,"particleTimeout",0);this.battleSide=t.battleSide,this.direction=t.direction,this.position=t.position,this.radius=i}update(t,i,a){var C,v;super.update(t,i,a);const c=.03*i,u=this.direction.clone().normalize(),d=this.position.clone().add(new O(u.x*c,0,u.y*c)),h=mt.TILE_SIZE/4,p=this.position.distanceTo(d),_=Math.max(1,Math.floor(p/h));for(let m=0;m<_;m++){const P=this.position.clone().add(new O(u.x*h,0,u.y*h)),L=[new De(P.x-h,P.z-h),new De(P.x-h,P.z),new De(P.x-h,P.z+h),new De(P.x,P.z-h),new De(P.x,P.z),new De(P.x,P.z+h),new De(P.x+h,P.z-h),new De(P.x+h,P.z),new De(P.x+h,P.z+h)].map(b=>new De(Math.floor(b.x),Math.floor(b.y)));for(const b of L){const G=(C=a.actorsGrid[b.x])==null?void 0:C[b.y];if(G){for(const N of G.actors)if(N instanceof sf&&N.battleSide!==this.battleSide&&N.pos.distanceTo(new De(this.position.x,this.position.z))<this.radius+N.radius){N.kill();break}}}}this.position.set(d.x,this.position.y,d.z);const g=a.actorsGrid.length,x=((v=a.actorsGrid[0])==null?void 0:v.length)??0;0<=this.position.x&&this.position.x<g&&0<=this.position.z&&this.position.z<x||this.kill(),this.particleTimeout+=i,this.particleTimeout>_a.PARTICLE_TIMEOUT&&(a.addComponent(new Bu({position:this.position.clone()})),this.particleTimeout=this.particleTimeout%_a.PARTICLE_TIMEOUT)}graphics(){this.mesh.position.set(this.position.x,this.position.y,this.position.z)}};Ge(_a,"PARTICLE_TIMEOUT",20);let zu=_a;const ga=class ga extends ya{constructor(t){const i=new O(t.position.x,mt.TILE_SIZE,t.position.y),a=un.createGem({size:mt.TILE_SIZE/4,color:new Ue(yt.WHITE)}),o=new Ti({center:i,parts:[{mesh:un.createBox({width:mt.TILE_SIZE,height:mt.TILE_SIZE/2,depth:mt.TILE_SIZE,color:new Ue(yt.DARK)}),offset:new O(0,-1*3/4,0)},{mesh:un.createBox({width:mt.TILE_SIZE*3/4,height:mt.TILE_SIZE,depth:mt.TILE_SIZE*3/4,color:new Ue(yt.METAL)}),offset:new O(0,0,0)},{mesh:un.createBox({width:mt.TILE_SIZE,height:mt.TILE_SIZE/2,depth:mt.TILE_SIZE,color:new Ue(yt.DARK)}),offset:new O(0,mt.TILE_SIZE*3/4,0)},{mesh:a,offset:new O(0,mt.TILE_SIZE*3/2,0)}]});super({mesh:o});Ge(this,"gem");Ge(this,"position");Ge(this,"shootTimeout",0);this.gem=a,this.position=t.position}update(t,i,a,o){super.update(t,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateZ(i/500);const c=this.shootTimeout+i;if(this.shootTimeout=c%ga.SHOOT_TIMEOUT,c>=ga.SHOOT_TIMEOUT){const d=Ts.findClosestEnemy(a.actorsGrid,this.position.clone(),Qo.ALLY),h=d?new De(d.enemy.mesh.position.x-this.position.x,d.enemy.mesh.position.z-this.position.y).normalize():null;if(h!==null){const p=new zu({battleSide:Qo.ALLY,direction:h,position:new O(this.position.x,this.mesh.position.y,this.position.y)});a.addComponent(p)}}}};Ge(ga,"SHOOT_TIMEOUT",1e3);let Gu=ga;class zb extends ya{constructor(t){const i=c=>un.createBox({width:c==="horizontal"?mt.TILE_SIZE:mt.TILE_SIZE/16,height:mt.TILE_SIZE/16,depth:c==="vertical"?mt.TILE_SIZE:mt.TILE_SIZE/16,color:new Ue(yt.RED)}),a=new O(t.pos.x,mt.TILE_SIZE/16,t.pos.y),o=new Ti({center:a,parts:[{mesh:i("vertical"),offset:new O(mt.TILE_SIZE*15/32,0,0)},{mesh:i("vertical"),offset:new O(-15/32,0,0)},{mesh:i("horizontal"),offset:new O(0,0,mt.TILE_SIZE*15/32)},{mesh:i("horizontal"),offset:new O(0,0,-15/32)}]});super({mesh:o});Ge(this,"pos");Ge(this,"canPlace",!1);Ge(this,"greenMaterial",new Mi({color:new Ue(yt.LIGHT_GREEN)}));Ge(this,"redMaterial",new Mi({color:new Ue(yt.RED)}));this.pos=t.pos}update(t,i,a,o){var d;super.update(t,i,a,o);let c=0;t.keyboardHandler.wasPressed("ArrowUp")?c=-1:t.keyboardHandler.wasPressed("ArrowDown")&&(c=1);let u=0;if(t.keyboardHandler.wasPressed("ArrowLeft")?u=-1:t.keyboardHandler.wasPressed("ArrowRight")&&(u=1),u!==0||c!==0){const h=o.clone().add(new De(u,c));if(!(0<=h.x&&h.x<a.actorsGrid.length)||!(0<=h.y&&h.y<(((d=a.actorsGrid[0])==null?void 0:d.length)??0)))return;this.pos=h,a.actorsGrid[o.x][o.y].actors=a.actorsGrid[o.x][o.y].actors.filter(p=>p!==this),a.actorsGrid[this.pos.x][this.pos.y].actors.push(this)}if(this.canPlace=a.actorsGrid[o.x][o.y].isWalkable&&a.actorsGrid[o.x][o.y].actors.find(h=>h!==this)===void 0,this.canPlace&&t.keyboardHandler.wasPressed("z")){const h=new Gu({position:o.clone()});a.addActor(h,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}else if(this.canPlace&&t.keyboardHandler.wasPressed("x")){const h=new Pb({position:new O(o.x,mt.TILE_SIZE/2,o.y),size:mt.TILE_SIZE});a.addActor(h,o.clone()),a.actorsGrid[o.x][o.y].isWalkable=!1}}graphics(t,i,a){const o=1-Math.exp(-.005*i);this.mesh.position=new O(this.mesh.position.x+(this.pos.x-this.mesh.position.x)*o,this.mesh.position.y,this.mesh.position.z+(this.pos.y-this.mesh.position.z)*o),a.camera.position.set(this.mesh.position.x+mt.TILE_SIZE*2,this.mesh.position.y+mt.TILE_SIZE*5,this.mesh.position.z+mt.TILE_SIZE*8),a.camera.lookAt(this.mesh.position),this.canPlace?this.mesh.parts.forEach(c=>c.mesh.material=this.greenMaterial):this.mesh.parts.forEach(c=>c.mesh.material=this.redMaterial)}}class Gb{constructor(e){Ge(this,"currentHealth");Ge(this,"fullHealth");Ge(this,"offset");Ge(this,"red");Ge(this,"green");this.currentHealth=e.currentHealth??e.fullHealth,this.fullHealth=e.fullHealth,this.offset=e.offset,this.red=new qd(new Fu({map:new Zd().load("./textures/red.png")})),this.green=new qd(new Fu({map:new Zd().load("./textures/green.png")})),this.update(this.currentHealth,e.position)}end(e){e.scene.remove(this.red),e.scene.remove(this.green)}start(e){e.scene.add(this.red),e.scene.add(this.green)}update(e,t){this.currentHealth=e;const i=1,a=.2;this.red.scale.set(i,a,a),this.red.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z),this.green.scale.set(i*Math.max(this.currentHealth/this.fullHealth,0),a,a),this.green.position.set(t.x+this.offset.x,t.y+this.offset.y,t.z+this.offset.z)}}class Hb extends ya{constructor({health:t,position:i}){const a=mt.TILE_SIZE/2,o=mt.TILE_SIZE*2,c=mt.TILE_SIZE/2,u=new O(i.x,mt.TILE_SIZE,i.y),d=un.createGem({size:o/4,color:new Ue(yt.LIGHT_GREEN),basicMaterial:!0}),h=new Ti({center:u,parts:[{mesh:un.createBox({color:new Ue(yt.DARK),depth:c,height:o/4,width:a}),offset:new O(0,-2*3/8,0)},{mesh:d,offset:new O(0,o*2/8,0)},{mesh:new zE(new Ue(yt.LIGHT_GREEN),20),offset:new O(0,o*2/8,0)}]});super({mesh:h});Ge(this,"gem");Ge(this,"hb");Ge(this,"fullHealth");Ge(this,"health");Ge(this,"position");this.gem=d,this.position=i,this.health=t,this.fullHealth=t,this.hb=new Gb({fullHealth:this.fullHealth,currentHealth:this.health,position:new O(5,3,5),offset:new O(0,o/2+mt.TILE_SIZE/2,0)})}afterSpawn(t,i){super.afterSpawn(t,i),this.hb.start(t)}beforeDeath(t,i,a){super.beforeDeath(t,i,a),this.hb.end(i)}update(t,i,a,o){super.update(t,i,a,o),this.gem.rotateX(i/1e3),this.gem.rotateY(i/1900),this.gem.rotateZ(i/500),this.hb.update(this.health,this.mesh.position.clone())}}class Vb extends rf{constructor(e){const t=()=>{const a=Math.floor(Math.random()*2)+2,o=Array.from({length:a},()=>un.createCone({radius:e.size/32,height:e.size/4,color:new Ue(yt.GREEN)})),c=2;o.forEach(h=>h.rotateOnAxis(new O(1,0,0),-Math.PI/(2*c)+Math.random()*Math.PI/c));const u=-e.size/2+Math.random()*e.size,d=-e.size/2+Math.random()*e.size;return o.map(h=>({mesh:h,offset:new O(u,e.size*19/32,d)}))},i=()=>{const a=un.createCone({radius:e.size/32,height:e.size/2,color:new Ue(yt.GREEN)}),o=un.createSphere({radius:e.size/32,color:Math.random()<.5?new Ue(yt.PINK):new Ue(yt.YELLOW)}),c=-e.size/2+Math.random()*e.size,u=-e.size/2+Math.random()*e.size;return[{mesh:a,offset:new O(c,e.size*10/16,u)},{mesh:o,offset:new O(c,e.size*13/16,u)}]};super({mesh:new Ti({center:e.position,parts:[{mesh:un.createBox({width:e.size,height:e.size/4,depth:e.size,color:e.color??new Ue(yt.DARK_GREEN)}),offset:new O(0,e.size*3/8,0)},{mesh:un.createBox({width:e.size,height:e.size*3/4,depth:e.size,color:new Ue(yt.DIRT)}),offset:new O(0,-e.size/8,0)},...t(),...t(),...Math.random()<.4?i():[]]})})}}const kb={buildWorldComponents:s=>{const e=[];for(let t=0;t<s.width;t++)for(let i=0;i<s.height;i++)e.push(new Vb({position:new O(t*s.tileSize,-s.tileSize/2,i*s.tileSize),size:s.tileSize,color:new Ue(yt.DARK_GREEN)}));return e}},Nr=class Nr extends Ab{constructor(){super({width:8,height:8});Ge(this,"spawnTimeout",0);Ge(this,"headQuarters");this.headQuarters=new Hb({position:new De(1,1),health:100})}onStart(){var c;const t=this.actorsGrid.length,i=((c=this.actorsGrid[0])==null?void 0:c.length)??0;this.scene.background=new Ue(yt.VOID),this.scene.add(new FE(new Ue(yt.WHITE),new Ue(yt.DARK_GREEN),3)),kb.buildWorldComponents({width:t,height:i,tileSize:Nr.TILE_SIZE}).forEach(u=>this.addComponent(u));const o=new De(Math.floor(t/2),Math.floor(i/2));this.addActor(new zb({pos:o}),o),this.addActor(this.headQuarters,this.headQuarters.position)}update(t,i){super.update(t,i);const a=this.spawnTimeout+i,o=Math.floor(a/Nr.SPAWN_TIMEOUT);this.spawnTimeout=a%Nr.SPAWN_TIMEOUT;for(let c=0;c<o;c++){const u=new De(this.actorsGrid.length-1,this.actorsGrid[0].length-1),d=new sf({pos:u,objective:this.headQuarters});this.addActor(d,u)}}};Ge(Nr,"SPAWN_TIMEOUT",3e3),Ge(Nr,"TILE_SIZE",1);let Hu=Nr;var Qo=(s=>(s.ALLY="ally",s.ENEMY="enemy",s))(Qo||{});const af=new Cb;af.addContainer("BF",new Hu);af.setContainer("BF");af.start();
