# Generated by Django 4.2.1 on 2023-06-07 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("films", "0005_alter_poster_image"),
    ]

    operations = [
        migrations.CreateModel(
            name="Producer",
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
                ("first_name", models.CharField(max_length=50)),
                ("last_name", models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name="film",
            name="producer",
            field=models.ManyToManyField(to="films.producer"),
        ),
    ]
