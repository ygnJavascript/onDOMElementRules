# onDOMElementRules
On Any DOM Element created or removed run your own cods! (for userscript extension developers)

<h1>CDN</h1><p>
  <code><script src="https://raw.githubusercontent.com/ygnJavascript/onDOMElementRules/main/myrules.js"></script></code>
</p>

<h1>For TAMPERMONKEY</h1><p>
  <code>// @require      https://raw.githubusercontent.com/ygnJavascript/onDOMElementRules/main/myrules.js</code>
</p>

<h1>How To Use?</h1><p>
<h2>Syntax</h2>
<p><code>let rule = window.rule;
rule.new(elementAttribute, elementAttributeName, function, eventType)</code></p><br>
<h2>Examples</h2>
  <h3>Listen for On Elment Created</h3><p>
  <code>rule.new("class","container",(element)=>{
    console.log("Element Has Created: "+element);
  });</code><br>
  <h3>Get Elements With Selector</h3><p>
  <code>rule.f(selector) //returns document.querySelector(selector)</code><br><br>
  <code>rule.fa(selector) //returns document.querySelectorAll(selector)</code><br>
</p>
<h3>Listen for On Element Removed</h3><p>
  <code>rule.new("class","container",(element)=>{
    console.log("Element Has Removed: "+element);
  },"removedNodes");</code>
</p>
</p>
