DGE.Text=DGE.extend(DGE.Sprite,function(conf){this.init(conf);this.text=DGE.attrMethod(this,function(text,format){switch(format){case'bbCode':text=DGE.formatBBCode(text);break;case'number':text=DGE.formatNumber(text);break;}
this._node.innerHTML=text;this._width=this._node.offsetWidth;this._height=this._node.offsetHeight;return this;});this.wrap=DGE.attrMethod(this,function(wrap){return this.setCSS('white-space',(wrap?'normal':'nowrap'));});for(var k in DGE.Text.defaults){conf[k]=((k in conf)?conf[k]:DGE.Text.defaults[k]);this[k](conf[k]);}
if(conf.shadow!==undefined)this.shadow(conf.shadow);if(conf.text!==undefined)this.text(conf.text);if(conf.wrap!==undefined)this.wrap(conf.wrap);});DGE.Text.prototype.color=function(color){return this.setCSS('color',color);};DGE.Text.prototype.font=function(font){return this.setCSS('font-family',font);};DGE.Text.prototype.shadow=function(rule){return this.setCSS('text-shadow',rule);};DGE.Text.prototype.size=function(px){this._width=this._node.offsetWidth;this._height=this._node.offsetHeight;return this.setCSS('font-size',px+'px');};DGE.Text.prototype.text=function(){};DGE.Text.prototype.wrap=function(){};DGE.Text.defaults={color:'#FFF',font:'Sans-Serif',size:10};