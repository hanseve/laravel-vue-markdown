<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>MarkDown</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <script src="{{ mix('/js/app.js') }}"></script>
    </head>
    <body>
        <div id="mdApp" class="columns">
            <md-half-editor class="column" @preview="show"></md-half-editor>
            <md-half-preview class="column" :md="md_html"></md-half-preview>
        </div>
        <script src="{{ mix('/js/markdown/app.js') }}"></script>
    </body>
</html>
