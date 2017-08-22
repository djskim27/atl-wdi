# # Challenge 1
# a = true

# b = false

# puts a = b

# puts a = !b

# # Challenge 2

# c = NIL

# p c 

# puts "#{c} nil was here"

# print c

# puts c.class

# # Challenge 3
# d = 10

# puts d

# e = 10.1

# puts e

# d = e

# puts d

# # Challenge 4

# christine = "Hi, I'm Christine"
# likesTo = "long walks on the beach, kinda. "

# tims = christine

# puts "#{tims} and I like #{likesTo}"

# g = "2"

# gToNumber = 2

# puts g.to_i + gToNumber

# #Challenge 5
# integer = gets.chomp.to_i
# puts integer * 2

# puts "What is your name?"
# name = gets.chomp

# puts "What do you like to do?"
# likeToDo = gets.chomp

# puts "#{name} likes to #{likeToDo}"

# #Challenge 6
# myFirstArray = []
# myFirstArray = ['a','b','c','d','e',1,2,3,4]
# puts myFirstArray.last
# puts myFirstArray.first
# myFirstArray[1] = "Joe"
# myFirstArray[2] = 3
# myFirstArray.push(true)
# puts myFirstArray[3].class

# #Challenge 7
# myFavoriteAnimals = {
#     "Shark": "Fish",
#     "Kangaroo": "Mammal",
#     "Ant": "Insect",
#     "Eagle": "Bird",
#     "Edgar": "Beast"
# }

# myFavoriteAnimals[:"Edgar"] ="Bear"

# favoriteMovie = {}
# favoriteMovie[:"movie"] = "Home Alone"

#Challenge 8
firstRange = (1..10).to_a
secondRange = (1...1000).to_a

for number in firstRange do
    p number.to_s
end

x = 0
while x < 50
    puts secondRange[x]
    x += 1
end

newFirstRange = firstRange.each_index{|x| puts firstRange[x+2] * 2}


newFirstRange2 = firstRange.map do |value|
    if value.odd? == true 
        p value.to_s
    else 
        p value
        end
    end
 




