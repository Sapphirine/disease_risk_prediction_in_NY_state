var ageGroupValue = 0;
var genderValue = 0;
var raceValue = 0;
var ethnicityValue = 0;


var backgroundColors = [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ];

var clusterCenters = [[0.432675022595,0.584603772086,0.287420421703,0.0951115834219],[4.0,0.589634626529,0.147453232493,0.0314464123861], [2.55342053822,0.590980872652,0.225106687074,0.0219183004638], [3.03001268829,0.308520675407,0.160702085434,1.0],[0.224252455037,0.0,1.95665894295,0.476376475781],[0.297091030949,1.00036753975,1.97441274714,0.317543537246],[1.79963898917,0.69681218523,1.93670053929,0.631122699113],[3.36867453365,0.408751915864,1.78243884811,0.395599431783]];
var group0Diseases = [
    {
        name: 'Mood Disorders',
        code: '657',
        cost: 9914,
        lengthOfStay: 8.83,
        p: 3.95
    },
    {
        name:'Substance-RLTD Disorder',
        code:'661',
        cost:6326,
        lengthOfStay:7.24,
        p:2.24
    },
    {
        name:'Asthma',
        code:'128',
        cost:7213,
        lengthOfStay:2.29,
        p:1.98
    },
    {
        name:'Schezophrenia Psych Disorder',
        code:'659',
        cost:19779,
        lengthOfStay:16.56,
        p:1.84
    },
    {
        name:'Eplepsy/Convulsions',
        code:'83',
        cost:9415,
        lengthOfStay:2.85,
        p:1.71
    }
];

var group1Diseases = [
    {
        name:'Congestive Heart Failure',
        code:'108',
        cost:14066,
        lengthOfStay:6.24,
        p:5.27
    },
    {
        name:'Septicemia',
        code:'2',
        cost:22947,
        lengthOfStay:9.46,
        p:6.93
    },
    {
        name:'Dysrhythmia',
        code:'106',
        cost:13132,
        lengthOfStay:4.46,
        p:3.87
    },
    {
        name:'Pneumonia',
        code:'122',
        cost:12496,
        lengthOfStay:6.6,
        p:3.12
    },
    {
        name:'Coronary Atheroscler',
        code:'101',
        cost:19713,
        lengthOfStay:3.97,
        p:2.31
    }
];

var group2Diseases = [
    {
        name:'Osteoarthritis',
        code:'203',
        cost:18378,
        lengthOfStay:3.17,
        p:3.23
    },
    {
        name:'Mood Disorders',
        code:'657',
        cost:1159,
        lengthOfStay:10.25,
        p:2.97
    },
    {
        name:'Alcohol-related Disorder',
        code:'660',
        cost:7202,
        lengthOfStay:5.97,
        p:2.78
    },
    {
        name:'Chest Pain',
        code:'102',
        cost:5879,
        lengthOfStay:1.96,
        p:2.64
    },
    {
        name:'Coronary Atheroscler',
        code:'101',
        cost:18328,
        lengthOfStay:3.33,
        p:2.19
    }
];

var group3Diseases = [
    {
        name:'Chest Pain',
        code:'102',
        cost:5.77,
        lengthOfStay:1.96,
        p:3.1
    },
    {
        name:'Pneumonia',
        code:'122',
        cost:11347,
        lengthOfStay:5.82,
        p:3.04

    },
    {
        name:'Osteoarthritis',
        code:'203',
        cost:18665,
        lengthOfStay:3.37,
        p:3
    },
    {
        name:'Congestive Heart Failure',
        code:'108',
        cost:15683,
        lengthOfStay:6.04,
        p:2.91
    },
    {
        name:'Coronary Atheroscler',
        code:'101',
        cost:16801,
        lengthOfStay:3.33,
        p:2.19
    }
];

var group4Diseases = [
    {
        name:'Asthma',
        code:'128',
        cost:7314,
        lengthOfStay:2.24,
        p:3.24
    },
    {
        name:'Mood Disorders',
        code:'657',
        cost:13954,
        lengthOfStay:11.02,
        p:2.66
    },
    {
        name:'Appendictis',
        code:'142',
        cost:10611,
        lengthOfStay:2.54,
        p:2.19
    },
    {
        name:'Bronchitis',
        code:'125',
        cost:9186,
        lengthOfStay:3.03,
        p:2.35
    },
    {
        name:'Pneumonia',
        code:'122',
        cost:10875,
        lengthOfStay:3.35,
        p:1.69
    }
    

];

