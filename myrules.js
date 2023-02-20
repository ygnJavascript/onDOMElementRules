window.listenRules=[];
window.rule={}
window.rule.f=(x)=>{return document.querySelector(x)}
window.rule.fa=(x)=>{return document.querySelectorAll(x)}
window.rule.new=(attr,attrName,code,type="addedNodes")=>{let nextObjmr={};nextObjmr.attr=attr;nextObjmr.attrName=attrName;nextObjmr.code=code;nextObjmr.type=type;window.listenRules.push(nextObjmr);}
let targetNodemr=document.querySelector("#content"),observer=new MutationObserver(mutations=>{mutations.forEach(mutation=>{window.listenRules.forEach(rule=>{mutation.type==='childList'&&mutation[rule.type].length>0?rule&&mutation[rule.type][0].getAttribute(rule.attr)==rule.attrName?rule.code(mutation[rule.type][0]):0:0})});});observer.observe(targetNodemr,{childList:true,subtree:true});
