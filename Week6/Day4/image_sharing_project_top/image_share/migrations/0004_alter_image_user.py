# Generated by Django 4.2.1 on 2023-06-07 21:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("image_share", "0003_alter_image_user_alter_profile_user"),
    ]

    operations = [
        migrations.AlterField(
            model_name="image",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="images",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
