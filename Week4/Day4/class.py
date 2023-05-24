import psycopg2

# connect to the database
connection = psycopg2.connect(
    host="localhost",
    port = '5432', 
    database="Hollywood",
    user="postgres",
    password="1235846Qq"
)

# create a cursor
cursor = connection.cursor()

def get_all_actors():
    query = "SELECT * FROM actor"
    cursor.execute(query)
    result = cursor.fetchall()

    for actor in result:
        print(f"Name: {actor[1]} {actor[2]}. He is {actor[-1]}.")

get_all_actors()

# query = "SELECT * FROM actor"
# cursor.execute(query)
# result = cursor.fetchall()
# print(result)

# close the cursor
cursor.close()
connection.close()
