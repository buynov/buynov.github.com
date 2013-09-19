---
author: Stefan Buynov
comments: true
date: 2008-04-02 19:29:08+00:00
layout: post
slug: clipboard-tool
title: Clipboard Tool
wordpress_id: 48
categories:
- Software
- Software Development
---

[![ct_conver_cyrillic_to_latin_menu.png](/images/2008/04/ct_conver_cyrillic_to_latin_menu.png)](/images/2008/04/ct_conver_cyrillic_to_latin_menu.png)

I created my first Open Source project - [Clipboard Tool](http://clipboard-tool.sourceforge.net). Finally, I gave something to the world myself - hopefully it will turn out to be useful ;). The main page is in Bulgarian right now, but I hope to be able to translate it soon. Briefly, this is a tool to convert [Cyrillic](http://en.wikipedia.org/wiki/Cyrillic_alphabet) into [Latin](http://en.wikipedia.org/wiki/Latin) letters, process known as [transliteration](http://en.wikipedia.org/wiki/Transliteration), into the clipboard itself. Additionally, it provides a function to remove formatting from the text you copied into the clipboard.

[I host the project on Sourceforge](http://sourceforge.net/projects/clipboard-tool), which provides useful instruments for that purpose, including both CVS and SVN, shell access (SSH, SCP, SFTP). You can use a sub-domain for the project web page - **<name of the project>.sourceforge.net. **There are also software release management system (upload is a bit strange, through an anonymous FTP), statistics, etc.

I also configured a [MediaWiki](http://www.mediawiki.org) page for the project which is not available in English yet - [http://clipboard-tool.sourceforge.net](http://clipboard-tool.sourceforge.net). MediaWiki installation on Sourceforge is not a trivial task, however. Keep in mind that Sourceforge hosting provides only PHP 4 at your disposal - PHP 5 is not supported. That is why you should use[ MediaWiki version 1.6.10](http://download.wikimedia.org/mediawiki/1.6/mediawiki-1.6.10.tar.gz), next releases require PHP 5. There are additional restrictions for directory access, which makes the installation even more difficult. There are two very useful sites, which will help you install and configure your wiki:
	
  * [MediaWiki on SourceForge - The HOWTO](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/) - a big thank you to Laszlo, who made the effort to write this article
  * [Installing Mediawiki on Sourceforge](http://baoilleach.blogspot.com/2007/06/installing-mediawiki-on-sourceforge.html) - this site contains a few helpful corrections to the HOWTO above

That's it - stop wandering around and get to work ;)
