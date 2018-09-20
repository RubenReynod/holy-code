<style type="text/css">
	table{
		border-collapse: collapse;
		width: 100%;
	}
	table td, table th{
		margin: 0;
		padding: 0;
		color: #232c3a;
	}
	.logo{
        height: 90px;
	}
	.logo img{
		height: 70px;
	}
</style>
<body>
	<table style="width: 100%;">
		<tr>
			<td class="logo" style="width: 100%; text-align: center; border-bottom: 2px solid #C61F30" colspan="2">
        <?php $url = (isset($_SERVER['HTTPS'])?"https":"http")."://".$_SERVER['HTTP_HOST']; ?>
				<a href="<?=$url?>"><img src="<?=$url?>/public/images/logoGray.png"></a>
			</td>
		</tr>
		<tr>
			<td class="body" style="padding-bottom: 30px; padding-top: 30px; width: 100%;">

				<h3 style="width: 100%; text-align: center; margin-bottom: 30px;"><b>INFORMACIÓN DEL USUARIO</b></h3>

				<table style="width: 100%;">
					<tr>
						<td style="padding-left: 20px; width: 100px;"><b>Nombre: </b></td>
						<td>{!! $name !!}</td>
					</tr>
					<tr>
						<td style="padding-left: 20px; width: 100px;"><b>Correo: </b></td>
						<td>{!! $email !!}</td>
					</tr>
					<tr>
						<td style="padding-left: 20px; width: 100px;"><b>Teléfono: </b></td>
						<td>{!! $phone !!}</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td style="text-align: center; width: 100%; background: #C61F30; color: white; padding: 20px 0; " colspan="2">© 2018 BYNET <br>TODOS LOS DERECHOS RESERVADOS </td>
		</tr>
	</table>

</body>
