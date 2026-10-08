# =========================================================================
# Julies Website - Automated GitHub Push Pipeline
# Target Repo: https://github.com/iamjulies/julieswebsite.git
# =========================================================================
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$root = if ($PSScriptRoot) { $PSScriptRoot } else { "c:\Users\DELL\Documents\Modding\julieswebsite" }
$gitCandidates = @(
    "C:\Users\DELL\Documents\flutter_windows_3.47.0-stable\flutter\bin\mingit\cmd\git.exe",
    "git"
)

$git = $null
foreach ($cand in $gitCandidates) {
    if (Test-Path $cand) {
        $git = $cand
        break
    }
}
if (-not $git) {
    $git = "git"
}

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   JULIES WEBSITE - GITHUB PUSH PIPELINE" -ForegroundColor Yellow
Write-Host "   Target: https://github.com/iamjulies/julieswebsite.git" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Check & Init Git
$gitDir = Join-Path $root ".git"
if (-not (Test-Path $gitDir)) {
    Write-Host "[*] Dang khoi tao Git repository..." -ForegroundColor Yellow
    & $git -C $root init
    & $git -C $root checkout -b main
    & $git -C $root config user.name "iamjulies"
    & $git -C $root config user.email "iamjulies.contact@gmail.com"
}

# 2. Token Resolution
$tokenFile = Join-Path $root ".git_token"
if (-not (Test-Path $tokenFile)) {
    $vocaToken = "C:\Users\DELL\Documents\Modding\VocaFlow\GITHUB_RELEASE\.git_token"
    if (Test-Path $vocaToken) {
        Copy-Item -Path $vocaToken -Destination $tokenFile -Force
    }
}

if (-not (Test-Path $tokenFile)) {
    Write-Host "[X] Khong tim thay file .git_token tai: $tokenFile" -ForegroundColor Red
    Write-Host "    Vui long tao file .git_token chua GitHub Personal Access Token de push tu dong." -ForegroundColor Yellow
    exit 1
}

$token = (Get-Content -Path $tokenFile -Raw).Trim()
$remoteUrl = "https://iamjulies:${token}@github.com/iamjulies/julieswebsite.git"

# 3. Add & Commit
$commitMsg = if ($args.Count -gt 0) { $args -join " " } else { "build 2: update profile Nong Duc Hao K76 HNUE, Julies branding, footer build indicator" }

Write-Host "[*] Dang them tap tin vao Git..." -ForegroundColor Yellow
& $git -C $root add -A

$status = & $git -C $root status --porcelain
if (-not $status) {
    Write-Host "[+] Khong co thay doi moi can commit. Dang dong bo voi GitHub..." -ForegroundColor Green
} else {
    Write-Host "[*] Dang commit: '$commitMsg'..." -ForegroundColor Yellow
    & $git -C $root commit -m "$commitMsg"
}

# 4. Set Remote & Push
& $git -C $root branch -M main
Write-Host "[*] Dang day code len GitHub main branch..." -ForegroundColor Cyan
& $git -C $root push $remoteUrl main --force --progress -v

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[V] DONG BO GITHUB THANH CONG 100%! 🚀" -ForegroundColor Green
    Write-Host "    Repository: https://github.com/iamjulies/julieswebsite" -ForegroundColor Cyan
} else {
    Write-Host "`n[X] Co loi xay ra khi push len GitHub (Exit code: $LASTEXITCODE)" -ForegroundColor Red
    Write-Host "    Luu y: Hay dam bao repository 'julieswebsite' da duoc tao tren tai khoan GitHub cua ban (https://github.com/new)." -ForegroundColor Yellow
}
