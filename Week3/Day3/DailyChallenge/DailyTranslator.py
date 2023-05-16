# Instructions :
# Consider this list

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 

from translate import Translator
translator= Translator(to_lang="English")
for i in french_words:
    translation = translator.translate(i)
    print(translation)

    