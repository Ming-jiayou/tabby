(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[817],{70766:function(e,t,r){Promise.resolve().then(r.bind(r,83272))},83272:function(e,t,r){"use strict";r.r(t),r.d(t,{NewRepository:function(){return h}});var n=r(36164),i=r(11978);r(3546);var l=r(84381),o=r(5493),a=r(23782),s=r(43240),u=r(11634),c=r(31458),d=r(98150),f=r(82394);let m=(0,s.BX)("\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n"),p=a.Ry({name:a.Z_(),gitUrl:a.Z_()});function x(e){let{onCreated:t}=e,r=(0,o.cI)({resolver:(0,l.F)(p)}),{isSubmitting:a}=r.formState,s=(0,u.Db)(m,{onCompleted(){r.reset({name:void 0,gitUrl:void 0}),t()},form:r}),x=(0,i.useRouter)();return(0,n.jsx)(d.l0,{...r,children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("form",{className:"grid gap-6",onSubmit:r.handleSubmit(s),children:[(0,n.jsx)(d.Wi,{control:r.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(d.xJ,{children:[(0,n.jsx)(d.lX,{required:!0,children:"Name"}),(0,n.jsx)(d.NI,{children:(0,n.jsx)(f.I,{placeholder:"e.g. tabby",autoCapitalize:"none",autoCorrect:"off",autoComplete:"off",...t})}),(0,n.jsx)(d.zG,{})]})}}),(0,n.jsx)(d.Wi,{control:r.control,name:"gitUrl",render:e=>{let{field:t}=e;return(0,n.jsxs)(d.xJ,{children:[(0,n.jsx)(d.lX,{required:!0,children:"Git URL"}),(0,n.jsx)(d.pf,{children:"Remote or local Git URL"}),(0,n.jsx)(d.NI,{children:(0,n.jsx)(f.I,{placeholder:"e.g. https://github.com/TabbyML/tabby",autoCapitalize:"none",autoCorrect:"off",...t})}),(0,n.jsx)(d.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(c.z,{type:"button",variant:"ghost",disabled:a,onClick:()=>x.back(),children:"Cancel"}),(0,n.jsx)(c.z,{type:"submit",disabled:a,children:"Create"})]})]}),(0,n.jsx)(d.zG,{className:"text-center"})]})})}let h=()=>{let e=(0,i.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x,{onCreated:()=>{e.back()}})})}},98150:function(e,t,r){"use strict";r.d(t,{NI:function(){return h},Wi:function(){return d},l0:function(){return u},lX:function(){return x},pf:function(){return b},xJ:function(){return p},zG:function(){return g}});var n=r(36164),i=r(3546),l=r(74047),o=r(5493),a=r(57288),s=r(5266);let u=o.RV,c=i.createContext({}),d=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(o.Qr,{...t})})},f=()=>{let e=i.useContext(c),t=i.useContext(m),{getFieldState:r,formState:n}=(0,o.Gc)(),l=e.name||"root",a=r(l,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:s}=t;return{id:s,name:l,formItemId:"".concat(s,"-form-item"),formDescriptionId:"".concat(s,"-form-item-description"),formMessageId:"".concat(s,"-form-item-message"),...a}},m=i.createContext({}),p=i.forwardRef((e,t)=>{let{className:r,...l}=e,o=i.useId();return(0,n.jsx)(m.Provider,{value:{id:o},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...l})})});p.displayName="FormItem";let x=i.forwardRef((e,t)=>{let{className:r,required:i,...l}=e,{error:o,formItemId:u}=f();return(0,n.jsx)(s._,{ref:t,className:(0,a.cn)(o&&"text-destructive",i&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:u,...l})});x.displayName="FormLabel";let h=i.forwardRef((e,t)=>{let{...r}=e,{error:i,formItemId:o,formDescriptionId:a,formMessageId:s}=f();return(0,n.jsx)(l.g7,{ref:t,id:o,"aria-describedby":i?"".concat(a," ").concat(s):"".concat(a),"aria-invalid":!!i,...r})});h.displayName="FormControl";let b=i.forwardRef((e,t)=>{let{className:r,...i}=e,{formDescriptionId:l}=f();return(0,n.jsx)("div",{ref:t,id:l,className:(0,a.cn)("text-sm text-muted-foreground",r),...i})});b.displayName="FormDescription";let g=i.forwardRef((e,t)=>{let{className:r,children:i,...l}=e,{error:o,formMessageId:s}=f(),u=o?String(null==o?void 0:o.message):i;return u?(0,n.jsx)("p",{ref:t,id:s,className:(0,a.cn)("text-sm font-medium text-destructive",r),...l,children:u}):null});g.displayName="FormMessage"},82394:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var n=r(36164),i=r(3546),l=r(57288);let o=i.forwardRef((e,t)=>{let{className:r,type:i,...o}=e;return(0,n.jsx)("input",{type:i,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},5266:function(e,t,r){"use strict";r.d(t,{_:function(){return u}});var n=r(36164),i=r(3546),l=r(90893),o=r(14375),a=r(57288);let s=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=i.forwardRef((e,t)=>{let{className:r,...i}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,a.cn)(s(),r),...i})});u.displayName=l.f.displayName},65122:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},79869:function(e,t,r){"use strict";r.d(t,{F:function(){return i},e:function(){return l}});var n=r(3546);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,n.useCallback)(i(...e),e)}},72205:function(e,t,r){"use strict";r.d(t,{WV:function(){return a},jH:function(){return s}});var n=r(65122),i=r(3546),l=r(30171),o=r(74047);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,i.forwardRef)((e,r)=>{let{asChild:l,...a}=e,s=l?o.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(s,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function s(e,t){e&&(0,l.flushSync)(()=>e.dispatchEvent(t))}},74047:function(e,t,r){"use strict";r.d(t,{A4:function(){return s},g7:function(){return o}});var n=r(65122),i=r(3546),l=r(79869);let o=(0,i.forwardRef)((e,t)=>{let{children:r,...l}=e,o=i.Children.toArray(r),s=o.find(u);if(s){let e=s.props.children,r=o.map(t=>t!==s?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(a,(0,n.Z)({},l,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,r):null)}return(0,i.createElement)(a,(0,n.Z)({},l,{ref:t}),r)});o.displayName="Slot";let a=(0,i.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,i.isValidElement)(r)?(0,i.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let i=e[n],l=t[n],o=/^on[A-Z]/.test(n);o?i&&l?r[n]=(...e)=>{l(...e),i(...e)}:i&&(r[n]=i):"style"===n?r[n]={...i,...l}:"className"===n&&(r[n]=[i,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,l.F)(t,r.ref):r.ref}):i.Children.count(r)>1?i.Children.only(null):null});a.displayName="SlotClone";let s=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function u(e){return(0,i.isValidElement)(e)&&e.type===s}}},function(e){e.O(0,[7430,55,2546,240,7288,3240,4656,3375,5289,1744],function(){return e(e.s=70766)}),_N_E=e.O()}]);