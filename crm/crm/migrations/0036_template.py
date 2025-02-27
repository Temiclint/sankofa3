# Generated by Django 3.2.12 on 2022-06-20 10:07

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0035_estimate_estimateclient_estimatediscount_estimatefile_estimateitem_estimatesetting_estimatetax'),
    ]

    operations = [
        migrations.CreateModel(
            name='Template',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('body', ckeditor.fields.RichTextField()),
            ],
            options={
                'verbose_name': 'Template',
                'verbose_name_plural': 'Templates',
            },
        ),
    ]
