---
path: "/blog-posts/Blog6"
date: "2022-03-15"
title: "Blog #6"
---

One issue we struggled with towards the end of the project was getting the GUI to work, particularly on the Raspberry Pi. The library we used to display graphics was called Kivy. Kivy is very good for building GUIs as it is native to python and handles refreshing the screen by itself. However, when we made any calls to the translation API, python would freeze the GUI because the thread was busy. To get around this we used multithreading. We started the translation in one thread, while running Kivy in a seperate thread. This solved the updating issues, but made running the GUI on the Raspberry Pi even more difficult. 

Aditionally, we decided it would be better for demonstration purposes to open the OpenCV feed during the symposium so visitors could see the keypoint detection and understand how the device works. To do this, we could no longer update the GUI as each word is detected, since this would require opening and closing the camera for each word. We decided it was worth it to only update once the entire sentence was received and allow the user to see the OpenCV feed.