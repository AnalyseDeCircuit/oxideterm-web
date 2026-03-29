import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://oxideterm.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: "OxideTerm",
      logo: {
        src: "./src/assets/icon.png",
      },
      customCss: ["./src/styles/global.css"],
      components: {
        SiteTitle: "./src/overrides/SiteTitle.astro",
      },
      head: [
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&family=JetBrains+Mono:wght@400;500&display=swap",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/AnalyseDeCircuit/oxideterm",
        },
      ],
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        "zh-hans": { label: "简体中文", lang: "zh-CN" },
      },
      sidebar: [
        {
          label: "Getting Started",
          translations: { "zh-CN": "快速上手" },
          items: [
            {
              slug: "docs/getting-started",
              label: "Introduction",
              translations: { "zh-CN": "简介" },
            },
            {
              slug: "docs/installation",
              label: "Installation",
              translations: { "zh-CN": "安装" },
            },
          ],
        },
        {
          label: "Features",
          translations: { "zh-CN": "功能" },
          items: [
            {
              slug: "docs/features/terminal",
              label: "Terminal",
              translations: { "zh-CN": "终端" },
            },
            {
              slug: "docs/features/local-terminal",
              label: "Local Terminal",
              translations: { "zh-CN": "本地终端" },
            },
            {
              slug: "docs/features/terminal-search",
              label: "Terminal Search",
              translations: { "zh-CN": "终端搜索" },
            },
            {
              slug: "docs/features/sftp",
              label: "SFTP",
            },
            {
              slug: "docs/features/ide",
              label: "IDE Mode",
              translations: { "zh-CN": "IDE 模式" },
            },
            {
              slug: "docs/features/forwarding",
              label: "Port Forwarding",
              translations: { "zh-CN": "端口转发" },
            },
            {
              slug: "docs/features/connections",
              label: "Connections",
              translations: { "zh-CN": "连接管理" },
            },
            {
              slug: "docs/features/session-manager",
              label: "Session Manager",
              translations: { "zh-CN": "Session Manager" },
            },
            {
              slug: "docs/features/connection-monitor",
              label: "Connection Monitor",
              translations: { "zh-CN": "连接监控" },
            },
            {
              slug: "docs/features/topology",
              label: "Connection Matrix",
              translations: { "zh-CN": "连接拓扑" },
            },
            {
              slug: "docs/features/file-manager",
              label: "File Manager",
              translations: { "zh-CN": "文件管理器" },
            },
            {
              slug: "docs/features/broadcast",
              label: "Broadcast Input",
              translations: { "zh-CN": "广播输入" },
            },
            {
              slug: "docs/features/recording",
              label: "Session Recording",
              translations: { "zh-CN": "会话录制" },
            },
            {
              slug: "docs/features/launcher",
              label: "Launcher",
              translations: { "zh-CN": "启动台" },
            },
            {
              slug: "docs/features/event-log",
              label: "Event Log",
              translations: { "zh-CN": "事件日志" },
            },
            {
              slug: "docs/features/graphics",
              label: "WSL Graphics",
              translations: { "zh-CN": "WSL 图形" },
            },
            {
              slug: "docs/features/ai",
              label: "OxideSens AI",
            },
            {
              slug: "docs/features/plugins",
              label: "Plugins",
              translations: { "zh-CN": "插件系统" },
            },
            {
              slug: "docs/features/themes",
              label: "Themes",
              translations: { "zh-CN": "主题" },
            },
            {
              slug: "docs/features/cli",
              label: "CLI Companion",
              translations: { "zh-CN": "CLI 伴侣工具" },
            },
            {
              slug: "docs/features/keyboard-shortcuts",
              label: "Keyboard Shortcuts",
              translations: { "zh-CN": "快捷键" },
            },
          ],
        },
        {
          label: "Reference",
          translations: { "zh-CN": "参考" },
          items: [
            {
              slug: "docs/plugin-development",
              label: "Plugin Development",
              translations: { "zh-CN": "插件开发" },
            },
            {
              slug: "docs/security",
              label: "Security",
              translations: { "zh-CN": "安全" },
            },
            {
              slug: "docs/faq",
              label: "FAQ",
              translations: { "zh-CN": "常见问题" },
            },
          ],
        },
      ],
    }),
  ],
});
