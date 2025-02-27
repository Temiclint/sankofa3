# Generated by Django 3.2.12 on 2023-11-04 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm', '0040_delete_invoiceclient'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='rate',
            new_name='amount',
        ),
        migrations.AddField(
            model_name='item',
            name='city',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='country',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='developer',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='issue_date',
            field=models.DateField(default='2023-11-04'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='link_to_verification_certificate',
            field=models.URLField(default='https://google.com'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='item',
            name='verify_institute',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
