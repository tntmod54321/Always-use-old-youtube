# RIP IT DOESN'T FUCKING WORK ANYMORE THANKS YOUTUBE
# Always-use-old-youtube
A userscript for Tamper/Violent/Grease monkey to use old youtube

I specifically wrote this for use with the Youtube+ userscript so I could use it in incognito mode without having to change back to old youtube manually every time.  
(only tested with CentBrowser [Chrome])  
Youtube+: https://github.com/ParticleCore/Particle
  
Basically all the code does is paste the value "f5=30030&f1=50000000&f6=43418&al=en&cvdm=grid" into the cookie "PREF"
  
  ~~Known bug: If you visit a youtube channel or the history page sometimes the page will refresh continuously for a while until it figures itself out, I don't know how to fix it because I'm not a programmer. (but it doesn't happen often)  
And this bug can be avoided if you access the page from an existing not bugging out page (e.g. instead of directly visiting https://youtube.com/feed/history, you go to youtube.com then click the history tab.)~~
Bug squashed. (by just excluding the history page lol, just visit the homepage (youtube.com) or a video and visit history/a channel in the same tab, it should keep the cookie.
