@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo ERRO: Node.js nao encontrado. Instale Node.js LTS antes de continuar.
  pause
  exit /b 1
)
if not exist "node_modules\" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Falha ao instalar dependencias. Verifique a conexao com a internet.
    pause
    exit /b 1
  )
)
echo Iniciando o portfolio...
call npm run dev
pause
