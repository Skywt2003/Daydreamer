---
layout: "../layouts/Post.astro"
title: "关于"
---

## 关于我

你好 👋，我是 SkyWT。

- 🧑 各种网名都是 SkyWT，来自浙江<ruby>衢<rt>qú</rt></ruby>州。现在是湖南大学的一名本科生。
- 🌈 虽然是个理科生，但是其实或许是个有情怀的和感性的浪漫主义者。**INFJ**。
- 💻 高中曾经是个 **OIer**，但是大学里不搞 ACM 了。正在学 **🔐 CTF**。
- ⚙️ **特别爱好折腾**，喜欢折腾各种 self-hosted 的玩意儿。欢迎参观我的「[实验室](https://skywt.cn/lab)」。
- 🌐 很穷的果粉。但是开源爱好者。支持一个更开放的互联网。
- 🎮 游戏技术很烂。比较喜欢 Minecraft、Cities: Skylines 这种沙盒游戏。
- 🎒 大概不适合做那种一头扎进某个领域的「nerd」。相比于虚拟世界，更喜欢现实生活。

### 旅途

- ✨ 浙江衢州，衢州市实验学校。
- ✨ 浙江杭州，杭州学军中学。
- ✨ 湖南长沙，湖南大学，信息科学与工程学院。

## 关于本站

这是我「信息汪洋里的一个家」。会发一些技术/题解/折腾记录/生活日常，不定期更新。

由于觉得自己目前正处于如饥似渴的学习期，还没有足够的实力做有质量的内容产出……所以这个博客更新频率不会特别高。

现在这个版本的网站使用 Astro 编写。

（网站进行了 ICP 备案与网安备案，是出于访问速度的需要，不代表我的任何政治立场）

### 时间轴

<span id="timeDate">载入天数...</span><span id="times">载入时分秒...</span>

<script>
var now = new Date();
function createtime() {
	var grt = new Date("12/11/2017 11:00:00");
	now.setTime(now.getTime() + 250);
	days = (now-grt) / 1000 / 60 / 60 / 24;
	dnum = Math.floor(days);
	hours = (now-grt) / 1000 / 60 / 60 - (24*dnum);
	hnum = Math.floor(hours); if (0<=hnum && hnum<=9) {hnum = "0"+hnum}
	minutes = (now-grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
	mnum = Math.floor(minutes); if (0<=mnum && mnum<=9) {mnum = "0"+mnum}
	seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
	snum = Math.round(seconds); if (0<=snum && snum<=9) {snum = "0"+snum}
	document.getElementById("timeDate").innerHTML = "本站已运行 " + dnum + " 天 ";
	document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒。"
}
setInterval("createtime()", 250);
</script>

- 2017.10.29 注册域名 skywt.top（现已注销）。
- 2017.11.12 **起源。** 网站正式开始运行。由 WordPress 驱动。
- 2017.12.11 第一次通过 ICP 备案（现已注销）。
- 2018.03.19 注册新域名 skywt.cn。
- 2018.03.24 迁移到 Bandwagon Host，由 Cloudflare 加速。
- 2019.08.20 通过 ICP 备案（现已注销）。
- 2019.08.27 迁移到阿里云 ECS（杭州）。
- 2019.XX.XX 开启全站 HSTS，加入 HSTS Preload List。
- 2019.11.15 迁移到 Typecho。
- 2021.06.29 通过新的 ICP 备案：[浙ICP备2021019606号](https://beian.miit.gov.cn "浙ICP备2021019606号")。
- 2021.07.20 通过网安备案：[浙公网安备33080202000472号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33080202000472 "浙公网安备33080202000472号")。
- 2021.08.04 Sky Typecho 主题的第一个能用的版本正式启用。
- 2021.08.12 迁移到新的阿里云轻量（杭州）。
- 2021.10.05 加入「[十年之约](https://www.foreverblog.cn)」。
- 2021.11.02 服务器从 CentOS 改至 Debian。
- 2021.11.16 启用一个沙雕的[手写版博客](https://write.skywt.cn/)！
- 2021.12.22 购买新的腾讯云轻量（广州），把一些东西迁移到上面免得这个阿里云 ECS 不堪重负。
- 2021.12.30 开始使用又拍云 CDN 加速。
- 2022.02.04 博客分离到 blog.skywt.cn 子域名，并迁移到腾讯云（广州）。重写[首页](https://skywt.cn/)。
- 2022.02.11 接入腾讯云备案，恢复访问。
- 2022.03.03 服务器改用 Traefik 取代 Caddy。服务全面转为使用 docker-compose 部署。
- 2022.03.08 服务器改用 Caddy-docker-proxy 取代 Traefik。
- 2022.03.26 用 Pico.css 重构 Sky Typecho 主题，名为 Daydream。
- 2022.06.21 启用另外一个 WordPress 博客 [whisper.skywt.cn](https://whisper.skywt.cn/)，主要用来放一些碎碎念。
- 2022.12.26 现在可以[用邮件订阅博客](https://mailchi.mp/97e1f54049cd/subscribe)啦。由 MailChimp 支持。
- 2023.02.19 博客收录至「[寻我](https://seekbetter.me/)」。
- 2023.02.26 注册备用的免费域名 skywt.eu.org。
- 2023.06.28 注册备用的域名 skywt.net。
- 2024.02.06 启用全新的个人主页 Daydreamer，使用 Astro、TypeScript、Tailwind.css 和 Sass 等构建。
- ……

## 联系

各种 ID 基本都是 SkyWT / Skywt2003。

PGP 指纹：`F46C 978A 7EA4 3A35 3911  2820 9832 D2CD 1EFA BC49`。

- Email：[me@skywt.cn](mailto:me@skywt.cn)
- Github：[Skywt2003](https://github.com/Skywt2003)
- Twitter：[@skywt2003](https://twitter.com/skywt2003)
- Telegram：[@Skywt2003](http://t.me/Skywt2003)
- QQ：请查询 `qq.skywt.cn` 的 TXT 记录。