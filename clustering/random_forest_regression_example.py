from __future__ import print_function

from pyspark import SparkContext
from pyspark.mllib.tree import RandomForest, RandomForestModel
from pyspark.mllib.util import MLUtils

if __name__ == "__main__":
    sc = SparkContext(appName="PythonRandomForestRegressionExample")
    Load and parse the data file into an RDD of LabeledPoint.
    data = MLUtils.loadLibSVMFile(sc, 'data/mllib/sample_libsvm_data.txt')
    data = MLUtils.loadLibSVMFile(sc, 'data/mllib/newborn2013.txt')
    (trainingData, testData) = data.randomSplit([0.7, 0.3])
    model = RandomForest.trainRegressor(trainingData, categoricalFeaturesInfo={0:3,1:4,2:2},
                                        numTrees=4, featureSubsetStrategy="auto",
                                        impurity='variance', maxDepth=4, maxBins=12)

    predictions = model.predict(testData.map(lambda x: x.features))
    labelsAndPredictions = testData.map(lambda lp: lp.label).zip(predictions)
    testMSE = labelsAndPredictions.map(lambda (v, p): (v - p) * (v - p)).sum() /\
        float(testData.count())
    print('Test Mean Squared Error = ' + str(testMSE))
    print('Learned regression forest model:')
    print(model.toDebugString())

    model.save(sc, "target/tmp/myRandomForestRegressionModel")
    sameModel = RandomForestModel.load(sc, "target/tmp/myRandomForestRegressionModel")
