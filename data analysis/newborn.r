newborn = read.csv("/Users/rz2361/Desktop/newborn.csv")
nrow(newborn)
plot(newborn$Total.Charges)
nrow(subset(newborn,newborn$Gender == "F"))
nrow(subset(newborn,newborn$Gender == "M"))

nrow(subset(newborn,newborn$Health.Service.Area == "Capital/Adiron"))
nrow(subset(newborn,newborn$Health.Service.Area == "Central NY"))
nrow(subset(newborn,newborn$Health.Service.Area == "Finger Lakes"))
nrow(subset(newborn,newborn$Health.Service.Area == "Hudson Valley"))
nrow(subset(newborn,newborn$Health.Service.Area == "Long Island"))
nrow(subset(newborn,newborn$Health.Service.Area == "New York City"))
nrow(subset(newborn,newborn$Health.Service.Area == "Southern Tier"))
nrow(subset(newborn,newborn$Health.Service.Area == "Western NY"))

test = newborn$Zip.Code...3.digits
test = as.character(test)
test = paste(test,'00',sep='')
a = data.frame(table(test))
install.packages("zipcode")
library("zipcode", lib.loc="~/Library/R/3.3/library")
library("ggplot2", lib.loc="~/Library/R/3.3/library")
library("choroplethr", lib.loc="~/Library/R/3.3/library")
couinstall.packages("devtools")
library(devtools)
install_github('arilamstein/choroplethrZip@v1.3.0')
library(choroplethrZip)
names(a) = c('region','value')
zip_choropleth(a,state_zoom = "new york")
library("maps", lib.loc="~/Library/R/3.3/library")

t = newborn$Hospital.County
t = as.character(t)
t1 = data.frame(table(t))
t1
names(t1) = c('region','value')

