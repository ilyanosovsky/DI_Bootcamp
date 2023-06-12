# Generated by Django 4.2.1 on 2023-06-06 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("films", "0005_alter_poster_image"),
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="userprofile",
            name="favourite_film",
            field=models.ManyToManyField(
                related_name="favourite_film", to="films.film"
            ),
        ),
    ]