(function($){
    var profile=$.profile=start;
    var stats,statsIndex,savedInit;
    $.extend(profile,{
        done:function(){
            this.stop();
            this.report()
            },
        start:start,
        reset:reset,
        report:function(options){
            options=options||{};
            
            stats.sort(function(a,b){
                return b.total-a.total
                });
            var rows=[],ellipsisPattern=new RegExp('(.{'+(options.maxSelectorLength||20)+'}).*');
            rows.push(['Selector','Count','Total','Avg+/-stddev']);
            for(var i=0;i<Math.min(options.limit||10,stats.length);i++){
                var entry=stats[i],n=entry.count,x=entry.total/n,sd=Math.sqrt((n*entry.squares-x*x)/(n*(n-1)));
                rows.push([entry.selector.replace(ellipsisPattern,'$1...'),n,entry.total+'ms',(x+(n>1?'ms+/-'+sd:'ms')).replace(/(\.\d\d)\d+/g,'$1')]);
            }
            this.printTable(rows,{
                0:{
                    align:'left'
                },
                3:{
                    align:'left'
                }
            });
    },
    printTable:function(rows,options){
        var widths=[],padstr=' ';
        for(var i=0;i<rows.length;i++)
            for(var j=0;j<rows[i].length;j++)
                widths[j]=Math.max(widths[j]||0,String(rows[i][j]).length);
        for(var i=0;i<rows.length;i++){
            var row=rows[i],fields=[];
            for(var j=0;j<row.length;j++){
                var padlen=widths[j]-String(row[j]).length;
                while(padstr.length<padlen)padstr+=padstr;
                var pad=padstr.slice(0,padlen),left=(options[j]||{}).align=='left';
                left||fields.push(pad);
                fields.push(row[j]);
                left&&fields.push(pad);
            }
            console.info(fields.join(' '));
        }
        },
    stop:function(){
        if(savedInit){
            jQuery.fn.init=savedInit;
            savedInit=null;
        }
    }
});
profile.start=start;
function start(){
    reset();
    $(function(){
        if(window.location.search.match(/[\?&]jquery.profile.start\b/)){
            $(document.body).append($("<button onclick='$.profile.done(); $(this).remove();' style='position: absolute; right: 0px; top: 0px; z-index: 9001' />").html("Stop Profiling<br/>(Output to Console)"));
        }
    });
savedInit=jQuery.fn.init;
jQuery.fn.init=jQuery.prototype.init=function(selector,context,rootjQuery){
    context=context||window.document;
    var t0=new Date;
    var result=new savedInit(selector,context,rootjQuery);
    var dt=new Date-t0;
    if(typeof selector=='string'){
        var entry=statsIndex[selector];
        if(!entry){
            entry=statsIndex[selector]={
                selector:selector,
                count:0,
                total:0,
                squares:0
            }
            stats.push(entry);
        }
        entry.count+=1;
        entry.total+=dt;
        entry.squares+=dt*dt;
    }
    return result;
};

console.info("jQuery profiling started...");
}
function reset(){
    stats=[];
    statsIndex={};

}
})(jQuery);
if(window.location.search.match(/[\?&]jquery.profile.start\b/))
    jQuery.profile();
;



if(!('trim'in String.prototype)){
    String.prototype.trim=function(){
        return this.replace(/^\s+/,'').replace(/\s+$/,'');
    };
    
}
if(!('indexOf'in Array.prototype)){
    Array.prototype.indexOf=function(find,i){
        if(i===undefined)i=0;
        if(i<0)i+=this.length;
        if(i<0)i=0;
        for(var n=this.length;i<n;i++)
            if(i in this&&this[i]===find)
                return i;return-1;
    };
    
}
if(!('lastIndexOf'in Array.prototype)){
    Array.prototype.lastIndexOf=function(find,i){
        if(i===undefined)i=this.length-1;
        if(i<0)i+=this.length;
        if(i>this.length-1)i=this.length-1;
        for(i++;i-->0;)
            if(i in this&&this[i]===find)
                return i;return-1;
    };
    
}
if(!('forEach'in Array.prototype)){
    Array.prototype.forEach=function(action,that){
        for(var i=0,n=this.length;i<n;i++)
            if(i in this)
                action.call(that,this[i],i,this);
        };
    
}
if(!('map'in Array.prototype)){
    Array.prototype.map=function(mapper,that){
        var other=new Array(this.length);
        for(var i=0,n=this.length;i<n;i++)
            if(i in this)
                other[i]=mapper.call(that,this[i],i,this);return other;
    };
    
}
if(!('filter'in Array.prototype)){
    Array.prototype.filter=function(filter,that){
        var other=[],v;
        for(var i=0,n=this.length;i<n;i++)
            if(i in this&&filter.call(that,v=this[i],i,this))
                other.push(v);return other;
    };
    
}
if(!('every'in Array.prototype)){
    Array.prototype.every=function(tester,that){
        for(var i=0,n=this.length;i<n;i++)
            if(i in this&&!tester.call(that,this[i],i,this))
                return false;return true;
    };
    
}
if(!('some'in Array.prototype)){
    Array.prototype.some=function(tester,that){
        for(var i=0,n=this.length;i<n;i++)
            if(i in this&&tester.call(that,this[i],i,this))
                return true;return false;
    };
    
}
if(!Object.keys){
    Object.keys=(function(){
        'use strict';
        var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!({
            toString:null
        }).propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;
        return function(obj){
            if(typeof obj!=='object'&&(typeof obj!=='function'||obj===null)){
                throw new TypeError('Object.keys called on non-object');
            }
            var result=[],prop,i;
            for(prop in obj){
                if(hasOwnProperty.call(obj,prop)){
                    result.push(prop);
                }
            }
        if(hasDontEnumBug){
            for(i=0;i<dontEnumsLength;i++){
                if(hasOwnProperty.call(obj,dontEnums[i])){
                    result.push(dontEnums[i]);
                }
            }
            }
    return result;
    };

}());
}
function hashKeys(obj){
    var keys=[];
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            keys.push(key);
        }
    }
return keys;
}
jQuery.getCachedScript=function(url,options){
    options=jQuery.extend(options||{},{
        dataType:"script",
        cache:true,
        url:url
    });
    return jQuery.ajax(options);
};

jQuery.expr.filters.onscreen=function(el){
    return((jQuery(el).offset().left+jQuery(el).width()>0)&&(jQuery(el).offset().top+jQuery(el).height()>0)&&(jQuery(el).offset().left<window.innerWidth)&&(jQuery(el).offset().top<(jQuery(window).scrollTop()+window.innerHeight)));
};

jQuery.expr.filters.lazyloadable=function(el){
    var threshold=250;
    if(window.innerHeight!=undefined)
        var innerHeight=window.innerHeight;
    else{
        var b=document.body;
        var d=document.documentElement;
        var innerHeight=Math.max(d.clientHeight,b.clientHeight);
    }
    return(jQuery(el).offset().top<(jQuery(window).scrollTop()+innerHeight+threshold));
};

function is_touch_device(){
    return!!('ontouchstart'in window);
}
function toFuzzyDate(date_str,utc_time){
    var time_formats=[[60,'just now',''],[120,'1 minute ago','1 minute from now'],[3600,'minutes',60],[7200,'1 hour ago','1 hour from now'],[86400,'hours',3600],[172800,'yesterday','tomorrow'],[604800,'days',86400],[1209600,'last week','next week'],[2419200,'weeks',604800],[4838400,'last month','next month'],[29030400,'months',2419200],[58060800,'last year','next year'],[2903040000,'years',29030400],[5806080000,'last century','next century'],[58060800000,'centuries',2903040000]];
    var time=(''+date_str).replace(/-/g,"/").replace(/[TZ]/g," ").replace(/^\s\s*/,'').replace(/\s\s*$/,'');
    if(time.substr(time.length-4,1)==".")time=time.substr(0,time.length-4);
    var seconds;
    if(utc_time){
        var d=new Date();
        var localOffset=d.getTimezoneOffset()*60000;
        var utcTime=d.getTime()+localOffset;
        var offsetTime=new Date(time).getTime();
        seconds=(utcTime-offsetTime)/1000;
    }else
        seconds=(new Date-new Date(time))/1000;
    var token='ago';
    var list_choice=1;
    if(seconds<0){
        seconds=Math.abs(seconds);
        token='from now';
        list_choice=2;
    }
    var i=0,format;
    while(format=time_formats[i++])
        if(seconds<format[0]){
            if(typeof format[2]=='string')
                return format[list_choice];else
                return Math.floor(seconds/format[2])+' '+format[1]+' '+token;
        }
    return time;
}
function decode_base64(s){
    var e={},i,k,v=[],r='',w=String.fromCharCode;
    var n=[[65,91],[97,123],[48,58],[43,44],[47,48]];
    for(z in n){
        for(i=n[z][0];i<n[z][1];i++){
            v.push(w(i));
        }
        }
for(i=0;i<64;i++){
    e[v[i]]=i;
}
for(i=0;i<s.length;i+=72){
    var b=0,c,x,l=0,o=s.substring(i,i+72);
    for(x=0;x<o.length;x++){
        c=e[o.charAt(x)];
        b=(b<<6)+c;
        l+=6;
        while(l>=8){
            r+=w((b>>>(l-=8))%256);
        }
    }
    }
return r;
};

function insertUrlParam(url,key,value){
    key=encodeURI(key);
    value=encodeURI(value);
    var paramsIndex=url.indexOf('?');
    if(paramsIndex>-1)
        params=url.substr(paramsIndex+1).split('&');else
        params=[]
    var i=params.length;
    var param;
    while(i--){
        param=params[i].split('=');
        if(param[0]==key){
            param[1]=value;
            params[i]=param.join('=');
            break;
        }
    }
if(i<0){
    params[params.length]=[key,value].join('=');
}
if(paramsIndex>-1)
    url=url.substr(0,paramsIndex+1)+params.join('&');else
    url=url+'?'+params.join('&');
return url;
}
jQuery.fn.transformTextNode=function(pattern,transformFunc,validateFunc){
    function innerTransformTextNode(node,pat,transformFunc,validateFunc){
        var skip=0;
        if(node.nodeType==3){
            var pos=node.data.toUpperCase().indexOf(pat);
            if(pos>=0){
                var validated=true;
                if(validateFunc)
                    validated=validateFunc(pat,pos,node);
                if(validated){
                    var middlebit=node.splitText(pos);
                    var endbit=middlebit.splitText(pat.length);
                    var newNode=transformFunc(middlebit.cloneNode(true));
                    middlebit.parentNode.replaceChild(newNode,middlebit);
                    skip=1;
                }
            }
        }else if(node.nodeType==1&&node.childNodes&&!/(script|style)/i.test(node.tagName)){
    if(node.tagName=='A')
        return skip;
    for(var i=0;i<node.childNodes.length;++i){
        i+=innerTransformTextNode(node.childNodes[i],pat,transformFunc,validateFunc);
    }
    }
return skip;
}
return this.length&&pattern&&pattern.length&&transformFunc?this.each(function(){
    innerTransformTextNode(this,pattern.toUpperCase(),transformFunc,validateFunc);
}):this;
}
function checkQuerystringKey(keyName){
    var href=window.location.href;
    if(href.indexOf('?'+keyName)>-1){
        return true;
    }else if(href.indexOf('&'+keyName)>-1){
        return true;
    }
    return false;
};



