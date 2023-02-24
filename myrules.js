window.listenRules=[];
function newRule(attr,attrName,code,type="addedNodes"){let nextObj={};nextObj.attr=attr;nextObj.attrName=attrName;nextObj.code=code;nextObj.type=type;window.listenRules.push(nextObj);}
let targetNodemr=document.querySelector("#content"),observer=new MutationObserver(mutations=>{mutations.forEach(mutation=>{window.listenRules.forEach(rule=>{mutation.type==='childList'&&mutation[rule.type].length>0?rule&&mutation[rule.type][0].getAttribute(rule.attr)==rule.attrName?rule.code(mutation[rule.type][0]):0:0})});});observer.observe(targetNodemr,{childList:true,subtree:true});
