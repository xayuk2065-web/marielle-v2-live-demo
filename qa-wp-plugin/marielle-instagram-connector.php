<?php
/**
 * Plugin Name: Marielle Instagram Connector (QA Candidate)
 * Description: Optional, editable Instagram link for locked Marielle footer. NOT an Instagram feed.
 * Version: 0.1.0-qa
 */
if(!defined('ABSPATH'))exit;
function marielle_ig_validate_url($value){
 if(empty($value))return '';
 $value=esc_url_raw(trim((string)$value),array('https'));
 $host=strtolower((string)wp_parse_url($value,PHP_URL_HOST));
 $path=trim((string)wp_parse_url($value,PHP_URL_PATH),'/');
 if(!in_array($host,array('instagram.com','www.instagram.com'),true))return '';
 if(!preg_match('~^[a-zA-Z0-9._]{1,30}$~D',$path))return '';
 if(in_array(strtolower($path),array('explore','accounts','reel','p','stories'),true))return '';
 return 'https://www.instagram.com/'.$path.'/';
}
add_action('admin_init',function(){
 register_setting('marielle_instagram','marielle_instagram_profile',array('type'=>'string','default'=>'','sanitize_callback'=>'marielle_ig_validate_url'));
 add_settings_section('marielle_ig_main','Profile link',function(){echo '<p>Enter your actual Instagram profile URL. This adds a link, not a live feed.</p>';},'marielle-instagram');
 add_settings_field('marielle_ig_url','Instagram URL',function(){
 echo '<input type="url" class="regular-text" name="marielle_instagram_profile" value="'.esc_attr(get_option('marielle_instagram_profile','')).'" placeholder="https://www.instagram.com/yourprofile/">';
 },'marielle-instagram','marielle_ig_main');
});
add_action('admin_menu',function(){
 add_options_page('Marielle Instagram','Marielle Instagram','manage_options','marielle-instagram',function(){
  if(!current_user_can('manage_options'))wp_die('Permission denied');
  echo '<div class="wrap"><h1>Marielle Instagram</h1><form action="options.php" method="post">';
  settings_fields('marielle_instagram');do_settings_sections('marielle-instagram');submit_button();
  echo '</form></div>';
 });
});
add_action('wp_footer',function(){
 $url=marielle_ig_validate_url(get_option('marielle_instagram_profile',''));
 if(!$url)return;
 ?><script>(function(){'use strict';
 var url=<?php echo wp_json_encode($url); ?>;
 function connect(){var footer=document.querySelector('.mar-footer');if(!footer)return;
 var headings=footer.querySelectorAll('h3'),target=null;
 for(var i=0;i<headings.length;i++){if(headings[i].textContent.trim().toUpperCase()==='FOLLOW ALONG'){target=headings[i];break;}}
 if(!target)return;var list=target.parentElement.querySelector('ul');if(!list||list.querySelector('[data-marielle-instagram]'))return;
 var li=document.createElement('li'),a=document.createElement('a');
 a.href=url;a.textContent='Instagram';a.setAttribute('data-marielle-instagram','');
 a.target='_blank';a.rel='noopener noreferrer';li.appendChild(a);list.appendChild(li);
 }if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',connect);else connect();
 })();</script><?php
},99);
