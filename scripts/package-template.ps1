$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $projectRoot 'public/downloads'
New-Item -ItemType Directory -Force $outputDirectory | Out-Null
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$outputPath = Join-Path $outputDirectory 'forge-template.zip'
$files = @('package.json', 'package-lock.json', 'tsconfig.json', 'next-env.d.ts', 'postcss.config.mjs', '.gitignore', 'README.md', 'public/forge-guide.md')
$folders = @('app', 'components', 'lib', 'scripts', 'public/images')
$stream = [System.IO.File]::Open($outputPath, [System.IO.FileMode]::Create)
$archive = [System.IO.Compression.ZipArchive]::new($stream, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($relativePath in $files) {
    $source = Join-Path $projectRoot $relativePath
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $source, "forge/$relativePath", [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
  }
  foreach ($folder in $folders) {
    foreach ($file in Get-ChildItem -LiteralPath (Join-Path $projectRoot $folder) -File -Recurse) {
      $relativePath = $file.FullName.Substring($projectRoot.Length + 1).Replace('\', '/')
      [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $file.FullName, "forge/$relativePath", [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
  }
} finally { $archive.Dispose() }
Write-Output "Created $outputPath"
