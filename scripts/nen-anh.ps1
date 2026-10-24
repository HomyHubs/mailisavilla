# Nen anh villa trong src/assets/villas bang ffmpeg.
# - Backup ban goc (chua nen) sang image-backup-goc/ truoc khi nen (de rollback).
# - Resize chieu rong toi da 1600px, giu ti le; chat luong JPEG q=4 (~80%).
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$srcRoot = Join-Path $root 'src\assets\villas'
$backupRoot = Join-Path $root 'image-backup-goc'

# 1) Backup (chi backup 1 lan, khong ghi de neu da co)
if (-not (Test-Path $backupRoot)) {
  Write-Host 'Backup anh goc (chua nen) -> image-backup-goc/ ...'
  Copy-Item -Recurse $srcRoot $backupRoot
  Write-Host 'Backup xong.'
} else {
  Write-Host 'Da co image-backup-goc tu truoc, bo qua buoc backup.'
}

# 2) Nen tung anh tai cho
$imgs = Get-ChildItem -Recurse $srcRoot -File -Include *.jpg,*.jpeg,*.png,*.webp
$before = ($imgs | Measure-Object Length -Sum).Sum
Write-Host ('So anh se nen: ' + $imgs.Count)

foreach ($img in $imgs) {
  $tmp = [System.IO.Path]::Combine($img.DirectoryName, ('_tmp_' + $img.Name + '.jpg'))
  & ffmpeg -y -loglevel error -i "$($img.FullName)" -vf "scale='min(1600,iw)':-2" -q:v 4 "$tmp" 2>$null
  if ((Test-Path $tmp) -and ((Get-Item $tmp).Length -gt 0)) {
    if ((Get-Item $tmp).Length -lt $img.Length) {
      Move-Item $tmp $img.FullName -Force
    } else {
      Remove-Item $tmp -Force
    }
  }
}

$after = (Get-ChildItem -Recurse $srcRoot -File -Include *.jpg,*.jpeg,*.png,*.webp | Measure-Object Length -Sum).Sum
Write-Host ('Dung luong TRUOC: {0:N1} MB' -f ($before/1MB))
Write-Host ('Dung luong SAU:   {0:N1} MB' -f ($after/1MB))
Write-Host 'DONE nen-anh'
