"use strict";(self.webpackChunktableformats=self.webpackChunktableformats||[]).push([[3047],{595:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var s=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=s.length;-1!==t.code.indexOf(r=n(a,u));)++u;return s[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function s(u){for(var c=0;c<u.length&&!(r>=o.length);c++){var i=u[c];if("string"===typeof i||i.content&&"string"===typeof i.content){var l=o[r],p=t.tokenStack[l],f="string"===typeof i?i:i.content,g=n(a,l),k=f.indexOf(g);if(k>-1){++r;var m=f.substring(0,k),h=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),d=f.substring(k+g.length),y=[];m&&y.push.apply(y,s([m])),y.push(h),d&&y.push.apply(y,s([d])),"string"===typeof i?u.splice.apply(u,[c,1].concat(y)):i.content=y}}else i.content&&s(i.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.f9bc17fc.chunk.js.map