/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.3 (Tue, 23 Oct 2012)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(window,document,$,undefined){
    "use strict";
    var W=$(window),D=$(document),F=$.fancybox=function(){
        F.open.apply(this,arguments);
    },didUpdate=null,isTouch=document.createTouch!==undefined,isQuery=function(obj){
        return obj&&obj.hasOwnProperty&&obj instanceof $;
    },isString=function(str){
        return str&&$.type(str)==="string";
    },isPercentage=function(str){
        return isString(str)&&str.indexOf('%')>0;
    },isScrollable=function(el){
        return(el&&!(el.style.overflow&&el.style.overflow==='hidden')&&((el.clientWidth&&el.scrollWidth>el.clientWidth)||(el.clientHeight&&el.scrollHeight>el.clientHeight)));
    },getScalar=function(orig,dim){
        var value=parseInt(orig,10)||0;
        if(dim&&isPercentage(orig)){
            value=F.getViewport()[dim]/100*value;
        }
        return Math.ceil(value);
    },getValue=function(value,dim){
        return getScalar(value,dim)+'px';
    };
    
    $.extend(F,{
        version:'2.1.3',
        defaults:{
            padding:15,
            margin:20,
            width:800,
            height:600,
            minWidth:100,
            minHeight:100,
            maxWidth:9999,
            maxHeight:9999,
            autoSize:true,
            autoHeight:false,
            autoWidth:false,
            autoResize:true,
            autoCenter:!isTouch,
            fitToView:true,
            aspectRatio:false,
            topRatio:0.5,
            leftRatio:0.5,
            scrolling:'auto',
            wrapCSS:'',
            arrows:true,
            closeBtn:true,
            closeClick:false,
            nextClick:false,
            mouseWheel:true,
            autoPlay:false,
            playSpeed:3000,
            preload:3,
            modal:false,
            loop:true,
            ajax:{
                dataType:'html',
                headers:{
                    'X-fancyBox':true
                }
            },
        iframe:{
            scrolling:'auto',
            preload:true
        },
        swf:{
            wmode:'transparent',
            allowfullscreen:'true',
            allowscriptaccess:'always'
        },
        keys:{
            next:{
                13:'left',
                34:'up',
                39:'left',
                40:'up'
            },
            prev:{
                8:'right',
                33:'down',
                37:'right',
                38:'down'
            },
            close:[27],
            play:[32],
            toggle:[70]
            },
        direction:{
            next:'left',
            prev:'right'
        },
        scrollOutside:true,
        index:0,
        type:null,
        href:null,
        content:null,
        title:null,
        tpl:{
            wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
            image:'<img class="fancybox-image" src="{href}" alt="" />',
            iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+($.browser.msie?' allowtransparency="true"':'')+'></iframe>',
            error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
            closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
            next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
            prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        openEffect:'fade',
        openSpeed:250,
        openEasing:'swing',
        openOpacity:true,
        openMethod:'zoomIn',
        closeEffect:'fade',
        closeSpeed:250,
        closeEasing:'swing',
        closeOpacity:true,
        closeMethod:'zoomOut',
        nextEffect:'elastic',
        nextSpeed:250,
        nextEasing:'swing',
        nextMethod:'changeIn',
        prevEffect:'elastic',
        prevSpeed:250,
        prevEasing:'swing',
        prevMethod:'changeOut',
        helpers:{
            overlay:true,
            title:true
        },
        onCancel:$.noop,
        beforeLoad:$.noop,
        afterLoad:$.noop,
        beforeShow:$.noop,
        afterShow:$.noop,
        beforeChange:$.noop,
        beforeClose:$.noop,
        afterClose:$.noop
        },
    group:{},
    opts:{},
    previous:null,
    coming:null,
    current:null,
    isActive:false,
    isOpen:false,
    isOpened:false,
    wrap:null,
    skin:null,
    outer:null,
    inner:null,
    player:{
        timer:null,
        isActive:false
    },
    ajaxLoad:null,
    imgPreload:null,
    transitions:{},
    helpers:{},
    open:function(group,opts){
        if(!group){
            return;
        }
        if(!$.isPlainObject(opts)){
            opts={};
        
    }
    if(false===F.close(true)){
        return;
    }
    if(!$.isArray(group)){
        group=isQuery(group)?$(group).get():[group];
    }
    $.each(group,function(i,element){
        var obj={},href,title,content,type,rez,hrefParts,selector;
        if($.type(element)==="object"){
            if(element.nodeType){
                element=$(element);
            }
            if(isQuery(element)){
                obj={
                    href:element.data('fancybox-href')||element.attr('href'),
                    title:element.data('fancybox-title')||element.attr('title'),
                    isDom:true,
                    element:element
                };
                
                if($.metadata){
                    $.extend(true,obj,element.metadata());
                }
            }else{
            obj=element;
        }
    }
    href=opts.href||obj.href||(isString(element)?element:null);
        title=opts.title!==undefined?opts.title:obj.title||'';
        content=opts.content||obj.content;
        type=content?'html':(opts.type||obj.type);
        if(!type&&obj.isDom){
        type=element.data('fancybox-type');
        if(!type){
            rez=element.prop('class').match(/fancybox\.(\w+)/);
            type=rez?rez[1]:null;
        }
    }
    if(isString(href)){
        if(!type){
            if(F.isImage(href)){
                type='image';
            }else if(F.isSWF(href)){
                type='swf';
            }else if(href.charAt(0)==='#'){
                type='inline';
            }else if(isString(element)){
                type='html';
                content=element;
            }
        }
    if(type==='ajax'){
        hrefParts=href.split(/\s+/,2);
        href=hrefParts.shift();
        selector=hrefParts.shift();
    }
}
if(!content){
    if(type==='inline'){
        if(href){
            content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,''):href);
        }else if(obj.isDom){
            content=element;
        }
    }else if(type==='html'){
    content=href;
}else if(!type&&!href&&obj.isDom){
    type='inline';
    content=element;
}
}
$.extend(obj,{
    href:href,
    type:type,
    content:content,
    title:title,
    selector:selector
});
group[i]=obj;
});
F.opts=$.extend(true,{},F.defaults,opts);
if(opts.keys!==undefined){
    F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false;
}
F.group=group;
return F._start(F.opts.index);
},
cancel:function(){
    var coming=F.coming;
    if(!coming||false===F.trigger('onCancel')){
        return;
    }
    F.hideLoading();
    if(F.ajaxLoad){
        F.ajaxLoad.abort();
    }
    F.ajaxLoad=null;
    if(F.imgPreload){
        F.imgPreload.onload=F.imgPreload.onerror=null;
    }
    if(coming.wrap){
        coming.wrap.stop(true,true).trigger('onReset').remove();
    }
    F.coming=null;
    if(!F.current){
        F._afterZoomOut(coming);
    }
},
close:function(event){
    F.cancel();
    if(false===F.trigger('beforeClose')){
        return;
    }
    F.unbindEvents();
    if(!F.isActive){
        return;
    }
    if(!F.isOpen||event===true){
        $('.fancybox-wrap').stop(true).trigger('onReset').remove();
        F._afterZoomOut();
    }else{
        F.isOpen=F.isOpened=false;
        F.isClosing=true;
        $('.fancybox-item, .fancybox-nav').remove();
        F.wrap.stop(true,true).removeClass('fancybox-opened');
        F.transitions[F.current.closeMethod]();
    }
},
play:function(action){
    var clear=function(){
        clearTimeout(F.player.timer);
    },set=function(){
        clear();
        if(F.current&&F.player.isActive){
            F.player.timer=setTimeout(F.next,F.current.playSpeed);
        }
    },stop=function(){
    clear();
    $('body').unbind('.player');
    F.player.isActive=false;
    F.trigger('onPlayEnd');
},start=function(){
    if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){
        F.player.isActive=true;
        $('body').bind({
            'afterShow.player onUpdate.player':set,
            'onCancel.player beforeClose.player':stop,
            'beforeLoad.player':clear
        });
        set();
        F.trigger('onPlayStart');
    }
};

if(action===true||(!F.player.isActive&&action!==false)){
    start();
}else{
    stop();
}
},
next:function(direction){
    var current=F.current;
    if(current){
        if(!isString(direction)){
            direction=current.direction.next;
        }
        F.jumpto(current.index+1,direction,'next');
    }
},
prev:function(direction){
    var current=F.current;
    if(current){
        if(!isString(direction)){
            direction=current.direction.prev;
        }
        F.jumpto(current.index-1,direction,'prev');
    }
},
jumpto:function(index,direction,router){
    var current=F.current;
    if(!current){
        return;
    }
    index=getScalar(index);
    F.direction=direction||current.direction[(index>=current.index?'next':'prev')];
    F.router=router||'jumpto';
    if(current.loop){
        if(index<0){
            index=current.group.length+(index%current.group.length);
        }
        index=index%current.group.length;
    }
    if(current.group[index]!==undefined){
        F.cancel();
        F._start(index);
    }
},
reposition:function(e,onlyAbsolute){
    var current=F.current,wrap=current?current.wrap:null,pos;
    if(wrap){
        pos=F._getPosition(onlyAbsolute);
        if(e&&e.type==='scroll'){
            delete pos.position;
            wrap.stop(true,true).animate(pos,200);
        }else{
            wrap.css(pos);
            current.pos=$.extend({},current.dim,pos);
        }
    }
},
update:function(e){
    var type=(e&&e.type),anyway=!type||type==='orientationchange';
    if(anyway){
        clearTimeout(didUpdate);
        didUpdate=null;
    }
    if(!F.isOpen||didUpdate){
        return;
    }
    didUpdate=setTimeout(function(){
        var current=F.current;
        if(!current||F.isClosing){
            return;
        }
        F.wrap.removeClass('fancybox-tmp');
        if(anyway||type==='load'||(type==='resize'&&current.autoResize)){
            F._setDimension();
        }
        if(!(type==='scroll'&&current.canShrink)){
            F.reposition(e);
        }
        F.trigger('onUpdate');
        didUpdate=null;
    },(anyway&&!isTouch?0:300));
},
toggle:function(action){
    if(F.isOpen){
        F.current.fitToView=$.type(action)==="boolean"?action:!F.current.fitToView;
        if(isTouch){
            F.wrap.removeAttr('style').addClass('fancybox-tmp');
            F.trigger('onUpdate');
        }
        F.update();
    }
},
hideLoading:function(){
    D.unbind('.loading');
    $('#fancybox-loading').remove();
},
showLoading:function(){
    var el,viewport;
    F.hideLoading();
    el=$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');
    D.bind('keydown.loading',function(e){
        if((e.which||e.keyCode)===27){
            e.preventDefault();
            F.cancel();
        }
    });
if(!F.defaults.fixed){
    viewport=F.getViewport();
    el.css({
        position:'absolute',
        top:(viewport.h*0.5)+viewport.y,
        left:(viewport.w*0.5)+viewport.x
        });
}
},
getViewport:function(){
    var locked=(F.current&&F.current.locked)||false,rez={
        x:W.scrollLeft(),
        y:W.scrollTop()
        };
        
    if(locked){
        rez.w=locked[0].clientWidth;
        rez.h=locked[0].clientHeight;
    }else{
        rez.w=isTouch&&window.innerWidth?window.innerWidth:W.width();
        rez.h=isTouch&&window.innerHeight?window.innerHeight:W.height();
    }
    return rez;
},
unbindEvents:function(){
    if(F.wrap&&isQuery(F.wrap)){
        F.wrap.unbind('.fb');
    }
    D.unbind('.fb');
    W.unbind('.fb');
},
bindEvents:function(){
    var current=F.current,keys;
    if(!current){
        return;
    }
    W.bind('orientationchange.fb'+(isTouch?'':' resize.fb')+(current.autoCenter&&!current.locked?' scroll.fb':''),F.update);
    keys=current.keys;
    if(keys){
        D.bind('keydown.fb',function(e){
            var code=e.which||e.keyCode,target=e.target||e.srcElement;
            if(code===27&&F.coming){
                return false;
            }
            if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is('[contenteditable]')))){
                $.each(keys,function(i,val){
                    if(current.group.length>1&&val[code]!==undefined){
                        F[i](val[code]);
                        e.preventDefault();
                        return false;
                    }
                    if($.inArray(code,val)>-1){
                        F[i]();
                        e.preventDefault();
                        return false;
                    }
                });
        }
        });
}
if($.fn.mousewheel&&current.mouseWheel){
    F.wrap.bind('mousewheel.fb',function(e,delta,deltaX,deltaY){
        var target=e.target||null,parent=$(target),canScroll=false;
        while(parent.length){
            if(canScroll||parent.is('.fancybox-skin')||parent.is('.fancybox-wrap')){
                break;
            }
            canScroll=isScrollable(parent[0]);
            parent=$(parent).parent();
        }
        if(delta!==0&&!canScroll){
            if(F.group.length>1&&!current.canShrink){
                if(deltaY>0||deltaX>0){
                    F.prev(deltaY>0?'down':'left');
                }else if(deltaY<0||deltaX<0){
                    F.next(deltaY<0?'up':'right');
                }
                e.preventDefault();
            }
        }
    });
}
},
trigger:function(event,o){
    var ret,obj=o||F.coming||F.current;
    if(!obj){
        return;
    }
    if($.isFunction(obj[event])){
        ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1));
    }
    if(ret===false){
        return false;
    }
    if(obj.helpers){
        $.each(obj.helpers,function(helper,opts){
            if(opts&&F.helpers[helper]&&$.isFunction(F.helpers[helper][event])){
                opts=$.extend(true,{},F.helpers[helper].defaults,opts);
                F.helpers[helper][event](opts,obj);
            }
        });
}
$.event.trigger(event+'.fb');
},
isImage:function(str){
    return isString(str)&&str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i);
},
isSWF:function(str){
    return isString(str)&&str.match(/\.(swf)((\?|#).*)?$/i);
},
_start:function(index){
    var coming={},obj,href,type,margin,padding;
    index=getScalar(index);
    obj=F.group[index]||null;
    if(!obj){
        return false;
    }
    coming=$.extend(true,{},F.opts,obj);
    margin=coming.margin;
    padding=coming.padding;
    if($.type(margin)==='number'){
        coming.margin=[margin,margin,margin,margin];
    }
    if($.type(padding)==='number'){
        coming.padding=[padding,padding,padding,padding];
    }
    if(coming.modal){
        $.extend(true,coming,{
            closeBtn:false,
            closeClick:false,
            nextClick:false,
            arrows:false,
            mouseWheel:false,
            keys:null,
            helpers:{
                overlay:{
                    closeClick:false
                }
            }
        });
}
if(coming.autoSize){
    coming.autoWidth=coming.autoHeight=true;
}
if(coming.width==='auto'){
    coming.autoWidth=true;
}
if(coming.height==='auto'){
    coming.autoHeight=true;
}
coming.group=F.group;
coming.index=index;
F.coming=coming;
if(false===F.trigger('beforeLoad')){
    F.coming=null;
    return;
}
type=coming.type;
href=coming.href;
if(!type){
    F.coming=null;
    if(F.current&&F.router&&F.router!=='jumpto'){
        F.current.index=index;
        return F[F.router](F.direction);
    }
    return false;
}
F.isActive=true;
if(type==='image'||type==='swf'){
    coming.autoHeight=coming.autoWidth=false;
    coming.scrolling='visible';
}
if(type==='image'){
    coming.aspectRatio=true;
}
if(type==='iframe'&&isTouch){
    coming.scrolling='scroll';
}
coming.wrap=$(coming.tpl.wrap).addClass('fancybox-'+(isTouch?'mobile':'desktop')+' fancybox-type-'+type+' fancybox-tmp '+coming.wrapCSS).appendTo(coming.parent||'body');
$.extend(coming,{
    skin:$('.fancybox-skin',coming.wrap),
    outer:$('.fancybox-outer',coming.wrap),
    inner:$('.fancybox-inner',coming.wrap)
    });
$.each(["Top","Right","Bottom","Left"],function(i,v){
    coming.skin.css('padding'+v,getValue(coming.padding[i]));
});
F.trigger('onReady');
if(type==='inline'||type==='html'){
    if(!coming.content||!coming.content.length){
        return F._error('content');
    }
}else if(!href){
    return F._error('href');
}
if(type==='image'){
    F._loadImage();
}else if(type==='ajax'){
    F._loadAjax();
}else if(type==='iframe'){
    F._loadIframe();
}else{
    F._afterLoad();
}
},
_error:function(type){
    $.extend(F.coming,{
        type:'html',
        autoWidth:true,
        autoHeight:true,
        minWidth:0,
        minHeight:0,
        scrolling:'no',
        hasError:type,
        content:F.coming.tpl.error
        });
    F._afterLoad();
},
_loadImage:function(){
    var img=F.imgPreload=new Image();
    img.onload=function(){
        this.onload=this.onerror=null;
        F.coming.width=this.width;
        F.coming.height=this.height;
        F._afterLoad();
    };
    
    img.onerror=function(){
        this.onload=this.onerror=null;
        F._error('image');
    };
    
    img.src=F.coming.href;
    if(img.complete!==true){
        F.showLoading();
    }
},
_loadAjax:function(){
    var coming=F.coming;
    F.showLoading();
    F.ajaxLoad=$.ajax($.extend({},coming.ajax,{
        url:coming.href,
        error:function(jqXHR,textStatus){
            if(F.coming&&textStatus!=='abort'){
                F._error('ajax',jqXHR);
            }else{
                F.hideLoading();
            }
        },
    success:function(data,textStatus){
        if(textStatus==='success'){
            coming.content=data;
            F._afterLoad();
        }
    }
    }));
},
_loadIframe:function(){
    var coming=F.coming,iframe=$(coming.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr('scrolling',isTouch?'auto':coming.iframe.scrolling).attr('src',coming.href);
    $(coming.wrap).bind('onReset',function(){
        try{
            $(this).find('iframe').hide().attr('src','//about:blank').end().empty();
        }catch(e){}
    });
if(coming.iframe.preload){
    F.showLoading();
    iframe.one('load',function(){
        $(this).data('ready',1);
        if(!isTouch){
            $(this).bind('load.fb',F.update);
        }
        $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();
        F._afterLoad();
    });
}
coming.content=iframe.appendTo(coming.inner);
if(!coming.iframe.preload){
    F._afterLoad();
}
},
_preloadImages:function(){
    var group=F.group,current=F.current,len=group.length,cnt=current.preload?Math.min(current.preload,len-1):0,item,i;
    for(i=1;i<=cnt;i+=1){
        item=group[(current.index+i)%len];
        if(item.type==='image'&&item.href){
            new Image().src=item.href;
        }
    }
    },
_afterLoad:function(){
    var coming=F.coming,previous=F.current,placeholder='fancybox-placeholder',current,content,type,scrolling,href,embed;
    F.hideLoading();
    if(!coming||F.isActive===false){
        return;
    }
    if(false===F.trigger('afterLoad',coming,previous)){
        coming.wrap.stop(true).trigger('onReset').remove();
        F.coming=null;
        return;
    }
    if(previous){
        F.trigger('beforeChange',previous);
        previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();
    }
    F.unbindEvents();
    current=coming;
    content=coming.content;
    type=coming.type;
    scrolling=coming.scrolling;
    $.extend(F,{
        wrap:current.wrap,
        skin:current.skin,
        outer:current.outer,
        inner:current.inner,
        current:current,
        previous:previous
    });
    href=current.href;
    switch(type){
        case'inline':case'ajax':case'html':
            if(current.selector){
            content=$('<div>').html(content).find(current.selector);
        }else if(isQuery(content)){
            if(!content.data(placeholder)){
                content.data(placeholder,$('<div class="'+placeholder+'"></div>').insertAfter(content).hide());
            }
            content=content.show().detach();
            current.wrap.bind('onReset',function(){
                if($(this).find(content).length){
                    content.hide().replaceAll(content.data(placeholder)).data(placeholder,false);
                }
            });
        }
        break;
    case'image':
        content=current.tpl.image.replace('{href}',href);
        break;
    case'swf':
        content='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+href+'"></param>';
        embed='';
        $.each(current.swf,function(name,val){
        content+='<param name="'+name+'" value="'+val+'"></param>';
        embed+=' '+name+'="'+val+'"';
    });
    content+='<embed src="'+href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+embed+'></embed></object>';
    break;
}
if(!(isQuery(content)&&content.parent().is(current.inner))){
    current.inner.append(content);
}
F.trigger('beforeShow');
current.inner.css('overflow',scrolling==='yes'?'scroll':(scrolling==='no'?'hidden':scrolling));
F._setDimension();
F.reposition();
F.isOpen=false;
F.coming=null;
F.bindEvents();
if(!F.isOpened){
    $('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();
}else if(previous.prevMethod){
    F.transitions[previous.prevMethod]();
}
F.transitions[F.isOpened?current.nextMethod:current.openMethod]();
F._preloadImages();
},
_setDimension:function(){
    var viewport=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+margin[3]),hMargin=getScalar(margin[0]+margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;
    wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');
    wPadding=getScalar(skin.outerWidth(true)-skin.width());
    hPadding=getScalar(skin.outerHeight(true)-skin.height());
    wSpace=wMargin+wPadding;
    hSpace=hMargin+hPadding;
    origWidth=isPercentage(width)?(viewport.w-wSpace)*getScalar(width)/100:width;
    origHeight=isPercentage(height)?(viewport.h-hSpace)*getScalar(height)/100:height;
    if(current.type==='iframe'){
        iframe=current.content;
        if(current.autoHeight&&iframe.data('ready')===1){
            try{
                if(iframe[0].contentWindow.document.location){
                    inner.width(origWidth).height(9999);
                    body=iframe.contents().find('body');
                    if(scrollOut){
                        body.css('overflow-x','hidden');
                    }
                    origHeight=body.height();
                }
            }catch(e){}
    }
}else if(current.autoWidth||current.autoHeight){
    inner.addClass('fancybox-tmp');
    if(!current.autoWidth){
        inner.width(origWidth);
    }
    if(!current.autoHeight){
        inner.height(origHeight);
    }
    if(current.autoWidth){
        origWidth=inner.width();
    }
    if(current.autoHeight){
        origHeight=inner.height();
    }
    inner.removeClass('fancybox-tmp');
}
width=getScalar(origWidth);
height=getScalar(origHeight);
ratio=origWidth/origHeight;
minWidth=getScalar(isPercentage(minWidth)?getScalar(minWidth,'w')-wSpace:minWidth);
maxWidth=getScalar(isPercentage(maxWidth)?getScalar(maxWidth,'w')-wSpace:maxWidth);
minHeight=getScalar(isPercentage(minHeight)?getScalar(minHeight,'h')-hSpace:minHeight);
maxHeight=getScalar(isPercentage(maxHeight)?getScalar(maxHeight,'h')-hSpace:maxHeight);
origMaxWidth=maxWidth;
origMaxHeight=maxHeight;
if(current.fitToView){
    maxWidth=Math.min(viewport.w-wSpace,maxWidth);
    maxHeight=Math.min(viewport.h-hSpace,maxHeight);
}
maxWidth_=viewport.w-wMargin;
maxHeight_=viewport.h-hMargin;
if(current.aspectRatio){
    if(width>maxWidth){
        width=maxWidth;
        height=getScalar(width/ratio);
    }
    if(height>maxHeight){
        height=maxHeight;
        width=getScalar(height*ratio);
    }
    if(width<minWidth){
        width=minWidth;
        height=getScalar(width/ratio);
    }
    if(height<minHeight){
        height=minHeight;
        width=getScalar(height*ratio);
    }
}else{
    width=Math.max(minWidth,Math.min(width,maxWidth));
    if(current.autoHeight&&current.type!=='iframe'){
        inner.width(width);
        height=inner.height();
    }
    height=Math.max(minHeight,Math.min(height,maxHeight));
}
if(current.fitToView){
    inner.width(width).height(height);
    wrap.width(width+wPadding);
    width_=wrap.width();
    height_=wrap.height();
    if(current.aspectRatio){
        while((width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight){
            if(steps++>19){
                break;
            }
            height=Math.max(minHeight,Math.min(maxHeight,height-10));
            width=getScalar(height*ratio);
            if(width<minWidth){
                width=minWidth;
                height=getScalar(width/ratio);
            }
            if(width>maxWidth){
                width=maxWidth;
                height=getScalar(width/ratio);
            }
            inner.width(width).height(height);
            wrap.width(width+wPadding);
            width_=wrap.width();
            height_=wrap.height();
        }
    }else{
    width=Math.max(minWidth,Math.min(width,width-(width_-maxWidth_)));
    height=Math.max(minHeight,Math.min(height,height-(height_-maxHeight_)));
}
}
if(scrollOut&&scrolling==='auto'&&height<origHeight&&(width+wPadding+scrollOut)<maxWidth_){
    width+=scrollOut;
}
inner.width(width).height(height);
wrap.width(width+wPadding);
width_=wrap.width();
height_=wrap.height();
canShrink=(width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight;
canExpand=current.aspectRatio?(width<origMaxWidth&&height<origMaxHeight&&width<origWidth&&height<origHeight):((width<origMaxWidth||height<origMaxHeight)&&(width<origWidth||height<origHeight));
$.extend(current,{
    dim:{
        width:getValue(width_),
        height:getValue(height_)
        },
    origWidth:origWidth,
    origHeight:origHeight,
    canShrink:canShrink,
    canExpand:canExpand,
    wPadding:wPadding,
    hPadding:hPadding,
    wrapSpace:height_-skin.outerHeight(true),
    skinSpace:skin.height()-height
    });
if(!iframe&&current.autoHeight&&height>minHeight&&height<maxHeight&&!canExpand){
    inner.height('auto');
}
},
_getPosition:function(onlyAbsolute){
    var current=F.current,viewport=F.getViewport(),margin=current.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={
        position:'absolute',
        top:margin[0],
        left:margin[3]
        };
        
    if(current.autoCenter&&current.fixed&&!onlyAbsolute&&height<=viewport.h&&width<=viewport.w){
        rez.position='fixed';
    }else if(!current.locked){
        rez.top+=viewport.y;
        rez.left+=viewport.x;
    }
    rez.top=getValue(Math.max(rez.top,rez.top+((viewport.h-height)*current.topRatio)));
    rez.left=getValue(Math.max(rez.left,rez.left+((viewport.w-width)*current.leftRatio)));
    return rez;
},
_afterZoomIn:function(){
    var current=F.current;
    if(!current){
        return;
    }
    F.isOpen=F.isOpened=true;
    F.wrap.css('overflow','visible').addClass('fancybox-opened');
    F.update();
    if(current.closeClick||(current.nextClick&&F.group.length>1)){
        F.inner.css('cursor','pointer').bind('click.fb',function(e){
            if(!$(e.target).is('a')&&!$(e.target).parent().is('a')){
                e.preventDefault();
                F[current.closeClick?'close':'next']();
            }
        });
}
if(current.closeBtn){
    $(current.tpl.closeBtn).appendTo(F.skin).bind(isTouch?'touchstart.fb':'click.fb',function(e){
        e.preventDefault();
        F.close();
    });
}
if(current.arrows&&F.group.length>1){
    if(current.loop||current.index>0){
        $(current.tpl.prev).appendTo(F.outer).bind('click.fb',F.prev);
    }
    if(current.loop||current.index<F.group.length-1){
        $(current.tpl.next).appendTo(F.outer).bind('click.fb',F.next);
    }
}
F.trigger('afterShow');
if(!current.loop&&current.index===current.group.length-1){
    F.play(false);
}else if(F.opts.autoPlay&&!F.player.isActive){
    F.opts.autoPlay=false;
    F.play();
}
},
_afterZoomOut:function(obj){
    obj=obj||F.current;
    $('.fancybox-wrap').trigger('onReset').remove();
    $.extend(F,{
        group:{},
        opts:{},
        router:false,
        current:null,
        isActive:false,
        isOpened:false,
        isOpen:false,
        isClosing:false,
        wrap:null,
        skin:null,
        outer:null,
        inner:null
    });
    F.trigger('afterClose',obj);
}
});
F.transitions={
    getOrigPosition:function(){
        var current=F.current,element=current.element,orig=current.orig,pos={},width=50,height=50,hPadding=current.hPadding,wPadding=current.wPadding,viewport=F.getViewport();
        if(!orig&&current.isDom&&element.is(':visible')){
            orig=element.find('img:first');
            if(!orig.length){
                orig=element;
            }
        }
    if(isQuery(orig)){
        pos=orig.offset();
        if(orig.is('img')){
            width=orig.outerWidth();
            height=orig.outerHeight();
        }
    }else{
    pos.top=viewport.y+(viewport.h-height)*current.topRatio;
    pos.left=viewport.x+(viewport.w-width)*current.leftRatio;
}
if(F.wrap.css('position')==='fixed'||current.locked){
    pos.top-=viewport.y;
    pos.left-=viewport.x;
}
pos={
    top:getValue(pos.top-hPadding*current.topRatio),
    left:getValue(pos.left-wPadding*current.leftRatio),
    width:getValue(width+wPadding),
    height:getValue(height+hPadding)
    };
    
return pos;
},
step:function(now,fx){
    var ratio,padding,value,prop=fx.prop,current=F.current,wrapSpace=current.wrapSpace,skinSpace=current.skinSpace;
    if(prop==='width'||prop==='height'){
        ratio=fx.end===fx.start?1:(now-fx.start)/(fx.end-fx.start);
        if(F.isClosing){
            ratio=1-ratio;
        }
        padding=prop==='width'?current.wPadding:current.hPadding;
        value=now-padding;
        F.skin[prop](getScalar(prop==='width'?value:value-(wrapSpace*ratio)));
        F.inner[prop](getScalar(prop==='width'?value:value-(wrapSpace*ratio)-(skinSpace*ratio)));
    }
},
zoomIn:function(){
    var current=F.current,startPos=current.pos,effect=current.openEffect,elastic=effect==='elastic',endPos=$.extend({
        opacity:1
    },startPos);
    delete endPos.position;
    if(elastic){
        startPos=this.getOrigPosition();
        if(current.openOpacity){
            startPos.opacity=0.1;
        }
    }else if(effect==='fade'){
    startPos.opacity=0.1;
}
F.wrap.css(startPos).animate(endPos,{
    duration:effect==='none'?0:current.openSpeed,
    easing:current.openEasing,
    step:elastic?this.step:null,
    complete:F._afterZoomIn
    });
},
zoomOut:function(){
    var current=F.current,effect=current.closeEffect,elastic=effect==='elastic',endPos={
        opacity:0.1
    };
    
    if(elastic){
        endPos=this.getOrigPosition();
        if(current.closeOpacity){
            endPos.opacity=0.1;
        }
    }
F.wrap.animate(endPos,{
    duration:effect==='none'?0:current.closeSpeed,
    easing:current.closeEasing,
    step:elastic?this.step:null,
    complete:F._afterZoomOut
    });
},
changeIn:function(){
    var current=F.current,effect=current.nextEffect,startPos=current.pos,endPos={
        opacity:1
    },direction=F.direction,distance=200,field;
    startPos.opacity=0.1;
    if(effect==='elastic'){
        field=direction==='down'||direction==='up'?'top':'left';
        if(direction==='down'||direction==='right'){
            startPos[field]=getValue(getScalar(startPos[field])-distance);
            endPos[field]='+='+distance+'px';
        }else{
            startPos[field]=getValue(getScalar(startPos[field])+distance);
            endPos[field]='-='+distance+'px';
        }
    }
if(effect==='none'){
    F._afterZoomIn();
}else{
    F.wrap.css(startPos).animate(endPos,{
        duration:current.nextSpeed,
        easing:current.nextEasing,
        complete:function(){
            setTimeout(F._afterZoomIn,20);
        }
    });
}
},
changeOut:function(){
    var previous=F.previous,effect=previous.prevEffect,endPos={
        opacity:0.1
    },direction=F.direction,distance=200;
    if(effect==='elastic'){
        endPos[direction==='down'||direction==='up'?'top':'left']=(direction==='up'||direction==='left'?'-':'+')+'='+distance+'px';
    }
    previous.wrap.animate(endPos,{
        duration:effect==='none'?0:previous.prevSpeed,
        easing:previous.prevEasing,
        complete:function(){
            $(this).trigger('onReset').remove();
        }
    });
}
};

F.helpers.overlay={
    defaults:{
        closeClick:true,
        speedOut:200,
        showEarly:true,
        css:{},
        locked:!isTouch,
        fixed:true
    },
    overlay:null,
    fixed:false,
    create:function(opts){
        opts=$.extend({},this.defaults,opts);
        if(this.overlay){
            this.close();
        }
        this.overlay=$('<div class="fancybox-overlay"></div>').appendTo('body');
        this.fixed=false;
        if(opts.fixed&&F.defaults.fixed){
            this.overlay.addClass('fancybox-overlay-fixed');
            this.fixed=true;
        }
    },
open:function(opts){
    var that=this;
    opts=$.extend({},this.defaults,opts);
    if(this.overlay){
        this.overlay.unbind('.overlay').width('auto').height('auto');
    }else{
        this.create(opts);
    }
    if(!this.fixed){
        W.bind('resize.overlay',$.proxy(this.update,this));
        this.update();
    }
    if(opts.closeClick){
        this.overlay.bind('click.overlay',function(e){
            if($(e.target).hasClass('fancybox-overlay')){
                if(F.isActive){
                    F.close();
                }else{
                    that.close();
                }
            }
        });
}
this.overlay.css(opts.css).show();
},
close:function(){
    $('.fancybox-overlay').remove();
    W.unbind('resize.overlay');
    this.overlay=null;
    if(this.margin!==false){
        $('body').css('margin-right',this.margin);
        this.margin=false;
    }
    if(this.el){
        this.el.removeClass('fancybox-lock');
    }
},
update:function(){
    var width='100%',offsetWidth;
    this.overlay.width(width).height('100%');
    if($.browser.msie){
        offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
        if(D.width()>offsetWidth){
            width=D.width();
        }
    }else if(D.width()>W.width()){
    width=D.width();
}
this.overlay.width(width).height(D.height());
},
onReady:function(opts,obj){
    $('.fancybox-overlay').stop(true,true);
    if(!this.overlay){
        this.margin=D.height()>W.height()||$('body').css('overflow-y')==='scroll'?$('body').css('margin-right'):false;
        this.el=document.all&&!document.querySelector?$('html'):$('body');
        this.create(opts);
    }
    if(opts.locked&&this.fixed){
        obj.locked=this.overlay.append(obj.wrap);
        obj.fixed=false;
    }
    if(opts.showEarly===true){
        this.beforeShow.apply(this,arguments);
    }
},
beforeShow:function(opts,obj){
    if(obj.locked){
        this.el.addClass('fancybox-lock');
        if(this.margin!==false){
            $('body').css('margin-right',getScalar(this.margin)+obj.scrollbarWidth);
        }
    }
this.open(opts);
},
onUpdate:function(){
    if(!this.fixed){
        this.update();
    }
},
afterClose:function(opts){
    if(this.overlay&&!F.isActive){
        this.overlay.fadeOut(opts.speedOut,$.proxy(this.close,this));
    }
}
};

F.helpers.title={
    defaults:{
        type:'float',
        position:'bottom'
    },
    beforeShow:function(opts){
        var current=F.current,text=current.title,type=opts.type,title,target;
        if($.isFunction(text)){
            text=text.call(current.element,current);
        }
        if(!isString(text)||$.trim(text)===''){
            return;
        }
        title=$('<div class="fancybox-title fancybox-title-'+type+'-wrap">'+text+'</div>');
        switch(type){
            case'inside':
                target=F.skin;
                break;
            case'outside':
                target=F.wrap;
                break;
            case'over':
                target=F.inner;
                break;
            default:
                target=F.skin;
                title.appendTo('body');
                if($.browser.msie){
                title.width(title.width());
            }
            title.wrapInner('<span class="child"></span>');
                F.current.margin[2]+=Math.abs(getScalar(title.css('margin-bottom')));
                break;
        }
        title[(opts.position==='top'?'prependTo':'appendTo')](target);
    }
};

$.fn.fancybox=function(options){
    var index,that=$(this),selector=this.selector||'',run=function(e){
        var what=$(this).blur(),idx=index,relType,relVal;
        if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&!what.is('.fancybox-wrap')){
            relType=options.groupAttr||'data-fancybox-group';
            relVal=what.attr(relType);
            if(!relVal){
                relType='rel';
                relVal=what.get(0)[relType];
            }
            if(relVal&&relVal!==''&&relVal!=='nofollow'){
                what=selector.length?$(selector):that;
                what=what.filter('['+relType+'="'+relVal+'"]');
                idx=what.index(this);
            }
            options.index=idx;
            if(F.open(what,options)!==false){
                e.preventDefault();
            }
        }
    };

options=options||{};

index=options.index||0;
if(!selector||options.live===false){
    that.unbind('click.fb-start').bind('click.fb-start',run);
}else{
    D.undelegate(selector,'click.fb-start').delegate(selector+":not('.fancybox-item, .fancybox-nav')",'click.fb-start',run);
}
this.filter('[data-fancybox-start=1]').trigger('click');
return this;
};

D.ready(function(){
    if($.scrollbarWidth===undefined){
        $.scrollbarWidth=function(){
            var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=parent.children(),width=child.innerWidth()-child.height(99).innerWidth();
            parent.remove();
            return width;
        };
    
}
if($.support.fixedPosition===undefined){
    $.support.fixedPosition=(function(){
        var elem=$('<div style="position:fixed;top:20px;"></div>').appendTo('body'),fixed=(elem[0].offsetTop===20||elem[0].offsetTop===15);
        elem.remove();
        return fixed;
    }());
}
$.extend(F.defaults,{
    scrollbarWidth:$.scrollbarWidth(),
    fixed:$.support.fixedPosition,
    parent:$('body')
    });
});
}(window,document,jQuery));
;



/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){
    if(typeof define==='function'&&define.amd&&define.amd.jQuery){
        define(['jquery'],factory);
    }else{
        factory(jQuery);
    }
}(function($){
    var pluses=/\+/g;
    function raw(s){
        return s;
    }
    function decoded(s){
        return decodeURIComponent(s.replace(pluses,' '));
    }
    function converted(s){
        if(s.indexOf('"')===0){
            s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');
        }
        try{
            return config.json?JSON.parse(s):s;
        }catch(er){}
    }
var config=$.cookie=function(key,value,options){
    if(value!==undefined){
        options=$.extend({},config.defaults,options);
        if(typeof options.expires==='number'){
            var days=options.expires,t=options.expires=new Date();
            t.setDate(t.getDate()+days);
        }
        value=config.json?JSON.stringify(value):String(value);
        return(document.cookie=[encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));
    }
    var decode=config.raw?raw:decoded;
    var cookies=document.cookie.split('; ');
    var result=key?undefined:{};
    
    for(var i=0,l=cookies.length;i<l;i++){
        var parts=cookies[i].split('=');
        var name=decode(parts.shift());
        var cookie=decode(parts.join('='));
        if(key&&key===name){
            result=converted(cookie);
            break;
        }
        if(!key){
            result[name]=converted(cookie);
        }
    }
return result;
};

config.defaults={};

$.removeCookie=function(key,options){
    if($.cookie(key)!==undefined){
        $.cookie(key,'',$.extend(options,{
            expires:-1
        }));
        return true;
    }
    return false;
};

}));
;



