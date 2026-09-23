from django.db import models

class Reservation(models.Model):
    name_client = models.CharField(max_length=100, verbose_name="Nome do Cliente")
    email = models.EmailField(verbose_name="E-mail")
    date = models.DateField(verbose_name="Data da Reserva")
    hour = models.TimeField(verbose_name="Hora")
    number_people = models.PositiveIntegerField(verbose_name="Nº de Pessoas")
    observacoes = models.TextField(blank=True, null=True, verbose_name="Observações (Opcional)")
    
    creation_date = models.DateTimeField(auto_now_add=True) 

    #data in reserve
    def __str__(self):
        return f"{self.name_client} | {self.date} às {self.hour} | {self.number_people} pax"
    
    
class Event(models.Model):
    nome = models.CharField(max_length=200, verbose_name="Nome do Evento")
    data = models.DateField(verbose_name="Data do Evento")
    imagem = models.ImageField(upload_to='eventos/', verbose_name="Cartaz/Foto")
    descricao = models.TextField(blank=True, null=True, verbose_name="Descrição (Opcional)")

    def __str__(self):
        return f"{self.nome} - {self.data}"