var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(s,t,n)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;import{o as l,c,a as o,w as d,F as u,u as p,r as m,b,d as g,m as h,t as f,e as A,p as S,f as T,g as v,h as w,i as x,j as y,k,l as z,n as D,q as _,s as X}from"./vendor.d6717ee5.js";const E=b("Selection"),N={expose:[],setup:e=>(p().commit("runTimeLoop"),(e,s)=>{const t=m("router-link"),n=m("router-view");return l(),c(u,null,[o(t,{to:"/training-selection"},{default:d((()=>[E])),_:1}),o(n)],64)})},C={push:[{id:1,name:"Bench press / Military press",disabledName:"",sets:4,currentSet:1,reps:"5"},{id:2,name:"Military press / Bench press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Incline dumbbell press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Triceps pushdowns",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:5,name:"Overhead triceps extensions",disabledName:"",sets:3,currentSet:1,reps:"8-12"}],pull:[{id:1,name:"Deadlift / Barbell rows",disabledName:"Pullups",sets:4,currentSet:1,reps:"5"},{id:2,name:"Pull Ups",disabledName:"Chest supported rows",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Cable rows",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Face pulls",disabledName:"",sets:3,currentSet:1,reps:"15-20"},{id:5,name:"Curls",disabledName:"",sets:3,currentSet:1,reps:"8-12"}],legs:[{id:1,name:"Squat",disabledName:"Bulgarian Split Squats",sets:4,currentSet:1,reps:"5"},{id:2,name:"Romanian Deadlift",disabledName:"Lunges",sets:3,currentSet:1,reps:"8-12"},{id:3,name:"Leg press",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:4,name:"Leg curls",disabledName:"",sets:3,currentSet:1,reps:"8-12"},{id:5,name:"Calf raises",disabledName:"",sets:3,currentSet:1,reps:"AMRAP"}],abs:[{id:1,name:"Abs wheel / V-sit / Leg raises",sets:4,currentSet:1,reps:"AMRAP"}]},F=g({state:()=>({currentTraining:null,currentExo:null,restingTime:0,backDisabled:!1,trainingList:[{id:"push",name:"push",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fcdd0f8e-6246-4fe3-9794-9092205167ad/man-training-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165826Z&X-Amz-Expires=86400&X-Amz-Signature=52b10ac7d9e9db6cb81b7796fcae624172d10d48d4112a0da77386df7a651f71&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22man-training-gym_1.png%22"},{id:"pull",name:"pull",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3c1c7f8c-e4ce-4db8-a4a1-d0a8b36333df/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165826Z&X-Amz-Expires=86400&X-Amz-Signature=e19c62dc705d2b72d5e0cb5eee4b582384084d9ab0139ae6f8a16eecadb2c1f0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-at-gym_1.png%22"},{id:"legs",name:"legs",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1407cd54-bf0f-480b-8d65-312d675954b6/bodybuilding-concept-with-side-view-of-man-and-barbell_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165824Z&X-Amz-Expires=86400&X-Amz-Signature=0f2e11ef2b726bc62bbbe77a6c91baf07d061619e410080556087d0dab5c1626&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bodybuilding-concept-with-side-view-of-man-and-barbell_1.png%22"},{id:"abs",name:"abs",pictureUrl:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7a6e02b-cfb0-4c0d-950d-1aded8d0ddf0/pexels-li-sun-2294363_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210809T165827Z&X-Amz-Expires=86400&X-Amz-Signature=cb9eff82418ad8458319ebdf055e618fad7c9321ff7140631381d6c247d82f2c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pexels-li-sun-2294363_1.png%22"}]}),mutations:{endSet(e){if(null!==e.currentExo){if(e.currentExo.currentSet<e.currentExo.sets)e.currentExo.currentSet++;else{const s=C[e.currentTraining].find((s=>s.id===e.currentExo.id+1));null==s?(e.currentTraining=null,e.currentExo=null):(e.currentExo=s,e.currentExo.currentSet=1)}e.restingTime=90}},skipRest(e){e.restingTime=0},setTraining(e,s){e.restingTime=0,e.currentTraining=s,e.currentExo=C[s][0],e.currentExo.currentSet=1},toggleBackDisabled(e){e.backDisabled=!e.backDisabled},runTimeLoop(e){setInterval((function(){e.restingTime-=1}),1e3)}},getters:{isResting:e=>e.restingTime>0,isTrainingSelected:e=>!!e.currentTraining}});const O={props:{training:{type:Object,required:!0,validator:function(e){return e.name&&e.id&&e.pictureUrl}}},methods:(H=((e,s)=>{for(var t in s||(s={}))a.call(s,t)&&r(e,t,s[t]);if(n)for(var t of n(s))i.call(s,t)&&r(e,t,s[t]);return e})({},h(["setTraining"])),I={goToTraining(){this.setTraining(this.training.id),this.$router.push({name:"exercise"})},goToDetails(){this.$router.push({name:"training-details",params:{id:this.training.id}})}},s(H,t(I)))};var H,I;const L=A()(((e,s,t,n,a,i)=>(l(),c("div",{class:"card",style:{background:"center / cover no-repeat url("+t.training.pictureUrl+")"}},[o("div",{class:"name",onClick:s[1]||(s[1]=(...e)=>i.goToTraining&&i.goToTraining(...e))},f(t.training.name),1),o("div",{class:"details",onClick:s[2]||(s[2]=(...e)=>i.goToDetails&&i.goToDetails(...e))},"details")],4))));O.render=L,O.__scopeId="data-v-1dd98406";S("data-v-5300679a");const j=o("h1",null,"Choose Your Training",-1),M={class:"trainings"},P={class:"back-container"},q=o("label",{for:"backDisabled"},"My back hurts",-1);T();const K={expose:[],setup(e){const s=p();y();const t=v((()=>s.state.trainingList)),n=v((()=>s.state.backDisabled)),a=()=>s.commit("toggleBackDisabled");return(e,s)=>(l(),c(u,null,[j,o("div",M,[(l(!0),c(u,null,w(x(t),(e=>(l(),c(O,{key:e,training:e},null,8,["training"])))),128))]),o("div",P,[o("input",{type:"checkbox",id:"backDisabled",onChange:a,checked:x(n)},null,40,["checked"]),q])],64))},__scopeId:"data-v-5300679a"};S("data-v-6428b13a");const R=o("h1",null,"Training Details",-1),U={class:"exercises"},B={key:0},Y=o("p",null,null,-1);T();const G={expose:[],setup(e){const s=k(),t=C[s.params.id];return(e,n)=>(l(),c(u,null,[R,o("h2",null,f(x(s).params.id),1),o("div",U,[(l(!0),c(u,null,w(x(t),(e=>(l(),c("div",{key:e,class:"exercise"},[o("h3",null,f(e.name),1),e.disabledName?(l(),c("p",B,f("Disabled alternative: "+e.disabledName),1)):z("",!0),o("p",null,f("Nb of sets: "+e.sets),1),o("p",null,f("reps: "+e.reps),1),Y])))),128))])],64))},__scopeId:"data-v-6428b13a"};S("data-v-66a553be");const W={class:"loading-bar"};T();const Z={expose:[],setup(e){const s=p(),t=v((()=>s.state.restingTime)),n=v((()=>100-s.state.restingTime/90*100));return(e,s)=>(l(),c(u,null,[o("div",null,"Rest: "+f(x(t))+" s",1),o("div",W,[o("div",{class:"loading-bar__fill",style:`width: ${x(n)}%`},null,4)])],64))},__scopeId:"data-v-66a553be"},$={expose:[],setup(e){const s=p(),t=v((()=>s.state.currentExo)),n=v((()=>s.state.backDisabled));return(e,s)=>(l(),c("div",null,[o("h2",null,f(x(n)&&x(t).disabledName||x(t).name),1),o("div",null,"Set "+f(x(t).currentSet)+" of "+f(x(t).sets),1),o("div",null,f(x(t).reps)+" reps",1)]))}};S("data-v-6730eb53");const V=o("h1",null,"Training",-1),J=o("p",null,"------",-1),Q={key:2};T();const ee={expose:[],setup(e){const s=p(),t=y(),n=()=>{null===s.state.currentExo?t.push({name:"training-selection"}):s.commit("endSet")},a=()=>s.commit("skipRest"),i=v((()=>s.getters.isResting)),r=v((()=>s.state.currentExo));return(e,s)=>(l(),c(u,null,[V,J,x(i)?(l(),c(Z,{key:0,class:"rest-time"})):z("",!0),x(i)?(l(),c("button",{key:1,onClick:a},"Skip rest")):z("",!0),x(i)?(l(),c("div",Q,"Up next :")):z("",!0),x(r)?(l(),c($,{key:3,class:"exo-infos"})):z("",!0),x(i)?z("",!0):(l(),c("button",{key:4,onClick:n,class:"done-btn"},"Done"))],64))},__scopeId:"data-v-6730eb53"},se=[{path:"/",redirect:"/training-selection"},{path:"/training-details/:id",name:"training-details",component:G},{path:"/training-selection",name:"training-selection",component:K},{path:"/exercise",name:"exercise",component:ee}],te=D({history:_(),routes:se}),ne=X(N);ne.use(F),ne.use(te),ne.mount("#app");