/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function($){
    var types=['DOMMouseScroll','mousewheel'];
    if($.event.fixHooks){
        for(var i=types.length;i;){
            $.event.fixHooks[types[--i]]=$.event.mouseHooks;
        }
        }
$.event.special.mousewheel={
    setup:function(){
        if(this.addEventListener){
            for(var i=types.length;i;){
                this.addEventListener(types[--i],handler,false);
            }
            }else{
        this.onmousewheel=handler;
    }
},
teardown:function(){
    if(this.removeEventListener){
        for(var i=types.length;i;){
            this.removeEventListener(types[--i],handler,false);
        }
        }else{
    this.onmousewheel=null;
}
}
};

$.fn.extend({
    mousewheel:function(fn){
        return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");
    },
    unmousewheel:function(fn){
        return this.unbind("mousewheel",fn);
    }
});
function handler(event){
    var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;
    event=$.event.fix(orgEvent);
    event.type="mousewheel";
    if(orgEvent.wheelDelta){
        delta=orgEvent.wheelDelta/120;
    }
    if(orgEvent.detail){
        delta=-orgEvent.detail/3;
    }
    deltaY=delta;
    if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){
        deltaY=0;
        deltaX=-1*delta;
    }
    if(orgEvent.wheelDeltaY!==undefined){
        deltaY=orgEvent.wheelDeltaY/120;
    }
    if(orgEvent.wheelDeltaX!==undefined){
        deltaX=-1*orgEvent.wheelDeltaX/120;
    }
    args.unshift(event,delta,deltaX,deltaY);
    return($.event.dispatch||$.event.handle).apply(this,args);
}
})(jQuery);
;



