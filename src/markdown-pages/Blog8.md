---
path: "/blog-posts/Blog8"
date: "2022-03-07"
title: "Blog #8"
---

For the past few weeks, we have been working towards getting the model as good as possible. This has included countless hours of training, testing, and iterating through models. We have decided to use two separate models, one to recognize letters and one to recognize words. This is because recognizing words requires the device to identify and interpret key points from the entire upper body (arms, torso, hands, etc.), whereas recognizing letters only requires the device to interpret key points from the users hand. The word model can now accurately interpret over 10 words, which meets our initial constraint and is enough to order a coffee or tea. The letter model has been a bit tougher to train simply because there are so many similarities between each letter, with very nuanced differences. Additionally, there are 26 different letters for the model to choose from, giving it plenty of choice and ultimately reducing the confidence percentage when making a decision. We will continue to train the letter model in hopes that it can become more accurate. 

We have also made the decision to offload the translations to the M1 chip. Once the word model reached a relatively high accuracy, we downloaded it to the Raspberry Pi for testing. We found that the the video stream on the Pi was delayed by approximately 10 seconds and operating at approximately 2 frames per second. After spending a few days attempting to optimize the the program with little improvements, we decided to use the M1 chip instead. This will be done by streaming the video stream from the Raspberry Pi to the MacBook, which will then do all of the ML interpretations, and return the output to the Raspberry Pi. This has reduced the delay to less than 2 seconds, and improved the frame rate to approximately 10 frames per second. This improvement has dramatically increased the quality of the translations of the device and we plan to use the M1 chip moving forward. 

We will be presenting our progress at CheckIn #3 in a few days and next week is symposium, so we will be putting the finishing touches on the device over the coming days. 
