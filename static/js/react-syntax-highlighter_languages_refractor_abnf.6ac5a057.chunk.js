"use strict";(self.webpackChunktableformats=self.webpackChunktableformats||[]).push([[9073],{6887:n=>{function a(n){!function(n){var a="(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";n.languages.abnf={comment:/;.*/,string:{pattern:/(?:%[is])?"[^"\n\r]*"/,greedy:!0,inside:{punctuation:/^%[is]/}},range:{pattern:/%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,alias:"number"},terminal:{pattern:/%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,alias:"number"},repetition:{pattern:/(^|[^\w-])(?:\d*\*\d*|\d+)/,lookbehind:!0,alias:"operator"},definition:{pattern:/(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,lookbehind:!0,alias:"keyword",inside:{punctuation:/<|>/}},"core-rule":{pattern:RegExp("(?:(^|[^<\\w-])"+a+"|<"+a+">)(?![\\w-])","i"),lookbehind:!0,alias:["rule","constant"],inside:{punctuation:/<|>/}},rule:{pattern:/(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,lookbehind:!0,inside:{punctuation:/<|>/}},operator:/=\/?|\//,punctuation:/[()\[\]]/}}(n)}n.exports=a,a.displayName="abnf",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_abnf.6ac5a057.chunk.js.map