ClientRuby = {};
function RubyObject () {}
RubyObject.__contexts__ = [];
RubyObject.prototype. = RubyObject;

ClientRuby.define_class = function ClientRuby__define_class (context, name, superclass) {
  var klass = context[name] = function() {};
  
  klass.__contexts__ = [];
  klass.prototype.__contexts__ = [];
  
  if(!superclass) superclass = RubyObject;
  
  superclass.__contexts__.push(klass);
  superclass.prototype.__contexts__.push(klass.prototype);
}

ClientRuby.define_method = function ClientRuby__define_method (self, method_name, fun) {
  self[method_name] = fun;

  var context, contexts = self.__contexts__;
  for(context in contexts) define_method(contexts[context], method_name, fun); // DO THIS: if(contexts.hasOwnProperty(context)) 
}

ClientRuby.undefine_method = function ClientRuby__undefine_method (self, method_name) {
  delete self[method_name];
  
  var context, contexts = self.__contexts__;
  for(context in contexts) undefine_method(contexts[contexts], method_name); // DO THIS: if(contexts.hasOwnProperty(context)) 
}

ClientRuby.extend_module = function ClientRuby__extend_module (self, module) {
  var method;
  for(method in module) define_method(self, method, module[method]); // DO THIS: if(module.hasOwnProperty(method))
}

ClientRuby.include_module = function ClientRuby__include_module (self, module) {
  extend_module(self.prototype, module.prototype);
}