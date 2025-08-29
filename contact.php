<?php
// Basic contact form handler
// Configure your recipient and sender
$to = 'Info@adi.sa'; // TODO: change if needed
$fromEmail = 'no-reply@yourdomain.com'; // Use your domain for best deliverability
$fromName  = 'Website Contact Form';

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Method Not Allowed';
    exit;
}

// Simple honeypot
if (!empty($_POST['company'])) {
    // Silently accept to mislead bots
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['status' => 'ok']);
    exit;
}

// Helper to sanitize and prevent header injection
function sanitize_text($key) {
    $val = isset($_POST[$key]) ? trim($_POST[$key]) : '';
    $val = str_replace(["\r", "\n"], [' ', ' '], $val);
    return $val;
}

$name     = sanitize_text('name');
$email    = filter_var(isset($_POST['email']) ? trim($_POST['email']) : '', FILTER_VALIDATE_EMAIL);
$phone    = sanitize_text('phone');
$message  = sanitize_text('message');
$language = sanitize_text('language');

// Basic validation
$errors = [];
if ($name === '')   { $errors[] = 'Name is required.'; }
if (!$email)        { $errors[] = 'Valid email is required.'; }
if ($message === ''){ $errors[] = 'Message is required.'; }

if (!empty($errors)) {
    http_response_code(422);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['status' => 'error', 'errors' => $errors]);
    exit;
}

// Build email
$subject = 'New Contact Form Submission';
$bodyLines = [
    "You have a new contact form submission:",
    "",
    "Name: {$name}",
    "Email: {$email}",
    ($phone !== '' ? "Phone: {$phone}" : ''),
    ($language !== '' ? "Language: {$language}" : ''),
    "",
    "Message:",
    $message,
];
$body = implode("\n", array_filter($bodyLines, fn($l) => $l !== ''));

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: ' . sprintf('%s <%s>', $fromName, $fromEmail);
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

// Attempt to send
$sent = @mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, implode("\r\n", $headers));

// Respond
$isAjax = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
          || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false);

if ($isAjax) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['status' => $sent ? 'ok' : 'error']);
    exit;
}

// Basic HTML fallback
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank You</title>
  <style>
    body{font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#0f172a; color:#e2e8f0; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0}
    .card{background:#1e293b; border:1px solid #334155; padding:2rem; max-width:560px; width:100%;}
    a{color:#38bdf8}
  </style>
  <meta http-equiv="refresh" content="6; url=index.html#contact">
  <!-- Redirect back after a few seconds -->
  </head>
<body>
  <div class="card">
    <h1 style="margin-top:0;">Thank you</h1>
    <p><?php echo $sent ? 'Your message has been sent successfully.' : 'Sorry, we could not send your message at this time.'; ?></p>
    <p><a href="index.html#contact">Back to site</a></p>
  </div>
</body>
</html>

