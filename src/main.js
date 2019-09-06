
import $ from 'jquery';
import {Galactic} from './galactic-calc';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  // import './styles.css';

$(document).ready(function() {
  $("#form1").submit(function(event){
    event.preventDefault();
    console.log("worked1");
    let earthling = new Galactic($("input#earthAge").val());
    console.log(earthling);
    earthling.mercuryAgeCalc();
    earthling.mercuryLECalc();
    $("#returnAge").text('You are ' + earthling.mercuryAge + ' years old on Mercury.');
    $("#returnMessage").text(earthling.mercuryReturn);
  });
});
