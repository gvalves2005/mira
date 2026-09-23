from django.contrib import admin
from .models import Reservation
from .models import Event
# Register your models here.

admin.site.register(Reservation)
admin.site.register(Event)