(function(b,a,c){
    b.fn.jScrollPane=function(e){
        function d(D,O){
            var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";
            aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");
            f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);
            function ar(aQ){
                var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;
                ay=aQ;
                if(Y===c){
                    aI=D.scrollTop();
                    aP=D.scrollLeft();
                    D.css({
                        overflow:"hidden",
                        padding:0
                    });
                    aj=D.innerWidth()+f;
                    v=D.innerHeight();
                    D.width(aj);
                    Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());
                    al=b('<div class="jspContainer" />').css({
                        width:aj+"px",
                        height:v+"px"
                        }).append(Y).appendTo(D)
                    }else{
                    D.css("width","");
                    aO=ay.stickToBottom&&K();
                    aK=ay.stickToRight&&B();
                    aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;
                    if(aJ){
                        aj=D.innerWidth()+f;
                        v=D.innerHeight();
                        al.css({
                            width:aj+"px",
                            height:v+"px"
                            })
                        }
                        if(!aJ&&L==T&&Y.outerHeight()==Z){
                        D.width(aj);
                        return
                    }
                    L=T;
                    Y.css("width","");
                    D.width(aj);
                    al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    Y.css("overflow","auto");
                if(aQ.contentWidth){
                    T=aQ.contentWidth
                    }else{
                    T=Y[0].scrollWidth
                    }
                    Z=Y[0].scrollHeight;
                Y.css("overflow","");
                y=T/aj;
                q=Z/v;
                az=q>1;
                aE=y>1;
                if(!(aE||az)){
                    D.removeClass("jspScrollable");
                    Y.css({
                        top:0,
                        width:al.width()-f
                        });
                    n();
                    E();
                    R();
                    w()
                    }else{
                    D.addClass("jspScrollable");
                    aL=ay.maintainPosition&&(I||aa);
                    if(aL){
                        aN=aC();
                        aM=aA()
                        }
                        aF();
                    z();
                    F();
                    if(aL){
                        N(aK?(T-aj):aN,false);
                        M(aO?(Z-v):aM,false)
                        }
                        J();
                    ag();
                    an();
                    if(ay.enableKeyboardNavigation){
                        S()
                        }
                        if(ay.clickOnTrack){
                        p()
                        }
                        C();
                    if(ay.hijackInternalLinks){
                        m()
                        }
                    }
                if(ay.autoReinitialise&&!av){
                av=setInterval(function(){
                    ar(ay)
                    },ay.autoReinitialiseDelay)
                }else{
                if(!ay.autoReinitialise&&av){
                    clearInterval(av)
                    }
                }
            aI&&D.scrollTop(0)&&M(aI,false);
        aP&&D.scrollLeft(0)&&N(aP,false);
        D.trigger("jsp-initialised",[aE||az])
        }
        function aF(){
        if(az){
            al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));
            U=al.find(">.jspVerticalBar");
            ap=U.find(">.jspTrack");
            au=ap.find(">.jspDrag");
            if(ay.showArrows){
                aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);
                af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);
                if(ay.arrowScrollOnHover){
                    aq.bind("mouseover.jsp",aD(0,-1,aq));
                    af.bind("mouseover.jsp",aD(0,1,af))
                    }
                    ak(ap,ay.verticalArrowPositions,aq,af)
                }
                t=v;
            al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){
                t-=b(this).outerHeight()
                });
            au.hover(function(){
                au.addClass("jspHover")
                },function(){
                au.removeClass("jspHover")
                }).bind("mousedown.jsp",function(aI){
                b("html").bind("dragstart.jsp selectstart.jsp",aB);
                au.addClass("jspActive");
                var s=aI.pageY-au.position().top;
                b("html").bind("mousemove.jsp",function(aJ){
                    V(aJ.pageY-s,false)
                    }).bind("mouseup.jsp mouseleave.jsp",aw);
                return false
                });
            o()
            }
        }
    function o(){
    ap.height(t+"px");
    I=0;
    X=ay.verticalGutter+ap.outerWidth();
    Y.width(aj-X-f);
    try{
        if(U.position().left===0){
            Y.css("margin-left",X+"px")
            }
        }catch(s){}
    }
    function z(){
    if(aE){
        al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));
        am=al.find(">.jspHorizontalBar");
        G=am.find(">.jspTrack");
        h=G.find(">.jspDrag");
        if(ay.showArrows){
            ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);
            x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);
            if(ay.arrowScrollOnHover){
                ax.bind("mouseover.jsp",aD(-1,0,ax));
                x.bind("mouseover.jsp",aD(1,0,x))
                }
                ak(G,ay.horizontalArrowPositions,ax,x)
            }
            h.hover(function(){
            h.addClass("jspHover")
            },function(){
            h.removeClass("jspHover")
            }).bind("mousedown.jsp",function(aI){
            b("html").bind("dragstart.jsp selectstart.jsp",aB);
            h.addClass("jspActive");
            var s=aI.pageX-h.position().left;
            b("html").bind("mousemove.jsp",function(aJ){
                W(aJ.pageX-s,false)
                }).bind("mouseup.jsp mouseleave.jsp",aw);
            return false
            });
        l=al.innerWidth();
        ah()
        }
    }
function ah(){
    al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){
        l-=b(this).outerWidth()
        });
    G.width(l+"px");
    aa=0
    }
    function F(){
    if(aE&&az){
        var aI=G.outerHeight(),s=ap.outerWidth();
        t-=aI;
        b(am).find(">.jspCap:visible,>.jspArrow").each(function(){
            l+=b(this).outerWidth()
            });
        l-=s;
        v-=s;
        aj-=aI;
        G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));
        o();
        ah()
        }
        if(aE){
        Y.width((al.outerWidth()-f)+"px")
        }
        Z=Y.outerHeight();
    q=Z/v;
    if(aE){
        at=Math.ceil(1/y*l);
        if(at>ay.horizontalDragMaxWidth){
            at=ay.horizontalDragMaxWidth
            }else{
            if(at<ay.horizontalDragMinWidth){
                at=ay.horizontalDragMinWidth
                }
            }
        h.width(at+"px");
    j=l-at;
    ae(aa)
    }
    if(az){
    A=Math.ceil(1/q*t);
    if(A>ay.verticalDragMaxHeight){
        A=ay.verticalDragMaxHeight
        }else{
        if(A<ay.verticalDragMinHeight){
            A=ay.verticalDragMinHeight
            }
        }
    au.height(A+"px");
i=t-A;
ad(I)
}
}
function ak(aJ,aL,aI,s){
    var aN="before",aK="after",aM;
    if(aL=="os"){
        aL=/Mac/.test(navigator.platform)?"after":"split"
        }
        if(aL==aN){
        aK=aL
        }else{
        if(aL==aK){
            aN=aL;
            aM=aI;
            aI=s;
            s=aM
            }
        }
    aJ[aN](aI)[aK](s)
}
function aD(aI,s,aJ){
    return function(){
        H(aI,s,this,aJ);
        this.blur();
        return false
        }
    }
function H(aL,aK,aO,aN){
    aO=b(aO).addClass("jspActive");
    var aM,aJ,aI=true,s=function(){
        if(aL!==0){
            Q.scrollByX(aL*ay.arrowButtonSpeed)
            }
            if(aK!==0){
            Q.scrollByY(aK*ay.arrowButtonSpeed)
            }
            aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);
        aI=false
        };
        
    s();
    aM=aN?"mouseout.jsp":"mouseup.jsp";
    aN=aN||b("html");
    aN.bind(aM,function(){
        aO.removeClass("jspActive");
        aJ&&clearTimeout(aJ);
        aJ=null;
        aN.unbind(aM)
        })
    }
    function p(){
    w();
    if(az){
        ap.bind("mousedown.jsp",function(aN){
            if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){
                var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){
                    var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);
                    if(aM<0){
                        if(I-aQ>aS){
                            Q.scrollByY(-aP)
                            }else{
                            V(aS)
                            }
                        }else{
                    if(aM>0){
                        if(I+aQ<aS){
                            Q.scrollByY(aP)
                            }else{
                            V(aS)
                            }
                        }else{
                    aK();
                    return
                }
            }
            aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);
            aI=false
            },aK=function(){
            aJ&&clearTimeout(aJ);
            aJ=null;
            b(document).unbind("mouseup.jsp",aK)
            };
            
        s();
        b(document).bind("mouseup.jsp",aK);
        return false
        }
    })
}
if(aE){
    G.bind("mousedown.jsp",function(aN){
        if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){
            var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){
                var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);
                if(aM<0){
                    if(aa-aQ>aS){
                        Q.scrollByX(-aP)
                        }else{
                        W(aS)
                        }
                    }else{
                if(aM>0){
                    if(aa+aQ<aS){
                        Q.scrollByX(aP)
                        }else{
                        W(aS)
                        }
                    }else{
                aK();
                return
            }
        }
        aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);
        aI=false
        },aK=function(){
        aJ&&clearTimeout(aJ);
        aJ=null;
        b(document).unbind("mouseup.jsp",aK)
        };
        
    s();
    b(document).bind("mouseup.jsp",aK);
    return false
    }
})
}
}
function w(){
    if(G){
        G.unbind("mousedown.jsp")
        }
        if(ap){
        ap.unbind("mousedown.jsp")
        }
    }
