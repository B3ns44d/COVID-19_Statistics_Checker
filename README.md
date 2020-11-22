# Introduction

  

> 

## **COVID-19 Statistics Tracker 🔭**

**Simple Explanation**:

> In this project, I decided to develop a website for statistics on COVID-19 cases, which provides users with the statistics of the new Corona virus in countries of the world,  this website is very user friendly and easy to understand how it works, this website provides new statistics for Coronavirus by country name only


1. This project provides chronological tracking of the number of people affected by COVID-19 around the world, including:

   - Confirmed tested cases of Coronavirus infection
   - The number of people who have reportedly died while sick with Coronavirus


**How it's work?**:
> The project provides information on the outbreak and prevalence of COVID-19 around the world. It combines measured and modeled data from various sources to give a broad perspective on the subject.
>

### How to run it 

  
- open your terminal (if you are a windows user open cmd)
- copy and paste this line of code in your terminal

> `pip3 install -r requirements.txt`
> `python3 manage.py runserve`

Simply this line of code we use to install all the models I have used in this project so you can run it on your computer without any problem.

in case you face any problem run this line of code 

    DATABASE_URL=sqlite://USER:PASSWORD@127.0.0.1:8000/NAME python3 manage.py collectstatic 

### Requirements

>     dj-database-url==0.5.0
>     gunicorn==20.0.4
>     Jinja2==2.10.1
>     psycopg2==2.8.4
>     requests==2.22.0
>     django-heroku==0.3.1
>     python-decouple==3.3
>     whitenoise==5.0.1


