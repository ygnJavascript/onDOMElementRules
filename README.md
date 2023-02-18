# onDOMElementRules
On Any DOM Element created or removed run your own cods! (for userscript extension developers)

<h1>CDN</h1><p>
  <code><script src="https://raw.githubusercontent.com/ygnJavascript/onDOMElementRules/main/myrules.js"></script></code>
</p>

<h1>For TAMPERMONKEY</h1><p>
  <code>// @require      https://raw.githubusercontent.com/ygnJavascript/onDOMElementRules/main/myrules.js</code>
</p>

<h1>How To Use?</h1><p>
  <h3>Listen for On Elment Created</h3><p>
  ```js
  newRule("class","content",(element)=>{
    console.log("Element Has Created: "+element);
  });
  ```
</p>
<h3>Listen for On Elment Removed</h3><p>
  ```js
  newRule("id","screenRoom",(element)=>{
    console.log("Element Has Removed: "+element);
  },"removedNodes");
  ```
</p>
</p>
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
