data=read.csv("/Users/kc3031/Desktop/2010groupdata/group7_2010.csv")
nrow(data)
head(data)

nrow(subset(data,Gender=="F"))
nrow(subset(data,Gender=="M"))
nrow(subset(data,Gender=="U"))

nrow(subset(data,Race=="White"))
nrow(subset(data,Race=="Black/African American"))
nrow(subset(data,Race=="Other Race"))
nrow(subset(data,Race=="Unknown"))

nrow(subset(data,Age.Group=="0 to 17"))
nrow(subset(data,Age.Group=="18 to 29"))
nrow(subset(data,Age.Group=="30 to 49"))
nrow(subset(data,Age.Group=="50 to 69"))
nrow(subset(data,Age.Group=="70 or Older"))

nrow(subset(data,Ethnicity=="Spanish/Hispanic"))
nrow(subset(data,Ethnicity=="Not Span/Hispanic"))
nrow(subset(data,Ethnicity=="Unknown"))
#is.na(data$Ethnicity)

#clear data
#top diseases for each group
library(plyr)
df <- data.frame(data)
x <- df[17]
y=count(x,'CCS.Diagnosis.Code')
y=y[order(-y$freq),c(1,2)]

z <- df[17:18]
disease<-join(y,z,type="inner")
disease=unique(disease)
library(xlsx)
write.xlsx(disease, "/Users/kc3031/Desktop/data/mydata7.xlsx")

#clear data
#top diseases overall
diseasedata=read.csv("/Users/kc3031/Desktop/data/topdisease.csv")
head(diseasedata)
top=count(diseasedata,'CCS.Diagnosis.Code')
top=top[order(-top$freq),c(1,2)]
df <- data.frame(diseasedata)
w=df[,c("CCS.Diagnosis.Code","CCS.Diagnosis.Description")]
topdisease<-join(top,w,type="inner")
topdisease=unique(topdisease)
head(topdisease)
write.xlsx(topdisease, "/Users/kc3031/Desktop/data/topdisease.xlsx")

#CCS.Diagnosis.Code   freq CCS.Diagnosis.Description
#                218  232407                 LIVEBORN
#                2    52579                SEPTICEMIA
#                657  38508            MOOD DISORDERS
#                108  36147                       CHF
#                195  33961    OTH COMP BIRTH/PUERPRM
#                122  32284                 PNEUMONIA

#clear data
#top 5 diseases in each group
data=read.csv("/Users/kc3031/Desktop/data/group7.csv")
nrow(subset(data, CCS.Diagnosis.Code==218))
nrow(subset(data, CCS.Diagnosis.Code==2))
nrow(subset(data, CCS.Diagnosis.Code==657))
nrow(subset(data, CCS.Diagnosis.Code==108))
nrow(subset(data, CCS.Diagnosis.Code==195))
nrow(subset(data, CCS.Diagnosis.Code==122))

#clear data
#compare data0 vs data3
d0d3=read.csv("/Users/kc3031/Desktop/data/0vs3.csv")
top03=count(d0d3,'CCS.Diagnosis.Code')
top03=top03[order(-top03$freq),c(1,2)]
library(sqldf)
colnames(d0d3)<-gsub("\\.","_",colnames(d0d3))
count=sqldf("SELECT CCS_Diagnosis_Code,CCS_Diagnosis_Description,COUNT(*) as count
      FROM d0d3
      GROUP BY CCS_Diagnosis_Code,CCS_Diagnosis_Description")
#common diseases
#50, 122, 128, 197, 657, 659, 661

#clear data
data0=read.csv("/Users/kc3031/Desktop/data/group0.csv")
nrow(subset(data0, CCS.Diagnosis.Code==50))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==122))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==128))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==197))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==657))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==659))/nrow(data0)*100
nrow(subset(data0, CCS.Diagnosis.Code==661))/nrow(data0)*100

#clear data
#compare data4 vs data5
d4d5=read.csv("/Users/kc3031/Desktop/data/4vs5.csv")
top45=count(d4d5,'CCS.Diagnosis.Code')
top45=top45[order(-top45$freq),c(1,2)]
library(sqldf)
colnames(d4d5)<-gsub("\\.","_",colnames(d4d5))
count=sqldf("SELECT CCS_Diagnosis_Code,CCS_Diagnosis_Description,COUNT(*) as count
            FROM d4d5
            GROUP BY CCS_Diagnosis_Code,CCS_Diagnosis_Description")
#common diseases
#83, 122, 125, 128, 142, 197, 657

#clear data
data4=read.csv("/Users/kc3031/Desktop/data/group5.csv")
nrow(subset(data4, CCS.Diagnosis.Code==83))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==122))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==125))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==128))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==142))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==197))/nrow(data4)*100
nrow(subset(data4, CCS.Diagnosis.Code==657))/nrow(data4)*100

#compare 2010 with 2013 top diseases
#clear data
compdata=read.csv("/Users/kc3031/Desktop/13vs10.csv")
group0=subset(compdata,group13==group10 & group13==7)
ord13=group0[order(group0$code13),c(2,3)]
ord10=group0[order(group0$code10),c(5,6)]
library(sqldf)
common=sqldf("SELECT * FROM ord13 JOIN ord10
        ON ord13.code13=ord10.code10")


#average cost and duration for a certain discease in each group
#clean data
data=read.csv("/Users/kc3031/Desktop/data/group6.csv")
data$Total.Costs=as.numeric(gsub("\\$","",data$Total.Costs))
data$Length.of.Stay=as.numeric(as.character(data$Length.of.Stay))
head(data)
meancost=rep(0,6)
meanstay=rep(0,6)
code=list(193,195,181,185,189,191)
for(i in 0:5){
meancost[i+1]=mean(data$Total.Costs[which(data$CCS.Diagnosis.Code==code[i+1])])
meanstay[i+1]=mean(data$Length.of.Stay[which(data$CCS.Diagnosis.Code==code[i+1])],na.rm=TRUE)
}

