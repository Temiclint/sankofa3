# Generated by Django 3.2.12 on 2023-11-13 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0045_auto_20231113_1539'),
    ]

    operations = [
        migrations.AlterField(
            model_name='estimate',
            name='status',
            field=models.IntegerField(choices=[(1, 'Open'), (2, 'Accepted'), (3, 'Rejected')], default=1),
        ),
    ]
