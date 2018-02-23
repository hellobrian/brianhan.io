webpackJsonp([23419474955521],{323:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Gatsby uses a React component to server render the and other parts of the HTML outside of the core Gatsby application.</p>\n<p>Most sites should use the default html.js shipped with Gatsby. But if you need to customize your site’s html.js, simply copy the default one into your source tree by running:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Template</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  data <span class="token comment">// this prop will be injected by the GraphQL query below.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> markdownRemark <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">;</span> <span class="token comment">// data.markdownRemark holds our post data</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> frontmatter<span class="token punctuation">,</span> html <span class="token punctuation">}</span> <span class="token operator">=</span> markdownRemark<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-post-container"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"blog-post"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>date<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n        <span class="token operator">&lt;</span>div\n          className<span class="token operator">=</span><span class="token string">"blog-post-content"</span>\n          dangerouslySetInnerHTML<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> html <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">/</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>what about css?</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* from prism */</span>\n<span class="token selector">code[class*=\'language-\'],\npre[class*=\'language-\']</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #f8f8f2<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">text-shadow</span><span class="token punctuation">:</span> 0 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0, 0, 0, 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Consolas, Monaco, <span class="token string">\'Andale Mono\'</span>, <span class="token string">\'Ubuntu Mono\'</span>, monospace<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n  <span class="token property">white-space</span><span class="token punctuation">:</span> pre<span class="token punctuation">;</span>\n  <span class="token property">word-spacing</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">word-break</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">word-wrap</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>\n\n  <span class="token property">-moz-tab-size</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>\n  <span class="token property">-o-tab-size</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>\n  <span class="token property">tab-size</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span>\n\n  <span class="token property">-webkit-hyphens</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-moz-hyphens</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">-ms-hyphens</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">hyphens</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{date:"August 20, 2015",path:"/blog/test",title:"test",tags:["dev","test"],excerpt:"this is a test and I'm amazing"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-test-115323f61c610381c118.js.map