import psycopg2


def manage_connection(query):
# connect to the database
    try:
        connection = psycopg2.connect(
            host="localhost",
            port = '5432', 
            database="Hollywood",
            user="postgres",
            password="1235846Qq"
        )

        with connection:
            with connection.cursor() as cursor:   #it will close the cursor automatically
                cursor.execute(query)
                result = cursor.fetchall()
                return result
            
    except:
        pass
    finally:
        connection.close() #it will close the connection automatically


# def get_all_actors():
#     query_user = "SELECT * FROM actor"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"Name: {actor[1]} {actor[2]}. He is {actor[-1]}.")

# get_all_actors()

def get_actors_salary_higher():
    query_user = "SELECT * FROM actor WHERE salary > 100000"
    result = manage_connection(query_user)

    for actor in result:
        print(f"Name: {actor[1]} {actor[2]}. His salary is {actor[-2]}.")

get_actors_salary_higher()