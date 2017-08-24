class Node
    attr_accessor :data, :next
end

head = Node.new
head.data = "a"

next_thing = Node.new
next_thing.data = "b"

another_node = Node.new
another_node.data = "c"

head.next = next_thing
next_thing.next = another_node

# current = head
# # current = "a"
# loop do
#     puts current.data
#     # 1st: puts "a"
#     # 2nd: puts "b"
#     break if current.next.nil?
#     # 1st: a.next == "b". So no break
#     # 2nd: b.next == nil. BREAK

#     current = current.next
#     # current = "b"
# end

###################
#Insert at the beginning
##################

new_node = Node.new
new_node.data = "NEW"
new_node.next = head
head = new_node

################
# Insert at the end
#################
#


current = head
tail = nil
loop do
#    puts current.data
    if current.next.nil? 
        tail = current
        break
    end

    current = current.next
end
new_end_node = Node.new
new_end_node.data = "END"
tail.next = new_end_node


current = head
loop do
    puts current.data
    break if current.next.nil?

    current = current.next
end

