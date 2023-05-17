# import os
# dir_path = os.path.dirname(os.path.realpath(__file__))

# with open((dir_path+"\\the_stranger.txt"), "r") as text:
#      print(text.read())


# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. 
# A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

class Text:
    def __init__(self, text):
        self.text = text

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

    def frequency(self, word):
        print(f"The word {word} appears {self.text.count(word)} times in the text.")
        return self.text.count(word)
    
    def most_common(self):
        words = self.text.split()
        most_common = ""
        for word in words:
            if words.count(word) > words.count(most_common):
                most_common = word
        print(f"The most common word is {most_common}.")
        return most_common
    
    def unique_words(self):
        words = self.text.split()
        unique_words = []
        for word in words:
            if word not in unique_words:
                unique_words.append(word)
        print(f"The unique words are {unique_words}.")
        return unique_words
    
# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
# Now, use the provided the_stranger.txt file and try using the class you created above.


    # @classmethod
    # def from_file(cls, file):
    #     with open(file, "r") as f:
    #         text = f.read()
    #     return cls(text)
    
import os
# dir_path = os.path.dirname(os.path.realpath(__file__))

# with open((dir_path+"\\the_stranger.txt"), "r") as text:
#      print(text.read())


# text = Text.from_file("the_stranger.txt")
# text.frequency("the")
# text.most_common()
# text.unique_words()

print(os.getcwd())






# text = Text("A good book would sometimes cost as much as a good house.")
# text.frequency("good")
# text.most_common()
# text.unique_words()
