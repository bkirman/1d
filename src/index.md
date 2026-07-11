---
layout: layouts/base.njk
title: 1d Games Workshop
prev: p
next: /1d/1
---

# {{ title }}

## What are we doing?!
We're going to make our own video game console! It will be controlled with a single button controller, and the screen will be a string of fairy lights. The entire thing can be powered from a battery pack. 

We've designed this for EMF, so you can use on your tent/camper van. The fairy lights are waterproof but the computer and button are _not_, so just be careful how you attach it!

By the end of this session you will have a working game console, and the skills to edit the code and make changes afterwards. We hope you have fun and we look forward to playing your games!

## Who can do it
This workshop is aimed at people aged roughly 12+ (but we're not checking). You do not need to have any electronics and/or programming experience. 
If you do have that experience, there are some advanced sections where you can take things further. But our aim is for everyone to have a game console within an hour!

## What you need
If you are attending the workshop at EMF you will need to buy a complete kit with (almost) all the materials needed for the workshop. This is £28 (cost price). You will also need a laptop to do some (light) programming.
You *might* need a USB C-C cable if your computer doesn't have any USB-A ports. Or a dongle. Or, if you have the EMF Tildagon badge, you can use the lanyard!
It is *nice* to have a power bank to run the games from without a computer later, but also any powered USB port can work. 

# The Kit
The kit contains the following items. If you are following along outside EMF, this is your shopping list. If you are in EMF you can skip this bit.
- A [Pimoroni Plasma 2350W](https://shop.pimoroni.com/products/plasma-2350-w) microcomputer. This is based on the Raspberry Pi Pico 2350 (W), and code is mostly compatible but we will use the Pimoroni plasma library so it will need adapting.
- A length of WS2812B addressable LED lights (5m/50 lights is good, more is always fun too!)
- An appropriate USB cable to connect a computer/power bank to the Plasma. 
- A ~2m length of dual core cable (the controller lead)
- Some kind of button. For example a [Colourful Arcade Button from Pimoroni](https://shop.pimoroni.com/products/colourful-arcade-buttons)
    - There is also a 3d printable enclosure ([STL](/1d/downloads/arcade_button_holder.stl), [STEP](/1d/downloads/arcade_button_holder.step)) I made for these buttons, that will be useful but you could equally make one out of card or an old yoghurt pot.
- Some soldering skills to connect it all together. (the EMF kit is pre-prepared)
    - The EMF kit has a 2-pin header soldered to the TX and GND pins nearest the USB port. When you get to that part of the guide either solder directly or add headers/other connectors.

Pimoroni sell a [Wireless Plasma kit (No Bottle)](https://shop.pimoroni.com/products/wireless-plasma-kit?variant=40372594704467) that includes a good LED strip, the Plasma 2350W and a USB A-C cable.

# The Guide

The guide is split into the following chapters. We'll start together but if you get ahead that is fine:

1. [Setting up the computer](/1d/1)
2. [Editing and running code on the Plasma](/1d/2)
3. [Making the controller](/1d/3)
4. [Adding the fairy lights](/1d/4)
5. [Making our first game](/1d/5)
6. [Making the tricky second game](/1d/6)
7. [Making a wifi-enabled game!](/1d/7)
8. [Advanced ideas](/1d/8)
9. [Resources and References](/1d/9)

This guide will remain online if you need to refer back. If after the workshop you have any issues, or something breaks, I'm happy to help, please email me at [ben@kirman.org](mailto:ben@kirman.org).

During EMF I will keep an eye on emails, you can also find me at the [Museum of Manky Tea Towels](https://manky.website) installation at EMF, or by phone on 8695 (TOWL). I'm happy to help you debug or fix issues. I'm even happier to see your game working!

[credits](/1d/credits)

Licence

# The Code
The code for this workshop has been released under a free, libre, open source licence. [You can access and download it from Github](https://github.com/bkirman/1d_engine).