# DevLog

## Setting up editor

Setting up Prettier plugin for Astro:
https://github.com/withastro/prettier-plugin-astro/blob/main/README.md

## Darkmode Toggle

指定顺序：system，dark，light

## Mobile First

结合 Tailwind 的预定义，确定如下屏幕大小（宽度）分级：

0 - 320 no 显示警告信息
320 - 640 xs 14px 普通的手机屏幕
640 - 768 sm 14px 普通的平板竖屏
768 - 1024 md 16px 普通的平板横屏
1024 - 1280 lg 18px 普通的笔记本
1280 - 1536 xl 普通的大显示器
1536 - inf 2xl 超宽显示器

世界上屏幕宽度最小的 Android 设备，屏幕宽度是 240px；iOS 设备则是 320px（第一款 iPhone）（[来源](https://stackoverflow.com/questions/30470603/is-there-a-standard-smallest-possible-computer-screen-width)）。
目前的 iPhone se 屏幕宽度也有 375。

## Bento

两种布局（非线性布局，只能手动调整）：

- 小屏幕：双列
- 大屏幕：四列

屏幕宽度小于 325，Bento 无法正常显示。显示警告信息。
325 - 336 的屏幕，Bento 会被挤压，但显示内容正常。
336 以上的屏幕，Bento 可以不挤压地正常显示。

BoxWrapper 组件负责 psotioning，其中包含 Box 或 Map 等组件，负责显示内容。

### Touch VS hover

https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c

终极解决方案：onclick=""

88b110c 的版本，选择的方案是 hover 显示背景图片，普通情况下 bento 作为简洁的白底黑字的组件。
这样有一个问题：hover 纯粹为显示服务了，而按照正常的逻辑 hover 应该是起到「提示用户可点击」的功能的。

我觉得还是和 Bento.me 的设计一样，不要用 hover 来交互比较好。总体布局杂乱的情况，之后想办法。从 88b110c 之后修改。
（其实超喜欢这个版本的 Map 组件的……可惜不得不改掉了 😭）

颜色深的 Box，shadow 会看不出来。为了保持视觉的统一性，不宜使用过大的 shadow。

## Darkmode

### gray 与 neutual

从 white 到 black，并不止 gray 一种过渡方式。Tailwind 提供了 gray、neutral、cool、warm 四种方式，每种都有 100 到 900 从白到黑的过渡值。

Darkmode 下的背景应该使用什么颜色呢？如果用 black，就是俗称的「A 屏黑」，看久了眼睛会很不舒服。如果用 gray-900，看起来会偏蓝。用 neutral-900 是最舒服的选择。

## Shadow

Light Mode 有阴影很正常，但是 Dark Mode 不该有阴影的。

light: shadow-gray-100
dark: shadow-gray-900
