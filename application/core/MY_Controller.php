<?php if (!defined('BASEPATH'))  exit('No direct script access allowed');

/*
| -------------------------------------------------------------------
|  My_Controller
| -------------------------------------------------------------------
| Description:
|
| This class will extend the CI_Controller class
|
*/

class MY_Controller extends CI_Controller {

    var $_page;
    var $_module;

    function __construct() {
        parent::__construct();

        // Set default theme
        $this->_module = "default";
        $this->_page   = "default";

        log_message('debug', 'The Client : MY_Controller class loaded');
    }
}