function aw(){
    b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
    if(au){
        au.removeClass("jspActive")
        }
        if(h){
        h.removeClass("jspActive")
        }
    }
function V(s,aI){
    if(!az){
        return
    }
    if(s<0){
        s=0
        }else{
        if(s>i){
            s=i
            }
        }
    if(aI===c){
    aI=ay.animateScroll
    }
    if(aI){
    Q.animate(au,"top",s,ad)
    }else{
    au.css("top",s);
    ad(s)
    }
}
function ad(aI){
    if(aI===c){
        aI=au.position().top
        }
        al.scrollTop(0);
    I=aI;
    var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);
    if(ai!=aL||aG!=aJ){
        ai=aL;
        aG=aJ;
        D.trigger("jsp-arrow-change",[ai,aG,P,k])
        }
        u(aL,aJ);
    Y.css("top",s);
    D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")
    }
    function W(aI,s){
    if(!aE){
        return
    }
    if(aI<0){
        aI=0
        }else{
        if(aI>j){
            aI=j
            }
        }
    if(s===c){
    s=ay.animateScroll
    }
    if(s){
    Q.animate(h,"left",aI,ae)
    }else{
    h.css("left",aI);
    ae(aI)
    }
}
function ae(aI){
    if(aI===c){
        aI=h.position().left
        }
        al.scrollTop(0);
    aa=aI;
    var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);
    if(P!=aL||k!=aK){
        P=aL;
        k=aK;
        D.trigger("jsp-arrow-change",[ai,aG,P,k])
        }
        r(aL,aK);
    Y.css("left",s);
    D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")
    }
    function u(aI,s){
    if(ay.showArrows){
        aq[aI?"addClass":"removeClass"]("jspDisabled");
        af[s?"addClass":"removeClass"]("jspDisabled")
        }
    }
function r(aI,s){
    if(ay.showArrows){
        ax[aI?"addClass":"removeClass"]("jspDisabled");
        x[s?"addClass":"removeClass"]("jspDisabled")
        }
    }
function M(s,aI){
    var aJ=s/(Z-v);
    V(aJ*i,aI)
    }
    function N(aI,s){
    var aJ=aI/(T-aj);
    W(aJ*j,s)
    }
    function ab(aV,aQ,aJ){
    var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;
    try{
        aN=b(aV)
        }catch(aM){
        return
    }
    aK=aN.outerHeight();
    aL=aN.outerWidth();
    al.scrollTop(0);
    al.scrollLeft(0);
    while(!aN.is(".jspPane")){
        s+=aN.position().top;
        aU+=aN.position().left;
        aN=aN.offsetParent();
        if(/^body|html$/i.test(aN[0].nodeName)){
            return
        }
    }
    aI=aA();
aO=aI+v;
if(s<aI||aQ){
    aR=s-ay.verticalGutter
    }else{
    if(s+aK>aO){
        aR=s-v+aK+ay.verticalGutter
        }
    }
if(aR){
    M(aR,aJ)
    }
    aP=aC();
aS=aP+aj;
if(aU<aP||aQ){
    aT=aU-ay.horizontalGutter
    }else{
    if(aU+aL>aS){
        aT=aU-aj+aL+ay.horizontalGutter
        }
    }
if(aT){
    N(aT,aJ)
    }
}
function aC(){
    return-Y.position().left
    }
    function aA(){
    return-Y.position().top
    }
    function K(){
    var s=Z-v;
    return(s>20)&&(s-aA()<10)
    }
    function B(){
    var s=T-aj;
    return(s>20)&&(s-aC()<10)
    }
    function ag(){
    al.unbind(ac).bind(ac,function(aL,aM,aK,aI){
        var aJ=aa,s=I;
        Q.scrollBy(aK*ay.mouseWheelSpeed,-aI*ay.mouseWheelSpeed,false);
        return aJ==aa&&s==I
        })
    }
    function n(){
    al.unbind(ac)
    }
    function aB(){
    return false
    }
    function J(){
    Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){
        ab(s.target,false)
        })
    }
    function E(){
    Y.find(":input,a").unbind("focus.jsp")
    }
    function S(){
    var s,aI,aK=[];
    aE&&aK.push(am[0]);
    az&&aK.push(U[0]);
    Y.focus(function(){
        D.focus()
        });
    D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){
        if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){
            return
        }
        var aM=aa,aL=I;
        switch(aN.keyCode){
            case 40:case 38:case 34:case 32:case 33:case 39:case 37:
                s=aN.keyCode;
                aJ();
                break;
            case 35:
                M(Z-v);
                s=null;
                break;
            case 36:
                M(0);
                s=null;
                break
                }
                aI=aN.keyCode==s&&aM!=aa||aL!=I;
        return!aI
        }).bind("keypress.jsp",function(aL){
        if(aL.keyCode==s){
            aJ()
            }
            return!aI
        });
    if(ay.hideFocus){
        D.css("outline","none");
        if("hideFocus"in al[0]){
            D.attr("hideFocus",true)
            }
        }else{
    D.css("outline","");
    if("hideFocus"in al[0]){
        D.attr("hideFocus",false)
        }
    }
function aJ(){
    var aM=aa,aL=I;
    switch(s){
        case 40:
            Q.scrollByY(ay.keyboardSpeed,false);
            break;
        case 38:
            Q.scrollByY(-ay.keyboardSpeed,false);
            break;
        case 34:case 32:
            Q.scrollByY(v*ay.scrollPagePercent,false);
            break;
        case 33:
            Q.scrollByY(-v*ay.scrollPagePercent,false);
            break;
        case 39:
            Q.scrollByX(ay.keyboardSpeed,false);
            break;
        case 37:
            Q.scrollByX(-ay.keyboardSpeed,false);
            break
            }
            aI=aM!=aa||aL!=I;
    return aI
    }
}
function R(){
    D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
    }
    function C(){
    if(location.hash&&location.hash.length>1){
        var aK,aI,aJ=escape(location.hash.substr(1));
        try{
            aK=b("#"+aJ+', a[name="'+aJ+'"]')
            }catch(s){
            return
        }
        if(aK.length&&Y.find(aJ)){
            if(al.scrollTop()===0){
                aI=setInterval(function(){
                    if(al.scrollTop()>0){
                        ab(aK,true);
                        b(document).scrollTop(al.position().top);
                        clearInterval(aI)
                        }
                    },50)
            }else{
            ab(aK,true);
            b(document).scrollTop(al.position().top)
            }
        }
}
}
function m(){
    if(b(document.body).data("jspHijack")){
        return
    }
    b(document.body).data("jspHijack",true);
    b(document.body).delegate("a[href*=#]","click",function(s){
        var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;
        if(location.href.indexOf("#")!==-1){
            aK=location.href.substr(0,location.href.indexOf("#"))
            }
            if(aI!==aK){
            return
        }
        aO=escape(this.href.substr(this.href.indexOf("#")+1));
        aP;
        try{
            aP=b("#"+aO+', a[name="'+aO+'"]')
            }catch(aQ){
            return
        }
        if(!aP.length){
            return
        }
        aJ=aP.closest(".jspScrollable");
        aM=aJ.data("jsp");
        aM.scrollToElement(aP,true);
        if(aJ[0].scrollIntoView){
            aL=b(a).scrollTop();
            aN=aP.offset().top;
            if(aN<aL||aN>aL+b(a).height()){
                aJ[0].scrollIntoView()
                }
            }
        s.preventDefault()
        })
}
function an(){
    var aJ,aI,aL,aK,aM,s=false;
    al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aN){
        var aO=aN.originalEvent.touches[0];
        aJ=aC();
        aI=aA();
        aL=aO.pageX;
        aK=aO.pageY;
        aM=false;
        s=true
        }).bind("touchmove.jsp",function(aQ){
        if(!s){
            return
        }
        var aP=aQ.originalEvent.touches[0],aO=aa,aN=I;
        Q.scrollTo(aJ+aL-aP.pageX,aI+aK-aP.pageY);
        aM=aM||Math.abs(aL-aP.pageX)>5||Math.abs(aK-aP.pageY)>5;
        return aO==aa&&aN==I
        }).bind("touchend.jsp",function(aN){
        s=false
        }).bind("click.jsp-touchclick",function(aN){
        if(aM){
            aM=false;
            return false
            }
        })
}
function g(){
    var s=aA(),aI=aC();
    D.removeClass("jspScrollable").unbind(".jsp");
    D.replaceWith(ao.append(Y.children()));
    ao.scrollTop(s);
    ao.scrollLeft(aI);
    if(av){
        clearInterval(av)
        }
    }
b.extend(Q,{
    reinitialise:function(aI){
        aI=b.extend({},ay,aI);
        ar(aI)
        },
    scrollToElement:function(aJ,aI,s){
        ab(aJ,aI,s)
        },
    scrollTo:function(aJ,s,aI){
        N(aJ,aI);
        M(s,aI)
        },
    scrollToX:function(aI,s){
        N(aI,s)
        },
    scrollToY:function(s,aI){
        M(s,aI)
        },
    scrollToPercentX:function(aI,s){
        N(aI*(T-aj),s)
        },
    scrollToPercentY:function(aI,s){
        M(aI*(Z-v),s)
        },
    scrollBy:function(aI,s,aJ){
        Q.scrollByX(aI,aJ);
        Q.scrollByY(s,aJ)
        },
    scrollByX:function(s,aJ){
        var aI=aC()+Math[s<0?"floor":"ceil"](s),aK=aI/(T-aj);
        W(aK*j,aJ)
        },
    scrollByY:function(s,aJ){
        var aI=aA()+Math[s<0?"floor":"ceil"](s),aK=aI/(Z-v);
        V(aK*i,aJ)
        },
    positionDragX:function(s,aI){
        W(s,aI)
        },
    positionDragY:function(aI,s){
        V(aI,s)
        },
    animate:function(aI,aL,s,aK){
        var aJ={};
        
        aJ[aL]=s;
        aI.animate(aJ,{
            duration:ay.animateDuration,
            easing:ay.animateEase,
            queue:false,
            step:aK
        })
        },
    getContentPositionX:function(){
        return aC()
        },
    getContentPositionY:function(){
        return aA()
        },
    getContentWidth:function(){
        return T
        },
    getContentHeight:function(){
        return Z
        },
    getPercentScrolledX:function(){
        return aC()/(T-aj)
        },
    getPercentScrolledY:function(){
        return aA()/(Z-v)
        },
    getIsScrollableH:function(){
        return aE
        },
    getIsScrollableV:function(){
        return az
        },
    getContentPane:function(){
        return Y
        },
    scrollToBottom:function(s){
        V(i,s)
        },
    hijackInternalLinks:b.noop,
    destroy:function(){
        g()
        }
    });
ar(O)
}
e=b.extend({},b.fn.jScrollPane.defaults,e);
b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){
    e[this]=e[this]||e.speed
    });
return this.each(function(){
    var f=b(this),g=f.data("jsp");
    if(g){
        g.reinitialise(e)
        }else{
        b("script",f).filter('[type="text/javascript"],:not([type])').remove();
        g=new d(f,e);
        f.data("jsp",g)
        }
    })
};

b.fn.jScrollPane.defaults={
    showArrows:false,
    maintainPosition:true,
    stickToBottom:false,
    stickToRight:false,
    clickOnTrack:true,
    autoReinitialise:false,
    autoReinitialiseDelay:500,
    verticalDragMinHeight:0,
    verticalDragMaxHeight:99999,
    horizontalDragMinWidth:0,
    horizontalDragMaxWidth:99999,
    contentWidth:c,
    animateScroll:false,
    animateDuration:300,
    animateEase:"linear",
    hijackInternalLinks:false,
    verticalGutter:4,
    horizontalGutter:4,
    mouseWheelSpeed:0,
    arrowButtonSpeed:0,
    arrowRepeatFreq:50,
    arrowScrollOnHover:false,
    trackClickSpeed:0,
    trackClickRepeatFreq:70,
    verticalArrowPositions:"split",
    horizontalArrowPositions:"split",
    enableKeyboardNavigation:true,
    hideFocus:false,
    keyboardSpeed:0,
    initialDelay:300,
    speed:30,
    scrollPagePercent:0.8
}
})(jQuery,this);
;



