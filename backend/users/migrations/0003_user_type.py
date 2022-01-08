# Generated by Django 3.2.9 on 2022-01-08 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='type',
            field=models.PositiveSmallIntegerField(choices=[(1, 'customer'), (2, 'bussiness'), (3, 'admin')], default=3),
            preserve_default=False,
        ),
    ]