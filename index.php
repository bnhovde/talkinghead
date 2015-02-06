<?php
if ($_GET['run']) {
  # This code will run if ?run=true is set.
  exec("./Speech.sh testing!");
}
?>

<!-- This link will add ?run=true to your URL, myfilename.php?run=true -->
<a href="?run=true">Speak!</a>