DT=(function(){
    var _goes_nowhere_does_nothing=false;
    var _UserData=null;
    var _UserFlags=null;
    var _ipAddress=null;
    var _BrowserIsiOSDevice=/iP(hone|od|ad)/.test(window.navigator.userAgent);
    return{
        init:function(){
            this.Logger.init();
            this.Lightbox.init();
            this.ActivityIndicator.init();
            this.ImageLazyLoader.init();
            this.DynamicComponents.init();
            this.NavUI.init();
            this.Podcast.init();
            this.SSO.init();
            this.Sharing.init();
            this.Analytics.init();
            this.Ads.init();
            this.Newsletter.init();
            var self=this;
            if(navigator.userAgent.toLowerCase().indexOf("chrome")>=0){
                jQuery('input:-webkit-autofill').each(function(){
                    var text=jQuery(this).val();
                    var name=jQuery(this).attr('name');
                    jQuery(this).after(this.outerHTML).remove();
                    jQuery('input[name='+name+']').val(text);
                });
            }
        },
    getUserData:function(){
        return _UserData;
    },
    getUserFlags:function(){
        return _UserFlags;
    },
    getIpAddress:function(){
        return _ipAddress;
    },
    getUrlParameter:function(name){
        name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS="[\\?&]"+name+"=([^&#]*)";
        var regex=new RegExp(regexS);
        var results=regex.exec(window.location.search);
        if(results==null)
            return"";else
            return decodeURIComponent(results[1].replace(/\+/g," "));
    },
    getUrlHash:function(){
        if(document.location.hash){
            return document.location.hash.replace(/^#/,'');
        }
        return null;
    },
    refresh:function(){
        jQuery('body').trigger('dt_content_refresh');
    },
    Logger:(function(){
        var _enabled=false;
        return{
            init:function(){
                if(typeof console=="object"&&Function.prototype.bind&&console){
                    try{
                        var methods=["log","info","warn","error","assert","dir","clear","profile","profileEnd"];
                        var i=methods.length-1;
                        do{
                            var method=methods[i];
                            console[method]=Function.prototype.bind.call(console[method],console);
                        }while(i--);
                    }catch(error){}
                }
            if(Modernizr.localstorage){
                if(DT.getUrlParameter('dt_debug')=='1')
                    window.localStorage.setItem('dt_debug',1);
                else if(DT.getUrlParameter('dt_debug')=='0')
                    window.localStorage.setItem('dt_debug',0);
                if(window.localStorage.getItem('dt_debug')==1)
                    _enabled=true;else
                    _enabled=false;
            }
            this.log("DT.Logger module intialized");
        },
        log:function(){
            if(!_enabled)
                return false;
            if(typeof console!='undefined'&&typeof console.log=='function'){
                if(window.opera){
                    var i=0;
                    while(i<arguments.length){
                        console.log("Item "+(i+1)+": "+arguments[i]);
                        i++;
                    }
                }
            else if((Array.prototype.slice.call(arguments)).length==1&&typeof Array.prototype.slice.call(arguments)[0]=='string'){
                console.log((Array.prototype.slice.call(arguments)).toString());
            }else{
                console.log(Array.prototype.slice.call(arguments));
            }
        }else if(!Function.prototype.bind&&typeof console!='undefined'&&typeof console.log=='object'){
        Function.prototype.call.call(console.log,console,Array.prototype.slice.call(arguments));
    }else{}
    }
};

}()),
Analytics:(function(){
    var _currentGPTContainer=null;
    var _pageVisists=null;
    return{
        init:function(){
            var self=this;
            jQuery('body').on('dt_content_refresh',function(evt){
                self.trackPageView(document.location.pathname+document.location.hash);
            });
            jQuery('body').on('click','form.trackable input.submit',function(evt){
                var parentForm=jQuery(this).closest('form.trackable');
                self.trackFormSubmit(parentForm.attr('data-trackable-form'));
            });
            jQuery('body').on('click','a.trackable',function(evt){
                var link=jQuery(this);
                var etype=link.attr('data-event-type');
                var eaction=link.attr('data-event-action');
                var eparam=link.attr('data-event-param');
                self.trackCustomEvent(etype,eaction,eparam);
            });
            self.incrementPageVisits();
            DT.Logger.log("DT.Analytics module initialized");
        },
        incrementPageVisits:function(){
            var storage=(Modernizr.localstorage)?window.localStorage:false;
            var count=0;
            if(storage){
                var dt_visits=JSON.parse(storage.getItem('dt_visits'));
                if(dt_visits===null){
                    count=1;
                    dt_visits={
                        count:count,
                        timestamp:new Date().getTime()
                        };
                        
                    storage.setItem('dt_visits',JSON.stringify(dt_visits));
                }else{
                    var now=new Date().getTime();
                    if(now-dt_visits.timestamp>(60*60*24*30)){
                        count=1;
                        dt_visits={
                            count:count,
                            timestamp:new Date().getTime()
                            };
                            
                        storage.setItem('dt_visits',JSON.stringify(dt_visits));
                    }else{
                        count=dt_visits.count+1;
                        dt_visits.count=count;
                        dt_visits.timestamp=new Date().getTime();
                        storage.setItem('dt_visits',JSON.stringify(dt_visits));
                    }
                }
            }else{
        if(!jQuery.cookie('dt_visits')){
            count=1;
            var dt_visits=JSON.stringify({
                count:count,
                timestamp:new Date().getTime()
                });
            jQuery.cookie('dt_visits',dt_visits,{
                expires:30
            });
        }else{
            var dt_visits=JSON.parse(jQuery.cookie('dt_visits'));
            count=dt_visits.count+1;
            dt_visits.count=count;
            dt_visits.timestamp=new Date().getTime();
            jQuery.cookie('dt_visits',JSON.stringify(dt_visits),{
                expires:30
            });
        }
    }
_pageVisits=count;
jQuery('body').trigger('dt_page_visits',[count]);
},
getPageVisits:function(){
    return _pageVisits;
},
trackAffiliateLinkClick:function(affiliate){
    DT.Logger.log("Tracking affiliate link click for "+affiliate);
    _gaq.push(['_trackEvent','ad','click',affiliate]);
},
trackFormSubmit:function(formId){
    DT.Logger.log("Tracking form submit "+formId);
    _gaq.push(['_trackEvent','form','submit',formId]);
},
trackPageView:function(url){
    DT.Logger.log("Tracking page view "+url);
    _gaq.push(['_trackPageview',url]);
},
trackCustomEvent:function(eventType,eventAction,eventParam){
    DT.Logger.log("Tracking custom event");
    _gaq.push(['_trackEvent',eventType,eventAction,eventParam]);
}
};

}()),
Ads:(function(){
    return{
        init:function(){
            jQuery('body').on('dt_content_refresh',function(evt){
                if(typeof dt_reload_gpt_slots=='function')
                    dt_reload_gpt_slots();
            });
            DT.Logger.log("DT.Ads module initialized");
        }
    };

}()),
DynamicComponents:(function(){
    return{
        init:function(){
            var self=this;
            jQuery('body').on('dtsso_login_success',function(evt){
                DT.Logger.log("SSO Login successful. Reloading dynamic components");
                self.reload();
            });
            jQuery('body').on('dtsso_register_success',function(evt){
                DT.Logger.log("SSO Register successful. Reloading dynamic components");
                self.reload();
            });
            jQuery('body').on('dtsso_link_success',function(evt){
                DT.Logger.log("SSO Link successful. Reloading dynamic components");
                self.reload();
            });
            this.reload();
            DT.Logger.log("DT.DynamicComponents module initialized");
        },
        reload:function(){
            DT.Logger.log("Loading dynamic components");
            var prmstr=window.location.search.substr(1);
            var prmarr=prmstr.split("&");
            var params={};
            
            for(var i=0;i<prmarr.length;i++){
                var tmparr=prmarr[i].split("=");
                params[tmparr[0]]=tmparr[1];
            }
            var args={
                'action':'dtc_get_logged_in_components',
                'components':DTCRequestedLoggedInComponents,
                'args':DTCRequestedLoggedInComponentsArgs,
                '_t':new Date().getTime()
                };
                
            if(params._dtiflush!==undefined){
                args._dtiflush=params._dtiflush;
            }
            jQuery.get(ajaxurl,args,function(data){
                data=jQuery.parseJSON(data);
                if(data.is_user_logged_in==true){
                    _UserFlags=data.user_flags;
                    if(data.user_data){
                        _UserData=data.user_data;
                        jQuery('body').trigger('dt_user_data_available',[_UserData]);
                    }else{
                        _ipAddress=data.ip_address;
                        jQuery('body').trigger('dt_guest_ip_available',[_ipAddress]);
                    }
                    if(document.location.href.match(/.*\/login\/\?redirect_to=.*/i)){
                        var redirect_to=document.location.href.replace(/^.*\/login\/\?redirect_to=/i,'').replace(/&.*/,'');
                        document.location=decodeURIComponent(redirect_to);
                    }
                }
            var keys=hashKeys(data);
                var i=keys.length-1;
                do{
                var component=keys[i];
                var component_html=data[component];
                if(jQuery("#logged-in-component-"+component).length){
                    jQuery("#logged-in-component-"+component).html(component_html);
                    jQuery('body').trigger('dt_dynamic_component_loaded',[component,component_html]);
                }
            }while(i--);
            jQuery('body').trigger('dt_dynamic_components_loaded');
        });
}
};

}()),
ActivityIndicator:(function(){
    var _showing=false;
    return{
        init:function(){
            if(Modernizr.cssanimations){
                jQuery.fancybox.showLoading=this.show;
                jQuery.fancybox.hideLoading=this.hide;
            }
        },
    isShowing:function(){
        return _showing;
    },
    show:function(indicator_target,overlay_targets){
        if(typeof indicator_target==='undefined')
            indicator_target='body';
        if(overlay_targets){
            jQuery(overlay_targets).append('<div class="activity-indicator-overlay"></div>');
        }
        if(Modernizr.cssanimations){
            jQuery(indicator_target).append('<div class="blue-balls"><div class="blue-ball"></div><div class="blue-ball-2"></div></div>');
        }else{
            jQuery.fancybox.showLoading();
        }
        _showing=true;
    },
    hide:function(indicator_target,overlay_targets){
        if(typeof indicator_target==='undefined')
            indicator_target='body';
        if(overlay_targets){
            jQuery(overlay_targets).find('.activity-indicator-overlay').remove();
        }
        if(Modernizr.cssanimations){
            jQuery(indicator_target).find('.blue-balls').remove();
        }else{
            jQuery.fancybox.hideLoading();
        }
        _showing=false;
    }
}
}()),
ImageLazyLoader:(function(){
    var _image_holders=[];
    var _loaded_images=[];
    var _processing=false;
    var _regex=new RegExp("<img [^>]* />");
    var _images=[];
    return{
        init:function(){
            if(typeof DTLazyLoadedImages==='undefined')
                return;
            _image_holders=jQuery('.image-holder','#primary-wrap');
            _images=DTLazyLoadedImages.match(/<img [^>]* \/>/g);
            var self=this;
            jQuery(window).scroll(function(){
                self.lazyLoadImages();
            });
            this.lazyLoadImages();
            DT.Logger.log("DT.ImageLazyLoader module initialized");
        },
        reportBrokenImage:function(img){
            var img=jQuery(img);
            if(img.attr('class').match(/wp-image-\d+/)){
                var regex=/wp-image-(\d+)/;
                var match=regex.exec(img.attr('class'));
                var attachment_id=match[1];
                DT.Logger.log("Broken image url is derived from attachment "+attachment_id);
                jQuery.getJSON(ajaxurl,{
                    action:'dti_broken_attachment',
                    attachment_id:attachment_id,
                    _dtiflush:1
                })
                }
            },
    loadImageInHolder:function(index){
        var self=this;
        var img=jQuery(_images[index]).error(function(){
            DT.Logger.log("Error lazy loading image "+jQuery(this).attr('src'));
            self.reportBrokenImage(jQuery(this));
        }).load(function(){
            DT.Logger.log("Lazy loaded "+jQuery(this).attr('src')+" at index "+index);
            jQuery('body').trigger('dt_image_loaded',[this]);
        });
        jQuery(_image_holders[index]).replaceWith(img);
        _loaded_images.push(index);
    },
    lazyLoadImages:function(){
        if(typeof(DTLazyLoadedImages)==='undefined'){
            return;
        }
        _processing=true;
        for(var i=0;i<_image_holders.length;i++){
            if(jQuery.inArray(i,_loaded_images)==-1&&jQuery(_image_holders[i]).is(':lazyloadable')){
                this.loadImageInHolder(i);
            }
        }
    _processing=false;
}
}
}()),
ObjectCache:(function(){
    var _storage=(Modernizr.localstorage)?window.localStorage:false;
    var _fallback_data_store={};
    
    return{
        init:function(){},
        getItem:function(key){
            var current_time=Math.round(new Date().getTime()/1000);
            var data=false;
            if(_storage)
                data=_storage.getItem(key);else
                data=_fallback_data_store[key];
            if(!data)
                return false;
            else{
                data=JSON.parse(data);
                var expires=data['expiry'];
                if(current_time>expires)
                    return false;else
                    return data.data_value;
            }
        },
    setItem:function(key,data_value,timeout){
        var current_time=Math.round(new Date().getTime()/1000);
        var expires=current_time+timeout;
        var data=JSON.stringify({
            data_value:data_value,
            expiry:expires
        });
        if(_storage){
            _storage.setItem(key,data);
        }else{
            _fallback_data_store[key]=data;
        }
    }
}
}()),
NavUI:(function($){
    var _x_last=0;
    var _y_last=0;
    var _block_close_child=false;
    var _block_timeout_child;
    var _directional;
    var _content_blob;
    return{
        init:function(){
            var self=this;
            var close_timeout;
            self.sticky_nav();
            var nav=$('#nav-bar nav.primary');
            var candidates=nav.find('#menu-item-411326, #menu-item-411314');
            nav.addClass('mega');
            $('body').one('dt_meganav_content_loaded',function(evt,content){
                _content_blob=$('<div>'+content+'</div>');
            });
            candidates.each(function(){
                var meganav=$(this);
                var current;
                meganav.find('ul.sub-menu').wrap('<div class="mega-wrap"><div></div></div>');
                var container=$('<div class="mega-container"></div>');
                meganav.find('.mega-wrap > div').append(container);
                var menu_items=meganav.find('.menu-item-object-category, .menu-item-object-review_category');
                var data={};
                
                if(meganav.hasClass('menu-item-411326')){
                    data.parent_id='411326';
                    container.addClass('reviews');
                }
                else{
                    data.parent_id='411314';
                    container.addClass('news');
                }
                if(data.parent_id=='411326'){
                    menu_items.each(function(){
                        $(this).find('a').text($(this).find('a').text().replace(/ reviews/i,'s'));
                    });
                }
                meganav.mouseenter(function(){
                    var key=data.parent_id+'-0';
                    var wrap=meganav.find('.mega-wrap');
                    current=key;
                    menu_items.removeClass('on');
                    self.start_directional();
                    if(typeof _content_blob=='object'){
                        if(_content_blob.find('.id-'+key).length>0){
                            container.html(_content_blob.find('.id-'+key).html());
                            $('body').trigger('dt_meganav_container_refresh_'+key);
                        }
                    }
                else{
                    container.html('<div class="col col-a"><div class="initial-loader"></div></div>');
                    $('body').one('dt_meganav_content_loaded',function(){
                        container.html(_content_blob.find('.id-'+current).html());
                        $('body').trigger('dt_meganav_container_refresh_'+current);
                    });
                }
                if(nav.data('some_mega_nav_is_open'))
                    wrap.show().addClass('on');else
                    wrap.slideDown(280).addClass('on');
                nav.data('some_mega_nav_is_open',1);
                    clearTimeout(close_timeout);
                }).mouseleave(function(){
                self.stop_directional();
                var stayOpen='meganavsitstay';
                if(checkQuerystringKey(stayOpen)==false){
                    $('body').off('dt_meganav_content_loaded');
                    meganav.find('.mega-wrap').hide().removeClass('on');
                    container.html('');
                    close_timeout=setTimeout(function(){
                        nav.data('some_mega_nav_is_open',0);
                    },100);
                }
            });
            menu_items.on('mouseenter',function(){
                if(_block_close_child)
                    return;
                var menu_item=$(this);
                var matches=menu_item.attr('class').match(/menu-item-object-id-([0-9]+)/i);
                var child_id=(1 in matches)?matches[1]:'0';
                var key=data.parent_id+'-'+child_id;
                current=key;
                menu_items.removeClass('on');
                if(typeof _content_blob=='object'&&_content_blob.find('.id-'+key).length>0){
                    container.html(_content_blob.find('.id-'+key).html());
                    $('body').trigger('dt_meganav_container_refresh_'+key);
                }
                menu_item.addClass('on');
            });
        });
    DT.Logger.log("DT.NavUI module initialized");
},
start_directional:function(){
    _directional=function dtnav_directional(e){
        var x_dif=e.pageX-_x_last;
        var y_dif=_y_last-e.pageY;
        if(Math.abs(x_dif)<4)
            return;
        if(x_dif>0&&y_dif!=0&&Math.abs(y_dif/x_dif)<1){
            _block_close_child=true;
            clearTimeout(_block_timeout_child);
            _block_timeout_child=setTimeout(function(){
                _block_close_child=false;
            },200);
        }
        _x_last=e.pageX;
        _y_last=e.pageY;
    }
    $('body').on('mousemove',_directional);
},
stop_directional:function(){
    $('body').off('mousemove',_directional);
},
sticky_nav:function(){
    var fix_busy=false;
    var body=$('body');
    var win=$(window);
    var disable=(win.height()<400)?true:false;
    function apply_sticky(){
        body.addClass('sticky-nav');
        if(win.scrollTop()>=54)
            body.addClass('stuck-nav');else
            body.removeClass('stuck-nav');
    }
    function remove_sticky(){
        body.removeClass('sticky-nav stuck-nav');
    }
    win.resize(function(){
        if(win.height()<400){
            disable=true;
            remove_sticky();
        }
        else{
            disable=false;
            apply_sticky();
        }
    });
win.scroll(function(){
    if(!disable){
        apply_sticky();
    }
    if(fix_busy)
        return;
    fix_busy=true;
    if($(window).scrollTop()<2){
        setTimeout(function(){
            if($(window).scrollTop()<2){
                window.scrollTo(0,1);
                window.scrollTo(0,0);
            }
            setTimeout(function(){
                fix_busy=false;
            },20);
        },50);
    }
    else{
        fix_busy=false;
    }
});
},
drill_down_ad_unit:function(parent_menu_id,child_object_id,options){
    var options=$.extend({
        image_url:'',
        click_url:'',
        pixel_url:'',
        click_id:''
    },options);
    var key=parent_menu_id+'-'+child_object_id;
    var blob_class='.id-'+key;
    function process(){
        var content=_content_blob.find(blob_class);
        if(content.length<1)
            return;
        if(options.image_url){
            var image='<img src="'+options.image_url+'" alt="Advertisement" />';
            if(options.click_url)
                image='<a href="'+options.click_url+'" target="_blank" rel="nofollow">'+image+'</a>';
            image=$('<div class="dtaddd-image" style="width: 494px; height: 60px; overflow: hidden;">'+image+'</div>');
            if(options.click_id){
                image.find('a').attr({
                    'data-event-type':'dt-drill-down',
                    'data-event-action':'click',
                    'data-event-param':options.click_id+'-image-link'
                    }).addClass('trackable');
            }
            content.find('.col-b').html(image);
        }
        if(options.pixel_url){
            $('body').one('dt_meganav_container_refresh_'+key,function(){
                var tracking_pixel=$('<img class="dt-pxl" width="1" height="1" src="'+options.pixel_url+'" alt="" />');
                $('body').append(tracking_pixel);
            });
        }
    }
if(typeof _content_blob=='object'){
    process();
}
else{
    $('body').one('dt_meganav_content_loaded',function(){
        process();
    });
}
}
};

}(jQuery)),
Lightbox:(function(){
    var _is_open=false;
    return{
        init:function(){
            var self=this;
            jQuery('body').on('click','.fancybox-wrap a.close-modal',function(evt){
                jQuery.fancybox.close();
            });
            DT.Logger.log("DT.Lightbox module initialized");
        },
        openImageGroup:function(group,options){
            if(typeof group!=='object')
                group=[];
            if(typeof option!=='object')
                object={};
                
            var defaults={
                'index':0,
                'type':'image',
                'transitionIn':'fade',
                'transitionOut':'fade',
                'speedIn':600,
                'speedOut':200,
                'overlayShow':true,
                'padding':0,
                'autoSize':true,
                'centerOnScroll':true,
                'overlayColor':'#fff',
                'closeBtn':true,
                'onStart':function(){
                    jQuery('iframe, object, embed').hide();
                },
                'afterShow':function(){
                    self._is_open=true;
                },
                'afterClose':function(){
                    self._is_open=false;
                },
                'onCleanup':function(){
                    jQuery('iframe, object, embed').show();
                }
            }
        var settings=jQuery.extend({},defaults,options);
        jQuery.fancybox(group,settings);
    },
    show_dialog:function(dialog_id,url,width,height,custom_dialog_options){
        DT.Logger.log("Showing dialog: "+dialog_id);
        var dialog_options={
            'transitionIn':'fade',
            'transitionOut':'fade',
            'speedIn':600,
            'speedOut':200,
            'overlayShow':true,
            'autoDimensions':false,
            'width':width,
            'height':height,
            'padding':0,
            'autoScale':false,
            'type':'ajax',
            'centerOnScroll':true,
            'overlayColor':'#fff',
            'closeBtn':false,
            'beforeLoad':function(){
                jQuery('iframe, object, embed').hide();
                jQuery('body').trigger('dt_dialog_opening',[dialog_id]);
            },
            'afterShow':function(){
                jQuery('body').trigger('dt_dialog_opened',[dialog_id]);
                self._is_open=true;
            },
            'beforeClose':function(){
                jQuery('iframe, object, embed').show();
                jQuery('body').trigger('dt_dialog_closing',[dialog_id]);
            },
            'afterClose':function(){
                jQuery('body').trigger('dt_dialog_closed',[dialog_id]);
                self._is_open=false;
            }
        }
    if(custom_dialog_options)
        jQuery.extend(dialog_options,custom_dialog_options);
    jQuery.fancybox(url,dialog_options);
},
close_dialog:function(){
    jQuery.fancybox.close();
},
is_open:function(){
    return self._is_open;
}
};

}()),
SSO:(function(){
    var _logged_in=false;
    return{
        init:function(){
            var self=this;
            jQuery('body').on('dt_user_data_available',function(evt,userData){
                _logged_in=true;
            });
            jQuery('body').on('dtsso_login_request',function(evt){
                evt.preventDefault();
                self.show_login_dialog();
            });
            jQuery('body').on('click','.require-tos-agree',function(evt){
                evt.preventDefault();
                var self=jQuery(this);
                var checkbox=jQuery('#dt-tos-agree');
                if(checkbox.length>0&&!checkbox.is(':checked')){
                    alert("You must agree to Digital Trends' Terms of Use before continuing.");
                    self.stopPropagation();
                }
            });
        jQuery('body').on('click','.login-link',function(evt){
            evt.preventDefault();
            self.show_login_dialog();
        });
        jQuery('body').on('click','.signup-link',function(evt){
            evt.preventDefault();
            self.show_signup_dialog();
        });
        jQuery('body').on('click','.register-link',function(evt){
            evt.preventDefault();
            self.show_register_dialog();
        });
        jQuery('body').on('click','.lost-password-link',function(evt){
            evt.preventDefault();
            self.show_lost_password_dialog();
        });
        jQuery('body').on('click','.sso-link-existing',function(evt){
            evt.preventDefault();
            if(!jQuery('form#register-account').length)
                return;
            var params={
                provider:jQuery('form#register-account input#provider').val(),
                provider_data:jQuery('form#register-account input#provider_data').val(),
                user_profile:jQuery('form#register-account input#user_profile').val()
                };
                
            self.link_existing_account(params);
        });
        jQuery('body').on('click','.sso-unlink-provider',function(evt){
            evt.preventDefault();
            var provider=jQuery(this).attr('data-sso-provider');
            if(!provider)
                return;
            self.show_provider_unlink_dialog({
                provider:provider
            });
        });
        jQuery('body').on('click','form#unlink-provider.ajax input.submit',function(evt){
            evt.preventDefault();
            self.unlink(jQuery('form#unlink-provider.ajax').serialize());
        });
        jQuery('body').on('click','form#register-account.ajax input.submit',function(evt){
            evt.preventDefault();
            self.register(jQuery('form#register-account.ajax').serialize());
        });
        jQuery('body').on('click','form#login.ajax input.submit',function(evt){
            evt.preventDefault();
            self.login(jQuery('form#login.ajax').serialize());
        });
        jQuery('body').on('click','form#lost-password.ajax input.submit',function(evt){
            evt.preventDefault();
            DT.ActivityIndicator.show('.auth-modal','.auth-modal');
            self.reset_password(jQuery('form#lost-password.ajax').serialize());
        });
        jQuery('body').on('dtsso_reset_password_success',function(evt,message){
            evt.preventDefault();
            DT.ActivityIndicator.hide('.auth-modal','.auth-modal');
            jQuery('body').one('dt_dialog_opened',function(evt,dialog_id){
                if(dialog_id=='login'){
                    jQuery('#login-errors').html('<li class="info">'+message+'</li>');
                }
            });
        self.show_login_dialog();
        });
    jQuery('body').on('dtsso_reset_password_fail',function(evt,message){
        evt.preventDefault();
        DT.ActivityIndicator.hide('.auth-modal','.auth-modal');
        jQuery('#lost-password-errors').html('<li class="error">'+message+'</li>');
    });
    jQuery('body').on('dtsso_provider_login_success',function(evt,provider,data,autoLogin){
        if(!_logged_in||!autoLogin)
            self.provider_login(provider,data);
    });
    jQuery('body').on('dtsso_link_success',function(evt,provider,provider_data){
        DT.Logger.log('dtsso_link_success');
        if(jQuery('.auth-modal').length>0)
            DT.Lightbox.close_dialog();
        else{
            jQuery('.provider-login').each(function(i,elem){
                var elem=jQuery(elem);
                if(elem.attr('data-provider')==provider)
                    elem.hide();
            });
        }
    });
jQuery('body').on('dtsso_link_fail',function(evt,message,provider,provider_data){
    alert("Provider Link Error: "+message);
});
jQuery('body').on('dtsso_unlink_success',function(evt,provider){
    setTimeout(function(){
        document.location.reload(true);
    },3000);
});
jQuery('body').on('dtsso_must_register',function(evt,provider,provider_data,user_profile,flags){
    var params={
        provider:provider,
        provider_data:provider_data,
        user_profile:user_profile,
        flags:flags
    };
    
    self.show_register_dialog(params);
    jQuery('body').one('dt_dialog_opened',function(evt,dialog_id){
        if(dialog_id!='register')
            return;
        jQuery(['username','email','password','password2']).each(function(i,field_name){
            if(flags[field_name]!==undefined){
                if(flags[field_name]=='USERNAME_IN_USE')
                    var field_error='This username is already associated with another account.';
                else if(flags[field_name]=='EMAIL_IN_USE')
                    var field_error='This email address is already associated with another account.';
                else if(flags[field_name]=='FIELD_MISSING')
                    var field_error='This field cannot be blank';
                else if(flags[field_name]=='PASSWORDS_DO_NOT_MATCH')
                    var field_error='Passwords do not match';
                jQuery('form#register-account #'+field_name+'-error').text(field_error);
            }
        });
    });
});
jQuery('body').on('dtsso_login_fail',function(evt,message,provider,data){
    if(jQuery('form#login').length==0)
        return;
    jQuery('#login-errors').html('<li class="error">'+message+'</li>');
    jQuery('input#password').val('');
});
jQuery('body').on('dtsso_login_success',function(evt){
    DT.Logger.log('dtsso_login_success');
    if(jQuery('.auth-modal').length>0)
        DT.Lightbox.close_dialog();
});
jQuery('body').on('dtsso_register_fail',function(evt,message,flags){
    if(jQuery('form#register-account').length==0)
        return;
    jQuery(['username','email','password','password2']).each(function(i,field_name){
        if(flags[field_name]!==undefined){
            if(flags[field_name]=='USERNAME_IN_USE')
                var field_error='This username is already associated with another account.';
            else if(flags[field_name]=='EMAIL_IN_USE')
                var field_error='This email address is already associated with another account.';
            else if(flags[field_name]=='FIELD_MISSING')
                var field_error='This field cannot be blank';
            else if(flags[field_name]=='PASSWORDS_DO_NOT_MATCH')
                var field_error='Passwords do not match';
            jQuery('form#register-account #'+field_name+'-error').text(field_error);
        }
    });
});
jQuery('body').on('dtsso_register_success',function(evt){
    DT.Logger.log("dtsso_register_success");
    if(jQuery('.modal.register').length)
        DT.Lightbox.close_dialog();
});
DT.Logger.log("DT.SSO module initialized");
},
show_lost_password_dialog:function(params){
    var param_string='';
    if(params)
        param_string='&'+this.serialize(params);
    DT.Lightbox.show_dialog('lost_password',ajaxurl+'?action=dtsso_lost_password_dialog'+param_string,660,260);
},
show_login_dialog:function(params){
    var param_string='';
    if(params)
        param_string='&'+this.serialize(params);
    DT.Lightbox.show_dialog('login',ajaxurl+'?action=dtsso_login_dialog'+param_string,660,260);
},
show_signup_dialog:function(params){
    var param_string='';
    if(params)
        param_string='&'+this.serialize(params);
    DT.Lightbox.show_dialog('signup',ajaxurl+'?action=dtsso_signup_dialog'+param_string,660,429);
},
show_register_dialog:function(params){
    var param_string='';
    if(params)
        param_string='&'+this.serialize(params);
    DT.Lightbox.show_dialog('register',ajaxurl+'?action=dtsso_register_dialog'+param_string,660,600);
},
show_provider_unlink_dialog:function(params){
    var param_string='';
    if(params!==null&&typeof params=='object')
        param_string='&'+this.serialize(params);
    DT.Lightbox.show_dialog('provider_unlink',ajaxurl+'?action=dtsso_provider_unlink_dialog'+param_string,660,429);
},
serialize:function(obj,prefix){
    var str=[];
    for(var p in obj){
        var k=prefix?prefix+"["+p+"]":p,v=obj[p];
        str.push(typeof v=="object"?this.serialize(v,k):encodeURIComponent(k)+"="+encodeURIComponent(v));
    }
    return str.join("&");
},
register:function(params){
    if(params!==null&&typeof params=='object')
        params=this.serialize(params);
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_register',params,function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_register_success');
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_register_fail',[response.message,response.flags]);
        }
    });
},
unlink:function(params){
    if(params!==null&&typeof params=='object')
        params=this.serialize(params);
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_provider_unlink',params,function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_deauthorize_provider',[response.provider]);
            jQuery('body').trigger('dtsso_unlink_success',[response.provider]);
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_unlink_fail',[response.message]);
        }
    });
},
link_existing_account:function(params){
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_link',params,function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_link_success',[params.provider,params.provider_data]);
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_link_fail',[response.message,params.provider,params.provider_data]);
        }
    });
},
login:function(params){
    if(params!==null&&typeof params=='object')
        params=this.serialize(params);
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_login',params,function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_login_success',[null,null]);
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_login_fail',[response.message,null,null]);
        }
    });
},
provider_login:function(provider,data){
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_provider_login',{
        provider:provider,
        provider_data:data
    },function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_login_success',[provider,data]);
        }else if(response.status=='LINK'){
            jQuery('body').trigger('dtsso_link_success',[provider,data]);
        }else if(response.status=='REGISTER'){
            jQuery('body').trigger('dtsso_must_register',[provider,data,response.user_profile,response.flags]);
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_login_fail',[response.message,provider,data]);
        }
    });
},
reset_password:function(params){
    if(params!==null&&typeof params=='object')
        params=this.serialize(params);
    DT.ActivityIndicator.show();
    jQuery.post(ajaxurl+'?action=dtsso_ajax_reset_password',params,function(response){
        DT.ActivityIndicator.hide();
        response=jQuery.parseJSON(response);
        if(response.status=='OK'){
            jQuery('body').trigger('dtsso_reset_password_success',response.message);
        }else if(response.status=='ERROR'){
            jQuery('body').trigger('dtsso_reset_password_fail',[response.message]);
        }
    });
}
};

}()),
Podcast:(function(){
    return{
        init:function(){
            var self=this;
            jQuery('body').on('click','a.podcast.play',function(evt){
                evt.preventDefault();
                self.showPlayer(jQuery(this).attr('href'));
            });
            DT.Logger.log("DT.Podcast module initialized");
        },
        showPlayer:function(url){
            window.open(url,'podcastpopupwindow','width=500, height=180, status=0, location=0, toolbar=0');
        }
    };

}()),
Sharing:(function(){
    var _shareCountFetchScheduled=false;
    var _gplusInteracting=false;
    return{
        init:function(){
            if(typeof(dtDisableShare)!='undefined'&&dtDisableShare)
                return;
            this.Facebook.init();
            this.Twitter.init()
            this.GooglePlus.init();
            this.LinkedIn.init();
            this.Email.init();
            this.SocialSharing.init();
        },
        scheduleCountFetch:function(){
            var object_params;
            var post_id=jQuery('body').attr('data-post-id');
            var classes=jQuery('body').attr('class');
            var term_matches=classes.match(/term-([0-9]+)/i);
            var tax_matches=classes.match(/tax-([A-Za-z0-9_]+)/i);
            var term_id=(term_matches&&1 in term_matches)?term_matches[1]:'';
            var taxonomy=(tax_matches&&1 in tax_matches)?tax_matches[1]:'';
            if(post_id){
                object_params={
                    action:'dtc_schedule_fetch_share_counts',
                    object_id:post_id
                };
            
        }
        else if(term_id&&taxonomy){
            object_params={
                action:'dtc_schedule_fetch_share_counts',
                object_id:term_id,
                taxonomy:taxonomy
            };
        
    }
    else{
        return;
    }
    if(_shareCountFetchScheduled)
        return;
    jQuery.getJSON(ajaxurl,object_params,function(response){
        _shareCountFetchScheduled=true;
        if(response.status=='ERROR')
            DT.Logger.log("Error while scheduling social share count fetch: "+response.message);
    });
},
Facebook:(function(){
    return{
        init:function(){
            jQuery('body').on('dtsso_facebook_ready',function(){
                FB.XFBML.parse();
            });
        }
    };

}()),
Twitter:(function(){
    return{
        init:function(){
            jQuery.getCachedScript('http://platform.twitter.com/widgets.js').done(function(){
                if(twttr.widgets!==undefined)
                    twttr.widgets.load();
            });
        }
    };

}()),
GooglePlus:(function(){
    return{
        init:function(){
            window.___gcfg={
                lang:'en-US',
                parsetags:'explicit'
            };
            
            jQuery.getCachedScript('https://apis.google.com/js/plusone.js').done(function(){
                gapi.plusone.go();
            });
        },
        startInteraction:function(){
            _gplusInteracting=true;
            jQuery('body').trigger('dtsharing_gplus_start_interaction');
        },
        endInteraction:function(){
            _gplusInteracting=false;
            jQuery('body').trigger('dtsharing_gplus_end_interaction');
        }
    };

}()),
LinkedIn:(function(){
    return{
        init:function(){
            jQuery.getCachedScript('http://platform.linkedin.com/in.js').done(function(){
                IN.init();
            });
        }
    };

}()),
Email:(function(){
    return{
        init:function(){
            var sshare=jQuery('.social-share');
            for(var i=0;i<sshare.length;i++){
                var emailLink=jQuery(sshare.get(i));
                emailLink.find('.email a').click(function(){
                    var post_id=jQuery(this).attr('data-post-id');
                    DT.Lightbox.show_dialog('share_email',ajaxurl+'?action=dt_ajax_share_email_dialog&post_id='+post_id,500,450);
                    return false;
                });
            }
            jQuery('body').on('click','form#share-email.ajax input.submit',function(e){
                e.preventDefault();
                var url=ajaxurl+'?action=dt_ajax_share_email_dialog';
                var data=jQuery('form#share-email.ajax').serialize();
                jQuery.post(url,data,function(response_data){
                    jQuery('.email-share.modal').html(response_data);
                });
            });
        }
    };

}()),
SocialSharing:(function(){
    return{
        init:function(){
            var sitewideSocial=jQuery('.social-share, #sitewide-social');
            for(var i=0;i<sitewideSocial.length;i++){
                var container=jQuery(sitewideSocial.get(i));
                var expandable=container.find('.facebook, .twitter, .gplus, .linkedin');
                expandable.on('mouseenter',function(){
                    var self=jQuery(this);
                    var expand=self.find('.expand');
                    var appClass=expand.attr('data-app-class');
                    self.addClass('expanded');
                    if(self.data('parsed'))
                        return;
                    if(appClass=='fb-like'){
                        
                    }
                    else if(appClass=='twitter-share-button'){
                        var widgetContainer=expand.find('.widget-container');
                        widgetContainer.hide();
                        expand.find('.app-class').removeClass('app-class').addClass(appClass);
                        expand.find('.im-busy').remove();
                        expand.append('<span class="im-busy">Loading...</span>');
                        twttr.widgets.load(self.get(0));
                        setTimeout(function(){
                            expand.find('.im-busy').remove();
                            widgetContainer.show();
                        },2000);
                    }
                    else if(appClass=='twitter-follow-button'){
                        expand.find('.app-class').removeClass('app-class').addClass(appClass);
                        twttr.widgets.load(self.get(0));
                    }
                    else if(appClass=='g-plusone'){
                        expand.find('.app-class').removeClass('app-class').addClass(appClass);
                        gapi.plusone.go(self.get(0));
                    }
                    else if(appClass=='IN/Share'){
                        expand.find('script').attr('type',appClass);
                        IN.parse(self.get(0));
                    }
                    self.data('parsed',1);
                    DT.Sharing.scheduleCountFetch();
                }).on('mouseleave',function(){
                    var self=jQuery(this);
                    if(self.hasClass('gplus')&&_gplusInteracting){
                        jQuery('body').one('dtsharing_gplus_end_interaction',function(){
                            self.removeClass('expanded');
                        });
                    }
                    else{
                        self.removeClass('expanded');
                    }
                });
            }
        }
    };

}())
};

}()),
Newsletter:(function($){
    var _self;
    var _ajax_url;
    return{
        init:function(selector){
            _self=this;
            _ajax_url=ajaxurl+'?action=dt_newsletter_register_by_email';
            _self.register('.widget.newsletter-register, #site-footer .newsletter-register');
            DT.Logger.log("DT.newsletter module initialized");
        },
        register:function(selector){
            $(selector).each(function(){
                var container_el=$(this);
                var msg_el=container_el.find('.msg');
                var form_el=container_el.find('form');
                form_el.submit(function(evt){
                    evt.preventDefault();
                    var serialized_data=form_el.serialize();
                    form_el.addClass('off').find('input').attr('disabled','disabled');
                    $.get(_ajax_url,serialized_data).done(function(response){
                        var data=response;
                        if(data.status==='OK'){
                            $('body').trigger('dt_newsletter_register_success');
                            form_el.remove();
                            msg_el.attr('class','msg').addClass('success');
                        }
                        else if(data.status==='VALIDATION_ERROR'){
                            form_el.removeClass('off').find('input').removeAttr('disabled');
                            msg_el.attr('class','msg').addClass('fix');
                        }
                        else if(data.status==='ERROR'){
                            form_el.removeClass('off').find('input').removeAttr('disabled');
                            msg_el.attr('class','msg').addClass('error');
                        }
                        if(data.message)
                            msg_el.html(data.message);
                    }).fail(function(){
                        form_el.remove();
                        msg_el.attr('class','msg').addClass('error');
                        msg_el.html('An error occurred. Please try again later.');
                    });
                });
            });
        }
    };

}(jQuery))
};

}());
DT.init();
function dtGplusStartInteraction(params){
    DT.Sharing.GooglePlus.startInteraction(params);
}
function dtGplusEndInteraction(params){
    DT.Sharing.GooglePlus.endInteraction(params);
};



