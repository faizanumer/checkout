function loadCheckoutCall(t,a){$("#body_snippet").html('<p id="checkout_loading_text">Loading...</p>'),$.get(t,function(t){product=t.product,settings=t.settings,markup=t.markup,$(a).html(markup),$("body").data("product",product),$("body").data("settings",settings),$("body").data("markup",markup)})}function loadCheckoutAdvanced(t,a,o){if(link="http://localhost:8080/station/af/checkout/main/info/"+t+"/"+a,window.jQuery)loadCheckoutCall(link,o);else{var e=document.createElement("script");document.head.appendChild(e),e.type="text/javascript",e.src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",e.onload=function(){loadCheckoutCall(link,o)}}}
