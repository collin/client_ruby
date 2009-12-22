class SampleClass
  def hello
    puts "HELLO", "WORLD"
  end
end

class AnotherClass < SampleClass
  def hello
    puts "OMG"
  end
end

def RubyObject.new(*arguments, &block)
  initialize(*arguments, &block)
end

SampleClass.new.hello