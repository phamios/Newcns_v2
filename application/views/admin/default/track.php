<?php //echo $pages; ?>

<table width="100%">

<?php 
	foreach($logs as $log):
?>
	<tr>
		<td><?php echo $log->ipaddress?></td>
		<td><?php echo $log->controller?></td>
		<td><?php echo $log->datecreated?></td>
		<td><?php echo $log->userid?></td>
	</tr>
<?php endforeach;?>

</table>