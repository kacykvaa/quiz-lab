(this["webpackJsonpquiz-lab"]=this["webpackJsonpquiz-lab"]||[]).push([[0],{213:function(e,n,t){"use strict";t.r(n);var r,a,i,s,c,o=t(1),u=t.n(o),d=t(52),l=t.n(d),b=t(3),m=t.n(b),j=t(8),p=t(9),h=t(6),f=t(29),g=t(14),O=t(7),x=t(20),w=t(10),v=t(36),k=(t(103),t(214),v.a.apps.length?v.a.app():v.a.initializeApp({apiKey:"AIzaSyA5a5WuH6_DH2-7ZVYDh8twPp-LH4KwK5g",authDomain:"quiz-lab-23749.firebaseapp.com",projectId:"quiz-lab-23749",storageBucket:"quiz-lab-23749.appspot.com",messagingSenderId:"868035074179",appId:"1:868035074179:web:dcc275bf573f5e801b63b6"}),v.a.auth()),q=v.a.firestore(),y=(new v.a.auth.GoogleAuthProvider,function(){var e=Object(j.a)(m.a.mark((function e(n,t){var r,a,i,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=q.doc("users/".concat(t)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=16;break}return a=n.email,i=n.name,s=n.totalGames,c=n.pointsScored,e.prev=8,e.next=11,r.set({id:t,email:a,name:i,totalGames:s,pointsScored:c});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.error("Error creating user document",e.t0);case 16:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(n,t){return e.apply(this,arguments)}}()),C=function(){var e=Object(j.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.collection(n).get();case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.error("Error fetching data",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(m.a.mark((function e(n){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.doc("users/".concat(n)).get();case 3:return t=e.sent,r=t.data(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching user",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(m.a.mark((function e(n){var t,r,a,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,c="questions",q.collection(c).doc().id;case 4:return t=e.sent,r=q.doc("questions/".concat(t)),a=n.question,i=n.correctAnswer,s=n.answers,e.prev=7,e.next=10,r.set({id:t,question:a,answers:s,correctAnswer:i});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.error("Error creating question document",e.t0);case 15:case"end":return e.stop()}var c}),e,null,[[7,12]])})));return function(n){return e.apply(this,arguments)}}(),z=t(25),I=t(39),E=t(18),M=t(2),Q=O.b.button(r||(r=Object(h.a)(["\n  border: .2rem solid black;\n  border-radius: 2rem;\n  padding: .7rem 1rem;\n  margin: .8rem;\n  color: white;\n  font-size: ",";\n  background-color: ",";\n  letter-spacing: 1.2px;\n  font-weight: bold;\n  \n  \n  :disabled{\n    background-color: grey;\n    \n  }\n"])),(function(e){return e.size?e.size:"inherit"}),(function(e){return e.backgroundColor?e.backgroundColor:"green"})),P=function(e){return Object(M.jsx)(Q,{size:e.size,disabled:e.disabled,onClick:e.onClick,children:e.value})},G=O.b.form(a||(a=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 75vw;\n  max-width: 35rem;\n  margin: 12vh auto;\n  padding: 2rem;\n  border: .3rem solid black;\n  border-radius: 2rem;\n  background-color: rgba(64, 64, 64, .8);\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n"]))),L=function(e){return Object(M.jsx)(G,{onSubmit:e.onSubmitHandler,onChange:e.onChange,children:e.children})},F=O.b.input(i||(i=Object(h.a)(["\n  width: 90%;\n  max-width: 25rem;\n  margin: .8rem;\n  padding: 0.7rem;\n  border: .15rem solid black;\n  border-radius: 3rem;\n  font-size: inherit;\n  font-weight: 700;\n  letter-spacing: 1px;\n  cursor: pointer;\n  outline: none;\n  background-color: ",";\n  transition: all 0.4s;\n\n  ::placeholder {\n    color: rgba(0, 0, 0, .6);\n  }\n\n  :hover, :focus {\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    transform: scale(1.02);\n  }\n\n  :focus {\n    transform: scale(1.05);\n    background-color: aqua;\n    border: .2rem solid orange;\n  }\n"])),(function(e){return e.backgroundColor?e.backgroundColor:"white"})),D=function(e){return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(F,Object(w.a)(Object(w.a)({autoComplete:e.autoComplete,type:e.type,id:e.id,name:e.name,value:e.value,onBlur:e.onChange,placeholder:e.placeholder,backgroundColor:e.backgroundColor},e.register),{},{onChange:e.onChange}))})},H=t(45),T=function(){return Object(H.b)()},B=H.c,N=function(e){if(!0===B((function(e){return e})).user.isAuth)return Object(M.jsx)(g.a,{to:e})},R=t(31);!function(e){e.Idle="IDLE",e.Loading="LOADING"}(s||(s={})),function(e){e.Users="users",e.Questions="questions"}(c||(c={}));var X,K,U,V,W,J,Y,Z,_,$,ee,ne,te,re,ae,ie,se,ce,oe,ue,de,le,be,me={status:s.Idle,isMenuOpen:!1},je=Object(R.b)({name:"app,",initialState:me,reducers:{changeStatus:function(e,n){e.status=n.payload},setMessage:function(e,n){e.message=n.payload},toggleMenu:function(e){e.isMenuOpen=!e.isMenuOpen}}}),pe=je.actions,he=pe.changeStatus,fe=(pe.setMessage,pe.toggleMenu),ge=je.reducer,Oe=O.b.div(X||(X=Object(h.a)(['\n  display: inline-block;\n\n  :after {\n    content: " ";\n    display: block;\n    width: ',";\n    height: ",";\n    margin: .5rem;\n    border-radius: 50%;\n    border: .5rem solid orange;\n    border-color: orange transparent orange transparent;\n    animation: lds-dual-ring .7s linear infinite;\n  }\n\n  @keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),(function(e){return e.size?e.size+"rem":"3rem"}),(function(e){return e.size?e.size+"rem":"3rem"})),xe=function(e){return Object(M.jsx)(Oe,{size:e.size})},we=Object(O.b)(f.b)(K||(K=Object(h.a)(["\n  margin-top: 1rem;\n  padding: 0.3rem;\n  font-size: 1.3rem;\n  color: white;\n  text-decoration: none;\n  transition: all .4s;\n\n  :hover {\n    transform: scaleX(1.1);\n    color: #888;\n  }\n"]))),ve=function(e){return Object(M.jsx)(we,{to:e.to,children:e.value})},ke=O.b.p(U||(U=Object(h.a)(["\n    margin: 0 .2rem .2rem;\n    text-align: center;\n    line-height: 120%;\n"]))),qe=function(e){return Object(M.jsx)(ke,{children:e.value})},ye=O.b.h1(V||(V=Object(h.a)(["\n  margin-bottom: 1rem;\n  font-size: 2.4rem;\n"]))),Ce=E.b().shape({email:E.d().email().required("Email is Required"),password:E.d().min(5,"Password should be at least 5 characters").max(15),confirmPassword:E.d().oneOf([E.c("password"),null]),name:E.d().min(3,"Name should be at least 3 characters").max(12,"Too long").required("Name is Required")}),Ae=function(){var e=T(),n=B((function(e){return e})).app,t=Object(g.g)(),r=Object(z.d)({resolver:Object(I.a)(Ce),mode:"onBlur"}),a=r.register,i=r.handleSubmit,c=r.formState,u=c.errors,d=c.isDirty,l=c.isValid,b=Object(o.useState)({id:"",email:"",password:"",confirmPassword:"",name:"",totalGames:0,pointsScored:0}),h=Object(p.a)(b,2),f=h[0],O=h[1],v=Object(o.useState)(""),q=Object(p.a)(v,2),C=q[0],A=q[1],S=function(e){O(Object(w.a)(Object(w.a)({},f),{},Object(x.a)({},e.target.name,e.target.value)))},E=function(){var n=Object(j.a)(m.a.mark((function n(){var r,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(he(s.Loading)),n.prev=1,n.next=4,k.createUserWithEmailAndPassword(f.email,f.password);case 4:if(!(r=n.sent).user){n.next=11;break}return a=r.user.uid,O(Object(w.a)(Object(w.a)({},f),{},{id:a})),n.next=10,y(f,a);case 10:t.push("/login");case 11:n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),e(he(s.Idle)),A(n.t0.message);case 17:e(he(s.Idle)),O({id:"",email:"",password:"",confirmPassword:"",name:"",totalGames:0,pointsScored:0});case 19:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[N("/user"),Object(M.jsxs)(L,{onSubmitHandler:i(E),children:[Object(M.jsx)(ye,{children:"Register"}),Object(M.jsx)(qe,{value:C&&C}),Object(M.jsx)(D,{type:"email",name:"email",value:f.email,autoComplete:"new-password",placeholder:"Email...",register:Object(w.a)({},a("email",{required:!0})),onChange:S}),u.email&&Object(M.jsx)(qe,{value:u.email.message}),Object(M.jsx)(D,{type:"password",name:"password",value:f.password,placeholder:"Password...",register:Object(w.a)({},a("password",{required:!0})),onChange:S}),u.password&&Object(M.jsx)(qe,{value:u.password.message}),Object(M.jsx)(D,{type:"password",name:"confirmPassword",value:f.confirmPassword,placeholder:"Confirm Password...",register:Object(w.a)({},a("confirmPassword",{required:!0})),onChange:S}),u.confirmPassword&&Object(M.jsx)(qe,{value:u.confirmPassword.message}),Object(M.jsx)(D,{type:"text",name:"name",value:f.name,autoComplete:"new-password",placeholder:"Name...",register:Object(w.a)({},a("name",{required:!0})),onChange:S}),u.name&&Object(M.jsx)(qe,{value:u.name.message}),n.status===s.Loading?Object(M.jsx)(xe,{}):Object(M.jsx)(P,{value:"Submit",size:"1.3rem",disabled:!l||!d}),Object(M.jsx)(ve,{to:"/login",value:"Already have an account?"})]})]})},Se={id:"",name:"",email:"",totalGames:0,pointsScored:0},ze=Object(R.b)({name:"user",initialState:Se,reducers:{login:function(e,n){return n.payload},logout:function(e){return Se},isAuth:function(e,n){e.isAuth=n.payload}}}),Ie=ze.actions,Ee=Ie.login,Me=Ie.logout,Qe=(Ie.isAuth,ze.reducer),Pe=E.b().shape({email:E.d().email().required("Email is required"),password:E.d().required("Password is required")}),Ge=function(){var e=T(),n=B((function(e){return e})).app,t=Object(z.d)({resolver:Object(I.a)(Pe),mode:"onBlur"}),r=t.register,a=t.handleSubmit,i=t.formState.errors,c=Object(o.useState)({email:"",password:""}),u=Object(p.a)(c,2),d=u[0],l=u[1],b=Object(o.useState)(""),h=Object(p.a)(b,2),f=h[0],g=h[1],O=Object(o.useState)({id:"",name:"",email:"",isAuth:!1}),v=Object(p.a)(O,2),q=v[0],y=v[1];Object(o.useEffect)((function(){e(Ee(q))}),[q,e]);var C=function(e){l(Object(w.a)(Object(w.a)({},d),{},Object(x.a)({},e.target.name,e.target.value)))},S=function(){var n=Object(j.a)(m.a.mark((function n(t){var r,a,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e(he(s.Loading)),n.next=4,k.signInWithEmailAndPassword(d.email,d.password);case 4:if(!(r=n.sent).user){n.next=11;break}return a=r.user.uid,n.next=9,A(a);case 9:(i=n.sent)&&y({id:i.id,email:i.email,name:i.name,isAuth:!0});case 11:e(he(s.Idle)),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),g(n.t0.message),e(he(s.Idle));case 18:l({email:"",password:""});case 19:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(M.jsxs)(M.Fragment,{children:[N("/user"),Object(M.jsxs)(L,{onSubmitHandler:a(S),children:[Object(M.jsx)("h1",{children:"Login"}),Object(M.jsx)(qe,{value:f&&f}),Object(M.jsx)(D,{type:"email",name:"email",value:d.email,autoComplete:"new-password",placeholder:"Email",register:Object(w.a)({},r("email",{required:!0})),onChange:C}),i.email&&Object(M.jsx)(qe,{value:i.email.message}),Object(M.jsx)(D,{type:"password",name:"password",value:d.password,placeholder:"Password",register:Object(w.a)({},r("password",{required:!0})),onChange:C}),i.password&&Object(M.jsx)(qe,{value:i.password.message}),n.status===s.Loading?Object(M.jsx)(xe,{}):Object(M.jsx)(P,{value:"Submit",size:"1.3rem"}),Object(M.jsx)(ve,{to:"/register",value:"Create an account"})]})]})},Le=t.p+"static/media/avatarAvocado.b9e21133.svg",Fe="375px",De="720px",He="1024px",Te="1440px",Be="1920px",Ne={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(Fe,")"),tablet:"(min-width: ".concat(De,")"),laptop:"(min-width: ".concat(He,")"),laptopL:"(min-width: ".concat(Te,")"),desktop:"(min-width: ".concat(Be,")")},Re=O.b.div(W||(W=Object(h.a)(["\n  height: 100vh;\n  display: grid;\n  margin: 0 1.5rem;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 3fr 1fr;\n  justify-content: center;\n\n  button {\n    grid-row: 3;\n    align-self: flex-end;\n    margin-top: auto;\n    margin-bottom: 2rem;\n  }\n\n@media"," {\n  button {\n    justify-self: center;\n    max-width: 30rem;\n  }\n}\n"])),Ne.tablet),Xe=O.b.div(J||(J=Object(h.a)(["\n  width: 55vw;\n  min-width: 25rem;\n  margin: 10vh 1rem;\n  padding: 1rem;\n  justify-self: center;\n  border: .3rem solid orange;\n  background-color: rgba(0, 0, 0, .65);\n  font-size: 1.5rem;\n\n  p {\n    margin: .5rem;\n  }\n\n  img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 11rem;\n    height: 11rem;\n    background-color: orange;\n    border-radius: 10rem;\n  }\n\n  span {\n    color: green;\n    font-weight: bold;\n  }\n}\n\n@media"," {\n  max-width: 35rem;\n"])),Ne.tablet),Ke=O.b.div(Y||(Y=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n\n@media"," {\n  font-size: 2rem;\n}\n"])),Ne.tablet),Ue=function(){var e=B((function(e){return e})).user,n=T(),t=Object(g.g)(),r=function(){var e=Object(j.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.signOut();case 2:n(Me()),t.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(M.Fragment,{children:e.id?Object(M.jsxs)(Re,{children:[Object(M.jsxs)(Xe,{children:[Object(M.jsx)("img",{src:Le,alt:"Avocado Avatar"}),Object(M.jsxs)("p",{children:["Name: ",e.name]}),Object(M.jsxs)("p",{children:["Mail: ",e.email," "]}),Object(M.jsxs)("p",{children:["Total Games: ",Object(M.jsx)("span",{children:e.totalGames})]}),Object(M.jsxs)("p",{children:["Points Scored: ",Object(M.jsx)("span",{children:e.pointsScored})]})]}),Object(M.jsx)(P,{onClick:r,value:"Sign out",size:"1.5rem"})]}):Object(M.jsxs)(Ke,{children:[Object(M.jsx)("h1",{children:"You're Not Logged In"}),Object(M.jsx)(P,{onClick:function(){return t.push("/login")},value:"Sign In",size:"1.5rem"})]})})},Ve=Object(R.b)({name:"game",initialState:{},reducers:{startGame:{reducer:function(e,n){return n.payload},prepare:function(e){return{payload:{questionRandomIds:e.questionRandomIds,questions:e.questions,currentQuestion:0,score:0}}}},updateCurrentQuestion:function(e){e.currentQuestion=e.currentQuestion+1,e.chosenAnswer=null},updateScore:function(e){e.score=e.score+1},setChosenAnswer:function(e,n){e.chosenAnswer=n.payload}}}),We=Ve.actions,Je=We.startGame,Ye=We.updateCurrentQuestion,Ze=We.updateScore,_e=We.setChosenAnswer,$e=Ve.reducer,en=O.b.div(Z||(Z=Object(h.a)(["\n  width: 100%;\n  background: white;\n  height: 1rem;\n  border-radius: 20rem;\n  margin: 0 0 1.5rem;\n\n"]))),nn=O.b.div(_||(_=Object(h.a)(["\n  width: ",";\n  background: #84BF04;\n  height: 100%;\n  border-radius: 20rem;\n\n\n"])),(function(e){return e.currentQuestion&&e.currentQuestion+"%"})),tn=function(e){var n=e.currentQuestion/5*100;return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(en,{children:Object(M.jsx)(nn,{currentQuestion:n})})})},rn=function(){var e=Object(j.a)(m.a.mark((function e(n,t,r){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q.doc("users/".concat(n)),e.next=3,a.get();case 3:if(!e.sent.exists){e.next=13;break}return e.prev=5,e.next=8,a.update({totalGames:t,pointsScored:r});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),console.error("Error creating user document",e.t0);case 13:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(n,t,r){return e.apply(this,arguments)}}(),an=O.b.data($||($=Object(h.a)(["\n  font-size: 1.2rem;\n  text-align: center;\n\n  h2 {\n    padding: 2 .rem;\n    margin: .5rem .2rem;\n  }\n"]))),sn=O.b.p(ee||(ee=Object(h.a)(["\n  width: 100%;\n  padding: .8rem .3rem;\n  border-radius: 2rem;\n  text-align: center;\n  margin: 2rem 0;\n  cursor: pointer;\n  background-color: ",";\n  background-color: ",";\n  border: ",";\n  font-weight: bold;\n  color: white;\n"])),(function(e){return e.isChosen&&"#038C33"}),(function(e){return e.correctAnswer&&"#05F240"}),(function(e){return e.correctAnswer?"3px solid #37A63E":"2px solid orange"})),cn=O.b.div(ne||(ne=Object(h.a)(["\n  margin: 1rem 1rem 0;\n  text-align: center;\n\n  h1 {\n    margin: .7rem;\n  }\n\n  h2 {\n    margin: 1rem;\n  }\n"]))),on=function(){var e=T(),n=B((function(e){return e})),t=n.game,r=n.app,a=n.user,i=[],u=Object(o.useState)(null),d=Object(p.a)(u,2),l=d[0],b=d[1],h=function(){var e=Object(o.useState)([]),n=Object(p.a)(e,2),t=n[0],r=n[1],a=T(),i=function(){var e=Object(j.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,C(c.Questions);case 3:(t=e.sent)&&(t.forEach((function(e){var t=e.data(),r=t.id,a=t.answers,i=t.correctAnswer,s=t.question,c=[];c.push({id:0,answer:a[0]},{id:1,answer:a[1]},{id:2,answer:a[2]}),n.push({id:r,answers:c,correctAnswer:parseFloat(i),question:s})})),r(n),a(he(s.Idle)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){a(he(s.Loading)),i()}),[]),t}(),f=Object(g.g)();Object(o.useEffect)((function(){O()}),[t.score,t.currentQuestion]),Object(o.useEffect)((function(){e(Je({questionRandomIds:i,questions:h}))}),[h]);var O=function(){var n=Object(j.a)(m.a.mark((function n(){var r,i;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(5===t.currentQuestion&&a.id.length>2)){n.next=7;break}return e(he(s.Loading)),r=t.score+a.pointsScored,i=a.totalGames+1,n.next=6,rn(a.id,i,r);case 6:e(he(s.Idle));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(n){n.preventDefault();var r=t.currentQuestion;t.chosenAnswer===t.questions[r].correctAnswer&&e(Ze()),b(t.questions[r].correctAnswer),setTimeout(function(){var n=Object(j.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(Ye()),b(null);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),800)};return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(L,{children:r.status===s.Idle?function(){if(!(t.currentQuestion<=4))return Object(M.jsxs)(cn,{children:[Object(M.jsxs)("h1",{children:[t.score,"/",t.currentQuestion]}),t.score>2?Object(M.jsx)("h2",{children:"Awesome!"}):Object(M.jsx)("h2",{children:"Dont Give Up!"}),Object(M.jsx)(P,{value:"Next Game",size:"1.5rem",onClick:function(){return f.push("/game")}})]});if(t.questions){var n=t.currentQuestion,r=t.questions[n].answers;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(tn,{currentQuestion:n}),Object(M.jsxs)(an,{children:[Object(M.jsx)("h2",{children:t.questions[n].question}),r.map((function(a){return Object(M.jsx)(sn,{isChosen:a.id===t.chosenAnswer,correctAnswer:a.id===l,onClick:function(){return n=r[a.id].id,void e(_e(n));var n},children:t.questions[n].answers[a.id].answer},a.id)}))]}),Object(M.jsx)(P,{onClick:x,value:"Submit",size:"1.5rem"})]})}}():Object(M.jsx)(xe,{size:"10"})})})},un=O.b.div(te||(te=Object(h.a)(["\n  text-align: center;\n  width: 100%;\n"]))),dn=Object(O.b)(un)(re||(re=Object(h.a)(["\n  width: 75%;\n  padding: .7rem .5rem;\n  background-color: rgba(0, 0, 0, .65);\n  border-radius: 2rem;\n  margin: 1.5rem 0 1rem;\n\n  h2 {\n    color: green;\n  }\n\n  label {\n    display: flex;\n    justify-content: center;\n    margin: .7rem .5rem;\n  }\n\n  p {\n    margin: 0 .5rem;\n    font-weight: 600;\n  }\n"]))),ln=E.b().shape({question:E.d().min(5,"Question should be at least 5 characters").max(100,"Too long").required("Question is required"),correctAnswer:E.a().nullable().required("Correct Answer is required"),0:E.d().min(2,"Minimum of 2 characters").max(35,"Maximum of 35 characters").required("Answer is required"),1:E.d().min(2,"Minimum of 2 characters").max(35,"Maximum of 35 characters").required("Answer is required"),2:E.d().min(2,"Minimum of 2 characters").max(35,"Maximum of 35 characters").required("Answer is required")}),bn=function(){var e=T(),n=B((function(e){return e})).app,t=Object(z.d)({resolver:Object(I.a)(ln),mode:"onBlur"}),r=t.register,a=t.handleSubmit,i=t.formState,c=i.errors,u=i.isDirty,d=i.isValid,l=Object(o.useState)(),b=Object(p.a)(l,2),h=b[0],f=b[1],g=Object(o.useState)([]),O=Object(p.a)(g,2),v=O[0],k=O[1],q=Object(o.useState)(),y=Object(p.a)(q,2),C=(y[0],y[1]),A=function(e){f(Object(w.a)(Object(w.a)({},h),{},Object(x.a)({},e.currentTarget.name,e.currentTarget.value)))},E=function(e){k(Object(w.a)(Object(w.a)({},v),{},Object(x.a)({},parseFloat(e.currentTarget.id),e.currentTarget.value))),f(Object(w.a)(Object(w.a)({},h),{},{answers:v}))},Q=function(){var n=Object(j.a)(m.a.mark((function n(t){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(he(s.Loading)),n.prev=1,n.next=4,S(h);case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),e(he(s.Idle)),C(n.t0.message);case 10:e(he(s.Idle));case 11:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}();return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(L,{onSubmitHandler:a(Q),children:[Object(M.jsx)("h1",{children:"Add Question"}),Object(M.jsx)(D,{type:"text",name:"question",autoComplete:"off",register:Object(w.a)({},r("question",{required:!0})),onChange:A}),c.question&&Object(M.jsx)(qe,{value:c.question.message}),Object(M.jsxs)(un,{children:[Object(M.jsx)("h2",{children:"Answers"}),Object(M.jsx)(D,{type:"text",id:"0",name:"0",placeholder:"1",autoComplete:"off",register:Object(w.a)({},r("0",{required:!0})),onChange:E},0),c[0]&&Object(M.jsx)(qe,{value:c[0].message}),Object(M.jsx)(D,{type:"text",id:"1",name:"1",placeholder:"2",autoComplete:"off",register:Object(w.a)({},r("1",{required:!0})),onChange:E},1),c[1]&&Object(M.jsx)(qe,{value:c[1].message}),Object(M.jsx)(D,{type:"text",id:"2",name:"2",placeholder:"3",autoComplete:"off",register:Object(w.a)({},r("2",{required:!0})),onChange:E},2),c[2]&&Object(M.jsx)(qe,{value:c[2].message})]}),Object(M.jsxs)(dn,{children:[Object(M.jsx)("h2",{children:"Correct Answer "}),[{id:0,value:"Answer 1"},{id:1,value:"Answer 2"},{id:2,value:"Answer 3"}].map((function(e){return Object(M.jsxs)("label",{htmlFor:e.value,children:[Object(M.jsx)("input",Object(w.a)(Object(w.a)({type:"radio",value:e.id,id:e.value},r("correctAnswer",{required:!0})),{},{onChange:A}),e.id),Object(M.jsx)("p",{children:e.value})]},e.id)})),c.correctAnswer&&Object(M.jsx)(qe,{value:c.correctAnswer.message})]}),n.status===s.Loading?Object(M.jsx)(xe,{}):Object(M.jsx)(P,{value:"Submit",size:"1.5rem",disabled:!d||!u})]})})},mn=O.b.div(ae||(ae=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: ",";\n\n@media"," {\n  flex-direction: row;\n}\n"])),(function(e){return e.margin?e.margin:"10vh 0 0"}),Ne.laptop),jn=function(e){return Object(M.jsx)(mn,{margin:e.margin,children:e.children})},pn=O.b.div(ie||(ie=Object(h.a)(["\n  width: 75vw;\n  max-width: 40rem;\n  margin-bottom: 5vh;\n"]))),hn=O.b.div(se||(se=Object(h.a)(["\n  margin: 1.5rem .5rem;\n  padding: 1rem .8rem;\n  background-color: rgba(0, 0, 0, .65);\n  text-align: center;\n  border-bottom: 2px solid orange;\n\n  h2 {\n    margin: 1rem .1rem;\n    color: green;\n  }\n"]))),fn=O.b.div(ce||(ce=Object(h.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),gn=function(){var e=Object(o.useState)([]),n=Object(p.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(!1),i=Object(p.a)(a,2),s=i[0],u=i[1];Object(o.useEffect)((function(){d()}),[]);var d=function(){var e=Object(j.a)(m.a.mark((function e(){var n,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,C(c.Questions);case 3:n=e.sent,t=[],n&&(n.forEach((function(e){var n=e.data(),r=n.id,a=n.answers,i=n.correctAnswer,s=n.question,c=[];c.push({id:0,answer:a[0]},{id:1,answer:a[1]},{id:2,answer:a[2]}),t.push({id:r,answers:c,correctAnswer:i,question:s})})),r(t)),u(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(jn,{children:s?Object(M.jsxs)(fn,{children:[Object(M.jsx)(xe,{size:"10"})," "]}):Object(M.jsx)(pn,{children:t.map((function(e){return Object(M.jsxs)(hn,{children:[Object(M.jsxs)("h2",{children:["Q: ",e.question]}),Object(M.jsx)("h3",{children:e.answers[e.correctAnswer].answer})]},e.id)}))})})})},On=O.b.div(oe||(oe=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem 0;\n  width: 50vw;\n  height: 50vw;\n  max-width: 25rem;\n  max-height: 25rem;\n  background-color: rgba(0, 0, 0, 0.65);\n  transition: all .2s;\n\n  h1 {\n    margin-bottom: .7rem;\n    text-align: center;\n    font-size: 2.4rem;\n  }\n\n  :hover {\n    transform: scale(1.05);\n  }\n\n  :active, :focus {\n    transform: scale(.98);\n    border: .4rem solid orange;\n  }\n\n@media"," {\n  margin: 15vh 5vw;\n}\n"])),Ne.laptop),xn=function(){var e=Object(g.g)();return Object(M.jsxs)(jn,{children:[Object(M.jsx)(On,{onClick:function(){return e.push("/game")},children:Object(M.jsx)("h1",{children:"Play"})}),Object(M.jsx)(On,{onClick:function(){return e.push("/user")},children:Object(M.jsx)("h1",{children:"Profile"})})]})},wn=t.p+"static/media/question-mark-background.715c47a3.jpg",vn=O.b.button(ue||(ue=Object(h.a)(["\n  position: fixed;\n  top: 5%;\n  left: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 101;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: .2rem;\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n    background-color: ",";\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n\n@media"," {\n  width: 2.5rem;\n  height: 2.5rem;\n\n  div {\n    width: 2.5rem;\n    height: .25rem;\n  }\n} @media"," {\n  width: 3rem;\n  height: 3rem;\n  left: 2rem;\n\n  div {\n    width: 3rem;\n    height: .3rem;\n  }\n} @media"," {\n  width: 4rem;\n  height: 4rem;\n  left: 3rem;\n\n  div {\n    width: 4rem;\n    height: .4rem;\n  }\n}\n"])),(function(e){return e.isOpen?"black":"white"}),(function(e){return e.isOpen?"rotate(45deg) ":"rotate(0)"}),(function(e){return e.isOpen?"0":"1"}),(function(e){return e.isOpen?"translateX(-20px) ":"translateX(0)"}),(function(e){return e.isOpen?"rotate(-45deg) ":"rotate(0)"}),Ne.mobileM,Ne.tablet,Ne.laptopL),kn=function(e){return Object(M.jsxs)(vn,{isOpen:e.isOpen,onClick:e.setIsOpen,children:[Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{})]})},qn=O.b.nav(de||(de=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: orange;\n  height: 100%;\n  width: 100%;\n  text-align: left;\n  z-index: 100;\n  padding: 2rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  transform: ",";\n  font-size: 2rem;\n\n@media"," {\n  font-size: 2.5rem;\n}\n"])),(function(e){return e.isOpen?"translateX(0)":"translateX(-100%)"}),Ne.tablet),yn=Object(O.b)(f.b)(le||(le=Object(h.a)(["\n  padding: 2rem 0;\n  margin: 0 auto;\n  text-align: center;\n  color: black;\n  font-weight: bold;\n  letter-spacing: 0.5rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: color 0.2s linear;\n\n  &:hover {\n    color: white;\n  }"]))),Cn=function(e){return Object(M.jsxs)(qn,{isOpen:e.isOpen,children:[Object(M.jsx)(yn,{to:"/game",onClick:e.setIsOpen,children:"Game"}),Object(M.jsx)(yn,{to:"/user",onClick:e.setIsOpen,children:"Profile"}),Object(M.jsx)(yn,{to:"/questions",onClick:e.setIsOpen,children:"questions"}),Object(M.jsx)(yn,{to:"/",onClick:e.setIsOpen,children:"Home"})]})},An=function(){var e=B((function(e){return e})).app,n=T();return Object(M.jsxs)("div",{children:[Object(M.jsx)(kn,{isOpen:e.isMenuOpen,setIsOpen:function(){return n(fe())}}),Object(M.jsx)(Cn,{isOpen:e.isMenuOpen,setIsOpen:function(){return n(fe())}})]})},Sn=Object(O.a)(be||(be=Object(h.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background: url(",") no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n\n  @media"," {\n    font-size: 71.25%;\n  } @media"," {\n    font-size: 81.25%;\n  } @media"," {\n    font-size: 100%;\n  }\n  }\n\n  body {\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n    letter-spacing: 1.5px;\n    color: white;\n    overflow: ",";\n  }\n"])),wn,Ne.mobileM,Ne.tablet,Ne.laptopL,(function(e){return e.isMenuOpen?"hidden":"visible"}));var zn=function(){var e=T(),n=B((function(e){return e})).app,t=Object(o.useState)({id:"",name:"",email:"",isAuth:!1,pointsScored:0,totalGames:0}),r=Object(p.a)(t,2),a=r[0],i=r[1];Object(o.useEffect)((function(){s()}),[]),Object(o.useEffect)((function(){e(Ee(a))}),[a,e]);var s=function(){return k.onAuthStateChanged(function(){var e=Object(j.a)(m.a.mark((function e(n){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=5;break}return e.next=3,A(n.uid);case 3:(t=e.sent)&&i({id:t.id,email:t.email,name:t.name,isAuth:!0,pointsScored:t.pointsScored,totalGames:t.totalGames});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Sn,{isMenuOpen:n.isMenuOpen}),Object(M.jsxs)(f.a,{children:[Object(M.jsx)(An,{}),Object(M.jsxs)(g.d,{children:[Object(M.jsx)(g.b,{path:"/user",component:Ue}),Object(M.jsx)(g.b,{path:"/register",component:Ae}),Object(M.jsx)(g.b,{path:"/login",component:Ge}),Object(M.jsx)(g.b,{exact:!0,path:"/questions",component:gn}),Object(M.jsx)(g.b,{exact:!0,path:"/questions/add",component:bn}),Object(M.jsx)(g.b,{path:"/game",component:on}),Object(M.jsx)(g.b,{path:"/",component:xn})]})]})]})},In=Object(R.a)({reducer:{app:ge,user:Qe,game:$e}});l.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)(H.a,{store:In,children:Object(M.jsx)(zn,{})})}),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.c9eb791c.chunk.js.map