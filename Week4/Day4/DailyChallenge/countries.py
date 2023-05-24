# Using this API: https://restcountries.com/ create the functionality which will write 10 random countries to your database in Python .
# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import requests
import random
import psycopg2

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    host="localhost",
    database="countries",
    user="postgres",
    password="1235846Qq"
)
cursor = conn.cursor()

# Create a table to store country data if it doesn't exist
cursor.execute('''
    CREATE TABLE IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        capital VARCHAR(50) NOT NULL,
        flag VARCHAR(50) NOT NULL,
        subregion VARCHAR(50) NOT NULL,
        population INTEGER
    )
''')
               
# Get all countries from the API
response = requests.get('https://restcountries.com/v3.1/all') # Get all countries
response.raise_for_status() # Check for errors
response_json = response.json() # List of dictionaries


# Iterate over the selected countries and insert data into the database
for i in range(10):
    choice = random.choice(response_json)
    name = choice['name']['official'].replace("'","")
    capital = choice['capital'][0].replace("'","")
    flag = choice['flags']['png']
    subregion = choice['subregion'].replace("'","")
    population =  choice['population']
    query = f"INSERT INTO countries (name, capital, flag, subregion, population)" \
            f"VALUES ('{name}', '{capital}', '{flag}', '{subregion}', '{population}');"
    cursor.execute(query)
    conn.commit()

# Commit the changes and close the connection
conn.commit()
conn.close()
