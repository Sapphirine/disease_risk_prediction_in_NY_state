from __future__ import print_function

from pyspark import SparkContext
from pyspark.mllib.tree import DecisionTree, DecisionTreeModel
from pyspark.mllib.util import MLUtils


if __name__ == "__main__":

    sc = SparkContext(appName="PythonDecisionTreeRegressionExample")
    data = MLUtils.loadLibSVMFile(sc, 'data/mllib/sample_libsvm_data.txt')
    data = MLUtils.loadLibSVMFile(sc, 'data/mllib/newborn2013.txt')
    # Split the data into training and test sets (30% held out for testing)
    (trainingData, testData) = data.randomSplit([0.7, 0.3])
    model = DecisionTree.trainRegressor(trainingData, categoricalFeaturesInfo={0:3,1:4,2:2},
                                        impurity='variance', maxDepth=3, maxBins=32)
    predictions = model.predict(testData.map(lambda x: x.features))
    labelsAndPredictions = testData.map(lambda lp: lp.label).zip(predictions)
    testMSE = labelsAndPredictions.map(lambda (v, p): (v - p) * (v - p)).sum() /\
        float(testData.count())
    print('Test Mean Squared Error = ' + str(testMSE))
    print('Learned regression tree model:')
    print(model.toDebugString())


    model.save(sc, "target/tmp/myDecisionTreeRegressionModel")
    sameModel = DecisionTreeModel.load(sc, "target/tmp/myDecisionTreeRegressionModel")

