(this["webpackJsonpnew-xo"]=this["webpackJsonpnew-xo"]||[]).push([[0],{201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(43),o=n.n(s),c=(n(99),n(92)),i=n(8),l=n(29),u=n(3),d={squares:264,showPopup:!1,start:!1,selectedSquare:null,neighbour:null,players:{first:{id:1,active:!1,sign:null,color:null,name:null,scores:0},second:{id:2,active:!1,sign:null,color:null,name:null,scores:0}},rows:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PLAYERS":var n=t.payload;return Object(u.a)({},e,{start:!0,players:{first:Object(u.a)({},e.players.first,{active:!0,sign:n.sign_1,name:n.name_1,color:n.color_1}),second:Object(u.a)({},e.players.second,{sign:n.sign_2,name:n.name_2,color:n.color_2})}});case"GET_ROWS":return Object(u.a)({},e,{rows:Object(l.a)(t.payload)});case"GET_CLICKED_SQUARE":return Object(u.a)({},e,{selectedSquare:t.payload});case"MAKE_FIRST_ACTIVE":return Object(u.a)({},e,{players:{first:Object(u.a)({},e.players.first,{active:!0}),second:Object(u.a)({},e.players.second,{active:!1})}});case"MAKE_SECOND_ACTIVE":return Object(u.a)({},e,{players:{first:Object(u.a)({},e.players.first,{active:!1}),second:Object(u.a)({},e.players.second,{active:!0})}});case"HIDE_POPUP":return Object(u.a)({},e,{showPopup:!1});case"SHOW_POPUP":return Object(u.a)({},e,{showPopup:!0});case"UPDATE_ROWS":return Object(u.a)({},e,{rows:t.payload});case"FIRST_PLAYER_PUT_SIGN":return Object(u.a)({},e,{players:Object(u.a)({},e.players,{first:Object(u.a)({},e.players.first,{scores:e.players.first.scores+1})})});case"SECOND_PLAYER_PUT_SIGN":return Object(u.a)({},e,{players:Object(u.a)({},e.players,{second:Object(u.a)({},e.players.second,{scores:e.players.second.scores+1})})});default:return e}},m=n(209),b=n(7),f=Object(b.b)({form:m.a,reducer:p}),h=Object(b.c)(f),y=n(10),O=n(11),v=n(13),j=n(12),E=n(14),g=n(208),w=n(207),C=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return a.a.createElement("section",{className:"form"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("form",{onSubmit:e},a.a.createElement("div",{className:"form-group"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},a.a.createElement("h3",null,"First player"),a.a.createElement("label",{htmlFor:"name_1"},"Name"),a.a.createElement(g.a,{component:"input",type:"text",className:"form-control",id:"name_1",name:"name_1"}),a.a.createElement("label",{htmlFor:"sign_1"},"Sign"),a.a.createElement(g.a,{component:"input",type:"text",className:"form-control",id:"sign_1",name:"sign_1"}),a.a.createElement("label",{htmlFor:"color_1"},"Color"),a.a.createElement(g.a,{component:"input",type:"color",className:"form-control",id:"color_1",name:"color_1"})),a.a.createElement("div",{className:"col"},a.a.createElement("h3",null,"Second player"),a.a.createElement("label",{htmlFor:"name_2"},"Name"),a.a.createElement(g.a,{component:"input",type:"text",className:"form-control",id:"name_2",name:"name_2"}),a.a.createElement("label",{htmlFor:"sign_2"},"Sign"),a.a.createElement(g.a,{component:"input",type:"text",className:"form-control",id:"sign_2",name:"sign_2"}),a.a.createElement("label",{htmlFor:"color_2"},"Color"),a.a.createElement(g.a,{component:"input",type:"color",className:"form-control",id:"color_2",name:"color_2"}))),a.a.createElement("div",{className:"row justify-content-center mt-2"},a.a.createElement("button",{className:"btn btn-primary"},"Lets go"))))))))}}]),t}(a.a.Component),_=Object(w.a)({form:"init"})(C),P=function(e){return{type:"GET_ROWS",payload:e}},N=function(e){return{type:"GET_CLICKED_SQUARE",payload:e}},S=(n(201),n(202),function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).squareHandle=function(e){var t=JSON.parse(JSON.stringify(n.props.rows)),r=e.match(/([0-9]*)_([0-9]*)/)[1],a=t.filter((function(e){return e.id==r}))[0].squaresInRow.filter((function(t){return t.id==e}));n.props.onGetClickedSquare(a[0]),n.props.onShowPopup()},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,r=t.sq;return a.a.createElement("div",{className:"square",onClick:function(){return e.squareHandle(n)},style:{borderTop:r.sides.top?"1px solid ".concat(r.sides.top):"1px solid #33333350",borderBottom:r.sides.bottom?"1px solid ".concat(r.sides.bottom):"1px solid #33333350",borderLeft:r.sides.left?"1px solid ".concat(r.sides.left):"1px solid #33333350",borderRight:r.sides.right?"1px solid ".concat(r.sides.right):"1px solid #33333350"}},r.inner)}}]),t}(a.a.Component)),k=Object(i.b)((function(e){return{rows:e.reducer.rows}}),(function(e){return{onGetClickedSquare:function(t){return e(N(t))},onShowPopup:function(){return e({type:"SHOW_POPUP"})}}}))(S),R=function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rows,n=e.id;return a.a.createElement("div",{className:"row justify-content-center"},t[n].squaresInRow.map((function(e){return a.a.createElement(k,{key:e.id,id:e.id,sq:e})})))}}]),t}(a.a.Component),q=Object(i.b)((function(e){return{rows:e.reducer.rows}}),(function(e){return{onGetRows:function(t){return e(P(t))}}}))(R),I=(n(203),function(e){function t(){return Object(y.a)(this,t),Object(v.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.firstPlayer,n=e.secondPlayer;return a.a.createElement("aside",null,a.a.createElement("p",{style:{color:t.active?t.color:n.color}},"Current player: ",t.active?t.name:n.name),a.a.createElement("div",{className:"scores"},a.a.createElement("p",null,t.name," : ",t.scores),a.a.createElement("p",null,n.name," : ",n.scores)))}}]),t}(a.a.Component)),A=Object(i.b)((function(e){return{firstPlayer:e.reducer.players.first,secondPlayer:e.reducer.players.second}}),null)(I),x=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).buildRows=function(){for(var e,t=[],r=[],a={id:null,squaresCounter:null,squaresInRow:[]},s=n.props.squares/2,o=0,c=2;c<s&&(o+=c)<=s;c+=2)(e=JSON.parse(JSON.stringify(a))).squaresCounter=c,e.id=c/2,t.push(e);for(var i=t.length-1;i>=0;i--)r.push(t[i]);for(var d=[].concat(t,r),p=0;p<d.length;p++){d[p]=Object(u.a)({},d[p],{id:p});for(var m=0;m<d[p].squaresCounter;m++){var b={id:null,closed:!1,inner:null,linesCounter:0,sides:{left:null,right:null,top:null,bottom:null}};b=Object(u.a)({},b,{id:"".concat(p,"_").concat(m)}),0===m?p<d.length/2-1?(delete b.sides.left,delete b.sides.top):p==d.length/2-1?(delete b.sides.left,delete b.sides.top):p>d.length/2-1&&(delete b.sides.left,delete b.sides.bottom):m===d[p].squaresCounter-1&&(p<d.length/2-1?(delete b.sides.right,delete b.sides.top):p==d.length/2-1?(delete b.sides.right,delete b.sides.top):p>d.length/2-1&&(delete b.sides.right,delete b.sides.bottom)),d[p].squaresInRow=[].concat(Object(l.a)(d[p].squaresInRow),[b])}}n.props.onGetRows(d)},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.buildRows()}},{key:"render",value:function(){var e=this.props.rows;return a.a.createElement("section",{className:"game-row"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-8"},e.map((function(e){return a.a.createElement(q,{key:e.id,id:e.id})}))),a.a.createElement("div",{className:"col-lg-4"},a.a.createElement(A,null)))))}}]),t}(a.a.Component),T=Object(i.b)((function(e){return{squares:e.reducer.squares,rows:e.reducer.rows}}),(function(e){return{onGetRows:function(t){return e(P(t))}}}))(x),F=(n(204),function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(s)))).buildButtons=function(){var e=n.props.selectedSquare.sides,t=[],r=function(r){var s=void 0;switch(r){case"top":s=a.a.createElement("button",{key:r,style:{borderTop:e[r]?"10px solid ".concat(e[r]):"10px solid white"},className:"popup-button",onClick:function(){return n.hadleClick(r)}}),t.push(s);break;case"right":s=a.a.createElement("button",{key:r,style:{borderRight:e[r]?"10px solid ".concat(e[r]):"10px solid white"},className:"popup-button",onClick:function(){return n.hadleClick(r)}}),t.push(s);break;case"bottom":s=a.a.createElement("button",{key:r,style:{borderBottom:e[r]?"10px solid ".concat(e[r]):"10px solid white"},className:"popup-button",onClick:function(){return n.hadleClick(r)}}),t.push(s);break;case"left":s=a.a.createElement("button",{key:r,style:{borderLeft:e[r]?"10px solid ".concat(e[r]):"10px solid white"},className:"popup-button",onClick:function(){return n.hadleClick(r)}}),t.push(s)}};for(var s in e)r(s);return t},n.lookingForNeighbour=function(e,t,r){var a,s=n.props,o=s.onFirstPlayerPutSign,c=s.onSecondPlayerPutSign,i=s.firstPlayer,l=(s.secondPlayer,i.active),d=n.props.rows,p=/([0-9]*)_([0-9]*)/,m=Number(e.id.match(p)[1]),b=Number(e.id.match(p)[2]),f=0;switch(t){case"top":if(0===m)return;for(var h in m<d.length/2-1?b-=1:m===d.length/2-1?b-=1:m===d.length/2?b=b:m>d.length/2-1&&(b+=1),(a=d[m-=1].squaresInRow[b]).sides)a.sides[h]&&(f+=1);return f===e.linesCounter&&(l?o():c()),Object(u.a)({},a,{inner:f-1===e.linesCounter?e.inner:null,linesCounter:a.linesCounter+1,sides:Object(u.a)({},a.sides,{bottom:r})});case"bottom":if(m===d.length-1)return;for(var y in m<d.length/2-1?b+=1:m===d.length/2-1?b=b:m>d.length/2-1&&(b-=1),(a=d[m+=1].squaresInRow[b]).sides)a.sides[y]&&(f+=1);return f===e.linesCounter&&(l?o():c()),Object(u.a)({},a,{inner:f===e.linesCounter?e.inner:null,linesCounter:a.linesCounter+1,sides:Object(u.a)({},a.sides,{top:r})});case"left":if(0===b)return;for(var O in b-=1,(a=d[m].squaresInRow[b]).sides)a.sides[O]&&(f+=1);return f===e.linesCounter&&(l?o():c()),Object(u.a)({},a,{inner:f===e.linesCounter?e.inner:null,linesCounter:a.linesCounter+1,sides:Object(u.a)({},a.sides,{right:r})});case"right":if(b==d[m].squaresInRow.length-1)return;for(var v in b+=1,(a=d[m].squaresInRow[b]).sides)a.sides[v]&&(f+=1);return f===e.linesCounter&&(l?o():c()),Object(u.a)({},a,{inner:f===e.linesCounter?e.inner:null,linesCounter:a.linesCounter+1,sides:Object(u.a)({},a.sides,{left:r})})}},n.hadleClick=function(e){var t,r=n.props,a=r.firstPlayer,s=r.secondPlayer,o=r.onFirstPlayerPutSign,c=r.onSecondPlayerPutSign,i=r.selectedSquare,l=r.ongUpdateClickedSquare,d=r.onMakeFirstActive,p=r.onMakeSecondActive,m=r.onHidePopup,b=a.active?a.color:s.color,f=a.active?a.sign:s.sign,h=a.active,y=0,O=Object(u.a)({},i,{sides:Object(u.a)({},i.sides)});switch(e){case"top":if(i.sides[e])return alert("this side has been already choose"),void m();for(var v in(O=Object(u.a)({},i,{linesCounter:i.linesCounter+1,sides:Object(u.a)({},i.sides,{top:b})})).sides)y+=1;y===O.linesCounter&&(O.closed=!0,O.inner=f,h?(o(),d()):(c(),p()));break;case"right":if(i.sides[e])return alert("this side has been already choose"),void m();for(var j in(O=Object(u.a)({},i,{linesCounter:i.linesCounter+1,sides:Object(u.a)({},i.sides,{right:b})})).sides)y+=1;y===O.linesCounter&&(O.closed=!0,O.inner=f,h?(o(),d()):(c(),p()));break;case"bottom":if(i.sides[e])return alert("this side has been already choose"),void m();for(var E in(O=Object(u.a)({},i,{linesCounter:i.linesCounter+1,sides:Object(u.a)({},i.sides,{bottom:b})})).sides)y+=1;y===O.linesCounter&&(O.closed=!0,O.inner=f,h?(o(),d()):(c(),p()));break;case"left":if(i.sides[e])return alert("this side has been already choose"),void m();for(var g in(O=Object(u.a)({},i,{linesCounter:i.linesCounter+1,sides:Object(u.a)({},i.sides,{left:b})})).sides)y+=1;y===O.linesCounter&&(O.closed=!0,O.inner=f,h?(o(),d()):(c(),p()));break;default:return}t=n.lookingForNeighbour(O,e,b),O.closed||(h?p():d()),l(O),n.buildNewRows(t,O),m()},n.buildNewRows=function(e,t){var r=n.props,a=r.rows,s=r.onUpdateRows,o=JSON.parse(JSON.stringify(a)),c=/([0-9]*)_([0-9]*)/,i=Number(t.id.match(c)[1]),l=Number(t.id.match(c)[2]),u=Number(e.id.match(c)[1]),d=Number(e.id.match(c)[2]);o[i].squaresInRow[l]=t,o[u].squaresInRow[d]=e,s(o)},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.buildButtons();return a.a.createElement("section",{className:"popup"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col d-flex justify-content-center align-items-center w100 h100"},a.a.createElement("div",{className:"buttons-wrapper"},Object(l.a)(e))))))}}]),t}(a.a.Component)),G=Object(i.b)((function(e){return{rows:e.reducer.rows,selectedSquare:e.reducer.selectedSquare,firstPlayer:e.reducer.players.first,secondPlayer:e.reducer.players.second}}),(function(e){return{ongUpdateClickedSquare:function(t){return e(N(t))},onMakeFirstActive:function(){return e({type:"MAKE_FIRST_ACTIVE"})},onMakeSecondActive:function(){return e({type:"MAKE_SECOND_ACTIVE"})},onHidePopup:function(){return e({type:"HIDE_POPUP"})},onUpdateRows:function(t){return e(function(e){return{type:"UPDATE_ROWS",payload:e}}(t))},onFirstPlayerPutSign:function(){return e({type:"FIRST_PLAYER_PUT_SIGN"})},onSecondPlayerPutSign:function(){return e({type:"SECOND_PLAYER_PUT_SIGN"})}}}))(F),U=function(e){function t(){var e,n;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(a)))).initPlayers=function(e){void 0!=e.name_1&&void 0!=e.name_2&&void 0!=e.color_1&&void 0!=e.color_2&&void 0!=e.sign_1&&void 0!=e.sign_2?n.props.onPlayersGetted(e):alert("The form or some fields are ampty ")},n}return Object(E.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.started?a.a.createElement(T,null):a.a.createElement(_,{onSubmit:this.initPlayers}),this.props.showPopup?a.a.createElement(G,null):null)}}]),t}(a.a.Component),D=Object(i.b)((function(e){return{started:e.reducer.start,showPopup:e.reducer.showPopup}}),(function(e){return{onPlayersGetted:function(t){return e(function(e){return{type:"GET_PLAYERS",payload:e}}(t))}}}))(U),L=a.a.createElement(i.a,{store:h},a.a.createElement(c.a,null,a.a.createElement(D,null)));o.a.render(L,document.querySelector("#root"))},94:function(e,t,n){e.exports=n(206)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.bd3576dd.chunk.js.map