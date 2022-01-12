# Generated by Django 3.2.9 on 2022-01-09 17:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0009_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppointmentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.CharField(blank=True, max_length=300)),
                ('duration', models.DurationField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('bussiness', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.bussiness')),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_start', models.DateTimeField()),
                ('time_end', models.DateTimeField()),
                ('confirmed', models.BooleanField(default=False)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.customer')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='appointments.appointmenttype')),
            ],
        ),
    ]