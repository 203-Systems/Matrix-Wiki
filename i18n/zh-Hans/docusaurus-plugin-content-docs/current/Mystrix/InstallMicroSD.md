---
sidebar_position: 3
---

# Install Micro SD Card

## Overview

In Matrix OS 3, a Micro SD card is required to enable Python application functionality. This guide will walk you through the process of installing a Micro SD card into your Mystrix device.

:::info Mystrix 2 Users
Mystrix 2 devices come preloaded with a 32GB SD card. This page only applies to Mystrix 1 family devices.
:::

## Requirements

- **Micro SD Card**: Any size (minimum 1GB recommended)
- **File System**: Must be formatted as FAT32
- **Tools**: Small Phillips head screwdriver
- **Time**: Approximately 10-15 minutes

:::warning Important
Ensure your Mystrix device is powered off and disconnected from all cables before beginning the installation process.
:::

## Step-by-Step Installation

### Step 1: Prepare the SD Card

Before installing the SD card, ensure it is properly formatted:

1. **Format the SD Card**: The card must be formatted as FAT32
   - On Windows: Right-click the SD card in File Explorer → Format → Select "FAT32"
   - On macOS: Use Disk Utility → Erase → Select "MS-DOS (FAT)"
   - On Linux: Use `mkfs.fat -F 32 /dev/sdX` (replace X with your device)

2. **Verify Format**: Confirm the SD card shows as FAT32 format before proceeding

### Step 2: Access the Internal Hardware

To install the Micro SD card, you'll need to open the Mystrix device:

1. **Power Off**: Ensure the device is completely powered off
2. **Remove Screws**: Carefully remove all **16 screws** from the back panel using a small Phillips head screwdriver
3. **Keep Screws Safe**: Place all screws in a small container to prevent loss
4. **Remove Back Panel**: Gently lift off the back panel to access the internal components

:::caution Handle with Care
Take care when handling the internal components. Avoid touching circuit boards or sensitive components.
:::

<!-- Image placeholder: Device with back panel removed showing internal layout -->
*[Image: Internal view of Mystrix with back panel removed]*

### Step 3: Locate the SD Card Slot

Once the back panel is removed:

1. **Identify the Slot**: Locate the Micro SD card slot on the main board
2. **Check Orientation**: Note the correct orientation for SD card insertion (usually marked on the board)

<!-- Image placeholder: Close-up of SD card slot location -->
*[Image: Close-up view of Micro SD card slot location on the main board]*

### Step 4: Insert the SD Card

1. **Orient Correctly**: Ensure the SD card is oriented properly. See the attached image for example
2. **Insert Gently**: Carefully slide the Micro SD card into the slot until it clicks into place
3. **Verify Secure**: Ensure the card is fully seated and secure in the slot

<!-- Image placeholder: SD card being inserted into slot -->
*[Image: Micro SD card being inserted into the slot]*

### Step 5: Reassemble the Device

1. **Replace Back Panel**: Carefully position the back panel back onto the device
2. **Reinstall Screws**: Replace all 16 screws, tightening them securely but not over-tightening
3. **Final Check**: Ensure all screws are properly installed and the panel is flush

<!-- Image placeholder: Device reassembled -->
*[Image: Fully reassembled Mystrix device]*

## Verification

After installation, verify the SD card is working properly:

1. **Power On**: Turn on your Mystrix device
2. **Check Device Settings**: Go to Device Settings and check if the USB Storage Mode button is lit up
3. **Test Python Apps**: Try installing or running a Python application to confirm functionality


## Important Notes

- **Backup**: Always backup important data before formatting the SD card
- **Quality**: Use a reliable, brand-name Micro SD card for best performance
- **Speed**: Class 10 or higher SD cards are recommended for optimal performance
- **Size**: While any size works, 8GB or larger provides ample space for Python applications


## Next Steps

Once your SD card is installed and working:

1. Try some of the included Python example applications
2. Explore the [Python Application Development](../Developer/PythonApplication) documentation
3. Consider developing your own custom Python applications

---

*Need help? Join our [Discord community](https://discord.gg/rRVCBHHPfw) for support and tips from other Mystrix users.*