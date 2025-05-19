# Cookie Extractor

A lightweight Chrome extension for extracting session cookies from CSGORoll

## 🚀 Features

- **🍪 Session Cookie Extraction** - Automatically detects and extracts session cookies from CSGORoll domains
- **🌐 Multi-Domain Support** - Works with multiple CSGORoll domains (csgoroll.com, csgorolltr.com, csgoroll.gg)
- **📋 One-Click Copy** - Copy cookies to clipboard with a single click
- **✨ Modern UI** - Beautiful gradient design with smooth animations and hover effects
- **🔄 Real-time Updates** - Automatically refreshes cookie data when switching domains
- **🎯 Domain Selector** - Easy switching between different CSGORoll domains

## 📦 Installation

### Manual Installation

1. **Download** or clone this repository
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable "Developer mode"** in the top right corner
4. **Click "Load unpacked"** and select the extension folder
5. **The Cookie Extractor icon** will appear in your toolbar

### From Chrome Web Store
*Coming soon...*

## 🔧 Usage

1. Visit any supported CSGORoll domain and log in
2. Click the Cookie Extractor icon in your browser toolbar
3. Select the domain you want to extract cookies from
4. If a session cookie is found, it will be displayed in the interface
5. Click "Copy Cookie" to copy the session cookie to your clipboard

## 🌐 Supported Domains

- `csgoroll.com`
- `csgorolltr.com`
- `csgoroll.gg`

## 🔒 Privacy & Security

This extension:

- ✅ Only accesses cookies from specified CSGORoll domains
- ✅ Does not send any data to external servers
- ✅ Operates entirely locally in your browser
- ✅ Does not store or log any cookie data

## ⚙️ Permissions

The extension requires the following permissions:

- **`cookies`** - To read session cookies from supported domains
- **`activeTab`** - To access the current tab when the popup is opened
- **Host permissions** - For CSGORoll domains to extract cookies from specific sites

## 🛠️ Development

### File Structure

```
cookie-extractor/
├── manifest.json      # Extension manifest
├── popup.html         # Extension popup interface
├── popup.js          # Main functionality
└── icons/            # Extension icons
    ├── icon-16.png
    ├── icon-48.png
    └── icon-128.png
```

### Building from Source

1. Clone the repository
2. Ensure all files are present
3. Load the extension in Chrome as described in the installation section

## 📋 Technical Details

- **Manifest Version**: 3 (Latest Chrome extension standard)
- **Framework**: Vanilla JavaScript
- **Styling**: CSS3 with animations and gradients
- **Permissions**: Minimal required permissions for functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This extension is for educational and legitimate use only. Users are responsible for ensuring their use complies with the terms of service of the websites they interact with.

---

<div align="center">
  <strong>🎲 Made for CSGORoll enthusiasts</strong>
</div>
