(this.webpackJsonpstores=this.webpackJsonpstores||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),s=t.n(l),c=(t(14),t(8)),i=t(7),o=t(1),m=t(2),p=t(4),u=t(3),g=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={count:0},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark navbar-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Pratik Gupta"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"}))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0 m-2",type:"submit"},"Cart Items Count"),r.a.createElement("span",{className:"badge badge-warning"},this.props.totalcounters)))))}}]),t}(n.Component),h=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={imageUrl:"https://picsum.photos/200",count:0},e.styles={width:"100%"},e}return Object(m.a)(t,[{key:"quantity",value:function(){return 0==this.props.shopping_items.value?"Zero":this.props.shopping_items.value}},{key:"render",value:function(){var e=this;return console.log(this.props.shopping_items),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Painting Gallery"),r.a.createElement("div",{className:"row"},this.props.shopping_items.map((function(a){return r.a.createElement("div",{className:"col-md-3 card"},r.a.createElement("img",{className:"card-img-top",src:a.imageUrl,alt:"item image",style:e.styles}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},a.p_name),r.a.createElement("p",{className:"card-text"},"Some example text some example text. John Doe is an architect and engineer"),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:function(){return e.props.onIncrement(a)}},"Add Item"),r.a.createElement("button",{className:"btn btn-danger m-2"},"Delete Item"),r.a.createElement("span",{className:"badge badge-warning"},"Qty : ",a.value)))}))))}}]),t}(n.Component),v=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Simple React App"),r.a.createElement("p",null,"This App demonstrates a simple cart functionality"),r.a.createElement("li",null,"Clicking on Add item will increment the qty in qty span as well as navbar")))}}]),t}(n.Component),d=function(e){Object(p.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={shopping_items:[{id:1,value:0,p_name:"Painting 1",imageUrl:"https://picsum.photos/200"},{id:2,value:0,p_name:"Painting 2",imageUrl:"https://picsum.photos/200"},{id:3,value:0,p_name:"Painting 3",imageUrl:"https://picsum.photos/200"},{id:4,value:0,p_name:"Painting 4",imageUrl:"https://picsum.photos/200"}]},e.handleIncrement=function(a){var t=Object(i.a)(e.state.shopping_items),n=t.indexOf(a);t[n]=Object(c.a)({},a),t[n].value++,console.log(e.state.shopping_items[n]),e.setState({shopping_items:t})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{totalcounters:this.state.shopping_items.filter((function(e){return e.value>0})).length}),r.a.createElement("div",{className:"container-fluid",style:{marginTop:"30px"}},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(h,{shopping_items:this.state.shopping_items,onIncrement:this.handleIncrement}))),r.a.createElement(v,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(15);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6364cfbb.chunk.js.map