import pandas as pd

documents = [42,
 857,
 966,
 876,
 453,
 376,
 50,
 849,
 448,
 808,
 580,
 647,
 648,
 875,
 225,
 646,
 271,
 226,
 730,
 645,
 375,
 48,
 672,
 147,
 964,
 305,
 60,
 682,
 678,
 594]

data = pd.read_csv('data_topics.csv')
data.head()

i = 0
for document in range(1, 978):
    for index, row in data.iterrows():
        if row["ID"]==document and row["label"]=="literal" and row["topic"]=="Justiça":
            i+=1
            print(row['headline'], row['linkToArchive'])
            print("\n")
        if i==5: break
    if i==5: break
