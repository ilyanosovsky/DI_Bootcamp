from django.shortcuts import render

people_list = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]


def people(request):
    sorted_people = sorted(people_list, key=lambda x: x['age'])
    results = {}
    for index, value in enumerate(sorted_people):
        results[index] = value
    context = {}
    context['results'] = results
    return render(request, 'people.html', context)

# def people(request):
#     people_sorted = sorted(people_list, key=lambda x: x['age'])
#     context = {'people': people_sorted}
#     return render(request, 'people.html', context)


def person(request, id):
    for i in people_list:
        if i['id'] == int(id):
            context = i
    return render(request, 'person.html', context)

# def person(request, id):
#     pers = None
#     for p in people_list:
#         if p['id'] == int(id):
#             pers = p
#             break
#     context = {'person': pers}
#     return render(request, 'person.html', context)