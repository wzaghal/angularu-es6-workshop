'use strict';
import './home.scss';
import template from './home.html';
import {HomeController as controller} from './home.controller';

let HomeComponent = function () {
    return {
      template,
      controller,
      restrict: 'E'
    };
  };

  export {HomeComponent};