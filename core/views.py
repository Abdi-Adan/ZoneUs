from django.shortcuts import render


# Create your views here.
def index(request):
    context = {'n' : range(10) }
    return render(request, 'index.html', context)
