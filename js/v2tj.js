
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?4a63228886829c93882ccf2efd235f65";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
(function(){
var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);
})();


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9bf5e2d86b117fb8468929cb6356b35c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

























(function(){

		var canonicalURL, curProtocol;

		//Get the <link> tag

		var x=document.getElementsByTagName("link");

		//Find the last canonical URL

		if(x.length > 0){

			for (i=0;i<x.length;i++){

				if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){

					canonicalURL=x[i].href;

				}

			}

		}

		//Get protocol

	    if (!canonicalURL){

	    	curProtocol = window.location.protocol.split(':')[0];

	    }

	    else{

	    	curProtocol = canonicalURL.split(':')[0];

	    }

	    //Get current URL if the canonical URL does not exist

	    if (!canonicalURL) canonicalURL = window.location.href;

	    //Assign script content. Replace current URL with the canonical URL

    	!function(){var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,r=canonicalURL,t=document.referrer;if(!e.test(r)){var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";t?(n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)):r&&(n+="?l="+r);var i=new Image;i.src=n}}(window);})();
