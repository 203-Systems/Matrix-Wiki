---
sidebar_position: 2
---

# Building on macOS

## Installing Homebrew
Homebrew is a popular package manager for macOS and Linux, allowing you to install and manage software efficiently from the command line. We will use it to install the dependencies needed to build Matrix OS.

1. Visit [https://brew.sh/](https://brew.sh/) and follow the instructions to install the latest version of Homebrew
2. After installation, you may need to follow any on-screen instructions to add Homebrew to your system's PATH. Once installed, verify it by running:

```bash
brew --version
```

## Install Dependencies
The Matrix OS codebase is hosted in a Git repository, it also uses the Espressif IoT Development Framework for building and uploading to the Mystrix device. We'll install the dependencies for both by running:

```bash
brew install git cmake ninja dfu-util python3 psutils
```

## Clone Matrix OS repo
1. Clone the Matrix OS repository:
   ```bash
   git clone https://github.com/203-Systems/MatrixOS.git
   ```

2. Navigate to the cloned repository:
   ```bash
   cd MatrixOS
   ```

3. Initialize the submodules in the Matrix OS repository:
   ```bash
   git submodule update --init
   ```

## Install ESP IDF v5.3.1
Run the following to set up the ESP IDF
```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.3.1 --recursive https://github.com/espressif/esp-idf.git
cd ~/esp/esp-idf
./install.sh esp32
python3 $HOME/esp/esp-idf/tools/idf_tools.py install riscv32-esp-elf
```

## Build Matrix OS
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
