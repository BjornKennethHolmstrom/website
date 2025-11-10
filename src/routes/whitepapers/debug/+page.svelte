<script>
    import { page } from '$app/stores';
</script>

<h1>DEBUG: Whitepaper Route</h1>
<p>Current route: {$page.url.pathname}</p>
<p>Params: {JSON.stringify($page.params)}</p>
<p>Route ID: {$page.route.id}</p>

<pre>
URL: {$page.url.href}
Path: {$page.url.pathname}  
Params: {JSON.stringify($page.params, null, 2)}
Route: {$page.route.id}
</pre>
