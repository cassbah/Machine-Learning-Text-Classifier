# Machine-Learning-Text-Classifier
Text classifier using porter stemming algorithm and naive-bayes algorithm. 
This classifier takes in many documents and each document is run through a stemmer which returns a bag of stemmed words.
The frequencies of these words are then counted and classes are made which contains these words.
Each class will now have a set of features(words).
When trying to classify a certain document it gets classified as the probability of that document belonging to a certain class.
It is important to note that these classifications are only as good as the amount of previous data which exists in the model. 
The more training data the more accurate the classification.

