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
                 if "SELECT" in query:
                    cursor.execute(query)
                    result = cursor.fetchall()
                    return result
                 else:
                    cursor.execute(query)
                    connection.commit()
    except:
        pass
    finally:
        connection.close() #it will close the connection automatically


def insert_actor(*info):
    query_user = f"INSERT INTO actor (first_name, last_name, age, number_oscars, salary, nationality) VALUES {info}"
    manage_connection(query_user)
    
insert_actor('Jackie', 'Chan', '1963-12-18', 3, 200000, 'Chinese')

# def get_all_actors():
#     query_user = "SELECT * FROM actor"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"Name: {actor[1]} {actor[2]}. He is {actor[-1]}.")

# get_all_actors()

# def get_actors_salary_higher():
#     query_user = "SELECT * FROM actor WHERE salary > 100000"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"Name: {actor[1]} {actor[2]}. His salary is {actor[-2]}.")

# get_actors_salary_higher()

# def get_actors_by_lastname(lastname):
#     query_user = f"SELECT * FROM actor WHERE last_name = '{lastname}'"
#     result = manage_connection(query_user)

#     for actor in result:
#         print(f"Name: {actor[1]} {actor[2]}. His birthdate is {actor[3]}.")

# get_actors_by_lastname('Pitt')



