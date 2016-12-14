from __future__ import print_function
from numpy import array
from math import sqrt
from pyspark import SparkContext

from pyspark.mllib.clustering import KMeans, KMeansModel


if __name__ == "__main__":
    sc = SparkContext(appName="KMeansExample")  # SparkContext

    # $example on$
    # Load and parse the data
    data = sc.textFile("data/mllib/hos2010.txt")
    # data = sc.textFile("data/mllib/kmeans_data.txt")
    parsedData = data.map(lambda line: array([float(x) for x in line.split(' ')]))
    # Build the model (cluster the data)
    clusters = KMeans.train(parsedData, 8, maxIterations=10,
                            runs=10, initializationMode="random")
    labels = clusters.predict(parsedData)
    print("labels",labels[0:100])
    labels.saveAsTextFile("target/org/apache/spark/PythonKMeansExample/label.csv")
    # # # Evaluate clustering by computing Within Set Sum of Squared Errors
    def error(point):
        center = clusters.centers[clusters.predict(point)]
        return sqrt(sum([x**2 for x in (point - center)]))

    WSSSE = parsedData.map(lambda point: error(point)).reduce(lambda x, y: x + y)
    # 
    print("Within Set Sum of Squared Error = " + str(WSSSE))

    # # # Save and load model
    clusters.save(sc, "target/org/apache/spark/PythonKMeansExample/KMeansModel")
    sameModel = KMeansModel.load(sc, "target/org/apache/spark/PythonKMeansExample/KMeansModel")
    # $example off$
    # new_list = []
    labels = sameModel.predict(parsedData)
    labels.saveAsTextFile("target/org/apache/spark/PythonKMeansExample/label2010.csv")
    print("predict class",sameModel.centers[0])
    print("predict class",sameModel.centers[1])
    print("predict class",sameModel.centers[2])
    print("predict class",sameModel.centers[3])
    print("predict class",sameModel.centers[4])
    print("predict class",sameModel.centers[5])
    print("predict class",sameModel.centers[6])
    print("predict class",sameModel.centers[7])

    sc.stop()
