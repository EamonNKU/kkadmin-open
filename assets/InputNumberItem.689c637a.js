import{B as a,bz as o,a1 as p,D as m,F as i,J as u,K as l,w as c,a5 as d,L as _}from"./vendor.bf608252.js";/* empty css               */import{_ as f,a as b}from"./index.c606e28c.js";import{b as g}from"./index.ada01c8e.js";import"./index.7eaac5be.js";/* empty css               *//* empty css                */import"./index.429918d4.js";import"./index.95e19c25.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.8bf63d98.js";/* empty css               */import"./lock.b6b976f1.js";const v=a({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=b("setting-input-number-item");function n(r){e.event&&g(e.event,r)}return{prefixCls:t,handleChange:n}}});function C(e,t,n,r,I,N){const s=p("InputNumber");return m(),i("div",{class:_(e.prefixCls)},[u("span",null,l(e.title),1),c(s,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}var H=f(v,[["render",C],["__scopeId","data-v-4c1dd0d9"]]);export{H as default};