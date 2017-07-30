<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Default extends MY_Controller {
    function __construct() {
        parent::__construct();

        // load helpers and libraries 
        $this->load->helper( array('url') );
        log_message('debug', 'CI My Admin : Dashboard class loaded');
    }
}