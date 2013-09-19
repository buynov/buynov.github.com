---
author: Stefan Buynov
comments: true
date: 2013-03-13 08:36:17+00:00
layout: post
slug: raspberry-pi-%d0%ba%d0%b0%d1%82%d0%be-%d0%bc%d0%b5%d0%b4%d0%b8%d1%8f-%d0%bf%d0%bb%d0%b5%d0%b9%d1%8a%d1%80
title: Raspberry Pi and RaspBMC as a Media Player
wordpress_id: 1076
categories:
- Entertainment
- Gadgets
---


### A Bit of Background


I bought a TV set in the autumn ([Philips 46PFL5537K/12](http://www.p4c.philips.com/cgi-bin/cpindex.pl?ctn=46PFL5537K/12)). It is a LED TV, with 3D (not that this matters), built-in WiFi, Smart TV, etc. The specs looked great and the price was quite acceptable. The picture, as a matter of fact, is very good - and thank God, because this is probably the most important thing about a TV. The software, however, is bad. Really bad. It appears as if it supports some standards, it appears to have some programmes and channels , but everything is so slow, clunky and poorly designed, that it doesn't seem to be worth the effort. Without getting into too much details (and I am not familiar with them, simply because I lost interest pretty quickly), I'll just say that the media player built into the TV was not satisfying for me (it doesn't support any kind of subtitles in Cyrillic, for example) and I decided to get an external one. I quickly started leaning towards [WD Live](http://www.wdc.com/en/products/products.aspx?id=330), probably the best choice if you compare price and capabilities. It didn't take long to decide and order it. Whether because it was around Christmas or for some other reason, it turned out that this model is not available anywhere. And no deliveries were expected shortly. Pretty amazing how you can order something online, from Amazon UK, for example, but you cannot get it from a local Sofia store, most likely because the local distributor is too lazy to make an order. Anyway.

[![](/images/2013/03/RPi_front_small.jpg)](/images/2013/03/RPi_front_small.jpg)Looking for an alternative, I decided to try the [Raspberry Pi](http://www.raspberrypi.org/) (or RPi for short) of a colleague. I took it for a weekend, installed [RaspBMC](http://www.raspbmc.com/), connected it to a TV via HDMI cable and voila! It was working pretty well - several movies, pictures, everything was flawless. In exchange for 35 Euros (plus a couple of other things, see below) without VAT (if you heard the rumor of a $35 RPi, it is Europe after all ;)), I could assemble a media player, and a pretty good one. Additionally, Raspberry Pi (or RPi for short) is a fully functional computer, which you can use as a server - I read that some people host their Wordpress blog on it. Most RPi images are Debian-based (including the official [Raspbian](http://www.raspbian.org/) and [RaspBMC](http://www.raspbmc.com/), which I prefer), so you have a bunch of packages ready to install.

<!-- More -->

### A Bit of Information About Raspberry Pi


In case you don't know, [Raspberry Pi](http://www.raspberrypi.org/) is a cheap mini computer, developed by an independent foundation, initially targeted at children, who were supposed to play with them and grow an interest in the computer science as a whole. It turned out, however, that RPi became popular mainly among kids of 20-30 years of age, and its popularity contributed to having a couple of versions of the hardware already, and a huge potential to grow and be further developed in the upcoming years.

Keep in mind, though, that this is not a fully functional computer out of the box - the RPi itself is just a mainboard and in order to use it, you will need a micro USB charging cable, SD flash card (it helps if you consult [this list](http://elinux.org/RPi_SD_cards#Working_.2F_Non-working_SD_cards) first) and an HDMI cable in order to connect it to a monitor or a TV set. You can also get additional accessories like a box, keyboard, mouse, WiFi adapter, etc. But before start extending the RPi, notice that some of those are highly overpriced - apparently some people / companies are trying to make easy money out of the popularity of the product, and its low price. Overall you should look at RPi as a construction computer kit, which requires "do-it-yourself" approach. If this sounds disturbing to you and you prefer everything to work out of the box, RPi is not for you.


### [![](/images/2013/03/RPi_sideways_small.jpg)](/images/2013/03/RPi_sideways_small.jpg)A Bit of Restrictions


RPi has an ARM processor, which means that at this stage, you cannot install Windows on it. Microsoft already have an ARM based version of Windows ([Windows RT](http://en.wikipedia.org/wiki/Windows_RT)), but I haven't seen anyone to get it going on a RPi, yet. And having in mind the serious requirements (for [disk space](http://www.tomshardware.com/news/Surface-Windows-RT-Microsoft-windows-8,18536.html), for example), this might never happen.


### A Bit of Logistics


The RPi foundation granted exclusive right to only two official distributors world-wide - [Farnell](http://www.farnell.com/) and [RS Components](http://www.rs-components.com). Lucky enough, one of those has an official representative in Bulgaria - namely, [Comet](http://www.comet.bg/). You can order an RPi from sites outside Bulgaria, (like Amazon DE/UK, for example), but it is not very likely that you will get it cheaper. I got my RPi from Comet, and I don't regret it. Their sales reps are very responsive - I had all the communication conducted over email and every time they responded within hours. They answered to all my questions and provided a final price before I place the order. Apart from the RPi itself, you can also order [all the accessories](http://store.comet.bg/bg/CatalogueFarnell/Search/?keywords=raspberry#eyJpcHAiOiIxMCIsImsiOiJyYXNwYmVycnkifQ%3D%3D) that Farnell offers (keep in mind that Comet's search engine is a bit weird, and takes some time to provide results, without indicating that there is something going on in the background). If you order, you can have your items delivered by Speedy or Econt Express - about 10 leva for Sofia. for example. You can also pick-up your order from their office - they have one downtown Sofia. I also had a [transparent box](http://bg.farnell.com/multicomp/mc-rp001-clr/enclosure-raspberry-pi-clear/dp/2113799#) delivered, which seems quite nice.


### [![](/images/2013/03/xbmc_theater.jpg)](/images/2013/03/xbmc_theater.jpg)A Little Media Player


When you hear the word computer, usually you imagine basic peripherals like keyboard and mouse. In general, you can hook those up to the RPi, but with RaspBMC this is not required. RaspBMC is at its core a Debian with [XBMC](http://xbmc.org/) as a user interface. The name of XBMC comes from XBox Media Center or to put it another way, a media player which resembles the interface of XBox. The software is quite mature and developed, the last version is 12, and it has been around for awhile. XBMC is open source software, and there are quite a few plugins and extensions for it. The best part of it is, that an XBMC instance can be controlled remotely in many different ways, including a web control panel (on RaspBMC it is enabled by default), smartphone applications (I use [this one](https://play.google.com/store/apps/details?id=org.leetzone.android.yatsewidgetfree), which is very good), and because it supports [DLNA](http://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) you can use any DLNA enabled remote controller, like [iMediaShare](http://www.imediashare.tv/), for example. In short, take the SD flash card from the RPi, install RaspBMC on a computer, put the SD card back in the RPi and power it up. Everything works great. Again, if installation, configuration and similar terms bother you, RPi is probably not for you. Check WD Live, it might already be available ;)


### A Bit of Extras


With RaspBMC you get an important, although not very popular, library - [libCEC](http://libcec.pulse-eight.com/). It implements a standard protocol, called [CEC](http://en.wikipedia.org/wiki/HDMI#CEC), which I had no idea existed - a colleague of mine told me about it. This protocol allows you to control your XBMC with the standard remote control of your TV set, through the HDMI cable! And this works ... to some extend. My colleague, for example, has a Sony TV set and this works without problems. You just switch the HDMI source from the TV menu, and you can control your XBMC with the TV remote, you don't need any other device. On my Philips TV, however, it's a different story. It only works from time to time. I think it is somewhat related to the fact, that I have another device on another HDMI port (the set-top box for the TV). The relation is not clear, though - sometimes the remote works when the TV box is turned on, other times - when turned off. So, if I want to "wake" the connection, I switch to the HDMI source of the RPi and start turning the TV box on and off - sometimes it works, sometimes not. If you have another TV model, however (like Sony, for example), it may work without problem.

Another great advantage of this configuration is that there are a lot of plugins for XBMC. You can find plugins available for a variety of services (including IPTV), and if you miss something, you can make it by yourself :)

If this is not enough for you, you have a fully-functional Linux box at your disposal, including SSH access (user: pi, password: raspberry - wise, right) with apt-get. With all the packages available for Debian, you can try to run anything you feel like.


### Summary


Raspberry Pi with RaspBMC make for an excellent media player. The device is small, the software is stable and is being constantly developed. A colleague even managed to put the RPi on the back of his TV set and power it from the USB port of the TV, so that it wouldn't fool around. Additionally, after the success of the first two generations of RPi among the general public, you can expect the software to become better and better. Who knows, one day you might not even need your cable TV provider anymore ;).
