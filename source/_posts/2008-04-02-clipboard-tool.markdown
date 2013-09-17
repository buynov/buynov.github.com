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

Създадох първия си Open Source проект - [Clipboard Tool](http://clipboard-tool.sourceforge.net). Както се казва и аз съм дал нещо на света - сега остава да се окаже полезно ;). Инстументът е простичък, но аз лично го ползвам интензивно и си го харесвам. Както пише в заглавната страница:

> _Clipboard Tool е инструмент за конвертиране на текст от кирилица на латиница, съобразно [официалната транслитерация](http://transliteration.mdaar.government.bg/alphabet.php). Той е подобен на други инструменти, като [Emily converter](http://www.download.bg/index.php?cls=program&mtd=default&id=12234), но за разлика от тях запазва форматирането на текста. Т.е. ако имате текст, който е форматиран с Bold, Italic или различен шрифт, например, текста на латиница ще бъде форматиран по същия начин. _

[Хоствам проекта на Sourceforge](http://sourceforge.net/projects/clipboard-tool), който предлага удобни инструменти за тази цел. Разполагаш със CVS и SVN хранилище за код, шел достъп (през SSH), като допълнително поддържа и SCP, и SFTP. Разполагаш и с поддомейн за уеб сайт - **<име на проекта>.sourceforge.net**. Има и система за пускане на версии на софтуера (където upload-а става доста странно, с анонимно FTP), статистика за download и т.н.

Направих и [MediaWiki ](http://www.mediawiki.org)страница за проекта, естествено на [http://clipboard-tool.sourceforge.net](http://clipboard-tool.sourceforge.net). Инсталирането на MediaWiki на Sourceforge не е тривиална задача - трябва да имаш предвид, че разполагаш само с PHP версия 4, няма версия 5. По тази причина трябва да използваш [MediaWiki версия 1.6.10](http://download.wikimedia.org/mediawiki/1.6/mediawiki-1.6.10.tar.gz), тъй като следващите изискват PHP версия 5. Допълнително, на хостинга на Sourceforge имаш доста ограничен достъп до директориите (и е редно да е така), поради което допълнително се усложнява инсталацията. Има два много полезни сайта, които ще ти помогнат да си инсталираш и конфигурираш wiki-то: [](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/)
	
  * [MediaWiki on SourceForge - The HOWTO](http://monda.hu/blog/2006/03/03/mediawiki-on-sourceforge-the-howto/) - евала на Laszlo, че си е направил труда
  * [Installing Mediawiki on Sourceforge](http://baoilleach.blogspot.com/2007/06/installing-mediawiki-on-sourceforge.html) - съдържа някои полезни корекции към горното HOWTO

Това е - не се помайвай, а дерзай ;)

