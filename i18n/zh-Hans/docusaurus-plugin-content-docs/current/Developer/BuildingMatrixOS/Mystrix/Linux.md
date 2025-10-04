---
sidebar_position: 3
---

import DocLink from "@site/src/components/DocLink/DocLink";

# 在 Linux 上构建

:::warning[未验证指南]
我（Null）不使用 Linux 进行开发，但通过 WSL 和 Github Action 成功在 Linux 上构建了 Matrix OS。

由于主要在 Windows 上开发，代码库可能存在大小写敏感问题，会影响在 Linux/macOS 上的构建。

如有建议或问题，请在 [Discord 服务器](https://discord.gg/rRVCBHHPfw)、[Github issue](https://github.com/203-Systems/Matrix-Wiki) 上联系我们，或在此页面留言。
:::

## 安装 Git

克隆 Matrix OS 仓库需要 Git。使用以下命令安装 Git：

```bash
sudo apt update
sudo apt install git
```

验证安装：

```bash
git --version
```

## 安装 Make

Make 是构建 Matrix OS 的必要工具。使用以下命令安装：

```bash
sudo apt install make
```

确认安装：

```bash
make --version
```

## 克隆 Matrix OS 仓库

1. 确保已按上述步骤安装 Git。

2. 打开终端。

3. 克隆 Matrix OS 仓库：

   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

4. 进入克隆的仓库：

   ```bash
   cd MatrixOS
   ```

5. 初始化 Matrix OS 仓库中的子模块：

   ```bash
   git submodule update --init
   ```

## 安装 ESP-IDF

构建并上传 Matrix OS 到魔矩设备需要 ESP-IDF（Espressif IoT 开发框架）。

1. 下载并安装 ESP-IDF 版本 **V5.3.1**。按照 [ESP-IDF: Linux 工具链标准设置](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/linux-setup.html) 的说明安装 V5.3.1 版本。

2. 安装后，找到安装目录（例如 `~/esp`）。

3. 运行 `install.sh` 脚本完成设置：

   ```bash
   ~/esp/esp-idf/install.sh
   ```

## 构建 Matrix OS

1. 在终端会话中加载 ESP-IDF：

   ```bash
   source ~/esp/esp-idf/export.sh
   ```

    从长远来看，建议自动化此操作。可以将这行代码添加到 shell 配置文件中（例如 `.bashrc` 或 `.zshrc`），或如果使用 VS Code，可以修改 MatrixOS.code-workspace 文件并调整以在新终端中运行。

2. 如果终端尚未在 Matrix OS 根目录中，请进入该目录。

3. 运行以下命令构建 Matrix OS：

   ```bash
   make DEVICE=Mystrix build
   ```

4. 确保魔矩处于<DocLink to="/docs/Mystrix/MystrixSpecific/UpdateMatrixOS#enter-os-update-mode">上传模式</DocLink>以准备上传。

5. 安装 `psutil`（只需一次）：

   ```bash
   pip install psutil
   ```

6. 将编译的 Matrix OS 上传到魔矩设备：

   ```bash
   make DEVICE=Mystrix uf2-upload
   ```

7. 魔矩设备现在应该会闪烁并自动启动新编译的 Matrix OS。

## 构建命令

以下是在 Matrix OS 中可以使用的一些有用构建命令：

- `clean` - 清理构建。
- `fullclean` - 更彻底地清理构建。如果遇到未定义引用或缺少文件时使用。
- `build` - 基于默认配置（OS/parameter.h）构建 Matrix OS。
- `build-release`、`build-rc`、`build-beta`、`build-nightly`、`build-dev` - 以各种模式构建 Matrix OS。`build-dev` 启用 USB 日志记录（参见<DocLink to="/docs/Developer/DebugMatrixOS/DebugMatrixOSCpp">调试 Matrix OS</DocLink>）。

可以将命令链接在一起，如：
```bash
make DEVICE=Mystrix clean build uf2-upload
```