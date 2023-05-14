# Exercise 1 : Call History
# Instructions
# Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

# Add a method called show_call_history. This method should print the call_history.

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

# Test your code !!!

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        self.call_history.append(f"{self.phone_number} called {other_phone.phone_number}")

    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, content):
        self.messages.append({"to": other_phone.phone_number, "from": self.phone_number, "content": content})

    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message["content"])

    def show_incoming_messages(self):
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message["content"])

    def show_messages_from(self, other_phone):
        for message in self.messages:
            if message["from"] == other_phone.phone_number:
                print(message["content"])

phone1 = Phone("054-1234567")
phone2 = Phone("054-7654321")

phone1.call(phone2)
phone1.call(phone2)
phone1.call(phone2)
phone1.call(phone2)

phone1.send_message(phone2, "Hello")
phone1.send_message(phone2, "How are you?")
phone1.send_message(phone2, "I'm fine, thanks")

phone1.show_outgoing_messages()
phone1.show_incoming_messages()
phone1.show_messages_from(phone2)

