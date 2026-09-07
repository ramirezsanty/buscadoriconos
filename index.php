<?php $cdn = require 'cdn.php'; ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explorador profesional de iconos gratuitos: Boxicons v3, v2, Bootstrap, Remix y Tabler Icons. Busca, visualiza y copia clases CSS y unicode fácilmente.">
  <meta name="theme-color" content="#3b82f6">
  <title>Explorador de Iconos — Boxicons v3, v2, Bootstrap, Remix y Tabler Icons</title>

  <!-- Las tres fuentes cargadas -->
  <!-- Basic Icons -->
  <link href="<?= $cdn['boxicons-v3-basic'] ?>" rel="stylesheet">
  <!-- Filled Icons -->
  <link href="<?= $cdn['boxicons-v3-filled'] ?>" rel="stylesheet">
  <!-- Brand Icons -->
  <link href="<?= $cdn['boxicons-v3-brands'] ?>" rel="stylesheet">

  <!-- V2 Icons -->
  <link href="<?= $cdn['boxicons-v2'] ?>" rel="stylesheet">

  <!-- Bootstrap icons -->
  <link rel="stylesheet" href="<?= $cdn['bootstrap-icons'] ?>">

  <!-- Remix Icon -->
  <link href="<?= $cdn['remixicon'] ?>" rel="stylesheet">

  <!-- Tabler Icons -->
  <link rel="stylesheet" href="<?= $cdn['tabler-icons'] ?>" />

  <!-- DataTables.net CSS -->
  <link href="<?= $cdn['datatables-css'] ?>" rel="stylesheet">
  <link href="<?= $cdn['datatables-fixedheader-css'] ?>" rel="stylesheet">

  <!-- Estilos personalizados -->
  <link rel="stylesheet" href="css/estilos.css?v=<?= time(); ?>">
</head>

<body>

  <header class="main-header">
    <h1>
      <i class="bxl bx-boxicons" aria-hidden="true"></i><i class="bxl bx-bootstrap" aria-hidden="true"></i>
      Boxicons v3.0.8, v2, Bootstrap, Remix y Tabler Icons - Explorador de iconos gratuitos
    </h1>
  </header>
  <button id="theme-toggle" class="theme-toggle" aria-label="Cambiar entre modo claro y oscuro" type="button">
    <i class="bx bx-moon" aria-hidden="true"></i>
  </button>
  <nav class="tabsysearch" aria-label="Categorías de iconos">
    <div class="tabs" role="tablist">
      <div class="tab-group">
        <span class="tab-group-label">Boxicons v3</span>
        <button class="tab-button" data-tab="basic" role="tab" aria-selected="true" aria-controls="basic" type="button">Basic</button>
        <button class="tab-button" data-tab="filled" role="tab" aria-selected="false" aria-controls="filled" type="button">Filled</button>
        <button class="tab-button" data-tab="brands" role="tab" aria-selected="false" aria-controls="brands" type="button">Brands</button>
      </div>
      <div class="tab-group">
        <span class="tab-group-label">Boxicons v2</span>
        <button class="tab-button" data-tab="v2" role="tab" aria-selected="false" aria-controls="v2" type="button">V2 Basic</button>
        <button class="tab-button" data-tab="v2-solid" role="tab" aria-selected="false" aria-controls="v2-solid" type="button">V2 Solid</button>
        <button class="tab-button" data-tab="v2-logos" role="tab" aria-selected="false" aria-controls="v2-logos" type="button">V2 Logos</button>
      </div>
      <div class="tab-group">
        <span class="tab-group-label">Bootstrap Icons</span>
        <button class="tab-button" data-tab="bootstrap" role="tab" aria-selected="false" aria-controls="bootstrap" type="button">Bootstrap Icons</button>
      </div>
      <div class="tab-group">
        <span class="tab-group-label">Remix Icon</span>
        <button class="tab-button" data-tab="remix" role="tab" aria-selected="false" aria-controls="remix" type="button">Remix Icon</button>
      </div>
      <div class="tab-group">
        <span class="tab-group-label">Tabler Icons</span>
        <button class="tab-button" data-tab="tabler" role="tab" aria-selected="false" aria-controls="tabler" type="button">Tabler Icons</button>
      </div>
    </div>

    <select id="tab-select" class="tab-select" aria-label="Seleccionar categoría de iconos">
      <optgroup label="Boxicons v3">
        <option value="basic" selected>Basic</option>
        <option value="filled">Filled</option>
        <option value="brands">Brands</option>
      </optgroup>
      <optgroup label="Boxicons v2">
        <option value="v2">V2 Basic</option>
        <option value="v2-solid">V2 Solid</option>
        <option value="v2-logos">V2 Logos</option>
      </optgroup>
      <optgroup label="Bootstrap Icons">
        <option value="bootstrap">Bootstrap Icons</option>
      </optgroup>
      <optgroup label="Remix Icon">
        <option value="remix">Remix Icon</option>
      </optgroup>
      <optgroup label="Tabler Icons">
        <option value="tabler">Tabler Icons</option>
      </optgroup>
    </select>
  </nav>

  <main>

  <!-- Pestaña Basic -->
  <div id="basic" class="tab-content active">
    <div class="status" id="status-basic">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-basic">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-basic"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña Filled -->
  <div id="filled" class="tab-content">
    <div class="status" id="status-filled">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-filled">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-filled"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña Brands -->
  <div id="brands" class="tab-content">
    <div class="status" id="status-brands">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-brands">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-brands"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña V2 -->
  <div id="v2" class="tab-content">
    <div class="status" id="status-v2">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-v2">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-v2"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña V2 Solid -->
  <div id="v2-solid" class="tab-content">
    <div class="status" id="status-v2-solid">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-v2-solid">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-v2-solid"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña V2 Logos -->
  <div id="v2-logos" class="tab-content">
    <div class="status" id="status-v2-logos">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-v2-logos">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-v2-logos"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña Bootstrap Icons -->
  <div id="bootstrap" class="tab-content">
    <div class="status" id="status-bootstrap">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-bootstrap">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-bootstrap"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña Remix Icon -->
  <div id="remix" class="tab-content">
    <div class="status" id="status-remix">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-remix">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-remix"></tbody>
      </table>
    </div>
  </div>

  <!-- Pestaña Tabler Icons -->
  <div id="tabler" class="tab-content">
    <div class="status" id="status-tabler">Cargando iconos...</div>
    <div class="contenedortabla">
      <table id="table-tabler">
        <thead>
          <tr>
            <th>Icono</th>
            <th>Nombre</th>
            <th>Clase CSS</th>
            <th>Unicode (hex)</th>
          </tr>
        </thead>
        <tbody id="body-tabler"></tbody>
      </table>
    </div>
  </div>

  </main>

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- DataTables.net JS -->
  <script src="<?= $cdn['datatables-js'] ?>"></script>
  <script src="<?= $cdn['datatables-fixedheader-js'] ?>"></script>

  <!-- URLs de los iconos para el parser -->
  <script>
    window.__CDN_URLS = <?= json_encode($cdn, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;
  </script>

  <script src="js/configuracionboxicons.js?v=<?= filemtime('js/configuracionboxicons.js'); ?>"></script>

</body>

</html>