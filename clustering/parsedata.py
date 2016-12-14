import csv
f = open('Hospital_Inpatient_Discharges__SPARCS_De-Identified___2013.txt',"w") 
with open('Hospital_Inpatient_Discharges__SPARCS_De-Identified___2013.csv', 'rb') as inf:
    reader = csv.reader(inf)
    for reader_row in reader:
        if(reader_row[5] == "70 or Older"):
            reader_row[5] = '4'
        elif(reader_row[5] == "0 to 17"):
            reader_row[5] = '0'
        elif(reader_row[5] == "18 to 29"):
            reader_row[5] = '1'
        elif(reader_row[5] == "30 to 49"):
            reader_row[5] = '2'
        elif(reader_row[5] == "50 to 69"):
            reader_row[5] = '3'

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
        f.write(reader_row[5] + ' ' + reader_row[7] + ' ' + reader_row[8]+' ' + reader_row[9]+'\n')