# Instructions :
# Consider this list

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.



from translate import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translator = Translator(to_lang="en", from_lang="fr")


def translate(word):
    return translator.translate(word)


result = {k: translate(k) for k in french_words}
print(result)



    