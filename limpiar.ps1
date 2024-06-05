$sourceDir = "C:\Tesis\despliegue\test"
$dockerfilePath = "C:\Tesis\despliegue\Dockerfile"

cd $sourceDir

Get-ChildItem -Directory | ForEach-Object {
    $projectDir = $_.FullName
    Copy-Item -Path $dockerfilePath -Destination $projectDir -Force
    $jarFile = Get-ChildItem -Path "$projectDir\target" -Filter *.jar -Recurse

    if ($jarFile) {
        Copy-Item -Path $jarFile.FullName -Destination $projectDir -Force
    }

    # Eliminar todos los archivos excepto Dockerfile y el archivo JAR
    Get-ChildItem -Path $projectDir -File | Where-Object { $_.Name -notin @("Dockerfile", $jarFile.Name) } | Remove-Item -Force

    # Eliminar todos los directorios
    Get-ChildItem -Path $projectDir -Directory -Force | Remove-Item -Recurse -Force
}
