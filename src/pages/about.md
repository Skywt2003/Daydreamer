---
layout: "../layouts/Post.astro"
title: 关于
typechoSlug: about
---

## 关于我

你好 👋，我是 SkyWT。

- 🧑 各种网名都是 SkyWT，来自浙江<ruby>衢<rt>qú</rt></ruby>州。现在是湖南大学的一名本科生。
- 🌈 虽然是个理科生，但是其实或许是个有情怀的和感性的浪漫主义者。**INFJ**。
- 🤔 可能也是个理想主义者。追求心中所爱，最讨厌做没有意义的事情。
- ⚙️ **特别爱好折腾**，喜欢折腾各种 self-hosted 的玩意儿。欢迎参观我的「[实验室](https://skywt.cn/lab)」。
- 👨‍💻 立志成为**全栈工程师**，创作优秀的软件产品。给我启发的一本书是《黑客与画家》。
- 🌐 很穷的果粉。但是开源爱好者。支持一个更开放的互联网。
- 🎮 游戏技术很烂。比较喜欢 Minecraft、Cities: Skylines 这种沙盒游戏。
- 🎒 大概不适合做那种一头扎进某个领域的「nerd」。相比于虚拟世界，更喜欢现实生活。

### 旅途

- ✨ 浙江衢州，衢州市实验学校。
- ✨ 浙江杭州，杭州学军中学。
- ✨ 湖南长沙，湖南大学，信息科学与工程学院。

## 关于本站

<p class="card p-2">
  ⚙️ 这个网站目前还在开发测试阶段，只上线了部分功能，并且可能会出现奇怪的 bug。
</p>

这是我「信息汪洋里的一个家」。会发一些技术/题解/折腾记录/生活日常，不定期更新。

几乎每年，我都会使用新的技术重新设计我的网站。你现在看到的是 2024 版。这一版本由 Astro、TypeScript、Tailwind.css 等技术驱动，由 ChatGPT、Copilot 等协助编写。感谢这些技术让开发体验变得如此优雅和美妙。

这个网站的整套程序，命名为 Daydreamer。我将其定义为一个持续开发的 playground，之后将会尝试陆续添加各种好玩的功能。

新的网站集成了博客系统。[原博客](https://blog.skywt.cn)由 Typecho 驱动，使用的是我自己设计的 Typecho 主题 Daydream。

由于觉得自己目前正处于如饥似渴的学习期，还没有足够的实力做有质量的内容产出……所以博客更新频率不会特别高。

### 时间轴

<!-- 从创建至今，这个网站已运行 <span id="uptime"></span>。 -->

<!-- <script is:inline>
  const uptime = document.getElementById("uptime");
  const now = new Date();
  const grt = new Date("12/11/2017 11:00:00");
  const getUptime = () => {
    now.setTime(now.getTime() + 250);
    const diff = now.getTime() - grt.getTime();
    const dnum = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hnum = Math.floor(diff / 1000 / 60 / 60 - 24 * dnum);
    const mnum = Math.floor(
      diff / 1000 / 60 - 24 * 60 * dnum - 60 * hnum,
    );
    const snum = Math.round(
      diff / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum,
    );

    uptime.innerText =
      (dnum ? dnum.toString() + " 天 " : "") +
      (hnum ? hnum.toString() + " 小时 " : "") +
      (mnum ? mnum.toString() + " 分 " : "") +
      (snum ? snum.toString() + " 秒" : "");
  };
  let timer = setInterval(getUptime, 250);

  document.addEventListener(
    "astro:before-swap",
    () => {
      clearInterval(timer);
    },
    { once: false },
  );
</script> -->

- 2017.10.29 注册域名 skywt.top（现已注销）。
- 2017.11.12 网站正式开始运行。由 WordPress 驱动。
- 2017.12.11 首次通过 ICP 备案（现已注销）。
- 2018.03.19 注册新域名 skywt.cn。
- 2018.03.24 服务器迁移到 Bandwagon Host，由 Cloudflare 加速。
- 2019.08.20 再次通过 ICP 备案（现已注销）。
- 2019.08.27 服务器迁移到阿里云 ECS（杭州）。
- 2019.XX.XX 开启全站 HSTS，加入 HSTS Preload List。
- 2019.11.15 博客系统迁移到 Typecho。
- 2021.06.29 通过 ICP 备案：[浙ICP备2021019606号](https://beian.miit.gov.cn "浙ICP备2021019606号")。
- 2021.07.20 通过网安备案：[浙公网安备33080202000472号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33080202000472 "浙公网安备33080202000472号")。
- 2021.08.04 正式启用自己开发的 Sky Typecho 主题。
- 2021.08.12 服务器迁移到新的阿里云轻量（杭州）。
- 2021.10.05 加入「[十年之约](https://www.foreverblog.cn)」。
- 2021.11.02 服务器从 CentOS 改至 Debian。
- 2021.11.16 启用一个沙雕的[手写版博客](https://write.skywt.cn/)！
- 2021.12.22 购买新的腾讯云轻量（广州），迁移部分服务。
- 2021.12.30 开始使用又拍云 CDN 加速。
- 2022.02.04 博客分离到 blog.skywt.cn 子域名，并迁移到腾讯云（广州）。重写[首页](https://skywt.cn/)。
- 2022.02.11 接入腾讯云备案，恢复访问。
- 2022.03.03 服务器改用 Traefik 取代 Caddy。服务全面转为使用 docker-compose 部署。
- 2022.03.08 服务器改用 Caddy-docker-proxy 取代 Traefik。
- 2022.03.26 启用全新设计开发的基于 pico.css 的 Daydream Typecho 主题。
- 2022.06.21 启用一个 WordPress 博客 [whisper.skywt.cn](https://whisper.skywt.cn/)，主要用来放一些碎碎念。
- 2022.12.26 现在可以[用邮件订阅博客](https://mailchi.mp/97e1f54049cd/subscribe)啦。由 MailChimp 支持。
- 2023.02.26 注册备用的免费域名 skywt.eu.org。
- 2023.06.28 注册备用的域名 skywt.net。
- 2024.02.06 启用基于 Astro.js 开发的全新个人主页 Daydreamer。
- 2024.03.02 个人主页集成 Typecho 博客，逐步从 blog.skywt.cn 迁移。
- 2024.03.03 开始使用多吉云 CDN 加速。
- ……

## 联系

各种 ID 基本都是 SkyWT / Skywt2003。

PGP 指纹：`F46C 978A 7EA4 3A35 3911  2820 9832 D2CD 1EFA BC49`。

- Email：[me@skywt.cn](mailto:me@skywt.cn)
- Github：[Skywt2003](https://github.com/Skywt2003)
- Twitter：[@skywt2003](https://twitter.com/skywt2003)
- Telegram：[@Skywt2003](http://t.me/Skywt2003)
- QQ：请查询 `qq.skywt.cn` 的 TXT 记录。
