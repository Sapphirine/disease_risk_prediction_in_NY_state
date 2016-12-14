from __future__ import print_function

from pyspark import SparkContext

from pyspark.mllib.tree import GradientBoostedTrees, GradientBoostedTreesModel
from pyspark.mllib.util import MLUtils


if __name__ == "__main__":
    sc = SparkContext(appName="PythonGradientBoostedTreesRegressionExample")
    # Load and parse the data file.
    data = MLUtils.loadLibSVMFile(sc, "data/mllib/sample_libsvm_data.txt")
    data = MLUtils.loadLibSVMFile(sc, 'data/mllib/newborn2013.txt')
    # Split the data into training and test sets (30% held out for testing)
    (trainingData, testData) = data.randomSplit([0.7, 0.3])
    model = GradientBoostedTrees.trainRegressor(trainingData,
                                                categoricalFeaturesInfo={0:3,1:4,2:2}, numIterations=3)
    predictions = model.predict(testData.map(lambda x: x.features))
    labelsAndPredictions = testData.map(lambda lp: lp.label).zip(predictions)
    testMSE = labelsAndPredictions.map(lambda (v, p): (v - p) * (v - p)).sum() /\
        float(testData.count())
    print('Test Mean Squared Error = ' + str(testMSE))
    print('Learned regression GBT model:')
    print(model.toDebugString())

    # Save and load model
    model.save(sc, "target/tmp/myGradientBoostingRegressionModel")
    sameModel = GradientBoostedTreesModel.load(sc, "target/tmp/myGradientBoostingRegressionModel")
