(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),i=a(66),c=a(67),o=a(68),l=a(5),u=a(6),h=a(8),m=a(7),p=a(9);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("/store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter a Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:v()}),r.a.createElement("button",{type:"submit"},"Visit Store -> "))}}]),t}(r.a.Component),g=a(12),y=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},E=a(18),O=a.n(E),j=a(22),w=a(17),S=a(15),k=a.n(S),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addFish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"",className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!!!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))}}]),t}(r.a.Component),C=a(20),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(g.a)({},a.props.fish,Object(C.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!!!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(r.a.Component),x=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With Github"),r.a.createElement("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")}},"Log In With Facebook"))},R=a(31),T=a.n(R),I=k.a.initializeApp({apiKey:"AIzaSyCvTdg-fnE01cQ5R7_VKgKwpqwr5508i00",authDomain:"catch-of-the-day-practic-73dd8.firebaseapp.com",databaseURL:"https://catch-of-the-day-practic-73dd8.firebaseio.com"}),A=T.a.createClass(I.database()),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(){var e=Object(j.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.fetch(a.props.storeId,{context:Object(w.a)(Object(w.a)(a))});case 2:if(n=e.sent,console.log(n),n.owner){e.next=7;break}return e.next=7,A.post("".concat(a.props.storeId,"/owner"),{data:t.user.uid});case 7:a.setState({uid:t.user.uid,owner:n.owner||t.user.uid}),console.log(t);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.authenticate=function(e){var t=new(k.a.auth["".concat(e,"AuthProvider")]);I.auth().signInWithPopup(t).then(a.authHandler)},a.logout=Object(j.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Logging out!"),e.next=3,k.a.auth().signOut();case 3:a.setState({uid:null});case 4:case"end":return e.stop()}},e,this)})),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.auth().onAuthStateChanged(function(t){t&&e.authHandler({user:t})})}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, You are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),t,Object.keys(this.props.fishes).map(function(t){return r.a.createElement(N,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})}),r.a.createElement(F,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Load Sample Fishes")):r.a.createElement(x,{authenticate:this.authenticate})}}]),t}(r.a.Component),L=a(16),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.fishes[e],n=a.props.order[e],s=t&&"available"===t.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t?s?r.a.createElement(L.CSSTransition,i,r.a.createElement("li",{key:e},r.a.createElement("span",null,r.a.createElement(L.TransitionGroup,{component:"span",className:"count"},r.a.createElement(L.CSSTransition,i,r.a.createElement("span",null,n))),"lbs ",t.name,d(n*t.price),r.a.createElement("button",{onClick:function(){return a.props.removeFromOrder(e)}},"\xd7")))):r.a.createElement(L.CSSTransition,i,r.a.createElement("li",{key:e},"Sorry ",t?t.name:"fish"," is no longer available")):null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t},0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(L.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,d(a))))}}]),t}(r.a.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},U=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,s=t.price,i=t.desc,c="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},d(s))),r.a.createElement("p",null,i),r.a.createElement("button",{disabled:!c,onClick:function(){return e.props.addToOrder(e.props.index)}},c?"Add to Order":"Sold Out!"))}}]),t}(r.a.Component),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(g.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.updateFish=function(e,t){var n=Object(g.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(g.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.loadSampleFishes=function(){a.setState({fishes:P})},a.addToOrder=function(e){var t=Object(g.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.removeFromOrder=function(e){var t=Object(g.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=A.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(y,{tagline:"Fresh Seafood Market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map(function(t){return r.a.createElement(U,{key:t,index:t,details:e.state.fishes[t],addToOrder:e.addToOrder})}))),r.a.createElement(M,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(D,{addFish:this.addFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,updateFish:this.updateFish,deleteFish:this.deleteFish,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component),G=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"PAGE NOT FOUND!!!"))},J=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:b}),r.a.createElement(o.a,{path:"/store/:storeId",component:W}),r.a.createElement(o.a,{component:G})))};a(62);Object(s.render)(r.a.createElement(J,null),document.querySelector("#main"))}},[[33,2,1]]]);
//# sourceMappingURL=main.cb50594d.chunk.js.map