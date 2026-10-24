# asset-0: Chuẩn hoá & copy ảnh villa vào public/images/<loại>/
# Lấy tối đa N ảnh đẹp mỗi loại, đổi tên 01.jpg, 02.jpg... và chọn ảnh đầu làm cover.jpg
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root 'assets-mailisa\Mailisa Villa'
$maxPerType = 16

$types = @('3pn','6pn','7pn','9pn')

foreach ($t in $types) {
  $srcDir = Join-Path $src $t
  if (-not (Test-Path $srcDir)) { Write-Host "SKIP $t (no source)"; continue }

  # Lấy tất cả ảnh trong thư mục loại (đệ quy, bỏ qua thumbnail nhỏ)
  $imgs = Get-ChildItem -Path $srcDir -Recurse -File -Include *.jpg,*.jpeg,*.png |
          Where-Object { $_.Length -gt 30000 } |
          Sort-Object Name |
          Select-Object -First $maxPerType

  if ($imgs.Count -eq 0) {
    $imgs = Get-ChildItem -Path $srcDir -Recurse -File -Include *.jpg,*.jpeg,*.png |
            Sort-Object Name | Select-Object -First $maxPerType
  }

  $destDir = Join-Path $root "public\images\$t"
  New-Item -ItemType Directory -Force -Path $destDir | Out-Null

  $i = 0
  foreach ($img in $imgs) {
    $i++
    $name = '{0:D2}.jpg' -f $i
    Copy-Item $img.FullName (Join-Path $destDir $name) -Force
  }
  # cover = ảnh đầu tiên
  if ($imgs.Count -gt 0) {
    Copy-Item $imgs[0].FullName (Join-Path $destDir 'cover.jpg') -Force
  }
  Write-Host "$t -> copied $($imgs.Count) images"
}
Write-Host 'DONE copy-images'
