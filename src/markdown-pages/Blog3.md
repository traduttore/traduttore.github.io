---
path: "/blog-posts/Blog3"
date: "2022-02-10"
title: "Blog #3"
---

This past weeks task seemed simple but was far from it; our main goal was to get everything working on the Raspberry Pi 4 for the first time. 

The first thing that needed to be done is converting our trained machine learning model from one that computers use to a ‘lite’ version that can run more smoothly on a Pi that has less processing power. This didn’t take too long, there was a simple library we leveraged called ‘tflite’ which handled most of the work here very well. Some modifications had to be made to the code used to test the model, but overall this task took around a day.

Next, pulling and running the code on the Raspberry Pi proved to be a struggle. The hardest part here was getting the correct dependencies working on the Raspberry Pi. Typically, when developers are creating these huge libraries they don’t have the OS and systems that Raspberry Pi’s use as top of their priority list. When downloading and running the code for the first time, we ran into trouble with downloading OpenCV and Mediapipe in particular on the Raspberry Pi, which is a problem because these are the main two libraries we need to actually run the model. The typical way we installed dependencies wasn’t working, and we had to seek alternatives.

The Raspberry Pi’s typically run on 32bit operating systems, and all the work we had done was using 64bit versions of Python and also OS’s. With this in mind, our first decision was to change the Pi to a 64bit system, one in which was recently released on the system this year. After doing this, OpenCV was able to be installed smoothly, but we ran into problems with Mediapipe that took a while to fix. Mediapipe doesn’t support aarch64 systems, which is what Raspberry Pi’s run on. Due to this, we had to scour the internet for resources and possible workarounds. Eventually, we found a guide on GitHub (https://github.com/jiuqiant/mediapipe_python_aarch64 if you’re curious) which gave us a rundown on how to get it working. With our luck, we were able to get it running on the Pi and so the model could be tested on the device.

One caveat is that because the Raspberry Pi has limited processing, the video feed of program was very choppy with low FPS. To combat this, we removed the visible video feed that was typically outputted (so that you could see yourself doing the actions on the screen) and only engaged the camera module and used the terminal to print out the gestures being translated. This was done so that most of the processing power could go towards the camera module and detecting gestures rather than simply showing a video feed to the screen. This increased the FPS by 10x, and it’s now at a health level. 

Moving forward, our next plan of action is to finish physically creating the device and also add more data to refine the accuracy of the model.
