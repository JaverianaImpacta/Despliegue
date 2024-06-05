Get-ChildItem -Directory | ForEach-Object {
    Set-Location $_.FullName
    Write-Host "Building project in directory: $($_.FullName)"
    mvn clean package -DskipTests
    Set-Location ..
}