import sys
import argparse

import cv2

vidcap = cv2.VideoCapture("./pavilion/pavilion_design_story_part_morph_v005.mp4")
success,image = vidcap.read()
count = 0
success = True
while success:
  success,image = vidcap.read()
  if count % 2 == 0:
	  print ('Read a new frame: ', success)
	  if success:
	  	cv2.imwrite('./pavilion/interactive2/' + "frame%d.jpg" % count, image)     # save frame as JPEG file
  count += 1	  