---
author: Stefan Buynov
comments: true
date: 2010-04-08 05:38:18+00:00
layout: post
slug: initial-setup-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d0%bd%d0%b8-%d0%b8%d0%bd%d1%81%d1%82%d1%80%d1%83%d0%bc%d0%b5%d0%bd%d1%82%d0%b8
title: InitialSetup - System tools
wordpress_id: 123
categories:
- Software
---

On the USB stick I carry with me, I have a directory (called InitialSetup) with software for Windows, which I update occasionally (with new versions of the applications). I install the software each time I do a new installation on my computer, or the computer of a friend. These are applications, which I had used for awhile and I was pleased with their reliability. All of them are free, some are with open source code. I will list those application in a series of 4 posts - I hope they will be useful to you too.

I separated the software in the following four categories (thеse will be the names of the posts on the subject as well):
	
  1. **System tools **(this post)
  2. **[Internet/Network applications](/blog/2010/08/25/initialsetup-internetnetwork-applications/)**
  3. **Office applications/Tools for document (word) processing**
  4. **Multimedia applications**


### Security and protection
	
  * **[Avira  AntiVir](http://free-av.com/)** - Anti-virus software, free for non-commercial use. I use it for a very long time and by far I got a virus only once (quite some time ago). Very reliable and one of the few anti-virus packages to be able to co-exist with another anti-virus software (not that you need one).
	
  * **[Spybot  Search & Destroy](http://www.spybot.com)** - Software for protection from [spyware](http://en.wikipedia.org/wiki/Spyware). In general, spyware are malicious programs that collect personal information and can enable a break into your computer.

If you doubt that the security of your PC is compromised, use these two products - the chance that you will be able to resolve the problem is pretty big. Well, it stil depends on how negligent you were and how far you allowed the malicious software to reach into your machine - sometimes the re-install of Windows is still the only option.


### Archiver
	
  * **[7-Zip](http://www.7-zip.org/)** - Forget about [WinZIP](http://www.winzip.com) or [WinRAR](http://www.rarlab.com/).  This is a wonderful, free archiver with open source code and with a Bulgarian localization. It supports unpacking of (almost) any popular format, namely ARJ, CAB, CHM, CPIO, DEB, DMG, HFS, ISO,  LZH, LZMA, MSI, NSIS, RAR, RPM, UDF, WIM, XAR and Z. It can create archives in 7z, ZIP, GZIP, BZIP2 and TAR formats, and the [7z](http://en.wikipedia.org/wiki/7z) is own format, which provides significantly improved [ZIP](http://en.wikipedia.org/wiki/Zip) compression, similar to the level of compression of [RAR](http://en.wikipedia.org/wiki/RAR). Keep in mind that packing/unpacking a 7z file takes much longer than the regular ZIP, though.


### Burning CDs/DVDs
	
  * **[ISORecorder](http://isorecorder.alexfeinman.com/isorecorder.htm)** - Simple tool for creating and burning image (.iso) files. Although ever since Windows XP there is a built-in tool for writing files on a CD/DVD, it does not allow burning entire disk images. This simple tool helps to resolve this problem, without a tool like  [Nero](http://www.nero.com), for example.
	
  * **[Infra Recorder](http://infrarecorder.org/)** - Infra  Recorder is much more capable than ISORecorder, as it supports BIN/CUE disk images, creation of audio/video disks, erasing RW (re-writable) diska, etc. Unfortunately it is still in beta, and this is obvious at some points (I did not have problems with the burning of disks itself, though).


### Encryption
	
  * **[Gpg4Win](http://www.gpg4win.org/)** - A must have tool for everyone, who wants to use [PGP](http://en.wikipedia.org/wiki/Pretty_Good_Privacy)/[GPG](http://en.wikipedia.org/wiki/GNU_Privacy_Guard) under Windows, without paying the ridiculous 183 EURO (!) per license of [PGP Desktop](http://eu.store.pgp.com/desktop_pro.html). It has an Outlook integration, which is pretty good (I used it several years ago for the last time), Windows Explorer integration (so that you can encrypt/decrypt files easily) and almost everything you would need. And the best thing is, that the project is still supported and updated regularly.


### Java
	
  * **[Java Runtime  Environment](http://java.com)** - If you want to use some of the programs in these posts, you would need a Java Runtime Environment. You can get it [here](http://www.java.com/getjava/). You can see sample Java applications [here](http://java.com/en/java_in_action/). Don't forget to check out the Java version of Quake 2 - [Jake 2](http://bytonic.de/html/jake2_webstart.html), an excellent example for everyone, who says that Java is slow.


### Important updates
	
  * **Windows Service Pack** - I'd say it is obligatory to install the latest service pack (a package with updates and bugfixes) for the version of Windows you use, right after the initial installation. The bugfixes are usually worth the effort (which is to wait for about 10-15 minutes for the package to install). How you can install the latest service pack for Windows XP, for example, you can see [here](http://support.microsoft.com/kb/322389).
	
  * **Office Service Pack** - The purpose of the service pack for Microsoft Office is the same as the one for Windows - it contains improvements, which allow you to use the product more easily and reliably. For instruction on how to install the latest service pack for MS Office 2003, for example, see [here](http://support.microsoft.com/kb/870924).
	
  * **Hardware drivers** - The drivers you got when you bought your computer/laptop (on a CD probably) are almost certainly out-dated (not to mention that in some cases they don't even work). On the vendor's site (with a 99% chance) you can find newer and better versions. It is a good idea to visit the site and download the latest drivers. Save them somewhere (on a USB stick, for example) before you re-install - because if you don't manage to get the network to work after the Windows installation, this means you will not be able to download anything from the internet. If you have a laptop, it is easier - go to the manufacturer's site and locate the **Support** link, then search for the model number of your laptop. If you have a PC, however, you will have to download drivers for the motherboard and the video card separately (if the video is not built into the motherboard), and in some cases you might even have to download additional drivers, like for the audio card, for example. Apart from that, the procedure is similar - go to the vendor's site and locate the **Support** link. After that search for the component model number (you can probably see it on the papers you got when you purchased it).


### Other
	
  * **[Process  Explorer](http://technet.microsoft.com/en-us/sysinternals/bb896653.aspx)** - Very good task manager for Windows, much better than the original [Windows Task  Manager](http://en.wikipedia.org/wiki/Windows_Task_Manager), that comes with Windows. It allows you to view all running processes, how much memory or processor time each process takes (including chronologically, for the last several minutes), kill selected processes (much more invasive than usual), etc. If your machine slows down occasionally and you have no idea why, try Process Explorer, it might help you identify the problem.
	
  * **[JDiskReport](http://www.jgoodies.com/freeware/jdiskreport/)** - Quite simple and at the same time useful tool. It requires Java (see above). It helps when you experience shortage in disk space. It scans the disk or directory you pointed to, and tells you how much space each file/directory occupies on the hard drive. This helps you to identify the files/directories that take too much space and you don't need (or you probably forgot to delete, for example). It integrates into Windows Explorer, so if you choose a directory or a drive and right-click on it, you have the option to start JDiskReport directly for the selected directory/drive.
