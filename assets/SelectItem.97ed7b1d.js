import{B as i,bn as l,j as r,a1 as p,D as m,F as d,J as c,K as u,w as f,a5 as _,L as g}from"./vendor.bf608252.js";import{_ as b,a as v}from"./index.c606e28c.js";import{b as y}from"./index.ada01c8e.js";import"./index.7eaac5be.js";/* empty css               *//* empty css                */import"./index.429918d4.js";import"./index.95e19c25.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.8bf63d98.js";/* empty css               */import"./lock.b6b976f1.js";const C=i({name:"SelectItem",components:{Select:l},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=v("setting-select-item"),a=r(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const o=p("Select");return m(),d("div",{class:g(e.prefixCls)},[c("span",null,u(e.title),1),f(o,_(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var F=b(C,[["render",S],["__scopeId","data-v-b6196ee8"]]);export{F as default};