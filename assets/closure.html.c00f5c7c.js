import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{f as a}from"./app.668999c6.js";const s={},e=a(`<h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><p>\u95ED\u5305\u662F\u4E00\u79CD\u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u8BBF\u95EE\u5230\u5916\u90E8\u81EA\u7531\u53D8\u91CF\u7684\u8BED\u6CD5\u7279\u6027\uFF0C\u5728\u5934\u7B49\u51FD\u6570\uFF08\u51FD\u6570\u662F\u4E00\u7B49\u516C\u6C11\uFF09\u7684\u7F16\u7A0B\u8BED\u8A00\u4E2D\u90FD\u652F\u6301\u3002</p><p>\u53D8\u91CF\u5206\u4E3A\uFF1A</p><ol><li>\u5168\u5C40\u53D8\u91CF\uFF1A\u5728\u5168\u5C40\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u6240\u6709\u4F5C\u7528\u57DF\u90FD\u53EF\u4EE5\u8BBF\u95EE</li><li>\u5C40\u90E8\uFF08\u672C\u5730\uFF09\u53D8\u91CF\uFF1A\u5728\u67D0\u4E2A\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u5F53\u524D<strong>\u51FD\u6570</strong>\u4F5C\u7528\u57DF\u53CA\u5176\u5B50\u4F5C\u7528\u57DF\u8BBF\u95EE</li><li>\u81EA\u7531\u53D8\u91CF\uFF1A\u65E2\u4E0D\u662F\u5168\u5C40\u53D8\u91CF\u4E5F\u4E0D\u662F\u67D0\u51FD\u6570\u7684\u5C40\u90E8\u53D8\u91CF\u5C31\u662F\u81EA\u7531\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u53CA\u5176\u5B50\u4F5C\u7528\u57DF\u8BBF\u95EE</li></ol><p>\u95ED\u5305 = \u51FD\u6570 + \u81EA\u7531\u53D8\u91CF</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let global = &#39;global&#39; // \u5168\u5C40\u53D8\u91CF
{
  let free = &#39;free&#39; // \u81EA\u7531\u53D8\u91CF
  function foo() {
    let local = &#39;foo local&#39; // foo \u7684\u5C40\u90E8\uFF08\u672C\u5730\uFF09\u53D8\u91CF
    console.log(free) // free
    console.log(local) // foo local
    console.log(global) // global

    function bar() {
      console.log(free) // free
      console.log(local) // foo local
      console.log(global) // global
    }
    bar()
  }
}
foo()
// console.log(free) // free is not defined
// console.log(local) // local is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h2><p>\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF\u7B49\u4E8E\u4E00\u4E2A\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0C\u5728\u51FD\u6570\u5185\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\u4E86\u8BE5\u53D8\u91CF\u7684\u51FD\u6570</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u80CC\uFF01
const foo = function () {
  let n = &#39;foo n&#39;
  return function bar() {
    console.log(n)
  }
}()
foo()

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><ol><li>\u9690\u85CF\u6570\u636E\uFF0C\u5B9E\u73B0\u79C1\u6709\u6210\u5458\uFF08\u53D8\u91CF\u6216\u65B9\u6CD5\uFF09\uFF0C\u53EA\u63D0\u4F9B\u5BF9\u5916\u7684\u63A5\u53E3</li></ol><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>function createCache() {
  const data = {} // \u95ED\u5305\u4E2D\u88AB\u9690\u85CF\u7684\u6570\u636E\uFF0C\u5916\u754C\u65E0\u6CD5\u8BBF\u95EE
  // \u8FD4\u56DE\u4E00\u4E2A\u6709 getter \u548C setter \u7684\u5BF9\u8C61
  return {
    set: (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}

const cache = createCache()
cache.set(&#39;age&#39;, 22)
console.log(cache.get(&#39;age&#39;)) // 22
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ol start="2"><li><p>\u5728\u5185\u5B58\u4E2D\u7EF4\u6301\u53D8\u91CF\u3002\uFF08\u5E9F\u8BDD\uFF0C\u5BF9\u4E8E\u9700\u8981\u7528\u5230\u7684\u53D8\u91CF\uFF0C\u5783\u573E\u56DE\u6536\u673A\u5236\u672C\u5E94\u7EF4\u6301\u8BE5\u53D8\u91CF\uFF09\u5BF9\u4E8E\u666E\u901A\u51FD\u6570\u6267\u884C\u540E\u9500\u6BC1\u5185\u90E8\u4F5C\u7528\u57DF</p></li><li><p>\u907F\u514D\u5168\u5C40\u6C61\u67D3\uFF08\u5E9F\u8BDD\uFF0C\u56E0\u4E3A\u7528\u7684\u5C31\u662F\u5C40\u90E8\u53D8\u91CF\uFF09</p></li></ol><h2 id="\u5185\u5B58\u6CC4\u9732\u8C23\u8A00" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6CC4\u9732\u8C23\u8A00" aria-hidden="true">#</a> \u5185\u5B58\u6CC4\u9732\u8C23\u8A00</h2><p>\u5185\u5B58\u6CC4\u6F0F\uFF1A\u7CFB\u7EDF\u8FDB\u7A0B\u4E0D\u518D\u7528\u5230\u7684\u5185\u5B58\uFF0C\u6CA1\u6709\u53CA\u65F6\u91CA\u653E\u6216\u88AB\u56DE\u6536</p><p>\u95ED\u5305\u4E0D\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF0C\u8001\u6D4F\u89C8\u5668\uFF08\u4E3B\u8981\u662F IE6\uFF09\u7531\u4E8E\u5783\u573E\u56DE\u6536\u7684 bug\uFF0C\u5BFC\u81F4\u5BB9\u6613\u51FA\u73B0\u5185\u5B58\u6CC4\u6F0F\u3002</p><p>\u6EE5\u7528\u95ED\u5305\u624D\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF0C\u56E0\u4E3A\u95ED\u5305\u5305\u542B\u5176\u7236\u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0C\u6BD4\u666E\u901A\u51FD\u6570\u5360\u6709\u66F4\u591A\u7684\u5185\u5B58\u7A7A\u95F4\u3002</p>`,17);function l(r,c){return e}var b=n(s,[["render",l],["__file","closure.html.vue"]]);export{b as default};