DT.Activities=(function($){
    return{
        init:function(){
            this.NotificationMenuUI.init();
            DT.Logger.log("DT.Activities module initialized");
        },
        NotificationMenuUI:(function(){
            var _container_selector='#logged-in-component-account-links .notifications';
            var _resetXHR=null;
            return{
                init:function(){
                    var self=this;
                    $('body').on('dt_notifications_update_unread_count',function(evt,unread_count){
                        self.updateUnreadIndicator(unread_count);
                    });
                    $('body').on('hover',_container_selector+'.on a.trigger',function(evt){
                        self.markAllRead();
                    });
                },
                updateUnreadIndicator:function(unread_count){
                    if(unread_count>0){
                        $(_container_selector).addClass('on');
                    }else{
                        $(_container_selector).removeClass('on');
                    }
                },
            markAllRead:function(){
                if(_resetXHR)
                    return;
                _resetXHR=$.getJSON(ajaxurl,{
                    action:'dta_reset_notifications'
                },function(response){
                    if(response.status=='OK'){
                        $('body').trigger('dt_notifications_update_unread_count',[response.unread]);
                    }
                });
        }
        };
    
}())
};

}(jQuery));
DT.Activities.init();
;



DT.UI=(function($){
    var _self;
    return{
        init:function(){
            _self=this;
            _self.bucket_slider();
        },
        bucket_slider:function(){
            $('.dt-ui.bucket-slider').each(function(){
                var px_per_sec=1920;
                var self=$(this);
                var bucket=self.find('.bucket');
                var viewport=bucket.find('.viewport');
                var slider=viewport.find('.items');
                var items=slider.find('.item');
                var item_2=slider.find('.item:nth-child(2)');
                var busy=false;
                var curr_page=0;
                if(items.length<3)
                    return;
                var item_width=item_2.position().left-items.first().position().left;
                var items_width=items.length*item_width;
                var viewport_width=viewport.width();
                var per_page=Math.floor(viewport_width/item_width);
                var last_page=Math.ceil(items.length/per_page)-1;
                var increment_width=item_width*per_page;
                var slide_speed=Math.round(increment_width/px_per_sec*1000);
                var prev_button=$('<div class="button prev"><span></span></div>');
                var next_button=$('<div class="button next"><span></span></div>');
                prev_button.prependTo(bucket);
                next_button.prependTo(bucket);
                update_buttons();
                prev_button.click(function(){
                    if(busy||curr_page==0)
                        return;
                    busy=true;
                    curr_page--;
                    slider.animate({
                        left:'+='+increment_width
                        },slide_speed,function(){
                        busy=false;
                        update_buttons();
                    });
                });
                next_button.click(function(){
                    if(busy||curr_page==last_page)
                        return;
                    busy=true;
                    curr_page++;
                    slider.animate({
                        left:'-='+increment_width
                        },slide_speed,function(){
                        busy=false;
                        update_buttons();
                    });
                });
                function update_buttons(){
                    if(curr_page==0)
                        prev_button.removeClass('on');else
                        prev_button.addClass('on');
                    if(curr_page==last_page)
                        next_button.removeClass('on');else
                        next_button.addClass('on');
                }
            });
    }
};

}(jQuery));
DT.UI.init();
;



