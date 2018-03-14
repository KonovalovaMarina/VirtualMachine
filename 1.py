from io import StringIO
from urllib.request import urlopen
import io
import lxml.html
import csv


def parse():
    f = urlopen('ftp://shannon.usu.edu.ru/python/hw2/home.html')
    html = f.read().decode('cp1251')
    page = lxml.html.parse(StringIO(html))
    root = page.getroot()
    female_names = set()
    with io.open('russian_names.csv', encoding='utf-8') as s:
        for row in csv.reader(s, delimiter=';'):
            if row[2] == 'Ж':
                female_names.add(row[1])
    year = None
    for i in root.xpath('//tr/td[2]/h3|//tr/td[2]/a'):
        if i.tag == 'h3':
            year = i.text
        else:
            surname, name = i.text.split()
            gender = 'Ж' if female_names.__contains__(name) else 'М'
            yield (year, surname, name, gender)


for i in parse():
    print(i)