var group5Diseases = [
    
    {
        name:'Prolonged Pregnancy and Other Pregnancy Related Disease',
        code:'9999',
        cost:7311,
        lengthOfStay:2.8,
        p:14.65
    },
    {
        name:'Mood Disorders',
        code:'657',
        cost:12422,
        lengthOfStay:9.96,
        p:2.25
    },
    {
        name:'Asthma',
        code:'128',
        cost:7796,
        lengthOfStay:2.39,
        p:2.06
    },
    {
        name:'Skin and Tissue Infection',
        code:'159',
        cost:8501,
        lengthOfStay:3.09,
        p:0.9
    },
    {
        name:'Epilepsy/Convulsions',
        code:'83',
        cost:10081,
        lengthOfStay:2.73,
        p:1.57
    }

];

var group6Diseases = [
    {
        name:'Infant-pregnancy related disease',
        code:'10000',
        cost:7581,
        lengthOfStay:2.86,
        p:23.04
    },
    {
        name:'Substance-related Disorder',
        code:'661',
        cost:6756,
        lengthOfStay:5.66,
        p:3.15
    },
    {
        name:'Mood Disorders',
        code:'657',
        cost:12927,
        lengthOfStay:10.37,
        p:3.16
    },
    {
        name:'Schezophrenia Psych Disorder',
        code:'659',
        cost:22581,
        lengthOfStay:17.23,
        p:2.72
    },
    {
        name:'Biliary Tract Disease',
        code:'149',
        cost:12369,
        lengthOfStay:3.37,
        p:1.94
    }

];

var group7Diseases = [
    {
        name:'Coronary Atheroscler',
        code:'101',
        cost:19990,
        lengthOfStay:3.36,
        p:6.39
    },
    {
        name:'Chest Pain',
        code:'102',
        cost:6973,
        lengthOfStay:2.1,
        p:5.63
    },
    {
        name:'Congestive Heart Failure',
        code:'108',
        cost:21132,
        lengthOfStay:6.31,
        p:6.99
    },
    {
        name:'Septicemia',
        code:'2',
        cost:33660,
        lengthOfStay:10.65,
        p:8.8
    },
    {
        name:'Diabetes',
        code:'50',
        cost:20006,
        lengthOfStay:6.27,
        p:4.54
    }

];

var groupDiseases = [
    group0Diseases, 
    group1Diseases,
    group2Diseases,
    group3Diseases,
    group4Diseases,
    group5Diseases,
    group6Diseases,
    group7Diseases
];
var diseaseDescriptions = {};

