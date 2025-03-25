# 🌍 Global Time Display 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features
- 12 global cities with flags & Chinese names  
- Interactive world map mode (click 🌍 button)  
- Real-time updating clocks  
- Tech-inspired UI with neon effects  

## 🚀 Deployment

### Docker (Recommended)
```bash
# Start container
docker-compose up -d --build

# Access at
http://localhost:59843
```

### Manual Setup
```bash
python3 -m http.server 59843
```

## 📦 Project Structure
```
.
├── index.html          # Main application
├── Dockerfile          # Container configuration  
└── docker-compose.yml  # Deployment orchestration
```

## 📜 License
MIT License - See [LICENSE](LICENSE) for details.