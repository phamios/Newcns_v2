/*1399914916,173052979,JIT Construction: v1244829,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
(function(a,b){var c=a._fbq||(a._fbq=[]);if(c.push!==Array.prototype.push)return;var d={},e=[],f=/^\d+$/;function g(n){var o=[];for(var p=0,q=n.length;p<q;p++)o.push(n[p][0]+'='+encodeURIComponent(n[p][1]));return o.join('&');}function h(n,o){var p=function(){if(n.detachEvent){n.detachEvent('onload',p);}else n.onload=null;o();};if(n.attachEvent){n.attachEvent('onload',p);}else n.onload=p;}function i(n,o){var p='fb'+Math.random().toString().replace('.',''),q=b.createElement('form');q.method='post';q.action=n;q.target=p;q.acceptCharset='utf-8';q.style.display='none';var r=!!(a.attachEvent&&!a.addEventListener),s=r?'<iframe name="'+p+'">':'iframe',t=b.createElement(s);t.src='javascript:false';t.id=p;t.name=p;q.appendChild(t);h(t,function(){for(var u=0,v=o.length;u<v;u++){var w=b.createElement('input');w.name=o[u][0];w.value=o[u][1];q.appendChild(w);}h(t,function(){q.parentNode.removeChild(q);});q.submit();});b.body.appendChild(q);}d.addPixelId=function(n){e.push(n);};d.track=function(n,o){var p=typeof n;if(p!=='string'&&p!=='number')return false;if(f.test(n)){j(null,n,o);return true;}for(var q=0,r=e.length;q<r;q++)j(e[q],n,o);return e.length>0;};function j(n,o,p){var q=[];q.push(['id',n]);q.push(['ev',o]);q.push(['dl',b.location.href]);q.push(['rl',b.referrer]);q.push(['ts',new Date().valueOf()]);if(p&&typeof p==='object')for(var r in p)if(p.hasOwnProperty(r)){var s=p[r],t=(s===null)?'null':typeof s;if(t in {number:1,string:1,boolean:1}){q.push(['cd['+encodeURIComponent(r)+']',s]);}else if(t==='object'){s=(typeof JSON==='undefined')?String(s):JSON.stringify(s);q.push(['cd['+encodeURIComponent(r)+']',s]);}}var u='https://www.facebook.com/tr/',v=g(q);if(1024>(u+'?'+v).length){var w=new Image();w.src=u+'?'+v;}else i(u,q);}var k=function(n){if(Object.prototype.toString.call(n)!=='[object Array]')return false;var o=n.shift();if(!o)return false;var p=d[o];if(typeof p!=='function')return false;if(a._fbds){var q=a._fbds.pixelId;if(f.test(q)){e.push(q);delete a._fbds.pixelId;}}return p.apply(d,n);};for(var l=0,m=c.length;l<m;++l)k(c[l]);c.push=k;})(window,document);} catch (e) {new Image().src="http:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1244829","message":"'+e.message+'"}}');}