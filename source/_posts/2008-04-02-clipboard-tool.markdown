---
author: stefan.buynov
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

[![ct_conver_cyrillic_to_latin_menu.png](http://buynov.com/wordpress/wp-content/uploads/2008/04/ct_conver_cyrillic_to_latin_menu.png)](http://buynov.com/wordpress/wp-content/uploads/2008/04/ct_conver_cyrillic_to_latin_menu.png)

[bulgarian]
Създадох първия си Open Source проект - [Clipboard Tool](http://clipboard-tool.sourceforge.net). Както се казва и аз съм дал нещо на света - сега остава да се окаже полезно ;). Инстументът е простичък, но аз лично го ползвам интензивно и си го харесвам. Както пише в заглавната страница:


> _Clipboard Tool е инструмент за конвертиране на текст от кирилица на латиница, съобразно [официалната транслитерация](http://transliteration.mdaar.government.bg/alphabet.php). Той е подобен на други инструменти, като [Emily converter](http://www.download.bg/index.php?cls=program&mtd=default&id=12234), но за разлика от тях запазва форматирането на текста. Т.е. ако имате текст, който е форматиран с Bold, Italic или различен шрифт, например, текста на латиница ще бъде форматиран по същия начин. _


[Хоствам проекта на Sourceforge](http://sourceforge.net/projects/clipboard-tool), който предлага удобни инструменти за тази цел. Разполагаш със CVS и SVN хранилище за код, шел достъп (през SSH), като допълнително поддържа и SCP, и SFTP. Разполагаш и с поддомейн за уеб сайт - **<име на проекта>.sourceforge.net**. Има и система за пускане на версии на софтуера (където upload-а става доста странно, с анонимно FTP), статистика за download и т.н.

Направих и [MediaWiki ](http://www.mediawiki.org)страница за проекта, естествено на [http://clipboard-tool.sourceforge.net](http://clipboard-tool.sourceforge.net). Инсталирането на MediaWiki на Sourceforge не е тривиална задача - трябва да имаш предвид, че разполагаш само с PHP версия 4, няма версия 5. По тази причина трябва да използваш [MediaWiki версия 1.6.10](http://download.wikimedia.org/mediawiki/1.6/mediawiki-1.6.10.tar.gz), тъй като следващите изискват PHP версия 5. Допълнително, на хостинга на Sourceforge имаш доста ограничен достъп до директориите (и е редно да е така), поради което допълнително се усложнява инсталацията. Има два много полезни сайта, които ще ти помогнат да си инсталираш и конфигурираш wiki-то: [](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/)



	
  * [MediaWiki on SourceForge - The HOWTO](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/) - евала на Laszlo, че си е направил труда

	
  * [Installing Mediawiki on Sourceforge](http://baoilleach.blogspot.com/2007/06/installing-mediawiki-on-sourceforge.html) - съдържа някои полезни корекции към горното HOWTO


Това е - не се помайвай, а дерзай ;)

[/bulgarian]

[english]

I created my first Open Source project - [Clipboard Tool](http://clipboard-tool.sourceforge.net). Finally, I gave something to the world myself - hopefully it will turn out to be useful ;). The main page is in Bulgarian right now, but I hope to be able to translate it soon. Briefly, this is a tool to convert [Cyrillic](http://en.wikipedia.org/wiki/Cyrillic_alphabet) into [Latin](http://en.wikipedia.org/wiki/Latin) letters, process known as [transliteration](http://en.wikipedia.org/wiki/Transliteration), into the clipboard itself. Additionally, it provides a function to remove formatting from the text you copied into the clipboard.

[I host the project on Sourceforge](http://sourceforge.net/projects/clipboard-tool), which provides useful instruments for that purpose, including both CVS and SVN, shell access (SSH, SCP, SFTP). You can use a sub-domain for the project web page - **<name of the project>.sourceforge.net. **There are also software release management system (upload is a bit strange, through an anonymous FTP), statistics, etc.

I also configured a [MediaWiki](http://www.mediawiki.org) page for the project which is not available in English yet - [http://clipboard-tool.sourceforge.net](http://clipboard-tool.sourceforge.net). MediaWiki installation on Sourceforge is not a trivial task, however. Keep in mind that Sourceforge hosting provides only PHP 4 at your disposal - PHP 5 is not supported. That is why you should use[ MediaWiki version 1.6.10](http://download.wikimedia.org/mediawiki/1.6/mediawiki-1.6.10.tar.gz), next releases require PHP 5. There are additional restrictions for directory access, which makes the installation even more difficult. There are two very useful sites, which will help you install and configure your wiki:



	
  * [MediaWiki on SourceForge - The HOWTO](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/) - a big thank you to Laszlo, who made the effort to write this article

	
  * [Installing Mediawiki on Sourceforge](http://baoilleach.blogspot.com/2007/06/installing-mediawiki-on-sourceforge.html) - this site contains a few helpful corrections to the HOWTO above


That's it - stop wandering around and get to work ;)

[/english]