diseaseDescriptions['657'] = 'Mood disorders are among the most pervasive of all mental disorders and include major depression, in which the individual commonly reports feeling, for a time period of two weeks or more, sad or blue, uninterested in things previously of interest, psychomotor retardation or agitation, and increased or decreased appetite since the depressive episode ensued.';
diseaseDescriptions['661'] = 'Substance Use Disorder is a complex brain disease and includes such diseases as alcoholism and drug addiction. Substance Use Disorders occur when a person has a dependence on alcohol and or drugs that is accompanied by intense and sometimes uncontrollable cravings and compulsive behaviors to obtain the substance.';
diseaseDescriptions['128'] = 'Asthma is a disease that affects your lungs. It causes repeated episodes of wheezing, breathlessness, chest tightness, and nighttime or early morning coughing.';
diseaseDescriptions['659'] = 'Schizophrenia is a chronic, severe, and disabling mental disorder characterized by deficits in thought processes, perceptions, and emotional responsiveness.';
diseaseDescriptions['83'] = 'Epilepsy is a broad term used for a brain disorder that causes seizures. There are many different types of epilepsy. There are also different kinds of seizures.';
diseaseDescriptions['108'] = 'Congestive heart failure (CHF) is a serious medical condition in which the heart cannot pump enough blood to meet the body\'s needs.';
diseaseDescriptions['2'] = 'Septicemia is a serious bloodstream infection. It’s also known as bacteremia, or blood poisoning. Septicemia occurs when a bacterial infection elsewhere in the body, such as in the lungs or skin, enters the bloodstream.';
diseaseDescriptions['106'] = 'A cardiac dysrhythmia is an abnormal heart beat: the rhythm may be irregular in its pacing or the heart rate may be low or high. Some dysrhythmias are potentially life threatening while other dysrhythmias (such as sinus arrhythmia) and normal.';
diseaseDescriptions['122'] = 'Pneumonia is an infection of the lungs that can cause mild to severe illness in people of all ages. Common signs of pneumonia include cough, fever, and difficulty breathing. ';
diseaseDescriptions['101'] = 'One of the most common types of heart disease in the United States. For some people, the first sign of CAD is a heart attack.';
diseaseDescriptions['203'] = 'Arthritis includes more than 100 rheumatic diseases and conditions that affect joints, the tissues that surround the joint and other connective tissue.';
diseaseDescriptions['660'] = 'Excessive alcohol use, including underage drinking and binge drinking can lead to increased risk of health problems such as injuries, violence, liver diseases, and cancer.';
diseaseDescriptions['102'] = 'Chest pain is one of the most common reasons that people visit the emergency room. Chest pain varies depending on the person.';
diseaseDescriptions['142'] = 'Appendicitis is a painful swelling of the appendix.';
diseaseDescriptions['125'] = 'Acute bronchitis is an acute respiratory infection with a normal chest radiograph that is manifested by cough with or without phlegm production that lasts for up to 3 weeks.';
diseaseDescriptions['9999'] = 'Reproductive Health is the focal point for issues related to reproductive health, maternal health, and infant health.';
diseaseDescriptions['159'] = "Skin problems are among the most frequent medical problems in returned travelers. The largest case series of dermatologic problems in returned travelers from the GeoSentinel Surveillance Network showed that cutaneous larva migrans, insect bites, and bacterial infections were the most frequent skin problems in ill travelers";
diseaseDescriptions['10000'] = "Reproductive Health is the focal point for issues related to reproductive health, maternal health, and infant health.";
diseaseDescriptions['661'] = "Substance Use Disorder is a complex brain disease and includes such diseases as alcoholism and drug addiction. Substance Use Disorders occur when a person has a dependence on alcohol and or drugs that is accompanied by intense and sometimes uncontrollable cravings and compulsive behaviors to obtain the substance.";
diseaseDescriptions['149'] = "Diseases of the biliary tract (gallbladder and bile ducts) are common and result in significant morbidity and mortality.";
diseaseDescriptions['50'] = "Diabetes can cause serious health complications including heart disease, blindness, kidney failure, and lower-extremity amputations. Diabetes is the seventh leading cause of death in the United States.";






$(document).ready(function(){
    sortDiseasesByLikelyhood();
    /*
    var ctx = document.getElementById("myChart");

    myChart1 = new Chart(ctx, {
        type: 'horizontalBar',

        data: {
            labels: ["disease1", "disease2", "disease3", "disease4", "disease5"],
            datasets: [{
                label: 'Diseases that NY state inpatient with similar charasristic as you have',
                data: [0.5, 0.3, 0.2, 0.05, 0.05],

                borderWidth: 1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    */
    $('.panel').addClass('hidden');




});



function setAgeGroup(id, value){

    ageGroupValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}

function setGender(id, value){

    genderValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}
function setRace(id, value){

    raceValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    printCurrentValue();
}
function setEthnicity(id, value){

    ethnicityValue = parseInt(value);
    $this = $('#' + id);
    var text = $this.text();

    $this.parent().parent().parent().children(':first-child').text(text);
    //printCurrentValue();
}

function printCurrentValue(){
    console.log(ageGroupValue);
    console.log(genderValue);
    console.log(raceValue);
    console.log(ethnicityValue);
}

function replotGraph(){
    $('.panel').removeClass('hidden');
    var groupIndex = calculateGroupIndex();
    $('#myChart').remove();

    $newChart = $('<canvas id="myChart" width="400" height="100"></canvas>');
    $newChart.appendTo('#likelyhoodChartDiv');
    plotDiseaseLikelyhoodGraph(groupIndex);

    $('#myChart2').remove();
    $newChart = $('<canvas id="myChart2" width="400" height="200"></canvas>');
    $newChart.appendTo('#severenessChartDiv');
    plotDiseaseSeverenessChart(groupIndex);

    renderDiseaseDescription(groupIndex);
    
}

