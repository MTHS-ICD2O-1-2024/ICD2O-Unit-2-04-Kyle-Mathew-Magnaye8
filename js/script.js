// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Jun 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const baseOfTriangle = parseInt(
    document.getElementById("Base-of-triangle").value
  )
  const heightOfTriangle = parseInt(
    document.getElementById("Height-of-triangle").value
  )

  // process
  const areaOfTriangle = (baseOfTriangle * heightOfTriangle) / 2

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + areaOfTriangle + " cm²"
}
