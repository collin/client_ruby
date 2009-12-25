# class SampleClass
#   def initialize(greeted)
#     @greeted = greeted
#   end
#   
#   def hello
#     puts "Hello #{@greeted}!"
#   end
# end
# 
# class AnotherClass < SampleClass
#   @class_ivar = "classy"
#   butter = "toast"
#   def hello
#     puts "OMG"
#   end
# end
# 
# def RubyObject.new(*arguments, &block)
#   initialize(*arguments, &block)
# end
# 
# # SampleClass.new.hello
# 
# whatwhat = "INNABUTT"

raise "HolkyFuck" if block_given?

# what = Array.new
# 
# def argscat(*arg)
#   true
# end
# 
# module Nanotest
#   extend self
#  
#   @failures, @dots = [], []
#  
#   def assert(msg=nil, file=nil, line=nil, &block)
#     unless block.call
#       file ||= caller.first.split(':')[0]
#       line ||= caller.first.split(':')[1]
#       @failures << "(%s:%0.3d) %s" % [file, line, msg || "assertion failed"]
#       @dots << 'F'
#     else
#       @dots << '.'
#     end
#   end
# end
# 