data("df_pop_county")
data("county.regions")
t2 = county.regions[county.regions$state.abb == 'NY',]
t2
t1$region = as.character(t1$region)
t1$region[which(t1$region == 'Albany')] = 36001
t1$region[which(t1$region == 'Allegany')] = 36003
t1$region[which(t1$region == 'Bronx')] = 36005
t1$region[which(t1$region == 'Broome')] = 36007
t1$region[which(t1$region == 'Cattaraugus')] = 36009
t1$region[which(t1$region == 'Cayuga')] = 36011
t1$region[which(t1$region == 'Chautauqua')] = 36013
t1$region[which(t1$region == 'Chemung')] = 36015
t1$region[which(t1$region == 'Chenango')] = 36017
t1$region[which(t1$region == 'Clinton')] = 36019
t1$region[which(t1$region == 'Columbia')] = 36021
t1$region[which(t1$region == 'Cortland')] = 36023
t1$region[which(t1$region == 'Delaware')] = 36025
t1$region[which(t1$region == 'Dutchess')] = 36027
t1$region[which(t1$region == 'Erie')] = 36029
t1$region[which(t1$region == 'Essex')] = 36031
t1$region[which(t1$region == 'Franklin')] = 36033
t1$region[which(t1$region == 'Fulton')] = 36035
t1$region[which(t1$region == 'Genesee')] = 36037
t1$region[which(t1$region == 'Greene')] = 36039
t1$region[which(t1$region == 'Hamilton')] = 36041
t1$region[which(t1$region == 'Herkimer')] = 36043
t1$region[which(t1$region == 'Jefferson')] = 36045
t1$region[which(t1$region == 'Kings')] = 36047
t1$region[which(t1$region == 'Lewis')] = 36049
t1$region[which(t1$region == 'Livingston')] = 36051
t1$region[which(t1$region == 'Madison')] = 36053
t1$region[which(t1$region == 'Monroe')] = 36055
t1$region[which(t1$region == 'Montgomery')] = 36057
t1$region[which(t1$region == 'Nassau')] = 36059
t1$region[which(t1$region == 'Manhattan')] = 36061
t1$region[which(t1$region == 'Niagara')] = 36063
t1$region[which(t1$region == 'Oneida')] = 36065
t1$region[which(t1$region == 'Onondaga')] = 36067
t1$region[which(t1$region == 'Ontario')] = 36069
t1$region[which(t1$region == 'Orange')] = 36071
t1$region[which(t1$region == 'Orleans')] = 36073
t1$region[which(t1$region == 'Oswego')] = 36075
t1$region[which(t1$region == 'Otsego')] = 36077
t1$region[which(t1$region == 'Putnam')] = 36079
t1$region[which(t1$region == 'Queens')] = 36081
t1$region[which(t1$region == 'Rensselaer')] = 36083
t1$region[which(t1$region == 'Richmond')] = 36085
t1$region[which(t1$region == 'Rockland')] = 36087
t1$region[which(t1$region == 'St Lawrence')] = 36089
t1$region[which(t1$region == 'Saratoga')] = 36091
t1$region[which(t1$region == 'Schenectady')] = 36093
t1$region[which(t1$region == 'Schoharie')] = 36095
t1$region[which(t1$region == 'Schuyler')] = 36097
t1$region[which(t1$region == 'Seneca')] = 36099
t1$region[which(t1$region == 'Steuben')] = 36101
t1$region[which(t1$region == 'Suffolk')] = 36103
t1$region[which(t1$region == 'Sullivan')] = 36105
t1$region[which(t1$region == 'Tioga')] = 36107
t1$region[which(t1$region == 'Tompkins')] = 36109
t1$region[which(t1$region == 'Ulster')] = 36111
t1$region[which(t1$region == 'Warren')] = 36113
t1$region[which(t1$region == 'Washington')] = 36115
t1$region[which(t1$region == 'Wayne')] = 36117
t1$region[which(t1$region == 'Westchester')] = 36119
t1$region[which(t1$region == 'Wyoming')] = 36121
library(ggplot2)
t1$region = as.numeric(t1$region)
p = county_choropleth(t1,state_zoom = c("new york"), title = "2013 Newborn Weight in NY by County", legend = "Grams",num_colors = 4)
p$ggplot_scale = scale_fill_brewer(name="Days", palette=2, drop=FALSE)
p
b = df_pop_county$region
b
t1$region = as.numeric(t1$region,state_zoom = c("new york"))
data("state.regions")
aggregate(newborn[,11], list(newborn1$Hospital.County), mean)
newborn1 = newborn[!is.na(newborn$Length.of.Stay),]
newborn1$Length.of.Stay= as.numeric(newborn1$Length.of.Stay)
newborn1 = newborn1[newborn1$Birth.Weight != '0',]
length_of_stay = ddply(newborn1, .(Hospital.County), summarize,  Rate1=mean(Length.of.Stay))
birth_weight = ddply(newborn1, .(Hospital.County), summarize,  Rate1=mean(Birth.Weight))
popu = t1
len_stay = t1
t1 = data.frame(birth_weight)
birth_weight_race = ddply(newborn1, .(Race), summarize,  Rate1=mean(Birth.Weight))
birth_weight_race
birth_weight_gender = ddply(newborn1, .(Gender), summarize,  Rate1=mean(Birth.Weight))

newborn2009 = read.csv("/Users/rz2361/Desktop/newborn2009.csv")
birth_weight2009 = ddply(newborn2009, .(Hospital.County), summarize,  Rate1=mean(Birth.Weight))
birth_weight_race2009 = ddply(newborn2009, .(Race), summarize,  Rate1=mean(Birth.Weight))
newborn1$Total.Costs = as.numeric(newborn1$Total.Costs)
newborn2009$Total.Costs = as.numeric(newborn2009$Total.Costs)

birth_cost2013 = ddply(newborn1, .(Hospital.County), summarize,  Rate1=mean(Total.Costs))
birth_cost2009 = ddply(newborn2009, .(Hospital.County), summarize,  Rate1=mean(Total.Costs))
risk2013 = ddply(newborn1, .(Race), summarize,  Rate1=mean(as.numeric(newborn1$APR.Severity.of.Illness.Code)))
risk2009 = ddply(newborn2009, .(Race), summarize,  Rate1=mean(as.numeric(newborn2009$APR.Severity.of.Illness.Code)))

group3 = read.csv("/Users/rz2361/Desktop/group3.csv")
