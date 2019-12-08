(this.webpackJsonptypescript_budget_app=this.webpackJsonptypescript_budget_app||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(17),r=a(2),d=a(8),o=a(6),u=a(14),i=function(e){return n.createElement("div",{className:"budget-total"},n.createElement("h2",null,n.createElement("span",{className:"budget-period"},"Your ",e.budgetPeriod)," ",n.createElement("span",{className:"budget-label"},"budget:")," ",n.createElement("span",{className:"budget-total ".concat(e.budgetAmount-e.budgetPaid>0?"budget-total-positive":"budget-total-negative")},e.budgetAmount-e.budgetPaid)," ",n.createElement("span",{className:"budget-currency"},e.budgetCurrency)))},s=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",id:"Layer_41","data-name":"Layer 41",viewBox:"0 0 50 50"},n.createElement("defs",null),n.createElement("defs",null),n.createElement("path",{d:"M44 10h-9V8.6A6.6 6.6 0 0028.4 2h-6.8A6.6 6.6 0 0015 8.6V10H6a2 2 0 000 4h3v27.4a6.6 6.6 0 006.6 6.6h18.8a6.6 6.6 0 006.6-6.6V14h3a2 2 0 000-4zM19 8.6A2.6 2.6 0 0121.6 6h6.8A2.6 2.6 0 0131 8.6V10H19V8.6zm18 32.8a2.6 2.6 0 01-2.6 2.6H15.6a2.6 2.6 0 01-2.6-2.6V14h24v27.4z",className:"cls-1"}),n.createElement("path",{d:"M20 18.5a2 2 0 00-2 2v18a2 2 0 004 0v-18a2 2 0 00-2-2zM30 18.5a2 2 0 00-2 2v18a2 2 0 104 0v-18a2 2 0 00-2-2z",className:"cls-1"}))},c=function(e){return n.createElement("div",{className:"budget-item"},n.createElement("div",{className:"budget-item-paid"},n.createElement("input",{className:"custom-checkbox-checkbox",type:"checkbox",id:e.budgetItem.id,checked:e.budgetItem.isPaid,onChange:function(t){return e.handleItemUpdate(t.target.value,e.budgetItem.id,"isPaid")}}),n.createElement("label",{className:"custom-checkbox-label",htmlFor:e.budgetItem.id})),n.createElement("div",{className:"budget-item-title"},n.createElement("input",{type:"text",value:e.budgetItem.title,onChange:function(t){return e.handleItemUpdate(t.target.value,e.budgetItem.id,"title")}})),n.createElement("div",{className:"budget-item-date"},n.createElement("input",{type:"date",value:e.budgetItem.date,onChange:function(t){return e.handleItemUpdate(t.target.value,e.budgetItem.id,"date")}})),n.createElement("div",{className:"budget-item-price"},n.createElement("input",{type:"number",value:e.budgetItem.price,onChange:function(t){return e.handleItemUpdate(t.target.value,e.budgetItem.id,"price")}})," ",n.createElement("span",null,e.budgetCurrency)),n.createElement("div",{className:"budget-item-remove"},n.createElement("button",{className:"btn btn-remove",onClick:function(){return e.handleItemRemove(e.budgetItem.id)}},n.createElement(s,null))))},m=function(e){return n.createElement("div",{className:"budget-list"},e.budgetItems.map((function(t){return n.createElement(c,{key:t.id,budgetCurrency:e.budgetCurrency,budgetItem:t,handleItemUpdate:e.handleItemUpdate,handleItemRemove:e.handleItemRemove})})))},g=a(18),p=a.n(g),b=function(e){var t=n.useState(""),a=Object(r.a)(t,2),l=a[0],d=a[1],o=n.useState(""),u=Object(r.a)(o,2),i=u[0],s=u[1],c=n.useState(0),m=Object(r.a)(c,2),g=m[0],b=m[1],E=n.useState(!1),w=Object(r.a)(E,2),S=w[0],h=w[1];return n.createElement("div",{className:"modal-wrapper"},n.createElement("div",{className:"modal-dialog"},n.createElement("button",{className:"btn btn-cross",onClick:function(){return e.handleShowAddItem(!e.showAddItem)}},"\u2a2f"),n.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleAddItem({date:l,title:i,price:g,isPaid:S,id:p.a.generate()}),d(""),s(""),b(0),h(!1),e.handleShowAddItem(!e.showAddItem)}},n.createElement("fieldset",null,n.createElement("label",{htmlFor:"date"},"Date of payment:"),n.createElement("input",{type:"date",id:"date",value:l,onChange:function(e){return d(e.target.value)},required:!0})),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"title"},"Item name:"),n.createElement("input",{type:"text",id:"title",value:i,onChange:function(e){return s(e.target.value)},required:!0})),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"price"},"Item price:"),n.createElement("input",{type:"number",id:"price",value:g,onChange:function(e){return b(parseInt(e.target.value,10))},min:"0",step:"1",required:!0})),n.createElement("fieldset",null,n.createElement("input",{className:"custom-checkbox-checkbox",type:"checkbox",id:"isPaid",checked:S,onChange:function(){return h(!S)}}),n.createElement("label",{className:"custom-checkbox-label",htmlFor:"isPaid"}," Item is already paid")),n.createElement("fieldset",null,n.createElement("input",{className:"btn btn-add",type:"submit",value:"+ Add item"})))))},E=function(){return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"21",viewBox:"0 0 896 1024"},n.createElement("defs",null),n.createElement("path",{d:"M447.938 350C358.531 350 286 422.531 286 512c0 89.375 72.531 162.062 161.938 162.062 89.438 0 161.438-72.688 161.438-162.062-.001-89.469-72.001-162-161.438-162zm324.687 255.062l-29.188 70.312 52.062 102.25 6.875 13.5-72.188 72.188-118.436-55.937-70.312 28.875L505.75 945.5l-4.562 14.5H399.156L355 836.688l-70.312-29-102.404 51.938-13.5 6.75-72.156-72.125 55.875-118.5-28.969-70.25-109.065-35.626L0 565.188V463.219L123.406 419l28.969-70.188-51.906-102.469-6.844-13.438 72.062-72.062 118.594 55.844 70.219-29.031 35.656-109.188L394.75 64h102l44.188 123.469 70.125 29.031L713.5 164.531l13.625-6.844 72.125 72.062-55.875 118.406L772.25 418.5l109.375 35.656L896 458.75v101.938l-123.375 44.374z"}))},w=function(e){var t=n.useState(0),a=Object(r.a)(t,2),l=a[0],o=a[1],s=n.useState(!1),c=Object(r.a)(s,2),g=c[0],p=c[1];function w(t,a){if("local"===e.storageMethod){if("update"===t)window.localStorage.setItem("budget-app",JSON.stringify(a));else if(window&&window.localStorage&&window.localStorage.getItem("budget-app")){var n=window.localStorage.getItem("budget-app");n&&e.setBudgetItems(JSON.parse(n))}}else if("session"===e.storageMethod)if("update"===t)window.sessionStorage.setItem("budget-app",JSON.stringify(a));else if(window&&window.sessionStorage&&window.sessionStorage.getItem("budget-app")){var l=window.sessionStorage.getItem("budget-app");l&&e.setBudgetItems(JSON.parse(l))}}return n.useEffect((function(){var t=0;e.budgetItems.forEach((function(e){e.isPaid&&(t+=e.price)})),o(t)}),[e.budgetItems]),n.createElement("div",null,n.createElement("header",null,n.createElement(i,{budgetPeriod:e.budgetPeriod,budgetCurrency:e.budgetCurrency,budgetAmount:e.budgetAmount,budgetPaid:l}),n.createElement(d.b,{className:"btn btn-settings",to:"/settings"},n.createElement(E,null))),n.createElement(m,{budgetCurrency:e.budgetCurrency,budgetItems:e.budgetItems,handleItemUpdate:function(t,a,n){var l=Object(u.a)(e.budgetItems);switch(n){case"isPaid":l.find((function(e){return e.id===a})).isPaid=!l.find((function(e){return e.id===a})).isPaid;break;case"price":l.find((function(e){return e.id===a})).price=parseInt(t,10);break;case"title":l.find((function(e){return e.id===a})).title=t}e.setBudgetItems(l),w("update",l)},handleItemRemove:function(t){var a=e.budgetItems.filter((function(e){return e.id!==t}));e.setBudgetItems(a),w("update",a)}}),g&&n.createElement(b,{showAddItem:g,handleShowAddItem:p,handleAddItem:function(t){var a=Object(u.a)(e.budgetItems);a.push({date:t.date,isPaid:t.isPaid,price:t.price,title:t.title,id:t.id}),e.setBudgetItems(a),w("update",a)}}),n.createElement("button",{className:"btn btn-add",onClick:function(){return p(!g)}},"+ ",n.createElement("span",{className:"btn-label"},"Add item")))},S=["AED","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","CHE","CHF","CHW","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","USN","UYI","UYU","UZS","VEF","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","XSU","XUA","YER","ZAR","ZMW","ZWL","AFN"],h=function(e){return n.createElement("div",null,n.createElement("header",null,n.createElement("h2",null,"Settings"),n.createElement(d.b,{className:"btn btn-cross btn-unstyled",to:"/"},"\u2a2f")),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"period"},"Budget period:"),n.createElement("select",{onChange:function(t){return e.setBudgetPeriod(t.target.value)},name:"period",id:"period",defaultValue:e.budgetPeriod},n.createElement("option",{value:"daily"},"Daily"),n.createElement("option",{value:"monthly"},"Monthly"),n.createElement("option",{value:"yearly"},"Yearly"))),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"currency"},"Budget currency:"),n.createElement("input",{onChange:function(t){return e.setBudgetCurrency(t.target.value)},name:"currency",id:"currency",defaultValue:e.budgetCurrency,list:"currencyCodes"}),n.createElement("datalist",{id:"currencyCodes"},S.map((function(e){return n.createElement("option",{key:e,value:e})})))),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"budget"},"Budget size:"),n.createElement("input",{onChange:function(t){return e.setBudgetAmount(parseInt(t.target.value,10))},type:"number",name:"budget",id:"budget",defaultValue:e.budgetAmount})),n.createElement("fieldset",null,n.createElement("label",{htmlFor:"storage"},"Preferred storage method:"),n.createElement("select",{onChange:function(t){return e.setStorageMethod(t.target.value)},name:"storage",id:"storage",defaultValue:e.storageMethod},n.createElement("option",{value:"none"},"None"),n.createElement("option",{value:"local"},"Local storage"),n.createElement("option",{value:"session"},"Session storage"))),n.createElement("p",null,n.createElement("small",null,n.createElement("em",null,"* All changes are saved automatically."))))},f=function(){var e=n.useState([]),t=Object(r.a)(e,2),a=t[0],l=t[1],u=n.useState("monthly"),i=Object(r.a)(u,2),s=i[0],c=i[1],m=n.useState("USD"),g=Object(r.a)(m,2),p=g[0],b=g[1],E=n.useState(2500),S=Object(r.a)(E,2),f=S[0],I=S[1],v=n.useState("none"),N=Object(r.a)(v,2),y=N[0],B=N[1];return n.useEffect((function(){if(window&&window.sessionStorage&&null!==window.sessionStorage.getItem("budget-app-settings")&&window.sessionStorage.getItem("budget-app-settings").length>0){var e=window.sessionStorage.getItem("budget-app-settings");if(e){var t=JSON.parse(e),a=t.oldBudgetPeriod,n=t.oldBudgetCurrency,r=t.oldBudgetAmount,d=t.oldStorageMethod;c(a),b(n),I(r),B(d)}}else if(window&&window.localStorage&&null!==window.localStorage.getItem("budget-app-settings")&&window.localStorage.getItem("budget-app-settings").length>0){var o=window.localStorage.getItem("budget-app-settings");if(o){var u=JSON.parse(o),i=u.oldBudgetPeriod,s=u.oldBudgetCurrency,m=u.oldBudgetAmount,g=u.oldStorageMethod;c(i),b(s),I(m),B(g)}}if(window&&window.sessionStorage&&null!==window.sessionStorage.getItem("budget-app")&&window.sessionStorage.getItem("budget-app").length>0){var p=window.sessionStorage.getItem("budget-app");if(p){var E=JSON.parse(p).oldItems;l(E)}}else if(window&&window.localStorage&&null!==window.localStorage.getItem("budget-app")&&window.localStorage.getItem("budget-app").length>0){var w=window.localStorage.getItem("budget-app");if(w){var S=JSON.parse(w).oldItems;l(S)}}}),[]),n.useEffect((function(){"session"===y?(window.sessionStorage.setItem("budget-app",JSON.stringify({oldItems:a})),window.localStorage.removeItem("budget-app")):"local"===y?(window.localStorage.setItem("budget-app",JSON.stringify({oldItems:a})),window.sessionStorage.removeItem("budget-app")):"none"===y&&(window.localStorage.removeItem("budget-app"),window.sessionStorage.removeItem("budget-app"))}),[a,y]),n.useEffect((function(){"session"===y?(window.sessionStorage.setItem("budget-app-settings",JSON.stringify({oldBudgetPeriod:s,oldBudgetCurrency:p,oldBudgetAmount:f,oldStorageMethod:y})),window.localStorage.removeItem("budget-app-settings")):"local"===y?(window.localStorage.setItem("budget-app-settings",JSON.stringify({oldBudgetPeriod:s,oldBudgetCurrency:p,oldBudgetAmount:f,oldStorageMethod:y})),window.sessionStorage.removeItem("budget-app-settings")):"none"===y&&(window.localStorage.removeItem("budget-app-settings"),window.sessionStorage.removeItem("budget-app-settings"))}),[s,p,f,y]),n.createElement("div",{className:"app"},n.createElement(d.a,null,n.createElement(o.c,null,n.createElement(o.a,{path:"/",exact:!0},n.createElement(w,{budgetItems:a,setBudgetItems:l,budgetAmount:f,budgetPeriod:s,budgetCurrency:p,storageMethod:y})),n.createElement(o.a,{path:"/settings"},n.createElement(h,{budgetPeriod:s,budgetCurrency:p,budgetAmount:f,storageMethod:y,setBudgetPeriod:c,setBudgetCurrency:b,setBudgetAmount:I,setStorageMethod:B})))))},I=(a(39),document.getElementById("root"));Object(l.render)(n.createElement(f,null),I)}},[[21,1,2]]]);
//# sourceMappingURL=main.4769b162.chunk.js.map