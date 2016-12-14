import csv
# myfile = open('edges_sample.txt', "w") 
f = open('newborn2013.txt',"w") 
with open('newborn.csv', 'rb') as inf:
    reader = csv.reader(inf)

    for reader_row in reader:
        
        if(reader_row[7] == "M"):
            reader_row[7] = '0'
        elif(reader_row[7] == "F"):
            reader_row[7] = '1'
        else:
            reader_row[7] = '2'
        if(reader_row[8] == "White"):
            reader_row[8] = '0'
        elif(reader_row[8] == "Black/African American"):
            reader_row[8] = '1'
        elif(reader_row[8] == "Other Race"):
            reader_row[8] = '2'
        else:
            reader_row[8] = '3'
            

        if(reader_row[9] == 'Not Span/Hispanic'):
            reader_row[9] = '0'
        else:
            reader_row[9] = '1'
        # l = []
        # l.append(reader_row[1])
    # print(reader)
        # writer = csv.writer(myfile)
        # csv.writer(out, delimiter='\t')
    # with open('edges_sample.txt', 'wb') as out:
        # writer = csv.writer(out, delimiter='\t')
        # writer = csv.writer(myfile, delimiter='\t')
        # writer.writerows(reader_row[0] + '\t' + reader_row[1])
        result = reader_row[34]
        if reader_row[7] != '0':
            result += ' 1:' + reader_row[7]
        if reader_row[8] != '0':
            result += ' 2:' +  reader_row[8]
        if reader_row[9] != '0':
            result += ' 3:' +  reader_row[9]
        if reader_row[6] != 'OOS':
            result += ' 4:' +  reader_row[6]
        # f.write(reader_row[34] + ' ' + '1:' + reader_row[7] + ' ' + '2:' +  reader_row[8]+' ' +'3:' + reader_row[9]+'\n')
        f.write(result +'\n')