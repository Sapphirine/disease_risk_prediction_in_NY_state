import csv
# myfile = open('edges_sample.txt', "w") 
r1 = open('Hospital_Inpatient_Discharges__SPARCS_De-Identified___2010.csv', 'rb')
lines=r1.readlines()
f0 = open('group7_2010.csv',"w") 
with open('label2010.txt', 'rb') as inf:
    reader = csv.reader(inf)
    for index,reader_row in enumerate(reader):
        # print(reader_row[0])
        if(reader_row[0] == '7'):
            # lines[index+1]
            f0.write(lines[index+1]+'\n')

        # print(index)