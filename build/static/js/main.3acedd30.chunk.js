(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{153:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(36),i=n.n(c),a=n(34),s=n.n(a),o=n(18),u=n.n(o),d=n(29),j=n(33),l=n(4),b=(n(147),n(19)),f=n(15),h="INVENTORY/CHANGE_MONEY",O="INVENTORY/CHANGE_HOUSE",p="INVENTORY/CHANGE_PEOPLE",v="INVENTORY/CHANGE_ROKET",x="INVENTORY/CHANGE_FOOD",g="INVENTORY/SET_INVENTORY",m={money:0,house:0,people:0,roket:0,food:0},y=function(e){return{type:h,change:e}},k=function(e){return{type:O,change:e}},I=function(e){return{type:p,change:e}},E=function(e){return{type:v,change:e}},T=function(e){return{type:x,change:e}},_=function(e,t){var n="";switch(e){case h:n=y;break;case O:n=k;break;case p:n=I;break;case v:n=E;break;case x:n=T}return function(e){e(n(t))}},w=function(e){return{type:g,setInventory:e}},N="USERS/SET_FRIENDS",S="USERS/SET_USER",A="USERS/SET_ACTIVE_USER_PAGE",P={user:null,friends:null,activeUserPage:1},C=function(e){return{type:A,id:e}},U=n(178),R=n(3),V=Object(b.b)((function(e){return{money:e.myInventory.money,user:e.usersInfo.user}}))((function(e){var t=e.go,n=e.backButton,r=e.headerName,c=e.user,i=e.money;return Object(R.jsxs)(R.Fragment,{children:[n?Object(R.jsx)(l.o,{left:Object(R.jsx)(l.p,{onClick:t,"data-to":n}),children:r}):Object(R.jsx)(l.o,{children:r}),c&&Object(R.jsx)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Your profile"}),children:Object(R.jsx)(l.g,{before:c.photo_200?Object(R.jsx)(l.c,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:"",after:Object(R.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"black"},children:[i,Object(R.jsx)(U.a,{width:30,height:30})]}),children:"".concat(c.first_name," ").concat(c.last_name)})})]})})),B=n(32),z="startTimer",D="timerTime",F=function(e,t){Ve.database().ref(String(e)).on("value",(function(e){var n=e.val();t(n.inventory)}))},Y=function(e,t){Ve.database().ref(String(e)).child("inventory").update(t)},H=function(e,t,n,r){Ve.database().ref(String(e)).child("time").child("timer").child(t).update(Object(B.a)({},n,r))},M=function(e){return Ve.database().ref(String(e)).child("time").child("timer").get()},G=function(){return Ve.database().ref("/.info/serverTimeOffset")},K=function(e){return Ve.database().ref(String(e)).child("inventory").get()},W="APP/SET_ACTIVE_PANEL",L={activePanel:"base"},q=function(e){return function(t){var n;t((n=e.currentTarget.dataset.to,{type:W,active:n}))}},J=Object(b.b)((function(e){return{}}),{go:q})((function(e){var t=e.id,n=e.go;return Object(R.jsxs)(l.n,{id:t,children:[Object(R.jsx)(V,{headerName:"Home"}),Object(R.jsx)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Navigation"}),children:Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",onClick:n,"data-to":"base",children:"BASE"})})})]})})),Q=(n.p,n(153),Object(b.b)((function(e){return{}}),{go:q})((function(e){var t=e.id,n=e.go;return Object(R.jsxs)(l.n,{id:t,children:[Object(R.jsx)(V,{go:n,headerName:"Base",backButton:"home"}),Object(R.jsxs)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Navigation"}),children:[Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:n,"data-to":"inventory",children:"Inventory"})}),Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:n,"data-to":"friends",children:"Friends"})}),Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:n,"data-to":"actionNavigator",children:"Action"})})]})]})}))),X=n(179),Z=n(180),$=n(181),ee=n(182),te=30,ne=30,re={money:U.a,people:X.a,house:Z.a,roket:$.a,food:ee.a},ce=Object(b.b)((function(e){return{init:e.auth.init,inventory:e.myInventory}}),{go:q})((function(e){var t=e.id,n=e.go,r=e.inventory,c=Object.keys(r).map((function(e){var t=re[e];return Object(R.jsx)(l.k,{onClick:n,"data-to":e+"Desc",children:Object(R.jsxs)(l.s,{children:[Object(R.jsx)(l.l,{mode:"secondary",children:e}),Object(R.jsxs)(l.i,{children:[Object(R.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[r[e],Object(R.jsx)(t,{width:te,height:ne})]}),"  "]})]})},e)}));return Object(R.jsxs)(l.n,{id:t,children:[Object(R.jsx)(V,{go:n,headerName:"Inventory",backButton:"base"}),c]})})),ie=Object(b.b)((function(e){return{friends:e.usersInfo.friends}}),{setActiveUserPage:C,go:q})((function(e){var t=e.id,n=e.go,r=e.friends,c=e.setActiveUserPage,i=r.map((function(e){return Object(R.jsx)(l.q,{onClick:function(t){return function(e,t){c(t),n(e)}(t,e.id)},"data-to":"pageView",before:Object(R.jsx)(l.c,{size:48,src:e.photo_200_orig}),caption:"offline",after:Object(R.jsx)("div",{children:Object(R.jsxs)("span",{style:{display:"flex",alignItems:"center",color:"black"},children:[700,Object(R.jsx)(U.a,{width:30,height:30})]})}),children:e.first_name+" "+e.last_name},e.id)}));return Object(R.jsxs)(l.n,{id:t,children:[Object(R.jsx)(V,{go:n,headerName:"Friends",backButton:"base"}),Object(R.jsx)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Your Friends"}),children:i})]})})),ae=(n(154),Object(b.b)((function(e){return{}}),{go:q,changeInventory:_})((function(e){var t=e.changeInventory,n=e.go,r=e.id,c=function(e){t(h,e)};return Object(R.jsxs)(l.n,{id:r,children:[Object(R.jsx)(V,{go:n,headerName:"Action Navigator",backButton:"base"}),Object(R.jsxs)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Your actions"}),children:[Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:function(){return c(-10)},children:"Building"})}),Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:function(e){t(v,-1),n(e)},"data-to":"attack",children:"Attack"})}),Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{stretched:!0,size:"l",onClick:function(){return c(-10)},children:"Defense"})})]})]})}))),se=Object(b.b)((function(e){return{friends:e.usersInfo.friends}}),{setActiveUserPage:C})((function(e){var t=e.friends,n=e.go,r=e.setActiveUserPage,c=t.map((function(e){return Object(R.jsx)(l.q,{onClick:function(t){return function(e,t){r(t),n(e)}(t,e.id)},"data-to":"pageView",before:Object(R.jsx)(l.c,{size:48,src:e.photo_200_orig}),caption:"info",after:"700 \u20bd",children:e.first_name+" "+e.last_name},e.id)}));return Object(R.jsx)(l.k,{children:c})})),oe=function(e){e.friends;return Object(R.jsx)(l.k,{})},ue=Object(b.b)((function(e){return{}}),{go:q})((function(e){var t=e.go,n=e.id,c=e.friends,i=Object(r.useState)("friends"),a=Object(j.a)(i,2),s=a[0],o=a[1];return Object(R.jsxs)(l.n,{id:n,children:[Object(R.jsx)(V,{go:t,headerName:"Attack",backButton:"actionNavigator"}),Object(R.jsxs)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Attack"}),children:[Object(R.jsxs)(l.u,{children:[Object(R.jsx)(l.v,{selected:"friends"===s,onClick:function(){o("friends")},children:"friends"}),Object(R.jsx)(l.v,{selected:"other"===s,onClick:function(){o("other")},children:"other"})]}),"friends"===s&&Object(R.jsx)(se,{go:t,friends:c}),"other"===s&&Object(R.jsx)(oe,{})]})]})})),de=function(e){return function(t){var n=t.id,r=t.go;return Object(R.jsxs)(l.n,{id:n,children:[Object(R.jsx)(V,{go:r,headerName:e.what,backButton:"inventory"}),Object(R.jsx)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"decription"}),children:Object(R.jsx)(l.i,{children:e.desc})})]})}},je="AUTH/SET_INIT_SUCCESS",le="AUTH/SET_ACCESS_TOKEN",be={money:1e3,house:2,people:5,roket:5,food:100},fe={init:!1,accessToken:null};function he(){return(he=Object(d.a)(u.a.mark((function e(t,n){var r,c,i,a,s,o,j,l,b,f,h;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.user,c=t.name,i=t.time,a=t.repeat,t.consoleView,s=i,o=!0,j=null,l=0,(b=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G().on("value",(function(e){var t=e.val()||0;j=Date.now()+t}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())(),f=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i,e.next=3,b();case 3:H(r.id,c,z,j),H(r.id,c,D,i),h();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(),s=i-l,t=setInterval((function(){(s-=1e3)<=0&&(n(),a?(l=0,clearInterval(t),f()):clearInterval(t))}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o){e.next=11;break}return e.abrupt("return");case 11:return o=!1,e.next=14,M(r.id).then((function(e){var t=e.val();if(t&&t[c])if(t[c].startTimer+t[c].timerTime<=j){if(n(),l=-(t[c].startTimer+t[c].timerTime-j),!a)return;for(;l>i;)n(),l-=i;f()}else l=i-(t[c].startTimer+t[c].timerTime-j),h();else f()}));case 14:return e.abrupt("return");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=function(e,t){return he.apply(this,arguments)},pe=Object(b.b)((function(e){return{roket:e.myInventory.roket,activeUserPage:e.usersInfo.activeUserPage,friends:e.usersInfo.friends}}),{setActiveUserPage:C,changeInventory:_})((function(e){var t=e.activeUserPage,n=e.roket,c=e.inventoryProfile,i=e.changeInventory,a=Object(r.useState)(1),s=Object(j.a)(a,2),o=s[0],u=s[1],d=function(e){u(e>n?n:Number(e))};return Object(R.jsxs)(l.k,{children:[Object(R.jsxs)(l.i,{children:[Object(R.jsx)(l.j,{children:Object(R.jsx)(l.m,{value:o,min:"0",max:n,type:"number",onChange:function(e){return d(e.target.value)}})}),Object(R.jsx)(l.j,{children:Object(R.jsx)(l.t,{min:0,step:1,max:n,value:o,onChange:function(e){return d(e)}})})]}),Object(R.jsx)(l.i,{children:Object(R.jsx)(l.d,{onClick:function(){!function(e){var t=e.countRoket,n=e.UserId,r=e.inventoryTarget;if((0,e.changeInventory)(v,-t),!(t<=0)){for(;r.roket>0&&t>0;)r.roket-=1,t-=1;for(;t>0;)r.house-=1,r.people-=4,t-=1;console.log(t,r),Y(n,r)}}({countRoket:o,UserId:t,inventoryTarget:c,changeInventory:i})},mode:"commerce",size:"l",after:Object(R.jsx)(l.h,{children:o}),children:"Attack"})})]})})),ve=Object(b.b)((function(e){return{activeUserPage:e.usersInfo.activeUserPage,friends:e.usersInfo.friends}}))((function(e){var t=e.go,n=e.backButton,r=e.headerName,c=e.money,i=e.friends,a=e.activeUserPage,s=i.find((function(e){return e.id===a}));return Object(R.jsxs)(R.Fragment,{children:[n?Object(R.jsx)(l.o,{left:Object(R.jsx)(l.p,{onClick:t,"data-to":n}),children:r}):Object(R.jsx)(l.o,{children:r}),s&&Object(R.jsx)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Profile"}),children:Object(R.jsx)(l.g,{before:s.photo_200_orig?Object(R.jsx)(l.c,{src:s.photo_200_orig}):null,description:s.city&&s.city.title?s.city.title:"",after:Object(R.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"black"},children:[c,Object(R.jsx)(U.a,{width:30,height:30})]}),children:"".concat(s.first_name," ").concat(s.last_name)})})]})})),xe=n.p+"static/media/moneyBackground.7e4765dd.jpg",ge=n.p+"static/media/workerBackground.fb289e7f.jpg",me=n(62),ye=n.n(me),ke=function(e){e.id,e.go;var t=e.inventoryProfile,n=30,r=30,c={money:U.a,people:X.a,house:Z.a,roket:$.a,food:ee.a},i={money:xe,people:ge,house:null,roket:null,food:null},a=Object.keys(t).map((function(e){var a=c[e];return Object(R.jsxs)(l.e,{className:ye.a.card,children:[i[e]?Object(R.jsx)("img",{src:i[e],alt:"logo"}):null,Object(R.jsxs)("span",{children:[t[e],Object(R.jsx)(a,{width:n,height:r})]})]},e)}));return Object(R.jsx)(l.k,{children:Object(R.jsx)(l.f,{size:"s",children:a})})},Ie=Object(b.b)((function(e){return{activeUserPage:e.usersInfo.activeUserPage,friends:e.usersInfo.friends}}),{go:q})((function(e){var t=e.id,n=e.go,c=e.activeUserPage,i=Object(r.useState)("check"),a=Object(j.a)(i,2),s=a[0],o=a[1],b=Object(r.useState)(null),f=Object(j.a)(b,2),h=f[0],O=f[1];return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(c).then((function(e){var t=e.val();null==t?(Y(c,be),O(be)):O(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(R.jsx)(l.n,{id:t,children:h?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(ve,{go:n,headerName:"Profile",backButton:"base",money:h.money}),Object(R.jsxs)(l.k,{header:Object(R.jsx)(l.l,{mode:"secondary",children:"Action"}),children:[Object(R.jsxs)(l.u,{children:[Object(R.jsx)(l.v,{selected:"check"===s,onClick:function(){o("check")},children:"check"}),Object(R.jsx)(l.v,{selected:"attack"===s,onClick:function(){o("attack")},children:"attack"})]}),"check"===s&&Object(R.jsx)(ke,{inventoryProfile:h,go:n}),"attack"===s&&Object(R.jsx)(pe,{inventoryProfile:h})]})]}):Object(R.jsx)(l.r,{size:"large"})})})),Ee=7903112,Te=Object(b.b)((function(e){return{inventory:e.myInventory,user:e.usersInfo.user,init:e.auth.init,activePanel:e.appPage.activePanel}}),{setDbInventory:function(e,t){return function(){var n=Object(d.a)(u.a.mark((function n(r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y(e,(c={},Object(B.a)(c,"money",t.money),Object(B.a)(c,"roket",t.roket),Object(B.a)(c,"house",t.house),Object(B.a)(c,"people",t.people),Object(B.a)(c,"food",t.food),c));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},changeInventory:_,setFriends:function(e){return{type:N,friends:e}},setUser:function(e){return{type:S,user:e}},setInitSuccess:function(){return{type:je}},getDbInventory:function(e){return function(){var t=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(e).then((function(e){var t=e.val();t?(Object.keys(be).forEach((function(e){e in t==0&&(t[e]=be[e])})),n(w(t))):n(w(be))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setAccessToken:function(e){return{type:le,token:e}},go:q,setInventory:w})((function(e){var t=Object(r.useState)(null),n=Object(j.a)(t,2),c=(n[0],n[1]),i=Object(r.useState)(Object(R.jsx)(l.r,{size:"large"})),a=Object(j.a)(i,2),o=a[0],b=a[1];Object(r.useEffect)((function(){function t(){return(t=Object(d.a)(u.a.mark((function t(){var n,r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return n=t.sent,e.setUser(n),t.next=6,s.a.send("VKWebAppGetAuthToken",{app_id:Ee,scope:"friends,status"});case 6:return r=t.sent,e.setAccessToken(r.access_token),t.next=10,s.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{fields:"nickname,photo_200_orig",v:"5.131",access_token:r.access_token}});case 10:return c=t.sent,e.setFriends(c.response.items),t.next=14,e.getDbInventory(n.id);case 14:e.setInitSuccess(),b(null);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,r=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=r.scheme?r.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){t.apply(this,arguments)}()}),[]),Object(r.useEffect)((function(){function t(){return(t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(Oe({name:"increaseMoney",time:2e4,user:e.user,repeat:!0},(function(){e.changeInventory(h,10)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.init&&(!function(){t.apply(this,arguments)}(),F(e.user.id,e.setInventory))}),[e.init]),Object(r.useEffect)((function(){e.init&&e.setDbInventory(e.user.id,e.inventory)}));var f={MoneyDesc:de({what:"Money",desc:"\u041f\u043b\u043e\u0442\u0438 \u043d\u043e\u043b\u043e\u0433\u0438"}),PeopleDesc:de({what:"People",desc:"\u0427\u0438\u0441\u0442\u043e \u0440\u0430\u0431\u044b (\u043d\u0435 \u0431\u0430\u043d\u044c \u0422\u0412\u0418\u0427)"}),HouseDesc:de({what:"House",desc:"\u041d\u0443\u0436\u043d\u043e \u0436\u0435 \u0433\u0434\u0435-\u0442\u043e \u0436\u0438\u0442\u044c"}),RoketDesc:de({what:"Roket",desc:"\u0411\u0410\u041c \u0411\u0423\u0425 \u0411\u0423\u0414\u0423\u041c"}),FoodDesc:de({what:"Food",desc:"\u0425\u0430\u0432\u0430\u0442\u044c \u0432\u043a\u0443\u0441\u043d\u043e"})},O=Object.keys(f).map((function(t){var n=f[t],r=String(t),c=r.charAt(0).toLowerCase()+r.slice(1);return Object(R.jsx)(n,{id:c,go:e.go},c)}));return Object(R.jsx)(l.a,{children:Object(R.jsx)(l.b,{children:Object(R.jsxs)(l.w,{activePanel:e.activePanel,popout:o,children:[Object(R.jsx)(J,{id:"home"}),Object(R.jsx)(Q,{id:"base"}),Object(R.jsx)(ce,{id:"inventory"}),Object(R.jsx)(ie,{id:"friends"}),Object(R.jsx)(ae,{id:"actionNavigator"}),Object(R.jsx)(ue,{id:"attack"}),Object(R.jsx)(Ie,{id:"pageView"}),O]})})})})),_e=n(40),we=n(63),Ne="TIME/SET_ENTRY",Se="TIMESET_OLD_ENTRY",Ae="TIME/SET_TIMER",Pe={entry:null,oldEntry:null,timer:null,startTimer:null},Ce=Object(_e.b)({myInventory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(f.a)(Object(f.a)({},e),{},{money:e.money+t.change});case O:return Object(f.a)(Object(f.a)({},e),{},{house:e.house+t.change});case p:return Object(f.a)(Object(f.a)({},e),{},{people:e.people+t.change});case v:return Object(f.a)(Object(f.a)({},e),{},{roket:e.roket+t.change});case x:return Object(f.a)(Object(f.a)({},e),{},{food:e.food+t.change});case g:return t.setInventory;default:return e}},usersInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)(Object(f.a)({},e),{},{friends:t.friends});case S:return Object(f.a)(Object(f.a)({},e),{},{user:t.user});case A:return Object(f.a)(Object(f.a)({},e),{},{activeUserPage:t.id});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(f.a)(Object(f.a)({},e),{},{init:!0});case le:return Object(f.a)(Object(f.a)({},e),{},{accessToken:t.token});default:return e}},time:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(f.a)(Object(f.a)({},e),{},{entry:t.time});case Se:return Object(f.a)(Object(f.a)({},e),{},{oldEntry:t.time});case Ae:return Object(f.a)(Object(f.a)({},e),{},{timer:t.time});default:return e}},appPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(f.a)(Object(f.a)({},e),{},{activePanel:t.active});default:return e}}}),Ue=Object(_e.c)(Ce,Object(_e.a)(we.a)),Re=n(39);n(176);s.a.send("VKWebAppInit"),Re.a.initializeApp({apiKey:"AIzaSyAaCTI89WAScNMKK-5pzGmt5qcnF50U6aM",authDomain:"users-f9e77.firebaseapp.com",projectId:"users-f9e77",storageBucket:"users-f9e77.appspot.com",messagingSenderId:"730375624460",appId:"1:730375624460:web:e07c070bceaf98b8091b29",measurementId:"G-HR2BM8955Q"}),Re.a.analytics();var Ve=t.default=Re.a,Be=function(e){i.a.render(Object(R.jsx)(b.a,{store:Ue,children:Object(R.jsx)(Te,{})}),document.getElementById("root"))};Be(Ue.getState()),Ue.subscribe((function(){Ue.getState();Be()}))},62:function(e,t,n){e.exports={card:"PageView_card__32kXZ"}}},[[177,1,2]]]);
//# sourceMappingURL=main.3acedd30.chunk.js.map