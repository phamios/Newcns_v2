<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('image_helper'))
{
    
    /**
     * Upload Image 
     * @param type $mypath
     * @param type $filename
     * @return null
     */
    function do_upload_image($mypath, $filename) {
        $config['upload_path'] = $mypath;
        $config['allowed_types'] = 'gif|jpg|png|bmp';
        $config['max_size'] = '80000';
        $this->load->library('upload', $config);
        $this->upload->initialize($config);
        if (isset($filename)) {
            if (!$this->upload->do_upload($filename)) {
                $error = array('error' => $this->upload->display_errors());
                return NULL;
            } else {
                $data = array('upload_data' => $this->upload->data());
                $imagename = $this->upload->file_name;
                $this->resize_image($mypath, 'thumb_' . $imagename, $imagename);
                return $imagename;
            }
        } else {
            echo $this->upload->display_errors();
        }
    }
    
    
    /**
     * Resize Image for Upload Images 
     * @param type $dir
     * @param type $new_name
     * @param type $image
     */
    function resize_image($dir, $new_name, $image) {
        $img_cfg_thumb['image_library'] = 'gd2';
        $img_cfg_thumb['source_image'] = "./" . $dir . "/" . $image;
        $img_cfg_thumb['maintain_ratio'] = TRUE;
        $img_cfg_thumb['new_image'] = $new_name;
        $img_cfg_thumb['width'] = 300;
        $img_cfg_thumb['height'] = 200;
        $this->load->library('image_lib');
        $this->image_lib->initialize($img_cfg_thumb);
        $this->image_lib->resize();
    }
}