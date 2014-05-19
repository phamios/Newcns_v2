(function(){
var l,
    doAuth,
    h = [],
    valid = false,
    a = "",
    fwk = "http://platform.linkedin.com/js/framework?v=0.0.2000-RC8.34724-1412",
    xtnreg = /extensions=([^&]*)&?/,
    xtn = fwk.match(xtnreg),
    dotRegex = /\./g,
    starRegex = /\*/g,
    selfUrl = window.location.host.replace(/:\d+$/,"").toLowerCase();
window.IN = window.IN || {};
IN.ENV = IN.ENV || {};
IN.ENV.js = IN.ENV.js || {};
IN.ENV.js.xtn = IN.ENV.js.xtn || {};
/*
if !ANONYMOUS_USERSPACE
endif !ANONYMOUS_USERSPACE
*/
/*
# --------------------
# ----- FRAGMENT -----
# --------------------
*/
/*
if AUTH_USERSPACE
  else if FULL_USERSPACE || ANONYMOUS_USERSPACE
  */  
    l = IN.ENV.ui = IN.ENV.ui || {};
    l.popup_window_width = 600;
    l.window_width = 100;
    l = IN.ENV.auth = IN.ENV.auth || {};
  /*
  if !LIX_DISABLE_USERSPACE_OAUTH
    */
    l.oauth_token = "";
    l.oauth_expires_in = parseInt("0", 10);
  /*
    endif !LIX_DISABLE_USERSPACE_OAUTH
  */
    l.anonymous_token = "";
    l.anonymous_expires_in = parseInt("${ANONYMOUS_EXPIRES_IN}", 10);
    l.member_id = "";
    l.api_key = "";
    l = IN.ENV.api = IN.ENV.api || {};
    l.queue_interval = parseInt("300", 10);
    l = IN.ENV.url =  IN.ENV.url || {};
    l.xd_html = "https://platform.linkedin.com/js/xdrpc.html?v=0.0.2000-RC8.34724-1412";
    l.xd_us_html = "http://platform.linkedin.com/js/xdrpc.html?v=0.0.2000-RC8.34724-1412";
    l.api_xd_html = "https://api.linkedin.com/uas/js/xdrpc.html?v=0.0.2000-RC8.34724-1412";
    l.api = "https://api.linkedin.com/v1";
    l.login = "https://www.linkedin.com/uas/connect/user-signin";
    l.authorize = "https://www.linkedin.com/uas/oauth2/authorize?immediate=true";
    l.silent_auth_url = "${SILENT_AUTHORIZE_URL}";
    l.logout = "https://www.linkedin.com/uas/connect/logout?oauth_token={OAUTH_TOKEN}&api_key={API_KEY}&callback={CALLBACK}";
    l.userspace_renew = "https://www.linkedin.com/uas/js/authuserspace?v=0.0.2000-RC8.34724-1412&api_key={API_KEY}";
    l.base_js_url = "${DEFAULT_JS_URL}";
    l.analytics_us_url = "http://www.linkedin.com/analytics/?type=__ETYPE__&trackingInfo=__TRKINFO__&trk=__TINFO__&or=__ORIGIN__&wt=__WTYPE__";
    l.analytics_url = "http://www.linkedin.com/analytics/?type=__ETYPE__&trackingInfo=__TRKINFO__&trk=__TINFO__&or=__ORIGIN__&wt=__WTYPE__";

    l = IN.ENV.widget = IN.ENV.widget || {};
    l.leadgen_url = "http://www.linkedin.com/cws/leadgen";
    l.followmember_url = "http://www.linkedin.com/cws/followmember";
    l.settings_url = "http://www.linkedin.com/cws/settings";
    l.share_url = "http://www.linkedin.com/cws/share";
    l.share_counter_url = "http://www.linkedin.com/countserv/count/share";
    l.recommend_product_url = "http://www.linkedin.com/company/{COMPANY_ID}/product?prdId={PRODUCT_ID}";
    l.recommend_product_counter_url = "http://www.linkedin.com/company/api/recommendation/count?type=PDCT&id={PRODUCT_ID}&callback={CALLBACK}";
    l.company_url = "http://www.linkedin.com/cws/company/profile";
    l.member_profile_url = "http://www.linkedin.com/cws/member/public_profile";
    l.full_member_profile_url = "http://www.linkedin.com/cws/member/full_profile";
    l.referral_center_url= "http://www.linkedin.com/cws/referral";
    l.apply_url= "${WIDGET_APPLY_URL}";
    l.mail_url= "http://www.linkedin.com/cws/mail";
    l.apply_counter_url = "${WIDGET_APPLY_COUNTER_URL}";
    l.company_insider_url = "http://www.linkedin.com/cws/company/insider";
    l.sfdc_member_url = "https://www.linkedin.com/cws/sfdc/member";
    l.sfdc_company_url = "https://www.linkedin.com/cws/sfdc/company";
    l.sfdc_signal_url = "https://www.linkedin.com/cws/sfdc/signal";
    l.cap_recruiter_member_url = "${WIDGET_CAP_RECRUITER_MEMBER_URL}";
    l.jymbii_url = "http://www.linkedin.com/cws/jymbii";
    l.today_url = "http://www.linkedin.com/cws/today/today";
    l.followcompany_url = "http://www.linkedin.com/cws/followcompany";
    l.lilaform_url = "http://www.linkedin.com/cws/lilaform";
    l.alumni_facet_url = "http://www.linkedin.com/college/alumni-facet-extension";
    l.csap_beacon_url = "http://www.linkedin.com/cws/csap/beacon";
    l = IN.ENV.images = IN.ENV.images || {};
    l.sprite = "http://s.c.lnkd.licdn.com/scds/common/u/images/apps/connect/sprites/sprite_connect_v14.png";
    l.unsecure_xdswf = "http://platform.linkedin.com/js/easyXDM.swf?v=0.0.2000-RC8.34724-1412";
    l.secure_xdswf = "https://platform.linkedin.com/js/easyXDM.swf?v=0.0.2000-RC8.34724-1412";
    /*
     # Client Side Extensions
     # These are possibly in framework js and need to be loaded
     # via IN.$extensions() instead. This also helps ensure we're under
     # the 2048 limit for URL length in cases where a lot of extensions
     # are being loaded
     */
    if (xtn && xtn[1] && IN.$extensions) {
      IN.$extensions(decodeURIComponent(xtn[1]));
      fwk = fwk.replace(xtn[0], "").replace(/&*$/, "");
    }
/*
endif
*/
/*
if FULL_USERSPACE
endif
*/
/*
# --------------------
# ----- FRAGMENT -----
# --------------------
*/
/*
if !ANONYMOUS_USERSPACE
endif !ANONYMOUS_USERSPACE
*/
})();



/* ANONYMOUS USER_SPACE */

/* Version Path: dev */

/* res://connect-min/dev/connect/_open.njs */

/**
 * _open
 * this allows us to ensure proper scoping of our variables while allowing private globals
 */
