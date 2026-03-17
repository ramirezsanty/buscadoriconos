<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Revisar Boxicons v3.0.8, v2 y Bootstrap Icons</title>

  <!-- Las tres fuentes cargadas -->
  <!-- Basic Icons -->
  <link href="https://cdn.boxicons.com/3.0.8/fonts/basic/boxicons.min.css" rel="stylesheet">
  <!-- Filled Icons -->
  <link href="https://cdn.boxicons.com/3.0.8/fonts/filled/boxicons-filled.min.css" rel="stylesheet">
  <!-- Brand Icons -->
  <link href="https://cdn.boxicons.com/3.0.8/fonts/brands/boxicons-brands.min.css" rel="stylesheet">

  <!-- V2 Icons -->
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">

  <!-- Bootstrap icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.css">

  <!-- DataTables.net CSS -->
  <link href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.min.css" rel="stylesheet">
  <link href="https://cdn.datatables.net/2.1.8/css/dataTables.dataTables.css" rel="stylesheet">
  <link href="https://cdn.datatables.net/fixedheader/4.0.1/css/fixedHeader.dataTables.min.css" rel="stylesheet">

  <!-- Estilos personalizados -->
  <link rel="stylesheet" href="css/estilos.css?v=<?= time(); ?>">
</head>

<body>

  <header class="main-header">
    <h1>
      <i class="bxl bx-boxicons"></i><i class="bxl bx-bootstrap"></i>
      Boxicons v3.0.8, v2 y Bootstrap Icons – Explorador de iconos gratuitos
    </h1>
  </header>
  <button id="theme-toggle" class="theme-toggle" aria-label="Cambiar modo oscuro">
    <i class="bx bx-moon"></i>
  </button>
  <div class="tabsysearch">
    <div class="tabs">
      <button class="tab-button" data-tab="basic">Basic Icons</button>
      <button class="tab-button" data-tab="filled">Filled Icons</button>
      <button class="tab-button" data-tab="brands">Brands Icons</button>
      <button class="tab-button" data-tab="v2">V2 Basic</button>
      <button class="tab-button" data-tab="v2-solid">V2 Solid</button>
      <button class="tab-button" data-tab="v2-logos">V2 Logos</button>
      <button class="tab-button" data-tab="bootstrap">Bootstrap Icons</button>
    </div>
  </div>

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

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <!-- DataTables.net JS -->
  <script src="https://cdn.datatables.net/2.1.8/js/dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/2.1.8/js/dataTables.js"></script>
  <script src="https://cdn.datatables.net/fixedheader/4.0.1/js/dataTables.fixedHeader.min.js"></script>

  <script src="js/configuracionboxicons.js?v=<?= filemtime('js/configuracionboxicons.js'); ?>"></script>

</body>

</html>