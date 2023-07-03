from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')

def alquilar(request):
    return render(request, 'alquilar.html')

def comprar(request):
    return render(request, 'comprar.html')

def franquicia(request):
    return render(request, 'franquicia.html')

def blog(request):
    return render(request, 'blog.html')