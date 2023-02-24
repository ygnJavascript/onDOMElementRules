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
<p><code>newRule(elementAttribute, elementAttributeName, function, eventType)</code></p><br>
<h2>Examples</h2>
  <h3>Listen for On Elment Created</h3><p>
  <code>newRule("class","container",(element)=>{
    console.log("Element Has Created: "+element);
  });</code><br>
<h3>Listen for On Element Removed</h3><p>
  <code>newRule("class","container",(element)=>{
    console.log("Element Has Removed: "+element);
  },"removedNodes");</code>
</p>
</p>
