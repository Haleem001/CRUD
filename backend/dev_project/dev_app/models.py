from django.db import models

# Create your models here.


class MaleCustomer(models.Model):
    class Meta:
        pass

    name = models.CharField(max_length=155, null=False)
    height = models.IntegerField(null=True)
    shoulder = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    chest = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    tummy = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    waist = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    sleeve_length = models.DecimalField(
        decimal_places=2, max_digits=20, null=True)
    sleeve_round = models.DecimalField(
        decimal_places=2, max_digits=20, null=True)
    links = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    neck = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    length = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    lap = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    trouser_length = models.DecimalField(
        decimal_places=2, max_digits=20, null=True)
    boot = models.DecimalField(decimal_places=2, max_digits=20, null=True)
    knee = models.DecimalField(decimal_places=2, max_digits=20, null=True)

    def __str__(self):
        return self.name
