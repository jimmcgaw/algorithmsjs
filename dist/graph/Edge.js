"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Edge: represents an edge that can be added to a Graph instance.
 */

var Edge = function Edge(startVertex, endVertex) {
  _classCallCheck(this, Edge);

  this.startVertex = startVertex;
  this.endVertex = endVertex;
};

exports.default = Edge;