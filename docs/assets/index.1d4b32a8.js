var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(s,t,n)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;import{o as l,c,a as o,w as d,F as u,u as m,r as p,b,d as g,m as f,t as h,e as A,p as S,f as v,g as T,h as w,i as x,j as y,k,l as z,n as D,q as _,s as X}from"./vendor.d6717ee5.js";const E=b("Selection"),N={expose:[],setup:e=>(m().commit("runTimeLoop"),(e,s)=>{const t=p("router-link"),n=p("router-view");return l(),c(u,null,[o(t,{to:"/training-selection"},{default:d((()=>[E])),_:1}),o(n)],64)})},C={push:[{id:1,name:"Bench press / Military press",disabledName:"",sets:4,currentSet:1,reps:"5"},{id:2,name:"Military press / Bench press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Incline dumbbell press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Triceps pushdowns",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:5,name:"Overhead triceps extensions",disabledName:"",sets:3,currentSet:1,reps:"8-12"}],pull:[{id:1,name:"Deadlift / Barbell rows",disabledName:"Pullups",sets:4,currentSet:1,reps:"5"},{id:2,name:"Pull Ups",disabledName:"Chest supported rows",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Cable rows",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Face pulls",disabledName:"",sets:3,currentSet:1,reps:"15-20"},{id:5,name:"Curls",disabledName:"",sets:3,currentSet:1,reps:"8-12"}],legs:[{id:1,name:"Squat",disabledName:"Bulgarian Split Squats",sets:4,currentSet:1,reps:"5"},{id:2,name:"Romanian Deadlift",disabledName:"Lunges",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Leg press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Leg curls",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:5,name:"Calf raises",disabledName:"",sets:3,currentSet:1,reps:"AMRAP"}],abs:[{id:1,name:"Abs wheel / V-sit / Leg raises",sets:4,currentSet:1,reps:"AMRAP"}]},F=g({state:()=>({currentTraining:null,currentExo:null,restingTime:0,backDisabled:!1,trainingList:[{id:"push",name:"push",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/286e81cd-dcb6-43f2-98e4-0e0cb4316d60/man-training-gym_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143037Z&X-Amz-Expires=86400&X-Amz-Signature=d376252a949e67970937bf515f9e8946bc8632c441f1cb9bb8cd48a46379c20e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22man-training-gym_1.svg%22"},{id:"pull",name:"pull",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/eeef675e-fabd-43d7-8533-5f951fe5833b/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143049Z&X-Amz-Expires=86400&X-Amz-Signature=f626d11920518748f7db6b59f45b7df05b8702bb2a1c2bfdec0f25ac0d711fff&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.svg%22"},{id:"legs",name:"legs",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f2553d03-ce12-47b6-a8a4-8deecf0c3785/bodybuilding-concept-with-side-view-of-man-and-barbell_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143029Z&X-Amz-Expires=86400&X-Amz-Signature=55d5398cf289197b17654270e1345af512079997676b259812cc6a0f5048e2f2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bodybuilding-concept-with-side-view-of-man-and-barbell_1.svg%22"},{id:"abs",name:"abs",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a22ca190-06d9-476f-90f5-cda82bb4b092/pexels-li-sun-2294363_1.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T143015Z&X-Amz-Expires=86400&X-Amz-Signature=71ba9bbef4bc0335f07457bf56b227ce5d6fb594cef1821bb46026319ce03648&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-li-sun-2294363_1.svg%22"}]}),mutations:{endSet(e){if(null!==e.currentExo){if(e.currentExo.currentSet<e.currentExo.sets)e.currentExo.currentSet++;else{const s=C[e.currentTraining].find((s=>s.id===e.currentExo.id+1));null==s?(e.currentTraining=null,e.currentExo=null):(e.currentExo=s,e.currentExo.currentSet=1)}e.restingTime=90}},skipRest(e){e.restingTime=0},setTraining(e,s){e.restingTime=0,e.currentTraining=s,e.currentExo=C[s][0],e.currentExo.currentSet=1},toggleBackDisabled(e){e.backDisabled=!e.backDisabled},runTimeLoop(e){setInterval((function(){e.restingTime-=1}),1e3)}},getters:{isResting:e=>e.restingTime>0,isTrainingSelected:e=>!!e.currentTraining}});const O={props:{training:{type:Object,required:!0,validator:function(e){return e.name&&e.id&&e.pictureUrl}}},methods:(H=((e,s)=>{for(var t in s||(s={}))a.call(s,t)&&r(e,t,s[t]);if(n)for(var t of n(s))i.call(s,t)&&r(e,t,s[t]);return e})({},f(["setTraining"])),I={goToTraining(){this.setTraining(this.training.id),this.$router.push({name:"exercise"})},goToDetails(){this.$router.push({name:"training-details",params:{id:this.training.id}})}},s(H,t(I)))};var H,I;const L=A()(((e,s,t,n,a,i)=>(l(),c("div",{class:"card",style:{background:"center / cover no-repeat url("+t.training.pictureUrl+")"}},[o("div",{class:"name",onClick:s[1]||(s[1]=(...e)=>i.goToTraining&&i.goToTraining(...e))},h(t.training.name),1),o("div",{class:"details",onClick:s[2]||(s[2]=(...e)=>i.goToDetails&&i.goToDetails(...e))},"details")],4))));O.render=L,O.__scopeId="data-v-1dd98406";S("data-v-5300679a");const j=o("h1",null,"Choose Your Training",-1),M={class:"trainings"},P={class:"back-container"},q=o("label",{for:"backDisabled"},"My back hurts",-1);v();const K={expose:[],setup(e){const s=m();y();const t=T((()=>s.state.trainingList)),n=T((()=>s.state.backDisabled)),a=()=>s.commit("toggleBackDisabled");return(e,s)=>(l(),c(u,null,[j,o("div",M,[(l(!0),c(u,null,w(x(t),(e=>(l(),c(O,{key:e,training:e},null,8,["training"])))),128))]),o("div",P,[o("input",{type:"checkbox",id:"backDisabled",onChange:a,checked:x(n)},null,40,["checked"]),q])],64))},__scopeId:"data-v-5300679a"};S("data-v-6428b13a");const R=o("h1",null,"Training Details",-1),U={class:"exercises"},B={key:0},Y=o("p",null,null,-1);v();const G={expose:[],setup(e){const s=k(),t=C[s.params.id];return(e,n)=>(l(),c(u,null,[R,o("h2",null,h(x(s).params.id),1),o("div",U,[(l(!0),c(u,null,w(x(t),(e=>(l(),c("div",{key:e,class:"exercise"},[o("h3",null,h(e.name),1),e.disabledName?(l(),c("p",B,h("Disabled alternative: "+e.disabledName),1)):z("",!0),o("p",null,h("Nb of sets: "+e.sets),1),o("p",null,h("reps: "+e.reps),1),Y])))),128))])],64))},__scopeId:"data-v-6428b13a"};S("data-v-66a553be");const W={class:"loading-bar"};v();const Z={expose:[],setup(e){const s=m(),t=T((()=>s.state.restingTime)),n=T((()=>100-s.state.restingTime/90*100));return(e,s)=>(l(),c(u,null,[o("div",null,"Rest: "+h(x(t))+" s",1),o("div",W,[o("div",{class:"loading-bar__fill",style:`width: ${x(n)}%`},null,4)])],64))},__scopeId:"data-v-66a553be"},$={expose:[],setup(e){const s=m(),t=T((()=>s.state.currentExo)),n=T((()=>s.state.backDisabled));return(e,s)=>(l(),c("div",null,[o("h2",null,h(x(n)&&x(t).disabledName||x(t).name),1),o("div",null,"Set "+h(x(t).currentSet)+" of "+h(x(t).sets),1),o("div",null,h(x(t).reps)+" reps",1)]))}};S("data-v-6730eb53");const V=o("h1",null,"Training",-1),J=o("p",null,"------",-1),Q={key:2};v();const ee={expose:[],setup(e){const s=m(),t=y(),n=()=>{null===s.state.currentExo?t.push({name:"training-selection"}):s.commit("endSet")},a=()=>s.commit("skipRest"),i=T((()=>s.getters.isResting)),r=T((()=>s.state.currentExo));return(e,s)=>(l(),c(u,null,[V,J,x(i)?(l(),c(Z,{key:0,class:"rest-time"})):z("",!0),x(i)?(l(),c("button",{key:1,onClick:a},"Skip rest")):z("",!0),x(i)?(l(),c("div",Q,"Up next :")):z("",!0),x(r)?(l(),c($,{key:3,class:"exo-infos"})):z("",!0),x(i)?z("",!0):(l(),c("button",{key:4,onClick:n,class:"done-btn"},"Done"))],64))},__scopeId:"data-v-6730eb53"},se=[{path:"/",redirect:"/training-selection"},{path:"/training-details/:id",name:"training-details",component:G},{path:"/training-selection",name:"training-selection",component:K},{path:"/exercise",name:"exercise",component:ee}],te=D({history:_(),routes:se}),ne=X(N);ne.use(F),ne.use(te),ne.mount("#app");