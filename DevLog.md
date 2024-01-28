# DevLog

## Setting up editor

Setting up Prettier plugin for Astro:
https://github.com/withastro/prettier-plugin-astro/blob/main/README.md

## Darkmode Toggle

指定顺序：system，dark，light

## Mobile First

屏幕宽度小于 320 像素的屏幕（12px），显示提示信息。
320 - 336 的屏幕，Bento 会被挤压。

0 - 320 no
320 - 640 xs 12px
640 - 768 sm 14px
768 - 1024 md 16px
1024 - 1280 lg 18px
1280 - 1536 xl
1536 - inf 2xl

https://stackoverflow.com/questions/30470603/is-there-a-standard-smallest-possible-computer-screen-width

世界上屏幕宽度最小的 Android 设备，屏幕宽度是 240px；iOS 设备则是 320px（第一款 iPhone）。

## Bento

两种布局（非线性布局，只能手动调整）。

大屏幕：四列
小屏幕：双列

BoxWrapper 组件负 psotioning，其中包含 Box 或 Map 等组件，负责显示内容。

## Darkmode

gray
neutual

## Shadow

Light Mode 有阴影很正常，但是 Dark Mode 不该有阴影的。

light: shadow-gray-100
dark: shadow-gray-900

## Touch VS hover

https://medium.com/@mezoistvan/finally-a-css-only-solution-to-hover-on-touchscreens-c498af39c31c
