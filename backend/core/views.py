from rest_framework import generics
from .models import Reservation
from .serializers import ReservationSerializer

class ReservationCreate(generics.CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
