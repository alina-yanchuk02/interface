import csv
file = open('data_topics.csv')
csvreader = csv.reader(file)
header = []
header = next(csvreader)
rows = []
for row in csvreader:
        rows.append(row)
list = []
for article in rows:
    dic={}
    dic["title"]=article[2];
    dic["journal"]=article[3];
    dic["year"]=article[4];
    dic["url"]=article[5];
    dic["topic"]=article[6];
    dic["label"]=article[1]
    list.append(dic)
    
import json
with open('outputfile', 'w') as fout:
    json.dump(list, fout,ensure_ascii=False)