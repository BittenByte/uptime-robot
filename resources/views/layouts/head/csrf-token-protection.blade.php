<meta name="csrf-token" content="{{ csrf_token() }}">
<script>
    {{-- Axios needs this object to be set. See /resources/assets/js/bootstrap.js --}}
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
    ]); ?>
</script>