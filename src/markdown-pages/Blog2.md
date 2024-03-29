---
path: "/blog-posts/Blog2"
date: "2022-02-02"
title: "Blog #2"
---

One of the main issues we encountered while working with our preliminary model on the computer was a low accuracy, which was even worse when trying to use the model in new environments. How could this be? One observation we had was that the location of our hands played a large role in determining the sign. For instance, coffee and tea visually look pretty different, but both are actions commonly done in front of your chest. The model had a hazard time distinguishing between the two especially when not performed in the same location as the training data was.  
 
But what can we do about this? 🤷‍♀️ (Hopefully something!)
Our first instinct was we simply did not have enough training data to properly train the model. Collecting data already took approximately 10 minutes per gesture. Scaling this will be difficult. To test our hypothesis each member of the team trained 10 gestures in significantly different locations.  This took a lot of time, but was helpful in solving our issue! 
 
After re-training the model it was clear that this change had made a significant impact, but was not enough to bring our product to production. 
 
So we went back to the drawing board! 📝
One group member hypothesized that training more signs would give a better prediction as the model would have to look at more than just the location of the gesture within the frame to determine which gesture is being performed. So, as a team we trained another 10 gestures bringing our total to 20 gestures. This was quite helpful and a significant improvement was seen. As we were doing this, we luckily had made the output include the probability that each prediction was correct. We realised that when the model was wrong, the probability was quite low compared to when the model was correct. As such we decided to increase the threshold in which we allow predictions to be outputted. This made the device much more usable, and began to feel like it was almost ready to go on the device.

