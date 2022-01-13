# Edge Detection

Project for the discipline of _Introduction to Computer Graphics_ at the undergraduate course of _Applied Mathematics_ at EMAp FGV. The first is the implementation of the _Canny algorithm_ to detect edges on images. An edge is the contour of an object on an image that is represented as a change of color or lightness. The algorithm focuses on detecting these changes in both horizontal and vertical directions. The implementation is available at the [link](https://giovanivaldrighi.github.io/edge-detection) and can be used with your own images.

![Edge Detection](https://raw.githubusercontent.com/GiovaniValdrighi/edge-detection/master/docs/imgs/arara-azul-edge.png)

# Files organization

The files of the project are separated in the following folders:

- `docs/`: contains HTML files of the web page, and the Javascript code for the algorithm.
- `docs/imgs/`: contains the files of all images used.
- `notebooks/`: contains a Jupyter Notebook with the implementation of the Canny algorithm using Python.

# Requirements

The implementations that was made with Javascript had the intent to be used by any user that has not contact with programming, so to run you just need to access the web page. The version in the Jupyter Notebook made uses of [Python](https://www.python.org/) and [Anaconda](https://www.anaconda.com/). The libraries used are:

- numpy
- PIL

# How to run

As already mentioned, to run the Javascript version it is just needed to access the web page. To run the Python version, run all cells in `notebooks/edge-detection.ipynb` with Anaconda.

# Reference

- [Canny edge detector - Wikipédia](https://en.wikipedia.org/wiki/Canny_edge_detector)
- [Gaussian smoothing - Image Processing Learning Resources HIPR2](https://homepages.inf.ed.ac.uk/rbf/HIPR2/gsmooth.htm)
- [Canny Edge Detection - Justin Liang](http://justin-liang.com/tutorials/canny/)
- [Canny Edge Detection - OpenCV](https://docs.opencv.org/trunk/da/d22/tutorial_py_canny.html)

