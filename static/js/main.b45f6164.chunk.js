(window.webpackJsonppictureselect=window.webpackJsonppictureselect||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(49),o=n.n(r),l=(n(68),n(69),n(70),n(59)),i=n(60),s=n(50),u=n(51),A=n(61),h=n(52),m=n(62),p=n(118),d=(n(71),p.a.Group),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(A.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={checkAll:!1,indeterminate:!0,value:[],pictures:[]},n.onCheckAllChange=function(e){if(e.target.checked){var t=n.props.pictures,a=[];t.map(function(e){return a.push(e.id),e}),n.props.onChange([].concat(a)),n.setState({checkAll:!0})}else n.props.onChange([]),n.setState({checkAll:!1})},n.onChange=function(e){n.props.onChange(Object(i.a)(e));var t=n.state.pictures;e.length===t.length?n.setState({checkAll:!0,indeterminate:!1}):e.length<t.length&&e.length>0?n.setState({checkAll:!1,indeterminate:!0}):n.setState({checkAll:!1,indeterminate:!1})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.pictures,n=e.value;return c.a.createElement("div",{className:"picture-select"},c.a.createElement("div",{className:"check-all"},c.a.createElement(p.a,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"\u5df2\u52fe\u9009",n.length,"\u4e2a\u6587\u4ef6")),c.a.createElement("div",null,t&&t.length>0?c.a.createElement(d,{onChange:this.onChange,value:n},t.map(function(e,t){return c.a.createElement(p.a,{key:e.id,value:e.id},c.a.createElement("img",{src:e.url,alt:""}))})):null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log(e,t),e.value!==t.value||e.pictures!==t.pictures?{value:e.value,pictures:e.pictures}:t}}]),t}(a.Component),f=function(){var e=c.a.useState(["1"]),t=Object(l.a)(e,2),n=t[0],a=t[1];return console.log(n),c.a.createElement(g,{pictures:[{id:"1",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"2",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"},{id:"3",name:"foo",url:"https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ"}],value:n,onChange:function(e){return a(e)}})};var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,n){e.exports=n(116)},68:function(e,t,n){},69:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},70:function(e,t,n){},71:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.b45f6164.chunk.js.map