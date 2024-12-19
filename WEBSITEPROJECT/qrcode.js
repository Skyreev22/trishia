<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code Integration</title>
  <style>
    .qr-code-container {
      display: flex;
      justify-content: space-around;
      margin: 20px;
    }

    .qr-code-container div {
      text-align: center;
    }

    .qr-code-container img {
      width: 150px;
      height: 150px;
      border: 2px solid #ccc;
      border-radius: 10px;
    }

    .qr-code-container h3 {
      margin: 10px 0;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
</head>
<body>

  <section class="qr-codes" id="qr-codes">
    <h2>Scan QR Codes to Navigate</h2>
    <div class="qr-code-container">
      <!-- Static QR Code -->
      <div>
        <h3>Home Page</h3>
        <img src="qr-home.png" alt="QR Code for Home">
      </div>

      <!-- Dynamic QR Code -->
      <div>
        <h3>Explore Section</h3>
        <div id="qrcode-explore"></div>
      </div>
    </div>
  </section>

  <script>
    // Generate QR Code for the Explore Section
    new QRCode(document.getElementById("qrcode-explore"), {
      text: "https://yourwebsite.com#explore",
      width: 128,
      height: 128,
    });
  </script>

</body>
</html>
