---
author: stefan.buynov
comments: true
date: 2009-10-22 18:11:13+00:00
layout: post
slug: https-%d0%bf%d1%80%d0%b5%d0%b7-%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d0%bd%d0%b0%d1%82%d0%b0-%d0%bc%d1%80%d0%b5%d0%b6%d0%b0
title: HTTPS over the mobile network
wordpress_id: 459
categories:
- Gadgets
- Software
---

[![HTTPS](http://buynov.com/wordpress/wp-content/uploads/2009/10/HTTPS.jpg)](http://en.wikipedia.org/wiki/HTTP_Secure)[bulgarian]В един момент осъзнах, че браузъра на моя [HTC Magic](/2009/09/24/440) не отваря страници, достъпни по [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) (като страници за login в повечето уеб сайтове, например). Учудих се, защото си спомнях, че същите страници съм ги отварял преди, на същия телефон. Изчистих cookie-тата и кеша на браузъра, но напразно - тези страници не се отваряха. Браузърът уж тръгваше да ги зарежда, но оставаше с празен прозорец - без съобщения за грешка или друга индикация, че има проблем.

Поумувах го известно време и тогава се сетих, че преди ползвах интернет интензивно през WiFi, а напоследък (след като си имам "тлъст" план за трафик на данни), ползвах мобилната мрежа. Пробвах същите страници през WiFi и се отвориха без проблем. Явно проблемът беше във връзката през мобилния оператор.

Потърсих в Google и бързо намерих този линк: [SSL web sites fail to load in browser application when not connected via Wi-Fi](http://code.google.com/p/android/issues/detail?id=3334). Проблемът беше в конфигурацията на Access Point-a към мобилния оператор. Решението се оказа просто - изтриваш от конфигурацията за Access Point-а към мобилния оператор (на Android в `Settings -> Wireless Controls -> Mobile Networks -> Access Point Names`) полетата **Proxy** и **Port**, и проблемът се решава.

Та да знаеш, в случай че имаш подобен проблем - предполагам че е възножно да се получи и на други, не-Android устройства.

[/bulgarian]
[english]At some point I realized, that the browser of my [HTC Magic](/2009/09/24/440) does not open pages, accessible over [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) (like the login screens for most web sites, for example). I was surprised, because I remembered that I have been able to open the same pages before, on the same device. I tried to delete cookies and clear the cache of the browser with no luck - those pages did not load. The browser seemed to be trying to load them, but it was only displaying a blank screen - no error messages or other pointers that there is a problem.

I wondered what was going on for awhile, and then it occurred to me. I was using internet over WiFi intensively before, and lately (since I have a "fat" data plan) I am mainly using the mobile network. I tried the same pages over WiFi and they loaded perfectly fine. It was obvious that the problem had something to do with the mobile network connection.

I googled the problem and almost immediately came across this link: [SSL web sites fail to load in browser application when not connected via Wi-Fi](http://code.google.com/p/android/issues/detail?id=3334). The problem resided in the configuration for the mobile network data connection. The solution turned out to be pretty simple - from the Access Point configuration (on Android go to `Settings -> Wireless Controls -> Mobile Networks -> Access Point Names`) clear the fields **Proxy** and **Port**, and the problem is resolved.

So keep this in mind, if you experience similar problem - I guess it probably could occur on non-Android devices, as well.

[/english]
