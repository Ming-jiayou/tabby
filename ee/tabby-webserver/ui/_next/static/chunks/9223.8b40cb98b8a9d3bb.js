(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9223],{69223:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{default:function(){return eb}});var i=n(36164),s=n(3546),o=n(30352),l=n(49776),a=n(88105),c=n(74630),u=n(28242),d=n(28312),f=n(11978),h=n(16784),m=n(57288),p=n(85312);function v(e,t){let n=e.doc,{span:r,utf16_column_range:i}=t;try{let e=n.line(r.start.row+1),t=e.from+i.start,s=e.from+i.end;return{start:t,end:s}}catch(e){return null}}let g=a.p.mark({class:"cm-tag-mark"}),x=a.tk.baseTheme({".cm-tag-mark":{border:"1px solid hsla(var(--tag-blue-border))",padding:"0px 4px",borderRadius:"4px",backgroundColor:"hsla(var(--tag-blue-bg))",color:"hsla(var(--tag-blue-text)) !important"},".cm-tag-mark > span":{color:"hsla(var(--tag-blue-text)) !important"}});function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.state.doc,r=n.length;if(!r)return a.p.none;let i=[];for(let n of t){let t=v(e.state,n);try{t&&t.start<=r&&t.end<=r&&i.push(g.range(t.start,t.end))}catch(e){}}return i.length?a.p.set(i):a.p.none}let y=e=>{let t=a.lg.fromClass(class{update(t){(t.docChanged||t.viewportChanged)&&(this.marks=b(t.view,e))}constructor(t){this.marks=b(t,e)}},{decorations:e=>e.marks});return[t,x]};var w=n(94559);let k=a.p.mark({class:"cm-range-highlight"}),j=a.tk.baseTheme({".cm-range-highlight":{backgroundColor:"hsl(var(--selection))"}});function C(e,t){let n;let r=e.selection.ranges;e:for(let i of r)for(let r of t){let t=v(e,r);if(!t)continue;let s=t.start-r.name_range.start;if(i.from>=t.start&&i.to<=t.end){n={from:r.range.start+s,to:r.range.end+s};break e}}return n?a.p.set([k.range(n.from,n.to)]):a.p.none}let N=w.Py.define(),E=e=>{let t=a.lg.fromClass(class{update(t){if(t.selectionSet)this.triggerType="cursor",this.highlight=C(t.view.state,e);else if("cursor"!==this.triggerType)for(let e of t.transactions)for(let t of e.effects)t.is(N)&&t.value&&(this.highlight=t.value,this.triggerType="hover")}handleMouseListener(t){if(-1!==this.timeout&&clearTimeout(this.timeout),!this.highlight.size){let n=setTimeout(()=>{let n=this.view.posAtCoords({x:t.clientX,y:t.clientY});if(null!==n){let t=function(e,t){let n;for(let r of t)if(e>=r.name_range.start&&e<=r.name_range.end){n={from:r.range.start,to:r.range.end};break}return n?a.p.set([k.range(n.from,n.to)]):a.p.none}(n,e);if(t.size)this.triggerType="hover";else if("cursor"===this.triggerType)return;this.view.dispatch({effects:N.of(t)})}},100);this.timeout=n}}destroy(){}constructor(t){this.view=t,this.highlight=C(t.state,e),this.timeout=-1,this.triggerType="hover"}},{decorations:e=>e.highlight});return[t,j]},S=a.tk.baseTheme({".cm-tooltip":{border:"none !important"},".cm-tooltip-cursor":{backgroundColor:"hsl(var(--popover))",color:"hsl(var(--popover-foreground))",border:"none !important",padding:"2px 7px",borderRadius:"4px"}}),M=e=>[(0,a.bF)((t,n,r)=>{for(let r of e){let e=v(t.state,r);if(e&&n>=e.start&&n<=e.end)return{pos:n,above:!0,create(e){let t=document.createElement("div");return t.className="cm-tooltip-cursor",t.textContent="".concat(r.syntax_type_name),{dom:t,offset:{x:-20,y:4}}}}}return null}),S];var L=n(27064),R=n(87279),_=n(31458),T=n(62202),P=n(81565);let z=new class extends a.SJ{constructor(...e){super(...e),this.elementClass="cm-selectedLineGutter"}},V=w.Py.define(),A=w.QQ.define({create:()=>null,update(e,t){for(let n of t.effects){if(n.is(V))return n.value;if(n.is(O))return(null==e?void 0:e.line)||(e={line:n.value}),{...e,endLine:n.value}}return e},provide:e=>[a.tk.decorations.compute([e],t=>{var n;let r=t.field(e);if(!r)return a.p.none;let i=null!==(n=r.endLine)&&void 0!==n?n:r.line,s=Math.min(r.line,i),o=Math.min(t.doc.lines,s===i?r.line:i),l=new w.f_;for(let e=s;e<=o;e++){let n=t.doc.line(e).from;l.add(n,n,a.p.line({class:"cm-selectedLine"}))}return l.finish()}),a.v7.compute([e],t=>{var n;let r=[],i=t.field(e);if(!i)return w.Xs.empty;let s=null!==(n=i.endLine)&&void 0!==n?n:i.line,o=Math.min(i.line,s),l=Math.min(t.doc.lines,o===s?i.line:s);for(let e=o;e<=l;e++){let n=t.doc.line(e).from;r.push(z.range(n))}return w.Xs.of(r)})]}),D=e=>{let{isMulti:t}=e;return(0,i.jsxs)(T.h_,{modal:!1,children:[(0,i.jsx)(T.$F,{asChild:!0,children:(0,i.jsx)(_.z,{className:"ml-1 h-5",size:"icon",variant:"secondary",children:(0,i.jsx)(P.IconMore,{})})}),(0,i.jsxs)(T.AW,{align:"start",children:[(0,i.jsx)(T.Xi,{className:"cursor-pointer",onSelect:()=>{L.u.emit("line_menu_action",{action:"copy-line"})},children:t?"Copy lines":"Copy line"}),(0,i.jsx)(T.Xi,{className:"cursor-pointer",onSelect:e=>{L.u.emit("line_menu_action",{action:"copy-permalink"})},children:"Copy permalink"})]})]})},I=new class extends a.SJ{toDOM(){let e=document.createElement("div"),t=R.createRoot(e);return t.render((0,i.jsx)(D,{isMulti:!1})),e}},U=new class extends a.SJ{toDOM(){let e=document.createElement("div"),t=R.createRoot(e);return t.render((0,i.jsx)(D,{isMulti:!0})),e}},Q=a.tk.theme({".cm-lineMenuGutter":{width:"40px"},".cm-lineNumbers":{userSelect:"none",cursor:"pointer",color:"var(--line-number-color)","& .cm-gutterElement:hover":{textDecoration:"underline"}}});function X(e,t){let n=F(t,e.state.doc);return e.dispatch({effects:V.of(n?t:null)}),t}let O=w.Py.define(),B=e=>{let{onSelectLine:t}=e;return[Q,A,(0,a.v5)({class:"cm-lineMenuGutter",markers:e=>(function(e){let t=e.state.field(A);if(!F(t,e.state.doc))return w.Xs.empty;if(null==t?void 0:t.line){let n=!!t.endLine&&t.line!==t.endLine,r=t.endLine?Math.min(t.line,t.endLine):t.line,i=e.state.doc.line(r).from;return w.Xs.empty.update({add:[n?U.range(i):I.range(i)]})}return w.Xs.empty})(e),initialSpacer:()=>I,domEventHandlers:{mousedown(e,t,n){let r=e.state.doc.lineAt(t.from),i=r.number;return e.dispatch({effects:n.shiftKey?O.of(i):V.of({line:i})}),!0}}}),(0,a.Eu)({domEventHandlers:{mousedown(e,n,r){let i=e.state.doc.lineAt(n.from).number;return e.dispatch({effects:r.shiftKey?O.of(i):V.of({line:i})}),null==t||t(function(e){if(!e)return;let{line:t,endLine:n}=e;return t&&n?t===n?{line:t}:{line:Math.min(t,n),endLine:Math.max(t,n)}:t?{line:t}:void 0}(e.state.field(A))),!1}}})]};function F(e,t){if(!t)return!1;let{lines:n}=t;return(null==e||!e.line||!(e.line>n))&&(null==e||!e.endLine||!(e.endLine>n))}var Z=n(1070),H=n(48048);n(71402);var W=n(63484),$=n(42891),J=n.n($),q=n(23342);let G=e=>{let{className:t,text:n,language:r,path:s,lineFrom:o,lineTo:l,gitUrl:a,...c}=e,u=e=>{L.u.emit("quick_action_command",e)};return(0,i.jsxs)("div",{className:(0,m.cn)("mt-2 flex items-center gap-2 rounded-md border bg-background px-2 py-1",t),...c,children:[(0,i.jsx)(J(),{src:q.Z,width:32,alt:"logo"}),(0,i.jsx)(_.z,{size:"sm",variant:"outline",onClick:e=>u("explain"),children:"Explain"}),(0,i.jsxs)(T.h_,{modal:!1,children:[(0,i.jsx)(T.$F,{asChild:!0,children:(0,i.jsxs)(_.z,{size:"sm",variant:"outline",children:["Generate",(0,i.jsx)(P.IconChevronUpDown,{className:"ml-1"})]})}),(0,i.jsxs)(T.AW,{align:"start",children:[(0,i.jsx)(T.Xi,{className:"cursor-pointer",onSelect:()=>u("generate-tests"),children:"Unit Test"}),(0,i.jsx)(T.Xi,{className:"cursor-pointer",onSelect:()=>u("generate-docs"),children:"Documentation"})]})]})]})};var K=n(58354);function Y(e,t){var n;return t.empty?null:null!==(n=e.get(t.from))&&void 0!==n?n:null}let ee=/[\s!,.:;?]/;function et(e,t){let n=new Map;if(!e.valid)return n;let r=1,i=e.getCursor(t),s=i.next();for(;!s.done;)s.value.from!==s.value.to&&n.set(s.value.from,r++),s=i.next();return n}let en=w.Py.define();class er{createDom(){let e=document.createElement("div");return e.onkeydown=this.onkeydown,e}update(e){var t,n,r,i,s;let o=this.state,a=(0,l.uP)(e.state),c=!a.eq(this.state.searchQuery);c&&(o={...o,inputValue:a.search,searchQuery:a,matches:et(a,e.view.state.doc)}),(c||e.selectionSet)&&(o={...o,currentMatchIndex:Y(o.matches,e.view.state.selection.main)}),o!==this.state&&(this.state=o,null===(t=this.panel)||void 0===t||t.update(this.state)),e.transactions.some(e=>e.effects.some(e=>e.is(en)&&e.value))&&(null===(r=this.panel)||void 0===r||null===(n=r.input)||void 0===n||n.focus(),null===(s=this.panel)||void 0===s||null===(i=s.input)||void 0===i||i.select())}mount(){this.panel=this.createPanelView({root:this.dom,initialState:this.state,onSearch:e=>this.searchTerm.next(e),findNext:this.findNext,findPrevious:this.findPrevious,setCaseSensitive:e=>this.commit({caseSensitive:e}),setRegexp:e=>this.commit({regexp:e}),close:()=>(0,l.N$)(this.view)})}destroy(){var e;this.subscriptions.forEach(e=>e.unsubscribe()),null===(e=this.panel)||void 0===e||e.destroy()}constructor(e,t,n){var r,i,s,o;this.view=e,this.createPanelView=t,this.top=!0,this.panel=null,this.searchTerm=(0,K.nN)(),this.subscriptions=[],this.previousValue=null,this.findNext=()=>{(0,l.g)(this.view),this.view.dispatch({effects:a.tk.scrollIntoView(this.view.state.selection.main.from,{y:"nearest",yMargin:20})})},this.findPrevious=()=>{(0,l.a7)(this.view),this.view.dispatch({effects:a.tk.scrollIntoView(this.view.state.selection.main.from,{y:"nearest",yMargin:20})})},this.onkeydown=e=>{var t;(0,a.$1)(this.view,e,"search-panel")?e.preventDefault():"Enter"===e.key&&e.target===(null===(t=this.panel)||void 0===t?void 0:t.input)&&(e.preventDefault(),e.shiftKey?this.findPrevious():this.findNext())},this.commit=e=>{let{search:t,caseSensitive:n,regexp:r}=e,i=new l.Jb({search:null!=t?t:this.state.searchQuery.search,caseSensitive:null!=n?n:this.state.searchQuery.caseSensitive,regexp:null!=r?r:this.state.searchQuery.regexp});if(!i.eq(this.state.searchQuery)){let e={},t=[l.ql.of(i)];if(i.search){let{scrollTop:n}=this.view.scrollDOM,r=this.view.lineBlockAtHeight(n);if(Math.abs(r.bottom-n)<=r.height/2&&(r=this.view.lineBlockAtHeight(n+r.height)),i.regexp&&!i.valid)return;let s=i.getCursor(this.view.state.doc,r.from).next();s.done&&(s=i.getCursor(this.view.state.doc).next()),s.done||(e={selection:{anchor:s.value.from,head:s.value.to},scrollIntoView:!0,userEvent:"select.search"},t.push(function(e,t){let{from:n,to:r}=t,i=e.state.doc.lineAt(n),s=e.state.doc.lineAt(r).to,o=Math.max(i.from,n-30),l=Math.min(s,r+30),c=e.state.sliceDoc(o,l);if(o!==i.from){for(let e=0;e<30;e++)if(!ee.test(c[e+1])&&ee.test(c[e])){c=c.slice(e);break}}if(l!==s){for(let e=c.length-1;e>c.length-30;e--)if(!ee.test(c[e-1])&&ee.test(c[e])){c=c.slice(0,e);break}}return a.tk.announce.of("".concat(e.state.phrase("current match"),". ").concat(c," ").concat(e.state.phrase("on line")," ").concat(i.number,"."))}(this.view,s.value)))}this.view.dispatch({...e,effects:t})}},this.dom=this.createDom();let c=(0,l.uP)(this.view.state),u=et(c,e.state.doc);this.state={searchQuery:new l.Jb({...c,caseSensitive:null!==(r=null==n?void 0:n.caseSensitive)&&void 0!==r?r:c.caseSensitive,regexp:null!==(i=null==n?void 0:n.regexp)&&void 0!==i?i:c.regexp,search:null!==(s=null==n?void 0:n.searchValue)&&void 0!==s?s:c.search}),inputValue:null!==(o=null==n?void 0:n.searchValue)&&void 0!==o?o:c.search,matches:u,currentMatchIndex:Y(u,e.state.selection.main)},this.subscriptions.push((0,K.zG)((0,K.TS)([(0,K._A)(this.state.searchQuery.search),this.searchTerm.source]),(0,K.hX)(e=>{let t=e!==this.previousValue;return this.previousValue=e,t}),(0,K.bw)(e=>{var t;this.state={...this.state,inputValue:e},null===(t=this.panel)||void 0===t||t.update(this.state)}),(0,K.Ds)(()=>100),(0,K.Ld)(e=>this.commit({search:e}))))}}let ei=e=>{let t=new w.F6;return[t.of(a.$f.of(l.Lp.map(e=>"Mod-f"===e.key?{...e,run:t=>{var n;let r=null===(n=e.run)||void 0===n?void 0:n.call(e,t);return!!r&&(t.dispatch({effects:en.of(!0)}),!0)}}:e))),(0,l.yC)({createPanel:t=>new er(t,e.createPanel,e.initialState)}),a.tk.theme({".cm-panels":{backgroundColor:"hsl(var(--secondary))",color:"hsl(var(--secondary-foreground))",borderBottom:"1px solid hsl(var(--border))",borderTop:"1px solid hsl(var(--border))",position:"sticky",top:"50px !important",zIndex:20}})]};var es=n(82394);function eo(e){let t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...e)=>t.current?.(...e),[])}n(30171);var el=s.forwardRef((e,t)=>{let{children:n,...r}=e,o=s.Children.toArray(n),l=o.find(eu);if(l){let e=l.props.children,n=o.map(t=>t!==l?t:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,i.jsx)(ea,{...r,ref:t,children:s.isValidElement(e)?s.cloneElement(e,void 0,n):null})}return(0,i.jsx)(ea,{...r,ref:t,children:n})});el.displayName="Slot";var ea=s.forwardRef((e,t)=>{let{children:n,...r}=e;if(s.isValidElement(n)){let e,i;let o=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return s.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],s=t[r],o=/^on[A-Z]/.test(r);o?i&&s?n[r]=(...e)=>{s(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...s}:"className"===r&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,o):o})}return s.Children.count(n)>1?s.Children.only(null):null});ea.displayName="SlotClone";var ec=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function eu(e){return s.isValidElement(e)&&e.type===ec}var ed=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=s.forwardRef((e,n)=>{let{asChild:r,...s}=e,o=r?el:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...s,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ef=s.forwardRef((e,t)=>{let{pressed:n,defaultPressed:r=!1,onPressedChange:o,...l}=e,[a=!1,c]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=s.useState(e),[r]=n,i=s.useRef(r),o=eo(t);return s.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}({defaultProp:t,onChange:n}),o=void 0!==e,l=o?e:r,a=eo(n),c=s.useCallback(t=>{if(o){let n="function"==typeof t?t(e):t;n!==e&&a(n)}else i(t)},[o,e,i,a]);return[l,c]}({prop:n,onChange:o,defaultProp:r});return(0,i.jsx)(ed.button,{type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0,...l,ref:t,onClick:function(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}(e.onClick,()=>{e.disabled||c(!a)})})});ef.displayName="Toggle";var eh=n(14375);let em=(0,eh.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),ep=s.forwardRef((e,t)=>{let{className:n,variant:r,size:s,...o}=e;return(0,i.jsx)(ef,{ref:t,className:(0,m.cn)(em({variant:r,size:s,className:n})),...o})});ep.displayName=ef.displayName;class ev{update(e){this.render(e)}destroy(){this.root.unmount()}render(e){let{searchQuery:t,inputValue:n,currentMatchIndex:r,matches:s}=e,o=s.size;this.root.render((0,i.jsx)(eg,{onMount:()=>{var e;null===(e=this.input)||void 0===e||e.focus()},children:(0,i.jsxs)("div",{className:"flex items-center justify-between bg-secondary py-2 pl-3 text-secondary-foreground ",children:[(0,i.jsxs)("div",{className:"flex flex-1 items-center gap-2",children:[(0,i.jsxs)("div",{className:(0,m.cn)("cm-text-editor-search-input relative"),children:[(0,i.jsx)(es.I,{ref:e=>this.input=e,className:"max-w-[300px] bg-input/40 pr-24",placeholder:"Find...",autoComplete:"off",value:n,onChange:e=>this.options.onSearch(e.target.value)}),(0,i.jsxs)("div",{className:"absolute right-2 top-0.5 flex items-center gap-1",onClick:e=>{var t;null===(t=this.input)||void 0===t||t.focus()},children:[(0,i.jsx)(ep,{pressed:t.caseSensitive,onPressedChange:e=>this.options.setCaseSensitive(e),size:"sm",className:"h-8 data-[state=on]:bg-primary/80 data-[state=on]:text-primary-foreground",children:(0,i.jsx)(P.IconLetterCaseCapitalize,{strokeWidth:2})}),(0,i.jsx)(ep,{pressed:t.regexp,onPressedChange:e=>this.options.setRegexp(e),size:"sm",className:"h-8 data-[state=on]:bg-primary/80 data-[state=on]:text-primary-foreground",children:(0,i.jsx)(P.IconRegex,{})})]})]}),o>1&&(0,i.jsxs)("div",{className:"space-x-1",children:[(0,i.jsx)(_.z,{type:"button",size:"icon",variant:"secondary",onClick:this.options.findPrevious,"aria-label":"previous result",children:(0,i.jsx)(P.IconChevronLeft,{})}),(0,i.jsx)(_.z,{type:"button",size:"icon",variant:"secondary",onClick:this.options.findNext,"aria-label":"next result",children:(0,i.jsx)(P.IconChevronRight,{})})]}),t.search?(0,i.jsxs)("div",{className:"text-sm",children:[null!==r&&"".concat(r," of ")," ",o," ",o<=1?"result":"results"]}):null]}),(0,i.jsx)(_.z,{className:"shrink-0",size:"icon",variant:"ghost",onClick:e=>this.options.close(),children:(0,i.jsx)(P.IconClose,{})})]})}))}constructor(e){this.options=e,this.input=null,this.root=(0,R.createRoot)(this.options.root),this.render(e.initialState)}}function eg(e){let{children:t,onMount:n}=e;return(0,s.useEffect)(()=>{null==n||n()},[]),(0,i.jsx)(i.Fragment,{children:t})}var ex=n(16366),eb=e=>{var t,n,v;let{value:g,language:x}=e,{theme:b}=(0,u.F)(),k=s.useMemo(()=>[],[]),{copyToClipboard:j}=(0,d.m)({}),[C,N]=function(){let e=(0,f.useParams)(),[t,n]=s.useState(""),r=(0,h.d)(t),i=s.useCallback(e=>{window.location.hash=e},[]),o=()=>{let e=window.location.hash;r.current!==e&&n(e)};return s.useEffect(()=>(window.addEventListener("hashchange",o),()=>{window.removeEventListener("hashchange",o)}),[]),s.useEffect(o,[e]),[t,i]}(),S=null===(t=(0,H.kQ)(C))||void 0===t?void 0:t.start,_=null===(n=(0,H.kQ)(C))||void 0===n?void 0:n.end,[T,P]=s.useState(null),{isChatEnabled:z,activePath:V,activeEntryInfo:A,activeRepo:D,activeRepoRef:I,textEditorViewRef:U}=s.useContext(Z.SourceCodeBrowserContext),{basename:Q}=A,O=null!==(v=null==D?void 0:D.gitUrl)&&void 0!==v?v:"",F=s.useMemo(()=>{let e=[B({onSelectLine:e=>{if(!e){N("");return}N((0,m.nO)({start:e.line,end:e.endLine}))}}),(0,o.mi)({markerDOM(e){let t=document.createElement("div");return t.style.cursor="pointer",e?t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg>':t.innerHTML='<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>',t}}),(0,a.Uw)(),ei({createPanel:e=>new ev(e)})];if(z&&e.push((0,ex.T)(e=>{let t=e&&A.basename&&D?{kind:"file",filepath:{kind:"git",filepath:A.basename,gitUrl:null==D?void 0:D.gitUrl},range:{start:e.startLine,end:e.endLine},content:e.content}:null;L.u.emit("selection_change",t)})),z&&V&&Q){var t;e.push((t={language:x,path:Q,gitUrl:O},w.QQ.define({create:()=>null,update(e,n){if(n.newSelection.main.empty)return clearTimeout(r),null;if(n.selection){if(function(e){let t=!!e.selection&&!e.selection.main.empty;return t&&e.isUserEvent("select")&&!e.isUserEvent("select.search")}(n)){let e=function(e,t){let{selection:n}=e,s=e.doc.lineAt(n.main.from),o=e.doc.lineAt(n.main.to),l=s.number!==o.number,a=l?o.from:n.main.from,c=e.doc.sliceString(e.selection.main.from,e.selection.main.to)||"";return{pos:a,above:!1,strictSide:!0,arrow:!1,create(){let e=document.createElement("div");e.style.background="transparent",e.style.border="none";let n=R.createRoot(e);return e.onclick=e=>e.stopImmediatePropagation(),r&&clearTimeout(r),r=window.setTimeout(()=>{n.render((0,i.jsx)(G,{text:c,language:null==t?void 0:t.language,lineFrom:s.number,lineTo:o.number,path:null==t?void 0:t.path,gitUrl:null==t?void 0:t.gitUrl}))},1e3),{dom:e}}}}(n.state,t);return e}return clearTimeout(r),null}return e},provide:e=>a.hJ.compute([e],t=>t.field(e))})))}return g&&k&&e.push(y(k),M(k),E(k)),e},[g,k,x]);s.useEffect(()=>{let e=e=>{if("number"==typeof S){if("copy-permalink"===e.action){var t,n,r;let e=(0,H.I)(D,null!==(n=null==I?void 0:null===(t=I.ref)||void 0===t?void 0:t.commit)&&void 0!==n?n:null==I?void 0:I.name,null!==(r=A.basename)&&void 0!==r?r:"",(0,H.BX)(A.viewMode)),i=new URL("".concat(window.location.origin,"/files/").concat(e));(0,H.p4)(window.location.hash)&&(i.hash=window.location.hash);let s=A.basename?(0,W.U$)(A.basename)[0]:void 0;"markdown"===s&&i.searchParams.set("plain","1"),j(i.toString());return}if("copy-line"===e.action){let e,t;if(!T)return;let n=T.state.doc.line(S);if(_&&(t=T.state.doc.line(_)),n&&t&&n.number<=t.number){let r=n.from,i=t.to;e=T.state.doc.slice(r,i).toString()}else n&&(e=n.text);e&&j(e)}}};return L.u.on("line_menu_action",e),()=>{L.u.off("line_menu_action",e)}},[g,S,_,T]),s.useEffect(()=>{if(!(0,c.Z)(S)&&T&&g)try{var e,t,n,r;let i=null==T?void 0:null===(t=T.state)||void 0===t?void 0:null===(e=t.doc)||void 0===e?void 0:e.line(S),s=(0,c.Z)(_)?null:null==T?void 0:null===(r=T.state)||void 0===r?void 0:null===(n=r.doc)||void 0===n?void 0:n.line(_);if(i){let e=i.number,t=null==s?void 0:s.number;if(X(T,{line:e,endLine:t}),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e.domAtPos(t).node,i=3===r.nodeType?r.parentElement:r;if(i){let e=i.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;return e.top>=n&&e.bottom<=t}return!1}(T,i.from,90))return;T.dispatch({effects:a.tk.scrollIntoView(i.from,{y:"start",yMargin:200})})}}catch(e){}return()=>{T&&X(T,null)}},[g,S,T]);let $=(0,h.d)(()=>{T&&(0,l.nx)(T)});return s.useEffect(()=>{let e=e=>{if(!T)return;let t=navigator.userAgent.toUpperCase().indexOf("MAC")>=0,n=(t?e.metaKey:e.ctrlKey)&&"f"===e.key;n&&(e.preventDefault(),$.current())};return window.addEventListener("keydown",e),U.current=T,()=>{window.removeEventListener("keydown",e)}},[T]),(0,i.jsx)(p.Z,{className:"pb-2",value:g,theme:b,language:x,readonly:!0,extensions:F,viewDidUpdate:e=>P(e)})}},62202:function(e,t,n){"use strict";n.d(t,{$F:function(){return a},AW:function(){return d},Ju:function(){return m},VD:function(){return p},Xi:function(){return f},_x:function(){return c},h_:function(){return l},qB:function(){return h}});var r=n(36164),i=n(3546),s=n(19148),o=n(57288);let l=s.fC,a=s.xz;s.ZA,s.Uv,s.Tr;let c=s.Ee;s.wU;let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(s.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...i})});u.displayName=s.tu.displayName;let d=i.forwardRef((e,t)=>{let{className:n,sideOffset:i=4,...l}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:t,sideOffset:i,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...l})})});d.displayName=s.VY.displayName;let f=i.forwardRef((e,t)=>{let{className:n,inset:i,...l}=e;return(0,r.jsx)(s.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",i&&"pl-8",n),...l})});f.displayName=s.ck.displayName;let h=i.forwardRef((e,t)=>{let{className:n,inset:i,...l}=e;return(0,r.jsx)(s.Rk,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",i&&"pl-8",n),...l})});h.displayName=s.Rk.displayName;let m=i.forwardRef((e,t)=>{let{className:n,inset:i,...l}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",i&&"pl-8",n),...l})});m.displayName=s.__.displayName;let p=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",n),...i})});p.displayName=s.Z0.displayName},71402:function(){}}]);