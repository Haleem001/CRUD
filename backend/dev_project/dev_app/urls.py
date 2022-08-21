from django.urls import path


from . import views


urlpatterns = [
    path('api/malecustomers/', views.male_list),
    path('api/malecustomers/<int:pk>', views.male_item)

]
