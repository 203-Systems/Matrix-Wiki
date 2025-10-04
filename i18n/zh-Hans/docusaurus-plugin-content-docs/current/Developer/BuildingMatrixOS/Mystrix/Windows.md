---
sidebar_position: 1
---

import DocLink from "@site/src/components/DocLink/DocLink";

# 在 Windows 上构建

## 安装 Git

Git 是版本控制的必备工具。如尚未安装，请按以下步骤操作：

1. 在终端中运行以下命令检查是否已安装 Git：

   ```
   git --version
   ```

2. 如果未安装 Git，请按照[官方安装指南](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)进行安装。

## 安装 Make

`Make` 对于构建项目至关重要，特别是在使用嵌入式系统时。Matrix OS 在芯片厂商提供的构建系统之上使用 Make 来实现跨平台兼容性。

1. [安装 Chocolatey](https://docs.chocolatey.org/en-us/choco/setup/)，它将用于获取最新版本的 Make。
2. 重启终端以确保 Chocolatey 可以使用。
3. 安装 Make：

   ```
   choco install make
   ```

4. 重启终端以确保可以使用 `Make`。
5. 输入以下命令确认安装：

   ```
   make --version
   ```

   此命令应输出 `Make` 的版本，确认安装成功。

## 克隆 Matrix OS 仓库

此步骤帮助你下载 Matrix OS 的代码并为构建做好准备。

1. 打开命令提示符或你偏好的终端。
2. 使用以下命令克隆 Matrix OS 仓库：

   ```
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

3. 导航到克隆的仓库：

   ```
   cd MatrixOS
   ```

4. 初始化 Matrix OS 仓库：
   ```
   git submodule update --init
   ```

## 安装 ESP IDF

ESP-IDF（乐鑫物联网开发框架）是魔矩所用 SOC 的厂商提供的工具链和 SDK。它是魔矩 Matrix OS 的关键组件，安装它对构建 Matrix OS 至关重要。

1. 通过[下载在线安装程序](https://dl.espressif.com/dl/esp-idf/?idf=4.4)安装 ESP-IDF，安装 `ESP-IDF version V5.3.1`。
2. 进入安装程序文件夹并运行 `install.bat` 完成安装。如果没有更改默认安装路径，应该在 `C:\espressif\v5.3.1\install.bat`。

## 构建 Matrix OS

现在你已完成所有要求，是时候构建 Matrix OS 了！

1. 加载 ESP-IDF。你需要在当前终端会话中加载 ESP-IDF。你可以使用 ESP-IDF 安装的 `ESP-IDF V5.3 CMD` 快捷方式，或在终端实例中运行 `C:\espressif\v5.3.1\export.bat`。

长远来看，你会希望自动化这个过程。如果使用 VS Code，可以修改 `MatrixOS.code-workspace` 文件，将 `.bat` 路径替换为你的路径。

（这样做的原因是可以拥有多个不同版本的 IDF 并使用特定版本。它还会将相关的 Python 和工具链加载到会话中。）

2. 如果你的终端尚未在那里，请转到 Matrix OS 的根文件夹。

3. 运行此命令构建 Matrix OS：

```
make DEVICE=Mystrix build
```

4. 将 MatrixOS 上传到你的魔矩。确保你的魔矩处于<DocLink to="/docs/Mystrix/UpdateMatrixOS#进入操作系统更新模式">上传模式</DocLink>。

运行此命令安装 `psutil` Python 包。你只需执行一次：

```
pip install psutil
```

运行此命令将编译的 Matrix OS 上传到你的魔矩：

```
make DEVICE=Mystrix uf2-upload
```

5. 你的魔矩应开始闪烁并自动进入新编译的 Matrix OS。

## 构建命令

以下是你可以在 Matrix OS 中使用的一些有用构建命令：

- `clean` - 清理构建。
- `fullclean` - 更彻底地清理构建。如果遇到未定义引用或缺少文件，请使用此命令。
- `build` - 基于默认配置构建 Matrix OS（`OS/parameter.h`）。
- `build-release`、`build-rc`、`build-beta`、`build-nightly`、`build-dev` - 以各种模式构建 Matrix OS。`build-dev` 启用 USB 日志记录（参见<DocLink to="/docs/Developer/DebugMatrixOSCpp">调试 Matrix OS</DocLink>）。

你可以将命令链接在一起，如：

```bash
make DEVICE=Mystrix clean build uf2-upload
```
