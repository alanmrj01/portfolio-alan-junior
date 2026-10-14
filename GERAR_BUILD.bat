@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo ERRO: Node.js nao encontrado.
  pause
  exit /b 1
)
if not exist "node_modules\" call npm install
if errorlevel 1 (
  echo Falha na instalacao de dependencias.
  pause
  exit /b 1
)
call npm run build
if errorlevel 1 (
  echo ERRO: O build nao foi concluido.
  pause
  exit /b 1
)
echo Build gerado na pasta dist.
pause
