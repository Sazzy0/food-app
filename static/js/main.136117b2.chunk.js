(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2_Xjb",control:"Checkout_control__25tsE",actions:"Checkout_actions__2IDeq",submit:"Checkout_submit__2ZeJy",invalid:"Checkout_invalid__3wqZT"}},,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1vJu9",total:"Cart_total__plZWE",actions:"Cart_actions__1LmHg","button--alt":"Cart_button--alt__89rlC",button:"Cart_button___fU3S"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3vlbb",summary:"CartItem_summary__f-J_4",price:"CartItem_price__1bdBc",amount:"CartItem_amount__1ww7w",actions:"CartItem_actions__3YByy"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2buGA",icon:"HeaderCartButton_icon__3ahvq",badge:"HeaderCartButton_badge__2oOR3",bump:"HeaderCartButton_bump__2MN9s"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1Eviz",modal:"Modal_modal__2-E1s","slide-down":"Modal_slide-down__Hjr9Y"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3XQBT","meals-appear":"AvailableMeals_meals-appear__37lNU",MealIsLoading:"AvailableMeals_MealIsLoading__1bpKp",MealsError:"AvailableMeals_MealsError__1Edyp"}},function(e,t,n){e.exports={meal:"MealItem_meal__2ib78",description:"MealItem_description__27hWt",price:"MealItem_price__phD2x"}},function(e,t,n){e.exports={header:"Header_header__1vP5L","main-image":"Header_main-image__1u1i9"}},,,,function(e,t,n){e.exports={card:"Card_card__3dwo0"}},function(e,t,n){e.exports={form:"MealItemForm_form__19WCP"}},function(e,t,n){e.exports={input:"Input_input__1nKPz"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2NI8m"}},,,,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(20),a=n.n(c),r=(n(31),n(2)),i=n(13),s=n(4),o=n(5),l=n.n(o),u=n(8),d=n(14),j=n.n(d),m=n(11),b=n.n(m),O=n(0),p=function(e){return Object(O.jsx)("div",{onClick:e.onClose,className:j.a.backdrop})},f=function(e){return Object(O.jsx)("div",{className:j.a.modal,children:Object(O.jsx)("div",{className:j.a.content,children:e.children})})},x=document.getElementById("overlays"),h=function(e){return Object(O.jsxs)(u.Fragment,{children:[b.a.createPortal(Object(O.jsx)(p,{onClose:e.onClose}),x),b.a.createPortal(Object(O.jsx)(f,{children:e.children}),x)]})},_=n(6),v=n.n(_),C=n(1),y=n.n(C),N=y.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),g=n(7),A=n.n(g),I=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:A.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:A.a.summary,children:[Object(O.jsx)("span",{className:A.a.price,children:t}),Object(O.jsxs)("span",{className:A.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:A.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},w=n(3),k=n.n(w),M=function(e){return""===e.trim()},S=function(e){var t=Object(C.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(C.useRef)(),s=Object(C.useRef)(),o=Object(C.useRef)(),l=Object(C.useRef)(),u="".concat(k.a.control," ").concat(c.name?"":k.a.invalid),d="".concat(k.a.control," ").concat(c.street?"":k.a.invalid),j="".concat(k.a.control," ").concat(c.city?"":k.a.invalid),m="".concat(k.a.control," ").concat(c.postalCode?"":k.a.invalid);return Object(O.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=s.current.value,r=o.current.value,u=l.current.value,d=!M(n),j=!M(c),m=!M(u),b=r.trim().length>=4;a({name:d,street:j,city:m,postalCode:b}),m&&d&&b&&j&&e.onConfirm({name:n,street:c,city:u,postalCode:r})},children:[Object(O.jsxs)("div",{className:u,children:[Object(O.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(O.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(O.jsx)("p",{children:"Please enter a valid name"})]}),Object(O.jsxs)("div",{className:d,children:[Object(O.jsx)("label",{htmlFor:"street",children:"Street"}),Object(O.jsx)("input",{ref:s,type:"text",id:"street"}),!c.street&&Object(O.jsx)("p",{children:"Please enter a valid street"})]}),Object(O.jsxs)("div",{className:m,children:[Object(O.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(O.jsx)("input",{type:"text",id:"postal",ref:o}),!c.postalCode&&Object(O.jsx)("p",{children:"Please enter a valid postal code"})]}),Object(O.jsxs)("div",{className:j,children:[Object(O.jsx)("label",{htmlFor:"city",children:"City"}),Object(O.jsx)("input",{ref:l,type:"text",id:"city"}),!c.city&&Object(O.jsx)("p",{children:"Please enter a valid city"})]}),Object(O.jsxs)("div",{className:k.a.actions,children:[Object(O.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(O.jsx)("button",{className:k.a.submit,children:"Confirm"})]})]})},E=function(e){var t=Object(C.useContext)(N),n=Object(C.useState)(!1),c=Object(r.a)(n,2),a=c[0],o=c[1],u=Object(C.useState)(!1),d=Object(r.a)(u,2),j=d[0],m=d[1],b=Object(C.useState)(!1),p=Object(r.a)(b,2),f=p[0],x=p[1],_="$".concat(t.totalAmount.toFixed(2)),y=t.items.length>0,g=function(e){t.removeItem(e)},A=function(e){t.addItem(Object(s.a)(Object(s.a)({},e),{},{amount:1}))},w=function(){var e=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://food-app-3ee86-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:n,orderedItems:t.items})});case 3:e.sent,m(!1),x(!0),t.clearCart();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(O.jsx)("ul",{className:v.a["cart-items"],children:t.items.map((function(e){return Object(O.jsx)(I,{name:e.name,amount:e.amount,price:e.price,onRemove:g.bind(null,e.id),onAdd:A.bind(null,e)},e.id)}))}),M=Object(O.jsxs)("div",{className:v.a.actions,children:[Object(O.jsx)("button",{className:v.a["button--alt"],onClick:e.onClose,children:"Close"}),y&&Object(O.jsx)("button",{className:v.a.button,onClick:function(){o(!0)},children:"Order"})]}),E=Object(O.jsxs)(C.Fragment,{children:[k,Object(O.jsxs)("div",{className:v.a.total,children:[Object(O.jsx)("span",{children:"Total Amount"}),Object(O.jsx)("span",{children:_})]}),a&&Object(O.jsx)(S,{onConfirm:w,onCancel:e.onClose}),!a&&M]}),F=Object(O.jsx)("p",{children:"Sending order data..."}),R=Object(O.jsx)("p",{children:"Successfully sent the order!"});return Object(O.jsxs)(h,{onClose:e.onClose,children:[!j&&!f&&E,j&&F,!j&&f&&R]})},F=n.p+"static/media/foodimg.8fcdfd9b.jpg",R=n(17),H=n.n(R),P=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},B=n(10),D=n.n(B),T=function(e){var t=Object(C.useContext)(N),n=Object(C.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1],s=t.items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(D.a.button," ").concat(a?D.a.bump:"");return Object(C.useEffect)((function(){if(0!==s.length){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(O.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(O.jsx)("span",{className:D.a.icon,children:Object(O.jsx)(P,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:D.a.badge,children:o})]})},L=function(e){return Object(O.jsxs)(C.Fragment,{children:[Object(O.jsxs)("header",{className:H.a.header,children:[Object(O.jsx)("h1",{children:"Let's Eat"}),Object(O.jsx)(T,{onClick:e.onShowCart})]}),Object(O.jsx)("div",{className:H.a["main-image"],children:Object(O.jsx)("img",{src:F,alt:"A table full of food"})})]})},J=n(15),z=n.n(J),Y=n(21),q=n.n(Y),V=function(e){return Object(O.jsx)("div",{className:q.a.card,children:e.children})},W=n(16),Z=n.n(W),$=n(22),K=n.n($),U=n(23),X=n.n(U),G=y.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:X.a.input,children:[Object(O.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(s.a)({ref:t},e.input))]})})),Q=function(e){var t=Object(C.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],i=Object(C.useRef)();return Object(O.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(O.jsx)(G,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(O.jsx)("button",{children:"+ Add"}),!c&&Object(O.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},ee=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(C.useContext)(N);return Object(O.jsxs)("li",{className:Z.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:Z.a.description,children:e.description}),Object(O.jsx)("div",{className:Z.a.price,children:t})]}),Object(O.jsx)("div",{children:Object(O.jsx)(Q,{onAddToCart:function(t){n.addItem({id:e.id,name:e.name,amount:t,price:e.price})},id:e.id})})]})},te=function(){var e=Object(C.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(C.useState)(!0),s=Object(r.a)(a,2),o=s[0],u=s[1],d=Object(C.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(C.useEffect)((function(){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-app-3ee86-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),o)return Object(O.jsx)("section",{className:z.a.MealIsLoading,children:Object(O.jsx)("p",{children:"Loading..."})});if(m)return Object(O.jsx)("section",{className:z.a.MealsError,children:Object(O.jsx)("p",{children:m})});var p=n.map((function(e){return Object(O.jsx)(ee,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(O.jsx)("section",{className:z.a.meals,children:Object(O.jsx)(V,{children:Object(O.jsx)("ul",{children:p})})})},ne=n(24),ce=n.n(ne),ae=function(){return Object(O.jsxs)("section",{className:ce.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},re=function(){return Object(O.jsxs)(u.Fragment,{children:[Object(O.jsx)(ae,{}),Object(O.jsx)(te,{})]})},ie=n(18),se={items:[],totalAmount:0},oe=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(s.a)(Object(s.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ie.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var o,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],d=e.totalAmount-u.price;if(1===u.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(s.a)(Object(s.a)({},u),{},{amount:u.amount-1});(o=Object(ie.a)(e.items))[l]=j}return{items:o,totalAmount:d}}return t.type,se},le=function(e){var t=Object(C.useReducer)(oe,se),n=Object(r.a)(t,2),c=n[0],a=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(O.jsx)(N.Provider,{value:i,children:e.children})};var ue=function(){var e=Object(C.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)(le,{children:[n&&Object(O.jsx)(E,{onClose:function(){c(!1)}}),Object(O.jsx)(L,{onShowCart:function(){c(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(re,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(ue,{}))}],[[34,1,2]]]);
//# sourceMappingURL=main.136117b2.chunk.js.map