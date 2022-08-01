import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as e,a,d as p,e as o,b as c,r as l}from"./app.7aaa253b.js";const u={},i=o(`<h2 id="\u540C\u6E90\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a> \u540C\u6E90\u7B56\u7565</h2><p>\u540C\u6E90\u7B56\u7565\uFF1A\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u7B56\u7565\uFF0C\u7528\u4E8E\u9650\u5236\u4E00\u4E2A\u6E90\u5982\u4F55\u4E0E\u53E6\u4E00\u4E2A\u6E90\u7684\u8D44\u6E90\u8FDB\u884C\u4EA4\u4E92\uFF0C\u4FDD\u969C\u7528\u6237\u9690\u79C1\u3001\u6570\u636E\u5B89\u5168\uFF0C\u907F\u514D XSS\u3001CSFR \u7B49\u7F51\u7EDC\u653B\u51FB\u3002</p><p>\u6D4F\u89C8\u5668\u9ED8\u8BA4\u5F00\u542F\u4E86\u540C\u6E90\u7B56\u7565\uFF0C\u5411\u5176\u4ED6\u6E90\u53D1\u51FA\u7684\u8BF7\u6C42\u53EF\u4EE5\u53D1\u51FA\uFF0C\u4F46\u54CD\u5E94\u4F1A\u88AB\u6D4F\u89C8\u5668\u62E6\u622A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u5173\u95ED\uFF08\u4E0D\u5EFA\u8BAE\uFF09\u3002\u53E6\u5916\uFF0CPostman \u6CA1\u6709\u4F7F\u7528\u540C\u6E90\u7B56\u7565\uFF0C\u624D\u80FD\u968F\u610F\u524D\u540E\u7AEF\u8054\u8C03\u3002</p><h2 id="\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6E90" aria-hidden="true">#</a> \u6E90</h2><p>\u6E90 = \u534F\u8BAE + \u57DF\u540D+ \u7AEF\u53E3\u53F7<br> URL = \u534F\u8BAE + \u57DF\u540D + \u7AEF\u53E3\u53F7 + \u8D44\u6E90\u8DEF\u5F84 [+ \u53C2\u6570 + \u67E5\u8BE2 + \u951A\u70B9]<br> \u540C\u6E90\uFF1A<strong>\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u53F7</strong>\u5B8C\u5168\u4E00\u81F4\u3002\u5373\u4FBF\u4E24\u4E2A\u4E0D\u540C\u7684\u57DF\u540D\u6307\u5411\u540C\u4E00\u4E2Aip\u5730\u5740\uFF0C\u4E5F\u975E\u540C\u6E90</p><p><code>https://example.com</code> \u4E0E\u4EE5\u4E0B URL \u540C\u6E90\u5224\u65AD\uFF1A</p><table><thead><tr><th>URL</th><th style="text-align:center;">\u5224\u65AD</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>http://example.com</code></td><td style="text-align:center;">\u4E0D\u540C\u6E90</td><td style="text-align:center;">\u534F\u8BAE\u4E0D\u540C</td></tr><tr><td><code>https://www.example.com</code></td><td style="text-align:center;">\u4E0D\u540C\u6E90</td><td style="text-align:center;">\u5B50\u57DF\u540D\u4E0D\u540C</td></tr><tr><td><code>https://www.example.cn</code></td><td style="text-align:center;">\u4E0D\u540C\u6E90</td><td style="text-align:center;">\u4E3B\u57DF\u540D\u4E0D\u540C</td></tr><tr><td><code>https://example.com:443</code></td><td style="text-align:center;">\u540C\u6E90</td><td style="text-align:center;">https \u9ED8\u8BA4\u7AEF\u53E3443<br>http \u9ED8\u8BA4\u7AEF\u53E3 80</td></tr></tbody></table><img class="medium-img" src="https://nevermore-picbed-1304219157.cos.ap-guangzhou.myqcloud.com/\u57DF\u540D.png"><p>\u9876\u7EA7\u57DF\u6709 <code>.com</code>\u3001<code>.org</code>\u3001<code>.edu</code>\u3001<code>.cn</code>\u3001<code>.us</code> \u7B49<br><code>www.</code> \u662F\u4E92\u8054\u7F51\u65E9\u671F\u5E38\u7528\u7684\u5B50\u57DF\u540D\uFF0C\u8868\u793A\u63D0\u4F9B\u7F51\u7AD9\u670D\u52A1\uFF0C\u4EE5\u4E0E <code>mail.</code> \u90AE\u4EF6\u670D\u52A1\u7B49\u4F5C\u533A\u5206\u3002<br> \u9876\u7EA7\u57DF\u540D\u9700\u8981\u5907\u6848\uFF0C\u800C\u4E8C\u7EA7\u57DF\u540D\u4E0D\u9700\u8981\u5355\u72EC\u5907\u6848\uFF0C\u53EA\u8981\u5B83\u6240\u5904\u7684\u4E00\u7EA7\u57DF\u540D\u5DF2\u7ECF\u5907\u6848\uFF0C\u5C31\u80FD\u76F4\u63A5\u89E3\u6790\u3002<br> \u901A\u8FC7 <code>window.origin</code> \u6216 <code>location.origin</code> \u53EF\u4EE5\u5F97\u5230\u5F53\u524D\u7F51\u9875\u6E90</p><h2 id="\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF" aria-hidden="true">#</a> \u8DE8\u57DF</h2><p>\u8DE8\u57DF\uFF1A\u7ED5\u5F00\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9650\u5236\uFF0C\u5728\u4E0D\u540C\u57DF\u4E4B\u95F4\u76F8\u4E92\u8BF7\u6C42\u8D44\u6E90\u3002\u5B9E\u73B0\u8DE8\u57DF\u6709\u4E09\u79CD\u5E38\u7528\u65B9\u5F0F\uFF1AJSONP\u3001CORS\u3001\u670D\u52A1\u5668\u4EE3\u7406\u3002</p><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>JSONP\uFF1A<strong>JSON</strong> with <strong>P</strong>adding\u3002\u5229\u7528 <code>script</code> \u6807\u7B7E\u4E0D\u53D7\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565\u7684\u9650\u5236\uFF0C\u8FDB\u884C\u8DE8\u57DF <code>GET</code> \u8BF7\u6C42\u3002\u6CE8\u610F\u5B83\u4E0D\u662F <code>AJAX</code> \u8BF7\u6C42\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- \u524D\u7AEF --&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://backend.com/data?callback=getName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u540E\u7AEF\uFF1A\u5C06\u6570\u636E\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u518D\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\u8FD4\u56DE\u3002</span>
<span class="token comment">// query.callback \u5373 getName</span>
response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>query<span class="token punctuation">.</span>callback<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">({
    &quot;name&quot;: &quot;Nevermore&quot;
  })</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span>
</code></pre></div><p>\u8FC7\u7A0B\uFF1A</p><ol><li>\u524D\u7AEF\u5229\u7528 <code>script</code> \u6807\u7B7E\u7684 <code>src</code> \u5C5E\u6027\u53EF\u4EE5\u8BF7\u6C42\u5916\u90E8\u7684 JS \u6587\u4EF6\u7684\u7279\u6027\uFF0C\u5411\u540E\u7AEF\u53D1\u9001 <code>GET</code> \u8BF7\u6C42</li><li>\u540E\u7AEF\u5C06\u6570\u636E\u4F20\u5165\u56DE\u8C03\u51FD\u6570</li><li>\u6D4F\u89C8\u5668\u52A0\u8F7D <code>script</code> \u6807\u7B7E\uFF0C\u56E0\u4E3A\u6307\u5B9A\u4E86\u7C7B\u578B <code>type=&quot;text/javascript&quot;</code>\uFF0C\u4E8E\u662F\u6267\u884C\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u51FD\u6570</li></ol><p>\u4F18\u7F3A\u70B9\uFF1A</p><ul><li>\u4F18\u70B9\uFF1A\u4F7F\u7528\u7B80\u5355\uFF0C\u6CA1\u6709\u517C\u5BB9\u6027\u95EE\u9898</li><li>\u7F3A\u70B9\uFF1A\u53EA\u652F\u6301 GET \u8BF7\u6C42</li></ul><h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h3><p>CORS\uFF1A<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring\uFF0C\u8DE8\u6E90\u8D44\u6E90\u5171\u4EAB\uFF08\u53C8\u79F0\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09</p><p>\u8BF7\u6C42\u53C8\u5206\u7B80\u5355\u8BF7\u6C42\u4E0E\u590D\u6742\u8BF7\u6C42\uFF08\u975E\u7B80\u5355\u8BF7\u6C42\uFF09\uFF1A\u7B80\u5355\u8BF7\u6C42\u4E0D\u4F1A\u89E6\u53D1 CORS \u7684 <code>OPTIONS</code>\u9884\u68C0\u8BF7\u6C42\uFF0C\u590D\u6742\u8BF7\u6C42\u4E00\u822C\u4F1A\u4FEE\u6539\u6570\u636E\u5E93\u6570\u636E\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u9884\u5148\u68C0\u67E5\u4E0B\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8BE5\u8BF7\u6C42\u3002</p><p>\u7B80\u5355\u8BF7\u6C42\u4E3B\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u5927\u6761\u4EF6\uFF1A</p><p>\u6761\u4EF6 1\uFF1A\u4F7F\u7528\u4E0B\u5217\u65B9\u6CD5\u4E4B\u4E00\uFF1A</p><ul><li>GET</li><li>HEAD</li><li>POST</li></ul><p>\u6761\u4EF6 2\uFF1A<code>Content-Type</code> \u7684\u503C\u4EC5\u9650\u4E8E\u4E0B\u5217\u4E09\u8005\u4E4B\u4E00\uFF1A</p><ul><li><code>text/plain</code></li><li><code>multipart/form-data</code></li><li><code>application/x-www-form-urlencoded</code></li></ul><p>POST \u63D0\u4EA4 JSON \u6570\u636E\u662F\u590D\u6742\u8BF7\u6C42\uFF0CPOST \u63D0\u4EA4 form \u8868\u5355\u6570\u636E\u662F\u7B80\u5355\u8BF7\u6C42\u3002</p><p>\u5982\u4F55\u901A\u8FC7 CORS \u8DE8\u57DF\uFF1A</p><ul><li>\u5BF9\u4E8E\u7B80\u5355\u8BF7\u6C42\uFF1A\u670D\u52A1\u7AEF\u5728\u54CD\u5E94\u5934\u8BBE\u7F6E</li></ul><div class="language-http ext-http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://server</span></span>
// \u6216 * \u5141\u8BB8\u6240\u6709\u6E90\u8BBF\u95EE
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">* </span></span>
</code></pre></div><ul><li>\u5BF9\u4E8E\u590D\u6742\u8BF7\u6C42\uFF1A\u670D\u52A1\u7AEF\u5728\u54CD\u5E94\u5934\u8BBE\u7F6E</li></ul><div class="language-http ext-http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://client</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Methods</span><span class="token punctuation">:</span> <span class="token header-value">GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Headers</span><span class="token punctuation">:</span> <span class="token header-value">Content-Type</span></span>
</code></pre></div><p>\u5982\u679C\u9700\u8981\u643A\u5E26 <code>Cookie</code>\uFF1A</p><ul><li>\u5BA2\u6237\u7AEF AJAX \u8BF7\u6C42\u9700\u8981\u8BBE\u7F6E<code>xhr.withCredentials: true</code></li><li>\u670D\u52A1\u7AEF\u54CD\u5E94\u5934\u9700\u8981\u8BBE\u7F6E <code>Access-Control-Allow-Credentials: true</code></li></ul><h3 id="\u670D\u52A1\u5668\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u4EE3\u7406" aria-hidden="true">#</a> \u670D\u52A1\u5668\u4EE3\u7406</h3><p>Nginx \u53CD\u5411\u4EE3\u7406\uFF0C\u76D1\u542C\u67D0\u4E2A\u57DF\u540D\u7684\uFF0C\u518D\u8F6C\u53D1\u5230\u53E6\u4E00\u4E2A\u57DF\u540D\u3002</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,38),r={href:"https://juejin.cn/post/6844903767226351623",target:"_blank",rel:"noopener noreferrer"},d=c("\u4E5D\u79CD\u8DE8\u57DF\u65B9\u5F0F\u5B9E\u73B0\u539F\u7406\uFF08\u5B8C\u6574\u7248\uFF09");function k(g,h){const n=l("ExternalLinkIcon");return t(),e("div",null,[i,a("ul",null,[a("li",null,[a("a",r,[d,p(n)])])])])}var v=s(u,[["render",k],["__file","same-origin-policy.html.vue"]]);export{v as default};
