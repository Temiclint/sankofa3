# Generated by Django 3.2.12 on 2022-02-03 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0019_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='type',
            field=models.IntegerField(choices=[(1, 'Admin'), (2, 'User')], default=1),
            preserve_default=False,
        ),
    ]
