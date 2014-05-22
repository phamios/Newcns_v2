;
window.Modernizr=(function(window,document,undefined){
    var version='2.6.2',Modernizr={},enableClasses=true,docElement=document.documentElement,mod='modernizr',modElem=document.createElement(mod),mStyle=modElem.style,inputElem=document.createElement('input'),smile=':)',toString={}.toString,prefixes=' -webkit- -moz- -o- -ms- '.split(' '),omPrefixes='Webkit Moz O ms',cssomPrefixes=omPrefixes.split(' '),domPrefixes=omPrefixes.toLowerCase().split(' '),tests={},inputs={},attrs={},classes=[],slice=classes.slice,featureName,injectElementWithStyles=function(rule,callback,nodes,testnames){
        var style,ret,node,docOverflow,div=document.createElement('div'),body=document.body,fakeBody=body||document.createElement('body');
        if(parseInt(nodes,10)){
            while(nodes--){
                node=document.createElement('div');
                node.id=testnames?testnames[nodes]:mod+(nodes+1);
                div.appendChild(node);
            }
        }
    style=['&#173;','<style id="s',mod,'">',rule,'</style>'].join('');
    div.id=mod;
    (body?div:fakeBody).innerHTML+=style;
    fakeBody.appendChild(div);
    if(!body){
        fakeBody.style.background='';
        fakeBody.style.overflow='hidden';
        docOverflow=docElement.style.overflow;
        docElement.style.overflow='hidden';
        docElement.appendChild(fakeBody);
    }
    ret=callback(div,rule);
    if(!body){
        fakeBody.parentNode.removeChild(fakeBody);
        docElement.style.overflow=docOverflow;
    }else{
        div.parentNode.removeChild(div);
    }
    return!!ret;
},isEventSupported=(function(){
    var TAGNAMES={
        'select':'input',
        'change':'input',
        'submit':'form',
        'reset':'form',
        'error':'img',
        'load':'img',
        'abort':'img'
    };
    
    function isEventSupported(eventName,element){
        element=element||document.createElement(TAGNAMES[eventName]||'div');
        eventName='on'+eventName;
        var isSupported=eventName in element;
        if(!isSupported){
            if(!element.setAttribute){
                element=document.createElement('div');
            }
            if(element.setAttribute&&element.removeAttribute){
                element.setAttribute(eventName,'');
                isSupported=is(element[eventName],'function');
                if(!is(element[eventName],'undefined')){
                    element[eventName]=undefined;
                }
                element.removeAttribute(eventName);
            }
        }
    element=null;
    return isSupported;
}
return isEventSupported;
})(),_hasOwnProperty=({}).hasOwnProperty,hasOwnProp;
    if(!is(_hasOwnProperty,'undefined')&&!is(_hasOwnProperty.call,'undefined')){
    hasOwnProp=function(object,property){
        return _hasOwnProperty.call(object,property);
    };

}
else{
    hasOwnProp=function(object,property){
        return((property in object)&&is(object.constructor.prototype[property],'undefined'));
    };

}
if(!Function.prototype.bind){
    Function.prototype.bind=function bind(that){
        var target=this;
        if(typeof target!="function"){
            throw new TypeError();
        }
        var args=slice.call(arguments,1),bound=function(){
            if(this instanceof bound){
                var F=function(){};
                
                F.prototype=target.prototype;
                var self=new F();
                var result=target.apply(self,args.concat(slice.call(arguments)));
                if(Object(result)===result){
                    return result;
                }
                return self;
            }else{
                return target.apply(that,args.concat(slice.call(arguments)));
            }
        };
        
    return bound;
};

}
function setCss(str){
    mStyle.cssText=str;
}
function setCssAll(str1,str2){
    return setCss(prefixes.join(str1+';')+(str2||''));
}
function is(obj,type){
    return typeof obj===type;
}
function contains(str,substr){
    return!!~(''+str).indexOf(substr);
}
function testProps(props,prefixed){
    for(var i in props){
        var prop=props[i];
        if(!contains(prop,"-")&&mStyle[prop]!==undefined){
            return prefixed=='pfx'?prop:true;
        }
    }
return false;
}
function testDOMProps(props,obj,elem){
    for(var i in props){
        var item=obj[props[i]];
        if(item!==undefined){
            if(elem===false)return props[i];
            if(is(item,'function')){
                return item.bind(elem||obj);
            }
            return item;
        }
    }
return false;
}
function testPropsAll(prop,prefixed,elem){
    var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+' '+cssomPrefixes.join(ucProp+' ')+ucProp).split(' ');
    if(is(prefixed,"string")||is(prefixed,"undefined")){
        return testProps(props,prefixed);
    }else{
        props=(prop+' '+(domPrefixes).join(ucProp+' ')+ucProp).split(' ');
        return testDOMProps(props,prefixed,elem);
    }
}
tests['flexbox']=function(){
    return testPropsAll('flexWrap');
};

tests['flexboxlegacy']=function(){
    return testPropsAll('boxDirection');
};

tests['canvas']=function(){
    var elem=document.createElement('canvas');
    return!!(elem.getContext&&elem.getContext('2d'));
};

tests['canvastext']=function(){
    return!!(Modernizr['canvas']&&is(document.createElement('canvas').getContext('2d').fillText,'function'));
};

tests['geolocation']=function(){
    return'geolocation'in navigator;
};

tests['postmessage']=function(){
    return!!window.postMessage;
};

tests['websqldatabase']=function(){
    return!!window.openDatabase;
};

tests['indexedDB']=function(){
    return!!testPropsAll("indexedDB",window);
};

tests['hashchange']=function(){
    return isEventSupported('hashchange',window)&&(document.documentMode===undefined||document.documentMode>7);
};

tests['history']=function(){
    return!!(window.history&&history.pushState);
};

tests['draganddrop']=function(){
    var div=document.createElement('div');
    return('draggable'in div)||('ondragstart'in div&&'ondrop'in div);
};

tests['websockets']=function(){
    return'WebSocket'in window||'MozWebSocket'in window;
};

tests['rgba']=function(){
    setCss('background-color:rgba(150,255,150,.5)');
    return contains(mStyle.backgroundColor,'rgba');
};

tests['hsla']=function(){
    setCss('background-color:hsla(120,40%,100%,.5)');
    return contains(mStyle.backgroundColor,'rgba')||contains(mStyle.backgroundColor,'hsla');
};

tests['multiplebgs']=function(){
    setCss('background:url(https://),url(https://),red url(https://)');
    return(/(url\s*\(.*?){3}/).test(mStyle.background);
};

tests['backgroundsize']=function(){
    return testPropsAll('backgroundSize');
};

tests['borderimage']=function(){
    return testPropsAll('borderImage');
};

tests['borderradius']=function(){
    return testPropsAll('borderRadius');
};

tests['boxshadow']=function(){
    return testPropsAll('boxShadow');
};

tests['textshadow']=function(){
    return document.createElement('div').style.textShadow==='';
};

tests['opacity']=function(){
    setCssAll('opacity:.55');
    return(/^0.55$/).test(mStyle.opacity);
};

tests['cssanimations']=function(){
    return testPropsAll('animationName');
};

tests['csscolumns']=function(){
    return testPropsAll('columnCount');
};

tests['cssgradients']=function(){
    var str1='background-image:',str2='gradient(linear,left top,right bottom,from(#9f9),to(white));',str3='linear-gradient(left top,#9f9, white);';
    setCss((str1+'-webkit- '.split(' ').join(str2+str1)+
        prefixes.join(str3+str1)).slice(0,-str1.length));
    return contains(mStyle.backgroundImage,'gradient');
};

tests['cssreflections']=function(){
    return testPropsAll('boxReflect');
};

tests['csstransforms']=function(){
    return!!testPropsAll('transform');
};

tests['csstransforms3d']=function(){
    var ret=!!testPropsAll('perspective');
    if(ret&&'webkitPerspective'in docElement.style){
        injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(node,rule){
            ret=node.offsetLeft===9&&node.offsetHeight===3;
        });
    }
    return ret;
};

tests['csstransitions']=function(){
    return testPropsAll('transition');
};

tests['fontface']=function(){
    var bool;
    injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}',function(node,rule){
        var style=document.getElementById('smodernizr'),sheet=style.sheet||style.styleSheet,cssText=sheet?(sheet.cssRules&&sheet.cssRules[0]?sheet.cssRules[0].cssText:sheet.cssText||''):'';
        bool=/src/i.test(cssText)&&cssText.indexOf(rule.split(' ')[0])===0;
    });
    return bool;
};

tests['generatedcontent']=function(){
    var bool;
    injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''),function(node){
        bool=node.offsetHeight>=3;
    });
    return bool;
};

tests['video']=function(){
    var elem=document.createElement('video'),bool=false;
    try{
        if(bool=!!elem.canPlayType){
            bool=new Boolean(bool);
            bool.ogg=elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,'');
            bool.h264=elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,'');
            bool.webm=elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
        }
    }catch(e){}
return bool;
};

tests['audio']=function(){
    var elem=document.createElement('audio'),bool=false;
    try{
        if(bool=!!elem.canPlayType){
            bool=new Boolean(bool);
            bool.ogg=elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
            bool.mp3=elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
            bool.wav=elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
            bool.m4a=(elem.canPlayType('audio/x-m4a;')||elem.canPlayType('audio/aac;')).replace(/^no$/,'');
        }
    }catch(e){}
return bool;
};

tests['localstorage']=function(){
    try{
        localStorage.setItem(mod,mod);
        localStorage.removeItem(mod);
        return true;
    }catch(e){
        return false;
    }
};

tests['sessionstorage']=function(){
    try{
        sessionStorage.setItem(mod,mod);
        sessionStorage.removeItem(mod);
        return true;
    }catch(e){
        return false;
    }
};

tests['webworkers']=function(){
    return!!window.Worker;
};

tests['applicationcache']=function(){
    return!!window.applicationCache;
};

function webforms(){
    Modernizr['input']=(function(props){
        for(var i=0,len=props.length;i<len;i++){
            attrs[props[i]]=!!(props[i]in inputElem);
        }
        if(attrs.list){
            attrs.list=!!(document.createElement('datalist')&&window.HTMLDataListElement);
        }
        return attrs;
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
    Modernizr['inputtypes']=(function(props){
        for(var i=0,bool,inputElemType,defaultView,len=props.length;i<len;i++){
            inputElem.setAttribute('type',inputElemType=props[i]);
            bool=inputElem.type!=='text';
            if(bool){
                inputElem.value=smile;
                inputElem.style.cssText='position:absolute;visibility:hidden;';
                if(/^range$/.test(inputElemType)&&inputElem.style.WebkitAppearance!==undefined){
                    docElement.appendChild(inputElem);
                    defaultView=document.defaultView;
                    bool=defaultView.getComputedStyle&&defaultView.getComputedStyle(inputElem,null).WebkitAppearance!=='textfield'&&(inputElem.offsetHeight!==0);
                    docElement.removeChild(inputElem);
                }else if(/^(search|tel)$/.test(inputElemType)){}else if(/^(url|email)$/.test(inputElemType)){
                    bool=inputElem.checkValidity&&inputElem.checkValidity()===false;
                }else{
                    bool=inputElem.value!=smile;
                }
            }
        inputs[props[i]]=!!bool;
        }
    return inputs;
    })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
}
for(var feature in tests){
    if(hasOwnProp(tests,feature)){
        featureName=feature.toLowerCase();
        Modernizr[featureName]=tests[feature]();
        classes.push((Modernizr[featureName]?'':'no-')+featureName);
    }
}
Modernizr.input||webforms();
Modernizr.addTest=function(feature,test){
    if(typeof feature=='object'){
        for(var key in feature){
            if(hasOwnProp(feature,key)){
                Modernizr.addTest(key,feature[key]);
            }
        }
        }else{
    feature=feature.toLowerCase();
    if(Modernizr[feature]!==undefined){
        return Modernizr;
    }
    test=typeof test=='function'?test():test;
    if(typeof enableClasses!=="undefined"&&enableClasses){
        docElement.className+=' '+(test?'':'no-')+feature;
    }
    Modernizr[feature]=test;
}
return Modernizr;
};

setCss('');
modElem=inputElem=null;
;
(function(window,document){
    var options=window.html5||{};
    
    var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    var supportsHtml5Styles;
    var expando='_html5shiv';
    var expanID=0;
    var expandoData={};
    
    var supportsUnknownElements;
    (function(){
        try{
            var a=document.createElement('a');
            a.innerHTML='<xyz></xyz>';
            supportsHtml5Styles=('hidden'in a);
            supportsUnknownElements=a.childNodes.length==1||(function(){
                (document.createElement)('a');
                var frag=document.createDocumentFragment();
                return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');
            }());
        }catch(e){
            supportsHtml5Styles=true;
            supportsUnknownElements=true;
        }
    }());
function addStyleSheet(ownerDocument,cssText){
    var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;
    p.innerHTML='x<style>'+cssText+'</style>';
    return parent.insertBefore(p.lastChild,parent.firstChild);
}
function getElements(){
    var elements=html5.elements;
    return typeof elements=='string'?elements.split(' '):elements;
}
function getExpandoData(ownerDocument){
    var data=expandoData[ownerDocument[expando]];
    if(!data){
        data={};
        
        expanID++;
        ownerDocument[expando]=expanID;
        expandoData[expanID]=data;
    }
    return data;
}
function createElement(nodeName,ownerDocument,data){
    if(!ownerDocument){
        ownerDocument=document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if(!data){
        data=getExpandoData(ownerDocument);
    }
    var node;
    if(data.cache[nodeName]){
        node=data.cache[nodeName].cloneNode();
    }else if(saveClones.test(nodeName)){
        node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();
    }else{
        node=data.createElem(nodeName);
    }
    return node.canHaveChildren&&!reSkip.test(nodeName)?data.frag.appendChild(node):node;
}
function createDocumentFragment(ownerDocument,data){
    if(!ownerDocument){
        ownerDocument=document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data=data||getExpandoData(ownerDocument);
    var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
}
function shivMethods(ownerDocument,data){
    if(!data.cache){
        data.cache={};
        
        data.createElem=ownerDocument.createElement;
        data.createFrag=ownerDocument.createDocumentFragment;
        data.frag=data.createFrag();
    }
    ownerDocument.createElement=function(nodeName){
        if(!html5.shivMethods){
            return data.createElem(nodeName);
        }
        return createElement(nodeName,ownerDocument,data);
    };
    
    ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+
        getElements().join().replace(/\w+/g,function(nodeName){
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return'c("'+nodeName+'")';
        })+');return n}')(html5,data.frag);
}
function shivDocument(ownerDocument){
    if(!ownerDocument){
        ownerDocument=document;
    }
    var data=getExpandoData(ownerDocument);
    if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){
        data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}'+'mark{background:#FF0;color:#000}');
    }
    if(!supportsUnknownElements){
        shivMethods(ownerDocument,data);
    }
    return ownerDocument;
}
var html5={
    'elements':options.elements||'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',
    'shivCSS':(options.shivCSS!==false),
    'supportsUnknownElements':supportsUnknownElements,
    'shivMethods':(options.shivMethods!==false),
    'type':'default',
    'shivDocument':shivDocument,
    createElement:createElement,
    createDocumentFragment:createDocumentFragment
};

window.html5=html5;
shivDocument(document);
}(this,document));
Modernizr._version=version;
Modernizr._prefixes=prefixes;
Modernizr._domPrefixes=domPrefixes;
Modernizr._cssomPrefixes=cssomPrefixes;
Modernizr.hasEvent=isEventSupported;
Modernizr.testProp=function(prop){
    return testProps([prop]);
};

Modernizr.testAllProps=testPropsAll;
Modernizr.testStyles=injectElementWithStyles;
docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,'$1$2')+
(enableClasses?' js '+classes.join(' '):'');
return Modernizr;
})(this,this.document);
(function(a,b,c){
    function d(a){
        return"[object Function]"==o.call(a)
        }
        function e(a){
        return"string"==typeof a
        }
        function f(){}
    function g(a){
        return!a||"loaded"==a||"complete"==a||"uninitialized"==a
        }
        function h(){
        var a=p.shift();
        q=1,a?a.t?m(function(){
            ("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)
            },0):(a(),h()):q=0
        }
        function i(a,c,d,e,f,i,j){
        function k(b){
            if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){
                "img"!=a&&m(function(){
                    t.removeChild(l)
                    },50);
                for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()
                    }
                }
        var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={
        t:d,
        s:c,
        e:f,
        a:i,
        x:j
    };
    
    1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){
        k.call(this,r)
        },p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))
    }
    function j(a,b,c,d,f){
    return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this
    }
    function k(){
    var a=B;
    return a.loader={
        load:j,
        i:0
    },a
    }
    var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){
    return"[object Array]"==o.call(a)
    },x=[],y={},z={
    timeout:function(a,b){
        return b.length&&(a.timeout=b[0]),a
        }
    },A,B;
B=function(a){
    function b(a){
        var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={
            url:c,
            origUrl:c,
            prefixes:a
        },e,f,g;
        for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));
        for(f=0;f<b;f++)c=x[f](c);
        return c
        }
        function g(a,e,f,g,h){
        var i=b(a),j=i.autoCallback;
        i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){
            k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2
            })))
        }
        function h(a,b){
        function c(a,c){
            if(a){
                if(e(a))c||(j=function(){
                    var a=[].slice.call(arguments);
                    k.apply(this,a),l()
                    }),g(a,j,b,0,h);
                else if(Object(a)===a)for(n in m=function(){
                    var b=0,c;
                    for(c in a)a.hasOwnProperty(c)&&b++;return b
                    }(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){
                    var a=[].slice.call(arguments);
                    k.apply(this,a),l()
                    }:j[n]=function(a){
                    return function(){
                        var b=[].slice.call(arguments);
                        a&&a.apply(this,b),l()
                        }
                    }(k[n])),g(a[n],j,b,n,h))
                    }else!c&&l()
            }
            var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;
    c(h?a.yep:a.nope,!!i),i&&c(i)
    }
    var i,j,l=this.yepnope.loader;
if(e(a))g(a,0,l,0);
    else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)
    },B.addPrefix=function(a,b){
    z[a]=b
    },B.addFilter=function(a){
    x.push(a)
    },B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){
    b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"
    },0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){
    var k=b.createElement("script"),l,o,e=e||B.errorTimeout;
    k.src=a;
    for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){
        !l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)
        },m(function(){
        l||(l=1,c(1))
        },e),i?k.onload():n.parentNode.insertBefore(k,n)
    },a.yepnope.injectCss=function(a,c,d,e,g,i){
    var e=b.createElement("link"),j,c=i?h:c||f;
    e.href=a,e.rel="stylesheet",e.type="text/css";
    for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))
    }
})(this,document);
Modernizr.load=function(){
    yepnope.apply(window,[].slice.call(arguments,0));
};
;
;



/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){
    function _(e){
        var t=M[e]={};
        
        return v.each(e.split(y),function(e,n){
            t[n]=!0
            }),t
        }
        function H(e,n,r){
        if(r===t&&e.nodeType===1){
            var i="data-"+n.replace(P,"-$1").toLowerCase();
            r=e.getAttribute(i);
            if(typeof r=="string"){
                try{
                    r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r
                    }catch(s){}
                v.data(e,n,r)
                }else r=t
                }
                return r
        }
        function B(e){
        var t;
        for(t in e){
            if(t==="data"&&v.isEmptyObject(e[t]))continue;
            if(t!=="toJSON")return!1
                }
                return!0
        }
        function et(){
        return!1
        }
        function tt(){
        return!0
        }
        function ut(e){
        return!e||!e.parentNode||e.parentNode.nodeType===11
        }
        function at(e,t){
        do e=e[t];while(e&&e.nodeType!==1);
        return e
        }
        function ft(e,t,n){
        t=t||0;
        if(v.isFunction(t))return v.grep(e,function(e,r){
            var i=!!t.call(e,r,e);
            return i===n
            });
        if(t.nodeType)return v.grep(e,function(e,r){
            return e===t===n
            });
        if(typeof t=="string"){
            var r=v.grep(e,function(e){
                return e.nodeType===1
                });
            if(it.test(t))return v.filter(t,r,!n);
            t=v.filter(t,r)
            }
            return v.grep(e,function(e,r){
            return v.inArray(e,t)>=0===n
            })
        }
        function lt(e){
        var t=ct.split("|"),n=e.createDocumentFragment();
        if(n.createElement)while(t.length)n.createElement(t.pop());
        return n
        }
        function Lt(e,t){
        return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))
        }
        function At(e,t){
        if(t.nodeType!==1||!v.hasData(e))return;
        var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;
        if(u){
            delete o.handle,o.events={};
            
            for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])
                }
                o.data&&(o.data=v.extend({},o.data))
        }
        function Ot(e,t){
        var n;
        if(t.nodeType!==1)return;
        t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)
        }
        function Mt(e){
        return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]
        }
        function _t(e){
        Et.test(e.type)&&(e.defaultChecked=e.checked)
        }
        function Qt(e,t){
        if(t in e)return t;
        var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;
        while(i--){
            t=Jt[i]+n;
            if(t in e)return t
                }
                return r
        }
        function Gt(e,t){
        return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)
        }
        function Yt(e,t){
        var n,r,i=[],s=0,o=e.length;
        for(;s<o;s++){
            n=e[s];
            if(!n.style)continue;
            i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))
            }
            for(s=0;s<o;s++){
            n=e[s];
            if(!n.style)continue;
            if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"
                }
                return e
        }
        function Zt(e,t,n){
        var r=Rt.exec(t);
        return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
        }
        function en(e,t,n,r){
        var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;
        for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));
        return s
        }
        function tn(e,t,n){
        var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";
        if(r<=0||r==null){
            r=Dt(e,t);
            if(r<0||r==null)r=e.style[t];
            if(Ut.test(r))return r;
            i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0
            }
            return r+en(e,t,n||(s?"border":"content"),i)+"px"
        }
        function nn(e){
        if(Wt[e])return Wt[e];
        var t=v("<"+e+">").appendTo(i.body),n=t.css("display");
        t.remove();
        if(n==="none"||n===""){
            Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{
                frameBorder:0,
                width:0,
                height:0
            }));
            if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();
            t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)
            }
            return Wt[e]=n,n
        }
        function fn(e,t,n,r){
        var i;
        if(v.isArray(t))v.each(t,function(t,i){
            n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)
            });
        else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)
            }
            function Cn(e){
        return function(t,n){
            typeof t!="string"&&(n=t,t="*");
            var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;
            if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)
                }
            }
    function kn(e,n,r,i,s,o){
    s=s||n.dataTypes[0],o=o||{},o[s]=!0;
    var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;
    for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));
    return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u
    }
    function Ln(e,n){
    var r,i,s=v.ajaxSettings.flatOptions||{};
    
    for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)
    }
    function An(e,n,r){
    var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;
    for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));
    if(i)for(s in a)if(a[s]&&a[s].test(i)){
        f.unshift(s);
        break
    }
    if(f[0]in r)o=f[0];
    else{
        for(s in r){
            if(!f[0]||e.converters[s+" "+f[0]]){
                o=s;
                break
            }
            u||(u=s)
            }
            o=o||u
        }
        if(o)return o!==f[0]&&f.unshift(o),r[o]
        }
        function On(e,t){
    var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;
    e.dataFilter&&(t=e.dataFilter(t,e.dataType));
    if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){
        if(u!=="*"&&u!==i){
            n=a[u+" "+i]||a["* "+i];
            if(!n)for(r in a){
                s=r.split(" ");
                if(s[1]===i){
                    n=a[u+" "+s[0]]||a["* "+s[0]];
                    if(n){
                        n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));
                        break
                    }
                }
            }
            if(n!==!0)if(n&&e["throws"])t=n(t);else try{
        t=n(t)
        }catch(l){
        return{
            state:"parsererror",
            error:n?l:"No conversion from "+u+" to "+i
            }
        }
    }
    u=i
}
return{
    state:"success",
    data:t
}
}
function Fn(){
    try{
        return new e.XMLHttpRequest
        }catch(t){}
}
function In(){
    try{
        return new e.ActiveXObject("Microsoft.XMLHTTP")
        }catch(t){}
}
function $n(){
    return setTimeout(function(){
        qn=t
        },0),qn=v.now()
    }
    function Jn(e,t){
    v.each(t,function(t,n){
        var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;
        for(;i<s;i++)if(r[i].call(e,t,n))return
        })
    }
    function Kn(e,t,n){
    var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){
        delete a.elem
        }),a=function(){
        var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;
        for(;s<o;s++)f.tweens[s].run(i);
        return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)
        },f=u.promise({
        elem:e,
        props:v.extend({},t),
        opts:v.extend(!0,{
            specialEasing:{}
        },n),
    originalProperties:t,
    originalOptions:n,
    startTime:qn||$n(),
        duration:n.duration,
        tweens:[],
        createTween:function(t,n,r){
        var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);
        return f.tweens.push(i),i
        },
    stop:function(t){
        var n=0,r=t?f.tweens.length:0;
        for(;n<r;n++)f.tweens[n].run(1);
        return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this
        }
    }),l=f.props;
Qn(l,f.opts.specialEasing);
for(;i<o;i++){
    r=Xn[i].call(f,e,l,f.opts);
    if(r)return r
        }
        return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{
    anim:f,
    queue:f.opts.queue,
    elem:e
})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)
}
function Qn(e,t){
    var n,r,i,s,o;
    for(n in e){
        r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];
        if(o&&"expand"in o){
            s=o.expand(s),delete e[r];
            for(n in s)n in e||(e[n]=s[n],t[n]=i)
                }else t[r]=i
            }
        }
    function Gn(e,t,n){
    var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);
    n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){
        l.unqueued||c()
        }),l.unqueued++,h.always(function(){
        h.always(function(){
            l.unqueued--,v.queue(e,"fx").length||l.empty.fire()
            })
        })),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){
        p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
        }));
    for(r in t){
        s=t[r];
        if(Un.exec(s)){
            delete t[r],a=a||s==="toggle";
            if(s===(g?"hide":"show"))continue;
            m.push(r)
            }
        }
    o=m.length;
if(o){
    u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){
        v(e).hide()
        }),h.done(function(){
        var t;
        v.removeData(e,"fxshow",!0);
        for(t in d)v.style(e,t,d[t])
            });
    for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))
        }
    }
function Yn(e,t,n,r,i){
    return new Yn.prototype.init(e,t,n,r,i)
    }
    function Zn(e,t){
    var n,r={
        height:e
    },i=0;
    t=t?1:0;
    for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;
    return t&&(r.opacity=r.width=e),r
    }
    function tr(e){
    return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1
    }
    var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){
    return new v.fn.init(e,t,n)
    },m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){
    return(t+"").toUpperCase()
    },A=function(){
    i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())
    },O={};

v.fn=v.prototype={
    constructor:v,
    init:function(e,n,r){
        var s,o,u,a;
        if(!e)return this;
        if(e.nodeType)return this.context=this[0]=e,this.length=1,this;
        if(typeof e=="string"){
            e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);
            if(s&&(s[1]||!n)){
                if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);
                o=i.getElementById(s[2]);
                if(o&&o.parentNode){
                    if(o.id!==s[2])return r.find(e);
                    this.length=1,this[0]=o
                    }
                    return this.context=i,this.selector=e,this
                }
                return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
            }
            return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))
        },
    selector:"",
    jquery:"1.8.3",
    length:0,
    size:function(){
        return this.length
        },
    toArray:function(){
        return l.call(this)
        },
    get:function(e){
        return e==null?this.toArray():e<0?this[this.length+e]:this[e]
        },
    pushStack:function(e,t,n){
        var r=v.merge(this.constructor(),e);
        return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r
        },
    each:function(e,t){
        return v.each(this,e,t)
        },
    ready:function(e){
        return v.ready.promise().done(e),this
        },
    eq:function(e){
        return e=+e,e===-1?this.slice(e):this.slice(e,e+1)
        },
    first:function(){
        return this.eq(0)
        },
    last:function(){
        return this.eq(-1)
        },
    slice:function(){
        return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))
        },
    map:function(e){
        return this.pushStack(v.map(this,function(t,n){
            return e.call(t,n,t)
            }))
        },
    end:function(){
        return this.prevObject||this.constructor(null)
        },
    push:f,
    sort:[].sort,
    splice:[].splice
    },v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){
    var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;
    typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);
    for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){
        r=u[n],i=e[n];
        if(u===i)continue;
        l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)
        }
        return u
    },v.extend({
    noConflict:function(t){
        return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v
        },
    isReady:!1,
    readyWait:1,
    holdReady:function(e){
        e?v.readyWait++:v.ready(!0)
        },
    ready:function(e){
        if(e===!0?--v.readyWait:v.isReady)return;
        if(!i.body)return setTimeout(v.ready,1);
        v.isReady=!0;
        if(e!==!0&&--v.readyWait>0)return;
        r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")
        },
    isFunction:function(e){
        return v.type(e)==="function"
        },
    isArray:Array.isArray||function(e){
        return v.type(e)==="array"
        },
    isWindow:function(e){
        return e!=null&&e==e.window
        },
    isNumeric:function(e){
        return!isNaN(parseFloat(e))&&isFinite(e)
        },
    type:function(e){
        return e==null?String(e):O[h.call(e)]||"object"
        },
    isPlainObject:function(e){
        if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;
        try{
            if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1
                }catch(n){
            return!1
            }
            var r;
        for(r in e);return r===t||p.call(e,r)
        },
    isEmptyObject:function(e){
        var t;
        for(t in e)return!1;return!0
        },
    error:function(e){
        throw new Error(e)
        },
    parseHTML:function(e,t,n){
        var r;
        return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))
        },
    parseJSON:function(t){
        if(!t||typeof t!="string")return null;
        t=v.trim(t);
        if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);
        if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();
        v.error("Invalid JSON: "+t)
        },
    parseXML:function(n){
        var r,i;
        if(!n||typeof n!="string")return null;
        try{
            e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
            }catch(s){
            r=t
            }
            return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r
        },
    noop:function(){},
    globalEval:function(t){
        t&&g.test(t)&&(e.execScript||function(t){
            e.eval.call(e,t)
            })(t)
        },
    camelCase:function(e){
        return e.replace(C,"ms-").replace(k,L)
        },
    nodeName:function(e,t){
        return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
        },
    each:function(e,n,r){
        var i,s=0,o=e.length,u=o===t||v.isFunction(e);
        if(r){
            if(u){
                for(i in e)if(n.apply(e[i],r)===!1)break
                    }else for(;s<o;)if(n.apply(e[s++],r)===!1)break
                }else if(u){
            for(i in e)if(n.call(e[i],i,e[i])===!1)break
                }else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e
        },
    trim:d&&!d.call("\ufeff\u00a0")?function(e){
        return e==null?"":d.call(e)
        }:function(e){
        return e==null?"":(e+"").replace(b,"")
        },
    makeArray:function(e,t){
        var n,r=t||[];
        return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r
        },
    inArray:function(e,t,n){
        var r;
        if(t){
            if(c)return c.call(t,e,n);
            r=t.length,n=n?n<0?Math.max(0,r+n):n:0;
            for(;n<r;n++)if(n in t&&t[n]===e)return n
                }
                return-1
        },
    merge:function(e,n){
        var r=n.length,i=e.length,s=0;
        if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];
        return e.length=i,e
        },
    grep:function(e,t,n){
        var r,i=[],s=0,o=e.length;
        n=!!n;
        for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);
        return i
        },
    map:function(e,n,r){
        var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));
        if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)
        },
    guid:1,
    proxy:function(e,n){
        var r,i,s;
        return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){
            return e.apply(n,i.concat(l.call(arguments)))
            },s.guid=e.guid=e.guid||v.guid++,s):t
        },
    access:function(e,n,r,i,s,o,u){
        var a,f=r==null,l=0,c=e.length;
        if(r&&typeof r=="object"){
            for(l in r)v.access(e,n,l,r[l],1,o,i);s=1
            }else if(i!==t){
            a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){
                return a.call(v(e),n)
                }):(n.call(e,i),n=null));
            if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);
            s=1
            }
            return s?e:f?n.call(e):c?n(e[0],r):o
        },
    now:function(){
        return(new Date).getTime()
        }
    }),v.ready.promise=function(t){
    if(!r){
        r=v.Deferred();
        if(i.readyState==="complete")setTimeout(v.ready,1);
        else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);
        else{
            i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);
            var n=!1;
            try{
                n=e.frameElement==null&&i.documentElement
                }catch(s){}
            n&&n.doScroll&&function o(){
                if(!v.isReady){
                    try{
                        n.doScroll("left")
                        }catch(e){
                        return setTimeout(o,50)
                        }
                        v.ready()
                    }
                }()
        }
    }
return r.promise(t)
},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){
    O["[object "+t+"]"]=t.toLowerCase()
    }),n=v(i);
var M={};

v.Callbacks=function(e){
    e=typeof e=="string"?M[e]||_(e):v.extend({},e);
    var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){
        n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;
        for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){
            n=!1;
            break
        }
        i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())
        },c={
        add:function(){
            if(a){
                var t=a.length;
                (function r(t){
                    v.each(t,function(t,n){
                        var i=v.type(n);
                        i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)
                        })
                    })(arguments),i?o=a.length:n&&(s=t,l(n))
                }
                return this
            },
        remove:function(){
            return a&&v.each(arguments,function(e,t){
                var n;
                while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)
                    }),this
            },
        has:function(e){
            return v.inArray(e,a)>-1
            },
        empty:function(){
            return a=[],this
            },
        disable:function(){
            return a=f=n=t,this
            },
        disabled:function(){
            return!a
            },
        lock:function(){
            return f=t,n||c.disable(),this
            },
        locked:function(){
            return!f
            },
        fireWith:function(e,t){
            return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this
            },
        fire:function(){
            return c.fireWith(this,arguments),this
            },
        fired:function(){
            return!!r
            }
        };
    
return c
},v.extend({
    Deferred:function(e){
        var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={
            state:function(){
                return n
                },
            always:function(){
                return i.done(arguments).fail(arguments),this
                },
            then:function(){
                var e=arguments;
                return v.Deferred(function(n){
                    v.each(t,function(t,r){
                        var s=r[0],o=e[t];
                        i[r[1]](v.isFunction(o)?function(){
                            var e=o.apply(this,arguments);
                            e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])
                            }:n[s])
                        }),e=null
                    }).promise()
                },
            promise:function(e){
                return e!=null?v.extend(e,r):r
                }
            },i={};
    
    return r.pipe=r.then,v.each(t,function(e,s){
        var o=s[2],u=s[3];
        r[s[1]]=o.add,u&&o.add(function(){
            n=u
            },t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith
        }),r.promise(i),e&&e.call(i,i),i
    },
when:function(e){
    var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){
        return function(r){
            t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)
            }
        },u,a,f;
if(r>1){
    u=new Array(r),a=new Array(r),f=new Array(r);
    for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i
        }
        return i||s.resolveWith(f,n),s.promise()
    }
}),v.support=function(){
    var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");
    p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];
    if(!n||!r||!n.length)return{};
        
    s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={
        leadingWhitespace:p.firstChild.nodeType===3,
        tbody:!p.getElementsByTagName("tbody").length,
        htmlSerialize:!!p.getElementsByTagName("link").length,
        style:/top/.test(r.getAttribute("style")),
        hrefNormalized:r.getAttribute("href")==="/a",
        opacity:/^0.5/.test(r.style.opacity),
        cssFloat:!!r.style.cssFloat,
        checkOn:u.value==="on",
        optSelected:o.selected,
        getSetAttribute:p.className!=="t",
        enctype:!!i.createElement("form").enctype,
        html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",
        boxModel:i.compatMode==="CSS1Compat",
        submitBubbles:!0,
        changeBubbles:!0,
        focusinBubbles:!1,
        deleteExpando:!0,
        noCloneEvent:!0,
        inlineBlockNeedsLayout:!1,
        shrinkWrapBlocks:!1,
        reliableMarginRight:!0,
        boxSizingReliable:!0,
        pixelPosition:!1
        },u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;
    try{
        delete p.test
        }catch(d){
        t.deleteExpando=!1
        }!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){
        t.noCloneEvent=!1
        }),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);
    if(p.attachEvent)for(l in{
        submit:!0,
        change:!0,
        focusin:!0
        })f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){
        var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];
        if(!a)return;
        n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{
            width:"4px"
        }).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null
        }),a.removeChild(p),n=r=s=o=u=a=p=null,t
    }();
var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
v.extend({
    cache:{},
    deletedIds:[],
    uuid:0,
    expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),
    noData:{
        embed:!0,
        object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet:!0
        },
    hasData:function(e){
        return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)
        },
    data:function(e,n,r,i){
        if(!v.acceptData(e))return;
        var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;
        if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;
        c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));
        if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);
        return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o
        },
    removeData:function(e,t,n){
        if(!v.acceptData(e))return;
        var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;
        if(!u[a])return;
        if(t){
            r=n?u[a]:u[a].data;
            if(r){
                v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));
                for(i=0,s=t.length;i<s;i++)delete r[t[i]];
                if(!(n?B:v.isEmptyObject)(r))return
            }
        }
        if(!n){
        delete u[a].data;
        if(!B(u[a]))return
    }
    o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null
    },
_data:function(e,t,n){
    return v.data(e,t,n,!0)
    },
acceptData:function(e){
    var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];
    return!t||t!==!0&&e.getAttribute("classid")===t
    }
}),v.fn.extend({
    data:function(e,n){
        var r,i,s,o,u,a=this[0],f=0,l=null;
        if(e===t){
            if(this.length){
                l=v.data(a);
                if(a.nodeType===1&&!v._data(a,"parsedAttrs")){
                    s=a.attributes;
                    for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));
                    v._data(a,"parsedAttrs",!0)
                    }
                }
            return l
        }
        return typeof e=="object"?this.each(function(){
        v.data(this,e)
        }):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){
        if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;
        r[1]=n,this.each(function(){
            var t=v(this);
            t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)
            })
        },null,n,arguments.length>1,null,!1))
    },
removeData:function(e){
    return this.each(function(){
        v.removeData(this,e)
        })
    }
}),v.extend({
    queue:function(e,t,n){
        var r;
        if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]
            },
    dequeue:function(e,t){
        t=t||"fx";
        var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){
            v.dequeue(e,t)
            };
            
        i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()
        },
    _queueHooks:function(e,t){
        var n=t+"queueHooks";
        return v._data(e,n)||v._data(e,n,{
            empty:v.Callbacks("once memory").add(function(){
                v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)
                })
            })
        }
    }),v.fn.extend({
    queue:function(e,n){
        var r=2;
        return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){
            var t=v.queue(this,e,n);
            v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)
            })
        },
    dequeue:function(e){
        return this.each(function(){
            v.dequeue(this,e)
            })
        },
    delay:function(e,t){
        return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){
            var r=setTimeout(t,e);
            n.stop=function(){
                clearTimeout(r)
                }
            })
    },
clearQueue:function(e){
    return this.queue(e||"fx",[])
    },
promise:function(e,n){
    var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){
        --i||s.resolveWith(o,[o])
        };
        
    typeof e!="string"&&(n=e,e=t),e=e||"fx";
    while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));
    return a(),s.promise(n)
    }
});
var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;
v.fn.extend({
    attr:function(e,t){
        return v.access(this,v.attr,e,t,arguments.length>1)
        },
    removeAttr:function(e){
        return this.each(function(){
            v.removeAttr(this,e)
            })
        },
    prop:function(e,t){
        return v.access(this,v.prop,e,t,arguments.length>1)
        },
    removeProp:function(e){
        return e=v.propFix[e]||e,this.each(function(){
            try{
                this[e]=t,delete this[e]
            }catch(n){}
        })
    },
addClass:function(e){
    var t,n,r,i,s,o,u;
    if(v.isFunction(e))return this.each(function(t){
        v(this).addClass(e.call(this,t,this.className))
        });
    if(e&&typeof e=="string"){
        t=e.split(y);
        for(n=0,r=this.length;n<r;n++){
            i=this[n];
            if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;
                else{
                s=" "+i.className+" ";
                for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");
                i.className=v.trim(s)
                }
            }
        }
    return this
},
removeClass:function(e){
    var n,r,i,s,o,u,a;
    if(v.isFunction(e))return this.each(function(t){
        v(this).removeClass(e.call(this,t,this.className))
        });
    if(e&&typeof e=="string"||e===t){
        n=(e||"").split(y);
        for(u=0,a=this.length;u<a;u++){
            i=this[u];
            if(i.nodeType===1&&i.className){
                r=(" "+i.className+" ").replace(q," ");
                for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");
                i.className=e?v.trim(r):""
                }
            }
        }
    return this
},
toggleClass:function(e,t){
    var n=typeof e,r=typeof t=="boolean";
    return v.isFunction(e)?this.each(function(n){
        v(this).toggleClass(e.call(this,n,this.className,t),t)
        }):this.each(function(){
        if(n==="string"){
            var i,s=0,o=v(this),u=t,a=e.split(y);
            while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)
                }else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""
            })
    },
hasClass:function(e){
    var t=" "+e+" ",n=0,r=this.length;
    for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1
    },
val:function(e){
    var n,r,i,s=this[0];
    if(!arguments.length){
        if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);
        return
    }
    return i=v.isFunction(e),this.each(function(r){
        var s,o=v(this);
        if(this.nodeType!==1)return;
        i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){
            return e==null?"":e+""
            })),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];
        if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s
            })
    }
}),v.extend({
    valHooks:{
        option:{
            get:function(e){
                var t=e.attributes.value;
                return!t||t.specified?e.value:e.text
                }
            },
    select:{
        get:function(e){
            var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;
            for(;a<u;a++){
                n=r[a];
                if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){
                    t=v(n).val();
                    if(s)return t;
                    o.push(t)
                    }
                }
            return o
        },
    set:function(e,t){
        var n=v.makeArray(t);
        return v(e).find("option").each(function(){
            this.selected=v.inArray(v(this).val(),n)>=0
            }),n.length||(e.selectedIndex=-1),n
        }
    }
},
attrFn:{},
attr:function(e,n,r,i){
    var s,o,u,a=e.nodeType;
    if(!e||a===3||a===8||a===2)return;
    if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);
    if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);
    u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));
    if(r!==t){
        if(r===null){
            v.removeAttr(e,n);
            return
        }
        return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)
        }
        return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)
    },
removeAttr:function(e,t){
    var n,r,i,s,o=0;
    if(t&&e.nodeType===1){
        r=t.split(y);
        for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))
            }
        },
attrHooks:{
    type:{
        set:function(e,t){
            if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");
            else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){
                var n=e.value;
                return e.setAttribute("type",t),n&&(e.value=n),t
                }
            }
    },
value:{
    get:function(e,t){
        return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null
        },
    set:function(e,t,n){
        if(j&&v.nodeName(e,"button"))return j.set(e,t,n);
        e.value=t
        }
    }
},
propFix:{
    tabindex:"tabIndex",
    readonly:"readOnly",
    "for":"htmlFor",
    "class":"className",
    maxlength:"maxLength",
    cellspacing:"cellSpacing",
    cellpadding:"cellPadding",
    rowspan:"rowSpan",
    colspan:"colSpan",
    usemap:"useMap",
    frameborder:"frameBorder",
    contenteditable:"contentEditable"
},
prop:function(e,n,r){
    var i,s,o,u=e.nodeType;
    if(!e||u===3||u===8||u===2)return;
    return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]
    },
propHooks:{
    tabIndex:{
        get:function(e){
            var n=e.getAttributeNode("tabindex");
            return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t
            }
        }
}
}),F={
    get:function(e,n){
        var r,i=v.prop(e,n);
        return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t
        },
    set:function(e,t,n){
        var r;
        return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n
        }
    },V||(I={
    name:!0,
    id:!0,
    coords:!0
    },j=v.valHooks.button={
    get:function(e,n){
        var r;
        return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t
        },
    set:function(e,t,n){
        var r=e.getAttributeNode(n);
        return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""
        }
    },v.each(["width","height"],function(e,t){
    v.attrHooks[t]=v.extend(v.attrHooks[t],{
        set:function(e,n){
            if(n==="")return e.setAttribute(t,"auto"),n
                }
            })
}),v.attrHooks.contenteditable={
    get:j.get,
    set:function(e,t,n){
        t===""&&(t="false"),j.set(e,t,n)
        }
    }),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){
    v.attrHooks[n]=v.extend(v.attrHooks[n],{
        get:function(e){
            var r=e.getAttribute(n,2);
            return r===null?t:r
            }
        })
}),v.support.style||(v.attrHooks.style={
    get:function(e){
        return e.style.cssText.toLowerCase()||t
        },
    set:function(e,t){
        return e.style.cssText=t+""
        }
    }),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{
    get:function(e){
        var t=e.parentNode;
        return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
        }
    })),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){
    v.valHooks[this]={
        get:function(e){
            return e.getAttribute("value")===null?"on":e.value
            }
        }
}),v.each(["radio","checkbox"],function(){
    v.valHooks[this]=v.extend(v.valHooks[this],{
        set:function(e,t){
            if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0
                }
            })
});
var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){
    return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")
    };
    
v.event={
    add:function(e,n,r,i,s){
        var o,u,a,f,l,c,h,p,d,m,g;
        if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;
        r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){
            return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)
            },u.elem=e),n=v.trim(Z(n)).split(" ");
        for(f=0;f<n.length;f++){
            l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({
                type:c,
                origType:l[1],
                data:i,
                handler:r,
                guid:r.guid,
                selector:s,
                needsContext:s&&v.expr.match.needsContext.test(s),
                namespace:h.join(".")
                },d),m=a[c];
            if(!m){
                m=a[c]=[],m.delegateCount=0;
                if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)
                    }
                    g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0
            }
            e=null
        },
    global:{},
    remove:function(e,t,n,r,i){
        var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);
        if(!g||!(h=g.events))return;
        t=v.trim(Z(t||"")).split(" ");
        for(s=0;s<t.length;s++){
            o=J.exec(t[s])||[],u=a=o[1],f=o[2];
            if(!u){
                for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue
            }
            p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
            for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));
            d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])
            }
            v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))
        },
    customEvent:{
        getData:!0,
        setData:!0,
        changeData:!0
        },
    trigger:function(n,r,s,o){
        if(!s||s.nodeType!==3&&s.nodeType!==8){
            var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];
            if(Y.test(y+v.event.triggered))return;
            y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());
            if((!s||v.event.customEvent[y])&&!v.event.global[y])return;
            n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";
            if(!s){
                u=v.cache;
                for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return
            }
            n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};
            
            if(p.trigger&&p.trigger.apply(s,r)===!1)return;
            m=[[s,p.bindType||y]];
            if(!o&&!p.noBubble&&!v.isWindow(s)){
                g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;
                for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;
                c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])
                }
                for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();
            return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result
            }
            return
    },
    dispatch:function(n){
        n=v.event.fix(n||e.event);
        var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];
        g[0]=n,n.delegateTarget=this;
        if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;
        if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){
            u={},f=[];
            for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);
            f.length&&w.push({
                elem:s,
                matches:f
            })
            }
            d.length>m&&w.push({
            elem:this,
            matches:d.slice(m)
            });
        for(r=0;r<w.length&&!n.isPropagationStopped();r++){
            a=w[r],n.currentTarget=a.elem;
            for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){
                c=a.matches[i];
                if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))
                    }
                }
            return b.postDispatch&&b.postDispatch.call(this,n),n.result
    },
props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
    props:"char charCode key keyCode".split(" "),
    filter:function(e,t){
        return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e
        }
    },
mouseHooks:{
    props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter:function(e,n){
        var r,s,o,u=n.button,a=n.fromElement;
        return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e
        }
    },
fix:function(e){
    if(e[v.expando])return e;
    var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;
    e=v.Event(r);
    for(t=o.length;t;)n=o[--t],e[n]=r[n];
    return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e
    },
special:{
    load:{
        noBubble:!0
        },
    focus:{
        delegateType:"focusin"
    },
    blur:{
        delegateType:"focusout"
    },
    beforeunload:{
        setup:function(e,t,n){
            v.isWindow(this)&&(this.onbeforeunload=n)
            },
        teardown:function(e,t){
            this.onbeforeunload===t&&(this.onbeforeunload=null)
            }
        }
},
simulate:function(e,t,n,r){
    var i=v.extend(new v.Event,n,{
        type:e,
        isSimulated:!0,
        originalEvent:{}
    });
r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}
},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){
    e.removeEventListener&&e.removeEventListener(t,n,!1)
    }:function(e,t,n){
    var r="on"+t;
    e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))
    },v.Event=function(e,t){
    if(!(this instanceof v.Event))return new v.Event(e,t);
    e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0
    },v.Event.prototype={
    preventDefault:function(){
        this.isDefaultPrevented=tt;
        var e=this.originalEvent;
        if(!e)return;
        e.preventDefault?e.preventDefault():e.returnValue=!1
        },
    stopPropagation:function(){
        this.isPropagationStopped=tt;
        var e=this.originalEvent;
        if(!e)return;
        e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0
        },
    stopImmediatePropagation:function(){
        this.isImmediatePropagationStopped=tt,this.stopPropagation()
        },
    isDefaultPrevented:et,
    isPropagationStopped:et,
    isImmediatePropagationStopped:et
},v.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout"
},function(e,t){
    v.event.special[e]={
        delegateType:t,
        bindType:t,
        handle:function(e){
            var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;
            if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;
            return n
            }
        }
}),v.support.submitBubbles||(v.event.special.submit={
    setup:function(){
        if(v.nodeName(this,"form"))return!1;
        v.event.add(this,"click._submit keypress._submit",function(e){
            var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;
            r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){
                e._submit_bubble=!0
                }),v._data(r,"_submit_attached",!0))
            })
        },
    postDispatch:function(e){
        e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))
        },
    teardown:function(){
        if(v.nodeName(this,"form"))return!1;
        v.event.remove(this,"._submit")
        }
    }),v.support.changeBubbles||(v.event.special.change={
    setup:function(){
        if($.test(this.nodeName)){
            if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){
                e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)
                }),v.event.add(this,"click._change",function(e){
                this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)
                });
            return!1
            }
            v.event.add(this,"beforeactivate._change",function(e){
            var t=e.target;
            $.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){
                this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)
                }),v._data(t,"_change_attached",!0))
            })
        },
    handle:function(e){
        var t=e.target;
        if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)
            },
    teardown:function(){
        return v.event.remove(this,"._change"),!$.test(this.nodeName)
        }
    }),v.support.focusinBubbles||v.each({
    focus:"focusin",
    blur:"focusout"
},function(e,t){
    var n=0,r=function(e){
        v.event.simulate(t,e.target,v.event.fix(e),!0)
        };
        
    v.event.special[t]={
        setup:function(){
            n++===0&&i.addEventListener(e,r,!0)
            },
        teardown:function(){
            --n===0&&i.removeEventListener(e,r,!0)
            }
        }
}),v.fn.extend({
    on:function(e,n,r,i,s){
        var o,u;
        if(typeof e=="object"){
            typeof n!="string"&&(r=r||n,n=t);
            for(u in e)this.on(u,n,r,e[u],s);return this
            }
            r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));
        if(i===!1)i=et;
        else if(!i)return this;
        return s===1&&(o=i,i=function(e){
            return v().off(e),o.apply(this,arguments)
            },i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){
            v.event.add(this,e,i,r,n)
            })
        },
    one:function(e,t,n,r){
        return this.on(e,t,n,r,1)
        },
    off:function(e,n,r){
        var i,s;
        if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
        if(typeof e=="object"){
            for(s in e)this.off(s,n,e[s]);return this
            }
            if(n===!1||typeof n=="function")r=n,n=t;
        return r===!1&&(r=et),this.each(function(){
            v.event.remove(this,e,r,n)
            })
        },
    bind:function(e,t,n){
        return this.on(e,null,t,n)
        },
    unbind:function(e,t){
        return this.off(e,null,t)
        },
    live:function(e,t,n){
        return v(this.context).on(e,this.selector,t,n),this
        },
    die:function(e,t){
        return v(this.context).off(e,this.selector||"**",t),this
        },
    delegate:function(e,t,n,r){
        return this.on(t,e,n,r)
        },
    undelegate:function(e,t,n){
        return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)
        },
    trigger:function(e,t){
        return this.each(function(){
            v.event.trigger(e,t,this)
            })
        },
    triggerHandler:function(e,t){
        if(this[0])return v.event.trigger(e,t,this[0],!0)
            },
    toggle:function(e){
        var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){
            var i=(v._data(this,"lastToggle"+e.guid)||0)%r;
            return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1
            };
            
        i.guid=n;
        while(r<t.length)t[r++].guid=n;
        return this.click(i)
        },
    hover:function(e,t){
        return this.mouseenter(e).mouseleave(t||e)
        }
    }),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
    v.fn[t]=function(e,n){
        return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)
        },Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)
    }),function(e,t){
    function nt(e,t,n,r){
        n=n||[],t=t||g;
        var i,s,a,f,l=t.nodeType;
        if(!e||typeof e!="string")return n;
        if(l!==1&&l!==9)return[];
        a=o(t);
        if(!a&&!r)if(i=R.exec(e))if(f=i[1]){
            if(l===9){
                s=t.getElementById(f);
                if(!s||!s.parentNode)return n;
                if(s.id===f)return n.push(s),n
                    }else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n
                }else{
            if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;
            if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n
                }
                return vt(e.replace(j,"$1"),t,n,r,a)
        }
        function rt(e){
        return function(t){
            var n=t.nodeName.toLowerCase();
            return n==="input"&&t.type===e
            }
        }
    function it(e){
    return function(t){
        var n=t.nodeName.toLowerCase();
        return(n==="input"||n==="button")&&t.type===e
        }
    }
function st(e){
    return N(function(t){
        return t=+t,N(function(n,r){
            var i,s=e([],n.length,t),o=s.length;
            while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))
                })
        })
    }
    function ot(e,t,n){
    if(e===t)return n;
    var r=e.nextSibling;
    while(r){
        if(r===t)return-1;
        r=r.nextSibling
        }
        return 1
    }
    function ut(e,t){
    var n,r,s,o,u,a,f,l=L[d][e+" "];
    if(l)return t?0:l.slice(0);
    u=e,a=[],f=i.preFilter;
    while(u){
        if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);
        n=!1;
        if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");
        for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break
    }
    return t?u.length:u?nt.error(e):L(e,a).slice(0)
    }
    function at(e,t,r){
    var i=t.dir,s=r&&t.dir==="parentNode",o=w++;
    return t.first?function(t,n,r){
        while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)
            }:function(t,r,u){
        if(!u){
            var a,f=b+" "+o+" ",l=f+n;
            while(t=t[i])if(s||t.nodeType===1){
                if((a=t[d])===l)return t.sizset;
                if(typeof a=="string"&&a.indexOf(f)===0){
                    if(t.sizset)return t
                        }else{
                    t[d]=l;
                    if(e(t,r,u))return t.sizset=!0,t;
                    t.sizset=!1
                    }
                }
            }else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t
    }
}
function ft(e){
    return e.length>1?function(t,n,r){
        var i=e.length;
        while(i--)if(!e[i](t,n,r))return!1;
        return!0
        }:e[0]
    }
    function lt(e,t,n,r,i){
    var s,o=[],u=0,a=e.length,f=t!=null;
    for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o
    }
    function ct(e,t,n,r,i,s){
    return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){
        var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;
        n&&n(m,g,u,a);
        if(r){
            f=lt(g,p),r(f,[],u,a),l=f.length;
            while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)
                }
                if(s){
            if(i||e){
                if(i){
                    f=[],l=g.length;
                    while(l--)(c=g[l])&&f.push(m[l]=c);
                    i(null,g=[],f,a)
                    }
                    l=g.length;
                while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))
                    }
                }else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)
        })
}
function ht(e){
    var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){
        return e===t
        },u,!0),l=at(function(e){
        return T.call(t,e)>-1
        },u,!0),h=[function(e,n,r){
        return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))
        }];
    for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];
        else{
        n=i.filter[e[a].type].apply(null,e[a].matches);
        if(n[d]){
            r=++a;
            for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))
            }
            h.push(n)
        }
        return ft(h)
    }
    function pt(e,t){
    var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){
        var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;
        T&&(c=a!==g&&a,n=o.el);
        for(;(p=C[w])!=null;w++){
            if(s&&p){
                for(d=0;v=e[d];d++)if(v(p,a,f)){
                    l.push(p);
                    break
                }
                T&&(b=k,n=++o.el)
                }
                r&&((p=!v&&p)&&y--,u&&x.push(p))
            }
            y+=w;
        if(r&&w!==y){
            for(d=0;v=t[d];d++)v(x,m,a,f);
            if(u){
                if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));
                m=lt(m)
                }
                S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)
            }
            return T&&(b=k,c=N),x
        };
        
    return o.el=0,r?N(o):o
    }
    function dt(e,t,n){
    var r=0,i=t.length;
    for(;r<i;r++)nt(e,t[r],n);
    return n
    }
    function vt(e,t,n,r,s){
    var o,u,f,l,c,h=ut(e),p=h.length;
    if(!r&&h.length===1){
        u=h[0]=h[0].slice(0);
        if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){
            t=i.find.ID(f.matches[0].replace($,""),t,s)[0];
            if(!t)return n;
            e=e.slice(u.shift().length)
            }
            for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){
            f=u[o];
            if(i.relative[l=f.type])break;
            if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){
                u.splice(o,1),e=r.length&&u.join("");
                if(!e)return S.apply(n,x.call(r,0)),n;
                break
            }
            }
        }
    return a(e,h)(r,t,s,n,z.test(e)),n
}
function mt(){}
var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){
    var t=0,n=this.length;
    for(;t<n;t++)if(this[t]===e)return t;return-1
    },N=function(e,t){
    return e[d]=t==null||t,e
    },C=function(){
    var e={},t=[];
    return N(function(n,r){
        return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r
        },e)
    },k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={
    ID:new RegExp("^#("+M+")"),
    CLASS:new RegExp("^\\.("+M+")"),
    NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),
    TAG:new RegExp("^("+M.replace("w","w*")+")"),
    ATTR:new RegExp("^"+P),
    PSEUDO:new RegExp("^"+H),
    POS:new RegExp(B,"i"),
    CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),
    needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")
    },K=function(e){
    var t=g.createElement("div");
    try{
        return e(t)
        }catch(n){
        return!1
        }finally{
        t=null
        }
    },Q=K(function(e){
    return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length
    }),G=K(function(e){
    return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"
    }),Y=K(function(e){
    e.innerHTML="<select></select>";
    var t=typeof e.lastChild.getAttribute("multiple");
    return t!=="boolean"&&t!=="string"
    }),Z=K(function(e){
    return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)
    }),et=K(function(e){
    e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);
    var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;
    return r=!g.getElementById(d),y.removeChild(e),t
    });
try{
    x.call(y.childNodes,0)[0].nodeType
    }catch(tt){
    x=function(e){
        var t,n=[];
        for(;t=this[e];e++)n.push(t);
        return n
        }
    }
nt.matches=function(e,t){
    return nt(e,null,null,t)
    },nt.matchesSelector=function(e,t){
    return nt(t,null,null,[e]).length>0
    },s=nt.getText=function(e){
    var t,n="",r=0,i=e.nodeType;
    if(i){
        if(i===1||i===9||i===11){
            if(typeof e.textContent=="string")return e.textContent;
            for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)
                }else if(i===3||i===4)return e.nodeValue
            }else for(;t=e[r];r++)n+=s(t);
    return n
    },o=nt.isXML=function(e){
    var t=e&&(e.ownerDocument||e).documentElement;
    return t?t.nodeName!=="HTML":!1
    },u=nt.contains=y.contains?function(e,t){
    var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;
    return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))
    }:y.compareDocumentPosition?function(e,t){
    return t&&!!(e.compareDocumentPosition(t)&16)
    }:function(e,t){
    while(t=t.parentNode)if(t===e)return!0;
    return!1
    },nt.attr=function(e,t){
    var n,r=o(e);
    return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)
    },i=nt.selectors={
    cacheLength:50,
    createPseudo:N,
    match:J,
    attrHandle:G?{}:{
        href:function(e){
            return e.getAttribute("href",2)
            },
        type:function(e){
            return e.getAttribute("type")
            }
        },
find:{
    ID:r?function(e,t,n){
        if(typeof t.getElementById!==p&&!n){
            var r=t.getElementById(e);
            return r&&r.parentNode?[r]:[]
            }
        }:function(e,n,r){
    if(typeof n.getElementById!==p&&!r){
        var i=n.getElementById(e);
        return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]
        }
    },
TAG:Q?function(e,t){
    if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)
        }:function(e,t){
    var n=t.getElementsByTagName(e);
    if(e==="*"){
        var r,i=[],s=0;
        for(;r=n[s];s++)r.nodeType===1&&i.push(r);
        return i
        }
        return n
    },
NAME:et&&function(e,t){
    if(typeof t.getElementsByName!==p)return t.getElementsByName(name)
        },
CLASS:Z&&function(e,t,n){
    if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)
        }
    },
relative:{
    ">":{
        dir:"parentNode",
        first:!0
        },
    " ":{
        dir:"parentNode"
    },
    "+":{
        dir:"previousSibling",
        first:!0
        },
    "~":{
        dir:"previousSibling"
    }
},
preFilter:{
    ATTR:function(e){
        return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)
        },
    CHILD:function(e){
        return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e
        },
    PSEUDO:function(e){
        var t,n;
        if(J.CHILD.test(e[0]))return null;
        if(e[3])e[2]=e[3];
        else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;
        return e.slice(0,3)
        }
    },
filter:{
    ID:r?function(e){
        return e=e.replace($,""),function(t){
            return t.getAttribute("id")===e
            }
        }:function(e){
    return e=e.replace($,""),function(t){
        var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");
        return n&&n.value===e
        }
    },
TAG:function(e){
    return e==="*"?function(){
        return!0
        }:(e=e.replace($,"").toLowerCase(),function(t){
        return t.nodeName&&t.nodeName.toLowerCase()===e
        })
    },
CLASS:function(e){
    var t=k[d][e+" "];
    return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){
        return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")
        })
    },
ATTR:function(e,t,n){
    return function(r,i){
        var s=nt.attr(r,e);
        return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0
        }
    },
CHILD:function(e,t,n,r){
    return e==="nth"?function(e){
        var t,i,s=e.parentNode;
        if(n===1&&r===0)return!0;
        if(s){
            i=0;
            for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){
                i++;
                if(e===t)break
            }
            }
            return i-=r,i===n||i%n===0&&i/n>=0
    }:function(t){
    var n=t;
    switch(e){
        case"only":case"first":
            while(n=n.previousSibling)if(n.nodeType===1)return!1;
            if(e==="first")return!0;
            n=t;
        case"last":
            while(n=n.nextSibling)if(n.nodeType===1)return!1;
            return!0
            }
        }
},
PSEUDO:function(e,t){
    var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);
    return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){
        var i,s=r(e,t),o=s.length;
        while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])
            }):function(e){
        return r(e,0,n)
        }):r
    }
},
pseudos:{
    not:N(function(e){
        var t=[],n=[],r=a(e.replace(j,"$1"));
        return r[d]?N(function(e,t,n,i){
            var s,o=r(e,null,i,[]),u=e.length;
            while(u--)if(s=o[u])e[u]=!(t[u]=s)
                }):function(e,i,s){
            return t[0]=e,r(t,null,s,n),!n.pop()
            }
        }),
has:N(function(e){
    return function(t){
        return nt(e,t).length>0
        }
    }),
contains:N(function(e){
    return function(t){
        return(t.textContent||t.innerText||s(t)).indexOf(e)>-1
        }
    }),
enabled:function(e){
    return e.disabled===!1
    },
disabled:function(e){
    return e.disabled===!0
    },
checked:function(e){
    var t=e.nodeName.toLowerCase();
    return t==="input"&&!!e.checked||t==="option"&&!!e.selected
    },
selected:function(e){
    return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
    },
parent:function(e){
    return!i.pseudos.empty(e)
    },
empty:function(e){
    var t;
    e=e.firstChild;
    while(e){
        if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;
        e=e.nextSibling
        }
        return!0
    },
header:function(e){
    return X.test(e.nodeName)
    },
text:function(e){
    var t,n;
    return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)
    },
radio:rt("radio"),
checkbox:rt("checkbox"),
file:rt("file"),
password:rt("password"),
image:rt("image"),
submit:it("submit"),
reset:it("reset"),
button:function(e){
    var t=e.nodeName.toLowerCase();
    return t==="input"&&e.type==="button"||t==="button"
    },
input:function(e){
    return V.test(e.nodeName)
    },
focus:function(e){
    var t=e.ownerDocument;
    return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
    },
active:function(e){
    return e===e.ownerDocument.activeElement
    },
first:st(function(){
    return[0]
    }),
last:st(function(e,t){
    return[t-1]
    }),
eq:st(function(e,t,n){
    return[n<0?n+t:n]
    }),
even:st(function(e,t){
    for(var n=0;n<t;n+=2)e.push(n);
    return e
    }),
odd:st(function(e,t){
    for(var n=1;n<t;n+=2)e.push(n);
    return e
    }),
lt:st(function(e,t,n){
    for(var r=n<0?n+t:n;--r>=0;)e.push(r);
    return e
    }),
gt:st(function(e,t,n){
    for(var r=n<0?n+t:n;++r<t;)e.push(r);
    return e
    })
}
},f=y.compareDocumentPosition?function(e,t){
    return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1
    }:function(e,t){
    if(e===t)return l=!0,0;
    if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;
    var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;
    if(o===u)return ot(e,t);
    if(!o)return-1;
    if(!u)return 1;
    while(a)i.unshift(a),a=a.parentNode;
    a=u;
    while(a)s.unshift(a),a=a.parentNode;
    n=i.length,r=s.length;
    for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)
    },[0,0].sort(f),h=!l,nt.uniqueSort=function(e){
    var t,n=[],r=1,i=0;
    l=h,e.sort(f);
    if(l){
        for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));
        while(i--)e.splice(n[i],1)
            }
            return e
    },nt.error=function(e){
    throw new Error("Syntax error, unrecognized expression: "+e)
    },a=nt.compile=function(e,t){
    var n,r=[],i=[],s=A[d][e+" "];
    if(!s){
        t||(t=ut(e)),n=t.length;
        while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);
        s=A(e,pt(i,r))
        }
        return s
    },g.querySelectorAll&&function(){
    var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;
    K(function(e){
        e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")
        }),K(function(e){
        e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")
        }),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){
        if(!o&&!u&&!i.test(e)){
            var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;
            if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){
                a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;
                while(f--)a[f]=c+a[f].join("");
                h=z.test(e)&&r.parentNode||r,p=a.join(",")
                }
                if(p)try{
                return S.apply(s,x.call(h.querySelectorAll(p),0)),s
                }catch(v){}finally{
                l||r.removeAttribute("id")
                }
            }
            return t(e,r,s,o,u)
    },u&&(K(function(t){
    e=u.call(t,"div");
    try{
        u.call(t,"[test!='']:sizzle"),s.push("!=",H)
        }catch(n){}
}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){
    n=n.replace(r,"='$1']");
    if(!o(t)&&!s.test(n)&&!i.test(n))try{
        var a=u.call(t,n);
        if(a||e||t.document&&t.document.nodeType!==11)return a
            }catch(f){}
        return nt(n,null,null,[t]).length>0
    })
}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains
}(e);
var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={
    children:!0,
    contents:!0,
    next:!0,
    prev:!0
    };
    
v.fn.extend({
    find:function(e){
        var t,n,r,i,s,o,u=this;
        if(typeof e!="string")return v(e).filter(function(){
            for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0
                });
        o=this.pushStack("","find",e);
        for(t=0,n=this.length;t<n;t++){
            r=o.length,v.find(e,this[t],o);
            if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){
                o.splice(i--,1);
                break
            }
            }
            return o
    },
has:function(e){
    var t,n=v(e,this),r=n.length;
    return this.filter(function(){
        for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0
            })
    },
not:function(e){
    return this.pushStack(ft(this,e,!1),"not",e)
    },
filter:function(e){
    return this.pushStack(ft(this,e,!0),"filter",e)
    },
is:function(e){
    return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)
    },
closest:function(e,t){
    var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;
    for(;r<i;r++){
        n=this[r];
        while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){
            if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){
                s.push(n);
                break
            }
            n=n.parentNode
            }
        }
    return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)
    },
index:function(e){
    return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1
    },
add:function(e,t){
    var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);
    return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))
    },
addBack:function(e){
    return this.add(e==null?this.prevObject:this.prevObject.filter(e))
    }
}),v.fn.andSelf=v.fn.addBack,v.each({
    parent:function(e){
        var t=e.parentNode;
        return t&&t.nodeType!==11?t:null
        },
    parents:function(e){
        return v.dir(e,"parentNode")
        },
    parentsUntil:function(e,t,n){
        return v.dir(e,"parentNode",n)
        },
    next:function(e){
        return at(e,"nextSibling")
        },
    prev:function(e){
        return at(e,"previousSibling")
        },
    nextAll:function(e){
        return v.dir(e,"nextSibling")
        },
    prevAll:function(e){
        return v.dir(e,"previousSibling")
        },
    nextUntil:function(e,t,n){
        return v.dir(e,"nextSibling",n)
        },
    prevUntil:function(e,t,n){
        return v.dir(e,"previousSibling",n)
        },
    siblings:function(e){
        return v.sibling((e.parentNode||{}).firstChild,e)
        },
    children:function(e){
        return v.sibling(e.firstChild)
        },
    contents:function(e){
        return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)
        }
    },function(e,t){
    v.fn[e]=function(n,r){
        var i=v.map(this,t,n);
        return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))
        }
    }),v.extend({
    filter:function(e,t,n){
        return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)
        },
    dir:function(e,n,r){
        var i=[],s=e[n];
        while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];
        return i
        },
    sibling:function(e,t){
        var n=[];
        for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);
        return n
        }
    });
var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={
    option:[1,"<select multiple='multiple'>","</select>"],
    legend:[1,"<fieldset>","</fieldset>"],
    thead:[1,"<table>","</table>"],
    tr:[2,"<table><tbody>","</tbody></table>"],
    td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
    col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
    area:[1,"<map>","</map>"],
    _default:[0,"",""]
    },Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));
Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({
    text:function(e){
        return v.access(this,function(e){
            return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))
            },null,e,arguments.length)
        },
    wrapAll:function(e){
        if(v.isFunction(e))return this.each(function(t){
            v(this).wrapAll(e.call(this,t))
            });
        if(this[0]){
            var t=v(e,this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){
                var e=this;
                while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;
                return e
                }).append(this)
            }
            return this
        },
    wrapInner:function(e){
        return v.isFunction(e)?this.each(function(t){
            v(this).wrapInner(e.call(this,t))
            }):this.each(function(){
            var t=v(this),n=t.contents();
            n.length?n.wrapAll(e):t.append(e)
            })
        },
    wrap:function(e){
        var t=v.isFunction(e);
        return this.each(function(n){
            v(this).wrapAll(t?e.call(this,n):e)
            })
        },
    unwrap:function(){
        return this.parent().each(function(){
            v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)
            }).end()
        },
    append:function(){
        return this.domManip(arguments,!0,function(e){
            (this.nodeType===1||this.nodeType===11)&&this.appendChild(e)
            })
        },
    prepend:function(){
        return this.domManip(arguments,!0,function(e){
            (this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)
            })
        },
    before:function(){
        if(!ut(this[0]))return this.domManip(arguments,!1,function(e){
            this.parentNode.insertBefore(e,this)
            });
        if(arguments.length){
            var e=v.clean(arguments);
            return this.pushStack(v.merge(e,this),"before",this.selector)
            }
        },
after:function(){
    if(!ut(this[0]))return this.domManip(arguments,!1,function(e){
        this.parentNode.insertBefore(e,this.nextSibling)
        });
    if(arguments.length){
        var e=v.clean(arguments);
        return this.pushStack(v.merge(this,e),"after",this.selector)
        }
    },
remove:function(e,t){
    var n,r=0;
    for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this
    },
empty:function(){
    var e,t=0;
    for(;(e=this[t])!=null;t++){
        e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));
        while(e.firstChild)e.removeChild(e.firstChild)
            }
            return this
    },
clone:function(e,t){
    return e=e==null?!1:e,t=t==null?e:t,this.map(function(){
        return v.clone(this,e,t)
        })
    },
html:function(e){
    return v.access(this,function(e){
        var n=this[0]||{},r=0,i=this.length;
        if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;
        if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){
            e=e.replace(dt,"<$1></$2>");
            try{
                for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);
                n=0
                }catch(s){}
        }
        n&&this.empty().append(e)
        },null,e,arguments.length)
},
replaceWith:function(e){
    return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){
        var n=v(this),r=n.html();
        n.replaceWith(e.call(this,t,r))
        }):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){
        var t=this.nextSibling,n=this.parentNode;
        v(this).remove(),t?v(t).before(e):v(n).append(e)
        }))
    },
detach:function(e){
    return this.remove(e,!0)
    },
domManip:function(e,n,r){
    e=[].concat.apply([],e);
    var i,s,o,u,a=0,f=e[0],l=[],c=this.length;
    if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){
        v(this).domManip(e,n,r)
        });
    if(v.isFunction(f))return this.each(function(i){
        var s=v(this);
        e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)
        });
    if(this[0]){
        i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);
        if(s){
            n=n&&v.nodeName(s,"tr");
            for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))
                }
                o=s=null,l.length&&v.each(l,function(e,t){
            t.src?v.ajax?v.ajax({
                url:t.src,
                type:"GET",
                dataType:"script",
                async:!1,
                global:!1,
                "throws":!0
                }):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)
            })
        }
        return this
    }
}),v.buildFragment=function(e,n,r){
    var s,o,u,a=e[0];
    return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{
        fragment:s,
        cacheable:o
    }
},v.fragments={},v.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
},function(e,t){
    v.fn[e]=function(n){
        var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;
        if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;
        for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);
        return this.pushStack(s,e,o.selector)
        }
    }),v.extend({
    clone:function(e,t,n){
        var r,i,s,o;
        v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));
        if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){
            Ot(e,o),r=Mt(e),i=Mt(o);
            for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])
                }
                if(t){
            At(e,o);
            if(n){
                r=Mt(e),i=Mt(o);
                for(s=0;r[s];++s)At(r[s],i[s])
                    }
                }
        return r=i=null,o
    },
clean:function(e,t,n,r){
    var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];
    if(!t||typeof t.createDocumentFragment=="undefined")t=i;
    for(s=0;(u=e[s])!=null;s++){
        typeof u=="number"&&(u+="");
        if(!u)continue;
        if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);
            else{
            y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];
            while(l--)c=c.lastChild;
            if(!v.support.tbody){
                h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];
                for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])
                    }!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)
            }
            u.nodeType?b.push(u):v.merge(b,u)
        }
        c&&(u=c=y=null);
    if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);
    if(n){
        m=function(e){
            if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)
                };
                
        for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)
            }
            return b
    },
cleanData:function(e,t){
    var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;
    for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){
        r=i[u],n=r&&a[r];
        if(n){
            if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))
            }
        }
    }
}),function(){
    var e,t;
    v.uaMatch=function(e){
        e=e.toLowerCase();
        var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];
        return{
            browser:t[1]||"",
            version:t[2]||"0"
            }
        },e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){
    function e(t,n){
        return new e.fn.init(t,n)
        }
        v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){
        return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)
        },e.fn.init.prototype=e.fn;
    var t=e(i);
    return e
    }
}();
var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={
    BODY:"block"
},Xt={
    position:"absolute",
    visibility:"hidden",
    display:"block"
},Vt={
    letterSpacing:0,
    fontWeight:400
},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;
v.fn.extend({
    css:function(e,n){
        return v.access(this,function(e,n,r){
            return r!==t?v.style(e,n,r):v.css(e,n)
            },e,n,arguments.length>1)
        },
    show:function(){
        return Yt(this,!0)
        },
    hide:function(){
        return Yt(this)
        },
    toggle:function(e,t){
        var n=typeof e=="boolean";
        return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){
            (n?e:Gt(this))?v(this).show():v(this).hide()
            })
        }
    }),v.extend({
    cssHooks:{
        opacity:{
            get:function(e,t){
                if(t){
                    var n=Dt(e,"opacity");
                    return n===""?"1":n
                    }
                }
        }
},
cssNumber:{
    fillOpacity:!0,
    fontWeight:!0,
    lineHeight:!0,
    opacity:!0,
    orphans:!0,
    widows:!0,
    zIndex:!0,
    zoom:!0
    },
cssProps:{
    "float":v.support.cssFloat?"cssFloat":"styleFloat"
    },
style:function(e,n,r,i){
    if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;
    var s,o,u,a=v.camelCase(n),f=e.style;
    n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];
    if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];
    o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");
    if(r==null||o==="number"&&isNaN(r))return;
    o==="number"&&!v.cssNumber[a]&&(r+="px");
    if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{
        f[n]=r
        }catch(l){}
    },
css:function(e,n,r,i){
    var s,o,u,a=v.camelCase(n);
    return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s
    },
swap:function(e,t,n){
    var r,i,s={};
    
    for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);
    for(i in t)e.style[i]=s[i];return r
    }
}),e.getComputedStyle?Dt=function(t,n){
    var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;
    return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r
    }:i.documentElement.currentStyle&&(Dt=function(e,t){
    var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;
    return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i
    }),v.each(["height","width"],function(e,t){
    v.cssHooks[t]={
        get:function(e,n,r){
            if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){
                return tn(e,t,r)
                }):tn(e,t,r)
                },
        set:function(e,n,r){
            return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)
            }
        }
}),v.support.opacity||(v.cssHooks.opacity={
    get:function(e,t){
        return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
        },
    set:function(e,t){
        var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";
        n.zoom=1;
        if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){
            n.removeAttribute("filter");
            if(r&&!r.filter)return
        }
        n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i
        }
    }),v(function(){
    v.support.reliableMarginRight||(v.cssHooks.marginRight={
        get:function(e,t){
            return v.swap(e,{
                display:"inline-block"
            },function(){
                if(t)return Dt(e,"marginRight")
                    })
            }
        }),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){
    v.cssHooks[t]={
        get:function(e,n){
            if(n){
                var r=Dt(e,t);
                return Ut.test(r)?v(e).position()[t]+"px":r
                }
            }
    }
})
}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){
    return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"
    },v.expr.filters.visible=function(e){
    return!v.expr.filters.hidden(e)
    }),v.each({
    margin:"",
    padding:"",
    border:"Width"
},function(e,t){
    v.cssHooks[e+t]={
        expand:function(n){
            var r,i=typeof n=="string"?n.split(" "):[n],s={};
            
            for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];
            return s
            }
        },qt.test(e)||(v.cssHooks[e+t].set=Zt)
    });
var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;
v.fn.extend({
    serialize:function(){
        return v.param(this.serializeArray())
        },
    serializeArray:function(){
        return this.map(function(){
            return this.elements?v.makeArray(this.elements):this
            }).filter(function(){
            return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))
            }).map(function(e,t){
            var n=v(this).val();
            return n==null?null:v.isArray(n)?v.map(n,function(e,n){
                return{
                    name:t.name,
                    value:e.replace(on,"\r\n")
                    }
                }):{
            name:t.name,
            value:n.replace(on,"\r\n")
            }
        }).get()
    }
}),v.param=function(e,n){
    var r,i=[],s=function(e,t){
        t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
        };
        
    n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);
    if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){
        s(this.name,this.value)
        });else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")
    };
    
var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];
try{
    cn=s.href
    }catch(Nn){
    cn=i.createElement("a"),cn.href="",cn=cn.href
    }
    ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){
    if(typeof e!="string"&&En)return En.apply(this,arguments);
    if(!this.length)return this;
    var i,s,o,u=this,a=e.indexOf(" ");
    return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({
        url:e,
        type:s,
        dataType:"html",
        data:n,
        complete:function(e,t){
            r&&u.each(r,o||[e.responseText,t,e])
            }
        }).done(function(e){
    o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)
    }),this
},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){
    v.fn[t]=function(e){
        return this.on(t,e)
        }
    }),v.each(["get","post"],function(e,n){
    v[n]=function(e,r,i,s){
        return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({
            type:n,
            url:e,
            data:r,
            success:i,
            dataType:s
        })
        }
    }),v.extend({
    getScript:function(e,n){
        return v.get(e,t,n,"script")
        },
    getJSON:function(e,t,n){
        return v.get(e,t,n,"json")
        },
    ajaxSetup:function(e,t){
        return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e
        },
    ajaxSettings:{
        url:cn,
        isLocal:dn.test(ln[1]),
        global:!0,
        type:"GET",
        contentType:"application/x-www-form-urlencoded; charset=UTF-8",
        processData:!0,
        async:!0,
        accepts:{
            xml:"application/xml, text/xml",
            html:"text/html",
            text:"text/plain",
            json:"application/json, text/javascript",
            "*":Tn
        },
        contents:{
            xml:/xml/,
            html:/html/,
            json:/json/
        },
        responseFields:{
            xml:"responseXML",
            text:"responseText"
        },
        converters:{
            "* text":e.String,
            "text html":!0,
            "text json":v.parseJSON,
            "text xml":v.parseXML
            },
        flatOptions:{
            context:!0,
            url:!0
            }
        },
ajaxPrefilter:Cn(Sn),
    ajaxTransport:Cn(xn),
    ajax:function(e,n){
    function T(e,n,s,a){
        var l,y,b,w,S,T=n;
        if(E===2)return;
        E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));
        if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);
        else{
            b=T;
            if(!T||e)T="error",e<0&&(e=0)
                }
                x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))
        }
        typeof e=="object"&&(n=e,e=t),n=n||{};
    
    var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={
        readyState:0,
        setRequestHeader:function(e,t){
            if(!E){
                var n=e.toLowerCase();
                e=w[n]=w[n]||e,b[e]=t
                }
                return this
            },
        getAllResponseHeaders:function(){
            return E===2?i:null
            },
        getResponseHeader:function(e){
            var n;
            if(E===2){
                if(!s){
                    s={};
                    while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]
                        }
                        n=s[e.toLowerCase()]
                }
                return n===t?null:n
            },
        overrideMimeType:function(e){
            return E||(c.mimeType=e),this
            },
        abort:function(e){
            return e=e||S,o&&o.abort(e),T(0,e),this
            }
        };
    
d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){
    if(e){
        var t;
        if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)
            }
            return this
    },c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);
    if(E===2)return x;
    f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");
    if(!c.hasContent){
    c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;
    if(c.cache===!1){
        var N=v.now(),C=c.url.replace(bn,"$1_="+N);
        c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")
        }
    }(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);
for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){
    S="abort";
    for(l in{
        success:1,
        error:1,
        complete:1
    })x[l](c[l]);o=kn(xn,c,n,x);
    if(!o)T(-1,"No Transport");
    else{
        x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){
            x.abort("timeout")
            },c.timeout));
        try{
            E=1,o.send(b,T)
            }catch(k){
            if(!(E<2))throw k;
            T(-1,k)
            }
        }
    return x
}
return x.abort()
},
active:0,
lastModified:{},
etag:{}
});
var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();
v.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function(){
        var e=Mn.pop()||v.expando+"_"+Pn++;
        return this[e]=!0,e
        }
    }),v.ajaxPrefilter("json jsonp",function(n,r,i){
    var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);
    if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){
        return u||v.error(s+" was not called"),u[0]
        },n.dataTypes[0]="json",e[s]=function(){
        u=arguments
        },i.always(function(){
        e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t
        }),"script"
    }),v.ajaxSetup({
    accepts:{
        script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
        script:/javascript|ecmascript/
    },
    converters:{
        "text script":function(e){
            return v.globalEval(e),e
            }
        }
}),v.ajaxPrefilter("script",function(e){
    e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
    }),v.ajaxTransport("script",function(e){
    if(e.crossDomain){
        var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;
        return{
            send:function(s,o){
                n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){
                    if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")
                        },r.insertBefore(n,r.firstChild)
                },
            abort:function(){
                n&&n.onload(0,1)
                }
            }
    }
});
var Hn,Bn=e.ActiveXObject?function(){
    for(var e in Hn)Hn[e](0,1)
        }:!1,jn=0;
v.ajaxSettings.xhr=e.ActiveXObject?function(){
    return!this.isLocal&&Fn()||In()
    }:Fn,function(e){
    v.extend(v.support,{
        ajax:!!e,
        cors:!!e&&"withCredentials"in e
        })
    }(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){
    if(!n.crossDomain||v.support.cors){
        var r;
        return{
            send:function(i,s){
                var o,u,a=n.xhr();
                n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);
                if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");
                try{
                    for(u in i)a.setRequestHeader(u,i[u])
                        }catch(f){}
                        a.send(n.hasContent&&n.data||null),r=function(e,i){
                    var u,f,l,c,h;
                    try{
                        if(r&&(i||a.readyState===4)){
                            r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);
                            if(i)a.readyState!==4&&a.abort();
                            else{
                                u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);
                                try{
                                    c.text=a.responseText
                                    }catch(p){}
                                try{
                                    f=a.statusText
                                    }catch(p){
                                    f=""
                                    }!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)
                                }
                            }
                    }catch(d){
                i||s(-1,d)
                }
                c&&s(u,f,c,l)
            },n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()
        },
    abort:function(){
        r&&r(0,1)
        }
    }
}
});
var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={
    "*":[function(e,t){
        var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;
        if(s){
            n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");
            if(r!=="px"&&u){
                u=v.css(i.elem,e,!0)||n||1;
                do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)
            }
            i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n
            }
            return i
        }]
    };
    
v.Animation=v.extend(Kn,{
    tweener:function(e,t){
        v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
        var n,r=0,i=e.length;
        for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)
            },
    prefilter:function(e,t){
        t?Xn.unshift(e):Xn.push(e)
        }
    }),v.Tween=Yn,Yn.prototype={
    constructor:Yn,
    init:function(e,t,n,r,i,s){
        this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")
        },
    cur:function(){
        var e=Yn.propHooks[this.prop];
        return e&&e.get?e.get(this):Yn.propHooks._default.get(this)
        },
    run:function(e){
        var t,n=Yn.propHooks[this.prop];
        return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this
        }
    },Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={
    _default:{
        get:function(e){
            var t;
            return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]
            },
        set:function(e){
            v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
            }
        }
},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={
    set:function(e){
        e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
        }
    },v.each(["toggle","show","hide"],function(e,t){
    var n=v.fn[t];
    v.fn[t]=function(r,i,s){
        return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)
        }
    }),v.fn.extend({
    fadeTo:function(e,t,n,r){
        return this.filter(Gt).css("opacity",0).show().end().animate({
            opacity:t
        },e,n,r)
        },
    animate:function(e,t,n,r){
        var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){
            var t=Kn(this,v.extend({},e),s);
            i&&t.stop(!0)
            };
            
        return i||s.queue===!1?this.each(o):this.queue(s.queue,o)
        },
    stop:function(e,n,r){
        var i=function(e){
            var t=e.stop;
            delete e.stop,t(r)
            };
            
        return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){
            var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);
            if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));
            (t||!r)&&v.dequeue(this,e)
            })
        }
    }),v.each({
    slideDown:Zn("show"),
    slideUp:Zn("hide"),
    slideToggle:Zn("toggle"),
    fadeIn:{
        opacity:"show"
    },
    fadeOut:{
        opacity:"hide"
    },
    fadeToggle:{
        opacity:"toggle"
    }
},function(e,t){
    v.fn[e]=function(e,n,r){
        return this.animate(t,e,n,r)
        }
    }),v.speed=function(e,t,n){
    var r=e&&typeof e=="object"?v.extend({},e):{
        complete:n||!n&&t||v.isFunction(e)&&e,
        duration:e,
        easing:n&&t||t&&!v.isFunction(t)&&t
        };
        
    r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;
    if(r.queue==null||r.queue===!0)r.queue="fx";
    return r.old=r.complete,r.complete=function(){
        v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)
        },r
    },v.easing={
    linear:function(e){
        return e
        },
    swing:function(e){
        return.5-Math.cos(e*Math.PI)/2
        }
    },v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){
    var e,n=v.timers,r=0;
    qn=v.now();
    for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);
    n.length||v.fx.stop(),qn=t
    },v.fx.timer=function(e){
    e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))
    },v.fx.interval=13,v.fx.stop=function(){
    clearInterval(Rn),Rn=null
    },v.fx.speeds={
    slow:600,
    fast:200,
    _default:400
},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){
    return v.grep(v.timers,function(t){
        return e===t.elem
        }).length
    });
var er=/^(?:body|html)$/i;
v.fn.offset=function(e){
    if(arguments.length)return e===t?this:this.each(function(t){
        v.offset.setOffset(this,e,t)
        });
    var n,r,i,s,o,u,a,f={
        top:0,
        left:0
    },l=this[0],c=l&&l.ownerDocument;
    if(!c)return;
    return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{
        top:f.top+u-s,
        left:f.left+a-o
        }):f)
    },v.offset={
    bodyOffset:function(e){
        var t=e.offsetTop,n=e.offsetLeft;
        return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{
            top:t,
            left:n
        }
    },
setOffset:function(e,t,n){
    var r=v.css(e,"position");
    r==="static"&&(e.style.position="relative");
    var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;
    a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)
    }
},v.fn.extend({
    position:function(){
        if(!this[0])return;
        var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{
            top:0,
            left:0
        }:t.offset();
        return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{
            top:n.top-r.top,
            left:n.left-r.left
            }
        },
offsetParent:function(){
    return this.map(function(){
        var e=this.offsetParent||i.body;
        while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;
        return e||i.body
        })
    }
}),v.each({
    scrollLeft:"pageXOffset",
    scrollTop:"pageYOffset"
},function(e,n){
    var r=/Y/.test(n);
    v.fn[e]=function(i){
        return v.access(this,function(e,i,s){
            var o=tr(e);
            if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];
            o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s
            },e,i,arguments.length,null)
        }
    }),v.each({
    Height:"height",
    Width:"width"
},function(e,n){
    v.each({
        padding:"inner"+e,
        content:n,
        "":"outer"+e
        },function(r,i){
        v.fn[i]=function(i,s){
            var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");
            return v.access(this,function(n,r,i){
                var s;
                return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)
                },n,o?i:t,o,null)
            }
        })
}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){
    return v
    })
})(window);
;



/*!
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
;
(function($,undefined){
    'use strict';
    var BLANK='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
    $.fn.imagesLoaded=function(callback){
        var $this=this,deferred=$.isFunction($.Deferred)?$.Deferred():0,hasNotify=$.isFunction(deferred.notify),$images=$this.find('img').add($this.filter('img')),loaded=[],proper=[],broken=[];
        if($.isPlainObject(callback)){
            $.each(callback,function(key,value){
                if(key==='callback'){
                    callback=value;
                }else if(deferred){
                    deferred[key](value);
                }
            });
    }
    function doneLoading(){
        var $proper=$(proper),$broken=$(broken);
        if(deferred){
            if(broken.length){
                deferred.reject($images,$proper,$broken);
            }else{
                deferred.resolve($images);
            }
        }
    if($.isFunction(callback)){
        callback.call($this,$images,$proper,$broken);
    }
}
function imgLoadedHandler(event){
    imgLoaded(event.target,event.type==='error');
}
function imgLoaded(img,isBroken){
    if(img.src===BLANK||$.inArray(img,loaded)!==-1){
        return;
    }
    loaded.push(img);
    if(isBroken){
        broken.push(img);
    }else{
        proper.push(img);
    }
    $.data(img,'imagesLoaded',{
        isBroken:isBroken,
        src:img.src
        });
    if(hasNotify){
        deferred.notifyWith($(img),[isBroken,$images,$(proper),$(broken)]);
    }
    if($images.length===loaded.length){
        setTimeout(doneLoading);
        $images.unbind('.imagesLoaded',imgLoadedHandler);
    }
}
if(!$images.length){
    doneLoading();
}else{
    $images.bind('load.imagesLoaded error.imagesLoaded',imgLoadedHandler).each(function(i,el){
        var src=el.src;
        var cached=$.data(el,'imagesLoaded');
        if(cached&&cached.src===src){
            imgLoaded(el,cached.isBroken);
            return;
        }
        if(el.complete&&el.naturalWidth!==undefined){
            imgLoaded(el,el.naturalWidth===0||el.naturalHeight===0);
            return;
        }
        if(el.readyState||el.complete){
            el.src=BLANK;
            el.src=src;
        }
    });
}
return deferred?deferred.promise($this):$this;
};

})(jQuery);
;



(function($){
    var _Ang,_Step_ang,_Refresh_rate,_Depth,_W,_H,_nW,_nH,_cv_W,_cv_H,_CenterX,_CenterY,_Color,_Color_target,_Light,_Content,_Direction,_Midway,$this,_After,_Active;
    var _ColorsRef={
        'aliceblue':'#f0f8ff',
        'antiquewhite':'#faebd7',
        'aqua':'#00ffff',
        'aquamarine':'#7fffd4',
        'azure':'#f0ffff',
        'beige':'#f5f5dc',
        'bisque':'#ffe4c4',
        'black':'#000000',
        'blanchedalmond':'#ffebcd',
        'blue':'#0000ff',
        'blueviolet':'#8a2be2',
        'brown':'#a52a2a',
        'burlywood':'#deb887',
        'cadetblue':'#5f9ea0',
        'chartreuse':'#7fff00',
        'chocolate':'#d2691e',
        'coral':'#ff7f50',
        'cornflowerblue':'#6495ed',
        'cornsilk':'#fff8dc',
        'crimson':'#dc143c',
        'cyan':'#00ffff',
        'darkblue':'#00008b',
        'darkcyan':'#008b8b',
        'darkgoldenrod':'#b8860b',
        'darkgray':'#a9a9a9',
        'darkgrey':'#a9a9a9',
        'darkgreen':'#006400',
        'darkkhaki':'#bdb76b',
        'darkmagenta':'#8b008b',
        'darkolivegreen':'#556b2f',
        'darkorange':'#ff8c00',
        'darkorchid':'#9932cc',
        'darkred':'#8b0000',
        'darksalmon':'#e9967a',
        'darkseagreen':'#8fbc8f',
        'darkslateblue':'#483d8b',
        'darkslategray':'#2f4f4f',
        'darkslategrey':'#2f4f4f',
        'darkturquoise':'#00ced1',
        'darkviolet':'#9400d3',
        'deeppink':'#ff1493',
        'deepskyblue':'#00bfff',
        'dimgray':'#696969',
        'dimgrey':'#696969',
        'dodgerblue':'#1e90ff',
        'firebrick':'#b22222',
        'floralwhite':'#fffaf0',
        'forestgreen':'#228b22',
        'fuchsia':'#ff00ff',
        'gainsboro':'#dcdcdc',
        'ghostwhite':'#f8f8ff',
        'gold':'#ffd700',
        'goldenrod':'#daa520',
        'gray':'#808080',
        'grey':'#808080',
        'green':'#008000',
        'greenyellow':'#adff2f',
        'honeydew':'#f0fff0',
        'hotpink':'#ff69b4',
        'indianred ':'#cd5c5c',
        'indigo  ':'#4b0082',
        'ivory':'#fffff0',
        'khaki':'#f0e68c',
        'lavender':'#e6e6fa',
        'lavenderblush':'#fff0f5',
        'lawngreen':'#7cfc00',
        'lemonchiffon':'#fffacd',
        'lightblue':'#add8e6',
        'lightcoral':'#f08080',
        'lightcyan':'#e0ffff',
        'lightgoldenrodyellow':'#fafad2',
        'lightgray':'#d3d3d3',
        'lightgrey':'#d3d3d3',
        'lightgreen':'#90ee90',
        'lightpink':'#ffb6c1',
        'lightsalmon':'#ffa07a',
        'lightseagreen':'#20b2aa',
        'lightskyblue':'#87cefa',
        'lightslategray':'#778899',
        'lightslategrey':'#778899',
        'lightsteelblue':'#b0c4de',
        'lightyellow':'#ffffe0',
        'lime':'#00ff00',
        'limegreen':'#32cd32',
        'linen':'#faf0e6',
        'magenta':'#ff00ff',
        'maroon':'#800000',
        'mediumaquamarine':'#66cdaa',
        'mediumblue':'#0000cd',
        'mediumorchid':'#ba55d3',
        'mediumpurple':'#9370d8',
        'mediumseagreen':'#3cb371',
        'mediumslateblue':'#7b68ee',
        'mediumspringgreen':'#00fa9a',
        'mediumturquoise':'#48d1cc',
        'mediumvioletred':'#c71585',
        'midnightblue':'#191970',
        'mintcream':'#f5fffa',
        'mistyrose':'#ffe4e1',
        'moccasin':'#ffe4b5',
        'navajowhite':'#ffdead',
        'navy':'#000080',
        'oldlace':'#fdf5e6',
        'olive':'#808000',
        'olivedrab':'#6b8e23',
        'orange':'#ffa500',
        'orangered':'#ff4500',
        'orchid':'#da70d6',
        'palegoldenrod':'#eee8aa',
        'palegreen':'#98fb98',
        'paleturquoise':'#afeeee',
        'palevioletred':'#d87093',
        'papayawhip':'#ffefd5',
        'peachpuff':'#ffdab9',
        'peru':'#cd853f',
        'pink':'#ffc0cb',
        'plum':'#dda0dd',
        'powderblue':'#b0e0e6',
        'purple':'#800080',
        'red':'#ff0000',
        'rosybrown':'#bc8f8f',
        'royalblue':'#4169e1',
        'saddlebrown':'#8b4513',
        'salmon':'#fa8072',
        'sandybrown':'#f4a460',
        'seagreen':'#2e8b57',
        'seashell':'#fff5ee',
        'sienna':'#a0522d',
        'silver':'#c0c0c0',
        'skyblue':'#87ceeb',
        'slateblue':'#6a5acd',
        'slategray':'#708090',
        'slategrey':'#708090',
        'snow':'#fffafa',
        'springgreen':'#00ff7f',
        'steelblue':'#4682b4',
        'tan':'#d2b48c',
        'teal':'#008080',
        'thistle':'#d8bfd8',
        'tomato':'#ff6347',
        'turquoise':'#40e0d0',
        'violet':'#ee82ee',
        'wheat':'#f5deb3',
        'white':'#ffffff',
        'whitesmoke':'#f5f5f5',
        'yellow':'#ffff00',
        'yellowgreen':'#9acd32'
    };
    
    $.fn.flippy=function(opts){
        if(!_Active){
            opts=$.extend({
                active_class:"flippy-active",
                step_ang:10,
                refresh_rate:15,
                duration:300,
                depth:0.12,
                color_target:"white",
                light:60,
                content:"",
                direction:"LEFT",
                onStart:function(){},
                onMidway:function(){},
                onFinish:function(){}
            },opts);
        _Active_class="flippy-active";
        _Active=(_Active)?_Active:'';
        _Ang=0;
        _Step_ang=(opts.refresh_rate/opts.duration)*200;
        _Refresh_rate=opts.refresh_rate;
        _Depth=opts.depth;
        _W='';
        _H='';
        _nW='';
        _nH='';
        _CenterX=(_CenterX!='')?_CenterX:'';
        _CenterY=(_CenterY!='')?_CenterY:'';
        _Color=(_Color!='')?_Color:'';
        _Color_target_is_rgba=(opts.color_target.substr(0,5)=="rgba(");
        _Color_target_alpha=(_Color_target_is_rgba)?eval(opts.color_target.substr(3,opts.color_target.length-4).split(',')[3]):1;
        _Color_target=convertColor(opts.color_target);
        _Direction=opts.direction;
        _Light=opts.light;
        _Content=opts.content;
        _Before=opts.onStart;
        _Midway=opts.onMidway;
        _After=opts.onFinish;
        _isIE=(navigator.appName=="Microsoft Internet Explorer");
        _isIE9orHigher=!(navigator.appVersion in new Array("6.0","7.0","8.0"));
        _Container=null;
        var _i=1;
        return this.each(function(){
            _Container=$this=$(this);
            _nW=$this.width();
            _nH=$this.height();
            _W=$this.outerWidth();
            _H=$this.outerHeight();
            _Active=true;
            _Before();
            _Content=(typeof _Content=="object")?_Content.html():_Content;
            _Color=$this.css("background-color");
            _Color_alpha=(_Color.substr(0,5)=="rgba(")?eval(_Color.substr(3,_Color.length-4).split(',')[3]):1;
            _Color=convertColor(_Color);
            $this.empty().data("color",$this.css("background-color")).css({
                "opacity":_Color_alpha,
                "background":"none",
                "position":"relative",
                "overflow":"visible"
            });
            switch(_Direction){
                case"TOP":
                    _CenterX=(Math.sin(Math.PI/2)*_nW*_Depth);
                    _CenterY=_H/2;
                    var cv_pattern='<canvas id="flippy" width="'+(_W+(2*_CenterX))+'" height="'+_H+'"></canvas>';
                    new_flippy(cv_pattern);
                    $this.find("#flippy").css({
                    "position":"absolute",
                    "top":"0",
                    "left":"-"+_CenterX+"px"
                    });
                break;
                case"BOTTOM":
                    _CenterX=(Math.sin(Math.PI/2)*_nW*_Depth);
                    _CenterY=_H/2;
                    var cv_pattern='<canvas id="flippy" width="'+(_W+(2*_CenterX))+'" height="'+_H+'"></canvas>';
                    new_flippy(cv_pattern);
                    $this.find("#flippy").css({
                    "position":"absolute",
                    "top":"0",
                    "left":"-"+_CenterX+"px"
                    });
                break;
                case"LEFT":
                    _CenterY=(Math.sin(Math.PI/2)*_nH*_Depth);
                    _CenterX=_W/2;
                    var cv_pattern='<canvas id="flippy" width="'+_W+'" height="'+(_H+(2*_CenterY))+'"></canvas>';
                    new_flippy(cv_pattern);
                    $this.find("#flippy").css({
                    "position":"absolute",
                    "top":"-"+_CenterY+"px",
                    "left":"0"
                });
                break;
                case"RIGHT":
                    _CenterY=(Math.sin(Math.PI/2)*_nH*_Depth);
                    _CenterX=_W/2;
                    var cv_pattern='<canvas id="flippy" width="'+_W+'" height="'+(_H+(2*_CenterY))+'"></canvas>';
                    new_flippy(cv_pattern);
                    $this.find("#flippy").css({
                    "position":"absolute",
                    "top":"-"+_CenterY+"px",
                    "left":"0"
                });
                break;
            }
            drawFlippy($(this));
        });
    }
}
function new_flippy(cv_pattern){
    if(_isIE&&!_isIE9orHigher){
        if($this.attr('id')==""){
            $this.attr("id","flippy_container");
        }
        var $that=document.getElementById($this.attr('id'));
        var cv=document.createElement(cv_pattern);
        $that.appendChild(cv);
    }else{
        $this.append(cv_pattern);
    }
}
function drawFlippy(){
    _Ang+=_Step_ang;
    if(_Ang>90&&_Ang<=(90+_Step_ang)){
        _Midway();
        _Container.css({
            "opacity":_Color_target_alpha
        });
    }
    _Ang=(_Ang>(180+_Step_ang))?_Ang-(180+_Step_ang):_Ang;
    var PI=Math.PI
    var rad=(_Ang/180)*PI;
    var canvas=document.getElementById("flippy");
    if(_isIE&&!_isIE9orHigher){
        G_vmlCanvasManager.initElement(canvas);
    }
    var ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,_W+(2*_CenterX),_H+(2*_CenterY));
    ctx.beginPath();
    var deltaH=Math.sin(rad)*_H*_Depth;
    var deltaW=Math.sin(rad)*_W*_Depth;
    switch(_Direction){
        case"LEFT":
            var X=Math.cos(rad)*(_W/2);
            ctx.fillStyle=(_Ang>90)?changeColor(_Color_target,Math.floor(Math.sin(rad)*_Light)):changeColor(_Color,-Math.floor(Math.sin(rad)*_Light));
            ctx.moveTo(_CenterX-X,_CenterY+deltaH);
            ctx.lineTo(_CenterX+X,_CenterY-deltaH);
            ctx.lineTo(_CenterX+X,_CenterY+_H+deltaH);
            ctx.lineTo(_CenterX-X,_CenterY+_H-deltaH);
            ctx.lineTo(_CenterX-X,_CenterY);
            ctx.fill();
            break;
        case"RIGHT":
            var X=Math.cos(rad)*(_W/2);
            ctx.fillStyle=(_Ang>90)?changeColor(_Color_target,-Math.floor(Math.sin(rad)*_Light)):changeColor(_Color,Math.floor(Math.sin(rad)*_Light));
            ctx.moveTo(_CenterX+X,_CenterY+deltaH);
            ctx.lineTo(_CenterX-X,_CenterY-deltaH);
            ctx.lineTo(_CenterX-X,_CenterY+_H+deltaH);
            ctx.lineTo(_CenterX+X,_CenterY+_H-deltaH);
            ctx.lineTo(_CenterX+X,_CenterY);
            ctx.fill();
            break;
        case"TOP":
            var Y=Math.cos(rad)*(_H/2);
            ctx.fillStyle=(_Ang>90)?changeColor(_Color_target,-Math.floor(Math.sin(rad)*_Light)):changeColor(_Color,Math.floor(Math.sin(rad)*_Light));
            ctx.moveTo(_CenterX+deltaW,_CenterY-Y);
            ctx.lineTo(_CenterX-deltaW,_CenterY+Y);
            ctx.lineTo(_CenterX+_W+deltaW,_CenterY+Y);
            ctx.lineTo(_CenterX+_W-deltaW,_CenterY-Y);
            ctx.lineTo(_CenterX,_CenterY-Y);
            ctx.fill();
            break;
        case"BOTTOM":
            var Y=Math.cos(rad)*(_H/2);
            ctx.fillStyle=(_Ang>90)?changeColor(_Color_target,Math.floor(Math.sin(rad)*_Light)):changeColor(_Color,-Math.floor(Math.sin(rad)*_Light));
            ctx.moveTo(_CenterX+deltaW,_CenterY+Y);
            ctx.lineTo(_CenterX-deltaW,_CenterY-Y);
            ctx.lineTo(_CenterX+_W+deltaW,_CenterY-Y);
            ctx.lineTo(_CenterX+_W-deltaW,_CenterY+Y);
            ctx.lineTo(_CenterX,_CenterY+Y);
            ctx.fill();
            break;
    }
    if(_Ang<180){
        setTimeout(drawFlippy,_Refresh_rate);
    }else{
        _Active=null;
        $this.css({
            "background":_Color_target
        }).append(_Content).find("#flippy").remove();
        if($this.attr("id")=="flippy_container"){
            $this.attr("id","");
        }
        _After();
    }
}
function convertColor(thecolor){
    try{
        thecolor=(eval('_ColorsRef.'+thecolor)!=null)?eval('_ColorsRef.'+thecolor):thecolor;
    }catch(err){}
    if(thecolor.substr(0,4)=="rgb("){
        thecolor="#"
        +toHex(eval(thecolor.substr(4,thecolor.length).split(',')[0]))
        +toHex(eval(thecolor.substr(3,thecolor.length).split(',')[1]))
        +toHex(eval(thecolor.substr(3,thecolor.length-4).split(',')[2]))
        }
    if(thecolor.substr(0,5)=="rgba("){
        thecolor="#"
        +toHex(eval(thecolor.substr(5,thecolor.length).split(',')[0]))
        +toHex(eval(thecolor.substr(3,thecolor.length).split(',')[1]))
        +toHex(eval(thecolor.substr(3,thecolor.length-4).split(',')[2]))
        }
    return thecolor;
}
function toDec(hex){
    dec=parseInt(hex,16);
    return dec;
}
function toHex(dec){
    var modulos=new Array();
    while(Math.floor(dec)>16){
        modulos.push(dec%16);
        dec=Math.floor(dec/16);
    }
    var Hex;
    switch(dec){
        case 10:
            Hex="A";
            break;
        case 11:
            Hex="B";
            break;
        case 12:
            Hex="C";
            break;
        case 13:
            Hex="D";
            break;
        case 14:
            Hex="E";
            break;
        case 15:
            Hex="F";
            break;
        default:
            Hex=""+dec;
            break;
    }
    for(i=modulos.length-1;i>=0;i--){
        switch(modulos[i]){
            case 10:
                Hex+="A";
                break;
            case 11:
                Hex+="B";
                break;
            case 12:
                Hex+="C";
                break;
            case 13:
                Hex+="D";
                break;
            case 14:
                Hex+="E";
                break;
            case 15:
                Hex+="F";
                break;
            default:
                Hex+=""+modulos[i];
                break;
        }
    }
if(Hex.length==1){
    return"0"+Hex;
}else{
    return Hex;
}
}
function changeColor(colorHex,step){
    var redHex=colorHex.substr(1,2);
    var greenHex=colorHex.substr(3,2);
    var blueHex=colorHex.substr(5,2);
    var redDec=(toDec(redHex)+step>255)?255:toDec(redHex)+step;
    var greenDec=(toDec(greenHex)+step>255)?255:toDec(greenHex)+step;
    var blueDec=(toDec(blueHex)+step>255)?255:toDec(blueHex)+step;
    redHex=(redDec<=0)?"00":toHex(redDec);
    greenHex=(greenDec<=0)?"00":toHex(greenDec);
    blueHex=(blueDec<=0)?"00":toHex(blueDec);
    return"#"+redHex+greenHex+blueHex;
}
})(jQuery);



DTReveal=(function($){
    var _self;
    var _cache_time;
    var _fallback_effect;
    var _options;
    var _config;
    return{
        init:function(mem_id,options){
            _self=this;
            _cache_time=0;
            _fallback_effect=false;
            _options=$.extend({
                effect:'flip_replace',
                delay:5000,
                duration:5000,
                animate_time:3000,
                image_urls:[],
                click_url:'',
                tiles_suppress:[],
                tiles_keep:[],
                timer_color:'white',
                effect_options:{}
            },options);
        switch(mem_id+' '+_options.effect){
            case('homepage flip_replace'):
                _config={
                class_name:'dtrvl-hpfr',
                tile_count:6,
                mem_element:'#mem',
                target_element:'#page > .bb-wrap'
            };
            
            _options.effect_options.direction='BOTTOM';
            break;
            case('homepage flip_overlay'):
                _config={
                class_name:'dtrvl-hpfo',
                tile_count:3,
                mem_element:'#mem',
                target_element:'#page > .bb-wrap'
            };
            
            _options.effect_options.direction='LEFT';
            break;
            case('category flip_replace'):
                _config={
                class_name:'dtrvl-cfr',
                tile_count:4,
                mem_element:'#mem',
                target_element:'#primary-wrap'
            };
            
            _options.effect_options.direction='BOTTOM';
            break;
            case('category flip_overlay'):
                _config={
                class_name:'dtrvl-cfo',
                tile_count:3,
                mem_element:'#mem',
                target_element:'#primary-wrap'
            };
            
            _options.effect_options.direction='LEFT';
            break;
            default:
                return;
        }
        if(_options.effect=='flip_replace'||_options.effect=='flip_overlay'){
            if($.browser.msie&&parseInt($.browser.version,10)<=8)
                _fallback_effect=true;
            if(!$.fn.flippy)
                _fallback_effect=true;
        }
        $('body').on('dtrvl_images_cached',function(){
            $(document).ready(function(){
                if($(_config.mem_element).length!=1)
                    return;
                _options.delay=Math.max(0,_options.delay-_cache_time);
                setTimeout(function(){
                    $('body').addClass('dtrvl');
                    var container=$('<div id="dtrvl" class="'+_config.class_name+'"></div>');
                    container.prependTo(_config.target_element);
                    for(var i=1;i<=_config.tile_count;i++){
                        if($.inArray(i,_options.tiles_suppress)==-1)
                            container.append('<div class="dtrvl-tile dtrvl-tile-'+i+'"><div class="dtrvl-wrap"></div></div>');
                    }
                    if(_options.click_url){
                        $('.dtrvl-tile').click(function(){
                            var win=window.open(_options.click_url,'_blank');
                            win.focus();
                        }).css('cursor','pointer');
                    }
                    var destroy_this=container;
                    if(_options.tiles_keep.length>0){
                        var destroy_list='';
                        for(var i=1;i<=_config.tile_count;i++){
                            if($.inArray(i,options.tiles_keep)==-1)
                                destroy_list+='.dtrvl-tile-'+i+', ';
                        }
                        destroy_this=$(destroy_list+' .dtrvl-nothing');
                    }
                    function recursive_do_tile(this_tile_num){
                        if(this_tile_num>=_config.tile_count+1){
                            container.find('.dtrvl-tile-border').fadeOut('slow');
                            var duration_seconds=Math.round(_options.duration/1000);
                            var elapsed_seconds=0;
                            var timer_element=$('<div class="dtrvl-timer">Close <span>'+duration_seconds+'</span></div>');
                            var timer_count=timer_element.find('span');
                            if(_options.timer_color!='white'){
                                timer_element.css('color',_options.timer_color);
                                timer_count.css('border-color',_options.timer_color);
                            }
                            timer_element.prependTo(container);
                            var interval=setInterval(function(){
                                elapsed_seconds++;
                                if(elapsed_seconds==duration_seconds){
                                    clearInterval(interval);
                                    timer_element.remove();
                                    destroy_this.fadeOut(550,function(){
                                        destroy_this.remove();
                                    });
                                }
                                timer_count.text(duration_seconds-elapsed_seconds);
                            },1000);
                            timer_element.click(function(){
                                clearInterval(interval);
                                timer_element.remove();
                                destroy_this.fadeOut(550,function(){
                                    destroy_this.remove();
                                });
                            });
                            return;
                        }
                        var this_tile=$('.dtrvl-tile-'+this_tile_num);
                        if(this_tile.length!=1){
                            recursive_do_tile(this_tile_num+1);
                            return;
                        }
                        var image_url=_options.image_urls.shift();
                        if(!_fallback_effect){
                            _options.effect_options=$.extend({
                                direction:'BOTTOM',
                                depth:0.05,
                                light:80,
                                color_target:'black'
                            },_options.effect_options);
                            this_tile.fadeIn(250,function(){
                                var tile_animate_time=Math.round(_options.animate_time/(_config.tile_count-_options.tiles_suppress.length));
                                this_tile.find('.dtrvl-wrap').flippy({
                                    content:'<div class="dtrvl-tile-content"><div class="dtrvl-tile-border"></div></div>',
                                    direction:_options.effect_options.direction,
                                    duration:tile_animate_time-250-250,
                                    depth:_options.effect_options.depth,
                                    light:_options.effect_options.light,
                                    color_target:_options.effect_options.color_target,
                                    onFinish:function(){
                                        this_tile.find('.dtrvl-tile-content').css('background-image','url('+image_url+')').fadeIn(250);
                                        this_tile.addClass('dtrvl-done');
                                        recursive_do_tile(this_tile_num+1);
                                    }
                                });
                            });
                    }
                    else{
                        this_tile.html('<div class="dtrvl-tile-content"><div class="dtrvl-tile-border"></div></div>');
                        this_tile.find('.dtrvl-tile-content').css('background-image','url('+image_url+')').show();
                        this_tile.fadeIn(450,function(){
                            this_tile.addClass('dtrvl-done');
                            recursive_do_tile(this_tile_num+1);
                        });
                    }
                }
                recursive_do_tile(1);
            },_options.delay);
        });
    });
_self.cache_images();
    },
    cache_images:function(){
        var start_time=new Date().getTime();
        var container=$('<div class="dtrvl-precache"></div>');
        container.prependTo('body');
        for(var i=0;i<_options.image_urls.length;i++){
            var image=$('<img />');
            image.attr({
                'src':_options.image_urls[i],
                'height':1,
                'width':1
            });
            container.append(image);
        }
        if($.fn.imagesLoaded){
            container.imagesLoaded(function(){
                _cache_time=new Date().getTime()-start_time;
                $('body').trigger('dtrvl_images_cached');
            });
        }
        else{
            $('body').trigger('dtrvl_images_cached');
        }
    }
};

}(jQuery));
;



try{
    (function(){
        var OO={};
        
        OO.playerParams={
            "vast_proxy_url":"http://player.ooyala.com/adinsertion/vast_proxy",
            "auth_ssl_server":"https://player.ooyala.com/sas",
            "backlot_api_server":"cdn-api.ooyala.com",
            "branding":{
                "text_color":16777215,
                "accent_color":38362
            },
            "attributes":{},
            "platform":"flash",
            "analytics_server":"http://player.ooyala.com",
            "hastur_qos_percentage":1,
            "api_ssl_server":"https://player.ooyala.com",
            "analytics_ssl_server":"https://player.ooyala.com",
            "flash_performance":false,
            "module_params":{
                "modules":{
                    "discovery-ui":{
                        "metadata":{
                            "countdownSeconds":"3",
                            "enableToasterPause":"true"
                        },
                        "type":"discovery-ui",
                        "mjolnir_plugin":"discovery_toaster.js"
                    }
                },
            "base":{}
    },
    "api_server":"http://player.ooyala.com",
    "pcode":"A1ODY6azb9FqWlmbD6c72TU3PK_H",
    "auth_server":"http://player.ooyala.com/sas",
    "playerBrandingId":"MDVhOGE1MjM4ZjU2NzE0ZDlkN2MyMTlj",
    "request_url":"http://stitching.ooyala.com/v3/MDVhOGE1MjM4ZjU2NzE0ZDlkN2MyMTlj",
    "environment":"prod_us_east_1",
    "use_asp_flash_route":false,
    "v3_version":"6d889481c749326fbe2976bb7ff77d683b24fb72",
    "v3_version_source":"default"
    };
    
    OO.publicApi=OO.publicApi||{},OO.playerParams=OO.playerParams||{},OO.log=function(){
        typeof window.console!="undefined"&&typeof window.console.log=="function"&&OO.playerParams.debug&&window.console.log.apply(window.console,arguments)
        },window.JSON||(window.JSON={
        stringify:function(e){
            return"<object>"
            },
        __end_marker:!0
        }),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){
        var n,r=this.length;
        for(n=t||0;n<r;n++)if(this[n]===e)return n;return-1
        });
    var namespace=OO.playerParams.namespace||"OO";
    if(window[namespace]&&window[namespace].Player)throw OO.log("PlayerV3 is loaded already!!!"),window[namespace].REV!=OO.publicApi.REV&&OO.log("there is a different VERSION loaded:",window[namespace].REV,OO.publicApi.REV),"PlayerV3 already defined!!";
        window[namespace]&&window[namespace].__static?OO.publicApi.__static=window[namespace].__static:OO.publicApi.__static={
        readyList:[],
        docReady:!1,
        apiReady:!1
        },window[namespace]=OO.publicApi,window[namespace].__internal=OO,OO.isReady=function(){
        return OO.publicApi.__static.apiReady&&OO.publicApi.__static.docReady
        },OO.tryCallReady=function(){
        if(!OO.isReady())return;
        while(OO.publicApi.__static.readyList.length>0){
            var e=OO.publicApi.__static.readyList.pop();
            if(typeof e=="function")try{
                e(OO.publicApi)
                }catch(t){
                OO.log("Error executing ready function",t,t.stack)
                }
            }
            return
    },OO.publicApi.ready=function(e){
        OO.publicApi.__static.readyList.unshift(e),OO.tryCallReady()
        };
        
    var curOO=OO;
    OO.publicApi.plugin=function(e,t){
        curOO.isReady()?(OO.log("plugin is ready to register",curOO,e),curOO.plugin(e,t)):(OO.log("plugin",e),OO.publicApi.__static.readyList.push(function(n){
            n.plugin(e,t)
            }))
        };
    (function(){
        function C(e,t,n){
            if(e===t)return e!==0||1/e==1/t;
            if(e==null||t==null)return e===t;
            e._chain&&(e=e._wrapped),t._chain&&(t=t._wrapped);
            if(e.isEqual&&S.isFunction(e.isEqual))return e.isEqual(t);
            if(t.isEqual&&S.isFunction(t.isEqual))return t.isEqual(e);
            var r=a.call(e);
            if(r!=a.call(t))return!1;
            switch(r){
                case"[object String]":
                    return e==String(t);
                case"[object Number]":
                    return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;
                case"[object Date]":case"[object Boolean]":
                    return+e==+t;
                case"[object RegExp]":
                    return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase
                    }
                    if(typeof e!="object"||typeof t!="object")return!1;
            var i=n.length;
            while(i--)if(n[i]==e)return!0;
            n.push(e);
            var s=0,o=!0;
            if(r=="[object Array]"){
                s=e.length,o=s==t.length;
                if(o)while(s--)if(!(o=s in e==s in t&&C(e[s],t[s],n)))break
            }else{
                if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;
                for(var u in e)if(S.has(e,u)){
                    s++;
                    if(!(o=S.has(t,u)&&C(e[u],t[u],n)))break
                }
                if(o){
                    for(u in t)if(S.has(t,u)&&!(s--))break;o=!s
                    }
                }
            return n.pop(),o
        }
        var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.slice,u=r.unshift,a=i.toString,f=i.hasOwnProperty,l=r.forEach,c=r.map,h=r.reduce,p=r.reduceRight,d=r.filter,v=r.every,m=r.some,g=r.indexOf,y=r.lastIndexOf,b=Array.isArray,w=Object.keys,E=s.bind,S=function(e){
        return new P(e)
        };
        
    typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=S),exports._=S):e._=S,S.VERSION="1.3.3";
        var x=S.each=S.forEach=function(e,t,r){
        if(e==null)return;
        if(l&&e.forEach===l)e.forEach(t,r);
        else if(e.length===+e.length){
            for(var i=0,s=e.length;i<s;i++)if(i in e&&t.call(r,e[i],i,e)===n)return
            }else for(var o in e)if(S.has(e,o)&&t.call(r,e[o],o,e)===n)return
            };
            
    S.map=S.collect=function(e,t,n){
        var r=[];
        return e==null?r:c&&e.map===c?e.map(t,n):(x(e,function(e,i,s){
            r[r.length]=t.call(n,e,i,s)
            }),e.length===+e.length&&(r.length=e.length),r)
        },S.reduce=S.foldl=S.inject=function(e,t,n,r){
        var i=arguments.length>2;
        e==null&&(e=[]);
        if(h&&e.reduce===h)return r&&(t=S.bind(t,r)),i?e.reduce(t,n):e.reduce(t);
        x(e,function(e,s,o){
            i?n=t.call(r,n,e,s,o):(n=e,i=!0)
            });
        if(!i)throw new TypeError("Reduce of empty array with no initial value");
        return n
        },S.reduceRight=S.foldr=function(e,t,n,r){
        var i=arguments.length>2;
        e==null&&(e=[]);
        if(p&&e.reduceRight===p)return r&&(t=S.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);
        var s=S.toArray(e).reverse();
        return r&&!i&&(t=S.bind(t,r)),i?S.reduce(s,t,n,r):S.reduce(s,t)
        },S.find=S.detect=function(e,t,n){
        var r;
        return T(e,function(e,i,s){
            if(t.call(n,e,i,s))return r=e,!0
                }),r
        },S.filter=S.select=function(e,t,n){
        var r=[];
        return e==null?r:d&&e.filter===d?e.filter(t,n):(x(e,function(e,i,s){
            t.call(n,e,i,s)&&(r[r.length]=e)
            }),r)
        },S.reject=function(e,t,n){
        var r=[];
        return e==null?r:(x(e,function(e,i,s){
            t.call(n,e,i,s)||(r[r.length]=e)
            }),r)
        },S.every=S.all=function(e,t,r){
        var i=!0;
        return e==null?i:v&&e.every===v?e.every(t,r):(x(e,function(e,s,o){
            if(!(i=i&&t.call(r,e,s,o)))return n
                }),!!i)
        };
        
    var T=S.some=S.any=function(e,t,r){
        t||(t=S.identity);
        var i=!1;
        return e==null?i:m&&e.some===m?e.some(t,r):(x(e,function(e,s,o){
            if(i||(i=t.call(r,e,s,o)))return n
                }),!!i)
        };
        
    S.include=S.contains=function(e,t){
        var n=!1;
        return e==null?n:g&&e.indexOf===g?e.indexOf(t)!=-1:(n=T(e,function(e){
            return e===t
            }),n)
        },S.invoke=function(e,t){
        var n=o.call(arguments,2);
        return S.map(e,function(e){
            return(S.isFunction(t)?t||e:e[t]).apply(e,n)
            })
        },S.pluck=function(e,t){
        return S.map(e,function(e){
            return e[t]
            })
        },S.max=function(e,t,n){
        if(!t&&S.isArray(e)&&e[0]===+e[0])return Math.max.apply(Math,e);
        if(!t&&S.isEmpty(e))return-Infinity;
        var r={
            computed:-Infinity
            };
            
        return x(e,function(e,i,s){
            var o=t?t.call(n,e,i,s):e;
            o>=r.computed&&(r={
                value:e,
                computed:o
            })
            }),r.value
        },S.min=function(e,t,n){
        if(!t&&S.isArray(e)&&e[0]===+e[0])return Math.min.apply(Math,e);
        if(!t&&S.isEmpty(e))return Infinity;
        var r={
            computed:Infinity
        };
        
        return x(e,function(e,i,s){
            var o=t?t.call(n,e,i,s):e;
            o<r.computed&&(r={
                value:e,
                computed:o
            })
            }),r.value
        },S.shuffle=function(e){
        var t=[],n;
        return x(e,function(e,r,i){
            n=Math.floor(Math.random()*(r+1)),t[r]=t[n],t[n]=e
            }),t
        },S.sortBy=function(e,t,n){
        var r=S.isFunction(t)?t:function(e){
            return e[t]
            };
            
        return S.pluck(S.map(e,function(e,t,i){
            return{
                value:e,
                criteria:r.call(n,e,t,i)
                }
            }).sort(function(e,t){
            var n=e.criteria,r=t.criteria;
            return n===void 0?1:r===void 0?-1:n<r?-1:n>r?1:0
            }),"value")
    },S.groupBy=function(e,t){
        var n={},r=S.isFunction(t)?t:function(e){
            return e[t]
            };
            
        return x(e,function(e,t){
            var i=r(e,t);
            (n[i]||(n[i]=[])).push(e)
            }),n
        },S.sortedIndex=function(e,t,n){
        n||(n=S.identity);
        var r=0,i=e.length;
        while(r<i){
            var s=r+i>>1;
            n(e[s])<n(t)?r=s+1:i=s
            }
            return r
        },S.toArray=function(e){
        return e?S.isArray(e)?o.call(e):S.isArguments(e)?o.call(e):e.toArray&&S.isFunction(e.toArray)?e.toArray():S.values(e):[]
        },S.size=function(e){
        return S.isArray(e)?e.length:S.keys(e).length
        },S.first=S.head=S.take=function(e,t,n){
        return t!=null&&!n?o.call(e,0,t):e[0]
        },S.initial=function(e,t,n){
        return o.call(e,0,e.length-(t==null||n?1:t))
        },S.last=function(e,t,n){
        return t!=null&&!n?o.call(e,Math.max(e.length-t,0)):e[e.length-1]
        },S.rest=S.tail=function(e,t,n){
        return o.call(e,t==null||n?1:t)
        },S.compact=function(e){
        return S.filter(e,function(e){
            return!!e
            })
        },S.flatten=function(e,t){
        return S.reduce(e,function(e,n){
            return S.isArray(n)?e.concat(t?n:S.flatten(n)):(e[e.length]=n,e)
            },[])
        },S.without=function(e){
        return S.difference(e,o.call(arguments,1))
        },S.uniq=S.unique=function(e,t,n){
        var r=n?S.map(e,n):e,i=[];
        return e.length<3&&(t=!0),S.reduce(r,function(n,r,s){
            if(t?S.last(n)!==r||!n.length:!S.include(n,r))n.push(r),i.push(e[s]);
            return n
            },[]),i
        },S.union=function(){
        return S.uniq(S.flatten(arguments,!0))
        },S.intersection=S.intersect=function(e){
        var t=o.call(arguments,1);
        return S.filter(S.uniq(e),function(e){
            return S.every(t,function(t){
                return S.indexOf(t,e)>=0
                })
            })
        },S.difference=function(e){
        var t=S.flatten(o.call(arguments,1),!0);
        return S.filter(e,function(e){
            return!S.include(t,e)
            })
        },S.zip=function(){
        var e=o.call(arguments),t=S.max(S.pluck(e,"length")),n=new Array(t);
        for(var r=0;r<t;r++)n[r]=S.pluck(e,""+r);
        return n
        },S.indexOf=function(e,t,n){
        if(e==null)return-1;
        var r,i;
        if(n)return r=S.sortedIndex(e,t),e[r]===t?r:-1;
        if(g&&e.indexOf===g)return e.indexOf(t);
        for(r=0,i=e.length;r<i;r++)if(r in e&&e[r]===t)return r;return-1
        },S.lastIndexOf=function(e,t){
        if(e==null)return-1;
        if(y&&e.lastIndexOf===y)return e.lastIndexOf(t);
        var n=e.length;
        while(n--)if(n in e&&e[n]===t)return n;
        return-1
        },S.range=function(e,t,n){
        arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;
        var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);
        while(i<r)s[i++]=e,e+=n;
        return s
        };
        
    var N=function(){};
    
    S.bind=function(t,n){
        var r,i;
        if(t.bind===E&&E)return E.apply(t,o.call(arguments,1));
        if(!S.isFunction(t))throw new TypeError;
        return i=o.call(arguments,2),r=function(){
            if(this instanceof r){
                N.prototype=t.prototype;
                var e=new N,s=t.apply(e,i.concat(o.call(arguments)));
                return Object(s)===s?s:e
                }
                return t.apply(n,i.concat(o.call(arguments)))
            }
        },S.bindAll=function(e){
    var t=o.call(arguments,1);
    return t.length==0&&(t=S.functions(e)),x(t,function(t){
        e[t]=S.bind(e[t],e)
        }),e
    },S.memoize=function(e,t){
    var n={};
    
    return t||(t=S.identity),function(){
        var r=t.apply(this,arguments);
        return S.has(n,r)?n[r]:n[r]=e.apply(this,arguments)
        }
    },S.delay=function(e,t){
    var n=o.call(arguments,2);
    return setTimeout(function(){
        return e.apply(null,n)
        },t)
    },S.defer=function(e){
    return S.delay.apply(S,[e,1].concat(o.call(arguments,1)))
    },S.throttle=function(e,t){
    var n,r,i,s,o,u,a=S.debounce(function(){
        o=s=!1
        },t);
    return function(){
        n=this,r=arguments;
        var f=function(){
            i=null,o&&e.apply(n,r),a()
            };
            
        return i||(i=setTimeout(f,t)),s?o=!0:u=e.apply(n,r),a(),s=!0,u
        }
    },S.debounce=function(e,t,n){
    var r;
    return function(){
        var i=this,s=arguments,o=function(){
            r=null,n||e.apply(i,s)
            };
            
        n&&!r&&e.apply(i,s),clearTimeout(r),r=setTimeout(o,t)
        }
    },S.once=function(e){
    var t=!1,n;
    return function(){
        return t?n:(t=!0,n=e.apply(this,arguments))
        }
    },S.wrap=function(e,t){
    return function(){
        var n=[e].concat(o.call(arguments,0));
        return t.apply(this,n)
        }
    },S.compose=function(){
    var e=arguments;
    return function(){
        var t=arguments;
        for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];
        return t[0]
        }
    },S.after=function(e,t){
    return e<=0?t():function(){
        if(--e<1)return t.apply(this,arguments)
            }
        },S.keys=w||function(e){
    if(e!==Object(e))throw new TypeError("Invalid object");
    var t=[];
    for(var n in e)S.has(e,n)&&(t[t.length]=n);return t
    },S.values=function(e){
    return S.map(e,S.identity)
    },S.functions=S.methods=function(e){
    var t=[];
    for(var n in e)S.isFunction(e[n])&&t.push(n);return t.sort()
    },S.extend=function(e){
    return x(o.call(arguments,1),function(t){
        for(var n in t)e[n]=t[n]
            }),e
    },S.pick=function(e){
    var t={};
    
    return x(S.flatten(o.call(arguments,1)),function(n){
        n in e&&(t[n]=e[n])
        }),t
    },S.defaults=function(e){
    return x(o.call(arguments,1),function(t){
        for(var n in t)e[n]==null&&(e[n]=t[n])
            }),e
    },S.clone=function(e){
    return S.isObject(e)?S.isArray(e)?e.slice():S.extend({},e):e
    },S.tap=function(e,t){
    return t(e),e
    },S.isEqual=function(e,t){
    return C(e,t,[])
    },S.isEmpty=function(e){
    if(e==null)return!0;
    if(S.isArray(e)||S.isString(e))return e.length===0;
    for(var t in e)if(S.has(e,t))return!1;return!0
    },S.isElement=function(e){
    return!!e&&e.nodeType==1
    },S.isArray=b||function(e){
    return a.call(e)=="[object Array]"
    },S.isObject=function(e){
    return e===Object(e)
    },S.isArguments=function(e){
    return a.call(e)=="[object Arguments]"
    },S.isArguments(arguments)||(S.isArguments=function(e){
    return!!e&&!!S.has(e,"callee")
    }),S.isFunction=function(e){
    return a.call(e)=="[object Function]"
    },S.isString=function(e){
    return a.call(e)=="[object String]"
    },S.isNumber=function(e){
    return a.call(e)=="[object Number]"
    },S.isFinite=function(e){
    return S.isNumber(e)&&isFinite(e)
    },S.isNaN=function(e){
    return e!==e
    },S.isBoolean=function(e){
    return e===!0||e===!1||a.call(e)=="[object Boolean]"
    },S.isDate=function(e){
    return a.call(e)=="[object Date]"
    },S.isRegExp=function(e){
    return a.call(e)=="[object RegExp]"
    },S.isNull=function(e){
    return e===null
    },S.isUndefined=function(e){
    return e===void 0
    },S.has=function(e,t){
    return typeof e.hasOwnProperty=="function"?e.hasOwnProperty(t):typeof e[t]!==undefined
    },S.noConflict=function(){
    return e._=t,this
    },S.identity=function(e){
    return e
    },S.times=function(e,t,n){
    for(var r=0;r<e;r++)t.call(n,r)
        },S.escape=function(e){
    return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")
    },S.result=function(e,t){
    if(e==null)return null;
    var n=e[t];
    return S.isFunction(n)?n.call(e):n
    },S.mixin=function(e){
    x(S.functions(e),function(t){
        B(t,S[t]=e[t])
        })
    };
    
var k=0;
S.uniqueId=function(e){
    var t=k++;
    return e?e+t:t
    },S.templateSettings={
    evaluate:/<%([\s\S]+?)%>/g,
    interpolate:/<%=([\s\S]+?)%>/g,
    escape:/<%-([\s\S]+?)%>/g
};

var L=/.^/,A={
    "\\":"\\",
    "'":"'",
    r:"\r",
    n:"\n",
    t:" ",
    u2028:"\u2028",
    u2029:"\u2029"
};

for(var O in A)A[A[O]]=O;var M=/\\|'|\r|\n|\t|\u2028|\u2029/g,_=/\\(\\|'|r|n|t|u2028|u2029)/g,D=function(e){
    return e.replace(_,function(e,t){
        return A[t]
        })
    };
    
S.template=function(e,t,n){
    n=S.defaults(n||{},S.templateSettings);
    var r="__p+='"+e.replace(M,function(e){
        return"\\"+A[e]
        }).replace(n.escape||L,function(e,t){
        return"'+\n_.escape("+D(t)+")+\n'"
        }).replace(n.interpolate||L,function(e,t){
        return"'+\n("+D(t)+")+\n'"
        }).replace(n.evaluate||L,function(e,t){
        return"';\n"+D(t)+"\n;__p+='"
        })+"';\n";
    n.variable||(r="with(obj||{}){\n"+r+"}\n"),r="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+r+"return __p;\n";
    var i=new Function(n.variable||"obj","_",r);
    if(t)return i(t,S);
    var s=function(e){
        return i.call(this,e,S)
        };
        
    return s.source="function("+(n.variable||"obj")+"){\n"+r+"}",s
    },S.chain=function(e){
    return S(e).chain()
    };
    
var P=function(e){
    this._wrapped=e
    };
    
S.prototype=P.prototype;
var H=function(e,t){
    return t?S(e).chain():e
    },B=function(e,t){
    P.prototype[e]=function(){
        var e=o.call(arguments);
        return u.call(e,this._wrapped),H(t.apply(S,e),this._chain)
        }
    };

S.mixin(S),x(["pop","push","reverse","shift","sort","splice","unshift"],function(e){
    var t=r[e];
    P.prototype[e]=function(){
        var n=this._wrapped;
        t.apply(n,arguments);
        var r=n.length;
        return(e=="shift"||e=="splice")&&r===0&&delete n[0],H(n,this._chain)
        }
    }),x(["concat","join","slice"],function(e){
    var t=r[e];
    P.prototype[e]=function(){
        return H(t.apply(this._wrapped,arguments),this._chain)
        }
    }),P.prototype.chain=function(){
    return this._chain=!0,this
    },P.prototype.value=function(){
    return this._wrapped
    }
}).call(this);
/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function(e,t){
    function _(e){
        var t=M[e]={};
        
        return v.each(e.split(y),function(e,n){
            t[n]=!0
            }),t
        }
        function H(e,n,r){
        if(r===t&&e.nodeType===1){
            var i="data-"+n.replace(P,"-$1").toLowerCase();
            r=e.getAttribute(i);
            if(typeof r=="string"){
                try{
                    r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r
                    }catch(s){}
                v.data(e,n,r)
                }else r=t
                }
                return r
        }
        function B(e){
        var t;
        for(t in e){
            if(t==="data"&&v.isEmptyObject(e[t]))continue;
            if(t!=="toJSON")return!1
                }
                return!0
        }
        function et(){
        return!1
        }
        function tt(){
        return!0
        }
        function ut(e){
        return!e||!e.parentNode||e.parentNode.nodeType===11
        }
        function at(e,t){
        do e=e[t];while(e&&e.nodeType!==1);
        return e
        }
        function ft(e,t,n){
        t=t||0;
        if(v.isFunction(t))return v.grep(e,function(e,r){
            var i=!!t.call(e,r,e);
            return i===n
            });
        if(t.nodeType)return v.grep(e,function(e,r){
            return e===t===n
            });
        if(typeof t=="string"){
            var r=v.grep(e,function(e){
                return e.nodeType===1
                });
            if(it.test(t))return v.filter(t,r,!n);
            t=v.filter(t,r)
            }
            return v.grep(e,function(e,r){
            return v.inArray(e,t)>=0===n
            })
        }
        function lt(e){
        var t=ct.split("|"),n=e.createDocumentFragment();
        if(n.createElement)while(t.length)n.createElement(t.pop());
        return n
        }
        function Lt(e,t){
        return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))
        }
        function At(e,t){
        if(t.nodeType!==1||!v.hasData(e))return;
        var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;
        if(u){
            delete o.handle,o.events={};
            
            for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])
                }
                o.data&&(o.data=v.extend({},o.data))
        }
        function Ot(e,t){
        var n;
        if(t.nodeType!==1)return;
        t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)
        }
        function Mt(e){
        return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]
        }
        function _t(e){
        Et.test(e.type)&&(e.defaultChecked=e.checked)
        }
        function Qt(e,t){
        if(t in e)return t;
        var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;
        while(i--){
            t=Jt[i]+n;
            if(t in e)return t
                }
                return r
        }
        function Gt(e,t){
        return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)
        }
        function Yt(e,t){
        var n,r,i=[],s=0,o=e.length;
        for(;s<o;s++){
            n=e[s];
            if(!n.style)continue;
            i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))
            }
            for(s=0;s<o;s++){
            n=e[s];
            if(!n.style)continue;
            if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"
                }
                return e
        }
        function Zt(e,t,n){
        var r=Rt.exec(t);
        return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t
        }
        function en(e,t,n,r){
        var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;
        for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));
        return s
        }
        function tn(e,t,n){
        var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";
        if(r<=0||r==null){
            r=Dt(e,t);
            if(r<0||r==null)r=e.style[t];
            if(Ut.test(r))return r;
            i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0
            }
            return r+en(e,t,n||(s?"border":"content"),i)+"px"
        }
        function nn(e){
        if(Wt[e])return Wt[e];
        var t=v("<"+e+">").appendTo(i.body),n=t.css("display");
        t.remove();
        if(n==="none"||n===""){
            Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{
                frameBorder:0,
                width:0,
                height:0
            }));
            if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();
            t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)
            }
            return Wt[e]=n,n
        }
        function fn(e,t,n,r){
        var i;
        if(v.isArray(t))v.each(t,function(t,i){
            n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)
            });
        else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)
            }
            function Cn(e){
        return function(t,n){
            typeof t!="string"&&(n=t,t="*");
            var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;
            if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)
                }
            }
    function kn(e,n,r,i,s,o){
    s=s||n.dataTypes[0],o=o||{},o[s]=!0;
    var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;
    for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));
    return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u
    }
    function Ln(e,n){
    var r,i,s=v.ajaxSettings.flatOptions||{};
    
    for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)
    }
    function An(e,n,r){
    var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;
    for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));
    if(i)for(s in a)if(a[s]&&a[s].test(i)){
        f.unshift(s);
        break
    }
    if(f[0]in r)o=f[0];
    else{
        for(s in r){
            if(!f[0]||e.converters[s+" "+f[0]]){
                o=s;
                break
            }
            u||(u=s)
            }
            o=o||u
        }
        if(o)return o!==f[0]&&f.unshift(o),r[o]
        }
        function On(e,t){
    var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;
    e.dataFilter&&(t=e.dataFilter(t,e.dataType));
    if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){
        if(u!=="*"&&u!==i){
            n=a[u+" "+i]||a["* "+i];
            if(!n)for(r in a){
                s=r.split(" ");
                if(s[1]===i){
                    n=a[u+" "+s[0]]||a["* "+s[0]];
                    if(n){
                        n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));
                        break
                    }
                }
            }
            if(n!==!0)if(n&&e["throws"])t=n(t);else try{
        t=n(t)
        }catch(l){
        return{
            state:"parsererror",
            error:n?l:"No conversion from "+u+" to "+i
            }
        }
    }
    u=i
}
return{
    state:"success",
    data:t
}
}
function Fn(){
    try{
        return new e.XMLHttpRequest
        }catch(t){}
}
function In(){
    try{
        return new e.ActiveXObject("Microsoft.XMLHTTP")
        }catch(t){}
}
function $n(){
    return setTimeout(function(){
        qn=t
        },0),qn=v.now()
    }
    function Jn(e,t){
    v.each(t,function(t,n){
        var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;
        for(;i<s;i++)if(r[i].call(e,t,n))return
        })
    }
    function Kn(e,t,n){
    var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){
        delete a.elem
        }),a=function(){
        var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;
        for(;s<o;s++)f.tweens[s].run(i);
        return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)
        },f=u.promise({
        elem:e,
        props:v.extend({},t),
        opts:v.extend(!0,{
            specialEasing:{}
        },n),
    originalProperties:t,
    originalOptions:n,
    startTime:qn||$n(),
        duration:n.duration,
        tweens:[],
        createTween:function(t,n,r){
        var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);
        return f.tweens.push(i),i
        },
    stop:function(t){
        var n=0,r=t?f.tweens.length:0;
        for(;n<r;n++)f.tweens[n].run(1);
        return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this
        }
    }),l=f.props;
Qn(l,f.opts.specialEasing);
for(;i<o;i++){
    r=Xn[i].call(f,e,l,f.opts);
    if(r)return r
        }
        return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{
    anim:f,
    queue:f.opts.queue,
    elem:e
})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)
}
function Qn(e,t){
    var n,r,i,s,o;
    for(n in e){
        r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];
        if(o&&"expand"in o){
            s=o.expand(s),delete e[r];
            for(n in s)n in e||(e[n]=s[n],t[n]=i)
                }else t[r]=i
            }
        }
    function Gn(e,t,n){
    var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);
    n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){
        l.unqueued||c()
        }),l.unqueued++,h.always(function(){
        h.always(function(){
            l.unqueued--,v.queue(e,"fx").length||l.empty.fire()
            })
        })),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){
        p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
        }));
    for(r in t){
        s=t[r];
        if(Un.exec(s)){
            delete t[r],a=a||s==="toggle";
            if(s===(g?"hide":"show"))continue;
            m.push(r)
            }
        }
    o=m.length;
if(o){
    u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){
        v(e).hide()
        }),h.done(function(){
        var t;
        v.removeData(e,"fxshow",!0);
        for(t in d)v.style(e,t,d[t])
            });
    for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))
        }
    }
function Yn(e,t,n,r,i){
    return new Yn.prototype.init(e,t,n,r,i)
    }
    function Zn(e,t){
    var n,r={
        height:e
    },i=0;
    t=t?1:0;
    for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;
    return t&&(r.opacity=r.width=e),r
    }
    function tr(e){
    return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1
    }
    var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){
    return new v.fn.init(e,t,n)
    },m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){
    return(t+"").toUpperCase()
    },A=function(){
    i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())
    },O={};

v.fn=v.prototype={
    constructor:v,
    init:function(e,n,r){
        var s,o,u,a;
        if(!e)return this;
        if(e.nodeType)return this.context=this[0]=e,this.length=1,this;
        if(typeof e=="string"){
            e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);
            if(s&&(s[1]||!n)){
                if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);
                o=i.getElementById(s[2]);
                if(o&&o.parentNode){
                    if(o.id!==s[2])return r.find(e);
                    this.length=1,this[0]=o
                    }
                    return this.context=i,this.selector=e,this
                }
                return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)
            }
            return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))
        },
    selector:"",
    jquery:"1.8.3",
    length:0,
    size:function(){
        return this.length
        },
    toArray:function(){
        return l.call(this)
        },
    get:function(e){
        return e==null?this.toArray():e<0?this[this.length+e]:this[e]
        },
    pushStack:function(e,t,n){
        var r=v.merge(this.constructor(),e);
        return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r
        },
    each:function(e,t){
        return v.each(this,e,t)
        },
    ready:function(e){
        return v.ready.promise().done(e),this
        },
    eq:function(e){
        return e=+e,e===-1?this.slice(e):this.slice(e,e+1)
        },
    first:function(){
        return this.eq(0)
        },
    last:function(){
        return this.eq(-1)
        },
    slice:function(){
        return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))
        },
    map:function(e){
        return this.pushStack(v.map(this,function(t,n){
            return e.call(t,n,t)
            }))
        },
    end:function(){
        return this.prevObject||this.constructor(null)
        },
    push:f,
    sort:[].sort,
    splice:[].splice
    },v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){
    var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;
    typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);
    for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){
        r=u[n],i=e[n];
        if(u===i)continue;
        l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)
        }
        return u
    },v.extend({
    noConflict:function(t){
        return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v
        },
    isReady:!1,
    readyWait:1,
    holdReady:function(e){
        e?v.readyWait++:v.ready(!0)
        },
    ready:function(e){
        if(e===!0?--v.readyWait:v.isReady)return;
        if(!i.body)return setTimeout(v.ready,1);
        v.isReady=!0;
        if(e!==!0&&--v.readyWait>0)return;
        r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")
        },
    isFunction:function(e){
        return v.type(e)==="function"
        },
    isArray:Array.isArray||function(e){
        return v.type(e)==="array"
        },
    isWindow:function(e){
        return e!=null&&e==e.window
        },
    isNumeric:function(e){
        return!isNaN(parseFloat(e))&&isFinite(e)
        },
    type:function(e){
        return e==null?String(e):O[h.call(e)]||"object"
        },
    isPlainObject:function(e){
        if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;
        try{
            if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1
                }catch(n){
            return!1
            }
            var r;
        for(r in e);return r===t||p.call(e,r)
        },
    isEmptyObject:function(e){
        var t;
        for(t in e)return!1;return!0
        },
    error:function(e){
        throw new Error(e)
        },
    parseHTML:function(e,t,n){
        var r;
        return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))
        },
    parseJSON:function(t){
        if(!t||typeof t!="string")return null;
        t=v.trim(t);
        if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);
        if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();
        v.error("Invalid JSON: "+t)
        },
    parseXML:function(n){
        var r,i;
        if(!n||typeof n!="string")return null;
        try{
            e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))
            }catch(s){
            r=t
            }
            return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r
        },
    noop:function(){},
    globalEval:function(t){
        t&&g.test(t)&&(e.execScript||function(t){
            e.eval.call(e,t)
            })(t)
        },
    camelCase:function(e){
        return e.replace(C,"ms-").replace(k,L)
        },
    nodeName:function(e,t){
        return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()
        },
    each:function(e,n,r){
        var i,s=0,o=e.length,u=o===t||v.isFunction(e);
        if(r){
            if(u){
                for(i in e)if(n.apply(e[i],r)===!1)break
                    }else for(;s<o;)if(n.apply(e[s++],r)===!1)break
                }else if(u){
            for(i in e)if(n.call(e[i],i,e[i])===!1)break
                }else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e
        },
    trim:d&&!d.call("﻿ ")?function(e){
        return e==null?"":d.call(e)
        }:function(e){
        return e==null?"":(e+"").replace(b,"")
        },
    makeArray:function(e,t){
        var n,r=t||[];
        return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r
        },
    inArray:function(e,t,n){
        var r;
        if(t){
            if(c)return c.call(t,e,n);
            r=t.length,n=n?n<0?Math.max(0,r+n):n:0;
            for(;n<r;n++)if(n in t&&t[n]===e)return n
                }
                return-1
        },
    merge:function(e,n){
        var r=n.length,i=e.length,s=0;
        if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];
        return e.length=i,e
        },
    grep:function(e,t,n){
        var r,i=[],s=0,o=e.length;
        n=!!n;
        for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);
        return i
        },
    map:function(e,n,r){
        var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));
        if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)
        },
    guid:1,
    proxy:function(e,n){
        var r,i,s;
        return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){
            return e.apply(n,i.concat(l.call(arguments)))
            },s.guid=e.guid=e.guid||v.guid++,s):t
        },
    access:function(e,n,r,i,s,o,u){
        var a,f=r==null,l=0,c=e.length;
        if(r&&typeof r=="object"){
            for(l in r)v.access(e,n,l,r[l],1,o,i);s=1
            }else if(i!==t){
            a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){
                return a.call(v(e),n)
                }):(n.call(e,i),n=null));
            if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);
            s=1
            }
            return s?e:f?n.call(e):c?n(e[0],r):o
        },
    now:function(){
        return(new Date).getTime()
        }
    }),v.ready.promise=function(t){
    if(!r){
        r=v.Deferred();
        if(i.readyState==="complete")setTimeout(v.ready,1);
        else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);
        else{
            i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);
            var n=!1;
            try{
                n=e.frameElement==null&&i.documentElement
                }catch(s){}
            n&&n.doScroll&&function o(){
                if(!v.isReady){
                    try{
                        n.doScroll("left")
                        }catch(e){
                        return setTimeout(o,50)
                        }
                        v.ready()
                    }
                }()
        }
    }
return r.promise(t)
},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){
    O["[object "+t+"]"]=t.toLowerCase()
    }),n=v(i);
var M={};

v.Callbacks=function(e){
    e=typeof e=="string"?M[e]||_(e):v.extend({},e);
    var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){
        n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;
        for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){
            n=!1;
            break
        }
        i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())
        },c={
        add:function(){
            if(a){
                var t=a.length;
                (function r(t){
                    v.each(t,function(t,n){
                        var i=v.type(n);
                        i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)
                        })
                    })(arguments),i?o=a.length:n&&(s=t,l(n))
                }
                return this
            },
        remove:function(){
            return a&&v.each(arguments,function(e,t){
                var n;
                while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)
                    }),this
            },
        has:function(e){
            return v.inArray(e,a)>-1
            },
        empty:function(){
            return a=[],this
            },
        disable:function(){
            return a=f=n=t,this
            },
        disabled:function(){
            return!a
            },
        lock:function(){
            return f=t,n||c.disable(),this
            },
        locked:function(){
            return!f
            },
        fireWith:function(e,t){
            return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this
            },
        fire:function(){
            return c.fireWith(this,arguments),this
            },
        fired:function(){
            return!!r
            }
        };
    
return c
},v.extend({
    Deferred:function(e){
        var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={
            state:function(){
                return n
                },
            always:function(){
                return i.done(arguments).fail(arguments),this
                },
            then:function(){
                var e=arguments;
                return v.Deferred(function(n){
                    v.each(t,function(t,r){
                        var s=r[0],o=e[t];
                        i[r[1]](v.isFunction(o)?function(){
                            var e=o.apply(this,arguments);
                            e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])
                            }:n[s])
                        }),e=null
                    }).promise()
                },
            promise:function(e){
                return e!=null?v.extend(e,r):r
                }
            },i={};
    
    return r.pipe=r.then,v.each(t,function(e,s){
        var o=s[2],u=s[3];
        r[s[1]]=o.add,u&&o.add(function(){
            n=u
            },t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith
        }),r.promise(i),e&&e.call(i,i),i
    },
when:function(e){
    var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){
        return function(r){
            t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)
            }
        },u,a,f;
if(r>1){
    u=new Array(r),a=new Array(r),f=new Array(r);
    for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i
        }
        return i||s.resolveWith(f,n),s.promise()
    }
}),v.support=function(){
    var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");
    p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];
    if(!n||!r||!n.length)return{};
        
    s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={
        leadingWhitespace:p.firstChild.nodeType===3,
        tbody:!p.getElementsByTagName("tbody").length,
        htmlSerialize:!!p.getElementsByTagName("link").length,
        style:/top/.test(r.getAttribute("style")),
        hrefNormalized:r.getAttribute("href")==="/a",
        opacity:/^0.5/.test(r.style.opacity),
        cssFloat:!!r.style.cssFloat,
        checkOn:u.value==="on",
        optSelected:o.selected,
        getSetAttribute:p.className!=="t",
        enctype:!!i.createElement("form").enctype,
        html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",
        boxModel:i.compatMode==="CSS1Compat",
        submitBubbles:!0,
        changeBubbles:!0,
        focusinBubbles:!1,
        deleteExpando:!0,
        noCloneEvent:!0,
        inlineBlockNeedsLayout:!1,
        shrinkWrapBlocks:!1,
        reliableMarginRight:!0,
        boxSizingReliable:!0,
        pixelPosition:!1
        },u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;
    try{
        delete p.test
        }catch(d){
        t.deleteExpando=!1
        }!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){
        t.noCloneEvent=!1
        }),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);
    if(p.attachEvent)for(l in{
        submit:!0,
        change:!0,
        focusin:!0
        })f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){
        var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];
        if(!a)return;
        n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{
            width:"4px"
        }).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null
        }),a.removeChild(p),n=r=s=o=u=a=p=null,t
    }();
var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;
v.extend({
    cache:{},
    deletedIds:[],
    uuid:0,
    expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),
    noData:{
        embed:!0,
        object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet:!0
        },
    hasData:function(e){
        return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)
        },
    data:function(e,n,r,i){
        if(!v.acceptData(e))return;
        var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;
        if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;
        c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));
        if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);
        return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o
        },
    removeData:function(e,t,n){
        if(!v.acceptData(e))return;
        var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;
        if(!u[a])return;
        if(t){
            r=n?u[a]:u[a].data;
            if(r){
                v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));
                for(i=0,s=t.length;i<s;i++)delete r[t[i]];
                if(!(n?B:v.isEmptyObject)(r))return
            }
        }
        if(!n){
        delete u[a].data;
        if(!B(u[a]))return
    }
    o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null
    },
_data:function(e,t,n){
    return v.data(e,t,n,!0)
    },
acceptData:function(e){
    var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];
    return!t||t!==!0&&e.getAttribute("classid")===t
    }
}),v.fn.extend({
    data:function(e,n){
        var r,i,s,o,u,a=this[0],f=0,l=null;
        if(e===t){
            if(this.length){
                l=v.data(a);
                if(a.nodeType===1&&!v._data(a,"parsedAttrs")){
                    s=a.attributes;
                    for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));
                    v._data(a,"parsedAttrs",!0)
                    }
                }
            return l
        }
        return typeof e=="object"?this.each(function(){
        v.data(this,e)
        }):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){
        if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;
        r[1]=n,this.each(function(){
            var t=v(this);
            t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)
            })
        },null,n,arguments.length>1,null,!1))
    },
removeData:function(e){
    return this.each(function(){
        v.removeData(this,e)
        })
    }
}),v.extend({
    queue:function(e,t,n){
        var r;
        if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]
            },
    dequeue:function(e,t){
        t=t||"fx";
        var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){
            v.dequeue(e,t)
            };
            
        i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()
        },
    _queueHooks:function(e,t){
        var n=t+"queueHooks";
        return v._data(e,n)||v._data(e,n,{
            empty:v.Callbacks("once memory").add(function(){
                v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)
                })
            })
        }
    }),v.fn.extend({
    queue:function(e,n){
        var r=2;
        return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){
            var t=v.queue(this,e,n);
            v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)
            })
        },
    dequeue:function(e){
        return this.each(function(){
            v.dequeue(this,e)
            })
        },
    delay:function(e,t){
        return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){
            var r=setTimeout(t,e);
            n.stop=function(){
                clearTimeout(r)
                }
            })
    },
clearQueue:function(e){
    return this.queue(e||"fx",[])
    },
promise:function(e,n){
    var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){
        --i||s.resolveWith(o,[o])
        };
        
    typeof e!="string"&&(n=e,e=t),e=e||"fx";
    while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));
    return a(),s.promise(n)
    }
});
var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;
v.fn.extend({
    attr:function(e,t){
        return v.access(this,v.attr,e,t,arguments.length>1)
        },
    removeAttr:function(e){
        return this.each(function(){
            v.removeAttr(this,e)
            })
        },
    prop:function(e,t){
        return v.access(this,v.prop,e,t,arguments.length>1)
        },
    removeProp:function(e){
        return e=v.propFix[e]||e,this.each(function(){
            try{
                this[e]=t,delete this[e]
            }catch(n){}
        })
    },
addClass:function(e){
    var t,n,r,i,s,o,u;
    if(v.isFunction(e))return this.each(function(t){
        v(this).addClass(e.call(this,t,this.className))
        });
    if(e&&typeof e=="string"){
        t=e.split(y);
        for(n=0,r=this.length;n<r;n++){
            i=this[n];
            if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;
                else{
                s=" "+i.className+" ";
                for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");
                i.className=v.trim(s)
                }
            }
        }
    return this
},
removeClass:function(e){
    var n,r,i,s,o,u,a;
    if(v.isFunction(e))return this.each(function(t){
        v(this).removeClass(e.call(this,t,this.className))
        });
    if(e&&typeof e=="string"||e===t){
        n=(e||"").split(y);
        for(u=0,a=this.length;u<a;u++){
            i=this[u];
            if(i.nodeType===1&&i.className){
                r=(" "+i.className+" ").replace(q," ");
                for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");
                i.className=e?v.trim(r):""
                }
            }
        }
    return this
},
toggleClass:function(e,t){
    var n=typeof e,r=typeof t=="boolean";
    return v.isFunction(e)?this.each(function(n){
        v(this).toggleClass(e.call(this,n,this.className,t),t)
        }):this.each(function(){
        if(n==="string"){
            var i,s=0,o=v(this),u=t,a=e.split(y);
            while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)
                }else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""
            })
    },
hasClass:function(e){
    var t=" "+e+" ",n=0,r=this.length;
    for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1
    },
val:function(e){
    var n,r,i,s=this[0];
    if(!arguments.length){
        if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);
        return
    }
    return i=v.isFunction(e),this.each(function(r){
        var s,o=v(this);
        if(this.nodeType!==1)return;
        i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){
            return e==null?"":e+""
            })),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];
        if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s
            })
    }
}),v.extend({
    valHooks:{
        option:{
            get:function(e){
                var t=e.attributes.value;
                return!t||t.specified?e.value:e.text
                }
            },
    select:{
        get:function(e){
            var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;
            for(;a<u;a++){
                n=r[a];
                if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){
                    t=v(n).val();
                    if(s)return t;
                    o.push(t)
                    }
                }
            return o
        },
    set:function(e,t){
        var n=v.makeArray(t);
        return v(e).find("option").each(function(){
            this.selected=v.inArray(v(this).val(),n)>=0
            }),n.length||(e.selectedIndex=-1),n
        }
    }
},
attrFn:{},
attr:function(e,n,r,i){
    var s,o,u,a=e.nodeType;
    if(!e||a===3||a===8||a===2)return;
    if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);
    if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);
    u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));
    if(r!==t){
        if(r===null){
            v.removeAttr(e,n);
            return
        }
        return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)
        }
        return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)
    },
removeAttr:function(e,t){
    var n,r,i,s,o=0;
    if(t&&e.nodeType===1){
        r=t.split(y);
        for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))
            }
        },
attrHooks:{
    type:{
        set:function(e,t){
            if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");
            else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){
                var n=e.value;
                return e.setAttribute("type",t),n&&(e.value=n),t
                }
            }
    },
value:{
    get:function(e,t){
        return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null
        },
    set:function(e,t,n){
        if(j&&v.nodeName(e,"button"))return j.set(e,t,n);
        e.value=t
        }
    }
},
propFix:{
    tabindex:"tabIndex",
    readonly:"readOnly",
    "for":"htmlFor",
    "class":"className",
    maxlength:"maxLength",
    cellspacing:"cellSpacing",
    cellpadding:"cellPadding",
    rowspan:"rowSpan",
    colspan:"colSpan",
    usemap:"useMap",
    frameborder:"frameBorder",
    contenteditable:"contentEditable"
},
prop:function(e,n,r){
    var i,s,o,u=e.nodeType;
    if(!e||u===3||u===8||u===2)return;
    return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]
    },
propHooks:{
    tabIndex:{
        get:function(e){
            var n=e.getAttributeNode("tabindex");
            return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t
            }
        }
}
}),F={
    get:function(e,n){
        var r,i=v.prop(e,n);
        return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t
        },
    set:function(e,t,n){
        var r;
        return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n
        }
    },V||(I={
    name:!0,
    id:!0,
    coords:!0
    },j=v.valHooks.button={
    get:function(e,n){
        var r;
        return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t
        },
    set:function(e,t,n){
        var r=e.getAttributeNode(n);
        return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""
        }
    },v.each(["width","height"],function(e,t){
    v.attrHooks[t]=v.extend(v.attrHooks[t],{
        set:function(e,n){
            if(n==="")return e.setAttribute(t,"auto"),n
                }
            })
}),v.attrHooks.contenteditable={
    get:j.get,
    set:function(e,t,n){
        t===""&&(t="false"),j.set(e,t,n)
        }
    }),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){
    v.attrHooks[n]=v.extend(v.attrHooks[n],{
        get:function(e){
            var r=e.getAttribute(n,2);
            return r===null?t:r
            }
        })
}),v.support.style||(v.attrHooks.style={
    get:function(e){
        return e.style.cssText.toLowerCase()||t
        },
    set:function(e,t){
        return e.style.cssText=t+""
        }
    }),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{
    get:function(e){
        var t=e.parentNode;
        return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null
        }
    })),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){
    v.valHooks[this]={
        get:function(e){
            return e.getAttribute("value")===null?"on":e.value
            }
        }
}),v.each(["radio","checkbox"],function(){
    v.valHooks[this]=v.extend(v.valHooks[this],{
        set:function(e,t){
            if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0
                }
            })
});
var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){
    return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")
    };
    
v.event={
    add:function(e,n,r,i,s){
        var o,u,a,f,l,c,h,p,d,m,g;
        if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;
        r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){
            return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)
            },u.elem=e),n=v.trim(Z(n)).split(" ");
        for(f=0;f<n.length;f++){
            l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({
                type:c,
                origType:l[1],
                data:i,
                handler:r,
                guid:r.guid,
                selector:s,
                needsContext:s&&v.expr.match.needsContext.test(s),
                namespace:h.join(".")
                },d),m=a[c];
            if(!m){
                m=a[c]=[],m.delegateCount=0;
                if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)
                    }
                    g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0
            }
            e=null
        },
    global:{},
    remove:function(e,t,n,r,i){
        var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);
        if(!g||!(h=g.events))return;
        t=v.trim(Z(t||"")).split(" ");
        for(s=0;s<t.length;s++){
            o=J.exec(t[s])||[],u=a=o[1],f=o[2];
            if(!u){
                for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue
            }
            p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
            for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));
            d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])
            }
            v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))
        },
    customEvent:{
        getData:!0,
        setData:!0,
        changeData:!0
        },
    trigger:function(n,r,s,o){
        if(!s||s.nodeType!==3&&s.nodeType!==8){
            var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];
            if(Y.test(y+v.event.triggered))return;
            y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());
            if((!s||v.event.customEvent[y])&&!v.event.global[y])return;
            n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";
            if(!s){
                u=v.cache;
                for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return
            }
            n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};
            
            if(p.trigger&&p.trigger.apply(s,r)===!1)return;
            m=[[s,p.bindType||y]];
            if(!o&&!p.noBubble&&!v.isWindow(s)){
                g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;
                for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;
                c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])
                }
                for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();
            return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result
            }
            return
    },
    dispatch:function(n){
        n=v.event.fix(n||e.event);
        var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];
        g[0]=n,n.delegateTarget=this;
        if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;
        if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){
            u={},f=[];
            for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);
            f.length&&w.push({
                elem:s,
                matches:f
            })
            }
            d.length>m&&w.push({
            elem:this,
            matches:d.slice(m)
            });
        for(r=0;r<w.length&&!n.isPropagationStopped();r++){
            a=w[r],n.currentTarget=a.elem;
            for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){
                c=a.matches[i];
                if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))
                    }
                }
            return b.postDispatch&&b.postDispatch.call(this,n),n.result
    },
props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
    props:"char charCode key keyCode".split(" "),
    filter:function(e,t){
        return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e
        }
    },
mouseHooks:{
    props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter:function(e,n){
        var r,s,o,u=n.button,a=n.fromElement;
        return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e
        }
    },
fix:function(e){
    if(e[v.expando])return e;
    var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;
    e=v.Event(r);
    for(t=o.length;t;)n=o[--t],e[n]=r[n];
    return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e
    },
special:{
    load:{
        noBubble:!0
        },
    focus:{
        delegateType:"focusin"
    },
    blur:{
        delegateType:"focusout"
    },
    beforeunload:{
        setup:function(e,t,n){
            v.isWindow(this)&&(this.onbeforeunload=n)
            },
        teardown:function(e,t){
            this.onbeforeunload===t&&(this.onbeforeunload=null)
            }
        }
},
simulate:function(e,t,n,r){
    var i=v.extend(new v.Event,n,{
        type:e,
        isSimulated:!0,
        originalEvent:{}
    });
r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()
}
},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){
    e.removeEventListener&&e.removeEventListener(t,n,!1)
    }:function(e,t,n){
    var r="on"+t;
    e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))
    },v.Event=function(e,t){
    if(!(this instanceof v.Event))return new v.Event(e,t);
    e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0
    },v.Event.prototype={
    preventDefault:function(){
        this.isDefaultPrevented=tt;
        var e=this.originalEvent;
        if(!e)return;
        e.preventDefault?e.preventDefault():e.returnValue=!1
        },
    stopPropagation:function(){
        this.isPropagationStopped=tt;
        var e=this.originalEvent;
        if(!e)return;
        e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0
        },
    stopImmediatePropagation:function(){
        this.isImmediatePropagationStopped=tt,this.stopPropagation()
        },
    isDefaultPrevented:et,
    isPropagationStopped:et,
    isImmediatePropagationStopped:et
},v.each({
    mouseenter:"mouseover",
    mouseleave:"mouseout"
},function(e,t){
    v.event.special[e]={
        delegateType:t,
        bindType:t,
        handle:function(e){
            var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;
            if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;
            return n
            }
        }
}),v.support.submitBubbles||(v.event.special.submit={
    setup:function(){
        if(v.nodeName(this,"form"))return!1;
        v.event.add(this,"click._submit keypress._submit",function(e){
            var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;
            r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){
                e._submit_bubble=!0
                }),v._data(r,"_submit_attached",!0))
            })
        },
    postDispatch:function(e){
        e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))
        },
    teardown:function(){
        if(v.nodeName(this,"form"))return!1;
        v.event.remove(this,"._submit")
        }
    }),v.support.changeBubbles||(v.event.special.change={
    setup:function(){
        if($.test(this.nodeName)){
            if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){
                e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)
                }),v.event.add(this,"click._change",function(e){
                this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)
                });
            return!1
            }
            v.event.add(this,"beforeactivate._change",function(e){
            var t=e.target;
            $.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){
                this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)
                }),v._data(t,"_change_attached",!0))
            })
        },
    handle:function(e){
        var t=e.target;
        if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)
            },
    teardown:function(){
        return v.event.remove(this,"._change"),!$.test(this.nodeName)
        }
    }),v.support.focusinBubbles||v.each({
    focus:"focusin",
    blur:"focusout"
},function(e,t){
    var n=0,r=function(e){
        v.event.simulate(t,e.target,v.event.fix(e),!0)
        };
        
    v.event.special[t]={
        setup:function(){
            n++===0&&i.addEventListener(e,r,!0)
            },
        teardown:function(){
            --n===0&&i.removeEventListener(e,r,!0)
            }
        }
}),v.fn.extend({
    on:function(e,n,r,i,s){
        var o,u;
        if(typeof e=="object"){
            typeof n!="string"&&(r=r||n,n=t);
            for(u in e)this.on(u,n,r,e[u],s);return this
            }
            r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));
        if(i===!1)i=et;
        else if(!i)return this;
        return s===1&&(o=i,i=function(e){
            return v().off(e),o.apply(this,arguments)
            },i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){
            v.event.add(this,e,i,r,n)
            })
        },
    one:function(e,t,n,r){
        return this.on(e,t,n,r,1)
        },
    off:function(e,n,r){
        var i,s;
        if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
        if(typeof e=="object"){
            for(s in e)this.off(s,n,e[s]);return this
            }
            if(n===!1||typeof n=="function")r=n,n=t;
        return r===!1&&(r=et),this.each(function(){
            v.event.remove(this,e,r,n)
            })
        },
    bind:function(e,t,n){
        return this.on(e,null,t,n)
        },
    unbind:function(e,t){
        return this.off(e,null,t)
        },
    live:function(e,t,n){
        return v(this.context).on(e,this.selector,t,n),this
        },
    die:function(e,t){
        return v(this.context).off(e,this.selector||"**",t),this
        },
    delegate:function(e,t,n,r){
        return this.on(t,e,n,r)
        },
    undelegate:function(e,t,n){
        return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)
        },
    trigger:function(e,t){
        return this.each(function(){
            v.event.trigger(e,t,this)
            })
        },
    triggerHandler:function(e,t){
        if(this[0])return v.event.trigger(e,t,this[0],!0)
            },
    toggle:function(e){
        var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){
            var i=(v._data(this,"lastToggle"+e.guid)||0)%r;
            return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1
            };
            
        i.guid=n;
        while(r<t.length)t[r++].guid=n;
        return this.click(i)
        },
    hover:function(e,t){
        return this.mouseenter(e).mouseleave(t||e)
        }
    }),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
    v.fn[t]=function(e,n){
        return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)
        },Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)
    }),function(e,t){
    function nt(e,t,n,r){
        n=n||[],t=t||g;
        var i,s,a,f,l=t.nodeType;
        if(!e||typeof e!="string")return n;
        if(l!==1&&l!==9)return[];
        a=o(t);
        if(!a&&!r)if(i=R.exec(e))if(f=i[1]){
            if(l===9){
                s=t.getElementById(f);
                if(!s||!s.parentNode)return n;
                if(s.id===f)return n.push(s),n
                    }else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n
                }else{
            if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;
            if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n
                }
                return vt(e.replace(j,"$1"),t,n,r,a)
        }
        function rt(e){
        return function(t){
            var n=t.nodeName.toLowerCase();
            return n==="input"&&t.type===e
            }
        }
    function it(e){
    return function(t){
        var n=t.nodeName.toLowerCase();
        return(n==="input"||n==="button")&&t.type===e
        }
    }
function st(e){
    return N(function(t){
        return t=+t,N(function(n,r){
            var i,s=e([],n.length,t),o=s.length;
            while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))
                })
        })
    }
    function ot(e,t,n){
    if(e===t)return n;
    var r=e.nextSibling;
    while(r){
        if(r===t)return-1;
        r=r.nextSibling
        }
        return 1
    }
    function ut(e,t){
    var n,r,s,o,u,a,f,l=L[d][e+" "];
    if(l)return t?0:l.slice(0);
    u=e,a=[],f=i.preFilter;
    while(u){
        if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);
        n=!1;
        if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");
        for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break
    }
    return t?u.length:u?nt.error(e):L(e,a).slice(0)
    }
    function at(e,t,r){
    var i=t.dir,s=r&&t.dir==="parentNode",o=w++;
    return t.first?function(t,n,r){
        while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)
            }:function(t,r,u){
        if(!u){
            var a,f=b+" "+o+" ",l=f+n;
            while(t=t[i])if(s||t.nodeType===1){
                if((a=t[d])===l)return t.sizset;
                if(typeof a=="string"&&a.indexOf(f)===0){
                    if(t.sizset)return t
                        }else{
                    t[d]=l;
                    if(e(t,r,u))return t.sizset=!0,t;
                    t.sizset=!1
                    }
                }
            }else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t
    }
}
function ft(e){
    return e.length>1?function(t,n,r){
        var i=e.length;
        while(i--)if(!e[i](t,n,r))return!1;
        return!0
        }:e[0]
    }
    function lt(e,t,n,r,i){
    var s,o=[],u=0,a=e.length,f=t!=null;
    for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o
    }
    function ct(e,t,n,r,i,s){
    return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){
        var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;
        n&&n(m,g,u,a);
        if(r){
            f=lt(g,p),r(f,[],u,a),l=f.length;
            while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)
                }
                if(s){
            if(i||e){
                if(i){
                    f=[],l=g.length;
                    while(l--)(c=g[l])&&f.push(m[l]=c);
                    i(null,g=[],f,a)
                    }
                    l=g.length;
                while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))
                    }
                }else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)
        })
}
function ht(e){
    var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){
        return e===t
        },u,!0),l=at(function(e){
        return T.call(t,e)>-1
        },u,!0),h=[function(e,n,r){
        return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))
        }];
    for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];
        else{
        n=i.filter[e[a].type].apply(null,e[a].matches);
        if(n[d]){
            r=++a;
            for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))
            }
            h.push(n)
        }
        return ft(h)
    }
    function pt(e,t){
    var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){
        var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;
        T&&(c=a!==g&&a,n=o.el);
        for(;(p=C[w])!=null;w++){
            if(s&&p){
                for(d=0;v=e[d];d++)if(v(p,a,f)){
                    l.push(p);
                    break
                }
                T&&(b=k,n=++o.el)
                }
                r&&((p=!v&&p)&&y--,u&&x.push(p))
            }
            y+=w;
        if(r&&w!==y){
            for(d=0;v=t[d];d++)v(x,m,a,f);
            if(u){
                if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));
                m=lt(m)
                }
                S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)
            }
            return T&&(b=k,c=N),x
        };
        
    return o.el=0,r?N(o):o
    }
    function dt(e,t,n){
    var r=0,i=t.length;
    for(;r<i;r++)nt(e,t[r],n);
    return n
    }
    function vt(e,t,n,r,s){
    var o,u,f,l,c,h=ut(e),p=h.length;
    if(!r&&h.length===1){
        u=h[0]=h[0].slice(0);
        if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){
            t=i.find.ID(f.matches[0].replace($,""),t,s)[0];
            if(!t)return n;
            e=e.slice(u.shift().length)
            }
            for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){
            f=u[o];
            if(i.relative[l=f.type])break;
            if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){
                u.splice(o,1),e=r.length&&u.join("");
                if(!e)return S.apply(n,x.call(r,0)),n;
                break
            }
            }
        }
    return a(e,h)(r,t,s,n,z.test(e)),n
}
function mt(){}
var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){
    var t=0,n=this.length;
    for(;t<n;t++)if(this[t]===e)return t;return-1
    },N=function(e,t){
    return e[d]=t==null||t,e
    },C=function(){
    var e={},t=[];
    return N(function(n,r){
        return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r
        },e)
    },k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={
    ID:new RegExp("^#("+M+")"),
    CLASS:new RegExp("^\\.("+M+")"),
    NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),
    TAG:new RegExp("^("+M.replace("w","w*")+")"),
    ATTR:new RegExp("^"+P),
    PSEUDO:new RegExp("^"+H),
    POS:new RegExp(B,"i"),
    CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),
    needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")
    },K=function(e){
    var t=g.createElement("div");
    try{
        return e(t)
        }catch(n){
        return!1
        }finally{
        t=null
        }
    },Q=K(function(e){
    return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length
    }),G=K(function(e){
    return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"
    }),Y=K(function(e){
    e.innerHTML="<select></select>";
    var t=typeof e.lastChild.getAttribute("multiple");
    return t!=="boolean"&&t!=="string"
    }),Z=K(function(e){
    return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)
    }),et=K(function(e){
    e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);
    var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;
    return r=!g.getElementById(d),y.removeChild(e),t
    });
try{
    x.call(y.childNodes,0)[0].nodeType
    }catch(tt){
    x=function(e){
        var t,n=[];
        for(;t=this[e];e++)n.push(t);
        return n
        }
    }
nt.matches=function(e,t){
    return nt(e,null,null,t)
    },nt.matchesSelector=function(e,t){
    return nt(t,null,null,[e]).length>0
    },s=nt.getText=function(e){
    var t,n="",r=0,i=e.nodeType;
    if(i){
        if(i===1||i===9||i===11){
            if(typeof e.textContent=="string")return e.textContent;
            for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)
                }else if(i===3||i===4)return e.nodeValue
            }else for(;t=e[r];r++)n+=s(t);
    return n
    },o=nt.isXML=function(e){
    var t=e&&(e.ownerDocument||e).documentElement;
    return t?t.nodeName!=="HTML":!1
    },u=nt.contains=y.contains?function(e,t){
    var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;
    return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))
    }:y.compareDocumentPosition?function(e,t){
    return t&&!!(e.compareDocumentPosition(t)&16)
    }:function(e,t){
    while(t=t.parentNode)if(t===e)return!0;
    return!1
    },nt.attr=function(e,t){
    var n,r=o(e);
    return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)
    },i=nt.selectors={
    cacheLength:50,
    createPseudo:N,
    match:J,
    attrHandle:G?{}:{
        href:function(e){
            return e.getAttribute("href",2)
            },
        type:function(e){
            return e.getAttribute("type")
            }
        },
find:{
    ID:r?function(e,t,n){
        if(typeof t.getElementById!==p&&!n){
            var r=t.getElementById(e);
            return r&&r.parentNode?[r]:[]
            }
        }:function(e,n,r){
    if(typeof n.getElementById!==p&&!r){
        var i=n.getElementById(e);
        return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]
        }
    },
TAG:Q?function(e,t){
    if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)
        }:function(e,t){
    var n=t.getElementsByTagName(e);
    if(e==="*"){
        var r,i=[],s=0;
        for(;r=n[s];s++)r.nodeType===1&&i.push(r);
        return i
        }
        return n
    },
NAME:et&&function(e,t){
    if(typeof t.getElementsByName!==p)return t.getElementsByName(name)
        },
CLASS:Z&&function(e,t,n){
    if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)
        }
    },
relative:{
    ">":{
        dir:"parentNode",
        first:!0
        },
    " ":{
        dir:"parentNode"
    },
    "+":{
        dir:"previousSibling",
        first:!0
        },
    "~":{
        dir:"previousSibling"
    }
},
preFilter:{
    ATTR:function(e){
        return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)
        },
    CHILD:function(e){
        return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e
        },
    PSEUDO:function(e){
        var t,n;
        if(J.CHILD.test(e[0]))return null;
        if(e[3])e[2]=e[3];
        else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;
        return e.slice(0,3)
        }
    },
filter:{
    ID:r?function(e){
        return e=e.replace($,""),function(t){
            return t.getAttribute("id")===e
            }
        }:function(e){
    return e=e.replace($,""),function(t){
        var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");
        return n&&n.value===e
        }
    },
TAG:function(e){
    return e==="*"?function(){
        return!0
        }:(e=e.replace($,"").toLowerCase(),function(t){
        return t.nodeName&&t.nodeName.toLowerCase()===e
        })
    },
CLASS:function(e){
    var t=k[d][e+" "];
    return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){
        return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")
        })
    },
ATTR:function(e,t,n){
    return function(r,i){
        var s=nt.attr(r,e);
        return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0
        }
    },
CHILD:function(e,t,n,r){
    return e==="nth"?function(e){
        var t,i,s=e.parentNode;
        if(n===1&&r===0)return!0;
        if(s){
            i=0;
            for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){
                i++;
                if(e===t)break
            }
            }
            return i-=r,i===n||i%n===0&&i/n>=0
    }:function(t){
    var n=t;
    switch(e){
        case"only":case"first":
            while(n=n.previousSibling)if(n.nodeType===1)return!1;
            if(e==="first")return!0;
            n=t;
        case"last":
            while(n=n.nextSibling)if(n.nodeType===1)return!1;
            return!0
            }
        }
},
PSEUDO:function(e,t){
    var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);
    return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){
        var i,s=r(e,t),o=s.length;
        while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])
            }):function(e){
        return r(e,0,n)
        }):r
    }
},
pseudos:{
    not:N(function(e){
        var t=[],n=[],r=a(e.replace(j,"$1"));
        return r[d]?N(function(e,t,n,i){
            var s,o=r(e,null,i,[]),u=e.length;
            while(u--)if(s=o[u])e[u]=!(t[u]=s)
                }):function(e,i,s){
            return t[0]=e,r(t,null,s,n),!n.pop()
            }
        }),
has:N(function(e){
    return function(t){
        return nt(e,t).length>0
        }
    }),
contains:N(function(e){
    return function(t){
        return(t.textContent||t.innerText||s(t)).indexOf(e)>-1
        }
    }),
enabled:function(e){
    return e.disabled===!1
    },
disabled:function(e){
    return e.disabled===!0
    },
checked:function(e){
    var t=e.nodeName.toLowerCase();
    return t==="input"&&!!e.checked||t==="option"&&!!e.selected
    },
selected:function(e){
    return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0
    },
parent:function(e){
    return!i.pseudos.empty(e)
    },
empty:function(e){
    var t;
    e=e.firstChild;
    while(e){
        if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;
        e=e.nextSibling
        }
        return!0
    },
header:function(e){
    return X.test(e.nodeName)
    },
text:function(e){
    var t,n;
    return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)
    },
radio:rt("radio"),
checkbox:rt("checkbox"),
file:rt("file"),
password:rt("password"),
image:rt("image"),
submit:it("submit"),
reset:it("reset"),
button:function(e){
    var t=e.nodeName.toLowerCase();
    return t==="input"&&e.type==="button"||t==="button"
    },
input:function(e){
    return V.test(e.nodeName)
    },
focus:function(e){
    var t=e.ownerDocument;
    return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
    },
active:function(e){
    return e===e.ownerDocument.activeElement
    },
first:st(function(){
    return[0]
    }),
last:st(function(e,t){
    return[t-1]
    }),
eq:st(function(e,t,n){
    return[n<0?n+t:n]
    }),
even:st(function(e,t){
    for(var n=0;n<t;n+=2)e.push(n);
    return e
    }),
odd:st(function(e,t){
    for(var n=1;n<t;n+=2)e.push(n);
    return e
    }),
lt:st(function(e,t,n){
    for(var r=n<0?n+t:n;--r>=0;)e.push(r);
    return e
    }),
gt:st(function(e,t,n){
    for(var r=n<0?n+t:n;++r<t;)e.push(r);
    return e
    })
}
},f=y.compareDocumentPosition?function(e,t){
    return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1
    }:function(e,t){
    if(e===t)return l=!0,0;
    if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;
    var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;
    if(o===u)return ot(e,t);
    if(!o)return-1;
    if(!u)return 1;
    while(a)i.unshift(a),a=a.parentNode;
    a=u;
    while(a)s.unshift(a),a=a.parentNode;
    n=i.length,r=s.length;
    for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)
    },[0,0].sort(f),h=!l,nt.uniqueSort=function(e){
    var t,n=[],r=1,i=0;
    l=h,e.sort(f);
    if(l){
        for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));
        while(i--)e.splice(n[i],1)
            }
            return e
    },nt.error=function(e){
    throw new Error("Syntax error, unrecognized expression: "+e)
    },a=nt.compile=function(e,t){
    var n,r=[],i=[],s=A[d][e+" "];
    if(!s){
        t||(t=ut(e)),n=t.length;
        while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);
        s=A(e,pt(i,r))
        }
        return s
    },g.querySelectorAll&&function(){
    var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;
    K(function(e){
        e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")
        }),K(function(e){
        e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")
        }),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){
        if(!o&&!u&&!i.test(e)){
            var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;
            if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){
                a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;
                while(f--)a[f]=c+a[f].join("");
                h=z.test(e)&&r.parentNode||r,p=a.join(",")
                }
                if(p)try{
                return S.apply(s,x.call(h.querySelectorAll(p),0)),s
                }catch(v){}finally{
                l||r.removeAttribute("id")
                }
            }
            return t(e,r,s,o,u)
    },u&&(K(function(t){
    e=u.call(t,"div");
    try{
        u.call(t,"[test!='']:sizzle"),s.push("!=",H)
        }catch(n){}
}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){
    n=n.replace(r,"='$1']");
    if(!o(t)&&!s.test(n)&&!i.test(n))try{
        var a=u.call(t,n);
        if(a||e||t.document&&t.document.nodeType!==11)return a
            }catch(f){}
        return nt(n,null,null,[t]).length>0
    })
}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains
}(e);
var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={
    children:!0,
    contents:!0,
    next:!0,
    prev:!0
    };
    
v.fn.extend({
    find:function(e){
        var t,n,r,i,s,o,u=this;
        if(typeof e!="string")return v(e).filter(function(){
            for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0
                });
        o=this.pushStack("","find",e);
        for(t=0,n=this.length;t<n;t++){
            r=o.length,v.find(e,this[t],o);
            if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){
                o.splice(i--,1);
                break
            }
            }
            return o
    },
has:function(e){
    var t,n=v(e,this),r=n.length;
    return this.filter(function(){
        for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0
            })
    },
not:function(e){
    return this.pushStack(ft(this,e,!1),"not",e)
    },
filter:function(e){
    return this.pushStack(ft(this,e,!0),"filter",e)
    },
is:function(e){
    return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)
    },
closest:function(e,t){
    var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;
    for(;r<i;r++){
        n=this[r];
        while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){
            if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){
                s.push(n);
                break
            }
            n=n.parentNode
            }
        }
    return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)
    },
index:function(e){
    return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1
    },
add:function(e,t){
    var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);
    return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))
    },
addBack:function(e){
    return this.add(e==null?this.prevObject:this.prevObject.filter(e))
    }
}),v.fn.andSelf=v.fn.addBack,v.each({
    parent:function(e){
        var t=e.parentNode;
        return t&&t.nodeType!==11?t:null
        },
    parents:function(e){
        return v.dir(e,"parentNode")
        },
    parentsUntil:function(e,t,n){
        return v.dir(e,"parentNode",n)
        },
    next:function(e){
        return at(e,"nextSibling")
        },
    prev:function(e){
        return at(e,"previousSibling")
        },
    nextAll:function(e){
        return v.dir(e,"nextSibling")
        },
    prevAll:function(e){
        return v.dir(e,"previousSibling")
        },
    nextUntil:function(e,t,n){
        return v.dir(e,"nextSibling",n)
        },
    prevUntil:function(e,t,n){
        return v.dir(e,"previousSibling",n)
        },
    siblings:function(e){
        return v.sibling((e.parentNode||{}).firstChild,e)
        },
    children:function(e){
        return v.sibling(e.firstChild)
        },
    contents:function(e){
        return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)
        }
    },function(e,t){
    v.fn[e]=function(n,r){
        var i=v.map(this,t,n);
        return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))
        }
    }),v.extend({
    filter:function(e,t,n){
        return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)
        },
    dir:function(e,n,r){
        var i=[],s=e[n];
        while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];
        return i
        },
    sibling:function(e,t){
        var n=[];
        for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);
        return n
        }
    });
var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={
    option:[1,"<select multiple='multiple'>","</select>"],
    legend:[1,"<fieldset>","</fieldset>"],
    thead:[1,"<table>","</table>"],
    tr:[2,"<table><tbody>","</tbody></table>"],
    td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
    col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
    area:[1,"<map>","</map>"],
    _default:[0,"",""]
    },Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));
Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({
    text:function(e){
        return v.access(this,function(e){
            return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))
            },null,e,arguments.length)
        },
    wrapAll:function(e){
        if(v.isFunction(e))return this.each(function(t){
            v(this).wrapAll(e.call(this,t))
            });
        if(this[0]){
            var t=v(e,this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){
                var e=this;
                while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;
                return e
                }).append(this)
            }
            return this
        },
    wrapInner:function(e){
        return v.isFunction(e)?this.each(function(t){
            v(this).wrapInner(e.call(this,t))
            }):this.each(function(){
            var t=v(this),n=t.contents();
            n.length?n.wrapAll(e):t.append(e)
            })
        },
    wrap:function(e){
        var t=v.isFunction(e);
        return this.each(function(n){
            v(this).wrapAll(t?e.call(this,n):e)
            })
        },
    unwrap:function(){
        return this.parent().each(function(){
            v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)
            }).end()
        },
    append:function(){
        return this.domManip(arguments,!0,function(e){
            (this.nodeType===1||this.nodeType===11)&&this.appendChild(e)
            })
        },
    prepend:function(){
        return this.domManip(arguments,!0,function(e){
            (this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)
            })
        },
    before:function(){
        if(!ut(this[0]))return this.domManip(arguments,!1,function(e){
            this.parentNode.insertBefore(e,this)
            });
        if(arguments.length){
            var e=v.clean(arguments);
            return this.pushStack(v.merge(e,this),"before",this.selector)
            }
        },
after:function(){
    if(!ut(this[0]))return this.domManip(arguments,!1,function(e){
        this.parentNode.insertBefore(e,this.nextSibling)
        });
    if(arguments.length){
        var e=v.clean(arguments);
        return this.pushStack(v.merge(this,e),"after",this.selector)
        }
    },
remove:function(e,t){
    var n,r=0;
    for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this
    },
empty:function(){
    var e,t=0;
    for(;(e=this[t])!=null;t++){
        e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));
        while(e.firstChild)e.removeChild(e.firstChild)
            }
            return this
    },
clone:function(e,t){
    return e=e==null?!1:e,t=t==null?e:t,this.map(function(){
        return v.clone(this,e,t)
        })
    },
html:function(e){
    return v.access(this,function(e){
        var n=this[0]||{},r=0,i=this.length;
        if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;
        if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){
            e=e.replace(dt,"<$1></$2>");
            try{
                for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);
                n=0
                }catch(s){}
        }
        n&&this.empty().append(e)
        },null,e,arguments.length)
},
replaceWith:function(e){
    return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){
        var n=v(this),r=n.html();
        n.replaceWith(e.call(this,t,r))
        }):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){
        var t=this.nextSibling,n=this.parentNode;
        v(this).remove(),t?v(t).before(e):v(n).append(e)
        }))
    },
detach:function(e){
    return this.remove(e,!0)
    },
domManip:function(e,n,r){
    e=[].concat.apply([],e);
    var i,s,o,u,a=0,f=e[0],l=[],c=this.length;
    if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){
        v(this).domManip(e,n,r)
        });
    if(v.isFunction(f))return this.each(function(i){
        var s=v(this);
        e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)
        });
    if(this[0]){
        i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);
        if(s){
            n=n&&v.nodeName(s,"tr");
            for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))
                }
                o=s=null,l.length&&v.each(l,function(e,t){
            t.src?v.ajax?v.ajax({
                url:t.src,
                type:"GET",
                dataType:"script",
                async:!1,
                global:!1,
                "throws":!0
                }):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)
            })
        }
        return this
    }
}),v.buildFragment=function(e,n,r){
    var s,o,u,a=e[0];
    return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{
        fragment:s,
        cacheable:o
    }
},v.fragments={},v.each({
    appendTo:"append",
    prependTo:"prepend",
    insertBefore:"before",
    insertAfter:"after",
    replaceAll:"replaceWith"
},function(e,t){
    v.fn[e]=function(n){
        var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;
        if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;
        for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);
        return this.pushStack(s,e,o.selector)
        }
    }),v.extend({
    clone:function(e,t,n){
        var r,i,s,o;
        v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));
        if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){
            Ot(e,o),r=Mt(e),i=Mt(o);
            for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])
                }
                if(t){
            At(e,o);
            if(n){
                r=Mt(e),i=Mt(o);
                for(s=0;r[s];++s)At(r[s],i[s])
                    }
                }
        return r=i=null,o
    },
clean:function(e,t,n,r){
    var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];
    if(!t||typeof t.createDocumentFragment=="undefined")t=i;
    for(s=0;(u=e[s])!=null;s++){
        typeof u=="number"&&(u+="");
        if(!u)continue;
        if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);
            else{
            y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];
            while(l--)c=c.lastChild;
            if(!v.support.tbody){
                h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];
                for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])
                    }!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)
            }
            u.nodeType?b.push(u):v.merge(b,u)
        }
        c&&(u=c=y=null);
    if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);
    if(n){
        m=function(e){
            if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)
                };
                
        for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)
            }
            return b
    },
cleanData:function(e,t){
    var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;
    for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){
        r=i[u],n=r&&a[r];
        if(n){
            if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))
            }
        }
    }
}),function(){
    var e,t;
    v.uaMatch=function(e){
        e=e.toLowerCase();
        var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];
        return{
            browser:t[1]||"",
            version:t[2]||"0"
            }
        },e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){
    function e(t,n){
        return new e.fn.init(t,n)
        }
        v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){
        return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)
        },e.fn.init.prototype=e.fn;
    var t=e(i);
    return e
    }
}();
var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={
    BODY:"block"
},Xt={
    position:"absolute",
    visibility:"hidden",
    display:"block"
},Vt={
    letterSpacing:0,
    fontWeight:400
},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;
v.fn.extend({
    css:function(e,n){
        return v.access(this,function(e,n,r){
            return r!==t?v.style(e,n,r):v.css(e,n)
            },e,n,arguments.length>1)
        },
    show:function(){
        return Yt(this,!0)
        },
    hide:function(){
        return Yt(this)
        },
    toggle:function(e,t){
        var n=typeof e=="boolean";
        return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){
            (n?e:Gt(this))?v(this).show():v(this).hide()
            })
        }
    }),v.extend({
    cssHooks:{
        opacity:{
            get:function(e,t){
                if(t){
                    var n=Dt(e,"opacity");
                    return n===""?"1":n
                    }
                }
        }
},
cssNumber:{
    fillOpacity:!0,
    fontWeight:!0,
    lineHeight:!0,
    opacity:!0,
    orphans:!0,
    widows:!0,
    zIndex:!0,
    zoom:!0
    },
cssProps:{
    "float":v.support.cssFloat?"cssFloat":"styleFloat"
    },
style:function(e,n,r,i){
    if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;
    var s,o,u,a=v.camelCase(n),f=e.style;
    n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];
    if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];
    o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");
    if(r==null||o==="number"&&isNaN(r))return;
    o==="number"&&!v.cssNumber[a]&&(r+="px");
    if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{
        f[n]=r
        }catch(l){}
    },
css:function(e,n,r,i){
    var s,o,u,a=v.camelCase(n);
    return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s
    },
swap:function(e,t,n){
    var r,i,s={};
    
    for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);
    for(i in t)e.style[i]=s[i];return r
    }
}),e.getComputedStyle?Dt=function(t,n){
    var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;
    return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r
    }:i.documentElement.currentStyle&&(Dt=function(e,t){
    var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;
    return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i
    }),v.each(["height","width"],function(e,t){
    v.cssHooks[t]={
        get:function(e,n,r){
            if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){
                return tn(e,t,r)
                }):tn(e,t,r)
                },
        set:function(e,n,r){
            return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)
            }
        }
}),v.support.opacity||(v.cssHooks.opacity={
    get:function(e,t){
        return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""
        },
    set:function(e,t){
        var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";
        n.zoom=1;
        if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){
            n.removeAttribute("filter");
            if(r&&!r.filter)return
        }
        n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i
        }
    }),v(function(){
    v.support.reliableMarginRight||(v.cssHooks.marginRight={
        get:function(e,t){
            return v.swap(e,{
                display:"inline-block"
            },function(){
                if(t)return Dt(e,"marginRight")
                    })
            }
        }),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){
    v.cssHooks[t]={
        get:function(e,n){
            if(n){
                var r=Dt(e,t);
                return Ut.test(r)?v(e).position()[t]+"px":r
                }
            }
    }
})
}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){
    return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"
    },v.expr.filters.visible=function(e){
    return!v.expr.filters.hidden(e)
    }),v.each({
    margin:"",
    padding:"",
    border:"Width"
},function(e,t){
    v.cssHooks[e+t]={
        expand:function(n){
            var r,i=typeof n=="string"?n.split(" "):[n],s={};
            
            for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];
            return s
            }
        },qt.test(e)||(v.cssHooks[e+t].set=Zt)
    });
var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;
v.fn.extend({
    serialize:function(){
        return v.param(this.serializeArray())
        },
    serializeArray:function(){
        return this.map(function(){
            return this.elements?v.makeArray(this.elements):this
            }).filter(function(){
            return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))
            }).map(function(e,t){
            var n=v(this).val();
            return n==null?null:v.isArray(n)?v.map(n,function(e,n){
                return{
                    name:t.name,
                    value:e.replace(on,"\r\n")
                    }
                }):{
            name:t.name,
            value:n.replace(on,"\r\n")
            }
        }).get()
    }
}),v.param=function(e,n){
    var r,i=[],s=function(e,t){
        t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)
        };
        
    n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);
    if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){
        s(this.name,this.value)
        });else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")
    };
    
var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];
try{
    cn=s.href
    }catch(Nn){
    cn=i.createElement("a"),cn.href="",cn=cn.href
    }
    ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){
    if(typeof e!="string"&&En)return En.apply(this,arguments);
    if(!this.length)return this;
    var i,s,o,u=this,a=e.indexOf(" ");
    return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({
        url:e,
        type:s,
        dataType:"html",
        data:n,
        complete:function(e,t){
            r&&u.each(r,o||[e.responseText,t,e])
            }
        }).done(function(e){
    o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)
    }),this
},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){
    v.fn[t]=function(e){
        return this.on(t,e)
        }
    }),v.each(["get","post"],function(e,n){
    v[n]=function(e,r,i,s){
        return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({
            type:n,
            url:e,
            data:r,
            success:i,
            dataType:s
        })
        }
    }),v.extend({
    getScript:function(e,n){
        return v.get(e,t,n,"script")
        },
    getJSON:function(e,t,n){
        return v.get(e,t,n,"json")
        },
    ajaxSetup:function(e,t){
        return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e
        },
    ajaxSettings:{
        url:cn,
        isLocal:dn.test(ln[1]),
        global:!0,
        type:"GET",
        contentType:"application/x-www-form-urlencoded; charset=UTF-8",
        processData:!0,
        async:!0,
        accepts:{
            xml:"application/xml, text/xml",
            html:"text/html",
            text:"text/plain",
            json:"application/json, text/javascript",
            "*":Tn
        },
        contents:{
            xml:/xml/,
            html:/html/,
            json:/json/
        },
        responseFields:{
            xml:"responseXML",
            text:"responseText"
        },
        converters:{
            "* text":e.String,
            "text html":!0,
            "text json":v.parseJSON,
            "text xml":v.parseXML
            },
        flatOptions:{
            context:!0,
            url:!0
            }
        },
ajaxPrefilter:Cn(Sn),
    ajaxTransport:Cn(xn),
    ajax:function(e,n){
    function T(e,n,s,a){
        var l,y,b,w,S,T=n;
        if(E===2)return;
        E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));
        if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);
        else{
            b=T;
            if(!T||e)T="error",e<0&&(e=0)
                }
                x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))
        }
        typeof e=="object"&&(n=e,e=t),n=n||{};
    
    var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={
        readyState:0,
        setRequestHeader:function(e,t){
            if(!E){
                var n=e.toLowerCase();
                e=w[n]=w[n]||e,b[e]=t
                }
                return this
            },
        getAllResponseHeaders:function(){
            return E===2?i:null
            },
        getResponseHeader:function(e){
            var n;
            if(E===2){
                if(!s){
                    s={};
                    while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]
                        }
                        n=s[e.toLowerCase()]
                }
                return n===t?null:n
            },
        overrideMimeType:function(e){
            return E||(c.mimeType=e),this
            },
        abort:function(e){
            return e=e||S,o&&o.abort(e),T(0,e),this
            }
        };
    
d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){
    if(e){
        var t;
        if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)
            }
            return this
    },c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);
    if(E===2)return x;
    f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");
    if(!c.hasContent){
    c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;
    if(c.cache===!1){
        var N=v.now(),C=c.url.replace(bn,"$1_="+N);
        c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")
        }
    }(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);
for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){
    S="abort";
    for(l in{
        success:1,
        error:1,
        complete:1
    })x[l](c[l]);o=kn(xn,c,n,x);
    if(!o)T(-1,"No Transport");
    else{
        x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){
            x.abort("timeout")
            },c.timeout));
        try{
            E=1,o.send(b,T)
            }catch(k){
            if(!(E<2))throw k;
            T(-1,k)
            }
        }
    return x
}
return x.abort()
},
active:0,
lastModified:{},
etag:{}
});
var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();
v.ajaxSetup({
    jsonp:"callback",
    jsonpCallback:function(){
        var e=Mn.pop()||v.expando+"_"+Pn++;
        return this[e]=!0,e
        }
    }),v.ajaxPrefilter("json jsonp",function(n,r,i){
    var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);
    if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){
        return u||v.error(s+" was not called"),u[0]
        },n.dataTypes[0]="json",e[s]=function(){
        u=arguments
        },i.always(function(){
        e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t
        }),"script"
    }),v.ajaxSetup({
    accepts:{
        script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents:{
        script:/javascript|ecmascript/
    },
    converters:{
        "text script":function(e){
            return v.globalEval(e),e
            }
        }
}),v.ajaxPrefilter("script",function(e){
    e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)
    }),v.ajaxTransport("script",function(e){
    if(e.crossDomain){
        var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;
        return{
            send:function(s,o){
                n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){
                    if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")
                        },r.insertBefore(n,r.firstChild)
                },
            abort:function(){
                n&&n.onload(0,1)
                }
            }
    }
});
var Hn,Bn=e.ActiveXObject?function(){
    for(var e in Hn)Hn[e](0,1)
        }:!1,jn=0;
v.ajaxSettings.xhr=e.ActiveXObject?function(){
    return!this.isLocal&&Fn()||In()
    }:Fn,function(e){
    v.extend(v.support,{
        ajax:!!e,
        cors:!!e&&"withCredentials"in e
        })
    }(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){
    if(!n.crossDomain||v.support.cors){
        var r;
        return{
            send:function(i,s){
                var o,u,a=n.xhr();
                n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);
                if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");
                try{
                    for(u in i)a.setRequestHeader(u,i[u])
                        }catch(f){}
                a.send(n.hasContent&&n.data||null),r=function(e,i){
                    var u,f,l,c,h;
                    try{
                        if(r&&(i||a.readyState===4)){
                            r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);
                            if(i)a.readyState!==4&&a.abort();
                            else{
                                u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);
                                try{
                                    c.text=a.responseText
                                    }catch(p){}
                                try{
                                    f=a.statusText
                                    }catch(p){
                                    f=""
                                    }!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)
                                }
                            }
                    }catch(d){
                i||s(-1,d)
                }
                c&&s(u,f,c,l)
            },n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()
        },
    abort:function(){
        r&&r(0,1)
        }
    }
}
});
var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={
    "*":[function(e,t){
        var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;
        if(s){
            n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");
            if(r!=="px"&&u){
                u=v.css(i.elem,e,!0)||n||1;
                do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)
            }
            i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n
            }
            return i
        }]
    };
    
v.Animation=v.extend(Kn,{
    tweener:function(e,t){
        v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");
        var n,r=0,i=e.length;
        for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)
            },
    prefilter:function(e,t){
        t?Xn.unshift(e):Xn.push(e)
        }
    }),v.Tween=Yn,Yn.prototype={
    constructor:Yn,
    init:function(e,t,n,r,i,s){
        this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")
        },
    cur:function(){
        var e=Yn.propHooks[this.prop];
        return e&&e.get?e.get(this):Yn.propHooks._default.get(this)
        },
    run:function(e){
        var t,n=Yn.propHooks[this.prop];
        return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this
        }
    },Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={
    _default:{
        get:function(e){
            var t;
            return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]
            },
        set:function(e){
            v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now
            }
        }
},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={
    set:function(e){
        e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)
        }
    },v.each(["toggle","show","hide"],function(e,t){
    var n=v.fn[t];
    v.fn[t]=function(r,i,s){
        return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)
        }
    }),v.fn.extend({
    fadeTo:function(e,t,n,r){
        return this.filter(Gt).css("opacity",0).show().end().animate({
            opacity:t
        },e,n,r)
        },
    animate:function(e,t,n,r){
        var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){
            var t=Kn(this,v.extend({},e),s);
            i&&t.stop(!0)
            };
            
        return i||s.queue===!1?this.each(o):this.queue(s.queue,o)
        },
    stop:function(e,n,r){
        var i=function(e){
            var t=e.stop;
            delete e.stop,t(r)
            };
            
        return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){
            var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);
            if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));
            (t||!r)&&v.dequeue(this,e)
            })
        }
    }),v.each({
    slideDown:Zn("show"),
    slideUp:Zn("hide"),
    slideToggle:Zn("toggle"),
    fadeIn:{
        opacity:"show"
    },
    fadeOut:{
        opacity:"hide"
    },
    fadeToggle:{
        opacity:"toggle"
    }
},function(e,t){
    v.fn[e]=function(e,n,r){
        return this.animate(t,e,n,r)
        }
    }),v.speed=function(e,t,n){
    var r=e&&typeof e=="object"?v.extend({},e):{
        complete:n||!n&&t||v.isFunction(e)&&e,
        duration:e,
        easing:n&&t||t&&!v.isFunction(t)&&t
        };
        
    r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;
    if(r.queue==null||r.queue===!0)r.queue="fx";
    return r.old=r.complete,r.complete=function(){
        v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)
        },r
    },v.easing={
    linear:function(e){
        return e
        },
    swing:function(e){
        return.5-Math.cos(e*Math.PI)/2
        }
    },v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){
    var e,n=v.timers,r=0;
    qn=v.now();
    for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);
    n.length||v.fx.stop(),qn=t
    },v.fx.timer=function(e){
    e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))
    },v.fx.interval=13,v.fx.stop=function(){
    clearInterval(Rn),Rn=null
    },v.fx.speeds={
    slow:600,
    fast:200,
    _default:400
},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){
    return v.grep(v.timers,function(t){
        return e===t.elem
        }).length
    });
var er=/^(?:body|html)$/i;
v.fn.offset=function(e){
    if(arguments.length)return e===t?this:this.each(function(t){
        v.offset.setOffset(this,e,t)
        });
    var n,r,i,s,o,u,a,f={
        top:0,
        left:0
    },l=this[0],c=l&&l.ownerDocument;
    if(!c)return;
    return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{
        top:f.top+u-s,
        left:f.left+a-o
        }):f)
    },v.offset={
    bodyOffset:function(e){
        var t=e.offsetTop,n=e.offsetLeft;
        return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{
            top:t,
            left:n
        }
    },
setOffset:function(e,t,n){
    var r=v.css(e,"position");
    r==="static"&&(e.style.position="relative");
    var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;
    a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)
    }
},v.fn.extend({
    position:function(){
        if(!this[0])return;
        var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{
            top:0,
            left:0
        }:t.offset();
        return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{
            top:n.top-r.top,
            left:n.left-r.left
            }
        },
offsetParent:function(){
    return this.map(function(){
        var e=this.offsetParent||i.body;
        while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;
        return e||i.body
        })
    }
}),v.each({
    scrollLeft:"pageXOffset",
    scrollTop:"pageYOffset"
},function(e,n){
    var r=/Y/.test(n);
    v.fn[e]=function(i){
        return v.access(this,function(e,i,s){
            var o=tr(e);
            if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];
            o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s
            },e,i,arguments.length,null)
        }
    }),v.each({
    Height:"height",
    Width:"width"
},function(e,n){
    v.each({
        padding:"inner"+e,
        content:n,
        "":"outer"+e
        },function(r,i){
        v.fn[i]=function(i,s){
            var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");
            return v.access(this,function(n,r,i){
                var s;
                return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)
                },n,o?i:t,o,null)
            }
        })
}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){
    return v
    })
})(window);
var HazmatBuilder=function(e,t){
    var n=function(t){
        this.config=t||{};
        
        if(!e.isObject(this.config))throw new Error("Hazmat is not initialized properly");
        this.fail=e.isFunction(this.config.fail)?this.config.fail:n.fail,this.warn=e.isFunction(this.config.warn)?this.config.warn:n.warn,this.log=e.isFunction(this.config.log)?this.config.log:n.log
        };
        
    return e.extend(n,{
        ID_REGEX:/^[\_\-A-Za-z0-9]+$/,
        create:function(e){
            return new n(e)
            },
        noConflict:function(){
            return t.Hazmat=n.original,n
            },
        log:function(){
            //window.console&&e.isFunction(window.console.log)&&window.console.log.apply(window.console,arguments)
            },
        fail:function(e,t){
            var r=e||"",i=t||{};
            
            throw n.log("Hazmat Failure::",r,i),new Error("Hazmat Failure "+r.toString())
            },
        warn:function(e,t){
            var r=e||"",i=t||{};
            
            n.log("Hazmat Warning::",r,i)
            },
        fixDomId:function(t){
            return e.isString(t)&&t.length>0?t.replace(/[^A-Za-z0-9\_]/g,""):null
            },
        isDomId:function(t){
            return e.isString(t)&&t.match(n.ID_REGEX)
            },
        __placeholder:!0
        }),e.extend(n.prototype,{
        _safeValue:function(t,n,r,i){
            var s=r;
            e.isFunction(r)&&(r=e.once(function(){
                try{
                    return s.apply(this,arguments)
                    }catch(e){}
            }));
        if(i.checker(n))return n;
        if(i.evalFallback&&e.isFunction(r)&&i.checker(r(n)))return this.warn("Expected valid "+i.name+" for "+t+" but was able to sanitize it:",[n,r(n)]),r(n);
        if(i.checker(s))return this.warn("Expected valid "+i.name+" for "+t+" but was able to fallback to default value:",[n,s]),s;
        this.fail("Expected valid "+i.name+" for "+t+" but received:",n)
        },
    safeString:function(t,n,r){
        return this._safeValue(t,n,r,{
            name:"String",
            checker:e.isString,
            evalFallback:!0
            })
        },
    safeStringOrNull:function(t,n,r){
        return n==null?n:this._safeValue(t,n,r,{
            name:"String",
            checker:e.isString,
            evalFallback:!0
            })
        },
    safeDomId:function(e,t,r){
        return this._safeValue(e,t,r,{
            name:"DOM ID",
            checker:n.isDomId,
            evalFallback:!0
            })
        },
    safeFunction:function(t,n,r){
        return this._safeValue(t,n,r,{
            name:"Function",
            checker:e.isFunction,
            evalFallback:!1
            })
        },
    safeFunctionOrNull:function(t,n,r){
        return n==null?n:this._safeValue(t,n,r,{
            name:"Function",
            checker:e.isFunction,
            evalFallback:!1
            })
        },
    safeObject:function(t,n,r){
        return this._safeValue(t,n,r,{
            name:"Object",
            checker:e.isObject,
            evalFallback:!1
            })
        },
    safeObjectOrNull:function(t,n,r){
        return n==null?n:this._safeValue(t,n,r,{
            name:"Object",
            checker:e.isObject,
            evalFallback:!1
            })
        },
    safeArray:function(t,n,r){
        return this._safeValue(t,n,r,{
            name:"Array",
            checker:e.isArray,
            evalFallback:!1
            })
        },
    safeArrayOfElements:function(t,n,r,i){
        var s=this._safeValue(t,n,i,{
            name:"Array",
            checker:e.isArray,
            evalFallback:!1
            });
        return e.map(s,r)
        },
    __placeholder:!0
    }),n
};

if(typeof window!="undefined"&&typeof window._!="undefined"){
    var hazmat=HazmatBuilder(window._,window);
    hazmat.original=window.Hazmat,window.Hazmat=hazmat
    }else{
    var _=require("underscore"),hazmat=HazmatBuilder(_);
    _.extend(exports,hazmat)
    };
/*!  SWFObject v2.2 <http://code.google.com/p/swfobject/>
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){
    function f(e){
        var t=a.pv,n=e.split(".");
        return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1
        }
        var e="undefined",t="object",n="Shockwave Flash",r="ShockwaveFlash.ShockwaveFlash",i="application/x-shockwave-flash",s=window,o=document,u=navigator,a=function(){
        var a=typeof o.getElementById!=e&&typeof o.getElementsByTagName!=e&&typeof o.createElement!=e,f=u.userAgent.toLowerCase(),l=u.platform.toLowerCase(),c=l?/win/.test(l):/win/.test(f),h=l?/mac/.test(l):/mac/.test(f),p=/webkit/.test(f)?parseFloat(f.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,d=!1,v=[0,0,0],m=null;
        if(typeof u.plugins!=e&&typeof u.plugins[n]==t)m=u.plugins[n].description,m&&(typeof u.mimeTypes==e||!u.mimeTypes[i]||!!u.mimeTypes[i].enabledPlugin)&&(d=!1,m=m.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),v[0]=parseInt(m.replace(/^(.*)\..*$/,"$1"),10),v[1]=parseInt(m.replace(/^.*\.(.*)\s.*$/,"$1"),10),v[2]=/[a-zA-Z]/.test(m)?parseInt(m.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);
        else if(typeof s.ActiveXObject!=e)try{
            var g=new ActiveXObject(r);
            g&&(m=g.GetVariable("$version"),m&&(d=!0,m=m.split(" ")[1].split(","),v=[parseInt(m[0],10),parseInt(m[1],10),parseInt(m[2],10)]))
            }catch(y){}
            return{
            w3:a,
            pv:v,
            wk:p,
            ie:d,
            win:c,
            mac:h
        }
    }();
return{
    ua:a,
    getFlashPlayerVersion:function(){
        return{
            major:a.pv[0],
            minor:a.pv[1],
            release:a.pv[2]
            }
        },
hasFlashPlayerVersion:f
}
}();
(function(){
    var e=8,t="",n=0,r=function(t){
        var n=[],r=(1<<e)-1,i=t.length*e,s;
        for(s=0;s<i;s+=e)n[s>>5]|=(t.charCodeAt(s/e)&r)<<32-e-s%32;
        return n
        },i=function(e){
        var t=[],n=e.length,r,i;
        for(r=0;r<n;r+=2){
            i=parseInt(e.substr(r,2),16);
            if(!!isNaN(i))return"INVALID HEX STRING";
            t[r>>3]|=i<<24-4*(r%8)
            }
            return t
        },s=function(e){
        var t=n?"0123456789ABCDEF":"0123456789abcdef",r="",i=e.length*4,s,o;
        for(s=0;s<i;s+=1)o=e[s>>2]>>(3-s%4)*8,r+=t.charAt(o>>4&15)+t.charAt(o&15);
        return r
        },o=function(e){
        var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="",i=e.length*4,s,o,u;
        for(s=0;s<i;s+=3){
            u=(e[s>>2]>>8*(3-s%4)&255)<<16|(e[s+1>>2]>>8*(3-(s+1)%4)&255)<<8|e[s+2>>2]>>8*(3-(s+2)%4)&255;
            for(o=0;o<4;o+=1)s*8+o*6<=e.length*32?r+=n.charAt(u>>6*(3-o)&63):r+=t
                }
                return r
        },u=function(e,t){
        return e>>>t|e<<32-t
        },a=function(e,t){
        return e>>>t
        },f=function(e,t,n){
        return e&t^~e&n
        },l=function(e,t,n){
        return e&t^e&n^t&n
        },c=function(e){
        return u(e,2)^u(e,13)^u(e,22)
        },h=function(e){
        return u(e,6)^u(e,11)^u(e,25)
        },p=function(e){
        return u(e,7)^u(e,18)^a(e,3)
        },d=function(e){
        return u(e,17)^u(e,19)^a(e,10)
        },v=function(e,t){
        var n=(e&65535)+(t&65535),r=(e>>>16)+(t>>>16)+(n>>>16);
        return(r&65535)<<16|n&65535
        },m=function(e,t,n,r){
        var i=(e&65535)+(t&65535)+(n&65535)+(r&65535),s=(e>>>16)+(t>>>16)+(n>>>16)+(r>>>16)+(i>>>16);
        return(s&65535)<<16|i&65535
        },g=function(e,t,n,r,i){
        var s=(e&65535)+(t&65535)+(n&65535)+(r&65535)+(i&65535),o=(e>>>16)+(t>>>16)+(n>>>16)+(r>>>16)+(i>>>16)+(s>>>16);
        return(o&65535)<<16|s&65535
        },y=function(e,t,n){
        var r,i,s,o,u,a,y,b,w,E,S,x,T,N,C,k=[],L;
        if(n==="SHA-224"||n==="SHA-256")x=(t+65>>9<<4)+15,C=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],n==="SHA-224"?S=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]:S=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];
        e[t>>5]|=128<<24-t%32,e[x]=t,L=e.length;
        for(T=0;T<L;T+=16){
            r=S[0],i=S[1],s=S[2],o=S[3],u=S[4],a=S[5],y=S[6],b=S[7];
            for(N=0;N<64;N+=1)N<16?k[N]=e[N+T]:k[N]=m(d(k[N-2]),k[N-7],p(k[N-15]),k[N-16]),w=g(b,h(u),f(u,a,y),C[N],k[N]),E=v(c(r),l(r,i,s)),b=y,y=a,a=u,u=v(o,w),o=s,s=i,i=r,r=v(w,E);
            S[0]=v(r,S[0]),S[1]=v(i,S[1]),S[2]=v(s,S[2]),S[3]=v(o,S[3]),S[4]=v(u,S[4]),S[5]=v(a,S[5]),S[6]=v(y,S[6]),S[7]=v(b,S[7])
            }
            switch(n){
            case"SHA-224":
                return[S[0],S[1],S[2],S[3],S[4],S[5],S[6]];
            case"SHA-256":
                return S;
            default:
                return[]
                }
            },b=function(t,n){
    this.sha224=null,this.sha256=null,this.strBinLen=null,this.strToHash=null;
    if("HEX"===n){
        if(0!==t.length%2)return"TEXT MUST BE IN BYTE INCREMENTS";
        this.strBinLen=t.length*4,this.strToHash=i(t)
        }else{
        if("ASCII"!==n&&"undefined"!=typeof n)return"UNKNOWN TEXT INPUT TYPE";
        this.strBinLen=t.length*e,this.strToHash=r(t)
        }
    };

b.prototype={
    getHash:function(e,t){
        var n=null,r=this.strToHash.slice();
        switch(t){
            case"HEX":
                n=s;
                break;
            case"B64":
                n=o;
                break;
            default:
                return"FORMAT NOT RECOGNIZED"
                }
                switch(e){
            case"SHA-224":
                return null===this.sha224&&(this.sha224=y(r,this.strBinLen,e)),n(this.sha224);
            case"SHA-256":
                return null===this.sha256&&(this.sha256=y(r,this.strBinLen,e)),n(this.sha256);
            default:
                return"HASH NOT RECOGNIZED"
                }
            },
getHMAC:function(t,n,u,a){
    var f,l,c,h,p,d,v=[],m=[];
    switch(a){
        case"HEX":
            f=s;
            break;
        case"B64":
            f=o;
            break;
        default:
            return"FORMAT NOT RECOGNIZED"
            }
            switch(u){
        case"SHA-224":
            d=224;
            break;
        case"SHA-256":
            d=256;
            break;
        default:
            return"HASH NOT RECOGNIZED"
            }
            if("HEX"===n){
        if(0!==t.length%2)return"KEY MUST BE IN BYTE INCREMENTS";
        l=i(t),p=t.length*4
        }else{
        if("ASCII"!==n)return"UNKNOWN KEY INPUT TYPE";
        l=r(t),p=t.length*e
        }
        64<p/8?(l=y(l,p,u),l[15]&=4294967040):64>p/8&&(l[15]&=4294967040);
    for(c=0;c<=15;c+=1)v[c]=l[c]^909522486,m[c]=l[c]^1549556828;
    return h=y(v.concat(this.strToHash),512+this.strBinLen,u),h=y(m.concat(h),512+d,u),f(h)
    }
},window.jsSHA=b
})();
window.LZW={
    encode:function(e){
        var t={},n=(e+"").split(""),r=[],i,s=n[0],o=256;
        for(var u=1;u<n.length;u++)i=n[u],t[s+i]!=null?s+=i:(r.push(s.length>1?t[s]:s.charCodeAt(0)),t[s+i]=o,o++,s=i);
        r.push(s.length>1?t[s]:s.charCodeAt(0));
        for(var u=0;u<r.length;u++)r[u]=String.fromCharCode(r[u]);
        return r.join("")
        },
    decode:function(e){
        var t={},n=(e+"").split(""),r=n[0],i=r,s=[r],o=256,u;
        for(var a=1;a<n.length;a++){
            var f=n[a].charCodeAt(0);
            f<256?u=n[a]:u=t[f]?t[f]:i+r,s.push(u),r=u.charAt(0),t[o]=i+r,o++,i=u
            }
            return s.join("")
        }
    };
(function(e){
    e._=window._.noConflict(),e.$=window.$.noConflict(!0),e.HM=window.Hazmat.noConflict().create(),e.swfobject=swfobject,e.jsSHA=window.jsSHA,e.LZW=window.LZW;
    if(!window.console||!window.console.log)window.console=window.console||{},window.console.log=function(){}
    })(OO);
(function(e,t,n){
    e.playerParams=n.safeObject("environment.playerParams",e.playerParams,{}),e.playerParams.platform=n.safeString("environment.playerParams.platform",e.playerParams.platform,"flash"),e.playerParams.tweaks=n.safeString("environment.playerParams.tweaks",e.playerParams.tweaks,""),e.playerParams.tweaks=e.playerParams.tweaks.split(","),e.tweaks={},e.tweaks["android-enable-hls"]=t.contains(e.playerParams.tweaks,"android-enable-hls"),e.playerParams.maxAdsTimeout=e.playerParams.maxAdsTimeout||5,e.playerParams.maxVastWrapperDepth=e.playerParams.maxVastWrapperDepth||3,e.playerParams.minLiveSeekWindow=e.playerParams.minLiveSeekWindow||10,e.guid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){
        var t=Math.random()*16|0,n=e=="x"?t:t&3|8;
        return n.toString(16)
        }),e.playerCount=0,e.isProd=e.playerParams.environment&&e.playerParams.environment.match(/^prod/i),e.platform=window.navigator.platform,e.os=window.navigator.appVersion,e.supportsVideo=!!document.createElement("video").canPlayType,e.supportsFlash=e.swfobject&&e.swfobject.getFlashPlayerVersion&&e.swfobject.getFlashPlayerVersion().major>=10&&!e.os.match(/Android/),e.browserSupportsCors=function(){
        try{
            return t.has(new XMLHttpRequest,"withCredentials")||t.has(XMLHttpRequest.prototype,"withCredentials")
            }catch(e){
            return!1
            }
        }(),e.isIos=function(){
    return e.platform.match(/iPhone/)||e.platform.match(/iPad/)||e.platform.match(/iPod/)
    }(),e.isIphone=function(){
    return e.platform.match(/iPhone/)||e.platform.match(/iPod/)
    }(),e.isIpad=function(){
    return e.platform.match(/iPad/)
    }(),e.isAndroid=function(){
    return e.os.match(/Android/)
    }(),e.isAndroid4Plus=function(){
    return e.isAndroid&&!e.os.match(/Android [23]/)
    }(),e.isRimDevice=function(){
    return e.os.match(/BlackBerry/)||e.os.match(/PlayBook/)
    }(),e.isFirefox=function(){
    return!!window.navigator.userAgent.match(/Firefox/)
    }(),e.isChrome=function(){
    return!!window.navigator.userAgent.match(/Chrome/)
    }(),e.chromeMajorVersion=function(){
    try{
        return parseInt(window.navigator.userAgent.match(/Chrome.([0-9]*)/)[1],10)
        }catch(e){
        return null
        }
    }(),e.isChromecast=function(){
    return!!window.navigator.userAgent.match(/CrKey/)
    }(),e.isIE=function(){
    return!!window.navigator.userAgent.match(/MSIE/)||!!window.navigator.userAgent.match(/Trident/)
    }(),e.isIE11Plus=function(){
    if(!window.navigator.userAgent.match(/Trident/))return!1;
    var e=window.navigator.userAgent.match(/rv:(\d*)/),t=e&&e[1];
    return t>=11
    }(),e.isWinPhone=function(){
    return!!e.os.match(/Windows Phone/)||!!e.os.match(/ZuneWP/)||!!e.os.match(/XBLWP/)
    }(),e.isSmartTV=function(){
    return!!window.navigator.userAgent.match(/SmartTV/)||!!window.navigator.userAgent.match(/NetCast/)
    }(),e.isMacOs=function(){
    return!e.isIos&&!!e.os.match(/Mac/)
    }(),e.isMacOsLionOrLater=function(){
    var t=e.os.match(/Mac OS X ([0-9]+)_([0-9]+)/);
    return t==null||t.length<3?!1:parseInt(t[1],10)>=10&&parseInt(t[2],10)>=7
    }(),e.isKindleHD=function(){
    return!!e.os.match(/Silk\/2/)
    }(),e.supportAds=function(){
    return!e.isWinPhone&&!e.os.match(/Android [23]/)
    }(),e.allowGesture=function(){
    return e.isIos
    }(),e.allowAutoPlay=function(){
    return!e.isIos&&!e.isAndroid
    }(),e.supportTouch=function(){
    return document.documentElement.hasOwnProperty&&document.documentElement.hasOwnProperty("ontouchstart")?!0:!1
    }(),e.docDomain=function(){
    var t=null;
    try{
        t=document.domain
        }catch(n){}
    return e._.isEmpty(t)?e.isSmartTV?"SmartTV":"unknown":t
    }(),e.uiParadigm=function(){
    var t="tablet";
    if(e.playerParams.platform==="html5-nativeui")t="mobile-native";
    else if(e.isAndroid4Plus&&e.tweaks["android-enable-hls"])t="mobile-native";
    else if(e.isIphone)t="mobile-native";
    else if(e.os.match(/BlackBerry/))t="mobile-native";
    else if(e.os.match(/iPad/))t="tablet";
    else if(e.isKindleHD)t="mobile-native";
    else if(e.os.match(/Silk/))t="mobile";
    else if(e.os.match(/Android 2/))window.orientation%180==0&&window.outerWidth/window.devicePixelRatio<=480?t="mobile":window.outerWidth/window.devicePixelRatio<=560&&(t="mobile");
    else if(e.os.match(/Android/))t="tablet";
    else if(e.isWinPhone)t="mobile";
    else if(!!e.platform.match(/Mac/)||!!e.platform.match(/Win/)||!!e.platform.match(/Linux/))t="desktop";
    return t
    }(),e.supportMultiVideo=function(){
    return e.isAndroid&&!e.isChrome?!1:!e.isIos&&!e.os.match(/Android [23]/)
    }(),e.supportedVideoTypes=function(){
    if(window.navigator.userAgent.match(/SonyCEBrowser/))return{
        m3u8:!0
        };
        
    if(!e.isAndroid){
        if(e.isSmartTV)return{
            mp4:!0
            };
            
        if(e.isChromecast)return{
            smooth:!0
            };
            
        var t=document.createElement("video");
        return typeof t.canPlayType!="function"?{}:{
            m3u8:(!!t.canPlayType("application/vnd.apple.mpegurl")||!!t.canPlayType("application/x-mpegURL"))&&!e.isRimDevice&&(!e.isMacOs||e.isMacOsLionOrLater),
            mp4:!!t.canPlayType("video/mp4"),
            webm:!!t.canPlayType("video/webm")
            }
        }
    return e.tweaks["android-enable-hls"]&&e.isAndroid4Plus?{
    m3u8:!0,
    mp4:!0
    }:{
    mp4:!0
    }
}(),e.supportedVideoProfiles=function(){
    return e.isIos||e.isAndroid?"baseline":null
    }(),e.device=function(){
    var t="html5";
    return e.isIphone?t="iphone-html5":e.isIpad?t="ipad-html5":e.isAndroid?t="android-html5":e.isRimDevice?t="rim-html5":e.isWinPhone?t="winphone-html5":e.isSmartTV?t="smarttv-html5":e.isChromecast&&(t="generic"),t
    }(),e.environmentRequiredFeatures=function(){
    var n=[];
    return e.supportsFlash&&e.playerParams.platform=="osmf-priority"?(n.push("osmf-playback"),n.push("default-ui")):e.supportsVideo?e.playerParams.platform==="flash-only"||e.playerParams.platform==="flash-adset"?(n.push("flash-playback"),n.push("flash-ui")):!e.supportsFlash&&e.uiParadigm!="desktop"||e.playerParams.platform!=="flash"?e.supportsFlash&&t.indexOf(["flash-priority","html5-fallback"],e.playerParams.platform)!==-1?(n.push("flash-playback"),n.push("flash-ui")):e.isFirefox&&!e.supportedVideoTypes.mp4?(n.push("flash-playback"),n.push("flash-ui")):e.os.match(/Android 2/)?(n.push("android-ui"),n.push("html5-playback")):e.isChromecast||e.playerParams.platform=="html5-cast"?(n.push("cast-playback"),n.push("default-ui"),e.supportAds&&n.push("ads")):(n.push("html5-playback"),n.push("default-ui"),e.supportAds&&n.push("ads")):(n.push("flash-playback"),n.push("flash-ui")):(n.push("flash-playback"),n.push("flash-ui")),t.reduce(n,function(e,t){
        return e+t+" "
        },"")
    }(),e.supportMidRollAds=function(){
    return e.uiParadigm==="desktop"&&!e.isIos&&!e.isRimDevice
    }(),e.supportCookies=function(){
    document.cookie="ooyala_cookie_test=true";
    var e=document.cookie.indexOf("ooyala_cookie_test=true")>=0;
    return document.cookie="ooyala_cookie_test=; expires=Thu, 01 Jan 1970 00:00:00 GMT",e
    }(),e.isSSL=document.location.protocol=="https:",e.SERVER={
    API:e.isSSL?e.playerParams.api_ssl_server||"https://player-ssl.ooyala.com":e.playerParams.api_server||"http://player.ooyala.com",
    AUTH:e.isSSL?e.playerParams.auth_ssl_server||"https://player-ssl.ooyala.com/sas":e.playerParams.auth_server||"http://player.ooyala.com/sas",
    ANALYTICS:e.isSSL?e.playerParams.analytics_ssl_server||"https://player-ssl.ooyala.com":e.playerParams.analytics_server||"http://player.ooyala.com",
    HASTUR:e.isSSL?e.playerParams.hastur_ssl_server||(e.isProd?"https://l.ooyala.com/player_events":"https://l-staging.ooyala.com/player_events"):e.playerParams.hastur_server||(e.isProd?"http://l.ooyala.com/player_events":"http://l-staging.ooyala.com/player_events")
    },e.requiredInEnvironment=function(t){
    return!!e.environmentRequiredFeatures.match(new RegExp(t))
    },e.chromeExtensionEnabled=document.getElementById("ooyala-extension-installed")?!0:!1
})(OO,OO._,OO.HM);
(function(e,t,n){
    window.XDomainRequest&&e.$.ajaxTransport(function(t){
        if(t.crossDomain&&t.async){
            t.timeout&&(t.xdrTimeout=t.timeout,delete t.timeout);
            var n;
            return{
                send:function(r,i){
                    function o(t,r,s,o){
                        n.onload=n.onerror=n.ontimeout=e.$.noop,n=undefined,i(t,r,s,o)
                        }
                        n=new XDomainRequest,n.open(t.type,t.url),n.onload=function(){
                        o(200,"OK",{
                            text:n.responseText
                            },"Content-Type: "+n.contentType)
                        },n.onerror=function(){
                        o(404,"Not Found")
                        },n.onprogress=function(){},t.xdrTimeout&&(n.ontimeout=function(){
                        o(0,"timeout")
                        },n.timeout=t.xdrTimeout),n.send(t.hasContent&&t.data||null)
                    },
                abort:function(){
                    n&&(n.onerror=e.$.noop(),n.abort())
                    }
                }
        }
    }),t.getScriptRetry=function(e,r,i){
    i=i||{};
    
    var s=i.error,o=["error","dataType","success"];
    n.each(o,function(e){
        delete i[e]
    });
    var u={
        url:e,
        type:"get",
        dataType:"script",
        success:r,
        cache:!0,
        timeout:5e3,
        tryCount:0,
        retryLimit:1,
        warning:!1,
        warningMessage:"Can not load URL",
        error:function(){
            this.tryCount<this.retryLimit?(this.tryCount++,t.ajax(this)):(this.warning&&alert(this.warningMessage),s&&s.apply(null,arguments))
            }
        };
    
n.extend(u,i),t.ajax(u)
}
})(OO,OO.$,OO._);
(function(e,t){
    e.STATE={
        LOADING:"loading",
        READY:"ready",
        PLAYING:"playing",
        PAUSED:"paused",
        BUFFERING:"buffering",
        ERROR:"error",
        DESTROYED:"destroyed",
        __end_marker:!0
        },e.EVENTS={
        PLAYER_CREATED:"playerCreated",
        PLAYER_EMBEDDED:"playerEmbedded",
        SET_EMBED_CODE:"setEmbedCode",
        EMBED_CODE_CHANGED:"embedCodeChanged",
        AUTH_TOKEN_CHANGED:"authTokenChanged",
        GUID_SET:"guidSet",
        WILL_FETCH_PLAYER_XML:"willFetchPlayerXml",
        PLAYER_XML_FETCHED:"playerXmlFetched",
        WILL_FETCH_CONTENT_TREE:"willFetchContentTree",
        CONTENT_TREE_FETCHED:"contentTreeFetched",
        WILL_FETCH_METADATA:"willFetchMetadata",
        METADATA_FETCHED:"metadataFetched",
        WILL_FETCH_AUTHORIZATION:"willFetchAuthorization",
        AUTHORIZATION_FETCHED:"authorizationFetched",
        WILL_FETCH_AD_AUTHORIZATION:"willFetchAdAuthorization",
        AD_AUTHORIZATION_FETCHED:"adAuthorizationFetched",
        PRELOAD_STREAM:"preloadStream",
        RELOAD_STREAM:"reloadStream",
        WILL_PLAY_STREAM:"willPlayStream",
        PLAY_STREAM:"playStream",
        PAUSE_STREAM:"pauseStream",
        STREAM_PLAYING:"streamPlaying",
        STREAM_PLAY_FAILED:"streamPlayFailed",
        STREAM_PAUSED:"streamPaused",
        STREAM_PLAYED:"streamPlayed",
        SEEK_STREAM:"seekStream",
        CAN_SEEK:"canSeek",
        PLAY_MIDROLL_STREAM:"playMidrollStream",
        MIDROLL_STREAM_PLAYED:"midrollStreamPlayed",
        WILL_RESUME_MAIN_VIDEO:"willResumeMainVideo",
        PLAYBACK_READY:"playbackReady",
        INITIAL_PLAY:"initialPlay",
        WILL_PLAY:"willPlay",
        PLAYHEAD_TIME_CHANGED:"playheadTimeChanged",
        BUFFERING:"buffering",
        BUFFERED:"buffered",
        DOWNLOADING:"downloading",
        BITRATE_INFO_AVAILABLE:"bitrateInfoAvailable",
        SET_TARGET_BITRATE:"setTargetBitrate",
        SET_TARGET_BITRATE_QUALITY:"setTargetBitrateQuality",
        BITRATE_CHANGED:"bitrateChanged",
        CLOSED_CAPTIONS_INFO_AVAILABLE:"closedCaptionsInfoAvailable",
        SET_CLOSED_CAPTIONS_LANGUAGE:"setClosedCaptionsLanguage",
        INSERT_CUE_POINT:"insertCuePoint",
        SCRUBBING:"scrubbing",
        SCRUBBED:"scrubbed",
        SEEK:"seek",
        SEEKED:"seeked",
        PLAY:"play",
        PLAYING:"playing",
        PLAY_FAILED:"playFailed",
        PAUSE:"pause",
        PAUSED:"paused",
        PLAYED:"played",
        TOGGLE_SHARE_PANEL:"toggleSharePanel",
        SHARE_PANEL_CLICKED:"sharePanelClicked",
        TOGGLE_INFO_PANEL:"toggleInfoPanel",
        INFO_PANEL_CLICKED:"infoPanelClicked",
        WILL_CHANGE_FULLSCREEN:"willChangeFullscreen",
        FULLSCREEN_CHANGED:"fullscreenChanged",
        SIZE_CHANGED:"sizeChanged",
        CHANGE_VOLUME:"changeVolume",
        VOLUME_CHANGED:"volumeChanged",
        CONTROLS_SHOWN:"controlsShown",
        CONTROLS_HIDDEN:"controlsHidden",
        PLAYER_CLICKED:"playerClicked",
        ERROR:"error",
        DESTROY:"destroy",
        WILL_PLAY_FROM_BEGINNING:"willPlayFromBeginning",
        DISABLE_PLAYBACK_CONTROLS:"disablePlaybackControls",
        ENABLE_PLAYBACK_CONTROLS:"enablePlaybackControls",
        WILL_FETCH_ADS:"willFetchAds",
        WILL_PLAY_ADS:"willPlayAds",
        WILL_PLAY_SINGLE_AD:"willPlaySingleAd",
        WILL_PAUSE_ADS:"willPauseAds",
        ADS_PLAYED:"adsPlayed",
        SINGLE_AD_PLAYED:"singleAdPlayed",
        ADS_ERROR:"adsError",
        ADS_CLICKED:"adsClicked",
        FIRST_AD_FETCHED:"firstAdFetched",
        AD_CONFIG_READY:"adConfigReady",
        WILL_SHOW_COMPANION_ADS:"willShowCompanionAds",
        AD_FETCH_FAILED:"adFetchFailed",
        MIDROLL_PLAY_FAILED:"midrollPlayFailed",
        SKIP_AD:"skipAd",
        UPDATE_AD_COUNTDOWN:"updateAdCountdown",
        ADOBE_PASS_WAITING_FOR_TOKEN:"adobePassWaitingForToken",
        ADOBE_PASS_TOKEN_FETCHED:"adobePassTokenFetched",
        ADOBE_PASS_AUTH_STATUS:"setAuthenticationStatus",
        REPORT_EXPERIMENT_VARIATIONS:"reportExperimentVariations",
        FETCH_STYLE:"fetchStyle",
        STYLE_FETCHED:"styleFetched",
        SET_STYLE:"setStyle",
        USE_SERVER_SIDE_HLS_ADS:"useServerSideHlsAds",
        LOAD_ALL_VAST_ADS:"loadAllVastAds",
        ADS_FILTERED:"adsFiltered",
        ADS_MANAGER_HANDLING_ADS:"adsManagerHandlingAds",
        ADS_MANAGER_FINISHED_ADS:"adsManagerFinishedAds",
        PAGE_UNLOAD_REQUESTED:"pageUnloadRequested",
        PAGE_PROBABLY_UNLOADING:"pageProbablyUnloading",
        __end_marker:!0
        },e.ERROR={
        API:{
            NETWORK:"network",
            SAS:{
                GENERIC:"sas",
                GEO:"geo",
                DOMAIN:"domain",
                FUTURE:"future",
                PAST:"past",
                DEVICE:"device",
                PROXY:"proxy",
                CONCURRENT_STREAMS:"concurrent_streams",
                INVALID_HEARTBEAT:"invalid_heartbeat",
                ERROR_DEVICE_INVALID_AUTH_TOKEN:"device_invalid_auth_token",
                ERROR_DEVICE_LIMIT_REACHED:"device_limit_reached",
                ERROR_DEVICE_BINDING_FAILED:"device_binding_failed",
                ERROR_DEVICE_ID_TOO_LONG:"device_id_too_long",
                ERROR_DRM_RIGHTS_SERVER_ERROR:"drm_server_error",
                ERROR_DRM_GENERAL_FAILURE:"drm_general_failure"
            },
            CONTENT_TREE:"content_tree",
            METADATA:"metadata"
        },
        PLAYBACK:{
            GENERIC:"playback",
            STREAM:"stream",
            LIVESTREAM:"livestream",
            NETWORK:"network_error"
        },
        CHROMECAST:{
            MANIFEST:"chromecast_manifest",
            MEDIAKEYS:"chromecast_mediakeys",
            NETWORK:"chromecast_network",
            PLAYBACK:"chromecast_playback"
        },
        UNPLAYABLE_CONTENT:"unplayable_content",
        INVALID_EXTERNAL_ID:"invalid_external_id",
        EMPTY_CHANNEL:"empty_channel",
        EMPTY_CHANNEL_SET:"empty_channel_set",
        CHANNEL_CONTENT:"channel_content"
    },e.URLS={
        ADOBE_AE_URL_STAGING:"https://entitlement.auth-staging.adobe.com/entitlement/AccessEnabler.js",
        ADOBE_AE_URL:"https://entitlement.auth.adobe.com/entitlement/AccessEnabler.js",
        TOKEN_VERIFIER_URL:t.template("/sas/embed_token/pcode/<%=embedCode%>?auth_type=adobepass&requestor=<%=requestor%>&token=<%=token%>&resource=<%=resource%>&mvpd_id=<%=mvpd_id%>"),
        VAST_PROXY:t.template("http://player.ooyala.com/nuplayer/mobile_vast_ads_proxy?callback=<%=cb%>&embed_code=<%=embedCode%>&expires=<%=expires%>&tag_url=<%=tagUrl%>"),
        EXTERNAL_ID:t.template("<%=server%>/player_api/v1/content_tree/external_id/<%=pcode%>/<%=externalId%>"),
        CONTENT_TREE:t.template("<%=server%>/player_api/v1/content_tree/embed_code/<%=pcode%>/<%=embedCode%>"),
        METADATA:t.template("<%=server%>/player_api/v1/metadata/embed_code/<%=playerBrandingId%>/<%=embedCode%>?videoPcode=<%=pcode%>"),
        SAS:t.template("<%=server%>/player_api/v1/authorization/embed_code/<%=pcode%>/<%=embedCode%>"),
        ANALYTICS:t.template("<%=server%>/reporter.js"),
        PLAYER_XML:t.template("<%=server%>/nuplayer?embedCode=<%=embedCode%>&playerBrandingId=<%=playerBrandingId%>"),
        PLAYER_SWF:t.template("<%=server%>?version=2&player=<%=player%>&embedType=<%=embedType%>&embedStyle=<%=embedStyle%><%=locale%><%=params%>"),
        __end_marker:!0
        },e.CSS={
        VISIBLE_POSITION:"0px",
        INVISIBLE_POSITION:"-100000px",
        SUPER_Z_INDEX:2e4,
        TRANSPARENT_COLOR:"rgba(255, 255, 255, 0)",
        __end_marker:!0
        },e.TEMPLATES={
        RANDOM_PLACE_HOLDER:["[place_random_number_here]","<now>","[timestamp]","<rand-num>","[cache_buster]","[random]"],
        REFERAK_PLACE_HOLDER:["[referrer_url]","[LR_URL]"],
        FLASH:'         <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"              id="<%= playerId %>" class="video" width="100%" height="100%">          <param name="movie" value="<%= swfUrl %>" />          <!--[if !IE]>-->          <object type="application/x-shockwave-flash" id="<%= playerId %>_internal" data="<%= swfUrl %>"              width="100%" height="100%">          <!--<![endif]-->          <param name="allowScriptAccess" value="always">          <param name="allowFullScreen" value="true">          <param name="bgcolor" value="#000000">          <param name="wmode" value="<%= wmode %>">          <param name="flashvars" value="<%= flashVars %>">           <p>Please upgrade your browser to view HTML 5 content</p>          <!--[if !IE]>-->          </object>          <!--<![endif]-->         </object>         ',
        FLASH_IE:'            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"                 id="<%= playerId %>" class="video" width="100%" height="100%">             <param name="movie" value="<%= swfUrl %>" />             <param name="allowScriptAccess" value="always">             <param name="allowFullScreen" value="true">             <param name="bgcolor" value="#000000">             <param name="wmode" value="<%= wmode %>">             <param name="flashvars" value="<%= flashVars %>">              <p>Please upgrade your browser to view HTML 5 content</p>            </object>            ',
        MESSAGE:'                  <table width="100%" height="100%" bgcolor="black" style="padding-left:55px; padding-right:55px;                   background-color:black; color: white;">                  <tbody>                  <tr valign="middle">                  <td align="right"><span style="font-family:Arial; font-size:20px">                  <%= message %>                  </span></td></tr></tbody></table>                  ',
        FLASH_INSTALL:'                        <div style="color:white">You need to have the Adobe Flash Player to view this content.</div>                        <div style="font-size:16px;"><a href="http://www.adobe.com/go/getflash/" style="color:white">Please click here to continue.</a></div>                        ',
        __end_marker:!0
        },e.CONSTANTS={
        STANDALONE_AD_HOLDER:"third_party_standalone_ad_holder",
        AD_PLAY_COUNT_KEY:"oo_ad_play_count",
        AD_ID_TO_PLAY_COUNT_DIVIDER:":",
        AD_PLAY_COUNT_DIVIDER:"|",
        MAX_AD_PLAY_COUNT_HISTORY_LENGTH:20,
        __end_marker:!0
        }
    })(OO,OO._);
(function(e){
    e.TEXT={
        ADS_COUNTDOWN:"adsCountdown",
        LIVE:"LIVE",
        HOOK_PROMPT:"hookPrompt",
        HOOK_DOWNLOAD:"hookDownload",
        HOOK_INSTALLED:"hookInstalled",
        HOOK_IGNORE:"hookIgnore",
        __end_marker:!0
        }
    })(OO);
(function(e){
    e.MESSAGES={
        EN:{},
        JA:{}
};

var t=e.MESSAGES.EN,n=e.MESSAGES.JA;
t[e.ERROR.API.NETWORK]="Cannot Contact Server",t[e.ERROR.API.SAS.GENERIC]="Invalid Authorization Response",t[e.ERROR.API.SAS.GEO]="This video is not authorized in your location",t[e.ERROR.API.SAS.DOMAIN]="This video is not authorized for your domain",t[e.ERROR.API.SAS.FUTURE]="This video will be available soon",t[e.ERROR.API.SAS.PAST]="This video is no longer available",t[e.ERROR.API.SAS.DEVICE]="This video is not authorized for playback on this device",t[e.ERROR.API.SAS.PROXY]="An anonymous proxy was detected. Please disable the proxy and retry.",t[e.ERROR.API.SAS.CONCURRENT_STREAMS]="You have exceeded the maximum number of concurrent streams",t[e.ERROR.API.SAS.INVALID_HEARTBEAT]="Invalid heartbeat response",t[e.ERROR.API.CONTENT_TREE]="Invalid Content",t[e.ERROR.API.METADATA]="Invalid Metadata",t[e.ERROR.PLAYBACK.GENERIC]="Could not play the content",t[e.ERROR.PLAYBACK.STREAM]="This video isn't encoded for your device",t[e.ERROR.PLAYBACK.LIVESTREAM]="Live stream is off air",t[e.ERROR.PLAYBACK.NETWORK]="Network connection temporarily lost",t[e.ERROR.UNPLAYABLE_CONTENT]="This video is not playable on this player",t[e.ERROR.INVALID_EXTERNAL_ID]="Invalid External ID",t[e.ERROR.EMPTY_CHANNEL]="This channel is empty",t[e.ERROR.EMPTY_CHANNEL_SET]="This channel set is empty",t[e.ERROR.CHANNEL_CONTENT]="This channel is not playable at this time",t[e.ERROR.STREAM_PLAY_FAILED]="This video is not encoded for your device",t[e.TEXT.ADS_COUNTDOWN]="Advertisement: Your Video will resume shortly",t[e.TEXT.LIVE]="LIVE",t[e.TEXT.HOOK_PROMPT]="The Hook Player is required to watch this video",t[e.TEXT.HOOK_DOWNLOAD]="Download Hook",t[e.TEXT.HOOK_INSTALLED]="I Already Have It",t[e.TEXT.HOOK_IGNORE]="Remind Me Later",n[e.ERROR.API.NETWORK]="後でご確認ください。",n[e.ERROR.API.SAS.GENERIC]="ビデオを認証できません。",n[e.ERROR.API.SAS.GEO]="この地域ではこのビデオは許可されていません。",n[e.ERROR.API.SAS.DOMAIN]="お使いのドメインではこのビデオは許可されていません。",n[e.ERROR.API.SAS.FUTURE]="このビデオはしばらくすると再生可能になります。",n[e.ERROR.API.SAS.PAST]="このビデオは、既に御利用いただけません。",n[e.ERROR.API.SAS.DEVICE]="このビデオは、このデバイスでの再生は許可されていません。",n[e.ERROR.API.SAS.CONCURRENT_STREAMS]="最大同時接続数を超えています。",n[e.ERROR.API.SAS.INVALID_HEARTBEAT]="同時再生ストリームの最大数に達しました。",n[e.ERROR.API.CONTENT_TREE]="不正なコンテンツです。",n[e.ERROR.API.METADATA]="不正なメタデータです。",n[e.ERROR.PLAYBACK.GENERIC]="このコンテンツを再生できませんでした。",n[e.ERROR.PLAYBACK.STREAM]="このビデオは、お使いのデバイス向けにエンコードされていません。",n[e.ERROR.PLAYBACK.LIVESTREAM]="ライブ配信はされておりません。",n[e.ERROR.PLAYBACK.NETWORK]="ネットワークに一時的に接続できません。",n[e.ERROR.UNPLAYABLE_CONTENT]="このビデオは、このプレーヤーでは再生できません。",n[e.ERROR.INVALID_EXTERNAL_ID]="External IDが不正です。",n[e.ERROR.EMPTY_CHANNEL]="このチャンネルは空です。",n[e.ERROR.EMPTY_CHANNEL_SET]="このチャンネルセットは空です。",n[e.ERROR.CHANNEL_CONTENT]="このチャンネルは、現在再生できません。",n[e.ERROR.STREAM_PLAY_FAILED]="このビデオは、お使いのデバイス向けにエンコードされていません。",n[e.TEXT.ADS_COUNTDOWN]="広告：",n[e.TEXT.LIVE]="ライブ",n[e.TEXT.HOOK_PROMPT]="このビデオを視聴するには<br />Hook Video Playerが必要です。",n[e.TEXT.HOOK_DOWNLOAD]="Hook Video Playerをダウンロード",n[e.TEXT.HOOK_INSTALLED]="既にダウンロード済み",n[e.TEXT.HOOK_IGNORE]="あとで通知",e.getLocalizedMessage=function(t){
    var n=(document.documentElement.lang||navigator.language||navigator.userLanguage||"en").substr(0,2).toUpperCase();
    return(e.MESSAGES[n]?e.MESSAGES[n][t]:undefined)||e.MESSAGES.EN[t]||""
    }
})(OO);
(function(e){
    e.asset_list={
        "image/png:discovery_dots":"data:image/png;base64,",
        "image/png:icon_cancel":"data:image/png;base64,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",
        "image/png:icon_error":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAAFrCAYAAAAXRqh4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAneZJREFUeNrsvQe4HMd153u6pyffCOAi50yCYABIQsxBzBQlWaIkW5KttSyv5bT2vrV31/bzt1575bXs9z2vw+6zn736nCU/y1pLsqWlZAWLScwiKQaQYABAEPni5rmTul6djlU11d3Vc8PMvVNFNibcCT3dXb/+979OnWM8++m1oJtunWq/8nenjJg/Gx1YJRL1h099YC3Re0y3eT7+lV9r6c2l2yKCOAm+KnCeT4AThc8nCScWooGu22I0DWvdFgvIxhyeW2iVTWKeNxJea8QAXYNcNw1r3ToKZVWgxj02Ur53oYBNFJ4jCX+LArQSyDXEddOw1m2hwKwK4aT7RhufOR/gTgJ0FKyJwutJBMiJwvbWANdNw1q3tuGsAtG45+b6GlXVPVdgJ8GXKIA7zWsMBYBreOumYa3h3LZKnstt2vdEPTefyrpdSLO3pI33pAK4hrduGtYazu3AOem5tPeTYD5XWySN7aEK47ncj3vO0PDWTcNaAzqtfRH1nMpjledUIT4ftoiK7ZEWyiqP07xH9j1R8OYGNtl4XQ1uDWvdlg6g0/jMKio57jmjzddBSogn2SLi7yVtWiDtAJooADrN61SUt5Lq1uDWsNat+xV0O5ZGu3DGxUzxWlX1rQLtdmyQhYS0bLFTvBYUnk8CdqC6teLWsNZtaQJa1b5IA2TV52R/B0WIz8UOSWt/zAXKSYBWfU4V5DKAxx03Gtwa1rp10OZoB9Cy50wFQM/lflr1ndYWUWlRIXVzgbUd83gu9+O+I8k6UQa3hraGtW4LC+i5WBsqqll2v93bJICnATckKO20sI5S1u2AWna/3VtViKsocANiZl1qf1vDWrfFVdFJ6jlJNavcpr2fBuDtKu006lrVp24X0nG3ae+rAl22TrLfkjTgami1rWGtW3uAVrE3VFW0qQDouPtxz8meTwPxNNAGSPaw21HWaWCdBOm4+7LHcc+nATrxtmOcAjdSqO3gSQ1uDWvd2rc60lgcaZTyXBcVmCep7Sh4Q8z9dpW1SrRHlB+tAmoVSLezxIE7Cdgqalsav62hrWGtIZ1sdaiCOslnTgPnTMrnZX9Lgndapa2irA0FSKdR1nYKUMfBuRkD32bK59PAO8nzTq22NbQ1rDWkk62ONIODcwFzRnI/k/B3VaDHWSQtoG7akK83oFxvQpHeL7ELvqBJoOQQhTjHsbO9bAJF4dKkbhhQd+4b0PAfWxmYyJgwY5kwTe/P4JKzYFoB2GnsjWbCc7L7zZj3twtwVcUNGtoa1rrNP6TbUc9xIJ6vW2Voz9ZguNaAgWoDRhpNWEmXAQrbAdt2bvuJD14jJoF2CseakBh/hASfV6HLJAX5hGk4QJ/IWnA+b8FZCvOJQg4uKFgbUZCd79skgLPraELyICWB+JA/DW0Naw1pSDdYqAroJDjH3U96rAzumSqsrtRgHVXJq6hKXkOhvIaq4xV4/LGw9e87P8aUGPgSMLczuhgHcPqwSP9BJb8aKUhPJkDXnX1tgwJ8lCrx01lcLDhXzMHJUh7OtAFo8X7SY9l9VXi3A27lGZIa2hrWGtLpLY4oQMvgG/Vc0hIJcQrmkekqbKFgXkNBtxGhhwA0GODi/UyG+dEMpEUVzf1NQui2YU0kRjZpVdvi3wj2GQKr6UlnNf19+6EKcGHaWY8KhfgZqr7fogA/Xc7DUQrwsymgrLLYCc+lUd0+sI0Ebxs0tDWsew3Uae0OFRUdZT20A2Krnb9NzMBmqjw3V+uwrWHDBgq1fg7KJg9pFsYGC2YjGt59BRP68gaUciaU8rgYkKHPF7Luh+csA6yM+54ifQ2rwGt1Ag2bOLCt1Nz7s/S5qVkbpqs2vaX36W2tQaLgHDxJJM8zzxXp7ZbZOmxBJT4+Qze+AZOWCSfyWXiDqu9jAyU4FgPiRpt/i4N3JsH3NgXlbSRAO8keIXjca2BrWC8XNd0upONUdBowWxGPrYjXWAKct87UYLsD5yZs8a0MZ0W9X+A/DqArgDr4O13jFeUMrB7IwMp+uvRlnMdDZROGShnop5DuL5ru5y5wq1JYT1OAI7gnKjaMTdswOt2E81N0mWzCmYmm85jYIaAlwA6e9x730yuLvfRKY+/ULMDZCWjQk8pRhHcpB69TeL8ZA2XZ/UabEGchbcaobUMB2lGDj1pla1hrSM8B0FYMlGW3Lc+h3zxZgb0IZ3rpv5OFM6pmKYgFKFtU+W4ctmDdUAY2rMg6t2sG8XH3HH55uo55PFn0ZWJfd3KsAafHG/S2CSdG687tWxca0KCwJwKsJUC3bBt20G26Y9qDdzYDRxDe/UV42fO9GxJANyKg3UiAvGzJRFgm7UJbtEg0tBeoGc9+em1HV+DSXzy6pDfgfVfn0/jS7UK6HUAnwdiKem5sGnZSJXhJrQG7KGCGwVPNLSCW3M9S6G0ZsWDbSBa2rMrCJgrnjSuWvyZ4a7QBxym8j56rwxtn6e3ZBtRZgEsg7t+3w0iUCzkLXu0rwPeHynCEAbUI7kZKmKso7qSBSdUoksj6k19+vLrsoP3c72yZq8jTyrpDoJ5L+F07kI5SzlFQli4YPkcBvZ+q5+3VBlxk+OrZ4CFtSuCMlsWutTnYTZftq7OwlUJ63i//iivALAyAlR90bjP5ATBMC8xc2fm7aRXBsHLO/Uyun66bGbzXrs+AbdcB/YtmdRJIs06fm4Zm5QI0KmPu7ewFII3qnNYRT0i4XLMzDPN+k0L79TN1eOVUDV6lC1orIrAR1Gb4GEMZrz4/CVefm4RG3oKXqOp+nYL7eQwblMA6aomCuAzgpmCPNCOUNnubJuwvUOjYX5YjsLUNsrTVdBSsZZEdLLDFSA4ZpEVApwFz1r/ftKFIoXBwtgZ7KCD2+gC2TIliZkCNvvLe9TnYuTYLe9blHDtjDhd2kO1fB/nhLZAd2AA5uuDjbN9aZ8mUVzqgRjAvdLNr0xTaCO9RaEyfg/rUKahPnoTaxAmo06V64ajzOHmsLWx44sLl1n3O3B3HPjl8sgZHTtXh5bdrjh/uA5uQFtVt1ZuwHyNOJmbgPRTWLxdycHhlPzyVMaHCwLieEuCZCHCz0JYNSpoRwLZjNkGLn037DixXla1hvXzUdJLdEaei4xR0LJTF+2fH4crZujNAeCmFsKOgMZKCVcusmsYQu8s25R31fAm93TCc/pAxMlkorNwN+ZU7obAKb3dBfsV2yA9upoo4n/BukgqQ7TYzV4IcKnV6wohcE6q+q+PHoDr6OlTPvwqz516ht0dg9vwrjmJPanhiw+XGve7jExca8P3jVUd1P0tvm03eGjEZFd6wYS+OHVBw30vV9nMFqrhHBuFJAdb1FBBvRoDblKhsVlkbgpcdpbZBq2wN625T02l96SS7I86DFu9nIyDN3mapel45Ng0HKjW4rElgtelBmLU1TEZBjwxk4NLNLqDxFgff1MGcg+KaS6C09jLntrh6H+RX7YpQx4sDYvUWvy5otRToiQYX2HVn+C67AdVzr0LlzAtQOf19mDn1rHNLmrXYz8MTHy53Xlp2olGeO+aCG2/PTjQDxR1YJa4KR8V9oNqAA1OzcGMxB88OleFpqrrPe4CuC7AWoc0+tpj7mQiLpBmhttPYIzJga5WdVvToAcY5q+kky0NFSbP3ZTZHkoLOSu5nz07AlRW0OeqwXwSyeLuOQuOKLXk4sK3gDA4qn+1LK6G88Sq6HILS+isonC9xlHQaCC6TrsT/Yqq0K2couN9+BqbfetxZGjPnlT8NBymffmMWnjlahZNUgbPglt3msvA8BffhkYFAbYvgrqewTUS1HTfxRnUgEiBmIHKpAnsxBxg1rBdWTcdNYomL5pBZHVkVQFMVverCNBykkD5IO/EK2SCh/3hVfwau2l6AK7erAzqT74fypmugf+sNUN58DVWZO7tC9c4naBeqzZ4/AtPHHoXJow/R20ecAU9VcD/5+iw8QZdzk80A0qzX7d+n+3WUQvup4TI8RdX2OUVw1yF+gDIqkkQEt5hASqWSDSxlaOtokKWppqMGD1XsjiQfWgpmdpmpwrrRKbiOQvqQD2TMrxGoZ+b+DXuKcD1ddq7JKW0LtDL6d9wKA9tugeK6y8AwM4sMYvfvhERFiSV9lnwc2DCMFKCeO9DxxIbLyit+GIjdhMrJZ2HijW/B5GvfdCyUqIYnUlw+cKgfjpyuwYOHK/AQXQJo265N4gF7BT0Wbp+ahdsptB9b0QcPl/JwUoC2v1iMHSICOyNYIw3hWBb9bFvwtVUHIbWXrWE9Z1CnVdOqcdKqkI6FM12QtNnxGdg+Ng03172IDivD2xv+glEJB7bmHRWdFMGB/nLf5mthYPddMLD9Vsj2r11AIONUcMlVNLEX3NPmkzgxu9JodbHccEBj3kCOJ7zShgPOsvb6fwf1yVMw8fo3YeKV/w1TVHWjDy5reILF5Z7Lyo7afvrNqhMiaDNq2wd3tQ6H3h6FQ1kLXi7l4PmRQXjCg3JNAm1LUNoZAdimBNpNBsxNSZ+IKzUGcV62Bra2QeaipuN86fmCdJTFkRMhfXYcrp6uwlU45ZtT0IzNYdF337S35MT+7liTTQR0/9YbYXDPvTCw83bIFAbmFcwukJmFNKMFVzd000j+Ymwjn5KFjeueDyXenJ2AiSNfh/HD/wSTb34nEtx+e+10HR49UoF/eXkGGg1osUl89Y1T3ct5eIJC+3EJtGspPO6oCTdJk2uS/Owl52VrG6Q7bY921HScJx1ldUSqaLw9PQ7XzszCVU0CG0xRSXvQXj9swaEdBThEIY15N+KIVN54JQxd9B4H0lZxeF7gTAjTX0lDDmXSCW867U+SAddu+T2uQkeIWwzAM23DG0+Uw5e831kalQsOtMde+iJMv/WkdPvgiRiXO/aX4TEK7cdem4W3vUHJwCIxHGhvGa/AlqlZuKZUgCfWDMIjDKStCKWdiVHaMmvEaENlE9EO0baIhvV82R5pLY80A4Y5yW0OlTR2sgDSZuhL+4p6/6Y87NuYg3fuKwfZ7qQ7vbSSguADsOLSD0F+eNsc4Uw8ODc9tdxUYO9S6XskBchtj3sswDOeCs948DZSwxtPoCsv/6izVEffgNHnPwcXvv95aWQJnpjvO9AH91zeB994YRpeeKsGzx+vhtaIHSjuDZMV2IAn/b4CPOop7SwD7hq0Jvxi7RH2eG+AvBSbzBqxmS2o6mNrW0TbIKkHEVUHEOOiO7IJSpoDNC5j07CHLrezdgcLaUwVevXOghMPzU51lvgcTgTHiv0/CAO77mhjkJAwIPKugEXVvCBgXsw+asz/+w3RQrE8eFttfy8OTk68+jUH3JNvPuj5+/KGA5LffqkCj75SwTJori0SQjuwR4bK8HW6HPZAXRPALRucZOO2k6JH7BTWCMASCvHTNkh32x5J08PTeNJSQOOC0R1nJ+CeegMuQjD7dgcL6ev3FuHGPaVYP9oqj1AF/YN0+SHIDayPD6SIACUJ7Awf0DGvJ90K4vlaH0P9/c6FvMGrb1JjxLl3mNBbA0xlcKNKH9x9NwzuuRtqE2/D6HOfpcvnoDF9tuW1/oDkLReV4DuHZ+Chlym0DUZpe/bIuQn4BBUFR1YPwhe96JEso7BlSptV2Y0Epd0EeUV6Nq+2bPBR2yLdpazf7ACoC/Nle0RNaFHxpKWQrjVg6Mw43OmH4GUYmwNBjZC+ASG9t+QkTopqGG636uDHYeii+5xZhWk9YoJ9jnhLXFQGIUsUzB1Q5EZcNInhwtsBt5XuewxwZkuOvfRlOPfUZ2LDADGx1HdenoEHX3aVtq+ycTc2vfsY8keh/UDOgjFBacep7bh8JLKJNVETapRisr/8+GxXHFDP/c5Wray7ANQqkR4qg4dRdkfLQiF93WQFbqX3+x1P2uTjpa/dXXQUUpyS7t92I4xc/ZPQt/maBBVNEgBtzwHOC9GPunlSDFH7THHbBfD2WISqmy7Et0tawE3kn42TYcwcDO9zByWnjj0KZx//I5h84zst64Yn+O2UxDfQK7JvvTQDj7xSCewQXB28xZC/4+fg4v4ifJO+9GHheK5FHPt1SR9pMP2nGaG0RS9b9LMJ84ODDUD7MXQLsBerWT0M6rS2R9zsw6icHTJAs/fzni+998IU3O0PHvqK2gc1DhxeR0F99Y5CpB89tPddFNKfpIr64hghLAM0Whv1OQJ6KfnSC2F/qHxmArwNiV3CgTtLPyEj+exWcPdtusY5WVfOvOhAe+zlf2zxtd0IkkG4lB5bj7xacfKR+LaIp7D7JyrwnulZuHK4D746VIaXIbrKUFQFe5nwibJG4mwRaX6RXgN2T9ggHqTT+NMy2yMuZrodJZ1Hy+PUBXgvvb1UVNFuCF4GbqJKGkOyorzLoYveDauv+Vkni5261YERHHUX0lxElSqgyRKFcjepciOlXeIdjghtIyt5f7RFglkCzzz6BzD20pe8yJ3W9rXnp+FfqNJ++0KTG3z0b3MWPLd2GP7Bs0aqEnskaSAyagBSFpudVOgAoGXgsTPQ1jZI50CdJm6aVdPZGF+6BdK4YCgeVS6Yuq3fz4DHqun7ruiDe68oQzZjyJU0hfSaa3/ODb1TVNKuzVFnfOiFBHSvCB6SDsTS9xkKipuAHx5JSJVR21aiRZIf3g6b7v1dWH3tv4HTj/yeA21RaaMguOXiEvzTM9Pw5WemOJWNq1BvwqXHz8G2gSI84IX6RRVRNhOUtmzwESBdiJ9k4LFgLHeVbfUgqFWy5KX1puMGD/Ps7XQVNpwZh/fTTrCVszw8UN90UdGJk44qhTWw452w9oZfhMLIXkVIJ6joeQO0nreQygKZK7i9ky5pUdsx0B7aBpvv/W+w+upPwqkHfwcmXvsG9xIUBu+9ss9JSYBx2v/yUiXwsR3pS6B/vAL3T1XhytWD8PflPJwQoC1LWCZGUDUihJJM8rMVbOI2Xk8Ae9nCOgWoVSe4RE1sSVLTeX85NQY3T1XgDkz6z05qQVjvWuvOQDu4Te5LY3THult/Ffo2vUMC6SgvuuZBGlJAWivohYP3PCluTm3bntqedaANRs7ztiNOGPTpwqq9sPV9/xOmjz8Gb3/z11uiR1AofOyGQbhkYx6+/vyMU5bMh7btRo1sPTkKP9dXhK+tHYJvg7yqkYqqlg32q06kEQcelz2wlyWsYyI+DN4AjIz2EA+8pAFE6cChD+nJihPHej8OIGaEKA90Od51RRl+4Kp+6W/JllfDmht+AVZccr+7SomQRquj6s0mFF5D4uCqVfTiKu404I5S235pee+xdwVFcLakkY+PJKEPMQf5rh/5Mox+//Nw+sH/C+rTZ7ivQeGAy/96chL+8elpJz7bCKNGrKlZuOeN03DZqgH4fH8RjqawQ8wEdW3EqOwkawSW68DjsoN1AqiTrA+VQURVy8P3pg+NzcD97BRxH9hxoXiYwH/VwR+DNdf8rFsYNhHSdSwk6B3v862iNZw7a5VEQZ6ZhGQwFogTfon1HXEwBJV2NuYEYMKK/R+EoT33wunv/iGce/JPW0qU/cCV/XDppkIY6ufZIoarsjfQK8afm63B50cG4TGJyk7ysGVXvFHQJtAaLSI9uy1HYC8rWKcMzZur7RELaXoQ950YhQ/U6nBpxgwHD/E2Zxm0A/TBXZfJozwGd90J6276JcgNbxUOyShIVyGdH60hvXStEpLCIqHQthHa9Pgw89HQxtwh2TKsu/E/wMr9H4KT//JfYfzVB7iP90P9Ng5bVGlPQa1BgsFHvB2f8bxsqrLLBcfLlkE7TlVH2SIgsUSU8oosN2AvG1jPE6jj1LSlYnngMjYNF41OwfswETw7TRxBjbMPMRexLKc0VvbecPtvwMCO2xYA0hrQy8sqiXidFNpUqNoVJWjnhrbClvf+sTP4eOLr/6dX0T1sKDCu2JqHrzw77c6CtD2KutDe+vYF+PmRAfizoTK8lMIKMSNUdjNmA9hxoF6OwF4WsE4BapX46ahZiNLp4QykcWQw//Yo3D1ThVt8OPuWB3rTH752AN55San1Bximk1Vt7Y3/HjLZvvBqVgrOOpB5h7QG9PIAtzq0DTPvHc78ZxgetAe2vxP6Pv4OOPmdT8P57/0VF+qHQuNHbxyEzSuy8DePTAReNrjWiIV5Rmgf+Nb6FfBVwQoxYqwQiFHYURtAKbRvuQB7ycN6HkAdpajTqOnCZAW2np2A+21mENG3Pnavc0syycpo5VfuhI13/haUN1zJDQASyTHpjPgHiZSSBg41pHvPJomCtsE85V6yEXvGnc5uFJiu4QqEwM3OlmHDbb/uxPS/9cB/hOr5I9y3ofDYOmLBt16swMOvVAJLBN8/U4NbXj8Nu0fcwcc3Id0MRxHS7YT2LTtgL2lYzwHUUTmnZf50rDeNoD43CQcvTMGHg0FET0kjrO+ml433H2qN9MABxNWHfgpWv+NnqMrJBsBthTTxIF3XkNatTWiTMAc3Fz3SoMfWlBenXQi6S/hu4mQNLK+/EnZ/7Ktw5rt/CGce+x/cAOQOKkBwGSqZ8NVnp12qekrbH3ysN+HPV/TBc6AeFQIx8BZ/fM8A2+qaYy8tqA+lAnVcfo+4mYg+qGWQdkB98oJTnPQOdgARl6GyCR+9bkAaN41qevM9/w2Kay7hNgIRNwrmhnAsj4iBb5JmQ2pA955FIoG27DGG+0HDtUaMHIvqAN0oKNZc+29hYMftcOwrP9+islGQbFudhb94aAImZuwwnIO+/fwkfKzWgK+sHYJvQbpQvqRqDeIPUwP2Y0sT2EtSWXughojLpSRQ+7cqk1wi1TQux8/BB6t1OGgxtgcuWDn8/qv7YaDYWq4Fvel1N/0KvcQsBsdSi5pGxWPPAj8fQENat3bVNj+I6Kbpa2Wde8zVKJgLXq5tQWXTf1Fg7Prol+Hkv3wKzn/vr7njC4UJWn1//8SkU32dtUWmKnDPW01YuXElfEEBzlGPQXIrQjoZ2IeWJrCXHKwZUC9ExEeS7eFAGv3pc74/nQktDwQ2Qvqey1tD8qzSCth456cdZRKtponbYaSzDjWkdVtIaIfi1PWzsy60GWvERzcKjQ23/Rfo33YTvPXAf4DGzGjwDYMlEz5+06BTYuwLT0yFZrPhpl594zRsXMX72CohfLKWNlKEiBxZasA2Najjp4h7gC76C4X0lejD+QOJzkI/LUs/5WfuGJKCGg/q3R97gAM1EUGNl6LNKQ/Ugu1B0oCaaFBraCscI+xLSet7W45H9lPdf/F4xuMaj2+xveuKPvjkO4ecvuEsXl/BfoP9B/sR26+8fsb2O7FPsiXxVJJHJSn3qCt0raw7AGojAdSq/nTBX05dgFsmZ+Fe0Z/GhO4/fP0AbB3hZyIapuVMbsGKLa1qmlUyFaFcFolQ03Gg1oDWLY3SJtASNWKIr2WiRsxioO2IE+DnfrZVXgXb3v9ncPbJP4VT3/k0fX14HGP+9eHyCvjLhybg+PkG52NfmIaPNJowtHY48LFVFbaRcPmQpLA5W2QpKeylZoOo5qEWPWpxMFEG6ihV7SwnRuGeShVuyTDeNC6YJe+j1w22VBPP9q2Fze/6fShvvDoC0uDk8AgHEKFVTSvDWINatyRoG8kwD6wRIXsfjqFQle0OQOYhHGcxgk8dufLHobhmPxz78k9xtsiutTn41R9YCX/98AR85+XQx8Y2RYUP7VelDSvgK23YICo/2AS1yTPaBplnVZ0me54qqJWsjxPn4T0+qC0G1B96R7+TnUwENVbp2PUjX6GgvipGTU97AzqSXOqyy1Jteei2YNaIxHaTHJd4vOJxyw58s1Ze36ZDsOuH/wlK6y7nhUvGgH914yB8kPYXv+/4/Qj7FfavFJYI238zElskaXp7C0OWih3S9bBWBLXMq5ZNeJFNdJEqaVyoAhg4dhY+WqnD9azvhgfaT9w6CHde2upPrzrwcdh2/1+CVRoW9AsTjtecFia3kLCTKHnTGtK6LRS02ZdJ6tU6Kns6qNIuRjNl+9fCjh/8/2DlZR9p+fS7aH/517TfsIIH+xX2L+xn2N/EPhgBbRVgx3nXSxLYXW2DRMRSgwKkZbHUUYpa6k9Pz8KmMxjxYcNWNjQvnzXgZ24fcuoicv6MlYeNt/+mU7RUrqaJ503XJZ0j7QCibrotljUiRowYEIyzGA3Py+YmqzsTvjbc/ikorr0MTnzjVynfq8Gnv2NnEcp5E/7718dgtk4ckY7vwUo0x87BgJcI6ngbVghJOBvZAkfYH7okQvq6VlkrTHpJKhpgpQA1eyYvTlZgOyakQVCzU8fXDGbg39413AJqqzwCOz70WQrq9zGIFtXIpKdG2ALOxM25QEjr8y2LDfFl6fSil7SLnXC8kdCWI5LSiM5V4iR3lUgYZq7Y/wHY8cG/oVeZK7n+gv3n52k/wv7E9i/bSwSF/Y+xQ1iFnYuxRCxQK+IbZYt0vcI2uxjUYlMJ0UuKo5bl+PAPBMcvG5+B3ScvwM+ZBlis7XHR+hz83J3DsHc9n98Dq27s+sg/QGndFcwpnjk5Y+IcwefjbI/Ey1NteejWKWtE5mWLz7vjL+CMv7Qe/6X1B2An7R/YT9i21+tP2K9YWwT7HfY/7IeMh51XALZqWF/iQGa3ArubPWuVXB9R4XlxsxLzEkXtnMUvTMO+02PwU2LEx3W7i/CTtw3B+mHeNerbcj3s/PDnITuwXqosiD1Fj+8aJEd76HA83boF2kleNpE6D8SJbJqWXlnmBjc6/aRvyw3cp2J/wn6F/Uvsc9gPsT+y/VMCbLFvR0E7TXkxraznYH+0O/FFNjNRpqidg+D8JFx+dhx+XDxobryoCJ+4ZbBl6jh609ve9xm3iouoJ9D2aNDLQ4w59QcN2VubMFecJOIqleirdL10YFE4Hm0ScVzX6XE/Fdgi7JgN9pNt7/+MN6YTNuxX2L8wBFbse9gfsV8KoJYpbBHW7U6Y6Wo7xFwCoIY2IS0DdUsiJl9R04PiX4kHyx2Xlpy8vWLDbHmb7v4dZyBF1NNYEMAZLZfZHtxAorY9dFvCtggBkI/pNd3j364xf/GTQVlOv1l96KdbPhlD+7CwgdgHsV8KClvsw1HATgtt6HZgW91xYCCoi1EZtpJSnWYSFHU2wqcu+B61TFFjEdv3X93f4sysu/mXYeTKT0jcOXq/WWEGEcXLShJb+UXbHrp1J7RjZj86N9Ii4+7MR6qwjUwR3Kwifp5sA9be8AtOaOvb3/oUd8zjvAWsrITFedmG/ZPe/MlwGV5o7VSxUSBJcYrspBlhJpB7353hWOmKjtltNohKoduoIgJpFTVGfWyTedTvPtgKasPIwKa7Pi0HNbG9PAoyUBMhflqrad2Wi8oGSU519rivef3CbrFFsBj0prt+2+lXbHv/Vf1O/5NZIsygY1yUiKiuk6JD0qZl7W1Ye6o6TXKmOEVtKShqjKPeeGoMflqmqLGaMwfqTBY23/cHMHzJB4QLO3CrSDsHZDMC1EnKWUNat6UC7RhgR8x65PsHnxJq+JL7YfO7/zCwE/2G/e/dB8rSQUcUWBA/WSbJDlGNEGHskGJXQLvjsFYAtQnxoXpJ+ahbJr1UarDm7AR8gA3P8z3qFkWdycGWd/8RDO6+G1qye3g5E/h6iBrUuvUgsFtUNnvrX3k2hHcQGNx1F2x5zx85/YwDNlXY917RCmwUWDhhDZJnOEZBOwrUZrcDu6Ow/pW/OxV3yTHXeGppUiac0krP0B+kt1vEhEw/dM0Av3GsAmx97/8LAztubQW17V3iAUkAdVorTTfdlpotEjfwGP7d6S/MwKP/t4Httzr9DPsb2zA3/J2XlThYo8DCmcXC1HQ2HDcLc4+/BhmXOg3sbrBBVH1qlWrkUalOw+x55x1Q7+TiqPcUndHoVuvjv0P/thsloJ5lYkrt1lsSNxtRz0LUy3KZ/RjxHInoF87AYziBhgU29rMt7/l/WiyRH3zHQEtYH850xH4c4V2rANsEtRwiXeVfdwzWnqqeS27quCovIqid27dH4e5aEy5lp7ge2JqHD1/TOpiINRIHdtzSerHnzEisSJSDTFFr20O3HvaxpQob3P7j9SH2E7CIwZZ3twIbhZQ/ccbvt9iPKbDfrQjsOGibEtZ0pR3SEVhHgBpAPUTPgnQRIEUsbDvjpTn1d/iedTn44RsGoJQ3uRPoxjt/Cwb33C0cfngZN+OlNdWg1k23uQF71ulPYtY+tBw33/t7LVEimF4V+yvbfys1uB77dYJ3nZOAOs4WEf1rkVEds0O6KXRPNUQvaYZii099ehyun/YqkPv1EkcGMg6oh0r8QbHhnb8Gw5e8XwpqLBagQa2bbvMDbKf4hgTYg7vvcgQT6zzgTEfsr9hv2X6M/Rr7N0QPOMoGG+PSqZqgVqlm+cNa0f5IGlSMm0rORX+cm4CDEzPwXlMYVf7RGwdgg5DrA0twrbziRyJAXYs44DSoddNNLbRP1n9qUmBjWB9OQOOEFO2vP3bTID/gSBfs39jPBVjLEj6pTklXmI6++Oo685O39y02qKENQFuKgBZTnW47N8nPTsQMXz99xxBcupkfeV596CdhzTU/KwF1OIKtFbVuurUJbIhT2BiD3QTDzAFbKqy8/gD9Uw2mTzwZfMKq/gxsWmnBk6/Pcp88U4NLcxYczmdhEuQzG+NWJOq52PbZP/2U8c59c+PnN1+c6mobRCX9qUqIXmIhAXq2vR8L27LFbT9+8yAc2MqDeuii9zpTYFtBPe0mY9Kg1k23hbVEbK8CjaCwsV9i/2Qb9l/sx0w4n7Ngf1dQ17LZjXEZ+owYZi1qW7TcIAr2h0xVx1UmFye/cF718XPwQSx7z6rqD13T74wqsw3rxW288zeDVeNBXQe1OGoN6nbaZz75QzAzes4pomqY7mFgdMFcMeJBxa0LQcDIWPDTn/2q3mGpgG3In+PyiQg1azFrH0zT7V32Kqi7qMA0D7WxN2Hm5PeCT8N+PFW14W8fnQwclqYNG7Dfb1oFn4OwsoJsiau+kJF0YjvqB1Guwac+sHZROvyiwFoy+UXVq06TTS+wQnCEuFqHg1jfzfeqb9xbhDv38zUTc0NbYOsP/GkQjM951BrUC97q0xMwc/5tyNAdZFJYmw61u4M1NiWATc/2zSaBbKlf76wOAhtD+bCfHvmb91NoHw0+DfvzqbEGfPvFStBTsd/T/n9+3TA8IMBYdqsy6SFOXROfb4sB7MXMupfG/hCVdVTOj5aY6nOTcHBqFu6wmBHj7auz8NHr+dmJVmkFbL//z5xbFtRO/Kdd06BehFYe7IfahSxkrQxkLAprembtNK+D1My27YC6Xm9CcWhQ76xFB/YMhXQpALbfXxHYjZnR4NM+et0gHDvXgNfO1IM8etj/KQfOreqHJ2KUddSsHjMG2LJObixWx19wWLdhf7CLBfGpT7nBxckKbL0wBR9mYzGz9J0/TEFtmeFBg3kI8EyNypr3zegZujkL8qyLSZVdNKjTtn6EdSkHuXwGsnRHOQrbOSo6K69dRW1Dg4K6WmtC3/CA3r8LAWzuvvCcXXWPA7MYoMO/En79bz8MdsOd74B9HPv3p754PtBSCAvkQN6Cs/1FeJ2BdFPRHhGXrrBDOqWs52p/yHzq/FlhQBGB/cl3DsHWEX5G1Mbb/4vjVfvb2tnCTpB+AqiJBvV8ttLAEMyUslAoWJDLZcCil0MZs/Oh/wjrRqMJNQrqTKYB5eFhvbMWAtjEv4wSlLWfE5v2R9TVxCw4GbHxeey3G27/DTj+1V8MPgn7N5YH+8OvjTnAIN5HIw8orH9PAdKij61ih5BlpawFVR0F6aT0p3HZ9AJVjVPJiTCgeP+hfji4jY/8WHXgR50YTg6zTlKmigb1IrfiwAAUqPwpFrKQD9Q1DjJ2TlljR2/aqKozDqid9ezXnnXngF2h90wK7FzwbiwNVjnzEpx76jPBJ2GECPb3zz8WDjg2bNiAXFi/Av6JUdbNBGskTmHLajUGK7zQ6nqxlHWaOoqy1KexMxVHp2C/OJX8+j1FuOcyfkCxvOkdsPbmX+YSyDhpTu0ZrtCtnMca1PPd8qWyA2i0QfKorj0rpJMuCO5RtEDqpu1EgjRoj8+X+/SeXhRgy16Llsg0PSYosA0reP/am3+JAvtFmD7+3eAd2N9xwPHBl90Bxwz9B7lA+XBsRR98L0FhE4nCNiV2CJE4BYsCgwWDtURVi+BOmk6e5FM7wJ6ehQ3nJ+EjAajpJw6UTHjfVbwayvatgc33/T4YZgbYYPywkkXaAUXdfefacsUSWJYBWct0BhkR3GiFdBTWqKxNdwCs2cT1aUK+WNb7e0GBDTEDjoZXw2AKjEw/Dji5EMFka/f9ARz5i/ugPnUq+Bjs988eq8L4ND3Zmu4nIB/Qvy4X4BijrlmV3QR1D9svBSazPxZUXS+IQZgiVE81R3Vknuozrk9tsRNfPubk/Ah/GgJ6E92xVmkVV43ZBzUhsmrjhNldutL4QixWoeRYHhi2h/ZHuJgdXNyoFCeUkC4Y/43rqfcXLGAFdcLoWtLyGrd/+gUMwr9bpZW0X/++U4jXb9jvsf8LE2acHNjQXqFd1VSqRgT/uhvWAqSjoK1SSzFWVZ8Zh+ubTdjK7pj3XtnXMkNx7Q3/HsobruQUs19qiBAd+dGpZhWKXbg1DU5l4/Hhr6duC624ofXK1g+qJUyJMObv2K/X3vCL3Cdh/0cOsAIOOXHGTfjEhvqqlALrmkRP8w5rxUFFlRSosXlAJiuwZXwG3mP6Z0/TndV03wF+rn7/9ltg1VWf4I4Bt/JyPcwtI6t+oX3qhYd1vhjUaSCkm6DB22BWvqR31oLCGSS2I0QAu+72X+YjsH9jP2cbcgB5wPIBeYHcALVET1HJngxQyHu9EOp6oZW1qqI2E+yPFgvEz/vBDireeSnfqazyath412+HMgkb5qO2q56illlTbKUXXeVlIRdUrLgfiOAZdw1OPHZYxZLeX4tWbUasNMO/1um3GIPt55X3DpiNd/2O09/ZhjVVWT4w+UPSWiFmCoW9NJR1hKqGFIo6KlyPU9UnL8BtTS9Mzwf2R68bgE0rmXhqw4RN9/6u42uFQsk/K8ck4dIDiovWsoVy0OGc/7oM1P6dYD11WwSFHZf0KVTa/tWx/xTOcMT+jv3eb5spD5ALLCeQG6fG4OYYZZ2N8a5VihTAQqnrhVLWafJUJ6lqtuID2h+bcTppxgjPmDfsLcItF/OqeuTKT0Df5muYHW2HWb2ifGoN6s7YIF20iQnxFbV7nBBvIFS3bgA2Y4f4406O4nb/jv191cGPc5+EXEA+sNFiUxW4Y7oKGxR8aytGXSsNNnYlrBVC9ZKiQFQGFgP7w9/whZwB917O+9SFVXtgzfX/BwNgf8c2BZ866b4G9UK2TL7QdYq6hReOZ13QO6tTwI647x4zdjjg6PVzTKlaWLWb+ySMv85lDfAFnoHRIePwfol3nQbYKoCeV3W9EMq63VC9OPvDDdMbh+tY+wM3/Puv7oPVA2FpLszQtene/9stuhmI6lln8otUTXPHgAbzoiprqljZSK2uw4d3TGhl3UGAExnAmT6M/Trwr/3+/7tc0d01gxb8wMG+YLDRsUNs2Hp2HK6GaP86q2CFLKq6nhdYR6jqudofHLBrDRierMCtfu4P05uleNs+3k9c/Y6fhsLIXmb/1jyf2g4un1oyJeoBxY4sVj7PkZp0EbHZk4gbuqf3V3cMOIav8YMEXP+6Fl5Z0/4/cuinuP15F1XX17LRIXSZqMCdlCtDCb51WjtkwdT1fCtr2chou7MVuQGAUxfgPfS2nx3dvUPIT11YfTHdST/JnITDuExCRFWtfepOtywq62CifzeBOvRAQljr1j3+NTDA5m1O/yWrD30S8it38f71RSVgx7qQJ5Qr74V09Roziqp63tX1nGGtqKpFYKtk1QuAPTYNe+kZ8FL2MubdB/pg44pw5hLOUtx4x2+BgfkD/B3YmA46HDNyFD2DKvKxXhZiyTIzA7vPBiE+DiCb1zMYu2KGo/Rx2L+d/u4JMKznuPGO/8pFh+xYk4X7DpSBtVGRK8gXBd86bZHdeVfX86ms41S1qKbjgN0ytXx0Ct7NBrfvWZeD9xzkBxVXHfwEFNfsC59wfOp6jGImWlF3uuH+zBUCJdt1oXv+SaWoPeuuUdjSzJj+VXI99K9pK62/AlZe9hHuU957ZT/sXpvjJssgX0A9jE8sjiIDNiyEup4TrFOoapUIEKn9cfICvJN2nNXB1FF6e9slfOfJDWyE1df8DLPfGkx5e+IlapKkrCVaxnR0ods/480OJCwkuwHUnh2SyRf12EUXHS/S5HiYN8S/DsJ+HwQTgDMVPdu/ltu/t+8vBVWkkCs25QsGL0C6uGsW2EqRId2irFVUtUrCJs4CqdRgZKYKN/hnQLy9ZV+pJUf1+tv+M5jZUnj56vvU3A4WztZEq+puUE/hlPPu2PaMXe2m2XQsEH1cdI26JhF/J4QBdpg/xMyVYcNtv8F9CvLjpouKwHIFgxeYwUZ2fkecHZIm9nrOCZ4WK3QvKQpE6lWfm4A76G3R36AYUy0WvR3YeTv0b7s53HlYRIA5s2r7o7s7YyZXFGKtSfeAgiCs9ezFpWWHuFfWwBQT6d9+q8MJtt26r8xFhuDLqLq+E5IjQ1Q96+4J3VNI2JSkqi2IiQKhinrdbB0OsmW6MLh9hImpNrNFWH/LrzI7qUmviCq+vhZUNbODNZe7pmX8wTvoltC9cOYi8ZS/PmC6ld+iZ83EFiEHSDP467qbftmpveo3DE541+XlsAQgvaVX8oeQO9A60Kgac5002Dingcb5UNaqBXEzoFZcwAE2Pcu9h71M2bzSasmoN3L1JyE7sCE4u4bTT8XYaRtUksTopQOx1sVyEKjTdUwIpprr/dRd8dcq/ZuZ3UiX3NBmWHXwR7n9+y7Kk/XDGc4OQe6A+oxGlVA+mC+l3Ras21TVUTmrs6KyHpuGPY0m7GRDbG7Yyw8qIqRHrvzx8AlmliKRXh5p+6Mbm+XZIEGoXDcMMELIArRpdFsKdkjY5wlrhzDRIasP/RRY5ZGQIRnDyR3ChgQjd5A/oDZJJo5z866u56qs21HVrP2RlVkgdGPd7s3hdzbkZVvy8M59PKzXXv8LYFh572zaFKI/IvIKaC53oQ1SZFM7BIq2k2o6iNNHT11PNV8i/I4abJwJyvaZuT7KjX/HfcRtl5Thss15YHmD/IF0k2QWRV23C2vVSTAq08s5+wPn69Oz25ZgWjldrtnJq5vS2stg6KL7GKt6JiJwnrSW6tKTX7qrtBfGWXfJiZSQVmg76VH1furyyTJE0ueBKd83HexXrIxeXLOf2+/X7CoCyxvkj5c3JCvxrjMK6npBBhtTw5qR8O2kQE3MBTI1C9ewAes4n//qHUKZrpt+CcLKxzU3GTl6VHF1LonO+9GNSyZfDAf0COmSOOtwkk44wKiXrvSvY+ZKBDxwihXUwJvaCOtu/mVufyNfrhWqyiCHIqwQ2WCjCSlTqLZjhczXACNA/NRypfqKp8fhWsyqx6ZAxfn8bMPyPeWNVzGDitOSS6OISuW6dZ9njelHI/IWd+K6mp0Q49Zf1DbI0vBChONHOOv7ueyduo0br24pA8bmDUH+IIeQRxCdiS9qooysigzAYg8wKlSCUU3aJI0EmZmFq9jLEUwajvP5w28zPc/J2xFNPzwn9KjUQvU0uLsG1hgNwlzBdkvnJ8HJRA8wdrlZHR3Kx3IBOREMNhKXI0LeEOSNwfAHeQTJ8daqhXVFYKdW13PxrNsFtXSKuaiq8fZGIQJkaO+7oDBykbe9MTRnNnmnSbN16dYtLYuTTrosbo8t4quV9VIAdsTMxpa5MhVvsBEcjiBP2Ia8UVDX8wHsjkaDxEWAmJCcXS9bqcIV/hkNz27X07Pc9tWhqjaMDKy+5t+EysfGy5pm6FUT7UEvTc86H/rVQDqqsIlwjndzgxT0flrS+UTYsaymxw13DyNPMFun35A3orpGLkk866gET6qRIQtrgzAWSFIlmDhlLZtnnz07DlcFESCeV32ToKoH994H+eGt3nau0+1ejTjbijUVtaruahuk0F11GP2Zi+BVXc/mtbJeWuo6YewDueHNx0CeDO65T6quDSYyZLICm0AtdapKBfS2AT4XZd1OgQG5V12D/f6lB26ka3ZLVPU7fjrcLcxgAZEmQ9ZQXirNV65d5YQEQQZEFx5YFkznx7TYoATM1ol8YdX11TsLXGTIhWmnGnra6ucqFdAXxQZRAbVS6S6ci19vwF6TOZvdfBHfQQb33AP5Fds8+wPLdDVa4j1I8B8besntIn1R2IVL1su61411GHF1rFJJ76euXoQ+zvV7wlQiYt5j1x2O+Op6YPdd3H6/eEMOWB7V6rB/tgaroP0sfPMCbKtNCyTJr1ZR1c7t6BRcZxjh7KH9m/Owc02OOy+MXPWvwzOkPwGGywcAwi4ErbaXig3SZSlSAyvEi/nOOjMs9bGztKwRg7kVn3cxhRwxjKwDnpGrfwLGD/9T8Mob9pTgocMVOHyyjrmuHTadn4LrN6yA/8Wo63qMum4m+NZEAuzEg2yu0SCqfrXUq8azFWa6YlMV7tuQ476of+sNUFh9kXepXG2p/iKvrQga1EvJs2bqMHY68x4h/Ak/o0P3lph3LfubaLO5VWUcntD7xdUXQ3nTIe5dl28pcLMaK1U4VGvA4Dz61otig0SF7Kmq6sACuTAdpkDFZcOw1VKtHM96wfZ14qolKlrcaVoJLSlYd1sdxmDWsjPdXMN6KXrUcogT7mo85AmWBfwx7pW37ivBmoEwIx9V19b5SXgHqIXwJeW7bssKSYR1jAUCKWwQafImqqoP+t4QLoc8Y99v4RmPVdVp05vqkL5uXsyMCYaV7Zo6jOz343qZVkbvpyWZRlUlzWqorgd23AL5lTuDfZ+3DCdniMF418grSJ/jOg0/F0RZq6hqE+RFBvxwvStpx1jhb4ishbDmVcxKP/8s8ZI1RXYsIu9tui2JS1g/DWmn6zASZi6FE2Od04UHloczEi0E3DEwF2urDvD5rjEqDbnkC0qb8gq5lWCFmNBeBfR5t0GifOokK6TFr67UYQ8bfH7jnhKM9IchNFZ5NQzteRejqpsRSVvifCvd0ZbCJauVL7UW9elwR3ciQXT9xSVM6Oh815zvhumViZvkaeji9zjcCSxYyiPkEudd151c10kFCaIgPSdgm21YIEl+dWIkyGwNVmI4DBseg5ccbFux/4NgZLKhtyT0ZBI5tVy3JaesvUE80vHZMfyEqowu6dUD6poEV+2mVXC4w6lrL32qEMa3EtLFW0f51qmskLkoaxPUQvZaLhfGpuEA6wVtW51tSdg0vP9+T1XXXK+aqPhR2p9ekqW9CmXGs+58NIgfumcV+/T+We5+NvEiQ2w3yszhjpDgCfnEjq0hvyA+IiTOuzYXRFknWCBx6VDjbBAcWLzMZGKrL9+S576of8t1kHNqK7Kqmgl9JxIbRGfWW7LNyWndhaIso6eaL30rRKakZcLPK7SN3Onfcj33DuRTUEnGHWi8DOIjQkyBh0lTz+cF1tLUfpA+y14QCYIGfZPAaoNJ2nTVdr64wPClH3I3q91wk4ZrcbCsl0yu4ImcztZhDGdSkqCKjd4/y2mJrgxFMGeI3fD4w1shyCeWV8gvYaAxA+1n4YvirDqshYowSco6boo5p6xn67Cdy1m9pwhrBsOJlFZpJQxsv9V90Ky0DAwQ5UK4ui2V5hTN9UDdqVB5IuT/It7Ap27LRWnzzCCSQAU/5TLyBznkN+QTcorlFnJMoqxVpp7H1WiMBbaqDRIF7lSTYZo2FGsNuMhg/J/r9/ADi8P73ucNLNr0f7dcF+dXk6jy8zq2esmmSS10Tx1GFti4Xnr/LLfSX3brc176CoLFCSh3kD/Dl7yfOySQUyy3kGPIM2h/coyyok4D6zhQq0aEOD9mdAoupbdF5w30n+Gy2ZIHZHj/B5iznN3GWVO3JaesnRA56HgdRvb7tbJe7upa1sKCJsOX3M8xFDmFvHKsEPeposczldC9qAHGVMA2EyA91+K43CVCtQ474rzq0oYDkB/e5iZs8kvwkKi8eSoDDLotFVgTohI3v9AdmvdCdEmv5QDo6H1NWtQ3eOqaOBxCHsV518gzSK7JmNYKSWeDxNQGixtczMQsjgUyW4f9bMjeVdv5zjC0+x6Pz3UvQbhCJWOiL/uWfOheviCcgjt3wg3ygoCXt0Tvn+WxKLHDdrjjTpIJeRTCmo+5Rp4xVkgc/1QGGWVuRls2iOqsxcg46/OTcIC+wfIN+pV9mZbY6sE9d7v3nUsRonjm1JVglnrLFIoBIbtmwqCubL7M1LWqFUKCKlQOj4SY65X9mTDm2uMatDfImHo2o2roXpKqFuMKZRbIdu8HOj/0oGCBlDdcCVZ5hBlYjLJANJuXnw1SCNQsq3A7o6hJ4FvrKjHL3RmJskKqDoeQR+WNV3HvOLitACzHqmFUiAzUUcBOCuFLBet2/OpMnLKuMlEgpsSvxmowzoYKVHVcuXk9sLi8YO1NimGK5na6QweFB3RbhrRmc5bLXkOCgUafS6EVUuBmMyLXIH4GY1IWPmXfuqVSTIRf3U5x3ADWY9Owk7NA6KWEWGNxcPed3sBiJaxUTsQ6i3HVYDS4lyysncknpGuSOfkKGxW/TuS0HABtpHyF7XDIIEUY3HUHnPzGr9PDoOn8BbmF/Doz3nRYZnt8GyrD9yF9TcY4C8QQe4OKDSKzQsQvzkSoa+dsM1N1M+z5lw6Xbeanl2POaqu4im6QRjCLSDzTaQtk+bZssdRdhQe840vbIL1hhUj5gnVeKY+QS2IVGeQXyzPkG8TPYowbZIQkRa0Ca0NBWSvZINU67PJ/GC671vKluwZQVTsbaFayEaO2tFbVy8cGKQSzBjsJ7SCJlO9Z5wt65yw7QsdxQ2COx6OAT15DfhnhICP61rsgOT9I2pmMSrBWLYqrNINxtg7Dfi4Qf7lYqLM4sO1m1+6wq8AXwZVtUw3mZQfrQoGb7006bFr75pueFNMjAG9hDeF45PIpbPs25rjZjMg35Byoz2BMKvUlVdkq1c1Vsu1FToqZmIGLWFV98foc9BXCc0R+xXbI9q93YxvtJsQVmm+tZq4BvixgnctzdQ87bYP4h1m2WPDi/XVbdpw2Ep9yeIRzPpBP+RU7oDr6mvN0OW86gvP547VAXY9Pw/7CEJxRBHVb2fc4ZS0MLsYp7Lj4ag7YszXYxQaS714vVC/ffou7qQJVDSAPbFe5rNFtKbZMLgdc8c1OgtqzQ9z0qPrYWv5WSBxvQi71b+fV9e51OW6CTLUO24D3rePKe8XVZowM5UubG0QW2B2bca/WhJ3BFE36xOWbxdzVbu7YYHp5pAWiO85y7kgYEcKmSO1U1j1/gFHDuscgLrVCQi71b72BexdyzM9x5CR2opyLsUAyMexUzg1ipbQ+4irDtNyfmIEtGLLnXyrgrMVNK8OQPTNbdILO0QJxQ2NIsg2iLZBl2F8w814fkMZYF+xOr6RXASNUbH18LWsrJCmsL6zRiJP2zGwJ7LpbAgw5hjw7M9EMZjMi7wZKcBha7eA0OUL8hcTaIBLCqwJbWiVmpuYmbvI9693rstwXYUiMkcm5ib+lycFJ5NVJUjJxvcCSSgrv1DvkTsSLn8gpyLjnKP2iPr6Wc/EBAIXiBCQoTICcKm+6mjti9q7P8SF8NSexUxKkVSbGyCyRFlgbCtBWjgZBHycuZK9/283uNon0qwGSy3fptmxsEAjTk3bau87o2Ys94X60MqaVP8gn4vGKbTvXZsUQvm2QPN08Lhok1g4xFXzqpGiQSFuk0YQt7I8RYY2XFniZ4S6qW1fTejm2TL7zE2OCkmLErV6jWy/QmiRaYi6fGtC3kVfWe9blgBWjyLt5Utbx080l08yNCFWtEg1iTs0CVrwN/OpywYT1wxbTOQegsHIn2DabC4SvCkNIlAeiZfayg3VQh7EzezWc6u6Ok2SC9Ki69Qy+iQvdAC1GyBhi1yC/cgdYxRXQqIw6z2G5r6GyCecnbf996FtvlvjWUaraVAB14F+3OykmMRpkpgqbWT9n5xrery6tv9xNP+hn2JN2DJJw6aLb8lHWRQ+ThKkas4igFqCt06P2gP9BEnjDPudwymjJwhfMZvQ4V6nBZohO4JSUIjV2Uky7lWLMhAX96q2G904H1oIFUlp/0B3Qseuyi1Fte/RYc+DY4UROvlfuTjXXsO5dW6T1QERO4fFRQuuWabs9WEOrb62aItUExUoxVoT1IYO2CSkmxtSbsNWPrcZl7zrBr15/gG6Bmmd9JBW4BckG1BBfVrD2clqz0FzMjsp+t1N/UdsgPQJoIxngyCfHjKhRkXkF9wosSBBAkf5T531rE9KlSYUoC0RU1nHWB4A8GkQK7ZkqrLYJ9IP3AzIZ4FOimhkorrs0LDIguR4l2vLoPRuEEE7dLu5+J9yRltFJnHrSGiExFTCQV8WRi8Cwwol9W1ZlIZc1Aq+bvqNI+TcC6hNilAcbk3KDpPGrA+lfqcE6dpR06wjvVxdX7wPTKkCzOsPnpARInhWq4b08lXWuIHYbUJjUNc82CAR+uZvLWu+XnlPUrJY1/IPCfZI062Dm+x1+zbz9NAfsl98O84RMV2FLKQ9vzacFIiprGaSjlHZcVIhZrcMmg7FAWFXtwHrd5R6kGyAnNNEdpeeUdYGD5aJDmj360AbRcdY9LLIjLFfkFfrWa/dzb9k2wlshlH8bBQGbFAWiXimGCduLCtCOArUsxtqsNWAjO7i4ZaWorC92K5irVC/3N5auCrPslbWfG4SFqLFI4tqfuQjeOrglvfRxtvzhLIvXM5i/scyxnannBcovtm1eZXGTYxpNWBOjqFXD9thp585tkrJWyRHSorCbtpe/2vvjphZYXySJAtEQ7uWWxVwcXgfpWB3GQC8QXSVGNymPkFvFkb3cc5tWZEPaYn5ryj9Inx41MV2qatY95dA9HFxEk91f8axlwMYVoTWOc+zzK3d6kSAAshA9ErvBNNCXpbIuFPmLqw53UW2D9BqIk/jjx1vj5Jhd3CAj8k0yyLga4sObU+ezthIsD1V1HZw5qnVYFQwu0tt1Q/wYJhYbMEyL/uZajPURN3NRw3pZwjqfBwKdzwniJ3PKYvUafazpFlxygZOlD5W1aZqQH94Os2dfCl6xbtCC18/UA+5hkEUpD8chXaa9KA+bm8EY55lAgvXBQZvCeh37CRtW8LAu0LOSa4HETHzRfaQHYV0Ik551YP8TVtI7NogO3dOiW6auEdgNJ1UG29Yj54wQmPUGrILo8T3VijEcl+dig0gtkXoT1rBm+3pRWa/c4Q0uxm0gMdOepvfyt0EK3BzzTmTeY0uLaRukl+BMYtgje3ndtXKZtmHYAjaoos4PMqpMNU/uI4pwVh1gNHAklA1jYZM3+coay7zzcVrsfZsrnqojQXqjZbAOI4hTUzrTXw0rC2bG1PUXe7L5roPtIi0wIdhSX/UWZY12LxtU4UWEJKlp1dzWIFPWRgS4IQHUwXNNG1b478CbNYMZXlkPbXUyWLXAN8h4FgdlDerl2rL+JJROlvQCv/5i0eusuvWY3yHIBSKdiIc2LnKMbcg5g6Gmw0G5mlatv9jC46Tp5qpq248EwWmWlq+qzQw/wGgYGcgNbfYUC1HecLr1Rsdxc1p3rg6j3zeDKjG6aXjLOEX5hRxDnrHKGnlnhL61JUw7Vw3Vi4y9NiV5rCHhjZGRILUGDBqMql5Z5lW11b9GqGKtO4RuDKxzRSAdOSwYnxyrxOT0hBjdEmBOOZbtX8v9FXnHxltTHg6BenWYJO/aSCqYq6KqA2lfbzorF8QbrurnYZ0b3MSoanaJy7oHoMP2eqEf2G7ypMokdMazDoGdLZb1saYb02zGhCCBus4OboTaxIngVci7U+PNgH+Uh4OQfjKM8qSYuHpgiV/QaMJK9tUrRVj3r6c/sp7+SkS3HlLWbB3GDkAbdP1F3RQOPcqx3MAG7ilRnHo8TGOBxLG4Jc5aGcwydU1XboAdERVtkOzAOidGUZphL1ry6AOnR5pf2mvxVXU4uAg6bK9H4axw4DGDjcgx0QZZ4dkg/pgd8hDiw55VAe48tiJUdBpwB16MTZyVCz5pRZ8A634Kay9zFYmwQIi2QXq2ISRrizywyEaJstEgRB9rPdaMBL74VgjBiYwOx7LoFLCw9pW1xz+Ph2nzV0euWFScNcQQPnLBcBX2zDJc5l2WbB89E9lNOX+5WyI9m+m2zGFdLAcn647MZCRMXhB9uPWQ32EoPAd8DjzKsWzfGu7PwyWTi7X2wvfiwvSSQqVBZoPIQA0xHyyFNe1cRfZVA0X+4zPF4QSVLPMpda/pNRtEmPm9ODYICb3yTE5PNe9NaCexiFeVWOmcbRzvDOe4KkJy0qbEaeYsrJNC91SsEFTVeVw59g0DRcEGKa2I2T4aytoGKYRdYdFktZg3HXReEN3kXBIOSavM82ywlOGzL1EeUi7mIF3SpkgWW4qgTrRB6g0oBy/CSwETV56fc5MpDgBpTEJLeB6Jqiysq5z3mrL2Fe5iqWpeXXvRIDrOWjdBIrsU5LmUKfQD63WjskbuGczkV+RiJgdjkDJpk6yZEZA2Uj6HMdYl9hXlvGiBDAUB2PJOqO2Pnoe1N+WcRFa0XxxqZ4slvTO0ko7kUMAvyjPLsXbD1l/grZBaIxhkhAgVrcpb6XTzJC9FOp+dyn3OAunLG0JH7JdMM9eqWTdRWcOi5gcJFTUJVL2lK5vrJgW2wC7KMyygy7ZSzuTgaNNzf4zdoTKLMbK6uUqAthTYFNYl3wLBVswJyjo/4MxSi7Y39OzFXm/Zoms/dKQOI2O9WLrwgG4t+CPMrXffmXU7IMDaAJaDPheT+BnzxS3K2kix1rIzgcGslNwGKQzQjtDUVodukc0KKpx3pg6jr7C1stZNxSJBnrm+NQNrgXseF5N8aiXuWglQVvavbRbWBq60IVHWTSEfpWgCgbauexnWvg3Sgf3uDy7iP9kOzaTUrZshbQhCmzg8a1HWeYN7qR3COpGhkDDImDQpJs5P4Z7zvJnwkjbDf5+RyUtsEKJtEN0YZZ3vkKIOPZDQs9bHm26iDQItNojDtRjuMVycU4w1a4PM+degIGG/IZ/lv8vMFsMfq/uBbhE2CHSsDmM4d1LHWeuW7IYQgWs894zwpdkUdkdsawfWUrmONUbZXNb5jAhr3QF0U7RBOlCHka0upz1r3ZQBKnANucfmtEYuRnAzNcCTYB3no3DPE8EGyQif7FZVIHGnKt16vGWLhSCV12IeE6ELghMd0GLUJb10U+ET4arFyLgncjGBo7EAt9pQ1UrPm6bwlJkRfrzKAqA9695pmcLi12FkZ0uGsxdtfbzpFgFsxrPGfzM8QjMZY07cnG8bJOqncGeQvCXYIJa+tNQtWQmYWOU8sEEWuTMSr/CAzqGum+oxKwww5gRYi1ycSzNT9CPddFtwYPoZ72RRnQv1nUHGPSfGWucF0a0jOiWxWYvZEcOS1cL9oFcSfqSH6626Ay1/Vjfd0l7VSkfULfGL5WplrRuHUoPnkCHh1CI0cxG7gnwj6KabTFkvYtEJwmgFXdJLtzlzrcOw1lJDt0VpVqHEVRpfDDXtx80SJ+2lhrVuMQq7g8SfN2VNfwZXtrza4L/frlf0ztYtsTk2yCJHgrDQtnIa1rqpN7sxyz2uNUksF+ckZObpDNDyvG0LSU+CquZpFgAdutdjyjpfCFT1Ys1kZKNPdMY93aLx1poagzR5FjebSsn623IsTIW1jKIl9zy9QuDWuinMK3BhrZtuKsqacHWTFw7YhJsQg4v2rHVLdwjxmURFVotcTOAomW8bRApwulINNqFeVVhrIlwu6KabFNZOMqfFFLf8fMmMnmquWxobRLB30f5lw06RixHcTH2Ez1foHvG9GX8NqnV+XZr1GUmNmFbLg2gbpMdhXeAqjS9WdXM/atQqFIXyB7r1dhMz7hncM00B1rU6f/L3uDgvB5QVKTVa62+RuOdMQe7XW5R1LaIOrvfTiffTCOE3ku43PdWsIJe0fHrvvEOa/RbihQ7qY67H4Zx0n8FTo8rDWuAew8VEhiapUzP22lAu16XPmSbMsK+YqQrRINUpfRzolgxrDN2DRa7B6Mlq4pws8non6KZugwhcc7jHHLseF5UYmmQjWCk9hqizAsmwsKZtusqPMDarE2GFhcSiA0R1/XVbdso6z6RIXaQvDSakER0NolsM7gyeUfRhszYpwJrnXiaEdZyKVloRM2bt4qjf8tiHtd/BKjUR1vwZyIgIMHef1zMbe7VlnEROfugeCbMSLJLKzuoBRt3Ql47lE8s1AdY1XmgwIjaWnwpnCw7WUbI8zmMJ7tOVqrBPTgk2SHgGiq22rlvP2yAFWMSZ5qEV4tsgegajbhJ4tz425DYIFaksBz3PWiVqgsTYIyBT1ip+ilRtZzPAhXu02CCVcSB2U+933RKVNRCyiGqaTxqmlbVuyscO5VmjMsY9Nzlrc4TMWTAB8b6uKm9jQ/eS6M8tWQumOaVC13l8xobBkhm8tTk7DlZxMOFEo2cx9nLL5vNBIYBFHWQMQvdwgFGLit5SzawfnfT3cEGese+ZqNgO99jj1uNi0jRtJbiZCS9KGgVkBxirhsFbIRMV/qBvzJxv3RCGdkJ0Y22QIleHcTFAHRyNVhYMUx+IukkcEKMVUo2ZUe7x+EyTj8imPKRcrEG63BqR/rWVUk3HKmxcOXqvyJ5p+B9HLxlWeH4PYWKqpTHXac45ui0bZZ1zozH8qQULmXmPPfzcGOtiWN9Lt94U2FJSiwLT5VdzJt4CcXgY1ogjMMdY66RJMXGDjjJ1Pdq0YYUvjC5MC7CeOqNwUtHhez2trPM5vg7Foshr98hy84Lo+oua2CIKDSmf6tNnuHePUt4FFh44QRejCrCT8VUKO1NBvybJd9s/wukV5AT7SaNTvA1SnzqrYHdoX6Snuws9wtkipAsLbCZvNvHygugqMRrYKvzBeeSTAqwnmxxJPR6SGHVNYsDdwmUzAtSkjcW2MjDBnlnOT4uwPgNh2It3OSHbKMa8FAPWbUk2AmauEGbeW2Bgs4UOrHxJq+qeBLMKf1heuUursm6GQMTB6kwAaxbY7YA7clJM1Ahl4hfQlTvPvvr8pABr4cdpEOsmgzUWAFjczHte/cVCSW9+3ZS55IrPsJ0TeOfxUAXOcY5G+HkKL1RS1eDGWo+xSkhc+frESe4jDT/Lnj8N3bs1xOx7BujCuT3DatvJDwJT4yBmO1sIQBNGXVs5PdW8N3nMe9WG+Lx3awh8rU+caoU1M9ZCeTieUk3HAtz81AfWJoXuxYHbZuV9zoJxdoS91QY56xUhMJhLDa2odeMPOTFN6kIpaf9A5TLu6aZbnML2rBDkmKisz083OeuO8nBMsD9sUI8IaTlkLYnloRyqJ0K7lIez9BarL1q4sjhh8eRYA9YNWYFqqo2dgPzwJj/Yj+ktQtieDt/r2YYhdPXF/EI/GqSg06PqFgVpn1HufeSYMwPGa8g55B0Jsz03PB6qKus4gSy1QZJCSVqsD2FFbCdchcBq/w2nx5shrGmrTXiwjvx4fxsRwfrQNkjvwDofXE4u5PwYtsBBqKz18dW7UCbC5Bc2lzrPJ+QY285MNLmcNhnDCduzJZy0QX1CTGQiJ1UVHQVs576VgdPsiCiecdhWvXBU2EDMmUspwZO2TZY/rAtB1r2Fq8MY9g3/eyydF6T3FHPscwZrYHN/r104xr3y5IUGF2ONHJTYH3YEP+NybMTCWgXeNrT61s6SRViT8NLyxAUB1qNHI7aNITynodyrLYDmYpb0AtDFcnWL55DBis43uXch5/wIJifVrgvrKFDboBCq19IvmD8aEd4JJKlp9nE+Cyenq2FlphOjPKxrwo80QKzH6N7XESG9DOsik1xpkTLwOXHW2gbpPTZHRIJw1ofRIh2rgrJ+G0UpM+SWteBchAWiEm8tQrslzjpNqF5kRAiF9TnfAsHbFhtk7HhMqlQdIaKbq6y51KULcIIOTgZe/pEw455uusVziNh2K6zHGsByr5iDk6LrAO2F75H5sEGkSykPZ+hPrPgdot4g8Bajrkmz7v5Qw5BcckT5RxrevdSc0D0Ozws5hTGEt7ZBdJPPqGbuUG7Vxo5RjtU4CwSrmvtXgMg/5GAcJ0F9cgwkwbrdAUZnyZhwhjXbj5/nA7Gq548IW8KQn80iS3xpeC9rZe1FgyxWMidfYVt5rax7E8hs+guZuuY5NMvxC+AY5RsbX438i4BzGnXd2i/wH5wY8yt/d8pI8EyiQvbYFUJ/AyfHvDVbhy1+ZztKf8w1u0LVMnvuNRjYdRuwvzCY/MDdEuZyWOy52ltctso6l+Nyg/iHg7EA52g2PNCt/6iPq15GOPFFon/A+TOqGWt79uxrPKzPNRhbrWVwMQrYNsRHgLQ8n6SsIY2ihnCQ8TirrF8/wyvrypmXWi8vVNSyoRV1b8Daq8PIFM1dGEVNOGJntbLuMTqr8KTVrq2cPcy94o2zdS6BE+XfW6x4BfXBRYhT1kmetXLIHrNiTTTXA7OdLm+e5WGNypr1fPjtxtshms89aIMUimEdxgUXun7MEXHtF916nNsJ/CFNyi/eBjl6rs4p63IejjI8jPOrbVCrEhPaIMyLDQXi2wnQdgYZTQOwnHk//oBm0z37bBvJuh9kN2D2zGEortsXcX6IsjkWNkJAty6BNRYgWKTvYl02q0C/167rHdAbZocAZxkGW5WiKDQR1JLBxbMSEWvHMLStaJA4Qspm38jUtbNy2Qy8yVohL7/NK+mZ0y+GlxiG5BSnFXXvwjqXX/AYa0L4rHuZfEn71boxwlqcDOOyKrBwvfbaad4Codw7ynIQ1CNBSIxyTbRBVLLtRS3NfJbC2nsn/ohXT/Gwrpx6oWVDKIXraV+kB5R1nhtMXlCIesDOOGF7GtY96HtE0Frgkvf0zMnvc69+hXKNnQVLufcGA+qmRF23bYWYKSGd5FsHK0YvBY6xI+1HTguDjKdf8l0hwR8yQN231uBeji3r1WFcyBSpIq0dWBNbb/ye5jYfrmcIARD4uHKKh/WrHqx9zhVzcCwC0CpTzmOhHcBaktdaZaq51ALB274CYFqqhv9Dpmdtd0qm15q1KSapU2zESsS5RC/LdcnksrRjGAsO6SDjnhNjXYT2JpnpZeksoOg6yMfGqmNvQaMSVjQ/Pd6AMSySC8GFYGOg5MC6KWGiSlSIDHqJMxhVpp5HKexgBa0MHGW9wVdPC751cJYSihEYhrY8erghRE0s7eXFWhOy0HUYQRce0E3gTuv9mbefbbVAmOPT4v3qdjzr2ORHsnzWRozcJRFnCRHUzoL+zUwVdpDAt67DTXvDD5069gQMXXQv8w2yYgRCUQJ/9fRg0HLGtTPgZzfHgdgEbG/SlD2PLoWNn+st+B0OrPUh1TtQJlHpmOXFBvCfqWNPChYIH7LH+NVJXnVS1RhQgbUM2EkJnGQhKs4Kl3Lw2vQs3OaffV4RI0JOPk9fVaf63gxFdVBpgQAbaOtPKkr5+3RbkqxugpHNQbNKoNGwIVO3waQHgGnO35VWo2k7n+0vZjavj6PlTWjJ/mV9aT/2jsmyxx5ulFMzJ5/j3v3yCd6vRt7Nk7KW+tZJBXPTgpo7qwyU4OiZCce3tpyajFNNJ0/IppVuvLVdrzjALm24XHK2Y0ZhtYruOWW95+6PAqnNgGWZkKGQNnCZR1vMVeoEmh60iyvX6s3e8xaIJCLNex4tW+SV35BjyDMm0x761UclLGy2AWwlGyQK3ADRE2KaEVYIjiY2cxk4QvvDXts7A33vWDWAtWOFnHgGShuv4G2OQEYb0WonlNq6LcO28Yrr6D42F+37SLMKdvWs3vA9AeU49Q2tCeTo46m3nuZeiRxzAOgZAMg5AdBNUJ8Yo2QPcL1BiAhJG2fdlJ1V0Mfxf5AtsUKmjz3uXXSEi9EyWcYPnYnKM6sHIpejul7cpsP2lrcF0vrYENW0532IPHI4dfwJ7hNeOVkDlmuMX92A6GiQOGUNkODvqirrNMmc2DNLY7AMz0/Owt2+Ef8ihfV01YZy3j1PYDECLOlulVfGWEu8f619615gtb2oytqNsdbHUG8BnHCQjuJ7Y+osV2wA+fWi71d7jgFyjgF1FKRVK8SAqg1ChF8TWxkmBtTOUsjChYzh5Lde7f+4F96qwdU7wlApNyrkbh7UHLQNOZC1FbJsm10fX1xY2w290XvSAhEtDxHYBkwd56NAkF/hpC2nkvkZ5JyMf5AuGiR2UoyVoKjjokLEL29GALtBLxFena2HsMZZPyysJ998GIYuvscbYAytEMJtSG+U1vBntckSsmhwLxth3azojaDbIlggAFILlilIMPnGw9wnBLMWPVVNQf1qjKpuQrrcIKlC92QWiPhYPEM0I4Dt/IBSHg5XanCdP3L67LEqfOS68EOn334OmjNjkCkMhBsp+GZGPQc/RwCzZrRuuumm6Hq0KGniX6WzCtyNTmtWxiif+Mkwz+HgIhuyR/kGvF8tQrsZY4VAnJpmW8t1pmTaeZyyJkk2CP6AoTIcwdAW2zPjz082+YIExHbUNbTEPILCqgAkpzPRi1700tvTyyHZIpbwx+ESkzMGuXWO8stnGfH4FgNqVc86yo6OhnUK+iXFWrPqupG34CXCjJ4+8fos94UTrz/YcvlhCKO0wWitIZltpJtuuukW64QIFgjHFW8qjMHbIC6XwvYk5ZbN+NXINZ9xEWK1CemnmrddKUYmaW0FYLM/AH3r19lLh6fe4GGNQefNmQv8ZUhcMV1NaN100619coO8KG6Ymwh5NCNk2XuScovlGHKN5RwkTze3IX7WYmRrJ3TP9iCfFG/NKeuV/fD0RAXupWcly7dCMHH3jjXeBBn6yyfeeAiG990bM27I/MEgwk/TYXy91pqNBrz98itw8sgRuPD22zB59hzUKhX6fB0yVhZyxSL0j6yC4fXrYd3OnbB+7276vKU3XM+Z1AbPDSFoQar96GPkERtthrw671kg/qxF5JooTCE5vjoJ2uqwZqqdx4FbNsgYtTQyJlQKWXi+1oArQiukEsLas0KG972LO7uFuUK86ejeE260CImAum7LFtD1Ohx+5Lvw8oMPwVsvvAB2o+bkDMFLW3dhYk7pPydfIsHUctPKwcZ9+2DvDdfDnmvfAZlsVm/QXhLSABJr1eAeslf1kwhrpiGv2IkwyDPkWoIFEje4SBQcDSVlnRRvraKsRSvktWodrvB/MPrWP3jNQPCFWJCgPv42ZAfXcWF8fDx1FJUjg7R1WwatXq3Cs//7a/D0P34ZKuPjTs6QHOYNyecgY5pO7hDMB2ZASGs8mWOmPsyq16R3mk0CJ198Do4/9z148C//Eg7edx9cdtcduqp5T1gdsteI08tD3iCHZk69KMB6NgC1Z4G8JijqpEkxKmF7bYfusdcKssK5qaC9og+em5iBe7GgAv7gC9M2HDldg51rcsFHj73ydRi56mMCqNn7zA4wCJP8iWhGL9P2yqOPwXf+/M+hMjYK2WwGyuUcvTUpsDNgZQzIUHljmkagsANYkzANqpOwqYlZ/JpQr9P71Wl49LN/Dd/76lfhxo99DHZfc0hv6GXLbGFAUfZYADZyiIUJcgp5ZYfuawV51gakbYieCJPeBkkJ7MTQPX/BS4acBS/Vm3DAH0196HCFgTXQjfTPsOrARxylRIRzDWFKMvi3hBDJi0D19+vWxa02Owvf+OM/gde++wjkKKT7ENK5DOTogtDOorLGJcNm5gstMucYc1S1C+tmw4Y6LvQArNUotOlSmx6HB37vd+HIY9fCO3/ixyFX0EUIlj6h5VfYgXXKJIoz2HT5zrFDX9FswDjlENuQU+ysReQYY4HERYNEQTsVqLFFRoMw8dZpQ/haJsWwP6iQhdf9GEVcHqQbAcvjBJ5kZQymjj0OraOz/EgtXydNTMai21Jv46dPw+f+4y/D0Se+C+VSDvr6ctDfn4eBgYK70Pv9A3n3ts/9u7OU847yxlv/Ofw7+3r/M/Dz8O/4+fg9n/sPv+R8r27LT1W3ciKCLxSJyB+2fNeZiabDKZZbhTAKJO3gYtLMxVQFc0EiTdOE8MmUtX9bHxmEJ71cIcB612wbO/yAs2ruJa0sjM9oiZ1M9q50Wyrt/PHj8IX/9GtQvXDWBW+/C2p3yQVwxr+VSu5SLGWhVMxCsWgFi/MYn/de43yWB+9+5jPx8/Fv1bFz8Pf0e88dO6Z3wtImdPTfRCuEndfhsWbs8Ne4dz7+WoXzqpFfyDHkWQSoo+Krk6rDzDl0DxSUtSy3tdQKwR9YzMGz01W43cQNQF/5vaNVeNcVfcEXTZ94xsnEl+1byW1reR2CpOn12gpZSm3s1Cn44qc+5RQeKFOoFgsI3izk6W0e7Q9crAxkLMMZWDR968Ng1VO47/0K6U5n8wcaGwSyjSbksk3387LofbuWSqUyDV/6zd+E9/3af4KhtbogwdIHN4mEuZi2GhtyZ/qEkLua8skZqPaATS/anmVAHedZN2Eesu2pKus4MiYVzJWB2lmGyvA0O5vxjTN1J4Yx/BYC447BL16mCFuZm9EoXuJodb3UWnVmBv7x078NRr3iWRmohPMOtH0VXaTXnwUH3JbnXZsubC0zcnH8bfo6fD2+D9+Pn+Or7XKf+z34ffgYvx/XA9dHtyWoqoX+H85YFK1UaLFBHO4IsdXIJ3bWIvJLxjVQm7moErqXHtaebx1XH0x1YgwL7XohB+dzWXiejVl89NWKYIV8jf6tKYBYnGpuaBgvo/atP/kTqE+MUohmKTSzLkjLWecxKux8PhMA2in3lcEIED4SxHfOfLXt/w1fh6934e2Bm34efq7s+3A9cH10W24wlxUecI8d0qy3WCDIJZZTyC3kl6CsVQYWbQWWpkvklNIKiQvfi1PXaIUcJoxh/53DM3B2shl8UWNmFCZeexASBwW0ul4W7fBDD8OJZ592PWYEJ/rM5axjgRTyVhABgrAV4azUVQV4+4obPxc/H78n/F7XA8f1wfXSbSmqakNQ1a0qWnzt+JFvO9zxG/IIucQOLNLD5LDEAlEpOhBlhcyPsk4B7LjyXg0JsOsjA/Ak3VajPrDr9NnHjvDq+sL3v8gw2hD2B0lYLb0slaU2Mw1P/t3nXGAWs8GAoaumLQ7ShjH3wrn+Z7DQxu9x/PGSq6zdwcqss17V6Wm9n5Z89r2QE7yOMwKe+LwJVPUrFYdLvrKmh8uoMLAoA7atAO3UoFaCdYQVolKbMTIihFHXT7Fe0GNHZh0j32+z51/3EqlEhfGBVtfLoD33wANgV6fdKA4P0q6atjy7g1XT86TF6Of4n4mf78yIzLnf60Mb1wfX6/mvPaB30rJQ1QBRk2Cmjj/llBj0W7VBHAuEHVtDXrH8UrRA0vBzQZR1O741p6xxGS67sPaXExca8M8vTHNfdv7ZL0BYwcF0ZywS7zHxixQYOqX1El3qlVl45dvfcAHpDx4WXNsjBDXMWU3HqWz8/BDYGef7/UFIXK/D3/qGs556f8HSTGXNcCLkhssTvzLM6PP/wB0X33xhBk5PeHmr3UgQTNr0XZ9d0P5kmFQTYeYK6ygcxpX4kl0y4EDjOXq2egw3hg/sF04I1c/fepoq7Dd4tSz1rmVlebS67vb22mPfBaNRpYB0Qe0o6myGGUBcOFC3Atu1RfD7cT3cE0cWzGbVWU/dlpCqjuBDcJ95jHyZOfk898nPYrge61Xn4TF64TWeYIGkmQyTuinBOsYKUbVBWiJC/NsVffBwcKlB3/X8saozD589L4w+/wVvG/PRH0ZUJRlDS4ulsrzx+KOQyyMcXd/Yj3tGpTsf/nRaHxu/1wn1y7nrg+uF64frqffXElkMOQ/5Q8kIeD363N9zr3vw8Ay8cqoWxFbjsrIPHmJUtWokiJLuh7lON09phdigNvW8xQop5eFk1oKX2fCYb7/EDzROvP4Q1MZPMmdGMz4yRKvrJdEqExMwduwNL2bacmOmA0W9eKDmFbbhfH82CPFzY7pxPXF9dVtKqhoiVLUZPK6NnYAJoSDui/TqXhKud24OqtqeqwUyF1irAjtJXbvAzsHzvhWCGwhHYcUajee+97fclNDEuGsj9rSqWxe0U68cdqAYxE57ijqclbjI3d8IBx4dD5uZTIPrieurW7cxW1bir7XKlJQbdDn79Gdbaiw+7gU6+H71cBm+HaGq004xbxvUqWAtsULaKaIr9a5HBuEJKwNH/Y3TxLjrl/nZY5OvPzg3dR11VtatY+3C8WOQzfkzDN0p3/MVnjdXO8QJ68uE64brieurW5epauF5eXEBuaqujh5zC+Iy7dsvzTj88VU1cqm/CMcFUEflBEkzxXzBp5vL1HWUby2Lt25R1f5SzMMzNpMs5cGXeXVN7Cace+azTFwkc9ljROxDQzihGQA6bKR7lulzp508H0HUR2Z+w/PmItacsL5MGNaH64nrq/dbF4V5GMIFvkGkTBcz7vnzNs4+/dctU8sfPhwmbfIGFp+hf6pJQN2A5JqL8zKwOB+edVQIX5pcIT6sa2sG4RHaN0746tqWqGss+1UdfdNbbXZU15TOTDIii+3q1hWe9YXRIH+H41MbnVXVLeraMIIIEVxwfXXrVpXNqmqRBaYQAWLC7LnXYOro41JV7fMHeYRcmicLRKkazLzBmrFConzruXnXBXiCy3VN1bWY4Onsk38l964j810bEJfkRbfONbteDQYT53vSy7ypazMcdMT11a1L7I/YZE0QEcqLr3PBffapvwGxEswjr/Cquq8Aj0pcABVQq8RWE6ZmwKLYICrAjou5rsep6yZxz3Zsmzr+JFROvRSqa38hzC13n107pixYS8C8XhZ7adZmweR8augqWPP5RExoIqz1fuvQwk58EybDcf1bwgCmsADezlB+TL/1lKCqK5yqphdSR0cG4XHGAmFtkLiai0nFBRbPBhEqyMy5cowIbTybsSOxD9Oz3eOv8cUJTj/+GeeruBAdWT0Cz8MyYi12vXRqyRWLjPXB+4rdoeIMDti5QlHvty70sA3g+7s0MMQ3Sah0PvPY/+T29HePVBxVzXKnnIcnBFCr5K9WrgyTVlXP1bNWHWhMirnm1DWezfzIEP+S5LtCgqfZs6/CxBuP8J513Iwlfo9qO6RLWjZfCgbo02TQW1x1bQSBR9l8Ue+0rrE/ZP06qv+HnjVm1ps9d4T7dCcnEWN/IH88VV1XUNXtDCwuepw1gPqMxsSkTiywh8rwdfYsh5UavvECb4ecfeIvnMKWBhuSY+Bcf5MLz2n1rqLgrIG92K28as2S2uzO+urWOVC3PCeZVu6F9QYc8M60+B+OOZx98i+5T/rn70/Ds8eYSjAYV90HX/VUdU1ig6gWGZi3gcU5wTpioDFJVbPgFpW1f1vzYH2Ynt2ONBlgP3SYhzWW3zmPyVcMwbs2ovMCxA826rbo8BtZv6Sqrjnrq1tnL3UYYMsrwBihgAMe4Oef+zw0KheCT2g0CXzrxdD+QN4gdwZL8FqCBdJIsD/i0qGSdiyQ+VDW7arryIgQH9qrB+GLbBjf0XMN+PLTU9wX45z++tTZsLBuorNBhOd17HUnl8ENW92t7tVJ7MbmrJdfzmnjVr3fuiKmGlofy/q9ERbCrU+ehtHvf4l76T8+MwVvX2gAyxnkToyiTlLWC6aq5wTrNtV1XFGCOquuMWdIIRumUMWz3leenYazE2E1GbtRhTNP/DlwKVSZyx4u/jo466peYum20G1k5z6niK3tgdoFdrdAmwQnEFw/XFbt2Kd3WlfYH8H0FqF/m7wtytgkZx7/M6dsl98wHfOXn5kO2OLlq34MuQPyCJB2y3fNi6qeL2UdpbRVixJIlTUuIwOAVXMr/llvtkbga8/z+a4n33gYpk98ryXonZuOLsZeajukK1pxaAhKI5uAILBtEmQ46w5FDUFFdFy/0shGZ3116177I4Q0P2lu6q2nYfIon+IW81WzqZkRJVRVPyBR1XEzFhdstuJCwjpK9rdVlMAHdiEHZ+iZ7kH2MgU38veO8qF8px75Y6qy68yggsy7Yr1tkESL6OiQRQeiXYe1l98AzaYPa9JlsHbXC9cP1xPXV7dFVtViojZp4jbJWJU3yIiDiqcf/iPu0596Yxa+9eIMZ3+UC/AgJldkQF2D+ctd3Xa43rzBWmKFxJm+qiF87Chsbd0wfINu+zPsRJmvPS8MNk6ehnPP/G3gf+IOI87CPvY6oHfr/RMAwrn1LsW55/SyYIvdrMKGAzfSA8J07ZAuATYLameh67fhwE3O+ur9ttAL0++C/shYZP5jpj/7k2SI1+/DxwBnn/orqE+f4/bvP39/hrM/TMqXtUNOZr1agrIW7Y8mqNdX7JxnPQd13QSF6ufMRqsOleGrPqjx9uW3a/DFp/jBxgsvfAmqF44K0SHyML6WkWLtX3cGis1ZyA8Mw+rLboQG7TmoYP2O2llYu+uA64PrheuH64nrq1unfGojvh+3RIWZUDn7Clx46avcp/3Dk5Nw+GSNmwCzog++lALUdgSobYiOVOgOGySFulZJmyr1runGfJ5eojzHhth86ekpeGu0wVxSN+Hkd/6A3truJZBQuseIALX2rztJxYZjLWy58b1gGxaFIwvszqpqXA9cH1wvXD/HAiENvc867VNDVDhuGPmB/Z/YDTj10P/gBkEwi+eXn54GNiQYuULF4MuQHAGSNGsxdhLMXC2Q+VbWSepaNRuf1A5ZO+yE1Ew6G9pbxMHG6ugbbgkwT1UbBhMY7ydxaQmib02hqP3rRYRjfQqKwyOw4Zp3Q6Nhu4C0O6euQ5/adtYH1wvXD9dTt8741FyBEUNIysRMfjGYwcXzz30Baky1cmzffDHMqtd06w1MUq78g8gaUJ8EM2+5qhcN1orqOnXJLxba9Ax4ob8I32RD+R46XHF2ANv+f/bOPEiO677v3+6Z2d3Z+8ANEgcPEBREiiQkUrx0WnJkyZIiyUnFSsqupFIVpSpO/kolUTllJ0psJ04sOqKORJJFS5YlihJvgaQIgiQAgrgv4iCIe7HYC3vPfXTnvZ7umdevX3e/nr1336tq9FzY6Zl5v09/+/t+7/dGjv0C+bGrLhh7AKxpgv6hal/Px2aUpiz1c/Mjv4vGFRtsYM+PHeKyP8hx0OOhx0WPzzpO9XsBc1yj2hWXmiiWOeCT52j8jx53r6v40om0u/4H2dqTeJkZVJSZBCNbXW/GVfVsKOswqsmUTS0KfGvLu17Vgb20Kh97GfOL/VMYYnKv6eVP/5uPkfgy7MsixrfWGHWt/OuFYlxbINRjcWz58h/B0BurwK5MATbnDNSW4rJBTY+DHg89rsoJpax+qwXkU2uu1Fy9et+yQ9/4psUBpw1OlPD0oZRrpmJMx2W7/kfe3vyAHZZbPSeqekZh7aOuo/jXod41/VJXtOMpNjOE5l6/eCzF2SGXccOqV6vXLqOYSySP/yXtXytgz0YzChPWOnjJrlW47R/+EUqGVgEm+ZHNOZjd6Hjk9P3o+9L3p8dBj4cel3V8qs0+qMN8ak+c6rXxKfv+jSN/X0k0YBqdTFcomlULhPzWJSL8fslBWmbGYtS86hlT1bOlrKOoaxk7xKWu25K42tqEV1jviS5SsIuzQ0bfeRaZgVMMpHXBxBmRfx2Uf62APTu9pQSjWAFi5+Zt2PS5r6FoA5t6x7MJbAfUjkdN33fTZ79mHYd1IqHHpQYW5xDUAT41W2HTVXGzAu3MwGkr7tlGuUD54Ix1UW60JvFKSyP6GFjPhP0xq6p6xmEtsZIMP9BYDrFDRION+bVdeJW1Q+j+J3sn0TviXlWGXg6VCynvyjJsOU6Pf+34ZPDxr5WHPSvedWHcTo0z0XPHdtz6xX9HOkKCGXSceWDXrI8KqOn70fft2brdOg56PPS41O8zix61oO5HkE/trJ/Ir1JeLqTR/+Y3XdkflAeUCywnKDcEOdUyedWiwcWglctnVFXPprJGANUM+OdfBw02VmHN2iHVMybZXj7hVtelzCgGdj/u9quZEeQg/1oLrH+t2mx0FyM/ZNkOtHUQZbvlq/8Zsc71KBZrWSLOtPTpQRrVv0X/Lv379H22fPWPrfetvMioHM9iKgu4KAW2e5zIlZkl9Km5+LWfG9j9LZTSI64/TXnA8oHygnIjwKeOkqZnYJZWhPFrsa99qnVG/+Ant7XitdMpwLvshyaxD9uqxnNjAhnyA+RyRWx1Cu7R4iw6efaOtQ3VNy1MXEesoRnJlXcwb2a6T9ymfQjVPf+1M4doKjtk9nhtEDVbgB5vsb7fRLINPdseQZmo3vTAxUoOPXcpHeUcys6Oo6AulaiPqaP7nn+ATZ/5l2ho6az+8OXskHUsqs2i/aF5EaCJFrqF7h53skAdq94fO/0C2X7tehdaUY/Cmh1U7GjGs92tOE6ezjHADhpgZAvOOYLSDLFAIqlqm5VSLT7rcqn2S4gsEY3blwVgdrYYv63qwJ50Hh8gP8Qm57d/5mAKN3fHcc/GpupB0ILjTSu3EGDfzvhczJWWRn1Rm/jVfeWlpsl+DNeDtcdUm7kOU86inBtCrGmV9f3q8QTWP/plAu2HMfD2s0hdOExOyAazwC471uC+AHJ+JpOp6ledQm5oaL31g1jz4c+jqXutq8vS96fHodocg1oLqkPvzql2nqOzFK1FtJlGFyt5mnDAgbRlf8RwmfKCAXOYXy27YvmMrAIzL8paoK5Fv5gmUNQIUdTC2w0x9E1mcb+mVQhMHzzbX8BDW5JoTGjVqE33HUXHbR8jwd9YW5vN04+8372mgTvHYC5/n+XZjCKBZb6isO3vP55sReft29G+5X4ShBryE6Mo5bK1MqaGt5YLW2/E8aW1pg50bH0YN33qn2PF3R+1/i5L93JukLx3Rv0Gswlqz13vmBJfkAnMBDfnfjmfRu9LfwKjUJscN5k18Fc7xpAtmLWZiuQiak0nftgQx6itqnMIT9mLkgXiAkcUrzqKsp4VWPvYIZqEBSJrh1ShTX6AHF1ZPpPHPQ6Ei+TyNp03cO+mJib+s8iNXCDA/qhdoct5N37RTdGAY1CKkbJEZkdilwg009BiTZVLXtSg3b7p/Vh576fQuvkexNuJAk80k19JR6lYQrlEtzIJUB1mPIl4x2o0rbkdHXc8hNUPfQnrHvkK+f93uSFtOTAFGLkBss+r737WQe2X+eHOnXb51Frl4rrmWwN9O//Ck6b3032TONdfrK1UTraeNvy4oxnv+UA6TF0HKWtPr406qLiQbBCESFFDAOgwO4S1Raw9rR2SK2BXtoCPa0blP9PZjWs74/jMB1qqb5rpfwdDB/8Wq+7/Qziro5umXj0Cy9QwK7VFrIEuxxaxgV0b2OLtEGWJzI6FTYIuc51cPnWRrcMT8M2rNljbtIV8YYJsY+r3m1dQa/6gtkO+tiKUjqEDT5B4Pun60zuOp11pelRVNzdiF+VDiD8dZcmuOUvV49tsZoPIrCYjM7PRb5IM6z3l1nVjh26n8znbU/uncOSyu1La2KkXMHH+DbhHlIMyRHTI1RBRCnu2zvNGYZRA+xoR2+kZFu9p6+/Sv69APR+gZl7HxZ0486Nyf5LE79ip511/msY5nc3Mxj/5U32UC4yi9lPTfrMVo0B6xlP15hTWAep6JqryuVL5wM5uZAYWvrNzHJeH3UXjB9/6HnI3LkCUAlSbEaUHpPQpYM+Lys4NVeBanCQXNfVN/6b/j/5/+nesgUS1oMA8glo0oMhmfnhTbmncDu77v64/feVGEd8lcc6m6NFtpTtNL8yfLiH6iuWYy7P8rHnWTpMYbOTvR9mcE451vzGBNPnmRjN53MWmoPSOlPDIHc20yLj9YBmpqwfQuvHDiDXan19zDx7W+pYrx89+zm/SDObjN1xm1C5bA4BmcaKitC3YGlVbq3ZiNSupgCZ5vpwjr5+yFDTdrAFEVetjgYBa50DNzlB0DygWpobQ+zIdUKwNAFNAP/6bcQxPGa6c6q5W/LSrBafJS7KMss4hfHq5gWgzFqelqheiZ+3QS/MhGp/Op8HtW/tlh3h87BVtOFwsYUU6j087f5HWsf3J3gn8waM137Ocm0Tfb76BDZ/97xawKX9NzSXlbJ+adhTDPnq9OmmDAts0mVOC8rDnQW0XrA1KHC8RUDOPezI/Ula80rhlG43rC4PFypW0aU8nb8IrlAOcos7DvVyXKPPDkFDVmC9VNic2CHfWCZuLGsUOYa2QgnMGXduF3zTGcdhgzrRvnMniZa7+dWFyAH07/0etQh+fywmRJaIrS0Q11WYF1Fzs2fdpfPbt+ksrXtlG4/n1M8yAItlo3NP455R0vbMVpWpVz7ZXPWc2yDTsEH7vl58t3DqacW4ijfcZJtqdfnO6r4AVbTFs6ElU36iUvoFiaghtGx+odCi/g3PNbtTEMyDZQ1YzHVVbrqDWvKEbCmp+IQFm8euBPY8j3XvI9W57z2Xx4z2TrgFFmmCwcRV+yFgfQal6fhNgoqxcPu1BxYVqg4RZJLwdAvuLA0KmnvtYIjodcBwYx7/VzOrKEPjh6xNINmi4j8nBnrzwJuItPVh53z+pdCwCX9NR0qbT2WzbQ7OnqjO2R+U57qNoJneBpCwR1ZYypE0O1DXXszLGw1192q/zDDQ6q5Tbt4eP/L0Vn2yjmR80jsvcgOKqDmtA0Q/QfquVy64CM2/2x5zaINzlQljZOj4B3c8O8Uvnq25tSVzuasHfVX9Ue08HJOiiu2wbPfE0Rk+9IDizsylEESyRaocDd75RTbUlqqY1LZKiBm99cHFHF7ulcck2GrffJvHLxrM1oEjinMY7xDU/RGl6JQRX0wtN13tm98CcAluf659XEthBVflC12tk/KocUdeH25vxDPvD0u0Hb0xYhZ/YNnzwxxh/9ze+wNZ8ge342yIoa96lh1RTbcnaHjyoGXuDA7UWAOoJoqaH9v/I9Y40Xmnclpg4pnFN45vGOWd9RFlXMWqdanOuQT0vsJawQ2QX2fUbcGTPqtaPt7oDe1roggXOiDHZD0+W8ePdkxjPGK63H9z3faujBAHbPw9bF6xuoYCt2nIBNb+ai6gEcSVGgkA9dfVgZWVyxmmYyhlWvNK4ZeOYxvXqSoGmXIiqlh1QnLdCTQsS1hLqWgbU/JqNBfhMlqE/JB0hTjZgD3v59G5/wZrlyP8WtKNMXdkfaIkET5zRhFXFFLBVW9qghnChj8CsDy6+UteOov/1v6qmyDrt5/umrHhl45fGs535weZR85kfBY4TZYR71aJFBebN/ph3ZR3Rv5Zds9H5gfK8HUK39T14riGGE+wPTkeVv/86t8Ye6Sj9bzyGNOk4okGP6mPVjhjUj7lKfZpacUZtS2EVcr4CpemvR6qDiYIYYuIqff04rr/2P12L3dL2xO4JK07ZuG2I4wSNZza+Ic6pLiG8/KmsT23OF6gXig1ST+2QIGiHAftJXcdl1r/e+27W6hBuXpfQt+t/kQ50QqywHd9NE3hyTn0DBChsNfCo2qJS0xp3U6CouawOdkynVtJBrKhpnPXt9IL6529P4fXTWXeKHonf9d14UgLUQSVPI9f+mO9fYV5hLZgsE+RfhxV78gO2y7+O6ZhcVakhUmI7AO0QP9vnnh1FVwqhk2bSfcckgO3ODmGBrbGPsz1e2SKqLUrbg8/40LkVXkTV8wJATeLLmpzGrczzywNTeOl42gVqGrc0fmkcS4BaJkVPBGuhmJxPVb0glLX9Bcj4137QDiv0VOCB3dKE3nVd+CYPbLoM0C8PTnHALlpn/NTVQwHA1t11d/nKfYAaeFRtifnTISVONXFVS49HTeLKUtRld82Apw9N4YWjblDTbU0nHqfxC++kF9lCTX6QNhaq/bGQbBAZYNejrkVT0nMMsK/RH57vDC8cSeOZQymhJVLJEolxHS5WA7Yrl5S1R3REG3hU0FZtgdgegMRAIgdkp3qlKw68cUPjicYVb33Q+HvusBfUqzvx7bYkLtUJ6XpS9RYMqGmb/xmMpueeJniGBbkhOMWXBT1N85Gs1efoD0/U9bcHx/Gv2YN49jBdv83Elz7UxhIbA7u/DSOXQuf7fod5tWHVe6v+WXs6enXtRp+VwDwzHsG9fmHYZKotS1BzsxFNd2hqGtdV2QmLpg1xdhZwdSFc3VrRh+7HT+/A0IEfefr4r8iV7fNHvKBe2YH/R0tIwD2V3K9OtexiAnI+9QIJwwWTZ/3MmwN+/nVQSl8Z8osVCBU27QC0I/Cdg3aYJ9/2pvUNHXwCI0d/7i7hqAUVgPIOPHrWnFMqW7UFr6YF/VY4kCgoyKS5F7odOfozAuq/8VCQxpsI1D1t+FFXC05JQDpsMYGgFD0hfzguKVhzX4wot1E2nU+mOh+7WWdp2hFoh+A7CV0miM8SoW3kxK8wuPe7lVTQKrBjHt9a07giNVF8bOVlqzanoOaZLelPV8dsNJ/+H6veN8v06vRbJH6e9hwBjbMdx8WgJtsxiD3qeqvp+Q0quu2PBQTqBQfrAGBHzcEOm5LOJtBbnYB2CJHCplki3981Ya2azLaJ86/j+s4/h1EsVP0494KeujdtycfH1nxG2ZXKVm1+1LS3voevP+1JX2WvNmNVf7qcz+Lab/4rJi/ucR0BnZlI44tPz3OsDw7UYaq6HkiLfeoFBuoFCWvBpYhshojMYKPfgGNVYYuATRPyv/PqOK5ztURoEn/vjj9GKTPKKYqYZ8BFcxWDimiLKJWt2ryq6ZD8aQ+oY654KKWG0fvrryM7eNZ1BDSeaFEmZ8ILD2rG+sj6gNqvQFNQkabQzI+F+ovpC4PJ7u2ZN/tNqRfWl3/tp7Bph8jSDrK2C4+xaX20cMyZ6wX89ctjnmp9+bGruPL8f0Tuxnlv7jXja7s6visAmJjR+PULmK9B87PW1Ka2qLMQmb6jiYeKPH2RK2XqUtvVfu7Nqc4Nv4crL/4nFCb7XXFD4+l/7xiz9iUuj5rGnw3qrL3lEVygqV7rQ1j+tMKfqN/nMlbWNrDNAJVthNghovohgRX6nLN4WxIXaR62M9PRmeI6MFHGYwTYJ3vzrmMt5ybQ+9KfWqsuez073ecxzT1RADIqW+VlqzaTaloLV9Ou9DvNa3sE9HUaD70v/xcSH+6B+mNX8vjLF0dxY6rsmkJO443GHY0/hGd9FLi45ut++M1SNALUtOkjFJWyrhPYgNx0dH5Kehiw88wlV7alCVc3rMD3EzGcqJ75yV/K5k18kyiC/eezbtlfLmJg73cw9PYPrIGUio8dYzzrmNfHFvh/bMC4gwZua0R52apN25sG502LbA89pN/GmMcqfZ72/6H9P7TigZ/s8ta5LP4PETw0lqzNvnKlcUbjjcYdo6hlFhIo+qhp2bUUFwWoFzysfYAd5mUHpfWJgO2Zkg5mavqGlfhJMoE9TsdyOtf3XpvASyfSnuOl9bCvvfynKGfHGZXBZorEBNkiMipbl1DZCtqqhUDao6Z1STXNZ3vEmBmKtT5N+z3t/+NnX/EcDZ06ToumsbYHjSsaXzTOBFPIgya/sKCOso4iRCxZ6KBeFLCOAGz2MqcM/7Kqfgo7L1LYdFvfg2eTjdjlgNrpaDQv9Edvks5Xdv/O2eH3cPm5/1AZUGFnOIqm3yImqbIRwRpR0FaQlrU8IKmmY55sD3dfjln93er3pP+zjcYHjZMn90+5BI9Tj5rGFxtvkFs/MQjUZQTXp150oKYtvsh6YXWelM/zhn0CMuGe1QjBZU/Y+7i29d14cWAMmakcPmu9wKxsdNX0i0NF/LNH2nH7mgaXj33tlW9gxfbfR5c149E+L5qG1cnN6uHCnvXlvLFZfaxaYtWZUOa8RjTL0RkoMuv5uKotLU/a5Cxq95qIbF/yWiMaM6NclAmiuwuX2bfHT7+I4cM/Jd3bHXbnBwvWogFXR0quNRPpvq0JL67pwi6BNx220kuYog7L+jAXY3Doi+VAmbPfdNdwDJrlKLJEnLN9hnSsneyajo5CoB3xz58fxcGLOTcmScelS4XRGr1GPl3zsT15qAGeIJeXLR6A5LJLlNJWStpzJeY3gCjua6JBRNc8ArsvG/kM6d9/iSHSz3lQ03j4s+dGcYXER4lLzaNxROOJxlWAoq5nDUXpmh8cVxSs5xnYMml9QQOOHktkRTsOrenEY3TZe9Z3oxvNxX7hqHdp+VTvEXJ5+O+RHTjNADvGXErGPMDWNM4O0fgFehW0VYsOaY0vYcr1L01UPsHTV2O27XHG6tep3sOeI6NxQOOBHUi0Mj5I3ND4oXEksD7ykFuZvLzcQL0YbRDrC/7iR9ZqEtf5RsBrwn6kwJMBTS0i219fG8GXckU84NS6oe70rw6mMDRZxpc/1IaO5tq5sJQZQ+8r30D3+z6Hnnv/EYmBWC2IqsWgjErQ0HnsJn3EZCrJ2L6L4/K4rnTJ60zvpa7ro5g+l8qqLWK7g/9JBUsWsSuMmxrjgdj3XcWW9NpjVWGgV4swOVd3JqHvyLGfYfTU87wnZ830ferAFPa8m3UtakuHdZoS2H9TD34VoKBFCweI8qhLEGd8RMylXlwtvhi7qg1svleaAcDWOQ/bT6EHqXWPcicd76mBcYxMZfE7McbH3n02i+NX8/iDR9tx36Ym5l1Nq4PTYutrH/03aOi6uRZQdjFBk4Jaqx2GZUVrFMZmbWKM67bIzxZAW1PQXrKQRgiknedEayO6Jmu5VyB3T3Cp7Atjvejf8y1rMhjfjl7J4Yk3JzGRMbz+dBK/Jop6F/zre/it8OK3diJ7xWxKgHrRDSguahtEcGaUsUVEVojMWo4FpiPlBB62tZEOuLOnDU/wPvZE2sDjr4zj+SNeWyQ/3mvN6ho98XQFrox/rXmm68YEl6eap6C7+FIXyh5ZVnYHAuwOPtOIt9ti4qJkdr+k/XT05DNWvxWB+vmjKXzr5XGMk35f8hZjeoLGCedP85NeCpAvzGRALk1vyYB60SprH4UdlCniZIkYIUpcZjVbz8zJ7lYcS8QwPjyJr5DOud5S2HrlRdQWGZwo47fvbsbNPYnaGxkl3Dj2JKauHsDah/8VUdkbmHNnxRSpqmz6xzSjMjtYq5xjK0rbkdJM+p59WSrOHOFVmekjrJXaXlgqmqsv7fc/NNED7PqJPvU+mJo1mqZzC2hoRE1fRf/e7yI/etnznr0jRWuFJVrfw1HRhq2oNepPd+Apoqovw5vpIVqFnFfTYWVOw9LzlgyoFz2sZwDYfpCW8a5ded22j/3Y9VF8JpPHx00blDHyjntIR953Pot/+nA7Pv6+ZrfKJgFw5YWvo2vb59DzgS8RgZOAs76CZn8Us7reglG1QTTNsA+ulhJYCTDW36bBZ8pBW1kki9LqqDDYu4qLG9J69fGq/6wJ1kl0DTrqlqAYOfZLjJ1+wZPpQduu0xn8ZO+ka8o4hTS93dyIXeu6sQPeuh6ivGm/RQNkFrldFqBeErCuA9iahJQ0ZVU1b7OQDvriaApXR6bwVVOrfL+Ol/3jPZO4fKOIz93TipXtMcbKLmP0nWcxdXkfVn/4X6B5/d3MoRp2gDGDkPZH1Cx1bdjDkH7QrnwVrOry97V5tS0zjqvajANaqKJD/Ojq1ZUspB0rxO1JOxZbpu8EBt/+AYqpIc+h0Zoe1PagYzOsknYKMfW04e/I1ebJaajpGcv4WCqgXjKwjghs+KhrHtR1Q5vaIo1xDA9N4iulMjbpeiVThELyzTNZHLiQw+/d34ZPbHOrbBoY1179M7RuuB8rP/j7SLSuYhQ1lzVSPRQZaKMK7UgWiVBtK3DPLqDDVPRMQFrzWTNUs/rg8KGfInX1gPCoXyNq+qn9U8gWTNcAIgV2LIbLa9rxVEsT+iAeQOQhHZTt4aemlyWolxSsfYAd1IwAn9pPYRsS0LaUAC1Is7kJjw9N4JGJDL7gWCL0xbQYFL18pCr703e14KZu989AAyV97Qi6t/0uuu7+AvRYgwvYqCb1SUDblT1ifzWcry1W2/ZXqMA9j4AWqWgw0AW82R2ykHYraqNcwNjJ58gV3nOeBWxpuzZawisn01ZKnpOKx1ofHc14dlUH9kSEtIyaDluKy7f2x1IC9ZKDtQDYfhaHxvjXmoRP7Qduv4k31dukA7+RbCBcpirbwPqYPfioU5VNLiPpwMzn72vFF7a3ug+C+oUnn7ZWpFlx7z9G+20fYRSUyaX6mUJoVyDMpfxVRylNZiFUkdr2A3eQVaLgHQrnUItDVkUD4hQ8iCENTZiKR9vk+Tdx4+jPUcqOCQ/3ucMpPHsk5bI8HGDHNPStqgwiXpG0PPwGEcP8ab9p5FgOoF6SsOaADQn/OmjQUcYKCVoIwTX42D+G30rl8GndUdk2P+lq6u/2F/DJbc3YvrnJdRA0gAbe+i7Gzr6E1Q/8IZpWbanBUjPtlaQNBspMarlpuiHMn748ars2IOkFtx+HzBBGm8sYzqaPeoaPfuAzOtgBQ/haH5oof1rjKuqx1RxtaOeG3sPg/r8RZnnQdvhSDjtPZawFNwTeNFqb8MraLrwaAGmRkp6O7RG6bqIT/0uxd8WXatgwMx15/5qHt8FhjN9iAbZI0GCjZ4o76dgvTWVxxlHZulbzsk/3FfAuCYqP3JnEp97fgnVd7p+GBtTVHX+C1pu3W0q7oesmm/aGXcLStKGtMdCuKWrNVtem6yOL1HbtK/MHtxYB3toSBbgm8ZQW8n/8FDRCVDRsOwN1Qbowds1S0qJp4rT1j1csDzq+4tgdLKQ5NV2o0/KQScsLsj6WFaiXNKxDgO3nYcuk9oUVjQqcgOOo7KEJPEzA/YlSGW26bYtQe4QuHLr73ayVMfLZe1uQiLkDnAZY6toRtG9+xEr1S7SvFkO7+nFZtW3YMyLtlEDPTEjnfhC4nf8ryzJTwGhtEalwLcLT9cA5BNCBKhpVK4O1N1wDhwyki5ODGDn+K0xe2iMcXS4SMr94NI0Xj6VA+qUL0EalC021J/EaAfVe+Nfw8IO030zEsGwPqdS8pQ7qJQ/rAGDLpPaZkr51mMIWqYcS9bI7W3BiYAxfKJRwt2nbIhTcNDieO5LCwYtZfPTOZmsQ0s00E5MXd2Pq0ltou+Uh9Nz1RSQ61rqhzRyeycJX81PbzMcKBDcCVLcfzUwBu6JAfDagrk3j5Zrk3+NLkvpkeYRleGiaWEUztz1TxllIT/Rj5OQzmLr4lpUmKmpUSb9xJkNUddkFaGffEMeJNV14luzHIkBaRk1HzZ9elqBeFrBmf8iIqX1aBP86rDSraHp7mXT80oaV+NvxNLaOpfAZ1+xHsu8bLeNn+6Ysz/DB25P40C1NHLPLmLywm4B7L1HaD6J72+fR0H1zzdqoDkY6UBbb7U79Ebfa1vzBbT3Eqm4vQENtE1/OmRJsnoXp8VoUoAc/roWl4Amf90Lbq6J9rA5onkkult0x2ovRU88RJb3PTuX0NlrGlE7YOnY5X4MzA2paJW9FO3YQYXEW3jIMRQTnTMuqaZn6Hks+NU/B2quy4QNqE+5CCzrTcXRJWJsCWAcqbLqRQHiHbO8NjOOj6RweNag1olVUNrVHjpBAoouMntiSxMeI0r51dYI7csMC9iRRTi3r77agnVxzZ+1j2tZIxSIxOYvEvWlMPJgwvec10+S+Li+8K18wZ5tIi+J5mj1pRjkZaIIdmwcZAmeTHzhkAI2Aui5suVMRoO0tO3DWgnS677jv93hhsIjXz9SmiRucmqaWR0sTdq/pxBvwL1kq40vLetNBiwbw/vSyA/Wyg7UA2ED4wKPm411jGnZICd4iUiUSGK8WSjg0NIHfzhbwgJM1Yiscy8umC45+ZGsSj25txi2rEh7i0AClW1PPZnTd+Rm0bnqQxLLOfDwbyFVw8742q7hredamA2qNEzfVAUr4wNuBEOBO/+Mg7gKmhBqfK69a8xga4b60cIBRE8LZbXFAYHGA86LFmR8moWzq8lsYO7MDuZFLvp+Krmq0+2zGShtlBw9Nxp9ONmD/qg68TK78xiUhXQqxPPiSpmWfK1ET4QOJyxLUCwTW5jwA+zoB9jr4QNrPFhEp7Bi3DxtwDIU2tUZu6sEvMnnsIdD+QqmM23S7zLBjkbx+JmsF2yME2h8VQhtWwPbv+Tbih3+Kji2fROftn0CsuROu2thaLV+7ooUNF9S9udt+TGUhHWBtmPxXzUDc9X/cr5vxWlNa2EMRPOkgy0Pzz/DwetAQ+NGo1Jh2DSa6IV3OjGP8vdcwcW4nSnSR5gBIv0Egveds1mN1OLfjMZxf24FnmxvRPwOQ9subLktCOsCfvm4ux3z+ZaesOWCHDTyaIbYIC24dcil9vnYI0/mLJGCublqF742ncQf1swm01zu2iGOR0NQqGnwPWvZIEretbvB8ThrAI8d/iZETT1tpf51bfgvNa99vH637I2vMbVM4wdOsWRysz+28rvoYp45NFsaCiaKmyPoQaVlzFmzraJZHOJhl4OxV115AwzVxxTWZhXwNmf53MH7u1Ur6nelfPYGugUhP7vvO+UOaXL05vvS7klaHn90RxfKQneQiAPXybMsW1uwPb6tsmdQ+DcE52SJQ+60FKWONFG0/+9zwBO5P5fCgk5/NQnuPbY/cdXMj3n9TAz65rcV6nPe1U1cPWluiZYU1I7Ljlo8g3rbSpaBrVkkAuBlQW1+cyS7aa1Ydb+/kGwHAXRAPmcZuTjdnW5NkdYjV4QfmKp95zxmC6eEIALQ466M0NYyJi29aMw6L6Rv+HZX8XDtPpfFOXwEnr+arNocL0na+dEcz9q3swIEAQBfgrvUeNPtQZhaibEoeZ3tcX/ZTY+NQrV5bJAjafio75qOyaSdPCGCdcIKEBNReGlSDE3gok8OHeGgbZKOr05zszVsWyQO3NeH+W5NY1R7zHDwNdJpvO3L8aSRX34H2zQ+jbeOHoTc2+yjp2kc1A69Qa7c1j8oGp8D5/8sB0TRDGGpOQ2KHZacE2SCs0tYE+j8sFY/1qv3ypWuApgvSTl3Zh8lLbyE7+G5g16TLyR24kMX+8zn0jZWqytk0vZBuS+Lg6g68BfdiG8UAFR1l8LAeSCs1rWA9Y7YIny3CFc6ItHivEdDJ/S4vabAkSIC9ARJkFNrZPO4tlbHRske02kBk70gJ10ZTeP5oGh/bmiTgTgp9bXp42cGz1jZ04EdoWfcBtG56AC033YdYQzOnuG0IM4OTVQXNxxmnvF0ARwDEPQwOWjpzpnyQABWt8d66P7Td/ykIzhyQBWl55ULGKuSVurwf6evHhbWkeT96//ksXicn6ULRdMHZdHvSV1qacJSDdLEOSAel4kXN9BACWoFawXo6tohIcctYI7oPtGM+0I7Du/p6gtlq0AbeGp7AhzIF3FUsYavmpPvZV9BGwcQrJzN49Z0Mtq5vwLabGvHhW5vQ3epV2xQIdGYk3ehivs1rtqF14/1oXX9vZWCyuiqNwL/m4a25i0SJ/WwBxF0gd7/ODLI+zDqY7E24E7yQB7fkrMOq6vZbDMCb8UEHClN9R5G6cgCZgVOhgB5NlfH2hRxOXcvjbF/BpZxZQNPbiTjOtjXhHdvuCPOhZwPSMhNclO2hYD1rtogZUWXXA23HChGB27q9sjL190Amj7VETD9spfxpNWvEAfepawWcIUH9zKEpPLIliYe2iAckHXCnr5+wtkHykRq7N6L15vuI8r4HTStusfN6xcUJNYFYEgPc77b4q9aCoKyFEbueOh4iAAuAzYNZWF9aAGtC0dyNi+Q7PoZU7xHkR69InXXogCEdn6CrDzlTwlmrg1XVNAWvuxV77eyOYp2ArhfSUfKmlZpWsJ5xW0TGx+ZVtlNzRGegbUhAuyQAdlwAbfpYggTkFbJdzxWwayyN7QTa20kQdzvAdiwSmku763TWyhBY2RazZkVuJ9vmlQmfj2VaRaToRn1uvaHZUt0t6+5C8+o7kehYh+CqsjzAWe9bE3jWptiXNsOgPA3vWpNR1qwR4jdwKIJ17X5x4joyg2cIoE9a6tkoZKSO8tJwEYcv5nCAbHSVFh7M7J4czijpB4e7WnC4qQE3fMAsgrPMoKHf7EORio6sphWoFaxn0haBpMo2OTjzClsP8LNjnB3CKu04A+0iC2vnNgnQwtoGDJPbO4cm8CCB9x0FxyKxVbazpwv5vngsjR3H01jbFce9Gxtx3+YgcMMCjJNVQlusqZ1AeyuSq9+H5Ipb0UBUuKbHXdaIKC41VxqeCX6Ko8l/zVUbZoabJjJCJH1p13NuFU2vTgrkBJe9cQHZwdME0mdRzk1KHxYF9JFLORy9kke/PVgYBOmGOM6S3/7dVR3YFwHQUVS0TK3pyFXylO2hYD0ftoif0hYB2xSo7LIN6hgD7BinsvlNBO4qvEngvk72ewmwe0ZTeCBXxN2O2q5C2+bLtZES+kZL+DWBN10f8u4Njbj/1iZfq8RpFEBTVw5Ym/XlxBLW7MmmnlvR2LMJTV0bkOhcT94jzlkhwXaIJhpcDP3mzRmyQKINItIaLcXxa8iNXUV+5DJyIxesSUlmuRipn1GL4+CFnJXVMzxZ9gDZoqBZq4NOVXSyASe6W7GfgHrEB84ygJZR0WF2h2yWh1LTCtZzqrL9oC3KGBEBm7VGdHjT+soctOMCaMc4cBc5WFdvk0DOr+vGC+T2S8MT+CCB9i15Cm4NcY3xtzWbPwPjZaK6KwOTcfIuFNy3r2nA+29qxPqu4C5DAZUdOmdt1S+KALyhYz0aO29CA9kaO9ahoX0t4q0r7dXcWRAHe9fSp0pJB0TOq9aqn62UGkZhsh/5iesoEEDnyVaY6IsMZtpoet071/J4b6CAEwTQ1IM2WUCDu1/ZSo0JnGhK4OLKDhwK8JyLEmDmp4T7AboeJa0yPRSsF42XHWSN8AORBqe0ecVdZuDM+9lh4GY3Z0Byf9nAMyNT2M7aJC5w24qbetyHLubJJXkeT2IKPW0xbF3XQOCdwBYC8NUd4V2IgszxvXkLItHSg0TramtP4W3tk12IN3dZFove1EpeFvMCO0xQSwns2oNGKQ8jn7I2OuuTbsX0iAXnYmYExalB6/50rJjBiRLOETC/N1C0KimOUP+ZU8smA2n2ccfm6GnD4ZiObETVHORDiyay8HAuQzzZqy7LQ4FawXohqOwosyB5lW0K1DYL7jKnuFlgxwTQjvkA29pIwOdXVdL/9hJYt4+ncVeeKu4S7iQHF9cYpc2CfGiiTC7Rs9asSfpcV4uO29c2WOCmXvemAL/bS3ETxdQNawtqscY2xBpaoDe2WPnfOrlN1xPUE8nKlx9vtH1yzc4PZ08UJQvE1jzMQsZa29Io5lAmUC7np6r7epRxWLtyo2jlQFuA7i9gLG241LIH1O7nSo1xnCEq+mJnC04SWE9KQlmknIMUtIyKjmJ3KDWtYL1oVbafNSJrj+gCaPO+dswH2jEfcLvuExDkHHDT+8OTluLeXCxjM4FJF/0QvFXiAPzGlIGRVM6aNUcfT8Q1C9gU3BtWxHFzd8KzenvUVoHqFIiwX7CNrv7dO1rE1Rsla3CQgtqaoAJfGLssDvtCYywRwyWioC+tbMfhAAAH3ZfJ5IgCaRPTmH2oQD1zTTv+F2vUtzAD7eu/GPCpNF/dhxUp1gV70RZj9vxtfosLbsdDlLhrn8lj1VQWW4nqpvC+DY7qZoCtMfauR5GTfUNCw7rOuLWuJPW813TGsKaD7hefVhgYL2FgomT5+tRzvk438pgLzByU4QNqClMC5/NEPV9qS+JscyOGQsArA2WZTI6oKjpKGp4H0v/t99YoSPtzQynruW5Oh2S+fE3gT2sBals0zd0QwNp5rMzBWgTtkiTAfW8TgOTI1ufcn8xgU6ZgDVBuplPdeXgDblhbRCLSkRa7vzBUdEGczrbsaY1hRVvM8sJXkNt0dmVns47OlhhaG3W0JXVL1c92K5RMpHIG0nkDk1kD4xnDmiV4g2x0T7MzRsjemoACMYgBD4w9cKZTvimcmxtwsb0ZlyEu5lXP7ekq6BnLlVaQVjbIYoU2D+8wmyQM2loAuMsRlbcI1IHPEcCcJdt7DLw3Zgu42VbeFN5JEbB5BW7dNCqZJwMTZfdlCJcx19qkE3BraG7Q0dxIN40WI0JTolL8iCr3uF55fbLRXW6wXDaRL1VUbzZvWieOPFHBUzaYUzkCabKnsGYLBZpsqRLmNv94EKjpWyZsOCcb0Eu+tyshUC3V+VyYcg6bxCILacj40grSCtaLDtq2NSLjZ8tA2wjwsh1gsyo7imUiA3Th6214n3PuZ/JYmc5jI4H3TUR5ry4bWEVnPrMg9kCbg7PLRyJ3xtMGJtKwPyLEtZYkmulzhwc0D2OEQbpyHNmYjiEC50EC52stlRmlw/AviWtIquKw1wdZGzI2R1hmhwykFagVrJesNVIPtHmV7ae2WWiXfcDtB3A9BOKi17oeI4DKkO0a+74U4ER9ry2WsIKo79U2xLvJp4lrghndImizzwMzAGsBoIMgzdwuESiPUihbWxw3iGrut/1mA8HrbxoBgJW5L6Ocw/KiZ8KPVpBWsFbQFgBaBG4e2JoA3GWIByaD4B22j4Wod+H72QDv5Y8xV0BXrmgBvIMAvIds7QTiPYaJNtNAksAxCR9wBwHcF9ZmAMRrGRlZXcMU2ahSHonHMEn2Ew0Eyk0JjDQ1YAz+S7cZIfAsw3+ZN6OOfZiCrgfQoTaHgrSCtYJ2uJ8dBdx8RgkP7zCI6yFwFv1fv8dEVwA6AV+GbP3cMVc3Au5GosZbCMyT5HYzu9EXlE002xCm/ZguWBM3K7M3XY2AN2ODuET+X5HsizaEM3EdaXI7Q7YsAXJaADLRYshh620GQbQccrssAf2wzawT0ArSCtaq1QFtP2sEAnCzwA5LAwxKCwwDbtTHtYDHRHvXbQrTWAPGm/xTIHknJGzdr+DlbcQLR5gh8AtSszKgjfp40Hv5wTmKFx1YtEVBWsFaQTsc2qaPjy16TBbeMuCW3TSJx8NALVTYghOUDKTDoC0DbD+V7QdsUxKq09nMacA5qh+tIK1grVoItOvxtSFQ2xoHbVlwa3XCOOh+qJIO2WSUtSywZZX1dJV22H1DUqHLes8yClra6lCQVrBWLQTadapt+ADO4IBoBABTrxPosuo5DNJ6yGeZSWVdD6yjQlvG5zYlgRymnI2Az+KnopXVoWCt2hxZJLLwFtkmRoD9EBXkUcAsq6RnEtQyVkhUYAcB1Jjmvh5bI/LkFQVpBWvVZkdtm1z9kTC1DYTXJIGPVRIF4lHAHAXUmANYA/L+tQywZYFbD5SNkGMLA7RS0QrWqs2j2oak0g4CNwJALQNaPcJrRc+HnUj8POqgVQP8AI0QpSkDa0iqXUPysXrS6qYFaAVpBWvV5l5t1zPRBnUob5mtHnsjqj8dpKg1SUUtq7AhAct61XcUINdjbSibQ8FatUVsk4jAHRXgsvBGHa+Janv4TmoMUdVhgJOxRWSgLQv2sJMCoACtmoL1sgC3DLAhAW1EgG1U1RzV9oiiqqOq6yjgllXfQLRUOhko+34eBWgFa9UWv1XCq27RLEkzBJaapBqv97YMoGX96iCFHebrytgj9d6u19JQgFawVm25gFtSdUeFt+w+6v8Jsj2msySBGdEWiaK+p7NXcFZNwVq1GYG3DEjrAXBUJT0Ta8fI2CJRARvVvjBlj0nBWTUFa9WiwDsKwGVuTwfOM6mso0A0ihqOAmYFZ9UUrFWbHrzpPxIAB7xZKEHQDQPyTAO6XnBHUeGyUFZgVk3BWrW5A3gEiItAHhXIs7lsrhnhcbPe/6+grJqCtWoLDuICkJsC4IrgHQa0mYS2OQOvUUBWTcFatSUFciH4BEAPA/Nsw9CM8HlUU23O2v8XYACIWU/ULbgWDAAAAABJRU5ErkJggg==",
        "image/png:icon_forward":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0VBNjJEN0E5ODg1MTFFMUJGQzlCNDlBOTIzMzcxRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0VBNjJEN0I5ODg1MTFFMUJGQzlCNDlBOTIzMzcxRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRUE2MkQ3ODk4ODUxMUUxQkZDOUI0OUE5MjMzNzFGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRUE2MkQ3OTk4ODUxMUUxQkZDOUI0OUE5MjMzNzFGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqmMpHgAAAzwSURBVHjarFkLcFTlFd67u0k2yW6eBEjIk5AKBFAEJoCK4yOMPKcUpTMdxMpIp1NGsHUYBkRKJVqmo61Iy3MUeY8gOAjVEYogKhADJIBAohBiSIAQ8n5s9pHdfud6/u3J7V0B9c6c2bv38f/ff/7z+M65muUuj5KSktD5qFGjNPxYIfRr43OreDwYZpgA3wsowbjBO5kfc1rslp92KNAEmMaK4F+NJWgArwmw3RC/EoDRF3In4K0/A2gCHAmJhjgPHTr07pQpUwbgPAmSLCTpk08+WZufn5+G8wRIHD3P70XyOBrv3m0n/TFAlZBmoyAxkFiS4uLiMr/f33T48OFVS5YsOcqa1QX3Dnd2dl5Zv379kh07dlTgmhvSwdIF8fIOBPCsqcYLCgruStNGU1DadUESIb0gfT0ej8VmsyUWFhYufe+991YMHDhwKK5nkXi9Xkt0dHTO888//3ZRUdFMXOvDuxDHC4/isa0Ap/0U89CEgxnBxrMZpEBSIek+n88CbVoIYGZm5sjVq1e/Onv27Mm4l0PX3G63JRgMOh577LEXtmzZ8pfU1NRMXrRTgqZ5A4GAxSh3Yh6asFvlaA6WGKXlBx98cOC4cePGAJTriSeemKRehsYtkZGRFk3TLGfOnKnKy8vL1gfF/4iICIvdbre0trbWrFu37s8ffPDBSdxqhLSxqZCDBo4dO9bDTMaOHfuDoKU5KNuNZtt1AUzcggULJo0cOXJqSkoKOZ5WV1fX4HK5knsMAoAEnBZAOyAPAk33uru7u06ePPm3F198cTMut7CNk30Hvvjiix6goaCwIU8CjmTNOpVJzJ07d9zEiRP/AID96GE4Hk1scTqdifRrPOg+ATTeo/9kTrin4TySlWMVsT9kEj0WexvAUdJ+odE+K1as+GNubm4hPUg2qgDrDoLDbBI6Tpw40XD//fcnG683NjbWrV279u+ff/55sWkWugPQmknsJc9OGDZsWP9ly5b9NSEhoT9phwCrAXHuu3DhQi3stuGZZ54ZIQfs6Ojwbdq0qfzjjz++vm/fvvHy3tc4oIStLS0tl9kcfCJLBu8GtE04nJMB5y5fvvwfsbGxqV1dXfqW0tHe3t726aefliC0VeCcLkU+/fTTIdDnz5+/unLlyq9g653fzx9Q5uLfu3fvgc2bN3+Gv3WQVrZjjwD+fSoNBn8QtNKync2CHC6hb9++aS+99NKrDocjFVrTTQEDBU+dOvXVW2+9dQhgPTyJblJ0HwvrRDQ4sGvXrotSc3Svubn55qpVq7aVlpZW4lozpAHSRDqQUYOeP3DgQNDMR+xhtBwyi5dffnl+XFxcLmmSNAUleZHN9nz44YdluN8pJiKVWL/77rvT0O6OqqqqVsNWBy5fvvzla6+9tqmpqamN321jLSvQHgk6nH9oJhwiloN9yrPPPjv+ySefXEoJgVYM8SEFbzly5Mh5nqiVJ/cyME0oIiBSuDq38rmPFxs2jX/00UemaRxRKzSBihhKy04E/3ik4jkUW8mGybb27NmzG4DPchJo4JjaySCCIuoEw4gC7WeAHpYuHoMAB+GwpmZhNA9py5TpnHPmzBkfFRWVqhJCeXn5yd27dxcz4HoG3Sa0I9O9BGrcWQlaRYwQYDhoWLOQoDXBK0JZDzF1AgGmAaBp94YNG/ay4zSytPD2BoR5BcMQf03w6qDBbELhDc57W8CSMPUADU6bjfCWp5JHWVnZsZs3b9YzUGXLbtaYhc0qkt938MId4jxaXIviZyMEOdIz4LRp0zT2nbBi1HSIX4wZM2YUnE/jhyj0nGDbbRdO4+N3I8EZHrn33nsXgEcMwCKb6+vrD7/xxhvrampqOkFFba+88socsLkJSNdOjHsJ8XvN66+/ftBQ0ejxGY5v3BmjU/eo7xRoB2LzIOLFBBpptv6bb76p50E9bIdKw3bwkDEwpQ3I4DlIIscRoz19+vR5CgtZjvu9Fy9e/Kd+/frNImfGbpVhYYOGDx++atasWWM4UkWLHYmRBQWfO3hn7Kq6sRpsWt9maCdNbcf169drhPP4lcOodwYNGvQbALIePHhw5fz581cDbBHopic5ObkABCoNnHoikpIf8XnFvHnz/gXWthVmZxsxYsQsAUyCdXGOiAtTklntZsUptJak7AeabjSJBmr7bKdPn94H0GUwISqforGIAdC2va2trQEaHYTzqBs3blR/++23tFPRR48e/RrVjAWRaRhrUYZCXRE5OTnx8KkI0NoATKoL2fOG8L+gXThiCDgedpID0jF69OjHH3300cfpHMlmrKFG1N55551S/FYTC0SEWQfeHH3r1i33tm3b9sMsUigCcaonTVpgQn5SCLSdwOYY4HktGzduPG0WLTDvEGHb3VYBQAG3UtRQ5kFJRXiu7G1YjTsErR9Cqr6IRUfDoaZDSy5evJW3VxcaCz4TFFFHJ2dqHnpHCpd1scpETIsAaKcDDkMPWVDufLl9+/Y9OL1mIFZ62gaZmgmbdbz55ptH1qxZ8x9cO7Vw4cLfZWVlpaalpfUlEDAFpzIpRBEXa7rFsMtRzz333K8IIJx3GfhOFjPCNrbrThUirSaBPgAQTWrV8fHxSYoPGHiEbl+INNPvueee2Q888ABVMV4A9EPDUeDIlitXrlQR14ZD9srIyCBt+lCe5THbKxeOrcBHwLxiMEYfNT9Mq4l3IkJFD0lulHRjwjo4QjrdgF1mYru14P+IbY8YWllZ+T6emTtjxozFDz/88DloKAdZLQmg6uF0pYgiSfn5+Y8gcszBtUpUP8MxfndJSckukb5DuQLhMwe8x6F8irDICl3aqF3Eytj09PQ0xNp8wgmtRSI6XALlrOHk4hYEyYbJK/CsFxVNdlJS0kBaHBZSunPnzndBQZsuXrxYgd3Q8EwGdi0Dl6qOHz/+TyoeBA2ws6PGTZ06dUJMTEw2zU1y6dKlL8F7znMW1ue3iy33MxjvuXPnzgwdOvQpWhklGUSQcdBasQjyVtWLo0oaFch2og4iTYfGhca0rVu3bsT5BkGQPILS2lS3CmYUS70SosLqOHv27Hl+R5lSQA3eLQbrQgSoQXiugmZyyK6gwaEFBQW/KC4ubmJQbpFs3DxGl+ATNqEMzcDuugXLC8psPH369ELM51Q5AuZUhV27Kri2T4W8oCDmHgbhBj/4TDkDook2fvz43yJTJooMFcHK8IoqpJkJVQNLo+DejXxf1YN+3jHandghQ4b0R2LSmaWat6Ki4hiP7RZ8J2Az6SLpbK26uroFBW0BbDqWeIPL5YofMGBACmz4rGjVSvELE/MZTMErOEu3YIZ6HdqrV68MFMQLATSeCmeyZUSwelDVLXDqW7xgxSx9tnDNRbxI4iYbo0EIeO/evRF+s1xIqxdNQmDAyI9N/muin0I7lgjT64f4vAjOlwnOYlEOCGfdcfXq1QqzwtcWplbUM9y1a9faEUn6UidJbRkiQR62MRPMrwJO2m3YKZuh7xdh+C+bP0ngIINnzpy5BA6YBfsNZWBQ2lMgYPvwzC0GrWpRjzIPYwtBdkjtSBBX8/Ly8ql3p2pFxN4MkKGHEE+bcb/JAEhna0VFRWfBWeYhtG1XJZzqVGGsFDjdr+k+xqCYHqpDoe1a1KJvI+rUMegm9hfl/D1Am7bGKGTBviv79+8/lLKVqmawnbHZ2dkPAfyIxMTESOyKGxPHqNYDEs0MAoFC+CBzhwSk9awJEyb8ctKkSS/gfDQ0a0fc1rtVbMcNqBHXgCFWcx3aKIpnVYsGNROgsh1GKbw3CZJH1uTJk38PU0lTHU9sq9715GailzIeQNQii7UgbROPsGAxe/FuMmw3E++mI7nqFJNiMfVSVKIF0Ov79+9fT2GOu043hWm4VRfVCNpi6JRGi6Y5dfl7EycoLCycgbQdan0RaIRCIkV6W1cdoKD6LzJhj2YiRQcV1tRRW1t7Gjb8PnzkOoOtFxEjpOWlS5cGULr9Xy9PJhr5uU2/R44HbWwZPHjwOZjFFJhIMoEgUX1o2gHqRauqmrSpWrpkVrI3B/ANiET/vnDhQilr9ZaJHYfaC2pMM9AWfshrIEehTIZJusAHyu+7775Rubm5Bcic6QSGwBsPCmPGA9ZTg6xbgiq/BEBkW0IloDZhEjpgUOAQZzPj00HRtfQYvvuFsiYm6wDpb4N8hfjdD045EAwuC9pPcjgcLmJqNAA07MFiWqHVRlTp1VVVVeUocGs57rYyyGZ2OJUtJeDAokWLevRDwn0JkMC9hlTvFe0EmsQJEE2QSlE5R4iaTnaUusS77aIB2S4YpEeYhA74br8jGhNHpOFDkaymHYKs201AS27TydIhOq9dBjYXrlt1Rx8/NUNkkdktSnSVogxZUILuFpxENRw9QszABn+OL7amGdOQsu0mH/YDhm/hPgHSL/rRgduBVcd/BRgAa9CGa6b6fLQAAAAASUVORK5CYII=",
        "image/png:icon_full_off":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJFMEE0MDY5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MjE3RDI5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MkUwQTQwNDkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MkUwQTQwNTkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrGlrYsAAAq2SURBVHjanFlrTFTbFT5nzgADDMNDHnIVFasoXvFta9VrjD/KH3/YH5aq8f2IVoupUaNXhRC13BqbpraNiW2qptaW2B81ajTGPjTmaqONGrzWCnpVigIiz2GYB8Ppt07XnixO54GeZGfOzOz1re+svfbaa62ja5qWgpGEkcz39Onk4dD+dw1ihDFCPAIYQb4P8zDv3btnajGuuXPn6vigYfCQOpN4GDadAzyCUqeTJ7sw0jDS+dPFgApACfoxfAxOBEwGV/eJLkXcyWRTWZ/U6eQ5YZvOPv60JiSzkAeWqh+GYs3v93914sSJigsXLjTzAw1qw7t0NoRz+fLlBZWVlXUul+vT4QhipcrUCqgnJgvnDA4m1t3T0/Ns7969lQ8ePPDzKgXVf8ORZ9JJeGB/Y2Nj5bFjx056PJ6SYcjlKBeVls70+Xxxpdra2l7u2bOn9vXr1yEm7GDrfcilrJ2EBw9t2LDhi+PHj1fl5+ePSyCXqVzEwS5C/uQmS8UaTU1Nbdu3b/8DCOu8Ok476Xjy0VyEcICrES7hJ5B3M0+nQ/i1yzRNLdbIyMjwjB07dmSUTeNQ5OPJC7JSp7URCZfwE8hHdCoQigbOeE8KUFdtbe33Fy5cOBFzM6KRnz9/vh5Nln63kVXRyk14hEv4CSztVCFRhTR6FDMcDmuxxsDAgJacnJxaVVW1uby8/FP2MUVeETdAYghx+q6MIvYPLXUm4RAe4RJ+PP2Ko9rJKoj7pbJgMGjK7yRIG9XpdKbt2rXrR0uXLp0JmWwKlRx9In6+aNEiizh9Sv/leTQ/h+QJh/AIl/Dj6ed4bYVXB9/QaeNTExoaGpp37tz5t5aWFl804oZhpO3YsePzZcuWfZNDkYf9U51q+uLFi+UJmMT/W4RJjuQJJxph0gv9fyUegrSPeQ4o0vQUvfTnq1ev/rVv377fv3z58tmBAweuA8AbjbjD4Ujdtm3boYqKinlMRrmJISKKIh05wGj+1q1bD5F8DMJe0gv9DcSD+DDpXmVtg8GsDblkyZKpu3fv/nl/f7+XJni93j6cks04jcampqZGoguBhEIhcpWk6dOnL0xJSXmKmNukLMGHgHI/FSU8iMmfrVy58oiu6xZhwpERAudA16FDh/7c2tr6EvNb4OctN2/e/PuCBQtGXr58+SIT7ydLjGDQ9Ozs7NzOzk5lFdpkWbScBQUFo6urqyvy8vJyhgRcXdfwMFpfX9+/QWYllLTRoUnATNxQhPGA+efPnz+Xnp5eCqOoMBa53r1711FTU1MHwv/B1w6MLibpA68geLWrw0XtakIII6cI8BL087AyK5Dy379//9WsWbMmpOGS1mlvb29GyKqCldqFjMpHlD9TOHM/fvz46dSpU7+FaDEkJoNo++HDh8/h8wXmviUr0wHM5LvBq5sJE7eQISJIWGxKRT6g0lEQD4D4cxCfCOu6SVlHR8ebo0ePHnv+/HkTW7hP7HLT5tMuPKDx8OHDp8CYDpfKYJdoBeHT+Pwac95gtJLhMTrZ0grTz3mO5dOaSDEHmGRQ5Msqpx2AH/aDeP2cOXNKsMS9sPBPm5ubm4QCn7C0JK1SYCcSrjD8/6vZs2dPhSG6QPiXeJhXTJas2x4FLyj2SlgXObMudr3DtuuVf9OB4i4sLMzC7tdAuJ0t3Cl8sJ8fdlAlRuzXCsOK7aNGjcqljfj27VuSo43fLf2YiYZF2hs5XGRoipWsJ4tEPZ0JJDNAkEn28VA+HbZZWib8boGh2zB8gvCAJCou0ymeYsgfDDggvit/V7FYE9VFQPg/Wcasq6szEZNV2RQSJVSICcbDUBvZjJWQR70QnqSfB9kCvbyEyh3sy2kpI1k6NBJgdNncaghGvPItJmnyt3Pnztk3qAqHPuEOfmkdkpEnXBwM5Q5RMRKVPlEvlV2dPXtW+VU4TnSxfJjmRsvQPgYj3uWMZ+kPvT5G5mMwElp6/fr1epR4m8wjSSTnOs2NZumPwUhUZEa9Tp06pW3ZskUXMduQ1YOtiTMgmjaDkI345MdixNuI+nB6FGyNFNWBKisry8Thoj969KgrVrg6efKkidQ1Jgaywyy4gllfX9/9oSHPsB0meowCVJ2KmePHjx+1efPm38yYMeN7yHW/fP/+vVzLQaXsypUr9nw6lQ+nzEmTJhUhTT0N4t9tbGy8gwzOFJY3xdCj8IsskyTqENmZKpHo+B5RVFQ0Dgn8CSRMk1F15MLinyFZ/wcSJ79tiZWV7KVW1oQJE4o3bdr0KyRME4GRD4yFz549+yflJLbDTbMZMfIAhs3XnKIZ6FKKiPDo0aO/AcLHkJmO7+7uptaYhvtsKJ2HHORLJD29tvCl2XIPz+TJk4vXrVt3wuVyRTCQX+dMmzZtHog/BPFQFPc0ZJtCE0tnucG4ceMyu7q6kkSOYBEeM2bMBFjnCBSMwf9W1UI7HMWnRby0tHTmrVu3LiLV9ItEx5SkYdXMysrKkyBcQoQlhtvtzsLDz33x4kU9/gvJtgYN8EqDXtXo1B3Sqhs3bjydk5NTgPtcDPr8BBYuRRg6ApcoghtogUAgEsroHhbuB+Ez+G7Y3G1Ig4b+R+l0hubbMQiX8EkP6SO9rD+X+IDXb3nViWeSwRa1LFteXv4zbI5pyJkfwxI5SB9LsGE+B+BIZWFZceB74Pr167+4c+fOfVEEqAhg2tq6abCkHy7QhpWbg1LNqXAUeVg8A5XNXBQVz3t7e02sYjpW58fQv/jGjRu/Vnm/wS5guQIK2M0QLIJg2Zs3b3pXr179QwjmxSJ87dq1M0+ePHkA2fecD/fFKQKIuAsllVXvFRcXl9mJs6ukT5kyZVZTU1PL2rVrt3o8ntl4UO327du/U3HcEH2LHFQkq4lcVlZW/syZM+ejlkuHAqu7JAkDPHD16tU/NjQ0POLSSJH22XzafrBYJyHCZABu0gHipYj3/2dxEE2D/m/DYAXk//Tb3bt3L6icRfp0Bp37tKOJKO4dALcsLLM2Kn4Rg/+EFXwsCPdEIayJJEmlpT08/x3JEw7hSXzSR3pJP/EgPpyPZCiflnE0TW0OKvFR0lvLJXMI/E6ELyI2PxEFaIdoG6h3MGZNTY3M7EL8fw/PJ7lWwiE8wpV6SC/pJx6il5emWm/y5HPZO0nyOwCCly5d+gt87WtW3MFJfI/Nlwerq6utnJo+RS4d4HmqprTkCY9wCT+eftWbll1TK/7Fa7V6vV4f/KuVfVcNe8URrqqqMqX/03dxWsrqRRWygO1uI/wErd7IMT6k5xFPKDs7O2vNmjXl2KQhQdYvS6SDBw+a0WTpd1vZpd5Y9RIecL9D+AlIR1IEhwSK14mnlsGIESM+QRj6QWFhodNWz1m5RoJOvinmWjoLCgoMwiNcwk8gHzGQ7Jp64z2pOLmKV6xY8UVJSUmaPX0c5jsXizzJr1q16ieEp07aBPJe1b0iHynkAyaP73O5oZLO4XCQN1C32PntImr0qVC3f//+mIl7bW2tTFMjzXXWl8f3mfyfQ7QaOlnfW9bdpfNktwDJFE0Zgy0TEBuoR2xC2bsLJ3hrK09HlUFmsD6PeBWSIt7Y9tsMRrq9TrGjVeOkbxivmX227qg5zLrVHgIdolPlFRmnKiiivWYOOqN0f3wf8EI/VusqHmnZrVLh0P8hL/T/K8AAnWMpLIkYmFQAAAAASUVORK5CYII=",
        "image/png:icon_full_on":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ5MjE3RDk5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MjE3REE5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDkyMTdENzkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDkyMTdEODkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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",
        "image/png:icon_live":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZGRThBNzg5ODhBMTFFMUJGQzlCNDlBOTIzMzcxRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZGRThBNzk5ODhBMTFFMUJGQzlCNDlBOTIzMzcxRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QzdFRDg5RDk4ODkxMUUxQkZDOUI0OUE5MjMzNzFGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QzdFRDg5RTk4ODkxMUUxQkZDOUI0OUE5MjMzNzFGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjpw4ZUAAAdASURBVHjarFdZiFTZGT7n1t1qr+rq7qmubrW7nR7Sk8VR4kOIJGHotywvARERYkhQQmLQh0BA8uhTHhyQQISE8UFEfMhAIIEhTcgGM0EZHVRMZhzT06u9lLVX3brbyffV3BoKGXpa7QsfXX2X7/u385//SLHzKwl8CzgMzAAlIBE9awOrwIfATeBvQGsnpHIH70wCPwJej953AQ/wATXAowMGYEb3/wr8Hlh4XgMs4GfA9yPRVjwedxOJhA+EpmmqWCwmFC7f9wUg2+22DsQ6nY4ZRYx//wBcArrPYsA+4NdAEajncjknk8m4yWTSl1J6QACEgxGAHRoQA4xWq6XX63WzWq3aeJYBHgO/AD7eiQFfBN7gM13Xa8VikeJdTdO6MhFYIt+aUbY3oYygIGSIGpCBCLSmDLS6dIxlUUk+VO2YE4ahBSPs9fV1y/O8bGTsWeD+dgbQ898BoW3b1T179jiWZbVlPDBUsfY1ZbuzO6gbJR3zgXycfUd1Yp7ruqnFxUXTcZwcnmnAjwcjMUjGcF0B8hB/Mj093UEEGqLQLgWF2ncRZNaEyO61RXaPJeycLmKWFAqJ8DuhcJuBqC11RW3R6Zvhxirpt8Vm6n+oj/SjR4/iMGIIT6rAD4Dei7EBA84ArxmGUZ6ammrB85oq1l8N8vXvsMKzey2x90hW5CYtYaZjQjOkkDBfwicawnuZcRPPbeE7oXBqfiyMd1+RpmrqncRiKpXSkJIAqRmmH8C7gwbsBX4JlBH2Jl6uq+HmviDb+DajlJ+2RemraaHp8pNMbgO+kxm3PjGi4ktlulOonzXDTWzAOa1Wq7F4D0W9otY34OfAaD6fr46OjjZjyVDzCuXjYNTzU7YYO5j6XOGnkS6avdTQiNDq7je6yfdMLc6a0JAK9osR4O9atF6P0BoY0GLevULlG0ooMzNhieJrqV6enwf8lhzkIie5qUEt4OvU1iJxNpdWOp12ZMK3At35Cr0YeTUBIvVCIAe5yEluakCrHXXSI1qUjzby7sDCtpeqzyolNOZRt7Tn9r4PcpCLnOSmBrQ60f5xSEM7ncKPDm66+O34ujONbiZSJUOE8GA3QC5ykpsa1KIB1NaxLFgMm+jzHm64ofCLDJmZ1nse7MZlgYuc4B6jBrQY/i61dVjGDcPD5uLjoRcKleotJ6wPFahdMUCSS9EGlaIGtahJbR2bCje0AGvVJz7dXphDuTsREAPb1qc6qEtq6/jHCYKA26nC70Aq0UAUhthI9Li2K/p+N+zVgCZkgxrQCiNjHB3daRMGsDn07NSUsRSK7pBTC0TS2h0DnGrQi0BMGIvUiLQ0amuoSI5SRqPR6O3plkjcY77qK90X7gF99LgUx6XEfWpQi5rU1kZGRu5yJ8RGoSESRk4W34W1YWPVFV47fOE+QA5ykTMvi++g8jmsMLQ2tbWzZ8/+G7kwm82mjQlGt8NM1ZTxfzBnW/9pv7D3PQ5wkZPclUrFoBY1e9qnTp2qFgoFTinZzc1NE5tFfNyauSaV7DTWXLFxr/3c3vNbcpCLnOSmBrWoSW2Gwjl27NifYFEW41NyY2PDMrxks2CX3oDhqrbcFRv3W8/sOb/ht+QgFznJTQ1qHT169M/UZuGxUHMTExMnV1ZWvoBBZOHw4cMV5Gdz0b33esXZ/AkrNvWSKYZetoVub78yuHyfPHREc93tzUU5e+S3+8wvzcPzkZs3b+a73e7k+Pj4f5eXl9/kdNRna964ceMttMgAL7x0586dBAolPxU/8Jex9OSv0Mtajceu+PhfdbF+ty1aG16vuEJPicBVotsIevf4jO/wXXzTGUlOXJiOH3ibXOQkNzWuXr36FjX743Tf+My5c+devnTp0k+xGspYIssHDx5sYECpuEbT/qhy94cdtzUXDZbb9r24mZzfn//ym6aXcsrl8tCtW7dSKLwJtOHCmTNnfnPx4sWHHPefNoBrc/jEiROvXL9+/SSMqCIdK7Ozs3WOaRjNG031JL1U++Cbbbd5yA+9qVCFefZ0TcY2dE1fT5ip9yayM/9My0INXqeXlpZSDx48yMDzcYjnUGtX4P0H+Gar35wHDRDR8WoYkShdvnz5JE44fLhWKpVqyFt7bGysjYmZo7rLDYW9vJdohRHYdXUIcfy219bWEqinxOrqKofPMYRdnj59+go8X43EfTFwonk6hJzXCrdv37a+hwskB9A8yvwQUWhi+XQxVoXZbNZHK+19DFGBEBtY4xpCzgNJio6g2gsw/v0/4kI6eTQrR+dKsZ0B/UgwvAaiUbx27drc1tbWDAzhPNfgABOdF/2B97m+40Aawsnh4eEPjx8/Pg+vH0eilUHPP8+Afk2ko6FVzs/P2+fPnz+wsLCwH2e/UXidiWYJnA+ki9TUcXbcmJyc/OjChQvvz83NOVGe+0Z/ptB2BgxGIxV5t9MJQUVRan6W189qwGBE7OjYrkeQA4J+hG507NoR8f8FGAAz1zxmdRdudAAAAABJRU5ErkJggg==",
        "image/png:icon_pause":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk3NUJBNUE5MEQyMTFFMTgyMzdFOUNDMjE2RjI5RTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk3NUJBNUI5MEQyMTFFMTgyMzdFOUNDMjE2RjI5RTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDkyMTdEQjkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDkyMTdEQzkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PppSoW4AAAG5SURBVHja7JlNTsMwEIXd2IUWKgoVLDgEy97/AF1yCBYgoFJj2iZ2mCnPxSDaTcZCoLH05DQ/X54m41TKGxhjTklD0gm2eXZQBf00ItRCW9IGM//uSANwJNmNg+ER6Yx0jnmU3eAYOAHXJE+qMW9xvAJHkr2vAsMuFovFvekx5vP5HTa5woFkSWNhdnR4bFyFWYzR9BwzmO1QKVeA3eSVnnrv+4KneIwNHv2wANunRcF9NhGoxgQsj2oPC7Cdy/p61HVdX3C+yGIpdlrBO7hANZJhC64twK7y96UNIfQF24xXlWK7Ly/H/tU4OCTZavpXTAv03cEhyf77prU9tD3+W3u0bVvMtCRbe1pNq2k1rabVtP6Na3uoaV2I+glBX3na08UqnZKkIAAOGS+WYifTuyRJAJziuHSDUIC9M72PvgS+1q8zOKsqwU6mecdKoBorsBpwBwXYLUNvSZekG2xfk67MRzAz/r5Y808ZpDfAXkhPpAfSI/alSG4izH7lizi+5ajL4gJOpp7NZzBjjyyMlKgyfInrauwLWbUl2RuHgz47uTayMXMnzXbov3RigwOSgX4UZjfvAgwAPjCqmLuo6H0AAAAASUVORK5CYII=",
        "image/png:icon_play":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk3NUJBNUU5MEQyMTFFMTgyMzdFOUNDMjE2RjI5RTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk3NUJBNUY5MEQyMTFFMTgyMzdFOUNDMjE2RjI5RTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTc1QkE1QzkwRDIxMUUxODIzN0U5Q0MyMTZGMjlFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTc1QkE1RDkwRDIxMUUxODIzN0U5Q0MyMTZGMjlFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl5PfVQAAAZkSURBVHja1JntS1tXHMdvHozK+rCuWztY92Lb+76TooPiA4hvZLD9BwNhL/ZKKEyUlkKldVVpC7EoddOJbmrqpq7Wdj7EWaPRqq0aRXF2Pj/EqtGY3DzefU84V06uuUmsJroDP240yb2f/O739z2/e45CEAROgcFxnJIJFT2S/wsILw0P85qj70V9qOlRhCZ/xzChZKDdCBcNtwg/MDAQNfCEhATfUclAqyhoHOKUXq/XXbt27Uu8Po/4AHEOcQbxHv0M+awaJ1IiFNHMtILKg2Q4FhFPgBGnjUbjCN4TVlZW9KWlpeVPnz6dxf9tiB165BEOmnlRNgK+F7HMX7lyxQ86hgKfRrxPMvs3RkxMDKdUKjmv1+uemJhoKyoqqjaZTHN4fxthpfB2hJNKJqLwUmgNve1nER8iPm5vb28mH1CpVJxGoyGf4VwuFz84OPhnYWHhb4uLi6sSeJ7RvIfWgtDb23tk8ImJifugT1PtXkRcamtr+9WvYtVqjmSewNvt9u2enh7dnTt3frfZbBsMvJ2BZzPPGQyGQ8MnJSXtK0S/YoQkODacTicHQM7hcHCxsbFnUlNTv9XpdI+ys7O/xt24RH/seSqvU7RYNdSRlLigQnrOg4a0EGOpM3yE+ATxGQqvVLZ6kW2SdZJ98np9ff1NY2NjRWVlpQFvW2ix7jLF6qRZ98kG5fJOWb969aos9KeIz588eVIS6iSkSIneie7JWFhYGKmuriZOM0bhrRReLFbW4wXY6oHgk5OTA0JfIHpGfNHc3KwN92QEHpLxHYlNTk9Pv6ioqKhCEU7JOI2fTXZ0dIQFD0kGh8bt1h709pGMi/Aej8c1Pj7+14MHD6pmZmYWAzjNPpuEYwWFT0tLCw7d0NCgfdcqJ3pnbNIGm2wEfD20vxbAaVh4n00+f/48IHx6enpw6Pr6eu1hLYqAi/Bwnk3IpfbevXtN+CFbFH43mE22trb6wWdkZPhZ3r5xWHsiwfM8t7Oz4ztCNudSUlK+q6qqepSVlfUVdamLdG44y/Q0ezYJSEU4lreX6ZqaGu1RTsEk20TvRDpkrK2tTcGhKiFDI836DpN5tqfxyQbGIGRmZgaHRka0XASGWKzE4wkMbHKorq7u566urnGJTYoe72ZtkoQsNCaKiECzbQGBJz8CDF7YZBcS9cvo6OgbBp51mj2blIUuLy+PKDTrNCI8bNKBbrK1rKysemlpaZmRjZ9NykLji1GBZp1G9Hi4i/XVq1c6MNRtb2+bmdbAp3dZ6IcPH0YVWixWAh8XF+f7G93kGuB/KikpeYy7IHaTdrXcCfCh43hm5dxuN4H1gSPzF9D4/3D58uVvxsbGfrx//34LkciJgxaH1Wr1tcLx8fHkhyghGdG/VScWmgxMTJudnZ31TU1NfwB8RbqEcKKg8aDhQL/S09LS0oqX89Ln0BMFjWy6R0ZGxtGP65FlAkueQzcZ53CeGGj0FcLk5OT0s2fPXpjNZrJU8RaxTo+b1DVs4gRzrNDEbufm5hbwEN09Ozv7D4XcoLElM7nIQ7NdVSTG6uqqGY9bPZgBJyismFU52L1pPOqZtlgsZPmhD4U2TDP6NkBmgzZMUYPe3d21Dw0NDQLYiLu4zshgM5zWtLi4WMjOzo6O5WFScMERRrq7uw2wr1VGBptMT2GVwO6tyt69e1eQ8kQMGt/3TE1NTaJP7sbstsTIQIQN+bhVUFAgBKqtSBSi8AbjBQbs618JLPtsaJN7sL19+7YQjOFIoZeXl5cMBkP3/Pz8tIwjBF1CyM/PF8K59pFAb2D09/f3QA6mALCWUIs1t27dEkTfPsj2BSfZQxHC0TS0Spp1I+psEBeUTgwhl8Vu3rwpvEv9BMq0b0MoWKbhArzJZBp++fJlHy5olthXyAXIGzduCIepG7Uky+KGkDPQCUlDAwmMDgwMGHieX5FMDFsSr+Wl9nX9+vUDySAUtEDDQy/Es9B47UWPMNHX19eL7mtBxr6CLqrn5eUJR9UaqCWycNGLWmk2BNiWCbB69AqrNJOiFCzhbF/k5uYeSXblMi1mmWTLgoy+Hh4efgw5LNEf5KCAgezLIbWvnJwc4ZB+Hza0g2pSWVtb+z1dW1My74XckhNhI/rUTpcQxL0WDQWNp6GmezFuRjp8oIaGi+KWcyB5cExmQ24zc8ewP674P27o/yfAAJ6YFnno8TihAAAAAElFTkSuQmCC",
        "image/png:icon_playhead":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ5MjE3RDU5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MjE3RDY5MEQxMTFFMTgyMzdFOUNDMjE2RjI5RTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDkyMTdEMzkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDkyMTdENDkwRDExMUUxODIzN0U5Q0MyMTZGMjlFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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",
        "image/png:icon_replay":"data:image/png;base64,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",
        "image/png:icon_rewind":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZFODFFMDM5ODdFMTFFMUJGQzlCNDlBOTIzMzcxRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZFODFFMDQ5ODdFMTFFMUJGQzlCNDlBOTIzMzcxRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRkU4MUUwMTk4N0UxMUUxQkZDOUI0OUE5MjMzNzFGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRkU4MUUwMjk4N0UxMUUxQkZDOUI0OUE5MjMzNzFGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1w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",
        "image/png:icon_spinner":"data:image/png;base64,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",
        "image/gif:oo_spinner":"data:image/gif;base64,R0lGODlhyADIAJEDAP///8zMzJmZmf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozODFGMTlBMjVCMjA2ODExODIyQUY0NEFFRTYyMEZGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERkRGQUM3OTM5MTAxMUUyQURCOUQzMDhCMEVGM0E4QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERkRGQUM3ODM5MTAxMUUyQURCOUQzMDhCMEVGM0E4QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDRBRDM2QUEzMTIwNjgxMTgwODNCNkE4RjU1MkYzN0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzgxRjE5QTI1QjIwNjgxMTgyMkFGNDRBRUU2MjBGRkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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",
        __end_marker:1
    }
})(OO);
(function(e){
    e.stylus_css={
        "adobe_pass.styl":"#ooyalaMvpdPickerContainer{position:absolute;height:100%;width:100%;top:0;left:0;background:rgba(0,0,0,0.50);}#ooyalaMvpdPickerContainer .innerDiv{width:360px;height:420px;border:1px solid rgba(0,0,0,0.50);text-align:left;position:absolute;top:50%;left:50%;margin:-210px 0 0 -180px;background:#fff;color:#000;outline:none;transition:all .5s ease-in-out;border:0;-webkit-border-radius:15px;-moz-border-radius:15px;-ms-border-radius:15px;-o-border-radius:15px;border-radius:15px;-webkit-box-shadow:0 0 5px #c8c8c8;-moz-box-shadow:0 0 5px #c8c8c8;-ms-box-shadow:0 0 5px #c8c8c8;-o-box-shadow:0 0 5px #c8c8c8;box-shadow:0 0 5px #c8c8c8}#ooyalaMvpdPickerContainer .cancelDiv{margin:10px 10px 20px 10px;width:16px;height:16px;background-image:url('<%= cancelIcon %>');background-size:100%;background-origin:content;cursor:pointer}#ooyalaMvpdPickerContainer .titleBar{align:center;font-size:24 p;font-weight:bold;text-align:center;margin:20px}#ooyalaMvpdPickerContainer .providerList{width:85%;height:280px;padding:0 1em;overflow:auto;overflow-x:hidden;-ms-overflow-x:hidden}#ooyalaMvpdPickerContainer ul{list-style-type:none}#ooyalaMvpdPickerContainer li{width:280px;height:audo;margin:15px;cursor:pointer}#ooyalaMvpdPickerContainer li img{vertical-align:middle;width:120px}#ooyalaMvpdPickerContainer li:hover{background-color:#9a9aef;color:#fff}",
        "basic_ui.styl":"#<%= elementId %> .oo_promo{position:absolute;width:100%;height:100%;cursor:pointer;background:#1a1a1a;background-position:center center;-webkit-background-size:contain;-moz-background-size:contain;-ms-background-size:contain;-o-background-size:contain;background-size:contain;background-repeat:no-repeat;z-index:10001;}#<%= elementId %> .oo_promo div.oo_start_button{width:60px;height:60px;position:absolute;bottom:24px;left:24px;opacity:.8;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);background:#000;border:0;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;border-radius:6px;background-position:center;-webkit-background-size:54% auto;-moz-background-size:54% auto;-ms-background-size:54% auto;-o-background-size:54% auto;background-size:54% auto;background-origin:content;background-repeat:no-repeat}#<%= elementId %> .plugins{position:absolute;width:100%;height:100%;z-index:10003}#<%= elementId %> .plugins.video{width:100%;height:100%}#<%= elementId %> .oo_start_spinner{width:50px;height:50px;margin:5px;-webkit-animation:spin 3.6s infinite linear;-moz-animation:spin 3.6s infinite linear;-ms-animation:spin 3.6s infinite linear;-o-animation:spin 3.6s infinite linear;animation:spin 3.6s infinite linear}#<%= elementId %> .oo_spinner{position:absolute}#<%= elementId %> .oo_tap_panel{position:absolute;z-index:10004;opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);height:100%;width:100%}#<%= elementId %> .oo_mini_controls{height:40px;left:15px;right:15px;}#<%= elementId %> .oo_mini_controls .oo_scrubber{left:-5px;right:-5px;top:4px;bottom:24px}#<%= elementId %> .oo_mini_controls .oo_scrubber_track{left:45px;right:45px}#<%= elementId %> .oo_mini_controls .oo_toolbar_item{width:16px;height:16px;top:22px}#<%= elementId %> .oo_mini_controls .oo_glow{display:none;position:absolute;left:50%;top:50%;width:0;height:0;-webkit-box-shadow:0 0 30px 13.333333333333334px #fff;-moz-box-shadow:0 0 30px 13.333333333333334px #fff;-ms-box-shadow:0 0 30px 13.333333333333334px #fff;-o-box-shadow:0 0 30px 13.333333333333334px #fff;box-shadow:0 0 30px 13.333333333333334px #fff}#<%= elementId %> .oo_mini_controls .oo_currentTime,#<%= elementId %> .oo_mini_controls .oo_timeToLive{position:absolute;left:2px;text-align:center}#<%= elementId %> .oo_mini_controls .oo_duration{right:2px;position:absolute;text-align:right}#<%= elementId %> .oo_mini_controls .oo_duration,#<%= elementId %> .oo_mini_controls .oo_currentTime,#<%= elementId %> .oo_mini_controls .oo_timeToLive{top:1px;font-size:10px;width:40px}#<%= elementId %> .oo_mini_controls .oo_playhead{height:8px;width:8px;margin:-8px;padding:8px;top:-1px}#<%= elementId %> .oo_full_controls{height:40px;left:15px;right:15px;}#<%= elementId %> .oo_full_controls .vod .oo_scrubber{left:85px;right:45px;top:9px;bottom:10px}#<%= elementId %> .oo_full_controls .live .oo_scrubber{left:165px;right:45px;top:10px;bottom:10px}#<%= elementId %> .oo_full_controls .vod .oo_scrubber_track{left:45px;right:45px}#<%= elementId %> .oo_full_controls .live .oo_scrubber_track{left:5px;right:5px}#<%= elementId %> .oo_full_controls .oo_currentTime,#<%= elementId %> .oo_full_controls .oo_timeToLive{left:5px;text-align:left;position:absolute}#<%= elementId %> .oo_full_controls .oo_duration{right:5px;text-align:right;position:absolute}#<%= elementId %> .oo_full_controls .oo_toolbar_item{width:40px;height:24px;top:8px}#<%= elementId %> .oo_full_controls .oo_button_highlight{display:none;position:absolute;left:50%;top:50%;width:0;height:0;-webkit-box-shadow:0 0 30px 13.333333333333334px #fff;-moz-box-shadow:0 0 30px 13.333333333333334px #fff;-ms-box-shadow:0 0 30px 13.333333333333334px #fff;-o-box-shadow:0 0 30px 13.333333333333334px #fff;box-shadow:0 0 30px 13.333333333333334px #fff}#<%= elementId %> .oo_full_controls .oo_duration,#<%= elementId %> .oo_full_controls .oo_currentTime{top:5px;font-size:12px;width:40px}#<%= elementId %> .oo_full_controls .oo_playhead{height:24px;width:24px;margin:-4px;padding:4px;top:-4px}#<%= elementId %> .oo_controls{position:absolute;padding:0;background:rgba(0,0,0,0.65);-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;border-radius:6px;z-index:10004;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-ms-transition:.5s all ease;-o-transition:.5s all ease;transition:.5s all ease;}#<%= elementId %> .oo_controls .live{display:none}#<%= elementId %> .oo_controls .oo_controls_inner{position:absolute;top:0;bottom:0;left:10px;right:10px}#<%= elementId %> .oo_controls .oo_label{font-family:sans-serif;line-height:10px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;cursor:default;text-align:center}#<%= elementId %> .oo_controls .oo_scrubber{position:absolute;background:#000;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;border-radius:12px}#<%= elementId %> .oo_controls .oo_playhead{background-image:url('<%= playheadIcon %>');background-position:border;-webkit-background-size:100% auto;-moz-background-size:100% auto;-ms-background-size:100% auto;-o-background-size:100% auto;background-size:100% auto;background-origin:content;background-repeat:no-repeat;position:absolute}#<%= elementId %> .oo_controls .oo_scrubber_track{top:4px;bottom:4px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;border-radius:12px;position:absolute}#<%= elementId %> .oo_controls .vod .oo_scrubber_track{left:45px}#<%= elementId %> .oo_controls .live .oo_scrubber_track{left:5px}#<%= elementId %> .oo_controls .oo_progress{height:100%;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;border-radius:12px;position:absolute}#<%= elementId %> .oo_controls .oo_buffer_progress{width:0}#<%= elementId %> .oo_controls .oo_playhead_progress{width:16px}#<%= elementId %> .oo_controls .oo_button{background-position:center;-webkit-background-size:contain;-moz-background-size:contain;-ms-background-size:contain;-o-background-size:contain;background-size:contain;background-repeat:no-repeat}#<%= elementId %> .oo_controls .oo_rewind{background-image:url('<%= rewindIcon %>');position:absolute;left:0}#<%= elementId %> .oo_controls .oo_play{background-image:url('<%= playIcon %>');position:absolute;left:40px}#<%= elementId %> .oo_controls .oo_pause{background-image:url('<%= pauseIcon %>');position:absolute;left:40px}#<%= elementId %> .oo_controls .oo_fullscreen{position:absolute;right:0}#<%= elementId %> .oo_controls .oo_fullscreen_on{background-image:url('<%= fullscreenOnIcon %>')}#<%= elementId %> .oo_controls .oo_fullscreen_off{background-image:url('<%= fullscreenOffIcon %>')}#<%= elementId %> .oo_controls .oo_live_indicator{background-image:url('<%= liveIcon %>');position:absolute;left:80px}#<%= elementId %> .oo_controls .oo_live_message{color:#fff;line-height:1.6em;font-size:16px;position:absolute;left:120px}#<%= elementId %> .oo_controls .oo_timer{color:#fff;font-size:13px;padding:7px}#<%= elementId %> .oo_ads_countdown{position:absolute;padding:2px 5px;opacity:.6;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=60);width:100%;height:25px;color:#fff;background-color:#000;display:none;overflow:hidden;z-index:10005;font-size:16px;font-weight:bold}#<%= elementId %> .oo_end_screen{position:absolute;width:100%;height:100%;background:#1a1a1a;background-position:center center;-webkit-background-size:contain;-moz-background-size:contain;-ms-background-size:contain;-o-background-size:contain;background-size:contain;background-repeat:no-repeat;display:none;left:0;top:0;overflow:hidden;text-align:center;z-index:10005;}#<%= elementId %> .oo_end_screen .oo_fullscreen{width:28px;height:28px;position:absolute;display:none;top:15px;left:81px;padding:11px 16px;opacity:.65;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=65);background:#000;border:0;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;border-radius:6px;background-position:center;-webkit-background-size:auto;-moz-background-size:auto;-ms-background-size:auto;-o-background-size:auto;background-size:auto;background-origin:content;background-repeat:no-repeat}#<%= elementId %> .oo_replay{width:61px;height:50px;position:absolute;top:15px;left:15px;opacity:.65;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=65);background:#000;border:0;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;border-radius:6px;background-position:center;-webkit-background-size:auto;-moz-background-size:auto;-ms-background-size:auto;-o-background-size:auto;background-size:auto;background-origin:content;background-repeat:no-repeat}#<%= elementId %> .oo_spinner{top:0;z-index:10006}@-moz-keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-ms-keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}",
        "discovery_toaster.styl":"#<%= elementId %> .discovery_toaster{transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;-o-transition:.5s all ease;position:absolute;height:40%;bottom:60px;opacity:0;left:15px;right:15px;border:0;-webkit-border-radius:6px;-moz-border-radius:6px;-ms-border-radius:6px;-o-border-radius:6px;border-radius:6px;z-index:10008;background:rgba(0,0,0,0.65);}#<%= elementId %> .discovery_toaster .discovery_copy{font-family:sans-serif;font-weight:normal;color:#fff;position:absolute;top:13px;margin-left:35px}#<%= elementId %> .discovery_toaster .discovery_image_holder{width:45px;position:absolute;left:0;top:12px}#<%= elementId %> .discovery_toaster .discovery_image{background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url('<%= discoveryIcon %>');position:absolute;left:12px;top:0;width:20px;height:20px}#<%= elementId %> .discovery_toaster .discovery_outer{left:12px;right:12px;position:absolute;bottom:0;}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_left_scroll{position:absolute;width:10%;height:100%;left:0;top:0;z-index:10009}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_left_gradient{transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;-o-transition:.5s all ease;position:absolute;width:10%;height:100%;left:0;top:0;z-index:10008;background-image:-ms-linear-gradient(left,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-moz-linear-gradient(left,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-webkit-gradient(linear,left center,right center,color-stop(0,rgba(0,0,0,0.90)),color-stop(1,rgba(0,0,0,0.00)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:linear-gradient(to right,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%)}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_right_gradient{transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;-o-transition:.5s all ease;position:absolute;width:10%;height:100%;right:0;top:0;z-index:10008;background-image:-ms-linear-gradient(right,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-moz-linear-gradient(right,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-o-linear-gradient(right,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:-webkit-gradient(linear,right center,left center,color-stop(0,rgba(0,0,0,0.90)),color-stop(1,rgba(0,0,0,0.00)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%);background-image:linear-gradient(to left,rgba(0,0,0,0.90) 0%,rgba(0,0,0,0.00) 100%)}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_right_scroll{position:absolute;width:10%;height:100%;right:0;top:0;z-index:10009}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_holder{overflow:hidden;width:100%;height:100%;}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_holder .discovery_slider{-webkit-transform:translateX(0);-webkit-backface-visibility:hidden;-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);height:100%;}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_holder .discovery_slider .discovery_video{float:left;height:100%;}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_holder .discovery_slider .discovery_video .discovery_video_image{background:rgba(0,0,0,0.90);background-position:center;background-size:contain;background-repeat:no-repeat;top:10%;width:90%;height:80%;position:relative;}#<%= elementId %> .discovery_toaster .discovery_outer .discovery_holder .discovery_slider .discovery_video .discovery_video_image .discovery_video_name{font-family:sans-serif;background:rgba(0,0,0,0.65);font-weight:normal;color:#fff;position:absolute;bottom:0;left:0;right:0;text-wrap:unrestricted;padding:5px}#<%= elementId %> .discovery-countdown-container{width:38px;height:38px;position:absolute;-webkit-border-radius:25px;-moz-border-radius:25px;-ms-border-radius:25px;-o-border-radius:25px;border-radius:25px;border:6px solid;top:5px;right:5px;border-color:#000}#<%= elementId %> .discovery-countdown{-webkit-mask-box-image:-webkit-radial-gradient(center,ellipse cover,#000 66%,rgba(0,0,0,0.00) 69.5%);background:#eee;width:40px;height:40px;position:absolute;top:-1px;right:-1px}#<%= elementId %> .countdown-play{background-image:url('<%= playIcon %>');background-position:center;background-size:contain;background-repeat:no-repeat;width:20px;height:20px;position:absolute;top:10px;right:10px;z-index:10013}#<%= elementId %> .countdown-inner{position:absolute;top:0;left:0;background:transparent;border-width:20px;width:0;height:0;border-style:solid;border-color:transparent;border-top-color:#5c5c5c;-webkit-transform:rotate(-45deg);-webkit-animation:inner 15s linear 1}#<%= elementId %> .countdown-mask{position:absolute;top:0;left:0;background:transparent;border-width:20px;width:0;height:0;border-style:solid;border-color:transparent;border-top-color:#eee;-webkit-transform:rotate(-45deg);-webkit-animation:mask 15s linear 1}#<%= elementId %> .countdown-mask:after,#<%= elementId %> .countdown-mask-two{display:block;content:'';opacity:1;position:absolute;top:0;left:0;background:transparent;border-width:20px;width:0;height:0;border-style:solid;border-color:transparent;border-top-color:rgba(92,92,92,0.00);-webkit-transform:rotate(45deg);-webkit-animation:masktwo 15s linear 1}@-webkit-keyframes inner{0%{-webkit-transform:rotate(-45deg)}25%{border-left-color:transparent}26%{border-left-color:#5c5c5c}50%{border-bottom-color:transparent}51%{border-bottom-color:#5c5c5c}75%{border-right-color:transparent}76%{border-right-color:#5c5c5c}100%{-webkit-transform:rotate(315deg);border-left-color:#5c5c5c;border-bottom-color:#5c5c5c;border-right-color:#5c5c5c}}@-webkit-keyframes mask{0%{-webkit-transform:rotate(-45deg)}75%{-webkit-transform:rotate(-45deg)}100%{-webkit-transform:rotate(45deg)}}@-webkit-keyframes masktwo{0%{border-top-color:rgba(92,92,92,0.00)}25%{border-top-color:rgba(92,92,92,0.00)}26%{border-top-color:#5c5c5c}100%{border-top-color:#5c5c5c}}@-webkit-keyframes whee{0%{-webkit-transform:rotate(0);-webkit-filter:sepia() hue-rotate(0) contrast(95%)}100%{-webkit-transform:rotate(360deg);-webkit-filter:sepia() hue-rotate(360deg) contrast(95%)}}",
        "hook.styl":"div#hookDiv{font-family:sans-serif;background-color:rgba(0,0,0,0.50);z-index:10002;height:100%;width:100%;top:0;left:0;position:fixed;text-align:center;}div#hookDiv #hookCenterDiv{display:inline-block;height:100%;vertical-align:middle;margin-right:-.25em;}div#hookDiv #hookInnerDiv{border:6px solid rgba(200,200,200,0.50);max-width:360px;text-align:center;margin:auto auto;background:#0b3147;color:#fff;outline:none;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;display:inline-block;vertical-align:middle}div#hookDiv .hookTitleText{padding:10px 20px 0 20px;font-size:22px;line-height:1.5em}div#hookDiv #hookLaunchLink{margin:0 10px 0 10px;float:left;text-align:left}div#hookDiv #hookIgnoreLink{margin:0 10px 0 10px;float:right;text-align:right}div#hookDiv .singleLinkDiv{display:table-cell;width:50%;margin:10px}div#hookDiv #hookLinkDiv{width:100%;display:table;margin:0 0 30px 0}div#hookDiv a.hookLinks:link,div#hookDiv a.hookLinks:hover,div#hookDiv a.hookLinks:visited{color:#7bbade;font-size:12px;float:left;display:inline}div#hookDiv #hookDownloadLink{color:#fff;font-weight:bold;text-align:center}div#hookDiv #hookDownloadDiv{margin:0 auto 30px auto;display:block;max-width:200px;text-align:center;color:#fff;border-top:1px solid #0e5d8b;border-bottom:1px solid #042c3a;font-size:18px;padding:10px 10px;text-decoration:none;background:-moz-linear-gradient(top,#1e7aaf 0%,#185f89 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#1e7aaf),color-stop(100%,#185f89));background:-webkit-linear-gradient(top,#1e7aaf 0%,#185f89 100%);background:-o-linear-gradient(top,#1e7aaf 0%,#185f89 100%);background:-ms-linear-gradient(top,#1e7aaf 0%,#185f89 100%);}",
        "playback.styl":"#<%= elementId %> .video,#<%= elementId %> .midroll{position:absolute;width:100%;height:100%;z-index:10000;left:-10000px}",
        "root.styl":"#<%= elementId %>>div{width:0;height:0;position:relative;z-index:10000;overflow:hidden}#<%= elementId %> .innerWrapper{background:#000}#<%= elementId %> .innerWrapper:-webkit-full-screen{width:100%;height:100%}#<%= elementId %> .innerWrapper:-webkit-full-screen video{width:100%}#<%= elementId %> .innerWrapper.fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;background:#fff}#<%= elementId %> .oo_playhead{-ms-touch-action:none}#<%= elementId %> .oo_error{position:absolute;width:100%;height:100%;cursor:pointer;background:#1a1a1a;background-position:center center;background-size:contain;background-repeat:no-repeat;z-index:10002;}#<%= elementId %> .oo_error .oo_error_image{position:absolute;width:100%;height:30%;top:20%;background-image:url('<%= errorIcon %>');background-position:center;background-size:contain;background-origin:content;background-repeat:no-repeat}#<%= elementId %> .oo_error .oo_error_message{position:absolute;width:100%;top:70%;text-align:center;}#<%= elementId %> .oo_error .oo_error_message .oo_error_message_text{color:#d0d0d0;font-size:18px;font-family:Helvetica,sans-serif;font-weight:bold;line-height:100%;text-shadow:1px 3px 4px #000}",
        __end_marker:1
    }
})(OO);
OO.publicApi.REV="6d889481c749326fbe2976bb7ff77d683b24fb72";
(function(e){
    e.get_img_base64=function(t){
        return!e.asset_list||!t?null:e.asset_list["image/png:"+t]||e.asset_list["image/gif:"+t]
        },e.get_css=function(t){
        return!e.stylus_css||!t?null:e.stylus_css[t+".styl"]
        }
    })(OO);
(function(e,t,n){
    e.getRandomString=function(){
        return Math.random().toString(36).substring(7)
        },e.safeClone=function(r){
        if(t.isNumber(r)||t.isString(r)||t.isBoolean(r)||t.isFunction(r)||t.isNull(r)||t.isUndefined(r))return r;
        var i=r instanceof Array?[]:{};
        
        try{
            n.extend(!0,i,r)
            }catch(s){
            e.log("deep clone error",s)
            }
            return i
        },e.d=function(){
        e.isDebug&&e.log.apply(e,arguments),e.$("#OOYALA_DEBUG_CONSOLE").append(JSON.stringify(e.safeClone(arguments))+"<br>")
        },e.inherit=function(t,n){
        if(typeof t!="function")return e.log("invalid inherit, ParentClass need to be a class",t),null;
        var r=function(){
            t.apply(this,arguments),typeof n=="function"&&n.apply(this,arguments)
            },i=new t;
        return e._.extend(r.prototype,i),r.prototype.parentClass=i,r
        };
        
    var r={};
    
    e.attachStyle=function(e,t){
        var i=n('<style type="text/css">'+e+"</style>").appendTo("head");
        r[t]=r[t]||[],r[t].push(i)
        },e.removeStyles=function(t){
        e._.each(r[t],function(e){
            e.remove()
            })
        },e.formatSeconds=function(e){
        var t=parseInt(e,10)%60,n=parseInt(e/3600,10),r=parseInt((e-n*3600)/60,10);
        return n<10&&(n="0"+n),r<10&&(r="0"+r),t<10&&(t="0"+t),parseInt(n,10)>0?n+":"+r+":"+t:r+":"+t
        },e.timeStringToSeconds=function(e){
        var n=(e||"").split(":");
        return t.reduce(n,function(e,t){
            return e*60+parseInt(t,10)
            },0)
        },e.leftPadding=function(e,t){
        var n="0",r=e?e.toString():"";
        while(r.length<t)r=n+r;
        return r
        },e.getColorString=function(t){
        return"#"+e.leftPadding(t.toString(16),6).toUpperCase()
        },e.hexToRgb=function(e){
        var t=(e&16711680)>>16,n=(e&65280)>>8,r=e&255;
        return[t,n,r]
        },e.changeColor=function(t,n,r){
        var i=r?Math.max:Math.min,s=r?0:255,o=Math.round(n*255)*(r?-1:1),u=e.hexToRgb(t);
        return[e.leftPadding(i(u[0]+o,s).toString(16),2),e.leftPadding(i(u[1]+o,s).toString(16),2),e.leftPadding(i(u[2]+o,s).toString(16),2)].join("")
        },e.decode64=function(e){
        e=e.replace(/\n/g,"");
        var t="",n,r=0,i=[],s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        if(window.atob)return atob(e);
        do{
            for(n=0;n<4;n++)i[n]=s.indexOf(e.charAt(r++));
            t+=String.fromCharCode(i[0]<<2|i[1]>>4,i[2]==64?0:(i[1]&15)<<4|i[2]>>2,i[3]==64?0:(i[2]&3)<<6|i[3])
            }while(r<e.length);
        return t.replace(/\0/g,"")
        },e.pixelPing=function(t){
        var n=new Image;
        n.onerror=n.onabort=function(){
            e.d("onerror:",t)
            },n.src=e.getNormalizedTagUrl(t)
        },e.pixelPings=function(n){
        if(t.isEmpty(n))return;
        t.each(n,function(t){
            e.pixelPing(t)
            },this)
        },e.regexEscape=function(e){
        var t=/[<>()\[\]{}]/g;
        return e.replace(t,"\\$&")
        },e.getNormalizedTagUrl=function(n){
        var r=(new Date).getTime(),i=escape(document.URL);
        return t.each(e.TEMPLATES.RANDOM_PLACE_HOLDER,function(t){
            var i=new RegExp("("+e.regexEscape(t)+")","gi");
            n=n.replace(i,r)
            },this),t.each(e.TEMPLATES.REFERAK_PLACE_HOLDER,function(t){
            var r=new RegExp("("+e.regexEscape(t)+")","gi");
            n=n.replace(r,i)
            },this),n
        },e.safeSeekRange=function(e){
        return{
            start:e.length>0?e.start(0):0,
            end:e.length>0?e.end(0):0
            }
        },e.loadedJS=e.loadedJS||{},e.jsOnSuccessList=e.jsOnSuccessList||{},e.safeFuncCall=function(t){
    if(typeof t!="function")return;
    try{
        t.apply()
        }catch(n){
        e.log("Can not invoke function!",n)
        }
    },e.loadScriptOnce=function(t,r,i,s){
    return e.jsOnSuccessList[t]=e.jsOnSuccessList[t]||[],e.loadedJS[t]?(e.loadedJS[t]==="loaded"?e.safeFuncCall(r):e.loadedJS[t]==="loading"&&e.jsOnSuccessList[t].unshift(r),!1):(e.loadedJS[t]="loading",n.ajax({
        url:t,
        type:"GET",
        cache:!0,
        dataType:"script",
        timeout:s||15e3,
        success:function(){
            e.loadedJS[t]="loaded",e.jsOnSuccessList[t].unshift(r),e._.each(e.jsOnSuccessList[t],function(t){
                e.safeFuncCall(t)
                },this),e.jsOnSuccessList[t]=[]
            },
        error:function(){
            e.safeFuncCall(i)
            }
        }),!0)
},e.localStorage=window.localStorage,e.localStorage||(e.localStorage={
    getItem:function(e){
        return!e||!this.hasOwnProperty(e)?null:unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))
        },
    key:function(e){
        return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/,"").split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[e])
        },
    setItem:function(e,t){
        if(!e)return;
        document.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/",this.length=document.cookie.match(/\=/g).length
        },
    length:0,
    removeItem:function(e){
        if(!e||!this.hasOwnProperty(e))return;
        document.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/",this.length--
    },
    hasOwnProperty:function(e){
        return(new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)
        }
    },e.localStorage.length=(document.cookie.match(/\=/g)||e.localStorage).length),e.JSON=window.JSON
})(OO,OO._,OO.$);
(function(e,t){
    e.Emitter=function(e){
        this.mb=e,this._subscribers={}
    },t.extend(e.Emitter.prototype,{
    on:function(e,t,n){
        this._subscribers[e]=this._subscribers[e]||[],this._subscribers[e].push({
            callback:n,
            subscriber:t
        })
        },
    off:function(e,n,r){
        this._subscribers[e]=t.reject(this._subscribers[e]||[],function(e){
            return(e.callback==r||r===undefined)&&e.subscriber===n
            })
        },
    trigger:function(e){
        t.each(this._subscribers[e]||[],t.bind(this._triggerSubscriber,this,e,arguments)),t.each(this._subscribers["*"]||[],t.bind(this._triggerSubscriber,this,e,arguments))
        },
    _triggerSubscriber:function(t,n,r){
        try{
            r.callback.apply(this,n)
            }catch(i){
            var s=i.stack||"unavailable";
            e.log("Uncaught exception",i,"Stack",s,"triggering subscriber",r,"with event",t,"Parameters: ",n)
            }
        },
__placeholder:!0
})
})(OO,OO._);
(function(e,t){
    e.MessageBus=function(){
        this._emitter=new e.Emitter(this),this._dependentEmitter=new e.Emitter(this),this._interceptEmitter=new e.Emitter(this),this._interceptArgs={},this._dependentList={},this._blockList={},this._readyEventList={},this._queuedArgs={},this._dispatching=!1,this._publishingQueue=[],this.blockedEvent={},this.blockedParams={},this._messageHistory=[],this._tracer=t.bind(this._internalTracer,this),this.MbId=e.getRandomString()
        },t.extend(e.MessageBus.prototype,{
        addTracer:function(e){
            e&&t.isFunction(e)&&(this._tracer?this._tracer=t.wrap(this._tracer,function(n){
                e.apply(this,t.rest(arguments))
                }):this._tracer=e)
            },
        _internalTracer:function(){
            this._messageHistory.push(t.toArray(arguments))
            },
        messageTraceSnapshot:function(){
            return t.toArray(this._messageHistory)
            },
        addDependent:function(n,r,i,s){
            this._dependentList[n]=this._dependentList[n]||[],this._dependentList[n].push(r),this._blockList[r]=this._blockList[r]||[],this._blockList[r].push(n),this.blockedParams[n]=[];
            var o=e._.bind(function(i){
                if(this.blockedEvent[i]!=1){
                    delete this._queuedArgs[i];
                    return
                }
                var o=e.safeClone(t.flatten(arguments)),u=e.safeClone(this.blockedParams[n]);
                o.shift(),u.shift();
                var a=s.apply(this,[n,r,u,o])||o;
                delete this.blockedEvent[i],this.blockedParams[i]=[],this._emitter.trigger.apply(this._emitter,[i].concat(a))
                },this);
            this._dependentEmitter.on(n,i,o)
            },
        publish:function(){
            var n=e.safeClone(t.flatten(arguments));
            this._publishingQueue.push(n);
            if(!this._dispatching){
                this._dispatching=!0;
                var r=this._publishingQueue.shift();
                while(r)this._publish.apply(this,r),r=this._publishingQueue.shift();
                this._dispatching=!1
                }
            },
    _publish:function(n){
        this._readyEventList[n]=1;
        var r=e.safeClone(t.flatten(arguments));
        this._interceptEmitter.trigger.apply(this._interceptEmitter,r);
        if(this._interceptArgs[n]===!1){
            this._interceptArgs[n]=!0;
            return
        }
        this._interceptArgs[n]&&(r=t.flatten([n,this._interceptArgs[n]]));
        if(this._tracer&&t.isFunction(this._tracer)){
            var i=t.flatten(["publish"].concat(r));
            this._tracer.apply(this._tracer,i)
            }
            this._noDependency(n)?(this._emitter.trigger.apply(this._emitter,this._queuedArgs[n]||r),delete this._queuedArgs[n],t.each(this._blockList[n],function(e){
            this._clearDependent(e,n),r[0]=e,this._queuedArgs[e]=r,this._dependentEmitter.trigger.apply(this._dependentEmitter,r)
            },this)):(this.blockedEvent[n]=1,this.blockedParams[n]=r)
        },
    intercept:function(n,r,i){
        this._interceptEmitter.on(n,r,t.bind(function(r){
            var s=e.safeClone(t.flatten(arguments));
            this._interceptArgs[n]!=0&&(this._interceptArgs[n]=i.apply(this,s))
            },this)),this._interceptArgs[n]=[n]
        },
    subscribe:function(e,t,n){
        this._emitter.on(e,t,n)
        },
    unsubscribe:function(e,t,n){
        this._emitter.off(e,t,n)
        },
    _noDependency:function(e){
        return this._dependentList[e]?this._dependentList[e].length===0:!0
        },
    _clearDependent:function(t,n){
        var r=this._dependentList[t];
        this._dependentList[t]=e._.filter(r,function(e){
            return e!==n
            },this)
        }
    })
})(OO,OO._);
(function(e,t){
    e.StateMachine={
        create:function(n){
            var r=e.HM.safeObject("statemachine.create.cfg",n),i=e.HM.safeDomId("statemachine.create.cfg.initial",r.initial),s=e.HM.safeObject("statemachine.create.cfg.target",r.target,{}),o=e.HM.safeArrayOfElements("statemachine.create.cfg.events",r.events,function(t){
                return e.HM.safeObject("statemachine.create.cfg.events[]",t)
                },[]),u=e.HM.safeString("statemachine.create.cfg.moduleName",r.moduleName,""),a=e.HM.safeObject("statemachine.create.cfg.messageBus",r.messageBus),f={},l,c=function(t){
                var n=null,r=t.replace(/[^\/]*\//,"").match(/^(.)(.*)/),i="on"+r[1].toUpperCase()+r[2];
                if(s[i])n=s[i];
                else{
                    var o=t.replace(/\/.*/,"").match(/^(.)(.*)/),u="on"+o[1].toUpperCase()+o[2]+r[1].toUpperCase()+r[2];
                    s[u]&&(n=s[u])
                    }
                    if(n)try{
                    var a=n.apply(s,arguments);
                    return a!==!1?"ok":"fail"
                    }catch(f){
                    e.log(f);
                    if(e.TEST_TEST_TEST)throw f;
                    return"fail"
                    }
                    return"not_found"
                },h=function(e){
                var t=e.from instanceof Array?e.from:e.from?[e.from]:["*"],n;
                f[e.name]=f[e.name]||{};
                
                for(n=0;n<t.length;n++)f[e.name][t[n]]=e.to||t[n]
                    },p=function(e,t){
                if(t==="*")return;
                e.currentState=t
                };
                
            s.canReceive=function(e){
                return f[e]&&(f[e].hasOwnProperty(s.currentState)||f[e].hasOwnProperty("*"))
                },s.receive=function(n){
                if(!s.canReceive(n)){
                    e.log("dropped event",arguments,"for",u,"while in state",s.currentState,"with map",f);
                    return
                }
                var r=s.currentState,i=f[n][r]||f[n]["*"]||r,o;
                if(r===i){
                    c.apply(s,arguments);
                    return
                }
                p(s,i);
                var a="not_found";
                i!=="*"&&(a=c.apply(s,t.union([i],t.rest(arguments)))),a==="not_found"&&(a=c.apply(s,arguments));
                switch(a){
                    case"not_found":
                        e.log("Module "+u+" does not handle state "+i+" or event ",arguments),p(s,r);
                        break;
                    case"fail":
                        p(s,r);
                        break;
                    case"ok":
                }
            };
            
        for(l=0;l<o.length;l++)typeof o[l]=="object"&&h(o[l]);
        p(s,i);
        if(a!==undefined)for(l in f)a.subscribe(l.toString(),u,s.receive);return s
        },
    __end_marker:!0
    }
})(OO,OO._);
(function(e,t,n){
    e.BaseInputVerifier=e.inherit(e.Emitter,function(){
        this._currentInputBuffer=""
        }),n.extend(e.BaseInputVerifier,{
        DEFAULT_INPUT:"UUDDLRLRUD",
        ARROW_KEYS:{
            37:"L",
            38:"U",
            39:"R",
            40:"D"
        },
        GESTURE_LENGTH:200,
        GESTURE_VARIATION:100,
        KEY_INPUT_MATCHED:"keyInputMatched",
        GESTURE_MATCHED:"gestureMatched",
        __placeholder:!0
        }),n.extend(e.BaseInputVerifier.prototype,{
        setup:function(){},
        matchTarget:function(e){
            return this._currentInputBuffer.length>=this._target.length&&(this._currentInputBuffer=this._currentInputBuffer.slice(1)),this._currentInputBuffer+=e,this._currentInputBuffer==this._target?(this._currentInputBuffer="",!0):!1
            }
        }),e.KeyInputVerifier=e.inherit(e.BaseInputVerifier,function(t,n){
    this._target=(t||e.BaseInputVerifier.DEFAULT_INPUT).toUpperCase(),this.playerId=n
    }),n.extend(e.KeyInputVerifier.prototype,{
    setup:function(){
        t.event.add(window,"keydown",n.bind(this.onKeyDown,this))
        },
    onKeyDown:function(t){
        var n=t.which||t.keyCode,r=e.BaseInputVerifier.ARROW_KEYS[n]||String.fromCharCode(n);
        this.matchTarget(r)&&this.trigger(e.BaseInputVerifier.KEY_INPUT_MATCHED,this._target)
        }
    }),e.GestureInputVerifier=e.inherit(e.BaseInputVerifier,function(t,n){
    this._target=(t||e.BaseInputVerifier.DEFAULT_INPUT).toUpperCase(),this.playerId=n,this._startX=NaN,this._startY=NaN,this._endX=NaN,this._endY=NaN,this._subscribers={}
}),n.extend(e.GestureInputVerifier.prototype,{
    setup:function(){
        t("#"+this.playerId).bind("touchstart",n.bind(this.onTouchStart,this)),t("#"+this.playerId).bind("touchend",n.bind(this.onTouchEnd,this)),t("#"+this.playerId).bind("touchmove",this.onTouchMove)
        },
    onTouchMove:function(t){
        if(e.allowGesture)return;
        t.preventDefault()
        },
    onTouchStart:function(e){
        var t=this._getPagePositionFromEvent(e);
        this._startX=t?t[0]:0,this._startY=t?t[1]:0
        },
    gesture:function(t,n){
        var r=e.BaseInputVerifier.GESTURE_LENGTH,i=e.BaseInputVerifier.GESTURE_VARIATION;
        return t>r&&n<i?"R":t<-r&&n<i?"L":n>r&&t<i?"U":n<-r&&t<i?"D":"N"
        },
    _getPagePositionFromEvent:function(e){
        var t=e.originalEvent||e;
        return!t.changedTouches||!t.changedTouches[0]?null:[t.changedTouches[0].pageX,t.changedTouches[0].pageY]
        },
    onTouchEnd:function(t){
        var n=this._getPagePositionFromEvent(t);
        if(!n)return;
        this._endX=n[0],this._endY=n[1];
        if(isNaN(this._startX)||isNaN(this._startY)||isNaN(this._endX)||isNaN(this._endY))this._currentInputBuffer="";
        else{
            var r=this._endX-this._startX,i=this._startY-this._endY,s=this.gesture(r,i);
            this.matchTarget(s)&&this.trigger(e.BaseInputVerifier.GESTURE_MATCHED,this._target)
            }
        }
})
})(OO,OO.$,OO._);
(function(e,t,n){
    e.players={},e.modules=[],e.registerModule=function(t,n){
        var r=e.HM.safeDomId("moduleName",t,e.HM.fixDomId),i=e.HM.safeFunction("moduleFactoryMethod",n);
        e.modules.push({
            name:r,
            factory:i
        })
        },e.plugin=function(t,n){
        e.log("Registered optional plugin: ",t),e.registerModule(t,function(t,r){
            var i=n.apply({},[e,e._,e.$,window]),s=new i(t,r);
            return s
            })
        },e.exposeStaticApi=function(t,n){
        var r=e.HM.safeDomId("apiModule",t),i=e.HM.safeObject("apiObject",n);
        e.publicApi[r]=e.publicApi[r]||{},e._.extend(e.publicApi[r],i)
        },e.Player=function(r,i,s){
        s=s||{};
        
        var o=e.HM.safeDomId("Player.create.elementId",r),u=e.HM.safeStringOrNull("Player.create.embedCode",i),a=e.HM.safeObject("Player.create.parameters",s,{});
        a.onCreate=e.HM.safeFunctionOrNull("Player.create.parameters.onCreate",a.onCreate),this.elementId=o,this.embedCode=u,this.parameters=a,this.playbackReady=!1,this.adPlaying=!1,n("#"+this.elementId).html("");
        var f=this.mb=new e.MessageBus;
        this.modules=e._.map(e.modules,function(t){
            var n=t.name+"-"+e.getRandomString(),r={
                name:t.name,
                moduleId:n,
                instance:t.factory(f,n,a)
                };
                
            return e.log("Loaded plugin",r.moduleId,r),r
            }),this.state=e.STATE.LOADING,this.mb.subscribe(e.EVENTS.PLAYBACK_READY,"player",t.bind(function(){
            this.state=e.STATE.READY,this.playbackReady=!0,this._playQueued&&this.play()
            },this)),this.mb.subscribe(e.EVENTS.PLAYING,"player",t.bind(function(){
            this.state=e.STATE.PLAYING,this._playedOnce=!0
            },this)),this.mb.subscribe(e.EVENTS.PAUSED,"player",t.bind(function(){
            this.state=e.STATE.PAUSED
            },this)),this.mb.subscribe(e.EVENTS.BUFFERING,"player",t.bind(function(){
            this.state=e.STATE.BUFFERING
            },this)),this.mb.subscribe(e.EVENTS.PLAYED,"player",t.bind(function(){
            this.state=e.STATE.READY
            },this)),this.mb.subscribe(e.EVENTS.WILL_PLAY_ADS,"player",t.bind(function(e,t){
            this.adDuration=t,this._playedOnce=!0,this.adPlaying=!0
            },this)),this.mb.subscribe(e.EVENTS.ADS_PLAYED,"player",t.bind(function(){
            this.adDuration=-1,this.adPlaying=!1
            },this)),this.playheadTime=-1,this.duration=-1,this.adDuration=-1,this.bufferLength=-1,this.currentItem=this.item=null,this.clockOffset=0,this.mb.subscribe(e.EVENTS.CONTENT_TREE_FETCHED,"player",t.bind(function(e,t){
            this.currentItem=this.item=t;
            if(!t)return;
            this.duration=t.duration
            },this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_AUTHORIZATION,"player",t.bind(function(e){
            this.authStartTime=(new Date).getTime()
            },this)),this.mb.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,"player",t.bind(function(e,t){
            if(!t.debug_data||!t.debug_data.user_info)return;
            var n=(new Date).getTime(),r=(n-this.authStartTime-t.debug_data.server_latency)/2;
            this.clockOffset=t.debug_data.user_info.request_timestamp*1e3+r-n
            },this)),this.mb.subscribe(e.EVENTS.CAN_SEEK,"player",t.bind(function(e){
            var t=parseInt(this.parameters.initialTime,10);
            !isNaN(t)&&t>0&&!this.adPlaying&&(this.seek(t),this.parameters.initialTime=null)
            },this)),this.mb.subscribe(e.EVENTS.PLAYHEAD_TIME_CHANGED,"player",t.bind(function(t,n,r,i){
            this.playheadTime=n,this.duration=r,this.bufferLength=i,this.startTime||(this.startTime=(new Date).getTime()),!this.adPlaying&&this.parameters.initialTime&&n&&(e.log("Trying to do initialTime seek",this.parameters.initialTime),this.mb.publish(e.EVENTS.CAN_SEEK))
            },this)),this.mb.subscribe(e.EVENTS.DOWNLOADING,"player",t.bind(function(e,t,n,r){
            this.playheadTime=t,this.duration=n,this.bufferLength=r
            },this)),this.fullscreen=!1,this.mb.subscribe(e.EVENTS.FULLSCREEN_CHANGED,"player",t.bind(function(e,t){
            this.fullscreen=t
            },this)),this.error=null,this.mb.subscribe(e.EVENTS.ERROR,"player",t.bind(function(t,n){
            this.error=n,this.state=e.STATE.ERROR
            },this)),this.volume=1,this.mb.subscribe(e.EVENTS.VOLUME_CHANGED,"player",t.bind(function(e,t){
            this.volume=t
            },this)),this.mb.subscribe(e.EVENTS.SET_EMBED_CODE,"player",t.bind(function(t,n){
            this.error=null,this.playheadTime=-1,this.duration=-1,this.bufferLength=-1,this.currentItem=this.item=null,this.playbackReady=!1,this.state=e.STATE.LOADING
            },this)),this.mb.subscribe(e.EVENTS.DESTROY,"player",t.bind(function(t,r){
            n("#"+this.elementId).empty(),delete e.players[this.elementId],e.removeStyles(this.elementId),this.state=e.STATE.DESTROYED
            },this)),this.bitratesInfo={},this.mb.subscribe(e.EVENTS.BITRATE_INFO_AVAILABLE,"player",t.bind(function(e,t){
            this.bitratesInfo=t
            },this)),this.closedCaptionsLanguages={},this.mb.subscribe(e.EVENTS.CLOSED_CAPTIONS_INFO_AVAILABLE,"player",t.bind(function(e,t){
            this.closedCaptionsLanguages=t
            },this)),this.setEmbedCode=this.setCurrentItemEmbedCode=function(t,n){
            this.mb.publish(e.EVENTS.SET_EMBED_CODE,t,n||{})
            },this._playedOnce=!1,this._playQueued=!1,this.play=this.playMovie=function(){
            if(!this.playbackReady){
                this._playQueued=!0;
                return
            }
            this.mb.publish(this._playedOnce?e.EVENTS.PLAY:e.EVENTS.INITIAL_PLAY),this._playedOnce=!0,this._playQueued=!1
            },this.pause=this.pauseMovie=function(){
            this.mb.publish(e.EVENTS.PAUSE)
            },this.seek=this.setPlayheadTime=function(t){
            this.mb.publish(e.EVENTS.SEEK,t)
            },this.setVolume=function(t){
            this.mb.publish(e.EVENTS.CHANGE_VOLUME,t)
            },this.destroy=function(){
            this.mb.publish(e.EVENTS.DESTROY)
            },this.toggleSharePanel=function(){
            this.mb.publish(e.EVENTS.TOGGLE_SHARE_PANEL)
            },this.toggleInfoPanel=function(){
            this.mb.publish(e.EVENTS.TOGGLE_INFO_PANEL)
            },this.getPlayheadTime=function(){
            return this.playheadTime
            },this.getLiveTime=function(){
            return new Date(this.startTime+this.playheadTime*1e3+this.clockOffset)
            },this.getDuration=this.getTotalTime=function(){
            return this.embedCode===e.CONSTANTS.STANDALONE_AD_HOLDER?this.adDuration:this.duration
            },this.getBufferLength=function(){
            return this.bufferLength
            },this.getItem=this.getCurrentItem=function(){
            return this.item
            },this.getDescription=this.getCurrentItemDescription=function(){
            return this.item?this.item.description:null
            },this.getEmbedCode=this.getCurrentItemEmbedCode=function(){
            return this.item?this.item.embedCode||this.item.embed_code:null
            },this.getTitle=this.getCurrentItemTitle=function(){
            return this.item?this.item.title:null
            },this.isFullscreen=this.getFullscreen=function(){
            return this.fullscreen
            },this.getError=this.getErrorCode=function(){
            return this.error!=null?this.error.code:null
            },this.getErrorText=function(){
            return null
            },this.getState=function(){
            return this.state
            },this.getVolume=function(){
            return this.volume
            },this.skipAd=function(){
            this.mb.publish(e.EVENTS.SKIP_AD)
            },this.getBitrateInfo=function(){
            return this.bitratesInfo
            },this.getBitrateQualitiesAvailable=function(){
            return this.bitratesInfo.bitrateQualities
            },this.getBitratesAvailable=function(){
            return this.bitratesInfo.bitrates
            },this.getTargetBitrateQuality=function(){
            return this.bitratesInfo.targetBitrateQuality
            },this.getTargetBitrate=function(){
            return this.bitratesInfo.targetBitrate
            },this.setTargetBitrate=function(t){
            this.mb.publish(e.EVENTS.SET_TARGET_BITRATE,t)
            },this.setTargetBitrateQuality=function(t){
            this.mb.publish(e.EVENTS.SET_TARGET_BITRATE_QUALITY,t)
            },this.getCurrentItemClosedCaptionsLanguages=function(){
            return this.closedCaptionsLanguages
            },this.setClosedCaptionsLanguage=function(t){
            this.mb.publish(e.EVENTS.SET_CLOSED_CAPTIONS_LANGUAGE,t)
            },this.insertCuePoint=function(t,n,r){
            this.mb.publish(e.EVENTS.INSERT_CUE_POINT,t,n,r)
            },this.subscribe=function(e,n,r){
            this.mb.subscribe(e,n,function(){
                var e=t.toArray(arguments);
                e.unshift(r),t.defer.apply(this,e)
                })
            },t.isFunction(this.parameters.onCreate)&&this.parameters.onCreate(this),this.mb.publish(e.EVENTS.PLAYER_CREATED,this.elementId,this.parameters),this.embedCode&&this.setEmbedCode(u,this.parameters)
        },e.exposeStaticApi("Player",{
        create:function(t,n,r){
            return e.playerParams.platform==="flash-adset"&&(n=e.CONSTANTS.STANDALONE_AD_HOLDER),typeof window.console!="undefined"&&typeof window.console.log=="function"&&(console.log("V3 version: "+e.playerParams.v3_version),console.log("V3 version source: "+e.playerParams.v3_version_source)),e.players[t]||(e.playerCount++,e.players[t]=new e.Player(t,n,r)),e.players[t]
            },
        flashDebugCallback:function(e){
            window.postMessage({
                type:"OO_LOG",
                text:e
            },"*")
            },
        isolate:function(t){
            var n="http://debug.ooyala.com/?",r=e.playerParams.playerBrandingId,i=null;
            r&&(n+="pbid="+r+"&");
            var s;
            t&&(s=e.players[t]);
            if(e.playerCount!==1)return e.playerCount>1?(console.log("More than one player to choose.  Please specify the target div of the intended player as a parameter"),""):(console.log("There are no players on the page to isolate"),"");
            for(i in e.players)s=e.players[i];var o=JSON.stringify(s.parameters),u=s.embedCode;
            return o&&(n+="options="+encodeURIComponent(o)+"&"),u&&(n+="ec="+u+"&"),e.playerParams.environment!=="local-dev"&&e.playerParams.v3_version_source!=="default"&&(n+="version="+e.playerParams.v3_version+"&"),e.playerParams.platform==="html5-priority"&&(n+="useHtml5=true&"),console.log("If you are copying this link, do not highlight. right click and press 'copy link address'"),n
            },
        __placeholder:0
    })
    })(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(n,r){
        this.id=r,this.mb=n,this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"old_callbacks",t.bind(this._playerWasCreated,this)),this.mb.subscribe(e.EVENTS.PLAYING,"old_callbacks",t.bind(this._playing,this))
        };
        
    t.extend(r.prototype,{
        _playerWasCreated:function(e,t,n){
            n.oldStyleCallbackHandler&&(this.playerId=t)
            },
        _fireCustomerCallback:function(e,t,n){
            var r;
            if(!window.OOYALA_PLAYER_JS.customerCallbackName)return;
            try{
                var i=[e,t,n],s=window.OOYALA_PLAYER_JS.customerCallbackName.split("."),o=s.pop(),u=window;
                for(r=0;r<s.length;r++)u=u[s[r]];
                u&&typeof u[o]=="function"&&u[o].apply(this,i)
                }catch(a){
                var f="Severe, cannot invoke function:"+a.toString();
                window.console&&typeof window.console.log=="function"&&console.log(f)
                }
            },
    _playing:function(){
        this.playerId&&this._fireCustomerCallback(this.playerId,"stateChanged",{
            state:"playing"
        })
        },
    __end_marker:!0
    }),e.registerModule("old_callbacks",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    function v(t){
        if(t.origin!==i)return;
        if(t.data===s){
            clearTimeout(p),m(f);
            return
        }
        var n=null;
        try{
            n=e.JSON.parse(t.data)
            }catch(r){}
        if(!n||!n.callback)return;
        h[n.callback]&&(h[n.callback](n.result),delete h[n.callback])
        }
        function m(e){
        var t;
        l=e;
        while((t=c.pop())!=undefined)g(t[0],t[1],t[2])
            }
            function g(t,n,r){
        if(l===u){
            c.push(arguments);
            return
        }
        if(l===a||!d.contentWindow.postMessage){
            var s=e.localStorage[t].apply(e.localStorage,n);
            !r||r(s)
            }else{
            var o={
                method:t,
                arguments:n,
                callback:Math.random().toString(36).substring(7)
                };
                
            h[o.callback]=r,d.contentWindow.postMessage(JSON.stringify(o),i)
            }
        }
    var r=t.template("<%=server%>/ooyala_storage.html")({
    server:e.SERVER.API
    }),i=e.SERVER.API,s="LOADED",o=3e3,u=0,a=1,f=2,l=u,c=[],h={},p=null,d=document.createElement("iframe");
    d.style.display="none",d.src=r,n(document).ready(function(){
    document.body.appendChild(d),p=setTimeout(function(){
        m(a)
        },o)
    }),window.addEventListener?window.addEventListener("message",v,!1):window.attachEvent&&window.attachEvent("onmessage",v),e.ooyalaStorage={
    getItem:function(e,t){
        g("getItem",[e],t)
        },
    key:function(e,t){
        g("key",[e],t)
        },
    setItem:function(e,t,n){
        g("setItem",[e,t],n)
        },
    removeItem:function(e,t){
        g("removeItem",[e],t)
        },
    hasOwnProperty:function(e,t){
        g("hasOwnProperty",[e],t)
        }
    },!e.TEST_TEST_TEST||(e.ooyalaStorage._getIframeState=function(){
    return l
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    callbackQueue=[],e.GUID=undefined,e.ooyalaStorage.getItem("ooyala_guid",t.bind(function(t){
        t?e.GUID=t:(e.GUID=generateDeviceId(),e.ooyalaStorage.setItem("ooyala_guid",e.GUID));
        while((callback=callbackQueue.pop())!=undefined)callback(e.GUID)
            }),this),e.publicApi.getGuid=e.getGuid=function(t){
        if(e.GUID){
            if(typeof t=="function")try{
                t(e.GUID)
                }catch(n){}
            }else callbackQueue.push(t)
        },generateDeviceId=function(){
    var t=(new Date).getTime()+window.navigator.userAgent+Math.random().toString(16).split(".")[1];
    return(new e.jsSHA(t,"ASCII")).getHash("SHA-256","B64")
    },e.plugin("DeviceId",function(e,t,n,r){
    return function(t,n){
        t.subscribe(e.EVENTS.PLAYER_CREATED,"DeviceId",function(){
            e.publicApi.getGuid(function(n){
                t.publish(e.EVENTS.GUID_SET,n)
                })
            })
        }
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(t,n){
        this.id=n,this.mb=t,this.resizeTimer=null,this.width=0,this.height=0,this.useCustomControls=!e.uiParadigm.match(/mobile/),this.useNativeControls=!!e.uiParadigm.match(/native/),e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"ChromelessUi",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"Init",
                to:"PlayerCreated"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.ERROR,
                from:"*"
            },{
                name:e.EVENTS.PLAY,
                from:"*"
            },{
                name:e.EVENTS.WILL_CHANGE_FULLSCREEN,
                from:"*"
            },{
                name:e.EVENTS.FULLSCREEN_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.STREAM_PLAYING,
                from:"*"
            }]
            })
        };
        
    n.extend(r.prototype,{
        onPlayerCreated:function(r,s,o){
            this.elementId=s,this.topMostElement=t("#"+this.elementId),this.topMostElement.append('<div class="innerWrapper"></div>'),this.rootElement=this.topMostElement.find("div.innerWrapper"),this.params=o;
            var u=this.topMostElement.width(),a=this.topMostElement.height();
            (u==0||a==0)&&this.topMostElement.css({
                width:"100%",
                height:"100%"
            });
            var f=o.width||"100%",l=o.height||"100%";
            n.isNumber(f)&&(f+="px"),n.isNumber(l)&&(l+="px");
            var c=n.template(e.get_css("root"))({
                errorIcon:e.get_img_base64("icon_error"),
                elementId:this.elementId
                }).replace("width:0;","width:"+f+";").replace("height:0;","height:"+l+";");
            e.attachStyle(c,this.elementId),this.rootElement.append('<div class="oo_error" style="display:none"></div>'),this.errorUi=new i(this.rootElement.find("div.oo_error"));
            var h=["fullscreenchange","webkitfullscreenchange"],p=n.bind(this._onBrowserOriginatedFullscreenChange,this),d=this.rootElement;
            n.each(h,function(e){
                d.on(e,p)
                }),t(document).on("mozfullscreenchange",p),document.onwebkitfullscreenchange=p,d.resize(n.bind(this._onResize,this)),t(document).resize(n.bind(this._onResize,this)),t(window).resize(n.bind(this._onResize,this)),t(window).on("beforeunload",n.bind(this._onBeforeUnload,this))
            },
        onEmbedCodeChanged:function(e,t){
            this.errorUi.hide()
            },
        onError:function(t,n){
            n&&n.source!="flash"&&(this.mb.publish(e.EVENTS.PAUSE),this.errorUi.show(n))
            },
        onStreamPlaying:function(e){
            this.errorUi&&this.errorUi.hide()
            },
        _isFullscreen:function(){
            if(this.rootElement.hasClass("fullscreen"))return!0;
            var e=document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.webkitDisplayingFullscreen;
            return!!e
            },
        _onBrowserOriginatedFullscreenChange:function(){
            e.d("Fullscreen Changed",this._isFullscreen()),this.mb.publish(e.EVENTS.SIZE_CHANGED,this.rootElement.width(),this.rootElement.height()),this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,this._isFullscreen())
            },
        onFullscreenChanged:function(e,t){
            t?(this.originalZ=this.rootElement.css("z-index"),this.rootElement.css("z-index",this.originalZ+1e3),this.rootElement.css("overflow","visible")):this.rootElement.css("z-index","")
            },
        _onResize:function(){
            this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=n.delay(n.bind(function(){
                this.width!=this.rootElement.width()&&this.height!=this.rootElement.height()&&(this.width=this.rootElement.width(),this.height=this.rootElement.height(),this.mb.publish(e.EVENTS.SIZE_CHANGED,this.width,this.height))
                },this),100)
            },
        onPlay:function(){
            !this.useCustomControls&&!this.useNativeControls&&this.mb.publish(e.EVENTS.WILL_CHANGE_FULLSCREEN,!0)
            },
        onWillChangeFullscreen:function(e,t){
            if(!this.useNativeControls&&!this.useCustomControls)return;
            t?this._showFullscreen():this._hideFullscreen()
            },
        _getActiveVideo:function(){
            var e=this.rootElement.find("video.video"),t=this.rootElement.find("video.midroll"),n=e.get(0),r=this.rootElement.find("div.plugins video").get(0);
            return this._isVideoDomVisible("video.midroll")?n=t.get(0):r&&!this._isVideoDomVisible("video.video")&&(n=r),n
            },
        _showFullscreen:function(){
            var t=this.rootElement[0],n=this._getActiveVideo(),r=t.requestFullScreen||t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullScreen;
            (!r||e.isAndroid)&&n&&n.webkitEnterFullscreen?(n.isFullScreenMode=!0,n.webkitEnterFullscreen()):r?r.call(t):this.rootElement.addClass("fullscreen"),this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,!0)
            },
        _hideFullscreen:function(){
            var t=this._getActiveVideo();
            document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():t.webkitExitFullscreen?(t.isFullScreenMode=!1,t.webkitExitFullscreen()):this.rootElement.removeClass("fullscreen"),this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,!1)
            },
        _isVideoDomVisible:function(t){
            return this.rootElement.find(t).css("left")==e.CSS.VISIBLE_POSITION
            },
        _onBeforeUnload:function(t){
            this.mb.publish(e.EVENTS.PAGE_UNLOAD_REQUESTED,!0)
            },
        __placeholder:!0
        });
    var i=function(e){
        this.container=e,this.container.append('<div class="oo_error_image"></div>'),this.container.append('<div class="oo_error_message"><h1 class="oo_error_message_text"></h1></div>')
        };
        
    n.extend(i.prototype,{
        show:function(t){
            this.container.find("h1.oo_error_message_text").html(e.getLocalizedMessage(t.code)),this.container.show()
            },
        hide:function(){
            this.container.hide()
            }
        }),e.registerModule("chromeless_ui",function(e,t){
    return new r(e,t)
    })
})(OO,OO.$,OO._);
(function(e,t,n){
    var r=function(t,n){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback")&&!e.requiredInEnvironment("osmf-playback"))return;
        this.id=n,this.mb=t,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"EasterBunny",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"Init",
                to:"PlayerCreated"
            }]
            })
        };
        
    n.extend(r.prototype,{
        onPlayerCreated:function(r,i,s){
            this.elementId=i,this.showBunny=!1,this.bunnyId=i+"_EasterBunny";
            var o=new e.KeyInputVerifier(null,this.elementId),u=new e.GestureInputVerifier(null,this.elementId);
            o.setup(),u.setup(),o.on(e.BaseInputVerifier.KEY_INPUT_MATCHED,this,n.bind(this.toggleBunny,this)),u.on(e.BaseInputVerifier.GESTURE_MATCHED,this,n.bind(this.toggleBunny,this)),t(document.body).append("<div id='"+this.bunnyId+"' style='position:absolute; display:none'></div>")
            },
        getString:function(e){
            return"<div>"+JSON.stringify(e)+"</div>"
            },
        positionBunny:function(){
            t("#"+this.bunnyId).css({
                backgroundColor:"black",
                backgroundAlpha:.5,
                width:"300px",
                height:"400px;",
                overflow:"scroll",
                color:"white"
            });
            var e=t("#"+this.elementId).offset(),n=e.left+t("#"+this.elementId).width()+20,r=e.top;
            t("#"+this.bunnyId).css({
                position:"absolute",
                top:r+"px",
                left:n+"px"
                })
            },
        updateBunny:function(){
            t("#"+this.bunnyId).html("");
            if(!this.showBunny)return;
            t("#"+this.bunnyId).append(e.publicApi.REV),t("#"+this.bunnyId).append(this.getString(e.os)),t("#"+this.bunnyId).append(this.getString(e.platform));
            var n=t("#"+this.elementId).find("video.video").attr("src");
            t("#"+this.bunnyId).append(this.getString(n)),t("#OOYALA_DEBUG_CONSOLE").length==0&&t("#"+this.bunnyId).append("<div id='OOYALA_DEBUG_CONSOLE' class='OOYALA_DEBUG_CONSOLE'></div>")
            },
        toggleBunny:function(){
            this.showBunny=!this.showBunny,this.showBunny?(t("#"+this.bunnyId).show(),this.positionBunny(),this.updateBunny()):(t("#"+this.bunnyId).hide(),t("#"+this.bunnyId).find("div.OOYALA_DEBUG_CONSOLE").remove())
            }
        }),e.registerModule("easter_bunny",function(e,t){
    return new r(e,t)
    })
})(OO,OO.$,OO._);
(function(e,t,n){
    e.VideoElementWrapper=e.inherit(e.Emitter,function(t){
        this._video=t,this._readyToPlay=!0,this._playQueued=!1,this.canAccessBufferAttribute=!0,this.Id=e.getRandomString(),this.isM3u8=!1,this.videoEnded=!1,this.isPlaying=!1,this._currentUrl="",this._emitErrors=!0,this._emitErrorsTimer=null,this._unemittedErrors=[]
        }),t.extend(e.VideoElementWrapper,{
        FULL_SCREEN_CHANGED:"fullScreenChanged",
        WILL_PLAY:"willPlay",
        PLAYING:"playing",
        PAUSED:"paused",
        SEEKING:"seeking",
        SEEKED:"seeked",
        BUFFERING:"buffering",
        BUFFERED:"buffered",
        ERROR:"error",
        PLAYHEAD_TIME_CHANGED:"playheadTimeChanged",
        PLAYED:"played",
        VOLUME_CHANGED:"volumeChanged",
        DURACTION_CHANGED:"durationChanged",
        PLAY_NEXT:"playNext",
        DOWNLOADING:"downloading",
        __placeholder:!0
        }),t.extend(e.VideoElementWrapper.prototype,{
        setup:function(){
            var e={
                loadstart:t.bind(this.onLoadStart,this),
                progress:t.bind(this.onProgress,this),
                suspend:t.bind(this.onSuspend,this),
                abort:t.bind(this.onAbort,this),
                error:t.bind(this.onError,this),
                emptied:t.bind(this.onEmptied,this),
                stalled:t.bind(this.onStalled,this),
                play:t.bind(this.onPlay,this),
                pause:t.bind(this.onPause,this),
                loadedmetadata:t.bind(this.onLoadedMetaData,this),
                loadeddata:t.bind(this.onLoadedData,this),
                waiting:t.bind(this.onWaiting,this),
                playing:t.bind(this.onPlaying,this),
                canplay:t.bind(this.onCanPlay,this),
                canplaythrough:t.bind(this.onCanPlayThrough,this),
                seeking:t.bind(this.onSeeking,this),
                seeked:t.bind(this.onSeeked,this),
                timeupdate:t.bind(this.onTimeUpdate,this),
                ended:t.bind(this.onEnded,this),
                ratechange:t.bind(this.onRateChange,this),
                durationchange:t.bind(this.onDurationChange,this),
                volumechange:t.bind(this.onVolumeChange,this),
                volumechangeNew:t.bind(this.onVolumeChange,this),
                webkitbeginfullscreen:t.bind(this.onFullScreenBegin,this),
                webkitendfullscreen:t.bind(this.onFullScreenEnd,this),
                webkitfullscreenchange:t.bind(this.onFullScreenChange,this)
                };
                
            t.each(e,function(e,t){
                n(this._video).on(t,e)
                },this)
            },
        setEmbedCode:function(e){},
        getIsActive:function(){
            return n(this._video).css("left")=="0px"
            },
        getStreamUrl:function(){
            return this._currentUrl
            },
        getVolume:function(){
            return this._video.volume
            },
        getCurrentTime:function(){
            return this._video.currentTime
            },
        getSeekableRange:function(){
            return e.safeSeekRange(this._video.seekable)
            },
        getDuration:function(){
            return this._video.duration===Infinity||isNaN(this._video.duration)?0:this._video.duration
            },
        getBuffer:function(){
            return this._video.buffered&&this._video.buffered.length>0?this._video.buffered.end(0):0
            },
        getOriginVideoWidth:function(){
            return this._video.videoWidth
            },
        getOriginVideoHeight:function(){
            return this._video.videoHeight
            },
        hasBrowserDefaultControl:function(){
            return this._video.controls
            },
        setPosterUrl:function(e){
            this._video.poster=e
            },
        load:function(n,r){
            if(!!r)try{
                this._video.currentTime=0,this._video.pause()
                }catch(i){
                e.log("Failed to rewind video, probably ok")
                }
                this._currentUrl.replace(/[\?\&]_=[^&]+$/,"")!=n&&(this._currentUrl=n||"",this._currentUrl.length>0&&e.isChrome&&(this._currentUrl=this._currentUrl+(/\?/.test(this._currentUrl)?"&":"?")+"_="+e.getRandomString()),this.isM3u8=this._currentUrl.toLowerCase().indexOf("m3u8")>0,this._readyToPlay=!1,this._video.src=this._currentUrl,this._video.load()),t.isEmpty(n)&&this.trigger(e.VideoElementWrapper.ERROR,0)
            },
        reload:function(){
            this._video.load()
            },
        play:function(){
            this._video.play(),this.isPlaying=!0
            },
        pause:function(){
            this._playQueued=!1,this._video.pause(),this.isPlaying=!1
            },
        safeSeekTime:function(t){
            var n=t>=this._video.duration?this._video.duration-.01:t<0?0:t;
            return e.isIpad&&n<.1&&(n=.1),n
            },
        canSeekToTime:function(e){
            var t=this.getSeekableRange();
            if(t.start===0&&t.end===0)return!1;
            var n=this.safeSeekTime(e);
            return t.start<=n&&t.end>=n?!0:!1
            },
        seek:function(e){
            return this.canSeekToTime(e)?(this._video.currentTime=this.safeSeekTime(e),!0):(this.queueSeek(e),!1)
            },
        queueSeek:function(e){
            this.queuedSeekTime=e
            },
        dequeueSeek:function(){
            if(this.queuedSeekTime===undefined)return;
            this.seek(this.queuedSeekTime)&&(this.queuedSeekTime=undefined)
            },
        setVolume:function(t){
            if(typeof t!="number"||t<0||t>1){
                e.d("can not assign volume with invalid value",t);
                return
            }
            this._video.volume=t
            },
        delayErrorPublishing:function(n){
            e.d(n),this._emitErrors=!1,clearTimeout(this._emitErrorsTimer),this._emitErrorsTimer=null,t.delay(t.bind(function(){
                this._emitErrorsTimer=t.delay(t.bind(function(){
                    this._emitErrors=!0,t.each(this._unemittedErrors,function(e){
                        this._emitError(e.error,e.code)
                        }),this._unemittedErrors.length=0
                    },this),5e3)
                },this),1)
            },
        onLoadStart:function(t){
            e.d(t.type,this._video.src),this._currentUrl=this._video.src
            },
        onProgress:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.DOWNLOADING)
            },
        onSuspend:function(t){
            e.d(t.type)
            },
        onAbort:function(t){
            e.d(t.type,this._currentUrl)
            },
        onError:function(t){
            var n=this._video.error?this._video.error.code:-1;
            this._emitErrors?this._emitError(t,n):(e.d("Error not emitted: "+t.type),this._unemittedErrors.push({
                error:t,
                code:n
            }),this.mb.publish(e.EVENTS.PAGE_PROBABLY_UNLOADING))
            },
        onEmptied:function(t){
            e.d(t.type)
            },
        onStalled:function(t){
            e.d(t.type),e.isIpad&&this._video.currentTime===0&&this._video.pause()
            },
        onPlay:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.WILL_PLAY)
            },
        onPause:function(t){
            e.d(t.type,{
                paused:this._video.paused,
                ended:this._video.ended
                }),this.trigger(e.VideoElementWrapper.PAUSED),this.isPlaying=!0
            },
        onLoadedMetaData:function(t){
            e.d(t.type)
            },
        onLoadedData:function(t){
            e.d(t.type)
            },
        onWaiting:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.BUFFERING)
            },
        onPlaying:function(t){
            e.d(t.type),this._playQueued=!1,this.videoEnded=!1,this.isPlaying=!0,this.trigger(e.VideoElementWrapper.PLAYING)
            },
        onCanPlay:function(t){
            e.d(t.type,this._video.readyState)
            },
        onCanPlayThrough:function(t){
            this.trigger(e.VideoElementWrapper.BUFFERED),e.d(t.type,this._video.readyState)
            },
        onSeeking:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.SEEKING)
            },
        onSeeked:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.SEEKED)
            },
        onTimeUpdate:function(n){
            this.trigger(e.VideoElementWrapper.PLAYHEAD_TIME_CHANGED),this.dequeueSeek();
            var r=this.getDuration(),i=Math.floor(r);
            this.isM3u8&&this.getCurrentTime()==r&&r>i&&(e.log("manually triggering end",this._currentUrl,r,this.getCurrentTime()),t.delay(t.bind(this.onEnded,this),0,n))
            },
        onEnded:function(t){
            e.d(t.type);
            if(this.videoEnded)return;
            this.videoEnded=!0,this.trigger(e.VideoElementWrapper.PLAYED),this.trigger(e.VideoElementWrapper.PLAY_NEXT)
            },
        onRateChange:function(t){
            e.d(t.type)
            },
        onDurationChange:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.DURATION_CHANGED)
            },
        onVolumeChange:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.VOLUME_CHANGED)
            },
        onFullScreenChange:function(t){
            e.d(t.type)
            },
        onFullScreenBegin:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.FULL_SCREEN_CHANGED,!0)
            },
        onFullScreenEnd:function(t){
            e.d(t.type),this.trigger(e.VideoElementWrapper.FULL_SCREEN_CHANGED,!1,this._video.paused)
            },
        show:function(t){
            n(this._video).css("left",t?e.CSS.VISIBLE_POSITION:e.CSS.INVISIBLE_POSITION)
            },
        _emitError:function(t,n){
            e.d(t.type),this.trigger(e.VideoElementWrapper.ERROR,n)
            },
        _asyncTriggerEvent:function(e){
            t.delay(t.bind(function(){
                this.trigger(e)
                },this),0)
            },
        kill:function(){
            this.pause(),this._video.src=""
            },
        __placeholder:!0
        })
    })(OO,OO._,OO.$);
(function(e,t,n){
    e.createVideoElementWrapper=function(t,r,i){
        var s=null;
        e.d("Using HTML5 Playback");
        var o=n("<video>");
        o.attr("class",r);
        var u=i&&i.preload===!1?!1:!0;
        return o.attr("preload",u?"auto":"none"),e.isIos&&o.attr("x-webkit-airplay","allow"),t.append(o),s=new e.VideoElementWrapper(o[0]),s.setup(),s
        }
    })(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(t,n){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback")&&!e.requiredInEnvironment("osmf-playback"))return;
        this.mb=t,this.id=n,this.inlineAds=[],this.waitForPlaybackReady=!0,this.isInlineAdsPlaying=!1,this.currentMainVideoPlayhead=0,this.skipPrerollAdsCheck=!1,this.userRequest="",this.playedAtLeastOnce=!1,this.adsManagerHandlingAds=!1,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"PlaybackControl",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"*"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*",
                to:"WaitingForApiResponse"
            },{
                name:e.EVENTS.CONTENT_TREE_FETCHED,
                from:"WaitingForApiResponse"
            },{
                name:e.EVENTS.METADATA_FETCHED,
                from:"WaitingForApiResponse"
            },{
                name:e.EVENTS.AUTHORIZATION_FETCHED,
                from:["WaitingForApiResponse","PlaybackReady"]
                },{
                name:e.EVENTS.AD_AUTHORIZATION_FETCHED,
                from:"*"
            },{
                name:e.EVENTS.PLAYBACK_READY,
                from:"WaitingForApiResponse",
                to:"PlaybackReady"
            },{
                name:e.EVENTS.INITIAL_PLAY,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.PLAY,
                from:"*",
                to:"PlayRequested"
            },{
                name:e.EVENTS.PLAY_STREAM,
                from:["PlaybackReady","Paused","SwitchingStreams","PauseRequested"],
                to:"PlayingState"
            },{
                name:e.EVENTS.PAUSE,
                from:["PlayingState","PlayRequested","PlaybackReady"],
                to:"PauseRequested"
            },{
                name:e.EVENTS.PAUSE_STREAM,
                from:["PlayingState","PlayRequested"],
                to:"Paused"
            },{
                name:e.EVENTS.PAUSED,
                from:["PlayingState","PlayRequested","PauseRequested"],
                to:"Paused"
            },{
                name:e.EVENTS.STREAM_PAUSED,
                from:["PlayingState","PlayRequested","PauseRequested"],
                to:"Paused"
            },{
                name:e.EVENTS.PLAYING,
                from:["Paused","PlayRequested","PauseRequested"],
                to:"PlayingState"
            },{
                name:e.EVENTS.STREAM_PLAYING,
                from:["Paused","PlayRequested","PauseRequested","PlayingState","SwitchingStreams"],
                to:"PlayingState"
            },{
                name:e.EVENTS.STREAM_PLAYED,
                from:["PlayingState","Paused"],
                to:"SwitchingStreams"
            },{
                name:e.EVENTS.PLAYED,
                from:"SwitchingStreams",
                to:"PlaybackReady"
            },{
                name:e.EVENTS.STREAM_PLAY_FAILED,
                from:"*"
            },{
                name:e.EVENTS.WILL_PLAY_STREAM,
                from:["PlaybackReady","Paused","PlayRequested"]
                },{
                name:e.EVENTS.SEEK,
                from:["PlaybackReady","Paused","PlayingState","PlayRequested"]
                },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.WILL_FETCH_ADS,
                from:"*"
            },{
                name:e.EVENTS.AD_CONFIG_READY,
                from:"*"
            },{
                name:e.EVENTS.WILL_PLAY_ADS,
                from:"*"
            },{
                name:e.EVENTS.ADS_PLAYED,
                from:"*"
            },{
                name:e.EVENTS.ADS_ERROR,
                from:"*"
            },{
                name:e.EVENTS.PLAY_MIDROLL_STREAM,
                from:"*"
            },{
                name:e.EVENTS.MIDROLL_PLAY_FAILED,
                from:"*"
            },{
                name:e.EVENTS.MIDROLL_STREAM_PLAYED,
                from:"*"
            },{
                name:e.EVENTS.USE_SERVER_SIDE_HLS_ADS,
                from:"*"
            },{
                name:e.EVENTS.ADS_MANAGER_HANDLING_ADS,
                from:"*"
            },{
                name:e.EVENTS.ADS_MANAGER_FINISHED_ADS,
                from:"*"
            }]
            })
        };
        
    t.extend(r.prototype,{
        onPlayerCreated:function(e,t,n){
            this.parameters=n
            },
        onPlayed:function(e){
            this.onPlaybackReady()
            },
        onWillPlayAds:function(e){
            this.isInlineAdsPlaying=!0
            },
        onAdsPlayed:function(e){
            this.isInlineAdsPlaying=!1
            },
        onAdsError:function(e){
            this.isInlineAdsPlaying=!1
            },
        onPlayMidrollStream:function(e){
            this.isInlineAdsPlaying=!0
            },
        onMidrollStreamPlayed:function(t,n){
            this.isInlineAdsPlaying=!1;
            var r=this.currentMidrollAdItem,i=this._checkAndPlayReadyMidrolls(n);
            i||(this.mb.publish(e.EVENTS.ADS_PLAYED,r.item),this.mb.publish(e.EVENTS.WILL_RESUME_MAIN_VIDEO))
            },
        onEmbedCodeChanged:function(e,t){
            this.contentTree=null,this.metadata=null,this.authorization=null,this.currentItem=null,this.inlineAds=[],this.prerolls=[],this.midrolls=[],this.postrolls=[],this.inlineAdsItems=[],this.mainVideoItem=null,this.waitForPlaybackReady=!0,this.movieIndex=-1,this.currentMidrollAdItem=null,this.skipPrerollAdsCheck=!1,this.userRequest="",this.playedAtLeastOnce=!1,this.useStitchedAds=!1
            },
        onContentTreeFetched:function(n,r){
            this.contentTree=r,this.inlineAds=e.requiredInEnvironment("ads")&&!this.useStitchedAds?this.contentTree.ads:[],this.inlineAdsItems=t.map(this.inlineAds,function(e,t){
                return{
                    type:"ad",
                    index:t,
                    item:e
                }
            },this),this.prerolls=t.select(this.inlineAdsItems,t.bind(this._isPreRollAd,this),this),e.supportMidRollAds?this.midrolls=t.select(this.inlineAdsItems,t.bind(this._isMidRollAd,this),this):this.midrolls=[],this.postrolls=t.select(this.inlineAdsItems,t.bind(this._isPostRollAd,this),this),this.movieIndex=t.size(this.postrolls)>0?this.postrolls[0].index-1:t.size(this.inlineAds),this.mainVideoItem={
            type:"movie",
            index:this.movieIndex,
            item:this.authorization
            },t.size(this.inlineAds)>0&&(e.d("start a timer to fetch initial ads",e.playerParams.maxAdsTimeout),t.delay(t.bind(this._onFetchPrerollTimeOut,this),e.playerParams.maxAdsTimeout*1e3)),this._checkPlaybackReady(),this.mb.publish(e.EVENTS.WILL_FETCH_ADS,null)
        },
    _onFetchPrerollTimeOut:function(){
        e.d("Timeout of fetching pre-roll ads."),this.skipPrerollAdsCheck=!0,this.waitForPlaybackReady&&this._checkPlaybackReady(),this.mb.publish(e.EVENTS.AD_FETCH_FAILED,null)
        },
    onAdConfigReady:function(e,n){
        n&&n.vastAdUnit&&t.each(this.inlineAds,function(e,r){
            e.type=="vast"&&!t.isEmpty(e.url)&&e.url===n.vastUrl&&t.extend(e,n.vastAdUnit)
            },this),this._checkPlaybackReady()
        },
    onWillFetchAds:function(e){
        this.skipPrerollAdsCheck=!0,this._checkPlaybackReady()
        },
    onMetadataFetched:function(e,t){
        this.metadata=t,this._checkPlaybackReady()
        },
    onUseServerSideHlsAds:function(e,t){
        this.useStitchedAds=t,this.useStitchedAds&&(this.inlineAds=this.prerolls=this.midrolls=this.postrolls=[])
        },
    onAuthorizationFetched:function(e,t){
        this.authorization=t,this.mainVideoItem={
            type:"movie",
            index:this.movieIndex,
            item:this.authorization
            },this._checkPlaybackReady()
        },
    onAdAuthorizationFetched:function(e,n){
        t.each(this.inlineAds,function(e,r){
            var i=e.ad_embed_code?n[e.ad_embed_code]:null;
            i&&t.extend(e,i)
            },this),this._checkPlaybackReady()
        },
    onAdsManagerHandlingAds:function(e,t){
        this.adsManagerHandlingAds=!0
        },
    onAdsManagerFinishedAds:function(e,t){
        this.adsManagerHandlingAds=!1
        },
    _findFirstReadyPreRolls:function(){
        return t.find(this.prerolls,function(e,t){
            return e&&this._isAdReady(e.item)
            },this)
        },
    _checkWaitForAds:function(){
        var e=!0;
        if(t.size(this.prerolls)>0){
            var n=this._findFirstReadyPreRolls();
            n&&(e=!1)
            }else e=!1;
        return e
        },
    _checkPlaybackReady:function(){
        if(!this.waitForPlaybackReady){
            this.currentState=="PlaybackReady"&&this.onPlaybackReady();
            return
        }
        this.contentTree!=null&&this.metadata!=null&&this.authorization!=null&&(this.skipPrerollAdsCheck||!this._checkWaitForAds())&&this.mb.publish(e.EVENTS.PLAYBACK_READY)
        },
    onPlaybackReady:function(){
        var t=this._findFirstReadyPreRolls();
        this.currentItem=t||this.mainVideoItem,this.stream_url=this._streamForItem(this.currentItem.item),this.mb.publish(e.EVENTS.PRELOAD_STREAM,this.stream_url),this.waitForPlaybackReady=!1;
        var n=this.parameters.autoPlay==="true"||this.parameters.autoPlay===!0||this.parameters.autoplay==="true"||this.parameters.autoplay===!0;
        this.playedAtLeastOnce==0&&n&&e.allowAutoPlay&&this.mb.publish(e.EVENTS.INITIAL_PLAY);
        var r=this.parameters.loop==="true"||this.parameters.loop===!0;
        this.playedAtLeastOnce&&r&&this.mb.publish(e.EVENTS.PLAY)
        },
    _isAdReady:function(e){
        return e&&this._streamForItem(e)
        },
    _isMidRollAd:function(e){
        return e&&!this._isPreRollAd(e)&&!this._isPostRollAd(e)
        },
    _isPreRollAd:function(e){
        var t=e?e.item:null;
        return t&&t.time<250
        },
    _isPostRollAd:function(e){
        var t=e?e.item:null;
        return t&&t.time==1e9
        },
    _lookupNextPlaybackItem:function(e,n){
        if(e=="ad"&&n==t.size(this.prerolls))return this.mainVideoItem;
        if(n<t.size(this.prerolls)||n>this.mainVideoItem.index){
            var r=t.find(this.inlineAdsItems,t.bind(function(e,r){
                return n<t.size(this.prerolls)&&r>=t.size(this.prerolls)?!1:r<n?!1:this._isAdReady(e.item)?!0:!1
                },this));
            return n>this.mainVideoItem.index&&!r?null:r||this.mainVideoItem
            }
            return null
        },
    _streamForItem:function(n){
        return n.streamUrl?n.streamUrl:t.isEmpty(n.streams)?null:t.isEmpty(n.streams[0])?null:e.decode64(n.streams[0].url.data)
        },
    _publishPlayItemEvent:function(e,t,n){
        this._checkCompanionAds(e),this.mb.publish(n,t,e)
        },
    onInitialPlay:function(){
        this.mb.publish(e.EVENTS.PLAY,this.currentItem.item)
        },
    onPlay:function(){
        this.userRequest="play",(this.currentItem.type=="ad"||this.currentMidrollAdItem)&&this.mb.publish(e.EVENTS.WILL_PLAY_ADS,this.currentItem.item);
        if(this.currentMidrollAdItem){
            var t=this._streamForItem(this.currentMidrollAdItem.item);
            this._publishPlayItemEvent(this.currentMidrollAdItem,t,e.EVENTS.PLAY_MIDROLL_STREAM)
            }else this._publishPlayItemEvent(this.currentItem,this.stream_url,e.EVENTS.PLAY_STREAM)
            },
    onPause:function(){
        this.userRequest="pause",this.mb.publish(e.EVENTS.PAUSE_STREAM)
        },
    _checkAndPlayReadyMidrolls:function(n){
        if(this.midrolls.length==0||this.isInlineAdsPlaying)return!1;
        var r=this.currentMidrollAdItem?this.currentMidrollAdItem.index:-1;
        this.currentMidrollAdItem=t.find(this.midrolls,function(e){
            var t=Math.floor(e.item.time/250);
            return t==Math.floor(n*1e3/250)&&e.index>r
            },this);
        if(this.currentMidrollAdItem){
            var i=this._streamForItem(this.currentMidrollAdItem.item);
            if(i)return r==-1&&this.mb.publish(e.EVENTS.WILL_PLAY_ADS,this.currentItem.item),this._publishPlayItemEvent(this.currentMidrollAdItem,i,e.EVENTS.PLAY_MIDROLL_STREAM),!0
                }
                return this.currentMidrollAdItem=null,!1
        },
    _checkCompanionAds:function(n){
        if(n.type!="ad"||t.isNull(n.item)||t.isNull(n.item.data)||n.item.type!="vast"||t.isEmpty(n.item.data.companion))return;
        t.defer(t.bind(function(){
            this.mb.publish(e.EVENTS.WILL_SHOW_COMPANION_ADS,{
                ads:n.item.data.companion
                })
            },this))
        },
    onPlayheadTimeChanged:function(e,t,n){
        if(this.currentState!="PlayingState"||this.currentMidrollAdItem)return;
        this.currentItemActualDuration=n,this.currentMainVideoPlayhead<t-.1&&this._checkAndPlayReadyMidrolls(t),this.currentMainVideoPlayhead=t
        },
    onStreamPlayed:function(){
        if(this.adsManagerHandlingAds)return;
        this.playedAtLeastOnce=!0;
        if(this.currentItem.type==="movie"&&t.size(this.postrolls)==0&&!this.isInlineAdsPlaying){
            this.mb.publish(e.EVENTS.PLAYED);
            return
        }
        var n=this.currentItem;
        this.currentItem=this._lookupNextPlaybackItem(this.currentItem.type,this.currentItem.index+1);
        if(!this.currentItem){
            n.type=="ad"&&this.mb.publish(e.EVENTS.ADS_PLAYED,n.item),this.mb.publish(e.EVENTS.PLAYED);
            return
        }
        this.stream_url=this._streamForItem(this.currentItem.item),this.currentItem.type=="movie"&&n.type=="ad"?this.mb.publish(e.EVENTS.ADS_PLAYED,this.currentItem.item):this.currentItem.type=="ad"&&n.type=="movie"&&this.mb.publish(e.EVENTS.WILL_PLAY_ADS,this.currentItem.item),this._publishPlayItemEvent(this.currentItem,this.stream_url,e.EVENTS.PLAY_STREAM)
        },
    onStreamPlaying:function(){
        this.userRequest==="play"&&this.mb.publish(e.EVENTS.PLAYING),this.userRequest=""
        },
    onStreamPaused:function(){
        this.userRequest==="pause"&&this.mb.publish(e.EVENTS.PAUSED),this.userRequest=""
        },
    onSeek:function(t,n){
        this.mb.publish(e.EVENTS.SEEK_STREAM,n)
        },
    onStreamPlayFailed:function(t,n){
        if(this.adsManagerHandlingAds)return;
        if(this.currentItem&&this.currentItem.type=="ad")e.d("PreRoll failed, fallback to next stream"),this.currentItem.item.streams=[],this.currentItem.item.streamUrl=null,this.currentState==="PlayingState"?this.onStreamPlayed():this._checkPlaybackReady();
        else{
            this.mb.publish(e.EVENTS.PLAY_FAILED,n);
            var r=window.MediaError?window.MediaError.MEDIA_ERR_ABORTED:1,i=window.MediaError?window.MediaError.MEDIA_ERR_NETWORK:2;
            if(n==r||n==i)this.mb.publish(e.EVENTS.ERROR,{
                code:e.ERROR.PLAYBACK.NETWORK
                });else switch(this.contentTree.content_type){
                case"Video":
                    this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.PLAYBACK.STREAM
                    });
                break;
                case"LiveStream":
                    this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.PLAYBACK.LIVESTREAM
                    });
                break;
                default:
                    this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.PLAYBACK.GENERIC
                    })
                }
                }
            this.userRequest=""
    },
    onMidrollPlayFailed:function(){
        e.d("MidRoll failed, fall back to main video");
        var t=this.currentMidrollAdItem.item;
        this.currentMidrollAdItem=null,this.mb.publish(e.EVENTS.ADS_PLAYED,t),this.mb.publish(e.EVENTS.WILL_RESUME_MAIN_VIDEO)
        },
    onWillPlayStream:function(){
        this.mb.publish(e.EVENTS.WILL_PLAY)
        },
    __placeholder:!0
    }),e.registerModule("playbackControl",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(n,r){
        if(!e.requiredInEnvironment("html5-playback"))return;
        this.toString=function(){
            return"html5-playback"
            },this.mb=n,this.id=r,this.willPlayFromBeginning=!0,this.playedAtLeastOnce=!1,this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"playback",t.bind(this._playerWasCreated,this)),this.mb.subscribe(e.EVENTS.PRELOAD_STREAM,"playback",t.bind(this._preloadStream,this)),this.mb.subscribe(e.EVENTS.RELOAD_STREAM,"playback",t.bind(this._reloadStream,this)),this.mb.subscribe(e.EVENTS.PLAY_STREAM,"playback",t.bind(this._playStream,this)),this.mb.subscribe(e.EVENTS.PAUSE_STREAM,"playback",t.bind(this._pauseStream,this)),this.mb.subscribe(e.EVENTS.SEEK_STREAM,"playback",t.bind(this._seek,this)),this.mb.subscribe(e.EVENTS.EMBED_CODE_CHANGED,"playback",t.bind(this._embedCodeChanged,this)),this.mb.subscribe(e.EVENTS.CHANGE_VOLUME,"playback",t.bind(this._changeVolume,this)),this.mb.intercept(e.EVENTS.DESTROY,"playback",t.bind(this._destroy,this)),this.mb.subscribe(e.EVENTS.PLAY_MIDROLL_STREAM,"playback",t.bind(this._playMidRoll,this)),this.mb.subscribe(e.EVENTS.WILL_RESUME_MAIN_VIDEO,"playback",t.bind(this._resumeMainVideo,this)),this.mb.subscribe(e.EVENTS.PAGE_UNLOAD_REQUESTED,"playback",t.bind(this._pageUnloadRequested,this))
        };
        
    t.extend(r.prototype,{
        _toggleMidrollAndMainVideo:function(e){
            this.videoWrapper&&this.videoWrapper.show(e),this.midrollWrapper&&this.midrollWrapper.show(!e)
            },
        _playMidRoll:function(e,t){
            this.videoWrapper.pause(),this._toggleMidrollAndMainVideo(!1),this.midrollWrapper.load(t,!0),this.midrollWrapper.play()
            },
        _midrollPlayed:function(){
            this.mb.publish(e.EVENTS.MIDROLL_STREAM_PLAYED,this.videoWrapper.getCurrentTime())
            },
        _midrollPaused:function(){
            if(this.videoWrapper.isPlaying)return;
            this.mb.publish(e.EVENTS.STREAM_PAUSED,this.midrollWrapper.getCurrentTime())
            },
        _midrollPlayheadChanged:function(){
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this.midrollWrapper.getCurrentTime(),this.midrollWrapper.getDuration(),this.midrollWrapper.getBuffer())
            },
        _resumeMainVideo:function(e){
            this._toggleMidrollAndMainVideo(!0),this.videoWrapper.play(),this.midrollWrapper.pause()
            },
        _embedCodeChanged:function(e,t){
            this.videoWrapper&&this.videoWrapper.setEmbedCode(t),this.willPlayFromBeginning=!0
            },
        _playerWasCreated:function(r,i,s){
            this.elementId=i,this.rootElement=n("#"+this.elementId+" > div"),this.params=s,e.attachStyle(t.template(e.get_css("playback"))({
                elementId:this.elementId
                }),this.elementId),this.videoWrapper=e.createVideoElementWrapper(this.rootElement,"video",this.params),this.videoWrapper.on(e.VideoElementWrapper.WILL_PLAY,"playback",t.bind(this._videoWillPlay,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYING,"playback",t.bind(this._videoPlaying,this)),this.videoWrapper.on(e.VideoElementWrapper.PAUSED,"playback",t.bind(this._videoPaused,this)),this.videoWrapper.on(e.VideoElementWrapper.ERROR,"playback",t.bind(this._videoError,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYHEAD_TIME_CHANGED,"playback",t.bind(this._videoPlayheadTimeChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.DURATION_CHANGED,"playback",t.bind(this._videoDurationChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.BUFFERING,"playback",t.bind(this._videoBuffering,this)),this.videoWrapper.on(e.VideoElementWrapper.BUFFERED,"playback",t.bind(this._videoBuffered,this)),this.videoWrapper.on(e.VideoElementWrapper.SEEKED,"playback",t.bind(this._videoSeeked,this)),this.videoWrapper.on(e.VideoElementWrapper.DOWNLOADING,"playback",t.bind(this._videoDownloading,this)),this.videoWrapper.on(e.VideoElementWrapper.VOLUME_CHANGED,"playback",t.bind(this._videoVolumeChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYED,"playback",t.bind(this._videoPlayed,this)),this.videoWrapper.on(e.VideoElementWrapper.FULL_SCREEN_CHANGED,"playback",t.bind(this._fullScreenChanged,this)),e.supportMidRollAds&&(this.midrollWrapper=e.createVideoElementWrapper(this.rootElement,"midroll",this.params),this.midrollWrapper.on(e.VideoElementWrapper.PLAYED,"playback",t.bind(this._midrollPlayed,this)),this.midrollWrapper.on(e.VideoElementWrapper.PAUSED,"playback",t.bind(this._midrollPaused,this)),this.midrollWrapper.on(e.VideoElementWrapper.PLAYHEAD_TIME_CHANGED,"playback",t.bind(this._midrollPlayheadChanged,this)),this.midrollWrapper.on(e.VideoElementWrapper.ERROR,"playback",t.bind(this._midRollVideoError,this))),this._videoVolumeChanged()
            },
        _playVideoWithReport:function(){
            this._toggleMidrollAndMainVideo(!0),this.videoWrapper.play(),this.willPlayFromBeginning&&this.mb.publish(e.EVENTS.WILL_PLAY_FROM_BEGINNING),this.willPlayFromBeginning=!1
            },
        _preloadStream:function(e,t){
            this.videoWrapper.load(t,!0)
            },
        _reloadStream:function(e){
            this.videoWrapper.reload()
            },
        _playStream:function(e,t){
            this.videoWrapper.load(t,!1),this._playVideoWithReport()
            },
        _pauseStream:function(e){
            this.videoWrapper.pause(),this.midrollWrapper&&this.midrollWrapper.pause()
            },
        _seek:function(t,n){
            this.videoWrapper.getIsActive()?this.videoWrapper.seek(n):this.midrollWrapper&&this.midrollWrapper.getIsActive()?this.midrollWrapper.seek(n):e.log("Trying to seek while video element is not active")
            },
        _changeVolume:function(e,t){
            this.videoWrapper.setVolume(t)
            },
        _videoWillPlay:function(){
            this.mb.publish(e.EVENTS.WILL_PLAY_STREAM,this.videoWrapper.getStreamUrl())
            },
        _videoPlaying:function(){
            this.mb.publish(e.EVENTS.STREAM_PLAYING,this.videoWrapper.getStreamUrl())
            },
        _videoPaused:function(){
            if(this.midrollWrapper&&this.midrollWrapper.isPlaying)return;
            this.mb.publish(e.EVENTS.STREAM_PAUSED,this.videoWrapper.getStreamUrl())
            },
        _videoPlayed:function(){
            this.willPlayFromBeginning=!0,this.playedAtLeastOnce=!0,this.mb.publish(e.EVENTS.STREAM_PLAYED,this.videoWrapper.getStreamUrl())
            },
        _videoError:function(t,n){
            this.mb.publish(e.EVENTS.STREAM_PLAY_FAILED,n)
            },
        _videoBuffering:function(){
            this.mb.publish(e.EVENTS.BUFFERING,this.videoWrapper.getStreamUrl())
            },
        _videoBuffered:function(){
            this.mb.publish(e.EVENTS.BUFFERED,this.videoWrapper.getStreamUrl())
            },
        _videoSeeked:function(){
            this.mb.publish(e.EVENTS.SEEKED)
            },
        _videoDownloading:function(){
            this.mb.publish(e.EVENTS.DOWNLOADING,this.videoWrapper.getCurrentTime(),this.videoWrapper.getDuration(),this.videoWrapper.getBuffer(),this.videoWrapper.getSeekableRange(),this.videoWrapper.getStreamUrl())
            },
        _fullScreenChanged:function(t,n,r){
            this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,n,r)
            },
        _videoVolumeChanged:function(){
            this.mb.publish(e.EVENTS.VOLUME_CHANGED,this.videoWrapper.getVolume())
            },
        _videoPlayheadTimeChanged:function(){
            var t=this.videoWrapper.getCurrentTime(),n=this.videoWrapper.getDuration(),r=this.videoWrapper.getBuffer(),i=this.videoWrapper.getSeekableRange();
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,t,n,r,i)
            },
        _videoDurationChanged:function(){
            var t=this.videoWrapper.getCurrentTime(),n=this.videoWrapper.getDuration(),r=this.videoWrapper.getBuffer(),i=this.videoWrapper.getSeekableRange();
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,t,n,r,i)
            },
        _midRollVideoError:function(){
            this.mb.publish(e.EVENTS.MIDROLL_PLAY_FAILED,arguments)
            },
        _destroy:function(){
            this.videoWrapper.kill(),this.midrollWrapper&&this.midrollWrapper.kill()
            },
        _pageUnloadRequested:function(){
            this.videoWrapper.delayErrorPublishing(),this.midrollWrapper&&this.midrollWrapper.delayErrorPublishing()
            },
        __placeholder:!0
        }),e.registerModule("playback",function(e,t){
        return new r(e,t)
        })
    })(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(r,i){
        if(!e.requiredInEnvironment("cast-playback"))return;
        this.toString=function(){
            return"cast-playback"
            },e.log("CastPlaybackModule loaded!"),this.mb=r,this.id=i,this.willPlayFromBeginning=!0,this.playedAtLeastOnce=!1,this.streamUrl=null,this.mediaPlayerSrcReady=!1,this.currentEmbedCode=null,this.mediaPlayerCreated=!1,this.authToken=null,this.mediaPlayerJS="//www.gstatic.com/cast/sdk/libs/mediaplayer/0.4.0/media_player.js",this.protocol=e.isSSL?"https:":"http:",this.mediaPlayerSrc=this.protocol+this.mediaPlayerJS,this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"cast_playback",t.bind(this._playerWasCreated,this)),this.mb.subscribe(e.EVENTS.PRELOAD_STREAM,"cast_playback",t.bind(this._preloadStream,this)),this.mb.subscribe(e.EVENTS.RELOAD_STREAM,"cast_playback",t.bind(this._reloadStream,this)),this.mb.subscribe(e.EVENTS.PLAY_STREAM,"cast_playback",t.bind(this._playStream,this)),this.mb.subscribe(e.EVENTS.PAUSE_STREAM,"cast_playback",t.bind(this._pauseStream,this)),this.mb.subscribe(e.EVENTS.SEEK_STREAM,"cast_playback",t.bind(this._seek,this)),this.mb.subscribe(e.EVENTS.EMBED_CODE_CHANGED,"cast_playback",t.bind(this._embedCodeChanged,this)),this.mb.subscribe(e.EVENTS.CHANGE_VOLUME,"cast_playback",t.bind(this._changeVolume,this)),this.mb.intercept(e.EVENTS.DESTROY,"cast_playback",t.bind(this._destroy,this)),this.mb.subscribe(e.EVENTS.PLAY_MIDROLL_STREAM,"cast_playback",t.bind(this._playMidRoll,this)),this.mb.subscribe(e.EVENTS.WILL_RESUME_MAIN_VIDEO,"cast_playback",t.bind(this._resumeMainVideo,this)),this.mb.subscribe(e.EVENTS.PAGE_UNLOAD_REQUESTED,"cast_playback",t.bind(this._pageUnloadRequested,this)),this.mb.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,"cast_playback",t.bind(this._onAuthorizationFetched,this)),n.ajax({
            url:this.mediaPlayerSrc,
            type:"GET",
            cache:!0,
            dataType:"script",
            success:t.bind(this._onMediaPlayerSrcReady,this)
            })
        };
        
    t.extend(r.prototype,{
        _toggleMidrollAndMainVideo:function(e){
            this.videoWrapper&&this.videoWrapper.show(e),this.midrollWrapper&&this.midrollWrapper.show(!e)
            },
        _playMidRoll:function(e,t){
            this.videoWrapper.pause(),this._toggleMidrollAndMainVideo(!1),this.midrollWrapper.load(t,!0),this.midrollWrapper.play()
            },
        _midrollPlayed:function(){
            this.mb.publish(e.EVENTS.MIDROLL_STREAM_PLAYED,this.videoWrapper.getCurrentTime())
            },
        _midrollPaused:function(){
            if(this.videoWrapper.isPlaying)return;
            this.mb.publish(e.EVENTS.STREAM_PAUSED,this.midrollWrapper.getCurrentTime())
            },
        _midrollPlayheadChanged:function(){
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this.midrollWrapper.getCurrentTime(),this.midrollWrapper.getDuration(),this.midrollWrapper.getBuffer())
            },
        _resumeMainVideo:function(e){
            this._toggleMidrollAndMainVideo(!0),this.videoWrapper.play(),this.midrollWrapper.pause()
            },
        _embedCodeChanged:function(e,t){
            this.currentEmbedCode=t,this.videoWrapper&&(this.videoWrapper.setEmbedCode(t),this.videoWrapper.pause()),this.castPlayer&&this.castPlayer.unload(),this.mediaPlayerCreated=!1,this.willPlayFromBeginning=!0,this.playedAtLeastOnce=!1
            },
        _playerWasCreated:function(r,i,s){
            this.elementId=i,this.rootElement=n("#"+this.elementId+" > div"),this.params=s,e.log("CastPlaybackModule: _playerWasCreated"),e.attachStyle(t.template(e.get_css("playback"))({
                elementId:this.elementId
                }),this.elementId),this.videoWrapper=e.createVideoElementWrapper(this.rootElement,"video",this.params),this.videoWrapper.on(e.VideoElementWrapper.WILL_PLAY,"cast_playback",t.bind(this._videoWillPlay,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYING,"cast_playback",t.bind(this._videoPlaying,this)),this.videoWrapper.on(e.VideoElementWrapper.PAUSED,"cast_playback",t.bind(this._videoPaused,this)),this.videoWrapper.on(e.VideoElementWrapper.ERROR,"cast_playback",t.bind(this._videoError,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYHEAD_TIME_CHANGED,"cast_playback",t.bind(this._videoPlayheadTimeChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.DURATION_CHANGED,"cast_playback",t.bind(this._videoDurationChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.BUFFERING,"cast_playback",t.bind(this._videoBuffering,this)),this.videoWrapper.on(e.VideoElementWrapper.BUFFERED,"cast_playback",t.bind(this._videoBuffered,this)),this.videoWrapper.on(e.VideoElementWrapper.SEEKED,"cast_playback",t.bind(this._videoSeeked,this)),this.videoWrapper.on(e.VideoElementWrapper.DOWNLOADING,"playback",t.bind(this._videoDownloading,this)),this.videoWrapper.on(e.VideoElementWrapper.VOLUME_CHANGED,"cast_playback",t.bind(this._videoVolumeChanged,this)),this.videoWrapper.on(e.VideoElementWrapper.PLAYED,"cast_playback",t.bind(this._videoPlayed,this)),this.videoWrapper.on(e.VideoElementWrapper.FULL_SCREEN_CHANGED,"cast_playback",t.bind(this._fullScreenChanged,this)),e.supportMidRollAds&&(this.midrollWrapper=e.createVideoElementWrapper(this.rootElement,"midroll",this.params),this.midrollWrapper.on(e.VideoElementWrapper.PLAYED,"cast_playback",t.bind(this._midrollPlayed,this)),this.midrollWrapper.on(e.VideoElementWrapper.PAUSED,"cast_playback",t.bind(this._midrollPaused,this)),this.midrollWrapper.on(e.VideoElementWrapper.PLAYHEAD_TIME_CHANGED,"cast_playback",t.bind(this._midrollPlayheadChanged,this)),this.midrollWrapper.on(e.VideoElementWrapper.ERROR,"cast_playback",t.bind(this._midRollVideoError,this))),this._videoVolumeChanged()
            },
        _playVideoWithReport:function(){
            e.log("playVideoWithReport"),this._toggleMidrollAndMainVideo(!0),this.mediaPlayerSrcReady&&!this.mediaPlayerCreated&&this._initMediaPlayer();
            if(this.mediaPlayerCreated)if(this.willPlayFromBeginning&&!this.playedAtLeastOnce){
                this.authToken&&(this.mediaHost.licenseCustomData="auth_token="+this.authToken);
                var t=0;
                this.castPlayer.load(this.streamingProtocol,t),this.mb.publish(e.EVENTS.WILL_PLAY_FROM_BEGINNING),this.willPlayFromBeginning=!1
                }else this.videoWrapper.play()
                },
        _preloadStream:function(t,n){
            this.streamUrl=n,e.log("preloadStream"),e.log("StreamURL: "+this.streamUrl),this.mediaPlayerSrcReady&&!this.mediaPlayerCreated&&this._initMediaPlayer()
            },
        _initMediaPlayer:function(){
            e.log("Chromecast initMediaPlayer"),this.mediaPlayerCreated=!0,this.videoWrapper._video.autoplay=!0,this.mediaHost=new cast.player.api.Host({
                mediaElement:this.videoWrapper._video,
                url:this.streamUrl
                }),this.mediaHost.onError=t.bind(function(t){
                var n="Unknown Chromecast error: code "+t;
                t===cast.player.api.ErrorCode.MANIFEST?(n="Error loading or parsing the manifest",this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.CHROMECAST.MANIFEST
                    })):t===cast.player.api.ErrorCode.MEDIAKEYS?(n="Error fetching the keys or decrypting the content",this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.CHROMECAST.MEDIAKEYS
                    })):t===cast.player.api.ErrorCode.NETWORK?(n="Network error",this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.CHROMECAST.NETWORK
                    })):t===cast.player.api.ErrorCode.PLAYBACK&&(n="Error related to media playback",this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.CHROMECAST.PLAYBACK
                    })),e.log("Chromecast Host error: "+n)
                },this),this.castPlayer=new cast.player.api.Player(this.mediaHost),this.streamingProtocol=cast.player.api.CreateSmoothStreamingProtocol(this.mediaHost)
            },
        _reloadStream:function(e){
            this.videoWrapper.reload()
            },
        _playStream:function(t,n){
            e.log("playStream"),this._playVideoWithReport()
            },
        _pauseStream:function(t){
            this.mediaPlayerCreated&&(e.log("pauseStream"),this.videoWrapper.pause(),this.midrollWrapper&&this.midrollWrapper.pause())
            },
        _seek:function(t,n){
            this.videoWrapper.getIsActive()?this.videoWrapper.seek(n):this.midrollWrapper&&this.midrollWrapper.getIsActive()?this.midrollWrapper.seek(n):e.log("Trying to seek while video element is not active")
            },
        _changeVolume:function(e,t){
            this.videoWrapper.setVolume(t)
            },
        _videoWillPlay:function(){
            this.mb.publish(e.EVENTS.WILL_PLAY_STREAM,this.videoWrapper.getStreamUrl())
            },
        _videoPlaying:function(){
            this.mb.publish(e.EVENTS.STREAM_PLAYING,this.videoWrapper.getStreamUrl())
            },
        _videoPaused:function(){
            if(this.midrollWrapper&&this.midrollWrapper.isPlaying)return;
            this.mb.publish(e.EVENTS.STREAM_PAUSED,this.videoWrapper.getStreamUrl())
            },
        _videoPlayed:function(){
            this.willPlayFromBeginning=!0,this.playedAtLeastOnce=!0,this.mb.publish(e.EVENTS.STREAM_PLAYED,this.videoWrapper.getStreamUrl())
            },
        _videoError:function(t,n){
            this.mb.publish(e.EVENTS.STREAM_PLAY_FAILED,n)
            },
        _videoBuffering:function(){
            this.mb.publish(e.EVENTS.BUFFERING,this.videoWrapper.getStreamUrl())
            },
        _videoBuffered:function(){
            this.mb.publish(e.EVENTS.BUFFERED,this.videoWrapper.getStreamUrl())
            },
        _videoSeeked:function(){
            this.mb.publish(e.EVENTS.SEEKED)
            },
        _videoDownloading:function(){
            this.mb.publish(e.EVENTS.DOWNLOADING,this.videoWrapper.getCurrentTime(),this.videoWrapper.getDuration(),this.videoWrapper.getBuffer(),this.videoWrapper.getSeekableRange(),this.videoWrapper.getStreamUrl())
            },
        _fullScreenChanged:function(t,n,r){
            this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,n,r)
            },
        _videoVolumeChanged:function(){
            this.mb.publish(e.EVENTS.VOLUME_CHANGED,this.videoWrapper.getVolume())
            },
        _videoPlayheadTimeChanged:function(){
            var t=this.videoWrapper.getCurrentTime(),n=this.videoWrapper.getDuration(),r=this.videoWrapper.getBuffer(),i=this.videoWrapper.getSeekableRange();
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,t,n,r,i)
            },
        _videoDurationChanged:function(){
            var t=this.videoWrapper.getCurrentTime(),n=this.videoWrapper.getDuration(),r=this.videoWrapper.getBuffer(),i=this.videoWrapper.getSeekableRange();
            this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,t,n,r,i)
            },
        _midRollVideoError:function(){
            this.mb.publish(e.EVENTS.MIDROLL_PLAY_FAILED,arguments)
            },
        _destroy:function(){
            this.videoWrapper.kill(),this.midrollWrapper&&this.midrollWrapper.kill()
            },
        _pageUnloadRequested:function(){
            this.videoWrapper.delayErrorPublishing(),this.midrollWrapper&&this.midrollWrapper.delayErrorPublishing()
            },
        _onAuthorizationFetched:function(t,n){
            n.auth_token&&(this.authToken=n.auth_token);
            var r,i=e.HM.safeObject("playbackControl.sasResponse",n,{});
            e.log("authFetched: "+JSON.stringify(i));
            var s=this.currentEmbedCode
            },
        _onMediaPlayerSrcReady:function(){
            e.log("CastPlaybackModule loaded Media Player Library!"),this.mediaPlayerSrcReady=!0,cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG)
            },
        __placeholder:!0
        }),e.registerModule("cast_playback",function(e,t){
        return new r(e,t)
        })
    })(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(n,r){
        if(!e.requiredInEnvironment("osmf-playback"))return;
        this.toString=function(){
            return"osmf-playback"
            },this.mb=n,this.id=r,this.willPlayFromBeginning=!0,this.currentTime=0,this.currentDuration=0,this.mb.addDependent(e.EVENTS.PLAYBACK_READY,"osmf-player-loaded","osmf-playback",function(){}),this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"osmf-playback",t.bind(this._playerWasCreated,this)),this.mb.subscribe(e.EVENTS.PRELOAD_STREAM,"osmf-playback",t.bind(this._preloadStream,this)),this.mb.subscribe(e.EVENTS.PLAY_STREAM,"osmf-playback",t.bind(this._playStream,this)),this.mb.subscribe(e.EVENTS.PAUSE_STREAM,"osmf-playback",t.bind(this._pauseStream,this)),this.mb.subscribe(e.EVENTS.SEEK_STREAM,"osmf-playback",t.bind(this._seek,this)),this.mb.subscribe(e.EVENTS.EMBED_CODE_CHANGED,"osmf-playback",t.bind(this._embedCodeChanged,this)),this.mb.subscribe(e.EVENTS.CHANGE_VOLUME,"osmf-playback",t.bind(this._changeVolume,this)),this.mb.subscribe(e.EVENTS.PLAY_MIDROLL_STREAM,"osmf-playback",t.bind(this._playMidRoll,this)),this.mb.subscribe(e.EVENTS.WILL_RESUME_MAIN_VIDEO,"osmf-playback",t.bind(this._resumeMainVideo,this))
        };
        
    t.extend(r.prototype,{
        _onOsmfPlayerCallback:function(t){
            if(t.match(/osmf\-ready/))this.mb.publish("osmf-player-loaded");
            else if(t.match(/will\-play/))this._videoWillPlay();
            else if(t.match(/playing/))this._videoPlaying();
            else if(t.match(/paused/))this._videoPaused();
            else if(t.match(/playheadUpdate\:(\d+\.?\d*)\:(\d+\.?\d*)/)){
                var n=t.match(/playheadUpdate\:(\d+\.?\d*)\:(\d+\.?\d*)/);
                this.currentTime=parseFloat(n[1]),this.currentDuration=parseFloat(n[2]),this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this.currentTime,this.currentDuration,0,0)
                }
            },
    _playMidRoll:function(e,t){
        this.osmfPlayer.loadAds(t),this.osmfPlayer.playAd()
        },
    _midrollPlayed:function(){
        this.mb.publish(e.EVENTS.MIDROLL_STREAM_PLAYED,this.osmfPlayer.getCurrentTime())
        },
    _midrollPaused:function(){
        this.mb.publish(e.EVENTS.STREAM_PAUSED,this.osmfPlayer.getCurrentTime())
        },
    _midrollPlayheadChanged:function(){
        this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this.osmfPlayer.getCurrentTime(),this.osmfPlayer.getDuration(),this.osmfPlayer.getBuffer())
        },
    _resumeMainVideo:function(e){
        this.osmfPlayer.play()
        },
    _embedCodeChanged:function(e,t){
        this.willPlayFromBeginning=!0
        },
    _playerWasCreated:function(r,i,s){
        this.elementId=i,this.rootElement=n("#"+this.elementId+" > div"),this.params=s,e.attachStyle(t.template(e.get_css("playback"))({
            elementId:this.elementId
            }),this.elementId),this.flashId="OoFlash"+e.getRandomString(),e.publicApi[this.flashId]=t.bind(this._onOsmfPlayerCallback,this);
        var o=e.supportsFlash?e.TEMPLATES.FLASH:e.TEMPLATES.MESSAGE,u=t.template(o)({
            playerId:this.flashId,
            width:"100%",
            height:"100%",
            FLASH_PLAYER_URL:"http://opf.ooyala.com/3rdparty/osmf-html5-emulator_v001.swf",
            cb:"OO."+this.flashId,
            message:e.TEMPLATES.FLASH_INSTALL,
            wmode:"opaque",
            playerBrandingId:e.playerParams.playerBrandingId
            });
        this.rootElement.append(u),n("#"+this.flashId).css({
            left:"0px"
        });
        var a=this.rootElement.find("object.video")[0],f=this.rootElement.find("object.video object")[0];
        e.osmf=this.osmfPlayer=f||a
        },
    _playVideoWithReport:function(){
        this.osmfPlayer.play(),this.willPlayFromBeginning&&this.mb.publish(e.EVENTS.WILL_PLAY_FROM_BEGINNING),this.willPlayFromBeginning=!1
        },
    _preloadStream:function(e,t,n){
        this.osmfPlayer.load(t),n&&this._playVideoWithReport()
        },
    _playStream:function(e,t){
        this.osmfPlayer.load(t),this._playVideoWithReport()
        },
    _pauseStream:function(e){
        this.osmfPlayer.pause()
        },
    _seek:function(e,t){
        this.osmfPlayer.seek(t)
        },
    _changeVolume:function(e,t){
        this.osmfPlayer.setVolume(t)
        },
    _videoWillPlay:function(){
        this.mb.publish(e.EVENTS.WILL_PLAY_STREAM,"")
        },
    _videoPlaying:function(){
        this.mb.publish(e.EVENTS.STREAM_PLAYING,"")
        },
    _videoPaused:function(){
        this.mb.publish(e.EVENTS.STREAM_PAUSED,"")
        },
    _videoPlayed:function(){
        this.willPlayFromBeginning=!0,this.mb.publish(e.EVENTS.STREAM_PLAYED,this.videoWrapper.getStreamUrl())
        },
    _videoError:function(){
        this.mb.publish(e.EVENTS.STREAM_PLAY_FAILED,arguments)
        },
    _videoBuffering:function(){
        this.mb.publish(e.EVENTS.BUFFERING,this.videoWrapper.getStreamUrl())
        },
    _fullScreenChanged:function(t,n){
        this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,n)
        },
    _videoVolumeChanged:function(){
        this.mb.publish(e.EVENTS.VOLUME_CHANGED,this.osmfPlayer.getVolume())
        },
    _videoPlayheadTimeChanged:function(){
        var t=this.osmfPlayer.getCurrentTime(),n=this.osmfPlayer.getDuration(),r=this.osmfPlayer.getBuffer(),i=this.osmfPlayer.getSeekableRange();
        this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,t,n,r,i)
        },
    _midRollVideoError:function(){
        this.mb.publish(e.EVENTS.MIDROLL_PLAY_FAILED,arguments)
        },
    __placeholder:!0
    }),e.registerModule("osmf-playback",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(n,r){
        if(!e.requiredInEnvironment("redirect-playback"))return;
        this.mb=n,this.id=r,this.mb.subscribe(e.EVENTS.PLAY_STREAM,"redirect-playback",t.bind(this._playStream,this))
        };
        
    t.extend(r.prototype,{
        _playStream:function(e,t){
            window.location=t
            },
        __placeholder:!0
        }),e.registerModule("redirect_playback",function(e,t){
        return new r(e,t)
        })
    })(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(n,r){
        if(!e.requiredInEnvironment("flash-playback"))return;
        e.d("Using Flash Playback"),this.mb=n,this.id=r,this.adobeToken=null,this.playerEmbedded=!1,this.playbackReady=!1,this.queuedPlaybackReady=!1,this.embedCodeChanged=!1,this.sasResponse={},this.playerXml={},this.playerXmlRequest=null,this.areFlashParamsSet=!1,this.enableChannels=!1,this.debugHost="",this.o0jsdebug="",this.isTwitter="",this._playingAd=!1,this.QUERY_STRING_PARAM_WHITELIST=["embedCode","adSetCode","autoplay","loop","playerBrandingId","devModuleCategory","devModuleURL","devModuleData","preload"],this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"flash_playback",t.bind(this._playerWasCreated,this)),this.mb.subscribe(e.EVENTS.SET_EMBED_CODE,"flash_playback",t.bind(this._setEmbedCode,this)),this.mb.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,"flash_playback",t.bind(this._onAuthorizationFetched,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_PLAYER_XML,"flash_playback",t.bind(this._onWillFetchPlayerXml,this)),this.mb.subscribe(e.EVENTS.PLAY,"flash_playback",t.bind(this._play,this)),this.mb.subscribe(e.EVENTS.INITIAL_PLAY,"flash_playback",t.bind(this._play,this)),this.mb.subscribe(e.EVENTS.PAUSE,"flash_playback",t.bind(this._pause,this)),this.mb.subscribe(e.EVENTS.SEEK,"flash_playback",t.bind(this._seek,this)),this.mb.subscribe(e.EVENTS.CHANGE_VOLUME,"flash_playback",t.bind(this._changeVolume,this)),this.mb.subscribe(e.EVENTS.ADOBE_PASS_WAITING_FOR_TOKEN,"flash_playback",t.bind(this._adobeWaitingForToken,this)),this.mb.subscribe(e.EVENTS.ADOBE_PASS_TOKEN_FETCHED,"flash_playback",t.bind(this._adobeTokenFetched,this)),this.mb.subscribe(e.EVENTS.ADOBE_PASS_AUTH_STATUS,"flash_playback",t.bind(this._adobeAuthStatus,this)),this.mb.subscribe(e.EVENTS.ERROR,"flash_playback",t.bind(this._onError,this)),this.mb.subscribe(e.EVENTS.SKIP_AD,"flash_playback",t.bind(this._skipAd,this)),this.mb.subscribe(e.EVENTS.SET_TARGET_BITRATE,"flash_playback",t.bind(this._setTargetBitrate,this)),this.mb.subscribe(e.EVENTS.SET_TARGET_BITRATE_QUALITY,"flash_playback",t.bind(this._setTargetBitrateQuality,this)),this.mb.subscribe(e.EVENTS.SET_CLOSED_CAPTIONS_LANGUAGE,"flash_playback",t.bind(this._setClosedCaptionsLanguage,this)),this.mb.subscribe(e.EVENTS.FETCH_STYLE,"flash_playback",t.bind(this._fetchStyle,this)),this.mb.subscribe(e.EVENTS.SET_STYLE,"flash_playback",t.bind(this._setStyle,this)),this.mb.subscribe(e.EVENTS.INSERT_CUE_POINT,"flash_playback",t.bind(this._insertCuePoint,this)),this.mb.subscribe(e.EVENTS.TOGGLE_SHARE_PANEL,"flash_playback",t.bind(this._toggleSharePanel,this)),this.mb.subscribe(e.EVENTS.TOGGLE_INFO_PANEL,"flash_playback",t.bind(this._toggleInfoPanel,this)),e.chromeExtensionEnabled&&window.postMessage({
            type:"OO_CLEAR_LOGS",
            text:""
        },"*")
        };
        
    t.extend(r.prototype,{
        _getDuration:function(){
            return this._isStandaloneAd||this._playingAd?this._adDuration:this._duration
            },
        _onAuthorizationFetched:function(t,n){
            e.playerParams.flash_performance&&(this.sasResponse[this.embedCode]=n,this._setFlashParams())
            },
        _onWillFetchPlayerXml:function(r,i){
            e.playerParams.flash_performance&&(this.playerXmlRequest=n.ajax({
                url:e.URLS.PLAYER_XML(i),
                type:"GET",
                dataType:"text",
                cache:!1,
                success:t.bind(this._onPlayerXmlFetched,this)
                }))
            },
        _onPlayerXmlFetched:function(t){
            e.playerParams.flash_performance&&(this.mb.publish(e.EVENTS.PLAYER_XML_FETCHED),this.playerXml[this.embedCode]=t,this._setFlashParams())
            },
        _createFlashElement:function(r){
            this.flashId="OoFlash"+e.getRandomString(),e.publicApi[this.flashId]=t.bind(this._onFlashCallBack,this);
            var i="";
            this.params.flashParams=this.params.flashParams||{},delete this.params.flashParams.autoplay,e.allowAutoPlay&&(this.params.autoPlay==="true"||this.params.autoPlay===!0||this.params.autoplay==="true"||this.params.autoplay===!0)&&(this.params.flashParams.autoplay="1"),delete this.params.flashParams.loop,e.allowLoop&&(this.params.loop==="true"||this.params.loop===!0)&&(this.params.flashParams.loop="1");
            var s=e.URLS.PLAYER_SWF({
                server:e.playerParams.flash_player_url||e.SERVER.API+"/player.swf",
                player:e.playerParams.playerBrandingId,
                embedType:e.playerParams.flash_performance&&this.enableChannels===!1?"mjolnir":"nuplayer",
                embedStyle:"mjolnir",
                locale:this.params.locale?"&locale="+this.params.locale:"",
                params:i
            });
            e.playerParams.flash_version&&(s+="&flash_version="+e.playerParams.flash_version),e.playerParams.use_asp_flash_route&&(s=s.replace("player.swf","asp/player.swf"));
            var o=(e.playerParams.namespace||"OO")+"."+this.flashId,u={
                playerBrandingId:e.playerParams.playerBrandingId,
                embedType:e.playerParams.flash_performance&&this.enableChannels===!1?"mjolnir":"nuplayer",
                embedStyle:"mjolnir",
                me:this.flashId,
                callback:o,
                width:"100%",
                height:"100%"
            };
            
            t.extend(u,this.params.flashParams),!this.params.layout||(u.layout=this.params.layout),this.enableDiagnostics&&(u.diagnosticCallback=o),this.debugHost&&(u.debugHost=this.debugHost),this.isTwitter&&(u.isTwitter=this.isTwitter),this.adSetCode&&(u.adSetCode=this.adSetCode),this.params.preload!==undefined&&(u.preload=this.params.preload),u.flash_version=e.playerParams.flash_version||"",u.v3_version=e.playerParams.v3_version||"",u.o0jsdebug=u.o0jsdebug||this.o0jsdebug,this.flashVars=u;
            var a=e.isIE&&!e.isIE11Plus?e.TEMPLATES.FLASH_IE:e.TEMPLATES.FLASH,f=e.supportsFlash?a:e.TEMPLATES.MESSAGE,l=t.template(f)({
                playerId:this.flashId,
                swfUrl:s,
                flashVars:n.param(u),
                wmode:this.params.wmode||"direct",
                message:e.TEMPLATES.FLASH_INSTALL,
                __end_marker:!0
                });
            r.append(l),n("#"+this.flashId).css({
                left:"0px"
            });
            var c=r.find("object.video")[0],h=r.find("object.video object")[0];
            return h||c
            },
        _onFlashCallBack:function(n,r,i){
            if(n!==this.flashId)return;
            switch(r){
                case"playerEmbedded":
                    this.mb.publish(e.EVENTS.PLAYER_EMBEDDED),this.playerEmbedded=!0,this._setFlashParams();
                    break;
                case"totalTimeChanged":
                    this._duration=i.totalTime,this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this._playheadTime,this._getDuration(),this.videoWrapper.getBufferLength());
                    break;
                case"playheadTimeChanged":
                    this._playheadTime=i.playheadTime,this.mb.publish(e.EVENTS.PLAYHEAD_TIME_CHANGED,this._playheadTime,this._getDuration(),this.videoWrapper.getBufferLength());
                    break;
                case"embedCodeChanged":case"currentItemEmbedCodeChanged":
                    this.mb.publish(e.EVENTS.EMBED_CODE_CHANGED,i),this.mb.publish(e.EVENTS.CONTENT_TREE_FETCHED,i),this.embedCodeChanged=!0,this.queuedPlaybackReady&&(this.mb.publish(e.EVENTS.PLAYBACK_READY),this.queuedPlaybackReady=!1);
                    break;
                case"fullscreenChanged":
                    this.mb.publish(e.EVENTS.FULLSCREEN_CHANGED,i.state=="fullScreen");
                    break;
                case"closedCaptionsTextReady":
                    this._reportClosedCaptions();
                    break;
                case"stateChanged":
                    switch(i.state){
                    case"error":
                        this.mb.publish(e.EVENTS.ERROR,{
                        code:i.errorCode,
                        source:"flash"
                    });
                    break;
                    case"playing":
                        this.mb.publish(e.EVENTS.PLAYING),this._reportBitrates();
                        break;
                    case"paused":
                        this.mb.publish(e.EVENTS.PAUSED);
                        break;
                    case"buffering":
                        this.mb.publish(e.EVENTS.BUFFERING);
                        break;
                    default:
                        e.log("CALLBACK",arguments)
                        }
                        break;
                case"apiReady":
                    (this.embedCode&&this.embedCode===this.videoWrapper.getEmbedCode()||e.CONSTANTS.STANDALONE_AD_HOLDER===this.videoWrapper.getEmbedCode())&&!this.playbackReady&&(this.embedCodeChanged?this.mb.publish(e.EVENTS.PLAYBACK_READY):this.queuedPlaybackReady=!0,this.playbackReady=!0);
                    break;
                case"playComplete":
                    this.mb.publish(e.EVENTS.PLAYED);
                    break;
                case"volumeChanged":
                    this.mb.publish(e.EVENTS.VOLUME_CHANGED,i.volume);
                    break;
                case"companionAdsReady":
                    this.mb.publish(e.EVENTS.WILL_SHOW_COMPANION_ADS,{
                    ads:i.companionAds
                    });
                break;
                case"adStarted":
                    this._adDuration=i.adDuration/1e3,this._playingAd=!0;
                    var s={
                    duration:this._adDuration,
                    type:"flashad",
                    format:i.format,
                    source:i.source
                    };
                    
                this.mb.publish(e.EVENTS.WILL_PLAY_ADS,s);
                    break;
                case"adCompleted":
                    this._playingAd=!1,this.mb.publish(e.EVENTS.ADS_PLAYED);
                    break;
                case"singleAdStarted":
                    var o={
                    duration:i.adDuration/1e3,
                    adId:i.adId,
                    creativeId:i.creativeId,
                    type:"flashad",
                    format:i.format,
                    source:i.source
                    };
                    
                this.mb.publish(e.EVENTS.WILL_PLAY_SINGLE_AD,o);
                    break;
                case"singleAdCompleted":
                    this.mb.publish(e.EVENTS.SINGLE_AD_PLAYED);
                    break;
                case"adError":
                    this._playingAd=!1,this.mb.publish(e.EVENTS.ADS_ERROR);
                    break;
                case"seeked":
                    this.mb.publish(e.EVENTS.SCRUBBED);
                    break;
                case"targetBitrateChanged":
                    this._reportBitrates();
                    break;
                case"adClicked":
                    this.mb.publish(e.EVENTS.ADS_CLICKED);
                    break;
                case"getOoyalaStorageItem":
                    e.ooyalaStorage.getItem(i.key,t.bind(function(e){
                    this._fire("getOoyalaStorageItemResponse",[i.key,e])
                    },this));
                break;
                case"setOoyalaStorageItem":
                    e.ooyalaStorage.setItem(i.key,i.value,t.bind(function(e){
                    this._fire("setOoyalaStorageItemResponse",[i.key,e])
                    },this));
                break;
                case"removeOoyalaStorageItem":
                    e.ooyalaStorage.removeItem(i.key,t.bind(function(e){
                    this._fire("removeOoyalaStorageItemResponse",[i.key,e])
                    },this));
                break;
                case"sharePanelClicked":
                    this.mb.publish(e.EVENTS.SHARE_PANEL_CLICKED);
                    break;
                case"infoPanelClicked":
                    this.mb.publish(e.EVENTS.INFO_PANEL_CLICKED);
                    break;
                case"authTokenChanged":
                    this.mb.publish(e.EVENTS.AUTH_TOKEN_CHANGED,i);
                    break;
                case"startContentDownload":
                    this.mb.publish(e.EVENTS.DOWNLOADING,this._playheadTime,this._getDuration(),this.videoWrapper.getBufferLength(),null,i.streamURL);
                    break;
                case"bitrateChanged":
                    var u={
                    videoBitrate:i.videoBitrate
                    };
                    
                this.mb.publish(e.EVENTS.BITRATE_CHANGED,u);
                    break;
                case"subscribeToMessage":
                    this.mb.subscribe(i.messageName,"flash_playback",t.bind(function(){
                    this.videoWrapper[i.callback]()
                    },this));
                break;
                case"loadComplete":case"activePanelChanged":case"metadataReady":case"recommendedContentReady":case"relatedMediaReady":case"playerResize":case"attemptFullScreenChange":case"videoShared":
                    e.log("Ignoring flash callback",r,i);
                    break;
                default:
                    e.log("Propagating flash callback",r,i),this.mb.publish(r,i)
                    }
                    this.enableDiagnostics&&this.mb.publish("ASP"+r,i)
            },
        _fire:function(e,t){
            this.playerEmbedded&&this.videoWrapper.fire({
                type:e,
                params:t
            })
            },
        _notifyTokenReadyForPlayer:function(){
            this.waitingForToken&&this.adobeToken&&(this.waitingForToken=!1,this._fire("setEmbedToken",[this.adobeToken]))
            },
        _adobeWaitingForToken:function(e){
            this.waitingForToken=!0,this._notifyTokenReadyForPlayer()
            },
        _adobeTokenFetched:function(t,n){
            e.log("setEmbedToken",n),this.adobeToken=n,this._notifyTokenReadyForPlayer()
            },
        _adobeAuthStatus:function(e,t,n){
            t||(this.adobeToken=null),this._fire("setAuthenticationStatus",[t,n])
            },
        _onError:function(t,n,r){
            n==e.ERROR.ADOBE_PASS_TOKEN&&(this.adobeToken=null,this._fire("tokenRequestFailed",[this.embedCode,r]))
            },
        _setFlashParams:function(){
            if(this.videoWrapper&&this.playerEmbedded&&!this.areFlashParamsSet){
                if(e.playerParams.flash_performance)if(!this.playerXml[this.embedCode]||!this.sasResponse[this.embedCode])return;
                var n=this.params||{};
                
                this.adobeToken?n.authorization={
                    embedToken:this.adobeToken
                    }:t.isEmpty(this.embedToken)||(n.authorization={
                    embedToken:this.embedToken
                    }),t.extend(n,n.flashParams),delete n.flashParams,this.videoWrapper.setModuleParams(n);
                var r=t.extend({
                    playerBrandingId:e.playerParams.playerBrandingId
                    },this.options);
                this.queryStringParams=t.pick(r,this.QUERY_STRING_PARAM_WHITELIST),this.videoWrapper.setQueryStringParameters(t.extend(this.queryStringParams,this.flashVars||{})),e.playerParams.flash_performance&&(this.videoWrapper.setSasResponse({
                    embedCode:this.embedCode,
                    response:this.sasResponse[this.embedCode]
                    }),this.videoWrapper.setPlayerXml(this.playerXml[this.embedCode])),this.areFlashParamsSet=!0
                }
            },
    _setEmbedCode:function(t,n,r){
        if(n===e.CONSTANTS.STANDALONE_AD_HOLDER){
            this._isStandaloneAd=!0;
            return
        }
        this._isStandaloneAd=!1,this.playbackReady=!1,this.queuedPlaybackReady=!1,this.embedCodeChanged=!1,e.playerParams.flash_performance&&this.playerXmlRequest&&(this.playerXmlRequest.abort(),this.playerXmlRequest=null),this.areFlashParamsSet=!1,this.embedCode=n,this.options=r||{},this.options.embedCode=n,this.embedToken=this.options.embedToken||this.embedToken||this.adobeToken,this.flashVars&&(this.flashVars.adSetCode=this.options.adSetCode||this.flashVars.adSetCode||""),this._setFlashParams()
        },
    _playerWasCreated:function(t,r,i){
        this.elementId=r,this.rootElement=n("#"+this.elementId+">div"),this.params=i,this.enableDiagnostics=i.enableDiagnostics||!1,this.enableChannels=(e.playerParams.enableChannels==="true"?!0:!1)||(this.params.enableChannels==="true"?!0:!1),this.debugHost=e.playerParams.debugHost||this.params.debugHost||this.debugHost;
        var s=e.chromeExtensionEnabled?(e.playerParams.namespace||"OO")+".Player.flashDebugCallback":null;
        this.o0jsdebug=e.playerParams.o0jsdebug||this.params.o0jsdebug||s,this.isTwitter=e.playerParams.isTwitter||this.params.isTwitter||this.isTwitter,this.embedToken=i?i.embedToken:undefined,this.adSetCode=i?i.adSetCode:undefined,this.videoWrapper=this._createFlashElement(this.rootElement),e.supportsFlash||this.mb.publish(e.EVENTS.ERROR,{
            source:"flash",
            code:e.ERROR.UNPLAYABLE_CONTENT
            })
        },
    _play:function(t,n){
        this.videoWrapper.playMovie(),this.mb.publish(e.EVENTS.VOLUME_CHANGED,this.videoWrapper.getVolume())
        },
    _pause:function(e){
        this.videoWrapper.pauseMovie()
        },
    _toggleSharePanel:function(e){
        this.videoWrapper.toggleSharePanel()
        },
    _toggleInfoPanel:function(e){
        this.videoWrapper.toggleInfoPanel()
        },
    _seek:function(e,t){
        this.videoWrapper.seek(t)
        },
    _changeVolume:function(e,t){
        this.videoWrapper.setVolume(t)
        },
    _skipAd:function(){
        this.videoWrapper.skipAd()
        },
    _reportBitrates:function(){
        this.mb.publish(e.EVENTS.BITRATE_INFO_AVAILABLE,{
            bitrateQualities:this.videoWrapper.getBitrateQualitiesAvailable(),
            bitrates:this.videoWrapper.getBitratesAvailable(),
            targetBitrateQuality:this.videoWrapper.getTargetBitrateQuality(),
            targetBitrate:this.videoWrapper.getTargetBitrate()
            })
        },
    _setTargetBitrate:function(e,t){
        this.videoWrapper.setTargetBitrate(t)
        },
    _setTargetBitrateQuality:function(e,t){
        this.videoWrapper.setTargetBitrateQuality(t)
        },
    _setClosedCaptionsLanguage:function(e,t){
        this.videoWrapper.setClosedCaptionsLanguage(t)
        },
    _reportClosedCaptions:function(){
        try{
            this.mb.publish(e.EVENTS.CLOSED_CAPTIONS_INFO_AVAILABLE,this.videoWrapper.getCurrentItemClosedCaptionsLanguages())
            }catch(t){}
    },
    _fetchStyle:function(){
        this.mb.publish(e.EVENTS.STYLE_FETCHED,this.videoWrapper.getStyles())
        },
    _setStyle:function(e,t){
        this.videoWrapper.setStyles(t)
        },
    _insertCuePoint:function(e,t,n,r){
        this.videoWrapper.insertCuePoint(t,n||0,r||0)
        },
    __placeholder:!0
    }),e.registerModule("flash_playback",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(t,n,r){
        if(e.playerParams.platform==="flash-adset")return;
        this.mb=t,this.id=n,this.params=r||{},this.contentTree={},this.metadata={},this.sasResponse={},this.authToken=e.localStorage.getItem("oo_auth_token"),this._aborting=!1,this._contentAjax=null,this._metadataAjax=null,this._sasAjax=null,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"Api",
            target:this,
            events:[{
                name:e.EVENTS.SET_EMBED_CODE,
                from:"*",
                to:"Init"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"Init",
                to:"WaitingForAPIResponse"
            },{
                name:e.EVENTS.WILL_FETCH_CONTENT_TREE,
                from:"WaitingForAPIResponse"
            },{
                name:e.EVENTS.WILL_FETCH_METADATA,
                from:"WaitingForAPIResponse"
            },{
                name:e.EVENTS.WILL_FETCH_AUTHORIZATION,
                from:"WaitingForAPIResponse"
            },{
                name:e.EVENTS.WILL_FETCH_AD_AUTHORIZATION,
                from:["WaitingForAPIResponse","Init"]
                },{
                name:e.EVENTS.PLAYBACK_READY,
                from:"WaitingForAPIResponse",
                to:"Init"
            }]
            })
        };
        
    t.extend(r.prototype,{
        onSetEmbedCode:function(t,n,r){
            this.rootEmbedCode=n,this.adSetCode=r?r.adSetCode:undefined,this.embedToken=r&&r.embedToken||this.embedToken,this.mb.publish(e.EVENTS.EMBED_CODE_CHANGED,n,r)
            },
        onEmbedCodeChanged:function(n,r){
            this.currentEmbedCode=r,this._abort(this._contentAjax),this._abort(this._metadataAjax),this._abort(this._sasAjax);
            var i={
                embedCode:this.currentEmbedCode,
                pcode:e.playerParams.pcode||"unknown",
                playerBrandingId:e.playerParams.playerBrandingId||"unknown",
                params:{}
        };
        
        t.isEmpty(this.adSetCode)||t.extend(i.params,{
            adSetCode:this.adSetCode
            }),t.isEmpty(this.embedToken)||t.extend(i.params,{
            embedToken:this.embedToken
            });
        var s=t.extend({},i,{
            server:e.SERVER.API
            }),o=t.extend({},i,{
            server:e.SERVER.AUTH
            });
        this.mb.publish(e.EVENTS.WILL_FETCH_METADATA,s);
        if(e.requiredInEnvironment("html5-playback")||e.requiredInEnvironment("cast-playback")||e.playerParams.flash_performance)this.mb.publish(e.EVENTS.WILL_FETCH_PLAYER_XML,s),this.mb.publish(e.EVENTS.WILL_FETCH_CONTENT_TREE,s),this.mb.publish(e.EVENTS.WILL_FETCH_AUTHORIZATION,o)
            },
    onWillFetchContentTree:function(r,i){
        typeof this.contentTree[this.currentEmbedCode]!="undefined"?this.mb.publish(e.EVENTS.CONTENT_TREE_FETCHED,this.contentTree[this.currentEmbedCode]):this._contentAjax=n.ajax({
            url:e.URLS.CONTENT_TREE(i)+"?"+n.param(i.params),
            type:"GET",
            dataType:"json",
            crossDomain:!0,
            cache:!1,
            success:t.bind(this._onContentTreeFetched,this),
            error:t.bind(this._onApiError,this)
            })
        },
    _onContentTreeFetched:function(n){
        var r,i=e.HM.safeObject("playbackControl.contentTree",n,{});
        this._contentAjax=null,i.errors&&i.errors.code==0&&t.each(i.content_tree,t.bind(function(e,t){
            this.contentTree[t]=i.content_tree[t]
            },this));
        var s=["Video","VideoAd","LiveStream","Channel","MultiChannel"];
        if(this.contentTree[this.currentEmbedCode]){
            var o=i.content_tree[this.currentEmbedCode].hostedAtURL;
            if(o==""||o==null)i.content_tree[this.currentEmbedCode].hostedAtURL=document.URL;
            var u=s.indexOf(this.contentTree[this.currentEmbedCode].content_type)>=0;
            u||e.playerParams.flash_performance?this.mb.publish(e.EVENTS.CONTENT_TREE_FETCHED,this.contentTree[this.currentEmbedCode],this.currentEmbedCode):this.mb.publish(e.EVENTS.ERROR,{
                code:e.ERROR.API.CONTENT_TREE
                })
            }else this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.UNPLAYABLE_CONTENT
            })
        },
    onWillFetchMetadata:function(r,i){
        typeof this.metadata[this.currentEmbedCode]!="undefined"?this.mb.publish(e.EVENTS.METADATA_FETCHED,this.metadata[this.currentEmbedCode]):this._metadataAjax=n.ajax({
            url:e.URLS.METADATA(i)+"&"+n.param(i.params),
            type:"GET",
            dataType:"json",
            crossDomain:!0,
            cache:!1,
            success:t.bind(this._onMetadataFetched,this),
            error:t.bind(this._onApiError,this)
            })
        },
    _onMetadataFetched:function(n){
        this.metadata=this.metadata||{};
        
        var r=e.HM.safeObject("api.metadata",n,{});
        this._metadataAjax=null,r.errors&&r.errors.code==0&&t.each(r.metadata,t.bind(function(e,n){
            this.metadata[n]=r.metadata[n],this.metadata[n].modules=this.metadata[n].modules||{},this.metadata[n].modules=t.extend(this.metadata[n].modules,this.params.modules||{})
            },this)),this.mb.publish(e.EVENTS.METADATA_FETCHED,this.metadata[this.currentEmbedCode]||{}),r.errors&&r.errors.player_movie_mismatch&&typeof window.console!="undefined"&&typeof window.console.log=="function"&&console.log("WARNING: Player and movie providers do not match")
        },
    onWillFetchAuthorization:function(n,r){
        this.sasResponse[this.currentEmbedCode]&&this.sasResponse[this.currentEmbedCode].code==0?this.mb.publish(e.EVENTS.AUTHORIZATION_FETCHED,this.sasResponse[this.currentEmbedCode]):this._sendSasRequest(r,t.bind(this._onAuthorizationFetched,this),t.bind(this._onApiError,this))
        },
    _onAuthorizationFetched:function(n){
        var r,i;
        this._sasAjax=null;
        if(e.requiredInEnvironment("flash-playback"))this.sasResponse[this.currentEmbedCode]=n,r=n.authorization_data[this.currentEmbedCode].code;
        else{
            var s=e.HM.safeObject("playbackControl.sasResponse",n,{});
            s.auth_token?(e.localStorage.setItem("oo_auth_token",s.auth_token),this.authToken=s.auth_token):(e.localStorage.removeItem("oo_auth_token"),this.authToken=null),t.each(s.authorization_data,t.bind(function(e,t){
                this.sasResponse[t]=s.authorization_data[t],s.debug_data&&(this.sasResponse[t].debug_data=s.debug_data),s.user_info&&(this.sasResponse[t].user_info=s.user_info),s.auth_token&&(this.sasResponse[t].auth_token=s.auth_token),s.heartbeat_data&&(this.sasResponse[t].heartbeat_data=s.heartbeat_data)
                },this)),r=this.sasResponse[this.currentEmbedCode].code
            }
            if(r==0||e.requiredInEnvironment("flash-playback")){
            this.mb.publish(e.EVENTS.AUTHORIZATION_FETCHED,this.sasResponse[this.currentEmbedCode]);
            return
        }
        if(!t.isString(r)){
            this.mb.publish(e.EVENTS.ERROR,{
                code:e.ERROR.API.SAS.GENERIC
                });
            return
        }
        i=r.split(","),t.contains(i,"2")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.DOMAIN
            }):t.contains(i,"3")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.GEO
            }):t.contains(i,"4")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.FUTURE
            }):t.contains(i,"5")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.PAST
            }):t.contains(i,"13")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.DEVICE
            }):t.contains(i,"18")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.CONCURRENT_STREAMS
            }):t.contains(i,"24")?this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.PROXY
            }):this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.SAS.GENERIC
            })
        },
    onWillFetchAdAuthorization:function(e,n){
        this._sendSasRequest(n,t.bind(this._onAdAuthorizationFetched,this))
        },
    _onAdAuthorizationFetched:function(n){
        var r=e.HM.safeObject("playbackControl.sasResponse",n,{}),i={};
        
        t.each(r.authorization_data,t.bind(function(e,t){
            i[t]=r.authorization_data[t]
            },this)),this.mb.publish(e.EVENTS.AD_AUTHORIZATION_FETCHED,i)
        },
    _sendSasRequest:function(r,i,s){
        var o=t.reduce(e.supportedVideoTypes,function(e,t,n){
            return t&&e.push(n),e
            },[]),u=e.supportedVideoProfiles,a=e.device;
        n.extend(r.params,{
            device:a,
            domain:e.docDomain,
            supportedFormats:o.join(",")
            }),u&&n.extend(r.params,{
            profiles:u
        }),this.authToken&&n.extend(r.params,{
            auth_token:this.authToken
            }),this._sasAjax=n.ajax({
            url:e.URLS.SAS(r)+"?"+n.param(r.params),
            type:"GET",
            dataType:"json",
            crossDomain:!0,
            cache:!1,
            success:i,
            error:s
        })
        },
    _abort:function(e){
        if(!e)return;
        this._aborting=!0,e.abort(),this._aborting=!1
        },
    _onApiError:function(t,n,r){
        if(this._aborting)return;
        e.d(r,n,t),this.mb.publish(e.EVENTS.ERROR,{
            code:e.ERROR.API.NETWORK,
            xhrStatus:n
        })
        },
    __placeholder:!0
    }),e.registerModule("api",function(e,t,n){
    return new r(e,t,n)
    })
})(OO,OO._,OO.$);
OO.plugin("Channels",function(e,t,n,r){
    var i=function(t,n){
        this.id=n,this.mb=t,this.channel_tree=null,this.channel_pos=-1,this.replay=!1,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"Channels",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"*"
            }]
            })
        };
        
    return t.extend(i.prototype,{
        onPlayerCreated:function(n,r,i){
            this.enableChannels=i.enableChannels||e.playerParams.enableChannels||!1,this.mb.intercept(e.EVENTS.CONTENT_TREE_FETCHED,"channels",t.bind(this._checkTreeForChannel,this))
            },
        _checkTreeForChannel:function(n,r){
            var i=["Channel","MultiChannel"];
            if(r&&(i.indexOf(r.content_type)>=0||r.lineup)){
                if(this.enableChannels){
                    if(e.requiredInEnvironment("html5-playback")||e.requiredInEnvironment("cast-playback")){
                        if(!r.children)return r.content_type=="Channel"?this.mb.publish(e.EVENTS.ERROR,{
                            code:e.ERROR.EMPTY_CHANNEL
                            }):this.mb.publish(e.EVENTS.ERROR,{
                            code:e.ERROR.EMPTY_CHANNEL_SET
                            }),!1;
                        this.channel_tree=r,this.channel_pos=0,this.mb.subscribe(e.EVENTS.PLAYED,"channels",t.bind(this.onPlayed,this)),this.mb.subscribe(e.EVENTS.PLAYBACK_READY,"channels",t.bind(this.onPlaybackReady,this)),this.mb.publish(e.EVENTS.SET_EMBED_CODE,r.children[0].embed_code)
                        }
                        return!1
                    }
                    return this.mb.publish(e.EVENTS.ERROR,{
                    code:e.ERROR.CHANNEL_CONTENT
                    }),!1
                }
                return[r]
            },
        onPlayed:function(t){
            this.channel_pos++,this.channel_tree.children[this.channel_pos]?this.mb.publish(e.EVENTS.SET_EMBED_CODE,this.channel_tree.children[this.channel_pos].embed_code):(this.channel_pos=0,this.mb.publish(e.EVENTS.SET_EMBED_CODE,this.channel_tree.children[0].embed_code))
            },
        onPlaybackReady:function(t){
            this.channel_pos>0&&this.mb.publish(e.EVENTS.PLAY)
            }
        }),i
});
OO.plugin("ExternalId",function(e,t,n,r){
    var i=function(n,r){
        this.id=r,this.mb=n,this.mb.intercept(e.EVENTS.SET_EMBED_CODE,"ExternalId",t.bind(this._checkExternalId,this))
        };
        
    return t.extend(i.prototype,{
        _checkExternalId:function(t,n,r){
            var i=n.match("^extId:(.*)");
            return i&&i[1]?(this.externalId=i[1],this.options=r,this._fetchExternalId({
                externalId:this.externalId,
                pcode:e.playerParams.pcode||"1kNG061cgaoolOncv54OAO1ceO-I",
                server:e.SERVER.API
                }),!1):[n,r]
            },
        _fetchExternalId:function(r){
            this._contentAjax=n.ajax({
                url:e.URLS.EXTERNAL_ID(r),
                type:"GET",
                dataType:"json",
                crossDomain:!0,
                cache:!1,
                success:t.bind(this._onExternalIdFetched,this),
                error:t.bind(this._onExternalIdError,this)
                })
            },
        _onExternalIdFetched:function(n){
            var r=null,i=e.HM.safeObject("playbackControl.contentTree",n,{});
            i.errors&&i.errors.code==0&&t.each(i.content_tree,t.bind(function(e,t){
                e.external_id===this.externalId&&(r=t)
                },this)),t.extend(this.options,{
                originalId:this.externalId
                }),r?this.mb.publish(e.EVENTS.SET_EMBED_CODE,r,this.options):this.mb.publish(e.EVENTS.ERROR,{
                code:e.ERROR.INVALID_EXTERNAL_ID
                })
            },
        _onExternalIdError:function(t){
            this.mb.publish(e.EVENTS.ERROR,{
                code:e.ERROR.INVALID_EXTERNAL_ID
                })
            }
        }),i
});
(function(e,t,n){
    var r=function(n,r){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback"))return;
        this.mb=n,this.id=r,this.authToken=null,this.heartbeatInterval=300,this.timer=null,this.retries=3,this.AUTH_HEARTBEAT_URL=t.template("<%=server%>/player_api/v1/auth_heartbeat/pcode/<%=pcode%>/auth_token/<%=authToken%>"),this.mb.subscribe(e.EVENTS.EMBED_CODE_CHANGED,"auth_heartbeat",t.bind(this._onEmbedCodeChanged,this)),this.mb.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,"auth_heartbeat",t.bind(this._onAuthorizationFetched,this))
        };
        
    t.extend(r.prototype,{
        _onEmbedCodeChanged:function(e,t){
            this.timer&&clearInterval(this.timer),this.ajax&&(this.ajax.error=null,this.ajax.abort(),this.ajax=null),this.retries=3
            },
        _onAuthorizationFetched:function(e,n){
            n.heartbeat_data&&n.heartbeat_data.heartbeat_interval&&(this.heartbeatInterval=n.heartbeat_data.heartbeat_interval),n.auth_token&&(this.authToken=n.auth_token),n.require_heartbeat===!0&&(this.timer=setInterval(t.bind(this._onTimerTick,this),this.heartbeatInterval*1e3),this._onTimerTick())
            },
        _onTimerTick:function(){
            this.ajax=n.ajax({
                url:this.AUTH_HEARTBEAT_URL({
                    server:e.SERVER.AUTH,
                    pcode:e.playerParams.pcode||"unknown",
                    authToken:this.authToken||""
                    }),
                type:"GET",
                dataType:"json",
                crossDomain:!0,
                cache:!1,
                success:t.bind(this._onHeartbeatResponse,this),
                error:t.bind(this._onHeartbeatError,this,e.ERROR.API.SAS.CONCURRENT_STREAMS)
                })
            },
        _onHeartbeatResponse:function(t){
            this.ajax=null,!t.message||t.message!="OK"||!t.signature?this._onHeartbeatError(e.ERROR.API.SAS.INVALID_HEARTBEAT):!t.expires||t.expires<(new Date).getTime()/1e3?this._onHeartbeatError(e.ERROR.API.SAS.INVALID_HEARTBEAT):(this.retries=3,t.auth_token!=null&&(this.authToken=t.auth_token,e.localStorage.setItem("oo_auth_token",t.auth_token)))
            },
        _onHeartbeatError:function(t){
            this.ajax=null,this.retries--;
            if(this.retries>0){
                this._onTimerTick();
                return
            }
            this.timer&&clearInterval(this.timer),this.mb.publish(e.EVENTS.ERROR,{
                code:t
            })
            }
        }),e.registerModule("auth_heartbeat",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    t.isString(e.playerParams.hastur_qos_percentage)?e.playerParams.hastur_qos_percentage=parseInt(e.playerParams.hastur_qos_percentage,10):t.isNumber(e.playerParams.hastur_qos_percentage)||(e.playerParams.hastur_qos_percentage=0);
    if(Math.random()*100>=e.playerParams.hastur_qos_percentage)return;
    var r=4102444800,i=41024448e5,s=41024448e8,o=41024448e11,u=31536e3,a=31536e6,f=31536e9,l=31536e12,c=10,h=1e3,p=function(e,t){
        this._appName=e,this._defaultLabels=t||{},this._defaultLabels.app=this._appName,this._messageNamePrefix=e+".",this._sendQueue=[],this._lastSend=0,this._sendTimeout=null
        };
        
    t.extend(p.prototype,{
        counter:function(e,n,r,i){
            e=e||"",r=r||"now",i=i||{},n=n===undefined||n===null?1:n;
            if(!t.isString(e)||!t.isNumber(r)&&!t.isString(r)||!t.isObject(i)||!t.isNumber(n))return;
            this._send({
                type:"counter",
                name:this._messageNamePrefix+e,
                value:n,
                timestamp:this._epoch_usec(r),
                labels:t.defaults(i,this._defaultLabels)
                })
            },
        gauge:function(e,n,r,i){
            e=e||"",r=r||"now",i=i||{};
            
            if(!t.isString(e)||!t.isNumber(r)&&!t.isString(r)||!t.isObject(i)||!t.isNumber(n))return;
            this._send({
                type:"counter",
                name:this._messageNamePrefix+e,
                value:n,
                timestamp:this._epoch_usec(r),
                labels:t.defaults(i,this._defaultLabels)
                })
            },
        compound:function(e,n,r,i){
            e=e||"",r=r||"now",i=i||{},n=n||[];
            if(!t.isString(e)||!t.isNumber(r)&&!t.isString(r)||!t.isObject(i)||!t.isArray(n)&&!t.isObject(n))return;
            this._send({
                type:"compound",
                name:this._messageNamePrefix+e,
                value:n,
                timestamp:this._epoch_usec(r),
                labels:t.defaults(i,this._defaultLabels)
                })
            },
        mark:function(e,n,r,i){
            e=e||"",r=r||"now",i=i||{},n=n||null;
            if(!t.isString(e)||!t.isNumber(r)&&!t.isString(r)||!t.isObject(i)||!t.isNull(n)&&!t.isString(n))return;
            this._send({
                type:"mark",
                name:this._messageNamePrefix+e,
                value:n,
                timestamp:this._epoch_usec(r),
                labels:t.defaults(i,this._defaultLabels)
                })
            },
        _epoch_usec:function(e){
            return t.isNumber(e)?u<e&&e<r?e*1e6:a<e&&e<i?e*1e3:f<e&&e<s?e:l<e&&e<o?e/1e3:(new Date).getTime()*1e3:(new Date).getTime()*1e3
            },
        _send:function(r,i){
            r&&this._sendQueue.push(r);
            var s=(new Date).getTime();
            if(!i&&this._sendQueue.length<c&&s-this._lastSend<h){
                this._sendTimeout===null&&(this._sendTimeout=setTimeout(t.bind(this._send,this,null,!0),h-(s-this._lastSend)));
                return
            }
            clearTimeout(this._sendTimeout),this._sendTimeout=null;
            if(this._sendQueue.length===0)return;
            n.ajax({
                type:"POST",
                url:e.SERVER.HASTUR,
                headers:{
                    "X-Verify":JSON.stringify(this._sendQueue)
                    },
                cache:!0
                }),this._sendQueue=[],this._lastSend=s
            }
        });
var d="";
e.requiredInEnvironment("flash-playback")?d="flash":e.requiredInEnvironment("html5-playback")?d="html5":e.requiredInEnvironment("cast-playback")?d="html5-cast":e.requiredInEnvironment("osmf-playback")&&(d="osmf"),e.Hastur=new p("mjolnir",{
    os:e.platform,
    ssl:e.isSSL,
    version:e.REV,
    player:e.playerParams.playerBrandingId,
    pcode:e.playerParams.pcode,
    platform:e.playerParams.platform,
    guid:e.guid,
    playback:d
}),e.Hastur.counter("embedded",1,"now")
    })(OO,OO._,OO.$);
OO.plugin("HasturQoS",function(e,t,n,r){
    var i=function(n,r){
        if(!e.Hastur)return;
        this.id=r,this.mb=n,this.playerGUID=e.guid+"-"+e.playerCount,this.mb.subscribe(e.EVENTS.PLAYER_CREATED,"hastur_qos",t.bind(this._playerCreated,this)),this.mb.subscribe(e.EVENTS.SET_EMBED_CODE,"hastur_qos",t.bind(this._setEmbedCode,this)),this.mb.subscribe(e.EVENTS.PLAY,"hastur_qos",t.bind(this._play,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_PLAYER_XML,"hastur_qos",t.bind(this._willFetchPlayerXml,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_CONTENT_TREE,"hastur_qos",t.bind(this._willFetchContentTree,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_METADATA,"hastur_qos",t.bind(this._willFetchMetadata,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_AUTHORIZATION,"hastur_qos",t.bind(this._willFetchAuthorization,this)),this.mb.subscribe(e.EVENTS.WILL_FETCH_AD_AUTHORIZATION,"hastur_qos",t.bind(this._willFetchAdAuthorization,this)),this.mb.subscribe(e.EVENTS.BUFFERING,"hastur_qos",t.bind(this._buffering,this)),this.mb.subscribe(e.EVENTS.ERROR,"hastur_qos",t.bind(this._error,this)),this.mb.subscribe(e.EVENTS.ADS_ERROR,"hastur_qos",t.bind(this._adsError,this)),this.mb.subscribe(e.EVENTS.BITRATE_INFO_AVAILABLE,"hastur_qos",t.bind(this._bitrateInfoAvailable,this))
        };
        
    return t.extend(i.prototype,{
        _playerCreated:function(t,n,r){
            e.Hastur.counter("player_created",1,"now",{
                player_guid:this.playerGUID
                })
            },
        _setEmbedCode:function(n,r,i){
            this._setEmbedCodeTimeMillis=(new Date).getTime(),e.Hastur.counter("set_embed_code",1,"now",{
                player_guid:this.playerGUID
                }),this.mb.subscribe(e.EVENTS.PLAYBACK_READY,"hastur_qos",t.bind(this._playbackReady,this))
            },
        _buffering:function(t,n){
            e.Hastur.counter("buffering",1,"now",{
                player_guid:this.playerGUID
                })
            },
        _error:function(t){
            e.Hastur.mark("error",code,"now",{
                player_guid:this.playerGUID
                })
            },
        _adsError:function(t){
            e.Hastur.counter("ads_error",1,"now",{
                player_guid:this.playerGUID
                })
            },
        _bitrateInfoAvailable:function(t,n){
            e.Hastur.compound("bitrate_info",n,"now",{
                player_guid:this.playerGUID
                })
            },
        _playbackReady:function(t){
            e.Hastur.gauge("time.set_embed_code_to_playback_ready",(new Date).getTime()-this._setEmbedCodeTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.PLAYBACK_READY,"hastur_qos")
            },
        _play:function(n){
            e.Hastur.counter("play",1,"now",{
                player_guid:this.playerGUID
                }),this._playTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.PLAYHEAD_TIME_CHANGED,"hastur_qos",t.bind(this._playheadTimeChanged,this))
            },
        _playheadTimeChanged:function(t){
            e.Hastur.gauge("time.play_to_playhead_time_changed",(new Date).getTime()-this._playTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.PLAYHEAD_TIME_CHANGED,"hastur_qos")
            },
        _willFetchPlayerXml:function(n){
            this._willFetchPlayerXmlTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.PLAYER_XML_FETCHED,"hastur_qos",t.bind(this._playerXmlFetched,this))
            },
        _playerXmlFetched:function(t){
            e.Hastur.gauge("time.player_xml",(new Date).getTime()-this._willFetchPlayerXmlTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.PLAYER_XML_FETCHED,"hastur_qos")
            },
        _willFetchContentTree:function(n){
            this._willFetchContentTreeTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.CONTENT_TREE_FETCHED,"hastur_qos",t.bind(this._contentTreeFetched,this))
            },
        _contentTreeFetched:function(t){
            e.Hastur.gauge("time.content_tree",(new Date).getTime()-this._willFetchContentTreeTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.CONTENT_TREE_FETCHED,"hastur_qos")
            },
        _willFetchMetadata:function(n){
            this._willFetchMetadataTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.METADATA_FETCHED,"hastur_qos",t.bind(this._metadataFetched,this))
            },
        _metadataFetched:function(t){
            e.Hastur.gauge("time.metadata",(new Date).getTime()-this._willFetchMetadataTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.METADATA_FETCHED,"hastur_qos")
            },
        _willFetchAuthorization:function(n){
            this._willFetchAuthorizationTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,"hastur_qos",t.bind(this._authorizationFetched,this))
            },
        _authorizationFetched:function(t){
            e.Hastur.gauge("time.authorization",(new Date).getTime()-this._willFetchAuthorizationTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.AUTHORIZATION_FETCHED,"hastur_qos")
            },
        _willFetchAdAuthorization:function(n){
            this._willFetchAdAuthorizationTimeMillis=(new Date).getTime(),this.mb.subscribe(e.EVENTS.AD_AUTHORIZATION_FETCHED,"hastur_qos",t.bind(this._adAuthorizationFetched,this))
            },
        _adAuthorizationFetched:function(t){
            e.Hastur.gauge("time.ad_authorization",(new Date).getTime()-this._willFetchAdAuthorizationTimeMillis,"now",{
                player_guid:this.playerGUID
                }),this.mb.unsubscribe(e.EVENTS.AD_AUTHORIZATION_FETCHED,"hastur_qos")
            }
        }),i
});
(function(e,t,n){
    e.AnalyticsBase=function(e,t){},n.extend(e.AnalyticsBase.prototype,{
        loadSucceed:function(){},
        reportEvent:function(){
            throw"Please override this function"
            },
        setup:function(e,t,r){
            this.mb=e,this.elementId=t,this._loaded=!1,this._bufferedEvents=[],this.mb.subscribe("*",r,n.bind(this._onAnalyticsEvent,this))
            },
        loadExternalAnalyticsJs:function(r){
            t.getScriptRetry(r,n.bind(this._onLoaded,this),{
                error:function(){
                    e.log("can not load url",r)
                    }
                })
        },
    _onLoaded:function(){
        this._loaded=!0,this.loadSucceed();
        if(!this._bufferedEvents)return;
        n.each(this._bufferedEvents,function(e){
            this._safeReportEvent.apply(this,e)
            },this)
        },
    _onAnalyticsEvent:function(){
        this._loaded?this._safeReportEvent.apply(this,arguments):this._bufferedEvents.push(arguments)
        },
    _safeReportEvent:function(){
        try{
            this.reportEvent.apply(this,arguments)
            }catch(t){
            e.log("can not log event")
            }
        },
    __place_holder:!0
    })
})(OO,OO.$,OO._);
(function(e,t,n){
    var r="ooyala_analytics",i=e.inherit(e.AnalyticsBase,function(t,i){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback")&&!e.requiredInEnvironment("osmf-playback"))return;
        this.setup(t,i,r),this.lastEmbedCode="",this.currentEmbedcode="",this.playingInstreamAd=!1,this.guid=undefined,this.accountId=undefined,this.accountIdSet=!1,this.guidSet=!1,t.subscribe(e.EVENTS.AUTHORIZATION_FETCHED,r,n.bind(this._onAuthorizationFetched,this)),t.subscribe(e.EVENTS.ERROR,r,n.bind(this._onErrorEvent,this)),t.subscribe(e.EVENTS.GUID_SET,r,n.bind(this._onGuidSet,this))
        });
    n.extend(i.prototype,{
        _onGuidSet:function(e,t){
            this.guid=t,this.guidSet=!0,this._onGuidAndAccountIdSet()
            },
        _onAuthorizationFetched:function(t,i){
            i.user_info&&i.user_info.account_id?this.accountId=i.user_info.account_id:i.debug_data&&i.debug_data.user_info&&i.debug_data.user_info.account_id&&(this.accountId=i.debug_data.user_info.account_id),this.mb.unsubscribe(e.EVENTS.ERROR,r),this.mb.unsubscribe(e.EVENTS.AUTHORIZATION_FETCHED,r),n.isNumber(this.accountId)&&(this.accountId=this.accountId.toString()),n.isString(this.accountId)?e.d("OO.OoyalaAnalytics: SAS authorization fetched with accountId == "+this.accountId):(this.accountId=undefined,e.d("OO.OoyalaAnalytics: SAS authorization fetched without an accountId")),this.accountIdSet=!0,this._onGuidAndAccountIdSet()
            },
        _onGuidAndAccountIdSet:function(){
            if(!this.guidSet||!this.accountIdSet)return;
            e.d("Loading Analtics Module..."),this.loadExternalAnalyticsJs(e.URLS.ANALYTICS({
                server:e.SERVER.ANALYTICS
                }))
            },
        _onErrorEvent:function(t,r){
            if(!r||!r.code)return;
            var i=r.code,s=!1;
            n.each(e.ERROR.API.SAS,function(e,t){
                e===i&&(s=!0)
                }),s&&this._onAuthorizationError(t,i)
            },
        _onAuthorizationError:function(t,n){
            this.mb.unsubscribe(e.EVENTS.ERROR,r),this.mb.unsubscribe(e.EVENTS.AUTHORIZATION_FETCHED,r),e.d("OO.OoyalaAnalytics: SAS authorization failed, loading external analytics module ..."),this.loadExternalAnalyticsJs(e.URLS.ANALYTICS({
                server:e.SERVER.ANALYTICS
                }))
            },
        loadSucceed:function(){
            if(!window.Ooyala||!window.Ooyala.Reporter)return;
            i.Reporter=Ooyala.Reporter,i.Pinger=Ooyala.Pinger,this.reporter=null;
            if(!e.playerParams.pcode)return;
            this.reporter=new i.Reporter(e.playerParams.pcode,{
                accountId:this.accountId,
                guid:this.guid
                })
            },
        reportEvent:function(t,n,r){
            if(!this.reporter)return;
            switch(t){
                case e.EVENTS.PLAYER_CREATED:
                    this.reporter.reportPlayerLoad();
                    break;
                case e.EVENTS.EMBED_CODE_CHANGED:
                    this.lastEmbedCode=this.currentEmbedcode,this.currentEmbedcode=n;
                    break;
                case e.EVENTS.CONTENT_TREE_FETCHED:
                    this.reporter.initializeVideo(this.currentEmbedcode,n.duration);
                    break;
                case e.EVENTS.WILL_PLAY_FROM_BEGINNING:
                    this.lastEmbedCode===this.currentEmbedcode?this.reporter.reportReplay():this.reporter.reportPlayStarted();
                    break;
                case e.EVENTS.WILL_PLAY_ADS:
                    this.playingInstreamAd=!0;
                    var i=Ooyala.Reporter.AdSource.UNKNOWN;
                    n&&n.type&&typeof n.type=="string"&&(i=Ooyala.Reporter.AdSource[n.type.toUpperCase()]),this.reporter.setAdSource(i,this.currentEmbedcode,n&&n.click_url),this.reporter.reportAdImpression();
                    break;
                case e.EVENTS.ADS_PLAYED:
                    this.playingInstreamAd=!1;
                    break;
                case e.EVENTS.ADS_CLICKED:
                    this.reporter.reportAdClickToVideo();
                    break;
                case e.EVENTS.PLAYHEAD_TIME_CHANGED:
                    this.playingInstreamAd?this.reporter.reportAdPlaythrough(n,r):this.reporter.reportPlayheadUpdate(Math.floor(n*1e3));
                    break;
                case e.EVENTS.REPORT_EXPERIMENT_VARIATIONS:
                    this.reporter.reportExperimentVariation(n.variationIds)
                    }
                },
    __place_holder:!0
    }),e.registerModule(r,function(e,t){
    return new i(e,t)
    })
})(OO,OO.$,OO._);
(function(e,t,n){
    var r=function(t,n,r){
        if(!e.requiredInEnvironment("default-ui"))return;
        if(!!r.layout&&r.layout==="chromeless")return;
        this.useCustomControls=!e.uiParadigm.match(/mobile/),this.useNativeControls=!!e.uiParadigm.match(/native/),this.Id=n,this.mb=t,this.isFullscreen=!1,this.bufferTime=0,this.isSeeking=!1,this.controlsVisible=!1,this.buffering=!1,this.isLivePlaying=!1,this.seekRange=null,this.isVideoAdPlaying=!1,this.liveSeekWindow=0,this.playbackReady=!1,this.CONTROLS_TIMEOUT=2e3,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"BasicUi",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"Init",
                to:"PlayerCreated"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*",
                to:"WaitingPlaybackReady"
            },{
                name:e.EVENTS.METADATA_FETCHED,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.AUTHORIZATION_FETCHED,
                from:"*"
            },{
                name:e.EVENTS.PLAYBACK_READY,
                from:"WaitingPlaybackReady",
                to:"Ready"
            },{
                name:e.EVENTS.WILL_PLAY,
                from:["Ready","Paused"],
                to:"StartingToPlay"
            },{
                name:e.EVENTS.PLAYING,
                from:["StartingToPlay","Paused"],
                to:"Playing"
            },{
                name:e.EVENTS.STREAM_PLAYING,
                from:"*"
            },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:["Playing","StartingToPlay"],
                to:"Playing"
            },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:"Paused",
                to:"Paused"
            },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:"PlayingMidroll",
                to:"PlayingMidroll"
            },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:"Ready",
                to:"Ready"
            },{
                name:e.EVENTS.WILL_PAUSE_ADS,
                from:"*",
                to:"Paused"
            },{
                name:e.EVENTS.PAUSED,
                from:"*",
                to:"Paused"
            },{
                name:e.EVENTS.PLAYED,
                from:["Playing","Paused"],
                to:"Ready"
            },{
                name:e.EVENTS.STREAM_PAUSED,
                from:"*"
            },{
                name:e.EVENTS.BUFFERING,
                from:"*"
            },{
                name:e.EVENTS.BUFFERED,
                from:"*"
            },{
                name:e.EVENTS.SEEKED,
                from:"*"
            },{
                name:e.EVENTS.FULLSCREEN_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.SIZE_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.DOWNLOADING,
                from:"*"
            },{
                name:e.EVENTS.CONTENT_TREE_FETCHED,
                from:"*"
            },{
                name:e.EVENTS.PLAY_MIDROLL_STREAM,
                from:["Playing","Paused"],
                to:"PlayingMidroll"
            },{
                name:e.EVENTS.WILL_RESUME_MAIN_VIDEO,
                from:"PlayingMidroll",
                to:"Playing"
            },{
                name:e.EVENTS.DISABLE_PLAYBACK_CONTROLS,
                from:"*"
            },{
                name:e.EVENTS.ENABLE_PLAYBACK_CONTROLS,
                from:"*"
            },{
                name:e.EVENTS.WILL_PLAY_ADS,
                from:"*"
            },{
                name:e.EVENTS.INITIAL_PLAY,
                from:"*"
            },{
                name:e.EVENTS.ADS_ERROR,
                from:"*"
            },{
                name:e.EVENTS.ADS_PLAYED,
                from:"*"
            },{
                name:e.EVENTS.UPDATE_AD_COUNTDOWN,
                from:"*"
            }]
            })
        };
        
    n.extend(r.prototype,{
        onInitialPlay:function(){
            if(!this.playbackReady)return;
            this.rootElement.find("div.oo_promo").hide(),!e.isIos&&!this.useNativeControls&&this.rootElement.find("div.plugins").show(),this._prepareControl()
            },
        onWillPlayAds:function(t,n){
            this.rootElement.find("div.oo_ads_countdown").html(n&&n.useCustomCountdown?"":e.getLocalizedMessage(e.TEXT.ADS_COUNTDOWN)),this.rootElement.find("div.oo_ads_countdown").show(),this.rootElement.find("div.oo_scrubber").css("pointer-events","none"),this.rootElement.find("div.oo_duration").html(e.formatSeconds(0)),this.isVideoAdPlaying=!0,this._updatePlayingUi()
            },
        onUpdateAdCountdown:function(e,t){
            t&&this.rootElement.find(".oo_ads_countdown").html(t)
            },
        onAuthorizationFetched:function(e,t){
            this.authorization=t,this.isLivePlaying=this.isLivePlaying||this.authorization.streams[0].is_live_stream
            },
        onAdsError:function(){
            e.log("Ads Error, hiding ads countdown."),this.onAdsPlayed()
            },
        onAdsPlayed:function(){
            this.rootElement.find("div.oo_ads_countdown").hide(),this.rootElement.find("div.oo_scrubber").css("pointer-events","auto"),this.isVideoAdPlaying=!1
            },
        _showDomObject:function(t,n){
            var r=n?e.CSS.VISIBLE_POSITION:e.CSS.INVISIBLE_POSITION;
            this.rootElement.find(t).css("left",r)
            },
        onPlayMidrollStream:function(e){
            this._showDomObject("video.video",!1),this._showDomObject("video.midroll",!0),this._updatePlayingUi()
            },
        onWillResumeMainVideo:function(e){
            this._showDomObject("video.video",!0),this._showDomObject("video.midroll",!1)
            },
        onPlayerCreated:function(r,s,o){
            this.elementId=s,this.topMostElement=t("#"+this.elementId),this.rootElement=this.topMostElement.find("div.innerWrapper"),this.params=o,this.accentColor=o.accentColor||6130397,e.attachStyle(this.elementId+".oo_ui_element { display: none; }",this.elementId),e.attachStyle(n.template(e.get_css("basic_ui"))({
                elementId:this.elementId,
                liveIcon:e.get_img_base64("icon_live"),
                rewindIcon:e.get_img_base64("icon_rewind"),
                playIcon:e.get_img_base64("icon_play"),
                pauseIcon:e.get_img_base64("icon_pause"),
                playheadIcon:e.get_img_base64("icon_playhead"),
                fullscreenOnIcon:e.get_img_base64("icon_full_off"),
                fullscreenOffIcon:e.get_img_base64("icon_full_on")
                }),this.elementId),o.css&&typeof o.css=="string"&&(o.css.match(/\.css$/)?setTimeout(function(){
                t("head").append('<link href="'+o.css+'" rel="stylesheet" type="text/css">')
                },0):e.attachStyle(o.css,this.elementId)),this.rootElement.append("<div class='plugins' style='display:none'></div>"),this.rootElement.append('<div class="oo_ads_countdown" style="display:none"></div>'),this.rootElement.append('<div class="oo_promo"></div>'),this.promoUi=new i(this.rootElement.find("div.oo_promo")),this.useCustomControls?this._createControls():this.controlsRoot=this.rootElement.find("div.oo_controls"),this.spinner=new e.Spinner(this.mb,this.rootElement.find("div.oo_spinner"),this.rootElement),this.useNativeControls&&this.rootElement.find("video.video").attr("controls","true"),this.rootElement.append('<div class="oo_end_screen" style="display:none"><img class="oo_replay" src="'+e.get_img_base64("icon_replay")+'"><img class="oo_fullscreen" src="'+e.get_img_base64("icon_full_on")+'"></div>'),this.rootElement.find("div.oo_end_screen img.oo_replay").bind("click",n.bind(this._replayClicked,this)),this.rootElement.find("div.oo_end_screen img.oo_fullscreen").bind("click",n.bind(this._fullscreenClick,this))
            },
        _onClickOnPlayer:function(t){
            if(this.rootElement.find("div.oo_end_screen").is(":visible")||this.rootElement.find("div.oo_promo").is(":visible"))return;
            this.mb.publish(e.EVENTS.PLAYER_CLICKED)
            },
        _createControls:function(){
            this.rootElement.append('<div class="oo_tap_panel" style="display:none"></div>'),this.rootElement.append('<div class="oo_controls_wrap" style="display: none; position: relative; overflow: hidden; height: 100%; width: 100%;"></div>'),this.rootElement.bind("mousemove.showcontrols touchstart.showcontrols MSPointerDown.showcontrols",n.bind(this._onMouseMove,this));
            var r=e.isIos?"video.video":"div.oo_tap_panel";
            this.rootElement.find(r).bind(e.supportTouch?"touchstart":"click",n.bind(this._onClickOnPlayer,this)),this.controlsWrap=this.rootElement.find("div.oo_controls_wrap"),this.controlsWrap.append('<div class="oo_controls" style="display: none; bottom:-1000px;"></div>'),this.controlsRoot=this.controlsWrap.find("div.oo_controls"),this.controlsRoot.append('<div class="oo_controls_inner vod"></div><div class="oo_controls_inner live"></div>'),this.vodControl=new u(this.controlsRoot.find("div.vod"),this),this.liveControl=new a(this.controlsRoot.find("div.live"),this);
            var i=this.controlsRoot.find("div.oo_button");
            i.append('<div class="oo_button_highlight" />'),i.bind("touchstart MSPointerDown mousedown",function(e){
                t(e.target).find("div.oo_button_highlight").show()
                }),i.bind("touchend MSPointerUp mouseup",function(e){
                t(e.target).find("div.oo_button_highlight").hide()
                }),this.controlsRoot.find("div.oo_play").bind("click",n.bind(this._playClick,this)),this.controlsRoot.find("div.oo_pause").bind("click",n.bind(this._pauseClick,this)),this.controlsRoot.find("div.oo_rewind").bind("click",n.bind(this._rewindClick,this)),this.controlsRoot.find("div.oo_fullscreen").bind("click",n.bind(this._fullscreenClick,this)),this.controlsRoot.find("div.oo_playhead_progress").css("background-color",e.getColorString(this.accentColor));
            var s=6052956;
            this.controlsRoot.find("div.oo_buffer_progress").css("background-color",e.getColorString(s)),n.each([t(this.vodControl.scrubber),t(this.liveControl.scrubber)],n.bind(function(e){
                e.bind("scrubStart",n.bind(this._scrubStart,this)),e.bind("scrub",n.bind(this._scrub,this)),e.bind("scrubEnd",n.bind(this._scrubEnd,this))
                },this)),this.rootElement.append('<div class="oo_spinner" style="display:none"></div>'),this._resizeControls()
            },
        onEmbedCodeChanged:function(t,r,i){
            this.isVideoAdPlaying&&this.onAdsPlayed(),this.params.promoUrl=null,this.params=n.extend(this.params,i),this.rootEmbedCode=r,this.currentTime=0,this.duration=0,this.isLivePlaying=!1,this.seekRange=null,this.liveSeekWindow=0,this.controlsEnabled=!0,this.promoImageUrl=null,this.rootElement.find("div.oo_end_screen").hide(),this.rootElement.find("div.oo_promo").show(),!e.isIos&&!this.useNativeControls&&this.rootElement.find("div.plugins").hide(),this.rootElement.find("video.video").css("left",e.CSS.INVISIBLE_POSITION),this.rootElement.find("div.oo_promo").unbind("click"),this.rootElement.find("div.oo_tap_panel").css("display","none"),this.promoUi.disallowPlayback(),this._toggleControls(!1),this.playbackReady=!1
            },
        _setPromoImage:function(){
            if(n.isString(this.promoImageUrl)){
                this.promoUi.setBackground(this.promoImageUrl);
                var e=this.rootElement.find("div.oo_end_screen");
                e.css("background-image","url("+this.promoImageUrl+")")
                }
            },
    onContentTreeFetched:function(e,t){
        this.contentTree=t,n.isString(this.promoImageUrl)&&this.promoImageUrl.length==0&&(this.promoImageUrl=undefined),this.promoImageUrl=this.params.promoUrl||this.promoImageUrl||this.contentTree.promo_image||this.contentTree.thumbnail_image||"",this._setPromoImage(),this.rootEmbedCode===this.contentTree.embed_code&&(this.isLivePlaying=this.isLivePlaying||this.contentTree.content_type==="LiveStream")
        },
    onMetadataFetched:function(e,t){
        n.isString(this.promoImageUrl)&&this.promoImageUrl.length==0&&(this.promoImageUrl=undefined),this.promoImageUrl=this.promoImageUrl||t&&t.base&&t.base.thumbnail||"",this._setPromoImage()
        },
    onPlaybackReady:function(e,t){
        this.rootElement.find("div.oo_promo").bind("click",n.bind(this._promoClick,this)),this.promoUi.allowPlayback(),this.playbackReady=!0
        },
    _prepareControl:function(){
        this.useCustomControls&&(this.controlsWrap.css("display",""),this.controlsRoot.css("display",""),e.isIos||this.rootElement.find("div.oo_tap_panel").css("display",""),this._toggleControls(!1))
        },
    onWillPlay:function(e,t){
        this._prepareControl(),this._showDomObject("video.video",!0),this._showDomObject("video.midroll",!1),this.rootElement.find("div.oo_end_screen").hide()
        },
    onPlayed:function(e){
        this.useCustomControls&&(this.rootElement.find("div.oo_pause").hide(),this.rootElement.find("div.oo_play").show()),this._showDomObject("video.video",!1),this._showDomObject("video.midroll",!1);
        var t=this.rootElement.find("div.oo_end_screen"),n=this.rootElement.find("div.oo_end_screen img.oo_replay");
        t.show()
        },
    onWillPauseAds:function(e){
        this.onPaused(e)
        },
    onPaused:function(e){
        this.useCustomControls&&(this.rootElement.find("div.oo_pause").hide(),this.rootElement.find("div.oo_play").show(),this._onMouseMove())
        },
    onStreamPaused:function(e){
        this.useCustomControls&&(this.rootElement.find("div.oo_pause").hide(),this.rootElement.find("div.oo_play").show())
        },
    onPlaying:function(e,t){
        this._updatePlayingUi()
        },
    onStreamPlaying:function(e,t){
        this._updatePlayingUi()
        },
    _updatePlayingUi:function(){
        if(this.useNativeControls)return;
        this.rootElement.find("div.oo_end_screen").hide(),this.rootElement.find("div.oo_promo").hide(),e.isIos||this.rootElement.find("div.plugins").show(),this.useCustomControls&&(this.rootElement.find("div.oo_play").hide(),this.controlsRoot.show(),this.rootElement.find("div.oo_pause").show())
        },
    onBuffering:function(e,t){
        this.useCustomControls&&this.spinner.play(),this.buffering=!0
        },
    onBuffered:function(e,t){
        if(this.useNativeControls)return;
        this.useCustomControls&&this.spinner.pause(),this.buffering=!1,this._updateScrubberProgressBar()
        },
    onSeeked:function(e){
        if(this.useNativeControls)return;
        this.useCustomControls&&this.spinner.pause(),this.buffering=!1,this._updateScrubberProgressBar()
        },
    onPlayheadTimeChanged:function(t,n,r,i,s){
        if(this.useNativeControls)return;
        this.bufferTime=i,this.currentTime=n,this.duration=r,this.seekRange=s,this.useCustomControls&&(e.isIE||!this.buffering)&&this._updateScrubberProgressBar()
        },
    onFullscreenChanged:function(t,n,r){
        n?(this.controlsRoot.find("div.oo_fullscreen").removeClass("oo_fullscreen_on"),this.controlsRoot.find("div.oo_fullscreen").addClass("oo_fullscreen_off"),this.isFullscreen=!0,this.rootElement.find("div.oo_end_screen img.oo_fullscreen").show()):(this.currentState==="Playing"&&r&&this.mb.publish(e.EVENTS.PAUSED),this.isFullscreen=!1,this.rootElement.css("overflow","hidden"),this.rootElement.find("div.oo_end_screen img.oo_fullscreen").hide(),this.useCustomControls?(this.controlsRoot.find("div.oo_fullscreen").removeClass("oo_fullscreen_off"),this.controlsRoot.find("div.oo_fullscreen").addClass("oo_fullscreen_on"),this.controlsCanHide=!1,this._toggleControls()):e.useNativeControls||(e.d("Getting promo back"),this.rootElement.find("div.oo_promo").show(),e.isIos||this.rootElement.find("div.plugins").hide(),this.rootElement.find("video.video").css("left",e.CSS.INVISIBLE_POSITION)))
        },
    onSizeChanged:function(e){
        this._resizeControls(),this._updateScrubberProgressBar()
        },
    onDownloading:function(e,t,n,r,i){
        if(this.useNativeControls)return;
        this.bufferTime=r,this.currentTime=t,this.duration=n,this.seekRange=i,this._updateScrubberProgressBar()
        },
    onDisablePlaybackControls:function(e){
        this._toggleControls(!1),this.controlsEnabled=!1
        },
    onEnablePlaybackControls:function(e){
        this.controlsEnabled=!0
        },
    _onMouseMove:function(e){
        if(this.rootElement.find("div.oo_end_screen").is(":visible")||this.rootElement.find("div.oo_promo").is(":visible"))return;
        this._toggleControls(!0)
        },
    _showControls:function(){
        if(!this.useCustomControls)return;
        this.isLivePlaying?(this.vodControl.hide(),this.liveControl.show()):(this.vodControl.show(),this.liveControl.hide())
        },
    _toggleControls:function(t){
        var r=!1;
        t===undefined?r=this.useCustomControls&&!this.controlsVisible&&this.controlsEnabled:r=this.useCustomControls&&t&&this.controlsEnabled,this.controlsTimer&&(clearTimeout(this.controlsTimer),this.controlsTimer=null);
        if(r)this.controlsRoot.css("bottom","10px"),this.currentState!=="Paused"&&!this.isSeeking&&(this.controlsTimer=n.delay(n.bind(this._toggleControls,this),this.CONTROLS_TIMEOUT)),this._showControls(),this.controlsVisible||(this.controlsVisible=!0,this.mb.publish(e.EVENTS.CONTROLS_SHOWN));
        else{
            var i="-"+this.controlsRoot.height()+"px";
            this.controlsRoot.css("bottom",i),this.controlsVisible&&(this.controlsVisible=!1,this.mb.publish(e.EVENTS.CONTROLS_HIDDEN))
            }
        },
    _updateScrubberProgressBar:function(){
        if(this.isSeeking||this.useNativeControls)return;
        var e=this.isLivePlaying&&!this.isVideoAdPlaying,t=e?this.liveControl.scrubber:this.vodControl.scrubber,n=e&&this.seekRange?this.seekRange.start:0,r=e&&this.seekRange?this.seekRange.end:this.duration,i=e&&r-this.currentTime<10?r-10:this.currentTime;
        t.setValue(i,Math.min(this.bufferTime,r),n,r)
        },
    _resizeControls:function(){
        this.useCustomControls&&(this.rootElement.width()<400?this.controlsRoot.addClass("oo_mini_controls").removeClass("oo_full_controls"):this.controlsRoot.removeClass("oo_mini_controls").addClass("oo_full_controls"))
        },
    _promoClick:function(){
        return this.mb.publish(e.EVENTS.INITIAL_PLAY),!1
        },
    _playClick:function(t){
        return this.mb.publish(e.EVENTS.PLAY),!1
        },
    _replayClicked:function(t){
        return this.rootElement.find("div.oo_end_screen").hide(),this.mb.publish(e.EVENTS.SEEK,0),this.mb.publish(e.EVENTS.PLAY),!1
        },
    _pauseClick:function(){
        return this.mb.publish(e.EVENTS.PAUSE),!1
        },
    _fullscreenClick:function(){
        return this.mb.publish(e.EVENTS.WILL_CHANGE_FULLSCREEN,!this.isFullscreen),!1
        },
    _rewindClick:function(){
        this.mb.publish(e.EVENTS.SEEK,this.currentTime-30<0?0:this.currentTime-30)
        },
    _scrubStart:function(t){
        this.wasPlaying=this.currentState=="Playing",this.mb.publish(e.EVENTS.SCRUBBING),this.mb.publish(e.EVENTS.PAUSE),this.isSeeking=!0
        },
    _scrub:function(t,n){
        this.mb.publish(e.EVENTS.SEEK,n)
        },
    _scrubEnd:function(t,n){
        this.isSeeking=!1,this.mb.publish(e.EVENTS.SCRUBBED),this.wasPlaying&&this.mb.publish(e.EVENTS.PLAY),this._onMouseMove()
        },
    __placeholder:!0
    });
var i=function(e){
    this.promo=e,this.init()
    };
    
n.extend(i.prototype,{
    init:function(){
        this.promo.append("<div class='oo_start_button'><img class='oo_start_spinner'></div>");
        var t=this.promo.find("img.oo_start_spinner");
        t.attr({
            src:e.get_img_base64("icon_spinner")
            })
        },
    setBackground:function(e){
        this.promo.css("background-image","url("+e+")")
        },
    allowPlayback:function(){
        this.promo.find("div.oo_start_button").html(""),this.promo.find("div.oo_start_button").css({
            "background-image":"url("+e.get_img_base64("icon_play")+")"
            })
        },
    disallowPlayback:function(){
        this.promo.find("div.oo_start_button").html("<img class='oo_start_spinner'>"),this.promo.find("div.oo_start_button").css({
            "background-image":""
        });
        var t=this.promo.find("img.oo_start_spinner");
        t.attr({
            src:e.get_img_base64("icon_spinner")
            })
        }
    });
var s=function(e,t,n){
    this.scrubber=e.find("div.oo_scrubber"),this.handle=this.scrubber.find("div.oo_playhead"),this.trackContainer=this.scrubber.find("div.oo_scrubber_track"),this.playedTrack=this.scrubber.find("div.oo_playhead_progress"),this.bufferTrack=this.scrubber.find("div.oo_buffer_progress"),this.currentTime=this.scrubber.find("div.oo_currentTime"),this.duration=this.scrubber.find("div.oo_duration"),this.min=t||0,this.max=n||0,this.init()
    };
    
n.extend(s.prototype,{
    init:function(){
        this.handle.bind("mousedown.scrubber touchstart.scrubber MSPointerDown.scrubber",n.bind(this._onScrubStart,this)),this.handle.bind("touchmove.scrubber",n.bind(this._onScrub,this)),this.handle.bind("touchend.scrubber",n.bind(this._onScrubEnd,this)),t(".oo_progress").each(function(){
            this.onselectstart=function(){
                return!1
                }
            }),t(".oo_playhead").each(function(){
        this.onselectstart=function(){
            return!1
            }
        }),this.setValue(0,0,0,0)
    },
setValue:function(t,n,r,i){
    this.min=r||this.min,this.max=i||this.max;
    var s=(t-r)/(i-r);
    s=Math.min(Math.max(0,s),1);
    var o=s*(this.trackContainer.width()-this.handle.width());
    this.handle.css("left",o),this.playedTrack.css("width",o+this.handle.width()/2);
    var u=(n-r)/(i-r);
    this.bufferTrack.css("width",u*this.trackContainer.width()+"px"),this.currentTime.html(e.formatSeconds(t||0)),this.duration.html(e.formatSeconds(i||0))
    },
_update:function(t){
    var n=this.trackContainer.width()-this.handle.width(),r=this.scrubberStartX+t-this.seekStartX,i=Math.max(Math.min(r,n),0),s=i/n*(this.max-this.min)+this.min;
    return this.handle.css("left",i),this.playedTrack.css("width",i+this.handle.width()/2),this.currentTime.html(e.formatSeconds(s||0)),this.duration.html(e.formatSeconds(this.max||0)),s
    },
_onScrubStart:function(e){
    this.seekStartX=0,e.type==="mousedown"?(t(document).bind("mouseup.scrubber",n.bind(this._onScrubEnd,this)),t(document).bind("mousemove.scrubber",n.bind(this._onScrub,this)),this.seekStartX=e.screenX):e.type==="touchstart"?this.seekStartX=e.originalEvent.touches[0].screenX:e.type==="MSPointerDown"&&(t(document).bind("MSPointerUp.scrubber",n.bind(this._onScrubEnd,this)),t(document).bind("MSPointerMove.scrubber",n.bind(this._onScrub,this)),e.originalEvent.preventDefault(),this.seekStartX=e.originalEvent.screenX),this.scrubberStartX=parseInt(this.handle.css("left"),10),t(this).trigger("scrubStart")
    },
_onScrub:function(e){
    var n=0;
    e.type==="mousemove"?n=e.screenX:e.type==="touchmove"?(e.originalEvent.preventDefault(),this.lastTouchX=e.originalEvent.touches[0].screenX,n=this.lastTouchX):e.type==="MSPointerMove"&&(e.originalEvent.preventDefault(),n=e.originalEvent.screenX),t(this).trigger("scrub",this._update(n))
    },
_onScrubEnd:function(e){
    var n=0;
    e.type==="mouseup"?(t(document).unbind("mouseup.scrubber"),t(document).unbind("mousemove.scrubber"),n=e.screenX):e.type==="touchend"?(e.originalEvent.preventDefault(),n=this.lastTouchX):e.type==="MSPointerUp"&&(t(document).unbind("MSPointerUp.scrubber"),t(document).unbind("MSPointerMove.scrubber"),e.originalEvent.preventDefault(),n=e.originalEvent.screenX),t(this).trigger("scrubEnd",this._update(n))
    },
__end_marker:!0
});
var o=function(e,t){
    this.controlsRoot=e,this.basicUi=t
    };
    
n.extend(o.prototype,{
    init:function(){},
    show:function(){
        this.controlsRoot.show()
        },
    hide:function(){
        this.controlsRoot.hide()
        },
    __end_marker:!0
    });
var u=e.inherit(o,function(e,t){
    this.controlsRoot=e,this.basicUi=t,this.init()
    });
n.extend(u.prototype,{
    init:function(){
        this.controlsRoot.append("<div class='oo_scrubber'>            <div class='oo_label oo_currentTime'></div>            <div class='oo_scrubber_track'>              <div class='oo_progress oo_buffer_progress'></div>              <div class='oo_progress oo_playhead_progress'></div>              <div class='oo_playhead'></div>            </div>            <div class='oo_label oo_duration'></div>          </div>"),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_rewind"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_pause" style="display:none;"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_play"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_fullscreen oo_fullscreen_on"></div>'),this.scrubber=new s(this.controlsRoot)
        }
    });
var a=e.inherit(o,function(e,t){
    this.controlsRoot=e,this.basicUi=t,this.init()
    });
n.extend(a.prototype,{
    init:function(){
        this.controlsRoot.append("<div class='oo_scrubber'>        <div class='oo_scrubber_track'>          <div class='oo_progress oo_buffer_progress'></div>          <div class='oo_progress oo_playhead_progress'></div>          <div class='oo_playhead'></div>        </div>          </div>"),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_rewind"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_pause" style="display:none;"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_play"></div>'),this.controlsRoot.append('<div class="oo_live_indicator oo_button oo_toolbar_item"></div>'),this.controlsRoot.append('<div class="oo_live_message oo_label oo_button oo_toolbar_item"></div>'),this.controlsRoot.append('<div class="oo_button oo_toolbar_item oo_fullscreen oo_fullscreen_on"></div>'),this.controlsRoot.find("div.oo_live_message").html(e.getLocalizedMessage(e.TEXT.LIVE)),this.scrubber=new s(this.controlsRoot)
        }
    }),e.registerModule("basic_ui",function(e,t,n){
    return new r(e,t,n)
    })
})(OO,OO.$,OO._);
OO.plugin("DiscoveryApi",function(e,t,n,r){
    var i=20;
    e.EVENTS.DISCOVERY_API={
        RELATED_VIDEOS_FETCHED:"relatedVideosFetched",
        SEND_DISPLAY_EVENT:"sendDisplayEvent",
        DISPLAY_EVENT_SUCCESS:"displayEventSuccess",
        SEND_CLICK_EVENT:"sendClickEvent"
    };
    
    var s=function(t,n){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback"))return;
        this.id=n,this.mb=t,this.error=!1,this.relatedVideos=[],this.guid="",this.apiHost=e.playerParams.backlot_api_write_server||"api.ooyala.com",e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"DiscoveryApi",
            target:this,
            events:[{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.DISCOVERY_API.SEND_DISPLAY_EVENT,
                from:"*"
            },{
                name:e.EVENTS.DISCOVERY_API.SEND_CLICK_EVENT,
                from:"*"
            },{
                name:e.EVENTS.GUID_SET,
                from:"*"
            }]
            })
        };
        
    return t.extend(s.prototype,{
        onEmbedCodeChanged:function(e,n){
            if(this.guid===""){
                var r=t.bind(function(){
                    this._fetchRelatedVideos(n)
                    },this);
                setTimeout(r,500)
                }else this._fetchRelatedVideos(n)
                },
        onGuidSet:function(e,t){
            this.guid=t
            },
        onSendDisplayEvent:function(e,r){
            var i="http://"+this.apiHost+"/v2/discover/feedback/impression";
            i+="?bucket_info="+encodeURIComponent(r)+"&device_id="+encodeURIComponent(this.guid),n.ajax({
                url:i,
                type:"POST",
                dataType:"json",
                crossDomain:!0,
                cache:!0,
                success:t.bind(this._displayEventSuccess,this),
                error:t.bind(this._iDontCare,this)
                })
            },
        onSendClickEvent:function(e,r,i,s){
            var o="http://"+this.apiHost+"/v2/discover/feedback";
            n.ajax({
                url:o,
                data:{
                    custom:{
                        source:i
                    },
                    system:s,
                    bucket_info:r,
                    device_id:this.guid
                    },
                type:"POST",
                dataType:"json",
                crossDomain:!0,
                cache:!0,
                success:t.bind(this._iDontCare,this),
                error:t.bind(this._iDontCare,this)
                })
            },
        _displayEventSuccess:function(){
            this.mb.publish(e.EVENTS.DISCOVERY_API.DISPLAY_EVENT_SUCCESS)
            },
        _iDontCare:function(){},
        _fetchRelatedVideos:function(r){
            this.error=!1,this.relatedVideos=[];
            var s={
                sign_version:"player",
                pcode:e.playerParams.pcode,
                discovery_profile_id:e.playerParams.playerBrandingId,
                video_pcode:e.playerParams.pcode,
                limit:i,
                device_id:this.guid,
                expires:Math.floor((new Date).getTime()/1e3+3600)
                },o=encodeURIComponent(this._generateSignature(s));
            s.device_id=encodeURIComponent(s.device_id);
            var u="//"+this.apiHost+"/v2/discover/similar/assets/"+r+"?"+this._generateParamString(s,o);
            n.ajax({
                url:u,
                type:"GET",
                dataType:"json",
                crossDomain:!0,
                cache:!0,
                success:t.bind(this._onRelatedVideosFetched,this),
                error:t.bind(this._onApiError,this)
                })
            },
        _onRelatedVideosFetched:function(t){
            var n=e.HM.safeObject("discovery.relatedVideos",t,{});
            n.errors===undefined||n.errors&&n.errors.code===0?(this.relatedVideos=n.results||[],this.variationIds=n.variation_ids):(this.relatedVideos=[],this.variationIds=[]),this.mb.publish(e.EVENTS.REPORT_EXPERIMENT_VARIATIONS,{
                variationIds:this.variationIds
                }),this.mb.publish(e.EVENTS.DISCOVERY_API.RELATED_VIDEOS_FETCHED,{
                videos:this.relatedVideos
                })
            },
        _onApiError:function(t,n,r){
            this.error=!0,this.mb.publish(e.EVENTS.DISCOVERY_API.RELATED_VIDEOS_FETCHED,{
                error:!0
                })
            },
        _generateSignature:function(e){
            var n=e.pcode,r=t.reject(t.keys(e),function(e){
                return e==="pcode"
                }),i=new jsSHA(n+this._hashToString(e,"",r),"ASCII");
            return i.getHash("SHA-256","B64").substring(0,43)
            },
        _hashToString:function(e,n,r){
            var i="",s=r||t.keys(e);
            return t.each(t.sortBy(s,function(e){
                return e
                }),function(t){
                i+=n+t+"="+e[t]
                }),i
            },
        _generateParamString:function(e,t){
            var n="signature="+t+this._hashToString(e,"&");
            return n
            }
        }),s
});
(function(e,t,n){
    var r=function(e,t,n,r){
        this.initialVelocity=e,this.deceleration=e>0?-Math.abs(t):Math.abs(t),this.callback=n,this.initialTime=(new Date).getTime(),this._tweenInterval=null,this.interval=r||1
        };
        
    t.extend(r.prototype,{
        isDone:function(){
            return this._tweenInterval===null
            },
        start:function(){
            this.initialTime=(new Date).getTime();
            var e=-this.initialVelocity;
            this.stopTime=e/this.deceleration,this.travelledDistance=0,this._tweenInterval=setInterval(t.bind(this._decelerate,this),this.interval)
            },
        stop:function(){
            if(this._tweenInterval===null)return;
            clearInterval(this._tweenInterval)
            },
        _decelerate:function(){
            var e=(new Date).getTime()-this.initialTime;
            if(e>this.stopTime){
                clearInterval(this._tweenInterval),this._tweenInterval=null;
                return
            }
            var t=this.initialVelocity*e+.5*this.deceleration*e*e,n=t-this.travelledDistance;
            this.travelledDistance=t,this.callback(n)
            }
        }),e.Tween=r
})(OO,OO._,OO.$);
OO.plugin("DiscoveryToaster",function(e,t,n,r){
    var i=43,s=3,o=5,u=.005,a=-1,f=10008,l=function(t,n){
        if(!e.requiredInEnvironment("html5-playback")&&!e.requiredInEnvironment("cast-playback"))return;
        this.id=n,this.mb=t,this.relatedVideos=[],e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"DiscoveryToaster",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"*"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.DISCOVERY_API.RELATED_VIDEOS_FETCHED,
                from:"*"
            },{
                name:e.EVENTS.PAUSED,
                from:"*"
            },{
                name:e.EVENTS.PLAYED,
                from:"*"
            },{
                name:e.EVENTS.PLAYING,
                from:"*"
            },{
                name:e.EVENTS.CONTROLS_SHOWN,
                from:"*"
            },{
                name:e.EVENTS.CONTROLS_HIDDEN,
                from:"*"
            },{
                name:e.EVENTS.PLAYBACK_READY,
                from:"*"
            },{
                name:e.EVENTS.FULLSCREEN_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.SCRUBBING,
                from:"*"
            },{
                name:e.EVENTS.SCRUBBED,
                from:"*"
            }]
            })
        };
        
    return t.extend(l.prototype,{
        onPlayerCreated:function(r,i,s){
            this.elementId=i,this.topMostElement=n("#"+this.elementId),this.rootElement=this.topMostElement.find("div.innerWrapper"),this.params=s,this.accentColor=s.accentColor||6130397,this.showingToaster=!1,this._isScrubbing=!1,e.attachStyle(t.template(e.get_css("discovery_toaster"))({
                elementId:this.elementId,
                discoveryIcon:e.get_img_base64("discovery_dots"),
                playIcon:e.get_img_base64("icon_play")
                }),this.elementId),this.rootElement.append("<div class='discovery_toaster'>            <div class='discovery_copy'>Discover</div>            <div class='discovery_image_holder'>              <div class='discovery_image'></div>            </div>            <div class='discovery_outer'>              <div class='discovery_left_gradient'></div>              <div class='discovery_left_scroll'></div>              <div class='discovery_holder'></div>              <div class='discovery_right_scroll'></div>              <div class='discovery_right_gradient'></div>            </div>          </div>")
            },
        onEmbedCodeChanged:function(e,t){
            this._resetToaster(),this._isScrubbing=!1
            },
        onRelatedVideosFetched:function(e,n){
            this._resetToaster(),this.relatedVideos=n.error?[]:n.videos||[];
            if(!this._hasRelatedVideos())return;
            this.toasterRoot=this.rootElement.find("div.discovery_toaster"),this.holder=this.rootElement.find("div.discovery_holder"),this.holder.append("<div class='discovery_slider'></div>"),this.slider=this.holder.find("div.discovery_slider"),this.discoveryOuter=this.rootElement.find("div.discovery_outer"),this._resize();
            var r=!0;
            t.each(this.relatedVideos,t.bind(function(e,t){
                var n=r?" discovery_first_video_image":"";
                r=!1,this.slider.append("<div class='discovery_video' style='width: "+this.tileWidth+"px;'>            <div data-id='"+t+"' data-embed='"+e.embed_code+"' class='discovery_video_image"+n+"' style='background-image: url("+e.preview_image_url+");'>              <div data-id='"+t+"' data-embed='"+e.embed_code+"' class='discovery_video_name' style='font-size: "+this.smallFontSize+"px'>"+e.name+"</div>            </div>          </div>")
                },this)),this.leftGradient=this.rootElement.find("div.discovery_left_gradient"),this.rightGradient=this.rootElement.find("div.discovery_right_gradient"),this.scrollLeft=this.rootElement.find("div.discovery_left_scroll"),this.scrollRight=this.rootElement.find("div.discovery_right_scroll"),this._bindListeners(),this.showingToaster&&this._showToaster()
            },
        onScrubbing:function(e){
            this._isScrubbing=!0
            },
        onScrubbed:function(e){
            this._isScrubbing=!1
            },
        onPaused:function(t){
            if(this._isScrubbing||e.playerParams.attributes&&e.playerParams.attributes.enable_toaster_pause&&e.playerParams.attributes.enable_toaster_pause!=="true")return;
            this._showToaster()
            },
        onPlayed:function(e){
            this._showToaster(!0),this._showingControls=!1,this._startContinuousPlayback(),this._ended=!0
            },
        onPlaybackReady:function(t){
            this.shouldPlay&&(this.mb.publish(e.EVENTS.PLAY),this.shouldPlay=!1)
            },
        onPlayheadTimeChanged:function(t,n,r){
            if(!e.playerParams.attributes||e.playerParams.attributes.enable_toaster_last_n!=="true"||!e.playerParams.attributes.countdown_seconds)return;
            var i=parseInt(e.playerParams.attributes.countdown_seconds,10);
            this.currRemaining=r-n;
            if(r-n>i||r===0)return;
            this._showToaster()
            },
        onPlaying:function(t){
            if(e.playerParams.attributes&&e.playerParams.attributes.enable_toaster_last_n&&e.playerParams.attributes.enable_toaster_last_n==="true"&&e.playerParams.attributes.countdown_seconds){
                var n=parseInt(e.playerParams.attributes.countdown_seconds,10);
                if(this.currRemaining&&this.currRemaining<=n)return
            }
            this._hideToaster(),this._ended=!1,this.rootElement.find("div.discovery_toaster").css("z-index",f)
            },
        onControlsShown:function(e){
            this._showingControls=!0,this.rootElement.find("div.discovery_toaster").css("bottom","60px")
            },
        onControlsHidden:function(e){
            this._showingControls=!1,this.rootElement.find("div.discovery_toaster").css("bottom","15px")
            },
        onFullscreenChanged:function(e){
            this._resize()
            },
        _bindListeners:function(){
            this._unbindListeners();
            var n=null,r=null;
            this.scrollLeft.mouseenter(t.bind(function(e){
                n=setInterval(t.bind(this._scrollLeft,this),o)
                },this)).mouseleave(function(){
                clearInterval(n),n=null
                }),this.scrollRight.mouseenter(t.bind(function(){
                r=setInterval(t.bind(this._scrollRight,this),o)
                },this)).mouseleave(function(){
                clearInterval(r),r=null
                }),this.swiping=!1,this.scrollRight.bind("touchstart",t.bind(this._swipeStart,this)),this.scrollRight.bind("touchend",t.bind(this._swipeEnd,this)),this.scrollRight.bind("touchmove",t.bind(this._swipeMove,this)),this.scrollLeft.bind("touchstart",t.bind(this._swipeStart,this)),this.scrollLeft.bind("touchend",t.bind(this._swipeEnd,this)),this.scrollLeft.bind("touchmove",t.bind(this._swipeMove,this)),this.holder.bind("touchstart",t.bind(this._swipeStart,this)),this.holder.bind("touchend",t.bind(this._swipeEnd,this)),this.holder.bind("touchmove",t.bind(this._swipeMove,this)),this.holder.click(t.bind(function(t){
                this.showingToaster&&t.target&&t.target.dataset.id&&t.target.dataset.embed&&(!this._tween||this._tween.isDone())&&(this._sendClickEvent(t.target.dataset.id),this.shouldPlay=!0,this.mb.publish(e.EVENTS.SET_EMBED_CODE,t.target.dataset.embed))
                },this))
            },
        _unbindListeners:function(){
            this.scrollLeft&&(this.scrollLeft.unbind("mouseenter"),this.scrollLeft.unbind("mouseleave"),this.scrollLeft.unbind("touchstart"),this.scrollLeft.unbind("touchend"),this.scrollLeft.unbind("touchmove")),this.scrollRight&&(this.scrollRight.unbind("mouseenter"),this.scrollRight.unbind("mouseleave"),this.scrollRight.unbind("touchstart"),this.scrollRight.unbind("touchend"),this.scrollRight.unbind("touchmove")),this.holder&&(this.holder.unbind("touchstart"),this.holder.unbind("touchend"),this.holder.unbind("touchmove"),this.holder.unbind("click"))
            },
        _sendDisplayEvent:function(){
            if(!this._hasRelatedVideos())return;
            this.mb.publish(e.EVENTS.DISCOVERY_API.SEND_DISPLAY_EVENT,this.relatedVideos[0].bucket_info)
            },
        _sendClickEvent:function(t){
            if(!this._hasRelatedVideos())return;
            this.mb.publish(e.EVENTS.DISCOVERY_API.SEND_CLICK_EVENT,this.relatedVideos[t].bucket_info,this._ended?"endScreen":"pauseScreen","OOYALA")
            },
        _resize:function(){
            this.rootWidth=this.rootElement.width(),this.rootHeight=this.rootElement.height(),this.toasterHeight=this.rootHeight*4/10,this.toasterRoot.css("height",this.toasterHeight),this.smallFontSize=this.toasterHeight/10>14?14:this.toasterHeight/10,this.largeFontSize=this.toasterHeight/8>16?16:this.toasterHeight/8;
            var e=this.rootElement.find("div.discovery_copy");
            e.css("font-size",this.largeFontSize+"px"),this.discoveryOuter.css("top",e.height()+12+"px"),this.discoveryOuterHeight=this.toasterHeight-(e.height()+12);
            var n=this.rootElement.find("div.discovery_image"),r=this.rootElement.find("div.discovery_image_holder");
            r.css("height",e.height()+"px");
            var s=r.height();
            n.css("bottom",s/2-i/2+"px"),this.tileHeight=this.discoveryOuterHeight,this.tileWidth=this.tileHeight*4/3,this.sliderWidth=this.tileWidth*t.size(this.relatedVideos),this.slider.css("width",this.sliderWidth),this.rootElement.find("div.discovery_video")&&this.rootElement.find("div.discovery_video").css("width",this.tileWidth)
            },
        _applyGradients:function(){
            this._isSliderAtMax()&&this.leftGradient.css("opacity",0),this._isSliderAtMin()&&this.rightGradient.css("opacity",0)
            },
        _startContinuousPlayback:function(){
            if(this._hasRelatedVideos()){
                var e=this.relatedVideos[0].embed_code,n="<div data-embed='"+e+"' class='discovery-countdown-container'>              <div class='discovery-countdown'>                <div data-id='0' data-embed='"+e+"' class='countdown-play'></div>                <div data-id='0' data-embed='"+e+"' class='countdown-inner'></div>                <div data-id='0' data-embed='"+e+"' class='countdown-mask'></div>                <div data-id='0' data-embed='"+e+"' class='countdown-mask-two'></div>              </div>            </div>",r=this.rootElement.find("div.discovery_first_video_image");
                r.append(n),n=this.rootElement.find("div.discovery-countdown"),n&&n.css("background","#"+this.accentColor.toString(16));
                var i=this.rootElement.find("div.countdown-mask");
                i&&i.css("border-top-color","#"+this.accentColor.toString(16)),this.leftGradient=this.rootElement.find("div.discovery_left_gradient"),this.rightGradient=this.rootElement.find("div.discovery_right_gradient"),this.playVideoTimer=t.delay(t.bind(this._playNextVideo,this),15e3)
                }
            },
    _removeContinuousPlayback:function(){
        this.playVideoTimer&&(clearTimeout(this.playVideoTimer),this.playVideoTimer=null);
        var e=this.rootElement.find("div.discovery-countdown-container");
        e&&e.remove()
        },
    _playNextVideo:function(){
        this.shouldPlay=!0,this.mb.publish(e.EVENTS.SET_EMBED_CODE,this.relatedVideos[0].embed_code)
        },
    _showToaster:function(e){
        this.showingToaster=!0;
        if(!this._hasRelatedVideos())return;
        this._slide(),this._sendDisplayEvent(),this._applyGradients();
        var t=e||!this._showingControls?"15px":"60px";
        this.rootElement.find("div.discovery_toaster").css("bottom",t),this.rootElement.find("div.discovery_toaster").css("opacity",1),this._bindListeners()
        },
    _hideToaster:function(){
        this._removeContinuousPlayback(),this.showingToaster=!1,this.rootElement.find("div.discovery_toaster").css("opacity",0),this._unbindListeners()
        },
    _resetToaster:function(){
        this._hideToaster(),this.holder=null,this.rootWidth=null,this.rootHeight=null,this.tileWidth=null,this.sliderWidth=null,this.toasterHeight=null,this.slider=null,this.scrollLeft=null,this.scrollRight=null,this.relatedVideos=[],this.leftGradient&&this.leftGradient.css("opacity",0),this.rightGradient&&this.rightGradient.css("opacity",0),this.rootElement.find("div.discovery_holder").empty(),this.rootElement.find("div.discovery_toaster").css("z-index",a)
        },
    _swipeStart:function(e){
        this.swiping=!0;
        var t=this._getPagePositionFromEvent(e);
        this.initialSwipeX=t[0],this.initialSwipeTime=e.timeStamp,this._tween!==null&&(this._tween.stop(),this._tween=null)
        },
    _swipeEnd:function(n){
        if(!this.swiping)return;
        var r=this._getPagePositionFromEvent(n),i=r[0],s=n.timeStamp;
        if(i!==this.initialSwipeX||s-this.initialSwipeTime>50)this._slideDistance=i-this.initialSwipeX,this._slideTime=s-this.initialSwipeTime,this._slideVelocity=this._slideDistance/this._slideTime;
        if(this._isSliderAtMax()&&this._slideVelocity>=0||this._isSliderAtMin()&&this._slideVelocity<=0){
            this.swiping=!1;
            return
        }
        this._tween=new e.Tween(this._slideVelocity,u,t.bind(this._slide,this)),this._tween.start(),this.swiping=!1
        },
    _swipeMove:function(e){
        if(!this.swiping)return;
        this._removeContinuousPlayback();
        var t=this._getPagePositionFromEvent(e),n=t[0],r=e.timeStamp;
        this._slideDistance=n-this.initialSwipeX,this._slideTime=r-this.initialSwipeTime,this._slideVelocity=this._slideDistance/this._slideTime;
        var i=n-this.initialSwipeX;
        this._slide(i),this.initialSwipeX=n,this.initialSwipeTime=e.timeStamp,e.preventDefault(),e.stopPropagation()
        },
    _getPagePositionFromEvent:function(e){
        var t=e.originalEvent||e;
        return!t.changedTouches||!t.changedTouches[0]?[t.pageX,t.pageY]:[t.changedTouches[0].pageX,t.changedTouches[0].pageY]
        },
    _xTransformPos:function(e){
        if(!e||!t.isString(e))return 0;
        var n=e.replace("matrix(","").replace(")","").replace(" ","").split(",");
        return!t.isArray(n)||t.size(n)<5?0:parseInt(e.replace("matrix(","").replace(")","").split(", ")[4],10)
        },
    _slide:function(e){
        if(!this.slider)return;
        var n=0;
        t.isNumber(e)?n=this._xTransformPos(this.slider.css("-webkit-transform"))+e:n=this._maxSlideX(),n>=this._maxSlideX()?(this.leftGradient.css("opacity",0),n=this._maxSlideX()):this.leftGradient.css("opacity",1),n<=this._minSlideX()?(this.rightGradient.css("opacity",0),n=this._minSlideX()):this.rightGradient.css("opacity",1),n<this._maxSlideX()&&n>this._minSlideX()&&this._removeContinuousPlayback(),this.slider.css("-webkit-transform","translateX("+n+"px)"),this.slider.css("-moz-transform","translateX("+n+"px)"),this.slider.css("-ms-transform","translateX("+n+"px)"),this.slider.css("transform","translateX("+n+"px)")
        },
    _isSliderAtMax:function(){
        var e=this._xTransformPos(this.slider.css("-webkit-transform"));
        return e===this._maxSlideX()
        },
    _isSliderAtMin:function(){
        var e=this._xTransformPos(this.slider.css("-webkit-transform"));
        return e===this._minSlideX()
        },
    _maxSlideX:function(){
        return 0
        },
    _minSlideX:function(){
        return this.rootWidth-this.sliderWidth-this.rootWidth/10
        },
    _scrollRight:function(){
        this._slide(-s)
        },
    _scrollLeft:function(){
        this._slide(s)
        },
    _hasRelatedVideos:function(){
        return t.isArray(this.relatedVideos)&&t.size(this.relatedVideos)>0
        }
    }),l
});
(function(e,t,n){
    e.Spinner=function(t,n,r){
        this.size=50,this.mb=t;
        if(!n||!n[0])return;
        this.div=n,this.parent=r,this.centerInParent(),this.div.append('<img class="oo_spinner_img"></img>'),this.img=this.div.find(".oo_spinner_img"),this.img.css({
            width:this.size,
            height:this.size
            }),this.img.attr({
            src:e.get_img_base64("oo_spinner")
            }),e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"Spinner",
            target:this,
            events:[{
                name:e.EVENTS.SIZE_CHANGED,
                from:"*"
            }]
            })
        },n.extend(e.Spinner.prototype,{
        onSizeChanged:function(e){
            this.centerInParent()
            },
        centerInParent:function(){
            var e=(this.parent.width()-this.size)/2,t=(this.parent.height()-this.size)/2;
            this.div.css({
                marginTop:t+"px",
                marginLeft:e+"px"
                })
            },
        play:function(){
            this.div.show()
            },
        pause:function(){
            this.div.hide()
            }
        })
})(OO,OO.$,OO._);
(function(e,t,n){
    var r=function(t,n){
        if(!e.requiredInEnvironment("android-ui"))return;
        this.Id=n,this.mb=t,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"AndroidUi",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"Init",
                to:"PlayerCreated"
            },{
                name:e.EVENTS.CONTENT_TREE_FETCHED,
                from:"*",
                to:"PromoReady"
            },{
                name:e.EVENTS.PLAYBACK_READY,
                from:"PromoReady",
                to:"PlaybackReady"
            },{
                name:e.EVENTS.INITIAL_PLAY,
                from:"*"
            },{
                name:e.EVENTS.SIZE_CHANGED,
                from:"*"
            }]
            })
        };
        
    n.extend(r.prototype,{
        onPlayerCreated:function(r,s,o){
            this.elementId=s,this.rootElement=t("#"+this.elementId+" > div"),this.params=o,this.accentColor=o.accentColor||6130397,e.attachStyle(n.template(e.get_css("basic_ui"))({
                elementId:this.elementId,
                liveIcon:e.get_img_base64("icon_live"),
                rewindIcon:e.get_img_base64("icon_rewind"),
                playIcon:e.get_img_base64("icon_play"),
                pauseIcon:e.get_img_base64("icon_pause"),
                errorIcon:e.get_img_base64("icon_error"),
                playheadIcon:e.get_img_base64("icon_playhead"),
                fullscreenOnIcon:e.get_img_base64("icon_full_off"),
                fullscreenOffIcon:e.get_img_base64("icon_full_on")
                })),this.rootElement.append("<div class='plugins' style='display:none'></div>"),this.rootElement.append('<div class="oo_promo"></div>'),this.promoUi=new i(this.rootElement.find("div.oo_promo"))
            },
        onContentTreeFetched:function(e,t){
            this.contentTree=t,this.promoUi.setBackground(this.contentTree.promo_image||this.contentTree.thumbnail_image)
            },
        onPlaybackReady:function(e,t){
            var r=this.contentTree.title;
            this.rootElement.find("div.oo_promo").bind("click",n.bind(this._promoClick,this)),this.promoUi.allowPlayback()
            },
        onInitialPlay:function(){
            this.mb.publish(e.EVENTS.PLAY)
            },
        _promoClick:function(){
            this.mb.publish(e.EVENTS.INITIAL_PLAY)
            },
        __placeholder:!0
        });
    var i=function(e){
        this.promo=e,this.init()
        };
        
    n.extend(i.prototype,{
        init:function(){
            this.promo.append("<div class='oo_start_button'><img class='oo_start_spinner'></div>");
            var t=this.promo.find("img.oo_start_spinner");
            t.attr({
                src:e.get_img_base64("icon_spinner")
                })
            },
        setBackground:function(e){
            this.promo.css("background-image","url("+e+")")
            },
        allowPlayback:function(){
            this.promo.find("div.oo_start_button").html(""),this.promo.find("div.oo_start_button").css({
                "background-image":"url("+e.get_img_base64("icon_play")+")"
                })
            }
        });
var s=function(e){
    this.container=e,this.container.append('<div class="oo_error_image"></div>'),this.container.append('<div class="oo_error_message"></div>')
    };
    
n.extend(s.prototype,{
    show:function(t){
        this.container.find("div.oo_error_message").html(e.getLocalizedMessage(t)),this.container.show()
        },
    hide:function(){
        this.container.hide()
        }
    }),e.registerModule("android_ui",function(e,t){
    return new r(e,t)
    })
})(OO,OO.$,OO._);
;
(function(e,t,n){
    var r=function(t,n){
        if(!e.requiredInEnvironment("ads"))return;
        this.Id=n,this.mb=t,this.vastPassThroughAdTagUrl=null,this.currentEmbedCode=null,this.firstAdsIsOoyala=!1,this.adsItem=null,this.adsClickThrough=!1,this.adIds=[],this.adPlayCounts={},this.ignoreClickThrough=!1,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"adsManager",
            target:this,
            events:[{
                name:e.EVENTS.PLAYER_CREATED,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.EMBED_CODE_CHANGED,
                from:"*",
                to:"Init"
            },{
                name:e.EVENTS.CONTENT_TREE_FETCHED,
                from:"Init",
                to:"WaitingForFirstAdRequest"
            },{
                name:e.EVENTS.PLAYING,
                from:"WaitingForFirstAdRequest",
                to:"readyToFetchOtherAds"
            },{
                name:e.EVENTS.WILL_PLAY_ADS,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.ADS_PLAYED,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.LOAD_ALL_VAST_ADS,
                from:"*",
                to:"*"
            },{
                name:e.EVENTS.PLAYER_CLICKED,
                from:"*",
                to:"*"
            }]
            }),this.mb.addDependent(e.EVENTS.WILL_FETCH_ADS,e.EVENTS.FIRST_AD_FETCHED,"adsManager",function(){})
        };
        
    t.extend(r.prototype,{
        onPlayerCreated:function(e,t,n){
            n.vast&&n.vast.tagUrl&&(this.vastPassThroughAdTagUrl=n.vast.tagUrl),this.ignoreClickThrough=!!n.ignoreClickThrough
            },
        onWillPlayAds:function(e,t){
            this.adsItem=t
            },
        onAdsPlayed:function(e){
            this.adsItem=null
            },
        openUrl:function(e){
            if(!e)return;
            t.defer(function(){
                window.open(e)
                })
            },
        onPlayerClicked:function(t){
            if(!this.adsItem||this.ignoreClickThrough)return;
            if(this.adsClickThrough)this.adsClickThrough=!1,this.mb.publish(e.EVENTS.PLAY);
            else{
                var n=this.adsItem.data&&this.adsItem.data.ClickThrough,r=this.adsItem.data&&this.adsItem.data.linear&&this.adsItem.data.linear.ClickThrough,i=this.adsItem.click_url;
                if(n||i||r)this.adsClickThrough=!0,this.mb.publish(e.EVENTS.ADS_CLICKED),this.openUrl(n),this.openUrl(i),this.openUrl(r),this.mb.publish(e.EVENTS.PAUSE)
                    }
                },
    onLoadAllVastAds:function(e){
        t.each(this.ads,function(e,t){
            e.type=="vast"&&!e.loader&&this._setVastAdLoader(e)
            },this)
        },
    onPlaying:function(t){
        this._incrementAdPlayCount(),this.firstAdsIsOoyala||this._checkOoyalaAdsAuth(),this.adsClickThrough=!1,this.mb.publish(e.EVENTS.LOAD_ALL_VAST_ADS)
        },
    onEmbedCodeChanged:function(e,t){
        this.currentEmbedCode=t,this.ads=[],this.prerolls=[],this.firstAdsIsOoyala=!1,this.adsItem=null
        },
    _setVastAdLoader:function(n){
        n&&n.type=="vast"&&(n.loader=new e.VastAdLoader(this.currentEmbedCode),n.loader.on(e.VastAdLoader.READY,"ads",t.bind(this._onVastReady,this)),n.loader.on(e.VastAdLoader.ERROR,"ads",t.bind(this._onVastError,this)),this.vastPassThroughAdTagUrl&&(n.origUrl=n.origUrl||n.url,n.url=this.vastPassThroughAdTagUrl),n.loader.loadUrl(n.url))
        },
    onContentTreeFetched:function(n,r){
        if(this.currentEmbedCode!==r.embed_code)return!1;
        this.ads=e.HM.safeArray("playbackControl.contentTree.ads",r.ads,[]),this.adIds=t.uniq(t.compact(t.map(this.ads,function(e){
            return e.ad_set_code||e.public_id
            }))),this.adPlayCounts=this._getAdPlayCounts(),this._filterAdsByFrequency(),this.prerolls=t.select(this.ads,function(e,t){
            return e.time!==null&&e.time<250
            },this),t.size(this.prerolls)>0?this.prerolls[0].type=="ooyala"?this._checkOoyalaAdsAuth():this.prerolls[0].type=="vast"&&this._setVastAdLoader(this.prerolls[0]):this.mb.publish(e.EVENTS.FIRST_AD_FETCHED,null)
        },
    _onVastReady:function(t,n){
        this.mb.publish(e.EVENTS.AD_CONFIG_READY,n),this.mb.publish(e.EVENTS.FIRST_AD_FETCHED,n)
        },
    _onVastError:function(n,r){
        var i=r.inlineAd&&r.inlineAd.ads[0]||r.wrapperAds;
        i&&t.each(i.error,function(t){
            e.pixelPing(t)
            },this),t.size(this.prerolls)>0&&(t.find(this.prerolls,function(e){
            return e.type=="ooyala"
            },this)?this._checkOoyalaAdsAuth():t.find(this.prerolls,function(e){
            return!e.loader
            },this)?t.each(this.prerolls,function(e){
            e.type=="vast"&&this._setVastAdLoader(e)
            },this):this.mb.publish(e.EVENTS.FIRST_AD_FETCHED,r))
        },
    _checkOoyalaAdsAuth:function(){
        var n=t.select(this.ads,function(e,n){
            return!t.isEmpty(e.ad_embed_code)
            },this),r=t.map(n,function(e,t){
            return e.ad_embed_code
            },{});
        this.firstAdsIsOoyala=!0;
        if(t.size(r)>0){
            e.d("Ooyala Ads",this.embedCodes);
            var i={
                pcode:e.playerParams.pcode||"unknown",
                embedCode:r.join(","),
                server:e.SERVER.AUTH,
                playerBrandingId:e.playerParams.playerBrandingId||"unknown",
                params:{}
        };
        
        this.mb.publish(e.EVENTS.WILL_FETCH_AD_AUTHORIZATION,i)
        }
    },
_incrementAdPlayCount:function(){
    t.each(this.adIds,function(e){
        this.adPlayCounts[e]=this.adPlayCounts[e]||0,this.adPlayCounts[e]+=1
        },this),this._setAdPlayCounts(this.adPlayCounts)
    },
_filterAdsByFrequency:function(){
    this.ads=t.reject(this.ads,function(t){
        var n=t.ad_set_code||t.public_id,r=t.first_shown,i=t.frequency;
        if(!n||r===null||r===undefined||!i||["ooyala","vast"].indexOf(t.type)<0)return!1;
        var s=!0,o=this.adPlayCounts[n]||0;
        return o>=r&&(o-r)%i===0&&(s=!1),e.log("Frequency for ad that is played:",i,"first shown:",r,"play count:",o,"in range =",!s),s
        },this),this.mb.publish(e.EVENTS.ADS_FILTERED,this.currentEmbedCode,this.ads)
    },
_getAdPlayCounts:function(){
    var n={},r=e.localStorage.getItem(e.CONSTANTS.AD_PLAY_COUNT_KEY);
    return r&&(r=r.split(e.CONSTANTS.AD_PLAY_COUNT_DIVIDER),t.each(r,function(t){
        t=t.split(e.CONSTANTS.AD_ID_TO_PLAY_COUNT_DIVIDER),t[0]!==undefined&&t[1]!==undefined&&(n[t[0]]=parseInt(t[1],10))
        })),n
    },
_setAdPlayCounts:function(n){
    n=t.map(n,function(t,n){
        return n+e.CONSTANTS.AD_ID_TO_PLAY_COUNT_DIVIDER+t
        }).join(e.CONSTANTS.AD_PLAY_COUNT_DIVIDER),e.localStorage.setItem(e.CONSTANTS.AD_PLAY_COUNT_KEY,n)
    },
__placeholder:!0
}),e.registerModule("adsManager",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
;
(function(e,t,n){
    var r=function(t){
        var r=t&&t.firstChild?t.firstChild.tagName||"":"";
        return r.toUpperCase()!="VAST"?(e.log("Invalid VAST XML for tag name: "+r),!1):n(t.firstChild).attr("version")!=="2.0"?!1:!0
        },i=["creativeView","start","midpoint","firstQuartile","thirdQuartile","complete","mute","unmute","pause","rewind","resume","fullscreen","expand","collapse","acceptInvitation","close"],s=function(){
        return{
            error:[],
            impression:[],
            linear:{},
            nonLinear:{},
            companion:[]
        }
    },o=function(e){
    return t.reject(e,function(e){
        return e===null||e===""
        },{})
    },u=function(e,r,s){
    var u=s||i;
    t.each(u,function(t){
        var i="Tracking[event="+t+"]";
        e[t]=o(r.find(i).map(function(e,t){
            return n(t).text()
            }))
        },{})
    },a=function(e){
    var t={
        tracking:{},
        ClickTracking:o(n(e).find("ClickTracking").map(function(){
            return n(this).text()
            })),
        ClickThrough:o(n(e).find("ClickThrough").map(function(){
            return n(this).text()
            })),
        CustomClick:o(n(e).find("CustomClick").map(function(){
            return n(this).text()
            }))
        },r=e.find("MediaFile");
    return u(t.tracking,e),r.size()>0&&(t.mediaFiles=o(r.map(function(e,t){
        return{
            type:n(t).attr("type").toLowerCase(),
            url:n.trim(n(t).text()),
            bitrate:n(t).attr("bitrate"),
            width:n(t).attr("width"),
            height:n(t).attr("height")
            }
        })),t.Duration=e.find("Duration").text()),t
},f=function(e){
    var n={
        tracking:{}
},r=e.find("NonLinear").eq(0);
u(n.tracking,e);
if(r.size()>0){
    var i=r.find("StaticResource"),s=r.find("IFrameResource"),o=r.find("HTMLResource");
    n.width=r.attr("width"),n.height=r.attr("height"),n.expandedWidth=r.attr("expandedWidth"),n.expandedHeight=r.attr("expandedHeight"),n.scalable=r.attr("scalable"),n.maintainAspectRatio=r.attr("maintainAspectRatio"),n.minSuggestedDuration=r.attr("minSuggestedDuration"),n.NonLinearClickThrough=r.find("NonLinearClickThrough").text(),i.size()>0?t.extend(n,{
        type:"static",
        data:i.text(),
        url:i.text()
        }):s.size()>0?t.extend(n,{
        type:"iframe",
        data:s.text(),
        url:s.text()
        }):o.size()>0&&t.extend(n,{
        type:"html",
        data:o.text(),
        htmlCode:o.text()
        })
    }
    return n
},l=function(e){
    var n={
        tracking:{}
},r=e.find("StaticResource"),i=e.find("IFrameResource"),s=e.find("HTMLResource");
return u(n.tracking,e,["creativeView"]),n.width=e.attr("width"),n.height=e.attr("height"),n.expandedWidth=e.attr("expandedWidth"),n.expandedHeight=e.attr("expandedHeight"),n.CompanionClickThrough=e.find("CompanionClickThrough").text(),r.size()>0?t.extend(n,{
    type:"static",
    data:r.text(),
    url:r.text()
    }):i.size()>0?t.extend(n,{
    type:"iframe",
    data:i.text(),
    url:i.text()
    }):s.size()>0&&t.extend(n,{
    type:"html",
    data:s.text(),
    htmlCode:s.text()
    }),n
},c=function(e,t){
    var r=s(),i=n(e).find("Linear").eq(0),u=n(e).find("NonLinearAds");
    return t==="wrapper"&&(r.VASTAdTagURI=n(e).find("VASTAdTagURI").text()),r.error=o(n(e).find("Error").map(function(){
        return n(this).text()
        })),r.impression=o(n(e).find("Impression").map(function(){
        return n(this).text()
        })),i.size()>0&&(r.linear=a(i)),u.size()>0&&(r.nonLinear=f(u)),n(e).find("Companion").map(function(e,t){
        return r.companion.push(l(n(t))),1
        }),r
    };
    
e.VastParser=function(e){
    if(!r(e))return null;
    var t=n(e).find("InLine"),i=n(e).find("Wrapper"),s={
        ads:[]
    };
    
    if(t.size()>0)s.type="inline";
    else{
        if(!(i.size()>0))return null;
        s.type="wrapper"
        }
        return n(e).find("Ad").each(function(){
        s.ads.push(c(this,s.type))
        }),s
    }
})(OO,OO._,OO.$);
(function(e,t,n){
    e.VastAdLoader=e.inherit(e.Emitter,function(t){
        this.inlineAd=null,this.currentDepth=0,this.vastAdUnit=null,this.loaded=!1,this.errorType="",this.embedCode=t||"unknown",this.loaderId="OoVastAdsLoader"+e.getRandomString(),this.wrapperAds={
            error:[],
            impression:[],
            companion:[],
            linear:{
                tracking:{},
                ClickTracking:[]
            },
            nonLinear:{
                tracking:{}
        }
    }
    }),t.extend(e.VastAdLoader,{
    ERROR:"vastError",
    READY:"vastReady",
    __placeholder:!0
    }),t.extend(e.VastAdLoader.prototype,{
    loadUrl:function(e,t){
        this.vastUrl=e,this._ajax(e,t||this._onVastError,"xml")
        },
    _ajax:function(r,i,s){
        var o=s=="script"?function(){}:null;
        n.ajax({
            url:e.getNormalizedTagUrl(r),
            type:"GET",
            beforeSend:function(e){
                e.withCredentials=!0
                },
            dataType:s,
            crossDomain:!0,
            cache:!1,
            success:o||t.bind(this._onVastResponse,this),
            error:t.bind(i,this)
            })
        },
    getVastAdUnit:function(){
        return e.safeClone(this.vastAdUnit)
        },
    _getProxyUrl:function(){
        return e.publicApi[this.loaderId]=t.bind(this._onVastProxyResult,this),e.playerParams.vast_proxy_url?[e.playerParams.vast_proxy_url,"?callback=OO.",this.loaderId,"&tag_url=",escape(this.vastUrl),"&embed_code=",this.embedCode].join(""):e.URLS.VAST_PROXY({
            cb:"OO."+this.loaderId,
            embedCode:this.embedCode,
            expires:(new Date).getTime()+1e3,
            tagUrl:escape(this.vastUrl)
            })
        },
    _onVastError:function(t){
        this.errorType="directAjaxFailed",this._ajax(this._getProxyUrl(),this._onFinalError,"script"),this.trigger(e.VastAdLoader.ERROR,this)
        },
    _onFinalError:function(){
        this.errorType="proxyAjaxFailed",this.trigger(e.VastAdLoader.ERROR,this)
        },
    _extractStreamForType:function(n,r){
        var i=[];
        switch(r){
            case"webm":
                i.push("video/webm");
                break;
            case"mp4":
                i.push("video/mp4"),e.isIos&&i.push("video/quicktime")
                }
                var s=t.find(n,function(e){
            return i.indexOf(e.type)>=0
            },this);
        return s?s.url:null
        },
    _handleLinearAd:function(){
        var n=t.find(this.inlineAd.ads,function(e){
            return!t.isEmpty(e.linear.mediaFiles)
            },this);
        if(!n)return!1;
        var r=n.linear.mediaFiles,i=t.max(r,function(e){
            return parseInt(e.bitrate,10)
            });
        return this.vastAdUnit.maxBitrateStream=i&&i.url,this.vastAdUnit.durationInMilliseconds=e.timeStringToSeconds(n.linear.Duration)*1e3,e.supportedVideoTypes.webm&&(this.vastAdUnit.streamUrl=this._extractStreamForType(r,"webm")),this.vastAdUnit.streamUrl==null&&e.supportedVideoTypes.mp4&&(this.vastAdUnit.streamUrl=this._extractStreamForType(r,"mp4")),this.vastAdUnit.streamUrl==null&&e.supportedVideoTypes.m3u8&&e.log("extrac m3u8 stream here"),t.extend(this.vastAdUnit.data,n),this.vastAdUnit.data.tracking=n.linear.tracking,this.vastAdUnit.streamUrl==null?(e.log("Can not find playable stream in vast result",this.inlineAd),!1):!0
        },
    _mergeVastAdResult:function(){
        this.vastAdUnit={
            data:{},
            vastUrl:this.vastUrl,
            maxBitrateStream:null
        },t.each(this.inlineAd.ads,function(e){
            e.error=this.wrapperAds.error.concat(e.error),e.impression=this.wrapperAds.impression.concat(e.impression),e.companion=this.wrapperAds.companion.concat(e.companion),this.wrapperAds.linear.ClickTracking&&(e.linear.ClickTracking=this.wrapperAds.linear.ClickTracking.concat(e.linear.ClickTracking||[])),this.wrapperAds.linear.tracking&&(e.linear.tracking||(e.linear.tracking={}),t.each(this.wrapperAds.linear.tracking,function(t,n){
                e.linear.tracking[n]=e.linear.tracking[n]?t.concat(e.linear.tracking[n]):t
                })),this.wrapperAds.nonLinear.tracking&&(e.nonLinear.tracking||(e.nonLinear.tracking={}),t.each(this.wrapperAds.nonLinear.tracking,function(t,n){
                e.nonLinear.tracking[n]=e.nonLinear.tracking[n]?t.concat(e.nonLinear.tracking[n]):t
                }))
            },this)
        },
    _onVastProxyResult:function(e){
        var t=n.parseXML(e);
        this._onVastResponse(t)
        },
    _onVastResponse:function(n){
        var r=e.VastParser(n);
        if(!r)this.errorType="parseError",this.trigger(e.VastAdLoader.ERROR,this);
        else if(r.type=="wrapper"){
            this.currentDepth++;
            if(this.currentDepth<e.playerParams.maxVastWrapperDepth){
                var i=r.ads[0],s=this.wrapperAds;
                e.log("vast tag url is",i.VASTAdTagURI,this.currentDepth),i?(this.wrapperAds.error=this.wrapperAds.error.concat(i.error),this.wrapperAds.impression=this.wrapperAds.impression.concat(i.impression),this.wrapperAds.companion=this.wrapperAds.companion.concat(i.companion),this.wrapperAds.linear.ClickTracking=this.wrapperAds.linear.ClickTracking.concat(i.linear.ClickTracking),t.each(i.linear.tracking,function(e,t){
                    s.linear.tracking[t]=s.linear.tracking[t]?e.concat(s.linear.tracking[t]):e
                    }),t.each(i.nonLinear.tracking,function(e,t){
                    s.nonLinear.tracking[t]=s.nonLinear.tracking[t]?e.concat(s.nonLinear.tracking[t]):e
                    }),this._ajax(i.VASTAdTagURI,this._onFinalError,"xml")):(this.errorType="wrapperParseError",this.trigger(e.VastAdLoader.ERROR,this))
                }else e.log("Max wrapper depth reached.",this.currentDepth,e.playerParams.maxVastWrapperDepth),this.errorType="tooManyWrapper",this.trigger(e.VastAdLoader.ERROR,this)
                }else r.type=="inline"&&(this.inlineAd=r,this._mergeVastAdResult(),this._handleLinearAd()?(this.loaded=!0,this.trigger(e.VastAdLoader.READY,this)):(this.errorType="noLinearAd",this.trigger(e.VastAdLoader.ERROR,this)))
            },
    __placeholder:!0
    })
})(OO,OO._,OO.$);
(function(e,t,n){
    var r=function(t,n){
        if(!e.requiredInEnvironment("ads"))return;
        this.Id=n,this.mb=t,this.currentVastAd=null,this.pingedKey={},this.pauseClicked=!1,this.isMuted=!1,e.StateMachine.create({
            initial:"Init",
            messageBus:this.mb,
            moduleName:"vastPings",
            target:this,
            events:[{
                name:e.EVENTS.PLAY_STREAM,
                from:"*"
            },{
                name:e.EVENTS.PLAY_MIDROLL_STREAM,
                from:"*"
            },{
                name:e.EVENTS.STREAM_PLAYED,
                from:"*"
            },{
                name:e.EVENTS.MIDROLL_STREAM_PLAYED,
                from:"*"
            },{
                name:e.EVENTS.FULLSCREEN_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.VOLUME_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.PAUSED,
                from:"*"
            },{
                name:e.EVENTS.PLAYHEAD_TIME_CHANGED,
                from:"*"
            },{
                name:e.EVENTS.ADS_CLICKED,
                from:"*"
            }]
            })
        };
        
    t.extend(r.prototype,{
        onFullscreenChanged:function(e,t){
            if(this.currentVastAd==null)return;
            this._vastTrackings(t?"fullscreen":"collapse")
            },
        onVolumeChanged:function(e,t){
            if(this.currentVastAd==null)return;
            var n=t==0;
            this._vastTrackings(n&&!this.isMuted?"mute":"unmute"),this.isMuted=n
            },
        onAdsClicked:function(){
            if(this.currentVastAd){
                var t=this.currentVastAd.data&&this.currentVastAd.data.linear&&this.currentVastAd.data.linear.ClickTracking;
                e.log("Click Tracking:",t),t&&e.pixelPings(t)
                }
            },
    onPaused:function(){
        this.pauseClicked=!0,this.currentVastAd&&this._vastTrackings("pause")
        },
    onPlayStream:function(e,t,n){
        this.pauseClicked?this._itemResumePlay(n):this._itemStartPlay(n)
        },
    onPlayMidrollStream:function(e,t,n){
        this.pauseClicked?this._itemResumePlay(n):this._itemStartPlay(n)
        },
    onStreamPlayed:function(e){
        this._itemPlayed()
        },
    onMidrollStreamPlayed:function(e,t){
        this._itemPlayed()
        },
    onPlayheadTimeChanged:function(e,t,n){
        if(this.currentVastAd==null||n==0)return;
        t>n*.75?this._vastTrackings("thirdQuartile"):t>n*.5?this._vastTrackings("midpoint"):t>n*.25&&this._vastTrackings("firstQuartile")
        },
    _itemStartPlay:function(t){
        if(t.type!="ad"||!t.item)return;
        this.currentVastAd=t.item,e.pixelPings(this.currentVastAd.tracking_url);
        if(t.item.type!="vast")return;
        this.currentVastAd.data&&(this.pingedKey={},e.pixelPings(this.currentVastAd.data.impression),this._vastTrackings("start"),this._vastTrackings("creativeView")),this.pauseClicked=!1
        },
    _itemResumePlay:function(e){
        this.currentVastAd&&this._vastTrackings("resume"),this.pauseClicked=!1
        },
    _itemPlayed:function(){
        this.currentVastAd&&this.currentVastAd.data&&this.currentVastAd.data.tracking&&e.pixelPings(this.currentVastAd.data.tracking.complete),this._vastTrackings("complete"),this.currentVastAd=null
        },
    _vastTrackings:function(t){
        if(this.pingedKey[t]==1)return;
        this.pingedKey[t]=1,this.currentVastAd&&this.currentVastAd.data&&this.currentVastAd.data.tracking&&e.pixelPings(this.currentVastAd.data.tracking[t])
        },
    __placeholder:!0
    }),e.registerModule("vastPings",function(e,t){
    return new r(e,t)
    })
})(OO,OO._,OO.$);
;
OO.exposeStaticApi('EVENTS',OO.EVENTS);
OO.publicApi.$=OO.$;
OO.publicApi._=OO._;
OO.publicApi.__static.apiReady=true;
OO.$(document).ready(function(){
    OO.publicApi.__static.docReady=true;
    OO.tryCallReady();
});
}());
}catch(err){
    if(err&&window.console&&window.console.log){
        window.console.log(err,err.stack);
    }
};



