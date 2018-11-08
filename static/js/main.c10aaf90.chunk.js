(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(33)},19:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),l=a.n(r),o=(a(19),a(2)),s=a(3),d=a(6),c=a(4),h=a(5),u=a(1),m=a(13),b=a(12),v=a.n(b),p=(a(23),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={title:"",description:"",formValid:!1},a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a.handleDescriptionTextChange=a.handleDescriptionTextChange.bind(Object(u.a)(Object(u.a)(a))),a.handleTitleTextChange=a.handleTitleTextChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleDescriptionTextChange",value:function(e){this.setState({description:e.target.value}),this._validateData()}},{key:"handleTitleTextChange",value:function(e){this.setState({title:e.target.value}),this._validateData()}},{key:"_resetFields",value:function(){this.setState({description:"",title:""})}},{key:"render",value:function(){var e=this.state.description,t=this.state.title;return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Add New Item"),i.a.createElement("p",null,i.a.createElement("label",{className:"field",htmlFor:"Title"},i.a.createElement("span",null,"*"),"Title:"),i.a.createElement("input",{name:"Title",value:t,onChange:this.handleTitleTextChange})),i.a.createElement("p",null,i.a.createElement("label",{className:"field",htmlFor:"Description"},i.a.createElement("span",null,"*"),"Description:"),i.a.createElement("input",{name:"Description",value:e,onChange:this.handleDescriptionTextChange})),i.a.createElement("button",{disabled:!this.state.formValid,type:"submit"},"Add")))}},{key:"handleSubmit",value:function(e){var t=Object(m.a)({id:v.a.v4()},this.state);this.props.onAddItem(t),this._resetFields(),this._isFormValid(!1),e.preventDefault()}},{key:"_isFormValid",value:function(e){this.setState({formValid:e})}},{key:"_validateData",value:function(){this.state.title&&this.state.description?this._isFormValid(!0):this._isFormValid(!1)}}]),t}(n.Component)),f=(a(25),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={dragStart:!1},a.handleDragStart=a.handleDragStart.bind(Object(u.a)(Object(u.a)(a))),a.handleDragOver=a.handleDragOver.bind(Object(u.a)(Object(u.a)(a))),a.handleDragEnter=a.handleDragEnter.bind(Object(u.a)(Object(u.a)(a))),a.handleDragLeave=a.handleDragLeave.bind(Object(u.a)(Object(u.a)(a))),a.handleDrop=a.handleDrop.bind(Object(u.a)(Object(u.a)(a))),a.handleDragEnd=a.handleDragEnd.bind(Object(u.a)(Object(u.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleDragStart",value:function(e,t){console.log("handleDragStart",t.id),this.setState({dragStart:!0}),e.dataTransfer.setData("id",t.id)}},{key:"handleDragOver",value:function(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1}},{key:"handleDragEnter",value:function(){this.setState({over:!0})}},{key:"handleDragLeave",value:function(){this.setState({over:!1})}},{key:"handleDrop",value:function(e,t,a){e.stopPropagation&&e.stopPropagation();var n=parseInt(e.dataTransfer.getData("id"));return t.id!==n&&a&&a(n,t.id),!1}},{key:"handleDragEnd",value:function(e){this.setState({dragStart:!1})}},{key:"render",value:function(){var e=this,t=this.props.todoItem,a=this.props.onRemoveItem,n=this.props.onDropItem,r=["TodoItem"];return this.state.dragStart&&r.push("dragStart"),this.state.over&&r.push("over"),i.a.createElement("li",{draggable:!0,className:r.join(" "),onDragStart:function(a){return e.handleDragStart(a,t)},onDragOver:this.handleDragOver,onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDrop:function(a){return e.handleDrop(a,t,n)},onDragEnd:this.handleDragEnd},i.a.createElement("span",{onClick:function(){return a(t.id)},className:"TodoClose"},"x"),i.a.createElement("h4",null,i.a.createElement("b",null,t.title)),i.a.createElement("p",null,t.description))}}]),t}(n.Component)),g=(a(27),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(c.a)(t).call(this))).state={items:[]},e.addItemHandle=e.addItemHandle.bind(Object(u.a)(Object(u.a)(e))),e.removeItemHandle=e.removeItemHandle.bind(Object(u.a)(Object(u.a)(e))),e.dropItemHandle=e.dropItemHandle.bind(Object(u.a)(Object(u.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"addItemHandle",value:function(e){this.setState({items:this.state.items.concat([e])})}},{key:"removeItemHandle",value:function(e){this.setState({items:this.state.items.filter(function(t){return t.id!==e})})}},{key:"dropItemHandle",value:function(e,t){var a=this.state.items.findIndex(function(e){return e.id===t}),n=this.state.items.findIndex(function(t){return t.id===e});this.state.items.splice(a,0,this.state.items.splice(n,1)[0]),this.setState({items:[].concat(this.state.items)})}},{key:"render",value:function(){var e=this,t=this.state.items.map(function(t){return i.a.createElement(f,{onDropItem:e.dropItemHandle,onRemoveItem:e.removeItemHandle,key:t.id,todoItem:t})});return i.a.createElement("div",null,i.a.createElement("div",{className:"TodoList-header"},i.a.createElement("h2",null,"ToDo List App")),i.a.createElement("div",{className:"TodoList-body"},i.a.createElement(p,{onAddItem:this.addItemHandle}),i.a.createElement("div",null,i.a.createElement("h3",null,"Items"),i.a.createElement("ul",{className:"TodoList-container"},t))))}}]),t}(n.Component)),O=a(7),D=a.n(O),j=(a(31),function(e){function t(){var e;return Object(o.a)(this,t),e=Object(d.a)(this,Object(c.a)(t).call(this)),D.a.options={positionClass:"toast-top-full-width",hideDuration:300,timeOut:1e4},D.a.clear(),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.c10aaf90.chunk.js.map