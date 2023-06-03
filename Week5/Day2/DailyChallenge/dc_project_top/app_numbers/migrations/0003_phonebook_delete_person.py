# Generated by Django 4.2.1 on 2023-06-03 14:41

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ("app_numbers", "0002_alter_person_email"),
    ]

    operations = [
        migrations.CreateModel(
            name="Phonebook",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("email", models.EmailField(max_length=50, unique=True)),
                (
                    "phone_number",
                    phonenumber_field.modelfields.PhoneNumberField(
                        max_length=20, region=None
                    ),
                ),
                ("address", models.CharField(max_length=50)),
            ],
        ),
        migrations.DeleteModel(
            name="Person",
        ),
    ]