function plotDiseaseLikelyhoodGraph(groupIndex){
    var thisGroupDiseases = groupDiseases[groupIndex];
    var labels = [];
    var likelyhood = [];
    for(var i = 0; i < thisGroupDiseases.length; i++){
        labels.push(thisGroupDiseases[i].name);
        likelyhood.push(thisGroupDiseases[i].p);
    }

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                //label: 'Diseases that NY state inpatient with similar charasristic as you have',
                data: likelyhood,
                borderWidth: 1,
                //xAxisID: 'likelyhood',
                backgroundColor: backgroundColors,
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: Math.max.apply(null, likelyhood) + 0.2,
                        display: false                   
                    }
                }]
            },
            legend: {
                display:false
            },
            tooltips:{
                enabled: false
            }
        }
    });
}

function plotDiseaseSeverenessChart(groupIndex){
    var thisGroupDiseases = groupDiseases[groupIndex];
    var labels = [];
    var hospitalStay = [];
    var cost = [];
    var datasets = [];
    var likelyhood = [];
    for(var i = 0; i < thisGroupDiseases.length; i++){
        likelyhood.push(thisGroupDiseases[i].p);
    }

    for(var i = 0; i < thisGroupDiseases.length; i++){
        datasets.push({
            label: thisGroupDiseases[i].name,
            data: [
                {
                    x: thisGroupDiseases[i].lengthOfStay,
                    y: thisGroupDiseases[i].cost,
                    r: thisGroupDiseases[i].p * (20/ Math.max.apply(null, likelyhood))
                }

            ],
            backgroundColor: backgroundColors[i],

        });

        
    }
    var data = {
        datasets: datasets
    };
    var options = {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'average expense'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'average hospital duration'
          }
        }]
      }     
    };
    var ctx2 = document.getElementById("myChart2");
    var myBubbleChart = new Chart(ctx2,{
        type: 'bubble',
        data: data,
        options:options
    });

}
function renderDiseaseDescription(groupIndex){
    var thisGroupDiseases = groupDiseases[groupIndex];
    for(var i = 0; i < 5; i++){
        var name = thisGroupDiseases[i].name;
        var description = diseaseDescriptions[thisGroupDiseases[i].code];
        $('#diseaseName' + i).text(name);
        $('#diseaseDescription' +i + ' p').text(description);
    }


}
function sortDiseasesByLikelyhood(){
    for(var i = 0; i < groupDiseases.length; i++){
        groupDiseases[i].sort(function (a,b) {
            if(a.p < b.p) return 1;
            else if(a.p > b.p) return -1;
            else return 0;
        });
    }
}
function calculateGroupIndex(){
    var min_dist2;
    var min_index = 0;
    var this_data = [ageGroupValue, genderValue, raceValue, ethnicityValue];
    for(var i = 0; i < clusterCenters.length; i++){
        clusterCenter = clusterCenters[i];

        var dist2 = 0.0;
        for(var j = 0; j < 4; j++){
            dist2 += Math.pow(this_data[j] - clusterCenter[j], 2);
        }

        if(i == 0){
            min_dist2 = dist2;
        } else if(dist2 < min_dist2){
            min_dist2 = dist2;
            min_index = i;
        }

    }
    console.log('min dist2 is ' + min_dist2);
    console.log('this data belongs to group ' + min_index);
    return min_index;
}
function calculateGroupIndexWithCustomData(data){
    var min_dist2;
    var min_index = 0;
    var this_data = data;
    for(var i = 0; i < clusterCenters.length; i++){
        clusterCenter = clusterCenters[i];

        var dist2 = 0.0;
        for(var j = 0; j < 4; j++){
            dist2 += Math.pow(this_data[j] - clusterCenter[j], 2);
        }

        if(i == 0){
            min_dist2 = dist2;
        } else if(dist2 < min_dist2){
            min_dist2 = dist2;
            min_index = i;
        }

    }
    //console.log('min dist2 is ' + min_dist2);
    //console.log('this data belongs to group ' + min_index);
    return min_index;
}

function test(){
    var testDir = {};
    for(var i = 0 ;i < 5; i++){
        for(var j = 0 ;j < 4; j++){
            for(var z = 0 ;z < 2; z++){
                var data = [i,1, j,z];
                var gi = calculateGroupIndexWithCustomData(data);
                if(testDir[gi] == null) testDir[gi] = 0;
                else testDir[gi] += 1;
                
            }
        }

    }
    console.log(testDir);
        
}