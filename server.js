const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 제공 (index.html, app.js, css 등)
app.use(express.static(path.join(__dirname, '.')));

// Railway에서 환경변수 PORT 자동 주입
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
