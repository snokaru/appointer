# Generated by Django 3.2.9 on 2022-01-09 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='type',
            field=models.CharField(choices=[(1, 'user'), (2, 'bussiness'), (3, 'admin')], max_length=15),
        ),
    ]
