(this.webpackJsonpformreact=this.webpackJsonpformreact||[]).push([[0],{36:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s(29),c=s.n(a),i=s(8),r=s(14),o=(s(36),s(2)),l=function(){return Object(o.jsxs)("div",{className:"jumbotron sign",children:[Object(o.jsx)(r.b,{to:"/signin",className:"btn btn-outline-success right",children:"Sign in"}),Object(o.jsx)(r.b,{to:"/signup",className:"btn btn-outline-info",children:"Sign up"})]})},j=s(11),u=s(21),b=(s(45),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),l=Object(j.a)(c,2),b=l[0],d=l[1],m=Object(n.useState)(!1),x=Object(j.a)(m,2),O=x[0],h=x[1],f=function(e,t){e(t.target.value)};return console.log(O),O?Object(o.jsx)(i.a,{push:!0,to:"/home"}):Object(o.jsx)("div",{className:"jumbotron",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.a.auth().signInWithEmailAndPassword(s,b).then((function(e){return a(""),d(""),void h(!0)})).catch((function(e){return console.log(e)}))},children:[Object(o.jsxs)("div",{className:"form-group row email",children:[Object(o.jsx)("label",{children:"Email address"}),Object(o.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(e){return f(a,e)},value:s}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group pass",children:[Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",onChange:function(e){return f(d,e)},value:b})]}),Object(o.jsxs)("div",{className:"row btnLink",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-primary right",children:"Sign In"}),Object(o.jsx)(r.b,{to:"/",className:"btn btn-outline-danger",children:"Back"})]})]})})}),d=s(20),m=s(26),x=(s(46),function(){return Object(o.jsxs)("div",{id:"fountainTextG",children:[Object(o.jsx)("div",{id:"fountainTextG_1",className:"fountainTextG",children:"L"}),Object(o.jsx)("div",{id:"fountainTextG_2",className:"fountainTextG",children:"o"}),Object(o.jsx)("div",{id:"fountainTextG_3",className:"fountainTextG",children:"a"}),Object(o.jsx)("div",{id:"fountainTextG_4",className:"fountainTextG",children:"d"}),Object(o.jsx)("div",{id:"fountainTextG_5",className:"fountainTextG",children:"i"}),Object(o.jsx)("div",{id:"fountainTextG_6",className:"fountainTextG",children:"n"}),Object(o.jsx)("div",{id:"fountainTextG_7",className:"fountainTextG",children:"g"})]})}),O=x,h=(s(47),function(){return Object(o.jsxs)("div",{className:"center",children:[" ",Object(o.jsxs)("div",{id:"fountainTextG",children:[Object(o.jsx)("div",{id:"fountainTextG_1",className:"fountainTextG",children:"E"}),Object(o.jsx)("div",{id:"fountainTextG_2",className:"fountainTextG",children:"r"}),Object(o.jsx)("div",{id:"fountainTextG_3",className:"fountainTextG",children:"r"}),Object(o.jsx)("div",{id:"fountainTextG_4",className:"fountainTextG",children:"o"}),Object(o.jsx)("div",{id:"fountainTextG_5",className:"fountainTextG",children:"r"})]})]})}),f=s(31),p=(s(48),{firstName:"",lastName:"",password:"",repeatPassword:"",email:""}),N=function(){var e=Object(n.useState)(p),t=Object(j.a)(e,2),s=t[0],a=t[1],c=s.password,i=s.email,l=s.repeatPassword,u=s.firstName,b=s.lastName,x=Object(n.useState)(!0),N=Object(j.a)(x,2),v=N[0],g=N[1],w=Object(n.useState)(!0),T=Object(j.a)(w,2),G=T[0],y=T[1],S=Object(n.useState)(!0),P=Object(j.a)(S,2),_=P[0],A=P[1],C=Object(n.useState)(!0),E=Object(j.a)(C,2),I=E[0],Z=E[1],k=Object(n.useState)(!0),z=Object(j.a)(k,2),W=z[0],B=z[1],D=Object(n.useState)(!1),F=Object(j.a)(D,2),J=F[0],L=F[1],$=Object(n.useState)(!1),H=Object(j.a)($,2),U=H[0],K=H[1],R=/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,V=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g,Y=/^([a-zA-Z-\u0410-\u042f\u0430-\u044f]{6,16})$/,q=function(e){a((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))};Object(n.useEffect)((function(){if(Y.test(u)?Z(!0):Z(!1),Y.test(b)?B(!0):B(!1),R.test(i)?A(!0):A(!1),V.test(c)?y(!0):y(!1),g(c===l),l===c)return function(){}}),[c,i,l,u,b]);var M=function(){a(p),L(!0),K(!1),Z(!1),B(!1),A(!1),y(!1),g(!1)};return J&&setTimeout((function(){L(!1)}),3e3),J?Object(o.jsx)(O,{}):Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),v&&f.a.auth().createUserWithEmailAndPassword(s.email,s.password).then((function(e){return M()})).then((function(e){return K(!1)})).catch((function(e){return K(!0)}))},children:Object(o.jsxs)("div",{className:"form-row col",children:[Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"FirstName",onChange:function(e){return q(e)},value:s.firstName,name:"firstName"}),Object(o.jsx)("span",{className:"error",children:!I&&"Name must be 6 letters or more"})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"LastName",onChange:function(e){return q(e)},value:s.lastName,name:"lastName"}),Object(o.jsx)("span",{className:"error",children:!W&&"Name must be 6 letters or more"})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",className:"form-control",id:"inputEmail4",onChange:function(e){return q(e)},value:s.email,name:"email"}),Object(o.jsx)("span",{className:"error",children:!_&&"Email should collect @ symbol and path"})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",id:"inputPassword5",autoComplete:"on",onChange:function(e){return q(e)},value:s.password,name:"password"})]}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("label",{children:" Repeat Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",id:"inputPassword4",autoComplete:"on",onChange:function(e){return q(e)},value:s.repeatPassword,name:"repeatPassword"}),Object(o.jsxs)("div",{className:"errors",children:[Object(o.jsx)("span",{className:"error",children:!v&&"Confirm password."}),Object(o.jsx)("span",{className:"error",children:!G&&"Password must contain at least six numbers, lowercase and uppercase, letters and symbols."})]})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-success right",children:"success"}),Object(o.jsx)(r.b,{to:"/",type:"submit",className:"btn btn-outline-primary",children:"back"})]})]})}),U&&Object(o.jsx)(h,{})]})},v=(s(49),function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),s=t[0],a=t[1];return setTimeout((function(){a(!1)}),3e3),s?Object(o.jsx)(x,{}):Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{children:"Welcome to your account"}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("span",{className:"name",children:null}),Object(o.jsx)("span",{className:"name",children:null})]})]}),Object(o.jsx)("div",{className:"row link",children:Object(o.jsx)(r.b,{to:"/",className:"btn btn-outline-primary link",children:"sign out"})})]})}),g=function(){return Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{path:"/",exact:!0,children:Object(o.jsx)(l,{})}),Object(o.jsx)(i.b,{path:"/signin/",children:Object(o.jsx)(b,{})}),Object(o.jsx)(i.b,{path:"/signup/",children:Object(o.jsx)(N,{})}),Object(o.jsx)(i.b,{path:"/home",children:Object(o.jsx)(v,{})})]})};u.a.initializeApp({apiKey:"AIzaSyBUaZbWoeF5ZJs6w3PsAciF7ae6Ns0DOBg",authDomain:"reactform-b2327.firebaseapp.com",projectId:"reactform-b2327",storageBucket:"reactform-b2327.appspot.com",messagingSenderId:"99052386962",appId:"1:99052386962:web:be9ebc29228ee41916844b",measurementId:"G-N8Z21VFYW1"}),c.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.90edbf3f.chunk.js.map