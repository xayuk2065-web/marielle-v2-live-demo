<?php
if(!defined('ABSPATH')) exit;
$source=file_get_contents(get_template_directory().'/assets/approved-demo.html');
if(false===$source){status_header(500);echo 'Approved source unavailable';return;}
$base=esc_url(get_template_directory_uri().'/assets');
foreach(array('marielle-refinement.css','marielle-details.css') as $name){
$source=str_replace('</head>','<link rel="stylesheet" href="'.$base.'/'.$name.'"></head>',$source);
}
foreach(array('marielle-refinement.js','marielle-details.js') as $name){
$source=str_replace('</body>','<script defer src="'.$base.'/'.$name.'"></script></body>',$source);
}
ob_start();wp_head();$head=ob_get_clean();
ob_start();wp_footer();$footer=ob_get_clean();
$source=str_replace('</head>',$head.'</head>',$source);
$source=str_replace('</body>',$footer.'</body>',$source);
echo $source; // original approved markup, with WordPress hooks and sidecars only
