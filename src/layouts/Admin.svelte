<script>
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "stories/Navbars/AdminNavbar.svelte";
  import Sidebar from "stories/Sidebar/Sidebar.svelte";
  import HeaderStats from "stories/Headers/HeaderStats.svelte";
  import FooterAdmin from "stories/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";

  export let location;
</script>

<div>
  <Sidebar {location} />
  <div class="relative md:ml-64 bg-gray-200">
    <AdminNavbar />
    <HeaderStats />
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="admin">
        <Route path="dashboard" component={Dashboard} />
        <Route path="settings" component={Settings} />
        <Route path="tables" component={Tables} />
      </Router>
      <FooterAdmin />
    </div>
  </div>
</div>
