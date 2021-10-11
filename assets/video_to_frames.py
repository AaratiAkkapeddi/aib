import sys
import argparse

import cv2

vidcap = cv2.VideoCapture("./fea.mp4")
success,image = vidcap.read()
count = 0
success = True
while success:
  success,image = vidcap.read()
  if count % 2 == 0:
	  print ('Read a new frame: ', success)
	  if success:
	  	cv2.imwrite('./fea/' + "frame%d.jpg" % count, image)     # save frame as JPEG file
  count += 1	  