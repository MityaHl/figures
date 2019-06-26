<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <script src="https://use.fontawesome.com/c45d39d757.js"></script>
    <!-- Styles -->
</head>
<body>
<div id="root">

</div>
<script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
