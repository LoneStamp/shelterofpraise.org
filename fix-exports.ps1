$pagesDir = Join-Path $PSScriptRoot "src\pages"
$pageFiles = Get-ChildItem -Path $pagesDir -Filter "*.tsx" -File

foreach ($file in $pageFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove unused React import if it exists
    $content = $content -replace "^import React[^;]+;\s*\r?\n?", ""
    
    # Add default export if it doesn't exist
    if (-not $content.Contains("export default")) {
        if ($content -match "const\s+(\w+)\s*=\s*\(") {
            $componentName = $matches[1]
            $content = $content.Trim() + "`n`nexport default $componentName;`n"
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "Updated $($file.Name)"
        }
    } else {
        Write-Host "Skipped $($file.Name) - already has default export"
    }
}

Write-Host "All page components have been processed."
