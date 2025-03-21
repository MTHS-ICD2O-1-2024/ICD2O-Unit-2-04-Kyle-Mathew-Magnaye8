// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculatePermeterAndAreaOfRectangle() {
  // input
  const baseOfTriangle = parseInt(
    document.getElementById("Base-of-triangle").value
  )
  const heightOfRectangle = parseInt(
    document.getElementById("Height-of-triangle").value
  )

  // process
  const areaOfRectangle = (lengthOfRectangle * heightOfRectangle) / 2

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + areaOfTriangle + " cm²"
}
