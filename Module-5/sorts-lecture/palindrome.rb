# Write a function that takes in a string, and returns true/false if it is a palindrome
# A palindrome is a phrase like "race car". Forward and back it's the same word
# race car
# rac ecar

# racecar
# racecar


def is_palindrome?(string)
  no_spaces_input = string.gsub(" ","") # 5
  lowercase_no_spaces_input = no_spaces_input.downcase() # 5

  reversed_lowercase_string = lowercase_no_spaces_input.reverse() # 5

  # 15 = 3(5), or 5+5+5, 3n. O(n)

  return reversed_lowercase_string == lowercase_no_spaces_input
end

puts(is_palindrome?("a"))



# [3,1,2]
# First Pass
# [3,1,2] compare 3 and 1. 3 is greater than 1, so swap
# [1,3,2] compare 3 and 2. 3 is greater than 2, so swap
# [1,2,3]
# Second Pass
# [1,2,3] compare 1 and 2. 1 is less than 2, no swap
# [1,2,3] compare 2 and 3. 2 is less than 3, no swap
# return [1,2,3]

def bubble_sort(array_to_be_sorted)
  swapped = true
  counter = 0
#  puts(array_to_be_sorted.inspect)
  while(swapped)
    counter+=1
    swapped = false
    puts "*****PASS********"
    array_to_be_sorted.each_with_index do |item, idx|
      counter+=1
      if (idx+1 >= array_to_be_sorted.size)
        break
      end
      puts "#######SWAP TEST#########"

      compare = array_to_be_sorted[idx]>array_to_be_sorted[idx+1]
      if (compare)
        temp = array_to_be_sorted[idx]
        array_to_be_sorted[idx] = array_to_be_sorted[idx+1]
        array_to_be_sorted[idx+1]=temp
        swapped = true
      end
      puts swapped
     puts(array_to_be_sorted.inspect)
    end
  end
  puts counter
  return array_to_be_sorted
end

puts(bubble_sort([5,1,4,2,8]).inspect)
