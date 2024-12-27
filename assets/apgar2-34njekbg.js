import{c as d,r as c,j as e,C as E,a as H,b as F,B as l,P as R,d as G,S as I,e as L}from"./index-DE3L7tVx.js";import{A as U,a as $}from"./alert-BD8rcHkv.js";/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=d("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=d("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.396.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=d("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),V=()=>{const[m,x]=c.useState(0),[r,h]=c.useState(!1),[i,N]=c.useState({appearance:0,pulse:0,grimace:0,activity:0,respiration:0}),[n,v]=c.useState([]),[b,u]=c.useState(!1),[y,w]=c.useState(""),A={appearance:[{score:0,desc:"כחול או חיוור"},{score:1,desc:"גוף ורוד, גפיים כחולות"},{score:2,desc:"ורוד לחלוטין"}],pulse:[{score:0,desc:"ללא דופק"},{score:1,desc:"פחות מ-100 פעימות לדקה"},{score:2,desc:"מעל 100 פעימות לדקה"}],grimace:[{score:0,desc:"אין תגובה לגירוי"},{score:1,desc:"עיוות פנים"},{score:2,desc:"שיעול או התעטשות"}],activity:[{score:0,desc:"רפוי"},{score:1,desc:"כיפוף מועט של גפיים"},{score:2,desc:"תנועה פעילה"}],respiration:[{score:0,desc:"לא נושם"},{score:1,desc:"חלשה או לא סדירה"},{score:2,desc:"טובה, בוכה"}]},S={appearance:"צבע",pulse:"דופק",grimace:"רפלקסים",activity:"טונוס שרירים",respiration:"נשימה"},C=()=>{new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/fPgzEGJHfH9OaVQggUXrTp66lwFw1Fn937x3gdBCx8zPTblT4HGWu/8OihUw0PVarp97hxHQY6ldn50YYyBSV6yfbpmEIHFGG16u2tdBgNSKHf+8p7HwQtf873IBg=").play()},j=c.useCallback(s=>{[1,5,10,15,20].includes(s)&&(w(`${s} דקות חלפו - האם ברצונך לשמור את הציון?`),u(!0),C())},[]);c.useEffect(()=>{let s;return r&&(s=setInterval(()=>{x(a=>{const t=a+1;return j(Math.floor(t/60)),t})},1e3)),()=>clearInterval(s)},[r,j]);const p=()=>Object.values(i).reduce((s,a)=>s+a,0),k=s=>{const a=Math.floor(s/60),t=s%60;return`${a}:${t.toString().padStart(2,"0")}`},B=(s,a)=>{N(t=>({...t,[s]:a}))},g=()=>{const s={timeMinutes:Math.floor(m/60),total:p(),scores:{...i}};v(a=>[...a,s]),u(!1)},T=()=>{const s=n.map(a=>`זמן: ${a.timeMinutes} דקות, ציון כולל: ${a.total}/10`).join(`
`);navigator.clipboard.writeText(s)},M=()=>{const s=n.map(f=>`זמן: ${f.timeMinutes} דקות, ציון כולל: ${f.total}/10`).join(`
`),a=new Blob([s],{type:"text/plain"}),t=URL.createObjectURL(a),o=document.createElement("a");o.href=t,o.download="apgar-summary.txt",o.click(),URL.revokeObjectURL(t)};return e.jsxs(E,{className:"w-full max-w-2xl mx-auto bg-white",children:[e.jsxs(H,{className:"text-center",children:[e.jsx(F,{className:"text-2xl",children:"מחשבון ציון אפגר"}),e.jsxs("div",{className:"flex justify-center items-center gap-4 mt-4",children:[e.jsx("div",{className:"text-xl font-mono",children:k(m)}),e.jsx(l,{onClick:()=>h(!r),variant:"outline",size:"icon",children:r?e.jsx(Q,{className:"h-4 w-4"}):e.jsx(R,{className:"h-4 w-4"})}),e.jsx(l,{onClick:()=>{x(0),h(!1)},variant:"outline",size:"icon",children:e.jsx(O,{className:"h-4 w-4"})})]})]}),e.jsxs(G,{className:"space-y-6",children:[b&&e.jsxs(U,{className:"mb-4",children:[e.jsx($,{children:y}),e.jsx(l,{onClick:g,className:"mt-2",children:"שמור ציון"})]}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:Object.entries(A).map(([s,a])=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold",children:S[s]}),e.jsx("div",{className:"flex flex-col gap-2",children:a.map(t=>e.jsxs("button",{onClick:()=>B(s,t.score),className:`p-2 rounded text-sm ${i[s]===t.score?"bg-blue-500 text-white":"bg-gray-100 hover:bg-gray-200"}`,children:[t.desc,e.jsx("div",{className:"font-bold mt-1",children:t.score})]},t.score))})]},s))}),e.jsxs("div",{className:"mt-6 p-4 rounded bg-gray-50 text-center",children:[e.jsxs("div",{className:"text-xl font-bold",children:["ציון סופי: ",p(),"/10"]}),e.jsxs("div",{className:"flex justify-center gap-2 mt-4",children:[e.jsxs(l,{onClick:g,className:"flex gap-2",children:[e.jsx(I,{className:"h-4 w-4"}),"שמור ציון"]}),e.jsxs(l,{onClick:T,variant:"outline",className:"flex gap-2",children:[e.jsx(L,{className:"h-4 w-4"}),"העתק סיכום"]}),e.jsxs(l,{onClick:M,variant:"outline",className:"flex gap-2",children:[e.jsx(P,{className:"h-4 w-4"}),"הורד סיכום"]})]})]}),n.length>0&&e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"היסטוריית ציונים"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-right",children:"זמן"}),e.jsx("th",{className:"text-right",children:"ציון"})]})}),e.jsx("tbody",{children:n.map((s,a)=>e.jsxs("tr",{className:"border-t",children:[e.jsxs("td",{className:"py-2",children:[s.timeMinutes," דקות"]}),e.jsxs("td",{className:"py-2",children:[s.total,"/10"]})]},a))})]})})]})]})]})};export{V as default};