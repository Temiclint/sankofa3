# Generated by Django 3.2.12 on 2022-02-02 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0008_remove_contact_coordinator'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='phone',
            new_name='phone_number',
        ),
    ]
