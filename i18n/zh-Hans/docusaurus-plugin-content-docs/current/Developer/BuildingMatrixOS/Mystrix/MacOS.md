---
sidebar_position: 2
---

# 在 macOS 上构建

## 安装 Homebrew
Homebrew 是 macOS 和 Linux 的流行包管理器，可以从命令行高效安装和管理软件。我们将用它来安装构建 Matrix OS 所需的依赖项。

1. 访问 [https://brew.sh/](https://brew.sh/) 并按照说明安装最新版本的 Homebrew
2. 安装后，可能需要按照屏幕上的说明将 Homebrew 添加到系统 PATH。安装完成后，运行以下命令验证：

```bash
brew --version
```

## 安装依赖项
Matrix OS 代码库托管在 Git 仓库中，它还使用 Espressif IoT 开发框架来构建和上传到魔矩设备。通过运行以下命令安装依赖项：

```bash
brew install git cmake ninja dfu-util python3 psutil
```

## 克隆 Matrix OS 仓库
1. 克隆 Matrix OS 仓库：
   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

2. 进入克隆的仓库：
   ```bash
   cd MatrixOS
   ```

3. 初始化 Matrix OS 仓库中的子模块：
   ```bash
   git submodule update --init
   ```

## 安装 ESP IDF v5.3.1
运行以下命令设置 ESP IDF
```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.3.1 --recursive https://github.com/espressif/esp-idf.git
cd ~/esp/esp-idf
./install.sh esp32
python3 $HOME/esp/esp-idf/tools/idf_tools.py install riscv32-esp-elf
```

## 构建 Matrix OS
1. Load ESP-IDF by sourcing it in your terminal session. You can run this command to set up ESP-IDF for the session:
   ```bash
   source ~/esp/esp-idf/export.sh
   ```

   In the long run, you will want to automate this. You could add this line to your shell's configuration file (e.g., `.zshrc` or `.bash_profile`) or if you are using VS Code, you can modify the MatrixOS.code-workspace file and adapt it to run it on new terminal. You can also use `.zshrc` and add `alias get_idf='. $HOME/esp/esp-idf/export.sh'`. Then you can run `get_idf` to get esp idf in your environment.

2. Go to the root folder of Matrix OS if your terminal isn’t already there.
3. Run this command to build Matrix OS:
   ```bash
   make DEVICE=Mystrix build
   ```
4. Prepare to upload to your Mystrix device. Make sure your Mystrix is in [upload mode](/docs/Mystrix/MystrixSpecific/UpdateMatrixOS#enter-os-update-mode) already.
5. Upload the compiled Matrix OS to Mystrix:
   ```bash
   make DEVICE=Mystrix uf2-upload
   ```
6. Your Mystrix device should now flash and automatically start the newly compiled Matrix OS.

## Build Commands

Here are some useful build commands you can use in Matrix OS:

- `clean` - Cleans the build.
- `fullclean` - Cleans the build more thoroughly. Use this if you encounter undefined references or missing files.
- `build` - Builds Matrix OS based on the default config (OS/parameter.h).
- `build-release`, `build-rc`, `build-beta`, `build-nightly`, `build-dev` - Builds Matrix OS in various modes. `build-dev` enables USB logging (see [Debug Matrix OS](/docs/Developer/DebugMatrixOS/DebugMatrixOSCpp)).

You can chain commands together like:
```bash
make DEVICE=Mystrix clean build uf2-upload
```
