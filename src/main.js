
import $ from 'jquery';
import {Galactic} from './galactic-calc';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
  // import './styles.css';

$(document).ready(function() {
  $("#form1").submit(function(event){
    event.preventDefault();
    let earthling = new Galactic($("input#earthAge1").val());
    console.log(earthling);
    earthling.mercuryAgeCalc();
    earthling.mercuryLECalc();
    $("#returnAge1").text('You are ' + earthling.mercuryAge + ' years old on Mercury.');
    $("#returnMessage1").text(earthling.mercuryReturn);
  });

  $("#form2").submit(function(event){
    event.preventDefault();
    let earthling2 = new Galactic($("input#earthAge2").val());
    console.log(earthling2);
    earthling2.venusAgeCalc();
    earthling2.venusLECalc();
    $("#returnAge2").text('You are ' + earthling2.venusAge + ' years old on Venus.');
    $("#returnMessage2").text(earthling2.venusReturn);
  });

  $("#form3").submit(function(event){
    event.preventDefault();
    let earthling3 = new Galactic($("input#earthAge3").val());
    console.log(earthling3);
    earthling3.marsAgeCalc();
    earthling3.marsLECalc();
    $("#returnAge3").text('You are ' + earthling3.marsAge + ' years old on Mars.');
    $("#returnMessage3").text(earthling3.marsReturn);
  });


  $("#form4").submit(function(event){
    event.preventDefault();
    let earthling4 = new Galactic($("input#earthAge4").val());
    console.log(earthling4);
    earthling4.jupiterAgeCalc();
    earthling4.jupiterLECalc();
    $("#returnAge4").text('You are ' + earthling4.jupiterAge + ' years old on Jupiter.');
    $("#returnMessage4").text(earthling4.jupiterReturn);
  });




});