DT.SSO.Facebook=(function($){
    var _ready=false;
    return{
        init:function(){
            var self=this;
            $('body').on('dtsso_facebook_ready',function(evt){
                self.init_login_buttons();
                self.check_connection_status();
            });
            $('body').on('dtsso_facebook_login_success',function(evt,authResponse,autoLogin){
                var data={
                    authResponse:authResponse
                };
                
                $('body').trigger('dtsso_provider_login_success',['Facebook',data,autoLogin]);
            });
            $('body').on('dtsso_deauthorize_provider',function(evt,providerName){
                if(providerName!='Facebook')
                    return;
                self.deauthorize();
            });
            
            (function(d){
                var js,id='facebook-jssdk',ref=d.getElementsByTagName('script')[0];
                if(d.getElementById(id)){
                    return;
                }
                js=d.createElement('script');
                js.id=id;
                js.async=true;
               
                ref.parentNode.insertBefore(js,ref);
            }(document));
            DT.Logger.log("DT.SSO.Facebook module initialized");
        },
        is_ready:function(){
            return _ready;
        },
        init_login_buttons:function(){
            var self=this;
            $('body').on('click','a.facebook-login',function(evt){
                evt.preventDefault();
                self.show_login_dialog();
            });
        },
        show_login_dialog:function(){
            FB.login(function(response){
                if(response.authResponse){
                    $('body').trigger('dtsso_facebook_login_success',[response.authResponse,false]);
                }else{
                    $('body').trigger('dtsso_facebook_login_cancelled');
                }
            });
    },
    check_connection_status:function(){
        var self=this;
        FB.Event.subscribe('auth.authResponseChange',function(response){
            if(response.status=='connected'){
                $('body').trigger('dtsso_facebook_connected',[response.authResponse]);
                $('body').trigger('dtsso_facebook_login_success',[response.authResponse,true]);
            }else if(response.status=='not_authorized')
                $('body').trigger('dtsso_facebook_not_authorized',[response]);
        });
    },
    deauthorize:function(){
        FB.api('/me/permissions','DELETE');
    }
};

}(jQuery));
DT.SSO.Facebook.init();
;



DT.SSO.Twitter=(function(){
    return{
        init:function(){
            var self=this;
            jQuery('body').on('click','a.twitter-login',function(evt){
                evt.preventDefault();
                self.show_login_dialog();
            });
            jQuery('body').on('dtsso_twitter_connected',function(evt,provider_data){
                DT.Logger.log("dtsso_twitter_connected: Twitter account authenticated");
                jQuery('body').trigger('dtsso_provider_login_success',['Twitter',provider_data]);
            });
            DT.Logger.log("DT.SSO.Twitter module initialized");
        },
        show_login_dialog:function(){
            window.open(ajaxurl+'?action=dtsso_twitter_login&_='+new Date().getTime(),'dtsso_twitter_login',"width=800,height=400,location=no");
        }
    };

}());
DT.SSO.Twitter.init();
;



DT.SSO.Google=(function(){
    return{
        init:function(){
            var self=this;
            jQuery('body').on('click','a.google-login',function(evt){
                evt.preventDefault();
                self.show_login_dialog();
            });
            jQuery('body').on('dtsso_google_connected',function(evt,provider_data){
                DT.Logger.log("dtsso_google_connected: Google account authenticated");
                jQuery('body').trigger('dtsso_provider_login_success',['Google',provider_data]);
            });
            DT.Logger.log("DT.SSO.Google module initialized");
        },
        show_login_dialog:function(){
            window.open('/?action=dtsso-google-login','dtsso_google_login',"width=800,height=400,location=no");
        }
    };

}());
DT.SSO.Google.init();
;



