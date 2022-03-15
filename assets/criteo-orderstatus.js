(function (c, u) {
    var hexcase=0;function crto_md5(r){return crto_rstr2hex(crto_rstr_md5(crto_str2rstr_utf8(r)))}function crto_rstr_md5(r){return crto_binl2rstr(crto_binl_md5(crto_rstr2binl(r),8*r.length))}function crto_rstr2hex(r){for(var _,t=hexcase?"0123456789ABCDEF":"0123456789abcdef",o="",c=0;c<r.length;c++)_=r.charCodeAt(c),o+=t.charAt(_>>>4&15)+t.charAt(15&_);return o}function crto_str2rstr_utf8(r){for(var _,t,o="",c=-1;++c<r.length;)_=r.charCodeAt(c),t=c+1<r.length?r.charCodeAt(c+1):0,55296<=_&&_<=56319&&56320<=t&&t<=57343&&(_=65536+((1023&_)<<10)+(1023&t),c++),_<=127?o+=String.fromCharCode(_):_<=2047?o+=String.fromCharCode(192|_>>>6&31,128|63&_):_<=65535?o+=String.fromCharCode(224|_>>>12&15,128|_>>>6&63,128|63&_):_<=2097151&&(o+=String.fromCharCode(240|_>>>18&7,128|_>>>12&63,128|_>>>6&63,128|63&_));return o}function crto_rstr2binl(r){for(var _=Array(r.length>>2),t=0;t<_.length;t++)_[t]=0;for(t=0;t<8*r.length;t+=8)_[t>>5]|=(255&r.charCodeAt(t/8))<<t%32;return _}function crto_binl2rstr(r){for(var _="",t=0;t<32*r.length;t+=8)_+=String.fromCharCode(r[t>>5]>>>t%32&255);return _}function crto_binl_md5(r,_){r[_>>5]|=128<<_%32,r[14+(_+64>>>9<<4)]=_;for(var t=1732584193,o=-271733879,c=-1732584194,d=271733878,m=0;m<r.length;m+=16){var f=t,n=o,i=c,h=d;t=crto_md5_ff(t,o,c,d,r[m+0],7,-680876936),d=crto_md5_ff(d,t,o,c,r[m+1],12,-389564586),c=crto_md5_ff(c,d,t,o,r[m+2],17,606105819),o=crto_md5_ff(o,c,d,t,r[m+3],22,-1044525330),t=crto_md5_ff(t,o,c,d,r[m+4],7,-176418897),d=crto_md5_ff(d,t,o,c,r[m+5],12,1200080426),c=crto_md5_ff(c,d,t,o,r[m+6],17,-1473231341),o=crto_md5_ff(o,c,d,t,r[m+7],22,-45705983),t=crto_md5_ff(t,o,c,d,r[m+8],7,1770035416),d=crto_md5_ff(d,t,o,c,r[m+9],12,-1958414417),c=crto_md5_ff(c,d,t,o,r[m+10],17,-42063),o=crto_md5_ff(o,c,d,t,r[m+11],22,-1990404162),t=crto_md5_ff(t,o,c,d,r[m+12],7,1804603682),d=crto_md5_ff(d,t,o,c,r[m+13],12,-40341101),c=crto_md5_ff(c,d,t,o,r[m+14],17,-1502002290),t=crto_md5_gg(t,o=crto_md5_ff(o,c,d,t,r[m+15],22,1236535329),c,d,r[m+1],5,-165796510),d=crto_md5_gg(d,t,o,c,r[m+6],9,-1069501632),c=crto_md5_gg(c,d,t,o,r[m+11],14,643717713),o=crto_md5_gg(o,c,d,t,r[m+0],20,-373897302),t=crto_md5_gg(t,o,c,d,r[m+5],5,-701558691),d=crto_md5_gg(d,t,o,c,r[m+10],9,38016083),c=crto_md5_gg(c,d,t,o,r[m+15],14,-660478335),o=crto_md5_gg(o,c,d,t,r[m+4],20,-405537848),t=crto_md5_gg(t,o,c,d,r[m+9],5,568446438),d=crto_md5_gg(d,t,o,c,r[m+14],9,-1019803690),c=crto_md5_gg(c,d,t,o,r[m+3],14,-187363961),o=crto_md5_gg(o,c,d,t,r[m+8],20,1163531501),t=crto_md5_gg(t,o,c,d,r[m+13],5,-1444681467),d=crto_md5_gg(d,t,o,c,r[m+2],9,-51403784),c=crto_md5_gg(c,d,t,o,r[m+7],14,1735328473),t=crto_md5_hh(t,o=crto_md5_gg(o,c,d,t,r[m+12],20,-1926607734),c,d,r[m+5],4,-378558),d=crto_md5_hh(d,t,o,c,r[m+8],11,-2022574463),c=crto_md5_hh(c,d,t,o,r[m+11],16,1839030562),o=crto_md5_hh(o,c,d,t,r[m+14],23,-35309556),t=crto_md5_hh(t,o,c,d,r[m+1],4,-1530992060),d=crto_md5_hh(d,t,o,c,r[m+4],11,1272893353),c=crto_md5_hh(c,d,t,o,r[m+7],16,-155497632),o=crto_md5_hh(o,c,d,t,r[m+10],23,-1094730640),t=crto_md5_hh(t,o,c,d,r[m+13],4,681279174),d=crto_md5_hh(d,t,o,c,r[m+0],11,-358537222),c=crto_md5_hh(c,d,t,o,r[m+3],16,-722521979),o=crto_md5_hh(o,c,d,t,r[m+6],23,76029189),t=crto_md5_hh(t,o,c,d,r[m+9],4,-640364487),d=crto_md5_hh(d,t,o,c,r[m+12],11,-421815835),c=crto_md5_hh(c,d,t,o,r[m+15],16,530742520),t=crto_md5_ii(t,o=crto_md5_hh(o,c,d,t,r[m+2],23,-995338651),c,d,r[m+0],6,-198630844),d=crto_md5_ii(d,t,o,c,r[m+7],10,1126891415),c=crto_md5_ii(c,d,t,o,r[m+14],15,-1416354905),o=crto_md5_ii(o,c,d,t,r[m+5],21,-57434055),t=crto_md5_ii(t,o,c,d,r[m+12],6,1700485571),d=crto_md5_ii(d,t,o,c,r[m+3],10,-1894986606),c=crto_md5_ii(c,d,t,o,r[m+10],15,-1051523),o=crto_md5_ii(o,c,d,t,r[m+1],21,-2054922799),t=crto_md5_ii(t,o,c,d,r[m+8],6,1873313359),d=crto_md5_ii(d,t,o,c,r[m+15],10,-30611744),c=crto_md5_ii(c,d,t,o,r[m+6],15,-1560198380),o=crto_md5_ii(o,c,d,t,r[m+13],21,1309151649),t=crto_md5_ii(t,o,c,d,r[m+4],6,-145523070),d=crto_md5_ii(d,t,o,c,r[m+11],10,-1120210379),c=crto_md5_ii(c,d,t,o,r[m+2],15,718787259),o=crto_md5_ii(o,c,d,t,r[m+9],21,-343485551),t=crto_safe_add(t,f),o=crto_safe_add(o,n),c=crto_safe_add(c,i),d=crto_safe_add(d,h)}return Array(t,o,c,d)}function crto_md5_cmn(r,_,t,o,c,d){return crto_safe_add(crto_bit_rol(crto_safe_add(crto_safe_add(_,r),crto_safe_add(o,d)),c),t)}function crto_md5_ff(r,_,t,o,c,d,m){return crto_md5_cmn(_&t|~_&o,r,_,c,d,m)}function crto_md5_gg(r,_,t,o,c,d,m){return crto_md5_cmn(_&o|t&~o,r,_,c,d,m)}function crto_md5_hh(r,_,t,o,c,d,m){return crto_md5_cmn(_^t^o,r,_,c,d,m)}function crto_md5_ii(r,_,t,o,c,d,m){return crto_md5_cmn(t^(_|~o),r,_,c,d,m)}function crto_safe_add(r,_){var t=(65535&r)+(65535&_);return(r>>16)+(_>>16)+(t>>16)<<16|65535&t}function crto_bit_rol(r,_){return r<<_|r>>>32-_}
    function crto_sha256(r){function t(r,t){return r>>>t|r<<32-t}r=r.trim().toLowerCase();for(var o,h,n=Math.pow,e=n(2,32),a="",f=[],c=8*r.length,l=crto_sha256.h=crto_sha256.h||[],g=crto_sha256.k=crto_sha256.k||[],i=g.length,s={},u=2;i<64;u++)if(!s[u]){for(o=0;o<313;o+=u)s[o]=u;l[i]=n(u,.5)*e|0,g[i++]=n(u,1/3)*e|0}for(r+="";r.length%64-56;)r+="\0";for(o=0;o<r.length;o++){if((h=r.charCodeAt(o))>>8)return;f[o>>2]|=h<<(3-o)%4*8}for(f[f.length]=c/e|0,f[f.length]=c,h=0;h<f.length;){var _=f.slice(h,h+=16),v=l;for(l=l.slice(0,8),o=0;o<64;o++){var k=_[o-15],w=_[o-2],C=l[0],d=l[4],m=l[7]+(t(d,6)^t(d,11)^t(d,25))+(d&l[5]^~d&l[6])+g[o]+(_[o]=o<16?_[o]:_[o-16]+(t(k,7)^t(k,18)^k>>>3)+_[o-7]+(t(w,17)^t(w,19)^w>>>10)|0);(l=[m+((t(C,2)^t(C,13)^t(C,22))+(C&l[1]^C&l[2]^l[1]&l[2]))|0].concat(l))[4]=l[4]+m|0}for(o=0;o<8;o++)l[o]=l[o]+v[o]|0}for(o=0;o<8;o++)for(h=3;h+1;h--){var p=l[o]>>8*h&255;a+=(p<16?0:"")+p.toString(16)}return a}

    if (window.location.pathname.indexOf('checkouts') < 0)
        return;

    var deviceType = /iPad/.test(u) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(u) ? "m" : "d";
    var products = [];
    for(var i in c.line_items) {
        var item = c.line_items[i];
        if (item.product_id) {
            products.push({
                id: "shopify_DK_" + item.product_id + "_" + item.variant_id,
                price: 0,
                quantity: item.quantity
            });
        }
    }
    var price = parseFloat(c.subtotal_price);
    if (c.discounts)
        price += parseFloat(c.discounts_amount);

    products.push({
        id: "ordertotal",
        price: price,
        quantity: 1
    });
    window.criteo_q = window.criteo_q || [];
    window.criteo_q.push(
        { event: "setAccount", account: 94682 },
        { event: "setEmail", email: crto_md5(c.email), hash_method: "md5" },
        { event: "setEmail", email: crto_sha256(c.email), hash_method: "sha256" },
        { event: "setSiteType", type: deviceType },
        { event: "trackTransaction", zipcode: c.billing_address.zip, ecpplugin: "shopify-mc", id: c.order_id, item: products }
    );
})(Shopify.checkout, navigator.userAgent);