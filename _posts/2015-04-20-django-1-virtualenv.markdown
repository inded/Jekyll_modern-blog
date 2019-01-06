Django 프로젝트를 시작할때 필요한건 2가지이다.

Django를 실행할 가상환경.
가상환경 안에 설치된 Django.


이 2가지를 설치하고 Django 프로젝트를 실행해보겠다.







virtualenv 설치


# pip 설치 (https://pip.pypa.io/en/stable/installing/ 참고)
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py

# virtualenv 설치
pip install virtualenv

# 가상환경 생성
virtualenv -p python3 venv_for_django

# 가상환경 활성화
source venv_for_django/bin/activate

# python 버전 확인
python --version


django 2.0 이상의 버전을 사용하기 위해서는 virtualenv에 python2가 아닌 python3이 깔려야 한다.

방법은 virtualenv를 생성할때 -p python3 옵션을 넣는 것이다.

(만약 이 옵션을 넣지 않고 실행해서 python2가 디폴트로 내장된다면, 아래의 django 설치 과정에서 1.1버전이 설치된다.)

![image](https://user-images.githubusercontent.com/34048253/50682089-0d1e5d80-1051-11e9-947a-d7b222ee2912.png)









Django 설치


pip install django

![image](https://user-images.githubusercontent.com/34048253/50682114-27f0d200-1051-11e9-99ce-89e17965b271.png)







Django 프로젝트 생성하기
Django 프로젝트를 생성하는 방법은 간단하다.

Django가 설치된 가상환경 안에서 아래의 코드 한줄만 실행시키면 된다.



django-admin startproject myproject

![image](https://user-images.githubusercontent.com/34048253/50682121-2fb07680-1051-11e9-8eb6-aa221b4c5d35.png)







Django 프로젝트 시작하기
Django 프로젝트를 시작하는 방법 또한 간단하다.

manage.py 를 실행시키면서 runserver와 실행시킬 ip와 port명만 넣어주면 된다.

python manage.py runserver 0.0.0.0:8000

![image](https://user-images.githubusercontent.com/34048253/50682135-3808b180-1051-11e9-9929-48e4cc492774.png)

![image](https://user-images.githubusercontent.com/34048253/50682139-3dfe9280-1051-11e9-9a1f-fb3c55fd8283.png)

그리고 해당 IP를 통해 접속해보면 뭔가가 뜨긴 떴지만 ALLOWED_HOSTS라는 설정에 내 ip를 추가해야 한다고 뜬다.

ALLOWED_HOSTS라는 설정은 프로젝트 이름으로 되어있는 하위폴더 안에 settings.py 라는 파일 안에 존재한다.



들어가서 수정해주자.

![image](https://user-images.githubusercontent.com/34048253/50682146-448d0a00-1051-11e9-945a-8be58e023651.png)

![image](https://user-images.githubusercontent.com/34048253/50682155-4a82eb00-1051-11e9-91dd-2cf0ac9cc2c5.png)



수정을 마친 뒤 다시 runserver를 해주면 아래의 결과를 만나볼 수 있다.

![image](https://user-images.githubusercontent.com/34048253/50681554-4524a100-104f-11e9-9cf9-07d10b780561.png)
