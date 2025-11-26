const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>My Final Project</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <style>
    :root{
      --pink-1: #ffd6ec;
      --pink-2: #ffc1e3;
      --accent: #d63384;
      --card-bg: rgba(255,255,255,0.36);
    }

    body{
      margin:0;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      overflow:hidden;
      background: linear-gradient(135deg, var(--pink-1), var(--pink-2));
    }

    .bg {
      position: fixed;
      inset:0;
      z-index:0;
      overflow:hidden;
    }
    .bg span {
      position:absolute;
      display:block;
      width: 20px;
      height: 20px;
      background: rgba(255,182,193,0.7);
      border-radius: 50%;
      animation: float 15s linear infinite;
      box-shadow: 0 0 8px rgba(255,105,180,0.8);
    }

    @keyframes float {
      0% { transform: translateY(100vh) rotate(0deg) scale(0.5); opacity:0.3; }
      50% { opacity:0.8; }
      100% { transform: translateY(-100vh) rotate(360deg) scale(1); opacity:0; }
    }

    .card {
      position:relative;
      z-index:1;
      width: min(92vw, 760px);
      background: var(--card-bg);
      border-radius:22px;
      padding:40px 32px;
      box-shadow: 0 12px 40px rgba(214,51,132,0.14);
      backdrop-filter: blur(10px) saturate(140%);
      text-align:center;
      overflow:visible;
      border: 1px solid rgba(255,255,255,0.25);
      animation: cardFloat 4s ease-in-out infinite alternate, cardIn .9s cubic-bezier(.2,.9,.3,1) both;
    }

    @keyframes cardIn {
      from { transform: translateY(18px); opacity:0; }
      to   { transform: translateY(0); opacity:1; }
    }

    @keyframes cardFloat {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }

    .sparkle {
      position:absolute;
      width:12px;
      height:12px;
      border-radius:50%;
      background: linear-gradient(180deg,#fff,#ffd6f2);
      box-shadow: 0 6px 18px rgba(214,51,132,0.18);
      opacity:0.9;
      animation: sparkle 2.6s ease-in-out infinite;
      z-index:0;
    }
    .sp1{ top:-8%; left:8%; animation-delay:0s; }
    .sp2{ top:6%; right:-4%; animation-delay:.5s; }
    .sp3{ bottom:-6%; left:6%; animation-delay:1s; }
    .sp4{ bottom:2%; right:8%; animation-delay:1.5s; }

    @keyframes sparkle {
      0% { transform: scale(.8) translateY(0); opacity:.6; }
      50% { transform: scale(1.6) translateY(-10px); opacity:1; }
      100% { transform: scale(.9) translateY(0); opacity:.6; }
    }

    h1{
      margin:0 0 10px 0;
      font-size:2.6rem;
      color: var(--accent);
    }

    p.lead{
      margin:4px 0 22px;
      color:#7a1f55;
      font-size:1.1rem;
      font-weight:500;
    }

    .meta { 
      display:flex; 
      gap:18px; 
      justify-content:center; 
      flex-wrap:wrap; 
      margin-top:12px; 
    }

    .tag {
      background: rgba(255,255,255,0.16);
      padding:10px 16px;
      border-radius:999px;
      color:#5b143b;
      font-weight:500;
      border: 1px solid rgba(255,255,255,0.22);
      font-size:1rem;
    }

    .quote{
      margin-top:26px;
      font-style:italic;
      color:#8a2a62;
      font-size:1.1rem;
    }
  </style>
</head>
<body>
  <div class="bg" aria-hidden="true">
    ${Array(40).fill(0).map(() => '<span></span>').join('')}
  </div>

  <div class="card" role="main">
    <div class="sparkle sp1"></div>
    <div class="sparkle sp2"></div>
    <div class="sparkle sp3"></div>
    <div class="sparkle sp4"></div>

    <!-- ⭐ LOGO REMOVED (as requested) -->

    <h1>Hello Everyone!</h1>
    <p class="lead">Welcome, Lovely Visitor!</p>
    <p class="lead">Make yourself at home. This space is made with love, inspiration, and positivity.</p>

    <div class="meta">
      <div class="tag"><strong>Full Name:</strong> Margarette De Grano</div>
      <div class="tag"><strong>Class Section:</strong> IT-SM-4102</div>
    </div>

    <p class="quote">“God strengthens the path for those who walk with faith.”</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
