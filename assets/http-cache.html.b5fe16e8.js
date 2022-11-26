import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c,a as e,d as o,e as r,b as d,r as l}from"./app.acc435eb.js";const n={},h=r('<p>HTTP \u7F13\u5B58\u662F\u6D4F\u89C8\u5668\u5BF9\u4E4B\u524D\u8BF7\u6C42\u8FC7\u7684\u6587\u4EF6\u8FDB\u884C\u7F13\u5B58\uFF0C\u4EE5\u4FBF\u4E0B\u6B21\u8BBF\u95EE\u65F6\u91CD\u590D\u4F7F\u7528\uFF0C\u51CF\u5C11\u7F51\u7EDC\u8BF7\u6C42\u6B21\u6570\uFF0C\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\uFF0C\u7F13\u89E3\u670D\u52A1\u7AEF\u7684\u538B\u529B\u3002<br> HTTP \u7F13\u5B58\u5206\u4E3A\uFF1A\u5F3A\u5236\u7F13\u5B58\u4E0E\u534F\u5546\u7F13\u5B58</p><p><img src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/20220506030900.png" alt=""></p><h2 id="\u5F3A\u5236\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u7F13\u5B58" aria-hidden="true">#</a> \u5F3A\u5236\u7F13\u5B58</h2><h3 id="\u5B9A\u4E49\u4E0E\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E0E\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B9A\u4E49\u4E0E\u8FC7\u7A0B</h3><p>\u5B9A\u4E49\uFF1A\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5E26\u6709 <code>Cache-Control</code> \u6216 <code>Expires</code> \u5B57\u6BB5\u63A7\u5236\u8D44\u6E90\u8FC7\u671F\u65F6\u95F4\u7684\u54CD\u5E94\u3002\u5728\u8FC7\u671F\u65F6\u95F4\u5185\u5BA2\u6237\u7AEF\u591A\u6B21\u53D1\u9001\u8BF7\u6C42\uFF0C\u5219\u76F4\u63A5\u8BFB\u53D6\u5BA2\u6237\u7AEF\u672C\u5730\u7F13\u5B58\u3002</p><p>\u8FC7\u7A0B\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5E26\u6709 <code>Cache-Control</code> \u6216 <code>Expires</code> \u5B57\u6BB5\u7684\u8D44\u6E90\u3002</li><li>\u540E\u7EED\u8BF7\u6C42\u65F6\uFF0C\u5982\u679C\u8D44\u6E90\u6CA1\u6709\u8FC7\u671F\uFF08\u5F3A\u5236\u7F13\u5B58\u751F\u6548\uFF09\uFF1A\u76F4\u63A5\u4ECE\u6D4F\u89C8\u5668\u672C\u5730\u7F13\u5B58\u4E2D\u83B7\u53D6\u8D44\u6E90\uFF0C\u72B6\u6001\u7801 <code>200 OK (from memory cache)</code>\u3002</li><li>\u540E\u7EED\u8BF7\u6C42\u65F6\uFF0C\u5982\u679C\u8D44\u6E90\u8FC7\u671F\uFF08\u5F3A\u5236\u7F13\u5B58\u5931\u6548\uFF09\uFF1A\u5728\u6CA1\u6709\u4F7F\u7528\u534F\u5546\u7F13\u5B58\u7684\u60C5\u51B5\u4E0B\u4F1A\u91CD\u590D\u9996\u6B21\u8BF7\u6C42\u7684\u6B65\u9AA4\u3002\u6240\u4EE5\u4E00\u822C\u4F1A\u642D\u914D\u4F7F\u7528\u534F\u5546\u7F13\u5B58\u3002</li></ul><p>\u63A7\u5236\u5F3A\u5236\u7F13\u5B58\u7684\u5B57\u6BB5\u6709\uFF1A</p><ul><li><code>Pragma</code>\uFF08\u4E0D\u63A8\u8350\u4F7F\u7528\uFF09</li><li><code>Expires</code>\uFF08HTTP/1.0\uFF09</li><li><code>Cache-Control</code>\uFF08HTTP/1.1\uFF09</li></ul><h3 id="expires-\u4E0E-cache-control" tabindex="-1"><a class="header-anchor" href="#expires-\u4E0E-cache-control" aria-hidden="true">#</a> Expires \u4E0E Cache-Control</h3><p><code>Expires</code> \u8FC7\u671F\u65F6\u95F4\u3002\u7F3A\u70B9\u5728\u4E8E\u8BE5\u65E5\u671F\u4F9D\u8D56\u7684\u662F\u7528\u6237\u7684\u7CFB\u7EDF\u65F6\u95F4\uFF0C\u5982\u679C\u7528\u6237\u7CFB\u7EDF\u65F6\u95F4\u4E0D\u51C6\u786E\uFF0C\u7F13\u5B58\u6709\u6548\u671F\u5C31\u4E0D\u51C6\u786E\u3002</p><p><code>Cache-Control</code> \u7F13\u5B58\u63A7\u5236\u3002\u5728\u8BF7\u6C42\u5934\u548C\u54CD\u5E94\u5934\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u5E38\u7528\u7684\u5C5E\u6027\u6709\uFF1A</p><ul><li>max-age\uFF1A \u6700\u5927\u7F13\u5B58\u65F6\u95F4\uFF08\u79D2\uFF09</li><li>no-cache\uFF1A\u4E0D\u4F7F\u7528\u5F3A\u7F13\u5B58\uFF0C\u9700\u8981\u5411\u670D\u52A1\u5668\u9A8C\u8BC1\u7F13\u5B58\u662F\u5426\u662F\u6700\u65B0\u7684</li><li>no-store\uFF1A\u7981\u6B62\u4F7F\u7528\u7F13\u5B58\uFF08\u5305\u62EC\u534F\u5546\u7F13\u5B58\uFF09\uFF0C\u6BCF\u6B21\u90FD\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6700\u65B0\u7684\u8D44\u6E90</li><li>public\uFF1A\u54CD\u5E94\u53EF\u4EE5\u88AB\u4E2D\u95F4\u4EE3\u7406\u3001CDN \u7B49\u7F13\u5B58</li><li>private\uFF1A\u4EC5\u5BA2\u6237\u7AEF\u53EF\u4EE5\u7F13\u5B58\u6570\u636E\uFF0C\u4EE3\u7406\u670D\u52A1\u5668\u3001CDN \u4E0D\u53EF\u7F13\u5B58</li><li>must-revalidate\uFF1A\u5728\u7F13\u5B58\u8FC7\u671F\u524D\u53EF\u4EE5\u4F7F\u7528\uFF0C\u8FC7\u671F\u540E\u5FC5\u987B\u5411\u670D\u52A1\u5668\u9A8C\u8BC1</li></ul><p>\u4F18\u5148\u7EA7\uFF1A<code>Cache-Control</code> \u7684\u4F18\u5148\u7EA7\u6BD4 <code>Expires</code> \u9AD8\u3002</p><h2 id="\u534F\u5546\u7F13\u5B58-\u5BF9\u6BD4\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58-\u5BF9\u6BD4\u7F13\u5B58" aria-hidden="true">#</a> \u534F\u5546\u7F13\u5B58\uFF08\u5BF9\u6BD4\u7F13\u5B58\uFF09</h2><h3 id="\u5B9A\u4E49\u4E0E\u8FC7\u7A0B-1" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E0E\u8FC7\u7A0B-1" aria-hidden="true">#</a> \u5B9A\u4E49\u4E0E\u8FC7\u7A0B</h3><p>\u5B9A\u4E49\uFF1A\u5F3A\u5236\u7F13\u5B58\u5931\u6548\u540E\uFF0C\u5BA2\u6237\u7AEF\u643A\u5E26\u8D44\u6E90\u6807\u8BC6\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u8BF7\u6C42\u3002\u670D\u52A1\u7AEF\u6839\u636E\u8D44\u6E90\u6807\u8BC6\u5224\u65AD\u7F13\u5B58\u8D44\u6E90\u4E0E\u6700\u65B0\u8D44\u6E90\u662F\u5426\u76F8\u540C\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u662F\u5426\u4F7F\u7528\u7F13\u5B58\u8D44\u6E90\u3002</p><p>\u8FC7\u7A0B\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u9996\u6B21\u8BF7\u6C42\u65F6\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u8D44\u6E90\u6587\u4EF6\u548C\u8D44\u6E90\u6807\u8BC6\uFF08\u643A\u5E26\u6709 <code>Last-Modified</code> \u6216 <code>Etag</code> \u7684\u54CD\u5E94\uFF09\u3002</li><li>\u540E\u7EED\u8BF7\u6C42\u65F6\uFF0C\u5BA2\u6237\u7AEF\u53D1\u9001\u643A\u5E26 <code>If-Modified-Since</code> \u6216 <code>If-None-Match</code> \u7684\u8BF7\u6C42\u3002\uFF08\u503C\u5206\u522B\u4E0E\u9996\u6B21\u8BF7\u6C42\u7684 <code>Last-Modified</code> \u6216 <code>Etag</code> \u76F8\u7B49\uFF09</li><li>\u670D\u52A1\u7AEF\u6839\u636E\u4E24\u8005\u662F\u5426\u76F8\u7B49\u5224\u65AD\u8D44\u6E90\u662F\u5426\u6CA1\u6709\u66F4\u65B0\uFF1A \u5982\u679C\u76F8\u7B49\uFF08\u534F\u5546\u7F13\u5B58\u751F\u6548\uFF09\uFF0C\u5219\u8FD4\u56DE 304 \u72B6\u6001\u7801\uFF0C\u544A\u8BC9\u5BA2\u6237\u7AEF\u4F7F\u7528\u672C\u5730\u7F13\u5B58\u3002 \u5982\u679C\u4E0D\u76F8\u7B49\uFF08\u534F\u5546\u7F13\u5B58\u5931\u6548\uFF09\uFF0C\u5219\u8FD4\u56DE 200 \u72B6\u6001\u7801\uFF0C\u5E76\u8FD4\u56DE\u6700\u65B0\u7684\u8D44\u6E90\u6587\u4EF6\u548C\u8D44\u6E90\u6807\u8BC6\u3002</li></ul><p>\u63A7\u5236\u534F\u5546\u7F13\u5B58\u7684\u5B57\u6BB5\u6709\uFF1A</p><ul><li><code>Last-Modified/If-Modified-Since</code>\uFF08HTTP/1.0\uFF09</li><li><code>Etag/If-None-Match</code>\uFF08HTTP/1.1\uFF09</li></ul><h3 id="etag-\u4E0E-last-modified" tabindex="-1"><a class="header-anchor" href="#etag-\u4E0E-last-modified" aria-hidden="true">#</a> Etag \u4E0E Last-Modified</h3><p><code>Last-Modified/If-Modified-Since</code> \u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u67D0\u4E2A\u8D44\u6E90\u6587\u4EF6\u5728\u670D\u52A1\u5668\u6700\u540E\u88AB\u4FEE\u6539\u65F6\u95F4\u3002\u7F3A\u70B9\u5728\u4E8E\u7CBE\u5EA6\u53EA\u5230\u79D2\u7EA7\uFF0C1 \u79D2\u5185\u7684\u591A\u6B21\u4FEE\u6539\u65E0\u6CD5\u5224\u65AD\u8D44\u6E90\u662F\u5426\u66F4\u65B0\u3002</p><p><code>Etag/If-None-Match</code> \u8D44\u6E90\u6807\u8BC6\uFF0C\u670D\u52A1\u7AEF\u6839\u636E\u8D44\u6E90\u6587\u4EF6\u7684\u5185\u5BB9\u751F\u6210\u7684\u552F\u4E00\u8D44\u6E90\u6807\u8BC6\u3002</p><p>\u4F18\u5148\u7EA7\uFF1A<code>Etag/If-None-Match</code>\u4F18\u5148\u7EA7\u6BD4<code>Last-Modified/If-Modified-Since</code>\u9AD8\u3002</p><h2 id="\u4E09\u79CD\u5237\u65B0\u64CD\u4F5C\u5BF9\u7F13\u5B58\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u5237\u65B0\u64CD\u4F5C\u5BF9\u7F13\u5B58\u7684\u5F71\u54CD" aria-hidden="true">#</a> \u4E09\u79CD\u5237\u65B0\u64CD\u4F5C\u5BF9\u7F13\u5B58\u7684\u5F71\u54CD</h2><ul><li>\u6B63\u5E38\u64CD\u4F5C\uFF08<strong>\u5F3A\u5236\u7F13\u5B58\u6709\u6548\uFF0C\u534F\u5546\u7F13\u5B58\u6709\u6548</strong>\uFF09\uFF1A\u5730\u5740\u680F\u8F93\u5165 <code>URL</code>\uFF0C\u8DF3\u8F6C\u94FE\u63A5\uFF0C\u524D\u8FDB\u540E\u9000\u7B49</li><li>\u624B\u52A8\u5237\u65B0\uFF08<strong>\u5F3A\u5236\u7F13\u5B58\u5931\u6548\uFF0C\u534F\u5546\u7F13\u5B58\u6709\u6548</strong>\uFF09\uFF1A<code>F5</code>\uFF0C\u70B9\u51FB\u5DE5\u5177\u680F\u4E2D\u7684\u5237\u65B0\u6309\u94AE\uFF0C\u53F3\u952E\u83DC\u5355\u91CD\u65B0\u52A0\u8F7D</li><li>\u5F3A\u5236\u5237\u65B0\uFF08<strong>\u5F3A\u5236\u7F13\u5B58\u5931\u6548\uFF0C\u534F\u5546\u7F13\u5B58\u5931\u6548</strong>\uFF09\uFF1A<code>Ctrl+F5</code>\uFF0C<code>Shift+Command+R</code></li></ul><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">\u5F3A\u5236\u7F13\u5B58</th><th style="text-align:center;">\u534F\u5546\u7F13\u5B58</th></tr></thead><tbody><tr><td style="text-align:center;">\u6B63\u5E38\u64CD\u4F5C</td><td style="text-align:center;">\u2705</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:center;">\u624B\u52A8\u5237\u65B0</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u2705</td></tr><tr><td style="text-align:center;">\u5F3A\u5236\u5237\u65B0</td><td style="text-align:center;">\u274C</td><td style="text-align:center;">\u274C</td></tr></tbody></table><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',29),s={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"},p=d("Cache-Control \u2014\u2014 MDN"),f={href:"https://zhuanlan.zhihu.com/p/143064070",target:"_blank",rel:"noopener noreferrer"},u=d("HTTP\u7F13\u5B58\u4E4B\u534F\u5546\u7F13\u5B58\u548C\u5F3A\u5236\u7F13\u5B58"),g={href:"https://juejin.cn/post/6844903838768431118",target:"_blank",rel:"noopener noreferrer"},_=d("http\u9762\u8BD5\u5FC5\u4F1A\u7684\uFF1A\u5F3A\u5236\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58"),x={href:"https://www.bilibili.com/video/BV17Q4y127We?p=1",target:"_blank",rel:"noopener noreferrer"},m=d("HTTP \u7F13\u5B58\u3010JS\u9762\u8BD5\u9898\u5C0F\u5408\u96C6\u3011");function b(C,T){const t=l("ExternalLinkIcon");return i(),c("div",null,[h,e("ul",null,[e("li",null,[e("a",s,[p,o(t)])]),e("li",null,[e("a",f,[u,o(t)])]),e("li",null,[e("a",g,[_,o(t)])]),e("li",null,[e("a",x,[m,o(t)])])])])}var M=a(n,[["render",b],["__file","http-cache.html.vue"]]);export{M as default};
