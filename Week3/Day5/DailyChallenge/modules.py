# Instructions :
# Using the requests and time modules, create a function which returns the amount of time it takes a webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests
import time

def get_response_time(url):
    start = time.time()
    response = requests.get(url)
    end = time.time()
    return end - start  

print(get_response_time("https://www.google.com/"))
print(get_response_time("https://www.ynet.co.il/home/0,7340,L-8,00.html"))
print(get_response_time("https://www.imdb.com/"))
print(get_response_time("https://www.youtube.com/"))