/* begin anon function */
// sandbox undefined, catch a local reference to window and document (improves performance and minifcation)
(function(window, document, undefined) {
// private globals
var $_GLOBALS = {},                                         // a private global accessible throughout framework
    $_PATTERNS = {},                                        // global regex patterns
    $_STATISTICS = {},                                      // statistics container
    $_CONSTANTS = {},                                       // constants
    $_WIN = {},                                             // hold temporary references from the window scope for restoration
    $__I18N_STRINGS = {};                                   // i18n strings

(function() {
  // create a dummy STATISTICS interface
  // this will ensure that calls to the $_STATISTICS methods will not throw errors if the statistics module is not included
  var f = function(){};
  $_STATISTICS = {
    instance:     f,
    recordAction: f,
    recordEvent:  f,
    profile:      f,
    firePing:     f
  };
  
  // localize JSON and Sslac instances
  // preserve current window scoped objects to restore later
  // (we don't touch easyXDM here as we've already namespaced it in IN.Lib.easyXDM)
  $_WIN = {
    JSON:     window.JSON,
    Sslac:    window.Sslac
  };
  // remove all window references that we will touch internally
  for(var key in $_WIN) {
    if($_WIN.hasOwnProperty(key)) {
      window[key] = undefined;
    }
  }
})();

// TODO - this needs to be fixed on the UAS servlet. see PLFM-4913
// this is a temporary hack to make sure we are serving the sprite over https if secure=true
if(typeof IN !== "undefined" && IN.ENV && IN.ENV.js && IN.ENV.images && IN.ENV.js.secure) {
  IN.ENV.images.sprite='https://www.linkedin.com/scds/common/u/images/apps/connect/sprites/'+IN.ENV.images.sprite.split('/').pop();
}


/* res://connect-min/dev/connect/i18n.js */

var $_I18N_STRINGS={"apply_with_linkedin":(typeof("Apply with <strong>LinkedIn</strong>")!=="undefined")?"Apply with <strong>LinkedIn</strong>":"Apply with <strong>LinkedIn</strong>","get_hired_faster":(typeof("Get hired faster")!=="undefined")?"Get hired faster":"Get hired faster","youve_applied":(typeof("You've Applied!")!=="undefined")?"You've Applied!":"You've Applied!","sign_in":(typeof("Sign in")!=="undefined")?"Sign in":"Sign in","linkedin":(typeof("LinkedIn")!=="undefined")?"LinkedIn":"LinkedIn","sign_in_with_linkedin":(typeof("Sign in with LinkedIn")!=="undefined")?"Sign in with LinkedIn":"Sign in with LinkedIn","recommend":(typeof("Recommend")!=="undefined")?"Recommend":"Recommend","share":(typeof("Share")!=="undefined")?"Share":"Share"};
function $_I18N(a){return $_I18N_STRINGS[a]||["[[[",a,"]]]"].join("")
};

/* res://connect-min/dev/lib/json2.js */

if(!this.JSON){this.JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){k=rep[i];
if(typeof k==="string"){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());

/* res://connect-min/dev/lib/sslac.js */

(function(){var n=this,g="Sslac",m={},o=null,i=n[g];
n[g]=n[g]||{};
o=n[g];
function h(u,v,t){var s=function(){};
s.prototype=v.prototype;
u.prototype=new s();
u.prototype.constructor=u;
u.superclass=v.prototype;
if(v.prototype.constructor===Object.prototype.constructor){v.prototype.constructor=v
}if(t){for(var r in t){if(t.hasOwnProperty(t,r)){u.prototype[r]=t[r]
}}}}function j(w,s){var t,v,u=s||n,x=w.split(/\./),r=x.length;
for(t=0;
t<r;
t++){v=x[t];
if(t+1===r){return u
}u[v]=u[v]||{};
u=u[v]
}}function p(r){var t=r.split(/\./),s=t[t.length-1];
return s
}function k(r){m[r]=new b(r);
return m[r]
}function f(r){m[r]=new b(r,true);
return m[r]
}function d(t,s){var u=j(t);
var r=p(t);
u[r]=s
}function q(s){var t=j(s);
var r=p(s);
t[r]=t[r]||{}
}function e(s,r){return j(s,r)[p(s)]
}function l(r){return m[r]
}function c(){var r=o;
n[g]=i;
return r
}function a(){this.Identifier=function(){return{name:"Sslac.ClassObject",ext:""}
}
}function b(v,A){var z=null,t="",u=function(){},s={},x=j(v),y={};
function w(C,D){return function(){this.Parents.push(C);
var E=s[C].apply(D,arguments);
this.Parents.pop();
return E
}
}function r(C,D){return function(){this.Parents.push(C);
var E=D.apply(this,arguments);
this.Parents.pop();
return E
}
}function B(){var E=this,C=null,D=null;
this.Parents=[];
this.Parent=function(){var F=this.Parents[this.Parents.length-1],I=this.Identifier(),H=j(I.ext)[p(I.ext)],G=(z[F])?z[F]:(H.prototype&&H.prototype[F])?H.prototype[F]:function(){};
return G.apply(E,arguments)
};
s.Identifier=function(){return{name:v,ext:t}
};
for(C in s){if(s.hasOwnProperty(C)){this[C]=w(C,E)
}}this.Parents.push("constructor");
D=u.apply(this,arguments);
this.Parents.pop();
for(C in s){if(s.hasOwnProperty(C)){this[C]=w(C,E)
}}return D
}this.Implements=function(){var F=this;
function D(I){return function(){throw new Error("The interface defined requires "+I)
}
}for(var G=0,C=arguments.length;
G<C;
G++){if(Object.prototype.toString.call(arguments[G]).slice(8,-1).toLowerCase()==="array"){for(var E=0,H=arguments[G].length;
E<H;
E++){F.Implements(arguments[G][E])
}}else{if(arguments[G].indexOf(".")>=0){F.Implements(e(arguments[G]))
}else{if(!this.getMethod(arguments[G])){this.Method(arguments[G],D(arguments[G]))
}}}}return this
};
this.Constructor=function(C){u=C;
return this
};
this.getConstructor=function(){return u
};
this.Method=function(C,D){B.prototype[C]=r(C,D);
return this
};
this.getMethod=function(C){return B.prototype[C]
};
this.Static=function(C,D){B[C]=D;
y[C]=D;
return this
};
this.getStatic=function(C){return B[C]
};
this.Extends=function(C){var D=C;
if(typeof C==="string"){D=j(C)[p(C)];
t=C
}h(B,D);
z=B.superclass;
return this
};
this.getExtends=function(){return z
};
this.Extends(a);
if(A){x[p(v)]=y
}else{x[p(v)]=B
}}o.ClassObject=a;
o.Class=k;
o.Static=f;
o.Function=d;
o.Define=q;
o.namespaceOf=j;
o.nameOf=p;
o.valueOf=e;
o.definitionOf=l;
o.noConflict=c;
if(typeof module!=="undefined"&&module.exports){module.exports=o.noConflict()
}}());

/* res://connect-min/dev/lib/easyxdm.js */

(function(window,document,location,setTimeout,decodeURIComponent,encodeURIComponent){var global=this;
var channelId=Math.floor(Math.random()*10000);
var emptyFn=Function.prototype;
var reURI=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/;
var reParent=/[\-\w]+\/\.\.\//;
var reDoubleSlash=/([^:])\/\//g;
var reFunction=/^function/;
var namespace="";
var easyXDM={};
var _easyXDM=window.easyXDM;
var IFRAME_PREFIX="easyXDM_";
var HAS_NAME_PROPERTY_BUG;
var useHash=false;
var flashVersion;
var HAS_FLASH_THROTTLED_BUG;
var HAS_FUNCTION_RECAST_BUG=false
/*@cc_on || ((ScriptEngineMajorVersion()+(ScriptEngineMinorVersion()/10)) <= 5.8)@*/
;
function isCallableFunction(fn){if(typeof fn==="function"){return true
}if(HAS_FUNCTION_RECAST_BUG&&typeof fn==="object"&&typeof fn.call!=="undefined"&&typeof fn.apply!=="undefined"){try{return reFunction.test(fn.toString())
}catch(e){return false
}}return false
}function isHostMethod(object,property){var t=typeof object[property];
return t=="function"||(!!(t=="object"&&object[property]))||t=="unknown"
}function isHostObject(object,property){return !!(typeof(object[property])=="object"&&object[property])
}function isArray(o){return Object.prototype.toString.call(o)==="[object Array]"
}function hasFlash(){var name="Shockwave Flash",mimeType="application/x-shockwave-flash";
if(!undef(navigator.plugins)&&typeof navigator.plugins[name]=="object"){var description=navigator.plugins[name].description;
if(description&&!undef(navigator.mimeTypes)&&navigator.mimeTypes[mimeType]&&navigator.mimeTypes[mimeType].enabledPlugin){flashVersion=description.match(/\d+/g)
}}if(!flashVersion){var flash;
try{flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
flashVersion=Array.prototype.slice.call(flash.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1);
flash=null
}catch(notSupportedException){}}if(!flashVersion){return false
}var major=parseInt(flashVersion[0],10),minor=parseInt(flashVersion[1],10);
HAS_FLASH_THROTTLED_BUG=major>9&&minor>0;
return true
}var on,un;
if(isHostMethod(window,"addEventListener")){on=function(target,type,listener){target.addEventListener(type,listener,false)
};
un=function(target,type,listener){target.removeEventListener(type,listener,false)
}
}else{if(isHostMethod(window,"attachEvent")){on=function(object,sEvent,fpNotify){object.attachEvent("on"+sEvent,fpNotify)
};
un=function(object,sEvent,fpNotify){object.detachEvent("on"+sEvent,fpNotify)
}
}else{throw new Error("Browser not supported")
}}var domIsReady=false,domReadyQueue=[],readyState;
if("readyState" in document){readyState=document.readyState;
domIsReady=readyState=="complete"||(~navigator.userAgent.indexOf("AppleWebKit/")&&(readyState=="loaded"||readyState=="interactive"))
}else{domIsReady=!!document.body
}function dom_onReady(){if(domIsReady){return
}domIsReady=true;
for(var i=0;
i<domReadyQueue.length;
i++){domReadyQueue[i]()
}domReadyQueue.length=0
}if(!domIsReady){if(isHostMethod(window,"addEventListener")){on(document,"DOMContentLoaded",dom_onReady)
}else{on(document,"readystatechange",function(){if(document.readyState=="complete"){dom_onReady()
}});
if(document.documentElement.doScroll&&window===top){var doScrollCheck=function(){if(domIsReady){return
}try{document.documentElement.doScroll("left")
}catch(e){setTimeout(doScrollCheck,1);
return
}dom_onReady()
};
doScrollCheck()
}}on(window,"load",dom_onReady)
}function whenReady(fn,scope){if(domIsReady){fn.call(scope);
return
}domReadyQueue.push(function(){fn.call(scope)
})
}function getParentObject(){var obj=parent;
if(namespace!==""){for(var i=0,ii=namespace.split(".");
i<ii.length;
i++){obj=obj[ii[i]]
}}return obj.easyXDM
}function noConflict(ns){window.easyXDM=_easyXDM;
namespace=ns;
if(namespace){IFRAME_PREFIX="easyXDM_"+namespace.replace(".","_")+"_"
}return easyXDM
}function getDomainName(url){return url.match(reURI)[3]
}function getPort(url){return url.match(reURI)[4]||""
}function getLocation(url){var m=url.toLowerCase().match(reURI);
var proto=m[2],domain=m[3],port=m[4]||"";
if((proto=="http:"&&port==":80")||(proto=="https:"&&port==":443")){port=""
}return proto+"//"+domain+port
}function resolveUrl(url){url=url.replace(reDoubleSlash,"$1/");
if(!url.match(/^(http||https):\/\//)){var path=(url.substring(0,1)==="/")?"":location.pathname;
if(path.substring(path.length-1)!=="/"){path=path.substring(0,path.lastIndexOf("/")+1)
}url=location.protocol+"//"+location.host+path+url
}while(reParent.test(url)){url=url.replace(reParent,"")
}return url
}function appendQueryParameters(url,parameters){var hash="",indexOf=url.indexOf("#");
if(indexOf!==-1){hash=url.substring(indexOf);
url=url.substring(0,indexOf)
}var q=[];
for(var key in parameters){if(parameters.hasOwnProperty(key)){q.push(key+"="+encodeURIComponent(parameters[key]))
}}return url+(useHash?"#":(url.indexOf("?")==-1?"?":"&"))+q.join("&")+hash
}var query=(function(input){input=input.substring(1).split("&");
var data={},pair,i=input.length;
while(i--){pair=input[i].split("=");
data[pair[0]]=decodeURIComponent(pair[1])
}return data
}(/xdm_e=/.test(location.search)?location.search:location.hash));
function undef(v){return typeof v==="undefined"
}var getJSON=function(){var cached={};
var obj={a:[1,2,3]},json='{"a":[1,2,3]}';
if(typeof JSON!="undefined"&&typeof JSON.stringify==="function"&&JSON.stringify(obj).replace((/\s/g),"")===json){return JSON
}if(Object.toJSON){if(Object.toJSON(obj).replace((/\s/g),"")===json){cached.stringify=Object.toJSON
}}if(typeof String.prototype.evalJSON==="function"){obj=json.evalJSON();
if(obj.a&&obj.a.length===3&&obj.a[2]===3){cached.parse=function(str){return str.evalJSON()
}
}}if(cached.stringify&&cached.parse){getJSON=function(){return cached
};
return cached
}return null
};
function apply(destination,source,noOverwrite){var member;
for(var prop in source){if(source.hasOwnProperty(prop)){if(prop in destination){member=source[prop];
if(typeof member==="object"){apply(destination[prop],member,noOverwrite)
}else{if(!noOverwrite){destination[prop]=source[prop]
}}}else{destination[prop]=source[prop]
}}}return destination
}function testForNamePropertyBug(){var form=document.body.appendChild(document.createElement("form")),input=form.appendChild(document.createElement("input"));
input.name=IFRAME_PREFIX+"TEST"+channelId;
HAS_NAME_PROPERTY_BUG=input!==form.elements[input.name];
document.body.removeChild(form)
}function createFrame(config){if(undef(HAS_NAME_PROPERTY_BUG)){testForNamePropertyBug()
}var frame;
if(HAS_NAME_PROPERTY_BUG){frame=document.createElement('<iframe name="'+config.props.name+'"/>')
}else{frame=document.createElement("IFRAME");
frame.name=config.props.name
}frame.id=frame.name=config.props.name;
delete config.props.name;
if(typeof config.container=="string"){config.container=document.getElementById(config.container)
}if(!config.container){apply(frame.style,{position:"absolute",top:"-2000px",left:"0px"});
config.container=document.body
}var src=config.props.src;
config.props.src="javascript:false";
apply(frame,config.props);
frame.border=frame.frameBorder=0;
frame.allowTransparency=true;
config.container.appendChild(frame);
if(config.onLoad){on(frame,"load",config.onLoad)
}if(config.usePost){var form=config.container.appendChild(document.createElement("form")),input;
form.target=frame.name;
form.action=src;
form.method="POST";
if(typeof(config.usePost)==="object"){for(var i in config.usePost){if(config.usePost.hasOwnProperty(i)){if(HAS_NAME_PROPERTY_BUG){input=document.createElement('<input name="'+i+'"/>')
}else{input=document.createElement("INPUT");
input.name=i
}input.value=config.usePost[i];
form.appendChild(input)
}}}form.submit();
form.parentNode.removeChild(form)
}else{frame.src=src
}config.props.src=src;
return frame
}function checkAcl(acl,domain){if(typeof acl=="string"){acl=[acl]
}var re,i=acl.length;
while(i--){re=acl[i];
re=new RegExp(re.substr(0,1)=="^"?re:("^"+re.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"));
if(re.test(domain)){return true
}}return false
}function prepareTransportStack(config){var protocol=config.protocol,stackEls;
config.isHost=config.isHost||undef(query.xdm_p);
useHash=config.hash||false;
if(!config.props){config.props={}
}if(!config.isHost){config.channel=query.xdm_c.replace(/["'<>\\]/g,"");
config.secret=query.xdm_s;
config.remote=query.xdm_e.replace(/["'<>\\]/g,"");
protocol=query.xdm_p;
if(config.acl&&!checkAcl(config.acl,config.remote)){throw new Error("Access denied for "+config.remote)
}}else{config.remote=resolveUrl(config.remote);
config.channel=config.channel||"default"+channelId++;
config.secret=Math.random().toString(16).substring(2);
if(undef(protocol)){if(getLocation(location.href)==getLocation(config.remote)){protocol="4"
}else{if(isHostMethod(window,"postMessage")||isHostMethod(document,"postMessage")){protocol="1"
}else{if(config.swf&&isHostMethod(window,"ActiveXObject")&&hasFlash()){protocol="6"
}else{if(navigator.product==="Gecko"&&"frameElement" in window&&navigator.userAgent.indexOf("WebKit")==-1){protocol="5"
}else{if(config.remoteHelper){protocol="2"
}else{protocol="0"
}}}}}}}config.protocol=protocol;
switch(protocol){case"0":apply(config,{interval:100,delay:2000,useResize:true,useParent:false,usePolling:false},true);
if(config.isHost){if(!config.local){var domain=location.protocol+"//"+location.host,images=document.body.getElementsByTagName("img"),image;
var i=images.length;
while(i--){image=images[i];
if(image.src.substring(0,domain.length)===domain){config.local=image.src;
break
}}if(!config.local){config.local=window
}}var parameters={xdm_c:config.channel,xdm_p:0};
if(config.local===window){config.usePolling=true;
config.useParent=true;
config.local=location.protocol+"//"+location.host+location.pathname+location.search;
parameters.xdm_e=config.local;
parameters.xdm_pa=1
}else{parameters.xdm_e=resolveUrl(config.local)
}if(config.container){config.useResize=false;
parameters.xdm_po=1
}config.remote=appendQueryParameters(config.remote,parameters)
}else{apply(config,{channel:query.xdm_c,remote:query.xdm_e,useParent:!undef(query.xdm_pa),usePolling:!undef(query.xdm_po),useResize:config.useParent?false:config.useResize})
}stackEls=[new easyXDM.stack.HashTransport(config),new easyXDM.stack.ReliableBehavior({}),new easyXDM.stack.QueueBehavior({encode:true,maxLength:4000-config.remote.length}),new easyXDM.stack.VerifyBehavior({initiate:config.isHost})];
break;
case"1":stackEls=[new easyXDM.stack.PostMessageTransport(config)];
break;
case"2":config.remoteHelper=resolveUrl(config.remoteHelper);
stackEls=[new easyXDM.stack.NameTransport(config),new easyXDM.stack.QueueBehavior(),new easyXDM.stack.VerifyBehavior({initiate:config.isHost})];
break;
case"3":stackEls=[new easyXDM.stack.NixTransport(config)];
break;
case"4":stackEls=[new easyXDM.stack.SameOriginTransport(config)];
break;
case"5":stackEls=[new easyXDM.stack.FrameElementTransport(config)];
break;
case"6":if(!flashVersion){hasFlash()
}stackEls=[new easyXDM.stack.FlashTransport(config)];
break
}stackEls.push(new easyXDM.stack.QueueBehavior({lazy:config.lazy,remove:true}));
return stackEls
}function chainStack(stackElements){var stackEl,defaults={incoming:function(message,origin){this.up.incoming(message,origin)
},outgoing:function(message,recipient){this.down.outgoing(message,recipient)
},callback:function(success){this.up.callback(success)
},init:function(){this.down.init()
},destroy:function(){this.down.destroy()
}};
for(var i=0,len=stackElements.length;
i<len;
i++){stackEl=stackElements[i];
apply(stackEl,defaults,true);
if(i!==0){stackEl.down=stackElements[i-1]
}if(i!==len-1){stackEl.up=stackElements[i+1]
}}return stackEl
}function removeFromStack(element){element.up.down=element.down;
element.down.up=element.up;
element.up=element.down=null
}apply(easyXDM,{version:"2.4.18-li.3",query:query,stack:{},apply:apply,getJSONObject:getJSON,whenReady:whenReady,noConflict:noConflict});
easyXDM.DomHelper={on:on,un:un,requiresJSON:function(path){if(!isHostObject(window,"JSON")){document.write("<"+'script type="text/javascript" src="'+path+'"><'+"/script>")
}}};
(function(){var _map={};
easyXDM.Fn={set:function(name,fn){_map[name]=fn
},get:function(name,del){var fn=_map[name];
if(del){delete _map[name]
}return fn
}}
}());
easyXDM.Socket=function(config){var stack=chainStack(prepareTransportStack(config).concat([{incoming:function(message,origin){config.onMessage(message,origin)
},callback:function(success){if(config.onReady){config.onReady(success)
}}}])),recipient=getLocation(config.remote);
this.origin=getLocation(config.remote);
this.destroy=function(){stack.destroy()
};
this.postMessage=function(message){stack.outgoing(message,recipient)
};
stack.init()
};
easyXDM.Rpc=function(config,jsonRpcConfig){if(jsonRpcConfig.local){for(var method in jsonRpcConfig.local){if(jsonRpcConfig.local.hasOwnProperty(method)){var member=jsonRpcConfig.local[method];
if(typeof member==="function"){jsonRpcConfig.local[method]={method:member}
}}}}var stack=chainStack(prepareTransportStack(config).concat([new easyXDM.stack.RpcBehavior(this,jsonRpcConfig),{callback:function(success){if(config.onReady){config.onReady(success)
}}}]));
this.origin=getLocation(config.remote);
this.destroy=function(){stack.destroy()
};
stack.init()
};
easyXDM.stack.SameOriginTransport=function(config){var pub,frame,send,targetOrigin;
return(pub={outgoing:function(message,domain,fn){send(message);
if(fn){fn()
}},destroy:function(){if(frame){frame.parentNode.removeChild(frame);
frame=null
}},onDOMReady:function(){targetOrigin=getLocation(config.remote);
if(config.isHost){apply(config.props,{src:appendQueryParameters(config.remote,{xdm_e:location.protocol+"//"+location.host+location.pathname,xdm_c:config.channel,xdm_p:4}),name:IFRAME_PREFIX+config.channel+"_provider"});
frame=createFrame(config);
easyXDM.Fn.set(config.channel,function(sendFn){send=sendFn;
setTimeout(function(){pub.up.callback(true)
},0);
return function(msg){pub.up.incoming(msg,targetOrigin)
}
})
}else{send=getParentObject().Fn.get(config.channel,true)(function(msg){pub.up.incoming(msg,targetOrigin)
});
setTimeout(function(){pub.up.callback(true)
},0)
}},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.FlashTransport=function(config){var pub,frame,send,targetOrigin,swf,swfContainer;
function onMessage(message,origin){setTimeout(function(){pub.up.incoming(message,targetOrigin)
},0)
}function addSwf(domain){var url=config.swf+"?host="+config.isHost;
var id="easyXDM_swf_"+Math.floor(Math.random()*10000);
easyXDM.Fn.set("flash_loaded"+domain.replace(/[\-.]/g,"_"),function(){easyXDM.stack.FlashTransport[domain].swf=swf=swfContainer.firstChild;
var queue=easyXDM.stack.FlashTransport[domain].queue;
for(var i=0;
i<queue.length;
i++){queue[i]()
}queue.length=0
});
if(config.swfContainer){swfContainer=(typeof config.swfContainer=="string")?document.getElementById(config.swfContainer):config.swfContainer
}else{swfContainer=document.createElement("div");
apply(swfContainer.style,HAS_FLASH_THROTTLED_BUG&&config.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0});
document.body.appendChild(swfContainer)
}var flashVars="callback=flash_loaded"+encodeURIComponent(domain.replace(/[\-.]/g,"_"))+"&proto="+global.location.protocol+"&domain="+encodeURIComponent(getDomainName(global.location.href))+"&port="+encodeURIComponent(getPort(global.location.href))+"&ns="+encodeURIComponent(namespace);
swfContainer.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+id+"' data='"+url+"'>"+"<param name='allowScriptAccess' value='always'></param>"+"<param name='wmode' value='transparent'>"+"<param name='movie' value='"+url+"'></param>"+"<param name='flashvars' value='"+flashVars+"'></param>"+"<embed type='application/x-shockwave-flash' FlashVars='"+flashVars+"' allowScriptAccess='always' wmode='transparent' src='"+url+"' height='1' width='1'></embed>"+"</object>"
}return(pub={outgoing:function(message,domain,fn){swf.postMessage(config.channel,message.toString());
if(fn){fn()
}},destroy:function(){try{swf.destroyChannel(config.channel)
}catch(e){}swf=null;
if(frame){frame.parentNode.removeChild(frame);
frame=null
}},onDOMReady:function(){targetOrigin=config.remote;
easyXDM.Fn.set("flash_"+config.channel+"_init",function(){setTimeout(function(){pub.up.callback(true)
})
});
easyXDM.Fn.set("flash_"+config.channel+"_onMessage",onMessage);
config.swf=resolveUrl(config.swf);
var swfdomain=getDomainName(config.swf);
var fn=function(){easyXDM.stack.FlashTransport[swfdomain].init=true;
swf=easyXDM.stack.FlashTransport[swfdomain].swf;
swf.createChannel(config.channel,config.secret,getLocation(config.remote),config.isHost);
if(config.isHost){if(HAS_FLASH_THROTTLED_BUG&&config.swfNoThrottle){apply(config.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"})
}apply(config.props,{src:appendQueryParameters(config.remote,{xdm_e:getLocation(location.href),xdm_c:config.channel,xdm_p:6,xdm_s:config.secret}),name:IFRAME_PREFIX+config.channel+"_provider"});
frame=createFrame(config)
}};
if(easyXDM.stack.FlashTransport[swfdomain]&&easyXDM.stack.FlashTransport[swfdomain].init){fn()
}else{if(!easyXDM.stack.FlashTransport[swfdomain]){easyXDM.stack.FlashTransport[swfdomain]={queue:[fn]};
addSwf(swfdomain)
}else{easyXDM.stack.FlashTransport[swfdomain].queue.push(fn)
}}},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.PostMessageTransport=function(config){var pub,frame,callerWindow,targetOrigin;
function _getOrigin(event){if(event.origin){return getLocation(event.origin)
}if(event.uri){return getLocation(event.uri)
}if(event.domain){return location.protocol+"//"+event.domain
}throw"Unable to retrieve the origin of the event"
}function _window_onMessage(event){var origin=_getOrigin(event);
if(origin==targetOrigin&&event.data.substring(0,config.channel.length+1)==config.channel+" "){pub.up.incoming(event.data.substring(config.channel.length+1),origin)
}}return(pub={outgoing:function(message,domain,fn){callerWindow.postMessage(config.channel+" "+message,domain||targetOrigin);
if(fn){fn()
}},destroy:function(){un(window,"message",_window_onMessage);
if(frame){callerWindow=null;
frame.parentNode.removeChild(frame);
frame=null
}},onDOMReady:function(){targetOrigin=getLocation(config.remote);
if(config.isHost){var waitForReady=function(event){if(event.data==config.channel+"-ready"){callerWindow=("postMessage" in frame.contentWindow)?frame.contentWindow:frame.contentWindow.document;
un(window,"message",waitForReady);
on(window,"message",_window_onMessage);
setTimeout(function(){pub.up.callback(true)
},0)
}};
on(window,"message",waitForReady);
apply(config.props,{src:appendQueryParameters(config.remote,{xdm_e:getLocation(location.href),xdm_c:config.channel,xdm_p:1}),name:IFRAME_PREFIX+config.channel+"_provider"});
frame=createFrame(config)
}else{on(window,"message",_window_onMessage);
callerWindow=("postMessage" in window.parent)?window.parent:window.parent.document;
callerWindow.postMessage(config.channel+"-ready",targetOrigin);
setTimeout(function(){pub.up.callback(true)
},0)
}},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.FrameElementTransport=function(config){var pub,frame,send,targetOrigin;
return(pub={outgoing:function(message,domain,fn){send.call(this,message);
if(fn){fn()
}},destroy:function(){if(frame){frame.parentNode.removeChild(frame);
frame=null
}},onDOMReady:function(){targetOrigin=getLocation(config.remote);
if(config.isHost){apply(config.props,{src:appendQueryParameters(config.remote,{xdm_e:getLocation(location.href),xdm_c:config.channel,xdm_p:5}),name:IFRAME_PREFIX+config.channel+"_provider"});
frame=createFrame(config);
frame.fn=function(sendFn){delete frame.fn;
send=sendFn;
setTimeout(function(){pub.up.callback(true)
},0);
return function(msg){pub.up.incoming(msg,targetOrigin)
}
}
}else{if(document.referrer&&getLocation(document.referrer)!=query.xdm_e){window.top.location=query.xdm_e
}send=window.frameElement.fn(function(msg){pub.up.incoming(msg,targetOrigin)
});
pub.up.callback(true)
}},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.NameTransport=function(config){var pub;
var isHost,callerWindow,remoteWindow,readyCount,callback,remoteOrigin,remoteUrl;
function _sendMessage(message){var url=config.remoteHelper+(isHost?"#_3":"#_2")+config.channel;
callerWindow.contentWindow.sendMessage(message,url)
}function _onReady(){if(isHost){if(++readyCount===2||!isHost){pub.up.callback(true)
}}else{_sendMessage("ready");
pub.up.callback(true)
}}function _onMessage(message){pub.up.incoming(message,remoteOrigin)
}function _onLoad(){if(callback){setTimeout(function(){callback(true)
},0)
}}return(pub={outgoing:function(message,domain,fn){callback=fn;
_sendMessage(message)
},destroy:function(){callerWindow.parentNode.removeChild(callerWindow);
callerWindow=null;
if(isHost){remoteWindow.parentNode.removeChild(remoteWindow);
remoteWindow=null
}},onDOMReady:function(){isHost=config.isHost;
readyCount=0;
remoteOrigin=getLocation(config.remote);
config.local=resolveUrl(config.local);
if(isHost){easyXDM.Fn.set(config.channel,function(message){if(isHost&&message==="ready"){easyXDM.Fn.set(config.channel,_onMessage);
_onReady()
}});
remoteUrl=appendQueryParameters(config.remote,{xdm_e:config.local,xdm_c:config.channel,xdm_p:2});
apply(config.props,{src:remoteUrl+"#"+config.channel,name:IFRAME_PREFIX+config.channel+"_provider"});
remoteWindow=createFrame(config)
}else{config.remoteHelper=config.remote;
easyXDM.Fn.set(config.channel,_onMessage)
}var onLoad=function(){var w=callerWindow||this;
un(w,"load",onLoad);
easyXDM.Fn.set(config.channel+"_load",_onLoad);
(function test(){if(typeof w.contentWindow.sendMessage=="function"){_onReady()
}else{setTimeout(test,50)
}}())
};
callerWindow=createFrame({props:{src:config.local+"#_4"+config.channel},onLoad:onLoad})
},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.HashTransport=function(config){var pub;
var me=this,isHost,_timer,pollInterval,_lastMsg,_msgNr,_listenerWindow,_callerWindow;
var useParent,_remoteOrigin;
function _sendMessage(message){if(!_callerWindow){return
}var url=config.remote+"#"+(_msgNr++)+"_"+message;
((isHost||!useParent)?_callerWindow.contentWindow:_callerWindow).location=url
}function _handleHash(hash){_lastMsg=hash;
pub.up.incoming(_lastMsg.substring(_lastMsg.indexOf("_")+1),_remoteOrigin)
}function _pollHash(){if(!_listenerWindow){return
}var href=_listenerWindow.location.href,hash="",indexOf=href.indexOf("#");
if(indexOf!=-1){hash=href.substring(indexOf)
}if(hash&&hash!=_lastMsg){_handleHash(hash)
}}function _attachListeners(){_timer=setInterval(_pollHash,pollInterval)
}return(pub={outgoing:function(message,domain){_sendMessage(message)
},destroy:function(){window.clearInterval(_timer);
if(isHost||!useParent){_callerWindow.parentNode.removeChild(_callerWindow)
}_callerWindow=null
},onDOMReady:function(){isHost=config.isHost;
pollInterval=config.interval;
_lastMsg="#"+config.channel;
_msgNr=0;
useParent=config.useParent;
_remoteOrigin=getLocation(config.remote);
if(isHost){apply(config.props,{src:config.remote,name:IFRAME_PREFIX+config.channel+"_provider"});
if(useParent){config.onLoad=function(){_listenerWindow=window;
_attachListeners();
pub.up.callback(true)
}
}else{var tries=0,max=config.delay/50;
(function getRef(){if(++tries>max){throw new Error("Unable to reference listenerwindow")
}try{_listenerWindow=_callerWindow.contentWindow.frames[IFRAME_PREFIX+config.channel+"_consumer"]
}catch(ex){}if(_listenerWindow){_attachListeners();
pub.up.callback(true)
}else{setTimeout(getRef,50)
}}())
}_callerWindow=createFrame(config)
}else{_listenerWindow=window;
_attachListeners();
if(useParent){_callerWindow=parent;
pub.up.callback(true)
}else{apply(config,{props:{src:config.remote+"#"+config.channel+new Date(),name:IFRAME_PREFIX+config.channel+"_consumer"},onLoad:function(){pub.up.callback(true)
}});
_callerWindow=createFrame(config)
}}},init:function(){whenReady(pub.onDOMReady,pub)
}})
};
easyXDM.stack.ReliableBehavior=function(config){var pub,callback;
var idOut=0,idIn=0,currentMessage="";
return(pub={incoming:function(message,origin){var indexOf=message.indexOf("_"),ack=message.substring(0,indexOf).split(",");
message=message.substring(indexOf+1);
if(ack[0]==idOut){currentMessage="";
if(callback){callback(true);
callback=null
}}if(message.length>0){pub.down.outgoing(ack[1]+","+idOut+"_"+currentMessage,origin);
if(idIn!=ack[1]){idIn=ack[1];
pub.up.incoming(message,origin)
}}},outgoing:function(message,origin,fn){currentMessage=message;
callback=fn;
pub.down.outgoing(idIn+","+(++idOut)+"_"+message,origin)
}})
};
easyXDM.stack.QueueBehavior=function(config){var pub,queue=[],waiting=true,incoming="",destroying,maxLength=0,lazy=false,doFragment=false;
function dispatch(){if(config.remove&&queue.length===0){removeFromStack(pub);
return
}if(waiting||queue.length===0||destroying){return
}waiting=true;
var message=queue.shift();
pub.down.outgoing(message.data,message.origin,function(success){waiting=false;
if(message.callback){setTimeout(function(){message.callback(success)
},0)
}dispatch()
})
}return(pub={init:function(){if(undef(config)){config={}
}if(config.maxLength){maxLength=config.maxLength;
doFragment=true
}if(config.lazy){lazy=true
}else{pub.down.init()
}},callback:function(success){waiting=false;
var up=pub.up;
dispatch();
up.callback(success)
},incoming:function(message,origin){if(doFragment){var indexOf=message.indexOf("_"),seq=parseInt(message.substring(0,indexOf),10);
incoming+=message.substring(indexOf+1);
if(seq===0){if(config.encode){incoming=decodeURIComponent(incoming)
}pub.up.incoming(incoming,origin);
incoming=""
}}else{pub.up.incoming(message,origin)
}},outgoing:function(message,origin,fn){if(config.encode){message=encodeURIComponent(message)
}var fragments=[],fragment;
if(doFragment){while(message.length!==0){fragment=message.substring(0,maxLength);
message=message.substring(fragment.length);
fragments.push(fragment)
}while((fragment=fragments.shift())){queue.push({data:fragments.length+"_"+fragment,origin:origin,callback:fragments.length===0?fn:null})
}}else{queue.push({data:message,origin:origin,callback:fn})
}if(lazy){pub.down.init()
}else{dispatch()
}},destroy:function(){destroying=true;
pub.down.destroy()
}})
};
easyXDM.stack.VerifyBehavior=function(config){var pub,mySecret,theirSecret,verified=false;
function startVerification(){mySecret=Math.random().toString(16).substring(2);
pub.down.outgoing(mySecret)
}return(pub={incoming:function(message,origin){var indexOf=message.indexOf("_");
if(indexOf===-1){if(message===mySecret){pub.up.callback(true)
}else{if(!theirSecret){theirSecret=message;
if(!config.initiate){startVerification()
}pub.down.outgoing(message)
}}}else{if(message.substring(0,indexOf)===theirSecret){pub.up.incoming(message.substring(indexOf+1),origin)
}}},outgoing:function(message,origin,fn){pub.down.outgoing(mySecret+"_"+message,origin,fn)
},callback:function(success){if(config.initiate){startVerification()
}}})
};
easyXDM.stack.RpcBehavior=function(proxy,config){var pub,serializer=config.serializer||getJSON();
var _callbackCounter=0,_callbacks={};
function _send(data){data.jsonrpc="2.0";
pub.down.outgoing(serializer.stringify(data))
}function _createMethod(definition,method){var slice=Array.prototype.slice;
return function(){var l=arguments.length,callback,message={method:method};
if(l>0&&(typeof arguments[l-1]==="function"||isCallableFunction(arguments[l-1]))){if(l>1&&(typeof arguments[l-2]==="function"||isCallableFunction(arguments[l-2]))){callback={success:arguments[l-2],error:arguments[l-1]};
message.params=slice.call(arguments,0,l-2)
}else{callback={success:arguments[l-1]};
message.params=slice.call(arguments,0,l-1)
}_callbacks[""+(++_callbackCounter)]=callback;
message.id=_callbackCounter
}else{message.params=slice.call(arguments,0)
}if(definition.namedParams&&message.params.length===1){message.params=message.params[0]
}_send(message)
}
}function _executeMethod(method,id,fn,params){if(!fn){if(id){_send({id:id,error:{code:-32601,message:"Procedure not found."}})
}return
}var success,error;
if(id){success=function(result){success=emptyFn;
_send({id:id,result:result})
};
error=function(message,data){error=emptyFn;
var msg={id:id,error:{code:-32099,message:message}};
if(data){msg.error.data=data
}_send(msg)
}
}else{success=error=emptyFn
}if(!isArray(params)){params=[params]
}try{var result=fn.method.apply(fn.scope,params.concat([success,error]));
if(!undef(result)){success(result)
}}catch(ex1){error(ex1.message)
}}return(pub={incoming:function(message,origin){var data=serializer.parse(message);
if(data.method){if(config.handle){config.handle(data,_send)
}else{_executeMethod(data.method,data.id,config.local[data.method],data.params)
}}else{var callback=_callbacks[data.id];
if(data.error){if(callback.error){callback.error(data.error)
}}else{if(callback.success){callback.success(data.result)
}}delete _callbacks[data.id]
}},init:function(){if(config.remote){for(var method in config.remote){if(config.remote.hasOwnProperty(method)){proxy[method]=_createMethod(config.remote[method],method)
}}}pub.down.init()
},destroy:function(){for(var method in config.remote){if(config.remote.hasOwnProperty(method)&&proxy.hasOwnProperty(method)){delete proxy[method]
}}pub.down.destroy()
}})
};
global.easyXDM=easyXDM
})(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent);

/* res://connect-min/dev/includes/constants.js */

(function(){$_CONSTANTS={events:{normal:"normal",success:"success",unSuccess:"unSuccess",click:"click",mouseOver:"mouseOver",mouseOut:"mouseOut",mouseDown:"mouseDown",hover:"hover",frameworkLoaded:"frameworkLoaded",systemReady:"systemReady",auth:"auth",logout:"logout",refresh:"refresh",resize:"resize",noAuth:"noAuth",beforeUnload:"beforeunload",unload:"unload",load:"load"},states:{normal:"normal",success:"success",error:"error",unSuccess:"unSuccess",hovered:"hovered",clicked:"clicked",down:"down",hidden:"hidden",visible:"visible",pending:"pending",ready:"ready"},prefixes:{klass:".",id:"#",psuedo:":",IN:"IN-"},suffixes:{important:" !important;"},stats:{trkKeyed:"cws-fwk-keyed",trkAnon:"cws-fwk-anonymous",eType:"widgetJSTracking",wType:"framework"},conversions:{times:{msPerSecond:1000,secondsPerMinute:60,minutesPerHour:60,hoursPerDay:24,daysPerWeek:7,weeksPerMonth:4.34812003968254,monthsPerYear:12}},types:{object:"object",string:"string",func:"function",number:"number",undef:"undefined",bool:"boolean",integer:"integer",list:"list",regex:"regex",html:"html",uiObject:"uiObject",globalEvent:"globalEvent"},formats:{click:"click",hover:"hover",inline:"inline"},modes:{hovercard:"hovercard",embedded:"embedded",inline:"inline",invisible:"invisible",modal:"modal",popup:"popup",listener:"listener",auto:"auto",window:"window",inlineIframe:"inline-iframe",iframe:"iframe"},resources:{spinner16x16:"data:image/gif;base64,R0lGODlhEAAQAKIAAP///+bm5s7OzpycnGNjYwAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgAAACwAAAAADgAQAAADNAi6MMNQOReBEG0CQta92cZ11seMZBlxClh55lu6Mi23GBQEsL3vOBDwx8MBiMei7ndLQhIAIfkEBQoAAAAsAgAAAA4ADgAAAyUIqiL7rzUIpRuDsouzVp33AdgIEYQJoKjJpi4cBOo8mzaN62MCACH5BAUKAAAALAAAAgAQAAwAAAMmCLoMIi2q92Sj0LK6QtDAMACeZ4li+UnoaGoiqBCEPNO1jOc6nwAAIfkEBQoAAAAsAgACAA4ADgAAAyUIEdD+ajH45KRu4Y2F4I3ngeJHmtswgICqYgTRulQcz7DN3lQCACH5BAUKAAAALAIAAAAMABAAAAMmCKoR+6w5GBtd9urNu/8XQVCCAIjiU5boOAzAaqbvG5tPDWv2kwAAIfkEBQoAAAAsAAACAA4ADgAAAyUIugwRLb4X2YR1UUBIXl33ceFImsswmKo6tqsgZK4sj/aM60sCACH5BAUKAAAALAAAAgAQAAwAAAMmCEqk/o8xSIFsFc7sxuBAEACel4li+VXoaHLiIwigM881cNM5DiYAIfkECQoAAAAsAAAAABAAEAAAAygIukDEkDkX1xhtVnBv3lwHMt4ICIKpoKjKpi6sjkEw17WK2zo//5EEADs="},sprite:{width:270,height:891}};
var a=$_CONSTANTS.conversions.times;
a.secondsPerHour=a.secondsPerMinute*a.minutesPerHour;
a.secondsPerDay=a.secondsPerHour*a.hoursPerDay;
a.secondsPerWeek=a.secondsPerDay*a.daysPerWeek;
a.secondsPerMonth=Math.floor(a.secondsPerWeek*a.weeksPerMonth);
a.secondsPerYear=a.secondsPerMonth*a.monthsPerYear
}());

/* res://connect-min/dev/includes/patterns.js */

$_PATTERNS={url:(/^(http(s?)):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i),domain:(/^(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i),email:(/^[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+(?:\.[a-z0-9!#$%&'*+\/=?\^_`{|}~\-]+)*@(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i),protocols:{generic:(/^http(s)?:\/\//i),secure:(/^https:\/\//i),nonSecure:(/^http:\/\//i)},userAgents:{webkit:(/Webkit|KHTML\//i),gecko:(/Gecko\/([^\s]*)/i),msie:(/MSIE\s([^;]*)/),iosAll:(/OS .* like Mac OS X/i),ios5:(/OS 5_.* like Mac OS X/i),ios6:(/OS 6_.* like Mac OS X/i),opera:(/Opera[\s\/]([^\s]*)/)},context:{upperCase:(/([A-Z])/g),lowerCase:(/([a-z])/g)},types:{number:(/^[0-9\.,]+$/),htmlAttribute:(/^[a-z0-9\._\-]+$/i),token:(/^[a-z0-9\.\-\_%]+$/i),bool:(/^(?:true|yes|1)$/i),boolFalse:(/^(?:false|no|0)$/i)},readyState:(/(loaded|complete)/),tags:{initialized:(/\+init$/)},prefixes:{forwardSlash:(/^\//),urlEq:(/^url=/i)},chars:{tilde:(/^~$/),amp:(/&/g),lt:(/</g),gt:(/>/g),quot:(/"/g),squot:(/'/),dot:(/\./g),star:(/\*/g)}};

/* res://connect-min/dev/includes/globals.js */

$_GLOBALS={auth_complete:false,compat:{silent_auth:(typeof IN==="undefined")?false:(IN.ENV.url.silent_auth_url.indexOf("$")===-1)},shadowBox:{theClass:"IN-shadowed",altOpacity:0.2},hovercardOffset:function(a){return[{fixed:"tr",movable:"tl",offsetY:-1*a},{fixed:"tl",movable:"tr",offsetY:-1*a},{fixed:"bl",movable:"br",offsetY:a},{fixed:"br",movable:"bl",offsetY:a},{fixed:"tl",movable:"br",offsetY:a},{fixed:"tr",movable:"bl",offsetY:a}]
},getLRORValue:function(b){function a(l,g,k){var j=g+"=",f=l.split(k||";"),m;
for(var h=0;
h<f.length;
h++){m=f[h];
while(m.charAt(0)==" "){m=m.substring(1,m.length)
}m=e(m);
if(m.indexOf(j)==0){return m.substring(j.length,m.length)
}}return null
}function e(f){if(f.charAt(0)==='"'){f=f.substring(1,f.length)
}if(f.charAt(f.length-1)==='"'){f=f.substring(0,f.length-1)
}return f
}var d=a(document.cookie,"lror"),c;
if(!d){return false
}c=a(d,b,"&");
if(!c){return false
}return c
}};

/* res://connect-min/dev/connect/core.js */

IN=window.IN||{};
if(!window.console){window.console={}
}if(typeof window.console.log!==$_CONSTANTS.types.func){window.console.log=function(){}
}if(typeof window.console.warn!==$_CONSTANTS.types.func){window.console.warn=function(){}
}window.JSON=JSON;
window.Sslac=Sslac;
(function(){if(!IN.ENV||!IN.ENV.js){return
}var e=IN.ENV.js.extensions||{},d,c=IN.$extensions;
IN.$extensions=function(g,f){if(!f){return c(g)
}IN.Event.on(IN,$_CONSTANTS.events.frameworkLoaded,function(){f();
IN.ENV.js.extensions[g].loaded=true
})
};
for(var a in e){if(e.hasOwnProperty(a)){var b=e[a];
if(b.loaded){continue
}d=document.createElement("script");
d.type="text/javascript";
d.src=b.src;
document.getElementsByTagName("head")[0].appendChild(d)
}}})();
if(IN.ENV&&IN.ENV.js){var TYPES=$_CONSTANTS.types,key,paramsMap={authorize:{type:TYPES.bool},debug:{type:TYPES.bool},suppressWarnings:{type:TYPES.bool},deferParse:{type:TYPES.bool,defaultValue:false},statistics:{type:TYPES.bool,defaultValue:true},isFramed:{type:TYPES.bool,defaultValue:(window.self!==window.parent)},lang:{type:TYPES.string,defaultValue:"en_US"},scope:{type:TYPES.list},noAuth:{type:TYPES.bool}};
for(key in paramsMap){if(paramsMap.hasOwnProperty(key)){if(typeof IN.ENV.js[key]!==TYPES.undef){switch(paramsMap[key].type){case TYPES.bool:IN.ENV.js[key]=$_PATTERNS.types.bool.test(IN.ENV.js[key]);
break;
case TYPES.integer:IN.ENV.js[key]=parseInt(IN.ENV.js[key],10);
break;
case TYPES.number:IN.ENV.js[key]=Number(IN.ENV.js[key]);
break;
case TYPES.list:IN.ENV.js[key]=IN.ENV.js[key].replace(/(,|;|\s)/g," ").replace(/\s+/g," ").split(" ");
break;
case TYPES.string:default:break
}}if((typeof IN.ENV.js[key]===TYPES.undef)&&(typeof paramsMap[key].defaultValue!==TYPES.undef)){IN.ENV.js[key]=paramsMap[key].defaultValue
}}}}Sslac.Function("IN.$Tag",function(b,a){a=a||document;
return a.getElementsByTagName(b)
});
Sslac.Function("IN.$Id",function(a){return(typeof(a)===$_CONSTANTS.types.string)?document.getElementById(a):a
});
Sslac.Function("IN.$Class",function(c,b,d){var a=function(f,e,g){if(document.getElementsByClassName){a=function(n,q,m){m=m||document;
var h=m.getElementsByClassName(n),p=(q)?new RegExp("\\b"+q+"\\b","i"):null,j=[],l;
for(var k=0,o=h.length;
k<o;
k+=1){l=h[k];
if(!p||p.test(l.nodeName)){j.push(l)
}}return j
}
}else{if(document.evaluate){a=function(r,u,q){u=u||"*";
q=q||document;
var k=r.split(" "),s="",o="http://www.w3.org/1999/xhtml",t=(document.documentElement.namespaceURI===o)?o:null,l=[],h,i;
for(var m=0,n=k.length;
m<n;
m+=1){s+="[contains(concat(' ', @class, ' '), ' "+k[m]+" ')]"
}try{h=document.evaluate(".//"+u+s,q,t,0,null)
}catch(p){h=document.evaluate(".//"+u+s,q,null,0,null)
}while((i=h.iterateNext())){l.push(i)
}return l
}
}else{a=function(v,y,u){y=y||"*";
u=u||document;
var o=v.split(" "),x=[],h=(y==="*"&&u.all)?u.all:u.getElementsByTagName(y),t,q=[],s;
for(var p=0,i=o.length;
p<i;
p+=1){x.push(new RegExp("(^|\\s)"+o[p]+"(\\s|$)"))
}for(var n=0,w=h.length;
n<w;
n+=1){t=h[n];
s=false;
for(var j=0,r=x.length;
j<r;
j+=1){s=x[j].test(t.className);
if(!s){break
}}if(s){q.push(t)
}}return q
}
}}return a(f,e,g)
};
return a(c,b,d)
});
(function(){var b=0;
var a="li_gen_";
Sslac.Function("IN.$uid",function(d){var c=((d)?d+"_":"")+a+(new Date()).getTime()+"_"+(b++);
return c
})
})();
(function(){var a=function(b,c,e,d){return function(){if(c){window.setTimeout(function(){window[b]=undefined
},50)
}e.apply(d,arguments)
}
};
Sslac.Function("IN.$fn",function(e,d,c){var b=IN.$uid("fn");
window[b]=a(b,c,e,d);
return b
})
})();

/* res://connect-min/dev/lib/easyxdm_noconflict.js */

IN.Lib=IN.Lib||{};
IN.Lib.easyXDM=easyXDM.noConflict("IN.Lib");

/* res://connect-min/dev/statistics/statistics.js */

(function(){if(!IN.ENV.js.statistics){return
}var t=IN.ENV.statsQueue||[],h=false,j=/([a-z_-])*\:\{\}(,)*/gi,s=/,\}/g,b=$_CONSTANTS.events,w="(\\?|&)([a-z]*)=({PARAM})",f="__ORIGIN__",c=new RegExp(w.replace(/\{PARAM\}/,f),"i"),g="__WTYPE__",d=new RegExp(w.replace(/\{PARAM\}/,g),"i"),p={env:{},events:{},tags:{},apis:{}},r={types:{apis:"a",tags:"t",profiler:"p",env:"e",action:"a",count:"c"},actions:{click:"c"},apis:{raw:"r",profile:"p",group:"g",connections:"c",memberupdates:"m",networkupdates:"n",peoplesearch:"ps",comment:"co",post:"po"},tags:{share:"s",apply:"a",login:"l",recommendproduct:"r",companyprofile:"cp",companyinsider:"ci",memberdata:"md",memberprofile:"mp",fullmemberprofile:"fmp",jymbii:"j",mail:"m",wizard:"w",followcompany:"fc",employeeprofilewidget:"xemp",coreg:"xcr",sfdc:"xsf"},profiler:{"bl":["bootstrapInit","bootstrapLoaded"],"be":["bootstrapInit","userspaceRequested"],"fl":["bootstrapInit",b.frameworkLoaded]}};
function e(B,A){if(!B||!A){return NaN
}var z=Math.min(B.length,A.length),C=0,y;
y=z;
for(;
z--;
){C+=Math.abs(B[z]-A[z])
}return Math.ceil(C/y)
}function k(){var G=["tags","apis","profiler","env"],D={};
for(var E=G.length;
E--;
){var M,J=G[E],H=D[r.types[J]||J]={};
if(J==="profiler"){for(M in r.profiler){if(r.profiler.hasOwnProperty(M)){var y=r.profiler[M],L=e(p.events[y[1]],p.events[y[0]]);
if(!(L===0||isNaN(L)||!L)){H[M]=L
}}}}else{if(J==="env"){if(IN.ENV.js.isFramed){H.f=1
}if(IN.ENV.auth.api_key){H.a=IN.ENV.auth.api_key
}if(IN.ENV.auth.oauth_token){H.o=1
}}else{if(J==="apis"||J==="tags"){var F=p[J];
for(M in F){if(F.hasOwnProperty(M)){var C=H[r[J][M]]={};
var K=null;
for(var I in F[M].count){if(F[M].count.hasOwnProperty(I)){K||(K={});
K[r.actions[I]||I]=F[M].count[I]
}}if(K){C[r.types.count]=K
}var B=null;
for(var A in F[M].actions){if(F[M].actions.hasOwnProperty(A)){B||(B={});
B[r.actions[A]||A]=F[M].actions[A].length
}}if(B){C[r.types.action]=B
}if(F[M].profiler){var z=e(F[M].profiler.end,F[M].profiler.start);
if(!(z===0||isNaN(z)||!z)){C[r.types.profiler]=z
}else{C[r.types.profiler]={}
}}}}}}}}return JSON.stringify(D).replace($_PATTERNS.chars.quot,"").replace(j,"").replace(s,"}")
}function o(i){i=i.split(":");
if(i.length<2){return{type:"tags",who:i[0].toLowerCase()}
}return{type:i[0],who:i[1].toLowerCase()}
}function a(z,A){var y=o(z);
if(!p[y.type]){return
}var i=p[y.type][y.who]=p[y.type][y.who]||{};
i.count||(i.count={});
i.count.t=1+(i.count.t||0);
if(A){if(y.who=="share"&&A.url&&A.url!==location.href){i.count.e=1+(i.count.e||0)
}}}function u(i,A,B){var y=o(A),z;
if(!p[y.type]){return
}z=p[y.type][y.who];
if(z){if(!z[i]){z[i]={}
}if(!z[i][B]){z[i][B]=[]
}z[i][B].push(+new Date())
}}function l(i,y){u("action",i,y)
}function m(y,z){var i=p.events;
if(!i[y]){i[y]=[]
}i[y].push(z||+new Date())
}function n(i,y){var z=(y)?"end":"start";
u("profiler",i,z)
}function v(){if(!h){var E=k(),i=$_PATTERNS.protocols.secure.test(location.href)?IN.ENV.url.analytics_url:IN.ENV.url.analytics_us_url,A=new Image(),z=$_CONSTANTS.stats,B=i.match(c),F=i.match(d);
i+="&"+(+new Date());
if(B.length===4){var D="&"+B[2]+"="+B[3],y=(B[1]==="?")?"?":"";
i=(i.replace(c,y)+D).replace("?&","?")
}if(F.length===4&&F[1]!=="?"){var C="?"+F[2]+"="+F[3]+"&";
i=i.replace(d,"").replace("?",C)
}A.src=i.replace("__ETYPE__",z.eType).replace("__TINFO__",(IN.ENV.js.apiKey)?z.trkKeyed:z.trkAnon).replace(g,z.wType).replace("__TRKINFO__",encodeURIComponent(E)).replace(f,encodeURIComponent(location.href));
h=true
}}$_STATISTICS={instance:a,recordAction:l,recordEvent:m,profile:n,firePing:v};
for(var q=t.length;
q--;
){for(var x in t[q]){if(t[q].hasOwnProperty(x)){m(x,t[q][x])
}}}IN.ENV.statsQueue=undefined;
IN.Event.on(window,b.beforeUnload,$_STATISTICS.firePing);
IN.Event.on(window,b.unload,$_STATISTICS.firePing)
})();

/* res://connect-min/dev/event/custom.js */

Sslac.Class("IN.CustomEvent").Constructor(function(a,b){this.occursOnlyOnce=(b)?true:false;
this.fired=false;
this.firedArgs=[];
this.name=a;
this.events=[]
}).Method("unsubscribe",function(f,h,c,b){var j=this.events;
var a=[];
for(var d=0,e=j.length;
d<e;
d++){var g=j[d];
if(g.fn!==f||g.scope!==h||g.obj!==c||g.once!==b){a.push(g)
}}this.events=a
}).Method("subscribe",function(e,d,f,c){var a={fn:e,scope:d,obj:f,once:c};
var b=this.firedArgs;
if(this.fired&&this.occursOnlyOnce){b.push((a.obj||{}));
a.fn.apply((a.scope||window),b)
}else{this.events[this.events.length]=a
}}).Method("fire",function(){if(this.fired&&this.occursOnlyOnce){return false
}var e=[];
this.firedArgs=[].slice.apply(arguments);
this.fired=true;
for(var d=0,a=this.events.length;
d<a;
d++){var b=this.events[d];
var c=[].slice.apply(arguments);
c.push((b.obj||{}));
if(!b.once){e.push(b)
}b.fn.apply((b.scope||window),c)
}$_STATISTICS.recordEvent(this.name);
this.events=e;
return true
});

/* res://connect-min/dev/event/global.js */

(function(){var a=$_CONSTANTS.events;
Sslac.Static("IN.GlobalEvents");
IN.GlobalEvents.auth=new IN.CustomEvent(a.auth);
IN.GlobalEvents.noAuth=new IN.CustomEvent(a.noAuth);
IN.GlobalEvents.logout=new IN.CustomEvent(a.logout);
IN.GlobalEvents.refresh=new IN.CustomEvent(a.refresh);
IN.GlobalEvents.systemReady=new IN.CustomEvent(a.systemReady,true);
IN.GlobalEvents.frameworkLoaded=new IN.CustomEvent(a.frameworkLoaded,true)
})();

/* res://connect-min/dev/event/event.js */

IN.Event=null;
(function(){var h={};
var g=null;
function c(r,m,p){if(!p.preventDefault){p.preventDefault=function(){p.returnValue=false
}
}if(!p.stopPropagation){p.stopPropagation=function(){p.cancelBubble=true
}
}if(!p.stopEvent){p.stopEvent=function(){p.preventDefault();
p.stopPropagation()
}
}var l=h[r][m];
var k=l.el;
var j=[];
for(var n=0,o=l.length;
n<o;
n++){var q=l[n];
q.fn.call((q.scope||k),p,q.obj);
if(!q.fireOnce){j.push(q)
}}h[r][m]=j
}Sslac.Static("IN.Event").Static("remove",function(m,A,p,k,r,t){var j=$_CONSTANTS.types,o=IN.Event.getElType(m),q=A.toLowerCase();
switch(o){case j.string:m=IN.$Id(m);
case j.html:var v=IN.Event.getElKey(m);
if(!h[v]||!h[v][q]){return
}var u=h[v][q];
var z=[];
for(var w=0,x=u.length;
w<x;
w++){var l=u[w];
if(l.el!==m||l.fn!==p||l.scope!==k||l.obj!==r||l.fireOnce!==t){z.push(l)
}}h[v][q]=z;
break;
case j.uiObject:try{var n="un"+A.charAt(0).toUpperCase()+A.substr(1);
if(m[n]){m[n](p,k,r,t)
}else{m[n.toLowerCase()](p,k,r,t)
}}catch(y){}break;
case j.globalEvent:var s=IN.GlobalEvents[A];
if(!s){throw new Error("Global Event "+A+" is not defined.")
}return s.unsubscribe(p,k,r,t);
break
}}).Static("getElKey",function(i){if(!i.getAttribute){return i
}var j=i.id||i.getAttribute("data-IN-event-id");
if(!j){j=IN.$uid();
i.setAttribute("data-IN-event-id",j)
}return"k"+j
}).Static("getElType",function(j){var i=$_CONSTANTS.types;
if(typeof(j)===i.string){return i.string
}if(j!==window&&(typeof(j)==i.func||typeof(j)==i.object)){try{var k=(j instanceof IN.Objects.Base);
if(k){return i.uiObject
}}catch(l){}}if(j===IN){return i.globalEvent
}return i.html
}).Static("onOnce",function(k,m,j,i,l){return IN.Event.on(k,m,j,i,l,true)
}).Static("on",function(k,l,v,z,o,n){try{try{if(k&&k.constructor&&k.constructor.toString().indexOf("Array")>-1){for(var p=0,r=k.length;
p<r;
p++){IN.Event.on(k[p],l,v,z,o,n)
}return
}}catch(s){}var t=IN.Event.getElType(k),q=false,u=l.toLowerCase(),m=$_CONSTANTS.types;
switch(t){case m.string:k=IN.$Id(k);
case m.html:var y=IN.Event.getElKey(k);
if(!h[y]){h[y]={el:k}
}if(!h[y][u]){h[y][u]=[];
q=true
}h[y][u].push({fn:v,scope:z,obj:o,fireOnce:n});
if(q){var x=function(i){c(y,u,i)
};
if(window.addEventListener&&k.addEventListener){k.addEventListener(l,x,false)
}else{if(k.attachEvent){k.attachEvent("on"+l,x)
}else{IN.Util.throwWarning("could not bind event `"+l+"` to `"+y+"`")
}}}break;
case m.uiObject:try{var j="on"+l.charAt(0).toUpperCase()+l.substr(1);
if(k[j]){k[j](v,z,o,n)
}else{k[j.toLowerCase()](v,z,o,n)
}}catch(s){}break;
case m.globalEvent:var w=IN.GlobalEvents[l];
if(!w){throw new Error("Global Event "+l+" is not defined.")
}return w.subscribe(v,z,o,n);
break
}}catch(s){}}).Static("onDOMReady",function(){var k=[];
var m=null;
var l=false;
function n(r,q){q=q||window;
if(l){r.call(q);
return
}else{k[k.length]={fn:r,scope:q}
}}function p(){var r;
for(var s=0,q=k.length;
s<q;
s++){r=k[s];
r.fn.call(r.scope)
}}function j(q){if(q&&(q.type=="DOMContentLoaded"||q.type=="load")){i()
}if(document.readyState){if(($_PATTERNS.readyState).test(document.readyState)){i()
}}if(document.documentElement.doScroll&&window==window.top){try{l||document.documentElement.doScroll("left");
i()
}catch(q){}}}function i(){if(!l){l=true;
if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",j,false)
}document.onreadystatechange=null;
clearInterval(timer);
timer=null;
p()
}}if(document.addEventListener){document.addEventListener("DOMContentLoaded",j,false)
}document.onreadystatechange=j;
timer=setInterval(j,5);
if(window.onload){var o=window.onload;
if(IN.ENV.evtQueue){IN.ENV.evtQueue.push({type:"on",args:[window,"load",o]})
}else{IN.Event.on(window,"load",o)
}}window.onload=j;
return n
}());
if(IN.ENV&&IN.ENV.evtQueue){for(var d=0,a=IN.ENV.evtQueue.length;
d<a;
d++){var f=IN.ENV.evtQueue[d],e=IN.Event[f.type],b=f.args;
e.apply(window,b)
}IN.ENV.evtQueue=null
}})();

/* res://connect-min/dev/util/util.js */

Sslac.Function("IN.Util.trim",function(b,a){a=a||"\\s";
return b.replace(new RegExp("^(?:"+a+")+|(?:"+a+")+$","g"),"")
});
Sslac.Function("IN.Util.findIn",function(f,e){var d=e.split(/\./),b=f;
for(var c=0,a=d.length;
c<a;
c++){if(!b[d[c]]){throw new Error("not found")
}b=b[d[c]]
}return b
});
Sslac.Function("IN.Util.getStyle",function(b,a){if(b.currentStyle){return b.currentStyle[IN.Util.camelCase(a)]
}else{if(window.getComputedStyle){return document.defaultView.getComputedStyle(b).getPropertyValue(a)
}}return""
});
Sslac.Function("IN.Util.camelCase",function(a){return a.replace(/^-ms-/,"ms-").replace(/-([a-z])/gi,function(b,c){return c.toUpperCase()
})
});
Sslac.Function("IN.Util.assembleRootURL",function(a){return a.protocol+"://"+a.host+((a.port)?":"+a.port:"")
});
Sslac.Function("IN.Util.getRootURL",function(a){var b=IN.Util.getRootURLObject(a);
return IN.Util.assembleRootURL(b)
});
Sslac.Function("IN.Util.getRootDomain",function(a){var b=IN.Util.getRootURLObject(a);
return b.host
});
Sslac.Function("IN.Util.getRootURLObject",function(b){b=b||location.href;
if(b.indexOf("//")===0){b=window.location.protocol+b
}if(b.indexOf("://")===-1){b=window.location.protocol+"//"+b
}var c=b.substring(b.indexOf("://")+3);
var e=b.substring(0,b.indexOf("://")).toLowerCase();
c=(c.indexOf("/")!==-1)?c.substring(0,c.indexOf("/")):c;
var d=c.indexOf(":");
var a="";
if(d>=0){a=c.substring(d+1);
c=c.substring(0,d)
}if((a==="80"&&e==="http")||(a==="443"&&e==="https")){a=""
}return{protocol:e,host:c,port:a}
});
Sslac.Function("IN.Util.getDebuggerUrl",function(){try{return window.location.href.replace(window.location.hash,"").replace(document.domain,"").replace(/https?:\/\//g,"")
}catch(a){return(window.opener)?"[spawned window]":(window.parent&&window.self!==window.parent)?"[spawned frame]":"[parent window]"
}});
(function(){var b;
Sslac.Function("IN.Util.addCSS",function a(c){b=b||(function(){var k=function(e){document.write("<style>"+e+"</style>")
},h,g,f;
try{h=document.createElement("style");
h.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(h);
k=function(e){if(h.styleSheet){h.styleSheet.cssText+=e
}else{h.appendChild(document.createTextNode(e))
}}
}catch(j){if(document.createStyleSheet){try{h=document.createStyleSheet()
}catch(d){g=document.styleSheets;
for(f=h.length;
f--;
){h=g[f];
if(h.cssRules&&h.cssRules.length<3500&&!/@media/gi.test(h.cssText+"")){break
}h=null
}}if(h){k=function(e){h.styleSheet.cssText+=e
}
}}}return{append:k}
}());
b.append(c)
})
}());
(function(){var b={};
function a(c){if(!b[c]){b[c]=new RegExp("(\\s|^)"+c+"(\\s|$)")
}return b[c]
}Sslac.Function("IN.Util.hasClass",function(d,c){return(d&&d.className&&d.className.match(a(c)))
});
Sslac.Function("IN.Util.addClass",function(d,c){if(!IN.Util.hasClass(d,c)&&(typeof d.className!==$_CONSTANTS.types.undef)){d.className=IN.Util.trim(d.className+" "+c)
}});
Sslac.Function("IN.Util.removeClass",function(d,c){var e="";
if(IN.Util.hasClass(d,c)){e=IN.Util.trim(d.className.replace(a(c)," "));
if(e){d.className=e
}else{d.className="";
d.removeAttribute("class");
d.removeAttribute("className")
}}})
}());
Sslac.Function("IN.Util.isArray",function(a){if(!a||!a.constructor){return false
}return(a.constructor.toString().indexOf("Array")!==-1)
});
Sslac.Function("IN.Util.isObject",function(a){return typeof a===$_CONSTANTS.types.object
});
Sslac.Function("IN.Util.isNode",function(b){var a=$_CONSTANTS.types;
return(typeof Node===a.object?b instanceof Node:typeof b===a.object&&typeof b.nodeType===a.number&&typeof b.nodeName===a.string)
});
Sslac.Function("IN.Util.isElement",function(b){var a=$_CONSTANTS.types;
return(typeof HTMLElement===a.object?b instanceof HTMLElement:typeof b===a.object&&b.nodeType===1&&typeof b.nodeName===a.string)
});
Sslac.Function("IN.Util.toObject",function(f,l,a){var d={},k,m,h,b=$_CONSTANTS.types;
l=l||[];
if(!f||f.legth<=0){return d
}if(typeof(l)===b.string||typeof(l)===b.func){l=[l]
}for(var e=0,g=f.length;
e<g;
e++){m=f[e];
k=e;
for(var c=l.length-1;
c>=0;
c--){h=m[l[c]];
if(typeof(h)===b.func){h=h(e);
if(h){k=h
}}else{if(typeof h!==$_CONSTANTS.types.undef){k=h
}}}k=""+k;
if(a){k=a(e,k)
}d[k]=m
}return d
});
Sslac.Function("IN.Util.parseParams",function(h){var c={},j,d,a,g;
for(var e=0,b=h.split("&"),f=b.length;
e<f;
e++){j=b[e];
d=j.split("=");
a=decodeURIComponent(d.splice(0,1));
g=decodeURIComponent(d.join("="));
c[a]=g
}return c
});
Sslac.Function("IN.Util.validateAttributes",function(b,l){var f="isValid_"+(+new Date()),h;
function k(p){if(typeof l[p][f]!==$_CONSTANTS.types.undef){return l[p][f]
}var n=l[p].transform;
if(n){try{b[p]=n(b[p]);
l[p][f]=true;
return true
}catch(r){h=e.invalidError||p+" is not a valid "+p+" ({0})";
throw new Error(IN.Util.formatString(h,b[p]))
}}var q=b[p],m=l[p].match;
if(!m||!q){return true
}var s=typeof m,i=true,o=$_CONSTANTS.types;
s=(m instanceof RegExp)?"regex":s;
switch(s){case o.func:i=m(q);
break;
case o.string:m=new Regex(m);
case o.regex:q=b[p];
i=m.test(q);
break;
default:break
}l[p][f]=i;
return i
}for(var j in l){if(l.hasOwnProperty(j)){var e=l[j];
var a=k(j);
if(!a){h=e.invalidError||j+" is not a valid "+j+" ({0})";
throw new Error(IN.Util.formatString(h,b[j]))
}if(e.defaultValue&&(!a||!b[j])){b[j]=e.defaultValue;
continue
}if(e.required===true){if(b[j]&&a){continue
}else{var d=true;
if(e.exception){for(var c=e.exception.length;
c--;
){var g=e.exception[c];
if(b[g]&&k(g)){d=false;
break
}}}if(d){h=e.error||j+" was not provided";
throw new Error(h)
}}}}}return b
});
Sslac.Function("IN.Util.createParams",function(g){var d=[],f=0;
for(var c in g){if(c==="type"&&IN.Util.isArray(g[c])){var e=g[c];
for(var b=0,a=e.length;
b<a;
b++){d[f++]=encodeURIComponent(c)+"="+encodeURIComponent(e[b])
}}else{d[f++]=encodeURIComponent(c)+"="+encodeURIComponent(g[c])
}}return d.join("&")
});
Sslac.Function("IN.Util.appendParams",function(a,b){if(b){if(IN.Util.isObject(b)){b=(IN.Util.isArray(b))?b.join("&"):IN.Util.createParams(b)
}if(b){a=a+((/\?/.test(a))?"&":"?")+b
}}return a
});
Sslac.Function("IN.Util.base64decode",function(f,h){var a=(h)?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var d=[],g,c,b,m,l,k,j;
for(var e=0;
e<f.length;
){m=a.indexOf(f.charAt(e++));
l=a.indexOf(f.charAt(e++));
k=a.indexOf(f.charAt(e++));
j=a.indexOf(f.charAt(e++));
g=(m<<2)+(l>>4);
c=((l&15)<<4)+(k>>2);
b=((k&3)<<6)+j;
d[d.length]=String.fromCharCode(g);
if(k!==64){d[d.length]=String.fromCharCode(c)
}if(j!==64){d[d.length]=String.fromCharCode(b)
}}return d.join("")
});
(function(){var a=["00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4","E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE","1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9","FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B","35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A","C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924","2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F","9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01","6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950","8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2","4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5","AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F","5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6","03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8","E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB","196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5","D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C","36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236","CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31","2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713","95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242","68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C","8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7","4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9","BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8","5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"].join(" ");
Sslac.Function("IN.Util.crc32",function(f){var e=0,g=0,c=0;
e=e^(-1);
for(var d=0,b=f.length;
d<b;
d++){g=(e^f.charCodeAt(d))&255;
c="0x"+a.substr(g*9,8);
e=(e>>>8)^c
}return e^(-1)
})
}());
Sslac.Function("IN.Util.RC4",function(r,n,d){var h=[];
var l,k,m,a;
var o=r.length,p=n.length;
var g;
var c="0123456789abcdef";
var b=[];
d=d||20;
function e(j,q,i){var s=j[q];
j[q]=j[i];
j[i]=s
}for(l=0;
l<256;
l++){h[l]=l;
b[l]=((l<16)?"0":"")+l.toString(16)
}for(l=0;
l<256;
l++){k=(k+h[l]+r.charCodeAt(l%o))%256;
e(h,l,k)
}l=0;
k=0;
g=[];
for(a=0;
a<d;
a++){l=(l+1)%256;
k=(k+h[l])%256;
e(h,l,k)
}for(a=0;
a<p;
a++){l=(l+1)%256;
k=(k+h[l])%256;
e(h,l,k);
var f=String.fromCharCode(n.charCodeAt(a)^h[(h[l]+h[k])%256]);
g[g.length]=b[f.charCodeAt(0)]
}return g.join("")
});
Sslac.Function("IN.Util.getHashParams",(function(){function g(j){var l=j+"=";
var e=document.cookie.split(";");
for(var k=0;
k<e.length;
k++){var m=e[k];
while(m.charAt(0)===" "){m=m.substring(1,m.length)
}if(m.indexOf(l)===0){return m.substring(l.length,m.length)
}}return null
}var a=window.name.replace(/[^a-z0-9]/gi,"_");
var f=window.location.hash.substring(1);
if(!f||f.indexOf("=")===-1){f=g("IN_HASH");
if(f){f=decodeURIComponent(f)
}}if(!f||f.indexOf("=")===-1){f=window.IN_HASH
}if(!f||f.indexOf("=")===-1){return function(){return false
}
}document.cookie="IN_HASH="+encodeURIComponent(f);
var h=IN.Util.parseParams(f);
var i={};
for(var b in h){var c=h[b];
i[b]=c;
if((b!=="access_token")&&(b!=="oauth_token")&&c.match(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)){c=IN.Util.base64decode(c)
}try{c=JSON.parse(c)
}catch(d){}h[b]=c
}return function(e){return(e)?i:h
}
}()));
Sslac.Function("IN.Util.throwWarning",function(a){if(!a||IN.ENV.js.suppressWarnings||!console||!console.warn){return
}console.warn(a)
});
Sslac.Function("IN.Util.extendObject",function(){var g=arguments[0]||{};
if(typeof g!==$_CONSTANTS.types.object){g={}
}for(var c=1,d=arguments.length;
c<d;
c++){var f=arguments[c];
if(f){for(var b in f){var e=g[b];
var a=f[b];
if(g===a){continue
}if(a&&(IN.Util.isObject(a)||IN.Util.isArray(a))){var h=e||{};
g[b]=IN.Util.extendObject(h,a)
}else{if(typeof a!==$_CONSTANTS.types.undef){g[b]=a
}}}}}return g
});
Sslac.Function("IN.Util.clone",function(c){if(!IN.Util.isArray(c)){return IN.Util.extendObject({},c)
}else{var d=[];
for(var b=0,a=c.length;
b--;
){d[b]=c[b]
}return d
}return c
});
Sslac.Function("IN.Util.toArray",function(c,b){if(IN.Util.isArray(c)){return c
}else{if(IN.Util.isObject(c)&&!b){var d=[];
for(var a in c){if(c.hasOwnProperty(a)){d.push(c[a])
}}return d
}else{return[c]
}}});
Sslac.Function("IN.Util.formatString",function(){var a=arguments;
return a[0].replace(/\{(\d+)\}/g,function(b,c){c=Number(c);
return(typeof a[1+c]!==$_CONSTANTS.types.undef)?a[1+c]:"{"+c+"}"
})
});
Sslac.Function("IN.Util.computeGradientStyle",function(p,o){p=p.toLowerCase();
o=IN.Util.toArray(o);
var d=o.length,n={webkit:["-webkit-gradient(linear, left top, left bottom, {0})","-webkit-"],gecko:"-moz-",msieold:"progid:DXImageTransform.Microsoft.gradient({0}, GradientType=0)",msie:"-ms-",opera:"-o-",w3c:"linear-gradient(top, {0})"},l=IN.Util.toArray(n[p]||n.w3c),q=l.length,h={webkit:"color-stop({0}%,{1})",msieold:'startColorstr="{0}", endColorstr="{1}"',w3c:"{1} {0}%"},k,m,g;
for(g=q;
g--;
){if(l[g].length<10){l[g]=l[g]+n.w3c
}}h.webkit=[h.webkit,h.w3c];
h=h[p]||h.w3c;
function c(j){var i=o[j].split(":");
k={};
if(i.length>1){k.stop=i[0];
k.color=i[1]
}else{k.color=i[0];
k.stop=Math.round(j/(d-1)*100)
}return k
}if(p==="msieold"){var a=c(0).color,e=c(d-1).color;
k=IN.Util.formatString(h,a,e);
m=IN.Util.formatString(l[0],k)
}else{h=IN.Util.toArray(h);
m=[];
for(g=0;
g<q;
g++){var b=[];
for(var f=0;
f<d;
f++){k=c(f);
b.push(IN.Util.formatString(h[g],k.stop,k.color))
}b=b.join(", ");
m.push(IN.Util.formatString(l[g],b))
}m=m.join($_CONSTANTS.suffixes.important+" background-image: ")
}return m
});
Sslac.Function("IN.Util.relativeTime",function(i){if(typeof i==="string"){i=+new Date(i)
}if(!i){return""
}var d=$_CONSTANTS.conversions.times,b=+new Date(),l=+new Date().getTimezoneOffset()*d.secondsPerMinute,e=b+l,a=Math.round((e-i)/d.msPerSecond);
if(a>d.secondsPerYear){var g=new Date(i),c=("January, February, March, April, May, June, July, August, September, October, November, December").split(/[\s]*,[\s]*/g);
return IN.Util.formatString("on {0} {1}, {2}",c[g.getMonth()],g.getDate(),g.getFullYear())
}else{if(a<=0){return""
}}var k,f,h=[{unit:"minute",seconds:d.secondsPerMinute},{unit:"hour",seconds:d.secondsPerHour},{unit:"day",seconds:d.secondsPerDay},{unit:"week",seconds:d.secondsPerWeek},{unit:"month",seconds:d.secondsPerMonth}];
for(k=h.length-1;
(k>=0)&&((f=a/h[k].seconds)<=1);
k--){}if(k<0){k=0
}f=Math.floor(f);
if(f<1){f=1
}var j=(f===1)?"":"s";
if(f===1){if(k===2){return"yesterday"
}else{if(k>1){return"last "+h[k].unit
}}}return[Math.floor(f),""+h[k].unit+j,"ago"].join(" ")
});
(function(){var a={},c="___JS_REPLACE___",g="___END_JS_REPLACE___",i=/^\n*/,d=/\n*$/,j=/"/g,h=/___JS_REPLACE___=(.+?)___END_JS_REPLACE___/g,e=/("(?:(?!___JS_REPLACE___).)*)___END_JS_REPLACE___/g,f=/[\-\[\]\{\}\(\)\*\+\?\.\,\^\$\|\#\s\\]/g;
function k(l){return l.replace(j,"\r")
}function b(l){return l.replace(f,"\\$&")
}Sslac.Function("IN.Util.createJSTemplate",function(q,l){var m="t"+Math.abs(IN.Util.crc32(q));
if(a[m]){return a[m]
}if(!l&&IN.ENV&&IN.ENV.js&&IN.ENV.js.templateMarkers){l=IN.ENV.js.templateMarkers
}l=l||"<?js ?>";
l=l.split(" ");
var p=l[0]||"<?js",o=l[1]||"?>";
if(!p||!o){throw new Error("Template markers must be set.")
}if(p===o){throw new Error("Start and end markers cannot be identical.")
}p=new RegExp(b(p),"g");
o=new RegExp(b(o),"g");
var n=["","var p=[],","$=function(v) {",'return (v == "*") ? obj : obj[v];',"},","print=function() {","p.push.apply(p, arguments);","};","with(obj) {","try {",'p.push("',q.replace(p,c).replace(o,g).split("\r").join("").split("\t").join("    ").replace(i,"").replace(d,"").split("\n").join("\\n").replace(e,k).split('"').join('\\"').split("\r").join('"').replace(h,'",$1,"').split(c).join('");').split(g).join('p.push("'),'");',"}","catch(_tmplEx_) {",'p.push("Error: ", _tmplEx_.message)',"}","}",'return p.join("");',""].join("");
a[m]=new Function("obj",n);
return a[m]
})
}());
Sslac.Function("IN.Util.getUniqueID",function uuid(){var e="0123456789abcdef".split("");
var c=[],b=Math.random,d;
c[8]=c[13]=c[18]=c[23]="-";
c[14]="4";
for(var a=0;
a<36;
a++){if(!c[a]){d=0|b()*16;
c[a]=e[(a===19)?(d&3)|8:d&15]
}}return c.join("")
});
Sslac.Function("IN.Util.isRetina",function(){return(window.devicePixelRatio&&window.devicePixelRatio>1)
});

/* res://connect-min/dev/util/support.js */

Sslac.Static("IN.Util.support").Static("li_attributesSpecified",
/*@cc_on true || @*/
false).Static("li_createStyleSheet",
/*@cc_on true || @*/
false);

/* res://connect-min/dev/util/hashqueue.js */

Sslac.Class("IN.Util.HashQueue").Constructor(function(){this.queues={};
this.queueKeys=[]
}).Method("push",function(a,b){if(!this.queues[a]){this.queues[a]=[];
this.queueKeys.push(a)
}this.queues[a].push(b)
}).Method("pop",function(a){if(this.queues[a]){return this.queues[a].pop()
}}).Method("get",function(a){return this.queues[a]
}).Method("set",function(b,a){this.queues[b]=a
}).Method("size",function(){var b=0;
for(var a in this.queues){b+=this.queues[a].length
}return b
}).Method("keys",function(){return this.queueKeys
}).Method("clear",function(b){if(b){if(this.queues[b]){this.queues[b]=undefined
}var d=[];
for(var c=0,a=this.queueKeys.length;
c<a;
c++){if(this.queueKeys[c]!=b){d.push(this.queueKeys[c])
}}this.queueKeys=d
}else{this.queues={};
this.queueKeys=[]
}});

/* res://connect-min/dev/tagparser/tagparser.js */

Sslac.Class("IN.TagParser").Constructor(function(){this.tagRegistry={}
}).Method("processTagMatch",function(m){var a=m.tagName.toLowerCase(),s,f=false,c=false;
switch(a){case"in:tag":s=m.getAttribute("name").toLowerCase();
c=true;
if($_PATTERNS.tags.initialized.test(s)){return false
}break;
case"script":var b=m.type.toLowerCase();
f=true;
if($_PATTERNS.tags.initialized.test(b)){return false
}var d=b.split("/");
var g=d[0];
if(g!="in"){return false
}s=d[1];
break
}if(!this.tagRegistry[s]){return false
}if(c){m.setAttribute("name",s+"+init")
}if(f){m.type=m.type+"+init"
}var h,j,q=m.innerHTML,l={},r=(IN.ENV.js.dataNamespace)?"data-"+(IN.ENV.js.dataNamespace.replace(/^data-/gi,"").toLowerCase())+"-":"data-";
for(var o=0,k=m.attributes,p=k.length;
o<p;
o++){var e=k.item(o),n=e.nodeName;
if(n.indexOf(r)===0){if(IN.Util.support.li_attributesSpecified||e.specified){n=n.replace(r,"").toLowerCase();
l[n]=e.nodeValue
}}}l.type=m.type;
l.content=q;
j=document.createElement("span");
j.style.lineHeight="1";
j.style.verticalAlign="baseline";
j.style.display="inline-block";
j.className="IN-widget";
m.parentNode.insertBefore(j,m);
$_STATISTICS.instance(s,l);
h=new this.tagRegistry[s](j,l);
return true
}).Method("parse",function(e){var b=[],c,a,d;
for(d=0,c=IN.$Tag("script",e),a=c.length;
d<a;
d++){if(c[d]){if(this.processTagMatch(c[d])){b.push(c[d])
}}}for(d=0,c=IN.$Tag("in:tag",e),a=c.length;
d<a;
d++){if(c[d]){if(this.processTagMatch(c[d])){b.push(c[d])
}}}}).Method("add",function(a,b){this.tagRegistry[a.toLowerCase()]=b
});
(function(){var a=new IN.TagParser();
window.IN.addTag=function(){a.add.apply(a,arguments)
};
window.IN.parse=function(b){a.parse(b)
};
IN.Event.on(IN,$_CONSTANTS.events.systemReady,function(){a.parse(document.body)
})
})();

/* res://connect-min/dev/tags/base.js */

Sslac.Class("IN.Tags.Base").Constructor(function(b,a){this.el=function(){return b
}
}).Method("addCSS",function(a){return IN.Util.addCSS(a)
}).Method("parseAttribute",function(b,d){if(!b){return[]
}b=b.split(",");
for(var c=0,a=b.length;
c<a;
c++){b[c]=IN.Util.trim(b[c]);
if(d=="callback"){b[c]=Sslac.valueOf(b[c])
}}return b
}).Method("createTemplate",function(a){return IN.Util.createJSTemplate(a)
}).Method("requireAuth",function(b,a){return IN.User.authorize(b,a)
}).Method("validateAttributes",function(b,a){return IN.Util.validateAttributes(b,a)
});

/* res://connect-min/dev/tags/share.js */

(function(){Sslac.Class("IN.Tags.Share").Extends("IN.Tags.Base").Constructor(function(l,k){$_STATISTICS.profile("Share");
this.Parent(l,k);
this.url=k.url||location.href;
this.el().style.textAlign="center";
this.successCallbacks=this.parseAttribute(k.onsuccess,"callback");
this.errorCallbacks=this.parseAttribute(k.onerror,"callback");
this.theme=k.theme||$_GLOBALS.getLRORValue("connect_button_theme");
this.useCounter=k.counter||false;
this.position=this.useCounter||"right";
this.showZero=(k.showzero===true||k.showzero==="true")?true:false;
this.counter=null;
this.button=null;
this.clickedOnce=false;
this.count=0;
this.countData=null;
this.makeButton();
this.winObj=null;
$_STATISTICS.profile("Share",true)
}).Method("makeButton",function(){var l={state:(this.position=="right"&&!this.showZero)?"hidden":null,position:this.position,alwaysShow:this.showZero,content:0,theme:this.theme},n=(this.position=="right")?"after":"before",k=$_CONSTANTS.events;
function o(){var s,p;
if(!this.clickedOnce){this.clickedOnce=true;
this.plusOne()
}if(this.winObj){this.successCallbacks.pop();
this.winObj.remove();
this.winObj=null
}$_STATISTICS.recordAction("Share",k.click);
if(IN.Objects.Lib.UA.hasPausingIssue()){var r=IN.Util.appendParams(IN.ENV.widget.share_url,{url:this.url,original_referer:location.href});
window.open(r,"width="+IN.ENV.ui.popup_window_width+", height="+400);
return
}this.winObj=IN.UI.Share().params({url:this.url});
var q=this;
function t(){if(q.useCounter){if(!i){i=document.getElementsByTagName("head")[0]
}var u=document.createElement("script");
u.type="text/javascript";
u.src=e(q.url)+"&cc="+(q.count);
i.appendChild(u)
}}this.successCallbacks.push(t);
for(s=0,p=this.successCallbacks.length;
s<p;
s++){this.winObj.success(this.successCallbacks[s])
}for(s=0,p=this.errorCallbacks.length;
s<p;
s++){this.winObj.error(this.errorCallbacks[s])
}this.winObj.place()
}this.button=new IN.Objects.Button({title:$_I18N("share"),theme:this.theme});
this.button.place(this.el());
IN.Event.on(this.button,k.click,o,this);
if(this.useCounter){f(this.url,this);
this.counter=new IN.Objects.Callout(l);
this.counter.place(n,this.button.el());
if(this.position=="top"||this.position=="talltop"){var m=document.createElement("br");
this.button.el().parentNode.insertBefore(m,this.button.el())
}IN.Event.on(this.button,k.mouseOver,function(){this.counter.setState(k.mouseOver)
},this);
IN.Event.on(this.button,k.mouseOut,function(){this.counter.setState(k.mouseOut)
},this);
IN.Event.on(this.button,k.mouseDown,function(){this.counter.setState(k.mouseDown)
},this);
IN.Event.on(this.button,k.click,function(){this.counter.setState(k.click)
},this);
IN.Event.on(this.counter,k.mouseOver,function(){this.button.setState(k.mouseOver)
},this);
IN.Event.on(this.counter,k.mouseOut,function(){this.button.setState(k.mouseOut)
},this);
IN.Event.on(this.counter,k.mouseDown,function(){this.button.setState(k.mouseDown)
},this);
IN.Event.on(this.counter,k.click,function(){this.button.setState(k.click)
},this);
IN.Event.on(this.counter,k.click,o,this)
}}).Method("setCount",function(k){if(this.counter&&(k!=""||this.position=="top"||this.position=="talltop")){k=k+"";
if(!k.match(/^[\d]+$/)){return
}k=k*1;
this.count=k;
this.counter.setState("visible");
this.counter.setContent(c(k))
}}).Method("setCountFormatted",function(k){if(!IN.Util.isObject(k)){this.setCount(k)
}else{if(!k.fCnt&&k.count){this.setCount(k.count)
}else{if(this.counter&&(k.count!=""||this.position=="top"||this.position=="talltop")){k.count=k.count+"";
if(!k.count.match(/^[\d]+$/)){return
}k.count=k.count*1;
this.count=k.count;
this.countData=k;
this.counter.setState("visible");
if(k.fCnt){this.counter.setContent(k.fCnt)
}else{this.setCount(count)
}}}}}).Method("increaseCount",function(k){k||(k=1);
this.setCount(this.count+k)
}).Method("plusOne",function(){if(this.countData){this.countData.fCnt=this.countData.fCntPlusOne;
this.setCountFormatted(this.countData)
}else{this.increaseCount()
}}).Static("getCount",function(k,m,l){g(k,m,l)
}).Static("handleCount",function(k){b(k)
});
var i,a={},d={};
function e(k){return IN.ENV.widget.share_counter_url+"?url="+encodeURIComponent(k)+"&lang="+IN.ENV.js.lang
}function f(l,k){h(l,k.setCountFormatted,k)
}function j(m,k,o,l){if(!i){i=document.getElementsByTagName("head")[0]
}if(!m[k]){m[k]=[]
}m[k].push({callback:o||function(){},scope:l||window});
var n=document.createElement("script");
n.type="text/javascript";
n.src=e(k);
i.appendChild(n)
}function g(k,m,l){j(a,k,m,l)
}function h(k,m,l){j(d,k,m,l)
}function b(p){if(!i){i=document.getElementsByTagName("head")[0]
}p||(p={});
if((typeof p.url===$_CONSTANTS.types.undef)||(typeof p.count===$_CONSTANTS.types.undef)){return
}var k=p.url,s=p.count,l=i.getElementsByTagName("script"),m,n,t=[],q,r;
for(q=0,r=l.length;
q<r;
q++){m=l[q];
if(m.src==e(k)){t.push(m)
}}window.setTimeout(function(){for(var v=0,u=t.length;
v<u;
v++){if(t[v].parentNode){t[v].parentNode.removeChild(t[v])
}}},100);
function o(u,v){if(u){for(q=0,r=u.length;
q<r;
q++){n=u[q];
n.callback.call(n.scope,v)
}}}o(a[k],s);
o(d[k],p)
}function c(m){var l=m+"";
var k=/(\d+)(\d{3})/;
if(m>=10000){l=Math.floor(m/1000);
return c(l)+" k"
}else{if(m>=1000){while(k.test(l)){l=l.replace(k,"$1"+","+"$2")
}return l
}else{return l
}}}})();
IN.addTag("Share",IN.Tags.Share);

/* res://connect-min/dev/tags/mail.js */

Sslac.Class("IN.Tags.Mail").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("Mail");
this.Parent(b,a);
this.emails=a.emails;
this.createFrame();
$_STATISTICS.profile("Mail",true)
}).Method("createFrame",function(){this.el().innerHTML="";
var a={};
a.api_key=IN.ENV.auth.api_key;
a.emails=this.emails;
var b=new IN.Objects.SmartWindow({mode:"embedded",url:IN.ENV.widget.mail_url}).params(a);
b.place(this.el())
});
IN.addTag("Mail",IN.Tags.Mail);

/* res://connect-min/dev/tags/recommendproduct.js */

(function(){Sslac.Class("IN.Tags.RecommendProduct").Extends("IN.Tags.Base").Constructor(function(g,f){$_STATISTICS.profile("RecommendProduct");
this.Parent(g,f);
this.companyId=f.company||null;
this.productId=f.product||null;
this.url=f.url||null;
if(!this.companyId&&!this.url){throw new Error("You must provide either a company ID, a company name, or a URL to a product item")
}this.el().style.textAlign="center";
this.useCounter=f.counter||false;
this.position=this.useCounter||"right";
this.counter=null;
this.button=null;
this.clickedOnce=false;
this.count=0;
this.makeButton();
$_STATISTICS.profile("RecommendProduct",true)
}).Method("makeButton",function(){var g={state:(this.position==="right")?"hidden":null,position:this.position},i=(this.position==="right")?"after":"before",f=$_CONSTANTS.events;
function j(){var k;
if(!this.clickedOnce){this.clickedOnce=true
}if(this.url){k=this.url
}else{k=a(this.companyId,this.productId)
}$_STATISTICS.recordAction("RecommendProduct",f.click);
window.open(k)
}this.button=new IN.Objects.Button({title:$_I18N("recommend")});
this.button.place(this.el());
IN.Event.on(this.button,f.click,j,this);
if(this.useCounter){d({url:this.url,companyId:this.companyId,productId:this.productId},this);
this.counter=new IN.Objects.Callout(g);
this.counter.place(i,this.button.el());
if(this.position==="top"){var h=document.createElement("br");
this.button.el().parentNode.insertBefore(h,this.button.el())
}IN.Event.on(this.button,f.mouseOver,function(){this.counter.setState(f.mouseOver)
},this);
IN.Event.on(this.button,f.mouseOut,function(){this.counter.setState(f.mouseOut)
},this);
IN.Event.on(this.button,f.mouseDown,function(){this.counter.setState(f.mouseDown)
},this);
IN.Event.on(this.button,f.click,function(){this.counter.setState(f.click)
},this);
IN.Event.on(this.counter,f.mouseOver,function(){this.button.setState(f.mouseOver)
},this);
IN.Event.on(this.counter,f.mouseOut,function(){this.button.setState(f.mouseOut)
},this);
IN.Event.on(this.counter,f.mouseDown,function(){this.button.setState(f.mouseDown)
},this);
IN.Event.on(this.counter,f.click,function(){this.button.setState(f.click)
},this);
IN.Event.on(this.counter,f.click,j,this)
}}).Method("setCount",function(f){if(this.counter&&(f!=""||this.position==="top")){this.counter.setState("visible");
this.counter.setContent(b(f))
}});
var c;
function e(f,g,h){return IN.ENV.widget.recommend_product_counter_url.replace(/\{PRODUCT_ID\}/g,g).replace(/\{CALLBACK\}/g,h)
}function a(f,g){return IN.ENV.widget.recommend_product_url.replace(/\{COMPANY_ID\}/g,f).replace(/\{PRODUCT_ID\}/g,g)
}function d(h,f){var i=document.createElement("script"),j=IN.$fn(function(k){if(i.parentNode){i.parentNode.removeChild(i)
}k=k||{};
if(typeof k.count===$_CONSTANTS.types.undef){return
}this.setCount(k.count)
},f,true),g=e(h.companyId,h.productId,j);
if(!c){c=document.getElementsByTagName("head")[0]
}i.type="text/javascript";
i.src=g;
c.appendChild(i)
}function b(h){var g=h+"";
var f=/(\d+)(\d{3})/;
if(h>10000){g=Math.floor(h/1000);
return b(g)+" k"
}else{if(h>1000){while(f.test(g)){g=g.replace(f,"$1"+","+"$2")
}return g
}else{return g
}}}})();
IN.addTag("RecommendProduct",IN.Tags.RecommendProduct);

/* res://connect-min/dev/tags/companyprofile.js */

Sslac.Class("IN.Tags.CompanyProfile").Extends("IN.Tags.Base").Constructor(function(c,a){$_STATISTICS.profile("CompanyProfile");
var d=300,b=(2*(5+2)),e=$_CONSTANTS.formats;
this.Parent(c,a);
if(!a.id){return
}this.id=a.id;
this.format=a.format||e.hover;
if(this.format===e.inline){this.width=parseInt(a.width,10)-b;
if(this.width>0&&this.width<(d-b)){this.width=(d-b)
}}this.related=a.related||true;
this.text=a.text||"";
this.createFrame();
$_STATISTICS.profile("CompanyProfile",true)
}).Method("createFrame",function(){var b={companyIdentifier:this.id,format:this.format},g=$_CONSTANTS.events,j=$_CONSTANTS.states,d=$_CONSTANTS.formats,i=$_CONSTANTS.modes,a=$_GLOBALS.hovercardOffset(20),f,e;
if(this.related==="false"){b.related=false
}if(this.width>0){b.width=this.width
}if(this.format===d.inline){this.el().innerHTML="";
var c=new IN.Objects.SmartWindow({mode:i.embedded,url:IN.ENV.widget.company_url}).params(b);
c.place(this.el())
}else{var h=(this.format===d.click)?g.click:g.mouseOver;
e=new IN.Objects.InLink({text:this.text});
e.place(this.el());
IN.Event.on(e,h,function(){if(this.open){return
}this.open=true;
e.setState(j.pending);
f=new IN.Objects.SmartWindow({mode:i.hovercard,anchor:{fixed:e.el(),movable:null,context:a},url:IN.ENV.widget.company_url},this).params(b);
f.ready(function(){e.setState(j.normal)
});
f.place(this.el());
f.onWindowCreate.subscribe(function(){this.windowOpen=true
})
},this);
IN.Event.on(document,g.click,function(){if(this.open){this.open=false;
e.setState(j.normal)
}},this)
}});
IN.addTag("CompanyProfile",IN.Tags.CompanyProfile);

/* res://connect-min/dev/tags/memberprofile.js */

Sslac.Class("IN.Tags.MemberProfile").Extends("IN.Tags.Base").Constructor(function(c,a){$_STATISTICS.profile("MemberProfile");
var d=300,b=(2*(5+2)),e=$_CONSTANTS.formats;
this.Parent(c,a);
if(!a.id){return
}this.id=a.id;
this.format=a.format||e.hover;
if(this.format===e.inline){this.width=parseInt(a.width,10)-b;
if(this.width>0&&this.width<(d-b)){this.width=(d-b)
}}this.related=a.related||true;
this.text=a.text||"";
this.createFrame();
$_STATISTICS.profile("MemberProfile",true)
}).Method("createFrame",function(){var b={public_profile_url:this.id,format:this.format},g=$_CONSTANTS.events,j=$_CONSTANTS.states,d=$_CONSTANTS.formats,i=$_CONSTANTS.modes,a=$_GLOBALS.hovercardOffset(20),f,e;
if($_PATTERNS.types.boolFalse.test(this.related)){b.related=false
}if(this.width>0){b.width=this.width
}if(this.format===d.inline){this.el().innerHTML="";
var c=new IN.Objects.SmartWindow({mode:i.embedded,url:IN.ENV.widget.member_profile_url}).params(b);
c.place(this.el())
}else{var h=(this.format===d.click)?g.click:g.mouseOver;
this.open=false;
e=new IN.Objects.InLink({text:this.text});
e.place(this.el());
IN.Event.on(e,h,function(){if(this.open){return
}this.open=true;
e.setState(j.pending);
f=new IN.Objects.SmartWindow({mode:i.hovercard,anchor:{fixed:e.el(),movable:null,context:a},url:IN.ENV.widget.member_profile_url},this).params(b);
f.ready(function(){e.setState(j.normal)
});
f.place(this.el());
f.onWindowCreate.subscribe(function(){this.windowOpen=true
})
},this);
IN.Event.on(document,g.click,function(){if(this.open){this.open=false;
e.setState(j.normal)
}},this)
}});
IN.addTag("MemberProfile",IN.Tags.MemberProfile);

/* res://connect-min/dev/tags/companyinsider.js */

Sslac.Class("IN.Tags.CompanyInsider").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("CompanyInsider");
this.Parent(b,a);
if(!a.id){return
}this.id=a.id;
this.modules=a.modules||"";
this.createFrame();
$_STATISTICS.profile("CompanyInsider",true)
}).Method("createFrame",function(){var a={companyIdentifier:this.id,modules:this.modules};
this.el().innerHTML="";
var b=new IN.Objects.SmartWindow({mode:"embedded",url:IN.ENV.widget.company_insider_url}).params(a);
b.place(this.el())
});
IN.addTag("CompanyInsider",IN.Tags.CompanyInsider);

/* res://connect-min/dev/tags/wizard.js */

Sslac.Class("IN.Tags.Wizard").Extends("IN.Tags.Base").Constructor(function Wizard(c,b){$_STATISTICS.profile("Wizard");
this.Parent(c,b);
this.size=(b.size=="large")?"large":"small";
var d={large:"pic_wizard_423x423.png",small:"pic_wizard_212x212.png"},e=IN.ENV.images.sprite.replace(/\/sprite\/.*/,"")+"/pic/"+d[this.size],a=document.createElement("img");
a.src=e;
a.style.border=0;
c.appendChild(a);
$_STATISTICS.profile("Wizard",true)
});
IN.addTag("Wizard",IN.Tags.Wizard);

/* res://connect-min/dev/tags/jymbii.js */

Sslac.Class("IN.Tags.jymbii").Extends("IN.Tags.Base").Constructor(function(c,f){$_STATISTICS.profile("JYMBII");
this.Parent(c,f);
var a=$_GLOBALS.hovercardOffset(20),l=f.format,k=$_CONSTANTS.events,o=$_CONSTANTS.states,e=$_CONSTANTS.formats,n=$_CONSTANTS.modes,j=f.embed?f.embed:false,d={companyId:f.companyid,industry:f.industry,jobFunction:f.jobfunction,country:f.country,max:j?3:f.max,title:f.title,embed:j,callback:f.callback?true:false};
if(l===e.inline){var h=new IN.Objects.SmartWindow({mode:n.embedded,url:IN.ENV.widget.jymbii_url}).params(d);
if(d.callback){var b=this.parseAttribute(f.callback,"callback");
for(i=0,len=b.length;
i<len;
i++){h.success(b[i],this)
}}h.place(this.el())
}else{var g=new IN.Objects.InLink({text:f.text}),m=(l===e.click)?k.click:k.mouseOver;
g.place(this.el());
IN.Event.on(g,m,function(){if(this.open){return
}this.open=true;
g.setState(o.pending);
var p=new IN.Objects.SmartWindow({mode:n.hovercard,anchor:{fixed:g.el(),movable:null,context:a},url:IN.ENV.widget.jymbii_url},this).params(d);
p.ready(function(){g.setState(o.normal)
});
p.place(g.el())
},this);
IN.Event.on(document,k.click,function(){if(this.open){this.open=false;
g.setState(o.normal)
}},this)
}$_STATISTICS.profile("JYMBII",true)
});
IN.addTag("jymbii",IN.Tags.jymbii);

/* res://connect-min/dev/tags/followcompany.js */

Sslac.Class("IN.Tags.Followcompany").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("Followcompany");
a=a||{};
this.Parent(b,a);
this.id=a.id||"plugin-Followcompany";
this.attributes=a;
this.createFrame();
$_STATISTICS.profile("Followcompany",true)
}).Method("createFrame",function(){this.el().innerHTML="";
var a={companyIdentifier:this.attributes.id,counterPosition:this.attributes.counter||"none"};
var b=new IN.Objects.SmartWindow({mode:"embedded",disableRefresh:true,url:IN.ENV.widget.followcompany_url}).params(a);
b.place(this.el())
});
IN.addTag("Followcompany",IN.Tags.Followcompany);

/* res://connect-min/dev/tags/csapbeacon.js */

Sslac.Class("IN.Tags.CsapBeacon").Extends("IN.Tags.Base").Constructor(function(b,h){$_STATISTICS.profile("CsapBeacon");
h=h||{};
this.Parent(b,h);
var n=$_CONSTANTS.modes;
var f={contractId:h.contractid,urlParserKey:h.urlparserkey,extra:h.extra,url:document.URL,referrer:document.referrer,apiKey:IN.ENV.auth.api_key,activity:h.activity,jobCode:h.jobcode,topUrl:"",topReferrer:""};
try{f.topUrl=window.top.document.URL;
f.topReferrer=window.top.document.referrer
}catch(j){}if(!f.activity){try{var k=document.getElementById("li-csapbeacon-"+IN.ENV.auth.api_key);
if(k){var c;
if(k.tagName.toLowerCase()==="img"){var a=k.src.indexOf("?");
if(a!==-1){c=k.src.substring(a+1)
}}if(!c){c=k.getAttribute("data-activity")
}if(c){f.activity=c
}}else{var l=document.getElementsByTagName("img");
var i="?"+IN.ENV.auth.api_key+"_";
for(var m=0;
m<l.length;
++m){var d=l[m];
var a=d.src.indexOf(i);
if(a!==-1){f.activity=d.src.substring(a+i.length);
break
}}}}catch(j){}}var g=new IN.Objects.SmartWindow({mode:n.invisible,url:IN.ENV.widget.csap_beacon_url}).params(f);
g.place(this.el());
$_STATISTICS.profile("CsapBeacon",true)
});
IN.addTag("CsapBeacon",IN.Tags.CsapBeacon);

/* res://connect-min/dev/tags/followmember.js */

Sslac.Class("IN.Tags.Followmember").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("Followmember");
a=a||{};
this.Parent(b,a);
this.id=a.id;
this.format=a.format;
if(this.format!=="icon"){this.format="text"
}this.size=a.size;
if(this.size!=="25"&&this.size!=="33"&&this.size!=="48"){this.size="20"
}this.width=(typeof a.width!==$_CONSTANTS.types.undef)?parseInt(a.width,10):0;
if(isNaN(this.width)){this.width=0
}this.createFrame();
$_STATISTICS.profile("Followmember",true)
}).Method("createFrame",function(){this.el().innerHTML="";
var a={public_profile_url:this.id,format:this.format,size:this.size};
if(this.width>0){a.width=this.width
}var b=new IN.Objects.SmartWindow({mode:"embedded",url:IN.ENV.widget.followmember_url}).params(a);
b.place(this.el())
});
IN.addTag("Followmember",IN.Tags.Followmember);

/* res://connect-min/dev/tags/leadgen.js */

Sslac.Class("IN.Tags.Leadgen").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("Leadgen");
a=a||{};
this.Parent(b,a);
this.id=a.id;
this.lbkt=a.lbkt;
this.an=a.an;
this.width=(typeof a.width!==$_CONSTANTS.types.undef)?parseInt(a.width,10):0;
if(isNaN(this.width)){this.width=0
}this.createFrame();
$_STATISTICS.profile("Leadgen",true)
}).Method("createFrame",function(){this.el().innerHTML="";
var a={api_key:IN.ENV.auth.api_key,cpgn:this.id,lbkt:this.lbkt,an:this.an};
if(this.width>0){a.width=this.width
}var b=new IN.Objects.SmartWindow({mode:"embedded",url:IN.ENV.widget.leadgen_url}).params(a);
b.place(this.el())
});
IN.addTag("Leadgen",IN.Tags.Leadgen);

/* res://connect-min/dev/objects/lib.js */

Sslac.Function("IN.Objects.Lib.center",function(b){var a=IN.Objects.Lib.getCenter(b);
b.style.top=a.top+"px";
b.style.left=a.left+"px"
});
Sslac.Function("IN.Objects.Lib.anchor",function(f,d,g){var l=IN.Objects.Lib.getXY(f),o=IN.Objects.Lib.getDimensions(f),b=IN.Objects.Lib.getDimensions(d),y=IN.Objects.Lib.getViewport(),h=IN.Objects.Lib.getDimensions(document.body),t=Math.max(y.width||0,h.width||0,(l.x+l.width)||0),a=Math.max(y.height||0,h.height||0,h.scrollHeight||0,(l.y+l.height)||0),e=null,k=0,j=0,u=0,m=0,q=0,x=0,w=0,v=0,c=0,s=0,r=0;
for(var n=0,p=g.length;
n<p;
n++){e=g[n];
j=0;
u=0;
m=0;
q=0;
r=e.offsetY||0;
s=e.offsetX||0;
switch(e.fixed.toLowerCase()){case"tl":j=l.x;
m=l.y;
u=j+b.width;
q=m+b.height;
break;
case"tr":j=l.x+o.width;
m=l.y;
u=j+b.width;
q=m+b.height;
break;
case"bl":j=l.x;
m=l.y+o.height;
u=j+b.width;
q=m+b.height;
break;
case"br":j=l.x+o.width;
m=l.y+o.height;
u=j+b.width;
q=m+b.height;
break
}switch(e.movable.toLowerCase()){case"tl":break;
case"tr":j=j-b.width;
u=u-b.width;
break;
case"bl":m=m-b.height;
q=q-b.height;
break;
case"br":j=j-b.width;
u=u-b.width;
m=m-b.height;
q=q-b.height;
break
}j=j+s;
u=u+s;
m=m+r;
q=q+r;
if(n===0){k=e;
x=j;
w=u;
v=m;
c=q
}if(u<=t&&q<=a&&j>=0&&m>=0){k=e;
x=j;
w=u;
v=m;
c=q;
break
}}d.style.left=x+"px";
d.style.top=v+"px";
return k
});
Sslac.Function("IN.Objects.Lib.getScrollOffsets",function(){var c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
var a=[c,b];
a.left=c;
a.top=b;
return a
});
Sslac.Function("IN.Objects.Lib.getXY",function(a){function b(d,c){c=c.substr(0,1).toUpperCase()+c.substr(1);
var e=d["offset"+c]+d["scroll"+c];
while((d=d.offsetParent)!==null){if(/^(relative|absolute)$/.test(IN.Util.getStyle(d,"position"))){break
}e+=d["offset"+c]
}return e
}return{x:b(a,"left"),y:b(a,"top")}
});
Sslac.Function("IN.Objects.Lib.UA",(function UAClosure(){var a=navigator.userAgent;
var i=0;
var g=0;
var d=0;
var b=0;
var e=0;
var c=0;
var f=0;
var h="compatMode";
var j=(document[h]==="BackCompat");
var k=$_PATTERNS.userAgents;
(function(){if(k.iosAll.test(a)){f=1;
i=1;
if(k.ios5.test(a)){e=1
}else{if(k.ios6.test(a)){c=1
}}}else{if(k.webkit.test(a)){i=1
}else{if(k.opera.test(a)){d=1
}else{if(k.msie.test(a)){g=1
}else{if(k.gecko.test(a)){b=1
}}}}}}());
return{isIE:function(){return g
},isWebkit:function(){return i
},isOpera:function(){return d
},isGecko:function(){return b
},isIOSAll:function(){return f
},isIOS5:function(){return e
},isIOS6:function(){return c
},isSingleTabJS:function(){return f
},isQuirksMode:function(){return j
},hasPausingIssue:function(){return f
}}
}()));
(function(){Sslac.Function("IN.Objects.Lib.getViewport",function(){var d={};
var c="compatMode";
var a=document[c];
var b="CSS1Compat";
d={width:window.self.innerWidth,height:window.self.innerHeight};
if(d.width&&d.height){return d
}if(d.width&&d.height){return d
}if((a||IN.Objects.Lib.UA.isIE())&&!IN.Objects.Lib.UA.isOpera()){if(a===b){d.height=document.documentElement.clientHeight
}else{d.height=document.body.clientHeight
}}if(a||IN.Objects.Lib.UA.isIE()){if(a===b){d.width=document.documentElement.clientWidth
}else{d.width=document.body.clientWidth
}}return d
})
}());
Sslac.Function("IN.Objects.Lib.getDimensions",function(d){function c(){var j=document.body,f=0,i=0,g=j.style.overflow;
if(IN.Objects.Lib.UA.isGecko()){j.style.overflow="auto"
}f=j.scrollWidth;
i=j.clientHeight;
if(IN.Objects.Lib.UA.isGecko()){j.style.overflow=g
}return{width:f,height:i,scrollHeight:j.scrollHeight}
}if(d===document.body){return c()
}var a=d.offsetWidth,b=(d.offsetHeight>d.clientHeight)?d.offsetHeight:d.clientHeight,e;
e=[a,b];
e.width=a;
e.height=b;
return e
});
Sslac.Function("IN.Objects.Lib.getCenter",function(c){var b=IN.Objects.Lib.getScrollOffsets(),d=IN.Objects.Lib.getViewport(),g=IN.Objects.Lib.getDimensions(c),f=b.left+((d.width-g.width)/2),e=b.top+((d.height-g.height)/2);
if(e<0){e=0
}if(f<0){f=0
}var a={top:e,right:(f+g.width),bottom:(e+g.height),left:f};
return a
});
Sslac.Function("IN.Objects.Lib.getCurrentPosition",function(b){var a={top:b.offsetTop||0,left:b.offsetLeft||0};
b=b.offsetParent;
while(b){a.top+=b.offsetTop;
a.left+=b.offsetLeft;
b=b.offsetParent
}return a
});
Sslac.Function("IN.Objects.Lib.getAnimationInterval",function(c,b){b=b||45;
var a={};
a.interval=1000/b;
a.total=c/a.interval;
return a
});
Sslac.Function("IN.Objects.Lib.shake",function(c,b){b=b||{};
b={duration:b.duration||300,frequency:b.frequency||2,cycles:b.cycles||Math.PI,amplitude:b.amplitude||20,decay:b.decay||3,axis:b.axis||"x"};
var d=IN.Objects.Lib.getAnimationInterval(b.duration);
var h=(b.axis==="x")?"left":"top";
var g=IN.Objects.Lib.getCurrentPosition(c);
function e(j){return b.amplitude*Math.cos(b.frequency*j*2*Math.PI)/Math.exp(b.decay*j)
}var i=b.cycles/d.total;
var f=0;
function a(){if(d.total>0){c.style[h]=(g[h]+e(f))+"px";
f+=i;
d.total--;
setTimeout(a,d.interval)
}}a()
});
Sslac.Function("IN.Objects.Lib.slideTo",function(f,k,c){c=c||{};
c={duration:c.duration||700,bounce:c.bounce||0.2};
var g=IN.Objects.Lib.getAnimationInterval(c.duration);
var e=IN.Objects.Lib.getCurrentPosition(f);
var j={top:(k.top-e.top),left:(k.left-e.left)};
var d=g.total;
if(c.bounce){var a={top:(c.bounce*2*j.top),left:(c.bounce*2*j.left)};
var i={top:0,left:0};
j.top+=a.top;
j.left+=a.left;
if(j.top!==0){i.top=Math.abs(a.top/j.top)
}if(j.left!==0){i.left=Math.abs(a.left/j.left)
}i=Math.max(i.top,i.left);
d=(1-i)*g.total
}var h=(1+g.total)*(g.total/2);
if(c.bounce){h=h*(1-(2*c.bounce))
}j.top=j.top/h;
j.left=j.left/h;
function b(){if(g.total>0){e.top+=j.top*d;
e.left+=j.left*d;
f.style.top=e.top+"px";
f.style.left=e.left+"px";
g.total--;
d--;
setTimeout(b,g.interval)
}}b()
});
Sslac.Function("IN.Objects.Lib.setShadowExempt",function(a){IN.Util.addClass(a,"IN-noshadow")
});
Sslac.Function("IN.Objects.Lib.setShadowBox",function(b,g){b=b||false;
g=g||{};
g={color:g.color||"#000000",opacity:(IN.ENV.js.isFramed)?0:(g.opacity||0.6),altOpacity:(IN.ENV.js.isFramed)?$_GLOBALS.shadowBox.altOpacity:1,zIndex:g.zIndex||"9990"};
var j,n=$_GLOBALS.shadowBox.theClass,k="IN-shadow-enabled",f="IN-noshadow",m=$_CONSTANTS.suffixes.important;
if(!$_GLOBALS.shadowBox.node){if(!b){return
}var c=IN.$uid("li_ui_shadowbox");
j=$_GLOBALS.shadowBox.node=document.createElement("div");
j.id=c;
IN.Objects.Lib.setShadowExempt(j);
document.body.insertBefore(j,document.body.firstChild);
IN.Util.addCSS(["","."+n+" { ","-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity="+(g.altOpacity*100)+")'"+m,"filter: alpha(opacity="+(g.altOpacity*100)+")"+m,"-moz-opacity: "+(g.altOpacity)+m,"opacity: "+(g.altOpacity)+m,"}",""].join(""));
IN.Util.addCSS(["","#"+c+" { ","position: "+((IN.Objects.Lib.UA.isQuirksMode()&&IN.Objects.Lib.UA.isIE())?"absolute":"fixed")+m,"-ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity="+(g.opacity*100)+")'"+m,"filter: alpha(opacity="+(g.opacity*100)+")"+m,"-moz-opacity: "+(g.opacity)+m,"opacity: "+(g.opacity)+m,"background-color: "+g.color+m,"z-index: "+g.zIndex+m,"top: 0"+m,"left: 0"+m,"}",""].join(""))
}else{j=$_GLOBALS.shadowBox.node
}if(!b){IN.Util.removeClass(document.body,k);
var a=IN.$Class(n);
for(var h=0,l=a.length;
h<l;
h++){IN.Util.removeClass(a[h],n)
}j.style.display="none";
return
}if(IN.ENV.js.isFramed){IN.Util.addClass(document.body,k);
var e=document.body.firstChild;
while(e){if(!IN.Util.hasClass(e,f)){IN.Util.addClass(e,n)
}e=e.nextSibling
}}function d(){var o=IN.Objects.Lib.getViewport(),i=IN.Objects.Lib.getDimensions(document.body);
j.style.width=Math.max(i.width,o.width)+"px";
j.style.height=Math.max(i.height,i.scrollHeight,o.height)+"px"
}IN.Event.on(window,$_CONSTANTS.events.resize,d,j);
d();
j.style.display="block"
});

/* res://connect-min/dev/tags/lilaform.js */

Sslac.Class("IN.Tags.Lilaform").Extends("IN.Tags.Base").Constructor(function(b,a){$_STATISTICS.profile("Lilaform");
a=a||{};
this.Parent(b,a);
this.id=a.id||"plugin-Lilaform";
this.width=(typeof a.width!==$_CONSTANTS.types.undef)?parseInt(a.width,10):0;
if(isNaN(this.width)){this.width=0
}this.formid=a.formid||a.form||null;
this.attributes=a;
this.createFrame();
$_STATISTICS.profile("Lilaform",true)
}).Method("createFrame",function(){this.uniqueid=IN.Util.getUniqueID();
this.el().innerHTML="";
var a={api_key:IN.ENV.js.apiKey,uuid:this.uniqueid};
if(this.width>0){a.width=this.width
}var c=this.userFields={};
var b=this.attributes;
for(var d in b){if(d.indexOf("field-")===0){c[b[d].toLowerCase()]=d.substring(6)
}}this.getProfileToElementMapping=function(i){var j=i.nodeName.toLowerCase();
if(!j||(j!=="input"&&j!=="select")){return false
}var h=i.getAttribute("type");
if(h&&h.length>0&&h.toLowerCase()==="hidden"){return false
}var k=i.getAttribute("data-in-profile");
if(k&&k.length>0){return k
}var l=i.getAttribute("placeholder");
if(l&&l.length>0){l=l.toLowerCase();
if(c[l]&&c[l].length>0){return c[l]
}}var g=i.getAttribute("name");
if(g&&g.length>0){g=g.toLowerCase();
if(c[g]&&c[g].length>0){return c[g]
}}if(i.id&&i.id.length>0){var m=i.id.toLowerCase();
if(c[m]&&c[m].length>0){return c[m]
}}if(g&&g.length>0){return g
}return false
};
this.setValue=function(l,m){if(l.nodeName==="SELECT"){var j=l.getElementsByTagName("option");
var h=m.toLowerCase();
try{for(var k=0;
k<j.length;
k++){if(j[k].value.toLowerCase()===h){j[k].selected=true
}}}catch(n){}}else{l.value=m
}if("createEvent" in document){var g=document.createEvent("HTMLEvents");
g.initEvent("change",false,true);
l.dispatchEvent(g)
}else{l.fireEvent("onchange")
}};
var e;
if(this.formid){e=document.getElementById(this.formid)||document.forms[this.formid]
}e=e||document.forms[0];
var f=new IN.Objects.SmartWindow({mode:"embedded",disableRefresh:true,url:IN.ENV.widget.lilaform_url}).params(a);
f.success(function(p){var l=[];
if(p.tracking&&p.tracking["onSubmit"]){this.submitUrl=p.tracking["onSubmit"]
}if(!p.data||!e){return
}var h=e.elements;
var n=h.length;
for(var j=0;
j<n;
j++){var m=this.getProfileToElementMapping(h[j]);
if(!m){continue
}m=m.toLowerCase();
var o=p.data[m];
if(o&&o.length>0){this.setValue(h[j],o);
l.push(m)
}}var k=new Image();
if(p.tracking&&p.tracking["onClick"]){var g=p.tracking["onClick"].replace(/&amp;/g,"&");
g=g.replace(/__FIELDS_FILLED__/g,encodeURIComponent(l));
g=g.replace(/__API_KEY__/g,encodeURIComponent(IN.ENV.js.apiKey));
g=g.replace(/__UNIQUE_ID__/g,encodeURIComponent(this.uniqueid));
k.src=g
}},this);
f.place(this.el());
IN.Event.onOnce(e,"submit",function(h){if(this.submitUrl){h.preventDefault();
var g=new Image();
var i=this.submitUrl.replace(/&amp;/g,"&");
i=i.replace(/__API_KEY__/g,encodeURIComponent(IN.ENV.js.apiKey));
i=i.replace(/__UNIQUE_ID__/g,encodeURIComponent(this.uniqueid));
var j=window.setTimeout(function(){e.submit();
g.onerror=g.onload=null
},1000);
g.onerror=g.onload=function(){e.submit();
window.clearTimeout(j)
};
g.src=i+"&rand="+(new Date()).getTime()
}},this)
});
IN.addTag("Form",IN.Tags.Lilaform);

/* res://connect-min/dev/objects/base.js */

(function(){var d;
Sslac.Class("IN.Objects.Base").Constructor(function(i){var h=document.createElement("span"),j={"padding":"0","margin":"0","text-indent":"0","display":"inline-block","vertical-align":"baseline"};
if(!i.suppressFont){j["font-size"]="1px"
}h.style.cssText=this.createStyle(j);
this.el=function(){return h
};
this.components={};
this.componentId=null;
this.placed=false;
this.handlers=[]
}).Method("removeHandler",function(i,h){return function(p,r,m,k){if(this.isPlaced()){IN.Event.remove(i,h,p,r,m,k)
}else{var l=this.handlers;
var j=[];
for(var n=0,o=l.length;
n<o;
n++){var q=l[n];
if(q.id!==i||q.on!==h||q.fn!==p||q.scope!==r||q.obj!==m||q.once!==k){j.push(q)
}}this.handlers=j
}}
}).Method("addHandler",function(j,h){var i=function(m,l,n,k){var m=m;
var o=function(p,q){if(!i.enabled){return false
}if(q){m.call(this,p,q)
}else{m.call(this,p)
}};
if(this.isPlaced()){IN.Event.on(j,h,o,l,n,k)
}else{this.handlers[this.handlers.length]={id:j,on:h,fn:o,scope:l,obj:n,once:k}
}};
i.enabled=true;
return i
}).Method("createTemplate",function(h){return IN.Util.createJSTemplate(h)
}).Method("place",function(){var k=[].slice.apply(arguments),j="",o=null,m=this.el();
if(!k[0]){j="in";
o=document.body
}else{if(!k[1]){j="in";
o=k[0]
}else{j=k[0];
o=k[1]
}}switch(j){case"in":o.appendChild(m);
break;
case"before":o.parentNode.insertBefore(m,o);
break;
case"after":if(o.nextSibling){o.nextSibling.parentNode.insertBefore(m,o.nextSibling)
}else{o.parentNode.appendChild(m)
}break
}this.placed=true;
for(var l=0,h=this.handlers.length;
l<h;
l++){var n=this.handlers[l];
IN.Event.on(n.id,n.on,n.fn,n.scope,n.obj,n.once)
}this.handlers=[];
return this
}).Method("remove",function(){var h=this.el();
if(h.parentNode){h.parentNode.removeChild(h)
}this.placed=false
}).Method("isPlaced",function(){return this.placed
}).Method("createStyle",function(l){var j,i=[],k="",h;
if(!d){j=navigator.userAgent;
d=($_PATTERNS.userAgents.webkit.test(j))?"Webkit":($_PATTERNS.userAgents.gecko.test(j))?"Gecko":($_PATTERNS.userAgents.msie.test(j))?"MSIE":(window.opera)?"Opera":"other"
}for(h in l){if(typeof(l[h])==$_CONSTANTS.types.object){k=l[h][d]||l[h]["other"]
}else{k=l[h]
}if(!k){continue
}i[i.length]=h+":"+k+$_CONSTANTS.suffixes.important
}return i.join("")
}).Method("setComponentId",function g(h){this.componentId=h
}).Method("registerComponent",function b(i,h,j){j=j||"normal";
this.components[i]=h
}).Method("getComponent",function a(i,k,j){var h=this.components[i]||"",k=k||"",j=j||"";
h=h.replace(/\{ID\}/g,this.componentId).replace(/\{\.STATE\}/g,(k)?"."+k:"").replace(/\{\#STATE\}/g,(k)?"#"+k:"").replace(/\{:PSEUDO\}/g,(j)?":"+j:"");
return h
}).Method("createCSS",function c(m,l,n){if(!IN.Util.isArray(m)){m=[m]
}var k=[],n=(typeof n===$_CONSTANTS.types.undef)?"":n+" ";
for(var j=0,h=m.length;
j<h;
j++){k.push(n+this.getComponent(m[j].component,m[j].state,m[j].pseudo))
}return[k.join(", "),"{",l,"}"].join("")
}).Method("addCSS",function f(h){return IN.Util.addCSS(h)
}).Method("computeGradientStyle",function e(i,h){return IN.Util.computeGradientStyle(i,h)
}).Method("generateId",function(h){h=(h)?"li_ui_"+h:"li_ui";
return IN.$uid(h)
})
})();

/* res://connect-min/dev/objects/button.js */

(function(){var a={};
Sslac.Class("IN.Objects.Button").Extends("IN.Objects.Base").Constructor(function(c){c=c||{};
this.config={titles:(typeof c.title===$_CONSTANTS.types.object)?c.title:{"normal":c.title||""},highlight:(c.highlight===false)?false:true,theme:(c.theme||"basic").toLowerCase(),size:(c.size||"small").toLowerCase(),useLogo:(c.useLogo===false||!IN.ENV.images||!IN.ENV.images.sprite)?false:true,showSuccessMark:c.showSuccessMark||false,normalizeSize:c.normalizeSize||false,isRetina:IN.Util.isRetina(),useRetinaAsset:false};
this.config.useRetinaAsset=(this.config.theme==="flat"&&this.config.isRetina)?true:false;
this.config.titles.normal||(this.config.titles.normal="");
this.Parent(this.config);
this.setButtonStyles();
this.currentTitleText=this.config.titles.normal;
var b=this.generateId(),h={},e=false,i=this,j=[],d=$_CONSTANTS.events,f;
for(var g in this.config.titles){if(this.config.titles.hasOwnProperty(g)){j.push(""+g+":"+this.config.titles[g])
}}f=[j.join("|"),this.config.showSuccessMark,this.config.useLogo,this.config.theme,this.config.size].join("::");
this.memoizer=a[f]=a[f]||{};
this.setComponentId(b);
this.registerComponent("outer","#{0}{.STATE}");
this.registerComponent("link","#{0}{.STATE} a#{0}-link{:PSEUDO}");
this.registerComponent("logo","#{0}{.STATE} #{0}-logo");
this.registerComponent("title","#{0}{.STATE} #{0}-title");
this.registerComponent("titleText","#{0}{.STATE} #{0}-title-text");
this.registerComponent("titleChild","#{0}{.STATE} #{0}-title-text *");
this.registerComponent("titleChildBold","#{0}{.STATE} #{0}-title-text strong");
this.registerComponent("titleChildItalic","#{0}{.STATE} #{0}-title-text em");
this.registerComponent("mark","#{0}{.STATE} #{0}-title #{0}-mark");
if(!this.memoizer.styles){this.memoizer.styles=["",this.getBaseStyles(),this.getLogoStyles(),this.getTitleStyles(),this.getSuccessStyles(),""].join("")
}h=IN.Util.formatString(this.memoizer.styles,b);
IN.Util.addCSS(h);
if(!this.memoizer.markup){this.memoizer.markup=["",'<span id="{0}">','<a id="{0}-link" href="javascript:void(0);">',(this.config.useLogo)?'<span id="{0}-logo">in</span>':"",(this.config.titles.normal)?'<span id="{0}-title"><span id="{0}-mark"></span><span id="{0}-title-text">'+this.config.titles.normal+"</span></span>":"","</a>","</span>",""].join("")
}this.el().innerHTML=IN.Util.formatString(this.memoizer.markup,b);
this.mainNodeId=b;
this.onClick=this.addHandler(b,d.click.toLowerCase());
this.onMouseDown=this.addHandler(b,d.mouseDown.toLowerCase());
this.onMouseOver=this.addHandler(b,d.mouseOver.toLowerCase());
this.onMouseOut=this.addHandler(b,d.mouseOut.toLowerCase());
this.onClick(function(k){this.setState(d.click)
},this);
this.onMouseDown(function(k){this.setState(d.mouseDown)
},this);
this.onMouseOver(function(k){this.setState(d.mouseOver)
},this);
this.onMouseOut(function(){this.setState(d.mouseOut)
},this)
}).Method("computeBoxShadow",function(d,c){if(c.off){return""
}var b={w3c:c.horizontal+"px "+c.vertical+"px "+c.blur+"px "+c.color};
return b[d]||b.w3c
}).Method("setState",function(e){if(!this.mainNode){this.mainNode=IN.$Id(this.mainNodeId);
if(!this.mainNode){return
}}var d=this,c=$_CONSTANTS.events,b=$_CONSTANTS.states;
switch(e){case c.mouseOver:IN.Util.addClass(this.mainNode,b.hovered);
break;
case c.mouseOut:IN.Util.removeClass(this.mainNode,b.hovered);
IN.Util.removeClass(this.mainNode,b.down);
break;
case c.mouseDown:IN.Util.removeClass(this.mainNode,b.hovered);
IN.Util.addClass(this.mainNode,b.down);
break;
case c.click:if(IN.Util.hasClass(this.mainNode,b.clicked)){return
}IN.Util.addClass(this.mainNode,b.clicked);
window.setTimeout(function(){d.setState(b.normal)
},2000);
break;
case c.success:IN.Util.addClass(this.el(),b.success);
this.success=true;
break;
case c.unSuccess:IN.Util.removeClass(this.el(),b.success);
this.success=false;
case"normal":IN.Util.removeClass(this.mainNode,b.hovered);
IN.Util.removeClass(this.mainNode,b.down);
IN.Util.removeClass(this.mainNode,b.clicked);
break
}var g=this.config.titles,f=((this.success)?g.success:g[e])||g.normal;
this.setTitleText(f)
}).Method("getSuccessStyles",function(){if(this.config.titles.normal===""){return""
}var f=this.settings,c="",j="",h=$_CONSTANTS.events,i=$_CONSTANTS.states,e=$_CONSTANTS.prefixes.klass+i.success,b=$_CONSTANTS.prefixes.klass+$_GLOBALS.shadowBox.theClass+" "+e;
function d(l,k){switch(l){case"title":return{"color":f.color.success[k],"border-top-color":f.border.color.success[k].top,"border-right-color":f.border.color.success[k].right,"border-bottom-color":f.border.color.success[k].bottom,"border-left-color":f.border.color.success[k].left,"background-color":f.background.success[k],"background-image":{Webkit:IN.Util.computeGradientStyle("webkit",f.gradient.success[k]),Gecko:IN.Util.computeGradientStyle("gecko",f.gradient.success[k]),MSIE:IN.Util.computeGradientStyle("msie",f.gradient.success[k]),Opera:IN.Util.computeGradientStyle("opera",f.gradient.success[k]),other:IN.Util.computeGradientStyle("w3c",f.gradient.success[k])},"filter":{MSIE:IN.Util.computeGradientStyle("msieold",f.gradient.success[k])}};
break;
case"text":return{"color":f.color.success[k]};
break;
case"shadowed":return{"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+") "+IN.Util.computeGradientStyle("msieold",f.gradient.success[k])}};
break
}return""
}if(this.config.showSuccessMark){var g=f.mark.margin;
g=[g.top||"0",g.right||"0",g.bottom||"0",g.left||"0"].join("px ")+"px";
c=this.createCSS({component:"mark"},this.createStyle({"width":f.mark.width+"px","height":f.mark.height+"px","background":"url("+IN.ENV.images.sprite+") "+f.mark.background.join("px ")+"px no-repeat","margin":g,"display":"inline-block"}),e);
j=this.createCSS({component:"mark"},this.createStyle({"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+")"}}),b)
}return["",c,j,this.createCSS({component:"title"},this.createStyle(d("title",h.normal)),e),this.createCSS([{component:"titleText"},{component:"titleChild"}],this.createStyle(d("text",h.normal)),e),this.createCSS({component:"title"},this.createStyle(d("shadowed",h.normal)),b),this.createCSS({component:"title",state:i.hovered},this.createStyle(d("title",h.hover)),e),this.createCSS([{component:"titleText",state:i.hovered},{component:"titleChild",state:i.hovered}],this.createStyle(d("text",h.hover)),e),this.createCSS([{component:"title",state:i.clicked},{component:"title",state:i.down}],this.createStyle(d("title",h.click)),e),this.createCSS([{component:"titleText",state:i.clicked},{component:"titleText",state:i.down},{component:"titleChild",state:i.clicked},{component:"titleChild",state:i.down}],this.createStyle(d("text",h.click)),e),this.createCSS([{component:"title",state:i.clicked},{component:"title",state:i.down}],this.createStyle(d("shadowed",h.click)),b),""].join("")
}).Method("getSetting",function(b){return this.settings[b]
}).Method("place",function(){if(this.config.normalizeSize){if(!this.memoizer.width){this.Parent();
if(!this.mainNode){this.mainNode=IN.$Id(this.mainNodeId)
}if(!this.titleNode){this.titleNode=IN.$Id(this.mainNodeId+"-title")
}var b={visibility:this.mainNode.style.visibility,position:this.mainNode.style.position,left:this.mainNode.style.left};
this.mainNode.style.visibility="hidden";
this.mainNode.style.position="absolute";
this.mainNode.style.left="-9999em";
var d=[],f=this.config.titles;
for(var c in f){if(f.hasOwnProperty(c)){this.setState(c);
d.push(IN.Objects.Lib.getDimensions(this.titleNode).width)
}}var g=Math.max.apply(Math,d);
if(!(IN.Objects.Lib.UA.isQuirksMode()&&IN.Objects.Lib.UA.isIE())){var e=this.settings.title.padding.resolved;
g-=e.left+e.right
}this.memoizer.width=++g;
this.mainNode.style.visibility=b.visibility;
this.mainNode.style.position=b.position;
this.mainNode.style.left=b.left
}}this.Parent(arguments[0],arguments[1]);
this.setState("unSuccess");
if(this.config.normalizeSize){if(!this.titleNode){this.titleNode=IN.$Id(this.mainNodeId+"-title")
}this.titleNode.style.width=this.memoizer.width+"px"
}}).Method("getBaseStyles",function(){return["",this.createCSS({component:"link"},this.createStyle({"height":"1%"}),"* html"),this.createCSS({component:"outer"},this.createStyle({"position":"relative","overflow":"visible","display":"block"})),this.createCSS({component:"link"},this.createStyle({"border":"0","height":this.settings.logo.height+"px","text-decoration":"none","padding":"0","margin":"0","zoom":{MSIE:"1"},"display":{MSIE:"inline",other:"inline-block"}})),this.createCSS([{component:"link",pseudo:"link"},{component:"link",pseudo:"visited"},{component:"link",pseudo:"hover"},{component:"link",pseudo:"active"}],this.createStyle({"border":"0","text-decoration":"none"})),this.createCSS({component:"link",pseudo:"after"},this.createStyle({"content":'"."',"display":"block","clear":"both","visibility":"hidden","line-height":"0","height":"0"})),""].join("")
}).Method("getLogoStyles",function(){if(!this.config.useLogo){return""
}var b=$_CONSTANTS.states,e=this.settings.logo.background.row+this.settings.logo.background.rowOffset,c,d="";
this.settings.logo.width=Math.ceil(this.settings.logo.height*this.settings.logo.ratio);
c=(this.settings.logo.hasStates===false)?0:-1*this.settings.logo.width;
this.settings.logo.background.normal=(this.config.useRetinaAsset)?[-56,-423]:[0,e];
d=["",this.createCSS({component:"logo"},this.createStyle({"background-image":"url("+IN.ENV.images.sprite+")","background-position":this.settings.logo.background.normal.join("px ")+"px","background-repeat":"no-repeat","background-color":this.settings.logo.background.color,"background-size":(this.config.useRetinaAsset&&$_CONSTANTS.sprite.width)?($_CONSTANTS.sprite.width/2)+"px auto":"initial","cursor":"pointer","border":"0","border-right":this.settings.logo.borderRight,"text-indent":"-9999em","overflow":"hidden","padding":"0","margin":"0","position":(this.config.titles.normal)?"absolute":"","left":(this.config.titles.normal)?this.settings.logo.position.left:"","right":(this.config.titles.normal)?this.settings.logo.position.right:"","top":(this.config.titles.normal)?this.settings.logo.position.top:"","display":"block","width":this.settings.logo.width+"px","height":this.settings.logo.height+"px","float":(this.settings.logo.position.floated)?"right":"left","border-radius":(this.config.useLogo&&this.settings.border.corners!=="all")?"0":this.settings.border.radius+"px","-webkit-border-radius":{Webkit:(this.config.useLogo&&this.settings.border.corners!=="all")?"0":this.settings.border.radius+"px"},"-moz-border-radius":{Gecko:(this.config.useLogo&&this.settings.border.corners!=="all")?"0":this.settings.border.radius+"px"},"border-top-right-radius":this.settings.border.radius+"px","border-bottom-right-radius":this.settings.border.radius+"px","-webkit-border-top-right-radius":{Webkit:this.settings.border.radius+"px"},"-webkit-border-bottom-right-radius":{Webkit:this.settings.border.radius+"px"},"-moz-border-radius-topright":{Gecko:this.settings.border.radius+"px"},"-moz-border-radius-bottomright":{Gecko:this.settings.border.radius+"px"}})),""].join("");
if(this.settings.logo.hasStates){this.settings.logo.background.hover=[c,e];
this.settings.logo.background.click=[c*2,e];
d+=["",this.createCSS({component:"logo",state:b.hovered},this.createStyle({"background-position":this.settings.logo.background.hover.join("px ")+"px"})),this.createCSS([{component:"logo",state:b.clicked},{component:"logo",state:b.down}],this.createStyle({"background-position":this.settings.logo.background.click.join("px ")+"px"})),this.createCSS({component:"logo"},this.createStyle({"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+")"}}),"."+$_GLOBALS.shadowBox.theClass),""].join("")
}return d
}).Method("getTitleStyles",function(){if(this.config.titles.normal===""){return""
}var d=this.settings,b=$_CONSTANTS.states;
var f={left:Math.round((d.title.padding.left*d.title.padding.ratio)+d.logo.width+d.logo.padding-1),right:Math.round((d.title.padding.right*d.title.padding.ratio)+d.logo.padding)};
if(d.logo.position.floated==="left"){f={left:f.right,right:f.left}
}d.title.padding.resolved=f;
var c=IN.Objects.Lib.UA.isQuirksMode(),e={normal:this.computeBoxShadow("w3c",d.boxShadow.normal),hover:this.computeBoxShadow("w3c",d.boxShadow.hover),click:this.computeBoxShadow("w3c",d.boxShadow.click)};
return["",this.createCSS({component:"title"},this.createStyle({"color":d.color.normal,"cursor":"pointer","display":"block","white-space":"nowrap","float":"left","margin-left":"1px","vertical-align":"top","overflow":"hidden","text-align":d.title.textAlign,"height":{MSIE:(c?(d.title.height+d.ieOffset):(d.title.height-d.ieOffset))+"px",other:d.title.height+"px"},"padding":{MSIE:"0 "+f.left+"px "+(c?"0 ":(d.ieOffset+"px "))+f.right+"px",other:"0 "+f.left+"px 0 "+f.right+"px"},"border":"1px solid #000","border-top-color":d.border.color.normal.top,"border-right-color":d.border.color.normal.right,"border-bottom-color":d.border.color.normal.bottom,"border-left-color":d.border.color.normal.left,"border-left":(d.border.corners!=="all")?"0":"","text-shadow":d.font.shadow,"line-height":{MSIE:(c?d.title.height:(d.title.height-d.ieOffset*2))+"px",other:d.logo.height+"px"},"border-radius":(this.config.useLogo&&d.border.corners!=="all")?"0":d.border.radius+"px","-webkit-border-radius":{Webkit:(this.config.useLogo&&d.border.corners!=="all")?"0":d.border.radius+"px"},"-moz-border-radius":{Gecko:(this.config.useLogo&&d.border.corners!=="all")?"0":d.border.radius+"px"},"border-top-right-radius":d.border.radius+"px","border-bottom-right-radius":d.border.radius+"px","-webkit-border-top-right-radius":{Webkit:d.border.radius+"px"},"-webkit-border-bottom-right-radius":{Webkit:d.border.radius+"px"},"-moz-border-radius-topright":{Gecko:d.border.radius+"px"},"-moz-border-radius-bottomright":{Gecko:d.border.radius+"px"},"background-color":d.background.normal,"background-image":{Webkit:this.computeGradientStyle("webkit",d.gradient.normal),Gecko:this.computeGradientStyle("gecko",d.gradient.normal),MSIE:this.computeGradientStyle("msie",d.gradient.normal),Opera:this.computeGradientStyle("opera",d.gradient.normal),other:this.computeGradientStyle("w3c",d.gradient.normal)},"filter":{MSIE:this.computeGradientStyle("msieold",d.gradient.normal)},"-moz-box-shadow":{Gecko:e.normal},"-webkit-box-shadow":{Webkit:e.normal},"-ms-box-shadow":{MSIE:e.normal},"-o-box-shadow":{Opera:e.normal},"box-shadow":{other:e.normal}})),this.createCSS({component:"title",state:b.hovered},this.createStyle({"border":"1px solid #000","border-top-color":d.border.color.hover.top,"border-right-color":d.border.color.hover.right,"border-bottom-color":d.border.color.hover.bottom,"border-left-color":d.border.color.hover.left,"border-left":(this.config.useLogo&&d.border.corners!=="all")?"0":"","background-color":d.background.hover,"background-image":{Webkit:this.computeGradientStyle("webkit",d.gradient.hover),Gecko:this.computeGradientStyle("gecko",d.gradient.hover),MSIE:this.computeGradientStyle("msie",d.gradient.hover),Opera:this.computeGradientStyle("opera",d.gradient.hover),other:this.computeGradientStyle("w3c",d.gradient.hover)},"filter":{MSIE:this.computeGradientStyle("msieold",d.gradient.hover)},"-moz-box-shadow":{Gecko:e.hover},"-webkit-box-shadow":{Webkit:e.hover},"-ms-box-shadow":{MSIE:e.hover},"-o-box-shadow":{Opera:e.hover},"box-shadow":{other:e.hover}})),this.createCSS([{component:"title",state:b.clicked},{component:"title",state:b.down}],this.createStyle({"color":d.color.click,"border":"1px solid #000","border-top-color":d.border.color.click.top,"border-right-color":d.border.color.click.right,"border-bottom-color":d.border.color.click.bottom,"border-left-color":d.border.color.click.left,"border-left":(this.config.useLogo&&d.border.corners!=="all")?"0":"","background-color":d.background.click,"background-image":{Webkit:this.computeGradientStyle("webkit",d.gradient.click),Gecko:this.computeGradientStyle("gecko",d.gradient.click),MSIE:this.computeGradientStyle("msie",d.gradient.click),Opera:this.computeGradientStyle("opera",d.gradient.click),other:this.computeGradientStyle("w3c",d.gradient.click)},"filter":{MSIE:this.computeGradientStyle("msieold",d.gradient.click)},"-moz-box-shadow":{Gecko:e.click},"-webkit-box-shadow":{Webkit:e.click},"-ms-box-shadow":{MSIE:e.click},"-o-box-shadow":{Opera:e.click},"box-shadow":{other:e.click}})),this.createCSS({component:"title"},this.createStyle({"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+") "+this.computeGradientStyle("msieold",d.gradient.normal)}}),"."+$_GLOBALS.shadowBox.theClass),this.createCSS({component:"title",state:b.hovered},this.createStyle({"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+") "+this.computeGradientStyle("msieold",d.gradient.hover)}}),"."+$_GLOBALS.shadowBox.theClass),this.createCSS([{component:"title",state:b.clicked},{component:"title",state:b.down}],this.createStyle({"filter":{MSIE:"alpha(opacity="+($_GLOBALS.shadowBox.altOpacity*100)+") "+this.computeGradientStyle("msieold",d.gradient.click)}}),"."+$_GLOBALS.shadowBox.theClass),this.createCSS([{component:"titleText"},{component:"titleChild"}],this.createStyle({"color":d.color.normal,"font-size":d.font.size+"px","font-family":d.font.family,"font-weight":d.font.weight,"font-style":d.font.style,"-webkit-font-smoothing":"antialiased","display":"inline-block","background":"transparent none","vertical-align":"top","height":d.title.height+"px","line-height":d.title.lineHeight+"px","float":"none"})),this.createCSS({component:"titleChildBold"},this.createStyle({"font-weight":"bold"})),this.createCSS({component:"titleChildItalic"},this.createStyle({"font-style":"italic"})),this.createCSS([{component:"titleText",state:b.hovered},{component:"titleChild",state:b.hovered}],this.createStyle({"color":d.color.hover})),this.createCSS([{component:"titleText",state:b.clicked},{component:"titleText",state:b.down},{component:"titleChild",state:b.clicked},{component:"titleChild",state:b.down}],this.createStyle({"color":d.color.click})),this.createCSS({component:"mark"},this.createStyle({"display":"inline-block","width":"0px","overflow":"hidden"})),""].join("")
}).Method("setTitleText",function(b){if(this.currentTitleText===b){return
}if(!this.titleTextNode){this.titleTextNode=IN.$Id(this.mainNodeId+"-title-text")
}this.currentTitleText=b;
this.titleTextNode.innerHTML=b
}).Method("getTitleText",function(){return this.currentTitleText
}).Method("setButtonStyles",function(){this.settings={logo:{height:20,ratio:1,padding:4,borderRight:"",position:{top:"0px",right:"",bottom:"",left:"0px",floated:"left"},background:{row:-170,rowOffset:-106,color:""},hasStates:true},font:{size:11,family:"Arial, sans-serif",weight:"bold",style:"normal",shadow:"#FFFFFF -1px 1px 0"},title:{padding:{left:0,right:0,ratio:1},height:18,lineHeight:20,textAlign:"center"},boxShadow:{normal:{off:true,horizontal:0,vertical:0,blur:2,color:""},hover:{off:true,horizontal:0,vertical:0,blur:2,color:""},click:{off:true,horizontal:0,vertical:0,blur:2,color:""}},border:{corners:"right",radius:2,color:{normal:{top:"#E2E2E2",right:"#BFBFBF",bottom:"#B9B9B9",left:"#E2E2E2"},hover:{top:"#ABABAB",right:"#9A9A9A",bottom:"#787878",left:(this.config.useLogo)?"#04568B":"#ABABAB"},click:{top:"#B6B6B6",right:"#B3B3B3",bottom:"#9D9D9D",left:(this.config.useLogo)?"#49627B":"#B6B6B6"},success:{normal:{top:"#E2E2E2",right:"#BFBFBF",bottom:"#B9B9B9",left:"#E2E2E2"},hover:{top:"#ABABAB",right:"#9A9A9A",bottom:"#787878",left:(this.config.useLogo)?"#04568B":"#ABABAB"},click:{top:"#B6B6B6",right:"#B3B3B3",bottom:"#9D9D9D",left:(this.config.useLogo)?"#49627B":"#B6B6B6"}}}},ieOffset:2,textShadow:"none",color:{normal:"#333",hover:"#000",click:"#666",success:{normal:"#333",hover:"#000",click:"#666"}},background:{normal:"#ECECEC",click:"#DEDEDE",hover:"#EDEDED",success:{normal:"#ECECEC",click:"#DEDEDE",hover:"#EDEDED"}},gradient:{normal:["#FEFEFE","#ECECEC"],hover:["#EDEDED","#DEDEDE"],click:["#E3E3E3","#EDEDED"],success:{normal:["#FEFEFE","#ECECEC"],hover:["#EDEDED","#DEDEDE"],click:["#E3E3E3","#EDEDED"]}},mark:{width:12+3,height:11,background:[-250,-140],margin:{top:2,right:0,bottom:0,left:0}}};
var f={small:{},medium:{logo:{height:25,background:{rowOffset:-81}},font:{size:13},title:{height:23,lineHeight:23,padding:{ratio:1.25}},border:{radius:3},mark:{width:14+3,height:13,background:[-250,-160],margin:{top:5}}},large:{logo:{height:33,background:{rowOffset:-48}},font:{size:15},title:{height:31,lineHeight:31,padding:{ratio:1.65}},border:{radius:3},mark:{width:14+3,height:13,background:[-250,-160],margin:{top:9,right:5}}},xlarge:{logo:{height:48,background:{rowOffset:0}},font:{size:24},title:{height:46,lineHeight:46,padding:{ratio:2.4}},border:{radius:5},mark:{width:20+5,height:19,background:[-250,-180],margin:{top:1}}}};
var e={basic:{},flat:{font:{shadow:"0 -1px #005887",size:11},logo:{background:{row:-593,rowOffset:0,image:"none",color:"#0077b5"},borderRight:"1px solid #ffffff",hasStates:false},color:{normal:"#fff",hover:"#fff",click:"#fff",success:{normal:"#fff",hover:"#fff",click:"#fff"}},background:{normal:"#0077b5",click:"#066094",hover:"#0369a0",success:{normal:"#0077b5",click:"#066094",hover:"#0369a0"}},gradient:{normal:["#0077b5","#0077b5"],hover:["#0369a0","#0369a0"],click:["#066094","#066094"],success:{normal:["#0077b5","#0077b5"],hover:["#0369a0","#0369a0"],click:["#066094","#066094"]}},border:{corners:"all",color:{normal:{top:"#0077b5",right:"#0077b5",bottom:"#0077b5",left:"#0077b5"},hover:{top:"#0369a0",right:"#0369a0",bottom:"#0369a0",left:"#0369a0"},click:{top:"#066094",right:"#066094",bottom:"#066094",left:"#066094"},success:{normal:{top:"#0077b5",right:"#0077b5",bottom:"#0077b5",left:"#0077b5"},hover:{top:"#0369a0",right:"#0369a0",bottom:"#0369a0",left:"#0369a0"},click:{top:"#066094",right:"#066094",bottom:"#066094",left:"#066094"}}}}},shernaz:{logo:{ratio:1.06060606,position:{top:"0px",right:"0px",bottom:"",left:"",floated:"right"},background:{row:-298}},font:{weight:"normal",shadow:"none",family:"'Helvetica Neue', Arial, Helvetica, sans-serif"},title:{padding:{left:0.5,right:3.5}},boxShadow:{hover:{off:false,horizontal:0,vertical:2,blur:2,color:"#b7b7b7"}},color:{normal:"#000",hover:"#000",click:"#000",success:{normal:"#000",hover:"#000",click:"#000"}},gradient:{normal:["#ffffff","#f9f9f9","#e3e3e3","#cbcbcb"],hover:["#fdfdfd","#f2f2f2","#e3e3e3","#cbcbcb"],click:["#cbcbcb","#e3e3e3","#f2f2f2","#fdfdfd"],success:{normal:["#ffffff","#f9f9f9","#e3e3e3","#cbcbcb"],hover:["#fdfdfd","#f2f2f2","#e3e3e3","#cbcbcb"],click:["#cbcbcb","#e3e3e3","#f2f2f2","#fdfdfd"]}},background:{normal:"#07547d",click:"#0067a0",hover:"#65add2"},border:{corners:"all",color:{normal:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#acacac",left:"#cdcdcd"},hover:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#acacac",left:"#cdcdcd"},click:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#cdcdcd",left:"#cdcdcd"},success:{normal:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#acacac",left:"#cdcdcd"},hover:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#acacac",left:"#cdcdcd"},click:{top:"#cdcdcd",right:"#cdcdcd",bottom:"#cdcdcd",left:"#cdcdcd"}}}},fancy:{color:{normal:"#fff",hover:"#fff",click:"#fff"},gradient:{normal:["#65add2","30:#0f90d2","67:#006daa","#07547d"],hover:["#5caad2","30:#0084ce","67:#006daa","#07527b"],click:["#07527b","30:#006daa","67:#0084ce","#5caad2"]},background:{normal:"#007cbb",hover:"#0083c6",click:"#007cbb"},border:{corners:"all",color:{normal:{top:"#2771aa",right:"#2771aa",bottom:"#2771aa",left:"#2771aa"},hover:{top:"#2771aa",right:"#2771aa",bottom:"#2771aa",left:"#2771aa"},click:{top:"#2771aa",right:"#2771aa",bottom:"#2771aa",left:"#2771aa"}}}},simple:{title:{padding:{left:1,right:1}},boxShadow:{hover:{off:true}}}}};
var g=this.config.theme.split("-"),d=e;
for(var b=0,c=g.length;
b<c;
b++){d=d[g[b]];
if(!d){break
}IN.Util.extendObject(this.settings,d)
}f=f[this.config.size]||{};
IN.Util.extendObject(this.settings,f)
})
})();

/* res://connect-min/dev/objects/inlink.js */

(function(){var a={};
Sslac.Class("IN.Objects.InLink").Extends("IN.Objects.Base").Constructor(function(d){d=d||{};
d={text:d.text||"",size:(d.size||"small").toLowerCase(),suppressFont:true};
this.Parent(d);
this.memoizer=a[d.text]=a[d.text]||{};
this.size=d.size;
this.sizeSettings={small:{height:16,width:16,logo:[-92,-42]}};
var f=this.generateId(),e=false,c=this,b=$_CONSTANTS.events;
if(!this.memoizer.markup){this.memoizer.markup=["",'<span id="{0}" class="li-connect-widget">','<a id="{0}-link" class="li-connect-link" href="javascript:void(0);"><span id="{0}-mark" class="li-connect-mark"></span></a>',(d.text)?' <a class="li-connect-link" href="javascript:void(0);"><span id="{0}-text" class="li-connect-text">'+d.text+"</span></a>":"","</a>","</span>",""].join("")
}if(!this.memoizer.styles){this.memoizer.styles=["",this.getBaseStyles(d),""].join("").replace(/\{ID\}/g,"{0}")
}IN.Util.addCSS(IN.Util.formatString(this.memoizer.styles,f));
this.el().innerHTML=IN.Util.formatString(this.memoizer.markup,f);
this.mainNodeId=f;
this.onClick=this.addHandler(f,b.click.toLowerCase());
this.onMouseDown=this.addHandler(f,b.mouseDown.toLowerCase());
this.onMouseOver=this.addHandler(f,b.mouseOver.toLowerCase());
this.onMouseOut=this.addHandler(f,b.mouseOut.toLowerCase());
this.onClick(function(g){this.setState(b.click)
},this);
this.onMouseDown(function(g){this.setState(b.mouseDown)
},this);
this.onMouseOver(function(g){this.setState(b.mouseOver)
},this);
this.onMouseOut(function(){this.setState(b.mouseOut)
},this)
}).Method("setState",function(f){var b=IN.$Id(this.mainNodeId),e=this,d=$_CONSTANTS.events,c=$_CONSTANTS.states;
if(!b){return
}switch(f){case c.pending:IN.Util.addClass(b,c.pending);
window.setTimeout(function(){e.setState(c.normal)
},2000);
break;
case d.mouseOver:IN.Util.addClass(b,c.hovered);
break;
case d.mouseOut:IN.Util.removeClass(b,c.hovered);
break;
case d.mouseDown:break;
case d.click:IN.Util.addClass(b,c.click);
break;
case d.normal:IN.Util.removeClass(b,c.hovered);
IN.Util.removeClass(b,c.click);
IN.Util.removeClass(b,c.pending);
break
}}).Method("getSetting",function(b){if(typeof this.sizeSettings[this.size]===$_CONSTANTS.types.undef){return this.sizeSettings.small[b]
}return this.sizeSettings[this.size][b]
}).Method("getBaseStyles",function(b){return["",".li-connect-widget .li-connect-mark {",this.createStyle({"background":"url("+IN.ENV.images.sprite+") "+this.getSetting("logo").join("px ")+"px no-repeat","display":"inline-block","height":this.getSetting("height")+"px","text-decoration":"none","width":this.getSetting("width")+"px","vertical-align":"middle","*margin":"0 3px","*vertical-align":"bottom"}),"}",".IN-widget .hovered .li-connect-mark {",this.createStyle({"cursor":"pointer"}),"}",".li-connect-widget.pending .li-connect-mark {",this.createStyle({"background":"url("+$_CONSTANTS.resources.spinner16x16+") no-repeat","*background":"url("+IN.ENV.images.sprite+") "+this.getSetting("logo").join("px ")+"px no-repeat","cursor":"wait"}),"}",""].join("")
})
})();

/* res://connect-min/dev/objects/callout.js */

(function(){var a={};
Sslac.Class("IN.Objects.Callout").Extends("IN.Objects.Base").Constructor(function(e){e=e||{};
this.config={position:e.position||"right",state:e.state||"visible",alwaysShow:e.alwaysShow||false,content:(!e.content&&e.content!==0)?"":e.content,theme:e.theme||"basic",isRetina:IN.Util.isRetina(),useRetinaAsset:false};
this.config.useRetinaAsset=(this.config.theme==="flat"&&this.config.isRetina)?true:false;
this.Parent(this.config);
this.setCalloutStyles();
if(this.config.position.toLowerCase()==="talltop"){this.config.position="top"
}var h=this.generateId(),f=false,d=this,c=$_CONSTANTS.events,b=[this.config.position,this.config.state].join("::");
this.memoizer=a[b]=a[b]||{};
this.mainNodeId=h;
this.alwaysShow=e.alwaysShow;
if(!this.memoizer.markup){this.memoizer.markup=["",'<span id="{0}-container" class="IN-'+this.config.position+(this.config.state=="hidden"?" IN-hidden":"")+'">','<span id="{0}" class="IN-'+this.config.position+'">','<span id="{0}-inner" class="IN-'+this.config.position+'">','<span id="{0}-content" class="IN-'+this.config.position+'">{1}</span>',"</span>","</span>","</span>",""].join("")
}if(!this.memoizer.styles){var g=[];
switch(this.config.position){case"right":g.push(["","#{0}-container.IN-right {",this.createStyle({"display":"inline-block","float":"left","overflow":"visible","position":"relative","height":this.settings.right.height,"padding-left":"2px","line-height":"1px","cursor":"pointer","vertical-align":{MSIE:"-2px"}}),"}","#{0}.IN-right {",this.createStyle({"display":"block","float":"left","height":this.settings.right.height,"margin-right":"4px","padding-right":"4px","background-image":"url("+IN.ENV.images.sprite+")","background-color":"transparent","background-repeat":"no-repeat","background-position":this.settings.right.countBubble.background.position}),"}","#{0}-inner.IN-right {",this.createStyle({"display":"block","float":"left","padding-left":"8px","text-align":"center","background-image":"url("+IN.ENV.images.sprite+")","background-color":"transparent","background-repeat":"no-repeat","background-position":this.settings.right.countNub.background.position}),"}","#{0}-content.IN-right {",this.createStyle({"display":"inline","font-size":"11px","color":this.settings.right.countBubble.color,"font-weight":"bold","font-family":"Arial, sans-serif","line-height":this.settings.right.countBubble.lineHeight,"padding":"0 5px 0 5px"}),"}","#{0}-container.IN-empty {",this.createStyle({"display":"none"}),"}",""].join(""));
break;
case"top":g.push(["","#{0}-container.IN-top {",this.createStyle({"display":"inline-block","overflow":"visible","position":"relative","height":"42px","line-height":"1px","cursor":"pointer"}),"}","#{0}.IN-top {",this.createStyle({"display":"inline-block","height":"42px","width":this.settings.top.width,"text-align":"center","background-image":"url("+IN.ENV.images.sprite+")","background-color":"transparent","background-repeat":"no-repeat","background-position":this.settings.top.countBubble.background.position}),"}","#{0}-content.IN-top {",this.createStyle({"display":"inline","font-size":"16px","color":this.settings.top.countBubble.color,"font-weight":"bold","font-family":"Arial, sans-serif","line-height":"38px"}),"}","#{0}-container.IN-empty #{0}-inner.IN-top {",this.createStyle({"background-image":"url("+IN.ENV.images.sprite+")","background-color":"transparent","background-repeat":"no-repeat","background-position":this.settings.topEmpty.countBubble.background.position,"background-size":this.settings.topEmpty.countBubble.background.size,"overflow":"hidden","margin":this.settings.topEmpty.countBubble.margin,"width":this.settings.topEmpty.countBubble.width,"height":this.settings.topEmpty.countBubble.height,"display":"block"}),"}","#{0}-container.IN-empty #{0}-content.IN-top {",this.createStyle({"text-indent":"-999px","display":"inline-block"}),"}",""].join(""));
break
}g.push(["#{0}-container.IN-hidden #{0} {",this.createStyle({"display":"none"}),"}"].join(""));
this.memoizer.styles=g.join("")
}IN.Util.addCSS(IN.Util.formatString(this.memoizer.styles,h));
this.el().innerHTML=IN.Util.formatString(this.memoizer.markup,h,e.content);
this.onClick=this.addHandler(h,c.click.toLowerCase());
this.onMouseDown=this.addHandler(h,c.mouseDown.toLowerCase());
this.onMouseOver=this.addHandler(h,c.mouseOver.toLowerCase());
this.onMouseOut=this.addHandler(h,c.mouseOut.toLowerCase());
this.onClick(function(i){this.setState(c.click)
},this);
this.onMouseDown(function(i){this.setState(c.mouseDown)
},this);
this.onMouseOver(function(i){this.setState(c.mouseOver)
},this);
this.onMouseOut(function(){this.setState(c.mouseOut)
},this)
}).Method("setContent",function(d){var c=IN.$Id(this.mainNodeId+"-container"),b=IN.$Id(this.mainNodeId+"-content");
IN.Util.removeClass(c,$_CONSTANTS.prefixes.IN+"empty");
if(d==="0"||d===""){IN.Util.addClass(c,$_CONSTANTS.prefixes.IN+"empty")
}b.innerHTML=d
}).Method("getContent",function(){var b=IN.$Id(this.mainNodeId+"-content");
return b.innerHTML
}).Method("setState",function(g){var b=IN.$Id(this.mainNodeId+"-container"),e=this,d=$_CONSTANTS.events,c=$_CONSTANTS.states,f=$_CONSTANTS.prefixes;
switch(g){case c.hidden:IN.Util.addClass(b,f.IN+c.hidden);
break;
case c.visible:IN.Util.removeClass(b,f.IN+c.hidden);
break;
case d.mouseOver:IN.Util.addClass(b,f.IN+c.hovered);
break;
case d.mouseDown:IN.Util.addClass(b,f.IN+c.down);
break;
case d.mouseOut:IN.Util.removeClass(b,f.IN+c.hovered);
IN.Util.removeClass(b,f.IN+c.down);
break;
case d.click:if(IN.Util.hasClass(b,f.IN+c.clicked)){return
}IN.Util.removeClass(b,f.IN+c.hovered);
IN.Util.addClass(b,f.IN+c.clicked);
window.setTimeout(function(){e.setState(c.normal)
},2000);
break;
case d.normal:IN.Util.removeClass(b,f.IN+c.hidden);
IN.Util.removeClass(b,f.IN+c.clicked);
break
}}).Method("setCalloutStyles",function(){this.settings={right:{countNub:{background:{position:"0px -60px"}},countBubble:{background:{position:"right -100px"},color:"#04558B",lineHeight:"18px"},height:"18px"},top:{countBubble:{background:{position:"-150px top"},color:"#04558B"},width:"57px"},topEmpty:{countBubble:{background:{position:"0px -20px"},width:"26px",height:"26px",margin:"5px auto 0 auto"}}};
var e={basic:{},flat:{right:{countNub:{background:{position:"0px -426px"}},countBubble:{background:{position:"right -447px"},color:"#4e4e4e",lineHeight:"20px"},height:"20px"},top:{countBubble:{background:{position:"-207px -470px"},color:"#4e4e4e"},width:"60px"},topEmpty:{countBubble:{background:{position:(this.config.useRetinaAsset)?"0px -393px":"0px -560px",size:(this.config.useRetinaAsset)?"135px auto":"initial"},width:(this.config.useRetinaAsset)?"27px":"28px",height:(this.config.useRetinaAsset)?"28px":"28px",margin:"4px auto 0 auto"}}}};
var f=this.config.theme.split("-"),d=e;
for(var b=0,c=f.length;
b<c;
b++){d=d[f[b]];
if(!d){break
}IN.Util.extendObject(this.settings,d)
}})
})();

/* res://connect-min/dev/objects/smartwindow.js */

Sslac.Class("IN.Objects.SmartWindow").Extends("IN.Objects.Base").Constructor(function Constructor(b){var d=$_CONSTANTS.modes;
var a;
var e;
b=b||{};
b={url:b.url||"about:blank",xd:b.xd||{},mode:b.mode||d.auto,anchor:b.anchor||null,method:b.method||null,width:b.width||IN.ENV.ui.popup_window_width,height:b.height||400,postParams:b.postParams||{}};
b.xd.secure=b.xd.secure||IN.ENV.url.xd_html;
b.xd.unsecure=b.xd.unsecure||IN.ENV.url.xd_us_html;
this.onWindowCreate=new IN.CustomEvent("windowCreate");
this.onWindowRemove=new IN.CustomEvent("windowRemove");
this.onWindowResize=new IN.CustomEvent("windowResize");
this.Parent(b);
var c=$_PATTERNS.protocols.secure.test(b.url);
this.disableRefresh=b.disableRefresh;
this.anchorInfo=b.anchor;
this.transport=null;
this.created=false;
this.channelId=IN.$uid();
this.postUrl=b.url;
this.transportMethod=b.method;
this.transportUrl=(c)?b.xd.secure:b.xd.unsecure;
this.xdSwfUrl=(c)?IN.ENV.images.secure_xdswf:IN.ENV.images.unsecure_xdswf;
this.postParams=b.postParams||{};
this.transportOptions=[];
this.callbacks={success:[],error:[],ready:[]};
this.width=b.width;
this.height=b.height;
this.config=b;
this.frameMode=b.mode;
if(this.frameMode===d.auto){if(IN.User.isAuthorized()){this.frameMode=d.modal
}else{this.frameMode=d.popup
}}this.onWindowCreate.subscribe(function(){this.created=true
},this);
this.transportOptions.push("target="+this.channelId);
this.transportOptions.push("width="+this.width);
this.transportOptions.push("height="+this.height);
switch(this.frameMode){case d.inlineIframe:case d.iframe:case d.embedded:case d.modal:case d.hovercard:case d.invisible:this.transportOptions.push("mode=wrapper");
break;
case d.listener:case d.popup:if(IN.Objects.Lib.UA.isSingleTabJS()){this.transportOptions.push("mode=listener");
this.postParams.target=this.channelId;
a=IN.Util.appendParams(b.url,this.postParams)
}else{this.transportOptions.push("mode=popup");
a=this.transportUrl+"#mode=popup-wait&target=easyXDM_IN_Lib_"+this.channelId+"_provider"
}e=window.open(a,"easyXDM_IN_Lib_"+this.channelId+"_provider_popup","width="+this.width+", height="+this.height);
break
}return this
}).Method("remove",function remove(){if(this.transport){this.transport.destroy();
this.transport=null
}this.onWindowRemove.fire();
this.Parent()
}).Method("params",function params(a){this.postParams=a;
return this
}).Method("ready",function ready(b,a){return this.pushCallback(b,"ready",a)
}).Method("success",function success(b,a){return this.pushCallback(b,"success",a)
}).Method("error",function error(b,a){return this.pushCallback(b,"error",a)
}).Method("pushCallback",function handleEvent(b,c,a){this.callbacks[c].push({fn:b||function(){},scope:a||window});
return this
}).Method("handleWidgetReady",function handleWidgetReady(b,c,a){this.handleCallback(b,c,a,"ready")
}).Method("handleWidgetSuccess",function handleWidgetSuccess(b,c,a){this.handleCallback(b,c,a,"success")
}).Method("handleWidgetFailure",function handleWidgetFailure(b,c,a){this.handleCallback(b,c,a,"error")
}).Method("handleWidgetReload",function handleWidgetReload(a){if($_PATTERNS.url.test(a)&&a!==this.postUrl){this.remove();
this.postUrl=a;
var b=$_PATTERNS.protocols.secure.test(a);
this.transportUrl=(b)?this.config.xd.secure:this.config.xd.unsecure;
this.xdSwfUrl=(b)?IN.ENV.images.secure_xdswf:IN.ENV.images.unsecure_xdswf;
this.place()
}else{this.transport.refresh()
}}).Method("handleCallback",function handleCallback(f,g,c,e){if(this.callbacks[e]&&this.callbacks[e].length){for(var d=0,b=this.callbacks[e].length;
d<b;
d++){var a=this.callbacks[e][d];
a.fn.call(a.scope,f)
}}g()
}).Method("mode",function mode(c){var b=this.frameOptions,f=this.frameMode||"",e=this,d={},h=$_CONSTANTS.events,i=$_CONSTANTS.modes;
switch(c.toLowerCase()){case i.embedded:d={embedded:true};
break;
case i.modal:d={embedded:false,shadowBox:true,closeOnDocClick:true,overlay:true,reCenter:true};
break;
case i.hovercard:d={embedded:false,overlay:true,closeOnDocClick:true};
break;
case i.invisible:d={embedded:false,closeOnDocClick:false,disableRefresh:true};
break;
case i.popup:d={popup:true};
if(f&&f!=="popup"){throw new Error("cannot change to the popup type")
}break;
default:throw new Error(c+" is not supported")
}this.frameMode=c;
this.frameOptions=d;
function g(j){if(d.popup){return
}j.style.position="";
if(!d.embedded){IN.Objects.Lib.setShadowExempt(e.el());
j.style.position="absolute";
j.style.left="-2345px";
j.style.top="0"
}if(d.overlay){j.style.zIndex="9999"
}else{j.style.zIndex=""
}if(!d.shadowBox){IN.Objects.Lib.setShadowBox(false)
}}function a(j){if(d.popup){return
}function l(){IN.Event.remove(IN,h.refresh,e.triggerRefresh,e);
IN.Event.remove(IN,h.logout,e.triggerRefresh,e);
e.remove()
}function k(){IN.Objects.Lib.center(j)
}if(d.closeOnDocClick){IN.Event.onOnce(document,h.click,l,e.transport)
}else{if(b&&b.closeOnDocClick){IN.Event.remove(document,h.click,l,e.transport)
}}if(!d.disableRefresh){IN.Event.on(IN,h.refresh,e.triggerRefresh,e);
IN.Event.on(IN,h.logout,e.triggerRefresh,e)
}else{if(b&&!b.disableRefresh){IN.Event.remove(IN,h.refresh,e.triggerRefresh,e);
IN.Event.remove(IN,h.logout,e.triggerRefresh,e)
}}if(d.reCenter){IN.Event.on(window,h.resize,k,e)
}else{IN.Event.remove(window,h.resize,k,e)
}}if(this.created){g(this.frameNode);
a(this.frameNode)
}else{this.onWindowCreate.subscribe(function(){if(this.frameNode){g(this.frameNode);
a(this.frameNode);
this.frameNode.style.width="1px";
this.frameNode.style.height="1px";
this.frameNode.style.display="inline-block"
}if(d.shadowBox){IN.Objects.Lib.setShadowBox(true)
}},this);
this.onWindowRemove.subscribe(function(){IN.Objects.Lib.setShadowBox(false)
},this)
}}).Method("triggerRefresh",function triggerRefresh(){if(this.transport&&this.transport.refresh){this.transport.refresh()
}}).Method("place",function place(b,e){if(!b){b=this.where
}if(!e){e=this.target
}this.where=b;
this.target=e;
this.Parent(b,e);
var f,c=this.transportOptions.join("&"),d=$_CONSTANTS.modes;
switch(this.frameMode){case d.embedded:case d.hovercard:case d.invisible:case d.modal:f=this.getEmbeddedRpc(c);
break;
case d.popup:f=this.getPopupRpc(c);
break
}this.postParams.original_referer=window.location.href;
this.postParams.token=IN.ENV.auth.anonymous_token;
this.postParams.isFramed=""+IN.ENV.js.isFramed;
if(typeof(IN.ENV.js.lang)!=="undefined"){var a=IN.ENV.js.lang.split("_");
this.postParams.lang=a[0].toLowerCase()+"_"+a[1].toUpperCase()
}this.mode(this.frameMode);
this.transport=new IN.Lib.easyXDM.Rpc(f[0],f[1]);
return this
}).Method("getPopupRpc",function getPopupRpc(h){var e=this,c,b;
c={remote:this.transportUrl+"#"+h,swf:this.xdSwfUrl,hash:true,channel:this.channelId,onReady:function f(){e.onWindowCreate.fire();
e.transport.form({action:e.postUrl,items:e.postParams,method:e.transportMethod})
}};
b={local:{authorize:function d(o,m,n,p){IN.User.setAuthorized(o,m,n);
p()
},logout:function l(m){IN.User.setLoggedOut();
m()
},reload:function a(m){e.handleWidgetReload(m)
},widgetSuccess:function k(n,o,m){e.handleWidgetSuccess(n,o,m)
},widgetError:function g(n,o,m){e.handleWidgetFailure(n,o,m)
},widgetReady:function j(n,o,m){e.handleWidgetReady(n,o,m)
},closedWindow:function i(){window.setTimeout(function m(){e.remove()
},1)
}},remote:{form:{}}};
return[c,b]
}).Method("getEmbeddedRpc",function getIframeRpc(i){var f=this,d,c,j;
d={remote:this.transportUrl+"#"+i,hash:true,swf:this.xdSwfUrl,channel:this.channelId,container:this.el(),props:{style:{position:"absolute"}},onReady:function g(){j=f.el().getElementsByTagName("iframe")[0];
f.frameNode=j;
f.onWindowCreate.fire(j);
f.transport.form({action:f.postUrl,items:f.postParams,method:f.transportMethod})
}};
c={local:{logout:function o(p){IN.User.setLoggedOut();
p()
},reload:function a(p){f.handleWidgetReload(p)
},resize:function b(t,q,v){j.style.width=t+"px";
j.style.height=q+"px";
if(!f.frameOptions.embedded&&f.frameMode!=="hovercard"&&f.frameMode!=="invisible"){var p=IN.Objects.Lib.getCenter(j);
if(f.hasAnimated){IN.Objects.Lib.slideTo(j,p,{bounce:0,duration:200})
}else{var s=IN.Objects.Lib.getViewport();
var u=IN.Objects.Lib.getScrollOffsets();
f.hasAnimated=true;
j.style.left=p.left+"px";
j.style.top=u.top+s.height-(p.bottom-p.top)+"px";
IN.Objects.Lib.slideTo(j,p)
}}if(!f.frameOptions.embedded&&f.anchorInfo){var r=IN.Objects.Lib.anchor(f.anchorInfo.fixed,j,f.anchorInfo.context);
f.transport.mode({display:"hover",context:r.movable})
}f.onWindowResize.fire({node:f.el(),width:t,height:q});
v({width:t,height:q})
},login:function l(){IN.GlobalEvents.refresh.fire()
},authorize:function e(r,p,q,s){IN.User.setAuthorized(r,p,q);
s()
},close:function n(){f.remove()
},widgetSuccess:function m(q,r,p){f.handleWidgetSuccess(q,r,p)
},widgetError:function h(q,r,p){f.handleWidgetFailure(q,r,p);
IN.Objects.Lib.shake(j)
},widgetReady:function k(q,r,p){f.handleWidgetReady(q,r,p)
}},remote:{mode:{},refresh:{},form:{}}};
return[d,c]
});

/* res://connect-min/dev/ui/ui.js */

Sslac.Static("IN.UI").Static("Authorize",function(){var a=["",IN.ENV.url.authorize,(IN.ENV.url.authorize.indexOf("?")===-1)?"?":"&","client_id="+IN.ENV.auth.api_key,"&type=user-agent",""].join("");
var c;
if(IN.ENV.js.scope&&IN.ENV.js.scope.length){c={"scope":IN.ENV.js.scope.join(" ")}
}var b=new IN.Objects.SmartWindow({url:a,mode:"popup",postParams:c});
return b
}).Static("SilentAuth",function(){var a=["",IN.ENV.url.silent_auth_url,(IN.ENV.url.silent_auth_url.indexOf("?")===-1)?"?":"&","client_id="+IN.ENV.auth.api_key,"&type=user-agent",""].join("");
var b=new IN.Objects.SmartWindow({url:a,mode:"invisible",disableRefresh:true});
b.success(function(){$_GLOBALS.auth_complete=true;
b.close()
});
b.error(function(){$_GLOBALS.auth_complete=true;
b.close()
});
return b
}).Static("WidgetSignin",function(b){var a=IN.ENV.url.login,c;
b=b||{};
c=new IN.Objects.SmartWindow({url:a,mode:"popup",existingPopup:b.existingPopup||null});
return c
}).Static("Logout",function(){var a=IN.ENV.url.logout,b;
a=a.replace(/\{OAUTH_TOKEN\}/,IN.ENV.auth.oauth_token).replace(/\{API_KEY\}/,IN.ENV.auth.api_key);
b=new IN.Objects.SmartWindow({mode:"invisible",url:a,disableRefresh:true});
b.success(function(){IN.User.setLoggedOut()
});
return b
}).Static("Share",function(){return new IN.Objects.SmartWindow({url:IN.ENV.widget.share_url})
}).Static("Apply",function(){return new IN.Objects.SmartWindow({mode:"modal",url:IN.ENV.widget.apply_url})
}).Static("Debugger",function(){return new IN.Objects.SmartWindow({mode:"popup",url:IN.ENV.widget.settings_url})
});

/* res://connect-min/dev/user/user.js */

Sslac.Static("IN.User").Static("setAuthorized",function(b,c,a){IN.ENV.auth.oauth_token=b;
IN.ENV.auth.member_id=c;
IN.User.setOauthCookie(a);
window.setTimeout(function d(){IN.GlobalEvents.auth.fire();
IN.GlobalEvents.refresh.fire()
},1)
}).Static("setNotAuthorized",function(){IN.GlobalEvents.noAuth.fire()
}).Static("setLoggedOut",function(){IN.ENV.auth.oauth_token="";
IN.ENV.auth.member_id="";
IN.User.setOauthCookie("");
window.setTimeout(function a(){IN.GlobalEvents.logout.fire()
},1)
}).Static("authorize",function(b,a){a=a||window;
if(IN.User.isAuthorized()){if(b){b.apply(a)
}return true
}else{if(b){IN.Event.onOnce(IN,$_CONSTANTS.events.auth,b,a)
}var c=IN.UI.Authorize();
c.place();
return false
}}).Static("logout",function(b,a){var c=IN.UI.Logout();
a=a||window;
if(b){c.success(b,a)
}c.place(document.body)
}).Static("refresh",function(){if($_GLOBALS.compat.silent_auth){IN.UI.SilentAuth().place()
}else{var a=IN.ENV.url.userspace_renew,b=document.createElement("script");
a=a.replace(/\{API_KEY\}/,IN.ENV.auth.api_key);
if(IN.ENV.js.credentialsCookie){a+="&"+IN.Util.createParams({credentialsCookie:IN.ENV.js.credentialsCookie})
}if(IN.ENV.js.scope&&IN.ENV.js.scope.length){a+="&"+IN.Util.createParams({scope:IN.ENV.js.scope.join(" ")})
}b.type="text/javascript";
b.src=a;
b.className="in_keepalive";
IN.$Tag("head")[0].appendChild(b)
}}).Static("isAuthorized",function(){if(IN.ENV.auth.oauth_token||IN.ENV.auth.oauth_verified){return true
}return false
}).Static("setOauthCookie",function(a){var f="linkedin_oauth_"+IN.ENV.auth.api_key;
if(!IN.ENV.auth.is_set_client_auth_cookie||a===""||a===null){window.setTimeout(function d(){document.cookie=f+"=null;path=/;secure;expires=0";
document.cookie=f+"_crc=null;path=/;expires=0"
},0);
return
}if(typeof a===$_CONSTANTS.types.string){try{a=JSON.parse(a)
}catch(c){}}if((typeof a)===$_CONSTANTS.types.object){a=encodeURIComponent(JSON.stringify(a))
}window.setTimeout(function b(){document.cookie=f+"="+a+";path=/;secure;";
if(IN.ENV.js.credentialsCookieCrc){document.cookie=f+"_crc="+IN.Util.crc32(a)+";path=/;"
}},0)
}).Static("getUIMode",function(){var a=IN.User,b=$_CONSTANTS.modes;
if(!a.isAuthorized()){return b.window
}else{return b.iframe
}}).Static("getMemberId",function(){return(IN.ENV&&IN.ENV.auth&&IN.ENV.auth.member_id)?IN.ENV.auth.member_id:""
});

/* res://connect-min/dev/misc/anon_error.js */

(function(){var a={apply:"IN/Apply requires an API key to use. See http://developer.linkedin.com/apply-getting-started for more info.",generic:"IN/{0} requires an API key to use. See http://developer.linkedin.com/documents/getting-started-javascript-api for more info."};
Sslac.Class("IN.Tags.Apply").Extends("IN.Tags.Base").Constructor(function(c,b){throw a.apply
});
IN.addTag("Apply",IN.Tags.Apply);
Sslac.Class("IN.Tags.MemberData").Extends("IN.Tags.Base").Constructor(function(c,b){throw IN.Util.formatString(a["generic"],"MemberData")
});
IN.addTag("MemberData",IN.Tags.MemberData);
Sslac.Class("IN.Tags.FullMemberProfile").Extends("IN.Tags.Base").Constructor(function(c,b){throw IN.Util.formatString(a["generic"],"FullMemberProfile")
});
IN.addTag("FullMemberProfile",IN.Tags.FullMemberProfile)
})();

/* res://connect-min/dev/connect/onload.js */

(function(){var g,b,c=false,f=20,d=4000,h=Math.floor(d/f);
IN.GlobalEvents.frameworkLoaded.fire();
IN.Event.on(IN,$_CONSTANTS.events.systemReady,function(){if(IN.ENV.js.onLoad){for(var l,k=0,m=IN.ENV.js.onLoad.split(","),j=m.length;
k<j&&(l=m[k]);
k++){var n=Sslac.valueOf(IN.Util.trim(l));
if(n&&typeof(n)==$_CONSTANTS.types.func){n.call()
}else{throw new Error("Could not execute '"+l+"'. Please provide a valid function for callback.")
}}}});
function a(){var k=[],l=IN.ENV.js.extensions;
c=true;
for(var j in l){if(l[j].loaded===false){k.push(j+" @ "+(l[j].src||"linkedin"))
}}if(console&&console.log){console.log("The following extensions did not load: "+k.join(", "))
}}function i(){if(c){return true
}if(!IN.ENV.js||!IN.ENV.js.extensions){return true
}if($_GLOBALS.compat.silent_auth&&IN.ENV.js.authorize&&!$_GLOBALS.auth_complete){return false
}var k=IN.ENV.js.extensions;
for(var j in k){if(k[j].loaded===false){return false
}}return true
}function e(){if(i()){window.clearTimeout(g);
IN.Event.onDOMReady(function j(){IN.GlobalEvents.systemReady.fire()
})
}else{h--;
if(h<=0){a()
}else{g=window.setTimeout(e,10)
}}}e();
if(!IN.ENV.js.deferParse){IN.parse(document.body)
}})();

/* res://connect-min/dev/connect/_close.njs */


// restore window scoped vars that were touched in the framework
// this will only restore them if it was defined previously
// this allows our implementation to persist without polluting the window scope
for(var key in $_WIN) {
  if($_WIN.hasOwnProperty(key)) {
    if(typeof $_WIN[key] !== $_CONSTANTS.types.undef) {
      // restore into window
      window[key] = $_WIN[key];
    }
    // remove it from $_WIN
    $_WIN[key] = undefined;
  }
}

/* end anon function */
})(window, document); // pass in window and document references (for localization, see _open.njs)
