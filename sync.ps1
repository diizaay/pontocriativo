# Script para sincronizar alterações com o Git
# Uso: .\sync.ps1 "mensagem do commit"

param(
    [string]$Message = "Atualizações automáticas"
)

Write-Host "`n=== Pontocriativo - Sincronização Git ===" -ForegroundColor Cyan
Write-Host ""

# Mostrar status atual
Write-Host "📋 Status das alterações:" -ForegroundColor Yellow
git status --short

# Adicionar todas as alterações
Write-Host "`n📦 Adicionando alterações..." -ForegroundColor Yellow
git add .

# Fazer commit
Write-Host "💾 Criando commit: $Message" -ForegroundColor Yellow
git commit -m "$Message"

# Fazer push
Write-Host "`n🚀 Enviando para o GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "`n✅ Sincronização completa!" -ForegroundColor Green
Write-Host "   Frontend (Vercel) e Backend (Render) serão atualizados automaticamente." -ForegroundColor Gray
Write-Host ""
