$uri = "http://localhost:3000/api/interview/learning-topics"
$body = @{
    role = "Software Engineer"
    company = "Google"
    level = "intermediate"
} | ConvertTo-Json

Write-Host "Testing API endpoint: $uri"
Write-Host "Request body: $body"

try {
    $response = Invoke-WebRequest -Uri $uri -Method POST -ContentType "application/json" -Body $body -ErrorAction Stop
    Write-Host "Status Code: $($response.StatusCode)"
    Write-Host "Response Headers:" 
    $response.Headers | Format-Table
    Write-Host "Response Content:"
    Write-Host $response.Content
} catch {
    Write-Host "Error: $_"
    Write-Host "Status Code: $($_.Exception.Response.StatusCode.Value)"
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $content = $reader.ReadToEnd()
        Write-Host "Error Response: $content"
    }
}
